import { Routes } from '@angular/router';
import { ContadorComponent } from './paginas/contador/contador.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { DragonballComponent } from './componentes/dragonball/dragonball.component';

export const routes: Routes = [
    {
        //ruta /-> http://localhost:4200/
        path: '',component: ContadorComponent
    },
    { path: 'heroe', component: HeroeComponent, },
    {path :'dragonball',component:DragonballComponent},
    
    //redirigir a la ruta / si no existe la ruta
    {path: '**', redirectTo: ''},
    
];
