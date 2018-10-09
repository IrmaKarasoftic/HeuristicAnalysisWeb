import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  spinnerDashOffset: number;
  @Output() showMe: EventEmitter<any> = new EventEmitter();

  visible = false;

  constructor(
    private spinnerService: SpinnerService,
  ) {
    this.spinnerDashOffset = 0;
  }

  ngOnInit() {
  }
  show() {
    this.visible = true;
    this.spinnerService.iVisibleSubject.next(true);
  }

  hide() {
    this.visible = false;
    this.spinnerService.iVisibleSubject.next(false);
  }

  isVisible() {
    return this.visible;
  }

  onClick() {
    this.showMe.emit();
  }

}
