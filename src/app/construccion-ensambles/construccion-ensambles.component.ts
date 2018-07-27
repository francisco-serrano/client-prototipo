import { Component, OnInit } from '@angular/core';
import { ConexionBackendService } from '../services/conexion-backend/conexion-backend.service';
import { ConexionDialogService } from '../services/conexion-dialog/conexion-dialog.service';

@Component({
  selector: 'app-construccion-ensambles',
  templateUrl: './construccion-ensambles.component.html',
  styleUrls: ['./construccion-ensambles.component.css']
})
export class ConstruccionEnsamblesComponent implements OnInit {

  resultadoConstruccion: string;

  constructor(
    private dialog: ConexionDialogService,
    private backend: ConexionBackendService
  ) {}

  ngOnInit() {
  }

  construccionEnsambles() {
    this.backend.construccionEnsambles().subscribe(data => {
      this.resultadoConstruccion = data;
      this.dialog.openDialog('Los ensambles construidos se almacenaron en el archivo ensambles.abc');
    });
  }

}
