import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { AppConfigUrl } from '../shared-module/constants/app.config';



const routes: Routes = [
                      { path: AppConfigUrl.manageContactRoute,
                          component: ManageContactComponent
                       }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
