import { Component } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';
import { BuscarInputComponent } from '../../components/buscar-input/buscar-input.component';

@Component({
  selector: 'app-by-capital-page',
  imports: [BuscarInputComponent, PaisListaComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
