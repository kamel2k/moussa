package fr.jc.sagide.manifesteservice.repository;

import fr.jc.sagide.manifesteservice.model.Manifeste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Date;


public interface ManifesteRepository extends JpaRepository<Manifeste,Long> {

    Collection <Manifeste> findByNumeroRepertoire(String numeroRepertoire);
    Collection <Manifeste> findByStatut(String statut);
    Collection <Manifeste> findByStatutAndDateArriveeBetween(String statut, Date dateDebut, Date dateFin);
}



/*
@RepositoryRestResource
public interface ManifesteRepository extends JpaRepository<Manifeste,Long> {

    @RestResource(path = "by-repertoire")
    Collection <Manifeste> findByNumeroRepertoire(@Param("repertoire") String numeroRepertoire);

    @RestResource(path = "by-statut")
    Collection <Manifeste> findByStatut(@Param("statut") String statut);
}

*/


