import { Routes } from '@angular/router';
import { ContadorComponent } from './paginas/contador/contador.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { DragonballComponentPag } from './paginas/dragonball/dragonballPag.component';
import { DragonballComponentPagSuper } from './paginas/dragonball-super/dragonballPagSuper.component';

export const routes: Routes = [
    {
        //ruta /-> http://localhost:4200/
        path: '',component: ContadorComponent
    },
    { path: 'heroe', component: HeroeComponent, },
    {path :'dragonball',component:DragonballComponentPag},
    {path: 'dragonball-super',component: DragonballComponentPagSuper},

    //redirigir a la ruta / si no existe la ruta
    {path: '**', redirectTo: ''},
    
];
