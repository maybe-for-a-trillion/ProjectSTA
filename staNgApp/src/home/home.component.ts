import {Component, OnDestroy, OnInit} from "@angular/core";
import {User} from "../shared/user";
import {Credentials} from '../shared/credentials';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent {
  public snackBar: MatSnackBar;
  public loggedInUser: User;
  public credentials: Credentials = new Credentials();

  constructor(private router: Router) {
    this.router = router;
  }

  public login(): void {
    if (this.credentials.username && this.credentials.password) {
      const user = new User();
      user.username = this.credentials.username;
      this.loggedInUser = user;
    } else {
      this.snackBar.open("Failed to login user!", undefined, {
        duration: 3000,
        verticalPosition: "top"
      });
    }
  }
}
