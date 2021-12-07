import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticulosPrevioComponent } from './components/articulos-previo/articulos-previo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { A1Component } from './components/articulos/a1/a1.component';
import { A2Component } from './components/articulos/a2/a2.component';
import { A3Component } from './components/articulos/a3/a3.component';
import { A4Component } from './components/articulos/a4/a4.component';
import { A5Component } from './components/articulos/a5/a5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArticulosPrevioComponent,
    GaleriaComponent,
    FormularioComponent,
    TablaComponent,
    A1Component,
    A2Component,
    A3Component,
    A4Component,
    A5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
