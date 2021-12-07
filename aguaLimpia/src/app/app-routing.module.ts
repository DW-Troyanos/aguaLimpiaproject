import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosPrevioComponent } from './components/articulos-previo/articulos-previo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { A1Component } from './components/articulos/a1/a1.component';
import { A2Component } from './components/articulos/a2/a2.component';
import { A3Component } from './components/articulos/a3/a3.component';
import { A4Component } from './components/articulos/a4/a4.component';
import { A5Component } from './components/articulos/a5/a5.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component:ArticulosPrevioComponent},
  {path:'articulos/articulo1', component:A1Component},
  {path:'articulos/articulo2', component:A2Component},
  {path:'articulos/articulo3', component:A3Component},
  {path:'articulos/articulo4', component:A4Component},
  {path:'articulos/articulo5', component:A5Component},
  {path:'galeria', component:GaleriaComponent},
  {path:'contacto', component:FormularioComponent},
  {path:'suscriptores', component:TablaComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
