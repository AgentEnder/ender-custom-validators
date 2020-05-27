import { Component, VERSION, ViewChild } from '@angular/core';
import { AppModule } from './app.module';
import { CustomValidatorsModule } from './Validators/custom-validators.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  exports: any[];
  testText: string;
  @ViewChild('f', {static: true}) f: NgForm;

  constructor(){
    let t = getModuleExports(CustomValidatorsModule);
    this.exports = t[0]//.map(x => x.name );
    console.dir(t);
  }

  updateFormValidity(){
    this.f.form.updateValueAndValidity()
    Object.entries(this.f.controls).forEach(x=>x[1].updateValueAndValidity())
  }
}

function getModuleExports(angularModule: any): any[]|null {
  let annotations = getAnnotations(angularModule);
  return annotations ? annotations.map(x => x && x.exports) : [];
}

declare let Reflect: any;
function getAnnotations(typeOrFunc: any): any[]|null {
  // Prefer the direct API.
  if ((<any>typeOrFunc).annotations) {
    let annotations = (<any>typeOrFunc).annotations;
    if (typeof annotations === 'function' && annotations.annotations) {
      annotations = annotations.annotations;
    }
    return annotations;
  }

  // API of tsickle for lowering decorators to properties on the class.
  if ((<any>typeOrFunc).decorators) {
    return convertTsickleDecoratorIntoMetadata((<any>typeOrFunc).decorators);
  }

  // API for metadata created by invoking the decorators.
  if (Reflect && Reflect.getOwnMetadata) {
    return Reflect.getOwnMetadata('annotations', typeOrFunc);
  }
  return null;
}


function convertTsickleDecoratorIntoMetadata(decoratorInvocations: any[]): any[] {
  if (!decoratorInvocations) {
    return [];
  }
  return decoratorInvocations.map(decoratorInvocation => {
    const decoratorType = decoratorInvocation.type;
    const annotationCls = decoratorType.annotationCls;
    const annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
    return new annotationCls(...annotationArgs);
  });
}