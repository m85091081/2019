/*! For license information please see LICENSES */
webpackJsonp([12],{"/62D":function(t,e,r){var n=r("OFmb");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("379130c5",n,!1,{sourceMap:!1})},"1vwL":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".card[data-v-f883d62a]{background-color:hsla(0,0%,100%,.9);-webkit-box-shadow:0 4px 48px rgba(0,0,0,.1);box-shadow:0 4px 48px rgba(0,0,0,.1);margin:0 1em 2em;padding:2em}",""])},"4Z5m":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,'.ratio-box[data-v-75231e1b]{width:100%;position:relative}.ratio-box[data-v-75231e1b]:before{content:"";display:block;padding-top:100%;padding-top:var(--ratio)}.ratio-box>.content[data-v-75231e1b]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},"9O0X":function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratio-box",style:{"--ratio":this.cssRatio}},[e("div",this._b({staticClass:"content"},"div",this.$attrs,!1),[this._t("default")],2)])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},BX70:function(t,e,r){"use strict";var n=r("Ntfk"),o=!1;var i=function(t){o||r("vyaG")},a=r("VU/8")(null,n.a,!1,i,"data-v-f883d62a",null);a.options.__file="components/Card.vue",e.a=a.exports},CRY7:function(t,e,r){"use strict";var n=r("rP1L"),o=r("9O0X"),i=!1;var a=function(t){i||r("fb44")},s=r("VU/8")(n.a,o.a,!1,a,"data-v-75231e1b",null);s.options.__file="components/RatioBox.vue",e.a=s.exports},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,s={__proto__:[]}instanceof Array,c=!a&&!s,u={create:a?function(){return z(Object.create(null))}:s?function(){return z({__proto__:null})}:function(){return z({})},has:c?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:c?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},f=Object.getPrototypeOf(Function),p="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,l=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,h=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new l}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,d=new(p||"function"!=typeof WeakMap?function(){var t=16,e=u.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&u.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?u.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+s()}while(u.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:u.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function s(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function v(t,e,r){var n=d.get(t);if(g(n)){if(!r)return;n=new l,d.set(t,n)}var o=n.get(e);if(g(o)){if(!r)return;o=new l,n.set(e,o)}return o}function y(t,e,r){var n=v(e,r,!1);return!g(n)&&function(t){return!!t}(n.has(t))}function b(t,e,r){var n=v(e,r,!1);if(!g(n))return n.get(t)}function _(t,e,r,n){var o=v(r,n,!0);o.set(t,e)}function m(t,e){var r=[],n=v(t,e,!1);if(g(n))return r;for(var o=n.keys(),a=function(t){var e=A(t,i);if(!E(e))throw new TypeError;var r=e.call(t);if(!O(r))throw new TypeError;return r}(o),s=0;;){var c=R(a);if(!c)return r.length=s,r;var u=M(c);try{r[s]=u}catch(t){try{S(a)}finally{throw t}}s++}}function w(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function g(t){return void 0===t}function x(t){return null===t}function O(t){return"object"==typeof t?null!==t:"function"==typeof t}function k(t,e){switch(w(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=A(t,o);if(void 0!==n){var i=n.call(t,r);if(O(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(E(r)){var n=r.call(t);if(!O(n))return n}var o=t.valueOf;if(E(o)){var n=o.call(t);if(!O(n))return n}}else{var o=t.valueOf;if(E(o)){var n=o.call(t);if(!O(n))return n}var i=t.toString;if(E(i)){var n=i.call(t);if(!O(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function j(t){var e=k(t,3);return function(t){return"symbol"==typeof t}(e)?e:function(t){return""+t}(e)}function P(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function E(t){return"function"==typeof t}function T(t){return"function"==typeof t}function A(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!E(r))throw new TypeError;return r}}function M(t){return t.value}function R(t){var e=t.next();return!e.done&&e}function S(t){var e=t.return;e&&e.call(t)}function C(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===f)return e;if(e!==f)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function z(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(g(r)){if(!P(t))throw new TypeError;if(!T(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!g(o)&&!x(o)){if(!T(o))throw new TypeError;e=o}}return e}(t,e)}if(!P(t))throw new TypeError;if(!O(e))throw new TypeError;if(!O(n)&&!g(n)&&!x(n))throw new TypeError;return x(n)&&(n=void 0),r=j(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!g(a)&&!x(a)){if(!O(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!O(r))throw new TypeError;if(!g(n)&&!function(t){switch(w(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;_(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!O(r))throw new TypeError;g(n)||(n=j(n));return _(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!O(e))throw new TypeError;g(r)||(r=j(r));return function t(e,r,n){var o=y(e,r,n);if(o)return!0;var i=C(r);if(!x(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;g(r)||(r=j(r));return y(t,e,r)}),e("getMetadata",function(t,e,r){if(!O(e))throw new TypeError;g(r)||(r=j(r));return function t(e,r,n){var o=y(e,r,n);if(o)return b(e,r,n);var i=C(r);if(!x(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;g(r)||(r=j(r));return b(t,e,r)}),e("getMetadataKeys",function(t,e){if(!O(t))throw new TypeError;g(e)||(e=j(e));return function t(e,r){var n=m(e,r);var o=C(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new h;var s=[];for(var c=0,u=n;c<u.length;c++){var f=u[c],p=a.has(f);p||(a.add(f),s.push(f))}for(var l=0,d=i;l<d.length;l++){var f=d[l],p=a.has(f);p||(a.add(f),s.push(f))}return s}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!O(t))throw new TypeError;g(e)||(e=j(e));return m(t,e)}),e("deleteMetadata",function(t,e,r){if(!O(e))throw new TypeError;g(r)||(r=j(r));var n=v(e,r,!1);if(g(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=d.get(e);return o.delete(r),o.size>0||(d.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},Ntfk:function(t,e,r){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"card"},[this._t("default")],2)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},OFmb:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"main.sponsors[data-v-261e8992]{width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:2em}main.sponsors[data-v-261e8992],main.sponsors div.sponsors[data-v-261e8992]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}main.sponsors div.sponsors[data-v-261e8992]{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.sponsors .sponsor[data-v-261e8992]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;margin:.5em 0}.sponsors .sponsor .description[data-v-261e8992]{-ms-flex-preferred-size:80%;flex-basis:80%;padding:0}.sponsors .sponsor .description h1[data-v-261e8992]{font-size:1.2em}.sponsors .sponsor .logo[data-v-261e8992]{-ms-flex-preferred-size:20%;flex-basis:20%}.sponsors .sponsor .logo img[data-v-261e8992]{max-height:100%;max-width:100%;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}@media(min-width:840px){.sponsors .sponsor[data-v-261e8992]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:1em;-webkit-transition:-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1);transition:-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1)}.sponsors .sponsor[data-v-261e8992]:hover{-webkit-box-shadow:0 2px 24px rgba(0,0,0,.1);box-shadow:0 2px 24px rgba(0,0,0,.1);-webkit-transform:translateY(-2px);transform:translateY(-2px)}.sponsors .sponsor .description[data-v-261e8992]{padding:0 1em}}",""])},Qjbo:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("gWcH"),o=r("beEq"),i=!1;var a=function(t){i||r("/62D")},s=r("VU/8")(n.a,o.a,!1,a,"data-v-261e8992",null);s.options.__file="pages/sponsors.vue",e.default=s.exports},"Z+Jb":function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a}),e.c=function(t,e){function r(e){return function(r,n){if("string"==typeof n){var o=n,i=r;return e(o,{namespace:t})(i,o)}var a=r,s=function(t,e){var r={};return[t,e].forEach(function(t){Object.keys(t).forEach(function(e){r[e]=t[e]})}),r}(n||{},{namespace:t});return e(a,s)}}if(e)return console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),r(e);return{State:r(i),Getter:r(a),Mutation:r(c),Action:r(s)}};var n=r("c+8m"),o=(r.n(n),r("NYxO")),i=u("computed",o.mapState),a=u("computed",o.mapGetters),s=u("methods",o.mapActions),c=u("methods",o.mapMutations);function u(t,e){function r(r,o){return Object(n.createDecorator)(function(n,i){n[t]||(n[t]={});var a,s=((a={})[i]=r,a);n[t][i]=void 0!==o?e(o,s)[i]:e(s)[i]})}return function(t,e){if("string"==typeof e){var n=e,o=t;return r(n,void 0)(o,n)}return r(t,function(t){var e=t&&t.namespace;if("string"==typeof e)return"/"!==e[e.length-1]?e+"/":e}(e))}}},beEq:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"sponsors"},[r("Card",{staticClass:"container"},[r("h1",[t._v(t._s(t.$t("sponsorship.call_for_sponsorship")))]),t._v("\n  "+t._s(t.$t("sponsorship.contact"))+" "),r("a",{attrs:{href:"mailto:"+t.sponsorship.contact.email}},[t._v(t._s(t.sponsorship.contact.email))])]),t._l(t.sponsorsByLevel,function(e){return r("Card",{key:e.title,staticClass:"level container"},[r("h1",[t._v(t._s(e.title))]),r("div",{staticClass:"sponsors"},t._l(e.sponsors,function(e){return r("div",{key:e.name,staticClass:"sponsor"},[r("a",{staticClass:"logo",attrs:{href:e.link,title:e.name,target:"_blank"}},[r("RatioBox",{staticStyle:{"text-align":"center"},attrs:{ratio:"1:1"}},[r("img",{attrs:{src:e.image,alt:""}})])],1),r("div",{staticClass:"description"},[r("h1",[r("a",{attrs:{href:e.link,title:e.name,target:"_blank"}},[t._v(t._s(e.name))])]),r("article",t._l(t.getParagraphs(e.intro),function(e,n){return r("p",{key:n},[t._v("\n              "+t._s(e)+"\n            ")])}))])])}))])})],2)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&"object"==typeof t&&"default"in t?t.default:t}(r("/5sW")),o={__proto__:[]}instanceof Array;var i=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function a(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(i.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){return t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var a=t.__decorators__;a&&(a.forEach(function(t){return t(e)}),delete t.__decorators__);var s=Object.getPrototypeOf(t.prototype),c=s instanceof n?s.constructor:n,u=c.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var i=Object.getOwnPropertyDescriptor(t,n);if(!i||i.configurable){var a=Object.getOwnPropertyDescriptor(e,n);if(!o){if("cid"===n)return;var s=Object.getOwnPropertyDescriptor(r,n);if(!function(t){var e=typeof t;return null==t||"object"!==e&&"function"!==e}(a.value)&&s&&s.value===a.value)return}0,Object.defineProperty(t,n,a)}}})}(u,t,c),u}function s(t){return"function"==typeof t?a(t):function(e){return a(e,t)}}!function(t){t.registerHooks=function(t){i.push.apply(i,t)}}(s||(s={}));var c=s;e.default=c,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.extend({mixins:t})}},fb44:function(t,e,r){var n=r("4Z5m");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("cb0646be",n,!1,{sourceMap:!1})},gWcH:function(t,e,r){"use strict";var n=r("qPzS"),o=(r.n(n),r("ipus")),i=r("nbOY"),a=r("RUnj"),s=r("BX70"),c=r("CRY7"),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},p=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,s)}c((n=n.apply(t,e||[])).next())})},l=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},h=Object(o.c)(i.name,o.b),d=Object(o.c)(a.name,o.a),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},e.prototype.fetch=function(t){var e=t.store.dispatch;return p(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,e(a.name+"/fetchData")];case 1:return t.sent(),[2]}})})},e.prototype.getParagraphs=function(t){return t.split(/\r\n?|\n\r?/g)},f([h],e.prototype,"sponsorship",void 0),f([d("byLevel")],e.prototype,"sponsorsByLevel",void 0),e=f([Object(n.Component)({components:{Card:s.a,RatioBox:c.a}})],e)}(n.Vue);e.a=v},ipus:function(t,e,r){"use strict";var n=r("Z+Jb");r.d(e,"b",function(){return n.b}),r.d(e,"a",function(){return n.a}),r.d(e,"c",function(){return n.c})},qPzS:function(t,e,r){!function(t,n){n(e,r("/5sW"),r("c+8m"),r("I8yv"))}(0,function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})},rP1L:function(t,e,r){"use strict";var n=r("qPzS"),o=(r.n(n),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),i=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},a=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"cssRatio",{get:function(){var t=this.$props.ratio,e=a(t.split(":"),2),r=e[0],n=e[1];return 100*Number(void 0===n?1:n)/Number(r)+"%"},enumerable:!0,configurable:!0}),e=i([Object(n.Component)({inheritAttrs:!1,props:{ratio:{type:String,required:!0}}})],e)}(n.Vue);e.a=s},vyaG:function(t,e,r){var n=r("1vwL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("5e52b9cb",n,!1,{sourceMap:!1})}});