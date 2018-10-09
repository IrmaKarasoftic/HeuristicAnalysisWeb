export interface IRoute {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export interface IDashboardRoute {
    facilitation: IRoute[];
}
export interface IFaqRoute {
    faq: IRoute[];
}
