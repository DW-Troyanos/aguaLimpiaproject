import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../../assets/json/articulos.json';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
