import { IResponse } from './response.interface';

export interface OkResponse<T> extends IResponse {
    result: T;
}
