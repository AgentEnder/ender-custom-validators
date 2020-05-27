import { Directive, HostBinding, Self, OnDestroy } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'form:[RealtimeValidate]'
})
export class RealtimeValidateDirective implements OnDestroy {
  private subscription: Subscription;
  
  constructor(@Self() private ngForm: NgForm) { 
    this.ngForm.valueChanges.subscribe(x=>{
      this.recursivelyUpdateValidation(this.ngForm);
    })
  }

  recursivelyUpdateValidation(el: NgForm | AbstractControl){
    if (Object.entries(el).some(x=>x[0] == 'form' || x[0] == 'controls')){
      let f = el as NgForm;
      Object.entries(f.controls).forEach(element => {
        this.recursivelyUpdateValidation(element[1]);
      });
    } else {
      let control = el as AbstractControl;
      control.updateValueAndValidity({emitEvent: false});
    }
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
