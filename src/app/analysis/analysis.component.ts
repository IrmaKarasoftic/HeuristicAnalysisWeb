import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);

    function autosize() {
      var el = this;
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }


    $("#dodajOdgovor").click(function () {
      $("#odgovori").append("<ul class='list-group-item pitanjeOdgovor'> <div class='pitanje'>Opis problema</div> <div class='odgovor opisProblema'> <textarea rows='3'></textarea></div>    </ul>    <ul class='list-group-item pitanjeOdgovor'>       <div class='pitanje'>Nivo problema</div>      <div class='odgovor'>        <li class=''>          <label class='radio-inline'>            <input type='radio' name='optradio'>Nizak          </label>          <label class='radio-inline'>            <input type='radio' name='optradio'>Srednji          </label>          <label class='radio-inline'>            <input type='radio' name='optradio'>Visok          </label>        </li>      </div>    </ul>    <ul class='list-group-item pitanjeOdgovor'>      <div class='pitanje'>Lokacija problema</div>      <div class='odgovor opisProblema'>        <textarea rows='2'></textarea>      </div>    </ul>    <ul class='list-group-item pitanjeOdgovor'>      <div class='pitanje'>Preporuka za poboljšanje</div>      <div class='odgovor opisProblema'>        <textarea rows='3'></textarea>      </div>      <br>    </ul>");
    });
  }

}
