import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManifesteModule } from './manifeste/manifeste.module';
import { RouterModule } from '@angular/router';
import { EnregistrementManifesteComponent } from './manifeste/enregistrement-manifeste/enregistrement-manifeste.component';
import { AuthGuard } from '../authentication/services/auth-gard.service';
import { ModificationComponent } from './manifeste/bruillon/modification/modification.component';
import { DeclarationModule } from './declaration/declaration.module';
import { SaisieModificationDeclarationDetailsComponent } from './declaration/brouillon/saisie-modification-declaration-details/saisie-modification-declaration-details.component';
import { RechercheDeclarationComponent } from './declaration/brouillon/recherche-declaration/recherche-declaration.component';


const routes = [
  {
      path     : 'manifeste/enregistrement/enreg_manif',
      component: EnregistrementManifesteComponent,
      canActivate: [AuthGuard]
  },
  {
      path     : 'manifeste/brouillon/modifier',
      component: ModificationComponent,
      canActivate: [AuthGuard]
  },
  {
      path     : 'declaration/brouillon/saisie_modification',
      component: SaisieModificationDeclarationDetailsComponent,
      canActivate: [AuthGuard]
  },
  {
      path     : 'declaration/brouillon/saisie',
      component: RechercheDeclarationComponent,
      canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    
  ],
  imports: [ 
    RouterModule.forRoot(routes),
    CommonModule,
    ManifesteModule,
    DeclarationModule
  ]
})
export class ComponentsModule { }
