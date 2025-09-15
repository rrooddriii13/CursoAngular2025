import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Personajes {
	id: number;
	nombre: string;
	poder: number;
}

@Component({
	selector: 'app-dragonballPag',
	imports: [],
	templateUrl: './dragonballPag.component.html',
	styleUrl: './dragonballPag.component.css',
})
export class DragonballComponentPag {

	nombre = signal('');
	poder = signal(0);

	personajes = signal<Personajes[]>([
		{ id: 1, nombre: 'Goku', poder: 9001 },
		// { id: 2, nombre: 'Vegeta', poder: 8000 },
		// { id: 4, nombre: 'Yamcha', poder: 500 },
		// { id: 3, nombre: 'Piccolo', poder: 3000 },
	]);

	//lo hacemos con [class.text-danger]="powerClasses['text-danger']"
	// powerClasses = computed(() => {
	//   return {
	//     'text-danger': true,
	//   };
	// });

	anadirPersonaje() {
		//validaciones si no hay nombre o poder o poder es 0 no hace nada
		if (!this.nombre() || !this.poder() || this.poder() <= 0) {
		return;
		}

		const newCharacter: Personajes = {
			id: this.personajes().length + 1,
			nombre: this.nombre(),
			poder: this.poder(),
		};

		this.personajes.update((list) => [...list, newCharacter]);
		this.resetFields();
	}

	resetFields() {
		this.nombre.set('');
		this.poder.set(0);
	}
}
