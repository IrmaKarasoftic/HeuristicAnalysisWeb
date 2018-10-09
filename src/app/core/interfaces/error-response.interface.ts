import { IResponse } from './response.interface';

export interface ErrorResponse extends IResponse {
    errors: string[];
}
