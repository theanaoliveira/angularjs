import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos():string[] {
    return ['C#', 'Angular 2', "TypeScript", "HTML5"];
  }

}
