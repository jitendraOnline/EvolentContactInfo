import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatExpansionModule,MatRadioModule,MatStepperModule,MatToolbarModule,MatMenuModule,MatButtonModule,MatListModule, MatCardModule,MatSelectModule,MatTableModule,MatTabsModule,MatPaginatorModule,MatSortModule,MatIconModule,MatInputModule,MatTooltipModule,MatProgressSpinnerModule,MatProgressBarModule } from '@angular/material';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule, 
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports:[HttpClientModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule, 
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule]
})
export class SharedModuleModule { }
