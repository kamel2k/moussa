package fr.jc.sagide.declarationservice.controllers;

import java.util.List;

import fr.jc.sagide.declarationservice.dto.ManifesteDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fr.jc.sagide.declarationservice.dto.DeclarationDto;
import fr.jc.sagide.declarationservice.services.DeclarationService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/v1")
public class DeclarationController {
	
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	DeclarationService declarationService;

	@GetMapping(value="/declarations")
	public List<DeclarationDto> getDeclarations() {
		log.info("Récuperation des déclarations");
		return declarationService.getDeclarations();
	}

	@GetMapping(value="/declarations/{numero}")
	public List<DeclarationDto> getDeclarationsByNumeroRepertoire(@PathVariable("numero") String numero) {
		log.info("Récuperation des déclarations par numero Répertoire");
		return declarationService.getDeclarationByNumeroRepertoire(numero);
	}

	@PostMapping(value="/declarations")
	public void createDeclaration(@RequestBody() DeclarationDto declarationDto) {
		log.info("Création d'une déclaration");
		declarationService.createDeclaration(declarationDto);
	}

	@GetMapping(value="/declarations/manifeste")
	public ManifesteDto searchManifeste(@RequestParam int numero, @RequestParam String annee, @RequestParam String bureau) {
		log.info("Recherche Manifeste");
		return declarationService.getManifeste(numero, annee, bureau);
	}

}
