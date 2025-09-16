import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ListaComponent } from 'src/app/components/lista/lista.component';
import { Gif } from 'src/app/interfaces/gif.interface';
import { GifService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-buscar-page',
  imports: [ListaComponent],
  templateUrl: './buscar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class buscarPageComponent {

	gifService = inject(GifService);
	gifs = signal<Gif[]>([]);

	onSearch(query: string) {
		this.gifService.buscarGifs(query).subscribe((resp) => {
			this.gifs.set(resp);
		});
	}

}