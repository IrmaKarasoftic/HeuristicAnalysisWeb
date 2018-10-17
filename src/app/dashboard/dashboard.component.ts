import { Component, OnInit } from '@angular/core';
import { AdminService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
  ]
})
export class DashboardComponent implements OnInit {
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
}
