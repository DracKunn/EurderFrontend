import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [{path:'',component:ItemOverviewComponent},{path:'users',component:UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
