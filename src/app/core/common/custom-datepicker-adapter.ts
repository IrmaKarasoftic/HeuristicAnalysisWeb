import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDatePickerAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return date ? {
      year: new Date(date).getFullYear(),
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate()
    } : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(Date.UTC(date.year, date.month - 1, date.day, 0, 0, 0)) : null;
  }
}
