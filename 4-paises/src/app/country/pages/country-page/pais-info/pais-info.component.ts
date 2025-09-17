import { Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Pais } from '../../../interfaces/pais.interface';

@Component({
  selector: 'pais-info-page',
  imports: [DecimalPipe],
  templateUrl: './pais-info.component.html',
})
export class PaisInfoComponent {
  country = input.required<Pais>();

  currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
