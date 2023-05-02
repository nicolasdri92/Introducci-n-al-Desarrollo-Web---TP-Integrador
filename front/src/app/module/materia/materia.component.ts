import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '@core/services/data.service';
import { MateriaTemplate } from '@shared/templates/materia/materia.template';
import { ConfirmTrashTemplate } from '@shared/templates/confirm-trash/confirm-trash.template';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss'],
})
export class MateriaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  title: string = 'materias';
  displayedColumns: string[] = [
    'select',
    'nombre',
    'regimen',
    'hora',
    'anio',
    'carrera',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  isSelected: boolean = false;
  carreras: any = [];
  carreraModel: string = '';
  regimenModel: string = '';
  anioModel: string = '';

  constructor(
    private cdRef: ChangeDetectorRef,
    private _data: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._data
      .getMaterias()
      .subscribe((res: any) => (this.dataSource.data = res));
    this._data.getCarreras().subscribe((res: any) => (this.carreras = res));
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

  addMateria(): void {
    this.dialog
      .open(MateriaTemplate)
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined) this._data.addMateria(result);
      });
  }

  editMateria(): void {
    this.dialog
      .open(MateriaTemplate, {
        data: this.selection.selected[0],
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this._data.editMateria(this.selection.selected[0]._id, result);
      });
  }

  deleteMateria(): void {
    this.dialog
      .open(ConfirmTrashTemplate, {
        data: this.selection.selected,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this.selection.selected.map((item) => {
            this._data.deleteMateria(item._id);
          });
      });
  }

  onSubmit(): void {
    let params = new HttpParams();

    if (this.carreraModel != '')
      params = params.append('carrera', this.carreraModel);
    if (this.anioModel != '') params = params.append('anio', this.anioModel);
    if (this.regimenModel != '')
      params = params.append('regimen', this.regimenModel);

    this._data
      .getMaterias(params)
      .subscribe((res: any) => (this.dataSource.data = res));
  }

  onNoClick(): void {
    this.carreraModel = '';
    this.anioModel = '';
    this.regimenModel = '';

    this._data
      .getMaterias()
      .subscribe((res: any) => (this.dataSource.data = res));
  }
}
