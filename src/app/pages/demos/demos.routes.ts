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
        {path : 'directives', 
            loadComponent : () => import('./components/demo04-directives/demo04-directives').then(c => c.Demo04Directives)
        },
        {path : 'inputOutput', 
            loadComponent : () => import('./components/demo05-input-output/demo05-input-output').then(c => c.Demo05InputOutput)
        },
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];