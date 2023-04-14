"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[1793],{1793:function(e,s,a){a.r(s),a.d(s,{default:function(){return l}});var n=a(184),t=a(5319),r=a(7747),c=a(1652),i=a(8258);function l(e){var s=e.kcContext,a=e.i18n,l=e.doUseDefaultCss,o=e.active,d=e.classes,u=e.children,h=(0,c.v)({doUseDefaultCss:l,classes:d}).getClassName,p=a.msg,f=a.changeLocale,j=a.labelBySupportedLanguageTag,m=a.currentLanguageTag,v=s.locale,g=s.url,b=s.features,y=s.realm,x=s.message,N=s.referrer;return(0,r.M)({doFetchDefaultThemeResources:l,url:g,stylesCommon:["node_modules/patternfly/dist/css/patternfly.min.css","node_modules/patternfly/dist/css/patternfly-additions.min.css"],styles:["css/account.css"],htmlClassName:void 0,bodyClassName:(0,t.W)("admin-console","user",h("kcBodyClass"))}).isReady?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",Object.assign({className:"navbar navbar-default navbar-pf navbar-main header"},{children:(0,n.jsxs)("nav",Object.assign({className:"navbar",role:"navigation"},{children:[(0,n.jsx)("div",Object.assign({className:"navbar-header"},{children:(0,n.jsx)("div",Object.assign({className:"container"},{children:(0,n.jsx)("h1",Object.assign({className:"navbar-title"},{children:"Keycloak"}))}))})),(0,n.jsx)("div",Object.assign({className:"navbar-collapse navbar-collapse-1"},{children:(0,n.jsx)("div",Object.assign({className:"container"},{children:(0,n.jsxs)("ul",Object.assign({className:"nav navbar-nav navbar-utility"},{children:[y.internationalizationEnabled&&((0,i.h)(void 0!==v),!0)&&v.supported.length>1&&(0,n.jsx)("li",{children:(0,n.jsxs)("div",Object.assign({className:"kc-dropdown",id:"kc-locale-dropdown"},{children:[(0,n.jsx)("a",Object.assign({href:"#",id:"kc-current-locale-link"},{children:j[m]})),(0,n.jsx)("ul",{children:v.supported.map((function(e){var s=e.languageTag;return(0,n.jsx)("li",Object.assign({className:"kc-dropdown-item"},{children:(0,n.jsx)("a",Object.assign({href:"#",onClick:function(){return f(s)}},{children:j[s]}))}),s)}))})]}))}),void 0!==(null===N||void 0===N?void 0:N.url)&&(0,n.jsx)("li",{children:(0,n.jsx)("a",Object.assign({href:N.url,id:"referrer"},{children:p("backTo",N.name)}))}),(0,n.jsx)("li",{children:(0,n.jsx)("a",Object.assign({href:g.getLogoutUrl()},{children:p("doSignOut")}))})]}))}))}))]}))})),(0,n.jsxs)("div",Object.assign({className:"container"},{children:[(0,n.jsx)("div",Object.assign({className:"bs-sidebar col-sm-3"},{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",Object.assign({className:(0,t.W)("account"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.accountUrl},{children:p("account")}))})),b.passwordUpdateSupported&&(0,n.jsx)("li",Object.assign({className:(0,t.W)("password"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.passwordUrl},{children:p("password")}))})),(0,n.jsx)("li",Object.assign({className:(0,t.W)("totp"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.totpUrl},{children:p("authenticator")}))})),b.identityFederation&&(0,n.jsx)("li",Object.assign({className:(0,t.W)("social"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.socialUrl},{children:p("federatedIdentity")}))})),(0,n.jsx)("li",Object.assign({className:(0,t.W)("sessions"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.sessionsUrl},{children:p("sessions")}))})),(0,n.jsx)("li",Object.assign({className:(0,t.W)("applications"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.applicationsUrl},{children:p("applications")}))})),b.log&&(0,n.jsx)("li",Object.assign({className:(0,t.W)("log"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.logUrl},{children:p("log")}))})),y.userManagedAccessAllowed&&b.authorization&&(0,n.jsx)("li",Object.assign({className:(0,t.W)("authorization"===o&&"active")},{children:(0,n.jsx)("a",Object.assign({href:g.resourceUrl},{children:p("myResources")}))}))]})})),(0,n.jsxs)("div",Object.assign({className:"col-sm-9 content-area"},{children:[void 0!==x&&(0,n.jsxs)("div",Object.assign({className:(0,t.W)("alert","alert-".concat(x.type))},{children:["success"===x.type&&(0,n.jsx)("span",{className:"pficon pficon-ok"}),"error"===x.type&&(0,n.jsx)("span",{className:"pficon pficon-error-circle-o"}),(0,n.jsx)("span",Object.assign({className:"kc-feedback-text"},{children:x.summary}))]})),u]}))]}))]}):null}},1652:function(e,s,a){a.d(s,{v:function(){return n}});var n=(0,a(2889).a)({defaultClasses:{kcBodyClass:void 0,kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonLargeClass:"btn-lg",kcButtonDefaultClass:"btn-default"}}).useGetClassName},2889:function(e,s,a){a.d(s,{a:function(){return r}});var n=a(5319),t=a(969);function r(e){var s=e.defaultClasses;return{useGetClassName:function(e){var a=e.classes;return{getClassName:(0,t.O)((function(e){return(0,n.W)(e,s[e],null===a||void 0===a?void 0:a[e])}))}}}}},7747:function(e,s,a){a.d(s,{M:function(){return o}});var n=a(2982),t=a(885),r=a(2791),c=a(1630),i=a(6196),l=a(5319);function o(e){var s=e.doFetchDefaultThemeResources,a=e.stylesCommon,l=e.styles,o=e.url,u=e.scripts,h=e.htmlClassName,p=e.bodyClassName,f=(0,r.useReducer)((function(){return!0}),!s),j=(0,t.Z)(f,2),m=j[0],v=j[1];return(0,r.useEffect)((function(){if(s){var e=!1;return Promise.all([].concat((0,n.Z)((null!==a&&void 0!==a?a:[]).map((function(e){return(0,i.pathJoin)(o.resourcesCommonPath,e)}))),(0,n.Z)((null!==l&&void 0!==l?l:[]).map((function(e){return(0,i.pathJoin)(o.resourcesPath,e)})))).reverse().map((function(e){return(0,c.t)({type:"css",href:e,position:"prepend"})}))).then((function(){e||v()})),(null!==u&&void 0!==u?u:[]).forEach((function(e){return(0,c.t)({type:"javascript",src:(0,i.pathJoin)(o.resourcesPath,e)})})),function(){e=!0}}}),[]),d({target:"html",className:h}),d({target:"body",className:p}),{isReady:m}}function d(e){var s=e.target,a=e.className;(0,r.useEffect)((function(){if(void 0!==a){var e=document.getElementsByTagName(s)[0].classList,t=(0,l.W)(a).split(" ");return e.add.apply(e,(0,n.Z)(t)),function(){e.remove.apply(e,(0,n.Z)(t))}}}),[a])}},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,s,a){a.d(s,{h:function(){return n.h}});var n=a(9883)},5319:function(e,s,a){a.d(s,{W:function(){return r}});var n=a(2982),t=a(9883);var r=function e(){for(var s=arguments.length,a=0,r="";a<s;a++){var c=a<0||arguments.length<=a?void 0:arguments[a];if(null!=c){var i=void 0;switch(typeof c){case"boolean":break;case"object":if(Array.isArray(c))i=e.apply(void 0,(0,n.Z)(c));else for(var l in(0,t.h)(!!1),i="",c)c[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=c}i&&(r&&(r+=" "),r+=i)}}return r}},1630:function(e,s,a){a.d(s,{t:function(){return t}});a(4943);var n=a(3172);function t(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),a=new n.Deferred;return s.addEventListener("load",(function(){return a.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),a.pr}}}]);
//# sourceMappingURL=1793.fbbbb290.chunk.js.map