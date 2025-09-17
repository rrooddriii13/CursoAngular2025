import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Pais } from '../interfaces/pais.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
	providedIn: 'root',
})
export class ServicioPais {
	private http = inject(HttpClient);

// Busca países por capital
    buscarPorCapital(query: string): Observable<Pais[]> {
        query = query.toLowerCase(); // Normaliza el query a minúsculas

        // Realiza la petición GET a la API usando la capital
        return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
            // Mapea la respuesta de la API al modelo interno Pais[]
            map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
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

        // Realiza la petición GET a la API usando el nombre
        return this.http.get<RESTCountry[]>(url).pipe(
            // Mapea la respuesta al modelo interno
            map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
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
