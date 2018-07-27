import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';
import { ConexionBackendService } from '../services/conexion-backend.service';

@Component({
  selector: 'app-lectura-informacion',
  templateUrl: './lectura-informacion.component.html',
  styleUrls: ['./lectura-informacion.component.css']
})
export class LecturaInformacionComponent implements OnInit {

  resultadoLectura: string;

  constructor(
    private dialog: MatDialog,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  lecturaInformacion() {
    this.backend.lecturaInformacion().subscribe(data => {
      this.resultadoLectura = data;
      this.openDialog(data);
    });
  }

  private openDialog(resultado: string) {
    this.dialog.open(DialogConfirmacionComponent, {
      'disableClose': true,
      'autoFocus': false,
      'data': {
        'texto': 'La lectura de la información se almacenó en el archivo lectura.abc'
      }
    });
  }

}
