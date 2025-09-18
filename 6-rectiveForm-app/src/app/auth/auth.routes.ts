import { Routes } from "@angular/router";
import { RegistroPageComponent } from "./pages/register-page/registro-page/registro-page.component";

export const authRoutes : Routes =[
    {
        path:'',
        children:[
            {
                path:'sign-up',
                component: RegistroPageComponent
            },
            {
                path:'**',
                redirectTo:'sign-up'
            },          
        ],
    },
    
]