import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { ListContactComponent } from './components/manage-contact/list-contact/list-contact.component';
import { EditComponent } from './components/manage-contact/edit/edit.component';

const routes: Routes = [
                       { path:'manageConatact',
                         component:ManageContactComponent,
                         children:[ { path:':id',
                                      component:EditComponent
                                    },
                                    { path:'',
                                      component:EditComponent
                                    }
                                ]
                        }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
