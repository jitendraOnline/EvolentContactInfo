import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfigUrl } from './shared-module/constants/app.config';


const routes: Routes = [
  { path: '',   redirectTo: AppConfigUrl.viewContactNav, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
