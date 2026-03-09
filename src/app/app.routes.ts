import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Demos } from './pages/demos/demos';
import { Exos } from './pages/exos/exos';
import { Demo01Intro } from './pages/demos/components/demo01-intro/demo01-intro';

export const routes: Routes = [
    {path : 'home', component : Home},
    {path : 'demos', component : Demos, children:[
        {path : 'intro', component : Demo01Intro}
    ]},
    {path : 'exos', component : Exos},
    {path : '', redirectTo : 'home', pathMatch : 'full'}
];
