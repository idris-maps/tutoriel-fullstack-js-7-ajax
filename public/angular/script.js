!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require
if(!s&&u)return u(a,!0)
if(o)return o(a,!0)
var c=new Error("Cannot find module '"+a+"'")
throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}}
e[a][0].call(l.exports,function(t){var n=e[a][1][t]
return i(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a])
return i}({1:[function(t,e,n){function r(t,e){t.data=[],e.get("/api/a-faire").success(function(e){t.data=e}),t.ajouter=function(){if(t.nouveau){var n={text:t.nouveau,fait:!1}
e.post("/api/a-faire",n).success(function(e){t.data=e}).error(function(t){console.log(t)})}},t.supprimerFait=function(){var n=[]
t.data.forEach(function(t){t.fait&&n.push(t.id)}),e.post("/api/a-faire/supprimer",n).success(function(e){t.data=e}).error(function(t){console.log(t)})},t.basculerFait=function(n){t.data[n].fait?t.data[n].fait=!1:t.data[n].fait=!0,i(t,e,t.data[n])},t.basculerMaj=function(e){t.data[e].maj?t.data[e].maj=void 0:(t.data.forEach(function(t){t.maj&&(t.maj=void 0)}),t.data[e].maj=!0)},t.mettreAJour=function(n){this.nouveauText&&(t.data[n].text=this.nouveauText,i(t,e,t.data[n]),t.data[n].maj=void 0,this.nouveauText="")}}function i(t,e,n){e.post("/api/a-faire/maj",n).success(function(e){t.data=e}).error(function(t){console.log(t)})}var o=t("angular"),a=o.module("aFaire",[])
r.$inject=["$scope","$http"],a.controller("aFaireCtrl",["$scope","$http",r])},{angular:3}],2:[function(t,e,n){!function(t){"use strict"
function e(t,e){return e=e||Error,function(){var n,r,i=2,o=arguments,a=o[0],s="["+(t?t+":":"")+a+"] ",u=o[1]
for(s+=u.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1),n=e+i
return n<o.length?gt(o[n]):t}),s+="\nhttp://errors.angularjs.org/1.5.5/"+(t?t+"/":"")+a,r=i,n="?";r<o.length;r++,n="&")s+=n+"p"+(r-i)+"="+encodeURIComponent(gt(o[r]))
return new e(s)}}function n(t){if(null==t||A(t))return!1
if(Wr(t)||w(t)||Dr&&t instanceof Dr)return!0
var e="length"in Object(t)&&t.length
return x(e)&&(e>=0&&(e-1 in t||t instanceof Array)||"function"==typeof t.item)}function r(t,e,i){var o,a
if(t)if(C(t))for(o in t)"prototype"==o||"length"==o||"name"==o||t.hasOwnProperty&&!t.hasOwnProperty(o)||e.call(i,t[o],o,t)
else if(Wr(t)||n(t)){var s="object"!=typeof t
for(o=0,a=t.length;a>o;o++)(s||o in t)&&e.call(i,t[o],o,t)}else if(t.forEach&&t.forEach!==r)t.forEach(e,i,t)
else if(b(t))for(o in t)e.call(i,t[o],o,t)
else if("function"==typeof t.hasOwnProperty)for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)
else for(o in t)Mr.call(t,o)&&e.call(i,t[o],o,t)
return t}function i(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i])
return r}function o(t){return function(e,n){t(n,e)}}function a(){return++zr}function s(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function u(t,e,n){for(var r=t.$$hashKey,i=0,o=e.length;o>i;++i){var a=e[i]
if(y(a)||C(a))for(var c=Object.keys(a),l=0,f=c.length;f>l;l++){var h=c[l],p=a[h]
n&&y(p)?S(p)?t[h]=new Date(p.valueOf()):E(p)?t[h]=new RegExp(p):p.nodeName?t[h]=p.cloneNode(!0):D(p)?t[h]=p.clone():(y(t[h])||(t[h]=Wr(p)?[]:{}),u(t[h],[p],!0)):t[h]=p}}return s(t,r),t}function c(t){return u(t,Rr.call(arguments,1),!1)}function l(t){return u(t,Rr.call(arguments,1),!0)}function f(t){return parseInt(t,10)}function h(t,e){return c(Object.create(t),e)}function p(){}function d(t){return t}function $(t){return function(){return t}}function v(t){return C(t.toString)&&t.toString!==Ur}function m(t){return"undefined"==typeof t}function g(t){return"undefined"!=typeof t}function y(t){return null!==t&&"object"==typeof t}function b(t){return null!==t&&"object"==typeof t&&!Lr(t)}function w(t){return"string"==typeof t}function x(t){return"number"==typeof t}function S(t){return"[object Date]"===Ur.call(t)}function C(t){return"function"==typeof t}function E(t){return"[object RegExp]"===Ur.call(t)}function A(t){return t&&t.window===t}function k(t){return t&&t.$evalAsync&&t.$watch}function O(t){return"[object File]"===Ur.call(t)}function M(t){return"[object FormData]"===Ur.call(t)}function T(t){return"[object Blob]"===Ur.call(t)}function N(t){return"boolean"==typeof t}function V(t){return t&&C(t.then)}function j(t){return t&&x(t.length)&&Gr.test(Ur.call(t))}function I(t){return"[object ArrayBuffer]"===Ur.call(t)}function D(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function P(t){var e,n={},r=t.split(",")
for(e=0;e<r.length;e++)n[r[e]]=!0
return n}function _(t){return Tr(t.nodeName||t[0]&&t[0].nodeName)}function R(t,e){var n=t.indexOf(e)
return n>=0&&t.splice(n,1),n}function F(t,e){function n(t,e){var n,r=e.$$hashKey
if(Wr(t))for(var o=0,a=t.length;a>o;o++)e.push(i(t[o]))
else if(b(t))for(n in t)e[n]=i(t[n])
else if(t&&"function"==typeof t.hasOwnProperty)for(n in t)t.hasOwnProperty(n)&&(e[n]=i(t[n]))
else for(n in t)Mr.call(t,n)&&(e[n]=i(t[n]))
return s(e,r),e}function i(t){if(!y(t))return t
var e=a.indexOf(t)
if(-1!==e)return u[e]
if(A(t)||k(t))throw Hr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
var r=!1,i=o(t)
return void 0===i&&(i=Wr(t)?[]:Object.create(Lr(t)),r=!0),a.push(t),u.push(i),r?n(t,i):i}function o(t){switch(Ur.call(t)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new t.constructor(i(t.buffer))
case"[object ArrayBuffer]":if(!t.slice){var e=new ArrayBuffer(t.byteLength)
return new Uint8Array(e).set(new Uint8Array(t)),e}return t.slice(0)
case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new t.constructor(t.valueOf())
case"[object RegExp]":var n=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0])
return n.lastIndex=t.lastIndex,n
case"[object Blob]":return new t.constructor([t],{type:t.type})}return C(t.cloneNode)?t.cloneNode(!0):void 0}var a=[],u=[]
if(e){if(j(e)||I(e))throw Hr("cpta","Can't copy! TypedArray destination cannot be mutated.")
if(t===e)throw Hr("cpi","Can't copy! Source and destination are identical.")
return Wr(e)?e.length=0:r(e,function(t,n){"$$hashKey"!==n&&delete e[n]}),a.push(t),u.push(e),n(t,e)}return i(t)}function q(t,e){if(Wr(t)){e=e||[]
for(var n=0,r=t.length;r>n;n++)e[n]=t[n]}else if(y(t)){e=e||{}
for(var i in t)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(e[i]=t[i])}return e||t}function U(t,e){if(t===e)return!0
if(null===t||null===e)return!1
if(t!==t&&e!==e)return!0
var n,r,i,o=typeof t,a=typeof e
if(o==a&&"object"==o){if(!Wr(t)){if(S(t))return S(e)?U(t.getTime(),e.getTime()):!1
if(E(t))return E(e)?t.toString()==e.toString():!1
if(k(t)||k(e)||A(t)||A(e)||Wr(e)||S(e)||E(e))return!1
i=$t()
for(r in t)if("$"!==r.charAt(0)&&!C(t[r])){if(!U(t[r],e[r]))return!1
i[r]=!0}for(r in e)if(!(r in i)&&"$"!==r.charAt(0)&&g(e[r])&&!C(e[r]))return!1
return!0}if(!Wr(e))return!1
if((n=t.length)==e.length){for(r=0;n>r;r++)if(!U(t[r],e[r]))return!1
return!0}}return!1}function L(t,e,n){return t.concat(Rr.call(e,n))}function H(t,e){return Rr.call(t,e||0)}function B(t,e){var n=arguments.length>2?H(arguments,2):[]
return!C(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,L(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function z(e,n){var r=n
return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?r=void 0:A(n)?r="$WINDOW":n&&t.document===n?r="$DOCUMENT":k(n)&&(r="$SCOPE"),r}function W(t,e){return m(t)?void 0:(x(e)||(e=e?2:null),JSON.stringify(t,z,e))}function G(t){return w(t)?JSON.parse(t):t}function J(t,e){t=t.replace(Xr,"")
var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4
return isNaN(n)?e:n}function Y(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function Z(t,e,n){n=n?-1:1
var r=t.getTimezoneOffset(),i=J(e,r)
return Y(t,n*(i-r))}function K(t){t=Dr(t).clone()
try{t.empty()}catch(e){}var n=Dr("<div>").append(t).html()
try{return t[0].nodeType===ii?Tr(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+Tr(e)})}catch(e){return Tr(n)}}function X(t){try{return decodeURIComponent(t)}catch(e){}}function Q(t){var e={}
return r((t||"").split("&"),function(t){var n,r,i
t&&(r=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),-1!==n&&(r=t.substring(0,n),i=t.substring(n+1)),r=X(r),g(r)&&(i=g(i)?X(i):!0,Mr.call(e,r)?Wr(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i))}),e}function tt(t){var e=[]
return r(t,function(t,n){Wr(t)?r(t,function(t){e.push(nt(n,!0)+(t===!0?"":"="+nt(t,!0)))}):e.push(nt(n,!0)+(t===!0?"":"="+nt(t,!0)))}),e.length?e.join("&"):""}function et(t){return nt(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function nt(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function rt(t,e){var n,r,i=Qr.length
for(r=0;i>r;++r)if(n=Qr[r]+e,w(n=t.getAttribute(n)))return n
return null}function it(t,e){var n,i,o={}
r(Qr,function(e){var r=e+"app"
!n&&t.hasAttribute&&t.hasAttribute(r)&&(n=t,i=t.getAttribute(r))}),r(Qr,function(e){var r,o=e+"app"
!n&&(r=t.querySelector("["+o.replace(":","\\:")+"]"))&&(n=r,i=r.getAttribute(o))}),n&&(o.strictDi=null!==rt(n,"strict-di"),e(n,i?[i]:[],o))}function ot(e,n,i){y(i)||(i={})
var o={strictDi:!1}
i=c(o,i)
var a=function(){if(e=Dr(e),e.injector()){var r=e[0]===t.document?"document":K(e)
throw Hr("btstrpd","App already bootstrapped with this element '{0}'",r.replace(/</,"&lt;").replace(/>/,"&gt;"))}n=n||[],n.unshift(["$provide",function(t){t.value("$rootElement",e)}]),i.debugInfoEnabled&&n.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),n.unshift("ng")
var o=ne(n,i.strictDi)
return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},s=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/
return t&&s.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(s,"")),t&&!u.test(t.name)?a():(t.name=t.name.replace(u,""),Br.resumeBootstrap=function(t){return r(t,function(t){n.push(t)}),a()},void(C(Br.resumeDeferredBootstrap)&&Br.resumeDeferredBootstrap()))}function at(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function st(t){var e=Br.element(t).injector()
if(!e)throw Hr("test","no injector found for element argument to getTestability")
return e.get("$$testability")}function ut(t,e){return e=e||"_",t.replace(ti,function(t,n){return(n?e:"")+t.toLowerCase()})}function ct(){var e
if(!ei){var n=Kr()
Pr=m(n)?t.jQuery:n?t[n]:void 0,Pr&&Pr.fn.on?(Dr=Pr,c(Pr.fn,{scope:Si.scope,isolateScope:Si.isolateScope,controller:Si.controller,injector:Si.injector,inheritedData:Si.inheritedData}),e=Pr.cleanData,Pr.cleanData=function(t){for(var n,r,i=0;null!=(r=t[i]);i++)n=Pr._data(r,"events"),n&&n.$destroy&&Pr(r).triggerHandler("$destroy")
e(t)}):Dr=Mt,Br.element=Dr,ei=!0}}function lt(t,e,n){if(!t)throw Hr("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function ft(t,e,n){return n&&Wr(t)&&(t=t[t.length-1]),lt(C(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function ht(t,e){if("hasOwnProperty"===t)throw Hr("badname","hasOwnProperty is not a valid {0} name",e)}function pt(t,e,n){if(!e)return t
for(var r,i=e.split("."),o=t,a=i.length,s=0;a>s;s++)r=i[s],t&&(t=(o=t)[r])
return!n&&C(t)?B(o,t):t}function dt(t){for(var e,n=t[0],r=t[t.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(e||t[i]!==n)&&(e||(e=Dr(Rr.call(t,0,i))),e.push(n))
return e||t}function $t(){return Object.create(null)}function vt(t){function n(t,e,n){return t[e]||(t[e]=n())}var r=e("$injector"),i=e("ng"),o=n(t,"angular",Object)
return o.$$minErr=o.$$minErr||e,n(o,"module",function(){var t={}
return function(e,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)}
return s(e,"module"),o&&t.hasOwnProperty(e)&&(t[e]=null),n(t,e,function(){function t(t,e,n,r){return r||(r=i),function(){return r[n||"push"]([t,e,arguments]),l}}function n(t,n){return function(r,o){return o&&C(o)&&(o.$$moduleName=e),i.push([t,n,arguments]),l}}if(!o)throw r("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",e)
var i=[],s=[],u=[],c=t("$injector","invoke","push",s),l={_invokeQueue:i,_configBlocks:s,_runBlocks:u,requires:o,name:e,provider:n("$provide","provider"),factory:n("$provide","factory"),service:n("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:n("$provide","decorator"),animation:n("$animateProvider","register"),filter:n("$filterProvider","register"),controller:n("$controllerProvider","register"),directive:n("$compileProvider","directive"),component:n("$compileProvider","component"),config:c,run:function(t){return u.push(t),this}}
return a&&c(a),l})}})}function mt(t){var e=[]
return JSON.stringify(t,function(t,n){if(n=z(t,n),y(n)){if(e.indexOf(n)>=0)return"..."
e.push(n)}return n})}function gt(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):m(t)?"undefined":"string"!=typeof t?mt(t):t}function yt(n){c(n,{bootstrap:ot,copy:F,extend:c,merge:l,equals:U,element:Dr,forEach:r,injector:ne,noop:p,bind:B,toJson:W,fromJson:G,identity:d,isUndefined:m,isDefined:g,isString:w,isFunction:C,isObject:y,isNumber:x,isElement:D,isArray:Wr,version:ui,isDate:S,lowercase:Tr,uppercase:Nr,callbacks:{counter:0},getTestability:st,$$minErr:e,$$csp:Zr,reloadWithDebugInfo:at}),(_r=vt(t))("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Sn}),t.provider("$compile",pe).directive({a:No,input:Zo,textarea:Zo,form:Po,script:za,select:Ja,style:Za,option:Ya,ngBind:Qo,ngBindHtml:ea,ngBindTemplate:ta,ngClass:ra,ngClassEven:oa,ngClassOdd:ia,ngCloak:aa,ngController:sa,ngForm:_o,ngHide:Ra,ngIf:la,ngInclude:fa,ngInit:pa,ngNonBindable:Ma,ngPluralize:ja,ngRepeat:Ia,ngShow:_a,ngStyle:Fa,ngSwitch:qa,ngSwitchWhen:Ua,ngSwitchDefault:La,ngOptions:Va,ngTransclude:Ba,ngModel:Aa,ngList:da,ngChange:na,pattern:Xa,ngPattern:Xa,required:Ka,ngRequired:Ka,minlength:ts,ngMinlength:ts,maxlength:Qa,ngMaxlength:Qa,ngValue:Xo,ngModelOptions:Oa}).directive({ngInclude:ha}).directive(Vo).directive(ua),t.provider({$anchorScroll:re,$animate:Fi,$animateCss:Li,$$animateJs:_i,$$animateQueue:Ri,$$AnimateRunner:Ui,$$animateAsyncRun:qi,$browser:ce,$cacheFactory:le,$controller:ye,$document:be,$exceptionHandler:we,$filter:_n,$$forceReflow:Ji,$interpolate:De,$interval:Pe,$http:Ne,$httpParamSerializer:Se,$httpParamSerializerJQLike:Ce,$httpBackend:je,$xhrFactory:Ve,$location:Ze,$log:Ke,$parse:mn,$rootScope:xn,$q:gn,$$q:yn,$sce:kn,$sceDelegate:An,$sniffer:On,$templateCache:fe,$templateRequest:Mn,$$testability:Tn,$timeout:Nn,$window:In,$$rAF:wn,$$jqLite:Zt,$$HashMap:ki,$$cookieReader:Pn})}])}function bt(){return++li}function wt(t){return t.replace(pi,function(t,e,n,r){return r?n.toUpperCase():n}).replace(di,"Moz$1")}function xt(t){return!gi.test(t)}function St(t){var e=t.nodeType
return e===ni||!e||e===ai}function Ct(t){for(var e in ci[t.ng339])return!0
return!1}function Et(t){for(var e=0,n=t.length;n>e;e++)jt(t[e])}function At(t,e){var n,i,o,a,s=e.createDocumentFragment(),u=[]
if(xt(t))u.push(e.createTextNode(t))
else{for(n=n||s.appendChild(e.createElement("div")),i=(yi.exec(t)||["",""])[1].toLowerCase(),o=wi[i]||wi._default,n.innerHTML=o[1]+t.replace(bi,"<$1></$2>")+o[2],a=o[0];a--;)n=n.lastChild
u=L(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",r(u,function(t){s.appendChild(t)}),s}function kt(e,n){n=n||t.document
var r
return(r=mi.exec(e))?[n.createElement(r[1])]:(r=At(e,n))?r.childNodes:[]}function Ot(t,e){var n=t.parentNode
n&&n.replaceChild(e,t),e.appendChild(t)}function Mt(t){if(t instanceof Mt)return t
var e
if(w(t)&&(t=Jr(t),e=!0),!(this instanceof Mt)){if(e&&"<"!=t.charAt(0))throw vi("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new Mt(t)}e?Ft(this,kt(t)):Ft(this,t)}function Tt(t){return t.cloneNode(!0)}function Nt(t,e){if(e||jt(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;i>r;r++)jt(n[r])}function Vt(t,e,n,i){if(g(i))throw vi("offargs","jqLite#off() does not support the `selector` argument")
var o=It(t),a=o&&o.events,s=o&&o.handle
if(s)if(e){var u=function(e){var r=a[e]
g(n)&&R(r||[],n),g(n)&&r&&r.length>0||(hi(t,e,s),delete a[e])}
r(e.split(" "),function(t){u(t),$i[t]&&u($i[t])})}else for(e in a)"$destroy"!==e&&hi(t,e,s),delete a[e]}function jt(t,e){var n=t.ng339,r=n&&ci[n]
if(r){if(e)return void delete r.data[e]
r.handle&&(r.events.$destroy&&r.handle({},"$destroy"),Vt(t)),delete ci[n],t.ng339=void 0}}function It(t,e){var n=t.ng339,r=n&&ci[n]
return e&&!r&&(t.ng339=n=bt(),r=ci[n]={events:{},data:{},handle:void 0}),r}function Dt(t,e,n){if(St(t)){var r=g(n),i=!r&&e&&!y(e),o=!e,a=It(t,!i),s=a&&a.data
if(r)s[e]=n
else{if(o)return s
if(i)return s&&s[e]
c(s,e)}}}function Pt(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function _t(t,e){e&&t.setAttribute&&r(e.split(" "),function(e){t.setAttribute("class",Jr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Jr(e)+" "," ")))})}function Rt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ")
r(e.split(" "),function(t){t=Jr(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",Jr(n))}}function Ft(t,e){if(e)if(e.nodeType)t[t.length++]=e
else{var n=e.length
if("number"==typeof n&&e.window!==e){if(n)for(var r=0;n>r;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function qt(t,e){return Ut(t,"$"+(e||"ngController")+"Controller")}function Ut(t,e,n){t.nodeType==ai&&(t=t.documentElement)
for(var r=Wr(e)?e:[e];t;){for(var i=0,o=r.length;o>i;i++)if(g(n=Dr.data(t,r[i])))return n
t=t.parentNode||t.nodeType===si&&t.host}}function Lt(t){for(Nt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function Ht(t,e){e||Nt(t)
var n=t.parentNode
n&&n.removeChild(t)}function Bt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):Dr(n).on("load",e)}function zt(t,e){var n=Ci[e.toLowerCase()]
return n&&Ei[_(t)]&&n}function Wt(t){return Ai[t]}function Gt(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented}
var i=e[r||n.type],o=i?i.length:0
if(o){if(m(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation
n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0}
var s=i.specialHandlerWrapper||Jt
o>1&&(i=q(i))
for(var u=0;o>u;u++)n.isImmediatePropagationStopped()||s(t,n,i[u])}}
return n.elem=t,n}function Jt(t,e,n){n.call(t,e)}function Yt(t,e,n){var r=e.relatedTarget;(!r||r!==t&&!xi.call(t,r))&&n.call(t,e)}function Zt(){this.$get=function(){return c(Mt,{hasClass:function(t,e){return t.attr&&(t=t[0]),Pt(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Rt(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),_t(t,e)}})}}function Kt(t,e){var n=t&&t.$$hashKey
if(n)return"function"==typeof n&&(n=t.$$hashKey()),n
var r=typeof t
return n="function"==r||"object"==r&&null!==t?t.$$hashKey=r+":"+(e||a)():r+":"+t}function Xt(t,e){if(e){var n=0
this.nextUid=function(){return++n}}r(t,this.put,this)}function Qt(t){var e=Function.prototype.toString.call(t).replace(Vi,""),n=e.match(Oi)||e.match(Mi)
return n}function te(t){var e=Qt(t)
return e?"function("+(e[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function ee(t,e,n){var i,o,a
if("function"==typeof t){if(!(i=t.$inject)){if(i=[],t.length){if(e)throw w(n)&&n||(n=t.name||te(t)),ji("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
o=Qt(t),r(o[1].split(Ti),function(t){t.replace(Ni,function(t,e,n){i.push(n)})})}t.$inject=i}}else Wr(t)?(a=t.length-1,ft(t[a],"fn"),i=t.slice(0,a)):ft(t,"fn",!0)
return i}function ne(t,e){function n(t){return function(e,n){return y(e)?void r(e,o(t)):t(e,n)}}function i(t,e){if(ht(t,"service"),(C(e)||Wr(e))&&(e=S.instantiate(e)),!e.$get)throw ji("pget","Provider '{0}' must define $get factory method.",t)
return x[t+v]=e}function a(t,e){return function(){var n=k.invoke(e,this)
if(m(n))throw ji("undef","Provider '{0}' must return a value from $get factory method.",t)
return n}}function s(t,e,n){return i(t,{$get:n!==!1?a(t,e):e})}function u(t,e){return s(t,["$injector",function(t){return t.instantiate(e)}])}function c(t,e){return s(t,$(e),!1)}function l(t,e){ht(t,"constant"),x[t]=e,E[t]=e}function f(t,e){var n=S.get(t+v),r=n.$get
n.$get=function(){var t=k.invoke(r,n)
return k.invoke(e,null,{$delegate:t})}}function h(t){lt(m(t)||Wr(t),"modulesToLoad","not an array")
var e,n=[]
return r(t,function(t){function r(t){var e,n
for(e=0,n=t.length;n>e;e++){var r=t[e],i=S.get(r[0])
i[r[1]].apply(i,r[2])}}if(!b.get(t)){b.put(t,!0)
try{w(t)?(e=_r(t),n=n.concat(h(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):C(t)?n.push(S.invoke(t)):Wr(t)?n.push(S.invoke(t)):ft(t,"module")}catch(i){throw Wr(t)&&(t=t[t.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),ji("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function p(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===d)throw ji("cdep","Circular dependency found: {0}",e+" <- "+g.join(" <- "))
return t[e]}try{return g.unshift(e),t[e]=d,t[e]=n(e,r)}catch(i){throw t[e]===d&&delete t[e],i}finally{g.shift()}}function i(t,n,i){for(var o=[],a=ne.$$annotate(t,e,i),s=0,u=a.length;u>s;s++){var c=a[s]
if("string"!=typeof c)throw ji("itkn","Incorrect injection token! Expected service name as string, got {0}",c)
o.push(n&&n.hasOwnProperty(c)?n[c]:r(c,i))}return o}function o(t){return 11>=Ir?!1:"function"==typeof t&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(t))}function a(t,e,n,r){"string"==typeof n&&(r=n,n=null)
var a=i(t,n,r)
return Wr(t)&&(t=t[t.length-1]),o(t)?(a.unshift(null),new(Function.prototype.bind.apply(t,a))):t.apply(e,a)}function s(t,e,n){var r=Wr(t)?t[t.length-1]:t,o=i(t,e,n)
return o.unshift(null),new(Function.prototype.bind.apply(r,o))}return{invoke:a,instantiate:s,get:r,annotate:ne.$$annotate,has:function(e){return x.hasOwnProperty(e+v)||t.hasOwnProperty(e)}}}e=e===!0
var d={},v="Provider",g=[],b=new Xt([],!0),x={$provide:{provider:n(i),factory:n(s),service:n(u),value:n(c),constant:n(l),decorator:f}},S=x.$injector=p(x,function(t,e){throw Br.isString(e)&&g.push(e),ji("unpr","Unknown provider: {0}",g.join(" <- "))}),E={},A=p(E,function(t,e){var n=S.get(t+v,e)
return k.invoke(n.$get,n,void 0,t)}),k=A
x["$injector"+v]={$get:$(A)}
var O=h(t)
return k=A.get("$injector"),k.strictDi=e,r(O,function(t){t&&k.invoke(t)}),k}function re(){var t=!0
this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null
return Array.prototype.some.call(t,function(t){return"a"===_(t)?(e=t,!0):void 0}),e}function o(){var t=s.yOffset
if(C(t))t=t()
else if(D(t)){var n=t[0],r=e.getComputedStyle(n)
t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else x(t)||(t=0)
return t}function a(t){if(t){t.scrollIntoView()
var n=o()
if(n){var r=t.getBoundingClientRect().top
e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function s(t){t=w(t)?t:n.hash()
var e
t?(e=u.getElementById(t))?a(e):(e=i(u.getElementsByName(t)))?a(e):"top"===t&&a(null):a(null)}var u=e.document
return t&&r.$watch(function(){return n.hash()},function(t,e){(t!==e||""!==t)&&Bt(function(){r.$evalAsync(s)})}),s}]}function ie(t,e){return t||e?t?e?(Wr(t)&&(t=t.join(" ")),Wr(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function oe(t){for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType===Di)return n}}function ae(t){w(t)&&(t=t.split(" "))
var e=$t()
return r(t,function(t){t.length&&(e[t]=!0)}),e}function se(t){return y(t)?t:{}}function ue(t,e,n,i){function o(t){try{t.apply(null,H(arguments,1))}finally{if(g--,0===g)for(;y.length;)try{y.pop()()}catch(e){n.error(e)}}}function a(t){var e=t.indexOf("#")
return-1===e?"":t.substr(e)}function s(){C=null,u(),c()}function u(){b=E(),b=m(b)?null:b,U(b,O)&&(b=O),O=b}function c(){(x!==l.url()||w!==b)&&(x=l.url(),w=b,r(A,function(t){t(l.url(),b)}))}var l=this,f=t.location,h=t.history,d=t.setTimeout,$=t.clearTimeout,v={}
l.isMock=!1
var g=0,y=[]
l.$$completeOutstandingRequest=o,l.$$incOutstandingRequestCount=function(){g++},l.notifyWhenNoOutstandingRequests=function(t){0===g?t():y.push(t)}
var b,w,x=f.href,S=e.find("base"),C=null,E=i.history?function(){try{return h.state}catch(t){}}:p
u(),w=b,l.url=function(e,n,r){if(m(r)&&(r=null),f!==t.location&&(f=t.location),h!==t.history&&(h=t.history),e){var o=w===r
if(x===e&&(!i.history||o))return l
var s=x&&Ue(x)===Ue(e)
return x=e,w=r,!i.history||s&&o?((!s||C)&&(C=e),n?f.replace(e):s?f.hash=a(e):f.href=e,f.href!==e&&(C=e)):(h[n?"replaceState":"pushState"](r,"",e),u(),w=b),l}return C||f.href.replace(/%27/g,"'")},l.state=function(){return b}
var A=[],k=!1,O=null
l.onUrlChange=function(e){return k||(i.history&&Dr(t).on("popstate",s),Dr(t).on("hashchange",s),k=!0),A.push(e),e},l.$$applicationDestroyed=function(){Dr(t).off("hashchange popstate",s)},l.$$checkUrlChange=c,l.baseHref=function(){var t=S.attr("href")
return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""},l.defer=function(t,e){var n
return g++,n=d(function(){delete v[n],o(t)},e||0),v[n]=!0,n},l.defer.cancel=function(t){return v[t]?(delete v[t],$(t),o(p),!0):!1}}function ce(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new ue(t,r,e,n)}]}function le(){this.$get=function(){function t(t,r){function i(t){t!=h&&(p?p==t&&(p=t.n):p=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in n)throw e("$cacheFactory")("iid","CacheId '{0}' is already taken!",t)
var a=0,s=c({},r,{id:t}),u=$t(),l=r&&r.capacity||Number.MAX_VALUE,f=$t(),h=null,p=null
return n[t]={put:function(t,e){if(!m(e)){if(l<Number.MAX_VALUE){var n=f[t]||(f[t]={key:t})
i(n)}return t in u||a++,u[t]=e,a>l&&this.remove(p.key),e}},get:function(t){if(l<Number.MAX_VALUE){var e=f[t]
if(!e)return
i(e)}return u[t]},remove:function(t){if(l<Number.MAX_VALUE){var e=f[t]
if(!e)return
e==h&&(h=e.p),e==p&&(p=e.n),o(e.n,e.p),delete f[t]}t in u&&(delete u[t],a--)},removeAll:function(){u=$t(),a=0,f=$t(),h=p=null},destroy:function(){u=null,s=null,f=null,delete n[t]},info:function(){return c({},s,{size:a})}}}var n={}
return t.info=function(){var t={}
return r(n,function(e,n){t[n]=e.info()}),t},t.get=function(t){return n[t]},t}}function fe(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function he(){}function pe(e,n){function i(t,e,n){var i=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,o=$t()
return r(t,function(t,r){if(t in E)return void(o[r]=E[t])
var a=t.match(i)
if(!a)throw Hi("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,r,t,n?"controller bindings definition":"isolate scope definition")
o[r]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||r},a[4]&&(E[t]=o[r])}),o}function a(t,e){var n={isolateScope:null,bindToController:null}
if(y(t.scope)&&(t.bindToController===!0?(n.bindToController=i(t.scope,e,!0),n.isolateScope={}):n.isolateScope=i(t.scope,e,!1)),y(t.bindToController)&&(n.bindToController=i(t.bindToController,e,!0)),y(n.bindToController)){var r=t.controller,o=t.controllerAs
if(!r)throw Hi("noctrl","Cannot bind to controller without directive '{0}'s controller.",e)
if(!ge(r,o))throw Hi("noident","Cannot bind to controller without identifier for directive '{0}'.",e)}return n}function s(t){var e=t.charAt(0)
if(!e||e!==Tr(e))throw Hi("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",t)
if(t!==t.trim())throw Hi("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",t)}var u={},l="Directive",f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,v=/(([\w\-]+)(?:\:([^;]+))?;?)/,b=P("ngSrc,ngSrcset,src,srcset"),x=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,S=/^(on[a-z]+|formaction)$/,E=$t()
this.directive=function M(t,n){return ht(t,"directive"),w(t)?(s(t),lt(n,"directiveFactory"),u.hasOwnProperty(t)||(u[t]=[],e.factory(t+l,["$injector","$exceptionHandler",function(e,n){var i=[]
return r(u[t],function(r,o){try{var a=e.invoke(r)
C(a)?a={compile:$(a)}:!a.compile&&a.link&&(a.compile=$(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||t,a.require=a.require||a.controller&&a.name,a.restrict=a.restrict||"EA",a.$$moduleName=r.$$moduleName,i.push(a)}catch(s){n(s)}}),i}])),u[t].push(n)):r(t,o(M)),this},this.component=function(t,e){function n(t){function n(e){return C(e)||Wr(e)?function(n,r){return t.invoke(e,this,{$element:n,$attrs:r})}:e}var o=e.template||e.templateUrl?e.template:"",a={controller:i,controllerAs:ge(e.controller)||e.controllerAs||"$ctrl",template:n(o),templateUrl:n(e.templateUrl),transclude:e.transclude,scope:{},bindToController:e.bindings||{},restrict:"E",require:e.require}
return r(e,function(t,e){"$"===e.charAt(0)&&(a[e]=t)}),a}var i=e.controller||function(){}
return r(e,function(t,e){"$"===e.charAt(0)&&(n[e]=t,C(i)&&(i[e]=t))}),n.$inject=["$injector"],this.directive(t,n)},this.aHrefSanitizationWhitelist=function(t){return g(t)?(n.aHrefSanitizationWhitelist(t),this):n.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(n.imgSrcSanitizationWhitelist(t),this):n.imgSrcSanitizationWhitelist()}
var A=!0
this.debugInfoEnabled=function(t){return g(t)?(A=t,this):A}
var O=10
this.onChangesTtl=function(t){return arguments.length?(O=t,this):O},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(e,n,i,o,s,$,g,E,M,T){function V(){try{if(!--yt)throw vt=void 0,Hi("infchng","{0} $onChanges() iterations reached. Aborting!\n",O)
g.$apply(function(){for(var t=0,e=vt.length;e>t;++t)vt[t]()
vt=void 0})}finally{yt++}}function j(t,e){if(e){var n,r,i,o=Object.keys(e)
for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=e[i]}else this.$attr={}
this.$$element=t}function I(t,e,n){gt.innerHTML="<span "+e+">"
var r=gt.firstChild.attributes,i=r[0]
r.removeNamedItem(i.name),i.value=n,t.attributes.setNamedItem(i)}function D(t,e){try{t.addClass(e)}catch(n){}}function P(e,n,r,i,o){e instanceof Dr||(e=Dr(e))
for(var a=/\S+/,s=0,u=e.length;u>s;s++){var c=e[s]
c.nodeType===ii&&c.nodeValue.match(a)&&Ot(c,e[s]=t.document.createElement("span"))}var l=q(e,n,e,r,i,o)
P.$$addScopeClass(e)
var f=null
return function(t,n,r){lt(t,"scope"),o&&o.needsNewScope&&(t=t.$parent.$new()),r=r||{}
var i=r.parentBoundTranscludeFn,a=r.transcludeControllers,s=r.futureParentElement
i&&i.$$boundTransclude&&(i=i.$$boundTransclude),f||(f=F(s))
var u
if(u="html"!==f?Dr(at(f,Dr("<div>").append(e).html())):n?Si.clone.call(e):e,a)for(var c in a)u.data("$"+c+"Controller",a[c].instance)
return P.$$addScopeInfo(u,t),n&&n(u,t),l&&l(t,u,u,i),u}}function F(t){var e=t&&t[0]
return e&&"foreignobject"!==_(e)&&Ur.call(e).match(/SVG/)?"svg":"html"}function q(t,e,n,r,i,o){function a(t,n,r,i){var o,a,s,u,c,l,f,h,$
if(p){var v=n.length
for($=new Array(v),c=0;c<d.length;c+=3)f=d[c],$[f]=n[f]}else $=n
for(c=0,l=d.length;l>c;)s=$[d[c++]],o=d[c++],a=d[c++],o?(o.scope?(u=t.$new(),P.$$addScopeInfo(Dr(s),u)):u=t,h=o.transcludeOnThisElement?L(t,o.transclude,i):!o.templateOnThisElement&&i?i:!i&&e?L(t,e):null,o(a,u,s,r,h)):a&&a(t,s.childNodes,void 0,i)}for(var s,u,c,l,f,h,p,d=[],$=0;$<t.length;$++)s=new j,u=B(t[$],[],s,0===$?r:void 0,i),c=u.length?J(u,t[$],s,e,n,null,[],[],o):null,c&&c.scope&&P.$$addScopeClass(s.$$element),f=c&&c.terminal||!(l=t[$].childNodes)||!l.length?null:q(l,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:e),(c||f)&&(d.push($,c,f),h=!0,p=p||c),o=null
return h?a:null}function L(t,e,n){function r(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}var i=r.$$slots=$t()
for(var o in e.$$slots)e.$$slots[o]?i[o]=L(t,e.$$slots[o],n):i[o]=null
return r}function B(t,e,n,r,i){var o,a,s=t.nodeType,u=n.$attr
switch(s){case ni:Q(e,$e(_(t)),"E",r,i)
for(var c,l,h,p,d,$,m=t.attributes,g=0,b=m&&m.length;b>g;g++){var x=!1,S=!1
c=m[g],l=c.name,d=Jr(c.value),p=$e(l),($=Ct.test(p))&&(l=l.replace(zi,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}))
var C=p.match(Et)
C&&tt(C[1])&&(x=l,S=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6)),h=$e(l.toLowerCase()),u[h]=l,($||!n.hasOwnProperty(h))&&(n[h]=d,zt(t,h)&&(n[h]=!0)),ct(t,e,d,h,$),Q(e,h,"A",r,i,x,S)}if(a=t.className,y(a)&&(a=a.animVal),w(a)&&""!==a)for(;o=v.exec(a);)h=$e(o[2]),Q(e,h,"C",r,i)&&(n[h]=Jr(o[3])),a=a.substr(o.index+o[0].length)
break
case ii:if(11===Ir)for(;t.parentNode&&t.nextSibling&&t.nextSibling.nodeType===ii;)t.nodeValue=t.nodeValue+t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling)
ot(e,t.nodeValue)
break
case oi:try{o=f.exec(t.nodeValue),o&&(h=$e(o[1]),Q(e,h,"M",r,i)&&(n[h]=Jr(o[2])))}catch(E){}}return e.sort(rt),e}function z(t,e,n){var r=[],i=0
if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Hi("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n)
t.nodeType==ni&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t)
return Dr(r)}function W(t,e,n){return function(r,i,o,a,s){return i=z(i[0],e,n),t(r,i,o,a,s)}}function G(t,e,n,r,i,o){var a
return t?P(e,n,r,i,o):function(){return a||(a=P(e,n,r,i,o),e=n=o=null),a.apply(this,arguments)}}function J(t,e,n,o,a,s,u,l,f){function h(t,e,n,r){t&&(n&&(t=W(t,n,r)),t.require=d.require,t.directiveName=$,(E===d||d.$$isolateScope)&&(t=ht(t,{isolateScope:!0})),u.push(t)),e&&(n&&(e=W(e,n,r)),e.require=d.require,e.directiveName=$,(E===d||d.$$isolateScope)&&(e=ht(e,{isolateScope:!0})),l.push(e))}function p(t,i,o,a,s){function f(t,e,n,r){var i
if(k(t)||(r=n,n=e,e=t,t=void 0),N&&(i=g),n||(n=N?w.parent():w),!r)return s(t,e,i,n,R)
var o=s.$$slots[r]
if(o)return o(t,e,i,n,R)
if(m(o))throw Hi("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',r,K(w))}var h,p,d,$,v,g,b,w,O,M
e===o?(O=n,w=n.$$element):(w=Dr(o),O=new j(w,n)),v=i,E?$=i.$new(!0):x&&(v=i.$parent),s&&(b=f,b.$$boundTransclude=s,b.isSlotFilled=function(t){return!!s.$$slots[t]}),S&&(g=Z(w,O,b,S,$,i,E)),E&&(P.$$addScopeInfo(w,$,!0,!(A&&(A===E||A===E.$$originalDirective))),P.$$addScopeClass(w,!0),$.$$isolateBindings=E.$$isolateBindings,M=dt(i,O,$,$.$$isolateBindings,E),M.removeWatches&&$.$on("$destroy",M.removeWatches))
for(var T in g){var V=S[T],I=g[T],D=V.$$bindings.bindToController
I.identifier&&D?I.bindingInfo=dt(v,O,I.instance,D,V):I.bindingInfo={}
var _=I()
_!==I.instance&&(I.instance=_,w.data("$"+V.name+"Controller",_),I.bindingInfo.removeWatches&&I.bindingInfo.removeWatches(),I.bindingInfo=dt(v,O,I.instance,D,V))}for(r(S,function(t,e){var n=t.require
t.bindToController&&!Wr(n)&&y(n)&&c(g[e].instance,Y(e,n,w,g))}),r(g,function(t){var e=t.instance
C(e.$onChanges)&&e.$onChanges(t.bindingInfo.initialChanges),C(e.$onInit)&&e.$onInit(),C(e.$onDestroy)&&v.$on("$destroy",function(){e.$onDestroy()})}),h=0,p=u.length;p>h;h++)d=u[h],pt(d,d.isolateScope?$:i,w,O,d.require&&Y(d.directiveName,d.require,w,g),b)
var R=i
for(E&&(E.template||null===E.templateUrl)&&(R=$),t&&t(R,o.childNodes,void 0,s),h=l.length-1;h>=0;h--)d=l[h],pt(d,d.isolateScope?$:i,w,O,d.require&&Y(d.directiveName,d.require,w,g),b)
r(g,function(t){var e=t.instance
C(e.$postLink)&&e.$postLink()})}f=f||{}
for(var d,$,v,g,b,w=-Number.MAX_VALUE,x=f.newScopeDirective,S=f.controllerDirectives,E=f.newIsolateScopeDirective,A=f.templateDirective,O=f.nonTlbTranscludeDirective,M=!1,T=!1,N=f.hasElementTranscludeDirective,V=n.$$element=Dr(e),I=s,D=o,R=!1,F=!1,q=0,U=t.length;U>q;q++){d=t[q]
var L=d.$$start,J=d.$$end
if(L&&(V=z(e,L,J)),v=void 0,w>d.priority)break
if((b=d.scope)&&(d.templateUrl||(y(b)?(it("new/isolated scope",E||x,d,V),E=d):it("new/isolated scope",E,d,V)),x=x||d),$=d.name,!R&&(d.replace&&(d.templateUrl||d.template)||d.transclude&&!d.$$tlb)){for(var Q,tt=q+1;Q=t[tt++];)if(Q.transclude&&!Q.$$tlb||Q.replace&&(Q.templateUrl||Q.template)){F=!0
break}R=!0}if(!d.templateUrl&&d.controller&&(b=d.controller,S=S||$t(),it("'"+$+"' controller",S[$],d,V),S[$]=d),b=d.transclude)if(M=!0,d.$$tlb||(it("transclusion",O,d,V),O=d),"element"==b)N=!0,w=d.priority,v=V,V=n.$$element=Dr(P.$$createComment($,n[$])),e=V[0],ft(a,H(v),e),v[0].$$parentNode=v[0].parentNode,D=G(F,v,o,w,I&&I.name,{nonTlbTranscludeDirective:O})
else{var rt=$t()
if(v=Dr(Tt(e)).contents(),y(b)){v=[]
var ot=$t(),st=$t()
r(b,function(t,e){var n="?"===t.charAt(0)
t=n?t.substring(1):t,ot[t]=e,rt[e]=null,st[e]=n}),r(V.contents(),function(t){var e=ot[$e(_(t))]
e?(st[e]=!0,rt[e]=rt[e]||[],rt[e].push(t)):v.push(t)}),r(st,function(t,e){if(!t)throw Hi("reqslot","Required transclusion slot `{0}` was not filled.",e)})
for(var ut in rt)rt[ut]&&(rt[ut]=G(F,rt[ut],o))}V.empty(),D=G(F,v,o,void 0,void 0,{needsNewScope:d.$$isolateScope||d.$$newScope}),D.$$slots=rt}if(d.template)if(T=!0,it("template",A,d,V),A=d,b=C(d.template)?d.template(V,n):d.template,b=St(b),d.replace){if(I=d,v=xt(b)?[]:me(at(d.templateNamespace,Jr(b))),e=v[0],1!=v.length||e.nodeType!==ni)throw Hi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",$,"")
ft(a,V,e)
var ct={$attr:{}},lt=B(e,[],ct),vt=t.splice(q+1,t.length-(q+1));(E||x)&&X(lt,E,x),t=t.concat(lt).concat(vt),et(n,ct),U=t.length}else V.html(b)
if(d.templateUrl)T=!0,it("template",A,d,V),A=d,d.replace&&(I=d),p=nt(t.splice(q,t.length-q),V,n,a,M&&D,u,l,{controllerDirectives:S,newScopeDirective:x!==d&&x,newIsolateScopeDirective:E,templateDirective:A,nonTlbTranscludeDirective:O}),U=t.length
else if(d.compile)try{g=d.compile(V,n,D),C(g)?h(null,g,L,J):g&&h(g.pre,g.post,L,J)}catch(mt){i(mt,K(V))}d.terminal&&(p.terminal=!0,w=Math.max(w,d.priority))}return p.scope=x&&x.scope===!0,p.transcludeOnThisElement=M,p.templateOnThisElement=T,p.transclude=D,f.hasElementTranscludeDirective=N,p}function Y(t,e,n,i){var o
if(w(e)){var a=e.match(x),s=e.substring(a[0].length),u=a[1]||a[3],c="?"===a[2]
if("^^"===u?n=n.parent():(o=i&&i[s],o=o&&o.instance),!o){var l="$"+s+"Controller"
o=u?n.inheritedData(l):n.data(l)}if(!o&&!c)throw Hi("ctreq","Controller '{0}', required by directive '{1}', can't be found!",s,t)}else if(Wr(e)){o=[]
for(var f=0,h=e.length;h>f;f++)o[f]=Y(t,e[f],n,i)}else y(e)&&(o={},r(e,function(e,r){o[r]=Y(t,e,n,i)}))
return o||null}function Z(t,e,n,r,i,o,a){var s=$t()
for(var u in r){var c=r[u],l={$scope:c===a||c.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},f=c.controller
"@"==f&&(f=e[c.name])
var h=$(f,l,!0,c.controllerAs)
s[c.name]=h,t.data("$"+c.name+"Controller",h.instance)}return s}function X(t,e,n){for(var r=0,i=t.length;i>r;r++)t[r]=h(t[r],{$$isolateScope:e,$$newScope:n})}function Q(t,n,r,o,s,c,f){if(n===s)return null
var p=null
if(u.hasOwnProperty(n))for(var d,$=e.get(n+l),v=0,g=$.length;g>v;v++)try{if(d=$[v],(m(o)||o>d.priority)&&-1!=d.restrict.indexOf(r)){if(c&&(d=h(d,{$$start:c,$$end:f})),!d.$$bindings){var b=d.$$bindings=a(d,d.name)
y(b.isolateScope)&&(d.$$isolateBindings=b.isolateScope)}t.push(d),p=d}}catch(w){i(w)}return p}function tt(t){if(u.hasOwnProperty(t))for(var n,r=e.get(t+l),i=0,o=r.length;o>i;i++)if(n=r[i],n.multiElement)return!0
return!1}function et(t,e){var n=e.$attr,i=t.$attr,o=t.$$element
r(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),r(e,function(e,r){"class"==r?(D(o,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==r?(o.attr("style",o.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==r.charAt(0)||t.hasOwnProperty(r)||(t[r]=e,i[r]=n[r])})}function nt(t,e,n,i,a,s,u,c){var l,f,p=[],d=e[0],$=t.shift(),v=h($,{templateUrl:null,transclude:null,replace:null,$$originalDirective:$}),m=C($.templateUrl)?$.templateUrl(e,n):$.templateUrl,g=$.templateNamespace
return e.empty(),o(m).then(function(o){var h,b,w,x
if(o=St(o),$.replace){if(w=xt(o)?[]:me(at(g,Jr(o))),h=w[0],1!=w.length||h.nodeType!==ni)throw Hi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",$.name,m)
b={$attr:{}},ft(i,e,h)
var S=B(h,[],b)
y($.scope)&&X(S,!0),t=S.concat(t),et(n,b)}else h=d,e.html(o)
for(t.unshift(v),l=J(t,h,n,a,e,$,s,u,c),r(i,function(t,n){t==h&&(i[n]=e[0])}),f=q(e[0].childNodes,a);p.length;){var C=p.shift(),E=p.shift(),A=p.shift(),k=p.shift(),O=e[0]
if(!C.$$destroyed){if(E!==d){var M=E.className
c.hasElementTranscludeDirective&&$.replace||(O=Tt(h)),ft(A,Dr(E),O),D(Dr(O),M)}x=l.transcludeOnThisElement?L(C,l.transclude,k):k,l(f,C,O,i,x)}}p=null}),function(t,e,n,r,i){var o=i
e.$$destroyed||(p?p.push(e,n,r,o):(l.transcludeOnThisElement&&(o=L(e,l.transclude,i)),l(f,e,n,r,o)))}}function rt(t,e){var n=e.priority-t.priority
return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function it(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw Hi("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,K(r))}function ot(t,e){var r=n(e,!0)
r&&t.push({priority:0,compile:function(t){var e=t.parent(),n=!!e.length
return n&&P.$$addBindingClass(e),function(t,e){var i=e.parent()
n||P.$$addBindingClass(i),P.$$addBindingInfo(i,r.expressions),t.$watch(r,function(t){e[0].nodeValue=t})}}})}function at(e,n){switch(e=Tr(e||"html")){case"svg":case"math":var r=t.document.createElement("div")
return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes
default:return n}}function st(t,e){if("srcdoc"==e)return E.HTML
var n=_(t)
return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?E.RESOURCE_URL:void 0}function ct(t,e,r,i,o){var a=st(t,i)
o=b[i]||o
var s=n(r,!0,a,o)
if(s){if("multiple"===i&&"select"===_(t))throw Hi("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",K(t))
e.push({priority:100,compile:function(){return{pre:function(t,e,u){var c=u.$$observers||(u.$$observers=$t())
if(S.test(i))throw Hi("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.")
var l=u[i]
l!==r&&(s=l&&n(l,!0,a,o),r=l),s&&(u[i]=s(t),(c[i]||(c[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||t).$watch(s,function(t,e){"class"===i&&t!=e?u.$updateClass(t,e):u.$set(i,t)}))}}}})}}function ft(e,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode
if(e)for(i=0,o=e.length;o>i;i++)if(e[i]==a){e[i++]=r
for(var c=i,l=c+s-1,f=e.length;f>c;c++,l++)f>l?e[c]=e[l]:delete e[c]
e.length-=s-1,e.context===a&&(e.context=r)
break}u&&u.replaceChild(r,a)
var h=t.document.createDocumentFragment()
for(i=0;s>i;i++)h.appendChild(n[i])
for(Dr.hasData(a)&&(Dr.data(r,Dr.data(a)),Dr(a).off("$destroy")),Dr.cleanData(h.querySelectorAll("*")),i=1;s>i;i++)delete n[i]
n[0]=r,n.length=1}function ht(t,e){return c(function(){return t.apply(null,arguments)},t,e)}function pt(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(s){i(s,K(n))}}function dt(t,e,i,o,a){function u(e,n,r){C(i.$onChanges)&&n!==r&&(vt||(t.$$postDigest(V),vt=[]),l||(l={},vt.push(c)),l[e]&&(r=l[e].previousValue),l[e]=new de(r,n))}function c(){i.$onChanges(l),l=void 0}var l,f=[],h={}
return r(o,function(r,o){var c,l,d,$,v,m=r.attrName,g=r.optional,y=r.mode
switch(y){case"@":g||Mr.call(e,m)||(i[o]=e[m]=void 0),e.$observe(m,function(t){if(w(t)||N(t)){var e=i[o]
u(o,t,e),i[o]=t}}),e.$$observers[m].$$scope=t,c=e[m],w(c)?i[o]=n(c)(t):N(c)&&(i[o]=c),h[o]=new de(Bi,i[o])
break
case"=":if(!Mr.call(e,m)){if(g)break
e[m]=void 0}if(g&&!e[m])break
l=s(e[m]),$=l.literal?U:function(t,e){return t===e||t!==t&&e!==e},d=l.assign||function(){throw c=i[o]=l(t),Hi("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",e[m],m,a.name)},c=i[o]=l(t)
var b=function(e){return $(e,i[o])||($(e,c)?d(t,e=i[o]):i[o]=e),c=e}
b.$stateful=!0,v=r.collection?t.$watchCollection(e[m],b):t.$watch(s(e[m],b),null,l.literal),f.push(v)
break
case"<":if(!Mr.call(e,m)){if(g)break
e[m]=void 0}if(g&&!e[m])break
l=s(e[m]),i[o]=l(t),h[o]=new de(Bi,i[o]),v=t.$watch(l,function(t,e){t===e&&(e=i[o]),u(o,t,e),i[o]=t},l.literal),f.push(v)
break
case"&":if(l=e.hasOwnProperty(m)?s(e[m]):p,l===p&&g)break
i[o]=function(e){return l(t,e)}}}),{initialChanges:h,removeWatches:f.length&&function(){for(var t=0,e=f.length;e>t;++t)f[t]()}}}var vt,mt=/^\w/,gt=t.document.createElement("div"),yt=O
j.prototype={$normalize:$e,$addClass:function(t){t&&t.length>0&&M.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&M.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=ve(t,e)
n&&n.length&&M.addClass(this.$$element,n)
var r=ve(e,t)
r&&r.length&&M.removeClass(this.$$element,r)},$set:function(t,e,n,o){var a,s=this.$$element[0],u=zt(s,t),c=Wt(t),l=t
if(u?(this.$$element.prop(t,e),o=u):c&&(this[c]=e,l=c),this[t]=e,o?this.$attr[t]=o:(o=this.$attr[t],o||(this.$attr[t]=o=ut(t,"-"))),a=_(this.$$element),"a"===a&&("href"===t||"xlinkHref"===t)||"img"===a&&"src"===t)this[t]=e=T(e,"src"===t)
else if("img"===a&&"srcset"===t){for(var f="",h=Jr(e),p=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,d=/\s/.test(h)?p:/(,)/,$=h.split(d),v=Math.floor($.length/2),g=0;v>g;g++){var y=2*g
f+=T(Jr($[y]),!0),f+=" "+Jr($[y+1])}var b=Jr($[2*g]).split(/\s/)
f+=T(Jr(b[0]),!0),2===b.length&&(f+=" "+Jr(b[1])),this[t]=e=f}n!==!1&&(null===e||m(e)?this.$$element.removeAttr(o):mt.test(o)?this.$$element.attr(o,e):I(this.$$element[0],o,e))
var w=this.$$observers
w&&r(w[l],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=$t()),i=r[t]||(r[t]=[])
return i.push(e),g.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||m(n[t])||e(n[t])}),function(){R(i,e)}}}
var bt=n.startSymbol(),wt=n.endSymbol(),St="{{"==bt&&"}}"==wt?d:function(t){return t.replace(/\{\{/g,bt).replace(/}}/g,wt)},Ct=/^ngAttr[A-Z]/,Et=/^(.+)Start$/
return P.$$addBindingInfo=A?function(t,e){var n=t.data("$binding")||[]
Wr(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:p,P.$$addBindingClass=A?function(t){D(t,"ng-binding")}:p,P.$$addScopeInfo=A?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
t.data(i,e)}:p,P.$$addScopeClass=A?function(t,e){D(t,e?"ng-isolate-scope":"ng-scope")}:p,P.$$createComment=function(e,n){var r=""
return A&&(r=" "+(e||"")+": "+(n||"")+" "),t.document.createComment(r)},P}]}function de(t,e){this.previousValue=t,this.currentValue=e}function $e(t){return wt(t.replace(zi,""))}function ve(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/)
t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t
n+=(n.length>0?" ":"")+a}return n}function me(t){t=Dr(t)
var e=t.length
if(1>=e)return t
for(;e--;){var n=t[e]
n.nodeType===oi&&Fr.call(t,e,1)}return t}function ge(t,e){if(e&&w(e))return e
if(w(t)){var n=Gi.exec(t)
if(n)return n[3]}}function ye(){var t={},n=!1
this.has=function(e){return t.hasOwnProperty(e)},this.register=function(e,n){ht(e,"controller"),y(e)?c(t,e):t[e]=n},this.allowGlobals=function(){n=!0},this.$get=["$injector","$window",function(r,i){function o(t,n,r,i){if(!t||!y(t.$scope))throw e("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,n)
t.$scope[n]=r}return function(e,a,s,u){var l,f,h,p
if(s=s===!0,u&&w(u)&&(p=u),w(e)){if(f=e.match(Gi),!f)throw Wi("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",e)
h=f[1],p=p||f[3],e=t.hasOwnProperty(h)?t[h]:pt(a.$scope,h,!0)||(n?pt(i,h,!0):void 0),ft(e,h,!0)}if(s){var d=(Wr(e)?e[e.length-1]:e).prototype
l=Object.create(d||null),p&&o(a,p,l,h||e.name)
var $
return $=c(function(){var t=r.invoke(e,l,a,h)
return t!==l&&(y(t)||C(t))&&(l=t,p&&o(a,p,l,h||e.name)),l},{instance:l,identifier:p})}return l=r.instantiate(e,a,h),p&&o(a,p,l,h||e.name),l}}]}function be(){this.$get=["$window",function(t){return Dr(t.document)}]}function we(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function xe(t){return y(t)?S(t)?t.toISOString():W(t):t}function Se(){this.$get=function(){return function(t){if(!t)return""
var e=[]
return i(t,function(t,n){null===t||m(t)||(Wr(t)?r(t,function(t){e.push(nt(n)+"="+nt(xe(t)))}):e.push(nt(n)+"="+nt(xe(t))))}),e.join("&")}}}function Ce(){this.$get=function(){return function(t){function e(t,o,a){null===t||m(t)||(Wr(t)?r(t,function(t,n){e(t,o+"["+(y(t)?n:"")+"]")}):y(t)&&!S(t)?i(t,function(t,n){e(t,o+(a?"":"[")+n+(a?"":"]"))}):n.push(nt(o)+"="+nt(xe(t))))}if(!t)return""
var n=[]
return e(t,"",!0),n.join("&")}}}function Ee(t,e){if(w(t)){var n=t.replace(Qi,"").trim()
if(n){var r=e("Content-Type");(r&&0===r.indexOf(Yi)||Ae(n))&&(t=G(n))}}return t}function Ae(t){var e=t.match(Ki)
return e&&Xi[e[0]].test(t)}function ke(t){function e(t,e){t&&(i[t]=i[t]?i[t]+", "+e:e)}var n,i=$t()
return w(t)?r(t.split("\n"),function(t){n=t.indexOf(":"),e(Tr(Jr(t.substr(0,n))),Jr(t.substr(n+1)))}):y(t)&&r(t,function(t,n){e(Tr(n),Jr(t))}),i}function Oe(t){var e
return function(n){if(e||(e=ke(t)),n){var r=e[Tr(n)]
return void 0===r&&(r=null),r}return e}}function Me(t,e,n,i){return C(i)?i(t,e,n):(r(i,function(r){t=r(t,e,n)}),t)}function Te(t){return t>=200&&300>t}function Ne(){var t=this.defaults={transformResponse:[Ee],transformRequest:[function(t){return!y(t)||O(t)||T(t)||M(t)?t:W(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:q(Zi),put:q(Zi),patch:q(Zi)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},n=!1
this.useApplyAsync=function(t){return g(t)?(n=!!t,this):n}
var i=!0
this.useLegacyPromiseExtensions=function(t){return g(t)?(i=!!t,this):i}
var o=this.interceptors=[]
this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(a,s,u,l,f,h){function p(n){function o(t){var e=c({},t)
return e.data=Me(t.data,t.headers,t.status,u.transformResponse),Te(t.status)?e:f.reject(e)}function a(t,e){var n,i={}
return r(t,function(t,r){C(t)?(n=t(e),null!=n&&(i[r]=n)):i[r]=t}),i}function s(e){var n,r,i,o=t.headers,s=c({},e.headers)
o=c({},o.common,o[Tr(e.method)])
t:for(n in o){r=Tr(n)
for(i in s)if(Tr(i)===r)continue t
s[n]=o[n]}return a(s,q(e))}if(!y(n))throw e("$http")("badreq","Http request configuration must be an object.  Received: {0}",n)
if(!w(n.url))throw e("$http")("badreq","Http request configuration url must be a string.  Received: {0}",n.url)
var u=c({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer},n)
u.headers=s(n),u.method=Nr(u.method),u.paramSerializer=w(u.paramSerializer)?h.get(u.paramSerializer):u.paramSerializer
var l=function(e){var n=e.headers,i=Me(e.data,Oe(n),void 0,e.transformRequest)
return m(i)&&r(n,function(t,e){"content-type"===Tr(e)&&delete n[e]}),m(e.withCredentials)&&!m(t.withCredentials)&&(e.withCredentials=t.withCredentials),v(e,i).then(o,o)},p=[l,void 0],d=f.when(u)
for(r(S,function(t){(t.request||t.requestError)&&p.unshift(t.request,t.requestError),(t.response||t.responseError)&&p.push(t.response,t.responseError)});p.length;){var $=p.shift(),g=p.shift()
d=d.then($,g)}return i?(d.success=function(t){return ft(t,"fn"),d.then(function(e){t(e.data,e.status,e.headers,u)}),d},d.error=function(t){return ft(t,"fn"),d.then(null,function(e){t(e.data,e.status,e.headers,u)}),d}):(d.success=eo("success"),d.error=eo("error")),d}function d(t){r(arguments,function(t){p[t]=function(e,n){return p(c({},n||{},{method:t,url:e}))}})}function $(t){r(arguments,function(t){p[t]=function(e,n,r){return p(c({},r||{},{method:t,url:e,data:n}))}})}function v(e,i){function o(t){if(t){var e={}
return r(t,function(t,r){e[r]=function(e){function r(){t(e)}n?l.$applyAsync(r):l.$$phase?r():l.$apply(r)}}),e}}function u(t,e,r,i){function o(){c(e,t,r,i)}$&&(Te(t)?$.put(E,[t,e,ke(r),i]):$.remove(E)),n?l.$applyAsync(o):(o(),l.$$phase||l.$apply())}function c(t,n,r,i){n=n>=-1?n:0,(Te(n)?w.resolve:w.reject)({data:t,status:n,headers:Oe(r),config:e,statusText:i})}function h(t){c(t.data,t.status,q(t.headers()),t.statusText)}function d(){var t=p.pendingRequests.indexOf(e);-1!==t&&p.pendingRequests.splice(t,1)}var $,v,w=f.defer(),S=w.promise,C=e.headers,E=b(e.url,e.paramSerializer(e.params))
if(p.pendingRequests.push(e),S.then(d,d),!e.cache&&!t.cache||e.cache===!1||"GET"!==e.method&&"JSONP"!==e.method||($=y(e.cache)?e.cache:y(t.cache)?t.cache:x),$&&(v=$.get(E),g(v)?V(v)?v.then(h,h):Wr(v)?c(v[1],v[0],q(v[2]),v[3]):c(v,200,{},"OK"):$.put(E,S)),m(v)){var A=jn(e.url)?s()[e.xsrfCookieName||t.xsrfCookieName]:void 0
A&&(C[e.xsrfHeaderName||t.xsrfHeaderName]=A),a(e.method,E,i,u,C,e.timeout,e.withCredentials,e.responseType,o(e.eventHandlers),o(e.uploadEventHandlers))}return S}function b(t,e){return e.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+e),t}var x=u("$http")
t.paramSerializer=w(t.paramSerializer)?h.get(t.paramSerializer):t.paramSerializer
var S=[]
return r(o,function(t){S.unshift(w(t)?h.get(t):h.invoke(t))}),p.pendingRequests=[],d("get","delete","head","jsonp"),$("post","put","patch"),p.defaults=t,p}]}function Ve(){this.$get=function(){return function(){return new t.XMLHttpRequest}}}function je(){this.$get=["$browser","$window","$document","$xhrFactory",function(t,e,n,r){return Ie(t,r,t.defer,e.angular.callbacks,n[0])}]}function Ie(t,e,n,i,o){function a(t,e,n){var r=o.createElement("script"),a=null
return r.type="text/javascript",r.src=t,r.async=!0,a=function(t){hi(r,"load",a),hi(r,"error",a),o.body.removeChild(r),r=null
var s=-1,u="unknown"
t&&("load"!==t.type||i[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},fi(r,"load",a),fi(r,"error",a),o.body.appendChild(r),a}return function(o,s,u,c,l,f,h,d,$,v){function y(){x&&x(),S&&S.abort()}function b(e,r,i,o,a){g(A)&&n.cancel(A),x=S=null,e(r,i,o,a),t.$$completeOutstandingRequest(p)}if(t.$$incOutstandingRequestCount(),s=s||t.url(),"jsonp"==Tr(o)){var w="_"+(i.counter++).toString(36)
i[w]=function(t){i[w].data=t,i[w].called=!0}
var x=a(s.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(t,e){b(c,t,i[w].data,"",e),i[w]=p})}else{var S=e(o,s)
S.open(o,s,!0),r(l,function(t,e){g(t)&&S.setRequestHeader(e,t)}),S.onload=function(){var t=S.statusText||"",e="response"in S?S.response:S.responseText,n=1223===S.status?204:S.status
0===n&&(n=e?200:"file"==Vn(s).protocol?404:0),b(c,n,e,S.getAllResponseHeaders(),t)}
var C=function(){b(c,-1,null,null,"")}
if(S.onerror=C,S.onabort=C,r($,function(t,e){S.addEventListener(e,t)}),r(v,function(t,e){S.upload.addEventListener(e,t)}),h&&(S.withCredentials=!0),d)try{S.responseType=d}catch(E){if("json"!==d)throw E}S.send(m(u)?null:u)}if(f>0)var A=n(y,f)
else V(f)&&f.then(y)}}function De(){var t="{{",e="}}"
this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(p,t).replace(d,e)}function s(t){if(null==t)return""
switch(typeof t){case"string":break
case"number":t=""+t
break
default:t=W(t)}return t}function u(t,e,n,r){var i
return i=t.$watch(function(t){return i(),r(t)},e,n)}function l(o,l,p,d){function v(t){try{return t=V(t),d&&!g(t)?t:s(t)}catch(e){r(no.interr(o,e))}}if(!o.length||-1===o.indexOf(t)){var y
if(!l){var b=a(o)
y=$(b),y.exp=o,y.expressions=[],y.$$watchDelegate=u}return y}d=!!d
for(var w,x,S,E=0,A=[],k=[],O=o.length,M=[],T=[];O>E;){if(-1==(w=o.indexOf(t,E))||-1==(x=o.indexOf(e,w+f))){E!==O&&M.push(a(o.substring(E)))
break}E!==w&&M.push(a(o.substring(E,w))),S=o.substring(w+f,x),A.push(S),k.push(n(S,v)),E=x+h,T.push(M.length),M.push("")}if(p&&M.length>1&&no.throwNoconcat(o),!l||A.length){var N=function(t){for(var e=0,n=A.length;n>e;e++){if(d&&m(t[e]))return
M[T[e]]=t[e]}return M.join("")},V=function(t){return p?i.getTrusted(p,t):i.valueOf(t)}
return c(function(t){var e=0,n=A.length,i=new Array(n)
try{for(;n>e;e++)i[e]=k[e](t)
return N(i)}catch(a){r(no.interr(o,a))}},{exp:o,expressions:A,$$watchDelegate:function(t,e){var n
return t.$watchGroup(k,function(r,i){var o=N(r)
C(e)&&e.call(this,o,r!==i?n:o,t),n=o})}})}}var f=t.length,h=e.length,p=new RegExp(t.replace(/./g,o),"g"),d=new RegExp(e.replace(/./g,o),"g")
return l.startSymbol=function(){return t},l.endSymbol=function(){return e},l}]}function Pe(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(t,e,n,r,i){function o(o,s,u,c){function l(){f?o.apply(null,h):o($)}var f=arguments.length>4,h=f?H(arguments,4):[],p=e.setInterval,d=e.clearInterval,$=0,v=g(c)&&!c,m=(v?r:n).defer(),y=m.promise
return u=g(u)?u:0,y.$$intervalId=p(function(){v?i.defer(l):t.$evalAsync(l),m.notify($++),u>0&&$>=u&&(m.resolve($),d(y.$$intervalId),delete a[y.$$intervalId]),v||t.$apply()},s),a[y.$$intervalId]=m,y}var a={}
return o.cancel=function(t){return t&&t.$$intervalId in a?(a[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete a[t.$$intervalId],!0):!1},o}]}function _e(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=et(e[n])
return e.join("/")}function Re(t,e){var n=Vn(t)
e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=f(n.port)||io[n.protocol]||null}function Fe(t,e){var n="/"!==t.charAt(0)
n&&(t="/"+t)
var r=Vn(t)
e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=Q(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function qe(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function Ue(t){var e=t.indexOf("#")
return-1==e?t:t.substr(0,e)}function Le(t){return t.replace(/(#.+)|#$/,"$1")}function He(t){return t.substr(0,Ue(t).lastIndexOf("/")+1)}function Be(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function ze(t,e,n){this.$$html5=!0,n=n||"",Re(t,this),this.$$parse=function(t){var n=qe(e,t)
if(!w(n))throw oo("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e)
Fe(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=tt(this.$$search),n=this.$$hash?"#"+et(this.$$hash):""
this.$$url=_e(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a,s
return g(o=qe(t,r))?(a=o,s=g(o=qe(n,o))?e+(qe("/",o)||o):t+a):g(o=qe(e,r))?s=e+o:e==r+"/"&&(s=e),s&&this.$$parse(s),!!s}}function We(t,e,n){Re(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/
return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o,a=qe(t,r)||qe(e,r)
m(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",m(a)&&(t=r,this.replace())):(o=qe(n,a),m(o)&&(o=a)),Fe(o,this),this.$$path=i(this.$$path,o,t),this.$$compose()},this.$$compose=function(){var e=tt(this.$$search),r=this.$$hash?"#"+et(this.$$hash):""
this.$$url=_e(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return Ue(t)==Ue(e)?(this.$$parse(e),!0):!1}}function Ge(t,e,n){this.$$html5=!0,We.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a
return t==Ue(r)?o=r:(a=qe(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$compose=function(){var e=tt(this.$$search),r=this.$$hash?"#"+et(this.$$hash):""
this.$$url=_e(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+n+this.$$url}}function Je(t){return function(){return this[t]}}function Ye(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function Ze(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(e){return g(e)?(t=e,this):t},this.html5Mode=function(t){return N(t)?(e.enabled=t,this):y(t)?(N(t.enabled)&&(e.enabled=t.enabled),N(t.requireBase)&&(e.requireBase=t.requireBase),N(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e,n){var i=c.url(),o=c.$$state
try{r.url(t,e,n),c.$$state=r.state()}catch(a){throw c.url(i),c.$$state=o,a}}function u(t,e){n.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l,f,h=r.baseHref(),p=r.url()
if(e.enabled){if(!h&&e.requireBase)throw oo("nobase","$location in HTML5 mode requires a <base> tag to be present!")
f=Be(p)+(h||"/"),l=i.history?ze:Ge}else f=Ue(p),l=We
var d=He(f)
c=new l(f,d,"#"+t),c.$$parseLinkUrl(p,p),c.$$state=r.state()
var $=/^\s*(javascript|mailto):/i
o.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var i=Dr(t.target);"a"!==_(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return
var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href")
y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Vn(s.animVal).href),$.test(s)||!s||i.attr("target")||t.isDefaultPrevented()||c.$$parseLinkUrl(s,u)&&(t.preventDefault(),c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),Le(c.absUrl())!=Le(p)&&r.url(c.absUrl(),!0)
var v=!0
return r.onUrlChange(function(t,e){return m(qe(d,t))?void(a.location.href=t):(n.$evalAsync(function(){var r,i=c.absUrl(),o=c.$$state
t=Le(t),c.$$parse(t),c.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(r?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(v=!1,u(i,o)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var t=Le(r.url()),e=Le(c.absUrl()),o=r.state(),a=c.$$replace,l=t!==e||c.$$html5&&i.history&&o!==c.$$state;(v||l)&&(v=!1,n.$evalAsync(function(){var e=c.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,c.$$state,o).defaultPrevented
c.absUrl()===e&&(r?(c.$$parse(t),c.$$state=o):(l&&s(e,a,o===c.$$state?null:c.$$state),u(t,o)))})),c.$$replace=!1}),c}]}function Ke(){var t=!0,e=this
this.debugEnabled=function(e){return g(e)?(t=e,this):t},this.$get=["$window",function(n){function i(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function o(t){var e=n.console||{},o=e[t]||e.log||p,a=!1
try{a=!!o.apply}catch(s){}return a?function(){var t=[]
return r(arguments,function(e){t.push(i(e))}),o.apply(e,t)}:function(t,e){o(t,null==e?"":e)}}return{log:o("log"),info:o("info"),warn:o("warn"),error:o("error"),debug:function(){var n=o("debug")
return function(){t&&n.apply(e,arguments)}}()}}]}function Xe(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw so("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e)
return t}function Qe(t){return t+""}function tn(t,e){if(t){if(t.constructor===t)throw so("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t.window===t)throw so("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e)
if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw so("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e)
if(t===Object)throw so("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function en(t,e){if(t){if(t.constructor===t)throw so("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t===uo||t===co||t===lo)throw so("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function nn(t,e){if(t&&(t===0..constructor||t===(!1).constructor||t==="".constructor||t==={}.constructor||t===[].constructor||t===Function.constructor))throw so("isecaf","Assigning to a constructor is disallowed! Expression: {0}",e)}function rn(t,e){return"undefined"!=typeof t?t:e}function on(t,e){return"undefined"==typeof t?e:"undefined"==typeof e?t:t+e}function an(t,e){var n=t(e)
return!n.$stateful}function sn(t,e){var n,i
switch(t.type){case $o.Program:n=!0,r(t.body,function(t){sn(t.expression,e),n=n&&t.expression.constant}),t.constant=n
break
case $o.Literal:t.constant=!0,t.toWatch=[]
break
case $o.UnaryExpression:sn(t.argument,e),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch
break
case $o.BinaryExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch)
break
case $o.LogicalExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t]
break
case $o.ConditionalExpression:sn(t.test,e),sn(t.alternate,e),sn(t.consequent,e),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t]
break
case $o.Identifier:t.constant=!1,t.toWatch=[t]
break
case $o.MemberExpression:sn(t.object,e),t.computed&&sn(t.property,e),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=[t]
break
case $o.CallExpression:n=t.filter?an(e,t.callee.name):!1,i=[],r(t.arguments,function(t){sn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=t.filter&&an(e,t.callee.name)?i:[t]
break
case $o.AssignmentExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t]
break
case $o.ArrayExpression:n=!0,i=[],r(t.elements,function(t){sn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=i
break
case $o.ObjectExpression:n=!0,i=[],r(t.properties,function(t){sn(t.value,e),n=n&&t.value.constant,t.value.constant||i.push.apply(i,t.value.toWatch)}),t.constant=n,t.toWatch=i
break
case $o.ThisExpression:t.constant=!1,t.toWatch=[]
break
case $o.LocalsExpression:t.constant=!1,t.toWatch=[]}}function un(t){if(1==t.length){var e=t[0].expression,n=e.toWatch
return 1!==n.length?n:n[0]!==e?n:void 0}}function cn(t){return t.type===$o.Identifier||t.type===$o.MemberExpression}function ln(t){return 1===t.body.length&&cn(t.body[0].expression)?{type:$o.AssignmentExpression,left:t.body[0].expression,right:{type:$o.NGValueParameter},operator:"="}:void 0}function fn(t){return 0===t.body.length||1===t.body.length&&(t.body[0].expression.type===$o.Literal||t.body[0].expression.type===$o.ArrayExpression||t.body[0].expression.type===$o.ObjectExpression)}function hn(t){return t.constant}function pn(t,e){this.astBuilder=t,this.$filter=e}function dn(t,e){this.astBuilder=t,this.$filter=e}function $n(t){return"constructor"==t}function vn(t){return C(t.valueOf)?t.valueOf():mo.call(t)}function mn(){var t,e,n=$t(),i=$t(),o={"true":!0,"false":!1,"null":null,undefined:void 0}
this.addLiteral=function(t,e){o[t]=e},this.setIdentifierFns=function(n,r){return t=n,e=r,this},this.$get=["$filter",function(a){function s(t,e,r){var o,s,c
switch(r=r||b,typeof t){case"string":t=t.trim(),c=t
var v=r?i:n
if(o=v[c],!o){":"===t.charAt(0)&&":"===t.charAt(1)&&(s=!0,t=t.substring(2))
var g=r?y:m,w=new po(g),x=new vo(w,a,g)
o=x.parse(t),o.constant?o.$$watchDelegate=d:s?o.$$watchDelegate=o.literal?h:f:o.inputs&&(o.$$watchDelegate=l),r&&(o=u(o)),v[c]=o}return $(o,e)
case"function":return $(t,e)
default:return $(p,e)}}function u(t){function e(e,n,r,i){var o=b
b=!0
try{return t(e,n,r,i)}finally{b=o}}if(!t)return t
e.$$watchDelegate=t.$$watchDelegate,e.assign=u(t.assign),e.constant=t.constant,e.literal=t.literal
for(var n=0;t.inputs&&n<t.inputs.length;++n)t.inputs[n]=u(t.inputs[n])
return e.inputs=t.inputs,e}function c(t,e){return null==t||null==e?t===e:"object"==typeof t&&(t=vn(t),"object"==typeof t)?!1:t===e||t!==t&&e!==e}function l(t,e,n,r,i){var o,a=r.inputs
if(1===a.length){var s=c
return a=a[0],t.$watch(function(t){var e=a(t)
return c(e,s)||(o=r(t,void 0,void 0,[e]),s=e&&vn(e)),o},e,n,i)}for(var u=[],l=[],f=0,h=a.length;h>f;f++)u[f]=c,l[f]=null
return t.$watch(function(t){for(var e=!1,n=0,i=a.length;i>n;n++){var s=a[n](t);(e||(e=!c(s,u[n])))&&(l[n]=s,u[n]=s&&vn(s))}return e&&(o=r(t,void 0,void 0,l)),o},e,n,i)}function f(t,e,n,r){var i,o
return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,C(e)&&e.apply(this,arguments),g(t)&&r.$$postDigest(function(){g(o)&&i()})},n)}function h(t,e,n,i){function o(t){var e=!0
return r(t,function(t){g(t)||(e=!1)}),e}var a,s
return a=t.$watch(function(t){return i(t)},function(t,n,r){s=t,C(e)&&e.call(this,t,n,r),o(t)&&r.$$postDigest(function(){o(s)&&a()})},n)}function d(t,e,n,r){var i
return i=t.$watch(function(t){return i(),r(t)},e,n)}function $(t,e){if(!e)return t
var n=t.$$watchDelegate,r=!1,i=n!==h&&n!==f,o=i?function(n,i,o,a){var s=r&&a?a[0]:t(n,i,o,a)
return e(s,n,i)}:function(n,r,i,o){var a=t(n,r,i,o),s=e(a,n,r)
return g(a)?s:a}
return t.$$watchDelegate&&t.$$watchDelegate!==l?o.$$watchDelegate=t.$$watchDelegate:e.$stateful||(o.$$watchDelegate=l,r=!t.inputs,o.inputs=t.inputs?t.inputs:[t]),o}var v=Zr().noUnsafeEval,m={csp:v,expensiveChecks:!1,literals:F(o),isIdentifierStart:C(t)&&t,isIdentifierContinue:C(e)&&e},y={csp:v,expensiveChecks:!0,literals:F(o),isIdentifierStart:C(t)&&t,isIdentifierContinue:C(e)&&e},b=!1
return s.$$runningExpensiveChecks=function(){return b},s}]}function gn(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return bn(function(e){t.$evalAsync(e)},e)}]}function yn(){this.$get=["$browser","$exceptionHandler",function(t,e){return bn(function(e){t.defer(e)},e)}]}function bn(t,n){function i(){this.$$state={status:0}}function o(t,e){return function(n){e.call(t,n)}}function a(t){var e,r,i
i=t.pending,t.processScheduled=!1,t.pending=void 0
for(var o=0,a=i.length;a>o;++o){r=i[o][0],e=i[o][t.status]
try{C(e)?r.resolve(e(t.value)):1===t.status?r.resolve(t.value):r.reject(t.value)}catch(s){r.reject(s),n(s)}}}function s(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){a(e)}))}function u(){this.promise=new i}function l(t){var e=new u,n=0,i=Wr(t)?[]:{}
return r(t,function(t,r){n++,v(t).then(function(t){i.hasOwnProperty(r)||(i[r]=t,--n||e.resolve(i))},function(t){i.hasOwnProperty(r)||e.reject(t)})}),0===n&&e.resolve(i),e.promise}var f=e("$q",TypeError),h=function(){var t=new u
return t.resolve=o(t,t.resolve),t.reject=o(t,t.reject),t.notify=o(t,t.notify),t}
c(i.prototype,{then:function(t,e,n){if(m(t)&&m(e)&&m(n))return this
var r=new u
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&s(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return $(e,!0,t)},function(e){return $(e,!1,t)},e)}}),c(u.prototype,{resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(f("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){function e(t){u||(u=!0,a.$$resolve(t))}function r(t){u||(u=!0,a.$$reject(t))}var i,a=this,u=!1
try{(y(t)||C(t))&&(i=t&&t.then),C(i)?(this.promise.$$state.status=-1,i.call(t,e,r,o(this,this.notify))):(this.promise.$$state.value=t,this.promise.$$state.status=1,s(this.promise.$$state))}catch(c){r(c),n(c)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,s(this.promise.$$state)},notify:function(e){var r=this.promise.$$state.pending
this.promise.$$state.status<=0&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;a>o;o++){i=r[o][0],t=r[o][3]
try{i.notify(C(t)?t(e):e)}catch(s){n(s)}}})}})
var p=function(t){var e=new u
return e.reject(t),e.promise},d=function(t,e){var n=new u
return e?n.resolve(t):n.reject(t),n.promise},$=function(t,e,n){var r=null
try{C(n)&&(r=n())}catch(i){return d(i,!1)}return V(r)?r.then(function(){return d(t,e)},function(t){return d(t,!1)}):d(t,e)},v=function(t,e,n,r){var i=new u
return i.resolve(t),i.promise.then(e,n,r)},g=v,b=function(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}if(!C(t))throw f("norslvr","Expected resolverFn, got '{0}'",t)
var r=new u
return t(e,n),r.promise}
return b.prototype=i.prototype,b.defer=h,b.reject=p,b.when=v,b.resolve=g,b.all=l,b}function wn(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t)
return function(){r(e)}}:function(t){var n=e(t,16.66,!1)
return function(){e.cancel(n)}}
return o.supported=i,o}]}function xn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=a(),this.$$ChildScope=null}return e.prototype=t,e}var i=10,o=e("$rootScope"),s=null,u=null
this.digestTtl=function(t){return arguments.length&&(i=t),i},this.$get=["$exceptionHandler","$parse","$browser",function(e,c,l){function f(t){t.currentScope.$$destroyed=!0}function h(t){9===Ir&&(t.$$childHead&&h(t.$$childHead),t.$$nextSibling&&h(t.$$nextSibling)),t.$parent=t.$$nextSibling=t.$$prevSibling=t.$$childHead=t.$$childTail=t.$root=t.$$watchers=null}function d(){this.$id=a(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function $(t){if(E.$$phase)throw o("inprog","{0} already in progress",E.$$phase)
E.$$phase=t}function v(){E.$$phase=null}function g(t,e){do t.$$watchersCount+=e
while(t=t.$parent)}function b(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n]
while(t=t.$parent)}function w(){}function x(){for(;O.length;)try{O.shift()()}catch(t){e(t)}u=null}function S(){null===u&&(u=l.defer(function(){E.$apply(x)}))}d.prototype={constructor:d,$new:function(e,n){var r
return n=n||this,e?(r=new d,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!=this)&&r.$on("$destroy",f),r},$watch:function(t,e,n,r){var i=c(t)
if(i.$$watchDelegate)return i.$$watchDelegate(this,e,n,i,t)
var o=this,a=o.$$watchers,u={fn:e,last:w,get:i,exp:r||t,eq:!!n}
return s=null,C(e)||(u.fn=p),a||(a=o.$$watchers=[]),a.unshift(u),g(this,1),function(){R(a,u)>=0&&g(o,-1),s=null}},$watchGroup:function(t,e){function n(){u=!1,c?(c=!1,e(o,o,s)):e(o,i,s)}var i=new Array(t.length),o=new Array(t.length),a=[],s=this,u=!1,c=!0
if(!t.length){var l=!0
return s.$evalAsync(function(){l&&e(o,o,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,r){o[0]=t,i[0]=n,e(o,t===n?o:i,r)}):(r(t,function(t,e){var r=s.$watch(t,function(t,r){o[e]=t,i[e]=r,u||(u=!0,s.$evalAsync(n))})
a.push(r)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function r(t){o=t
var e,r,i,s,u
if(!m(o)){if(y(o))if(n(o)){a!==p&&(a=p,v=a.length=0,f++),e=o.length,v!==e&&(f++,a.length=v=e)
for(var c=0;e>c;c++)u=a[c],s=o[c],i=u!==u&&s!==s,i||u===s||(f++,a[c]=s)}else{a!==d&&(a=d={},v=0,f++),e=0
for(r in o)Mr.call(o,r)&&(e++,s=o[r],u=a[r],r in a?(i=u!==u&&s!==s,i||u===s||(f++,a[r]=s)):(v++,a[r]=s,f++))
if(v>e){f++
for(r in a)Mr.call(o,r)||(v--,delete a[r])}}else a!==o&&(a=o,f++)
return f}}function i(){if($?($=!1,e(o,o,u)):e(o,s,u),l)if(y(o))if(n(o)){s=new Array(o.length)
for(var t=0;t<o.length;t++)s[t]=o[t]}else{s={}
for(var r in o)Mr.call(o,r)&&(s[r]=o[r])}else s=o}r.$stateful=!0
var o,a,s,u=this,l=e.length>1,f=0,h=c(t,r),p=[],d={},$=!0,v=0
return this.$watch(h,i)},$digest:function(){var t,n,r,a,c,f,h,p,d,m,g,y,b=i,S=this,O=[]
$("$digest"),l.$$checkUrlChange(),this===E&&null!==u&&(l.defer.cancel(u),x()),s=null
do{for(p=!1,m=S;A.length;){try{y=A.shift(),y.scope.$eval(y.expression,y.locals)}catch(M){e(M)}s=null}t:do{if(f=m.$$watchers)for(h=f.length;h--;)try{if(t=f[h])if(c=t.get,(n=c(m))===(r=t.last)||(t.eq?U(n,r):"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))){if(t===s){p=!1
break t}}else p=!0,s=t,t.last=t.eq?F(n,null):n,a=t.fn,a(n,r===w?n:r,m),5>b&&(g=4-b,O[g]||(O[g]=[]),O[g].push({msg:C(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:n,oldVal:r}))}catch(M){e(M)}if(!(d=m.$$watchersCount&&m.$$childHead||m!==S&&m.$$nextSibling))for(;m!==S&&!(d=m.$$nextSibling);)m=m.$parent}while(m=d)
if((p||A.length)&&!b--)throw v(),o("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",i,O)}while(p||A.length)
for(v();k.length;)try{k.shift()()}catch(M){e(M)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent
this.$broadcast("$destroy"),this.$$destroyed=!0,this===E&&l.$$applicationDestroyed(),g(this,-this.$$watchersCount)
for(var e in this.$$listenerCount)b(this,this.$$listenerCount[e],e)
t&&t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=p,this.$on=this.$watch=this.$watchGroup=function(){return p},this.$$listeners={},this.$$nextSibling=null,h(this)}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){E.$$phase||A.length||l.defer(function(){A.length&&E.$digest()}),A.push({scope:this,expression:c(t),locals:e})},$$postDigest:function(t){k.push(t)},$apply:function(t){try{$("$apply")
try{return this.$eval(t)}finally{v()}}catch(n){e(n)}finally{try{E.$digest()}catch(n){throw e(n),n}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this
t&&O.push(e),t=c(t),S()},$on:function(t,e){var n=this.$$listeners[t]
n||(this.$$listeners[t]=n=[]),n.push(e)
var r=this
do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++
while(r=r.$parent)
var i=this
return function(){var r=n.indexOf(e);-1!==r&&(n[r]=null,b(i,1,t))}},$emit:function(t,n){var r,i,o,a=[],s=this,u=!1,c={name:t,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=L([c],arguments,1)
do{for(r=s.$$listeners[t]||a,c.currentScope=s,i=0,o=r.length;o>i;i++)if(r[i])try{r[i].apply(null,l)}catch(f){e(f)}else r.splice(i,1),i--,o--
if(u)return c.currentScope=null,c
s=s.$parent}while(s)
return c.currentScope=null,c},$broadcast:function(t,n){var r=this,i=r,o=r,a={name:t,targetScope:r,preventDefault:function(){a.defaultPrevented=!0},defaultPrevented:!1}
if(!r.$$listenerCount[t])return a
for(var s,u,c,l=L([a],arguments,1);i=o;){for(a.currentScope=i,s=i.$$listeners[t]||[],u=0,c=s.length;c>u;u++)if(s[u])try{s[u].apply(null,l)}catch(f){e(f)}else s.splice(u,1),u--,c--
if(!(o=i.$$listenerCount[t]&&i.$$childHead||i!==r&&i.$$nextSibling))for(;i!==r&&!(o=i.$$nextSibling);)i=i.$parent}return a.currentScope=null,a}}
var E=new d,A=E.$$asyncQueue=[],k=E.$$postDigestQueue=[],O=E.$$applyAsyncQueue=[]
return E}]}function Sn(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationWhitelist=function(e){return g(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t
return i=Vn(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function Cn(t){if("self"===t)return t
if(w(t)){if(t.indexOf("***")>-1)throw go("iwcard","Illegal sequence *** in string matcher.  String: {0}",t)
return t=Yr(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(E(t))return new RegExp("^"+t.source+"$")
throw go("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function En(t){var e=[]
return g(t)&&r(t,function(t){e.push(Cn(t))}),e}function An(){this.SCE_CONTEXTS=yo
var t=["self"],e=[]
this.resourceUrlWhitelist=function(e){return arguments.length&&(t=En(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=En(t)),e},this.$get=["$injector",function(n){function r(t,e){return"self"===t?jn(e):!!t.exec(e.href)}function i(n){var i,o,a=Vn(n.toString()),s=!1
for(i=0,o=t.length;o>i;i++)if(r(t[i],a)){s=!0
break}if(s)for(i=0,o=e.length;o>i;i++)if(r(e[i],a)){s=!1
break}return s}function o(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}}
return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function a(t,e){var n=f.hasOwnProperty(t)?f[t]:null
if(!n)throw go("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e)
if(null===e||m(e)||""===e)return e
if("string"!=typeof e)throw go("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t)
return new n(e)}function s(t){return t instanceof l?t.$$unwrapTrustedValue():t}function u(t,e){if(null===e||m(e)||""===e)return e
var n=f.hasOwnProperty(t)?f[t]:null
if(n&&e instanceof n)return e.$$unwrapTrustedValue()
if(t===yo.RESOURCE_URL){if(i(e))return e
throw go("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===yo.HTML)return c(e)
throw go("unsafe","Attempting to use an unsafe value in a safe context.")}var c=function(t){throw go("unsafe","Attempting to use an unsafe value in a safe context.")}
n.has("$sanitize")&&(c=n.get("$sanitize"))
var l=o(),f={}
return f[yo.HTML]=o(l),f[yo.CSS]=o(l),f[yo.URL]=o(l),f[yo.JS]=o(l),f[yo.RESOURCE_URL]=o(f[yo.URL]),{trustAs:a,getTrusted:u,valueOf:s}}]}function kn(){var t=!0
this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>Ir)throw go("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
var i=q(yo)
i.isEnabled=function(){return t},i.trustAs=n.trustAs,i.getTrusted=n.getTrusted,i.valueOf=n.valueOf,t||(i.trustAs=i.getTrusted=function(t,e){return e},i.valueOf=d),i.parseAs=function(t,n){var r=e(n)
return r.literal&&r.constant?r:e(n,function(e){return i.getTrusted(t,e)})}
var o=i.parseAs,a=i.getTrusted,s=i.trustAs
return r(yo,function(t,e){var n=Tr(e)
i[wt("parse_as_"+n)]=function(e){return o(t,e)},i[wt("get_trusted_"+n)]=function(e){return a(t,e)},i[wt("trust_as_"+n)]=function(e){return s(t,e)}}),i}]}function On(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=t.chrome&&t.chrome.app&&t.chrome.app.runtime,a=!o&&t.history&&t.history.pushState,s=f((/android (\d+)/.exec(Tr((t.navigator||{}).userAgent))||[])[1]),u=/Boxee/i.test((t.navigator||{}).userAgent),c=e[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,h=c.body&&c.body.style,p=!1,d=!1
if(h){for(var $ in h)if(r=l.exec($)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1)
break}n||(n="WebkitOpacity"in h&&"webkit"),p=!!("transition"in h||n+"Transition"in h),d=!!("animation"in h||n+"Animation"in h),!s||p&&d||(p=w(h.webkitTransition),d=w(h.webkitAnimation))}return{history:!(!a||4>s||u),hasEvent:function(t){if("input"===t&&11>=Ir)return!1
if(m(i[t])){var e=c.createElement("div")
i[t]="on"+t in e}return i[t]},csp:Zr(),vendorPrefix:n,transitions:p,animations:d,android:s}}]}function Mn(){var t
this.httpOptions=function(e){return e?(t=e,this):t},this.$get=["$templateCache","$http","$q","$sce",function(e,n,r,i){function o(a,s){function u(t){if(!s)throw bo("tpload","Failed to load template: {0} (HTTP status: {1} {2})",a,t.status,t.statusText)
return r.reject(t)}o.totalPendingRequests++,w(a)&&e.get(a)||(a=i.getTrustedResourceUrl(a))
var l=n.defaults&&n.defaults.transformResponse
return Wr(l)?l=l.filter(function(t){return t!==Ee}):l===Ee&&(l=null),n.get(a,c({cache:e,transformResponse:l},t))["finally"](function(){o.totalPendingRequests--}).then(function(t){return e.put(a,t.data),t.data},u)}return o.totalPendingRequests=0,o}]}function Tn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var i={}
return i.findBindings=function(t,e,n){var i=t.getElementsByClassName("ng-binding"),o=[]
return r(i,function(t){var i=Br.element(t).data("$binding")
i&&r(i,function(r){if(n){var i=new RegExp("(^|\\s)"+Yr(e)+"(\\s|\\||$)")
i.test(r)&&o.push(t)}else-1!=r.indexOf(e)&&o.push(t)})}),o},i.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',s=t.querySelectorAll(a)
if(s.length)return s}},i.getLocation=function(){return n.url()},i.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},i.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},i}]}function Nn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){C(o)||(u=s,s=o,o=p)
var c,l=H(arguments,3),f=g(u)&&!u,h=(f?r:n).defer(),d=h.promise
return c=e.defer(function(){try{h.resolve(o.apply(null,l))}catch(e){h.reject(e),i(e)}finally{delete a[d.$$timeoutId]}f||t.$apply()},s),d.$$timeoutId=c,a[c]=h,d}var a={}
return o.cancel=function(t){return t&&t.$$timeoutId in a?(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},o}]}function Vn(t){var e=t
return Ir&&(wo.setAttribute("href",e),e=wo.href),wo.setAttribute("href",e),{href:wo.href,protocol:wo.protocol?wo.protocol.replace(/:$/,""):"",host:wo.host,search:wo.search?wo.search.replace(/^\?/,""):"",hash:wo.hash?wo.hash.replace(/^#/,""):"",hostname:wo.hostname,port:wo.port,pathname:"/"===wo.pathname.charAt(0)?wo.pathname:"/"+wo.pathname}}function jn(t){var e=w(t)?Vn(t):t
return e.protocol===xo.protocol&&e.host===xo.host}function In(){this.$get=$(t)}function Dn(t){function e(t){try{return decodeURIComponent(t)}catch(e){return t}}var n=t[0]||{},r={},i=""
return function(){var t,o,a,s,u,c=n.cookie||""
if(c!==i)for(i=c,t=i.split("; "),r={},a=0;a<t.length;a++)o=t[a],s=o.indexOf("="),s>0&&(u=e(o.substring(0,s)),m(r[u])&&(r[u]=e(o.substring(s+1))))
return r}}function Pn(){this.$get=Dn}function _n(t){function e(i,o){if(y(i)){var a={}
return r(i,function(t,n){a[n]=e(n,t)}),a}return t.factory(i+n,o)}var n="Filter"
this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",Ln),e("date",rr),e("filter",Rn),e("json",ir),e("limitTo",or),e("lowercase",Mo),e("number",Hn),e("orderBy",ar),e("uppercase",To)}function Rn(){return function(t,r,i){if(!n(t)){if(null==t)return t
throw e("filter")("notarray","Expected array but received: {0}",t)}var o,a,s=Un(r)
switch(s){case"function":o=r
break
case"boolean":case"null":case"number":case"string":a=!0
case"object":o=Fn(r,i,a)
break
default:return t}return Array.prototype.filter.call(t,o)}}function Fn(t,e,n){var r,i=y(t)&&"$"in t
return e===!0?e=U:C(e)||(e=function(t,e){return m(t)?!1:null===t||null===e?t===e:y(e)||y(t)&&!v(t)?!1:(t=Tr(""+t),e=Tr(""+e),-1!==t.indexOf(e))}),r=function(r){return i&&!y(r)?qn(r,t.$,e,!1):qn(r,t,e,n)}}function qn(t,e,n,r,i){var o=Un(t),a=Un(e)
if("string"===a&&"!"===e.charAt(0))return!qn(t,e.substring(1),n,r)
if(Wr(t))return t.some(function(t){return qn(t,e,n,r)})
switch(o){case"object":var s
if(r){for(s in t)if("$"!==s.charAt(0)&&qn(t[s],e,n,!0))return!0
return i?!1:qn(t,e,n,!1)}if("object"===a){for(s in e){var u=e[s]
if(!C(u)&&!m(u)){var c="$"===s,l=c?t:t[s]
if(!qn(l,u,n,c,c))return!1}}return!0}return n(t,e)
case"function":return!1
default:return n(t,e)}}function Un(t){return null===t?"null":typeof t}function Ln(t){var e=t.NUMBER_FORMATS
return function(t,n,r){return m(n)&&(n=e.CURRENCY_SYM),m(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:Wn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function Hn(t){var e=t.NUMBER_FORMATS
return function(t,n){return null==t?t:Wn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Bn(t){var e,n,r,i,o,a=0
for((n=t.indexOf(Co))>-1&&(t=t.replace(Co,"")),(r=t.search(/e/i))>0?(0>n&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):0>n&&(n=t.length),r=0;t.charAt(r)==Eo;r++);if(r==(o=t.length))e=[0],n=1
else{for(o--;t.charAt(o)==Eo;)o--
for(n-=r,e=[],i=0;o>=r;r++,i++)e[i]=+t.charAt(r)}return n>So&&(e=e.splice(0,So-1),a=n-1,n=1),{d:e,e:a,i:n}}function zn(t,e,n,r){var i=t.d,o=i.length-t.i
e=m(e)?Math.min(Math.max(n,o),r):+e
var a=e+t.i,s=i[a]
if(a>0){i.splice(Math.max(t.i,a))
for(var u=a;u<i.length;u++)i[u]=0}else{o=Math.max(0,o),t.i=1,i.length=Math.max(1,a=e+1),i[0]=0
for(var c=1;a>c;c++)i[c]=0}if(s>=5)if(0>a-1){for(var l=0;l>a;l--)i.unshift(0),t.i++
i.unshift(1),t.i++}else i[a-1]++
for(;o<Math.max(0,e);o++)i.push(0)
var f=i.reduceRight(function(t,e,n,r){return e+=t,r[n]=e%10,Math.floor(e/10)},0)
f&&(i.unshift(f),t.i++)}function Wn(t,e,n,r,i){if(!w(t)&&!x(t)||isNaN(t))return""
var o,a=!isFinite(t),s=!1,u=Math.abs(t)+"",c=""
if(a)c="∞"
else{o=Bn(u),zn(o,i,e.minFrac,e.maxFrac)
var l=o.d,f=o.i,h=o.e,p=[]
for(s=l.reduce(function(t,e){return t&&!e},!0);0>f;)l.unshift(0),f++
f>0?p=l.splice(f):(p=l,l=[0])
var d=[]
for(l.length>=e.lgSize&&d.unshift(l.splice(-e.lgSize).join(""));l.length>e.gSize;)d.unshift(l.splice(-e.gSize).join(""))
l.length&&d.unshift(l.join("")),c=d.join(n),p.length&&(c+=r+p.join("")),h&&(c+="e+"+h)}return 0>t&&!s?e.negPre+c+e.negSuf:e.posPre+c+e.posSuf}function Gn(t,e,n,r){var i=""
for((0>t||r&&0>=t)&&(r?t=-t+1:(t=-t,i="-")),t=""+t;t.length<e;)t=Eo+t
return n&&(t=t.substr(t.length-e)),i+t}function Jn(t,e,n,r,i){return n=n||0,function(o){var a=o["get"+t]()
return(n>0||a>-n)&&(a+=n),0===a&&-12==n&&(a=12),Gn(a,e,r,i)}}function Yn(t,e,n){return function(r,i){var o=r["get"+t](),a=(n?"STANDALONE":"")+(e?"SHORT":""),s=Nr(a+t)
return i[s][o]}}function Zn(t,e,n){var r=-1*n,i=r>=0?"+":""
return i+=Gn(Math[r>0?"floor":"ceil"](r/60),2)+Gn(Math.abs(r%60),2)}function Kn(t){var e=new Date(t,0,1).getDay()
return new Date(t,0,(4>=e?5:12)-e)}function Xn(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function Qn(t){return function(e){var n=Kn(e.getFullYear()),r=Xn(e),i=+r-+n,o=1+Math.round(i/6048e5)
return Gn(o,t)}}function tr(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function er(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function nr(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function rr(t){function e(t){var e
if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours
e[9]&&(i=f(e[9]+e[10]),o=f(e[9]+e[11])),a.call(r,f(e[1]),f(e[2])-1,f(e[3]))
var u=f(e[4]||0)-i,c=f(e[5]||0)-o,l=f(e[6]||0),h=Math.round(1e3*parseFloat("0."+(e[7]||0)))
return s.call(r,u,c,l,h),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,i,o){var a,s,u="",c=[]
if(i=i||"mediumDate",i=t.DATETIME_FORMATS[i]||i,w(n)&&(n=Oo.test(n)?f(n):e(n)),x(n)&&(n=new Date(n)),!S(n)||!isFinite(n.getTime()))return n
for(;i;)s=ko.exec(i),s?(c=L(c,s,1),i=c.pop()):(c.push(i),i=null)
var l=n.getTimezoneOffset()
return o&&(l=J(o,l),n=Z(n,o,!0)),r(c,function(e){a=Ao[e],u+=a?a(n,t.DATETIME_FORMATS,l):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function ir(){return function(t,e){return m(e)&&(e=2),W(t,e)}}function or(){return function(t,e,n){return e=Math.abs(Number(e))===1/0?Number(e):f(e),isNaN(e)?t:(x(t)&&(t=t.toString()),Wr(t)||w(t)?(n=!n||isNaN(n)?0:f(n),n=0>n?Math.max(0,t.length+n):n,e>=0?t.slice(n,n+e):0===n?t.slice(e,t.length):t.slice(Math.max(0,n+e),n)):t)}}function ar(t){function r(e,n){return n=n?-1:1,e.map(function(e){var r=1,i=d
if(C(e))i=e
else if(w(e)&&(("+"==e.charAt(0)||"-"==e.charAt(0))&&(r="-"==e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(i=t(e),i.constant))){var o=i()
i=function(t){return t[o]}}return{get:i,descending:r*n}})}function i(t){switch(typeof t){case"number":case"boolean":case"string":return!0
default:return!1}}function o(t,e){return"function"==typeof t.valueOf&&(t=t.valueOf(),i(t))?t:v(t)&&(t=t.toString(),i(t))?t:e}function a(t,e){var n=typeof t
return null===t?(n="string",t="null"):"string"===n?t=t.toLowerCase():"object"===n&&(t=o(t,e)),{value:t,type:n}}function s(t,e){var n=0
return t.type===e.type?t.value!==e.value&&(n=t.value<e.value?-1:1):n=t.type<e.type?-1:1,n}return function(t,i,o){function u(t,e){return{value:t,predicateValues:l.map(function(n){return a(n.get(t),e)})}}function c(t,e){for(var n=0,r=0,i=l.length;i>r&&!(n=s(t.predicateValues[r],e.predicateValues[r])*l[r].descending);++r);return n}if(null==t)return t
if(!n(t))throw e("orderBy")("notarray","Expected array but received: {0}",t)
Wr(i)||(i=[i]),0===i.length&&(i=["+"])
var l=r(i,o)
l.push({get:function(){return{}},descending:o?-1:1})
var f=Array.prototype.map.call(t,u)
return f.sort(c),t=f.map(function(t){return t.value})}}function sr(t){return C(t)&&(t={link:t}),t.restrict=t.restrict||"AC",$(t)}function ur(t,e){t.$name=e}function cr(t,e,n,i,o){var a=this,s=[]
a.$error={},a.$$success={},a.$pending=void 0,a.$name=o(e.name||e.ngForm||"")(n),a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,a.$submitted=!1,a.$$parentForm=jo,a.$rollbackViewValue=function(){r(s,function(t){t.$rollbackViewValue()})},a.$commitViewValue=function(){r(s,function(t){t.$commitViewValue()})},a.$addControl=function(t){ht(t.$name,"input"),s.push(t),t.$name&&(a[t.$name]=t),t.$$parentForm=a},a.$$renameControl=function(t,e){var n=t.$name
a[n]===t&&delete a[n],a[e]=t,t.$name=e},a.$removeControl=function(t){t.$name&&a[t.$name]===t&&delete a[t.$name],r(a.$pending,function(e,n){a.$setValidity(n,null,t)}),r(a.$error,function(e,n){a.$setValidity(n,null,t)}),r(a.$$success,function(e,n){a.$setValidity(n,null,t)}),R(s,t),t.$$parentForm=jo},Cr({ctrl:this,$element:t,set:function(t,e,n){var r=t[e]
if(r){var i=r.indexOf(n);-1===i&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e]
r&&(R(r,n),0===r.length&&delete t[e])},$animate:i}),a.$setDirty=function(){i.removeClass(t,ma),i.addClass(t,ga),a.$dirty=!0,a.$pristine=!1,a.$$parentForm.$setDirty()},a.$setPristine=function(){i.setClass(t,ma,ga+" "+Io),a.$dirty=!1,a.$pristine=!0,a.$submitted=!1,r(s,function(t){t.$setPristine()})},a.$setUntouched=function(){r(s,function(t){t.$setUntouched()})},a.$setSubmitted=function(){i.addClass(t,Io),a.$submitted=!0,a.$$parentForm.$setSubmitted()}}function lr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function fr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r)}function hr(t,e,n,r,i,o){var a=Tr(e[0].type)
if(!i.android){var s=!1
e.on("compositionstart",function(){s=!0}),e.on("compositionend",function(){s=!1,c()})}var u,c=function(t){if(u&&(o.defer.cancel(u),u=null),!s){var i=e.val(),c=t&&t.type
"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Jr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,c)}}
if(i.hasEvent("input"))e.on("input",c)
else{var l=function(t,e,n){u||(u=o.defer(function(){u=null,e&&e.value===n||c(t)}))}
e.on("keydown",function(t){var e=t.keyCode
91===e||e>15&&19>e||e>=37&&40>=e||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut",l)}e.on("change",c),Jo[a]&&r.$$hasNativeValidators&&a===n.type&&e.on(Go,function(t){if(!u){var e=this[Or],n=e.badInput,r=e.typeMismatch
u=o.defer(function(){u=null,(e.badInput!==n||e.typeMismatch!==r)&&c(t)})}}),r.$render=function(){var t=r.$isEmpty(r.$viewValue)?"":r.$viewValue
e.val()!==t&&e.val(t)}}function pr(t,e){if(S(t))return t
if(w(t)){Bo.lastIndex=0
var n=Bo.exec(t)
if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=Kn(r),l=7*(i-1)
return e&&(o=e.getHours(),a=e.getMinutes(),s=e.getSeconds(),u=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN}function dr(t,e){return function(n,i){var o,a
if(S(n))return n
if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Ro.test(n))return new Date(n)
if(t.lastIndex=0,o=t.exec(n))return o.shift(),a=i?{yyyy:i.getFullYear(),MM:i.getMonth()+1,dd:i.getDate(),HH:i.getHours(),mm:i.getMinutes(),ss:i.getSeconds(),sss:i.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(o,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function $r(t,e,n,r){return function(i,o,a,s,u,c,l){function f(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function h(t){return g(t)&&!S(t)?n(t)||void 0:t}vr(i,o,a,s),hr(i,o,a,s,u,c)
var p,d=s&&s.$options&&s.$options.timezone
if(s.$$parserName=t,s.$parsers.push(function(t){if(s.$isEmpty(t))return null
if(e.test(t)){var r=n(t,p)
return d&&(r=Z(r,d)),r}}),s.$formatters.push(function(t){if(t&&!S(t))throw Ca("datefmt","Expected `{0}` to be a date",t)
return f(t)?(p=t,p&&d&&(p=Z(p,d,!0)),l("date")(t,r,d)):(p=null,"")}),g(a.min)||a.ngMin){var $
s.$validators.min=function(t){return!f(t)||m($)||n(t)>=$},a.$observe("min",function(t){$=h(t),s.$validate()})}if(g(a.max)||a.ngMax){var v
s.$validators.max=function(t){return!f(t)||m(v)||n(t)<=v},a.$observe("max",function(t){v=h(t),s.$validate()})}}}function vr(t,e,n,r){var i=e[0],o=r.$$hasNativeValidators=y(i.validity)
o&&r.$parsers.push(function(t){var n=e.prop(Or)||{}
return n.badInput||n.typeMismatch?void 0:t})}function mr(t,e,n,r,i,o){if(vr(t,e,n,r),hr(t,e,n,r,i,o),r.$$parserName="number",r.$parsers.push(function(t){return r.$isEmpty(t)?null:Uo.test(t)?parseFloat(t):void 0}),r.$formatters.push(function(t){if(!r.$isEmpty(t)){if(!x(t))throw Ca("numfmt","Expected `{0}` to be a number",t)
t=t.toString()}return t}),g(n.min)||n.ngMin){var a
r.$validators.min=function(t){return r.$isEmpty(t)||m(a)||t>=a},n.$observe("min",function(t){g(t)&&!x(t)&&(t=parseFloat(t,10)),a=x(t)&&!isNaN(t)?t:void 0,r.$validate()})}if(g(n.max)||n.ngMax){var s
r.$validators.max=function(t){return r.$isEmpty(t)||m(s)||s>=t},n.$observe("max",function(t){g(t)&&!x(t)&&(t=parseFloat(t,10)),s=x(t)&&!isNaN(t)?t:void 0,r.$validate()})}}function gr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e
return r.$isEmpty(n)||Fo.test(n)}}function yr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e
return r.$isEmpty(n)||qo.test(n)}}function br(t,e,n,r){m(n.name)&&e.attr("name",a())
var i=function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)}
e.on("click",i),r.$render=function(){var t=n.value
e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function wr(t,e,n,r,i){var o
if(g(r)){if(o=t(r),!o.constant)throw Ca("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r)
return o(e)}return i}function xr(t,e,n,r,i,o,a,s){var u=wr(s,t,"ngTrueValue",n.ngTrueValue,!0),c=wr(s,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)}
e.on("click",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return U(t,u)}),r.$parsers.push(function(t){return t?u:c})}function Sr(t,e){return t="ngClass"+t,["$animate",function(n){function i(t,e){var n=[]
t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t
n.push(i)}return n}function o(t){var e=[]
return Wr(t)?(r(t,function(t){e=e.concat(o(t))}),e):w(t)?t.split(" "):y(t)?(r(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e):t}return{restrict:"AC",link:function(a,s,u){function c(t){var e=f(t,1)
u.$addClass(e)}function l(t){var e=f(t,-1)
u.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||$t(),i=[]
return r(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&i.push(t))}),s.data("$classCounts",n),i.join(" ")}function h(t,e){var r=i(e,t),o=i(t,e)
r=f(r,1),o=f(o,-1),r&&r.length&&n.addClass(s,r),o&&o.length&&n.removeClass(s,o)}function p(t){if(e===!0||a.$index%2===e){var n=o(t||[])
if(d){if(!U(t,d)){var r=o(d)
h(r,n)}}else c(n)}d=Wr(t)?t.map(function(t){return q(t)}):q(t)}var d
a.$watch(u[t],p,!0),u.$observe("class",function(e){p(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var i=1&n
if(i!==(1&r)){var s=o(a.$eval(u[t]))
i===e?c(s):l(s)}})}}}]}function Cr(t){function e(t,e,s){m(e)?n("$pending",t,s):r("$pending",t,s),N(e)?e?(l(a.$error,t,s),c(a.$$success,t,s)):(c(a.$error,t,s),l(a.$$success,t,s)):(l(a.$error,t,s),l(a.$$success,t,s)),a.$pending?(i(wa,!0),a.$valid=a.$invalid=void 0,o("",null)):(i(wa,!1),a.$valid=Er(a.$error),a.$invalid=!a.$valid,o("",a.$valid))
var u
u=a.$pending&&a.$pending[t]?void 0:a.$error[t]?!1:a.$$success[t]?!0:null,o(t,u),a.$$parentForm.$setValidity(t,u,a)}function n(t,e,n){a[t]||(a[t]={}),c(a[t],e,n)}function r(t,e,n){a[t]&&l(a[t],e,n),Er(a[t])&&(a[t]=void 0)}function i(t,e){e&&!u[t]?(f.addClass(s,t),u[t]=!0):!e&&u[t]&&(f.removeClass(s,t),u[t]=!1)}function o(t,e){t=t?"-"+ut(t,"-"):"",i($a+t,e===!0),i(va+t,e===!1)}var a=t.ctrl,s=t.$element,u={},c=t.set,l=t.unset,f=t.$animate
u[va]=!(u[$a]=s.hasClass($a)),a.$setValidity=e}function Er(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1
return!0}function Ar(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)}var kr=/^\/(.+)\/([a-z]*)$/,Or="validity",Mr=Object.prototype.hasOwnProperty,Tr=function(t){return w(t)?t.toLowerCase():t},Nr=function(t){return w(t)?t.toUpperCase():t},Vr=function(t){return w(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},jr=function(t){return w(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t}
"i"!=="I".toLowerCase()&&(Tr=Vr,Nr=jr)
var Ir,Dr,Pr,_r,Rr=[].slice,Fr=[].splice,qr=[].push,Ur=Object.prototype.toString,Lr=Object.getPrototypeOf,Hr=e("ng"),Br=t.angular||(t.angular={}),zr=0
Ir=t.document.documentMode,p.$inject=[],d.$inject=[]
var Wr=Array.isArray,Gr=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,Jr=function(t){return w(t)?t.trim():t},Yr=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Zr=function(){function e(){try{return new Function(""),!1}catch(t){return!0}}if(!g(Zr.rules)){var n=t.document.querySelector("[ng-csp]")||t.document.querySelector("[data-ng-csp]")
if(n){var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp")
Zr.rules={noUnsafeEval:!r||-1!==r.indexOf("no-unsafe-eval"),noInlineStyle:!r||-1!==r.indexOf("no-inline-style")}}else Zr.rules={noUnsafeEval:e(),noInlineStyle:!1}}return Zr.rules},Kr=function(){if(g(Kr.name_))return Kr.name_
var e,n,r,i,o=Qr.length
for(n=0;o>n;++n)if(r=Qr[n],e=t.document.querySelector("["+r.replace(":","\\:")+"jq]")){i=e.getAttribute(r+"jq")
break}return Kr.name_=i},Xr=/:/g,Qr=["ng-","data-ng-","ng:","x-ng-"],ti=/[A-Z]/g,ei=!1,ni=1,ri=2,ii=3,oi=8,ai=9,si=11,ui={full:"1.5.5",major:1,minor:5,dot:5,codeName:"material-conspiration"}
Mt.expando="ng339"
var ci=Mt.cache={},li=1,fi=function(t,e,n){t.addEventListener(e,n,!1)},hi=function(t,e,n){t.removeEventListener(e,n,!1)}
Mt._data=function(t){return this.cache[t[this.expando]]||{}}
var pi=/([\:\-\_]+(.))/g,di=/^moz([A-Z])/,$i={mouseleave:"mouseout",mouseenter:"mouseover"},vi=e("jqLite"),mi=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,gi=/<|&#?\w+;/,yi=/<([\w:-]+)/,bi=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wi={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
wi.optgroup=wi.option,wi.tbody=wi.tfoot=wi.colgroup=wi.caption=wi.thead,wi.th=wi.td
var xi=t.Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))},Si=Mt.prototype={ready:function(e){function n(){r||(r=!0,e())}var r=!1
"complete"===t.document.readyState?t.setTimeout(n):(this.on("DOMContentLoaded",n),Mt(t).on("load",n))},toString:function(){var t=[]
return r(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return Dr(t>=0?this[t]:this[this.length+t])},length:0,push:qr,sort:[].sort,splice:[].splice},Ci={}
r("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){Ci[Tr(t)]=t})
var Ei={}
r("input,select,option,textarea,button,form,details".split(","),function(t){Ei[t]=!0})
var Ai={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"}
r({data:Dt,removeData:jt,hasData:Ct,cleanData:Et},function(t,e){Mt[e]=t}),r({data:Dt,inheritedData:Ut,scope:function(t){return Dr.data(t,"$scope")||Ut(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return Dr.data(t,"$isolateScope")||Dr.data(t,"$isolateScopeNoTemplate")},controller:qt,injector:function(t){return Ut(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:Pt,css:function(t,e,n){return e=wt(e),g(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,n){var r=t.nodeType
if(r!==ii&&r!==ri&&r!==oi){var i=Tr(e)
if(Ci[i]){if(!g(n))return t[e]||(t.attributes.getNamedItem(e)||p).specified?i:void 0
n?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if(g(n))t.setAttribute(e,n)
else if(t.getAttribute){var o=t.getAttribute(e,2)
return null===o?void 0:o}}},prop:function(t,e,n){return g(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(m(e)){var n=t.nodeType
return n===ni||n===ii?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(m(e)){if(t.multiple&&"select"===_(t)){var n=[]
return r(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return m(e)?t.innerHTML:(Nt(t,!0),void(t.innerHTML=e))},empty:Lt},function(t,e){Mt.prototype[e]=function(e,n){var r,i,o=this.length
if(t!==Lt&&m(2==t.length&&t!==Pt&&t!==qt?e:n)){if(y(e)){for(r=0;o>r;r++)if(t===Dt)t(this[r],e)
else for(i in e)t(this[r],i,e[i])
return this}for(var a=t.$dv,s=m(a)?Math.min(o,1):o,u=0;s>u;u++){var c=t(this[u],e,n)
a=a?a+c:c}return a}for(r=0;o>r;r++)t(this[r],e,n)
return this}}),r({removeData:jt,on:function(t,e,n,r){if(g(r))throw vi("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if(St(t)){var i=It(t,!0),o=i.events,a=i.handle
a||(a=i.handle=Gt(t,o))
for(var s=e.indexOf(" ")>=0?e.split(" "):[e],u=s.length,c=function(e,r,i){var s=o[e]
s||(s=o[e]=[],s.specialHandlerWrapper=r,"$destroy"===e||i||fi(t,e,a)),s.push(n)};u--;)e=s[u],$i[e]?(c($i[e],Yt),c(e,void 0,!0)):c(e)}},off:Vt,one:function(t,e,n){t=Dr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,i=t.parentNode
Nt(t),r(new Mt(e),function(e){n?i.insertBefore(e,n.nextSibling):i.replaceChild(e,t),n=e})},children:function(t){var e=[]
return r(t.childNodes,function(t){t.nodeType===ni&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType
if(n===ni||n===si){e=new Mt(e)
for(var r=0,i=e.length;i>r;r++){var o=e[r]
t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===ni){var n=t.firstChild
r(new Mt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){Ot(t,Dr(e).eq(0).clone()[0])},remove:Ht,detach:function(t){Ht(t,!0)},after:function(t,e){var n=t,r=t.parentNode
e=new Mt(e)
for(var i=0,o=e.length;o>i;i++){var a=e[i]
r.insertBefore(a,n.nextSibling),n=a}},addClass:Rt,removeClass:_t,toggleClass:function(t,e,n){e&&r(e.split(" "),function(e){var r=n
m(r)&&(r=!Pt(t,e)),(r?Rt:_t)(t,e)})},parent:function(t){var e=t.parentNode
return e&&e.nodeType!==si?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:Tt,triggerHandler:function(t,e,n){var i,o,a,s=e.type||e,u=It(t),l=u&&u.events,f=l&&l[s]
f&&(i={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:p,type:s,target:t},e.type&&(i=c(i,e)),o=q(f),a=n?[i].concat(n):[i],r(o,function(e){i.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){Mt.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;a>o;o++)m(i)?(i=t(this[o],e,n,r),g(i)&&(i=Dr(i))):Ft(i,t(this[o],e,n,r))
return g(i)?i:this},Mt.prototype.bind=Mt.prototype.on,Mt.prototype.unbind=Mt.prototype.off}),Xt.prototype={put:function(t,e){this[Kt(t,this.nextUid)]=e},get:function(t){return this[Kt(t,this.nextUid)]},remove:function(t){var e=this[t=Kt(t,this.nextUid)]
return delete this[t],e}}
var ki=[function(){this.$get=[function(){return Xt}]}],Oi=/^([^\(]+?)=>/,Mi=/^[^\(]*\(\s*([^\)]*)\)/m,Ti=/,/,Ni=/^\s*(_?)(\S+?)\1\s*$/,Vi=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,ji=e("$injector")
ne.$$annotate=ee
var Ii=e("$animate"),Di=1,Pi="ng-animate",_i=function(){this.$get=p},Ri=function(){var t=new Xt,e=[]
this.$get=["$$AnimateRunner","$rootScope",function(n,i){function o(t,e,n){var i=!1
return e&&(e=w(e)?e.split(" "):Wr(e)?e:[],r(e,function(e){e&&(i=!0,t[e]=n)})),i}function a(){r(e,function(e){var n=t.get(e)
if(n){var i=ae(e.attr("class")),o="",a=""
r(n,function(t,e){var n=!!i[e]
t!==n&&(t?o+=(o.length?" ":"")+e:a+=(a.length?" ":"")+e)}),r(e,function(t){o&&Rt(t,o),a&&_t(t,a)}),t.remove(e)}}),e.length=0}function s(n,r,s){var u=t.get(n)||{},c=o(u,r,!0),l=o(u,s,!1);(c||l)&&(t.put(n,u),e.push(n),1===e.length&&i.$$postDigest(a))}return{enabled:p,on:p,off:p,pin:p,push:function(t,e,r,i){i&&i(),r=r||{},r.from&&t.css(r.from),r.to&&t.css(r.to),(r.addClass||r.removeClass)&&s(t,r.addClass,r.removeClass)
var o=new n
return o.complete(),o}}}]},Fi=["$provide",function(t){var e=this
this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&"."!==n.charAt(0))throw Ii("notcsel","Expecting class selector starting with '.' got '{0}'.",n)
var i=n+"-animation"
e.$$registeredAnimations[n.substr(1)]=i,t.factory(i,r)},this.classNameFilter=function(t){if(1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null,this.$$classNameFilter)){var e=new RegExp("(\\s+|\\/)"+Pi+"(\\s+|\\/)")
if(e.test(this.$$classNameFilter.toString()))throw Ii("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',Pi)}return this.$$classNameFilter},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var r=oe(n)
!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.end&&t.end()},enter:function(n,r,i,o){return r=r&&Dr(r),i=i&&Dr(i),r=r||i.parent(),e(n,r,i),t.push(n,"enter",se(o))},move:function(n,r,i,o){return r=r&&Dr(r),i=i&&Dr(i),r=r||i.parent(),e(n,r,i),t.push(n,"move",se(o))},leave:function(e,n){return t.push(e,"leave",se(n),function(){e.remove()})},addClass:function(e,n,r){return r=se(r),r.addClass=ie(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return r=se(r),r.removeClass=ie(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return i=se(i),i.addClass=ie(i.addClass,n),i.removeClass=ie(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return o=se(o),o.from=o.from?c(o.from,n):n,o.to=o.to?c(o.to,r):r,i=i||"ng-inline-animate",o.tempClasses=ie(o.tempClasses,i),t.push(e,"animate",o)}}}]}],qi=function(){this.$get=["$$rAF",function(t){function e(e){n.push(e),n.length>1||t(function(){for(var t=0;t<n.length;t++)n[t]()
n=[]})}var n=[]
return function(){var t=!1
return e(function(){t=!0}),function(n){t?n():e(n)}}}]},Ui=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(t,e,n,i,o){function a(t){this.setHost(t)
var e=n(),r=function(t){o(t,0,!1)}
this._doneCallbacks=[],this._tick=function(t){var n=i[0]
n&&n.hidden?r(t):e(t)},this._state=0}var s=0,u=1,c=2
return a.chain=function(t,e){function n(){return r===t.length?void e(!0):void t[r](function(t){return t===!1?void e(!1):(r++,void n())})}var r=0
n()},a.all=function(t,e){function n(n){o=o&&n,++i===t.length&&e(o)}var i=0,o=!0
r(t,function(t){t.done(n)})},a.prototype={setHost:function(t){this.host=t||{}},done:function(t){this._state===c?t():this._doneCallbacks.push(t)},progress:p,getPromise:function(){if(!this.promise){var e=this
this.promise=t(function(t,n){e.done(function(e){e===!1?n():t()})})}return this.promise},then:function(t,e){return this.getPromise().then(t,e)},"catch":function(t){return this.getPromise()["catch"](t)},"finally":function(t){return this.getPromise()["finally"](t)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(t){var e=this
e._state===s&&(e._state=u,e._tick(function(){e._resolve(t)}))},_resolve:function(t){this._state!==c&&(r(this._doneCallbacks,function(e){e(t)}),this._doneCallbacks.length=0,this._state=c)}},a}]},Li=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(t,e,n){return function(e,r){function i(){return t(function(){o(),s||u.complete(),s=!0}),u}function o(){a.addClass&&(e.addClass(a.addClass),a.addClass=null),a.removeClass&&(e.removeClass(a.removeClass),a.removeClass=null),a.to&&(e.css(a.to),a.to=null)}var a=r||{}
a.$$prepared||(a=F(a)),a.cleanupStyles&&(a.from=a.to=null),a.from&&(e.css(a.from),a.from=null)
var s,u=new n
return{start:i,end:i}}}]},Hi=e("$compile"),Bi=new he
pe.$inject=["$provide","$$sanitizeUriProvider"],de.prototype.isFirstChange=function(){return this.previousValue===Bi}
var zi=/^((?:x|data)[\:\-_])/i,Wi=e("$controller"),Gi=/^(\S+)(\s+as\s+([\w$]+))?$/,Ji=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof Dr&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Yi="application/json",Zi={"Content-Type":Yi+";charset=utf-8"},Ki=/^\[|^\{(?!\{)/,Xi={"[":/]$/,"{":/}$/},Qi=/^\)\]\}',?\n/,to=e("$http"),eo=function(t){return function(){throw to("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",t)}},no=Br.$interpolateMinErr=e("$interpolate")
no.throwNoconcat=function(t){throw no("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",t)},no.interr=function(t,e){return no("interr","Can't interpolate: {0}\n{1}",t,e.toString())}
var ro=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,io={http:80,https:443,ftp:21},oo=e("$location"),ao={$$html5:!1,$$replace:!1,absUrl:Je("$$absUrl"),url:function(t){if(m(t))return this.$$url
var e=ro.exec(t)
return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Je("$$protocol"),host:Je("$$host"),port:Je("$$port"),path:Ye("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search
case 1:if(w(t)||x(t))t=t.toString(),this.$$search=Q(t)
else{if(!y(t))throw oo("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
t=F(t,{}),r(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break
default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Ye("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}}
r([Ge,We,ze],function(t){t.prototype=Object.create(ao),t.prototype.state=function(e){if(!arguments.length)return this.$$state
if(t!==ze||!this.$$html5)throw oo("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=m(e)?null:e,this}})
var so=e("$parse"),uo=Function.prototype.call,co=Function.prototype.apply,lo=Function.prototype.bind,fo=$t()
r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){fo[t]=!0})
var ho={n:"\n",f:"\f",r:"\r",t:"	",v:"\x0B","'":"'",'"':'"'},po=function(t){this.options=t}
po.prototype={constructor:po,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index)
if('"'===e||"'"===e)this.readString(e)
else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber()
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent()
else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++
else if(this.isWhitespace(e))this.index++
else{var n=e+this.peek(),r=n+this.peek(2),i=fo[e],o=fo[n],a=fo[r]
if(i||o||a){var s=a?r:o?n:e
this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){var e=t||1
return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||"\x0B"===t||" "===t},isIdentifierStart:function(t){return this.options.isIdentifierStart?this.options.isIdentifierStart(t,this.codePointAt(t)):this.isValidIdentifierStart(t)},isValidIdentifierStart:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isIdentifierContinue:function(t){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(t,this.codePointAt(t)):this.isValidIdentifierContinue(t)},isValidIdentifierContinue:function(t,e){return this.isValidIdentifierStart(t,e)||this.isNumber(t)},codePointAt:function(t){return 1===t.length?t.charCodeAt(0):(t.charCodeAt(0)<<10)+t.charCodeAt(1)-56613888},peekMultichar:function(){var t=this.text.charAt(this.index),e=this.peek()
if(!e)return t
var n=t.charCodeAt(0),r=e.charCodeAt(0)
return n>=55296&&56319>=n&&r>=56320&&57343>=r?t+e:t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index
var r=g(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n
throw so("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Tr(this.text.charAt(this.index))
if("."==n||this.isNumber(n))t+=n
else{var r=this.peek()
if("e"==n&&this.isExpOperator(r))t+=n
else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n
else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break
this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){var t=this.index
for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var e=this.peekMultichar()
if(!this.isIdentifierContinue(e))break
this.index+=e.length}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index
this.index++
for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index)
if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5)
a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=ho[o]
n+=s||o}i=!1}else if("\\"===o)i=!0
else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n})
n+=o}this.index++}this.throwError("Unterminated quote",e)}}
var $o=function(t,e){this.lexer=t,this.options=e}
$o.Program="Program",$o.ExpressionStatement="ExpressionStatement",$o.AssignmentExpression="AssignmentExpression",$o.ConditionalExpression="ConditionalExpression",$o.LogicalExpression="LogicalExpression",$o.BinaryExpression="BinaryExpression",$o.UnaryExpression="UnaryExpression",$o.CallExpression="CallExpression",$o.MemberExpression="MemberExpression",$o.Identifier="Identifier",$o.Literal="Literal",$o.ArrayExpression="ArrayExpression",$o.Property="Property",$o.ObjectExpression="ObjectExpression",$o.ThisExpression="ThisExpression",$o.LocalsExpression="LocalsExpression",$o.NGValueParameter="NGValueParameter",$o.prototype={ast:function(t){this.text=t,this.tokens=this.lexer.lex(t)
var e=this.program()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e},program:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:$o.Program,body:t}},expressionStatement:function(){return{type:$o.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e)
return e},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary()
return this.expect("=")&&(t={type:$o.AssignmentExpression,left:t,right:this.assignment(),operator:"="}),t},ternary:function(){var t,e,n=this.logicalOR()
return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:$o.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:$o.LogicalExpression,operator:"||",left:t,right:this.logicalAND()}
return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:$o.LogicalExpression,operator:"&&",left:t,right:this.equality()}
return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:$o.BinaryExpression,operator:t.text,left:e,right:this.relational()}
return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:$o.BinaryExpression,operator:t.text,left:e,right:this.additive()}
return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:$o.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()}
return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:$o.BinaryExpression,operator:t.text,left:e,right:this.unary()}
return e},unary:function(){var t
return(t=this.expect("+","-","!"))?{type:$o.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t
this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?t=F(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?t={type:$o.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek())
for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:$o.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:$o.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:$o.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE")
return t},filter:function(t){for(var e=[t],n={type:$o.CallExpression,callee:this.identifier(),arguments:e,filter:!0};this.expect(":");)e.push(this.expression())
return n},parseArguments:function(){var t=[]
if(")"!==this.peekToken().text)do t.push(this.expression())
while(this.expect(","))
return t},identifier:function(){var t=this.consume()
return t.identifier||this.throwError("is not a valid identifier",t),{type:$o.Identifier,name:t.text}},constant:function(){return{type:$o.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
t.push(this.expression())}while(this.expect(","))
return this.consume("]"),{type:$o.ArrayExpression,elements:t}},object:function(){var t,e=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
t={type:$o.Property,kind:"init"},this.peek().constant?t.key=this.constant():this.peek().identifier?t.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),t.value=this.expression(),e.push(t)}while(this.expect(","))
return this.consume("}"),{type:$o.ObjectExpression,properties:e}},throwError:function(t,e){throw so("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw so("ueoe","Unexpected end of expression: {0}",this.text)
var e=this.expect(t)
return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw so("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text
if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r)
return i?(this.tokens.shift(),i):!1},selfReferential:{"this":{type:$o.ThisExpression},$locals:{type:$o.LocalsExpression}}},pn.prototype={compile:function(t,e){var n=this,i=this.astBuilder.ast(t)
this.state={nextId:0,filters:{},expensiveChecks:e,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},sn(i,n.$filter)
var o,a=""
if(this.stage="assign",o=ln(i)){this.state.computing="assign"
var s=this.nextId()
this.recurse(o,s),this.return_(s),a="fn.assign="+this.generateFunction("assign","s,v,l")}var u=un(i.body)
n.stage="inputs",r(u,function(t,e){var r="fn"+e
n.state[r]={vars:[],body:[],own:{}},n.state.computing=r
var i=n.nextId()
n.recurse(t,i),n.return_(i),n.state.inputs.push(r),t.watchId=e}),this.state.computing="fn",this.stage="main",this.recurse(i)
var c='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+a+this.watchFns()+"return fn;",l=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",c)(this.$filter,Xe,tn,en,Qe,nn,rn,on,t)
return this.state=this.stage=void 0,l.literal=fn(i),l.constant=hn(i),l},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this
return r(e,function(e){t.push("var "+e+"="+n.generateFunction(e,"s"))}),e.length&&t.push("fn.inputs=["+e.join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this
return r(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,n,i,o,a){var s,u,c,l,f=this
if(i=i||p,!a&&g(t.watchId))return e=e||this.nextId(),void this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,n,i,o,!0))
switch(t.type){case $o.Program:r(t.body,function(e,n){f.recurse(e.expression,void 0,void 0,function(t){u=t}),n!==t.body.length-1?f.current().body.push(u,";"):f.return_(u)})
break
case $o.Literal:l=this.escape(t.value),this.assign(e,l),i(l)
break
case $o.UnaryExpression:this.recurse(t.argument,void 0,void 0,function(t){u=t}),l=t.operator+"("+this.ifDefined(u,0)+")",this.assign(e,l),i(l)
break
case $o.BinaryExpression:this.recurse(t.left,void 0,void 0,function(t){s=t}),this.recurse(t.right,void 0,void 0,function(t){u=t}),l="+"===t.operator?this.plus(s,u):"-"===t.operator?this.ifDefined(s,0)+t.operator+this.ifDefined(u,0):"("+s+")"+t.operator+"("+u+")",this.assign(e,l),i(l)
break
case $o.LogicalExpression:e=e||this.nextId(),f.recurse(t.left,e),f.if_("&&"===t.operator?e:f.not(e),f.lazyRecurse(t.right,e)),i(e)
break
case $o.ConditionalExpression:e=e||this.nextId(),f.recurse(t.test,e),f.if_(e,f.lazyRecurse(t.alternate,e),f.lazyRecurse(t.consequent,e)),i(e)
break
case $o.Identifier:e=e||this.nextId(),n&&(n.context="inputs"===f.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),n.computed=!1,n.name=t.name),Xe(t.name),f.if_("inputs"===f.stage||f.not(f.getHasOwnProperty("l",t.name)),function(){f.if_("inputs"===f.stage||"s",function(){o&&1!==o&&f.if_(f.not(f.nonComputedMember("s",t.name)),f.lazyAssign(f.nonComputedMember("s",t.name),"{}")),f.assign(e,f.nonComputedMember("s",t.name))})},e&&f.lazyAssign(e,f.nonComputedMember("l",t.name))),(f.state.expensiveChecks||$n(t.name))&&f.addEnsureSafeObject(e),i(e)
break
case $o.MemberExpression:s=n&&(n.context=this.nextId())||this.nextId(),e=e||this.nextId(),f.recurse(t.object,s,void 0,function(){f.if_(f.notNull(s),function(){o&&1!==o&&f.addEnsureSafeAssignContext(s),t.computed?(u=f.nextId(),f.recurse(t.property,u),f.getStringValue(u),f.addEnsureSafeMemberName(u),o&&1!==o&&f.if_(f.not(f.computedMember(s,u)),f.lazyAssign(f.computedMember(s,u),"{}")),l=f.ensureSafeObject(f.computedMember(s,u)),f.assign(e,l),n&&(n.computed=!0,n.name=u)):(Xe(t.property.name),o&&1!==o&&f.if_(f.not(f.nonComputedMember(s,t.property.name)),f.lazyAssign(f.nonComputedMember(s,t.property.name),"{}")),l=f.nonComputedMember(s,t.property.name),(f.state.expensiveChecks||$n(t.property.name))&&(l=f.ensureSafeObject(l)),f.assign(e,l),n&&(n.computed=!1,n.name=t.property.name))},function(){f.assign(e,"undefined")}),i(e)},!!o)
break
case $o.CallExpression:e=e||this.nextId(),t.filter?(u=f.filter(t.callee.name),c=[],r(t.arguments,function(t){var e=f.nextId()
f.recurse(t,e),c.push(e)}),l=u+"("+c.join(",")+")",f.assign(e,l),i(e)):(u=f.nextId(),s={},c=[],f.recurse(t.callee,u,s,function(){f.if_(f.notNull(u),function(){f.addEnsureSafeFunction(u),r(t.arguments,function(t){f.recurse(t,f.nextId(),void 0,function(t){c.push(f.ensureSafeObject(t))})}),s.name?(f.state.expensiveChecks||f.addEnsureSafeObject(s.context),l=f.member(s.context,s.name,s.computed)+"("+c.join(",")+")"):l=u+"("+c.join(",")+")",l=f.ensureSafeObject(l),f.assign(e,l)},function(){f.assign(e,"undefined")}),i(e)}))
break
case $o.AssignmentExpression:if(u=this.nextId(),s={},!cn(t.left))throw so("lval","Trying to assign a value to a non l-value")
this.recurse(t.left,void 0,s,function(){f.if_(f.notNull(s.context),function(){f.recurse(t.right,u),f.addEnsureSafeObject(f.member(s.context,s.name,s.computed)),f.addEnsureSafeAssignContext(s.context),l=f.member(s.context,s.name,s.computed)+t.operator+u,f.assign(e,l),i(e||l)})},1)
break
case $o.ArrayExpression:c=[],r(t.elements,function(t){f.recurse(t,f.nextId(),void 0,function(t){c.push(t)})}),l="["+c.join(",")+"]",this.assign(e,l),i(l)
break
case $o.ObjectExpression:c=[],r(t.properties,function(t){f.recurse(t.value,f.nextId(),void 0,function(e){c.push(f.escape(t.key.type===$o.Identifier?t.key.name:""+t.key.value)+":"+e)})}),l="{"+c.join(",")+"}",this.assign(e,l),i(l)
break
case $o.ThisExpression:this.assign(e,"s"),i("s")
break
case $o.LocalsExpression:this.assign(e,"l"),i("l")
break
case $o.NGValueParameter:this.assign(e,"v"),i("v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own
return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){return t?(this.current().body.push(t,"=",e,";"),t):void 0},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(t===!0)e()
else{var r=this.current().body
r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){var n=/[$_a-zA-Z][$_a-zA-Z0-9]*/,r=/[^$_a-zA-Z0-9]/g
return n.test(e)?t+"."+e:t+'["'+e.replace(r,this.stringEscapeFn)+'"]'},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},addEnsureSafeObject:function(t){this.current().body.push(this.ensureSafeObject(t),";")},addEnsureSafeMemberName:function(t){this.current().body.push(this.ensureSafeMemberName(t),";")},addEnsureSafeFunction:function(t){this.current().body.push(this.ensureSafeFunction(t),";")},addEnsureSafeAssignContext:function(t){this.current().body.push(this.ensureSafeAssignContext(t),";")},ensureSafeObject:function(t){return"ensureSafeObject("+t+",text)"},ensureSafeMemberName:function(t){return"ensureSafeMemberName("+t+",text)"},ensureSafeFunction:function(t){return"ensureSafeFunction("+t+",text)"},getStringValue:function(t){this.assign(t,"getStringValue("+t+")")},ensureSafeAssignContext:function(t){return"ensureSafeAssignContext("+t+",text)"},lazyRecurse:function(t,e,n,r,i,o){var a=this
return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this
return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(w(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'"
if(x(t))return t.toString()
if(t===!0)return"true"
if(t===!1)return"false"
if(null===t)return"null"
if("undefined"==typeof t)return"undefined"
throw so("esc","IMPOSSIBLE")},nextId:function(t,e){var n="v"+this.state.nextId++
return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},dn.prototype={compile:function(t,e){var n=this,i=this.astBuilder.ast(t)
this.expression=t,this.expensiveChecks=e,sn(i,n.$filter)
var o,a;(o=ln(i))&&(a=this.recurse(o))
var s,u=un(i.body)
u&&(s=[],r(u,function(t,e){var r=n.recurse(t)
t.input=r,s.push(r),t.watchId=e}))
var c=[]
r(i.body,function(t){c.push(n.recurse(t.expression))})
var l=0===i.body.length?p:1===i.body.length?c[0]:function(t,e){var n
return r(c,function(r){n=r(t,e)}),n}
return a&&(l.assign=function(t,e,n){return a(t,n,e)}),s&&(l.inputs=s),l.literal=fn(i),l.constant=hn(i),l},recurse:function(t,e,n){var i,o,a,s=this
if(t.input)return this.inputs(t.input,t.watchId)
switch(t.type){case $o.Literal:return this.value(t.value,e)
case $o.UnaryExpression:return o=this.recurse(t.argument),this["unary"+t.operator](o,e)
case $o.BinaryExpression:return i=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](i,o,e)
case $o.LogicalExpression:return i=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](i,o,e)
case $o.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e)
case $o.Identifier:return Xe(t.name,s.expression),s.identifier(t.name,s.expensiveChecks||$n(t.name),e,n,s.expression)
case $o.MemberExpression:return i=this.recurse(t.object,!1,!!n),t.computed||(Xe(t.property.name,s.expression),o=t.property.name),t.computed&&(o=this.recurse(t.property)),t.computed?this.computedMember(i,o,e,n,s.expression):this.nonComputedMember(i,o,s.expensiveChecks,e,n,s.expression)
case $o.CallExpression:return a=[],r(t.arguments,function(t){a.push(s.recurse(t))}),t.filter&&(o=this.$filter(t.callee.name)),t.filter||(o=this.recurse(t.callee,!0)),t.filter?function(t,n,r,i){for(var s=[],u=0;u<a.length;++u)s.push(a[u](t,n,r,i))
var c=o.apply(void 0,s,i)
return e?{context:void 0,name:void 0,value:c}:c}:function(t,n,r,i){var u,c=o(t,n,r,i)
if(null!=c.value){tn(c.context,s.expression),en(c.value,s.expression)
for(var l=[],f=0;f<a.length;++f)l.push(tn(a[f](t,n,r,i),s.expression))
u=tn(c.value.apply(c.context,l),s.expression)}return e?{value:u}:u}
case $o.AssignmentExpression:return i=this.recurse(t.left,!0,1),o=this.recurse(t.right),function(t,n,r,a){var u=i(t,n,r,a),c=o(t,n,r,a)
return tn(u.value,s.expression),nn(u.context),u.context[u.name]=c,e?{value:c}:c}
case $o.ArrayExpression:return a=[],r(t.elements,function(t){a.push(s.recurse(t))}),function(t,n,r,i){for(var o=[],s=0;s<a.length;++s)o.push(a[s](t,n,r,i))
return e?{value:o}:o}
case $o.ObjectExpression:return a=[],r(t.properties,function(t){a.push({key:t.key.type===$o.Identifier?t.key.name:""+t.key.value,value:s.recurse(t.value)})}),function(t,n,r,i){for(var o={},s=0;s<a.length;++s)o[a[s].key]=a[s].value(t,n,r,i)
return e?{value:o}:o}
case $o.ThisExpression:return function(t){return e?{value:t}:t}
case $o.LocalsExpression:return function(t,n){return e?{value:n}:n}
case $o.NGValueParameter:return function(t,n,r){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=g(a)?+a:0,e?{value:a}:a}},"unary-":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=g(a)?-a:0,e?{value:a}:a}},"unary!":function(t,e){return function(n,r,i,o){var a=!t(n,r,i,o)
return e?{value:a}:a}},"binary+":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=on(s,u)
return n?{value:c}:c}},"binary-":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=(g(s)?s:0)-(g(u)?u:0)
return n?{value:c}:c}},"binary*":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)*e(r,i,o,a)
return n?{value:s}:s}},"binary/":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)/e(r,i,o,a)
return n?{value:s}:s}},"binary%":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)%e(r,i,o,a)
return n?{value:s}:s}},"binary===":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)===e(r,i,o,a)
return n?{value:s}:s}},"binary!==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!==e(r,i,o,a)
return n?{value:s}:s}},"binary==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)==e(r,i,o,a)
return n?{value:s}:s}},"binary!=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!=e(r,i,o,a)
return n?{value:s}:s}},"binary<":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<e(r,i,o,a)
return n?{value:s}:s}},"binary>":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>e(r,i,o,a)
return n?{value:s}:s}},"binary<=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<=e(r,i,o,a)
return n?{value:s}:s}},"binary>=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>=e(r,i,o,a)
return n?{value:s}:s}},"binary&&":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)&&e(r,i,o,a)
return n?{value:s}:s}},"binary||":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)||e(r,i,o,a)
return n?{value:s}:s}},"ternary?:":function(t,e,n,r){return function(i,o,a,s){var u=t(i,o,a,s)?e(i,o,a,s):n(i,o,a,s)
return r?{value:u}:u}},value:function(t,e){return function(){return e?{context:void 0,name:void 0,value:t}:t}},identifier:function(t,e,n,r,i){return function(o,a,s,u){var c=a&&t in a?a:o
r&&1!==r&&c&&!c[t]&&(c[t]={})
var l=c?c[t]:void 0
return e&&tn(l,i),n?{context:c,name:t,value:l}:l}},computedMember:function(t,e,n,r,i){return function(o,a,s,u){var c,l,f=t(o,a,s,u)
return null!=f&&(c=e(o,a,s,u),c=Qe(c),Xe(c,i),r&&1!==r&&(nn(f),f&&!f[c]&&(f[c]={})),l=f[c],tn(l,i)),n?{context:f,name:c,value:l}:l}},nonComputedMember:function(t,e,n,r,i,o){return function(a,s,u,c){var l=t(a,s,u,c)
i&&1!==i&&(nn(l),l&&!l[e]&&(l[e]={}))
var f=null!=l?l[e]:void 0
return(n||$n(e))&&tn(f,o),r?{context:l,name:e,value:f}:f}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}}
var vo=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n,this.ast=new $o(t,n),this.astCompiler=n.csp?new dn(this.ast,e):new pn(this.ast,e)}
vo.prototype={constructor:vo,parse:function(t){return this.astCompiler.compile(t,this.options.expensiveChecks)}}
var mo=Object.prototype.valueOf,go=e("$sce"),yo={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},bo=e("$compile"),wo=t.document.createElement("a"),xo=Vn(t.location.href)
Dn.$inject=["$document"],_n.$inject=["$provide"]
var So=22,Co=".",Eo="0"
Ln.$inject=["$locale"],Hn.$inject=["$locale"]
var Ao={yyyy:Jn("FullYear",4,0,!1,!0),yy:Jn("FullYear",2,0,!0,!0),y:Jn("FullYear",1,0,!1,!0),MMMM:Yn("Month"),MMM:Yn("Month",!0),MM:Jn("Month",2,1),M:Jn("Month",1,1),LLLL:Yn("Month",!1,!0),dd:Jn("Date",2),d:Jn("Date",1),HH:Jn("Hours",2),H:Jn("Hours",1),hh:Jn("Hours",2,-12),h:Jn("Hours",1,-12),mm:Jn("Minutes",2),m:Jn("Minutes",1),ss:Jn("Seconds",2),s:Jn("Seconds",1),sss:Jn("Milliseconds",3),EEEE:Yn("Day"),EEE:Yn("Day",!0),a:tr,Z:Zn,ww:Qn(2),w:Qn(1),G:er,GG:er,GGG:er,GGGG:nr},ko=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Oo=/^\-?\d+$/
rr.$inject=["$locale"]
var Mo=$(Tr),To=$(Nr)
ar.$inject=["$parse"]
var No=$({restrict:"E",compile:function(t,e){return e.href||e.xlinkHref?void 0:function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Ur.call(e.prop("href"))?"xlink:href":"href"
e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Vo={}
r(Ci,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!=t){var r=$e("ng-"+e),i=n
"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,e,i)}),Vo[r]=function(){return{restrict:"A",priority:100,link:i}}}}),r(Ai,function(t,e){Vo[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(kr)
if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),r(["src","srcset","href"],function(t){var e=$e("ng-"+t)
Vo[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t
"href"===t&&"[object SVGAnimatedString]"===Ur.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){return e?(i.$set(a,e),void(Ir&&o&&r.prop(o,i[a]))):void("href"===t&&i.$set(a,null))})}}}})
var jo={$addControl:p,$$renameControl:ur,$removeControl:p,$setValidity:p,$setDirty:p,$setPristine:p,$setSubmitted:p},Io="ng-submitted"
cr.$inject=["$element","$attrs","$scope","$animate","$interpolate"]
var Do=function(t){return["$timeout","$parse",function(e,n){function r(t){return""===t?n('this[""]').assign:n(t).assign||p}var i={name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:cr,compile:function(n,i){n.addClass(ma).addClass($a)
var o=i.name?"name":t&&i.ngForm?"ngForm":!1
return{pre:function(t,n,i,a){var s=a[0]
if(!("action"in i)){var u=function(e){t.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),e.preventDefault()}
fi(n[0],"submit",u),n.on("$destroy",function(){e(function(){hi(n[0],"submit",u)},0,!1)})}var l=a[1]||s.$$parentForm
l.$addControl(s)
var f=o?r(s.$name):p
o&&(f(t,s),i.$observe(o,function(e){s.$name!==e&&(f(t,void 0),s.$$parentForm.$$renameControl(s,e),(f=r(s.$name))(t,s))})),n.on("$destroy",function(){s.$$parentForm.$removeControl(s),f(t,void 0),c(s,jo)})}}}}
return i}]},Po=Do(),_o=Do(!0),Ro=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Fo=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,qo=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Uo=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Lo=/^(\d{4,})-(\d{2})-(\d{2})$/,Ho=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Bo=/^(\d{4,})-W(\d\d)$/,zo=/^(\d{4,})-(\d\d)$/,Wo=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Go="keydown wheel mousedown",Jo=$t()
r("date,datetime-local,month,time,week".split(","),function(t){Jo[t]=!0})
var Yo={text:fr,date:$r("date",Lo,dr(Lo,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":$r("datetimelocal",Ho,dr(Ho,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:$r("time",Wo,dr(Wo,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:$r("week",Bo,pr,"yyyy-Www"),month:$r("month",zo,dr(zo,["yyyy","MM"]),"yyyy-MM"),number:mr,url:gr,email:yr,radio:br,checkbox:xr,hidden:p,button:p,submit:p,reset:p,file:p},Zo=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Yo[Tr(a.type)]||Yo.text)(i,o,a,s[0],e,t,n,r)}}}}],Ko=/^(true|false|\d+)$/,Xo=function(){return{restrict:"A",priority:100,compile:function(t,e){return Ko.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Qo=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,r){t.$$addBindingInfo(n,r.ngBind),n=n[0],e.$watch(r.ngBind,function(t){n.textContent=m(t)?"":t})}}}}],ta=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,r,i){var o=t(r.attr(i.$attr.ngBindTemplate))
e.$$addBindingInfo(r,o.expressions),r=r[0],i.$observe("ngBindTemplate",function(t){r.textContent=m(t)?"":t})}}}}],ea=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()})
return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],na=$({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),ra=Sr("",!0),ia=Sr("Odd",0),oa=Sr("Even",1),aa=sr({compile:function(t,e){e.$set("ngCloak",void 0),t.removeClass("ng-cloak")}}),sa=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],ua={},ca={blur:!0,focus:!0}
r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=$e("ng-"+t)
ua[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0)
return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})}
ca[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]})
var la=["$animate","$compile",function(t,e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.$$createComment("end ngIf",i.ngIf),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=dt(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],fa=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Br.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll
return function(r,i,u,c,l){var f,h,p,d=0,$=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),p&&(n.leave(p).then(function(){h=null}),h=p,p=null)}
r.$watch(o,function(o){var u=function(){!g(s)||s&&!r.$eval(s)||e()},h=++d
o?(t(o,!0).then(function(t){if(!r.$$destroyed&&h===d){var e=r.$new()
c.template=t
var s=l(e,function(t){$(),n.enter(t,null,i).then(u)})
f=e,p=s,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){r.$$destroyed||h===d&&($(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):($(),c.template=null)})}}}}],ha=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return Ur.call(r[0]).match(/SVG/)?(r.empty(),void e(At(o.template,t.document).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void e(r.contents())(n))}}}],pa=sr({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),da=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,n,i){var o=e.attr(n.$attr.ngList)||", ",a="false"!==n.ngTrim,s=a?Jr(o):o,u=function(t){if(!m(t)){var e=[]
return t&&r(t.split(s),function(t){t&&e.push(a?Jr(t):t)}),e}}
i.$parsers.push(u),i.$formatters.push(function(t){return Wr(t)?t.join(o):void 0}),i.$isEmpty=function(t){return!t||!t.length}}}},$a="ng-valid",va="ng-invalid",ma="ng-pristine",ga="ng-dirty",ya="ng-untouched",ba="ng-touched",wa="ng-pending",xa="ng-empty",Sa="ng-not-empty",Ca=e("ngModel"),Ea=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,n,i,o,a,s,u,c,l){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=l(n.name||"",!1)(t),this.$$parentForm=jo
var f,h=o(n.ngModel),d=h.assign,$=h,v=d,y=null,b=this
this.$$setOptions=function(t){if(b.$options=t,t&&t.getterSetter){var e=o(n.ngModel+"()"),r=o(n.ngModel+"($$$p)")
$=function(t){var n=h(t)
return C(n)&&(n=e(t)),n},v=function(t,e){C(h(t))?r(t,{$$$p:e}):d(t,e)}}else if(!h.assign)throw Ca("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,K(i))},this.$render=p,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t},this.$$updateEmptyClasses=function(t){b.$isEmpty(t)?(a.removeClass(i,Sa),a.addClass(i,xa)):(a.removeClass(i,xa),a.addClass(i,Sa))}
var w=0
Cr({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},$animate:a}),this.$setPristine=function(){b.$dirty=!1,b.$pristine=!0,a.removeClass(i,ga),a.addClass(i,ma)},this.$setDirty=function(){b.$dirty=!0,b.$pristine=!1,a.removeClass(i,ma),a.addClass(i,ga),b.$$parentForm.$setDirty()},this.$setUntouched=function(){b.$touched=!1,b.$untouched=!0,a.setClass(i,ya,ba)},this.$setTouched=function(){b.$touched=!0,b.$untouched=!1,a.setClass(i,ba,ya)},this.$rollbackViewValue=function(){s.cancel(y),b.$viewValue=b.$$lastCommittedViewValue,b.$render()},this.$validate=function(){if(!x(b.$modelValue)||!isNaN(b.$modelValue)){var t=b.$$lastCommittedViewValue,e=b.$$rawModelValue,n=b.$valid,r=b.$modelValue,i=b.$options&&b.$options.allowInvalid
b.$$runValidators(e,t,function(t){i||n===t||(b.$modelValue=t?e:void 0,b.$modelValue!==r&&b.$$writeModelToScope())})}},this.$$runValidators=function(t,e,n){function i(){var t=b.$$parserName||"parse"
return m(f)?(s(t,null),!0):(f||(r(b.$validators,function(t,e){s(e,null)}),r(b.$asyncValidators,function(t,e){s(e,null)})),s(t,f),f)}function o(){var n=!0
return r(b.$validators,function(r,i){var o=r(t,e)
n=n&&o,s(i,o)}),n?!0:(r(b.$asyncValidators,function(t,e){s(e,null)}),!1)}function a(){var n=[],i=!0
r(b.$asyncValidators,function(r,o){var a=r(t,e)
if(!V(a))throw Ca("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",a)
s(o,void 0),n.push(a.then(function(){s(o,!0)},function(){i=!1,s(o,!1)}))}),n.length?c.all(n).then(function(){u(i)},p):u(!0)}function s(t,e){l===w&&b.$setValidity(t,e)}function u(t){l===w&&n(t)}w++
var l=w
return i()&&o()?void a():void u(!1)},this.$commitViewValue=function(){var t=b.$viewValue
s.cancel(y),(b.$$lastCommittedViewValue!==t||""===t&&b.$$hasNativeValidators)&&(b.$$updateEmptyClasses(t),b.$$lastCommittedViewValue=t,b.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){b.$modelValue!==o&&b.$$writeModelToScope()}var n=b.$$lastCommittedViewValue,r=n
if(f=m(r)?void 0:!0)for(var i=0;i<b.$parsers.length;i++)if(r=b.$parsers[i](r),m(r)){f=!1
break}x(b.$modelValue)&&isNaN(b.$modelValue)&&(b.$modelValue=$(t))
var o=b.$modelValue,a=b.$options&&b.$options.allowInvalid
b.$$rawModelValue=r,a&&(b.$modelValue=r,e()),b.$$runValidators(r,b.$$lastCommittedViewValue,function(t){a||(b.$modelValue=t?r:void 0,e())})},this.$$writeModelToScope=function(){v(t,b.$modelValue),r(b.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){b.$viewValue=t,(!b.$options||b.$options.updateOnDefault)&&b.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,r=0,i=b.$options
i&&g(i.debounce)&&(n=i.debounce,x(n)?r=n:x(n[e])?r=n[e]:x(n["default"])&&(r=n["default"])),s.cancel(y),r?y=s(function(){b.$commitViewValue()},r):u.$$phase?b.$commitViewValue():t.$apply(function(){b.$commitViewValue()})},t.$watch(function(){var e=$(t)
if(e!==b.$modelValue&&(b.$modelValue===b.$modelValue||e===e)){b.$modelValue=b.$$rawModelValue=e,f=void 0
for(var n=b.$formatters,r=n.length,i=e;r--;)i=n[r](i)
b.$viewValue!==i&&(b.$$updateEmptyClasses(i),b.$viewValue=b.$$lastCommittedViewValue=i,b.$render(),b.$$runValidators(e,i,p))}return e})}],Aa=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ea,priority:1,compile:function(e){return e.addClass(ma).addClass(ya).addClass($a),{pre:function(t,e,n,r){var i=r[0],o=r[1]||i.$$parentForm
i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&i.$$parentForm.$$renameControl(i,t)}),t.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(e,n,r,i){var o=i[0]
o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],ka=/(\s+|^)default(\s+|$)/,Oa=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var n=this
this.$options=F(t.$eval(e.ngModelOptions)),g(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Jr(this.$options.updateOn.replace(ka,function(){return n.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},Ma=sr({terminal:!0,priority:1e3}),Ta=e("ngOptions"),Na=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Va=["$compile","$document","$parse",function(e,i,o){function a(t,e,r){function i(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e
if(!c&&n(t))e=t
else{e=[]
for(var r in t)t.hasOwnProperty(r)&&"$"!==r.charAt(0)&&e.push(r)}return e}var s=t.match(Na)
if(!s)throw Ta("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",t,K(e))
var u=s[5]||s[7],c=s[6],l=/ as /.test(s[0])&&s[1],f=s[9],h=o(s[2]?s[1]:u),p=l&&o(l),d=p||h,$=f&&o(f),v=f?function(t,e){return $(r,e)}:function(t){return Kt(t)},m=function(t,e){return v(t,S(t,e))},g=o(s[2]||s[1]),y=o(s[3]||""),b=o(s[4]||""),w=o(s[8]),x={},S=c?function(t,e){return x[c]=e,x[u]=t,x}:function(t){return x[u]=t,x}
return{trackBy:f,getTrackByValue:m,getWatchables:o(w,function(t){var e=[]
t=t||[]
for(var n=a(t),i=n.length,o=0;i>o;o++){var u=t===n?o:n[o],c=t[u],l=S(c,u),f=v(c,l)
if(e.push(f),s[2]||s[1]){var h=g(r,l)
e.push(h)}if(s[4]){var p=b(r,l)
e.push(p)}}return e}),getOptions:function(){for(var t=[],e={},n=w(r)||[],o=a(n),s=o.length,u=0;s>u;u++){var c=n===o?u:o[u],l=n[c],h=S(l,c),p=d(r,h),$=v(p,h),x=g(r,h),C=y(r,h),E=b(r,h),A=new i($,p,x,C,E)
t.push(A),e[$]=A}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[m(t)]},getViewValueFromOption:function(t){return f?Br.copy(t.viewValue):t.viewValue}}}}}function s(t,n,o,s){function l(t,e){var n=u.cloneNode(!1)
e.appendChild(n),f(t,n)}function f(t,e){t.element=e,e.disabled=t.disabled,t.label!==e.label&&(e.label=t.label,e.textContent=t.label),t.value!==e.value&&(e.value=t.selectValue)}function h(){var t=S&&d.readValue()
if(S)for(var e=S.items.length-1;e>=0;e--){var r=S.items[e]
Ht(r.group?r.element.parentNode:r.element)}S=C.getOptions()
var i={}
if(w&&n.prepend(p),S.items.forEach(function(t){var e
g(t.group)?(e=i[t.group],e||(e=c.cloneNode(!1),E.appendChild(e),e.label=t.group,i[t.group]=e),l(t,e)):l(t,E)}),n[0].appendChild(E),$.$render(),!$.$isEmpty(t)){var o=d.readValue(),a=C.trackBy||v;(a?U(t,o):t===o)||($.$setViewValue(o),$.$render())}}for(var p,d=s[0],$=s[1],v=o.multiple,m=0,y=n.children(),b=y.length;b>m;m++)if(""===y[m].value){p=y.eq(m)
break}var w=!!p,x=Dr(u.cloneNode(!1))
x.val("?")
var S,C=a(o.ngOptions,n,t),E=i[0].createDocumentFragment(),A=function(){w||n.prepend(p),n.val(""),p.prop("selected",!0),p.attr("selected",!0)},k=function(){w||p.remove()},O=function(){n.prepend(x),n.val("?"),x.prop("selected",!0),x.attr("selected",!0)},M=function(){x.remove()}
v?($.$isEmpty=function(t){return!t||0===t.length},d.writeValue=function(t){S.items.forEach(function(t){t.element.selected=!1}),t&&t.forEach(function(t){var e=S.getOptionFromViewValue(t)
e&&(e.element.selected=!0)})},d.readValue=function(){var t=n.val()||[],e=[]
return r(t,function(t){var n=S.selectValueMap[t]
n&&!n.disabled&&e.push(S.getViewValueFromOption(n))}),e},C.trackBy&&t.$watchCollection(function(){return Wr($.$viewValue)?$.$viewValue.map(function(t){return C.getTrackByValue(t)}):void 0},function(){$.$render()})):(d.writeValue=function(t){var e=S.getOptionFromViewValue(t)
e?(n[0].value!==e.selectValue&&(M(),k(),n[0].value=e.selectValue,e.element.selected=!0),e.element.setAttribute("selected","selected")):null===t||w?(M(),A()):(k(),O())},d.readValue=function(){var t=S.selectValueMap[n.val()]
return t&&!t.disabled?(k(),M(),S.getViewValueFromOption(t)):null},C.trackBy&&t.$watch(function(){return C.getTrackByValue($.$viewValue)},function(){$.$render()})),w?(p.remove(),e(p)(t),p.removeClass("ng-scope")):p=Dr(u.cloneNode(!1)),n.empty(),h(),t.$watchCollection(C.getWatchables,h)}var u=t.document.createElement("option"),c=t.document.createElement("optgroup")
return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(t,e,n,r){r[0].registerOption=p},post:s}}}],ja=["$locale","$interpolate","$log",function(t,e,n){var i=/{}/g,o=/^when(Minus)?(.+)$/
return{link:function(a,s,u){function c(t){s.text(t||"")}var l,f=u.count,h=u.$attr.when&&s.attr(u.$attr.when),d=u.offset||0,$=a.$eval(h)||{},v={},g=e.startSymbol(),y=e.endSymbol(),b=g+f+"-"+d+y,w=Br.noop
r(u,function(t,e){var n=o.exec(e)
if(n){var r=(n[1]?"-":"")+Tr(n[2])
$[r]=s.attr(u.$attr[e])}}),r($,function(t,n){v[n]=e(t.replace(i,b))}),a.$watch(f,function(e){var r=parseFloat(e),i=isNaN(r)
if(i||r in $||(r=t.pluralCat(r-d)),r!==l&&!(i&&x(l)&&isNaN(l))){w()
var o=v[r]
m(o)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+h),w=p,c()):w=a.$watch(o,c),l=r}})}}}],Ia=["$parse","$animate","$compile",function(t,i,o){var a="$$NG_REMOVED",s=e("ngRepeat"),u=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},c=function(t){return t.clone[0]},l=function(t){return t.clone[t.clone.length-1]}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(e,f){var h=f.ngRepeat,p=o.$$createComment("end ngRepeat",h),d=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!d)throw s("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",h)
var $=d[1],v=d[2],m=d[3],g=d[4]
if(d=$.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!d)throw s("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",$)
var y=d[3]||d[1],b=d[2]
if(m&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m)))throw s("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",m)
var w,x,S,C,E={$id:Kt}
return g?w=t(g):(S=function(t,e){return Kt(e)},C=function(t){return t}),function(t,e,o,f,d){w&&(x=function(e,n,r){return b&&(E[b]=e),E[y]=n,E.$index=r,w(t,E)})
var $=$t()
t.$watchCollection(v,function(o){var f,v,g,w,E,A,k,O,M,T,N,V,j=e[0],I=$t()
if(m&&(t[m]=o),n(o))M=o,O=x||S
else{O=x||C,M=[]
for(var D in o)Mr.call(o,D)&&"$"!==D.charAt(0)&&M.push(D)}for(w=M.length,N=new Array(w),f=0;w>f;f++)if(E=o===M?f:M[f],A=o[E],k=O(E,A,f),$[k])T=$[k],delete $[k],I[k]=T,N[f]=T
else{if(I[k])throw r(N,function(t){t&&t.scope&&($[t.id]=t)}),s("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",h,k,A)
N[f]={id:k,scope:void 0,clone:void 0},I[k]=!0}for(var P in $){if(T=$[P],V=dt(T.clone),i.leave(V),V[0].parentNode)for(f=0,v=V.length;v>f;f++)V[f][a]=!0
T.scope.$destroy()}for(f=0;w>f;f++)if(E=o===M?f:M[f],A=o[E],T=N[f],T.scope){g=j
do g=g.nextSibling
while(g&&g[a])
c(T)!=g&&i.move(dt(T.clone),null,j),j=l(T),u(T.scope,f,y,A,b,E,w)}else d(function(t,e){T.scope=e
var n=p.cloneNode(!1)
t[t.length++]=n,i.enter(t,null,j),j=n,T.clone=t,I[T.id]=T,u(T.scope,f,y,A,b,E,w)})
$=I})}}}}],Da="ng-hide",Pa="ng-hide-animate",_a=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,Da,{tempClasses:Pa})})}}}],Ra=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,Da,{tempClasses:Pa})})}}}],Fa=sr(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&r(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),qa=["$animate","$compile",function(t,e){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,i,o,a){var s=o.ngSwitch||o.on,u=[],c=[],l=[],f=[],h=function(t,e){return function(){t.splice(e,1)}}
n.$watch(s,function(n){var i,o
for(i=0,o=l.length;o>i;++i)t.cancel(l[i])
for(l.length=0,i=0,o=f.length;o>i;++i){var s=dt(c[i].clone)
f[i].$destroy()
var p=l[i]=t.leave(s)
p.then(h(l,i))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&r(u,function(n){n.transclude(function(r,i){f.push(i)
var o=n.element
r[r.length++]=e.$$createComment("end ngSwitchWhen")
var a={clone:r}
c.push(a),t.enter(r,o.parent(),o)})})})}}}],Ua=sr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),La=sr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Ha=e("ngTransclude"),Ba=sr({restrict:"EAC",link:function(t,e,n,r,i){function o(t){t.length&&(e.empty(),e.append(t))}if(n.ngTransclude===n.$attr.ngTransclude&&(n.ngTransclude=""),!i)throw Ha("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",K(e))
var a=n.ngTransclude||n.ngTranscludeSlot
i(o,null,a)}}),za=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text
t.put(r,i)}}}}],Wa={$setViewValue:p,$render:p},Ga=["$element","$scope",function(e,n){var r=this,i=new Xt
r.ngModelCtrl=Wa,r.unknownOption=Dr(t.document.createElement("option")),r.renderUnknownOption=function(t){var n="? "+Kt(t)+" ?"
r.unknownOption.val(n),e.prepend(r.unknownOption),e.val(n)},n.$on("$destroy",function(){r.renderUnknownOption=p}),r.removeUnknownOption=function(){r.unknownOption.parent()&&r.unknownOption.remove()},r.readValue=function(){return r.removeUnknownOption(),e.val()},r.writeValue=function(t){r.hasOption(t)?(r.removeUnknownOption(),e.val(t),""===t&&r.emptyOption.prop("selected",!0)):null==t&&r.emptyOption?(r.removeUnknownOption(),e.val("")):r.renderUnknownOption(t)},r.addOption=function(t,e){if(e[0].nodeType!==oi){ht(t,'"option value"'),""===t&&(r.emptyOption=e)
var n=i.get(t)||0
i.put(t,n+1),r.ngModelCtrl.$render(),Ar(e)}},r.removeOption=function(t){var e=i.get(t)
e&&(1===e?(i.remove(t),""===t&&(r.emptyOption=void 0)):i.put(t,e-1))},r.hasOption=function(t){return!!i.get(t)},r.registerOption=function(t,e,n,i,o){if(i){var a
n.$observe("value",function(t){g(a)&&r.removeOption(a),a=t,r.addOption(t,e)})}else o?t.$watch(o,function(t,i){n.$set("value",t),i!==t&&r.removeOption(i),r.addOption(t,e)}):r.addOption(n.value,e)
e.on("$destroy",function(){r.removeOption(n.value),r.ngModelCtrl.$render()})}}],Ja=function(){function t(t,e,n,i){var o=i[1]
if(o){var a=i[0]
if(a.ngModelCtrl=o,e.on("change",function(){t.$apply(function(){o.$setViewValue(a.readValue())})}),n.multiple){a.readValue=function(){var t=[]
return r(e.find("option"),function(e){e.selected&&t.push(e.value)}),t},a.writeValue=function(t){var n=new Xt(t)
r(e.find("option"),function(t){t.selected=g(n.get(t.value))})}
var s,u=NaN
t.$watch(function(){u!==o.$viewValue||U(s,o.$viewValue)||(s=q(o.$viewValue),o.$render()),u=o.$viewValue}),o.$isEmpty=function(t){return!t||0===t.length}}}}function e(t,e,n,r){var i=r[1]
if(i){var o=r[0]
i.$render=function(){o.writeValue(i.$viewValue)}}}return{restrict:"E",require:["select","?ngModel"],controller:Ga,priority:1,link:{pre:t,post:e}}},Ya=["$interpolate",function(t){return{restrict:"E",priority:100,compile:function(e,n){if(g(n.value))var r=t(n.value,!0)
else{var i=t(e.text(),!0)
i||n.$set("value",e.text())}return function(t,e,n){var o="$selectController",a=e.parent(),s=a.data(o)||a.parent().data(o)
s&&s.registerOption(t,e,n,r,i)}}}}],Za=$({restrict:"E",terminal:!1}),Ka=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},Xa=function(){return{restrict:"A",require:"?ngModel",link:function(t,n,r,i){if(i){var o,a=r.ngPattern||r.pattern
r.$observe("pattern",function(t){if(w(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw e("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",a,t,K(n))
o=t||void 0,i.$validate()}),i.$validators.pattern=function(t,e){return i.$isEmpty(e)||m(o)||o.test(e)}}}}},Qa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1
n.$observe("maxlength",function(t){var e=f(t)
i=isNaN(e)?-1:e,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(e)||e.length<=i}}}}},ts=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0
n.$observe("minlength",function(t){i=f(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}}
return t.angular.bootstrap?void(t.console&&console.log("WARNING: Tried to load angular more than once.")):(ct(),yt(Br),Br.module("ngLocale",[],["$provide",function(t){function e(t){t+=""
var e=t.indexOf(".")
return-1==e?0:t.length-e-1}function n(t,n){var r=n
void 0===r&&(r=Math.min(e(t),3))
var i=Math.pow(10,r),o=(t*i|0)%i
return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"}
t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(t,e){var i=0|t,o=n(t,e)
return 1==i&&0==o.v?r.ONE:r.OTHER}})}]),void Dr(t.document).ready(function(){it(t.document,ot)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')},{}],3:[function(t,e,n){t("./angular"),e.exports=angular},{"./angular":2}]},{},[1])
