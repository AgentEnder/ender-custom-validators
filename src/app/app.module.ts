import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomValidatorsModule } from './Validators/custom-validators.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CustomValidatorsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
