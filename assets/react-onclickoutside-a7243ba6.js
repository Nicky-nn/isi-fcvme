import{r as m}from"./react-19ede8c0.js";import{r as y}from"./react-dom-308b05ff.js";function E(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,O(e,n)}function O(e,n){return O=Object.setPrototypeOf||function(s,u){return s.__proto__=u,s},O(e,n)}function C(e,n){if(e==null)return{};var r={},s=Object.keys(e),u,c;for(c=0;c<s.length;c++)u=s[c],!(n.indexOf(u)>=0)&&(r[u]=e[u]);return r}function _(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n,r){return e===n?!0:e.correspondingElement?e.correspondingElement.classList.contains(r):e.classList.contains(r)}function b(e,n,r){if(e===n)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&g(e,n,r))return!0;e=e.parentNode||e.host}return e}function P(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY}var w=function(){if(!(typeof window>"u"||typeof window.addEventListener!="function")){var n=!1,r=Object.defineProperty({},"passive",{get:function(){n=!0}}),s=function(){};return window.addEventListener("testPassiveEventSupport",s,r),window.removeEventListener("testPassiveEventSupport",s,r),n}};function N(e){return e===void 0&&(e=0),function(){return++e}}var R=N(),v,l={},h={},I=["touchstart","touchmove"],S="ignore-react-onclickoutside";function k(e,n){var r={},s=I.indexOf(n)!==-1;return s&&v&&(r.passive=!e.props.preventDefault),r}function H(e,n){var r,s,u=e.displayName||e.name||"Component";return s=r=function(c){E(p,c);function p(a){var t;return t=c.call(this,a)||this,t.__outsideClickHandler=function(i){if(typeof t.__clickOutsideHandlerProp=="function"){t.__clickOutsideHandlerProp(i);return}var o=t.getInstance();if(typeof o.props.handleClickOutside=="function"){o.props.handleClickOutside(i);return}if(typeof o.handleClickOutside=="function"){o.handleClickOutside(i);return}throw new Error("WrappedComponent: "+u+" lacks a handleClickOutside(event) function for processing outside click events.")},t.__getComponentNode=function(){var i=t.getInstance();return n&&typeof n.setClickOutsideRef=="function"?n.setClickOutsideRef()(i):typeof i.setClickOutsideRef=="function"?i.setClickOutsideRef():y.findDOMNode(i)},t.enableOnClickOutside=function(){if(!(typeof document>"u"||h[t._uid])){typeof v>"u"&&(v=w()),h[t._uid]=!0;var i=t.props.eventTypes;i.forEach||(i=[i]),l[t._uid]=function(o){if(t.componentNode!==null&&(t.props.preventDefault&&o.preventDefault(),t.props.stopPropagation&&o.stopPropagation(),!(t.props.excludeScrollbar&&P(o)))){var f=o.composed&&o.composedPath&&o.composedPath().shift()||o.target;b(f,t.componentNode,t.props.outsideClickIgnoreClass)===document&&t.__outsideClickHandler(o)}},i.forEach(function(o){document.addEventListener(o,l[t._uid],k(_(t),o))})}},t.disableOnClickOutside=function(){delete h[t._uid];var i=l[t._uid];if(i&&typeof document<"u"){var o=t.props.eventTypes;o.forEach||(o=[o]),o.forEach(function(f){return document.removeEventListener(f,i,k(_(t),f))}),delete l[t._uid]}},t.getRef=function(i){return t.instanceRef=i},t._uid=R(),t}var d=p.prototype;return d.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},d.componentDidMount=function(){if(!(typeof document>"u"||!document.createElement)){var t=this.getInstance();if(n&&typeof n.handleClickOutside=="function"&&(this.__clickOutsideHandlerProp=n.handleClickOutside(t),typeof this.__clickOutsideHandlerProp!="function"))throw new Error("WrappedComponent: "+u+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),!this.props.disableOnClickOutside&&this.enableOnClickOutside()}},d.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},d.componentWillUnmount=function(){this.disableOnClickOutside()},d.render=function(){var t=this.props;t.excludeScrollbar;var i=C(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?i.ref=this.getRef:i.wrappedRef=this.getRef,i.disableOnClickOutside=this.disableOnClickOutside,i.enableOnClickOutside=this.enableOnClickOutside,m.createElement(e,i)},p}(m.Component),r.displayName="OnClickOutside("+u+")",r.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:n&&n.excludeScrollbar||!1,outsideClickIgnoreClass:S,preventDefault:!1,stopPropagation:!1},r.getClass=function(){return e.getClass?e.getClass():e},s}export{H as o};
