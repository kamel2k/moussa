package fr.jc.sagide.declarationservice.repository;

import fr.jc.sagide.declarationservice.entities.Manifeste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.jc.sagide.declarationservice.entities.Declaration;

import java.util.Collection;
import java.util.List;


@Repository
public interface DeclarationRepository extends JpaRepository<Declaration, Long>{

    List <Declaration> findByNumeroRepertoire(String numeroRepertoire);
}
