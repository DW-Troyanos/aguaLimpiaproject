import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticulosPrevioComponent } from './components/articulos-previo/articulos-previo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArticulosPrevioComponent,
    GaleriaComponent,
    FormularioComponent,
    ArticulosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
