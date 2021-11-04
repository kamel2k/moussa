package fr.jc.sagide.declarationservice.repository;

import fr.jc.sagide.declarationservice.entities.Declaration;
import fr.jc.sagide.declarationservice.entities.Manifeste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManifesteRepository  extends JpaRepository<Manifeste, Long> {
    Manifeste findOneByNumeroAndAnneeAndBureau(int numero, String date, String bureau);
}
