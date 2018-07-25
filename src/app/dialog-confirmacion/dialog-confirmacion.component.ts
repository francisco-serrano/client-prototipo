import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-confirmacion',
  templateUrl: './dialog-confirmacion.component.html',
  styleUrls: ['./dialog-confirmacion.component.css']
})
export class DialogConfirmacionComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmacionComponent>
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
