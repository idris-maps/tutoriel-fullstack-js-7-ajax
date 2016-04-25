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
