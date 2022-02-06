import { IQueryStringParcer, IQueryParams } from '../../../interfaces/QueryStringParcer'

export class QueryStringParser implements IQueryStringParcer {
    getQueryStringFromObject(params: IQueryParams): string {
        return Object.keys(params)
            .map((k) => `${k}=${params[k]}`)
            .join("&");
    }

    parseQueryStringToObject(queryStr: string): IQueryParams {
        throw new Error("Method 'parseQueryStringToObject' should be implemented")
    }
}