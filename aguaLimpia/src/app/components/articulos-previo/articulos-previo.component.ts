import { Component, OnInit } from '@angular/core';
import listaArticulos from '../../../assets/json/articulos.json';

@Component({
  selector: 'app-articulos-previo',
  templateUrl: './articulos-previo.component.html',
  styleUrls: ['./articulos-previo.component.css']
})
export class ArticulosPrevioComponent implements OnInit {
  Articulos: any = listaArticulos;

  constructor() { }

  ngOnInit(): void {
  }

}
