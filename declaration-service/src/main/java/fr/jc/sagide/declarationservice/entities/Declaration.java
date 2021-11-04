package fr.jc.sagide.declarationservice.entities;

import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.*;


@Setter
@Getter
@Builder(setterPrefix = "with")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Declaration {

	@Id @GeneratedValue
	private Long id;
	private String numeroRepertoire;
	private String referenceDeclarant;
	private String bureauFrontiere;
	private String regimeDouanier;
	private String modeDeclaration;
	private String bureauEnregistrement;
	private String anneeRegime;
	private String numeroRegime;
	private String paysProvenance;
	@OneToOne
	private Manifeste manifeste;


}

	