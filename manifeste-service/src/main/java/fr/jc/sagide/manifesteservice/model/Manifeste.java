package fr.jc.sagide.manifesteservice.model;

import lombok.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Setter
@Getter
@Builder(setterPrefix = "with")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Manifeste {

    @Id @GeneratedValue
    private Long id;
    private String numeroRepertoire;
    private String bureau;
    private String moyenTransport;
    private String typeManifeste;
    private Date dateArrivee;
    private Date dateEnregistrement;
    private String origine;
    private String consignataire;
    private String numeroVolVoyage;
    private int valeurApproximative;
    private String bureauEntree;
    private String bureauEnregistrement;
    private int capaciteBrute;
    private int capaciteNette;
    private String provenance;
    private String typeNavire;
    private String pavillon;
    private String annee;
    private int numero;
    private String statut;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Collection<Article> articles;
}
