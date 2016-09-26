import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {

  userService: UserService;
  
  users: User[];
  selectedUser: User;

  constructor(userSrvc: UserService) { 
    this.userService = userSrvc;
  }

  ngOnInit() {
    // this.users = this.userService.getMockUsers();

    const users$ = this.userService.getUsers();
    users$.subscribe(
      userList => this.users = userList,
      () => console.log("error occurred during user retrieval"),
      () => console.log("getUsers() service call completed")
    );
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

}
