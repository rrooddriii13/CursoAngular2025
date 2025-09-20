import {afterNextRender,afterRender,Component,effect,OnChanges,OnInit, signal, } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

// afterNextRender: corre una vez justo después del siguiente renderizado completo del DOM
// afterRender: corre cada vez que todos los componentes se renderizan en el DOM
// effect: crea un efecto que se reejecuta cuando cambian las señales leídas dentro
// signal: crea una reacción reactiva independiente


const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'Fernando';
  signalProperty = signal('Fernando');

  constructor() {
    log('Constructor llamado');

    // setTimeout(() => {
    //   this.signalProperty.set('Juan Carlos');
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'Fernando Herrera';
  }

  changeSignal() {
    this.signalProperty.set('Fernando Herrera');
  }


  // Efecto básico: se dispara una vez y cada vez que cambie alguna señal leída aquí
  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  // Hook: se ejecuta una vez después de que Angular inicializa las entradas (@Input)
  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }

  // Hook: se ejecuta cada vez que cambian las propiedades @Input
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  // Hook: se ejecuta en cada chequeo de cambio de la vista (detectChanges)
  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  // Hook: se ejecuta una vez después de proyectar contenido <ng-content>
  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }

  // Hook: se ejecuta cada vez que Angular comprueba el contenido proyectado
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }

  // Hook: se ejecuta una vez después de inicializar la vista del componente
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }

  // Hook: se ejecuta cada vez que Angular comprueba la vista del componente
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  // Hook: se ejecuta justo antes de destruir la instancia del componente.
  ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
  }

  // afterNextRender: corre una única vez tras el siguiente render completo del DOM
  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });
  // afterRender: corre cada vez que cambia el DOM tras el render
  afterRender = afterRender(() => {
    log(
      'afterRender',
      'Runs every time all components have been rendered to the DOM.'
    );
  });
}
