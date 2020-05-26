import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomValidatorsService } from './Validators/custom-validators.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  exports: [AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [CustomValidatorsService]
})
export class AppModule { }
