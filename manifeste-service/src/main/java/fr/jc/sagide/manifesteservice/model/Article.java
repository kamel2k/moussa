package fr.jc.sagide.manifesteservice.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Setter
@Getter
@Builder(setterPrefix = "with")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Article {

        @Id
        @GeneratedValue
        private Long id;
        private String numero;
        private String titreTransport;
        private int nombreColis;
        private String modeConditionnement;
        private int poidsBrut;
        private String designationCommerciale;
}
