import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './componentes/login/login.component';
import {ActivityMainComponent} from './componentes/activity-main/activity-main.component';
import {ActivityFromsComponent } from './componentes/activity-froms/activity-froms.component';
import {HistorialComponent } from './componentes/historial/historial.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
  },
  {
    path:'main',
    component:ActivityMainComponent
  },
  {
    path:'',
    redirectTo:'/forms',
    pathMatch:'full'
  },
  {
    path:'forms',
    component:ActivityFromsComponent
  },
  {
    path:'',
    redirectTo:'/historial',
    pathMatch:'full'
  },
  {
    path:'historial',
    component:HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
