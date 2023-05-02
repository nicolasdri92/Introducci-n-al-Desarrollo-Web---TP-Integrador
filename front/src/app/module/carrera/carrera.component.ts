import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '@core/services/data.service';
import { CarreraTemplate } from '@shared/templates/carrera/carrera.template';
import { ConfirmTrashTemplate } from '@shared/templates/confirm-trash/confirm-trash.template';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss'],
})
export class CarreraComponent implements OnInit {
  title: string = 'carreras';
  displayedColumns: string[] = [
    'select',
    'nombre',
    'tipo',
    'modalidad',
    'duracion',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  isSelected: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private data: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.data
      .getCarreras()
      .subscribe((res: any) => (this.dataSource.data = res));
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

  addCarrera(): void {
    this.dialog
      .open(CarreraTemplate)
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined) this.data.addCarrera(result);
      });
  }

  editCarrera(): void {
    this.dialog
      .open(CarreraTemplate, {
        data: this.selection.selected[0],
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this.data.editCarrera(this.selection.selected[0]._id, result);
      });
  }

  deleteCarrera(): void {
    this.dialog
      .open(ConfirmTrashTemplate, {
        data: this.selection.selected,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result != undefined)
          this.selection.selected.map((item) => {
            this.data.deleteCarrera(item._id);
          });
      });
  }
}
