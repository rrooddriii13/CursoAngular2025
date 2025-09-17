import { Component, inject, signal } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';
import { BuscarInputComponent } from '../../components/buscar-input/buscar-input.component';
import { ServicioPais } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [BuscarInputComponent, PaisListaComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(ServicioPais);
  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      return this.countryService.buscarPorNombre(request.query);
    },
  });
}
