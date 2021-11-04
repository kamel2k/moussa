package fr.jc.sagide.manifesteservice;

import fr.jc.sagide.manifesteservice.model.Article;
import fr.jc.sagide.manifesteservice.model.Manifeste;
import fr.jc.sagide.manifesteservice.repository.ManifesteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

//@Component
public class SampleDataCLR implements CommandLineRunner {

    private final ManifesteRepository manifesteRepository;

    @Autowired
    public SampleDataCLR(ManifesteRepository manifesteRepository) {
        this.manifesteRepository = manifesteRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        manifesteRepository.deleteAll();

        List<Article> articles1 = Arrays.asList(
                Article.builder()
                        .withNumero("1")
                        .withTitreTransport("aa")
                        .withNombreColis(10)
                        .withModeConditionnement("EF")
                        .withPoidsBrut(2000)
                        .withDesignationCommerciale("TF")
                        .build(),
                Article.builder()
                        .withNumero("2")
                        .withTitreTransport("bb")
                        .withNombreColis(10)
                        .withModeConditionnement("TT")
                        .withPoidsBrut(2000)
                        .withDesignationCommerciale("BG")
                        .build()
        );

        Manifeste brouillonManifeste = Manifeste.builder()
                .withNumeroRepertoire("rep1")
                .withBureau("99z")
                .withDateArrivee(new SimpleDateFormat("dd-MM-yyyy").parse("01-03-2020"))
                .withAnnee("2020")
                .withNumero(5000)
                .withStatut("brouillon")
                .withArticles(articles1).build();


        manifesteRepository.save(brouillonManifeste);

        List<Article> articles2 = Arrays.asList(
                Article.builder()
                        .withNumero("1")
                        .withTitreTransport("cc")
                        .withNombreColis(10)
                        .withModeConditionnement("GH")
                        .withPoidsBrut(2000)
                        .withDesignationCommerciale("KN")
                        .build(),
                Article.builder()
                        .withNumero("2")
                        .withTitreTransport("dd")
                        .withNombreColis(10)
                        .withModeConditionnement("LL")
                        .withPoidsBrut(2000)
                        .withDesignationCommerciale("ZZ")
                        .build()
        );

        Manifeste brouillonManifeste2 = Manifeste.builder()
                .withNumeroRepertoire("rep2")
                .withBureau("99z")
                .withDateArrivee(new SimpleDateFormat("dd-MM-yyyy").parse("01-04-2020"))
                .withAnnee("2020")
                .withNumero(5001)
                .withStatut("brouillon")
                .withArticles(articles2).build();

        manifesteRepository.save(brouillonManifeste2);

        manifesteRepository.findAll().forEach(System.out::println);
    }
}
