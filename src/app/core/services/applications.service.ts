import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
@Injectable()
export class ApplicationsService extends BaseService {
    userId: any;

    constructor(private http: HttpClient) {
        super(http);
    }

    searchApplications() {
        return this.getAll('Applications');
    }

    createApplication(application: any) {
        return this.insert('Applications', application);
    }

    updateApplication(application: any) {
        return this.update('Applications', application.Id, application);
    }

    deleteApplications(id: number) {
        return this.delete('Applications', id);
    }

    createVersion(application: any) {
        return this.insert('Versions', application);
    }

    updateVersion(application: any) {
        return this.update('Versions', application.Id, application);
    }

    deleteVersion(id: number) {
        return this.delete('Versions', id);
    }

}
