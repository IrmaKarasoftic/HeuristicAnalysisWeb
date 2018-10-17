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

    updateApplications(application: any) {
        return this.update('Applications', application.Id, application);
    }

    deleteApplications(id: number) {
        return this.delete('Applications', id);
    }

}
