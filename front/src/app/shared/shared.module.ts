import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CarreraTemplate } from './templates/carrera/carrera.template';
import { MateriaTemplate } from './templates/materia/materia.template';
import { EstudianteTemplate } from './templates/estudiante/estudiante.template';
import { ConfirmTrashTemplate } from './templates/confirm-trash/confirm-trash.template';
import { TipoCarreraPipe } from './pipe/tipo-carrera.pipe';
import { ModalidadPipe } from './pipe/modalidad.pipe';
import { RegimenPipe } from './pipe/regimen.pipe';

const MODULE = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MaterialModule,
];
const COMPONENT = [
  FooterComponent,
  HeaderComponent,
  CarreraTemplate,
  MateriaTemplate,
  EstudianteTemplate,
  ConfirmTrashTemplate,
];
const PIPE = [TipoCarreraPipe, ModalidadPipe, RegimenPipe];

@NgModule({
  declarations: [COMPONENT, PIPE],
  imports: [MODULE],
  exports: [MODULE, COMPONENT, PIPE],
})
export class SharedModule {}
