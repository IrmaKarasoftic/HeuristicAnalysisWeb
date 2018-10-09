import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Group, User } from './users.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) { }
  users: User[] = [];
  groups: Group[] = [];
  tabindex = 1;
  a1: User = {
    firstName: 'Irma',
    lastName: 'Karasoftic',
    occupation: 'Student',
    dateOfBirth: new Date()
  };
  a2: User = {
    firstName: 'Irma',
    lastName: 'Dzemidzic',
    occupation: 'Developer',
    dateOfBirth: new Date()
  };
  g1: Group = {
    groupName: 'Name1',
    numberOfUsers: 3
  };
  g2: Group = {
    groupName: 'Name2',
    numberOfUsers: 23
  };

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

    // this.users.push(this.a1);
    // this.users.push(this.a2);
    // this.users.push(this.a1);

    // this.groups.push(this.g1);
    // this.groups.push(this.g2);
  }
}
