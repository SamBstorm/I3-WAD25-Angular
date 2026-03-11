import { Routes } from "@angular/router";
import { ExoIntro } from "./components/exo-intro/exo-intro";

export const routes : Routes =[
        {path: 'intro', component : ExoIntro},
        {path: 'routeComponent', 
            loadComponent : () => import('./components/exo01-route/exo01-route').then(c => c.Exo01Route)},
        {path: 'chrono', 
            loadComponent : () => import('./components/exo02-chrono/exo02-chrono').then(c => c.Exo02Chrono)},
        {path: 'animal', 
            loadComponent : () => import('./components/exo03-directives/exo03-directives').then(c => c.Exo03Directives)},
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];