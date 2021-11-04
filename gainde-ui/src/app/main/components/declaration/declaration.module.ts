import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrouillonModule } from './brouillon/brouillon.module';
import { ControlErrorContent, ControlSuccessContent } from './brouillon/saisie-modification-declaration-details/saisie-modification-declaration-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrouillonModule
  ],
  entryComponents: [
    ControlErrorContent,
    ControlSuccessContent
  ]
})
export class DeclarationModule { }
