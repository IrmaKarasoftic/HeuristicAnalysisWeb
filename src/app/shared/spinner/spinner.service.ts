import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService {

  iVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    }

  isVisible(): boolean {
        return this.iVisibleSubject.getValue();
    }

}
