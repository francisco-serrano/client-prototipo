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

  resultadoGeneracion: string;

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

  private openDialog(resultado: string) {
    this.dialog.open(DialogConfirmacionComponent, {
      'disableClose': true,
      'autoFocus': false,
      'data': {
        'texto': 'Los informes generados se almacenaron en el archivo ensambles.abc'
      }
    });
  }

}
