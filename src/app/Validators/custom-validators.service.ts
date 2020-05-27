import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl, NgForm, FormGroup } from "@angular/forms";

@Injectable()
export class CustomValidatorsService {
  constructor() { }

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

  /**
   * Valid if all blank, or self is filled.
   * @param other Must have a 'value' property to work
   */
  public requiredIfAny(form: NgForm | FormGroup | AbstractControl): ValidatorFn {
    return (control: AbstractControl) => {

      if (!('controls' in form)){
        return {invalidFormGroup: true}
      }

      // grab flags stating if any value has been set on each control
      const controls = Object.entries(form.controls).map(x => x[1])
      const values = controls.map(x => !!(x.value && x.value.length)) // !! converts to bool.
      // new Set gets distinct values
      const valueSet = new Set(values);
      const allSame = valueSet.size == 1;

      return (allSame && values[0] == false)
        || (control.value && control.value.length > 0) ? null : { requiredFieldMissing: true }
    }
  }
}