import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '@core/services/data.service';
import { EstudianteTemplate } from '@shared/templates/estudiante/estudiante.template';
import { ConfirmTrashTemplate } from '@shared/templates/confirm-trash/confirm-trash.template';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss'],
})
export class EstudianteComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  title: string = 'estudiantes';
  displayedColumns: string[] = [
    'select',
    'dni',
    'apellido',
    'nombre',
    'fecha',
    'nacionalidad',
    'email',
    'telefono',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  isSelected: boolean = false;
  carreras: any = [];
  materias: any = [];
  materiaModel: string = '';
  regimenModel: string = '';

  constructor(
    private cdRef: ChangeDetectorRef,
    private _data: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._data
      .getEstudiantes()
      .subscribe((res: any) => (this.dataSource.data = res));
    this._data.getMaterias().subscribe((res: any) => (this.materias = res));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  addEstudiante(): void {
    this.dialog
      .open(EstudianteTemplate)
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined) this._data.addEstudiante(result);
      });
  }

  editEstudiante(): void {
    this.dialog
      .open(EstudianteTemplate, {
        data: this.selection.selected[0],
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this._data.editEstudiante(this.selection.selected[0]._id, result);
      });
  }

  deleteEstudiante(): void {
    this.dialog
      .open(ConfirmTrashTemplate, {
        data: this.selection.selected,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this.selection.selected.map((item) => {
            this._data.deleteEstudiante(item._id);
          });
      });
  }

  onSubmit(): void {
    let params = new HttpParams();
    if (this.materiaModel != '')
      params = params.append('materia', this.materiaModel);
    if (this.regimenModel != '')
      params = params.append('carrera', this.regimenModel);

    this._data
      .getEstudiantes(params)
      .subscribe((res: any) => (this.dataSource.data = res));
  }

  onNoClick(): void {
    this.materiaModel = '';
    this.regimenModel = '';
    this._data
      .getEstudiantes()
      .subscribe((res: any) => (this.dataSource.data = res));
  }
}
