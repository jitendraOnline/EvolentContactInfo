import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { AppConfigUrl } from './shared-module/constants/app.config';


const routes: Routes = [

  // {path: 'viewContact', component: ViewContactComponent},
  {path: AppConfigUrl.viewContactRoute, component: ViewContactComponent},
  { path: '',   redirectTo: AppConfigUrl.viewContactNav, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
