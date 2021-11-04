
# Gainde Microservice

## Compilation des projets

* Pour chaque microservice, faire

mvn clean install -DskipTests

* Copier le dossier application-config dans le dossier home de l'utilisateur système.

Ensuite dans le dossier application-config du home lancer les commandes suivantes :

git init

git add .

git commit -m "config"

* dans le dossier gainde-infra

Lancer la commande : docker-compose up -d

* dans le dossier gainde-ui, lancer les commandes

npm install

npm start

* comptes

consignataire: CDDDDDA 123456

declarant: TDDDDDA 123456

## Insetion des données de test

* le jeu de donnée doit etre présent en base pour tester l'application, pour cela il suffit de lancer dans le navigateur les deux url:

* creation utilisateurs
http://localhost:8088/api/test/data

* insertion des manifestes
http://localhost:8080/manifestes/data

## URL d'accès au gainde microservice ui

http://localhost:4200

## Autres URL: zipkin, admin, openapi, etc.

* adminer
http://localhost:4000/?pgsql=postgres-db&username=postgres&db=sagide&ns=public

* openapi service manifeste
http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config
http://localhost:8080/swagger-ui.html

* openapi declaration service
http://localhost:8081/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config
http://localhost:8081/v1/declarations

* zipkin
http://localhost:9411/zipkin/

* boot admin
http://localhost:9105/wallboard
