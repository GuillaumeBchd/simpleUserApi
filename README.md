# Simple RESTful API utilisant nodeJS, docker et MongoDB.

## Introduction

Ce repository représente uniquement le travail d'un étudiant devenant fou durant le confinement du covid19.

En réalité, je voulais simplement savoir comment faire des API et je suis parti encore trop loin à faire du docker et de la base de donnée. (En vrai ça va c'est pas si compliqué et ça représente un cas plus 'pratique').

## Utilisation

Je vais donc vous expliquer comment utiliser ce programme (c'est plus un rappel pour moi même sachant que j'aurais oublié demain matin).


* Tout d'abord, il faut lancer la base de données avec la commande : `docker-compose -f src/mongo.yml up -d`.

On utilise donc le fichier mongo.yml se trouvant dans le dossier src. Ce fichier est en fait un fichier docker-compose (il contient actuellement une image MongoDB et une image Mongo-Express pour administrer la base de données). 

* Ensuite on va utiliser `npm install` (il faut avoir node.js d'installé, voici comment installer nodejs : [En cliquant ici](https://lmgtfy.com/?q=Comment+installer+node.js+%3F).)

* On lance ensuite l'api en localhost avec `node src/index.js` et la voilà disponible sur le port 3000 (avec la route /users).

Je vous conseille d'installer un logiciel qui gère les API pour pouvoir effectuer tout les types de requetes http (post, get, etc...). J'utilise personnellement [Insomnia](https://insomnia.rest/) (parce que le gentil monsieur du tuto a dit que c'était bien mais en vrai on s'en tabasse les boules comme dirait Samuel Etienne inspiré par le grand Etoiles). 

* Actuellement seul l'ajout d'utilisateur (via post et les paramètres en query) et la récupération des utilisateurs sous forme de fichier json (via get) est possible. Ainsi pour récupérer les utilisateurs ont a juste à taper dans son navigateur : [localhost:3000/users](http://localhost:3000/users).
