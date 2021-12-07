import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../../assets/json/articulos.json';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
