(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function vm(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var q={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),gm=Symbol.for("react.portal"),ym=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),Cm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),nc=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,uf={};function hr(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||lf}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=hr.prototype;function Qs(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||lf}var Gs=Qs.prototype=new cf;Gs.constructor=Qs;sf(Gs,hr.prototype);Gs.isPureReactComponent=!0;var rc=Array.isArray,df=Object.prototype.hasOwnProperty,Ys={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)df.call(t,r)&&!ff.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fi,type:e,key:o,ref:l,props:i,_owner:Ys.current}}function bm(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function Tm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ic=/\/+/g;function $a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tm(""+e.key):t.toString(36)}function ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fi:case gm:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+$a(l,0):r,rc(i)?(n="",e!=null&&(n=e.replace(ic,"$&/")+"/"),ro(i,t,n,"",function(u){return u})):i!=null&&(Xs(i)&&(i=bm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ic,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",rc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+$a(o,a);l+=ro(o,t,n,s,i)}else if(s=Pm(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+$a(o,a++),l+=ro(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},io={transition:null},zm={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:io,ReactCurrentOwner:Ys};le.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=hr;le.Fragment=ym;le.Profiler=xm;le.PureComponent=Qs;le.StrictMode=wm;le.Suspense=_m;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ys.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)df.call(t,s)&&!ff.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fi,type:e.type,key:i,ref:o,props:r,_owner:l}};le.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};le.createElement=pf;le.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Em,render:e}};le.isValidElement=Xs;le.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:jm}};le.memo=function(e,t){return{$$typeof:Cm,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return Ge.current.useCallback(e,t)};le.useContext=function(e){return Ge.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};le.useEffect=function(e,t){return Ge.current.useEffect(e,t)};le.useId=function(){return Ge.current.useId()};le.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Ge.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};le.useRef=function(e){return Ge.current.useRef(e)};le.useState=function(e){return Ge.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Ge.current.useTransition()};le.version="18.2.0";(function(e){e.exports=le})(q);const pi=Vs(q.exports);var Tl={},hf={exports:{}},at={},mf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,A){var F=z.length;z.push(A);e:for(;0<F;){var B=F-1>>>1,$=z[B];if(0<i($,A))z[B]=A,z[F]=$,F=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var A=z[0],F=z.pop();if(F!==A){z[0]=F;e:for(var B=0,$=z.length,E=$>>>1;B<E;){var U=2*(B+1)-1,D=z[U],O=U+1,K=z[O];if(0>i(D,F))O<$&&0>i(K,D)?(z[B]=K,z[O]=F,B=O):(z[B]=D,z[U]=F,B=U);else if(O<$&&0>i(K,F))z[B]=K,z[O]=F,B=O;else break e}}return A}function i(z,A){var F=z.sortIndex-A.sortIndex;return F!==0?F:z.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,d=null,p=3,h=!1,g=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=z)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function x(z){if(y=!1,v(z),!g)if(n(s)!==null)g=!0,X(b);else{var A=n(u);A!==null&&fe(x,A.startTime-z)}}function b(z,A){g=!1,y&&(y=!1,m(S),S=-1),h=!0;var F=p;try{for(v(A),d=n(s);d!==null&&(!(d.expirationTime>A)||z&&!M());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var $=B(d.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(s)&&r(s),v(A)}else r(s);d=n(s)}if(d!==null)var E=!0;else{var U=n(u);U!==null&&fe(x,U.startTime-A),E=!1}return E}finally{d=null,p=F,h=!1}}var C=!1,_=null,S=-1,T=5,j=-1;function M(){return!(e.unstable_now()-j<T)}function R(){if(_!==null){var z=e.unstable_now();j=z;var A=!0;try{A=_(!0,z)}finally{A?L():(C=!1,_=null)}}else C=!1}var L;if(typeof f=="function")L=function(){f(R)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=R,L=function(){Y.postMessage(null)}}else L=function(){k(R,0)};function X(z){_=z,C||(C=!0,L())}function fe(z,A){S=k(function(){z(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,X(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var F=p;p=A;try{return z()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,A){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=p;p=z;try{return A()}finally{p=F}},e.unstable_scheduleCallback=function(z,A,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,z={id:c++,callback:A,priorityLevel:z,startTime:F,expirationTime:$,sortIndex:-1},F>B?(z.sortIndex=F,t(u,z),n(s)===null&&z===n(u)&&(y?(m(S),S=-1):y=!0,fe(x,F-B))):(z.sortIndex=$,t(s,z),g||h||(g=!0,X(b))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var A=p;return function(){var F=p;p=A;try{return z.apply(this,arguments)}finally{p=F}}}})(vf);(function(e){e.exports=vf})(mf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=q.exports,ot=mf.exports;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,Qr={};function Tn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,Lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},ac={};function Mm(e){return jl.call(ac,e)?!0:jl.call(oc,e)?!1:Lm.test(e)?ac[e]=!0:(oc[e]=!0,!1)}function Rm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,r){if(t===null||typeof t>"u"||Rm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var qs=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qs,Ks);Ie[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qs,Ks);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qs,Ks);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Js(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,i,r)&&(n=null),r||i===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_i=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),eu=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),tu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Ia;function zr(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var Fa=!1;function Ha(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function Dm(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Ha(e.type,!1),e;case 11:return e=Ha(e.type.render,!1),e;case 1:return e=Ha(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Nn:return"Portal";case zl:return"Profiler";case Zs:return"StrictMode";case Ll:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tu:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function Nm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=$m(e))}function Ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&Js(e,"checked",t,!1)}function Dl(e,t){_f(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Lr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Cf(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function bf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fm=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Kn=null,Jn=null;function fc(e){if(e=vi(e)){if(typeof Wl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=oa(t),Wl(e.stateNode,e.type,t))}}function jf(e){Kn?Jn?Jn.push(e):Jn=[e]:Kn=e}function zf(){if(Kn){var e=Kn,t=Jn;if(Jn=Kn=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function Lf(e,t){return e(t)}function Mf(){}var Ua=!1;function Rf(e,t,n){if(Ua)return e(t,n);Ua=!0;try{return Lf(e,t,n)}finally{Ua=!1,(Kn!==null||Jn!==null)&&(Mf(),zf())}}function Yr(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Bl=!1;if(Nt)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Bl=!1}function Hm(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Dr=!1,yo=null,wo=!1,Vl=null,Um={onError:function(e){Dr=!0,yo=e}};function Wm(e,t,n,r,i,o,l,a,s){Dr=!1,yo=null,Hm.apply(Um,arguments)}function Bm(e,t,n,r,i,o,l,a,s){if(Wm.apply(this,arguments),Dr){if(Dr){var u=yo;Dr=!1,yo=null}else throw Error(I(198));wo||(wo=!0,Vl=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(jn(e)!==e)throw Error(I(188))}function Vm(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pc(i),e;if(o===r)return pc(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Df(e){return e=Vm(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var $f=ot.unstable_scheduleCallback,hc=ot.unstable_cancelCallback,Qm=ot.unstable_shouldYield,Gm=ot.unstable_requestPaint,_e=ot.unstable_now,Ym=ot.unstable_getCurrentPriorityLevel,ru=ot.unstable_ImmediatePriority,If=ot.unstable_UserBlockingPriority,xo=ot.unstable_NormalPriority,Xm=ot.unstable_LowPriority,Ff=ot.unstable_IdlePriority,ta=null,Pt=null;function qm(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Zm,Km=Math.log,Jm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Km(e)/Jm|0)|0}var Pi=64,bi=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Mr(a):(o&=l,o!==0&&(r=Mr(o)))}else l=n&~i,l!==0?r=Mr(l):o!==0&&(r=Mr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function ev(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xt(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=ev(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hf(){var e=Pi;return Pi<<=1,(Pi&4194240)===0&&(Pi=64),e}function Wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function nv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Uf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wf,ou,Bf,Vf,Qf,Gl=!1,Ti=[],Jt=null,Zt=null,en=null,Xr=new Map,qr=new Map,Yt=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=vi(t),t!==null&&ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iv(e,t,n,r,i){switch(t){case"focusin":return Jt=xr(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=xr(Zt,e,t,n,r,i),!0;case"mouseover":return en=xr(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xr.set(o,xr(Xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qr.set(o,xr(qr.get(o)||null,e,t,n,r,i)),!0}return!1}function Gf(e){var t=gn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Af(n),t!==null){e.blockedOn=t,Qf(e.priority,function(){Bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=vi(n),t!==null&&ou(t),e.blockedOn=n,!1;t.shift()}return!0}function vc(e,t,n){oo(e)&&n.delete(t)}function ov(){Gl=!1,Jt!==null&&oo(Jt)&&(Jt=null),Zt!==null&&oo(Zt)&&(Zt=null),en!==null&&oo(en)&&(en=null),Xr.forEach(vc),qr.forEach(vc)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,ov)))}function Kr(e){function t(i){return Sr(i,e)}if(0<Ti.length){Sr(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Sr(Jt,e),Zt!==null&&Sr(Zt,e),en!==null&&Sr(en,e),Xr.forEach(t),qr.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&Yt.shift()}var Zn=Ht.ReactCurrentBatchConfig,ko=!0;function av(e,t,n,r){var i=ce,o=Zn.transition;Zn.transition=null;try{ce=1,au(e,t,n,r)}finally{ce=i,Zn.transition=o}}function lv(e,t,n,r){var i=ce,o=Zn.transition;Zn.transition=null;try{ce=4,au(e,t,n,r)}finally{ce=i,Zn.transition=o}}function au(e,t,n,r){if(ko){var i=Yl(e,t,n,r);if(i===null)Za(e,t,r,Eo,n),mc(e,r);else if(iv(i,e,t,n,r))r.stopPropagation();else if(mc(e,r),t&4&&-1<rv.indexOf(e)){for(;i!==null;){var o=vi(i);if(o!==null&&Wf(o),o=Yl(e,t,n,r),o===null&&Za(e,t,r,Eo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Za(e,t,r,null,n)}}var Eo=null;function Yl(e,t,n,r){if(Eo=null,e=nu(r),e=gn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Eo=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case ru:return 1;case If:return 4;case xo:case Xm:return 16;case Ff:return 536870912;default:return 16}default:return 16}}var qt=null,lu=null,ao=null;function Xf(){if(ao)return ao;var e,t=lu,n=t.length,r,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ao=i.slice(e,1<r?1-r:void 0)}function lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function gc(){return!1}function lt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ji:gc,this.isPropagationStopped=gc,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=lt(mr),mi=ke({},mr,{view:0,detail:0}),sv=lt(mi),Ba,Va,kr,na=ke({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Ba=e.screenX-kr.screenX,Va=e.screenY-kr.screenY):Va=Ba=0,kr=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),yc=lt(na),uv=ke({},na,{dataTransfer:0}),cv=lt(uv),dv=ke({},mi,{relatedTarget:0}),Qa=lt(dv),fv=ke({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=lt(fv),hv=ke({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=lt(hv),vv=ke({},mr,{data:0}),wc=lt(vv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wv[e])?!!t[e]:!1}function uu(){return xv}var Sv=ke({},mi,{key:function(e){if(e.key){var t=gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kv=lt(Sv),Ev=ke({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=lt(Ev),_v=ke({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Cv=lt(_v),Ov=ke({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=lt(Ov),bv=ke({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=lt(bv),jv=[9,13,27,32],cu=Nt&&"CompositionEvent"in window,Nr=null;Nt&&"documentMode"in document&&(Nr=document.documentMode);var zv=Nt&&"TextEvent"in window&&!Nr,qf=Nt&&(!cu||Nr&&8<Nr&&11>=Nr),Sc=String.fromCharCode(32),kc=!1;function Kf(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Lv(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(kc=!0,Sc);case"textInput":return e=t.data,e===Sc&&kc?null:e;default:return null}}function Mv(e,t){if(In)return e==="compositionend"||!cu&&Kf(e,t)?(e=Xf(),ao=lu=qt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qf&&t.locale!=="ko"?null:t.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rv[e.type]:t==="textarea"}function Zf(e,t,n,r){jf(r),t=_o(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Jr=null;function Av(e){cp(e,0)}function ra(e){var t=Un(e);if(Ef(t))return e}function Dv(e,t){if(e==="change")return t}var ep=!1;if(Nt){var Ga;if(Nt){var Ya="oninput"in document;if(!Ya){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),Ya=typeof _c.oninput=="function"}Ga=Ya}else Ga=!1;ep=Ga&&(!document.documentMode||9<document.documentMode)}function Cc(){$r&&($r.detachEvent("onpropertychange",tp),Jr=$r=null)}function tp(e){if(e.propertyName==="value"&&ra(Jr)){var t=[];Zf(t,Jr,e,nu(e)),Rf(Av,t)}}function Nv(e,t,n){e==="focusin"?(Cc(),$r=t,Jr=n,$r.attachEvent("onpropertychange",tp)):e==="focusout"&&Cc()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(Jr)}function Iv(e,t){if(e==="click")return ra(t)}function Fv(e,t){if(e==="input"||e==="change")return ra(t)}function Hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Hv;function Zr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var n=Oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rp(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uv(e){var t=rp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&np(n.ownerDocument.documentElement,n)){if(r!==null&&du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Pc(n,o);var l=Pc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wv=Nt&&"documentMode"in document&&11>=document.documentMode,Fn=null,Xl=null,Ir=null,ql=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||Fn==null||Fn!==go(r)||(r=Fn,"selectionStart"in r&&du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Zr(Ir,r)||(Ir=r,r=_o(Xl,"onSelect"),0<r.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Xa={},ip={};Nt&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ia(e){if(Xa[e])return Xa[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ip)return Xa[e]=t[n];return e}var op=ia("animationend"),ap=ia("animationiteration"),lp=ia("animationstart"),sp=ia("transitionend"),up=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){up.set(e,t),Tn(t,[e])}for(var qa=0;qa<Tc.length;qa++){var Ka=Tc[qa],Bv=Ka.toLowerCase(),Vv=Ka[0].toUpperCase()+Ka.slice(1);dn(Bv,"on"+Vv)}dn(op,"onAnimationEnd");dn(ap,"onAnimationIteration");dn(lp,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(sp,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bm(r,t,void 0,e),e.currentTarget=null}function cp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;jc(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;jc(i,a,u),o=s}}}if(wo)throw e=Vl,wo=!1,Vl=null,e}function me(e,t){var n=t[ts];n===void 0&&(n=t[ts]=new Set);var r=e+"__bubble";n.has(r)||(dp(t,e,2,!1),n.add(r))}function Ja(e,t,n){var r=0;t&&(r|=4),dp(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Li]){e[Li]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Qv.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Ja("selectionchange",!1,t))}}function dp(e,t,n,r){switch(Yf(t)){case 1:var i=av;break;case 4:i=lv;break;default:i=au}n=i.bind(null,t,n,e),i=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Za(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=gn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Rf(function(){var u=o,c=nu(n),d=[];e:{var p=up.get(e);if(p!==void 0){var h=su,g=e;switch(e){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":h=kv;break;case"focusin":g="focus",h=Qa;break;case"focusout":g="blur",h=Qa;break;case"beforeblur":case"afterblur":h=Qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cv;break;case op:case ap:case lp:h=pv;break;case sp:h=Pv;break;case"scroll":h=sv;break;case"wheel":h=Tv;break;case"copy":case"cut":case"paste":h=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=xc}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,v;f!==null;){v=f;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=Yr(f,m),x!=null&&y.push(ti(f,x,v)))),k)break;f=f.return}0<y.length&&(p=new h(p,g,null,n,c),d.push({event:p,listeners:y}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Ul&&(g=n.relatedTarget||n.fromElement)&&(gn(g)||g[$t]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?gn(g):null,g!==null&&(k=jn(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=yc,x="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=xc,x="onPointerLeave",m="onPointerEnter",f="pointer"),k=h==null?p:Un(h),v=g==null?p:Un(g),p=new y(x,f+"leave",h,n,c),p.target=k,p.relatedTarget=v,x=null,gn(c)===u&&(y=new y(m,f+"enter",g,n,c),y.target=v,y.relatedTarget=k,x=y),k=x,h&&g)t:{for(y=h,m=g,f=0,v=y;v;v=Mn(v))f++;for(v=0,x=m;x;x=Mn(x))v++;for(;0<f-v;)y=Mn(y),f--;for(;0<v-f;)m=Mn(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Mn(y),m=Mn(m)}y=null}else y=null;h!==null&&zc(d,p,h,y,!1),g!==null&&k!==null&&zc(d,k,g,y,!0)}}e:{if(p=u?Un(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var b=Dv;else if(Ec(p))if(ep)b=Fv;else{b=$v;var C=Nv}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=Iv);if(b&&(b=b(e,u))){Zf(d,b,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Nl(p,"number",p.value)}switch(C=u?Un(u):window,e){case"focusin":(Ec(C)||C.contentEditable==="true")&&(Fn=C,Xl=u,Ir=null);break;case"focusout":Ir=Xl=Fn=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,bc(d,n,c);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":bc(d,n,c)}var _;if(cu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else In?Kf(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(qf&&n.locale!=="ko"&&(In||S!=="onCompositionStart"?S==="onCompositionEnd"&&In&&(_=Xf()):(qt=c,lu="value"in qt?qt.value:qt.textContent,In=!0)),C=_o(u,S),0<C.length&&(S=new wc(S,e,null,n,c),d.push({event:S,listeners:C}),_?S.data=_:(_=Jf(n),_!==null&&(S.data=_)))),(_=zv?Lv(e,n):Mv(e,n))&&(u=_o(u,"onBeforeInput"),0<u.length&&(c=new wc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}cp(d,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yr(e,n),o!=null&&r.unshift(ti(e,o,i)),o=Yr(e,t),o!=null&&r.push(ti(e,o,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Yr(n,o),s!=null&&l.unshift(ti(n,s,a))):i||(s=Yr(n,o),s!=null&&l.push(ti(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Yv,"")}function Mi(e,t,n){if(t=Lc(t),Lc(e)!==t&&n)throw Error(I(425))}function Co(){}var Kl=null,Jl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(Kv)}:es;function Kv(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kr(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+vr,ni="__reactProps$"+vr,$t="__reactContainer$"+vr,ts="__reactEvents$"+vr,Jv="__reactListeners$"+vr,Zv="__reactHandles$"+vr;function gn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[Ot])return n;e=Rc(e)}return t}e=n,n=e.parentNode}return null}function vi(e){return e=e[Ot]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function oa(e){return e[ni]||null}var ns=[],Wn=-1;function fn(e){return{current:e}}function ve(e){0>Wn||(e.current=ns[Wn],ns[Wn]=null,Wn--)}function he(e,t){Wn++,ns[Wn]=e.current,e.current=t}var cn={},We=fn(cn),Je=fn(!1),_n=cn;function ir(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function Oo(){ve(Je),ve(We)}function Ac(e,t,n){if(We.current!==cn)throw Error(I(168));he(We,t),he(Je,n)}function fp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Nm(e)||"Unknown",i));return ke({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,_n=We.current,he(We,e),he(Je,Je.current),!0}function Dc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=fp(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,ve(Je),ve(We),he(We,e)):ve(Je),he(Je,n)}var Lt=null,aa=!1,tl=!1;function pp(e){Lt===null?Lt=[e]:Lt.push(e)}function eg(e){aa=!0,pp(e)}function pn(){if(!tl&&Lt!==null){tl=!0;var e=0,t=ce;try{var n=Lt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,aa=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),$f(ru,pn),i}finally{ce=t,tl=!1}}return null}var Bn=[],Vn=0,bo=null,To=0,ut=[],ct=0,Cn=null,Mt=1,Rt="";function mn(e,t){Bn[Vn++]=To,Bn[Vn++]=bo,bo=e,To=t}function hp(e,t,n){ut[ct++]=Mt,ut[ct++]=Rt,ut[ct++]=Cn,Cn=e;var r=Mt;e=Rt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Mt=1<<32-xt(t)+i|n<<i|r,Rt=o+e}else Mt=1<<o|n<<i|r,Rt=e}function fu(e){e.return!==null&&(mn(e,1),hp(e,1,0))}function pu(e){for(;e===bo;)bo=Bn[--Vn],Bn[Vn]=null,To=Bn[--Vn],Bn[Vn]=null;for(;e===Cn;)Cn=ut[--ct],ut[ct]=null,Rt=ut[--ct],ut[ct]=null,Mt=ut[--ct],ut[ct]=null}var it=null,rt=null,ye=!1,yt=null;function mp(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Mt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(ye){var t=rt;if(t){var n=t;if(!Nc(e,t)){if(rs(e))throw Error(I(418));t=tn(n.nextSibling);var r=it;t&&Nc(e,t)?mp(r,n):(e.flags=e.flags&-4097|2,ye=!1,it=e)}}else{if(rs(e))throw Error(I(418));e.flags=e.flags&-4097|2,ye=!1,it=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Ri(e){if(e!==it)return!1;if(!ye)return $c(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=rt)){if(rs(e))throw vp(),Error(I(418));for(;t;)mp(e,t),t=tn(t.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?tn(e.stateNode.nextSibling):null;return!0}function vp(){for(var e=rt;e;)e=tn(e.nextSibling)}function or(){rt=it=null,ye=!1}function hu(e){yt===null?yt=[e]:yt.push(e)}var tg=Ht.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var jo=fn(null),zo=null,Qn=null,mu=null;function vu(){mu=Qn=zo=null}function gu(e){var t=jo.current;ve(jo),e._currentValue=t}function os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){zo=e,mu=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(zo===null)throw Error(I(308));Qn=e,zo.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var yn=null;function yu(e){yn===null?yn=[e]:yn.push(e)}function gp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yu(t)):(n.next=i.next,i.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ue&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,It(e,n)}return i=r.interleaved,i===null?(t.next=t,yu(r)):(t.next=i.next,i.next=t),r.interleaved=t,It(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,iu(e,n)}}function Ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,c=u=s=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(p=t,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=ke({},d,p);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=d}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var wp=new gf.Component().refs;function as(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var la={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=on(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(St(t,e,i,r),so(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=on(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(St(t,e,i,r),so(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=on(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,r),t!==null&&(St(t,e,r,n),so(t,e,r))}};function Hc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,o):!0}function xp(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ze(t)?_n:We.current,r=t.contextTypes,o=(r=r!=null)?ir(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wp,wu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ze(t)?_n:We.current,i.context=ir(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(as(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&la.enqueueReplaceState(i,i.state,null),Lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===wp&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function Sp(e){function t(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=an(m,f),m.index=0,m.sibling=null,m}function o(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,x){return f===null||f.tag!==6?(f=sl(v,m.mode,x),f.return=m,f):(f=i(f,v),f.return=m,f)}function s(m,f,v,x){var b=v.type;return b===$n?c(m,f,v.props.children,x,v.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vt&&Wc(b)===f.type)?(x=i(f,v.props),x.ref=Er(m,f,v),x.return=m,x):(x=mo(v.type,v.key,v.props,null,m.mode,x),x.ref=Er(m,f,v),x.return=m,x)}function u(m,f,v,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ul(v,m.mode,x),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,x,b){return f===null||f.tag!==7?(f=kn(v,m.mode,x,b),f.return=m,f):(f=i(f,v),f.return=m,f)}function d(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sl(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _i:return v=mo(f.type,f.key,f.props,null,m.mode,v),v.ref=Er(m,null,f),v.return=m,v;case Nn:return f=ul(f,m.mode,v),f.return=m,f;case Vt:var x=f._init;return d(m,x(f._payload),v)}if(Lr(f)||yr(f))return f=kn(f,m.mode,v,null),f.return=m,f;Ai(m,f)}return null}function p(m,f,v,x){var b=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(m,f,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _i:return v.key===b?s(m,f,v,x):null;case Nn:return v.key===b?u(m,f,v,x):null;case Vt:return b=v._init,p(m,f,b(v._payload),x)}if(Lr(v)||yr(v))return b!==null?null:c(m,f,v,x,null);Ai(m,v)}return null}function h(m,f,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(f,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _i:return m=m.get(x.key===null?v:x.key)||null,s(f,m,x,b);case Nn:return m=m.get(x.key===null?v:x.key)||null,u(f,m,x,b);case Vt:var C=x._init;return h(m,f,v,C(x._payload),b)}if(Lr(x)||yr(x))return m=m.get(v)||null,c(f,m,x,b,null);Ai(f,x)}return null}function g(m,f,v,x){for(var b=null,C=null,_=f,S=f=0,T=null;_!==null&&S<v.length;S++){_.index>S?(T=_,_=null):T=_.sibling;var j=p(m,_,v[S],x);if(j===null){_===null&&(_=T);break}e&&_&&j.alternate===null&&t(m,_),f=o(j,f,S),C===null?b=j:C.sibling=j,C=j,_=T}if(S===v.length)return n(m,_),ye&&mn(m,S),b;if(_===null){for(;S<v.length;S++)_=d(m,v[S],x),_!==null&&(f=o(_,f,S),C===null?b=_:C.sibling=_,C=_);return ye&&mn(m,S),b}for(_=r(m,_);S<v.length;S++)T=h(_,m,S,v[S],x),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?S:T.key),f=o(T,f,S),C===null?b=T:C.sibling=T,C=T);return e&&_.forEach(function(M){return t(m,M)}),ye&&mn(m,S),b}function y(m,f,v,x){var b=yr(v);if(typeof b!="function")throw Error(I(150));if(v=b.call(v),v==null)throw Error(I(151));for(var C=b=null,_=f,S=f=0,T=null,j=v.next();_!==null&&!j.done;S++,j=v.next()){_.index>S?(T=_,_=null):T=_.sibling;var M=p(m,_,j.value,x);if(M===null){_===null&&(_=T);break}e&&_&&M.alternate===null&&t(m,_),f=o(M,f,S),C===null?b=M:C.sibling=M,C=M,_=T}if(j.done)return n(m,_),ye&&mn(m,S),b;if(_===null){for(;!j.done;S++,j=v.next())j=d(m,j.value,x),j!==null&&(f=o(j,f,S),C===null?b=j:C.sibling=j,C=j);return ye&&mn(m,S),b}for(_=r(m,_);!j.done;S++,j=v.next())j=h(_,m,S,j.value,x),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?S:j.key),f=o(j,f,S),C===null?b=j:C.sibling=j,C=j);return e&&_.forEach(function(R){return t(m,R)}),ye&&mn(m,S),b}function k(m,f,v,x){if(typeof v=="object"&&v!==null&&v.type===$n&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _i:e:{for(var b=v.key,C=f;C!==null;){if(C.key===b){if(b=v.type,b===$n){if(C.tag===7){n(m,C.sibling),f=i(C,v.props.children),f.return=m,m=f;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vt&&Wc(b)===C.type){n(m,C.sibling),f=i(C,v.props),f.ref=Er(m,C,v),f.return=m,m=f;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===$n?(f=kn(v.props.children,m.mode,x,v.key),f.return=m,m=f):(x=mo(v.type,v.key,v.props,null,m.mode,x),x.ref=Er(m,f,v),x.return=m,m=x)}return l(m);case Nn:e:{for(C=v.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=ul(v,m.mode,x),f.return=m,m=f}return l(m);case Vt:return C=v._init,k(m,f,C(v._payload),x)}if(Lr(v))return g(m,f,v,x);if(yr(v))return y(m,f,v,x);Ai(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=sl(v,m.mode,x),f.return=m,m=f),l(m)):n(m,f)}return k}var ar=Sp(!0),kp=Sp(!1),gi={},bt=fn(gi),ri=fn(gi),ii=fn(gi);function wn(e){if(e===gi)throw Error(I(174));return e}function xu(e,t){switch(he(ii,t),he(ri,e),he(bt,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}ve(bt),he(bt,t)}function lr(){ve(bt),ve(ri),ve(ii)}function Ep(e){wn(ii.current);var t=wn(bt.current),n=Il(t,e.type);t!==n&&(he(ri,e),he(bt,n))}function Su(e){ri.current===e&&(ve(bt),ve(ri))}var xe=fn(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function ku(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var uo=Ht.ReactCurrentDispatcher,rl=Ht.ReactCurrentBatchConfig,On=0,Se=null,je=null,Me=null,Ro=!1,Fr=!1,oi=0,ng=0;function Fe(){throw Error(I(321))}function Eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function _u(e,t,n,r,i,o){if(On=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?ag:lg,e=n(r,i),Fr){o=0;do{if(Fr=!1,oi=0,25<=o)throw Error(I(301));o+=1,Me=je=null,t.updateQueue=null,uo.current=sg,e=n(r,i)}while(Fr)}if(uo.current=Ao,t=je!==null&&je.next!==null,On=0,Me=je=Se=null,Ro=!1,t)throw Error(I(300));return e}function Cu(){var e=oi!==0;return oi=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Se.memoizedState=Me=e:Me=Me.next=e,Me}function ht(){if(je===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Me===null?Se.memoizedState:Me.next;if(t!==null)Me=t,je=e;else{if(e===null)throw Error(I(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Me===null?Se.memoizedState=Me=e:Me=Me.next=e}return Me}function ai(e,t){return typeof t=="function"?t(e):t}function il(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if((On&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,Se.lanes|=c,Pn|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,kt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,Pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=ht(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);kt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _p(){}function Cp(e,t){var n=Se,r=ht(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,Ou(bp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,li(9,Pp.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(I(349));(On&30)!==0||Op(n,t,i)}return i}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pp(e,t,n,r){t.value=n,t.getSnapshot=r,Tp(t)&&jp(e)}function bp(e,t,n){return n(function(){Tp(t)&&jp(e)})}function Tp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function jp(e){var t=It(e,1);t!==null&&St(t,e,1,-1)}function Bc(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=og.bind(null,Se,e),[t.memoizedState,e]}function li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zp(){return ht().memoizedState}function co(e,t,n,r){var i=Ct();Se.flags|=e,i.memoizedState=li(1|t,n,void 0,r===void 0?null:r)}function sa(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&Eu(r,l.deps)){i.memoizedState=li(t,n,o,r);return}}Se.flags|=e,i.memoizedState=li(1|t,n,o,r)}function Vc(e,t){return co(8390656,8,e,t)}function Ou(e,t){return sa(2048,8,e,t)}function Lp(e,t){return sa(4,2,e,t)}function Mp(e,t){return sa(4,4,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,n){return n=n!=null?n.concat([e]):null,sa(4,4,Rp.bind(null,t,e),n)}function Pu(){}function Dp(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Np(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $p(e,t,n){return(On&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(kt(n,t)||(n=Hf(),Se.lanes|=n,Pn|=n,e.baseState=!0),t)}function rg(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{ce=n,rl.transition=r}}function Ip(){return ht().memoizedState}function ig(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fp(e))Hp(t,n);else if(n=gp(e,t,n,r),n!==null){var i=Qe();St(n,e,r,i),Up(n,t,r)}}function og(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fp(e))Hp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,l)){var s=t.interleaved;s===null?(i.next=i,yu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=gp(e,t,i,r),n!==null&&(i=Qe(),St(n,e,r,i),Up(n,t,r))}}function Fp(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Hp(e,t){Fr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Up(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,iu(e,n)}}var Ao={readContext:pt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},ag={readContext:pt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Vc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ig.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Bc,useDebugValue:Pu,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Bc(!1),t=e[0];return e=rg.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=Ct();if(ye){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Re===null)throw Error(I(349));(On&30)!==0||Op(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vc(bp.bind(null,r,o,e),[e]),r.flags|=2048,li(9,Pp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Re.identifierPrefix;if(ye){var n=Rt,r=Mt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ng++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lg={readContext:pt,useCallback:Dp,useContext:pt,useEffect:Ou,useImperativeHandle:Ap,useInsertionEffect:Lp,useLayoutEffect:Mp,useMemo:Np,useReducer:il,useRef:zp,useState:function(){return il(ai)},useDebugValue:Pu,useDeferredValue:function(e){var t=ht();return $p(t,je.memoizedState,e)},useTransition:function(){var e=il(ai)[0],t=ht().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Cp,useId:Ip,unstable_isNewReconciler:!1},sg={readContext:pt,useCallback:Dp,useContext:pt,useEffect:Ou,useImperativeHandle:Ap,useInsertionEffect:Lp,useLayoutEffect:Mp,useMemo:Np,useReducer:ol,useRef:zp,useState:function(){return ol(ai)},useDebugValue:Pu,useDeferredValue:function(e){var t=ht();return je===null?t.memoizedState=e:$p(t,je.memoizedState,e)},useTransition:function(){var e=ol(ai)[0],t=ht().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:Cp,useId:Ip,unstable_isNewReconciler:!1};function sr(e,t){try{var n="",r=t;do n+=Dm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ug=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,ys=r),ss(e,t)},n}function Bp(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ss(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ug;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Eg.bind(null,e,t,n),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cg=Ht.ReactCurrentOwner,Ke=!1;function Ve(e,t,n,r){t.child=e===null?kp(t,null,n,r):ar(t,e.child,n,r)}function Xc(e,t,n,r,i){n=n.render;var o=t.ref;return er(t,i),r=_u(e,t,n,r,o,i),n=Cu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ye&&n&&fu(t),t.flags|=1,Ve(e,t,r,i),t.child)}function qc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vp(e,t,o,r,i)):(e=mo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(l,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zr(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return us(e,t,n,r,i)}function Qp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Yn,nt),nt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Yn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Yn,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Yn,nt),nt|=r;return Ve(e,t,i,n),t.child}function Gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,n,r,i){var o=Ze(n)?_n:We.current;return o=ir(t,o),er(t,i),n=_u(e,t,n,r,o,i),r=Cu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(ye&&r&&fu(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Kc(e,t,n,r,i){if(Ze(n)){var o=!0;Po(t)}else o=!1;if(er(t,i),t.stateNode===null)fo(e,t),xp(t,n,r),ls(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ze(n)?_n:We.current,u=ir(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Uc(t,l,r,u),Qt=!1;var p=t.memoizedState;l.state=p,Lo(t,r,l,i),s=t.memoizedState,a!==r||p!==s||Je.current||Qt?(typeof c=="function"&&(as(t,n,c,r),s=t.memoizedState),(a=Qt||Hc(t,n,a,r,p,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:vt(t.type,a),l.props=u,d=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=pt(s):(s=Ze(n)?_n:We.current,s=ir(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||p!==s)&&Uc(t,l,r,s),Qt=!1,p=t.memoizedState,l.state=p,Lo(t,r,l,i);var g=t.memoizedState;a!==d||p!==g||Je.current||Qt?(typeof h=="function"&&(as(t,n,h,r),g=t.memoizedState),(u=Qt||Hc(t,n,u,r,p,g,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cs(e,t,n,r,o,i)}function cs(e,t,n,r,i,o){Gp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Dc(t,n,!1),Ft(e,t,o);r=t.stateNode,cg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,o),t.child=ar(t,null,a,o)):Ve(e,t,a,o),t.memoizedState=r.state,i&&Dc(t,n,!0),t.child}function Yp(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),xu(e,t.containerInfo)}function Jc(e,t,n,r,i){return or(),hu(i),t.flags|=256,Ve(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,t,n){var r=t.pendingProps,i=xe.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(xe,i&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=da(l,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fs(n),t.memoizedState=ds,e):bu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dg(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=an(a,o):(o=kn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bu(e,t){return t=da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Di(e,t,n,r){return r!==null&&hu(r),ar(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(I(422))),Di(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=da({mode:"visible",children:r.children},i,0,null),o=kn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&ar(t,e.child,null,l),t.child.memoizedState=fs(l),t.memoizedState=ds,o);if((t.mode&1)===0)return Di(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=al(o,r,void 0),Di(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ke||a){if(r=Re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,It(e,i),St(r,e,i,-1))}return Ru(),r=al(Error(I(421))),Di(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_g.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=tn(i.nextSibling),it=t,ye=!0,yt=null,e!==null&&(ut[ct++]=Mt,ut[ct++]=Rt,ut[ct++]=Cn,Mt=e.id,Rt=e.overflow,Cn=t),t=bu(t,r.children),t.flags|=4096,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),os(e.return,t,n)}function ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ll(t,!0,n,null,o);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fg(e,t,n){switch(t.tag){case 3:Yp(t),or();break;case 5:Ep(t);break;case 1:Ze(t.type)&&Po(t);break;case 4:xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xp(e,t,n):(he(xe,xe.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);he(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Qp(e,t,n)}return Ft(e,t,n)}var Kp,ps,Jp,Zp;Kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ps=function(){};Jp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(bt.current);var o=null;switch(n){case"input":i=Al(e,i),r=Al(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=$l(e,i),r=$l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Fl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zp=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pg(e,t,n){var r=t.pendingProps;switch(pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ze(t.type)&&Oo(),He(t),null;case 3:return r=t.stateNode,lr(),ve(Je),ve(We),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yt!==null&&(Ss(yt),yt=null))),ps(e,t),He(t),null;case 5:Su(t);var i=wn(ii.current);if(n=t.type,e!==null&&t.stateNode!=null)Jp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return He(t),null}if(e=wn(bt.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[ni]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)me(Rr[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":sc(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":cc(r,o),me("invalid",r)}Fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",""+a]):Qr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&me("scroll",r)}switch(n){case"input":Ci(r),uc(r,o,!0);break;case"textarea":Ci(r),dc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Co)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ot]=t,e[ni]=r,Kp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Hl(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)me(Rr[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":sc(e,r),i=Al(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),me("invalid",e);break;case"textarea":cc(e,r),i=$l(e,r),me("invalid",e);break;default:i=r}Fl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Tf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gr(e,s):typeof s=="number"&&Gr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&Js(e,o,s,l))}switch(n){case"input":Ci(e),uc(e,r,!1);break;case"textarea":Ci(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Zp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=wn(ii.current),wn(bt.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return He(t),null;case 13:if(ve(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vp(),or(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Ot]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else yt!==null&&(Ss(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?ze===0&&(ze=3):Ru())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return lr(),ps(e,t),e===null&&ei(t.stateNode.containerInfo),He(t),null;case 10:return gu(t.type._context),He(t),null;case 17:return Ze(t.type)&&Oo(),He(t),null;case 19:if(ve(xe),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)_r(o,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Mo(e),l!==null){for(t.flags|=128,_r(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>ur&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ye)return He(t),null}else 2*_e()-o.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=xe.current,he(xe,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function hg(e,t){switch(pu(t),t.tag){case 1:return Ze(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),ve(Je),ve(We),ku(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(ve(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(xe),null;case 4:return lr(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Ni=!1,Ue=!1,mg=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function hs(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var ed=!1;function vg(e,t){if(Kl=ko,e=rp(),du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=l),p===o&&++c===r&&(s=l),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},ko=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,k=g.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:vt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){Ee(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return g=ed,ed=!1,g}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hs(t,n,o)}i=i.next}while(i!==r)}}function ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eh(e){var t=e.alternate;t!==null&&(e.alternate=null,eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[ni],delete t[ts],delete t[Jv],delete t[Zv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function th(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var Ne=null,gt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)nh(e,t,n),n=n.sibling}function nh(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ta,n)}catch{}switch(n.tag){case 5:Ue||Gn(n,t);case 6:var r=Ne,i=gt;Ne=null,Wt(e,t,n),Ne=r,gt=i,Ne!==null&&(gt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(gt?(e=Ne,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),Kr(e)):el(Ne,n.stateNode));break;case 4:r=Ne,i=gt,Ne=n.stateNode.containerInfo,gt=!0,Wt(e,t,n),Ne=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&hs(n,t,l),i=i.next}while(i!==r)}Wt(e,t,n);break;case 1:if(!Ue&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Wt(e,t,n),Ue=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mg),t.forEach(function(r){var i=Cg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,gt=!1;break e;case 3:Ne=a.stateNode.containerInfo,gt=!0;break e;case 4:Ne=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Ne===null)throw Error(I(160));nh(o,l,i),Ne=null,gt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rh(t,e),t=t.sibling}function rh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),_t(e),r&4){try{Hr(3,e,e.return),ua(3,e)}catch(y){Ee(e,e.return,y)}try{Hr(5,e,e.return)}catch(y){Ee(e,e.return,y)}}break;case 1:mt(t,e),_t(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(mt(t,e),_t(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(y){Ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),Hl(a,l);var u=Hl(a,o);for(l=0;l<s.length;l+=2){var c=s[l],d=s[l+1];c==="style"?Tf(i,d):c==="dangerouslySetInnerHTML"?Pf(i,d):c==="children"?Gr(i,d):Js(i,c,d,u)}switch(a){case"input":Dl(i,o);break;case"textarea":Cf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?qn(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?qn(i,!!o.multiple,o.defaultValue,!0):qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ni]=o}catch(y){Ee(e,e.return,y)}}break;case 6:if(mt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ee(e,e.return,y)}}break;case 3:if(mt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(y){Ee(e,e.return,y)}break;case 4:mt(t,e),_t(e);break;case 13:mt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zu=_e())),r&4&&nd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,mt(t,e),Ue=u):mt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Q=e,c=e.child;c!==null;){for(d=Q=c;Q!==null;){switch(p=Q,h=p.child,p.tag){case 0:case 11:case 14:case 15:Hr(4,p,p.return);break;case 1:Gn(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ee(r,n,y)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){id(d);continue}}h!==null?(h.return=p,Q=h):id(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=bf("display",l))}catch(y){Ee(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ee(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(t,e),_t(e),r&4&&nd(e);break;case 21:break;default:mt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(th(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gr(i,""),r.flags&=-33);var o=td(e);gs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=td(e);vs(e,a,l);break;default:throw Error(I(161))}}catch(s){Ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,n){Q=e,ih(e)}function ih(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ni;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ue;a=Ni;var u=Ue;if(Ni=l,(Ue=s)&&!u)for(Q=i;Q!==null;)l=Q,s=l.child,l.tag===22&&l.memoizedState!==null?od(i):s!==null?(s.return=l,Q=s):od(i);for(;o!==null;)Q=o,ih(o),o=o.sibling;Q=i,Ni=a,Ue=u}rd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,Q=o):rd(e)}}function rd(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ue||t.flags&512&&ms(t)}catch(p){Ee(t,t.return,p)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function id(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function od(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ua(4,t)}catch(s){Ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ee(t,i,s)}}var o=t.return;try{ms(t)}catch(s){Ee(t,o,s)}break;case 5:var l=t.return;try{ms(t)}catch(s){Ee(t,l,s)}}}catch(s){Ee(t,t.return,s)}if(t===e){Q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Q=a;break}Q=t.return}}var yg=Math.ceil,Do=Ht.ReactCurrentDispatcher,Tu=Ht.ReactCurrentOwner,ft=Ht.ReactCurrentBatchConfig,ue=0,Re=null,be=null,$e=0,nt=0,Yn=fn(0),ze=0,si=null,Pn=0,ca=0,ju=0,Ur=null,qe=null,zu=0,ur=1/0,zt=null,No=!1,ys=null,rn=null,$i=!1,Kt=null,$o=0,Wr=0,ws=null,po=-1,ho=0;function Qe(){return(ue&6)!==0?_e():po!==-1?po:po=_e()}function on(e){return(e.mode&1)===0?1:(ue&2)!==0&&$e!==0?$e&-$e:tg.transition!==null?(ho===0&&(ho=Hf()),ho):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e)}function St(e,t,n,r){if(50<Wr)throw Wr=0,ws=null,Error(I(185));hi(e,n,r),((ue&2)===0||e!==Re)&&(e===Re&&((ue&2)===0&&(ca|=n),ze===4&&Xt(e,$e)),et(e,r),n===1&&ue===0&&(t.mode&1)===0&&(ur=_e()+500,aa&&pn()))}function et(e,t){var n=e.callbackNode;tv(e,t);var r=So(e,e===Re?$e:0);if(r===0)n!==null&&hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hc(n),t===1)e.tag===0?eg(ad.bind(null,e)):pp(ad.bind(null,e)),qv(function(){(ue&6)===0&&pn()}),n=null;else{switch(Uf(r)){case 1:n=ru;break;case 4:n=If;break;case 16:n=xo;break;case 536870912:n=Ff;break;default:n=xo}n=fh(n,oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oh(e,t){if(po=-1,ho=0,(ue&6)!==0)throw Error(I(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=So(e,e===Re?$e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Io(e,r);else{t=r;var i=ue;ue|=2;var o=lh();(Re!==e||$e!==t)&&(zt=null,ur=_e()+500,Sn(e,t));do try{Sg();break}catch(a){ah(e,a)}while(1);vu(),Do.current=o,ue=i,be!==null?t=0:(Re=null,$e=0,t=ze)}if(t!==0){if(t===2&&(i=Ql(e),i!==0&&(r=i,t=xs(e,i))),t===1)throw n=si,Sn(e,0),Xt(e,r),et(e,_e()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!wg(i)&&(t=Io(e,r),t===2&&(o=Ql(e),o!==0&&(r=o,t=xs(e,o))),t===1))throw n=si,Sn(e,0),Xt(e,r),et(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:vn(e,qe,zt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=zu+500-_e(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(vn.bind(null,e,qe,zt),t);break}vn(e,qe,zt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-xt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yg(r/1960))-r,10<r){e.timeoutHandle=es(vn.bind(null,e,qe,zt),r);break}vn(e,qe,zt);break;case 5:vn(e,qe,zt);break;default:throw Error(I(329))}}}return et(e,_e()),e.callbackNode===n?oh.bind(null,e):null}function xs(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=qe,qe=n,t!==null&&Ss(t)),e}function Ss(e){qe===null?qe=e:qe.push.apply(qe,e)}function wg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~ju,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function ad(e){if((ue&6)!==0)throw Error(I(327));tr();var t=So(e,0);if((t&1)===0)return et(e,_e()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=si,Sn(e,0),Xt(e,t),et(e,_e()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,qe,zt),et(e,_e()),null}function Lu(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(ur=_e()+500,aa&&pn())}}function bn(e){Kt!==null&&Kt.tag===0&&(ue&6)===0&&tr();var t=ue;ue|=1;var n=ft.transition,r=ce;try{if(ft.transition=null,ce=1,e)return e()}finally{ce=r,ft.transition=n,ue=t,(ue&6)===0&&pn()}}function Mu(){nt=Yn.current,ve(Yn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xv(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:lr(),ve(Je),ve(We),ku();break;case 5:Su(r);break;case 4:lr();break;case 13:ve(xe);break;case 19:ve(xe);break;case 10:gu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(Re=e,be=e=an(e.current,null),$e=nt=t,ze=0,si=null,ju=ca=Pn=0,qe=Ur=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}yn=null}return e}function ah(e,t){do{var n=be;try{if(vu(),uo.current=Ao,Ro){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ro=!1}if(On=0,Me=je=Se=null,Fr=!1,oi=0,Tu.current=null,n===null||n.return===null){ze=1,si=t,be=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=$e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Gc(l);if(h!==null){h.flags&=-257,Yc(h,l,a,o,t),h.mode&1&&Qc(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){Qc(o,u,t),Ru();break e}s=Error(I(426))}}else if(ye&&a.mode&1){var k=Gc(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),Yc(k,l,a,o,t),hu(sr(s,a));break e}}o=s=sr(s,a),ze!==4&&(ze=2),Ur===null?Ur=[o]:Ur.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Wp(o,s,t);Ic(o,m);break e;case 1:a=s;var f=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rn===null||!rn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Bp(o,a,t);Ic(o,x);break e}}o=o.return}while(o!==null)}uh(n)}catch(b){t=b,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function lh(){var e=Do.current;return Do.current=Ao,e===null?Ao:e}function Ru(){(ze===0||ze===3||ze===2)&&(ze=4),Re===null||(Pn&268435455)===0&&(ca&268435455)===0||Xt(Re,$e)}function Io(e,t){var n=ue;ue|=2;var r=lh();(Re!==e||$e!==t)&&(zt=null,Sn(e,t));do try{xg();break}catch(i){ah(e,i)}while(1);if(vu(),ue=n,Do.current=r,be!==null)throw Error(I(261));return Re=null,$e=0,ze}function xg(){for(;be!==null;)sh(be)}function Sg(){for(;be!==null&&!Qm();)sh(be)}function sh(e){var t=dh(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?uh(e):be=t,Tu.current=null}function uh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pg(n,t,nt),n!==null){be=n;return}}else{if(n=hg(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);ze===0&&(ze=5)}function vn(e,t,n){var r=ce,i=ft.transition;try{ft.transition=null,ce=1,kg(e,t,n,r)}finally{ft.transition=i,ce=r}return null}function kg(e,t,n,r){do tr();while(Kt!==null);if((ue&6)!==0)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nv(e,o),e===Re&&(be=Re=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||$i||($i=!0,fh(xo,function(){return tr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ft.transition,ft.transition=null;var l=ce;ce=1;var a=ue;ue|=4,Tu.current=null,vg(e,n),rh(n,e),Uv(Jl),ko=!!Kl,Jl=Kl=null,e.current=n,gg(n),Gm(),ue=a,ce=l,ft.transition=o}else e.current=n;if($i&&($i=!1,Kt=e,$o=i),o=e.pendingLanes,o===0&&(rn=null),qm(n.stateNode),et(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=ys,ys=null,e;return($o&1)!==0&&e.tag!==0&&tr(),o=e.pendingLanes,(o&1)!==0?e===ws?Wr++:(Wr=0,ws=e):Wr=0,pn(),null}function tr(){if(Kt!==null){var e=Uf($o),t=ft.transition,n=ce;try{if(ft.transition=null,ce=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,$o=0,(ue&6)!==0)throw Error(I(331));var i=ue;for(ue|=4,Q=e.current;Q!==null;){var o=Q,l=o.child;if((Q.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(Q=u;Q!==null;){var c=Q;switch(c.tag){case 0:case 11:case 15:Hr(8,c,o)}var d=c.child;if(d!==null)d.return=c,Q=d;else for(;Q!==null;){c=Q;var p=c.sibling,h=c.return;if(eh(c),c===u){Q=null;break}if(p!==null){p.return=h,Q=p;break}Q=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}Q=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,Q=l;else e:for(;Q!==null;){if(o=Q,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Q=m;break e}Q=o.return}}var f=e.current;for(Q=f;Q!==null;){l=Q;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,Q=v;else e:for(l=f;Q!==null;){if(a=Q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ua(9,a)}}catch(b){Ee(a,a.return,b)}if(a===l){Q=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Q=x;break e}Q=a.return}}if(ue=i,pn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ta,e)}catch{}r=!0}return r}finally{ce=n,ft.transition=t}}return!1}function ld(e,t,n){t=sr(n,t),t=Wp(e,t,1),e=nn(e,t,1),t=Qe(),e!==null&&(hi(e,1,t),et(e,t))}function Ee(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=sr(n,e),e=Bp(t,e,1),t=nn(t,e,1),e=Qe(),t!==null&&(hi(t,1,e),et(t,e));break}}t=t.return}}function Eg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&($e&n)===n&&(ze===4||ze===3&&($e&130023424)===$e&&500>_e()-zu?Sn(e,0):ju|=n),et(e,t)}function ch(e,t){t===0&&((e.mode&1)===0?t=1:(t=bi,bi<<=1,(bi&130023424)===0&&(bi=4194304)));var n=Qe();e=It(e,t),e!==null&&(hi(e,t,n),et(e,n))}function _g(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function Cg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),ch(e,n)}var dh;dh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,fg(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,ye&&(t.flags&1048576)!==0&&hp(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var i=ir(t,We.current);er(t,n),i=_u(null,t,r,e,i,n);var o=Cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(o=!0,Po(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wu(t),i.updater=la,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=cs(null,t,r,!0,o,n)):(t.tag=0,ye&&o&&fu(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pg(r),e=vt(r,e),i){case 0:t=us(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Xc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,vt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),us(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Kc(e,t,r,i,n);case 3:e:{if(Yp(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,yp(e,t),Lo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(I(423)),t),t=Jc(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(I(424)),t),t=Jc(e,t,r,n,i);break e}else for(rt=tn(t.stateNode.containerInfo.firstChild),it=t,ye=!0,yt=null,n=kp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===i){t=Ft(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Ep(t),e===null&&is(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Zl(r,i)?l=null:o!==null&&Zl(r,o)&&(t.flags|=32),Gp(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&is(t),null;case 13:return Xp(e,t,n);case 4:return xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Xc(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,he(jo,r._currentValue),r._currentValue=l,o!==null)if(kt(o.value,l)){if(o.children===i.children&&!Je.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Dt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),os(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(I(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),os(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,er(t,n),i=pt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),qc(e,t,r,i,n);case 15:return Vp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),fo(e,t),t.tag=1,Ze(r)?(e=!0,Po(t)):e=!1,er(t,n),xp(t,r,i),ls(t,r,i,n),cs(null,t,r,!0,e,n);case 19:return qp(e,t,n);case 22:return Qp(e,t,n)}throw Error(I(156,t.tag))};function fh(e,t){return $f(e,t)}function Og(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Og(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eu)return 11;if(e===tu)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Au(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $n:return kn(n.children,i,o,t);case Zs:l=8,i|=8;break;case zl:return e=dt(12,n,t,i|2),e.elementType=zl,e.lanes=o,e;case Ll:return e=dt(13,n,t,i),e.elementType=Ll,e.lanes=o,e;case Ml:return e=dt(19,n,t,i),e.elementType=Ml,e.lanes=o,e;case Sf:return da(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:l=10;break e;case xf:l=9;break e;case eu:l=11;break e;case tu:l=14;break e;case Vt:l=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=dt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function da(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Sf,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Du(e,t,n,r,i,o,l,a,s){return e=new bg(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(o),e}function Tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ph(e){if(!e)return cn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ze(n))return fp(e,n,t)}return t}function hh(e,t,n,r,i,o,l,a,s){return e=Du(n,r,!0,e,i,o,l,a,s),e.context=ph(null),n=e.current,r=Qe(),i=on(n),o=Dt(r,i),o.callback=t!=null?t:null,nn(n,o,i),e.current.lanes=i,hi(e,i,r),et(e,r),e}function fa(e,t,n,r){var i=t.current,o=Qe(),l=on(i);return n=ph(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(i,t,l),e!==null&&(St(e,i,l,o),so(e,i,l)),l}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function jg(){return null}var mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}pa.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));fa(e,t,null,null)};pa.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){fa(null,e,null,null)}),t[$t]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Gf(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function zg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(l);o.call(u)}}var l=hh(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=l,e[$t]=l.current,ei(e.nodeType===8?e.parentNode:e),bn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fo(s);a.call(u)}}var s=Du(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=s,e[$t]=s.current,ei(e.nodeType===8?e.parentNode:e),bn(function(){fa(t,s,n,r)}),s}function ma(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Fo(l);a.call(s)}}fa(t,l,e,i)}else l=zg(n,t,e,i,r);return Fo(l)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(iu(t,n|1),et(t,_e()),(ue&6)===0&&(ur=_e()+500,pn()))}break;case 13:bn(function(){var r=It(e,1);if(r!==null){var i=Qe();St(r,e,1,i)}}),Nu(e,1)}};ou=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Qe();St(t,e,134217728,n)}Nu(e,134217728)}};Bf=function(e){if(e.tag===13){var t=on(e),n=It(e,t);if(n!==null){var r=Qe();St(n,e,t,r)}Nu(e,t)}};Vf=function(){return ce};Qf=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Wl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oa(r);if(!i)throw Error(I(90));Ef(r),Dl(r,i)}}}break;case"textarea":Cf(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Lf=Lu;Mf=bn;var Lg={usingClientEntryPoint:!1,Events:[vi,Un,oa,jf,zf,Lu]},Cr={findFiberByHostInstance:gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mg={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{ta=Ii.inject(Mg),Pt=Ii}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(I(200));return Tg(e,t,null,n)};at.createRoot=function(e,t){if(!Iu(e))throw Error(I(299));var n=!1,r="",i=mh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Du(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,ei(e.nodeType===8?e.parentNode:e),new $u(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return bn(e)};at.hydrate=function(e,t,n){if(!ha(t))throw Error(I(200));return ma(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Iu(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=mh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hh(t,null,e,1,n!=null?n:null,i,!1,o,l),e[$t]=t.current,ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pa(t)};at.render=function(e,t,n){if(!ha(t))throw Error(I(200));return ma(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!ha(e))throw Error(I(40));return e._reactRootContainer?(bn(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};at.unstable_batchedUpdates=Lu;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ha(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return ma(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=at})(hf);var cd=hf.exports;Tl.createRoot=cd.createRoot,Tl.hydrateRoot=cd.hydrateRoot;var va={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Fu=Ae?Symbol.for("react.element"):60103,Hu=Ae?Symbol.for("react.portal"):60106,ga=Ae?Symbol.for("react.fragment"):60107,ya=Ae?Symbol.for("react.strict_mode"):60108,wa=Ae?Symbol.for("react.profiler"):60114,xa=Ae?Symbol.for("react.provider"):60109,Sa=Ae?Symbol.for("react.context"):60110,Uu=Ae?Symbol.for("react.async_mode"):60111,ka=Ae?Symbol.for("react.concurrent_mode"):60111,Ea=Ae?Symbol.for("react.forward_ref"):60112,_a=Ae?Symbol.for("react.suspense"):60113,Rg=Ae?Symbol.for("react.suspense_list"):60120,Ca=Ae?Symbol.for("react.memo"):60115,Oa=Ae?Symbol.for("react.lazy"):60116,Ag=Ae?Symbol.for("react.block"):60121,Dg=Ae?Symbol.for("react.fundamental"):60117,Ng=Ae?Symbol.for("react.responder"):60118,$g=Ae?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fu:switch(e=e.type,e){case Uu:case ka:case ga:case wa:case ya:case _a:return e;default:switch(e=e&&e.$$typeof,e){case Sa:case Ea:case Oa:case Ca:case xa:return e;default:return t}}case Hu:return t}}}function vh(e){return st(e)===ka}de.AsyncMode=Uu;de.ConcurrentMode=ka;de.ContextConsumer=Sa;de.ContextProvider=xa;de.Element=Fu;de.ForwardRef=Ea;de.Fragment=ga;de.Lazy=Oa;de.Memo=Ca;de.Portal=Hu;de.Profiler=wa;de.StrictMode=ya;de.Suspense=_a;de.isAsyncMode=function(e){return vh(e)||st(e)===Uu};de.isConcurrentMode=vh;de.isContextConsumer=function(e){return st(e)===Sa};de.isContextProvider=function(e){return st(e)===xa};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fu};de.isForwardRef=function(e){return st(e)===Ea};de.isFragment=function(e){return st(e)===ga};de.isLazy=function(e){return st(e)===Oa};de.isMemo=function(e){return st(e)===Ca};de.isPortal=function(e){return st(e)===Hu};de.isProfiler=function(e){return st(e)===wa};de.isStrictMode=function(e){return st(e)===ya};de.isSuspense=function(e){return st(e)===_a};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ga||e===ka||e===wa||e===ya||e===_a||e===Rg||typeof e=="object"&&e!==null&&(e.$$typeof===Oa||e.$$typeof===Ca||e.$$typeof===xa||e.$$typeof===Sa||e.$$typeof===Ea||e.$$typeof===Dg||e.$$typeof===Ng||e.$$typeof===$g||e.$$typeof===Ag)};de.typeOf=st;(function(e){e.exports=de})(va);function Ig(e){function t($,E,U,D,O){for(var K=0,N=0,Z=0,ne=0,ae,te,Ce=0,De=0,re,Le=re=ae=0,se=0,Te=0,hn=0,Oe=0,Ut=U.length,jt=Ut-1,tt,ee="",pe="",Ln="",gr="",Et;se<Ut;){if(te=U.charCodeAt(se),se===jt&&N+ne+Z+K!==0&&(N!==0&&(te=N===47?10:47),ne=Z=K=0,Ut++,jt++),N+ne+Z+K===0){if(se===jt&&(0<Te&&(ee=ee.replace(p,"")),0<ee.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:ee+=U.charAt(se)}te=59}switch(te){case 123:for(ee=ee.trim(),ae=ee.charCodeAt(0),re=1,Oe=++se;se<Ut;){switch(te=U.charCodeAt(se)){case 123:re++;break;case 125:re--;break;case 47:switch(te=U.charCodeAt(se+1)){case 42:case 47:e:{for(Le=se+1;Le<jt;++Le)switch(U.charCodeAt(Le)){case 47:if(te===42&&U.charCodeAt(Le-1)===42&&se+2!==Le){se=Le+1;break e}break;case 10:if(te===47){se=Le+1;break e}}se=Le}}break;case 91:te++;case 40:te++;case 34:case 39:for(;se++<jt&&U.charCodeAt(se)!==te;);}if(re===0)break;se++}switch(re=U.substring(Oe,se),ae===0&&(ae=(ee=ee.replace(d,"").trim()).charCodeAt(0)),ae){case 64:switch(0<Te&&(ee=ee.replace(p,"")),te=ee.charCodeAt(1),te){case 100:case 109:case 115:case 45:Te=E;break;default:Te=X}if(re=t(E,Te,re,te,O+1),Oe=re.length,0<z&&(Te=n(X,ee,hn),Et=a(3,re,Te,E,L,R,Oe,te,O,D),ee=Te.join(""),Et!==void 0&&(Oe=(re=Et.trim()).length)===0&&(te=0,re="")),0<Oe)switch(te){case 115:ee=ee.replace(C,l);case 100:case 109:case 45:re=ee+"{"+re+"}";break;case 107:ee=ee.replace(f,"$1 $2"),re=ee+"{"+re+"}",re=Y===1||Y===2&&o("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=ee+re,D===112&&(re=(pe+=re,""))}else re="";break;default:re=t(E,n(E,ee,hn),re,D,O+1)}Ln+=re,re=hn=Te=Le=ae=0,ee="",te=U.charCodeAt(++se);break;case 125:case 59:if(ee=(0<Te?ee.replace(p,""):ee).trim(),1<(Oe=ee.length))switch(Le===0&&(ae=ee.charCodeAt(0),ae===45||96<ae&&123>ae)&&(Oe=(ee=ee.replace(" ",":")).length),0<z&&(Et=a(1,ee,E,$,L,R,pe.length,D,O,D))!==void 0&&(Oe=(ee=Et.trim()).length)===0&&(ee="\0\0"),ae=ee.charCodeAt(0),te=ee.charCodeAt(1),ae){case 0:break;case 64:if(te===105||te===99){gr+=ee+U.charAt(se);break}default:ee.charCodeAt(Oe-1)!==58&&(pe+=i(ee,ae,te,ee.charCodeAt(2)))}hn=Te=Le=ae=0,ee="",te=U.charCodeAt(++se)}}switch(te){case 13:case 10:N===47?N=0:1+ae===0&&D!==107&&0<ee.length&&(Te=1,ee+="\0"),0<z*F&&a(0,ee,E,$,L,R,pe.length,D,O,D),R=1,L++;break;case 59:case 125:if(N+ne+Z+K===0){R++;break}default:switch(R++,tt=U.charAt(se),te){case 9:case 32:if(ne+K+N===0)switch(Ce){case 44:case 58:case 9:case 32:tt="";break;default:te!==32&&(tt=" ")}break;case 0:tt="\\0";break;case 12:tt="\\f";break;case 11:tt="\\v";break;case 38:ne+N+K===0&&(Te=hn=1,tt="\f"+tt);break;case 108:if(ne+N+K+G===0&&0<Le)switch(se-Le){case 2:Ce===112&&U.charCodeAt(se-3)===58&&(G=Ce);case 8:De===111&&(G=De)}break;case 58:ne+N+K===0&&(Le=se);break;case 44:N+Z+ne+K===0&&(Te=1,tt+="\r");break;case 34:case 39:N===0&&(ne=ne===te?0:ne===0?te:ne);break;case 91:ne+N+Z===0&&K++;break;case 93:ne+N+Z===0&&K--;break;case 41:ne+N+K===0&&Z--;break;case 40:if(ne+N+K===0){if(ae===0)switch(2*Ce+3*De){case 533:break;default:ae=1}Z++}break;case 64:N+Z+ne+K+Le+re===0&&(re=1);break;case 42:case 47:if(!(0<ne+K+Z))switch(N){case 0:switch(2*te+3*U.charCodeAt(se+1)){case 235:N=47;break;case 220:Oe=se,N=42}break;case 42:te===47&&Ce===42&&Oe+2!==se&&(U.charCodeAt(Oe+2)===33&&(pe+=U.substring(Oe,se+1)),tt="",N=0)}}N===0&&(ee+=tt)}De=Ce,Ce=te,se++}if(Oe=pe.length,0<Oe){if(Te=E,0<z&&(Et=a(2,pe,Te,$,L,R,Oe,D,O,D),Et!==void 0&&(pe=Et).length===0))return gr+pe+Ln;if(pe=Te.join(",")+"{"+pe+"}",Y*G!==0){switch(Y!==2||o(pe,2)||(G=0),G){case 111:pe=pe.replace(x,":-moz-$1")+pe;break;case 112:pe=pe.replace(v,"::-webkit-input-$1")+pe.replace(v,"::-moz-$1")+pe.replace(v,":-ms-input-$1")+pe}G=0}}return gr+pe+Ln}function n($,E,U){var D=E.trim().split(k);E=D;var O=D.length,K=$.length;switch(K){case 0:case 1:var N=0;for($=K===0?"":$[0]+" ";N<O;++N)E[N]=r($,E[N],U).trim();break;default:var Z=N=0;for(E=[];N<O;++N)for(var ne=0;ne<K;++ne)E[Z++]=r($[ne]+" ",D[N],U).trim()}return E}function r($,E,U){var D=E.charCodeAt(0);switch(33>D&&(D=(E=E.trim()).charCodeAt(0)),D){case 38:return E.replace(m,"$1"+$.trim());case 58:return $.trim()+E.replace(m,"$1"+$.trim());default:if(0<1*U&&0<E.indexOf("\f"))return E.replace(m,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+E}function i($,E,U,D){var O=$+";",K=2*E+3*U+4*D;if(K===944){$=O.indexOf(":",9)+1;var N=O.substring($,O.length-1).trim();return N=O.substring(0,$).trim()+N+";",Y===1||Y===2&&o(N,1)?"-webkit-"+N+N:N}if(Y===0||Y===2&&!o(O,1))return O;switch(K){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(M,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return N=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+O+"-ms-flex-pack"+N+O;case 1005:return g.test(O)?O.replace(h,":-webkit-")+O.replace(h,":-moz-")+O:O;case 1e3:switch(N=O.substring(13).trim(),E=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(E)){case 226:N=O.replace(b,"tb");break;case 232:N=O.replace(b,"tb-rl");break;case 220:N=O.replace(b,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+N+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(E=(O=$).length-10,N=(O.charCodeAt(E)===33?O.substring(0,E):O).substring($.indexOf(":",7)+1).trim(),K=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:O=O.replace(N,"-webkit-"+N)+";"+O;break;case 207:case 102:O=O.replace(N,"-webkit-"+(102<K?"inline-":"")+"box")+";"+O.replace(N,"-webkit-"+N)+";"+O.replace(N,"-ms-"+N+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return N=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+N+"-ms-flex-"+N+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(S,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(S,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(j.test($)===!0)return(N=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),E,U,D).replace(":fill-available",":stretch"):O.replace(N,"-webkit-"+N)+O.replace(N,"-moz-"+N.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,U+D===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+O}return O}function o($,E){var U=$.indexOf(E===1?":":"{"),D=$.substring(0,E!==3?U:10);return U=$.substring(U+1,$.length-1),A(E!==2?D:D.replace(T,"$1"),U,E)}function l($,E){var U=i(E,E.charCodeAt(0),E.charCodeAt(1),E.charCodeAt(2));return U!==E+";"?U.replace(_," or ($1)").substring(4):"("+E+")"}function a($,E,U,D,O,K,N,Z,ne,ae){for(var te=0,Ce=E,De;te<z;++te)switch(De=fe[te].call(c,$,Ce,U,D,O,K,N,Z,ne,ae)){case void 0:case!1:case!0:case null:break;default:Ce=De}if(Ce!==E)return Ce}function s($){switch($){case void 0:case null:z=fe.length=0;break;default:if(typeof $=="function")fe[z++]=$;else if(typeof $=="object")for(var E=0,U=$.length;E<U;++E)s($[E]);else F=!!$|0}return s}function u($){return $=$.prefix,$!==void 0&&(A=null,$?typeof $!="function"?Y=1:(Y=2,A=$):Y=0),u}function c($,E){var U=$;if(33>U.charCodeAt(0)&&(U=U.trim()),B=U,U=[B],0<z){var D=a(-1,E,U,U,L,R,0,0,0,0);D!==void 0&&typeof D=="string"&&(E=D)}var O=t(X,U,E,0,0);return 0<z&&(D=a(-2,O,U,U,L,R,O.length,0,0,0),D!==void 0&&(O=D)),B="",G=0,R=L=1,O}var d=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,x=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,S=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,M=/([^-])(image-set\()/,R=1,L=1,G=0,Y=1,X=[],fe=[],z=0,A=null,F=0,B="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var Fg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Hg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ug=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dd=Hg(function(e){return Ug.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wu=va.exports,Wg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bu={};Bu[Wu.ForwardRef]=Vg;Bu[Wu.Memo]=gh;function fd(e){return Wu.isMemo(e)?gh:Bu[e.$$typeof]||Wg}var Qg=Object.defineProperty,Gg=Object.getOwnPropertyNames,pd=Object.getOwnPropertySymbols,Yg=Object.getOwnPropertyDescriptor,Xg=Object.getPrototypeOf,hd=Object.prototype;function yh(e,t,n){if(typeof t!="string"){if(hd){var r=Xg(t);r&&r!==hd&&yh(e,r,n)}var i=Gg(t);pd&&(i=i.concat(pd(t)));for(var o=fd(e),l=fd(t),a=0;a<i.length;++a){var s=i[a];if(!Bg[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=Yg(t,s);try{Qg(e,s,u)}catch{}}}}return e}var qg=yh;function At(){return(At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var md=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ks=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!va.exports.typeOf(e)},Ho=Object.freeze([]),ln=Object.freeze({});function ui(e){return typeof e=="function"}function vd(e){return e.displayName||e.name||"Component"}function Vu(e){return e&&typeof e.styledComponentId=="string"}var cr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qu=typeof window<"u"&&"HTMLElement"in window,Kg=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function yi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Jg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&yi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),vo=new Map,Uo=new Map,Br=1,Fi=function(e){if(vo.has(e))return vo.get(e);for(;Uo.has(Br);)Br++;var t=Br++;return vo.set(e,t),Uo.set(t,e),t},Zg=function(e){return Uo.get(e)},e0=function(e,t){t>=Br&&(Br=t+1),vo.set(e,t),Uo.set(t,e)},t0="style["+cr+'][data-styled-version="5.3.5"]',n0=new RegExp("^"+cr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),r0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},i0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(n0);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(e0(u,s),r0(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},o0=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},wh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(cr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(cr,"active"),r.setAttribute("data-styled-version","5.3.5");var l=o0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},a0=function(){function e(n){var r=this.element=wh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}yi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),l0=function(){function e(n){var r=this.element=wh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),s0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),gd=Qu,u0={isServer:!Qu,useCSSOMInjection:!Kg},xh=function(){function e(n,r,i){n===void 0&&(n=ln),r===void 0&&(r={}),this.options=At({},u0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qu&&gd&&(gd=!1,function(o){for(var l=document.querySelectorAll(t0),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(cr)!=="active"&&(i0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Fi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(At({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new s0(l):o?new a0(l):new l0(l),new Jg(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Fi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Fi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=Zg(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var c=cr+".g"+l+'[id="'+a+'"]',d="";s!==void 0&&s.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),c0=/(a)(d)/gi,yd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Es(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yd(t%52)+n;return(yd(t%52)+n).replace(c0,"$1-$2")}var Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sh=function(e){return Xn(5381,e)};function d0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ui(n)&&!Vu(n))return!1}return!0}var f0=Sh("5.3.5"),p0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&d0(t),this.componentId=n,this.baseHash=Xn(f0,n),this.baseStyle=r,xh.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=dr(this.rules,t,n,r).join(""),a=Es(Xn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Xn(this.baseHash,r.hash),d="",p=0;p<u;p++){var h=this.rules[p];if(typeof h=="string")d+=h;else if(h){var g=dr(h,t,n,r),y=Array.isArray(g)?g.join(""):g;c=Xn(c,y+p),d+=y}}if(d){var k=Es(c>>>0);if(!n.hasNameForId(i,k)){var m=r(d,"."+k,void 0,i);n.insertRules(i,k,m)}o.push(k)}}return o.join(" ")},e}(),h0=/^\s*\/\/.*$/gm,m0=[":","[",".","#"];function v0(e){var t,n,r,i,o=e===void 0?ln:e,l=o.options,a=l===void 0?ln:l,s=o.plugins,u=s===void 0?Ho:s,c=new Ig(a),d=[],p=function(y){function k(m){if(m)try{y(m+"}")}catch{}}return function(m,f,v,x,b,C,_,S,T,j){switch(m){case 1:if(T===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(S===0)return f+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(v[0]+f),"";default:return f+(j===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(k)}}}(function(y){d.push(y)}),h=function(y,k,m){return k===0&&m0.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function g(y,k,m,f){f===void 0&&(f="&");var v=y.replace(h0,""),x=k&&m?m+" "+k+" { "+v+" }":v;return t=f,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!k?"":k,x)}return c.use([].concat(u,[function(y,k,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,h))},p,function(y){if(y===-2){var k=d;return d=[],k}}])),g.hash=u.length?u.reduce(function(y,k){return k.name||yi(15),Xn(y,k.name)},5381).toString():"",g}var kh=pi.createContext();kh.Consumer;var Eh=pi.createContext(),g0=(Eh.Consumer,new xh),_s=v0();function y0(){return q.exports.useContext(kh)||g0}function w0(){return q.exports.useContext(Eh)||_s}var x0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=_s);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return yi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_s),this.name+t.hash},e}(),S0=/([A-Z])/,k0=/([A-Z])/g,E0=/^ms-/,_0=function(e){return"-"+e.toLowerCase()};function wd(e){return S0.test(e)?e.replace(k0,_0).replace(E0,"-ms-"):e}var xd=function(e){return e==null||e===!1||e===""};function dr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=dr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(xd(e))return"";if(Vu(e))return"."+e.styledComponentId;if(ui(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return dr(s,t,n,r)}var u;return e instanceof x0?n?(e.inject(n,r),e.getName(r)):e:ks(e)?function c(d,p){var h,g,y=[];for(var k in d)d.hasOwnProperty(k)&&!xd(d[k])&&(Array.isArray(d[k])&&d[k].isCss||ui(d[k])?y.push(wd(k)+":",d[k],";"):ks(d[k])?y.push.apply(y,c(d[k],k)):y.push(wd(k)+": "+(h=k,(g=d[k])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||h in Fg?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(y,["}"]):y}(e):e.toString()}var Sd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function C0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ui(e)||ks(e)?Sd(dr(md(Ho,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Sd(dr(md(e,n)))}var O0=function(e,t,n){return n===void 0&&(n=ln),e.theme!==n.theme&&e.theme||t||n.theme},P0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b0=/(^-|-$)/g;function cl(e){return e.replace(P0,"-").replace(b0,"")}var T0=function(e){return Es(Sh(e)>>>0)};function Hi(e){return typeof e=="string"&&!0}var Cs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},j0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function z0(e,t,n){var r=e[n];Cs(t)&&Cs(r)?_h(r,t):e[n]=t}function _h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Cs(l))for(var a in l)j0(a)&&z0(e,l[a],a)}return e}var Ch=pi.createContext();Ch.Consumer;var dl={};function Oh(e,t,n){var r=Vu(e),i=!Hi(e),o=t.attrs,l=o===void 0?Ho:o,a=t.componentId,s=a===void 0?function(f,v){var x=typeof f!="string"?"sc":cl(f);dl[x]=(dl[x]||0)+1;var b=x+"-"+T0("5.3.5"+x+dl[x]);return v?v+"-"+b:b}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(f){return Hi(f)?"styled."+f:"Styled("+vd(f)+")"}(e):u,d=t.displayName&&t.componentId?cl(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(f,v,x){return e.shouldForwardProp(f,v,x)&&t.shouldForwardProp(f,v,x)}:e.shouldForwardProp);var g,y=new p0(n,d,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,m=function(f,v){return function(x,b,C,_){var S=x.attrs,T=x.componentStyle,j=x.defaultProps,M=x.foldedComponentIds,R=x.shouldForwardProp,L=x.styledComponentId,G=x.target,Y=function(D,O,K){D===void 0&&(D=ln);var N=At({},O,{theme:D}),Z={};return K.forEach(function(ne){var ae,te,Ce,De=ne;for(ae in ui(De)&&(De=De(N)),De)N[ae]=Z[ae]=ae==="className"?(te=Z[ae],Ce=De[ae],te&&Ce?te+" "+Ce:te||Ce):De[ae]}),[N,Z]}(O0(b,q.exports.useContext(Ch),j)||ln,b,S),X=Y[0],fe=Y[1],z=function(D,O,K,N){var Z=y0(),ne=w0(),ae=O?D.generateAndInjectStyles(ln,Z,ne):D.generateAndInjectStyles(K,Z,ne);return ae}(T,_,X),A=C,F=fe.$as||b.$as||fe.as||b.as||G,B=Hi(F),$=fe!==b?At({},b,{},fe):b,E={};for(var U in $)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?E.as=$[U]:(R?R(U,dd,F):!B||dd(U))&&(E[U]=$[U]));return b.style&&fe.style!==b.style&&(E.style=At({},b.style,{},fe.style)),E.className=Array.prototype.concat(M,L,z!==L?z:null,b.className,fe.className).filter(Boolean).join(" "),E.ref=A,q.exports.createElement(F,E)}(g,f,v,k)};return m.displayName=c,(g=pi.forwardRef(m)).attrs=p,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ho,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(f){var v=t.componentId,x=function(C,_){if(C==null)return{};var S,T,j={},M=Object.keys(C);for(T=0;T<M.length;T++)S=M[T],_.indexOf(S)>=0||(j[S]=C[S]);return j}(t,["componentId"]),b=v&&v+"-"+(Hi(f)?f:cl(vd(f)));return Oh(f,At({},x,{attrs:p,componentId:b}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?_h({},e.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&qg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Os=function(e){return function t(n,r,i){if(i===void 0&&(i=ln),!va.exports.isValidElementType(r))return yi(1,String(r));var o=function(){return n(r,i,C0.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,At({},i,{},l))},o.attrs=function(l){return t(n,r,At({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Oh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Os[e]=Os(e)});const P=Os,L0=P.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,M0=P.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,fl=P.div`
    margin-left: 2rem;
    @media screen and (min-width: 390){
        flex-direction: column;
        
    }
`,pl=P.span`
    color: white;
    font-weight: 500;
`,Ui=P.p`
    color: rgb(180, 180, 180);
`,R0=P.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 390px) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }


`,hl=P.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: 390px) {
        margin-top: 30%;
    }
`,ml=P.a`
    text-decoration: none;
`,A0=P.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: 390px) {
        flex-wrap: wrap;
        width: 20%;
    }

`,D0=P.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`,N0=P.hr`
    width: 90%;
`,$0=P.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,I0=P.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;
`,F0=P.div`
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`,Or=P.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`,Pr=P.img`
    height: 20vh;

    @media screen and (max-width: 1024px){
        height: 10vh;
        
    }
    
`,H0=P.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,U0="/Site-Serra/assets/facebook.e9ec1758.svg",W0="/Site-Serra/assets/instagram.a8d6cb3d.svg",B0="/Site-Serra/assets/linkedin.3daaec60.svg",V0="/Site-Serra/assets/voitto.e51ea618.svg",Q0="/Site-Serra/assets/iprj.03355e19.svg",G0="/Site-Serra/assets/inovafri.c4b07fe0.svg",Y0="/Site-Serra/assets/wiseup.d9d06fa3.svg",X0="/Site-Serra/assets/ligajr.52feeabf.svg";var Pa={exports:{}},ba={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=q.exports,K0=Symbol.for("react.element"),J0=Symbol.for("react.fragment"),Z0=Object.prototype.hasOwnProperty,ey=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function Ph(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Z0.call(t,r)&&!ty.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:K0,type:e,key:o,ref:l,props:i,_owner:ey.current}}ba.Fragment=J0;ba.jsx=Ph;ba.jsxs=Ph;(function(e){e.exports=ba})(Pa);const bh=Pa.exports.Fragment,w=Pa.exports.jsx,H=Pa.exports.jsxs,ny=()=>H(L0,{children:[H(H0,{children:[w(I0,{children:"Parceiros"}),H(F0,{children:[w(Or,{target:"_blank",rel:"noopener noreferrer",href:"https://www.voitto.com.br",children:w(Pr,{src:V0,alt:"Voitto"})}),w(Or,{target:"_blank",rel:"noopener noreferrer",href:"http://www.iprj.uerj.br/",children:w(Pr,{src:Q0,alt:"IPRJ"})}),w(Or,{target:"_blank",rel:"noopener noreferrer",href:"https://inovafri.com.br/",children:w(Pr,{src:G0,alt:"InovaFri"})}),w(Or,{target:"_blank",rel:"noopener noreferrer",href:"https://wiseup.com/",children:w(Pr,{src:Y0,alt:"WiseUp"})}),w(Or,{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/ligajuniornf/",children:w(Pr,{src:X0,alt:"Liga Jr NF"})})]})]}),H(D0,{children:[H(M0,{children:[H(A0,{children:[H(ml,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(hl,{src:U0,alt:"Facebook Serra.Jr"})]}),H(ml,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(hl,{src:W0,alt:"Instagram Serra.Jr"})]}),H(ml,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(hl,{src:B0,alt:""})," "]})]}),H(R0,{children:[H(fl,{children:[w(pl,{children:"Institucional"}),w(Ui,{children:"Serra Jr Engenharia"})]}),H(fl,{children:[w(pl,{children:"Atendimento"}),w(Ui,{children:"Segunda a sexta"}),w(Ui,{children:"9h \xE0s 19h"})]}),H(fl,{children:[w(pl,{children:"Contato"}),w(Ui,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(N0,{}),H($0,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]}),ry="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",iy="/Site-Serra/assets/arrow-header.98a9eade.svg";function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));var kd=function(e){return e},Ed="beforeunload",oy="popstate";function ay(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var _=r.location,S=_.pathname,T=_.search,j=_.hash,M=i.state||{};return[M.idx,kd({pathname:S,search:T,hash:j,state:M.usr||null,key:M.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var _=xn.Pop,S=o(),T=S[0],j=S[1];if(h.length){if(T!=null){var M=c-T;M&&(l={action:_,location:j,retry:function(){b(M*-1)}},b(M))}}else f(_)}}r.addEventListener(oy,a);var s=xn.Pop,u=o(),c=u[0],d=u[1],p=Cd(),h=Cd();c==null&&(c=0,i.replaceState(Wo({},i.state,{idx:c}),""));function g(_){return typeof _=="string"?_:Ps(_)}function y(_,S){return S===void 0&&(S=null),kd(Wo({pathname:d.pathname,hash:"",search:""},typeof _=="string"?zn(_):_,{state:S,key:ly()}))}function k(_,S){return[{usr:_.state,key:_.key,idx:S},g(_)]}function m(_,S,T){return!h.length||(h.call({action:_,location:S,retry:T}),!1)}function f(_){s=_;var S=o();c=S[0],d=S[1],p.call({action:s,location:d})}function v(_,S){var T=xn.Push,j=y(_,S);function M(){v(_,S)}if(m(T,j,M)){var R=k(j,c+1),L=R[0],G=R[1];try{i.pushState(L,"",G)}catch{r.location.assign(G)}f(T)}}function x(_,S){var T=xn.Replace,j=y(_,S);function M(){x(_,S)}if(m(T,j,M)){var R=k(j,c),L=R[0],G=R[1];i.replaceState(L,"",G),f(T)}}function b(_){i.go(_)}var C={get action(){return s},get location(){return d},createHref:g,push:v,replace:x,go:b,back:function(){b(-1)},forward:function(){b(1)},listen:function(S){return p.push(S)},block:function(S){var T=h.push(S);return h.length===1&&r.addEventListener(Ed,_d),function(){T(),h.length||r.removeEventListener(Ed,_d)}}};return C}function _d(e){e.preventDefault(),e.returnValue=""}function Cd(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function ly(){return Math.random().toString(36).substr(2,8)}function Ps(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function zn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Gu=q.exports.createContext(null),Yu=q.exports.createContext(null),Ta=q.exports.createContext({outlet:null,matches:[]});function Tt(e,t){if(!e)throw new Error(t)}function sy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zn(t):t,i=zh(r.pathname||"/",n);if(i==null)return null;let o=Th(e);uy(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=yy(o[a],i);return l}function Th(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||Tt(!1),l.relativePath=l.relativePath.slice(r.length));let a=sn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&Tt(!1),Th(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:vy(a,i.index),routesMeta:s})}),t}function uy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cy=/^:\w+$/,dy=3,fy=2,py=1,hy=10,my=-2,Od=e=>e==="*";function vy(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=my),t&&(r+=fy),n.filter(i=>!Od(i)).reduce((i,o)=>i+(cy.test(o)?dy:o===""?py:hy),r)}function gy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=wy({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:sn([i,c.pathname]),pathnameBase:Lh(sn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=sn([i,c.pathnameBase]))}return o}function wy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=a[d]||"";l=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=Sy(a[d]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function xy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Sy(e,t){try{return decodeURIComponent(e)}catch{return e}}function ky(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:Ey(n,t):t,search:Cy(r),hash:Oy(i)}}function Ey(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jh(e,t,n){let r=typeof e=="string"?zn(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=ky(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function _y(e){return e===""||e.pathname===""?"/":typeof e=="string"?zn(e).pathname:e.pathname}function zh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),Lh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Py(e){wi()||Tt(!1);let{basename:t,navigator:n}=q.exports.useContext(Gu),{hash:r,pathname:i,search:o}=Mh(e),l=i;if(t!=="/"){let a=_y(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):sn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function wi(){return q.exports.useContext(Yu)!=null}function ja(){return wi()||Tt(!1),q.exports.useContext(Yu).location}function by(){wi()||Tt(!1);let{basename:e,navigator:t}=q.exports.useContext(Gu),{matches:n}=q.exports.useContext(Ta),{pathname:r}=ja(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=q.exports.useRef(!1);return q.exports.useEffect(()=>{o.current=!0}),q.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=jh(a,JSON.parse(i),r);e!=="/"&&(u.pathname=sn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function Mh(e){let{matches:t}=q.exports.useContext(Ta),{pathname:n}=ja(),r=JSON.stringify(t.map(i=>i.pathnameBase));return q.exports.useMemo(()=>jh(e,JSON.parse(r),n),[e,r,n])}function Ty(e,t){wi()||Tt(!1);let{matches:n}=q.exports.useContext(Ta),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=ja(),a;if(t){var s;let p=typeof t=="string"?zn(t):t;o==="/"||((s=p.pathname)==null?void 0:s.startsWith(o))||Tt(!1),a=p}else a=l;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",d=sy(e,{pathname:c});return jy(d&&d.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:sn([o,p.pathname]),pathnameBase:p.pathnameBase==="/"?o:sn([o,p.pathnameBase])})),n)}function jy(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>q.exports.createElement(Ta.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Dn(e){Tt(!1)}function zy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=xn.Pop,navigator:o,static:l=!1}=e;wi()&&Tt(!1);let a=Lh(t),s=q.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=zn(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:h="default"}=r,g=q.exports.useMemo(()=>{let y=zh(u,a);return y==null?null:{pathname:y,search:c,hash:d,state:p,key:h}},[a,u,c,d,p,h]);return g==null?null:q.exports.createElement(Gu.Provider,{value:s},q.exports.createElement(Yu.Provider,{children:n,value:{location:g,navigationType:i}}))}function Ly(e){let{children:t,location:n}=e;return Ty(bs(t),n)}function bs(e){let t=[];return q.exports.Children.forEach(e,n=>{if(!q.exports.isValidElement(n))return;if(n.type===q.exports.Fragment){t.push.apply(t,bs(n.props.children));return}n.type!==Dn&&Tt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=bs(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ts.apply(this,arguments)}function My(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Ry=["onClick","reloadDocument","replace","state","target","to"];function Ay(e){let{basename:t,children:n,window:r}=e,i=q.exports.useRef();i.current==null&&(i.current=ay({window:r}));let o=i.current,[l,a]=q.exports.useState({action:o.action,location:o.location});return q.exports.useLayoutEffect(()=>o.listen(a),[o]),q.exports.createElement(zy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function Dy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const wt=q.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=My(t,Ry),c=Py(s),d=Ny(s,{replace:o,state:l,target:a});function p(h){r&&r(h),!h.defaultPrevented&&!i&&d(h)}return q.exports.createElement("a",Ts({},u,{href:c,onClick:p,ref:n,target:a}))});function Ny(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=by(),l=ja(),a=Mh(e);return q.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!Dy(s)){s.preventDefault();let u=!!r||Ps(l)===Ps(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const V={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},$y=P.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: 3840px){
        width: 40%;
        height: 50%;
    }
`,Iy=P.p`
    color: #fff;
    font-size: 1.4rem;
    @media screen and (min-width: 3840px){
        font-size: 2.5rem;
    }
    @media screen and (min-width: 2560px){
    
        
    }
`,Fy=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,Hy=P.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: 3840px){
        width: 1vw;
    }
    @media screen and (min-width: 2560px){
    
        
    }
`,Uy=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Wy=P.div`
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
    @media screen and (min-width: 3840px){
        top: 13vh;
        
    }
    @media screen and (min-width: 2560px){
        top: 10vh;
        
    }

    @media screen and (min-width: ${V.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${V.largeDesktop}){
        width: 10vw;
    }
`;P.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const Pd=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,Wi=P.div`
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
    }
    
    @media screen and (min-width: 3840px) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,By=P.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: 959px){
        display: none;
    }
`,Vy=()=>{const[e,t]=q.exports.useState(!1);return w(By,{children:H($y,{children:[w(Wi,{children:w(wt,{to:"/",children:"Home"})}),w(Wi,{children:w(wt,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Wi,{children:H(Fy,{onClick:()=>t(!e),children:[H(Uy,{children:[w(Iy,{children:"Servi\xE7os"}),w(Hy,{activeStyle:e,src:iy,alt:"Seta"})]}),H(Wy,{activeStyle:e,children:[w(Pd,{children:w(wt,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Pd,{children:w(wt,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(Wi,{children:w(wt,{to:"/contatos",children:"Contato"})})]})})},br=P.div`
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

    @media screen and (min-width: ${V.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,Qy=P.div`
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

    @media screen and (min-width: 959px){
        visibility: hidden;
    }   
`,Gy=({status:e})=>H(Qy,{activeStyle:e,children:[w(br,{children:w(wt,{to:"/",children:"Home"})}),w(br,{children:w(wt,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(br,{children:w(wt,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(br,{children:w(wt,{to:"/mecanica",children:"Mec\xE2nica"})}),w(br,{children:w(wt,{to:"/contatos",children:"Contatos"})})]}),vl=P.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,Yy=P.div`
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
    @media screen and (max-width: 959px){
        display: flex;
        margin-right: 20px;
    }
`,Xy=({status:e})=>(console.log(e),H(Yy,{children:[w(vl,{active:e,type:"first-line"}),w(vl,{active:e,type:"mid-line"}),w(vl,{active:e,type:"last-line"})]})),qy=P.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${V.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${V.largeDesktop}){
        width: 15rem;
    }
    
`,Ky=P.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${V.notebook}){
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: ${V.largeDesktop}){
        height: 10vh;
        
    }
    @media screen and (min-width: ${V.extraLargeDesktop}){
        height: 13vh;
        
    }
`,Jy=P.div`
    margin-right: 7%;
`,Zy=()=>{const[e,t]=q.exports.useState(!1);return H(Ky,{children:[w(wt,{to:"/",children:w(qy,{src:ry,alt:"Logo Serra Jr"})}),w(Jy,{onClick:()=>{t(!e)},children:w(Xy,{status:e})}),w(Vy,{}),w(Gy,{status:e})]})},e1=P.img`
    height: 15vh;

    @media screen and (max-width: 1024px) {
        height: 10vh;
    }
`,t1=P.p`
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
`,n1=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen  and (max-width: ${V.tablet}){
        margin-top: 30px;
        margin-bottom: 0;
    }
`,r1=({icon:e,text:t,alt:n})=>H(n1,{children:[w(e1,{src:e,alt:n}),w(t1,{children:t})]}),i1=P.div`
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
`,o1=P.p`
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
`,a1=P.a`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: 1024px){
        width: 40%;
    }
`,l1=P.button`
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
`,s1=P.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,u1=P.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,bd=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>H(u1,{children:[w(o1,{titleColor:r,children:e}),H(i1,{children:[w(s1,{children:i.map((l,a)=>w(r1,{icon:l,text:o[a],alt:o[a]},a))}),w(a1,{href:t,children:w(l1,{buttonColor:r,children:n})})]})]}),c1=P.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;
    

    @media screen and (max-width: ${V.notebook}) {
        font-size: 38px;
        width: 80%;
    }

    @media screen and (min-width: ${V.largeDesktop}) {
        font-size: 50px;
    }

    @media screen and (min-width: ${V.extraLargeDesktop}) {
        font-size: 54px;
    }
`,d1=P.hr`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${V.notebook}) {
        width: 60%;
    }
`,f1=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,p1=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,za=({text:e,fontSize:t,titleWidth:n})=>w(f1,{children:H(p1,{children:[w(c1,{style:{fontSize:t},children:e}),w(d1,{gradientWidth:n})]})});var Rh={},Ah={},La={},Dh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Dh);var h1="Expected a function",Td=0/0,m1="[object Symbol]",v1=/^\s+|\s+$/g,g1=/^[-+]0x[0-9a-f]+$/i,y1=/^0b[01]+$/i,w1=/^0o[0-7]+$/i,x1=parseInt,S1=typeof jr=="object"&&jr&&jr.Object===Object&&jr,k1=typeof self=="object"&&self&&self.Object===Object&&self,E1=S1||k1||Function("return this")(),_1=Object.prototype,C1=_1.toString,O1=Math.max,P1=Math.min,gl=function(){return E1.Date.now()};function b1(e,t,n){var r,i,o,l,a,s,u=0,c=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(h1);t=jd(t)||0,js(n)&&(c=!!n.leading,d="maxWait"in n,o=d?O1(jd(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function h(C){var _=r,S=i;return r=i=void 0,u=C,l=e.apply(S,_),l}function g(C){return u=C,a=setTimeout(m,t),c?h(C):l}function y(C){var _=C-s,S=C-u,T=t-_;return d?P1(T,o-S):T}function k(C){var _=C-s,S=C-u;return s===void 0||_>=t||_<0||d&&S>=o}function m(){var C=gl();if(k(C))return f(C);a=setTimeout(m,y(C))}function f(C){return a=void 0,p&&r?h(C):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:f(gl())}function b(){var C=gl(),_=k(C);if(r=arguments,i=this,s=C,_){if(a===void 0)return g(s);if(d)return a=setTimeout(m,t),h(s)}return a===void 0&&(a=setTimeout(m,t)),l}return b.cancel=v,b.flush=x,b}function js(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function T1(e){return!!e&&typeof e=="object"}function j1(e){return typeof e=="symbol"||T1(e)&&C1.call(e)==m1}function jd(e){if(typeof e=="number")return e;if(j1(e))return Td;if(js(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=js(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(v1,"");var n=y1.test(e);return n||w1.test(e)?x1(e.slice(2),n?2:8):g1.test(e)?Td:+e}var z1=b1,xi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(xi);var W={};Object.defineProperty(W,"__esModule",{value:!0});W.checkSpecKeys=W.checkNavigable=W.changeSlide=W.canUseDOM=W.canGoNext=void 0;W.clamp=Nh;W.swipeStart=W.swipeMove=W.swipeEnd=W.slidesOnRight=W.slidesOnLeft=W.slideHandler=W.siblingDirection=W.safePreventDefault=W.lazyStartIndex=W.lazySlidesOnRight=W.lazySlidesOnLeft=W.lazyEndIndex=W.keyHandler=W.initializedState=W.getWidth=W.getTrackLeft=W.getTrackCSS=W.getTrackAnimateCSS=W.getTotalSlides=W.getSwipeDirection=W.getSlideCount=W.getRequiredLazySlides=W.getPreClones=W.getPostClones=W.getOnDemandLazySlides=W.getNavigableIndexes=W.getHeight=W.extractObject=void 0;var L1=M1(q.exports);function M1(e){return e&&e.__esModule?e:{default:e}}function zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zd(Object(n),!0).forEach(function(r){R1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nh(e,t,n){return Math.max(t,Math.min(e,n))}var En=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};W.safePreventDefault=En;var Xu=function(t){for(var n=[],r=qu(t),i=Ku(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};W.getOnDemandLazySlides=Xu;var A1=function(t){for(var n=[],r=qu(t),i=Ku(t),o=r;o<i;o++)n.push(o);return n};W.getRequiredLazySlides=A1;var qu=function(t){return t.currentSlide-$h(t)};W.lazyStartIndex=qu;var Ku=function(t){return t.currentSlide+Ih(t)};W.lazyEndIndex=Ku;var $h=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};W.lazySlidesOnLeft=$h;var Ih=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};W.lazySlidesOnRight=Ih;var Bo=function(t){return t&&t.offsetWidth||0};W.getWidth=Bo;var Ju=function(t){return t&&t.offsetHeight||0};W.getHeight=Ju;var Zu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};W.getSwipeDirection=Zu;var ec=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};W.canGoNext=ec;var D1=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};W.extractObject=D1;var N1=function(t){var n=L1.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Bo(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(Bo(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&Ju(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var p=t.lazyLoadedList||[],h=Xu(ge(ge({},t),{},{currentSlide:d,lazyLoadedList:p}));p=p.concat(h);var g={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:p};return t.autoplaying===null&&t.autoplay&&(g.autoplaying="playing"),g};W.initializedState=N1;var $1=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,p=t.slidesToShow,h=t.useCSS,g=t.lazyLoadedList;if(n&&r)return{};var y=l,k,m,f,v={},x={},b=o?l:Nh(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&g.indexOf(y)<0&&(g=g.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:g,targetSlide:y},x={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%d!==0&&(k=a-a%d):k=0):!ec(t)&&y>u?y=k=u:c&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%d!==0&&(k=0):k=a-p),!o&&y+p>=a&&(k=a-p),m=di(ge(ge({},t),{},{slideIndex:y})),f=di(ge(ge({},t),{},{slideIndex:k})),o||(m===f&&(y=k),m=f),s&&(g=g.concat(Xu(ge(ge({},t),{},{currentSlide:y})))),h?(v={animating:!0,currentSlide:k,trackStyle:tc(ge(ge({},t),{},{left:m})),lazyLoadedList:g,targetSlide:b},x={animating:!1,currentSlide:k,trackStyle:ci(ge(ge({},t),{},{left:f})),swipeLeft:null,targetSlide:b}):v={currentSlide:k,trackStyle:ci(ge(ge({},t),{},{left:f})),lazyLoadedList:g,targetSlide:b};return{state:v,nextState:x}};W.slideHandler=$1;var I1=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,p=t.targetSlide,h=t.lazyLoad,g=t.infinite;if(l=c%s!==0,r=l?0:(c-d)%s,n.message==="previous")o=r===0?s:u-r,a=d-o,h&&!g&&(i=d-o,a=i===-1?c-1:i),g||(a=p-s);else if(n.message==="next")o=r===0?s:r,a=d+o,h&&!g&&(a=(d+s)%c+r),g||(a=p+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,g){var y=Wh(ge(ge({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};W.changeSlide=I1;var F1=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};W.keyHandler=F1;var H1=function(t,n,r){return t.target.tagName==="IMG"&&En(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};W.swipeStart=H1;var U1=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,p=n.onEdge,h=n.swiped,g=n.swiping,y=n.slideCount,k=n.slidesToScroll,m=n.infinite,f=n.touchObject,v=n.swipeEvent,x=n.listHeight,b=n.listWidth;if(!r){if(i)return En(t);o&&l&&a&&En(t);var C,_={},S=di(n);f.curX=t.touches?t.touches[0].pageX:t.clientX,f.curY=t.touches?t.touches[0].pageY:t.clientY,f.swipeLength=Math.round(Math.sqrt(Math.pow(f.curX-f.startX,2)));var T=Math.round(Math.sqrt(Math.pow(f.curY-f.startY,2)));if(!a&&!g&&T>10)return{scrolling:!0};a&&(f.swipeLength=T);var j=(s?-1:1)*(f.curX>f.startX?1:-1);a&&(j=f.curY>f.startY?1:-1);var M=Math.ceil(y/k),R=Zu(n.touchObject,a),L=f.swipeLength;return m||(u===0&&(R==="right"||R==="down")||u+1>=M&&(R==="left"||R==="up")||!ec(n)&&(R==="left"||R==="up"))&&(L=f.swipeLength*c,d===!1&&p&&(p(R),_.edgeDragged=!0)),!h&&v&&(v(R),_.swiped=!0),o?C=S+L*(x/b)*j:s?C=S-L*j:C=S+L*j,a&&(C=S+L*j),_=ge(ge({},_),{},{touchObject:f,swipeLeft:C,trackStyle:ci(ge(ge({},n),{},{left:C}))}),Math.abs(f.curX-f.startX)<Math.abs(f.curY-f.startY)*.8||f.swipeLength>10&&(_.swiping=!0,En(t)),_}};W.swipeMove=U1;var W1=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,p=n.onSwipe,h=n.targetSlide,g=n.currentSlide,y=n.infinite;if(!r)return i&&En(t),{};var k=s?u/a:l/a,m=Zu(o,s),f={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return f;if(o.swipeLength>k){En(t),p&&p(m);var v,x,b=y?g:h;switch(m){case"left":case"up":x=b+Ls(n),v=c?zs(n,x):x,f.currentDirection=0;break;case"right":case"down":x=b-Ls(n),v=c?zs(n,x):x,f.currentDirection=1;break;default:v=b}f.triggerSlideHandler=v}else{var C=di(n);f.trackStyle=tc(ge(ge({},n),{},{left:C}))}return f};W.swipeEnd=W1;var Fh=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};W.getNavigableIndexes=Fh;var zs=function(t,n){var r=Fh(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};W.checkNavigable=zs;var Ls=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+Ju(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+Bo(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};W.getSlideCount=Ls;var Ma=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};W.checkSpecKeys=Ma;var ci=function(t){Ma(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Uh(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ge(ge({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};W.getTrackCSS=ci;var tc=function(t){Ma(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ci(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};W.getTrackAnimateCSS=tc;var di=function(t){if(t.unslick)return 0;Ma(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,p=t.slideHeight,h=t.fade,g=t.vertical,y=0,k,m,f=0;if(h||t.slideCount===1)return 0;var v=0;if(i?(v=-Vr(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,f=v*p,g?k=n*p*-1+f:k=n*u*-1+y,d===!0){var x,b=r&&r.node;if(x=n+Vr(t),m=b&&b.childNodes[x],k=m?m.offsetLeft*-1:0,o===!0){x=i?n+Vr(t):n,m=b&&b.children[x],k=0;for(var C=0;C<x;C++)k-=b&&b.children[C]&&b.children[C].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(c-m.offsetWidth)/2}}return k};W.getTrackLeft=di;var Vr=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};W.getPreClones=Vr;var Hh=function(t){return t.unslick||!t.infinite?0:t.slideCount};W.getPostClones=Hh;var Uh=function(t){return t.slideCount===1?1:Vr(t)+t.slideCount+Hh(t)};W.getTotalSlides=Uh;var Wh=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Bh(t)?"left":"right":t.targetSlide<t.currentSlide-Vh(t)?"right":"left"};W.siblingDirection=Wh;var Bh=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};W.slidesOnRight=Bh;var Vh=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};W.slidesOnLeft=Vh;var B1=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};W.canUseDOM=B1;var Ra={};function Ms(e){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}Object.defineProperty(Ra,"__esModule",{value:!0});Ra.Track=void 0;var Gt=Qh(q.exports),yl=Qh(xi.exports),wl=W;function Qh(e){return e&&e.__esModule?e:{default:e}}function Rs(){return Rs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rs.apply(this,arguments)}function V1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ld(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q1(e,t,n){return t&&Ld(e.prototype,t),n&&Ld(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&As(e,t)}function As(e,t){return As=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},As(e,t)}function Y1(e){var t=q1();return function(){var r=Vo(e),i;if(t){var o=Vo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return X1(this,i)}}function X1(e,t){if(t&&(Ms(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ds(e)}function Ds(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vo(e){return Vo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Vo(e)}function Md(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Md(Object(n),!0).forEach(function(r){Ns(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Md(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ns(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xl=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},K1=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Sl=function(t,n){return t.key||n},J1=function(t){var n,r=[],i=[],o=[],l=Gt.default.Children.count(t.children),a=(0,wl.lazyStartIndex)(t),s=(0,wl.lazyEndIndex)(t);return Gt.default.Children.forEach(t.children,function(u,c){var d,p={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=Gt.default.createElement("div",null);var h=K1(Xe(Xe({},t),{},{index:c})),g=d.props.className||"",y=xl(Xe(Xe({},t),{},{index:c}));if(r.push(Gt.default.cloneElement(d,{key:"original"+Sl(d,c),"data-index":c,className:(0,yl.default)(y,g),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Xe(Xe({outline:"none"},d.props.style||{}),h),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}})),t.infinite&&t.fade===!1){var k=l-c;k<=(0,wl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(d=u),y=xl(Xe(Xe({},t),{},{index:n})),i.push(Gt.default.cloneElement(d,{key:"precloned"+Sl(d,n),"data-index":n,tabIndex:"-1",className:(0,yl.default)(y,g),"aria-hidden":!y["slick-active"],style:Xe(Xe({},d.props.style||{}),h),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}}))),l!==t.slidesToShow&&(n=l+c,n<s&&(d=u),y=xl(Xe(Xe({},t),{},{index:n})),o.push(Gt.default.cloneElement(d,{key:"postcloned"+Sl(d,n),"data-index":n,tabIndex:"-1",className:(0,yl.default)(y,g),"aria-hidden":!y["slick-active"],style:Xe(Xe({},d.props.style||{}),h),onClick:function(f){d.props&&d.props.onClick&&d.props.onClick(f),t.focusOnSelect&&t.focusOnSelect(p)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Z1=function(e){G1(n,e);var t=Y1(n);function n(){var r;V1(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Ns(Ds(r),"node",null),Ns(Ds(r),"handleRef",function(a){r.node=a}),r}return Q1(n,[{key:"render",value:function(){var i=J1(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return Gt.default.createElement("div",Rs({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Gt.default.PureComponent);Ra.Track=Z1;var Aa={};function $s(e){return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}Object.defineProperty(Aa,"__esModule",{value:!0});Aa.Dots=void 0;var Bi=Gh(q.exports),ew=Gh(xi.exports),Rd=W;function Gh(e){return e&&e.__esModule?e:{default:e}}function Ad(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ad(Object(n),!0).forEach(function(r){nw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ad(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iw(e,t,n){return t&&Dd(e.prototype,t),n&&Dd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ow(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Is(e,t)}function Is(e,t){return Is=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Is(e,t)}function aw(e){var t=uw();return function(){var r=Qo(e),i;if(t){var o=Qo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lw(this,i)}}function lw(e,t){if(t&&($s(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sw(e)}function sw(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qo(e){return Qo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Qo(e)}var cw=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},dw=function(e){ow(n,e);var t=aw(n);function n(){return rw(this,n),t.apply(this,arguments)}return iw(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,p=i.currentSlide,h=cw({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:s}),g={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var m=(k+1)*u-1,f=s?m:(0,Rd.clamp)(m,0,d-1),v=f-(u-1),x=s?v:(0,Rd.clamp)(v,0,d-1),b=(0,ew.default)({"slick-active":s?p>=x&&p<=f:p===x}),C={message:"dots",index:k,slidesToScroll:u,currentSlide:p},_=this.clickHandler.bind(this,C);y=y.concat(Bi.default.createElement("li",{key:k,className:b},Bi.default.cloneElement(this.props.customPaging(k),{onClick:_})))}return Bi.default.cloneElement(this.props.appendDots(y),tw({className:this.props.dotsClass},g))}}]),n}(Bi.default.PureComponent);Aa.Dots=dw;var fr={};function Fs(e){return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}Object.defineProperty(fr,"__esModule",{value:!0});fr.PrevArrow=fr.NextArrow=void 0;var nr=Xh(q.exports),Yh=Xh(xi.exports),fw=W;function Xh(e){return e&&e.__esModule?e:{default:e}}function Go(){return Go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}function Nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nd(Object(n),!0).forEach(function(r){pw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Kh(e,t,n){return t&&$d(e.prototype,t),n&&$d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hs(e,t)}function Hs(e,t){return Hs=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Hs(e,t)}function Zh(e){var t=vw();return function(){var r=Xo(e),i;if(t){var o=Xo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return hw(this,i)}}function hw(e,t){if(t&&(Fs(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mw(e)}function mw(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xo(e){return Xo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Xo(e)}var gw=function(e){Jh(n,e);var t=Zh(n);function n(){return qh(this,n),t.apply(this,arguments)}return Kh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Yh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=nr.default.cloneElement(this.props.prevArrow,Yo(Yo({},l),a)):s=nr.default.createElement("button",Go({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(nr.default.PureComponent);fr.PrevArrow=gw;var yw=function(e){Jh(n,e);var t=Zh(n);function n(){return qh(this,n),t.apply(this,arguments)}return Kh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,fw.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Yh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=nr.default.cloneElement(this.props.nextArrow,Yo(Yo({},l),a)):s=nr.default.createElement("button",Go({key:"1",type:"button"},l)," ","Next"),s}}]),n}(nr.default.PureComponent);fr.NextArrow=yw;var em=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Us=typeof window<"u"&&typeof document<"u"&&window.document===document,qo=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ww=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(qo):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),xw=2;function Sw(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){ww(o)}function a(){var s=Date.now();if(n){if(s-i<xw)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var kw=20,Ew=["top","right","bottom","left","width","height","size","weight"],_w=typeof MutationObserver<"u",Cw=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Sw(this.refresh.bind(this),kw)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Us||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_w?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Us||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Ew.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),tm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},pr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||qo},nm=Da(0,0,0,0);function Ko(e){return parseFloat(e)||0}function Id(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ko(o)},0)}function Ow(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Ko(l)}return n}function Pw(e){var t=e.getBBox();return Da(0,0,t.width,t.height)}function bw(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return nm;var r=pr(e).getComputedStyle(e),i=Ow(r),o=i.left+i.right,l=i.top+i.bottom,a=Ko(r.width),s=Ko(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Id(r,"left","right")+o),Math.round(s+l)!==n&&(s-=Id(r,"top","bottom")+l)),!jw(e)){var u=Math.round(a+o)-t,c=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(s-=c)}return Da(i.left,i.top,a,s)}var Tw=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof pr(e).SVGGraphicsElement}:function(e){return e instanceof pr(e).SVGElement&&typeof e.getBBox=="function"}}();function jw(e){return e===pr(e).document.documentElement}function zw(e){return Us?Tw(e)?Pw(e):bw(e):nm}function Lw(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return tm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Da(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Mw=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Da(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=zw(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Rw=function(){function e(t,n){var r=Lw(n);tm(this,{target:t,contentRect:r})}return e}(),Aw=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new em,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof pr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Mw(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof pr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Rw(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),rm=typeof WeakMap<"u"?new WeakMap:new em,im=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Cw.getInstance(),r=new Aw(t,n,this);rm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){im.prototype[e]=function(){var t;return(t=rm.get(this))[e].apply(t,arguments)}});var Dw=function(){return typeof qo.ResizeObserver<"u"?qo.ResizeObserver:im}();const Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Dw},Symbol.toStringTag,{value:"Module"})),$w=vm(Nw);Object.defineProperty(La,"__esModule",{value:!0});La.InnerSlider=void 0;var Be=Si(q.exports),Iw=Si(Dh),Fw=Si(z1),Hw=Si(xi.exports),we=W,Uw=Ra,Ww=Aa,Fd=fr,Bw=Si($w);function Si(e){return e&&e.__esModule?e:{default:e}}function Jo(e){return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jo(e)}function Zo(){return Zo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}function Vw(e,t){if(e==null)return{};var n=Qw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Qw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hd(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ud(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yw(e,t,n){return t&&Ud(e.prototype,t),n&&Ud(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ws(e,t)}function Ws(e,t){return Ws=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ws(e,t)}function qw(e){var t=Jw();return function(){var r=ea(e),i;if(t){var o=ea(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Kw(this,i)}}function Kw(e,t){if(t&&(Jo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Jw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ea(e){return ea=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ea(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zw=function(e){Xw(n,e);var t=qw(n);function n(r){var i;Gw(this,n),i=t.call(this,r),oe(ie(i),"listRefHandler",function(l){return i.list=l}),oe(ie(i),"trackRefHandler",function(l){return i.track=l}),oe(ie(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,we.getHeight)(l)+"px"}}),oe(ie(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,we.getOnDemandLazySlides)(J(J({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=J({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Bw.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),oe(ie(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),oe(ie(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,we.getOnDemandLazySlides)(J(J({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=J(J({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Be.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Be.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),oe(ie(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Fw.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),oe(ie(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=J(J({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),oe(ie(i),"updateState",function(l,a,s){var u=(0,we.initializedState)(l);l=J(J(J({},l),u),{},{slideIndex:u.currentSlide});var c=(0,we.getTrackLeft)(l);l=J(J({},l),{},{left:c});var d=(0,we.getTrackCSS)(l);(a||Be.default.Children.count(i.props.children)!==Be.default.Children.count(l.children))&&(u.trackStyle=d),i.setState(u,s)}),oe(ie(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,we.getPreClones)(J(J(J({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,we.getPostClones)(J(J(J({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(_){s.push(_.props.style.width),l+=_.props.style.width});for(var d=0;d<u;d++)a+=s[s.length-1-d],l+=s[s.length-1-d];for(var p=0;p<c;p++)l+=s[p];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var g={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");g.left="calc(".concat(g.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:g}}var k=Be.default.Children.count(i.props.children),m=J(J(J({},i.props),i.state),{},{slideCount:k}),f=(0,we.getPreClones)(m)+(0,we.getPostClones)(m)+k,v=100/i.props.slidesToShow*f,x=100/f,b=-x*((0,we.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(b+=(100-x*v/100)/2);var C={width:v+"%",left:b+"%"};return{slideWidth:x+"%",trackStyle:C}}),oe(ie(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var c=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),oe(ie(i),"progressiveLazyLoad",function(){for(var l=[],a=J(J({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,we.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,we.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),oe(ie(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,c=s.beforeChange,d=s.onLazyLoad,p=s.speed,h=s.afterChange,g=i.state.currentSlide,y=(0,we.slideHandler)(J(J(J({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,m=y.nextState;if(!!k){c&&c(g,k.currentSlide);var f=k.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&f.length>0&&d(f),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(g),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,x=Vw(m,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},p))})}}),oe(ie(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=J(J({},i.props),i.state),u=(0,we.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),oe(ie(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),oe(ie(i),"keyHandler",function(l){var a=(0,we.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),oe(ie(i),"selectHandler",function(l){i.changeSlide(l)}),oe(ie(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),oe(ie(i),"enableBodyScroll",function(){window.ontouchmove=null}),oe(ie(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,we.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),oe(ie(i),"swipeMove",function(l){var a=(0,we.swipeMove)(l,J(J(J({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),oe(ie(i),"swipeEnd",function(l){var a=(0,we.swipeEnd)(l,J(J(J({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),oe(ie(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),oe(ie(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),oe(ie(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),oe(ie(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),oe(ie(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,we.canGoNext)(J(J({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),oe(ie(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),oe(ie(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),oe(ie(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),oe(ie(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),oe(ie(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),oe(ie(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),oe(ie(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),oe(ie(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),oe(ie(i),"render",function(){var l=(0,Hw.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=J(J({},i.props),i.state),s=(0,we.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=J(J({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,we.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=i.props.pauseOnDotsHover;d=J(J({},d),{},{clickHandler:i.changeSlide,onMouseEnter:p?i.onDotsLeave:null,onMouseOver:p?i.onDotsOver:null,onMouseLeave:p?i.onDotsLeave:null}),c=Be.default.createElement(Ww.Dots,d)}var h,g,y=(0,we.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Be.default.createElement(Fd.PrevArrow,y),g=Be.default.createElement(Fd.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var f=J(J({},k),m),v=i.props.touchMove,x={className:"slick-list",style:f,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},b={className:l}),Be.default.createElement("div",b,i.props.unslick?"":h,Be.default.createElement("div",Zo({ref:i.listRefHandler},x),Be.default.createElement(Uw.Track,Zo({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":g,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=J(J({},Iw.default),{},{currentSlide:i.props.initialSlide,slideCount:Be.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=J(J({},i.state),o),i}return Yw(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(Jo(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Be.default.Children.count(this.props.children)!==Be.default.Children.count(i.children)}}]),n}(Be.default.Component);La.InnerSlider=Zw;var ex=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},tx=ex,nx=tx,rx=function(e){var t=/[height|width]$/;return t.test(e)},Wd=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=nx(r),rx(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},ix=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Wd(n),r<e.length-1&&(t+=", ")}),t):Wd(e)},ox=ix,om={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(q.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(om);var kl,Bd;function ax(){if(Bd)return kl;Bd=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},kl=e,kl}var El,Vd;function am(){if(Vd)return El;Vd=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return El={isFunction:n,isArray:t,each:e},El}var _l,Qd;function lx(){if(Qd)return _l;Qd=1;var e=ax(),t=am().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},_l=n,_l}var Cl,Gd;function sx(){if(Gd)return Cl;Gd=1;var e=lx(),t=am(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,c=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[l].addHandler(d)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},Cl=o,Cl}var Ol,Yd;function ux(){if(Yd)return Ol;Yd=1;var e=sx();return Ol=new e,Ol}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(q.exports),r=La,i=a(ox),o=a(om),l=W;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var T=1;T<arguments.length;T++){var j=arguments[T];for(var M in j)Object.prototype.hasOwnProperty.call(j,M)&&(S[M]=j[M])}return S},s.apply(this,arguments)}function u(S,T){var j=Object.keys(S);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(S);T&&(M=M.filter(function(R){return Object.getOwnPropertyDescriptor(S,R).enumerable})),j.push.apply(j,M)}return j}function c(S){for(var T=1;T<arguments.length;T++){var j=arguments[T]!=null?arguments[T]:{};T%2?u(Object(j),!0).forEach(function(M){b(S,M,j[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(M){Object.defineProperty(S,M,Object.getOwnPropertyDescriptor(j,M))})}return S}function d(S,T){if(!(S instanceof T))throw new TypeError("Cannot call a class as a function")}function p(S,T){for(var j=0;j<T.length;j++){var M=T[j];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(S,M.key,M)}}function h(S,T,j){return T&&p(S.prototype,T),j&&p(S,j),Object.defineProperty(S,"prototype",{writable:!1}),S}function g(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(T&&T.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),T&&y(S,T)}function y(S,T){return y=Object.setPrototypeOf||function(M,R){return M.__proto__=R,M},y(S,T)}function k(S){var T=v();return function(){var M=x(S),R;if(T){var L=x(this).constructor;R=Reflect.construct(M,arguments,L)}else R=M.apply(this,arguments);return m(this,R)}}function m(S,T){if(T&&(t(T)==="object"||typeof T=="function"))return T;if(T!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f(S)}function f(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},x(S)}function b(S,T,j){return T in S?Object.defineProperty(S,T,{value:j,enumerable:!0,configurable:!0,writable:!0}):S[T]=j,S}var C=(0,l.canUseDOM)()&&ux(),_=function(S){g(j,S);var T=k(j);function j(M){var R;return d(this,j),R=T.call(this,M),b(f(R),"innerSliderRefHandler",function(L){return R.innerSlider=L}),b(f(R),"slickPrev",function(){return R.innerSlider.slickPrev()}),b(f(R),"slickNext",function(){return R.innerSlider.slickNext()}),b(f(R),"slickGoTo",function(L){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return R.innerSlider.slickGoTo(L,G)}),b(f(R),"slickPause",function(){return R.innerSlider.pause("paused")}),b(f(R),"slickPlay",function(){return R.innerSlider.autoPlay("play")}),R.state={breakpoint:null},R._responsiveMediaHandlers=[],R}return h(j,[{key:"media",value:function(R,L){C.register(R,L),this._responsiveMediaHandlers.push({query:R,handler:L})}},{key:"componentDidMount",value:function(){var R=this;if(this.props.responsive){var L=this.props.responsive.map(function(Y){return Y.breakpoint});L.sort(function(Y,X){return Y-X}),L.forEach(function(Y,X){var fe;X===0?fe=(0,i.default)({minWidth:0,maxWidth:Y}):fe=(0,i.default)({minWidth:L[X-1]+1,maxWidth:Y}),(0,l.canUseDOM)()&&R.media(fe,function(){R.setState({breakpoint:Y})})});var G=(0,i.default)({minWidth:L.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(G,function(){R.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(R){C.unregister(R.query,R.handler)})}},{key:"render",value:function(){var R=this,L,G;this.state.breakpoint?(G=this.props.responsive.filter(function(U){return U.breakpoint===R.state.breakpoint}),L=G[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),G[0].settings)):L=c(c({},o.default),this.props),L.centerMode&&(L.slidesToScroll>1,L.slidesToScroll=1),L.fade&&(L.slidesToShow>1,L.slidesToScroll>1,L.slidesToShow=1,L.slidesToScroll=1);var Y=n.default.Children.toArray(this.props.children);Y=Y.filter(function(U){return typeof U=="string"?!!U.trim():!!U}),L.variableWidth&&(L.rows>1||L.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),L.variableWidth=!1);for(var X=[],fe=null,z=0;z<Y.length;z+=L.rows*L.slidesPerRow){for(var A=[],F=z;F<z+L.rows*L.slidesPerRow;F+=L.slidesPerRow){for(var B=[],$=F;$<F+L.slidesPerRow&&(L.variableWidth&&Y[$].props.style&&(fe=Y[$].props.style.width),!($>=Y.length));$+=1)B.push(n.default.cloneElement(Y[$],{key:100*z+10*F+$,tabIndex:-1,style:{width:"".concat(100/L.slidesPerRow,"%"),display:"inline-block"}}));A.push(n.default.createElement("div",{key:10*z+F},B))}L.variableWidth?X.push(n.default.createElement("div",{key:z,style:{width:fe}},A)):X.push(n.default.createElement("div",{key:z},A))}if(L==="unslick"){var E="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:E},Y)}else X.length<=L.slidesToShow&&(L.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},L),X)}}]),j}(n.default.Component);e.default=_})(Ah);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Ah);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Rh);const lm=Vs(Rh);const cx=P.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
    
`,dx=P.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${V.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,fx=P.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${V.tablet}) {    
        width: 96%;
        max-height: 40vh;
    }

    @media screen and (max-width: ${V.mobile}) {
        width: 100%;
        max-height: 40vh;
    }
    
`,px=P.div`
    margin: 20px;
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
`,hx=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0};return w(px,{containerWidth:e.width,children:w(lm,{...t,children:e.carouselData.map((n,r)=>w(cx,{children:w(dx,{children:w(fx,{src:n.image,alt:n.alt})})},r))})})},mx="/Site-Serra/assets/membros-1.26cb4867.svg",vx="/Site-Serra/assets/membros-2.457898e5.svg",gx="/Site-Serra/assets/missao-icon.4dc65479.svg",yx="/Site-Serra/assets/visao-icon.75e2e4de.svg",wx="/Site-Serra/assets/valores-icon.b6d7390b.svg",Pe={members:[{image:mx,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"},{image:vx,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"}],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:gx,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:yx,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:wx,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia","Gest\xE3o segura","Impactar nossa era","Evolu\xE7\xE3o constante","Responsabilidade com os clientes"],content:void 0}]},xx=P.div`
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
`,Xd=P.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${V.tablet}) {
        width: 95vw;
    }
`,qd=P.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media screen and (max-width: 390px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`,Sx=P.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,kx=P.button`
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
`,Ex=P.div`
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

    
`,_x=P.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
        
    }
`,Cx=P.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
        
    }
`,Ox=P.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        width: 90%;
        
    }
    
`,Px=P.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: 500px) {
        width: 65%;
        height: 65%;
    }

    @media screen and (max-width: 820px) {
        width:70%;
        height: 70%;
    }
`,sm=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>H(Ex,{carouselStyle:s,children:[w(xx,{titleColor:r,children:e}),s?w(Xd,{children:H(qd,{children:[w(_x,{children:Pe.membersText}),w(hx,{width:"50%",carouselData:Pe.members})]})}):H(Xd,{children:[H(qd,{children:[w(Ox,{children:w(Cx,{children:o})}),w(Px,{src:l,alt:a})]}),i?w(Sx,{href:t,children:w(kx,{buttonColor:r,children:n})}):null]})]});var um={exports:{}};(function(e,t){(function(n,r){e.exports=r(q.exports)})(typeof self<"u"?self:jr,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>fe});var c=u(4087),d=u.n(c);const p=function(z){return new RegExp(/<[a-z][\s\S]*>/i).test(z)},h=function(z){var A=document.createElement("div");return A.innerHTML=z,A.childNodes},g=function(z,A){return Math.floor(Math.random()*(A-z+1))+z};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",m="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",x="CALL_FUNCTION",b="ADD_HTML_TAG_ELEMENT",C="CHANGE_DELETE_SPEED",_="CHANGE_DELAY",S="CHANGE_CURSOR",T="PASTE_STRING",j="HTML_TAG";function M(z,A){var F=Object.keys(z);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(z);A&&(B=B.filter(function($){return Object.getOwnPropertyDescriptor(z,$).enumerable})),F.push.apply(F,B)}return F}function R(z){for(var A=1;A<arguments.length;A++){var F=arguments[A]!=null?arguments[A]:{};A%2?M(Object(F),!0).forEach(function(B){X(z,B,F[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(F)):M(Object(F)).forEach(function(B){Object.defineProperty(z,B,Object.getOwnPropertyDescriptor(F,B))})}return z}function L(z){return function(A){if(Array.isArray(A))return G(A)}(z)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(z)||function(A,F){if(A){if(typeof A=="string")return G(A,F);var B=Object.prototype.toString.call(A).slice(8,-1);return B==="Object"&&A.constructor&&(B=A.constructor.name),B==="Map"||B==="Set"?Array.from(A):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?G(A,F):void 0}}(z)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function G(z,A){(A==null||A>z.length)&&(A=z.length);for(var F=0,B=new Array(A);F<A;F++)B[F]=z[F];return B}function Y(z,A){for(var F=0;F<A.length;F++){var B=A[F];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(z,B.key,B)}}function X(z,A,F){return A in z?Object.defineProperty(z,A,{value:F,enumerable:!0,configurable:!0,writable:!0}):z[A]=F,z}const fe=function(){function z(B,$){var E=this;if(function(D,O){if(!(D instanceof O))throw new TypeError("Cannot call a class as a function")}(this,z),X(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),X(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),X(this,"setupWrapperElement",function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))}),X(this,"start",function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E}),X(this,"pause",function(){return E.state.eventLoopPaused=!0,E}),X(this,"stop",function(){return E.state.eventLoop&&((0,c.cancel)(E.state.eventLoop),E.state.eventLoop=null),E}),X(this,"pauseFor",function(D){return E.addEventToQueue(v,{ms:D}),E}),X(this,"typeOutAllStrings",function(){return typeof E.options.strings=="string"?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach(function(D){E.typeString(D).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)}),E)}),X(this,"typeString",function(D){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(D))return E.typeOutHTMLString(D,O);if(D){var K=E.options||{},N=K.stringSplitter,Z=typeof N=="function"?N(D):D.split("");E.typeCharacters(Z,O)}return E}),X(this,"pasteString",function(D){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(D)?E.typeOutHTMLString(D,O,!0):(D&&E.addEventToQueue(T,{character:D,node:O}),E)}),X(this,"typeOutHTMLString",function(D){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,K=arguments.length>2?arguments[2]:void 0,N=h(D);if(N.length>0)for(var Z=0;Z<N.length;Z++){var ne=N[Z],ae=ne.innerHTML;ne&&ne.nodeType!==3?(ne.innerHTML="",E.addEventToQueue(b,{node:ne,parentNode:O}),K?E.pasteString(ae,ne):E.typeString(ae,ne)):ne.textContent&&(K?E.pasteString(ne.textContent,O):E.typeString(ne.textContent,O))}return E}),X(this,"deleteAll",function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return E.addEventToQueue(m,{speed:D}),E}),X(this,"changeDeleteSpeed",function(D){if(!D)throw new Error("Must provide new delete speed");return E.addEventToQueue(C,{speed:D}),E}),X(this,"changeDelay",function(D){if(!D)throw new Error("Must provide new delay");return E.addEventToQueue(_,{delay:D}),E}),X(this,"changeCursor",function(D){if(!D)throw new Error("Must provide new cursor");return E.addEventToQueue(S,{cursor:D}),E}),X(this,"deleteChars",function(D){if(!D)throw new Error("Must provide amount of characters to delete");for(var O=0;O<D;O++)E.addEventToQueue(k);return E}),X(this,"callFunction",function(D,O){if(!D||typeof D!="function")throw new Error("Callbak must be a function");return E.addEventToQueue(x,{cb:D,thisArg:O}),E}),X(this,"typeCharacters",function(D){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(K){E.addEventToQueue(y,{character:K,node:O})}),E}),X(this,"removeCharacters",function(D){if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(){E.addEventToQueue(k)}),E}),X(this,"addEventToQueue",function(D,O){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return E.addEventToStateProperty(D,O,K,"eventQueue")}),X(this,"addReverseCalledEvent",function(D,O){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2],N=E.options.loop;return N?E.addEventToStateProperty(D,O,K,"reverseCalledEvents"):E}),X(this,"addEventToStateProperty",function(D,O){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2],N=arguments.length>3?arguments[3]:void 0,Z={eventName:D,eventArgs:O||{}};return E.state[N]=K?[Z].concat(L(E.state[N])):[].concat(L(E.state[N]),[Z]),E}),X(this,"runEventLoop",function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var D=Date.now(),O=D-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=L(E.state.calledEvents),E.state.calledEvents=[],E.options=R({},E.state.initialOptions)}if(E.state.eventLoop=d()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(D<E.state.pauseUntil)return;E.state.pauseUntil=null}var K,N=L(E.state.eventQueue),Z=N.shift();if(!(O<=(K=Z.eventName===f||Z.eventName===k?E.options.deleteSpeed==="natural"?g(40,80):E.options.deleteSpeed:E.options.delay==="natural"?g(120,160):E.options.delay))){var ne=Z.eventName,ae=Z.eventArgs;switch(E.logInDevMode({currentEvent:Z,state:E.state,delay:K}),ne){case T:case y:var te=ae.character,Ce=ae.node,De=document.createTextNode(te),re=De;E.options.onCreateTextNode&&typeof E.options.onCreateTextNode=="function"&&(re=E.options.onCreateTextNode(te,De)),re&&(Ce?Ce.appendChild(re):E.state.elements.wrapper.appendChild(re)),E.state.visibleNodes=[].concat(L(E.state.visibleNodes),[{type:"TEXT_NODE",character:te,node:re}]);break;case k:N.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case v:var Le=Z.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(Le);break;case x:var se=Z.eventArgs,Te=se.cb,hn=se.thisArg;Te.call(hn,{elements:E.state.elements});break;case b:var Oe=Z.eventArgs,Ut=Oe.node,jt=Oe.parentNode;jt?jt.appendChild(Ut):E.state.elements.wrapper.appendChild(Ut),E.state.visibleNodes=[].concat(L(E.state.visibleNodes),[{type:j,node:Ut,parentNode:jt||E.state.elements.wrapper}]);break;case m:var tt=E.state.visibleNodes,ee=ae.speed,pe=[];ee&&pe.push({eventName:C,eventArgs:{speed:ee,temp:!0}});for(var Ln=0,gr=tt.length;Ln<gr;Ln++)pe.push({eventName:f,eventArgs:{removingCharacterNode:!1}});ee&&pe.push({eventName:C,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),N.unshift.apply(N,pe);break;case f:var Et=Z.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var Na=E.state.visibleNodes.pop(),hm=Na.type,ki=Na.node,mm=Na.character;E.options.onRemoveNode&&typeof E.options.onRemoveNode=="function"&&E.options.onRemoveNode({node:ki,character:mm}),ki&&ki.parentNode.removeChild(ki),hm===j&&Et&&N.unshift({eventName:f,eventArgs:{}})}break;case C:E.options.deleteSpeed=Z.eventArgs.speed;break;case _:E.options.delay=Z.eventArgs.delay;break;case S:E.options.cursor=Z.eventArgs.cursor,E.state.elements.cursor.innerHTML=Z.eventArgs.cursor}E.options.loop&&(Z.eventName===f||Z.eventArgs&&Z.eventArgs.temp||(E.state.calledEvents=[].concat(L(E.state.calledEvents),[Z]))),E.state.eventQueue=N,E.state.lastFrameTime=D}}}),B)if(typeof B=="string"){var U=document.querySelector(B);if(!U)throw new Error("Could not find container element");this.state.elements.container=U}else this.state.elements.container=B;$&&(this.options=R(R({},this.options),$)),this.state.initialOptions=R({},this.options),this.init()}var A,F;return A=z,(F=[{key:"init",value:function(){var B,$;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(B=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",($=document.createElement("style")).appendChild(document.createTextNode(B)),document.head.appendChild($),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(B){this.options.devMode&&console.log(B)}}])&&Y(A.prototype,F),Object.defineProperty(A,"prototype",{writable:!1}),z}()},8552:(a,s,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,s,u)=>{var c=u(1789),d=u(401),p=u(7667),h=u(1327),g=u(1866);function y(k){var m=-1,f=k==null?0:k.length;for(this.clear();++m<f;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=h,y.prototype.set=g,a.exports=y},8407:(a,s,u)=>{var c=u(7040),d=u(4125),p=u(2117),h=u(7518),g=u(4705);function y(k){var m=-1,f=k==null?0:k.length;for(this.clear();++m<f;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=h,y.prototype.set=g,a.exports=y},7071:(a,s,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,s,u)=>{var c=u(4785),d=u(1285),p=u(6e3),h=u(9916),g=u(5265);function y(k){var m=-1,f=k==null?0:k.length;for(this.clear();++m<f;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=p,y.prototype.has=h,y.prototype.set=g,a.exports=y},3818:(a,s,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,s,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,s,u)=>{var c=u(3369),d=u(619),p=u(2385);function h(g){var y=-1,k=g==null?0:g.length;for(this.__data__=new c;++y<k;)this.add(g[y])}h.prototype.add=h.prototype.push=d,h.prototype.has=p,a.exports=h},6384:(a,s,u)=>{var c=u(8407),d=u(7465),p=u(3779),h=u(7599),g=u(4758),y=u(4309);function k(m){var f=this.__data__=new c(m);this.size=f.size}k.prototype.clear=d,k.prototype.delete=p,k.prototype.get=h,k.prototype.has=g,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,s,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,s,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length,p=0,h=[];++c<d;){var g=s[c];u(g,c,s)&&(h[p++]=g)}return h}},4636:(a,s,u)=>{var c=u(2545),d=u(5694),p=u(1469),h=u(4144),g=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(m,f){var v=p(m),x=!v&&d(m),b=!v&&!x&&h(m),C=!v&&!x&&!b&&y(m),_=v||x||b||C,S=_?c(m.length,String):[],T=S.length;for(var j in m)!f&&!k.call(m,j)||_&&(j=="length"||b&&(j=="offset"||j=="parent")||C&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||g(j,T))||S.push(j);return S}},2488:a=>{a.exports=function(s,u){for(var c=-1,d=u.length,p=s.length;++c<d;)s[p+c]=u[c];return s}},2908:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length;++c<d;)if(u(s[c],c,s))return!0;return!1}},8470:(a,s,u)=>{var c=u(7813);a.exports=function(d,p){for(var h=d.length;h--;)if(c(d[h][0],p))return h;return-1}},8866:(a,s,u)=>{var c=u(2488),d=u(1469);a.exports=function(p,h,g){var y=h(p);return d(p)?y:c(y,g(p))}},4239:(a,s,u)=>{var c=u(2705),d=u(9607),p=u(2333),h=c?c.toStringTag:void 0;a.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":h&&h in Object(g)?d(g):p(g)}},9454:(a,s,u)=>{var c=u(4239),d=u(7005);a.exports=function(p){return d(p)&&c(p)=="[object Arguments]"}},939:(a,s,u)=>{var c=u(2492),d=u(7005);a.exports=function p(h,g,y,k,m){return h===g||(h==null||g==null||!d(h)&&!d(g)?h!=h&&g!=g:c(h,g,y,k,p,m))}},2492:(a,s,u)=>{var c=u(6384),d=u(7114),p=u(8351),h=u(6096),g=u(4160),y=u(1469),k=u(4144),m=u(6719),f="[object Arguments]",v="[object Array]",x="[object Object]",b=Object.prototype.hasOwnProperty;a.exports=function(C,_,S,T,j,M){var R=y(C),L=y(_),G=R?v:g(C),Y=L?v:g(_),X=(G=G==f?x:G)==x,fe=(Y=Y==f?x:Y)==x,z=G==Y;if(z&&k(C)){if(!k(_))return!1;R=!0,X=!1}if(z&&!X)return M||(M=new c),R||m(C)?d(C,_,S,T,j,M):p(C,_,G,S,T,j,M);if(!(1&S)){var A=X&&b.call(C,"__wrapped__"),F=fe&&b.call(_,"__wrapped__");if(A||F){var B=A?C.value():C,$=F?_.value():_;return M||(M=new c),j(B,$,S,T,M)}}return!!z&&(M||(M=new c),h(C,_,S,T,j,M))}},8458:(a,s,u)=>{var c=u(3560),d=u(5346),p=u(3218),h=u(346),g=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,m=y.toString,f=k.hasOwnProperty,v=RegExp("^"+m.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!p(x)||d(x))&&(c(x)?v:g).test(h(x))}},8749:(a,s,u)=>{var c=u(4239),d=u(1780),p=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(g){return p(g)&&d(g.length)&&!!h[c(g)]}},280:(a,s,u)=>{var c=u(5726),d=u(6916),p=Object.prototype.hasOwnProperty;a.exports=function(h){if(!c(h))return d(h);var g=[];for(var y in Object(h))p.call(h,y)&&y!="constructor"&&g.push(y);return g}},2545:a=>{a.exports=function(s,u){for(var c=-1,d=Array(s);++c<s;)d[c]=u(c);return d}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,s,u)=>{var c=u(8668),d=u(2908),p=u(4757);a.exports=function(h,g,y,k,m,f){var v=1&y,x=h.length,b=g.length;if(x!=b&&!(v&&b>x))return!1;var C=f.get(h),_=f.get(g);if(C&&_)return C==g&&_==h;var S=-1,T=!0,j=2&y?new c:void 0;for(f.set(h,g),f.set(g,h);++S<x;){var M=h[S],R=g[S];if(k)var L=v?k(R,M,S,g,h,f):k(M,R,S,h,g,f);if(L!==void 0){if(L)continue;T=!1;break}if(j){if(!d(g,function(G,Y){if(!p(j,Y)&&(M===G||m(M,G,y,k,f)))return j.push(Y)})){T=!1;break}}else if(M!==R&&!m(M,R,y,k,f)){T=!1;break}}return f.delete(h),f.delete(g),T}},8351:(a,s,u)=>{var c=u(2705),d=u(1149),p=u(7813),h=u(7114),g=u(8776),y=u(1814),k=c?c.prototype:void 0,m=k?k.valueOf:void 0;a.exports=function(f,v,x,b,C,_,S){switch(x){case"[object DataView]":if(f.byteLength!=v.byteLength||f.byteOffset!=v.byteOffset)return!1;f=f.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(f.byteLength!=v.byteLength||!_(new d(f),new d(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return p(+f,+v);case"[object Error]":return f.name==v.name&&f.message==v.message;case"[object RegExp]":case"[object String]":return f==v+"";case"[object Map]":var T=g;case"[object Set]":var j=1&b;if(T||(T=y),f.size!=v.size&&!j)return!1;var M=S.get(f);if(M)return M==v;b|=2,S.set(f,v);var R=h(T(f),T(v),b,C,_,S);return S.delete(f),R;case"[object Symbol]":if(m)return m.call(f)==m.call(v)}return!1}},6096:(a,s,u)=>{var c=u(8234),d=Object.prototype.hasOwnProperty;a.exports=function(p,h,g,y,k,m){var f=1&g,v=c(p),x=v.length;if(x!=c(h).length&&!f)return!1;for(var b=x;b--;){var C=v[b];if(!(f?C in h:d.call(h,C)))return!1}var _=m.get(p),S=m.get(h);if(_&&S)return _==h&&S==p;var T=!0;m.set(p,h),m.set(h,p);for(var j=f;++b<x;){var M=p[C=v[b]],R=h[C];if(y)var L=f?y(R,M,C,h,p,m):y(M,R,C,p,h,m);if(!(L===void 0?M===R||k(M,R,g,y,m):L)){T=!1;break}j||(j=C=="constructor")}if(T&&!j){var G=p.constructor,Y=h.constructor;G==Y||!("constructor"in p)||!("constructor"in h)||typeof G=="function"&&G instanceof G&&typeof Y=="function"&&Y instanceof Y||(T=!1)}return m.delete(p),m.delete(h),T}},1957:(a,s,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,s,u)=>{var c=u(8866),d=u(9551),p=u(3674);a.exports=function(h){return c(h,p,d)}},5050:(a,s,u)=>{var c=u(7019);a.exports=function(d,p){var h=d.__data__;return c(p)?h[typeof p=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var c=u(8458),d=u(7801);a.exports=function(p,h){var g=d(p,h);return c(g)?g:void 0}},9607:(a,s,u)=>{var c=u(2705),d=Object.prototype,p=d.hasOwnProperty,h=d.toString,g=c?c.toStringTag:void 0;a.exports=function(y){var k=p.call(y,g),m=y[g];try{y[g]=void 0;var f=!0}catch{}var v=h.call(y);return f&&(k?y[g]=m:delete y[g]),v}},9551:(a,s,u)=>{var c=u(4963),d=u(479),p=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,g=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(k){return p.call(y,k)}))}:d;a.exports=g},4160:(a,s,u)=>{var c=u(8552),d=u(7071),p=u(3818),h=u(8525),g=u(577),y=u(4239),k=u(346),m="[object Map]",f="[object Promise]",v="[object Set]",x="[object WeakMap]",b="[object DataView]",C=k(c),_=k(d),S=k(p),T=k(h),j=k(g),M=y;(c&&M(new c(new ArrayBuffer(1)))!=b||d&&M(new d)!=m||p&&M(p.resolve())!=f||h&&M(new h)!=v||g&&M(new g)!=x)&&(M=function(R){var L=y(R),G=L=="[object Object]"?R.constructor:void 0,Y=G?k(G):"";if(Y)switch(Y){case C:return b;case _:return m;case S:return f;case T:return v;case j:return x}return L}),a.exports=M},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(p){var h=this.__data__;if(c){var g=h[p];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(h,p)?h[p]:void 0}},1327:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(p){var h=this.__data__;return c?h[p]!==void 0:d.call(h,p)}},1866:(a,s,u)=>{var c=u(4536);a.exports=function(d,p){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=c&&p===void 0?"__lodash_hash_undefined__":p,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var d=typeof u;return!!(c=c==null?9007199254740991:c)&&(d=="number"||d!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var c,d=u(4429),p=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(h){return!!p&&p in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var c=u(8470),d=Array.prototype.splice;a.exports=function(p){var h=this.__data__,g=c(h,p);return!(g<0||(g==h.length-1?h.pop():d.call(h,g,1),--this.size,0))}},2117:(a,s,u)=>{var c=u(8470);a.exports=function(d){var p=this.__data__,h=c(p,d);return h<0?void 0:p[h][1]}},7518:(a,s,u)=>{var c=u(8470);a.exports=function(d){return c(this.__data__,d)>-1}},4705:(a,s,u)=>{var c=u(8470);a.exports=function(d,p){var h=this.__data__,g=c(h,d);return g<0?(++this.size,h.push([d,p])):h[g][1]=p,this}},4785:(a,s,u)=>{var c=u(1989),d=u(8407),p=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(p||d),string:new c}}},1285:(a,s,u)=>{var c=u(5050);a.exports=function(d){var p=c(this,d).delete(d);return this.size-=p?1:0,p}},6e3:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).get(d)}},9916:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).has(d)}},5265:(a,s,u)=>{var c=u(5050);a.exports=function(d,p){var h=c(this,d),g=h.size;return h.set(d,p),this.size+=h.size==g?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d,p){c[++u]=[p,d]}),c}},4536:(a,s,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,s,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,s,u)=>{a=u.nmd(a);var c=u(1957),d=s&&!s.nodeType&&s,p=d&&a&&!a.nodeType&&a,h=p&&p.exports===d&&c.process,g=function(){try{return p&&p.require&&p.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=g},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(c){return s(u(c))}}},5639:(a,s,u)=>{var c=u(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,p=c||d||Function("return this")();a.exports=p},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d){c[++u]=d}),c}},7465:(a,s,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,c=u.delete(s);return this.size=u.size,c}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var c=u(8407),d=u(7071),p=u(3369);a.exports=function(h,g){var y=this.__data__;if(y instanceof c){var k=y.__data__;if(!d||k.length<199)return k.push([h,g]),this.size=++y.size,this;y=this.__data__=new p(k)}return y.set(h,g),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var c=u(9454),d=u(7005),p=Object.prototype,h=p.hasOwnProperty,g=p.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(k){return d(k)&&h.call(k,"callee")&&!g.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var c=u(3560),d=u(1780);a.exports=function(p){return p!=null&&d(p.length)&&!c(p)}},4144:(a,s,u)=>{a=u.nmd(a);var c=u(5639),d=u(5062),p=s&&!s.nodeType&&s,h=p&&a&&!a.nodeType&&a,g=h&&h.exports===p?c.Buffer:void 0,y=(g?g.isBuffer:void 0)||d;a.exports=y},8446:(a,s,u)=>{var c=u(939);a.exports=function(d,p){return c(d,p)}},3560:(a,s,u)=>{var c=u(4239),d=u(3218);a.exports=function(p){if(!d(p))return!1;var h=c(p);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var c=u(8749),d=u(1717),p=u(1167),h=p&&p.isTypedArray,g=h?d(h):c;a.exports=g},3674:(a,s,u)=>{var c=u(4636),d=u(280),p=u(8612);a.exports=function(h){return p(h)?c(h):d(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,c,d,p,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-p)/1e6},u=process.hrtime,d=(s=function(){var g;return 1e9*(g=u())[0]+g[1]})(),h=1e9*process.uptime(),p=d-h):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var c=u(75),d=typeof window>"u"?u.g:window,p=["moz","webkit"],h="AnimationFrame",g=d["request"+h],y=d["cancel"+h]||d["cancelRequest"+h],k=0;!g&&k<p.length;k++)g=d[p[k]+"Request"+h],y=d[p[k]+"Cancel"+h]||d[p[k]+"CancelRequest"+h];if(!g||!y){var m=0,f=0,v=[];g=function(x){if(v.length===0){var b=c(),C=Math.max(0,16.666666666666668-(b-m));m=C+b,setTimeout(function(){var _=v.slice(0);v.length=0;for(var S=0;S<_.length;S++)if(!_[S].cancelled)try{_[S].callback(m)}catch(T){setTimeout(function(){throw T},0)}},Math.round(C))}return v.push({handle:++f,callback:x,cancelled:!1}),f},y=function(x){for(var b=0;b<v.length;b++)v[b].handle===x&&(v[b].cancelled=!0)}}a.exports=function(x){return g.call(d,x)},a.exports.cancel=function(){y.apply(d,arguments)},a.exports.polyfill=function(x){x||(x=d),x.requestAnimationFrame=g,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>b});var a=o(8156),s=o.n(a),u=o(7403),c=o(8446),d=o.n(c);function p(C){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},p(C)}function h(C,_){if(!(C instanceof _))throw new TypeError("Cannot call a class as a function")}function g(C,_){for(var S=0;S<_.length;S++){var T=_[S];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(C,T.key,T)}}function y(C,_){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,T){return S.__proto__=T,S},y(C,_)}function k(C,_){if(_&&(p(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(C)}function m(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function f(C){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},f(C)}function v(C,_,S){return _ in C?Object.defineProperty(C,_,{value:S,enumerable:!0,configurable:!0,writable:!0}):C[_]=S,C}var x=function(C){(function(L,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(G&&G.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),Object.defineProperty(L,"prototype",{writable:!1}),G&&y(L,G)})(R,C);var _,S,T,j,M=(T=R,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var L,G=f(T);if(j){var Y=f(this).constructor;L=Reflect.construct(G,arguments,Y)}else L=G.apply(this,arguments);return k(this,L)});function R(){var L;h(this,R);for(var G=arguments.length,Y=new Array(G),X=0;X<G;X++)Y[X]=arguments[X];return v(m(L=M.call.apply(M,[this].concat(Y))),"state",{instance:null}),L}return _=R,(S=[{key:"componentDidMount",value:function(){var L=this,G=new u.default(this.typewriter,this.props.options);this.setState({instance:G},function(){var Y=L.props.onInit;Y&&Y(G)})}},{key:"componentDidUpdate",value:function(L){d()(this.props.options,L.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var L=this,G=this.props.component;return s().createElement(G,{ref:function(Y){return L.typewriter=Y},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(_.prototype,S),Object.defineProperty(_,"prototype",{writable:!1}),R}(a.Component);x.defaultProps={component:"div"};const b=x})(),l.default})())})(um);const bx=Vs(um.exports),Tx=P.div`
    width: 100%;
    /* background-color: red; */

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

    }

    @keyframes blink {
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`,jx=()=>w(Tx,{children:w(bx,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),zx="/Site-Serra/assets/presentation-image.40ce3de4.png",Lx="/Site-Serra/assets/Sites.a0112d0d.svg",Mx="/Site-Serra/assets/sistemas-web.d1b27032.svg",Rx="/Site-Serra/assets/manutencao.33f9dd1a.svg",Ax="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",Dx="/Site-Serra/assets/braco-robo.2b026e48.svg",Nx="/Site-Serra/assets/impressora-3d.75613d7d.svg",$x="/Site-Serra/assets/nossa-historia.432df2d8.svg",Ix="/Site-Serra/assets/background-image.668c0125.svg",Fx=P.div`
    background-color: #DBDBDB;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    @media screen and (max-width: ${V.tablet}){
        flex-direction: column-reverse; 
        align-items: space-around;
    justify-content: center;
    }
`,Hx=P.img`
    width: 45%;
    
    @media screen and (max-width: ${V.tablet}){
        width: 60%;
    }
`,Ux=P.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${V.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`,Wx=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Bx=P.div`
    width: 80vw;
    
    animation: fade-in-bottom 0.6s ease-in 2s both;
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

`,Vx=P.div`
    background-image: url(${Ix});
`;P.p`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    width: 40%;
    margin-top: 5%;
`;P.img`
    width: 40%;
    height: 40%;
    border-radius: 20px;
    margin-top: 5%;
`;P.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 5%;
`;const Qx=()=>H(Vx,{children:[H(Fx,{children:[w(Ux,{children:w(jx,{})}),w(Hx,{src:zx,alt:"apresenta\xE7\xE3o"})]}),w(za,{text:"O que fazemos"}),H(Wx,{children:[H(Bx,{children:[w(bd,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/computacao",images:[Lx,Mx],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(bd,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/mecanica",color:"#04ADD7",images:[Rx,Ax,Dx,Nx],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(sm,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:$x,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),Gx="/Site-Serra/assets/presentation-image.73570450.svg",Yx=P.div`
    
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



    @media screen and (max-width: ${V.mobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (max-width: ${V.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    
`,Xx=P.p`
    width: 95%;
`,qx=P.ul`

`,Kx=P.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
    }

    
`,Jx=P.img`
    width: 150px;
    height: 140px;

    @media screen and (max-width: ${V.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${V.tablet}) {
        width: 100px;
        height: 100px;
    }
`,Pl=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>H(Yx,{children:[w(Jx,{src:e,alt:n}),w(za,{titleWidth:"50%",fontSize:"30px",text:t}),r?w(qx,{children:o?o.map((l,a)=>w(Kx,{children:l},a)):null}):w(Xx,{children:i})]}),Zx=P.div`
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
`,eS=P.div`
   

`,tS=P.div`

    
`,nS=P.p`
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

    
`,rS=P.img`
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
`,iS=P.div`
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
`,Kd=P.div`
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
`,oS=()=>H(bh,{children:[w(eS,{children:H(Zx,{children:[w(nS,{children:"Sobre N\xF3s"}),w(rS,{src:Gx,alt:"imagem sobre n\xF3s"})]})}),w(tS,{children:H(iS,{children:[w(Pl,{image:Pe.icons[0].image,imageAlt:Pe.icons[0].imageAlt,list:Pe.icons[0].list,hasList:Pe.icons[0].hasList,content:Pe.icons[0].content,titleText:Pe.icons[0].titleText}),w(Kd,{}),w(Pl,{image:Pe.icons[1].image,imageAlt:Pe.icons[1].imageAlt,list:Pe.icons[1].list,hasList:Pe.icons[1].hasList,content:Pe.icons[1].content,titleText:Pe.icons[1].titleText}),w(Kd,{}),w(Pl,{image:Pe.icons[2].image,imageAlt:Pe.icons[2].imageAlt,list:Pe.icons[2].list,hasList:Pe.icons[2].hasList,content:Pe.icons[2].content,titleText:Pe.icons[2].titleText})]})}),w(sm,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),aS=P.div`
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
`;P.div`
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
`;P.div`
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
`;const lS=P.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        border-radius: 20px;
    }
`;P.p`
    width: 80%;

    @media screen and (max-width: 700px) {
        margin-top: 10%;
        width: 100%;
    }
`;P.h2`
    color: #001b40;
    font-size: 26px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 20px;
    }
`;const sS=P.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var Vi=[];function uS(e){var t=q.exports.useState(),n=t[0],r=t[1];return q.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=Vi.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),Vi.push(a),function(){a.removeEventListener("load",l),a.remove(),Vi.splice(Vi.findIndex(function(s){return s.src===i}),1)}},[e]),n}function cS(e,t){var n=uS(e),r=q.exports.useRef(null),i=q.exports.useState(),o=i[0],l=i[1];return q.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const dS=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=cS("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(aS,{children:w(lS,{children:w(sS,{ref:n})})})};function Bs(e,t){return Bs=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Bs(e,t)}var fS=function(e){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src=e,document.head&&document.head.appendChild(t)},pS=function(e){return Array.from(document.scripts).reduce(function(t,n){return t||e.test(n.src)},!1)},hS=/(http|https):\/\/(www)?.+\/recaptcha/,mS=["sitekey","theme","size","badge","tabindex","hl","isolated"],cm=function(e){var t,n;function r(){for(var i,o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(i=e.call.apply(e,[this].concat(l))||this).container=void 0,i.timer=void 0,i.state={instanceKey:Date.now(),ready:!1,rendered:!1,invisible:i.props.size==="invisible"},i._isAvailable=function(){var s;return Boolean((s=window.grecaptcha)==null?void 0:s.ready)},i._inject=function(){i.props.inject&&!pS(hS)&&fS("https://recaptcha.net/recaptcha/api.js?render=explicit"+(i.props.hl?"&hl="+i.props.hl:""))},i._prepare=function(){var s=i.props,u=s.explicit,c=s.onLoad;window.grecaptcha.ready(function(){i.setState({ready:!0},function(){u||i.renderExplicitly(),c&&c()})})},i._renderRecaptcha=function(s,u){return window.grecaptcha.render(s,u)},i._resetRecaptcha=function(){return window.grecaptcha.reset(i.state.instanceId)},i._executeRecaptcha=function(){return window.grecaptcha.execute(i.state.instanceId)},i._getResponseRecaptcha=function(){return window.grecaptcha.getResponse(i.state.instanceId)},i._onVerify=function(s){return i.props.onVerify(s)},i._onExpire=function(){return i.props.onExpire&&i.props.onExpire()},i._onError=function(){return i.props.onError&&i.props.onError()},i._stopTimer=function(){i.timer&&clearInterval(i.timer)},i.componentDidMount=function(){i._inject(),i._isAvailable()?i._prepare():i.timer=window.setInterval(function(){i._isAvailable()&&(i._prepare(),i._stopTimer())},500)},i.componentWillUnmount=function(){i._stopTimer()},i.renderExplicitly=function(){return new Promise(function(s,u){if(i.state.rendered)return u(new Error("This recaptcha instance has been already rendered."));if(!i.state.ready||!i.container)return u(new Error("Recaptcha is not ready for rendering yet."));var c=i._renderRecaptcha(i.container,{sitekey:i.props.sitekey,theme:i.props.theme,size:i.props.size,badge:i.state.invisible?i.props.badge:void 0,tabindex:i.props.tabindex,callback:i._onVerify,"expired-callback":i._onExpire,"error-callback":i._onError,isolated:i.state.invisible?i.props.isolated:void 0,hl:i.state.invisible?void 0:i.props.hl});i.setState({instanceId:c,rendered:!0},function(){i.props.onRender&&i.props.onRender(),s()})})},i.reset=function(){return new Promise(function(s,u){if(i.state.rendered)return i._resetRecaptcha(),s();u(new Error("This recaptcha instance did not render yet."))})},i.execute=function(){return new Promise(function(s,u){return i.state.invisible?(i.state.rendered&&(i._executeRecaptcha(),s()),u(new Error("This recaptcha instance did not render yet."))):u(new Error("Manual execution is only available for invisible size."))})},i.getResponse=function(){return new Promise(function(s,u){if(i.state.rendered)return s(i._getResponseRecaptcha());u(new Error("This recaptcha instance did not render yet."))})},i.render=function(){var s=w("div",{id:i.props.id,className:i.props.className,ref:function(u){return i.container=u}},i.state.instanceKey);return i.props.children?i.props.children({renderExplicitly:i.renderExplicitly,reset:i.reset,execute:i.execute,getResponse:i.getResponse,recaptchaComponent:s}):s},i}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Bs(t,n),r.getDerivedStateFromProps=function(i,o){var l=i.size==="invisible";return l!==o.invisible?{invisible:l}:null},r.prototype.componentDidUpdate=function(i){var o=this;mS.reduce(function(l,a){return o.props[a]!==i[a]?[].concat(l,[a]):l},[]).length>0&&this.setState({instanceKey:Date.now(),rendered:!1},function(){o.props.explicit||o.renderExplicitly()})},r}(q.exports.Component);cm.defaultProps={id:"",className:"g-recaptcha",theme:"light",size:"normal",badge:"bottomright",tabindex:0,explicit:!1,inject:!0,isolated:!1,hl:""};const vS="/Site-Serra/assets/agenda.6fff4078.svg",gS="/Site-Serra/assets/email.946bdff8.svg",yS="/Site-Serra/assets/localizacao.69982f44.svg",wS="/Site-Serra/assets/telefone.9ca94e72.svg",Qi=P.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (min-width: ${V.tablet}) {
        font-size: 20px;
        line-height: 20px;
    }

    @media screen and (min-width: ${V.largeDesktop}) {
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
    }
    
    @media screen and (min-width: ${V.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 60px;
        line-height: 100px;
    }
`,Gi=P.img`

    width: 3em;
    height: 3em;

    @media screen and (min-width: ${V.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${V.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${V.extraLargeDesktop}) {
        width: 10em;
        height: 10em;
    }
   
`,xS=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${V.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${V.mobile}) {
        margin-top: 20%;
    }


    
`,SS=P.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,kS=P.div`
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
`,ES=P.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${V.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${V.largeMobile}) {
        width: 90%;
    } 
`,Yi=P.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${V.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${V.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${V.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,_S=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${V.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${V.largeNotebook}) {
        width: 60%;
    }

    
`,CS=P.div`
    margin-left: 10%;
    width: 100%;
`,Tr=P.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${V.extraLargeDesktop}) {
        font-size: 40px;
        line-height: 20px;
    }

`,Xi=P.input`
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
    @media screen and (min-width: ${V.extraLargeDesktop}) {
        padding-bottom: 10px;
    }
`,OS=P.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${V.extraLargeDesktop}) {
        width: 60%;
    }
`,PS=P.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`,bS=P.input`
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
`,TS=P.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${V.notebook}) {
        width: 100%;
    }
`,jS=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zS=P.div`  

`,LS=()=>H(jS,{children:[w(za,{titleWidth:"40%",text:"Entre em contato conosco!"}),H(ES,{children:[H(xS,{children:[H(Yi,{children:[w(Gi,{src:yS,alt:""}),w(Qi,{children:"Rua Bonfim, 25 em Vila Am\xE9lia, "})]}),H(Yi,{children:[w(Gi,{src:wS,alt:""}),w(Qi,{children:"(22) 2533-2265"})]}),H(Yi,{children:[w(Gi,{src:gS,alt:""}),w(Qi,{children:"serrajr@iprj.uerj.br"})]}),H(Yi,{children:[w(Gi,{src:vS,alt:""}),H(Qi,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(TS,{children:w(_S,{children:H(CS,{children:[w(Tr,{children:"Nome"}),w(Xi,{type:"text",placeholder:"Insira seu nome"}),w(Tr,{children:"Email"}),w(Xi,{type:"text",placeholder:"Insira seu email"}),w(Tr,{children:"Telefone"}),w(Xi,{type:"text",placeholder:"(XX) XXXXX-XXXX"}),w(Tr,{children:"Assunto"}),w(Xi,{type:"text",placeholder:"Digite o assunto da mensagem"}),w(Tr,{children:"Mensagem"}),w(bS,{type:"text",placeholder:"Digite a mensagem"}),w(zS,{children:w(cm,{sitekey:"6Lef0HsiAAAAAPmdiuuS_Xz6_TA8fPzPzZdr9RC2"})}),w(PS,{children:w(OS,{children:"Enviar"})})]})})})]}),w(kS,{children:w(SS,{children:w(dS,{})})})]}),MS=P.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,RS=P.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 959px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,AS=P.section`
    width: 85%;
    min-height: 90vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  
    background-color: lightgrey;
    border-radius: 3rem;
    

    @media screen and (max-width: 959px) {
        width: 80%;
    }
`,DS=P.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;

    @media screen and (max-width: 959px) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }
`,NS=P.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    @media screen and (max-width: 959px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,$S=P.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: 959px) {    
        width: 60%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,IS=P.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 959px) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
`,FS=P.span`
    width: 90%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);

    @media screen and (max-width: 959px) {
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--blue);
    }
`,HS=P.button`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
    color: #fff;
    width: 90%;
    background-color: #FF7400;
    border-radius: 1rem;
    margin-top: 20px;
    border: 0px;

    &:hover{
        opacity: 0.8;
    }
`,US=P.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: 959px) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
    }
`,WS=P.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
`,dm=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0};return w(WS,{containerWidth:e.width,children:w(lm,{...t,children:e.carouselData.map((n,r)=>w(MS,{children:w(RS,{children:H(AS,{children:[w(DS,{children:w(za,{text:n.title,fontSize:"50px"})}),H(NS,{children:[w(IS,{children:w($S,{src:n.image,alt:n.title})}),H(US,{children:[w(FS,{children:n.content}),w(HS,{children:"Voc\xEA pode acessar o site clicando aqui"})]})]})]})})},r))})})},BS="/Site-Serra/assets/marmitex.857922f9.svg",VS={mechanicsProjects:[{title:"Projeto Marmitex",image:BS,content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico."},{title:"Projeto Lar Abrigo Amor a Jesus",image:"https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG",content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade."}]},qi="/Site-Serra/assets/seta.7067b273.svg",QS="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",GS="/Site-Serra/assets/hammer-icon.c370caae.svg",YS="/Site-Serra/assets/bot-icon.237c34bd.svg",XS="/Site-Serra/assets/3d-icon.6c010241.svg",qS="/Site-Serra/assets/drawing-icon.462650d6.svg",fm="/Site-Serra/assets/whatsapp.c7592442.svg",pm="/Site-Serra/assets/arrow-up.1b45090f.svg",KS="/Site-Serra/assets/background-mecanica.81e45f94.svg",JS=P.div`
`,ZS=P.div`
    background-image: url(${KS});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
`,ek=P.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${V.largeMobile}) {
        flex-wrap: wrap;
    } 
`,Ki=P.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: ${V.largeMobile}) {
        font-size: 22px;
    }
    
`,Ji=P.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${V.largeMobile}) {
        width: 70%;
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
    }
`,Jd=P.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${V.largeMobile}) {
        margin-top: 20%;
        line-height: 5%;
        font-size: 50px;
    } 
`,tk=P.div`
    
`,nk=P.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${V.largeMobile}) {
        font-size: 38px;
    }
`,rk=P.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${V.largeMobile}) {
        margin-top: -5%;
        font-size: 22px;
       }
`,Zd=P.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${V.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }
`,Zi=P.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${V.largeMobile}) {
        margin-bottom: 12%;
    }
`,Bt=P.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${V.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }
`,eo=P.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;
`,to=P.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,ik=P.img`
    width: 40%;

    @media screen and (max-width: ${V.largeMobile}) {
        width: 80%;
    }
`,ok=P.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,ak=P.p`
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

    color: #04ADD7;

    &:hover{
        background-color: #04ADD7;
        color: #fff;
        transition: background-color 0.8s;
    }

    @media screen and (max-width: ${V.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }
`,lk=P.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${V.largeMobile}) {
        margin: 25px 0px;
    }
`,sk=P.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`,uk=P.img`
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${V.largeMobile}) {
        width: 2.5rem;
    }
`,ck=P.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;

    @media screen and (max-width: ${V.largeMobile}) {
        width: 2rem;
    }
`,dk=P.div`
    margin-top: 3%;

    @media screen and (max-width: ${V.largeMobile}) {
        margin-top: 20%;
    }
`,fk=()=>H(JS,{children:[H(ek,{children:[H(tk,{children:[w(Jd,{children:"Engenharia"}),w(Jd,{children:"Mec\xE2nica"})]}),w(ik,{src:QS,alt:"Imagem de Mec\xE2nica"})]}),H(ZS,{children:[w(nk,{children:"Carta de Servi\xE7os"}),w(rk,{children:"Engenharia Mec\xE2nica"}),H(Zd,{children:[H(Zi,{children:[H(eo,{children:[w(Bt,{src:GS,alt:"Imagem Sistemas"}),w(Ki,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),H(to,{children:[w(Bt,{src:qi,alt:"Seta"}),w(Ji,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),H(Zi,{children:[H(eo,{children:[w(Bt,{src:qS,alt:"Imagem Site"}),w(Ki,{children:"Desenho T\xE9cnico e Industrial"})]}),H(to,{children:[w(Bt,{src:qi,alt:"Seta"}),w(Ji,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),H(Zd,{children:[H(Zi,{children:[H(eo,{children:[w(Bt,{src:YS,alt:"Imagem Sistemas"}),w(Ki,{children:"Projetos de Automa\xE7\xE3o"})]}),H(to,{children:[w(Bt,{src:qi,alt:"Seta"}),w(Ji,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),H(Zi,{children:[H(eo,{children:[w(Bt,{src:XS,alt:"Imagem Site"}),w(Ki,{children:"Prototipagem"})]}),H(to,{children:[w(Bt,{src:qi,alt:"Seta"}),w(Ji,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),w(ok,{}),w(lk,{children:w(ak,{children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(dk,{children:w(dm,{carouselData:VS.mechanicsProjects})}),H(sk,{children:[w(uk,{src:fm,alt:"WhatsApp"}),w(ck,{onClick:()=>window.scrollTo(0,0),src:pm,alt:"ScrollUp"})]})]}),pk="/Site-Serra/assets/friburguense.ba8886f5.svg",hk="/Site-Serra/assets/projeto-tmf.f6316197.svg",mk={computingProjects:[{title:"Projeto Friburguense",image:pk,content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`},{title:"Projeto TMF",image:hk,content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`}]},vk="/Site-Serra/assets/presentation-image.3bba7d23.svg",gk="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",yk="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",ef="/Site-Serra/assets/seta.13cafa5d.svg",wk="/Site-Serra/assets/css-icon.e1a4dd78.svg",xk="/Site-Serra/assets/html-icon.e0dc6b68.svg",Sk="/Site-Serra/assets/js-icon.f4d001af.svg",kk="/Site-Serra/assets/react-icon.f937629c.svg",Ek="/Site-Serra/assets/ts-icon.bf061be4.svg",_k="/Site-Serra/assets/styled-icon.35b18102.svg",Ck="/Site-Serra/assets/background-computacao.dbcf66d3.svg",Ok=P.div`
    scroll-behavior: smooth;

`,Pk=P.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0px 0px 0px 100px;
    align-items: center;

    @media screen and (max-width: ${V.tablet}) {
        border-radius: 0px 0px 0px 60px;
        
    }
    
    @media screen and (max-width: ${V.mobile}) {
        flex-direction: column;

    }
`,bk=P.img`
    width: 40%;

    @media screen and (max-width: ${V.extraLargeDesktop}){
        width: 30%;
    }

    
    @media screen and (max-width: ${V.mobile}) {
        width: 70%;
    }
`,Tk=P.div`
    background-image: url(${Ck});
    background-repeat: no-repeat; 
    background-size: cover; 
`,bl=P.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    
    @media screen and (max-width: ${V.extraLargeDesktop}){
        font-size: 110px;
        line-height: 40px;
    }

    @media screen and (max-width: ${V.notebook}) {
        font-size: 56px;
        line-height: 30px;
    }

    @media screen and (max-width: ${V.tablet}) {
        font-size: 40px;
        line-height: 10px;
    }
`,jk=P.div`
`,zk=P.h1`
    text-align: center;
    margin-top: 0;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-bottom: 0px;
`,Lk=P.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;
`,Mk=P.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;

    /* background-color: red; */
    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }

`,tf=P.div`
    margin-top: 3%;
    width: 40%;

    @media screen and (max-width: ${V.mobile}){
        width: 90%;
    }
`,nf=P.div`
    display: flex;
    min-height: 6vh;
    margin-bottom: 5%;
    align-items: center;
    width: 100%;

`,rf=P.p`
    width: 100%;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (min-width: ${V.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
        font-weight: 300;
    }
`,of=P.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: ${V.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
    }
`,no=P.img`
    width: 10%;
    height: 10%;
    margin-right: 4%;
    color: red;
`,af=P.div`
    display: flex;
    
`,Rk=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

`,Rn=P.div`

    @media screen and (max-width: ${V.mobile}){
        width: 30%;
    }
`,An=P.img`
    margin: 10px;
    width: 100%;
    

`;P.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 920px;
    height: 30%;
    
`;const Ak=P.img`
    margin-right: 2%;
    width: 3.5rem;
`,Dk=P.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;
`,Nk=P.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
`,$k=P.div`
    margin-top: 3%;
`,Ik=P.p`
    border: 3px solid #FD6300;
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

    color: #FD6300;

    &:hover{
        background-color: #FD6300;
        color: #fff;
        transition: background-color 0.8s;
    }
`,Fk=P.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,Hk=P.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,Uk=()=>H(Ok,{children:[H(Pk,{children:[H(jk,{children:[w(bl,{children:"Engenharia"}),w(bl,{children:"de"}),w(bl,{children:"Computa\xE7\xE3o"})]}),w(bk,{src:vk,alt:"Imagem de Computa\xE7\xE3o"})]}),H(Tk,{children:[w(zk,{children:"Carta de Servi\xE7os"}),w(Lk,{children:"Engenharia de Computa\xE7\xE3o"}),H(Mk,{children:[H(tf,{children:[H(nf,{children:[w(no,{src:yk,alt:"Imagem Site"}),w(of,{children:"Desenvolvimento de Websites"})]}),H(af,{children:[w(no,{src:ef,alt:"Seta"}),w(rf,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),H(tf,{children:[H(nf,{children:[w(no,{src:gk,alt:"Imagem Sistemas"}),w(of,{children:"Desenvolvimento de Sistemas Web"})]}),H(af,{children:[w(no,{src:ef,alt:"Seta"}),w(rf,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),H(Rk,{children:[w(Rn,{children:w(An,{src:xk,alt:"ImagemHtml"})}),w(Rn,{children:w(An,{src:wk,alt:"Imagemcss"})}),w(Rn,{children:w(An,{src:Sk,alt:"ImagemJS"})}),w(Rn,{children:w(An,{src:Ek,alt:"ImagemTS"})}),w(Rn,{children:w(An,{src:kk,alt:"ImagemREACT"})}),w(Rn,{children:w(An,{src:_k,alt:"ImagemStyled"})})]})]}),w(Hk,{}),w(Fk,{children:w(Ik,{children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w($k,{children:w(dm,{carouselData:mk.computingProjects})}),H(Nk,{children:[w(Ak,{src:fm,alt:"WhatsApp"}),w(Dk,{onClick:()=>window.scrollTo(0,0),src:pm,alt:"ScrollUp"})]})]}),Wk=()=>H(bh,{children:[w(Zy,{}),H(Ly,{children:[w(Dn,{path:"/",element:w(Qx,{})}),w(Dn,{path:"/computacao",element:w(Uk,{})}),w(Dn,{path:"/mecanica",element:w(fk,{})}),w(Dn,{path:"/quemSomos",element:w(oS,{})}),w(Dn,{path:"/contatos",element:w(LS,{})})]}),w(ny,{})]});function Bk(){return w("div",{className:"App",children:w(Ay,{basename:"/Site-Serra",children:w(Wk,{})})})}Tl.createRoot(document.getElementById("root")).render(w(pi.StrictMode,{children:w(Bk,{})}));
