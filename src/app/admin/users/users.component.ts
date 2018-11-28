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
  @ViewChild('CreateUserGroupDialog') public createUserGroupDialog: DialogComponent;
  @ViewChild('DeleteUserGroupDialog') public deleteUserGroupDialog: DialogComponent;
  @ViewChild('UpdateUserGroupDialog') public updateUserGroupDialog: DialogComponent;
  @ViewChild('CreateUserDialog') public createUserDialog: DialogComponent;
  @ViewChild('DeleteUserDialog') public deleteUserDialog: DialogComponent;
  @ViewChild('ManageUsersDialog') public manageUsersDialog: DialogComponent;
  @ViewChild('UpdateUserDialog') public updateUserDialog: DialogComponent;

  users: any = [];
  handleUser: any = {
    UserId: null,
    GroupId: null,
    Assign: false
  };
  groups: Group[] = [];
  tabindex = 1;
  userFilter: any = { Name: '' };
  defaultSelectedUser: any = {
    Id: null,
    FirstName: '',
    LastName: '',
    Name: '',
    Occupation: '',
    DateOfBirth: null,
    Admin: false
  };
  selectedUser: any = {
    Id: null,
    FirstName: '',
    LastName: '',
    Name: '',
    DateOfBirth: null,
    Admin: false
  };

  defaultSelectedUserGroup: any = {
    Id: null,
    GroupName: '',
  };
  selectedUserGroup: any = {
    Id: null,
    GroupName: '',
  };
  groupUsers: any = {
    Id: null,
    Users: null
  };

  constructor(private userService: UserService) { }

  public model: any;
  ngOnInit() {
    this.getAllUsers();
    this.getAllUserGroups();
  }

  getAllUsers() {
    this.userService.searchUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.setSelectedUserToDefault();
          this.setSelectedUserGroupToDefault();
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

  getAllGroupUsers(id) {
    this.userService.getUsersForGroups(id)
      .subscribe(
        (res) => {
          this.groupUsers = res;
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

  createUser() {
    this.userService.createUser(this.selectedUser).subscribe(
      (res) => {
        this.getAllUsers();
        this.closeCreateUserDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeCreateUserDialog();
      }
    );
  }

  updateUser() {

    this.userService.updateUser(this.selectedUser).subscribe(
      (res) => {
        this.getAllUsers();
        this.closeUpdateUserDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeUpdateUserDialog();
      }
    );
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser.Id).subscribe(
      (res) => {
        this.getAllUsers();
        this.closeDeleteUserDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeDeleteUserDialog();
      }
    );
  }

  createUserGroup() {
    this.userService.createUserGroup(this.selectedUserGroup).subscribe(
      (res) => {
        this.getAllUserGroups();
        this.closeCreateUserGroupDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeCreateUserGroupDialog();
      }
    );
  }

  updateUserGroup() {
    this.userService.updateUserGroup(this.selectedUserGroup).subscribe(
      (res) => {
        this.getAllUserGroups();
        this.closeUpdateUserGroupDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeUpdateUserGroupDialog();
      }
    );
  }

  deleteUserGroup() {
    this.userService.deleteUserGroup(this.selectedUserGroup.Id).subscribe(
      (res) => {
        this.getAllUserGroups();
        this.closeDeleteUserGroupDialog();
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
        this.closeDeleteUserGroupDialog();
      }
    );
  }

  assign(user) {
    this.handleUser.Assign = true;
    this.handleUserData(user);
  }

  deassign(user) {
    this.handleUser.Assign = false;
    this.handleUserData(user);
  }

  handleUserData(user) {
    this.handleUser.UserId = user.Id,
      this.handleUser.GroupId = this.selectedUserGroup.Id;
    this.userService.assignUser(this.handleUser)
      .subscribe(
        (res) => {
          var foundIndex = this.groupUsers.Users.indexOf(user);
          this.groupUsers.Users[foundIndex].Assigned = !this.groupUsers.Users[foundIndex].Assigned;
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


  setSelectedUserToDefault(): any {
    this.selectedUser = JSON.parse(JSON.stringify(this.defaultSelectedUser));
  }

  setSelectedUserGroupToDefault(): any {
    this.selectedUserGroup = JSON.parse(JSON.stringify(this.defaultSelectedUserGroup));
  }


  openCreateUserGroupDialog() {
    this.setSelectedUserGroupToDefault();
    this.createUserGroupDialog.show();
  }

  openUpdateUserGroupDialog(userGroup) {
    this.selectedUserGroup = JSON.parse(JSON.stringify(userGroup));
    this.updateUserGroupDialog.show();
  }

  openUpdateUserDialog(user) {
    this.selectedUser = JSON.parse(JSON.stringify(user));
    this.updateUserDialog.show();
  }

  openManageUsersDialog(group) {
    this.selectedUserGroup = JSON.parse(JSON.stringify(group));
    this.getAllGroupUsers(group.Id)
    this.manageUsersDialog.show();
  }

  openDeleteUserDialog(user) {
    this.selectedUser = JSON.parse(JSON.stringify(user));
    this.deleteUserDialog.show();
  }

  openDeleteUserGroupDialog(userGroup) {
    this.selectedUserGroup = JSON.parse(JSON.stringify(userGroup));
    this.deleteUserGroupDialog.show();
  }

  openCreateUserDialog() {
    this.setSelectedUserToDefault();
    this.createUserDialog.show();
  }

  closeCreateUserDialog() {
    this.createUserDialog.hide();
    this.setSelectedUserGroupToDefault();
  }

  closeDeleteUserGroupDialog() {
    this.deleteUserGroupDialog.hide();
    this.setSelectedUserGroupToDefault();
  }

  closeCreateUserGroupDialog() {
    this.createUserGroupDialog.hide();
    this.setSelectedUserToDefault();
  }

  closeUpdateUserDialog() {
    this.updateUserDialog.hide();
    this.setSelectedUserToDefault();
  }

  closeUpdateUserGroupDialog() {
    this.updateUserGroupDialog.hide();
    this.setSelectedUserToDefault();
  }

  closeDeleteUserDialog() {
    this.deleteUserDialog.hide();
    this.setSelectedUserToDefault();
  }

  closeManageUsersDialog() {
    this.manageUsersDialog.hide();
  }

}
