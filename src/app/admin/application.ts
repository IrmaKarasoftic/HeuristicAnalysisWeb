export class Application {
    Id: number;
    versions: Version[];
    Name: string;
    url: string;
    expanded: boolean;
    flipped: boolean;
}

export class Version {
    id: number;
    versionName: string;
}
