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
