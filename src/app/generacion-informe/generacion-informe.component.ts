import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';
import { ConexionBackendService } from '../services/conexion-backend.service';

@Component({
  selector: 'app-generacion-informe',
  templateUrl: './generacion-informe.component.html',
  styleUrls: ['./generacion-informe.component.css']
})
export class GeneracionInformeComponent implements OnInit {

  private resultadoGeneracion: string;

  constructor(
    private dialog: MatDialog,
    private backend: ConexionBackendService
  ) { }

  ngOnInit() {
  }

  generacionInformes() {
    this.backend.generacionInformes().subscribe(data => {
      this.resultadoGeneracion = data;
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
