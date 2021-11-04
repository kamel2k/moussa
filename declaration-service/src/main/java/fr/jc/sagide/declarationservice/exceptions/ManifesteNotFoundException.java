package fr.jc.sagide.declarationservice.exceptions;

public class ManifesteNotFoundException extends RuntimeException{

    public ManifesteNotFoundException(String numeroRepertoire, String date, String bureau) {
        super(String.format("Manifeste introuvable %s %s %s", numeroRepertoire , date, bureau));
    }
}