import { Routes } from '@angular/router';
import TendenciaPageComponent from './pages/tendencias-page/tendencias.page.component';

export const routes: Routes = [


    {
        path: 'panel', // antes 'dashboard'
        //loadCOmponent: () => lo q hace es cargar el componente de forma perezosa
        loadComponent: () => import('./pages/panel-page/panel-page.component'),

        children: [
        {
            path: 'tendencias', // antes 'trending'
            component: TendenciaPageComponent
            // loadComponent: () =>
            // import('./pages/tendencias-page/tendencias-page.component'),
        },
        {
            path: 'buscar', // antes 'search'
            loadComponent: () =>
            import('./pages/buscar-page/buscar-page.component'),
        },
        // {
        //     path: '**', // cualquier ruta que no coincida
        //     redirectTo: 'tendencias', // redirige a 'tendencias'
        // },
        ],
    },

    {
        path: '**', // cualquier ruta no válida
        redirectTo: 'panel', // redirige al panel principal
    },
];

