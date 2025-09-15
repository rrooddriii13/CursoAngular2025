import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contador',
  imports: [RouterLink],
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
	public contador: number = 0;

	contadorSenal = signal(0);

	incrementar() {
		this.contador++;
		
		//this.contadorSenal.set(this.contador);
		//asi mejor pq no depende del valor actual
		this.contadorSenal.update( valor => valor + 1 );
	}

	decrementar() {
		this.contador--;
		this.contadorSenal.update( valor => valor - 1 );

	}

	resetear() {
		this.contador = 0;
		//valor señal a 0
		this.contadorSenal.set(0);
	}	
}
