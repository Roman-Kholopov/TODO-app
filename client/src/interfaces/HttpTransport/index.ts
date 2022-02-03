interface IDeepObject {
    [key: string]: [key: string]
}

interface IObject {
    [key: string]: string
}

export interface IHttpTransportParams {
    path: string
    bodyParams?: IDeepObject
    queryParams?: IObject
}

export interface IHttpTransportResponse {
    data: IDeepObject | any
    status: number
    statusText: string
    headers: IObject
    config: IDeepObject
    request: IDeepObject
}

export interface IHttpTransport {
    get(params: IHttpTransportParams): Promise<IHttpTransportResponse>
    post(params: IHttpTransportParams): Promise<IHttpTransportResponse>
}
