package fr.jc.sagide.manifesteservice.repository;

import fr.jc.sagide.manifesteservice.model.Declaration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeclarationRepository extends JpaRepository<Declaration, Long> {
}
