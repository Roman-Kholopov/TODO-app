interface IDeepObject {
    [key: string]: [key: string]
}

interface IObject {
    [key: string]: string
}

export interface IHttpTransportParams {
    path: string
    bodyParams: IDeepObject
    queryParams: IObject
}

export interface IHttpTransport {
    get(params: IHttpTransportParams): any
    post(params: IHttpTransportParams): any
}
