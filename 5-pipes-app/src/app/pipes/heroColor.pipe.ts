import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/hero.interface";



@Pipe({
  name: 'heroColor',
})

export class HeroColorPipe implements PipeTransform {

    //aoparezca el nombre del color en vez del numero
    transform(value:Color):string {
        return Color[value];
    }
}
  
