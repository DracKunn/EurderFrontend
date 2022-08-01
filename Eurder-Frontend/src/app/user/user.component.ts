import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Users[] = [];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
