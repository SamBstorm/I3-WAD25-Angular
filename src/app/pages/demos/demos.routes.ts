import { Routes } from "@angular/router";
import { Demo01Intro } from "./components/demo01-intro/demo01-intro";

export const routes : Routes = [
        {path : 'intro', component : Demo01Intro},
        {path : 'bindings', 
            loadComponent : () => import('./components/demo02-bindings/demo02-bindings').then(c => c.Demo02Bindings)
        },
        {path : 'pipes', 
            loadComponent : () => import('./components/demo03-pipes/demo03-pipes').then(c => c.Demo03Pipes)
        },
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];