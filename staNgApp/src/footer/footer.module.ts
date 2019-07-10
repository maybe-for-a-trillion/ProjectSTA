import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [FooterComponent],
  imports: [
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }