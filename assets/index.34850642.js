(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function La(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Jf(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),yv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),kv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),Wc=Symbol.iterator;function Pv(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function $r(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zf}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=$r.prototype;function Pu(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zf}var Tu=Pu.prototype=new np;Tu.constructor=Pu;ep(Tu,$r.prototype);Tu.isPureReactComponent=!0;var Bc=Array.isArray,rp=Object.prototype.hasOwnProperty,Lu={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)rp.call(t,r)&&!ip.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fi,type:e,key:o,ref:l,props:i,_owner:Lu.current}}function Tv(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function Lv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qc=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lv(""+e.key):t.toString(36)}function To(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fi:case yv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vl(l,0):r,Bc(i)?(n="",e!=null&&(n=e.replace(qc,"$&/")+"/"),To(i,t,n,"",function(u){return u})):i!=null&&($u(i)&&(i=Tv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(qc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Bc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+vl(o,a);l+=To(o,t,n,s,i)}else if(s=Pv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+vl(o,a++),l+=To(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $v(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Lo={transition:null},jv={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Lu};ue.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!$u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=$r;ue.Fragment=wv;ue.Profiler=Sv;ue.PureComponent=Pu;ue.StrictMode=xv;ue.Suspense=_v;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Lu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)rp.call(t,s)&&!ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fi,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ev,_context:e},e.Consumer=e};ue.createElement=op;ue.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:bv,render:e}};ue.isValidElement=$u;ue.lazy=function(e){return{$$typeof:Ov,_payload:{_status:-1,_result:e},_init:$v}};ue.memo=function(e,t){return{$$typeof:Cv,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ue.useContext=function(e){return Ke.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ue.useId=function(){return Ke.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ue.useRef=function(e){return Ke.current.useRef(e)};ue.useState=function(e){return Ke.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ke.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const jr=La(K.exports);var ls={},ju={exports:{}},ct={},ap={exports:{}},lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var U=P.length;P.push(R);e:for(;0<U;){var q=U-1>>>1,H=P[q];if(0<i(H,R))P[q]=R,P[U]=H,U=q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],U=P.pop();if(U!==R){P[0]=U;e:for(var q=0,H=P.length,_=H>>>1;q<_;){var V=2*(q+1)-1,F=P[V],T=V+1,J=P[T];if(0>i(F,U))T<H&&0>i(J,F)?(P[q]=J,P[T]=U,q=T):(P[q]=F,P[V]=U,q=V);else if(T<H&&0>i(J,U))P[q]=J,P[T]=U,q=T;else break e}}return R}function i(P,R){var U=P.sortIndex-R.sortIndex;return U!==0?U:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,h=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=P)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function x(P){if(y=!1,g(P),!m)if(n(s)!==null)m=!0,Q(C);else{var R=n(u);R!==null&&j(x,R.startTime-P)}}function C(P,R){m=!1,y&&(y=!1,v(S),S=-1),h=!0;var U=f;try{for(g(R),c=n(s);c!==null&&(!(c.expirationTime>R)||P&&!z());){var q=c.callback;if(typeof q=="function"){c.callback=null,f=c.priorityLevel;var H=q(c.expirationTime<=R);R=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(s)&&r(s),g(R)}else r(s);c=n(s)}if(c!==null)var _=!0;else{var V=n(u);V!==null&&j(x,V.startTime-R),_=!1}return _}finally{c=null,f=U,h=!1}}var O=!1,b=null,S=-1,$=5,M=-1;function z(){return!(e.unstable_now()-M<$)}function A(){if(b!==null){var P=e.unstable_now();M=P;var R=!0;try{R=b(!0,P)}finally{R?D():(O=!1,b=null)}}else O=!1}var D;if(typeof p=="function")D=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,D=function(){I.postMessage(null)}}else D=function(){E(A,0)};function Q(P){b=P,O||(O=!0,D())}function j(P,R){S=E(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,Q(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var U=f;f=R;try{return P()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=f;f=P;try{return R()}finally{f=U}},e.unstable_scheduleCallback=function(P,R,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,P){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,P={id:d++,callback:R,priorityLevel:P,startTime:U,expirationTime:H,sortIndex:-1},U>q?(P.sortIndex=U,t(u,P),n(s)===null&&P===n(u)&&(y?(v(S),S=-1):y=!0,j(x,U-q))):(P.sortIndex=H,t(s,P),m||h||(m=!0,Q(C))),P},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(P){var R=f;return function(){var U=f;f=R;try{return P.apply(this,arguments)}finally{f=U}}}})(lp);(function(e){e.exports=lp})(ap);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=K.exports,ut=ap.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var up=new Set,gi={};function Bn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(gi[e]=t,e=0;e<t.length;e++)up.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,Mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vc={},Qc={};function Rv(e){return ss.call(Qc,e)?!0:ss.call(Vc,e)?!1:Mv.test(e)?Qc[e]=!0:(Vc[e]=!0,!1)}function zv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dv(e,t,n,r){if(t===null||typeof t>"u"||zv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Ru);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Ru);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Ru);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dv(t,n,i,r)&&(n=null),r||i===null?Rv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),cp=Symbol.for("react.provider"),dp=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),ds=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),Gc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Gc&&e[Gc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,gl;function ei(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var yl=!1;function wl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function Av(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Kn:return"Portal";case us:return"Profiler";case Du:return"StrictMode";case cs:return"Suspense";case ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dp:return(e.displayName||"Context")+".Consumer";case cp:return(e._context.displayName||"Context")+".Provider";case Au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:fs(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return fs(e(t))}catch{}}return null}function Nv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=Iv(e))}function hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ps(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mp(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function hs(e,t){mp(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&ms(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ms(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(ti(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function vp(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fv=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){Fv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function wp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,t){if(t){if(Hv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,pr=null,hr=null;function Zc(e){if(e=Wi(e)){if(typeof Ss!="function")throw Error(B(280));var t=e.stateNode;t&&(t=za(t),Ss(e.stateNode,e.type,t))}}function Sp(e){pr?hr?hr.push(e):hr=[e]:pr=e}function Ep(){if(pr){var e=pr,t=hr;if(hr=pr=null,Zc(e),t)for(e=0;e<t.length;e++)Zc(t[e])}}function kp(e,t){return e(t)}function bp(){}var xl=!1;function _p(e,t,n){if(xl)return e(t,n);xl=!0;try{return kp(e,t,n)}finally{xl=!1,(pr!==null||hr!==null)&&(bp(),Ep())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Es=!1;if(Qt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Es=!1}function Uv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var oi=!1,Wo=null,Bo=!1,ks=null,Wv={onError:function(e){oi=!0,Wo=e}};function Bv(e,t,n,r,i,o,l,a,s){oi=!1,Wo=null,Uv.apply(Wv,arguments)}function qv(e,t,n,r,i,o,l,a,s){if(Bv.apply(this,arguments),oi){if(oi){var u=Wo;oi=!1,Wo=null}else throw Error(B(198));Bo||(Bo=!0,ks=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ed(e){if(qn(e)!==e)throw Error(B(188))}function Vv(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ed(i),e;if(o===r)return ed(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Op(e){return e=Vv(e),e!==null?Pp(e):null}function Pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pp(e);if(t!==null)return t;e=e.sibling}return null}var Tp=ut.unstable_scheduleCallback,td=ut.unstable_cancelCallback,Qv=ut.unstable_shouldYield,Gv=ut.unstable_requestPaint,Ce=ut.unstable_now,Yv=ut.unstable_getCurrentPriorityLevel,Fu=ut.unstable_ImmediatePriority,Lp=ut.unstable_UserBlockingPriority,qo=ut.unstable_NormalPriority,Xv=ut.unstable_LowPriority,$p=ut.unstable_IdlePriority,$a=null,At=null;function Kv(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:eg,Jv=Math.log,Zv=Math.LN2;function eg(e){return e>>>=0,e===0?32:31-(Jv(e)/Zv|0)|0}var no=64,ro=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ni(a):(o&=l,o!==0&&(r=ni(o)))}else l=n&~i,l!==0?r=ni(l):o!==0&&(r=ni(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=tg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jp(){var e=no;return no<<=1,(no&4194240)===0&&(no=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Mp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rp,Uu,zp,Dp,Ap,_s=!1,io=[],un=null,cn=null,dn=null,xi=new Map,Si=new Map,rn=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Fr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function og(e,t,n,r,i){switch(t){case"focusin":return un=Fr(un,e,t,n,r,i),!0;case"dragenter":return cn=Fr(cn,e,t,n,r,i),!0;case"mouseover":return dn=Fr(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,Fr(xi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Fr(Si.get(o)||null,e,t,n,r,i)),!0}return!1}function Np(e){var t=Pn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Cp(n),t!==null){e.blockedOn=t,Ap(e.priority,function(){zp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=Wi(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function rd(e,t,n){$o(e)&&n.delete(t)}function ag(){_s=!1,un!==null&&$o(un)&&(un=null),cn!==null&&$o(cn)&&(cn=null),dn!==null&&$o(dn)&&(dn=null),xi.forEach(rd),Si.forEach(rd)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,ag)))}function Ei(e){function t(i){return Hr(i,e)}if(0<io.length){Hr(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Hr(un,e),cn!==null&&Hr(cn,e),dn!==null&&Hr(dn,e),xi.forEach(t),Si.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&rn.shift()}var mr=Kt.ReactCurrentBatchConfig,Qo=!0;function lg(e,t,n,r){var i=fe,o=mr.transition;mr.transition=null;try{fe=1,Wu(e,t,n,r)}finally{fe=i,mr.transition=o}}function sg(e,t,n,r){var i=fe,o=mr.transition;mr.transition=null;try{fe=4,Wu(e,t,n,r)}finally{fe=i,mr.transition=o}}function Wu(e,t,n,r){if(Qo){var i=Cs(e,t,n,r);if(i===null)$l(e,t,r,Go,n),nd(e,r);else if(og(i,e,t,n,r))r.stopPropagation();else if(nd(e,r),t&4&&-1<ig.indexOf(e)){for(;i!==null;){var o=Wi(i);if(o!==null&&Rp(o),o=Cs(e,t,n,r),o===null&&$l(e,t,r,Go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var Go=null;function Cs(e,t,n,r){if(Go=null,e=Iu(r),e=Pn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yv()){case Fu:return 1;case Lp:return 4;case qo:case Xv:return 16;case $p:return 536870912;default:return 16}default:return 16}}var an=null,Bu=null,jo=null;function Fp(){if(jo)return jo;var e,t=Bu,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return jo=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function id(){return!1}function dt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oo:id,this.isPropagationStopped=id,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=dt(Mr),Ui=be({},Mr,{view:0,detail:0}),ug=dt(Ui),El,kl,Ur,ja=be({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(El=e.screenX-Ur.screenX,kl=e.screenY-Ur.screenY):kl=El=0,Ur=e),El)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),od=dt(ja),cg=be({},ja,{dataTransfer:0}),dg=dt(cg),fg=be({},Ui,{relatedTarget:0}),bl=dt(fg),pg=be({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=dt(pg),mg=be({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=dt(mg),gg=be({},Mr,{data:0}),ad=dt(gg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xg[e])?!!t[e]:!1}function Vu(){return Sg}var Eg=be({},Ui,{key:function(e){if(e.key){var t=yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kg=dt(Eg),bg=be({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=dt(bg),_g=be({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Cg=dt(_g),Og=be({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=dt(Og),Tg=be({},ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=dt(Tg),$g=[9,13,27,32],Qu=Qt&&"CompositionEvent"in window,ai=null;Qt&&"documentMode"in document&&(ai=document.documentMode);var jg=Qt&&"TextEvent"in window&&!ai,Hp=Qt&&(!Qu||ai&&8<ai&&11>=ai),sd=String.fromCharCode(32),ud=!1;function Up(e,t){switch(e){case"keyup":return $g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Mg(e,t){switch(e){case"compositionend":return Wp(t);case"keypress":return t.which!==32?null:(ud=!0,sd);case"textInput":return e=t.data,e===sd&&ud?null:e;default:return null}}function Rg(e,t){if(Zn)return e==="compositionend"||!Qu&&Up(e,t)?(e=Fp(),jo=Bu=an=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hp&&t.locale!=="ko"?null:t.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zg[e.type]:t==="textarea"}function Bp(e,t,n,r){Sp(r),t=Yo(t,"onChange"),0<t.length&&(n=new qu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,ki=null;function Dg(e){th(e,0)}function Ma(e){var t=nr(e);if(hp(t))return e}function Ag(e,t){if(e==="change")return t}var qp=!1;if(Qt){var _l;if(Qt){var Cl="oninput"in document;if(!Cl){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Cl=typeof dd.oninput=="function"}_l=Cl}else _l=!1;qp=_l&&(!document.documentMode||9<document.documentMode)}function fd(){li&&(li.detachEvent("onpropertychange",Vp),ki=li=null)}function Vp(e){if(e.propertyName==="value"&&Ma(ki)){var t=[];Bp(t,ki,e,Iu(e)),_p(Dg,t)}}function Ng(e,t,n){e==="focusin"?(fd(),li=t,ki=n,li.attachEvent("onpropertychange",Vp)):e==="focusout"&&fd()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(ki)}function Fg(e,t){if(e==="click")return Ma(t)}function Hg(e,t){if(e==="input"||e==="change")return Ma(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Ug;function bi(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ss.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,t){var n=pd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pd(n)}}function Qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gp(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wg(e){var t=Gp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(r!==null&&Gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hd(n,o);var l=hd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bg=Qt&&"documentMode"in document&&11>=document.documentMode,er=null,Os=null,si=null,Ps=!1;function md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||er==null||er!==Uo(r)||(r=er,"selectionStart"in r&&Gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&bi(si,r)||(si=r,r=Yo(Os,"onSelect"),0<r.length&&(t=new qu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Ol={},Yp={};Qt&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ra(e){if(Ol[e])return Ol[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yp)return Ol[e]=t[n];return e}var Xp=Ra("animationend"),Kp=Ra("animationiteration"),Jp=Ra("animationstart"),Zp=Ra("transitionend"),eh=new Map,vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){eh.set(e,t),Bn(t,[e])}for(var Pl=0;Pl<vd.length;Pl++){var Tl=vd[Pl],qg=Tl.toLowerCase(),Vg=Tl[0].toUpperCase()+Tl.slice(1);Sn(qg,"on"+Vg)}Sn(Xp,"onAnimationEnd");Sn(Kp,"onAnimationIteration");Sn(Jp,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Zp,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function gd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qv(r,t,void 0,e),e.currentTarget=null}function th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;gd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;gd(i,a,u),o=s}}}if(Bo)throw e=ks,Bo=!1,ks=null,e}function ge(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var r=e+"__bubble";n.has(r)||(nh(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),nh(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[lo]){e[lo]=!0,up.forEach(function(n){n!=="selectionchange"&&(Qg.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Ll("selectionchange",!1,t))}}function nh(e,t,n,r){switch(Ip(t)){case 1:var i=lg;break;case 4:i=sg;break;default:i=Wu}n=i.bind(null,t,n,e),i=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}_p(function(){var u=o,d=Iu(n),c=[];e:{var f=eh.get(e);if(f!==void 0){var h=qu,m=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":h=kg;break;case"focusin":m="focus",h=bl;break;case"focusout":m="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cg;break;case Xp:case Kp:case Jp:h=hg;break;case Zp:h=Pg;break;case"scroll":h=ug;break;case"wheel":h=Lg;break;case"copy":case"cut":case"paste":h=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ld}var y=(t&4)!==0,E=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,v!==null&&(x=wi(p,v),x!=null&&y.push(Ci(p,x,g)))),E)break;p=p.return}0<y.length&&(f=new h(f,m,null,n,d),c.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==xs&&(m=n.relatedTarget||n.fromElement)&&(Pn(m)||m[Gt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Pn(m):null,m!==null&&(E=qn(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=od,x="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=ld,x="onPointerLeave",v="onPointerEnter",p="pointer"),E=h==null?f:nr(h),g=m==null?f:nr(m),f=new y(x,p+"leave",h,n,d),f.target=E,f.relatedTarget=g,x=null,Pn(d)===u&&(y=new y(v,p+"enter",m,n,d),y.target=g,y.relatedTarget=E,x=y),E=x,h&&m)t:{for(y=h,v=m,p=0,g=y;g;g=Gn(g))p++;for(g=0,x=v;x;x=Gn(x))g++;for(;0<p-g;)y=Gn(y),p--;for(;0<g-p;)v=Gn(v),g--;for(;p--;){if(y===v||v!==null&&y===v.alternate)break t;y=Gn(y),v=Gn(v)}y=null}else y=null;h!==null&&yd(c,f,h,y,!1),m!==null&&E!==null&&yd(c,E,m,y,!0)}}e:{if(f=u?nr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=Ag;else if(cd(f))if(qp)C=Hg;else{C=Ig;var O=Ng}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Fg);if(C&&(C=C(e,u))){Bp(c,C,n,d);break e}O&&O(e,f,u),e==="focusout"&&(O=f._wrapperState)&&O.controlled&&f.type==="number"&&ms(f,"number",f.value)}switch(O=u?nr(u):window,e){case"focusin":(cd(O)||O.contentEditable==="true")&&(er=O,Os=u,si=null);break;case"focusout":si=Os=er=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,md(c,n,d);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":md(c,n,d)}var b;if(Qu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Zn?Up(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Hp&&n.locale!=="ko"&&(Zn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Zn&&(b=Fp()):(an=d,Bu="value"in an?an.value:an.textContent,Zn=!0)),O=Yo(u,S),0<O.length&&(S=new ad(S,e,null,n,d),c.push({event:S,listeners:O}),b?S.data=b:(b=Wp(n),b!==null&&(S.data=b)))),(b=jg?Mg(e,n):Rg(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(d=new ad("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=b))}th(c,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wi(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=wi(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=wi(n,o),s!=null&&l.unshift(Ci(n,s,a))):i||(s=wi(n,o),s!=null&&l.push(Ci(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(Gg,`
`).replace(Yg,"")}function so(e,t,n){if(t=wd(t),wd(e)!==t&&n)throw Error(B(425))}function Xo(){}var Ts=null,Ls=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(e){return xd.resolve(null).then(e).catch(Jg)}:js;function Jg(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Rr,Oi="__reactProps$"+Rr,Gt="__reactContainer$"+Rr,Ms="__reactEvents$"+Rr,Zg="__reactListeners$"+Rr,e0="__reactHandles$"+Rr;function Pn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sd(e);e!==null;){if(n=e[Dt])return n;e=Sd(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[Dt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function za(e){return e[Oi]||null}var Rs=[],rr=-1;function En(e){return{current:e}}function ye(e){0>rr||(e.current=Rs[rr],Rs[rr]=null,rr--)}function me(e,t){rr++,Rs[rr]=e.current,e.current=t}var xn={},Qe=En(xn),nt=En(!1),Dn=xn;function xr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Ko(){ye(nt),ye(Qe)}function Ed(e,t,n){if(Qe.current!==xn)throw Error(B(168));me(Qe,t),me(nt,n)}function rh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Nv(e)||"Unknown",i));return be({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Dn=Qe.current,me(Qe,e),me(nt,nt.current),!0}function kd(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=rh(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Qe),me(Qe,e)):ye(nt),me(nt,n)}var Ut=null,Da=!1,Ml=!1;function ih(e){Ut===null?Ut=[e]:Ut.push(e)}function t0(e){Da=!0,ih(e)}function kn(){if(!Ml&&Ut!==null){Ml=!0;var e=0,t=fe;try{var n=Ut;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Da=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Tp(Fu,kn),i}finally{fe=t,Ml=!1}}return null}var ir=[],or=0,Zo=null,ea=0,ht=[],mt=0,An=null,Wt=1,Bt="";function _n(e,t){ir[or++]=ea,ir[or++]=Zo,Zo=e,ea=t}function oh(e,t,n){ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=An,An=e;var r=Wt;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function Yu(e){e.return!==null&&(_n(e,1),oh(e,1,0))}function Xu(e){for(;e===Zo;)Zo=ir[--or],ir[or]=null,ea=ir[--or],ir[or]=null;for(;e===An;)An=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Wt=ht[--mt],ht[mt]=null}var st=null,lt=null,xe=!1,_t=null;function ah(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ds(e){if(xe){var t=lt;if(t){var n=t;if(!bd(e,t)){if(zs(e))throw Error(B(418));t=fn(n.nextSibling);var r=st;t&&bd(e,t)?ah(r,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(zs(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function _d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function uo(e){if(e!==st)return!1;if(!xe)return _d(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=lt)){if(zs(e))throw lh(),Error(B(418));for(;t;)ah(e,t),t=fn(t.nextSibling)}if(_d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?fn(e.stateNode.nextSibling):null;return!0}function lh(){for(var e=lt;e;)e=fn(e.nextSibling)}function Sr(){lt=st=null,xe=!1}function Ku(e){_t===null?_t=[e]:_t.push(e)}var n0=Kt.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ta=En(null),na=null,ar=null,Ju=null;function Zu(){Ju=ar=na=null}function ec(e){var t=ta.current;ye(ta),e._currentValue=t}function As(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){na=e,Ju=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Ju!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(na===null)throw Error(B(308));ar=e,na.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Tn=null;function tc(e){Tn===null?Tn=[e]:Tn.push(e)}function sh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}function Cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(h,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,c,f):m,f==null)break e;c=be({},c,f);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,s=c):d=d.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=c}}function Od(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ch=new sp.Component().refs;function Ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=mn(e),o=Vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),Ro(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=mn(e),o=Vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),Ro(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=mn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(Pt(t,e,r,n),Ro(t,e,r))}};function Pd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!bi(n,r)||!bi(i,o):!0}function dh(e,t,n){var r=!1,i=xn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=rt(t)?Dn:Qe.current,r=t.contextTypes,o=(r=r!=null)?xr(e,i):xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Td(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ch,nc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=rt(t)?Dn:Qe.current,i.context=xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ns(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ch&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ld(e){var t=e._init;return t(e._payload)}function fh(e){function t(v,p){if(e){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=vn(v,p),v.index=0,v.sibling=null,v}function o(v,p,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,x){return p===null||p.tag!==6?(p=Fl(g,v.mode,x),p.return=v,p):(p=i(p,g),p.return=v,p)}function s(v,p,g,x){var C=g.type;return C===Jn?d(v,p,g.props.children,x,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Ld(C)===p.type)?(x=i(p,g.props),x.ref=Wr(v,p,g),x.return=v,x):(x=Fo(g.type,g.key,g.props,null,v.mode,x),x.ref=Wr(v,p,g),x.return=v,x)}function u(v,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Hl(g,v.mode,x),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function d(v,p,g,x,C){return p===null||p.tag!==7?(p=Mn(g,v.mode,x,C),p.return=v,p):(p=i(p,g),p.return=v,p)}function c(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zi:return g=Fo(p.type,p.key,p.props,null,v.mode,g),g.ref=Wr(v,null,p),g.return=v,g;case Kn:return p=Hl(p,v.mode,g),p.return=v,p;case en:var x=p._init;return c(v,x(p._payload),g)}if(ti(p)||Nr(p))return p=Mn(p,v.mode,g,null),p.return=v,p;co(v,p)}return null}function f(v,p,g,x){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zi:return g.key===C?s(v,p,g,x):null;case Kn:return g.key===C?u(v,p,g,x):null;case en:return C=g._init,f(v,p,C(g._payload),x)}if(ti(g)||Nr(g))return C!==null?null:d(v,p,g,x,null);co(v,g)}return null}function h(v,p,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(g)||null,a(p,v,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zi:return v=v.get(x.key===null?g:x.key)||null,s(p,v,x,C);case Kn:return v=v.get(x.key===null?g:x.key)||null,u(p,v,x,C);case en:var O=x._init;return h(v,p,g,O(x._payload),C)}if(ti(x)||Nr(x))return v=v.get(g)||null,d(p,v,x,C,null);co(p,x)}return null}function m(v,p,g,x){for(var C=null,O=null,b=p,S=p=0,$=null;b!==null&&S<g.length;S++){b.index>S?($=b,b=null):$=b.sibling;var M=f(v,b,g[S],x);if(M===null){b===null&&(b=$);break}e&&b&&M.alternate===null&&t(v,b),p=o(M,p,S),O===null?C=M:O.sibling=M,O=M,b=$}if(S===g.length)return n(v,b),xe&&_n(v,S),C;if(b===null){for(;S<g.length;S++)b=c(v,g[S],x),b!==null&&(p=o(b,p,S),O===null?C=b:O.sibling=b,O=b);return xe&&_n(v,S),C}for(b=r(v,b);S<g.length;S++)$=h(b,v,S,g[S],x),$!==null&&(e&&$.alternate!==null&&b.delete($.key===null?S:$.key),p=o($,p,S),O===null?C=$:O.sibling=$,O=$);return e&&b.forEach(function(z){return t(v,z)}),xe&&_n(v,S),C}function y(v,p,g,x){var C=Nr(g);if(typeof C!="function")throw Error(B(150));if(g=C.call(g),g==null)throw Error(B(151));for(var O=C=null,b=p,S=p=0,$=null,M=g.next();b!==null&&!M.done;S++,M=g.next()){b.index>S?($=b,b=null):$=b.sibling;var z=f(v,b,M.value,x);if(z===null){b===null&&(b=$);break}e&&b&&z.alternate===null&&t(v,b),p=o(z,p,S),O===null?C=z:O.sibling=z,O=z,b=$}if(M.done)return n(v,b),xe&&_n(v,S),C;if(b===null){for(;!M.done;S++,M=g.next())M=c(v,M.value,x),M!==null&&(p=o(M,p,S),O===null?C=M:O.sibling=M,O=M);return xe&&_n(v,S),C}for(b=r(v,b);!M.done;S++,M=g.next())M=h(b,v,S,M.value,x),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?S:M.key),p=o(M,p,S),O===null?C=M:O.sibling=M,O=M);return e&&b.forEach(function(A){return t(v,A)}),xe&&_n(v,S),C}function E(v,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Zi:e:{for(var C=g.key,O=p;O!==null;){if(O.key===C){if(C=g.type,C===Jn){if(O.tag===7){n(v,O.sibling),p=i(O,g.props.children),p.return=v,v=p;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Ld(C)===O.type){n(v,O.sibling),p=i(O,g.props),p.ref=Wr(v,O,g),p.return=v,v=p;break e}n(v,O);break}else t(v,O);O=O.sibling}g.type===Jn?(p=Mn(g.props.children,v.mode,x,g.key),p.return=v,v=p):(x=Fo(g.type,g.key,g.props,null,v.mode,x),x.ref=Wr(v,p,g),x.return=v,v=x)}return l(v);case Kn:e:{for(O=g.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Hl(g,v.mode,x),p.return=v,v=p}return l(v);case en:return O=g._init,E(v,p,O(g._payload),x)}if(ti(g))return m(v,p,g,x);if(Nr(g))return y(v,p,g,x);co(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=Fl(g,v.mode,x),p.return=v,v=p),l(v)):n(v,p)}return E}var Er=fh(!0),ph=fh(!1),Bi={},Nt=En(Bi),Pi=En(Bi),Ti=En(Bi);function Ln(e){if(e===Bi)throw Error(B(174));return e}function rc(e,t){switch(me(Ti,t),me(Pi,e),me(Nt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gs(t,e)}ye(Nt),me(Nt,t)}function kr(){ye(Nt),ye(Pi),ye(Ti)}function hh(e){Ln(Ti.current);var t=Ln(Nt.current),n=gs(t,e.type);t!==n&&(me(Pi,e),me(Nt,n))}function ic(e){Pi.current===e&&(ye(Nt),ye(Pi))}var Ee=En(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function oc(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var zo=Kt.ReactCurrentDispatcher,zl=Kt.ReactCurrentBatchConfig,Nn=0,ke=null,je=null,ze=null,oa=!1,ui=!1,Li=0,r0=0;function Ue(){throw Error(B(321))}function ac(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function lc(e,t,n,r,i,o){if(Nn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?l0:s0,e=n(r,i),ui){o=0;do{if(ui=!1,Li=0,25<=o)throw Error(B(301));o+=1,ze=je=null,t.updateQueue=null,zo.current=u0,e=n(r,i)}while(ui)}if(zo.current=aa,t=je!==null&&je.next!==null,Nn=0,ze=je=ke=null,oa=!1,t)throw Error(B(300));return e}function sc(){var e=Li!==0;return Li=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=e:ze=ze.next=e,ze}function wt(){if(je===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=ze===null?ke.memoizedState:ze.next;if(t!==null)ze=t,je=e;else{if(e===null)throw Error(B(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ze===null?ke.memoizedState=ze=e:ze=ze.next=e}return ze}function $i(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((Nn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ke.lanes|=d,In|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,In|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Lt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mh(){}function vh(e,t){var n=ke,r=wt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,uc(wh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,ji(9,yh.bind(null,n,r,i,t),void 0,null),De===null)throw Error(B(349));(Nn&30)!==0||gh(n,t,i)}return i}function gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yh(e,t,n,r){t.value=n,t.getSnapshot=r,xh(t)&&Sh(e)}function wh(e,t,n){return n(function(){xh(t)&&Sh(e)})}function xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Sh(e){var t=Yt(e,1);t!==null&&Pt(t,e,1,-1)}function $d(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,ke,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eh(){return wt().memoizedState}function Do(e,t,n,r){var i=zt();ke.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var i=wt();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&ac(r,l.deps)){i.memoizedState=ji(t,n,o,r);return}}ke.flags|=e,i.memoizedState=ji(1|t,n,o,r)}function jd(e,t){return Do(8390656,8,e,t)}function uc(e,t){return Na(2048,8,e,t)}function kh(e,t){return Na(4,2,e,t)}function bh(e,t){return Na(4,4,e,t)}function _h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ch(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,_h.bind(null,t,e),n)}function cc(){}function Oh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ac(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ph(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ac(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Th(e,t,n){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Lt(n,t)||(n=jp(),ke.lanes|=n,In|=n,e.baseState=!0),t)}function i0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{fe=n,zl.transition=r}}function Lh(){return wt().memoizedState}function o0(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$h(e))jh(t,n);else if(n=sh(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),Mh(n,t,r)}}function a0(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($h(e))jh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,l)){var s=t.interleaved;s===null?(i.next=i,tc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=sh(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),Mh(n,t,r))}}function $h(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function jh(e,t){ui=oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hu(e,n)}}var aa={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},l0={readContext:yt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,_h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=o0.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:$d,useDebugValue:cc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=$d(!1),t=e[0];return e=i0.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=zt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),De===null)throw Error(B(349));(Nn&30)!==0||gh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jd(wh.bind(null,r,o,e),[e]),r.flags|=2048,ji(9,yh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=De.identifierPrefix;if(xe){var n=Bt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s0={readContext:yt,useCallback:Oh,useContext:yt,useEffect:uc,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:bh,useMemo:Ph,useReducer:Dl,useRef:Eh,useState:function(){return Dl($i)},useDebugValue:cc,useDeferredValue:function(e){var t=wt();return Th(t,je.memoizedState,e)},useTransition:function(){var e=Dl($i)[0],t=wt().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:vh,useId:Lh,unstable_isNewReconciler:!1},u0={readContext:yt,useCallback:Oh,useContext:yt,useEffect:uc,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:bh,useMemo:Ph,useReducer:Al,useRef:Eh,useState:function(){return Al($i)},useDebugValue:cc,useDeferredValue:function(e){var t=wt();return je===null?t.memoizedState=e:Th(t,je.memoizedState,e)},useTransition:function(){var e=Al($i)[0],t=wt().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:vh,useId:Lh,unstable_isNewReconciler:!1};function br(e,t){try{var n="",r=t;do n+=Av(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c0=typeof WeakMap=="function"?WeakMap:Map;function Rh(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Xs=r),Fs(e,t)},n}function zh(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fs(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new c0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=b0.bind(null,e,t,n),t.then(e,e))}function Rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var d0=Kt.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?ph(t,null,n,r):Er(t,e.child,n,r)}function Dd(e,t,n,r,i){n=n.render;var o=t.ref;return vr(t,i),r=lc(e,t,n,r,o,i),n=sc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&n&&Yu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!yc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Dh(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Dh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(bi(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Hs(e,t,n,r,i)}function Ah(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(sr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(sr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(sr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(sr,at),at|=r;return Ye(e,t,i,n),t.child}function Nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,i){var o=rt(n)?Dn:Qe.current;return o=xr(t,o),vr(t,i),n=lc(e,t,n,r,o,i),r=sc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&r&&Yu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Nd(e,t,n,r,i){if(rt(n)){var o=!0;Jo(t)}else o=!1;if(vr(t,i),t.stateNode===null)Ao(e,t),dh(t,n,r),Is(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=rt(n)?Dn:Qe.current,u=xr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Td(t,l,r,u),tn=!1;var f=t.memoizedState;l.state=f,ra(t,r,l,i),s=t.memoizedState,a!==r||f!==s||nt.current||tn?(typeof d=="function"&&(Ns(t,n,d,r),s=t.memoizedState),(a=tn||Pd(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,uh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Et(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=rt(n)?Dn:Qe.current,s=xr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Td(t,l,r,s),tn=!1,f=t.memoizedState,l.state=f,ra(t,r,l,i);var m=t.memoizedState;a!==c||f!==m||nt.current||tn?(typeof h=="function"&&(Ns(t,n,h,r),m=t.memoizedState),(u=tn||Pd(t,n,u,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,o,i)}function Us(e,t,n,r,i,o){Nh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&kd(t,n,!1),Xt(e,t,o);r=t.stateNode,d0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Er(t,e.child,null,o),t.child=Er(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&kd(t,n,!0),t.child}function Ih(e){var t=e.stateNode;t.pendingContext?Ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ed(e,t.context,!1),rc(e,t.containerInfo)}function Id(e,t,n,r,i){return Sr(),Ku(i),t.flags|=256,Ye(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fh(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ee,i&1),e===null)return Ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ha(l,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bs(n),t.memoizedState=Ws,e):dc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return f0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=vn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vn(a,o):(o=Mn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Bs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dc(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Ku(r),Er(t,e.child,null,n),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function f0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(B(422))),fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ha({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Er(t,e.child,null,l),t.child.memoizedState=Bs(l),t.memoizedState=Ws,o);if((t.mode&1)===0)return fo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Nl(o,r,void 0),fo(e,t,l,r)}if(a=(l&e.childLanes)!==0,tt||a){if(r=De,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Pt(r,e,i,-1))}return gc(),r=Nl(Error(B(421))),fo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=fn(i.nextSibling),st=t,xe=!0,_t=null,e!==null&&(ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=An,Wt=e.id,Bt=e.overflow,An=t),t=dc(t,r.children),t.flags|=4096,t)}function Fd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),As(e.return,t,n)}function Il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,n,t);else if(e.tag===19)Fd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Il(t,!0,n,null,o);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p0(e,t,n){switch(t.tag){case 3:Ih(t),Sr();break;case 5:hh(t);break;case 1:rt(t.type)&&Jo(t);break;case 4:rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Fh(e,t,n):(me(Ee,Ee.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Hh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Ah(e,t,n)}return Xt(e,t,n)}var Uh,qs,Wh,Bh;Uh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qs=function(){};Wh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Nt.current);var o=null;switch(n){case"input":i=ps(e,i),r=ps(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=vs(e,i),r=vs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}ys(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h0(e,t,n){var r=t.pendingProps;switch(Xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&Ko(),We(t),null;case 3:return r=t.stateNode,kr(),ye(nt),ye(Qe),oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(Zs(_t),_t=null))),qs(e,t),We(t),null;case 5:ic(t);var i=Ln(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Wh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Ln(Nt.current),uo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[Oi]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)ge(ri[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Yc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Kc(r,o),ge("invalid",r)}ys(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",""+a]):gi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":eo(r),Xc(r,o,!0);break;case"textarea":eo(r),Jc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Dt]=t,e[Oi]=r,Uh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ws(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)ge(ri[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Yc(e,r),i=ps(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Kc(e,r),i=vs(e,r),ge("invalid",e);break;default:i=r}ys(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?xp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yi(e,s):typeof s=="number"&&yi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&zu(e,o,s,l))}switch(n){case"input":eo(e),Xc(e,r,!1);break;case"textarea":eo(e),Jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Ln(Ti.current),Ln(Nt.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return We(t),null;case 13:if(ye(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lh(),Sr(),t.flags|=98560,o=!1;else if(o=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Dt]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else _t!==null&&(Zs(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Me===0&&(Me=3):gc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return kr(),qs(e,t),e===null&&_i(t.stateNode.containerInfo),We(t),null;case 10:return ec(t.type._context),We(t),null;case 17:return rt(t.type)&&Ko(),We(t),null;case 19:if(ye(Ee),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Br(o,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ia(e),l!==null){for(t.flags|=128,Br(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>_r&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=ia(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Ce()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return vc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function m0(e,t){switch(Xu(t),t.tag){case 1:return rt(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),ye(nt),ye(Qe),oc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ic(t),null;case 13:if(ye(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Ee),null;case 4:return kr(),null;case 10:return ec(t.type._context),null;case 22:case 23:return vc(),null;case 24:return null;default:return null}}var po=!1,Ve=!1,v0=typeof WeakSet=="function"?WeakSet:Set,X=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Vs(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Hd=!1;function g0(e,t){if(Ts=Qo,e=Gp(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++d===r&&(s=l),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},Qo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Et(t.type,y),E);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){_e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return m=Hd,Hd=!1,m}function ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vs(t,n,o)}i=i.next}while(i!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Oi],delete t[Ms],delete t[Zg],delete t[e0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vh(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var Ie=null,bt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Qh(e,t,n),n=n.sibling}function Qh(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Ve||lr(n,t);case 6:var r=Ie,i=bt;Ie=null,Zt(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),Ei(e)):jl(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,Zt(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Vs(n,t,l),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Ve&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Zt(e,t,n),Ve=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v0),t.forEach(function(r){var i=C0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));Qh(o,l,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gh(t,e),t=t.sibling}function Gh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Rt(e),r&4){try{ci(3,e,e.return),Ia(3,e)}catch(y){_e(e,e.return,y)}try{ci(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:xt(t,e),Rt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(xt(t,e),Rt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mp(i,o),ws(a,l);var u=ws(a,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?xp(i,c):d==="dangerouslySetInnerHTML"?yp(i,c):d==="children"?yi(i,c):zu(i,d,c,u)}switch(a){case"input":hs(i,o);break;case"textarea":vp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?fr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oi]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(xt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(xt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:xt(t,e),Rt(e);break;case 13:xt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=Ce())),r&4&&Wd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,xt(t,e),Ve=u):xt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:ci(4,f,f.return);break;case 1:lr(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:lr(f,f.return);break;case 22:if(f.memoizedState!==null){qd(c);continue}}h!==null?(h.return=f,X=h):qd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=wp("display",l))}catch(y){_e(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xt(t,e),Rt(e),r&4&&Wd(e);break;case 21:break;default:xt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vh(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=Ud(e);Ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ud(e);Gs(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function y0(e,t,n){X=e,Yh(e)}function Yh(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||po;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=po;var u=Ve;if(po=l,(Ve=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?Vd(i):s!==null?(s.return=l,X=s):Vd(i);for(;o!==null;)X=o,Yh(o),o=o.sibling;X=i,po=a,Ve=u}Bd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):Bd(e)}}function Bd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Od(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Od(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ei(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ve||t.flags&512&&Qs(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function qd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function Vd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Qs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Qs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var w0=Math.ceil,la=Kt.ReactCurrentDispatcher,fc=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,de=0,De=null,Le=null,Fe=0,at=0,sr=En(0),Me=0,Mi=null,In=0,Fa=0,pc=0,di=null,et=null,hc=0,_r=1/0,Ht=null,sa=!1,Xs=null,hn=null,ho=!1,ln=null,ua=0,fi=0,Ks=null,No=-1,Io=0;function Xe(){return(de&6)!==0?Ce():No!==-1?No:No=Ce()}function mn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:n0.transition!==null?(Io===0&&(Io=jp()),Io):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Ip(e.type)),e)}function Pt(e,t,n,r){if(50<fi)throw fi=0,Ks=null,Error(B(185));Hi(e,n,r),((de&2)===0||e!==De)&&(e===De&&((de&2)===0&&(Fa|=n),Me===4&&on(e,Fe)),it(e,r),n===1&&de===0&&(t.mode&1)===0&&(_r=Ce()+500,Da&&kn()))}function it(e,t){var n=e.callbackNode;ng(e,t);var r=Vo(e,e===De?Fe:0);if(r===0)n!==null&&td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&td(n),t===1)e.tag===0?t0(Qd.bind(null,e)):ih(Qd.bind(null,e)),Kg(function(){(de&6)===0&&kn()}),n=null;else{switch(Mp(r)){case 1:n=Fu;break;case 4:n=Lp;break;case 16:n=qo;break;case 536870912:n=$p;break;default:n=qo}n=rm(n,Xh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xh(e,t){if(No=-1,Io=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Vo(e,e===De?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ca(e,r);else{t=r;var i=de;de|=2;var o=Jh();(De!==e||Fe!==t)&&(Ht=null,_r=Ce()+500,jn(e,t));do try{E0();break}catch(a){Kh(e,a)}while(1);Zu(),la.current=o,de=i,Le!==null?t=0:(De=null,Fe=0,t=Me)}if(t!==0){if(t===2&&(i=bs(e),i!==0&&(r=i,t=Js(e,i))),t===1)throw n=Mi,jn(e,0),on(e,r),it(e,Ce()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,(r&30)===0&&!x0(i)&&(t=ca(e,r),t===2&&(o=bs(e),o!==0&&(r=o,t=Js(e,o))),t===1))throw n=Mi,jn(e,0),on(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:Cn(e,et,Ht);break;case 3:if(on(e,r),(r&130023424)===r&&(t=hc+500-Ce(),10<t)){if(Vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=js(Cn.bind(null,e,et,Ht),t);break}Cn(e,et,Ht);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w0(r/1960))-r,10<r){e.timeoutHandle=js(Cn.bind(null,e,et,Ht),r);break}Cn(e,et,Ht);break;case 5:Cn(e,et,Ht);break;default:throw Error(B(329))}}}return it(e,Ce()),e.callbackNode===n?Xh.bind(null,e):null}function Js(e,t){var n=di;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=ca(e,t),e!==2&&(t=et,et=n,t!==null&&Zs(t)),e}function Zs(e){et===null?et=e:et.push.apply(et,e)}function x0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~pc,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Qd(e){if((de&6)!==0)throw Error(B(327));gr();var t=Vo(e,0);if((t&1)===0)return it(e,Ce()),null;var n=ca(e,t);if(e.tag!==0&&n===2){var r=bs(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=Mi,jn(e,0),on(e,t),it(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,et,Ht),it(e,Ce()),null}function mc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(_r=Ce()+500,Da&&kn())}}function Fn(e){ln!==null&&ln.tag===0&&(de&6)===0&&gr();var t=de;de|=1;var n=gt.transition,r=fe;try{if(gt.transition=null,fe=1,e)return e()}finally{fe=r,gt.transition=n,de=t,(de&6)===0&&kn()}}function vc(){at=sr.current,ye(sr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xg(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:kr(),ye(nt),ye(Qe),oc();break;case 5:ic(r);break;case 4:kr();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:ec(r.type._context);break;case 22:case 23:vc()}n=n.return}if(De=e,Le=e=vn(e.current,null),Fe=at=t,Me=0,Mi=null,pc=Fa=In=0,et=di=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Tn=null}return e}function Kh(e,t){do{var n=Le;try{if(Zu(),zo.current=aa,oa){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(Nn=0,ze=je=ke=null,ui=!1,Li=0,fc.current=null,n===null||n.return===null){Me=1,Mi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Rd(l);if(h!==null){h.flags&=-257,zd(h,l,a,o,t),h.mode&1&&Md(o,u,t),t=h,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if((t&1)===0){Md(o,u,t),gc();break e}s=Error(B(426))}}else if(xe&&a.mode&1){var E=Rd(l);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),zd(E,l,a,o,t),Ku(br(s,a));break e}}o=s=br(s,a),Me!==4&&(Me=2),di===null?di=[o]:di.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Rh(o,s,t);Cd(o,v);break e;case 1:a=s;var p=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hn===null||!hn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=zh(o,a,t);Cd(o,x);break e}}o=o.return}while(o!==null)}em(n)}catch(C){t=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function Jh(){var e=la.current;return la.current=aa,e===null?aa:e}function gc(){(Me===0||Me===3||Me===2)&&(Me=4),De===null||(In&268435455)===0&&(Fa&268435455)===0||on(De,Fe)}function ca(e,t){var n=de;de|=2;var r=Jh();(De!==e||Fe!==t)&&(Ht=null,jn(e,t));do try{S0();break}catch(i){Kh(e,i)}while(1);if(Zu(),de=n,la.current=r,Le!==null)throw Error(B(261));return De=null,Fe=0,Me}function S0(){for(;Le!==null;)Zh(Le)}function E0(){for(;Le!==null&&!Qv();)Zh(Le)}function Zh(e){var t=nm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?em(e):Le=t,fc.current=null}function em(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=h0(n,t,at),n!==null){Le=n;return}}else{if(n=m0(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function Cn(e,t,n){var r=fe,i=gt.transition;try{gt.transition=null,fe=1,k0(e,t,n,r)}finally{gt.transition=i,fe=r}return null}function k0(e,t,n,r){do gr();while(ln!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rg(e,o),e===De&&(Le=De=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ho||(ho=!0,rm(qo,function(){return gr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var l=fe;fe=1;var a=de;de|=4,fc.current=null,g0(e,n),Gh(n,e),Wg(Ls),Qo=!!Ts,Ls=Ts=null,e.current=n,y0(n),Gv(),de=a,fe=l,gt.transition=o}else e.current=n;if(ho&&(ho=!1,ln=e,ua=i),o=e.pendingLanes,o===0&&(hn=null),Kv(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Xs,Xs=null,e;return(ua&1)!==0&&e.tag!==0&&gr(),o=e.pendingLanes,(o&1)!==0?e===Ks?fi++:(fi=0,Ks=e):fi=0,kn(),null}function gr(){if(ln!==null){var e=Mp(ua),t=gt.transition,n=fe;try{if(gt.transition=null,fe=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,ua=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:ci(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,h=d.return;if(qh(d),d===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ci(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,X=v;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,X=g;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ia(9,a)}}catch(C){_e(a,a.return,C)}if(a===l){X=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break e}X=a.return}}if(de=i,kn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{fe=n,gt.transition=t}}return!1}function Gd(e,t,n){t=br(n,t),t=Rh(e,t,1),e=pn(e,t,1),t=Xe(),e!==null&&(Hi(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=br(n,e),e=zh(t,e,1),t=pn(t,e,1),e=Xe(),t!==null&&(Hi(t,1,e),it(t,e));break}}t=t.return}}function b0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Fe&n)===n&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>Ce()-hc?jn(e,0):pc|=n),it(e,t)}function tm(e,t){t===0&&((e.mode&1)===0?t=1:(t=ro,ro<<=1,(ro&130023424)===0&&(ro=4194304)));var n=Xe();e=Yt(e,t),e!==null&&(Hi(e,t,n),it(e,n))}function _0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tm(e,n)}function C0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),tm(e,n)}var nm;nm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,p0(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,xe&&(t.flags&1048576)!==0&&oh(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=xr(t,Qe.current);vr(t,n),i=lc(null,t,r,e,i,n);var o=sc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nc(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=Us(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Yu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=P0(r),e=Et(r,e),i){case 0:t=Hs(null,t,r,e,n);break e;case 1:t=Nd(null,t,r,e,n);break e;case 11:t=Dd(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,Et(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Hs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Nd(e,t,r,i,n);case 3:e:{if(Ih(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uh(e,t),ra(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(B(423)),t),t=Id(e,t,r,n,i);break e}else if(r!==i){i=br(Error(B(424)),t),t=Id(e,t,r,n,i);break e}else for(lt=fn(t.stateNode.containerInfo.firstChild),st=t,xe=!0,_t=null,n=ph(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return hh(t),e===null&&Ds(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,$s(r,i)?l=null:o!==null&&$s(r,o)&&(t.flags|=32),Nh(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&Ds(t),null;case 13:return Fh(e,t,n);case 4:return rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Dd(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(ta,r._currentValue),r._currentValue=l,o!==null)if(Lt(o.value,l)){if(o.children===i.children&&!nt.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Vt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),As(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),As(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),Ad(e,t,r,i,n);case 15:return Dh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Ao(e,t),t.tag=1,rt(r)?(e=!0,Jo(t)):e=!1,vr(t,n),dh(t,r,i),Is(t,r,i,n),Us(null,t,r,!0,e,n);case 19:return Hh(e,t,n);case 22:return Ah(e,t,n)}throw Error(B(156,t.tag))};function rm(e,t){return Tp(e,t)}function O0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new O0(e,t,n,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P0(e){if(typeof e=="function")return yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Au)return 11;if(e===Nu)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")yc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jn:return Mn(n.children,i,o,t);case Du:l=8,i|=8;break;case us:return e=vt(12,n,t,i|2),e.elementType=us,e.lanes=o,e;case cs:return e=vt(13,n,t,i),e.elementType=cs,e.lanes=o,e;case ds:return e=vt(19,n,t,i),e.elementType=ds,e.lanes=o,e;case fp:return Ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cp:l=10;break e;case dp:l=9;break e;case Au:l=11;break e;case Nu:l=14;break e;case en:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Ha(e,t,n,r){return e=vt(22,e,r,t),e.elementType=fp,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wc(e,t,n,r,i,o,l,a,s){return e=new T0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(o),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function im(e){if(!e)return xn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(rt(n))return rh(e,n,t)}return t}function om(e,t,n,r,i,o,l,a,s){return e=wc(n,r,!0,e,i,o,l,a,s),e.context=im(null),n=e.current,r=Xe(),i=mn(n),o=Vt(r,i),o.callback=t!=null?t:null,pn(n,o,i),e.current.lanes=i,Hi(e,i,r),it(e,r),e}function Ua(e,t,n,r){var i=t.current,o=Xe(),l=mn(i);return n=im(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,l),e!==null&&(Pt(e,i,l,o),Ro(e,i,l)),l}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xc(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function $0(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sc(e){this._internalRoot=e}Wa.prototype.render=Sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ua(e,t,null,null)};Wa.prototype.unmount=Sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ua(null,e,null,null)}),t[Gt]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Np(e)}};function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function j0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=da(l);o.call(u)}}var l=om(t,r,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=l,e[Gt]=l.current,_i(e.nodeType===8?e.parentNode:e),Fn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=da(s);a.call(u)}}var s=wc(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=s,e[Gt]=s.current,_i(e.nodeType===8?e.parentNode:e),Fn(function(){Ua(t,s,n,r)}),s}function qa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=da(l);a.call(s)}}Ua(t,l,e,i)}else l=j0(n,t,e,i,r);return da(l)}Rp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(Hu(t,n|1),it(t,Ce()),(de&6)===0&&(_r=Ce()+500,kn()))}break;case 13:Fn(function(){var r=Yt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),xc(e,1)}};Uu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}xc(e,134217728)}};zp=function(e){if(e.tag===13){var t=mn(e),n=Yt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}xc(e,t)}};Dp=function(){return fe};Ap=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Ss=function(e,t,n){switch(t){case"input":if(hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=za(r);if(!i)throw Error(B(90));hp(r),hs(r,i)}}}break;case"textarea":vp(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};kp=mc;bp=Fn;var M0={usingClientEntryPoint:!1,Events:[Wi,nr,za,Sp,Ep,mc]},qr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R0={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Op(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{$a=mo.inject(R0),At=mo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(t))throw Error(B(200));return L0(e,t,null,n)};ct.createRoot=function(e,t){if(!Ec(e))throw Error(B(299));var n=!1,r="",i=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,_i(e.nodeType===8?e.parentNode:e),new Sc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Op(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Fn(e)};ct.hydrate=function(e,t,n){if(!Ba(t))throw Error(B(200));return qa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Ec(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=om(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Gt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wa(t)};ct.render=function(e,t,n){if(!Ba(t))throw Error(B(200));return qa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(B(40));return e._reactRootContainer?(Fn(function(){qa(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=mc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return qa(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(ju);var Kd=ju.exports;ls.createRoot=Kd.createRoot,ls.hydrateRoot=Kd.hydrateRoot;function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var $n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($n||($n={}));var Jd=function(e){return e},Zd="beforeunload",z0="popstate";function D0(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var b=r.location,S=b.pathname,$=b.search,M=b.hash,z=i.state||{};return[z.idx,Jd({pathname:S,search:$,hash:M,state:z.usr||null,key:z.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var b=$n.Pop,S=o(),$=S[0],M=S[1];if(h.length){if($!=null){var z=d-$;z&&(l={action:b,location:M,retry:function(){C(z*-1)}},C(z))}}else p(b)}}r.addEventListener(z0,a);var s=$n.Pop,u=o(),d=u[0],c=u[1],f=tf(),h=tf();d==null&&(d=0,i.replaceState(fa({},i.state,{idx:d}),""));function m(b){return typeof b=="string"?b:eu(b)}function y(b,S){return S===void 0&&(S=null),Jd(fa({pathname:c.pathname,hash:"",search:""},typeof b=="string"?Vn(b):b,{state:S,key:A0()}))}function E(b,S){return[{usr:b.state,key:b.key,idx:S},m(b)]}function v(b,S,$){return!h.length||(h.call({action:b,location:S,retry:$}),!1)}function p(b){s=b;var S=o();d=S[0],c=S[1],f.call({action:s,location:c})}function g(b,S){var $=$n.Push,M=y(b,S);function z(){g(b,S)}if(v($,M,z)){var A=E(M,d+1),D=A[0],N=A[1];try{i.pushState(D,"",N)}catch{r.location.assign(N)}p($)}}function x(b,S){var $=$n.Replace,M=y(b,S);function z(){x(b,S)}if(v($,M,z)){var A=E(M,d),D=A[0],N=A[1];i.replaceState(D,"",N),p($)}}function C(b){i.go(b)}var O={get action(){return s},get location(){return c},createHref:m,push:g,replace:x,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(S){return f.push(S)},block:function(S){var $=h.push(S);return h.length===1&&r.addEventListener(Zd,ef),function(){$(),h.length||r.removeEventListener(Zd,ef)}}};return O}function ef(e){e.preventDefault(),e.returnValue=""}function tf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function A0(){return Math.random().toString(36).substr(2,8)}function eu(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Vn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const kc=K.exports.createContext(null),bc=K.exports.createContext(null),Va=K.exports.createContext({outlet:null,matches:[]});function It(e,t){if(!e)throw new Error(t)}function N0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vn(t):t,i=um(r.pathname||"/",n);if(i==null)return null;let o=lm(e);I0(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=G0(o[a],i);return l}function lm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||It(!1),l.relativePath=l.relativePath.slice(r.length));let a=gn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&It(!1),lm(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:V0(a,i.index),routesMeta:s})}),t}function I0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F0=/^:\w+$/,H0=3,U0=2,W0=1,B0=10,q0=-2,nf=e=>e==="*";function V0(e,t){let n=e.split("/"),r=n.length;return n.some(nf)&&(r+=q0),t&&(r+=U0),n.filter(i=>!nf(i)).reduce((i,o)=>i+(F0.test(o)?H0:o===""?W0:B0),r)}function Q0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Y0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:gn([i,d.pathname]),pathnameBase:cm(gn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=gn([i,d.pathnameBase]))}return o}function Y0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=K0(a[c]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function X0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function K0(e,t){try{return decodeURIComponent(e)}catch{return e}}function J0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vn(e):e;return{pathname:n?n.startsWith("/")?n:Z0(n,t):t,search:ty(r),hash:ny(i)}}function Z0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sm(e,t,n){let r=typeof e=="string"?Vn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=J0(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function ey(e){return e===""||e.pathname===""?"/":typeof e=="string"?Vn(e).pathname:e.pathname}function um(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),cm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ny=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ry(e){qi()||It(!1);let{basename:t,navigator:n}=K.exports.useContext(kc),{hash:r,pathname:i,search:o}=dm(e),l=i;if(t!=="/"){let a=ey(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):gn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function qi(){return K.exports.useContext(bc)!=null}function Qa(){return qi()||It(!1),K.exports.useContext(bc).location}function Ga(){qi()||It(!1);let{basename:e,navigator:t}=K.exports.useContext(kc),{matches:n}=K.exports.useContext(Va),{pathname:r}=Qa(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=sm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=gn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function dm(e){let{matches:t}=K.exports.useContext(Va),{pathname:n}=Qa(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>sm(e,JSON.parse(r),n),[e,r,n])}function iy(e,t){qi()||It(!1);let{matches:n}=K.exports.useContext(Va),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=Qa(),a;if(t){var s;let f=typeof t=="string"?Vn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||It(!1),a=f}else a=l;let u=a.pathname||"/",d=o==="/"?u:u.slice(o.length)||"/",c=N0(e,{pathname:d});return oy(c&&c.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:gn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:gn([o,f.pathnameBase])})),n)}function oy(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(Va.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Xn(e){It(!1)}function ay(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$n.Pop,navigator:o,static:l=!1}=e;qi()&&It(!1);let a=cm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Vn(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:h="default"}=r,m=K.exports.useMemo(()=>{let y=um(u,a);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:h}},[a,u,d,c,f,h]);return m==null?null:K.exports.createElement(kc.Provider,{value:s},K.exports.createElement(bc.Provider,{children:n,value:{location:m,navigationType:i}}))}function ly(e){let{children:t,location:n}=e;return iy(tu(t),n)}function tu(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,tu(n.props.children));return}n.type!==Xn&&It(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=tu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(this,arguments)}function sy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const uy=["onClick","reloadDocument","replace","state","target","to"];function cy(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=D0({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement(ay,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function dy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ct=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=sy(t,uy),d=ry(s),c=fy(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&c(h)}return K.exports.createElement("a",nu({},u,{href:d,onClick:f,ref:n,target:a}))});function fy(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Ga(),l=Qa(),a=dm(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!dy(s)){s.preventDefault();let u=!!r||eu(l)===eu(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const py="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",hy="/Site-Serra/assets/arrow-header.98a9eade.svg";var Ya={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,_c=Ae?Symbol.for("react.element"):60103,Cc=Ae?Symbol.for("react.portal"):60106,Xa=Ae?Symbol.for("react.fragment"):60107,Ka=Ae?Symbol.for("react.strict_mode"):60108,Ja=Ae?Symbol.for("react.profiler"):60114,Za=Ae?Symbol.for("react.provider"):60109,el=Ae?Symbol.for("react.context"):60110,Oc=Ae?Symbol.for("react.async_mode"):60111,tl=Ae?Symbol.for("react.concurrent_mode"):60111,nl=Ae?Symbol.for("react.forward_ref"):60112,rl=Ae?Symbol.for("react.suspense"):60113,my=Ae?Symbol.for("react.suspense_list"):60120,il=Ae?Symbol.for("react.memo"):60115,ol=Ae?Symbol.for("react.lazy"):60116,vy=Ae?Symbol.for("react.block"):60121,gy=Ae?Symbol.for("react.fundamental"):60117,yy=Ae?Symbol.for("react.responder"):60118,wy=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _c:switch(e=e.type,e){case Oc:case tl:case Xa:case Ja:case Ka:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case Za:return e;default:return t}}case Cc:return t}}}function fm(e){return ft(e)===tl}pe.AsyncMode=Oc;pe.ConcurrentMode=tl;pe.ContextConsumer=el;pe.ContextProvider=Za;pe.Element=_c;pe.ForwardRef=nl;pe.Fragment=Xa;pe.Lazy=ol;pe.Memo=il;pe.Portal=Cc;pe.Profiler=Ja;pe.StrictMode=Ka;pe.Suspense=rl;pe.isAsyncMode=function(e){return fm(e)||ft(e)===Oc};pe.isConcurrentMode=fm;pe.isContextConsumer=function(e){return ft(e)===el};pe.isContextProvider=function(e){return ft(e)===Za};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_c};pe.isForwardRef=function(e){return ft(e)===nl};pe.isFragment=function(e){return ft(e)===Xa};pe.isLazy=function(e){return ft(e)===ol};pe.isMemo=function(e){return ft(e)===il};pe.isPortal=function(e){return ft(e)===Cc};pe.isProfiler=function(e){return ft(e)===Ja};pe.isStrictMode=function(e){return ft(e)===Ka};pe.isSuspense=function(e){return ft(e)===rl};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xa||e===tl||e===Ja||e===Ka||e===rl||e===my||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===Za||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===gy||e.$$typeof===yy||e.$$typeof===wy||e.$$typeof===vy)};pe.typeOf=ft;(function(e){e.exports=pe})(Ya);function xy(e){function t(H,_,V,F,T){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,Re=oe=se=0,ce=0,$e=0,bn=0,Pe=0,Jt=V.length,Ft=Jt-1,ot,te="",he="",Qn="",Ar="",Mt;ce<Jt;){if(ne=V.charCodeAt(ce),ce===Ft&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Jt++,Ft++),W+ie+ee+J===0){if(ce===Ft&&(0<$e&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=V.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Jt;){switch(ne=V.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=V.charCodeAt(ce+1)){case 42:case 47:e:{for(Re=ce+1;Re<Ft;++Re)switch(V.charCodeAt(Re)){case 47:if(ne===42&&V.charCodeAt(Re-1)===42&&ce+2!==Re){ce=Re+1;break e}break;case 10:if(ne===47){ce=Re+1;break e}}ce=Re}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Ft&&V.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=V.substring(Pe,ce),se===0&&(se=(te=te.replace(c,"").trim()).charCodeAt(0)),se){case 64:switch(0<$e&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:$e=_;break;default:$e=Q}if(oe=t(_,$e,oe,ne,T+1),Pe=oe.length,0<P&&($e=n(Q,te,bn),Mt=a(3,oe,$e,_,D,A,Pe,ne,T,F),te=$e.join(""),Mt!==void 0&&(Pe=(oe=Mt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(O,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(_,n(_,te,bn),oe,F,T+1)}Qn+=oe,oe=bn=$e=Re=se=0,te="",ne=V.charCodeAt(++ce);break;case 125:case 59:if(te=(0<$e?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(Re===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<P&&(Mt=a(1,te,_,H,D,A,he.length,F,T,F))!==void 0&&(Pe=(te=Mt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){Ar+=te+V.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}bn=$e=Re=se=0,te="",ne=V.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&($e=1,te+="\0"),0<P*U&&a(0,te,_,H,D,A,he.length,F,T,F),A=1,D++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,ot=V.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:ne!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ie+W+J===0&&($e=bn=1,ot="\f"+ot);break;case 108:if(ie+W+J+N===0&&0<Re)switch(ce-Re){case 2:Oe===112&&V.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(Re=ce);break;case 44:W+ee+ie+J===0&&($e=1,ot+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+Re+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*V.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(V.charCodeAt(Pe+2)===33&&(he+=V.substring(Pe,ce+1)),ot="",W=0)}}W===0&&(te+=ot)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if($e=_,0<P&&(Mt=a(2,he,$e,H,D,A,Pe,F,T,F),Mt!==void 0&&(he=Mt).length===0))return Ar+he+Qn;if(he=$e.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}N=0}}return Ar+he+Qn}function n(H,_,V){var F=_.trim().split(E);_=F;var T=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<T;++W)_[W]=r(H,_[W],V).trim();break;default:var ee=W=0;for(_=[];W<T;++W)for(var ie=0;ie<J;++ie)_[ee++]=r(H[ie]+" ",F[W],V).trim()}return _}function r(H,_,V){var F=_.charCodeAt(0);switch(33>F&&(F=(_=_.trim()).charCodeAt(0)),F){case 38:return _.replace(v,"$1"+H.trim());case 58:return H.trim()+_.replace(v,"$1"+H.trim());default:if(0<1*V&&0<_.indexOf("\f"))return _.replace(v,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+_}function i(H,_,V,F){var T=H+";",J=2*_+3*V+4*F;if(J===944){H=T.indexOf(":",9)+1;var W=T.substring(H,T.length-1).trim();return W=T.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(T,1))return T;switch(J){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(z,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return W=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+T+"-ms-flex-pack"+W+T;case 1005:return m.test(T)?T.replace(h,":-webkit-")+T.replace(h,":-moz-")+T:T;case 1e3:switch(W=T.substring(13).trim(),_=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(_)){case 226:W=T.replace(C,"tb");break;case 232:W=T.replace(C,"tb-rl");break;case 220:W=T.replace(C,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+W+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(_=(T=H).length-10,W=(T.charCodeAt(_)===33?T.substring(0,_):T).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:T=T.replace(W,"-webkit-"+W)+";"+T;break;case 207:case 102:T=T.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+T.replace(W,"-webkit-"+W)+";"+T.replace(W,"-ms-"+W+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return W=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+W+"-ms-flex-"+W+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(S,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(S,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(M.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),_,V,F).replace(":fill-available",":stretch"):T.replace(W,"-webkit-"+W)+T.replace(W,"-moz-"+W.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,V+F===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function o(H,_){var V=H.indexOf(_===1?":":"{"),F=H.substring(0,_!==3?V:10);return V=H.substring(V+1,H.length-1),R(_!==2?F:F.replace($,"$1"),V,_)}function l(H,_){var V=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return V!==_+";"?V.replace(b," or ($1)").substring(4):"("+_+")"}function a(H,_,V,F,T,J,W,ee,ie,se){for(var ne=0,Oe=_,Ne;ne<P;++ne)switch(Ne=j[ne].call(d,H,Oe,V,F,T,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==_)return Oe}function s(H){switch(H){case void 0:case null:P=j.length=0;break;default:if(typeof H=="function")j[P++]=H;else if(typeof H=="object")for(var _=0,V=H.length;_<V;++_)s(H[_]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(R=null,H?typeof H!="function"?I=1:(I=2,R=H):I=0),u}function d(H,_){var V=H;if(33>V.charCodeAt(0)&&(V=V.trim()),q=V,V=[q],0<P){var F=a(-1,_,V,V,D,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(_=F)}var T=t(Q,V,_,0,0);return 0<P&&(F=a(-2,T,V,V,D,A,T.length,0,0,0),F!==void 0&&(T=F)),q="",N=0,A=D=1,T}var c=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,S=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,A=1,D=1,N=0,I=1,Q=[],j=[],P=0,R=null,U=0,q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Sy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ey(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ky=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rf=Ey(function(e){return ky.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pc=Ya.exports,by={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_y={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tc={};Tc[Pc.ForwardRef]=Cy;Tc[Pc.Memo]=pm;function of(e){return Pc.isMemo(e)?pm:Tc[e.$$typeof]||by}var Oy=Object.defineProperty,Py=Object.getOwnPropertyNames,af=Object.getOwnPropertySymbols,Ty=Object.getOwnPropertyDescriptor,Ly=Object.getPrototypeOf,lf=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(lf){var r=Ly(t);r&&r!==lf&&hm(e,r,n)}var i=Py(t);af&&(i=i.concat(af(t)));for(var o=of(e),l=of(t),a=0;a<i.length;++a){var s=i[a];if(!_y[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=Ty(t,s);try{Oy(e,s,u)}catch{}}}}return e}var mm=hm;function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ru=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ya.exports.typeOf(e)},pa=Object.freeze([]),yn=Object.freeze({});function Ri(e){return typeof e=="function"}function uf(e){return e.displayName||e.name||"Component"}function Lc(e){return e&&typeof e.styledComponentId=="string"}var Cr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",$c=typeof window<"u"&&"HTMLElement"in window,$y=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Vi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var jy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Vi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Ho=new Map,ha=new Map,pi=1,vo=function(e){if(Ho.has(e))return Ho.get(e);for(;ha.has(pi);)pi++;var t=pi++;return Ho.set(e,t),ha.set(t,e),t},My=function(e){return ha.get(e)},Ry=function(e,t){t>=pi&&(pi=t+1),Ho.set(e,t),ha.set(t,e)},zy="style["+Cr+'][data-styled-version="5.3.5"]',Dy=new RegExp("^"+Cr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ay=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Ny=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(Dy);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(Ry(u,s),Ay(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Iy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},vm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(Cr))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Cr,"active"),r.setAttribute("data-styled-version","5.3.5");var l=Iy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Fy=function(){function e(n){var r=this.element=vm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Vi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Hy=function(){function e(n){var r=this.element=vm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Uy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),cf=$c,Wy={isServer:!$c,useCSSOMInjection:!$y},gm=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=qt({},Wy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$c&&cf&&(cf=!1,function(o){for(var l=document.querySelectorAll(zy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Cr)!=="active"&&(Ny(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return vo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Uy(l):o?new Fy(l):new Hy(l),new jy(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(vo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(vo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(vo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=My(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var d=Cr+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),By=/(a)(d)/gi,df=function(e){return String.fromCharCode(e+(e>25?39:97))};function iu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=df(t%52)+n;return(df(t%52)+n).replace(By,"$1-$2")}var ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ym=function(e){return ur(5381,e)};function qy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ri(n)&&!Lc(n))return!1}return!0}var Vy=ym("5.3.5"),Qy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qy(t),this.componentId=n,this.baseHash=ur(Vy,n),this.baseStyle=r,gm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Or(this.rules,t,n,r).join(""),a=iu(ur(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=ur(this.baseHash,r.hash),c="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var m=Or(h,t,n,r),y=Array.isArray(m)?m.join(""):m;d=ur(d,y+f),c+=y}}if(c){var E=iu(d>>>0);if(!n.hasNameForId(i,E)){var v=r(c,"."+E,void 0,i);n.insertRules(i,E,v)}o.push(E)}}return o.join(" ")},e}(),Gy=/^\s*\/\/.*$/gm,Yy=[":","[",".","#"];function Xy(e){var t,n,r,i,o=e===void 0?yn:e,l=o.options,a=l===void 0?yn:l,s=o.plugins,u=s===void 0?pa:s,d=new xy(a),c=[],f=function(y){function E(v){if(v)try{y(v+"}")}catch{}}return function(v,p,g,x,C,O,b,S,$,M){switch(v){case 1:if($===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(g[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(y){c.push(y)}),h=function(y,E,v){return E===0&&Yy.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function m(y,E,v,p){p===void 0&&(p="&");var g=y.replace(Gy,""),x=E&&v?v+" "+E+" { "+g+" }":g;return t=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(v||!E?"":E,x)}return d.use([].concat(u,[function(y,E,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var E=c;return c=[],E}}])),m.hash=u.length?u.reduce(function(y,E){return E.name||Vi(15),ur(y,E.name)},5381).toString():"",m}var wm=jr.createContext();wm.Consumer;var xm=jr.createContext(),Ky=(xm.Consumer,new gm),ou=Xy();function Jy(){return K.exports.useContext(wm)||Ky}function Zy(){return K.exports.useContext(xm)||ou}var e1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ou);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Vi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ou),this.name+t.hash},e}(),t1=/([A-Z])/,n1=/([A-Z])/g,r1=/^ms-/,i1=function(e){return"-"+e.toLowerCase()};function ff(e){return t1.test(e)?e.replace(n1,i1).replace(r1,"-ms-"):e}var pf=function(e){return e==null||e===!1||e===""};function Or(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Or(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(pf(e))return"";if(Lc(e))return"."+e.styledComponentId;if(Ri(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Or(s,t,n,r)}var u;return e instanceof e1?n?(e.inject(n,r),e.getName(r)):e:ru(e)?function d(c,f){var h,m,y=[];for(var E in c)c.hasOwnProperty(E)&&!pf(c[E])&&(Array.isArray(c[E])&&c[E].isCss||Ri(c[E])?y.push(ff(E)+":",c[E],";"):ru(c[E])?y.push.apply(y,d(c[E],E)):y.push(ff(E)+": "+(h=E,(m=c[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in Sy?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var hf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function au(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ri(e)||ru(e)?hf(Or(sf(pa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:hf(Or(sf(e,n)))}var o1=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},a1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,l1=/(^-|-$)/g;function Ul(e){return e.replace(a1,"-").replace(l1,"")}var s1=function(e){return iu(ym(e)>>>0)};function go(e){return typeof e=="string"&&!0}var lu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},u1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function c1(e,t,n){var r=e[n];lu(t)&&lu(r)?Sm(r,t):e[n]=t}function Sm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(lu(l))for(var a in l)u1(a)&&c1(e,l[a],a)}return e}var Em=jr.createContext();Em.Consumer;var Wl={};function km(e,t,n){var r=Lc(e),i=!go(e),o=t.attrs,l=o===void 0?pa:o,a=t.componentId,s=a===void 0?function(p,g){var x=typeof p!="string"?"sc":Ul(p);Wl[x]=(Wl[x]||0)+1;var C=x+"-"+s1("5.3.5"+x+Wl[x]);return g?g+"-"+C:C}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return go(p)?"styled."+p:"Styled("+uf(p)+")"}(e):u,c=t.displayName&&t.componentId?Ul(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,g,x){return e.shouldForwardProp(p,g,x)&&t.shouldForwardProp(p,g,x)}:e.shouldForwardProp);var m,y=new Qy(n,c,r?e.componentStyle:void 0),E=y.isStatic&&l.length===0,v=function(p,g){return function(x,C,O,b){var S=x.attrs,$=x.componentStyle,M=x.defaultProps,z=x.foldedComponentIds,A=x.shouldForwardProp,D=x.styledComponentId,N=x.target,I=function(F,T,J){F===void 0&&(F=yn);var W=qt({},T,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in Ri(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}(o1(C,K.exports.useContext(Em),M)||yn,C,S),Q=I[0],j=I[1],P=function(F,T,J,W){var ee=Jy(),ie=Zy(),se=T?F.generateAndInjectStyles(yn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}($,b,Q),R=O,U=j.$as||C.$as||j.as||C.as||N,q=go(U),H=j!==C?qt({},C,{},j):C,_={};for(var V in H)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?_.as=H[V]:(A?A(V,rf,U):!q||rf(V))&&(_[V]=H[V]));return C.style&&j.style!==C.style&&(_.style=qt({},C.style,{},j.style)),_.className=Array.prototype.concat(z,D,P!==D?P:null,C.className,j.className).filter(Boolean).join(" "),_.ref=R,K.exports.createElement(U,_)}(m,p,g,E)};return v.displayName=d,(m=jr.forwardRef(v)).attrs=f,m.componentStyle=y,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):pa,m.styledComponentId=c,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,x=function(O,b){if(O==null)return{};var S,$,M={},z=Object.keys(O);for($=0;$<z.length;$++)S=z[$],b.indexOf(S)>=0||(M[S]=O[S]);return M}(t,["componentId"]),C=g&&g+"-"+(go(p)?p:Ul(uf(p)));return km(p,qt({},x,{attrs:f,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Sm({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&mm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var su=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Ya.exports.isValidElementType(r))return Vi(1,String(r));var o=function(){return n(r,i,au.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,qt({},i,{},l))},o.attrs=function(l){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){su[e]=su(e)});const L=su,k={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},d1=L.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${k.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,f1=L.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${k.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${k.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,p1=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,h1=L.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${k.extraLargeDesktop}){
        width: 1vw;
    }
`,m1=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,v1=L.div`
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

    @media screen and (min-width: ${k.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${k.largeDesktop}){
        width: 15vw;
    }
`;L.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const mf=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,yo=L.div`
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
        
        @media screen and (min-width: ${k.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${k.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,g1=L.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${k.notebook}){
        display: none;
    }
`;var al={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1=K.exports,w1=Symbol.for("react.element"),x1=Symbol.for("react.fragment"),S1=Object.prototype.hasOwnProperty,E1=y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S1.call(t,r)&&!k1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w1,type:e,key:o,ref:l,props:i,_owner:E1.current}}ll.Fragment=x1;ll.jsx=bm;ll.jsxs=bm;(function(e){e.exports=ll})(al);const Hn=al.exports.Fragment,w=al.exports.jsx,Y=al.exports.jsxs,b1=()=>{const[e,t]=K.exports.useState(!1);return w(g1,{children:Y(d1,{children:[w(yo,{children:w(Ct,{to:"/",children:"Home"})}),w(yo,{children:w(Ct,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(yo,{children:Y(p1,{onClick:()=>t(!e),children:[Y(m1,{children:[w(f1,{children:"Servi\xE7os"}),w(h1,{activeStyle:e,src:hy,alt:"Seta"})]}),Y(v1,{activeStyle:e,children:[w(mf,{children:w(Ct,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(mf,{children:w(Ct,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(yo,{children:w(Ct,{to:"/contatos",children:"Contato"})})]})})},Vr=L.div`
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

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,_1=L.div`
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

    @media screen and (min-width: ${k.notebook}){
        visibility: hidden;
    }   
`,C1=({status:e,toogle:t})=>Y(_1,{activeStyle:e,children:[w(Vr,{children:w(Ct,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(Vr,{children:w(Ct,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Vr,{children:w(Ct,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Vr,{children:w(Ct,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(Vr,{children:w(Ct,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Bl=L.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,O1=L.div`
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
    @media screen and (max-width: ${k.notebook}){
        display: flex;
        margin-right: 20px;
    }
`,P1=({status:e})=>(console.log(e),Y(O1,{children:[w(Bl,{active:e,type:"first-line"}),w(Bl,{active:e,type:"mid-line"}),w(Bl,{active:e,type:"last-line"})]})),T1=L.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${k.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${k.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`,L1=L.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${k.notebook}){
        justify-content: space-between;
        align-items: center;
    }
`,$1=L.div`
    margin-right: 7%;
`,j1=()=>{const[e,t]=K.exports.useState(!1);return Y(L1,{children:[w(Ct,{to:"/",children:w(T1,{src:py,alt:"Logo Serra Jr"})}),w($1,{onClick:()=>{t(!e)},children:w(P1,{status:e})}),w(b1,{}),w(C1,{status:e,toogle:t})]})},M1=L.div`
	margin: 0;   
`,R1=L.a`
	
`,z1=L.img`
    width: 150px;
	margin: 0 20px;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${k.largeMobile}) {
	    width: 150px;
    }
    @media screen and (max-width: ${k.mobile}){
        width: 120px;
    }
    @media screen and (min-width: ${k.desktop}) {
	    width: 180px;
    }
    @media screen and (min-width: ${k.largeDesktop}) {
	    width: 240px;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
	    width: 380px;
    }
    @media screen and (max-width: ${k.notebook}){
        width: 120px;
    }
`,ve=({image:e,altText:t,redirect:n})=>w(M1,{children:w(R1,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(z1,{src:e,alt:t})})}),Qr="/Site-Serra/assets/voitto.e51ea618.svg",Gr="/Site-Serra/assets/iprj.03355e19.svg",Yr="/Site-Serra/assets/inovafri.c4b07fe0.svg",Xr="/Site-Serra/assets/wiseup.d9d06fa3.svg",Kr="/Site-Serra/assets/ligajr.52feeabf.svg",D1=L.div`
    background: #D9D9D9;
	-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	overflow: hidden;
	position: relative;
	width: 100%;
    height: 21vh;


    @media screen and (max-width: ${k.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${k.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
	    height: 17%;
    }

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
`,A1=L.div`
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
`;function N1(){return w(D1,{children:Y(A1,{children:[w(ve,{image:Qr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Gr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Yr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Xr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Kr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Qr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Gr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Yr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Xr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Kr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Qr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Gr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Yr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Xr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Kr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Qr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Gr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Yr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Xr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Kr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Qr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Gr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Yr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Xr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Kr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const I1=L.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,F1=L.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,ql=L.div`
    margin-left: 1rem;
    width: 100%;
    @media screen and (min-width: ${k.mobile}){
        flex-direction: column;
    }
`,Vl=L.span`
    color: white;
    font-weight: 500;
`,wo=L.p`
    color: rgb(180, 180, 180);
`,H1=L.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${k.mobile}) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: ${k.largeMobile}) {
        flex-direction: column;
    }

    @media screen and (min-width: ${k.largeDesktop}){
        width: 50%;
    }

`,Ql=L.img`
    width: 1.2rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${k.mobile}) {
        margin-top: 30%;
    }
    @media screen and (min-width: ${k.desktop}) {
        width: 2rem;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 3.5rem;
    }
`,Gl=L.a`
    text-decoration: none;

`,U1=L.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${k.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,W1=L.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${k.desktop}) {
        font-size: 1.5em;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3em;
    }
`,B1=L.hr`
    width: 90%;
`,q1=L.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,V1=L.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;

    @media screen and (min-width: ${k.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3em;
    }
`,Q1=L.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;L.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`;L.img`
    height: 20vh;

    @media screen and (max-width: ${k.notebook}){
        height: 10vh;
        
    }
    
`;const G1=L.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,Y1="/Site-Serra/assets/facebook.e9ec1758.svg",X1="/Site-Serra/assets/instagram.a8d6cb3d.svg",K1="/Site-Serra/assets/linkedin.3daaec60.svg",J1=()=>Y(I1,{children:[Y(G1,{children:[w(V1,{children:"Parceiros"}),w(Q1,{children:w(N1,{})})]}),Y(W1,{children:[Y(F1,{children:[Y(U1,{children:[Y(Gl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Ql,{src:Y1,alt:"Facebook Serra.Jr"})]}),Y(Gl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Ql,{src:X1,alt:"Instagram Serra.Jr"})]}),Y(Gl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Ql,{src:K1,alt:""})," "]})]}),Y(H1,{children:[Y(ql,{children:[w(Vl,{children:"Institucional"}),w(wo,{children:"Serra Jr Engenharia"})]}),Y(ql,{children:[w(Vl,{children:"Atendimento"}),w(wo,{children:"Segunda a sexta"}),w(wo,{children:"9h \xE0s 19h"})]}),Y(ql,{children:[w(Vl,{children:"Contato"}),w(wo,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(B1,{}),Y(q1,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]});var _m={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Zr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>j});var d=u(4087),c=u.n(d);const f=function(P){return new RegExp(/<[a-z][\s\S]*>/i).test(P)},h=function(P){var R=document.createElement("div");return R.innerHTML=P,R.childNodes},m=function(P,R){return Math.floor(Math.random()*(R-P+1))+P};var y="TYPE_CHARACTER",E="REMOVE_CHARACTER",v="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",x="CALL_FUNCTION",C="ADD_HTML_TAG_ELEMENT",O="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",S="CHANGE_CURSOR",$="PASTE_STRING",M="HTML_TAG";function z(P,R){var U=Object.keys(P);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(P);R&&(q=q.filter(function(H){return Object.getOwnPropertyDescriptor(P,H).enumerable})),U.push.apply(U,q)}return U}function A(P){for(var R=1;R<arguments.length;R++){var U=arguments[R]!=null?arguments[R]:{};R%2?z(Object(U),!0).forEach(function(q){Q(P,q,U[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(U)):z(Object(U)).forEach(function(q){Object.defineProperty(P,q,Object.getOwnPropertyDescriptor(U,q))})}return P}function D(P){return function(R){if(Array.isArray(R))return N(R)}(P)||function(R){if(typeof Symbol<"u"&&R[Symbol.iterator]!=null||R["@@iterator"]!=null)return Array.from(R)}(P)||function(R,U){if(R){if(typeof R=="string")return N(R,U);var q=Object.prototype.toString.call(R).slice(8,-1);return q==="Object"&&R.constructor&&(q=R.constructor.name),q==="Map"||q==="Set"?Array.from(R):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?N(R,U):void 0}}(P)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(P,R){(R==null||R>P.length)&&(R=P.length);for(var U=0,q=new Array(R);U<R;U++)q[U]=P[U];return q}function I(P,R){for(var U=0;U<R.length;U++){var q=R[U];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(P,q.key,q)}}function Q(P,R,U){return R in P?Object.defineProperty(P,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):P[R]=U,P}const j=function(){function P(q,H){var _=this;if(function(F,T){if(!(F instanceof T))throw new TypeError("Cannot call a class as a function")}(this,P),Q(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Q(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Q(this,"setupWrapperElement",function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))}),Q(this,"start",function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_}),Q(this,"pause",function(){return _.state.eventLoopPaused=!0,_}),Q(this,"stop",function(){return _.state.eventLoop&&((0,d.cancel)(_.state.eventLoop),_.state.eventLoop=null),_}),Q(this,"pauseFor",function(F){return _.addEventToQueue(g,{ms:F}),_}),Q(this,"typeOutAllStrings",function(){return typeof _.options.strings=="string"?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach(function(F){_.typeString(F).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)}),_)}),Q(this,"typeString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return _.typeOutHTMLString(F,T);if(F){var J=_.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");_.typeCharacters(ee,T)}return _}),Q(this,"pasteString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?_.typeOutHTMLString(F,T,!0):(F&&_.addEventToQueue($,{character:F,node:T}),_)}),Q(this,"typeOutHTMLString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",_.addEventToQueue(C,{node:ie,parentNode:T}),J?_.pasteString(se,ie):_.typeString(se,ie)):ie.textContent&&(J?_.pasteString(ie.textContent,T):_.typeString(ie.textContent,T))}return _}),Q(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return _.addEventToQueue(v,{speed:F}),_}),Q(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return _.addEventToQueue(O,{speed:F}),_}),Q(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return _.addEventToQueue(b,{delay:F}),_}),Q(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return _.addEventToQueue(S,{cursor:F}),_}),Q(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var T=0;T<F;T++)_.addEventToQueue(E);return _}),Q(this,"callFunction",function(F,T){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return _.addEventToQueue(x,{cb:F,thisArg:T}),_}),Q(this,"typeCharacters",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){_.addEventToQueue(y,{character:J,node:T})}),_}),Q(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){_.addEventToQueue(E)}),_}),Q(this,"addEventToQueue",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.addEventToStateProperty(F,T,J,"eventQueue")}),Q(this,"addReverseCalledEvent",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=_.options.loop;return W?_.addEventToStateProperty(F,T,J,"reverseCalledEvents"):_}),Q(this,"addEventToStateProperty",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:T||{}};return _.state[W]=J?[ee].concat(D(_.state[W])):[].concat(D(_.state[W]),[ee]),_}),Q(this,"runEventLoop",function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var F=Date.now(),T=F-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=D(_.state.calledEvents),_.state.calledEvents=[],_.options=A({},_.state.initialOptions)}if(_.state.eventLoop=c()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(F<_.state.pauseUntil)return;_.state.pauseUntil=null}var J,W=D(_.state.eventQueue),ee=W.shift();if(!(T<=(J=ee.eventName===p||ee.eventName===E?_.options.deleteSpeed==="natural"?m(40,80):_.options.deleteSpeed:_.options.delay==="natural"?m(120,160):_.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(_.logInDevMode({currentEvent:ee,state:_.state,delay:J}),ie){case $:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;_.options.onCreateTextNode&&typeof _.options.onCreateTextNode=="function"&&(oe=_.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):_.state.elements.wrapper.appendChild(oe)),_.state.visibleNodes=[].concat(D(_.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case E:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var Re=ee.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(Re);break;case x:var ce=ee.eventArgs,$e=ce.cb,bn=ce.thisArg;$e.call(bn,{elements:_.state.elements});break;case C:var Pe=ee.eventArgs,Jt=Pe.node,Ft=Pe.parentNode;Ft?Ft.appendChild(Jt):_.state.elements.wrapper.appendChild(Jt),_.state.visibleNodes=[].concat(D(_.state.visibleNodes),[{type:M,node:Jt,parentNode:Ft||_.state.elements.wrapper}]);break;case v:var ot=_.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:O,eventArgs:{speed:te,temp:!0}});for(var Qn=0,Ar=ot.length;Qn<Ar;Qn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:O,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var Mt=ee.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var ml=_.state.visibleNodes.pop(),vv=ml.type,Ki=ml.node,gv=ml.character;_.options.onRemoveNode&&typeof _.options.onRemoveNode=="function"&&_.options.onRemoveNode({node:Ki,character:gv}),Ki&&Ki.parentNode.removeChild(Ki),vv===M&&Mt&&W.unshift({eventName:p,eventArgs:{}})}break;case O:_.options.deleteSpeed=ee.eventArgs.speed;break;case b:_.options.delay=ee.eventArgs.delay;break;case S:_.options.cursor=ee.eventArgs.cursor,_.state.elements.cursor.innerHTML=ee.eventArgs.cursor}_.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(_.state.calledEvents=[].concat(D(_.state.calledEvents),[ee]))),_.state.eventQueue=W,_.state.lastFrameTime=F}}}),q)if(typeof q=="string"){var V=document.querySelector(q);if(!V)throw new Error("Could not find container element");this.state.elements.container=V}else this.state.elements.container=q;H&&(this.options=A(A({},this.options),H)),this.state.initialOptions=A({},this.options),this.init()}var R,U;return R=P,(U=[{key:"init",value:function(){var q,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(q=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(q)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(q){this.options.devMode&&console.log(q)}}])&&I(R.prototype,U),Object.defineProperty(R,"prototype",{writable:!1}),P}()},8552:(a,s,u)=>{var d=u(852)(u(5639),"DataView");a.exports=d},1989:(a,s,u)=>{var d=u(1789),c=u(401),f=u(7667),h=u(1327),m=u(1866);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,s,u)=>{var d=u(7040),c=u(4125),f=u(2117),h=u(7518),m=u(4705);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,s,u)=>{var d=u(852)(u(5639),"Map");a.exports=d},3369:(a,s,u)=>{var d=u(4785),c=u(1285),f=u(6e3),h=u(9916),m=u(5265);function y(E){var v=-1,p=E==null?0:E.length;for(this.clear();++v<p;){var g=E[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,s,u)=>{var d=u(852)(u(5639),"Promise");a.exports=d},8525:(a,s,u)=>{var d=u(852)(u(5639),"Set");a.exports=d},8668:(a,s,u)=>{var d=u(3369),c=u(619),f=u(2385);function h(m){var y=-1,E=m==null?0:m.length;for(this.__data__=new d;++y<E;)this.add(m[y])}h.prototype.add=h.prototype.push=c,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var d=u(8407),c=u(7465),f=u(3779),h=u(7599),m=u(4758),y=u(4309);function E(v){var p=this.__data__=new d(v);this.size=p.size}E.prototype.clear=c,E.prototype.delete=f,E.prototype.get=h,E.prototype.has=m,E.prototype.set=y,a.exports=E},2705:(a,s,u)=>{var d=u(5639).Symbol;a.exports=d},1149:(a,s,u)=>{var d=u(5639).Uint8Array;a.exports=d},577:(a,s,u)=>{var d=u(852)(u(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length,f=0,h=[];++d<c;){var m=s[d];u(m,d,s)&&(h[f++]=m)}return h}},4636:(a,s,u)=>{var d=u(2545),c=u(5694),f=u(1469),h=u(4144),m=u(5776),y=u(6719),E=Object.prototype.hasOwnProperty;a.exports=function(v,p){var g=f(v),x=!g&&c(v),C=!g&&!x&&h(v),O=!g&&!x&&!C&&y(v),b=g||x||C||O,S=b?d(v.length,String):[],$=S.length;for(var M in v)!p&&!E.call(v,M)||b&&(M=="length"||C&&(M=="offset"||M=="parent")||O&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||m(M,$))||S.push(M);return S}},2488:a=>{a.exports=function(s,u){for(var d=-1,c=u.length,f=s.length;++d<c;)s[f+d]=u[d];return s}},2908:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length;++d<c;)if(u(s[d],d,s))return!0;return!1}},8470:(a,s,u)=>{var d=u(7813);a.exports=function(c,f){for(var h=c.length;h--;)if(d(c[h][0],f))return h;return-1}},8866:(a,s,u)=>{var d=u(2488),c=u(1469);a.exports=function(f,h,m){var y=h(f);return c(f)?y:d(y,m(f))}},4239:(a,s,u)=>{var d=u(2705),c=u(9607),f=u(2333),h=d?d.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?c(m):f(m)}},9454:(a,s,u)=>{var d=u(4239),c=u(7005);a.exports=function(f){return c(f)&&d(f)=="[object Arguments]"}},939:(a,s,u)=>{var d=u(2492),c=u(7005);a.exports=function f(h,m,y,E,v){return h===m||(h==null||m==null||!c(h)&&!c(m)?h!=h&&m!=m:d(h,m,y,E,f,v))}},2492:(a,s,u)=>{var d=u(6384),c=u(7114),f=u(8351),h=u(6096),m=u(4160),y=u(1469),E=u(4144),v=u(6719),p="[object Arguments]",g="[object Array]",x="[object Object]",C=Object.prototype.hasOwnProperty;a.exports=function(O,b,S,$,M,z){var A=y(O),D=y(b),N=A?g:m(O),I=D?g:m(b),Q=(N=N==p?x:N)==x,j=(I=I==p?x:I)==x,P=N==I;if(P&&E(O)){if(!E(b))return!1;A=!0,Q=!1}if(P&&!Q)return z||(z=new d),A||v(O)?c(O,b,S,$,M,z):f(O,b,N,S,$,M,z);if(!(1&S)){var R=Q&&C.call(O,"__wrapped__"),U=j&&C.call(b,"__wrapped__");if(R||U){var q=R?O.value():O,H=U?b.value():b;return z||(z=new d),M(q,H,S,$,z)}}return!!P&&(z||(z=new d),h(O,b,S,$,M,z))}},8458:(a,s,u)=>{var d=u(3560),c=u(5346),f=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,E=Object.prototype,v=y.toString,p=E.hasOwnProperty,g=RegExp("^"+v.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!f(x)||c(x))&&(d(x)?g:m).test(h(x))}},8749:(a,s,u)=>{var d=u(4239),c=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return f(m)&&c(m.length)&&!!h[d(m)]}},280:(a,s,u)=>{var d=u(5726),c=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!d(h))return c(h);var m=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(s,u){for(var d=-1,c=Array(s);++d<s;)c[d]=u(d);return c}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var d=u(5639)["__core-js_shared__"];a.exports=d},7114:(a,s,u)=>{var d=u(8668),c=u(2908),f=u(4757);a.exports=function(h,m,y,E,v,p){var g=1&y,x=h.length,C=m.length;if(x!=C&&!(g&&C>x))return!1;var O=p.get(h),b=p.get(m);if(O&&b)return O==m&&b==h;var S=-1,$=!0,M=2&y?new d:void 0;for(p.set(h,m),p.set(m,h);++S<x;){var z=h[S],A=m[S];if(E)var D=g?E(A,z,S,m,h,p):E(z,A,S,h,m,p);if(D!==void 0){if(D)continue;$=!1;break}if(M){if(!c(m,function(N,I){if(!f(M,I)&&(z===N||v(z,N,y,E,p)))return M.push(I)})){$=!1;break}}else if(z!==A&&!v(z,A,y,E,p)){$=!1;break}}return p.delete(h),p.delete(m),$}},8351:(a,s,u)=>{var d=u(2705),c=u(1149),f=u(7813),h=u(7114),m=u(8776),y=u(1814),E=d?d.prototype:void 0,v=E?E.valueOf:void 0;a.exports=function(p,g,x,C,O,b,S){switch(x){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!b(new c(p),new c(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var $=m;case"[object Set]":var M=1&C;if($||($=y),p.size!=g.size&&!M)return!1;var z=S.get(p);if(z)return z==g;C|=2,S.set(p,g);var A=h($(p),$(g),C,O,b,S);return S.delete(p),A;case"[object Symbol]":if(v)return v.call(p)==v.call(g)}return!1}},6096:(a,s,u)=>{var d=u(8234),c=Object.prototype.hasOwnProperty;a.exports=function(f,h,m,y,E,v){var p=1&m,g=d(f),x=g.length;if(x!=d(h).length&&!p)return!1;for(var C=x;C--;){var O=g[C];if(!(p?O in h:c.call(h,O)))return!1}var b=v.get(f),S=v.get(h);if(b&&S)return b==h&&S==f;var $=!0;v.set(f,h),v.set(h,f);for(var M=p;++C<x;){var z=f[O=g[C]],A=h[O];if(y)var D=p?y(A,z,O,h,f,v):y(z,A,O,f,h,v);if(!(D===void 0?z===A||E(z,A,m,y,v):D)){$=!1;break}M||(M=O=="constructor")}if($&&!M){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||($=!1)}return v.delete(f),v.delete(h),$}},1957:(a,s,u)=>{var d=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=d},8234:(a,s,u)=>{var d=u(8866),c=u(9551),f=u(3674);a.exports=function(h){return d(h,f,c)}},5050:(a,s,u)=>{var d=u(7019);a.exports=function(c,f){var h=c.__data__;return d(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var d=u(8458),c=u(7801);a.exports=function(f,h){var m=c(f,h);return d(m)?m:void 0}},9607:(a,s,u)=>{var d=u(2705),c=Object.prototype,f=c.hasOwnProperty,h=c.toString,m=d?d.toStringTag:void 0;a.exports=function(y){var E=f.call(y,m),v=y[m];try{y[m]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(E?y[m]=v:delete y[m]),g}},9551:(a,s,u)=>{var d=u(4963),c=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),d(h(y),function(E){return f.call(y,E)}))}:c;a.exports=m},4160:(a,s,u)=>{var d=u(8552),c=u(7071),f=u(3818),h=u(8525),m=u(577),y=u(4239),E=u(346),v="[object Map]",p="[object Promise]",g="[object Set]",x="[object WeakMap]",C="[object DataView]",O=E(d),b=E(c),S=E(f),$=E(h),M=E(m),z=y;(d&&z(new d(new ArrayBuffer(1)))!=C||c&&z(new c)!=v||f&&z(f.resolve())!=p||h&&z(new h)!=g||m&&z(new m)!=x)&&(z=function(A){var D=y(A),N=D=="[object Object]"?A.constructor:void 0,I=N?E(N):"";if(I)switch(I){case O:return C;case b:return v;case S:return p;case $:return g;case M:return x}return D}),a.exports=z},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var d=u(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(d){var m=h[f];return m==="__lodash_hash_undefined__"?void 0:m}return c.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return d?h[f]!==void 0:c.call(h,f)}},1866:(a,s,u)=>{var d=u(4536);a.exports=function(c,f){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=d&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,d){var c=typeof u;return!!(d=d==null?9007199254740991:d)&&(c=="number"||c!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<d}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var d,c=u(4429),f=(d=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var d=u&&u.constructor;return u===(typeof d=="function"&&d.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var d=u(8470),c=Array.prototype.splice;a.exports=function(f){var h=this.__data__,m=d(h,f);return!(m<0||(m==h.length-1?h.pop():c.call(h,m,1),--this.size,0))}},2117:(a,s,u)=>{var d=u(8470);a.exports=function(c){var f=this.__data__,h=d(f,c);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var d=u(8470);a.exports=function(c){return d(this.__data__,c)>-1}},4705:(a,s,u)=>{var d=u(8470);a.exports=function(c,f){var h=this.__data__,m=d(h,c);return m<0?(++this.size,h.push([c,f])):h[m][1]=f,this}},4785:(a,s,u)=>{var d=u(1989),c=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||c),string:new d}}},1285:(a,s,u)=>{var d=u(5050);a.exports=function(c){var f=d(this,c).delete(c);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).get(c)}},9916:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).has(c)}},5265:(a,s,u)=>{var d=u(5050);a.exports=function(c,f){var h=d(this,c),m=h.size;return h.set(c,f),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c,f){d[++u]=[f,c]}),d}},4536:(a,s,u)=>{var d=u(852)(Object,"create");a.exports=d},6916:(a,s,u)=>{var d=u(5569)(Object.keys,Object);a.exports=d},1167:(a,s,u)=>{a=u.nmd(a);var d=u(1957),c=s&&!s.nodeType&&s,f=c&&a&&!a.nodeType&&a,h=f&&f.exports===c&&d.process,m=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(d){return s(u(d))}}},5639:(a,s,u)=>{var d=u(1957),c=typeof self=="object"&&self&&self.Object===Object&&self,f=d||c||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c){d[++u]=c}),d}},7465:(a,s,u)=>{var d=u(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,d=u.delete(s);return this.size=u.size,d}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var d=u(8407),c=u(7071),f=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof d){var E=y.__data__;if(!c||E.length<199)return E.push([h,m]),this.size=++y.size,this;y=this.__data__=new f(E)}return y.set(h,m),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var d=u(9454),c=u(7005),f=Object.prototype,h=f.hasOwnProperty,m=f.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(E){return c(E)&&h.call(E,"callee")&&!m.call(E,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var d=u(3560),c=u(1780);a.exports=function(f){return f!=null&&c(f.length)&&!d(f)}},4144:(a,s,u)=>{a=u.nmd(a);var d=u(5639),c=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f?d.Buffer:void 0,y=(m?m.isBuffer:void 0)||c;a.exports=y},8446:(a,s,u)=>{var d=u(939);a.exports=function(c,f){return d(c,f)}},3560:(a,s,u)=>{var d=u(4239),c=u(3218);a.exports=function(f){if(!c(f))return!1;var h=d(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var d=u(8749),c=u(1717),f=u(1167),h=f&&f.isTypedArray,m=h?c(h):d;a.exports=m},3674:(a,s,u)=>{var d=u(4636),c=u(280),f=u(8612);a.exports=function(h){return f(h)?d(h):c(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,d,c,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,c=(s=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),f=c-h):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var d=u(75),c=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",m=c["request"+h],y=c["cancel"+h]||c["cancelRequest"+h],E=0;!m&&E<f.length;E++)m=c[f[E]+"Request"+h],y=c[f[E]+"Cancel"+h]||c[f[E]+"CancelRequest"+h];if(!m||!y){var v=0,p=0,g=[];m=function(x){if(g.length===0){var C=d(),O=Math.max(0,16.666666666666668-(C-v));v=O+C,setTimeout(function(){var b=g.slice(0);g.length=0;for(var S=0;S<b.length;S++)if(!b[S].cancelled)try{b[S].callback(v)}catch($){setTimeout(function(){throw $},0)}},Math.round(O))}return g.push({handle:++p,callback:x,cancelled:!1}),p},y=function(x){for(var C=0;C<g.length;C++)g[C].handle===x&&(g[C].cancelled=!0)}}a.exports=function(x){return m.call(c,x)},a.exports.cancel=function(){y.apply(c,arguments)},a.exports.polyfill=function(x){x||(x=c),x.requestAnimationFrame=m,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>C});var a=o(8156),s=o.n(a),u=o(7403),d=o(8446),c=o.n(d);function f(O){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(O)}function h(O,b){if(!(O instanceof b))throw new TypeError("Cannot call a class as a function")}function m(O,b){for(var S=0;S<b.length;S++){var $=b[S];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(O,$.key,$)}}function y(O,b){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,$){return S.__proto__=$,S},y(O,b)}function E(O,b){if(b&&(f(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(O)}function v(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function p(O){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},p(O)}function g(O,b,S){return b in O?Object.defineProperty(O,b,{value:S,enumerable:!0,configurable:!0,writable:!0}):O[b]=S,O}var x=function(O){(function(D,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(N&&N.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),N&&y(D,N)})(A,O);var b,S,$,M,z=($=A,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,N=p($);if(M){var I=p(this).constructor;D=Reflect.construct(N,arguments,I)}else D=N.apply(this,arguments);return E(this,D)});function A(){var D;h(this,A);for(var N=arguments.length,I=new Array(N),Q=0;Q<N;Q++)I[Q]=arguments[Q];return g(v(D=z.call.apply(z,[this].concat(I))),"state",{instance:null}),D}return b=A,(S=[{key:"componentDidMount",value:function(){var D=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=D.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function(D){c()(this.props.options,D.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var D=this,N=this.props.component;return s().createElement(N,{ref:function(I){return D.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(b.prototype,S),Object.defineProperty(b,"prototype",{writable:!1}),A}(a.Component);x.defaultProps={component:"div"};const C=x})(),l.default})())})(_m);const Z1=La(_m.exports),ew=L.div`
    width: 100%;

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${k.largeDesktop}){
            font-size: 60px;
        }
        @media screen and (min-width: ${k.extraLargeDesktop}){
            font-size: 80px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${k.largeDesktop}){
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
`,tw=()=>w(ew,{children:w(Z1,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),nw="/Site-Serra/assets/presentation-image.40ce3de4.png",Un={Screen:{width:window.innerWidth,height:window.innerHeight},FontSize:{extraSmall:window.innerHeight*.02,small:window.innerHeight*.021,standart:window.innerHeight*.022,medium:window.innerHeight*.023,large:window.innerHeight*.024,xLarge:window.innerHeight*.035},Color:{lightBlue:"#04ADD7",darkBlue:"#001830",orange:"#FF7400"}},rw=L.div`
  background-color: #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: ${k.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    min-height: ${Un.Screen.height*.75}px;
  }
`,iw=L.img`
  @media screen and (max-width: ${k.largeMobile}) {
    width: 60%;
    margin-top: 10%;
  }

  @media screen and (min-width: ${k.largeMobile}) {
    width: 40%;
    margin-top: 5%;
  }
  @media screen and (min-width: ${k.notebook}) {
    width: 25%;
    margin-top: 0;
  }
`,ow=L.div`
  display: block;
  justify-content: center;
  flex-direction: column;
  
  width: 45%;
  height: 45%;

  @media screen and (max-width: ${k.tablet}) {
    width: 80%;
    margin-top: 4%;
  }
`,aw=()=>Y(rw,{children:[w(ow,{children:w(tw,{})}),w(iw,{src:nw,alt:"apresenta\xE7\xE3o"})]}),lw=L.img`
  @media screen and (max-width: ${k.notebook}) {
    height: 8vh;
  }
  @media screen and (min-width: ${k.notebook}) {
    height: 10vh;
  }
  @media screen and (min-width: ${k.largeDesktop}) {
    height: 7vh;
  }
`,sw=L.p`
  font-weight: 500;
  min-height: 90px;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
  text-align: center;
  color: #000000; 
  
  @media screen and (max-width: ${k.notebook}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${k.notebook}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${k.largeDesktop}) {
    font-size: 25px;
  }
  @media screen and (min-width: ${k.extraLargeDesktop}) {
    font-size: 35px;
  }
`,uw=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 250px;

  
  @media screen and (min-width: ${k.extraLargeDesktop}) {
    width: 290px;
    height: 300px;
  }
 
`,cw=({icon:e,text:t,alt:n})=>Y(uw,{children:[w(lw,{src:e,alt:n}),w(sw,{children:t})]}),dw=L.div`
  margin: 2% 1% 2% 1%;
  

  @media screen and (max-width: ${k.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${k.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${k.desktop}) {
    width: ${(Un.Screen.width-550)/2}px;
  }

  @media screen and (min-width: ${k.extraLargeDesktop}) {
    width: ${(Un.Screen.width-900)/2}px;
  }
`,fw=L.p`
  margin: 0;
  width: 100%;
  height: 4rem;
  min-height: 30px;
  background-color: ${({titleColor:e})=>e!=null?e:"#FD6300"};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: ${k.largeDesktop}) {
    font-size: 45px;
    height: 8rem;
  }
`,pw=L.div`
  -webkit-box-shadow: 7px 7px 16px -3px #000000;
  box-shadow: 7px 7px 16px -3px #000000;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: #ededed;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`,hw=L.div`
  background-color: #ededed;
  height: 100%;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

`,mw=L.button`
  background-color: ${({buttonColor:e})=>e!=null?e:"#FD6300"};
  border: none;
  width: 50%;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: ${k.tablet}) {
    width: 60%;
    font-size: 25px;
  }
  @media screen and (min-width: ${k.tablet}) {
    width: 30%;
  }

  @media screen and (min-width: ${k.largeDesktop}) {
    font-size: 40px;
    width: 30%;
    margin-top: 30px;
  }
`,vf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>{const l=Ga();return Y(dw,{children:[w(fw,{titleColor:r,children:e}),Y(pw,{children:[w(hw,{children:i.map((a,s)=>w(cw,{icon:a,text:o[s],alt:o[s]},s))}),w(mw,{onClick:()=>{l(t),window.scrollTo(0,0)},buttonColor:r,children:n})]})]})},vw="/Site-Serra/assets/Sites.a0112d0d.svg",gw="/Site-Serra/assets/sistemas-web.d1b27032.svg",yw="/Site-Serra/assets/manutencao.33f9dd1a.svg",ww="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",xw="/Site-Serra/assets/braco-robo.2b026e48.svg",Sw="/Site-Serra/assets/impressora-3d.75613d7d.svg",Ew="/Site-Serra/assets/membros-2.457898e5.svg",kw=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${k.notebook}) {
        font-size: 30px;
        width: 80%;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 45px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 65px;
    }
`,bw=L.hr`
    margin: 0px;
    border: 0px;
    height: 7px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${k.tablet}) {
        height: 4px;
    }
    @media screen and (max-width: ${k.notebook}) {
        width: 60%;
    }
`,_w=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-top: 0px;
`,Cw=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,jc=({text:e,fontSize:t,titleWidth:n})=>w(_w,{children:Y(Cw,{children:[w(kw,{style:{fontSize:t},children:e}),w(bw,{gradientWidth:n})]})}),Ow=L.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
`,Pw=L.div`
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

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,Tw=L.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${k.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${k.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,Lw=L.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${k.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,$w=L.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${k.notebook}) {
        width: 90%;
    }
`,jw=L.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${k.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${k.desktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 50px;
    }
`,Mw=L.img`
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;


    @media screen and (max-width: ${k.notebook}) {
        width: 75%;
        height: 75%;
    }
    @media screen and (min-width: ${k.notebook}) {
        width: 35%;
        height: 35%;
    }
    @media screen and (min-width: ${k.largeDesktop}) {
        width: 25%;
        height: 25%;
    }

`,Rw=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,zw=L.button`
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

    @media screen and (min-width: ${k.desktop}) {
        width: 20%;
        font-size: 30px;
    }
    @media screen and (min-width: ${k.largeDesktop}) {
        width: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 20%;
        font-size: 60px;
    }
    @media screen and (max-width: ${k.largeMobile}){
        font-size: 25px;
        width: 60%;
    }
`,Dw=({title:e,color:t,text:n,image:r})=>{const i=Ga();return Y(Ow,{children:[w(Pw,{titleColor:t,children:e}),Y(Tw,{children:[Y(Lw,{children:[w($w,{children:w(jw,{children:n})}),w(Mw,{src:r,alt:"Imagem com os membros da Serra Jr. Engenharia"})]}),w(Rw,{children:w(zw,{onClick:()=>{i("/quemsomos"),window.scrollTo(0,0)},buttonColor:t,children:"Saiba Mais"})})]})]})},Aw="/Site-Serra/assets/background-image.668c0125.svg",Nw=L.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

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
`,Iw=L.div`
  background-image: url(${Aw});
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: top;
  width: 100%;
`,Fw=()=>Y(Iw,{children:[w(jc,{text:"O que fazemos"}),Y(Nw,{children:[w(vf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/computacao",images:[vw,gw],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(vf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/mecanica",color:"#04ADD7",images:[yw,ww,xw,Sw],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(Dw,{title:"Nossa Hist\xF3ria",color:"#001830",text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:Ew})]}),Hw=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Uw=()=>Y(Hn,{children:[w(aw,{}),w(Hw,{children:w(Fw,{})})]}),Ww="/Site-Serra/assets/presentation-image.73570450.svg",Bw="/Site-Serra/assets/membros-1.26cb4867.svg",qw="/Site-Serra/assets/membros-2.457898e5.svg",Vw="/Site-Serra/assets/missao-icon.4dc65479.svg",Qw="/Site-Serra/assets/visao-icon.75e2e4de.svg",Gw="/Site-Serra/assets/valores-icon.b6d7390b.svg",Te={members:[Bw,qw],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:Vw,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:Qw,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:Gw,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia;","Gest\xE3o segura;","Impactar nossa era;","Evolu\xE7\xE3o constante;","Responsabilidade com os clientes."],content:void 0}]},Yw=L.div`
    
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



    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
        min-height: 10vh;
    }

    @media screen and (max-width: ${k.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 30%;
    }
    
`,Xw=L.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`,Kw=L.p`
    width: 95%;
    text-align: justify;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: justify;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,Jw=L.ul`

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,Zw=L.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
    }
`,ex=L.img`
    width: 120px;
    height: 100px;

    @media screen and (max-width: ${k.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${k.tablet}) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 200px;
        height: 200px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 300px;
        height: 300px;
    }
`,Yl=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Y(Yw,{children:[w(ex,{src:e,alt:n}),w(Xw,{children:t}),r?w(Jw,{children:o?o.map((l,a)=>w(Zw,{children:l},a)):null}):w(Kw,{children:i})]});var Cm={},Om={},sl={},Pm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Pm);var tx="Expected a function",gf=0/0,nx="[object Symbol]",rx=/^\s+|\s+$/g,ix=/^[-+]0x[0-9a-f]+$/i,ox=/^0b[01]+$/i,ax=/^0o[0-7]+$/i,lx=parseInt,sx=typeof Zr=="object"&&Zr&&Zr.Object===Object&&Zr,ux=typeof self=="object"&&self&&self.Object===Object&&self,cx=sx||ux||Function("return this")(),dx=Object.prototype,fx=dx.toString,px=Math.max,hx=Math.min,Xl=function(){return cx.Date.now()};function mx(e,t,n){var r,i,o,l,a,s,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(tx);t=yf(t)||0,uu(n)&&(d=!!n.leading,c="maxWait"in n,o=c?px(yf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(O){var b=r,S=i;return r=i=void 0,u=O,l=e.apply(S,b),l}function m(O){return u=O,a=setTimeout(v,t),d?h(O):l}function y(O){var b=O-s,S=O-u,$=t-b;return c?hx($,o-S):$}function E(O){var b=O-s,S=O-u;return s===void 0||b>=t||b<0||c&&S>=o}function v(){var O=Xl();if(E(O))return p(O);a=setTimeout(v,y(O))}function p(O){return a=void 0,f&&r?h(O):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(Xl())}function C(){var O=Xl(),b=E(O);if(r=arguments,i=this,s=O,b){if(a===void 0)return m(s);if(c)return a=setTimeout(v,t),h(s)}return a===void 0&&(a=setTimeout(v,t)),l}return C.cancel=g,C.flush=x,C}function uu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function vx(e){return!!e&&typeof e=="object"}function gx(e){return typeof e=="symbol"||vx(e)&&fx.call(e)==nx}function yf(e){if(typeof e=="number")return e;if(gx(e))return gf;if(uu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=uu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(rx,"");var n=ox.test(e);return n||ax.test(e)?lx(e.slice(2),n?2:8):ix.test(e)?gf:+e}var yx=mx,Qi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Qi);var G={};Object.defineProperty(G,"__esModule",{value:!0});G.checkSpecKeys=G.checkNavigable=G.changeSlide=G.canUseDOM=G.canGoNext=void 0;G.clamp=Tm;G.swipeStart=G.swipeMove=G.swipeEnd=G.slidesOnRight=G.slidesOnLeft=G.slideHandler=G.siblingDirection=G.safePreventDefault=G.lazyStartIndex=G.lazySlidesOnRight=G.lazySlidesOnLeft=G.lazyEndIndex=G.keyHandler=G.initializedState=G.getWidth=G.getTrackLeft=G.getTrackCSS=G.getTrackAnimateCSS=G.getTotalSlides=G.getSwipeDirection=G.getSlideCount=G.getRequiredLazySlides=G.getPreClones=G.getPostClones=G.getOnDemandLazySlides=G.getNavigableIndexes=G.getHeight=G.extractObject=void 0;var wx=xx(K.exports);function xx(e){return e&&e.__esModule?e:{default:e}}function wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wf(Object(n),!0).forEach(function(r){Sx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tm(e,t,n){return Math.max(t,Math.min(e,n))}var Rn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};G.safePreventDefault=Rn;var Mc=function(t){for(var n=[],r=Rc(t),i=zc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};G.getOnDemandLazySlides=Mc;var Ex=function(t){for(var n=[],r=Rc(t),i=zc(t),o=r;o<i;o++)n.push(o);return n};G.getRequiredLazySlides=Ex;var Rc=function(t){return t.currentSlide-Lm(t)};G.lazyStartIndex=Rc;var zc=function(t){return t.currentSlide+$m(t)};G.lazyEndIndex=zc;var Lm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};G.lazySlidesOnLeft=Lm;var $m=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};G.lazySlidesOnRight=$m;var ma=function(t){return t&&t.offsetWidth||0};G.getWidth=ma;var Dc=function(t){return t&&t.offsetHeight||0};G.getHeight=Dc;var Ac=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};G.getSwipeDirection=Ac;var Nc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};G.canGoNext=Nc;var kx=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};G.extractObject=kx;var bx=function(t){var n=wx.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ma(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(ma(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Dc(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=Mc(we(we({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(h);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};G.initializedState=bx;var _x=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,E,v,p,g={},x={},C=o?l:Tm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},x={animating:!1,targetSlide:y}}else E=y,y<0?(E=y+a,o?a%c!==0&&(E=a-a%c):E=0):!Nc(t)&&y>u?y=E=u:d&&y>=a?(y=o?a:a-1,E=o?0:a-1):y>=a&&(E=y-a,o?a%c!==0&&(E=0):E=a-f),!o&&y+f>=a&&(E=a-f),v=Di(we(we({},t),{},{slideIndex:y})),p=Di(we(we({},t),{},{slideIndex:E})),o||(v===p&&(y=E),v=p),s&&(m=m.concat(Mc(we(we({},t),{},{currentSlide:y})))),h?(g={animating:!0,currentSlide:E,trackStyle:Ic(we(we({},t),{},{left:v})),lazyLoadedList:m,targetSlide:C},x={animating:!1,currentSlide:E,trackStyle:zi(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:C}):g={currentSlide:E,trackStyle:zi(we(we({},t),{},{left:p})),lazyLoadedList:m,targetSlide:C};return{state:g,nextState:x}};G.slideHandler=_x;var Cx=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,m=t.infinite;if(l=d%s!==0,r=l?0:(d-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,h&&!m&&(i=c-o,a=i===-1?d-1:i),m||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=c+o,h&&!m&&(a=(c+s)%d+r),m||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=zm(we(we({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};G.changeSlide=Cx;var Ox=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};G.keyHandler=Ox;var Px=function(t,n,r){return t.target.tagName==="IMG"&&Rn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};G.swipeStart=Px;var Tx=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,h=n.swiped,m=n.swiping,y=n.slideCount,E=n.slidesToScroll,v=n.infinite,p=n.touchObject,g=n.swipeEvent,x=n.listHeight,C=n.listWidth;if(!r){if(i)return Rn(t);o&&l&&a&&Rn(t);var O,b={},S=Di(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var $=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&$>10)return{scrolling:!0};a&&(p.swipeLength=$);var M=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(M=p.curY>p.startY?1:-1);var z=Math.ceil(y/E),A=Ac(n.touchObject,a),D=p.swipeLength;return v||(u===0&&(A==="right"||A==="down")||u+1>=z&&(A==="left"||A==="up")||!Nc(n)&&(A==="left"||A==="up"))&&(D=p.swipeLength*d,c===!1&&f&&(f(A),b.edgeDragged=!0)),!h&&g&&(g(A),b.swiped=!0),o?O=S+D*(x/C)*M:s?O=S-D*M:O=S+D*M,a&&(O=S+D*M),b=we(we({},b),{},{touchObject:p,swipeLeft:O,trackStyle:zi(we(we({},n),{},{left:O}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(b.swiping=!0,Rn(t)),b}};G.swipeMove=Tx;var Lx=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,h=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&Rn(t),{};var E=s?u/a:l/a,v=Ac(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>E){Rn(t),f&&f(v);var g,x,C=y?m:h;switch(v){case"left":case"up":x=C+du(n),g=d?cu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=C-du(n),g=d?cu(n,x):x,p.currentDirection=1;break;default:g=C}p.triggerSlideHandler=g}else{var O=Di(n);p.trackStyle=Ic(we(we({},n),{},{left:O}))}return p};G.swipeEnd=Lx;var jm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};G.getNavigableIndexes=jm;var cu=function(t,n){var r=jm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};G.checkNavigable=cu;var du=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Dc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+ma(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};G.getSlideCount=du;var ul=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};G.checkSpecKeys=ul;var zi=function(t){ul(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Rm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};G.getTrackCSS=zi;var Ic=function(t){ul(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=zi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};G.getTrackAnimateCSS=Ic;var Di=function(t){if(t.unslick)return 0;ul(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,h=t.fade,m=t.vertical,y=0,E,v,p=0;if(h||t.slideCount===1)return 0;var g=0;if(i?(g=-hi(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*f,m?E=n*f*-1+p:E=n*u*-1+y,c===!0){var x,C=r&&r.node;if(x=n+hi(t),v=C&&C.childNodes[x],E=v?v.offsetLeft*-1:0,o===!0){x=i?n+hi(t):n,v=C&&C.children[x],E=0;for(var O=0;O<x;O++)E-=C&&C.children[O]&&C.children[O].offsetWidth;E-=parseInt(t.centerPadding),E+=v&&(d-v.offsetWidth)/2}}return E};G.getTrackLeft=Di;var hi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};G.getPreClones=hi;var Mm=function(t){return t.unslick||!t.infinite?0:t.slideCount};G.getPostClones=Mm;var Rm=function(t){return t.slideCount===1?1:hi(t)+t.slideCount+Mm(t)};G.getTotalSlides=Rm;var zm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Dm(t)?"left":"right":t.targetSlide<t.currentSlide-Am(t)?"right":"left"};G.siblingDirection=zm;var Dm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};G.slidesOnRight=Dm;var Am=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};G.slidesOnLeft=Am;var $x=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};G.canUseDOM=$x;var cl={};function fu(e){return fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fu(e)}Object.defineProperty(cl,"__esModule",{value:!0});cl.Track=void 0;var nn=Nm(K.exports),Kl=Nm(Qi.exports),Jl=G;function Nm(e){return e&&e.__esModule?e:{default:e}}function pu(){return pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function jx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mx(e,t,n){return t&&xf(e.prototype,t),n&&xf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Rx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hu(e,t)}function hu(e,t){return hu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},hu(e,t)}function zx(e){var t=Ax();return function(){var r=va(e),i;if(t){var o=va(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Dx(this,i)}}function Dx(e,t){if(t&&(fu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mu(e)}function mu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ax(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function va(e){return va=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},va(e)}function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(r){vu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zl=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},Nx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},es=function(t,n){return t.key||n},Ix=function(t){var n,r=[],i=[],o=[],l=nn.default.Children.count(t.children),a=(0,Jl.lazyStartIndex)(t),s=(0,Jl.lazyEndIndex)(t);return nn.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=nn.default.createElement("div",null);var h=Nx(Ze(Ze({},t),{},{index:d})),m=c.props.className||"",y=Zl(Ze(Ze({},t),{},{index:d}));if(r.push(nn.default.cloneElement(c,{key:"original"+es(c,d),"data-index":d,className:(0,Kl.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ze(Ze({outline:"none"},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var E=l-d;E<=(0,Jl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-E,n>=a&&(c=u),y=Zl(Ze(Ze({},t),{},{index:n})),i.push(nn.default.cloneElement(c,{key:"precloned"+es(c,n),"data-index":n,tabIndex:"-1",className:(0,Kl.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+d,n<s&&(c=u),y=Zl(Ze(Ze({},t),{},{index:n})),o.push(nn.default.cloneElement(c,{key:"postcloned"+es(c,n),"data-index":n,tabIndex:"-1",className:(0,Kl.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Fx=function(e){Rx(n,e);var t=zx(n);function n(){var r;jx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),vu(mu(r),"node",null),vu(mu(r),"handleRef",function(a){r.node=a}),r}return Mx(n,[{key:"render",value:function(){var i=Ix(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return nn.default.createElement("div",pu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(nn.default.PureComponent);cl.Track=Fx;var dl={};function gu(e){return gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gu(e)}Object.defineProperty(dl,"__esModule",{value:!0});dl.Dots=void 0;var xo=Im(K.exports),Hx=Im(Qi.exports),Ef=G;function Im(e){return e&&e.__esModule?e:{default:e}}function kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ux(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(n),!0).forEach(function(r){Wx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qx(e,t,n){return t&&bf(e.prototype,t),n&&bf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yu(e,t)}function yu(e,t){return yu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yu(e,t)}function Qx(e){var t=Xx();return function(){var r=ga(e),i;if(t){var o=ga(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Gx(this,i)}}function Gx(e,t){if(t&&(gu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Yx(e)}function Yx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ga(e)}var Kx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Jx=function(e){Vx(n,e);var t=Qx(n);function n(){return Bx(this,n),t.apply(this,arguments)}return qx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,h=Kx({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],E=0;E<h;E++){var v=(E+1)*u-1,p=s?v:(0,Ef.clamp)(v,0,c-1),g=p-(u-1),x=s?g:(0,Ef.clamp)(g,0,c-1),C=(0,Hx.default)({"slick-active":s?f>=x&&f<=p:f===x}),O={message:"dots",index:E,slidesToScroll:u,currentSlide:f},b=this.clickHandler.bind(this,O);y=y.concat(xo.default.createElement("li",{key:E,className:C},xo.default.cloneElement(this.props.customPaging(E),{onClick:b})))}return xo.default.cloneElement(this.props.appendDots(y),Ux({className:this.props.dotsClass},m))}}]),n}(xo.default.PureComponent);dl.Dots=Jx;var Pr={};function wu(e){return wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wu(e)}Object.defineProperty(Pr,"__esModule",{value:!0});Pr.PrevArrow=Pr.NextArrow=void 0;var yr=Hm(K.exports),Fm=Hm(Qi.exports),Zx=G;function Hm(e){return e&&e.__esModule?e:{default:e}}function ya(){return ya=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function _f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_f(Object(n),!0).forEach(function(r){eS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Um(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wm(e,t,n){return t&&Cf(e.prototype,t),n&&Cf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xu(e,t)}function xu(e,t){return xu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xu(e,t)}function qm(e){var t=rS();return function(){var r=xa(e),i;if(t){var o=xa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return tS(this,i)}}function tS(e,t){if(t&&(wu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nS(e)}function nS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xa(e)}var iS=function(e){Bm(n,e);var t=qm(n);function n(){return Um(this,n),t.apply(this,arguments)}return Wm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Fm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=yr.default.cloneElement(this.props.prevArrow,wa(wa({},l),a)):s=yr.default.createElement("button",ya({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(yr.default.PureComponent);Pr.PrevArrow=iS;var oS=function(e){Bm(n,e);var t=qm(n);function n(){return Um(this,n),t.apply(this,arguments)}return Wm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Zx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Fm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=yr.default.cloneElement(this.props.nextArrow,wa(wa({},l),a)):s=yr.default.createElement("button",ya({key:"1",type:"button"},l)," ","Next"),s}}]),n}(yr.default.PureComponent);Pr.NextArrow=oS;var Vm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Su=typeof window<"u"&&typeof document<"u"&&window.document===document,Sa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),aS=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Sa):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),lS=2;function sS(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){aS(o)}function a(){var s=Date.now();if(n){if(s-i<lS)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var uS=20,cS=["top","right","bottom","left","width","height","size","weight"],dS=typeof MutationObserver<"u",fS=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=sS(this.refresh.bind(this),uS)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Su||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),dS?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Su||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=cS.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Qm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Tr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Sa},Gm=fl(0,0,0,0);function Ea(e){return parseFloat(e)||0}function Of(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ea(o)},0)}function pS(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Ea(l)}return n}function hS(e){var t=e.getBBox();return fl(0,0,t.width,t.height)}function mS(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Gm;var r=Tr(e).getComputedStyle(e),i=pS(r),o=i.left+i.right,l=i.top+i.bottom,a=Ea(r.width),s=Ea(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Of(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Of(r,"top","bottom")+l)),!gS(e)){var u=Math.round(a+o)-t,d=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(s-=d)}return fl(i.left,i.top,a,s)}var vS=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Tr(e).SVGGraphicsElement}:function(e){return e instanceof Tr(e).SVGElement&&typeof e.getBBox=="function"}}();function gS(e){return e===Tr(e).document.documentElement}function yS(e){return Su?vS(e)?hS(e):mS(e):Gm}function wS(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Qm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function fl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var xS=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=fl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=yS(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),SS=function(){function e(t,n){var r=wS(n);Qm(this,{target:t,contentRect:r})}return e}(),ES=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Vm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Tr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new xS(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Tr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new SS(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ym=typeof WeakMap<"u"?new WeakMap:new Vm,Xm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=fS.getInstance(),r=new ES(t,n,this);Ym.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Xm.prototype[e]=function(){var t;return(t=Ym.get(this))[e].apply(t,arguments)}});var kS=function(){return typeof Sa.ResizeObserver<"u"?Sa.ResizeObserver:Xm}();const bS=Object.freeze(Object.defineProperty({__proto__:null,default:kS},Symbol.toStringTag,{value:"Module"})),_S=Jf(bS);Object.defineProperty(sl,"__esModule",{value:!0});sl.InnerSlider=void 0;var Ge=Gi(K.exports),CS=Gi(Pm),OS=Gi(yx),PS=Gi(Qi.exports),Se=G,TS=cl,LS=dl,Pf=Pr,$S=Gi(_S);function Gi(e){return e&&e.__esModule?e:{default:e}}function ka(e){return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ka(e)}function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function jS(e,t){if(e==null)return{};var n=MS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function MS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zS(e,t,n){return t&&Lf(e.prototype,t),n&&Lf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function DS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Eu(e,t)}function Eu(e,t){return Eu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Eu(e,t)}function AS(e){var t=IS();return function(){var r=_a(e),i;if(t){var o=_a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return NS(this,i)}}function NS(e,t){if(t&&(ka(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _a(e){return _a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_a(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var FS=function(e){DS(n,e);var t=AS(n);function n(r){var i;RS(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new $S.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Ge.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ge.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,OS.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var d=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:d});var c=(0,Se.getTrackCSS)(l);(a||Ge.default.Children.count(i.props.children)!==Ge.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(b){s.push(b.props.style.width),l+=b.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var f=0;f<d;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var E=Ge.default.Children.count(i.props.children),v=Z(Z(Z({},i.props),i.state),{},{slideCount:E}),p=(0,Se.getPreClones)(v)+(0,Se.getPostClones)(v)+E,g=100/i.props.slidesToShow*p,x=100/p,C=-x*((0,Se.getPreClones)(v)+i.state.currentSlide)*g/100;i.props.centerMode&&(C+=(100-x*g/100)/2);var O={width:g+"%",left:C+"%"};return{slideWidth:x+"%",trackStyle:O}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var d=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,d=s.beforeChange,c=s.onLazyLoad,f=s.speed,h=s.afterChange,m=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=y.state,v=y.nextState;if(!!E){d&&d(m,E.currentSlide);var p=E.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(m),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),v&&(i.animationEndCallback=setTimeout(function(){var g=v.animating,x=jS(v,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),h&&h(E.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,PS.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=Z(Z({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ge.default.createElement(LS.Dots,c)}var h,m,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Ge.default.createElement(Pf.PrevArrow,y),m=Ge.default.createElement(Pf.NextArrow,y));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},E),v),g=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},C={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},C={className:l}),Ge.default.createElement("div",C,i.props.unslick?"":h,Ge.default.createElement("div",ba({ref:i.listRefHandler},x),Ge.default.createElement(TS.Track,ba({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},CS.default),{},{currentSlide:i.props.initialSlide,slideCount:Ge.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return zS(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(ka(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ge.default.Children.count(this.props.children)!==Ge.default.Children.count(i.children)}}]),n}(Ge.default.Component);sl.InnerSlider=FS;var HS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},US=HS,WS=US,BS=function(e){var t=/[height|width]$/;return t.test(e)},$f=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=WS(r),BS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},qS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=$f(n),r<e.length-1&&(t+=", ")}),t):$f(e)},VS=qS,Km={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Km);var ts,jf;function QS(){if(jf)return ts;jf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ts=e,ts}var ns,Mf;function Jm(){if(Mf)return ns;Mf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return ns={isFunction:n,isArray:t,each:e},ns}var rs,Rf;function GS(){if(Rf)return rs;Rf=1;var e=QS(),t=Jm().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},rs=n,rs}var is,zf;function YS(){if(zf)return is;zf=1;var e=GS(),t=Jm(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,d=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},is=o,is}var os,Df;function XS(){if(Df)return os;Df=1;var e=YS();return os=new e,os}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function($){return typeof $}:function($){return $&&typeof Symbol=="function"&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=sl,i=a(VS),o=a(Km),l=G;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var $=1;$<arguments.length;$++){var M=arguments[$];for(var z in M)Object.prototype.hasOwnProperty.call(M,z)&&(S[z]=M[z])}return S},s.apply(this,arguments)}function u(S,$){var M=Object.keys(S);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(S);$&&(z=z.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),M.push.apply(M,z)}return M}function d(S){for(var $=1;$<arguments.length;$++){var M=arguments[$]!=null?arguments[$]:{};$%2?u(Object(M),!0).forEach(function(z){C(S,z,M[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(M)):u(Object(M)).forEach(function(z){Object.defineProperty(S,z,Object.getOwnPropertyDescriptor(M,z))})}return S}function c(S,$){if(!(S instanceof $))throw new TypeError("Cannot call a class as a function")}function f(S,$){for(var M=0;M<$.length;M++){var z=$[M];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(S,z.key,z)}}function h(S,$,M){return $&&f(S.prototype,$),M&&f(S,M),Object.defineProperty(S,"prototype",{writable:!1}),S}function m(S,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create($&&$.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),$&&y(S,$)}function y(S,$){return y=Object.setPrototypeOf||function(z,A){return z.__proto__=A,z},y(S,$)}function E(S){var $=g();return function(){var z=x(S),A;if($){var D=x(this).constructor;A=Reflect.construct(z,arguments,D)}else A=z.apply(this,arguments);return v(this,A)}}function v(S,$){if($&&(t($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},x(S)}function C(S,$,M){return $ in S?Object.defineProperty(S,$,{value:M,enumerable:!0,configurable:!0,writable:!0}):S[$]=M,S}var O=(0,l.canUseDOM)()&&XS(),b=function(S){m(M,S);var $=E(M);function M(z){var A;return c(this,M),A=$.call(this,z),C(p(A),"innerSliderRefHandler",function(D){return A.innerSlider=D}),C(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),C(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),C(p(A),"slickGoTo",function(D){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(D,N)}),C(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),C(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(M,[{key:"media",value:function(A,D){O.register(A,D),this._responsiveMediaHandlers.push({query:A,handler:D})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var D=this.props.responsive.map(function(I){return I.breakpoint});D.sort(function(I,Q){return I-Q}),D.forEach(function(I,Q){var j;Q===0?j=(0,i.default)({minWidth:0,maxWidth:I}):j=(0,i.default)({minWidth:D[Q-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media(j,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:D.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){O.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,D,N;this.state.breakpoint?(N=this.props.responsive.filter(function(V){return V.breakpoint===A.state.breakpoint}),D=N[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),N[0].settings)):D=d(d({},o.default),this.props),D.centerMode&&(D.slidesToScroll>1,D.slidesToScroll=1),D.fade&&(D.slidesToShow>1,D.slidesToScroll>1,D.slidesToShow=1,D.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(V){return typeof V=="string"?!!V.trim():!!V}),D.variableWidth&&(D.rows>1||D.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),D.variableWidth=!1);for(var Q=[],j=null,P=0;P<I.length;P+=D.rows*D.slidesPerRow){for(var R=[],U=P;U<P+D.rows*D.slidesPerRow;U+=D.slidesPerRow){for(var q=[],H=U;H<U+D.slidesPerRow&&(D.variableWidth&&I[H].props.style&&(j=I[H].props.style.width),!(H>=I.length));H+=1)q.push(n.default.cloneElement(I[H],{key:100*P+10*U+H,tabIndex:-1,style:{width:"".concat(100/D.slidesPerRow,"%"),display:"inline-block"}}));R.push(n.default.createElement("div",{key:10*P+U},q))}D.variableWidth?Q.push(n.default.createElement("div",{key:P,style:{width:j}},R)):Q.push(n.default.createElement("div",{key:P},R))}if(D==="unslick"){var _="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:_},I)}else Q.length<=D.slidesToShow&&(D.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},D),Q)}}]),M}(n.default.Component);e.default=b})(Om);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Om);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Cm);const Fc=La(Cm);const KS=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,JS=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${k.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,ZS=L.img`
    height: 40vh;
    border-radius: 20px;
`,eE=L.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${k.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,tE=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(eE,{containerWidth:e.width,children:w(Fc,{...t,children:e.carouselData.map((n,r)=>w(KS,{children:w(JS,{children:w(ZS,{src:n,alt:e.alt})})},r))})})},nE=L.div`
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

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,rE=L.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${k.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${k.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,iE=L.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${k.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,oE=L.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%; 
`,aE=L.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 6%;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 20px;
        padding-left: 1%;
    }

    @media screen and (min-width: ${k.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 50px;
    }
`,lE=L.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${k.notebook}) {
        width: 90%;
    }
`,sE=({title:e,color:t})=>Y(oE,{children:[w(nE,{titleColor:t,children:e}),w(rE,{children:Y(iE,{children:[w(lE,{children:w(aE,{children:Te.membersText})}),w(tE,{width:"50%",carouselData:Te.members,alt:"Imagens dos membros da Serra Jr. Engenharia"})]})})]}),uE=L.div``,cE=L.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }
`,Af=L.div`
    border: 1px solid #001830;
    height: 80vh;

    @media screen and (max-width: 500px) {
        transform: rotate(90deg);
        margin: 0px;
        height: 10vh;
        
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        height: 50vh;
    }
`,dE=()=>Y(uE,{children:[Y(cE,{children:[w(Yl,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),w(Af,{}),w(Yl,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),w(Af,{}),w(Yl,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]}),w(sE,{title:"Quem Somos",color:"#001830"})]}),fE=L.div`
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
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,pE=L.div`
   

`,hE=L.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-weight: 500;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${k.tablet}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 120px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 180px;
    }    
`,mE=L.img`
    @media screen and (max-width: ${k.largeMobile}) {
        width: 60%;
        margin-top: 10%;
    }

    @media screen and (min-width: ${k.largeMobile}) {
        width: 40%;
        margin-top: 5%;
    }
    @media screen and (min-width: ${k.notebook}) {
        width: 25%;
        margin-top: 0;
    }
`,vE=()=>Y(Hn,{children:[w(pE,{children:Y(fE,{children:[w(hE,{children:"Sobre N\xF3s"}),w(mE,{src:Ww,alt:"imagem sobre n\xF3s"})]})}),w(dE,{})]}),gE=L.div`
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
`;L.div`
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
`;L.div`
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
`;const yE=L.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;


    @media screen and (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        border-radius: 20px;
    }
`;L.p`
    width: 80%;

    @media screen and (max-width: 700px) {
        margin-top: 10%;
        width: 100%;
    }
`;L.h2`
    color: #001b40;
    font-size: 26px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 20px;
    }
`;const wE=L.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var So=[];function xE(e){var t=K.exports.useState(),n=t[0],r=t[1];return K.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=So.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),So.push(a),function(){a.removeEventListener("load",l),a.remove(),So.splice(So.findIndex(function(s){return s.src===i}),1)}},[e]),n}function SE(e,t){var n=xE(e),r=K.exports.useRef(null),i=K.exports.useState(),o=i[0],l=i[1];return K.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const EE=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=SE("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(gE,{children:w(yE,{children:w(wE,{ref:n})})})},Ai={_origin:"https://api.emailjs.com"},kE=(e,t="https://api.emailjs.com")=>{Ai._userID=e,Ai._origin=t},Zm=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Nf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const ev=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Nf(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Nf(l))}),o.open("POST",Ai._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),bE=(e,t,n,r)=>{const i=r||Ai._userID;Zm(i,e,t);const o={lib_version:"3.9.1",user_id:i,service_id:e,template_id:t,template_params:n};return ev("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},_E=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},CE=(e,t,n,r)=>{const i=r||Ai._userID,o=_E(n);Zm(i,e,t);const l=new FormData(o);return l.append("lib_version","3.9.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),ev("/api/v1.0/email/send-form",l)},OE={init:kE,send:bE,sendForm:CE};var qe={exports:{}},PE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TE=PE,LE=TE;function tv(){}function nv(){}nv.resetWarningCache=tv;var $E=function(){function e(r,i,o,l,a,s){if(s!==LE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nv,resetWarningCache:tv};return n.PropTypes=n,n};qe.exports=$E();function jE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Eo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ME(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var pl=function(e){ME(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(Eo(r)),r.handleErrored=r.handleErrored.bind(Eo(r)),r.handleChange=r.handleChange.bind(Eo(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(Eo(r)),r}var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var i=this.props.grecaptcha;if(i&&this._widgetId!==void 0)return i.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var i=this;return new Promise(function(o,l){i.executionResolve=o,i.executionReject=l,i.execute()})},n.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=this.props.grecaptcha.render(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var i=document.createElement("div");for(document.body.appendChild(i),i.style.display="none";this.captcha.firstChild;)i.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(i)},5e3)},n.handleRecaptchaRef=function(i){this.captcha=i},n.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl;var o=jE(i,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return w("div",{...o,ref:this.handleRecaptchaRef})},t}(jr.Component);pl.displayName="ReCAPTCHA";pl.propTypes={sitekey:qe.exports.string.isRequired,onChange:qe.exports.func,grecaptcha:qe.exports.object,theme:qe.exports.oneOf(["dark","light"]),type:qe.exports.oneOf(["image","audio"]),tabindex:qe.exports.number,onExpired:qe.exports.func,onErrored:qe.exports.func,size:qe.exports.oneOf(["compact","normal","invisible"]),stoken:qe.exports.string,hl:qe.exports.string,badge:qe.exports.oneOf(["bottomright","bottomleft","inline"])};pl.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function ku(){return ku=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ku.apply(this,arguments)}function RE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var St={},DE=0;function AE(e,t){return t=t||{},function(r){var i=r.displayName||r.name||"Component",o=function(a){zE(s,a);function s(d,c){var f;return f=a.call(this,d,c)||this,f.state={},f.__scriptURL="",f}var u=s.prototype;return u.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+DE++),this.__scriptLoaderID},u.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},u.asyncScriptLoaderHandleLoad=function(c){var f=this;this.setState(c,function(){return f.props.asyncScriptOnLoad&&f.props.asyncScriptOnLoad(f.state)})},u.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=St[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var f in c.observers)c.observers[f](c);delete window[t.callbackName]},u.componentDidMount=function(){var c=this,f=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),m=t,y=m.globalName,E=m.callbackName,v=m.scriptId;if(y&&typeof window[y]<"u"&&(St[f]={loaded:!0,observers:{}}),St[f]){var p=St[f];if(p&&(p.loaded||p.errored)){this.asyncScriptLoaderHandleLoad(p);return}p.observers[h]=function(b){return c.asyncScriptLoaderHandleLoad(b)};return}var g={};g[h]=function(b){return c.asyncScriptLoaderHandleLoad(b)},St[f]={loaded:!1,observers:g};var x=document.createElement("script");x.src=f,x.async=!0;for(var C in t.attributes)x.setAttribute(C,t.attributes[C]);v&&(x.id=v);var O=function(S){if(St[f]){var $=St[f],M=$.observers;for(var z in M)S(M[z])&&delete M[z]}};E&&typeof window<"u"&&(window[E]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),x.onload=function(){var b=St[f];b&&(b.loaded=!0,O(function(S){return E?!1:(S(b),!0)}))},x.onerror=function(){var b=St[f];b&&(b.errored=!0,O(function(S){return S(b),!0}))},document.body.appendChild(x)},u.componentWillUnmount=function(){var c=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),h=0;h<f.length;h+=1)f[h].src.indexOf(c)>-1&&f[h].parentNode&&f[h].parentNode.removeChild(f[h]);var m=St[c];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete St[c])},u.render=function(){var c=t.globalName,f=this.props;f.asyncScriptOnLoad;var h=f.forwardedRef,m=RE(f,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(m[c]=typeof window[c]<"u"?window[c]:void 0),m.ref=h,K.exports.createElement(r,m)},s}(K.exports.Component),l=K.exports.forwardRef(function(a,s){return K.exports.createElement(o,ku({},a,{forwardedRef:s}))});return l.displayName="AsyncScriptLoader("+i+")",l.propTypes={asyncScriptOnLoad:qe.exports.func},mm(l,r)}}var rv="onloadcallback",NE="grecaptcha";function IE(){return typeof window<"u"&&window.recaptchaOptions||{}}function FE(){var e=IE(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+rv+"&render=explicit"}const HE=AE(FE,{callbackName:rv,globalName:NE})(pl),UE="/Site-Serra/assets/agenda.6fff4078.svg",WE="/Site-Serra/assets/email.946bdff8.svg",BE="/Site-Serra/assets/localizacao.69982f44.svg",qE="/Site-Serra/assets/telefone.9ca94e72.svg",ko=L.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 17px;
    }

    @media screen and (min-width: ${k.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-weight: 300;
        font-size: 35px;
    }
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 50px;
    }

`,bo=L.img`
    @media screen and (max-width: ${k.tablet}) {
        width: 2em;
        height: 2em;
    }

    @media screen and (min-width: ${k.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 8em;
        height: 8em;
    }
   
`,VE=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${k.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${k.mobile}) {
        margin-top: 20%;
    }


    
`,QE=L.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,GE=L.div`
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
`,YE=L.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${k.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${k.largeMobile}) {
        width: 90%;
    } 

`,_o=L.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${k.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${k.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${k.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,XE=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${k.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${k.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 80%;
    }
    
`,KE=L.div`
    margin-left: 10%;
    width: 100%;
`,Jr=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3rem;
        line-height: 25px;
    }

`,Co=L.input`
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

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`,JE=L.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`,ZE=L.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,ek=L.input`
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

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`,tk=L.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${k.notebook}) {
        width: 100%;
    }

    
`,nk=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,rk=L.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`,ik=()=>{const[e,t]=K.exports.useState(""),[n,r]=K.exports.useState(""),[i,o]=K.exports.useState(""),[l,a]=K.exports.useState(""),[s,u]=K.exports.useState(""),[d,c]=K.exports.useState(""),f=m=>{c(m)},h=m=>{if(m.preventDefault(),e===""||n===""||i===""||l===""||s===""||d===""){alert("Preencha todos os campos");return}const y={from_name:e,message:s,from_email:n,from_phone:i,subject:l,"g-recaptcha-response":d};OE.send("service_al540kd","template_4eqf2kl",y,"HRfoO7P69RR47ZQ0c").then(E=>{alert("Email enviado"),t(""),r(""),o(""),a(""),u("")},E=>{alert("Aconteceu um erro"),console.log("Erro: ",E)})};return Y(nk,{children:[w(jc,{titleWidth:"40%",text:"Entre em contato conosco!"}),Y(YE,{children:[Y(VE,{children:[Y(_o,{children:[w(bo,{src:BE,alt:""}),w(ko,{children:"Rua Bonfim n\xB025 - Vila Amelia, Nova Friburgo - RJ, 28625-570"})]}),Y(_o,{children:[w(bo,{src:qE,alt:""}),w(ko,{children:"(22) 2533-2265"})]}),Y(_o,{children:[w(bo,{src:WE,alt:""}),w(ko,{children:"serrajr@iprj.uerj.br"})]}),Y(_o,{children:[w(bo,{src:UE,alt:""}),Y(ko,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(tk,{children:w(XE,{children:Y(KE,{children:[w(Jr,{children:"Nome"}),w(Co,{type:"text",placeholder:"Insira seu nome",value:e,onChange:m=>t(m.target.value)}),w(Jr,{children:"Email"}),w(Co,{type:"text",placeholder:"Insira seu email",value:n,onChange:m=>r(m.target.value)}),w(Jr,{children:"Telefone"}),w(Co,{type:"text",placeholder:"(XX) XXXXX-XXXX",value:i,onChange:m=>o(m.target.value)}),w(Jr,{children:"Assunto"}),w(Co,{type:"text",placeholder:"Digite o assunto",value:l,onChange:m=>a(m.target.value)}),w(Jr,{children:"Mensagem"}),w(ek,{type:"text",placeholder:"Digite a mensagem",value:s,onChange:m=>u(m.target.value)}),w(rk,{children:w(HE,{sitekey:"6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq",onChange:f})}),w(ZE,{children:w(JE,{onClick:m=>h(m),children:"Enviar"})})]})})})]}),w(GE,{children:w(QE,{children:w(EE,{})})})]})};var bu={exports:{}},Wn={},_u={exports:{}},$t={},Ca={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function l(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),m=h.getPropertyValue("display");return f?m!==r&&o(c,h):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,h=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(c,f){var h=c.nodeName.toLowerCase(),m=i.test(h)&&!c.disabled||h==="a"&&c.href||f;return m&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(c,!h)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,m){return h.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return f.filter(u)}e.exports=t.default})(Ca,Ca.exports);Object.defineProperty($t,"__esModule",{value:!0});$t.resetState=sk;$t.log=uk;$t.handleBlur=Ni;$t.handleFocus=Ii;$t.markForFocusLater=ck;$t.returnFocus=dk;$t.popWithoutFocus=fk;$t.setupScopedFocus=pk;$t.teardownScopedFocus=hk;var ok=Ca.exports,ak=lk(ok);function lk(e){return e&&e.__esModule?e:{default:e}}var Lr=[],cr=null,Cu=!1;function sk(){Lr=[]}function uk(){}function Ni(){Cu=!0}function Ii(){if(Cu){if(Cu=!1,!cr)return;setTimeout(function(){if(!cr.contains(document.activeElement)){var e=(0,ak.default)(cr)[0]||cr;e.focus()}},0)}}function ck(){Lr.push(document.activeElement)}function dk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Lr.length!==0&&(t=Lr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function fk(){Lr.length>0&&Lr.pop()}function pk(e){cr=e,window.addEventListener?(window.addEventListener("blur",Ni,!1),document.addEventListener("focus",Ii,!0)):(window.attachEvent("onBlur",Ni),document.attachEvent("onFocus",Ii))}function hk(){cr=null,window.addEventListener?(window.removeEventListener("blur",Ni),document.removeEventListener("focus",Ii)):(window.detachEvent("onBlur",Ni),document.detachEvent("onFocus",Ii))}var Ou={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ca.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var d=void 0,c=s.shiftKey,f=u[0],h=u[u.length-1],m=o();if(a===m){if(!c)return;d=h}if(h===m&&!c&&(d=f),f===m&&c&&(d=h),d){s.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),E=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!E){var v=u.indexOf(m);if(v>-1&&(v+=c?-1:1),d=u[v],typeof d>"u"){s.preventDefault(),d=c?h:f,d.focus();return}s.preventDefault(),d.focus()}}e.exports=t.default})(Ou,Ou.exports);var jt={},mk=function(){},vk=mk,Tt={},iv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(iv);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canUseDOM=Tt.SafeNodeList=Tt.SafeHTMLCollection=void 0;var gk=iv.exports,yk=wk(gk);function wk(e){return e&&e.__esModule?e:{default:e}}var hl=yk.default,xk=hl.canUseDOM?window.HTMLElement:{};Tt.SafeHTMLCollection=hl.canUseDOM?window.HTMLCollection:{};Tt.SafeNodeList=hl.canUseDOM?window.NodeList:{};Tt.canUseDOM=hl.canUseDOM;Tt.default=xk;Object.defineProperty(jt,"__esModule",{value:!0});jt.resetState=_k;jt.log=Ck;jt.assertNodeList=ov;jt.setElement=Ok;jt.validateElement=Hc;jt.hide=Pk;jt.show=Tk;jt.documentNotReadyOrSSRTesting=Lk;var Sk=vk,Ek=bk(Sk),kk=Tt;function bk(e){return e&&e.__esModule?e:{default:e}}var pt=null;function _k(){pt&&(pt.removeAttribute?pt.removeAttribute("aria-hidden"):pt.length!=null?pt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(pt).forEach(function(e){return e.removeAttribute("aria-hidden")})),pt=null}function Ck(){}function ov(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Ok(e){var t=e;if(typeof t=="string"&&kk.canUseDOM){var n=document.querySelectorAll(t);ov(n,t),t=n}return pt=t||pt,pt}function Hc(e){var t=e||pt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Ek.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Pk(e){var t=!0,n=!1,r=void 0;try{for(var i=Hc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Tk(e){var t=!0,n=!1,r=void 0;try{for(var i=Hc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Lk(){pt=null}var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.resetState=$k;zr.log=jk;var mi={},vi={};function If(e,t){e.classList.remove(t)}function $k(){var e=document.getElementsByTagName("html")[0];for(var t in mi)If(e,mi[t]);var n=document.body;for(var r in vi)If(n,vi[r]);mi={},vi={}}function jk(){}var Mk=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Rk=function(t,n){return t[n]&&(t[n]-=1),n},zk=function(t,n,r){r.forEach(function(i){Mk(n,i),t.add(i)})},Dk=function(t,n,r){r.forEach(function(i){Rk(n,i),n[i]===0&&t.remove(i)})};zr.add=function(t,n){return zk(t.classList,t.nodeName.toLowerCase()=="html"?mi:vi,n.split(" "))};zr.remove=function(t,n){return Dk(t.classList,t.nodeName.toLowerCase()=="html"?mi:vi,n.split(" "))};var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.log=Nk;Dr.resetState=Ik;function Ak(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var av=function e(){var t=this;Ak(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Oa=new av;function Nk(){console.log("portalOpenInstances ----------"),console.log(Oa.openInstances.length),Oa.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Ik(){Oa=new av}Dr.default=Oa;var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.resetState=Wk;Uc.log=Bk;var Fk=Dr,Hk=Uk(Fk);function Uk(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,kt=void 0,zn=[];function Wk(){for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=kt=null,zn=[]}function Bk(){console.log("bodyTrap ----------"),console.log(zn.length);for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ff(){zn.length!==0&&zn[zn.length-1].focusContent()}function qk(e,t){!Be&&!kt&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Ff),kt=Be.cloneNode(),kt.addEventListener("focus",Ff)),zn=t,zn.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==kt&&document.body.appendChild(kt)):(Be.parentElement&&Be.parentElement.removeChild(Be),kt.parentElement&&kt.parentElement.removeChild(kt))}Hk.default.subscribe(qk);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var Q=arguments[I];for(var j in Q)Object.prototype.hasOwnProperty.call(Q,j)&&(N[j]=Q[j])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,Q){for(var j=0;j<Q.length;j++){var P=Q[j];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(I,P.key,P)}}return function(I,Q,j){return Q&&N(I.prototype,Q),j&&N(I,j),I}}(),o=K.exports,l=qe.exports,a=C(l),s=$t,u=x(s),d=Ou.exports,c=C(d),f=jt,h=x(f),m=zr,y=x(m),E=Tt,v=C(E),p=Dr,g=C(p);function x(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var Q in N)Object.prototype.hasOwnProperty.call(N,Q)&&(I[Q]=N[Q]);return I.default=N,I}function C(N){return N&&N.__esModule?N:{default:N}}function O(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function b(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function S(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var $={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},M=function(I){return I.code==="Tab"||I.keyCode===9},z=function(I){return I.code==="Escape"||I.keyCode===27},A=0,D=function(N){S(I,N);function I(Q){O(this,I);var j=b(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,Q));return j.setOverlayRef=function(P){j.overlay=P,j.props.overlayRef&&j.props.overlayRef(P)},j.setContentRef=function(P){j.content=P,j.props.contentRef&&j.props.contentRef(P)},j.afterClose=function(){var P=j.props,R=P.appElement,U=P.ariaHideApp,q=P.htmlOpenClassName,H=P.bodyOpenClassName,_=P.parentSelector,V=_&&_().ownerDocument||document;H&&y.remove(V.body,H),q&&y.remove(V.getElementsByTagName("html")[0],q),U&&A>0&&(A-=1,A===0&&h.show(R)),j.props.shouldFocusAfterRender&&(j.props.shouldReturnFocusAfterClose?(u.returnFocus(j.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),j.props.onAfterClose&&j.props.onAfterClose(),g.default.deregister(j)},j.open=function(){j.beforeOpen(),j.state.afterOpen&&j.state.beforeClose?(clearTimeout(j.closeTimer),j.setState({beforeClose:!1})):(j.props.shouldFocusAfterRender&&(u.setupScopedFocus(j.node),u.markForFocusLater()),j.setState({isOpen:!0},function(){j.openAnimationFrame=requestAnimationFrame(function(){j.setState({afterOpen:!0}),j.props.isOpen&&j.props.onAfterOpen&&j.props.onAfterOpen({overlayEl:j.overlay,contentEl:j.content})})}))},j.close=function(){j.props.closeTimeoutMS>0?j.closeWithTimeout():j.closeWithoutTimeout()},j.focusContent=function(){return j.content&&!j.contentHasFocus()&&j.content.focus({preventScroll:!0})},j.closeWithTimeout=function(){var P=Date.now()+j.props.closeTimeoutMS;j.setState({beforeClose:!0,closesAt:P},function(){j.closeTimer=setTimeout(j.closeWithoutTimeout,j.state.closesAt-Date.now())})},j.closeWithoutTimeout=function(){j.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},j.afterClose)},j.handleKeyDown=function(P){M(P)&&(0,c.default)(j.content,P),j.props.shouldCloseOnEsc&&z(P)&&(P.stopPropagation(),j.requestClose(P))},j.handleOverlayOnClick=function(P){j.shouldClose===null&&(j.shouldClose=!0),j.shouldClose&&j.props.shouldCloseOnOverlayClick&&(j.ownerHandlesClose()?j.requestClose(P):j.focusContent()),j.shouldClose=null},j.handleContentOnMouseUp=function(){j.shouldClose=!1},j.handleOverlayOnMouseDown=function(P){!j.props.shouldCloseOnOverlayClick&&P.target==j.overlay&&P.preventDefault()},j.handleContentOnClick=function(){j.shouldClose=!1},j.handleContentOnMouseDown=function(){j.shouldClose=!1},j.requestClose=function(P){return j.ownerHandlesClose()&&j.props.onRequestClose(P)},j.ownerHandlesClose=function(){return j.props.onRequestClose},j.shouldBeClosed=function(){return!j.state.isOpen&&!j.state.beforeClose},j.contentHasFocus=function(){return document.activeElement===j.content||j.content.contains(document.activeElement)},j.buildClassName=function(P,R){var U=(typeof R>"u"?"undefined":r(R))==="object"?R:{base:$[P],afterOpen:$[P]+"--after-open",beforeClose:$[P]+"--before-close"},q=U.base;return j.state.afterOpen&&(q=q+" "+U.afterOpen),j.state.beforeClose&&(q=q+" "+U.beforeClose),typeof R=="string"&&R?q+" "+R:q},j.attributesFromObject=function(P,R){return Object.keys(R).reduce(function(U,q){return U[P+"-"+q]=R[q],U},{})},j.state={afterOpen:!1,beforeClose:!1},j.shouldClose=null,j.moveFromContentToOverlay=null,j}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(j,P){this.props.isOpen&&!j.isOpen?this.open():!this.props.isOpen&&j.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!P.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var j=this.props,P=j.appElement,R=j.ariaHideApp,U=j.htmlOpenClassName,q=j.bodyOpenClassName,H=j.parentSelector,_=H&&H().ownerDocument||document;q&&y.add(_.body,q),U&&y.add(_.getElementsByTagName("html")[0],U),R&&(A+=1,h.hide(P)),g.default.register(this)}},{key:"render",value:function(){var j=this.props,P=j.id,R=j.className,U=j.overlayClassName,q=j.defaultStyles,H=j.children,_=R?{}:q.content,V=U?{}:q.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},V,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},T=n({id:P,ref:this.setContentRef,style:n({},_,this.props.style.content),className:this.buildClassName("content",R),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(T,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);D.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},D.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(E.SafeHTMLCollection),a.default.instanceOf(E.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=D,e.exports=t.default})(_u,_u.exports);function lv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function sv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function uv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}lv.__suppressDeprecationWarning=!0;sv.__suppressDeprecationWarning=!0;uv.__suppressDeprecationWarning=!0;function Vk(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=lv,t.componentWillReceiveProps=sv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=uv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return e}const Qk=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Vk},Symbol.toStringTag,{value:"Module"})),Gk=Jf(Qk);Object.defineProperty(Wn,"__esModule",{value:!0});Wn.bodyOpenClassName=Wn.portalClassName=void 0;var Hf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),cv=K.exports,Pa=Yi(cv),Xk=ju.exports,Ta=Yi(Xk),Kk=qe.exports,re=Yi(Kk),Jk=_u.exports,Uf=Yi(Jk),Zk=jt,eb=nb(Zk),sn=Tt,Wf=Yi(sn),tb=Gk;function nb(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Yi(e){return e&&e.__esModule?e:{default:e}}function rb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ib(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ob=Wn.portalClassName="ReactModalPortal",ab=Wn.bodyOpenClassName="ReactModal__Body--open",On=sn.canUseDOM&&Ta.default.createPortal!==void 0,qf=function(t){return document.createElement(t)},Vf=function(){return On?Ta.default.createPortal:Ta.default.unstable_renderSubtreeIntoContainer};function Oo(e){return e()}var Xi=function(e){ib(t,e);function t(){var n,r,i,o;rb(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Bf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!On&&Ta.default.unmountComponentAtNode(i.node);var u=Oo(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Vf(),c=d(i,Pa.default.createElement(Uf.default,Hf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(c)},r),Bf(i,o)}return Yk(t,[{key:"componentDidMount",value:function(){if(!!sn.canUseDOM){On||(this.node=qf("div")),this.node.className=this.props.portalClassName;var r=Oo(this.props.parentSelector);r.appendChild(this.node),!On&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Oo(r.parentSelector),o=Oo(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!sn.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!On&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!sn.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!sn.canUseDOM||!On)return null;!this.node&&On&&(this.node=qf("div"));var r=Vf();return r(Pa.default.createElement(Uf.default,Hf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){eb.setElement(r)}}]),t}(cv.Component);Xi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Wf.default),re.default.instanceOf(sn.SafeHTMLCollection),re.default.instanceOf(sn.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Wf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Xi.defaultProps={isOpen:!1,portalClassName:ob,bodyOpenClassName:ab,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Pa.default.createElement("div",t,n)},contentElement:function(t,n){return Pa.default.createElement("div",t,n)}};Xi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,tb.polyfill)(Xi);Wn.default=Xi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Wn,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(bu,bu.exports);const dv=La(bu.exports),lb=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,sb=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${k.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,ub=L.img`
    border-radius: 20px;

    @media screen and (max-width: ${k.largeMobile}) {
        width: 20vh;
    }

    @media screen and (max-width: ${k.tablet}) {
        width: 25vh;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 40vh;
    }
`,cb=L.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${k.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,db=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:2500};return w(cb,{containerWidth:e.width,children:w(Fc,{...t,children:e.carouselData.map((n,r)=>w(lb,{children:w(sb,{children:w(ub,{src:n,alt:e.alt,style:{height:e.imageSize}})})},r))})})},fb=L.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${k.largeDesktop}){
        font-size: 30px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}){
        font-size: 40px;
    }
    /* overflow: 'scroll', */
`,pb=L.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 3;
`,hb=L.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${k.largeMobile}){
        font-size: 12px;
    }
`,as=L.h2`
`,mb=L.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,vb=L.a`
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

    @media screen and (min-width: ${k.largeDesktop}){
        padding: 10px 20px;
    }
`,gb=L.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,yb=L.img`
    width: 300px;

    @media screen and (max-width: ${k.largeMobile}){
        width: 200px;
    }

    @media screen and (min-width: ${k.largeDesktop}){
        width: 500px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}){
        width: 700px;
    }
`,wb=L.button`
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

    @media screen and (max-width: ${k.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    @media screen and (min-width: ${k.largeDesktop}){
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
`,Qf=L.p`

`,xb=L.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,Sb=L.ul`
    
`,Eb=L.li`
    list-style: circle;
`;dv.setAppElement("#root");const kb=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"80vh",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#00000028"}};return n?w(dv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Y(fb,{children:[Y(pb,{children:[Y(hb,{children:[w("h1",{children:n.title}),w(wb,{onClick:()=>t(!1),children:"X"})]}),w(xb,{})]}),w(as,{children:"Resumo do projeto"}),Y(gb,{children:[n.image.length>1?w(db,{carouselData:n.image,alt:`Imagens do ${n.title}`,imageSize:n.imageSize,hasArrows:!0}):w(yb,{src:n.image[0],alt:n.title,style:{height:n.imageSize}}),w(Qf,{children:n.summary})]}),n.members?Y(Hn,{children:[w(as,{children:"Membros envolvidos"}),w(Sb,{children:n.members.map((i,o)=>w(Eb,{children:i},o))})]}):null,n.opinions?Y(Hn,{children:[w(as,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Qf,{children:i},o))]}):null,n.acess?w(mb,{children:w(vb,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},bb=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    
    overflow: hidden;
    background-color: transparent;
`,_b=L.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${k.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,Cb=L.section`
    width: 85%;
    height: 100%;
    padding-bottom: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3%;
  
    background-color: lightgrey;
    border-radius: 3rem;    
`,Ob=L.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;
    

    @media screen and (max-width: ${k.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }

`,Pb=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    
    @media screen and (max-width: ${k.notebook}) {
        width: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,Tb=L.img`
    height: 30vh;
    border-radius: 20px;

    @media screen and (max-width: ${k.tablet}) {    
        height: 15vh;
        border-radius: 20px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {    
        height: 20vh;
        border-radius: 20px;
    }
`,Lb=L.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${k.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
`,$b=L.span`
    width: 90%;
    /* height: 20vh; */
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--blue);

    @media screen and (max-width: ${k.notebook}) {
        width: 85%;
        font-size: 1rem;
        color: var(--blue);
        /* ${({tamanhoDoTexto:e})=>e&&e>350?au`font-size: 0.7rem`:au`font-size: 0.9rem`} */
    }

    @media screen and (min-width: ${k.notebook}) {
        height: 30vh;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 2.0rem;
        height: 15vh;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 3.5rem;
        height: 25vh;
    }

    
`,jb=L.button`
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

    @media screen and (max-width: ${k.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`,Mb=L.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${k.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
`,Rb=L.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,fv=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return w(Rb,{containerWidth:e.width,children:w(Fc,{...t,children:e.carouselData.map((l,a)=>{const s=l.content.length;return w(bb,{children:w(_b,{children:Y(Cb,{children:[w(Ob,{children:w(jc,{text:l.title})}),Y(Pb,{children:[w(Lb,{children:w(Tb,{src:l.image[0],alt:l.title,style:{width:l.imageWidth}})}),Y(Mb,{children:[w($b,{tamanhoDoTexto:s,children:l.content}),w(jb,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(kb,{data:i,status:n,setStatus:r})]})]})]})})},a)})})})},zb=L.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${k.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Db=L.div``,Ab=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${k.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${k.tablet}) {
        font-size: 50px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        font-size: 100px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 140px;
    }
`,Nb=L.img`
    @media screen and (max-width: ${k.largeMobile}) {
        width: 60%;
        margin-top: 10%;
    }

    @media screen and (min-width: ${k.largeMobile}) {
        width: 40%;
        margin-top: 5%;
    }
    @media screen and (min-width: ${k.notebook}) {
        width: 25%;
        margin-top: 0;
    }
`,pv=({image:e,text:t,color:n})=>Y(zb,{style:{backgroundColor:n},children:[w(Db,{children:t?t.split(" ").map((r,i)=>w(Ab,{children:r},i)):null}),w(Nb,{src:e,alt:t})]}),Ib=L.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${k.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${k.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        margin-bottom: 10%;
        width: 50%;
    }

`,Fb=L.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Gf=L.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${k.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${k.tablet}) {
        width: 10%;
    } 
`,Hb=L.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px; 
    width: 300px;

    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
        width: 500px;
    }
`,Ub=L.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,Wb=L.p`
    width: 500px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${k.largeMobile}) {
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

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 60px;
        width: 50%;
        height: 30vh;
        line-height: 70px;
    }

    
`,dr=({icon:e,title:t,text:n,arrow:r})=>Y(Ib,{children:[Y(Fb,{children:[w(Gf,{src:e,alt:t}),w(Hb,{children:t})]}),Y(Ub,{children:[w(Gf,{src:r,alt:"Seta"}),w(Wb,{children:n})]})]}),Bb="/Site-Serra/assets/hammer-icon.c370caae.svg",qb="/Site-Serra/assets/bot-icon.237c34bd.svg",Vb="/Site-Serra/assets/3d-icon.6c010241.svg",Qb="/Site-Serra/assets/drawing-icon.462650d6.svg",Po="/Site-Serra/assets/seta.7067b273.svg",Gb="/Site-Serra/assets/background-mecanica.81e45f94.svg",Yb=L.div`
    background-image: url(${Gb});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,Xb=L.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 100px;
    }
`,Yf=L.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,Kb=()=>Y(Yb,{children:[w(Xb,{children:"Carta de Servi\xE7os"}),Y(Yf,{children:[w(dr,{icon:Bb,arrow:Po,title:"Projeto e Manuten\xE7\xE3o de Equipamentos",text:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."}),w(dr,{icon:Qb,arrow:Po,title:"Desenho T\xE9cnico e Industrial",text:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]}),Y(Yf,{children:[w(dr,{icon:qb,arrow:Po,title:"Projetos de Automa\xE7\xE3o",text:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."}),w(dr,{icon:Vb,arrow:Po,title:"Prototipagem",text:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]}),Jb=L.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
    margin-bottom: 5%;

    @media screen and (max-width: ${k.largeMobile}) {
        margin: 25px 0px;
    }
`,Zb=L.p`
    border: 3px solid ${({color:e})=>e?`${e}`:"#000"};
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
    text-align: center;
    width: 30%;
    

    color: ${({color:e})=>e?`${e}`:"#000"};

    &:hover{
        background-color: ${({color:e})=>e?`${e}`:"#000"};
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${k.largeMobile}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid ${({color:e})=>e?`${e}`:"#000"};
    }
`,hv=({color:e})=>{const t=Ga();return w(Jb,{children:w(Zb,{color:e,onClick:()=>{t("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})})},e_="/Site-Serra/assets/marmitex.857922f9.svg",t_="/Site-Serra/assets/vicente.a48e6481.svg",n_="/Site-Serra/assets/vicente-2.5ac4e174.svg",r_="/Site-Serra/assets/tmf.89cc1825.svg",i_="/Site-Serra/assets/tmf-2.d1a33174.svg",o_="/Site-Serra/assets/tmf-3.8462faa7.svg",a_="/Site-Serra/assets/tmf-4.5ad6176b.svg",l_="/Site-Serra/assets/tmf-5.206341f6.svg",s_="/Site-Serra/assets/soledade.c7442aaa.svg",u_="/Site-Serra/assets/soledade-2.f71490d2.svg",c_="/Site-Serra/assets/chassi.02955239.svg",d_="/Site-Serra/assets/chassi-2.f1b6e78e.svg",f_={mechanicsProjects:[{title:"Projeto Marmitex",image:[e_],imageSize:"30vh",content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",summary:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico."},{title:"Projeto Lar Abrigo Amor a Jesus",imageSize:"30vh",image:["https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG"],content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",summary:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade."},{title:"Projeto S\xE3o Vicente de Paula",imageSize:"30vh",image:[t_,n_],content:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas.",summary:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas. A Serra Jr. Engenharia foi ao local, estudou as instala\xE7\xF5es onde eram realizados os banhos, com a medi\xE7\xE3o em m\xE3os foi desenvolvida uma maca que atendia perfeitamente \xE0 necessidade, ela possui apoios que s\xE3o encaixadas na parede e que auxiliam a levantar e descer os idosos, diminuindo o esfor\xE7o f\xEDsico dos enfermeiros, al\xE9m de possuir um sistema de drenagem de \xE1gua evitando o ac\xFAmulo de \xE1gua. Al\xE9m do desenvolvimento da mec\xE2nica da maca, tamb\xE9m foi feito um estudo de materiais para selecionar o mais adequado para evitar corros\xE3o, baixa resist\xEAncia e durabilidade, alta oxida\xE7\xE3o e, assim, garantindo uma vida \xFAtil bem longa ao equipamento."},{title:"Projeto TMF",image:[r_,i_,o_,a_,l_],imageSize:"30vh",content:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento.",summary:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento. A Serra Jr. Engenharia foi \xE0 f\xE1brica, mediu at\xE9 o menor dos parafusos do maquin\xE1rio, fez a modelagem no software SolidWorks e entregou todos os desenhos do maquin\xE1rio, possibilitando a comercializa\xE7\xE3o do mesmo."},{title:"Projeto Fazenda Soledade",image:[s_,u_],imageSize:"30vh",content:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques.",summary:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques. Acompanhando o sistema automatizado tamb\xE9m foi desenvolvido um software com uma IHM (Interface Homem-M\xE1quina) que permite ao operador ter acesso \xE0 todas as informa\xE7\xF5es do sistema como temperatura, n\xEDvel de tanque e com uma fun\xE7\xE3o de gerar um relat\xF3rio no formato estipulado pela cacha\xE7aria com todas as informa\xE7\xF5es de produ\xE7\xE3o de determinado intervalo de tempo."},{title:"Projeto Chassi de Moto",image:[d_,c_],imageSize:"30vh",content:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas.",summary:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas."}]},mv="/Site-Serra/assets/arrow-up.1b45090f.svg",p_="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",h_=L.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        height: 6px;
    }
`,m_=L.img`
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

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,v_=()=>Y(Hn,{children:[w(pv,{color:Un.Color.lightBlue,image:p_,text:"Engenharia Mec\xE2nica"}),w(Kb,{}),w(h_,{}),w(hv,{color:Un.Color.lightBlue}),w(fv,{carouselData:f_.mechanicsProjects}),w(m_,{onClick:()=>window.scrollTo(0,0),src:mv,alt:"ScrollUp"})]}),g_="/Site-Serra/assets/friburguense.ba8886f5.svg",y_="/Site-Serra/assets/projeto-tmf.f6316197.svg",w_={computingProjects:[{title:"Projeto Friburguense",image:[g_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,summary:"O projeto consistiu no desenvolvimento de um website para comercializa\xE7\xE3o do sistema de S\xF3cio-Torcedor do clube. O site possui um sistema de integra\xE7\xE3o com uma rede de pagamento que permite que seja comercializado diretamente pelo site com diversas formas de pagamento e total seguran\xE7a nas transa\xE7\xF5es, tamb\xE9m possui um banco de dados para cadastro dos novos s\xF3cios que ter\xE3o acesso a um painel onde \xE9 gerada uma carteirinha de s\xF3cio-torcedor, h\xE1 todas as informa\xE7\xF5es do plano, op\xE7\xE3o de upgrade e muito mais. Todo o site seguiu \xE0s riscas as diretrizes da LGPD.",members:["Ramon Ribeiro","Leticia Bussinger","Jo\xE3o Vitor Muniz"]},{title:"Projeto TMF",image:[y_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,summary:"O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a localiza\xE7\xE3o da mesma.",acess:"https://usinagemtmf.com.br/"}]},x_="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",S_="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",Xf="/Site-Serra/assets/seta.13cafa5d.svg",E_="/Site-Serra/assets/css.cda1e897.svg",k_="/Site-Serra/assets/html.8611fdec.svg",b_="/Site-Serra/assets/js.105e0a8d.svg",__="/Site-Serra/assets/react.be81d33e.svg",C_="/Site-Serra/assets/ts.41dfa221.svg",O_="/Site-Serra/assets/styled.0be6fc0f.svg",P_="/Site-Serra/assets/background-computacao.dbcf66d3.svg",T_=L.div`
    background-image: url(${P_});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;
`,L_=L.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${k.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${k.extraLargeDesktop}) {
        font-size: 100px;
    }
`,$_=L.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${k.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,j_=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,Yn=L.img`

    @media screen and (max-width: ${k.tablet}){
        width: 40px;
        height: 40px;
        margin-bottom: 5%;
        margin-right: 2%;
    }
    @media screen and (min-width: ${k.tablet}){
        width: 50px;
        height: 50px;
        margin-bottom: 5%;
        margin-right: 2%;
    }

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 80px;
        height: 80px;
        margin-bottom: 3%;
    }
`,M_=()=>Y(T_,{children:[w(L_,{children:"Carta de Servi\xE7os"}),Y($_,{children:[w(dr,{icon:S_,arrow:Xf,title:"Desenvolvimento de Websites",text:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"}),w(dr,{icon:x_,arrow:Xf,title:"Desenvolvimento de Sistemas Web",text:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]}),Y(j_,{children:[w(Yn,{src:k_,alt:"ImagemHtml"}),w(Yn,{src:E_,alt:"Imagemcss"}),w(Yn,{src:b_,alt:"ImagemJS"}),w(Yn,{src:C_,alt:"ImagemTS"}),w(Yn,{src:__,alt:"ImagemREACT"}),w(Yn,{src:O_,alt:"ImagemStyled"})]})]}),R_="/Site-Serra/assets/presentation-image.3bba7d23.svg",z_=L.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,D_=L.img`
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

    @media screen and (min-width: ${k.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,A_=()=>Y(Hn,{children:[w(pv,{color:Un.Color.orange,image:R_,text:"Engenharia da Computa\xE7\xE3o"}),w(M_,{}),w(z_,{}),w(hv,{color:Un.Color.orange}),w(fv,{carouselData:w_.computingProjects}),w(D_,{onClick:()=>window.scrollTo(0,0),src:mv,alt:"ScrollUp"})]}),Kf=({type:e})=>w(Hn,{children:e==="mech"?w(v_,{}):w(A_,{})});function N_(){return w("div",{className:"App",children:Y(cy,{basename:"/Site-Serra",children:[w(j1,{}),Y(ly,{children:[w(Xn,{path:"/",element:w(Uw,{})}),w(Xn,{path:"/computacao",element:w(Kf,{type:"comp"})}),w(Xn,{path:"/mecanica",element:w(Kf,{type:"mech"})}),w(Xn,{path:"/quemSomos",element:w(vE,{})}),w(Xn,{path:"/contatos",element:w(ik,{})})]}),w(J1,{})]})})}ls.createRoot(document.getElementById("root")).render(w(jr.StrictMode,{children:w(N_,{})}));
