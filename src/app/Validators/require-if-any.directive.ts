import { Directive, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, NgForm, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidatorsService } from './custom-validators.service';

@Directive({
  selector: '[RequireIfAny]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequireIfAnyDirective, multi: true }]
})
export class RequireIfAnyDirective implements Validator{

  form: NgForm | FormGroup;
  subscription: Subscription;

  @Input('parent') set setForm(value: NgForm | FormGroup){
    this.form = value;
  }

  constructor(private cdr: ChangeDetectorRef, private customValidators: CustomValidatorsService){

  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!this.form){
      return null;
    }
    return this.customValidators.requiredIfAny(this.form)(control);
  }

}
