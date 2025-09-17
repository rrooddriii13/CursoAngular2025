import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-buscar-input',
  imports: [],
  templateUrl: './buscar-input.component.html',
})
export class BuscarInputComponent {
  placeholder = input('Buscar');
  value = output<string>();
}
