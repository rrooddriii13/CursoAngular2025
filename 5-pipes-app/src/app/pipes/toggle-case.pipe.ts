import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase', //    'fernando' | toggleCase
})
export class ToggleCasePipe implements PipeTransform {

    // true -> toUpperCase
    // false -> toLowerCase
    //transforma el valor que recibe y lo devuelve modificado
    transform(value: string, upper: boolean = true): string {
        return upper ? value.toUpperCase() : value.toLowerCase();
    }
}