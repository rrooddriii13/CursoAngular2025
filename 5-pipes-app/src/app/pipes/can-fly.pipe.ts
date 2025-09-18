import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFyPipe implements PipeTransform {

	//en vez de recibir un true o false tiene que devolver un string de puede volar o no piede vpolar
    transform(value:boolean):'Puede volar ' |'No puede volar' {
        return value ? 'Puede volar ' : 'No puede volar';
    }

}