!function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require
if(!s&&u)return u(a,!0)
if(o)return o(a,!0)
var f=new Error("Cannot find module '"+a+"'")
throw f.code="MODULE_NOT_FOUND",f}var c=n[a]={exports:{}}
t[a][0].call(c.exports,function(e){var n=t[a][1][e]
return i(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a])
return i}({1:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number")
return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,u,f
if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t
throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],s(n))return!1
if(i(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(a(n))for(o=Array.prototype.slice.call(arguments,1),f=n.slice(),r=f.length,u=0;r>u;u++)f[u].apply(this,o)
return!0},r.prototype.addListener=function(e,t){var n
if(!i(t))throw TypeError("listener must be a function")
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function")
var r=!1
return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,s
if(!i(t))throw TypeError("listener must be a function")
if(!this._events||!this._events[e])return this
if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t)
else if(a(n)){for(s=o;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s
break}if(0>r)return this
1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this
if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t)
return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n)
else if(n)for(;n.length;)this.removeListener(e,n[n.length-1])
return delete this._events[e],this},r.prototype.listeners=function(e){var t
return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e]
if(i(t))return 1
if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,n){function r(e){o.post("/api/a-faire/maj",e)}var i=e("events"),o=e("./ajax")
t.exports=function(){var e=this
e.evt=new i,e.data=[],e.charger=function(t){o.get("/api/a-faire",function(n,r){n?console.log(n):e.data=r,t()})},e.ajouter=function(t){var n={text:t,fait:!1}
o.post("/api/a-faire",n,function(t,n){t?console.log(t):e.data=n,e.evt.emit("ajout")})},e.basculerFait=function(t){e.data[t].fait?e.data[t].fait=!1:e.data[t].fait=!0,r(e.data[t])},e.mettreAJour=function(t,n){e.data[t].text=n,r(e.data[t])},e.supprimerFait=function(){var t=[],n=[]
e.data.forEach(function(e){e.fait?n.push(e.id):t.push(e)}),e.data=t,o.post("/api/a-faire/supprimer",n,function(t,n){t?console.log(t):e.data=n,e.evt.emit("suppression")})}}},{"./ajax":3,events:1}],3:[function(e,t,n){n.get=function(e,t){var n=new XMLHttpRequest
n.open("GET",e,!0),n.onload=function(){if(n.status>=200&&n.status<400){var r=JSON.parse(n.responseText)
t(null,r)}else t("erreur dans la requête GET à l'URL "+e)},n.onerror=function(){t("le serveur ne répond pas à l'URL "+e)},n.send()},n.post=function(e,t,n){var r=new XMLHttpRequest
r.open("POST",e,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=JSON.parse(r.responseText)
n(null,e)}else n("Could not post to server")},r.send(JSON.stringify(t))}},{}],4:[function(e,t,n){var r=e("riot")
t.exports=r.tag2("a-faire-formulaire",'<div class="ajouter"> <div class="ajouter-input"> <input id="ajouter-input" class="form-control" placeholder="À faire" type="text"> </div> <div class="ajouter-bouton"> <button id="ajouter-bouton" class="btn btn-primary" onclick="{ajouter}">Ajouter</button> </div> </div> <div id="supprimer-fait"> <button id="supprimer-fait-bouton" class="btn btn-danger" onclick="{supprimerFait}">Supprimer ce qui a été fait</button> </div>',"","",function(e){var t=this
t.modele=e,t.ajouter=function(){var e=document.getElementById("ajouter-input")
e.value&&(t.modele.ajouter(e.value),e.value="")},t.supprimerFait=function(){t.modele.supprimerFait()}})},{riot:7}],5:[function(e,t,n){var r=e("riot")
t.exports=r.tag2("a-faire-liste",'<div each="{liste}" class="{fait ? \'liste-element fait\' : \'liste-element a-faire\'}"> <div class="liste-element-info"> <div class="liste-element-texte"> <p>{text}</p> </div> <div class="liste-element-modif" onclick="{basculerMaj}"> <span class="glyphicon glyphicon-pencil"></span> </div> <div class="liste-element-statut" onclick="{basculerFait}"> <span class="{fait ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'}"></span> </div> </div> <div class="liste-element-maj" if="{maj}"> <div class="liste-element-maj-input"> <input class="form-control" id="liste-element-maj-input" type="text"> </div> <div class="liste-element-maj-bouton" onclick="{mettreAJour}"> <button class="btn btn-primary" id="liste-element-maj-bouton">OK</button> </div> </div> </div>',"","",function(e){var t=this
t.modele=e,t.liste=t.modele.data,t.basculerFait=function(e){var n=t.liste.indexOf(e.item)
t.modele.basculerFait(n)},t.basculerMaj=function(e){e.item.maj?e.item.maj=void 0:(t.liste.forEach(function(e){e.maj=void 0}),e.item.maj=!0)},t.mettreAJour=function(e){var n=t.liste.indexOf(e.item),r=document.getElementById("liste-element-maj-input")
r.value&&(t.modele.mettreAJour(n,r.value),r.value="",e.item.maj=void 0)},t.modele.evt.on("ajout",function(){t.liste=t.modele.data,t.update()}),t.modele.evt.on("suppression",function(){t.liste=t.modele.data,t.update()})})},{riot:7}],6:[function(e,t,n){var r=e("riot"),i=e("./lib/Modele-a-faire"),o=(e("./lib/composants/a-faire-liste.tag"),e("./lib/composants/a-faire-formulaire.tag"),new i)
o.charger(function(){r.mount("a-faire-liste",o),r.mount("a-faire-formulaire",o)})},{"./lib/Modele-a-faire":2,"./lib/composants/a-faire-formulaire.tag":4,"./lib/composants/a-faire-liste.tag":5,riot:7}],7:[function(e,t,n){!function(e,r){"use strict"
function i(e,t,n){var r={}
return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function o(e,t){for(var n,r=t.length,i=e.length;r>i;)n=t[--r],t.splice(r,1),n.unmount()}function a(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n]
A(r)?m(r,function(e){E(e,n,t)}):E(r,n,t)})}function s(e,t,n){var r,i=e._root
for(e._virts=[];i;)r=i.nextSibling,n?t.insertBefore(i,n._root):t.appendChild(i),e._virts.push(i),i=r}function u(e,t,n,r){for(var i,o=e._root,a=0;r>a;a++)i=o.nextSibling,t.insertBefore(o,n._root),o=i}function f(e,t,n){b(e,"each")
var r,f=typeof x(e,"no-reorder")!==ee||b(e,"no-reorder"),c=M(e),l=X[c]||{tmpl:e.outerHTML},d=ie.test(c),v=e.parentNode,h=document.createTextNode(""),m=L(e),g="option"===c.toLowerCase(),y=[],_=[],w="VIRTUAL"==e.tagName
n=fe.loopKeys(n),v.insertBefore(h,e),t.one("before-mount",function(){e.parentNode.removeChild(e),v.stub&&(v=t.root)}).on("update",function(){var b=fe(n.val,t),x=document.createDocumentFragment()
A(b)||(r=b||!1,b=r?Object.keys(b).map(function(e){return i(n,e,b[e])}):[])
for(var L=0,j=b.length;j>L;L++){var E=b[L],N=f&&E instanceof Object&&!r,C=_.indexOf(E),M=~C&&N?C:L,O=y[M]
E=!r&&n.key?i(n,E,L):E,!N&&!O||N&&!~C||!O?(O=new p(l,{parent:t,isLoop:!0,hasImpl:!!X[c],root:d?v:e.cloneNode(),item:E},e.innerHTML),O.mount(),w&&(O._root=O.root.firstChild),L!=y.length&&y[L]?(w?s(O,v,y[L]):v.insertBefore(O.root,y[L].root),_.splice(L,0,E)):w?s(O,x):x.appendChild(O.root),y.splice(L,0,O),M=L):O.update(E,!0),M!==L&&N&&y[L]&&(w?u(O,v,y[L],e.childNodes.length):v.insertBefore(O.root,y[L].root),n.pos&&(O[n.pos]=L),y.splice(L,0,y.splice(M,1)[0]),_.splice(L,0,_.splice(M,1)[0]),!m&&O.tags&&a(O,L)),O._item=E,T(O,"_parent",t)}if(o(b,y),g){if(v.appendChild(x),se&&!v.multiple)for(var S=0;S<v.length;S++)if(v[S].__riot1374){v.selectedIndex=S,delete v[S].__riot1374
break}}else v.insertBefore(x,h)
m&&(t.tags[c]=y),_=b.slice()})}function c(e,t,n,r){I(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||x(e,"each")?1:0,n){var i=L(e)
i&&!e.isLoop&&n.push(N(i,{root:e,parent:t},e.innerHTML,t))}(!e.isLoop||r)&&K(e,t,[])}})}function l(e,t,n){function r(e,t,r){fe.hasExpr(t)&&n.push(O({dom:e,expr:t},r))}I(e,function(e){var n,i=e.nodeType
return 3==i&&"STYLE"!=e.parentNode.tagName&&r(e,e.nodeValue),1==i?(n=x(e,"each"))?(f(e,t,n),!1):(m(e.attributes,function(t){var n=t.name,i=n.split("__")[1]
return r(e,t.value,{attr:i||n,bool:i}),i?(b(e,n),!1):void 0}),L(e)?!1:void 0):void 0})}function p(e,t,n){function i(){var e=L&&x?p:v||p
m(M.attributes,function(t){var n=t.value
d[_(t.name)]=fe.hasExpr(n)?fe(n,e):n}),m(Object.keys(H),function(t){d[_(t)]=fe(H[t],e)})}function o(e){for(var t in j)typeof p[t]!==ne&&k(p,t)&&(p[t]=e[t])}function a(){p.parent&&x&&m(Object.keys(p.parent),function(e){var t=!S(oe,e)&&S(q,e);(typeof p[e]===ne||t)&&(t||q.push(e),p[e]=p.parent[e])})}function s(e){p.update(e,!0)}function u(e){if(m(N,function(t){t[e?"mount":"unmount"]()}),v){var t=e?"on":"off"
x?v[t]("unmount",p.unmount):v[t]("update",s)[t]("unmount",p.unmount)}}var f,p=V.observable(this),d=P(t.opts)||{},v=t.parent,x=t.isLoop,L=t.hasImpl,j=R(t.item),E=[],N=[],M=t.root,I=M.tagName.toLowerCase(),H={},q=[]
e.name&&M._tag&&M._tag.unmount(!0),this.isMounted=!1,M.isLoop=x,M._tag=this,T(this,"_riot_id",++z),O(this,{parent:v,root:M,opts:d,tags:{}},j),m(M.attributes,function(e){var t=e.value
fe.hasExpr(t)&&(H[e.name]=t)}),f=ce(e.tmpl,n),T(this,"update",function(e,t){return e=R(e),a(),e&&y(j)&&(o(e),j=e),O(p,e),i(),p.trigger("update",e),h(E,p),t&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):pe(function(){p.trigger("updated")}),this}),T(this,"mixin",function(){return m(arguments,function(e){var t
e=typeof e===ee?V.mixin(e):e,g(e)?(t=new e,e=e.prototype):t=e,m(Object.getOwnPropertyNames(e),function(e){"init"!=e&&(p[e]=g(t[e])?t[e].bind(p):t[e])}),t.init&&t.init.bind(p)()}),this}),T(this,"mount",function(){i()
var t=V.mixin(Z)
if(t&&p.mixin(t),e.fn&&e.fn.call(p,d),l(f,p,E),u(!0),e.attrs&&$(e.attrs,function(e,t){w(M,e,t)}),(e.attrs||L)&&l(p.root,p,E),(!p.parent||x)&&p.update(j),p.trigger("before-mount"),x&&!L)M=f.firstChild
else{for(;f.firstChild;)M.appendChild(f.firstChild)
M.stub&&(M=v.root)}T(p,"root",M),x&&c(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){F(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),T(this,"unmount",function(e){var t,n=M,i=n.parentNode,o=G.indexOf(p)
if(p.trigger("before-unmount"),~o&&G.splice(o,1),i){if(v)t=C(v),A(t.tags[I])?m(t.tags[I],function(e,n){e._riot_id==p._riot_id&&t.tags[I].splice(n,1)}):t.tags[I]=r
else for(;n.firstChild;)n.removeChild(n.firstChild)
e?(b(i,W),b(i,Y)):i.removeChild(n)}this._virts&&m(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),p.trigger("unmount"),u(),p.off("*"),p.isMounted=!1,delete M._tag}),c(f,this,N)}function d(t,n,r,i){r[t]=function(t){var o,a=i._parent,s=i._item
if(!s)for(;a&&!s;)s=a._item,a=a._parent
t=t||e.event,k(t,"currentTarget")&&(t.currentTarget=r),k(t,"target")&&(t.target=t.srcElement),k(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=s,n.call(i,t)===!0||/radio|check/.test(r.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(o=s?C(a):i,o.update())}}function v(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function h(e,t){m(e,function(e,n){var r=e.dom,i=e.attr,o=fe(e.expr,t),a=e.dom.parentNode
if(e.bool?o=!!o:null==o&&(o=""),e.value!==o){if(e.value=o,!i)return o+="",void(a&&("TEXTAREA"===a.tagName?(a.value=o,ae||(r.nodeValue=o)):r.nodeValue=o))
if("value"===i)return void(r.value=o)
if(b(r,i),g(o))d(i,o,r,t)
else if("if"==i){var s=e.stub,u=function(){v(s.parentNode,s,r)},f=function(){v(r.parentNode,r,s)}
o?s&&(u(),r.inStub=!1,F(r)||I(r,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(s=e.stub=s||document.createTextNode(""),r.parentNode?f():(t.parent||t).one("updated",f),r.inStub=!0)}else"show"===i?r.style.display=o?"":"none":"hide"===i?r.style.display=o?"none":"":e.bool?(r[i]=o,o&&w(r,i,i),se&&"selected"===i&&"OPTION"===r.tagName&&(r.__riot1374=o)):(0===o||o&&typeof o!==te)&&(U(i,Q)&&i!=Y&&(i=i.slice(Q.length)),w(r,i,o))}})}function m(e,t){for(var n,r=e?e.length:0,i=0;r>i;i++)n=e[i],null!=n&&t(n,i)===!1&&i--
return e}function g(e){return typeof e===re||!1}function y(e){return e&&typeof e===te}function b(e,t){e.removeAttribute(t)}function _(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function x(e,t){return e.getAttribute(t)}function w(e,t,n){e.setAttribute(t,n)}function L(e){return e.tagName&&X[x(e,W)||x(e,Y)||e.tagName.toLowerCase()]}function j(e,t,n){var r=n.tags[t]
r?(A(r)||r!==e&&(n.tags[t]=[r]),S(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function E(e,t,n){var r,i=e.parent
i&&(r=i.tags[t],A(r)?r.splice(n,0,r.splice(r.indexOf(e),1)[0]):j(e,t,i))}function N(e,t,n,r){var i=new p(e,t,n),o=M(t.root),a=C(r)
return i.parent=a,i._parent=r,j(i,o,a),a!==r&&j(i,o,r),t.root.innerHTML="",i}function C(e){for(var t=e;!L(t.root)&&t.parent;)t=t.parent
return t}function T(e,t,n,r){return Object.defineProperty(e,t,O({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function M(e){var t=L(e),n=x(e,"name"),r=n&&!fe.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase()
return r}function O(e){for(var t,n=arguments,r=1;r<n.length;++r)if(t=n[r])for(var i in t)k(e,i)&&(e[i]=t[i])
return e}function S(e,t){return~e.indexOf(t)}function A(e){return Array.isArray(e)||e instanceof Array}function k(e,t){var n=Object.getOwnPropertyDescriptor(e,t)
return typeof e[t]===ne||n&&n.writable}function R(e){if(!(e instanceof p||e&&typeof e.trigger==re))return e
var t={}
for(var n in e)S(oe,n)||(t[n]=e[n])
return t}function I(e,t){if(e){if(t(e)===!1)return
for(e=e.firstChild;e;)I(e,t),e=e.nextSibling}}function $(e,t){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function F(e){for(;e;){if(e.inStub)return!0
e=e.parentNode}return!1}function H(e){return document.createElement(e)}function q(e,t){return(t||document).querySelectorAll(e)}function B(e,t){return(t||document).querySelector(e)}function P(e){function t(){}return t.prototype=e,new t}function D(e){return x(e,"id")||x(e,"name")}function K(e,t,n){var r,i=D(e),o=function(o){S(n,i)||(r=A(o),o?(!r||r&&!S(o,e))&&(r?o.push(e):t[i]=[o,e]):t[i]=e)}
i&&(fe.hasExpr(i)?t.one("mount",function(){i=D(e),o(t[i])}):o(t[i]))}function U(e,t){return e.slice(0,t.length)===t}function J(e,t,n){var r=X[t],i=e._innerHTML=e._innerHTML||e.innerHTML
return e.innerHTML="",r&&e&&(r=new p(r,{root:e,opts:n},i)),r&&r.mount&&(r.mount(),S(G,r)||G.push(r)),r}var V={version:"v2.3.18",settings:{}},z=0,G=[],X={},Z="__global_mixin",Q="riot-",Y=Q+"tag",W="data-is",ee="string",te="object",ne="undefined",re="function",ie=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,oe=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],ae=0|(e&&e.document||{}).documentMode,se=e&&!!e.InstallTrigger
V.observable=function(e){e=e||{}
var t={},n=Array.prototype.slice,r=function(e,t){e.replace(/\S+/g,t)}
return Object.defineProperties(e,{on:{value:function(n,i){return"function"!=typeof i?e:(r(n,function(e,n){(t[e]=t[e]||[]).push(i),i.typed=n>0}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,i){return"*"!=n||i?r(n,function(e){if(i)for(var n,r=t[e],o=0;n=r&&r[o];++o)n==i&&r.splice(o--,1)
else delete t[e]}):t={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function r(){e.off(t,r),n.apply(e,arguments)}return e.on(t,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(i){for(var o,a=arguments.length-1,s=new Array(a),u=0;a>u;u++)s[u]=arguments[u+1]
return r(i,function(r){o=n.call(t[r]||[],0)
for(var i,a=0;i=o[a];++a){if(i.busy)return
i.busy=1,i.apply(e,i.typed?[r].concat(s):s),o[a]!==i&&a--,i.busy=0}t["*"]&&"*"!=r&&e.trigger.apply(e,["*",r].concat(s))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(t){function n(e){return e.split(/[\/?#]/)}function r(e,t){var n=new RegExp("^"+t[j](/\*/g,"([^/?#]+?)")[j](/\.\./,".*")+"$"),r=e.match(n)
return r?r.slice(1):void 0}function i(e,t){var n
return function(){clearTimeout(n),n=setTimeout(e,t)}}function o(e){v=i(l,1),M[w](E,v),M[w](N,v),O[w](R,p),e&&l(!0)}function a(){this.$=[],t.observable(this),$.on("stop",this.s.bind(this)),$.on("emit",this.e.bind(this))}function s(e){return e[j](/^\/|\/$/,"")}function u(e){return"string"==typeof e}function f(e){return(e||A.href)[j](b,"")}function c(e){return"#"==h[0]?(e||A.href||"").split(h)[1]||"":(A?f(e):e||"")[j](h,"")}function l(e){var t=0==q
if(!(q>=T)&&(q++,H.push(function(){var t=c();(e||t!=m)&&($[C]("emit",t),m=t)}),t)){for(;H.length;)H[0](),H.shift()
q=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode
!t||"A"!=t.nodeName||t[L]("download")||!t[L]("href")||t.target&&"_self"!=t.target||-1==t.href.indexOf(A.href.match(b)[0])||(t.href==A.href||t.href.split("#")[0]!=A.href.split("#")[0]&&("#"==h||0===f(t.href).indexOf(h))&&d(c(t.href),t.title||O.title))&&e.preventDefault()}}function d(e,t,n){return S?(e=h+s(e),t=t||O.title,n?S.replaceState(null,t,e):S.pushState(null,t,e),O.title=t,F=!1,l(),F):$[C]("emit",c(e))}var v,h,m,g,y,b=/^.+?\/\/+[^\/]+/,_="EventListener",x="remove"+_,w="add"+_,L="hasAttribute",j="replace",E="popstate",N="hashchange",C="trigger",T=3,M="undefined"!=typeof e&&e,O="undefined"!=typeof document&&document,S=M&&history,A=M&&(S.location||M.location),k=a.prototype,R=O&&O.ontouchstart?"touchstart":"click",I=!1,$=t.observable(),F=!1,H=[],q=0
k.m=function(e,t,n){!u(e)||t&&!u(t)?t?this.r(e,t):this.r("@",e):d(e,t,n||!1)},k.s=function(){this.off("*"),this.$=[]},k.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?g:y)(s(e),s(t))
return"undefined"!=typeof n?(this[C].apply(null,[t].concat(n)),F=!0):void 0},this)},k.r=function(e,t){"@"!=e&&(e="/"+s(e),this.$.push(e)),this.on(e,t)}
var B=new a,P=B.m.bind(B)
P.create=function(){var e=new a,t=e.m.bind(e)
return t.stop=e.s.bind(e),t},P.base=function(e){h=e||"#",m=c()},P.exec=function(){l(!0)},P.parser=function(e,t){e||t||(g=n,y=r),e&&(g=e),t&&(y=t)},P.query=function(){var e={},t=A.href||m
return t[j](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r}),e},P.stop=function(){I&&(M&&(M[x](E,v),M[x](N,v),O[x](R,p)),$[C]("stop"),I=!1)},P.start=function(e){I||(M&&("complete"==document.readyState?o(e):M[w]("load",function(){setTimeout(function(){o(e)},1)})),I=!0)},P.base(),P.parser(),t.route=P}(V)
var ue=function(e){function t(e){return e}function n(e,t){return t||(t=g),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?f:"")}function r(e){if(e===v)return h
var t=e.split(" ")
if(2!==t.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e))throw new Error('Unsupported brackets "'+e+'"')
return t=t.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:h[4],t),t[5]=n(e.length>3?/\\({|})/g:h[5],t),t[6]=n(h[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,f),t[8]=e,t}function i(e){return e instanceof RegExp?s(e):g[e]}function o(e){(e||(e=v))!==g[8]&&(g=r(e),s=e===v?t:n,g[9]=s(h[9])),m=e}function a(e){var t
e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:o,get:function(){return m},enumerable:!0}),u=e,o(t)}var s,u,f="g",c=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,f),"[":RegExp("([[\\]])|"+p,f),"{":RegExp("([{}])|"+p,f)},v="{ }",h=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,f),v,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],m=e,g=[]
return i.split=function(e,t,n){function r(e){t||a?f.push(e&&e.replace(n[5],"$1")):f.push(e)}function i(e,t,n){var r,i=d[t]
for(i.lastIndex=n,n=1;(r=i.exec(e))&&(!r[1]||(r[1]===t?++n:--n)););return n?e.length:i.lastIndex}n||(n=g)
var o,a,s,u,f=[],c=n[6]
for(a=s=c.lastIndex=0;o=c.exec(e);){if(u=o.index,a){if(o[2]){c.lastIndex=i(e,o[2],c.lastIndex)
continue}if(!o[3])continue}o[1]||(r(e.slice(s,u)),s=c.lastIndex,c=n[6+(a^=1)],c.lastIndex=s)}return e&&s<e.length&&r(e.slice(s)),f},i.hasExpr=function(e){return g[4].test(e)},i.loopKeys=function(e){var t=e.match(g[9])
return t?{key:t[1],pos:t[2],val:g[0]+t[3].trim()+g[1]}:{val:e.trim()}},i.array=function(e){return e?r(e):g},Object.defineProperty(i,"settings",{set:a,get:function(){return u}}),i.settings="undefined"!=typeof V&&V.settings||{},i.set=o,i.R_STRINGS=l,i.R_MLCOMMS=c,i.S_QBLOCKS=p,i}(),fe=function(){function t(e,t){return e?(s[e]||(s[e]=r(e))).call(t,n):e}function n(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function r(e){var t=i(e)
return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function i(e){var t,n=[],r=ue.split(e.replace(l,'"'),1)
if(r.length>2||r[0]){var i,a,s=[]
for(i=a=0;i<r.length;++i)t=r[i],t&&(t=1&i?o(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(s[a++]=t)
t=2>a?s[0]:"["+s.join(",")+'].join("")'}else t=o(r[1],0,n)
return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function o(e,t,n){function r(t,n){var r,i=1,o=d[t]
for(o.lastIndex=n.lastIndex;r=o.exec(e);)if(r[0]===t)++i
else if(!--i)break
n.lastIndex=i?e.length:o.lastIndex}if(e=e.replace(c,function(e,t){return e.length>2&&!t?u+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var i,o=[],s=0;e&&(i=e.match(f))&&!i.index;){var l,p,v=/,|([[{(])|$/g
for(e=RegExp.rightContext,l=i[2]?n[i[2]].slice(1,-1).trim().replace(/\s+/g," "):i[1];p=(i=v.exec(e))[1];)r(p,v)
p=e.slice(0,i.index),e=RegExp.rightContext,o[s++]=a(p,1,l)}e=s?s>1?"["+o.join(",")+'].join(" ").trim()':o[0]:a(e,t)}return e}function a(e,t,n){var r
return e=e.replace(h,function(e,t,n,i,o){return n&&(i=r?0:i+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+v+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!m.test(o.slice(i)))),e}),r&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var s={}
t.haveRaw=ue.hasRaw,t.hasExpr=ue.hasExpr,t.loopKeys=ue.loopKeys,t.errorHandler=null
var u="⁗",f=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,c=RegExp(ue.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},v='"in this?this:'+("object"!=typeof e?"global":"window")+").",h=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/
return t.parse=function(e){return e},t.version=ue.version="v2.3.22",t}(),ce=function de(){function de(n,r){var i=n&&n.match(/^\s*<([-\w]+)/),o=i&&i[1].toLowerCase(),a=H("div")
return n=t(n,r),s.test(o)?a=e(a,n,o):a.innerHTML=n,a.stub=!0,a}function e(e,t,n){var r="o"===n[0],i=r?"select>":"table>"
if(e.innerHTML="<"+i+t.trim()+"</"+i,i=e.firstChild,r)i.selectedIndex=-1
else{var o=a[n]
o&&1===i.childElementCount&&(i=B(o,i))}return i}function t(e,t){if(!n.test(e))return e
var a={}
return t=t&&t.replace(i,function(e,t,n){return a[t]=a[t]||n,""}).trim(),e.replace(o,function(e,t,n){return a[t]||n||""}).replace(r,function(e,n){return t||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,o=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,a={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},s=ae&&10>ae?ie:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/
return de}(),le=function(t){if(!e)return{add:function(){},inject:function(){}}
var n=function(){var e=H("style")
w(e,"type","text/css")
var t=B("style[type=riot]")
return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),r=n.styleSheet,i=""
return Object.defineProperty(t,"styleNode",{value:n,writable:!0}),{add:function(e){i+=e},inject:function(){i&&(r?r.cssText+=i:n.innerHTML+=i,i="")}}}(V),pe=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame
if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0
t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0)
setTimeout(function(){e(n=t+r)},r)}}return t}(e||{})
V.util={brackets:ue,tmpl:fe},V.mixin=function(){var e={}
return function(t,n){return y(t)?(n=t,void(e[Z]=O(e[Z]||{},n))):n?void(e[t]=n):e[t]}}(),V.tag=function(e,t,n,r,i){return g(r)&&(i=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(g(n)?i=n:le.add(n)),e=e.toLowerCase(),X[e]={name:e,tmpl:t,attrs:r,fn:i},e},V.tag2=function(e,t,n,r,i){return n&&le.add(n),X[e]={name:e,tmpl:t,attrs:r,fn:i},e},V.mount=function(e,t,n){function r(e){var t=""
return m(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+W+'="'+e+'"],['+Y+'="'+e+'"]')}),t}function i(){var e=Object.keys(X)
return e+r(e)}function o(e){if(e.tagName){var r=x(e,W)||x(e,Y)
t&&r!==t&&(r=t,w(e,W,t),w(e,Y,t))
var i=J(e,r||e.tagName.toLowerCase(),n)
i&&u.push(i)}else e.length&&m(e,o)}var a,s,u=[]
if(le.inject(),y(t)&&(n=t,t=0),typeof e===ee?("*"===e?e=s=i():e+=r(e.split(/, */)),a=e?q(e):[]):a=e,"*"===t){if(t=s||i(),a.tagName)a=q(t,a)
else{var f=[]
m(a,function(e){f.push(q(t,e))}),a=f}t=0}return o(a),u},V.update=function(){return m(G,function(e){e.update()})},V.vdom=G,V.Tag=p,typeof n===te?t.exports=V:typeof define===re&&typeof define.amd!==ne?define(function(){return V}):e.riot=V}("undefined"!=typeof window?window:void 0)},{}]},{},[6])
