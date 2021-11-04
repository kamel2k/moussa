import { TokenStorageService } from 'app/main/authentication/services/token-storage.service';

export class NavigationService {
    private tokenService: TokenStorageService = new TokenStorageService();
    
    constructor() {
    }

    public declarant: boolean = this.checkDeclarant();
    public consignataire: boolean = this.checkConsignataire();

    checkDeclarant() {
        if(this.tokenService.getUser()){
            return ( this.tokenService.getUser().roles[0] != 'DECLARANT')
        }
        return true;
    }

    checkConsignataire() {
        if(this.tokenService.getUser()){
            return ( this.tokenService.getUser().roles[0] != 'CONSIGNATAIRE')
        }
        return true;
    }
}