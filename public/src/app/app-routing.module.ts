import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { {{Players}}Component } from './{{players}}/{{players}}.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: {{Players}}Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
