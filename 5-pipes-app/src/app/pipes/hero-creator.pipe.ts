import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {

    //recibe un Creator y devuelve un string
    //en vez de recibir 0 y 1  devuelve DC Comics o Marvel Comics
    //si es DC devuelve DC Comics si es Marvel devuelve Marvel Comics
    //q DC es 0 y Marvel es 1
    transform(value: Creator): string {
        return value === Creator.DC ? 'DC Comics' : 'Marvel Comics';
    }
}