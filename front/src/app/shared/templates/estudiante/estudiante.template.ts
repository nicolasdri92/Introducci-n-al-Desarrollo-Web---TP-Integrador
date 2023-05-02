import { Component, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '@core/services/data.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.template.html',
  styleUrls: ['./estudiante.template.scss'],
})
export class EstudianteTemplate {
  estudianteForm: FormGroup;
  materias: any = [];

  constructor(
    public dialogRef: MatDialogRef<EstudianteTemplate>,
    private formBuilder: FormBuilder,
    private _data: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.estudianteForm = this.formBuilder.group({
      dni: [data?.dni, Validators.required],
      apellido: [data?.apellido, Validators.required],
      nombre: [data?.nombre, Validators.required],
      fecha: [data?.fecha, Validators.required],
      nacionalidad: [data?.nacionalidad, Validators.required],
      telefono: data?.telefono,
      email: data?.email,
      materia: data?.materia,
    });
  }

  ngOnInit(): void {
    this._data.getMaterias().subscribe((res: any) => (this.materias = res));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
