import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from '../services/conexion-backend/conexion-backend.service';
import { ConexionDialogService } from '../services/conexion-dialog/conexion-dialog.service';

@Component({
  selector: 'app-lectura-informacion',
  templateUrl: './lectura-informacion.component.html',
  styleUrls: ['./lectura-informacion.component.css']
})
export class LecturaInformacionComponent implements OnInit {

  resultadoLectura: string;
  mostrarSpinner: boolean;

  constructor(
    private backend: ConexionBackendService,
    private dialog: ConexionDialogService
  ) {}

  ngOnInit() {
  }

  lecturaInformacion() {
    this.mostrarSpinner = true;
    this.backend.lecturaInformacion().subscribe(data => {
      this.resultadoLectura = data;
      this.dialog.openDialog('La lectura de la información se almacenó en el archivo lectura.abc');
      this.mostrarSpinner = false;
    });
  }

}
