import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogConfirmacionComponent } from '../../dialog-confirmacion/dialog-confirmacion.component';

@Injectable({
  providedIn: 'root'
})
export class ConexionDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(textoMostrar: string) {
    this.dialog.open(DialogConfirmacionComponent, {
      'disableClose': true,
      'autoFocus': true,
      'data': {
        'texto': textoMostrar
      }
    });
  }
}
