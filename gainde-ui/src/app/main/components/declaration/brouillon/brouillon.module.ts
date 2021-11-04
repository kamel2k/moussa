import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorContent, ControlSuccessContent, SaisieModificationDeclarationDetailsComponent } from './saisie-modification-declaration-details/saisie-modification-declaration-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { RechercheDeclarationComponent } from './recherche-declaration/recherche-declaration.component';
import { MatCustomInputApurement } from './saisie-modification-declaration-details/mat-custom-input-apurement';



@NgModule({
  declarations: [
    SaisieModificationDeclarationDetailsComponent,
    ControlSuccessContent,
    ControlErrorContent,
    RechercheDeclarationComponent,
    MatCustomInputApurement
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class BrouillonModule { }
