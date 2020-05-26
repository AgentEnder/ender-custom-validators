import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidatorsService } from './custom-validators.service';

@Directive({
  selector: '[RegexValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RegexValidatorDirective, multi: true }]
})
export class RegexValidatorDirective implements Validator {

  patternExpression: RegExp = /./;
  @Input() set pattern(val){
    this.patternExpression = new RegExp(val);
  };

  constructor(private customValidator: CustomValidatorsService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.regexValidator(this.patternExpression)(control)
  }
}