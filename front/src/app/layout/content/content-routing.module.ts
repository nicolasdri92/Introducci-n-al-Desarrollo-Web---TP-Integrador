import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from '@module/carrera/carrera.component';
import { DashboardComponent } from '@module/dashboard/dashboard.component';
import { EstudianteComponent } from '@module/estudiante/estudiante.component';
import { MateriaComponent } from '@module/materia/materia.component';

const routes: Routes = [
  {
    path: 'carreras',
    component: CarreraComponent,
    loadChildren: () =>
      import('@module/carrera/carrera.module').then((m) => m.CarreraModule),
  },
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () =>
      import('@module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'estudiantes',
    component: EstudianteComponent,
    loadChildren: () =>
      import('@module/estudiante/estudiante.module').then(
        (m) => m.EstudianteModule
      ),
  },
  {
    path: 'materias',
    component: MateriaComponent,
    loadChildren: () =>
      import('@module/materia/materia.module').then((m) => m.MateriaModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
