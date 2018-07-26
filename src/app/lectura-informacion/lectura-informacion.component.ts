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

  private resultadoLectura: string;

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

  openDialog(resultado: string) {
    const dialogConfig = new MatDialogConfig();

    // Para que el usuario no pueda cerrar el cuadro de diálogo al clickear afuera
    dialogConfig.disableClose = true;

    // Para que se haga el enfoque en el primer formulario del cuadro de diálogo
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogConfirmacionComponent, dialogConfig);
  }

}
