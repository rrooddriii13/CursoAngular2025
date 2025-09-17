import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { Gif } from './../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { environment } from '@environments/environment.development';
// import { environment } from '@environments/enviromentviroment';

const GIF_KEY = 'gifs';

const cargarDesdeLocalStorage = () => {
	const gifsGuardados  = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string, gifs[]>
	const gifs = JSON.parse(gifsGuardados );
	console.log(gifs);
	return gifs;
};

// {
//   'goku': [gif1,gif2,gif3],
//   'saitama': [gif1,gif2,gif3],
//   'dragon ball': [gif1,gif2,gif3],
// }

// Record<string, Gif[]>

@Injectable({ providedIn: 'root' })
export class GifService {
	private http = inject(HttpClient);

	gifsTendencia = signal<Gif[]>([]);
	cargandoTendencias = signal(true);
	// [ [gif,gif,gif,], [gif,gif,gif,],[gif,gif,gif,],[gif,gif,gif,] ]
	trendingGifGroup = computed<Gif[][]>(() => {
		const groups = [];
		// Agrupar de 3 en 3
		for (let i = 0; i < this.gifsTendencia().length; i += 3) {
		groups.push(this.gifsTendencia().slice(i, i + 3));
	}

    return groups; //[ [g1,g2,g3],[g4,g5]]
	});

	historialBusqueda = signal<Record<string, Gif[]>>(cargarDesdeLocalStorage());
	clavesHistorial = computed(() => Object.keys(this.historialBusqueda()));

	constructor() {
		this.cargarGifsTendencia();
	}

	guardarEnLocalStorage = effect(() => {
		const historialString = JSON.stringify(this.historialBusqueda());
		localStorage.setItem(GIF_KEY, historialString);
	});

	// Cargar los gifs en tendencia desde la API
  	cargarGifsTendencia() {
		this.http
			.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
				params: {
					api_key: environment.giphyApiKey,
					limit: 20,
				},
			})
			.subscribe((resp) => {
				const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
				this.gifsTendencia.set(gifs);
				this.cargandoTendencias.set(false);
				console.log({ gifs });
			});
	}

	// Buscar gifs en la API y guardarlos en el historial
	buscarGifs(query: string): Observable<Gif[]> {
		return this.http
			.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
				params: {
					api_key: environment.giphyApiKey,
					limit: 20,
					q: query,
				},
			})
			.pipe(
				map(({ data }) => data),
				map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

				// Historial
				tap((items) => {
					this.historialBusqueda.update((history) => ({
						...history,
						[query.toLowerCase()]: items,
					}));
				})
			);

		// .subscribe((resp) => {
		//   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

		//   console.log({ search: gifs });
		//   return gifs;
		// });
	}

	obtenerGifsDeHistorial(query: string): Gif[] {
		return this.historialBusqueda()[query] ?? [];
	}
}
