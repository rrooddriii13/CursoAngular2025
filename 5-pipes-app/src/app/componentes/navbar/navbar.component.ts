import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-navbar',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
	// Mapeamos las rutas para obtener solo el título y la ruta

	routes = routes.map((route) => ({
		// Si no tiene título o path, ponemos un string vacío
		title: route.title ?? '',
		path: route.path ?? '',
	}));
}
