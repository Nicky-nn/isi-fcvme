import{e as y}from"./@babel-41a3dc83.js";var v={exports:{}};v.exports=function(n){return g(d(n),n)};v.exports.array=g;function g(n,r){var t=n.length,e=new Array(t),o={},u=t,c=E(r),f=k(n);for(r.forEach(function(a){if(!f.has(a[0])||!f.has(a[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});u--;)o[u]||l(n[u],u,new Set);return e;function l(a,s,i){if(i.has(a)){var w;try{w=", node was:"+JSON.stringify(a)}catch{w=""}throw new Error("Cyclic dependency"+w)}if(!f.has(a))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(a));if(!o[s]){o[s]=!0;var h=c.get(a)||new Set;if(h=Array.from(h),s=h.length){i.add(a);do{var p=h[--s];l(p,f.get(p),i)}while(s);i.delete(a)}e[--t]=a}}}function d(n){for(var r=new Set,t=0,e=n.length;t<e;t++){var o=n[t];r.add(o[0]),r.add(o[1])}return Array.from(r)}function E(n){for(var r=new Map,t=0,e=n.length;t<e;t++){var o=n[t];r.has(o[0])||r.set(o[0],new Set),r.has(o[1])||r.set(o[1],new Set),r.get(o[0]).add(o[1])}return r}function k(n){for(var r=new Map,t=0,e=n.length;t<e;t++)r.set(n[t],t);return r}var m=v.exports;const N=y(m);export{N as t};
