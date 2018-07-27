import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';
import { ConexionBackendService } from '../services/conexion-backend.service';

@Component({
  selector: 'app-busqueda-coincidencias',
  templateUrl: './busqueda-coincidencias.component.html',
  styleUrls: ['./busqueda-coincidencias.component.css']
})
export class BusquedaCoincidenciasComponent implements OnInit {

  resultadoBusqueda: string;

  constructor(
    private dialog: MatDialog,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  busquedaCoincidencias() {
    this.backend.busquedaCoincidencias().subscribe(data => {
      this.resultadoBusqueda = data;
      this.openDialog(data);
    });
  }

  private openDialog(resultado: string) {
    this.dialog.open(DialogConfirmacionComponent, {
      'disableClose': true,
      'autoFocus': false,
      'data': {
        'texto': 'Las coincidencias encontradas se almacenaron en el archivo coincidencias.abc'
      }
    });
  }
}
