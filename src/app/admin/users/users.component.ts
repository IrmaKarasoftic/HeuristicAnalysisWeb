import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Group, User } from './users.model';
import { DialogComponent } from '../../shared/dialog/dialog.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('UpdateUserDialog') public updateUserDialog: DialogComponent;
  @ViewChild('DeleteUserDialog') public deleteUserDialog: DialogComponent;
  @ViewChild('ManageUsersDialog') public manageUsersDialog: DialogComponent;

  users: any = [];
  constructor(private userService: UserService) { }
  groups: Group[] = [];
  tabindex = 1;
  ngOnInit() {
    this.userService.searchUsers()
      .subscribe(
        (res) => {
          this.users = res;
        },
        (err: any) => {
          if (err.errors) {
            console.log(err.errors[0]);
          } else if (err.hasError) {
            console.log(err.message);
          }
        }
      );

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

  openUpdateUserDialog() {
    this.updateUserDialog.show();
  }

  closeUpdateUserDialog() {
    this.updateUserDialog.hide();
  }

  openDeleteUserDialog() {
    this.deleteUserDialog.show();
  }

  closeDeleteUserDialog() {
    this.deleteUserDialog.hide();
  }

  openManageUsersDialog() {
    this.manageUsersDialog.show();
  }

  closeManageUsersDialog() {
    this.manageUsersDialog.hide();
  }

}
