import { Routes } from "@angular/router";
import { Demo01Intro } from "./components/demo01-intro/demo01-intro";
import { beforeMiddayGuard } from "../../shared/guards/before-midday-guard";
import { mustBeLoggedGuard } from "../../shared/guards/must-be-logged-guard";

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
        {path : 'service', 
            loadComponent : () => import('./components/demo06-service/demo06-service').then(c => c.Demo06Service)
        },
        {path : 'service02', 
            loadComponent : () => import('./components/demo07-service/demo07-service').then(c => c.Demo07Service)
        },
        {path : 'formBuilder', 
            loadComponent : () => import('./components/demo08-form-builder/demo08-form-builder').then(c => c.Demo08FormBuilder)
        },
        {path : 'formArray', 
            loadComponent : () => import('./components/demo09-form-array/demo09-form-array').then(c => c.Demo09FormArray)
        },
        {path : 'activatedRoute-index', 
            loadComponent : () => import('./components/demo10-activiated-route-index/demo10-activiated-route-index').then(c => c.Demo10ActiviatedRouteIndex)
        },
        {path : 'activatedRoute-details/:id', 
            loadComponent : () => import('./components/demo10-activiated-route-details/demo10-activiated-route-details').then(c => c.Demo10ActiviatedRouteDetails)
        },
        {path : 'guards', 
            loadComponent : () => import('./components/demo11-guards/demo11-guards').then(c => c.Demo11Guards),
        canActivate : [beforeMiddayGuard]},
        {
            path : 'loginGuard',
            loadComponent : () => import('./components/demo12-guard-with-login/demo12-guard-with-login').then(c => c.Demo12GuardWithLogin),
            canActivate : [mustBeLoggedGuard]
        },
        {
            path : 'subjects',
            loadComponent : () => import('./components/demo13-subjects/demo13-subjects').then(c => c.Demo13Subjects)
        },
        {
            path : 'signals',
            loadComponent : () => import('./components/demo14-signals/demo14-signals').then(c => c.Demo14Signals)
        },
        {
            path : 'rxjs',
            loadComponent : () => import('./components/demo15-operateurs-rxjs/demo15-operateurs-rxjs').then(c => c.Demo15OperateursRxjs)
        },
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];