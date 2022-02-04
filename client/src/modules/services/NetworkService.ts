import { IHttpTransport, IHttpTransportParams, IHttpTransportResponse } from '../../interfaces/HttpTransport'
import { AxiosTransport } from '../../modules/transports/HttpTransport'

// get from .env
const DEFAULT_URL = 'http://localhost:8000'
//mock
const axios = {
    create(params: any) {
    }
}

export class NetworService {
    private readonly _transport: IHttpTransport

    constructor(transport: IHttpTransport) {
        this._transport = transport;
    }

    async send(params: IHttpTransportParams): Promise<IHttpTransportResponse> {
        // Live it as reference
        // const { method, ...rest } = params
        // return await this._transport[method](rest);
        return await this._transport.process(params);
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