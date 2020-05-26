import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomValidatorsService } from './custom-validators.service';
import { RegexValidatorDirective } from './regex-validator.directive';
import { RequiredIfOtherDirective } from '../Validators/required-if-other.directive';
import { RequireIfAnyDirective } from './require-if-any.directive';
import { RealtimeValidateDirective } from './realtime-validate.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ RegexValidatorDirective, RequiredIfOtherDirective, RequireIfAnyDirective, RealtimeValidateDirective ],
  exports:      [ RegexValidatorDirective, RequiredIfOtherDirective, RequireIfAnyDirective, RealtimeValidateDirective ],
  providers:    [ CustomValidatorsService ]
})
export class CustomValidatorsModule { }
