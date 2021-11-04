package fr.jc.sagide.declarationservice.services;

import java.util.List;

import fr.jc.sagide.declarationservice.dto.DeclarationDto;
import fr.jc.sagide.declarationservice.dto.ManifesteDto;

/**
 * 
 * Service pour la gestion de déclaration
 *
 */
public interface  DeclarationService {
	
	/**
	 * Ce service va récuperer toute les déclarations
	 * @return liste des déclaration
	 */
	public List<DeclarationDto> getDeclarations();

	public List<DeclarationDto> getDeclarationByNumeroRepertoire(String numeroRepertoire);

	void createDeclaration(DeclarationDto declarationDto);

	ManifesteDto getManifeste(int numero, String annee, String bureau);
}
