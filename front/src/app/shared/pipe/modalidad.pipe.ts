import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalidad',
})
export class ModalidadPipe implements PipeTransform {
  transform(value: boolean): string {
    return value == false ? 'A distancia' : 'Presencial';
  }
}
