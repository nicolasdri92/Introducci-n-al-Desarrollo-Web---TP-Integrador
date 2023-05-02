import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MateriaComponent } from './materia.component';

@NgModule({
  declarations: [MateriaComponent],
  imports: [SharedModule],
})
export class MateriaModule {}
