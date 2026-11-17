import { Routes } from '@angular/router';
export const routes: Routes = [
 {path:'', title:'BuddhiMati AI Technologies', loadComponent:()=>import('./home.component').then(m=>m.HomeComponent)},
 {path:'**', redirectTo:''}
];
