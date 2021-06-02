import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NameListComponent} from '../app/name-list/name-list.component';

const routes: Routes = [
  { path: 'names', component: NameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
