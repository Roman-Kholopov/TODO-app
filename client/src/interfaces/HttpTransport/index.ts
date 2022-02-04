interface IDeepObject {
    [key: string]: [key: string]
}

interface IObject {
    [key: string]: string
}

export interface IHttpTransportParams {
        url: string,
        method: 'get' | 'post' | 'patch' | 'delete'
        baseURL?: string,
        transformRequest?: (data: object, headers: object) => IDeepObject
        transformResponse?: (data: object) => IDeepObject,
        headers?: IObject,
        params?: IObject,
        // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
        paramsSerializer?: (param: object) => string
        data?: IDeepObject,
        timeout?: number, // default is `0` (no timeout)
        withCredentials?: boolean, // false default
        // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
        // This will set an `Authorization` header, overwriting any existing
        // `Authorization` custom headers you have set using `headers`.
        // Please note that only HTTP Basic auth is configurable through this parameter.
        // For Bearer tokens and such, use `Authorization` custom headers instead.
        auth?: IObject,
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        //   browser only: 'blob'
        responseType?: string, // json default
        responseEncoding?: string, // utf8 default
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
    get(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse>
    post(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse>
    delete(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse>
    patch(param: Omit<IHttpTransportParams, 'method'>): Promise<IHttpTransportResponse>
}
