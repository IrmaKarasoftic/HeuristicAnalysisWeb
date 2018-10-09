export interface IUserInterface {
    id: number;
    uniqueStamp: string;
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    emailConfirmed: boolean;
    initialPaymentCompleted: boolean;
    termsOfServiceAcceptedTimestamp: Date;
    maxUnbalancedTech: number;
    lockoutEnd: Date;
}
