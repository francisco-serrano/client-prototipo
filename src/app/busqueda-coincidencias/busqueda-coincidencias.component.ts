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

  constructor(
    private dialog: ConexionDialogService,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  busquedaCoincidencias() {
    this.mostrarSpinner = true;
    this.backend.busquedaCoincidencias().subscribe(data => {
      this.resultadoBusqueda = data;
      this.dialog.openDialog('Las coincidencias encontradas se almacenaron en el archivo coincidencias.abc');
      this.mostrarSpinner = false;
    });
  }

}
