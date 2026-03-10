import { Routes } from "@angular/router";
import { ExoIntro } from "./components/exo-intro/exo-intro";
import { Exo01Route } from "./components/exo01-route/exo01-route";

export const routes : Routes =[
        {path: 'intro', component : ExoIntro},
        {path: 'routeComponent', component : Exo01Route},
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];