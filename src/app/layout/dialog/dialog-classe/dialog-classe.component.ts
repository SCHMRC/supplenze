import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-classe',
  templateUrl: './dialog-classe.component.html',
  styleUrls: ['./dialog-classe.component.scss']
})
export class DialogClasseComponent {



  constructor(
    public dialogRef: MatDialogRef<DialogClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
