import { Component, OnInit, ViewChild } from '@angular/core';
import { Application } from '../application';
import { ApplicationsService } from '../../core/services/applications.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { VersionsService } from '../../core/services/versions.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @ViewChild('UpdateVersionDialog') public updateVersionDialog: DialogComponent;
  @ViewChild('DeleteVersionDialog') public deleteVersionDialog: DialogComponent;
  defaultSelectedVersion: any = {
    Id: null,
    VersionName: '',
    Date: new Date()
  };
  applications: Application[] = [];
  selectedVersion: any;

  constructor(private applicationService: ApplicationsService,
    private versionService: VersionsService) { }

  ngOnInit() {
    this.getAllApps();
  }

  getAllApps() {
    this.applicationService.searchApplications()
      .subscribe(
        (res) => {
          this.applications = res;
          this.selectedVersion = this.defaultSelectedVersion;
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


  updateVersion() {
    this.versionService.updateVersion(this.selectedVersion).subscribe(
      (res) => {
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

  openUpdateVersionDialog(version: any) {
    this.selectedVersion = version;
    this.updateVersionDialog.show();
  }

  closeUpdateVersionDialog() {
    this.selectedVersion = this.defaultSelectedVersion;
    this.updateVersionDialog.hide();
  }

  openDeleteVersionDialog(version) {
    this.selectedVersion = version;
    this.deleteVersionDialog.show();
  }

  closeDeleteVersionDialog() {
    this.deleteVersionDialog.hide();
    this.selectedVersion = this.defaultSelectedVersion;
  }
}