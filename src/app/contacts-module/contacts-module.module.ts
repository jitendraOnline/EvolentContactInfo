import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRouting } from './contact-routing.module';
import { ManageContactComponent } from './components/manage-contact/manage-contact.component';
import { EditComponent } from './components/manage-contact/edit/edit.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

@NgModule({
  declarations: [ManageContactComponent, EditComponent, ViewContactComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    ContactRouting
  ]
})
export class ContactModuleModule { }
