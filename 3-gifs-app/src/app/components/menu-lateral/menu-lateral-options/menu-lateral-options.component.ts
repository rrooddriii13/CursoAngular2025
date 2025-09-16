import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-menu-lateral-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral-options.component.html',
})
export class MenuLateralOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/panel/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/panel/search',
    },
  ];
}