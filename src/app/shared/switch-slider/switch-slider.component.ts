import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-slider',
  templateUrl: './switch-slider.component.html',
  styleUrls: ['./switch-slider.component.scss']
})
export class SwitchSliderComponent implements OnInit {
  @Input() value: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
