import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../../assets/json/articulos.json';

@Component({
  selector: 'app-a5',
  templateUrl: './a5.component.html',
  styleUrls: ['./a5.component.css']
})
export class A5Component implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
