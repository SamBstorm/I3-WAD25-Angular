import { Routes } from "@angular/router";
import { Demo01Intro } from "./components/demo01-intro/demo01-intro";

export const routes : Routes = [
        {path : 'intro', component : Demo01Intro},
        {path : '', redirectTo : 'intro', pathMatch : 'full'}
    ];