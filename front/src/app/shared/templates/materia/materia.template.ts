import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '@core/services/data.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.template.html',
  styleUrls: ['./materia.template.scss'],
})
export class MateriaTemplate {
  materiaForm: FormGroup;
  carreras: any = [];

  constructor(
    public dialogRef: MatDialogRef<MateriaTemplate>,
    private formBuilder: FormBuilder,
    private _data: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.materiaForm = this.formBuilder.group({
      nombre: [data?.nombre, Validators.required],
      regimen: [data?.regimen, Validators.required],
      hora: [data?.hora, Validators.required],
      anio: [data?.anio, Validators.required],
      carrera: [data?.carrera._id, Validators.required],
    });
  }

  ngOnInit(): void {
    this._data.getCarreras().subscribe((res: any) => (this.carreras = res));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
