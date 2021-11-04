import { ManifesteDto } from '../manifeste/manifeste.dto';

export class DeclarationDto {

    numeroRepertoire: string;
	referenceDeclarant: string;
	bureauFrontiere: string;
	regimeDouanier: string;
	modeDeclaration: string;
	bureauEnregistrement: string;
	anneeRegime: string;
	numeroRegime: string;
	paysProvenance: string;
    manifesteDto: ManifesteDto;
    
    constructor() {}
}