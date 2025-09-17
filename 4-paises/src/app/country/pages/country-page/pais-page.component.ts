import { Component, inject } from '@angular/core';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ServicioPais } from '../../services/country.service';
import { PaisInfoComponent } from './pais-info/pais-info.component';

@Component({
  selector: 'app-pais-page',
  imports: [NotFoundComponent,PaisInfoComponent],
  templateUrl: './pais-page.component.html',
})
export class PaisPageComponent {
  codigoPais = inject(ActivatedRoute).snapshot.params['code'];
paisesServicio = inject(ServicioPais);

paisRecurso = rxResource({
  request: () => ({ codigo: this.codigoPais }),
  loader: ({ request }) => {
    return this.paisesServicio.buscarPorCodigoAlfa(request.codigo);
  },
});
}