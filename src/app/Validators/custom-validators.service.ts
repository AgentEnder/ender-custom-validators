import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class CustomValidatorsService {

  constructor() { }

  public regexValidator(pattern: RegExp): ValidatorFn {
      return (control: AbstractControl) => {
          return pattern.test(control.value) ? null : { invalidInput: true }
      }
  }

}