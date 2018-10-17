import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseService } from './base.service';
@Injectable()
export class UserService extends BaseService {
    userId: any;
    public soundOn: BehaviorSubject<boolean>;
    public balanceSubject: BehaviorSubject<number>;
    public unbalacedTechCount: BehaviorSubject<number>;
    public userBusy: boolean;

    constructor(
        private http: HttpClient,
    ) {
        super(http);
        this.soundOn = new BehaviorSubject(null);
        this.balanceSubject = new BehaviorSubject(null);
        this.unbalacedTechCount = new BehaviorSubject(0);
    }

    searchUsers() {
        return this.getAll('User');
    }

    searchGroups() {
        return this.getAll('UserGroups');
    }
}
