import {JsonWebToken} from './jwt.interface';

export interface ILoginResponseInterface {
  token: JsonWebToken;
  emailConfirmed: boolean;
  initialPaymentCompleted: boolean;
  uniqueStamp: string;
  termsOfServiceAcceptedTimestamp: Date;
  validTermsOfServiceStartDate: Date;
}
