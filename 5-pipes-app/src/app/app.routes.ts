import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'basic',
        title:'Pipes Basicos',
        loadComponent: () => import('./paginas/basic-page/basic-page.component'),
    },
    {
        path: 'uncommon',
        title: 'Pipes no tan comunes',
        loadComponent: () => import('./paginas/uncommon-page/uncommon-page.component'),
    },
    {
        path:'numbers',
        title:'Pipes numericos',
        loadComponent: () => import('./paginas/numbers-page/numbers-page.component'),
    },
    {
        path: 'custom',
        title: 'Pipes Personalizados',
        loadComponent: () => import('./paginas/custom-page/custom-page.component'),
    },
];
