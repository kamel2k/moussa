import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContent, EnregistrementManifesteComponent, ServerErrorContent } from './enregistrement-manifeste/enregistrement-manifeste.component';
import { FormsModule } from '@angular/forms';
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
import { BrouillonModule } from './bruillon/brouillon.module';
import { RouterModule } from '@angular/router';
import { DialogNumeroManifeste } from './bruillon/modification/modification.component';



@NgModule({
  declarations: [
    EnregistrementManifesteComponent,
    DialogContent,
  ServerErrorContent,
  DialogNumeroManifeste
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

        RouterModule,
        BrouillonModule
  ],
  entryComponents: [DialogContent, ServerErrorContent, DialogNumeroManifeste]
})
export class ManifesteModule { }
