import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlatformModule} from '@angular/cdk/platform';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "../home/home.component";
import { HeaderModule } from "../header/header.module";
import { HomeModule } from "../home/home.module";
import { FooterModule } from "../footer/footer.module";
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlatformModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    MatSnackBarModule,
    AppRoutingModule, // has to be last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
