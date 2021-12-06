import { Component, OnInit } from '@angular/core';
import listaSuscriptores from '../../../assets/json/suscriptores.json';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  Suscriptores: any = listaSuscriptores;

  constructor() { }

  ngOnInit(): void {
  }

}
