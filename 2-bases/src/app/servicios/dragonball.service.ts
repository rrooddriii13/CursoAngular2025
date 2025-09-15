import { effect, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interfacer';

const loadFromLocalStorage = (): Personaje[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  // Creamos una señal con la lista de personajes, cargada desde localStorage
  personajes = signal<Personaje[]>(loadFromLocalStorage());

  // Efecto: cada vez que cambien los personajes, se guardan en localStorage
  guardarEnLocalStorage = effect(() => {
    localStorage.setItem('personajes', JSON.stringify(this.personajes()));
  });

  // Método para añadir un personaje nuevo a la lista
  agregarPersonaje(personaje: Personaje) {
    this.personajes.update((lista) => [...lista, personaje]);
  }
}
