import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctComponent } from './contanct/contanct.component';

import { HomeComponent } from './home/home.component';

const routes: Routes =
 [
   {path:'',component:HomeComponent},
   {path:'contanct',component:ContanctComponent},
   {path:'**',component:HomeComponent,pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
