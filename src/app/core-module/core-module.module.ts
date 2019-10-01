import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModuleModule { }
