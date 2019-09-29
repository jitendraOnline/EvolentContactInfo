import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  
  {path:'viewContact',component:ViewContactComponent},
  { path: '',   redirectTo: '/viewContact', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
