# Entrainement - Popup de notation

![Design preview](./doc/design/1.%20Desktop.png)
#### **[Demo Live](https://matthieu-munoz.github.io/training_self-review/)**

## Bienvenue ! 👋

Voici un exercice inspiré d'un challenge [Frontend Mentor](https://www.frontendmentor.io).

**Pour réaliser cet exercice, vous aurez besoin de connaissances de base en HTML, CSS ( SCSS ) et JavaScript ( React ).**

## C'est partie :

Cette exercice pourra vous être utile sur plusieurs projets !

En effet, imaginons ce petit composant d'envoi d'avis sur un site, il sera accessible sous forme de popup par l'appui sur un bouton ou un événement déclencheur comme un bouton ou autre. L'utilisateur pourra ainsi envoyer son avis sous forme de note sur cinq avec l'option d'ajouter aussi un court message.

Cet exercice est prévu pour guider la réalisation de ce composant avec React et Sass. Libre à vous d'en faire ce que vous voulez !

### Description du projet

|                    Vue global                     |              Vue au survol et clic              |
| :-----------------------------------------------: | :---------------------------------------------: |
|        ![](./doc/design/1.%20Desktop.png)         | ![](./doc/design/2.%20Desktop%20-%20Active.png) |
|               Vue commetaire actif                |              Confirmation d'envoi               |
| ![](./doc/design/3.%20Desktop%20-%20Comments.png) | ![](./doc/design/4.%20Desktop%20-%20Thanks.png) |

Vous trouverez également un fichier `style-guide.md` contenant les informations dont vous aurez besoin, telles que la palette de couleurs et les polices.

Ici, nous geront uniquement les fonctionnalités directes. L'ojectif final et d'afficher en console.log la note laissé par l'utilisateur et potentiellement le commentaire.

## Initialisation du projet

Cette exercice est livré avec un fichier package.json déjà remplie, toute les dépoendances utilisé y sont déjà entrée.
Il vous reste dons à :

1. Cloner ce repo
2. Ouvrir un terminal dans le répertoire
3. Faire un ```yarn```
4. Ouvrir dans Vscode à partir du terminal avec un ```code . ```
5. Pour démarrer le serveur de dev, faire un ```yarn start```

## Pas à pas

### Prise en main de l'exercice

On commence par parcourir l'environnement de travail, les divers dossiers/fichiers déjà en place.
Les ressources à pointer sont :

- Ce README
- le fichier [style-guide](./style-guide.md)
- les images du dossier doc/design
- La branche *solution-matthieu* contenant une solution possible

### Délimitation des composants et structuration de /src

Nous allons réaliser ce projet en utilisant le couple React-Redux. De ce fait une architecture de dossier s'impose.
COmmencons par lister les composants globaux de notre exercice. Pour cela il faut comprendre qu'est-ce qui nécéssite la création d'un composant ou non.
Une approche possible est de divisé l'app en composant par zone "graphique"/sémantique. On peut aussi découper en composant par éléments répété ou avec un contenue dynamique. Par exemple un bouton qu'on retrouve à plusieurs endroit dans notre intégration pourrait être un composant, une zone qui utilise des données du state pourrait aussi être un composant.
En bref, on pourrait faire un composant pour un peu tout et n'importe quoi, c'est donc à vous de trouver votre découpage, celui qui vous convient !
De plus, le premier découpe n'est qu'indicatif et peut tout à fait évoluer au fur est à mesure que le projet avance.

<details>
  <summary>Découpage proposé par Matthieu</summary>
  
  Spoiler text. Note that it's important to have a space after the summary tag. You should be able to write any markdown you want inside the `<details>` tag... just make sure you close `<details>` afterward.
  
  ```javascript
  console.log("I'm a code block!");
  ```
  
</details>

**Team Apollo** 🚀
