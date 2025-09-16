import { Component, input } from '@angular/core';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { Gif } from 'src/app/interfaces/gif.interface';

@Component({
  selector: 'app-lista',
  imports: [ListaItemComponent],
  templateUrl: './lista.component.html',
})
export class ListaComponent {
    gifs = input.required<Gif[]>();

}
