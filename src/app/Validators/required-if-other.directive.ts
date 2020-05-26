import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidatorsService } from './custom-validators.service';

@Directive({
  selector: '[RequiredIfOtherValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredIfOtherDirective, multi: true }]
})
export class RequiredIfOtherDirective implements Validator {

  @Input('otherControl') other: AbstractControl;

  constructor(private customValidator: CustomValidatorsService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.dir(this.other);
    return this.customValidator.requiredIfOtherValidator(this.other)(control)
  }
}