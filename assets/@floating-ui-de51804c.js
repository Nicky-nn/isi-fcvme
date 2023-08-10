const $=Math.min,_=Math.max,R=Math.round,E=Math.floor,x=t=>({x:t,y:t});function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function B(t){return V(t)?(t.nodeName||"").toLowerCase():"#document"}function m(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(V(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function V(t){return t instanceof Node||t instanceof m(t).Node}function O(t){return t instanceof Element||t instanceof m(t).Element}function S(t){return t instanceof HTMLElement||t instanceof m(t).HTMLElement}function A(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof m(t).ShadowRoot}function H(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function U(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function k(t){return["html","body","#document"].includes(B(t))}function T(t){return m(t).getComputedStyle(t)}function K(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||A(t)&&t.host||I(t);return A(e)?e.host:e}function W(t){const e=K(t);return k(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&H(e)?e:W(e)}function N(t,e){var n;e===void 0&&(e=[]);const o=W(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=m(o);return i?e.concat(s,s.visualViewport||[],H(o)?o:[]):e.concat(o,N(o))}function X(t){const e=T(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=S(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,f=R(n)!==s||R(o)!==r;return f&&(n=s,o=r),{width:n,height:o,$:f}}function D(t){return O(t)?t:t.contextElement}function L(t){const e=D(t);if(!S(e))return x(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=X(e);let r=(s?R(n.width):n.width)/o,f=(s?R(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!f||!Number.isFinite(f))&&(f=1),{x:r,y:f}}const Y=x(0);function j(t){const e=m(t);return!U()||!e.visualViewport?Y:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function G(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==m(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=D(t);let r=x(1);e&&(o?O(o)&&(r=L(o)):r=L(t));const f=G(s,n,o)?j(s):x(0);let d=(i.left+f.x)/r.x,l=(i.top+f.y)/r.y,w=i.width/r.x,v=i.height/r.y;if(s){const g=m(s),a=o&&O(o)?m(o):o;let h=g.frameElement;for(;h&&o&&a!==g;){const u=L(h),p=h.getBoundingClientRect(),c=T(h),y=p.left+(h.clientLeft+parseFloat(c.paddingLeft))*u.x,b=p.top+(h.clientTop+parseFloat(c.paddingTop))*u.y;d*=u.x,l*=u.y,w*=u.x,v*=u.y,d+=y,l+=b,h=m(h).frameElement}}return q({width:w,height:v,x:d,y:l})}function J(t,e){let n=null,o;const i=I(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(f,d){f===void 0&&(f=!1),d===void 0&&(d=1),s();const{left:l,top:w,width:v,height:g}=t.getBoundingClientRect();if(f||e(),!v||!g)return;const a=E(w),h=E(i.clientWidth-(l+v)),u=E(i.clientHeight-(w+g)),p=E(l),y={rootMargin:-a+"px "+-h+"px "+-u+"px "+-p+"px",threshold:_(0,$(1,d))||1};let b=!0;function F(M){const C=M[0].intersectionRatio;if(C!==d){if(!b)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(F,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(F,y)}n.observe(t)}return r(!0),s}function Q(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,l=D(t),w=i||s?[...l?N(l):[],...N(e)]:[];w.forEach(c=>{i&&c.addEventListener("scroll",n,{passive:!0}),s&&c.addEventListener("resize",n)});const v=l&&f?J(l,n):null;let g=-1,a=null;r&&(a=new ResizeObserver(c=>{let[y]=c;y&&y.target===l&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),l&&!d&&a.observe(l),a.observe(e));let h,u=d?z(t):null;d&&p();function p(){const c=z(t);u&&(c.x!==u.x||c.y!==u.y||c.width!==u.width||c.height!==u.height)&&n(),u=c,h=requestAnimationFrame(p)}return n(),()=>{w.forEach(c=>{i&&c.removeEventListener("scroll",n),s&&c.removeEventListener("resize",n)}),v&&v(),a&&a.disconnect(),a=null,d&&cancelAnimationFrame(h)}}export{Q as a};
