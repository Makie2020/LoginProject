import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({ templateUrl: 'admin.component.html' })

export class AdminComponent implements OnInit {
  loading = false;
  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
}