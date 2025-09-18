import { Component, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../datos/heroes.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,CanFyPipe,HeroColorPipe,TitleCasePipe,HeroFilterPipe,HeroCreatorPipe,HeroTextColorPipe,HeroSortByPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
	nombre = signal('Fernando Herrera');

	//upperCase
	usarMayusculas = signal(true);

	heroes = signal(heroes);

	ordenarPor  = signal<keyof Hero | null>(null);

	busquedaQuery = signal('');

}
