import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosService } from "app/cursos/cursos.service";

@NgModule({
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [CursosComponent],
  exports:[
    CursosComponent
  ],
  providers:[CursosService],
})
export class CursosModule { }
