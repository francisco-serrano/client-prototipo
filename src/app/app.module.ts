import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LecturaInformacionComponent } from './lectura-informacion/lectura-informacion.component';
import { BusquedaCoincidenciasComponent } from './busqueda-coincidencias/busqueda-coincidencias.component';
import { ConstruccionEnsamblesComponent } from './construccion-ensambles/construccion-ensambles.component';
import { GeneracionInformeComponent } from './generacion-informe/generacion-informe.component';
import { HeaderComponent } from './header/header.component';
import { DialogConfirmacionComponent } from './dialog-confirmacion/dialog-confirmacion.component';

import { ConexionBackendService } from './services/conexion-backend/conexion-backend.service';
import { ConexionDialogService } from './services/conexion-dialog/conexion-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    LecturaInformacionComponent,
    BusquedaCoincidenciasComponent,
    ConstruccionEnsamblesComponent,
    GeneracionInformeComponent,
    HeaderComponent,
    DialogConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConexionBackendService,
    ConexionDialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogConfirmacionComponent
  ]
})
export class AppModule { }
