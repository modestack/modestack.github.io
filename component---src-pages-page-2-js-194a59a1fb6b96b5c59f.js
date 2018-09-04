webpackJsonp([0xc6c285f8fd10],{46:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;v.hasOwnProperty(e)&&p("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&p("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function i(t,n){if(n){p("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),p(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&_.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var s=n[a],u=o.hasOwnProperty(a);if(r(u,a),_.hasOwnProperty(a))_[a](t,s);else{var l=N.hasOwnProperty(a),m="function"==typeof s,d=m&&!l&&!u&&n.autobind!==!1;if(d)i.push(a,s),o[a]=s;else if(u){var h=N[a];p(l&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,a),"DEFINE_MANY_MERGED"===h?o[a]=f(o[a],s):"DEFINE_MANY"===h&&(o[a]=y(o[a],s))}else o[a]=s}}}else;}function u(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in _;p(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;p(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=o}}}function l(t,e){p(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(p(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return l(r,n),l(r,o),r}}function y(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=m(t,r)}}function h(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;p("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new I,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(i.bind(null,e)),i(e,D),i(e,t),i(e,g),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),p(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var E=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)i(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=a({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=a({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=a({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},I=function(){};return a(I.prototype,t.prototype,v),h}var i,a=n(3),s=n(15),p=n(1),c="mixins";i={},t.exports=r},162:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,c=p&&p(Object);t.exports=function t(e,u,l){if("string"!=typeof u){if(c){var f=p(u);f&&f!==c&&t(e,f,l)}var y=i(u);a&&(y=y.concat(a(u)));for(var m=0;m<y.length;++m){var d=y[m];if(!(n[d]||o[d]||l&&l[d])){var h=s(u,d);try{r(e,d,h)}catch(t){}}}return e}return e}},221:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(5),i=o(r),a=n(315),s=o(a),p=function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Hi from the second page"),i.default.createElement("p",null,"Welcome to page 2"),i.default.createElement(s.default,{to:"/"},"Go back to the homepage"))};e.default=p,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-page-2-js-194a59a1fb6b96b5c59f.js.map