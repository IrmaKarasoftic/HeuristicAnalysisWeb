import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../../core/services/applications.service';
import { HeuristicService } from '../../core/services/heuristics.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-analysis-form',
  templateUrl: './createanalysisform.component.html',
  styleUrls: ['./createanalysisform.component.css']
})
export class CreateAnalysisFormComponent implements OnInit {
  selectedApp: any;
  appVersions: any;
  selectedVersion: any;
  groups: any;
  selectedGroup: any;
  constructor(public applicationService: ApplicationsService, public heuristicService: HeuristicService, public userService: UserService) { }
  public applications: Array<any> = [];
  public versions: Array<any> = [];
  public heuristics: Array<any> = [];
  ngOnInit() {
    this.getAllApps();
    this.getAllHeuristics();
    this.getAllUserGroups();
  }

  getAllApps() {
    this.applicationService.searchApplications()
      .subscribe(
        (res) => {
          this.applications = res;
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

  getAllHeuristics() {
    this.heuristicService.searchHeuristics()
      .subscribe(
        (res) => {
          this.heuristics = res;
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

  getAllUserGroups() {
    this.userService.searchGroups()
      .subscribe(
        (res) => {
          this.groups = res;
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
    const app = this.applications.find(x => x.Id == this.selectedApp)
    this.appVersions = app.Versions;
    this.selectedVersion = this.appVersions[0].Id;
  }

  onVersionSelect($event) {
    this.selectedVersion = $event;
  }
}
