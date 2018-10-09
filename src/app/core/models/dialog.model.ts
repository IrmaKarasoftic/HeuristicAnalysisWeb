export class DialogModel {

    constructor() {
    }

    submitButtonName: string;
    submitCallback: ($event) => any;
    submitButtonClass: string;
    closeButtonName: string;
    closeCallback: ($event) => any;
    title: string;
    footer: string;
    message: string;
    minusIcon: boolean;
    paymentAmount: number;
    errorMessage: string[];
    contactMessage: string;
}
