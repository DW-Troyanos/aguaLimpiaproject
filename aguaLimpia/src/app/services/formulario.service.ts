import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xwkykkpq',
        { Nombre: email.name, Apellido: email.surname, Teléfono: email.number, Remitente: email.email, Mensaje: email.comments },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
        Swal.fire('Éxito','El correo se ha mandado correctamente','success');
    }
    else{
      Swal.fire('Ooops','Asegurate de haber llenado todos los campos correctamente','error');
    }
  }
}
