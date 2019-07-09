import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationsService } from 'src/app/core/services/applications.service';

@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss'],
})
export class DiagramsComponent implements OnInit {
  selectedApp: any;
  appVersions: any;
  selectedVersion: any;
  showGraph = false;
  LineChart: Chart;
  data: any = {
    Answers: null,
    DiagramModel: null,
  };
  constructor(public applicationService: ApplicationsService, private router: Router) {}
  public applications: Array<any> = [];
  ngOnInit() {
    this.getAllApps();
  }

  getAllApps() {
    this.applicationService.searchApplications().subscribe(
      res => {
        this.applications = res;
        console.log(res);
        this.appVersions = this.applications[0].Versions;

        this.selectedApp = this.applications[0].Id;
        this.selectedVersion = this.appVersions[0].Id;
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
      }
    );
  }

  onAppSelect($event) {
    this.selectedApp = $event;
    const app = this.applications.find(x => x.Id === Number(this.selectedApp));
    this.appVersions = app.Versions;
    this.selectedVersion = this.appVersions[0].Id;
    this.showGraph = false;
  }

  onVersionSelect($event) {
    this.selectedVersion = $event;
    this.showGraph = false;
  }

  goToDiagrams() {
    this.router.navigate(['/admin/diagrams', this.selectedVersion]);
  }
}
