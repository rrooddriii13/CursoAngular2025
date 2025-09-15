import { Component, input } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interfacer';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
})
export class PersonajeListComponent {
  personajes = input.required<Personaje[]>();
  nombre = input.required<string>();
}