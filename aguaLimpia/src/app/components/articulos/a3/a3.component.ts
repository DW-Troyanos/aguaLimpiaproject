import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../../assets/json/articulos.json';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
