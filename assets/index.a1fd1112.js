(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ma(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function rp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),Pv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Mv=Symbol.for("react.lazy"),Uc=Symbol.iterator;function Lv(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function Or(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lp(){}lp.prototype=Or.prototype;function Cu(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}var Ou=Cu.prototype=new lp;Ou.constructor=Cu;op(Ou,Or.prototype);Ou.isPureReactComponent=!0;var Wc=Array.isArray,sp=Object.prototype.hasOwnProperty,Pu={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)sp.call(t,r)&&!up.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Di,type:e,key:o,ref:l,props:i,_owner:Pu.current}}function zv(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function jv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bc=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jv(""+e.key):t.toString(36)}function To(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Di:case Sv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+hl(l,0):r,Wc(i)?(n="",e!=null&&(n=e.replace(Bc,"$&/")+"/"),To(i,t,n,"",function(u){return u})):i!=null&&(Tu(i)&&(i=zv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Bc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Wc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+hl(o,a);l+=To(o,t,n,s,i)}else if(s=Lv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+hl(o,a++),l+=To(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qi(e,t,n){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Dv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Mo={transition:null},$v={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Pu};ue.Children={map:qi,forEach:function(e,t,n){qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qi(e,function(){t++}),t},toArray:function(e){return qi(e,function(t){return t})||[]},only:function(e){if(!Tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Or;ue.Fragment=kv;ue.Profiler=bv;ue.PureComponent=Cu;ue.StrictMode=Ev;ue.Suspense=Pv;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)sp.call(t,s)&&!up.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Di,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:Cv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_v,_context:e},e.Consumer=e};ue.createElement=cp;ue.createFactory=function(e){var t=cp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Ov,render:e}};ue.isValidElement=Tu;ue.lazy=function(e){return{$$typeof:Mv,_payload:{_status:-1,_result:e},_init:Dv}};ue.memo=function(e,t){return{$$typeof:Tv,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Xe.current.useCallback(e,t)};ue.useContext=function(e){return Xe.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Xe.current.useEffect(e,t)};ue.useId=function(){return Xe.current.useId()};ue.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Xe.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};ue.useRef=function(e){return Xe.current.useRef(e)};ue.useState=function(e){return Xe.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Xe.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const $i=Ma(K.exports);var as={},Mu={exports:{}},ut={},dp={exports:{}},fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var U=O.length;O.push(D);e:for(;0<U;){var V=U-1>>>1,H=O[V];if(0<i(H,D))O[V]=D,O[U]=H,U=V;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],U=O.pop();if(U!==D){O[0]=U;e:for(var V=0,H=O.length,E=H>>>1;V<E;){var q=2*(V+1)-1,F=O[q],M=q+1,J=O[M];if(0>i(F,U))M<H&&0>i(J,F)?(O[V]=J,O[M]=U,V=M):(O[V]=F,O[q]=U,V=q);else if(M<H&&0>i(J,U))O[V]=J,O[M]=U,V=M;else break e}}return D}function i(O,D){var U=O.sortIndex-D.sortIndex;return U!==0?U:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,d=null,f=3,h=!1,g=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function x(O){if(y=!1,v(O),!g)if(n(s)!==null)g=!0,Y(P);else{var D=n(u);D!==null&&z(x,D.startTime-O)}}function P(O,D){g=!1,y&&(y=!1,m(S),S=-1),h=!0;var U=f;try{for(v(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!R());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var H=V(d.expirationTime<=D);D=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(s)&&r(s),v(D)}else r(s);d=n(s)}if(d!==null)var E=!0;else{var q=n(u);q!==null&&z(x,q.startTime-D),E=!1}return E}finally{d=null,f=U,h=!1}}var T=!1,b=null,S=-1,L=5,j=-1;function R(){return!(e.unstable_now()-j<L)}function A(){if(b!==null){var O=e.unstable_now();j=O;var D=!0;try{D=b(!0,O)}finally{D?$():(T=!1,b=null)}}else T=!1}var $;if(typeof p=="function")$=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,$=function(){I.postMessage(null)}}else $=function(){k(A,0)};function Y(O){b=O,T||(T=!0,$())}function z(O,D){S=k(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Y(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var U=f;f=D;try{return O()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return D()}finally{f=U}},e.unstable_scheduleCallback=function(O,D,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,O){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,O={id:c++,callback:D,priorityLevel:O,startTime:U,expirationTime:H,sortIndex:-1},U>V?(O.sortIndex=U,t(u,O),n(s)===null&&O===n(u)&&(y?(m(S),S=-1):y=!0,z(x,U-V))):(O.sortIndex=H,t(s,O),g||h||(g=!0,Y(P))),O},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(O){var D=f;return function(){var U=f;f=D;try{return O.apply(this,arguments)}finally{f=U}}}})(fp);(function(e){e.exports=fp})(dp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=K.exports,st=dp.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hp=new Set,fi={};function Hn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(fi[e]=t,e=0;e<t.length;e++)hp.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=Object.prototype.hasOwnProperty,Rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vc={},Qc={};function Av(e){return ls.call(Qc,e)?!0:ls.call(Vc,e)?!1:Rv.test(e)?Qc[e]=!0:(Vc[e]=!0,!1)}function Nv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Iv(e,t,n,r){if(t===null||typeof t>"u"||Nv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lu,zu);He[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lu,zu);He[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lu,zu);He[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Iv(t,n,i,r)&&(n=null),r||i===null?Av(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),ss=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),us=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),gp=Symbol.for("react.offscreen"),qc=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,ml;function Gr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var vl=!1;function gl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Fv(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Yn:return"Portal";case ss:return"Profiler";case Du:return"StrictMode";case us:return"Suspense";case cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vp:return(e.displayName||"Context")+".Consumer";case mp:return(e._context.displayName||"Context")+".Provider";case $u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:ds(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return ds(e(t))}catch{}}return null}function Hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ds(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uv(e){var t=yp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=Uv(e))}function wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fs(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xp(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function ps(e,t){xp(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Xr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function Sp(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){Wv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function bp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function _p(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gs(e,t){if(t){if(Bv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,ur=null,cr=null;function Jc(e){if(e=Ni(e)){if(typeof xs!="function")throw Error(B(280));var t=e.stateNode;t&&(t=$a(t),xs(e.stateNode,e.type,t))}}function Cp(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Op(){if(ur){var e=ur,t=cr;if(cr=ur=null,Jc(e),t)for(e=0;e<t.length;e++)Jc(t[e])}}function Pp(e,t){return e(t)}function Tp(){}var yl=!1;function Mp(e,t,n){if(yl)return e(t,n);yl=!0;try{return Pp(e,t,n)}finally{yl=!1,(ur!==null||cr!==null)&&(Tp(),Op())}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var r=$a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Ss=!1;if(Vt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Ss=!1}function Vv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ei=!1,Wo=null,Bo=!1,ks=null,Qv={onError:function(e){ei=!0,Wo=e}};function qv(e,t,n,r,i,o,l,a,s){ei=!1,Wo=null,Vv.apply(Qv,arguments)}function Yv(e,t,n,r,i,o,l,a,s){if(qv.apply(this,arguments),ei){if(ei){var u=Wo;ei=!1,Wo=null}else throw Error(B(198));Bo||(Bo=!0,ks=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(Un(e)!==e)throw Error(B(188))}function Gv(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zc(i),e;if(o===r)return Zc(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function zp(e){return e=Gv(e),e!==null?jp(e):null}function jp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jp(e);if(t!==null)return t;e=e.sibling}return null}var Dp=st.unstable_scheduleCallback,ed=st.unstable_cancelCallback,Xv=st.unstable_shouldYield,Kv=st.unstable_requestPaint,Ce=st.unstable_now,Jv=st.unstable_getCurrentPriorityLevel,Nu=st.unstable_ImmediatePriority,$p=st.unstable_UserBlockingPriority,Vo=st.unstable_NormalPriority,Zv=st.unstable_LowPriority,Rp=st.unstable_IdlePriority,La=null,$t=null;function eg(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:rg,tg=Math.log,ng=Math.LN2;function rg(e){return e>>>=0,e===0?32:31-(tg(e)/ng|0)|0}var Ki=64,Ji=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Kr(a):(o&=l,o!==0&&(r=Kr(o)))}else l=n&~i,l!==0?r=Kr(l):o!==0&&(r=Kr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function ig(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function og(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-_t(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=ig(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ap(){var e=Ki;return Ki<<=1,(Ki&4194240)===0&&(Ki=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function ag(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Np(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ip,Fu,Fp,Hp,Up,bs=!1,Zi=[],sn=null,un=null,cn=null,mi=new Map,vi=new Map,nn=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function $r(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sg(e,t,n,r,i){switch(t){case"focusin":return sn=$r(sn,e,t,n,r,i),!0;case"dragenter":return un=$r(un,e,t,n,r,i),!0;case"mouseover":return cn=$r(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,$r(mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,$r(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Wp(e){var t=On(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Lp(n),t!==null){e.blockedOn=t,Up(e.priority,function(){Fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ws=r,n.target.dispatchEvent(r),ws=null}else return t=Ni(n),t!==null&&Fu(t),e.blockedOn=n,!1;t.shift()}return!0}function nd(e,t,n){Lo(e)&&n.delete(t)}function ug(){bs=!1,sn!==null&&Lo(sn)&&(sn=null),un!==null&&Lo(un)&&(un=null),cn!==null&&Lo(cn)&&(cn=null),mi.forEach(nd),vi.forEach(nd)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,ug)))}function gi(e){function t(i){return Rr(i,e)}if(0<Zi.length){Rr(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Rr(sn,e),un!==null&&Rr(un,e),cn!==null&&Rr(cn,e),mi.forEach(t),vi.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&nn.shift()}var dr=Gt.ReactCurrentBatchConfig,qo=!0;function cg(e,t,n,r){var i=fe,o=dr.transition;dr.transition=null;try{fe=1,Hu(e,t,n,r)}finally{fe=i,dr.transition=o}}function dg(e,t,n,r){var i=fe,o=dr.transition;dr.transition=null;try{fe=4,Hu(e,t,n,r)}finally{fe=i,dr.transition=o}}function Hu(e,t,n,r){if(qo){var i=_s(e,t,n,r);if(i===null)Tl(e,t,r,Yo,n),td(e,r);else if(sg(i,e,t,n,r))r.stopPropagation();else if(td(e,r),t&4&&-1<lg.indexOf(e)){for(;i!==null;){var o=Ni(i);if(o!==null&&Ip(o),o=_s(e,t,n,r),o===null&&Tl(e,t,r,Yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var Yo=null;function _s(e,t,n,r){if(Yo=null,e=Au(r),e=On(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function Bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case Nu:return 1;case $p:return 4;case Vo:case Zv:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var on=null,Uu=null,zo=null;function Vp(){if(zo)return zo;var e,t=Uu,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function rd(){return!1}function ct(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:rd,this.isPropagationStopped=rd,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=ct(Pr),Ai=be({},Pr,{view:0,detail:0}),fg=ct(Ai),xl,Sl,Ar,za=be({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(xl=e.screenX-Ar.screenX,Sl=e.screenY-Ar.screenY):Sl=xl=0,Ar=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),id=ct(za),pg=be({},za,{dataTransfer:0}),hg=ct(pg),mg=be({},Ai,{relatedTarget:0}),kl=ct(mg),vg=be({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=ct(vg),yg=be({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wg=ct(yg),xg=be({},Pr,{data:0}),od=ct(xg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function Bu(){return bg}var _g=be({},Ai,{key:function(e){if(e.key){var t=Sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=ct(_g),Og=be({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=ct(Og),Pg=be({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),Tg=ct(Pg),Mg=be({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=ct(Mg),zg=be({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=ct(zg),Dg=[9,13,27,32],Vu=Vt&&"CompositionEvent"in window,ti=null;Vt&&"documentMode"in document&&(ti=document.documentMode);var $g=Vt&&"TextEvent"in window&&!ti,Qp=Vt&&(!Vu||ti&&8<ti&&11>=ti),ld=String.fromCharCode(32),sd=!1;function qp(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Rg(e,t){switch(e){case"compositionend":return Yp(t);case"keypress":return t.which!==32?null:(sd=!0,ld);case"textInput":return e=t.data,e===ld&&sd?null:e;default:return null}}function Ag(e,t){if(Xn)return e==="compositionend"||!Vu&&qp(e,t)?(e=Vp(),zo=Uu=on=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qp&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function Gp(e,t,n,r){Cp(r),t=Go(t,"onChange"),0<t.length&&(n=new Wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ni=null,yi=null;function Ig(e){ah(e,0)}function ja(e){var t=Zn(e);if(wp(t))return e}function Fg(e,t){if(e==="change")return t}var Xp=!1;if(Vt){var El;if(Vt){var bl="oninput"in document;if(!bl){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),bl=typeof cd.oninput=="function"}El=bl}else El=!1;Xp=El&&(!document.documentMode||9<document.documentMode)}function dd(){ni&&(ni.detachEvent("onpropertychange",Kp),yi=ni=null)}function Kp(e){if(e.propertyName==="value"&&ja(yi)){var t=[];Gp(t,yi,e,Au(e)),Mp(Ig,t)}}function Hg(e,t,n){e==="focusin"?(dd(),ni=t,yi=n,ni.attachEvent("onpropertychange",Kp)):e==="focusout"&&dd()}function Ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(yi)}function Wg(e,t){if(e==="click")return ja(t)}function Bg(e,t){if(e==="input"||e==="change")return ja(t)}function Vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:Vg;function wi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ls.call(t,i)||!Pt(e[i],t[i]))return!1}return!0}function fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var n=fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fd(n)}}function Jp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zp(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qg(e){var t=Zp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jp(n.ownerDocument.documentElement,n)){if(r!==null&&Qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pd(n,o);var l=pd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=Vt&&"documentMode"in document&&11>=document.documentMode,Kn=null,Cs=null,ri=null,Os=!1;function hd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Os||Kn==null||Kn!==Uo(r)||(r=Kn,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&wi(ri,r)||(ri=r,r=Go(Cs,"onSelect"),0<r.length&&(t=new Wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},_l={},eh={};Vt&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Da(e){if(_l[e])return _l[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eh)return _l[e]=t[n];return e}var th=Da("animationend"),nh=Da("animationiteration"),rh=Da("animationstart"),ih=Da("transitionend"),oh=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){oh.set(e,t),Hn(t,[e])}for(var Cl=0;Cl<md.length;Cl++){var Ol=md[Cl],Yg=Ol.toLowerCase(),Gg=Ol[0].toUpperCase()+Ol.slice(1);xn(Yg,"on"+Gg)}xn(th,"onAnimationEnd");xn(nh,"onAnimationIteration");xn(rh,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(ih,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function vd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yv(r,t,void 0,e),e.currentTarget=null}function ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;vd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;vd(i,a,u),o=s}}}if(Bo)throw e=ks,Bo=!1,ks=null,e}function ge(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(lh(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),lh(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[no]){e[no]=!0,hp.forEach(function(n){n!=="selectionchange"&&(Xg.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,Pl("selectionchange",!1,t))}}function lh(e,t,n,r){switch(Bp(t)){case 1:var i=cg;break;case 4:i=dg;break;default:i=Hu}n=i.bind(null,t,n,e),i=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=On(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Mp(function(){var u=o,c=Au(n),d=[];e:{var f=oh.get(e);if(f!==void 0){var h=Wu,g=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":h=Cg;break;case"focusin":g="focus",h=kl;break;case"focusout":g="blur",h=kl;break;case"beforeblur":case"afterblur":h=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Tg;break;case th:case nh:case rh:h=gg;break;case ih:h=Lg;break;case"scroll":h=fg;break;case"wheel":h=jg;break;case"copy":case"cut":case"paste":h=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ad}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,v;p!==null;){v=p;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=hi(p,m),x!=null&&y.push(Si(p,x,v)))),k)break;p=p.return}0<y.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==ws&&(g=n.relatedTarget||n.fromElement)&&(On(g)||g[Qt]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?On(g):null,g!==null&&(k=Un(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=id,x="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=ad,x="onPointerLeave",m="onPointerEnter",p="pointer"),k=h==null?f:Zn(h),v=g==null?f:Zn(g),f=new y(x,p+"leave",h,n,c),f.target=k,f.relatedTarget=v,x=null,On(c)===u&&(y=new y(m,p+"enter",g,n,c),y.target=v,y.relatedTarget=k,x=y),k=x,h&&g)t:{for(y=h,m=g,p=0,v=y;v;v=Vn(v))p++;for(v=0,x=m;x;x=Vn(x))v++;for(;0<p-v;)y=Vn(y),p--;for(;0<v-p;)m=Vn(m),v--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Vn(y),m=Vn(m)}y=null}else y=null;h!==null&&gd(d,f,h,y,!1),g!==null&&k!==null&&gd(d,k,g,y,!0)}}e:{if(f=u?Zn(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var P=Fg;else if(ud(f))if(Xp)P=Bg;else{P=Ug;var T=Hg}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Wg);if(P&&(P=P(e,u))){Gp(d,P,n,c);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&hs(f,"number",f.value)}switch(T=u?Zn(u):window,e){case"focusin":(ud(T)||T.contentEditable==="true")&&(Kn=T,Cs=u,ri=null);break;case"focusout":ri=Cs=Kn=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,hd(d,n,c);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":hd(d,n,c)}var b;if(Vu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Xn?qp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Qp&&n.locale!=="ko"&&(Xn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Xn&&(b=Vp()):(on=c,Uu="value"in on?on.value:on.textContent,Xn=!0)),T=Go(u,S),0<T.length&&(S=new od(S,e,null,n,c),d.push({event:S,listeners:T}),b?S.data=b:(b=Yp(n),b!==null&&(S.data=b)))),(b=$g?Rg(e,n):Ag(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(c=new od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}ah(d,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=hi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=hi(n,o),s!=null&&l.unshift(Si(n,s,a))):i||(s=hi(n,o),s!=null&&l.push(Si(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Kg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(Kg,`
`).replace(Jg,"")}function ro(e,t,n){if(t=yd(t),yd(e)!==t&&n)throw Error(B(425))}function Xo(){}var Ps=null,Ts=null;function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ls=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(t0)}:Ls;function t0(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Tr,ki="__reactProps$"+Tr,Qt="__reactContainer$"+Tr,zs="__reactEvents$"+Tr,n0="__reactListeners$"+Tr,r0="__reactHandles$"+Tr;function On(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[Dt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[Dt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function $a(e){return e[ki]||null}var js=[],er=-1;function Sn(e){return{current:e}}function ye(e){0>er||(e.current=js[er],js[er]=null,er--)}function me(e,t){er++,js[er]=e.current,e.current=t}var wn={},Qe=Sn(wn),tt=Sn(!1),$n=wn;function vr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function Ko(){ye(tt),ye(Qe)}function Sd(e,t,n){if(Qe.current!==wn)throw Error(B(168));me(Qe,t),me(tt,n)}function sh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Hv(e)||"Unknown",i));return be({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,$n=Qe.current,me(Qe,e),me(tt,tt.current),!0}function kd(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=sh(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,ye(tt),ye(Qe),me(Qe,e)):ye(tt),me(tt,n)}var Ft=null,Ra=!1,Ll=!1;function uh(e){Ft===null?Ft=[e]:Ft.push(e)}function i0(e){Ra=!0,uh(e)}function kn(){if(!Ll&&Ft!==null){Ll=!0;var e=0,t=fe;try{var n=Ft;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ra=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Dp(Nu,kn),i}finally{fe=t,Ll=!1}}return null}var tr=[],nr=0,Zo=null,ea=0,pt=[],ht=0,Rn=null,Ht=1,Ut="";function bn(e,t){tr[nr++]=ea,tr[nr++]=Zo,Zo=e,ea=t}function ch(e,t,n){pt[ht++]=Ht,pt[ht++]=Ut,pt[ht++]=Rn,Rn=e;var r=Ht;e=Ut;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-_t(t)+i|n<<i|r,Ut=o+e}else Ht=1<<o|n<<i|r,Ut=e}function qu(e){e.return!==null&&(bn(e,1),ch(e,1,0))}function Yu(e){for(;e===Zo;)Zo=tr[--nr],tr[nr]=null,ea=tr[--nr],tr[nr]=null;for(;e===Rn;)Rn=pt[--ht],pt[ht]=null,Ut=pt[--ht],pt[ht]=null,Ht=pt[--ht],pt[ht]=null}var lt=null,at=null,xe=!1,Et=null;function dh(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,at=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Ht,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,at=null,!0):!1;default:return!1}}function Ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(xe){var t=at;if(t){var n=t;if(!Ed(e,t)){if(Ds(e))throw Error(B(418));t=dn(n.nextSibling);var r=lt;t&&Ed(e,t)?dh(r,n):(e.flags=e.flags&-4097|2,xe=!1,lt=e)}}else{if(Ds(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,lt=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function io(e){if(e!==lt)return!1;if(!xe)return bd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ms(e.type,e.memoizedProps)),t&&(t=at)){if(Ds(e))throw fh(),Error(B(418));for(;t;)dh(e,t),t=dn(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=lt?dn(e.stateNode.nextSibling):null;return!0}function fh(){for(var e=at;e;)e=dn(e.nextSibling)}function gr(){at=lt=null,xe=!1}function Gu(e){Et===null?Et=[e]:Et.push(e)}var o0=Gt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ta=Sn(null),na=null,rr=null,Xu=null;function Ku(){Xu=rr=na=null}function Ju(e){var t=ta.current;ye(ta),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){na=e,Xu=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(na===null)throw Error(B(308));rr=e,na.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Pn=null;function Zu(e){Pn===null?Pn=[e]:Pn.push(e)}function ph(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zu(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zu(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,c=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(f=t,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=be({},d,f);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=d}}function Cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var mh=new pp.Component().refs;function As(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=hn(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(Ct(t,e,i,r),Do(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=hn(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(Ct(t,e,i,r),Do(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=hn(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(Ct(t,e,r,n),Do(t,e,r))}};function Od(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(i,o):!0}function vh(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=nt(t)?$n:Qe.current,r=t.contextTypes,o=(r=r!=null)?vr(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Ns(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=mh,ec(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=nt(t)?$n:Qe.current,i.context=vr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(As(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===mh&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Td(e){var t=e._init;return t(e._payload)}function gh(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=mn(m,p),m.index=0,m.sibling=null,m}function o(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,x){return p===null||p.tag!==6?(p=Nl(v,m.mode,x),p.return=m,p):(p=i(p,v),p.return=m,p)}function s(m,p,v,x){var P=v.type;return P===Gn?c(m,p,v.props.children,x,v.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zt&&Td(P)===p.type)?(x=i(p,v.props),x.ref=Nr(m,p,v),x.return=m,x):(x=Fo(v.type,v.key,v.props,null,m.mode,x),x.ref=Nr(m,p,v),x.return=m,x)}function u(m,p,v,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Il(v,m.mode,x),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,x,P){return p===null||p.tag!==7?(p=zn(v,m.mode,x,P),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Nl(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return v=Fo(p.type,p.key,p.props,null,m.mode,v),v.ref=Nr(m,null,p),v.return=m,v;case Yn:return p=Il(p,m.mode,v),p.return=m,p;case Zt:var x=p._init;return d(m,x(p._payload),v)}if(Xr(p)||jr(p))return p=zn(p,m.mode,v,null),p.return=m,p;oo(m,p)}return null}function f(m,p,v,x){var P=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(m,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yi:return v.key===P?s(m,p,v,x):null;case Yn:return v.key===P?u(m,p,v,x):null;case Zt:return P=v._init,f(m,p,P(v._payload),x)}if(Xr(v)||jr(v))return P!==null?null:c(m,p,v,x,null);oo(m,v)}return null}function h(m,p,v,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(p,m,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yi:return m=m.get(x.key===null?v:x.key)||null,s(p,m,x,P);case Yn:return m=m.get(x.key===null?v:x.key)||null,u(p,m,x,P);case Zt:var T=x._init;return h(m,p,v,T(x._payload),P)}if(Xr(x)||jr(x))return m=m.get(v)||null,c(p,m,x,P,null);oo(p,x)}return null}function g(m,p,v,x){for(var P=null,T=null,b=p,S=p=0,L=null;b!==null&&S<v.length;S++){b.index>S?(L=b,b=null):L=b.sibling;var j=f(m,b,v[S],x);if(j===null){b===null&&(b=L);break}e&&b&&j.alternate===null&&t(m,b),p=o(j,p,S),T===null?P=j:T.sibling=j,T=j,b=L}if(S===v.length)return n(m,b),xe&&bn(m,S),P;if(b===null){for(;S<v.length;S++)b=d(m,v[S],x),b!==null&&(p=o(b,p,S),T===null?P=b:T.sibling=b,T=b);return xe&&bn(m,S),P}for(b=r(m,b);S<v.length;S++)L=h(b,m,S,v[S],x),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?S:L.key),p=o(L,p,S),T===null?P=L:T.sibling=L,T=L);return e&&b.forEach(function(R){return t(m,R)}),xe&&bn(m,S),P}function y(m,p,v,x){var P=jr(v);if(typeof P!="function")throw Error(B(150));if(v=P.call(v),v==null)throw Error(B(151));for(var T=P=null,b=p,S=p=0,L=null,j=v.next();b!==null&&!j.done;S++,j=v.next()){b.index>S?(L=b,b=null):L=b.sibling;var R=f(m,b,j.value,x);if(R===null){b===null&&(b=L);break}e&&b&&R.alternate===null&&t(m,b),p=o(R,p,S),T===null?P=R:T.sibling=R,T=R,b=L}if(j.done)return n(m,b),xe&&bn(m,S),P;if(b===null){for(;!j.done;S++,j=v.next())j=d(m,j.value,x),j!==null&&(p=o(j,p,S),T===null?P=j:T.sibling=j,T=j);return xe&&bn(m,S),P}for(b=r(m,b);!j.done;S++,j=v.next())j=h(b,m,S,j.value,x),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?S:j.key),p=o(j,p,S),T===null?P=j:T.sibling=j,T=j);return e&&b.forEach(function(A){return t(m,A)}),xe&&bn(m,S),P}function k(m,p,v,x){if(typeof v=="object"&&v!==null&&v.type===Gn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yi:e:{for(var P=v.key,T=p;T!==null;){if(T.key===P){if(P=v.type,P===Gn){if(T.tag===7){n(m,T.sibling),p=i(T,v.props.children),p.return=m,m=p;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zt&&Td(P)===T.type){n(m,T.sibling),p=i(T,v.props),p.ref=Nr(m,T,v),p.return=m,m=p;break e}n(m,T);break}else t(m,T);T=T.sibling}v.type===Gn?(p=zn(v.props.children,m.mode,x,v.key),p.return=m,m=p):(x=Fo(v.type,v.key,v.props,null,m.mode,x),x.ref=Nr(m,p,v),x.return=m,m=x)}return l(m);case Yn:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Il(v,m.mode,x),p.return=m,m=p}return l(m);case Zt:return T=v._init,k(m,p,T(v._payload),x)}if(Xr(v))return g(m,p,v,x);if(jr(v))return y(m,p,v,x);oo(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=Nl(v,m.mode,x),p.return=m,m=p),l(m)):n(m,p)}return k}var yr=gh(!0),yh=gh(!1),Ii={},Rt=Sn(Ii),Ei=Sn(Ii),bi=Sn(Ii);function Tn(e){if(e===Ii)throw Error(B(174));return e}function tc(e,t){switch(me(bi,t),me(Ei,e),me(Rt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}ye(Rt),me(Rt,t)}function wr(){ye(Rt),ye(Ei),ye(bi)}function wh(e){Tn(bi.current);var t=Tn(Rt.current),n=vs(t,e.type);t!==n&&(me(Ei,e),me(Rt,n))}function nc(e){Ei.current===e&&(ye(Rt),ye(Ei))}var ke=Sn(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function rc(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var $o=Gt.ReactCurrentDispatcher,jl=Gt.ReactCurrentBatchConfig,An=0,Ee=null,ze=null,$e=null,oa=!1,ii=!1,_i=0,a0=0;function Ue(){throw Error(B(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function oc(e,t,n,r,i,o){if(An=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?c0:d0,e=n(r,i),ii){o=0;do{if(ii=!1,_i=0,25<=o)throw Error(B(301));o+=1,$e=ze=null,t.updateQueue=null,$o.current=f0,e=n(r,i)}while(ii)}if($o.current=aa,t=ze!==null&&ze.next!==null,An=0,$e=ze=Ee=null,oa=!1,t)throw Error(B(300));return e}function ac(){var e=_i!==0;return _i=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ee.memoizedState=$e=e:$e=$e.next=e,$e}function yt(){if(ze===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=$e===null?Ee.memoizedState:$e.next;if(t!==null)$e=t,ze=e;else{if(e===null)throw Error(B(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},$e===null?Ee.memoizedState=$e=e:$e=$e.next=e}return $e}function Ci(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=yt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if((An&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,Ee.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Pt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=yt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Pt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xh(){}function Sh(e,t){var n=Ee,r=yt(),i=t(),o=!Pt(r.memoizedState,i);if(o&&(r.memoizedState=i,et=!0),r=r.queue,lc(bh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Oi(9,Eh.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(B(349));(An&30)!==0||kh(n,t,i)}return i}function kh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eh(e,t,n,r){t.value=n,t.getSnapshot=r,_h(t)&&Ch(e)}function bh(e,t,n){return n(function(){_h(t)&&Ch(e)})}function _h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Ch(e){var t=qt(e,1);t!==null&&Ct(t,e,1,-1)}function Md(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=u0.bind(null,Ee,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oh(){return yt().memoizedState}function Ro(e,t,n,r){var i=jt();Ee.flags|=e,i.memoizedState=Oi(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var l=ze.memoizedState;if(o=l.destroy,r!==null&&ic(r,l.deps)){i.memoizedState=Oi(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Oi(1|t,n,o,r)}function Ld(e,t){return Ro(8390656,8,e,t)}function lc(e,t){return Na(2048,8,e,t)}function Ph(e,t){return Na(4,2,e,t)}function Th(e,t){return Na(4,4,e,t)}function Mh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,Mh.bind(null,t,e),n)}function sc(){}function zh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dh(e,t,n){return(An&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n):(Pt(n,t)||(n=Ap(),Ee.lanes|=n,Nn|=n,e.baseState=!0),t)}function l0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),t()}finally{fe=n,jl.transition=r}}function $h(){return yt().memoizedState}function s0(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rh(e))Ah(t,n);else if(n=ph(e,t,n,r),n!==null){var i=Ge();Ct(n,e,r,i),Nh(n,t,r)}}function u0(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rh(e))Ah(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,l)){var s=t.interleaved;s===null?(i.next=i,Zu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ph(e,t,i,r),n!==null&&(i=Ge(),Ct(n,e,r,i),Nh(n,t,r))}}function Rh(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ah(e,t){ii=oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}var aa={readContext:gt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},c0={readContext:gt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Ld,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s0.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Md,useDebugValue:sc,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Md(!1),t=e[0];return e=l0.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=jt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Re===null)throw Error(B(349));(An&30)!==0||kh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ld(bh.bind(null,r,o,e),[e]),r.flags|=2048,Oi(9,Eh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=Re.identifierPrefix;if(xe){var n=Ut,r=Ht;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d0={readContext:gt,useCallback:zh,useContext:gt,useEffect:lc,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:Th,useMemo:jh,useReducer:Dl,useRef:Oh,useState:function(){return Dl(Ci)},useDebugValue:sc,useDeferredValue:function(e){var t=yt();return Dh(t,ze.memoizedState,e)},useTransition:function(){var e=Dl(Ci)[0],t=yt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:Sh,useId:$h,unstable_isNewReconciler:!1},f0={readContext:gt,useCallback:zh,useContext:gt,useEffect:lc,useImperativeHandle:Lh,useInsertionEffect:Ph,useLayoutEffect:Th,useMemo:jh,useReducer:$l,useRef:Oh,useState:function(){return $l(Ci)},useDebugValue:sc,useDeferredValue:function(e){var t=yt();return ze===null?t.memoizedState=e:Dh(t,ze.memoizedState,e)},useTransition:function(){var e=$l(Ci)[0],t=yt().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:Sh,useId:$h,unstable_isNewReconciler:!1};function xr(e,t){try{var n="",r=t;do n+=Fv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function Ih(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Gs=r),Is(e,t)},n}function Fh(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Is(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=O0.bind(null,e,t,n),t.then(e,e))}function jd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var h0=Gt.ReactCurrentOwner,et=!1;function Ye(e,t,n,r){t.child=e===null?yh(t,null,n,r):yr(t,e.child,n,r)}function $d(e,t,n,r,i){n=n.render;var o=t.ref;return fr(t,i),r=oc(e,t,n,r,o,i),n=ac(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(xe&&n&&qu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Rd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hh(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(l,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wi(o,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Fs(e,t,n,r,i)}function Uh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(or,ot),ot|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(or,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(or,ot),ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(or,ot),ot|=r;return Ye(e,t,i,n),t.child}function Wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,i){var o=nt(n)?$n:Qe.current;return o=vr(t,o),fr(t,i),n=oc(e,t,n,r,o,i),r=ac(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(xe&&r&&qu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Ad(e,t,n,r,i){if(nt(n)){var o=!0;Jo(t)}else o=!1;if(fr(t,i),t.stateNode===null)Ao(e,t),vh(t,n,r),Ns(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=nt(n)?$n:Qe.current,u=vr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pd(t,l,r,u),en=!1;var f=t.memoizedState;l.state=f,ra(t,r,l,i),s=t.memoizedState,a!==r||f!==s||tt.current||en?(typeof c=="function"&&(As(t,n,c,r),s=t.memoizedState),(a=en||Od(t,n,a,r,f,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xt(t.type,a),l.props=u,d=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=nt(n)?$n:Qe.current,s=vr(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||f!==s)&&Pd(t,l,r,s),en=!1,f=t.memoizedState,l.state=f,ra(t,r,l,i);var g=t.memoizedState;a!==d||f!==g||tt.current||en?(typeof h=="function"&&(As(t,n,h,r),g=t.memoizedState),(u=en||Od(t,n,u,r,f,g,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,o,i)}function Hs(e,t,n,r,i,o){Wh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&kd(t,n,!1),Yt(e,t,o);r=t.stateNode,h0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yr(t,e.child,null,o),t.child=yr(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&kd(t,n,!0),t.child}function Bh(e){var t=e.stateNode;t.pendingContext?Sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sd(e,t.context,!1),tc(e,t.containerInfo)}function Nd(e,t,n,r,i){return gr(),Gu(i),t.flags|=256,Ye(e,t,n,r),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vh(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(ke,i&1),e===null)return $s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ha(l,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ws(n),t.memoizedState=Us,e):uc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return m0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=mn(a,o):(o=zn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ws(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Us,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uc(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&Gu(r),yr(t,e.child,null,n),e=uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(B(422))),ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ha({mode:"visible",children:r.children},i,0,null),o=zn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&yr(t,e.child,null,l),t.child.memoizedState=Ws(l),t.memoizedState=Us,o);if((t.mode&1)===0)return ao(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Rl(o,r,void 0),ao(e,t,l,r)}if(a=(l&e.childLanes)!==0,et||a){if(r=Re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qt(e,i),Ct(r,e,i,-1))}return mc(),r=Rl(Error(B(421))),ao(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,at=dn(i.nextSibling),lt=t,xe=!0,Et=null,e!==null&&(pt[ht++]=Ht,pt[ht++]=Ut,pt[ht++]=Rn,Ht=e.id,Ut=e.overflow,Rn=t),t=uc(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function Al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Al(t,!0,n,null,o);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:Bh(t),gr();break;case 5:wh(t);break;case 1:nt(t.type)&&Jo(t);break;case 4:tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Vh(e,t,n):(me(ke,ke.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Qh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Uh(e,t,n)}return Yt(e,t,n)}var qh,Bs,Yh,Gh;qh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bs=function(){};Yh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(Rt.current);var o=null;switch(n){case"input":i=fs(e,i),r=fs(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=ms(e,i),r=ms(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}gs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g0(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return nt(t.type)&&Ko(),We(t),null;case 3:return r=t.stateNode,wr(),ye(tt),ye(Qe),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Js(Et),Et=null))),Bs(e,t),We(t),null;case 5:nc(t);var i=Tn(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Yh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Tn(Rt.current),io(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[ki]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)ge(Jr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Yc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Xc(r,o),ge("invalid",r)}gs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",""+a]):fi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":Gi(r),Gc(r,o,!0);break;case"textarea":Gi(r),Kc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Dt]=t,e[ki]=r,qh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ys(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)ge(Jr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Yc(e,r),i=fs(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Xc(e,r),i=ms(e,r),ge("invalid",e);break;default:i=r}gs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?_p(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ep(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pi(e,s):typeof s=="number"&&pi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&ju(e,o,s,l))}switch(n){case"input":Gi(e),Gc(e,r,!1);break;case"textarea":Gi(e),Kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Gh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Tn(bi.current),Tn(Rt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return We(t),null;case 13:if(ye(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)fh(),gr(),t.flags|=98560,o=!1;else if(o=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Dt]=t}else gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Et!==null&&(Js(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?je===0&&(je=3):mc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return wr(),Bs(e,t),e===null&&xi(t.stateNode.containerInfo),We(t),null;case 10:return Ju(t.type._context),We(t),null;case 17:return nt(t.type)&&Ko(),We(t),null;case 19:if(ye(ke),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ia(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>Sr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=ia(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Ce()-o.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ot&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function y0(e,t){switch(Yu(t),t.tag){case 1:return nt(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),ye(tt),ye(Qe),rc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return wr(),null;case 10:return Ju(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var lo=!1,Ve=!1,w0=typeof WeakSet=="function"?WeakSet:Set,X=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Vs(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Fd=!1;function x0(e,t){if(Ps=qo,e=Zp(),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++c===r&&(s=l),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},qo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,k=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:xt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){_e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return g=Fd,Fd=!1,g}function oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vs(t,n,o)}i=i.next}while(i!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xh(e){var t=e.alternate;t!==null&&(e.alternate=null,Xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[ki],delete t[zs],delete t[n0],delete t[r0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kh(e){return e.tag===5||e.tag===3||e.tag===4}function Hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(qs(e,t,n),e=e.sibling;e!==null;)qs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var Ie=null,kt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 5:Ve||ir(n,t);case 6:var r=Ie,i=kt;Ie=null,Kt(e,t,n),Ie=r,kt=i,Ie!==null&&(kt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(kt?(e=Ie,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),gi(e)):Ml(Ie,n.stateNode));break;case 4:r=Ie,i=kt,Ie=n.stateNode.containerInfo,kt=!0,Kt(e,t,n),Ie=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Vs(n,t,l),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!Ve&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Kt(e,t,n),Ve=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w0),t.forEach(function(r){var i=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,kt=!1;break e;case 3:Ie=a.stateNode.containerInfo,kt=!0;break e;case 4:Ie=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));Jh(o,l,i),Ie=null,kt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zh(t,e),t=t.sibling}function Zh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),zt(e),r&4){try{oi(3,e,e.return),Ia(3,e)}catch(y){_e(e,e.return,y)}try{oi(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:wt(t,e),zt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(wt(t,e),zt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xp(i,o),ys(a,l);var u=ys(a,o);for(l=0;l<s.length;l+=2){var c=s[l],d=s[l+1];c==="style"?_p(i,d):c==="dangerouslySetInnerHTML"?Ep(i,d):c==="children"?pi(i,d):ju(i,c,d,u)}switch(a){case"input":ps(i,o);break;case"textarea":Sp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?sr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ki]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(wt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(wt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:wt(t,e),zt(e);break;case 13:wt(t,e),zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=Ce())),r&4&&Ud(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||c,wt(t,e),Ve=u):wt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(X=e,c=e.child;c!==null;){for(d=X=c;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:oi(4,f,f.return);break;case 1:ir(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:ir(f,f.return);break;case 22:if(f.memoizedState!==null){Bd(d);continue}}h!==null?(h.return=f,X=h):Bd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=bp("display",l))}catch(y){_e(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){_e(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wt(t,e),zt(e),r&4&&Ud(e);break;case 21:break;default:wt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kh(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=Hd(e);Ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Hd(e);qs(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){X=e,em(e)}function em(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||lo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=lo;var u=Ve;if(lo=l,(Ve=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?Vd(i):s!==null?(s.return=l,X=s):Vd(i);for(;o!==null;)X=o,em(o),o=o.sibling;X=i,lo=a,Ve=u}Wd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):Wd(e)}}function Wd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&gi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ve||t.flags&512&&Qs(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Bd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Vd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Qs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Qs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var k0=Math.ceil,la=Gt.ReactCurrentDispatcher,cc=Gt.ReactCurrentOwner,vt=Gt.ReactCurrentBatchConfig,de=0,Re=null,Me=null,Fe=0,ot=0,or=Sn(0),je=0,Pi=null,Nn=0,Fa=0,dc=0,ai=null,Ze=null,fc=0,Sr=1/0,It=null,sa=!1,Gs=null,pn=null,so=!1,an=null,ua=0,li=0,Xs=null,No=-1,Io=0;function Ge(){return(de&6)!==0?Ce():No!==-1?No:No=Ce()}function hn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:o0.transition!==null?(Io===0&&(Io=Ap()),Io):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Bp(e.type)),e)}function Ct(e,t,n,r){if(50<li)throw li=0,Xs=null,Error(B(185));Ri(e,n,r),((de&2)===0||e!==Re)&&(e===Re&&((de&2)===0&&(Fa|=n),je===4&&rn(e,Fe)),rt(e,r),n===1&&de===0&&(t.mode&1)===0&&(Sr=Ce()+500,Ra&&kn()))}function rt(e,t){var n=e.callbackNode;og(e,t);var r=Qo(e,e===Re?Fe:0);if(r===0)n!==null&&ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ed(n),t===1)e.tag===0?i0(Qd.bind(null,e)):uh(Qd.bind(null,e)),e0(function(){(de&6)===0&&kn()}),n=null;else{switch(Np(r)){case 1:n=Nu;break;case 4:n=$p;break;case 16:n=Vo;break;case 536870912:n=Rp;break;default:n=Vo}n=sm(n,tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tm(e,t){if(No=-1,Io=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=Qo(e,e===Re?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ca(e,r);else{t=r;var i=de;de|=2;var o=rm();(Re!==e||Fe!==t)&&(It=null,Sr=Ce()+500,Ln(e,t));do try{_0();break}catch(a){nm(e,a)}while(1);Ku(),la.current=o,de=i,Me!==null?t=0:(Re=null,Fe=0,t=je)}if(t!==0){if(t===2&&(i=Es(e),i!==0&&(r=i,t=Ks(e,i))),t===1)throw n=Pi,Ln(e,0),rn(e,r),rt(e,Ce()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!E0(i)&&(t=ca(e,r),t===2&&(o=Es(e),o!==0&&(r=o,t=Ks(e,o))),t===1))throw n=Pi,Ln(e,0),rn(e,r),rt(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:_n(e,Ze,It);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=fc+500-Ce(),10<t)){if(Qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ls(_n.bind(null,e,Ze,It),t);break}_n(e,Ze,It);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-_t(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k0(r/1960))-r,10<r){e.timeoutHandle=Ls(_n.bind(null,e,Ze,It),r);break}_n(e,Ze,It);break;case 5:_n(e,Ze,It);break;default:throw Error(B(329))}}}return rt(e,Ce()),e.callbackNode===n?tm.bind(null,e):null}function Ks(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=ca(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Js(t)),e}function Js(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function E0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~dc,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Qd(e){if((de&6)!==0)throw Error(B(327));pr();var t=Qo(e,0);if((t&1)===0)return rt(e,Ce()),null;var n=ca(e,t);if(e.tag!==0&&n===2){var r=Es(e);r!==0&&(t=r,n=Ks(e,r))}if(n===1)throw n=Pi,Ln(e,0),rn(e,t),rt(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ze,It),rt(e,Ce()),null}function pc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Sr=Ce()+500,Ra&&kn())}}function In(e){an!==null&&an.tag===0&&(de&6)===0&&pr();var t=de;de|=1;var n=vt.transition,r=fe;try{if(vt.transition=null,fe=1,e)return e()}finally{fe=r,vt.transition=n,de=t,(de&6)===0&&kn()}}function hc(){ot=or.current,ye(or)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zg(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:wr(),ye(tt),ye(Qe),rc();break;case 5:nc(r);break;case 4:wr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Ju(r.type._context);break;case 22:case 23:hc()}n=n.return}if(Re=e,Me=e=mn(e.current,null),Fe=ot=t,je=0,Pi=null,dc=Fa=Nn=0,Ze=ai=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Pn=null}return e}function nm(e,t){do{var n=Me;try{if(Ku(),$o.current=aa,oa){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(An=0,$e=ze=Ee=null,ii=!1,_i=0,cc.current=null,n===null||n.return===null){je=1,Pi=t,Me=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=jd(l);if(h!==null){h.flags&=-257,Dd(h,l,a,o,t),h.mode&1&&zd(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){zd(o,u,t),mc();break e}s=Error(B(426))}}else if(xe&&a.mode&1){var k=jd(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Dd(k,l,a,o,t),Gu(xr(s,a));break e}}o=s=xr(s,a),je!==4&&(je=2),ai===null?ai=[o]:ai.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Ih(o,s,t);_d(o,m);break e;case 1:a=s;var p=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pn===null||!pn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Fh(o,a,t);_d(o,x);break e}}o=o.return}while(o!==null)}om(n)}catch(P){t=P,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function rm(){var e=la.current;return la.current=aa,e===null?aa:e}function mc(){(je===0||je===3||je===2)&&(je=4),Re===null||(Nn&268435455)===0&&(Fa&268435455)===0||rn(Re,Fe)}function ca(e,t){var n=de;de|=2;var r=rm();(Re!==e||Fe!==t)&&(It=null,Ln(e,t));do try{b0();break}catch(i){nm(e,i)}while(1);if(Ku(),de=n,la.current=r,Me!==null)throw Error(B(261));return Re=null,Fe=0,je}function b0(){for(;Me!==null;)im(Me)}function _0(){for(;Me!==null&&!Xv();)im(Me)}function im(e){var t=lm(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?om(e):Me=t,cc.current=null}function om(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=g0(n,t,ot),n!==null){Me=n;return}}else{if(n=y0(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);je===0&&(je=5)}function _n(e,t,n){var r=fe,i=vt.transition;try{vt.transition=null,fe=1,C0(e,t,n,r)}finally{vt.transition=i,fe=r}return null}function C0(e,t,n,r){do pr();while(an!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ag(e,o),e===Re&&(Me=Re=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||so||(so=!0,sm(Vo,function(){return pr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=vt.transition,vt.transition=null;var l=fe;fe=1;var a=de;de|=4,cc.current=null,x0(e,n),Zh(n,e),Qg(Ts),qo=!!Ps,Ts=Ps=null,e.current=n,S0(n),Kv(),de=a,fe=l,vt.transition=o}else e.current=n;if(so&&(so=!1,an=e,ua=i),o=e.pendingLanes,o===0&&(pn=null),eg(n.stateNode),rt(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Gs,Gs=null,e;return(ua&1)!==0&&e.tag!==0&&pr(),o=e.pendingLanes,(o&1)!==0?e===Xs?li++:(li=0,Xs=e):li=0,kn(),null}function pr(){if(an!==null){var e=Np(ua),t=vt.transition,n=fe;try{if(vt.transition=null,fe=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,ua=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var c=X;switch(c.tag){case 0:case 11:case 15:oi(8,c,o)}var d=c.child;if(d!==null)d.return=c,X=d;else for(;X!==null;){c=X;var f=c.sibling,h=c.return;if(Xh(c),c===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:oi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,X=m;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,X=v;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ia(9,a)}}catch(P){_e(a,a.return,P)}if(a===l){X=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break e}X=a.return}}if(de=i,kn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(La,e)}catch{}r=!0}return r}finally{fe=n,vt.transition=t}}return!1}function qd(e,t,n){t=xr(n,t),t=Ih(e,t,1),e=fn(e,t,1),t=Ge(),e!==null&&(Ri(e,1,t),rt(e,t))}function _e(e,t,n){if(e.tag===3)qd(e,e,n);else for(;t!==null;){if(t.tag===3){qd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=xr(n,e),e=Fh(t,e,1),t=fn(t,e,1),e=Ge(),t!==null&&(Ri(t,1,e),rt(t,e));break}}t=t.return}}function O0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Fe&n)===n&&(je===4||je===3&&(Fe&130023424)===Fe&&500>Ce()-fc?Ln(e,0):dc|=n),rt(e,t)}function am(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var n=Ge();e=qt(e,t),e!==null&&(Ri(e,t,n),rt(e,n))}function P0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),am(e,n)}var lm;lm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return et=!1,v0(e,t,n);et=(e.flags&131072)!==0}else et=!1,xe&&(t.flags&1048576)!==0&&ch(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=vr(t,Qe.current);fr(t,n),i=oc(null,t,r,e,i,n);var o=ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Ns(t,r,e,n),t=Hs(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&qu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=L0(r),e=xt(r,e),i){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=Ad(null,t,r,e,n);break e;case 11:t=$d(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,xt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Fs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ad(e,t,r,i,n);case 3:e:{if(Bh(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hh(e,t),ra(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xr(Error(B(423)),t),t=Nd(e,t,r,n,i);break e}else if(r!==i){i=xr(Error(B(424)),t),t=Nd(e,t,r,n,i);break e}else for(at=dn(t.stateNode.containerInfo.firstChild),lt=t,xe=!0,Et=null,n=yh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){t=Yt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return wh(t),e===null&&$s(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ms(r,i)?l=null:o!==null&&Ms(r,o)&&(t.flags|=32),Wh(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&$s(t),null;case 13:return Vh(e,t,n);case 4:return tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),$d(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(ta,r._currentValue),r._currentValue=l,o!==null)if(Pt(o.value,l)){if(o.children===i.children&&!tt.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Rs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Rs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=gt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Rd(e,t,r,i,n);case 15:return Hh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ao(e,t),t.tag=1,nt(r)?(e=!0,Jo(t)):e=!1,fr(t,n),vh(t,r,i),Ns(t,r,i,n),Hs(null,t,r,!0,e,n);case 19:return Qh(e,t,n);case 22:return Uh(e,t,n)}throw Error(B(156,t.tag))};function sm(e,t){return Dp(e,t)}function M0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new M0(e,t,n,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L0(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$u)return 11;if(e===Ru)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")vc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gn:return zn(n.children,i,o,t);case Du:l=8,i|=8;break;case ss:return e=mt(12,n,t,i|2),e.elementType=ss,e.lanes=o,e;case us:return e=mt(13,n,t,i),e.elementType=us,e.lanes=o,e;case cs:return e=mt(19,n,t,i),e.elementType=cs,e.lanes=o,e;case gp:return Ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mp:l=10;break e;case vp:l=9;break e;case $u:l=11;break e;case Ru:l=14;break e;case Zt:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=mt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Ha(e,t,n,r){return e=mt(22,e,r,t),e.elementType=gp,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gc(e,t,n,r,i,o,l,a,s){return e=new z0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(o),e}function j0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function um(e){if(!e)return wn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(nt(n))return sh(e,n,t)}return t}function cm(e,t,n,r,i,o,l,a,s){return e=gc(n,r,!0,e,i,o,l,a,s),e.context=um(null),n=e.current,r=Ge(),i=hn(n),o=Bt(r,i),o.callback=t!=null?t:null,fn(n,o,i),e.current.lanes=i,Ri(e,i,r),rt(e,r),e}function Ua(e,t,n,r){var i=t.current,o=Ge(),l=hn(i);return n=um(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,l),e!==null&&(Ct(e,i,l,o),Do(e,i,l)),l}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function D0(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function wc(e){this._internalRoot=e}Wa.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ua(e,t,null,null)};Wa.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){Ua(null,e,null,null)}),t[Qt]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Wp(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gd(){}function $0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=da(l);o.call(u)}}var l=cm(t,r,e,0,null,!1,!1,"",Gd);return e._reactRootContainer=l,e[Qt]=l.current,xi(e.nodeType===8?e.parentNode:e),In(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=da(s);a.call(u)}}var s=gc(e,0,!1,null,null,!1,!1,"",Gd);return e._reactRootContainer=s,e[Qt]=s.current,xi(e.nodeType===8?e.parentNode:e),In(function(){Ua(t,s,n,r)}),s}function Va(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=da(l);a.call(s)}}Ua(t,l,e,i)}else l=$0(n,t,e,i,r);return da(l)}Ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Iu(t,n|1),rt(t,Ce()),(de&6)===0&&(Sr=Ce()+500,kn()))}break;case 13:In(function(){var r=qt(e,1);if(r!==null){var i=Ge();Ct(r,e,1,i)}}),yc(e,1)}};Fu=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Ge();Ct(t,e,134217728,n)}yc(e,134217728)}};Fp=function(e){if(e.tag===13){var t=hn(e),n=qt(e,t);if(n!==null){var r=Ge();Ct(n,e,t,r)}yc(e,t)}};Hp=function(){return fe};Up=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};xs=function(e,t,n){switch(t){case"input":if(ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$a(r);if(!i)throw Error(B(90));wp(r),ps(r,i)}}}break;case"textarea":Sp(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};Pp=pc;Tp=In;var R0={usingClientEntryPoint:!1,Events:[Ni,Zn,$a,Cp,Op,pc]},Fr={findFiberByHostInstance:On,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},A0={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zp(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{La=uo.inject(A0),$t=uo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(B(200));return j0(e,t,null,n)};ut.createRoot=function(e,t){if(!xc(e))throw Error(B(299));var n=!1,r="",i=dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gc(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,xi(e.nodeType===8?e.parentNode:e),new wc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=zp(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return In(e)};ut.hydrate=function(e,t,n){if(!Ba(t))throw Error(B(200));return Va(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!xc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=dm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=cm(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Qt]=t.current,xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wa(t)};ut.render=function(e,t,n){if(!Ba(t))throw Error(B(200));return Va(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(B(40));return e._reactRootContainer?(In(function(){Va(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};ut.unstable_batchedUpdates=pc;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Va(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(Mu);var Xd=Mu.exports;as.createRoot=Xd.createRoot,as.hydrateRoot=Xd.hydrateRoot;var Qa={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Sc=Ae?Symbol.for("react.element"):60103,kc=Ae?Symbol.for("react.portal"):60106,qa=Ae?Symbol.for("react.fragment"):60107,Ya=Ae?Symbol.for("react.strict_mode"):60108,Ga=Ae?Symbol.for("react.profiler"):60114,Xa=Ae?Symbol.for("react.provider"):60109,Ka=Ae?Symbol.for("react.context"):60110,Ec=Ae?Symbol.for("react.async_mode"):60111,Ja=Ae?Symbol.for("react.concurrent_mode"):60111,Za=Ae?Symbol.for("react.forward_ref"):60112,el=Ae?Symbol.for("react.suspense"):60113,N0=Ae?Symbol.for("react.suspense_list"):60120,tl=Ae?Symbol.for("react.memo"):60115,nl=Ae?Symbol.for("react.lazy"):60116,I0=Ae?Symbol.for("react.block"):60121,F0=Ae?Symbol.for("react.fundamental"):60117,H0=Ae?Symbol.for("react.responder"):60118,U0=Ae?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sc:switch(e=e.type,e){case Ec:case Ja:case qa:case Ga:case Ya:case el:return e;default:switch(e=e&&e.$$typeof,e){case Ka:case Za:case nl:case tl:case Xa:return e;default:return t}}case kc:return t}}}function fm(e){return dt(e)===Ja}pe.AsyncMode=Ec;pe.ConcurrentMode=Ja;pe.ContextConsumer=Ka;pe.ContextProvider=Xa;pe.Element=Sc;pe.ForwardRef=Za;pe.Fragment=qa;pe.Lazy=nl;pe.Memo=tl;pe.Portal=kc;pe.Profiler=Ga;pe.StrictMode=Ya;pe.Suspense=el;pe.isAsyncMode=function(e){return fm(e)||dt(e)===Ec};pe.isConcurrentMode=fm;pe.isContextConsumer=function(e){return dt(e)===Ka};pe.isContextProvider=function(e){return dt(e)===Xa};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sc};pe.isForwardRef=function(e){return dt(e)===Za};pe.isFragment=function(e){return dt(e)===qa};pe.isLazy=function(e){return dt(e)===nl};pe.isMemo=function(e){return dt(e)===tl};pe.isPortal=function(e){return dt(e)===kc};pe.isProfiler=function(e){return dt(e)===Ga};pe.isStrictMode=function(e){return dt(e)===Ya};pe.isSuspense=function(e){return dt(e)===el};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qa||e===Ja||e===Ga||e===Ya||e===el||e===N0||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===tl||e.$$typeof===Xa||e.$$typeof===Ka||e.$$typeof===Za||e.$$typeof===F0||e.$$typeof===H0||e.$$typeof===U0||e.$$typeof===I0)};pe.typeOf=dt;(function(e){e.exports=pe})(Qa);function W0(e){function t(H,E,q,F,M){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,De=oe=se=0,ce=0,Le=0,En=0,Pe=0,Xt=q.length,Nt=Xt-1,it,te="",he="",Bn="",zr="",Lt;ce<Xt;){if(ne=q.charCodeAt(ce),ce===Nt&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Xt++,Nt++),W+ie+ee+J===0){if(ce===Nt&&(0<Le&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=q.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Xt;){switch(ne=q.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=q.charCodeAt(ce+1)){case 42:case 47:e:{for(De=ce+1;De<Nt;++De)switch(q.charCodeAt(De)){case 47:if(ne===42&&q.charCodeAt(De-1)===42&&ce+2!==De){ce=De+1;break e}break;case 10:if(ne===47){ce=De+1;break e}}ce=De}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Nt&&q.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=q.substring(Pe,ce),se===0&&(se=(te=te.replace(d,"").trim()).charCodeAt(0)),se){case 64:switch(0<Le&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:Le=E;break;default:Le=Y}if(oe=t(E,Le,oe,ne,M+1),Pe=oe.length,0<O&&(Le=n(Y,te,En),Lt=a(3,oe,Le,E,$,A,Pe,ne,M,F),te=Le.join(""),Lt!==void 0&&(Pe=(oe=Lt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(T,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(E,n(E,te,En),oe,F,M+1)}Bn+=oe,oe=En=Le=De=se=0,te="",ne=q.charCodeAt(++ce);break;case 125:case 59:if(te=(0<Le?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(De===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<O&&(Lt=a(1,te,E,H,$,A,he.length,F,M,F))!==void 0&&(Pe=(te=Lt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){zr+=te+q.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}En=Le=De=se=0,te="",ne=q.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(Le=1,te+="\0"),0<O*U&&a(0,te,E,H,$,A,he.length,F,M,F),A=1,$++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,it=q.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:it="";break;default:ne!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:ie+W+J===0&&(Le=En=1,it="\f"+it);break;case 108:if(ie+W+J+N===0&&0<De)switch(ce-De){case 2:Oe===112&&q.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(De=ce);break;case 44:W+ee+ie+J===0&&(Le=1,it+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+De+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*q.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(q.charCodeAt(Pe+2)===33&&(he+=q.substring(Pe,ce+1)),it="",W=0)}}W===0&&(te+=it)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if(Le=E,0<O&&(Lt=a(2,he,Le,H,$,A,Pe,F,M,F),Lt!==void 0&&(he=Lt).length===0))return zr+he+Bn;if(he=Le.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(v,"::-webkit-input-$1")+he.replace(v,"::-moz-$1")+he.replace(v,":-ms-input-$1")+he}N=0}}return zr+he+Bn}function n(H,E,q){var F=E.trim().split(k);E=F;var M=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<M;++W)E[W]=r(H,E[W],q).trim();break;default:var ee=W=0;for(E=[];W<M;++W)for(var ie=0;ie<J;++ie)E[ee++]=r(H[ie]+" ",F[W],q).trim()}return E}function r(H,E,q){var F=E.charCodeAt(0);switch(33>F&&(F=(E=E.trim()).charCodeAt(0)),F){case 38:return E.replace(m,"$1"+H.trim());case 58:return H.trim()+E.replace(m,"$1"+H.trim());default:if(0<1*q&&0<E.indexOf("\f"))return E.replace(m,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+E}function i(H,E,q,F){var M=H+";",J=2*E+3*q+4*F;if(J===944){H=M.indexOf(":",9)+1;var W=M.substring(H,M.length-1).trim();return W=M.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(M,1))return M;switch(J){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(R,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return W=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+M+"-ms-flex-pack"+W+M;case 1005:return g.test(M)?M.replace(h,":-webkit-")+M.replace(h,":-moz-")+M:M;case 1e3:switch(W=M.substring(13).trim(),E=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(E)){case 226:W=M.replace(P,"tb");break;case 232:W=M.replace(P,"tb-rl");break;case 220:W=M.replace(P,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+W+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(E=(M=H).length-10,W=(M.charCodeAt(E)===33?M.substring(0,E):M).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:M=M.replace(W,"-webkit-"+W)+";"+M;break;case 207:case 102:M=M.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+M.replace(W,"-webkit-"+W)+";"+M.replace(W,"-ms-"+W+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return W=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+W+"-ms-flex-"+W+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(S,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(S,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(j.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),E,q,F).replace(":fill-available",":stretch"):M.replace(W,"-webkit-"+W)+M.replace(W,"-moz-"+W.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,q+F===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+M}return M}function o(H,E){var q=H.indexOf(E===1?":":"{"),F=H.substring(0,E!==3?q:10);return q=H.substring(q+1,H.length-1),D(E!==2?F:F.replace(L,"$1"),q,E)}function l(H,E){var q=i(E,E.charCodeAt(0),E.charCodeAt(1),E.charCodeAt(2));return q!==E+";"?q.replace(b," or ($1)").substring(4):"("+E+")"}function a(H,E,q,F,M,J,W,ee,ie,se){for(var ne=0,Oe=E,Ne;ne<O;++ne)switch(Ne=z[ne].call(c,H,Oe,q,F,M,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==E)return Oe}function s(H){switch(H){case void 0:case null:O=z.length=0;break;default:if(typeof H=="function")z[O++]=H;else if(typeof H=="object")for(var E=0,q=H.length;E<q;++E)s(H[E]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(D=null,H?typeof H!="function"?I=1:(I=2,D=H):I=0),u}function c(H,E){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),V=q,q=[V],0<O){var F=a(-1,E,q,q,$,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(E=F)}var M=t(Y,q,E,0,0);return 0<O&&(F=a(-2,M,q,q,$,A,M.length,0,0,0),F!==void 0&&(M=F)),V="",N=0,A=$=1,M}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,x=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,S=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,R=/([^-])(image-set\()/,A=1,$=1,N=0,I=1,Y=[],z=[],O=0,D=null,U=0,V="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var B0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function V0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Q0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kd=V0(function(e){return Q0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),bc=Qa.exports,q0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},G0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_c={};_c[bc.ForwardRef]=G0;_c[bc.Memo]=pm;function Jd(e){return bc.isMemo(e)?pm:_c[e.$$typeof]||q0}var X0=Object.defineProperty,K0=Object.getOwnPropertyNames,Zd=Object.getOwnPropertySymbols,J0=Object.getOwnPropertyDescriptor,Z0=Object.getPrototypeOf,ef=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(ef){var r=Z0(t);r&&r!==ef&&hm(e,r,n)}var i=K0(t);Zd&&(i=i.concat(Zd(t)));for(var o=Jd(e),l=Jd(t),a=0;a<i.length;++a){var s=i[a];if(!Y0[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=J0(t,s);try{X0(e,s,u)}catch{}}}}return e}var ey=hm;function Wt(){return(Wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var tf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Zs=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Qa.exports.typeOf(e)},fa=Object.freeze([]),vn=Object.freeze({});function Ti(e){return typeof e=="function"}function nf(e){return e.displayName||e.name||"Component"}function Cc(e){return e&&typeof e.styledComponentId=="string"}var kr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Oc=typeof window<"u"&&"HTMLElement"in window,ty=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Fi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ny=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Fi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Ho=new Map,pa=new Map,si=1,co=function(e){if(Ho.has(e))return Ho.get(e);for(;pa.has(si);)si++;var t=si++;return Ho.set(e,t),pa.set(t,e),t},ry=function(e){return pa.get(e)},iy=function(e,t){t>=si&&(si=t+1),Ho.set(e,t),pa.set(t,e)},oy="style["+kr+'][data-styled-version="5.3.5"]',ay=new RegExp("^"+kr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ly=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},sy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(ay);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(iy(u,s),ly(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},uy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},mm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(kr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(kr,"active"),r.setAttribute("data-styled-version","5.3.5");var l=uy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},cy=function(){function e(n){var r=this.element=mm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Fi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),dy=function(){function e(n){var r=this.element=mm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),fy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),rf=Oc,py={isServer:!Oc,useCSSOMInjection:!ty},vm=function(){function e(n,r,i){n===void 0&&(n=vn),r===void 0&&(r={}),this.options=Wt({},py,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Oc&&rf&&(rf=!1,function(o){for(var l=document.querySelectorAll(oy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(kr)!=="active"&&(sy(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return co(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Wt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new fy(l):o?new cy(l):new dy(l),new ny(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(co(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(co(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(co(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=ry(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var c=kr+".g"+l+'[id="'+a+'"]',d="";s!==void 0&&s.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),hy=/(a)(d)/gi,of=function(e){return String.fromCharCode(e+(e>25?39:97))};function eu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=of(t%52)+n;return(of(t%52)+n).replace(hy,"$1-$2")}var ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gm=function(e){return ar(5381,e)};function my(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ti(n)&&!Cc(n))return!1}return!0}var vy=gm("5.3.5"),gy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&my(t),this.componentId=n,this.baseHash=ar(vy,n),this.baseStyle=r,vm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Er(this.rules,t,n,r).join(""),a=eu(ar(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ar(this.baseHash,r.hash),d="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var g=Er(h,t,n,r),y=Array.isArray(g)?g.join(""):g;c=ar(c,y+f),d+=y}}if(d){var k=eu(c>>>0);if(!n.hasNameForId(i,k)){var m=r(d,"."+k,void 0,i);n.insertRules(i,k,m)}o.push(k)}}return o.join(" ")},e}(),yy=/^\s*\/\/.*$/gm,wy=[":","[",".","#"];function xy(e){var t,n,r,i,o=e===void 0?vn:e,l=o.options,a=l===void 0?vn:l,s=o.plugins,u=s===void 0?fa:s,c=new W0(a),d=[],f=function(y){function k(m){if(m)try{y(m+"}")}catch{}}return function(m,p,v,x,P,T,b,S,L,j){switch(m){case 1:if(L===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(v[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(y){d.push(y)}),h=function(y,k,m){return k===0&&wy.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function g(y,k,m,p){p===void 0&&(p="&");var v=y.replace(yy,""),x=k&&m?m+" "+k+" { "+v+" }":v;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!k?"":k,x)}return c.use([].concat(u,[function(y,k,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,h))},f,function(y){if(y===-2){var k=d;return d=[],k}}])),g.hash=u.length?u.reduce(function(y,k){return k.name||Fi(15),ar(y,k.name)},5381).toString():"",g}var ym=$i.createContext();ym.Consumer;var wm=$i.createContext(),Sy=(wm.Consumer,new vm),tu=xy();function ky(){return K.exports.useContext(ym)||Sy}function Ey(){return K.exports.useContext(wm)||tu}var by=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=tu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Fi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=tu),this.name+t.hash},e}(),_y=/([A-Z])/,Cy=/([A-Z])/g,Oy=/^ms-/,Py=function(e){return"-"+e.toLowerCase()};function af(e){return _y.test(e)?e.replace(Cy,Py).replace(Oy,"-ms-"):e}var lf=function(e){return e==null||e===!1||e===""};function Er(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Er(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(lf(e))return"";if(Cc(e))return"."+e.styledComponentId;if(Ti(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Er(s,t,n,r)}var u;return e instanceof by?n?(e.inject(n,r),e.getName(r)):e:Zs(e)?function c(d,f){var h,g,y=[];for(var k in d)d.hasOwnProperty(k)&&!lf(d[k])&&(Array.isArray(d[k])&&d[k].isCss||Ti(d[k])?y.push(af(k)+":",d[k],";"):Zs(d[k])?y.push.apply(y,c(d[k],k)):y.push(af(k)+": "+(h=k,(g=d[k])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||h in B0?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var sf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ty(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ti(e)||Zs(e)?sf(Er(tf(fa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:sf(Er(tf(e,n)))}var My=function(e,t,n){return n===void 0&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme},Ly=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zy=/(^-|-$)/g;function Fl(e){return e.replace(Ly,"-").replace(zy,"")}var jy=function(e){return eu(gm(e)>>>0)};function fo(e){return typeof e=="string"&&!0}var nu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Dy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function $y(e,t,n){var r=e[n];nu(t)&&nu(r)?xm(r,t):e[n]=t}function xm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(nu(l))for(var a in l)Dy(a)&&$y(e,l[a],a)}return e}var Sm=$i.createContext();Sm.Consumer;var Hl={};function km(e,t,n){var r=Cc(e),i=!fo(e),o=t.attrs,l=o===void 0?fa:o,a=t.componentId,s=a===void 0?function(p,v){var x=typeof p!="string"?"sc":Fl(p);Hl[x]=(Hl[x]||0)+1;var P=x+"-"+jy("5.3.5"+x+Hl[x]);return v?v+"-"+P:P}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(p){return fo(p)?"styled."+p:"Styled("+nf(p)+")"}(e):u,d=t.displayName&&t.componentId?Fl(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,v,x){return e.shouldForwardProp(p,v,x)&&t.shouldForwardProp(p,v,x)}:e.shouldForwardProp);var g,y=new gy(n,d,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,m=function(p,v){return function(x,P,T,b){var S=x.attrs,L=x.componentStyle,j=x.defaultProps,R=x.foldedComponentIds,A=x.shouldForwardProp,$=x.styledComponentId,N=x.target,I=function(F,M,J){F===void 0&&(F=vn);var W=Wt({},M,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in Ti(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}(My(P,K.exports.useContext(Sm),j)||vn,P,S),Y=I[0],z=I[1],O=function(F,M,J,W){var ee=ky(),ie=Ey(),se=M?F.generateAndInjectStyles(vn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(L,b,Y),D=T,U=z.$as||P.$as||z.as||P.as||N,V=fo(U),H=z!==P?Wt({},P,{},z):P,E={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?E.as=H[q]:(A?A(q,Kd,U):!V||Kd(q))&&(E[q]=H[q]));return P.style&&z.style!==P.style&&(E.style=Wt({},P.style,{},z.style)),E.className=Array.prototype.concat(R,$,O!==$?O:null,P.className,z.className).filter(Boolean).join(" "),E.ref=D,K.exports.createElement(U,E)}(g,p,v,k)};return m.displayName=c,(g=$i.forwardRef(m)).attrs=f,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):fa,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var v=t.componentId,x=function(T,b){if(T==null)return{};var S,L,j={},R=Object.keys(T);for(L=0;L<R.length;L++)S=R[L],b.indexOf(S)>=0||(j[S]=T[S]);return j}(t,["componentId"]),P=v&&v+"-"+(fo(p)?p:Fl(nf(p)));return km(p,Wt({},x,{attrs:f,componentId:P}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?xm({},e.defaultProps,p):p}}),g.toString=function(){return"."+g.styledComponentId},i&&ey(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ru=function(e){return function t(n,r,i){if(i===void 0&&(i=vn),!Qa.exports.isValidElementType(r))return Fi(1,String(r));var o=function(){return n(r,i,Ty.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Wt({},i,{},l))},o.attrs=function(l){return t(n,r,Wt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ru[e]=ru(e)});const C=ru,_={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Ry=C.div`
	margin: 0;   
`,Ay=C.a`
	
`,Ny=C.img`
    width: 250px;
	margin: 0;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${_.largeMobile}) {
	    width: 150px;
    }
    @media screen and (min-width: ${_.desktop}) {
	    width: 350px;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
	    width: 450px;
    }
`;var rl={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=K.exports,Fy=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Uy=Object.prototype.hasOwnProperty,Wy=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Uy.call(t,r)&&!By.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fy,type:e,key:o,ref:l,props:i,_owner:Wy.current}}il.Fragment=Hy;il.jsx=Em;il.jsxs=Em;(function(e){e.exports=il})(rl);const bm=rl.exports.Fragment,w=rl.exports.jsx,Q=rl.exports.jsxs,ve=({image:e,altText:t,redirect:n})=>w(Ry,{children:w(Ay,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(Ny,{src:e,alt:t})})}),Hr="/Site-Serra/assets/voitto.e51ea618.svg",Ur="/Site-Serra/assets/iprj.03355e19.svg",Wr="/Site-Serra/assets/inovafri.c4b07fe0.svg",Br="/Site-Serra/assets/wiseup.d9d06fa3.svg",Vr="/Site-Serra/assets/ligajr.52feeabf.svg",Vy=C.div`
    background: #D9D9D9;
	-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	overflow: hidden;
	position: relative;
	width: 100%;

    &::before{
        content: "";
        height: 250px;
        position: absolute;
        width: 200px;
        z-index: 2;
        left: 0;
	    top: 0;
    }

    &::after{
        content: "";
        height: 250px;
        position: absolute;
        width: 200px;
        z-index: 2;
        right: 0;
        top: 0;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }
`,Qy=C.div`
    -webkit-animation: logo-scroll 60s linear infinite;
	animation: logo-scroll 60s linear infinite;
	display: flex;
	width: calc(250px * 14);
	animation-duration: 30s;
	animation-iteration-count: infinite;
	margin: 0;

    @-webkit-keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }

    @keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
`;function qy(){return w(Vy,{children:Q(Qy,{children:[w(ve,{image:Hr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Ur,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Wr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Br,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Vr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Hr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Ur,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Wr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Br,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Vr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Hr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Ur,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Wr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Br,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Vr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Hr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Ur,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Wr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Br,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Vr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Hr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Ur,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Wr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Br,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Vr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const Yy=C.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,Gy=C.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,Ul=C.div`
    margin-left: 2rem;
    width: 100%;
    @media screen and (min-width: ${_.mobile}){
        flex-direction: column;
    }
`,Wl=C.span`
    color: white;
    font-weight: 500;
`,po=C.p`
    color: rgb(180, 180, 180);
`,Xy=C.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${_.mobile}) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        flex-direction: column;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 50%;
    }

`,Bl=C.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${_.mobile}) {
        margin-top: 30%;
    }
    @media screen and (min-width: ${_.desktop}) {
        width: 3rem;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 3.5rem;
    }
`,Vl=C.a`
    text-decoration: none;

`,Ky=C.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${_.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,Jy=C.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${_.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3em;
    }
`,Zy=C.hr`
    width: 90%;
`,e1=C.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,t1=C.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;

    @media screen and (min-width: ${_.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3em;
    }
`,n1=C.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;C.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`;C.img`
    height: 20vh;

    @media screen and (max-width: ${_.notebook}){
        height: 10vh;
        
    }
    
`;const r1=C.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,i1="/Site-Serra/assets/facebook.e9ec1758.svg",o1="/Site-Serra/assets/instagram.a8d6cb3d.svg",a1="/Site-Serra/assets/linkedin.3daaec60.svg",l1=()=>Q(Yy,{children:[Q(r1,{children:[w(t1,{children:"Parceiros"}),w(n1,{children:w(qy,{})})]}),Q(Jy,{children:[Q(Gy,{children:[Q(Ky,{children:[Q(Vl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Bl,{src:i1,alt:"Facebook Serra.Jr"})]}),Q(Vl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Bl,{src:o1,alt:"Instagram Serra.Jr"})]}),Q(Vl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Bl,{src:a1,alt:""})," "]})]}),Q(Xy,{children:[Q(Ul,{children:[w(Wl,{children:"Institucional"}),w(po,{children:"Serra Jr Engenharia"})]}),Q(Ul,{children:[w(Wl,{children:"Atendimento"}),w(po,{children:"Segunda a sexta"}),w(po,{children:"9h \xE0s 19h"})]}),Q(Ul,{children:[w(Wl,{children:"Contato"}),w(po,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(Zy,{}),Q(e1,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]}),s1="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",u1="/Site-Serra/assets/arrow-header.98a9eade.svg";function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var Mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mn||(Mn={}));var uf=function(e){return e},cf="beforeunload",c1="popstate";function d1(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var b=r.location,S=b.pathname,L=b.search,j=b.hash,R=i.state||{};return[R.idx,uf({pathname:S,search:L,hash:j,state:R.usr||null,key:R.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var b=Mn.Pop,S=o(),L=S[0],j=S[1];if(h.length){if(L!=null){var R=c-L;R&&(l={action:b,location:j,retry:function(){P(R*-1)}},P(R))}}else p(b)}}r.addEventListener(c1,a);var s=Mn.Pop,u=o(),c=u[0],d=u[1],f=ff(),h=ff();c==null&&(c=0,i.replaceState(ha({},i.state,{idx:c}),""));function g(b){return typeof b=="string"?b:iu(b)}function y(b,S){return S===void 0&&(S=null),uf(ha({pathname:d.pathname,hash:"",search:""},typeof b=="string"?Wn(b):b,{state:S,key:f1()}))}function k(b,S){return[{usr:b.state,key:b.key,idx:S},g(b)]}function m(b,S,L){return!h.length||(h.call({action:b,location:S,retry:L}),!1)}function p(b){s=b;var S=o();c=S[0],d=S[1],f.call({action:s,location:d})}function v(b,S){var L=Mn.Push,j=y(b,S);function R(){v(b,S)}if(m(L,j,R)){var A=k(j,c+1),$=A[0],N=A[1];try{i.pushState($,"",N)}catch{r.location.assign(N)}p(L)}}function x(b,S){var L=Mn.Replace,j=y(b,S);function R(){x(b,S)}if(m(L,j,R)){var A=k(j,c),$=A[0],N=A[1];i.replaceState($,"",N),p(L)}}function P(b){i.go(b)}var T={get action(){return s},get location(){return d},createHref:g,push:v,replace:x,go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(S){return f.push(S)},block:function(S){var L=h.push(S);return h.length===1&&r.addEventListener(cf,df),function(){L(),h.length||r.removeEventListener(cf,df)}}};return T}function df(e){e.preventDefault(),e.returnValue=""}function ff(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function f1(){return Math.random().toString(36).substr(2,8)}function iu(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Wn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Pc=K.exports.createContext(null),Tc=K.exports.createContext(null),ol=K.exports.createContext({outlet:null,matches:[]});function At(e,t){if(!e)throw new Error(t)}function p1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wn(t):t,i=Om(r.pathname||"/",n);if(i==null)return null;let o=_m(e);h1(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=E1(o[a],i);return l}function _m(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||At(!1),l.relativePath=l.relativePath.slice(r.length));let a=gn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&At(!1),_m(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:S1(a,i.index),routesMeta:s})}),t}function h1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:k1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m1=/^:\w+$/,v1=3,g1=2,y1=1,w1=10,x1=-2,pf=e=>e==="*";function S1(e,t){let n=e.split("/"),r=n.length;return n.some(pf)&&(r+=x1),t&&(r+=g1),n.filter(i=>!pf(i)).reduce((i,o)=>i+(m1.test(o)?v1:o===""?y1:w1),r)}function k1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function E1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=b1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:gn([i,c.pathname]),pathnameBase:Pm(gn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=gn([i,c.pathnameBase]))}return o}function b1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=C1(a[d]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function _1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function C1(e,t){try{return decodeURIComponent(e)}catch{return e}}function O1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wn(e):e;return{pathname:n?n.startsWith("/")?n:P1(n,t):t,search:M1(r),hash:L1(i)}}function P1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cm(e,t,n){let r=typeof e=="string"?Wn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=O1(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function T1(e){return e===""||e.pathname===""?"/":typeof e=="string"?Wn(e).pathname:e.pathname}function Om(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),Pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z1(e){Hi()||At(!1);let{basename:t,navigator:n}=K.exports.useContext(Pc),{hash:r,pathname:i,search:o}=Tm(e),l=i;if(t!=="/"){let a=T1(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):gn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function Hi(){return K.exports.useContext(Tc)!=null}function al(){return Hi()||At(!1),K.exports.useContext(Tc).location}function Mc(){Hi()||At(!1);let{basename:e,navigator:t}=K.exports.useContext(Pc),{matches:n}=K.exports.useContext(ol),{pathname:r}=al(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Cm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=gn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function Tm(e){let{matches:t}=K.exports.useContext(ol),{pathname:n}=al(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>Cm(e,JSON.parse(r),n),[e,r,n])}function j1(e,t){Hi()||At(!1);let{matches:n}=K.exports.useContext(ol),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=al(),a;if(t){var s;let f=typeof t=="string"?Wn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||At(!1),a=f}else a=l;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",d=p1(e,{pathname:c});return D1(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:gn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:gn([o,f.pathnameBase])})),n)}function D1(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(ol.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function qn(e){At(!1)}function $1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:o,static:l=!1}=e;Hi()&&At(!1);let a=Pm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Wn(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,g=K.exports.useMemo(()=>{let y=Om(u,a);return y==null?null:{pathname:y,search:c,hash:d,state:f,key:h}},[a,u,c,d,f,h]);return g==null?null:K.exports.createElement(Pc.Provider,{value:s},K.exports.createElement(Tc.Provider,{children:n,value:{location:g,navigationType:i}}))}function R1(e){let{children:t,location:n}=e;return j1(ou(t),n)}function ou(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,ou(n.props.children));return}n.type!==qn&&At(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=ou(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function au(){return au=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function A1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const N1=["onClick","reloadDocument","replace","state","target","to"];function I1(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=d1({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement($1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function F1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const bt=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=A1(t,N1),c=z1(s),d=H1(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&d(h)}return K.exports.createElement("a",au({},u,{href:c,onClick:f,ref:n,target:a}))});function H1(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Mc(),l=al(),a=Tm(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!F1(s)){s.preventDefault();let u=!!r||iu(l)===iu(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const U1=C.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,W1=C.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,B1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,V1=C.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 1vw;
    }
`,Q1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,q1=C.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #999999;
    top: 17vh;
    width: 20vw;
    border-radius: 0px 0px 20px 20px;
    
    ${({activeStyle:e})=>e?`opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`:`opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`}
    
    @media screen and (min-width: ${_.largeDesktop}){
        top: 10vh;
        
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        top: 13vh;
        
    }

    @media screen and (min-width: ${_.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 15vw;
    }
`;C.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const hf=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,ho=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 2rem;  
    text-decoration: none;
    list-style: none;

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        
        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${_.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,Y1=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${_.notebook}){
        display: none;
    }
`,G1=()=>{const[e,t]=K.exports.useState(!1);return w(Y1,{children:Q(U1,{children:[w(ho,{children:w(bt,{to:"/",children:"Home"})}),w(ho,{children:w(bt,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(ho,{children:Q(B1,{onClick:()=>t(!e),children:[Q(Q1,{children:[w(W1,{children:"Servi\xE7os"}),w(V1,{activeStyle:e,src:u1,alt:"Seta"})]}),Q(q1,{activeStyle:e,children:[w(hf,{children:w(bt,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(hf,{children:w(bt,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(ho,{children:w(bt,{to:"/contatos",children:"Contato"})})]})})},Qr=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        opacity: 1;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,X1=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #999999;
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    top: 17vh;
    right: 0;
    width: 40vw;
    margin-right: 10px;
    color: #fff;

    ${({activeStyle:e})=>e?`opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`:`opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`}

    @media screen and (min-width: ${_.notebook}){
        visibility: hidden;
    }   
`,K1=({status:e,toogle:t})=>Q(X1,{activeStyle:e,children:[w(Qr,{children:w(bt,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(Qr,{children:w(bt,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Qr,{children:w(bt,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Qr,{children:w(bt,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(Qr,{children:w(bt,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Ql=C.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,J1=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    border: none;
    display: none;
    transition: 0.3s;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
    @media screen and (max-width: ${_.notebook}){
        display: flex;
        margin-right: 20px;
    }
`,Z1=({status:e})=>(console.log(e),Q(J1,{children:[w(Ql,{active:e,type:"first-line"}),w(Ql,{active:e,type:"mid-line"}),w(Ql,{active:e,type:"last-line"})]})),ew=C.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${_.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`,tw=C.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}){
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: ${_.largeDesktop}){
        height: 10vh;
        
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        height: 13vh;
    }
`,nw=C.div`
    margin-right: 7%;
`,rw=()=>{const[e,t]=K.exports.useState(!1);return Q(tw,{children:[w(bt,{to:"/",children:w(ew,{src:s1,alt:"Logo Serra Jr"})}),w(nw,{onClick:()=>{t(!e)},children:w(Z1,{status:e})}),w(G1,{}),w(K1,{status:e,toogle:t})]})},iw=C.img`
    height: 15vh;

    @media screen and (max-width: ${_.notebook}) {
        height: 10vh;
    }
`,ow=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    min-height: 90px;
    margin-bottom: 0;
    width: 200px;
    text-align: center;
    color: #000000;

    @media screen and (min-width: ${_.largeDesktop}) {
        line-height: 50px;
        font-size: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        line-height: 60px;
        font-size: 60px;
        width: 500px;
    }
`,aw=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen  and (max-width: ${_.tablet}){
        margin-top: 30px;
        margin-bottom: 0;
    }
`,lw=({icon:e,text:t,alt:n})=>Q(aw,{children:[w(iw,{src:e,alt:n}),w(ow,{children:t})]}),sw=C.div`
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 7px 7px 16px -3px #000000; 
    box-shadow: 7px 7px 16px -3px #000000;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`,uw=C.p`
    margin: 0;
    width: 100%;
    height: 4rem;
    min-height: 30px;
    background-color:${({titleColor:e})=>e!=null?e:"#FD6300"};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
        height: 8rem;
    }
`,cw=C.a`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: ${_.notebook}){
        width: 40%;
    }
`,dw=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 100%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover{
        opacity: 0.8;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
        width: 60%;
    }
`,fw=C.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,pw=C.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,mf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>Q(pw,{children:[w(uw,{titleColor:r,children:e}),Q(sw,{children:[w(fw,{children:i.map((l,a)=>w(lw,{icon:l,text:o[a],alt:o[a]},a))}),w(cw,{href:t,children:w(dw,{buttonColor:r,children:n})})]})]}),hw=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 30px;
    }
    
    @media screen and (min-width: ${_.largeMobile}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${_.notebook}) {
        font-size: 38px;
        width: 80%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,mw=C.hr`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${_.tablet}) {
        height: 7px;
    }
    @media screen and (max-width: ${_.notebook}) {
        width: 60%;
    }
`,vw=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,gw=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Lc=({text:e,fontSize:t,titleWidth:n})=>w(vw,{children:Q(gw,{children:[w(hw,{style:{fontSize:t},children:e}),w(mw,{gradientWidth:n})]})});var Mm={},Lm={},ll={},zm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(zm);var yw="Expected a function",vf=0/0,ww="[object Symbol]",xw=/^\s+|\s+$/g,Sw=/^[-+]0x[0-9a-f]+$/i,kw=/^0b[01]+$/i,Ew=/^0o[0-7]+$/i,bw=parseInt,_w=typeof Yr=="object"&&Yr&&Yr.Object===Object&&Yr,Cw=typeof self=="object"&&self&&self.Object===Object&&self,Ow=_w||Cw||Function("return this")(),Pw=Object.prototype,Tw=Pw.toString,Mw=Math.max,Lw=Math.min,ql=function(){return Ow.Date.now()};function zw(e,t,n){var r,i,o,l,a,s,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(yw);t=gf(t)||0,lu(n)&&(c=!!n.leading,d="maxWait"in n,o=d?Mw(gf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(T){var b=r,S=i;return r=i=void 0,u=T,l=e.apply(S,b),l}function g(T){return u=T,a=setTimeout(m,t),c?h(T):l}function y(T){var b=T-s,S=T-u,L=t-b;return d?Lw(L,o-S):L}function k(T){var b=T-s,S=T-u;return s===void 0||b>=t||b<0||d&&S>=o}function m(){var T=ql();if(k(T))return p(T);a=setTimeout(m,y(T))}function p(T){return a=void 0,f&&r?h(T):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(ql())}function P(){var T=ql(),b=k(T);if(r=arguments,i=this,s=T,b){if(a===void 0)return g(s);if(d)return a=setTimeout(m,t),h(s)}return a===void 0&&(a=setTimeout(m,t)),l}return P.cancel=v,P.flush=x,P}function lu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function jw(e){return!!e&&typeof e=="object"}function Dw(e){return typeof e=="symbol"||jw(e)&&Tw.call(e)==ww}function gf(e){if(typeof e=="number")return e;if(Dw(e))return vf;if(lu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=lu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(xw,"");var n=kw.test(e);return n||Ew.test(e)?bw(e.slice(2),n?2:8):Sw.test(e)?vf:+e}var $w=zw,Ui={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ui);var G={};Object.defineProperty(G,"__esModule",{value:!0});G.checkSpecKeys=G.checkNavigable=G.changeSlide=G.canUseDOM=G.canGoNext=void 0;G.clamp=jm;G.swipeStart=G.swipeMove=G.swipeEnd=G.slidesOnRight=G.slidesOnLeft=G.slideHandler=G.siblingDirection=G.safePreventDefault=G.lazyStartIndex=G.lazySlidesOnRight=G.lazySlidesOnLeft=G.lazyEndIndex=G.keyHandler=G.initializedState=G.getWidth=G.getTrackLeft=G.getTrackCSS=G.getTrackAnimateCSS=G.getTotalSlides=G.getSwipeDirection=G.getSlideCount=G.getRequiredLazySlides=G.getPreClones=G.getPostClones=G.getOnDemandLazySlides=G.getNavigableIndexes=G.getHeight=G.extractObject=void 0;var Rw=Aw(K.exports);function Aw(e){return e&&e.__esModule?e:{default:e}}function yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yf(Object(n),!0).forEach(function(r){Nw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jm(e,t,n){return Math.max(t,Math.min(e,n))}var jn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};G.safePreventDefault=jn;var zc=function(t){for(var n=[],r=jc(t),i=Dc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};G.getOnDemandLazySlides=zc;var Iw=function(t){for(var n=[],r=jc(t),i=Dc(t),o=r;o<i;o++)n.push(o);return n};G.getRequiredLazySlides=Iw;var jc=function(t){return t.currentSlide-Dm(t)};G.lazyStartIndex=jc;var Dc=function(t){return t.currentSlide+$m(t)};G.lazyEndIndex=Dc;var Dm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};G.lazySlidesOnLeft=Dm;var $m=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};G.lazySlidesOnRight=$m;var ma=function(t){return t&&t.offsetWidth||0};G.getWidth=ma;var $c=function(t){return t&&t.offsetHeight||0};G.getHeight=$c;var Rc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};G.getSwipeDirection=Rc;var Ac=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};G.canGoNext=Ac;var Fw=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};G.extractObject=Fw;var Hw=function(t){var n=Rw.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ma(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(ma(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&$c(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=zc(we(we({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(h);var g={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(g.autoplaying="playing"),g};G.initializedState=Hw;var Uw=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,g=t.lazyLoadedList;if(n&&r)return{};var y=l,k,m,p,v={},x={},P=o?l:jm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&g.indexOf(y)<0&&(g=g.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:g,targetSlide:y},x={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%d!==0&&(k=a-a%d):k=0):!Ac(t)&&y>u?y=k=u:c&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%d!==0&&(k=0):k=a-f),!o&&y+f>=a&&(k=a-f),m=Li(we(we({},t),{},{slideIndex:y})),p=Li(we(we({},t),{},{slideIndex:k})),o||(m===p&&(y=k),m=p),s&&(g=g.concat(zc(we(we({},t),{},{currentSlide:y})))),h?(v={animating:!0,currentSlide:k,trackStyle:Nc(we(we({},t),{},{left:m})),lazyLoadedList:g,targetSlide:P},x={animating:!1,currentSlide:k,trackStyle:Mi(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:P}):v={currentSlide:k,trackStyle:Mi(we(we({},t),{},{left:p})),lazyLoadedList:g,targetSlide:P};return{state:v,nextState:x}};G.slideHandler=Uw;var Ww=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,g=t.infinite;if(l=c%s!==0,r=l?0:(c-d)%s,n.message==="previous")o=r===0?s:u-r,a=d-o,h&&!g&&(i=d-o,a=i===-1?c-1:i),g||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=d+o,h&&!g&&(a=(d+s)%c+r),g||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,g){var y=Im(we(we({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};G.changeSlide=Ww;var Bw=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};G.keyHandler=Bw;var Vw=function(t,n,r){return t.target.tagName==="IMG"&&jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};G.swipeStart=Vw;var Qw=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,h=n.swiped,g=n.swiping,y=n.slideCount,k=n.slidesToScroll,m=n.infinite,p=n.touchObject,v=n.swipeEvent,x=n.listHeight,P=n.listWidth;if(!r){if(i)return jn(t);o&&l&&a&&jn(t);var T,b={},S=Li(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var L=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!g&&L>10)return{scrolling:!0};a&&(p.swipeLength=L);var j=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(j=p.curY>p.startY?1:-1);var R=Math.ceil(y/k),A=Rc(n.touchObject,a),$=p.swipeLength;return m||(u===0&&(A==="right"||A==="down")||u+1>=R&&(A==="left"||A==="up")||!Ac(n)&&(A==="left"||A==="up"))&&($=p.swipeLength*c,d===!1&&f&&(f(A),b.edgeDragged=!0)),!h&&v&&(v(A),b.swiped=!0),o?T=S+$*(x/P)*j:s?T=S-$*j:T=S+$*j,a&&(T=S+$*j),b=we(we({},b),{},{touchObject:p,swipeLeft:T,trackStyle:Mi(we(we({},n),{},{left:T}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(b.swiping=!0,jn(t)),b}};G.swipeMove=Qw;var qw=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,h=n.targetSlide,g=n.currentSlide,y=n.infinite;if(!r)return i&&jn(t),{};var k=s?u/a:l/a,m=Rc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>k){jn(t),f&&f(m);var v,x,P=y?g:h;switch(m){case"left":case"up":x=P+uu(n),v=c?su(n,x):x,p.currentDirection=0;break;case"right":case"down":x=P-uu(n),v=c?su(n,x):x,p.currentDirection=1;break;default:v=P}p.triggerSlideHandler=v}else{var T=Li(n);p.trackStyle=Nc(we(we({},n),{},{left:T}))}return p};G.swipeEnd=qw;var Rm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};G.getNavigableIndexes=Rm;var su=function(t,n){var r=Rm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};G.checkNavigable=su;var uu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+$c(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+ma(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};G.getSlideCount=uu;var sl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};G.checkSpecKeys=sl;var Mi=function(t){sl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Nm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};G.getTrackCSS=Mi;var Nc=function(t){sl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Mi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};G.getTrackAnimateCSS=Nc;var Li=function(t){if(t.unslick)return 0;sl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,h=t.fade,g=t.vertical,y=0,k,m,p=0;if(h||t.slideCount===1)return 0;var v=0;if(i?(v=-ui(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,p=v*f,g?k=n*f*-1+p:k=n*u*-1+y,d===!0){var x,P=r&&r.node;if(x=n+ui(t),m=P&&P.childNodes[x],k=m?m.offsetLeft*-1:0,o===!0){x=i?n+ui(t):n,m=P&&P.children[x],k=0;for(var T=0;T<x;T++)k-=P&&P.children[T]&&P.children[T].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(c-m.offsetWidth)/2}}return k};G.getTrackLeft=Li;var ui=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};G.getPreClones=ui;var Am=function(t){return t.unslick||!t.infinite?0:t.slideCount};G.getPostClones=Am;var Nm=function(t){return t.slideCount===1?1:ui(t)+t.slideCount+Am(t)};G.getTotalSlides=Nm;var Im=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Fm(t)?"left":"right":t.targetSlide<t.currentSlide-Hm(t)?"right":"left"};G.siblingDirection=Im;var Fm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};G.slidesOnRight=Fm;var Hm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};G.slidesOnLeft=Hm;var Yw=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};G.canUseDOM=Yw;var ul={};function cu(e){return cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cu(e)}Object.defineProperty(ul,"__esModule",{value:!0});ul.Track=void 0;var tn=Um(K.exports),Yl=Um(Ui.exports),Gl=G;function Um(e){return e&&e.__esModule?e:{default:e}}function du(){return du=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function Gw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xw(e,t,n){return t&&wf(e.prototype,t),n&&wf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Kw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function fu(e,t){return fu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fu(e,t)}function Jw(e){var t=ex();return function(){var r=va(e),i;if(t){var o=va(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Zw(this,i)}}function Zw(e,t){if(t&&(cu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pu(e)}function pu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ex(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function va(e){return va=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},va(e)}function xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xf(Object(n),!0).forEach(function(r){hu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xl=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},tx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Kl=function(t,n){return t.key||n},nx=function(t){var n,r=[],i=[],o=[],l=tn.default.Children.count(t.children),a=(0,Gl.lazyStartIndex)(t),s=(0,Gl.lazyEndIndex)(t);return tn.default.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=tn.default.createElement("div",null);var h=tx(Je(Je({},t),{},{index:c})),g=d.props.className||"",y=Xl(Je(Je({},t),{},{index:c}));if(r.push(tn.default.cloneElement(d,{key:"original"+Kl(d,c),"data-index":c,className:(0,Yl.default)(y,g),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Je(Je({outline:"none"},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=l-c;k<=(0,Gl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(d=u),y=Xl(Je(Je({},t),{},{index:n})),i.push(tn.default.cloneElement(d,{key:"precloned"+Kl(d,n),"data-index":n,tabIndex:"-1",className:(0,Yl.default)(y,g),"aria-hidden":!y["slick-active"],style:Je(Je({},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+c,n<s&&(d=u),y=Xl(Je(Je({},t),{},{index:n})),o.push(tn.default.cloneElement(d,{key:"postcloned"+Kl(d,n),"data-index":n,tabIndex:"-1",className:(0,Yl.default)(y,g),"aria-hidden":!y["slick-active"],style:Je(Je({},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},rx=function(e){Kw(n,e);var t=Jw(n);function n(){var r;Gw(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),hu(pu(r),"node",null),hu(pu(r),"handleRef",function(a){r.node=a}),r}return Xw(n,[{key:"render",value:function(){var i=nx(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return tn.default.createElement("div",du({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(tn.default.PureComponent);ul.Track=rx;var cl={};function mu(e){return mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mu(e)}Object.defineProperty(cl,"__esModule",{value:!0});cl.Dots=void 0;var mo=Wm(K.exports),ix=Wm(Ui.exports),Sf=G;function Wm(e){return e&&e.__esModule?e:{default:e}}function kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ox(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(n),!0).forEach(function(r){ax(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ax(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sx(e,t,n){return t&&Ef(e.prototype,t),n&&Ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ux(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vu(e,t)}function vu(e,t){return vu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vu(e,t)}function cx(e){var t=px();return function(){var r=ga(e),i;if(t){var o=ga(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return dx(this,i)}}function dx(e,t){if(t&&(mu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fx(e)}function fx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function px(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ga(e)}var hx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},mx=function(e){ux(n,e);var t=cx(n);function n(){return lx(this,n),t.apply(this,arguments)}return sx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,h=hx({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:s}),g={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var m=(k+1)*u-1,p=s?m:(0,Sf.clamp)(m,0,d-1),v=p-(u-1),x=s?v:(0,Sf.clamp)(v,0,d-1),P=(0,ix.default)({"slick-active":s?f>=x&&f<=p:f===x}),T={message:"dots",index:k,slidesToScroll:u,currentSlide:f},b=this.clickHandler.bind(this,T);y=y.concat(mo.default.createElement("li",{key:k,className:P},mo.default.cloneElement(this.props.customPaging(k),{onClick:b})))}return mo.default.cloneElement(this.props.appendDots(y),ox({className:this.props.dotsClass},g))}}]),n}(mo.default.PureComponent);cl.Dots=mx;var br={};function gu(e){return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gu(e)}Object.defineProperty(br,"__esModule",{value:!0});br.PrevArrow=br.NextArrow=void 0;var hr=Vm(K.exports),Bm=Vm(Ui.exports),vx=G;function Vm(e){return e&&e.__esModule?e:{default:e}}function ya(){return ya=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){gx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qm(e,t,n){return t&&_f(e.prototype,t),n&&_f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ym(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yu(e,t)}function yu(e,t){return yu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yu(e,t)}function Gm(e){var t=xx();return function(){var r=xa(e),i;if(t){var o=xa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return yx(this,i)}}function yx(e,t){if(t&&(gu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wx(e)}function wx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xa(e)}var Sx=function(e){Ym(n,e);var t=Gm(n);function n(){return Qm(this,n),t.apply(this,arguments)}return qm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Bm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=hr.default.cloneElement(this.props.prevArrow,wa(wa({},l),a)):s=hr.default.createElement("button",ya({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(hr.default.PureComponent);br.PrevArrow=Sx;var kx=function(e){Ym(n,e);var t=Gm(n);function n(){return Qm(this,n),t.apply(this,arguments)}return qm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,vx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Bm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=hr.default.cloneElement(this.props.nextArrow,wa(wa({},l),a)):s=hr.default.createElement("button",ya({key:"1",type:"button"},l)," ","Next"),s}}]),n}(hr.default.PureComponent);br.NextArrow=kx;var Xm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),wu=typeof window<"u"&&typeof document<"u"&&window.document===document,Sa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Ex=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Sa):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),bx=2;function _x(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Ex(o)}function a(){var s=Date.now();if(n){if(s-i<bx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var Cx=20,Ox=["top","right","bottom","left","width","height","size","weight"],Px=typeof MutationObserver<"u",Tx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=_x(this.refresh.bind(this),Cx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!wu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Px?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!wu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Ox.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Km=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_r=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Sa},Jm=dl(0,0,0,0);function ka(e){return parseFloat(e)||0}function Cf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+ka(o)},0)}function Mx(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=ka(l)}return n}function Lx(e){var t=e.getBBox();return dl(0,0,t.width,t.height)}function zx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Jm;var r=_r(e).getComputedStyle(e),i=Mx(r),o=i.left+i.right,l=i.top+i.bottom,a=ka(r.width),s=ka(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Cf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Cf(r,"top","bottom")+l)),!Dx(e)){var u=Math.round(a+o)-t,c=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(s-=c)}return dl(i.left,i.top,a,s)}var jx=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _r(e).SVGGraphicsElement}:function(e){return e instanceof _r(e).SVGElement&&typeof e.getBBox=="function"}}();function Dx(e){return e===_r(e).document.documentElement}function $x(e){return wu?jx(e)?Lx(e):zx(e):Jm}function Rx(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Km(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function dl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ax=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=dl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=$x(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Nx=function(){function e(t,n){var r=Rx(n);Km(this,{target:t,contentRect:r})}return e}(),Ix=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Xm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ax(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Nx(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Zm=typeof WeakMap<"u"?new WeakMap:new Xm,ev=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Tx.getInstance(),r=new Ix(t,n,this);Zm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ev.prototype[e]=function(){var t;return(t=Zm.get(this))[e].apply(t,arguments)}});var Fx=function(){return typeof Sa.ResizeObserver<"u"?Sa.ResizeObserver:ev}();const Hx=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),Ux=rp(Hx);Object.defineProperty(ll,"__esModule",{value:!0});ll.InnerSlider=void 0;var qe=Wi(K.exports),Wx=Wi(zm),Bx=Wi($w),Vx=Wi(Ui.exports),Se=G,Qx=ul,qx=cl,Of=br,Yx=Wi(Ux);function Wi(e){return e&&e.__esModule?e:{default:e}}function Ea(e){return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function Gx(e,t){if(e==null)return{};var n=Xx(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jx(e,t,n){return t&&Tf(e.prototype,t),n&&Tf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function eS(e){var t=nS();return function(){var r=_a(e),i;if(t){var o=_a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return tS(this,i)}}function tS(e,t){if(t&&(Ea(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _a(e){return _a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_a(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rS=function(e){Zx(n,e);var t=eS(n);function n(r){var i;Kx(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Yx.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=qe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:qe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Bx.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var c=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:c});var d=(0,Se.getTrackCSS)(l);(a||qe.default.Children.count(i.props.children)!==qe.default.Children.count(l.children))&&(u.trackStyle=d),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(b){s.push(b.props.style.width),l+=b.props.style.width});for(var d=0;d<u;d++)a+=s[s.length-1-d],l+=s[s.length-1-d];for(var f=0;f<c;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var g={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");g.left="calc(".concat(g.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:g}}var k=qe.default.Children.count(i.props.children),m=Z(Z(Z({},i.props),i.state),{},{slideCount:k}),p=(0,Se.getPreClones)(m)+(0,Se.getPostClones)(m)+k,v=100/i.props.slidesToShow*p,x=100/p,P=-x*((0,Se.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(P+=(100-x*v/100)/2);var T={width:v+"%",left:P+"%"};return{slideWidth:x+"%",trackStyle:T}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var c=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,c=s.beforeChange,d=s.onLazyLoad,f=s.speed,h=s.afterChange,g=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,m=y.nextState;if(!!k){c&&c(g,k.currentSlide);var p=k.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(g),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,x=Gx(m,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,Vx.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=Z(Z({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=qe.default.createElement(qx.Dots,d)}var h,g,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=qe.default.createElement(Of.PrevArrow,y),g=qe.default.createElement(Of.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},k),m),v=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},P={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},P={className:l}),qe.default.createElement("div",P,i.props.unslick?"":h,qe.default.createElement("div",ba({ref:i.listRefHandler},x),qe.default.createElement(Qx.Track,ba({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":g,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=Z(Z({},Wx.default),{},{currentSlide:i.props.initialSlide,slideCount:qe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return Jx(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Ea(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||qe.default.Children.count(this.props.children)!==qe.default.Children.count(i.children)}}]),n}(qe.default.Component);ll.InnerSlider=rS;var iS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},oS=iS,aS=oS,lS=function(e){var t=/[height|width]$/;return t.test(e)},Mf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=aS(r),lS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},sS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Mf(n),r<e.length-1&&(t+=", ")}),t):Mf(e)},uS=sS,tv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(tv);var Jl,Lf;function cS(){if(Lf)return Jl;Lf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Jl=e,Jl}var Zl,zf;function nv(){if(zf)return Zl;zf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Zl={isFunction:n,isArray:t,each:e},Zl}var es,jf;function dS(){if(jf)return es;jf=1;var e=cS(),t=nv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},es=n,es}var ts,Df;function fS(){if(Df)return ts;Df=1;var e=dS(),t=nv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,c=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[l].addHandler(d)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},ts=o,ts}var ns,$f;function pS(){if($f)return ns;$f=1;var e=fS();return ns=new e,ns}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=ll,i=a(uS),o=a(tv),l=G;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var L=1;L<arguments.length;L++){var j=arguments[L];for(var R in j)Object.prototype.hasOwnProperty.call(j,R)&&(S[R]=j[R])}return S},s.apply(this,arguments)}function u(S,L){var j=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);L&&(R=R.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),j.push.apply(j,R)}return j}function c(S){for(var L=1;L<arguments.length;L++){var j=arguments[L]!=null?arguments[L]:{};L%2?u(Object(j),!0).forEach(function(R){P(S,R,j[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(j,R))})}return S}function d(S,L){if(!(S instanceof L))throw new TypeError("Cannot call a class as a function")}function f(S,L){for(var j=0;j<L.length;j++){var R=L[j];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(S,R.key,R)}}function h(S,L,j){return L&&f(S.prototype,L),j&&f(S,j),Object.defineProperty(S,"prototype",{writable:!1}),S}function g(S,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(L&&L.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),L&&y(S,L)}function y(S,L){return y=Object.setPrototypeOf||function(R,A){return R.__proto__=A,R},y(S,L)}function k(S){var L=v();return function(){var R=x(S),A;if(L){var $=x(this).constructor;A=Reflect.construct(R,arguments,$)}else A=R.apply(this,arguments);return m(this,A)}}function m(S,L){if(L&&(t(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},x(S)}function P(S,L,j){return L in S?Object.defineProperty(S,L,{value:j,enumerable:!0,configurable:!0,writable:!0}):S[L]=j,S}var T=(0,l.canUseDOM)()&&pS(),b=function(S){g(j,S);var L=k(j);function j(R){var A;return d(this,j),A=L.call(this,R),P(p(A),"innerSliderRefHandler",function($){return A.innerSlider=$}),P(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),P(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),P(p(A),"slickGoTo",function($){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo($,N)}),P(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),P(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(j,[{key:"media",value:function(A,$){T.register(A,$),this._responsiveMediaHandlers.push({query:A,handler:$})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var $=this.props.responsive.map(function(I){return I.breakpoint});$.sort(function(I,Y){return I-Y}),$.forEach(function(I,Y){var z;Y===0?z=(0,i.default)({minWidth:0,maxWidth:I}):z=(0,i.default)({minWidth:$[Y-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media(z,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:$.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){T.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,$,N;this.state.breakpoint?(N=this.props.responsive.filter(function(q){return q.breakpoint===A.state.breakpoint}),$=N[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),N[0].settings)):$=c(c({},o.default),this.props),$.centerMode&&($.slidesToScroll>1,$.slidesToScroll=1),$.fade&&($.slidesToShow>1,$.slidesToScroll>1,$.slidesToShow=1,$.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(q){return typeof q=="string"?!!q.trim():!!q}),$.variableWidth&&($.rows>1||$.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),$.variableWidth=!1);for(var Y=[],z=null,O=0;O<I.length;O+=$.rows*$.slidesPerRow){for(var D=[],U=O;U<O+$.rows*$.slidesPerRow;U+=$.slidesPerRow){for(var V=[],H=U;H<U+$.slidesPerRow&&($.variableWidth&&I[H].props.style&&(z=I[H].props.style.width),!(H>=I.length));H+=1)V.push(n.default.cloneElement(I[H],{key:100*O+10*U+H,tabIndex:-1,style:{width:"".concat(100/$.slidesPerRow,"%"),display:"inline-block"}}));D.push(n.default.createElement("div",{key:10*O+U},V))}$.variableWidth?Y.push(n.default.createElement("div",{key:O,style:{width:z}},D)):Y.push(n.default.createElement("div",{key:O},D))}if($==="unslick"){var E="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:E},I)}else Y.length<=$.slidesToShow&&($.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},$),Y)}}]),j}(n.default.Component);e.default=b})(Lm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Lm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Mm);const rv=Ma(Mm);const hS=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
    
`,mS=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${_.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,vS=C.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${_.tablet}) {    
        width: 96%;
        max-height: 40vh;
    }

    @media screen and (max-width: ${_.mobile}) {
        width: 100%;
        max-height: 40vh;
    }
    
`,gS=C.div`
    margin: 20px;
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
`,yS=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(gS,{containerWidth:e.width,children:w(rv,{...t,children:e.carouselData.map((n,r)=>w(hS,{children:w(mS,{children:w(vS,{src:n.image,alt:n.alt})})},r))})})},wS="/Site-Serra/assets/membros-1.26cb4867.svg",xS="/Site-Serra/assets/membros-2.457898e5.svg",SS="/Site-Serra/assets/missao-icon.4dc65479.svg",kS="/Site-Serra/assets/visao-icon.75e2e4de.svg",ES="/Site-Serra/assets/valores-icon.b6d7390b.svg",Te={members:[{image:wS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"},{image:xS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"}],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:SS,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:kS,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:ES,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia","Gest\xE3o segura","Impactar nossa era","Evolu\xE7\xE3o constante","Responsabilidade com os clientes"],content:void 0}]},bS=C.div`
    width: 100%;
    height: 6rem;
    min-height: 30px;
    background-color: ${({titleColor:e})=>e!=null?e:"#FD6300"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 20px;

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,Rf=C.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${_.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${_.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,Af=C.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
    }

`,_S=C.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,CS=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 50%;
    padding: 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    @media screen and (min-width: ${_.desktop}) {
        width: 30%;
        font-size: 30px;
    }
    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
        font-size: 40px;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 30%;
        font-size: 60px;
    }
`,OS=C.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
    
    ${({carouselStyle:e})=>e?null:`display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`}

    
`,PS=C.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 2%;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${_.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
    }
`,TS=C.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${_.desktop}) {
        font-size: 30px;
        width: 90%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
        width: 80%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 80%;
    }
`,Nf=C.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${_.tablet}) {
        width: 90%;
    }
    
`,MS=C.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: ${_.tablet}) {
        width:70%;
        height: 70%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 90%;
        height: 90%;
    }
`,iv=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>Q(OS,{carouselStyle:s,children:[w(bS,{titleColor:r,children:e}),s?w(Rf,{children:Q(Af,{children:[w(Nf,{children:w(PS,{children:Te.membersText})}),w(yS,{width:"50%",carouselData:Te.members})]})}):Q(Rf,{children:[Q(Af,{children:[w(Nf,{children:w(TS,{children:o})}),w(MS,{src:l,alt:a})]}),i?w(_S,{href:t,children:w(CS,{buttonColor:r,children:n})}):null]})]});var ov={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Yr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>z});var c=u(4087),d=u.n(c);const f=function(O){return new RegExp(/<[a-z][\s\S]*>/i).test(O)},h=function(O){var D=document.createElement("div");return D.innerHTML=O,D.childNodes},g=function(O,D){return Math.floor(Math.random()*(D-O+1))+O};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",m="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",x="CALL_FUNCTION",P="ADD_HTML_TAG_ELEMENT",T="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",S="CHANGE_CURSOR",L="PASTE_STRING",j="HTML_TAG";function R(O,D){var U=Object.keys(O);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(O);D&&(V=V.filter(function(H){return Object.getOwnPropertyDescriptor(O,H).enumerable})),U.push.apply(U,V)}return U}function A(O){for(var D=1;D<arguments.length;D++){var U=arguments[D]!=null?arguments[D]:{};D%2?R(Object(U),!0).forEach(function(V){Y(O,V,U[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(U)):R(Object(U)).forEach(function(V){Object.defineProperty(O,V,Object.getOwnPropertyDescriptor(U,V))})}return O}function $(O){return function(D){if(Array.isArray(D))return N(D)}(O)||function(D){if(typeof Symbol<"u"&&D[Symbol.iterator]!=null||D["@@iterator"]!=null)return Array.from(D)}(O)||function(D,U){if(D){if(typeof D=="string")return N(D,U);var V=Object.prototype.toString.call(D).slice(8,-1);return V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set"?Array.from(D):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?N(D,U):void 0}}(O)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(O,D){(D==null||D>O.length)&&(D=O.length);for(var U=0,V=new Array(D);U<D;U++)V[U]=O[U];return V}function I(O,D){for(var U=0;U<D.length;U++){var V=D[U];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(O,V.key,V)}}function Y(O,D,U){return D in O?Object.defineProperty(O,D,{value:U,enumerable:!0,configurable:!0,writable:!0}):O[D]=U,O}const z=function(){function O(V,H){var E=this;if(function(F,M){if(!(F instanceof M))throw new TypeError("Cannot call a class as a function")}(this,O),Y(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Y(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Y(this,"setupWrapperElement",function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))}),Y(this,"start",function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E}),Y(this,"pause",function(){return E.state.eventLoopPaused=!0,E}),Y(this,"stop",function(){return E.state.eventLoop&&((0,c.cancel)(E.state.eventLoop),E.state.eventLoop=null),E}),Y(this,"pauseFor",function(F){return E.addEventToQueue(v,{ms:F}),E}),Y(this,"typeOutAllStrings",function(){return typeof E.options.strings=="string"?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach(function(F){E.typeString(F).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)}),E)}),Y(this,"typeString",function(F){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return E.typeOutHTMLString(F,M);if(F){var J=E.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");E.typeCharacters(ee,M)}return E}),Y(this,"pasteString",function(F){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?E.typeOutHTMLString(F,M,!0):(F&&E.addEventToQueue(L,{character:F,node:M}),E)}),Y(this,"typeOutHTMLString",function(F){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",E.addEventToQueue(P,{node:ie,parentNode:M}),J?E.pasteString(se,ie):E.typeString(se,ie)):ie.textContent&&(J?E.pasteString(ie.textContent,M):E.typeString(ie.textContent,M))}return E}),Y(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return E.addEventToQueue(m,{speed:F}),E}),Y(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return E.addEventToQueue(T,{speed:F}),E}),Y(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return E.addEventToQueue(b,{delay:F}),E}),Y(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return E.addEventToQueue(S,{cursor:F}),E}),Y(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var M=0;M<F;M++)E.addEventToQueue(k);return E}),Y(this,"callFunction",function(F,M){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return E.addEventToQueue(x,{cb:F,thisArg:M}),E}),Y(this,"typeCharacters",function(F){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){E.addEventToQueue(y,{character:J,node:M})}),E}),Y(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){E.addEventToQueue(k)}),E}),Y(this,"addEventToQueue",function(F,M){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return E.addEventToStateProperty(F,M,J,"eventQueue")}),Y(this,"addReverseCalledEvent",function(F,M){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=E.options.loop;return W?E.addEventToStateProperty(F,M,J,"reverseCalledEvents"):E}),Y(this,"addEventToStateProperty",function(F,M){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:M||{}};return E.state[W]=J?[ee].concat($(E.state[W])):[].concat($(E.state[W]),[ee]),E}),Y(this,"runEventLoop",function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var F=Date.now(),M=F-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=$(E.state.calledEvents),E.state.calledEvents=[],E.options=A({},E.state.initialOptions)}if(E.state.eventLoop=d()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(F<E.state.pauseUntil)return;E.state.pauseUntil=null}var J,W=$(E.state.eventQueue),ee=W.shift();if(!(M<=(J=ee.eventName===p||ee.eventName===k?E.options.deleteSpeed==="natural"?g(40,80):E.options.deleteSpeed:E.options.delay==="natural"?g(120,160):E.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(E.logInDevMode({currentEvent:ee,state:E.state,delay:J}),ie){case L:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;E.options.onCreateTextNode&&typeof E.options.onCreateTextNode=="function"&&(oe=E.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):E.state.elements.wrapper.appendChild(oe)),E.state.visibleNodes=[].concat($(E.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case k:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var De=ee.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(De);break;case x:var ce=ee.eventArgs,Le=ce.cb,En=ce.thisArg;Le.call(En,{elements:E.state.elements});break;case P:var Pe=ee.eventArgs,Xt=Pe.node,Nt=Pe.parentNode;Nt?Nt.appendChild(Xt):E.state.elements.wrapper.appendChild(Xt),E.state.visibleNodes=[].concat($(E.state.visibleNodes),[{type:j,node:Xt,parentNode:Nt||E.state.elements.wrapper}]);break;case m:var it=E.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:T,eventArgs:{speed:te,temp:!0}});for(var Bn=0,zr=it.length;Bn<zr;Bn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:T,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var Lt=ee.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var pl=E.state.visibleNodes.pop(),wv=pl.type,Qi=pl.node,xv=pl.character;E.options.onRemoveNode&&typeof E.options.onRemoveNode=="function"&&E.options.onRemoveNode({node:Qi,character:xv}),Qi&&Qi.parentNode.removeChild(Qi),wv===j&&Lt&&W.unshift({eventName:p,eventArgs:{}})}break;case T:E.options.deleteSpeed=ee.eventArgs.speed;break;case b:E.options.delay=ee.eventArgs.delay;break;case S:E.options.cursor=ee.eventArgs.cursor,E.state.elements.cursor.innerHTML=ee.eventArgs.cursor}E.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(E.state.calledEvents=[].concat($(E.state.calledEvents),[ee]))),E.state.eventQueue=W,E.state.lastFrameTime=F}}}),V)if(typeof V=="string"){var q=document.querySelector(V);if(!q)throw new Error("Could not find container element");this.state.elements.container=q}else this.state.elements.container=V;H&&(this.options=A(A({},this.options),H)),this.state.initialOptions=A({},this.options),this.init()}var D,U;return D=O,(U=[{key:"init",value:function(){var V,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(V=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(V)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(V){this.options.devMode&&console.log(V)}}])&&I(D.prototype,U),Object.defineProperty(D,"prototype",{writable:!1}),O}()},8552:(a,s,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,s,u)=>{var c=u(1789),d=u(401),f=u(7667),h=u(1327),g=u(1866);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},8407:(a,s,u)=>{var c=u(7040),d=u(4125),f=u(2117),h=u(7518),g=u(4705);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},7071:(a,s,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,s,u)=>{var c=u(4785),d=u(1285),f=u(6e3),h=u(9916),g=u(5265);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},3818:(a,s,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,s,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,s,u)=>{var c=u(3369),d=u(619),f=u(2385);function h(g){var y=-1,k=g==null?0:g.length;for(this.__data__=new c;++y<k;)this.add(g[y])}h.prototype.add=h.prototype.push=d,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var c=u(8407),d=u(7465),f=u(3779),h=u(7599),g=u(4758),y=u(4309);function k(m){var p=this.__data__=new c(m);this.size=p.size}k.prototype.clear=d,k.prototype.delete=f,k.prototype.get=h,k.prototype.has=g,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,s,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,s,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length,f=0,h=[];++c<d;){var g=s[c];u(g,c,s)&&(h[f++]=g)}return h}},4636:(a,s,u)=>{var c=u(2545),d=u(5694),f=u(1469),h=u(4144),g=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(m,p){var v=f(m),x=!v&&d(m),P=!v&&!x&&h(m),T=!v&&!x&&!P&&y(m),b=v||x||P||T,S=b?c(m.length,String):[],L=S.length;for(var j in m)!p&&!k.call(m,j)||b&&(j=="length"||P&&(j=="offset"||j=="parent")||T&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||g(j,L))||S.push(j);return S}},2488:a=>{a.exports=function(s,u){for(var c=-1,d=u.length,f=s.length;++c<d;)s[f+c]=u[c];return s}},2908:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length;++c<d;)if(u(s[c],c,s))return!0;return!1}},8470:(a,s,u)=>{var c=u(7813);a.exports=function(d,f){for(var h=d.length;h--;)if(c(d[h][0],f))return h;return-1}},8866:(a,s,u)=>{var c=u(2488),d=u(1469);a.exports=function(f,h,g){var y=h(f);return d(f)?y:c(y,g(f))}},4239:(a,s,u)=>{var c=u(2705),d=u(9607),f=u(2333),h=c?c.toStringTag:void 0;a.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":h&&h in Object(g)?d(g):f(g)}},9454:(a,s,u)=>{var c=u(4239),d=u(7005);a.exports=function(f){return d(f)&&c(f)=="[object Arguments]"}},939:(a,s,u)=>{var c=u(2492),d=u(7005);a.exports=function f(h,g,y,k,m){return h===g||(h==null||g==null||!d(h)&&!d(g)?h!=h&&g!=g:c(h,g,y,k,f,m))}},2492:(a,s,u)=>{var c=u(6384),d=u(7114),f=u(8351),h=u(6096),g=u(4160),y=u(1469),k=u(4144),m=u(6719),p="[object Arguments]",v="[object Array]",x="[object Object]",P=Object.prototype.hasOwnProperty;a.exports=function(T,b,S,L,j,R){var A=y(T),$=y(b),N=A?v:g(T),I=$?v:g(b),Y=(N=N==p?x:N)==x,z=(I=I==p?x:I)==x,O=N==I;if(O&&k(T)){if(!k(b))return!1;A=!0,Y=!1}if(O&&!Y)return R||(R=new c),A||m(T)?d(T,b,S,L,j,R):f(T,b,N,S,L,j,R);if(!(1&S)){var D=Y&&P.call(T,"__wrapped__"),U=z&&P.call(b,"__wrapped__");if(D||U){var V=D?T.value():T,H=U?b.value():b;return R||(R=new c),j(V,H,S,L,R)}}return!!O&&(R||(R=new c),h(T,b,S,L,j,R))}},8458:(a,s,u)=>{var c=u(3560),d=u(5346),f=u(3218),h=u(346),g=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,m=y.toString,p=k.hasOwnProperty,v=RegExp("^"+m.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!f(x)||d(x))&&(c(x)?v:g).test(h(x))}},8749:(a,s,u)=>{var c=u(4239),d=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(g){return f(g)&&d(g.length)&&!!h[c(g)]}},280:(a,s,u)=>{var c=u(5726),d=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!c(h))return d(h);var g=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&g.push(y);return g}},2545:a=>{a.exports=function(s,u){for(var c=-1,d=Array(s);++c<s;)d[c]=u(c);return d}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,s,u)=>{var c=u(8668),d=u(2908),f=u(4757);a.exports=function(h,g,y,k,m,p){var v=1&y,x=h.length,P=g.length;if(x!=P&&!(v&&P>x))return!1;var T=p.get(h),b=p.get(g);if(T&&b)return T==g&&b==h;var S=-1,L=!0,j=2&y?new c:void 0;for(p.set(h,g),p.set(g,h);++S<x;){var R=h[S],A=g[S];if(k)var $=v?k(A,R,S,g,h,p):k(R,A,S,h,g,p);if($!==void 0){if($)continue;L=!1;break}if(j){if(!d(g,function(N,I){if(!f(j,I)&&(R===N||m(R,N,y,k,p)))return j.push(I)})){L=!1;break}}else if(R!==A&&!m(R,A,y,k,p)){L=!1;break}}return p.delete(h),p.delete(g),L}},8351:(a,s,u)=>{var c=u(2705),d=u(1149),f=u(7813),h=u(7114),g=u(8776),y=u(1814),k=c?c.prototype:void 0,m=k?k.valueOf:void 0;a.exports=function(p,v,x,P,T,b,S){switch(x){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!b(new d(p),new d(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var L=g;case"[object Set]":var j=1&P;if(L||(L=y),p.size!=v.size&&!j)return!1;var R=S.get(p);if(R)return R==v;P|=2,S.set(p,v);var A=h(L(p),L(v),P,T,b,S);return S.delete(p),A;case"[object Symbol]":if(m)return m.call(p)==m.call(v)}return!1}},6096:(a,s,u)=>{var c=u(8234),d=Object.prototype.hasOwnProperty;a.exports=function(f,h,g,y,k,m){var p=1&g,v=c(f),x=v.length;if(x!=c(h).length&&!p)return!1;for(var P=x;P--;){var T=v[P];if(!(p?T in h:d.call(h,T)))return!1}var b=m.get(f),S=m.get(h);if(b&&S)return b==h&&S==f;var L=!0;m.set(f,h),m.set(h,f);for(var j=p;++P<x;){var R=f[T=v[P]],A=h[T];if(y)var $=p?y(A,R,T,h,f,m):y(R,A,T,f,h,m);if(!($===void 0?R===A||k(R,A,g,y,m):$)){L=!1;break}j||(j=T=="constructor")}if(L&&!j){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||(L=!1)}return m.delete(f),m.delete(h),L}},1957:(a,s,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,s,u)=>{var c=u(8866),d=u(9551),f=u(3674);a.exports=function(h){return c(h,f,d)}},5050:(a,s,u)=>{var c=u(7019);a.exports=function(d,f){var h=d.__data__;return c(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var c=u(8458),d=u(7801);a.exports=function(f,h){var g=d(f,h);return c(g)?g:void 0}},9607:(a,s,u)=>{var c=u(2705),d=Object.prototype,f=d.hasOwnProperty,h=d.toString,g=c?c.toStringTag:void 0;a.exports=function(y){var k=f.call(y,g),m=y[g];try{y[g]=void 0;var p=!0}catch{}var v=h.call(y);return p&&(k?y[g]=m:delete y[g]),v}},9551:(a,s,u)=>{var c=u(4963),d=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,g=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(k){return f.call(y,k)}))}:d;a.exports=g},4160:(a,s,u)=>{var c=u(8552),d=u(7071),f=u(3818),h=u(8525),g=u(577),y=u(4239),k=u(346),m="[object Map]",p="[object Promise]",v="[object Set]",x="[object WeakMap]",P="[object DataView]",T=k(c),b=k(d),S=k(f),L=k(h),j=k(g),R=y;(c&&R(new c(new ArrayBuffer(1)))!=P||d&&R(new d)!=m||f&&R(f.resolve())!=p||h&&R(new h)!=v||g&&R(new g)!=x)&&(R=function(A){var $=y(A),N=$=="[object Object]"?A.constructor:void 0,I=N?k(N):"";if(I)switch(I){case T:return P;case b:return m;case S:return p;case L:return v;case j:return x}return $}),a.exports=R},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(c){var g=h[f];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return c?h[f]!==void 0:d.call(h,f)}},1866:(a,s,u)=>{var c=u(4536);a.exports=function(d,f){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=c&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var d=typeof u;return!!(c=c==null?9007199254740991:c)&&(d=="number"||d!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var c,d=u(4429),f=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var c=u(8470),d=Array.prototype.splice;a.exports=function(f){var h=this.__data__,g=c(h,f);return!(g<0||(g==h.length-1?h.pop():d.call(h,g,1),--this.size,0))}},2117:(a,s,u)=>{var c=u(8470);a.exports=function(d){var f=this.__data__,h=c(f,d);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var c=u(8470);a.exports=function(d){return c(this.__data__,d)>-1}},4705:(a,s,u)=>{var c=u(8470);a.exports=function(d,f){var h=this.__data__,g=c(h,d);return g<0?(++this.size,h.push([d,f])):h[g][1]=f,this}},4785:(a,s,u)=>{var c=u(1989),d=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(f||d),string:new c}}},1285:(a,s,u)=>{var c=u(5050);a.exports=function(d){var f=c(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).get(d)}},9916:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).has(d)}},5265:(a,s,u)=>{var c=u(5050);a.exports=function(d,f){var h=c(this,d),g=h.size;return h.set(d,f),this.size+=h.size==g?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d,f){c[++u]=[f,d]}),c}},4536:(a,s,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,s,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,s,u)=>{a=u.nmd(a);var c=u(1957),d=s&&!s.nodeType&&s,f=d&&a&&!a.nodeType&&a,h=f&&f.exports===d&&c.process,g=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=g},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(c){return s(u(c))}}},5639:(a,s,u)=>{var c=u(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=c||d||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d){c[++u]=d}),c}},7465:(a,s,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,c=u.delete(s);return this.size=u.size,c}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var c=u(8407),d=u(7071),f=u(3369);a.exports=function(h,g){var y=this.__data__;if(y instanceof c){var k=y.__data__;if(!d||k.length<199)return k.push([h,g]),this.size=++y.size,this;y=this.__data__=new f(k)}return y.set(h,g),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var c=u(9454),d=u(7005),f=Object.prototype,h=f.hasOwnProperty,g=f.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(k){return d(k)&&h.call(k,"callee")&&!g.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var c=u(3560),d=u(1780);a.exports=function(f){return f!=null&&d(f.length)&&!c(f)}},4144:(a,s,u)=>{a=u.nmd(a);var c=u(5639),d=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,g=h&&h.exports===f?c.Buffer:void 0,y=(g?g.isBuffer:void 0)||d;a.exports=y},8446:(a,s,u)=>{var c=u(939);a.exports=function(d,f){return c(d,f)}},3560:(a,s,u)=>{var c=u(4239),d=u(3218);a.exports=function(f){if(!d(f))return!1;var h=c(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var c=u(8749),d=u(1717),f=u(1167),h=f&&f.isTypedArray,g=h?d(h):c;a.exports=g},3674:(a,s,u)=>{var c=u(4636),d=u(280),f=u(8612);a.exports=function(h){return f(h)?c(h):d(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,c,d,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,d=(s=function(){var g;return 1e9*(g=u())[0]+g[1]})(),h=1e9*process.uptime(),f=d-h):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var c=u(75),d=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",g=d["request"+h],y=d["cancel"+h]||d["cancelRequest"+h],k=0;!g&&k<f.length;k++)g=d[f[k]+"Request"+h],y=d[f[k]+"Cancel"+h]||d[f[k]+"CancelRequest"+h];if(!g||!y){var m=0,p=0,v=[];g=function(x){if(v.length===0){var P=c(),T=Math.max(0,16.666666666666668-(P-m));m=T+P,setTimeout(function(){var b=v.slice(0);v.length=0;for(var S=0;S<b.length;S++)if(!b[S].cancelled)try{b[S].callback(m)}catch(L){setTimeout(function(){throw L},0)}},Math.round(T))}return v.push({handle:++p,callback:x,cancelled:!1}),p},y=function(x){for(var P=0;P<v.length;P++)v[P].handle===x&&(v[P].cancelled=!0)}}a.exports=function(x){return g.call(d,x)},a.exports.cancel=function(){y.apply(d,arguments)},a.exports.polyfill=function(x){x||(x=d),x.requestAnimationFrame=g,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>P});var a=o(8156),s=o.n(a),u=o(7403),c=o(8446),d=o.n(c);function f(T){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(T)}function h(T,b){if(!(T instanceof b))throw new TypeError("Cannot call a class as a function")}function g(T,b){for(var S=0;S<b.length;S++){var L=b[S];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(T,L.key,L)}}function y(T,b){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,L){return S.__proto__=L,S},y(T,b)}function k(T,b){if(b&&(f(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(T)}function m(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function p(T){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},p(T)}function v(T,b,S){return b in T?Object.defineProperty(T,b,{value:S,enumerable:!0,configurable:!0,writable:!0}):T[b]=S,T}var x=function(T){(function($,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(N&&N.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),N&&y($,N)})(A,T);var b,S,L,j,R=(L=A,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,N=p(L);if(j){var I=p(this).constructor;$=Reflect.construct(N,arguments,I)}else $=N.apply(this,arguments);return k(this,$)});function A(){var $;h(this,A);for(var N=arguments.length,I=new Array(N),Y=0;Y<N;Y++)I[Y]=arguments[Y];return v(m($=R.call.apply(R,[this].concat(I))),"state",{instance:null}),$}return b=A,(S=[{key:"componentDidMount",value:function(){var $=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=$.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function($){d()(this.props.options,$.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var $=this,N=this.props.component;return s().createElement(N,{ref:function(I){return $.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(b.prototype,S),Object.defineProperty(b,"prototype",{writable:!1}),A}(a.Component);x.defaultProps={component:"div"};const P=x})(),l.default})())})(ov);const LS=Ma(ov.exports),zS=C.div`
    width: 100%;
    /* background-color: red; */

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 120px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 90px;
        }

    }

    @keyframes blink {
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`,jS=()=>w(zS,{children:w(LS,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),DS="/Site-Serra/assets/presentation-image.40ce3de4.png",$S="/Site-Serra/assets/Sites.a0112d0d.svg",RS="/Site-Serra/assets/sistemas-web.d1b27032.svg",AS="/Site-Serra/assets/manutencao.33f9dd1a.svg",NS="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",IS="/Site-Serra/assets/braco-robo.2b026e48.svg",FS="/Site-Serra/assets/impressora-3d.75613d7d.svg",HS="/Site-Serra/assets/membros-2.457898e5.svg",US="/Site-Serra/assets/background-image.668c0125.svg",WS=C.div`
    background-color: #DBDBDB;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    @media screen and (max-width: ${_.tablet}){
        flex-direction: column-reverse; 
        align-items: space-around;
        justify-content: center;
        min-height: 500px;
    }
`,BS=C.img`
    width: 45%;
    
    @media screen and (max-width: ${_.tablet}){
        width: 60%;
    }
`,VS=C.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${_.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`,QS=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,qS=C.div`
    width: 80vw;
    
    animation: fade-in-bottom 0.6s ease-in 0.5s both;
    @keyframes fade-in-bottom {
    0% {
    transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
    }
    100% {
    transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    }
    }

`,YS=C.div`
    background-image: url(${US});
`;C.p`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    width: 40%;
    margin-top: 5%;
`;C.img`
    width: 40%;
    height: 40%;
    border-radius: 20px;
    margin-top: 5%;
`;C.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 5%;
`;const GS=()=>Q(YS,{children:[Q(WS,{children:[w(VS,{children:w(jS,{})}),w(BS,{src:DS,alt:"apresenta\xE7\xE3o"})]}),w(Lc,{text:"O que fazemos"}),Q(QS,{children:[Q(qS,{children:[w(mf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/computacao",images:[$S,RS],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(mf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/mecanica",color:"#04ADD7",images:[AS,NS,IS,FS],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(iv,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:HS,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),XS="/Site-Serra/assets/presentation-image.73570450.svg",KS=C.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 30%;
    min-height: 50vh;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;



    @media screen and (max-width: ${_.mobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (max-width: ${_.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 30%;
    }
    
`,JS=C.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`,ZS=C.p`
    width: 95%;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: center;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,ek=C.ul`
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,tk=C.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
    }

    
`,nk=C.img`
    width: 150px;
    height: 140px;

    @media screen and (max-width: ${_.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 200px;
        height: 200px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 300px;
        height: 300px;
    }
`,rs=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Q(KS,{children:[w(nk,{src:e,alt:n}),w(JS,{children:t}),r?w(ek,{children:o?o.map((l,a)=>w(tk,{children:l},a)):null}):w(ZS,{children:i})]}),rk=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    height: 50vh;
    
    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }

    @media screen and (max-width: 500px) {
        /* flex-direction: column; */
        flex-wrap: wrap;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,ik=C.div`
   

`,ok=C.div`

    
`,ak=C.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 390px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 70px;
    }

    @media screen and (max-width: 820px) {
        margin-bottom: 5%;
    }

    @media screen and (min-width: 1000px) {
        margin-bottom: 5%;
        font-size: 120px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 180px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 250px;
    }

    
`,lk=C.img`
   @media screen and (max-width: 390px) {
        width: 80%;
        
    }

    @media screen and (max-width: 500px) {
        width: 80%;
    }

    @media screen and (max-width: 820px) {
        width: 70%;
    }

    @media screen and (max-width: 1000px) {
        width: 60%;
    }
`,sk=C.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: 390px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
        order: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`,If=C.div`
    border: 1px solid #001830;
    height: 80vh;

    @media screen and (max-width: 390px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (max-width: 500px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 20vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        height: 50vh;
    }
`,uk=()=>Q(bm,{children:[w(ik,{children:Q(rk,{children:[w(ak,{children:"Sobre N\xF3s"}),w(lk,{src:XS,alt:"imagem sobre n\xF3s"})]})}),w(ok,{children:Q(sk,{children:[w(rs,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),w(If,{}),w(rs,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),w(If,{}),w(rs,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]})}),w(iv,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),ck=C.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #f3f3f3;
    z-index: 2;

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 0px;
        margin-bottom: 40px;
    }
`;C.div`
    width: 90%;
    display: flex;
    padding-top: 20px;

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        padding-top: 20px;
    }
`;C.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin-left: 15px;
    font-size: 16px;
    align-items: center;
    padding-bottom: 35px;

    @media screen and (max-width: 700px) {
        margin-top: 10%;
        width: 100%;
    }
`;const dk=C.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        border-radius: 20px;
    }
`;C.p`
    width: 80%;

    @media screen and (max-width: 700px) {
        margin-top: 10%;
        width: 100%;
    }
`;C.h2`
    color: #001b40;
    font-size: 26px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 20px;
    }
`;const fk=C.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var vo=[];function pk(e){var t=K.exports.useState(),n=t[0],r=t[1];return K.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=vo.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),vo.push(a),function(){a.removeEventListener("load",l),a.remove(),vo.splice(vo.findIndex(function(s){return s.src===i}),1)}},[e]),n}function hk(e,t){var n=pk(e),r=K.exports.useRef(null),i=K.exports.useState(),o=i[0],l=i[1];return K.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const mk=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=hk("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(ck,{children:w(dk,{children:w(fk,{ref:n})})})};function Su(e,t){return Su=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Su(e,t)}var vk=function(e){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src=e,document.head&&document.head.appendChild(t)},gk=function(e){return Array.from(document.scripts).reduce(function(t,n){return t||e.test(n.src)},!1)},yk=/(http|https):\/\/(www)?.+\/recaptcha/,wk=["sitekey","theme","size","badge","tabindex","hl","isolated"],av=function(e){var t,n;function r(){for(var i,o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(i=e.call.apply(e,[this].concat(l))||this).container=void 0,i.timer=void 0,i.state={instanceKey:Date.now(),ready:!1,rendered:!1,invisible:i.props.size==="invisible"},i._isAvailable=function(){var s;return Boolean((s=window.grecaptcha)==null?void 0:s.ready)},i._inject=function(){i.props.inject&&!gk(yk)&&vk("https://recaptcha.net/recaptcha/api.js?render=explicit"+(i.props.hl?"&hl="+i.props.hl:""))},i._prepare=function(){var s=i.props,u=s.explicit,c=s.onLoad;window.grecaptcha.ready(function(){i.setState({ready:!0},function(){u||i.renderExplicitly(),c&&c()})})},i._renderRecaptcha=function(s,u){return window.grecaptcha.render(s,u)},i._resetRecaptcha=function(){return window.grecaptcha.reset(i.state.instanceId)},i._executeRecaptcha=function(){return window.grecaptcha.execute(i.state.instanceId)},i._getResponseRecaptcha=function(){return window.grecaptcha.getResponse(i.state.instanceId)},i._onVerify=function(s){return i.props.onVerify(s)},i._onExpire=function(){return i.props.onExpire&&i.props.onExpire()},i._onError=function(){return i.props.onError&&i.props.onError()},i._stopTimer=function(){i.timer&&clearInterval(i.timer)},i.componentDidMount=function(){i._inject(),i._isAvailable()?i._prepare():i.timer=window.setInterval(function(){i._isAvailable()&&(i._prepare(),i._stopTimer())},500)},i.componentWillUnmount=function(){i._stopTimer()},i.renderExplicitly=function(){return new Promise(function(s,u){if(i.state.rendered)return u(new Error("This recaptcha instance has been already rendered."));if(!i.state.ready||!i.container)return u(new Error("Recaptcha is not ready for rendering yet."));var c=i._renderRecaptcha(i.container,{sitekey:i.props.sitekey,theme:i.props.theme,size:i.props.size,badge:i.state.invisible?i.props.badge:void 0,tabindex:i.props.tabindex,callback:i._onVerify,"expired-callback":i._onExpire,"error-callback":i._onError,isolated:i.state.invisible?i.props.isolated:void 0,hl:i.state.invisible?void 0:i.props.hl});i.setState({instanceId:c,rendered:!0},function(){i.props.onRender&&i.props.onRender(),s()})})},i.reset=function(){return new Promise(function(s,u){if(i.state.rendered)return i._resetRecaptcha(),s();u(new Error("This recaptcha instance did not render yet."))})},i.execute=function(){return new Promise(function(s,u){return i.state.invisible?(i.state.rendered&&(i._executeRecaptcha(),s()),u(new Error("This recaptcha instance did not render yet."))):u(new Error("Manual execution is only available for invisible size."))})},i.getResponse=function(){return new Promise(function(s,u){if(i.state.rendered)return s(i._getResponseRecaptcha());u(new Error("This recaptcha instance did not render yet."))})},i.render=function(){var s=w("div",{id:i.props.id,className:i.props.className,ref:function(u){return i.container=u}},i.state.instanceKey);return i.props.children?i.props.children({renderExplicitly:i.renderExplicitly,reset:i.reset,execute:i.execute,getResponse:i.getResponse,recaptchaComponent:s}):s},i}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Su(t,n),r.getDerivedStateFromProps=function(i,o){var l=i.size==="invisible";return l!==o.invisible?{invisible:l}:null},r.prototype.componentDidUpdate=function(i){var o=this;wk.reduce(function(l,a){return o.props[a]!==i[a]?[].concat(l,[a]):l},[]).length>0&&this.setState({instanceKey:Date.now(),rendered:!1},function(){o.props.explicit||o.renderExplicitly()})},r}(K.exports.Component);av.defaultProps={id:"",className:"g-recaptcha",theme:"light",size:"normal",badge:"bottomright",tabindex:0,explicit:!1,inject:!0,isolated:!1,hl:""};const xk="/Site-Serra/assets/agenda.6fff4078.svg",Sk="/Site-Serra/assets/email.946bdff8.svg",kk="/Site-Serra/assets/localizacao.69982f44.svg",Ek="/Site-Serra/assets/telefone.9ca94e72.svg",go=C.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (min-width: ${_.tablet}) {
        font-size: 20px;
        line-height: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 60px;
        line-height: 100px;
    }

`,yo=C.img`

    width: 3em;
    height: 3em;

    @media screen and (min-width: ${_.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 10em;
        height: 10em;
    }
   
`,bk=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${_.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${_.mobile}) {
        margin-top: 20%;
    }


    
`,_k=C.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ck=C.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7%;

    @media screen and (max-width: 390px) {
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`,Ok=C.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 90%;
    } 

`,wo=C.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${_.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${_.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,Pk=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${_.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 80%;
    }
    
`,Tk=C.div`
    margin-left: 10%;
    width: 100%;
`,qr=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3rem;
        line-height: 25px;
    }

`,xo=C.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 2.5rem;
    background: #EEEEEE;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`,Mk=C.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`,Lk=C.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,zk=C.input`
    padding-left: 30px;
    border-radius: 10px;
    font-size: 1.8rem;
    border: 1px;
    width: calc(90% - 30px);
    height: 10rem;
    background: #EEEEEE;
    margin-bottom: 10px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`,jk=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    
`,Dk=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,$k=C.div`  

`,Rk=()=>Q(Dk,{children:[w(Lc,{titleWidth:"40%",text:"Entre em contato conosco!"}),Q(Ok,{children:[Q(bk,{children:[Q(wo,{children:[w(yo,{src:kk,alt:""}),w(go,{children:"Rua Bonfim, 25 em Vila Am\xE9lia, "})]}),Q(wo,{children:[w(yo,{src:Ek,alt:""}),w(go,{children:"(22) 2533-2265"})]}),Q(wo,{children:[w(yo,{src:Sk,alt:""}),w(go,{children:"serrajr@iprj.uerj.br"})]}),Q(wo,{children:[w(yo,{src:xk,alt:""}),Q(go,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(jk,{children:w(Pk,{children:Q(Tk,{children:[w(qr,{children:"Nome"}),w(xo,{type:"text",placeholder:"Insira seu nome"}),w(qr,{children:"Email"}),w(xo,{type:"text",placeholder:"Insira seu email"}),w(qr,{children:"Telefone"}),w(xo,{type:"text",placeholder:"(XX) XXXXX-XXXX"}),w(qr,{children:"Assunto"}),w(xo,{type:"text",placeholder:"Digite o assunto"}),w(qr,{children:"Mensagem"}),w(zk,{type:"text",placeholder:"Digite a mensagem"}),w($k,{children:w(av,{sitekey:"6Lef0HsiAAAAAPmdiuuS_Xz6_TA8fPzPzZdr9RC2"})}),w(Lk,{children:w(Mk,{children:"Enviar"})})]})})})]}),w(Ck,{children:w(_k,{children:w(mk,{})})})]});var ku={exports:{}},Fn={},Ic={exports:{}},Ak="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nk=Ak,Ik=Nk;function lv(){}function sv(){}sv.resetWarningCache=lv;var Fk=function(){function e(r,i,o,l,a,s){if(s!==Ik){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sv,resetWarningCache:lv};return n.PropTypes=n,n};Ic.exports=Fk();var Eu={exports:{}},Tt={},Ca={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function l(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var h=window.getComputedStyle(d),g=h.getPropertyValue("display");return f?g!==r&&o(d,h):g===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var f=d,h=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(d,f){var h=d.nodeName.toLowerCase(),g=i.test(h)&&!d.disabled||h==="a"&&d.href||f;return g&&a(d)}function u(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(d,!h)}function c(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(h,g){return h.concat(g.shadowRoot?c(g.shadowRoot):[g])},[]);return f.filter(u)}e.exports=t.default})(Ca,Ca.exports);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.resetState=Bk;Tt.log=Vk;Tt.handleBlur=zi;Tt.handleFocus=ji;Tt.markForFocusLater=Qk;Tt.returnFocus=qk;Tt.popWithoutFocus=Yk;Tt.setupScopedFocus=Gk;Tt.teardownScopedFocus=Xk;var Hk=Ca.exports,Uk=Wk(Hk);function Wk(e){return e&&e.__esModule?e:{default:e}}var Cr=[],lr=null,bu=!1;function Bk(){Cr=[]}function Vk(){}function zi(){bu=!0}function ji(){if(bu){if(bu=!1,!lr)return;setTimeout(function(){if(!lr.contains(document.activeElement)){var e=(0,Uk.default)(lr)[0]||lr;e.focus()}},0)}}function Qk(){Cr.push(document.activeElement)}function qk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Cr.length!==0&&(t=Cr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Yk(){Cr.length>0&&Cr.pop()}function Gk(e){lr=e,window.addEventListener?(window.addEventListener("blur",zi,!1),document.addEventListener("focus",ji,!0)):(window.attachEvent("onBlur",zi),document.attachEvent("onFocus",ji))}function Xk(){lr=null,window.addEventListener?(window.removeEventListener("blur",zi),document.removeEventListener("focus",ji)):(window.detachEvent("onBlur",zi),document.detachEvent("onFocus",ji))}var _u={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ca.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var c=void 0,d=s.shiftKey,f=u[0],h=u[u.length-1],g=o();if(a===g){if(!d)return;c=h}if(h===g&&!d&&(c=f),f===g&&d&&(c=h),c){s.preventDefault(),c.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),k=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!k){var m=u.indexOf(g);if(m>-1&&(m+=d?-1:1),c=u[m],typeof c>"u"){s.preventDefault(),c=d?h:f,c.focus();return}s.preventDefault(),c.focus()}}e.exports=t.default})(_u,_u.exports);var Mt={},Kk=function(){},Jk=Kk,Ot={},uv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(uv);Object.defineProperty(Ot,"__esModule",{value:!0});Ot.canUseDOM=Ot.SafeNodeList=Ot.SafeHTMLCollection=void 0;var Zk=uv.exports,eE=tE(Zk);function tE(e){return e&&e.__esModule?e:{default:e}}var fl=eE.default,nE=fl.canUseDOM?window.HTMLElement:{};Ot.SafeHTMLCollection=fl.canUseDOM?window.HTMLCollection:{};Ot.SafeNodeList=fl.canUseDOM?window.NodeList:{};Ot.canUseDOM=fl.canUseDOM;Ot.default=nE;Object.defineProperty(Mt,"__esModule",{value:!0});Mt.resetState=lE;Mt.log=sE;Mt.assertNodeList=cv;Mt.setElement=uE;Mt.validateElement=Fc;Mt.hide=cE;Mt.show=dE;Mt.documentNotReadyOrSSRTesting=fE;var rE=Jk,iE=aE(rE),oE=Ot;function aE(e){return e&&e.__esModule?e:{default:e}}var ft=null;function lE(){ft&&(ft.removeAttribute?ft.removeAttribute("aria-hidden"):ft.length!=null?ft.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(ft).forEach(function(e){return e.removeAttribute("aria-hidden")})),ft=null}function sE(){}function cv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function uE(e){var t=e;if(typeof t=="string"&&oE.canUseDOM){var n=document.querySelectorAll(t);cv(n,t),t=n}return ft=t||ft,ft}function Fc(e){var t=e||ft;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,iE.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function cE(e){var t=!0,n=!1,r=void 0;try{for(var i=Fc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function dE(e){var t=!0,n=!1,r=void 0;try{for(var i=Fc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function fE(){ft=null}var Mr={};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.resetState=pE;Mr.log=hE;var ci={},di={};function Ff(e,t){e.classList.remove(t)}function pE(){var e=document.getElementsByTagName("html")[0];for(var t in ci)Ff(e,ci[t]);var n=document.body;for(var r in di)Ff(n,di[r]);ci={},di={}}function hE(){}var mE=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},vE=function(t,n){return t[n]&&(t[n]-=1),n},gE=function(t,n,r){r.forEach(function(i){mE(n,i),t.add(i)})},yE=function(t,n,r){r.forEach(function(i){vE(n,i),n[i]===0&&t.remove(i)})};Mr.add=function(t,n){return gE(t.classList,t.nodeName.toLowerCase()=="html"?ci:di,n.split(" "))};Mr.remove=function(t,n){return yE(t.classList,t.nodeName.toLowerCase()=="html"?ci:di,n.split(" "))};var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.log=xE;Lr.resetState=SE;function wE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var dv=function e(){var t=this;wE(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Oa=new dv;function xE(){console.log("portalOpenInstances ----------"),console.log(Oa.openInstances.length),Oa.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function SE(){Oa=new dv}Lr.default=Oa;var Hc={};Object.defineProperty(Hc,"__esModule",{value:!0});Hc.resetState=_E;Hc.log=CE;var kE=Lr,EE=bE(kE);function bE(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,St=void 0,Dn=[];function _E(){for(var e=[Be,St],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=St=null,Dn=[]}function CE(){console.log("bodyTrap ----------"),console.log(Dn.length);for(var e=[Be,St],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Hf(){Dn.length!==0&&Dn[Dn.length-1].focusContent()}function OE(e,t){!Be&&!St&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Hf),St=Be.cloneNode(),St.addEventListener("focus",Hf)),Dn=t,Dn.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==St&&document.body.appendChild(St)):(Be.parentElement&&Be.parentElement.removeChild(Be),St.parentElement&&St.parentElement.removeChild(St))}EE.default.subscribe(OE);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var Y=arguments[I];for(var z in Y)Object.prototype.hasOwnProperty.call(Y,z)&&(N[z]=Y[z])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,Y){for(var z=0;z<Y.length;z++){var O=Y[z];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(I,O.key,O)}}return function(I,Y,z){return Y&&N(I.prototype,Y),z&&N(I,z),I}}(),o=K.exports,l=Ic.exports,a=P(l),s=Tt,u=x(s),c=_u.exports,d=P(c),f=Mt,h=x(f),g=Mr,y=x(g),k=Ot,m=P(k),p=Lr,v=P(p);function x(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var Y in N)Object.prototype.hasOwnProperty.call(N,Y)&&(I[Y]=N[Y]);return I.default=N,I}function P(N){return N&&N.__esModule?N:{default:N}}function T(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function b(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function S(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var L={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},j=function(I){return I.code==="Tab"||I.keyCode===9},R=function(I){return I.code==="Escape"||I.keyCode===27},A=0,$=function(N){S(I,N);function I(Y){T(this,I);var z=b(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,Y));return z.setOverlayRef=function(O){z.overlay=O,z.props.overlayRef&&z.props.overlayRef(O)},z.setContentRef=function(O){z.content=O,z.props.contentRef&&z.props.contentRef(O)},z.afterClose=function(){var O=z.props,D=O.appElement,U=O.ariaHideApp,V=O.htmlOpenClassName,H=O.bodyOpenClassName,E=O.parentSelector,q=E&&E().ownerDocument||document;H&&y.remove(q.body,H),V&&y.remove(q.getElementsByTagName("html")[0],V),U&&A>0&&(A-=1,A===0&&h.show(D)),z.props.shouldFocusAfterRender&&(z.props.shouldReturnFocusAfterClose?(u.returnFocus(z.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),z.props.onAfterClose&&z.props.onAfterClose(),v.default.deregister(z)},z.open=function(){z.beforeOpen(),z.state.afterOpen&&z.state.beforeClose?(clearTimeout(z.closeTimer),z.setState({beforeClose:!1})):(z.props.shouldFocusAfterRender&&(u.setupScopedFocus(z.node),u.markForFocusLater()),z.setState({isOpen:!0},function(){z.openAnimationFrame=requestAnimationFrame(function(){z.setState({afterOpen:!0}),z.props.isOpen&&z.props.onAfterOpen&&z.props.onAfterOpen({overlayEl:z.overlay,contentEl:z.content})})}))},z.close=function(){z.props.closeTimeoutMS>0?z.closeWithTimeout():z.closeWithoutTimeout()},z.focusContent=function(){return z.content&&!z.contentHasFocus()&&z.content.focus({preventScroll:!0})},z.closeWithTimeout=function(){var O=Date.now()+z.props.closeTimeoutMS;z.setState({beforeClose:!0,closesAt:O},function(){z.closeTimer=setTimeout(z.closeWithoutTimeout,z.state.closesAt-Date.now())})},z.closeWithoutTimeout=function(){z.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},z.afterClose)},z.handleKeyDown=function(O){j(O)&&(0,d.default)(z.content,O),z.props.shouldCloseOnEsc&&R(O)&&(O.stopPropagation(),z.requestClose(O))},z.handleOverlayOnClick=function(O){z.shouldClose===null&&(z.shouldClose=!0),z.shouldClose&&z.props.shouldCloseOnOverlayClick&&(z.ownerHandlesClose()?z.requestClose(O):z.focusContent()),z.shouldClose=null},z.handleContentOnMouseUp=function(){z.shouldClose=!1},z.handleOverlayOnMouseDown=function(O){!z.props.shouldCloseOnOverlayClick&&O.target==z.overlay&&O.preventDefault()},z.handleContentOnClick=function(){z.shouldClose=!1},z.handleContentOnMouseDown=function(){z.shouldClose=!1},z.requestClose=function(O){return z.ownerHandlesClose()&&z.props.onRequestClose(O)},z.ownerHandlesClose=function(){return z.props.onRequestClose},z.shouldBeClosed=function(){return!z.state.isOpen&&!z.state.beforeClose},z.contentHasFocus=function(){return document.activeElement===z.content||z.content.contains(document.activeElement)},z.buildClassName=function(O,D){var U=(typeof D>"u"?"undefined":r(D))==="object"?D:{base:L[O],afterOpen:L[O]+"--after-open",beforeClose:L[O]+"--before-close"},V=U.base;return z.state.afterOpen&&(V=V+" "+U.afterOpen),z.state.beforeClose&&(V=V+" "+U.beforeClose),typeof D=="string"&&D?V+" "+D:V},z.attributesFromObject=function(O,D){return Object.keys(D).reduce(function(U,V){return U[O+"-"+V]=D[V],U},{})},z.state={afterOpen:!1,beforeClose:!1},z.shouldClose=null,z.moveFromContentToOverlay=null,z}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(z,O){this.props.isOpen&&!z.isOpen?this.open():!this.props.isOpen&&z.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!O.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var z=this.props,O=z.appElement,D=z.ariaHideApp,U=z.htmlOpenClassName,V=z.bodyOpenClassName,H=z.parentSelector,E=H&&H().ownerDocument||document;V&&y.add(E.body,V),U&&y.add(E.getElementsByTagName("html")[0],U),D&&(A+=1,h.hide(O)),v.default.register(this)}},{key:"render",value:function(){var z=this.props,O=z.id,D=z.className,U=z.overlayClassName,V=z.defaultStyles,H=z.children,E=D?{}:V.content,q=U?{}:V.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},M=n({id:O,ref:this.setContentRef,style:n({},E,this.props.style.content),className:this.buildClassName("content",D),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(M,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);$.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},$.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(m.default),a.default.instanceOf(k.SafeHTMLCollection),a.default.instanceOf(k.SafeNodeList),a.default.arrayOf(a.default.instanceOf(m.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=$,e.exports=t.default})(Eu,Eu.exports);function fv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function pv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function hv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}fv.__suppressDeprecationWarning=!0;pv.__suppressDeprecationWarning=!0;hv.__suppressDeprecationWarning=!0;function PE(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=fv,t.componentWillReceiveProps=pv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=hv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,c,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,u,c,f)}}return e}const TE=Object.freeze(Object.defineProperty({__proto__:null,polyfill:PE},Symbol.toStringTag,{value:"Module"})),ME=rp(TE);Object.defineProperty(Fn,"__esModule",{value:!0});Fn.bodyOpenClassName=Fn.portalClassName=void 0;var Uf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},LE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),mv=K.exports,Pa=Bi(mv),zE=Mu.exports,Ta=Bi(zE),jE=Ic.exports,re=Bi(jE),DE=Eu.exports,Wf=Bi(DE),$E=Mt,RE=NE($E),ln=Ot,Bf=Bi(ln),AE=ME;function NE(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Bi(e){return e&&e.__esModule?e:{default:e}}function IE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function FE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var HE=Fn.portalClassName="ReactModalPortal",UE=Fn.bodyOpenClassName="ReactModal__Body--open",Cn=ln.canUseDOM&&Ta.default.createPortal!==void 0,Qf=function(t){return document.createElement(t)},qf=function(){return Cn?Ta.default.createPortal:Ta.default.unstable_renderSubtreeIntoContainer};function So(e){return e()}var Vi=function(e){FE(t,e);function t(){var n,r,i,o;IE(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Vf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Cn&&Ta.default.unmountComponentAtNode(i.node);var u=So(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var c=qf(),d=c(i,Pa.default.createElement(Wf.default,Uf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(d)},r),Vf(i,o)}return LE(t,[{key:"componentDidMount",value:function(){if(!!ln.canUseDOM){Cn||(this.node=Qf("div")),this.node.className=this.props.portalClassName;var r=So(this.props.parentSelector);r.appendChild(this.node),!Cn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=So(r.parentSelector),o=So(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!ln.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,c=o.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!a)&&!Cn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ln.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!ln.canUseDOM||!Cn)return null;!this.node&&Cn&&(this.node=Qf("div"));var r=qf();return r(Pa.default.createElement(Wf.default,Uf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){RE.setElement(r)}}]),t}(mv.Component);Vi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Bf.default),re.default.instanceOf(ln.SafeHTMLCollection),re.default.instanceOf(ln.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Bf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Vi.defaultProps={isOpen:!1,portalClassName:HE,bodyOpenClassName:UE,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Pa.default.createElement("div",t,n)},contentElement:function(t,n){return Pa.default.createElement("div",t,n)}};Vi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,AE.polyfill)(Vi);Fn.default=Vi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Fn,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(ku,ku.exports);const vv=Ma(ku.exports),WE=C.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 50px;
    }
`,BE=C.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
`,VE=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${_.largeMobile}){
        font-size: 12px;
    }
`,is=C.h2`
`,QE=C.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,qE=C.a`
    text-decoration: none;
    color: #FF7400;

    background-color: #fff;
    border: 2px solid #FF7400;
    align-self: center;
    justify-self: center;
    
    padding: 5px 10px;
    border-radius: 7px;

    &:hover{
        border: 2px solid #fff;
        background-color: #FF7400;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        padding: 10px 20px;
    }
`,YE=C.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,GE=C.img`
    width: 300px;

    @media screen and (max-width: ${_.largeMobile}){
        width: 200px;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 600px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 800px;
    }
`,XE=C.button`
    background-color: #fff;
    border: 1px solid #FF7400;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: #FF7400;

    &:hover{
        border: 1px solid #fff;
        background-color: red;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: ${_.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
`,Yf=C.p`

`,KE=C.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,JE=C.ul`
    
`,ZE=C.li`
    list-style: none;
`;vv.setAppElement("#root");const eb=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"70vh",overflow:"scroll",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#0000004f"}};return n?w(vv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Q(WE,{children:[Q(BE,{children:[Q(VE,{children:[w("h1",{children:n.title}),w(XE,{onClick:()=>t(!1),children:"X"})]}),w(KE,{})]}),w(is,{children:"Resumo do projeto"}),Q(YE,{children:[w(GE,{src:n.image,alt:n.title}),w(Yf,{children:n.content})]}),w(is,{children:"Membros envolvidos"}),w(JE,{children:n.members.map((i,o)=>w(ZE,{children:i},o))}),w(is,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Yf,{children:i},o)),n.acess?w(QE,{children:w(qE,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},tb=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,nb=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,rb=C.section`
    width: 85%;
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  
    background-color: lightgrey;
    border-radius: 3rem;
    
    @media screen and (max-width: ${_.tablet}) {
        width: 80%;
        min-height: 100vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        min-height: 65vh;
    }
`,ib=C.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }
`,ob=C.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,ab=C.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${_.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,lb=C.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${_.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
    
`,sb=C.span`
    width: 90%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);


    @media screen and (max-width: ${_.notebook}) {
        width: 85%;
        font-size: 1rem;
        color: var(--blue);
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 2.0rem;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.5rem;
    }
`,ub=C.button`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    width: 90%;
    background-color: #FF7400;
    border-radius: 1rem;
    margin-top: 40px;
    border: 0px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`,cb=C.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${_.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    
`,db=C.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,gv=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return w(db,{containerWidth:e.width,children:w(rv,{...t,children:e.carouselData.map((l,a)=>w(tb,{children:w(nb,{children:Q(rb,{children:[w(ib,{children:w(Lc,{text:l.title})}),Q(ob,{children:[w(lb,{children:w(ab,{src:l.image,alt:l.title})}),Q(cb,{children:[w(sb,{children:l.content}),w(ub,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(eb,{data:i,status:n,setStatus:r})]})]})]})})},a))})})},fb="/Site-Serra/assets/marmitex.857922f9.svg",pb={mechanicsProjects:[{title:"Projeto Marmitex",image:fb,content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto Lar Abrigo Amor a Jesus",image:"https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG",content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]}]},ko="/Site-Serra/assets/seta.7067b273.svg",hb="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",mb="/Site-Serra/assets/hammer-icon.c370caae.svg",vb="/Site-Serra/assets/bot-icon.237c34bd.svg",gb="/Site-Serra/assets/3d-icon.6c010241.svg",yb="/Site-Serra/assets/drawing-icon.462650d6.svg",yv="/Site-Serra/assets/arrow-up.1b45090f.svg",wb="/Site-Serra/assets/background-mecanica.81e45f94.svg",xb=C.div`
`,Sb=C.div`
    background-image: url(${wb});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,kb=C.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Eo=C.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }

    
`,bo=C.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 50%;
        height: 30vh;
        line-height: 70px;
    }

    
`,Gf=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 50px;
    }  

    @media screen and (min-width: 1280px){
        font-size: 70px;
        line-height: 100px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 106px;
        line-height: 120px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 126px;
        line-height: 130px;
    }
`,Eb=C.div`
    
`,bb=C.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,_b=C.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       } 

    @media screen and (min-width: 1280px){
        font-size: 30px;
        line-height: 40px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,Xf=C.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${_.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,_o=C.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-bottom: 10%;
        width: 50%;
    }

`,Jt=C.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 10%;
    } 
`,Co=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Oo=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,Cb=C.img`
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
    }
`,Ob=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        height: 6px;
    }
`,Pb=C.p`
    border: 3px solid #04ADD7;
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 2%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 47px;
    text-align: center;
    text-decoration: none;

    color: #04ADD7;

    &:hover{
        background-color: #04ADD7;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
        border: 4px solid #04ADD7;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #04ADD7;
    }
`,Tb=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin: 25px 0px;
    }
`,Mb=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
`;C.img`
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 2.5rem;
    }
`;const Lb=C.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 2rem;
    }
`,zb=C.div`
    margin-top: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
    }
`,jb=()=>{const e=Mc();return Q(xb,{children:[Q(kb,{children:[Q(Eb,{children:[w(Gf,{children:"Engenharia"}),w(Gf,{children:"Mec\xE2nica"})]}),w(Cb,{src:hb,alt:"Imagem de Mec\xE2nica"})]}),Q(Sb,{children:[w(bb,{children:"Carta de Servi\xE7os"}),w(_b,{children:"Engenharia Mec\xE2nica"}),Q(Xf,{children:[Q(_o,{children:[Q(Co,{children:[w(Jt,{src:mb,alt:"Imagem Sistemas"}),w(Eo,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),Q(Oo,{children:[w(Jt,{src:ko,alt:"Seta"}),w(bo,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),Q(_o,{children:[Q(Co,{children:[w(Jt,{src:yb,alt:"Imagem Site"}),w(Eo,{children:"Desenho T\xE9cnico e Industrial"})]}),Q(Oo,{children:[w(Jt,{src:ko,alt:"Seta"}),w(bo,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),Q(Xf,{children:[Q(_o,{children:[Q(Co,{children:[w(Jt,{src:vb,alt:"Imagem Sistemas"}),w(Eo,{children:"Projetos de Automa\xE7\xE3o"})]}),Q(Oo,{children:[w(Jt,{src:ko,alt:"Seta"}),w(bo,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),Q(_o,{children:[Q(Co,{children:[w(Jt,{src:gb,alt:"Imagem Site"}),w(Eo,{children:"Prototipagem"})]}),Q(Oo,{children:[w(Jt,{src:ko,alt:"Seta"}),w(bo,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),w(Ob,{}),w(Tb,{children:w(Pb,{onClick:()=>e("/contatos"),children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(zb,{children:w(gv,{carouselData:pb.mechanicsProjects})}),w(Mb,{children:w(Lb,{onClick:()=>window.scrollTo(0,0),src:yv,alt:"ScrollUp"})})]})},Db="/Site-Serra/assets/friburguense.ba8886f5.svg",$b="/Site-Serra/assets/projeto-tmf.f6316197.svg",Rb={computingProjects:[{title:"Projeto Friburguense",image:Db,content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto TMF",image:$b,content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"],acess:"https://usinagemtmf.com.br/"}]},Ab="/Site-Serra/assets/presentation-image.3bba7d23.svg",Nb="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",Ib="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",Kf="/Site-Serra/assets/seta.13cafa5d.svg",Fb="/Site-Serra/assets/css-icon.e1a4dd78.svg",Hb="/Site-Serra/assets/html-icon.e0dc6b68.svg",Ub="/Site-Serra/assets/js-icon.f4d001af.svg",Wb="/Site-Serra/assets/react-icon.f937629c.svg",Bb="/Site-Serra/assets/ts-icon.bf061be4.svg",Vb="/Site-Serra/assets/styled-icon.35b18102.svg",Qb="/Site-Serra/assets/background-computacao.dbcf66d3.svg",qb=C.div`
    scroll-behavior: smooth;

`,Yb=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Gb=C.img`
    margin-top: 10px;
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
    }
`,Xb=C.div`
    padding-top: 2%;
    background-image: url(${Qb});
    background-repeat: no-repeat; 
    background-size: cover; 
`,os=C.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 40px;
    }  

    @media screen and (min-width: 1280px){
        font-size: 70px;
        line-height: 100px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 106px;
        line-height: 120px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 126px;
        line-height: 130px;
    }
`,Kb=C.div`
`,Jb=C.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-bottom: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 100px;
    }
`,Zb=C.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       } 

    @media screen and (min-width: 1280px){
        font-size: 30px;
        line-height: 40px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,e_=C.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${_.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }    

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,Jf=C.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

`,Po=C.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 10%;
    } 
`,Zf=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,ep=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,tp=C.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }
`,np=C.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }

    @media screen and (min-width: 1280px){
        font-size: 20px;
        line-height: 30px;
        
    }

    @media screen and (min-width: 1920px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 60px;
        width: 60%;
        height: 30vh;
        line-height: 70px;
    }

    
`,t_=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


`;C.div`
    width: 100%;
    
`;const Qn=C.img`

    @media screen and (max-width: ${_.tablet}){
        width: 50px;
        height: 50px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
        margin-bottom: 2%;
    }
`;C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 920px;
    height: 30%;
    
`;C.img`
    margin-right: 2%;
    width: 3.5rem;
`;const n_=C.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;
`,r_=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    
`,i_=C.div`
    margin-top: 3%;
`,o_=C.p`
    border: 3px solid #FD6300;
    text-align: center;
    margin: 0px;
    padding: 2%;
    margin-top: 3%;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    /* line-height: 47px; */
    text-align: center;
    

    color: #FD6300;

    &:hover{
        background-color: #FD6300;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #FD6300;
    }

    
`,a_=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,l_=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,s_=()=>{const e=Mc();return Q(qb,{children:[Q(Yb,{children:[Q(Kb,{children:[w(os,{children:"Engenharia"}),w(os,{children:"de"}),w(os,{children:"Computa\xE7\xE3o"})]}),w(Gb,{src:Ab,alt:"Imagem de Computa\xE7\xE3o"})]}),Q(Xb,{children:[w(Jb,{children:"Carta de Servi\xE7os"}),w(Zb,{children:"Engenharia de Computa\xE7\xE3o"}),Q(e_,{children:[Q(Jf,{children:[Q(Zf,{children:[w(Po,{src:Ib,alt:"Imagem Site"}),w(tp,{children:"Desenvolvimento de Websites"})]}),Q(ep,{children:[w(Po,{src:Kf,alt:"Seta"}),w(np,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),Q(Jf,{children:[Q(Zf,{children:[w(Po,{src:Nb,alt:"Imagem Sistemas"}),w(tp,{children:"Desenvolvimento de Sistemas Web"})]}),Q(ep,{children:[w(Po,{src:Kf,alt:"Seta"}),w(np,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),Q(t_,{children:[w(Qn,{src:Hb,alt:"ImagemHtml"}),w(Qn,{src:Fb,alt:"Imagemcss"}),w(Qn,{src:Ub,alt:"ImagemJS"}),w(Qn,{src:Bb,alt:"ImagemTS"}),w(Qn,{src:Wb,alt:"ImagemREACT"}),w(Qn,{src:Vb,alt:"ImagemStyled"})]})]}),w(l_,{}),w(a_,{children:w(o_,{onClick:()=>e("/contatos"),children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(i_,{children:w(gv,{carouselData:Rb.computingProjects})}),w(r_,{children:w(n_,{onClick:()=>window.scrollTo(0,0),src:yv,alt:"ScrollUp"})})]})},u_=()=>Q(bm,{children:[w(rw,{}),Q(R1,{children:[w(qn,{path:"/",element:w(GS,{})}),w(qn,{path:"/computacao",element:w(s_,{})}),w(qn,{path:"/mecanica",element:w(jb,{})}),w(qn,{path:"/quemSomos",element:w(uk,{})}),w(qn,{path:"/contatos",element:w(Rk,{})})]}),w(l1,{})]});function c_(){return w("div",{className:"App",children:w(I1,{basename:"/Site-Serra",children:w(u_,{})})})}as.createRoot(document.getElementById("root")).render(w($i.StrictMode,{children:w(c_,{})}));
