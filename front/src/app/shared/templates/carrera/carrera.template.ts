import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.template.html',
  styleUrls: ['./carrera.template.scss'],
})
export class CarreraTemplate {
  carreraForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CarreraTemplate>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) {
    this.carreraForm = this.formBuilder.group({
      nombre: [_data?.nombre, Validators.required],
      tipo: [_data?.tipo, Validators.required],
      modalidad: [_data?.modalidad, Validators.required],
      duracion: [_data?.duracion, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
