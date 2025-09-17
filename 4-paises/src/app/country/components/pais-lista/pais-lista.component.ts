import { Component, input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'pais-lista',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './pais-lista.component.html',
})
export class PaisListaComponent {
  countries = input.required<Pais[]>();

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
