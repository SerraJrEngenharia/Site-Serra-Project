(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Da(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),Lv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Rv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),$v=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),Qc=Symbol.iterator;function Iv(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cp=Object.assign,dp={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=dp,this.updater=n||up}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=Tr.prototype;function Ru(e,t,n){this.props=e,this.context=t,this.refs=dp,this.updater=n||up}var ju=Ru.prototype=new fp;ju.constructor=Ru;cp(ju,Tr.prototype);ju.isPureReactComponent=!0;var qc=Array.isArray,pp=Object.prototype.hasOwnProperty,zu={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)pp.call(t,r)&&!hp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ni,type:e,key:o,ref:l,props:i,_owner:zu.current}}function Fv(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function Hv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gc=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hv(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ni:case Tv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+xl(l,0):r,qc(i)?(n="",e!=null&&(n=e.replace(Gc,"$&/")+"/"),zo(i,t,n,"",function(u){return u})):i!=null&&(Du(i)&&(i=Fv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",qc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+xl(o,a);l+=zo(o,t,n,s,i)}else if(s=Iv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+xl(o,a++),l+=zo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Uv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Do={transition:null},Wv={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Do,ReactCurrentOwner:zu};ue.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Tr;ue.Fragment=Lv;ue.Profiler=Rv;ue.PureComponent=Ru;ue.StrictMode=Mv;ue.Suspense=$v;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=zu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)pp.call(t,s)&&!hp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:zv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jv,_context:e},e.Consumer=e};ue.createElement=mp;ue.createFactory=function(e){var t=mp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Dv,render:e}};ue.isValidElement=Du;ue.lazy=function(e){return{$$typeof:Nv,_payload:{_status:-1,_result:e},_init:Uv}};ue.memo=function(e,t){return{$$typeof:Av,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ue.useContext=function(e){return Ke.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ue.useId=function(){return Ke.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ue.useRef=function(e){return Ke.current.useRef(e)};ue.useState=function(e){return Ke.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ke.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const Lr=Da(K.exports);var fs={},$u={exports:{}},ct={},vp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var U=T.length;T.push(z);e:for(;0<U;){var V=U-1>>>1,H=T[V];if(0<i(H,z))T[V]=z,T[U]=H,U=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],U=T.pop();if(U!==z){T[0]=U;e:for(var V=0,H=T.length,b=H>>>1;V<b;){var q=2*(V+1)-1,F=T[q],L=q+1,J=T[L];if(0>i(F,U))L<H&&0>i(J,F)?(T[V]=J,T[L]=U,V=L):(T[V]=F,T[q]=U,V=q);else if(L<H&&0>i(J,U))T[V]=J,T[L]=U,V=L;else break e}}return z}function i(T,z){var U=T.sortIndex-z.sortIndex;return U!==0?U:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,h=!1,m=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(T){if(y=!1,g(T),!m)if(n(s)!==null)m=!0,G(O);else{var z=n(u);z!==null&&R(x,z.startTime-T)}}function O(T,z){m=!1,y&&(y=!1,v(S),S=-1),h=!0;var U=f;try{for(g(z),c=n(s);c!==null&&(!(c.expirationTime>z)||T&&!D());){var V=c.callback;if(typeof V=="function"){c.callback=null,f=c.priorityLevel;var H=V(c.expirationTime<=z);z=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(s)&&r(s),g(z)}else r(s);c=n(s)}if(c!==null)var b=!0;else{var q=n(u);q!==null&&R(x,q.startTime-z),b=!1}return b}finally{c=null,f=U,h=!1}}var P=!1,E=null,S=-1,M=5,j=-1;function D(){return!(e.unstable_now()-j<M)}function A(){if(E!==null){var T=e.unstable_now();j=T;var z=!0;try{z=E(!0,T)}finally{z?$():(P=!1,E=null)}}else P=!1}var $;if(typeof p=="function")$=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,$=function(){I.postMessage(null)}}else $=function(){k(A,0)};function G(T){E=T,P||(P=!0,$())}function R(T,z){S=k(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,G(O))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var U=f;f=z;try{return T()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=f;f=T;try{return z()}finally{f=U}},e.unstable_scheduleCallback=function(T,z,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,T={id:d++,callback:z,priorityLevel:T,startTime:U,expirationTime:H,sortIndex:-1},U>V?(T.sortIndex=U,t(u,T),n(s)===null&&T===n(u)&&(y?(v(S),S=-1):y=!0,R(x,U-V))):(T.sortIndex=H,t(s,T),m||h||(m=!0,G(O))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var z=f;return function(){var U=f;f=z;try{return T.apply(this,arguments)}finally{f=U}}}})(gp);(function(e){e.exports=gp})(vp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=K.exports,ut=vp.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wp=new Set,mi={};function Wn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(mi[e]=t,e=0;e<t.length;e++)wp.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yc={},Xc={};function Vv(e){return ps.call(Xc,e)?!0:ps.call(Yc,e)?!1:Bv.test(e)?Xc[e]=!0:(Yc[e]=!0,!1)}function Qv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Qv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Au,Nu);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Au,Nu);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Au,Nu);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iu(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qv(t,n,i,r)&&(n=null),r||i===null?Vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),ms=Symbol.for("react.suspense"),vs=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),kp=Symbol.for("react.offscreen"),Kc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Kc&&e[Kc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Sl;function Jr(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var kl=!1;function El(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Gv(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function gs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Xn:return"Portal";case hs:return"Profiler";case Fu:return"StrictMode";case ms:return"Suspense";case vs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uu:return t=e.displayName||null,t!==null?t:gs(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return gs(e(t))}catch{}}return null}function Yv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gs(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xv(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=Xv(e))}function bp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ys(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _p(e,t){t=t.checked,t!=null&&Iu(e,"checked",t,!1)}function ws(e,t){_p(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&xs(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xs(e,t,n){(t!=="number"||qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ed(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Zr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Cp(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function td(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Op(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Kv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function Tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function Lp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,dr=null,fr=null;function nd(e){if(e=Hi(e)){if(typeof Cs!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Fa(t),Cs(e.stateNode,e.type,t))}}function Mp(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Rp(){if(dr){var e=dr,t=fr;if(fr=dr=null,nd(e),t)for(e=0;e<t.length;e++)nd(t[e])}}function jp(e,t){return e(t)}function zp(){}var bl=!1;function Dp(e,t,n){if(bl)return e(t,n);bl=!0;try{return jp(e,t,n)}finally{bl=!1,(dr!==null||fr!==null)&&(zp(),Rp())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Os=!1;if(qt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Os=!1}function Zv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ri=!1,Go=null,Yo=!1,Ps=null,eg={onError:function(e){ri=!0,Go=e}};function tg(e,t,n,r,i,o,l,a,s){ri=!1,Go=null,Zv.apply(eg,arguments)}function ng(e,t,n,r,i,o,l,a,s){if(tg.apply(this,arguments),ri){if(ri){var u=Go;ri=!1,Go=null}else throw Error(B(198));Yo||(Yo=!0,Ps=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rd(e){if(Bn(e)!==e)throw Error(B(188))}function rg(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rd(i),e;if(o===r)return rd(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Ap(e){return e=rg(e),e!==null?Np(e):null}function Np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Np(e);if(t!==null)return t;e=e.sibling}return null}var Ip=ut.unstable_scheduleCallback,id=ut.unstable_cancelCallback,ig=ut.unstable_shouldYield,og=ut.unstable_requestPaint,Ce=ut.unstable_now,ag=ut.unstable_getCurrentPriorityLevel,Bu=ut.unstable_ImmediatePriority,Fp=ut.unstable_UserBlockingPriority,Xo=ut.unstable_NormalPriority,lg=ut.unstable_LowPriority,Hp=ut.unstable_IdlePriority,$a=null,At=null;function sg(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:dg,ug=Math.log,cg=Math.LN2;function dg(e){return e>>>=0,e===0?32:31-(ug(e)/cg|0)|0}var to=64,no=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ei(a):(o&=l,o!==0&&(r=ei(o)))}else l=n&~i,l!==0?r=ei(l):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function fg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=fg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Up(){var e=to;return to<<=1,(to&4194240)===0&&(to=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function hg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Wp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bp,Qu,Vp,Qp,qp,Ls=!1,ro=[],cn=null,dn=null,fn=null,yi=new Map,wi=new Map,on=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function Nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Hi(t),t!==null&&Qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vg(e,t,n,r,i){switch(t){case"focusin":return cn=Nr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Nr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Nr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Nr(yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Nr(wi.get(o)||null,e,t,n,r,i)),!0}return!1}function Gp(e){var t=Tn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,qp(e.priority,function(){Vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_s=r,n.target.dispatchEvent(r),_s=null}else return t=Hi(n),t!==null&&Qu(t),e.blockedOn=n,!1;t.shift()}return!0}function ad(e,t,n){$o(e)&&n.delete(t)}function gg(){Ls=!1,cn!==null&&$o(cn)&&(cn=null),dn!==null&&$o(dn)&&(dn=null),fn!==null&&$o(fn)&&(fn=null),yi.forEach(ad),wi.forEach(ad)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,gg)))}function xi(e){function t(i){return Ir(i,e)}if(0<ro.length){Ir(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Ir(cn,e),dn!==null&&Ir(dn,e),fn!==null&&Ir(fn,e),yi.forEach(t),wi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Gp(n),n.blockedOn===null&&on.shift()}var pr=Kt.ReactCurrentBatchConfig,Jo=!0;function yg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=1,qu(e,t,n,r)}finally{fe=i,pr.transition=o}}function wg(e,t,n,r){var i=fe,o=pr.transition;pr.transition=null;try{fe=4,qu(e,t,n,r)}finally{fe=i,pr.transition=o}}function qu(e,t,n,r){if(Jo){var i=Ms(e,t,n,r);if(i===null)Dl(e,t,r,Zo,n),od(e,r);else if(vg(i,e,t,n,r))r.stopPropagation();else if(od(e,r),t&4&&-1<mg.indexOf(e)){for(;i!==null;){var o=Hi(i);if(o!==null&&Bp(o),o=Ms(e,t,n,r),o===null&&Dl(e,t,r,Zo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Zo=null;function Ms(e,t,n,r){if(Zo=null,e=Wu(r),e=Tn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zo=e,null}function Yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case Bu:return 1;case Fp:return 4;case Xo:case lg:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var ln=null,Gu=null,Ao=null;function Xp(){if(Ao)return Ao;var e,t=Gu,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function ld(){return!1}function dt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?io:ld,this.isPropagationStopped=ld,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=dt(Mr),Fi=be({},Mr,{view:0,detail:0}),xg=dt(Fi),Cl,Ol,Fr,Aa=be({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Cl=e.screenX-Fr.screenX,Ol=e.screenY-Fr.screenY):Ol=Cl=0,Fr=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),sd=dt(Aa),Sg=be({},Aa,{dataTransfer:0}),kg=dt(Sg),Eg=be({},Fi,{relatedTarget:0}),Pl=dt(Eg),bg=be({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=dt(bg),Cg=be({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Og=dt(Cg),Pg=be({},Mr,{data:0}),ud=dt(Pg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mg[e])?!!t[e]:!1}function Xu(){return Rg}var jg=be({},Fi,{key:function(e){if(e.key){var t=Tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=dt(jg),Dg=be({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=dt(Dg),$g=be({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Ag=dt($g),Ng=be({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=dt(Ng),Fg=be({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=dt(Fg),Ug=[9,13,27,32],Ku=qt&&"CompositionEvent"in window,ii=null;qt&&"documentMode"in document&&(ii=document.documentMode);var Wg=qt&&"TextEvent"in window&&!ii,Kp=qt&&(!Ku||ii&&8<ii&&11>=ii),dd=String.fromCharCode(32),fd=!1;function Jp(e,t){switch(e){case"keyup":return Ug.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Bg(e,t){switch(e){case"compositionend":return Zp(t);case"keypress":return t.which!==32?null:(fd=!0,dd);case"textInput":return e=t.data,e===dd&&fd?null:e;default:return null}}function Vg(e,t){if(Jn)return e==="compositionend"||!Ku&&Jp(e,t)?(e=Xp(),Ao=Gu=ln=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kp&&t.locale!=="ko"?null:t.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qg[e.type]:t==="textarea"}function eh(e,t,n,r){Mp(r),t=ea(t,"onChange"),0<t.length&&(n=new Yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,Si=null;function qg(e){dh(e,0)}function Na(e){var t=tr(e);if(bp(t))return e}function Gg(e,t){if(e==="change")return t}var th=!1;if(qt){var Tl;if(qt){var Ll="oninput"in document;if(!Ll){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),Ll=typeof hd.oninput=="function"}Tl=Ll}else Tl=!1;th=Tl&&(!document.documentMode||9<document.documentMode)}function md(){oi&&(oi.detachEvent("onpropertychange",nh),Si=oi=null)}function nh(e){if(e.propertyName==="value"&&Na(Si)){var t=[];eh(t,Si,e,Wu(e)),Dp(qg,t)}}function Yg(e,t,n){e==="focusin"?(md(),oi=t,Si=n,oi.attachEvent("onpropertychange",nh)):e==="focusout"&&md()}function Xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(Si)}function Kg(e,t){if(e==="click")return Na(t)}function Jg(e,t){if(e==="input"||e==="change")return Na(t)}function Zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Zg;function ki(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ps.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gd(e,t){var n=vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vd(n)}}function rh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ih(){for(var e=window,t=qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qo(e.document)}return t}function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e0(e){var t=ih(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rh(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=gd(n,o);var l=gd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t0=qt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Rs=null,ai=null,js=!1;function yd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;js||Zn==null||Zn!==qo(r)||(r=Zn,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&ki(ai,r)||(ai=r,r=ea(Rs,"onSelect"),0<r.length&&(t=new Yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Ml={},oh={};qt&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ia(e){if(Ml[e])return Ml[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oh)return Ml[e]=t[n];return e}var ah=Ia("animationend"),lh=Ia("animationiteration"),sh=Ia("animationstart"),uh=Ia("transitionend"),ch=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){ch.set(e,t),Wn(t,[e])}for(var Rl=0;Rl<wd.length;Rl++){var jl=wd[Rl],n0=jl.toLowerCase(),r0=jl[0].toUpperCase()+jl.slice(1);kn(n0,"on"+r0)}kn(ah,"onAnimationEnd");kn(lh,"onAnimationIteration");kn(sh,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(uh,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function xd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ng(r,t,void 0,e),e.currentTarget=null}function dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;xd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;xd(i,a,u),o=s}}}if(Yo)throw e=Ps,Yo=!1,Ps=null,e}function ge(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||(fh(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),fh(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[ao]){e[ao]=!0,wp.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,zl("selectionchange",!1,t))}}function fh(e,t,n,r){switch(Yp(t)){case 1:var i=yg;break;case 4:i=wg;break;default:i=qu}n=i.bind(null,t,n,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Dp(function(){var u=o,d=Wu(n),c=[];e:{var f=ch.get(e);if(f!==void 0){var h=Yu,m=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":h=zg;break;case"focusin":m="focus",h=Pl;break;case"focusout":m="blur",h=Pl;break;case"beforeblur":case"afterblur":h=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ag;break;case ah:case lh:case sh:h=_g;break;case uh:h=Ig;break;case"scroll":h=xg;break;case"wheel":h=Hg;break;case"copy":case"cut":case"paste":h=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=cd}var y=(t&4)!==0,k=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,v!==null&&(x=gi(p,v),x!=null&&y.push(bi(p,x,g)))),k)break;p=p.return}0<y.length&&(f=new h(f,m,null,n,d),c.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==_s&&(m=n.relatedTarget||n.fromElement)&&(Tn(m)||m[Gt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Tn(m):null,m!==null&&(k=Bn(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=sd,x="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=cd,x="onPointerLeave",v="onPointerEnter",p="pointer"),k=h==null?f:tr(h),g=m==null?f:tr(m),f=new y(x,p+"leave",h,n,d),f.target=k,f.relatedTarget=g,x=null,Tn(d)===u&&(y=new y(v,p+"enter",m,n,d),y.target=g,y.relatedTarget=k,x=y),k=x,h&&m)t:{for(y=h,v=m,p=0,g=y;g;g=qn(g))p++;for(g=0,x=v;x;x=qn(x))g++;for(;0<p-g;)y=qn(y),p--;for(;0<g-p;)v=qn(v),g--;for(;p--;){if(y===v||v!==null&&y===v.alternate)break t;y=qn(y),v=qn(v)}y=null}else y=null;h!==null&&Sd(c,f,h,y,!1),m!==null&&k!==null&&Sd(c,k,m,y,!0)}}e:{if(f=u?tr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var O=Gg;else if(pd(f))if(th)O=Jg;else{O=Xg;var P=Yg}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=Kg);if(O&&(O=O(e,u))){eh(c,O,n,d);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&xs(f,"number",f.value)}switch(P=u?tr(u):window,e){case"focusin":(pd(P)||P.contentEditable==="true")&&(Zn=P,Rs=u,ai=null);break;case"focusout":ai=Rs=Zn=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,yd(c,n,d);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":yd(c,n,d)}var E;if(Ku)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Jn?Jp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Kp&&n.locale!=="ko"&&(Jn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Jn&&(E=Xp()):(ln=d,Gu="value"in ln?ln.value:ln.textContent,Jn=!0)),P=ea(u,S),0<P.length&&(S=new ud(S,e,null,n,d),c.push({event:S,listeners:P}),E?S.data=E:(E=Zp(n),E!==null&&(S.data=E)))),(E=Wg?Bg(e,n):Vg(e,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(d=new ud("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=E))}dh(c,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gi(e,n),o!=null&&r.unshift(bi(e,o,i)),o=gi(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=gi(n,o),s!=null&&l.unshift(bi(n,s,a))):i||(s=gi(n,o),s!=null&&l.push(bi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(a0,"")}function lo(e,t,n){if(t=kd(t),kd(e)!==t&&n)throw Error(B(425))}function ta(){}var zs=null,Ds=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Ed=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ed<"u"?function(e){return Ed.resolve(null).then(e).catch(u0)}:As;function u0(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Rr,_i="__reactProps$"+Rr,Gt="__reactContainer$"+Rr,Ns="__reactEvents$"+Rr,c0="__reactListeners$"+Rr,d0="__reactHandles$"+Rr;function Tn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bd(e);e!==null;){if(n=e[$t])return n;e=bd(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[$t]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Fa(e){return e[_i]||null}var Is=[],nr=-1;function En(e){return{current:e}}function ye(e){0>nr||(e.current=Is[nr],Is[nr]=null,nr--)}function me(e,t){nr++,Is[nr]=e.current,e.current=t}var Sn={},qe=En(Sn),nt=En(!1),An=Sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function na(){ye(nt),ye(qe)}function _d(e,t,n){if(qe.current!==Sn)throw Error(B(168));me(qe,t),me(nt,n)}function ph(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Yv(e)||"Unknown",i));return be({},n,r)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,An=qe.current,me(qe,e),me(nt,nt.current),!0}function Cd(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=ph(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(qe),me(qe,e)):ye(nt),me(nt,n)}var Ut=null,Ha=!1,Al=!1;function hh(e){Ut===null?Ut=[e]:Ut.push(e)}function f0(e){Ha=!0,hh(e)}function bn(){if(!Al&&Ut!==null){Al=!0;var e=0,t=fe;try{var n=Ut;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ha=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Ip(Bu,bn),i}finally{fe=t,Al=!1}}return null}var rr=[],ir=0,ia=null,oa=0,ht=[],mt=0,Nn=null,Wt=1,Bt="";function Cn(e,t){rr[ir++]=oa,rr[ir++]=ia,ia=e,oa=t}function mh(e,t,n){ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Nn=e;var r=Wt;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function Zu(e){e.return!==null&&(Cn(e,1),mh(e,1,0))}function ec(e){for(;e===ia;)ia=rr[--ir],rr[ir]=null,oa=rr[--ir],rr[ir]=null;for(;e===Nn;)Nn=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Wt=ht[--mt],ht[mt]=null}var st=null,lt=null,xe=!1,_t=null;function vh(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function Fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(xe){var t=lt;if(t){var n=t;if(!Od(e,t)){if(Fs(e))throw Error(B(418));t=pn(n.nextSibling);var r=st;t&&Od(e,t)?vh(r,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(Fs(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function so(e){if(e!==st)return!1;if(!xe)return Pd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=lt)){if(Fs(e))throw gh(),Error(B(418));for(;t;)vh(e,t),t=pn(t.nextSibling)}if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?pn(e.stateNode.nextSibling):null;return!0}function gh(){for(var e=lt;e;)e=pn(e.nextSibling)}function wr(){lt=st=null,xe=!1}function tc(e){_t===null?_t=[e]:_t.push(e)}var p0=Kt.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var aa=En(null),la=null,or=null,nc=null;function rc(){nc=or=la=null}function ic(e){var t=aa.current;ye(aa),e._currentValue=t}function Us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){la=e,nc=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(la===null)throw Error(B(308));or=e,la.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Ln=null;function oc(e){Ln===null?Ln=[e]:Ln.push(e)}function yh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,oc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}function Td(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sa(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(h,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,c,f):m,f==null)break e;c=be({},c,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,s=c):d=d.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=c}}function Ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var xh=new yp.Component().refs;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=vn(e),o=Qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Pt(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=vn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(Pt(t,e,r,n),Io(t,e,r))}};function Md(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function Sh(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=rt(t)?An:qe.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ua.enqueueReplaceState(t,t.state,null)}function Bs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xh,ac(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=rt(t)?An:qe.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ws(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ua.enqueueReplaceState(i,i.state,null),sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===xh&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jd(e){var t=e._init;return t(e._payload)}function kh(e){function t(v,p){if(e){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=gn(v,p),v.index=0,v.sibling=null,v}function o(v,p,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,x){return p===null||p.tag!==6?(p=Bl(g,v.mode,x),p.return=v,p):(p=i(p,g),p.return=v,p)}function s(v,p,g,x){var O=g.type;return O===Kn?d(v,p,g.props.children,x,g.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&jd(O)===p.type)?(x=i(p,g.props),x.ref=Hr(v,p,g),x.return=v,x):(x=Vo(g.type,g.key,g.props,null,v.mode,x),x.ref=Hr(v,p,g),x.return=v,x)}function u(v,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Vl(g,v.mode,x),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function d(v,p,g,x,O){return p===null||p.tag!==7?(p=zn(g,v.mode,x,O),p.return=v,p):(p=i(p,g),p.return=v,p)}function c(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bl(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ji:return g=Vo(p.type,p.key,p.props,null,v.mode,g),g.ref=Hr(v,null,p),g.return=v,g;case Xn:return p=Vl(p,v.mode,g),p.return=v,p;case tn:var x=p._init;return c(v,x(p._payload),g)}if(Zr(p)||$r(p))return p=zn(p,v.mode,g,null),p.return=v,p;uo(v,p)}return null}function f(v,p,g,x){var O=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:a(v,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:return g.key===O?s(v,p,g,x):null;case Xn:return g.key===O?u(v,p,g,x):null;case tn:return O=g._init,f(v,p,O(g._payload),x)}if(Zr(g)||$r(g))return O!==null?null:d(v,p,g,x,null);uo(v,g)}return null}function h(v,p,g,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(g)||null,a(p,v,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ji:return v=v.get(x.key===null?g:x.key)||null,s(p,v,x,O);case Xn:return v=v.get(x.key===null?g:x.key)||null,u(p,v,x,O);case tn:var P=x._init;return h(v,p,g,P(x._payload),O)}if(Zr(x)||$r(x))return v=v.get(g)||null,d(p,v,x,O,null);uo(p,x)}return null}function m(v,p,g,x){for(var O=null,P=null,E=p,S=p=0,M=null;E!==null&&S<g.length;S++){E.index>S?(M=E,E=null):M=E.sibling;var j=f(v,E,g[S],x);if(j===null){E===null&&(E=M);break}e&&E&&j.alternate===null&&t(v,E),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j,E=M}if(S===g.length)return n(v,E),xe&&Cn(v,S),O;if(E===null){for(;S<g.length;S++)E=c(v,g[S],x),E!==null&&(p=o(E,p,S),P===null?O=E:P.sibling=E,P=E);return xe&&Cn(v,S),O}for(E=r(v,E);S<g.length;S++)M=h(E,v,S,g[S],x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?S:M.key),p=o(M,p,S),P===null?O=M:P.sibling=M,P=M);return e&&E.forEach(function(D){return t(v,D)}),xe&&Cn(v,S),O}function y(v,p,g,x){var O=$r(g);if(typeof O!="function")throw Error(B(150));if(g=O.call(g),g==null)throw Error(B(151));for(var P=O=null,E=p,S=p=0,M=null,j=g.next();E!==null&&!j.done;S++,j=g.next()){E.index>S?(M=E,E=null):M=E.sibling;var D=f(v,E,j.value,x);if(D===null){E===null&&(E=M);break}e&&E&&D.alternate===null&&t(v,E),p=o(D,p,S),P===null?O=D:P.sibling=D,P=D,E=M}if(j.done)return n(v,E),xe&&Cn(v,S),O;if(E===null){for(;!j.done;S++,j=g.next())j=c(v,j.value,x),j!==null&&(p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return xe&&Cn(v,S),O}for(E=r(v,E);!j.done;S++,j=g.next())j=h(E,v,S,j.value,x),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?S:j.key),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return e&&E.forEach(function(A){return t(v,A)}),xe&&Cn(v,S),O}function k(v,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:e:{for(var O=g.key,P=p;P!==null;){if(P.key===O){if(O=g.type,O===Kn){if(P.tag===7){n(v,P.sibling),p=i(P,g.props.children),p.return=v,v=p;break e}}else if(P.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===tn&&jd(O)===P.type){n(v,P.sibling),p=i(P,g.props),p.ref=Hr(v,P,g),p.return=v,v=p;break e}n(v,P);break}else t(v,P);P=P.sibling}g.type===Kn?(p=zn(g.props.children,v.mode,x,g.key),p.return=v,v=p):(x=Vo(g.type,g.key,g.props,null,v.mode,x),x.ref=Hr(v,p,g),x.return=v,v=x)}return l(v);case Xn:e:{for(P=g.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Vl(g,v.mode,x),p.return=v,v=p}return l(v);case tn:return P=g._init,k(v,p,P(g._payload),x)}if(Zr(g))return m(v,p,g,x);if($r(g))return y(v,p,g,x);uo(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=Bl(g,v.mode,x),p.return=v,v=p),l(v)):n(v,p)}return k}var xr=kh(!0),Eh=kh(!1),Ui={},Nt=En(Ui),Ci=En(Ui),Oi=En(Ui);function Mn(e){if(e===Ui)throw Error(B(174));return e}function lc(e,t){switch(me(Oi,t),me(Ci,e),me(Nt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}ye(Nt),me(Nt,t)}function Sr(){ye(Nt),ye(Ci),ye(Oi)}function bh(e){Mn(Oi.current);var t=Mn(Nt.current),n=ks(t,e.type);t!==n&&(me(Ci,e),me(Nt,n))}function sc(e){Ci.current===e&&(ye(Nt),ye(Ci))}var ke=En(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function uc(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Fo=Kt.ReactCurrentDispatcher,Il=Kt.ReactCurrentBatchConfig,In=0,Ee=null,Re=null,De=null,ca=!1,li=!1,Pi=0,h0=0;function Ue(){throw Error(B(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function dc(e,t,n,r,i,o){if(In=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?y0:w0,e=n(r,i),li){o=0;do{if(li=!1,Pi=0,25<=o)throw Error(B(301));o+=1,De=Re=null,t.updateQueue=null,Fo.current=x0,e=n(r,i)}while(li)}if(Fo.current=da,t=Re!==null&&Re.next!==null,In=0,De=Re=Ee=null,ca=!1,t)throw Error(B(300));return e}function fc(){var e=Pi!==0;return Pi=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function wt(){if(Re===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=De===null?Ee.memoizedState:De.next;if(t!==null)De=t,Re=e;else{if(e===null)throw Error(B(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function Ti(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((In&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,Ee.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Lt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _h(){}function Ch(e,t){var n=Ee,r=wt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,pc(Th.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Li(9,Ph.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(B(349));(In&30)!==0||Oh(n,t,i)}return i}function Oh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ph(e,t,n,r){t.value=n,t.getSnapshot=r,Lh(t)&&Mh(e)}function Th(e,t,n){return n(function(){Lh(t)&&Mh(e)})}function Lh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Mh(e){var t=Yt(e,1);t!==null&&Pt(t,e,1,-1)}function zd(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=g0.bind(null,Ee,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rh(){return wt().memoizedState}function Ho(e,t,n,r){var i=Dt();Ee.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Wa(e,t,n,r){var i=wt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&cc(r,l.deps)){i.memoizedState=Li(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Li(1|t,n,o,r)}function Dd(e,t){return Ho(8390656,8,e,t)}function pc(e,t){return Wa(2048,8,e,t)}function jh(e,t){return Wa(4,2,e,t)}function zh(e,t){return Wa(4,4,e,t)}function Dh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4,4,Dh.bind(null,t,e),n)}function hc(){}function Ah(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ih(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Lt(n,t)||(n=Up(),Ee.lanes|=n,Fn|=n,e.baseState=!0),t)}function m0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{fe=n,Il.transition=r}}function Fh(){return wt().memoizedState}function v0(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hh(e))Uh(t,n);else if(n=yh(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),Wh(n,t,r)}}function g0(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))Uh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,l)){var s=t.interleaved;s===null?(i.next=i,oc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=yh(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),Wh(n,t,r))}}function Hh(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Uh(e,t){li=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vu(e,n)}}var da={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},y0={readContext:yt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,Dh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v0.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:hc,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=m0.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Dt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),$e===null)throw Error(B(349));(In&30)!==0||Oh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dd(Th.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,Ph.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Dt(),t=$e.identifierPrefix;if(xe){var n=Bt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w0={readContext:yt,useCallback:Ah,useContext:yt,useEffect:pc,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:zh,useMemo:Nh,useReducer:Fl,useRef:Rh,useState:function(){return Fl(Ti)},useDebugValue:hc,useDeferredValue:function(e){var t=wt();return Ih(t,Re.memoizedState,e)},useTransition:function(){var e=Fl(Ti)[0],t=wt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Ch,useId:Fh,unstable_isNewReconciler:!1},x0={readContext:yt,useCallback:Ah,useContext:yt,useEffect:pc,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:zh,useMemo:Nh,useReducer:Hl,useRef:Rh,useState:function(){return Hl(Ti)},useDebugValue:hc,useDeferredValue:function(e){var t=wt();return Re===null?t.memoizedState=e:Ih(t,Re.memoizedState,e)},useTransition:function(){var e=Hl(Ti)[0],t=wt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Ch,useId:Fh,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=Gv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function Bh(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,tu=r),Vs(e,t)},n}function Vh(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vs(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function Ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var k0=Kt.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?Eh(t,null,n,r):xr(t,e.child,n,r)}function Id(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=dc(e,t,n,r,o,i),n=fc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&n&&Zu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Fd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qh(e,t,o,r,i)):(e=Vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Qs(e,t,n,r,i)}function qh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(lr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(lr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(lr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(lr,at),at|=r;return Ye(e,t,i,n),t.child}function Gh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,i){var o=rt(n)?An:qe.current;return o=yr(t,o),hr(t,i),n=dc(e,t,n,r,o,i),r=fc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&r&&Zu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Hd(e,t,n,r,i){if(rt(n)){var o=!0;ra(t)}else o=!1;if(hr(t,i),t.stateNode===null)Uo(e,t),Sh(t,n,r),Bs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=rt(n)?An:qe.current,u=yr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Rd(t,l,r,u),nn=!1;var f=t.memoizedState;l.state=f,sa(t,r,l,i),s=t.memoizedState,a!==r||f!==s||nt.current||nn?(typeof d=="function"&&(Ws(t,n,d,r),s=t.memoizedState),(a=nn||Md(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,wh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:kt(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=rt(n)?An:qe.current,s=yr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Rd(t,l,r,s),nn=!1,f=t.memoizedState,l.state=f,sa(t,r,l,i);var m=t.memoizedState;a!==c||f!==m||nt.current||nn?(typeof h=="function"&&(Ws(t,n,h,r),m=t.memoizedState),(u=nn||Md(t,n,u,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,o,i)}function qs(e,t,n,r,i,o){Gh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Cd(t,n,!1),Xt(e,t,o);r=t.stateNode,k0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&Cd(t,n,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),lc(e,t.containerInfo)}function Ud(e,t,n,r,i){return wr(),tc(i),t.flags|=256,Ye(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xh(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(ke,i&1),e===null)return Hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Qa(l,r,0,null),e=zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ys(n),t.memoizedState=Gs,e):mc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return E0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=zn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ys(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mc(e,t){return t=Qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&tc(r),xr(t,e.child,null,n),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(B(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qa({mode:"visible",children:r.children},i,0,null),o=zn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&xr(t,e.child,null,l),t.child.memoizedState=Ys(l),t.memoizedState=Gs,o);if((t.mode&1)===0)return co(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Ul(o,r,void 0),co(e,t,l,r)}if(a=(l&e.childLanes)!==0,tt||a){if(r=$e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Pt(r,e,i,-1))}return Sc(),r=Ul(Error(B(421))),co(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=pn(i.nextSibling),st=t,xe=!0,_t=null,e!==null&&(ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=Nn,Wt=e.id,Bt=e.overflow,Nn=t),t=mc(t,r.children),t.flags|=4096,t)}function Wd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Us(e.return,t,n)}function Wl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wd(e,n,t);else if(e.tag===19)Wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t,n){switch(t.tag){case 3:Yh(t),wr();break;case 5:bh(t);break;case 1:rt(t.type)&&ra(t);break;case 4:lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xh(e,t,n):(me(ke,ke.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Kh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,qh(e,t,n)}return Xt(e,t,n)}var Jh,Xs,Zh,em;Jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xs=function(){};Zh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mn(Nt.current);var o=null;switch(n){case"input":i=ys(e,i),r=ys(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=Ss(e,i),r=Ss(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}Es(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};em=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _0(e,t,n){var r=t.pendingProps;switch(ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&na(),We(t),null;case 3:return r=t.stateNode,Sr(),ye(nt),ye(qe),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(iu(_t),_t=null))),Xs(e,t),We(t),null;case 5:sc(t);var i=Mn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Zh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Mn(Nt.current),so(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[_i]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Jc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":ed(r,o),ge("invalid",r)}Es(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",""+a]):mi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":Zi(r),Zc(r,o,!0);break;case"textarea":Zi(r),td(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ta)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Op(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[$t]=t,e[_i]=r,Jh(e,t,!1,!1),t.stateNode=e;e:{switch(l=bs(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)ge(ti[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Jc(e,r),i=ys(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ed(e,r),i=Ss(e,r),ge("invalid",e);break;default:i=r}Es(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Lp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vi(e,s):typeof s=="number"&&vi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&Iu(e,o,s,l))}switch(n){case"input":Zi(e),Zc(e,r,!1);break;case"textarea":Zi(e),td(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)em(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Mn(Oi.current),Mn(Nt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return We(t),null;case 13:if(ye(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gh(),wr(),t.flags|=98560,o=!1;else if(o=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[$t]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else _t!==null&&(iu(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?je===0&&(je=3):Sc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Sr(),Xs(e,t),e===null&&Ei(t.stateNode.containerInfo),We(t),null;case 10:return ic(t.type._context),We(t),null;case 17:return rt(t.type)&&na(),We(t),null;case 19:if(ye(ke),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ur(o,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ua(e),l!==null){for(t.flags|=128,Ur(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>Er&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Ce()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function C0(e,t){switch(ec(t),t.tag){case 1:return rt(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ye(nt),ye(qe),uc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return sc(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Sr(),null;case 10:return ic(t.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var fo=!1,Qe=!1,O0=typeof WeakSet=="function"?WeakSet:Set,X=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Ks(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Bd=!1;function P0(e,t){if(zs=Jo,e=ih(),Ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++d===r&&(s=l),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ds={focusedElem:e,selectionRange:n},Jo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,k=m.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:kt(t.type,y),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){_e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return m=Bd,Bd=!1,m}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ks(t,n,o)}i=i.next}while(i!==r)}}function Ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Js(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tm(e){var t=e.alternate;t!==null&&(e.alternate=null,tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[_i],delete t[Ns],delete t[c0],delete t[d0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nm(e){return e.tag===5||e.tag===3||e.tag===4}function Vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(Zs(e,t,n),e=e.sibling;e!==null;)Zs(e,t,n),e=e.sibling}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}var Ie=null,bt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)rm(e,t,n),n=n.sibling}function rm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Qe||ar(n,t);case 6:var r=Ie,i=bt;Ie=null,Zt(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),xi(e)):$l(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,Zt(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Ks(n,t,l),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Qe&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Zt(e,t,n),Qe=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Qd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O0),t.forEach(function(r){var i=A0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));rm(o,l,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)im(t,e),t=t.sibling}function im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),zt(e),r&4){try{si(3,e,e.return),Ba(3,e)}catch(y){_e(e,e.return,y)}try{si(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:xt(t,e),zt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(xt(t,e),zt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_p(i,o),bs(a,l);var u=bs(a,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?Lp(i,c):d==="dangerouslySetInnerHTML"?Pp(i,c):d==="children"?vi(i,c):Iu(i,d,c,u)}switch(a){case"input":ws(i,o);break;case"textarea":Cp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?cr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(xt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(xt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:xt(t,e),zt(e);break;case 13:xt(t,e),zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=Ce())),r&4&&Qd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(u=Qe)||d,xt(t,e),Qe=u):xt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:ar(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){Gd(c);continue}}h!==null?(h.return=f,X=h):Gd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Tp("display",l))}catch(y){_e(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xt(t,e),zt(e),r&4&&Qd(e);break;case 21:break;default:xt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nm(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var o=Vd(e);eu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Vd(e);Zs(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T0(e,t,n){X=e,om(e)}function om(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||fo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Qe;a=fo;var u=Qe;if(fo=l,(Qe=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?Yd(i):s!==null?(s.return=l,X=s):Yd(i);for(;o!==null;)X=o,om(o),o=o.sibling;X=i,fo=a,Qe=u}qd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):qd(e)}}function qd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ld(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ld(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Qe||t.flags&512&&Js(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Gd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Yd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ba(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Js(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Js(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var L0=Math.ceil,fa=Kt.ReactCurrentDispatcher,vc=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,de=0,$e=null,Le=null,Fe=0,at=0,lr=En(0),je=0,Mi=null,Fn=0,Va=0,gc=0,ui=null,et=null,yc=0,Er=1/0,Ht=null,pa=!1,tu=null,mn=null,po=!1,sn=null,ha=0,ci=0,nu=null,Wo=-1,Bo=0;function Xe(){return(de&6)!==0?Ce():Wo!==-1?Wo:Wo=Ce()}function vn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:p0.transition!==null?(Bo===0&&(Bo=Up()),Bo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Yp(e.type)),e)}function Pt(e,t,n,r){if(50<ci)throw ci=0,nu=null,Error(B(185));Ii(e,n,r),((de&2)===0||e!==$e)&&(e===$e&&((de&2)===0&&(Va|=n),je===4&&an(e,Fe)),it(e,r),n===1&&de===0&&(t.mode&1)===0&&(Er=Ce()+500,Ha&&bn()))}function it(e,t){var n=e.callbackNode;pg(e,t);var r=Ko(e,e===$e?Fe:0);if(r===0)n!==null&&id(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&id(n),t===1)e.tag===0?f0(Xd.bind(null,e)):hh(Xd.bind(null,e)),s0(function(){(de&6)===0&&bn()}),n=null;else{switch(Wp(r)){case 1:n=Bu;break;case 4:n=Fp;break;case 16:n=Xo;break;case 536870912:n=Hp;break;default:n=Xo}n=pm(n,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function am(e,t){if(Wo=-1,Bo=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Ko(e,e===$e?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ma(e,r);else{t=r;var i=de;de|=2;var o=sm();($e!==e||Fe!==t)&&(Ht=null,Er=Ce()+500,jn(e,t));do try{j0();break}catch(a){lm(e,a)}while(1);rc(),fa.current=o,de=i,Le!==null?t=0:($e=null,Fe=0,t=je)}if(t!==0){if(t===2&&(i=Ts(e),i!==0&&(r=i,t=ru(e,i))),t===1)throw n=Mi,jn(e,0),an(e,r),it(e,Ce()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,(r&30)===0&&!M0(i)&&(t=ma(e,r),t===2&&(o=Ts(e),o!==0&&(r=o,t=ru(e,o))),t===1))throw n=Mi,jn(e,0),an(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:On(e,et,Ht);break;case 3:if(an(e,r),(r&130023424)===r&&(t=yc+500-Ce(),10<t)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=As(On.bind(null,e,et,Ht),t);break}On(e,et,Ht);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L0(r/1960))-r,10<r){e.timeoutHandle=As(On.bind(null,e,et,Ht),r);break}On(e,et,Ht);break;case 5:On(e,et,Ht);break;default:throw Error(B(329))}}}return it(e,Ce()),e.callbackNode===n?am.bind(null,e):null}function ru(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=ma(e,t),e!==2&&(t=et,et=n,t!==null&&iu(t)),e}function iu(e){et===null?et=e:et.push.apply(et,e)}function M0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~gc,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Xd(e){if((de&6)!==0)throw Error(B(327));mr();var t=Ko(e,0);if((t&1)===0)return it(e,Ce()),null;var n=ma(e,t);if(e.tag!==0&&n===2){var r=Ts(e);r!==0&&(t=r,n=ru(e,r))}if(n===1)throw n=Mi,jn(e,0),an(e,t),it(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,et,Ht),it(e,Ce()),null}function wc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Er=Ce()+500,Ha&&bn())}}function Hn(e){sn!==null&&sn.tag===0&&(de&6)===0&&mr();var t=de;de|=1;var n=gt.transition,r=fe;try{if(gt.transition=null,fe=1,e)return e()}finally{fe=r,gt.transition=n,de=t,(de&6)===0&&bn()}}function xc(){at=lr.current,ye(lr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l0(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:Sr(),ye(nt),ye(qe),uc();break;case 5:sc(r);break;case 4:Sr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:ic(r.type._context);break;case 22:case 23:xc()}n=n.return}if($e=e,Le=e=gn(e.current,null),Fe=at=t,je=0,Mi=null,gc=Va=Fn=0,et=ui=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ln=null}return e}function lm(e,t){do{var n=Le;try{if(rc(),Fo.current=da,ca){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(In=0,De=Re=Ee=null,li=!1,Pi=0,vc.current=null,n===null||n.return===null){je=1,Mi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Ad(l);if(h!==null){h.flags&=-257,Nd(h,l,a,o,t),h.mode&1&&$d(o,u,t),t=h,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if((t&1)===0){$d(o,u,t),Sc();break e}s=Error(B(426))}}else if(xe&&a.mode&1){var k=Ad(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Nd(k,l,a,o,t),tc(kr(s,a));break e}}o=s=kr(s,a),je!==4&&(je=2),ui===null?ui=[o]:ui.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Bh(o,s,t);Td(o,v);break e;case 1:a=s;var p=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Vh(o,a,t);Td(o,x);break e}}o=o.return}while(o!==null)}cm(n)}catch(O){t=O,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function sm(){var e=fa.current;return fa.current=da,e===null?da:e}function Sc(){(je===0||je===3||je===2)&&(je=4),$e===null||(Fn&268435455)===0&&(Va&268435455)===0||an($e,Fe)}function ma(e,t){var n=de;de|=2;var r=sm();($e!==e||Fe!==t)&&(Ht=null,jn(e,t));do try{R0();break}catch(i){lm(e,i)}while(1);if(rc(),de=n,fa.current=r,Le!==null)throw Error(B(261));return $e=null,Fe=0,je}function R0(){for(;Le!==null;)um(Le)}function j0(){for(;Le!==null&&!ig();)um(Le)}function um(e){var t=fm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?cm(e):Le=t,vc.current=null}function cm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=_0(n,t,at),n!==null){Le=n;return}}else{if(n=C0(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);je===0&&(je=5)}function On(e,t,n){var r=fe,i=gt.transition;try{gt.transition=null,fe=1,z0(e,t,n,r)}finally{gt.transition=i,fe=r}return null}function z0(e,t,n,r){do mr();while(sn!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hg(e,o),e===$e&&(Le=$e=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||po||(po=!0,pm(Xo,function(){return mr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var l=fe;fe=1;var a=de;de|=4,vc.current=null,P0(e,n),im(n,e),e0(Ds),Jo=!!zs,Ds=zs=null,e.current=n,T0(n),og(),de=a,fe=l,gt.transition=o}else e.current=n;if(po&&(po=!1,sn=e,ha=i),o=e.pendingLanes,o===0&&(mn=null),sg(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=tu,tu=null,e;return(ha&1)!==0&&e.tag!==0&&mr(),o=e.pendingLanes,(o&1)!==0?e===nu?ci++:(ci=0,nu=e):ci=0,bn(),null}function mr(){if(sn!==null){var e=Wp(ha),t=gt.transition,n=fe;try{if(gt.transition=null,fe=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,ha=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:si(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,h=d.return;if(tm(d),d===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,X=v;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,X=g;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ba(9,a)}}catch(O){_e(a,a.return,O)}if(a===l){X=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break e}X=a.return}}if(de=i,bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{fe=n,gt.transition=t}}return!1}function Kd(e,t,n){t=kr(n,t),t=Bh(e,t,1),e=hn(e,t,1),t=Xe(),e!==null&&(Ii(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Kd(e,e,n);else for(;t!==null;){if(t.tag===3){Kd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=kr(n,e),e=Vh(t,e,1),t=hn(t,e,1),e=Xe(),t!==null&&(Ii(t,1,e),it(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Fe&n)===n&&(je===4||je===3&&(Fe&130023424)===Fe&&500>Ce()-yc?jn(e,0):gc|=n),it(e,t)}function dm(e,t){t===0&&((e.mode&1)===0?t=1:(t=no,no<<=1,(no&130023424)===0&&(no=4194304)));var n=Xe();e=Yt(e,t),e!==null&&(Ii(e,t,n),it(e,n))}function $0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dm(e,n)}function A0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),dm(e,n)}var fm;fm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,b0(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,xe&&(t.flags&1048576)!==0&&mh(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var i=yr(t,qe.current);hr(t,n),i=dc(null,t,r,e,i,n);var o=fc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ac(t),i.updater=Ua,t.stateNode=i,i._reactInternals=t,Bs(t,r,e,n),t=qs(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Zu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=I0(r),e=kt(r,e),i){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=Hd(null,t,r,e,n);break e;case 11:t=Id(null,t,r,e,n);break e;case 14:t=Fd(null,t,r,kt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Qs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Hd(e,t,r,i,n);case 3:e:{if(Yh(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wh(e,t),sa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(B(423)),t),t=Ud(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(B(424)),t),t=Ud(e,t,r,n,i);break e}else for(lt=pn(t.stateNode.containerInfo.firstChild),st=t,xe=!0,_t=null,n=Eh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return bh(t),e===null&&Hs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,$s(r,i)?l=null:o!==null&&$s(r,o)&&(t.flags|=32),Gh(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&Hs(t),null;case 13:return Xh(e,t,n);case 4:return lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Id(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(aa,r._currentValue),r._currentValue=l,o!==null)if(Lt(o.value,l)){if(o.children===i.children&&!nt.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Qt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Us(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Us(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Fd(e,t,r,i,n);case 15:return Qh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Uo(e,t),t.tag=1,rt(r)?(e=!0,ra(t)):e=!1,hr(t,n),Sh(t,r,i),Bs(t,r,i,n),qs(null,t,r,!0,e,n);case 19:return Kh(e,t,n);case 22:return qh(e,t,n)}throw Error(B(156,t.tag))};function pm(e,t){return Ip(e,t)}function N0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new N0(e,t,n,r)}function kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I0(e){if(typeof e=="function")return kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Uu)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")kc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return zn(n.children,i,o,t);case Fu:l=8,i|=8;break;case hs:return e=vt(12,n,t,i|2),e.elementType=hs,e.lanes=o,e;case ms:return e=vt(13,n,t,i),e.elementType=ms,e.lanes=o,e;case vs:return e=vt(19,n,t,i),e.elementType=vs,e.lanes=o,e;case kp:return Qa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:l=10;break e;case Sp:l=9;break e;case Hu:l=11;break e;case Uu:l=14;break e;case tn:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Qa(e,t,n,r){return e=vt(22,e,r,t),e.elementType=kp,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,i,o,l,a,s){return e=new F0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(o),e}function H0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hm(e){if(!e)return Sn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(rt(n))return ph(e,n,t)}return t}function mm(e,t,n,r,i,o,l,a,s){return e=Ec(n,r,!0,e,i,o,l,a,s),e.context=hm(null),n=e.current,r=Xe(),i=vn(n),o=Qt(r,i),o.callback=t!=null?t:null,hn(n,o,i),e.current.lanes=i,Ii(e,i,r),it(e,r),e}function qa(e,t,n,r){var i=t.current,o=Xe(),l=vn(i);return n=hm(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,l),e!==null&&(Pt(e,i,l,o),Io(e,i,l)),l}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bc(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function U0(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function _c(e){this._internalRoot=e}Ga.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));qa(e,t,null,null)};Ga.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){qa(null,e,null,null)}),t[Gt]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Gp(e)}};function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function W0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=va(l);o.call(u)}}var l=mm(t,r,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=l,e[Gt]=l.current,Ei(e.nodeType===8?e.parentNode:e),Hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=va(s);a.call(u)}}var s=Ec(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=s,e[Gt]=s.current,Ei(e.nodeType===8?e.parentNode:e),Hn(function(){qa(t,s,n,r)}),s}function Xa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=va(l);a.call(s)}}qa(t,l,e,i)}else l=W0(n,t,e,i,r);return va(l)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Vu(t,n|1),it(t,Ce()),(de&6)===0&&(Er=Ce()+500,bn()))}break;case 13:Hn(function(){var r=Yt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),bc(e,1)}};Qu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}bc(e,134217728)}};Vp=function(e){if(e.tag===13){var t=vn(e),n=Yt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}bc(e,t)}};Qp=function(){return fe};qp=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Cs=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fa(r);if(!i)throw Error(B(90));bp(r),ws(r,i)}}}break;case"textarea":Cp(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};jp=wc;zp=Hn;var B0={usingClientEntryPoint:!1,Events:[Hi,tr,Fa,Mp,Rp,wc]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},V0={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ap(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{$a=ho.inject(V0),At=ho}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(t))throw Error(B(200));return H0(e,t,null,n)};ct.createRoot=function(e,t){if(!Cc(e))throw Error(B(299));var n=!1,r="",i=vm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new _c(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Ap(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Hn(e)};ct.hydrate=function(e,t,n){if(!Ya(t))throw Error(B(200));return Xa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Cc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=vm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=mm(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Gt]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};ct.render=function(e,t,n){if(!Ya(t))throw Error(B(200));return Xa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(B(40));return e._reactRootContainer?(Hn(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=wc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ya(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Xa(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})($u);var ef=$u.exports;fs.createRoot=ef.createRoot,fs.hydrateRoot=ef.hydrateRoot;var Ka={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Oc=Ae?Symbol.for("react.element"):60103,Pc=Ae?Symbol.for("react.portal"):60106,Ja=Ae?Symbol.for("react.fragment"):60107,Za=Ae?Symbol.for("react.strict_mode"):60108,el=Ae?Symbol.for("react.profiler"):60114,tl=Ae?Symbol.for("react.provider"):60109,nl=Ae?Symbol.for("react.context"):60110,Tc=Ae?Symbol.for("react.async_mode"):60111,rl=Ae?Symbol.for("react.concurrent_mode"):60111,il=Ae?Symbol.for("react.forward_ref"):60112,ol=Ae?Symbol.for("react.suspense"):60113,Q0=Ae?Symbol.for("react.suspense_list"):60120,al=Ae?Symbol.for("react.memo"):60115,ll=Ae?Symbol.for("react.lazy"):60116,q0=Ae?Symbol.for("react.block"):60121,G0=Ae?Symbol.for("react.fundamental"):60117,Y0=Ae?Symbol.for("react.responder"):60118,X0=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Oc:switch(e=e.type,e){case Tc:case rl:case Ja:case el:case Za:case ol:return e;default:switch(e=e&&e.$$typeof,e){case nl:case il:case ll:case al:case tl:return e;default:return t}}case Pc:return t}}}function gm(e){return ft(e)===rl}pe.AsyncMode=Tc;pe.ConcurrentMode=rl;pe.ContextConsumer=nl;pe.ContextProvider=tl;pe.Element=Oc;pe.ForwardRef=il;pe.Fragment=Ja;pe.Lazy=ll;pe.Memo=al;pe.Portal=Pc;pe.Profiler=el;pe.StrictMode=Za;pe.Suspense=ol;pe.isAsyncMode=function(e){return gm(e)||ft(e)===Tc};pe.isConcurrentMode=gm;pe.isContextConsumer=function(e){return ft(e)===nl};pe.isContextProvider=function(e){return ft(e)===tl};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oc};pe.isForwardRef=function(e){return ft(e)===il};pe.isFragment=function(e){return ft(e)===Ja};pe.isLazy=function(e){return ft(e)===ll};pe.isMemo=function(e){return ft(e)===al};pe.isPortal=function(e){return ft(e)===Pc};pe.isProfiler=function(e){return ft(e)===el};pe.isStrictMode=function(e){return ft(e)===Za};pe.isSuspense=function(e){return ft(e)===ol};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ja||e===rl||e===el||e===Za||e===ol||e===Q0||typeof e=="object"&&e!==null&&(e.$$typeof===ll||e.$$typeof===al||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===il||e.$$typeof===G0||e.$$typeof===Y0||e.$$typeof===X0||e.$$typeof===q0)};pe.typeOf=ft;(function(e){e.exports=pe})(Ka);function K0(e){function t(H,b,q,F,L){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,ze=oe=se=0,ce=0,Me=0,_n=0,Pe=0,Jt=q.length,Ft=Jt-1,ot,te="",he="",Qn="",Dr="",jt;ce<Jt;){if(ne=q.charCodeAt(ce),ce===Ft&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Jt++,Ft++),W+ie+ee+J===0){if(ce===Ft&&(0<Me&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=q.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Jt;){switch(ne=q.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=q.charCodeAt(ce+1)){case 42:case 47:e:{for(ze=ce+1;ze<Ft;++ze)switch(q.charCodeAt(ze)){case 47:if(ne===42&&q.charCodeAt(ze-1)===42&&ce+2!==ze){ce=ze+1;break e}break;case 10:if(ne===47){ce=ze+1;break e}}ce=ze}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Ft&&q.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=q.substring(Pe,ce),se===0&&(se=(te=te.replace(c,"").trim()).charCodeAt(0)),se){case 64:switch(0<Me&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:Me=b;break;default:Me=G}if(oe=t(b,Me,oe,ne,L+1),Pe=oe.length,0<T&&(Me=n(G,te,_n),jt=a(3,oe,Me,b,$,A,Pe,ne,L,F),te=Me.join(""),jt!==void 0&&(Pe=(oe=jt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(P,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(b,n(b,te,_n),oe,F,L+1)}Qn+=oe,oe=_n=Me=ze=se=0,te="",ne=q.charCodeAt(++ce);break;case 125:case 59:if(te=(0<Me?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(ze===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<T&&(jt=a(1,te,b,H,$,A,he.length,F,L,F))!==void 0&&(Pe=(te=jt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){Dr+=te+q.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}_n=Me=ze=se=0,te="",ne=q.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(Me=1,te+="\0"),0<T*U&&a(0,te,b,H,$,A,he.length,F,L,F),A=1,$++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,ot=q.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:ne!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ie+W+J===0&&(Me=_n=1,ot="\f"+ot);break;case 108:if(ie+W+J+N===0&&0<ze)switch(ce-ze){case 2:Oe===112&&q.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(ze=ce);break;case 44:W+ee+ie+J===0&&(Me=1,ot+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+ze+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*q.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(q.charCodeAt(Pe+2)===33&&(he+=q.substring(Pe,ce+1)),ot="",W=0)}}W===0&&(te+=ot)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if(Me=b,0<T&&(jt=a(2,he,Me,H,$,A,Pe,F,L,F),jt!==void 0&&(he=jt).length===0))return Dr+he+Qn;if(he=Me.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}N=0}}return Dr+he+Qn}function n(H,b,q){var F=b.trim().split(k);b=F;var L=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<L;++W)b[W]=r(H,b[W],q).trim();break;default:var ee=W=0;for(b=[];W<L;++W)for(var ie=0;ie<J;++ie)b[ee++]=r(H[ie]+" ",F[W],q).trim()}return b}function r(H,b,q){var F=b.charCodeAt(0);switch(33>F&&(F=(b=b.trim()).charCodeAt(0)),F){case 38:return b.replace(v,"$1"+H.trim());case 58:return H.trim()+b.replace(v,"$1"+H.trim());default:if(0<1*q&&0<b.indexOf("\f"))return b.replace(v,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+b}function i(H,b,q,F){var L=H+";",J=2*b+3*q+4*F;if(J===944){H=L.indexOf(":",9)+1;var W=L.substring(H,L.length-1).trim();return W=L.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(L,1))return L;switch(J){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(D,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return W=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+L+"-ms-flex-pack"+W+L;case 1005:return m.test(L)?L.replace(h,":-webkit-")+L.replace(h,":-moz-")+L:L;case 1e3:switch(W=L.substring(13).trim(),b=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(b)){case 226:W=L.replace(O,"tb");break;case 232:W=L.replace(O,"tb-rl");break;case 220:W=L.replace(O,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+W+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(b=(L=H).length-10,W=(L.charCodeAt(b)===33?L.substring(0,b):L).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:L=L.replace(W,"-webkit-"+W)+";"+L;break;case 207:case 102:L=L.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+L.replace(W,"-webkit-"+W)+";"+L.replace(W,"-ms-"+W+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return W=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+W+"-ms-flex-"+W+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(S,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(S,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(j.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),b,q,F).replace(":fill-available",":stretch"):L.replace(W,"-webkit-"+W)+L.replace(W,"-moz-"+W.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,q+F===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+L}return L}function o(H,b){var q=H.indexOf(b===1?":":"{"),F=H.substring(0,b!==3?q:10);return q=H.substring(q+1,H.length-1),z(b!==2?F:F.replace(M,"$1"),q,b)}function l(H,b){var q=i(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return q!==b+";"?q.replace(E," or ($1)").substring(4):"("+b+")"}function a(H,b,q,F,L,J,W,ee,ie,se){for(var ne=0,Oe=b,Ne;ne<T;++ne)switch(Ne=R[ne].call(d,H,Oe,q,F,L,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==b)return Oe}function s(H){switch(H){case void 0:case null:T=R.length=0;break;default:if(typeof H=="function")R[T++]=H;else if(typeof H=="object")for(var b=0,q=H.length;b<q;++b)s(H[b]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(z=null,H?typeof H!="function"?I=1:(I=2,z=H):I=0),u}function d(H,b){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),V=q,q=[V],0<T){var F=a(-1,b,q,q,$,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(b=F)}var L=t(G,q,b,0,0);return 0<T&&(F=a(-2,L,q,q,$,A,L.length,0,0,0),F!==void 0&&(L=F)),V="",N=0,A=$=1,L}var c=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,S=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,A=1,$=1,N=0,I=1,G=[],R=[],T=0,z=null,U=0,V="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var J0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Z0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ey=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,tf=Z0(function(e){return ey.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Lc=Ka.exports,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ny={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ym={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mc={};Mc[Lc.ForwardRef]=ry;Mc[Lc.Memo]=ym;function nf(e){return Lc.isMemo(e)?ym:Mc[e.$$typeof]||ty}var iy=Object.defineProperty,oy=Object.getOwnPropertyNames,rf=Object.getOwnPropertySymbols,ay=Object.getOwnPropertyDescriptor,ly=Object.getPrototypeOf,of=Object.prototype;function wm(e,t,n){if(typeof t!="string"){if(of){var r=ly(t);r&&r!==of&&wm(e,r,n)}var i=oy(t);rf&&(i=i.concat(rf(t)));for(var o=nf(e),l=nf(t),a=0;a<i.length;++a){var s=i[a];if(!ny[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=ay(t,s);try{iy(e,s,u)}catch{}}}}return e}var xm=wm;function Vt(){return(Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var af=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ou=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ka.exports.typeOf(e)},ga=Object.freeze([]),yn=Object.freeze({});function Ri(e){return typeof e=="function"}function lf(e){return e.displayName||e.name||"Component"}function Rc(e){return e&&typeof e.styledComponentId=="string"}var br=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",jc=typeof window<"u"&&"HTMLElement"in window,sy=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Wi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var uy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Wi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Qo=new Map,ya=new Map,di=1,mo=function(e){if(Qo.has(e))return Qo.get(e);for(;ya.has(di);)di++;var t=di++;return Qo.set(e,t),ya.set(t,e),t},cy=function(e){return ya.get(e)},dy=function(e,t){t>=di&&(di=t+1),Qo.set(e,t),ya.set(t,e)},fy="style["+br+'][data-styled-version="5.3.5"]',py=new RegExp("^"+br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),hy=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},my=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(py);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(dy(u,s),hy(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},vy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Sm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(br))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(br,"active"),r.setAttribute("data-styled-version","5.3.5");var l=vy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},gy=function(){function e(n){var r=this.element=Sm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Wi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),yy=function(){function e(n){var r=this.element=Sm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),wy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),sf=jc,xy={isServer:!jc,useCSSOMInjection:!sy},km=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=Vt({},xy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&jc&&sf&&(sf=!1,function(o){for(var l=document.querySelectorAll(fy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(br)!=="active"&&(my(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Vt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new wy(l):o?new gy(l):new yy(l),new uy(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(mo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(mo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=cy(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var d=br+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),Sy=/(a)(d)/gi,uf=function(e){return String.fromCharCode(e+(e>25?39:97))};function au(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=uf(t%52)+n;return(uf(t%52)+n).replace(Sy,"$1-$2")}var sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Em=function(e){return sr(5381,e)};function ky(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ri(n)&&!Rc(n))return!1}return!0}var Ey=Em("5.3.5"),by=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ky(t),this.componentId=n,this.baseHash=sr(Ey,n),this.baseStyle=r,km.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=_r(this.rules,t,n,r).join(""),a=au(sr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=sr(this.baseHash,r.hash),c="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var m=_r(h,t,n,r),y=Array.isArray(m)?m.join(""):m;d=sr(d,y+f),c+=y}}if(c){var k=au(d>>>0);if(!n.hasNameForId(i,k)){var v=r(c,"."+k,void 0,i);n.insertRules(i,k,v)}o.push(k)}}return o.join(" ")},e}(),_y=/^\s*\/\/.*$/gm,Cy=[":","[",".","#"];function Oy(e){var t,n,r,i,o=e===void 0?yn:e,l=o.options,a=l===void 0?yn:l,s=o.plugins,u=s===void 0?ga:s,d=new K0(a),c=[],f=function(y){function k(v){if(v)try{y(v+"}")}catch{}}return function(v,p,g,x,O,P,E,S,M,j){switch(v){case 1:if(M===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(g[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(y){c.push(y)}),h=function(y,k,v){return k===0&&Cy.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function m(y,k,v,p){p===void 0&&(p="&");var g=y.replace(_y,""),x=k&&v?v+" "+k+" { "+g+" }":g;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(v||!k?"":k,x)}return d.use([].concat(u,[function(y,k,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var k=c;return c=[],k}}])),m.hash=u.length?u.reduce(function(y,k){return k.name||Wi(15),sr(y,k.name)},5381).toString():"",m}var bm=Lr.createContext();bm.Consumer;var _m=Lr.createContext(),Py=(_m.Consumer,new km),lu=Oy();function Ty(){return K.exports.useContext(bm)||Py}function Ly(){return K.exports.useContext(_m)||lu}var My=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=lu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Wi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=lu),this.name+t.hash},e}(),Ry=/([A-Z])/,jy=/([A-Z])/g,zy=/^ms-/,Dy=function(e){return"-"+e.toLowerCase()};function cf(e){return Ry.test(e)?e.replace(jy,Dy).replace(zy,"-ms-"):e}var df=function(e){return e==null||e===!1||e===""};function _r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=_r(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(df(e))return"";if(Rc(e))return"."+e.styledComponentId;if(Ri(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return _r(s,t,n,r)}var u;return e instanceof My?n?(e.inject(n,r),e.getName(r)):e:ou(e)?function d(c,f){var h,m,y=[];for(var k in c)c.hasOwnProperty(k)&&!df(c[k])&&(Array.isArray(c[k])&&c[k].isCss||Ri(c[k])?y.push(cf(k)+":",c[k],";"):ou(c[k])?y.push.apply(y,d(c[k],k)):y.push(cf(k)+": "+(h=k,(m=c[k])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in J0?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var ff=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function $y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ri(e)||ou(e)?ff(_r(af(ga,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ff(_r(af(e,n)))}var Ay=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},Ny=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Iy=/(^-|-$)/g;function Ql(e){return e.replace(Ny,"-").replace(Iy,"")}var Fy=function(e){return au(Em(e)>>>0)};function vo(e){return typeof e=="string"&&!0}var su=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Hy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Uy(e,t,n){var r=e[n];su(t)&&su(r)?Cm(r,t):e[n]=t}function Cm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(su(l))for(var a in l)Hy(a)&&Uy(e,l[a],a)}return e}var Om=Lr.createContext();Om.Consumer;var ql={};function Pm(e,t,n){var r=Rc(e),i=!vo(e),o=t.attrs,l=o===void 0?ga:o,a=t.componentId,s=a===void 0?function(p,g){var x=typeof p!="string"?"sc":Ql(p);ql[x]=(ql[x]||0)+1;var O=x+"-"+Fy("5.3.5"+x+ql[x]);return g?g+"-"+O:O}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return vo(p)?"styled."+p:"Styled("+lf(p)+")"}(e):u,c=t.displayName&&t.componentId?Ql(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var m,y=new by(n,c,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,v=function(p,g){return function(x,O,P,E){var S=x.attrs,M=x.componentStyle,j=x.defaultProps,D=x.foldedComponentIds,A=x.shouldForwardProp,$=x.styledComponentId,N=x.target,I=function(F,L,J){F===void 0&&(F=yn);var W=Vt({},L,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in Ri(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}(Ay(O,K.exports.useContext(Om),j)||yn,O,S),G=I[0],R=I[1],T=function(F,L,J,W){var ee=Ty(),ie=Ly(),se=L?F.generateAndInjectStyles(yn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(M,E,G),z=P,U=R.$as||O.$as||R.as||O.as||N,V=vo(U),H=R!==O?Vt({},O,{},R):O,b={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?b.as=H[q]:(A?A(q,tf,U):!V||tf(q))&&(b[q]=H[q]));return O.style&&R.style!==O.style&&(b.style=Vt({},O.style,{},R.style)),b.className=Array.prototype.concat(D,$,T!==$?T:null,O.className,R.className).filter(Boolean).join(" "),b.ref=z,K.exports.createElement(U,b)}(m,p,g,k)};return v.displayName=d,(m=Lr.forwardRef(v)).attrs=f,m.componentStyle=y,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ga,m.styledComponentId=c,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,x=function(P,E){if(P==null)return{};var S,M,j={},D=Object.keys(P);for(M=0;M<D.length;M++)S=D[M],E.indexOf(S)>=0||(j[S]=P[S]);return j}(t,["componentId"]),O=g&&g+"-"+(vo(p)?p:Ql(lf(p)));return Pm(p,Vt({},x,{attrs:f,componentId:O}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Cm({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&xm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var uu=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Ka.exports.isValidElementType(r))return Wi(1,String(r));var o=function(){return n(r,i,$y.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Vt({},i,{},l))},o.attrs=function(l){return t(n,r,Vt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Pm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){uu[e]=uu(e)});const C=uu,_={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Wy=C.div`
	margin: 0;   
`,By=C.a`
	
`,Vy=C.img`
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
`;var sl={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=K.exports,qy=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Xy=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ky={key:!0,ref:!0,__self:!0,__source:!0};function Tm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yy.call(t,r)&&!Ky.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qy,type:e,key:o,ref:l,props:i,_owner:Xy.current}}ul.Fragment=Gy;ul.jsx=Tm;ul.jsxs=Tm;(function(e){e.exports=ul})(sl);const Lm=sl.exports.Fragment,w=sl.exports.jsx,Q=sl.exports.jsxs,ve=({image:e,altText:t,redirect:n})=>w(Wy,{children:w(By,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(Vy,{src:e,alt:t})})}),Br="/Site-Serra/assets/voitto.e51ea618.svg",Vr="/Site-Serra/assets/iprj.03355e19.svg",Qr="/Site-Serra/assets/inovafri.c4b07fe0.svg",qr="/Site-Serra/assets/wiseup.d9d06fa3.svg",Gr="/Site-Serra/assets/ligajr.52feeabf.svg",Jy=C.div`
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
`;function e1(){return w(Jy,{children:Q(Zy,{children:[w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Br,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Vr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Qr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:qr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Gr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const t1=C.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,n1=C.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,Gl=C.div`
    margin-left: 1rem;
    width: 100%;
    @media screen and (min-width: ${_.mobile}){
        flex-direction: column;
    }
`,Yl=C.span`
    color: white;
    font-weight: 500;
`,go=C.p`
    color: rgb(180, 180, 180);
`,r1=C.div`
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

`,Xl=C.img`
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
`,Kl=C.a`
    text-decoration: none;

`,i1=C.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${_.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,o1=C.div`
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
`,a1=C.hr`
    width: 90%;
`,l1=C.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,s1=C.span`
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
`,u1=C.div`
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
    
`;const c1=C.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,d1="/Site-Serra/assets/facebook.e9ec1758.svg",f1="/Site-Serra/assets/instagram.a8d6cb3d.svg",p1="/Site-Serra/assets/linkedin.3daaec60.svg",h1=()=>Q(t1,{children:[Q(c1,{children:[w(s1,{children:"Parceiros"}),w(u1,{children:w(e1,{})})]}),Q(o1,{children:[Q(n1,{children:[Q(i1,{children:[Q(Kl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Xl,{src:d1,alt:"Facebook Serra.Jr"})]}),Q(Kl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Xl,{src:f1,alt:"Instagram Serra.Jr"})]}),Q(Kl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Xl,{src:p1,alt:""})," "]})]}),Q(r1,{children:[Q(Gl,{children:[w(Yl,{children:"Institucional"}),w(go,{children:"Serra Jr Engenharia"})]}),Q(Gl,{children:[w(Yl,{children:"Atendimento"}),w(go,{children:"Segunda a sexta"}),w(go,{children:"9h \xE0s 19h"})]}),Q(Gl,{children:[w(Yl,{children:"Contato"}),w(go,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(a1,{}),Q(l1,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]}),m1="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",v1="/Site-Serra/assets/arrow-header.98a9eade.svg";function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));var pf=function(e){return e},hf="beforeunload",g1="popstate";function y1(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var E=r.location,S=E.pathname,M=E.search,j=E.hash,D=i.state||{};return[D.idx,pf({pathname:S,search:M,hash:j,state:D.usr||null,key:D.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var E=Rn.Pop,S=o(),M=S[0],j=S[1];if(h.length){if(M!=null){var D=d-M;D&&(l={action:E,location:j,retry:function(){O(D*-1)}},O(D))}}else p(E)}}r.addEventListener(g1,a);var s=Rn.Pop,u=o(),d=u[0],c=u[1],f=vf(),h=vf();d==null&&(d=0,i.replaceState(wa({},i.state,{idx:d}),""));function m(E){return typeof E=="string"?E:cu(E)}function y(E,S){return S===void 0&&(S=null),pf(wa({pathname:c.pathname,hash:"",search:""},typeof E=="string"?Vn(E):E,{state:S,key:w1()}))}function k(E,S){return[{usr:E.state,key:E.key,idx:S},m(E)]}function v(E,S,M){return!h.length||(h.call({action:E,location:S,retry:M}),!1)}function p(E){s=E;var S=o();d=S[0],c=S[1],f.call({action:s,location:c})}function g(E,S){var M=Rn.Push,j=y(E,S);function D(){g(E,S)}if(v(M,j,D)){var A=k(j,d+1),$=A[0],N=A[1];try{i.pushState($,"",N)}catch{r.location.assign(N)}p(M)}}function x(E,S){var M=Rn.Replace,j=y(E,S);function D(){x(E,S)}if(v(M,j,D)){var A=k(j,d),$=A[0],N=A[1];i.replaceState($,"",N),p(M)}}function O(E){i.go(E)}var P={get action(){return s},get location(){return c},createHref:m,push:g,replace:x,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(S){return f.push(S)},block:function(S){var M=h.push(S);return h.length===1&&r.addEventListener(hf,mf),function(){M(),h.length||r.removeEventListener(hf,mf)}}};return P}function mf(e){e.preventDefault(),e.returnValue=""}function vf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function w1(){return Math.random().toString(36).substr(2,8)}function cu(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Vn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zc=K.exports.createContext(null),Dc=K.exports.createContext(null),cl=K.exports.createContext({outlet:null,matches:[]});function It(e,t){if(!e)throw new Error(t)}function x1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vn(t):t,i=jm(r.pathname||"/",n);if(i==null)return null;let o=Mm(e);S1(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=L1(o[a],i);return l}function Mm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||It(!1),l.relativePath=l.relativePath.slice(r.length));let a=wn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&It(!1),Mm(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:P1(a,i.index),routesMeta:s})}),t}function S1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k1=/^:\w+$/,E1=3,b1=2,_1=1,C1=10,O1=-2,gf=e=>e==="*";function P1(e,t){let n=e.split("/"),r=n.length;return n.some(gf)&&(r+=O1),t&&(r+=b1),n.filter(i=>!gf(i)).reduce((i,o)=>i+(k1.test(o)?E1:o===""?_1:C1),r)}function T1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function L1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=M1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:wn([i,d.pathname]),pathnameBase:zm(wn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=wn([i,d.pathnameBase]))}return o}function M1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=j1(a[c]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function R1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function j1(e,t){try{return decodeURIComponent(e)}catch{return e}}function z1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vn(e):e;return{pathname:n?n.startsWith("/")?n:D1(n,t):t,search:A1(r),hash:N1(i)}}function D1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rm(e,t,n){let r=typeof e=="string"?Vn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=z1(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function $1(e){return e===""||e.pathname===""?"/":typeof e=="string"?Vn(e).pathname:e.pathname}function jm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),zm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,N1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I1(e){Bi()||It(!1);let{basename:t,navigator:n}=K.exports.useContext(zc),{hash:r,pathname:i,search:o}=Dm(e),l=i;if(t!=="/"){let a=$1(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):wn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function Bi(){return K.exports.useContext(Dc)!=null}function dl(){return Bi()||It(!1),K.exports.useContext(Dc).location}function Vi(){Bi()||It(!1);let{basename:e,navigator:t}=K.exports.useContext(zc),{matches:n}=K.exports.useContext(cl),{pathname:r}=dl(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Rm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=wn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function Dm(e){let{matches:t}=K.exports.useContext(cl),{pathname:n}=dl(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>Rm(e,JSON.parse(r),n),[e,r,n])}function F1(e,t){Bi()||It(!1);let{matches:n}=K.exports.useContext(cl),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=dl(),a;if(t){var s;let f=typeof t=="string"?Vn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||It(!1),a=f}else a=l;let u=a.pathname||"/",d=o==="/"?u:u.slice(o.length)||"/",c=x1(e,{pathname:d});return H1(c&&c.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:wn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:wn([o,f.pathnameBase])})),n)}function H1(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(cl.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Yn(e){It(!1)}function U1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:l=!1}=e;Bi()&&It(!1);let a=zm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Vn(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:h="default"}=r,m=K.exports.useMemo(()=>{let y=jm(u,a);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:h}},[a,u,d,c,f,h]);return m==null?null:K.exports.createElement(zc.Provider,{value:s},K.exports.createElement(Dc.Provider,{children:n,value:{location:m,navigationType:i}}))}function W1(e){let{children:t,location:n}=e;return F1(du(t),n)}function du(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,du(n.props.children));return}n.type!==Yn&&It(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=du(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fu(){return fu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}function B1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const V1=["onClick","reloadDocument","replace","state","target","to"];function Q1(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=y1({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement(U1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function q1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ct=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=B1(t,V1),d=I1(s),c=G1(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&c(h)}return K.exports.createElement("a",fu({},u,{href:d,onClick:f,ref:n,target:a}))});function G1(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Vi(),l=dl(),a=Dm(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!q1(s)){s.preventDefault();let u=!!r||cu(l)===cu(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const Y1=C.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,X1=C.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,K1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,J1=C.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${_.extraLargeDesktop}){
        width: 1vw;
    }
`,Z1=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,ew=C.div`
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
`;const yf=C.div`
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
`,tw=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${_.notebook}){
        display: none;
    }
`,nw=()=>{const[e,t]=K.exports.useState(!1);return w(tw,{children:Q(Y1,{children:[w(yo,{children:w(Ct,{to:"/",children:"Home"})}),w(yo,{children:w(Ct,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(yo,{children:Q(K1,{onClick:()=>t(!e),children:[Q(Z1,{children:[w(X1,{children:"Servi\xE7os"}),w(J1,{activeStyle:e,src:v1,alt:"Seta"})]}),Q(ew,{activeStyle:e,children:[w(yf,{children:w(Ct,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(yf,{children:w(Ct,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(yo,{children:w(Ct,{to:"/contatos",children:"Contato"})})]})})},Yr=C.div`
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
`,rw=C.div`
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
`,iw=({status:e,toogle:t})=>Q(rw,{activeStyle:e,children:[w(Yr,{children:w(Ct,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(Yr,{children:w(Ct,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Yr,{children:w(Ct,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Yr,{children:w(Ct,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(Yr,{children:w(Ct,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Jl=C.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,ow=C.div`
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
`,aw=({status:e})=>(console.log(e),Q(ow,{children:[w(Jl,{active:e,type:"first-line"}),w(Jl,{active:e,type:"mid-line"}),w(Jl,{active:e,type:"last-line"})]})),lw=C.img`
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
    
`,sw=C.div`
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
`,uw=C.div`
    margin-right: 7%;
`,cw=()=>{const[e,t]=K.exports.useState(!1);return Q(sw,{children:[w(Ct,{to:"/",children:w(lw,{src:m1,alt:"Logo Serra Jr"})}),w(uw,{onClick:()=>{t(!e)},children:w(aw,{status:e})}),w(nw,{}),w(iw,{status:e,toogle:t})]})},dw=C.img`
    height: 15vh;

    @media screen and (max-width: ${_.notebook}) {
        height: 10vh;
    }
`,fw=C.p`
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
`,pw=C.div`
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
`,hw=({icon:e,text:t,alt:n})=>Q(pw,{children:[w(dw,{src:e,alt:n}),w(fw,{children:t})]}),mw=C.div`
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
`,vw=C.p`
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
`;const gw=C.button`
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
`,yw=C.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,ww=C.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,wf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>{const l=Vi();return Q(ww,{children:[w(vw,{titleColor:r,children:e}),Q(mw,{children:[w(yw,{children:i.map((a,s)=>w(hw,{icon:a,text:o[s],alt:o[s]},s))}),w(gw,{onClick:()=>{l(t),window.scrollTo(0,0)},buttonColor:r,children:n})]})]})},xw=C.p`
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
`,Sw=C.hr`
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
`,kw=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,Ew=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,$c=({text:e,fontSize:t,titleWidth:n})=>w(kw,{children:Q(Ew,{children:[w(xw,{style:{fontSize:t},children:e}),w(Sw,{gradientWidth:n})]})});var $m={},Am={},fl={},Nm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Nm);var bw="Expected a function",xf=0/0,_w="[object Symbol]",Cw=/^\s+|\s+$/g,Ow=/^[-+]0x[0-9a-f]+$/i,Pw=/^0b[01]+$/i,Tw=/^0o[0-7]+$/i,Lw=parseInt,Mw=typeof Kr=="object"&&Kr&&Kr.Object===Object&&Kr,Rw=typeof self=="object"&&self&&self.Object===Object&&self,jw=Mw||Rw||Function("return this")(),zw=Object.prototype,Dw=zw.toString,$w=Math.max,Aw=Math.min,Zl=function(){return jw.Date.now()};function Nw(e,t,n){var r,i,o,l,a,s,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(bw);t=Sf(t)||0,pu(n)&&(d=!!n.leading,c="maxWait"in n,o=c?$w(Sf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(P){var E=r,S=i;return r=i=void 0,u=P,l=e.apply(S,E),l}function m(P){return u=P,a=setTimeout(v,t),d?h(P):l}function y(P){var E=P-s,S=P-u,M=t-E;return c?Aw(M,o-S):M}function k(P){var E=P-s,S=P-u;return s===void 0||E>=t||E<0||c&&S>=o}function v(){var P=Zl();if(k(P))return p(P);a=setTimeout(v,y(P))}function p(P){return a=void 0,f&&r?h(P):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(Zl())}function O(){var P=Zl(),E=k(P);if(r=arguments,i=this,s=P,E){if(a===void 0)return m(s);if(c)return a=setTimeout(v,t),h(s)}return a===void 0&&(a=setTimeout(v,t)),l}return O.cancel=g,O.flush=x,O}function pu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Iw(e){return!!e&&typeof e=="object"}function Fw(e){return typeof e=="symbol"||Iw(e)&&Dw.call(e)==_w}function Sf(e){if(typeof e=="number")return e;if(Fw(e))return xf;if(pu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=pu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Cw,"");var n=Pw.test(e);return n||Tw.test(e)?Lw(e.slice(2),n?2:8):Ow.test(e)?xf:+e}var Hw=Nw,Qi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Qi);var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.checkSpecKeys=Y.checkNavigable=Y.changeSlide=Y.canUseDOM=Y.canGoNext=void 0;Y.clamp=Im;Y.swipeStart=Y.swipeMove=Y.swipeEnd=Y.slidesOnRight=Y.slidesOnLeft=Y.slideHandler=Y.siblingDirection=Y.safePreventDefault=Y.lazyStartIndex=Y.lazySlidesOnRight=Y.lazySlidesOnLeft=Y.lazyEndIndex=Y.keyHandler=Y.initializedState=Y.getWidth=Y.getTrackLeft=Y.getTrackCSS=Y.getTrackAnimateCSS=Y.getTotalSlides=Y.getSwipeDirection=Y.getSlideCount=Y.getRequiredLazySlides=Y.getPreClones=Y.getPostClones=Y.getOnDemandLazySlides=Y.getNavigableIndexes=Y.getHeight=Y.extractObject=void 0;var Uw=Ww(K.exports);function Ww(e){return e&&e.__esModule?e:{default:e}}function kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(n),!0).forEach(function(r){Bw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Im(e,t,n){return Math.max(t,Math.min(e,n))}var Dn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};Y.safePreventDefault=Dn;var Ac=function(t){for(var n=[],r=Nc(t),i=Ic(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};Y.getOnDemandLazySlides=Ac;var Vw=function(t){for(var n=[],r=Nc(t),i=Ic(t),o=r;o<i;o++)n.push(o);return n};Y.getRequiredLazySlides=Vw;var Nc=function(t){return t.currentSlide-Fm(t)};Y.lazyStartIndex=Nc;var Ic=function(t){return t.currentSlide+Hm(t)};Y.lazyEndIndex=Ic;var Fm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};Y.lazySlidesOnLeft=Fm;var Hm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};Y.lazySlidesOnRight=Hm;var xa=function(t){return t&&t.offsetWidth||0};Y.getWidth=xa;var Fc=function(t){return t&&t.offsetHeight||0};Y.getHeight=Fc;var Hc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};Y.getSwipeDirection=Hc;var Uc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};Y.canGoNext=Uc;var Qw=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};Y.extractObject=Qw;var qw=function(t){var n=Uw.default.Children.count(t.children),r=t.listRef,i=Math.ceil(xa(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(xa(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Fc(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=Ac(we(we({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(h);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};Y.initializedState=qw;var Gw=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,k,v,p,g={},x={},O=o?l:Im(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},x={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%c!==0&&(k=a-a%c):k=0):!Uc(t)&&y>u?y=k=u:d&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%c!==0&&(k=0):k=a-f),!o&&y+f>=a&&(k=a-f),v=zi(we(we({},t),{},{slideIndex:y})),p=zi(we(we({},t),{},{slideIndex:k})),o||(v===p&&(y=k),v=p),s&&(m=m.concat(Ac(we(we({},t),{},{currentSlide:y})))),h?(g={animating:!0,currentSlide:k,trackStyle:Wc(we(we({},t),{},{left:v})),lazyLoadedList:m,targetSlide:O},x={animating:!1,currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):g={currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),lazyLoadedList:m,targetSlide:O};return{state:g,nextState:x}};Y.slideHandler=Gw;var Yw=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,m=t.infinite;if(l=d%s!==0,r=l?0:(d-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,h&&!m&&(i=c-o,a=i===-1?d-1:i),m||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=c+o,h&&!m&&(a=(c+s)%d+r),m||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=Vm(we(we({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};Y.changeSlide=Yw;var Xw=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};Y.keyHandler=Xw;var Kw=function(t,n,r){return t.target.tagName==="IMG"&&Dn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};Y.swipeStart=Kw;var Jw=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,h=n.swiped,m=n.swiping,y=n.slideCount,k=n.slidesToScroll,v=n.infinite,p=n.touchObject,g=n.swipeEvent,x=n.listHeight,O=n.listWidth;if(!r){if(i)return Dn(t);o&&l&&a&&Dn(t);var P,E={},S=zi(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var M=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&M>10)return{scrolling:!0};a&&(p.swipeLength=M);var j=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(j=p.curY>p.startY?1:-1);var D=Math.ceil(y/k),A=Hc(n.touchObject,a),$=p.swipeLength;return v||(u===0&&(A==="right"||A==="down")||u+1>=D&&(A==="left"||A==="up")||!Uc(n)&&(A==="left"||A==="up"))&&($=p.swipeLength*d,c===!1&&f&&(f(A),E.edgeDragged=!0)),!h&&g&&(g(A),E.swiped=!0),o?P=S+$*(x/O)*j:s?P=S-$*j:P=S+$*j,a&&(P=S+$*j),E=we(we({},E),{},{touchObject:p,swipeLeft:P,trackStyle:ji(we(we({},n),{},{left:P}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(E.swiping=!0,Dn(t)),E}};Y.swipeMove=Jw;var Zw=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,h=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&Dn(t),{};var k=s?u/a:l/a,v=Hc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>k){Dn(t),f&&f(v);var g,x,O=y?m:h;switch(v){case"left":case"up":x=O+mu(n),g=d?hu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=O-mu(n),g=d?hu(n,x):x,p.currentDirection=1;break;default:g=O}p.triggerSlideHandler=g}else{var P=zi(n);p.trackStyle=Wc(we(we({},n),{},{left:P}))}return p};Y.swipeEnd=Zw;var Um=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};Y.getNavigableIndexes=Um;var hu=function(t,n){var r=Um(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};Y.checkNavigable=hu;var mu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Fc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+xa(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};Y.getSlideCount=mu;var pl=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};Y.checkSpecKeys=pl;var ji=function(t){pl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Bm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};Y.getTrackCSS=ji;var Wc=function(t){pl(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ji(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};Y.getTrackAnimateCSS=Wc;var zi=function(t){if(t.unslick)return 0;pl(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,h=t.fade,m=t.vertical,y=0,k,v,p=0;if(h||t.slideCount===1)return 0;var g=0;if(i?(g=-fi(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*f,m?k=n*f*-1+p:k=n*u*-1+y,c===!0){var x,O=r&&r.node;if(x=n+fi(t),v=O&&O.childNodes[x],k=v?v.offsetLeft*-1:0,o===!0){x=i?n+fi(t):n,v=O&&O.children[x],k=0;for(var P=0;P<x;P++)k-=O&&O.children[P]&&O.children[P].offsetWidth;k-=parseInt(t.centerPadding),k+=v&&(d-v.offsetWidth)/2}}return k};Y.getTrackLeft=zi;var fi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};Y.getPreClones=fi;var Wm=function(t){return t.unslick||!t.infinite?0:t.slideCount};Y.getPostClones=Wm;var Bm=function(t){return t.slideCount===1?1:fi(t)+t.slideCount+Wm(t)};Y.getTotalSlides=Bm;var Vm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Qm(t)?"left":"right":t.targetSlide<t.currentSlide-qm(t)?"right":"left"};Y.siblingDirection=Vm;var Qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};Y.slidesOnRight=Qm;var qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};Y.slidesOnLeft=qm;var ex=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};Y.canUseDOM=ex;var hl={};function vu(e){return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vu(e)}Object.defineProperty(hl,"__esModule",{value:!0});hl.Track=void 0;var rn=Gm(K.exports),es=Gm(Qi.exports),ts=Y;function Gm(e){return e&&e.__esModule?e:{default:e}}function gu(){return gu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gu.apply(this,arguments)}function tx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nx(e,t,n){return t&&Ef(e.prototype,t),n&&Ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yu(e,t)}function yu(e,t){return yu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yu(e,t)}function ix(e){var t=ax();return function(){var r=Sa(e),i;if(t){var o=Sa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ox(this,i)}}function ox(e,t){if(t&&(vu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wu(e)}function wu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ax(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sa(e){return Sa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sa(e)}function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){xu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ns=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},lx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},rs=function(t,n){return t.key||n},sx=function(t){var n,r=[],i=[],o=[],l=rn.default.Children.count(t.children),a=(0,ts.lazyStartIndex)(t),s=(0,ts.lazyEndIndex)(t);return rn.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=rn.default.createElement("div",null);var h=lx(Ze(Ze({},t),{},{index:d})),m=c.props.className||"",y=ns(Ze(Ze({},t),{},{index:d}));if(r.push(rn.default.cloneElement(c,{key:"original"+rs(c,d),"data-index":d,className:(0,es.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ze(Ze({outline:"none"},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=l-d;k<=(0,ts.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(c=u),y=ns(Ze(Ze({},t),{},{index:n})),i.push(rn.default.cloneElement(c,{key:"precloned"+rs(c,n),"data-index":n,tabIndex:"-1",className:(0,es.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+d,n<s&&(c=u),y=ns(Ze(Ze({},t),{},{index:n})),o.push(rn.default.cloneElement(c,{key:"postcloned"+rs(c,n),"data-index":n,tabIndex:"-1",className:(0,es.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},ux=function(e){rx(n,e);var t=ix(n);function n(){var r;tx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),xu(wu(r),"node",null),xu(wu(r),"handleRef",function(a){r.node=a}),r}return nx(n,[{key:"render",value:function(){var i=sx(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return rn.default.createElement("div",gu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(rn.default.PureComponent);hl.Track=ux;var ml={};function Su(e){return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}Object.defineProperty(ml,"__esModule",{value:!0});ml.Dots=void 0;var wo=Ym(K.exports),cx=Ym(Qi.exports),_f=Y;function Ym(e){return e&&e.__esModule?e:{default:e}}function Cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cf(Object(n),!0).forEach(function(r){fx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function px(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Of(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hx(e,t,n){return t&&Of(e.prototype,t),n&&Of(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ku(e,t)}function ku(e,t){return ku=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ku(e,t)}function vx(e){var t=wx();return function(){var r=ka(e),i;if(t){var o=ka(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return gx(this,i)}}function gx(e,t){if(t&&(Su(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yx(e)}function yx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ka(e)}var xx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Sx=function(e){mx(n,e);var t=vx(n);function n(){return px(this,n),t.apply(this,arguments)}return hx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,h=xx({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var v=(k+1)*u-1,p=s?v:(0,_f.clamp)(v,0,c-1),g=p-(u-1),x=s?g:(0,_f.clamp)(g,0,c-1),O=(0,cx.default)({"slick-active":s?f>=x&&f<=p:f===x}),P={message:"dots",index:k,slidesToScroll:u,currentSlide:f},E=this.clickHandler.bind(this,P);y=y.concat(wo.default.createElement("li",{key:k,className:O},wo.default.cloneElement(this.props.customPaging(k),{onClick:E})))}return wo.default.cloneElement(this.props.appendDots(y),dx({className:this.props.dotsClass},m))}}]),n}(wo.default.PureComponent);ml.Dots=Sx;var Cr={};function Eu(e){return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eu(e)}Object.defineProperty(Cr,"__esModule",{value:!0});Cr.PrevArrow=Cr.NextArrow=void 0;var vr=Km(K.exports),Xm=Km(Qi.exports),kx=Y;function Km(e){return e&&e.__esModule?e:{default:e}}function Ea(){return Ea=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}function Pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ba(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pf(Object(n),!0).forEach(function(r){Ex(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ex(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zm(e,t,n){return t&&Tf(e.prototype,t),n&&Tf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ev(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&bu(e,t)}function bu(e,t){return bu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bu(e,t)}function tv(e){var t=Cx();return function(){var r=_a(e),i;if(t){var o=_a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return bx(this,i)}}function bx(e,t){if(t&&(Eu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _x(e)}function _x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _a(e){return _a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_a(e)}var Ox=function(e){ev(n,e);var t=tv(n);function n(){return Jm(this,n),t.apply(this,arguments)}return Zm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Xm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=vr.default.cloneElement(this.props.prevArrow,ba(ba({},l),a)):s=vr.default.createElement("button",Ea({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(vr.default.PureComponent);Cr.PrevArrow=Ox;var Px=function(e){ev(n,e);var t=tv(n);function n(){return Jm(this,n),t.apply(this,arguments)}return Zm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,kx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Xm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=vr.default.cloneElement(this.props.nextArrow,ba(ba({},l),a)):s=vr.default.createElement("button",Ea({key:"1",type:"button"},l)," ","Next"),s}}]),n}(vr.default.PureComponent);Cr.NextArrow=Px;var nv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),_u=typeof window<"u"&&typeof document<"u"&&window.document===document,Ca=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Tx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ca):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Lx=2;function Mx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Tx(o)}function a(){var s=Date.now();if(n){if(s-i<Lx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var Rx=20,jx=["top","right","bottom","left","width","height","size","weight"],zx=typeof MutationObserver<"u",Dx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Mx(this.refresh.bind(this),Rx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!_u||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),zx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!_u||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=jx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),rv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Or=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ca},iv=vl(0,0,0,0);function Oa(e){return parseFloat(e)||0}function Lf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Oa(o)},0)}function $x(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Oa(l)}return n}function Ax(e){var t=e.getBBox();return vl(0,0,t.width,t.height)}function Nx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return iv;var r=Or(e).getComputedStyle(e),i=$x(r),o=i.left+i.right,l=i.top+i.bottom,a=Oa(r.width),s=Oa(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Lf(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Lf(r,"top","bottom")+l)),!Fx(e)){var u=Math.round(a+o)-t,d=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(s-=d)}return vl(i.left,i.top,a,s)}var Ix=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Or(e).SVGGraphicsElement}:function(e){return e instanceof Or(e).SVGElement&&typeof e.getBBox=="function"}}();function Fx(e){return e===Or(e).document.documentElement}function Hx(e){return _u?Ix(e)?Ax(e):Nx(e):iv}function Ux(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return rv(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function vl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Wx=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=vl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Hx(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Bx=function(){function e(t,n){var r=Ux(n);rv(this,{target:t,contentRect:r})}return e}(),Vx=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new nv,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Wx(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Or(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Bx(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ov=typeof WeakMap<"u"?new WeakMap:new nv,av=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Dx.getInstance(),r=new Vx(t,n,this);ov.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){av.prototype[e]=function(){var t;return(t=ov.get(this))[e].apply(t,arguments)}});var Qx=function(){return typeof Ca.ResizeObserver<"u"?Ca.ResizeObserver:av}();const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Qx},Symbol.toStringTag,{value:"Module"})),Gx=sp(qx);Object.defineProperty(fl,"__esModule",{value:!0});fl.InnerSlider=void 0;var Ge=qi(K.exports),Yx=qi(Nm),Xx=qi(Hw),Kx=qi(Qi.exports),Se=Y,Jx=hl,Zx=ml,Mf=Cr,eS=qi(Gx);function qi(e){return e&&e.__esModule?e:{default:e}}function Pa(e){return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pa(e)}function Ta(){return Ta=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}function tS(e,t){if(e==null)return{};var n=nS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function nS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iS(e,t,n){return t&&jf(e.prototype,t),n&&jf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Cu(e,t)}function Cu(e,t){return Cu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Cu(e,t)}function aS(e){var t=sS();return function(){var r=La(e),i;if(t){var o=La(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lS(this,i)}}function lS(e,t){if(t&&(Pa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function La(e){return La=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},La(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uS=function(e){oS(n,e);var t=aS(n);function n(r){var i;rS(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new eS.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Ge.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ge.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Xx.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var d=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:d});var c=(0,Se.getTrackCSS)(l);(a||Ge.default.Children.count(i.props.children)!==Ge.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){s.push(E.props.style.width),l+=E.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var f=0;f<d;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var k=Ge.default.Children.count(i.props.children),v=Z(Z(Z({},i.props),i.state),{},{slideCount:k}),p=(0,Se.getPreClones)(v)+(0,Se.getPostClones)(v)+k,g=100/i.props.slidesToShow*p,x=100/p,O=-x*((0,Se.getPreClones)(v)+i.state.currentSlide)*g/100;i.props.centerMode&&(O+=(100-x*g/100)/2);var P={width:g+"%",left:O+"%"};return{slideWidth:x+"%",trackStyle:P}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var d=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,d=s.beforeChange,c=s.onLazyLoad,f=s.speed,h=s.afterChange,m=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,v=y.nextState;if(!!k){d&&d(m,k.currentSlide);var p=k.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(m),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),v&&(i.animationEndCallback=setTimeout(function(){var g=v.animating,x=tS(v,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,Kx.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=Z(Z({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ge.default.createElement(Zx.Dots,c)}var h,m,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Ge.default.createElement(Mf.PrevArrow,y),m=Ge.default.createElement(Mf.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},k),v),g=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},O={className:l}),Ge.default.createElement("div",O,i.props.unslick?"":h,Ge.default.createElement("div",Ta({ref:i.listRefHandler},x),Ge.default.createElement(Jx.Track,Ta({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},Yx.default),{},{currentSlide:i.props.initialSlide,slideCount:Ge.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return iS(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Pa(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ge.default.Children.count(this.props.children)!==Ge.default.Children.count(i.children)}}]),n}(Ge.default.Component);fl.InnerSlider=uS;var cS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},dS=cS,fS=dS,pS=function(e){var t=/[height|width]$/;return t.test(e)},zf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=fS(r),pS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},hS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=zf(n),r<e.length-1&&(t+=", ")}),t):zf(e)},mS=hS,lv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(lv);var is,Df;function vS(){if(Df)return is;Df=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},is=e,is}var os,$f;function sv(){if($f)return os;$f=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return os={isFunction:n,isArray:t,each:e},os}var as,Af;function gS(){if(Af)return as;Af=1;var e=vS(),t=sv().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},as=n,as}var ls,Nf;function yS(){if(Nf)return ls;Nf=1;var e=gS(),t=sv(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,d=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},ls=o,ls}var ss,If;function wS(){if(If)return ss;If=1;var e=yS();return ss=new e,ss}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=fl,i=a(mS),o=a(lv),l=Y;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var M=1;M<arguments.length;M++){var j=arguments[M];for(var D in j)Object.prototype.hasOwnProperty.call(j,D)&&(S[D]=j[D])}return S},s.apply(this,arguments)}function u(S,M){var j=Object.keys(S);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(S);M&&(D=D.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),j.push.apply(j,D)}return j}function d(S){for(var M=1;M<arguments.length;M++){var j=arguments[M]!=null?arguments[M]:{};M%2?u(Object(j),!0).forEach(function(D){O(S,D,j[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(D){Object.defineProperty(S,D,Object.getOwnPropertyDescriptor(j,D))})}return S}function c(S,M){if(!(S instanceof M))throw new TypeError("Cannot call a class as a function")}function f(S,M){for(var j=0;j<M.length;j++){var D=M[j];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(S,D.key,D)}}function h(S,M,j){return M&&f(S.prototype,M),j&&f(S,j),Object.defineProperty(S,"prototype",{writable:!1}),S}function m(S,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(M&&M.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),M&&y(S,M)}function y(S,M){return y=Object.setPrototypeOf||function(D,A){return D.__proto__=A,D},y(S,M)}function k(S){var M=g();return function(){var D=x(S),A;if(M){var $=x(this).constructor;A=Reflect.construct(D,arguments,$)}else A=D.apply(this,arguments);return v(this,A)}}function v(S,M){if(M&&(t(M)==="object"||typeof M=="function"))return M;if(M!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},x(S)}function O(S,M,j){return M in S?Object.defineProperty(S,M,{value:j,enumerable:!0,configurable:!0,writable:!0}):S[M]=j,S}var P=(0,l.canUseDOM)()&&wS(),E=function(S){m(j,S);var M=k(j);function j(D){var A;return c(this,j),A=M.call(this,D),O(p(A),"innerSliderRefHandler",function($){return A.innerSlider=$}),O(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),O(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),O(p(A),"slickGoTo",function($){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo($,N)}),O(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),O(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(j,[{key:"media",value:function(A,$){P.register(A,$),this._responsiveMediaHandlers.push({query:A,handler:$})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var $=this.props.responsive.map(function(I){return I.breakpoint});$.sort(function(I,G){return I-G}),$.forEach(function(I,G){var R;G===0?R=(0,i.default)({minWidth:0,maxWidth:I}):R=(0,i.default)({minWidth:$[G-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media(R,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:$.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){P.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,$,N;this.state.breakpoint?(N=this.props.responsive.filter(function(q){return q.breakpoint===A.state.breakpoint}),$=N[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),N[0].settings)):$=d(d({},o.default),this.props),$.centerMode&&($.slidesToScroll>1,$.slidesToScroll=1),$.fade&&($.slidesToShow>1,$.slidesToScroll>1,$.slidesToShow=1,$.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(q){return typeof q=="string"?!!q.trim():!!q}),$.variableWidth&&($.rows>1||$.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),$.variableWidth=!1);for(var G=[],R=null,T=0;T<I.length;T+=$.rows*$.slidesPerRow){for(var z=[],U=T;U<T+$.rows*$.slidesPerRow;U+=$.slidesPerRow){for(var V=[],H=U;H<U+$.slidesPerRow&&($.variableWidth&&I[H].props.style&&(R=I[H].props.style.width),!(H>=I.length));H+=1)V.push(n.default.cloneElement(I[H],{key:100*T+10*U+H,tabIndex:-1,style:{width:"".concat(100/$.slidesPerRow,"%"),display:"inline-block"}}));z.push(n.default.createElement("div",{key:10*T+U},V))}$.variableWidth?G.push(n.default.createElement("div",{key:T,style:{width:R}},z)):G.push(n.default.createElement("div",{key:T},z))}if($==="unslick"){var b="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:b},I)}else G.length<=$.slidesToShow&&($.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},$),G)}}]),j}(n.default.Component);e.default=E})(Am);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Am);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})($m);const uv=Da($m);const xS=C.div`
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
`,kS=C.img`
    height: 40vh;
    border-radius: 20px;
`,ES=C.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${_.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,bS=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(ES,{containerWidth:e.width,children:w(uv,{...t,children:e.carouselData.map((n,r)=>w(xS,{children:w(SS,{children:w(kS,{src:n.image,alt:n.alt})})},r))})})},_S="/Site-Serra/assets/membros-1.26cb4867.svg",CS="/Site-Serra/assets/membros-2.457898e5.svg",OS="/Site-Serra/assets/missao-icon.4dc65479.svg",PS="/Site-Serra/assets/visao-icon.75e2e4de.svg",TS="/Site-Serra/assets/valores-icon.b6d7390b.svg",Te={members:[{image:_S,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"},{image:CS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"}],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:OS,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:PS,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:TS,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia;","Gest\xE3o segura;","Impactar nossa era;","Evolu\xE7\xE3o constante;","Responsabilidade com os clientes."],content:void 0}]},LS=C.div`
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
`,Ff=C.div`
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
`,Hf=C.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: green; */

    @media screen and (max-width: ${_.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,MS=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,RS=C.button`
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
`,jS=C.div`
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

    
`,zS=C.span`
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
`,DS=C.span`
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
`,Uf=C.div`
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
`,cv=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>{const u=Vi();return Q(jS,{carouselStyle:s,children:[w(LS,{titleColor:r,children:e}),s?w(Ff,{children:Q(Hf,{children:[w(Uf,{children:w(zS,{children:Te.membersText})}),w(bS,{width:"50%",carouselData:Te.members})]})}):Q(Ff,{children:[Q(Hf,{children:[w(Uf,{children:w(DS,{children:o})}),w($S,{src:l,alt:a})]}),i&&t?w(MS,{children:w(RS,{onClick:()=>{u(t),window.scrollTo(0,0)},buttonColor:r,children:n})}):null]})]})};var dv={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Kr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>R});var d=u(4087),c=u.n(d);const f=function(T){return new RegExp(/<[a-z][\s\S]*>/i).test(T)},h=function(T){var z=document.createElement("div");return z.innerHTML=T,z.childNodes},m=function(T,z){return Math.floor(Math.random()*(z-T+1))+T};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",v="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",x="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",E="CHANGE_DELAY",S="CHANGE_CURSOR",M="PASTE_STRING",j="HTML_TAG";function D(T,z){var U=Object.keys(T);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(T);z&&(V=V.filter(function(H){return Object.getOwnPropertyDescriptor(T,H).enumerable})),U.push.apply(U,V)}return U}function A(T){for(var z=1;z<arguments.length;z++){var U=arguments[z]!=null?arguments[z]:{};z%2?D(Object(U),!0).forEach(function(V){G(T,V,U[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(U)):D(Object(U)).forEach(function(V){Object.defineProperty(T,V,Object.getOwnPropertyDescriptor(U,V))})}return T}function $(T){return function(z){if(Array.isArray(z))return N(z)}(T)||function(z){if(typeof Symbol<"u"&&z[Symbol.iterator]!=null||z["@@iterator"]!=null)return Array.from(z)}(T)||function(z,U){if(z){if(typeof z=="string")return N(z,U);var V=Object.prototype.toString.call(z).slice(8,-1);return V==="Object"&&z.constructor&&(V=z.constructor.name),V==="Map"||V==="Set"?Array.from(z):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?N(z,U):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(T,z){(z==null||z>T.length)&&(z=T.length);for(var U=0,V=new Array(z);U<z;U++)V[U]=T[U];return V}function I(T,z){for(var U=0;U<z.length;U++){var V=z[U];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(T,V.key,V)}}function G(T,z,U){return z in T?Object.defineProperty(T,z,{value:U,enumerable:!0,configurable:!0,writable:!0}):T[z]=U,T}const R=function(){function T(V,H){var b=this;if(function(F,L){if(!(F instanceof L))throw new TypeError("Cannot call a class as a function")}(this,T),G(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),G(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),G(this,"setupWrapperElement",function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))}),G(this,"start",function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b}),G(this,"pause",function(){return b.state.eventLoopPaused=!0,b}),G(this,"stop",function(){return b.state.eventLoop&&((0,d.cancel)(b.state.eventLoop),b.state.eventLoop=null),b}),G(this,"pauseFor",function(F){return b.addEventToQueue(g,{ms:F}),b}),G(this,"typeOutAllStrings",function(){return typeof b.options.strings=="string"?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach(function(F){b.typeString(F).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)}),b)}),G(this,"typeString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return b.typeOutHTMLString(F,L);if(F){var J=b.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");b.typeCharacters(ee,L)}return b}),G(this,"pasteString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?b.typeOutHTMLString(F,L,!0):(F&&b.addEventToQueue(M,{character:F,node:L}),b)}),G(this,"typeOutHTMLString",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",b.addEventToQueue(O,{node:ie,parentNode:L}),J?b.pasteString(se,ie):b.typeString(se,ie)):ie.textContent&&(J?b.pasteString(ie.textContent,L):b.typeString(ie.textContent,L))}return b}),G(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return b.addEventToQueue(v,{speed:F}),b}),G(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return b.addEventToQueue(P,{speed:F}),b}),G(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return b.addEventToQueue(E,{delay:F}),b}),G(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return b.addEventToQueue(S,{cursor:F}),b}),G(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var L=0;L<F;L++)b.addEventToQueue(k);return b}),G(this,"callFunction",function(F,L){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return b.addEventToQueue(x,{cb:F,thisArg:L}),b}),G(this,"typeCharacters",function(F){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){b.addEventToQueue(y,{character:J,node:L})}),b}),G(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){b.addEventToQueue(k)}),b}),G(this,"addEventToQueue",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return b.addEventToStateProperty(F,L,J,"eventQueue")}),G(this,"addReverseCalledEvent",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=b.options.loop;return W?b.addEventToStateProperty(F,L,J,"reverseCalledEvents"):b}),G(this,"addEventToStateProperty",function(F,L){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:L||{}};return b.state[W]=J?[ee].concat($(b.state[W])):[].concat($(b.state[W]),[ee]),b}),G(this,"runEventLoop",function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var F=Date.now(),L=F-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=$(b.state.calledEvents),b.state.calledEvents=[],b.options=A({},b.state.initialOptions)}if(b.state.eventLoop=c()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(F<b.state.pauseUntil)return;b.state.pauseUntil=null}var J,W=$(b.state.eventQueue),ee=W.shift();if(!(L<=(J=ee.eventName===p||ee.eventName===k?b.options.deleteSpeed==="natural"?m(40,80):b.options.deleteSpeed:b.options.delay==="natural"?m(120,160):b.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(b.logInDevMode({currentEvent:ee,state:b.state,delay:J}),ie){case M:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;b.options.onCreateTextNode&&typeof b.options.onCreateTextNode=="function"&&(oe=b.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):b.state.elements.wrapper.appendChild(oe)),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case k:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var ze=ee.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(ze);break;case x:var ce=ee.eventArgs,Me=ce.cb,_n=ce.thisArg;Me.call(_n,{elements:b.state.elements});break;case O:var Pe=ee.eventArgs,Jt=Pe.node,Ft=Pe.parentNode;Ft?Ft.appendChild(Jt):b.state.elements.wrapper.appendChild(Jt),b.state.visibleNodes=[].concat($(b.state.visibleNodes),[{type:j,node:Jt,parentNode:Ft||b.state.elements.wrapper}]);break;case v:var ot=b.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:P,eventArgs:{speed:te,temp:!0}});for(var Qn=0,Dr=ot.length;Qn<Dr;Qn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:P,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var jt=ee.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var wl=b.state.visibleNodes.pop(),Ov=wl.type,Xi=wl.node,Pv=wl.character;b.options.onRemoveNode&&typeof b.options.onRemoveNode=="function"&&b.options.onRemoveNode({node:Xi,character:Pv}),Xi&&Xi.parentNode.removeChild(Xi),Ov===j&&jt&&W.unshift({eventName:p,eventArgs:{}})}break;case P:b.options.deleteSpeed=ee.eventArgs.speed;break;case E:b.options.delay=ee.eventArgs.delay;break;case S:b.options.cursor=ee.eventArgs.cursor,b.state.elements.cursor.innerHTML=ee.eventArgs.cursor}b.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(b.state.calledEvents=[].concat($(b.state.calledEvents),[ee]))),b.state.eventQueue=W,b.state.lastFrameTime=F}}}),V)if(typeof V=="string"){var q=document.querySelector(V);if(!q)throw new Error("Could not find container element");this.state.elements.container=q}else this.state.elements.container=V;H&&(this.options=A(A({},this.options),H)),this.state.initialOptions=A({},this.options),this.init()}var z,U;return z=T,(U=[{key:"init",value:function(){var V,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(V=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(V)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(V){this.options.devMode&&console.log(V)}}])&&I(z.prototype,U),Object.defineProperty(z,"prototype",{writable:!1}),T}()},8552:(a,s,u)=>{var d=u(852)(u(5639),"DataView");a.exports=d},1989:(a,s,u)=>{var d=u(1789),c=u(401),f=u(7667),h=u(1327),m=u(1866);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,s,u)=>{var d=u(7040),c=u(4125),f=u(2117),h=u(7518),m=u(4705);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,s,u)=>{var d=u(852)(u(5639),"Map");a.exports=d},3369:(a,s,u)=>{var d=u(4785),c=u(1285),f=u(6e3),h=u(9916),m=u(5265);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,s,u)=>{var d=u(852)(u(5639),"Promise");a.exports=d},8525:(a,s,u)=>{var d=u(852)(u(5639),"Set");a.exports=d},8668:(a,s,u)=>{var d=u(3369),c=u(619),f=u(2385);function h(m){var y=-1,k=m==null?0:m.length;for(this.__data__=new d;++y<k;)this.add(m[y])}h.prototype.add=h.prototype.push=c,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var d=u(8407),c=u(7465),f=u(3779),h=u(7599),m=u(4758),y=u(4309);function k(v){var p=this.__data__=new d(v);this.size=p.size}k.prototype.clear=c,k.prototype.delete=f,k.prototype.get=h,k.prototype.has=m,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var d=u(5639).Symbol;a.exports=d},1149:(a,s,u)=>{var d=u(5639).Uint8Array;a.exports=d},577:(a,s,u)=>{var d=u(852)(u(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length,f=0,h=[];++d<c;){var m=s[d];u(m,d,s)&&(h[f++]=m)}return h}},4636:(a,s,u)=>{var d=u(2545),c=u(5694),f=u(1469),h=u(4144),m=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(v,p){var g=f(v),x=!g&&c(v),O=!g&&!x&&h(v),P=!g&&!x&&!O&&y(v),E=g||x||O||P,S=E?d(v.length,String):[],M=S.length;for(var j in v)!p&&!k.call(v,j)||E&&(j=="length"||O&&(j=="offset"||j=="parent")||P&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||m(j,M))||S.push(j);return S}},2488:a=>{a.exports=function(s,u){for(var d=-1,c=u.length,f=s.length;++d<c;)s[f+d]=u[d];return s}},2908:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length;++d<c;)if(u(s[d],d,s))return!0;return!1}},8470:(a,s,u)=>{var d=u(7813);a.exports=function(c,f){for(var h=c.length;h--;)if(d(c[h][0],f))return h;return-1}},8866:(a,s,u)=>{var d=u(2488),c=u(1469);a.exports=function(f,h,m){var y=h(f);return c(f)?y:d(y,m(f))}},4239:(a,s,u)=>{var d=u(2705),c=u(9607),f=u(2333),h=d?d.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?c(m):f(m)}},9454:(a,s,u)=>{var d=u(4239),c=u(7005);a.exports=function(f){return c(f)&&d(f)=="[object Arguments]"}},939:(a,s,u)=>{var d=u(2492),c=u(7005);a.exports=function f(h,m,y,k,v){return h===m||(h==null||m==null||!c(h)&&!c(m)?h!=h&&m!=m:d(h,m,y,k,f,v))}},2492:(a,s,u)=>{var d=u(6384),c=u(7114),f=u(8351),h=u(6096),m=u(4160),y=u(1469),k=u(4144),v=u(6719),p="[object Arguments]",g="[object Array]",x="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(P,E,S,M,j,D){var A=y(P),$=y(E),N=A?g:m(P),I=$?g:m(E),G=(N=N==p?x:N)==x,R=(I=I==p?x:I)==x,T=N==I;if(T&&k(P)){if(!k(E))return!1;A=!0,G=!1}if(T&&!G)return D||(D=new d),A||v(P)?c(P,E,S,M,j,D):f(P,E,N,S,M,j,D);if(!(1&S)){var z=G&&O.call(P,"__wrapped__"),U=R&&O.call(E,"__wrapped__");if(z||U){var V=z?P.value():P,H=U?E.value():E;return D||(D=new d),j(V,H,S,M,D)}}return!!T&&(D||(D=new d),h(P,E,S,M,j,D))}},8458:(a,s,u)=>{var d=u(3560),c=u(5346),f=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,v=y.toString,p=k.hasOwnProperty,g=RegExp("^"+v.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!f(x)||c(x))&&(d(x)?g:m).test(h(x))}},8749:(a,s,u)=>{var d=u(4239),c=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return f(m)&&c(m.length)&&!!h[d(m)]}},280:(a,s,u)=>{var d=u(5726),c=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!d(h))return c(h);var m=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(s,u){for(var d=-1,c=Array(s);++d<s;)c[d]=u(d);return c}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var d=u(5639)["__core-js_shared__"];a.exports=d},7114:(a,s,u)=>{var d=u(8668),c=u(2908),f=u(4757);a.exports=function(h,m,y,k,v,p){var g=1&y,x=h.length,O=m.length;if(x!=O&&!(g&&O>x))return!1;var P=p.get(h),E=p.get(m);if(P&&E)return P==m&&E==h;var S=-1,M=!0,j=2&y?new d:void 0;for(p.set(h,m),p.set(m,h);++S<x;){var D=h[S],A=m[S];if(k)var $=g?k(A,D,S,m,h,p):k(D,A,S,h,m,p);if($!==void 0){if($)continue;M=!1;break}if(j){if(!c(m,function(N,I){if(!f(j,I)&&(D===N||v(D,N,y,k,p)))return j.push(I)})){M=!1;break}}else if(D!==A&&!v(D,A,y,k,p)){M=!1;break}}return p.delete(h),p.delete(m),M}},8351:(a,s,u)=>{var d=u(2705),c=u(1149),f=u(7813),h=u(7114),m=u(8776),y=u(1814),k=d?d.prototype:void 0,v=k?k.valueOf:void 0;a.exports=function(p,g,x,O,P,E,S){switch(x){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!E(new c(p),new c(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var M=m;case"[object Set]":var j=1&O;if(M||(M=y),p.size!=g.size&&!j)return!1;var D=S.get(p);if(D)return D==g;O|=2,S.set(p,g);var A=h(M(p),M(g),O,P,E,S);return S.delete(p),A;case"[object Symbol]":if(v)return v.call(p)==v.call(g)}return!1}},6096:(a,s,u)=>{var d=u(8234),c=Object.prototype.hasOwnProperty;a.exports=function(f,h,m,y,k,v){var p=1&m,g=d(f),x=g.length;if(x!=d(h).length&&!p)return!1;for(var O=x;O--;){var P=g[O];if(!(p?P in h:c.call(h,P)))return!1}var E=v.get(f),S=v.get(h);if(E&&S)return E==h&&S==f;var M=!0;v.set(f,h),v.set(h,f);for(var j=p;++O<x;){var D=f[P=g[O]],A=h[P];if(y)var $=p?y(A,D,P,h,f,v):y(D,A,P,f,h,v);if(!($===void 0?D===A||k(D,A,m,y,v):$)){M=!1;break}j||(j=P=="constructor")}if(M&&!j){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||(M=!1)}return v.delete(f),v.delete(h),M}},1957:(a,s,u)=>{var d=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=d},8234:(a,s,u)=>{var d=u(8866),c=u(9551),f=u(3674);a.exports=function(h){return d(h,f,c)}},5050:(a,s,u)=>{var d=u(7019);a.exports=function(c,f){var h=c.__data__;return d(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var d=u(8458),c=u(7801);a.exports=function(f,h){var m=c(f,h);return d(m)?m:void 0}},9607:(a,s,u)=>{var d=u(2705),c=Object.prototype,f=c.hasOwnProperty,h=c.toString,m=d?d.toStringTag:void 0;a.exports=function(y){var k=f.call(y,m),v=y[m];try{y[m]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(k?y[m]=v:delete y[m]),g}},9551:(a,s,u)=>{var d=u(4963),c=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),d(h(y),function(k){return f.call(y,k)}))}:c;a.exports=m},4160:(a,s,u)=>{var d=u(8552),c=u(7071),f=u(3818),h=u(8525),m=u(577),y=u(4239),k=u(346),v="[object Map]",p="[object Promise]",g="[object Set]",x="[object WeakMap]",O="[object DataView]",P=k(d),E=k(c),S=k(f),M=k(h),j=k(m),D=y;(d&&D(new d(new ArrayBuffer(1)))!=O||c&&D(new c)!=v||f&&D(f.resolve())!=p||h&&D(new h)!=g||m&&D(new m)!=x)&&(D=function(A){var $=y(A),N=$=="[object Object]"?A.constructor:void 0,I=N?k(N):"";if(I)switch(I){case P:return O;case E:return v;case S:return p;case M:return g;case j:return x}return $}),a.exports=D},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var d=u(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(d){var m=h[f];return m==="__lodash_hash_undefined__"?void 0:m}return c.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return d?h[f]!==void 0:c.call(h,f)}},1866:(a,s,u)=>{var d=u(4536);a.exports=function(c,f){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=d&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,d){var c=typeof u;return!!(d=d==null?9007199254740991:d)&&(c=="number"||c!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<d}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var d,c=u(4429),f=(d=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var d=u&&u.constructor;return u===(typeof d=="function"&&d.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var d=u(8470),c=Array.prototype.splice;a.exports=function(f){var h=this.__data__,m=d(h,f);return!(m<0||(m==h.length-1?h.pop():c.call(h,m,1),--this.size,0))}},2117:(a,s,u)=>{var d=u(8470);a.exports=function(c){var f=this.__data__,h=d(f,c);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var d=u(8470);a.exports=function(c){return d(this.__data__,c)>-1}},4705:(a,s,u)=>{var d=u(8470);a.exports=function(c,f){var h=this.__data__,m=d(h,c);return m<0?(++this.size,h.push([c,f])):h[m][1]=f,this}},4785:(a,s,u)=>{var d=u(1989),c=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||c),string:new d}}},1285:(a,s,u)=>{var d=u(5050);a.exports=function(c){var f=d(this,c).delete(c);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).get(c)}},9916:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).has(c)}},5265:(a,s,u)=>{var d=u(5050);a.exports=function(c,f){var h=d(this,c),m=h.size;return h.set(c,f),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c,f){d[++u]=[f,c]}),d}},4536:(a,s,u)=>{var d=u(852)(Object,"create");a.exports=d},6916:(a,s,u)=>{var d=u(5569)(Object.keys,Object);a.exports=d},1167:(a,s,u)=>{a=u.nmd(a);var d=u(1957),c=s&&!s.nodeType&&s,f=c&&a&&!a.nodeType&&a,h=f&&f.exports===c&&d.process,m=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(d){return s(u(d))}}},5639:(a,s,u)=>{var d=u(1957),c=typeof self=="object"&&self&&self.Object===Object&&self,f=d||c||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c){d[++u]=c}),d}},7465:(a,s,u)=>{var d=u(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,d=u.delete(s);return this.size=u.size,d}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var d=u(8407),c=u(7071),f=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof d){var k=y.__data__;if(!c||k.length<199)return k.push([h,m]),this.size=++y.size,this;y=this.__data__=new f(k)}return y.set(h,m),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var d=u(9454),c=u(7005),f=Object.prototype,h=f.hasOwnProperty,m=f.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(k){return c(k)&&h.call(k,"callee")&&!m.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var d=u(3560),c=u(1780);a.exports=function(f){return f!=null&&c(f.length)&&!d(f)}},4144:(a,s,u)=>{a=u.nmd(a);var d=u(5639),c=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f?d.Buffer:void 0,y=(m?m.isBuffer:void 0)||c;a.exports=y},8446:(a,s,u)=>{var d=u(939);a.exports=function(c,f){return d(c,f)}},3560:(a,s,u)=>{var d=u(4239),c=u(3218);a.exports=function(f){if(!c(f))return!1;var h=d(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var d=u(8749),c=u(1717),f=u(1167),h=f&&f.isTypedArray,m=h?c(h):d;a.exports=m},3674:(a,s,u)=>{var d=u(4636),c=u(280),f=u(8612);a.exports=function(h){return f(h)?d(h):c(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,d,c,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,c=(s=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),f=c-h):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var d=u(75),c=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",m=c["request"+h],y=c["cancel"+h]||c["cancelRequest"+h],k=0;!m&&k<f.length;k++)m=c[f[k]+"Request"+h],y=c[f[k]+"Cancel"+h]||c[f[k]+"CancelRequest"+h];if(!m||!y){var v=0,p=0,g=[];m=function(x){if(g.length===0){var O=d(),P=Math.max(0,16.666666666666668-(O-v));v=P+O,setTimeout(function(){var E=g.slice(0);g.length=0;for(var S=0;S<E.length;S++)if(!E[S].cancelled)try{E[S].callback(v)}catch(M){setTimeout(function(){throw M},0)}},Math.round(P))}return g.push({handle:++p,callback:x,cancelled:!1}),p},y=function(x){for(var O=0;O<g.length;O++)g[O].handle===x&&(g[O].cancelled=!0)}}a.exports=function(x){return m.call(c,x)},a.exports.cancel=function(){y.apply(c,arguments)},a.exports.polyfill=function(x){x||(x=c),x.requestAnimationFrame=m,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>O});var a=o(8156),s=o.n(a),u=o(7403),d=o(8446),c=o.n(d);function f(P){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},f(P)}function h(P,E){if(!(P instanceof E))throw new TypeError("Cannot call a class as a function")}function m(P,E){for(var S=0;S<E.length;S++){var M=E[S];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(P,M.key,M)}}function y(P,E){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,M){return S.__proto__=M,S},y(P,E)}function k(P,E){if(E&&(f(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(P)}function v(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function p(P){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(E){return E.__proto__||Object.getPrototypeOf(E)},p(P)}function g(P,E,S){return E in P?Object.defineProperty(P,E,{value:S,enumerable:!0,configurable:!0,writable:!0}):P[E]=S,P}var x=function(P){(function($,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(N&&N.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),N&&y($,N)})(A,P);var E,S,M,j,D=(M=A,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,N=p(M);if(j){var I=p(this).constructor;$=Reflect.construct(N,arguments,I)}else $=N.apply(this,arguments);return k(this,$)});function A(){var $;h(this,A);for(var N=arguments.length,I=new Array(N),G=0;G<N;G++)I[G]=arguments[G];return g(v($=D.call.apply(D,[this].concat(I))),"state",{instance:null}),$}return E=A,(S=[{key:"componentDidMount",value:function(){var $=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=$.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function($){c()(this.props.options,$.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var $=this,N=this.props.component;return s().createElement(N,{ref:function(I){return $.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(E.prototype,S),Object.defineProperty(E,"prototype",{writable:!1}),A}(a.Component);x.defaultProps={component:"div"};const O=x})(),l.default})())})(dv);const AS=Da(dv.exports),NS=C.div`
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
`,IS=()=>w(NS,{children:w(AS,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),FS="/Site-Serra/assets/presentation-image.40ce3de4.png",HS="/Site-Serra/assets/Sites.a0112d0d.svg",US="/Site-Serra/assets/sistemas-web.d1b27032.svg",WS="/Site-Serra/assets/manutencao.33f9dd1a.svg",BS="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",VS="/Site-Serra/assets/braco-robo.2b026e48.svg",QS="/Site-Serra/assets/impressora-3d.75613d7d.svg",qS="/Site-Serra/assets/membros-2.457898e5.svg",GS="/Site-Serra/assets/background-image.668c0125.svg",YS=C.div`
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

`,ek=C.div`
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
`;const tk=()=>Q(ek,{children:[Q(YS,{children:[w(KS,{children:w(IS,{})}),w(XS,{src:FS,alt:"apresenta\xE7\xE3o"})]}),w($c,{text:"O que fazemos"}),Q(JS,{children:[Q(ZS,{children:[w(wf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/computacao",images:[HS,US],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(wf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/mecanica",color:"#04ADD7",images:[WS,BS,VS,QS],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(cv,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:qS,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),nk="/Site-Serra/assets/presentation-image.73570450.svg",rk=C.div`
    
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
    
`,ik=C.p`
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
`,ok=C.p`
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
`,ak=C.ul`

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${_.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,lk=C.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
    }
`,sk=C.img`
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
`,us=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Q(rk,{children:[w(sk,{src:e,alt:n}),w(ik,{children:t}),r?w(ak,{children:o?o.map((l,a)=>w(lk,{children:l},a)):null}):w(ok,{children:i})]}),uk=C.div`
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
`,ck=C.div`
   

`,dk=C.div`

    
`,fk=C.p`
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

    
`,pk=C.img`
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
`,hk=C.div`
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
`,Wf=C.div`
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
`,mk=()=>Q(Lm,{children:[w(ck,{children:Q(uk,{children:[w(fk,{children:"Sobre N\xF3s"}),w(pk,{src:nk,alt:"imagem sobre n\xF3s"})]})}),w(dk,{children:Q(hk,{children:[w(us,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),w(Wf,{}),w(us,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),w(Wf,{}),w(us,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]})}),w(cv,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),vk=C.div`
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
`;const gk=C.div`
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
`;const yk=C.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var xo=[];function wk(e){var t=K.exports.useState(),n=t[0],r=t[1];return K.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=xo.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),xo.push(a),function(){a.removeEventListener("load",l),a.remove(),xo.splice(xo.findIndex(function(s){return s.src===i}),1)}},[e]),n}function xk(e,t){var n=wk(e),r=K.exports.useRef(null),i=K.exports.useState(),o=i[0],l=i[1];return K.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const Sk=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=xk("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(vk,{children:w(gk,{children:w(yk,{ref:n})})})},Di={_origin:"https://api.emailjs.com"},kk=(e,t="https://api.emailjs.com")=>{Di._userID=e,Di._origin=t},fv=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Bf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const pv=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Bf(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Bf(l))}),o.open("POST",Di._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),Ek=(e,t,n,r)=>{const i=r||Di._userID;fv(i,e,t);const o={lib_version:"3.9.1",user_id:i,service_id:e,template_id:t,template_params:n};return pv("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},bk=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},_k=(e,t,n,r)=>{const i=r||Di._userID,o=bk(n);fv(i,e,t);const l=new FormData(o);return l.append("lib_version","3.9.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),pv("/api/v1.0/email/send-form",l)},Ck={init:kk,send:Ek,sendForm:_k};var Ve={exports:{}},Ok="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pk=Ok,Tk=Pk;function hv(){}function mv(){}mv.resetWarningCache=hv;var Lk=function(){function e(r,i,o,l,a,s){if(s!==Tk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mv,resetWarningCache:hv};return n.PropTypes=n,n};Ve.exports=Lk();function Mk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function So(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rk(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var gl=function(e){Rk(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(So(r)),r.handleErrored=r.handleErrored.bind(So(r)),r.handleChange=r.handleChange.bind(So(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(So(r)),r}var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var i=this.props.grecaptcha;if(i&&this._widgetId!==void 0)return i.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var i=this;return new Promise(function(o,l){i.executionResolve=o,i.executionReject=l,i.execute()})},n.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=this.props.grecaptcha.render(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var i=document.createElement("div");for(document.body.appendChild(i),i.style.display="none";this.captcha.firstChild;)i.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(i)},5e3)},n.handleRecaptchaRef=function(i){this.captcha=i},n.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl;var o=Mk(i,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return w("div",{...o,ref:this.handleRecaptchaRef})},t}(Lr.Component);gl.displayName="ReCAPTCHA";gl.propTypes={sitekey:Ve.exports.string.isRequired,onChange:Ve.exports.func,grecaptcha:Ve.exports.object,theme:Ve.exports.oneOf(["dark","light"]),type:Ve.exports.oneOf(["image","audio"]),tabindex:Ve.exports.number,onExpired:Ve.exports.func,onErrored:Ve.exports.func,size:Ve.exports.oneOf(["compact","normal","invisible"]),stoken:Ve.exports.string,hl:Ve.exports.string,badge:Ve.exports.oneOf(["bottomright","bottomleft","inline"])};gl.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function Ou(){return Ou=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ou.apply(this,arguments)}function jk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zk(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var St={},Dk=0;function $k(e,t){return t=t||{},function(r){var i=r.displayName||r.name||"Component",o=function(a){zk(s,a);function s(d,c){var f;return f=a.call(this,d,c)||this,f.state={},f.__scriptURL="",f}var u=s.prototype;return u.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+Dk++),this.__scriptLoaderID},u.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},u.asyncScriptLoaderHandleLoad=function(c){var f=this;this.setState(c,function(){return f.props.asyncScriptOnLoad&&f.props.asyncScriptOnLoad(f.state)})},u.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=St[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var f in c.observers)c.observers[f](c);delete window[t.callbackName]},u.componentDidMount=function(){var c=this,f=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),m=t,y=m.globalName,k=m.callbackName,v=m.scriptId;if(y&&typeof window[y]<"u"&&(St[f]={loaded:!0,observers:{}}),St[f]){var p=St[f];if(p&&(p.loaded||p.errored)){this.asyncScriptLoaderHandleLoad(p);return}p.observers[h]=function(E){return c.asyncScriptLoaderHandleLoad(E)};return}var g={};g[h]=function(E){return c.asyncScriptLoaderHandleLoad(E)},St[f]={loaded:!1,observers:g};var x=document.createElement("script");x.src=f,x.async=!0;for(var O in t.attributes)x.setAttribute(O,t.attributes[O]);v&&(x.id=v);var P=function(S){if(St[f]){var M=St[f],j=M.observers;for(var D in j)S(j[D])&&delete j[D]}};k&&typeof window<"u"&&(window[k]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),x.onload=function(){var E=St[f];E&&(E.loaded=!0,P(function(S){return k?!1:(S(E),!0)}))},x.onerror=function(){var E=St[f];E&&(E.errored=!0,P(function(S){return S(E),!0}))},document.body.appendChild(x)},u.componentWillUnmount=function(){var c=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),h=0;h<f.length;h+=1)f[h].src.indexOf(c)>-1&&f[h].parentNode&&f[h].parentNode.removeChild(f[h]);var m=St[c];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete St[c])},u.render=function(){var c=t.globalName,f=this.props;f.asyncScriptOnLoad;var h=f.forwardedRef,m=jk(f,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(m[c]=typeof window[c]<"u"?window[c]:void 0),m.ref=h,K.exports.createElement(r,m)},s}(K.exports.Component),l=K.exports.forwardRef(function(a,s){return K.exports.createElement(o,Ou({},a,{forwardedRef:s}))});return l.displayName="AsyncScriptLoader("+i+")",l.propTypes={asyncScriptOnLoad:Ve.exports.func},xm(l,r)}}var vv="onloadcallback",Ak="grecaptcha";function Nk(){return typeof window<"u"&&window.recaptchaOptions||{}}function Ik(){var e=Nk(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+vv+"&render=explicit"}const Fk=$k(Ik,{callbackName:vv,globalName:Ak})(gl),Hk="/Site-Serra/assets/agenda.6fff4078.svg",Uk="/Site-Serra/assets/email.946bdff8.svg",Wk="/Site-Serra/assets/localizacao.69982f44.svg",Bk="/Site-Serra/assets/telefone.9ca94e72.svg",ko=C.span`
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

`,Eo=C.img`

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
   
`,Vk=C.div`
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


    
`,Qk=C.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,qk=C.div`
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
`,Gk=C.div`
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
`,Yk=C.div`
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
    
`,Xk=C.div`
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

`,Kk=C.button`
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
`,Jk=C.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,Zk=C.input`
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
`,eE=C.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${_.notebook}) {
        width: 100%;
    }

    
`,tE=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,nE=C.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`,rE=()=>{const[e,t]=K.exports.useState(""),[n,r]=K.exports.useState(""),[i,o]=K.exports.useState(""),[l,a]=K.exports.useState(""),[s,u]=K.exports.useState(""),[d,c]=K.exports.useState(""),f=m=>{c(m)},h=m=>{if(m.preventDefault(),e===""||n===""||i===""||l===""||s===""||d===""){alert("Preencha todos os campos");return}const y={from_name:e,message:s,from_email:n,from_phone:i,subject:l,"g-recaptcha-response":d};Ck.send("service_al540kd","template_4eqf2kl",y,"HRfoO7P69RR47ZQ0c").then(k=>{alert("Email enviado"),t(""),r(""),o(""),a(""),u("")},k=>{alert("Aconteceu um erro"),console.log("Erro: ",k)})};return Q(tE,{children:[w($c,{titleWidth:"40%",text:"Entre em contato conosco!"}),Q(Gk,{children:[Q(Vk,{children:[Q(bo,{children:[w(Eo,{src:Wk,alt:""}),w(ko,{children:"Rua Bonfim n\xB025 - Vila Amelia, Nova Friburgo - RJ, 28625-570"})]}),Q(bo,{children:[w(Eo,{src:Bk,alt:""}),w(ko,{children:"(22) 2533-2265"})]}),Q(bo,{children:[w(Eo,{src:Uk,alt:""}),w(ko,{children:"serrajr@iprj.uerj.br"})]}),Q(bo,{children:[w(Eo,{src:Hk,alt:""}),Q(ko,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(eE,{children:w(Yk,{children:Q(Xk,{children:[w(Xr,{children:"Nome"}),w(_o,{type:"text",placeholder:"Insira seu nome",value:e,onChange:m=>t(m.target.value)}),w(Xr,{children:"Email"}),w(_o,{type:"text",placeholder:"Insira seu email",value:n,onChange:m=>r(m.target.value)}),w(Xr,{children:"Telefone"}),w(_o,{type:"text",placeholder:"(XX) XXXXX-XXXX",value:i,onChange:m=>o(m.target.value)}),w(Xr,{children:"Assunto"}),w(_o,{type:"text",placeholder:"Digite o assunto",value:l,onChange:m=>a(m.target.value)}),w(Xr,{children:"Mensagem"}),w(Zk,{type:"text",placeholder:"Digite a mensagem",value:s,onChange:m=>u(m.target.value)}),w(nE,{children:w(Fk,{sitekey:"6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq",onChange:f})}),w(Jk,{children:w(Kk,{onClick:m=>h(m),children:"Enviar"})})]})})})]}),w(qk,{children:w(Qk,{children:w(Sk,{})})})]})};var Pu={exports:{}},Un={},Tu={exports:{}},Mt={},Ma={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function l(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),m=h.getPropertyValue("display");return f?m!==r&&o(c,h):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,h=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(c,f){var h=c.nodeName.toLowerCase(),m=i.test(h)&&!c.disabled||h==="a"&&c.href||f;return m&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(c,!h)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,m){return h.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return f.filter(u)}e.exports=t.default})(Ma,Ma.exports);Object.defineProperty(Mt,"__esModule",{value:!0});Mt.resetState=lE;Mt.log=sE;Mt.handleBlur=$i;Mt.handleFocus=Ai;Mt.markForFocusLater=uE;Mt.returnFocus=cE;Mt.popWithoutFocus=dE;Mt.setupScopedFocus=fE;Mt.teardownScopedFocus=pE;var iE=Ma.exports,oE=aE(iE);function aE(e){return e&&e.__esModule?e:{default:e}}var Pr=[],ur=null,Lu=!1;function lE(){Pr=[]}function sE(){}function $i(){Lu=!0}function Ai(){if(Lu){if(Lu=!1,!ur)return;setTimeout(function(){if(!ur.contains(document.activeElement)){var e=(0,oE.default)(ur)[0]||ur;e.focus()}},0)}}function uE(){Pr.push(document.activeElement)}function cE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Pr.length!==0&&(t=Pr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function dE(){Pr.length>0&&Pr.pop()}function fE(e){ur=e,window.addEventListener?(window.addEventListener("blur",$i,!1),document.addEventListener("focus",Ai,!0)):(window.attachEvent("onBlur",$i),document.attachEvent("onFocus",Ai))}function pE(){ur=null,window.addEventListener?(window.removeEventListener("blur",$i),document.removeEventListener("focus",Ai)):(window.detachEvent("onBlur",$i),document.detachEvent("onFocus",Ai))}var Mu={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ma.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var d=void 0,c=s.shiftKey,f=u[0],h=u[u.length-1],m=o();if(a===m){if(!c)return;d=h}if(h===m&&!c&&(d=f),f===m&&c&&(d=h),d){s.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),k=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!k){var v=u.indexOf(m);if(v>-1&&(v+=c?-1:1),d=u[v],typeof d>"u"){s.preventDefault(),d=c?h:f,d.focus();return}s.preventDefault(),d.focus()}}e.exports=t.default})(Mu,Mu.exports);var Rt={},hE=function(){},mE=hE,Tt={},gv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(gv);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canUseDOM=Tt.SafeNodeList=Tt.SafeHTMLCollection=void 0;var vE=gv.exports,gE=yE(vE);function yE(e){return e&&e.__esModule?e:{default:e}}var yl=gE.default,wE=yl.canUseDOM?window.HTMLElement:{};Tt.SafeHTMLCollection=yl.canUseDOM?window.HTMLCollection:{};Tt.SafeNodeList=yl.canUseDOM?window.NodeList:{};Tt.canUseDOM=yl.canUseDOM;Tt.default=wE;Object.defineProperty(Rt,"__esModule",{value:!0});Rt.resetState=bE;Rt.log=_E;Rt.assertNodeList=yv;Rt.setElement=CE;Rt.validateElement=Bc;Rt.hide=OE;Rt.show=PE;Rt.documentNotReadyOrSSRTesting=TE;var xE=mE,SE=EE(xE),kE=Tt;function EE(e){return e&&e.__esModule?e:{default:e}}var pt=null;function bE(){pt&&(pt.removeAttribute?pt.removeAttribute("aria-hidden"):pt.length!=null?pt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(pt).forEach(function(e){return e.removeAttribute("aria-hidden")})),pt=null}function _E(){}function yv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function CE(e){var t=e;if(typeof t=="string"&&kE.canUseDOM){var n=document.querySelectorAll(t);yv(n,t),t=n}return pt=t||pt,pt}function Bc(e){var t=e||pt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,SE.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function OE(e){var t=!0,n=!1,r=void 0;try{for(var i=Bc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function PE(e){var t=!0,n=!1,r=void 0;try{for(var i=Bc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function TE(){pt=null}var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.resetState=LE;jr.log=ME;var pi={},hi={};function Vf(e,t){e.classList.remove(t)}function LE(){var e=document.getElementsByTagName("html")[0];for(var t in pi)Vf(e,pi[t]);var n=document.body;for(var r in hi)Vf(n,hi[r]);pi={},hi={}}function ME(){}var RE=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},jE=function(t,n){return t[n]&&(t[n]-=1),n},zE=function(t,n,r){r.forEach(function(i){RE(n,i),t.add(i)})},DE=function(t,n,r){r.forEach(function(i){jE(n,i),n[i]===0&&t.remove(i)})};jr.add=function(t,n){return zE(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};jr.remove=function(t,n){return DE(t.classList,t.nodeName.toLowerCase()=="html"?pi:hi,n.split(" "))};var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.log=AE;zr.resetState=NE;function $E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var wv=function e(){var t=this;$E(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ra=new wv;function AE(){console.log("portalOpenInstances ----------"),console.log(Ra.openInstances.length),Ra.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function NE(){Ra=new wv}zr.default=Ra;var Vc={};Object.defineProperty(Vc,"__esModule",{value:!0});Vc.resetState=UE;Vc.log=WE;var IE=zr,FE=HE(IE);function HE(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,Et=void 0,$n=[];function UE(){for(var e=[Be,Et],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=Et=null,$n=[]}function WE(){console.log("bodyTrap ----------"),console.log($n.length);for(var e=[Be,Et],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Qf(){$n.length!==0&&$n[$n.length-1].focusContent()}function BE(e,t){!Be&&!Et&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Qf),Et=Be.cloneNode(),Et.addEventListener("focus",Qf)),$n=t,$n.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==Et&&document.body.appendChild(Et)):(Be.parentElement&&Be.parentElement.removeChild(Be),Et.parentElement&&Et.parentElement.removeChild(Et))}FE.default.subscribe(BE);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var G=arguments[I];for(var R in G)Object.prototype.hasOwnProperty.call(G,R)&&(N[R]=G[R])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,G){for(var R=0;R<G.length;R++){var T=G[R];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(I,T.key,T)}}return function(I,G,R){return G&&N(I.prototype,G),R&&N(I,R),I}}(),o=K.exports,l=Ve.exports,a=O(l),s=Mt,u=x(s),d=Mu.exports,c=O(d),f=Rt,h=x(f),m=jr,y=x(m),k=Tt,v=O(k),p=zr,g=O(p);function x(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var G in N)Object.prototype.hasOwnProperty.call(N,G)&&(I[G]=N[G]);return I.default=N,I}function O(N){return N&&N.__esModule?N:{default:N}}function P(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function E(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function S(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},j=function(I){return I.code==="Tab"||I.keyCode===9},D=function(I){return I.code==="Escape"||I.keyCode===27},A=0,$=function(N){S(I,N);function I(G){P(this,I);var R=E(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,G));return R.setOverlayRef=function(T){R.overlay=T,R.props.overlayRef&&R.props.overlayRef(T)},R.setContentRef=function(T){R.content=T,R.props.contentRef&&R.props.contentRef(T)},R.afterClose=function(){var T=R.props,z=T.appElement,U=T.ariaHideApp,V=T.htmlOpenClassName,H=T.bodyOpenClassName,b=T.parentSelector,q=b&&b().ownerDocument||document;H&&y.remove(q.body,H),V&&y.remove(q.getElementsByTagName("html")[0],V),U&&A>0&&(A-=1,A===0&&h.show(z)),R.props.shouldFocusAfterRender&&(R.props.shouldReturnFocusAfterClose?(u.returnFocus(R.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),R.props.onAfterClose&&R.props.onAfterClose(),g.default.deregister(R)},R.open=function(){R.beforeOpen(),R.state.afterOpen&&R.state.beforeClose?(clearTimeout(R.closeTimer),R.setState({beforeClose:!1})):(R.props.shouldFocusAfterRender&&(u.setupScopedFocus(R.node),u.markForFocusLater()),R.setState({isOpen:!0},function(){R.openAnimationFrame=requestAnimationFrame(function(){R.setState({afterOpen:!0}),R.props.isOpen&&R.props.onAfterOpen&&R.props.onAfterOpen({overlayEl:R.overlay,contentEl:R.content})})}))},R.close=function(){R.props.closeTimeoutMS>0?R.closeWithTimeout():R.closeWithoutTimeout()},R.focusContent=function(){return R.content&&!R.contentHasFocus()&&R.content.focus({preventScroll:!0})},R.closeWithTimeout=function(){var T=Date.now()+R.props.closeTimeoutMS;R.setState({beforeClose:!0,closesAt:T},function(){R.closeTimer=setTimeout(R.closeWithoutTimeout,R.state.closesAt-Date.now())})},R.closeWithoutTimeout=function(){R.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},R.afterClose)},R.handleKeyDown=function(T){j(T)&&(0,c.default)(R.content,T),R.props.shouldCloseOnEsc&&D(T)&&(T.stopPropagation(),R.requestClose(T))},R.handleOverlayOnClick=function(T){R.shouldClose===null&&(R.shouldClose=!0),R.shouldClose&&R.props.shouldCloseOnOverlayClick&&(R.ownerHandlesClose()?R.requestClose(T):R.focusContent()),R.shouldClose=null},R.handleContentOnMouseUp=function(){R.shouldClose=!1},R.handleOverlayOnMouseDown=function(T){!R.props.shouldCloseOnOverlayClick&&T.target==R.overlay&&T.preventDefault()},R.handleContentOnClick=function(){R.shouldClose=!1},R.handleContentOnMouseDown=function(){R.shouldClose=!1},R.requestClose=function(T){return R.ownerHandlesClose()&&R.props.onRequestClose(T)},R.ownerHandlesClose=function(){return R.props.onRequestClose},R.shouldBeClosed=function(){return!R.state.isOpen&&!R.state.beforeClose},R.contentHasFocus=function(){return document.activeElement===R.content||R.content.contains(document.activeElement)},R.buildClassName=function(T,z){var U=(typeof z>"u"?"undefined":r(z))==="object"?z:{base:M[T],afterOpen:M[T]+"--after-open",beforeClose:M[T]+"--before-close"},V=U.base;return R.state.afterOpen&&(V=V+" "+U.afterOpen),R.state.beforeClose&&(V=V+" "+U.beforeClose),typeof z=="string"&&z?V+" "+z:V},R.attributesFromObject=function(T,z){return Object.keys(z).reduce(function(U,V){return U[T+"-"+V]=z[V],U},{})},R.state={afterOpen:!1,beforeClose:!1},R.shouldClose=null,R.moveFromContentToOverlay=null,R}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(R,T){this.props.isOpen&&!R.isOpen?this.open():!this.props.isOpen&&R.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!T.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var R=this.props,T=R.appElement,z=R.ariaHideApp,U=R.htmlOpenClassName,V=R.bodyOpenClassName,H=R.parentSelector,b=H&&H().ownerDocument||document;V&&y.add(b.body,V),U&&y.add(b.getElementsByTagName("html")[0],U),z&&(A+=1,h.hide(T)),g.default.register(this)}},{key:"render",value:function(){var R=this.props,T=R.id,z=R.className,U=R.overlayClassName,V=R.defaultStyles,H=R.children,b=z?{}:V.content,q=U?{}:V.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},L=n({id:T,ref:this.setContentRef,style:n({},b,this.props.style.content),className:this.buildClassName("content",z),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(L,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);$.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},$.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(k.SafeHTMLCollection),a.default.instanceOf(k.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=$,e.exports=t.default})(Tu,Tu.exports);function xv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Sv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function kv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}xv.__suppressDeprecationWarning=!0;Sv.__suppressDeprecationWarning=!0;kv.__suppressDeprecationWarning=!0;function VE(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=xv,t.componentWillReceiveProps=Sv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=kv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return e}const QE=Object.freeze(Object.defineProperty({__proto__:null,polyfill:VE},Symbol.toStringTag,{value:"Module"})),qE=sp(QE);Object.defineProperty(Un,"__esModule",{value:!0});Un.bodyOpenClassName=Un.portalClassName=void 0;var qf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},GE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ev=K.exports,ja=Gi(Ev),YE=$u.exports,za=Gi(YE),XE=Ve.exports,re=Gi(XE),KE=Tu.exports,Gf=Gi(KE),JE=Rt,ZE=tb(JE),un=Tt,Yf=Gi(un),eb=qE;function tb(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Gi(e){return e&&e.__esModule?e:{default:e}}function nb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function rb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ib=Un.portalClassName="ReactModalPortal",ob=Un.bodyOpenClassName="ReactModal__Body--open",Pn=un.canUseDOM&&za.default.createPortal!==void 0,Kf=function(t){return document.createElement(t)},Jf=function(){return Pn?za.default.createPortal:za.default.unstable_renderSubtreeIntoContainer};function Co(e){return e()}var Yi=function(e){rb(t,e);function t(){var n,r,i,o;nb(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Xf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Pn&&za.default.unmountComponentAtNode(i.node);var u=Co(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Jf(),c=d(i,ja.default.createElement(Gf.default,qf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(c)},r),Xf(i,o)}return GE(t,[{key:"componentDidMount",value:function(){if(!!un.canUseDOM){Pn||(this.node=Kf("div")),this.node.className=this.props.portalClassName;var r=Co(this.props.parentSelector);r.appendChild(this.node),!Pn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Co(r.parentSelector),o=Co(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!un.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!Pn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!un.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!un.canUseDOM||!Pn)return null;!this.node&&Pn&&(this.node=Kf("div"));var r=Jf();return r(ja.default.createElement(Gf.default,qf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){ZE.setElement(r)}}]),t}(Ev.Component);Yi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Yf.default),re.default.instanceOf(un.SafeHTMLCollection),re.default.instanceOf(un.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Yf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Yi.defaultProps={isOpen:!1,portalClassName:ib,bodyOpenClassName:ob,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ja.default.createElement("div",t,n)},contentElement:function(t,n){return ja.default.createElement("div",t,n)}};Yi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,eb.polyfill)(Yi);Un.default=Yi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Un,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Pu,Pu.exports);const bv=Da(Pu.exports),ab=C.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${_.largeDesktop}){
        font-size: 30px;
    }

    @media screen and (min-width: ${_.extraLargeDesktop}){
        font-size: 40px;
    }
`,lb=C.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
`,sb=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${_.largeMobile}){
        font-size: 12px;
    }
`,cs=C.h2`
`,ub=C.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,cb=C.a`
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
`,db=C.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,fb=C.img`
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
`,pb=C.button`
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
`,Zf=C.p`

`,hb=C.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,mb=C.ul`
    
`,vb=C.li`
    list-style: none;
`;bv.setAppElement("#root");const gb=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"70vh",overflow:"scroll",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#0000004f"}};return n?w(bv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Q(ab,{children:[Q(lb,{children:[Q(sb,{children:[w("h1",{children:n.title}),w(pb,{onClick:()=>t(!1),children:"X"})]}),w(hb,{})]}),w(cs,{children:"Resumo do projeto"}),Q(db,{children:[w(fb,{src:n.image,alt:n.title}),w(Zf,{children:n.content})]}),w(cs,{children:"Membros envolvidos"}),w(mb,{children:n.members.map((i,o)=>w(vb,{children:i},o))}),w(cs,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Zf,{children:i},o)),n.acess?w(ub,{children:w(cb,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},yb=C.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,wb=C.div`
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
`,xb=C.section`
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

    
`,Sb=C.div`
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

`,kb=C.div`
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

    

`,Eb=C.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${_.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,bb=C.div`
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
    
    
`,_b=C.span`
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
`,Cb=C.button`
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

`,Ob=C.div`
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
    
`,Pb=C.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,_v=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return w(Pb,{containerWidth:e.width,children:w(uv,{...t,children:e.carouselData.map((l,a)=>w(yb,{children:w(wb,{children:Q(xb,{children:[w(Sb,{children:w($c,{text:l.title})}),Q(kb,{children:[w(bb,{children:w(Eb,{src:l.image,alt:l.title})}),Q(Ob,{children:[w(_b,{children:l.content}),w(Cb,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(gb,{data:i,status:n,setStatus:r})]})]})]})})},a))})})},Tb="/Site-Serra/assets/marmitex.857922f9.svg",Lb={mechanicsProjects:[{title:"Projeto Marmitex",image:Tb,content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto Lar Abrigo Amor a Jesus",image:"https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG",content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]}]},Oo="/Site-Serra/assets/seta.7067b273.svg",Mb="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",Rb="/Site-Serra/assets/hammer-icon.c370caae.svg",jb="/Site-Serra/assets/bot-icon.237c34bd.svg",zb="/Site-Serra/assets/3d-icon.6c010241.svg",Db="/Site-Serra/assets/drawing-icon.462650d6.svg",Cv="/Site-Serra/assets/arrow-up.1b45090f.svg",$b="/Site-Serra/assets/background-mecanica.81e45f94.svg",Ab=C.div`
`,Nb=C.div`
    background-image: url(${$b});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,Ib=C.div`
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

    
`,ep=C.p`
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
`,Fb=C.div`
    
`,Hb=C.h1`
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

       
`;const tp=C.div`
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
`,Mo=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Ro=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


`,Ub=C.img`
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 80%;
    }

    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
    }
`,Wb=C.hr`
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
`,Bb=C.p`
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
`,Vb=C.div`
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
`;const Qb=C.img`
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
`,qb=C.div`
    margin-top: 3%;

    @media screen and (max-width: ${_.largeMobile}) {
        margin-top: 20%;
    }
`,Gb=()=>{const e=Vi();return Q(Ab,{children:[Q(Ib,{children:[Q(Fb,{children:[w(ep,{children:"Engenharia"}),w(ep,{children:"Mec\xE2nica"})]}),w(Ub,{src:Mb,alt:"Imagem de Mec\xE2nica"})]}),Q(Nb,{children:[w(Hb,{children:"Carta de Servi\xE7os"}),Q(tp,{children:[Q(Lo,{children:[Q(Mo,{children:[w(en,{src:Rb,alt:"Imagem Sistemas"}),w(Po,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),Q(Ro,{children:[w(en,{src:Oo,alt:"Seta"}),w(To,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),Q(Lo,{children:[Q(Mo,{children:[w(en,{src:Db,alt:"Imagem Site"}),w(Po,{children:"Desenho T\xE9cnico e Industrial"})]}),Q(Ro,{children:[w(en,{src:Oo,alt:"Seta"}),w(To,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),Q(tp,{children:[Q(Lo,{children:[Q(Mo,{children:[w(en,{src:jb,alt:"Imagem Sistemas"}),w(Po,{children:"Projetos de Automa\xE7\xE3o"})]}),Q(Ro,{children:[w(en,{src:Oo,alt:"Seta"}),w(To,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),Q(Lo,{children:[Q(Mo,{children:[w(en,{src:zb,alt:"Imagem Site"}),w(Po,{children:"Prototipagem"})]}),Q(Ro,{children:[w(en,{src:Oo,alt:"Seta"}),w(To,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),w(Wb,{}),w(Vb,{children:w(Bb,{onClick:()=>{e("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(qb,{children:w(_v,{carouselData:Lb.mechanicsProjects})}),w(Qb,{onClick:()=>window.scrollTo(0,0),src:Cv,alt:"ScrollUp"})]})},Yb="/Site-Serra/assets/friburguense.ba8886f5.svg",Xb="/Site-Serra/assets/projeto-tmf.f6316197.svg",Kb={computingProjects:[{title:"Projeto Friburguense",image:Yb,content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto TMF",image:Xb,content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"],acess:"https://usinagemtmf.com.br/"}]},Jb="/Site-Serra/assets/presentation-image.3bba7d23.svg",Zb="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",e_="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",np="/Site-Serra/assets/seta.13cafa5d.svg",t_="/Site-Serra/assets/css-icon.e1a4dd78.svg",n_="/Site-Serra/assets/html-icon.e0dc6b68.svg",r_="/Site-Serra/assets/js-icon.f4d001af.svg",i_="/Site-Serra/assets/react-icon.f937629c.svg",o_="/Site-Serra/assets/ts-icon.bf061be4.svg",a_="/Site-Serra/assets/styled-icon.35b18102.svg",l_="/Site-Serra/assets/background-computacao.dbcf66d3.svg",s_=C.div`
    scroll-behavior: smooth;

`,u_=C.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${_.largeMobile}) {
        flex-wrap: wrap;
    } 
`,c_=C.img`
    margin-top: 10px;
    width: 40%;

    @media screen and (max-width: ${_.largeMobile}) {
        width: 70%;
    }
    @media screen and (min-width: ${_.largeDesktop}) {
        width: 30%;
    }
`,d_=C.div`
    padding-top: 2%;
    background-image: url(${l_});
    background-repeat: no-repeat; 
    background-size: cover; 
`,ds=C.p`
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
`,f_=C.div`
`,p_=C.h1`
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

       
`;const h_=C.div`
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
`,rp=C.div`
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

`,jo=C.img`
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
`,ip=C.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,op=C.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,ap=C.h3`
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
`,lp=C.p`
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

    
`,m_=C.div`
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
    
`;const v_=C.img`
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
    
`;const g_=C.div`
    margin-top: 3%;
`,y_=C.p`
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
`,w_=C.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,x_=C.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,S_=()=>{const e=Vi();return Q(s_,{children:[Q(u_,{children:[Q(f_,{children:[w(ds,{children:"Engenharia"}),w(ds,{children:"de"}),w(ds,{children:"Computa\xE7\xE3o"})]}),w(c_,{src:Jb,alt:"Imagem de Computa\xE7\xE3o"})]}),Q(d_,{children:[w(p_,{children:"Carta de Servi\xE7os"}),Q(h_,{children:[Q(rp,{children:[Q(ip,{children:[w(jo,{src:e_,alt:"Imagem Site"}),w(ap,{children:"Desenvolvimento de Websites"})]}),Q(op,{children:[w(jo,{src:np,alt:"Seta"}),w(lp,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),Q(rp,{children:[Q(ip,{children:[w(jo,{src:Zb,alt:"Imagem Sistemas"}),w(ap,{children:"Desenvolvimento de Sistemas Web"})]}),Q(op,{children:[w(jo,{src:np,alt:"Seta"}),w(lp,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),Q(m_,{children:[w(Gn,{src:n_,alt:"ImagemHtml"}),w(Gn,{src:t_,alt:"Imagemcss"}),w(Gn,{src:r_,alt:"ImagemJS"}),w(Gn,{src:o_,alt:"ImagemTS"}),w(Gn,{src:i_,alt:"ImagemREACT"}),w(Gn,{src:a_,alt:"ImagemStyled"})]})]}),w(x_,{}),w(w_,{children:w(y_,{onClick:()=>{e("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(g_,{children:w(_v,{carouselData:Kb.computingProjects})}),w(v_,{onClick:()=>window.scrollTo(0,0),src:Cv,alt:"ScrollUp"})]})},k_=()=>Q(Lm,{children:[w(cw,{}),Q(W1,{children:[w(Yn,{path:"/",element:w(tk,{})}),w(Yn,{path:"/computacao",element:w(S_,{})}),w(Yn,{path:"/mecanica",element:w(Gb,{})}),w(Yn,{path:"/quemSomos",element:w(mk,{})}),w(Yn,{path:"/contatos",element:w(rE,{})})]}),w(h1,{})]});function E_(){return w("div",{className:"App",children:w(Q1,{basename:"/Site-Serra",children:w(k_,{})})})}fs.createRoot(document.getElementById("root")).render(w(Lr.StrictMode,{children:w(E_,{})}));
