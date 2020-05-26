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
    this.exports = t;//.map(x => x.name );
  }

  updateFormValidity(){
    this.f.form.updateValueAndValidity()
  }
}

function getModuleExports(angularModule: any): any[]|null {
  // API of tsickle for lowering decorators to properties on the class.
  if ((<any>angularModule).decorators) {
    return convertTsickleDecoratorIntoMetadata((<any>angularModule).decorators)[0].exports;
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