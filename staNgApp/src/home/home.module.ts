import {NgModule, Inject} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatSnackBarModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule {
  constructor(@Inject(MatSnackBarModule) public data: any) { }
}
