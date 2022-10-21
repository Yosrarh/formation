import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contacte",component:ContacteComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"addmatch",component:AddmatchComponent},
  {path:"editmatch/:matchId",component:AddmatchComponent},
  {path:"admin",component:AdminComponent},
  {path:"cart",component:CartComponent},
  {path:"addplayers",component:AddplayersComponent},
  {path:"editplayers/:playId",component:AddplayersComponent},
  {path:"matches",component:MatchesComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
