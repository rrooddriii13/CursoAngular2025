import { Component } from '@angular/core';
import {  PaisListaComponent } from '../../components/pais-lista/pais-lista.component';

@Component({
  selector: 'app-by-region-page',
  imports: [PaisListaComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {}
