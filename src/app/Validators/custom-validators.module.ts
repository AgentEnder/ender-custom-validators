import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomValidatorsService } from './custom-validators.service';
import { RegexValidatorDirective } from './regex-validator.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ RegexValidatorDirective ],
  exports:      [ RegexValidatorDirective ],
  providers:    [ CustomValidatorsService ]
})
export class CustomValidatorsModule { }
