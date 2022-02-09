import {
  IHttpTransport,
  IHttpTransportParams,
  IHttpTransportResponse,
} from "../../interfaces/HttpTransport";
import { AxiosTransport } from "../../modules/transports/HttpTransport";

// get from .env
const DEFAULT_URL = "http://localhost:8000";
const BACKEND_URL = "https://jsonplaceholder.typicode.com/todos";

//mock
const axios = {
  create(params: any) {},
};

export class NetworkService {
  private readonly _transport: IHttpTransport;

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
    baseURL: BACKEND_URL || "http://localhost:8000",
    // timeout: 1000,
    headers: { Authorisation: "foobar" },
  })
);

class Todo extends NetworkService {
  constructor() {
    super(axiosTransport);
  }

  async getTodo() {

    try {
      return await  this.send({method:'get',url:'/api/getTodo'}).then((response) => {
        return response.data;
      });
    } catch (error) {
      return {};
    }
  }

  async getTodoList() {
    try {
      return await this.send({method:'get',url:'/api/getTodo'})
    } catch (error) {
      return [];
    }
  }
}

