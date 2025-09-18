import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  // value: array de héroes a filtrar
  // search: texto de búsqueda (string)
  transform(value: Hero[], search: string): Hero[] {
    // Si no hay texto de búsqueda, retorna el array original sin filtrar
    if (!search) return value;

    // Convierte el texto de búsqueda a minúsculas para comparar sin importar mayúsculas/minúsculas
    search = search.toLowerCase();

    // Filtra el array de héroes:
    // Solo incluye aquellos cuyo nombre (en minúsculas) contiene el texto de búsqueda
    return value.filter((hero) => hero.name.toLowerCase().includes(search));
  }
}