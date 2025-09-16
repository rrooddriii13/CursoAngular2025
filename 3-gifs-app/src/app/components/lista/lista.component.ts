import { Component, input } from '@angular/core';
import { ListaItemComponent } from './lista-item/lista-item.component';

@Component({
  selector: 'app-lista',
  imports: [ListaItemComponent],
  templateUrl: './lista.component.html',
})
export class ListaComponent {
    gifs = input.required<string[]>();

}
