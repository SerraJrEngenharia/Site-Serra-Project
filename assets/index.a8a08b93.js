(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function La(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Jf(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var K={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),yv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),kv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),Hc=Symbol.iterator;function Pv(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zf}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Lr.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zf}var Pu=Ou.prototype=new np;Pu.constructor=Ou;ep(Pu,Lr.prototype);Pu.isPureReactComponent=!0;var Wc=Array.isArray,rp=Object.prototype.hasOwnProperty,Tu={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)rp.call(t,r)&&!ip.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fi,type:e,key:o,ref:l,props:i,_owner:Tu.current}}function Tv(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function Lv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bc=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lv(""+e.key):t.toString(36)}function To(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fi:case yv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vl(l,0):r,Wc(i)?(n="",e!=null&&(n=e.replace(Bc,"$&/")+"/"),To(i,t,n,"",function(u){return u})):i!=null&&(Lu(i)&&(i=Tv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Bc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Wc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+vl(o,a);l+=To(o,t,n,s,i)}else if(s=Pv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+vl(o,a++),l+=To(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Lo={transition:null},$v={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Tu};ue.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Lr;ue.Fragment=wv;ue.Profiler=Sv;ue.PureComponent=Ou;ue.StrictMode=xv;ue.Suspense=_v;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)rp.call(t,s)&&!ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fi,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ev,_context:e},e.Consumer=e};ue.createElement=op;ue.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:bv,render:e}};ue.isValidElement=Lu;ue.lazy=function(e){return{$$typeof:Ov,_payload:{_status:-1,_result:e},_init:Rv}};ue.memo=function(e,t){return{$$typeof:Cv,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ue.useContext=function(e){return Ke.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ue.useId=function(){return Ke.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ue.useRef=function(e){return Ke.current.useRef(e)};ue.useState=function(e){return Ke.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ke.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(K);const Rr=La(K.exports);var ls={},Ru={exports:{}},ct={},ap={exports:{}},lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,j){var H=P.length;P.push(j);e:for(;0<H;){var q=H-1>>>1,U=P[q];if(0<i(U,j))P[q]=j,P[H]=U,H=q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],H=P.pop();if(H!==j){P[0]=H;e:for(var q=0,U=P.length,_=U>>>1;q<_;){var V=2*(q+1)-1,F=P[V],T=V+1,J=P[T];if(0>i(F,H))T<U&&0>i(J,F)?(P[q]=J,P[T]=H,q=T):(P[q]=F,P[V]=H,q=V);else if(T<U&&0>i(J,H))P[q]=J,P[T]=H,q=T;else break e}}return j}function i(P,j){var H=P.sortIndex-j.sortIndex;return H!==0?H:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,h=!1,m=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function S(P){if(y=!1,g(P),!m)if(n(s)!==null)m=!0,Q(C);else{var j=n(u);j!==null&&$(S,j.startTime-P)}}function C(P,j){m=!1,y&&(y=!1,v(E),E=-1),h=!0;var H=f;try{for(g(j),c=n(s);c!==null&&(!(c.expirationTime>j)||P&&!D());){var q=c.callback;if(typeof q=="function"){c.callback=null,f=c.priorityLevel;var U=q(c.expirationTime<=j);j=e.unstable_now(),typeof U=="function"?c.callback=U:c===n(s)&&r(s),g(j)}else r(s);c=n(s)}if(c!==null)var _=!0;else{var V=n(u);V!==null&&$(S,V.startTime-j),_=!1}return _}finally{c=null,f=H,h=!1}}var O=!1,b=null,E=-1,R=5,M=-1;function D(){return!(e.unstable_now()-M<R)}function A(){if(b!==null){var P=e.unstable_now();M=P;var j=!0;try{j=b(!0,P)}finally{j?z():(O=!1,b=null)}}else O=!1}var z;if(typeof p=="function")z=function(){p(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=A,z=function(){I.postMessage(null)}}else z=function(){k(A,0)};function Q(P){b=P,O||(O=!0,z())}function $(P,j){E=k(function(){P(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,Q(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var H=f;f=j;try{return P()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=f;f=P;try{return j()}finally{f=H}},e.unstable_scheduleCallback=function(P,j,H){var q=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?q+H:q):H=q,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=H+U,P={id:d++,callback:j,priorityLevel:P,startTime:H,expirationTime:U,sortIndex:-1},H>q?(P.sortIndex=H,t(u,P),n(s)===null&&P===n(u)&&(y?(v(E),E=-1):y=!0,$(S,H-q))):(P.sortIndex=U,t(s,P),m||h||(m=!0,Q(C))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var j=f;return function(){var H=f;f=j;try{return P.apply(this,arguments)}finally{f=H}}}})(lp);(function(e){e.exports=lp})(ap);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=K.exports,ut=ap.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var up=new Set,vi={};function Wn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(vi[e]=t,e=0;e<t.length;e++)up.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,Mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qc={},Vc={};function jv(e){return ss.call(Vc,e)?!0:ss.call(qc,e)?!1:Mv.test(e)?Vc[e]=!0:(qc[e]=!0,!1)}function Dv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zv(e,t,n,r){if(t===null||typeof t>"u"||Dv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($u,Mu);Ue[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($u,Mu);Ue[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($u,Mu);Ue[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zv(t,n,i,r)&&(n=null),r||i===null?jv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),cp=Symbol.for("react.provider"),dp=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),ds=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),Qc=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,gl;function Zr(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var yl=!1;function wl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function Av(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Xn:return"Portal";case us:return"Profiler";case Du:return"StrictMode";case cs:return"Suspense";case ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dp:return(e.displayName||"Context")+".Consumer";case cp:return(e._context.displayName||"Context")+".Provider";case zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return t=e.displayName||null,t!==null?t:fs(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return fs(e(t))}catch{}}return null}function Nv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=Iv(e))}function hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ps(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mp(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function hs(e,t){mp(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&ms(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ms(e,t,n){(t!=="number"||Ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(ei(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function vp(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){Fv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function wp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,t){if(t){if(Uv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,fr=null,pr=null;function Jc(e){if(e=Wi(e)){if(typeof Ss!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Da(t),Ss(e.stateNode,e.type,t))}}function Sp(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Ep(){if(fr){var e=fr,t=pr;if(pr=fr=null,Jc(e),t)for(e=0;e<t.length;e++)Jc(t[e])}}function kp(e,t){return e(t)}function bp(){}var xl=!1;function _p(e,t,n){if(xl)return e(t,n);xl=!0;try{return kp(e,t,n)}finally{xl=!1,(fr!==null||pr!==null)&&(bp(),Ep())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Da(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var Es=!1;if(Qt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Es=!1}function Hv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ii=!1,Wo=null,Bo=!1,ks=null,Wv={onError:function(e){ii=!0,Wo=e}};function Bv(e,t,n,r,i,o,l,a,s){ii=!1,Wo=null,Hv.apply(Wv,arguments)}function qv(e,t,n,r,i,o,l,a,s){if(Bv.apply(this,arguments),ii){if(ii){var u=Wo;ii=!1,Wo=null}else throw Error(B(198));Bo||(Bo=!0,ks=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(Bn(e)!==e)throw Error(B(188))}function Vv(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zc(i),e;if(o===r)return Zc(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Op(e){return e=Vv(e),e!==null?Pp(e):null}function Pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pp(e);if(t!==null)return t;e=e.sibling}return null}var Tp=ut.unstable_scheduleCallback,ed=ut.unstable_cancelCallback,Qv=ut.unstable_shouldYield,Gv=ut.unstable_requestPaint,Ce=ut.unstable_now,Yv=ut.unstable_getCurrentPriorityLevel,Iu=ut.unstable_ImmediatePriority,Lp=ut.unstable_UserBlockingPriority,qo=ut.unstable_NormalPriority,Xv=ut.unstable_LowPriority,Rp=ut.unstable_IdlePriority,Ra=null,At=null;function Kv(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:eg,Jv=Math.log,Zv=Math.LN2;function eg(e){return e>>>=0,e===0?32:31-(Jv(e)/Zv|0)|0}var no=64,ro=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ti(a):(o&=l,o!==0&&(r=ti(o)))}else l=n&~i,l!==0?r=ti(l):o!==0&&(r=ti(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=tg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=no;return no<<=1,(no&4194240)===0&&(no=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Mp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var jp,Uu,Dp,zp,Ap,_s=!1,io=[],un=null,cn=null,dn=null,wi=new Map,xi=new Map,rn=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function og(e,t,n,r,i){switch(t){case"focusin":return un=Ir(un,e,t,n,r,i),!0;case"dragenter":return cn=Ir(cn,e,t,n,r,i),!0;case"mouseover":return dn=Ir(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wi.set(o,Ir(wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xi.set(o,Ir(xi.get(o)||null,e,t,n,r,i)),!0}return!1}function Np(e){var t=Pn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Cp(n),t!==null){e.blockedOn=t,Ap(e.priority,function(){Dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=Wi(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function nd(e,t,n){Ro(e)&&n.delete(t)}function ag(){_s=!1,un!==null&&Ro(un)&&(un=null),cn!==null&&Ro(cn)&&(cn=null),dn!==null&&Ro(dn)&&(dn=null),wi.forEach(nd),xi.forEach(nd)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,ag)))}function Si(e){function t(i){return Fr(i,e)}if(0<io.length){Fr(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Fr(un,e),cn!==null&&Fr(cn,e),dn!==null&&Fr(dn,e),wi.forEach(t),xi.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&rn.shift()}var hr=Kt.ReactCurrentBatchConfig,Qo=!0;function lg(e,t,n,r){var i=fe,o=hr.transition;hr.transition=null;try{fe=1,Hu(e,t,n,r)}finally{fe=i,hr.transition=o}}function sg(e,t,n,r){var i=fe,o=hr.transition;hr.transition=null;try{fe=4,Hu(e,t,n,r)}finally{fe=i,hr.transition=o}}function Hu(e,t,n,r){if(Qo){var i=Cs(e,t,n,r);if(i===null)Rl(e,t,r,Go,n),td(e,r);else if(og(i,e,t,n,r))r.stopPropagation();else if(td(e,r),t&4&&-1<ig.indexOf(e)){for(;i!==null;){var o=Wi(i);if(o!==null&&jp(o),o=Cs(e,t,n,r),o===null&&Rl(e,t,r,Go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var Go=null;function Cs(e,t,n,r){if(Go=null,e=Nu(r),e=Pn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yv()){case Iu:return 1;case Lp:return 4;case qo:case Xv:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var an=null,Wu=null,$o=null;function Fp(){if($o)return $o;var e,t=Wu,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function rd(){return!1}function dt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oo:rd,this.isPropagationStopped=rd,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=dt($r),Hi=be({},$r,{view:0,detail:0}),ug=dt(Hi),El,kl,Ur,$a=be({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(El=e.screenX-Ur.screenX,kl=e.screenY-Ur.screenY):kl=El=0,Ur=e),El)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),id=dt($a),cg=be({},$a,{dataTransfer:0}),dg=dt(cg),fg=be({},Hi,{relatedTarget:0}),bl=dt(fg),pg=be({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=dt(pg),mg=be({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=dt(mg),gg=be({},$r,{data:0}),od=dt(gg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xg[e])?!!t[e]:!1}function qu(){return Sg}var Eg=be({},Hi,{key:function(e){if(e.key){var t=yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kg=dt(Eg),bg=be({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=dt(bg),_g=be({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),Cg=dt(_g),Og=be({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=dt(Og),Tg=be({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=dt(Tg),Rg=[9,13,27,32],Vu=Qt&&"CompositionEvent"in window,oi=null;Qt&&"documentMode"in document&&(oi=document.documentMode);var $g=Qt&&"TextEvent"in window&&!oi,Up=Qt&&(!Vu||oi&&8<oi&&11>=oi),ld=String.fromCharCode(32),sd=!1;function Hp(e,t){switch(e){case"keyup":return Rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Mg(e,t){switch(e){case"compositionend":return Wp(t);case"keypress":return t.which!==32?null:(sd=!0,ld);case"textInput":return e=t.data,e===ld&&sd?null:e;default:return null}}function jg(e,t){if(Jn)return e==="compositionend"||!Vu&&Hp(e,t)?(e=Fp(),$o=Wu=an=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Up&&t.locale!=="ko"?null:t.data;default:return null}}var Dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dg[e.type]:t==="textarea"}function Bp(e,t,n,r){Sp(r),t=Yo(t,"onChange"),0<t.length&&(n=new Bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ai=null,Ei=null;function zg(e){th(e,0)}function Ma(e){var t=tr(e);if(hp(t))return e}function Ag(e,t){if(e==="change")return t}var qp=!1;if(Qt){var _l;if(Qt){var Cl="oninput"in document;if(!Cl){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Cl=typeof cd.oninput=="function"}_l=Cl}else _l=!1;qp=_l&&(!document.documentMode||9<document.documentMode)}function dd(){ai&&(ai.detachEvent("onpropertychange",Vp),Ei=ai=null)}function Vp(e){if(e.propertyName==="value"&&Ma(Ei)){var t=[];Bp(t,Ei,e,Nu(e)),_p(zg,t)}}function Ng(e,t,n){e==="focusin"?(dd(),ai=t,Ei=n,ai.attachEvent("onpropertychange",Vp)):e==="focusout"&&dd()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Ei)}function Fg(e,t){if(e==="click")return Ma(t)}function Ug(e,t){if(e==="input"||e==="change")return Ma(t)}function Hg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Hg;function ki(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ss.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var n=fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fd(n)}}function Qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gp(){for(var e=window,t=Ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ho(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wg(e){var t=Gp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(r!==null&&Qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pd(n,o);var l=pd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bg=Qt&&"documentMode"in document&&11>=document.documentMode,Zn=null,Os=null,li=null,Ps=!1;function hd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||Zn==null||Zn!==Ho(r)||(r=Zn,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&ki(li,r)||(li=r,r=Yo(Os,"onSelect"),0<r.length&&(t=new Bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Ol={},Yp={};Qt&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ja(e){if(Ol[e])return Ol[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yp)return Ol[e]=t[n];return e}var Xp=ja("animationend"),Kp=ja("animationiteration"),Jp=ja("animationstart"),Zp=ja("transitionend"),eh=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){eh.set(e,t),Wn(t,[e])}for(var Pl=0;Pl<md.length;Pl++){var Tl=md[Pl],qg=Tl.toLowerCase(),Vg=Tl[0].toUpperCase()+Tl.slice(1);Sn(qg,"on"+Vg)}Sn(Xp,"onAnimationEnd");Sn(Kp,"onAnimationIteration");Sn(Jp,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Zp,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function vd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qv(r,t,void 0,e),e.currentTarget=null}function th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;vd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;vd(i,a,u),o=s}}}if(Bo)throw e=ks,Bo=!1,ks=null,e}function ge(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var r=e+"__bubble";n.has(r)||(nh(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),nh(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function bi(e){if(!e[lo]){e[lo]=!0,up.forEach(function(n){n!=="selectionchange"&&(Qg.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Ll("selectionchange",!1,t))}}function nh(e,t,n,r){switch(Ip(t)){case 1:var i=lg;break;case 4:i=sg;break;default:i=Hu}n=i.bind(null,t,n,e),i=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}_p(function(){var u=o,d=Nu(n),c=[];e:{var f=eh.get(e);if(f!==void 0){var h=Bu,m=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":h=kg;break;case"focusin":m="focus",h=bl;break;case"focusout":m="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cg;break;case Xp:case Kp:case Jp:h=hg;break;case Zp:h=Pg;break;case"scroll":h=ug;break;case"wheel":h=Lg;break;case"copy":case"cut":case"paste":h=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ad}var y=(t&4)!==0,k=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,v!==null&&(S=yi(p,v),S!=null&&y.push(_i(p,S,g)))),k)break;p=p.return}0<y.length&&(f=new h(f,m,null,n,d),c.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==xs&&(m=n.relatedTarget||n.fromElement)&&(Pn(m)||m[Gt]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Pn(m):null,m!==null&&(k=Bn(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=id,S="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=ad,S="onPointerLeave",v="onPointerEnter",p="pointer"),k=h==null?f:tr(h),g=m==null?f:tr(m),f=new y(S,p+"leave",h,n,d),f.target=k,f.relatedTarget=g,S=null,Pn(d)===u&&(y=new y(v,p+"enter",m,n,d),y.target=g,y.relatedTarget=k,S=y),k=S,h&&m)t:{for(y=h,v=m,p=0,g=y;g;g=Qn(g))p++;for(g=0,S=v;S;S=Qn(S))g++;for(;0<p-g;)y=Qn(y),p--;for(;0<g-p;)v=Qn(v),g--;for(;p--;){if(y===v||v!==null&&y===v.alternate)break t;y=Qn(y),v=Qn(v)}y=null}else y=null;h!==null&&gd(c,f,h,y,!1),m!==null&&k!==null&&gd(c,k,m,y,!0)}}e:{if(f=u?tr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=Ag;else if(ud(f))if(qp)C=Ug;else{C=Ig;var O=Ng}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Fg);if(C&&(C=C(e,u))){Bp(c,C,n,d);break e}O&&O(e,f,u),e==="focusout"&&(O=f._wrapperState)&&O.controlled&&f.type==="number"&&ms(f,"number",f.value)}switch(O=u?tr(u):window,e){case"focusin":(ud(O)||O.contentEditable==="true")&&(Zn=O,Os=u,li=null);break;case"focusout":li=Os=Zn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,hd(c,n,d);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":hd(c,n,d)}var b;if(Vu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jn?Hp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Up&&n.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&(b=Fp()):(an=d,Wu="value"in an?an.value:an.textContent,Jn=!0)),O=Yo(u,E),0<O.length&&(E=new od(E,e,null,n,d),c.push({event:E,listeners:O}),b?E.data=b:(b=Wp(n),b!==null&&(E.data=b)))),(b=$g?Mg(e,n):jg(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(d=new od("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=b))}th(c,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yi(e,n),o!=null&&r.unshift(_i(e,o,i)),o=yi(e,t),o!=null&&r.push(_i(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=yi(n,o),s!=null&&l.unshift(_i(n,s,a))):i||(s=yi(n,o),s!=null&&l.push(_i(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(Gg,`
`).replace(Yg,"")}function so(e,t,n){if(t=yd(t),yd(e)!==t&&n)throw Error(B(425))}function Xo(){}var Ts=null,Ls=null;function Rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(Jg)}:$s;function Jg(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Mr,Ci="__reactProps$"+Mr,Gt="__reactContainer$"+Mr,Ms="__reactEvents$"+Mr,Zg="__reactListeners$"+Mr,e0="__reactHandles$"+Mr;function Pn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xd(e);e!==null;){if(n=e[zt])return n;e=xd(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[zt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Da(e){return e[Ci]||null}var js=[],nr=-1;function En(e){return{current:e}}function ye(e){0>nr||(e.current=js[nr],js[nr]=null,nr--)}function me(e,t){nr++,js[nr]=e.current,e.current=t}var xn={},Qe=En(xn),nt=En(!1),zn=xn;function wr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Ko(){ye(nt),ye(Qe)}function Sd(e,t,n){if(Qe.current!==xn)throw Error(B(168));me(Qe,t),me(nt,n)}function rh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Nv(e)||"Unknown",i));return be({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,zn=Qe.current,me(Qe,e),me(nt,nt.current),!0}function Ed(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=rh(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,ye(nt),ye(Qe),me(Qe,e)):ye(nt),me(nt,n)}var Ht=null,za=!1,Ml=!1;function ih(e){Ht===null?Ht=[e]:Ht.push(e)}function t0(e){za=!0,ih(e)}function kn(){if(!Ml&&Ht!==null){Ml=!0;var e=0,t=fe;try{var n=Ht;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,za=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Tp(Iu,kn),i}finally{fe=t,Ml=!1}}return null}var rr=[],ir=0,Zo=null,ea=0,ht=[],mt=0,An=null,Wt=1,Bt="";function _n(e,t){rr[ir++]=ea,rr[ir++]=Zo,Zo=e,ea=t}function oh(e,t,n){ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=An,An=e;var r=Wt;e=Bt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Bt=o+e}else Wt=1<<o|n<<i|r,Bt=e}function Gu(e){e.return!==null&&(_n(e,1),oh(e,1,0))}function Yu(e){for(;e===Zo;)Zo=rr[--ir],rr[ir]=null,ea=rr[--ir],rr[ir]=null;for(;e===An;)An=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Wt=ht[--mt],ht[mt]=null}var st=null,lt=null,xe=!1,_t=null;function ah(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Wt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function Ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(xe){var t=lt;if(t){var n=t;if(!kd(e,t)){if(Ds(e))throw Error(B(418));t=fn(n.nextSibling);var r=st;t&&kd(e,t)?ah(r,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(Ds(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function uo(e){if(e!==st)return!1;if(!xe)return bd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rs(e.type,e.memoizedProps)),t&&(t=lt)){if(Ds(e))throw lh(),Error(B(418));for(;t;)ah(e,t),t=fn(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?fn(e.stateNode.nextSibling):null;return!0}function lh(){for(var e=lt;e;)e=fn(e.nextSibling)}function xr(){lt=st=null,xe=!1}function Xu(e){_t===null?_t=[e]:_t.push(e)}var n0=Kt.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ta=En(null),na=null,or=null,Ku=null;function Ju(){Ku=or=na=null}function Zu(e){var t=ta.current;ye(ta),e._currentValue=t}function As(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){na=e,Ku=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Ku!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(na===null)throw Error(B(308));or=e,na.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Tn=null;function ec(e){Tn===null?Tn=[e]:Tn.push(e)}function sh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fu(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,d=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(h,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,c,f):m,f==null)break e;c=be({},c,f);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,s=c):d=d.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=c}}function Cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ch=new sp.Component().refs;function Ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=mn(e),o=Vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=mn(e),o=Vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(Pt(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=mn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(Pt(t,e,r,n),jo(t,e,r))}};function Od(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function dh(e,t,n){var r=!1,i=xn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=rt(t)?zn:Qe.current,r=t.contextTypes,o=(r=r!=null)?wr(e,i):xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ch,tc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=rt(t)?zn:Qe.current,i.context=wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ns(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ch&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Td(e){var t=e._init;return t(e._payload)}function fh(e){function t(v,p){if(e){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=vn(v,p),v.index=0,v.sibling=null,v}function o(v,p,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,S){return p===null||p.tag!==6?(p=Fl(g,v.mode,S),p.return=v,p):(p=i(p,g),p.return=v,p)}function s(v,p,g,S){var C=g.type;return C===Kn?d(v,p,g.props.children,S,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Td(C)===p.type)?(S=i(p,g.props),S.ref=Hr(v,p,g),S.return=v,S):(S=Fo(g.type,g.key,g.props,null,v.mode,S),S.ref=Hr(v,p,g),S.return=v,S)}function u(v,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ul(g,v.mode,S),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function d(v,p,g,S,C){return p===null||p.tag!==7?(p=Mn(g,v.mode,S,C),p.return=v,p):(p=i(p,g),p.return=v,p)}function c(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Zi:return g=Fo(p.type,p.key,p.props,null,v.mode,g),g.ref=Hr(v,null,p),g.return=v,g;case Xn:return p=Ul(p,v.mode,g),p.return=v,p;case en:var S=p._init;return c(v,S(p._payload),g)}if(ei(p)||Ar(p))return p=Mn(p,v.mode,g,null),p.return=v,p;co(v,p)}return null}function f(v,p,g,S){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zi:return g.key===C?s(v,p,g,S):null;case Xn:return g.key===C?u(v,p,g,S):null;case en:return C=g._init,f(v,p,C(g._payload),S)}if(ei(g)||Ar(g))return C!==null?null:d(v,p,g,S,null);co(v,g)}return null}function h(v,p,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(g)||null,a(p,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zi:return v=v.get(S.key===null?g:S.key)||null,s(p,v,S,C);case Xn:return v=v.get(S.key===null?g:S.key)||null,u(p,v,S,C);case en:var O=S._init;return h(v,p,g,O(S._payload),C)}if(ei(S)||Ar(S))return v=v.get(g)||null,d(p,v,S,C,null);co(p,S)}return null}function m(v,p,g,S){for(var C=null,O=null,b=p,E=p=0,R=null;b!==null&&E<g.length;E++){b.index>E?(R=b,b=null):R=b.sibling;var M=f(v,b,g[E],S);if(M===null){b===null&&(b=R);break}e&&b&&M.alternate===null&&t(v,b),p=o(M,p,E),O===null?C=M:O.sibling=M,O=M,b=R}if(E===g.length)return n(v,b),xe&&_n(v,E),C;if(b===null){for(;E<g.length;E++)b=c(v,g[E],S),b!==null&&(p=o(b,p,E),O===null?C=b:O.sibling=b,O=b);return xe&&_n(v,E),C}for(b=r(v,b);E<g.length;E++)R=h(b,v,E,g[E],S),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?E:R.key),p=o(R,p,E),O===null?C=R:O.sibling=R,O=R);return e&&b.forEach(function(D){return t(v,D)}),xe&&_n(v,E),C}function y(v,p,g,S){var C=Ar(g);if(typeof C!="function")throw Error(B(150));if(g=C.call(g),g==null)throw Error(B(151));for(var O=C=null,b=p,E=p=0,R=null,M=g.next();b!==null&&!M.done;E++,M=g.next()){b.index>E?(R=b,b=null):R=b.sibling;var D=f(v,b,M.value,S);if(D===null){b===null&&(b=R);break}e&&b&&D.alternate===null&&t(v,b),p=o(D,p,E),O===null?C=D:O.sibling=D,O=D,b=R}if(M.done)return n(v,b),xe&&_n(v,E),C;if(b===null){for(;!M.done;E++,M=g.next())M=c(v,M.value,S),M!==null&&(p=o(M,p,E),O===null?C=M:O.sibling=M,O=M);return xe&&_n(v,E),C}for(b=r(v,b);!M.done;E++,M=g.next())M=h(b,v,E,M.value,S),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?E:M.key),p=o(M,p,E),O===null?C=M:O.sibling=M,O=M);return e&&b.forEach(function(A){return t(v,A)}),xe&&_n(v,E),C}function k(v,p,g,S){if(typeof g=="object"&&g!==null&&g.type===Kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Zi:e:{for(var C=g.key,O=p;O!==null;){if(O.key===C){if(C=g.type,C===Kn){if(O.tag===7){n(v,O.sibling),p=i(O,g.props.children),p.return=v,v=p;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Td(C)===O.type){n(v,O.sibling),p=i(O,g.props),p.ref=Hr(v,O,g),p.return=v,v=p;break e}n(v,O);break}else t(v,O);O=O.sibling}g.type===Kn?(p=Mn(g.props.children,v.mode,S,g.key),p.return=v,v=p):(S=Fo(g.type,g.key,g.props,null,v.mode,S),S.ref=Hr(v,p,g),S.return=v,v=S)}return l(v);case Xn:e:{for(O=g.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=Ul(g,v.mode,S),p.return=v,v=p}return l(v);case en:return O=g._init,k(v,p,O(g._payload),S)}if(ei(g))return m(v,p,g,S);if(Ar(g))return y(v,p,g,S);co(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=Fl(g,v.mode,S),p.return=v,v=p),l(v)):n(v,p)}return k}var Sr=fh(!0),ph=fh(!1),Bi={},Nt=En(Bi),Oi=En(Bi),Pi=En(Bi);function Ln(e){if(e===Bi)throw Error(B(174));return e}function nc(e,t){switch(me(Pi,t),me(Oi,e),me(Nt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gs(t,e)}ye(Nt),me(Nt,t)}function Er(){ye(Nt),ye(Oi),ye(Pi)}function hh(e){Ln(Pi.current);var t=Ln(Nt.current),n=gs(t,e.type);t!==n&&(me(Oi,e),me(Nt,n))}function rc(e){Oi.current===e&&(ye(Nt),ye(Oi))}var Ee=En(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jl=[];function ic(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var Do=Kt.ReactCurrentDispatcher,Dl=Kt.ReactCurrentBatchConfig,Nn=0,ke=null,$e=null,De=null,oa=!1,si=!1,Ti=0,r0=0;function He(){throw Error(B(321))}function oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function ac(e,t,n,r,i,o){if(Nn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?l0:s0,e=n(r,i),si){o=0;do{if(si=!1,Ti=0,25<=o)throw Error(B(301));o+=1,De=$e=null,t.updateQueue=null,Do.current=u0,e=n(r,i)}while(si)}if(Do.current=aa,t=$e!==null&&$e.next!==null,Nn=0,De=$e=ke=null,oa=!1,t)throw Error(B(300));return e}function lc(){var e=Ti!==0;return Ti=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ke.memoizedState=De=e:De=De.next=e,De}function wt(){if($e===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=De===null?ke.memoizedState:De.next;if(t!==null)De=t,$e=e;else{if(e===null)throw Error(B(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},De===null?ke.memoizedState=De=e:De=De.next=e}return De}function Li(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((Nn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ke.lanes|=d,In|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Lt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,In|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=wt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Lt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mh(){}function vh(e,t){var n=ke,r=wt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,sc(wh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Ri(9,yh.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(B(349));(Nn&30)!==0||gh(n,t,i)}return i}function gh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yh(e,t,n,r){t.value=n,t.getSnapshot=r,xh(t)&&Sh(e)}function wh(e,t,n){return n(function(){xh(t)&&Sh(e)})}function xh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Sh(e){var t=Yt(e,1);t!==null&&Pt(t,e,1,-1)}function Ld(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,ke,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eh(){return wt().memoizedState}function zo(e,t,n,r){var i=Dt();ke.flags|=e,i.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var i=wt();r=r===void 0?null:r;var o=void 0;if($e!==null){var l=$e.memoizedState;if(o=l.destroy,r!==null&&oc(r,l.deps)){i.memoizedState=Ri(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Ri(1|t,n,o,r)}function Rd(e,t){return zo(8390656,8,e,t)}function sc(e,t){return Na(2048,8,e,t)}function kh(e,t){return Na(4,2,e,t)}function bh(e,t){return Na(4,4,e,t)}function _h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ch(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,_h.bind(null,t,e),n)}function uc(){}function Oh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ph(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Th(e,t,n){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(Lt(n,t)||(n=$p(),ke.lanes|=n,In|=n,e.baseState=!0),t)}function i0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{fe=n,Dl.transition=r}}function Lh(){return wt().memoizedState}function o0(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rh(e))$h(t,n);else if(n=sh(e,t,n,r),n!==null){var i=Xe();Pt(n,e,r,i),Mh(n,t,r)}}function a0(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rh(e))$h(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,l)){var s=t.interleaved;s===null?(i.next=i,ec(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=sh(e,t,i,r),n!==null&&(i=Xe(),Pt(n,e,r,i),Mh(n,t,r))}}function Rh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function $h(e,t){si=oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fu(e,n)}}var aa={readContext:yt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},l0={readContext:yt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zo(4194308,4,_h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=o0.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Ld,useDebugValue:uc,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Ld(!1),t=e[0];return e=i0.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Dt();if(xe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),ze===null)throw Error(B(349));(Nn&30)!==0||gh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rd(wh.bind(null,r,o,e),[e]),r.flags|=2048,Ri(9,yh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Dt(),t=ze.identifierPrefix;if(xe){var n=Bt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s0={readContext:yt,useCallback:Oh,useContext:yt,useEffect:sc,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:bh,useMemo:Ph,useReducer:zl,useRef:Eh,useState:function(){return zl(Li)},useDebugValue:uc,useDeferredValue:function(e){var t=wt();return Th(t,$e.memoizedState,e)},useTransition:function(){var e=zl(Li)[0],t=wt().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:vh,useId:Lh,unstable_isNewReconciler:!1},u0={readContext:yt,useCallback:Oh,useContext:yt,useEffect:sc,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:bh,useMemo:Ph,useReducer:Al,useRef:Eh,useState:function(){return Al(Li)},useDebugValue:uc,useDeferredValue:function(e){var t=wt();return $e===null?t.memoizedState=e:Th(t,$e.memoizedState,e)},useTransition:function(){var e=Al(Li)[0],t=wt().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:vh,useId:Lh,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=Av(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c0=typeof WeakMap=="function"?WeakMap:Map;function jh(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Xs=r),Fs(e,t)},n}function Dh(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fs(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new c0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=b0.bind(null,e,t,n),t.then(e,e))}function Md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var d0=Kt.ReactCurrentOwner,tt=!1;function Ye(e,t,n,r){t.child=e===null?ph(t,null,n,r):Sr(t,e.child,n,r)}function Dd(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=ac(e,t,n,r,o,i),n=lc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&n&&Gu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function zd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!gc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zh(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function zh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Us(e,t,n,r,i)}function Ah(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(lr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(lr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(lr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(lr,at),at|=r;return Ye(e,t,i,n),t.child}function Nh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Us(e,t,n,r,i){var o=rt(n)?zn:Qe.current;return o=wr(t,o),mr(t,i),n=ac(e,t,n,r,o,i),r=lc(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(xe&&r&&Gu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Ad(e,t,n,r,i){if(rt(n)){var o=!0;Jo(t)}else o=!1;if(mr(t,i),t.stateNode===null)Ao(e,t),dh(t,n,r),Is(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=rt(n)?zn:Qe.current,u=wr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pd(t,l,r,u),tn=!1;var f=t.memoizedState;l.state=f,ra(t,r,l,i),s=t.memoizedState,a!==r||f!==s||nt.current||tn?(typeof d=="function"&&(Ns(t,n,d,r),s=t.memoizedState),(a=tn||Od(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,uh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Et(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=rt(n)?zn:Qe.current,s=wr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Pd(t,l,r,s),tn=!1,f=t.memoizedState,l.state=f,ra(t,r,l,i);var m=t.memoizedState;a!==c||f!==m||nt.current||tn?(typeof h=="function"&&(Ns(t,n,h,r),m=t.memoizedState),(u=tn||Od(t,n,u,r,f,m,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,o,i)}function Hs(e,t,n,r,i,o){Nh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ed(t,n,!1),Xt(e,t,o);r=t.stateNode,d0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&Ed(t,n,!0),t.child}function Ih(e){var t=e.stateNode;t.pendingContext?Sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sd(e,t.context,!1),nc(e,t.containerInfo)}function Nd(e,t,n,r,i){return xr(),Xu(i),t.flags|=256,Ye(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fh(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ee,i&1),e===null)return zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ua(l,r,0,null),e=Mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bs(n),t.memoizedState=Ws,e):cc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return f0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=vn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vn(a,o):(o=Mn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Bs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cc(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Xu(r),Sr(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function f0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error(B(422))),fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ua({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Sr(t,e.child,null,l),t.child.memoizedState=Bs(l),t.memoizedState=Ws,o);if((t.mode&1)===0)return fo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Nl(o,r,void 0),fo(e,t,l,r)}if(a=(l&e.childLanes)!==0,tt||a){if(r=ze,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Pt(r,e,i,-1))}return vc(),r=Nl(Error(B(421))),fo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=fn(i.nextSibling),st=t,xe=!0,_t=null,e!==null&&(ht[mt++]=Wt,ht[mt++]=Bt,ht[mt++]=An,Wt=e.id,Bt=e.overflow,An=t),t=cc(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),As(e.return,t,n)}function Il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Il(t,!0,n,null,o);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p0(e,t,n){switch(t.tag){case 3:Ih(t),xr();break;case 5:hh(t);break;case 1:rt(t.type)&&Jo(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Fh(e,t,n):(me(Ee,Ee.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Uh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Ah(e,t,n)}return Xt(e,t,n)}var Hh,qs,Wh,Bh;Hh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qs=function(){};Wh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Nt.current);var o=null;switch(n){case"input":i=ps(e,i),r=ps(e,r),o=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),o=[];break;case"textarea":i=vs(e,i),r=vs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}ys(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h0(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return rt(t.type)&&Ko(),We(t),null;case 3:return r=t.stateNode,Er(),ye(nt),ye(Qe),ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(Zs(_t),_t=null))),qs(e,t),We(t),null;case 5:rc(t);var i=Ln(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Wh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Ln(Nt.current),uo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Ci]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)ge(ni[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Gc(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Xc(r,o),ge("invalid",r)}ys(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&so(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",r)}switch(n){case"input":eo(r),Yc(r,o,!0);break;case"textarea":eo(r),Kc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[zt]=t,e[Ci]=r,Hh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ws(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)ge(ni[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Gc(e,r),i=ps(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Xc(e,r),i=vs(e,r),ge("invalid",e);break;default:i=r}ys(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?xp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&gi(e,s):typeof s=="number"&&gi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ge("scroll",e):s!=null&&ju(e,o,s,l))}switch(n){case"input":eo(e),Yc(e,r,!1);break;case"textarea":eo(e),Kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Ln(Pi.current),Ln(Nt.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return We(t),null;case 13:if(ye(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lh(),xr(),t.flags|=98560,o=!1;else if(o=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[zt]=t}else xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else _t!==null&&(Zs(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Me===0&&(Me=3):vc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Er(),qs(e,t),e===null&&bi(t.stateNode.containerInfo),We(t),null;case 10:return Zu(t.type._context),We(t),null;case 17:return rt(t.type)&&Ko(),We(t),null;case 19:if(ye(Ee),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Wr(o,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ia(e),l!==null){for(t.flags|=128,Wr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>br&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ia(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Ce()-o.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Wr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function m0(e,t){switch(Yu(t),t.tag){case 1:return rt(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ye(nt),ye(Qe),ic(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(ye(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Ee),null;case 4:return Er(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var po=!1,Ve=!1,v0=typeof WeakSet=="function"?WeakSet:Set,X=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Vs(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Fd=!1;function g0(e,t){if(Ts=Qo,e=Gp(),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++d===r&&(s=l),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},Qo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var m=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,k=m.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Et(t.type,y),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(S){_e(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return m=Fd,Fd=!1,m}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vs(t,n,o)}i=i.next}while(i!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qh(e){var t=e.alternate;t!==null&&(e.alternate=null,qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Ci],delete t[Ms],delete t[Zg],delete t[e0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vh(e){return e.tag===5||e.tag===3||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var Ie=null,bt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Qh(e,t,n),n=n.sibling}function Qh(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Ra,n)}catch{}switch(n.tag){case 5:Ve||ar(n,t);case 6:var r=Ie,i=bt;Ie=null,Zt(e,t,n),Ie=r,bt=i,Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(bt?(e=Ie,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Si(e)):$l(Ie,n.stateNode));break;case 4:r=Ie,i=bt,Ie=n.stateNode.containerInfo,bt=!0,Zt(e,t,n),Ie=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Vs(n,t,l),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Ve&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Zt(e,t,n),Ve=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v0),t.forEach(function(r){var i=C0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,bt=!1;break e;case 3:Ie=a.stateNode.containerInfo,bt=!0;break e;case 4:Ie=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ie===null)throw Error(B(160));Qh(o,l,i),Ie=null,bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gh(t,e),t=t.sibling}function Gh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),jt(e),r&4){try{ui(3,e,e.return),Ia(3,e)}catch(y){_e(e,e.return,y)}try{ui(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:xt(t,e),jt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(xt(t,e),jt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{gi(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mp(i,o),ws(a,l);var u=ws(a,o);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?xp(i,c):d==="dangerouslySetInnerHTML"?yp(i,c):d==="children"?gi(i,c):ju(i,d,c,u)}switch(a){case"input":hs(i,o);break;case"textarea":vp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?dr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ci]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(xt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(xt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:xt(t,e),jt(e);break;case 13:xt(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(pc=Ce())),r&4&&Hd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,xt(t,e),Ve=u):xt(t,e),jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,h=f.child,f.tag){case 0:case 11:case 14:case 15:ui(4,f,f.return);break;case 1:ar(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){Bd(c);continue}}h!==null?(h.return=f,X=h):Bd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=wp("display",l))}catch(y){_e(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xt(t,e),jt(e),r&4&&Hd(e);break;case 21:break;default:xt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vh(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=Ud(e);Ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ud(e);Gs(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function y0(e,t,n){X=e,Yh(e)}function Yh(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||po;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=po;var u=Ve;if(po=l,(Ve=s)&&!u)for(X=i;X!==null;)l=X,s=l.child,l.tag===22&&l.memoizedState!==null?qd(i):s!==null?(s.return=l,X=s):qd(i);for(;o!==null;)X=o,Yh(o),o=o.sibling;X=i,po=a,Ve=u}Wd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):Wd(e)}}function Wd(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Si(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ve||t.flags&512&&Qs(t)}catch(f){_e(t,t.return,f)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Bd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function qd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Qs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Qs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var w0=Math.ceil,la=Kt.ReactCurrentDispatcher,dc=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,de=0,ze=null,Le=null,Fe=0,at=0,lr=En(0),Me=0,$i=null,In=0,Fa=0,fc=0,ci=null,et=null,pc=0,br=1/0,Ut=null,sa=!1,Xs=null,hn=null,ho=!1,ln=null,ua=0,di=0,Ks=null,No=-1,Io=0;function Xe(){return(de&6)!==0?Ce():No!==-1?No:No=Ce()}function mn(e){return(e.mode&1)===0?1:(de&2)!==0&&Fe!==0?Fe&-Fe:n0.transition!==null?(Io===0&&(Io=$p()),Io):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Ip(e.type)),e)}function Pt(e,t,n,r){if(50<di)throw di=0,Ks=null,Error(B(185));Ui(e,n,r),((de&2)===0||e!==ze)&&(e===ze&&((de&2)===0&&(Fa|=n),Me===4&&on(e,Fe)),it(e,r),n===1&&de===0&&(t.mode&1)===0&&(br=Ce()+500,za&&kn()))}function it(e,t){var n=e.callbackNode;ng(e,t);var r=Vo(e,e===ze?Fe:0);if(r===0)n!==null&&ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ed(n),t===1)e.tag===0?t0(Vd.bind(null,e)):ih(Vd.bind(null,e)),Kg(function(){(de&6)===0&&kn()}),n=null;else{switch(Mp(r)){case 1:n=Iu;break;case 4:n=Lp;break;case 16:n=qo;break;case 536870912:n=Rp;break;default:n=qo}n=rm(n,Xh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xh(e,t){if(No=-1,Io=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Vo(e,e===ze?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ca(e,r);else{t=r;var i=de;de|=2;var o=Jh();(ze!==e||Fe!==t)&&(Ut=null,br=Ce()+500,$n(e,t));do try{E0();break}catch(a){Kh(e,a)}while(1);Ju(),la.current=o,de=i,Le!==null?t=0:(ze=null,Fe=0,t=Me)}if(t!==0){if(t===2&&(i=bs(e),i!==0&&(r=i,t=Js(e,i))),t===1)throw n=$i,$n(e,0),on(e,r),it(e,Ce()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,(r&30)===0&&!x0(i)&&(t=ca(e,r),t===2&&(o=bs(e),o!==0&&(r=o,t=Js(e,o))),t===1))throw n=$i,$n(e,0),on(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:Cn(e,et,Ut);break;case 3:if(on(e,r),(r&130023424)===r&&(t=pc+500-Ce(),10<t)){if(Vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$s(Cn.bind(null,e,et,Ut),t);break}Cn(e,et,Ut);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w0(r/1960))-r,10<r){e.timeoutHandle=$s(Cn.bind(null,e,et,Ut),r);break}Cn(e,et,Ut);break;case 5:Cn(e,et,Ut);break;default:throw Error(B(329))}}}return it(e,Ce()),e.callbackNode===n?Xh.bind(null,e):null}function Js(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=ca(e,t),e!==2&&(t=et,et=n,t!==null&&Zs(t)),e}function Zs(e){et===null?et=e:et.push.apply(et,e)}function x0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~fc,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Vd(e){if((de&6)!==0)throw Error(B(327));vr();var t=Vo(e,0);if((t&1)===0)return it(e,Ce()),null;var n=ca(e,t);if(e.tag!==0&&n===2){var r=bs(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=$i,$n(e,0),on(e,t),it(e,Ce()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,et,Ut),it(e,Ce()),null}function hc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(br=Ce()+500,za&&kn())}}function Fn(e){ln!==null&&ln.tag===0&&(de&6)===0&&vr();var t=de;de|=1;var n=gt.transition,r=fe;try{if(gt.transition=null,fe=1,e)return e()}finally{fe=r,gt.transition=n,de=t,(de&6)===0&&kn()}}function mc(){at=lr.current,ye(lr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xg(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Er(),ye(nt),ye(Qe),ic();break;case 5:rc(r);break;case 4:Er();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Zu(r.type._context);break;case 22:case 23:mc()}n=n.return}if(ze=e,Le=e=vn(e.current,null),Fe=at=t,Me=0,$i=null,fc=Fa=In=0,et=ci=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Tn=null}return e}function Kh(e,t){do{var n=Le;try{if(Ju(),Do.current=aa,oa){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(Nn=0,De=$e=ke=null,si=!1,Ti=0,dc.current=null,n===null||n.return===null){Me=1,$i=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Md(l);if(h!==null){h.flags&=-257,jd(h,l,a,o,t),h.mode&1&&$d(o,u,t),t=h,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if((t&1)===0){$d(o,u,t),vc();break e}s=Error(B(426))}}else if(xe&&a.mode&1){var k=Md(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),jd(k,l,a,o,t),Xu(kr(s,a));break e}}o=s=kr(s,a),Me!==4&&(Me=2),ci===null?ci=[o]:ci.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=jh(o,s,t);_d(o,v);break e;case 1:a=s;var p=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hn===null||!hn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Dh(o,a,t);_d(o,S);break e}}o=o.return}while(o!==null)}em(n)}catch(C){t=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function Jh(){var e=la.current;return la.current=aa,e===null?aa:e}function vc(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||(In&268435455)===0&&(Fa&268435455)===0||on(ze,Fe)}function ca(e,t){var n=de;de|=2;var r=Jh();(ze!==e||Fe!==t)&&(Ut=null,$n(e,t));do try{S0();break}catch(i){Kh(e,i)}while(1);if(Ju(),de=n,la.current=r,Le!==null)throw Error(B(261));return ze=null,Fe=0,Me}function S0(){for(;Le!==null;)Zh(Le)}function E0(){for(;Le!==null&&!Qv();)Zh(Le)}function Zh(e){var t=nm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?em(e):Le=t,dc.current=null}function em(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=h0(n,t,at),n!==null){Le=n;return}}else{if(n=m0(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function Cn(e,t,n){var r=fe,i=gt.transition;try{gt.transition=null,fe=1,k0(e,t,n,r)}finally{gt.transition=i,fe=r}return null}function k0(e,t,n,r){do vr();while(ln!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rg(e,o),e===ze&&(Le=ze=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ho||(ho=!0,rm(qo,function(){return vr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var l=fe;fe=1;var a=de;de|=4,dc.current=null,g0(e,n),Gh(n,e),Wg(Ls),Qo=!!Ts,Ls=Ts=null,e.current=n,y0(n),Gv(),de=a,fe=l,gt.transition=o}else e.current=n;if(ho&&(ho=!1,ln=e,ua=i),o=e.pendingLanes,o===0&&(hn=null),Kv(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Xs,Xs=null,e;return(ua&1)!==0&&e.tag!==0&&vr(),o=e.pendingLanes,(o&1)!==0?e===Ks?di++:(di=0,Ks=e):di=0,kn(),null}function vr(){if(ln!==null){var e=Mp(ua),t=gt.transition,n=fe;try{if(gt.transition=null,fe=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,ua=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,X=e.current;X!==null;){var o=X,l=o.child;if((X.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:ui(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,h=d.return;if(qh(d),d===u){X=null;break}if(f!==null){f.return=h,X=f;break}X=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,X=v;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){l=X;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,X=g;else e:for(l=p;X!==null;){if(a=X,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ia(9,a)}}catch(C){_e(a,a.return,C)}if(a===l){X=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,X=S;break e}X=a.return}}if(de=i,kn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Ra,e)}catch{}r=!0}return r}finally{fe=n,gt.transition=t}}return!1}function Qd(e,t,n){t=kr(n,t),t=jh(e,t,1),e=pn(e,t,1),t=Xe(),e!==null&&(Ui(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Qd(e,e,n);else for(;t!==null;){if(t.tag===3){Qd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=kr(n,e),e=Dh(t,e,1),t=pn(t,e,1),e=Xe(),t!==null&&(Ui(t,1,e),it(t,e));break}}t=t.return}}function b0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Fe&n)===n&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>Ce()-pc?$n(e,0):fc|=n),it(e,t)}function tm(e,t){t===0&&((e.mode&1)===0?t=1:(t=ro,ro<<=1,(ro&130023424)===0&&(ro=4194304)));var n=Xe();e=Yt(e,t),e!==null&&(Ui(e,t,n),it(e,n))}function _0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tm(e,n)}function C0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),tm(e,n)}var nm;nm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,p0(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,xe&&(t.flags&1048576)!==0&&oh(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=wr(t,Qe.current);mr(t,n),i=ac(null,t,r,e,i,n);var o=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tc(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=Hs(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Gu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=P0(r),e=Et(r,e),i){case 0:t=Us(null,t,r,e,n);break e;case 1:t=Ad(null,t,r,e,n);break e;case 11:t=Dd(null,t,r,e,n);break e;case 14:t=zd(null,t,r,Et(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Us(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Ad(e,t,r,i,n);case 3:e:{if(Ih(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uh(e,t),ra(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(B(423)),t),t=Nd(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(B(424)),t),t=Nd(e,t,r,n,i);break e}else for(lt=fn(t.stateNode.containerInfo.firstChild),st=t,xe=!0,_t=null,n=ph(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return hh(t),e===null&&zs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Rs(r,i)?l=null:o!==null&&Rs(r,o)&&(t.flags|=32),Nh(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&zs(t),null;case 13:return Fh(e,t,n);case 4:return nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Dd(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(ta,r._currentValue),r._currentValue=l,o!==null)if(Lt(o.value,l)){if(o.children===i.children&&!nt.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Vt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),As(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),As(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),zd(e,t,r,i,n);case 15:return zh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Ao(e,t),t.tag=1,rt(r)?(e=!0,Jo(t)):e=!1,mr(t,n),dh(t,r,i),Is(t,r,i,n),Hs(null,t,r,!0,e,n);case 19:return Uh(e,t,n);case 22:return Ah(e,t,n)}throw Error(B(156,t.tag))};function rm(e,t){return Tp(e,t)}function O0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new O0(e,t,n,r)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P0(e){if(typeof e=="function")return gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zu)return 11;if(e===Au)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")gc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return Mn(n.children,i,o,t);case Du:l=8,i|=8;break;case us:return e=vt(12,n,t,i|2),e.elementType=us,e.lanes=o,e;case cs:return e=vt(13,n,t,i),e.elementType=cs,e.lanes=o,e;case ds:return e=vt(19,n,t,i),e.elementType=ds,e.lanes=o,e;case fp:return Ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cp:l=10;break e;case dp:l=9;break e;case zu:l=11;break e;case Au:l=14;break e;case en:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Ua(e,t,n,r){return e=vt(22,e,r,t),e.elementType=fp,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Ul(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yc(e,t,n,r,i,o,l,a,s){return e=new T0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(o),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function im(e){if(!e)return xn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(rt(n))return rh(e,n,t)}return t}function om(e,t,n,r,i,o,l,a,s){return e=yc(n,r,!0,e,i,o,l,a,s),e.context=im(null),n=e.current,r=Xe(),i=mn(n),o=Vt(r,i),o.callback=t!=null?t:null,pn(n,o,i),e.current.lanes=i,Ui(e,i,r),it(e,r),e}function Ha(e,t,n,r){var i=t.current,o=Xe(),l=mn(i);return n=im(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,l),e!==null&&(Pt(e,i,l,o),jo(e,i,l)),l}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){Gd(e,t),(e=e.alternate)&&Gd(e,t)}function R0(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function xc(e){this._internalRoot=e}Wa.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ha(e,t,null,null)};Wa.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ha(null,e,null,null)}),t[Gt]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=zp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Np(e)}};function Sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yd(){}function $0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=da(l);o.call(u)}}var l=om(t,r,e,0,null,!1,!1,"",Yd);return e._reactRootContainer=l,e[Gt]=l.current,bi(e.nodeType===8?e.parentNode:e),Fn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=da(s);a.call(u)}}var s=yc(e,0,!1,null,null,!1,!1,"",Yd);return e._reactRootContainer=s,e[Gt]=s.current,bi(e.nodeType===8?e.parentNode:e),Fn(function(){Ha(t,s,n,r)}),s}function qa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=da(l);a.call(s)}}Ha(t,l,e,i)}else l=$0(n,t,e,i,r);return da(l)}jp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(Fu(t,n|1),it(t,Ce()),(de&6)===0&&(br=Ce()+500,kn()))}break;case 13:Fn(function(){var r=Yt(e,1);if(r!==null){var i=Xe();Pt(r,e,1,i)}}),wc(e,1)}};Uu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Xe();Pt(t,e,134217728,n)}wc(e,134217728)}};Dp=function(e){if(e.tag===13){var t=mn(e),n=Yt(e,t);if(n!==null){var r=Xe();Pt(n,e,t,r)}wc(e,t)}};zp=function(){return fe};Ap=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Ss=function(e,t,n){switch(t){case"input":if(hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Da(r);if(!i)throw Error(B(90));hp(r),hs(r,i)}}}break;case"textarea":vp(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};kp=hc;bp=Fn;var M0={usingClientEntryPoint:!1,Events:[Wi,tr,Da,Sp,Ep,hc]},Br={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j0={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Op(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ra=mo.inject(j0),At=mo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(t))throw Error(B(200));return L0(e,t,null,n)};ct.createRoot=function(e,t){if(!Sc(e))throw Error(B(299));var n=!1,r="",i=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,bi(e.nodeType===8?e.parentNode:e),new xc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Op(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Fn(e)};ct.hydrate=function(e,t,n){if(!Ba(t))throw Error(B(200));return qa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Sc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=om(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Gt]=t.current,bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wa(t)};ct.render=function(e,t,n){if(!Ba(t))throw Error(B(200));return qa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(B(40));return e._reactRootContainer?(Fn(function(){qa(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};ct.unstable_batchedUpdates=hc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return qa(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(Ru);var Xd=Ru.exports;ls.createRoot=Xd.createRoot,ls.hydrateRoot=Xd.hydrateRoot;function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));var Kd=function(e){return e},Jd="beforeunload",D0="popstate";function z0(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var b=r.location,E=b.pathname,R=b.search,M=b.hash,D=i.state||{};return[D.idx,Kd({pathname:E,search:R,hash:M,state:D.usr||null,key:D.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var b=Rn.Pop,E=o(),R=E[0],M=E[1];if(h.length){if(R!=null){var D=d-R;D&&(l={action:b,location:M,retry:function(){C(D*-1)}},C(D))}}else p(b)}}r.addEventListener(D0,a);var s=Rn.Pop,u=o(),d=u[0],c=u[1],f=ef(),h=ef();d==null&&(d=0,i.replaceState(fa({},i.state,{idx:d}),""));function m(b){return typeof b=="string"?b:eu(b)}function y(b,E){return E===void 0&&(E=null),Kd(fa({pathname:c.pathname,hash:"",search:""},typeof b=="string"?qn(b):b,{state:E,key:A0()}))}function k(b,E){return[{usr:b.state,key:b.key,idx:E},m(b)]}function v(b,E,R){return!h.length||(h.call({action:b,location:E,retry:R}),!1)}function p(b){s=b;var E=o();d=E[0],c=E[1],f.call({action:s,location:c})}function g(b,E){var R=Rn.Push,M=y(b,E);function D(){g(b,E)}if(v(R,M,D)){var A=k(M,d+1),z=A[0],N=A[1];try{i.pushState(z,"",N)}catch{r.location.assign(N)}p(R)}}function S(b,E){var R=Rn.Replace,M=y(b,E);function D(){S(b,E)}if(v(R,M,D)){var A=k(M,d),z=A[0],N=A[1];i.replaceState(z,"",N),p(R)}}function C(b){i.go(b)}var O={get action(){return s},get location(){return c},createHref:m,push:g,replace:S,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(E){return f.push(E)},block:function(E){var R=h.push(E);return h.length===1&&r.addEventListener(Jd,Zd),function(){R(),h.length||r.removeEventListener(Jd,Zd)}}};return O}function Zd(e){e.preventDefault(),e.returnValue=""}function ef(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function A0(){return Math.random().toString(36).substr(2,8)}function eu(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function qn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ec=K.exports.createContext(null),kc=K.exports.createContext(null),Va=K.exports.createContext({outlet:null,matches:[]});function It(e,t){if(!e)throw new Error(t)}function N0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qn(t):t,i=um(r.pathname||"/",n);if(i==null)return null;let o=lm(e);I0(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=G0(o[a],i);return l}function lm(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||It(!1),l.relativePath=l.relativePath.slice(r.length));let a=gn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&It(!1),lm(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:V0(a,i.index),routesMeta:s})}),t}function I0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F0=/^:\w+$/,U0=3,H0=2,W0=1,B0=10,q0=-2,tf=e=>e==="*";function V0(e,t){let n=e.split("/"),r=n.length;return n.some(tf)&&(r+=q0),t&&(r+=H0),n.filter(i=>!tf(i)).reduce((i,o)=>i+(F0.test(o)?U0:o===""?W0:B0),r)}function Q0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Y0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:gn([i,d.pathname]),pathnameBase:cm(gn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=gn([i,d.pathnameBase]))}return o}function Y0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=K0(a[c]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function X0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function K0(e,t){try{return decodeURIComponent(e)}catch{return e}}function J0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:Z0(n,t):t,search:ty(r),hash:ny(i)}}function Z0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sm(e,t,n){let r=typeof e=="string"?qn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=J0(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function ey(e){return e===""||e.pathname===""?"/":typeof e=="string"?qn(e).pathname:e.pathname}function um(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),cm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ny=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ry(e){qi()||It(!1);let{basename:t,navigator:n}=K.exports.useContext(Ec),{hash:r,pathname:i,search:o}=dm(e),l=i;if(t!=="/"){let a=ey(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):gn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function qi(){return K.exports.useContext(kc)!=null}function Qa(){return qi()||It(!1),K.exports.useContext(kc).location}function Ga(){qi()||It(!1);let{basename:e,navigator:t}=K.exports.useContext(Ec),{matches:n}=K.exports.useContext(Va),{pathname:r}=Qa(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=K.exports.useRef(!1);return K.exports.useEffect(()=>{o.current=!0}),K.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=sm(a,JSON.parse(i),r);e!=="/"&&(u.pathname=gn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function dm(e){let{matches:t}=K.exports.useContext(Va),{pathname:n}=Qa(),r=JSON.stringify(t.map(i=>i.pathnameBase));return K.exports.useMemo(()=>sm(e,JSON.parse(r),n),[e,r,n])}function iy(e,t){qi()||It(!1);let{matches:n}=K.exports.useContext(Va),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=Qa(),a;if(t){var s;let f=typeof t=="string"?qn(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||It(!1),a=f}else a=l;let u=a.pathname||"/",d=o==="/"?u:u.slice(o.length)||"/",c=N0(e,{pathname:d});return oy(c&&c.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:gn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:gn([o,f.pathnameBase])})),n)}function oy(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>K.exports.createElement(Va.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Yn(e){It(!1)}function ay(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:l=!1}=e;qi()&&It(!1);let a=cm(t),s=K.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:h="default"}=r,m=K.exports.useMemo(()=>{let y=um(u,a);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:h}},[a,u,d,c,f,h]);return m==null?null:K.exports.createElement(Ec.Provider,{value:s},K.exports.createElement(kc.Provider,{children:n,value:{location:m,navigationType:i}}))}function ly(e){let{children:t,location:n}=e;return iy(tu(t),n)}function tu(e){let t=[];return K.exports.Children.forEach(e,n=>{if(!K.exports.isValidElement(n))return;if(n.type===K.exports.Fragment){t.push.apply(t,tu(n.props.children));return}n.type!==Yn&&It(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=tu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(this,arguments)}function sy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const uy=["onClick","reloadDocument","replace","state","target","to"];function cy(e){let{basename:t,children:n,window:r}=e,i=K.exports.useRef();i.current==null&&(i.current=z0({window:r}));let o=i.current,[l,a]=K.exports.useState({action:o.action,location:o.location});return K.exports.useLayoutEffect(()=>o.listen(a),[o]),K.exports.createElement(ay,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function dy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Ct=K.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=sy(t,uy),d=ry(s),c=fy(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&c(h)}return K.exports.createElement("a",nu({},u,{href:d,onClick:f,ref:n,target:a}))});function fy(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Ga(),l=Qa(),a=dm(e);return K.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!dy(s)){s.preventDefault();let u=!!r||eu(l)===eu(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const py=""+new URL("LogoSiteSerraJr.3ee0f8b0.svg",import.meta.url).href,hy=""+new URL("arrow-header.98a9eade.svg",import.meta.url).href;var Ya={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,bc=Ae?Symbol.for("react.element"):60103,_c=Ae?Symbol.for("react.portal"):60106,Xa=Ae?Symbol.for("react.fragment"):60107,Ka=Ae?Symbol.for("react.strict_mode"):60108,Ja=Ae?Symbol.for("react.profiler"):60114,Za=Ae?Symbol.for("react.provider"):60109,el=Ae?Symbol.for("react.context"):60110,Cc=Ae?Symbol.for("react.async_mode"):60111,tl=Ae?Symbol.for("react.concurrent_mode"):60111,nl=Ae?Symbol.for("react.forward_ref"):60112,rl=Ae?Symbol.for("react.suspense"):60113,my=Ae?Symbol.for("react.suspense_list"):60120,il=Ae?Symbol.for("react.memo"):60115,ol=Ae?Symbol.for("react.lazy"):60116,vy=Ae?Symbol.for("react.block"):60121,gy=Ae?Symbol.for("react.fundamental"):60117,yy=Ae?Symbol.for("react.responder"):60118,wy=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bc:switch(e=e.type,e){case Cc:case tl:case Xa:case Ja:case Ka:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case Za:return e;default:return t}}case _c:return t}}}function fm(e){return ft(e)===tl}pe.AsyncMode=Cc;pe.ConcurrentMode=tl;pe.ContextConsumer=el;pe.ContextProvider=Za;pe.Element=bc;pe.ForwardRef=nl;pe.Fragment=Xa;pe.Lazy=ol;pe.Memo=il;pe.Portal=_c;pe.Profiler=Ja;pe.StrictMode=Ka;pe.Suspense=rl;pe.isAsyncMode=function(e){return fm(e)||ft(e)===Cc};pe.isConcurrentMode=fm;pe.isContextConsumer=function(e){return ft(e)===el};pe.isContextProvider=function(e){return ft(e)===Za};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bc};pe.isForwardRef=function(e){return ft(e)===nl};pe.isFragment=function(e){return ft(e)===Xa};pe.isLazy=function(e){return ft(e)===ol};pe.isMemo=function(e){return ft(e)===il};pe.isPortal=function(e){return ft(e)===_c};pe.isProfiler=function(e){return ft(e)===Ja};pe.isStrictMode=function(e){return ft(e)===Ka};pe.isSuspense=function(e){return ft(e)===rl};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xa||e===tl||e===Ja||e===Ka||e===rl||e===my||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===Za||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===gy||e.$$typeof===yy||e.$$typeof===wy||e.$$typeof===vy)};pe.typeOf=ft;(function(e){e.exports=pe})(Ya);function xy(e){function t(U,_,V,F,T){for(var J=0,W=0,ee=0,ie=0,se,ne,Oe=0,Ne=0,oe,je=oe=se=0,ce=0,Re=0,bn=0,Pe=0,Jt=V.length,Ft=Jt-1,ot,te="",he="",Vn="",zr="",Mt;ce<Jt;){if(ne=V.charCodeAt(ce),ce===Ft&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Jt++,Ft++),W+ie+ee+J===0){if(ce===Ft&&(0<Re&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=V.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Pe=++ce;ce<Jt;){switch(ne=V.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=V.charCodeAt(ce+1)){case 42:case 47:e:{for(je=ce+1;je<Ft;++je)switch(V.charCodeAt(je)){case 47:if(ne===42&&V.charCodeAt(je-1)===42&&ce+2!==je){ce=je+1;break e}break;case 10:if(ne===47){ce=je+1;break e}}ce=je}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Ft&&V.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=V.substring(Pe,ce),se===0&&(se=(te=te.replace(c,"").trim()).charCodeAt(0)),se){case 64:switch(0<Re&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:Re=_;break;default:Re=Q}if(oe=t(_,Re,oe,ne,T+1),Pe=oe.length,0<P&&(Re=n(Q,te,bn),Mt=a(3,oe,Re,_,z,A,Pe,ne,T,F),te=Re.join(""),Mt!==void 0&&(Pe=(oe=Mt.trim()).length)===0&&(ne=0,oe="")),0<Pe)switch(ne){case 115:te=te.replace(O,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(_,n(_,te,bn),oe,F,T+1)}Vn+=oe,oe=bn=Re=je=se=0,te="",ne=V.charCodeAt(++ce);break;case 125:case 59:if(te=(0<Re?te.replace(f,""):te).trim(),1<(Pe=te.length))switch(je===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Pe=(te=te.replace(" ",":")).length),0<P&&(Mt=a(1,te,_,U,z,A,he.length,F,T,F))!==void 0&&(Pe=(te=Mt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){zr+=te+V.charAt(ce);break}default:te.charCodeAt(Pe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}bn=Re=je=se=0,te="",ne=V.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(Re=1,te+="\0"),0<P*H&&a(0,te,_,U,z,A,he.length,F,T,F),A=1,z++;break;case 59:case 125:if(W+ie+ee+J===0){A++;break}default:switch(A++,ot=V.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Oe){case 44:case 58:case 9:case 32:ot="";break;default:ne!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:ie+W+J===0&&(Re=bn=1,ot="\f"+ot);break;case 108:if(ie+W+J+N===0&&0<je)switch(ce-je){case 2:Oe===112&&V.charCodeAt(ce-3)===58&&(N=Oe);case 8:Ne===111&&(N=Ne)}break;case 58:ie+W+J===0&&(je=ce);break;case 44:W+ee+ie+J===0&&(Re=1,ot+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Oe+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+je+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*V.charCodeAt(ce+1)){case 235:W=47;break;case 220:Pe=ce,W=42}break;case 42:ne===47&&Oe===42&&Pe+2!==ce&&(V.charCodeAt(Pe+2)===33&&(he+=V.substring(Pe,ce+1)),ot="",W=0)}}W===0&&(te+=ot)}Ne=Oe,Oe=ne,ce++}if(Pe=he.length,0<Pe){if(Re=_,0<P&&(Mt=a(2,he,Re,U,z,A,Pe,F,T,F),Mt!==void 0&&(he=Mt).length===0))return zr+he+Vn;if(he=Re.join(",")+"{"+he+"}",I*N!==0){switch(I!==2||o(he,2)||(N=0),N){case 111:he=he.replace(S,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}N=0}}return zr+he+Vn}function n(U,_,V){var F=_.trim().split(k);_=F;var T=F.length,J=U.length;switch(J){case 0:case 1:var W=0;for(U=J===0?"":U[0]+" ";W<T;++W)_[W]=r(U,_[W],V).trim();break;default:var ee=W=0;for(_=[];W<T;++W)for(var ie=0;ie<J;++ie)_[ee++]=r(U[ie]+" ",F[W],V).trim()}return _}function r(U,_,V){var F=_.charCodeAt(0);switch(33>F&&(F=(_=_.trim()).charCodeAt(0)),F){case 38:return _.replace(v,"$1"+U.trim());case 58:return U.trim()+_.replace(v,"$1"+U.trim());default:if(0<1*V&&0<_.indexOf("\f"))return _.replace(v,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+_}function i(U,_,V,F){var T=U+";",J=2*_+3*V+4*F;if(J===944){U=T.indexOf(":",9)+1;var W=T.substring(U,T.length-1).trim();return W=T.substring(0,U).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(T,1))return T;switch(J){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(D,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return W=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+T+"-ms-flex-pack"+W+T;case 1005:return m.test(T)?T.replace(h,":-webkit-")+T.replace(h,":-moz-")+T:T;case 1e3:switch(W=T.substring(13).trim(),_=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(_)){case 226:W=T.replace(C,"tb");break;case 232:W=T.replace(C,"tb-rl");break;case 220:W=T.replace(C,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+W+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(_=(T=U).length-10,W=(T.charCodeAt(_)===33?T.substring(0,_):T).substring(U.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:T=T.replace(W,"-webkit-"+W)+";"+T;break;case 207:case 102:T=T.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+T.replace(W,"-webkit-"+W)+";"+T.replace(W,"-ms-"+W+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return W=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+W+"-ms-flex-"+W+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(E,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(E,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(M.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),_,V,F).replace(":fill-available",":stretch"):T.replace(W,"-webkit-"+W)+T.replace(W,"-moz-"+W.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,V+F===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function o(U,_){var V=U.indexOf(_===1?":":"{"),F=U.substring(0,_!==3?V:10);return V=U.substring(V+1,U.length-1),j(_!==2?F:F.replace(R,"$1"),V,_)}function l(U,_){var V=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return V!==_+";"?V.replace(b," or ($1)").substring(4):"("+_+")"}function a(U,_,V,F,T,J,W,ee,ie,se){for(var ne=0,Oe=_,Ne;ne<P;++ne)switch(Ne=$[ne].call(d,U,Oe,V,F,T,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Oe=Ne}if(Oe!==_)return Oe}function s(U){switch(U){case void 0:case null:P=$.length=0;break;default:if(typeof U=="function")$[P++]=U;else if(typeof U=="object")for(var _=0,V=U.length;_<V;++_)s(U[_]);else H=!!U|0}return s}function u(U){return U=U.prefix,U!==void 0&&(j=null,U?typeof U!="function"?I=1:(I=2,j=U):I=0),u}function d(U,_){var V=U;if(33>V.charCodeAt(0)&&(V=V.trim()),q=V,V=[q],0<P){var F=a(-1,_,V,V,z,A,0,0,0,0);F!==void 0&&typeof F=="string"&&(_=F)}var T=t(Q,V,_,0,0);return 0<P&&(F=a(-2,T,V,V,z,A,T.length,0,0,0),F!==void 0&&(T=F)),q="",N=0,A=z=1,T}var c=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,E=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,A=1,z=1,N=0,I=1,Q=[],$=[],P=0,j=null,H=0,q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Sy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ey(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ky=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nf=Ey(function(e){return ky.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Oc=Ya.exports,by={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_y={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pc={};Pc[Oc.ForwardRef]=Cy;Pc[Oc.Memo]=pm;function rf(e){return Oc.isMemo(e)?pm:Pc[e.$$typeof]||by}var Oy=Object.defineProperty,Py=Object.getOwnPropertyNames,of=Object.getOwnPropertySymbols,Ty=Object.getOwnPropertyDescriptor,Ly=Object.getPrototypeOf,af=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(af){var r=Ly(t);r&&r!==af&&hm(e,r,n)}var i=Py(t);of&&(i=i.concat(of(t)));for(var o=rf(e),l=rf(t),a=0;a<i.length;++a){var s=i[a];if(!_y[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=Ty(t,s);try{Oy(e,s,u)}catch{}}}}return e}var mm=hm;function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var lf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ru=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ya.exports.typeOf(e)},pa=Object.freeze([]),yn=Object.freeze({});function Mi(e){return typeof e=="function"}function sf(e){return e.displayName||e.name||"Component"}function Tc(e){return e&&typeof e.styledComponentId=="string"}var _r=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Lc=typeof window<"u"&&"HTMLElement"in window,Ry=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Vi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $y=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Vi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Uo=new Map,ha=new Map,fi=1,vo=function(e){if(Uo.has(e))return Uo.get(e);for(;ha.has(fi);)fi++;var t=fi++;return Uo.set(e,t),ha.set(t,e),t},My=function(e){return ha.get(e)},jy=function(e,t){t>=fi&&(fi=t+1),Uo.set(e,t),ha.set(t,e)},Dy="style["+_r+'][data-styled-version="5.3.5"]',zy=new RegExp("^"+_r+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ay=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Ny=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(zy);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(jy(u,s),Ay(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Iy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},vm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(_r))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_r,"active"),r.setAttribute("data-styled-version","5.3.5");var l=Iy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Fy=function(){function e(n){var r=this.element=vm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Vi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Uy=function(){function e(n){var r=this.element=vm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Hy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),uf=Lc,Wy={isServer:!Lc,useCSSOMInjection:!Ry},gm=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=qt({},Wy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lc&&uf&&(uf=!1,function(o){for(var l=document.querySelectorAll(Dy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(_r)!=="active"&&(Ny(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return vo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Hy(l):o?new Fy(l):new Uy(l),new $y(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(vo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(vo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(vo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=My(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var d=_r+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(f){f.length>0&&(c+=f+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),By=/(a)(d)/gi,cf=function(e){return String.fromCharCode(e+(e>25?39:97))};function iu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=cf(t%52)+n;return(cf(t%52)+n).replace(By,"$1-$2")}var sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ym=function(e){return sr(5381,e)};function qy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mi(n)&&!Tc(n))return!1}return!0}var Vy=ym("5.3.5"),Qy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qy(t),this.componentId=n,this.baseHash=sr(Vy,n),this.baseStyle=r,gm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Cr(this.rules,t,n,r).join(""),a=iu(sr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=sr(this.baseHash,r.hash),c="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")c+=h;else if(h){var m=Cr(h,t,n,r),y=Array.isArray(m)?m.join(""):m;d=sr(d,y+f),c+=y}}if(c){var k=iu(d>>>0);if(!n.hasNameForId(i,k)){var v=r(c,"."+k,void 0,i);n.insertRules(i,k,v)}o.push(k)}}return o.join(" ")},e}(),Gy=/^\s*\/\/.*$/gm,Yy=[":","[",".","#"];function Xy(e){var t,n,r,i,o=e===void 0?yn:e,l=o.options,a=l===void 0?yn:l,s=o.plugins,u=s===void 0?pa:s,d=new xy(a),c=[],f=function(y){function k(v){if(v)try{y(v+"}")}catch{}}return function(v,p,g,S,C,O,b,E,R,M){switch(v){case 1:if(R===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(E===0)return p+"/*|*/";break;case 3:switch(E){case 102:case 112:return y(g[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(y){c.push(y)}),h=function(y,k,v){return k===0&&Yy.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function m(y,k,v,p){p===void 0&&(p="&");var g=y.replace(Gy,""),S=k&&v?v+" "+k+" { "+g+" }":g;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(v||!k?"":k,S)}return d.use([].concat(u,[function(y,k,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var k=c;return c=[],k}}])),m.hash=u.length?u.reduce(function(y,k){return k.name||Vi(15),sr(y,k.name)},5381).toString():"",m}var wm=Rr.createContext();wm.Consumer;var xm=Rr.createContext(),Ky=(xm.Consumer,new gm),ou=Xy();function Jy(){return K.exports.useContext(wm)||Ky}function Zy(){return K.exports.useContext(xm)||ou}var ew=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ou);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Vi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ou),this.name+t.hash},e}(),tw=/([A-Z])/,nw=/([A-Z])/g,rw=/^ms-/,iw=function(e){return"-"+e.toLowerCase()};function df(e){return tw.test(e)?e.replace(nw,iw).replace(rw,"-ms-"):e}var ff=function(e){return e==null||e===!1||e===""};function Cr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Cr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ff(e))return"";if(Tc(e))return"."+e.styledComponentId;if(Mi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Cr(s,t,n,r)}var u;return e instanceof ew?n?(e.inject(n,r),e.getName(r)):e:ru(e)?function d(c,f){var h,m,y=[];for(var k in c)c.hasOwnProperty(k)&&!ff(c[k])&&(Array.isArray(c[k])&&c[k].isCss||Mi(c[k])?y.push(df(k)+":",c[k],";"):ru(c[k])?y.push.apply(y,d(c[k],k)):y.push(df(k)+": "+(h=k,(m=c[k])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in Sy?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var pf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ow(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Mi(e)||ru(e)?pf(Cr(lf(pa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:pf(Cr(lf(e,n)))}var aw=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},lw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sw=/(^-|-$)/g;function Hl(e){return e.replace(lw,"-").replace(sw,"")}var uw=function(e){return iu(ym(e)>>>0)};function go(e){return typeof e=="string"&&!0}var au=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},cw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function dw(e,t,n){var r=e[n];au(t)&&au(r)?Sm(r,t):e[n]=t}function Sm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(au(l))for(var a in l)cw(a)&&dw(e,l[a],a)}return e}var Em=Rr.createContext();Em.Consumer;var Wl={};function km(e,t,n){var r=Tc(e),i=!go(e),o=t.attrs,l=o===void 0?pa:o,a=t.componentId,s=a===void 0?function(p,g){var S=typeof p!="string"?"sc":Hl(p);Wl[S]=(Wl[S]||0)+1;var C=S+"-"+uw("5.3.5"+S+Wl[S]);return g?g+"-"+C:C}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(p){return go(p)?"styled."+p:"Styled("+sf(p)+")"}(e):u,c=t.displayName&&t.componentId?Hl(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,g,S){return e.shouldForwardProp(p,g,S)&&t.shouldForwardProp(p,g,S)}:e.shouldForwardProp);var m,y=new Qy(n,c,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,v=function(p,g){return function(S,C,O,b){var E=S.attrs,R=S.componentStyle,M=S.defaultProps,D=S.foldedComponentIds,A=S.shouldForwardProp,z=S.styledComponentId,N=S.target,I=function(F,T,J){F===void 0&&(F=yn);var W=qt({},T,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Oe,Ne=ie;for(se in Mi(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Oe=Ne[se],ne&&Oe?ne+" "+Oe:ne||Oe):Ne[se]}),[W,ee]}(aw(C,K.exports.useContext(Em),M)||yn,C,E),Q=I[0],$=I[1],P=function(F,T,J,W){var ee=Jy(),ie=Zy(),se=T?F.generateAndInjectStyles(yn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(R,b,Q),j=O,H=$.$as||C.$as||$.as||C.as||N,q=go(H),U=$!==C?qt({},C,{},$):C,_={};for(var V in U)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?_.as=U[V]:(A?A(V,nf,H):!q||nf(V))&&(_[V]=U[V]));return C.style&&$.style!==C.style&&(_.style=qt({},C.style,{},$.style)),_.className=Array.prototype.concat(D,z,P!==z?P:null,C.className,$.className).filter(Boolean).join(" "),_.ref=j,K.exports.createElement(H,_)}(m,p,g,k)};return v.displayName=d,(m=Rr.forwardRef(v)).attrs=f,m.componentStyle=y,m.displayName=d,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):pa,m.styledComponentId=c,m.target=r?e.target:e,m.withComponent=function(p){var g=t.componentId,S=function(O,b){if(O==null)return{};var E,R,M={},D=Object.keys(O);for(R=0;R<D.length;R++)E=D[R],b.indexOf(E)>=0||(M[E]=O[E]);return M}(t,["componentId"]),C=g&&g+"-"+(go(p)?p:Hl(sf(p)));return km(p,qt({},S,{attrs:f,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Sm({},e.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&mm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var lu=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Ya.exports.isValidElementType(r))return Vi(1,String(r));var o=function(){return n(r,i,ow.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,qt({},i,{},l))},o.attrs=function(l){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){lu[e]=lu(e)});const L=lu,x={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},fw=L.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${x.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,pw=L.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${x.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${x.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,hw=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,mw=L.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${x.extraLargeDesktop}){
        width: 1vw;
    }
`,vw=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,gw=L.div`
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

    @media screen and (min-width: ${x.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${x.largeDesktop}){
        width: 15vw;
    }
`;L.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const hf=L.div`
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
        
        @media screen and (min-width: ${x.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${x.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,yw=L.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: 1023px){
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
 */var ww=K.exports,xw=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),Ew=Object.prototype.hasOwnProperty,kw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bw={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ew.call(t,r)&&!bw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xw,type:e,key:o,ref:l,props:i,_owner:kw.current}}ll.Fragment=Sw;ll.jsx=bm;ll.jsxs=bm;(function(e){e.exports=ll})(al);const Un=al.exports.Fragment,w=al.exports.jsx,Y=al.exports.jsxs,_w=()=>{const[e,t]=K.exports.useState(!1);return w(yw,{children:Y(fw,{children:[w(yo,{children:w(Ct,{to:"/",children:"Home"})}),w(yo,{children:w(Ct,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(yo,{children:Y(hw,{onClick:()=>t(!e),children:[Y(vw,{children:[w(pw,{children:"Servi\xE7os"}),w(mw,{activeStyle:e,src:hy,alt:"Seta"})]}),Y(gw,{activeStyle:e,children:[w(hf,{children:w(Ct,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(hf,{children:w(Ct,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(yo,{children:w(Ct,{to:"/contatos",children:"Contato"})})]})})},qr=L.div`
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

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,Cw=L.div`
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

    @media screen and (min-width: ${x.notebook}){
        visibility: hidden;
    }   
`,Ow=({status:e,toogle:t})=>Y(Cw,{activeStyle:e,children:[w(qr,{children:w(Ct,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(qr,{children:w(Ct,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(qr,{children:w(Ct,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(qr,{children:w(Ct,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(qr,{children:w(Ct,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Bl=L.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,Pw=L.div`
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
    @media screen and (max-width: ${x.notebook}){
        display: flex;
        margin-right: 20px;
    }
`,Tw=({status:e})=>(console.log(e),Y(Pw,{children:[w(Bl,{active:e,type:"first-line"}),w(Bl,{active:e,type:"mid-line"}),w(Bl,{active:e,type:"last-line"})]})),Lw=L.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${x.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${x.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`,Rw=L.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${x.notebook}){
        justify-content: space-between;
        align-items: center;
    }
`,$w=L.div`
    margin-right: 7%;
`,Mw=()=>{const[e,t]=K.exports.useState(!1);return Y(Rw,{children:[w(Ct,{to:"/",children:w(Lw,{src:py,alt:"Logo Serra Jr"})}),w($w,{onClick:()=>{t(!e)},children:w(Tw,{status:e})}),w(_w,{}),w(Ow,{status:e,toogle:t})]})},jw=L.div`
	margin: 0;   
`,Dw=L.a`
	
`,zw=L.img`
    width: 150px;
	margin: 0 20px;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${x.largeMobile}) {
	    width: 150px;
    }
    @media screen and (max-width: ${x.mobile}){
        width: 120px;
    }
    @media screen and (min-width: ${x.desktop}) {
	    width: 180px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
	    width: 240px;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
	    width: 380px;
    }
    @media screen and (max-width: ${x.notebook}){
        width: 120px;
    }
`,ve=({image:e,altText:t,redirect:n})=>w(jw,{children:w(Dw,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(zw,{src:e,alt:t})})}),Vr=""+new URL("voitto.e51ea618.svg",import.meta.url).href,Qr=""+new URL("iprj.03355e19.svg",import.meta.url).href,Gr=""+new URL("inovafri.c4b07fe0.svg",import.meta.url).href,Yr=""+new URL("wiseup.d9d06fa3.svg",import.meta.url).href,Xr=""+new URL("ligajr.52feeabf.svg",import.meta.url).href,Aw=L.div`
    background: #D9D9D9;
	-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
	overflow: hidden;
	position: relative;
	width: 100%;
    height: 21vh;


    @media screen and (max-width: ${x.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${x.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
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
`,Nw=L.div`
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
`;function Iw(){return w(Aw,{children:Y(Nw,{children:[w(ve,{image:Vr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Gr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Yr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Xr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Vr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Gr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Yr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Xr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Vr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Gr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Yr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Xr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Vr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Gr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Yr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Xr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"}),w(ve,{image:Vr,altText:"Voitto",redirect:"https://www.voitto.com.br"}),w(ve,{image:Qr,altText:"IPRJ",redirect:"http://www.iprj.uerj.br/"}),w(ve,{image:Gr,altText:"Inova Fri",redirect:"https://inovafri.com.br/"}),w(ve,{image:Yr,altText:"WiseUp",redirect:"https://wiseup.com/"}),w(ve,{image:Xr,altText:"Liga J\xFAnior",redirect:"https://www.instagram.com/ligajuniornf/"})]})})}const Fw=L.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,Uw=L.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,ql=L.div`
    margin-left: 1rem;
    width: 100%;
    @media screen and (min-width: ${x.mobile}){
        flex-direction: column;
    }
`,Vl=L.span`
    color: white;
    font-weight: 500;
`,wo=L.p`
    color: rgb(180, 180, 180);
`,Hw=L.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${x.mobile}) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: ${x.largeMobile}) {
        flex-direction: column;
    }

    @media screen and (min-width: ${x.largeDesktop}){
        width: 50%;
    }

`,Ql=L.img`
    width: 1.2rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${x.mobile}) {
        margin-top: 30%;
    }
    @media screen and (min-width: ${x.desktop}) {
        width: 2rem;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 3.5rem;
    }
`,Gl=L.a`
    text-decoration: none;

`,Ww=L.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${x.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }
`,Bw=L.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${x.desktop}) {
        font-size: 1.5em;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 3em;
    }
`,qw=L.hr`
    width: 90%;
`,Vw=L.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,Qw=L.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;

    @media screen and (min-width: ${x.desktop}) {
        font-size: 2em;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 3em;
    }
`,Gw=L.div`
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

    @media screen and (max-width: ${x.notebook}){
        height: 10vh;
        
    }
    
`;const Yw=L.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,mf=L.span`
    margin: 12px;   
    margin-top: 0;
    margin-bottom: 0;
    
`,Xw=""+new URL("facebook.e9ec1758.svg",import.meta.url).href,Kw=""+new URL("instagram.a8d6cb3d.svg",import.meta.url).href,Jw=""+new URL("linkedin.3daaec60.svg",import.meta.url).href,Zw=()=>Y(Fw,{children:[Y(Yw,{children:[w(Qw,{children:"Parceiros"}),w(Gw,{children:w(Iw,{})})]}),Y(Bw,{children:[Y(Uw,{children:[Y(Ww,{children:[Y(Gl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Ql,{src:Xw,alt:"Facebook Serra.Jr"})]}),Y(Gl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Ql,{src:Kw,alt:"Instagram Serra.Jr"})]}),Y(Gl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Ql,{src:Jw,alt:""})," "]})]}),Y(Hw,{children:[Y(ql,{children:[w(Vl,{children:"Institucional"}),w(wo,{children:"Serra Jr Engenharia"})]}),Y(ql,{children:[w(Vl,{children:"Atendimento"}),w(wo,{children:"Segunda a sexta"}),w(wo,{children:"9h \xE0s 19h"})]}),Y(ql,{children:[w(Vl,{children:"Contato"}),w(wo,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(qw,{}),Y(Vw,{children:[w(mf,{children:"\xA9 Serra Jr. Engenharia 2022"}),w(mf,{children:"Todos os direitos reservados"})]})]})]});var _m={exports:{}};(function(e,t){(function(n,r){e.exports=r(K.exports)})(typeof self<"u"?self:Jr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>$});var d=u(4087),c=u.n(d);const f=function(P){return new RegExp(/<[a-z][\s\S]*>/i).test(P)},h=function(P){var j=document.createElement("div");return j.innerHTML=P,j.childNodes},m=function(P,j){return Math.floor(Math.random()*(j-P+1))+P};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",v="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",S="CALL_FUNCTION",C="ADD_HTML_TAG_ELEMENT",O="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",E="CHANGE_CURSOR",R="PASTE_STRING",M="HTML_TAG";function D(P,j){var H=Object.keys(P);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(P);j&&(q=q.filter(function(U){return Object.getOwnPropertyDescriptor(P,U).enumerable})),H.push.apply(H,q)}return H}function A(P){for(var j=1;j<arguments.length;j++){var H=arguments[j]!=null?arguments[j]:{};j%2?D(Object(H),!0).forEach(function(q){Q(P,q,H[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(H)):D(Object(H)).forEach(function(q){Object.defineProperty(P,q,Object.getOwnPropertyDescriptor(H,q))})}return P}function z(P){return function(j){if(Array.isArray(j))return N(j)}(P)||function(j){if(typeof Symbol<"u"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}(P)||function(j,H){if(j){if(typeof j=="string")return N(j,H);var q=Object.prototype.toString.call(j).slice(8,-1);return q==="Object"&&j.constructor&&(q=j.constructor.name),q==="Map"||q==="Set"?Array.from(j):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?N(j,H):void 0}}(P)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(P,j){(j==null||j>P.length)&&(j=P.length);for(var H=0,q=new Array(j);H<j;H++)q[H]=P[H];return q}function I(P,j){for(var H=0;H<j.length;H++){var q=j[H];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(P,q.key,q)}}function Q(P,j,H){return j in P?Object.defineProperty(P,j,{value:H,enumerable:!0,configurable:!0,writable:!0}):P[j]=H,P}const $=function(){function P(q,U){var _=this;if(function(F,T){if(!(F instanceof T))throw new TypeError("Cannot call a class as a function")}(this,P),Q(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Q(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Q(this,"setupWrapperElement",function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))}),Q(this,"start",function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_}),Q(this,"pause",function(){return _.state.eventLoopPaused=!0,_}),Q(this,"stop",function(){return _.state.eventLoop&&((0,d.cancel)(_.state.eventLoop),_.state.eventLoop=null),_}),Q(this,"pauseFor",function(F){return _.addEventToQueue(g,{ms:F}),_}),Q(this,"typeOutAllStrings",function(){return typeof _.options.strings=="string"?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach(function(F){_.typeString(F).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)}),_)}),Q(this,"typeString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return _.typeOutHTMLString(F,T);if(F){var J=_.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");_.typeCharacters(ee,T)}return _}),Q(this,"pasteString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?_.typeOutHTMLString(F,T,!0):(F&&_.addEventToQueue(R,{character:F,node:T}),_)}),Q(this,"typeOutHTMLString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",_.addEventToQueue(C,{node:ie,parentNode:T}),J?_.pasteString(se,ie):_.typeString(se,ie)):ie.textContent&&(J?_.pasteString(ie.textContent,T):_.typeString(ie.textContent,T))}return _}),Q(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return _.addEventToQueue(v,{speed:F}),_}),Q(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return _.addEventToQueue(O,{speed:F}),_}),Q(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return _.addEventToQueue(b,{delay:F}),_}),Q(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return _.addEventToQueue(E,{cursor:F}),_}),Q(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var T=0;T<F;T++)_.addEventToQueue(k);return _}),Q(this,"callFunction",function(F,T){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return _.addEventToQueue(S,{cb:F,thisArg:T}),_}),Q(this,"typeCharacters",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){_.addEventToQueue(y,{character:J,node:T})}),_}),Q(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){_.addEventToQueue(k)}),_}),Q(this,"addEventToQueue",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.addEventToStateProperty(F,T,J,"eventQueue")}),Q(this,"addReverseCalledEvent",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=_.options.loop;return W?_.addEventToStateProperty(F,T,J,"reverseCalledEvents"):_}),Q(this,"addEventToStateProperty",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:T||{}};return _.state[W]=J?[ee].concat(z(_.state[W])):[].concat(z(_.state[W]),[ee]),_}),Q(this,"runEventLoop",function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var F=Date.now(),T=F-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=z(_.state.calledEvents),_.state.calledEvents=[],_.options=A({},_.state.initialOptions)}if(_.state.eventLoop=c()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(F<_.state.pauseUntil)return;_.state.pauseUntil=null}var J,W=z(_.state.eventQueue),ee=W.shift();if(!(T<=(J=ee.eventName===p||ee.eventName===k?_.options.deleteSpeed==="natural"?m(40,80):_.options.deleteSpeed:_.options.delay==="natural"?m(120,160):_.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(_.logInDevMode({currentEvent:ee,state:_.state,delay:J}),ie){case R:case y:var ne=se.character,Oe=se.node,Ne=document.createTextNode(ne),oe=Ne;_.options.onCreateTextNode&&typeof _.options.onCreateTextNode=="function"&&(oe=_.options.onCreateTextNode(ne,Ne)),oe&&(Oe?Oe.appendChild(oe):_.state.elements.wrapper.appendChild(oe)),_.state.visibleNodes=[].concat(z(_.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case k:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var je=ee.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(je);break;case S:var ce=ee.eventArgs,Re=ce.cb,bn=ce.thisArg;Re.call(bn,{elements:_.state.elements});break;case C:var Pe=ee.eventArgs,Jt=Pe.node,Ft=Pe.parentNode;Ft?Ft.appendChild(Jt):_.state.elements.wrapper.appendChild(Jt),_.state.visibleNodes=[].concat(z(_.state.visibleNodes),[{type:M,node:Jt,parentNode:Ft||_.state.elements.wrapper}]);break;case v:var ot=_.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:O,eventArgs:{speed:te,temp:!0}});for(var Vn=0,zr=ot.length;Vn<zr;Vn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:O,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var Mt=ee.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var ml=_.state.visibleNodes.pop(),vv=ml.type,Ki=ml.node,gv=ml.character;_.options.onRemoveNode&&typeof _.options.onRemoveNode=="function"&&_.options.onRemoveNode({node:Ki,character:gv}),Ki&&Ki.parentNode.removeChild(Ki),vv===M&&Mt&&W.unshift({eventName:p,eventArgs:{}})}break;case O:_.options.deleteSpeed=ee.eventArgs.speed;break;case b:_.options.delay=ee.eventArgs.delay;break;case E:_.options.cursor=ee.eventArgs.cursor,_.state.elements.cursor.innerHTML=ee.eventArgs.cursor}_.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(_.state.calledEvents=[].concat(z(_.state.calledEvents),[ee]))),_.state.eventQueue=W,_.state.lastFrameTime=F}}}),q)if(typeof q=="string"){var V=document.querySelector(q);if(!V)throw new Error("Could not find container element");this.state.elements.container=V}else this.state.elements.container=q;U&&(this.options=A(A({},this.options),U)),this.state.initialOptions=A({},this.options),this.init()}var j,H;return j=P,(H=[{key:"init",value:function(){var q,U;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(q=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(U=document.createElement("style")).appendChild(document.createTextNode(q)),document.head.appendChild(U),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(q){this.options.devMode&&console.log(q)}}])&&I(j.prototype,H),Object.defineProperty(j,"prototype",{writable:!1}),P}()},8552:(a,s,u)=>{var d=u(852)(u(5639),"DataView");a.exports=d},1989:(a,s,u)=>{var d=u(1789),c=u(401),f=u(7667),h=u(1327),m=u(1866);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,s,u)=>{var d=u(7040),c=u(4125),f=u(2117),h=u(7518),m=u(4705);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,s,u)=>{var d=u(852)(u(5639),"Map");a.exports=d},3369:(a,s,u)=>{var d=u(4785),c=u(1285),f=u(6e3),h=u(9916),m=u(5265);function y(k){var v=-1,p=k==null?0:k.length;for(this.clear();++v<p;){var g=k[v];this.set(g[0],g[1])}}y.prototype.clear=d,y.prototype.delete=c,y.prototype.get=f,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,s,u)=>{var d=u(852)(u(5639),"Promise");a.exports=d},8525:(a,s,u)=>{var d=u(852)(u(5639),"Set");a.exports=d},8668:(a,s,u)=>{var d=u(3369),c=u(619),f=u(2385);function h(m){var y=-1,k=m==null?0:m.length;for(this.__data__=new d;++y<k;)this.add(m[y])}h.prototype.add=h.prototype.push=c,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var d=u(8407),c=u(7465),f=u(3779),h=u(7599),m=u(4758),y=u(4309);function k(v){var p=this.__data__=new d(v);this.size=p.size}k.prototype.clear=c,k.prototype.delete=f,k.prototype.get=h,k.prototype.has=m,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var d=u(5639).Symbol;a.exports=d},1149:(a,s,u)=>{var d=u(5639).Uint8Array;a.exports=d},577:(a,s,u)=>{var d=u(852)(u(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length,f=0,h=[];++d<c;){var m=s[d];u(m,d,s)&&(h[f++]=m)}return h}},4636:(a,s,u)=>{var d=u(2545),c=u(5694),f=u(1469),h=u(4144),m=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(v,p){var g=f(v),S=!g&&c(v),C=!g&&!S&&h(v),O=!g&&!S&&!C&&y(v),b=g||S||C||O,E=b?d(v.length,String):[],R=E.length;for(var M in v)!p&&!k.call(v,M)||b&&(M=="length"||C&&(M=="offset"||M=="parent")||O&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||m(M,R))||E.push(M);return E}},2488:a=>{a.exports=function(s,u){for(var d=-1,c=u.length,f=s.length;++d<c;)s[f+d]=u[d];return s}},2908:a=>{a.exports=function(s,u){for(var d=-1,c=s==null?0:s.length;++d<c;)if(u(s[d],d,s))return!0;return!1}},8470:(a,s,u)=>{var d=u(7813);a.exports=function(c,f){for(var h=c.length;h--;)if(d(c[h][0],f))return h;return-1}},8866:(a,s,u)=>{var d=u(2488),c=u(1469);a.exports=function(f,h,m){var y=h(f);return c(f)?y:d(y,m(f))}},4239:(a,s,u)=>{var d=u(2705),c=u(9607),f=u(2333),h=d?d.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?c(m):f(m)}},9454:(a,s,u)=>{var d=u(4239),c=u(7005);a.exports=function(f){return c(f)&&d(f)=="[object Arguments]"}},939:(a,s,u)=>{var d=u(2492),c=u(7005);a.exports=function f(h,m,y,k,v){return h===m||(h==null||m==null||!c(h)&&!c(m)?h!=h&&m!=m:d(h,m,y,k,f,v))}},2492:(a,s,u)=>{var d=u(6384),c=u(7114),f=u(8351),h=u(6096),m=u(4160),y=u(1469),k=u(4144),v=u(6719),p="[object Arguments]",g="[object Array]",S="[object Object]",C=Object.prototype.hasOwnProperty;a.exports=function(O,b,E,R,M,D){var A=y(O),z=y(b),N=A?g:m(O),I=z?g:m(b),Q=(N=N==p?S:N)==S,$=(I=I==p?S:I)==S,P=N==I;if(P&&k(O)){if(!k(b))return!1;A=!0,Q=!1}if(P&&!Q)return D||(D=new d),A||v(O)?c(O,b,E,R,M,D):f(O,b,N,E,R,M,D);if(!(1&E)){var j=Q&&C.call(O,"__wrapped__"),H=$&&C.call(b,"__wrapped__");if(j||H){var q=j?O.value():O,U=H?b.value():b;return D||(D=new d),M(q,U,E,R,D)}}return!!P&&(D||(D=new d),h(O,b,E,R,M,D))}},8458:(a,s,u)=>{var d=u(3560),c=u(5346),f=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,v=y.toString,p=k.hasOwnProperty,g=RegExp("^"+v.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(S){return!(!f(S)||c(S))&&(d(S)?g:m).test(h(S))}},8749:(a,s,u)=>{var d=u(4239),c=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return f(m)&&c(m.length)&&!!h[d(m)]}},280:(a,s,u)=>{var d=u(5726),c=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!d(h))return c(h);var m=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(s,u){for(var d=-1,c=Array(s);++d<s;)c[d]=u(d);return c}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var d=u(5639)["__core-js_shared__"];a.exports=d},7114:(a,s,u)=>{var d=u(8668),c=u(2908),f=u(4757);a.exports=function(h,m,y,k,v,p){var g=1&y,S=h.length,C=m.length;if(S!=C&&!(g&&C>S))return!1;var O=p.get(h),b=p.get(m);if(O&&b)return O==m&&b==h;var E=-1,R=!0,M=2&y?new d:void 0;for(p.set(h,m),p.set(m,h);++E<S;){var D=h[E],A=m[E];if(k)var z=g?k(A,D,E,m,h,p):k(D,A,E,h,m,p);if(z!==void 0){if(z)continue;R=!1;break}if(M){if(!c(m,function(N,I){if(!f(M,I)&&(D===N||v(D,N,y,k,p)))return M.push(I)})){R=!1;break}}else if(D!==A&&!v(D,A,y,k,p)){R=!1;break}}return p.delete(h),p.delete(m),R}},8351:(a,s,u)=>{var d=u(2705),c=u(1149),f=u(7813),h=u(7114),m=u(8776),y=u(1814),k=d?d.prototype:void 0,v=k?k.valueOf:void 0;a.exports=function(p,g,S,C,O,b,E){switch(S){case"[object DataView]":if(p.byteLength!=g.byteLength||p.byteOffset!=g.byteOffset)return!1;p=p.buffer,g=g.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=g.byteLength||!b(new c(p),new c(g)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+g);case"[object Error]":return p.name==g.name&&p.message==g.message;case"[object RegExp]":case"[object String]":return p==g+"";case"[object Map]":var R=m;case"[object Set]":var M=1&C;if(R||(R=y),p.size!=g.size&&!M)return!1;var D=E.get(p);if(D)return D==g;C|=2,E.set(p,g);var A=h(R(p),R(g),C,O,b,E);return E.delete(p),A;case"[object Symbol]":if(v)return v.call(p)==v.call(g)}return!1}},6096:(a,s,u)=>{var d=u(8234),c=Object.prototype.hasOwnProperty;a.exports=function(f,h,m,y,k,v){var p=1&m,g=d(f),S=g.length;if(S!=d(h).length&&!p)return!1;for(var C=S;C--;){var O=g[C];if(!(p?O in h:c.call(h,O)))return!1}var b=v.get(f),E=v.get(h);if(b&&E)return b==h&&E==f;var R=!0;v.set(f,h),v.set(h,f);for(var M=p;++C<S;){var D=f[O=g[C]],A=h[O];if(y)var z=p?y(A,D,O,h,f,v):y(D,A,O,f,h,v);if(!(z===void 0?D===A||k(D,A,m,y,v):z)){R=!1;break}M||(M=O=="constructor")}if(R&&!M){var N=f.constructor,I=h.constructor;N==I||!("constructor"in f)||!("constructor"in h)||typeof N=="function"&&N instanceof N&&typeof I=="function"&&I instanceof I||(R=!1)}return v.delete(f),v.delete(h),R}},1957:(a,s,u)=>{var d=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=d},8234:(a,s,u)=>{var d=u(8866),c=u(9551),f=u(3674);a.exports=function(h){return d(h,f,c)}},5050:(a,s,u)=>{var d=u(7019);a.exports=function(c,f){var h=c.__data__;return d(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var d=u(8458),c=u(7801);a.exports=function(f,h){var m=c(f,h);return d(m)?m:void 0}},9607:(a,s,u)=>{var d=u(2705),c=Object.prototype,f=c.hasOwnProperty,h=c.toString,m=d?d.toStringTag:void 0;a.exports=function(y){var k=f.call(y,m),v=y[m];try{y[m]=void 0;var p=!0}catch{}var g=h.call(y);return p&&(k?y[m]=v:delete y[m]),g}},9551:(a,s,u)=>{var d=u(4963),c=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),d(h(y),function(k){return f.call(y,k)}))}:c;a.exports=m},4160:(a,s,u)=>{var d=u(8552),c=u(7071),f=u(3818),h=u(8525),m=u(577),y=u(4239),k=u(346),v="[object Map]",p="[object Promise]",g="[object Set]",S="[object WeakMap]",C="[object DataView]",O=k(d),b=k(c),E=k(f),R=k(h),M=k(m),D=y;(d&&D(new d(new ArrayBuffer(1)))!=C||c&&D(new c)!=v||f&&D(f.resolve())!=p||h&&D(new h)!=g||m&&D(new m)!=S)&&(D=function(A){var z=y(A),N=z=="[object Object]"?A.constructor:void 0,I=N?k(N):"";if(I)switch(I){case O:return C;case b:return v;case E:return p;case R:return g;case M:return S}return z}),a.exports=D},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var d=u(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(d){var m=h[f];return m==="__lodash_hash_undefined__"?void 0:m}return c.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var d=u(4536),c=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return d?h[f]!==void 0:c.call(h,f)}},1866:(a,s,u)=>{var d=u(4536);a.exports=function(c,f){var h=this.__data__;return this.size+=this.has(c)?0:1,h[c]=d&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,d){var c=typeof u;return!!(d=d==null?9007199254740991:d)&&(c=="number"||c!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<d}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var d,c=u(4429),f=(d=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var d=u&&u.constructor;return u===(typeof d=="function"&&d.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var d=u(8470),c=Array.prototype.splice;a.exports=function(f){var h=this.__data__,m=d(h,f);return!(m<0||(m==h.length-1?h.pop():c.call(h,m,1),--this.size,0))}},2117:(a,s,u)=>{var d=u(8470);a.exports=function(c){var f=this.__data__,h=d(f,c);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var d=u(8470);a.exports=function(c){return d(this.__data__,c)>-1}},4705:(a,s,u)=>{var d=u(8470);a.exports=function(c,f){var h=this.__data__,m=d(h,c);return m<0?(++this.size,h.push([c,f])):h[m][1]=f,this}},4785:(a,s,u)=>{var d=u(1989),c=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||c),string:new d}}},1285:(a,s,u)=>{var d=u(5050);a.exports=function(c){var f=d(this,c).delete(c);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).get(c)}},9916:(a,s,u)=>{var d=u(5050);a.exports=function(c){return d(this,c).has(c)}},5265:(a,s,u)=>{var d=u(5050);a.exports=function(c,f){var h=d(this,c),m=h.size;return h.set(c,f),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c,f){d[++u]=[f,c]}),d}},4536:(a,s,u)=>{var d=u(852)(Object,"create");a.exports=d},6916:(a,s,u)=>{var d=u(5569)(Object.keys,Object);a.exports=d},1167:(a,s,u)=>{a=u.nmd(a);var d=u(1957),c=s&&!s.nodeType&&s,f=c&&a&&!a.nodeType&&a,h=f&&f.exports===c&&d.process,m=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(d){return s(u(d))}}},5639:(a,s,u)=>{var d=u(1957),c=typeof self=="object"&&self&&self.Object===Object&&self,f=d||c||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,d=Array(s.size);return s.forEach(function(c){d[++u]=c}),d}},7465:(a,s,u)=>{var d=u(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,d=u.delete(s);return this.size=u.size,d}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var d=u(8407),c=u(7071),f=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof d){var k=y.__data__;if(!c||k.length<199)return k.push([h,m]),this.size=++y.size,this;y=this.__data__=new f(k)}return y.set(h,m),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var d=u(9454),c=u(7005),f=Object.prototype,h=f.hasOwnProperty,m=f.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(k){return c(k)&&h.call(k,"callee")&&!m.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var d=u(3560),c=u(1780);a.exports=function(f){return f!=null&&c(f.length)&&!d(f)}},4144:(a,s,u)=>{a=u.nmd(a);var d=u(5639),c=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f?d.Buffer:void 0,y=(m?m.isBuffer:void 0)||c;a.exports=y},8446:(a,s,u)=>{var d=u(939);a.exports=function(c,f){return d(c,f)}},3560:(a,s,u)=>{var d=u(4239),c=u(3218);a.exports=function(f){if(!c(f))return!1;var h=d(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var d=u(8749),c=u(1717),f=u(1167),h=f&&f.isTypedArray,m=h?c(h):d;a.exports=m},3674:(a,s,u)=>{var d=u(4636),c=u(280),f=u(8612);a.exports=function(h){return f(h)?d(h):c(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,d,c,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,c=(s=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),f=c-h):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var d=u(75),c=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",m=c["request"+h],y=c["cancel"+h]||c["cancelRequest"+h],k=0;!m&&k<f.length;k++)m=c[f[k]+"Request"+h],y=c[f[k]+"Cancel"+h]||c[f[k]+"CancelRequest"+h];if(!m||!y){var v=0,p=0,g=[];m=function(S){if(g.length===0){var C=d(),O=Math.max(0,16.666666666666668-(C-v));v=O+C,setTimeout(function(){var b=g.slice(0);g.length=0;for(var E=0;E<b.length;E++)if(!b[E].cancelled)try{b[E].callback(v)}catch(R){setTimeout(function(){throw R},0)}},Math.round(O))}return g.push({handle:++p,callback:S,cancelled:!1}),p},y=function(S){for(var C=0;C<g.length;C++)g[C].handle===S&&(g[C].cancelled=!0)}}a.exports=function(S){return m.call(c,S)},a.exports.cancel=function(){y.apply(c,arguments)},a.exports.polyfill=function(S){S||(S=c),S.requestAnimationFrame=m,S.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>C});var a=o(8156),s=o.n(a),u=o(7403),d=o(8446),c=o.n(d);function f(O){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(O)}function h(O,b){if(!(O instanceof b))throw new TypeError("Cannot call a class as a function")}function m(O,b){for(var E=0;E<b.length;E++){var R=b[E];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(O,R.key,R)}}function y(O,b){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,R){return E.__proto__=R,E},y(O,b)}function k(O,b){if(b&&(f(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(O)}function v(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function p(O){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},p(O)}function g(O,b,E){return b in O?Object.defineProperty(O,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):O[b]=E,O}var S=function(O){(function(z,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(N&&N.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),N&&y(z,N)})(A,O);var b,E,R,M,D=(R=A,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var z,N=p(R);if(M){var I=p(this).constructor;z=Reflect.construct(N,arguments,I)}else z=N.apply(this,arguments);return k(this,z)});function A(){var z;h(this,A);for(var N=arguments.length,I=new Array(N),Q=0;Q<N;Q++)I[Q]=arguments[Q];return g(v(z=D.call.apply(D,[this].concat(I))),"state",{instance:null}),z}return b=A,(E=[{key:"componentDidMount",value:function(){var z=this,N=new u.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var I=z.props.onInit;I&&I(N)})}},{key:"componentDidUpdate",value:function(z){c()(this.props.options,z.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var z=this,N=this.props.component;return s().createElement(N,{ref:function(I){return z.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(b.prototype,E),Object.defineProperty(b,"prototype",{writable:!1}),A}(a.Component);S.defaultProps={component:"div"};const C=S})(),l.default})())})(_m);const e1=La(_m.exports),t1=L.div`
    width: 100%;

    .writer{
        font-family: 'Courier Prime';
        font-size: 40px;
        color: #001830;
        font-weight: 700;
        @media screen and (max-width: ${x.largeMobile}){
            font-size: 30px;
        }
        @media screen and (min-width: ${x.largeDesktop}){
            font-size: 60px;
        }
        @media screen and (min-width: ${x.extraLargeDesktop}){
            font-size: 80px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${x.largeDesktop}){
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
`,n1=()=>w(t1,{children:w(e1,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),r1=""+new URL("presentation-image.b69cdd6e.svg",import.meta.url).href,i1=L.div`
  background-color: #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: ${x.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
  }
`,o1=L.img`
 
  @media screen and (max-width: ${x.largeMobile}) {
    width: 60%;
    margin-top: 10%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${x.largeMobile}) {
    width: 40%;
    margin-top: 5%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${x.notebook}) {
    width: 25%;
    margin-top: 0;
    margin-bottom: 0;
  }
`,a1=L.div`
  display: block;
  justify-content: center;
  flex-direction: column;
  
  width: 55%;

  @media screen and (max-width: ${x.largeMobile}) {
    height: 200px;
  }
  @media screen and (min-width: ${x.largeMobile}) {
    height: 200px;
  }
  @media screen and (min-width: ${x.tablet}) {
    width: 80%;
    height: 120px;
    margin-top: 4%;
  }
  @media screen and (min-width: ${x.notebook}) {
    width: 45%;
    height: 45%;
  }
`,l1=()=>Y(i1,{children:[w(a1,{children:w(n1,{})}),w(o1,{src:r1,alt:"apresenta\xE7\xE3o"})]}),s1=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 250px;
  
  @media screen and (min-width: ${x.extraLargeDesktop}) {
    width: 290px;
    height: 300px;
  }
 
`,u1=L.img`
  @media screen and (max-width: ${x.notebook}) {
    height: 8vh;
    width: 20vw;
  }
  @media screen and (min-width: ${x.notebook}) {
    height: 10vh;
    width: 8vw;
  }
  @media screen and (min-width: ${x.largeDesktop}) {
    height: 8vh;
    width: 7vw;
  }
`,c1=L.p`
  font-weight: 500;
  min-height: 90px;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
  text-align: center;
  color: #000000; 
  
  @media screen and (max-width: ${x.notebook}) {
    font-size: 20px;
    min-height: 60px;
  }
  @media screen and (min-width: ${x.notebook}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${x.largeDesktop}) {
    font-size: 25px;
  }
  @media screen and (min-width: ${x.extraLargeDesktop}) {
    font-size: 35px;
  }
`,d1=({icon:e,text:t,alt:n})=>Y(s1,{children:[w(u1,{src:e,alt:n}),w(c1,{children:t})]}),f1=L.div`
  margin: 2% 1% 2% 1%;
  

  @media screen and (max-width: ${x.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${x.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${x.notebook}) {
    width: 60%;
  }
  @media screen and (min-width: ${x.desktop}) {
    width: 50%;
  }
  @media screen and (min-width: ${x.largeDesktop}) {
    width: calc((100% - 500px)/2);
  }

  @media screen and (min-width: ${x.extraLargeDesktop}) {
    width: calc((100% - 900px)/2);
  }
`,p1=L.p`
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

  @media screen and (min-width: ${x.largeDesktop}) {
    font-size: 45px;
    height: 8rem;
  }
`,h1=L.div`
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
`,m1=L.div`
  background-color: #ededed;
  height: 100%;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

`,v1=L.button`
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

  @media screen and (max-width: ${x.tablet}) {
    width: 60%;
    font-size: 25px;
  }
  @media screen and (min-width: ${x.tablet}) {
    width: 30%;
  }

  @media screen and (min-width: ${x.largeDesktop}) {
    font-size: 40px;
    width: 30%;
    margin-top: 30px;
  }
`,vf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>{const l=Ga();return Y(f1,{children:[w(p1,{titleColor:r,children:e}),Y(h1,{children:[w(m1,{children:i.map((a,s)=>w(d1,{icon:a,text:o[s],alt:o[s]},s))}),w(v1,{onClick:()=>{l(t),window.scrollTo(0,0)},buttonColor:r,children:n})]})]})},g1=""+new URL("Sites.a0112d0d.svg",import.meta.url).href,y1=""+new URL("sistemas-web.d1b27032.svg",import.meta.url).href,w1=""+new URL("manutencao.33f9dd1a.svg",import.meta.url).href,x1=""+new URL("desenho-tecnico.22fbb0fb.svg",import.meta.url).href,S1=""+new URL("braco-robo.2b026e48.svg",import.meta.url).href,E1=""+new URL("impressora-3d.75613d7d.svg",import.meta.url).href,k1=""+new URL("membros-2.457898e5.svg",import.meta.url).href,b1=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;
    /* width: 80%; */

    @media screen and (max-width: ${x.tablet}) {
        font-size: 25px;
    }
    @media screen and (min-width: ${x.tablet}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${x.notebook}) {
        font-size: 35px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 45px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 65px;
    }
`,_1=L.hr`
    margin: 0px;
    border: 0px;
    height: 7px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${x.tablet}) {
        height: 4px;
    }
    @media screen and (max-width: ${x.notebook}) {
        width: 60%;
    }
`,C1=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-top: 0px;
`,O1=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Rc=({text:e,fontSize:t,titleWidth:n})=>w(C1,{children:Y(O1,{children:[w(b1,{style:{fontSize:t},children:e}),w(_1,{gradientWidth:n})]})}),P1=L.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%;
`,T1=L.div`
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

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,L1=L.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;

    @media screen and (max-width: ${x.tablet}) {
        width: 95vw;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    @media screen and (min-width: ${x.tablet}) {
        width: 80vw;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        width: 75vw;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 75vw;
        padding: 80px 0px;
        margin-top: 2%;
        margin-bottom: 2%;
    }
`,R1=L.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${x.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,$1=L.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${x.notebook}) {
        width: 90%;
    }
`,M1=L.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    padding: 20px 20px;

    @media screen and (max-width: ${x.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${x.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${x.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 30px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 50px;
    }
`,j1=L.img`
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: ${x.largeMobile}) {
        width: 85%;
        height: 85%;
    }
    @media screen and (min-width: ${x.largeMobile}) {
        width: 65%;
        height: 65%;
    }
    @media screen and (min-width: ${x.notebook}) {
        width: 33%;
        height: 33%;
    }
    @media screen and (min-width: ${x.desktop}) {
        width: 28%;
        height: 28%;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        width: 25%;
        height: 25%;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 28%;
        height: 28%;
    }

`,D1=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,z1=L.button`
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

    @media screen and (min-width: ${x.desktop}) {
        width: 20%;
        font-size: 30px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        width: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 20%;
        font-size: 60px;
    }
    @media screen and (max-width: ${x.largeMobile}){
        font-size: 25px;
        width: 60%;
    }
`,A1=({title:e,color:t,text:n,image:r})=>{const i=Ga();return Y(P1,{children:[w(T1,{titleColor:t,children:e}),Y(L1,{children:[Y(R1,{children:[w($1,{children:w(M1,{children:n})}),w(j1,{src:r,alt:"Imagem com os membros da Serra Jr. Engenharia"})]}),w(D1,{children:w(z1,{onClick:()=>{i("/quemsomos"),window.scrollTo(0,0)},buttonColor:t,children:"Saiba Mais"})})]})]})},N1=""+new URL("background-image.668c0125.svg",import.meta.url).href,I1=L.div`
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
`,F1=L.div`
  background-image: url(${N1});
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: top;
  width: 100%;
`,U1=()=>Y(F1,{children:[w(Rc,{text:"O que fazemos"}),Y(I1,{children:[w(vf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/computacao",images:[g1,y1],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(vf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/mecanica",color:"#04ADD7",images:[w1,x1,S1,E1],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(A1,{title:"Nossa Hist\xF3ria",color:"#001830",text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:k1})]}),H1=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,W1=()=>Y(Un,{children:[w(l1,{}),w(H1,{children:w(U1,{})})]}),B1=""+new URL("presentation-image.73570450.svg",import.meta.url).href,q1=""+new URL("membros-1.26cb4867.svg",import.meta.url).href,V1=""+new URL("membros-2.457898e5.svg",import.meta.url).href,Q1=""+new URL("missao-icon.4dc65479.svg",import.meta.url).href,G1=""+new URL("visao-icon.75e2e4de.svg",import.meta.url).href,Y1=""+new URL("valores-icon.b6d7390b.svg",import.meta.url).href,Te={members:[q1,V1],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:Q1,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:G1,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:Y1,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia;","Gest\xE3o segura;","Impactar nossa era;","Evolu\xE7\xE3o constante;","Responsabilidade com os clientes."],content:void 0}]},X1=L.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
    font-weight: 400;

    @media screen and (max-width: ${x.largeMobile}) {
        width: 80%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }
    @media screen and (min-width: ${x.largeMobile}){
        width: 80%;
        font-size: 18px;
        line-height: 28px;
    }
    @media screen and (min-width: ${x.tablet}) {
        width: 30%;
        margin: 10px;
        border: 0;
    }
    @media screen and (min-width: ${x.desktop}) {
        font-size: 25px;
        line-height: 35px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 30px;
        line-height: 35px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 40px;
        line-height: 45px;
    }
`,K1=L.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${x.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`,J1=L.p`
    width: 95%;
    text-align: justify;
`,Z1=L.ul`
    width: 100%;
`,ex=L.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
        padding-right: 10px;
        margin-right: 2%;
    }
`,tx=L.img`
    width: 120px;
    height: 100px;

    @media screen and (max-width: ${x.tablet}) {
        width: 100px;
        height: 100px;
    }
    @media screen and (min-width: ${x.tablet}) {
        width: 100px;
        height: 100px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
    }
`,Yl=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Y(X1,{children:[w(tx,{src:e,alt:n}),w(K1,{children:t}),r?w(Z1,{children:o?o.map((l,a)=>w(ex,{children:l},a)):null}):w(J1,{children:i})]});var Cm={},Om={},sl={},Pm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Pm);var nx="Expected a function",gf=0/0,rx="[object Symbol]",ix=/^\s+|\s+$/g,ox=/^[-+]0x[0-9a-f]+$/i,ax=/^0b[01]+$/i,lx=/^0o[0-7]+$/i,sx=parseInt,ux=typeof Jr=="object"&&Jr&&Jr.Object===Object&&Jr,cx=typeof self=="object"&&self&&self.Object===Object&&self,dx=ux||cx||Function("return this")(),fx=Object.prototype,px=fx.toString,hx=Math.max,mx=Math.min,Xl=function(){return dx.Date.now()};function vx(e,t,n){var r,i,o,l,a,s,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(nx);t=yf(t)||0,su(n)&&(d=!!n.leading,c="maxWait"in n,o=c?hx(yf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(O){var b=r,E=i;return r=i=void 0,u=O,l=e.apply(E,b),l}function m(O){return u=O,a=setTimeout(v,t),d?h(O):l}function y(O){var b=O-s,E=O-u,R=t-b;return c?mx(R,o-E):R}function k(O){var b=O-s,E=O-u;return s===void 0||b>=t||b<0||c&&E>=o}function v(){var O=Xl();if(k(O))return p(O);a=setTimeout(v,y(O))}function p(O){return a=void 0,f&&r?h(O):(r=i=void 0,l)}function g(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function S(){return a===void 0?l:p(Xl())}function C(){var O=Xl(),b=k(O);if(r=arguments,i=this,s=O,b){if(a===void 0)return m(s);if(c)return a=setTimeout(v,t),h(s)}return a===void 0&&(a=setTimeout(v,t)),l}return C.cancel=g,C.flush=S,C}function su(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function gx(e){return!!e&&typeof e=="object"}function yx(e){return typeof e=="symbol"||gx(e)&&px.call(e)==rx}function yf(e){if(typeof e=="number")return e;if(yx(e))return gf;if(su(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=su(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ix,"");var n=ax.test(e);return n||lx.test(e)?sx(e.slice(2),n?2:8):ox.test(e)?gf:+e}var wx=vx,Qi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Qi);var G={};Object.defineProperty(G,"__esModule",{value:!0});G.checkSpecKeys=G.checkNavigable=G.changeSlide=G.canUseDOM=G.canGoNext=void 0;G.clamp=Tm;G.swipeStart=G.swipeMove=G.swipeEnd=G.slidesOnRight=G.slidesOnLeft=G.slideHandler=G.siblingDirection=G.safePreventDefault=G.lazyStartIndex=G.lazySlidesOnRight=G.lazySlidesOnLeft=G.lazyEndIndex=G.keyHandler=G.initializedState=G.getWidth=G.getTrackLeft=G.getTrackCSS=G.getTrackAnimateCSS=G.getTotalSlides=G.getSwipeDirection=G.getSlideCount=G.getRequiredLazySlides=G.getPreClones=G.getPostClones=G.getOnDemandLazySlides=G.getNavigableIndexes=G.getHeight=G.extractObject=void 0;var xx=Sx(K.exports);function Sx(e){return e&&e.__esModule?e:{default:e}}function wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wf(Object(n),!0).forEach(function(r){Ex(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ex(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tm(e,t,n){return Math.max(t,Math.min(e,n))}var jn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};G.safePreventDefault=jn;var $c=function(t){for(var n=[],r=Mc(t),i=jc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};G.getOnDemandLazySlides=$c;var kx=function(t){for(var n=[],r=Mc(t),i=jc(t),o=r;o<i;o++)n.push(o);return n};G.getRequiredLazySlides=kx;var Mc=function(t){return t.currentSlide-Lm(t)};G.lazyStartIndex=Mc;var jc=function(t){return t.currentSlide+Rm(t)};G.lazyEndIndex=jc;var Lm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};G.lazySlidesOnLeft=Lm;var Rm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};G.lazySlidesOnRight=Rm;var ma=function(t){return t&&t.offsetWidth||0};G.getWidth=ma;var Dc=function(t){return t&&t.offsetHeight||0};G.getHeight=Dc;var zc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};G.getSwipeDirection=zc;var Ac=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};G.canGoNext=Ac;var bx=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};G.extractObject=bx;var _x=function(t){var n=xx.default.Children.count(t.children),r=t.listRef,i=Math.ceil(ma(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(ma(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Dc(r.querySelector('[data-index="0"]')),d=u*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=$c(we(we({},t),{},{currentSlide:c,lazyLoadedList:f}));f=f.concat(h);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:c,slideHeight:u,listHeight:d,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};G.initializedState=_x;var Cx=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,d=t.centerMode,c=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,m=t.lazyLoadedList;if(n&&r)return{};var y=l,k,v,p,g={},S={},C=o?l:Tm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&m.indexOf(y)<0&&(m=m.concat(y)),g={animating:!0,currentSlide:y,lazyLoadedList:m,targetSlide:y},S={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%c!==0&&(k=a-a%c):k=0):!Ac(t)&&y>u?y=k=u:d&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%c!==0&&(k=0):k=a-f),!o&&y+f>=a&&(k=a-f),v=Di(we(we({},t),{},{slideIndex:y})),p=Di(we(we({},t),{},{slideIndex:k})),o||(v===p&&(y=k),v=p),s&&(m=m.concat($c(we(we({},t),{},{currentSlide:y})))),h?(g={animating:!0,currentSlide:k,trackStyle:Nc(we(we({},t),{},{left:v})),lazyLoadedList:m,targetSlide:C},S={animating:!1,currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),swipeLeft:null,targetSlide:C}):g={currentSlide:k,trackStyle:ji(we(we({},t),{},{left:p})),lazyLoadedList:m,targetSlide:C};return{state:g,nextState:S}};G.slideHandler=Cx;var Ox=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,d=t.slideCount,c=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,m=t.infinite;if(l=d%s!==0,r=l?0:(d-c)%s,n.message==="previous")o=r===0?s:u-r,a=c-o,h&&!m&&(i=c-o,a=i===-1?d-1:i),m||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=c+o,h&&!m&&(a=(c+s)%d+r),m||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var y=Dm(we(we({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-d:a<n.currentSlide&&y==="right"&&(a=a+d)}}else n.message==="index"&&(a=Number(n.index));return a};G.changeSlide=Ox;var Px=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};G.keyHandler=Px;var Tx=function(t,n,r){return t.target.tagName==="IMG"&&jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};G.swipeStart=Tx;var Lx=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,d=n.edgeFriction,c=n.edgeDragged,f=n.onEdge,h=n.swiped,m=n.swiping,y=n.slideCount,k=n.slidesToScroll,v=n.infinite,p=n.touchObject,g=n.swipeEvent,S=n.listHeight,C=n.listWidth;if(!r){if(i)return jn(t);o&&l&&a&&jn(t);var O,b={},E=Di(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var R=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&R>10)return{scrolling:!0};a&&(p.swipeLength=R);var M=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(M=p.curY>p.startY?1:-1);var D=Math.ceil(y/k),A=zc(n.touchObject,a),z=p.swipeLength;return v||(u===0&&(A==="right"||A==="down")||u+1>=D&&(A==="left"||A==="up")||!Ac(n)&&(A==="left"||A==="up"))&&(z=p.swipeLength*d,c===!1&&f&&(f(A),b.edgeDragged=!0)),!h&&g&&(g(A),b.swiped=!0),o?O=E+z*(S/C)*M:s?O=E-z*M:O=E+z*M,a&&(O=E+z*M),b=we(we({},b),{},{touchObject:p,swipeLeft:O,trackStyle:ji(we(we({},n),{},{left:O}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(b.swiping=!0,jn(t)),b}};G.swipeMove=Lx;var Rx=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,d=n.swipeToSlide,c=n.scrolling,f=n.onSwipe,h=n.targetSlide,m=n.currentSlide,y=n.infinite;if(!r)return i&&jn(t),{};var k=s?u/a:l/a,v=zc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!o.swipeLength)return p;if(o.swipeLength>k){jn(t),f&&f(v);var g,S,C=y?m:h;switch(v){case"left":case"up":S=C+cu(n),g=d?uu(n,S):S,p.currentDirection=0;break;case"right":case"down":S=C-cu(n),g=d?uu(n,S):S,p.currentDirection=1;break;default:g=C}p.triggerSlideHandler=g}else{var O=Di(n);p.trackStyle=Nc(we(we({},n),{},{left:O}))}return p};G.swipeEnd=Rx;var $m=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};G.getNavigableIndexes=$m;var uu=function(t,n){var r=$m(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};G.checkNavigable=uu;var cu=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Dc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+ma(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};G.getSlideCount=cu;var ul=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};G.checkSpecKeys=ul;var ji=function(t){ul(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=jm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=we(we({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};G.getTrackCSS=ji;var Nc=function(t){ul(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ji(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};G.getTrackAnimateCSS=Nc;var Di=function(t){if(t.unslick)return 0;ul(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,d=t.listWidth,c=t.variableWidth,f=t.slideHeight,h=t.fade,m=t.vertical,y=0,k,v,p=0;if(h||t.slideCount===1)return 0;var g=0;if(i?(g=-pi(t),l%s!==0&&n+s>l&&(g=-(n>l?a-(n-l):l%s)),o&&(g+=parseInt(a/2))):(l%s!==0&&n+s>l&&(g=a-l%s),o&&(g=parseInt(a/2))),y=g*u,p=g*f,m?k=n*f*-1+p:k=n*u*-1+y,c===!0){var S,C=r&&r.node;if(S=n+pi(t),v=C&&C.childNodes[S],k=v?v.offsetLeft*-1:0,o===!0){S=i?n+pi(t):n,v=C&&C.children[S],k=0;for(var O=0;O<S;O++)k-=C&&C.children[O]&&C.children[O].offsetWidth;k-=parseInt(t.centerPadding),k+=v&&(d-v.offsetWidth)/2}}return k};G.getTrackLeft=Di;var pi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};G.getPreClones=pi;var Mm=function(t){return t.unslick||!t.infinite?0:t.slideCount};G.getPostClones=Mm;var jm=function(t){return t.slideCount===1?1:pi(t)+t.slideCount+Mm(t)};G.getTotalSlides=jm;var Dm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+zm(t)?"left":"right":t.targetSlide<t.currentSlide-Am(t)?"right":"left"};G.siblingDirection=Dm;var zm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};G.slidesOnRight=zm;var Am=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};G.slidesOnLeft=Am;var $x=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};G.canUseDOM=$x;var cl={};function du(e){return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},du(e)}Object.defineProperty(cl,"__esModule",{value:!0});cl.Track=void 0;var nn=Nm(K.exports),Kl=Nm(Qi.exports),Jl=G;function Nm(e){return e&&e.__esModule?e:{default:e}}function fu(){return fu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}function Mx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jx(e,t,n){return t&&xf(e.prototype,t),n&&xf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function pu(e,t){return pu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},pu(e,t)}function zx(e){var t=Nx();return function(){var r=va(e),i;if(t){var o=va(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ax(this,i)}}function Ax(e,t){if(t&&(du(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hu(e)}function hu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Nx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function va(e){return va=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},va(e)}function Sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sf(Object(n),!0).forEach(function(r){mu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zl=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},Ix=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},es=function(t,n){return t.key||n},Fx=function(t){var n,r=[],i=[],o=[],l=nn.default.Children.count(t.children),a=(0,Jl.lazyStartIndex)(t),s=(0,Jl.lazyEndIndex)(t);return nn.default.Children.forEach(t.children,function(u,d){var c,f={message:"children",index:d,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(d)>=0?c=u:c=nn.default.createElement("div",null);var h=Ix(Ze(Ze({},t),{},{index:d})),m=c.props.className||"",y=Zl(Ze(Ze({},t),{},{index:d}));if(r.push(nn.default.cloneElement(c,{key:"original"+es(c,d),"data-index":d,className:(0,Kl.default)(y,m),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ze(Ze({outline:"none"},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=l-d;k<=(0,Jl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(c=u),y=Zl(Ze(Ze({},t),{},{index:n})),i.push(nn.default.cloneElement(c,{key:"precloned"+es(c,n),"data-index":n,tabIndex:"-1",className:(0,Kl.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+d,n<s&&(c=u),y=Zl(Ze(Ze({},t),{},{index:n})),o.push(nn.default.cloneElement(c,{key:"postcloned"+es(c,n),"data-index":n,tabIndex:"-1",className:(0,Kl.default)(y,m),"aria-hidden":!y["slick-active"],style:Ze(Ze({},c.props.style||{}),h),onClick:function(p){c.props&&c.props.onClick&&c.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Ux=function(e){Dx(n,e);var t=zx(n);function n(){var r;Mx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),mu(hu(r),"node",null),mu(hu(r),"handleRef",function(a){r.node=a}),r}return jx(n,[{key:"render",value:function(){var i=Fx(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return nn.default.createElement("div",fu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(nn.default.PureComponent);cl.Track=Ux;var dl={};function vu(e){return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vu(e)}Object.defineProperty(dl,"__esModule",{value:!0});dl.Dots=void 0;var xo=Im(K.exports),Hx=Im(Qi.exports),Ef=G;function Im(e){return e&&e.__esModule?e:{default:e}}function kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(n),!0).forEach(function(r){Bx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vx(e,t,n){return t&&bf(e.prototype,t),n&&bf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gu(e,t)}function gu(e,t){return gu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gu(e,t)}function Gx(e){var t=Kx();return function(){var r=ga(e),i;if(t){var o=ga(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Yx(this,i)}}function Yx(e,t){if(t&&(vu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xx(e)}function Xx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ga(e)}var Jx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Zx=function(e){Qx(n,e);var t=Gx(n);function n(){return qx(this,n),t.apply(this,arguments)}return Vx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,d=i.slidesToShow,c=i.slideCount,f=i.currentSlide,h=Jx({slideCount:c,slidesToScroll:u,slidesToShow:d,infinite:s}),m={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var v=(k+1)*u-1,p=s?v:(0,Ef.clamp)(v,0,c-1),g=p-(u-1),S=s?g:(0,Ef.clamp)(g,0,c-1),C=(0,Hx.default)({"slick-active":s?f>=S&&f<=p:f===S}),O={message:"dots",index:k,slidesToScroll:u,currentSlide:f},b=this.clickHandler.bind(this,O);y=y.concat(xo.default.createElement("li",{key:k,className:C},xo.default.cloneElement(this.props.customPaging(k),{onClick:b})))}return xo.default.cloneElement(this.props.appendDots(y),Wx({className:this.props.dotsClass},m))}}]),n}(xo.default.PureComponent);dl.Dots=Zx;var Or={};function yu(e){return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yu(e)}Object.defineProperty(Or,"__esModule",{value:!0});Or.PrevArrow=Or.NextArrow=void 0;var gr=Um(K.exports),Fm=Um(Qi.exports),eS=G;function Um(e){return e&&e.__esModule?e:{default:e}}function ya(){return ya=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function _f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_f(Object(n),!0).forEach(function(r){tS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wm(e,t,n){return t&&Cf(e.prototype,t),n&&Cf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wu(e,t)}function wu(e,t){return wu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wu(e,t)}function qm(e){var t=iS();return function(){var r=xa(e),i;if(t){var o=xa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return nS(this,i)}}function nS(e,t){if(t&&(yu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rS(e)}function rS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xa(e)}var oS=function(e){Bm(n,e);var t=qm(n);function n(){return Hm(this,n),t.apply(this,arguments)}return Wm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Fm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=gr.default.cloneElement(this.props.prevArrow,wa(wa({},l),a)):s=gr.default.createElement("button",ya({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(gr.default.PureComponent);Or.PrevArrow=oS;var aS=function(e){Bm(n,e);var t=qm(n);function n(){return Hm(this,n),t.apply(this,arguments)}return Wm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,eS.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Fm.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=gr.default.cloneElement(this.props.nextArrow,wa(wa({},l),a)):s=gr.default.createElement("button",ya({key:"1",type:"button"},l)," ","Next"),s}}]),n}(gr.default.PureComponent);Or.NextArrow=aS;var Vm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),xu=typeof window<"u"&&typeof document<"u"&&window.document===document,Sa=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),lS=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Sa):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),sS=2;function uS(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){lS(o)}function a(){var s=Date.now();if(n){if(s-i<sS)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var cS=20,dS=["top","right","bottom","left","width","height","size","weight"],fS=typeof MutationObserver<"u",pS=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=uS(this.refresh.bind(this),cS)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!xu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),fS?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!xu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=dS.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Qm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Pr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Sa},Gm=fl(0,0,0,0);function Ea(e){return parseFloat(e)||0}function Of(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ea(o)},0)}function hS(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Ea(l)}return n}function mS(e){var t=e.getBBox();return fl(0,0,t.width,t.height)}function vS(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Gm;var r=Pr(e).getComputedStyle(e),i=hS(r),o=i.left+i.right,l=i.top+i.bottom,a=Ea(r.width),s=Ea(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Of(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Of(r,"top","bottom")+l)),!yS(e)){var u=Math.round(a+o)-t,d=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(d)!==1&&(s-=d)}return fl(i.left,i.top,a,s)}var gS=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Pr(e).SVGGraphicsElement}:function(e){return e instanceof Pr(e).SVGElement&&typeof e.getBBox=="function"}}();function yS(e){return e===Pr(e).document.documentElement}function wS(e){return xu?gS(e)?mS(e):vS(e):Gm}function xS(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Qm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function fl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var SS=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=fl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=wS(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ES=function(){function e(t,n){var r=xS(n);Qm(this,{target:t,contentRect:r})}return e}(),kS=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Vm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Pr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new SS(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Pr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ES(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ym=typeof WeakMap<"u"?new WeakMap:new Vm,Xm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=pS.getInstance(),r=new kS(t,n,this);Ym.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Xm.prototype[e]=function(){var t;return(t=Ym.get(this))[e].apply(t,arguments)}});var bS=function(){return typeof Sa.ResizeObserver<"u"?Sa.ResizeObserver:Xm}();const _S=Object.freeze(Object.defineProperty({__proto__:null,default:bS},Symbol.toStringTag,{value:"Module"})),CS=Jf(_S);Object.defineProperty(sl,"__esModule",{value:!0});sl.InnerSlider=void 0;var Ge=Gi(K.exports),OS=Gi(Pm),PS=Gi(wx),TS=Gi(Qi.exports),Se=G,LS=cl,RS=dl,Pf=Or,$S=Gi(CS);function Gi(e){return e&&e.__esModule?e:{default:e}}function ka(e){return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ka(e)}function ba(){return ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function MS(e,t){if(e==null)return{};var n=jS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function jS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zS(e,t,n){return t&&Lf(e.prototype,t),n&&Lf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function AS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Su(e,t)}function Su(e,t){return Su=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Su(e,t)}function NS(e){var t=FS();return function(){var r=_a(e),i;if(t){var o=_a(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return IS(this,i)}}function IS(e,t){if(t&&(ka(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function FS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _a(e){return _a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_a(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var US=function(e){AS(n,e);var t=NS(n);function n(r){var i;DS(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Se.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new $S.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Se.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Ge.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Ge.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,PS.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,Se.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var d=(0,Se.getTrackLeft)(l);l=Z(Z({},l),{},{left:d});var c=(0,Se.getTrackCSS)(l);(a||Ge.default.Children.count(i.props.children)!==Ge.default.Children.count(l.children))&&(u.trackStyle=c),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,Se.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),d=(0,Se.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(b){s.push(b.props.style.width),l+=b.props.style.width});for(var c=0;c<u;c++)a+=s[s.length-1-c],l+=s[s.length-1-c];for(var f=0;f<d;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var m={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:m}}var k=Ge.default.Children.count(i.props.children),v=Z(Z(Z({},i.props),i.state),{},{slideCount:k}),p=(0,Se.getPreClones)(v)+(0,Se.getPostClones)(v)+k,g=100/i.props.slidesToShow*p,S=100/p,C=-S*((0,Se.getPreClones)(v)+i.state.currentSlide)*g/100;i.props.centerMode&&(C+=(100-S*g/100)/2);var O={width:g+"%",left:C+"%"};return{slideWidth:S+"%",trackStyle:O}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var d=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var c=u.onclick;u.onclick=function(){c(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=d,u.onerror=function(){d(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,Se.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,Se.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,d=s.beforeChange,c=s.onLazyLoad,f=s.speed,h=s.afterChange,m=i.state.currentSlide,y=(0,Se.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,v=y.nextState;if(!!k){d&&d(m,k.currentSlide);var p=k.lazyLoadedList.filter(function(g){return i.state.lazyLoadedList.indexOf(g)<0});c&&p.length>0&&c(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(m),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),v&&(i.animationEndCallback=setTimeout(function(){var g=v.animating,S=MS(v,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:g})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,Se.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var d=i.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,Se.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Se.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,Se.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,Se.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,Se.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,TS.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,Se.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var d;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var c=(0,Se.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;c=Z(Z({},c),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),d=Ge.default.createElement(RS.Dots,c)}var h,m,y=(0,Se.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Ge.default.createElement(Pf.PrevArrow,y),m=Ge.default.createElement(Pf.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},k),v),g=i.props.touchMove,S={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:g?i.swipeStart:null,onMouseMove:i.state.dragging&&g?i.swipeMove:null,onMouseUp:g?i.swipeEnd:null,onMouseLeave:i.state.dragging&&g?i.swipeEnd:null,onTouchStart:g?i.swipeStart:null,onTouchMove:i.state.dragging&&g?i.swipeMove:null,onTouchEnd:g?i.touchEnd:null,onTouchCancel:i.state.dragging&&g?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},C={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},C={className:l}),Ge.default.createElement("div",C,i.props.unslick?"":h,Ge.default.createElement("div",ba({ref:i.listRefHandler},S),Ge.default.createElement(LS.Track,ba({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":d)}),i.list=null,i.track=null,i.state=Z(Z({},OS.default),{},{currentSlide:i.props.initialSlide,slideCount:Ge.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return zS(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(ka(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Ge.default.Children.count(this.props.children)!==Ge.default.Children.count(i.children)}}]),n}(Ge.default.Component);sl.InnerSlider=US;var HS=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},WS=HS,BS=WS,qS=function(e){var t=/[height|width]$/;return t.test(e)},Rf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=BS(r),qS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},VS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Rf(n),r<e.length-1&&(t+=", ")}),t):Rf(e)},QS=VS,Km={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(K.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Km);var ts,$f;function GS(){if($f)return ts;$f=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ts=e,ts}var ns,Mf;function Jm(){if(Mf)return ns;Mf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return ns={isFunction:n,isArray:t,each:e},ns}var rs,jf;function YS(){if(jf)return rs;jf=1;var e=GS(),t=Jm().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},rs=n,rs}var is,Df;function XS(){if(Df)return is;Df=1;var e=YS(),t=Jm(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,d=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,d)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(c){r(c)&&(c={match:c}),u[l].addHandler(c)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},is=o,is}var os,zf;function KS(){if(zf)return os;zf=1;var e=XS();return os=new e,os}(function(e){function t(E){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(K.exports),r=sl,i=a(QS),o=a(Km),l=G;function a(E){return E&&E.__esModule?E:{default:E}}function s(){return s=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var M=arguments[R];for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(E[D]=M[D])}return E},s.apply(this,arguments)}function u(E,R){var M=Object.keys(E);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(E);R&&(D=D.filter(function(A){return Object.getOwnPropertyDescriptor(E,A).enumerable})),M.push.apply(M,D)}return M}function d(E){for(var R=1;R<arguments.length;R++){var M=arguments[R]!=null?arguments[R]:{};R%2?u(Object(M),!0).forEach(function(D){C(E,D,M[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(M)):u(Object(M)).forEach(function(D){Object.defineProperty(E,D,Object.getOwnPropertyDescriptor(M,D))})}return E}function c(E,R){if(!(E instanceof R))throw new TypeError("Cannot call a class as a function")}function f(E,R){for(var M=0;M<R.length;M++){var D=R[M];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(E,D.key,D)}}function h(E,R,M){return R&&f(E.prototype,R),M&&f(E,M),Object.defineProperty(E,"prototype",{writable:!1}),E}function m(E,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(R&&R.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),R&&y(E,R)}function y(E,R){return y=Object.setPrototypeOf||function(D,A){return D.__proto__=A,D},y(E,R)}function k(E){var R=g();return function(){var D=S(E),A;if(R){var z=S(this).constructor;A=Reflect.construct(D,arguments,z)}else A=D.apply(this,arguments);return v(this,A)}}function v(E,R){if(R&&(t(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(E)}function p(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(E){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)},S(E)}function C(E,R,M){return R in E?Object.defineProperty(E,R,{value:M,enumerable:!0,configurable:!0,writable:!0}):E[R]=M,E}var O=(0,l.canUseDOM)()&&KS(),b=function(E){m(M,E);var R=k(M);function M(D){var A;return c(this,M),A=R.call(this,D),C(p(A),"innerSliderRefHandler",function(z){return A.innerSlider=z}),C(p(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),C(p(A),"slickNext",function(){return A.innerSlider.slickNext()}),C(p(A),"slickGoTo",function(z){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(z,N)}),C(p(A),"slickPause",function(){return A.innerSlider.pause("paused")}),C(p(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return h(M,[{key:"media",value:function(A,z){O.register(A,z),this._responsiveMediaHandlers.push({query:A,handler:z})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var z=this.props.responsive.map(function(I){return I.breakpoint});z.sort(function(I,Q){return I-Q}),z.forEach(function(I,Q){var $;Q===0?$=(0,i.default)({minWidth:0,maxWidth:I}):$=(0,i.default)({minWidth:z[Q-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&A.media($,function(){A.setState({breakpoint:I})})});var N=(0,i.default)({minWidth:z.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(N,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){O.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,z,N;this.state.breakpoint?(N=this.props.responsive.filter(function(V){return V.breakpoint===A.state.breakpoint}),z=N[0].settings==="unslick"?"unslick":d(d(d({},o.default),this.props),N[0].settings)):z=d(d({},o.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(V){return typeof V=="string"?!!V.trim():!!V}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var Q=[],$=null,P=0;P<I.length;P+=z.rows*z.slidesPerRow){for(var j=[],H=P;H<P+z.rows*z.slidesPerRow;H+=z.slidesPerRow){for(var q=[],U=H;U<H+z.slidesPerRow&&(z.variableWidth&&I[U].props.style&&($=I[U].props.style.width),!(U>=I.length));U+=1)q.push(n.default.cloneElement(I[U],{key:100*P+10*H+U,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));j.push(n.default.createElement("div",{key:10*P+H},q))}z.variableWidth?Q.push(n.default.createElement("div",{key:P,style:{width:$}},j)):Q.push(n.default.createElement("div",{key:P},j))}if(z==="unslick"){var _="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:_},I)}else Q.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},z),Q)}}]),M}(n.default.Component);e.default=b})(Om);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Om);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Cm);const Ic=La(Cm);const JS=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,ZS=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${x.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,eE=L.img`
    border-radius: 20px;

    @media screen and (max-width: ${x.tablet}) {
        height: 40vh;
        width: 90vw;
    }

    @media screen and (min-width: ${x.tablet}) {
        height: 40vh;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        height: 30vh;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
       height: 40vh;
    }
`,tE=L.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${x.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,nE=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(tE,{containerWidth:e.width,children:w(Ic,{...t,children:e.carouselData.map((n,r)=>w(JS,{children:w(ZS,{children:w(eE,{src:n,alt:e.alt})})},r))})})},rE=L.div`
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

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,iE=L.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${x.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${x.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,oE=L.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${x.notebook}) {
        flex-direction: column;
        padding-bottom: 4%;
    }

`,aE=L.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: #E6E6E5;
    width: 100%; 
`,lE=L.span`
    font-weight: 400;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 6%;

    @media screen and (max-width: ${x.tablet}) {
        font-size: 18px;
    }

    @media screen and (min-width: ${x.tablet}) {
        font-size: 18px;
    }

    @media screen and (min-width: ${x.desktop}) {
        font-size: 23px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 28px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 48px;
    }
`,sE=L.div`
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${x.notebook}) {
        width: 90%;
    }
`,uE=({title:e,color:t})=>Y(aE,{children:[w(rE,{titleColor:t,children:e}),w(iE,{children:Y(oE,{children:[w(sE,{children:w(lE,{children:Te.membersText})}),w(nE,{width:"50%",carouselData:Te.members,alt:"Imagens dos membros da Serra Jr. Engenharia"})]})})]}),cE=L.div``,dE=L.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${x.tablet}) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap; 
        justify-content: center; 
        align-items: center;
    }
`,Af=L.div`
    border: 1px solid #001830;

    @media screen and (max-width: ${x.tablet}) {
        transform: rotate(90deg);
        margin: 0px;
        height: 8vh;   
    }
    @media screen and (min-width: ${x.tablet}) {
        height: 40vh;   
    }
    @media screen and (min-width: ${x.notebook}) {
        height: 70vh;   
    }
    @media screen and (min-width: ${x.desktop}) {
        height: 60vh;   
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        height: 50vh;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        height: 50vh;
    }
`,fE=()=>Y(cE,{children:[Y(dE,{children:[w(Yl,{image:Te.icons[0].image,imageAlt:Te.icons[0].imageAlt,list:Te.icons[0].list,hasList:Te.icons[0].hasList,content:Te.icons[0].content,titleText:Te.icons[0].titleText}),w(Af,{}),w(Yl,{image:Te.icons[1].image,imageAlt:Te.icons[1].imageAlt,list:Te.icons[1].list,hasList:Te.icons[1].hasList,content:Te.icons[1].content,titleText:Te.icons[1].titleText}),w(Af,{}),w(Yl,{image:Te.icons[2].image,imageAlt:Te.icons[2].imageAlt,list:Te.icons[2].list,hasList:Te.icons[2].hasList,content:Te.icons[2].content,titleText:Te.icons[2].titleText})]}),w(uE,{title:"Quem Somos",color:"#001830"})]}),pE=L.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 0px 100px;
    
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
`,hE=L.div`
   

`,mE=L.p`
    margin: 0px;
    font-family: 'Maven Pro';
    font-weight: 500;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${x.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${x.tablet}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 120px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 180px;
    }    
`,vE=L.img`
    @media screen and (max-width: ${x.largeMobile}) {
        width: 60%;
        margin-top: 10%;
    }

    @media screen and (min-width: ${x.largeMobile}) {
        width: 40%;
        margin-top: 5%;
    }
    @media screen and (min-width: ${x.notebook}) {
        width: 30%;
        margin-top: 0;
    }
`,gE=()=>Y(Un,{children:[w(hE,{children:Y(pE,{children:[w(mE,{children:"Sobre N\xF3s"}),w(vE,{src:B1,alt:"imagem sobre n\xF3s"})]})}),w(fE,{})]}),yE=L.div`
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
`;const wE=L.div`
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
`;const xE=L.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var So=[];function SE(e){var t=K.exports.useState(),n=t[0],r=t[1];return K.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=So.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),So.push(a),function(){a.removeEventListener("load",l),a.remove(),So.splice(So.findIndex(function(s){return s.src===i}),1)}},[e]),n}function EE(e,t){var n=SE(e),r=K.exports.useRef(null),i=K.exports.useState(),o=i[0],l=i[1];return K.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const kE=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=EE("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(yE,{children:w(wE,{children:w(xE,{ref:n})})})},zi={_origin:"https://api.emailjs.com"},bE=(e,t="https://api.emailjs.com")=>{zi._userID=e,zi._origin=t},Zm=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Nf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const ev=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Nf(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Nf(l))}),o.open("POST",zi._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),_E=(e,t,n,r)=>{const i=r||zi._userID;Zm(i,e,t);const o={lib_version:"3.9.1",user_id:i,service_id:e,template_id:t,template_params:n};return ev("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},CE=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},OE=(e,t,n,r)=>{const i=r||zi._userID,o=CE(n);Zm(i,e,t);const l=new FormData(o);return l.append("lib_version","3.9.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),ev("/api/v1.0/email/send-form",l)},PE={init:bE,send:_E,sendForm:OE};var qe={exports:{}},TE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LE=TE,RE=LE;function tv(){}function nv(){}nv.resetWarningCache=tv;var $E=function(){function e(r,i,o,l,a,s){if(s!==RE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nv,resetWarningCache:tv};return n.PropTypes=n,n};qe.exports=$E();function ME(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Eo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var pl=function(e){jE(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(Eo(r)),r.handleErrored=r.handleErrored.bind(Eo(r)),r.handleChange=r.handleChange.bind(Eo(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(Eo(r)),r}var n=t.prototype;return n.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var i=this.props.grecaptcha;if(i&&this._widgetId!==void 0)return i.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var i=this;return new Promise(function(o,l){i.executionResolve=o,i.executionReject=l,i.execute()})},n.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(i){this.props.onChange&&this.props.onChange(i),this.executionResolve&&(this.executionResolve(i),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=this.props.grecaptcha.render(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var i=document.createElement("div");for(document.body.appendChild(i),i.style.display="none";this.captcha.firstChild;)i.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(i)},5e3)},n.handleRecaptchaRef=function(i){this.captcha=i},n.render=function(){var i=this.props;i.sitekey,i.onChange,i.theme,i.type,i.tabindex,i.onExpired,i.onErrored,i.size,i.stoken,i.grecaptcha,i.badge,i.hl;var o=ME(i,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return w("div",{...o,ref:this.handleRecaptchaRef})},t}(Rr.Component);pl.displayName="ReCAPTCHA";pl.propTypes={sitekey:qe.exports.string.isRequired,onChange:qe.exports.func,grecaptcha:qe.exports.object,theme:qe.exports.oneOf(["dark","light"]),type:qe.exports.oneOf(["image","audio"]),tabindex:qe.exports.number,onExpired:qe.exports.func,onErrored:qe.exports.func,size:qe.exports.oneOf(["compact","normal","invisible"]),stoken:qe.exports.string,hl:qe.exports.string,badge:qe.exports.oneOf(["bottomright","bottomleft","inline"])};pl.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function Eu(){return Eu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eu.apply(this,arguments)}function DE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var St={},AE=0;function NE(e,t){return t=t||{},function(r){var i=r.displayName||r.name||"Component",o=function(a){zE(s,a);function s(d,c){var f;return f=a.call(this,d,c)||this,f.state={},f.__scriptURL="",f}var u=s.prototype;return u.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+AE++),this.__scriptLoaderID},u.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},u.asyncScriptLoaderHandleLoad=function(c){var f=this;this.setState(c,function(){return f.props.asyncScriptOnLoad&&f.props.asyncScriptOnLoad(f.state)})},u.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=St[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var f in c.observers)c.observers[f](c);delete window[t.callbackName]},u.componentDidMount=function(){var c=this,f=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),m=t,y=m.globalName,k=m.callbackName,v=m.scriptId;if(y&&typeof window[y]<"u"&&(St[f]={loaded:!0,observers:{}}),St[f]){var p=St[f];if(p&&(p.loaded||p.errored)){this.asyncScriptLoaderHandleLoad(p);return}p.observers[h]=function(b){return c.asyncScriptLoaderHandleLoad(b)};return}var g={};g[h]=function(b){return c.asyncScriptLoaderHandleLoad(b)},St[f]={loaded:!1,observers:g};var S=document.createElement("script");S.src=f,S.async=!0;for(var C in t.attributes)S.setAttribute(C,t.attributes[C]);v&&(S.id=v);var O=function(E){if(St[f]){var R=St[f],M=R.observers;for(var D in M)E(M[D])&&delete M[D]}};k&&typeof window<"u"&&(window[k]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),S.onload=function(){var b=St[f];b&&(b.loaded=!0,O(function(E){return k?!1:(E(b),!0)}))},S.onerror=function(){var b=St[f];b&&(b.errored=!0,O(function(E){return E(b),!0}))},document.body.appendChild(S)},u.componentWillUnmount=function(){var c=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),h=0;h<f.length;h+=1)f[h].src.indexOf(c)>-1&&f[h].parentNode&&f[h].parentNode.removeChild(f[h]);var m=St[c];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete St[c])},u.render=function(){var c=t.globalName,f=this.props;f.asyncScriptOnLoad;var h=f.forwardedRef,m=DE(f,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(m[c]=typeof window[c]<"u"?window[c]:void 0),m.ref=h,K.exports.createElement(r,m)},s}(K.exports.Component),l=K.exports.forwardRef(function(a,s){return K.exports.createElement(o,Eu({},a,{forwardedRef:s}))});return l.displayName="AsyncScriptLoader("+i+")",l.propTypes={asyncScriptOnLoad:qe.exports.func},mm(l,r)}}var rv="onloadcallback",IE="grecaptcha";function FE(){return typeof window<"u"&&window.recaptchaOptions||{}}function UE(){var e=FE(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+rv+"&render=explicit"}const HE=NE(UE,{callbackName:rv,globalName:IE})(pl),WE=""+new URL("agenda.6fff4078.svg",import.meta.url).href,BE=""+new URL("email.946bdff8.svg",import.meta.url).href,qE=""+new URL("localizacao.69982f44.svg",import.meta.url).href,VE=""+new URL("telefone.9ca94e72.svg",import.meta.url).href,ko=L.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (max-width: ${x.tablet}) {
        font-size: 17px;
    }

    @media screen and (min-width: ${x.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-weight: 300;
        font-size: 35px;
    }
    
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 50px;
    }

`,bo=L.img`
    @media screen and (max-width: ${x.tablet}) {
        width: 2em;
        height: 2em;
    }

    @media screen and (min-width: ${x.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 8em;
        height: 8em;
    }
   
`,QE=L.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${x.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${x.mobile}) {
        margin-top: 20%;
    }


    
`,GE=L.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,YE=L.div`
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
`,XE=L.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${x.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${x.largeMobile}) {
        width: 90%;
    } 

`,_o=L.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${x.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${x.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${x.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,KE=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${x.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${x.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 80%;
    }
    
`,JE=L.div`
    margin-left: 10%;
    width: 100%;
`,Kr=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${x.extraLargeDesktop}) {
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

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`,ZE=L.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`,ek=L.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,tk=L.input`
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

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`,nk=L.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${x.notebook}) {
        width: 100%;
    }

    
`,rk=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,ik=L.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
`,ok=()=>{const[e,t]=K.exports.useState(""),[n,r]=K.exports.useState(""),[i,o]=K.exports.useState(""),[l,a]=K.exports.useState(""),[s,u]=K.exports.useState(""),[d,c]=K.exports.useState(""),f=m=>{c(m)},h=m=>{if(m.preventDefault(),e===""||n===""||i===""||l===""||s===""||d===""){alert("Preencha todos os campos");return}const y={from_name:e,message:s,from_email:n,from_phone:i,subject:l,"g-recaptcha-response":d};PE.send("service_al540kd","template_4eqf2kl",y,"HRfoO7P69RR47ZQ0c").then(k=>{alert("Email enviado"),t(""),r(""),o(""),a(""),u("")},k=>{alert("Aconteceu um erro"),console.log("Erro: ",k)})};return Y(rk,{children:[w(Rc,{titleWidth:"40%",text:"Entre em contato conosco!"}),Y(XE,{children:[Y(QE,{children:[Y(_o,{children:[w(bo,{src:qE,alt:""}),w(ko,{children:"Rua Bonfim n\xB025 - Vila Amelia, Nova Friburgo - RJ, 28625-570"})]}),Y(_o,{children:[w(bo,{src:VE,alt:""}),w(ko,{children:"(22) 2533-2265"})]}),Y(_o,{children:[w(bo,{src:BE,alt:""}),w(ko,{children:"serrajr@iprj.uerj.br"})]}),Y(_o,{children:[w(bo,{src:WE,alt:""}),Y(ko,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(nk,{children:w(KE,{children:Y(JE,{children:[w(Kr,{children:"Nome"}),w(Co,{type:"text",placeholder:"Insira seu nome",value:e,onChange:m=>t(m.target.value)}),w(Kr,{children:"Email"}),w(Co,{type:"text",placeholder:"Insira seu email",value:n,onChange:m=>r(m.target.value)}),w(Kr,{children:"Telefone"}),w(Co,{type:"text",placeholder:"(XX) XXXXX-XXXX",value:i,onChange:m=>o(m.target.value)}),w(Kr,{children:"Assunto"}),w(Co,{type:"text",placeholder:"Digite o assunto",value:l,onChange:m=>a(m.target.value)}),w(Kr,{children:"Mensagem"}),w(tk,{type:"text",placeholder:"Digite a mensagem",value:s,onChange:m=>u(m.target.value)}),w(ik,{children:w(HE,{sitekey:"6LftIRYjAAAAABYVGiNblWwK1r4oIrUQJ0Lr_EUq",onChange:f})}),w(ek,{children:w(ZE,{onClick:m=>h(m),children:"Enviar"})})]})})})]}),w(YE,{children:w(GE,{children:w(kE,{})})})]})};var ku={exports:{}},Hn={},bu={exports:{}},Rt={},Ca={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function l(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),m=h.getPropertyValue("display");return f?m!==r&&o(c,h):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,h=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(c,f){var h=c.nodeName.toLowerCase(),m=i.test(h)&&!c.disabled||h==="a"&&c.href||f;return m&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(c,!h)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,m){return h.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return f.filter(u)}e.exports=t.default})(Ca,Ca.exports);Object.defineProperty(Rt,"__esModule",{value:!0});Rt.resetState=uk;Rt.log=ck;Rt.handleBlur=Ai;Rt.handleFocus=Ni;Rt.markForFocusLater=dk;Rt.returnFocus=fk;Rt.popWithoutFocus=pk;Rt.setupScopedFocus=hk;Rt.teardownScopedFocus=mk;var ak=Ca.exports,lk=sk(ak);function sk(e){return e&&e.__esModule?e:{default:e}}var Tr=[],ur=null,_u=!1;function uk(){Tr=[]}function ck(){}function Ai(){_u=!0}function Ni(){if(_u){if(_u=!1,!ur)return;setTimeout(function(){if(!ur.contains(document.activeElement)){var e=(0,lk.default)(ur)[0]||ur;e.focus()}},0)}}function dk(){Tr.push(document.activeElement)}function fk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Tr.length!==0&&(t=Tr.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function pk(){Tr.length>0&&Tr.pop()}function hk(e){ur=e,window.addEventListener?(window.addEventListener("blur",Ai,!1),document.addEventListener("focus",Ni,!0)):(window.attachEvent("onBlur",Ai),document.attachEvent("onFocus",Ni))}function mk(){ur=null,window.addEventListener?(window.removeEventListener("blur",Ai),document.removeEventListener("focus",Ni)):(window.detachEvent("onBlur",Ai),document.detachEvent("onFocus",Ni))}var Cu={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ca.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var d=void 0,c=s.shiftKey,f=u[0],h=u[u.length-1],m=o();if(a===m){if(!c)return;d=h}if(h===m&&!c&&(d=f),f===m&&c&&(d=h),d){s.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),k=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!k){var v=u.indexOf(m);if(v>-1&&(v+=c?-1:1),d=u[v],typeof d>"u"){s.preventDefault(),d=c?h:f,d.focus();return}s.preventDefault(),d.focus()}}e.exports=t.default})(Cu,Cu.exports);var $t={},vk=function(){},gk=vk,Tt={},iv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(iv);Object.defineProperty(Tt,"__esModule",{value:!0});Tt.canUseDOM=Tt.SafeNodeList=Tt.SafeHTMLCollection=void 0;var yk=iv.exports,wk=xk(yk);function xk(e){return e&&e.__esModule?e:{default:e}}var hl=wk.default,Sk=hl.canUseDOM?window.HTMLElement:{};Tt.SafeHTMLCollection=hl.canUseDOM?window.HTMLCollection:{};Tt.SafeNodeList=hl.canUseDOM?window.NodeList:{};Tt.canUseDOM=hl.canUseDOM;Tt.default=Sk;Object.defineProperty($t,"__esModule",{value:!0});$t.resetState=Ck;$t.log=Ok;$t.assertNodeList=ov;$t.setElement=Pk;$t.validateElement=Fc;$t.hide=Tk;$t.show=Lk;$t.documentNotReadyOrSSRTesting=Rk;var Ek=gk,kk=_k(Ek),bk=Tt;function _k(e){return e&&e.__esModule?e:{default:e}}var pt=null;function Ck(){pt&&(pt.removeAttribute?pt.removeAttribute("aria-hidden"):pt.length!=null?pt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(pt).forEach(function(e){return e.removeAttribute("aria-hidden")})),pt=null}function Ok(){}function ov(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Pk(e){var t=e;if(typeof t=="string"&&bk.canUseDOM){var n=document.querySelectorAll(t);ov(n,t),t=n}return pt=t||pt,pt}function Fc(e){var t=e||pt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,kk.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Tk(e){var t=!0,n=!1,r=void 0;try{for(var i=Fc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Lk(e){var t=!0,n=!1,r=void 0;try{for(var i=Fc(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Rk(){pt=null}var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.resetState=$k;jr.log=Mk;var hi={},mi={};function If(e,t){e.classList.remove(t)}function $k(){var e=document.getElementsByTagName("html")[0];for(var t in hi)If(e,hi[t]);var n=document.body;for(var r in mi)If(n,mi[r]);hi={},mi={}}function Mk(){}var jk=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Dk=function(t,n){return t[n]&&(t[n]-=1),n},zk=function(t,n,r){r.forEach(function(i){jk(n,i),t.add(i)})},Ak=function(t,n,r){r.forEach(function(i){Dk(n,i),n[i]===0&&t.remove(i)})};jr.add=function(t,n){return zk(t.classList,t.nodeName.toLowerCase()=="html"?hi:mi,n.split(" "))};jr.remove=function(t,n){return Ak(t.classList,t.nodeName.toLowerCase()=="html"?hi:mi,n.split(" "))};var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.log=Ik;Dr.resetState=Fk;function Nk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var av=function e(){var t=this;Nk(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Oa=new av;function Ik(){console.log("portalOpenInstances ----------"),console.log(Oa.openInstances.length),Oa.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Fk(){Oa=new av}Dr.default=Oa;var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.resetState=Bk;Uc.log=qk;var Uk=Dr,Hk=Wk(Uk);function Wk(e){return e&&e.__esModule?e:{default:e}}var Be=void 0,kt=void 0,Dn=[];function Bk(){for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}Be=kt=null,Dn=[]}function qk(){console.log("bodyTrap ----------"),console.log(Dn.length);for(var e=[Be,kt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ff(){Dn.length!==0&&Dn[Dn.length-1].focusContent()}function Vk(e,t){!Be&&!kt&&(Be=document.createElement("div"),Be.setAttribute("data-react-modal-body-trap",""),Be.style.position="absolute",Be.style.opacity="0",Be.setAttribute("tabindex","0"),Be.addEventListener("focus",Ff),kt=Be.cloneNode(),kt.addEventListener("focus",Ff)),Dn=t,Dn.length>0?(document.body.firstChild!==Be&&document.body.insertBefore(Be,document.body.firstChild),document.body.lastChild!==kt&&document.body.appendChild(kt)):(Be.parentElement&&Be.parentElement.removeChild(Be),kt.parentElement&&kt.parentElement.removeChild(kt))}Hk.default.subscribe(Vk);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var I=1;I<arguments.length;I++){var Q=arguments[I];for(var $ in Q)Object.prototype.hasOwnProperty.call(Q,$)&&(N[$]=Q[$])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(I,Q){for(var $=0;$<Q.length;$++){var P=Q[$];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(I,P.key,P)}}return function(I,Q,$){return Q&&N(I.prototype,Q),$&&N(I,$),I}}(),o=K.exports,l=qe.exports,a=C(l),s=Rt,u=S(s),d=Cu.exports,c=C(d),f=$t,h=S(f),m=jr,y=S(m),k=Tt,v=C(k),p=Dr,g=C(p);function S(N){if(N&&N.__esModule)return N;var I={};if(N!=null)for(var Q in N)Object.prototype.hasOwnProperty.call(N,Q)&&(I[Q]=N[Q]);return I.default=N,I}function C(N){return N&&N.__esModule?N:{default:N}}function O(N,I){if(!(N instanceof I))throw new TypeError("Cannot call a class as a function")}function b(N,I){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:N}function E(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},M=function(I){return I.code==="Tab"||I.keyCode===9},D=function(I){return I.code==="Escape"||I.keyCode===27},A=0,z=function(N){E(I,N);function I(Q){O(this,I);var $=b(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,Q));return $.setOverlayRef=function(P){$.overlay=P,$.props.overlayRef&&$.props.overlayRef(P)},$.setContentRef=function(P){$.content=P,$.props.contentRef&&$.props.contentRef(P)},$.afterClose=function(){var P=$.props,j=P.appElement,H=P.ariaHideApp,q=P.htmlOpenClassName,U=P.bodyOpenClassName,_=P.parentSelector,V=_&&_().ownerDocument||document;U&&y.remove(V.body,U),q&&y.remove(V.getElementsByTagName("html")[0],q),H&&A>0&&(A-=1,A===0&&h.show(j)),$.props.shouldFocusAfterRender&&($.props.shouldReturnFocusAfterClose?(u.returnFocus($.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),$.props.onAfterClose&&$.props.onAfterClose(),g.default.deregister($)},$.open=function(){$.beforeOpen(),$.state.afterOpen&&$.state.beforeClose?(clearTimeout($.closeTimer),$.setState({beforeClose:!1})):($.props.shouldFocusAfterRender&&(u.setupScopedFocus($.node),u.markForFocusLater()),$.setState({isOpen:!0},function(){$.openAnimationFrame=requestAnimationFrame(function(){$.setState({afterOpen:!0}),$.props.isOpen&&$.props.onAfterOpen&&$.props.onAfterOpen({overlayEl:$.overlay,contentEl:$.content})})}))},$.close=function(){$.props.closeTimeoutMS>0?$.closeWithTimeout():$.closeWithoutTimeout()},$.focusContent=function(){return $.content&&!$.contentHasFocus()&&$.content.focus({preventScroll:!0})},$.closeWithTimeout=function(){var P=Date.now()+$.props.closeTimeoutMS;$.setState({beforeClose:!0,closesAt:P},function(){$.closeTimer=setTimeout($.closeWithoutTimeout,$.state.closesAt-Date.now())})},$.closeWithoutTimeout=function(){$.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},$.afterClose)},$.handleKeyDown=function(P){M(P)&&(0,c.default)($.content,P),$.props.shouldCloseOnEsc&&D(P)&&(P.stopPropagation(),$.requestClose(P))},$.handleOverlayOnClick=function(P){$.shouldClose===null&&($.shouldClose=!0),$.shouldClose&&$.props.shouldCloseOnOverlayClick&&($.ownerHandlesClose()?$.requestClose(P):$.focusContent()),$.shouldClose=null},$.handleContentOnMouseUp=function(){$.shouldClose=!1},$.handleOverlayOnMouseDown=function(P){!$.props.shouldCloseOnOverlayClick&&P.target==$.overlay&&P.preventDefault()},$.handleContentOnClick=function(){$.shouldClose=!1},$.handleContentOnMouseDown=function(){$.shouldClose=!1},$.requestClose=function(P){return $.ownerHandlesClose()&&$.props.onRequestClose(P)},$.ownerHandlesClose=function(){return $.props.onRequestClose},$.shouldBeClosed=function(){return!$.state.isOpen&&!$.state.beforeClose},$.contentHasFocus=function(){return document.activeElement===$.content||$.content.contains(document.activeElement)},$.buildClassName=function(P,j){var H=(typeof j>"u"?"undefined":r(j))==="object"?j:{base:R[P],afterOpen:R[P]+"--after-open",beforeClose:R[P]+"--before-close"},q=H.base;return $.state.afterOpen&&(q=q+" "+H.afterOpen),$.state.beforeClose&&(q=q+" "+H.beforeClose),typeof j=="string"&&j?q+" "+j:q},$.attributesFromObject=function(P,j){return Object.keys(j).reduce(function(H,q){return H[P+"-"+q]=j[q],H},{})},$.state={afterOpen:!1,beforeClose:!1},$.shouldClose=null,$.moveFromContentToOverlay=null,$}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function($,P){this.props.isOpen&&!$.isOpen?this.open():!this.props.isOpen&&$.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!P.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var $=this.props,P=$.appElement,j=$.ariaHideApp,H=$.htmlOpenClassName,q=$.bodyOpenClassName,U=$.parentSelector,_=U&&U().ownerDocument||document;q&&y.add(_.body,q),H&&y.add(_.getElementsByTagName("html")[0],H),j&&(A+=1,h.hide(P)),g.default.register(this)}},{key:"render",value:function(){var $=this.props,P=$.id,j=$.className,H=$.overlayClassName,q=$.defaultStyles,U=$.children,_=j?{}:q.content,V=H?{}:q.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",H),style:n({},V,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},T=n({id:P,ref:this.setContentRef,style:n({},_,this.props.style.content),className:this.buildClassName("content",j),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(T,U);return this.props.overlayElement(F,J)}}]),I}(o.Component);z.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},z.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(v.default),a.default.instanceOf(k.SafeHTMLCollection),a.default.instanceOf(k.SafeNodeList),a.default.arrayOf(a.default.instanceOf(v.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=z,e.exports=t.default})(bu,bu.exports);function lv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function sv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function uv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}lv.__suppressDeprecationWarning=!0;sv.__suppressDeprecationWarning=!0;uv.__suppressDeprecationWarning=!0;function Qk(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=lv,t.componentWillReceiveProps=sv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=uv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return e}const Gk=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Qk},Symbol.toStringTag,{value:"Module"})),Yk=Jf(Gk);Object.defineProperty(Hn,"__esModule",{value:!0});Hn.bodyOpenClassName=Hn.portalClassName=void 0;var Uf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),cv=K.exports,Pa=Yi(cv),Kk=Ru.exports,Ta=Yi(Kk),Jk=qe.exports,re=Yi(Jk),Zk=bu.exports,Hf=Yi(Zk),eb=$t,tb=rb(eb),sn=Tt,Wf=Yi(sn),nb=Yk;function rb(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Yi(e){return e&&e.__esModule?e:{default:e}}function ib(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ob(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ab=Hn.portalClassName="ReactModalPortal",lb=Hn.bodyOpenClassName="ReactModal__Body--open",On=sn.canUseDOM&&Ta.default.createPortal!==void 0,qf=function(t){return document.createElement(t)},Vf=function(){return On?Ta.default.createPortal:Ta.default.unstable_renderSubtreeIntoContainer};function Oo(e){return e()}var Xi=function(e){ob(t,e);function t(){var n,r,i,o;ib(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Bf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!On&&Ta.default.unmountComponentAtNode(i.node);var u=Oo(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Vf(),c=d(i,Pa.default.createElement(Hf.default,Uf({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(c)},r),Bf(i,o)}return Xk(t,[{key:"componentDidMount",value:function(){if(!!sn.canUseDOM){On||(this.node=qf("div")),this.node.className=this.props.portalClassName;var r=Oo(this.props.parentSelector);r.appendChild(this.node),!On&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Oo(r.parentSelector),o=Oo(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!sn.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!On&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!sn.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!sn.canUseDOM||!On)return null;!this.node&&On&&(this.node=qf("div"));var r=Vf();return r(Pa.default.createElement(Hf.default,Uf({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){tb.setElement(r)}}]),t}(cv.Component);Xi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Wf.default),re.default.instanceOf(sn.SafeHTMLCollection),re.default.instanceOf(sn.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Wf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Xi.defaultProps={isOpen:!1,portalClassName:ab,bodyOpenClassName:lb,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Pa.default.createElement("div",t,n)},contentElement:function(t,n){return Pa.default.createElement("div",t,n)}};Xi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,nb.polyfill)(Xi);Hn.default=Xi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Hn,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(ku,ku.exports);const dv=La(ku.exports),sb=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,ub=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${x.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,cb=L.img`
    border-radius: 20px;

    @media screen and (max-width: ${x.largeMobile}) {
        width: 20vh;
    }

    @media screen and (max-width: ${x.tablet}) {
        width: 25vh;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 40vh;
    }
`,db=L.div`
    margin: 20px;
    display: inline-block;

    @media screen and (max-width: ${x.notebook}) {
        width: 90%;
    }

    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}

`,fb=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:2500};return w(db,{containerWidth:e.width,children:w(Ic,{...t,children:e.carouselData.map((n,r)=>w(sb,{children:w(ub,{children:w(cb,{src:n,alt:e.alt,style:{height:e.imageSize}})})},r))})})},Ii={Screen:{width:window.innerWidth,height:window.innerHeight},FontSize:{extraSmall:window.innerHeight*.02,small:window.innerHeight*.021,standart:window.innerHeight*.022,medium:window.innerHeight*.023,large:window.innerHeight*.024,xLarge:window.innerHeight*.035},Color:{lightBlue:"#04ADD7",darkBlue:"#001830",orange:"#FF7400"}},pb=L.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${x.largeDesktop}){
        font-size: 30px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}){
        font-size: 40px;
    }
    /* overflow: 'scroll', */
`,hb=L.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 3;
`,mb=L.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${x.largeMobile}){
        font-size: 12px;
    }
`,as=L.h2`
`,vb=L.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,gb=L.a`
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

    @media screen and (min-width: ${x.largeDesktop}){
        padding: 10px 20px;
    }
`,yb=L.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,wb=L.img`
    width: 300px;

    @media screen and (max-width: ${x.largeMobile}){
        width: 200px;
    }

    @media screen and (min-width: ${x.largeDesktop}){
        width: 500px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}){
        width: 700px;
    }
`,xb=L.button`
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

    @media screen and (max-width: ${x.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    @media screen and (min-width: ${x.largeDesktop}){
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
`,Qf=L.p`

`,Sb=L.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,Eb=L.ul`
    
`,kb=L.li`
    list-style: circle;
`;dv.setAppElement("#root");const bb=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"80vh",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#00000028"}};return n?w(dv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Y(pb,{children:[Y(hb,{children:[Y(mb,{children:[w("h1",{children:n.title}),w(xb,{onClick:()=>t(!1),children:"X"})]}),w(Sb,{})]}),w(as,{children:"Resumo do projeto"}),Y(yb,{children:[n.image.length>1&&Ii.Screen.width>780?w(fb,{carouselData:n.image,alt:`Imagens do ${n.title}`,imageSize:n.imageSize,hasArrows:!0}):w(wb,{src:n.image[0],alt:n.title,style:{height:n.imageSize}}),w(Qf,{children:n.summary})]}),n.members?Y(Un,{children:[w(as,{children:"Membros envolvidos"}),w(Eb,{children:n.members.map((i,o)=>w(kb,{children:i},o))})]}):null,n.opinions?Y(Un,{children:[w(as,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Qf,{children:i},o))]}):null,n.acess?w(vb,{children:w(gb,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},_b=L.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    
    overflow: hidden;
    background-color: transparent;
`,Cb=L.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${x.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,Ob=L.section`
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

    @media screen and (min-width: ${x.desktop}) {    
        width: 75%;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {    
        width: 65%;
    }
`,Pb=L.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;
    

    @media screen and (max-width: ${x.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }

`,Tb=L.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    
    @media screen and (max-width: ${x.notebook}) {
        width: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,Lb=L.img`
    border-radius: 20px;

    @media screen and (max-width: ${x.largeMobile}) {   
        width: 200px;
        height: 200px;
    }
    @media screen and (min-width: ${x.largeMobile}) {    
        width: 300px;
        height: 200px;
    }
    @media screen and (min-width: ${x.notebook}) {    
        width: 350px;
        height: 200px;
    }
    @media screen and (min-width: ${x.desktop}) {    
        width: 400px;
        height: 300px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {    
        width: 450px;
        height: 350px;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {    
        width: 700px;
        height: 500px;
    }
`,Rb=L.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;

    @media screen and (max-width: ${x.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
`,$b=L.span`
    width: 90%;
    color: var(--blue);

    @media screen and (max-width: ${x.largeMobile}) {
        width: 85%;
        font-size: 15px;
    }
    @media screen and (min-width: ${x.largeMobile}) {
        width: 85%;
        font-size: 16px;
    }
    @media screen and (min-width: ${x.notebook}) {
        font-size: 20px;
    }
    @media screen and (min-width: ${x.desktop}) {
        font-size: 24px;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 28px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 45px;
    }  
`,Mb=L.button`
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

    @media screen and (max-width: ${x.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`,jb=L.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${x.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
`,fv=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=K.exports.useState(!1),[i,o]=K.exports.useState();return w(Ic,{...t,children:e.carouselData.map((l,a)=>w(_b,{children:w(Cb,{children:Y(Ob,{children:[w(Pb,{children:w(Rc,{text:l.title})}),Y(Tb,{children:[w(Rb,{children:w(Lb,{src:l.image[0],alt:l.title})}),Y(jb,{children:[w($b,{children:l.content}),w(Mb,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(bb,{data:i,status:n,setStatus:r})]})]})]})})},a))})},Db=L.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${x.largeMobile}) {
        flex-wrap: wrap;
    } 
`,zb=L.div``,Ab=L.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${x.tablet}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${x.tablet}) {
        font-size: 50px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        font-size: 100px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 140px;
    }
`,Nb=L.img`
    @media screen and (max-width: ${x.largeMobile}) {
        width: 60%;
        margin-top: 10%;
    }

    @media screen and (min-width: ${x.largeMobile}) {
        width: 40%;
        margin-top: 5%;
    }
    @media screen and (min-width: ${x.notebook}) {
        width: 25%;
        margin-top: 0;
    }
`,pv=({image:e,text:t,color:n})=>Y(Db,{style:{backgroundColor:n},children:[w(zb,{children:t?t.split(" ").map((r,i)=>w(Ab,{children:r},i)):null}),w(Nb,{src:e,alt:t})]}),Ib=L.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${x.tablet}) {
        flex-direction: column;
        width: 95%;
    }
`,Fb=L.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Gf=L.img`
    margin-right: 5%;
    margin-left: 4%;
    height: 50px;

    @media screen and (max-width: ${x.largeMobile}) {
        width: 8%;
    }
    @media screen and (min-width: ${x.largeMobile}) {
        width: 6%;
    }
    @media screen and (min-width: ${x.tablet}) {
        width: 8%;
    }
    @media screen and (min-width: ${x.largeDesktop}) {
        height: 70px;
        width: 10%;
    }
    @media screen and (min-width: ${x.extraLargeDesktop}) {
        height: 100px;
        width: 13%;
    }  
`,Ub=L.h3`
    font-family: 'Maven Pro';
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 0px; 
    width: 300px;

    @media screen and (max-width: ${x.largeMobile}) {
        font-size: 20px;
    }
    @media screen and (min-width: ${x.largeMobile}) {
        font-size: 23px;
        line-height: 22px;
    }
    
    @media screen and (min-width: ${x.desktop}) {
        font-size: 30px;
        line-height: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 50px;
        line-height: 60px;
        width: 600px;
    }
`,Hb=L.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,Wb=L.p`
    font-family: 'Maven Pro';
    font-weight: 200;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${x.largeMobile}) {
        width: 70vw;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }
    @media screen and (min-width: ${x.largeMobile}){
        font-size: 18px;
        line-height: 28px;
    }
    @media screen and (min-width: ${x.tablet}){
        width: 40vw;
    }

    @media screen and (min-width: ${x.desktop}) {
        font-size: 25px;
        line-height: 35px;
        width: 30vw;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 40px;
        line-height: 45px;
    }

    
`,cr=({icon:e,title:t,text:n,arrow:r})=>Y(Ib,{children:[Y(Fb,{children:[w(Gf,{src:e,alt:t}),w(Ub,{children:t})]}),Y(Hb,{children:[w(Gf,{src:r,alt:"Seta"}),w(Wb,{children:n})]})]}),Bb=""+new URL("hammer-icon.c370caae.svg",import.meta.url).href,qb=""+new URL("bot-icon.237c34bd.svg",import.meta.url).href,Vb=""+new URL("3d-icon.6c010241.svg",import.meta.url).href,Qb=""+new URL("drawing-icon.462650d6.svg",import.meta.url).href,Po=""+new URL("seta.7067b273.svg",import.meta.url).href,Gb=""+new URL("background-mecanica.81e45f94.svg",import.meta.url).href,Yb=L.div`
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
    font-size: 40px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${x.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 100px;
    }
`,Yf=L.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${x.tablet}) {
        flex-direction: column;
    }  
`,Kb=()=>Y(Yb,{children:[w(Xb,{children:"Carta de Servi\xE7os"}),Y(Yf,{children:[w(cr,{icon:Bb,arrow:Po,title:"Projeto e Manuten\xE7\xE3o de Equipamentos",text:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."}),w(cr,{icon:Qb,arrow:Po,title:"Desenho T\xE9cnico e Industrial",text:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]}),Y(Yf,{children:[w(cr,{icon:qb,arrow:Po,title:"Projetos de Automa\xE7\xE3o",text:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."}),w(cr,{icon:Vb,arrow:Po,title:"Prototipagem",text:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]}),Jb=L.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
    margin-bottom: 5%;

    @media screen and (max-width: ${x.largeMobile}) {
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

    @media screen and (max-width: ${x.largeMobile}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid ${({color:e})=>e?`${e}`:"#000"};
    }
`,hv=({color:e})=>{const t=Ga();return w(Jb,{children:w(Zb,{color:e,onClick:()=>{t("/contatos"),window.scrollTo(0,0)},children:"Quer colocar um projeto em pr\xE1tica? \u2192"})})},e_=""+new URL("marmitex.857922f9.svg",import.meta.url).href,t_=""+new URL("vicente.a48e6481.svg",import.meta.url).href,n_=""+new URL("vicente-2.5ac4e174.svg",import.meta.url).href,r_=""+new URL("tmf.89cc1825.svg",import.meta.url).href,i_=""+new URL("tmf-2.d1a33174.svg",import.meta.url).href,o_=""+new URL("tmf-3.8462faa7.svg",import.meta.url).href,a_=""+new URL("tmf-4.5ad6176b.svg",import.meta.url).href,l_=""+new URL("tmf-5.206341f6.svg",import.meta.url).href,s_=""+new URL("soledade.c7442aaa.svg",import.meta.url).href,u_=""+new URL("soledade-2.f71490d2.svg",import.meta.url).href,c_=""+new URL("chassi.02955239.svg",import.meta.url).href,d_=""+new URL("chassi-2.f1b6e78e.svg",import.meta.url).href,f_={mechanicsProjects:[{title:"Projeto Marmitex",image:[e_],imageSize:"30vh",content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",summary:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico."},{title:"Projeto Lar Abrigo Amor a Jesus",imageSize:"30vh",image:["https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG"],content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",summary:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade."},{title:"Projeto S\xE3o Vicente de Paula",imageSize:"30vh",image:[t_,n_],content:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas.",summary:"A institui\xE7\xE3o possu\xEDa um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados n\xE3o eram adequados \xE0 instala\xE7\xE3o dos banheiros, o que dificultava o manejo dos idosos e havia um problema com ac\xFAmulo de \xE1gua nas macas. A Serra Jr. Engenharia foi ao local, estudou as instala\xE7\xF5es onde eram realizados os banhos, com a medi\xE7\xE3o em m\xE3os foi desenvolvida uma maca que atendia perfeitamente \xE0 necessidade, ela possui apoios que s\xE3o encaixadas na parede e que auxiliam a levantar e descer os idosos, diminuindo o esfor\xE7o f\xEDsico dos enfermeiros, al\xE9m de possuir um sistema de drenagem de \xE1gua evitando o ac\xFAmulo de \xE1gua. Al\xE9m do desenvolvimento da mec\xE2nica da maca, tamb\xE9m foi feito um estudo de materiais para selecionar o mais adequado para evitar corros\xE3o, baixa resist\xEAncia e durabilidade, alta oxida\xE7\xE3o e, assim, garantindo uma vida \xFAtil bem longa ao equipamento."},{title:"Projeto TMF",image:[r_,i_,o_,a_,l_],imageSize:"30vh",content:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento.",summary:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho t\xE9cnico e modelagem 3D de uma m\xE1quina para produ\xE7\xE3o de sacolas e bolsas de papel. A empresa possu\xEDa a m\xE1quina, por\xE9m, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento. A Serra Jr. Engenharia foi \xE0 f\xE1brica, mediu at\xE9 o menor dos parafusos do maquin\xE1rio, fez a modelagem no software SolidWorks e entregou todos os desenhos do maquin\xE1rio, possibilitando a comercializa\xE7\xE3o do mesmo."},{title:"Projeto Fazenda Soledade",image:[s_,u_],imageSize:"30vh",content:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques.",summary:"O projeto de automa\xE7\xE3o industrial consistiu na implementa\xE7\xE3o de uma v\xE1lvula solen\xF3ide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destila\xE7\xE3o da cacha\xE7a. A implementa\xE7\xE3o foi realizada em todos os alambiques. Acompanhando o sistema automatizado tamb\xE9m foi desenvolvido um software com uma IHM (Interface Homem-M\xE1quina) que permite ao operador ter acesso \xE0 todas as informa\xE7\xF5es do sistema como temperatura, n\xEDvel de tanque e com uma fun\xE7\xE3o de gerar um relat\xF3rio no formato estipulado pela cacha\xE7aria com todas as informa\xE7\xF5es de produ\xE7\xE3o de determinado intervalo de tempo."},{title:"Projeto Chassi de Moto",image:[d_,c_],imageSize:"30vh",content:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas.",summary:"O projeto realizado consistiu na execu\xE7\xE3o de um desenho t\xE9cnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercializa\xE7\xE3o com finalidade de aplica\xE7\xE3o real na constru\xE7\xE3o de motocicletas."}]},mv=""+new URL("arrow-up.1b45090f.svg",import.meta.url).href,p_=""+new URL("presentation-image.0aa1e0e9.svg",import.meta.url).href,h_=L.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${x.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
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

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,v_=()=>Y(Un,{children:[w(pv,{color:Ii.Color.lightBlue,image:p_,text:"Engenharia Mec\xE2nica"}),w(Kb,{}),w(h_,{}),w(hv,{color:Ii.Color.lightBlue}),w(fv,{carouselData:f_.mechanicsProjects}),w(m_,{onClick:()=>window.scrollTo(0,0),src:mv,alt:"ScrollUp"})]}),g_=""+new URL("friburguense.ba8886f5.svg",import.meta.url).href,y_=""+new URL("projeto-tmf.f6316197.svg",import.meta.url).href,w_={computingProjects:[{title:"Projeto Friburguense",image:[g_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,summary:"O projeto consistiu no desenvolvimento de um website para comercializa\xE7\xE3o do sistema de S\xF3cio-Torcedor do clube. O site possui um sistema de integra\xE7\xE3o com uma rede de pagamento que permite que seja comercializado diretamente pelo site com diversas formas de pagamento e total seguran\xE7a nas transa\xE7\xF5es, tamb\xE9m possui um banco de dados para cadastro dos novos s\xF3cios que ter\xE3o acesso a um painel onde \xE9 gerada uma carteirinha de s\xF3cio-torcedor, h\xE1 todas as informa\xE7\xF5es do plano, op\xE7\xE3o de upgrade e muito mais. Todo o site seguiu \xE0s riscas as diretrizes da LGPD.",members:["Ramon Ribeiro","Leticia Bussinger","Jo\xE3o Vitor Muniz"]},{title:"Projeto TMF",image:[y_],imageSize:"30vh",content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,summary:"O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a localiza\xE7\xE3o da mesma.",acess:"https://usinagemtmf.com.br/"}]},x_=""+new URL("desenvolvimento-sistemas.85c54f6d.svg",import.meta.url).href,S_=""+new URL("desenvolvimento-sites.cef968a9.svg",import.meta.url).href,Xf=""+new URL("seta.13cafa5d.svg",import.meta.url).href,E_=""+new URL("css.cda1e897.svg",import.meta.url).href,k_=""+new URL("html.8611fdec.svg",import.meta.url).href,b_=""+new URL("js.105e0a8d.svg",import.meta.url).href,__=""+new URL("react.be81d33e.svg",import.meta.url).href,C_=""+new URL("ts.41dfa221.svg",import.meta.url).href,O_=""+new URL("styled.0be6fc0f.svg",import.meta.url).href,P_=""+new URL("background-computacao.dbcf66d3.svg",import.meta.url).href,T_=L.div`
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
    font-size: 40px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${x.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${x.extraLargeDesktop}) {
        font-size: 100px;
    }
`,R_=L.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${x.tablet}) {
        flex-direction: column;
    } 
`,$_=L.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,Gn=L.img`

    @media screen and (max-width: ${x.tablet}){
        width: 40px;
        height: 40px;
        margin-bottom: 5%;
        margin-right: 2%;
    }
    @media screen and (min-width: ${x.tablet}){
        width: 50px;
        height: 50px;
        margin-bottom: 5%;
        margin-right: 2%;
    }

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 80px;
        height: 80px;
        margin-bottom: 3%;
    }
`,M_=()=>Y(T_,{children:[w(L_,{children:"Carta de Servi\xE7os"}),Y(R_,{children:[w(cr,{icon:S_,arrow:Xf,title:"Desenvolvimento de Websites",text:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"}),w(cr,{icon:x_,arrow:Xf,title:"Desenvolvimento de Sistemas Web",text:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]}),Y($_,{children:[w(Gn,{src:k_,alt:"ImagemHtml"}),w(Gn,{src:E_,alt:"Imagemcss"}),w(Gn,{src:b_,alt:"ImagemJS"}),w(Gn,{src:C_,alt:"ImagemTS"}),w(Gn,{src:__,alt:"ImagemREACT"}),w(Gn,{src:O_,alt:"ImagemStyled"})]})]}),j_=""+new URL("presentation-image.3bba7d23.svg",import.meta.url).href,D_=L.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,z_=L.img`
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

    @media screen and (min-width: ${x.largeDesktop}) {
        width: 4rem;
        height: 4rem;
    }
`,A_=()=>Y(Un,{children:[w(pv,{color:Ii.Color.orange,image:j_,text:"Engenharia da Computa\xE7\xE3o"}),w(M_,{}),w(D_,{}),w(hv,{color:Ii.Color.orange}),w(fv,{carouselData:w_.computingProjects}),w(z_,{onClick:()=>window.scrollTo(0,0),src:mv,alt:"ScrollUp"})]}),Kf=({type:e})=>w(Un,{children:e==="mech"?w(v_,{}):w(A_,{})});function N_(){return w("div",{className:"App",children:Y(cy,{basename:"/",children:[w(Mw,{}),Y(ly,{children:[w(Yn,{path:"/",element:w(W1,{})}),w(Yn,{path:"/computacao",element:w(Kf,{type:"comp"})}),w(Yn,{path:"/mecanica",element:w(Kf,{type:"mech"})}),w(Yn,{path:"/quemSomos",element:w(gE,{})}),w(Yn,{path:"/contatos",element:w(ok,{})})]}),w(Zw,{})]})})}ls.createRoot(document.getElementById("root")).render(w(Rr.StrictMode,{children:w(N_,{})}));
