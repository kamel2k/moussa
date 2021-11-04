package fr.jc.sagide.manifesteservice.controller;

import fr.jc.sagide.manifesteservice.model.Article;
import fr.jc.sagide.manifesteservice.model.Manifeste;
import fr.jc.sagide.manifesteservice.exceptions.ManifesteNotFoundException;
import fr.jc.sagide.manifesteservice.repository.DeclarationRepository;
import fr.jc.sagide.manifesteservice.repository.ManifesteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ManifesteController {

    Logger log = LoggerFactory.getLogger(this.getClass());

    private final ManifesteRepository manifesteRepository;
    private final DeclarationRepository declarationRepository;

    @Autowired
    public ManifesteController(ManifesteRepository manifesteRepository, DeclarationRepository declarationRepository) {
        this.manifesteRepository = manifesteRepository;
        this.declarationRepository = declarationRepository;
    }

    @RequestMapping (method = RequestMethod.GET, value = "/brouillon-manifestes")
    public Collection<Manifeste> brouillonManifestes () {
        log.info("Récuperation des brouillons manifestes");
        return this.manifesteRepository.findByStatut("brouillon");
    }

    @RequestMapping (method = RequestMethod.GET, value = "/enregistrement-manifestes")
    public Collection<Manifeste> enregistrementManifestes () {
        log.info("Récuperation des manifestes enregistrés");
        return this.manifesteRepository.findByStatut("enregistrement");
    }


    @RequestMapping (method = RequestMethod.GET, value = "/filter-brouillon-manifestes")
    public Collection<Manifeste> brouillonManifestesByDates(@RequestParam("debut") @DateTimeFormat(pattern="yyyy-MM-dd") Date dateDebut,
                                                            @RequestParam("fin") @DateTimeFormat(pattern="yyyy-MM-dd") Date dateFin) {
        log.info("Recherche des brouillons manifestes entre les date: " + dateDebut + " et " + dateFin);
        return this.manifesteRepository.findByStatutAndDateArriveeBetween("brouillon", dateDebut, dateFin);
    }

    @RequestMapping (method = RequestMethod.GET, value = "/manifestes/{id}")
    public Manifeste manifeste(@PathVariable Long id) {
        log.info("Chargement d'un manifeste avec l'id", id);
        return manifesteRepository.findById(id)
                .orElseThrow(() -> new ManifesteNotFoundException(id));
    }

    @RequestMapping (method = RequestMethod.PATCH, value = "/manifestes/{id}")
    Manifeste updateManifeste(@RequestBody Manifeste patchManifeste, @PathVariable Long id) {
        log.info("Mise a jour du statut d'un manifeste: brouillon -> enregistré");
        return manifesteRepository.findById(id)
                .map(manifeste -> {
                    manifeste.setStatut(patchManifeste.getStatut());
                    return this.manifesteRepository.save(manifeste);
                })
                .orElseThrow(() -> new ManifesteNotFoundException(id));
    }

    /* a ne pas utilsier */
    @RequestMapping (method = RequestMethod.POST, value = "/manifestes")
    Manifeste newManifeste(@RequestBody Manifeste newManifeste) {
        log.info("Création d'un manifeste");
        return manifesteRepository.save(newManifeste);
    }

    /* a ne pas utilsier */
    @RequestMapping (method = RequestMethod.DELETE, value = "/manifestes/{id}")
    void deleteManifeste(@PathVariable Long id) {
        log.info("Suppression d'un manifeste");
        manifesteRepository.deleteById(id);
    }

    /*
    * Test DATA endpoint
    * INSERT MANIFESTE, ARTICLES
    * */
    @RequestMapping (method = RequestMethod.GET, value = "/manifestes/data")
    public String testData() throws Exception {
        log.info("Suppression des anciennes données de test");
        declarationRepository.deleteAll();
        manifesteRepository.deleteAll();
        log.info("Insertion des données de test");
        List<Article> articles1 = Arrays.asList(
                Article.builder()
                        .withNumero("MLO284 /1 /0")
                        .withTitreTransport("CLC0110709")
                        .withNombreColis(72)
                        .withModeConditionnement("PK")
                        .withPoidsBrut(52100)
                        .withDesignationCommerciale("EMPTY GLASS BOTTLES 4 OZ MADRAS JAR DPI NO: 1040871"+
                                "BSC /CTN: 0327352")
                        .build(),
                Article.builder()
                        .withNumero("MLO284 /2 /0")
                        .withTitreTransport("CLC0158709")
                        .withNombreColis(142)
                        .withModeConditionnement("BG")
                        .withPoidsBrut(36400)
                        .withDesignationCommerciale("SAID TO CONTAIN SODIUM TRIPOLYPHOSPHATE (S.T.P.P" +
                                " NAS P3 O10) PACKED IN 400 BIG BAGS OF 1100 KG NET EACH STOWED ON 200 PALETTES"+
                                " LOCKED IN 20 TWENTY FEET CONTAINERS TOTAL NET WEIGHT 36400 KG TOTAL GROSS" +
                                " WEIGHT 40000 KG.")
                        .build()
        );

        Manifeste brouillonManifeste = Manifeste.builder()
                .withNumeroRepertoire("MLO284")
                .withBureau("99z")
                .withDateArrivee(new SimpleDateFormat("dd-MM-yyyy").parse("01-03-2020"))
                .withAnnee("2020")
                .withNumero(5000)
                .withStatut("brouillon")
                .withMoyenTransport("CMA CGM FORT ST")
                .withOrigine("E")
                .withConsignataire("DDD")
                .withTypeManifeste("Manifeste maritime")
                .withArticles(articles1).build();


        manifesteRepository.save(brouillonManifeste);

        List<Article> articles2 = Arrays.asList(
                Article.builder()
                        .withNumero("DSID01 /1 /0")
                        .withTitreTransport("CNT0190022")
                        .withNombreColis(560)
                        .withModeConditionnement("BG")
                        .withPoidsBrut(28056)
                        .withDesignationCommerciale("SAID TO CONTAIN DOLOMIE AGRICOLE 0-2 MM GRANULE HS CODE "+
                                "25182000 GDFCAZ202601015 2020 VITASROUILLER 0955 BSC(CTN): "+
                                "0335774 SOTTISE 30550 GRAND BAY MAURITIUS")
                        .build(),
                Article.builder()
                        .withNumero("DSID01 /2 /0")
                        .withTitreTransport("CNZ0164304")
                        .withNombreColis(165)
                        .withModeConditionnement("PK")
                        .withPoidsBrut(7963)
                        .withDesignationCommerciale("HOUSEHOLD APPLIANCES ECTN 0333947")
                        .build()
        );

        Manifeste brouillonManifeste2 = Manifeste.builder()
                .withNumeroRepertoire("DSID01")
                .withBureau("99z")
                .withDateArrivee(new SimpleDateFormat("dd-MM-yyyy").parse("01-04-2020"))
                .withAnnee("2020")
                .withNumero(5001)
                .withStatut("brouillon")
                .withMoyenTransport("MAESTRO SUN")
                .withOrigine("E")
                .withConsignataire("DDD")
                .withTypeManifeste("Manifeste maritime")
                .withArticles(articles2).build();

        manifesteRepository.save(brouillonManifeste2);
        manifesteRepository.findAll().forEach(System.out::println);

        return "Data generated";
    }

}
