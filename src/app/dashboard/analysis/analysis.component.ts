import { Component, OnInit } from '@angular/core';
import { Answer } from './analysis.model';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  answers: Answer[] = [];

  a1: Answer = {
    opisProblema: 'Opis1',
    lokacijaProblema: 'Lokacija1',
    nivoProblema: 1,
    preporukaZaPoboljsanje: 'Preporuka1'
  };
  default: Answer = {
    opisProblema: '',
    lokacijaProblema: '',
    nivoProblema: 1,
    preporukaZaPoboljsanje: ''
  };
  constructor() { }

  ngOnInit() {
    this.answers.push(this.a1);
  }
  public AddAnswer() {
    this.answers.push(this.default);
  }

}
