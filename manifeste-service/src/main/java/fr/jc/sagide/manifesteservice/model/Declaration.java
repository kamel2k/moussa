package fr.jc.sagide.manifesteservice.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Setter
@Getter
@Builder(setterPrefix = "with")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Declaration {

    @Id
    @GeneratedValue
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

