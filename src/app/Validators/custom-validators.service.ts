import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";

@Injectable()
export class CustomValidatorsService {
  constructor() {}

  public regexValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      return pattern.test(control.value) ? null : { invalidInput: true };
    };
  }

  /**
   * Valid if other is blank, or self is filled.
   * @param other Must have a 'value' property to work
   */
  public requiredIfOtherValidator(other: AbstractControl): ValidatorFn {
        return (control: AbstractControl) => {
            return (other == null || other.value == null || other.value == "")
                || (control.value && control.value.length > 0) ? null : { requiredFieldMissing: true }
        }
    }
}