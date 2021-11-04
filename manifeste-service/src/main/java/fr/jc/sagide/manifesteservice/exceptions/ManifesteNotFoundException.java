package fr.jc.sagide.manifesteservice.exceptions;

public class ManifesteNotFoundException extends RuntimeException{

    public ManifesteNotFoundException(Long id) {
        super("Manifeste introuvable " + id);
    }
}