import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(
    private userService: UserService, 
    private router: Router,
    private snackbar:MatSnackBar
    ) { }

  ngOnInit() {
    if (localStorage.getItem("X-TOKEN") !== null)
      this.router.navigateByUrl("admin")
  }

  login() {
    this.userService.login(this.username, this.password)
      .then((message) => {
        message === undefined ? this.router.navigateByUrl("admin") :
        alert(message)
      });
  }
}
