import{_ as p,b as B,o as D,m as E,a as Y}from"./@babel-41a3dc83.js";import{i as Z}from"./is-in-browser-9e40da8a.js";var ee={}.constructor;function w(a){if(a==null||typeof a!="object")return a;if(Array.isArray(a))return a.map(w);if(a.constructor!==ee)return a;var t={};for(var r in a)t[r]=w(a[r]);return t}function L(a,t,r){a===void 0&&(a="unnamed");var e=r.jss,n=w(t),i=e.plugins.onCreateRule(a,n,r);return i||(a[0],null)}var M=function(t,r){for(var e="",n=0;n<t.length&&t[n]!=="!important";n++)e&&(e+=r),e+=t[n];return e},m=function(t){if(!Array.isArray(t))return t;var r="";if(Array.isArray(t[0]))for(var e=0;e<t.length&&t[e]!=="!important";e++)r&&(r+=", "),r+=M(t[e]," ");else r=M(t,", ");return t[t.length-1]==="!important"&&(r+=" !important"),r};function g(a){return a&&a.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function R(a,t){for(var r="",e=0;e<t;e++)r+="  ";return r+a}function b(a,t,r){r===void 0&&(r={});var e="";if(!t)return e;var n=r,i=n.indent,s=i===void 0?0:i,u=t.fallbacks;r.format===!1&&(s=-1/0);var l=g(r),o=l.linebreak,f=l.space;if(a&&s++,u)if(Array.isArray(u))for(var h=0;h<u.length;h++){var y=u[h];for(var d in y){var c=y[d];c!=null&&(e&&(e+=o),e+=R(d+":"+f+m(c)+";",s))}}else for(var v in u){var x=u[v];x!=null&&(e&&(e+=o),e+=R(v+":"+f+m(x)+";",s))}for(var k in t){var q=t[k];q!=null&&k!=="fallbacks"&&(e&&(e+=o),e+=R(k+":"+f+m(q)+";",s))}return!e&&!r.allowEmpty||!a?e:(s--,e&&(e=""+o+e+o),R(""+a+f+"{"+e,s)+R("}",s))}var te=/([[\].#*$><+~=|^:(),"'`\s])/g,N=typeof CSS<"u"&&CSS.escape,T=function(a){return N?N(a):a.replace(te,"\\$1")},z=function(){function a(r,e,n){this.type="style",this.isProcessed=!1;var i=n.sheet,s=n.Renderer;this.key=r,this.options=n,this.style=e,i?this.renderer=i.renderer:s&&(this.renderer=new s)}var t=a.prototype;return t.prop=function(e,n,i){if(n===void 0)return this.style[e];var s=i?i.force:!1;if(!s&&this.style[e]===n)return this;var u=n;(!i||i.process!==!1)&&(u=this.options.jss.plugins.onChangeValue(n,e,this));var l=u==null||u===!1,o=e in this.style;if(l&&!o&&!s)return this;var f=l&&o;if(f?delete this.style[e]:this.style[e]=u,this.renderable&&this.renderer)return f?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,u),this;var h=this.options.sheet;return h&&h.attached,this},a}(),I=function(a){D(t,a);function t(e,n,i){var s;s=a.call(this,e,n,i)||this;var u=i.selector,l=i.scoped,o=i.sheet,f=i.generateId;return u?s.selectorText=u:l!==!1&&(s.id=f(E(E(s)),o),s.selectorText="."+T(s.id)),s}var r=t.prototype;return r.applyTo=function(n){var i=this.renderer;if(i){var s=this.toJSON();for(var u in s)i.setProperty(n,u,s[u])}return this},r.toJSON=function(){var n={};for(var i in this.style){var s=this.style[i];typeof s!="object"?n[i]=s:Array.isArray(s)&&(n[i]=m(s))}return n},r.toString=function(n){var i=this.options.sheet,s=i?i.options.link:!1,u=s?p({},n,{allowEmpty:!0}):n;return b(this.selectorText,this.style,u)},B(t,[{key:"selector",set:function(n){if(n!==this.selectorText){this.selectorText=n;var i=this.renderer,s=this.renderable;if(!(!s||!i)){var u=i.setSelector(s,n);u||i.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),t}(z),re={onCreateRule:function(t,r,e){return t[0]==="@"||e.parent&&e.parent.type==="keyframes"?null:new I(t,r,e)}},C={indent:1,children:!0},ne=/@([\w-]+)/,ie=function(){function a(r,e,n){this.type="conditional",this.isProcessed=!1,this.key=r;var i=r.match(ne);this.at=i?i[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new V(p({},n,{parent:this}));for(var s in e)this.rules.add(s,e[s]);this.rules.process()}var t=a.prototype;return t.getRule=function(e){return this.rules.get(e)},t.indexOf=function(e){return this.rules.indexOf(e)},t.addRule=function(e,n,i){var s=this.rules.add(e,n,i);return s?(this.options.jss.plugins.onProcessRule(s),s):null},t.replaceRule=function(e,n,i){var s=this.rules.replace(e,n,i);return s&&this.options.jss.plugins.onProcessRule(s),s},t.toString=function(e){e===void 0&&(e=C);var n=g(e),i=n.linebreak;if(e.indent==null&&(e.indent=C.indent),e.children==null&&(e.children=C.children),e.children===!1)return this.query+" {}";var s=this.rules.toString(e);return s?this.query+" {"+i+s+i+"}":""},a}(),se=/@container|@media|@supports\s+/,ae={onCreateRule:function(t,r,e){return se.test(t)?new ie(t,r,e):null}},P={indent:1,children:!0},ue=/@keyframes\s+([\w-]+)/,O=function(){function a(r,e,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var i=r.match(ue);i&&i[1]?this.name=i[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var s=n.scoped,u=n.sheet,l=n.generateId;this.id=s===!1?this.name:T(l(this,u)),this.rules=new V(p({},n,{parent:this}));for(var o in e)this.rules.add(o,e[o],p({},n,{parent:this}));this.rules.process()}var t=a.prototype;return t.toString=function(e){e===void 0&&(e=P);var n=g(e),i=n.linebreak;if(e.indent==null&&(e.indent=P.indent),e.children==null&&(e.children=P.children),e.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(e);return s&&(s=""+i+s+i),this.at+" "+this.id+" {"+s+"}"},a}(),oe=/@keyframes\s+/,le=/\$([\w-]+)/g,j=function(t,r){return typeof t=="string"?t.replace(le,function(e,n){return n in r?r[n]:e}):t},$=function(t,r,e){var n=t[r],i=j(n,e);i!==n&&(t[r]=i)},fe={onCreateRule:function(t,r,e){return typeof t=="string"&&oe.test(t)?new O(t,r,e):null},onProcessStyle:function(t,r,e){return r.type!=="style"||!e||("animation-name"in t&&$(t,"animation-name",e.keyframes),"animation"in t&&$(t,"animation",e.keyframes)),t},onChangeValue:function(t,r,e){var n=e.options.sheet;if(!n)return t;switch(r){case"animation":return j(t,n.keyframes);case"animation-name":return j(t,n.keyframes);default:return t}}},he=function(a){D(t,a);function t(){return a.apply(this,arguments)||this}var r=t.prototype;return r.toString=function(n){var i=this.options.sheet,s=i?i.options.link:!1,u=s?p({},n,{allowEmpty:!0}):n;return b(this.key,this.style,u)},t}(z),de={onCreateRule:function(t,r,e){return e.parent&&e.parent.type==="keyframes"?new he(t,r,e):null}},ce=function(){function a(r,e,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=r,this.style=e,this.options=n}var t=a.prototype;return t.toString=function(e){var n=g(e),i=n.linebreak;if(Array.isArray(this.style)){for(var s="",u=0;u<this.style.length;u++)s+=b(this.at,this.style[u]),this.style[u+1]&&(s+=i);return s}return b(this.at,this.style,e)},a}(),pe=/@font-face/,ve={onCreateRule:function(t,r,e){return pe.test(t)?new ce(t,r,e):null}},ye=function(){function a(r,e,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=r,this.style=e,this.options=n}var t=a.prototype;return t.toString=function(e){return b(this.key,this.style,e)},a}(),ge={onCreateRule:function(t,r,e){return t==="@viewport"||t==="@-ms-viewport"?new ye(t,r,e):null}},Re=function(){function a(r,e,n){this.type="simple",this.isProcessed=!1,this.key=r,this.value=e,this.options=n}var t=a.prototype;return t.toString=function(e){if(Array.isArray(this.value)){for(var n="",i=0;i<this.value.length;i++)n+=this.key+" "+this.value[i]+";",this.value[i+1]&&(n+=`
`);return n}return this.key+" "+this.value+";"},a}(),me={"@charset":!0,"@import":!0,"@namespace":!0},Se={onCreateRule:function(t,r,e){return t in me?new Re(t,r,e):null}},K=[re,ae,fe,de,ve,ge,Se],be={process:!0},G={force:!0,process:!0},V=function(){function a(r){this.map={},this.raw={},this.index=[],this.counter=0,this.options=r,this.classes=r.classes,this.keyframes=r.keyframes}var t=a.prototype;return t.add=function(e,n,i){var s=this.options,u=s.parent,l=s.sheet,o=s.jss,f=s.Renderer,h=s.generateId,y=s.scoped,d=p({classes:this.classes,parent:u,sheet:l,jss:o,Renderer:f,generateId:h,scoped:y,name:e,keyframes:this.keyframes,selector:void 0},i),c=e;e in this.raw&&(c=e+"-d"+this.counter++),this.raw[c]=n,c in this.classes&&(d.selector="."+T(this.classes[c]));var v=L(c,n,d);if(!v)return null;this.register(v);var x=d.index===void 0?this.index.length:d.index;return this.index.splice(x,0,v),v},t.replace=function(e,n,i){var s=this.get(e),u=this.index.indexOf(s);s&&this.remove(s);var l=i;return u!==-1&&(l=p({},i,{index:u})),this.add(e,n,l)},t.get=function(e){return this.map[e]},t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},t.indexOf=function(e){return this.index.indexOf(e)},t.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},t.register=function(e){this.map[e.key]=e,e instanceof I?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof O&&this.keyframes&&(this.keyframes[e.name]=e.id)},t.unregister=function(e){delete this.map[e.key],e instanceof I?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof O&&delete this.keyframes[e.name]},t.update=function(){var e,n,i;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(e=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],i=arguments.length<=2?void 0:arguments[2]):(n=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),n,i);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],n,i)},t.updateOne=function(e,n,i){i===void 0&&(i=be);var s=this.options,u=s.jss.plugins,l=s.sheet;if(e.rules instanceof a){e.rules.update(n,i);return}var o=e.style;if(u.onUpdate(n,e,l,i),i.process&&o&&o!==e.style){u.onProcessStyle(e.style,e,l);for(var f in e.style){var h=e.style[f],y=o[f];h!==y&&e.prop(f,h,G)}for(var d in o){var c=e.style[d],v=o[d];c==null&&c!==v&&e.prop(d,null,G)}}},t.toString=function(e){for(var n="",i=this.options.sheet,s=i?i.options.link:!1,u=g(e),l=u.linebreak,o=0;o<this.index.length;o++){var f=this.index[o],h=f.toString(e);!h&&!s||(n&&(n+=l),n+=h)}return n},a}(),H=function(){function a(r,e){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=p({},e,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),e.Renderer&&(this.renderer=new e.Renderer(this)),this.rules=new V(this.options);for(var n in r)this.rules.add(n,r[n]);this.rules.process()}var t=a.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(e,n,i){var s=this.queue;this.attached&&!s&&(this.queue=[]);var u=this.rules.add(e,n,i);return u?(this.options.jss.plugins.onProcessRule(u),this.attached?(this.deployed&&(s?s.push(u):(this.insertRule(u),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),u):(this.deployed=!1,u)):null},t.replaceRule=function(e,n,i){var s=this.rules.get(e);if(!s)return this.addRule(e,n,i);var u=this.rules.replace(e,n,i);return u&&this.options.jss.plugins.onProcessRule(u),this.attached?(this.deployed&&this.renderer&&(u?s.renderable&&this.renderer.replaceRule(s.renderable,u):this.renderer.deleteRule(s)),u):(this.deployed=!1,u)},t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},t.addRules=function(e,n){var i=[];for(var s in e){var u=this.addRule(s,e[s],n);u&&i.push(u)}return i},t.getRule=function(e){return this.rules.get(e)},t.deleteRule=function(e){var n=typeof e=="object"?e:this.rules.get(e);return!n||this.attached&&!n.renderable?!1:(this.rules.remove(n),this.attached&&n.renderable&&this.renderer?this.renderer.deleteRule(n.renderable):!0)},t.indexOf=function(e){return this.rules.indexOf(e)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},t.updateOne=function(e,n,i){return this.rules.updateOne(e,n,i),this},t.toString=function(e){return this.rules.toString(e)},a}(),xe=function(){function a(){this.plugins={internal:[],external:[]},this.registry={}}var t=a.prototype;return t.onCreateRule=function(e,n,i){for(var s=0;s<this.registry.onCreateRule.length;s++){var u=this.registry.onCreateRule[s](e,n,i);if(u)return u}return null},t.onProcessRule=function(e){if(!e.isProcessed){for(var n=e.options.sheet,i=0;i<this.registry.onProcessRule.length;i++)this.registry.onProcessRule[i](e,n);e.style&&this.onProcessStyle(e.style,e,n),e.isProcessed=!0}},t.onProcessStyle=function(e,n,i){for(var s=0;s<this.registry.onProcessStyle.length;s++)n.style=this.registry.onProcessStyle[s](n.style,n,i)},t.onProcessSheet=function(e){for(var n=0;n<this.registry.onProcessSheet.length;n++)this.registry.onProcessSheet[n](e)},t.onUpdate=function(e,n,i,s){for(var u=0;u<this.registry.onUpdate.length;u++)this.registry.onUpdate[u](e,n,i,s)},t.onChangeValue=function(e,n,i){for(var s=e,u=0;u<this.registry.onChangeValue.length;u++)s=this.registry.onChangeValue[u](s,n,i);return s},t.use=function(e,n){n===void 0&&(n={queue:"external"});var i=this.plugins[n.queue];i.indexOf(e)===-1&&(i.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,u){for(var l in u)l in s&&s[l].push(u[l]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},a}(),ke=function(){function a(){this.registry=[]}var t=a.prototype;return t.add=function(e){var n=this.registry,i=e.options.index;if(n.indexOf(e)===-1){if(n.length===0||i>=this.index){n.push(e);return}for(var s=0;s<n.length;s++)if(n[s].options.index>i){n.splice(s,0,e);return}}},t.reset=function(){this.registry=[]},t.remove=function(e){var n=this.registry.indexOf(e);this.registry.splice(n,1)},t.toString=function(e){for(var n=e===void 0?{}:e,i=n.attached,s=Y(n,["attached"]),u=g(s),l=u.linebreak,o="",f=0;f<this.registry.length;f++){var h=this.registry[f];i!=null&&h.attached!==i||(o&&(o+=l),o+=h.toString(s))}return o},B(a,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),a}(),S=new ke,A=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),_="2f1acc6c3a606b082e5eef5e54414ffb";A[_]==null&&(A[_]=0);var U=A[_]++,W=function(t){t===void 0&&(t={});var r=0,e=function(i,s){r+=1;var u="",l="";return s&&(s.options.classNamePrefix&&(l=s.options.classNamePrefix),s.options.jss.id!=null&&(u=String(s.options.jss.id))),t.minify?""+(l||"c")+U+u+r:l+i.key+"-"+U+(u?"-"+u:"")+"-"+r};return e},Q=function(t){var r;return function(){return r||(r=t()),r}},Ce=function(t,r){try{return t.attributeStyleMap?t.attributeStyleMap.get(r):t.style.getPropertyValue(r)}catch{return""}},Pe=function(t,r,e){try{var n=e;if(Array.isArray(e)&&(n=m(e)),t.attributeStyleMap)t.attributeStyleMap.set(r,n);else{var i=n?n.indexOf("!important"):-1,s=i>-1?n.substr(0,i-1):n;t.style.setProperty(r,s,i>-1?"important":"")}}catch{return!1}return!0},we=function(t,r){try{t.attributeStyleMap?t.attributeStyleMap.delete(r):t.style.removeProperty(r)}catch{}},Ie=function(t,r){return t.selectorText=r,t.selectorText===r},X=Q(function(){return document.querySelector("head")});function Oe(a,t){for(var r=0;r<a.length;r++){var e=a[r];if(e.attached&&e.options.index>t.index&&e.options.insertionPoint===t.insertionPoint)return e}return null}function je(a,t){for(var r=a.length-1;r>=0;r--){var e=a[r];if(e.attached&&e.options.insertionPoint===t.insertionPoint)return e}return null}function Ae(a){for(var t=X(),r=0;r<t.childNodes.length;r++){var e=t.childNodes[r];if(e.nodeType===8&&e.nodeValue.trim()===a)return e}return null}function _e(a){var t=S.registry;if(t.length>0){var r=Oe(t,a);if(r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element};if(r=je(t,a),r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element.nextSibling}}var e=a.insertionPoint;if(e&&typeof e=="string"){var n=Ae(e);if(n)return{parent:n.parentNode,node:n.nextSibling}}return!1}function Te(a,t){var r=t.insertionPoint,e=_e(t);if(e!==!1&&e.parent){e.parent.insertBefore(a,e.node);return}if(r&&typeof r.nodeType=="number"){var n=r,i=n.parentNode;i&&i.insertBefore(a,n.nextSibling);return}X().appendChild(a)}var Ve=Q(function(){var a=document.querySelector('meta[property="csp-nonce"]');return a?a.getAttribute("content"):null}),J=function(t,r,e){try{"insertRule"in t?t.insertRule(r,e):"appendRule"in t&&t.appendRule(r)}catch{return!1}return t.cssRules[e]},F=function(t,r){var e=t.cssRules.length;return r===void 0||r>e?e:r},qe=function(){var t=document.createElement("style");return t.textContent=`
`,t},Ee=function(){function a(r){this.getPropertyValue=Ce,this.setProperty=Pe,this.removeProperty=we,this.setSelector=Ie,this.hasInsertedRules=!1,this.cssRules=[],r&&S.add(r),this.sheet=r;var e=this.sheet?this.sheet.options:{},n=e.media,i=e.meta,s=e.element;this.element=s||qe(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),i&&this.element.setAttribute("data-meta",i);var u=Ve();u&&this.element.setAttribute("nonce",u)}var t=a.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){Te(this.element,this.sheet.options);var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent=`
`+e.toString()+`
`}},t.insertRules=function(e,n){for(var i=0;i<e.index.length;i++)this.insertRule(e.index[i],i,n)},t.insertRule=function(e,n,i){if(i===void 0&&(i=this.element.sheet),e.rules){var s=e,u=i;if(e.type==="conditional"||e.type==="keyframes"){var l=F(i,n);if(u=J(i,s.toString({children:!1}),l),u===!1)return!1;this.refCssRule(e,l,u)}return this.insertRules(s.rules,u),u}var o=e.toString();if(!o)return!1;var f=F(i,n),h=J(i,o,f);return h===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(e,f,h),h)},t.refCssRule=function(e,n,i){e.renderable=i,e.options.parent instanceof H&&this.cssRules.splice(n,0,i)},t.deleteRule=function(e){var n=this.element.sheet,i=this.indexOf(e);return i===-1?!1:(n.deleteRule(i),this.cssRules.splice(i,1),!0)},t.indexOf=function(e){return this.cssRules.indexOf(e)},t.replaceRule=function(e,n){var i=this.indexOf(e);return i===-1?!1:(this.element.sheet.deleteRule(i),this.cssRules.splice(i,1),this.insertRule(n,i))},t.getRules=function(){return this.element.sheet.cssRules},a}(),Me=0,Ne=function(){function a(r){this.id=Me++,this.version="10.10.0",this.plugins=new xe,this.options={id:{minify:!1},createGenerateId:W,Renderer:Z?Ee:null,plugins:[]},this.generateId=W({minify:!1});for(var e=0;e<K.length;e++)this.plugins.use(K[e],{queue:"internal"});this.setup(r)}var t=a.prototype;return t.setup=function(e){return e===void 0&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=p({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),e.insertionPoint!=null&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},t.createStyleSheet=function(e,n){n===void 0&&(n={});var i=n,s=i.index;typeof s!="number"&&(s=S.index===0?0:S.index+1);var u=new H(e,p({},n,{jss:this,generateId:n.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(u),u},t.removeStyleSheet=function(e){return e.detach(),S.remove(e),this},t.createRule=function(e,n,i){if(n===void 0&&(n={}),i===void 0&&(i={}),typeof e=="object")return this.createRule(void 0,e,n);var s=p({},i,{name:e,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var u=L(e,n,s);return u&&this.plugins.onProcessRule(u),u},t.use=function(){for(var e=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.forEach(function(u){e.plugins.use(u)}),this},a}(),$e=function(t){return new Ne(t)},We=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Ke(a){var t=null;for(var r in a){var e=a[r],n=typeof e;if(n==="function")t||(t={}),t[r]=e;else if(n==="object"&&e!==null&&!Array.isArray(e)){var i=Ke(e);i&&(t||(t={}),t[r]=i)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */$e();export{V as R,L as a,$e as c,Ke as g,We as h,m as t};
