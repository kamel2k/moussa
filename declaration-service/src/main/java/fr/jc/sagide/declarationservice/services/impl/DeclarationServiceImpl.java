package fr.jc.sagide.declarationservice.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import fr.jc.sagide.declarationservice.dto.ManifesteDto;
import fr.jc.sagide.declarationservice.entities.Manifeste;
import fr.jc.sagide.declarationservice.exceptions.ManifesteNotFoundException;
import fr.jc.sagide.declarationservice.repository.ManifesteRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.jc.sagide.declarationservice.dto.DeclarationDto;
import fr.jc.sagide.declarationservice.entities.Declaration;
import fr.jc.sagide.declarationservice.repository.DeclarationRepository;
import fr.jc.sagide.declarationservice.services.DeclarationService;


@Service
public class DeclarationServiceImpl implements DeclarationService{
	
	Logger log = LoggerFactory.getLogger(this.getClass());

	
	@Autowired
	DeclarationRepository declarationRepository;

	@Autowired
	ManifesteRepository manifesteRepository;

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<DeclarationDto> getDeclarations() {
		
		log.info("Service de récuperation des déclaration sans filter");
		ModelMapper modelMapper = new ModelMapper();
		
		List<Declaration> declarations =  declarationRepository.findAll();
		List<DeclarationDto> declarationsDto = 
									declarations.stream()
									.map(declaration -> modelMapper.map(declaration, DeclarationDto.class))
									.collect(Collectors.toList());
		
		return declarationsDto;
									
		
	}

	@Override
	public List<DeclarationDto> getDeclarationByNumeroRepertoire(String numeroRepertoire) {
		log.info("Service de récuperation des déclaration par numero repertoire");
		ModelMapper modelMapper = new ModelMapper();

		List<Declaration> declarations =  declarationRepository.findByNumeroRepertoire(numeroRepertoire);
		List<DeclarationDto> declarationsDto =
				declarations.stream()
						.map(declaration -> {
							return modelMapper.map(declaration, DeclarationDto.class);
							/*
							DeclarationDto declarationDto = modelMapper.map(declaration, DeclarationDto.class);
							declarationDto.setNumeroRepertoireManifeste(declaration.getManifeste().getNumeroRepertoire());
							declarationDto.setAnneeManifeste(declaration.getManifeste().getAnnee());
							declarationDto.setBureauManifeste(declaration.getManifeste().getBureau());
							return declarationDto;
							*/
						})
						.collect(Collectors.toList());

		return declarationsDto;
	}

	@Override
	public void createDeclaration(DeclarationDto declarationDto) {

		ModelMapper modelMapper = new ModelMapper();
		Declaration declaration = modelMapper.map(declarationDto, Declaration.class);

		Manifeste manifeste = manifesteRepository.findOneByNumeroAndAnneeAndBureau(declarationDto.getManifesteDto().getNumero(),
				declarationDto.getManifesteDto().getAnnee(),
				declarationDto.getManifesteDto().getBureau());

		if (null == manifeste) {
			throw new ManifesteNotFoundException(String.valueOf(declarationDto.getManifesteDto().getNumero()),
					declarationDto.getManifesteDto().getAnnee(),
					declarationDto.getManifesteDto().getBureau());
		}

		declaration.setManifeste(manifeste);
		declarationRepository.save(declaration);
	}

	@Override
	public ManifesteDto getManifeste(int numero, String annee, String bureau) {
		 Manifeste manifeste = manifesteRepository.findOneByNumeroAndAnneeAndBureau(numero, annee, bureau);

		 if (null != manifeste && manifeste.getStatut().equals("enregistrement")) {
			 ModelMapper modelMapper = new ModelMapper();
			 return modelMapper.map(manifeste, ManifesteDto.class);
		 }
		 throw new ManifesteNotFoundException(String.valueOf(numero), annee, bureau);
	}


}
