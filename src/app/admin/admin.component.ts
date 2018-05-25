import { Component, OnInit } from '@angular/core';
import { Application } from './application';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
  ]
})
export class AdminComponent implements OnInit {
  aplikacije: Application[] = [];
  a1: Application = {
    appId: 1,
    appName:"Aplikacija 1",
    url:"https://getbootstrap.com/docs/4.0/components/badge/",
    expanded:false,
    versions: [
      {
        id: 1,
        versionName: "A1v1"
      },
      {
        id: 2,
        versionName: "A1v2"
      },
      {
        id: 3,
        versionName: "A1v3"
      },
    ],
  };
  a2: Application = {
    appId: 2,
    appName:"Aplikacija 2",
    expanded:false,
    url:"https://getbootstrap.com/docs/4.0/content/tables/",
    versions: [
      {
        id: 1,
        versionName: "A2v1"
      },
      {
        id: 2,
        versionName: "A2v2"
      },
    ],
  };

  constructor() { }
 

  ngOnInit() {
    this.aplikacije.push(this.a1);
    this.aplikacije.push(this.a2);
  }
  public expand(item) {
    item.expanded = !item.expanded;
  }
}
