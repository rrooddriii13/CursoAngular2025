import { NgClass } from '@angular/common';
import { Component, computed, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interfacer';

interface Personajes {
	id: number;
	nombre: string;
	poder: number;
}

@Component({
	selector: 'app-personaje-add',
	imports: [],
	templateUrl: './personaje-add.component.html',
})
export class PersonajeAddComponent {

	nombre = signal('');
	poder = signal(0);

    nuevoPersonaje = output<Personaje>();



	anadirPersonaje() {
		//validaciones si no hay nombre o poder o poder es 0 no hace nada
		if (!this.nombre() || !this.poder() || this.poder() <= 0) {
		return;
		}

		const nuevoPersonaje: Personajes = {
            id: Math.floor(Math.random() * 1000),
			nombre: this.nombre(),
			poder: this.poder(),
		};

		// this.personajes.update((list) => [...list, nuevoPersonaje]);
        //.emit para emitir el nuevo personaje al padre
        this.nuevoPersonaje.emit(nuevoPersonaje);
		this.resetFields();
	}

	resetFields() {
		this.nombre.set('');
		this.poder.set(0);
	}
}
