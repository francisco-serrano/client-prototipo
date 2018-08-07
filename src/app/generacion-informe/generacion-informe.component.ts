import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from '../services/conexion-backend/conexion-backend.service';
import { ConexionDialogService } from '../services/conexion-dialog/conexion-dialog.service';

@Component({
  selector: 'app-generacion-informe',
  templateUrl: './generacion-informe.component.html',
  styleUrls: ['./generacion-informe.component.css']
})
export class GeneracionInformeComponent implements OnInit {

  resultadoGeneracion: string;
  mostrarSpinner: boolean;
  archivo1: string;
  archivo2: string;
  archivo3: string;
  runningLocal: boolean;

  constructor(
    private dialog: ConexionDialogService,
    private backend: ConexionBackendService
  ) { }

  ngOnInit() {
  }

  generacionInformes() {
    this.mostrarSpinner = true;
    this.backend.generacionInformes(this.archivo1, this.archivo2, this.archivo3).subscribe(data => {
      const json = JSON.parse(data);
      this.resultadoGeneracion = json.mensaje;
      this.runningLocal = json.runningLocal;
      this.dialog.openDialog(json.mensaje);
      this.mostrarSpinner = false;
    });
  }

}
