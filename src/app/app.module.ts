import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LecturaInformacionComponent } from './lectura-informacion/lectura-informacion.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaCoincidenciasComponent } from './busqueda-coincidencias/busqueda-coincidencias.component';
import { ConstruccionEnsamblesComponent } from './construccion-ensambles/construccion-ensambles.component';
import { GeneracionInformeComponent } from './generacion-informe/generacion-informe.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturaInformacionComponent,
    HeaderComponent,
    BusquedaCoincidenciasComponent,
    ConstruccionEnsamblesComponent,
    GeneracionInformeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
