import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../../assets/json/articulos.json';

@Component({
  selector: 'app-a4',
  templateUrl: './a4.component.html',
  styleUrls: ['./a4.component.css']
})
export class A4Component implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
