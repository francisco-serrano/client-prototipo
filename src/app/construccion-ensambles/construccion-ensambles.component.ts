import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion.component';
import { ConexionBackendService } from '../services/conexion-backend.service';

@Component({
  selector: 'app-construccion-ensambles',
  templateUrl: './construccion-ensambles.component.html',
  styleUrls: ['./construccion-ensambles.component.css']
})
export class ConstruccionEnsamblesComponent implements OnInit {

  resultadoConstruccion: string;

  constructor(
    private dialog: MatDialog,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  construccionEnsambles() {
    this.backend.construccionEnsambles().subscribe(data => {
      this.resultadoConstruccion = data;
      this.openDialog(data);
    });
  }

  private openDialog(resultado: string) {
    this.dialog.open(DialogConfirmacionComponent, {
      'disableClose': true,
      'autoFocus': false,
      'data': {
        'texto': 'Los ensambles construidos se almacenaron en el archivo ensambles.abc'
      }
    });
  }
}
