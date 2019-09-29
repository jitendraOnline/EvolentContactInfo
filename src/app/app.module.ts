import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModuleModule } from './core-module/core-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModuleModule,
    SharedModuleModule,
    AdminModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
