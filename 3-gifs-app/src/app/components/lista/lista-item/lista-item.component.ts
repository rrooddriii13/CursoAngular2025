import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lista-item',
  imports: [],
  templateUrl: './lista-item.component.html',
})
export class ListaItemComponent {
  imageUrl = input.required<string>();
}