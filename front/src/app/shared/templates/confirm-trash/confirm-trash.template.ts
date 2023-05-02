import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-trash',
  templateUrl: './confirm-trash.template.html',
  styleUrls: ['./confirm-trash.template.scss'],
})
export class ConfirmTrashTemplate {
  constructor(
    public dialogRef: MatDialogRef<ConfirmTrashTemplate>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
