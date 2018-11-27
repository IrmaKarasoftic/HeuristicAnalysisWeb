import { Component, OnInit, ViewChild } from '@angular/core';
import { Application } from '../application';
import { ApplicationsService } from '../../core/services/applications.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { VersionsService } from '../../core/services/versions.service';
import { AnalysisService } from '../../core/services/analysis.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @ViewChild('CreateVersionDialog') public createVersionDialog: DialogComponent;
  @ViewChild('UpdateVersionDialog') public updateVersionDialog: DialogComponent;
  @ViewChild('DeleteVersionDialog') public deleteVersionDialog: DialogComponent;
  @ViewChild('CreateApplicationDialog') public createApplicationDialog: DialogComponent;
  @ViewChild('UpdateApplicationDialog') public updateApplicationDialog: DialogComponent;
  @ViewChild('DeleteApplicationDialog') public deleteApplicationDialog: DialogComponent;
  @ViewChild('AnalysisDetails') public analysisDetailsDialog: DialogComponent;

  defaultSelectedVersion: any = {
    Id: null,
    VersionName: '',
    Date: new Date(),
    ApplicationId: null
  };
  selectedVersion: any = {
    Id: null,
    VersionName: '',
    Date: new Date(),
    ApplicationId: null
  };
  applications: Application[] = [];
  selectedApplication: any = {
    Id: null,
    Name: '',
    Url: ''
  };
  defaultSelectedApplication: any = {
    Id: null,
    Name: '',
    Url: ''
  };
  analysis: any;

  constructor(private applicationService: ApplicationsService, private analysisService: AnalysisService,
    private versionService: VersionsService) { }

  ngOnInit() {
    this.getAllApps();
  }

  getAllApps() {
    this.applicationService.searchApplications()
      .subscribe(
        (res) => {
          this.applications = res;
          this.selectedVersion = JSON.parse(JSON.stringify(this.defaultSelectedVersion));
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
  

  getAnalysisById(id) {
    this.analysisService.getAnalysisById(id)
      .subscribe(
        res => {
          if (res) {
            this.analysis = res;
            console.log( this.analysis);
          }
        },
        (err) => {
          if (err.errors) {
            console.log(err.errors[0]);
          } else if (err.hasError) {
            console.log(err.message);
          }
        }
      );
  }

  createApplication() {
    this.applicationService.createApplication(this.selectedApplication).subscribe(
      (res) => {
        this.getAllApps();
        this.closeCreateApplicationDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeCreateApplicationDialog();
      }
    );
  }

  createVersion() {
    this.selectedVersion.ApplicationId = this.selectedApplication.Id;
    this.applicationService.createVersion(this.selectedVersion).subscribe(
      (res) => {
        this.getAllApps();
        this.closeCreateVersionDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeCreateVersionDialog();
      }
    );
  }

  updateApplication() {
    this.applicationService.updateApplication(this.selectedApplication).subscribe(
      (res) => {
        this.getAllApps();
        this.closeUpdateApplicationDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeUpdateApplicationDialog();
      }
    );
  }

  deleteApplication() {
    this.applicationService.deleteApplications(this.selectedApplication.Id).subscribe(
      (res) => {
        this.getAllApps();
        this.closeDeleteApplicationDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeDeleteApplicationDialog();
      }
    );
  }


  updateVersion() {
    this.versionService.updateVersion(this.selectedVersion).subscribe(
      (res) => {
        this.getAllApps();
        this.updateVersionDialog.hide();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.updateVersionDialog.hide();

      }
    );
  }

  deleteVersion() {
    this.versionService.deleteVersion(this.selectedVersion.Id).subscribe(
      (res) => {
        this.getAllApps();
        this.updateVersionDialog.hide();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.updateVersionDialog.hide();
      }
    );
  }
  setSelectedApplicationToDefault(): any {
    this.selectedApplication = JSON.parse(JSON.stringify(this.defaultSelectedApplication));
  }

  setSelectedVersionToDefault(): any {
    this.selectedVersion = JSON.parse(JSON.stringify(this.defaultSelectedVersion));
  }

  openCreateApplicationDialog() {
    this.setSelectedApplicationToDefault()
    this.createApplicationDialog.show();
  }

  openUpdateApplicationDialog(application: any) {
    this.selectedApplication = JSON.parse(JSON.stringify(application));
    this.updateApplicationDialog.show();
  }

  openDeleteApplicationDialog(application) {
    this.selectedApplication = application;
    this.deleteApplicationDialog.show();
  }

  openAnalysisDetailsDialog(version) {
    this.getAnalysisById(version.AnalysisId);
    this.analysisDetailsDialog.show();
  }

  openCreateVersionDialog(application) {
    this.selectedApplication = application;
    this.setSelectedVersionToDefault()
    this.createVersionDialog.show();
  }

  closeCreateVersionDialog() {
    this.createVersionDialog.hide();
    this.setSelectedVersionToDefault()
  }

  closeAnalysisDetailsDialog() {
    this.analysisDetailsDialog.hide();
    this.analysis = null;
  }

  closeUpdateApplicationDialog() {
    this.selectedApplication.hide();
    this.setSelectedApplicationToDefault()
  }

  closeDeleteApplicationDialog() {
    this.selectedApplication.hide();
    this.setSelectedApplicationToDefault()
  }
  closeCreateApplicationDialog() {
    this.createApplicationDialog.hide();
    this.setSelectedApplicationToDefault()
  }

  openUpdateVersionDialog(version: any) {
    this.selectedVersion = JSON.parse(JSON.stringify(version));
    this.updateVersionDialog.show();
  }

  closeUpdateVersionDialog() {
    this.setSelectedVersionToDefault();
    this.updateVersionDialog.hide();
  }

  openDeleteVersionDialog(version) {
    this.selectedVersion = JSON.parse(JSON.stringify(version));
    this.deleteVersionDialog.show();
  }

  closeDeleteVersionDialog() {
    this.deleteVersionDialog.hide();
    this.setSelectedVersionToDefault();
  }
}