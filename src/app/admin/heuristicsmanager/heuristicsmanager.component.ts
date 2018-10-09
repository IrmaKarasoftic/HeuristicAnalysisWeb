import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heuristics',
  templateUrl: './heuristicsmanager.component.html',
  styleUrls: ['./heuristicsmanager.component.css']
})
export class HeuristicsComponent implements OnInit {
  constructor() {}
  public heuristics: Array<string> = [];
  ngOnInit() {
    this.heuristics.push('pitanje1', 'pitanje2', 'pitanje3', 'pitanje4', 'pitanje5');
  }
}
