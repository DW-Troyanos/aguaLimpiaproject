import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormularioService } from 'src/app/services/formulario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public formularioService: FormularioService) { }

  ngOnInit(): void {
  }
  
  Submit(userlogin:NgForm){
    this.formularioService.onSubmit(userlogin);
  }
}
