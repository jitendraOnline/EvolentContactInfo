import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatRadioModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatCardModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatInputModule, MatTooltipModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [ HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule]
})
export class SharedModuleModule { }
