import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

    //value .> array deheroes a ordenar 
    // sortBy: propiedad por la que se va a ordenar (puede ser 'name', 'canFly', 'color', 'creator' o null)

    transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {

        // Si no se indica propiedad de ordenación, retorna el array tal cual
        if (!sortBy) return value;

        switch (sortBy) {
            // Ordena alfabéticamente por nombre
            case 'name':
                return [...value].sort((a,b) => a.name.localeCompare(b.name));
            case 'canFly':
                // Ordena primero los que pueden volar (true), luego los que no (false)
                // Se convierte a número para comparar: true=1, false=0
                return [...value].sort((a,b) => Number(b.canFly) - Number(a.canFly));   
            case 'color':
                // Ordena por color (asumiendo que color es un número)
                // ¡OJO! Aquí no se clona el array, modifica el original
                return value.sort((a, b) => a.color - b.color);
            case 'creator':
                // Ordena por creador (asumiendo que creator es un número)
        
                return [...value].sort((a,b) => a.creator - b.creator);
            default:
                return value;
        }
    }

}