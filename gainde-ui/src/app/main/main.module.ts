import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AccueilComponent } from './sample/accueil.component';
import { AuthGuard } from './authentication/services/auth-gard.service';
import { LieuEmbarquementComponent } from './sample/lieu-embarquement/lieu-embarquement.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ComponentsModule } from './components/components.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';



const routes = [
    {
        path     : 'accueil',
        component: AccueilComponent,
        canActivate: [AuthGuard]
    },
    {
        path     : 'declaration',
        component: LieuEmbarquementComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        AccueilComponent,
        LieuEmbarquementComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatTabsModule,
        MatInputModule, 
        ComponentsModule
    ]
})

export class MainModule
{
}
