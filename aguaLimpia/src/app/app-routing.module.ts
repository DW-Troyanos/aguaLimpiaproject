import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosPrevioComponent } from './components/articulos-previo/articulos-previo.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component:ArticulosPrevioComponent},
  {path:'articulo', component:ArticulosComponent},
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
