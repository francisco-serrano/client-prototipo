import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from '../services/conexion-backend/conexion-backend.service';
import { ConexionDialogService } from '../services/conexion-dialog/conexion-dialog.service';

@Component({
  selector: 'app-busqueda-coincidencias',
  templateUrl: './busqueda-coincidencias.component.html',
  styleUrls: ['./busqueda-coincidencias.component.css']
})
export class BusquedaCoincidenciasComponent implements OnInit {

  resultadoBusqueda: string;
  mostrarSpinner: boolean;
  archivoReferencia: string;
  genomaAnalizar: string;
  archivoSalida: string;
  runningLocal: boolean;

  constructor(
    private dialog: ConexionDialogService,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  busquedaCoincidencias() {
    this.mostrarSpinner = true;
    this.backend.busquedaCoincidencias(this.archivoReferencia, this.genomaAnalizar, this.archivoSalida).subscribe(data => {
      const json = JSON.parse(data);
      this.resultadoBusqueda = json.mensaje;
      this.runningLocal = json.runningLocal;
      this.dialog.openDialog(json.mensaje);
      this.mostrarSpinner = false;
    });
  }

}
