export interface IQueryParams {
    [key: string]: string
}

export interface IQueryStringParcer {
    getQueryStringFromObject(params: IQueryParams): string
    parseQueryStringToObject(queryStr: string): IQueryParams
}
