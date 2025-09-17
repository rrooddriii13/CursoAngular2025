import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'country-buscar-input',
  imports: [],
  templateUrl: './buscar-input.component.html',
})
export class BuscarInputComponent {
	placeholder = input('Buscar');
	value = output<string>();
	initialValue = input<string>();
	tiempoDeEspera= input(800);

	//linkedSignal nos permite iniciar una señal con una función -o tipo de proceso
	//despues de realizar el proceso/funcion podemos trabajar con el como sifuera una señal normal
	//linkedSignal para manejar el valor del input -que refleja el valor del input
	//inicializo con el valor inicial si existe o cadena vacía
	inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

	efectoConEspera = effect((onCleanup) => {
		const valor = this.inputValue();

		//configuro un temporizador para emitir el valor después del tiempo de espera
		const temporizador = setTimeout(() => {
			this.value.emit(valor);
		}, this.tiempoDeEspera());

		//cada vez que se ejecute el efecto, limpio el timeout anterior

		onCleanup(() => {
			clearTimeout(temporizador);
		});
	});

}
