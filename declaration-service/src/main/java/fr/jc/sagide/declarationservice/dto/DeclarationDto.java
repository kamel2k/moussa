package fr.jc.sagide.declarationservice.dto;

import fr.jc.sagide.declarationservice.entities.Manifeste;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * 
 * Data access object for Declaration model
 *
 */
@Getter
@Setter
public class DeclarationDto {

//	private Long id;
	private String numeroRepertoire;
	private String referenceDeclarant;
	private String bureauFrontiere;
	private String regimeDouanier;
	private String modeDeclaration;
	private String bureauEnregistrement;
	private String anneeRegime;
	private String numeroRegime;
	private String paysProvenance;
	private ManifesteDto manifesteDto;
}
