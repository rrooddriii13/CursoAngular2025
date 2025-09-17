import { Component, inject, linkedSignal, signal } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';
import { BuscarInputComponent } from '../../components/buscar-input/buscar-input.component';
import { ServicioPais } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  imports: [BuscarInputComponent, PaisListaComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
	onSearch(value: string) {
		console.log({ value });
	}

	/*
	
	// countryResource = resource({
	//   request: () => ({ query: this.query() }),
	//   loader: async ({ request }) => {
	//     if (!request.query) return [];

	//     return await firstValueFrom(
	//       this.countryService.searchByCapital(request.query)
	//     );
	//   },
	// });

	// isLoading = signal(false);
	// isError = signal<string | null>(null);
	// countries = signal<Country[]>([]);

	// onSearch(query: string) {
	//   if (this.isLoading()) return;

	//   this.isLoading.set(true);
	//   this.isError.set(null);

	//   this.countryService.searchByCapital(query).subscribe({
	//     next: (countries) => {
	//       this.isLoading.set(false);
	//       this.countries.set(countries);
	//     },
	//     error: (err) => {
	//       this.isLoading.set(false);
	//       this.countries.set([]);
	//       this.isError.set(err);
	//     },
	//   });
	// }
	*/
	

	// Inyecto ActivatedRoute para leer parámetros de la URL
	//para la ruta acriva
	activatedRoute = inject(ActivatedRoute);

	// Leo el parámetro 'capital' de la URL
	//si no existe, asigno una cadena vacía
	//si existe, lo asigno a queryParam
	queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

	router = inject(Router);//para navegar
	countryService = inject(ServicioPais);
	//query = signal('');
	query = linkedSignal(() => this.queryParam);

	countryResource = rxResource({
		request: () => ({ query: this.query() }),
		loader: ({ request }) => {
			//console.log({ request: request.query });
			if (!request.query) return of([]);
			//si hay vaklor en el query, navego a la ruta con el query como parámetro
			this.router.navigate(['/country/by-capital'], {
				queryParams: { query: request.query },
			});

			//llamo al servicio para buscar por capital
			//retorno el observable que devuelve el servicio

			return this.countryService.buscarPorCapital(request.query);
		},
	});
}
