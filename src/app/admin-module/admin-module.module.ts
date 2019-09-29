import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin-routing.module';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { EditComponent } from './components/manage-contact/edit/edit.component';
import { ListContactComponent } from './components/manage-contact/list-contact/list-contact.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [ManageContactComponent, EditComponent, ListContactComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    AdminRouting
  ]
})
export class AdminModuleModule { }
