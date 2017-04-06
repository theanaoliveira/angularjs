import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles:[
    `
      .highlight{
        background-color: yellow;
        font-weight: bold
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url:string = 'https://github.com/theanaoliveira';
  cursoAngular:boolean = true;
  urlImage = 'http://lorempixel.com/400/200/';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor(){
    return 1;    
  }

  getCurtirCurso(){
    return true;
  }

  clickButton(){
    alert('click');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
