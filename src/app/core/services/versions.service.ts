import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { BaseService } from './base.service';
@Injectable()
export class VersionsService extends BaseService {
    userId: any;

    constructor(private http: HttpClient) {
        super(http);
    }

    searchVersions() {
        return this.getAll('Versions');
    }

    updateVersion(version: any) {
        return this.update('Versions', version.Id, version);
    }

    deleteVersion(id: number) {
        return this.delete('Versions', id);
    }
}
