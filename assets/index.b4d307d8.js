(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function cp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),Lv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Rv=Symbol.for("react.forward_ref"),$v=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),Gc=Symbol.iterator;function Iv(e){return e===null||typeof e!="object"?null:(e=Gc&&e[Gc]||e["@@iterator"],typeof e=="function"?e:null)}var dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,pp={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||dp}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hp(){}hp.prototype=Tr.prototype;function Mu(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||dp}var Du=Mu.prototype=new hp;Du.constructor=Mu;fp(Du,Tr.prototype);Du.isPureReactComponent=!0;var Yc=Array.isArray,mp=Object.prototype.hasOwnProperty,Ru={current:null},vp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)mp.call(t,r)&&!vp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ni,type:e,key:o,ref:l,props:i,_owner:Ru.current}}function Fv(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Hv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xc=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hv(""+e.key):t.toString(36)}function Do(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ni:case Tv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Sl(l,0):r,Yc(i)?(n="",e!=null&&(n=e.replace(Xc,"$&/")+"/"),Do(i,t,n,"",function(u){return u})):i!=null&&($u(i)&&(i=Fv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Xc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Yc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Sl(o,a);l+=Do(o,t,n,s,i)}else if(s=Iv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Sl(o,a++),l+=Do(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return Do(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Uv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Ro={transition:null},Wv={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Ru};ue.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!$u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Tr;ue.Fragment=Lv;ue.Profiler=jv;ue.PureComponent=Mu;ue.StrictMode=zv;ue.Suspense=$v;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)mp.call(t,s)&&!vp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:Dv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mv,_context:e},e.Consumer=e};ue.createElement=gp;ue.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Rv,render:e}};ue.isValidElement=$u;ue.lazy=function(e){return{$$typeof:Nv,_payload:{_status:-1,_result:e},_init:Uv}};ue.memo=function(e,t){return{$$typeof:Av,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ue.useContext=function(e){return Ke.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ue.useId=function(){return Ke.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ue.useRef=function(e){return Ke.current.useRef(e)};ue.useState=function(e){return Ke.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ke.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const Lr=$a(K.exports);var ps={},Au={exports:{}},ct={},yp={exports:{}},xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var U=T.length;T.push(D);e:for(;0<U;){var q=U-1>>>1,H=T[q];if(0<i(H,D))T[q]=D,T[U]=H,U=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],U=T.pop();if(U!==D){T[0]=U;e:for(var q=0,H=T.length,b=H>>>1;q<b;){var Q=2*(q+1)-1,F=T[Q],L=Q+1,J=T[L];if(0>i(F,U))L<H&&0>i(J,F)?(T[q]=J,T[L]=U,q=L):(T[q]=F,T[Q]=U,q=Q);else if(L<H&&0>i(J,U))T[q]=J,T[L]=U,q=L;else break e}}return D}function i(T,D){var U=T.sortIndex-D.sortIndex;return U!==0?U:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,h=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function w(T){if(y=!1,g(T),!m)if(n(s)!==null)m=!0,G(O);else{var D=n(u);D!==null&&j(w,D.startTime-T)}}function O(T,D){m=!1,y&&(y=!1,v(S),S=-1),h=!0;var U=f;try{for(g(D),c=n(s);c!==null&&(!(c.expirationTime>D)||T&&!R());){var q=c.callback;if(typeof q=="function"){c.callback=null,f=c.priorityLevel;var H=q(c.expirationTime<=D);D=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(s)&&r(s),g(D)}else r(s);c=n(s)}if(c!==null)var b=!0;else{var Q=n(u);Q!==null&&j(w,Q.startTime-D),b=!1}return b}finally{c=null,f=U,h=!1}}var P=!1,k=null,S=-1,z=5,M=-1;function R(){return!(e.unstable_now()-M<z)}function A(){if(k!==null){var T=e.unstable_now();M=T;var D=!0;try{D=k(!0,T)}finally{D?$():(P=!1,k=null)}}else P=!1}var $;if(typeof p=="function")$=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,$=function(){I.postMessage(null)}}else $=function(){E(A,0)};function G(T){k=T,P||(P=!0,$())}function j(T,D){S=E(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,G(O))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var U=f;f=D;try{return T()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=f;f=T;try{return D()}finally{f=U}},e.unstable_scheduleCallback=function(T,D,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,T={id:d++,callback:D,priorityLevel:T,startTime:U,expirationTime:H,sortIndex:-1},U>q?(T.sortIndex=U,t(u,T),n(s)===null&&T===n(u)&&(y?(v(S),S=-1):y=!0,j(w,U-q))):(T.sortIndex=H,t(s,T),m||h||(m=!0,G(O))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var D=f;return function(){var U=f;f=D;try{return T.apply(this,arguments)}finally{f=U}}}})(xp);(function(e){e.exports=xp})(yp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=K.exports,ut=yp.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,mi={};function Wn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(mi[e]=t,e=0;e<t.length;e++)Sp.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kc={},Jc={};function qv(e){return hs.call(Jc,e)?!0:hs.call(Kc,e)?!1:Bv.test(e)?Jc[e]=!0:(Kc[e]=!0,!1)}function Vv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qv(e,t,n,r){if(t===null||typeof t>"u"||Vv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nu=/[\-:]([a-z])/g;function Iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nu,Iu);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nu,Iu);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nu,Iu);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qv(t,n,i,r)&&(n=null),r||i===null?qv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Uu=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),gs=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),bp=Symbol.for("react.offscreen"),Zc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,El;function Jr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var kl=!1;function bl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Gv(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Xn:return"Portal";case ms:return"Profiler";case Hu:return"StrictMode";case vs:return"Suspense";case gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kp:return(e.displayName||"Context")+".Consumer";case Ep:return(e._context.displayName||"Context")+".Provider";case Uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wu:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function Yv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===Hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xv(e){var t=_p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=Xv(e))}function Cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_p(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xs(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ed(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Op(e,t){t=t.checked,t!=null&&Fu(e,"checked",t,!1)}function ws(e,t){Op(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ss(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ss(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Zr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Pp(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Lp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Kv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,dr=null,fr=null;function id(e){if(e=Hi(e)){if(typeof Os!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Ha(t),Os(e.stateNode,e.type,t))}}function Mp(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Dp(){if(dr){var e=dr,t=fr;if(fr=dr=null,id(e),t)for(e=0;e<t.length;e++)id(t[e])}}function Rp(e,t){return e(t)}function $p(){}var _l=!1;function Ap(e,t,n){if(_l)return e(t,n);_l=!0;try{return Rp(e,t,n)}finally{_l=!1,(dr!==null||fr!==null)&&($p(),Dp())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ha(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Ps=!1;if(Qt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Ps=!1}function Zv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ri=!1,Go=null,Yo=!1,Ts=null,eg={onError:function(e){ri=!0,Go=e}};function tg(e,t,n,r,i,o,l,a,s){ri=!1,Go=null,Zv.apply(eg,arguments)}function ng(e,t,n,r,i,o,l,a,s){if(tg.apply(this,arguments),ri){if(ri){var u=Go;ri=!1,Go=null}else throw Error(B(198));Yo||(Yo=!0,Ts=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function od(e){if(Bn(e)!==e)throw Error(B(188))}function rg(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return od(i),e;if(o===r)return od(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Ip(e){return e=rg(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fp(e);if(t!==null)return t;e=e.sibling}return null}var Hp=ut.unstable_scheduleCallback,ad=ut.unstable_cancelCallback,ig=ut.unstable_shouldYield,og=ut.unstable_requestPaint,Ce=ut.unstable_now,ag=ut.unstable_getCurrentPriorityLevel,qu=ut.unstable_ImmediatePriority,Up=ut.unstable_UserBlockingPriority,Xo=ut.unstable_NormalPriority,lg=ut.unstable_LowPriority,Wp=ut.unstable_IdlePriority,Aa=null,At=null;function sg(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:dg,ug=Math.log,cg=Math.LN2;function dg(e){return e>>>=0,e===0?32:31-(ug(e)/cg|0)|0}var to=64,no=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ei(a):(o&=l,o!==0&&(r=ei(o)))}else l=n&~i,l!==0?r=ei(l):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function fg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=fg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=to;return to<<=1,(to&4194240)===0&&(to=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function hg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function qp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vp,Qu,Qp,Gp,Yp,zs=!1,ro=[],cn=null,dn=null,fn=null,yi=new Map,xi=new Map,on=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&Qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vg(e,t,n,r,i){switch(t){case"focusin":return cn=Nr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Nr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Nr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Nr(yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xi.set(o,Nr(xi.get(o)||null,e,t,n,r,i)),!0}return!1}function Xp(e){var t=Tn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Np(n),t!==null){e.blockedOn=t,Yp(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cs=r,n.target.dispatchEvent(r),Cs=null}else return t=Hi(n),t!==null&&Qu(t),e.blockedOn=n,!1;t.shift()}return!0}function sd(e,t,n){$o(e)&&n.delete(t)}function gg(){zs=!1,cn!==null&&$o(cn)&&(cn=null),dn!==null&&$o(dn)&&(dn=null),fn!==null&&$o(fn)&&(fn=null),yi.forEach(sd),xi.forEach(sd)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,zs||(zs=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,gg)))}function wi(e){function t(i){return Ir(i,e)}if(0<ro.length){Ir(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Ir(cn,e),dn!==null&&Ir(dn,e),fn!==null&&Ir(fn,e),yi.forEach(t),xi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Xp(n),n.blockedOn===null&&on.shift()}var pr=Kt.ReactCurrentBatchConfig,Jo=!0;function yg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=1,Gu(e,t,n,r)}finally{fe=i,pr.transition=o}}function xg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=4,Gu(e,t,n,r)}finally{fe=i,pr.transition=o}}function Gu(e,t,n,r){if(Jo){var i=js(e,t,n,r);if(i===null)$l(e,t,r,Zo,n),ld(e,r);else if(vg(i,e,t,n,r))r.stopPropagation();else if(ld(e,r),t&4&&-1<mg.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&Vp(o),o=js(e,t,n,r),o===null&&$l(e,t,r,Zo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var Zo=null;function js(e,t,n,r){if(Zo=null,e=Bu(r),e=Tn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zo=e,null}function Kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case qu:return 1;case Up:return 4;case Xo:case lg:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var ln=null,Yu=null,Ao=null;function Jp(){if(Ao)return Ao;var e,t=Yu,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function ud(){return!1}function dt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?io:ud,this.isPropagationStopped=ud,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=dt(zr),Fi=be({},zr,{view:0,detail:0}),wg=dt(Fi),Ol,Pl,Fr,Na=be({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Ol=e.screenX-Fr.screenX,Pl=e.screenY-Fr.screenY):Pl=Ol=0,Fr=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),cd=dt(Na),Sg=be({},Na,{dataTransfer:0}),Eg=dt(Sg),kg=be({},Fi,{relatedTarget:0}),Tl=dt(kg),bg=be({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=dt(bg),Cg=be({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Og=dt(Cg),Pg=be({},zr,{data:0}),dd=dt(Pg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zg[e])?!!t[e]:!1}function Ku(){return jg}var Mg=be({},Fi,{key:function(e){if(e.key){var t=Tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dg=dt(Mg),Rg=be({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=dt(Rg),$g=be({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),Ag=dt($g),Ng=be({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=dt(Ng),Fg=be({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=dt(Fg),Ug=[9,13,27,32],Ju=Qt&&"CompositionEvent"in window,ii=null;Qt&&"documentMode"in document&&(ii=document.documentMode);var Wg=Qt&&"TextEvent"in window&&!ii,Zp=Qt&&(!Ju||ii&&8<ii&&11>=ii),pd=String.fromCharCode(32),hd=!1;function eh(e,t){switch(e){case"keyup":return Ug.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Bg(e,t){switch(e){case"compositionend":return th(t);case"keypress":return t.which!==32?null:(hd=!0,pd);case"textInput":return e=t.data,e===pd&&hd?null:e;default:return null}}function qg(e,t){if(Jn)return e==="compositionend"||!Ju&&eh(e,t)?(e=Jp(),Ao=Yu=ln=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zp&&t.locale!=="ko"?null:t.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vg[e.type]:t==="textarea"}function nh(e,t,n,r){Mp(r),t=ea(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,Si=null;function Qg(e){ph(e,0)}function Ia(e){var t=tr(e);if(Cp(t))return e}function Gg(e,t){if(e==="change")return t}var rh=!1;if(Qt){var Ll;if(Qt){var zl="oninput"in document;if(!zl){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),zl=typeof vd.oninput=="function"}Ll=zl}else Ll=!1;rh=Ll&&(!document.documentMode||9<document.documentMode)}function gd(){oi&&(oi.detachEvent("onpropertychange",ih),Si=oi=null)}function ih(e){if(e.propertyName==="value"&&Ia(Si)){var t=[];nh(t,Si,e,Bu(e)),Ap(Qg,t)}}function Yg(e,t,n){e==="focusin"?(gd(),oi=t,Si=n,oi.attachEvent("onpropertychange",ih)):e==="focusout"&&gd()}function Xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ia(Si)}function Kg(e,t){if(e==="click")return Ia(t)}function Jg(e,t){if(e==="input"||e==="change")return Ia(t)}function Zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Zg;function Ei(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hs.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,t){var n=yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yd(n)}}function oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e0(e){var t=ah(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oh(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xd(n,o);var l=xd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t0=Qt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Ms=null,ai=null,Ds=!1;function wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||Zn==null||Zn!==Qo(r)||(r=Zn,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Ei(ai,r)||(ai=r,r=ea(Ms,"onSelect"),0<r.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},jl={},lh={};Qt&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Fa(e){if(jl[e])return jl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return jl[e]=t[n];return e}var sh=Fa("animationend"),uh=Fa("animationiteration"),ch=Fa("animationstart"),dh=Fa("transitionend"),fh=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){fh.set(e,t),Wn(t,[e])}for(var Ml=0;Ml<Sd.length;Ml++){var Dl=Sd[Ml],n0=Dl.toLowerCase(),r0=Dl[0].toUpperCase()+Dl.slice(1);En(n0,"on"+r0)}En(sh,"onAnimationEnd");En(uh,"onAnimationIteration");En(ch,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(dh,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function Ed(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ng(r,t,void 0,e),e.currentTarget=null}function ph(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Ed(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Ed(i,a,u),o=s}}}if(Yo)throw e=Ts,Yo=!1,Ts=null,e}function ge(e,t){var n=t[Is];n===void 0&&(n=t[Is]=new Set);var r=e+"__bubble";n.has(r)||(hh(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),hh(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[ao]){e[ao]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,Rl("selectionchange",!1,t))}}function hh(e,t,n,r){switch(Kp(t)){case 1:var i=yg;break;case 4:i=xg;break;default:i=Gu}n=i.bind(null,t,n,e),i=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Ap(function(){var u=o,d=Bu(n),c=[];e:{var f=fh.get(e);if(f!==void 0){var h=Xu,m=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":h=Dg;break;case"focusin":m="focus",h=Tl;break;case"focusout":m="blur",h=Tl;break;case"beforeblur":case"afterblur":h=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ag;break;case sh:case uh:case ch:h=_g;break;case dh:h=Ig;break;case"scroll":h=wg;break;case"wheel":h=Hg;break;case"copy":case"cut":case"paste":h=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=fd}var y=(t&4)!==0,E=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,v!==null&&(w=gi(p,v),w!=null&&y.push(bi(p,w,g)))),E)break;p=p.return}0<y.length&&(f=new h(f,m,null,n,d),c.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Cs&&(m=n.relatedTarget||n.fromElement)&&(Tn(m)||m[Gt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Tn(m):null,m!==null&&(E=Bn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=cd,w="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=fd,w="onPointerLeave",v="onPointerEnter",p="pointer"),E=h==null?f:tr(h),g=m==null?f:tr(m),f=new y(w,p+"leave",h,n,d),f.target=E,f.relatedTarget=g,w=null,Tn(d)===u&&(y=new y(v,p+"enter",m,n,d),y.target=g,y.relatedTarget=E,w=y),E=w,h&&m)t:{for(y=h,v=m,p=0,g=y;g;g=Qn(g))p++;for(g=0,w=v;w;w=Qn(w))g++;for(;0<p-g;)y=Qn(y),p--;for(;0<g-p;)v=Qn(v),g--;for(;p--;){if(y===v||v!==null&&y===v.alternate)break t;y=Qn(y),v=Qn(v)}y=null}else y=null;h!==null&&kd(c,f,h,y,!1),m!==null&&E!==null&&kd(c,E,m,y,!0)}}e:{if(f=u?tr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var O=Gg;else if(md(f))if(rh)O=Jg;else{O=Xg;var P=Yg}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=Kg);if(O&&(O=O(e,u))){nh(c,O,n,d);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Ss(f,"number",f.value)}switch(P=u?tr(u):window,e){case"focusin":(md(P)||P.contentEditable==="true")&&(Zn=P,Ms=u,ai=null);break;case"focusout":ai=Ms=Zn=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,wd(c,n,d);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":wd(c,n,d)}var k;if(Ju)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Jn?eh(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Zp&&n.locale!=="ko"&&(Jn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Jn&&(k=Jp()):(ln=d,Yu="value"in ln?ln.value:ln.textContent,Jn=!0)),P=ea(u,S),0<P.length&&(S=new dd(S,e,null,n,d),c.push({event:S,listeners:P}),k?S.data=k:(k=th(n),k!==null&&(S.data=k)))),(k=Wg?Bg(e,n):qg(e,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(d=new dd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}ph(c,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gi(e,n),o!=null&&r.unshift(bi(e,o,i)),o=gi(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=gi(n,o),s!=null&&l.unshift(bi(n,s,a))):i||(s=gi(n,o),s!=null&&l.push(bi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function bd(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(a0,"")}function lo(e,t,n){if(t=bd(t),bd(e)!==t&&n)throw Error(B(425))}function ta(){}var Rs=null,$s=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(u0)}:Ns;function u0(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),$t="__reactFiber$"+jr,_i="__reactProps$"+jr,Gt="__reactContainer$"+jr,Is="__reactEvents$"+jr,c0="__reactListeners$"+jr,d0="__reactHandles$"+jr;function Tn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cd(e);e!==null;){if(n=e[$t])return n;e=Cd(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[$t]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Ha(e){return e[_i]||null}var Fs=[],nr=-1;function kn(e){return{current:e}}function ye(e){0>nr||(e.current=Fs[nr],Fs[nr]=null,nr--)}function me(e,t){nr++,Fs[nr]=e.current,e.current=t}var Sn={},Qe=kn(Sn),nt=kn(!1),An=Sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function na(){ye(nt),ye(Qe)}function Od(e,t,n){if(Qe.current!==Sn)throw Error(B(168));me(Qe,t),me(nt,n)}function mh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Yv(e)||"Unknown",i));return be({},n,r)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,An=Qe.current,me(Qe,e),me(nt,nt.current),!0}function Pd(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=mh(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Qe),me(Qe,e)):ye(nt),me(nt,n)}var Ut=null,Ua=!1,Nl=!1;function vh(e){Ut===null?Ut=[e]:Ut.push(e)}function f0(e){Ua=!0,vh(e)}function bn(){if(!Nl&&Ut!==null){Nl=!0;var e=0,t=fe;try{var n=Ut;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ua=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Hp(qu,bn),i}finally{fe=t,Nl=!1}}return null}var rr=[],ir=0,ia=null,oa=0,ht=[],mt=0,Nn=null,Wt=1,Bt="";function Cn(e,t){rr[ir++]=oa,rr[ir++]=ia,ia=e,oa=t}function gh(e,t,n){ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Nn=e;var r=Wt;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function ec(e){e.return!==null&&(Cn(e,1),gh(e,1,0))}function tc(e){for(;e===ia;)ia=rr[--ir],rr[ir]=null,oa=rr[--ir],rr[ir]=null;for(;e===Nn;)Nn=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Wt=ht[--mt],ht[mt]=null}var st=null,lt=null,we=!1,_t=null;function yh(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Td(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function Hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(we){var t=lt;if(t){var n=t;if(!Td(e,t)){if(Hs(e))throw Error(B(418));t=pn(n.nextSibling);var r=st;t&&Td(e,t)?yh(r,n):(e.flags=e.flags&-4097|2,we=!1,st=e)}}else{if(Hs(e))throw Error(B(418));e.flags=e.flags&-4097|2,we=!1,st=e}}}function Ld(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function so(e){if(e!==st)return!1;if(!we)return Ld(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=lt)){if(Hs(e))throw xh(),Error(B(418));for(;t;)yh(e,t),t=pn(t.nextSibling)}if(Ld(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?pn(e.stateNode.nextSibling):null;return!0}function xh(){for(var e=lt;e;)e=pn(e.nextSibling)}function xr(){lt=st=null,we=!1}function nc(e){_t===null?_t=[e]:_t.push(e)}var p0=Kt.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var aa=kn(null),la=null,or=null,rc=null;function ic(){rc=or=la=null}function oc(e){var t=aa.current;ye(aa),e._currentValue=t}function Ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){la=e,rc=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(la===null)throw Error(B(308));or=e,la.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Ln=null;function ac(e){Ln===null?Ln=[e]:Ln.push(e)}function wh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}function zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sa(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(h,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,c,f):m,f==null)break e;c=be({},c,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,s=c):d=d.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=c}}function jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Eh=new wp.Component().refs;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=vn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(Pt(t,e,r,n),Io(t,e,r))}};function Md(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,o):!0}function kh(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=rt(t)?An:Qe.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Eh,lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=rt(t)?An:Qe.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Eh&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function bh(e){function t(v,p){if(e){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=gn(v,p),v.index=0,v.sibling=null,v}function o(v,p,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,w){return p===null||p.tag!==6?(p=ql(g,v.mode,w),p.return=v,p):(p=i(p,g),p.return=v,p)}function s(v,p,g,w){var O=g.type;return O===Kn?d(v,p,g.props.children,w,g.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&Rd(O)===p.type)?(w=i(p,g.props),w.ref=Hr(v,p,g),w.return=v,w):(w=qo(g.type,g.key,g.props,null,v.mode,w),w.ref=Hr(v,p,g),w.return=v,w)}function u(v,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Vl(g,v.mode,w),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function d(v,p,g,w,O){return p===null||p.tag!==7?(p=Dn(g,v.mode,w,O),p.return=v,p):(p=i(p,g),p.return=v,p)}function c(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ql(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ji:return g=qo(p.type,p.key,p.props,null,v.mode,g),g.ref=Hr(v,null,p),g.return=v,g;case Xn:return p=Vl(p,v.mode,g),p.return=v,p;case tn:var w=p._init;return c(v,w(p._payload),g)}if(Zr(p)||$r(p))return p=Dn(p,v.mode,g,null),p.return=v,p;uo(v,p)}return null}function f(v,p,g,w){var O=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:a(v,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:return g.key===O?s(v,p,g,w):null;case Xn:return g.key===O?u(v,p,g,w):null;case tn:return O=g._init,f(v,p,O(g._payload),w)}if(Zr(g)||$r(g))return O!==null?null:d(v,p,g,w,null);uo(v,g)}return null}function h(v,p,g,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(g)||null,a(p,v,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ji:return v=v.get(w.key===null?g:w.key)||null,s(p,v,w,O);case Xn:return v=v.get(w.key===null?g:w.key)||null,u(p,v,w,O);case tn:var P=w._init;return h(v,p,g,P(w._payload),O)}if(Zr(w)||$r(w))return v=v.get(g)||null,d(p,v,w,O,null);uo(p,w)}return null}function m(v,p,g,w){for(var O=null,P=null,k=p,S=p=0,z=null;k!==null&&S<g.length;S++){k.index>S?(z=k,k=null):z=k.sibling;var M=f(v,k,g[S],w);if(M===null){k===null&&(k=z);break}e&&k&&M.alternate===null&&t(v,k),p=o(M,p,S),P===null?O=M:P.sibling=M,P=M,k=z}if(S===g.length)return n(v,k),we&&Cn(v,S),O;if(k===null){for(;S<g.length;S++)k=c(v,g[S],w),k!==null&&(p=o(k,p,S),P===null?O=k:P.sibling=k,P=k);return we&&Cn(v,S),O}for(k=r(v,k);S<g.length;S++)z=h(k,v,S,g[S],w),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?S:z.key),p=o(z,p,S),P===null?O=z:P.sibling=z,P=z);return e&&k.forEach(function(R){return t(v,R)}),we&&Cn(v,S),O}function y(v,p,g,w){var O=$r(g);if(typeof O!="function")throw Error(B(150));if(g=O.call(g),g==null)throw Error(B(151));for(var P=O=null,k=p,S=p=0,z=null,M=g.next();k!==null&&!M.done;S++,M=g.next()){k.index>S?(z=k,k=null):z=k.sibling;var R=f(v,k,M.value,w);if(R===null){k===null&&(k=z);break}e&&k&&R.alternate===null&&t(v,k),p=o(R,p,S),P===null?O=R:P.sibling=R,P=R,k=z}if(M.done)return n(v,k),we&&Cn(v,S),O;if(k===null){for(;!M.done;S++,M=g.next())M=c(v,M.value,w),M!==null&&(p=o(M,p,S),P===null?O=M:P.sibling=M,P=M);return we&&Cn(v,S),O}for(k=r(v,k);!M.done;S++,M=g.next())M=h(k,v,S,M.value,w),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?S:M.key),p=o(M,p,S),P===null?O=M:P.sibling=M,P=M);return e&&k.forEach(function(A){return t(v,A)}),we&&Cn(v,S),O}function E(v,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:e:{for(var O=g.key,P=p;P!==null;){if(P.key===O){if(O=g.type,O===Kn){if(P.tag===7){n(v,P.sibling),p=i(P,g.props.children),p.return=v,v=p;break e}}else if(P.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&Rd(O)===P.type){n(v,P.sibling),p=i(P,g.props),p.ref=Hr(v,P,g),p.return=v,v=p;break e}n(v,P);break}else t(v,P);P=P.sibling}g.type===Kn?(p=Dn(g.props.children,v.mode,w,g.key),p.return=v,v=p):(w=qo(g.type,g.key,g.props,null,v.mode,w),w.ref=Hr(v,p,g),w.return=v,v=w)}return l(v);case Xn:e:{for(P=g.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Vl(g,v.mode,w),p.return=v,v=p}return l(v);case tn:return P=g._init,E(v,p,P(g._payload),w)}if(Zr(g))return m(v,p,g,w);if($r(g))return y(v,p,g,w);uo(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=ql(g,v.mode,w),p.return=v,v=p),l(v)):n(v,p)}return E}var wr=bh(!0),_h=bh(!1),Ui={},Nt=kn(Ui),Ci=kn(Ui),Oi=kn(Ui);function zn(e){if(e===Ui)throw Error(B(174));return e}function sc(e,t){switch(me(Oi,t),me(Ci,e),me(Nt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}ye(Nt),me(Nt,t)}function Sr(){ye(Nt),ye(Ci),ye(Oi)}function Ch(e){zn(Oi.current);var t=zn(Nt.current),n=ks(t,e.type);t!==n&&(me(Ci,e),me(Nt,n))}function uc(e){Ci.current===e&&(ye(Nt),ye(Ci))}var Ee=kn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function cc(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Fo=Kt.ReactCurrentDispatcher,Fl=Kt.ReactCurrentBatchConfig,In=0,ke=null,je=null,Re=null,ca=!1,li=!1,Pi=0,h0=0;function Ue(){throw Error(B(321))}function dc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function fc(e,t,n,r,i,o){if(In=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?y0:x0,e=n(r,i),li){o=0;do{if(li=!1,Pi=0,25<=o)throw Error(B(301));o+=1,Re=je=null,t.updateQueue=null,Fo.current=w0,e=n(r,i)}while(li)}if(Fo.current=da,t=je!==null&&je.next!==null,In=0,Re=je=ke=null,ca=!1,t)throw Error(B(300));return e}function pc(){var e=Pi!==0;return Pi=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ke.memoizedState=Re=e:Re=Re.next=e,Re}function xt(){if(je===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Re===null?ke.memoizedState:Re.next;if(t!==null)Re=t,je=e;else{if(e===null)throw Error(B(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Re===null?ke.memoizedState=Re=e:Re=Re.next=e}return Re}function Ti(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=xt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((In&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ke.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=xt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Lt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Oh(){}function Ph(e,t){var n=ke,r=xt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,hc(zh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Li(9,Lh.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(B(349));(In&30)!==0||Th(n,t,i)}return i}function Th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lh(e,t,n,r){t.value=n,t.getSnapshot=r,jh(t)&&Mh(e)}function zh(e,t,n){return n(function(){jh(t)&&Mh(e)})}function jh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Mh(e){var t=Yt(e,1);t!==null&&Pt(t,e,1,-1)}function $d(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=g0.bind(null,ke,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dh(){return xt().memoizedState}function Ho(e,t,n,r){var i=Rt();ke.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Ba(e,t,n,r){var i=xt();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&dc(r,l.deps)){i.memoizedState=Li(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Li(1|t,n,o,r)}function Ad(e,t){return Ho(8390656,8,e,t)}function hc(e,t){return Ba(2048,8,e,t)}function Rh(e,t){return Ba(4,2,e,t)}function $h(e,t){return Ba(4,4,e,t)}function Ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4,4,Ah.bind(null,t,e),n)}function mc(){}function Ih(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hh(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Lt(n,t)||(n=Bp(),ke.lanes|=n,Fn|=n,e.baseState=!0),t)}function m0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{fe=n,Fl.transition=r}}function Uh(){return xt().memoizedState}function v0(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wh(e))Bh(t,n);else if(n=wh(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),qh(n,t,r)}}function g0(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Bh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,l)){var s=t.interleaved;s===null?(i.next=i,ac(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=wh(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),qh(n,t,r))}}function Wh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Bh(e,t){li=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}var da={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},y0={readContext:yt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Ad,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v0.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:$d,useDebugValue:mc,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=$d(!1),t=e[0];return e=m0.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Rt();if(we){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),$e===null)throw Error(B(349));(In&30)!==0||Th(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ad(zh.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,Lh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Rt(),t=$e.identifierPrefix;if(we){var n=Bt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},x0={readContext:yt,useCallback:Ih,useContext:yt,useEffect:hc,useImperativeHandle:Nh,useInsertionEffect:Rh,useLayoutEffect:$h,useMemo:Fh,useReducer:Hl,useRef:Dh,useState:function(){return Hl(Ti)},useDebugValue:mc,useDeferredValue:function(e){var t=xt();return Hh(t,je.memoizedState,e)},useTransition:function(){var e=Hl(Ti)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Oh,useSyncExternalStore:Ph,useId:Uh,unstable_isNewReconciler:!1},w0={readContext:yt,useCallback:Ih,useContext:yt,useEffect:hc,useImperativeHandle:Nh,useInsertionEffect:Rh,useLayoutEffect:$h,useMemo:Fh,useReducer:Ul,useRef:Dh,useState:function(){return Ul(Ti)},useDebugValue:mc,useDeferredValue:function(e){var t=xt();return je===null?t.memoizedState=e:Hh(t,je.memoizedState,e)},useTransition:function(){var e=Ul(Ti)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Oh,useSyncExternalStore:Ph,useId:Uh,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=Gv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,nu=r),Vs(e,t)},n}function Qh(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vs(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Nd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=R0.bind(null,e,t,n),t.then(e,e))}function Id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var E0=Kt.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?_h(t,null,n,r):wr(t,e.child,n,r)}function Hd(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=fc(e,t,n,r,o,i),n=pc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(we&&n&&ec(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Ud(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gh(e,t,o,r,i)):(e=qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ei(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Qs(e,t,n,r,i)}function Yh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(lr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(lr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(lr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(lr,at),at|=r;return Ye(e,t,i,n),t.child}function Xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,i){var o=rt(n)?An:Qe.current;return o=yr(t,o),hr(t,i),n=fc(e,t,n,r,o,i),r=pc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(we&&r&&ec(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Wd(e,t,n,r,i){if(rt(n)){var o=!0;ra(t)}else o=!1;if(hr(t,i),t.stateNode===null)Uo(e,t),kh(t,n,r),qs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=rt(n)?An:Qe.current,u=yr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Dd(t,l,r,u),nn=!1;var f=t.memoizedState;l.state=f,sa(t,r,l,i),s=t.memoizedState,a!==r||f!==s||nt.current||nn?(typeof d=="function"&&(Bs(t,n,d,r),s=t.memoizedState),(a=nn||Md(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Sh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Et(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=rt(n)?An:Qe.current,s=yr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Dd(t,l,r,s),nn=!1,f=t.memoizedState,l.state=f,sa(t,r,l,i);var m=t.memoizedState;a!==c||f!==m||nt.current||nn?(typeof h=="function"&&(Bs(t,n,h,r),m=t.memoizedState),(u=nn||Md(t,n,u,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,o,i)}function Gs(e,t,n,r,i,o){Xh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Pd(t,n,!1),Xt(e,t,o);r=t.stateNode,E0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=wr(t,e.child,null,o),t.child=wr(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&Pd(t,n,!0),t.child}function Kh(e){var t=e.stateNode;t.pendingContext?Od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Od(e,t.context,!1),sc(e,t.containerInfo)}function Bd(e,t,n,r,i){return xr(),nc(i),t.flags|=256,Ye(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jh(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ee,i&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Qa(l,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xs(n),t.memoizedState=Ys,e):vc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return k0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Dn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=Qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&nc(r),wr(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(B(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qa({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&wr(t,e.child,null,l),t.child.memoizedState=Xs(l),t.memoizedState=Ys,o);if((t.mode&1)===0)return co(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Wl(o,r,void 0),co(e,t,l,r)}if(a=(l&e.childLanes)!==0,tt||a){if(r=$e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Pt(r,e,i,-1))}return Ec(),r=Wl(Error(B(421))),co(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=pn(i.nextSibling),st=t,we=!0,_t=null,e!==null&&(ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Wt=e.id,Bt=e.overflow,Nn=t),t=vc(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ws(e.return,t,n)}function Bl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t,n){switch(t.tag){case 3:Kh(t),xr();break;case 5:Ch(t);break;case 1:rt(t.type)&&ra(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Jh(e,t,n):(me(Ee,Ee.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Zh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Yh(e,t,n)}return Xt(e,t,n)}var em,Ks,tm,nm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ks=function(){};tm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Nt.current);var o=null;switch(n){case"input":i=xs(e,i),r=xs(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=Es(e,i),r=Es(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}bs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _0(e,t,n){var r=t.pendingProps;switch(tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&na(),We(t),null;case 3:return r=t.stateNode,Sr(),ye(nt),ye(Qe),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(ou(_t),_t=null))),Ks(e,t),We(t),null;case 5:uc(t);var i=zn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=zn(Nt.current),so(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[_i]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":ed(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":nd(r,o),ge("invalid",r)}bs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":Zi(r),td(r,o,!0);break;case"textarea":Zi(r),rd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ta)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[$t]=t,e[_i]=r,em(e,t,!1,!1),t.stateNode=e;e:{switch(l=_s(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":ed(e,r),i=xs(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":nd(e,r),i=Es(e,r),ge("invalid",e);break;default:i=r}bs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?jp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Lp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vi(e,s):typeof s=="number"&&vi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Fu(e,o,s,l))}switch(n){case"input":Zi(e),td(e,r,!1);break;case"textarea":Zi(e),rd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=zn(Oi.current),zn(Nt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return We(t),null;case 13:if(ye(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)xh(),xr(),t.flags|=98560,o=!1;else if(o=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[$t]=t}else xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else _t!==null&&(ou(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Me===0&&(Me=3):Ec())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Sr(),Ks(e,t),e===null&&ki(t.stateNode.containerInfo),We(t),null;case 10:return oc(t.type._context),We(t),null;case 17:return rt(t.type)&&na(),We(t),null;case 19:if(ye(Ee),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ur(o,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ua(e),l!==null){for(t.flags|=128,Ur(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>kr&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!we)return We(t),null}else 2*Ce()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function C0(e,t){switch(tc(t),t.tag){case 1:return rt(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ye(nt),ye(Qe),cc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return uc(t),null;case 13:if(ye(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Ee),null;case 4:return Sr(),null;case 10:return oc(t.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var fo=!1,Ve=!1,O0=typeof WeakSet=="function"?WeakSet:Set,X=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Js(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Vd=!1;function P0(e,t){if(Rs=Jo,e=ah(),Zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++d===r&&(s=l),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},Jo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Et(t.type,y),E);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){_e(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return m=Vd,Vd=!1,m}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Js(t,n,o)}i=i.next}while(i!==r)}}function qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[_i],delete t[Is],delete t[c0],delete t[d0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function im(e){return e.tag===5||e.tag===3||e.tag===4}function Qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}var Ie=null,bt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)om(e,t,n),n=n.sibling}function om(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Ve||ar(n,t);case 6:var r=Ie,i=bt;Ie=null,Zt(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),wi(e)):Al(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,Zt(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Js(n,t,l),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Ve&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Zt(e,t,n),Ve=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O0),t.forEach(function(r){var i=A0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));om(o,l,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)am(t,e),t=t.sibling}function am(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Dt(e),r&4){try{si(3,e,e.return),qa(3,e)}catch(y){_e(e,e.return,y)}try{si(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:wt(t,e),Dt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(wt(t,e),Dt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Op(i,o),_s(a,l);var u=_s(a,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?jp(i,c):d==="dangerouslySetInnerHTML"?Lp(i,c):d==="children"?vi(i,c):Fu(i,d,c,u)}switch(a){case"input":ws(i,o);break;case"textarea":Pp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?cr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(wt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(wt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:wt(t,e),Dt(e);break;case 13:wt(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=Ce())),r&4&&Gd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,wt(t,e),Ve=u):wt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:ar(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){Xd(c);continue}}h!==null?(h.return=f,X=h):Xd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=zp("display",l))}catch(y){_e(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:wt(t,e),Dt(e),r&4&&Gd(e);break;case 21:break;default:wt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(im(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var o=Qd(e);tu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Qd(e);eu(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T0(e,t,n){X=e,lm(e)}function lm(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||fo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=fo;var u=Ve;if(fo=l,(Ve=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?Kd(i):s!==null?(s.return=l,X=s):Kd(i);for(;o!==null;)X=o,lm(o),o=o.sibling;X=i,fo=a,Ve=u}Yd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):Yd(e)}}function Yd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||qa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&wi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ve||t.flags&512&&Zs(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Xd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Kd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qa(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Zs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Zs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var L0=Math.ceil,fa=Kt.ReactCurrentDispatcher,gc=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,de=0,$e=null,Le=null,Fe=0,at=0,lr=kn(0),Me=0,zi=null,Fn=0,Va=0,yc=0,ui=null,et=null,xc=0,kr=1/0,Ht=null,pa=!1,nu=null,mn=null,po=!1,sn=null,ha=0,ci=0,ru=null,Wo=-1,Bo=0;function Xe(){return(de&6)!==0?Ce():Wo!==-1?Wo:Wo=Ce()}function vn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:p0.transition!==null?(Bo===0&&(Bo=Bp()),Bo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Kp(e.type)),e)}function Pt(e,t,n,r){if(50<ci)throw ci=0,ru=null,Error(B(185));Ii(e,n,r),((de&2)===0||e!==$e)&&(e===$e&&((de&2)===0&&(Va|=n),Me===4&&an(e,Fe)),it(e,r),n===1&&de===0&&(t.mode&1)===0&&(kr=Ce()+500,Ua&&bn()))}function it(e,t){var n=e.callbackNode;pg(e,t);var r=Ko(e,e===$e?Fe:0);if(r===0)n!==null&&ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ad(n),t===1)e.tag===0?f0(Jd.bind(null,e)):vh(Jd.bind(null,e)),s0(function(){(de&6)===0&&bn()}),n=null;else{switch(qp(r)){case 1:n=qu;break;case 4:n=Up;break;case 16:n=Xo;break;case 536870912:n=Wp;break;default:n=Xo}n=mm(n,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sm(e,t){if(Wo=-1,Bo=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Ko(e,e===$e?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ma(e,r);else{t=r;var i=de;de|=2;var o=cm();($e!==e||Fe!==t)&&(Ht=null,kr=Ce()+500,Mn(e,t));do try{M0();break}catch(a){um(e,a)}while(1);ic(),fa.current=o,de=i,Le!==null?t=0:($e=null,Fe=0,t=Me)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=iu(e,i))),t===1)throw n=zi,Mn(e,0),an(e,r),it(e,Ce()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,(r&30)===0&&!z0(i)&&(t=ma(e,r),t===2&&(o=Ls(e),o!==0&&(r=o,t=iu(e,o))),t===1))throw n=zi,Mn(e,0),an(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:On(e,et,Ht);break;case 3:if(an(e,r),(r&130023424)===r&&(t=xc+500-Ce(),10<t)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ns(On.bind(null,e,et,Ht),t);break}On(e,et,Ht);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L0(r/1960))-r,10<r){e.timeoutHandle=Ns(On.bind(null,e,et,Ht),r);break}On(e,et,Ht);break;case 5:On(e,et,Ht);break;default:throw Error(B(329))}}}return it(e,Ce()),e.callbackNode===n?sm.bind(null,e):null}function iu(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=ma(e,t),e!==2&&(t=et,et=n,t!==null&&ou(t)),e}function ou(e){et===null?et=e:et.push.apply(et,e)}function z0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~yc,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Jd(e){if((de&6)!==0)throw Error(B(327));mr();var t=Ko(e,0);if((t&1)===0)return it(e,Ce()),null;var n=ma(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=zi,Mn(e,0),an(e,t),it(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,et,Ht),it(e,Ce()),null}function wc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(kr=Ce()+500,Ua&&bn())}}function Hn(e){sn!==null&&sn.tag===0&&(de&6)===0&&mr();var t=de;de|=1;var n=gt.transition,r=fe;try{if(gt.transition=null,fe=1,e)return e()}finally{fe=r,gt.transition=n,de=t,(de&6)===0&&bn()}}function Sc(){at=lr.current,ye(lr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l0(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:Sr(),ye(nt),ye(Qe),cc();break;case 5:uc(r);break;case 4:Sr();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:oc(r.type._context);break;case 22:case 23:Sc()}n=n.return}if($e=e,Le=e=gn(e.current,null),Fe=at=t,Me=0,zi=null,yc=Va=Fn=0,et=ui=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ln=null}return e}function um(e,t){do{var n=Le;try{if(ic(),Fo.current=da,ca){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(In=0,Re=je=ke=null,li=!1,Pi=0,gc.current=null,n===null||n.return===null){Me=1,zi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Id(l);if(h!==null){h.flags&=-257,Fd(h,l,a,o,t),h.mode&1&&Nd(o,u,t),t=h,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if((t&1)===0){Nd(o,u,t),Ec();break e}s=Error(B(426))}}else if(we&&a.mode&1){var E=Id(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Fd(E,l,a,o,t),nc(Er(s,a));break e}}o=s=Er(s,a),Me!==4&&(Me=2),ui===null?ui=[o]:ui.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Vh(o,s,t);zd(o,v);break e;case 1:a=s;var p=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Qh(o,a,t);zd(o,w);break e}}o=o.return}while(o!==null)}fm(n)}catch(O){t=O,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function cm(){var e=fa.current;return fa.current=da,e===null?da:e}function Ec(){(Me===0||Me===3||Me===2)&&(Me=4),$e===null||(Fn&268435455)===0&&(Va&268435455)===0||an($e,Fe)}function ma(e,t){var n=de;de|=2;var r=cm();($e!==e||Fe!==t)&&(Ht=null,Mn(e,t));do try{j0();break}catch(i){um(e,i)}while(1);if(ic(),de=n,fa.current=r,Le!==null)throw Error(B(261));return $e=null,Fe=0,Me}function j0(){for(;Le!==null;)dm(Le)}function M0(){for(;Le!==null&&!ig();)dm(Le)}function dm(e){var t=hm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?fm(e):Le=t,gc.current=null}function fm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=_0(n,t,at),n!==null){Le=n;return}}else{if(n=C0(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function On(e,t,n){var r=fe,i=gt.transition;try{gt.transition=null,fe=1,D0(e,t,n,r)}finally{gt.transition=i,fe=r}return null}function D0(e,t,n,r){do mr();while(sn!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hg(e,o),e===$e&&(Le=$e=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||po||(po=!0,mm(Xo,function(){return mr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var l=fe;fe=1;var a=de;de|=4,gc.current=null,P0(e,n),am(n,e),e0($s),Jo=!!Rs,$s=Rs=null,e.current=n,T0(n),og(),de=a,fe=l,gt.transition=o}else e.current=n;if(po&&(po=!1,sn=e,ha=i),o=e.pendingLanes,o===0&&(mn=null),sg(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=nu,nu=null,e;return(ha&1)!==0&&e.tag!==0&&mr(),o=e.pendingLanes,(o&1)!==0?e===ru?ci++:(ci=0,ru=e):ci=0,bn(),null}function mr(){if(sn!==null){var e=qp(ha),t=gt.transition,n=fe;try{if(gt.transition=null,fe=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,ha=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:si(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,h=d.return;if(rm(d),d===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,X=v;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,X=g;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(O){_e(a,a.return,O)}if(a===l){X=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,X=w;break e}X=a.return}}if(de=i,bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Aa,e)}catch{}r=!0}return r}finally{fe=n,gt.transition=t}}return!1}function Zd(e,t,n){t=Er(n,t),t=Vh(e,t,1),e=hn(e,t,1),t=Xe(),e!==null&&(Ii(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Zd(e,e,n);else for(;t!==null;){if(t.tag===3){Zd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Er(n,e),e=Qh(t,e,1),t=hn(t,e,1),e=Xe(),t!==null&&(Ii(t,1,e),it(t,e));break}}t=t.return}}function R0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Fe&n)===n&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>Ce()-xc?Mn(e,0):yc|=n),it(e,t)}function pm(e,t){t===0&&((e.mode&1)===0?t=1:(t=no,no<<=1,(no&130023424)===0&&(no=4194304)));var n=Xe();e=Yt(e,t),e!==null&&(Ii(e,t,n),it(e,n))}function $0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function A0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),pm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,b0(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,we&&(t.flags&1048576)!==0&&gh(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var i=yr(t,Qe.current);hr(t,n),i=fc(null,t,r,e,i,n);var o=pc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,qs(t,r,e,n),t=Gs(null,t,r,!0,o,n)):(t.tag=0,we&&o&&ec(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=I0(r),e=Et(r,e),i){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=Wd(null,t,r,e,n);break e;case 11:t=Hd(null,t,r,e,n);break e;case 14:t=Ud(null,t,r,Et(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Qs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Wd(e,t,r,i,n);case 3:e:{if(Kh(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sh(e,t),sa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Er(Error(B(423)),t),t=Bd(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(B(424)),t),t=Bd(e,t,r,n,i);break e}else for(lt=pn(t.stateNode.containerInfo.firstChild),st=t,we=!0,_t=null,n=_h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Ch(t),e===null&&Us(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,As(r,i)?l=null:o!==null&&As(r,o)&&(t.flags|=32),Xh(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&Us(t),null;case 13:return Jh(e,t,n);case 4:return sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Hd(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(aa,r._currentValue),r._currentValue=l,o!==null)if(Lt(o.value,l)){if(o.children===i.children&&!nt.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Vt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ws(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ws(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),Ud(e,t,r,i,n);case 15:return Gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Uo(e,t),t.tag=1,rt(r)?(e=!0,ra(t)):e=!1,hr(t,n),kh(t,r,i),qs(t,r,i,n),Gs(null,t,r,!0,e,n);case 19:return Zh(e,t,n);case 22:return Yh(e,t,n)}throw Error(B(156,t.tag))};function mm(e,t){return Hp(e,t)}function N0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new N0(e,t,n,r)}function kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I0(e){if(typeof e=="function")return kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uu)return 11;if(e===Wu)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")kc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return Dn(n.children,i,o,t);case Hu:l=8,i|=8;break;case ms:return e=vt(12,n,t,i|2),e.elementType=ms,e.lanes=o,e;case vs:return e=vt(13,n,t,i),e.elementType=vs,e.lanes=o,e;case gs:return e=vt(19,n,t,i),e.elementType=gs,e.lanes=o,e;case bp:return Qa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ep:l=10;break e;case kp:l=9;break e;case Uu:l=11;break e;case Wu:l=14;break e;case tn:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Qa(e,t,n,r){return e=vt(22,e,r,t),e.elementType=bp,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,o,l,a,s){return e=new F0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(o),e}function H0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vm(e){if(!e)return Sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(rt(n))return mh(e,n,t)}return t}function gm(e,t,n,r,i,o,l,a,s){return e=bc(n,r,!0,e,i,o,l,a,s),e.context=vm(null),n=e.current,r=Xe(),i=vn(n),o=Vt(r,i),o.callback=t!=null?t:null,hn(n,o,i),e.current.lanes=i,Ii(e,i,r),it(e,r),e}function Ga(e,t,n,r){var i=t.current,o=Xe(),l=vn(i);return n=vm(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,l),e!==null&&(Pt(e,i,l,o),Io(e,i,l)),l}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){ef(e,t),(e=e.alternate)&&ef(e,t)}function U0(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cc(e){this._internalRoot=e}Ya.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ga(e,t,null,null)};Ya.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Ga(null,e,null,null)}),t[Gt]=null}};function Ya(e){this._internalRoot=e}Ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Xp(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tf(){}function W0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=va(l);o.call(u)}}var l=gm(t,r,e,0,null,!1,!1,"",tf);return e._reactRootContainer=l,e[Gt]=l.current,ki(e.nodeType===8?e.parentNode:e),Hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=va(s);a.call(u)}}var s=bc(e,0,!1,null,null,!1,!1,"",tf);return e._reactRootContainer=s,e[Gt]=s.current,ki(e.nodeType===8?e.parentNode:e),Hn(function(){Ga(t,s,n,r)}),s}function Ka(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=va(l);a.call(s)}}Ga(t,l,e,i)}else l=W0(n,t,e,i,r);return va(l)}Vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Vu(t,n|1),it(t,Ce()),(de&6)===0&&(kr=Ce()+500,bn()))}break;case 13:Hn(function(){var r=Yt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),_c(e,1)}};Qu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}_c(e,134217728)}};Qp=function(e){if(e.tag===13){var t=vn(e),n=Yt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}_c(e,t)}};Gp=function(){return fe};Yp=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Os=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ha(r);if(!i)throw Error(B(90));Cp(r),ws(r,i)}}}break;case"textarea":Pp(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Rp=wc;$p=Hn;var B0={usingClientEntryPoint:!1,Events:[Hi,tr,Ha,Mp,Dp,wc]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},q0={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ip(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Aa=ho.inject(q0),At=ho}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(t))throw Error(B(200));return H0(e,t,null,n)};ct.createRoot=function(e,t){if(!Oc(e))throw Error(B(299));var n=!1,r="",i=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,ki(e.nodeType===8?e.parentNode:e),new Cc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Ip(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Hn(e)};ct.hydrate=function(e,t,n){if(!Xa(t))throw Error(B(200));return Ka(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Oc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=gm(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Gt]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ya(t)};ct.render=function(e,t,n){if(!Xa(t))throw Error(B(200));return Ka(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Xa(e))throw Error(B(40));return e._reactRootContainer?(Hn(function(){Ka(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=wc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xa(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Ka(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(Au);var nf=Au.exports;ps.createRoot=nf.createRoot,ps.hydrateRoot=nf.hydrateRoot;var Ja={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Pc=Ae?Symbol.for("react.element"):60103,Tc=Ae?Symbol.for("react.portal"):60106,Za=Ae?Symbol.for("react.fragment"):60107,el=Ae?Symbol.for("react.strict_mode"):60108,tl=Ae?Symbol.for("react.profiler"):60114,nl=Ae?Symbol.for("react.provider"):60109,rl=Ae?Symbol.for("react.context"):60110,Lc=Ae?Symbol.for("react.async_mode"):60111,il=Ae?Symbol.for("react.concurrent_mode"):60111,ol=Ae?Symbol.for("react.forward_ref"):60112,al=Ae?Symbol.for("react.suspense"):60113,V0=Ae?Symbol.for("react.suspense_list"):60120,ll=Ae?Symbol.for("react.memo"):60115,sl=Ae?Symbol.for("react.lazy"):60116,Q0=Ae?Symbol.for("react.block"):60121,G0=Ae?Symbol.for("react.fundamental"):60117,Y0=Ae?Symbol.for("react.responder"):60118,X0=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pc:switch(e=e.type,e){case Lc:case il:case Za:case tl:case el:case al:return e;default:switch(e=e&&e.$$typeof,e){case rl:case ol:case sl:case ll:case nl:return e;default:return t}}case Tc:return t}}}function xm(e){return ft(e)===il}pe.AsyncMode=Lc;pe.ConcurrentMode=il;pe.ContextConsumer=rl;pe.ContextProvider=nl;pe.Element=Pc;pe.ForwardRef=ol;pe.Fragment=Za;pe.Lazy=sl;pe.Memo=ll;pe.Portal=Tc;pe.Profiler=tl;pe.StrictMode=el;pe.Suspense=al;pe.isAsyncMode=function(e){return xm(e)||ft(e)===Lc};pe.isConcurrentMode=xm;pe.isContextConsumer=function(e){return ft(e)===rl};pe.isContextProvider=function(e){return ft(e)===nl};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pc};pe.isForwardRef=function(e){return ft(e)===ol};pe.isFragment=function(e){return ft(e)===Za};pe.isLazy=function(e){return ft(e)===sl};pe.isMemo=function(e){return ft(e)===ll};pe.isPortal=function(e){return ft(e)===Tc};pe.isProfiler=function(e){return ft(e)===tl};pe.isStrictMode=function(e){return ft(e)===el};pe.isSuspense=function(e){return ft(e)===al};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Za||e===il||e===tl||e===el||e===al||e===V0||typeof e=="object"&&e!==null&&(e.$$typeof===sl||e.$$typeof===ll||e.$$typeof===nl||e.$$typeof===rl||e.$$typeof===ol||e.$$typeof===G0||e.$$typeof===Y0||e.$$typeof===X0||e.$$typeof===Q0)};pe.typeOf=ft;(function(e){e.exports=pe})(Ja);function K0(e){function t(H,b,Q,F,L){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,De=oe=se=0,ce=0,ze=0,_n=0,Pe=0,Jt=Q.length,Ft=Jt-1,ot,te="",he="",Vn="",Rr="",Mt;ce<Jt;){if(ne=Q.charCodeAt(ce),ce===Ft&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Jt++,Ft++),W+ie+ee+J===0){if(ce===Ft&&(0<ze&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=Q.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Jt;){switch(ne=Q.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=Q.charCodeAt(ce+1)){case 42:case 47:e:{for(De=ce+1;De<Ft;++De)switch(Q.charCodeAt(De)){case 47:if(ne===42&&Q.charCodeAt(De-1)===42&&ce+2!==De){ce=De+1;break e}break;case 10:if(ne===47){ce=De+1;break e}}ce=De}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Ft&&Q.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=Q.substring(Pe,ce),se===0&&(se=(te=te.replace(c,"").trim()).charCodeAt(0)),se){case 64:switch(0<ze&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:ze=b;break;default:ze=G}if(oe=t(b,ze,oe,ne,L+1),Pe=oe.length,0<T&&(ze=n(G,te,_n),Mt=a(3,oe,ze,b,$,A,Pe,ne,L,F),te=ze.join(""),Mt!==void 0&&(Pe=(oe=Mt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(P,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(b,n(b,te,_n),oe,F,L+1)}Vn+=oe,oe=_n=ze=De=se=0,te="",ne=Q.charCodeAt(++ce);break;case 125:case 59:if(te=(0<ze?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(De===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<T&&(Mt=a(1,te,b,H,$,A,he.length,F,L,F))!==void 0&&(Pe=(te=Mt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){Rr+=te+Q.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}_n=ze=De=se=0,te="",ne=Q.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(ze=1,te+="\0"),0<T*U&&a(0,te,b,H,$,A,he.length,F,L,F),A=1,$++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,ot=Q.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:ne!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ie+W+J===0&&(ze=_n=1,ot="\f"+ot);break;case 108:if(ie+W+J+N===0&&0<De)switch(ce-De){case 2:Oe===112&&Q.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(De=ce);break;case 44:W+ee+ie+J===0&&(ze=1,ot+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+De+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*Q.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(Q.charCodeAt(Pe+2)===33&&(he+=Q.substring(Pe,ce+1)),ot="",W=0)}}W===0&&(te+=ot)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if(ze=b,0<T&&(Mt=a(2,he,ze,H,$,A,Pe,F,L,F),Mt!==void 0&&(he=Mt).length===0))return Rr+he+Vn;if(he=ze.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(w,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}N=0}}return Rr+he+Vn}function n(H,b,Q){var F=b.trim().split(E);b=F;var L=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<L;++W)b[W]=r(H,b[W],Q).trim();break;default:var ee=W=0;for(b=[];W<L;++W)for(var ie=0;ie<J;++ie)b[ee++]=r(H[ie]+" ",F[W],Q).trim()}return b}function r(H,b,Q){var F=b.charCodeAt(0);switch(33>F&&(F=(b=b.trim()).charCodeAt(0)),F){case 38:return b.replace(v,"$1"+H.trim());case 58:return H.trim()+b.replace(v,"$1"+H.trim());default:if(0<1*Q&&0<b.indexOf("\f"))return b.replace(v,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+b}function i(H,b,Q,F){var L=H+";",J=2*b+3*Q+4*F;if(J===944){H=L.indexOf(":",9)+1;var W=L.substring(H,L.length-1).trim();return W=L.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(L,1))return L;switch(J){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(R,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return W=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+L+"-ms-flex-pack"+W+L;case 1005:return m.test(L)?L.replace(h,":-webkit-")+L.replace(h,":-moz-")+L:L;case 1e3:switch(W=L.substring(13).trim(),b=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(b)){case 226:W=L.replace(O,"tb");break;case 232:W=L.replace(O,"tb-rl");break;case 220:W=L.replace(O,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+W+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(b=(L=H).length-10,W=(L.charCodeAt(b)===33?L.substring(0,b):L).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:L=L.replace(W,"-webkit-"+W)+";"+L;break;case 207:case 102:L=L.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+L.replace(W,"-webkit-"+W)+";"+L.replace(W,"-ms-"+W+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return W=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+W+"-ms-flex-"+W+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(S,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(S,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(M.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),b,Q,F).replace(":fill-available",":stretch"):L.replace(W,"-webkit-"+W)+L.replace(W,"-moz-"+W.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,Q+F===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+L}return L}function o(H,b){var Q=H.indexOf(b===1?":":"{"),F=H.substring(0,b!==3?Q:10);return Q=H.substring(Q+1,H.length-1),D(b!==2?F:F.replace(z,"$1"),Q,b)}function l(H,b){var Q=i(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return Q!==b+";"?Q.replace(k," or ($1)").substring(4):"("+b+")"}function a(H,b,Q,F,L,J,W,ee,ie,se){for(var ne=0,Oe=b,Ne;ne<T;++ne)switch(Ne=j[ne].call(d,H,Oe,Q,F,L,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==b)return Oe}function s(H){switch(H){case void 0:case null:T=j.length=0;break;default:if(typeof H=="function")j[T++]=H;else if(typeof H=="object")for(var b=0,Q=H.length;b<Q;++b)s(H[b]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(D=null,H?typeof H!="function"?I=1:(I=2,D=H):I=0),u}function d(H,b){var Q=H;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),q=Q,Q=[q],0<T){var F=a(-1,b,Q,Q,$,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(b=F)}var L=t(G,Q,b,0,0);return 0<T&&(F=a(-2,L,Q,Q,$,A,L.length,0,0,0),F!==void 0&&(L=F)),q="",N=0,A=$=1,L}var c=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,w=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,R=/([^-])(image-set\()/,A=1,$=1,N=0,I=1,G=[],j=[],T=0,D=null,U=0,q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var J0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Z0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ey=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rf=Z0(function(e){return ey.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zc=Ja.exports,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ny={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jc={};jc[zc.ForwardRef]=ry;jc[zc.Memo]=wm;function of(e){return zc.isMemo(e)?wm:jc[e.$$typeof]||ty}var iy=Object.defineProperty,oy=Object.getOwnPropertyNames,af=Object.getOwnPropertySymbols,ay=Object.getOwnPropertyDescriptor,ly=Object.getPrototypeOf,lf=Object.prototype;function Sm(e,t,n){if(typeof t!="string"){if(lf){var r=ly(t);r&&r!==lf&&Sm(e,r,n)}var i=oy(t);af&&(i=i.concat(af(t)));for(var o=of(e),l=of(t),a=0;a<i.length;++a){var s=i[a];if(!ny[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=ay(t,s);try{iy(e,s,u)}catch{}}}}return e}var Em=Sm;function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},au=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ja.exports.typeOf(e)},ga=Object.freeze([]),yn=Object.freeze({});function ji(e){return typeof e=="function"}function uf(e){return e.displayName||e.name||"Component"}function Mc(e){return e&&typeof e.styledComponentId=="string"}var br=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Dc=typeof window<"u"&&"HTMLElement"in window,sy=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Wi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var uy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Wi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Vo=new Map,ya=new Map,di=1,mo=function(e){if(Vo.has(e))return Vo.get(e);for(;ya.has(di);)di++;var t=di++;return Vo.set(e,t),ya.set(t,e),t},cy=function(e){return ya.get(e)},dy=function(e,t){t>=di&&(di=t+1),Vo.set(e,t),ya.set(t,e)},fy="style["+br+'][data-styled-version="5.3.5"]',py=new RegExp("^"+br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),hy=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},my=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(py);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(dy(u,s),hy(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},vy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},km=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(br))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(br,"active"),r.setAttribute("data-styled-version","5.3.5");var l=vy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},gy=function(){function e(n){var r=this.element=km(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Wi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),yy=function(){function e(n){var r=this.element=km(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),xy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),cf=Dc,wy={isServer:!Dc,useCSSOMInjection:!sy},bm=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=qt({},wy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Dc&&cf&&(cf=!1,function(o){for(var l=document.querySelectorAll(fy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(br)!=="active"&&(my(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new xy(l):o?new gy(l):new yy(l),new uy(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(mo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(mo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=cy(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var d=br+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),Sy=/(a)(d)/gi,df=function(e){return String.fromCharCode(e+(e>25?39:97))};function lu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=df(t%52)+n;return(df(t%52)+n).replace(Sy,"$1-$2")}var sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_m=function(e){return sr(5381,e)};function Ey(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ji(n)&&!Mc(n))return!1}return!0}var ky=_m("5.3.5"),by=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ey(t),this.componentId=n,this.baseHash=sr(ky,n),this.baseStyle=r,bm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=_r(this.rules,t,n,r).join(""),a=lu(sr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=sr(this.baseHash,r.hash),c="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var m=_r(h,t,n,r),y=Array.isArray(m)?m.join(""):m;d=sr(d,y+f),c+=y}}if(c){var E=lu(d>>>0);if(!n.hasNameForId(i,E)){var v=r(c,"."+E,void 0,i);n.insertRules(i,E,v)}o.push(E)}}return o.join(" ")},e}(),_y=/^\s*\/\/.*$/gm,Cy=[":","[",".","#"];function Oy(e){var t,n,r,i,o=e===void 0?yn:e,l=o.options,a=l===void 0?yn:l,s=o.plugins,u=s===void 0?ga:s,d=new K0(a),c=[],f=function(y){function E(v){if(v)try{y(v+"}")}catch{}}return function(v,p,g,w,O,P,k,S,z,M){switch(v){case 1:if(z===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(g[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(y){c.push(y)}),h=function(y,E,v){return E===0&&Cy.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function m(y,E,v,p){p===void 0&&(p="&");var g=y.replace(_y,""),w=E&&v?v+" "+E+" { "+g+" }":g;return t=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(v||!E?"":E,w)}return d.use([].concat(u,[function(y,E,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var E=c;return c=[],E}}])),m.hash=u.length?u.reduce(function(y,E){return E.name||Wi(15),sr(y,E.name)},5381).toString():"",m}var Cm=Lr.createContext();Cm.Consumer;var Om=Lr.createContext(),Py=(Om.Consumer,new bm),su=Oy();function Ty(){return K.exports.useContext(Cm)||Py}function Ly(){return K.exports.useContext(Om)||su}var zy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=su);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Wi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=su),this.name+t.hash},e}(),jy=/([A-Z])/,My=/([A-Z])/g,Dy=/^ms-/,Ry=function(e){return"-"+e.toLowerCase()};function ff(e){return jy.test(e)?e.replace(My,Ry).replace(Dy,"-ms-"):e}var pf=function(e){return e==null||e===!1||e===""};function _r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=_r(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(pf(e))return"";if(Mc(e))return"."+e.styledComponentId;if(ji(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return _r(s,t,n,r)}var u;return e instanceof zy?n?(e.inject(n,r),e.getName(r)):e:au(e)?function d(c,f){var h,m,y=[];for(var E in c)c.hasOwnProperty(E)&&!pf(c[E])&&(Array.isArray(c[E])&&c[E].isCss||ji(c[E])?y.push(ff(E)+":",c[E],";"):au(c[E])?y.push.apply(y,d(c[E],E)):y.push(ff(E)+": "+(h=E,(m=c[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in J0?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var hf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function $y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ji(e)||au(e)?hf(_r(sf(ga,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:hf(_r(sf(e,n)))}var Ay=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},Ny=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Iy=/(^-|-$)/g;function Ql(e){return e.replace(Ny,"-").replace(Iy,"")}var Fy=function(e){return lu(_m(e)>>>0)};function vo(e){return typeof e=="string"&&!0}var uu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Hy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Uy(e,t,n){var r=e[n];uu(t)&&uu(r)?Pm(r,t):e[n]=t}function Pm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(uu(l))for(var a in l)Hy(a)&&Uy(e,l[a],a)}return e}var Tm=Lr.createContext();Tm.Consumer;var Gl={};function Lm(e,t,n){var r=Mc(e),i=!vo(e),o=t.attrs,l=o===void 0?ga:o,a=t.componentId,s=a===void 0?function(p,g){var w=typeof p!="string"?"sc":Ql(p);Gl[w]=(Gl[w]||0)+1;var O=w+"-"+Fy("5.3.5"+w+Gl[w]);return g?g+"-"+O:O}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return vo(p)?"styled."+p:"Styled("+uf(p)+")"}(e):u,c=t.displayName&&t.componentId?Ql(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,g,w){return e.shouldForwardProp(p,g,w)&&t.shouldForwardProp(p,g,w)}:e.shouldForwardProp);var m,y=new by(n,c,r?e.componentStyle:void 0),E=y.isStatic&&l.length===0,v=function(p,g){return function(w,O,P,k){var S=w.attrs,z=w.componentStyle,M=w.defaultProps,R=w.foldedComponentIds,A=w.shouldForwardProp,$=w.styledComponentId,N=w.target,I=function(F,L,J){F===void 0&&(F=yn);var W=qt({},L,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in ji(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}(Ay(O,K.exports.useContext(Tm),M)||yn,O,S),G=I[0],j=I[1],T=function(F,L,J,W){var ee=Ty(),ie=Ly(),se=L?F.generateAndInjectStyles(yn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(z,k,G),D=P,U=j.$as||O.$as||j.as||O.as||N,q=vo(U),H=j!==O?qt({},O,{},j):O,b={};for(var Q in H)Q[0]!=="$"&&Q!=="as"&&(Q==="forwardedAs"?b.as=H[Q]:(A?A(Q,rf,U):!q||rf(Q))&&(b[Q]=H[Q]));return O.style&&j.style!==O.style&&(b.style=qt({},O.style,{},j.style)),b.className=Array.prototype.concat(R,$,T!==$?T:null,O.className,j.className).filter(Boolean).join(" "),b.ref=D,K.exports.createElement(U,b)}(m,p,g,E)};return v.displayName=d,(m=Lr.forwardRef(v)).attrs=f,m.componentStyle=y,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ga,m.styledComponentId=c,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,w=function(P,k){if(P==null)return{};var S,z,M={},R=Object.keys(P);for(z=0;z<R.length;z++)S=R[z],k.indexOf(S)>=0||(M[S]=P[S]);return M}(t,["componentId"]),O=g&&g+"-"+(vo(p)?p:Ql(uf(p)));return Lm(p,qt({},w,{attrs:f,componentId:O}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Pm({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&Em(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var cu=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Ja.exports.isValidElementType(r))return Wi(1,String(r));var o=function(){return n(r,i,$y.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,qt({},i,{},l))},o.attrs=function(l){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Lm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){cu[e]=cu(e)});const C=cu,_={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Wy=C.div`
	margin: 0;   
`,By=C.a`
	
`,qy=C.img`
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
`;var ul={exports:{}},cl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=K.exports,Qy=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Xy=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ky={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yy.call(t,r)&&!Ky.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:o,ref:l,props:i,_owner:Xy.current}}cl.Fragment=Gy;cl.jsx=zm;cl.jsxs=zm;(function(e){e.exports=cl})(ul);const xa=ul.exports.Fragment,x=ul.exports.jsx,V=ul.exports.jsxs,ve=({image:e,altText:t,redirect:n})=>x(Wy,{children:x(By,{href:n,target:"_blank",rel:"noopener noreferrer",children:x(qy,{src:e,alt:t})})}),Br="/Site-Serra/assets/voitto.e51ea618.svg",qr="/Site-Serra/assets/iprj.03355e19.svg",Vr="/Site-Serra/assets/inovafri.c4b07fe0.svg",Qr="/Site-Serra/assets/wiseup.d9d06fa3.svg",Gr="/Site-Serra/assets/ligajr.52feeabf.svg",Jy=C.div`
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
`,Zy=C.div`
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
`;function ex(){return x(Jy,{children:V(Zy,{children:[x(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),x(ve,{image:qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),x(ve,{image:Vr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),x(ve,{image:Qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),x(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),x(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),x(ve,{image:qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),x(ve,{image:Vr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),x(ve,{image:Qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),x(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),x(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),x(ve,{image:qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),x(ve,{image:Vr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),x(ve,{image:Qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),x(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),x(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),x(ve,{image:qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),x(ve,{image:Vr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),x(ve,{image:Qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),x(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),x(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),x(ve,{image:qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),x(ve,{image:Vr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),x(ve,{image:Qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),x(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const tx=C.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,nx=C.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,Yl=C.div`
    margin-left: 1rem;
    width: 100%;
    @media screen and (min-width: ${_.mobile}){
        flex-direction: column;
    }
`,Xl=C.span`
    color: white;
    font-weight: 500;
`,go=C.p`
    color: rgb(180, 180, 180);
`,rx=C.div`
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

`,Kl=C.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${_.mobile}) {
        margin-top: 30%;
    }
    @media screen and (min-width: ${_.desktop}) {
        width: 3rem;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 5rem;
        /* background-color: red; */
    }
`,Jl=C.a`
    text-decoration: none;

`,ix=C.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${_.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,ox=C.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${_.desktop}) {
        font-size: 1.5em;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3em;
    }
`,ax=C.hr`
    width: 90%;
`,lx=C.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,sx=C.span`
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
`,ux=C.div`
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
    
`;const cx=C.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,dx="/Site-Serra/assets/facebook.e9ec1758.svg",fx="/Site-Serra/assets/instagram.a8d6cb3d.svg",px="/Site-Serra/assets/linkedin.3daaec60.svg",hx=()=>V(tx,{children:[V(cx,{children:[x(sx,{children:"Parceiros"}),x(ux,{children:x(ex,{})})]}),V(ox,{children:[V(nx,{children:[V(ix,{children:[V(Jl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",x(Kl,{src:dx,alt:"Facebook Serra.Jr"})]}),V(Jl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",x(Kl,{src:fx,alt:"Instagram Serra.Jr"})]}),V(Jl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",x(Kl,{src:px,alt:""})," "]})]}),V(rx,{children:[V(Yl,{children:[x(Xl,{children:"Institucional"}),x(go,{children:"Serra Jr Engenharia"})]}),V(Yl,{children:[x(Xl,{children:"Atendimento"}),x(go,{children:"Segunda a sexta"}),x(go,{children:"9h \xE0s 19h"})]}),V(Yl,{children:[x(Xl,{children:"Contato"}),x(go,{children:"serrajr@iprj.uerj.br "})]})]})]}),x(ax,{}),V(lx,{children:[x("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),x("span",{children:"Todos os direitos reservados"})]})]})]}),mx="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",vx="/Site-Serra/assets/arrow-header.98a9eade.svg";function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));var mf=function(e){return e},vf="beforeunload",gx="popstate";function yx(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var k=r.location,S=k.pathname,z=k.search,M=k.hash,R=i.state||{};return[R.idx,mf({pathname:S,search:z,hash:M,state:R.usr||null,key:R.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var k=jn.Pop,S=o(),z=S[0],M=S[1];if(h.length){if(z!=null){var R=d-z;R&&(l={action:k,location:M,retry:function(){O(R*-1)}},O(R))}}else p(k)}}r.addEventListener(gx,a);var s=jn.Pop,u=o(),d=u[0],c=u[1],f=yf(),h=yf();d==null&&(d=0,i.replaceState(wa({},i.state,{idx:d}),""));function m(k){return typeof k=="string"?k:du(k)}function y(k,S){return S===void 0&&(S=null),mf(wa({pathname:c.pathname,hash:"",search:""},typeof k=="string"?qn(k):k,{state:S,key:xx()}))}function E(k,S){return[{usr:k.state,key:k.key,idx:S},m(k)]}function v(k,S,z){return!h.length||(h.call({action:k,location:S,retry:z}),!1)}function p(k){s=k;var S=o();d=S[0],c=S[1],f.call({action:s,location:c})}function g(k,S){var z=jn.Push,M=y(k,S);function R(){g(k,S)}if(v(z,M,R)){var A=E(M,d+1),$=A[0],N=A[1];try{i.pushState($,"",N)}catch{r.location.assign(N)}p(z)}}function w(k,S){var z=jn.Replace,M=y(k,S);function R(){w(k,S)}if(v(z,M,R)){var A=E(M,d),$=A[0],N=A[1];i.replaceState($,"",N),p(z)}}function O(k){i.go(k)}var P={get action(){return s},get location(){return c},createHref:m,push:g,replace:w,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(S){return f.push(S)},block:function(S){var z=h.push(S);return h.length===1&&r.addEventListener(vf,gf),function(){z(),h.length||r.removeEventListener(vf,gf)}}};return P}function gf(e){e.preventDefault(),e.returnValue=""}function yf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function xx(){return Math.random().toString(36).substr(2,8)}function du(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function qn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Rc=K.exports.createContext(null),$c=K.exports.createContext(null),dl=K.exports.createContext({outlet:null,matches:[]});function It(e,t){if(!e)throw new Error(t)}function wx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qn(t):t,i=Dm(r.pathname||"/",n);if(i==null)return null;let o=jm(e);Sx(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=Lx(o[a],i);return l}function jm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||It(!1),l.relativePath=l.relativePath.slice(r.length));let a=xn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&It(!1),jm(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Px(a,i.index),routesMeta:s})}),t}function Sx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ex=/^:\w+$/,kx=3,bx=2,_x=1,Cx=10,Ox=-2,xf=e=>e==="*";function Px(e,t){let n=e.split("/"),r=n.length;return n.some(xf)&&(r+=Ox),t&&(r+=bx),n.filter(i=>!xf(i)).reduce((i,o)=>i+(Ex.test(o)?kx:o===""?_x:Cx),r)}function Tx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Lx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=zx({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:xn([i,d.pathname]),pathnameBase:Rm(xn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=xn([i,d.pathnameBase]))}return o}function zx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=Mx(a[c]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function jx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Mx(e,t){try{return decodeURIComponent(e)}catch{return e}}function Dx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:Rx(n,t):t,search:Ax(r),hash:Nx(i)}}function Rx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mm(e,t,n){let r=typeof e=="string"?qn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=Dx(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function $x(e){return e===""||e.pathname===""?"/":typeof e=="string"?qn(e).pathname:e.pathname}function Dm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),Rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ax=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ix(e){Bi()||It(!1);let{basename:t,navigator:n}=K.exports.useContext(Rc),{hash:r,pathname:i,search:o}=$m(e),l=i;if(t!=="/"){let a=$x(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):xn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function Bi(){return K.exports.useContext($c)!=null}function fl(){return Bi()||It(!1),K.exports.useContext($c).location}function qi(){Bi()||It(!1);let{basename:e,navigator:t}=K.exports.useContext(Rc),{matches:n}=K.exports.useContext(dl),{pathname:r}=fl(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Mm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=xn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function $m(e){let{matches:t}=K.exports.useContext(dl),{pathname:n}=fl(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>Mm(e,JSON.parse(r),n),[e,r,n])}function Fx(e,t){Bi()||It(!1);let{matches:n}=K.exports.useContext(dl),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=fl(),a;if(t){var s;let f=typeof t=="string"?qn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||It(!1),a=f}else a=l;let u=a.pathname||"/",d=o==="/"?u:u.slice(o.length)||"/",c=wx(e,{pathname:d});return Hx(c&&c.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:xn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:xn([o,f.pathnameBase])})),n)}function Hx(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(dl.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Yn(e){It(!1)}function Ux(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:l=!1}=e;Bi()&&It(!1);let a=Rm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:h="default"}=r,m=K.exports.useMemo(()=>{let y=Dm(u,a);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:h}},[a,u,d,c,f,h]);return m==null?null:K.exports.createElement(Rc.Provider,{value:s},K.exports.createElement($c.Provider,{children:n,value:{location:m,navigationType:i}}))}function Wx(e){let{children:t,location:n}=e;return Fx(fu(t),n)}function fu(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,fu(n.props.children));return}n.type!==Yn&&It(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=fu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function Bx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const qx=["onClick","reloadDocument","replace","state","target","to"];function Vx(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=yx({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement(Ux,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function Qx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ct=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=Bx(t,qx),d=Ix(s),c=Gx(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&c(h)}return K.exports.createElement("a",pu({},u,{href:d,onClick:f,ref:n,target:a}))});function Gx(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=qi(),l=fl(),a=$m(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!Qx(s)){s.preventDefault();let u=!!r||du(l)===du(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const Yx=C.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,Xx=C.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,Kx=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,Jx=C.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 1vw;
    }
`,Zx=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,e1=C.div`
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
`;const wf=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,yo=C.div`
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
`,t1=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${_.notebook}){
        display: none;
    }
`,n1=()=>{const[e,t]=K.exports.useState(!1);return x(t1,{children:V(Yx,{children:[x(yo,{children:x(Ct,{to:"/",children:"Home"})}),x(yo,{children:x(Ct,{to:"/quemSomos",children:"Sobre N\xF3s"})}),x(yo,{children:V(Kx,{onClick:()=>t(!e),children:[V(Zx,{children:[x(Xx,{children:"Servi\xE7os"}),x(Jx,{activeStyle:e,src:vx,alt:"Seta"})]}),V(e1,{activeStyle:e,children:[x(wf,{children:x(Ct,{to:"/computacao",children:"Computa\xE7\xE3o"})}),x(wf,{children:x(Ct,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),x(yo,{children:x(Ct,{to:"/contatos",children:"Contato"})})]})})},Yr=C.div`
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
`,r1=C.div`
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
`,i1=({status:e,toogle:t})=>V(r1,{activeStyle:e,children:[x(Yr,{children:x(Ct,{onClick:()=>t(!e),to:"/",children:"Home"})}),x(Yr,{children:x(Ct,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),x(Yr,{children:x(Ct,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),x(Yr,{children:x(Ct,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),x(Yr,{children:x(Ct,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Zl=C.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,o1=C.div`
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
`,a1=({status:e})=>(console.log(e),V(o1,{children:[x(Zl,{active:e,type:"first-line"}),x(Zl,{active:e,type:"mid-line"}),x(Zl,{active:e,type:"last-line"})]})),l1=C.img`
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
    
`,s1=C.div`
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
`,u1=C.div`
    margin-right: 7%;
`,c1=()=>{const[e,t]=K.exports.useState(!1);return V(s1,{children:[x(Ct,{to:"/",children:x(l1,{src:mx,alt:"Logo Serra Jr"})}),x(u1,{onClick:()=>{t(!e)},children:x(a1,{status:e})}),x(n1,{}),x(i1,{status:e,toogle:t})]})},d1=C.img`
    height: 15vh;

    @media screen and (max-width: ${_.notebook}) {
        height: 10vh;
    }
`,f1=C.p`
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
`,p1=C.div`
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
`,h1=({icon:e,text:t,alt:n})=>V(p1,{children:[x(d1,{src:e,alt:n}),x(f1,{children:t})]}),m1=C.div`
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
`,v1=C.p`
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
        font-size: 45px;
        height: 8rem;
    }
`;C.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: ${_.notebook}){
        width: 40%;
    }
`;const g1=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 30%;
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

    @media screen and (max-width: ${_.tablet}) {
        width: 50%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 40px;
        width: 20%;
    }
`,y1=C.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,x1=C.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,Sf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>{const l=qi();return V(x1,{children:[x(v1,{titleColor:r,children:e}),V(m1,{children:[x(y1,{children:i.map((a,s)=>x(h1,{icon:a,text:o[s],alt:o[s]},s))}),x(g1,{onClick:()=>{l(t),window.scrollTo(0,0)},buttonColor:r,children:n})]})]})},w1=C.p`
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
`,S1=C.hr`
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
`,E1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,k1=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Ac=({text:e,fontSize:t,titleWidth:n})=>x(E1,{children:V(k1,{children:[x(w1,{style:{fontSize:t},children:e}),x(S1,{gradientWidth:n})]})});var Am={},Nm={},pl={},Im={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Im);var b1="Expected a function",Ef=0/0,_1="[object Symbol]",C1=/^\s+|\s+$/g,O1=/^[-+]0x[0-9a-f]+$/i,P1=/^0b[01]+$/i,T1=/^0o[0-7]+$/i,L1=parseInt,z1=typeof Kr=="object"&&Kr&&Kr.Object===Object&&Kr,j1=typeof self=="object"&&self&&self.Object===Object&&self,M1=z1||j1||Function("return this")(),D1=Object.prototype,R1=D1.toString,$1=Math.max,A1=Math.min,es=function(){return M1.Date.now()};function N1(e,t,n){var r,i,o,l,a,s,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(b1);t=kf(t)||0,hu(n)&&(d=!!n.leading,c="maxWait"in n,o=c?$1(kf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(P){var k=r,S=i;return r=i=void 0,u=P,l=e.apply(S,k),l}function m(P){return u=P,a=setTimeout(v,t),d?h(P):l}function y(P){var k=P-s,S=P-u,z=t-k;return c?A1(z,o-S):z}function E(P){var k=P-s,S=P-u;return s===void 0||k>=t||k<0||c&&S>=o}function v(){var P=es();if(E(P))return p(P);a=setTimeout(v,y(P))}function p(P){return a=void 0,f&&r?h(P):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function w(){return a===void 0?l:p(es())}function O(){var P=es(),k=E(P);if(r=arguments,i=this,s=P,k){if(a===void 0)return m(s);if(c)return a=setTimeout(v,t),h(s)}return a===void 0&&(a=setTimeout(v,t)),l}return O.cancel=g,O.flush=w,O}function hu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function I1(e){return!!e&&typeof e=="object"}function F1(e){return typeof e=="symbol"||I1(e)&&R1.call(e)==_1}function kf(e){if(typeof e=="number")return e;if(F1(e))return Ef;if(hu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=hu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(C1,"");var n=P1.test(e);return n||T1.test(e)?L1(e.slice(2),n?2:8):O1.test(e)?Ef:+e}var H1=N1,Vi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Vi);var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.checkSpecKeys=Y.checkNavigable=Y.changeSlide=Y.canUseDOM=Y.canGoNext=void 0;Y.clamp=Fm;Y.swipeStart=Y.swipeMove=Y.swipeEnd=Y.slidesOnRight=Y.slidesOnLeft=Y.slideHandler=Y.siblingDirection=Y.safePreventDefault=Y.lazyStartIndex=Y.lazySlidesOnRight=Y.lazySlidesOnLeft=Y.lazyEndIndex=Y.keyHandler=Y.initializedState=Y.getWidth=Y.getTrackLeft=Y.getTrackCSS=Y.getTrackAnimateCSS=Y.getTotalSlides=Y.getSwipeDirection=Y.getSlideCount=Y.getRequiredLazySlides=Y.getPreClones=Y.getPostClones=Y.getOnDemandLazySlides=Y.getNavigableIndexes=Y.getHeight=Y.extractObject=void 0;var U1=W1(K.exports);function W1(e){return e&&e.__esModule?e:{default:e}}function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){B1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fm(e,t,n){return Math.max(t,Math.min(e,n))}var Rn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};Y.safePreventDefault=Rn;var Nc=function(t){for(var n=[],r=Ic(t),i=Fc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};Y.getOnDemandLazySlides=Nc;var q1=function(t){for(var n=[],r=Ic(t),i=Fc(t),o=r;o<i;o++)n.push(o);return n};Y.getRequiredLazySlides=q1;var Ic=function(t){return t.currentSlide-Hm(t)};Y.lazyStartIndex=Ic;var Fc=function(t){return t.currentSlide+Um(t)};Y.lazyEndIndex=Fc;var Hm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};Y.lazySlidesOnLeft=Hm;var Um=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};Y.lazySlidesOnRight=Um;var Sa=function(t){return t&&t.offsetWidth||0};Y.getWidth=Sa;var Hc=function(t){return t&&t.offsetHeight||0};Y.getHeight=Hc;var Uc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};Y.getSwipeDirection=Uc;var Wc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};Y.canGoNext=Wc;var V1=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};Y.extractObject=V1;var Q1=function(t){var n=U1.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Sa(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(Sa(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Hc(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=Nc(xe(xe({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(h);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};Y.initializedState=Q1;var G1=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,E,v,p,g={},w={},O=o?l:Fm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},w={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,o?a%c!==0&&(E=a-a%c):E=0):!Wc(t)&&y>u?y=E=u:d&&y>=a?(y=o?a:a-1,E=o?0:a-1):y>=a&&(E=y-a,o?a%c!==0&&(E=0):E=a-f),!o&&y+f>=a&&(E=a-f),v=Di(xe(xe({},t),{},{slideIndex:y})),p=Di(xe(xe({},t),{},{slideIndex:E})),o||(v===p&&(y=E),v=p),s&&(m=m.concat(Nc(xe(xe({},t),{},{currentSlide:y})))),h?(g={animating:!0,currentSlide:E,trackStyle:Bc(xe(xe({},t),{},{left:v})),lazyLoadedList:m,targetSlide:O},w={animating:!1,currentSlide:E,trackStyle:Mi(xe(xe({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):g={currentSlide:E,trackStyle:Mi(xe(xe({},t),{},{left:p})),lazyLoadedList:m,targetSlide:O};return{state:g,nextState:w}};Y.slideHandler=G1;var Y1=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,m=t.infinite;if(l=d%s!==0,r=l?0:(d-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,h&&!m&&(i=c-o,a=i===-1?d-1:i),m||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=c+o,h&&!m&&(a=(c+s)%d+r),m||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=Vm(xe(xe({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};Y.changeSlide=Y1;var X1=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};Y.keyHandler=X1;var K1=function(t,n,r){return t.target.tagName==="IMG"&&Rn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};Y.swipeStart=K1;var J1=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,h=n.swiped,m=n.swiping,y=n.slideCount,E=n.slidesToScroll,v=n.infinite,p=n.touchObject,g=n.swipeEvent,w=n.listHeight,O=n.listWidth;if(!r){if(i)return Rn(t);o&&l&&a&&Rn(t);var P,k={},S=Di(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var z=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&z>10)return{scrolling:!0};a&&(p.swipeLength=z);var M=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(M=p.curY>p.startY?1:-1);var R=Math.ceil(y/E),A=Uc(n.touchObject,a),$=p.swipeLength;return v||(u===0&&(A==="right"||A==="down")||u+1>=R&&(A==="left"||A==="up")||!Wc(n)&&(A==="left"||A==="up"))&&($=p.swipeLength*d,c===!1&&f&&(f(A),k.edgeDragged=!0)),!h&&g&&(g(A),k.swiped=!0),o?P=S+$*(w/O)*M:s?P=S-$*M:P=S+$*M,a&&(P=S+$*M),k=xe(xe({},k),{},{touchObject:p,swipeLeft:P,trackStyle:Mi(xe(xe({},n),{},{left:P}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(k.swiping=!0,Rn(t)),k}};Y.swipeMove=J1;var Z1=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,h=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&Rn(t),{};var E=s?u/a:l/a,v=Uc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>E){Rn(t),f&&f(v);var g,w,O=y?m:h;switch(v){case"left":case"up":w=O+vu(n),g=d?mu(n,w):w,p.currentDirection=0;break;case"right":case"down":w=O-vu(n),g=d?mu(n,w):w,p.currentDirection=1;break;default:g=O}p.triggerSlideHandler=g}else{var P=Di(n);p.trackStyle=Bc(xe(xe({},n),{},{left:P}))}return p};Y.swipeEnd=Z1;var Wm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};Y.getNavigableIndexes=Wm;var mu=function(t,n){var r=Wm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};Y.checkNavigable=mu;var vu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Hc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+Sa(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};Y.getSlideCount=vu;var hl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};Y.checkSpecKeys=hl;var Mi=function(t){hl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=qm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=xe(xe({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};Y.getTrackCSS=Mi;var Bc=function(t){hl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Mi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};Y.getTrackAnimateCSS=Bc;var Di=function(t){if(t.unslick)return 0;hl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,h=t.fade,m=t.vertical,y=0,E,v,p=0;if(h||t.slideCount===1)return 0;var g=0;if(i?(g=-fi(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*f,m?E=n*f*-1+p:E=n*u*-1+y,c===!0){var w,O=r&&r.node;if(w=n+fi(t),v=O&&O.childNodes[w],E=v?v.offsetLeft*-1:0,o===!0){w=i?n+fi(t):n,v=O&&O.children[w],E=0;for(var P=0;P<w;P++)E-=O&&O.children[P]&&O.children[P].offsetWidth;E-=parseInt(t.centerPadding),E+=v&&(d-v.offsetWidth)/2}}return E};Y.getTrackLeft=Di;var fi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};Y.getPreClones=fi;var Bm=function(t){return t.unslick||!t.infinite?0:t.slideCount};Y.getPostClones=Bm;var qm=function(t){return t.slideCount===1?1:fi(t)+t.slideCount+Bm(t)};Y.getTotalSlides=qm;var Vm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Qm(t)?"left":"right":t.targetSlide<t.currentSlide-Gm(t)?"right":"left"};Y.siblingDirection=Vm;var Qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};Y.slidesOnRight=Qm;var Gm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};Y.slidesOnLeft=Gm;var ew=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};Y.canUseDOM=ew;var ml={};function gu(e){return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gu(e)}Object.defineProperty(ml,"__esModule",{value:!0});ml.Track=void 0;var rn=Ym(K.exports),ts=Ym(Vi.exports),ns=Y;function Ym(e){return e&&e.__esModule?e:{default:e}}function yu(){return yu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yu.apply(this,arguments)}function tw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nw(e,t,n){return t&&_f(e.prototype,t),n&&_f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function iw(e){var t=aw();return function(){var r=Ea(e),i;if(t){var o=Ea(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ow(this,i)}}function ow(e,t){if(t&&(gu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wu(e)}function wu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ea(e){return Ea=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ea(e)}function Cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cf(Object(n),!0).forEach(function(r){Su(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Su(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rs=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},lw=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},is=function(t,n){return t.key||n},sw=function(t){var n,r=[],i=[],o=[],l=rn.default.Children.count(t.children),a=(0,ns.lazyStartIndex)(t),s=(0,ns.lazyEndIndex)(t);return rn.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=rn.default.createElement("div",null);var h=lw(Ze(Ze({},t),{},{index:d})),m=c.props.className||"",y=rs(Ze(Ze({},t),{},{index:d}));if(r.push(rn.default.cloneElement(c,{key:"original"+is(c,d),"data-index":d,className:(0,ts.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ze(Ze({outline:"none"},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var E=l-d;E<=(0,ns.getPreClones)(t)&&l!==t.slidesToShow&&(n=-E,n>=a&&(c=u),y=rs(Ze(Ze({},t),{},{index:n})),i.push(rn.default.cloneElement(c,{key:"precloned"+is(c,n),"data-index":n,tabIndex:"-1",className:(0,ts.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+d,n<s&&(c=u),y=rs(Ze(Ze({},t),{},{index:n})),o.push(rn.default.cloneElement(c,{key:"postcloned"+is(c,n),"data-index":n,tabIndex:"-1",className:(0,ts.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},uw=function(e){rw(n,e);var t=iw(n);function n(){var r;tw(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Su(wu(r),"node",null),Su(wu(r),"handleRef",function(a){r.node=a}),r}return nw(n,[{key:"render",value:function(){var i=sw(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return rn.default.createElement("div",yu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(rn.default.PureComponent);ml.Track=uw;var vl={};function Eu(e){return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eu(e)}Object.defineProperty(vl,"__esModule",{value:!0});vl.Dots=void 0;var xo=Xm(K.exports),cw=Xm(Vi.exports),Of=Y;function Xm(e){return e&&e.__esModule?e:{default:e}}function Pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pf(Object(n),!0).forEach(function(r){fw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hw(e,t,n){return t&&Tf(e.prototype,t),n&&Tf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ku(e,t)}function ku(e,t){return ku=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ku(e,t)}function vw(e){var t=xw();return function(){var r=ka(e),i;if(t){var o=ka(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return gw(this,i)}}function gw(e,t){if(t&&(Eu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yw(e)}function yw(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ka(e)}var ww=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Sw=function(e){mw(n,e);var t=vw(n);function n(){return pw(this,n),t.apply(this,arguments)}return hw(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,h=ww({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],E=0;E<h;E++){var v=(E+1)*u-1,p=s?v:(0,Of.clamp)(v,0,c-1),g=p-(u-1),w=s?g:(0,Of.clamp)(g,0,c-1),O=(0,cw.default)({"slick-active":s?f>=w&&f<=p:f===w}),P={message:"dots",index:E,slidesToScroll:u,currentSlide:f},k=this.clickHandler.bind(this,P);y=y.concat(xo.default.createElement("li",{key:E,className:O},xo.default.cloneElement(this.props.customPaging(E),{onClick:k})))}return xo.default.cloneElement(this.props.appendDots(y),dw({className:this.props.dotsClass},m))}}]),n}(xo.default.PureComponent);vl.Dots=Sw;var Cr={};function bu(e){return bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bu(e)}Object.defineProperty(Cr,"__esModule",{value:!0});Cr.PrevArrow=Cr.NextArrow=void 0;var vr=Jm(K.exports),Km=Jm(Vi.exports),Ew=Y;function Jm(e){return e&&e.__esModule?e:{default:e}}function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function Lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lf(Object(n),!0).forEach(function(r){kw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ev(e,t,n){return t&&zf(e.prototype,t),n&&zf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_u(e,t)}function _u(e,t){return _u=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},_u(e,t)}function nv(e){var t=Cw();return function(){var r=Ca(e),i;if(t){var o=Ca(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return bw(this,i)}}function bw(e,t){if(t&&(bu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _w(e)}function _w(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ca(e){return Ca=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ca(e)}var Ow=function(e){tv(n,e);var t=nv(n);function n(){return Zm(this,n),t.apply(this,arguments)}return ev(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Km.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=vr.default.cloneElement(this.props.prevArrow,_a(_a({},l),a)):s=vr.default.createElement("button",ba({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(vr.default.PureComponent);Cr.PrevArrow=Ow;var Pw=function(e){tv(n,e);var t=nv(n);function n(){return Zm(this,n),t.apply(this,arguments)}return ev(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Ew.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Km.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=vr.default.cloneElement(this.props.nextArrow,_a(_a({},l),a)):s=vr.default.createElement("button",ba({key:"1",type:"button"},l)," ","Next"),s}}]),n}(vr.default.PureComponent);Cr.NextArrow=Pw;var rv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Cu=typeof window<"u"&&typeof document<"u"&&window.document===document,Oa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Tw=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Oa):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Lw=2;function zw(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Tw(o)}function a(){var s=Date.now();if(n){if(s-i<Lw)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var jw=20,Mw=["top","right","bottom","left","width","height","size","weight"],Dw=typeof MutationObserver<"u",Rw=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=zw(this.refresh.bind(this),jw)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Cu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Dw?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Cu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Mw.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),iv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Or=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Oa},ov=gl(0,0,0,0);function Pa(e){return parseFloat(e)||0}function jf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Pa(o)},0)}function $w(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Pa(l)}return n}function Aw(e){var t=e.getBBox();return gl(0,0,t.width,t.height)}function Nw(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ov;var r=Or(e).getComputedStyle(e),i=$w(r),o=i.left+i.right,l=i.top+i.bottom,a=Pa(r.width),s=Pa(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=jf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=jf(r,"top","bottom")+l)),!Fw(e)){var u=Math.round(a+o)-t,d=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(s-=d)}return gl(i.left,i.top,a,s)}var Iw=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Or(e).SVGGraphicsElement}:function(e){return e instanceof Or(e).SVGElement&&typeof e.getBBox=="function"}}();function Fw(e){return e===Or(e).document.documentElement}function Hw(e){return Cu?Iw(e)?Aw(e):Nw(e):ov}function Uw(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return iv(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function gl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ww=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=gl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Hw(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Bw=function(){function e(t,n){var r=Uw(n);iv(this,{target:t,contentRect:r})}return e}(),qw=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new rv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ww(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Bw(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),av=typeof WeakMap<"u"?new WeakMap:new rv,lv=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Rw.getInstance(),r=new qw(t,n,this);av.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){lv.prototype[e]=function(){var t;return(t=av.get(this))[e].apply(t,arguments)}});var Vw=function(){return typeof Oa.ResizeObserver<"u"?Oa.ResizeObserver:lv}();const Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),Gw=cp(Qw);Object.defineProperty(pl,"__esModule",{value:!0});pl.InnerSlider=void 0;var Ge=Qi(K.exports),Yw=Qi(Im),Xw=Qi(H1),Kw=Qi(Vi.exports),Se=Y,Jw=ml,Zw=vl,Mf=Cr,eS=Qi(Gw);function Qi(e){return e&&e.__esModule?e:{default:e}}function Ta(e){return Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ta(e)}function La(){return La=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}function tS(e,t){if(e==null)return{};var n=nS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function nS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Df(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Df(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Df(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iS(e,t,n){return t&&Rf(e.prototype,t),n&&Rf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ou(e,t)}function Ou(e,t){return Ou=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ou(e,t)}function aS(e){var t=sS();return function(){var r=za(e),i;if(t){var o=za(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lS(this,i)}}function lS(e,t){if(t&&(Ta(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function za(e){return za=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},za(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uS=function(e){oS(n,e);var t=aS(n);function n(r){var i;rS(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new eS.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Ge.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ge.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Xw.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var d=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:d});var c=(0,Se.getTrackCSS)(l);(a||Ge.default.Children.count(i.props.children)!==Ge.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(k){s.push(k.props.style.width),l+=k.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var f=0;f<d;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var E=Ge.default.Children.count(i.props.children),v=Z(Z(Z({},i.props),i.state),{},{slideCount:E}),p=(0,Se.getPreClones)(v)+(0,Se.getPostClones)(v)+E,g=100/i.props.slidesToShow*p,w=100/p,O=-w*((0,Se.getPreClones)(v)+i.state.currentSlide)*g/100;i.props.centerMode&&(O+=(100-w*g/100)/2);var P={width:g+"%",left:O+"%"};return{slideWidth:w+"%",trackStyle:P}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var d=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,d=s.beforeChange,c=s.onLazyLoad,f=s.speed,h=s.afterChange,m=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,v=y.nextState;if(!!E){d&&d(m,E.currentSlide);var p=E.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(m),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),v&&(i.animationEndCallback=setTimeout(function(){var g=v.animating,w=tS(v,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),h&&h(E.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,Kw.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=Z(Z({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ge.default.createElement(Zw.Dots,c)}var h,m,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Ge.default.createElement(Mf.PrevArrow,y),m=Ge.default.createElement(Mf.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},E),v),g=i.props.touchMove,w={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},O={className:l}),Ge.default.createElement("div",O,i.props.unslick?"":h,Ge.default.createElement("div",La({ref:i.listRefHandler},w),Ge.default.createElement(Jw.Track,La({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},Yw.default),{},{currentSlide:i.props.initialSlide,slideCount:Ge.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return iS(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Ta(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ge.default.Children.count(this.props.children)!==Ge.default.Children.count(i.children)}}]),n}(Ge.default.Component);pl.InnerSlider=uS;var cS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},dS=cS,fS=dS,pS=function(e){var t=/[height|width]$/;return t.test(e)},$f=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=fS(r),pS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},hS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=$f(n),r<e.length-1&&(t+=", ")}),t):$f(e)},mS=hS,sv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(sv);var os,Af;function vS(){if(Af)return os;Af=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},os=e,os}var as,Nf;function uv(){if(Nf)return as;Nf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return as={isFunction:n,isArray:t,each:e},as}var ls,If;function gS(){if(If)return ls;If=1;var e=vS(),t=uv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},ls=n,ls}var ss,Ff;function yS(){if(Ff)return ss;Ff=1;var e=gS(),t=uv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,d=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},ss=o,ss}var us,Hf;function xS(){if(Hf)return us;Hf=1;var e=yS();return us=new e,us}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=pl,i=a(mS),o=a(sv),l=Y;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var z=1;z<arguments.length;z++){var M=arguments[z];for(var R in M)Object.prototype.hasOwnProperty.call(M,R)&&(S[R]=M[R])}return S},s.apply(this,arguments)}function u(S,z){var M=Object.keys(S);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(S);z&&(R=R.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),M.push.apply(M,R)}return M}function d(S){for(var z=1;z<arguments.length;z++){var M=arguments[z]!=null?arguments[z]:{};z%2?u(Object(M),!0).forEach(function(R){O(S,R,M[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(M)):u(Object(M)).forEach(function(R){Object.defineProperty(S,R,Object.getOwnPropertyDescriptor(M,R))})}return S}function c(S,z){if(!(S instanceof z))throw new TypeError("Cannot call a class as a function")}function f(S,z){for(var M=0;M<z.length;M++){var R=z[M];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(S,R.key,R)}}function h(S,z,M){return z&&f(S.prototype,z),M&&f(S,M),Object.defineProperty(S,"prototype",{writable:!1}),S}function m(S,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(z&&z.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),z&&y(S,z)}function y(S,z){return y=Object.setPrototypeOf||function(R,A){return R.__proto__=A,R},y(S,z)}function E(S){var z=g();return function(){var R=w(S),A;if(z){var $=w(this).constructor;A=Reflect.construct(R,arguments,$)}else A=R.apply(this,arguments);return v(this,A)}}function v(S,z){if(z&&(t(z)==="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function w(S){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},w(S)}function O(S,z,M){return z in S?Object.defineProperty(S,z,{value:M,enumerable:!0,configurable:!0,writable:!0}):S[z]=M,S}var P=(0,l.canUseDOM)()&&xS(),k=function(S){m(M,S);var z=E(M);function M(R){var A;return c(this,M),A=z.call(this,R),O(p(A),"innerSliderRefHandler",function($){return A.innerSlider=$}),O(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(p(A),"slickGoTo",function($){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo($,N)}),O(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(M,[{key:"media",value:function(A,$){P.register(A,$),this._responsiveMediaHandlers.push({query:A,handler:$})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var $=this.props.responsive.map(function(I){return I.breakpoint});$.sort(function(I,G){return I-G}),$.forEach(function(I,G){var j;G===0?j=(0,i.default)({minWidth:0,maxWidth:I}):j=(0,i.default)({minWidth:$[G-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media(j,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:$.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){P.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,$,N;this.state.breakpoint?(N=this.props.responsive.filter(function(Q){return Q.breakpoint===A.state.breakpoint}),$=N[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),N[0].settings)):$=d(d({},o.default),this.props),$.centerMode&&($.slidesToScroll>1,$.slidesToScroll=1),$.fade&&($.slidesToShow>1,$.slidesToScroll>1,$.slidesToShow=1,$.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(Q){return typeof Q=="string"?!!Q.trim():!!Q}),$.variableWidth&&($.rows>1||$.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),$.variableWidth=!1);for(var G=[],j=null,T=0;T<I.length;T+=$.rows*$.slidesPerRow){for(var D=[],U=T;U<T+$.rows*$.slidesPerRow;U+=$.slidesPerRow){for(var q=[],H=U;H<U+$.slidesPerRow&&($.variableWidth&&I[H].props.style&&(j=I[H].props.style.width),!(H>=I.length));H+=1)q.push(n.default.cloneElement(I[H],{key:100*T+10*U+H,tabIndex:-1,style:{width:"".concat(100/$.slidesPerRow,"%"),display:"inline-block"}}));D.push(n.default.createElement("div",{key:10*T+U},q))}$.variableWidth?G.push(n.default.createElement("div",{key:T,style:{width:j}},D)):G.push(n.default.createElement("div",{key:T},D))}if($==="unslick"){var b="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:b},I)}else G.length<=$.slidesToShow&&($.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},$),G)}}]),M}(n.default.Component);e.default=k})(Nm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Nm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Am);const qc=$a(Am);const wS=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,SS=C.div`
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
`,ES=C.img`
    height: 40vh;
    border-radius: 20px;
`,kS=C.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${_.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,bS=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return x(kS,{containerWidth:e.width,children:x(qc,{...t,children:e.carouselData.map((n,r)=>x(wS,{children:x(SS,{children:x(ES,{src:n,alt:e.alt})})},r))})})},_S="/Site-Serra/assets/membros-1.26cb4867.svg",CS="/Site-Serra/assets/membros-2.457898e5.svg",OS="/Site-Serra/assets/missao-icon.4dc65479.svg",PS="/Site-Serra/assets/visao-icon.75e2e4de.svg",TS="/Site-Serra/assets/valores-icon.b6d7390b.svg",Te={members:[_S,CS],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:OS,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:PS,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:TS,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia;","Gest\xE3o segura;","Impactar nossa era;","Evolu\xE7\xE3o constante;","Responsabilidade com os clientes."],content:void 0}]},LS=C.div`
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
`,Uf=C.div`
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
`,Wf=C.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: green; */

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,zS=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,jS=C.button`
    background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
    border: none;
    width: 30%;
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
        width: 20%;
        font-size: 30px;
    }
    @media screen and (min-width: ${_.largeDesktop}) {
        width: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        width: 20%;
        font-size: 60px;
    }
`,MS=C.div`
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

    
`,DS=C.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 6%;

    @media screen and (max-width: ${_.tablet}) {
        font-size: 20px;
        padding-left: 1%;
    }

    @media screen and (min-width: ${_.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
    }
`,RS=C.span`
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
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 50px;
    }
`,Bf=C.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${_.tablet}) {
        width: 90%;
    }
`,$S=C.img`
    width: 25%;
    height: 25%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: ${_.tablet}) {
        width:70%;
        height: 70%;
    }
`,cv=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>{const u=qi();return V(MS,{carouselStyle:s,children:[x(LS,{titleColor:r,children:e}),s?x(Uf,{children:V(Wf,{children:[x(Bf,{children:x(DS,{children:Te.membersText})}),x(bS,{width:"50%",carouselData:Te.members,alt:"Imagens dos membros da Serra Jr. Engenharia"})]})}):V(Uf,{children:[V(Wf,{children:[x(Bf,{children:x(RS,{children:o})}),x($S,{src:l,alt:a})]}),i&&t?x(zS,{children:x(jS,{onClick:()=>{u(t),window.scrollTo(0,0)},buttonColor:r,children:n})}):null]})]})};var dv={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Kr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>j});var d=u(4087),c=u.n(d);const f=function(T){return new RegExp(/<[a-z][\s\S]*>/i).test(T)},h=function(T){var D=document.createElement("div");return D.innerHTML=T,D.childNodes},m=function(T,D){return Math.floor(Math.random()*(D-T+1))+T};var y="TYPE_CHARACTER",E="REMOVE_CHARACTER",v="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",w="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",k="CHANGE_DELAY",S="CHANGE_CURSOR",z="PASTE_STRING",M="HTML_TAG";function R(T,D){var U=Object.keys(T);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(T);D&&(q=q.filter(function(H){return Object.getOwnPropertyDescriptor(T,H).enumerable})),U.push.apply(U,q)}return U}function A(T){for(var D=1;D<arguments.length;D++){var U=arguments[D]!=null?arguments[D]:{};D%2?R(Object(U),!0).forEach(function(q){G(T,q,U[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(U)):R(Object(U)).forEach(function(q){Object.defineProperty(T,q,Object.getOwnPropertyDescriptor(U,q))})}return T}function $(T){return function(D){if(Array.isArray(D))return N(D)}(T)||function(D){if(typeof Symbol<"u"&&D[Symbol.iterator]!=null||D["@@iterator"]!=null)return Array.from(D)}(T)||function(D,U){if(D){if(typeof D=="string")return N(D,U);var q=Object.prototype.toString.call(D).slice(8,-1);return q==="Object"&&D.constructor&&(q=D.constructor.name),q==="Map"||q==="Set"?Array.from(D):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?N(D,U):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(T,D){(D==null||D>T.length)&&(D=T.length);for(var U=0,q=new Array(D);U<D;U++)q[U]=T[U];return q}function I(T,D){for(var U=0;U<D.length;U++){var q=D[U];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(T,q.key,q)}}function G(T,D,U){return D in T?Object.defineProperty(T,D,{value:U,enumerable:!0,configurable:!0,writable:!0}):T[D]=U,T}const j=function(){function T(q,H){var b=this;if(function(F,L){if(!(F instanceof L))throw new TypeError("Cannot call a class as a function")}(this,T),G(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),G(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),G(this,"setupWrapperElement",function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))}),G(this,"start",function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b}),G(this,"pause",function(){return b.state.eventLoopPaused=!0,b}),G(this,"stop",function(){return b.state.eventLoop&&((0,d.cancel)(b.state.eventLoop),b.state.eventLoop=null),b}),G(this,"pauseFor",function(F){return b.addEventToQueue(g,{ms:F}),b}),G(this,"typeOutAllStrings",function(){return typeof b.options.strings=="string"?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach(function(F){b.typeString(F).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)}),b)}),G(this,"typeString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return b.typeOutHTMLString(F,L);if(F){var J=b.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");b.typeCharacters(ee,L)}return b}),G(this,"pasteString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?b.typeOutHTMLString(F,L,!0):(F&&b.addEventToQueue(z,{character:F,node:L}),b)}),G(this,"typeOutHTMLString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",b.addEventToQueue(O,{node:ie,parentNode:L}),J?b.pasteString(se,ie):b.typeString(se,ie)):ie.textContent&&(J?b.pasteString(ie.textContent,L):b.typeString(ie.textContent,L))}return b}),G(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return b.addEventToQueue(v,{speed:F}),b}),G(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return b.addEventToQueue(P,{speed:F}),b}),G(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return b.addEventToQueue(k,{delay:F}),b}),G(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return b.addEventToQueue(S,{cursor:F}),b}),G(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var L=0;L<F;L++)b.addEventToQueue(E);return b}),G(this,"callFunction",function(F,L){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return b.addEventToQueue(w,{cb:F,thisArg:L}),b}),G(this,"typeCharacters",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){b.addEventToQueue(y,{character:J,node:L})}),b}),G(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){b.addEventToQueue(E)}),b}),G(this,"addEventToQueue",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return b.addEventToStateProperty(F,L,J,"eventQueue")}),G(this,"addReverseCalledEvent",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=b.options.loop;return W?b.addEventToStateProperty(F,L,J,"reverseCalledEvents"):b}),G(this,"addEventToStateProperty",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:L||{}};return b.state[W]=J?[ee].concat($(b.state[W])):[].concat($(b.state[W]),[ee]),b}),G(this,"runEventLoop",function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var F=Date.now(),L=F-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=$(b.state.calledEvents),b.state.calledEvents=[],b.options=A({},b.state.initialOptions)}if(b.state.eventLoop=c()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(F<b.state.pauseUntil)return;b.state.pauseUntil=null}var J,W=$(b.state.eventQueue),ee=W.shift();if(!(L<=(J=ee.eventName===p||ee.eventName===E?b.options.deleteSpeed==="natural"?m(40,80):b.options.deleteSpeed:b.options.delay==="natural"?m(120,160):b.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(b.logInDevMode({currentEvent:ee,state:b.state,delay:J}),ie){case z:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;b.options.onCreateTextNode&&typeof b.options.onCreateTextNode=="function"&&(oe=b.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):b.state.elements.wrapper.appendChild(oe)),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case E:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var De=ee.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(De);break;case w:var ce=ee.eventArgs,ze=ce.cb,_n=ce.thisArg;ze.call(_n,{elements:b.state.elements});break;case O:var Pe=ee.eventArgs,Jt=Pe.node,Ft=Pe.parentNode;Ft?Ft.appendChild(Jt):b.state.elements.wrapper.appendChild(Jt),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:M,node:Jt,parentNode:Ft||b.state.elements.wrapper}]);break;case v:var ot=b.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:P,eventArgs:{speed:te,temp:!0}});for(var Vn=0,Rr=ot.length;Vn<Rr;Vn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:P,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var Mt=ee.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var wl=b.state.visibleNodes.pop(),Ov=wl.type,Xi=wl.node,Pv=wl.character;b.options.onRemoveNode&&typeof b.options.onRemoveNode=="function"&&b.options.onRemoveNode({node:Xi,character:Pv}),Xi&&Xi.parentNode.removeChild(Xi),Ov===M&&Mt&&W.unshift({eventName:p,eventArgs:{}})}break;case P:b.options.deleteSpeed=ee.eventArgs.speed;break;case k:b.options.delay=ee.eventArgs.delay;break;case S:b.options.cursor=ee.eventArgs.cursor,b.state.elements.cursor.innerHTML=ee.eventArgs.cursor}b.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(b.state.calledEvents=[].concat($(b.state.calledEvents),[ee]))),b.state.eventQueue=W,b.state.lastFrameTime=F}}}),q)if(typeof q=="string"){var Q=document.querySelector(q);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=q;H&&(this.options=A(A({},this.options),H)),this.state.initialOptions=A({},this.options),this.init()}var D,U;return D=T,(U=[{key:"init",value:function(){var q,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(q=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(q)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(q){this.options.devMode&&console.log(q)}}])&&I(D.prototype,U),Object.defineProperty(D,"prototype",{writable:!1}),T}()},8552:(a,s,u)=>{var d=u(852)(u(5639),"DataView");a.exports=d},1989:(a,s,u)=>{var d=u(1789),c=u(401),f=u(7667),h=u(1327),m=u(1866);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,s,u)=>{var d=u(7040),c=u(4125),f=u(2117),h=u(7518),m=u(4705);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,s,u)=>{var d=u(852)(u(5639),"Map");a.exports=d},3369:(a,s,u)=>{var d=u(4785),c=u(1285),f=u(6e3),h=u(9916),m=u(5265);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,s,u)=>{var d=u(852)(u(5639),"Promise");a.exports=d},8525:(a,s,u)=>{var d=u(852)(u(5639),"Set");a.exports=d},8668:(a,s,u)=>{var d=u(3369),c=u(619),f=u(2385);function h(m){var y=-1,E=m==null?0:m.length;for(this.__data__=new d;++y<E;)this.add(m[y])}h.prototype.add=h.prototype.push=c,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var d=u(8407),c=u(7465),f=u(3779),h=u(7599),m=u(4758),y=u(4309);function E(v){var p=this.__data__=new d(v);this.size=p.size}E.prototype.clear=c,E.prototype.delete=f,E.prototype.get=h,E.prototype.has=m,E.prototype.set=y,a.exports=E},2705:(a,s,u)=>{var d=u(5639).Symbol;a.exports=d},1149:(a,s,u)=>{var d=u(5639).Uint8Array;a.exports=d},577:(a,s,u)=>{var d=u(852)(u(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length,f=0,h=[];++d<c;){var m=s[d];u(m,d,s)&&(h[f++]=m)}return h}},4636:(a,s,u)=>{var d=u(2545),c=u(5694),f=u(1469),h=u(4144),m=u(5776),y=u(6719),E=Object.prototype.hasOwnProperty;a.exports=function(v,p){var g=f(v),w=!g&&c(v),O=!g&&!w&&h(v),P=!g&&!w&&!O&&y(v),k=g||w||O||P,S=k?d(v.length,String):[],z=S.length;for(var M in v)!p&&!E.call(v,M)||k&&(M=="length"||O&&(M=="offset"||M=="parent")||P&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||m(M,z))||S.push(M);return S}},2488:a=>{a.exports=function(s,u){for(var d=-1,c=u.length,f=s.length;++d<c;)s[f+d]=u[d];return s}},2908:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length;++d<c;)if(u(s[d],d,s))return!0;return!1}},8470:(a,s,u)=>{var d=u(7813);a.exports=function(c,f){for(var h=c.length;h--;)if(d(c[h][0],f))return h;return-1}},8866:(a,s,u)=>{var d=u(2488),c=u(1469);a.exports=function(f,h,m){var y=h(f);return c(f)?y:d(y,m(f))}},4239:(a,s,u)=>{var d=u(2705),c=u(9607),f=u(2333),h=d?d.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?c(m):f(m)}},9454:(a,s,u)=>{var d=u(4239),c=u(7005);a.exports=function(f){return c(f)&&d(f)=="[object Arguments]"}},939:(a,s,u)=>{var d=u(2492),c=u(7005);a.exports=function f(h,m,y,E,v){return h===m||(h==null||m==null||!c(h)&&!c(m)?h!=h&&m!=m:d(h,m,y,E,f,v))}},2492:(a,s,u)=>{var d=u(6384),c=u(7114),f=u(8351),h=u(6096),m=u(4160),y=u(1469),E=u(4144),v=u(6719),p="[object Arguments]",g="[object Array]",w="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(P,k,S,z,M,R){var A=y(P),$=y(k),N=A?g:m(P),I=$?g:m(k),G=(N=N==p?w:N)==w,j=(I=I==p?w:I)==w,T=N==I;if(T&&E(P)){if(!E(k))return!1;A=!0,G=!1}if(T&&!G)return R||(R=new d),A||v(P)?c(P,k,S,z,M,R):f(P,k,N,S,z,M,R);if(!(1&S)){var D=G&&O.call(P,"__wrapped__"),U=j&&O.call(k,"__wrapped__");if(D||U){var q=D?P.value():P,H=U?k.value():k;return R||(R=new d),M(q,H,S,z,R)}}return!!T&&(R||(R=new d),h(P,k,S,z,M,R))}},8458:(a,s,u)=>{var d=u(3560),c=u(5346),f=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,E=Object.prototype,v=y.toString,p=E.hasOwnProperty,g=RegExp("^"+v.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(w){return!(!f(w)||c(w))&&(d(w)?g:m).test(h(w))}},8749:(a,s,u)=>{var d=u(4239),c=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return f(m)&&c(m.length)&&!!h[d(m)]}},280:(a,s,u)=>{var d=u(5726),c=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!d(h))return c(h);var m=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(s,u){for(var d=-1,c=Array(s);++d<s;)c[d]=u(d);return c}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var d=u(5639)["__core-js_shared__"];a.exports=d},7114:(a,s,u)=>{var d=u(8668),c=u(2908),f=u(4757);a.exports=function(h,m,y,E,v,p){var g=1&y,w=h.length,O=m.length;if(w!=O&&!(g&&O>w))return!1;var P=p.get(h),k=p.get(m);if(P&&k)return P==m&&k==h;var S=-1,z=!0,M=2&y?new d:void 0;for(p.set(h,m),p.set(m,h);++S<w;){var R=h[S],A=m[S];if(E)var $=g?E(A,R,S,m,h,p):E(R,A,S,h,m,p);if($!==void 0){if($)continue;z=!1;break}if(M){if(!c(m,function(N,I){if(!f(M,I)&&(R===N||v(R,N,y,E,p)))return M.push(I)})){z=!1;break}}else if(R!==A&&!v(R,A,y,E,p)){z=!1;break}}return p.delete(h),p.delete(m),z}},8351:(a,s,u)=>{var d=u(2705),c=u(1149),f=u(7813),h=u(7114),m=u(8776),y=u(1814),E=d?d.prototype:void 0,v=E?E.valueOf:void 0;a.exports=function(p,g,w,O,P,k,S){switch(w){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!k(new c(p),new c(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var z=m;case"[object Set]":var M=1&O;if(z||(z=y),p.size!=g.size&&!M)return!1;var R=S.get(p);if(R)return R==g;O|=2,S.set(p,g);var A=h(z(p),z(g),O,P,k,S);return S.delete(p),A;case"[object Symbol]":if(v)return v.call(p)==v.call(g)}return!1}},6096:(a,s,u)=>{var d=u(8234),c=Object.prototype.hasOwnProperty;a.exports=function(f,h,m,y,E,v){var p=1&m,g=d(f),w=g.length;if(w!=d(h).length&&!p)return!1;for(var O=w;O--;){var P=g[O];if(!(p?P in h:c.call(h,P)))return!1}var k=v.get(f),S=v.get(h);if(k&&S)return k==h&&S==f;var z=!0;v.set(f,h),v.set(h,f);for(var M=p;++O<w;){var R=f[P=g[O]],A=h[P];if(y)var $=p?y(A,R,P,h,f,v):y(R,A,P,f,h,v);if(!($===void 0?R===A||E(R,A,m,y,v):$)){z=!1;break}M||(M=P=="constructor")}if(z&&!M){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||(z=!1)}return v.delete(f),v.delete(h),z}},1957:(a,s,u)=>{var d=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=d},8234:(a,s,u)=>{var d=u(8866),c=u(9551),f=u(3674);a.exports=function(h){return d(h,f,c)}},5050:(a,s,u)=>{var d=u(7019);a.exports=function(c,f){var h=c.__data__;return d(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var d=u(8458),c=u(7801);a.exports=function(f,h){var m=c(f,h);return d(m)?m:void 0}},9607:(a,s,u)=>{var d=u(2705),c=Object.prototype,f=c.hasOwnProperty,h=c.toString,m=d?d.toStringTag:void 0;a.exports=function(y){var E=f.call(y,m),v=y[m];try{y[m]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(E?y[m]=v:delete y[m]),g}},9551:(a,s,u)=>{var d=u(4963),c=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),d(h(y),function(E){return f.call(y,E)}))}:c;a.exports=m},4160:(a,s,u)=>{var d=u(8552),c=u(7071),f=u(3818),h=u(8525),m=u(577),y=u(4239),E=u(346),v="[object Map]",p="[object Promise]",g="[object Set]",w="[object WeakMap]",O="[object DataView]",P=E(d),k=E(c),S=E(f),z=E(h),M=E(m),R=y;(d&&R(new d(new ArrayBuffer(1)))!=O||c&&R(new c)!=v||f&&R(f.resolve())!=p||h&&R(new h)!=g||m&&R(new m)!=w)&&(R=function(A){var $=y(A),N=$=="[object Object]"?A.constructor:void 0,I=N?E(N):"";if(I)switch(I){case P:return O;case k:return v;case S:return p;case z:return g;case M:return w}return $}),a.exports=R},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var d=u(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(d){var m=h[f];return m==="__lodash_hash_undefined__"?void 0:m}return c.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return d?h[f]!==void 0:c.call(h,f)}},1866:(a,s,u)=>{var d=u(4536);a.exports=function(c,f){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=d&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,d){var c=typeof u;return!!(d=d==null?9007199254740991:d)&&(c=="number"||c!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<d}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var d,c=u(4429),f=(d=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var d=u&&u.constructor;return u===(typeof d=="function"&&d.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var d=u(8470),c=Array.prototype.splice;a.exports=function(f){var h=this.__data__,m=d(h,f);return!(m<0||(m==h.length-1?h.pop():c.call(h,m,1),--this.size,0))}},2117:(a,s,u)=>{var d=u(8470);a.exports=function(c){var f=this.__data__,h=d(f,c);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var d=u(8470);a.exports=function(c){return d(this.__data__,c)>-1}},4705:(a,s,u)=>{var d=u(8470);a.exports=function(c,f){var h=this.__data__,m=d(h,c);return m<0?(++this.size,h.push([c,f])):h[m][1]=f,this}},4785:(a,s,u)=>{var d=u(1989),c=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||c),string:new d}}},1285:(a,s,u)=>{var d=u(5050);a.exports=function(c){var f=d(this,c).delete(c);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).get(c)}},9916:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).has(c)}},5265:(a,s,u)=>{var d=u(5050);a.exports=function(c,f){var h=d(this,c),m=h.size;return h.set(c,f),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c,f){d[++u]=[f,c]}),d}},4536:(a,s,u)=>{var d=u(852)(Object,"create");a.exports=d},6916:(a,s,u)=>{var d=u(5569)(Object.keys,Object);a.exports=d},1167:(a,s,u)=>{a=u.nmd(a);var d=u(1957),c=s&&!s.nodeType&&s,f=c&&a&&!a.nodeType&&a,h=f&&f.exports===c&&d.process,m=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(d){return s(u(d))}}},5639:(a,s,u)=>{var d=u(1957),c=typeof self=="object"&&self&&self.Object===Object&&self,f=d||c||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c){d[++u]=c}),d}},7465:(a,s,u)=>{var d=u(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,d=u.delete(s);return this.size=u.size,d}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var d=u(8407),c=u(7071),f=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof d){var E=y.__data__;if(!c||E.length<199)return E.push([h,m]),this.size=++y.size,this;y=this.__data__=new f(E)}return y.set(h,m),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var d=u(9454),c=u(7005),f=Object.prototype,h=f.hasOwnProperty,m=f.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(E){return c(E)&&h.call(E,"callee")&&!m.call(E,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var d=u(3560),c=u(1780);a.exports=function(f){return f!=null&&c(f.length)&&!d(f)}},4144:(a,s,u)=>{a=u.nmd(a);var d=u(5639),c=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f?d.Buffer:void 0,y=(m?m.isBuffer:void 0)||c;a.exports=y},8446:(a,s,u)=>{var d=u(939);a.exports=function(c,f){return d(c,f)}},3560:(a,s,u)=>{var d=u(4239),c=u(3218);a.exports=function(f){if(!c(f))return!1;var h=d(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var d=u(8749),c=u(1717),f=u(1167),h=f&&f.isTypedArray,m=h?c(h):d;a.exports=m},3674:(a,s,u)=>{var d=u(4636),c=u(280),f=u(8612);a.exports=function(h){return f(h)?d(h):c(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,d,c,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,c=(s=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),f=c-h):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var d=u(75),c=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",m=c["request"+h],y=c["cancel"+h]||c["cancelRequest"+h],E=0;!m&&E<f.length;E++)m=c[f[E]+"Request"+h],y=c[f[E]+"Cancel"+h]||c[f[E]+"CancelRequest"+h];if(!m||!y){var v=0,p=0,g=[];m=function(w){if(g.length===0){var O=d(),P=Math.max(0,16.666666666666668-(O-v));v=P+O,setTimeout(function(){var k=g.slice(0);g.length=0;for(var S=0;S<k.length;S++)if(!k[S].cancelled)try{k[S].callback(v)}catch(z){setTimeout(function(){throw z},0)}},Math.round(P))}return g.push({handle:++p,callback:w,cancelled:!1}),p},y=function(w){for(var O=0;O<g.length;O++)g[O].handle===w&&(g[O].cancelled=!0)}}a.exports=function(w){return m.call(c,w)},a.exports.cancel=function(){y.apply(c,arguments)},a.exports.polyfill=function(w){w||(w=c),w.requestAnimationFrame=m,w.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>O});var a=o(8156),s=o.n(a),u=o(7403),d=o(8446),c=o.n(d);function f(P){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},f(P)}function h(P,k){if(!(P instanceof k))throw new TypeError("Cannot call a class as a function")}function m(P,k){for(var S=0;S<k.length;S++){var z=k[S];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(P,z.key,z)}}function y(P,k){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,z){return S.__proto__=z,S},y(P,k)}function E(P,k){if(k&&(f(k)==="object"||typeof k=="function"))return k;if(k!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(P)}function v(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function p(P){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(k){return k.__proto__||Object.getPrototypeOf(k)},p(P)}function g(P,k,S){return k in P?Object.defineProperty(P,k,{value:S,enumerable:!0,configurable:!0,writable:!0}):P[k]=S,P}var w=function(P){(function($,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(N&&N.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),N&&y($,N)})(A,P);var k,S,z,M,R=(z=A,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,N=p(z);if(M){var I=p(this).constructor;$=Reflect.construct(N,arguments,I)}else $=N.apply(this,arguments);return E(this,$)});function A(){var $;h(this,A);for(var N=arguments.length,I=new Array(N),G=0;G<N;G++)I[G]=arguments[G];return g(v($=R.call.apply(R,[this].concat(I))),"state",{instance:null}),$}return k=A,(S=[{key:"componentDidMount",value:function(){var $=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=$.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function($){c()(this.props.options,$.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var $=this,N=this.props.component;return s().createElement(N,{ref:function(I){return $.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(k.prototype,S),Object.defineProperty(k,"prototype",{writable:!1}),A}(a.Component);w.defaultProps={component:"div"};const O=w})(),l.default})())})(dv);const AS=$a(dv.exports),NS=C.div`
    width: 100%;

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${_.largeDesktop}){
            font-size: 100px;
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
`,IS=()=>x(NS,{children:x(AS,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),FS="/Site-Serra/assets/presentation-image.40ce3de4.png",HS="/Site-Serra/assets/Sites.a0112d0d.svg",US="/Site-Serra/assets/sistemas-web.d1b27032.svg",WS="/Site-Serra/assets/manutencao.33f9dd1a.svg",BS="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",qS="/Site-Serra/assets/braco-robo.2b026e48.svg",VS="/Site-Serra/assets/impressora-3d.75613d7d.svg",QS="/Site-Serra/assets/membros-2.457898e5.svg",GS="/Site-Serra/assets/background-image.668c0125.svg",YS=C.div`
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
`,XS=C.img`
    width: 45%;
    
    @media screen and (max-width: ${_.tablet}){
        width: 60%;
    }
    @media screen and (min-width: ${_.largeDesktop}){
        width: 40%;
    }
`,KS=C.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${_.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`,JS=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,ZS=C.div`
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

`,eE=C.div`
    background-image: url(${GS});
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
`;const tE=()=>V(eE,{children:[V(YS,{children:[x(KS,{children:x(IS,{})}),x(XS,{src:FS,alt:"apresenta\xE7\xE3o"})]}),x(Ac,{text:"O que fazemos"}),V(JS,{children:[V(ZS,{children:[x(Sf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/computacao",images:[HS,US],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),x(Sf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/mecanica",color:"#04ADD7",images:[WS,BS,qS,VS],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),x(cv,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:QS,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),nE="/Site-Serra/assets/presentation-image.73570450.svg",rE=C.div`
    
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
    
`,iE=C.p`
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
`,oE=C.p`
    width: 95%;
    text-align: justify;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: justify;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,aE=C.ul`

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,lE=C.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
    }
`,sE=C.img`
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
`,cs=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>V(rE,{children:[x(sE,{src:e,alt:n}),x(iE,{children:t}),r?x(aE,{children:o?o.map((l,a)=>x(lE,{children:l},a)):null}):x(oE,{children:i})]}),uE=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    min-height: 50vh;
    
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
`,cE=C.div`
   

`,dE=C.div`

    
`,fE=C.p`
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
        font-size: 150px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 250px;
    }

    
`,pE=C.img`
    @media screen and (max-width: 500px) {
        width: 70%;
    }

    @media screen and (min-width: 500px) {
        width: 60%;
    }

    @media screen and (min-width: 1000px) {
        width: 50%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
    }
`,hE=C.div`
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
`,qf=C.div`
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
`,mE=()=>V(xa,{children:[x(cE,{children:V(uE,{children:[x(fE,{children:"Sobre N\xF3s"}),x(pE,{src:nE,alt:"imagem sobre n\xF3s"})]})}),x(dE,{children:V(hE,{children:[x(cs,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),x(qf,{}),x(cs,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),x(qf,{}),x(cs,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]})}),x(cv,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),vE=C.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #f3f3f3;
    z-index: 2;
    border-radius: 10px;

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
    border-radius: 10px;

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
`;const gE=C.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;


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
`;const yE=C.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var wo=[];function xE(e){var t=K.exports.useState(),n=t[0],r=t[1];return K.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=wo.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),wo.push(a),function(){a.removeEventListener("load",l),a.remove(),wo.splice(wo.findIndex(function(s){return s.src===i}),1)}},[e]),n}function wE(e,t){var n=xE(e),r=K.exports.useRef(null),i=K.exports.useState(),o=i[0],l=i[1];return K.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const SE=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=wE("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),x(vE,{children:x(gE,{children:x(yE,{ref:n})})})},Ri={_origin:"https://api.emailjs.com"},EE=(e,t="https://api.emailjs.com")=>{Ri._userID=e,Ri._origin=t},fv=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Vf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const pv=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Vf(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Vf(l))}),o.open("POST",Ri._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),kE=(e,t,n,r)=>{const i=r||Ri._userID;fv(i,e,t);const o={lib_version:"3.9.1",user_id:i,service_id:e,template_id:t,template_params:n};return pv("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},bE=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},_E=(e,t,n,r)=>{const i=r||Ri._userID,o=bE(n);fv(i,e,t);const l=new FormData(o);return l.append("lib_version","3.9.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),pv("/api/v1.0/email/send-form",l)},CE={init:EE,send:kE,sendForm:_E};var qe={exports:{}},OE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PE=OE,TE=PE;function hv(){}function mv(){}mv.resetWarningCache=hv;var LE=function(){function e(r,i,o,l,a,s){if(s!==TE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mv,resetWarningCache:hv};return n.PropTypes=n,n};qe.exports=LE();function zE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function So(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var yl=function(e){jE(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(So(r)),r.handleErrored=r.handleErrored.bind(So(r)),r.handleChange=r.handleChange.bind(So(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(So(r)),r}var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var i=this.props.grecaptcha;if(i&&this._widgetId!==void 0)return i.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var i=this;return new Promise(function(o,l){i.executionResolve=o,i.executionReject=l,i.execute()})},n.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=this.props.grecaptcha.render(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var i=document.createElement("div");for(document.body.appendChild(i),i.style.display="none";this.captcha.firstChild;)i.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(i)},5e3)},n.handleRecaptchaRef=function(i){this.captcha=i},n.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl;var o=zE(i,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return x("div",{...o,ref:this.handleRecaptchaRef})},t}(Lr.Component);yl.displayName="ReCAPTCHA";yl.propTypes={sitekey:qe.exports.string.isRequired,onChange:qe.exports.func,grecaptcha:qe.exports.object,theme:qe.exports.oneOf(["dark","light"]),type:qe.exports.oneOf(["image","audio"]),tabindex:qe.exports.number,onExpired:qe.exports.func,onErrored:qe.exports.func,size:qe.exports.oneOf(["compact","normal","invisible"]),stoken:qe.exports.string,hl:qe.exports.string,badge:qe.exports.oneOf(["bottomright","bottomleft","inline"])};yl.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function Pu(){return Pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pu.apply(this,arguments)}function ME(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function DE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var St={},RE=0;function $E(e,t){return t=t||{},function(r){var i=r.displayName||r.name||"Component",o=function(a){DE(s,a);function s(d,c){var f;return f=a.call(this,d,c)||this,f.state={},f.__scriptURL="",f}var u=s.prototype;return u.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+RE++),this.__scriptLoaderID},u.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},u.asyncScriptLoaderHandleLoad=function(c){var f=this;this.setState(c,function(){return f.props.asyncScriptOnLoad&&f.props.asyncScriptOnLoad(f.state)})},u.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=St[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var f in c.observers)c.observers[f](c);delete window[t.callbackName]},u.componentDidMount=function(){var c=this,f=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),m=t,y=m.globalName,E=m.callbackName,v=m.scriptId;if(y&&typeof window[y]<"u"&&(St[f]={loaded:!0,observers:{}}),St[f]){var p=St[f];if(p&&(p.loaded||p.errored)){this.asyncScriptLoaderHandleLoad(p);return}p.observers[h]=function(k){return c.asyncScriptLoaderHandleLoad(k)};return}var g={};g[h]=function(k){return c.asyncScriptLoaderHandleLoad(k)},St[f]={loaded:!1,observers:g};var w=document.createElement("script");w.src=f,w.async=!0;for(var O in t.attributes)w.setAttribute(O,t.attributes[O]);v&&(w.id=v);var P=function(S){if(St[f]){var z=St[f],M=z.observers;for(var R in M)S(M[R])&&delete M[R]}};E&&typeof window<"u"&&(window[E]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),w.onload=function(){var k=St[f];k&&(k.loaded=!0,P(function(S){return E?!1:(S(k),!0)}))},w.onerror=function(){var k=St[f];k&&(k.errored=!0,P(function(S){return S(k),!0}))},document.body.appendChild(w)},u.componentWillUnmount=function(){var c=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),h=0;h<f.length;h+=1)f[h].src.indexOf(c)>-1&&f[h].parentNode&&f[h].parentNode.removeChild(f[h]);var m=St[c];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete St[c])},u.render=function(){var c=t.globalName,f=this.props;f.asyncScriptOnLoad;var h=f.forwardedRef,m=ME(f,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(m[c]=typeof window[c]<"u"?window[c]:void 0),m.ref=h,K.exports.createElement(r,m)},s}(K.exports.Component),l=K.exports.forwardRef(function(a,s){return K.exports.createElement(o,Pu({},a,{forwardedRef:s}))});return l.displayName="AsyncScriptLoader("+i+")",l.propTypes={asyncScriptOnLoad:qe.exports.func},Em(l,r)}}var vv="onloadcallback",AE="grecaptcha";function NE(){return typeof window<"u"&&window.recaptchaOptions||{}}function IE(){var e=NE(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+vv+"&render=explicit"}const FE=$E(IE,{callbackName:vv,globalName:AE})(yl),HE="/Site-Serra/assets/agenda.6fff4078.svg",UE="/Site-Serra/assets/email.946bdff8.svg",WE="/Site-Serra/assets/localizacao.69982f44.svg",BE="/Site-Serra/assets/telefone.9ca94e72.svg",Eo=C.span`
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

`,ko=C.img`

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
   
`,qE=C.div`
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


    
`,VE=C.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,QE=C.div`
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
`,GE=C.div`
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

`,bo=C.div`
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
`,YE=C.div`
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
    
`,XE=C.div`
    margin-left: 10%;
    width: 100%;
`,Xr=C.p`
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

`,_o=C.input`
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

`,KE=C.button`
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
`,JE=C.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,ZE=C.input`
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
`,ek=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    
`,tk=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,nk=C.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`,rk=()=>{const[e,t]=K.exports.useState(""),[n,r]=K.exports.useState(""),[i,o]=K.exports.useState(""),[l,a]=K.exports.useState(""),[s,u]=K.exports.useState(""),[d,c]=K.exports.useState(""),f=m=>{c(m)},h=m=>{if(m.preventDefault(),e===""||n===""||i===""||l===""||s===""||d===""){alert("Preencha todos os campos");return}const y={from_name:e,message:s,from_email:n,from_phone:i,subject:l,"g-recaptcha-response":d};CE.send("service_al540kd","template_4eqf2kl",y,"HRfoO7P69RR47ZQ0c").then(E=>{alert("Email enviado"),t(""),r(""),o(""),a(""),u("")},E=>{alert("Aconteceu um erro"),console.log("Erro: ",E)})};return V(tk,{children:[x(Ac,{titleWidth:"40%",text:"Entre em contato conosco!"}),V(GE,{children:[V(qE,{children:[V(bo,{children:[x(ko,{src:WE,alt:""}),x(Eo,{children:"Rua Bonfim n\xB025 - Vila Amelia, Nova Friburgo - RJ, 28625-570"})]}),V(bo,{children:[x(ko,{src:BE,alt:""}),x(Eo,{children:"(22) 2533-2265"})]}),V(bo,{children:[x(ko,{src:UE,alt:""}),x(Eo,{children:"serrajr@iprj.uerj.br"})]}),V(bo,{children:[x(ko,{src:HE,alt:""}),V(Eo,{children:["Hor\xE1rio de atendimento: ",x("br",{}),"Segunda a Sexta, das 09hrs ",x("br",{}),"\xE0s 17hrs."]})]})]}),x(ek,{children:x(YE,{children:V(XE,{children:[x(Xr,{children:"Nome"}),x(_o,{type:"text",placeholder:"Insira seu nome",value:e,onChange:m=>t(m.target.value)}),x(Xr,{children:"Email"}),x(_o,{type:"text",placeholder:"Insira seu email",value:n,onChange:m=>r(m.target.value)}),x(Xr,{children:"Telefone"}),x(_o,{type:"text",placeholder:"(XX) XXXXX-XXXX",value:i,onChange:m=>o(m.target.value)}),x(Xr,{children:"Assunto"}),x(_o,{type:"text",placeholder:"Digite o assunto",value:l,onChange:m=>a(m.target.value)}),x(Xr,{children:"Mensagem"}),x(ZE,{type:"text",placeholder:"Digite a mensagem",value:s,onChange:m=>u(m.target.value)}),x(nk,{children:x(FE,{sitekey:"6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq",onChange:f})}),x(JE,{children:x(KE,{onClick:m=>h(m),children:"Enviar"})})]})})})]}),x(QE,{children:x(VE,{children:x(SE,{})})})]})};var Tu={exports:{}},Un={},Lu={exports:{}},zt={},ja={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function l(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),m=h.getPropertyValue("display");return f?m!==r&&o(c,h):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,h=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(c,f){var h=c.nodeName.toLowerCase(),m=i.test(h)&&!c.disabled||h==="a"&&c.href||f;return m&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(c,!h)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,m){return h.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return f.filter(u)}e.exports=t.default})(ja,ja.exports);Object.defineProperty(zt,"__esModule",{value:!0});zt.resetState=lk;zt.log=sk;zt.handleBlur=$i;zt.handleFocus=Ai;zt.markForFocusLater=uk;zt.returnFocus=ck;zt.popWithoutFocus=dk;zt.setupScopedFocus=fk;zt.teardownScopedFocus=pk;var ik=ja.exports,ok=ak(ik);function ak(e){return e&&e.__esModule?e:{default:e}}var Pr=[],ur=null,zu=!1;function lk(){Pr=[]}function sk(){}function $i(){zu=!0}function Ai(){if(zu){if(zu=!1,!ur)return;setTimeout(function(){if(!ur.contains(document.activeElement)){var e=(0,ok.default)(ur)[0]||ur;e.focus()}},0)}}function uk(){Pr.push(document.activeElement)}function ck(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Pr.length!==0&&(t=Pr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function dk(){Pr.length>0&&Pr.pop()}function fk(e){ur=e,window.addEventListener?(window.addEventListener("blur",$i,!1),document.addEventListener("focus",Ai,!0)):(window.attachEvent("onBlur",$i),document.attachEvent("onFocus",Ai))}function pk(){ur=null,window.addEventListener?(window.removeEventListener("blur",$i),document.removeEventListener("focus",Ai)):(window.detachEvent("onBlur",$i),document.detachEvent("onFocus",Ai))}var ju={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=ja.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var d=void 0,c=s.shiftKey,f=u[0],h=u[u.length-1],m=o();if(a===m){if(!c)return;d=h}if(h===m&&!c&&(d=f),f===m&&c&&(d=h),d){s.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),E=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!E){var v=u.indexOf(m);if(v>-1&&(v+=c?-1:1),d=u[v],typeof d>"u"){s.preventDefault(),d=c?h:f,d.focus();return}s.preventDefault(),d.focus()}}e.exports=t.default})(ju,ju.exports);var jt={},hk=function(){},mk=hk,Tt={},gv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(gv);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canUseDOM=Tt.SafeNodeList=Tt.SafeHTMLCollection=void 0;var vk=gv.exports,gk=yk(vk);function yk(e){return e&&e.__esModule?e:{default:e}}var xl=gk.default,xk=xl.canUseDOM?window.HTMLElement:{};Tt.SafeHTMLCollection=xl.canUseDOM?window.HTMLCollection:{};Tt.SafeNodeList=xl.canUseDOM?window.NodeList:{};Tt.canUseDOM=xl.canUseDOM;Tt.default=xk;Object.defineProperty(jt,"__esModule",{value:!0});jt.resetState=bk;jt.log=_k;jt.assertNodeList=yv;jt.setElement=Ck;jt.validateElement=Vc;jt.hide=Ok;jt.show=Pk;jt.documentNotReadyOrSSRTesting=Tk;var wk=mk,Sk=kk(wk),Ek=Tt;function kk(e){return e&&e.__esModule?e:{default:e}}var pt=null;function bk(){pt&&(pt.removeAttribute?pt.removeAttribute("aria-hidden"):pt.length!=null?pt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(pt).forEach(function(e){return e.removeAttribute("aria-hidden")})),pt=null}function _k(){}function yv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Ck(e){var t=e;if(typeof t=="string"&&Ek.canUseDOM){var n=document.querySelectorAll(t);yv(n,t),t=n}return pt=t||pt,pt}function Vc(e){var t=e||pt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Sk.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ok(e){var t=!0,n=!1,r=void 0;try{for(var i=Vc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Pk(e){var t=!0,n=!1,r=void 0;try{for(var i=Vc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Tk(){pt=null}var Mr={};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.resetState=Lk;Mr.log=zk;var pi={},hi={};function Qf(e,t){e.classList.remove(t)}function Lk(){var e=document.getElementsByTagName("html")[0];for(var t in pi)Qf(e,pi[t]);var n=document.body;for(var r in hi)Qf(n,hi[r]);pi={},hi={}}function zk(){}var jk=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Mk=function(t,n){return t[n]&&(t[n]-=1),n},Dk=function(t,n,r){r.forEach(function(i){jk(n,i),t.add(i)})},Rk=function(t,n,r){r.forEach(function(i){Mk(n,i),n[i]===0&&t.remove(i)})};Mr.add=function(t,n){return Dk(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};Mr.remove=function(t,n){return Rk(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.log=Ak;Dr.resetState=Nk;function $k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var xv=function e(){var t=this;$k(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ma=new xv;function Ak(){console.log("portalOpenInstances ----------"),console.log(Ma.openInstances.length),Ma.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Nk(){Ma=new xv}Dr.default=Ma;var Qc={};Object.defineProperty(Qc,"__esModule",{value:!0});Qc.resetState=Uk;Qc.log=Wk;var Ik=Dr,Fk=Hk(Ik);function Hk(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,kt=void 0,$n=[];function Uk(){for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=kt=null,$n=[]}function Wk(){console.log("bodyTrap ----------"),console.log($n.length);for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Gf(){$n.length!==0&&$n[$n.length-1].focusContent()}function Bk(e,t){!Be&&!kt&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Gf),kt=Be.cloneNode(),kt.addEventListener("focus",Gf)),$n=t,$n.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==kt&&document.body.appendChild(kt)):(Be.parentElement&&Be.parentElement.removeChild(Be),kt.parentElement&&kt.parentElement.removeChild(kt))}Fk.default.subscribe(Bk);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var G=arguments[I];for(var j in G)Object.prototype.hasOwnProperty.call(G,j)&&(N[j]=G[j])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,G){for(var j=0;j<G.length;j++){var T=G[j];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(I,T.key,T)}}return function(I,G,j){return G&&N(I.prototype,G),j&&N(I,j),I}}(),o=K.exports,l=qe.exports,a=O(l),s=zt,u=w(s),d=ju.exports,c=O(d),f=jt,h=w(f),m=Mr,y=w(m),E=Tt,v=O(E),p=Dr,g=O(p);function w(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var G in N)Object.prototype.hasOwnProperty.call(N,G)&&(I[G]=N[G]);return I.default=N,I}function O(N){return N&&N.__esModule?N:{default:N}}function P(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function k(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function S(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var z={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},M=function(I){return I.code==="Tab"||I.keyCode===9},R=function(I){return I.code==="Escape"||I.keyCode===27},A=0,$=function(N){S(I,N);function I(G){P(this,I);var j=k(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,G));return j.setOverlayRef=function(T){j.overlay=T,j.props.overlayRef&&j.props.overlayRef(T)},j.setContentRef=function(T){j.content=T,j.props.contentRef&&j.props.contentRef(T)},j.afterClose=function(){var T=j.props,D=T.appElement,U=T.ariaHideApp,q=T.htmlOpenClassName,H=T.bodyOpenClassName,b=T.parentSelector,Q=b&&b().ownerDocument||document;H&&y.remove(Q.body,H),q&&y.remove(Q.getElementsByTagName("html")[0],q),U&&A>0&&(A-=1,A===0&&h.show(D)),j.props.shouldFocusAfterRender&&(j.props.shouldReturnFocusAfterClose?(u.returnFocus(j.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),j.props.onAfterClose&&j.props.onAfterClose(),g.default.deregister(j)},j.open=function(){j.beforeOpen(),j.state.afterOpen&&j.state.beforeClose?(clearTimeout(j.closeTimer),j.setState({beforeClose:!1})):(j.props.shouldFocusAfterRender&&(u.setupScopedFocus(j.node),u.markForFocusLater()),j.setState({isOpen:!0},function(){j.openAnimationFrame=requestAnimationFrame(function(){j.setState({afterOpen:!0}),j.props.isOpen&&j.props.onAfterOpen&&j.props.onAfterOpen({overlayEl:j.overlay,contentEl:j.content})})}))},j.close=function(){j.props.closeTimeoutMS>0?j.closeWithTimeout():j.closeWithoutTimeout()},j.focusContent=function(){return j.content&&!j.contentHasFocus()&&j.content.focus({preventScroll:!0})},j.closeWithTimeout=function(){var T=Date.now()+j.props.closeTimeoutMS;j.setState({beforeClose:!0,closesAt:T},function(){j.closeTimer=setTimeout(j.closeWithoutTimeout,j.state.closesAt-Date.now())})},j.closeWithoutTimeout=function(){j.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},j.afterClose)},j.handleKeyDown=function(T){M(T)&&(0,c.default)(j.content,T),j.props.shouldCloseOnEsc&&R(T)&&(T.stopPropagation(),j.requestClose(T))},j.handleOverlayOnClick=function(T){j.shouldClose===null&&(j.shouldClose=!0),j.shouldClose&&j.props.shouldCloseOnOverlayClick&&(j.ownerHandlesClose()?j.requestClose(T):j.focusContent()),j.shouldClose=null},j.handleContentOnMouseUp=function(){j.shouldClose=!1},j.handleOverlayOnMouseDown=function(T){!j.props.shouldCloseOnOverlayClick&&T.target==j.overlay&&T.preventDefault()},j.handleContentOnClick=function(){j.shouldClose=!1},j.handleContentOnMouseDown=function(){j.shouldClose=!1},j.requestClose=function(T){return j.ownerHandlesClose()&&j.props.onRequestClose(T)},j.ownerHandlesClose=function(){return j.props.onRequestClose},j.shouldBeClosed=function(){return!j.state.isOpen&&!j.state.beforeClose},j.contentHasFocus=function(){return document.activeElement===j.content||j.content.contains(document.activeElement)},j.buildClassName=function(T,D){var U=(typeof D>"u"?"undefined":r(D))==="object"?D:{base:z[T],afterOpen:z[T]+"--after-open",beforeClose:z[T]+"--before-close"},q=U.base;return j.state.afterOpen&&(q=q+" "+U.afterOpen),j.state.beforeClose&&(q=q+" "+U.beforeClose),typeof D=="string"&&D?q+" "+D:q},j.attributesFromObject=function(T,D){return Object.keys(D).reduce(function(U,q){return U[T+"-"+q]=D[q],U},{})},j.state={afterOpen:!1,beforeClose:!1},j.shouldClose=null,j.moveFromContentToOverlay=null,j}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(j,T){this.props.isOpen&&!j.isOpen?this.open():!this.props.isOpen&&j.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!T.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var j=this.props,T=j.appElement,D=j.ariaHideApp,U=j.htmlOpenClassName,q=j.bodyOpenClassName,H=j.parentSelector,b=H&&H().ownerDocument||document;q&&y.add(b.body,q),U&&y.add(b.getElementsByTagName("html")[0],U),D&&(A+=1,h.hide(T)),g.default.register(this)}},{key:"render",value:function(){var j=this.props,T=j.id,D=j.className,U=j.overlayClassName,q=j.defaultStyles,H=j.children,b=D?{}:q.content,Q=U?{}:q.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},Q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},L=n({id:T,ref:this.setContentRef,style:n({},b,this.props.style.content),className:this.buildClassName("content",D),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(L,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);$.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},$.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(E.SafeHTMLCollection),a.default.instanceOf(E.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=$,e.exports=t.default})(Lu,Lu.exports);function wv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Sv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function Ev(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}wv.__suppressDeprecationWarning=!0;Sv.__suppressDeprecationWarning=!0;Ev.__suppressDeprecationWarning=!0;function qk(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=wv,t.componentWillReceiveProps=Sv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ev;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return e}const Vk=Object.freeze(Object.defineProperty({__proto__:null,polyfill:qk},Symbol.toStringTag,{value:"Module"})),Qk=cp(Vk);Object.defineProperty(Un,"__esModule",{value:!0});Un.bodyOpenClassName=Un.portalClassName=void 0;var Yf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),kv=K.exports,Da=Gi(kv),Yk=Au.exports,Ra=Gi(Yk),Xk=qe.exports,re=Gi(Xk),Kk=Lu.exports,Xf=Gi(Kk),Jk=jt,Zk=tb(Jk),un=Tt,Kf=Gi(un),eb=Qk;function tb(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Gi(e){return e&&e.__esModule?e:{default:e}}function nb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function rb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ib=Un.portalClassName="ReactModalPortal",ob=Un.bodyOpenClassName="ReactModal__Body--open",Pn=un.canUseDOM&&Ra.default.createPortal!==void 0,Zf=function(t){return document.createElement(t)},ep=function(){return Pn?Ra.default.createPortal:Ra.default.unstable_renderSubtreeIntoContainer};function Co(e){return e()}var Yi=function(e){rb(t,e);function t(){var n,r,i,o;nb(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Jf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Pn&&Ra.default.unmountComponentAtNode(i.node);var u=Co(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=ep(),c=d(i,Da.default.createElement(Xf.default,Yf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(c)},r),Jf(i,o)}return Gk(t,[{key:"componentDidMount",value:function(){if(!!un.canUseDOM){Pn||(this.node=Zf("div")),this.node.className=this.props.portalClassName;var r=Co(this.props.parentSelector);r.appendChild(this.node),!Pn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Co(r.parentSelector),o=Co(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!un.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!Pn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!un.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!un.canUseDOM||!Pn)return null;!this.node&&Pn&&(this.node=Zf("div"));var r=ep();return r(Da.default.createElement(Xf.default,Yf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Zk.setElement(r)}}]),t}(kv.Component);Yi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Kf.default),re.default.instanceOf(un.SafeHTMLCollection),re.default.instanceOf(un.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Kf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Yi.defaultProps={isOpen:!1,portalClassName:ib,bodyOpenClassName:ob,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Da.default.createElement("div",t,n)},contentElement:function(t,n){return Da.default.createElement("div",t,n)}};Yi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,eb.polyfill)(Yi);Un.default=Yi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Un,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Tu,Tu.exports);const bv=$a(Tu.exports),ab=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,lb=C.div`
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
`,sb=C.img`
    border-radius: 20px;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 20vh;
    }

    @media screen and (max-width: ${_.tablet}) {
        width: 25vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 40vh;
    }
`,ub=C.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${_.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,cb=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:2500};return x(ub,{containerWidth:e.width,children:x(qc,{...t,children:e.carouselData.map((n,r)=>x(ab,{children:x(lb,{children:x(sb,{src:n,alt:e.alt,style:{height:e.imageSize}})})},r))})})},db=C.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 30px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 40px;
    }
`,fb=C.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 3;
`,pb=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${_.largeMobile}){
        font-size: 12px;
    }
`,ds=C.h2`
`,hb=C.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,mb=C.a`
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
`,vb=C.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,gb=C.img`
    width: 300px;

    @media screen and (max-width: ${_.largeMobile}){
        width: 200px;
    }

    @media screen and (min-width: ${_.largeDesktop}){
        width: 500px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 700px;
    }
`,yb=C.button`
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
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
`,tp=C.p`

`,xb=C.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,wb=C.ul`
    
`,Sb=C.li`
    list-style: circle;
`;bv.setAppElement("#root");const Eb=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"70vh",overflow:"scroll",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#00000028"}};return n?x(bv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:V(db,{children:[V(fb,{children:[V(pb,{children:[x("h1",{children:n.title}),x(yb,{onClick:()=>t(!1),children:"X"})]}),x(xb,{})]}),x(ds,{children:"Resumo do projeto"}),V(vb,{children:[n.image.length>1?x(cb,{carouselData:n.image,alt:`Imagens do ${n.title}`,imageSize:n.imageSize,hasArrows:!0}):x(gb,{src:n.image[0],alt:n.title,style:{height:n.imageSize}}),x(tp,{children:n.summary})]}),n.members?V(xa,{children:[x(ds,{children:"Membros envolvidos"}),x(wb,{children:n.members.map((i,o)=>x(Sb,{children:i},o))})]}):null,n.opinions?V(xa,{children:[x(ds,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>x(tp,{children:i},o))]}):null,n.acess?x(hb,{children:x(mb,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},kb=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,bb=C.div`
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
`,_b=C.section`
    width: 85%;
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-bottom: 3%;
  
    background-color: lightgrey;
    border-radius: 3rem;
    
    @media screen and (max-width: ${_.tablet}) {
        width: 80%;
        min-height: 100vh;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        min-height: 65vh;
        padding-bottom: 3%;
    }

    
`,Cb=C.div`
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

`,Ob=C.div`
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

    

`,Pb=C.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${_.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }

    @media screen and (min-width: ${_.largeDesktop}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,Tb=C.div`
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
    
    
`,Lb=C.span`
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
`,zb=C.button`
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

`,jb=C.div`
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
    
`,Mb=C.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,_v=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return x(Mb,{containerWidth:e.width,children:x(qc,{...t,children:e.carouselData.map((l,a)=>x(kb,{children:x(bb,{children:V(_b,{children:[x(Cb,{children:x(Ac,{text:l.title})}),V(Ob,{children:[x(Tb,{children:x(Pb,{src:l.image[0],alt:l.title})}),V(jb,{children:[x(Lb,{children:l.content}),x(zb,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),x(Eb,{data:i,status:n,setStatus:r})]})]})]})})},a))})})},Db="/Site-Serra/assets/marmitex.857922f9.svg",Rb="/Site-Serra/assets/vicente.a48e6481.svg",$b="/Site-Serra/assets/vicente-2.5ac4e174.svg",Ab="/Site-Serra/assets/tmf.89cc1825.svg",Nb="/Site-Serra/assets/tmf-2.d1a33174.svg",Ib="/Site-Serra/assets/tmf-3.8462faa7.svg",Fb="/Site-Serra/assets/tmf-4.5ad6176b.svg",Hb="/Site-Serra/assets/tmf-5.206341f6.svg",Ub="/Site-Serra/assets/soledade.c7442aaa.svg",Wb="/Site-Serra/assets/soledade-2.f71490d2.svg",Bb="/Site-Serra/assets/chassi.02955239.svg",qb="/Site-Serra/assets/chassi-2.f1b6e78e.svg",Vb={mechanicsProjects:[{title:"Projeto Marmitex",image:[Db],imageSize:"30vh",content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",summary:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico."},{title:"Projeto Lar Abrigo Amor a Jesus",imageSize:"30vh",image:["https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG"],content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",summary:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade."},{title:"Projeto S\xE3o Vicente de Paula",imageSize:"30vh",image:[Rb,$b],content:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas.",summary:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas. A Serra Jr. Engenharia foi ao local, estudou as instala\xE7\xF5es onde eram realizados os banhos, com a medi\xE7\xE3o em m\xE3os foi desenvolvida uma maca que atendia perfeitamente \xE0 necessidade, ela possui apoios que s\xE3o encaixadas na parede e que auxiliam a levantar e descer os idosos, diminuindo o esfor\xE7o f\xEDsico dos enfermeiros, al\xE9m de possuir um sistema de drenagem de \xE1gua evitando o ac\xFAmulo de \xE1gua. Al\xE9m do desenvolvimento da mec\xE2nica da maca, tamb\xE9m foi feito um estudo de materiais para selecionar o mais adequado para evitar corros\xE3o, baixa resist\xEAncia e durabilidade, alta oxida\xE7\xE3o e, assim, garantindo uma vida \xFAtil bem longa ao equipamento."},{title:"Projeto TMF",image:[Ab,Nb,Ib,Fb,Hb],imageSize:"30vh",content:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento.",summary:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento. A Serra Jr. Engenharia foi \xE0 f\xE1brica, mediu at\xE9 o menor dos parafusos do maquin\xE1rio, fez a modelagem no software SolidWorks e entregou todos os desenhos do maquin\xE1rio, possibilitando a comercializa\xE7\xE3o do mesmo."},{title:"Projeto Fazenda Soledade",image:[Ub,Wb],imageSize:"30vh",content:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques.",summary:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques. Acompanhando o sistema automatizado tamb\xE9m foi desenvolvido um software com uma IHM (Interface Homem-M\xE1quina) que permite ao operador ter acesso \xE0 todas as informa\xE7\xF5es do sistema como temperatura, n\xEDvel de tanque e com uma fun\xE7\xE3o de gerar um relat\xF3rio no formato estipulado pela cacha\xE7aria com todas as informa\xE7\xF5es de produ\xE7\xE3o de determinado intervalo de tempo."},{title:"Projeto Chassi de Moto",image:[qb,Bb],imageSize:"30vh",content:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas.",summary:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas."}]},Oo="/Site-Serra/assets/seta.7067b273.svg",Qb="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",Gb="/Site-Serra/assets/hammer-icon.c370caae.svg",Yb="/Site-Serra/assets/bot-icon.237c34bd.svg",Xb="/Site-Serra/assets/3d-icon.6c010241.svg",Kb="/Site-Serra/assets/drawing-icon.462650d6.svg",Cv="/Site-Serra/assets/arrow-up.1b45090f.svg",Jb="/Site-Serra/assets/background-mecanica.81e45f94.svg",Zb=C.div`
`,e_=C.div`
    background-image: url(${Jb});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,t_=C.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Po=C.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px; 
    width: 300px;

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
        width: 500px;
    }

    
`,To=C.p`
    width: 500px;
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

    
`,np=C.p`
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
        font-size: 110px;
        line-height: 130px;
    }
`,n_=C.div`
    
`,r_=C.h1`
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
`;C.h2`
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

       
`;const rp=C.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${_.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,Lo=C.div`
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

`,en=C.img`
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
`,zo=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,jo=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


`,i_=C.img`
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
    }
`,o_=C.hr`
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
`,a_=C.p`
    border: 3px solid #04ADD7;
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
    

    color: #04ADD7;

    &:hover{
        background-color: #04ADD7;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${_.largeMobile}) {
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
        border: 6px solid #04ADD7;
    }
`,l_=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin: 25px 0px;
    }
`;C.div`
    
    /* justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%; */
`;C.img`
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 2.5rem;
    }
`;const s_=C.img`
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
    width: 2rem;
    height: 2rem;

    &:hover{
        opacity: 0.7;
        transition: 0.5s;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,u_=C.div`
    margin-top: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
    }
`,c_=()=>{const e=qi();return V(Zb,{children:[V(t_,{children:[V(n_,{children:[x(np,{children:"Engenharia"}),x(np,{children:"Mec\xE2nica"})]}),x(i_,{src:Qb,alt:"Imagem de Mec\xE2nica"})]}),V(e_,{children:[x(r_,{children:"Carta de Servi\xE7os"}),V(rp,{children:[V(Lo,{children:[V(zo,{children:[x(en,{src:Gb,alt:"Imagem Sistemas"}),x(Po,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),V(jo,{children:[x(en,{src:Oo,alt:"Seta"}),x(To,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),V(Lo,{children:[V(zo,{children:[x(en,{src:Kb,alt:"Imagem Site"}),x(Po,{children:"Desenho T\xE9cnico e Industrial"})]}),V(jo,{children:[x(en,{src:Oo,alt:"Seta"}),x(To,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),V(rp,{children:[V(Lo,{children:[V(zo,{children:[x(en,{src:Yb,alt:"Imagem Sistemas"}),x(Po,{children:"Projetos de Automa\xE7\xE3o"})]}),V(jo,{children:[x(en,{src:Oo,alt:"Seta"}),x(To,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),V(Lo,{children:[V(zo,{children:[x(en,{src:Xb,alt:"Imagem Site"}),x(Po,{children:"Prototipagem"})]}),V(jo,{children:[x(en,{src:Oo,alt:"Seta"}),x(To,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),x(o_,{}),x(l_,{children:x(a_,{onClick:()=>{e("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),x(u_,{children:x(_v,{carouselData:Vb.mechanicsProjects})}),x(s_,{onClick:()=>window.scrollTo(0,0),src:Cv,alt:"ScrollUp"})]})},d_="/Site-Serra/assets/friburguense.ba8886f5.svg",f_="/Site-Serra/assets/projeto-tmf.f6316197.svg",p_="/Site-Serra/assets/miljoias.745c5985.svg",h_={computingProjects:[{title:"Projeto Friburguense",image:[d_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,summary:"O projeto consistiu no desenvolvimento de um website para comercializa\xE7\xE3o do sistema de S\xF3cio-Torcedor do clube. O site possui um sistema de integra\xE7\xE3o com uma rede de pagamento que permite que seja comercializado diretamente pelo site com diversas formas de pagamento e total seguran\xE7a nas transa\xE7\xF5es, tamb\xE9m possui um banco de dados para cadastro dos novos s\xF3cios que ter\xE3o acesso a um painel onde \xE9 gerada uma carteirinha de s\xF3cio-torcedor, h\xE1 todas as informa\xE7\xF5es do plano, op\xE7\xE3o de upgrade e muito mais. Todo o site seguiu \xE0s riscas as diretrizes da LGPD.",members:["Ramon Ribeiro","Leticia Bussinger","Jo\xE3o Vitor Muniz"]},{title:"Projeto TMF",image:[f_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,summary:"O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a localiza\xE7\xE3o da mesma.",acess:"https://usinagemtmf.com.br/"},{title:"Projeto Milj\xF3ias",image:[p_],imageSize:"30vh",content:"O projeto consistiu no desenvolvimento de um website para exibi\xE7\xE3o do cat\xE1logo de produtos da loja, junto com o site foi desenvolvido um banco de dados com sistema de autentica\xE7\xE3o para que os funcion\xE1rios autorizados pudessem fazer a atualiza\xE7\xE3o do cat\xE1logo cadastrando ou retirando novos itens. Junto com o website foi desenvolvido um manual com todas as instru\xE7\xF5es para manuseio do site.",summary:"O projeto consistiu no desenvolvimento de um website para exibi\xE7\xE3o do cat\xE1logo de produtos da loja, junto com o site foi desenvolvido um banco de dados com sistema de autentica\xE7\xE3o para que os funcion\xE1rios autorizados pudessem fazer a atualiza\xE7\xE3o do cat\xE1logo cadastrando ou retirando novos itens. Junto com o website foi desenvolvido um manual com todas as instru\xE7\xF5es para manuseio do site."}]},m_="/Site-Serra/assets/presentation-image.3bba7d23.svg",v_="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",g_="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",ip="/Site-Serra/assets/seta.13cafa5d.svg",y_="/Site-Serra/assets/css-icon.e1a4dd78.svg",x_="/Site-Serra/assets/html-icon.e0dc6b68.svg",w_="/Site-Serra/assets/js-icon.f4d001af.svg",S_="/Site-Serra/assets/react-icon.f937629c.svg",E_="/Site-Serra/assets/ts-icon.bf061be4.svg",k_="/Site-Serra/assets/styled-icon.35b18102.svg",b_="/Site-Serra/assets/background-computacao.dbcf66d3.svg",__=C.div`
    scroll-behavior: smooth;

`,C_=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,O_=C.img`
    margin-top: 10px;
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
    }
    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
    }
`,P_=C.div`
    padding-top: 2%;
    background-image: url(${b_});
    background-repeat: no-repeat; 
    background-size: cover; 
`,fs=C.p`
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
        font-size: 110px;
        line-height: 130px;
    }
`,T_=C.div`
`,L_=C.h1`
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
`;C.h2`
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

       
`;const z_=C.div`
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
`,op=C.div`
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

`,Mo=C.img`
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
`,ap=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,lp=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,sp=C.h3`
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
`,up=C.p`
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

    
`,j_=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


`;C.div`
    width: 100%;
    
`;const Gn=C.img`

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
    
`;const M_=C.img`
    position: fixed;
    z-index: 3;
    bottom: 20px;
    right: 20px;
    width: 2rem;
    height: 2rem;

    &:hover{
        opacity: 0.7;
        transition: 0.5s;
        cursor: pointer;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`;C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    
`;const D_=C.div`
    margin-top: 3%;
`,R_=C.p`
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

    @media screen and (max-width: ${_.largeMobile}) {
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
`,$_=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,A_=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,N_=()=>{const e=qi();return V(__,{children:[V(C_,{children:[V(T_,{children:[x(fs,{children:"Engenharia"}),x(fs,{children:"de"}),x(fs,{children:"Computa\xE7\xE3o"})]}),x(O_,{src:m_,alt:"Imagem de Computa\xE7\xE3o"})]}),V(P_,{children:[x(L_,{children:"Carta de Servi\xE7os"}),V(z_,{children:[V(op,{children:[V(ap,{children:[x(Mo,{src:g_,alt:"Imagem Site"}),x(sp,{children:"Desenvolvimento de Websites"})]}),V(lp,{children:[x(Mo,{src:ip,alt:"Seta"}),x(up,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),V(op,{children:[V(ap,{children:[x(Mo,{src:v_,alt:"Imagem Sistemas"}),x(sp,{children:"Desenvolvimento de Sistemas Web"})]}),V(lp,{children:[x(Mo,{src:ip,alt:"Seta"}),x(up,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),V(j_,{children:[x(Gn,{src:x_,alt:"ImagemHtml"}),x(Gn,{src:y_,alt:"Imagemcss"}),x(Gn,{src:w_,alt:"ImagemJS"}),x(Gn,{src:E_,alt:"ImagemTS"}),x(Gn,{src:S_,alt:"ImagemREACT"}),x(Gn,{src:k_,alt:"ImagemStyled"})]})]}),x(A_,{}),x($_,{children:x(R_,{onClick:()=>{e("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),x(D_,{children:x(_v,{carouselData:h_.computingProjects})}),x(M_,{onClick:()=>window.scrollTo(0,0),src:Cv,alt:"ScrollUp"})]})},I_=()=>V(xa,{children:[x(c1,{}),V(Wx,{children:[x(Yn,{path:"/",element:x(tE,{})}),x(Yn,{path:"/computacao",element:x(N_,{})}),x(Yn,{path:"/mecanica",element:x(c_,{})}),x(Yn,{path:"/quemSomos",element:x(mE,{})}),x(Yn,{path:"/contatos",element:x(rk,{})})]}),x(hx,{})]});function F_(){return x("div",{className:"App",children:x(Vx,{basename:"/Site-Serra",children:x(I_,{})})})}ps.createRoot(document.getElementById("root")).render(x(Lr.StrictMode,{children:x(F_,{})}));
