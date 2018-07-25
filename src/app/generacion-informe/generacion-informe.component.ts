import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';

@Component({
  selector: 'app-generacion-informe',
  templateUrl: './generacion-informe.component.html',
  styleUrls: ['./generacion-informe.component.css']
})
export class GeneracionInformeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // Para que el usuario no pueda cerrar el cuadro de diálogo al clickear afuera
    dialogConfig.disableClose = true;

    // Para que se haga el enfoque en el primer formulario del cuadro de diálogo
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogConfirmacionComponent, dialogConfig);
  }

}
