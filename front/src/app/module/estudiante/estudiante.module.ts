import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EstudianteComponent } from './estudiante.component';

@NgModule({
  declarations: [EstudianteComponent],
  imports: [SharedModule],
})
export class EstudianteModule {}
