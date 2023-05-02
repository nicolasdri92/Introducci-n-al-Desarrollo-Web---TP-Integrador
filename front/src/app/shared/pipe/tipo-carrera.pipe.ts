import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoCarrera',
})
export class TipoCarreraPipe implements PipeTransform {
  transform(value: number): string {
    return value == 0
      ? 'Universitaria de Pre-Grado'
      : value == 1
      ? 'Universitaria de Grado'
      : 'Universitaria de Pos-Grado';
  }
}
