import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Pais } from '../interfaces/pais.interface';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
	providedIn: 'root',
})
export class ServicioPais {
	private http = inject(HttpClient);

    // Cachés para almacenar resultados de consultas anteriores
	private queryCacheCapital = new Map<string, Pais[]>();
	private queryCachePais = new Map<string, Pais[]>();
	private queryCacheRegion = new Map<Region, Pais[]>();


// Busca países por capital
    buscarPorCapital(query: string): Observable<Pais[]> {
        query = query.toLowerCase(); // Normaliza el query a minúsculas


		// si la consulta ya está en caché, retorna los datos almacenados
		if (this.queryCacheCapital.has(query)) {
			//devuelvo un observable con los datos en caché
			return of(this.queryCacheCapital.get(query) ?? []);
		}

        // Realiza la petición GET a la API usando la capital
        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
            // Mapea la respuesta de la API al modelo interno Pais[]
            map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
			// Almacena el resultado en caché
			tap((countries) => this.queryCacheCapital.set(query, countries)),// Cache the result
            // Maneja errores de la petición
            catchError((error) => {
                console.log('Error fetching ', error);

                // Retorna un error personalizado
                return throwError(
                    () => new Error(`No se pudo obtener países con ese query ${query}`)
                );
            })
        );
    }

	 // Busca países por nombre
    buscarPorNombre(query: string) {
        const url = `${API_URL}/name/${query}`;
        query = query.toLowerCase(); // Normaliza el query

        // si la consulta ya está en caché, retorna los datos almacenados
        if (this.queryCachePais.has(query)) {
            //devuelvo un observable con los datos en caché sinop array vacio
            return of(this.queryCachePais.get(query) ?? []);
        }

        // Realiza la petición GET a la API usando el nombre

        // Realiza la petición GET a la API usando el nombre
        return this.http.get<RESTCountry[]>(url).pipe(
            // Mapea la respuesta al modelo interno
            map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
            tap((countries) => this.queryCachePais.set(query, countries)), // Cache the result
            // Simula un retraso de 2 segundos
            delay(2000), // Simula un retraso de 2 segundos
            // Maneja errores
            catchError((error) => {
                console.log('Error fetching ', error);

                return throwError(
                    () => new Error(`No se pudo obtener países con ese query ${query}`)
                );
            })
        );
    }

    // Busca países por región ->searchByRegion

    buscarByRegion(region: Region) {
        const url = `${API_URL}/region/${region}`;

        if (this.queryCachePais.has(region)) {
        return of(this.queryCachePais.get(region) ?? []);
        }

        return this.http.get<RESTCountry[]>(url).pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap((countries) => this.queryCacheRegion.set(region, countries)),
        catchError((error) => {
            console.log('Error fetching ', error);

            return throwError(
            () => new Error(`No se pudo obtener países con ese query ${region}`)
            );
        })
    );
  }
    // Busca país por código alfa (ej: "ES" para España)
    buscarPorCodigoAlfa(code: string) {
        const url = `${API_URL}/alpha/${code}`;

        // Realiza la petición GET a la API usando el código alfa
        return this.http.get<RESTCountry[]>(url).pipe(
            // Mapea la respuesta al modelo interno
            map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
            // Obtiene solo el primer país del array (debería ser único)
            map((countries) => countries.at(0)),
            // Maneja errores
            catchError((error) => {
                console.log('Error fetching ', error);

                return throwError(
                    () => new Error(`No se pudo obtener países con ese código ${code}`)
                );
            })
        );
    }
}
