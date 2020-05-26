import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomValidatorsService } from './custom-validators.service';
import { RegexValidatorDirective } from './regex-validator.directive';
import { RequiredIfOtherDirective } from '../Validators/required-if-other.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ RegexValidatorDirective, RequiredIfOtherDirective ],
  exports:      [ RegexValidatorDirective, RequiredIfOtherDirective ],
  providers:    [ CustomValidatorsService ]
})
export class CustomValidatorsModule { }
