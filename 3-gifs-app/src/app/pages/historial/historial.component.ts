import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { GifService } from '../../services/gifs.service';
import { ListaComponent } from 'src/app/components/lista/lista.component';

@Component({
  selector: 'app-historial',
  imports: [ListaComponent],
  templateUrl: './historial.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => this.gifService.obtenerGifsDeHistorial(this.query()));
}
