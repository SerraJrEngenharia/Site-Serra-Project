(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function tp(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var X={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),wv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),Sv=Symbol.for("react.strict_mode"),kv=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),_v=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Ov=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),Fc=Symbol.iterator;function Tv(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rp=Object.assign,ip={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function op(){}op.prototype=Cr.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}var Cu=bu.prototype=new op;Cu.constructor=bu;rp(Cu,Cr.prototype);Cu.isPureReactComponent=!0;var Hc=Array.isArray,ap=Object.prototype.hasOwnProperty,Ou={current:null},lp={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ap.call(t,r)&&!lp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mi,type:e,key:o,ref:l,props:i,_owner:Ou.current}}function Mv(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function Lv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uc=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lv(""+e.key):t.toString(36)}function Co(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mi:case wv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+dl(l,0):r,Hc(i)?(n="",e!=null&&(n=e.replace(Uc,"$&/")+"/"),Co(i,t,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=Mv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Uc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Hc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+dl(o,a);l+=Co(o,t,n,s,i)}else if(s=Tv(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+dl(o,a++),l+=Co(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wi(e,t,n){if(e==null)return e;var r=[],i=0;return Co(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Oo={transition:null},jv={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:Ou};ue.Children={map:Wi,forEach:function(e,t,n){Wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wi(e,function(){t++}),t},toArray:function(e){return Wi(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Cr;ue.Fragment=xv;ue.Profiler=kv;ue.PureComponent=bu;ue.StrictMode=Sv;ue.Suspense=Cv;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ou.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ap.call(t,s)&&!lp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mi,type:e.type,key:i,ref:o,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:_v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ev,_context:e},e.Consumer=e};ue.createElement=sp;ue.createFactory=function(e){var t=sp.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:bv,render:e}};ue.isValidElement=Pu;ue.lazy=function(e){return{$$typeof:Pv,_payload:{_status:-1,_result:e},_init:zv}};ue.memo=function(e,t){return{$$typeof:Ov,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return Ge.current.useCallback(e,t)};ue.useContext=function(e){return Ge.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};ue.useEffect=function(e,t){return Ge.current.useEffect(e,t)};ue.useId=function(){return Ge.current.useId()};ue.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return Ge.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};ue.useRef=function(e){return Ge.current.useRef(e)};ue.useState=function(e){return Ge.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return Ge.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(X);const Li=Oa(X.exports);var os={},Tu={exports:{}},st={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,D){var U=C.length;C.push(D);e:for(;0<U;){var V=U-1>>>1,H=C[V];if(0<i(H,D))C[V]=D,C[U]=H,U=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],U=C.pop();if(U!==D){C[0]=U;e:for(var V=0,H=C.length,E=H>>>1;V<E;){var q=2*(V+1)-1,F=C[q],T=q+1,J=C[T];if(0>i(F,U))T<H&&0>i(J,F)?(C[V]=J,C[T]=U,V=T):(C[V]=F,C[q]=U,V=q);else if(T<H&&0>i(J,U))C[V]=J,C[T]=U,V=T;else break e}}return D}function i(C,D){var U=C.sortIndex-D.sortIndex;return U!==0?U:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,d=null,f=3,h=!1,g=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function x(C){if(y=!1,v(C),!g)if(n(s)!==null)g=!0,Y(O);else{var D=n(u);D!==null&&z(x,D.startTime-C)}}function O(C,D){g=!1,y&&(y=!1,m(S),S=-1),h=!0;var U=f;try{for(v(D),d=n(s);d!==null&&(!(d.expirationTime>D)||C&&!$());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var H=V(d.expirationTime<=D);D=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(s)&&r(s),v(D)}else r(s);d=n(s)}if(d!==null)var E=!0;else{var q=n(u);q!==null&&z(x,q.startTime-D),E=!1}return E}finally{d=null,f=U,h=!1}}var P=!1,_=null,S=-1,L=5,j=-1;function $(){return!(e.unstable_now()-j<L)}function N(){if(_!==null){var C=e.unstable_now();j=C;var D=!0;try{D=_(!0,C)}finally{D?R():(P=!1,_=null)}}else P=!1}var R;if(typeof p=="function")R=function(){p(N)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,I=A.port2;A.port1.onmessage=N,R=function(){I.postMessage(null)}}else R=function(){k(N,0)};function Y(C){_=C,P||(P=!0,R())}function z(C,D){S=k(function(){C(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Y(O))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var U=f;f=D;try{return C()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var U=f;f=C;try{return D()}finally{f=U}},e.unstable_scheduleCallback=function(C,D,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,C){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,C={id:c++,callback:D,priorityLevel:C,startTime:U,expirationTime:H,sortIndex:-1},U>V?(C.sortIndex=U,t(u,C),n(s)===null&&C===n(u)&&(y?(m(S),S=-1):y=!0,z(x,U-V))):(C.sortIndex=H,t(s,C),g||h||(g=!0,Y(O))),C},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(C){var D=f;return function(){var U=f;f=D;try{return C.apply(this,arguments)}finally{f=U}}}})(cp);(function(e){e.exports=cp})(up);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=X.exports,lt=up.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fp=new Set,si={};function Fn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(si[e]=t,e=0;e<t.length;e++)fp.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc={},Bc={};function Rv(e){return as.call(Bc,e)?!0:as.call(Wc,e)?!1:Dv.test(e)?Bc[e]=!0:(Wc[e]=!0,!1)}function $v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nv(e,t,n,r){if(t===null||typeof t>"u"||$v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Lu);Fe[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Lu);Fe[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Lu);Fe[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nv(t,n,i,r)&&(n=null),r||i===null?Rv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),ls=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),us=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),mp=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,fl;function Vr(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var pl=!1;function hl(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Av(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=hl(e.type,!1),e;case 11:return e=hl(e.type.render,!1),e;case 1:return e=hl(e.type,!0),e;default:return""}}function cs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case qn:return"Portal";case ls:return"Profiler";case ju:return"StrictMode";case ss:return"Suspense";case us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hp:return(e.displayName||"Context")+".Consumer";case pp:return(e._context.displayName||"Context")+".Provider";case Du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:cs(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return cs(e(t))}catch{}}return null}function Iv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cs(t);case 8:return t===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fv(e){var t=vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=Fv(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ds(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Qc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yp(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function fs(e,t){yp(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ps(e,t.type,n):t.hasOwnProperty("defaultValue")&&ps(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ps(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Qr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function wp(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Sp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Hv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function kp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function Ep(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uv=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vs(e,t){if(t){if(Uv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,sr=null,ur=null;function Kc(e){if(e=Di(e)){if(typeof ws!="function")throw Error(B(280));var t=e.stateNode;t&&(t=za(t),ws(e.stateNode,e.type,t))}}function _p(e){sr?ur?ur.push(e):ur=[e]:sr=e}function bp(){if(sr){var e=sr,t=ur;if(ur=sr=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function Cp(e,t){return e(t)}function Op(){}var ml=!1;function Pp(e,t,n){if(ml)return e(t,n);ml=!0;try{return Cp(e,t,n)}finally{ml=!1,(sr!==null||ur!==null)&&(Op(),bp())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var xs=!1;if(Bt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{xs=!1}function Wv(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Kr=!1,Fo=null,Ho=!1,Ss=null,Bv={onError:function(e){Kr=!0,Fo=e}};function Vv(e,t,n,r,i,o,l,a,s){Kr=!1,Fo=null,Wv.apply(Bv,arguments)}function Qv(e,t,n,r,i,o,l,a,s){if(Vv.apply(this,arguments),Kr){if(Kr){var u=Fo;Kr=!1,Fo=null}else throw Error(B(198));Ho||(Ho=!0,Ss=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(Hn(e)!==e)throw Error(B(188))}function qv(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Xc(i),e;if(o===r)return Xc(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Mp(e){return e=qv(e),e!==null?Lp(e):null}function Lp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lp(e);if(t!==null)return t;e=e.sibling}return null}var zp=lt.unstable_scheduleCallback,Jc=lt.unstable_cancelCallback,Yv=lt.unstable_shouldYield,Gv=lt.unstable_requestPaint,be=lt.unstable_now,Kv=lt.unstable_getCurrentPriorityLevel,Nu=lt.unstable_ImmediatePriority,jp=lt.unstable_UserBlockingPriority,Uo=lt.unstable_NormalPriority,Xv=lt.unstable_LowPriority,Dp=lt.unstable_IdlePriority,Pa=null,Dt=null;function Jv(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:tg,Zv=Math.log,eg=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(Zv(e)/eg|0)|0}var qi=64,Yi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=qr(a):(o&=l,o!==0&&(r=qr(o)))}else l=n&~i,l!==0?r=qr(l):o!==0&&(r=qr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-_t(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=ng(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rp(){var e=qi;return qi<<=1,(qi&4194240)===0&&(qi=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function ig(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function $p(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Np,Iu,Ap,Ip,Fp,Es=!1,Gi=[],ln=null,sn=null,un=null,di=new Map,fi=new Map,tn=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Di(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ag(e,t,n,r,i){switch(t){case"focusin":return ln=Dr(ln,e,t,n,r,i),!0;case"dragenter":return sn=Dr(sn,e,t,n,r,i),!0;case"mouseover":return un=Dr(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return di.set(o,Dr(di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,Dr(fi.get(o)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=Cn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Tp(n),t!==null){e.blockedOn=t,Fp(e.priority,function(){Ap(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ys=r,n.target.dispatchEvent(r),ys=null}else return t=Di(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function ed(e,t,n){Po(e)&&n.delete(t)}function lg(){Es=!1,ln!==null&&Po(ln)&&(ln=null),sn!==null&&Po(sn)&&(sn=null),un!==null&&Po(un)&&(un=null),di.forEach(ed),fi.forEach(ed)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,lg)))}function pi(e){function t(i){return Rr(i,e)}if(0<Gi.length){Rr(Gi[0],e);for(var n=1;n<Gi.length;n++){var r=Gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Rr(ln,e),sn!==null&&Rr(sn,e),un!==null&&Rr(un,e),di.forEach(t),fi.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&tn.shift()}var cr=Yt.ReactCurrentBatchConfig,Bo=!0;function sg(e,t,n,r){var i=fe,o=cr.transition;cr.transition=null;try{fe=1,Fu(e,t,n,r)}finally{fe=i,cr.transition=o}}function ug(e,t,n,r){var i=fe,o=cr.transition;cr.transition=null;try{fe=4,Fu(e,t,n,r)}finally{fe=i,cr.transition=o}}function Fu(e,t,n,r){if(Bo){var i=_s(e,t,n,r);if(i===null)Cl(e,t,r,Vo,n),Zc(e,r);else if(ag(i,e,t,n,r))r.stopPropagation();else if(Zc(e,r),t&4&&-1<og.indexOf(e)){for(;i!==null;){var o=Di(i);if(o!==null&&Np(o),o=_s(e,t,n,r),o===null&&Cl(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var Vo=null;function _s(e,t,n,r){if(Vo=null,e=$u(r),e=Cn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case Nu:return 1;case jp:return 4;case Uo:case Xv:return 16;case Dp:return 536870912;default:return 16}default:return 16}}var rn=null,Hu=null,To=null;function Wp(){if(To)return To;var e,t=Hu,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return To=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function td(){return!1}function ut(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:td,this.isPropagationStopped=td,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=ut(Or),ji=Ee({},Or,{view:0,detail:0}),cg=ut(ji),gl,yl,$r,Ta=Ee({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(gl=e.screenX-$r.screenX,yl=e.screenY-$r.screenY):yl=gl=0,$r=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),nd=ut(Ta),dg=Ee({},Ta,{dataTransfer:0}),fg=ut(dg),pg=Ee({},ji,{relatedTarget:0}),wl=ut(pg),hg=Ee({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=ut(hg),vg=Ee({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=ut(vg),yg=Ee({},Or,{data:0}),rd=ut(yg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sg[e])?!!t[e]:!1}function Wu(){return kg}var Eg=Ee({},ji,{key:function(e){if(e.key){var t=wg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_g=ut(Eg),bg=Ee({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=ut(bg),Cg=Ee({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),Og=ut(Cg),Pg=Ee({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=ut(Pg),Mg=Ee({},Ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=ut(Mg),zg=[9,13,27,32],Bu=Bt&&"CompositionEvent"in window,Xr=null;Bt&&"documentMode"in document&&(Xr=document.documentMode);var jg=Bt&&"TextEvent"in window&&!Xr,Bp=Bt&&(!Bu||Xr&&8<Xr&&11>=Xr),od=String.fromCharCode(32),ad=!1;function Vp(e,t){switch(e){case"keyup":return zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Dg(e,t){switch(e){case"compositionend":return Qp(t);case"keypress":return t.which!==32?null:(ad=!0,od);case"textInput":return e=t.data,e===od&&ad?null:e;default:return null}}function Rg(e,t){if(Gn)return e==="compositionend"||!Bu&&Vp(e,t)?(e=Wp(),To=Hu=rn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bp&&t.locale!=="ko"?null:t.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$g[e.type]:t==="textarea"}function qp(e,t,n,r){_p(r),t=Qo(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,hi=null;function Ng(e){ih(e,0)}function Ma(e){var t=Jn(e);if(gp(t))return e}function Ag(e,t){if(e==="change")return t}var Yp=!1;if(Bt){var xl;if(Bt){var Sl="oninput"in document;if(!Sl){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Sl=typeof sd.oninput=="function"}xl=Sl}else xl=!1;Yp=xl&&(!document.documentMode||9<document.documentMode)}function ud(){Jr&&(Jr.detachEvent("onpropertychange",Gp),hi=Jr=null)}function Gp(e){if(e.propertyName==="value"&&Ma(hi)){var t=[];qp(t,hi,e,$u(e)),Pp(Ng,t)}}function Ig(e,t,n){e==="focusin"?(ud(),Jr=t,hi=n,Jr.attachEvent("onpropertychange",Gp)):e==="focusout"&&ud()}function Fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(hi)}function Hg(e,t){if(e==="click")return Ma(t)}function Ug(e,t){if(e==="input"||e==="change")return Ma(t)}function Wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:Wg;function mi(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!as.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,t){var n=cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function Kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xp(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bg(e){var t=Xp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kp(n.ownerDocument.documentElement,n)){if(r!==null&&Vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=dd(n,o);var l=dd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vg=Bt&&"documentMode"in document&&11>=document.documentMode,Kn=null,bs=null,Zr=null,Cs=!1;function fd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||Kn==null||Kn!==Io(r)||(r=Kn,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&mi(Zr,r)||(Zr=r,r=Qo(bs,"onSelect"),0<r.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function Xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},kl={},Jp={};Bt&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function La(e){if(kl[e])return kl[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jp)return kl[e]=t[n];return e}var Zp=La("animationend"),eh=La("animationiteration"),th=La("animationstart"),nh=La("transitionend"),rh=new Map,pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){rh.set(e,t),Fn(t,[e])}for(var El=0;El<pd.length;El++){var _l=pd[El],Qg=_l.toLowerCase(),qg=_l[0].toUpperCase()+_l.slice(1);wn(Qg,"on"+qg)}wn(Zp,"onAnimationEnd");wn(eh,"onAnimationIteration");wn(th,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(nh,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function hd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qv(r,t,void 0,e),e.currentTarget=null}function ih(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;hd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;hd(i,a,u),o=s}}}if(Ho)throw e=Ss,Ho=!1,Ss=null,e}function ve(e,t){var n=t[Ls];n===void 0&&(n=t[Ls]=new Set);var r=e+"__bubble";n.has(r)||(oh(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),oh(n,e,r,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[Ji]){e[Ji]=!0,fp.forEach(function(n){n!=="selectionchange"&&(Yg.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,bl("selectionchange",!1,t))}}function oh(e,t,n,r){switch(Up(t)){case 1:var i=sg;break;case 4:i=ug;break;default:i=Fu}n=i.bind(null,t,n,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Cn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Pp(function(){var u=o,c=$u(n),d=[];e:{var f=rh.get(e);if(f!==void 0){var h=Uu,g=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":h=_g;break;case"focusin":g="focus",h=wl;break;case"focusout":g="blur",h=wl;break;case"beforeblur":case"afterblur":h=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Og;break;case Zp:case eh:case th:h=mg;break;case nh:h=Tg;break;case"scroll":h=cg;break;case"wheel":h=Lg;break;case"copy":case"cut":case"paste":h=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=id}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,v;p!==null;){v=p;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=ci(p,m),x!=null&&y.push(gi(p,x,v)))),k)break;p=p.return}0<y.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==ys&&(g=n.relatedTarget||n.fromElement)&&(Cn(g)||g[Vt]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Cn(g):null,g!==null&&(k=Hn(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=nd,x="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=id,x="onPointerLeave",m="onPointerEnter",p="pointer"),k=h==null?f:Jn(h),v=g==null?f:Jn(g),f=new y(x,p+"leave",h,n,c),f.target=k,f.relatedTarget=v,x=null,Cn(c)===u&&(y=new y(m,p+"enter",g,n,c),y.target=v,y.relatedTarget=k,x=y),k=x,h&&g)t:{for(y=h,m=g,p=0,v=y;v;v=Bn(v))p++;for(v=0,x=m;x;x=Bn(x))v++;for(;0<p-v;)y=Bn(y),p--;for(;0<v-p;)m=Bn(m),v--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Bn(y),m=Bn(m)}y=null}else y=null;h!==null&&md(d,f,h,y,!1),g!==null&&k!==null&&md(d,k,g,y,!0)}}e:{if(f=u?Jn(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var O=Ag;else if(ld(f))if(Yp)O=Ug;else{O=Fg;var P=Ig}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=Hg);if(O&&(O=O(e,u))){qp(d,O,n,c);break e}P&&P(e,f,u),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ps(f,"number",f.value)}switch(P=u?Jn(u):window,e){case"focusin":(ld(P)||P.contentEditable==="true")&&(Kn=P,bs=u,Zr=null);break;case"focusout":Zr=bs=Kn=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,fd(d,n,c);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":fd(d,n,c)}var _;if(Bu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Gn?Vp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Bp&&n.locale!=="ko"&&(Gn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Gn&&(_=Wp()):(rn=c,Hu="value"in rn?rn.value:rn.textContent,Gn=!0)),P=Qo(u,S),0<P.length&&(S=new rd(S,e,null,n,c),d.push({event:S,listeners:P}),_?S.data=_:(_=Qp(n),_!==null&&(S.data=_)))),(_=jg?Dg(e,n):Rg(e,n))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(c=new rd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}ih(d,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ci(e,n),o!=null&&r.unshift(gi(e,o,i)),o=ci(e,t),o!=null&&r.push(gi(e,o,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function md(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=ci(n,o),s!=null&&l.unshift(gi(n,s,a))):i||(s=ci(n,o),s!=null&&l.push(gi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gg=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function vd(e){return(typeof e=="string"?e:""+e).replace(Gg,`
`).replace(Kg,"")}function Zi(e,t,n){if(t=vd(t),vd(e)!==t&&n)throw Error(B(425))}function qo(){}var Os=null,Ps=null;function Ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ms=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(Zg)}:Ms;function Zg(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),jt="__reactFiber$"+Pr,yi="__reactProps$"+Pr,Vt="__reactContainer$"+Pr,Ls="__reactEvents$"+Pr,e0="__reactListeners$"+Pr,t0="__reactHandles$"+Pr;function Cn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yd(e);e!==null;){if(n=e[jt])return n;e=yd(e)}return t}e=n,n=e.parentNode}return null}function Di(e){return e=e[jt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function za(e){return e[yi]||null}var zs=[],Zn=-1;function xn(e){return{current:e}}function ge(e){0>Zn||(e.current=zs[Zn],zs[Zn]=null,Zn--)}function me(e,t){Zn++,zs[Zn]=e.current,e.current=t}var yn={},Ve=xn(yn),et=xn(!1),Dn=yn;function mr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Yo(){ge(et),ge(Ve)}function wd(e,t,n){if(Ve.current!==yn)throw Error(B(168));me(Ve,t),me(et,n)}function ah(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Iv(e)||"Unknown",i));return Ee({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Dn=Ve.current,me(Ve,e),me(et,et.current),!0}function xd(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=ah(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,ge(et),ge(Ve),me(Ve,e)):ge(et),me(et,n)}var It=null,ja=!1,Pl=!1;function lh(e){It===null?It=[e]:It.push(e)}function n0(e){ja=!0,lh(e)}function Sn(){if(!Pl&&It!==null){Pl=!0;var e=0,t=fe;try{var n=It;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ja=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),zp(Nu,Sn),i}finally{fe=t,Pl=!1}}return null}var er=[],tr=0,Ko=null,Xo=0,ft=[],pt=0,Rn=null,Ft=1,Ht="";function En(e,t){er[tr++]=Xo,er[tr++]=Ko,Ko=e,Xo=t}function sh(e,t,n){ft[pt++]=Ft,ft[pt++]=Ht,ft[pt++]=Rn,Rn=e;var r=Ft;e=Ht;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ft=1<<32-_t(t)+i|n<<i|r,Ht=o+e}else Ft=1<<o|n<<i|r,Ht=e}function Qu(e){e.return!==null&&(En(e,1),sh(e,1,0))}function qu(e){for(;e===Ko;)Ko=er[--tr],er[tr]=null,Xo=er[--tr],er[tr]=null;for(;e===Rn;)Rn=ft[--pt],ft[pt]=null,Ht=ft[--pt],ft[pt]=null,Ft=ft[--pt],ft[pt]=null}var at=null,ot=null,we=!1,kt=null;function uh(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Ft,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ds(e){if(we){var t=ot;if(t){var n=t;if(!Sd(e,t)){if(js(e))throw Error(B(418));t=cn(n.nextSibling);var r=at;t&&Sd(e,t)?uh(r,n):(e.flags=e.flags&-4097|2,we=!1,at=e)}}else{if(js(e))throw Error(B(418));e.flags=e.flags&-4097|2,we=!1,at=e}}}function kd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function eo(e){if(e!==at)return!1;if(!we)return kd(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ts(e.type,e.memoizedProps)),t&&(t=ot)){if(js(e))throw ch(),Error(B(418));for(;t;)uh(e,t),t=cn(t.nextSibling)}if(kd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?cn(e.stateNode.nextSibling):null;return!0}function ch(){for(var e=ot;e;)e=cn(e.nextSibling)}function vr(){ot=at=null,we=!1}function Yu(e){kt===null?kt=[e]:kt.push(e)}var r0=Yt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Jo=xn(null),Zo=null,nr=null,Gu=null;function Ku(){Gu=nr=Zo=null}function Xu(e){var t=Jo.current;ge(Jo),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Zo=e,Gu=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ze=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Zo===null)throw Error(B(308));nr=e,Zo.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var On=null;function Ju(e){On===null?On=[e]:On.push(e)}function dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function Lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}function Ed(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,c=u=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(f=t,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=Ee({},d,f);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=d}}function _d(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ph=new dp.Component().refs;function $s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Da={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=pn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(bt(t,e,i,r),Lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=pn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(bt(t,e,i,r),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=pn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(bt(t,e,r,n),Lo(t,e,r))}};function bd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!mi(n,r)||!mi(i,o):!0}function hh(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=vt(o):(i=tt(t)?Dn:Ve.current,r=t.contextTypes,o=(r=r!=null)?mr(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Da,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Da.enqueueReplaceState(t,t.state,null)}function Ns(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ph,Zu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=vt(o):(o=tt(t)?Dn:Ve.current,i.context=mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($s(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Da.enqueueReplaceState(i,i.state,null),ea(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===ph&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function mh(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=hn(m,p),m.index=0,m.sibling=null,m}function o(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,x){return p===null||p.tag!==6?(p=Rl(v,m.mode,x),p.return=m,p):(p=i(p,v),p.return=m,p)}function s(m,p,v,x){var O=v.type;return O===Yn?c(m,p,v.props.children,x,v.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jt&&Od(O)===p.type)?(x=i(p,v.props),x.ref=Nr(m,p,v),x.return=m,x):(x=No(v.type,v.key,v.props,null,m.mode,x),x.ref=Nr(m,p,v),x.return=m,x)}function u(m,p,v,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=$l(v,m.mode,x),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,x,O){return p===null||p.tag!==7?(p=Ln(v,m.mode,x,O),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Rl(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bi:return v=No(p.type,p.key,p.props,null,m.mode,v),v.ref=Nr(m,null,p),v.return=m,v;case qn:return p=$l(p,m.mode,v),p.return=m,p;case Jt:var x=p._init;return d(m,x(p._payload),v)}if(Qr(p)||zr(p))return p=Ln(p,m.mode,v,null),p.return=m,p;to(m,p)}return null}function f(m,p,v,x){var O=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:a(m,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bi:return v.key===O?s(m,p,v,x):null;case qn:return v.key===O?u(m,p,v,x):null;case Jt:return O=v._init,f(m,p,O(v._payload),x)}if(Qr(v)||zr(v))return O!==null?null:c(m,p,v,x,null);to(m,v)}return null}function h(m,p,v,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(p,m,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bi:return m=m.get(x.key===null?v:x.key)||null,s(p,m,x,O);case qn:return m=m.get(x.key===null?v:x.key)||null,u(p,m,x,O);case Jt:var P=x._init;return h(m,p,v,P(x._payload),O)}if(Qr(x)||zr(x))return m=m.get(v)||null,c(p,m,x,O,null);to(p,x)}return null}function g(m,p,v,x){for(var O=null,P=null,_=p,S=p=0,L=null;_!==null&&S<v.length;S++){_.index>S?(L=_,_=null):L=_.sibling;var j=f(m,_,v[S],x);if(j===null){_===null&&(_=L);break}e&&_&&j.alternate===null&&t(m,_),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j,_=L}if(S===v.length)return n(m,_),we&&En(m,S),O;if(_===null){for(;S<v.length;S++)_=d(m,v[S],x),_!==null&&(p=o(_,p,S),P===null?O=_:P.sibling=_,P=_);return we&&En(m,S),O}for(_=r(m,_);S<v.length;S++)L=h(_,m,S,v[S],x),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?S:L.key),p=o(L,p,S),P===null?O=L:P.sibling=L,P=L);return e&&_.forEach(function($){return t(m,$)}),we&&En(m,S),O}function y(m,p,v,x){var O=zr(v);if(typeof O!="function")throw Error(B(150));if(v=O.call(v),v==null)throw Error(B(151));for(var P=O=null,_=p,S=p=0,L=null,j=v.next();_!==null&&!j.done;S++,j=v.next()){_.index>S?(L=_,_=null):L=_.sibling;var $=f(m,_,j.value,x);if($===null){_===null&&(_=L);break}e&&_&&$.alternate===null&&t(m,_),p=o($,p,S),P===null?O=$:P.sibling=$,P=$,_=L}if(j.done)return n(m,_),we&&En(m,S),O;if(_===null){for(;!j.done;S++,j=v.next())j=d(m,j.value,x),j!==null&&(p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return we&&En(m,S),O}for(_=r(m,_);!j.done;S++,j=v.next())j=h(_,m,S,j.value,x),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?S:j.key),p=o(j,p,S),P===null?O=j:P.sibling=j,P=j);return e&&_.forEach(function(N){return t(m,N)}),we&&En(m,S),O}function k(m,p,v,x){if(typeof v=="object"&&v!==null&&v.type===Yn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bi:e:{for(var O=v.key,P=p;P!==null;){if(P.key===O){if(O=v.type,O===Yn){if(P.tag===7){n(m,P.sibling),p=i(P,v.props.children),p.return=m,m=p;break e}}else if(P.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jt&&Od(O)===P.type){n(m,P.sibling),p=i(P,v.props),p.ref=Nr(m,P,v),p.return=m,m=p;break e}n(m,P);break}else t(m,P);P=P.sibling}v.type===Yn?(p=Ln(v.props.children,m.mode,x,v.key),p.return=m,m=p):(x=No(v.type,v.key,v.props,null,m.mode,x),x.ref=Nr(m,p,v),x.return=m,m=x)}return l(m);case qn:e:{for(P=v.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=$l(v,m.mode,x),p.return=m,m=p}return l(m);case Jt:return P=v._init,k(m,p,P(v._payload),x)}if(Qr(v))return g(m,p,v,x);if(zr(v))return y(m,p,v,x);to(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=Rl(v,m.mode,x),p.return=m,m=p),l(m)):n(m,p)}return k}var gr=mh(!0),vh=mh(!1),Ri={},Rt=xn(Ri),wi=xn(Ri),xi=xn(Ri);function Pn(e){if(e===Ri)throw Error(B(174));return e}function ec(e,t){switch(me(xi,t),me(wi,e),me(Rt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ms(t,e)}ge(Rt),me(Rt,t)}function yr(){ge(Rt),ge(wi),ge(xi)}function gh(e){Pn(xi.current);var t=Pn(Rt.current),n=ms(t,e.type);t!==n&&(me(wi,e),me(Rt,n))}function tc(e){wi.current===e&&(ge(Rt),ge(wi))}var Se=xn(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function nc(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var zo=Yt.ReactCurrentDispatcher,Ml=Yt.ReactCurrentBatchConfig,$n=0,ke=null,Le=null,De=null,na=!1,ei=!1,Si=0,i0=0;function He(){throw Error(B(321))}function rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function ic(e,t,n,r,i,o){if($n=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?s0:u0,e=n(r,i),ei){o=0;do{if(ei=!1,Si=0,25<=o)throw Error(B(301));o+=1,De=Le=null,t.updateQueue=null,zo.current=c0,e=n(r,i)}while(ei)}if(zo.current=ra,t=Le!==null&&Le.next!==null,$n=0,De=Le=ke=null,na=!1,t)throw Error(B(300));return e}function oc(){var e=Si!==0;return Si=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ke.memoizedState=De=e:De=De.next=e,De}function gt(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=De===null?ke.memoizedState:De.next;if(t!==null)De=t,Le=e;else{if(e===null)throw Error(B(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},De===null?ke.memoizedState=De=e:De=De.next=e}return De}function ki(e,t){return typeof t=="function"?t(e):t}function Ll(e){var t=gt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if(($n&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,ke.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Ot(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zl(e){var t=gt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ot(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yh(){}function wh(e,t){var n=ke,r=gt(),i=t(),o=!Ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Ze=!0),r=r.queue,ac(kh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Ei(9,Sh.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(B(349));($n&30)!==0||xh(n,t,i)}return i}function xh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sh(e,t,n,r){t.value=n,t.getSnapshot=r,Eh(t)&&_h(e)}function kh(e,t,n){return n(function(){Eh(t)&&_h(e)})}function Eh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function _h(e){var t=Qt(e,1);t!==null&&bt(t,e,1,-1)}function Pd(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=l0.bind(null,ke,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bh(){return gt().memoizedState}function jo(e,t,n,r){var i=zt();ke.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var l=Le.memoizedState;if(o=l.destroy,r!==null&&rc(r,l.deps)){i.memoizedState=Ei(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function Td(e,t){return jo(8390656,8,e,t)}function ac(e,t){return Ra(2048,8,e,t)}function Ch(e,t){return Ra(4,2,e,t)}function Oh(e,t){return Ra(4,4,e,t)}function Ph(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Th(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,Ph.bind(null,t,e),n)}function lc(){}function Mh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zh(e,t,n){return($n&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n):(Ot(n,t)||(n=Rp(),ke.lanes|=n,Nn|=n,e.baseState=!0),t)}function o0(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{fe=n,Ml.transition=r}}function jh(){return gt().memoizedState}function a0(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dh(e))Rh(t,n);else if(n=dh(e,t,n,r),n!==null){var i=Ye();bt(n,e,r,i),$h(n,t,r)}}function l0(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dh(e))Rh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,l)){var s=t.interleaved;s===null?(i.next=i,Ju(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=dh(e,t,i,r),n!==null&&(i=Ye(),bt(n,e,r,i),$h(n,t,r))}}function Dh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Rh(e,t){ei=na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $h(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Au(e,n)}}var ra={readContext:vt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},s0={readContext:vt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,Ph.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=a0.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Pd,useDebugValue:lc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Pd(!1),t=e[0];return e=o0.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=zt();if(we){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Re===null)throw Error(B(349));($n&30)!==0||xh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Td(kh.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,Sh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=Re.identifierPrefix;if(we){var n=Ht,r=Ft;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u0={readContext:vt,useCallback:Mh,useContext:vt,useEffect:ac,useImperativeHandle:Th,useInsertionEffect:Ch,useLayoutEffect:Oh,useMemo:Lh,useReducer:Ll,useRef:bh,useState:function(){return Ll(ki)},useDebugValue:lc,useDeferredValue:function(e){var t=gt();return zh(t,Le.memoizedState,e)},useTransition:function(){var e=Ll(ki)[0],t=gt().memoizedState;return[e,t]},useMutableSource:yh,useSyncExternalStore:wh,useId:jh,unstable_isNewReconciler:!1},c0={readContext:vt,useCallback:Mh,useContext:vt,useEffect:ac,useImperativeHandle:Th,useInsertionEffect:Ch,useLayoutEffect:Oh,useMemo:Lh,useReducer:zl,useRef:bh,useState:function(){return zl(ki)},useDebugValue:lc,useDeferredValue:function(e){var t=gt();return Le===null?t.memoizedState=e:zh(t,Le.memoizedState,e)},useTransition:function(){var e=zl(ki)[0],t=gt().memoizedState;return[e,t]},useMutableSource:yh,useSyncExternalStore:wh,useId:jh,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=Av(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function As(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Nh(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,Ys=r),As(e,t)},n}function Ah(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){As(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){As(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=b0.bind(null,e,t,n),t.then(e,e))}function Ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var f0=Yt.ReactCurrentOwner,Ze=!1;function qe(e,t,n,r){t.child=e===null?vh(t,null,n,r):gr(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var o=t.ref;return dr(t,i),r=ic(e,t,n,r,o,i),n=oc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(we&&n&&Qu(t),t.flags|=1,qe(e,t,r,i),t.child)}function Dd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ih(e,t,o,r,i)):(e=No(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(l,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ih(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(mi(o,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,qt(e,t,i)}return Is(e,t,n,r,i)}function Fh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ir,it),it|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(ir,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(ir,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(ir,it),it|=r;return qe(e,t,i,n),t.child}function Hh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,n,r,i){var o=tt(n)?Dn:Ve.current;return o=mr(t,o),dr(t,i),n=ic(e,t,n,r,o,i),r=oc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(we&&r&&Qu(t),t.flags|=1,qe(e,t,n,i),t.child)}function Rd(e,t,n,r,i){if(tt(n)){var o=!0;Go(t)}else o=!1;if(dr(t,i),t.stateNode===null)Do(e,t),hh(t,n,r),Ns(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=tt(n)?Dn:Ve.current,u=mr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Cd(t,l,r,u),Zt=!1;var f=t.memoizedState;l.state=f,ea(t,r,l,i),s=t.memoizedState,a!==r||f!==s||et.current||Zt?(typeof c=="function"&&($s(t,n,c,r),s=t.memoizedState),(a=Zt||bd(t,n,a,r,f,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:wt(t.type,a),l.props=u,d=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=tt(n)?Dn:Ve.current,s=mr(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||f!==s)&&Cd(t,l,r,s),Zt=!1,f=t.memoizedState,l.state=f,ea(t,r,l,i);var g=t.memoizedState;a!==d||f!==g||et.current||Zt?(typeof h=="function"&&($s(t,n,h,r),g=t.memoizedState),(u=Zt||bd(t,n,u,r,f,g,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Fs(e,t,n,r,o,i)}function Fs(e,t,n,r,i,o){Hh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&xd(t,n,!1),qt(e,t,o);r=t.stateNode,f0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,a,o)):qe(e,t,a,o),t.memoizedState=r.state,i&&xd(t,n,!0),t.child}function Uh(e){var t=e.stateNode;t.pendingContext?wd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wd(e,t.context,!1),ec(e,t.containerInfo)}function $d(e,t,n,r,i){return vr(),Yu(i),t.flags|=256,qe(e,t,n,r),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0};function Us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wh(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Se,i&1),e===null)return Ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Aa(l,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Us(n),t.memoizedState=Hs,e):sc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return p0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=hn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hn(a,o):(o=Ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Us(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Hs,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sc(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&Yu(r),gr(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(B(422))),no(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Aa({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&gr(t,e.child,null,l),t.child.memoizedState=Us(l),t.memoizedState=Hs,o);if((t.mode&1)===0)return no(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=jl(o,r,void 0),no(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ze||a){if(r=Re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),bt(r,e,i,-1))}return hc(),r=jl(Error(B(421))),no(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=cn(i.nextSibling),at=t,we=!0,kt=null,e!==null&&(ft[pt++]=Ft,ft[pt++]=Ht,ft[pt++]=Rn,Ft=e.id,Ht=e.overflow,Rn=t),t=sc(t,r.children),t.flags|=4096,t)}function Nd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function Dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qe(e,t,r.children,n),r=Se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,n,t);else if(e.tag===19)Nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Se,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dl(t,!0,n,null,o);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h0(e,t,n){switch(t.tag){case 3:Uh(t),vr();break;case 5:gh(t);break;case 1:tt(t.type)&&Go(t);break;case 4:ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Wh(e,t,n):(me(Se,Se.current&1),e=qt(e,t,n),e!==null?e.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Bh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,Fh(e,t,n)}return qt(e,t,n)}var Vh,Ws,Qh,qh;Vh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};Qh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(Rt.current);var o=null;switch(n){case"input":i=ds(e,i),r=ds(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=hs(e,i),r=hs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}vs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(si.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(si.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};qh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function m0(e,t,n){var r=t.pendingProps;switch(qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&Yo(),Ue(t),null;case 3:return r=t.stateNode,yr(),ge(et),ge(Ve),nc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(Xs(kt),kt=null))),Ws(e,t),Ue(t),null;case 5:tc(t);var i=Pn(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)Qh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return Ue(t),null}if(e=Pn(Rt.current),eo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[jt]=t,r[yi]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)ve(Yr[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Qc(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":Yc(r,o),ve("invalid",r)}vs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",""+a]):si.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ve("scroll",r)}switch(n){case"input":Vi(r),qc(r,o,!0);break;case"textarea":Vi(r),Gc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[jt]=t,e[yi]=r,Vh(e,t,!1,!1),t.stateNode=e;e:{switch(l=gs(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)ve(Yr[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":Qc(e,r),i=ds(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Yc(e,r),i=hs(e,r),ve("invalid",e);break;default:i=r}vs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ep(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ui(e,s):typeof s=="number"&&ui(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(si.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&zu(e,o,s,l))}switch(n){case"input":Vi(e),qc(e,r,!1);break;case"textarea":Vi(e),Gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)qh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Pn(xi.current),Pn(Rt.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ge(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ch(),vr(),t.flags|=98560,o=!1;else if(o=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[jt]=t}else vr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else kt!==null&&(Xs(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?ze===0&&(ze=3):hc())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return yr(),Ws(e,t),e===null&&vi(t.stateNode.containerInfo),Ue(t),null;case 10:return Xu(t.type._context),Ue(t),null;case 17:return tt(t.type)&&Yo(),Ue(t),null;case 19:if(ge(Se),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ar(o,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ta(e),l!==null){for(t.flags|=128,Ar(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>xr&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=ta(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!we)return Ue(t),null}else 2*be()-o.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,Ar(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(it&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function v0(e,t){switch(qu(t),t.tag){case 1:return tt(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),ge(et),ge(Ve),nc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tc(t),null;case 13:if(ge(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Se),null;case 4:return yr(),null;case 10:return Xu(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var ro=!1,Be=!1,g0=typeof WeakSet=="function"?WeakSet:Set,K=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Bs(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Ad=!1;function y0(e,t){if(Os=Bo,e=Xp(),Vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++c===r&&(s=l),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ps={focusedElem:e,selectionRange:n},Bo=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,k=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:wt(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){_e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return g=Ad,Ad=!1,g}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bs(t,n,o)}i=i.next}while(i!==r)}}function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yh(e){var t=e.alternate;t!==null&&(e.alternate=null,Yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[yi],delete t[Ls],delete t[e0],delete t[t0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gh(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qs(e,t,n),e=e.sibling;e!==null;)qs(e,t,n),e=e.sibling}var Ae=null,St=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Kh(e,t,n),n=n.sibling}function Kh(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Be||rr(n,t);case 6:var r=Ae,i=St;Ae=null,Kt(e,t,n),Ae=r,St=i,Ae!==null&&(St?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(St?(e=Ae,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),pi(e)):Ol(Ae,n.stateNode));break;case 4:r=Ae,i=St,Ae=n.stateNode.containerInfo,St=!0,Kt(e,t,n),Ae=r,St=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Bs(n,t,l),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!Be&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Kt(e,t,n),Be=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g0),t.forEach(function(r){var i=O0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,St=!1;break e;case 3:Ae=a.stateNode.containerInfo,St=!0;break e;case 4:Ae=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ae===null)throw Error(B(160));Kh(o,l,i),Ae=null,St=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){_e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xh(t,e),t=t.sibling}function Xh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Lt(e),r&4){try{ti(3,e,e.return),$a(3,e)}catch(y){_e(e,e.return,y)}try{ti(5,e,e.return)}catch(y){_e(e,e.return,y)}}break;case 1:yt(t,e),Lt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(yt(t,e),Lt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(y){_e(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yp(i,o),gs(a,l);var u=gs(a,o);for(l=0;l<s.length;l+=2){var c=s[l],d=s[l+1];c==="style"?Ep(i,d):c==="dangerouslySetInnerHTML"?Sp(i,d):c==="children"?ui(i,d):zu(i,c,d,u)}switch(a){case"input":fs(i,o);break;case"textarea":wp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?lr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?lr(i,!!o.multiple,o.defaultValue,!0):lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(y){_e(e,e.return,y)}}break;case 6:if(yt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){_e(e,e.return,y)}}break;case 3:if(yt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(y){_e(e,e.return,y)}break;case 4:yt(t,e),Lt(e);break;case 13:yt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dc=be())),r&4&&Fd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,yt(t,e),Be=u):yt(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(K=e,c=e.child;c!==null;){for(d=K=c;K!==null;){switch(f=K,h=f.child,f.tag){case 0:case 11:case 14:case 15:ti(4,f,f.return);break;case 1:rr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){Ud(d);continue}}h!==null?(h.return=f,K=h):Ud(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=kp("display",l))}catch(y){_e(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){_e(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:yt(t,e),Lt(e),r&4&&Fd(e);break;case 21:break;default:yt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gh(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var o=Id(e);qs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Id(e);Qs(e,a,l);break;default:throw Error(B(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w0(e,t,n){K=e,Jh(e)}function Jh(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ro;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Be;a=ro;var u=Be;if(ro=l,(Be=s)&&!u)for(K=i;K!==null;)l=K,s=l.child,l.tag===22&&l.memoizedState!==null?Wd(i):s!==null?(s.return=l,K=s):Wd(i);for(;o!==null;)K=o,Jh(o),o=o.sibling;K=i,ro=a,Be=u}Hd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,K=o):Hd(e)}}function Hd(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||$a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_d(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_d(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&pi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Be||t.flags&512&&Vs(t)}catch(f){_e(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Ud(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Wd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$a(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){_e(t,i,s)}}var o=t.return;try{Vs(t)}catch(s){_e(t,o,s)}break;case 5:var l=t.return;try{Vs(t)}catch(s){_e(t,l,s)}}}catch(s){_e(t,t.return,s)}if(t===e){K=null;break}var a=t.sibling;if(a!==null){a.return=t.return,K=a;break}K=t.return}}var x0=Math.ceil,ia=Yt.ReactCurrentDispatcher,uc=Yt.ReactCurrentOwner,mt=Yt.ReactCurrentBatchConfig,de=0,Re=null,Te=null,Ie=0,it=0,ir=xn(0),ze=0,_i=null,Nn=0,Na=0,cc=0,ni=null,Je=null,dc=0,xr=1/0,At=null,oa=!1,Ys=null,fn=null,io=!1,on=null,aa=0,ri=0,Gs=null,Ro=-1,$o=0;function Ye(){return(de&6)!==0?be():Ro!==-1?Ro:Ro=be()}function pn(e){return(e.mode&1)===0?1:(de&2)!==0&&Ie!==0?Ie&-Ie:r0.transition!==null?($o===0&&($o=Rp()),$o):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Up(e.type)),e)}function bt(e,t,n,r){if(50<ri)throw ri=0,Gs=null,Error(B(185));zi(e,n,r),((de&2)===0||e!==Re)&&(e===Re&&((de&2)===0&&(Na|=n),ze===4&&nn(e,Ie)),nt(e,r),n===1&&de===0&&(t.mode&1)===0&&(xr=be()+500,ja&&Sn()))}function nt(e,t){var n=e.callbackNode;rg(e,t);var r=Wo(e,e===Re?Ie:0);if(r===0)n!==null&&Jc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jc(n),t===1)e.tag===0?n0(Bd.bind(null,e)):lh(Bd.bind(null,e)),Jg(function(){(de&6)===0&&Sn()}),n=null;else{switch($p(r)){case 1:n=Nu;break;case 4:n=jp;break;case 16:n=Uo;break;case 536870912:n=Dp;break;default:n=Uo}n=am(n,Zh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zh(e,t){if(Ro=-1,$o=0,(de&6)!==0)throw Error(B(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Wo(e,e===Re?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=la(e,r);else{t=r;var i=de;de|=2;var o=tm();(Re!==e||Ie!==t)&&(At=null,xr=be()+500,Mn(e,t));do try{E0();break}catch(a){em(e,a)}while(1);Ku(),ia.current=o,de=i,Te!==null?t=0:(Re=null,Ie=0,t=ze)}if(t!==0){if(t===2&&(i=ks(e),i!==0&&(r=i,t=Ks(e,i))),t===1)throw n=_i,Mn(e,0),nn(e,r),nt(e,be()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!S0(i)&&(t=la(e,r),t===2&&(o=ks(e),o!==0&&(r=o,t=Ks(e,o))),t===1))throw n=_i,Mn(e,0),nn(e,r),nt(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:_n(e,Je,At);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=dc+500-be(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ms(_n.bind(null,e,Je,At),t);break}_n(e,Je,At);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-_t(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x0(r/1960))-r,10<r){e.timeoutHandle=Ms(_n.bind(null,e,Je,At),r);break}_n(e,Je,At);break;case 5:_n(e,Je,At);break;default:throw Error(B(329))}}}return nt(e,be()),e.callbackNode===n?Zh.bind(null,e):null}function Ks(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=la(e,t),e!==2&&(t=Je,Je=n,t!==null&&Xs(t)),e}function Xs(e){Je===null?Je=e:Je.push.apply(Je,e)}function S0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~cc,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Bd(e){if((de&6)!==0)throw Error(B(327));fr();var t=Wo(e,0);if((t&1)===0)return nt(e,be()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=ks(e);r!==0&&(t=r,n=Ks(e,r))}if(n===1)throw n=_i,Mn(e,0),nn(e,t),nt(e,be()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Je,At),nt(e,be()),null}function fc(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(xr=be()+500,ja&&Sn())}}function An(e){on!==null&&on.tag===0&&(de&6)===0&&fr();var t=de;de|=1;var n=mt.transition,r=fe;try{if(mt.transition=null,fe=1,e)return e()}finally{fe=r,mt.transition=n,de=t,(de&6)===0&&Sn()}}function pc(){it=ir.current,ge(ir)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xg(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:yr(),ge(et),ge(Ve),nc();break;case 5:tc(r);break;case 4:yr();break;case 13:ge(Se);break;case 19:ge(Se);break;case 10:Xu(r.type._context);break;case 22:case 23:pc()}n=n.return}if(Re=e,Te=e=hn(e.current,null),Ie=it=t,ze=0,_i=null,cc=Na=Nn=0,Je=ni=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}On=null}return e}function em(e,t){do{var n=Te;try{if(Ku(),zo.current=ra,na){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}na=!1}if($n=0,De=Le=ke=null,ei=!1,Si=0,uc.current=null,n===null||n.return===null){ze=1,_i=t,Te=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ld(l);if(h!==null){h.flags&=-257,zd(h,l,a,o,t),h.mode&1&&Md(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){Md(o,u,t),hc();break e}s=Error(B(426))}}else if(we&&a.mode&1){var k=Ld(l);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),zd(k,l,a,o,t),Yu(wr(s,a));break e}}o=s=wr(s,a),ze!==4&&(ze=2),ni===null?ni=[o]:ni.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Nh(o,s,t);Ed(o,m);break e;case 1:a=s;var p=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fn===null||!fn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ah(o,a,t);Ed(o,x);break e}}o=o.return}while(o!==null)}rm(n)}catch(O){t=O,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function tm(){var e=ia.current;return ia.current=ra,e===null?ra:e}function hc(){(ze===0||ze===3||ze===2)&&(ze=4),Re===null||(Nn&268435455)===0&&(Na&268435455)===0||nn(Re,Ie)}function la(e,t){var n=de;de|=2;var r=tm();(Re!==e||Ie!==t)&&(At=null,Mn(e,t));do try{k0();break}catch(i){em(e,i)}while(1);if(Ku(),de=n,ia.current=r,Te!==null)throw Error(B(261));return Re=null,Ie=0,ze}function k0(){for(;Te!==null;)nm(Te)}function E0(){for(;Te!==null&&!Yv();)nm(Te)}function nm(e){var t=om(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?rm(e):Te=t,uc.current=null}function rm(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=m0(n,t,it),n!==null){Te=n;return}}else{if(n=v0(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);ze===0&&(ze=5)}function _n(e,t,n){var r=fe,i=mt.transition;try{mt.transition=null,fe=1,_0(e,t,n,r)}finally{mt.transition=i,fe=r}return null}function _0(e,t,n,r){do fr();while(on!==null);if((de&6)!==0)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ig(e,o),e===Re&&(Te=Re=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||io||(io=!0,am(Uo,function(){return fr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=mt.transition,mt.transition=null;var l=fe;fe=1;var a=de;de|=4,uc.current=null,y0(e,n),Xh(n,e),Bg(Ps),Bo=!!Os,Ps=Os=null,e.current=n,w0(n),Gv(),de=a,fe=l,mt.transition=o}else e.current=n;if(io&&(io=!1,on=e,aa=i),o=e.pendingLanes,o===0&&(fn=null),Jv(n.stateNode),nt(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oa)throw oa=!1,e=Ys,Ys=null,e;return(aa&1)!==0&&e.tag!==0&&fr(),o=e.pendingLanes,(o&1)!==0?e===Gs?ri++:(ri=0,Gs=e):ri=0,Sn(),null}function fr(){if(on!==null){var e=$p(aa),t=mt.transition,n=fe;try{if(mt.transition=null,fe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,aa=0,(de&6)!==0)throw Error(B(331));var i=de;for(de|=4,K=e.current;K!==null;){var o=K,l=o.child;if((K.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:ti(8,c,o)}var d=c.child;if(d!==null)d.return=c,K=d;else for(;K!==null;){c=K;var f=c.sibling,h=c.return;if(Yh(c),c===u){K=null;break}if(f!==null){f.return=h,K=f;break}K=h}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}K=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,K=l;else e:for(;K!==null;){if(o=K,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:ti(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,K=m;break e}K=o.return}}var p=e.current;for(K=p;K!==null;){l=K;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,K=v;else e:for(l=p;K!==null;){if(a=K,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:$a(9,a)}}catch(O){_e(a,a.return,O)}if(a===l){K=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,K=x;break e}K=a.return}}if(de=i,Sn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Pa,e)}catch{}r=!0}return r}finally{fe=n,mt.transition=t}}return!1}function Vd(e,t,n){t=wr(n,t),t=Nh(e,t,1),e=dn(e,t,1),t=Ye(),e!==null&&(zi(e,1,t),nt(e,t))}function _e(e,t,n){if(e.tag===3)Vd(e,e,n);else for(;t!==null;){if(t.tag===3){Vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=wr(n,e),e=Ah(t,e,1),t=dn(t,e,1),e=Ye(),t!==null&&(zi(t,1,e),nt(t,e));break}}t=t.return}}function b0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ie&n)===n&&(ze===4||ze===3&&(Ie&130023424)===Ie&&500>be()-dc?Mn(e,0):cc|=n),nt(e,t)}function im(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yi,Yi<<=1,(Yi&130023424)===0&&(Yi=4194304)));var n=Ye();e=Qt(e,t),e!==null&&(zi(e,t,n),nt(e,n))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),im(e,n)}function O0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),im(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ze=!1,h0(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,we&&(t.flags&1048576)!==0&&sh(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Do(e,t),e=t.pendingProps;var i=mr(t,Ve.current);dr(t,n),i=ic(null,t,r,e,i,n);var o=oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,Go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(t),i.updater=Da,t.stateNode=i,i._reactInternals=t,Ns(t,r,e,n),t=Fs(null,t,r,!0,o,n)):(t.tag=0,we&&o&&Qu(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T0(r),e=wt(r,e),i){case 0:t=Is(null,t,r,e,n);break e;case 1:t=Rd(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=Dd(null,t,r,wt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Is(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Rd(e,t,r,i,n);case 3:e:{if(Uh(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fh(e,t),ea(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wr(Error(B(423)),t),t=$d(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(B(424)),t),t=$d(e,t,r,n,i);break e}else for(ot=cn(t.stateNode.containerInfo.firstChild),at=t,we=!0,kt=null,n=vh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=qt(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return gh(t),e===null&&Ds(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ts(r,i)?l=null:o!==null&&Ts(r,o)&&(t.flags|=32),Hh(e,t),qe(e,t,l,n),t.child;case 6:return e===null&&Ds(t),null;case 13:return Wh(e,t,n);case 4:return ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),jd(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(Jo,r._currentValue),r._currentValue=l,o!==null)if(Ot(o.value,l)){if(o.children===i.children&&!et.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Rs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Rs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dr(t,n),i=vt(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),Dd(e,t,r,i,n);case 15:return Ih(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Do(e,t),t.tag=1,tt(r)?(e=!0,Go(t)):e=!1,dr(t,n),hh(t,r,i),Ns(t,r,i,n),Fs(null,t,r,!0,e,n);case 19:return Bh(e,t,n);case 22:return Fh(e,t,n)}throw Error(B(156,t.tag))};function am(e,t){return zp(e,t)}function P0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new P0(e,t,n,r)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T0(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Du)return 11;if(e===Ru)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")mc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yn:return Ln(n.children,i,o,t);case ju:l=8,i|=8;break;case ls:return e=ht(12,n,t,i|2),e.elementType=ls,e.lanes=o,e;case ss:return e=ht(13,n,t,i),e.elementType=ss,e.lanes=o,e;case us:return e=ht(19,n,t,i),e.elementType=us,e.lanes=o,e;case mp:return Aa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pp:l=10;break e;case hp:l=9;break e;case Du:l=11;break e;case Ru:l=14;break e;case Jt:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=ht(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function Aa(e,t,n,r){return e=ht(22,e,r,t),e.elementType=mp,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(e,t,n,r,i,o,l,a,s){return e=new M0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(o),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lm(e){if(!e)return yn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(tt(n))return ah(e,n,t)}return t}function sm(e,t,n,r,i,o,l,a,s){return e=vc(n,r,!0,e,i,o,l,a,s),e.context=lm(null),n=e.current,r=Ye(),i=pn(n),o=Wt(r,i),o.callback=t!=null?t:null,dn(n,o,i),e.current.lanes=i,zi(e,i,r),nt(e,r),e}function Ia(e,t,n,r){var i=t.current,o=Ye(),l=pn(i);return n=lm(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,l),e!==null&&(bt(e,i,l,o),Lo(e,i,l)),l}function sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function z0(){return null}var um=typeof reportError=="function"?reportError:function(e){console.error(e)};function yc(e){this._internalRoot=e}Fa.prototype.render=yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ia(e,t,null,null)};Fa.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ia(null,e,null,null)}),t[Vt]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ip();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Hp(e)}};function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qd(){}function j0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=sa(l);o.call(u)}}var l=sm(t,r,e,0,null,!1,!1,"",qd);return e._reactRootContainer=l,e[Vt]=l.current,vi(e.nodeType===8?e.parentNode:e),An(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=sa(s);a.call(u)}}var s=vc(e,0,!1,null,null,!1,!1,"",qd);return e._reactRootContainer=s,e[Vt]=s.current,vi(e.nodeType===8?e.parentNode:e),An(function(){Ia(t,s,n,r)}),s}function Ua(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=sa(l);a.call(s)}}Ia(t,l,e,i)}else l=j0(n,t,e,i,r);return sa(l)}Np=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Au(t,n|1),nt(t,be()),(de&6)===0&&(xr=be()+500,Sn()))}break;case 13:An(function(){var r=Qt(e,1);if(r!==null){var i=Ye();bt(r,e,1,i)}}),gc(e,1)}};Iu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ye();bt(t,e,134217728,n)}gc(e,134217728)}};Ap=function(e){if(e.tag===13){var t=pn(e),n=Qt(e,t);if(n!==null){var r=Ye();bt(n,e,t,r)}gc(e,t)}};Ip=function(){return fe};Fp=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};ws=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=za(r);if(!i)throw Error(B(90));gp(r),fs(r,i)}}}break;case"textarea":wp(e,n);break;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}};Cp=fc;Op=An;var D0={usingClientEntryPoint:!1,Events:[Di,Jn,za,_p,bp,fc]},Ir={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R0={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Pa=oo.inject(R0),Dt=oo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(t))throw Error(B(200));return L0(e,t,null,n)};st.createRoot=function(e,t){if(!wc(e))throw Error(B(299));var n=!1,r="",i=um;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vc(e,1,!1,null,null,n,!1,r,i),e[Vt]=t.current,vi(e.nodeType===8?e.parentNode:e),new yc(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return An(e)};st.hydrate=function(e,t,n){if(!Ha(t))throw Error(B(200));return Ua(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!wc(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=um;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sm(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Vt]=t.current,vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fa(t)};st.render=function(e,t,n){if(!Ha(t))throw Error(B(200));return Ua(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Ha(e))throw Error(B(40));return e._reactRootContainer?(An(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};st.unstable_batchedUpdates=fc;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ha(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Ua(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=st})(Tu);var Yd=Tu.exports;os.createRoot=Yd.createRoot,os.hydrateRoot=Yd.hydrateRoot;const ao="/Site-Serra/assets/voitto.e51ea618.svg",Nl="/Site-Serra/assets/iprj.03355e19.svg",Al="/Site-Serra/assets/inovafri.c4b07fe0.svg",Fr="/Site-Serra/assets/wiseup.d9d06fa3.svg",Hr="/Site-Serra/assets/ligajr.52feeabf.svg";var Wa={exports:{}},Ba={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=X.exports,N0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,F0=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function cm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)I0.call(t,r)&&!H0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:N0,type:e,key:o,ref:l,props:i,_owner:F0.current}}Ba.Fragment=A0;Ba.jsx=cm;Ba.jsxs=cm;(function(e){e.exports=Ba})(Wa);const dm=Wa.exports.Fragment,w=Wa.exports.jsx,Q=Wa.exports.jsxs;function U0(){return w("div",{className:"logo-slider",children:Q("div",{className:"logo-slide-track",children:[Q("div",{className:"slide",children:[w("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.voitto.com.br",children:w("img",{src:ao,alt:"Voitto"})}),"  ",w("img",{src:ao,alt:"Voitto"})]}),w("div",{className:"slide",children:w("img",{src:Nl,alt:"iprjIcon"})}),w("div",{className:"slide",children:w("img",{src:Al,alt:"inovafriIcon"})}),w("div",{className:"slide",children:w("img",{src:Fr,alt:"wiseupIcon"})}),w("div",{className:"slide",children:w("img",{src:Hr,alt:"ligajrIcon"})}),w("div",{className:"slide",children:w("img",{src:ao,alt:"Voitto"})}),w("div",{className:"slide",children:w("img",{src:Nl,alt:"iprjIcon"})}),w("div",{className:"slide",children:w("img",{src:Al,alt:"inovafriIcon"})}),w("div",{className:"slide",children:w("img",{src:Fr,alt:"wiseupIcon"})}),w("div",{className:"slide",children:w("img",{src:Hr,alt:"ligajrIcon"})}),w("div",{className:"slide",children:w("img",{src:ao,alt:"Voitto"})}),w("div",{className:"slide",children:w("img",{src:Nl,alt:"iprjIcon"})}),w("div",{className:"slide",children:w("img",{src:Al,alt:"inovafriIcon"})}),w("div",{className:"slide",children:w("img",{src:Fr,alt:"wiseupIcon"})}),w("div",{className:"slide",children:w("img",{src:Hr,alt:"ligajrIcon"})}),w("div",{className:"slide",children:w("img",{src:Fr,alt:"wiseupIcon"})}),w("div",{className:"slide",children:w("img",{src:Hr,alt:"ligajrIcon"})}),w("div",{className:"slide",children:w("img",{src:Fr,alt:"wiseupIcon"})}),w("div",{className:"slide",children:w("img",{src:Hr,alt:"ligajrIcon"})})]})})}var Va={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,xc=$e?Symbol.for("react.element"):60103,Sc=$e?Symbol.for("react.portal"):60106,Qa=$e?Symbol.for("react.fragment"):60107,qa=$e?Symbol.for("react.strict_mode"):60108,Ya=$e?Symbol.for("react.profiler"):60114,Ga=$e?Symbol.for("react.provider"):60109,Ka=$e?Symbol.for("react.context"):60110,kc=$e?Symbol.for("react.async_mode"):60111,Xa=$e?Symbol.for("react.concurrent_mode"):60111,Ja=$e?Symbol.for("react.forward_ref"):60112,Za=$e?Symbol.for("react.suspense"):60113,W0=$e?Symbol.for("react.suspense_list"):60120,el=$e?Symbol.for("react.memo"):60115,tl=$e?Symbol.for("react.lazy"):60116,B0=$e?Symbol.for("react.block"):60121,V0=$e?Symbol.for("react.fundamental"):60117,Q0=$e?Symbol.for("react.responder"):60118,q0=$e?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xc:switch(e=e.type,e){case kc:case Xa:case Qa:case Ya:case qa:case Za:return e;default:switch(e=e&&e.$$typeof,e){case Ka:case Ja:case tl:case el:case Ga:return e;default:return t}}case Sc:return t}}}function fm(e){return ct(e)===Xa}pe.AsyncMode=kc;pe.ConcurrentMode=Xa;pe.ContextConsumer=Ka;pe.ContextProvider=Ga;pe.Element=xc;pe.ForwardRef=Ja;pe.Fragment=Qa;pe.Lazy=tl;pe.Memo=el;pe.Portal=Sc;pe.Profiler=Ya;pe.StrictMode=qa;pe.Suspense=Za;pe.isAsyncMode=function(e){return fm(e)||ct(e)===kc};pe.isConcurrentMode=fm;pe.isContextConsumer=function(e){return ct(e)===Ka};pe.isContextProvider=function(e){return ct(e)===Ga};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xc};pe.isForwardRef=function(e){return ct(e)===Ja};pe.isFragment=function(e){return ct(e)===Qa};pe.isLazy=function(e){return ct(e)===tl};pe.isMemo=function(e){return ct(e)===el};pe.isPortal=function(e){return ct(e)===Sc};pe.isProfiler=function(e){return ct(e)===Ya};pe.isStrictMode=function(e){return ct(e)===qa};pe.isSuspense=function(e){return ct(e)===Za};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qa||e===Xa||e===Ya||e===qa||e===Za||e===W0||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Ga||e.$$typeof===Ka||e.$$typeof===Ja||e.$$typeof===V0||e.$$typeof===Q0||e.$$typeof===q0||e.$$typeof===B0)};pe.typeOf=ct;(function(e){e.exports=pe})(Va);function Y0(e){function t(H,E,q,F,T){for(var J=0,W=0,ee=0,ie=0,se,ne,Ce=0,Ne=0,oe,je=oe=se=0,ce=0,Me=0,kn=0,Oe=0,Gt=q.length,Nt=Gt-1,rt,te="",he="",Wn="",Lr="",Mt;ce<Gt;){if(ne=q.charCodeAt(ce),ce===Nt&&W+ie+ee+J!==0&&(W!==0&&(ne=W===47?10:47),ie=ee=J=0,Gt++,Nt++),W+ie+ee+J===0){if(ce===Nt&&(0<Me&&(te=te.replace(f,"")),0<te.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:te+=q.charAt(ce)}ne=59}switch(ne){case 123:for(te=te.trim(),se=te.charCodeAt(0),oe=1,Oe=++ce;ce<Gt;){switch(ne=q.charCodeAt(ce)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ne=q.charCodeAt(ce+1)){case 42:case 47:e:{for(je=ce+1;je<Nt;++je)switch(q.charCodeAt(je)){case 47:if(ne===42&&q.charCodeAt(je-1)===42&&ce+2!==je){ce=je+1;break e}break;case 10:if(ne===47){ce=je+1;break e}}ce=je}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;ce++<Nt&&q.charCodeAt(ce)!==ne;);}if(oe===0)break;ce++}switch(oe=q.substring(Oe,ce),se===0&&(se=(te=te.replace(d,"").trim()).charCodeAt(0)),se){case 64:switch(0<Me&&(te=te.replace(f,"")),ne=te.charCodeAt(1),ne){case 100:case 109:case 115:case 45:Me=E;break;default:Me=Y}if(oe=t(E,Me,oe,ne,T+1),Oe=oe.length,0<C&&(Me=n(Y,te,kn),Mt=a(3,oe,Me,E,R,N,Oe,ne,T,F),te=Me.join(""),Mt!==void 0&&(Oe=(oe=Mt.trim()).length)===0&&(ne=0,oe="")),0<Oe)switch(ne){case 115:te=te.replace(P,l);case 100:case 109:case 45:oe=te+"{"+oe+"}";break;case 107:te=te.replace(p,"$1 $2"),oe=te+"{"+oe+"}",oe=I===1||I===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=te+oe,F===112&&(oe=(he+=oe,""))}else oe="";break;default:oe=t(E,n(E,te,kn),oe,F,T+1)}Wn+=oe,oe=kn=Me=je=se=0,te="",ne=q.charCodeAt(++ce);break;case 125:case 59:if(te=(0<Me?te.replace(f,""):te).trim(),1<(Oe=te.length))switch(je===0&&(se=te.charCodeAt(0),se===45||96<se&&123>se)&&(Oe=(te=te.replace(" ",":")).length),0<C&&(Mt=a(1,te,E,H,R,N,he.length,F,T,F))!==void 0&&(Oe=(te=Mt.trim()).length)===0&&(te="\0\0"),se=te.charCodeAt(0),ne=te.charCodeAt(1),se){case 0:break;case 64:if(ne===105||ne===99){Lr+=te+q.charAt(ce);break}default:te.charCodeAt(Oe-1)!==58&&(he+=i(te,se,ne,te.charCodeAt(2)))}kn=Me=je=se=0,te="",ne=q.charCodeAt(++ce)}}switch(ne){case 13:case 10:W===47?W=0:1+se===0&&F!==107&&0<te.length&&(Me=1,te+="\0"),0<C*U&&a(0,te,E,H,R,N,he.length,F,T,F),N=1,R++;break;case 59:case 125:if(W+ie+ee+J===0){N++;break}default:switch(N++,rt=q.charAt(ce),ne){case 9:case 32:if(ie+J+W===0)switch(Ce){case 44:case 58:case 9:case 32:rt="";break;default:ne!==32&&(rt=" ")}break;case 0:rt="\\0";break;case 12:rt="\\f";break;case 11:rt="\\v";break;case 38:ie+W+J===0&&(Me=kn=1,rt="\f"+rt);break;case 108:if(ie+W+J+A===0&&0<je)switch(ce-je){case 2:Ce===112&&q.charCodeAt(ce-3)===58&&(A=Ce);case 8:Ne===111&&(A=Ne)}break;case 58:ie+W+J===0&&(je=ce);break;case 44:W+ee+ie+J===0&&(Me=1,rt+="\r");break;case 34:case 39:W===0&&(ie=ie===ne?0:ie===0?ne:ie);break;case 91:ie+W+ee===0&&J++;break;case 93:ie+W+ee===0&&J--;break;case 41:ie+W+J===0&&ee--;break;case 40:if(ie+W+J===0){if(se===0)switch(2*Ce+3*Ne){case 533:break;default:se=1}ee++}break;case 64:W+ee+ie+J+je+oe===0&&(oe=1);break;case 42:case 47:if(!(0<ie+J+ee))switch(W){case 0:switch(2*ne+3*q.charCodeAt(ce+1)){case 235:W=47;break;case 220:Oe=ce,W=42}break;case 42:ne===47&&Ce===42&&Oe+2!==ce&&(q.charCodeAt(Oe+2)===33&&(he+=q.substring(Oe,ce+1)),rt="",W=0)}}W===0&&(te+=rt)}Ne=Ce,Ce=ne,ce++}if(Oe=he.length,0<Oe){if(Me=E,0<C&&(Mt=a(2,he,Me,H,R,N,Oe,F,T,F),Mt!==void 0&&(he=Mt).length===0))return Lr+he+Wn;if(he=Me.join(",")+"{"+he+"}",I*A!==0){switch(I!==2||o(he,2)||(A=0),A){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(v,"::-webkit-input-$1")+he.replace(v,"::-moz-$1")+he.replace(v,":-ms-input-$1")+he}A=0}}return Lr+he+Wn}function n(H,E,q){var F=E.trim().split(k);E=F;var T=F.length,J=H.length;switch(J){case 0:case 1:var W=0;for(H=J===0?"":H[0]+" ";W<T;++W)E[W]=r(H,E[W],q).trim();break;default:var ee=W=0;for(E=[];W<T;++W)for(var ie=0;ie<J;++ie)E[ee++]=r(H[ie]+" ",F[W],q).trim()}return E}function r(H,E,q){var F=E.charCodeAt(0);switch(33>F&&(F=(E=E.trim()).charCodeAt(0)),F){case 38:return E.replace(m,"$1"+H.trim());case 58:return H.trim()+E.replace(m,"$1"+H.trim());default:if(0<1*q&&0<E.indexOf("\f"))return E.replace(m,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+E}function i(H,E,q,F){var T=H+";",J=2*E+3*q+4*F;if(J===944){H=T.indexOf(":",9)+1;var W=T.substring(H,T.length-1).trim();return W=T.substring(0,H).trim()+W+";",I===1||I===2&&o(W,1)?"-webkit-"+W+W:W}if(I===0||I===2&&!o(T,1))return T;switch(J){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace($,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return W=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+T+"-ms-flex-pack"+W+T;case 1005:return g.test(T)?T.replace(h,":-webkit-")+T.replace(h,":-moz-")+T:T;case 1e3:switch(W=T.substring(13).trim(),E=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(E)){case 226:W=T.replace(O,"tb");break;case 232:W=T.replace(O,"tb-rl");break;case 220:W=T.replace(O,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+W+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(E=(T=H).length-10,W=(T.charCodeAt(E)===33?T.substring(0,E):T).substring(H.indexOf(":",7)+1).trim(),J=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:T=T.replace(W,"-webkit-"+W)+";"+T;break;case 207:case 102:T=T.replace(W,"-webkit-"+(102<J?"inline-":"")+"box")+";"+T.replace(W,"-webkit-"+W)+";"+T.replace(W,"-ms-"+W+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return W=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+W+"-ms-flex-"+W+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(S,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(S,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(j.test(H)===!0)return(W=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),E,q,F).replace(":fill-available",":stretch"):T.replace(W,"-webkit-"+W)+T.replace(W,"-moz-"+W.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,q+F===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function o(H,E){var q=H.indexOf(E===1?":":"{"),F=H.substring(0,E!==3?q:10);return q=H.substring(q+1,H.length-1),D(E!==2?F:F.replace(L,"$1"),q,E)}function l(H,E){var q=i(E,E.charCodeAt(0),E.charCodeAt(1),E.charCodeAt(2));return q!==E+";"?q.replace(_," or ($1)").substring(4):"("+E+")"}function a(H,E,q,F,T,J,W,ee,ie,se){for(var ne=0,Ce=E,Ne;ne<C;++ne)switch(Ne=z[ne].call(c,H,Ce,q,F,T,J,W,ee,ie,se)){case void 0:case!1:case!0:case null:break;default:Ce=Ne}if(Ce!==E)return Ce}function s(H){switch(H){case void 0:case null:C=z.length=0;break;default:if(typeof H=="function")z[C++]=H;else if(typeof H=="object")for(var E=0,q=H.length;E<q;++E)s(H[E]);else U=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(D=null,H?typeof H!="function"?I=1:(I=2,D=H):I=0),u}function c(H,E){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),V=q,q=[V],0<C){var F=a(-1,E,q,q,R,N,0,0,0,0);F!==void 0&&typeof F=="string"&&(E=F)}var T=t(Y,q,E,0,0);return 0<C&&(F=a(-2,T,q,q,R,N,T.length,0,0,0),F!==void 0&&(T=F)),V="",A=0,N=R=1,T}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,x=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,S=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,$=/([^-])(image-set\()/,N=1,R=1,A=0,I=1,Y=[],z=[],C=0,D=null,U=0,V="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var G0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function K0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var X0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Gd=K0(function(e){return X0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ec=Va.exports,J0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ey={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_c={};_c[Ec.ForwardRef]=ey;_c[Ec.Memo]=pm;function Kd(e){return Ec.isMemo(e)?pm:_c[e.$$typeof]||J0}var ty=Object.defineProperty,ny=Object.getOwnPropertyNames,Xd=Object.getOwnPropertySymbols,ry=Object.getOwnPropertyDescriptor,iy=Object.getPrototypeOf,Jd=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(Jd){var r=iy(t);r&&r!==Jd&&hm(e,r,n)}var i=ny(t);Xd&&(i=i.concat(Xd(t)));for(var o=Kd(e),l=Kd(t),a=0;a<i.length;++a){var s=i[a];if(!Z0[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=ry(t,s);try{ty(e,s,u)}catch{}}}}return e}var oy=hm;function Ut(){return(Ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Js=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Va.exports.typeOf(e)},ua=Object.freeze([]),mn=Object.freeze({});function bi(e){return typeof e=="function"}function ef(e){return e.displayName||e.name||"Component"}function bc(e){return e&&typeof e.styledComponentId=="string"}var Sr=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Cc=typeof window<"u"&&"HTMLElement"in window,ay=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function $i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ly=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&$i(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Ao=new Map,ca=new Map,ii=1,lo=function(e){if(Ao.has(e))return Ao.get(e);for(;ca.has(ii);)ii++;var t=ii++;return Ao.set(e,t),ca.set(t,e),t},sy=function(e){return ca.get(e)},uy=function(e,t){t>=ii&&(ii=t+1),Ao.set(e,t),ca.set(t,e)},cy="style["+Sr+'][data-styled-version="5.3.5"]',dy=new RegExp("^"+Sr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fy=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},py=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(dy);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(uy(u,s),fy(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},hy=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},mm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Sr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Sr,"active"),r.setAttribute("data-styled-version","5.3.5");var l=hy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},my=function(){function e(n){var r=this.element=mm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}$i(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),vy=function(){function e(n){var r=this.element=mm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),gy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tf=Cc,yy={isServer:!Cc,useCSSOMInjection:!ay},vm=function(){function e(n,r,i){n===void 0&&(n=mn),r===void 0&&(r={}),this.options=Ut({},yy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Cc&&tf&&(tf=!1,function(o){for(var l=document.querySelectorAll(cy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Sr)!=="active"&&(py(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return lo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ut({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new gy(l):o?new my(l):new vy(l),new ly(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(lo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(lo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(lo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=sy(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var c=Sr+".g"+l+'[id="'+a+'"]',d="";s!==void 0&&s.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),wy=/(a)(d)/gi,nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nf(t%52)+n;return(nf(t%52)+n).replace(wy,"$1-$2")}var or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gm=function(e){return or(5381,e)};function xy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bi(n)&&!bc(n))return!1}return!0}var Sy=gm("5.3.5"),ky=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xy(t),this.componentId=n,this.baseHash=or(Sy,n),this.baseStyle=r,vm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=kr(this.rules,t,n,r).join(""),a=Zs(or(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=or(this.baseHash,r.hash),d="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var g=kr(h,t,n,r),y=Array.isArray(g)?g.join(""):g;c=or(c,y+f),d+=y}}if(d){var k=Zs(c>>>0);if(!n.hasNameForId(i,k)){var m=r(d,"."+k,void 0,i);n.insertRules(i,k,m)}o.push(k)}}return o.join(" ")},e}(),Ey=/^\s*\/\/.*$/gm,_y=[":","[",".","#"];function by(e){var t,n,r,i,o=e===void 0?mn:e,l=o.options,a=l===void 0?mn:l,s=o.plugins,u=s===void 0?ua:s,c=new Y0(a),d=[],f=function(y){function k(m){if(m)try{y(m+"}")}catch{}}return function(m,p,v,x,O,P,_,S,L,j){switch(m){case 1:if(L===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(S===0)return p+"/*|*/";break;case 3:switch(S){case 102:case 112:return y(v[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(y){d.push(y)}),h=function(y,k,m){return k===0&&_y.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function g(y,k,m,p){p===void 0&&(p="&");var v=y.replace(Ey,""),x=k&&m?m+" "+k+" { "+v+" }":v;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!k?"":k,x)}return c.use([].concat(u,[function(y,k,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,h))},f,function(y){if(y===-2){var k=d;return d=[],k}}])),g.hash=u.length?u.reduce(function(y,k){return k.name||$i(15),or(y,k.name)},5381).toString():"",g}var ym=Li.createContext();ym.Consumer;var wm=Li.createContext(),Cy=(wm.Consumer,new vm),eu=by();function Oy(){return X.exports.useContext(ym)||Cy}function Py(){return X.exports.useContext(wm)||eu}var Ty=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=eu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return $i(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=eu),this.name+t.hash},e}(),My=/([A-Z])/,Ly=/([A-Z])/g,zy=/^ms-/,jy=function(e){return"-"+e.toLowerCase()};function rf(e){return My.test(e)?e.replace(Ly,jy).replace(zy,"-ms-"):e}var of=function(e){return e==null||e===!1||e===""};function kr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=kr(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(of(e))return"";if(bc(e))return"."+e.styledComponentId;if(bi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return kr(s,t,n,r)}var u;return e instanceof Ty?n?(e.inject(n,r),e.getName(r)):e:Js(e)?function c(d,f){var h,g,y=[];for(var k in d)d.hasOwnProperty(k)&&!of(d[k])&&(Array.isArray(d[k])&&d[k].isCss||bi(d[k])?y.push(rf(k)+":",d[k],";"):Js(d[k])?y.push.apply(y,c(d[k],k)):y.push(rf(k)+": "+(h=k,(g=d[k])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||h in G0?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var af=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Dy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return bi(e)||Js(e)?af(kr(Zd(ua,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:af(kr(Zd(e,n)))}var Ry=function(e,t,n){return n===void 0&&(n=mn),e.theme!==n.theme&&e.theme||t||n.theme},$y=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ny=/(^-|-$)/g;function Il(e){return e.replace($y,"-").replace(Ny,"")}var Ay=function(e){return Zs(gm(e)>>>0)};function so(e){return typeof e=="string"&&!0}var tu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Iy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Fy(e,t,n){var r=e[n];tu(t)&&tu(r)?xm(r,t):e[n]=t}function xm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(tu(l))for(var a in l)Iy(a)&&Fy(e,l[a],a)}return e}var Sm=Li.createContext();Sm.Consumer;var Fl={};function km(e,t,n){var r=bc(e),i=!so(e),o=t.attrs,l=o===void 0?ua:o,a=t.componentId,s=a===void 0?function(p,v){var x=typeof p!="string"?"sc":Il(p);Fl[x]=(Fl[x]||0)+1;var O=x+"-"+Ay("5.3.5"+x+Fl[x]);return v?v+"-"+O:O}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(p){return so(p)?"styled."+p:"Styled("+ef(p)+")"}(e):u,d=t.displayName&&t.componentId?Il(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(p,v,x){return e.shouldForwardProp(p,v,x)&&t.shouldForwardProp(p,v,x)}:e.shouldForwardProp);var g,y=new ky(n,d,r?e.componentStyle:void 0),k=y.isStatic&&l.length===0,m=function(p,v){return function(x,O,P,_){var S=x.attrs,L=x.componentStyle,j=x.defaultProps,$=x.foldedComponentIds,N=x.shouldForwardProp,R=x.styledComponentId,A=x.target,I=function(F,T,J){F===void 0&&(F=mn);var W=Ut({},T,{theme:F}),ee={};return J.forEach(function(ie){var se,ne,Ce,Ne=ie;for(se in bi(Ne)&&(Ne=Ne(W)),Ne)W[se]=ee[se]=se==="className"?(ne=ee[se],Ce=Ne[se],ne&&Ce?ne+" "+Ce:ne||Ce):Ne[se]}),[W,ee]}(Ry(O,X.exports.useContext(Sm),j)||mn,O,S),Y=I[0],z=I[1],C=function(F,T,J,W){var ee=Oy(),ie=Py(),se=T?F.generateAndInjectStyles(mn,ee,ie):F.generateAndInjectStyles(J,ee,ie);return se}(L,_,Y),D=P,U=z.$as||O.$as||z.as||O.as||A,V=so(U),H=z!==O?Ut({},O,{},z):O,E={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?E.as=H[q]:(N?N(q,Gd,U):!V||Gd(q))&&(E[q]=H[q]));return O.style&&z.style!==O.style&&(E.style=Ut({},O.style,{},z.style)),E.className=Array.prototype.concat($,R,C!==R?C:null,O.className,z.className).filter(Boolean).join(" "),E.ref=D,X.exports.createElement(U,E)}(g,p,v,k)};return m.displayName=c,(g=Li.forwardRef(m)).attrs=f,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ua,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var v=t.componentId,x=function(P,_){if(P==null)return{};var S,L,j={},$=Object.keys(P);for(L=0;L<$.length;L++)S=$[L],_.indexOf(S)>=0||(j[S]=P[S]);return j}(t,["componentId"]),O=v&&v+"-"+(so(p)?p:Il(ef(p)));return km(p,Ut({},x,{attrs:f,componentId:O}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?xm({},e.defaultProps,p):p}}),g.toString=function(){return"."+g.styledComponentId},i&&oy(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var nu=function(e){return function t(n,r,i){if(i===void 0&&(i=mn),!Va.exports.isValidElementType(r))return $i(1,String(r));var o=function(){return n(r,i,Dy.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Ut({},i,{},l))},o.attrs=function(l){return t(n,r,Ut({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){nu[e]=nu(e)});const b=nu,M={mobile:"390px",largeMobile:"500px",tablet:"820px",notebook:"1024px",largeNotebook:"1440px",desktop:"1920px",largeDesktop:"2560px",extraLargeDesktop:"3840px"},Hy=b.footer`
    width: 100%;
    background-color: #001830;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1%;
`,Uy=b.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 3%;
`,Hl=b.div`
    margin-left: 2rem;
    @media screen and (min-width: ${M.mobile}){
        flex-direction: column;
    }
`,Ul=b.span`
    color: white;
    font-weight: 500;
`,uo=b.p`
    color: rgb(180, 180, 180);
`,Wy=b.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${M.mobile}) {
        flex-direction: column;
        padding-top: 10%;
    }

    @media screen and (max-width: ${M.largeMobile}) {
        flex-direction: column;
    }


`,Wl=b.img`
    width: 1.4rem;
    margin-right: 0.8rem;
    
    @media screen and (max-width: ${M.mobile}) {
        margin-top: 30%;
    }
`,Bl=b.a`
    text-decoration: none;
`,By=b.div`
    width: 40%;
    padding: 2rem 2rem 2rem 0;

    @media screen and (max-width: ${M.mobile}) {
        flex-wrap: wrap;
        width: 20%;
    }

`,Vy=b.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`,Qy=b.hr`
    width: 90%;
`,qy=b.div`
    color: rgb(180, 180, 180);
    width: 90%;
    display: flex;
    justify-content: space-between;
`,Yy=b.span`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.3rem;
    color: #535353;
`,Gy=b.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;b.a`
    height: 90%;

    &:hover{
        opacity: 0.8;
    }
`;b.img`
    height: 20vh;

    @media screen and (max-width: ${M.notebook}){
        height: 10vh;
        
    }
    
`;const Ky=b.div`
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    flex-direction: column;
`,Xy="/Site-Serra/assets/facebook.e9ec1758.svg",Jy="/Site-Serra/assets/instagram.a8d6cb3d.svg",Zy="/Site-Serra/assets/linkedin.3daaec60.svg",e1=()=>Q(Hy,{children:[Q(Ky,{children:[w(Yy,{children:"Parceiros"}),w(Gy,{children:w(U0,{})})]}),Q(Vy,{children:[Q(Uy,{children:[Q(By,{children:[Q(Bl,{href:"https://pt-br.facebook.com/pg/serrajreng/posts/",target:"_blank",children:[" ",w(Wl,{src:Xy,alt:"Facebook Serra.Jr"})]}),Q(Bl,{href:"https://www.instagram.com/serrajreng/",target:"_blank",children:[" ",w(Wl,{src:Jy,alt:"Instagram Serra.Jr"})]}),Q(Bl,{href:"https://www.linkedin.com/company/serrajreng/?originalSubdomain=br",target:"_blank",children:[" ",w(Wl,{src:Zy,alt:""})," "]})]}),Q(Wy,{children:[Q(Hl,{children:[w(Ul,{children:"Institucional"}),w(uo,{children:"Serra Jr Engenharia"})]}),Q(Hl,{children:[w(Ul,{children:"Atendimento"}),w(uo,{children:"Segunda a sexta"}),w(uo,{children:"9h \xE0s 19h"})]}),Q(Hl,{children:[w(Ul,{children:"Contato"}),w(uo,{children:"serrajr@iprj.uerj.br "})]})]})]}),w(Qy,{}),Q(qy,{children:[w("span",{children:"\xA9 Serra Jr. Engenharia 2022"}),w("span",{children:"Todos os direitos reservados"})]})]})]}),t1="/Site-Serra/assets/LogoSiteSerraJr.3ee0f8b0.svg",n1="/Site-Serra/assets/arrow-header.98a9eade.svg";function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));var lf=function(e){return e},sf="beforeunload",r1="popstate";function i1(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var _=r.location,S=_.pathname,L=_.search,j=_.hash,$=i.state||{};return[$.idx,lf({pathname:S,search:L,hash:j,state:$.usr||null,key:$.key||"default"})]}var l=null;function a(){if(l)h.call(l),l=null;else{var _=Tn.Pop,S=o(),L=S[0],j=S[1];if(h.length){if(L!=null){var $=c-L;$&&(l={action:_,location:j,retry:function(){O($*-1)}},O($))}}else p(_)}}r.addEventListener(r1,a);var s=Tn.Pop,u=o(),c=u[0],d=u[1],f=cf(),h=cf();c==null&&(c=0,i.replaceState(da({},i.state,{idx:c}),""));function g(_){return typeof _=="string"?_:ru(_)}function y(_,S){return S===void 0&&(S=null),lf(da({pathname:d.pathname,hash:"",search:""},typeof _=="string"?Un(_):_,{state:S,key:o1()}))}function k(_,S){return[{usr:_.state,key:_.key,idx:S},g(_)]}function m(_,S,L){return!h.length||(h.call({action:_,location:S,retry:L}),!1)}function p(_){s=_;var S=o();c=S[0],d=S[1],f.call({action:s,location:d})}function v(_,S){var L=Tn.Push,j=y(_,S);function $(){v(_,S)}if(m(L,j,$)){var N=k(j,c+1),R=N[0],A=N[1];try{i.pushState(R,"",A)}catch{r.location.assign(A)}p(L)}}function x(_,S){var L=Tn.Replace,j=y(_,S);function $(){x(_,S)}if(m(L,j,$)){var N=k(j,c),R=N[0],A=N[1];i.replaceState(R,"",A),p(L)}}function O(_){i.go(_)}var P={get action(){return s},get location(){return d},createHref:g,push:v,replace:x,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(S){return f.push(S)},block:function(S){var L=h.push(S);return h.length===1&&r.addEventListener(sf,uf),function(){L(),h.length||r.removeEventListener(sf,uf)}}};return P}function uf(e){e.preventDefault(),e.returnValue=""}function cf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function o1(){return Math.random().toString(36).substr(2,8)}function ru(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Un(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Oc=X.exports.createContext(null),Pc=X.exports.createContext(null),nl=X.exports.createContext({outlet:null,matches:[]});function $t(e,t){if(!e)throw new Error(t)}function a1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Un(t):t,i=bm(r.pathname||"/",n);if(i==null)return null;let o=Em(e);l1(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=v1(o[a],i);return l}function Em(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||$t(!1),l.relativePath=l.relativePath.slice(r.length));let a=vn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&$t(!1),Em(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:h1(a,i.index),routesMeta:s})}),t}function l1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:m1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s1=/^:\w+$/,u1=3,c1=2,d1=1,f1=10,p1=-2,df=e=>e==="*";function h1(e,t){let n=e.split("/"),r=n.length;return n.some(df)&&(r+=p1),t&&(r+=c1),n.filter(i=>!df(i)).reduce((i,o)=>i+(s1.test(o)?u1:o===""?d1:f1),r)}function m1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function v1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=g1({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:vn([i,c.pathname]),pathnameBase:Cm(vn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=vn([i,c.pathnameBase]))}return o}function g1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=y1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=w1(a[d]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function w1(e,t){try{return decodeURIComponent(e)}catch{return e}}function x1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:S1(n,t):t,search:E1(r),hash:_1(i)}}function S1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _m(e,t,n){let r=typeof e=="string"?Un(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=x1(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function k1(e){return e===""||e.pathname===""?"/":typeof e=="string"?Un(e).pathname:e.pathname}function bm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),Cm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function b1(e){Ni()||$t(!1);let{basename:t,navigator:n}=X.exports.useContext(Oc),{hash:r,pathname:i,search:o}=Om(e),l=i;if(t!=="/"){let a=k1(e),s=a!=null&&a.endsWith("/");l=i==="/"?t+(s?"/":""):vn([t,i])}return n.createHref({pathname:l,search:o,hash:r})}function Ni(){return X.exports.useContext(Pc)!=null}function rl(){return Ni()||$t(!1),X.exports.useContext(Pc).location}function C1(){Ni()||$t(!1);let{basename:e,navigator:t}=X.exports.useContext(Oc),{matches:n}=X.exports.useContext(nl),{pathname:r}=rl(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=X.exports.useRef(!1);return X.exports.useEffect(()=>{o.current=!0}),X.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=_m(a,JSON.parse(i),r);e!=="/"&&(u.pathname=vn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function Om(e){let{matches:t}=X.exports.useContext(nl),{pathname:n}=rl(),r=JSON.stringify(t.map(i=>i.pathnameBase));return X.exports.useMemo(()=>_m(e,JSON.parse(r),n),[e,r,n])}function O1(e,t){Ni()||$t(!1);let{matches:n}=X.exports.useContext(nl),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=rl(),a;if(t){var s;let f=typeof t=="string"?Un(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||$t(!1),a=f}else a=l;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",d=a1(e,{pathname:c});return P1(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:vn([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:vn([o,f.pathnameBase])})),n)}function P1(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>X.exports.createElement(nl.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Qn(e){$t(!1)}function T1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:o,static:l=!1}=e;Ni()&&$t(!1);let a=Cm(t),s=X.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Un(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,g=X.exports.useMemo(()=>{let y=bm(u,a);return y==null?null:{pathname:y,search:c,hash:d,state:f,key:h}},[a,u,c,d,f,h]);return g==null?null:X.exports.createElement(Oc.Provider,{value:s},X.exports.createElement(Pc.Provider,{children:n,value:{location:g,navigationType:i}}))}function M1(e){let{children:t,location:n}=e;return O1(iu(t),n)}function iu(e){let t=[];return X.exports.Children.forEach(e,n=>{if(!X.exports.isValidElement(n))return;if(n.type===X.exports.Fragment){t.push.apply(t,iu(n.props.children));return}n.type!==Qn&&$t(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=iu(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ou(){return ou=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ou.apply(this,arguments)}function L1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const z1=["onClick","reloadDocument","replace","state","target","to"];function j1(e){let{basename:t,children:n,window:r}=e,i=X.exports.useRef();i.current==null&&(i.current=i1({window:r}));let o=i.current,[l,a]=X.exports.useState({action:o.action,location:o.location});return X.exports.useLayoutEffect(()=>o.listen(a),[o]),X.exports.createElement(T1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}function D1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Et=X.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:l,target:a,to:s}=t,u=L1(t,z1),c=b1(s),d=R1(s,{replace:o,state:l,target:a});function f(h){r&&r(h),!h.defaultPrevented&&!i&&d(h)}return X.exports.createElement("a",ou({},u,{href:c,onClick:f,ref:n,target:a}))});function R1(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=C1(),l=rl(),a=Om(e);return X.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!D1(s)){s.preventDefault();let u=!!r||ru(l)===ru(a);o(e,{replace:u,state:i})}},[l,o,a,r,i,n,e])}const $1=b.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${M.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`,N1=b.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${M.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${M.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`,A1=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`,I1=b.img`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle:e})=>e?`transform: rotate(-180deg);
        transition: 0.5s;`:`transform: rotate(0deg);
        transition: 0.5s;`}
    @media screen and (min-width: ${M.extraLargeDesktop}){
        width: 1vw;
    }
`,F1=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,H1=b.div`
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
    
    @media screen and (min-width: ${M.largeDesktop}){
        top: 10vh;
        
    }
    @media screen and (min-width: ${M.extraLargeDesktop}){
        top: 13vh;
        
    }

    @media screen and (min-width: ${M.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${M.largeDesktop}){
        width: 15vw;
    }
`;b.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;const ff=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`,co=b.div`
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
        
        @media screen and (min-width: ${M.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${M.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,U1=b.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: ${M.notebook}){
        display: none;
    }
`,W1=()=>{const[e,t]=X.exports.useState(!1);return w(U1,{children:Q($1,{children:[w(co,{children:w(Et,{to:"/",children:"Home"})}),w(co,{children:w(Et,{to:"/quemSomos",children:"Sobre N\xF3s"})}),w(co,{children:Q(A1,{onClick:()=>t(!e),children:[Q(F1,{children:[w(N1,{children:"Servi\xE7os"}),w(I1,{activeStyle:e,src:n1,alt:"Seta"})]}),Q(H1,{activeStyle:e,children:[w(ff,{children:w(Et,{to:"/computacao",children:"Computa\xE7\xE3o"})}),w(ff,{children:w(Et,{to:"/mecanica",children:"Mec\xE2nica"})})]})]})}),w(co,{children:w(Et,{to:"/contatos",children:"Contato"})})]})})},Ur=b.div`
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`,B1=b.div`
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

    @media screen and (min-width: ${M.notebook}){
        visibility: hidden;
    }   
`,V1=({status:e,toogle:t})=>Q(B1,{activeStyle:e,children:[w(Ur,{children:w(Et,{onClick:()=>t(!e),to:"/",children:"Home"})}),w(Ur,{children:w(Et,{onClick:()=>t(!e),to:"/quemSomos",children:"Sobre N\xF3s"})}),w(Ur,{children:w(Et,{onClick:()=>t(!e),to:"/computacao",children:"Computa\xE7\xE3o"})}),w(Ur,{children:w(Et,{onClick:()=>t(!e),to:"/mecanica",children:"Mec\xE2nica"})}),w(Ur,{children:w(Et,{onClick:()=>t(!e),to:"/contatos",children:"Contatos"})})]}),Vl=b.div`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active:e,type:t})=>e&&t==="first-line"?`transform: rotate(45deg);
        position: absolute;`:e&&t==="mid-line"?"display: none;":e&&t==="last-line"?`transform: rotate(-45deg);
        position: absolute;`:null}

    transition: 0.2s;
`,Q1=b.div`
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
    @media screen and (max-width: ${M.notebook}){
        display: flex;
        margin-right: 20px;
    }
`,q1=({status:e})=>(console.log(e),Q(Q1,{children:[w(Vl,{active:e,type:"first-line"}),w(Vl,{active:e,type:"mid-line"}),w(Vl,{active:e,type:"last-line"})]})),Y1=b.img`
    width: 12rem;
    margin-left: 25%;

    @media screen and (max-width: ${M.mobile}){
        width: 6rem;
    }

    @media screen and (min-width: ${M.largeDesktop}){
        width: 20rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}){
        width: 30rem;
        margin-left: 60%;
    }
    
`,G1=b.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${M.notebook}){
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: ${M.largeDesktop}){
        height: 10vh;
        
    }
    @media screen and (min-width: ${M.extraLargeDesktop}){
        height: 13vh;
    }
`,K1=b.div`
    margin-right: 7%;
`,X1=()=>{const[e,t]=X.exports.useState(!1);return Q(G1,{children:[w(Et,{to:"/",children:w(Y1,{src:t1,alt:"Logo Serra Jr"})}),w(K1,{onClick:()=>{t(!e)},children:w(q1,{status:e})}),w(W1,{}),w(V1,{status:e,toogle:t})]})},J1=b.img`
    height: 15vh;

    @media screen and (max-width: ${M.notebook}) {
        height: 10vh;
    }
`,Z1=b.p`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        line-height: 50px;
        font-size: 40px;
        width: 400px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        line-height: 60px;
        font-size: 60px;
        width: 500px;
    }
`,ew=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen  and (max-width: ${M.tablet}){
        margin-top: 30px;
        margin-bottom: 0;
    }
`,tw=({icon:e,text:t,alt:n})=>Q(ew,{children:[w(J1,{src:e,alt:n}),w(Z1,{children:t})]}),nw=b.div`
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
`,rw=b.p`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 60px;
        height: 8rem;
    }
`,iw=b.a`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: ${M.notebook}){
        width: 40%;
    }
`,ow=b.button`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 60px;
        width: 60%;
    }
`,aw=b.div`
    background-color: #EDEDED;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

`,lw=b.div`
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`,pf=({title:e,buttonUrl:t,buttonTitle:n,color:r,images:i,texts:o})=>Q(lw,{children:[w(rw,{titleColor:r,children:e}),Q(nw,{children:[w(aw,{children:i.map((l,a)=>w(tw,{icon:l,text:o[a],alt:o[a]},a))}),w(iw,{href:t,children:w(ow,{buttonColor:r,children:n})})]})]}),sw=b.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;

    @media screen and (max-width: ${M.tablet}) {
        font-size: 30px;
    }
    
    @media screen and (min-width: ${M.largeMobile}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${M.notebook}) {
        font-size: 38px;
        width: 80%;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 100px;
    }
`,uw=b.hr`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${M.tablet}) {
        height: 7px;
    }
    @media screen and (max-width: ${M.notebook}) {
        width: 60%;
    }
`,cw=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`,dw=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Tc=({text:e,fontSize:t,titleWidth:n})=>w(cw,{children:Q(dw,{children:[w(sw,{style:{fontSize:t},children:e}),w(uw,{gradientWidth:n})]})});var Pm={},Tm={},il={},Mm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Mm);var fw="Expected a function",hf=0/0,pw="[object Symbol]",hw=/^\s+|\s+$/g,mw=/^[-+]0x[0-9a-f]+$/i,vw=/^0b[01]+$/i,gw=/^0o[0-7]+$/i,yw=parseInt,ww=typeof Br=="object"&&Br&&Br.Object===Object&&Br,xw=typeof self=="object"&&self&&self.Object===Object&&self,Sw=ww||xw||Function("return this")(),kw=Object.prototype,Ew=kw.toString,_w=Math.max,bw=Math.min,Ql=function(){return Sw.Date.now()};function Cw(e,t,n){var r,i,o,l,a,s,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(fw);t=mf(t)||0,au(n)&&(c=!!n.leading,d="maxWait"in n,o=d?_w(mf(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function h(P){var _=r,S=i;return r=i=void 0,u=P,l=e.apply(S,_),l}function g(P){return u=P,a=setTimeout(m,t),c?h(P):l}function y(P){var _=P-s,S=P-u,L=t-_;return d?bw(L,o-S):L}function k(P){var _=P-s,S=P-u;return s===void 0||_>=t||_<0||d&&S>=o}function m(){var P=Ql();if(k(P))return p(P);a=setTimeout(m,y(P))}function p(P){return a=void 0,f&&r?h(P):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function x(){return a===void 0?l:p(Ql())}function O(){var P=Ql(),_=k(P);if(r=arguments,i=this,s=P,_){if(a===void 0)return g(s);if(d)return a=setTimeout(m,t),h(s)}return a===void 0&&(a=setTimeout(m,t)),l}return O.cancel=v,O.flush=x,O}function au(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ow(e){return!!e&&typeof e=="object"}function Pw(e){return typeof e=="symbol"||Ow(e)&&Ew.call(e)==pw}function mf(e){if(typeof e=="number")return e;if(Pw(e))return hf;if(au(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=au(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(hw,"");var n=vw.test(e);return n||gw.test(e)?yw(e.slice(2),n?2:8):mw.test(e)?hf:+e}var Tw=Cw,Ai={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)t.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ai);var G={};Object.defineProperty(G,"__esModule",{value:!0});G.checkSpecKeys=G.checkNavigable=G.changeSlide=G.canUseDOM=G.canGoNext=void 0;G.clamp=Lm;G.swipeStart=G.swipeMove=G.swipeEnd=G.slidesOnRight=G.slidesOnLeft=G.slideHandler=G.siblingDirection=G.safePreventDefault=G.lazyStartIndex=G.lazySlidesOnRight=G.lazySlidesOnLeft=G.lazyEndIndex=G.keyHandler=G.initializedState=G.getWidth=G.getTrackLeft=G.getTrackCSS=G.getTrackAnimateCSS=G.getTotalSlides=G.getSwipeDirection=G.getSlideCount=G.getRequiredLazySlides=G.getPreClones=G.getPostClones=G.getOnDemandLazySlides=G.getNavigableIndexes=G.getHeight=G.extractObject=void 0;var Mw=Lw(X.exports);function Lw(e){return e&&e.__esModule?e:{default:e}}function vf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vf(Object(n),!0).forEach(function(r){zw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lm(e,t,n){return Math.max(t,Math.min(e,n))}var zn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};G.safePreventDefault=zn;var Mc=function(t){for(var n=[],r=Lc(t),i=zc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};G.getOnDemandLazySlides=Mc;var jw=function(t){for(var n=[],r=Lc(t),i=zc(t),o=r;o<i;o++)n.push(o);return n};G.getRequiredLazySlides=jw;var Lc=function(t){return t.currentSlide-zm(t)};G.lazyStartIndex=Lc;var zc=function(t){return t.currentSlide+jm(t)};G.lazyEndIndex=zc;var zm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};G.lazySlidesOnLeft=zm;var jm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};G.lazySlidesOnRight=jm;var fa=function(t){return t&&t.offsetWidth||0};G.getWidth=fa;var jc=function(t){return t&&t.offsetHeight||0};G.getHeight=jc;var Dc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};G.getSwipeDirection=Dc;var Rc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};G.canGoNext=Rc;var Dw=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};G.extractObject=Dw;var Rw=function(t){var n=Mw.default.Children.count(t.children),r=t.listRef,i=Math.ceil(fa(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(fa(o)),a;if(t.vertical)a=i;else{var s=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(s*=i/100),a=Math.ceil((i-s)/t.slidesToShow)}var u=r&&jc(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,d=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(d=n-1-t.initialSlide);var f=t.lazyLoadedList||[],h=Mc(ye(ye({},t),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(h);var g={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return t.autoplaying===null&&t.autoplay&&(g.autoplaying="playing"),g};G.initializedState=Rw;var $w=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,s=t.lazyLoad,u=t.currentSlide,c=t.centerMode,d=t.slidesToScroll,f=t.slidesToShow,h=t.useCSS,g=t.lazyLoadedList;if(n&&r)return{};var y=l,k,m,p,v={},x={},O=o?l:Lm(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&g.indexOf(y)<0&&(g=g.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:g,targetSlide:y},x={animating:!1,targetSlide:y}}else k=y,y<0?(k=y+a,o?a%d!==0&&(k=a-a%d):k=0):!Rc(t)&&y>u?y=k=u:c&&y>=a?(y=o?a:a-1,k=o?0:a-1):y>=a&&(k=y-a,o?a%d!==0&&(k=0):k=a-f),!o&&y+f>=a&&(k=a-f),m=Oi(ye(ye({},t),{},{slideIndex:y})),p=Oi(ye(ye({},t),{},{slideIndex:k})),o||(m===p&&(y=k),m=p),s&&(g=g.concat(Mc(ye(ye({},t),{},{currentSlide:y})))),h?(v={animating:!0,currentSlide:k,trackStyle:$c(ye(ye({},t),{},{left:m})),lazyLoadedList:g,targetSlide:O},x={animating:!1,currentSlide:k,trackStyle:Ci(ye(ye({},t),{},{left:p})),swipeLeft:null,targetSlide:O}):v={currentSlide:k,trackStyle:Ci(ye(ye({},t),{},{left:p})),lazyLoadedList:g,targetSlide:O};return{state:v,nextState:x}};G.slideHandler=$w;var Nw=function(t,n){var r,i,o,l,a,s=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,d=t.currentSlide,f=t.targetSlide,h=t.lazyLoad,g=t.infinite;if(l=c%s!==0,r=l?0:(c-d)%s,n.message==="previous")o=r===0?s:u-r,a=d-o,h&&!g&&(i=d-o,a=i===-1?c-1:i),g||(a=f-s);else if(n.message==="next")o=r===0?s:r,a=d+o,h&&!g&&(a=(d+s)%c+r),g||(a=f+s);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,g){var y=Nm(ye(ye({},t),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};G.changeSlide=Nw;var Aw=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};G.keyHandler=Aw;var Iw=function(t,n,r){return t.target.tagName==="IMG"&&zn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};G.swipeStart=Iw;var Fw=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,s=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,h=n.swiped,g=n.swiping,y=n.slideCount,k=n.slidesToScroll,m=n.infinite,p=n.touchObject,v=n.swipeEvent,x=n.listHeight,O=n.listWidth;if(!r){if(i)return zn(t);o&&l&&a&&zn(t);var P,_={},S=Oi(n);p.curX=t.touches?t.touches[0].pageX:t.clientX,p.curY=t.touches?t.touches[0].pageY:t.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var L=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!g&&L>10)return{scrolling:!0};a&&(p.swipeLength=L);var j=(s?-1:1)*(p.curX>p.startX?1:-1);a&&(j=p.curY>p.startY?1:-1);var $=Math.ceil(y/k),N=Dc(n.touchObject,a),R=p.swipeLength;return m||(u===0&&(N==="right"||N==="down")||u+1>=$&&(N==="left"||N==="up")||!Rc(n)&&(N==="left"||N==="up"))&&(R=p.swipeLength*c,d===!1&&f&&(f(N),_.edgeDragged=!0)),!h&&v&&(v(N),_.swiped=!0),o?P=S+R*(x/O)*j:s?P=S-R*j:P=S+R*j,a&&(P=S+R*j),_=ye(ye({},_),{},{touchObject:p,swipeLeft:P,trackStyle:Ci(ye(ye({},n),{},{left:P}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(_.swiping=!0,zn(t)),_}};G.swipeMove=Fw;var Hw=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,s=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,h=n.targetSlide,g=n.currentSlide,y=n.infinite;if(!r)return i&&zn(t),{};var k=s?u/a:l/a,m=Dc(o,s),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!o.swipeLength)return p;if(o.swipeLength>k){zn(t),f&&f(m);var v,x,O=y?g:h;switch(m){case"left":case"up":x=O+su(n),v=c?lu(n,x):x,p.currentDirection=0;break;case"right":case"down":x=O-su(n),v=c?lu(n,x):x,p.currentDirection=1;break;default:v=O}p.triggerSlideHandler=v}else{var P=Oi(n);p.trackStyle=$c(ye(ye({},n),{},{left:P}))}return p};G.swipeEnd=Hw;var Dm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};G.getNavigableIndexes=Dm;var lu=function(t,n){var r=Dm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};G.checkNavigable=lu;var su=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(s){if(t.vertical){if(s.offsetTop+jc(s)/2>t.swipeLeft*-1)return r=s,!1}else if(s.offsetLeft-n+fa(s)/2>t.swipeLeft*-1)return r=s,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll};G.getSlideCount=su;var ol=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};G.checkSpecKeys=ol;var Ci=function(t){ol(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=$m(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ye(ye({},o),{},{WebkitTransform:l,transform:a,msTransform:s})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};G.getTrackCSS=Ci;var $c=function(t){ol(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Ci(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};G.getTrackAnimateCSS=$c;var Oi=function(t){if(t.unslick)return 0;ol(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,s=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,d=t.variableWidth,f=t.slideHeight,h=t.fade,g=t.vertical,y=0,k,m,p=0;if(h||t.slideCount===1)return 0;var v=0;if(i?(v=-oi(t),l%s!==0&&n+s>l&&(v=-(n>l?a-(n-l):l%s)),o&&(v+=parseInt(a/2))):(l%s!==0&&n+s>l&&(v=a-l%s),o&&(v=parseInt(a/2))),y=v*u,p=v*f,g?k=n*f*-1+p:k=n*u*-1+y,d===!0){var x,O=r&&r.node;if(x=n+oi(t),m=O&&O.childNodes[x],k=m?m.offsetLeft*-1:0,o===!0){x=i?n+oi(t):n,m=O&&O.children[x],k=0;for(var P=0;P<x;P++)k-=O&&O.children[P]&&O.children[P].offsetWidth;k-=parseInt(t.centerPadding),k+=m&&(c-m.offsetWidth)/2}}return k};G.getTrackLeft=Oi;var oi=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};G.getPreClones=oi;var Rm=function(t){return t.unslick||!t.infinite?0:t.slideCount};G.getPostClones=Rm;var $m=function(t){return t.slideCount===1?1:oi(t)+t.slideCount+Rm(t)};G.getTotalSlides=$m;var Nm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Am(t)?"left":"right":t.targetSlide<t.currentSlide-Im(t)?"right":"left"};G.siblingDirection=Nm;var Am=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};G.slidesOnRight=Am;var Im=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};G.slidesOnLeft=Im;var Uw=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};G.canUseDOM=Uw;var al={};function uu(e){return uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},uu(e)}Object.defineProperty(al,"__esModule",{value:!0});al.Track=void 0;var en=Fm(X.exports),ql=Fm(Ai.exports),Yl=G;function Fm(e){return e&&e.__esModule?e:{default:e}}function cu(){return cu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function Ww(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bw(e,t,n){return t&&gf(e.prototype,t),n&&gf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&du(e,t)}function du(e,t){return du=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},du(e,t)}function Qw(e){var t=Yw();return function(){var r=pa(e),i;if(t){var o=pa(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return qw(this,i)}}function qw(e,t){if(t&&(uu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fu(e)}function fu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Yw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pa(e){return pa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pa(e)}function yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yf(Object(n),!0).forEach(function(r){pu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gl=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var s=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":s}},Gw=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Kl=function(t,n){return t.key||n},Kw=function(t){var n,r=[],i=[],o=[],l=en.default.Children.count(t.children),a=(0,Yl.lazyStartIndex)(t),s=(0,Yl.lazyEndIndex)(t);return en.default.Children.forEach(t.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?d=u:d=en.default.createElement("div",null);var h=Gw(Xe(Xe({},t),{},{index:c})),g=d.props.className||"",y=Gl(Xe(Xe({},t),{},{index:c}));if(r.push(en.default.cloneElement(d,{key:"original"+Kl(d,c),"data-index":c,className:(0,ql.default)(y,g),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Xe(Xe({outline:"none"},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})),t.infinite&&t.fade===!1){var k=l-c;k<=(0,Yl.getPreClones)(t)&&l!==t.slidesToShow&&(n=-k,n>=a&&(d=u),y=Gl(Xe(Xe({},t),{},{index:n})),i.push(en.default.cloneElement(d,{key:"precloned"+Kl(d,n),"data-index":n,tabIndex:"-1",className:(0,ql.default)(y,g),"aria-hidden":!y["slick-active"],style:Xe(Xe({},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}}))),l!==t.slidesToShow&&(n=l+c,n<s&&(d=u),y=Gl(Xe(Xe({},t),{},{index:n})),o.push(en.default.cloneElement(d,{key:"postcloned"+Kl(d,n),"data-index":n,tabIndex:"-1",className:(0,ql.default)(y,g),"aria-hidden":!y["slick-active"],style:Xe(Xe({},d.props.style||{}),h),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),t.focusOnSelect&&t.focusOnSelect(f)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Xw=function(e){Vw(n,e);var t=Qw(n);function n(){var r;Ww(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),pu(fu(r),"node",null),pu(fu(r),"handleRef",function(a){r.node=a}),r}return Bw(n,[{key:"render",value:function(){var i=Kw(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,s=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:a,onMouseLeave:s};return en.default.createElement("div",cu({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(en.default.PureComponent);al.Track=Xw;var ll={};function hu(e){return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hu(e)}Object.defineProperty(ll,"__esModule",{value:!0});ll.Dots=void 0;var fo=Hm(X.exports),Jw=Hm(Ai.exports),wf=G;function Hm(e){return e&&e.__esModule?e:{default:e}}function xf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xf(Object(n),!0).forEach(function(r){ex(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ex(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nx(e,t,n){return t&&Sf(e.prototype,t),n&&Sf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mu(e,t)}function mu(e,t){return mu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mu(e,t)}function ix(e){var t=lx();return function(){var r=ha(e),i;if(t){var o=ha(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ox(this,i)}}function ox(e,t){if(t&&(hu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ax(e)}function ax(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ha(e){return ha=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ha(e)}var sx=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},ux=function(e){rx(n,e);var t=ix(n);function n(){return tx(this,n),t.apply(this,arguments)}return nx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,s=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,h=sx({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:s}),g={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},y=[],k=0;k<h;k++){var m=(k+1)*u-1,p=s?m:(0,wf.clamp)(m,0,d-1),v=p-(u-1),x=s?v:(0,wf.clamp)(v,0,d-1),O=(0,Jw.default)({"slick-active":s?f>=x&&f<=p:f===x}),P={message:"dots",index:k,slidesToScroll:u,currentSlide:f},_=this.clickHandler.bind(this,P);y=y.concat(fo.default.createElement("li",{key:k,className:O},fo.default.cloneElement(this.props.customPaging(k),{onClick:_})))}return fo.default.cloneElement(this.props.appendDots(y),Zw({className:this.props.dotsClass},g))}}]),n}(fo.default.PureComponent);ll.Dots=ux;var Er={};function vu(e){return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vu(e)}Object.defineProperty(Er,"__esModule",{value:!0});Er.PrevArrow=Er.NextArrow=void 0;var pr=Wm(X.exports),Um=Wm(Ai.exports),cx=G;function Wm(e){return e&&e.__esModule?e:{default:e}}function ma(){return ma=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ma.apply(this,arguments)}function kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function va(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kf(Object(n),!0).forEach(function(r){dx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vm(e,t,n){return t&&Ef(e.prototype,t),n&&Ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gu(e,t)}function gu(e,t){return gu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gu(e,t)}function qm(e){var t=hx();return function(){var r=ga(e),i;if(t){var o=ga(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fx(this,i)}}function fx(e,t){if(t&&(vu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return px(e)}function px(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ga(e)}var mx=function(e){Qm(n,e);var t=qm(n);function n(){return Bm(this,n),t.apply(this,arguments)}return Vm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Um.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.prevArrow?s=pr.default.cloneElement(this.props.prevArrow,va(va({},l),a)):s=pr.default.createElement("button",ma({key:"0",type:"button"},l)," ","Previous"),s}}]),n}(pr.default.PureComponent);Er.PrevArrow=mx;var vx=function(e){Qm(n,e);var t=qm(n);function n(){return Bm(this,n),t.apply(this,arguments)}return Vm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,cx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Um.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},s;return this.props.nextArrow?s=pr.default.cloneElement(this.props.nextArrow,va(va({},l),a)):s=pr.default.createElement("button",ma({key:"1",type:"button"},l)," ","Next"),s}}]),n}(pr.default.PureComponent);Er.NextArrow=vx;var Ym=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),yu=typeof window<"u"&&typeof document<"u"&&window.document===document,ya=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),gx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ya):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),yx=2;function wx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){gx(o)}function a(){var s=Date.now();if(n){if(s-i<yx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=s}return a}var xx=20,Sx=["top","right","bottom","left","width","height","size","weight"],kx=typeof MutationObserver<"u",Ex=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=wx(this.refresh.bind(this),xx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!yu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),kx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!yu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Sx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Gm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_r=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ya},Km=sl(0,0,0,0);function wa(e){return parseFloat(e)||0}function _f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+wa(o)},0)}function _x(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=wa(l)}return n}function bx(e){var t=e.getBBox();return sl(0,0,t.width,t.height)}function Cx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Km;var r=_r(e).getComputedStyle(e),i=_x(r),o=i.left+i.right,l=i.top+i.bottom,a=wa(r.width),s=wa(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=_f(r,"left","right")+o),Math.round(s+l)!==n&&(s-=_f(r,"top","bottom")+l)),!Px(e)){var u=Math.round(a+o)-t,c=Math.round(s+l)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(s-=c)}return sl(i.left,i.top,a,s)}var Ox=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _r(e).SVGGraphicsElement}:function(e){return e instanceof _r(e).SVGElement&&typeof e.getBBox=="function"}}();function Px(e){return e===_r(e).document.documentElement}function Tx(e){return yu?Ox(e)?bx(e):Cx(e):Km}function Mx(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Gm(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function sl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Lx=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=sl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Tx(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),zx=function(){function e(t,n){var r=Mx(n);Gm(this,{target:t,contentRect:r})}return e}(),jx=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Ym,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Lx(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _r(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new zx(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Xm=typeof WeakMap<"u"?new WeakMap:new Ym,Jm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ex.getInstance(),r=new jx(t,n,this);Xm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Jm.prototype[e]=function(){var t;return(t=Xm.get(this))[e].apply(t,arguments)}});var Dx=function(){return typeof ya.ResizeObserver<"u"?ya.ResizeObserver:Jm}();const Rx=Object.freeze(Object.defineProperty({__proto__:null,default:Dx},Symbol.toStringTag,{value:"Module"})),$x=tp(Rx);Object.defineProperty(il,"__esModule",{value:!0});il.InnerSlider=void 0;var Qe=Ii(X.exports),Nx=Ii(Mm),Ax=Ii(Tw),Ix=Ii(Ai.exports),xe=G,Fx=al,Hx=ll,bf=Er,Ux=Ii($x);function Ii(e){return e&&e.__esModule?e:{default:e}}function xa(e){return xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xa(e)}function Sa(){return Sa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}function Wx(e,t){if(e==null)return{};var n=Bx(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Bx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Of(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qx(e,t,n){return t&&Of(e.prototype,t),n&&Of(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wu(e,t)}function wu(e,t){return wu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wu(e,t)}function Yx(e){var t=Kx();return function(){var r=ka(e),i;if(t){var o=ka(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Gx(this,i)}}function Gx(e,t){if(t&&(xa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ka(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xx=function(e){qx(n,e);var t=Yx(n);function n(r){var i;Vx(this,n),i=t.call(this,r),le(ae(i),"listRefHandler",function(l){return i.list=l}),le(ae(i),"trackRefHandler",function(l){return i.track=l}),le(ae(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,xe.getHeight)(l)+"px"}}),le(ae(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,xe.getOnDemandLazySlides)(Z(Z({},i.props),i.state));l.length>0&&(i.setState(function(s){return{lazyLoadedList:s.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=Z({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Ux.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(s){s.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,s.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),le(ae(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),le(ae(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,xe.getOnDemandLazySlides)(Z(Z({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(s,u,function(){i.state.currentSlide>=Qe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Qe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),le(ae(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Ax.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),le(ae(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var s=Z(Z({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(s,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),le(ae(i),"updateState",function(l,a,s){var u=(0,xe.initializedState)(l);l=Z(Z(Z({},l),u),{},{slideIndex:u.currentSlide});var c=(0,xe.getTrackLeft)(l);l=Z(Z({},l),{},{left:c});var d=(0,xe.getTrackCSS)(l);(a||Qe.default.Children.count(i.props.children)!==Qe.default.Children.count(l.children))&&(u.trackStyle=d),i.setState(u,s)}),le(ae(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,s=[],u=(0,xe.getPreClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,xe.getPostClones)(Z(Z(Z({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(_){s.push(_.props.style.width),l+=_.props.style.width});for(var d=0;d<u;d++)a+=s[s.length-1-d],l+=s[s.length-1-d];for(var f=0;f<c;f++)l+=s[f];for(var h=0;h<i.state.currentSlide;h++)a+=s[h];var g={width:l+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(s[i.state.currentSlide],"px");g.left="calc(".concat(g.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:g}}var k=Qe.default.Children.count(i.props.children),m=Z(Z(Z({},i.props),i.state),{},{slideCount:k}),p=(0,xe.getPreClones)(m)+(0,xe.getPostClones)(m)+k,v=100/i.props.slidesToShow*p,x=100/p,O=-x*((0,xe.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(O+=(100-x*v/100)/2);var P={width:v+"%",left:O+"%"};return{slideWidth:x+"%",trackStyle:P}}),le(ae(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,s=0;Array.prototype.forEach.call(l,function(u){var c=function(){return++s&&s>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),le(ae(i),"progressiveLazyLoad",function(){for(var l=[],a=Z(Z({},i.props),i.state),s=i.state.currentSlide;s<i.state.slideCount+(0,xe.getPostClones)(a);s++)if(i.state.lazyLoadedList.indexOf(s)<0){l.push(s);break}for(var u=i.state.currentSlide-1;u>=-(0,xe.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),le(ae(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=i.props,u=s.asNavFor,c=s.beforeChange,d=s.onLazyLoad,f=s.speed,h=s.afterChange,g=i.state.currentSlide,y=(0,xe.slideHandler)(Z(Z(Z({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),k=y.state,m=y.nextState;if(!!k){c&&c(g,k.currentSlide);var p=k.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),h&&h(g),delete i.animationEndCallback),i.setState(k,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,x=Wx(m,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),h&&h(k.currentSlide),delete i.animationEndCallback})},f))})}}),le(ae(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=Z(Z({},i.props),i.state),u=(0,xe.changeSlide)(s,l);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),le(ae(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),le(ae(i),"keyHandler",function(l){var a=(0,xe.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),le(ae(i),"selectHandler",function(l){i.changeSlide(l)}),le(ae(i),"disableBodyScroll",function(){var l=function(s){s=s||window.event,s.preventDefault&&s.preventDefault(),s.returnValue=!1};window.ontouchmove=l}),le(ae(i),"enableBodyScroll",function(){window.ontouchmove=null}),le(ae(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,xe.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),le(ae(i),"swipeMove",function(l){var a=(0,xe.swipeMove)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),le(ae(i),"swipeEnd",function(l){var a=(0,xe.swipeEnd)(l,Z(Z(Z({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var s=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),s!==void 0&&(i.slideHandler(s),i.props.verticalSwiping&&i.enableBodyScroll())}}),le(ae(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),le(ae(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),le(ae(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),le(ae(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),le(ae(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,xe.canGoNext)(Z(Z({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),le(ae(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),le(ae(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),le(ae(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),le(ae(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),le(ae(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),le(ae(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),le(ae(i),"render",function(){var l=(0,Ix.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=Z(Z({},i.props),i.state),s=(0,xe.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;s=Z(Z({},s),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,xe.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=Z(Z({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=Qe.default.createElement(Hx.Dots,d)}var h,g,y=(0,xe.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(h=Qe.default.createElement(bf.PrevArrow,y),g=Qe.default.createElement(bf.NextArrow,y));var k=null;i.props.vertical&&(k={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var p=Z(Z({},k),m),v=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},O={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},O={className:l}),Qe.default.createElement("div",O,i.props.unslick?"":h,Qe.default.createElement("div",Sa({ref:i.listRefHandler},x),Qe.default.createElement(Fx.Track,Sa({ref:i.trackRefHandler},s),i.props.children)),i.props.unslick?"":g,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=Z(Z({},Nx.default),{},{currentSlide:i.props.initialSlide,slideCount:Qe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=Z(Z({},i.state),o),i}return Qx(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var s=a[l];if(!i.hasOwnProperty(s)){o=!0;break}if(!(xa(i[s])==="object"||typeof i[s]=="function")&&i[s]!==this.props[s]){o=!0;break}}return o||Qe.default.Children.count(this.props.children)!==Qe.default.Children.count(i.children)}}]),n}(Qe.default.Component);il.InnerSlider=Xx;var Jx=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Zx=Jx,eS=Zx,tS=function(e){var t=/[height|width]$/;return t.test(e)},Pf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=eS(r),tS(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},nS=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Pf(n),r<e.length-1&&(t+=", ")}),t):Pf(e)},rS=nS,Zm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(X.exports);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(Zm);var Xl,Tf;function iS(){if(Tf)return Xl;Tf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Xl=e,Xl}var Jl,Mf;function ev(){if(Mf)return Jl;Mf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Jl={isFunction:n,isArray:t,each:e},Jl}var Zl,Lf;function oS(){if(Lf)return Zl;Lf=1;var e=iS(),t=ev().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Zl=n,Zl}var es,zf;function aS(){if(zf)return es;zf=1;var e=oS(),t=ev(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,s){var u=this.queries,c=s&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[l].addHandler(d)}),this},unregister:function(l,a){var s=this.queries[l];return s&&(a?s.removeHandler(a):(s.clear(),delete this.queries[l])),this}},es=o,es}var ts,jf;function lS(){if(jf)return ts;jf=1;var e=aS();return ts=new e,ts}(function(e){function t(S){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},t(S)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(X.exports),r=il,i=a(rS),o=a(Zm),l=G;function a(S){return S&&S.__esModule?S:{default:S}}function s(){return s=Object.assign||function(S){for(var L=1;L<arguments.length;L++){var j=arguments[L];for(var $ in j)Object.prototype.hasOwnProperty.call(j,$)&&(S[$]=j[$])}return S},s.apply(this,arguments)}function u(S,L){var j=Object.keys(S);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(S);L&&($=$.filter(function(N){return Object.getOwnPropertyDescriptor(S,N).enumerable})),j.push.apply(j,$)}return j}function c(S){for(var L=1;L<arguments.length;L++){var j=arguments[L]!=null?arguments[L]:{};L%2?u(Object(j),!0).forEach(function($){O(S,$,j[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function($){Object.defineProperty(S,$,Object.getOwnPropertyDescriptor(j,$))})}return S}function d(S,L){if(!(S instanceof L))throw new TypeError("Cannot call a class as a function")}function f(S,L){for(var j=0;j<L.length;j++){var $=L[j];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(S,$.key,$)}}function h(S,L,j){return L&&f(S.prototype,L),j&&f(S,j),Object.defineProperty(S,"prototype",{writable:!1}),S}function g(S,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(L&&L.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),L&&y(S,L)}function y(S,L){return y=Object.setPrototypeOf||function($,N){return $.__proto__=N,$},y(S,L)}function k(S){var L=v();return function(){var $=x(S),N;if(L){var R=x(this).constructor;N=Reflect.construct($,arguments,R)}else N=$.apply(this,arguments);return m(this,N)}}function m(S,L){if(L&&(t(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(S)}function p(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(S){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},x(S)}function O(S,L,j){return L in S?Object.defineProperty(S,L,{value:j,enumerable:!0,configurable:!0,writable:!0}):S[L]=j,S}var P=(0,l.canUseDOM)()&&lS(),_=function(S){g(j,S);var L=k(j);function j($){var N;return d(this,j),N=L.call(this,$),O(p(N),"innerSliderRefHandler",function(R){return N.innerSlider=R}),O(p(N),"slickPrev",function(){return N.innerSlider.slickPrev()}),O(p(N),"slickNext",function(){return N.innerSlider.slickNext()}),O(p(N),"slickGoTo",function(R){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return N.innerSlider.slickGoTo(R,A)}),O(p(N),"slickPause",function(){return N.innerSlider.pause("paused")}),O(p(N),"slickPlay",function(){return N.innerSlider.autoPlay("play")}),N.state={breakpoint:null},N._responsiveMediaHandlers=[],N}return h(j,[{key:"media",value:function(N,R){P.register(N,R),this._responsiveMediaHandlers.push({query:N,handler:R})}},{key:"componentDidMount",value:function(){var N=this;if(this.props.responsive){var R=this.props.responsive.map(function(I){return I.breakpoint});R.sort(function(I,Y){return I-Y}),R.forEach(function(I,Y){var z;Y===0?z=(0,i.default)({minWidth:0,maxWidth:I}):z=(0,i.default)({minWidth:R[Y-1]+1,maxWidth:I}),(0,l.canUseDOM)()&&N.media(z,function(){N.setState({breakpoint:I})})});var A=(0,i.default)({minWidth:R.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(A,function(){N.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(N){P.unregister(N.query,N.handler)})}},{key:"render",value:function(){var N=this,R,A;this.state.breakpoint?(A=this.props.responsive.filter(function(q){return q.breakpoint===N.state.breakpoint}),R=A[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),A[0].settings)):R=c(c({},o.default),this.props),R.centerMode&&(R.slidesToScroll>1,R.slidesToScroll=1),R.fade&&(R.slidesToShow>1,R.slidesToScroll>1,R.slidesToShow=1,R.slidesToScroll=1);var I=n.default.Children.toArray(this.props.children);I=I.filter(function(q){return typeof q=="string"?!!q.trim():!!q}),R.variableWidth&&(R.rows>1||R.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),R.variableWidth=!1);for(var Y=[],z=null,C=0;C<I.length;C+=R.rows*R.slidesPerRow){for(var D=[],U=C;U<C+R.rows*R.slidesPerRow;U+=R.slidesPerRow){for(var V=[],H=U;H<U+R.slidesPerRow&&(R.variableWidth&&I[H].props.style&&(z=I[H].props.style.width),!(H>=I.length));H+=1)V.push(n.default.cloneElement(I[H],{key:100*C+10*U+H,tabIndex:-1,style:{width:"".concat(100/R.slidesPerRow,"%"),display:"inline-block"}}));D.push(n.default.createElement("div",{key:10*C+U},V))}R.variableWidth?Y.push(n.default.createElement("div",{key:C,style:{width:z}},D)):Y.push(n.default.createElement("div",{key:C},D))}if(R==="unslick"){var E="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:E},I)}else Y.length<=R.slidesToShow&&(R.unslick=!0);return n.default.createElement(r.InnerSlider,s({style:this.props.style,ref:this.innerSliderRefHandler},R),Y)}}]),j}(n.default.Component);e.default=_})(Tm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Tm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(Pm);const tv=Oa(Pm);const sS=b.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
    
`,uS=b.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: ${M.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`,cS=b.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${M.tablet}) {    
        width: 96%;
        max-height: 40vh;
    }

    @media screen and (max-width: ${M.mobile}) {
        width: 100%;
        max-height: 40vh;
    }
    
`,dS=b.div`
    margin: 20px;
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
`,fS=e=>{const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2500};return w(dS,{containerWidth:e.width,children:w(tv,{...t,children:e.carouselData.map((n,r)=>w(sS,{children:w(uS,{children:w(cS,{src:n.image,alt:n.alt})})},r))})})},pS="/Site-Serra/assets/membros-1.26cb4867.svg",hS="/Site-Serra/assets/membros-2.457898e5.svg",mS="/Site-Serra/assets/missao-icon.4dc65479.svg",vS="/Site-Serra/assets/visao-icon.75e2e4de.svg",gS="/Site-Serra/assets/valores-icon.b6d7390b.svg",Pe={members:[{image:pS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"},{image:hS,alt:"Foto tirada na \xFAltima imers\xE3o da Serra Jr. Engenharia"}],membersText:"A Serra Jr. Engenharia, \xE9 uma Empresa J\xFAnior vinculada ao Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a presta\xE7\xE3o de servi\xE7os como prototipagem, automa\xE7\xE3o, desenho t\xE9cnico industrial, projeto e manuten\xE7\xE3o de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mec\xE2nica e de Computa\xE7\xE3o atuando em regime de voluntariado, determinados a adquirir experi\xEAncia colocando seus conhecimentos em pr\xE1tica, com o objetivo de trazer inova\xE7\xE3o e excel\xEAncia ao mercado. Al\xE9m disso, conta com o suporte e orienta\xE7\xE3o dos professores doutores e t\xE9cnicos da institui\xE7\xE3o. O faturamento \xE9 integralmente destinado \xE0 manuten\xE7\xE3o financeira da empresa e para o desenvolvimento t\xE9cnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacita\xE7\xE3o profissional, al\xE9m das viv\xEAncias experienciadas na Universidade.",icons:[{image:mS,imageAlt:"Miss\xE3o",titleText:"Miss\xE3o",hasList:!1,list:void 0,content:"Promover o desenvolvimento e evolu\xE7\xE3o dos acad\xEAmicos para que sejam capazes de impactar e agregar valores \xE0s pessoas e empresas de Nova Friburgo e regi\xE3o, atrav\xE9s de projetos mec\xE2nicos e de computa\xE7\xE3o."},{image:vS,imageAlt:"Vis\xE3o",titleText:"Vis\xE3o",hasList:!1,list:void 0,content:"Idealizar nossa empresa como exemplo em inova\xE7\xE3o e qualidade de servi\xE7os."},{image:gS,imageAlt:"Valores",titleText:"Valores",hasList:!0,list:["Dedica\xE7\xE3o por excel\xEAncia","Gest\xE3o segura","Impactar nossa era","Evolu\xE7\xE3o constante","Responsabilidade com os clientes"],content:void 0}]},yS=b.div`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 2.5rem;
        height: 8rem;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 4.5rem;
        height: 10rem;
    }
`,Df=b.div`
    border-radius: 1rem;
    background-color: #EDEDED;
    height: 100%;
    width: 80vw;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width: ${M.tablet}) {
        width: 95vw;
    }


    @media screen and (min-width: ${M.largeDesktop}) {
        width: 90vw;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 85vw;
        padding: 80px 0px;
    }
`,Rf=b.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${M.notebook}) {
        flex-direction: column;
    }

`,wS=b.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-decoration: none;
`,xS=b.button`
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

    @media screen and (min-width: ${M.desktop}) {
        width: 30%;
        font-size: 30px;
    }
    @media screen and (min-width: ${M.largeDesktop}) {
        width: 30%;
        font-size: 40px;
    }
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 30%;
        font-size: 60px;
    }
`,SS=b.div`
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

    
`,kS=b.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    padding-left: 4%;
    padding-top: 2%;
    padding-bottom: 2%;

    @media screen and (max-width: ${M.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${M.desktop}) {
        font-size: 25px;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 50px;
    }
`,ES=b.span`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: justify;
    padding: 20px 30px;

    @media screen and (max-width: ${M.tablet}) {
        font-size: 20px;
    }

    @media screen and (min-width: ${M.desktop}) {
        font-size: 30px;
        width: 90%;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 40px;
        width: 80%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
        width: 80%;
    }
`,$f=b.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${M.tablet}) {
        width: 90%;
    }
    
`,_S=b.img`
    width: 45%;
    height: 45%;
    display: flex;
    justify-self: center;
    align-self: center;
    margin: 40px;
    border-radius: 1rem;

    @media screen and (max-width: ${M.tablet}) {
        width:70%;
        height: 70%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 90%;
        height: 90%;
    }
`,nv=({title:e,buttonUrl:t,buttonTitle:n,color:r,hasButton:i,text:o,image:l,alt:a,hasCarousel:s})=>Q(SS,{carouselStyle:s,children:[w(yS,{titleColor:r,children:e}),s?w(Df,{children:Q(Rf,{children:[w($f,{children:w(kS,{children:Pe.membersText})}),w(fS,{width:"50%",carouselData:Pe.members})]})}):Q(Df,{children:[Q(Rf,{children:[w($f,{children:w(ES,{children:o})}),w(_S,{src:l,alt:a})]}),i?w(wS,{href:t,children:w(xS,{buttonColor:r,children:n})}):null]})]});var rv={exports:{}};(function(e,t){(function(n,r){e.exports=r(X.exports)})(typeof self<"u"?self:Br,n=>(()=>{var r={7403:(a,s,u)=>{u.d(s,{default:()=>z});var c=u(4087),d=u.n(c);const f=function(C){return new RegExp(/<[a-z][\s\S]*>/i).test(C)},h=function(C){var D=document.createElement("div");return D.innerHTML=C,D.childNodes},g=function(C,D){return Math.floor(Math.random()*(D-C+1))+C};var y="TYPE_CHARACTER",k="REMOVE_CHARACTER",m="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",x="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",_="CHANGE_DELAY",S="CHANGE_CURSOR",L="PASTE_STRING",j="HTML_TAG";function $(C,D){var U=Object.keys(C);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(C);D&&(V=V.filter(function(H){return Object.getOwnPropertyDescriptor(C,H).enumerable})),U.push.apply(U,V)}return U}function N(C){for(var D=1;D<arguments.length;D++){var U=arguments[D]!=null?arguments[D]:{};D%2?$(Object(U),!0).forEach(function(V){Y(C,V,U[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(U)):$(Object(U)).forEach(function(V){Object.defineProperty(C,V,Object.getOwnPropertyDescriptor(U,V))})}return C}function R(C){return function(D){if(Array.isArray(D))return A(D)}(C)||function(D){if(typeof Symbol<"u"&&D[Symbol.iterator]!=null||D["@@iterator"]!=null)return Array.from(D)}(C)||function(D,U){if(D){if(typeof D=="string")return A(D,U);var V=Object.prototype.toString.call(D).slice(8,-1);return V==="Object"&&D.constructor&&(V=D.constructor.name),V==="Map"||V==="Set"?Array.from(D):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?A(D,U):void 0}}(C)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(C,D){(D==null||D>C.length)&&(D=C.length);for(var U=0,V=new Array(D);U<D;U++)V[U]=C[U];return V}function I(C,D){for(var U=0;U<D.length;U++){var V=D[U];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(C,V.key,V)}}function Y(C,D,U){return D in C?Object.defineProperty(C,D,{value:U,enumerable:!0,configurable:!0,writable:!0}):C[D]=U,C}const z=function(){function C(V,H){var E=this;if(function(F,T){if(!(F instanceof T))throw new TypeError("Cannot call a class as a function")}(this,C),Y(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),Y(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),Y(this,"setupWrapperElement",function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))}),Y(this,"start",function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E}),Y(this,"pause",function(){return E.state.eventLoopPaused=!0,E}),Y(this,"stop",function(){return E.state.eventLoop&&((0,c.cancel)(E.state.eventLoop),E.state.eventLoop=null),E}),Y(this,"pauseFor",function(F){return E.addEventToQueue(v,{ms:F}),E}),Y(this,"typeOutAllStrings",function(){return typeof E.options.strings=="string"?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach(function(F){E.typeString(F).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)}),E)}),Y(this,"typeString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(F))return E.typeOutHTMLString(F,T);if(F){var J=E.options||{},W=J.stringSplitter,ee=typeof W=="function"?W(F):F.split("");E.typeCharacters(ee,T)}return E}),Y(this,"pasteString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(F)?E.typeOutHTMLString(F,T,!0):(F&&E.addEventToQueue(L,{character:F,node:T}),E)}),Y(this,"typeOutHTMLString",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,J=arguments.length>2?arguments[2]:void 0,W=h(F);if(W.length>0)for(var ee=0;ee<W.length;ee++){var ie=W[ee],se=ie.innerHTML;ie&&ie.nodeType!==3?(ie.innerHTML="",E.addEventToQueue(O,{node:ie,parentNode:T}),J?E.pasteString(se,ie):E.typeString(se,ie)):ie.textContent&&(J?E.pasteString(ie.textContent,T):E.typeString(ie.textContent,T))}return E}),Y(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return E.addEventToQueue(m,{speed:F}),E}),Y(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return E.addEventToQueue(P,{speed:F}),E}),Y(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return E.addEventToQueue(_,{delay:F}),E}),Y(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return E.addEventToQueue(S,{cursor:F}),E}),Y(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var T=0;T<F;T++)E.addEventToQueue(k);return E}),Y(this,"callFunction",function(F,T){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return E.addEventToQueue(x,{cb:F,thisArg:T}),E}),Y(this,"typeCharacters",function(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(J){E.addEventToQueue(y,{character:J,node:T})}),E}),Y(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){E.addEventToQueue(k)}),E}),Y(this,"addEventToQueue",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return E.addEventToStateProperty(F,T,J,"eventQueue")}),Y(this,"addReverseCalledEvent",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=E.options.loop;return W?E.addEventToStateProperty(F,T,J,"reverseCalledEvents"):E}),Y(this,"addEventToStateProperty",function(F,T){var J=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,ee={eventName:F,eventArgs:T||{}};return E.state[W]=J?[ee].concat(R(E.state[W])):[].concat(R(E.state[W]),[ee]),E}),Y(this,"runEventLoop",function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var F=Date.now(),T=F-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=R(E.state.calledEvents),E.state.calledEvents=[],E.options=N({},E.state.initialOptions)}if(E.state.eventLoop=d()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(F<E.state.pauseUntil)return;E.state.pauseUntil=null}var J,W=R(E.state.eventQueue),ee=W.shift();if(!(T<=(J=ee.eventName===p||ee.eventName===k?E.options.deleteSpeed==="natural"?g(40,80):E.options.deleteSpeed:E.options.delay==="natural"?g(120,160):E.options.delay))){var ie=ee.eventName,se=ee.eventArgs;switch(E.logInDevMode({currentEvent:ee,state:E.state,delay:J}),ie){case L:case y:var ne=se.character,Ce=se.node,Ne=document.createTextNode(ne),oe=Ne;E.options.onCreateTextNode&&typeof E.options.onCreateTextNode=="function"&&(oe=E.options.onCreateTextNode(ne,Ne)),oe&&(Ce?Ce.appendChild(oe):E.state.elements.wrapper.appendChild(oe)),E.state.visibleNodes=[].concat(R(E.state.visibleNodes),[{type:"TEXT_NODE",character:ne,node:oe}]);break;case k:W.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var je=ee.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(je);break;case x:var ce=ee.eventArgs,Me=ce.cb,kn=ce.thisArg;Me.call(kn,{elements:E.state.elements});break;case O:var Oe=ee.eventArgs,Gt=Oe.node,Nt=Oe.parentNode;Nt?Nt.appendChild(Gt):E.state.elements.wrapper.appendChild(Gt),E.state.visibleNodes=[].concat(R(E.state.visibleNodes),[{type:j,node:Gt,parentNode:Nt||E.state.elements.wrapper}]);break;case m:var rt=E.state.visibleNodes,te=se.speed,he=[];te&&he.push({eventName:P,eventArgs:{speed:te,temp:!0}});for(var Wn=0,Lr=rt.length;Wn<Lr;Wn++)he.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&he.push({eventName:P,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,he);break;case p:var Mt=ee.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var cl=E.state.visibleNodes.pop(),gv=cl.type,Ui=cl.node,yv=cl.character;E.options.onRemoveNode&&typeof E.options.onRemoveNode=="function"&&E.options.onRemoveNode({node:Ui,character:yv}),Ui&&Ui.parentNode.removeChild(Ui),gv===j&&Mt&&W.unshift({eventName:p,eventArgs:{}})}break;case P:E.options.deleteSpeed=ee.eventArgs.speed;break;case _:E.options.delay=ee.eventArgs.delay;break;case S:E.options.cursor=ee.eventArgs.cursor,E.state.elements.cursor.innerHTML=ee.eventArgs.cursor}E.options.loop&&(ee.eventName===p||ee.eventArgs&&ee.eventArgs.temp||(E.state.calledEvents=[].concat(R(E.state.calledEvents),[ee]))),E.state.eventQueue=W,E.state.lastFrameTime=F}}}),V)if(typeof V=="string"){var q=document.querySelector(V);if(!q)throw new Error("Could not find container element");this.state.elements.container=q}else this.state.elements.container=V;H&&(this.options=N(N({},this.options),H)),this.state.initialOptions=N({},this.options),this.init()}var D,U;return D=C,(U=[{key:"init",value:function(){var V,H;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(V=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(V)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(V){this.options.devMode&&console.log(V)}}])&&I(D.prototype,U),Object.defineProperty(D,"prototype",{writable:!1}),C}()},8552:(a,s,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,s,u)=>{var c=u(1789),d=u(401),f=u(7667),h=u(1327),g=u(1866);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},8407:(a,s,u)=>{var c=u(7040),d=u(4125),f=u(2117),h=u(7518),g=u(4705);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},7071:(a,s,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,s,u)=>{var c=u(4785),d=u(1285),f=u(6e3),h=u(9916),g=u(5265);function y(k){var m=-1,p=k==null?0:k.length;for(this.clear();++m<p;){var v=k[m];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=d,y.prototype.get=f,y.prototype.has=h,y.prototype.set=g,a.exports=y},3818:(a,s,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,s,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,s,u)=>{var c=u(3369),d=u(619),f=u(2385);function h(g){var y=-1,k=g==null?0:g.length;for(this.__data__=new c;++y<k;)this.add(g[y])}h.prototype.add=h.prototype.push=d,h.prototype.has=f,a.exports=h},6384:(a,s,u)=>{var c=u(8407),d=u(7465),f=u(3779),h=u(7599),g=u(4758),y=u(4309);function k(m){var p=this.__data__=new c(m);this.size=p.size}k.prototype.clear=d,k.prototype.delete=f,k.prototype.get=h,k.prototype.has=g,k.prototype.set=y,a.exports=k},2705:(a,s,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,s,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,s,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length,f=0,h=[];++c<d;){var g=s[c];u(g,c,s)&&(h[f++]=g)}return h}},4636:(a,s,u)=>{var c=u(2545),d=u(5694),f=u(1469),h=u(4144),g=u(5776),y=u(6719),k=Object.prototype.hasOwnProperty;a.exports=function(m,p){var v=f(m),x=!v&&d(m),O=!v&&!x&&h(m),P=!v&&!x&&!O&&y(m),_=v||x||O||P,S=_?c(m.length,String):[],L=S.length;for(var j in m)!p&&!k.call(m,j)||_&&(j=="length"||O&&(j=="offset"||j=="parent")||P&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||g(j,L))||S.push(j);return S}},2488:a=>{a.exports=function(s,u){for(var c=-1,d=u.length,f=s.length;++c<d;)s[f+c]=u[c];return s}},2908:a=>{a.exports=function(s,u){for(var c=-1,d=s==null?0:s.length;++c<d;)if(u(s[c],c,s))return!0;return!1}},8470:(a,s,u)=>{var c=u(7813);a.exports=function(d,f){for(var h=d.length;h--;)if(c(d[h][0],f))return h;return-1}},8866:(a,s,u)=>{var c=u(2488),d=u(1469);a.exports=function(f,h,g){var y=h(f);return d(f)?y:c(y,g(f))}},4239:(a,s,u)=>{var c=u(2705),d=u(9607),f=u(2333),h=c?c.toStringTag:void 0;a.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":h&&h in Object(g)?d(g):f(g)}},9454:(a,s,u)=>{var c=u(4239),d=u(7005);a.exports=function(f){return d(f)&&c(f)=="[object Arguments]"}},939:(a,s,u)=>{var c=u(2492),d=u(7005);a.exports=function f(h,g,y,k,m){return h===g||(h==null||g==null||!d(h)&&!d(g)?h!=h&&g!=g:c(h,g,y,k,f,m))}},2492:(a,s,u)=>{var c=u(6384),d=u(7114),f=u(8351),h=u(6096),g=u(4160),y=u(1469),k=u(4144),m=u(6719),p="[object Arguments]",v="[object Array]",x="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(P,_,S,L,j,$){var N=y(P),R=y(_),A=N?v:g(P),I=R?v:g(_),Y=(A=A==p?x:A)==x,z=(I=I==p?x:I)==x,C=A==I;if(C&&k(P)){if(!k(_))return!1;N=!0,Y=!1}if(C&&!Y)return $||($=new c),N||m(P)?d(P,_,S,L,j,$):f(P,_,A,S,L,j,$);if(!(1&S)){var D=Y&&O.call(P,"__wrapped__"),U=z&&O.call(_,"__wrapped__");if(D||U){var V=D?P.value():P,H=U?_.value():_;return $||($=new c),j(V,H,S,L,$)}}return!!C&&($||($=new c),h(P,_,S,L,j,$))}},8458:(a,s,u)=>{var c=u(3560),d=u(5346),f=u(3218),h=u(346),g=/^\[object .+?Constructor\]$/,y=Function.prototype,k=Object.prototype,m=y.toString,p=k.hasOwnProperty,v=RegExp("^"+m.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!f(x)||d(x))&&(c(x)?v:g).test(h(x))}},8749:(a,s,u)=>{var c=u(4239),d=u(1780),f=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(g){return f(g)&&d(g.length)&&!!h[c(g)]}},280:(a,s,u)=>{var c=u(5726),d=u(6916),f=Object.prototype.hasOwnProperty;a.exports=function(h){if(!c(h))return d(h);var g=[];for(var y in Object(h))f.call(h,y)&&y!="constructor"&&g.push(y);return g}},2545:a=>{a.exports=function(s,u){for(var c=-1,d=Array(s);++c<s;)d[c]=u(c);return d}},1717:a=>{a.exports=function(s){return function(u){return s(u)}}},4757:a=>{a.exports=function(s,u){return s.has(u)}},4429:(a,s,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,s,u)=>{var c=u(8668),d=u(2908),f=u(4757);a.exports=function(h,g,y,k,m,p){var v=1&y,x=h.length,O=g.length;if(x!=O&&!(v&&O>x))return!1;var P=p.get(h),_=p.get(g);if(P&&_)return P==g&&_==h;var S=-1,L=!0,j=2&y?new c:void 0;for(p.set(h,g),p.set(g,h);++S<x;){var $=h[S],N=g[S];if(k)var R=v?k(N,$,S,g,h,p):k($,N,S,h,g,p);if(R!==void 0){if(R)continue;L=!1;break}if(j){if(!d(g,function(A,I){if(!f(j,I)&&($===A||m($,A,y,k,p)))return j.push(I)})){L=!1;break}}else if($!==N&&!m($,N,y,k,p)){L=!1;break}}return p.delete(h),p.delete(g),L}},8351:(a,s,u)=>{var c=u(2705),d=u(1149),f=u(7813),h=u(7114),g=u(8776),y=u(1814),k=c?c.prototype:void 0,m=k?k.valueOf:void 0;a.exports=function(p,v,x,O,P,_,S){switch(x){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!_(new d(p),new d(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var L=g;case"[object Set]":var j=1&O;if(L||(L=y),p.size!=v.size&&!j)return!1;var $=S.get(p);if($)return $==v;O|=2,S.set(p,v);var N=h(L(p),L(v),O,P,_,S);return S.delete(p),N;case"[object Symbol]":if(m)return m.call(p)==m.call(v)}return!1}},6096:(a,s,u)=>{var c=u(8234),d=Object.prototype.hasOwnProperty;a.exports=function(f,h,g,y,k,m){var p=1&g,v=c(f),x=v.length;if(x!=c(h).length&&!p)return!1;for(var O=x;O--;){var P=v[O];if(!(p?P in h:d.call(h,P)))return!1}var _=m.get(f),S=m.get(h);if(_&&S)return _==h&&S==f;var L=!0;m.set(f,h),m.set(h,f);for(var j=p;++O<x;){var $=f[P=v[O]],N=h[P];if(y)var R=p?y(N,$,P,h,f,m):y($,N,P,f,h,m);if(!(R===void 0?$===N||k($,N,g,y,m):R)){L=!1;break}j||(j=P=="constructor")}if(L&&!j){var A=f.constructor,I=h.constructor;A==I||!("constructor"in f)||!("constructor"in h)||typeof A=="function"&&A instanceof A&&typeof I=="function"&&I instanceof I||(L=!1)}return m.delete(f),m.delete(h),L}},1957:(a,s,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,s,u)=>{var c=u(8866),d=u(9551),f=u(3674);a.exports=function(h){return c(h,f,d)}},5050:(a,s,u)=>{var c=u(7019);a.exports=function(d,f){var h=d.__data__;return c(f)?h[typeof f=="string"?"string":"hash"]:h.map}},852:(a,s,u)=>{var c=u(8458),d=u(7801);a.exports=function(f,h){var g=d(f,h);return c(g)?g:void 0}},9607:(a,s,u)=>{var c=u(2705),d=Object.prototype,f=d.hasOwnProperty,h=d.toString,g=c?c.toStringTag:void 0;a.exports=function(y){var k=f.call(y,g),m=y[g];try{y[g]=void 0;var p=!0}catch{}var v=h.call(y);return p&&(k?y[g]=m:delete y[g]),v}},9551:(a,s,u)=>{var c=u(4963),d=u(479),f=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,g=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(k){return f.call(y,k)}))}:d;a.exports=g},4160:(a,s,u)=>{var c=u(8552),d=u(7071),f=u(3818),h=u(8525),g=u(577),y=u(4239),k=u(346),m="[object Map]",p="[object Promise]",v="[object Set]",x="[object WeakMap]",O="[object DataView]",P=k(c),_=k(d),S=k(f),L=k(h),j=k(g),$=y;(c&&$(new c(new ArrayBuffer(1)))!=O||d&&$(new d)!=m||f&&$(f.resolve())!=p||h&&$(new h)!=v||g&&$(new g)!=x)&&($=function(N){var R=y(N),A=R=="[object Object]"?N.constructor:void 0,I=A?k(A):"";if(I)switch(I){case P:return O;case _:return m;case S:return p;case L:return v;case j:return x}return R}),a.exports=$},7801:a=>{a.exports=function(s,u){return s==null?void 0:s[u]}},1789:(a,s,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}},7667:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;if(c){var g=h[f];return g==="__lodash_hash_undefined__"?void 0:g}return d.call(h,f)?h[f]:void 0}},1327:(a,s,u)=>{var c=u(4536),d=Object.prototype.hasOwnProperty;a.exports=function(f){var h=this.__data__;return c?h[f]!==void 0:d.call(h,f)}},1866:(a,s,u)=>{var c=u(4536);a.exports=function(d,f){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=c&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:a=>{var s=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var d=typeof u;return!!(c=c==null?9007199254740991:c)&&(d=="number"||d!="symbol"&&s.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}},5346:(a,s,u)=>{var c,d=u(4429),f=(c=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(h){return!!f&&f in h}},5726:a=>{var s=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||s)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,s,u)=>{var c=u(8470),d=Array.prototype.splice;a.exports=function(f){var h=this.__data__,g=c(h,f);return!(g<0||(g==h.length-1?h.pop():d.call(h,g,1),--this.size,0))}},2117:(a,s,u)=>{var c=u(8470);a.exports=function(d){var f=this.__data__,h=c(f,d);return h<0?void 0:f[h][1]}},7518:(a,s,u)=>{var c=u(8470);a.exports=function(d){return c(this.__data__,d)>-1}},4705:(a,s,u)=>{var c=u(8470);a.exports=function(d,f){var h=this.__data__,g=c(h,d);return g<0?(++this.size,h.push([d,f])):h[g][1]=f,this}},4785:(a,s,u)=>{var c=u(1989),d=u(8407),f=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(f||d),string:new c}}},1285:(a,s,u)=>{var c=u(5050);a.exports=function(d){var f=c(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).get(d)}},9916:(a,s,u)=>{var c=u(5050);a.exports=function(d){return c(this,d).has(d)}},5265:(a,s,u)=>{var c=u(5050);a.exports=function(d,f){var h=c(this,d),g=h.size;return h.set(d,f),this.size+=h.size==g?0:1,this}},8776:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d,f){c[++u]=[f,d]}),c}},4536:(a,s,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,s,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,s,u)=>{a=u.nmd(a);var c=u(1957),d=s&&!s.nodeType&&s,f=d&&a&&!a.nodeType&&a,h=f&&f.exports===d&&c.process,g=function(){try{return f&&f.require&&f.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=g},2333:a=>{var s=Object.prototype.toString;a.exports=function(u){return s.call(u)}},5569:a=>{a.exports=function(s,u){return function(c){return s(u(c))}}},5639:(a,s,u)=>{var c=u(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=c||d||Function("return this")();a.exports=f},619:a=>{a.exports=function(s){return this.__data__.set(s,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(s){return this.__data__.has(s)}},1814:a=>{a.exports=function(s){var u=-1,c=Array(s.size);return s.forEach(function(d){c[++u]=d}),c}},7465:(a,s,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(s){var u=this.__data__,c=u.delete(s);return this.size=u.size,c}},7599:a=>{a.exports=function(s){return this.__data__.get(s)}},4758:a=>{a.exports=function(s){return this.__data__.has(s)}},4309:(a,s,u)=>{var c=u(8407),d=u(7071),f=u(3369);a.exports=function(h,g){var y=this.__data__;if(y instanceof c){var k=y.__data__;if(!d||k.length<199)return k.push([h,g]),this.size=++y.size,this;y=this.__data__=new f(k)}return y.set(h,g),this.size=y.size,this}},346:a=>{var s=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return s.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(s,u){return s===u||s!=s&&u!=u}},5694:(a,s,u)=>{var c=u(9454),d=u(7005),f=Object.prototype,h=f.hasOwnProperty,g=f.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(k){return d(k)&&h.call(k,"callee")&&!g.call(k,"callee")};a.exports=y},1469:a=>{var s=Array.isArray;a.exports=s},8612:(a,s,u)=>{var c=u(3560),d=u(1780);a.exports=function(f){return f!=null&&d(f.length)&&!c(f)}},4144:(a,s,u)=>{a=u.nmd(a);var c=u(5639),d=u(5062),f=s&&!s.nodeType&&s,h=f&&a&&!a.nodeType&&a,g=h&&h.exports===f?c.Buffer:void 0,y=(g?g.isBuffer:void 0)||d;a.exports=y},8446:(a,s,u)=>{var c=u(939);a.exports=function(d,f){return c(d,f)}},3560:(a,s,u)=>{var c=u(4239),d=u(3218);a.exports=function(f){if(!d(f))return!1;var h=c(f);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=9007199254740991}},3218:a=>{a.exports=function(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(s){return s!=null&&typeof s=="object"}},6719:(a,s,u)=>{var c=u(8749),d=u(1717),f=u(1167),h=f&&f.isTypedArray,g=h?d(h):c;a.exports=g},3674:(a,s,u)=>{var c=u(4636),d=u(280),f=u(8612);a.exports=function(h){return f(h)?c(h):d(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var s,u,c,d,f,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(s()-f)/1e6},u=process.hrtime,d=(s=function(){var g;return 1e9*(g=u())[0]+g[1]})(),h=1e9*process.uptime(),f=d-h):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,s,u)=>{for(var c=u(75),d=typeof window>"u"?u.g:window,f=["moz","webkit"],h="AnimationFrame",g=d["request"+h],y=d["cancel"+h]||d["cancelRequest"+h],k=0;!g&&k<f.length;k++)g=d[f[k]+"Request"+h],y=d[f[k]+"Cancel"+h]||d[f[k]+"CancelRequest"+h];if(!g||!y){var m=0,p=0,v=[];g=function(x){if(v.length===0){var O=c(),P=Math.max(0,16.666666666666668-(O-m));m=P+O,setTimeout(function(){var _=v.slice(0);v.length=0;for(var S=0;S<_.length;S++)if(!_[S].cancelled)try{_[S].callback(m)}catch(L){setTimeout(function(){throw L},0)}},Math.round(P))}return v.push({handle:++p,callback:x,cancelled:!1}),p},y=function(x){for(var O=0;O<v.length;O++)v[O].handle===x&&(v[O].cancelled=!0)}}a.exports=function(x){return g.call(d,x)},a.exports.cancel=function(){y.apply(d,arguments)},a.exports.polyfill=function(x){x||(x=d),x.requestAnimationFrame=g,x.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var s=i[a];if(s!==void 0)return s.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return o.d(s,{a:s}),s},o.d=(a,s)=>{for(var u in s)o.o(s,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:s[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,s)=>Object.prototype.hasOwnProperty.call(a,s),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{o.d(l,{default:()=>O});var a=o(8156),s=o.n(a),u=o(7403),c=o(8446),d=o.n(c);function f(P){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},f(P)}function h(P,_){if(!(P instanceof _))throw new TypeError("Cannot call a class as a function")}function g(P,_){for(var S=0;S<_.length;S++){var L=_[S];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(P,L.key,L)}}function y(P,_){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(S,L){return S.__proto__=L,S},y(P,_)}function k(P,_){if(_&&(f(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(P)}function m(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function p(P){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},p(P)}function v(P,_,S){return _ in P?Object.defineProperty(P,_,{value:S,enumerable:!0,configurable:!0,writable:!0}):P[_]=S,P}var x=function(P){(function(R,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(A&&A.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),A&&y(R,A)})(N,P);var _,S,L,j,$=(L=N,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var R,A=p(L);if(j){var I=p(this).constructor;R=Reflect.construct(A,arguments,I)}else R=A.apply(this,arguments);return k(this,R)});function N(){var R;h(this,N);for(var A=arguments.length,I=new Array(A),Y=0;Y<A;Y++)I[Y]=arguments[Y];return v(m(R=$.call.apply($,[this].concat(I))),"state",{instance:null}),R}return _=N,(S=[{key:"componentDidMount",value:function(){var R=this,A=new u.default(this.typewriter,this.props.options);this.setState({instance:A},function(){var I=R.props.onInit;I&&I(A)})}},{key:"componentDidUpdate",value:function(R){d()(this.props.options,R.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var R=this,A=this.props.component;return s().createElement(A,{ref:function(I){return R.typewriter=I},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(_.prototype,S),Object.defineProperty(_,"prototype",{writable:!1}),N}(a.Component);x.defaultProps={component:"div"};const O=x})(),l.default})())})(rv);const bS=Oa(rv.exports),CS=b.div`
    width: 100%;
    /* background-color: red; */

    .writer{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: #001830;
        font-weight: 700;

        @media screen and (min-width: ${M.largeDesktop}){
            font-size: 120px;
        }
    }

    .writer-cursor{
        font-family: 'Courier Prime';
        font-size: 45px;
        color: orange;
        font-weight: 700;
        animation: blink 0.5s infinite;

        @media screen and (min-width: ${M.largeDesktop}){
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
`,OS=()=>w(CS,{children:w(bS,{onInit:e=>{e.typeString("Engrenando ideias, inovando o mercado.").pauseFor(2e3).deleteAll().start()},options:{wrapperClassName:"writer",cursorClassName:"writer-cursor",loop:!0}})}),PS="/Site-Serra/assets/presentation-image.40ce3de4.png",TS="/Site-Serra/assets/Sites.a0112d0d.svg",MS="/Site-Serra/assets/sistemas-web.d1b27032.svg",LS="/Site-Serra/assets/manutencao.33f9dd1a.svg",zS="/Site-Serra/assets/desenho-tecnico.22fbb0fb.svg",jS="/Site-Serra/assets/braco-robo.2b026e48.svg",DS="/Site-Serra/assets/impressora-3d.75613d7d.svg",RS="/Site-Serra/assets/membros-2.457898e5.svg",$S="/Site-Serra/assets/background-image.668c0125.svg",NS=b.div`
    background-color: #DBDBDB;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    

    @media screen and (max-width: ${M.tablet}){
        flex-direction: column-reverse; 
        align-items: space-around;
        justify-content: center;
        min-height: 500px;
    }
`,AS=b.img`
    width: 45%;
    
    @media screen and (max-width: ${M.tablet}){
        width: 60%;
    }
`,IS=b.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: ${M.tablet}){
        width: 80%;
        margin-top: 4%;
    }
`,FS=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,HS=b.div`
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

`,US=b.div`
    background-image: url(${$S});
`;b.p`
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: justify;
    width: 40%;
    margin-top: 5%;
`;b.img`
    width: 40%;
    height: 40%;
    border-radius: 20px;
    margin-top: 5%;
`;b.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 5%;
`;const WS=()=>Q(US,{children:[Q(NS,{children:[w(IS,{children:w(OS,{})}),w(AS,{src:PS,alt:"apresenta\xE7\xE3o"})]}),w(Tc,{text:"O que fazemos"}),Q(FS,{children:[Q(HS,{children:[w(pf,{title:"Projetos de Computa\xE7\xE3o",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/computacao",images:[TS,MS],texts:["Desenvolvimento de WebSites","Desenvolvimento de Sistemas Web"]}),w(pf,{title:"Projetos de Mec\xE2nica",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/mecanica",color:"#04ADD7",images:[LS,zS,jS,DS],texts:["Projeto e Manuten\xE7\xE3o de Equipamentos","Desenho T\xE9cnico e Industrial","Projetos de Automa\xE7\xE3o","Prototipagem"]})]}),w(nv,{title:"Nossa Hist\xF3ria",buttonTitle:"Saiba Mais",buttonUrl:"/Site-Serra/quemsomos",color:"#001830",hasButton:!0,text:"A Serra Jr. Engenharia, criada em 08 de maio de 2002, \xE9 uma empresa formada exclusivamente por alunos do curso de gradua\xE7\xE3o de Engenharia Mec\xE2nica e de Engenharia de Computa\xE7\xE3o do Instituto Polit\xE9cnico da Universidade do Estado do Rio de Janeiro \u2013 IPRJ/UERJ e tem como objetivo central o incentivo \xE0 inser\xE7\xE3o e desenvolvimento dos alunos na pr\xE1tica empresarial. Teve suas atividades paradas no ano de 2011 devido a trag\xE9dia clim\xE1tica que abalou Nova Friburgo. Em 2013, retomou com for\xE7a total seus projetos. Hoje, est\xE1 melhor do que nunca oferecendo solu\xE7\xF5es em engenharia mec\xE2nica e computa\xE7\xE3o para todo o mercado.",image:RS,alt:"Imagem com os membros da Serra Jr. Engenharia",hasCarousel:!1})]})]}),BS="/Site-Serra/assets/presentation-image.73570450.svg",VS=b.div`
    
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



    @media screen and (max-width: ${M.mobile}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (max-width: ${M.tablet}) {
        font-size: 16px;
        line-height: 25px;
        margin: 2px;
        padding: 2px;
        text-align: justify;
        width: 70%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 30%;
    }
    
`,QS=b.p`
    padding-bottom: 2%;
    border-image: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    border-bottom: 5px solid;
    border-image-slice: 1;
    font-weight: 500;

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 1.4rem;
        padding-bottom: 3%;
    }
    
    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 3rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 10px 0px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 4.5rem;
        padding-bottom: 3%;
        border-image-width: 0px 0px 15px 0px;
    }
`,qS=b.p`
    width: 95%;

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        text-align: center;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,YS=b.ul`
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 3.2rem;
        line-height: 70px;
    }
`,GS=b.li`
    list-style-type: none;

    &:before {
        content: "•";
        color: #001830;
    }

    
`,KS=b.img`
    width: 150px;
    height: 140px;

    @media screen and (max-width: ${M.mobile}) {
        width: 98px;
        height: 98px;
    }

    @media screen and (max-width: ${M.tablet}) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        width: 200px;
        height: 200px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 300px;
        height: 300px;
    }
`,ns=({image:e,titleText:t,imageAlt:n,hasList:r,content:i,list:o})=>Q(VS,{children:[w(KS,{src:e,alt:n}),w(QS,{children:t}),r?w(YS,{children:o?o.map((l,a)=>w(GS,{children:l},a)):null}):w(qS,{children:i})]}),XS=b.div`
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
`,JS=b.div`
   

`,ZS=b.div`

    
`,ek=b.p`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 180px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 250px;
    }

    
`,tk=b.img`
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
`,nk=b.div`
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
`,Nf=b.div`
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

    @media screen and (min-width: ${M.largeDesktop}) {
        height: 45vh;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        height: 50vh;
    }
`,rk=()=>Q(dm,{children:[w(JS,{children:Q(XS,{children:[w(ek,{children:"Sobre N\xF3s"}),w(tk,{src:BS,alt:"imagem sobre n\xF3s"})]})}),w(ZS,{children:Q(nk,{children:[w(ns,{image:Pe.icons[0].image,imageAlt:Pe.icons[0].imageAlt,list:Pe.icons[0].list,hasList:Pe.icons[0].hasList,content:Pe.icons[0].content,titleText:Pe.icons[0].titleText}),w(Nf,{}),w(ns,{image:Pe.icons[1].image,imageAlt:Pe.icons[1].imageAlt,list:Pe.icons[1].list,hasList:Pe.icons[1].hasList,content:Pe.icons[1].content,titleText:Pe.icons[1].titleText}),w(Nf,{}),w(ns,{image:Pe.icons[2].image,imageAlt:Pe.icons[2].imageAlt,list:Pe.icons[2].list,hasList:Pe.icons[2].hasList,content:Pe.icons[2].content,titleText:Pe.icons[2].titleText})]})}),w(nv,{title:"Quem Somos",color:"#001830",hasButton:!1,hasCarousel:!0})]}),ik=b.div`
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
`;b.div`
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
`;b.div`
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
`;const ok=b.div`
    border-radius: 20px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        border-radius: 20px;
    }
`;b.p`
    width: 80%;

    @media screen and (max-width: 700px) {
        margin-top: 10%;
        width: 100%;
    }
`;b.h2`
    color: #001b40;
    font-size: 26px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 20px;
    }
`;const ak=b.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;var po=[];function lk(e){var t=X.exports.useState(),n=t[0],r=t[1];return X.exports.useEffect(function(){if(window.google){r(window.google);return}var i="https://maps.googleapis.com/maps/api/js?key="+e,o=po.find(function(s){return s.src===i}),l=function(){r(window.google)};if(o){o.addEventListener("load",l);return}var a=document.createElement("script");return a.src=i,a.async=!0,a.defer=!0,a.addEventListener("load",l),document.head.appendChild(a),po.push(a),function(){a.removeEventListener("load",l),a.remove(),po.splice(po.findIndex(function(s){return s.src===i}),1)}},[e]),n}function sk(e,t){var n=lk(e),r=X.exports.useRef(null),i=X.exports.useState(),o=i[0],l=i[1];return X.exports.useEffect(function(){!n||!r||l(new n.maps.Map(r.current,t))},[n,r]),{ref:r,map:o,google:n}}const uk=()=>{let e=-22.28613903496477,t=-42.542094971657946;const{ref:n,map:r,google:i}=sk("AIzaSyB5E7wzIaDoH_3qDfJ54az4JMOfLhJb290",{center:{lat:e,lng:t},zoom:16});if(r){var o={lat:e,lng:t};new i.maps.Marker({position:o,map:r,title:"A Serra J\xFAnior Engenharia \xE9 aqui!!"})}return console.log(e),console.log(r),console.log(i),w(ik,{children:w(ok,{children:w(ak,{ref:n})})})};function xu(e,t){return xu=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},xu(e,t)}var ck=function(e){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src=e,document.head&&document.head.appendChild(t)},dk=function(e){return Array.from(document.scripts).reduce(function(t,n){return t||e.test(n.src)},!1)},fk=/(http|https):\/\/(www)?.+\/recaptcha/,pk=["sitekey","theme","size","badge","tabindex","hl","isolated"],iv=function(e){var t,n;function r(){for(var i,o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(i=e.call.apply(e,[this].concat(l))||this).container=void 0,i.timer=void 0,i.state={instanceKey:Date.now(),ready:!1,rendered:!1,invisible:i.props.size==="invisible"},i._isAvailable=function(){var s;return Boolean((s=window.grecaptcha)==null?void 0:s.ready)},i._inject=function(){i.props.inject&&!dk(fk)&&ck("https://recaptcha.net/recaptcha/api.js?render=explicit"+(i.props.hl?"&hl="+i.props.hl:""))},i._prepare=function(){var s=i.props,u=s.explicit,c=s.onLoad;window.grecaptcha.ready(function(){i.setState({ready:!0},function(){u||i.renderExplicitly(),c&&c()})})},i._renderRecaptcha=function(s,u){return window.grecaptcha.render(s,u)},i._resetRecaptcha=function(){return window.grecaptcha.reset(i.state.instanceId)},i._executeRecaptcha=function(){return window.grecaptcha.execute(i.state.instanceId)},i._getResponseRecaptcha=function(){return window.grecaptcha.getResponse(i.state.instanceId)},i._onVerify=function(s){return i.props.onVerify(s)},i._onExpire=function(){return i.props.onExpire&&i.props.onExpire()},i._onError=function(){return i.props.onError&&i.props.onError()},i._stopTimer=function(){i.timer&&clearInterval(i.timer)},i.componentDidMount=function(){i._inject(),i._isAvailable()?i._prepare():i.timer=window.setInterval(function(){i._isAvailable()&&(i._prepare(),i._stopTimer())},500)},i.componentWillUnmount=function(){i._stopTimer()},i.renderExplicitly=function(){return new Promise(function(s,u){if(i.state.rendered)return u(new Error("This recaptcha instance has been already rendered."));if(!i.state.ready||!i.container)return u(new Error("Recaptcha is not ready for rendering yet."));var c=i._renderRecaptcha(i.container,{sitekey:i.props.sitekey,theme:i.props.theme,size:i.props.size,badge:i.state.invisible?i.props.badge:void 0,tabindex:i.props.tabindex,callback:i._onVerify,"expired-callback":i._onExpire,"error-callback":i._onError,isolated:i.state.invisible?i.props.isolated:void 0,hl:i.state.invisible?void 0:i.props.hl});i.setState({instanceId:c,rendered:!0},function(){i.props.onRender&&i.props.onRender(),s()})})},i.reset=function(){return new Promise(function(s,u){if(i.state.rendered)return i._resetRecaptcha(),s();u(new Error("This recaptcha instance did not render yet."))})},i.execute=function(){return new Promise(function(s,u){return i.state.invisible?(i.state.rendered&&(i._executeRecaptcha(),s()),u(new Error("This recaptcha instance did not render yet."))):u(new Error("Manual execution is only available for invisible size."))})},i.getResponse=function(){return new Promise(function(s,u){if(i.state.rendered)return s(i._getResponseRecaptcha());u(new Error("This recaptcha instance did not render yet."))})},i.render=function(){var s=w("div",{id:i.props.id,className:i.props.className,ref:function(u){return i.container=u}},i.state.instanceKey);return i.props.children?i.props.children({renderExplicitly:i.renderExplicitly,reset:i.reset,execute:i.execute,getResponse:i.getResponse,recaptchaComponent:s}):s},i}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,xu(t,n),r.getDerivedStateFromProps=function(i,o){var l=i.size==="invisible";return l!==o.invisible?{invisible:l}:null},r.prototype.componentDidUpdate=function(i){var o=this;pk.reduce(function(l,a){return o.props[a]!==i[a]?[].concat(l,[a]):l},[]).length>0&&this.setState({instanceKey:Date.now(),rendered:!1},function(){o.props.explicit||o.renderExplicitly()})},r}(X.exports.Component);iv.defaultProps={id:"",className:"g-recaptcha",theme:"light",size:"normal",badge:"bottomright",tabindex:0,explicit:!1,inject:!0,isolated:!1,hl:""};const hk="/Site-Serra/assets/agenda.6fff4078.svg",mk="/Site-Serra/assets/email.946bdff8.svg",vk="/Site-Serra/assets/localizacao.69982f44.svg",gk="/Site-Serra/assets/telefone.9ca94e72.svg",ho=b.span`
    align-self: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin-left: 5%;

    @media screen and (min-width: ${M.tablet}) {
        font-size: 20px;
        line-height: 20px;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
    }
    
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-weight: 300;
        font-size: 60px;
        line-height: 100px;
    }

`,mo=b.img`

    width: 3em;
    height: 3em;

    @media screen and (min-width: ${M.tablet}) {
        width: 4em;
        height: 4em;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        width: 4em;
        height: 4em;
    }
    
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 10em;
        height: 10em;
    }
   
`,yk=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;

    @media screen and (max-width: ${M.notebook}) {
        order: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: ${M.mobile}) {
        margin-top: 20%;
    }


    
`,wk=b.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,xk=b.div`
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
`,Sk=b.div`
    display: flex;
    margin-top: 5%;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5%;

    @media screen and (max-width: ${M.notebook}) {
        flex-direction: column;
    }

    @media screen and (max-width: ${M.largeMobile}) {
        width: 90%;
    } 

`,vo=b.div`
   display: flex;
   margin-bottom: 20%;
   width: 100%;
   

   @media screen and (min-width: ${M.notebook}) {
        margin-bottom: 10%;
    }
   @media screen and (min-width: ${M.largeDesktop}) {
        margin-bottom: 7%;
    }
   @media screen and (min-width: ${M.extraLargeDesktop}) {
        margin-bottom: 7%;
    }
`,kk=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D2D2D2;
    border-radius: 20px;
    flex-grow: 1;
    padding-bottom: 20px;

    @media screen and (max-width: ${M.notebook}) {
        width: 100%;
    }

    @media screen and (min-width: ${M.largeNotebook}) {
        width: 60%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 80%;
    }
    
`,Ek=b.div`
    margin-left: 10%;
    width: 100%;
`,Wr=b.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 10px;
    margin-bottom: 20px;
    
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 3rem;
        line-height: 25px;
    }

`,go=b.input`
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        padding-bottom: 10px;
        height: 4rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }

`,_k=b.button`
    margin-top: 20px;
    border: 0px;
    background: #FF7400;
    border-radius: 10px;
    width: 90%;
    height: 2.5rem;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 85%;
        height: 5rem;
        font-size: 2.5rem;
    }
`,bk=b.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

`,Ck=b.input`
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        height: 15rem;

        &::placeholder{
            font-size: 1.8rem;
        }
    }
`,Ok=b.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    @media screen and (max-width: ${M.notebook}) {
        width: 100%;
    }

    
`,Pk=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Tk=b.div`  

`,Mk=()=>Q(Pk,{children:[w(Tc,{titleWidth:"40%",text:"Entre em contato conosco!"}),Q(Sk,{children:[Q(yk,{children:[Q(vo,{children:[w(mo,{src:vk,alt:""}),w(ho,{children:"Rua Bonfim, 25 em Vila Am\xE9lia, "})]}),Q(vo,{children:[w(mo,{src:gk,alt:""}),w(ho,{children:"(22) 2533-2265"})]}),Q(vo,{children:[w(mo,{src:mk,alt:""}),w(ho,{children:"serrajr@iprj.uerj.br"})]}),Q(vo,{children:[w(mo,{src:hk,alt:""}),Q(ho,{children:["Hor\xE1rio de atendimento: ",w("br",{}),"Segunda a Sexta, das 09hrs ",w("br",{}),"\xE0s 17hrs."]})]})]}),w(Ok,{children:w(kk,{children:Q(Ek,{children:[w(Wr,{children:"Nome"}),w(go,{type:"text",placeholder:"Insira seu nome"}),w(Wr,{children:"Email"}),w(go,{type:"text",placeholder:"Insira seu email"}),w(Wr,{children:"Telefone"}),w(go,{type:"text",placeholder:"(XX) XXXXX-XXXX"}),w(Wr,{children:"Assunto"}),w(go,{type:"text",placeholder:"Digite o assunto"}),w(Wr,{children:"Mensagem"}),w(Ck,{type:"text",placeholder:"Digite a mensagem"}),w(Tk,{children:w(iv,{sitekey:"6Lef0HsiAAAAAPmdiuuS_Xz6_TA8fPzPzZdr9RC2"})}),w(bk,{children:w(_k,{children:"Enviar"})})]})})})]}),w(xk,{children:w(wk,{children:w(uk,{})})})]});var Su={exports:{}},In={},Nc={exports:{}},Lk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zk=Lk,jk=zk;function ov(){}function av(){}av.resetWarningCache=ov;var Dk=function(){function e(r,i,o,l,a,s){if(s!==jk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:av,resetWarningCache:ov};return n.PropTypes=n,n};Nc.exports=Dk();var ku={exports:{}},Pt={},Ea={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(d,f){return f.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function l(d){var f=d.offsetWidth<=0&&d.offsetHeight<=0;if(f&&!d.innerHTML)return!0;try{var h=window.getComputedStyle(d),g=h.getPropertyValue("display");return f?g!==r&&o(d,h):g===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var f=d,h=d.getRootNode&&d.getRootNode();f&&f!==document.body;){if(h&&f===h&&(f=h.host.parentNode),l(f))return!1;f=f.parentNode}return!0}function s(d,f){var h=d.nodeName.toLowerCase(),g=i.test(h)&&!d.disabled||h==="a"&&d.href||f;return g&&a(d)}function u(d){var f=d.getAttribute("tabindex");f===null&&(f=void 0);var h=isNaN(f);return(h||f>=0)&&s(d,!h)}function c(d){var f=[].slice.call(d.querySelectorAll("*"),0).reduce(function(h,g){return h.concat(g.shadowRoot?c(g.shadowRoot):[g])},[]);return f.filter(u)}e.exports=t.default})(Ea,Ea.exports);Object.defineProperty(Pt,"__esModule",{value:!0});Pt.resetState=Ak;Pt.log=Ik;Pt.handleBlur=Pi;Pt.handleFocus=Ti;Pt.markForFocusLater=Fk;Pt.returnFocus=Hk;Pt.popWithoutFocus=Uk;Pt.setupScopedFocus=Wk;Pt.teardownScopedFocus=Bk;var Rk=Ea.exports,$k=Nk(Rk);function Nk(e){return e&&e.__esModule?e:{default:e}}var br=[],ar=null,Eu=!1;function Ak(){br=[]}function Ik(){}function Pi(){Eu=!0}function Ti(){if(Eu){if(Eu=!1,!ar)return;setTimeout(function(){if(!ar.contains(document.activeElement)){var e=(0,$k.default)(ar)[0]||ar;e.focus()}},0)}}function Fk(){br.push(document.activeElement)}function Hk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{br.length!==0&&(t=br.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Uk(){br.length>0&&br.pop()}function Wk(e){ar=e,window.addEventListener?(window.addEventListener("blur",Pi,!1),document.addEventListener("focus",Ti,!0)):(window.attachEvent("onBlur",Pi),document.attachEvent("onFocus",Ti))}function Bk(){ar=null,window.addEventListener?(window.removeEventListener("blur",Pi),document.removeEventListener("focus",Ti)):(window.detachEvent("onBlur",Pi),document.detachEvent("onFocus",Ti))}var _u={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Ea.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function l(a,s){var u=(0,r.default)(a);if(!u.length){s.preventDefault();return}var c=void 0,d=s.shiftKey,f=u[0],h=u[u.length-1],g=o();if(a===g){if(!d)return;c=h}if(h===g&&!d&&(c=f),f===g&&d&&(c=h),c){s.preventDefault(),c.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),k=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!k){var m=u.indexOf(g);if(m>-1&&(m+=d?-1:1),c=u[m],typeof c>"u"){s.preventDefault(),c=d?h:f,c.focus();return}s.preventDefault(),c.focus()}}e.exports=t.default})(_u,_u.exports);var Tt={},Vk=function(){},Qk=Vk,Ct={},lv={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(lv);Object.defineProperty(Ct,"__esModule",{value:!0});Ct.canUseDOM=Ct.SafeNodeList=Ct.SafeHTMLCollection=void 0;var qk=lv.exports,Yk=Gk(qk);function Gk(e){return e&&e.__esModule?e:{default:e}}var ul=Yk.default,Kk=ul.canUseDOM?window.HTMLElement:{};Ct.SafeHTMLCollection=ul.canUseDOM?window.HTMLCollection:{};Ct.SafeNodeList=ul.canUseDOM?window.NodeList:{};Ct.canUseDOM=ul.canUseDOM;Ct.default=Kk;Object.defineProperty(Tt,"__esModule",{value:!0});Tt.resetState=tE;Tt.log=nE;Tt.assertNodeList=sv;Tt.setElement=rE;Tt.validateElement=Ac;Tt.hide=iE;Tt.show=oE;Tt.documentNotReadyOrSSRTesting=aE;var Xk=Qk,Jk=eE(Xk),Zk=Ct;function eE(e){return e&&e.__esModule?e:{default:e}}var dt=null;function tE(){dt&&(dt.removeAttribute?dt.removeAttribute("aria-hidden"):dt.length!=null?dt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(dt).forEach(function(e){return e.removeAttribute("aria-hidden")})),dt=null}function nE(){}function sv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function rE(e){var t=e;if(typeof t=="string"&&Zk.canUseDOM){var n=document.querySelectorAll(t);sv(n,t),t=n}return dt=t||dt,dt}function Ac(e){var t=e||dt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Jk.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function iE(e){var t=!0,n=!1,r=void 0;try{for(var i=Ac(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function oE(e){var t=!0,n=!1,r=void 0;try{for(var i=Ac(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var l=o.value;l.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function aE(){dt=null}var Tr={};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.resetState=lE;Tr.log=sE;var ai={},li={};function Af(e,t){e.classList.remove(t)}function lE(){var e=document.getElementsByTagName("html")[0];for(var t in ai)Af(e,ai[t]);var n=document.body;for(var r in li)Af(n,li[r]);ai={},li={}}function sE(){}var uE=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},cE=function(t,n){return t[n]&&(t[n]-=1),n},dE=function(t,n,r){r.forEach(function(i){uE(n,i),t.add(i)})},fE=function(t,n,r){r.forEach(function(i){cE(n,i),n[i]===0&&t.remove(i)})};Tr.add=function(t,n){return dE(t.classList,t.nodeName.toLowerCase()=="html"?ai:li,n.split(" "))};Tr.remove=function(t,n){return fE(t.classList,t.nodeName.toLowerCase()=="html"?ai:li,n.split(" "))};var Mr={};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.log=hE;Mr.resetState=mE;function pE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var uv=function e(){var t=this;pE(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},_a=new uv;function hE(){console.log("portalOpenInstances ----------"),console.log(_a.openInstances.length),_a.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function mE(){_a=new uv}Mr.default=_a;var Ic={};Object.defineProperty(Ic,"__esModule",{value:!0});Ic.resetState=wE;Ic.log=xE;var vE=Mr,gE=yE(vE);function yE(e){return e&&e.__esModule?e:{default:e}}var We=void 0,xt=void 0,jn=[];function wE(){for(var e=[We,xt],t=0;t<e.length;t++){var n=e[t];!n||n.parentNode&&n.parentNode.removeChild(n)}We=xt=null,jn=[]}function xE(){console.log("bodyTrap ----------"),console.log(jn.length);for(var e=[We,xt],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function If(){jn.length!==0&&jn[jn.length-1].focusContent()}function SE(e,t){!We&&!xt&&(We=document.createElement("div"),We.setAttribute("data-react-modal-body-trap",""),We.style.position="absolute",We.style.opacity="0",We.setAttribute("tabindex","0"),We.addEventListener("focus",If),xt=We.cloneNode(),xt.addEventListener("focus",If)),jn=t,jn.length>0?(document.body.firstChild!==We&&document.body.insertBefore(We,document.body.firstChild),document.body.lastChild!==xt&&document.body.appendChild(xt)):(We.parentElement&&We.parentElement.removeChild(We),xt.parentElement&&xt.parentElement.removeChild(xt))}gE.default.subscribe(SE);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(A){for(var I=1;I<arguments.length;I++){var Y=arguments[I];for(var z in Y)Object.prototype.hasOwnProperty.call(Y,z)&&(A[z]=Y[z])}return A},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},i=function(){function A(I,Y){for(var z=0;z<Y.length;z++){var C=Y[z];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(I,C.key,C)}}return function(I,Y,z){return Y&&A(I.prototype,Y),z&&A(I,z),I}}(),o=X.exports,l=Nc.exports,a=O(l),s=Pt,u=x(s),c=_u.exports,d=O(c),f=Tt,h=x(f),g=Tr,y=x(g),k=Ct,m=O(k),p=Mr,v=O(p);function x(A){if(A&&A.__esModule)return A;var I={};if(A!=null)for(var Y in A)Object.prototype.hasOwnProperty.call(A,Y)&&(I[Y]=A[Y]);return I.default=A,I}function O(A){return A&&A.__esModule?A:{default:A}}function P(A,I){if(!(A instanceof I))throw new TypeError("Cannot call a class as a function")}function _(A,I){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:A}function S(A,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);A.prototype=Object.create(I&&I.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(A,I):A.__proto__=I)}var L={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},j=function(I){return I.code==="Tab"||I.keyCode===9},$=function(I){return I.code==="Escape"||I.keyCode===27},N=0,R=function(A){S(I,A);function I(Y){P(this,I);var z=_(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,Y));return z.setOverlayRef=function(C){z.overlay=C,z.props.overlayRef&&z.props.overlayRef(C)},z.setContentRef=function(C){z.content=C,z.props.contentRef&&z.props.contentRef(C)},z.afterClose=function(){var C=z.props,D=C.appElement,U=C.ariaHideApp,V=C.htmlOpenClassName,H=C.bodyOpenClassName,E=C.parentSelector,q=E&&E().ownerDocument||document;H&&y.remove(q.body,H),V&&y.remove(q.getElementsByTagName("html")[0],V),U&&N>0&&(N-=1,N===0&&h.show(D)),z.props.shouldFocusAfterRender&&(z.props.shouldReturnFocusAfterClose?(u.returnFocus(z.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),z.props.onAfterClose&&z.props.onAfterClose(),v.default.deregister(z)},z.open=function(){z.beforeOpen(),z.state.afterOpen&&z.state.beforeClose?(clearTimeout(z.closeTimer),z.setState({beforeClose:!1})):(z.props.shouldFocusAfterRender&&(u.setupScopedFocus(z.node),u.markForFocusLater()),z.setState({isOpen:!0},function(){z.openAnimationFrame=requestAnimationFrame(function(){z.setState({afterOpen:!0}),z.props.isOpen&&z.props.onAfterOpen&&z.props.onAfterOpen({overlayEl:z.overlay,contentEl:z.content})})}))},z.close=function(){z.props.closeTimeoutMS>0?z.closeWithTimeout():z.closeWithoutTimeout()},z.focusContent=function(){return z.content&&!z.contentHasFocus()&&z.content.focus({preventScroll:!0})},z.closeWithTimeout=function(){var C=Date.now()+z.props.closeTimeoutMS;z.setState({beforeClose:!0,closesAt:C},function(){z.closeTimer=setTimeout(z.closeWithoutTimeout,z.state.closesAt-Date.now())})},z.closeWithoutTimeout=function(){z.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},z.afterClose)},z.handleKeyDown=function(C){j(C)&&(0,d.default)(z.content,C),z.props.shouldCloseOnEsc&&$(C)&&(C.stopPropagation(),z.requestClose(C))},z.handleOverlayOnClick=function(C){z.shouldClose===null&&(z.shouldClose=!0),z.shouldClose&&z.props.shouldCloseOnOverlayClick&&(z.ownerHandlesClose()?z.requestClose(C):z.focusContent()),z.shouldClose=null},z.handleContentOnMouseUp=function(){z.shouldClose=!1},z.handleOverlayOnMouseDown=function(C){!z.props.shouldCloseOnOverlayClick&&C.target==z.overlay&&C.preventDefault()},z.handleContentOnClick=function(){z.shouldClose=!1},z.handleContentOnMouseDown=function(){z.shouldClose=!1},z.requestClose=function(C){return z.ownerHandlesClose()&&z.props.onRequestClose(C)},z.ownerHandlesClose=function(){return z.props.onRequestClose},z.shouldBeClosed=function(){return!z.state.isOpen&&!z.state.beforeClose},z.contentHasFocus=function(){return document.activeElement===z.content||z.content.contains(document.activeElement)},z.buildClassName=function(C,D){var U=(typeof D>"u"?"undefined":r(D))==="object"?D:{base:L[C],afterOpen:L[C]+"--after-open",beforeClose:L[C]+"--before-close"},V=U.base;return z.state.afterOpen&&(V=V+" "+U.afterOpen),z.state.beforeClose&&(V=V+" "+U.beforeClose),typeof D=="string"&&D?V+" "+D:V},z.attributesFromObject=function(C,D){return Object.keys(D).reduce(function(U,V){return U[C+"-"+V]=D[V],U},{})},z.state={afterOpen:!1,beforeClose:!1},z.shouldClose=null,z.moveFromContentToOverlay=null,z}return i(I,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(z,C){this.props.isOpen&&!z.isOpen?this.open():!this.props.isOpen&&z.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!C.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var z=this.props,C=z.appElement,D=z.ariaHideApp,U=z.htmlOpenClassName,V=z.bodyOpenClassName,H=z.parentSelector,E=H&&H().ownerDocument||document;V&&y.add(E.body,V),U&&y.add(E.getElementsByTagName("html")[0],U),D&&(N+=1,h.hide(C)),v.default.register(this)}},{key:"render",value:function(){var z=this.props,C=z.id,D=z.className,U=z.overlayClassName,V=z.defaultStyles,H=z.children,E=D?{}:V.content,q=U?{}:V.overlay;if(this.shouldBeClosed())return null;var F={ref:this.setOverlayRef,className:this.buildClassName("overlay",U),style:n({},q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},T=n({id:C,ref:this.setContentRef,style:n({},E,this.props.style.content),className:this.buildClassName("content",D),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),J=this.props.contentElement(T,H);return this.props.overlayElement(F,J)}}]),I}(o.Component);R.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},R.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(m.default),a.default.instanceOf(k.SafeHTMLCollection),a.default.instanceOf(k.SafeNodeList),a.default.arrayOf(a.default.instanceOf(m.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=R,e.exports=t.default})(ku,ku.exports);function cv(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function dv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r!=null?r:null}this.setState(t.bind(this))}function fv(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}cv.__suppressDeprecationWarning=!0;dv.__suppressDeprecationWarning=!0;fv.__suppressDeprecationWarning=!0;function kE(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=cv,t.componentWillReceiveProps=dv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=fv;var a=t.componentDidUpdate;t.componentDidUpdate=function(u,c,d){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,u,c,f)}}return e}const EE=Object.freeze(Object.defineProperty({__proto__:null,polyfill:kE},Symbol.toStringTag,{value:"Module"})),_E=tp(EE);Object.defineProperty(In,"__esModule",{value:!0});In.bodyOpenClassName=In.portalClassName=void 0;var Ff=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),pv=X.exports,ba=Fi(pv),CE=Tu.exports,Ca=Fi(CE),OE=Nc.exports,re=Fi(OE),PE=ku.exports,Hf=Fi(PE),TE=Tt,ME=zE(TE),an=Ct,Uf=Fi(an),LE=_E;function zE(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Fi(e){return e&&e.__esModule?e:{default:e}}function jE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function DE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var RE=In.portalClassName="ReactModalPortal",$E=In.bodyOpenClassName="ReactModal__Body--open",bn=an.canUseDOM&&Ca.default.createPortal!==void 0,Bf=function(t){return document.createElement(t)},Vf=function(){return bn?Ca.default.createPortal:Ca.default.unstable_renderSubtreeIntoContainer};function yo(e){return e()}var Hi=function(e){DE(t,e);function t(){var n,r,i,o;jE(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=Wf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!bn&&Ca.default.unmountComponentAtNode(i.node);var u=yo(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var c=Vf(),d=c(i,ba.default.createElement(Hf.default,Ff({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(d)},r),Wf(i,o)}return bE(t,[{key:"componentDidMount",value:function(){if(!!an.canUseDOM){bn||(this.node=Bf("div")),this.node.className=this.props.portalClassName;var r=yo(this.props.parentSelector);r.appendChild(this.node),!bn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=yo(r.parentSelector),o=yo(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(!!an.canUseDOM){var l=this.props,a=l.isOpen,s=l.portalClassName;r.portalClassName!==s&&(this.node.className=s);var u=o.prevParent,c=o.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!a)&&!bn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!an.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!an.canUseDOM||!bn)return null;!this.node&&bn&&(this.node=Bf("div"));var r=Vf();return r(ba.default.createElement(Hf.default,Ff({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){ME.setElement(r)}}]),t}(pv.Component);Hi.propTypes={isOpen:re.default.bool.isRequired,style:re.default.shape({content:re.default.object,overlay:re.default.object}),portalClassName:re.default.string,bodyOpenClassName:re.default.string,htmlOpenClassName:re.default.string,className:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),overlayClassName:re.default.oneOfType([re.default.string,re.default.shape({base:re.default.string.isRequired,afterOpen:re.default.string.isRequired,beforeClose:re.default.string.isRequired})]),appElement:re.default.oneOfType([re.default.instanceOf(Uf.default),re.default.instanceOf(an.SafeHTMLCollection),re.default.instanceOf(an.SafeNodeList),re.default.arrayOf(re.default.instanceOf(Uf.default))]),onAfterOpen:re.default.func,onRequestClose:re.default.func,closeTimeoutMS:re.default.number,ariaHideApp:re.default.bool,shouldFocusAfterRender:re.default.bool,shouldCloseOnOverlayClick:re.default.bool,shouldReturnFocusAfterClose:re.default.bool,preventScroll:re.default.bool,parentSelector:re.default.func,aria:re.default.object,data:re.default.object,role:re.default.string,contentLabel:re.default.string,shouldCloseOnEsc:re.default.bool,overlayRef:re.default.func,contentRef:re.default.func,id:re.default.string,overlayElement:re.default.func,contentElement:re.default.func};Hi.defaultProps={isOpen:!1,portalClassName:RE,bodyOpenClassName:$E,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ba.default.createElement("div",t,n)},contentElement:function(t,n){return ba.default.createElement("div",t,n)}};Hi.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,LE.polyfill)(Hi);In.default=Hi;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=In,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Su,Su.exports);const hv=Oa(Su.exports),NE=b.div`
    display: flex;
    flex-direction: column;
`,AE=b.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100%;
`,IE=b.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,rs=b.h2`
    
`,FE=b.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
`,HE=b.a`
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
`,UE=b.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,WE=b.img`
    width: 300px;

    @media screen and (max-width: ${M.largeMobile}){
        width: 200px;
    }
`,BE=b.button`
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
`,Qf=b.p`

`,VE=b.hr`
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
    height: 2px;
    width: 100%;
    border: 0;
`,QE=b.ul`
    
`,qE=b.li`
    list-style: none;
`;b.button`
    color: #FF7400;

    background-color: #fff;
    border: 2px solid #FF7400;
    justify-self: center;
    align-self: center;
    font-size: 1.4em;
    padding: 5px 10px;
    border-radius: 7px;

    &:hover{
        border: 2px solid #fff;
        background-color: #FF7400;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }
`;hv.setAppElement("#root");const YE=({status:e,setStatus:t,data:n})=>{const r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60vw",height:"70vh",overflow:"scroll",color:"#001830",paddingTop:0},overlay:{backgroundColor:"#0000004f"}};return n?w(hv,{isOpen:e,onRequestClose:()=>t(!1),contentLabel:"Example Modal",style:r,children:Q(NE,{children:[Q(AE,{children:[Q(IE,{children:[w("h1",{children:n.title}),w(BE,{onClick:()=>t(!1),children:"X"})]}),w(VE,{})]}),w(rs,{children:"Resumo do projeto"}),Q(UE,{children:[w(WE,{src:n.image,alt:n.title}),w(Qf,{children:n.content})]}),w(rs,{children:"Membros envolvidos"}),w(QE,{children:n.members.map((i,o)=>w(qE,{children:i},o))}),w(rs,{children:"Depoimento de clientes"}),n.opinions.map((i,o)=>w(Qf,{children:i},o)),n.acess?w(FE,{children:w(HE,{target:"_blank",rel:"noopener noreferrer",href:n.acess,children:"Acesse o projeto"})}):null]})}):null},GE=b.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: transparent;
`,KE=b.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${M.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,XE=b.section`
    width: 85%;
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  
    background-color: lightgrey;
    border-radius: 3rem;
    
    @media screen and (max-width: ${M.tablet}) {
        width: 80%;
        min-height: 100vh;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        min-height: 65vh;
    }
`,JE=b.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin-bottom: 3%;

    @media screen and (max-width: ${M.notebook}) {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 10px 0;
    }
`,ZE=b.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    @media screen and (max-width: ${M.notebook}) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column !important;
    }
`,e_=b.img`
    width: 60%;
    max-height: 40vh;
    border-radius: 20px;

    @media screen and (max-width: ${M.tablet}) {    
        width: 50%;
        max-height: 40vh;
        border-radius: 20px;
    }
`,t_=b.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${M.notebook}) {    
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
    }
    
`,n_=b.span`
    width: 90%;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);


    @media screen and (max-width: ${M.notebook}) {
        width: 85%;
        font-size: 1rem;
        color: var(--blue);
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 2.0rem;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 3.5rem;
    }
`,r_=b.button`
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

    @media screen and (max-width: ${M.largeMobile}) {
        width: 80%;
        font-size: 1rem;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        width: 90%;
        font-size: 2rem;
    }

`,i_=b.div`
    display:flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    text-align: justify;
    flex-direction: column;

    @media screen and (max-width: ${M.notebook}) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    
`,o_=b.div`
    display: inline-block;
    ${({containerWidth:e})=>e?`width: ${e}`:"width: 100%"}
    
`,mv=e=>{const t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0},[n,r]=X.exports.useState(!1),[i,o]=X.exports.useState();return w(o_,{containerWidth:e.width,children:w(tv,{...t,children:e.carouselData.map((l,a)=>w(GE,{children:w(KE,{children:Q(XE,{children:[w(JE,{children:w(Tc,{text:l.title})}),Q(ZE,{children:[w(t_,{children:w(e_,{src:l.image,alt:l.title})}),Q(i_,{children:[w(n_,{children:l.content}),w(r_,{onClick:()=>{r(!n),o(l)},children:"Saiba Mais"}),w(YE,{data:i,status:n,setStatus:r})]})]})]})})},a))})})},a_="/Site-Serra/assets/marmitex.857922f9.svg",l_={mechanicsProjects:[{title:"Projeto Marmitex",image:a_,content:"O problema apresentado foi a necessidade do aumento do rendimento da m\xE1quina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mec\xE2nico 3D e 2D de um maquin\xE1rio de fabrica\xE7\xE3o de quentinhas j\xE1 existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da m\xE1quina montada e uma ficha t\xE9cnica com o desenho mec\xE2nico.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto Lar Abrigo Amor a Jesus",image:"https://cdn.discordapp.com/attachments/816415993680625714/1029096504603967578/mec-rodas.PNG",content:"O problema enfrentado foi em rela\xE7\xE3o a utiliza\xE7\xE3o das cadeiras de rodas presente no abrigo, o qual foi constatado alto \xEDndice de oxida\xE7\xE3o e/ou rompimentos de suas pe\xE7as. Ap\xF3s a realiza\xE7\xE3o de testes em laborat\xF3rio, quanto a oxida\xE7\xE3o e an\xE1lise estrutral e testes no pr\xF3prio equipamento foi desenvolvido um manual de uso com a especifica\xE7\xE3o de cada cadeira com o objetivo de aumento da durabilidade.",members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]}]},wo="/Site-Serra/assets/seta.7067b273.svg",s_="/Site-Serra/assets/presentation-image.0aa1e0e9.svg",u_="/Site-Serra/assets/hammer-icon.c370caae.svg",c_="/Site-Serra/assets/bot-icon.237c34bd.svg",d_="/Site-Serra/assets/3d-icon.6c010241.svg",f_="/Site-Serra/assets/drawing-icon.462650d6.svg",vv="/Site-Serra/assets/arrow-up.1b45090f.svg",p_="/Site-Serra/assets/background-mecanica.81e45f94.svg",h_=b.div`
`,m_=b.div`
    background-image: url(${p_});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: top;
    padding-top: 2%;

    
`,v_=b.div`
    background-color: #04ADD7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${M.largeMobile}) {
        flex-wrap: wrap;
    } 
`,xo=b.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 22px;
    }
    
    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }

    
`,So=b.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${M.largeMobile}) {
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
        width: 50%;
        height: 30vh;
        line-height: 70px;
    }

    
`,qf=b.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${M.largeMobile}) {
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
`,g_=b.div`
    
`,y_=b.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-top: 0;
    margin-bottom: 0px;

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 100px;
    }
`,w_=b.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${M.largeMobile}) {
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,Yf=b.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${M.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }  
    
    @media screen and (min-width: ${M.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,ko=b.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${M.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${M.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        margin-bottom: 10%;
        width: 50%;
    }

`,Xt=b.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${M.tablet}) {
        width: 10%;
    } 
`,Eo=b.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,_o=b.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,x_=b.img`
    width: 40%;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 80%;
    }
`,S_=b.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        height: 6px;
    }
`,k_=b.a`
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

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${M.largeDesktop}) {
        font-size: 40px;
        border: 4px solid #04ADD7;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #04ADD7;
    }
`,E_=b.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;

    @media screen and (max-width: ${M.largeMobile}) {
        margin: 25px 0px;
    }
`,__=b.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
`;b.img`
    margin-right: 2%;
    width: 3.5rem;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 2.5rem;
    }
`;const b_=b.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 2rem;
    }
`,C_=b.div`
    margin-top: 3%;

    @media screen and (max-width: ${M.largeMobile}) {
        margin-top: 20%;
    }
`,O_=()=>Q(h_,{children:[Q(v_,{children:[Q(g_,{children:[w(qf,{children:"Engenharia"}),w(qf,{children:"Mec\xE2nica"})]}),w(x_,{src:s_,alt:"Imagem de Mec\xE2nica"})]}),Q(m_,{children:[w(y_,{children:"Carta de Servi\xE7os"}),w(w_,{children:"Engenharia Mec\xE2nica"}),Q(Yf,{children:[Q(ko,{children:[Q(Eo,{children:[w(Xt,{src:u_,alt:"Imagem Sistemas"}),w(xo,{children:"Projeto e Manuten\xE7\xE3o de Equipamentos"})]}),Q(_o,{children:[w(Xt,{src:wo,alt:"Seta"}),w(So,{children:"Como nosso principal servi\xE7o, desenvolvemos os mais diversos equipamentos para atender cada demanda da melhor maneira. Assim, nosso time ir\xE1 estudar a fundo a necessidade do cliente para ent\xE3o passar por cada fase do projeto, apresentando um estudo minucioso, seu desenho t\xE9cnico, op\xE7\xF5es de prot\xF3tipo e ent\xE3o colocando na pr\xE1tica e suas necess\xE1rias manuten\xE7\xF5es."})]})]}),Q(ko,{children:[Q(Eo,{children:[w(Xt,{src:f_,alt:"Imagem Site"}),w(xo,{children:"Desenho T\xE9cnico e Industrial"})]}),Q(_o,{children:[w(Xt,{src:wo,alt:"Seta"}),w(So,{children:"Com aux\xEDlio de programas CAD, a Serra Jr oferece servi\xE7os de desenhos de pe\xE7as e maquin\xE1rios, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necess\xE1rias nesse processo t\xE3o significante de um projeto."})]})]})]}),Q(Yf,{children:[Q(ko,{children:[Q(Eo,{children:[w(Xt,{src:c_,alt:"Imagem Sistemas"}),w(xo,{children:"Projetos de Automa\xE7\xE3o"})]}),Q(_o,{children:[w(Xt,{src:wo,alt:"Seta"}),w(So,{children:"A partir da demanda do cliente desenvolvemos projetos para automa\xE7\xE3o e otimiza\xE7\xE3o de tarefas. Tendo em vista que o tempo \xE9 um recurso precioso e precisa ser sempre melhor aproveitado, nosso time ir\xE1 desenvolver o melhor estudo para otimiza\xE7\xE3o do seu projeto al\xE9m de cria\xE7\xE3o de prot\xF3tipos usando microcontroladores, CLP's e outras tecnologias da ind\xFAstria 4.0."})]})]}),Q(ko,{children:[Q(Eo,{children:[w(Xt,{src:d_,alt:"Imagem Site"}),w(xo,{children:"Prototipagem"})]}),Q(_o,{children:[w(Xt,{src:wo,alt:"Seta"}),w(So,{children:"A experimenta\xE7\xE3o de ideias iniciais de um projeto \xE9 uma fase muito importante de seu desenvolvimento, e por isso a utiliza\xE7\xE3o de prot\xF3tipos antes do projeto final \xE9 essencial. Na Serra Jr contamos com equipamentos como impressoras 3D e CNC de corte a laser onde nossos membros capacitados podem desenvolver o melhor prot\xF3tipo a baixo custo de seu projeto."})]})]})]})]}),w(S_,{}),w(E_,{children:w(k_,{href:"http://127.0.0.1:5173/Site-Serra/contatos",children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(C_,{children:w(mv,{carouselData:l_.mechanicsProjects})}),w(__,{children:w(b_,{onClick:()=>window.scrollTo(0,0),src:vv,alt:"ScrollUp"})})]}),P_="/Site-Serra/assets/friburguense.ba8886f5.svg",T_="/Site-Serra/assets/projeto-tmf.f6316197.svg",M_={computingProjects:[{title:"Projeto Friburguense",image:P_,content:`O projeto consistiu no desenvolvimento de um Website voltado \xE0 aquisi\xE7\xE3o de planos 
            de s\xF3cio torcedor do Friburguense Atl\xE9tico Clube. O site cont\xE9m as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Al\xE9m disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibi\xE7\xE3o de seus logotipos.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"]},{title:"Projeto TMF",image:T_,content:`O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibi\xE7\xE3o 
            de produtos e servi\xE7os oferecidos pela empresa. O site conta com o cat\xE1logo de produtos, al\xE9m da 
            possibilidade de agendamento de or\xE7amento dos servi\xE7os oferecidos pela funcionalidade de 
            envio de e-mails. Tamb\xE9m h\xE1 p\xE1ginas de informa\xE7\xF5es sobre a empresa e um mapa integrado exibindo a 
            localiza\xE7\xE3o da mesma.`,members:["alguem","alguem","alguem","alguem","alguem","alguem"],opinions:["dskadksoapdka","msakdlmsakdlas","dsaklmsakdlsmadlas","sal\xE7ds,a\xE7lds,al\xE7dsa,\xE7"],acess:"https://usinagemtmf.com.br/"}]},L_="/Site-Serra/assets/presentation-image.3bba7d23.svg",z_="/Site-Serra/assets/desenvolvimento-sistemas.85c54f6d.svg",j_="/Site-Serra/assets/desenvolvimento-sites.cef968a9.svg",Gf="/Site-Serra/assets/seta.13cafa5d.svg",D_="/Site-Serra/assets/css-icon.e1a4dd78.svg",R_="/Site-Serra/assets/html-icon.e0dc6b68.svg",$_="/Site-Serra/assets/js-icon.f4d001af.svg",N_="/Site-Serra/assets/react-icon.f937629c.svg",A_="/Site-Serra/assets/ts-icon.bf061be4.svg",I_="/Site-Serra/assets/styled-icon.35b18102.svg",F_="/Site-Serra/assets/background-computacao.dbcf66d3.svg",H_=b.div`
    scroll-behavior: smooth;

`,U_=b.div`
    background-color: #FF7400;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px 0px 100px;

    @media screen and (max-width: ${M.largeMobile}) {
        flex-wrap: wrap;
    } 
`,W_=b.img`
    margin-top: 10px;
    width: 40%;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 70%;
    }
`,B_=b.div`
    padding-top: 2%;
    background-image: url(${F_});
    background-repeat: no-repeat; 
    background-size: cover; 
`,is=b.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    text-align: center;  
    color: #FFFFFF;
    margin: 20px;

    @media screen and (max-width: ${M.largeMobile}) {
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
`,V_=b.div`
`,Q_=b.h1`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 76px;
    line-height: 113px;
    margin-bottom: 0px;

    @media screen and (max-width: ${M.largeMobile}) {
        font-size: 38px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 100px;
    }
`,q_=b.h2`
    text-align: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 56px;

    @media screen and (max-width: ${M.largeMobile}) {
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
    }

       
`,Y_=b.div`
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: ${M.largeMobile}) {
        flex-directiom: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }    

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        margin-left: 10%;
    }
`,Kf=b.div`
    margin-top: 3%;
    margin-bottom: 3%;

    @media screen and (max-width: ${M.largeMobile}) {
        margin-bottom: 12%;
    }

    @media screen and (max-width: ${M.tablet}) {
        width: 40%;
        margin-bottom: 12%;
    } 

    @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 95%;
    }

`,bo=b.img`
    display: flex;
    width: 3.5vw;
    margin-right: 4%;

    @media screen and (max-width: ${M.largeMobile}) {
        width: 8%;
        margin-left: 5%;
    }

    @media screen and (max-width: ${M.tablet}) {
        width: 10%;
    } 
`,Xf=b.div`
    display: flex;
    min-height: 20%;
    margin-bottom: 5%;
    align-items: center;

`,Jf=b.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`,Zf=b.h3`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 22px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: ${M.largeDesktop}){
        font-size: 2em;
        line-height: 40px;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
        
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
        line-height: 60px;
    }
`,ep=b.p`
    width: 400px;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    margin-top: 0px;

    @media screen and (max-width: ${M.largeMobile}) {
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

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 60px;
        width: 60%;
        height: 30vh;
        line-height: 70px;
    }

    
`,G_=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


`;b.div`
    width: 100%;
    
`;const Vn=b.img`

    @media screen and (max-width: ${M.tablet}){
        width: 50px;
        height: 50px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        width: 200px;
        height: 200px;
        margin-bottom: 2%;
    }
`;b.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 920px;
    height: 30%;
    
`;b.img`
    margin-right: 2%;
    width: 3.5rem;
`;const K_=b.img`
    margin-right: 2%;
    width: 3rem;
    height: 3rem;
`,X_=b.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    
`,J_=b.div`
    margin-top: 3%;
`,Z_=b.a`
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

    @media screen and (max-width: ${M.tablet}) {
        width: 80%;
        font-size: 1.2em;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    @media screen and (min-width: 2048px) {
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (min-width: ${M.extraLargeDesktop}) {
        font-size: 50px;
        border: 6px solid #FD6300;
    }

    
`,eb=b.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: 0px;
    width: 100%;
    height: 30%;
`,tb=b.hr`
    margin: 0px;   
    height: 4px;
    margin: 0px;
    border: 0;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`,nb=()=>Q(H_,{children:[Q(U_,{children:[Q(V_,{children:[w(is,{children:"Engenharia"}),w(is,{children:"de"}),w(is,{children:"Computa\xE7\xE3o"})]}),w(W_,{src:L_,alt:"Imagem de Computa\xE7\xE3o"})]}),Q(B_,{children:[w(Q_,{children:"Carta de Servi\xE7os"}),w(q_,{children:"Engenharia de Computa\xE7\xE3o"}),Q(Y_,{children:[Q(Kf,{children:[Q(Xf,{children:[w(bo,{src:j_,alt:"Imagem Site"}),w(Zf,{children:"Desenvolvimento de Websites"})]}),Q(Jf,{children:[w(bo,{src:Gf,alt:"Seta"}),w(ep,{children:"Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu neg\xF3cio. Utilizamos das ferramentas mais modernas do mercado para criar uma solu\xE7\xE3o \xFAnica que ir\xE1 alavancar a visibilidade do seu produto!"})]})]}),Q(Kf,{children:[Q(Xf,{children:[w(bo,{src:z_,alt:"Imagem Sistemas"}),w(Zf,{children:"Desenvolvimento de Sistemas Web"})]}),Q(Jf,{children:[w(bo,{src:Gf,alt:"Seta"}),w(ep,{children:"Com aux\xEDlio das mais completas linguagens de programa\xE7\xE3o, fornecemos aplicativos e sistemas pr\xF3prios para a sua empresa que ir\xE3o acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu neg\xF3cio."})]})]})]}),Q(G_,{children:[w(Vn,{src:R_,alt:"ImagemHtml"}),w(Vn,{src:D_,alt:"Imagemcss"}),w(Vn,{src:$_,alt:"ImagemJS"}),w(Vn,{src:A_,alt:"ImagemTS"}),w(Vn,{src:N_,alt:"ImagemREACT"}),w(Vn,{src:I_,alt:"ImagemStyled"})]})]}),w(tb,{}),w(eb,{children:w(Z_,{href:"http://127.0.0.1:5173/Site-Serra/contatos",children:"Quer colocar um projeto em pr\xE1tica? \u2192"})}),w(J_,{children:w(mv,{carouselData:M_.computingProjects})}),w(X_,{children:w(K_,{onClick:()=>window.scrollTo(0,0),src:vv,alt:"ScrollUp"})})]}),rb=()=>Q(dm,{children:[w(X1,{}),Q(M1,{children:[w(Qn,{path:"/",element:w(WS,{})}),w(Qn,{path:"/computacao",element:w(nb,{})}),w(Qn,{path:"/mecanica",element:w(O_,{})}),w(Qn,{path:"/quemSomos",element:w(rk,{})}),w(Qn,{path:"/contatos",element:w(Mk,{})})]}),w(e1,{})]});function ib(){return w("div",{className:"App",children:w(j1,{basename:"/Site-Serra",children:w(rb,{})})})}os.createRoot(document.getElementById("root")).render(w(Li.StrictMode,{children:w(ib,{})}));
