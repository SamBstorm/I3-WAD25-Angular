import { Routes } from "@angular/router";
import { ExoIntro } from "./components/exo-intro/exo-intro";

export const routes : Routes =[
        {path: 'intro', component : ExoIntro},
        {path: 'routeComponent', 
            loadComponent : () => import('./components/exo01-route/exo01-route').then(c => c.Exo01Route)},
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];