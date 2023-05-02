import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regimen'
})
export class RegimenPipe implements PipeTransform {

  transform(value: number): unknown {
    return value == 0
      ? 'Anual'
      : value == 1
      ? 'Primer Cuatrimestre'
      : 'Segundo Cuatrimestre';
  }

}
