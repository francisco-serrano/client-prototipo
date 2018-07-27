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

  constructor(
    private dialog: ConexionDialogService,
    private backend: ConexionBackendService
  ) { }

  ngOnInit() {
  }

  generacionInformes() {
    this.backend.generacionInformes().subscribe(data => {
      this.resultadoGeneracion = data;
      this.dialog.openDialog('Los informes generados se almacenaron en el archivo ensambles.abc');
    });
  }

}
