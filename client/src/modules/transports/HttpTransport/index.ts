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

    async get(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        throw new Error("Method 'get' should be implemented")
    }

    async post(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        throw new Error("Method 'post' should be implemented")
    }

    async delete(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        throw new Error("Method 'delete' should be implemented")
    }

    async patch(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        throw new Error("Method 'patch' should be implemented")
    }

    async process(param: IHttpTransportParams): Promise<IHttpTransportResponse> {
        throw new Error("Method 'process' should be implemented")
    }
}

export class AxiosTransport extends HttpTransport {
    // get types from axios
    client: any

    constructor(client: any) {
        super(client)
    }

    async process(param: IHttpTransportParams): Promise<IHttpTransportResponse> {
        return await this.client({
            ...param, 
            paramsSerializer: this.serializer.getQueryStringFromObject
        })
    }

    async get(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        const { url, params, ...rest } = param
        const updatedPath = params
            ? `path?${(this.serializer.getQueryStringFromObject(params))}`
            : url;
        return await this.client.get(updatedPath, rest);
    }

    async post(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        const { url, params, ...rest } = param
        const updatedPath = params
            ? `path?${(this.serializer.getQueryStringFromObject(params))}`
            : url;
        return await this.client.post(updatedPath, rest);
    }

    async delete(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        const { url, params, ...rest } = param
        const updatedPath = params
            ? `path?${(this.serializer.getQueryStringFromObject(params))}`
            : url;
        return await this.client.delete(updatedPath, rest);
    }

    async patch(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse> {
        const { url, params, ...rest } = param
        const updatedPath = params
            ? `path?${(this.serializer.getQueryStringFromObject(params))}`
            : url;
        return await this.client.patch(updatedPath, rest);
    }
}
