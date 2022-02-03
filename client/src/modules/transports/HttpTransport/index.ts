import { IQueryStringParcer } from '../../../interfaces/QueryStringParcer'
import { IHttpTransport, IHttpTransportParams, IHttpTransportResponse } from '../../../interfaces/HttpTransport'
import { QueryStringParser } from '../../parsers/QueryStringParser'

export class HttpTransport implements IHttpTransport {
    // get types from axios
    client: any
    serializer: IQueryStringParcer

    constructor(client: any) {
        this.client = client;
        this.serializer = new QueryStringParser();
    }

    async get(params: IHttpTransportParams): Promise<IHttpTransportResponse> {
        throw new Error("Method 'get' should be implemented")
    }

    async post(params: IHttpTransportParams): Promise<IHttpTransportResponse> {
        throw new Error("Method 'post' should be implemented")
    }
}

export class AxiosTransport extends HttpTransport {
    // get types from axios
    client: any

    constructor(client: any) {
        super(client)
    }

    async get(params: IHttpTransportParams): Promise<IHttpTransportResponse> {
        const { bodyParams, path, queryParams } = params
        const updatedPath = queryParams
            ? `path?${(this.serializer.getQueryStringFromObject(queryParams))}`
            : path;
        return await this.client.get(updatedPath, bodyParams);
    }

    async post(params: IHttpTransportParams): Promise<IHttpTransportResponse> {
        const { bodyParams, path, queryParams } = params
        const updatedPath = queryParams
            ? `path?${(this.serializer.getQueryStringFromObject(queryParams))}`
            : path;
        return await this.client.post(updatedPath, bodyParams);
    }
}
