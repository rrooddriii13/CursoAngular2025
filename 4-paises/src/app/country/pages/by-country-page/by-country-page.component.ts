import { Component, inject, linkedSignal, signal } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';
import { BuscarInputComponent } from '../../components/buscar-input/buscar-input.component';
import { ServicioPais } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [BuscarInputComponent, PaisListaComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(ServicioPais);

    activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  //query = signal('');
  // Inyecto ActivatedRoute para leer parámetros de la URL
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

    query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: request.query,
        },
      });

      return this.countryService.buscarPorNombre(request.query);
    },
  });
}
