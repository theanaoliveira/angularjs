import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [CursosComponent],
  exports:[
    CursosComponent
  ],
})
export class CursosModule { }
