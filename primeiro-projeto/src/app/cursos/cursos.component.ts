import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos:string[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training/course-status/';
    this.cursos = this.cursosService.getCursos();
    //var service = new CursosService();
  }

  ngOnInit() {
  }

}
