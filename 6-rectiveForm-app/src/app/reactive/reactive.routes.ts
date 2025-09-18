import { Routes } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { DinamicaPageComponent } from "./pages/dinamica-page/dinamica-page.component";
import { SwitchesPageComponent } from "./pages/switches-page/switches-page.component";

export const reactiveRoutes : Routes =[
    {
        path:'',
        children:[
            {path:'basic', title: 'Basicos',component:BasicPageComponent},
            {path:'dynamic', title: 'Dinamicos',component:DinamicaPageComponent},
            {path:'switches', title: 'Switches',component:SwitchesPageComponent},
            //cualquier ruta q no sea reconocida
            {path:'**', redirectTo:'basic'},
        ],
    },
    
]