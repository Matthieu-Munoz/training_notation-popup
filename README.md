# Entrainement — Popup de notation

![Design preview](./doc/design/1.%20Desktop.png)
#### **[Demo Live](https://matthieu-munoz.github.io/training_self-review/)**

## Bienvenue ! 👋

Voici un exercice inspiré d'un challenge [Frontend Mentor](https://www.frontendmentor.io).

**Pour réaliser cet exercice, vous aurez besoin de connaissances de base en HTML, CSS ( SCSS ) et JavaScript ( React ).**

## C'est parti :

Cet exercice pourra vous être utile sur plusieurs projets !

En effet, imaginons ce petit composant d'envoi d'avis sur un site, il sera accessible sous forme de popup par l'appui sur un bouton ou un événement déclencheur comme un bouton ou autre. L'utilisateur pourra ainsi envoyer son avis sous forme de note sur cinq avec l'option d'ajouter aussi un court message.

Cet exercice est prévu pour guider la réalisation de ce composant avec React et Sass. Libre à vous d'en faire ce que vous voulez !

### Description du projet

|                    Vue globale                    |              Vue au survol et clic              |
| :-----------------------------------------------: | :---------------------------------------------: |
|        ![](./doc/design/1.%20Desktop.png)         | ![](./doc/design/2.%20Desktop%20-%20Active.png) |
|               Vue commetaire actif                |              Confirmation d'envoi               |
| ![](./doc/design/3.%20Desktop%20-%20Comments.png) | ![](./doc/design/4.%20Desktop%20-%20Thanks.png) |

Vous trouverez également un fichier `style-guide.md` contenant les informations dont vous aurez besoin, telles que la palette de couleurs et les polices.
Objectifs : 

- L'utilisateur doit pouvoir choisir une note entre 1 et 5
  - Une note doit être sélectionnée pour exécuter l'envoi
- À l'appui sur le bouton *commentaire*, un champ pour taper du texte s'affiche
  - Si un commentaire est entré, alors l'envoyer en plus de la note
- Suite à l'envoi, afficher un message de succès avec la note envoyée.

Ici, nous gérons uniquement les fonctionnalités directes. L'objectif final et d'afficher en console.log la note laissé par l'utilisateur à l'envoi et potentiellement le commentaire.
En cas réel, on pourrait imaginer l'envoi d'un mail contenant la note ainsi que le commentaire, ou bien de stocker tous les avis dans une base de données (utilisation posible d'une api)

## Initialisation du projet

Cet exercice est livré avec un fichier package.json déjà rempli, toutes les dépendances utilisées y sont déjà configurées.
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
- Le fichier package.json pour connaitre les dépendances installées. Je vous aide avec les quelques notables :
  - classnames => Permet au besoin de conditionner une variable à destination d'un className. Très utile pour des styles différents en fonction d'un état.
  - react-autosize-textarea => Permet l'ajout d'un composant textarea "autosizeable". Plus d'infos [ici](https://github.com/buildo/react-autosize-textarea) et [là pour comprendre](https://react-components.buildo.io/#textareaautosize)
  - react-icons => Donne accès à PLEIN d'icônes très facilement, [à consulter](https://react-icons.github.io/react-icons/)
  - react-tooltip => Permet d'afficher et de paramétrer des petits tooltip très facilement. [doc](https://github.com/wwayne/react-tooltip#readme) et [demo](https://wwayne.github.io/react-tooltip/)
  - react, react-dom, react-redux, redux, prop-types" => Pour des raisons évidentes
- La branche *solution-matthieu* contenant une solution possible

### Délimitation des composants et structuration de /src

Nous allons réaliser ce projet en utilisant le couple React-Redux. De ce fait une architecture de dossier s'impose.
Commençons par lister les composants globaux de notre exercice. Pour cela il faut comprendre qu'est-ce qui nécessite la création d'un composant ou non.
Une approche possible est de diviser l'app en composant par zone "graphique"/sémantique. On peut aussi découper en composant par éléments répétés ou avec un contenu dynamique. Par exemple, un bouton que l'on retrouve à plusieurs endroits dans notre intégration pourrait être un composant, une zone qui utilise des données du state pourrait aussi être un composant.
En bref, on serait capable de faire un composant pour un peu tout et n'importe quoi, c'est donc à vous de trouver votre découpage, celui qui vous convient.
De plus, la première découpe n'est qu'indicatif et peut tout à fait évoluer au fur est à mesure que le projet avance.

<details>
  <summary>Découpage des composants - proposé par Matthieu</summary>
  J'ai choisi découper cette app en 4 composants :

- Un composant principal - *Review* - qui se charge d'afficher soit l'interface de notage soit le message de succes
- Le composant - *SubmitReview* - qui gère l'interface de notage
- Le sous-composant - *Ratings* - qui s'occupe des boutons de note ainsi que celui de commentaire
- Un composant - *Comment* - permettant l'affichage d'un textarea pour laisser un commentaire en plus d'une note
- Et enfin le composant - *Succes* - qui affiche le message de succès.

  ```bash
    ├── components
    │   ├── Comment
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── Ratings
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── Review
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── SubmitReview
    │   │   ├── index.js
    │   │   └── styles.scss
    │   └── Succes
    │       ├── index.js
    │       └── styles.scss
  ```

</details>

Une fois les composants posés, on peut commencer la structure de notre projet React-Redux.
Nous aurons besoin d'un dossier store, reducers, actions et un dernier dossier middlewares.

<details>
  <summary>Découpage complet - proposé par Matthieu</summary>
  
  ```bash
    src
    ├── actions
    │   └── index.js
    ├── assets
    │   ├── favicon.ico
    │   ├── fonts
    │   │   └── Roboto-Regular.ttf
    │   ├── images
    │   │   └── done-sent.svg
    │   └── index.html
    ├── components
    │   ├── Comment
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── Ratings
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── Review
    │   │   ├── index.js
    │   │   └── styles.scss
    │   ├── SubmitReview
    │   │   ├── index.js
    │   │   └── styles.scss
    │   └── Succes
    │       ├── index.js
    │       └── styles.scss
    ├── middlewares
    │   ├── debug.js
    │   └── submitReview.js
    ├── reducers
    │   └── index.js
    ├── store
    │   └── index.js
    ├── styles
    │    ├── index.scss
    │    ├── _reset.css
    │    └── _vars.scss
    ├── index.js
  ```

</details>

### Bonus

Plusieurs petites fonctionnalités bonus sont envisageables :

- Un compteur de caractère dans la zone de commentaire
- Des toolkit affichant une petite bulle indicative sur certains boutons expliquant l'utilité de ceux-ci
- Une notification en cas d'essai d'envoi sans avoir mis de note
- Affichage du popup à partir d'un petit bouton fixe dans un coin de l'écran
- Passer à une notation par étoile, avec remplissage des étoiles précédentes comme indication
- ... Libre à vous d'en ajouter beaucoup d'autre !!

## **Team Apollo** 🚀
