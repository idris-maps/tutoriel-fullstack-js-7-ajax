# AJAX

[AJAX](https://fr.wikipedia.org/wiki/Ajax_%28informatique%29) est une architecture où le client demande et envoit des données au serveur. L'acronyme signifie "Asynchronous JavaScript and XML". Malgré le nom, cette manière de faire permet aussi d'envoyer et de recevoir des données au format [JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation), pas uniquement du [XML](https://fr.wikipedia.org/wiki/Extensible_Markup_Language). Pour faire simple, AJAX est ce qui permettera à nos clients de communiquer avec le serveur REST du chapitre précédant.

Dupliquez le dossier ```6.serveur``` et appelez-le ```7.ajax```.

Créez un dossier ```clients``` dans ```lib``` où nous mettrons les scriptes pour construire les clients. 

## Riot

### Mise en place

Créez un fichier ```riot``` dans ```lib/clients```

Copiez les fichiers suivants du dossier ```4.riot``` du [chapitre 4](link_to_do) vers ```7.ajax```

* ```4.riot/main.js``` > ```7.ajax/lib/clients/riot/main.js```
* ```4.riot/lib``` > ```7.ajax/lib/clients/riot/lib```
* ```4.riot/public/index.html``` > ```7.ajax/public/riot/index.html```
* ```4.riot/public/style.css``` > ```7.ajax/public/riot/style.css```

Nous ne prenons ni ```package.json``` ni ```node_modules```. Puisque nous sommes dans un nouveau projet ```7.ajax```. Nous allons à nouveau télécharger les librairies nécessaires.

Dans ```7.ajax``` ouvrez le terminal.

```
$ npm install handlebars browserify-handlebars --save-dev
```

```--save-dev``` veut dire que nous n'avons besoin de ces librairies que pour créer le client et non pour faire tourner le serveur. Si quelqu'un télécharge le serveur mais ne veut pas modifier les clients, il pourra lancer ```npm install``` pour ne télécharger que les scriptes utiles au fonctionnement du serveur.

Dans ```6.serveur/package.json``` ajoutons les scriptes ```watch-riot``` et ```build-riot```.

```
"watch-riot": "watchify lib/clients/riot/main.js -o public/riot/script.js -t riotify",
"build-riot": "browserify lib/clients/riot/main.js -o public/riot/script.js -t riotify | minify public/riot/script.js -o public/riot/script.js"
```

Dans le terminal lancez ```watch-riot```:

```
$ npm run watch-riot
```

Si le fichier ```public/riot/script.js``` est créé, nous sommes prêts à ajouter AJAX au client.

Démarrez le serveur dans une autre fenêtre du terminal.

```
$ node serveur
```

Et ouvrez la page dans le navigateur à cette adresse: http://localhost:3000/riot/

## AJAX en javascript pure

Il existe beaucoup de librairies qui nous permettent d'utiliser AJAX mais pour rester dans l'esprit de cet exercice, nous allons l'écrire nous même. 

Créez un fichier ```ajax.js``` dans ```lib/clients/riot/lib```.

```
// pour faire une requête GET
exports.get = function(url, callback) {

// une instance XMLHttpRequest()
 var request = new XMLHttpRequest()

// le type de requête et l'URL
 request.open('GET', url, true)

// ce qu'il faut faire avec la réponse
 request.onload = function() {

// s'il n'y a pas de problème
   if (request.status >= 200 && request.status < 400) {

// la fonction de rappel envoit un premier argument "err" null et un deuxième argument avec les données
     var data = JSON.parse(request.responseText)
     callback(null, data)

// si nous avons connecté au serveur mais celui-ci nous renvoit une erreur
   } else {
    callback('erreur dans la requête GET à l\'URL ' + url)
   }
 }

// si nous n'arrivons pas à atteindre le serveur
 request.onerror = function() {
  callback('le serveur ne répond pas à l'\URL ' + url)
 }

// envoyer la requête
 request.send()
}

// pour faire une requête POST
exports.post = function(url, data, callback) {
 var request = new XMLHttpRequest()
 request.open('POST', url, true)
 request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
 request.onreadystatechange = function () { 
  if(request.readyState == 4 && request.status == 200) {
   var json = JSON.parse(request.responseText)
   callback(null, json)
  } else {
   callback('Could not post to server')
  }
 }

// la seule différence avec GET est que nous envoyons des données au serveur
 request.send(JSON.stringify(data))
}
```

Nous allons maintenant ouvrir ```lib/clients/riot/lib/Modele-a-faire.js``` pour que le modèle aille chercher et modifie les données sur le serveur.

Les changements sont commentés.

```
var Event = require('events')
var ajax = require('./ajax') // lien vers ajax.js

module.exports = function() {
 var ctx = this
 ctx.evt = new Event
 ctx.data = [] // vider le dictionnaire "data"

// une méthode "charger" pour charger les données au lancement de l'application
 ctx.charger = function(callback) {
  ajax.get('/api/a-faire', function(err,data) {
   if(err) { console.log(err) }
   else { ctx.data = data }
   callback()
  })
 }

 ctx.ajouter = function(text) {

// POST un objet "aAjouter" et émettre "ajout" quand le serveur a répondu
  var aAjouter = {text: text, fait: false}
  ajax.post('/api/a-faire', aAjouter, function(err,data) {
   if(err) { console.log(err) }
   else { ctx.data = data }
    ctx.evt.emit('ajout')
  })
 }

 ctx.basculerFait = function(index) {
  if(ctx.data[index].fait) { ctx.data[index].fait = false }
  else { ctx.data[index].fait = true }
  maj(ctx.data[index]) // mettre à jour sur le serveur, voir fonction plus bas
 }

 ctx.mettreAJour = function(index, text) {
  ctx.data[index].text = text
  maj(ctx.data[index]) // mettre à jour sur le serveur, voir fonction plus bas
 }

 ctx.supprimerFait = function() {
  var aGarder = []
  var idsAsupprimer = [] // dictionnaire d'ID à supprimer
  ctx.data.forEach(function(element) {
   if(!element.fait) { aGarder.push(element) }
   else { idsAsupprimer.push(element.id) }
  })
  ctx.data = aGarder

// POST les IDs à supprimer
  ajax.post('/api/a-faire/supprimer', idsAsupprimer, function(err,data) {
   if(err) { console.log(err) }
   else { ctx.data = data }
   ctx.evt.emit('suppression')
  })
 }
}

// fonction pour POSTer les mises à jour
function maj(element) {
 ajax.post('/api/a-faire/maj', element)
}
```

Lors du chargement de la page, il faut aller chercher les données sur le serveur avec la méthode ```.charger()```.

Ouvrez ```lib/clients/riot/main.js```

```
var riot = require('riot')
var Modele = require('./lib/Modele-a-faire')
var aFaireListe = require('./lib/composants/a-faire-liste.tag')
var aFaireFormulaire = require('./lib/composants/a-faire-formulaire.tag')

var modele = new Modele

modele.charger(function() { // <- nouveau
 riot.mount('a-faire-liste', modele)
 riot.mount('a-faire-formulaire', modele)
}) // <- nouveau
```

Si le serveur et le scripte ```watch-riot``` tournent encore sans afficher d'erreurs, revisitez la page dans le navigateur. Rien ne s'affiche, c'est normal nous n'avons rien "à faire" dans la base de données. Ajoutez quelque chose.

En testant l'application, jetez un coup d'oeil aux requêtes AJAX que fait le navigateur. Dans Firefox, c'est la commande clavier ```Ctrl-Shift-Q```. Vous allez voir les requêtes GET et POST effectuées.

Arrêtez le scripte ```watch-riot``` et créez l'application en lançant:

```
$ npm run build-riot
```

## Angular

Pour Angular nous allons utiliser la méthode ```$http```.

### Mise en place

Copiez les fichiers de ```5.angular``` vers ```7.ajax```

* ```5.angular/main.js``` > ```7.ajax/lib/clients/angular/main.js```
* ```5.angular/public/index.html``` > ```7.ajax/public/angular/index.html```
* ```5.angular/public/style.css``` > ```7.ajax/public/angular/style.css```

Installez angular

```
$ npm install angular --save-dev
```

Ajoutez les scriptes ```watch-angular``` et ```build-angular``` à ```package.json```

```
"watch-angular": "watchify lib/clients/angular/main.js -o public/angular/script.js",
"build-angular": "browserify lib/clients/angular/main.js -o public/angular/script.js | minify public/angular/script.js -o public/angular/script.js"
```

Lancez ```watch-angular```.

### $http

Ouvrez ```main.js```

Dans angular, ```$http``` s'occupe des requêtes AJAX. Il faut l'ajouter comme argument de la fonction dans ```.controller()``` pour pouvoir l'utiliser.

Les nouveautés sont commentées.

```
var angular = require('angular')
var app = angular.module('aFaire', [])

function aFaireCtrl($scope, $http) { // ajouter $http comme argument de la fonction

// vider le dictionnaire
 $scope.data = [] 

// charger les données du serveur
 $http.get('/api/a-faire').success(function(data) {
  $scope.data = data
 })

 $scope.ajouter = function() {
  if($scope.nouveau) {
   var aAjouter = {text: $scope.nouveau, fait: false} // un objet "aAjouter"
   $http.post('/api/a-faire', aAjouter) // POSTer
    .success(function(data) { $scope.data = data }) // en cas de succès
    .error(function(err) { console.log(err) }) // s'il y a une erreur
  }
 }

 $scope.supprimerFait = function() {
  var idsAsupprimer = [] // dictionnaire d'IDs à supprimer
  $scope.data.forEach(function(o) {
   if(o.fait) { idsAsupprimer.push(o.id) } // si fait mettre l'ID dans "idsAsupprimer"
  })
  $http.post('/api/a-faire/supprimer', idsAsupprimer) // POSTer les IDs
   .success(function(data) { $scope.data = data }) // en cas de succès
   .error(function(err) { console.log(err) }) // s'il y a une erreur
 }

 $scope.basculerFait = function(index) {
  if($scope.data[index].fait) {
   $scope.data[index].fait = false
  } else {
   $scope.data[index].fait = true
  }
  maj($scope, $http, $scope.data[index]) // mettre à jour sur le serveur (voir fonction plus bas)
 }

 $scope.basculerMaj = function(index) {
  if($scope.data[index].maj) { $scope.data[index].maj = undefined }
  else {
   $scope.data.forEach(function(o) { if(o.maj) { o.maj = undefined } })
   $scope.data[index].maj = true
  }
 }

 $scope.mettreAJour = function(index) {
  if(this.nouveauText) {
   $scope.data[index].text = this.nouveauText
   maj($scope, $http, $scope.data[index]) // mettre à jour sur le serveur (voir fonction plus bas)
   $scope.data[index].maj = undefined
   this.nouveauText = ''
  }
 }
}

// injecter aussi $http avec $inject
aFaireCtrl.$inject = ['$scope', '$http']

// passer $http au contrôleur
app.controller('aFaireCtrl', ['$scope', '$http', aFaireCtrl])

// fonction de mise à jour
function maj($scope, $http, element) {
 $http.post('/api/a-faire/maj', element)
  .success(function(data) { $scope.data = data })
  .error(function(err) { console.log(err) })
} 
```

Si l'application fonctionne, arrêtez ```watch-angular``` et lancez ```build-angular```.

```
$ npm run build-angular
```

# FIN

Dans ce tutoriel nous avons vu comment créer des applications de type MVC avec javascript. En commençant par tout faire nous-même pour comprendre ce qui se passe. Puis en ajoutant des scriptes externes pour nous faciliter la vie. Nous avons rapidement vu comment créer un serveur avec Express qui sert des données via une API REST et des fichiers. Finalement, dans ce chapiter, nous avons avons modifié deux clients pour qu'ils communiquent avec l'API REST par le biais de requêtes AJAX.

Notre application "A faire" est excessivement simpliste et n'est pas d'une grande utilité. Mais j'espère que vous avez maintenant vu les bases qui vous permetterons de créer des applications plus ambitieuses.

<img src="https://avatars3.githubusercontent.com/u/12154856" alt="Idris maps">

http://www.idris-maps.com

Si vous avez aimé ce tutoriel et souhaitez m'employer, vous pouvez me contacter à ```idris.maps(a)gmx(point)ch```

