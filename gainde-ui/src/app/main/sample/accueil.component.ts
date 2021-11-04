import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { TokenStorageService } from '../authentication/services/token-storage.service';

import { locale as english } from '../i18n/en';
import { locale as frensh } from '../i18n/fr';

@Component({
    selector   : 'accueil',
    templateUrl: './accueil.component.html',
    styleUrls  : ['./accueil.component.scss']
})
export class AccueilComponent
{
    user: any = {};
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private tokenStorageService: TokenStorageService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, frensh);
        this.user = this.tokenStorageService.getUser();
    }
}
