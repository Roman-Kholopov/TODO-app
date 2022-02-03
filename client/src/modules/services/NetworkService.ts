import { IHttpTransport, IHttpTransportParams } from '../../interfaces/HttpTransport'
import { AxiosTransport } from '../../modules/transports/HttpTransport'

// get from .env
const DEFAULT_URL = 'http://localhost:8000'
//mock
const axios = {
    create(params: any) {
    }
}

interface ISendParams extends IHttpTransportParams {
    method: 'get' | 'post'
}

export class NetworService {
    private readonly _transport: IHttpTransport

    constructor(transport: IHttpTransport) {
        this._transport = transport;
    }

    async send(params: ISendParams) {
        const { path, queryParams, bodyParams, method } = params
        return await this._transport[method]({ path, queryParams, bodyParams });
    }
}

const axiosTransport = new AxiosTransport(
    axios.create({
        baseURL: DEFAULT_URL || 'http://localhost:8000',
        // timeout: 1000,
        headers: { Authorisation: "foobar" },
    })
);


class Todo extends NetworService {
    constructor() {
        super(axiosTransport);
    }

    async get() {
        //... тут надо что-то сделать
    }

    async getList() {
        //...тут надо что-то сделать
    }
}