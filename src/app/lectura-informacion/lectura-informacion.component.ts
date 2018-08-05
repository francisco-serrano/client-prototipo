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
  runningLocal: boolean;
  readsIn1: string;
  readsIn2: string;
  readsOut1: string;
  readsOut2: string;

  constructor(
    private backend: ConexionBackendService,
    private dialog: ConexionDialogService
  ) {}

  ngOnInit() {
  }

  lecturaInformacion() {
    this.mostrarSpinner = true;
    this.backend.lecturaInformacion(this.readsIn1, this.readsIn2, this.readsOut1, this.readsOut2).subscribe(data => {
      const json = JSON.parse(data);
      this.resultadoLectura = json.mensaje;
      this.runningLocal = json.runningLocal;
      this.dialog.openDialog('La lectura de la información se almacenó en el archivo lectura.abc');
      this.mostrarSpinner = false;
    });
  }

}
