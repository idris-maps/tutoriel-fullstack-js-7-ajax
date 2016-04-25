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
  callback('le serveur ne répond pas à l\'URL ' + url)
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
