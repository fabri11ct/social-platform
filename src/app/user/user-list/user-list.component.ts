import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: any[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.refreshUsers();
  };

  refreshUsers(): void {
    this.UserService.getUsers().subscribe(users => this.users = users);
  }



}
