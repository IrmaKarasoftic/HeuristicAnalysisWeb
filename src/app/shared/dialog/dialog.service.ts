import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DialogService {

    visible: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
    }

    hide() {
        this.visible.next(false);
    }
}
