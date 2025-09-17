import { Component } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';
import { BuscarInputComponent } from '../../components/buscar-input/buscar-input.component';

@Component({
  selector: 'app-by-country-page',
  imports: [BuscarInputComponent, PaisListaComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {}
