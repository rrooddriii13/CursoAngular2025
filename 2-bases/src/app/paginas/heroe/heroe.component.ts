import { Component, computed, Signal, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './heroe.component.html',
  imports: [UpperCasePipe , RouterLink],
})

export class HeroeComponent {
    nombre= signal('Ironman');
    edad= signal(45);

    //metodo q regrese la concatenacion de nombre y edad
    DescripcionHeroe: Signal<string> = computed( () => {
        return `${ this.nombre() } tiene  ${ this.edad() }`;
    })

    nombreCapitalizado: Signal<string> = computed( () => {
        return this.nombre().toUpperCase();
    })

    cambiarHeroe():void{
        //es un set xq no depende del valor anteriroir sino update 
        this.nombre.set('Spiderman');
    }

    cambiarEdad():void{
        this.edad.set(60);
        //this.edad.update( edad => edad + 1 );
    }

    resetear():void{
        this.nombre.set('Ironman');
        this.edad.set(45);
    }
}