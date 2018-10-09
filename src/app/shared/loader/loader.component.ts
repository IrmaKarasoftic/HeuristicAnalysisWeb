import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Output() showChange = new EventEmitter();

  private isShowing = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    if (!this.name) { throw new Error('Spinner must have a \'name\' attribute'); }

    this.loaderService._register(this);
  }

  ngOnDestroy(): void {
    this.loaderService._unregister(this);
  }

  @Input()
  get show(): boolean {
    return this.isShowing;
  }

  set show(val: boolean) {
    this.isShowing = val;
    this.showChange.emit(this.isShowing);
  }

}
