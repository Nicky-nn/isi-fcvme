import{g as p,s as y,a as m}from"./react-hook-form-f9fec52a.js";var v=function(e,r,o){if(e&&"reportValidity"in e){var n=p(o,r);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},h=function(e,r){var o=function(s){var t=r.fields[s];t&&t.ref&&"reportValidity"in t.ref?v(t.ref,s,e):t.refs&&t.refs.forEach(function(u){return v(u,s,e)})};for(var n in r.fields)o(n)},g=function(e,r){r.shouldUseNativeValidation&&h(e,r);var o={};for(var n in e){var s=p(r.fields,n);y(o,n,Object.assign(e[n]||{},{ref:s&&s.ref}))}return o};function x(e,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),function(n,s,t){try{return Promise.resolve(function(u,d){try{var c=(r.context,Promise.resolve(e[o.mode==="sync"?"validateSync":"validate"](n,Object.assign({abortEarly:!1},r,{context:s}))).then(function(i){return t.shouldUseNativeValidation&&h({},t),{values:o.raw?n:i,errors:{}}}))}catch(i){return d(i)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:g((d=u,c=!t.shouldUseNativeValidation&&t.criteriaMode==="all",(d.inner||[]).reduce(function(i,a){if(i[a.path]||(i[a.path]={message:a.message,type:a.type}),c){var f=i[a.path].types,l=f&&f[a.type];i[a.path]=m(a.path,c,i,a.type,l?[].concat(l,a.message):a.message)}return i},{})),t)};var d,c}))}catch(u){return Promise.reject(u)}}}export{x as o};
