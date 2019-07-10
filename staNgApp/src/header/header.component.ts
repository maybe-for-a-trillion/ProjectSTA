import {Component, OnDestroy, OnInit} from "@angular/core";
import {User} from "../shared/user";
import {AuthService} from "../services/auth.service";
import {Observable, Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../../../shared/styles/header.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly authService: AuthService;
  private readonly snackBar: MatSnackBar;
  private readonly router: Router;
  private logoutSubscription: Subscription;

  public user$: Observable<User>;

  constructor(authService: AuthService, snackBar: MatSnackBar, router: Router) {
    this.authService = authService;
    this.snackBar = snackBar;
    this.router = router;
  }

  ngOnInit(): void {
    this.user$ = this.authService.getUser();
  }

  ngOnDestroy(): void {
    this.logoutSubscription && this.logoutSubscription.unsubscribe();
  }

  public logout(): void {
    this.logoutSubscription = this.authService.logout().subscribe(() => {
      this.router.navigate([""]);
    }, () => {
      this.snackBar.open("There was a problem trying to logout", undefined, {
        duration: 3000,
        verticalPosition: "top"
      });
    });
  }
}
