(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I={},Hv={get exports(){return I},set exports(t){I=t}},ac={},ve={},Gv={get exports(){return ve},set exports(t){ve=t}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),Wv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Xv=Symbol.for("react.strict_mode"),$v=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Jv=Symbol.for("react.lazy"),Wh=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var M0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,T0={};function sa(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||M0}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b0(){}b0.prototype=sa.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||M0}var Nf=Lf.prototype=new b0;Nf.constructor=Lf;E0(Nf,sa.prototype);Nf.isPureReactComponent=!0;var jh=Array.isArray,w0=Object.prototype.hasOwnProperty,If={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)w0.call(e,i)&&!A0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:mo,type:t,key:s,ref:a,props:r,_owner:If.current}}function t_(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case mo:case Wv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Lc(a,0):i,jh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Uf(r)&&(r=t_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Lc(s,o);a+=hl(s,e,n,l,r)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Lc(s,o++),a+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Co(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},pl={transition:null},r_={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:If};et.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=sa;et.Fragment=jv;et.Profiler=$v;et.PureComponent=Lf;et.StrictMode=Xv;et.Suspense=Zv;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=E0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=If.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)w0.call(e,l)&&!A0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:mo,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yv,_context:t},t.Consumer=t};et.createElement=R0;et.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Kv,render:t}};et.isValidElement=Uf;et.lazy=function(t){return{$$typeof:Jv,_payload:{_status:-1,_result:t},_init:i_}};et.memo=function(t,e){return{$$typeof:Qv,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};et.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};et.useCallback=function(t,e){return fn.current.useCallback(t,e)};et.useContext=function(t){return fn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};et.useEffect=function(t,e){return fn.current.useEffect(t,e)};et.useId=function(){return fn.current.useId()};et.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return fn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};et.useRef=function(t){return fn.current.useRef(t)};et.useState=function(t){return fn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return fn.current.useTransition()};et.version="18.2.0";(function(t){t.exports=et})(Gv);const sr=Vv(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_=ve,a_=Symbol.for("react.element"),o_=Symbol.for("react.fragment"),l_=Object.prototype.hasOwnProperty,c_=s_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u_={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)l_.call(e,i)&&!u_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a_,type:t,key:s,ref:a,props:r,_owner:c_.current}}ac.Fragment=o_;ac.jsx=C0;ac.jsxs=C0;(function(t){t.exports=ac})(Hv);var Vu={},Hu={},d_={get exports(){return Hu},set exports(t){Hu=t}},Un={},Gu={},f_={get exports(){return Gu},set exports(t){Gu=t}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var Y=D.length;D.push(O);e:for(;0<Y;){var oe=Y-1>>>1,ie=D[oe];if(0<r(ie,O))D[oe]=O,D[Y]=ie,Y=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],Y=D.pop();if(Y!==O){D[0]=Y;e:for(var oe=0,ie=D.length,Ue=ie>>>1;oe<Ue;){var Be=2*(oe+1)-1,Ne=D[Be],K=Be+1,te=D[K];if(0>r(Ne,Y))K<ie&&0>r(te,Ne)?(D[oe]=te,D[K]=Y,oe=K):(D[oe]=Ne,D[Be]=Y,oe=Be);else if(K<ie&&0>r(te,Y))D[oe]=te,D[K]=Y,oe=K;else break e}}return O}function r(D,O){var Y=D.sortIndex-O.sortIndex;return Y!==0?Y:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=D)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function M(D){if(S=!1,v(D),!_)if(n(l)!==null)_=!0,$(C);else{var O=n(c);O!==null&&q(M,O.startTime-D)}}function C(D,O){_=!1,S&&(S=!1,u(T),T=-1),p=!0;var Y=h;try{for(v(O),f=n(l);f!==null&&(!(f.expirationTime>O)||D&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var ie=oe(f.expirationTime<=O);O=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&i(l),v(O)}else i(l);f=n(l)}if(f!==null)var Ue=!0;else{var Be=n(c);Be!==null&&q(M,Be.startTime-O),Ue=!1}return Ue}finally{f=null,h=Y,p=!1}}var b=!1,R=null,T=-1,m=5,y=-1;function P(){return!(t.unstable_now()-y<m)}function F(){if(R!==null){var D=t.unstable_now();y=D;var O=!0;try{O=R(!0,D)}finally{O?B():(b=!1,R=null)}}else b=!1}var B;if(typeof g=="function")B=function(){g(F)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ee=j.port2;j.port1.onmessage=F,B=function(){ee.postMessage(null)}}else B=function(){x(F,0)};function $(D){R=D,b||(b=!0,B())}function q(D,O){T=x(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,$(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var Y=h;h=O;try{return D()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=h;h=D;try{return O()}finally{h=Y}},t.unstable_scheduleCallback=function(D,O,Y){var oe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,D){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Y+ie,D={id:d++,callback:O,priorityLevel:D,startTime:Y,expirationTime:ie,sortIndex:-1},Y>oe?(D.sortIndex=Y,e(c,D),n(l)===null&&D===n(c)&&(S?(u(T),T=-1):S=!0,q(M,Y-oe))):(D.sortIndex=ie,e(l,D),_||p||(_=!0,$(C))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var O=h;return function(){var Y=h;h=O;try{return D.apply(this,arguments)}finally{h=Y}}}})(P0);(function(t){t.exports=P0})(f_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=ve,Ln=Gu;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,Xa={};function ns(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Xa[t]=e,t=0;t<e.length;t++)L0.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,h_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},Yh={};function p_(t){return Wu.call(Yh,t)?!0:Wu.call($h,t)?!1:h_.test(t)?Yh[t]=!0:($h[t]=!0,!1)}function m_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g_(t,e,n,i){if(e===null||typeof e>"u"||m_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function Of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,Of);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,Of);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,Of);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function kf(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g_(e,n,r,i)&&(n=null),i||r===null?p_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),U0=Symbol.for("react.offscreen"),qh=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Nc;function Pa(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Ic=!1;function Uc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function x_(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case ju:return"Profiler";case Bf:return"StrictMode";case Xu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I0:return(t.displayName||"Context")+".Consumer";case N0:return(t._context.displayName||"Context")+".Provider";case zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function v_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function __(t){var e=F0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=__(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=F0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k0(t,e){e=e.checked,e!=null&&kf(t,"checked",e,!1)}function Ku(t,e){k0(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(Da(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function B0(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,V0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y_=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){y_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function G0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=H0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var S_=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(S_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function Hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,ks=null,Bs=null;function ep(t){if(t=vo(t)){if(typeof id!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=dc(e),id(t.stateNode,t.type,e))}}function W0(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function j0(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function X0(t,e){return t(e)}function $0(){}var Fc=!1;function Y0(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return X0(t,e,n)}finally{Fc=!1,(ks!==null||Bs!==null)&&($0(),j0())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var rd=!1;if(Fi)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){rd=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{rd=!1}function M_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Oa=!1,Dl=null,Ll=!1,sd=null,E_={onError:function(t){Oa=!0,Dl=t}};function T_(t,e,n,i,r,s,a,o,l){Oa=!1,Dl=null,M_.apply(E_,arguments)}function b_(t,e,n,i,r,s,a,o,l){if(T_.apply(this,arguments),Oa){if(Oa){var c=Dl;Oa=!1,Dl=null}else throw Error(_e(198));Ll||(Ll=!0,sd=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(is(t)!==t)throw Error(_e(188))}function w_(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function K0(t){return t=w_(t),t!==null?Z0(t):null}function Z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z0(t);if(e!==null)return e;t=t.sibling}return null}var Q0=Ln.unstable_scheduleCallback,np=Ln.unstable_cancelCallback,A_=Ln.unstable_shouldYield,R_=Ln.unstable_requestPaint,Pt=Ln.unstable_now,C_=Ln.unstable_getCurrentPriorityLevel,Gf=Ln.unstable_ImmediatePriority,J0=Ln.unstable_UserBlockingPriority,Nl=Ln.unstable_NormalPriority,P_=Ln.unstable_LowPriority,eg=Ln.unstable_IdlePriority,oc=null,mi=null;function D_(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(oc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:I_,L_=Math.log,N_=Math.LN2;function I_(t){return t>>>=0,t===0?32:31-(L_(t)/N_|0)|0}var No=64,Io=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=La(o):(s&=a,s!==0&&(i=La(s)))}else a=n&~r,a!==0?i=La(a):s!==0&&(i=La(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function U_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ri(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=U_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=No;return No<<=1,!(No&4194240)&&(No=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function O_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,jf,rg,sg,ag,od=!1,Uo=[],ar=null,or=null,lr=null,qa=new Map,Ka=new Map,Ji=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function ga(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vo(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function B_(t,e,n,i,r){switch(e){case"focusin":return ar=ga(ar,t,e,n,i,r),!0;case"dragenter":return or=ga(or,t,e,n,i,r),!0;case"mouseover":return lr=ga(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,ga(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,ga(Ka.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=zr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=q0(n),e!==null){t.blockedOn=e,ag(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nd=i,n.target.dispatchEvent(i),nd=null}else return e=vo(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){ml(t)&&n.delete(e)}function z_(){od=!1,ar!==null&&ml(ar)&&(ar=null),or!==null&&ml(or)&&(or=null),lr!==null&&ml(lr)&&(lr=null),qa.forEach(rp),Ka.forEach(rp)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,z_)))}function Za(t){function e(r){return xa(r,t)}if(0<Uo.length){xa(Uo[0],t);for(var n=1;n<Uo.length;n++){var i=Uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&xa(ar,t),or!==null&&xa(or,t),lr!==null&&xa(lr,t),qa.forEach(e),Ka.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Ji.shift()}var zs=Hi.ReactCurrentBatchConfig,Ul=!0;function V_(t,e,n,i){var r=ft,s=zs.transition;zs.transition=null;try{ft=1,Xf(t,e,n,i)}finally{ft=r,zs.transition=s}}function H_(t,e,n,i){var r=ft,s=zs.transition;zs.transition=null;try{ft=4,Xf(t,e,n,i)}finally{ft=r,zs.transition=s}}function Xf(t,e,n,i){if(Ul){var r=ld(t,e,n,i);if(r===null)$c(t,e,i,Fl,n),ip(t,i);else if(B_(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<k_.indexOf(t)){for(;r!==null;){var s=vo(r);if(s!==null&&ig(s),s=ld(t,e,n,i),s===null&&$c(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var Fl=null;function ld(t,e,n,i){if(Fl=null,t=Hf(i),t=zr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C_()){case Gf:return 1;case J0:return 4;case Nl:case P_:return 16;case eg:return 536870912;default:return 16}default:return 16}}var tr=null,$f=null,gl=null;function cg(){if(gl)return gl;var t,e=$f,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function sp(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:sp,this.isPropagationStopped=sp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=Fn(aa),xo=Tt({},aa,{view:0,detail:0}),G_=Fn(xo),kc,Bc,va,lc=Tt({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(kc=t.screenX-va.screenX,Bc=t.screenY-va.screenY):Bc=kc=0,va=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),ap=Fn(lc),W_=Tt({},lc,{dataTransfer:0}),j_=Fn(W_),X_=Tt({},xo,{relatedTarget:0}),zc=Fn(X_),$_=Tt({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Fn($_),q_=Tt({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K_=Fn(q_),Z_=Tt({},aa,{data:0}),op=Fn(Z_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ey[t])?!!e[t]:!1}function qf(){return ty}var ny=Tt({},xo,{key:function(t){if(t.key){var e=Q_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qf,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iy=Fn(ny),ry=Tt({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Fn(ry),sy=Tt({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qf}),ay=Fn(sy),oy=Tt({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Fn(oy),cy=Tt({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=Fn(cy),dy=[9,13,27,32],Kf=Fi&&"CompositionEvent"in window,ka=null;Fi&&"documentMode"in document&&(ka=document.documentMode);var fy=Fi&&"TextEvent"in window&&!ka,ug=Fi&&(!Kf||ka&&8<ka&&11>=ka),cp=String.fromCharCode(32),up=!1;function dg(t,e){switch(t){case"keyup":return dy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function hy(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function py(t,e){if(bs)return t==="compositionend"||!Kf&&dg(t,e)?(t=cg(),gl=$f=tr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!my[t.type]:e==="textarea"}function hg(t,e,n,i){W0(i),e=Ol(e,"onChange"),0<e.length&&(n=new Yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ba=null,Qa=null;function gy(t){Tg(t,0)}function cc(t){var e=Rs(t);if(O0(e))return t}function xy(t,e){if(t==="change")return e}var pg=!1;if(Fi){var Vc;if(Fi){var Hc="oninput"in document;if(!Hc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Hc=typeof fp.oninput=="function"}Vc=Hc}else Vc=!1;pg=Vc&&(!document.documentMode||9<document.documentMode)}function hp(){Ba&&(Ba.detachEvent("onpropertychange",mg),Qa=Ba=null)}function mg(t){if(t.propertyName==="value"&&cc(Qa)){var e=[];hg(e,Qa,t,Hf(t)),Y0(gy,e)}}function vy(t,e,n){t==="focusin"?(hp(),Ba=e,Qa=n,Ba.attachEvent("onpropertychange",mg)):t==="focusout"&&hp()}function _y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Qa)}function yy(t,e){if(t==="click")return cc(e)}function Sy(t,e){if(t==="input"||t==="change")return cc(e)}function My(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:My;function Ja(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wu.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ey(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&Zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var a=mp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=Fi&&"documentMode"in document&&11>=document.documentMode,ws=null,cd=null,za=null,ud=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||ws==null||ws!==Pl(i)||(i=ws,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&Ja(za,i)||(za=i,i=Ol(cd,"onSelect"),0<i.length&&(e=new Yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Gc={},vg={};Fi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function uc(t){if(Gc[t])return Gc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return Gc[t]=e[n];return t}var _g=uc("animationend"),yg=uc("animationiteration"),Sg=uc("animationstart"),Mg=uc("transitionend"),Eg=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Eg.set(t,e),ns(e,[t])}for(var Wc=0;Wc<xp.length;Wc++){var jc=xp[Wc],by=jc.toLowerCase(),wy=jc[0].toUpperCase()+jc.slice(1);Sr(by,"on"+wy)}Sr(_g,"onAnimationEnd");Sr(yg,"onAnimationIteration");Sr(Sg,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Mg,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b_(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;vp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;vp(r,o,c),s=l}}}if(Ll)throw t=sd,Ll=!1,sd=null,t}function xt(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[ko]){t[ko]=!0,L0.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,Xc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(lg(e)){case 1:var r=V_;break;case 4:r=H_;break;default:r=Xf}n=r.bind(null,e,n,t),r=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Y0(function(){var c=s,d=Hf(n),f=[];e:{var h=Eg.get(t);if(h!==void 0){var p=Yf,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":p=iy;break;case"focusin":_="focus",p=zc;break;case"focusout":_="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ay;break;case _g:case yg:case Sg:p=Y_;break;case Mg:p=ly;break;case"scroll":p=G_;break;case"wheel":p=uy;break;case"copy":case"cut":case"paste":p=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lp}var S=(e&4)!==0,x=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Ya(g,u),M!=null&&S.push(to(g,M,v)))),x)break;g=g.return}0<S.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==nd&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[Oi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?zr(_):null,_!==null&&(x=is(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=ap,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=lp,M="onPointerLeave",u="onPointerEnter",g="pointer"),x=p==null?h:Rs(p),v=_==null?h:Rs(_),h=new S(M,g+"leave",p,n,d),h.target=x,h.relatedTarget=v,M=null,zr(d)===c&&(S=new S(u,g+"enter",_,n,d),S.target=v,S.relatedTarget=x,M=S),x=M,p&&_)t:{for(S=p,u=_,g=0,v=S;v;v=ls(v))g++;for(v=0,M=u;M;M=ls(M))v++;for(;0<g-v;)S=ls(S),g--;for(;0<v-g;)u=ls(u),v--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=ls(S),u=ls(u)}S=null}else S=null;p!==null&&_p(f,h,p,S,!1),_!==null&&x!==null&&_p(f,x,_,S,!0)}}e:{if(h=c?Rs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=xy;else if(dp(h))if(pg)C=Sy;else{C=_y;var b=vy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=yy);if(C&&(C=C(t,c))){hg(f,C,n,d);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Zu(h,"number",h.value)}switch(b=c?Rs(c):window,t){case"focusin":(dp(b)||b.contentEditable==="true")&&(ws=b,cd=c,za=null);break;case"focusout":za=cd=ws=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,gp(f,n,d);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":gp(f,n,d)}var R;if(Kf)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else bs?dg(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ug&&n.locale!=="ko"&&(bs||T!=="onCompositionStart"?T==="onCompositionEnd"&&bs&&(R=cg()):(tr=d,$f="value"in tr?tr.value:tr.textContent,bs=!0)),b=Ol(c,T),0<b.length&&(T=new op(T,t,null,n,d),f.push({event:T,listeners:b}),R?T.data=R:(R=fg(n),R!==null&&(T.data=R)))),(R=fy?hy(t,n):py(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(d=new op("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}Tg(f,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(to(t,s,r)),s=Ya(t,e),s!=null&&i.push(to(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ya(n,s),l!=null&&a.unshift(to(n,l,o))):r||(l=Ya(n,s),l!=null&&a.push(to(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Cy,"")}function Bo(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(_e(425))}function kl(){}var dd=null,fd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(Ly)}:pd;function Ly(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),fi="__reactFiber$"+oa,no="__reactProps$"+oa,Oi="__reactContainer$"+oa,md="__reactEvents$"+oa,Ny="__reactListeners$"+oa,Iy="__reactHandles$"+oa;function zr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Oi]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[fi])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[fi]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function dc(t){return t[no]||null}var gd=[],Cs=-1;function Mr(t){return{current:t}}function vt(t){0>Cs||(t.current=gd[Cs],gd[Cs]=null,Cs--)}function gt(t,e){Cs++,gd[Cs]=t.current,t.current=e}var vr={},sn=Mr(vr),_n=Mr(!1),Kr=vr;function $s(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Bl(){vt(_n),vt(sn)}function Ep(t,e,n){if(sn.current!==vr)throw Error(_e(168));gt(sn,e),gt(_n,n)}function wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,v_(t)||"Unknown",r));return Tt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Kr=sn.current,gt(sn,t),gt(_n,_n.current),!0}function Tp(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=wg(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,vt(_n),vt(sn),gt(sn,t)):vt(_n),gt(_n,n)}var Ci=null,fc=!1,qc=!1;function Ag(t){Ci===null?Ci=[t]:Ci.push(t)}function Uy(t){fc=!0,Ag(t)}function Er(){if(!qc&&Ci!==null){qc=!0;var t=0,e=ft;try{var n=Ci;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,fc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),Q0(Gf,Er),r}finally{ft=e,qc=!1}}return null}var Ps=[],Ds=0,Vl=null,Hl=0,Bn=[],zn=0,Zr=null,Pi=1,Di="";function Ur(t,e){Ps[Ds++]=Hl,Ps[Ds++]=Vl,Vl=t,Hl=e}function Rg(t,e,n){Bn[zn++]=Pi,Bn[zn++]=Di,Bn[zn++]=Zr,Zr=t;var i=Pi;t=Di;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Pi=1<<32-ri(e)+r|n<<r|i,Di=s+t}else Pi=1<<s|n<<r|i,Di=t}function Qf(t){t.return!==null&&(Ur(t,1),Rg(t,1,0))}function Jf(t){for(;t===Vl;)Vl=Ps[--Ds],Ps[Ds]=null,Hl=Ps[--Ds],Ps[Ds]=null;for(;t===Zr;)Zr=Bn[--zn],Bn[zn]=null,Di=Bn[--zn],Bn[zn]=null,Pi=Bn[--zn],Bn[zn]=null}var Cn=null,Rn=null,_t=!1,ti=null;function Cg(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Pi,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Rn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(_t){var e=Rn;if(e){var n=e;if(!bp(t,e)){if(xd(t))throw Error(_e(418));e=cr(n.nextSibling);var i=Cn;e&&bp(t,e)?Cg(i,n):(t.flags=t.flags&-4097|2,_t=!1,Cn=t)}}else{if(xd(t))throw Error(_e(418));t.flags=t.flags&-4097|2,_t=!1,Cn=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function zo(t){if(t!==Cn)return!1;if(!_t)return wp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=Rn)){if(xd(t))throw Pg(),Error(_e(418));for(;e;)Cg(t,e),e=cr(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Cn?cr(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=Rn;t;)t=cr(t.nextSibling)}function Ys(){Rn=Cn=null,_t=!1}function eh(t){ti===null?ti=[t]:ti.push(t)}var Fy=Hi.ReactCurrentBatchConfig;function Qn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Gl=Mr(null),Wl=null,Ls=null,th=null;function nh(){th=Ls=Wl=null}function ih(t){var e=Gl.current;vt(Gl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){Wl=t,th=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(th!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Wl===null)throw Error(_e(308));Ls=t,Wl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Vr=null;function rh(t){Vr===null?Vr=[t]:Vr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(h=e,p=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=Tt({},f,h);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=a,t.lanes=a,t.memoizedState=f}}function Rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var Ng=new D0.Component().refs;function yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=fr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(si(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=fr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(si(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=fr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(si(e,t,i,n),vl(e,t,i))}};function Cp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function Ig(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=yn(e)?Kr:sn.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Ng,sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=yn(e)?Kr:sn.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===Ng&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function Ug(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=hr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=nu(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var C=v.type;return C===Ts?d(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Dp(C)===g.type)?(M=r(g,v.props),M.ref=_a(u,g,v),M.return=u,M):(M=Tl(v.type,v.key,v.props,null,u.mode,M),M.ref=_a(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=iu(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,M,C){return g===null||g.tag!==7?(g=Xr(v,u.mode,M,C),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=nu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return v=Tl(g.type,g.key,g.props,null,u.mode,v),v.ref=_a(u,null,g),v.return=u,v;case Es:return g=iu(g,u.mode,v),g.return=u,g;case Zi:var M=g._init;return f(u,M(g._payload),v)}if(Da(g)||pa(g))return g=Xr(g,u.mode,v,null),g.return=u,g;Vo(u,g)}return null}function h(u,g,v,M){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return v.key===C?l(u,g,v,M):null;case Es:return v.key===C?c(u,g,v,M):null;case Zi:return C=v._init,h(u,g,C(v._payload),M)}if(Da(v)||pa(v))return C!==null?null:d(u,g,v,M,null);Vo(u,v)}return null}function p(u,g,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Po:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,C);case Es:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,C);case Zi:var b=M._init;return p(u,g,v,b(M._payload),C)}if(Da(M)||pa(M))return u=u.get(v)||null,d(g,u,M,C,null);Vo(g,M)}return null}function _(u,g,v,M){for(var C=null,b=null,R=g,T=g=0,m=null;R!==null&&T<v.length;T++){R.index>T?(m=R,R=null):m=R.sibling;var y=h(u,R,v[T],M);if(y===null){R===null&&(R=m);break}t&&R&&y.alternate===null&&e(u,R),g=s(y,g,T),b===null?C=y:b.sibling=y,b=y,R=m}if(T===v.length)return n(u,R),_t&&Ur(u,T),C;if(R===null){for(;T<v.length;T++)R=f(u,v[T],M),R!==null&&(g=s(R,g,T),b===null?C=R:b.sibling=R,b=R);return _t&&Ur(u,T),C}for(R=i(u,R);T<v.length;T++)m=p(R,u,T,v[T],M),m!==null&&(t&&m.alternate!==null&&R.delete(m.key===null?T:m.key),g=s(m,g,T),b===null?C=m:b.sibling=m,b=m);return t&&R.forEach(function(P){return e(u,P)}),_t&&Ur(u,T),C}function S(u,g,v,M){var C=pa(v);if(typeof C!="function")throw Error(_e(150));if(v=C.call(v),v==null)throw Error(_e(151));for(var b=C=null,R=g,T=g=0,m=null,y=v.next();R!==null&&!y.done;T++,y=v.next()){R.index>T?(m=R,R=null):m=R.sibling;var P=h(u,R,y.value,M);if(P===null){R===null&&(R=m);break}t&&R&&P.alternate===null&&e(u,R),g=s(P,g,T),b===null?C=P:b.sibling=P,b=P,R=m}if(y.done)return n(u,R),_t&&Ur(u,T),C;if(R===null){for(;!y.done;T++,y=v.next())y=f(u,y.value,M),y!==null&&(g=s(y,g,T),b===null?C=y:b.sibling=y,b=y);return _t&&Ur(u,T),C}for(R=i(u,R);!y.done;T++,y=v.next())y=p(R,u,T,y.value,M),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?T:y.key),g=s(y,g,T),b===null?C=y:b.sibling=y,b=y);return t&&R.forEach(function(F){return e(u,F)}),_t&&Ur(u,T),C}function x(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===Ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:e:{for(var C=v.key,b=g;b!==null;){if(b.key===C){if(C=v.type,C===Ts){if(b.tag===7){n(u,b.sibling),g=r(b,v.props.children),g.return=u,u=g;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Dp(C)===b.type){n(u,b.sibling),g=r(b,v.props),g.ref=_a(u,b,v),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Ts?(g=Xr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=Tl(v.type,v.key,v.props,null,u.mode,M),M.ref=_a(u,g,v),M.return=u,u=M)}return a(u);case Es:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=iu(v,u.mode,M),g.return=u,u=g}return a(u);case Zi:return b=v._init,x(u,g,b(v._payload),M)}if(Da(v))return _(u,g,v,M);if(pa(v))return S(u,g,v,M);Vo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=nu(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return x}var qs=Ug(!0),Fg=Ug(!1),_o={},gi=Mr(_o),io=Mr(_o),ro=Mr(_o);function Hr(t){if(t===_o)throw Error(_e(174));return t}function ah(t,e){switch(gt(ro,e),gt(io,t),gt(gi,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}vt(gi),gt(gi,e)}function Ks(){vt(gi),vt(io),vt(ro)}function Og(t){Hr(ro.current);var e=Hr(gi.current),n=Ju(e,t.type);e!==n&&(gt(io,t),gt(gi,n))}function oh(t){io.current===t&&(vt(gi),vt(io))}var Mt=Mr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function lh(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var _l=Hi.ReactCurrentDispatcher,Zc=Hi.ReactCurrentBatchConfig,Qr=0,Et=null,Ot=null,Wt=null,$l=!1,Va=!1,so=0,Oy=0;function Jt(){throw Error(_e(321))}function ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function uh(t,e,n,i,r,s){if(Qr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?Vy:Hy,t=n(i,r),Va){s=0;do{if(Va=!1,so=0,25<=s)throw Error(_e(301));s+=1,Wt=Ot=null,e.updateQueue=null,_l.current=Gy,t=n(i,r)}while(Va)}if(_l.current=Yl,e=Ot!==null&&Ot.next!==null,Qr=0,Wt=Ot=Et=null,$l=!1,e)throw Error(_e(300));return t}function dh(){var t=so!==0;return so=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Xn(){if(Ot===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(_e(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ao(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Qr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Et.lanes|=d,Jr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function Bg(t,e){var n=Et,i=Xn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,fh(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,oo(9,Vg.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(_e(349));Qr&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Wg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Wg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function Wg(t){var e=ki(t,1);e!==null&&si(e,t,1,-1)}function Lp(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=zy.bind(null,Et,t),[e.memoizedState,t]}function oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return Xn().memoizedState}function yl(t,e,n,i){var r=ui();Et.flags|=t,r.memoizedState=oo(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&ch(i,a.deps)){r.memoizedState=oo(e,n,s,i);return}}Et.flags|=t,r.memoizedState=oo(1|e,n,s,i)}function Np(t,e){return yl(8390656,8,t,e)}function fh(t,e){return pc(2048,8,t,e)}function Xg(t,e){return pc(4,2,t,e)}function $g(t,e){return pc(4,4,t,e)}function Yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,Yg.bind(null,e,t),n)}function hh(){}function Kg(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return Qr&21?(oi(n,e)||(n=tg(),Et.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function ky(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ft=n,Zc.transition=i}}function Jg(){return Xn().memoizedState}function By(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=dn();si(n,t,i,r),nx(n,e,i)}}function zy(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=dn(),si(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function tx(t,e){Va=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}var Yl={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},Vy={readContext:jn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,Yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=By.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Lp,useDebugValue:hh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Lp(!1),e=t[0];return t=ky.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ui();if(_t){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),$t===null)throw Error(_e(349));Qr&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(Hg.bind(null,i,s,t),[t]),i.flags|=2048,oo(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=$t.identifierPrefix;if(_t){var n=Di,i=Pi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hy={readContext:jn,useCallback:Kg,useContext:jn,useEffect:fh,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:$g,useMemo:Zg,useReducer:Qc,useRef:jg,useState:function(){return Qc(ao)},useDebugValue:hh,useDeferredValue:function(t){var e=Xn();return Qg(e,Ot.memoizedState,t)},useTransition:function(){var t=Qc(ao)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1},Gy={readContext:jn,useCallback:Kg,useContext:jn,useEffect:fh,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:$g,useMemo:Zg,useReducer:Jc,useRef:jg,useState:function(){return Jc(ao)},useDebugValue:hh,useDeferredValue:function(t){var e=Xn();return Ot===null?e.memoizedState=t:Qg(e,Ot.memoizedState,t)},useTransition:function(){var t=Jc(ao)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1};function Zs(t,e){try{var n="",i=e;do n+=x_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function ix(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Ld=i),Md(t,e)},n}function rx(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rS.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var jy=Hi.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?Fg(e,null,n,i):qs(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=uh(t,e,n,i,s,r),n=dh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(_t&&n&&Qf(e),e.flags|=1,un(t,e,i,r),e.child)}function kp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Sh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sx(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(a,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function sx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return Ed(t,e,n,i,r)}function ax(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Is,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Is,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Is,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Is,wn),wn|=i;return un(t,e,r,n),e.child}function ox(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,i,r){var s=yn(n)?Kr:sn.current;return s=$s(e,s),Vs(e,r),n=uh(t,e,n,i,s,r),i=dh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(_t&&i&&Qf(e),e.flags|=1,un(t,e,n,r),e.child)}function Bp(t,e,n,i,r){if(yn(n)){var s=!0;zl(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Sl(t,e),Ig(e,n,i),Sd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=yn(n)?Kr:sn.current,c=$s(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Pp(e,a,i,c),Qi=!1;var h=e.memoizedState;a.state=h,jl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||_n.current||Qi?(typeof d=="function"&&(yd(e,n,d,i),l=e.memoizedState),(o=Qi||Cp(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Lg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Qn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=yn(n)?Kr:sn.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Pp(e,a,i,l),Qi=!1,h=e.memoizedState,a.state=h,jl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||_n.current||Qi?(typeof p=="function"&&(yd(e,n,p,i),_=e.memoizedState),(c=Qi||Cp(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Td(t,e,n,i,s,r)}function Td(t,e,n,i,r,s){ox(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Tp(e,n,!1),Bi(t,e,s);i=e.stateNode,jy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&Tp(e,n,!0),e.child}function lx(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),ah(t,e.containerInfo)}function zp(t,e,n,i,r){return Ys(),eh(r),e.flags|=256,un(t,e,n,i),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function cx(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Mt,r&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=xc(a,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wd(n),e.memoizedState=bd,t):ph(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Xy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=Xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?wd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=bd,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ph(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,i){return i!==null&&eh(i),qs(e,t.child,null,n),t=ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(_e(422))),Ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,a),e.child.memoizedState=wd(a),e.memoizedState=bd,s);if(!(e.mode&1))return Ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(_e(419)),i=eu(s,i,void 0),Ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(t,r),si(i,t,r,-1))}return yh(),i=eu(Error(_e(421))),Ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=cr(r.nextSibling),Cn=e,_t=!0,ti=null,t!==null&&(Bn[zn++]=Pi,Bn[zn++]=Di,Bn[zn++]=Zr,Pi=t.id,Di=t.overflow,Zr=e),e=ph(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_d(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ux(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $y(t,e,n){switch(e.tag){case 3:lx(e),Ys();break;case 5:Og(e);break;case 1:yn(e.type)&&zl(e);break;case 4:ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?cx(t,e,n):(gt(Mt,Mt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);gt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ux(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return Bi(t,e,n)}var dx,Ad,fx,hx;dx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};fx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(gi.current);var s=null;switch(n){case"input":r=qu(t,r),i=qu(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Qu(t,r),i=Qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}ed(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ya(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yy(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&Bl(),en(e),null;case 3:return i=e.stateNode,Ks(),vt(_n),vt(sn),lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Ud(ti),ti=null))),Ad(t,e),en(e),null;case 5:oh(e);var r=Hr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)fx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return en(e),null}if(t=Hr(gi.current),zo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[no]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)xt(Na[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":Kh(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":Qh(i,s),xt("invalid",i)}ed(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,o,t),r=["children",""+o]):Xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(n){case"input":Do(i),Zh(i,s,!0);break;case"textarea":Do(i),Jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[fi]=e,t[no]=i,dx(t,e,!1,!1),e.stateNode=t;e:{switch(a=td(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)xt(Na[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":Kh(t,i),r=qu(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":Qh(t,i),r=Qu(t,i),xt("invalid",t);break;default:r=i}ed(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?G0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&kf(t,s,l,a))}switch(n){case"input":Do(t),Zh(t,i,!1);break;case"textarea":Do(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)hx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Hr(ro.current),Hr(gi.current),zo(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))Pg(),Ys(),e.flags|=98560,s=!1;else if(s=zo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[fi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ti!==null&&(Ud(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?kt===0&&(kt=3):yh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Ks(),Ad(t,e),t===null&&eo(e.stateNode.containerInfo),en(e),null;case 10:return ih(e.type._context),en(e),null;case 17:return yn(e.type)&&Bl(),en(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ya(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Xl(t),a!==null){for(e.flags|=128,ya(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Qs&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return en(e),null}else 2*Pt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Mt.current,gt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function qy(t,e){switch(Jf(e),e.tag){case 1:return yn(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),vt(_n),vt(sn),lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return Ks(),null;case 10:return ih(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var Go=!1,rn=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){At(t,e,i)}}var Hp=!1;function Zy(t,e){if(dd=Ul,t=xg(),Zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},Ul=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,x=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Qn(e.type,S),x);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return _=Hp,Hp=!1,_}function Ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function px(t){var e=t.alternate;e!==null&&(t.alternate=null,px(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[no],delete e[md],delete e[Ny],delete e[Iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mx(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var qt=null,ei=!1;function Wi(t,e,n){for(n=n.child;n!==null;)gx(t,e,n),n=n.sibling}function gx(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:rn||Ns(n,e);case 6:var i=qt,r=ei;qt=null,Wi(t,e,n),qt=i,ei=r,qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Za(t)):Yc(qt,n.stateNode));break;case 4:i=qt,r=ei,qt=n.stateNode.containerInfo,ei=!0,Wi(t,e,n),qt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Rd(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!rn&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Wi(t,e,n),rn=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ky),e.forEach(function(i){var r=aS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,ei=!1;break e;case 3:qt=o.stateNode.containerInfo,ei=!0;break e;case 4:qt=o.stateNode.containerInfo,ei=!0;break e}o=o.return}if(qt===null)throw Error(_e(160));gx(s,a,r),qt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xx(e,t),e=e.sibling}function xx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ci(t),i&4){try{Ha(3,t,t.return),mc(3,t)}catch(S){At(t,t.return,S)}try{Ha(5,t,t.return)}catch(S){At(t,t.return,S)}}break;case 1:Yn(e,t),ci(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Yn(e,t),ci(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{$a(r,"")}catch(S){At(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&k0(r,s),td(o,a);var c=td(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?G0(r,f):d==="dangerouslySetInnerHTML"?V0(r,f):d==="children"?$a(r,f):kf(r,d,f,c)}switch(o){case"input":Ku(r,s);break;case"textarea":B0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[no]=s}catch(S){At(t,t.return,S)}}break;case 6:if(Yn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){At(t,t.return,S)}}break;case 3:if(Yn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(S){At(t,t.return,S)}break;case 4:Yn(e,t),ci(t);break;case 13:Yn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xh=Pt())),i&4&&Wp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||d,Yn(e,t),rn=c):Yn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Le=t,d=t.child;d!==null;){for(f=Le=d;Le!==null;){switch(h=Le,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ha(4,h,h.return);break;case 1:Ns(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){At(i,n,S)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(f);continue}}p!==null?(p.return=h,Le=p):Xp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=H0("display",a))}catch(S){At(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){At(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yn(e,t),ci(t),i&4&&Wp(t);break;case 21:break;default:Yn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mx(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($a(r,""),i.flags&=-33);var s=Gp(t);Dd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Gp(t);Pd(t,o,a);break;default:throw Error(_e(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qy(t,e,n){Le=t,vx(t)}function vx(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=Go;var c=rn;if(Go=a,(rn=l)&&!c)for(Le=r;Le!==null;)a=Le,l=a.child,a.tag===22&&a.memoizedState!==null?$p(r):l!==null?(l.return=a,Le=l):$p(r);for(;s!==null;)Le=s,vx(s),s=s.sibling;Le=r,Go=o,rn=c}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):jp(t)}}function jp(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}rn||e.flags&512&&Cd(e)}catch(h){At(e,e.return,h)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Xp(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function $p(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Cd(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{Cd(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===t){Le=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Le=o;break}Le=e.return}}var Jy=Math.ceil,ql=Hi.ReactCurrentDispatcher,mh=Hi.ReactCurrentOwner,Gn=Hi.ReactCurrentBatchConfig,rt=0,$t=null,Ut=null,Kt=0,wn=0,Is=Mr(0),kt=0,lo=null,Jr=0,gc=0,gh=0,Ga=null,xn=null,xh=0,Qs=1/0,Ai=null,Kl=!1,Ld=null,dr=null,Wo=!1,nr=null,Zl=0,Wa=0,Nd=null,Ml=-1,El=0;function dn(){return rt&6?Pt():Ml!==-1?Ml:Ml=Pt()}function fr(t){return t.mode&1?rt&2&&Kt!==0?Kt&-Kt:Fy.transition!==null?(El===0&&(El=tg()),El):(t=ft,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function si(t,e,n,i){if(50<Wa)throw Wa=0,Nd=null,Error(_e(185));go(t,n,i),(!(rt&2)||t!==$t)&&(t===$t&&(!(rt&2)&&(gc|=n),kt===4&&er(t,Kt)),Sn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Qs=Pt()+500,fc&&Er()))}function Sn(t,e){var n=t.callbackNode;F_(t,e);var i=Il(t,t===$t?Kt:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?Uy(Yp.bind(null,t)):Ag(Yp.bind(null,t)),Dy(function(){!(rt&6)&&Er()}),n=null;else{switch(ng(i)){case 1:n=Gf;break;case 4:n=J0;break;case 16:n=Nl;break;case 536870912:n=eg;break;default:n=Nl}n=wx(n,_x.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _x(t,e){if(Ml=-1,El=0,rt&6)throw Error(_e(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Il(t,t===$t?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=rt;rt|=2;var s=Sx();($t!==t||Kt!==e)&&(Ai=null,Qs=Pt()+500,jr(t,e));do try{nS();break}catch(o){yx(t,o)}while(1);nh(),ql.current=s,rt=r,Ut!==null?e=0:($t=null,Kt=0,e=kt)}if(e!==0){if(e===2&&(r=ad(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=lo,jr(t,0),er(t,i),Sn(t,Pt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!eS(r)&&(e=Ql(t,i),e===2&&(s=ad(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=lo,jr(t,0),er(t,i),Sn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Fr(t,xn,Ai);break;case 3:if(er(t,i),(i&130023424)===i&&(e=xh+500-Pt(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pd(Fr.bind(null,t,xn,Ai),e);break}Fr(t,xn,Ai);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jy(i/1960))-i,10<i){t.timeoutHandle=pd(Fr.bind(null,t,xn,Ai),i);break}Fr(t,xn,Ai);break;case 5:Fr(t,xn,Ai);break;default:throw Error(_e(329))}}}return Sn(t,Pt()),t.callbackNode===n?_x.bind(null,t):null}function Id(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=xn,xn=n,e!==null&&Ud(e)),t}function Ud(t){xn===null?xn=t:xn.push.apply(xn,t)}function eS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~gh,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(rt&6)throw Error(_e(327));Hs();var e=Il(t,0);if(!(e&1))return Sn(t,Pt()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=ad(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=lo,jr(t,0),er(t,e),Sn(t,Pt()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,xn,Ai),Sn(t,Pt()),null}function vh(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Qs=Pt()+500,fc&&Er())}}function es(t){nr!==null&&nr.tag===0&&!(rt&6)&&Hs();var e=rt;rt|=1;var n=Gn.transition,i=ft;try{if(Gn.transition=null,ft=1,t)return t()}finally{ft=i,Gn.transition=n,rt=e,!(rt&6)&&Er()}}function _h(){wn=Is.current,vt(Is)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Py(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bl();break;case 3:Ks(),vt(_n),vt(sn),lh();break;case 5:oh(i);break;case 4:Ks();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:ih(i.type._context);break;case 22:case 23:_h()}n=n.return}if($t=t,Ut=t=hr(t.current,null),Kt=wn=e,kt=0,lo=null,gh=gc=Jr=0,xn=Ga=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Vr=null}return t}function yx(t,e){do{var n=Ut;try{if(nh(),_l.current=Yl,$l){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Qr=0,Wt=Ot=Et=null,Va=!1,so=0,mh.current=null,n===null||n.return===null){kt=1,lo=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Up(a);if(p!==null){p.flags&=-257,Fp(p,a,o,s,e),p.mode&1&&Ip(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Ip(s,c,e),yh();break e}l=Error(_e(426))}}else if(_t&&o.mode&1){var x=Up(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Fp(x,a,o,s,e),eh(Zs(l,o));break e}}s=l=Zs(l,o),kt!==4&&(kt=2),Ga===null?Ga=[s]:Ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ix(s,l,e);Ap(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=rx(s,o,e);Ap(s,M);break e}}s=s.return}while(s!==null)}Ex(n)}catch(C){e=C,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(1)}function Sx(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function yh(){(kt===0||kt===3||kt===2)&&(kt=4),$t===null||!(Jr&268435455)&&!(gc&268435455)||er($t,Kt)}function Ql(t,e){var n=rt;rt|=2;var i=Sx();($t!==t||Kt!==e)&&(Ai=null,jr(t,e));do try{tS();break}catch(r){yx(t,r)}while(1);if(nh(),rt=n,ql.current=i,Ut!==null)throw Error(_e(261));return $t=null,Kt=0,kt}function tS(){for(;Ut!==null;)Mx(Ut)}function nS(){for(;Ut!==null&&!A_();)Mx(Ut)}function Mx(t){var e=bx(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Ex(t):Ut=e,mh.current=null}function Ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qy(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ut=null;return}}else if(n=Yy(n,e,wn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);kt===0&&(kt=5)}function Fr(t,e,n){var i=ft,r=Gn.transition;try{Gn.transition=null,ft=1,iS(t,e,n,i)}finally{Gn.transition=r,ft=i}return null}function iS(t,e,n,i){do Hs();while(nr!==null);if(rt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(O_(t,s),t===$t&&(Ut=$t=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,wx(Nl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=ft;ft=1;var o=rt;rt|=4,mh.current=null,Zy(t,n),xx(n,t),Ey(fd),Ul=!!dd,fd=dd=null,t.current=n,Qy(n),R_(),rt=o,ft=a,Gn.transition=s}else t.current=n;if(Wo&&(Wo=!1,nr=t,Zl=r),s=t.pendingLanes,s===0&&(dr=null),D_(n.stateNode),Sn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Ld,Ld=null,t;return Zl&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Nd?Wa++:(Wa=0,Nd=t):Wa=0,Er(),null}function Hs(){if(nr!==null){var t=ng(Zl),e=Gn.transition,n=ft;try{if(Gn.transition=null,ft=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Zl=0,rt&6)throw Error(_e(331));var r=rt;for(rt|=4,Le=t.current;Le!==null;){var s=Le,a=s.child;if(Le.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Le=c;Le!==null;){var d=Le;switch(d.tag){case 0:case 11:case 15:Ha(8,d,s)}var f=d.child;if(f!==null)f.return=d,Le=f;else for(;Le!==null;){d=Le;var h=d.sibling,p=d.return;if(px(d),d===c){Le=null;break}if(h!==null){h.return=p,Le=h;break}Le=p}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}Le=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Le=a;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Le=u;break e}Le=s.return}}var g=t.current;for(Le=g;Le!==null;){a=Le;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Le=v;else e:for(a=g;Le!==null;){if(o=Le,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:mc(9,o)}}catch(C){At(o,o.return,C)}if(o===a){Le=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Le=M;break e}Le=o.return}}if(rt=r,Er(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(oc,t)}catch{}i=!0}return i}finally{ft=n,Gn.transition=e}}return!1}function qp(t,e,n){e=Zs(n,e),e=ix(t,e,1),t=ur(t,e,1),e=dn(),t!==null&&(go(t,1,e),Sn(t,e))}function At(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Zs(n,t),t=rx(e,t,1),e=ur(e,t,1),t=dn(),e!==null&&(go(e,1,t),Sn(e,t));break}}e=e.return}}function rS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Kt&n)===n&&(kt===4||kt===3&&(Kt&130023424)===Kt&&500>Pt()-xh?jr(t,0):gh|=n),Sn(t,e)}function Tx(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=dn();t=ki(t,e),t!==null&&(go(t,e,n),Sn(t,n))}function sS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tx(t,n)}function aS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),Tx(t,n)}var bx;bx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,$y(t,e,n);vn=!!(t.flags&131072)}else vn=!1,_t&&e.flags&1048576&&Rg(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=$s(e,sn.current);Vs(e,n),r=uh(null,e,i,t,r,n);var s=dh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sh(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,Sd(e,i,t,n),e=Td(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Qf(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lS(i),t=Qn(i,t),r){case 0:e=Ed(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=kp(null,e,i,Qn(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Bp(t,e,i,r,n);case 3:e:{if(lx(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Lg(t,e),jl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(_e(423)),e),e=zp(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(_e(424)),e),e=zp(t,e,i,n,r);break e}else for(Rn=cr(e.stateNode.containerInfo.firstChild),Cn=e,_t=!0,ti=null,n=Fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Bi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&vd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,hd(i,r)?a=null:s!==null&&hd(i,s)&&(e.flags|=32),ox(t,e),un(t,e,a,n),e.child;case 6:return t===null&&vd(e),null;case 13:return cx(t,e,n);case 4:return ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Op(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Gl,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!_n.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(_e(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),_d(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=jn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),kp(t,e,i,r,n);case 15:return sx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Sl(t,e),e.tag=1,yn(i)?(t=!0,zl(e)):t=!1,Vs(e,n),Ig(e,i,r),Sd(e,i,r,n),Td(null,e,i,!0,t,n);case 19:return ux(t,e,n);case 22:return ax(t,e,n)}throw Error(_e(156,e.tag))};function wx(t,e){return Q0(t,e)}function oS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new oS(t,e,n,i)}function Sh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lS(t){if(typeof t=="function")return Sh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zf)return 11;if(t===Vf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Sh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ts:return Xr(n.children,r,s,e);case Bf:a=8,r|=8;break;case ju:return t=Hn(12,n,e,r|2),t.elementType=ju,t.lanes=s,t;case Xu:return t=Hn(13,n,e,r),t.elementType=Xu,t.lanes=s,t;case $u:return t=Hn(19,n,e,r),t.elementType=$u,t.lanes=s,t;case U0:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N0:a=10;break e;case I0:a=9;break e;case zf:a=11;break e;case Vf:a=14;break e;case Zi:a=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=U0,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,i,r,s,a,o,l){return t=new cS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(s),t}function uS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ax(t){if(!t)return vr;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(yn(n))return wg(t,n,e)}return e}function Rx(t,e,n,i,r,s,a,o,l){return t=Mh(n,i,!0,t,r,s,a,o,l),t.context=Ax(null),n=t.current,i=dn(),r=fr(n),s=Ii(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,go(t,r,i),Sn(t,i),t}function vc(t,e,n,i){var r=e.current,s=dn(),a=fr(r);return n=Ax(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(si(t,r,a,s),vl(t,r,a)),a}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function dS(){return null}var Cx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Th(t){this._internalRoot=t}_c.prototype.render=Th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));vc(t,e,null,null)};_c.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){vc(null,t,null,null)}),e[Oi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&og(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function fS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(a);s.call(c)}}var a=Rx(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=a,t[Oi]=a.current,eo(t.nodeType===8?t.parentNode:t),es(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Jl(l);o.call(c)}}var l=Mh(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=l,t[Oi]=l.current,eo(t.nodeType===8?t.parentNode:t),es(function(){vc(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Jl(a);o.call(l)}}vc(e,a,t,r)}else a=fS(n,e,t,r,i);return Jl(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(Wf(e,n|1),Sn(e,Pt()),!(rt&6)&&(Qs=Pt()+500,Er()))}break;case 13:es(function(){var i=ki(t,1);if(i!==null){var r=dn();si(i,t,1,r)}}),Eh(t,1)}};jf=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=dn();si(e,t,134217728,n)}Eh(t,134217728)}};rg=function(t){if(t.tag===13){var e=fr(t),n=ki(t,e);if(n!==null){var i=dn();si(n,t,e,i)}Eh(t,e)}};sg=function(){return ft};ag=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};id=function(t,e,n){switch(e){case"input":if(Ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dc(i);if(!r)throw Error(_e(90));O0(i),Ku(i,r)}}}break;case"textarea":B0(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};X0=vh;$0=es;var hS={usingClientEntryPoint:!1,Events:[vo,Rs,dc,W0,j0,vh]},Sa={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pS={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{oc=jo.inject(pS),mi=jo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(_e(200));return uS(t,e,null,n)};Un.createRoot=function(t,e){if(!bh(t))throw Error(_e(299));var n=!1,i="",r=Cx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,i,r),t[Oi]=e.current,eo(t.nodeType===8?t.parentNode:t),new Th(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return es(t)};Un.hydrate=function(t,e,n){if(!yc(e))throw Error(_e(200));return Sc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Cx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Rx(e,null,t,1,n??null,r,!1,s,a),t[Oi]=e.current,eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _c(e)};Un.render=function(t,e,n){if(!yc(e))throw Error(_e(200));return Sc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!yc(t))throw Error(_e(40));return t._reactRootContainer?(es(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1};Un.unstable_batchedUpdates=vh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return Sc(t,e,n,!1,i)};Un.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Un})(d_);var Qp=Hu;Vu.createRoot=Qp.createRoot,Vu.hydrateRoot=Qp.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ct(){return ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ct.apply(this,arguments)}var It;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(It||(It={}));const Jp="popstate";function mS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=vi(r.location.hash.substr(1));return co("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:yo(s))}function i(r,s){ts(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return xS(e,n,i,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ts(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gS(){return Math.random().toString(36).substr(2,8)}function em(t,e){return{usr:t.state,key:t.key,idx:e}}function co(t,e,n,i){return n===void 0&&(n=null),ct({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vi(e):e,{state:n,key:e&&e.key||i||gS()})}function yo(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function xS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=It.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(ct({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=It.Pop;let x=d(),u=x==null?null:x-c;c=x,l&&l({action:o,location:S.location,delta:u})}function h(x,u){o=It.Push;let g=co(S.location,x,u);n&&n(g,x),c=d()+1;let v=em(g,c),M=S.createHref(g);try{a.pushState(v,"",M)}catch{r.location.assign(M)}s&&l&&l({action:o,location:S.location,delta:1})}function p(x,u){o=It.Replace;let g=co(S.location,x,u);n&&n(g,x),c=d();let v=em(g,c),M=S.createHref(g);a.replaceState(v,"",M),s&&l&&l({action:o,location:S.location,delta:0})}function _(x){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof x=="string"?x:yo(x);return tt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let S={get action(){return o},get location(){return t(r,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Jp,f),l=x,()=>{r.removeEventListener(Jp,f),l=null}},createHref(x){return e(r,x)},createURL:_,encodeLocation(x){let u=_(x);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:p,go(x){return a.go(x)}};return S}var Ft;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ft||(Ft={}));const vS=new Set(["lazy","caseSensitive","path","id","index","children"]);function _S(t){return t.index===!0}function Px(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,s)=>{let a=[...n,s],o=typeof r.id=="string"?r.id:a.join("-");if(tt(r.index!==!0||!r.children,"Cannot specify children on an index route"),tt(!i[o],'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),_S(r)){let l=ct({},r,e(r),{id:o});return i[o]=l,l}else{let l=ct({},r,e(r),{id:o,children:void 0});return i[o]=l,r.children&&(l.children=Px(r.children,e,a,i)),l}})}function Us(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?vi(e):e,r=So(i.pathname||"/",n);if(r==null)return null;let s=Dx(t);yS(s);let a=null;for(let o=0;a==null&&o<s.length;++o)a=CS(s[o],LS(r));return a}function Dx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(tt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=pr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(tt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dx(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:AS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Lx(s.path))r(s,a,l)}),e}function Lx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Lx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const SS=/^:\w+$/,MS=3,ES=2,TS=1,bS=10,wS=-2,tm=t=>t==="*";function AS(t,e){let n=t.split("/"),i=n.length;return n.some(tm)&&(i+=wS),e&&(i+=ES),n.filter(r=>!tm(r)).reduce((r,s)=>r+(SS.test(s)?MS:s===""?TS:bS),i)}function RS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function CS(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let a=0;a<n.length;++a){let o=n[a],l=a===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",d=PS({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!d)return null;Object.assign(i,d.params);let f=o.route;s.push({params:i,pathname:pr([r,d.pathname]),pathnameBase:FS(pr([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=pr([r,d.pathnameBase]))}return s}function PS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=DS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{if(d==="*"){let h=o[f]||"";a=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[d]=NS(o[f]||"",d),c},{}),pathname:s,pathnameBase:a,pattern:t}}function DS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ts(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(i.push(o),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function LS(t){try{return decodeURI(t)}catch(e){return ts(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function NS(t,e){try{return decodeURIComponent(t)}catch(n){return ts(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function So(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function IS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?vi(t):t;return{pathname:n?n.startsWith("/")?n:US(n,e):e,search:OS(i),hash:kS(r)}}function US(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ru(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Nx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=vi(t):(r=ct({},t),tt(!r.pathname||!r.pathname.includes("?"),ru("?","pathname","search",r)),tt(!r.pathname||!r.pathname.includes("#"),ru("#","pathname","hash",r)),tt(!r.search||!r.search.includes("#"),ru("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(i||a==null)o=n;else{let f=e.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=IS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),FS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Ah{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Ix(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ux=["post","put","patch","delete"],BS=new Set(Ux),zS=["get",...Ux],VS=new Set(zS),HS=new Set([301,302,303,307,308]),GS=new Set([307,308]),su={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},WS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},nm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jS=!Ox,XS=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function $S(t){tt(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e;if(t.mapRouteProperties)e=t.mapRouteProperties;else if(t.detectErrorBoundary){let U=t.detectErrorBoundary;e=z=>({hasErrorBoundary:U(z)})}else e=XS;let n={},i=Px(t.routes,e,void 0,n),r,s=t.basename||"/",a=ct({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),o=null,l=new Set,c=null,d=null,f=null,h=t.hydrationData!=null,p=Us(i,t.history.location,s),_=null;if(p==null){let U=Jn(404,{pathname:t.history.location.pathname}),{matches:z,route:G}=cm(i);p=z,_={[G.id]:U}}let S=!p.some(U=>U.route.lazy)&&(!p.some(U=>U.route.loader)||t.hydrationData!=null),x,u={historyAction:t.history.action,location:t.history.location,matches:p,initialized:S,navigation:su,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},g=It.Pop,v=!1,M,C=!1,b=!1,R=[],T=[],m=new Map,y=0,P=-1,F=new Map,B=new Set,j=new Map,ee=new Map,$=new Map,q=!1;function D(){return o=t.history.listen(U=>{let{action:z,location:G,delta:W}=U;if(q){q=!1;return}ts($.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=E({currentLocation:u.location,nextLocation:G,historyAction:z});if(X&&W!=null){q=!0,t.history.go(W*-1),A(X,{state:"blocked",location:G,proceed(){A(X,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),t.history.go(W)},reset(){Me(X),oe({blockers:new Map(x.state.blockers)})}});return}return Ne(z,G)}),u.initialized||Ne(It.Pop,u.location),x}function O(){o&&o(),l.clear(),M&&M.abort(),u.fetchers.forEach((U,z)=>Ce(z)),u.blockers.forEach((U,z)=>Me(z))}function Y(U){return l.add(U),()=>l.delete(U)}function oe(U){u=ct({},u,U),l.forEach(z=>z(u))}function ie(U,z){var G,W;let X=u.actionData!=null&&u.navigation.formMethod!=null&&Ri(u.navigation.formMethod)&&u.navigation.state==="loading"&&((G=U.state)==null?void 0:G._isRedirect)!==!0,pe;z.actionData?Object.keys(z.actionData).length>0?pe=z.actionData:pe=null:X?pe=u.actionData:pe=null;let ge=z.loaderData?lm(u.loaderData,z.loaderData,z.matches||[],z.errors):u.loaderData;for(let[de]of $)Me(de);let ae=v===!0||u.navigation.formMethod!=null&&Ri(u.navigation.formMethod)&&((W=U.state)==null?void 0:W._isRedirect)!==!0;r&&(i=r,r=void 0),oe(ct({},z,{actionData:pe,loaderData:ge,historyAction:g,location:U,initialized:!0,navigation:su,revalidation:"idle",restoreScrollPosition:Q(U,z.matches||u.matches),preventScrollReset:ae,blockers:new Map(u.blockers)})),C||g===It.Pop||(g===It.Push?t.history.push(U,U.state):g===It.Replace&&t.history.replace(U,U.state)),g=It.Pop,v=!1,C=!1,b=!1,R=[],T=[]}async function Ue(U,z){if(typeof U=="number"){t.history.go(U);return}let G=Fd(u.location,u.matches,s,a.v7_prependBasename,U,z==null?void 0:z.fromRouteId,z==null?void 0:z.relative),{path:W,submission:X,error:pe}=im(a.v7_normalizeFormMethod,!1,G,z),ge=u.location,ae=co(u.location,W,z&&z.state);ae=ct({},ae,t.history.encodeLocation(ae));let de=z&&z.replace!=null?z.replace:void 0,N=It.Push;de===!0?N=It.Replace:de===!1||X!=null&&Ri(X.formMethod)&&X.formAction===u.location.pathname+u.location.search&&(N=It.Replace);let ue=z&&"preventScrollReset"in z?z.preventScrollReset===!0:void 0,xe=E({currentLocation:ge,nextLocation:ae,historyAction:N});if(xe){A(xe,{state:"blocked",location:ae,proceed(){A(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),Ue(U,z)},reset(){Me(xe),oe({blockers:new Map(u.blockers)})}});return}return await Ne(N,ae,{submission:X,pendingError:pe,preventScrollReset:ue,replace:z&&z.replace})}function Be(){if(We(),oe({revalidation:"loading"}),u.navigation.state!=="submitting"){if(u.navigation.state==="idle"){Ne(u.historyAction,u.location,{startUninterruptedRevalidation:!0});return}Ne(g||u.historyAction,u.navigation.location,{overrideNavigation:u.navigation})}}async function Ne(U,z,G){M&&M.abort(),M=null,g=U,C=(G&&G.startUninterruptedRevalidation)===!0,le(u.location,u.matches),v=(G&&G.preventScrollReset)===!0;let W=r||i,X=G&&G.overrideNavigation,pe=Us(W,z,s);if(!pe){let he=Jn(404,{pathname:z.pathname}),{matches:ce,route:se}=cm(W);k(),ie(z,{matches:ce,loaderData:{},errors:{[se.id]:he}});return}if(QS(u.location,z)&&!(G&&G.submission&&Ri(G.submission.formMethod))){ie(z,{matches:pe});return}M=new AbortController;let ge=Ea(t.history,z,M.signal,G&&G.submission),ae,de;if(G&&G.pendingError)de={[Fs(pe).route.id]:G.pendingError};else if(G&&G.submission&&Ri(G.submission.formMethod)){let he=await K(ge,z,G.submission,pe,{replace:G.replace});if(he.shortCircuited)return;ae=he.pendingActionData,de=he.pendingActionError,X=ct({state:"loading",location:z},G.submission),ge=new Request(ge.url,{signal:ge.signal})}let{shortCircuited:N,loaderData:ue,errors:xe}=await te(ge,z,pe,X,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,ae,de);N||(M=null,ie(z,ct({matches:pe},ae?{actionData:ae}:{},{loaderData:ue,errors:xe})))}async function K(U,z,G,W,X){We();let pe=ct({state:"submitting",location:z},G);oe({navigation:pe});let ge,ae=Od(W,z);if(!ae.route.action&&!ae.route.lazy)ge={type:Ft.error,error:Jn(405,{method:U.method,pathname:z.pathname,routeId:ae.route.id})};else if(ge=await Ma("action",U,ae,W,n,e,s),U.signal.aborted)return{shortCircuited:!0};if(Gs(ge)){let de;return X&&X.replace!=null?de=X.replace:de=ge.location===u.location.pathname+u.location.search,await Ve(u,ge,{submission:G,replace:de}),{shortCircuited:!0}}if(ja(ge)){let de=Fs(W,ae.route.id);return(X&&X.replace)!==!0&&(g=It.Push),{pendingActionData:{},pendingActionError:{[de.route.id]:ge.error}}}if(Gr(ge))throw Jn(400,{type:"defer-action"});return{pendingActionData:{[ae.route.id]:ge.data}}}async function te(U,z,G,W,X,pe,ge,ae,de){let N=W;N||(N=ct({state:"loading",location:z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},X));let ue=X||pe?X||pe:N.formMethod&&N.formAction&&N.formData&&N.formEncType?{formMethod:N.formMethod,formAction:N.formAction,formData:N.formData,formEncType:N.formEncType}:void 0,xe=r||i,[he,ce]=rm(t.history,u,G,ue,z,b,R,T,j,xe,s,ae,de);if(k(lt=>!(G&&G.some(Qt=>Qt.route.id===lt))||he&&he.some(Qt=>Qt.route.id===lt)),he.length===0&&ce.length===0){let lt=fe();return ie(z,ct({matches:G,loaderData:{},errors:de||null},ae?{actionData:ae}:{},lt?{fetchers:new Map(u.fetchers)}:{})),{shortCircuited:!0}}if(!C){ce.forEach(Qt=>{let _i=u.fetchers.get(Qt.key),ss={state:"loading",data:_i&&_i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(Qt.key,ss)});let lt=ae||u.actionData;oe(ct({navigation:N},lt?Object.keys(lt).length===0?{actionData:null}:{actionData:lt}:{},ce.length>0?{fetchers:new Map(u.fetchers)}:{}))}P=++y,ce.forEach(lt=>{lt.controller&&m.set(lt.key,lt.controller)});let se=()=>ce.forEach(lt=>Oe(lt.key));M&&M.signal.addEventListener("abort",se);let{results:Pe,loaderResults:je,fetcherResults:ut}=await Ae(u.matches,G,he,ce,U);if(U.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",se),ce.forEach(lt=>m.delete(lt.key));let Qe=um(Pe);if(Qe)return await Ve(u,Qe,{replace:ge}),{shortCircuited:!0};let{loaderData:an,errors:on}=om(u,G,he,je,de,ce,ut,ee);ee.forEach((lt,Qt)=>{lt.subscribe(_i=>{(_i||lt.done)&&ee.delete(Qt)})});let fa=fe(),rs=ke(P),wr=fa||rs||ce.length>0;return ct({loaderData:an,errors:on},wr?{fetchers:new Map(u.fetchers)}:{})}function ye(U){return u.fetchers.get(U)||WS}function me(U,z,G,W){if(jS)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");m.has(U)&&Oe(U);let X=r||i,pe=Fd(u.location,u.matches,s,a.v7_prependBasename,G,z,W==null?void 0:W.relative),ge=Us(X,pe,s);if(!ge){L(U,z,Jn(404,{pathname:pe}));return}let{path:ae,submission:de}=im(a.v7_normalizeFormMethod,!0,pe,W),N=Od(ge,ae);if(v=(W&&W.preventScrollReset)===!0,de&&Ri(de.formMethod)){Se(U,z,ae,N,ge,de);return}j.set(U,{routeId:z,path:ae}),be(U,z,ae,N,ge,de)}async function Se(U,z,G,W,X,pe){if(We(),j.delete(U),!W.route.action&&!W.route.lazy){let Ht=Jn(405,{method:pe.formMethod,pathname:G,routeId:z});L(U,z,Ht);return}let ge=u.fetchers.get(U),ae=ct({state:"submitting"},pe,{data:ge&&ge.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(U,ae),oe({fetchers:new Map(u.fetchers)});let de=new AbortController,N=Ea(t.history,G,de.signal,pe);m.set(U,de);let ue=await Ma("action",N,W,X,n,e,s);if(N.signal.aborted){m.get(U)===de&&m.delete(U);return}if(Gs(ue)){m.delete(U),B.add(U);let Ht=ct({state:"loading"},pe,{data:void 0," _hasFetcherDoneAnything ":!0});return u.fetchers.set(U,Ht),oe({fetchers:new Map(u.fetchers)}),Ve(u,ue,{submission:pe,isFetchActionRedirect:!0})}if(ja(ue)){L(U,z,ue.error);return}if(Gr(ue))throw Jn(400,{type:"defer-action"});let xe=u.navigation.location||u.location,he=Ea(t.history,xe,de.signal),ce=r||i,se=u.navigation.state!=="idle"?Us(ce,u.navigation.location,s):u.matches;tt(se,"Didn't find any matches after fetcher action");let Pe=++y;F.set(U,Pe);let je=ct({state:"loading",data:ue.data},pe,{" _hasFetcherDoneAnything ":!0});u.fetchers.set(U,je);let[ut,Qe]=rm(t.history,u,se,pe,xe,b,R,T,j,ce,s,{[W.route.id]:ue.data},void 0);Qe.filter(Ht=>Ht.key!==U).forEach(Ht=>{let as=Ht.key,Ar=u.fetchers.get(as),Ro={state:"loading",data:Ar&&Ar.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(as,Ro),Ht.controller&&m.set(as,Ht.controller)}),oe({fetchers:new Map(u.fetchers)});let an=()=>Qe.forEach(Ht=>Oe(Ht.key));de.signal.addEventListener("abort",an);let{results:on,loaderResults:fa,fetcherResults:rs}=await Ae(u.matches,se,ut,Qe,he);if(de.signal.aborted)return;de.signal.removeEventListener("abort",an),F.delete(U),m.delete(U),Qe.forEach(Ht=>m.delete(Ht.key));let wr=um(on);if(wr)return Ve(u,wr);let{loaderData:lt,errors:Qt}=om(u,u.matches,ut,fa,void 0,Qe,rs,ee),_i={state:"idle",data:ue.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(U,_i);let ss=ke(Pe);u.navigation.state==="loading"&&Pe>P?(tt(g,"Expected pending action"),M&&M.abort(),ie(u.navigation.location,{matches:se,loaderData:lt,errors:Qt,fetchers:new Map(u.fetchers)})):(oe(ct({errors:Qt,loaderData:lm(u.loaderData,lt,se,Qt)},ss?{fetchers:new Map(u.fetchers)}:{})),b=!1)}async function be(U,z,G,W,X,pe){let ge=u.fetchers.get(U),ae=ct({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pe,{data:ge&&ge.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(U,ae),oe({fetchers:new Map(u.fetchers)});let de=new AbortController,N=Ea(t.history,G,de.signal);m.set(U,de);let ue=await Ma("loader",N,W,X,n,e,s);if(Gr(ue)&&(ue=await Vx(ue,N.signal,!0)||ue),m.get(U)===de&&m.delete(U),N.signal.aborted)return;if(Gs(ue)){B.add(U),await Ve(u,ue);return}if(ja(ue)){let he=Fs(u.matches,z);u.fetchers.delete(U),oe({fetchers:new Map(u.fetchers),errors:{[he.route.id]:ue.error}});return}tt(!Gr(ue),"Unhandled fetcher deferred data");let xe={state:"idle",data:ue.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(U,xe),oe({fetchers:new Map(u.fetchers)})}async function Ve(U,z,G){var W;let{submission:X,replace:pe,isFetchActionRedirect:ge}=G===void 0?{}:G;z.revalidate&&(b=!0);let ae=co(U.location,z.location,ct({_isRedirect:!0},ge?{_isFetchActionRedirect:!0}:{}));if(tt(ae,"Expected a location on the redirect navigation"),Fx.test(z.location)&&Ox&&typeof((W=window)==null?void 0:W.location)<"u"){let ce=t.history.createURL(z.location),se=So(ce.pathname,s)==null;if(window.location.origin!==ce.origin||se){pe?window.location.replace(z.location):window.location.assign(z.location);return}}M=null;let de=pe===!0?It.Replace:It.Push,{formMethod:N,formAction:ue,formEncType:xe,formData:he}=U.navigation;!X&&N&&ue&&he&&xe&&(X={formMethod:N,formAction:ue,formEncType:xe,formData:he}),GS.has(z.status)&&X&&Ri(X.formMethod)?await Ne(de,ae,{submission:ct({},X,{formAction:z.location}),preventScrollReset:v}):ge?await Ne(de,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:X,preventScrollReset:v}):await Ne(de,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:X?X.formMethod:void 0,formAction:X?X.formAction:void 0,formEncType:X?X.formEncType:void 0,formData:X?X.formData:void 0},preventScrollReset:v})}async function Ae(U,z,G,W,X){let pe=await Promise.all([...G.map(de=>Ma("loader",X,de,z,n,e,s)),...W.map(de=>de.matches&&de.match&&de.controller?Ma("loader",Ea(t.history,de.path,de.controller.signal),de.match,de.matches,n,e,s):{type:Ft.error,error:Jn(404,{pathname:de.path})})]),ge=pe.slice(0,G.length),ae=pe.slice(G.length);return await Promise.all([dm(U,G,ge,ge.map(()=>X.signal),!1,u.loaderData),dm(U,W.map(de=>de.match),ae,W.map(de=>de.controller?de.controller.signal:null),!0)]),{results:pe,loaderResults:ge,fetcherResults:ae}}function We(){b=!0,R.push(...k()),j.forEach((U,z)=>{m.has(z)&&(T.push(z),Oe(z))})}function L(U,z,G){let W=Fs(u.matches,z);Ce(U),oe({errors:{[W.route.id]:G},fetchers:new Map(u.fetchers)})}function Ce(U){m.has(U)&&Oe(U),j.delete(U),F.delete(U),B.delete(U),u.fetchers.delete(U)}function Oe(U){let z=m.get(U);tt(z,"Expected fetch controller: "+U),z.abort(),m.delete(U)}function $e(U){for(let z of U){let W={state:"idle",data:ye(z).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(z,W)}}function fe(){let U=[],z=!1;for(let G of B){let W=u.fetchers.get(G);tt(W,"Expected fetcher: "+G),W.state==="loading"&&(B.delete(G),U.push(G),z=!0)}return $e(U),z}function ke(U){let z=[];for(let[G,W]of F)if(W<U){let X=u.fetchers.get(G);tt(X,"Expected fetcher: "+G),X.state==="loading"&&(Oe(G),F.delete(G),z.push(G))}return $e(z),z.length>0}function Te(U,z){let G=u.blockers.get(U)||nm;return $.get(U)!==z&&$.set(U,z),G}function Me(U){u.blockers.delete(U),$.delete(U)}function A(U,z){let G=u.blockers.get(U)||nm;tt(G.state==="unblocked"&&z.state==="blocked"||G.state==="blocked"&&z.state==="blocked"||G.state==="blocked"&&z.state==="proceeding"||G.state==="blocked"&&z.state==="unblocked"||G.state==="proceeding"&&z.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+z.state),u.blockers.set(U,z),oe({blockers:new Map(u.blockers)})}function E(U){let{currentLocation:z,nextLocation:G,historyAction:W}=U;if($.size===0)return;$.size>1&&ts(!1,"A router only supports one blocker at a time");let X=Array.from($.entries()),[pe,ge]=X[X.length-1],ae=u.blockers.get(pe);if(!(ae&&ae.state==="proceeding")&&ge({currentLocation:z,nextLocation:G,historyAction:W}))return pe}function k(U){let z=[];return ee.forEach((G,W)=>{(!U||U(W))&&(G.cancel(),z.push(W),ee.delete(W))}),z}function re(U,z,G){if(c=U,f=z,d=G||(W=>W.key),!h&&u.navigation===su){h=!0;let W=Q(u.location,u.matches);W!=null&&oe({restoreScrollPosition:W})}return()=>{c=null,f=null,d=null}}function le(U,z){if(c&&d&&f){let G=z.map(X=>fm(X,u.loaderData)),W=d(U,G)||U.key;c[W]=f()}}function Q(U,z){if(c&&d&&f){let G=z.map(pe=>fm(pe,u.loaderData)),W=d(U,G)||U.key,X=c[W];if(typeof X=="number")return X}return null}function De(U){r=U}return x={get basename(){return s},get state(){return u},get routes(){return i},initialize:D,subscribe:Y,enableScrollRestoration:re,navigate:Ue,fetch:me,revalidate:Be,createHref:U=>t.history.createHref(U),encodeLocation:U=>t.history.encodeLocation(U),getFetcher:ye,deleteFetcher:Ce,dispose:O,getBlocker:Te,deleteBlocker:Me,_internalFetchControllers:m,_internalActiveDeferreds:ee,_internalSetRoutes:De},x}function YS(t){return t!=null&&"formData"in t}function Fd(t,e,n,i,r,s,a){let o,l;if(s!=null&&a!=="path"){o=[];for(let d of e)if(o.push(d),d.route.id===s){l=d;break}}else o=e,l=e[e.length-1];let c=Nx(r||".",wh(o).map(d=>d.pathnameBase),So(t.pathname,n)||t.pathname,a==="path");return r==null&&(c.search=t.search,c.hash=t.hash),(r==null||r===""||r===".")&&l&&l.route.index&&!Rh(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(c.pathname=c.pathname==="/"?n:pr([n,c.pathname])),yo(c)}function im(t,e,n,i){if(!i||!YS(i))return{path:n};if(i.formMethod&&!t1(i.formMethod))return{path:n,error:Jn(405,{method:i.formMethod})};let r;if(i.formData){let o=i.formMethod||"get";if(r={formMethod:t?o.toUpperCase():o.toLowerCase(),formAction:zx(n),formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:i.formData},Ri(r.formMethod))return{path:n,submission:r}}let s=vi(n),a=Bx(i.formData);return e&&s.search&&Rh(s.search)&&a.append("index",""),s.search="?"+a,{path:yo(s),submission:r}}function qS(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function rm(t,e,n,i,r,s,a,o,l,c,d,f,h){let p=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),S=t.createURL(r),x=h?Object.keys(h)[0]:void 0,g=qS(n,x).filter((M,C)=>{if(M.route.lazy)return!0;if(M.route.loader==null)return!1;if(KS(e.loaderData,e.matches[C],M)||a.some(T=>T===M.route.id))return!0;let b=e.matches[C],R=M;return sm(M,ct({currentUrl:_,currentParams:b.params,nextUrl:S,nextParams:R.params},i,{actionResult:p,defaultShouldRevalidate:s||_.pathname+_.search===S.pathname+S.search||_.search!==S.search||kx(b,R)}))}),v=[];return l.forEach((M,C)=>{if(!n.some(m=>m.route.id===M.routeId))return;let b=Us(c,M.path,d);if(!b){v.push({key:C,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let R=Od(b,M.path);if(o.includes(C)){v.push({key:C,routeId:M.routeId,path:M.path,matches:b,match:R,controller:new AbortController});return}sm(R,ct({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},i,{actionResult:p,defaultShouldRevalidate:s}))&&v.push({key:C,routeId:M.routeId,path:M.path,matches:b,match:R,controller:new AbortController})}),[g,v]}function KS(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function kx(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function sm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function am(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];tt(r,"No route found in manifest");let s={};for(let a in i){let l=r[a]!==void 0&&a!=="hasErrorBoundary";ts(!l,'Route "'+r.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!vS.has(a)&&(s[a]=i[a])}Object.assign(r,s),Object.assign(r,ct({},e(r),{lazy:void 0}))}async function Ma(t,e,n,i,r,s,a,o,l,c){o===void 0&&(o=!1),l===void 0&&(l=!1);let d,f,h,p=x=>{let u,g=new Promise((v,M)=>u=M);return h=()=>u(),e.signal.addEventListener("abort",h),Promise.race([x({request:e,params:n.params,context:c}),g])};try{let x=n.route[t];if(n.route.lazy)if(x)f=(await Promise.all([p(x),am(n.route,s,r)]))[0];else if(await am(n.route,s,r),x=n.route[t],x)f=await p(x);else if(t==="action"){let u=new URL(e.url),g=u.pathname+u.search;throw Jn(405,{method:e.method,pathname:g,routeId:n.route.id})}else return{type:Ft.data,data:void 0};else if(x)f=await p(x);else{let u=new URL(e.url),g=u.pathname+u.search;throw Jn(404,{pathname:g})}tt(f!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(x){d=Ft.error,f=x}finally{h&&e.signal.removeEventListener("abort",h)}if(e1(f)){let x=f.status;if(HS.has(x)){let v=f.headers.get("Location");if(tt(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!Fx.test(v))v=Fd(new URL(e.url),i.slice(0,i.indexOf(n)+1),a,!0,v);else if(!o){let M=new URL(e.url),C=v.startsWith("//")?new URL(M.protocol+v):new URL(v),b=So(C.pathname,a)!=null;C.origin===M.origin&&b&&(v=C.pathname+C.search+C.hash)}if(o)throw f.headers.set("Location",v),f;return{type:Ft.redirect,status:x,location:v,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||Ft.data,response:f};let u,g=f.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?u=await f.json():u=await f.text(),d===Ft.error?{type:d,error:new Ah(x,f.statusText,u),headers:f.headers}:{type:Ft.data,data:u,statusCode:f.status,headers:f.headers}}if(d===Ft.error)return{type:d,error:f};if(JS(f)){var _,S;return{type:Ft.deferred,deferredData:f,statusCode:(_=f.init)==null?void 0:_.status,headers:((S=f.init)==null?void 0:S.headers)&&new Headers(f.init.headers)}}return{type:Ft.data,data:f}}function Ea(t,e,n,i){let r=t.createURL(zx(e)).toString(),s={signal:n};if(i&&Ri(i.formMethod)){let{formMethod:a,formEncType:o,formData:l}=i;s.method=a.toUpperCase(),s.body=o==="application/x-www-form-urlencoded"?Bx(l):l}return new Request(r,s)}function Bx(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,i instanceof File?i.name:i);return e}function ZS(t,e,n,i,r){let s={},a=null,o,l=!1,c={};return n.forEach((d,f)=>{let h=e[f].route.id;if(tt(!Gs(d),"Cannot handle redirect results in processLoaderData"),ja(d)){let p=Fs(t,h),_=d.error;i&&(_=Object.values(i)[0],i=void 0),a=a||{},a[p.route.id]==null&&(a[p.route.id]=_),s[h]=void 0,l||(l=!0,o=Ix(d.error)?d.error.status:500),d.headers&&(c[h]=d.headers)}else Gr(d)?(r.set(h,d.deferredData),s[h]=d.deferredData.data):s[h]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(o=d.statusCode),d.headers&&(c[h]=d.headers)}),i&&(a=i,s[Object.keys(i)[0]]=void 0),{loaderData:s,errors:a,statusCode:o||200,loaderHeaders:c}}function om(t,e,n,i,r,s,a,o){let{loaderData:l,errors:c}=ZS(e,n,i,r,o);for(let d=0;d<s.length;d++){let{key:f,match:h,controller:p}=s[d];tt(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let _=a[d];if(!(p&&p.signal.aborted))if(ja(_)){let S=Fs(t.matches,h==null?void 0:h.route.id);c&&c[S.route.id]||(c=ct({},c,{[S.route.id]:_.error})),t.fetchers.delete(f)}else if(Gs(_))tt(!1,"Unhandled fetcher revalidation redirect");else if(Gr(_))tt(!1,"Unhandled fetcher deferred data");else{let S={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(f,S)}}return{loaderData:l,errors:c}}function lm(t,e,n,i){let r=ct({},e);for(let s of n){let a=s.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(r[a]=e[a]):t[a]!==void 0&&s.route.loader&&(r[a]=t[a]),i&&i.hasOwnProperty(a))break}return r}function Fs(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function cm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Jn(t,e){let{pathname:n,routeId:i,method:r,type:s}=e===void 0?{}:e,a="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(a="Bad Request",r&&n&&i?o="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(o="defer() is not supported in actions")):t===403?(a="Forbidden",o='Route "'+i+'" does not match URL "'+n+'"'):t===404?(a="Not Found",o='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",r&&n&&i?o="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(o='Invalid request method "'+r.toUpperCase()+'"')),new Ah(t||500,a,new Error(o),!0)}function um(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Gs(n))return n}}function zx(t){let e=typeof t=="string"?vi(t):t;return yo(ct({},e,{hash:""}))}function QS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Gr(t){return t.type===Ft.deferred}function ja(t){return t.type===Ft.error}function Gs(t){return(t&&t.type)===Ft.redirect}function JS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function e1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function t1(t){return VS.has(t.toLowerCase())}function Ri(t){return BS.has(t.toLowerCase())}async function dm(t,e,n,i,r,s){for(let a=0;a<n.length;a++){let o=n[a],l=e[a];if(!l)continue;let c=t.find(f=>f.route.id===l.route.id),d=c!=null&&!kx(c,l)&&(s&&s[l.route.id])!==void 0;if(Gr(o)&&(r||d)){let f=i[a];tt(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Vx(o,f,r).then(h=>{h&&(n[a]=h||n[a])})}}}async function Vx(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ft.data,data:t.deferredData.unwrappedData}}catch(r){return{type:Ft.error,error:r}}return{type:Ft.data,data:t.deferredData.data}}}function Rh(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function fm(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function Od(t,e){let n=typeof e=="string"?vi(e).search:e.search;if(t[t.length-1].route.index&&Rh(n||""))return t[t.length-1];let i=wh(t);return i[i.length-1]}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ec.apply(this,arguments)}const Ch=ve.createContext(null),Hx=ve.createContext(null),Mc=ve.createContext(null),Ec=ve.createContext(null),la=ve.createContext({outlet:null,matches:[],isDataRoute:!1}),Gx=ve.createContext(null);function Tc(){return ve.useContext(Ec)!=null}function Wx(){return Tc()||tt(!1),ve.useContext(Ec).location}function jx(t){ve.useContext(Mc).static||ve.useLayoutEffect(t)}function n1(){let{isDataRoute:t}=ve.useContext(la);return t?p1():i1()}function i1(){Tc()||tt(!1);let{basename:t,navigator:e}=ve.useContext(Mc),{matches:n}=ve.useContext(la),{pathname:i}=Wx(),r=JSON.stringify(wh(n).map(o=>o.pathnameBase)),s=ve.useRef(!1);return jx(()=>{s.current=!0}),ve.useCallback(function(o,l){if(l===void 0&&(l={}),!s.current)return;if(typeof o=="number"){e.go(o);return}let c=Nx(o,JSON.parse(r),i,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:pr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,r,i])}function r1(t,e,n){Tc()||tt(!1);let{navigator:i}=ve.useContext(Mc),{matches:r}=ve.useContext(la),s=r[r.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let l=Wx(),c;if(e){var d;let S=typeof e=="string"?vi(e):e;o==="/"||(d=S.pathname)!=null&&d.startsWith(o)||tt(!1),c=S}else c=l;let f=c.pathname||"/",h=o==="/"?f:f.slice(o.length)||"/",p=Us(t,{pathname:h}),_=c1(p&&p.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:pr([o,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?o:pr([o,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,n);return e&&_?ve.createElement(Ec.Provider,{value:{location:ec({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:It.Pop}},_):_}function s1(){let t=h1(),e=Ix(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),n?ve.createElement("pre",{style:r},n):null,s)}const a1=ve.createElement(s1,null);class o1 extends ve.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ve.createElement(la.Provider,{value:this.props.routeContext},ve.createElement(Gx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l1(t){let{routeContext:e,match:n,children:i}=t,r=ve.useContext(Ch);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ve.createElement(la.Provider,{value:e},i)}function c1(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let o=s.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));o>=0||tt(!1),s=s.slice(0,Math.min(s.length,o+1))}return s.reduceRight((o,l,c)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;n&&(f=l.route.errorElement||a1);let h=e.concat(s.slice(0,c+1)),p=()=>{let _;return d?_=f:l.route.Component?_=ve.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=o,ve.createElement(l1,{match:l,routeContext:{outlet:o,matches:h,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?ve.createElement(o1,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var kd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(kd||(kd={}));var uo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(uo||(uo={}));function u1(t){let e=ve.useContext(Ch);return e||tt(!1),e}function d1(t){let e=ve.useContext(Hx);return e||tt(!1),e}function f1(t){let e=ve.useContext(la);return e||tt(!1),e}function Xx(t){let e=f1(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function h1(){var t;let e=ve.useContext(Gx),n=d1(uo.UseRouteError),i=Xx(uo.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function p1(){let{router:t}=u1(kd.UseNavigateStable),e=Xx(uo.UseNavigateStable),n=ve.useRef(!1);return jx(()=>{n.current=!0}),ve.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ec({fromRouteId:e},s)))},[t,e])}function m1(t){let{fallbackElement:e,router:n}=t,[i,r]=ve.useState(n.state);ve.useLayoutEffect(()=>n.subscribe(r),[n,r]);let s=ve.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,c,d)=>n.navigate(l,{state:c,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(l,c,d)=>n.navigate(l,{replace:!0,state:c,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[n]),a=n.basename||"/",o=ve.useMemo(()=>({router:n,navigator:s,static:!1,basename:a}),[n,s,a]);return ve.createElement(ve.Fragment,null,ve.createElement(Ch.Provider,{value:o},ve.createElement(Hx.Provider,{value:i},ve.createElement(x1,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?ve.createElement(g1,{routes:n.routes,state:i}):e))),null)}function g1(t){let{routes:e,state:n}=t;return r1(e,void 0,n)}function x1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=It.Pop,navigator:s,static:a=!1}=t;Tc()&&tt(!1);let o=e.replace(/^\/*/,"/"),l=ve.useMemo(()=>({basename:o,navigator:s,static:a}),[o,s,a]);typeof i=="string"&&(i=vi(i));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:p="default"}=i,_=ve.useMemo(()=>{let S=So(c,o);return S==null?null:{location:{pathname:S,search:d,hash:f,state:h,key:p},navigationType:r}},[o,c,d,f,h,p,r]);return _==null?null:ve.createElement(Mc.Provider,{value:l},ve.createElement(Ec.Provider,{children:n,value:_}))}var hm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hm||(hm={}));new Promise(()=>{});function v1(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:ve.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:ve.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tc.apply(this,arguments)}function _1(t,e){return $S({basename:e==null?void 0:e.basename,future:tc({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:mS({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||y1(),routes:t,mapRouteProperties:v1}).initialize()}function y1(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=tc({},e,{errors:S1(e.errors)})),e}function S1(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Ah(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){let s=new Error(r.message);s.stack="",n[i]=s}else n[i]=r;return n}var pm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(pm||(pm={}));var mm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));var $x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gm=sr.createContext&&sr.createContext($x),mr=globalThis&&globalThis.__assign||function(){return mr=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},mr.apply(this,arguments)},M1=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Yx(t){return t&&t.map(function(e,n){return sr.createElement(e.tag,mr({key:n},e.attr),Yx(e.child))})}function $n(t){return function(e){return sr.createElement(E1,mr({attr:mr({},t.attr)},e),Yx(t.child))}}function E1(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,a=M1(t,["attr","size","title"]),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),sr.createElement("svg",mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:mr(mr({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&sr.createElement("title",null,s),t.children)};return gm!==void 0?sr.createElement(gm.Consumer,null,function(n){return e(n)}):e($x)}function T1(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(t)}function b1(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"}},{tag:"polyline",attr:{points:"5 12 12 5 19 12"}}]})(t)}function w1(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"}},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"}},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"}}]})(t)}function bc(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function qx(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(t)}function Kx(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)}function xm(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(t)}function Zx(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function A1(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(t)}function vm(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(t)}function R1(){const[t,e]=ve.useState(0),[n,i]=ve.useState(!1);ve.useEffect(()=>{const o=()=>{const c=document.getElementById("root");if(c){const d=c.scrollTop,f=c.scrollHeight-c.clientHeight,h=d/f*100;e(h),i(d>300)}},l=document.getElementById("root");if(l)return l.addEventListener("scroll",o,{passive:!0}),()=>l.removeEventListener("scroll",o)},[]);const r=()=>{const o=document.getElementById("root");o&&o.scrollTo({top:0,behavior:"smooth"})};if(!n)return null;const s=2*Math.PI*18,a=s-t/100*s;return I.jsx("div",{className:"fixed bottom-8 right-8 z-50 lg:hidden",children:I.jsxs("button",{onClick:r,className:"relative w-12 h-12 flex items-center justify-center dark:bg-slate-800/80 bg-white/90 backdrop-blur-sm rounded-full border dark:border-slate-700 border-gray-300 hover:border-sky-400 transition-all duration-300 hover:scale-110 group shadow-lg","aria-label":"Scroll to top",children:[I.jsxs("svg",{className:"absolute inset-0 w-12 h-12 -rotate-90",children:[I.jsx("circle",{cx:"24",cy:"24",r:"18",fill:"none",stroke:"rgb(51 65 85)",strokeWidth:"2"}),I.jsx("circle",{cx:"24",cy:"24",r:"18",fill:"none",stroke:"rgb(56 189 248)",strokeWidth:"2",strokeDasharray:s,strokeDashoffset:a,strokeLinecap:"round",className:"transition-all duration-300"})]}),I.jsx(b1,{className:"w-5 h-5 dark:text-slate-300 text-gray-700 group-hover:text-sky-400 transition-colors relative z-10"})]})})}function Qx({children:t}){return I.jsxs("div",{className:"min-h-full",id:"layout",children:[t,I.jsx(R1,{})]})}function Jx(t){return $n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}}]})(t)}const $r={email:"contact@animeshbasnet.com.np",linkedin:"https://www.linkedin.com/in/animeshbasnet/",instagram:"https://www.instagram.com/crypticsy/",github:"https://github.com/crypticsy/"},Ia={name:"Animesh Singh Basnet",greeting:"Hi, my name is",tagline:"I build things from data.",description:"I'm a programmer specializing in building (and occasionally designing). Currently, I'm focused on researching and developing Machine Learning and Large Language Models.",copyright:"Crypticsy"},_m=[{sn:"01.",title:"About",scrollToID:"about"},{sn:"02.",title:"Work",scrollToID:"work"},{sn:"03.",title:"Publication",scrollToID:"publications"},{sn:"04.",title:"Contact",scrollToID:"contact"}],C1=""+new URL("himalayanJavaCaseStudy-3adefed8.png",import.meta.url).href,P1=""+new URL("digital_threats-6e01208c.jpg",import.meta.url).href,D1=[{title:"APT Attribution Using Deep Reinforcement Learning",subtitle:"This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.",type:"Research Paper",publishedDate:new Date(2025,9,29),publicationURL:"https://dl.acm.org/doi/10.1145/3736654",publicationImage:P1},{title:"Himalayan Java",subtitle:"Navigating Challenges and Pioneering Sustainability in Nepali Coffee Industry",type:"A Case Study",publishedDate:new Date(2023,7,1),publicationURL:"https://parthstudent.vc/case-study/",publicationImage:C1}],L1=""+new URL("grago-8e0c780e.jpeg",import.meta.url).href,N1=""+new URL("snadder-4b598fd0.webp",import.meta.url).href,I1=[{title:"Snadder",description:"Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",tags:["Python","React","Tailwind"],imageURL:N1,hostedURL:"https://snadder.io/",imagePosition:"top"},{title:"Pocket Booth",description:"A pocket-sized digital photo booth application that allows users to capture instant photo strips and store them locally.",tags:["Camera","Google-oauth","Typescript"],imageURL:"https://crypticsy.github.io/pocket-booth/home_screen.png",githubURL:"https://github.com/crypticsy/pocket-booth",hostedURL:"https://crypticsy.github.io/pocket-booth/",imagePosition:"right"},{title:"Sanctuary.io",description:"A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",tags:["P5JS","Javascript"],githubURL:"https://github.com/crypticsy/sanctuary",hostedURL:"https://crypticsy.github.io/sanctuary/"},{title:"Vision Caster",description:"An interactive image analysis system for the visually impaired. It uses the BLIP model on a Raspberry Pi to process images and give real-time descriptive captions and auditory feedback.",tags:["RasberryPi","Transformers","Azure"],githubURL:"https://github.com/crypticsy/VisionCaster"},{title:"From Me to You",description:"A web application for sending heartfelt digital letters to friends and loved ones.",tags:["Typescript","TailwindCSS"],githubURL:"https://github.com/crypticsy/from-me-to-you",hostedURL:"https://crypticsy.github.io/from-me-to-you/",imageURL:"https://github.com/crypticsy/from-me-to-you/blob/master/public/demo.gif?raw=true",imagePosition:"right"},{title:"Ropey DVD Management System",description:"An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",tags:["ASP.NET","MVC","Bootstrap"],githubURL:"https://github.com/crypticsy/RopeyDVDManagementSystem"},{title:"The Marauder's Map",description:"A web application inspired by the Marauder's Map from the Harry Potter universe, enabling users to explore a digital map of Hogwarts with moving footprints and hidden rooms.",tags:["React-Three-Fiber","Typescript"],imageURL:"https://crypticsy.github.io/the-marauders-map/main_screen.png",githubURL:"https://github.com/crypticsy/the-marauders-map",hostedURL:"https://crypticsy.github.io/the-marauders-map/",imagePosition:"top"},{title:"HAR System",description:"Human Activity Recognition (HAR) system designed to process and analyze sensor data to recognize human activities using XGBoost for the CASAS Smart Home Data Set - Dataset 17.",tags:["Streamlit","XGBoost"],imageURL:"https://github.com/crypticsy/human-activity-recognition/blob/master/Images/demo.gif?raw=true",githubURL:"https://github.com/crypticsy/human-activity-recognition",imagePosition:"right"},{title:"Chess Engine",description:"A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",tags:["Python","PyGame","Algorithm"],githubURL:"https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/"},{title:"Animated Movie Ontology",description:"A semantic programming application tailored for the animated film industry that organizes and analyzes complex data sets from animated films, leveraging ontologies and RDF files to facilitate this process.",tags:["Semantics","Protege","Streamlit"],githubURL:"https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology"},{title:"Grago",description:"Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",tags:["Django","Postgresql","Data Science"],imageURL:L1,imagePosition:"top"},{title:"Path Visualizer",description:"A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",tags:["Flask","Javascript","TailwindCSS"],githubURL:"https://github.com/crypticsy/PathVisualizer",hostedURL:"https://path-visualizer-crypticsy.vercel.app/"}],au={title:"Let's Talk",description:"Although I’m not actively seeking new opportunities, my inbox is always open. If you have a question or just want to say hello, I’ll do my best to respond.",buttonText:"Say Hello"};function ev(t){window.open(t,"_blank")}function Ph(){window.location.href=`mailto:${$r.email}`}function ir({IconComponent:t,url:e,type:n,size:i="medium"}){return I.jsx("div",{className:"icon-wrapper flex justify-center items-center cursor-pointer hover:text-sky-400"+(i==="medium"?" h-8 w-8":" h-5 w-5"),onClick:()=>n==="email"?Ph():ev(e),children:I.jsx(t,{className:"cursor-pointer social-icon"+(i==="medium"?" w-6 h-6":" w-4 h-4")})})}function U1(){return I.jsx("div",{className:"hidden lg:block self-end sticky bottom-0 pl-6 lg:pl-10 xl:pl-12 z-20",children:I.jsxs("div",{className:"grid grid-rows-[auto_auto_auto_1fr] gap-6",children:[I.jsx(ir,{IconComponent:Jx,url:"",type:"email"}),I.jsx(ir,{IconComponent:Kx,url:$r.linkedin,type:"link"}),I.jsx(ir,{IconComponent:qx,url:$r.instagram,type:"link"}),I.jsx("div",{className:"h-[8rem] w-8 justify-center flex",children:I.jsx("div",{className:"dark:bg-white bg-gray-400 w-0.5 h-full rounded-md"})})]})})}function F1(){return I.jsx("div",{className:"hidden lg:block self-end sticky bottom-0 pr-6 lg:pr-10 xl:pr-12 z-20",children:I.jsxs("div",{className:"grid grid-rows-[auto_1fr] gap-6",children:[I.jsx(ir,{IconComponent:bc,url:$r.github,type:"link"}),I.jsx("div",{className:"h-[8rem] w-8 justify-center flex",children:I.jsx("div",{className:"dark:bg-white bg-gray-400 w-0.5 h-full rounded-md"})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="181",O1=0,ym=1,k1=2,tv=1,B1=2,wi=3,zi=0,jt=1,An=2,ai=0,Ws=1,Sm=2,Mm=3,Em=4,z1=5,kr=100,V1=101,H1=102,G1=103,W1=104,j1=200,X1=201,$1=202,Y1=203,Bd=204,zd=205,q1=206,K1=207,Z1=208,Q1=209,J1=210,eM=211,tM=212,nM=213,iM=214,Vd=0,nc=1,Hd=2,Js=3,Gd=4,Wd=5,jd=6,Xd=7,nv=0,rM=1,sM=2,gr=0,aM=1,oM=2,lM=3,cM=4,uM=5,dM=6,fM=7,iv=300,ea=301,ta=302,$d=303,Yd=304,Ac=306,qd=1e3,Li=1001,Kd=1002,Pn=1003,hM=1004,Xo=1005,Xt=1006,ou=1007,Wr=1008,Nn=1009,rv=1010,sv=1011,fo=1012,Dh=1013,_r=1014,Ni=1015,ca=1016,Lh=1017,Nh=1018,na=1020,av=35902,ov=35899,lv=1021,cv=1022,ii=1023,ho=1026,ia=1027,uv=1028,Ih=1029,Uh=1030,Fh=1031,Oh=1033,bl=33776,wl=33777,Al=33778,Rl=33779,Zd=35840,Qd=35841,Jd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37808,af=37809,of=37810,lf=37811,cf=37812,uf=37813,df=37814,ff=37815,hf=37816,pf=37817,mf=37818,gf=37819,xf=37820,vf=37821,_f=36492,yf=36494,Sf=36495,Mf=36283,Ef=36284,Tf=36285,bf=36286,Mo=3200,pM=3201,mM=0,gM=1,hi="",Ct="srgb",yr="srgb-linear",ic="linear",pt="srgb",cs=7680,Tm=519,xM=512,vM=513,_M=514,dv=515,yM=516,SM=517,MM=518,EM=519,bm=35044,wf="300 es",pi=2e3,rc=2001;function fv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TM(){const t=sc("canvas");return t.style.display="block",t}const wm={};function Am(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ye(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function po(...t){const e=t.join(" ");e in wm||(wm[e]=!0,Ye(...t))}function bM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=Math.PI/180,Af=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function wM(t,e){return(t%e+e)%e}function cu(t,e,n){return(1-n)*t+n*e}function Ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=S;return}if(f!==S||l!==h||c!==p||d!==_){let x=l*h+c*p+d*_+f*S;x<0&&(h=-h,p=-p,_=-_,S=-S,x=-x);let u=1-o;if(x<.9995){const g=Math.acos(x),v=Math.sin(g);u=Math.sin(u*g)/v,o=Math.sin(o*g)/v,l=l*u+h*o,c=c*u+p*o,d=d*u+_*o,f=f*u+S*o}else{l=l*u+h*o,c=c*u+p*o,d=d*u+_*o,f=f*u+S*o;const g=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=g,c*=g,d*=g,f*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-o*p,e[n+2]=c*_+d*p+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new ne,Rm=new To;class qe{constructor(e,n,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=r[0],x=r[3],u=r[6],g=r[1],v=r[4],M=r[7],C=r[2],b=r[5],R=r[8];return s[0]=a*S+o*g+l*C,s[3]=a*x+o*v+l*b,s[6]=a*u+o*M+l*R,s[1]=c*S+d*g+f*C,s[4]=c*x+d*v+f*b,s[7]=c*u+d*M+f*R,s[2]=h*S+p*g+_*C,s[5]=h*x+p*v+_*b,s[8]=h*u+p*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,p=c*s-a*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(du.makeScale(e,n)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,n){return this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const du=new qe,Cm=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){const t={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yr]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:Cm,fromXYZ:Pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Cm,fromXYZ:Pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),t}const at=AM();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class RM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=sc("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fu(r[a].image)):s.push(fu(r[a]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let PM=0;const hu=new ne;class Yt extends Tr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Li,r=Li,s=Xt,a=Wr,o=ii,l=Nn,c=Yt.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Eo(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=iv;Yt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],x=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+x)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,C=(u+1)/2,b=(d+h)/4,R=(f+S)/4,T=(_+x)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=T/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=T/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-_)*(x-_)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(x-_)/g,this.y=(f-S)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DM extends Tr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Yt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new kh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends DM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hv extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Yo.subVectors(this.max,ba),ds.subVectors(e.a,ba),fs.subVectors(e.b,ba),hs.subVectors(e.c,ba),ji.subVectors(fs,ds),Xi.subVectors(hs,fs),Cr.subVectors(ds,hs);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Cr.z,Cr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Cr.z,0,-Cr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Cr.y,Cr.x,0];return!pu(n,ds,fs,hs,Yo)||(n=[1,0,0,0,1,0,0,0,1],!pu(n,ds,fs,hs,Yo))?!1:(qo.crossVectors(ji,Xi),n=[qo.x,qo.y,qo.z],pu(n,ds,fs,hs,Yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],qn=new ne,$o=new bo,ds=new ne,fs=new ne,hs=new ne,ji=new ne,Xi=new ne,Cr=new ne,ba=new ne,Yo=new ne,qo=new ne,Pr=new ne;function pu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),d=i.dot(Pr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const NM=new bo,wa=new ne,mu=new ne;class Bh{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const n=wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(mu)),this.expandByPoint(wa.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new ne,gu=new ne,Ko=new ne,$i=new ne,xu=new ne,Zo=new ne,vu=new ne;class IM{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gu.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(gu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ko),o=$i.dot(this.direction),l=-$i.dot(Ko),c=$i.lengthSq(),d=Math.abs(1-a*a);let f,h,p,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const S=1/d;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gu).addScaledVector(Ko,h),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){xu.subVectors(n,e),Zo.subVectors(i,e),vu.crossVectors(xu,Zo);let a=this.direction.dot(vu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Zo.crossVectors($i,Zo));if(l<0)return null;const c=o*this.direction.dot(xu.cross($i));if(c<0||l+c>a)return null;const d=-o*$i.dot(vu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,a,o,l,c,d,f,h,p,_,S,x){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,p,_,S,x)}set(e,n,i,r,s,a,o,l,c,d,f,h,p,_,S,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,p=a*f,_=o*d,S=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,S=c*f;n[0]=h+S*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,S=c*f;n[0]=h-S*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*d,n[9]=S-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*f,_=o*d,S=o*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=S-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+S,n[5]=a*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*d,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,FM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(i,Tn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(i,Tn)),Yi.normalize(),Qo.crossVectors(Tn,Yi),r[0]=Yi.x,r[4]=Qo.x,r[8]=Tn.x,r[1]=Yi.y,r[5]=Qo.y,r[9]=Tn.y,r[2]=Yi.z,r[6]=Qo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],x=i[10],u=i[14],g=i[3],v=i[7],M=i[11],C=i[15],b=r[0],R=r[4],T=r[8],m=r[12],y=r[1],P=r[5],F=r[9],B=r[13],j=r[2],ee=r[6],$=r[10],q=r[14],D=r[3],O=r[7],Y=r[11],oe=r[15];return s[0]=a*b+o*y+l*j+c*D,s[4]=a*R+o*P+l*ee+c*O,s[8]=a*T+o*F+l*$+c*Y,s[12]=a*m+o*B+l*q+c*oe,s[1]=d*b+f*y+h*j+p*D,s[5]=d*R+f*P+h*ee+p*O,s[9]=d*T+f*F+h*$+p*Y,s[13]=d*m+f*B+h*q+p*oe,s[2]=_*b+S*y+x*j+u*D,s[6]=_*R+S*P+x*ee+u*O,s[10]=_*T+S*F+x*$+u*Y,s[14]=_*m+S*B+x*q+u*oe,s[3]=g*b+v*y+M*j+C*D,s[7]=g*R+v*P+M*ee+C*O,s[11]=g*T+v*F+M*$+C*Y,s[15]=g*m+v*B+M*q+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],x=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+S*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*d-s*l*d)+x*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],x=e[14],u=e[15],g=f*x*c-S*h*c+S*l*p-o*x*p-f*l*u+o*h*u,v=_*h*c-d*x*c-_*l*p+a*x*p+d*l*u-a*h*u,M=d*S*c-_*f*c+_*o*p-a*S*p-d*o*u+a*f*u,C=_*f*l-d*S*l-_*o*h+a*S*h+d*o*x-a*f*x,b=n*g+i*v+r*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=g*R,e[1]=(S*h*s-f*x*s-S*r*p+i*x*p+f*r*u-i*h*u)*R,e[2]=(o*x*s-S*l*s+S*r*c-i*x*c-o*r*u+i*l*u)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=v*R,e[5]=(d*x*s-_*h*s+_*r*p-n*x*p-d*r*u+n*h*u)*R,e[6]=(_*l*s-a*x*s-_*r*c+n*x*c+a*r*u-n*l*u)*R,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=M*R,e[9]=(_*f*s-d*S*s-_*i*p+n*S*p+d*i*u-n*f*u)*R,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*R,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*p-n*o*p)*R,e[12]=C*R,e[13]=(d*S*r-_*f*r+_*i*h-n*S*h-d*i*x+n*f*x)*R,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*x-n*o*x)*R,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,p=s*d,_=s*f,S=a*d,x=a*f,u=o*f,g=l*c,v=l*d,M=l*f,C=i.x,b=i.y,R=i.z;return r[0]=(1-(S+u))*C,r[1]=(p+M)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(h+u))*b,r[6]=(x+g)*b,r[7]=0,r[8]=(_+v)*R,r[9]=(x-g)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const a=ps.set(r[4],r[5],r[6]).length(),o=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,d=1/a,f=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=d,Kn.elements[5]*=d,Kn.elements[6]*=d,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,n.setFromRotationMatrix(Kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=pi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===pi)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===rc)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===pi)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===rc)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new ne,Kn=new Bt,UM=new ne(0,0,0),FM=new ne(1,1,1),Yi=new ne,Qo=new ne,Tn=new ne,Dm=new Bt,Lm=new To;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const Nm=new ne,ms=new To,Mi=new Bt,Jo=new ne,Aa=new ne,kM=new ne,BM=new To,Im=new ne(1,0,0),Um=new ne(0,1,0),Fm=new ne(0,0,1),Om={type:"added"},zM={type:"removed"},gs={type:"childadded",child:null},_u={type:"childremoved",child:null};class Dn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ne,n=new Vi,i=new To,r=new ne(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new qe}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Nm.copy(e).applyQuaternion(this.quaternion),this.position.add(Nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Aa,Jo,this.up):Mi.lookAt(Jo,Aa,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Mi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),gs.child=e,this.dispatchEvent(gs),gs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zM),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,kM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new ne(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new ne,Ei=new ne,yu=new ne,Ti=new ne,xs=new ne,vs=new ne,km=new ne,Su=new ne,Mu=new ne,Eu=new ne,Tu=new Lt,bu=new Lt,wu=new Lt;class ni{constructor(e=new ne,n=new ne,i=new ne){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ei.subVectors(i,n),yu.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(Ei),l=Zn.dot(yu),c=Ei.dot(Ei),d=Ei.dot(yu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Tu.setScalar(0),bu.setScalar(0),wu.setScalar(0),Tu.fromBufferAttribute(e,n),bu.fromBufferAttribute(e,i),wu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Tu,s.x),a.addScaledVector(bu,s.y),a.addScaledVector(wu,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ei.subVectors(e,n),Zn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),vs.subVectors(s,i),Su.subVectors(e,i);const l=xs.dot(Su),c=vs.dot(Su);if(l<=0&&c<=0)return n.copy(i);Mu.subVectors(e,r);const d=xs.dot(Mu),f=vs.dot(Mu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(xs,a);Eu.subVectors(e,s);const p=xs.dot(Eu),_=vs.dot(Eu);if(_>=0&&p<=_)return n.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(vs,o);const x=d*_-p*f;if(x<=0&&f-d>=0&&p-_>=0)return km.subVectors(s,r),o=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(km,o);const u=1/(x+S+h);return a=S*u,o=h*u,n.copy(i).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},el={h:0,s:0,l:0};function Au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=wM(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Au(a,s,e+1/3),this.g=Au(a,s,e),this.b=Au(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ct){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return at.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ct){at.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(el);const i=cu(qi.h,el.h,n),r=cu(qi.s,el.s,n),s=cu(qi.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new dt;dt.NAMES=mv;let VM=0;class ua extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=Ws,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=zd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gv extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new ne,tl=new Ze;let HM=0;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bm,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}}class xv extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vv extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GM=0;const kn=new Bt,Ru=new Dn,_s=new ne,bn=new bo,Ra=new bo,Gt=new ne;class Gi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?vv:xv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(bn.min,Ra.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Ra.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Ra.min),bn.expandByPoint(Ra.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Gt.add(_s)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new ne,l[T]=new ne;const c=new ne,d=new ne,f=new ne,h=new Ze,p=new Ze,_=new Ze,S=new ne,x=new ne;function u(T,m,y){c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,m),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,m),_.fromBufferAttribute(s,y),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),x.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(P),o[T].add(S),o[m].add(S),o[y].add(S),l[T].add(x),l[m].add(x),l[y].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let T=0,m=g.length;T<m;++T){const y=g[T],P=y.start,F=y.count;for(let B=P,j=P+F;B<j;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new ne,M=new ne,C=new ne,b=new ne;function R(T){C.fromBufferAttribute(r,T),b.copy(C);const m=o[T];v.copy(m),v.sub(C.multiplyScalar(C.dot(m))).normalize(),M.crossVectors(b,m);const P=M.dot(l[T])<0?-1:1;a.setXYZW(T,v.x,v.y,v.z,P)}for(let T=0,m=g.length;T<m;++T){const y=g[T],P=y.start,F=y.count;for(let B=P,j=P+F;B<j;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new ne,s=new ne,a=new ne,o=new ne,l=new ne,c=new ne,d=new ne,f=new ne;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Wn(h,d,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new Bt,Dr=new IM,nl=new Bh,zm=new ne,il=new ne,rl=new ne,sl=new ne,Cu=new ne,al=new ne,Vm=new ne,ol=new ne;class xi extends Dn{constructor(e=new Gi,n=new gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Cu.fromBufferAttribute(f,e),a?al.addScaledVector(Cu,d):al.addScaledVector(Cu.sub(n),d))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(nl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(nl,zm)===null||Dr.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const x=h[_],u=a[x.materialIndex],g=Math.max(x.start,p.start),v=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=o.getX(M),R=o.getX(M+1),T=o.getX(M+2);r=ll(this,u,e,i,c,d,f,b,R,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let x=_,u=S;x<u;x+=3){const g=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);r=ll(this,a,e,i,c,d,f,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const x=h[_],u=a[x.materialIndex],g=Math.max(x.start,p.start),v=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=M,R=M+1,T=M+2;r=ll(this,u,e,i,c,d,f,b,R,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let x=_,u=S;x<u;x+=3){const g=x,v=x+1,M=x+2;r=ll(this,a,e,i,c,d,f,g,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function WM(t,e,n,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zi,o),l===null)return null;ol.copy(o),ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ol);return c<n.near||c>n.far?null:{distance:c,point:ol.clone(),object:t}}function ll(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,il),t.getVertexPosition(l,rl),t.getVertexPosition(c,sl);const d=WM(t,e,n,i,il,rl,sl,Vm);if(d){const f=new ne;ni.getBarycoord(Vm,il,rl,sl,f),r&&(d.uv=ni.getInterpolatedAttribute(r,o,l,c,f,new Ze)),s&&(d.uv1=ni.getInterpolatedAttribute(s,o,l,c,f,new Ze)),a&&(d.normal=ni.getInterpolatedAttribute(a,o,l,c,f,new ne),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new ne,materialIndex:0};ni.getNormal(il,rl,sl,h.normal),d.face=h,d.barycoord=f}return d}class wo extends Gi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yr(c,3)),this.setAttribute("normal",new Yr(d,3)),this.setAttribute("uv",new Yr(f,2));function _(S,x,u,g,v,M,C,b,R,T,m){const y=M/R,P=C/T,F=M/2,B=C/2,j=b/2,ee=R+1,$=T+1;let q=0,D=0;const O=new ne;for(let Y=0;Y<$;Y++){const oe=Y*P-B;for(let ie=0;ie<ee;ie++){const Ue=ie*y-F;O[S]=Ue*g,O[x]=oe*v,O[u]=j,c.push(O.x,O.y,O.z),O[S]=0,O[x]=0,O[u]=b>0?1:-1,d.push(O.x,O.y,O.z),f.push(ie/R),f.push(1-Y/T),q+=1}}for(let Y=0;Y<T;Y++)for(let oe=0;oe<R;oe++){const ie=h+oe+ee*Y,Ue=h+oe+ee*(Y+1),Be=h+(oe+1)+ee*(Y+1),Ne=h+(oe+1)+ee*Y;l.push(ie,Ue,Ne),l.push(Ue,Be,Ne),D+=6}o.addGroup(p,D,m),p+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function jM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const XM={clone:ra,merge:cn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=jM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new ne,Hm=new Ze,Gm=new Ze;class Vn extends yv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Gm),n.subVectors(Gm,Hm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class qM extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new Vn(ys,Ss,e,n);s.layers=this.layers,this.add(s);const a=new Vn(ys,Ss,e,n);a.layers=this.layers,this.add(a);const o=new Vn(ys,Ss,e,n);o.layers=this.layers,this.add(o);const l=new Vn(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new Vn(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Sv extends Yt{constructor(e=[],n=ea,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KM extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wo(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ai});s.uniforms.tEquirect.value=n;const a=new xi(r,s),o=n.minFilter;return n.minFilter===Wr&&(n.minFilter=Xt),new qM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class cl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),u=this._getHandJoint(c,S);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Rf extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class QM extends Yt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Pn,d=Pn,f,h){super(null,a,o,l,c,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new ne,JM=new ne,eE=new qe;class Or{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(JM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eE.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Bh,tE=new Ze(.5,.5),ul=new ne;class Mv{constructor(e=new Or,n=new Or,i=new Or,r=new Or,s=new Or,a=new Or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],_=s[8],S=s[9],x=s[10],u=s[11],g=s[12],v=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,p-d,u-_,C-g).normalize(),r[1].setComponents(c+a,p+d,u+_,C+g).normalize(),r[2].setComponents(c+o,p+f,u+S,C+v).normalize(),r[3].setComponents(c-o,p-f,u-S,C-v).normalize(),i)r[4].setComponents(l,h,x,M).normalize(),r[5].setComponents(c-l,p-h,u-x,C-M).normalize();else if(r[4].setComponents(c-l,p-h,u-x,C-M).normalize(),n===pi)r[5].setComponents(c+l,p+h,u+x,C+M).normalize();else if(n===rc)r[5].setComponents(l,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const n=tE.distanceTo(e.center);return Lr.radius=.7071067811865476+n,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends Yt{constructor(e,n,i=_r,r,s,a,o=Pn,l=Pn,c,d=ho,f=1){if(d!==ho&&d!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ev extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ao extends Gi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,p=[],_=[],S=[],x=[];for(let u=0;u<d;u++){const g=u*h-a;for(let v=0;v<c;v++){const M=v*f-s;_.push(M,-g,0),S.push(0,0,1),x.push(v/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),C=g+1+c*(u+1),b=g+1+c*u;p.push(v,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Yr(_,3)),this.setAttribute("normal",new Yr(S,3)),this.setAttribute("uv",new Yr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class nE extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vh extends yv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rE extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Rt{constructor(e){this.value=e}clone(){return new Rt(this.value.clone===void 0?this.value:this.value.clone())}}function Wm(t,e,n,i){const r=aE(i);switch(n){case lv:return t*e;case uv:return t*e/r.components*r.byteLength;case Ih:return t*e/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case Fh:return t*e*2/r.components*r.byteLength;case cv:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Oh:return t*e*4/r.components*r.byteLength;case bl:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:case ef:return Math.max(t,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(t,8)*Math.max(e,8)/2;case tf:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _f:case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mf:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tf:case bf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aE(t){switch(t){case Nn:case rv:return{byteLength:1,components:1};case fo:case sv:case ca:return{byteLength:2,components:1};case Lh:case Nh:return{byteLength:2,components:4};case _r:case Dh:case Ni:return{byteLength:4,components:1};case av:case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ME=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:dE,alphatest_fragment:fE,alphatest_pars_fragment:hE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:xE,begin_vertex:vE,beginnormal_vertex:_E,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:TE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:wE,color_fragment:AE,color_pars_fragment:RE,color_pars_vertex:CE,color_vertex:PE,common:DE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:NE,displacementmap_pars_vertex:IE,displacementmap_vertex:UE,emissivemap_fragment:FE,emissivemap_pars_fragment:OE,colorspace_fragment:kE,colorspace_pars_fragment:BE,envmap_fragment:zE,envmap_common_pars_fragment:VE,envmap_pars_fragment:HE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:e3,envmap_vertex:WE,fog_vertex:jE,fog_pars_vertex:XE,fog_fragment:$E,fog_pars_fragment:YE,gradientmap_pars_fragment:qE,lightmap_pars_fragment:KE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:t3,lights_toon_pars_fragment:n3,lights_phong_fragment:i3,lights_phong_pars_fragment:r3,lights_physical_fragment:s3,lights_physical_pars_fragment:a3,lights_fragment_begin:o3,lights_fragment_maps:l3,lights_fragment_end:c3,logdepthbuf_fragment:u3,logdepthbuf_pars_fragment:d3,logdepthbuf_pars_vertex:f3,logdepthbuf_vertex:h3,map_fragment:p3,map_pars_fragment:m3,map_particle_fragment:g3,map_particle_pars_fragment:x3,metalnessmap_fragment:v3,metalnessmap_pars_fragment:_3,morphinstance_vertex:y3,morphcolor_vertex:S3,morphnormal_vertex:M3,morphtarget_pars_vertex:E3,morphtarget_vertex:T3,normal_fragment_begin:b3,normal_fragment_maps:w3,normal_pars_fragment:A3,normal_pars_vertex:R3,normal_vertex:C3,normalmap_pars_fragment:P3,clearcoat_normal_fragment_begin:D3,clearcoat_normal_fragment_maps:L3,clearcoat_pars_fragment:N3,iridescence_pars_fragment:I3,opaque_fragment:U3,packing:F3,premultiplied_alpha_fragment:O3,project_vertex:k3,dithering_fragment:B3,dithering_pars_fragment:z3,roughnessmap_fragment:V3,roughnessmap_pars_fragment:H3,shadowmap_pars_fragment:G3,shadowmap_pars_vertex:W3,shadowmap_vertex:j3,shadowmask_pars_fragment:X3,skinbase_vertex:$3,skinning_pars_vertex:Y3,skinning_vertex:q3,skinnormal_vertex:K3,specularmap_fragment:Z3,specularmap_pars_fragment:Q3,tonemapping_fragment:J3,tonemapping_pars_fragment:eT,transmission_fragment:tT,transmission_pars_fragment:nT,uv_pars_fragment:iT,uv_pars_vertex:rT,uv_vertex:sT,worldpos_vertex:aT,background_vert:oT,background_frag:lT,backgroundCube_vert:cT,backgroundCube_frag:uT,cube_vert:dT,cube_frag:fT,depth_vert:hT,depth_frag:pT,distanceRGBA_vert:mT,distanceRGBA_frag:gT,equirect_vert:xT,equirect_frag:vT,linedashed_vert:_T,linedashed_frag:yT,meshbasic_vert:ST,meshbasic_frag:MT,meshlambert_vert:ET,meshlambert_frag:TT,meshmatcap_vert:bT,meshmatcap_frag:wT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:PT,meshphysical_vert:DT,meshphysical_frag:LT,meshtoon_vert:NT,meshtoon_frag:IT,points_vert:UT,points_frag:FT,shadow_vert:OT,shadow_frag:kT,sprite_vert:BT,sprite_frag:zT},we={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},di={basic:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:cn([we.common,we.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:cn([we.lights,we.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};di.physical={uniforms:cn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const dl={r:0,b:0,g:0},Nr=new Vi,VT=new Bt;function HT(t,e,n,i,r,s,a){const o=new dt(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?n:e).get(M)),M}function S(v){let M=!1;const C=_(v);C===null?u(o,l):C&&C.isColor&&(u(C,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,M){const C=_(M);C&&(C.isCubeTexture||C.mapping===Ac)?(d===void 0&&(d=new xi(new wo(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ra(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Nr.copy(M.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Nr)),d.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new xi(new Ao(2,2),new In({name:"BackgroundMaterial",uniforms:ra(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,M){v.getRGB(dl,_v(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,M,a)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:x,dispose:g}}function GT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,P,F,B,j){let ee=!1;const $=f(B,F,P);s!==$&&(s=$,c(s.object)),ee=p(y,B,F,j),ee&&_(y,B,F,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,M(y,P,F,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,P,F){const B=F.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let ee=j[P.id];ee===void 0&&(ee={},j[P.id]=ee);let $=ee[B];return $===void 0&&($=h(l()),ee[B]=$),$}function h(y){const P=[],F=[],B=[];for(let j=0;j<n;j++)P[j]=0,F[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,P,F,B){const j=s.attributes,ee=P.attributes;let $=0;const q=F.getAttributes();for(const D in q)if(q[D].location>=0){const Y=j[D];let oe=ee[D];if(oe===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function _(y,P,F,B){const j={},ee=P.attributes;let $=0;const q=F.getAttributes();for(const D in q)if(q[D].location>=0){let Y=ee[D];Y===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),j[D]=oe,$++}s.attributes=j,s.attributesNum=$,s.index=B}function S(){const y=s.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function x(y){u(y,0)}function u(y,P){const F=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;F[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),j[y]!==P&&(t.vertexAttribDivisor(y,P),j[y]=P)}function g(){const y=s.newAttributes,P=s.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==y[F]&&(t.disableVertexAttribArray(F),P[F]=0)}function v(y,P,F,B,j,ee,$){$===!0?t.vertexAttribIPointer(y,P,F,j,ee):t.vertexAttribPointer(y,P,F,B,j,ee)}function M(y,P,F,B){S();const j=B.attributes,ee=F.getAttributes(),$=P.defaultAttributeValues;for(const q in ee){const D=ee[q];if(D.location>=0){let O=j[q];if(O===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),O!==void 0){const Y=O.normalized,oe=O.itemSize,ie=e.get(O);if(ie===void 0)continue;const Ue=ie.buffer,Be=ie.type,Ne=ie.bytesPerElement,K=Be===t.INT||Be===t.UNSIGNED_INT||O.gpuType===Dh;if(O.isInterleavedBufferAttribute){const te=O.data,ye=te.stride,me=O.offset;if(te.isInstancedInterleavedBuffer){for(let Se=0;Se<D.locationSize;Se++)u(D.location+Se,te.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<D.locationSize;Se++)x(D.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Se=0;Se<D.locationSize;Se++)v(D.location+Se,oe/D.locationSize,Be,Y,ye*Ne,(me+oe/D.locationSize*Se)*Ne,K)}else{if(O.isInstancedBufferAttribute){for(let te=0;te<D.locationSize;te++)u(D.location+te,O.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let te=0;te<D.locationSize;te++)x(D.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let te=0;te<D.locationSize;te++)v(D.location+te,oe/D.locationSize,Be,Y,oe*Ne,oe/D.locationSize*te*Ne,K)}}else if($!==void 0){const Y=$[q];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(D.location,Y);break;case 3:t.vertexAttrib3fv(D.location,Y);break;case 4:t.vertexAttrib4fv(D.location,Y);break;default:t.vertexAttrib1fv(D.location,Y)}}}}g()}function C(){T();for(const y in i){const P=i[y];for(const F in P){const B=P[F];for(const j in B)d(B[j].object),delete B[j];delete P[F]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const F in P){const B=P[F];for(const j in B)d(B[j].object),delete B[j];delete P[F]}delete i[y.id]}function R(y){for(const P in i){const F=i[P];if(F[y.id]===void 0)continue;const B=F[y.id];for(const j in B)d(B[j].object),delete B[j];delete F[y.id]}}function T(){m(),a=!0,s!==r&&(s=r,c(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:m,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:x,disableUnusedAttributes:g}}function WT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S]*h[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ii&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const T=R===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Nn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ni&&!T)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function XT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Or,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,x=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!x)s?d(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=d(_,h,v,p);for(let C=0;C!==v;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const S=f!==null?f.length:0;let x=null;if(S!==0){if(x=l.value,_!==!0||x===null){const u=p+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<u)&&(x=new Float32Array(u));for(let v=0,M=p;v!==S;++v,M+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function $T(t){let e=new WeakMap;function n(a,o){return o===$d?a.mapping=ea:o===Yd&&(a.mapping=ta),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$d||o===Yd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new KM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rr=4,jm=[.125,.215,.35,.446,.526,.582],Br=20,YT=256,Ca=new Vh,Xm=new dt;let Lu=null,Nu=0,Iu=0,Uu=!1;const qT=new ne;class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=qT}=s;Lu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Nu,Iu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ca,format:ii,colorSpace:yr,depthBuffer:!1},r=Ym(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KT(s)),this._blurMaterial=QT(s,e,n)}return r}_compileMaterial(e){const n=new xi(new Gi,e);this._renderer.compile(n,Ca)}_sceneToCubeUV(e,n,i,r,s){const l=new Vn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Xm),f.toneMapping=gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new wo,new gv({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,x=S.material;let u=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,u=!0):(x.color.copy(Xm),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const C=this._cubeSize;Ms(r,M*C,v>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ea||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ca)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const g=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=ZT(this._lodMax,g,v)}const a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=.05+c*.95,p=f*h,{_lodMax:_}=this,S=this._sizeLods[i],x=3*S*(i>_-rr?i-_+rr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Ms(s,x,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Ca),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ms(e,x,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Ca)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),S=s/_,x=isFinite(s)?1+Math.floor(d*S):Br;x>Br&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const u=[];let g=0;for(let R=0;R<Br;++R){const T=R/S,m=Math.exp(-T*T/2);u.push(m),R===0?g+=m:R<x&&(g+=2*m)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const M=this._sizeLods[r],C=3*M*(r>v-rr?r-v+rr:0),b=4*(this._cubeSize-M);Ms(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(f,Ca)}}function KT(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+jm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-rr?l=jm[a-t+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,S=3,x=2,u=1,g=new Float32Array(S*_*p),v=new Float32Array(x*_*p),M=new Float32Array(u*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,T=b>2?0:-1,m=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];g.set(m,S*_*b),v.set(h,x*_*b);const y=[b,b,b,b,b,b];M.set(y,u*_*b)}const C=new Gi;C.setAttribute("position",new Wn(g,S)),C.setAttribute("uv",new Wn(v,x)),C.setAttribute("faceIndex",new Wn(M,u)),i.push(new xi(C,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ym(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ZT(t,e,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function QT(t,e,n){const i=new Float32Array(Br),r=new ne(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function qm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Km(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$d||l===Yd,d=l===ea||l===ta;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new $m(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new $m(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function eb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&po("WebGLRenderer: "+i+" extension not supported."),r}}}function tb(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let v=0,M=g.length;v<M;v+=3){const C=g[v+0],b=g[v+1],R=g[v+2];h.push(C,b,b,R,R,C)}}else if(_!==void 0){const g=_.array;S=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const C=v+0,b=v+1,R=v+2;h.push(C,b,b,R,R,C)}}else return;const x=new(fv(h)?vv:xv)(h,1);x.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,x)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function nb(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let x=0;for(let u=0;u<_;u++)x+=p[u];n.update(x,i,1)}function f(h,p,_,S){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],S[u]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function ib(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rb(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let m=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",m)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),S===!0&&(v=3);let M=o.attributes.position.count*v,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*C*4*f),R=new hv(b,M,C,f);R.type=Ni,R.needsUpdate=!0;const T=v*4;for(let y=0;y<f;y++){const P=x[y],F=u[y],B=g[y],j=M*C*4*y;for(let ee=0;ee<P.count;ee++){const $=ee*T;p===!0&&(r.fromBufferAttribute(P,ee),b[j+$+0]=r.x,b[j+$+1]=r.y,b[j+$+2]=r.z,b[j+$+3]=0),_===!0&&(r.fromBufferAttribute(F,ee),b[j+$+4]=r.x,b[j+$+5]=r.y,b[j+$+6]=r.z,b[j+$+7]=0),S===!0&&(r.fromBufferAttribute(B,ee),b[j+$+8]=r.x,b[j+$+9]=r.y,b[j+$+10]=r.z,b[j+$+11]=B.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Ze(M,C)},i.set(o,h),o.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function sb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const bv=new Yt,Zm=new zh(1,1),wv=new hv,Av=new LM,Rv=new Sv,Qm=[],Jm=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qm[r];if(s===void 0&&(s=new Float32Array(r),Qm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cc(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),Vt(n,i)}}function db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),Vt(n,i)}}function fb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),Vt(n,i)}}function hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function Sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zm.compareFunction=dv,s=Zm):s=bv,n.setTexture2D(e||s,r)}function Mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Av,r)}function Eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function Tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wv,r)}function bb(t){switch(t){case 5126:return ab;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return vb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}function wb(t,e){t.uniform1fv(this.addr,e)}function Ab(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function Rb(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function Cb(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function Pb(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Db(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Lb(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Nb(t,e){t.uniform1iv(this.addr,e)}function Ib(t,e){t.uniform2iv(this.addr,e)}function Ub(t,e){t.uniform3iv(this.addr,e)}function Fb(t,e){t.uniform4iv(this.addr,e)}function Ob(t,e){t.uniform1uiv(this.addr,e)}function kb(t,e){t.uniform2uiv(this.addr,e)}function Bb(t,e){t.uniform3uiv(this.addr,e)}function zb(t,e){t.uniform4uiv(this.addr,e)}function Vb(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||bv,s[a])}function Hb(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Av,s[a])}function Gb(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Rv,s[a])}function Wb(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||wv,s[a])}function jb(t){switch(t){case 5126:return wb;case 35664:return Ab;case 35665:return Rb;case 35666:return Cb;case 35674:return Pb;case 35675:return Db;case 35676:return Lb;case 5124:case 35670:return Nb;case 35667:case 35671:return Ib;case 35668:case 35672:return Ub;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return kb;case 36295:return Bb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}class Xb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bb(n.type)}}class $b{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jb(n.type)}}class Yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function qb(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),a=Fu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){i0(n,c===void 0?new Xb(o,t,e):new $b(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Yb(o),i0(n,f)),n=f}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);qb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Kb=37297;let Zb=0;function Qb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const s0=new qe;function Jb(t){at._getMatrix(s0,at.workingColorSpace,t);const e=`mat3( ${s0.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Qb(t.getShaderSource(e),o)}else return s}function ew(t,e){const n=Jb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tw(t,e){let n;switch(e){case aM:n="Linear";break;case oM:n="Reinhard";break;case lM:n="Cineon";break;case cM:n="ACESFilmic";break;case dM:n="AgX";break;case fM:n="Neutral";break;case uM:n="Custom";break;default:Ye("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new ne;function nw(){at.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ua(t){return t!==""}function o0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(t){return t.replace(aw,lw)}const ow=new Map;function lw(t,e){let n=Ke[e];if(n===void 0){const i=ow.get(e);if(i!==void 0)n=Ke[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(t){return t.replace(cw,uw)}function uw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===B1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nv:e="ENVMAP_BLENDING_MULTIPLY";break;case rM:e="ENVMAP_BLENDING_MIX";break;case sM:e="ENVMAP_BLENDING_ADD";break}return e}function mw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dw(n),c=fw(n),d=hw(n),f=pw(n),h=mw(n),p=iw(n),_=rw(s),S=r.createProgram();let x,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ua).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ua).join(`
`),u.length>0&&(u+=`
`)):(x=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),u=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==gr?tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ew("linearToOutputTexel",n.outputColorSpace),nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),a=Cf(a),a=o0(a,n),a=l0(a,n),o=Cf(o),o=o0(o,n),o=l0(o,n),a=c0(a),o=c0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+x+a,M=g+u+o,C=r0(r,r.VERTEX_SHADER,v),b=r0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,C),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(C)||"",j=r.getShaderInfoLog(b)||"",ee=F.trim(),$=B.trim(),q=j.trim();let D=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,b);else{const Y=a0(r,C,"vertex"),oe=a0(r,b,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ee+`
`+Y+`
`+oe)}else ee!==""?Ye("WebGLProgram: Program Info Log:",ee):($===""||q==="")&&(O=!1);O&&(P.diagnostics={runnable:D,programLog:ee,vertexShader:{log:$,prefix:x},fragmentShader:{log:q,prefix:u}})}r.deleteShader(C),r.deleteShader(b),T=new Cl(r,S),m=sw(r,S)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let m;this.getAttributes=function(){return m===void 0&&R(this),m};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,Kb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}let xw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _w(e),n.set(e,i)),i}}class _w{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function yw(t,e,n,i,r,s,a){const o=new pv,l=new vw,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(m){return c.add(m),m===0?"uv":`uv${m}`}function x(m,y,P,F,B){const j=F.fog,ee=B.geometry,$=m.isMeshStandardMaterial?F.environment:null,q=(m.isMeshStandardMaterial?n:e).get(m.envMap||$),D=q&&q.mapping===Ac?q.image.height:null,O=_[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&Ye("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));const Y=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,oe=Y!==void 0?Y.length:0;let ie=0;ee.morphAttributes.position!==void 0&&(ie=1),ee.morphAttributes.normal!==void 0&&(ie=2),ee.morphAttributes.color!==void 0&&(ie=3);let Ue,Be,Ne,K;if(O){const Qe=di[O];Ue=Qe.vertexShader,Be=Qe.fragmentShader}else Ue=m.vertexShader,Be=m.fragmentShader,l.update(m),Ne=l.getVertexShaderID(m),K=l.getFragmentShaderID(m);const te=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),me=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,be=!!m.map,Ve=!!m.matcap,Ae=!!q,We=!!m.aoMap,L=!!m.lightMap,Ce=!!m.bumpMap,Oe=!!m.normalMap,$e=!!m.displacementMap,fe=!!m.emissiveMap,ke=!!m.metalnessMap,Te=!!m.roughnessMap,Me=m.anisotropy>0,A=m.clearcoat>0,E=m.dispersion>0,k=m.iridescence>0,re=m.sheen>0,le=m.transmission>0,Q=Me&&!!m.anisotropyMap,De=A&&!!m.clearcoatMap,U=A&&!!m.clearcoatNormalMap,z=A&&!!m.clearcoatRoughnessMap,G=k&&!!m.iridescenceMap,W=k&&!!m.iridescenceThicknessMap,X=re&&!!m.sheenColorMap,pe=re&&!!m.sheenRoughnessMap,ge=!!m.specularMap,ae=!!m.specularColorMap,de=!!m.specularIntensityMap,N=le&&!!m.transmissionMap,ue=le&&!!m.thicknessMap,xe=!!m.gradientMap,he=!!m.alphaMap,ce=m.alphaTest>0,se=!!m.alphaHash,Pe=!!m.extensions;let je=gr;m.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=t.toneMapping);const ut={shaderID:O,shaderType:m.type,shaderName:m.name,vertexShader:Ue,fragmentShader:Be,defines:m.defines,customVertexShaderID:Ne,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:me,instancingColor:me&&B.instanceColor!==null,instancingMorph:me&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:yr,alphaToCoverage:!!m.alphaToCoverage,map:be,matcap:Ve,envMap:Ae,envMapMode:Ae&&q.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:L,bumpMap:Ce,normalMap:Oe,displacementMap:h&&$e,emissiveMap:fe,normalMapObjectSpace:Oe&&m.normalMapType===gM,normalMapTangentSpace:Oe&&m.normalMapType===mM,metalnessMap:ke,roughnessMap:Te,anisotropy:Me,anisotropyMap:Q,clearcoat:A,clearcoatMap:De,clearcoatNormalMap:U,clearcoatRoughnessMap:z,dispersion:E,iridescence:k,iridescenceMap:G,iridescenceThicknessMap:W,sheen:re,sheenColorMap:X,sheenRoughnessMap:pe,specularMap:ge,specularColorMap:ae,specularIntensityMap:de,transmission:le,transmissionMap:N,thicknessMap:ue,gradientMap:xe,opaque:m.transparent===!1&&m.blending===Ws&&m.alphaToCoverage===!1,alphaMap:he,alphaTest:ce,alphaHash:se,combine:m.combine,mapUv:be&&S(m.map.channel),aoMapUv:We&&S(m.aoMap.channel),lightMapUv:L&&S(m.lightMap.channel),bumpMapUv:Ce&&S(m.bumpMap.channel),normalMapUv:Oe&&S(m.normalMap.channel),displacementMapUv:$e&&S(m.displacementMap.channel),emissiveMapUv:fe&&S(m.emissiveMap.channel),metalnessMapUv:ke&&S(m.metalnessMap.channel),roughnessMapUv:Te&&S(m.roughnessMap.channel),anisotropyMapUv:Q&&S(m.anisotropyMap.channel),clearcoatMapUv:De&&S(m.clearcoatMap.channel),clearcoatNormalMapUv:U&&S(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&S(m.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&S(m.iridescenceMap.channel),iridescenceThicknessMapUv:W&&S(m.iridescenceThicknessMap.channel),sheenColorMapUv:X&&S(m.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(m.sheenRoughnessMap.channel),specularMapUv:ge&&S(m.specularMap.channel),specularColorMapUv:ae&&S(m.specularColorMap.channel),specularIntensityMapUv:de&&S(m.specularIntensityMap.channel),transmissionMapUv:N&&S(m.transmissionMap.channel),thicknessMapUv:ue&&S(m.thicknessMap.channel),alphaMapUv:he&&S(m.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Oe||Me),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(be||he),fog:!!j,useFog:m.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,decodeVideoTexture:be&&m.map.isVideoTexture===!0&&at.getTransfer(m.map.colorSpace)===pt,decodeVideoTextureEmissive:fe&&m.emissiveMap.isVideoTexture===!0&&at.getTransfer(m.emissiveMap.colorSpace)===pt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===An,flipSided:m.side===jt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Pe&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&m.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(m){const y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(const P in m.defines)y.push(P),y.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(g(y,m),v(y,m),y.push(t.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function g(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapCubeUVHeight),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.morphAttributeCount),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function v(m,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),m.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),m.push(o.mask)}function M(m){const y=_[m.type];let P;if(y){const F=di[y];P=XM.clone(F.uniforms)}else P=m.uniforms;return P}function C(m,y){let P;for(let F=0,B=d.length;F<B;F++){const j=d[F];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new gw(t,y,m,s),d.push(P)),P}function b(m){if(--m.usedTimes===0){const y=d.indexOf(m);d[y]=d[d.length-1],d.pop(),m.destroy()}}function R(m){l.remove(m)}function T(){l.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:d,dispose:T}}function Sw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Mw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function d0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function f0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,_,S,x){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:x},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=S,u.group=x),e++,u}function o(f,h,p,_,S,x){const u=a(f,h,p,_,S,x);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,S,x){const u=a(f,h,p,_,S,x);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||Mw),i.length>1&&i.sort(h||d0),r.length>1&&r.sort(h||d0)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function Ew(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new f0,t.set(i,[a])):r>=s.length?(a=new f0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new dt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return t[e.id]=n,n}}}function bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ww=0;function Aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Rw(t){const e=new Tw,n=bw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const r=new ne,s=new Bt,a=new Bt;function o(c){let d=0,f=0,h=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let p=0,_=0,S=0,x=0,u=0,g=0,v=0,M=0,C=0,b=0,R=0;c.sort(Aw);for(let m=0,y=c.length;m<y;m++){const P=c[m],F=P.color,B=P.intensity,j=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*B,f+=F.g*B,h+=F.b*B;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],B);R++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=$,p++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(F).multiplyScalar(B),$.distance=j,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[S]=$;const q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[S]=q.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[S]=D,i.spotShadowMap[S]=ee,M++}S++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(F).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=$,x++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=$,_++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(B),$.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[u]=$,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==p||T.pointLength!==_||T.spotLength!==S||T.rectAreaLength!==x||T.hemiLength!==u||T.numDirectionalShadows!==g||T.numPointShadows!==v||T.numSpotShadows!==M||T.numSpotMaps!==C||T.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=x,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,T.directionalLength=p,T.pointLength=_,T.spotLength=S,T.rectAreaLength=x,T.hemiLength=u,T.numDirectionalShadows=g,T.numPointShadows=v,T.numSpotShadows=M,T.numSpotMaps=C,T.numLightProbes=R,i.version=ww++)}function l(c,d){let f=0,h=0,p=0,_=0,S=0;const x=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),p++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(v.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),h++}else if(v.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(x),S++}}}return{setup:o,setupView:l,state:i}}function h0(t){const e=new Rw(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Cw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new h0(t),e.set(r,[o])):s>=a.length?(o=new h0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lw(t,e,n){let i=new Mv;const r=new Ze,s=new Ze,a=new Lt,o=new nE({depthPacking:pM}),l=new iE,c={},d=n.maxTextureSize,f={[zi]:jt,[jt]:zi,[An]:An},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Pw,fragmentShader:Dw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gi;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new xi(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let u=this.type;this.render=function(b,R,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;const m=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=u!==wi&&this.type===wi,j=u===wi&&this.type!==wi;for(let ee=0,$=b.length;ee<$;ee++){const q=b[ee],D=q.shadow;if(D===void 0){Ye("WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||B===!0||j===!0){const oe=this.type!==wi?{minFilter:Pn,magFilter:Pn}:{};D.map!==null&&D.map.dispose(),D.map=new li(r.x,r.y,oe),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Y=D.getViewportCount();for(let oe=0;oe<Y;oe++){const ie=D.getViewport(oe);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(a),D.updateMatrices(q,oe),i=D.getFrustum(),M(R,T,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===wi&&g(D,T),D.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(m,y,P)};function g(b,R){const T=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new li(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,T,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,T,p,S,null)}function v(b,R,T,m){let y=null;const P=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=T.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=y.uuid,B=R.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let ee=j[B];ee===void 0&&(ee=y.clone(),j[B]=ee,R.addEventListener("dispose",C)),y=ee}if(y.visible=R.visible,y.wireframe=R.wireframe,m===wi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=T}return y}function M(b,R,T,m,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===wi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const B=e.update(b),j=b.material;if(Array.isArray(j)){const ee=B.groups;for(let $=0,q=ee.length;$<q;$++){const D=ee[$],O=j[D.materialIndex];if(O&&O.visible){const Y=v(b,O,m,y);b.onBeforeShadow(t,b,R,T,B,Y,D),t.renderBufferDirect(T,null,B,Y,b,D),b.onAfterShadow(t,b,R,T,B,Y,D)}}}else if(j.visible){const ee=v(b,j,m,y);b.onBeforeShadow(t,b,R,T,B,ee,null),t.renderBufferDirect(T,null,B,ee,b,null),b.onAfterShadow(t,b,R,T,B,ee,null)}}const F=b.children;for(let B=0,j=F.length;B<j;B++)M(F[B],R,T,m,y)}function C(b){b.target.removeEventListener("dispose",C);for(const T in c){const m=c[T],y=b.target.uuid;y in m&&(m[y].dispose(),delete m[y])}}}const Nw={[Vd]:nc,[Hd]:jd,[Gd]:Xd,[Js]:Wd,[nc]:Vd,[jd]:Hd,[Xd]:Gd,[Wd]:Js};function Iw(t,e){function n(){let N=!1;const ue=new Lt;let xe=null;const he=new Lt(0,0,0,0);return{setMask:function(ce){xe!==ce&&!N&&(t.colorMask(ce,ce,ce,ce),xe=ce)},setLocked:function(ce){N=ce},setClear:function(ce,se,Pe,je,ut){ut===!0&&(ce*=je,se*=je,Pe*=je),ue.set(ce,se,Pe,je),he.equals(ue)===!1&&(t.clearColor(ce,se,Pe,je),he.copy(ue))},reset:function(){N=!1,xe=null,he.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,xe=null,he=null,ce=null;return{setReversed:function(se){if(ue!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=se;const je=ce;ce=null,this.setClear(je)}},getReversed:function(){return ue},setTest:function(se){se?te(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(se){xe!==se&&!N&&(t.depthMask(se),xe=se)},setFunc:function(se){if(ue&&(se=Nw[se]),he!==se){switch(se){case Vd:t.depthFunc(t.NEVER);break;case nc:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case Js:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case jd:t.depthFunc(t.GREATER);break;case Xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=se}},setLocked:function(se){N=se},setClear:function(se){ce!==se&&(ue&&(se=1-se),t.clearDepth(se),ce=se)},reset:function(){N=!1,xe=null,he=null,ce=null,ue=!1}}}function r(){let N=!1,ue=null,xe=null,he=null,ce=null,se=null,Pe=null,je=null,ut=null;return{setTest:function(Qe){N||(Qe?te(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!N&&(t.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,an,on){(xe!==Qe||he!==an||ce!==on)&&(t.stencilFunc(Qe,an,on),xe=Qe,he=an,ce=on)},setOp:function(Qe,an,on){(se!==Qe||Pe!==an||je!==on)&&(t.stencilOp(Qe,an,on),se=Qe,Pe=an,je=on)},setLocked:function(Qe){N=Qe},setClear:function(Qe){ut!==Qe&&(t.clearStencil(Qe),ut=Qe)},reset:function(){N=!1,ue=null,xe=null,he=null,ce=null,se=null,Pe=null,je=null,ut=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,S=!1,x=null,u=null,g=null,v=null,M=null,C=null,b=null,R=new dt(0,0,0),T=0,m=!1,y=null,P=null,F=null,B=null,j=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=q>=1):D.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=q>=2);let O=null,Y={};const oe=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ue=new Lt().fromArray(oe),Be=new Lt().fromArray(ie);function Ne(N,ue,xe,he){const ce=new Uint8Array(4),se=t.createTexture();t.bindTexture(N,se),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<xe;Pe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ue+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return se}const K={};K[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Js),Ce(!1),Oe(ym),te(t.CULL_FACE),We(ai);function te(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function ye(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function me(N,ue){return f[N]!==ue?(t.bindFramebuffer(N,ue),f[N]=ue,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Se(N,ue){let xe=p,he=!1;if(N){xe=h.get(ue),xe===void 0&&(xe=[],h.set(ue,xe));const ce=N.textures;if(xe.length!==ce.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=ce.length;se<Pe;se++)xe[se]=t.COLOR_ATTACHMENT0+se;xe.length=ce.length,he=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,he=!0);he&&t.drawBuffers(xe)}function be(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const Ve={[kr]:t.FUNC_ADD,[V1]:t.FUNC_SUBTRACT,[H1]:t.FUNC_REVERSE_SUBTRACT};Ve[G1]=t.MIN,Ve[W1]=t.MAX;const Ae={[j1]:t.ZERO,[X1]:t.ONE,[$1]:t.SRC_COLOR,[Bd]:t.SRC_ALPHA,[J1]:t.SRC_ALPHA_SATURATE,[Z1]:t.DST_COLOR,[q1]:t.DST_ALPHA,[Y1]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[Q1]:t.ONE_MINUS_DST_COLOR,[K1]:t.ONE_MINUS_DST_ALPHA,[eM]:t.CONSTANT_COLOR,[tM]:t.ONE_MINUS_CONSTANT_COLOR,[nM]:t.CONSTANT_ALPHA,[iM]:t.ONE_MINUS_CONSTANT_ALPHA};function We(N,ue,xe,he,ce,se,Pe,je,ut,Qe){if(N===ai){S===!0&&(ye(t.BLEND),S=!1);return}if(S===!1&&(te(t.BLEND),S=!0),N!==z1){if(N!==x||Qe!==m){if((u!==kr||M!==kr)&&(t.blendEquation(t.FUNC_ADD),u=kr,M=kr),Qe)switch(N){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.ONE,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Dt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Mm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",N);break}g=null,v=null,C=null,b=null,R.set(0,0,0),T=0,x=N,m=Qe}return}ce=ce||ue,se=se||xe,Pe=Pe||he,(ue!==u||ce!==M)&&(t.blendEquationSeparate(Ve[ue],Ve[ce]),u=ue,M=ce),(xe!==g||he!==v||se!==C||Pe!==b)&&(t.blendFuncSeparate(Ae[xe],Ae[he],Ae[se],Ae[Pe]),g=xe,v=he,C=se,b=Pe),(je.equals(R)===!1||ut!==T)&&(t.blendColor(je.r,je.g,je.b,ut),R.copy(je),T=ut),x=N,m=!1}function L(N,ue){N.side===An?ye(t.CULL_FACE):te(t.CULL_FACE);let xe=N.side===jt;ue&&(xe=!xe),Ce(xe),N.blending===Ws&&N.transparent===!1?We(ai):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(N){y!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),y=N)}function Oe(N){N!==O1?(te(t.CULL_FACE),N!==P&&(N===ym?t.cullFace(t.BACK):N===k1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),P=N}function $e(N){N!==F&&($&&t.lineWidth(N),F=N)}function fe(N,ue,xe){N?(te(t.POLYGON_OFFSET_FILL),(B!==ue||j!==xe)&&(t.polygonOffset(ue,xe),B=ue,j=xe)):ye(t.POLYGON_OFFSET_FILL)}function ke(N){N?te(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Te(N){N===void 0&&(N=t.TEXTURE0+ee-1),O!==N&&(t.activeTexture(N),O=N)}function Me(N,ue,xe){xe===void 0&&(O===null?xe=t.TEXTURE0+ee-1:xe=O);let he=Y[xe];he===void 0&&(he={type:void 0,texture:void 0},Y[xe]=he),(he.type!==N||he.texture!==ue)&&(O!==xe&&(t.activeTexture(xe),O=xe),t.bindTexture(N,ue||K[N]),he.type=N,he.texture=ue)}function A(){const N=Y[O];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function re(){try{t.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function le(){try{t.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function U(){try{t.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function z(){try{t.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function G(){try{t.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function W(){try{t.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function X(N){Ue.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function pe(N){Be.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function ge(N,ue){let xe=c.get(ue);xe===void 0&&(xe=new WeakMap,c.set(ue,xe));let he=xe.get(N);he===void 0&&(he=t.getUniformBlockIndex(ue,N.name),xe.set(N,he))}function ae(N,ue){const he=c.get(ue).get(N);l.get(ue)!==he&&(t.uniformBlockBinding(ue,he,N.__bindingPointIndex),l.set(ue,he))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,Y={},f={},h=new WeakMap,p=[],_=null,S=!1,x=null,u=null,g=null,v=null,M=null,C=null,b=null,R=new dt(0,0,0),T=0,m=!1,y=null,P=null,F=null,B=null,j=null,Ue.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:me,drawBuffers:Se,useProgram:be,setBlending:We,setMaterial:L,setFlipSided:Ce,setCullFace:Oe,setLineWidth:$e,setPolygonOffset:fe,setScissorTest:ke,activeTexture:Te,bindTexture:Me,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:G,texImage3D:W,updateUBOMapping:ge,uniformBlockBinding:ae,texStorage2D:U,texStorage3D:z,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:De,scissor:X,viewport:pe,reset:de}}function Uw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return p?new OffscreenCanvas(A,E):sc("canvas")}function S(A,E,k){let re=1;const le=Me(A);if((le.width>k||le.height>k)&&(re=k/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(re*le.width),De=Math.floor(re*le.height);f===void 0&&(f=_(Q,De));const U=E?_(Q,De):f;return U.width=Q,U.height=De,U.getContext("2d").drawImage(A,0,0,Q,De),Ye("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+De+")."),U}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function x(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,E,k,re,le=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=E;if(E===t.RED&&(k===t.FLOAT&&(Q=t.R32F),k===t.HALF_FLOAT&&(Q=t.R16F),k===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.R8UI),k===t.UNSIGNED_SHORT&&(Q=t.R16UI),k===t.UNSIGNED_INT&&(Q=t.R32UI),k===t.BYTE&&(Q=t.R8I),k===t.SHORT&&(Q=t.R16I),k===t.INT&&(Q=t.R32I)),E===t.RG&&(k===t.FLOAT&&(Q=t.RG32F),k===t.HALF_FLOAT&&(Q=t.RG16F),k===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RG8UI),k===t.UNSIGNED_SHORT&&(Q=t.RG16UI),k===t.UNSIGNED_INT&&(Q=t.RG32UI),k===t.BYTE&&(Q=t.RG8I),k===t.SHORT&&(Q=t.RG16I),k===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),k===t.UNSIGNED_INT&&(Q=t.RGB32UI),k===t.BYTE&&(Q=t.RGB8I),k===t.SHORT&&(Q=t.RGB16I),k===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),k===t.UNSIGNED_INT&&(Q=t.RGBA32UI),k===t.BYTE&&(Q=t.RGBA8I),k===t.SHORT&&(Q=t.RGBA16I),k===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&(k===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),E===t.RGBA){const De=le?ic:at.getTransfer(re);k===t.FLOAT&&(Q=t.RGBA32F),k===t.HALF_FLOAT&&(Q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Q=De===pt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(A,E){let k;return A?E===null||E===_r||E===na?k=t.DEPTH24_STENCIL8:E===Ni?k=t.DEPTH32F_STENCIL8:E===fo&&(k=t.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_r||E===na?k=t.DEPTH_COMPONENT24:E===Ni?k=t.DEPTH_COMPONENT32F:E===fo&&(k=t.DEPTH_COMPONENT16),k}function C(A,E){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==Xt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function b(A){const E=A.target;E.removeEventListener("dispose",b),T(E),E.isVideoTexture&&d.delete(E)}function R(A){const E=A.target;E.removeEventListener("dispose",R),y(E)}function T(A){const E=i.get(A);if(E.__webglInit===void 0)return;const k=A.source,re=h.get(k);if(re){const le=re[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&m(A),Object.keys(re).length===0&&h.delete(k)}i.remove(A)}function m(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const k=A.source,re=h.get(k);delete re[E.__cacheKey],a.memory.textures--}function y(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let le=0;le<E.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(E.__webglFramebuffer[re][le]);else t.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)t.deleteFramebuffer(E.__webglFramebuffer[re]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=A.textures;for(let re=0,le=k.length;re<le;re++){const Q=i.get(k[re]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(k[re])}i.remove(A)}let P=0;function F(){P=0}function B(){const A=P;return A>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function j(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function ee(A,E){const k=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const re=A.image;if(re===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,E);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function $(A,E){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){K(k,A,E);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function q(A,E){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){K(k,A,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function D(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){te(k,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const O={[qd]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},Y={[Pn]:t.NEAREST,[hM]:t.NEAREST_MIPMAP_NEAREST,[Xo]:t.NEAREST_MIPMAP_LINEAR,[Xt]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Wr]:t.LINEAR_MIPMAP_LINEAR},oe={[xM]:t.NEVER,[EM]:t.ALWAYS,[vM]:t.LESS,[dv]:t.LEQUAL,[_M]:t.EQUAL,[MM]:t.GEQUAL,[yM]:t.GREATER,[SM]:t.NOTEQUAL};function ie(A,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xt||E.magFilter===ou||E.magFilter===Xo||E.magFilter===Wr||E.minFilter===Xt||E.minFilter===ou||E.minFilter===Xo||E.minFilter===Wr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,O[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,O[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,O[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Xo&&E.minFilter!==Wr||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const re=E.source;let le=h.get(re);le===void 0&&(le={},h.set(re,le));const Q=j(E);if(Q!==A.__cacheKey){le[Q]===void 0&&(le[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),le[Q].usedTimes++;const De=le[A.__cacheKey];De!==void 0&&(le[A.__cacheKey].usedTimes--,De.usedTimes===0&&m(E)),A.__cacheKey=Q,A.__webglTexture=le[Q].texture}return k}function Be(A,E,k){return Math.floor(Math.floor(A/k)/E)}function Ne(A,E,k,re){const Q=A.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,k,re,E.data);else{Q.sort((W,X)=>W.start-X.start);let De=0;for(let W=1;W<Q.length;W++){const X=Q[De],pe=Q[W],ge=X.start+X.count,ae=Be(pe.start,E.width,4),de=Be(X.start,E.width,4);pe.start<=ge+1&&ae===de&&Be(pe.start+pe.count-1,E.width,4)===ae?X.count=Math.max(X.count,pe.start+pe.count-X.start):(++De,Q[De]=pe)}Q.length=De+1;const U=t.getParameter(t.UNPACK_ROW_LENGTH),z=t.getParameter(t.UNPACK_SKIP_PIXELS),G=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let W=0,X=Q.length;W<X;W++){const pe=Q[W],ge=Math.floor(pe.start/4),ae=Math.ceil(pe.count/4),de=ge%E.width,N=Math.floor(ge/E.width),ue=ae,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,de),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,de,N,ue,xe,k,re,E.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,U),t.pixelStorei(t.UNPACK_SKIP_PIXELS,z),t.pixelStorei(t.UNPACK_SKIP_ROWS,G)}}function K(A,E,k){let re=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=t.TEXTURE_3D);const le=Ue(A,E),Q=E.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+k);const De=i.get(Q);if(Q.version!==De.__version||le===!0){n.activeTexture(t.TEXTURE0+k);const U=at.getPrimaries(at.workingColorSpace),z=E.colorSpace===hi?null:at.getPrimaries(E.colorSpace),G=E.colorSpace===hi||U===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let W=S(E.image,!1,r.maxTextureSize);W=Te(E,W);const X=s.convert(E.format,E.colorSpace),pe=s.convert(E.type);let ge=v(E.internalFormat,X,pe,E.colorSpace,E.isVideoTexture);ie(re,E);let ae;const de=E.mipmaps,N=E.isVideoTexture!==!0,ue=De.__version===void 0||le===!0,xe=Q.dataReady,he=C(E,W);if(E.isDepthTexture)ge=M(E.format===ia,E.type),ue&&(N?n.texStorage2D(t.TEXTURE_2D,1,ge,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,ge,W.width,W.height,0,X,pe,null));else if(E.isDataTexture)if(de.length>0){N&&ue&&n.texStorage2D(t.TEXTURE_2D,he,ge,de[0].width,de[0].height);for(let ce=0,se=de.length;ce<se;ce++)ae=de[ce],N?xe&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,X,pe,ae.data):n.texImage2D(t.TEXTURE_2D,ce,ge,ae.width,ae.height,0,X,pe,ae.data);E.generateMipmaps=!1}else N?(ue&&n.texStorage2D(t.TEXTURE_2D,he,ge,W.width,W.height),xe&&Ne(E,W,X,pe)):n.texImage2D(t.TEXTURE_2D,0,ge,W.width,W.height,0,X,pe,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ge,de[0].width,de[0].height,W.depth);for(let ce=0,se=de.length;ce<se;ce++)if(ae=de[ce],E.format!==ii)if(X!==null)if(N){if(xe)if(E.layerUpdates.size>0){const Pe=Wm(ae.width,ae.height,E.format,E.type);for(const je of E.layerUpdates){const ut=ae.data.subarray(je*Pe/ae.data.BYTES_PER_ELEMENT,(je+1)*Pe/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,je,ae.width,ae.height,1,X,ut)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,W.depth,X,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,ge,ae.width,ae.height,W.depth,0,ae.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,W.depth,X,pe,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,ge,ae.width,ae.height,W.depth,0,X,pe,ae.data)}else{N&&ue&&n.texStorage2D(t.TEXTURE_2D,he,ge,de[0].width,de[0].height);for(let ce=0,se=de.length;ce<se;ce++)ae=de[ce],E.format!==ii?X!==null?N?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,X,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,ge,ae.width,ae.height,0,ae.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?xe&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,X,pe,ae.data):n.texImage2D(t.TEXTURE_2D,ce,ge,ae.width,ae.height,0,X,pe,ae.data)}else if(E.isDataArrayTexture)if(N){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ge,W.width,W.height,W.depth),xe)if(E.layerUpdates.size>0){const ce=Wm(W.width,W.height,E.format,E.type);for(const se of E.layerUpdates){const Pe=W.data.subarray(se*ce/W.data.BYTES_PER_ELEMENT,(se+1)*ce/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,W.width,W.height,1,X,pe,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,X,pe,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,W.width,W.height,W.depth,0,X,pe,W.data);else if(E.isData3DTexture)N?(ue&&n.texStorage3D(t.TEXTURE_3D,he,ge,W.width,W.height,W.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,X,pe,W.data)):n.texImage3D(t.TEXTURE_3D,0,ge,W.width,W.height,W.depth,0,X,pe,W.data);else if(E.isFramebufferTexture){if(ue)if(N)n.texStorage2D(t.TEXTURE_2D,he,ge,W.width,W.height);else{let ce=W.width,se=W.height;for(let Pe=0;Pe<he;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,ge,ce,se,0,X,pe,null),ce>>=1,se>>=1}}else if(de.length>0){if(N&&ue){const ce=Me(de[0]);n.texStorage2D(t.TEXTURE_2D,he,ge,ce.width,ce.height)}for(let ce=0,se=de.length;ce<se;ce++)ae=de[ce],N?xe&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,X,pe,ae):n.texImage2D(t.TEXTURE_2D,ce,ge,X,pe,ae);E.generateMipmaps=!1}else if(N){if(ue){const ce=Me(W);n.texStorage2D(t.TEXTURE_2D,he,ge,ce.width,ce.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,X,pe,W)}else n.texImage2D(t.TEXTURE_2D,0,ge,X,pe,W);x(E)&&u(re),De.__version=Q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function te(A,E,k){if(E.image.length!==6)return;const re=Ue(A,E),le=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const Q=i.get(le);if(le.version!==Q.__version||re===!0){n.activeTexture(t.TEXTURE0+k);const De=at.getPrimaries(at.workingColorSpace),U=E.colorSpace===hi?null:at.getPrimaries(E.colorSpace),z=E.colorSpace===hi||De===U?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const G=E.isCompressedTexture||E.image[0].isCompressedTexture,W=E.image[0]&&E.image[0].isDataTexture,X=[];for(let se=0;se<6;se++)!G&&!W?X[se]=S(E.image[se],!0,r.maxCubemapSize):X[se]=W?E.image[se].image:E.image[se],X[se]=Te(E,X[se]);const pe=X[0],ge=s.convert(E.format,E.colorSpace),ae=s.convert(E.type),de=v(E.internalFormat,ge,ae,E.colorSpace),N=E.isVideoTexture!==!0,ue=Q.__version===void 0||re===!0,xe=le.dataReady;let he=C(E,pe);ie(t.TEXTURE_CUBE_MAP,E);let ce;if(G){N&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,de,pe.width,pe.height);for(let se=0;se<6;se++){ce=X[se].mipmaps;for(let Pe=0;Pe<ce.length;Pe++){const je=ce[Pe];E.format!==ii?ge!==null?N?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,je.width,je.height,ge,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,de,je.width,je.height,0,je.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,je.width,je.height,ge,ae,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,de,je.width,je.height,0,ge,ae,je.data)}}}else{if(ce=E.mipmaps,N&&ue){ce.length>0&&he++;const se=Me(X[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,de,se.width,se.height)}for(let se=0;se<6;se++)if(W){N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,X[se].width,X[se].height,ge,ae,X[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,X[se].width,X[se].height,0,ge,ae,X[se].data);for(let Pe=0;Pe<ce.length;Pe++){const ut=ce[Pe].image[se].image;N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ut.width,ut.height,ge,ae,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,de,ut.width,ut.height,0,ge,ae,ut.data)}}else{N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge,ae,X[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,de,ge,ae,X[se]);for(let Pe=0;Pe<ce.length;Pe++){const je=ce[Pe];N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ge,ae,je.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,de,ge,ae,je.image[se])}}}x(E)&&u(t.TEXTURE_CUBE_MAP),Q.__version=le.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,k,re,le,Q){const De=s.convert(k.format,k.colorSpace),U=s.convert(k.type),z=v(k.internalFormat,De,U,k.colorSpace),G=i.get(E),W=i.get(k);if(W.__renderTarget=E,!G.__hasExternalTextures){const X=Math.max(1,E.width>>Q),pe=Math.max(1,E.height>>Q);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Q,z,X,pe,E.depth,0,De,U,null):n.texImage2D(le,Q,z,X,pe,0,De,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),fe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,le,W.__webglTexture,0,$e(E)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,le,W.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(A,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const re=E.depthTexture,le=re&&re.isDepthTexture?re.type:null,Q=M(E.stencilBuffer,le),De=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=$e(E);fe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,Q,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,A)}else{const re=E.textures;for(let le=0;le<re.length;le++){const Q=re[le],De=s.convert(Q.format,Q.colorSpace),U=s.convert(Q.type),z=v(Q.internalFormat,De,U,Q.colorSpace),G=$e(E);k&&fe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,G,z,E.width,E.height):fe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,z,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const le=re.__webglTexture,Q=$e(E);if(E.depthTexture.format===ho)fe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(E.depthTexture.format===ia)fe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function be(A){const E=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=re}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const re=A.texture.mipmaps;re&&re.length>0?Se(E.__webglFramebuffer[0],A):Se(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=t.createRenderbuffer(),me(E.__webglDepthbuffer[re],A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}else{const re=A.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),me(E.__webglDepthbuffer,A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(A,E,k){const re=i.get(A);E!==void 0&&ye(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&be(A)}function Ae(A){const E=A.texture,k=i.get(A),re=i.get(E);A.addEventListener("dispose",R);const le=A.textures,Q=A.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=E.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let U=0;U<6;U++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[U]=[];for(let z=0;z<E.mipmaps.length;z++)k.__webglFramebuffer[U][z]=t.createFramebuffer()}else k.__webglFramebuffer[U]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let U=0;U<E.mipmaps.length;U++)k.__webglFramebuffer[U]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(De)for(let U=0,z=le.length;U<z;U++){const G=i.get(le[U]);G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let U=0;U<le.length;U++){const z=le[U];k.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[U]);const G=s.convert(z.format,z.colorSpace),W=s.convert(z.type),X=v(z.internalFormat,G,W,z.colorSpace,A.isXRRenderTarget===!0),pe=$e(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,X,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,k.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),me(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ie(t.TEXTURE_CUBE_MAP,E);for(let U=0;U<6;U++)if(E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)ye(k.__webglFramebuffer[U][z],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,z);else ye(k.__webglFramebuffer[U],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);x(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let U=0,z=le.length;U<z;U++){const G=le[U],W=i.get(G);let X=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,W.__webglTexture),ie(X,G),ye(k.__webglFramebuffer,A,G,t.COLOR_ATTACHMENT0+U,X,0),x(G)&&u(X)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(U=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,re.__webglTexture),ie(U,E),E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)ye(k.__webglFramebuffer[z],A,E,t.COLOR_ATTACHMENT0,U,z);else ye(k.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,U,0);x(E)&&u(U),n.unbindTexture()}A.depthBuffer&&be(A)}function We(A){const E=A.textures;for(let k=0,re=E.length;k<re;k++){const le=E[k];if(x(le)){const Q=g(A),De=i.get(le).__webglTexture;n.bindTexture(Q,De),u(Q),n.unbindTexture()}}}const L=[],Ce=[];function Oe(A){if(A.samples>0){if(fe(A)===!1){const E=A.textures,k=A.width,re=A.height;let le=t.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(A),U=E.length>1;if(U)for(let G=0;G<E.length;G++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const z=A.texture.mipmaps;z&&z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let G=0;G<E.length;G++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const W=i.get(E[G]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,W,0)}t.blitFramebuffer(0,0,k,re,0,0,k,re,le,t.NEAREST),l===!0&&(L.length=0,Ce.length=0,L.push(t.COLOR_ATTACHMENT0+G),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(Q),Ce.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let G=0;G<E.length;G++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const W=i.get(E[G]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function $e(A){return Math.min(r.maxSamples,A.samples)}function fe(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(A){const E=a.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function Te(A,E){const k=A.colorSpace,re=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==yr&&k!==hi&&(at.getTransfer(k)===pt?(re!==ii||le!==Nn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",k)),E}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=D,this.rebindTextures=Ve,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=fe}function Fw(t,e){function n(i,r=hi){let s;const a=at.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===av)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ov)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rv)return t.BYTE;if(i===sv)return t.SHORT;if(i===fo)return t.UNSIGNED_SHORT;if(i===Dh)return t.INT;if(i===_r)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===ca)return t.HALF_FLOAT;if(i===lv)return t.ALPHA;if(i===cv)return t.RGB;if(i===ii)return t.RGBA;if(i===ho)return t.DEPTH_COMPONENT;if(i===ia)return t.DEPTH_STENCIL;if(i===uv)return t.RED;if(i===Ih)return t.RED_INTEGER;if(i===Uh)return t.RG;if(i===Fh)return t.RG_INTEGER;if(i===Oh)return t.RGBA_INTEGER;if(i===bl||i===wl||i===Al||i===Rl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===Qd||i===Jd||i===ef)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ef)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tf||i===nf||i===rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tf||i===nf)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===xf||i===vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===af)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===of)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===df)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ff)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_f||i===yf||i===Sf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_f)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mf||i===Ef||i===Tf||i===bf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ef)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ev(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new In({vertexShader:Ow,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends Tr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",x=new Bw,u={},g=n.getContextAttributes();let v=null,M=null;const C=[],b=[],R=new Ze;let T=null;const m=new Vn;m.viewport=new Lt;const y=new Vn;y.viewport=new Lt;const P=[m,y],F=new rE;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=C[K];return te===void 0&&(te=new Pu,C[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=C[K];return te===void 0&&(te=new Pu,C[K]=te),te.getGripSpace()},this.getHand=function(K){let te=C[K];return te===void 0&&(te=new Pu,C[K]=te),te.getHandSpace()};function ee(K){const te=b.indexOf(K.inputSource);if(te===-1)return;const ye=C[te];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let K=0;K<C.length;K++){const te=b[K];te!==null&&(b[K]=null,C[K].disconnect(te))}B=null,j=null,x.reset();for(const K in u)delete u[K];e.setRenderTarget(v),p=null,h=null,f=null,r=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,me=null,Se=null;g.depth&&(Se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=g.stencil?ia:ho,me=g.stencil?na:_r);const be={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new li(h.textureWidth,h.textureHeight,{format:ii,type:Nn,depthTexture:new zh(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new li(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let te=0;te<K.removed.length;te++){const ye=K.removed[te],me=b.indexOf(ye);me>=0&&(b[me]=null,C[me].disconnect(ye))}for(let te=0;te<K.added.length;te++){const ye=K.added[te];let me=b.indexOf(ye);if(me===-1){for(let be=0;be<C.length;be++)if(be>=b.length){b.push(ye),me=be;break}else if(b[be]===null){b[be]=ye,me=be;break}if(me===-1)break}const Se=C[me];Se&&Se.connect(ye)}}const D=new ne,O=new ne;function Y(K,te,ye){D.setFromMatrixPosition(te.matrixWorld),O.setFromMatrixPosition(ye.matrixWorld);const me=D.distanceTo(O),Se=te.projectionMatrix.elements,be=ye.projectionMatrix.elements,Ve=Se[14]/(Se[10]-1),Ae=Se[14]/(Se[10]+1),We=(Se[9]+1)/Se[5],L=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],Oe=(be[8]+1)/be[0],$e=Ve*Ce,fe=Ve*Oe,ke=me/(-Ce+Oe),Te=ke*-Ce;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Te),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Ve+ke,A=Ae+ke,E=$e-Te,k=fe+(me-Te),re=We*Ae/A*Me,le=L*Ae/A*Me;K.projectionMatrix.makePerspective(E,k,re,le,Me,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,ye=K.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),F.near=y.near=m.near=te,F.far=y.far=m.far=ye,(B!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,j=F.far),F.layers.mask=K.layers.mask|6,m.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const me=K.parent,Se=F.cameras;oe(F,me);for(let be=0;be<Se.length;be++)oe(Se[be],me);Se.length===2?Y(F,m,y):F.projectionMatrix.copy(m.projectionMatrix),ie(K,F,me)};function ie(K,te,ye){ye===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Af*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(K){return u[K]};let Ue=null;function Be(K,te){if(d=te.getViewerPose(c||a),_=te,d!==null){const ye=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let me=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let Ae=0;Ae<ye.length;Ae++){const We=ye[Ae];let L=null;if(p!==null)L=p.getViewport(We);else{const Oe=f.getViewSubImage(h,We);L=Oe.viewport,Ae===0&&(e.setRenderTargetTextures(M,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(M))}let Ce=P[Ae];Ce===void 0&&(Ce=new Vn,Ce.layers.enable(Ae),Ce.viewport=new Lt,P[Ae]=Ce),Ce.matrix.fromArray(We.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(We.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(L.x,L.y,L.width,L.height),Ae===0&&(F.matrix.copy(Ce.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(Ce)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const Ae=f.getDepthInformation(ye[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(Ae,r.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let Ae=0;Ae<ye.length;Ae++){const We=ye[Ae].camera;if(We){let L=u[We];L||(L=new Ev,u[We]=L);const Ce=f.getCameraImage(We);L.sourceTexture=Ce}}}}for(let ye=0;ye<C.length;ye++){const me=b[ye],Se=C[ye];me!==null&&Se!==void 0&&Se.update(me,te,c||a)}Ue&&Ue(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ne=new Tv;Ne.setAnimationLoop(Be),this.setAnimationLoop=function(K){Ue=K},this.dispose=function(){}}}const Ir=new Vi,Vw=new Bt;function Hw(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,_v(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(x,u):u.isMeshToonMaterial?(s(x,u),f(x,u)):u.isMeshPhongMaterial?(s(x,u),d(x,u)):u.isMeshStandardMaterial?(s(x,u),h(x,u),u.isMeshPhysicalMaterial&&p(x,u,M)):u.isMeshMatcapMaterial?(s(x,u),_(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),S(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,g,v):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===jt&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===jt&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(x.envMap.value=v,Ir.copy(M),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),x.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(Ir)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,g,v){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*g,x.scale.value=v*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function d(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function f(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function h(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function p(x,u,g){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jt&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,u){u.matcap&&(x.matcap.value=u.matcap)}function S(x,u){const g=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=d(g),r[g.id]=M,g.addEventListener("dispose",x));const C=v.program;i.updateUBOMapping(g,C);const b=e.render.frame;s[g.id]!==b&&(h(g),s[g.id]=b)}function d(g){const v=f();g.__bindingPointIndex=v;const M=t.createBuffer(),C=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,R=M.length;b<R;b++){const T=Array.isArray(M[b])?M[b]:[M[b]];for(let m=0,y=T.length;m<y;m++){const P=T[m];if(p(P,b,m,C)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let ee=0;ee<B.length;ee++){const $=B[ee],q=S($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,F+j,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,C){const b=g.value,R=v+"_"+M;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const T=C[R];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return C[R]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function _(g){const v=g.uniforms;let M=0;const C=16;for(let R=0,T=v.length;R<T;R++){const m=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,P=m.length;y<P;y++){const F=m[y],B=Array.isArray(F.value)?F.value:[F.value];for(let j=0,ee=B.length;j<ee;j++){const $=B[j],q=S($),D=M%C,O=D%q.boundary,Y=D+O;M+=O,Y!==0&&C-Y<q.storage&&(M+=C-Y),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}const b=M%C;return b>0&&(M+=C-b),g.__size=M,g.__cache={},this}function S(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",g),v}function x(g){const v=g.target;v.removeEventListener("dispose",x);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const Ww=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let bi=null;function jw(){return bi===null&&(bi=new QM(Ww,32,32,Uh,ca),bi.minFilter=Xt,bi.magFilter=Xt,bi.wrapS=Li,bi.wrapT=Li,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class Xw{constructor(e={}){const{canvas:n=TM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Set([Oh,Fh,Ih]),S=new Set([Nn,_r,fo,na,Lh,Nh]),x=new Uint32Array(4),u=new Int32Array(4);let g=null,v=null;const M=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1;this._outputColorSpace=Ct;let T=0,m=0,y=null,P=-1,F=null;const B=new Lt,j=new Lt;let ee=null;const $=new dt(0);let q=0,D=n.width,O=n.height,Y=1,oe=null,ie=null;const Ue=new Lt(0,0,D,O),Be=new Lt(0,0,D,O);let Ne=!1;const K=new Mv;let te=!1,ye=!1;const me=new Bt,Se=new ne,be=new Lt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function We(){return y===null?Y:1}let L=i;function Ce(w,V){return n.getContext(w,V)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wc}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const V="webgl2";if(L=Ce(V,w),L===null)throw Ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Oe,$e,fe,ke,Te,Me,A,E,k,re,le,Q,De,U,z,G,W,X,pe,ge,ae,de,N,ue;function xe(){Oe=new eb(L),Oe.init(),de=new Fw(L,Oe),$e=new jT(L,Oe,e,de),fe=new Iw(L,Oe),$e.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),ke=new ib(L),Te=new Sw,Me=new Uw(L,Oe,fe,Te,$e,de,ke),A=new $T(b),E=new JT(b),k=new oE(L),N=new GT(L,k),re=new tb(L,k,ke,N),le=new sb(L,re,k,ke),pe=new rb(L,$e,Me),G=new XT(Te),Q=new yw(b,A,E,Oe,$e,N,G),De=new Hw(b,Te),U=new Ew,z=new Cw(Oe),X=new HT(b,A,E,fe,le,p,l),W=new Lw(b,le,$e),ue=new Gw(L,ke,$e,fe),ge=new WT(L,Oe,ke),ae=new nb(L,Oe,ke),ke.programs=Q.programs,b.capabilities=$e,b.extensions=Oe,b.properties=Te,b.renderLists=U,b.shadowMap=W,b.state=fe,b.info=ke}xe();const he=new zw(b,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(D,O,!1))},this.getSize=function(w){return w.set(D,O)},this.setSize=function(w,V,Z=!0){if(he.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,O=V,n.width=Math.floor(w*Y),n.height=Math.floor(V*Y),Z===!0&&(n.style.width=w+"px",n.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(D*Y,O*Y).floor()},this.setDrawingBufferSize=function(w,V,Z){D=w,O=V,Y=Z,n.width=Math.floor(w*Z),n.height=Math.floor(V*Z),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,V,Z,J){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,V,Z,J),fe.viewport(B.copy(Ue).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,V,Z,J){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,V,Z,J),fe.scissor(j.copy(Be).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){fe.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Z=!0){let J=0;if(w){let H=!1;if(y!==null){const Ee=y.texture.format;H=_.has(Ee)}if(H){const Ee=y.texture.type,Re=S.has(Ee),Fe=X.getClearColor(),Ie=X.getClearAlpha(),Ge=Fe.r,Xe=Fe.g,ze=Fe.b;Re?(x[0]=Ge,x[1]=Xe,x[2]=ze,x[3]=Ie,L.clearBufferuiv(L.COLOR,0,x)):(u[0]=Ge,u[1]=Xe,u[2]=ze,u[3]=Ie,L.clearBufferiv(L.COLOR,0,u))}else J|=L.COLOR_BUFFER_BIT}V&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),X.dispose(),U.dispose(),z.dispose(),Te.dispose(),A.dispose(),E.dispose(),le.dispose(),N.dispose(),ue.dispose(),Q.dispose(),he.dispose(),he.removeEventListener("sessionstart",rs),he.removeEventListener("sessionend",wr),lt.stop()};function ce(w){w.preventDefault(),Am("WebGLRenderer: Context Lost."),R=!0}function se(){Am("WebGLRenderer: Context Restored."),R=!1;const w=ke.autoReset,V=W.enabled,Z=W.autoUpdate,J=W.needsUpdate,H=W.type;xe(),ke.autoReset=w,W.enabled=V,W.autoUpdate=Z,W.needsUpdate=J,W.type=H}function Pe(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){const V=w.target;V.removeEventListener("dispose",je),ut(V)}function ut(w){Qe(w),Te.remove(w)}function Qe(w){const V=Te.get(w).programs;V!==void 0&&(V.forEach(function(Z){Q.releaseProgram(Z)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Z,J,H,Ee){V===null&&(V=Ve);const Re=H.isMesh&&H.matrixWorld.determinant()<0,Fe=Iv(w,V,Z,J,H);fe.setMaterial(J,Re);let Ie=Z.index,Ge=1;if(J.wireframe===!0){if(Ie=re.getWireframeAttribute(Z),Ie===void 0)return;Ge=2}const Xe=Z.drawRange,ze=Z.attributes.position;let Je=Xe.start*Ge,ht=(Xe.start+Xe.count)*Ge;Ee!==null&&(Je=Math.max(Je,Ee.start*Ge),ht=Math.min(ht,(Ee.start+Ee.count)*Ge)),Ie!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Ie.count)):ze!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,ze.count));const bt=ht-Je;if(bt<0||bt===1/0)return;N.setup(H,J,Fe,Z,Ie);let wt,mt=ge;if(Ie!==null&&(wt=k.get(Ie),mt=ae,mt.setIndex(wt)),H.isMesh)J.wireframe===!0?(fe.setLineWidth(J.wireframeLinewidth*We()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(H.isLine){let He=J.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*We()),H.isLineSegments?mt.setMode(L.LINES):H.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else H.isPoints?mt.setMode(L.POINTS):H.isSprite&&mt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const He=H._multiDrawStarts,yt=H._multiDrawCounts,st=H._multiDrawCount,Mn=Ie?k.get(Ie).bytesPerElement:1,os=Te.get(J).currentProgram.getUniforms();for(let En=0;En<st;En++)os.setValue(L,"_gl_DrawID",En),mt.render(He[En]/Mn,yt[En])}else if(H.isInstancedMesh)mt.renderInstances(Je,bt,H.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,He);mt.renderInstances(Je,bt,yt)}else mt.render(Je,bt)};function an(w,V,Z){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,Ar(w,V,Z),w.side=zi,w.needsUpdate=!0,Ar(w,V,Z),w.side=An):Ar(w,V,Z)}this.compile=function(w,V,Z=null){Z===null&&(Z=w),v=z.get(Z),v.init(V),C.push(v),Z.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),w!==Z&&w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights();const J=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const Fe=Ee[Re];an(Fe,Z,H),J.add(Fe)}else an(Ee,Z,H),J.add(Ee)}),v=C.pop(),J},this.compileAsync=function(w,V,Z=null){const J=this.compile(w,V,Z);return new Promise(H=>{function Ee(){if(J.forEach(function(Re){Te.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){H(w);return}setTimeout(Ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let on=null;function fa(w){on&&on(w)}function rs(){lt.stop()}function wr(){lt.start()}const lt=new Tv;lt.setAnimationLoop(fa),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(w){on=w,he.setAnimationLoop(w),w===null?lt.stop():lt.start()},he.addEventListener("sessionstart",rs),he.addEventListener("sessionend",wr),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,V,y),v=z.get(w,C.length),v.init(V),C.push(v),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(me,pi,V.reversedDepth),ye=this.localClippingEnabled,te=G.init(this.clippingPlanes,ye),g=U.get(w,M.length),g.init(),M.push(g),he.enabled===!0&&he.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Qt(Ee,V,-1/0,b.sortObjects)}Qt(w,V,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(oe,ie),Ae=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ae&&X.addToRenderList(g,w),this.info.render.frame++,te===!0&&G.beginShadows();const Z=v.state.shadowsArray;W.render(Z,w,V),te===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,H=g.transmissive;if(v.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(H.length>0)for(let Re=0,Fe=Ee.length;Re<Fe;Re++){const Ie=Ee[Re];ss(J,H,w,Ie)}Ae&&X.render(w);for(let Re=0,Fe=Ee.length;Re<Fe;Re++){const Ie=Ee[Re];_i(g,w,Ie,Ie.viewport)}}else H.length>0&&ss(J,H,w,V),Ae&&X.render(w),_i(g,w,V);y!==null&&m===0&&(Me.updateMultisampleRenderTarget(y),Me.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(b,w,V),N.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(v=C[C.length-1],te===!0&&G.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Qt(w,V,Z,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){J&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const Re=le.update(w),Fe=w.material;Fe.visible&&g.push(w,Re,Fe,Z,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Re=le.update(w),Fe=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),be.copy(Re.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){const Ie=Re.groups;for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){const ze=Ie[Ge],Je=Fe[ze.materialIndex];Je&&Je.visible&&g.push(w,Re,Je,Z,be.z,ze)}}else Fe.visible&&g.push(w,Re,Fe,Z,be.z,null)}}const Ee=w.children;for(let Re=0,Fe=Ee.length;Re<Fe;Re++)Qt(Ee[Re],V,Z,J)}function _i(w,V,Z,J){const{opaque:H,transmissive:Ee,transparent:Re}=w;v.setupLightsView(Z),te===!0&&G.setGlobalState(b.clippingPlanes,Z),J&&fe.viewport(B.copy(J)),H.length>0&&Ht(H,V,Z),Ee.length>0&&Ht(Ee,V,Z),Re.length>0&&Ht(Re,V,Z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function ss(w,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new li(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ca:Nn,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[J.id],Re=J.viewport||B;Ee.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),Ie=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Ee),b.getClearColor($),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),Ae&&X.render(Z);const Xe=b.toneMapping;b.toneMapping=gr;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),te===!0&&G.setGlobalState(b.clippingPlanes,J),Ht(w,Z,J),Me.updateMultisampleRenderTarget(Ee),Me.updateRenderTargetMipmap(Ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,bt=V.length;ht<bt;ht++){const wt=V[ht],{object:mt,geometry:He,material:yt,group:st}=wt;if(yt.side===An&&mt.layers.test(J.layers)){const Mn=yt.side;yt.side=jt,yt.needsUpdate=!0,as(mt,Z,J,He,yt,st),yt.side=Mn,yt.needsUpdate=!0,Je=!0}}Je===!0&&(Me.updateMultisampleRenderTarget(Ee),Me.updateRenderTargetMipmap(Ee))}b.setRenderTarget(Fe,Ie,Ge),b.setClearColor($,q),ze!==void 0&&(J.viewport=ze),b.toneMapping=Xe}function Ht(w,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let H=0,Ee=w.length;H<Ee;H++){const Re=w[H],{object:Fe,geometry:Ie,group:Ge}=Re;let Xe=Re.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Fe.layers.test(Z.layers)&&as(Fe,V,Z,Ie,Xe,Ge)}}function as(w,V,Z,J,H,Ee){w.onBeforeRender(b,V,Z,J,H,Ee),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(b,V,Z,J,w,Ee),H.transparent===!0&&H.side===An&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,b.renderBufferDirect(Z,V,J,H,w,Ee),H.side=zi,H.needsUpdate=!0,b.renderBufferDirect(Z,V,J,H,w,Ee),H.side=An):b.renderBufferDirect(Z,V,J,H,w,Ee),w.onAfterRender(b,V,Z,J,H,Ee)}function Ar(w,V,Z){V.isScene!==!0&&(V=Ve);const J=Te.get(w),H=v.state.lights,Ee=v.state.shadowsArray,Re=H.state.version,Fe=Q.getParameters(w,H.state,Ee,V,Z),Ie=Q.getProgramCacheKey(Fe);let Ge=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?E:A).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",je),Ge=new Map,J.programs=Ge);let Xe=Ge.get(Ie);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Re)return Gh(w,Fe),Xe}else Fe.uniforms=Q.getUniforms(w),w.onBeforeCompile(Fe,b),Xe=Q.acquireProgram(Fe,Ie),Ge.set(Ie,Xe),J.uniforms=Fe.uniforms;const ze=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=G.uniform),Gh(w,Fe),J.needsLights=Fv(w),J.lightsStateVersion=Re,J.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function Ro(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Cl.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Gh(w,V){const Z=Te.get(w);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Iv(w,V,Z,J,H){V.isScene!==!0&&(V=Ve),Me.resetTextureUnits();const Ee=V.fog,Re=J.isMeshStandardMaterial?V.environment:null,Fe=y===null?b.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:yr,Ie=(J.isMeshStandardMaterial?E:A).get(J.envMap||Re),Ge=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let bt=gr;J.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(bt=b.toneMapping);const wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=wt!==void 0?wt.length:0,He=Te.get(J),yt=v.state.lights;if(te===!0&&(ye===!0||w!==F)){const ln=w===F&&J.id===P;G.setState(J,w,ln)}let st=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yt.state.version||He.outputColorSpace!==Fe||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Ie||J.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==G.numPlanes||He.numIntersection!==G.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==Je||He.morphColors!==ht||He.toneMapping!==bt||He.morphTargetsCount!==mt)&&(st=!0):(st=!0,He.__version=J.version);let Mn=He.currentProgram;st===!0&&(Mn=Ar(J,V,H));let os=!1,En=!1,ha=!1;const St=Mn.getUniforms(),pn=He.uniforms;if(fe.useProgram(Mn.program)&&(os=!0,En=!0,ha=!0),J.id!==P&&(P=J.id,En=!0),os||F!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",w.projectionMatrix),St.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=St.map.cameraPosition;mn!==void 0&&mn.setValue(L,Se.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,En=!0,ha=!0)}if(H.isSkinnedMesh){St.setOptional(L,H,"bindMatrix"),St.setOptional(L,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),St.setValue(L,"boneTexture",ln.boneTexture,Me))}H.isBatchedMesh&&(St.setOptional(L,H,"batchingTexture"),St.setValue(L,"batchingTexture",H._matricesTexture,Me),St.setOptional(L,H,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",H._indirectTexture,Me),St.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",H._colorsTexture,Me));const On=Z.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&pe.update(H,Z,Mn),(En||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,St.setValue(L,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pn.envMap.value=Ie,pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(pn.envMapIntensity.value=V.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=jw()),En&&(St.setValue(L,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&Uv(pn,ha),Ee&&J.fog===!0&&De.refreshFogUniforms(pn,Ee),De.refreshMaterialUniforms(pn,J,Y,O,v.state.transmissionRenderTarget[w.id]),Cl.upload(L,Ro(He),pn,Me)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Cl.upload(L,Ro(He),pn,Me),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(L,"center",H.center),St.setValue(L,"modelViewMatrix",H.modelViewMatrix),St.setValue(L,"normalMatrix",H.normalMatrix),St.setValue(L,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let mn=0,Dc=ln.length;mn<Dc;mn++){const Rr=ln[mn];ue.update(Rr,Mn),ue.bind(Rr,Mn)}}return Mn}function Uv(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Fv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,V,Z){const J=Te.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Te.get(w.texture).__webglTexture=V,Te.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Z=Te.get(w);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const Ov=L.createFramebuffer();this.setRenderTarget=function(w,V=0,Z=0){y=w,T=V,m=Z;let J=!0,H=null,Ee=!1,Re=!1;if(w){const Ie=Te.get(w);if(Ie.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)Me.setupRenderTarget(w);else if(Ie.__hasExternalTextures)Me.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Ie.__boundDepthTexture!==ze){if(ze!==null&&Te.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const Xe=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?H=Xe[V][Z]:H=Xe[V],Ee=!0):w.samples>0&&Me.useMultisampledRTT(w)===!1?H=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Z]:H=Xe,B.copy(w.viewport),j.copy(w.scissor),ee=w.scissorTest}else B.copy(Ue).multiplyScalar(Y).floor(),j.copy(Be).multiplyScalar(Y).floor(),ee=Ne;if(Z!==0&&(H=Ov),fe.bindFramebuffer(L.FRAMEBUFFER,H)&&J&&fe.drawBuffers(w,H),fe.viewport(B),fe.scissor(j),fe.setScissorTest(ee),Ee){const Ie=Te.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,Z)}else if(Re){const Ie=V;for(let Ge=0;Ge<w.textures.length;Ge++){const Xe=Te.get(w.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,Z,Ie)}}else if(w!==null&&Z!==0){const Ie=Te.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(w,V,Z,J,H,Ee,Re,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){fe.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ge=w.textures[Fe],Xe=Ge.format,ze=Ge.type;if(!$e.textureFormatReadable(Xe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ze)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&Z>=0&&Z<=w.height-H&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(V,Z,J,H,de.convert(Xe),de.convert(ze),Ee))}finally{const Ge=y!==null?Te.get(y).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,V,Z,J,H,Ee,Re,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(V>=0&&V<=w.width-J&&Z>=0&&Z<=w.height-H){fe.bindFramebuffer(L.FRAMEBUFFER,Ie);const Ge=w.textures[Fe],Xe=Ge.format,ze=Ge.type;if(!$e.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(V,Z,J,H,de.convert(Xe),de.convert(ze),0);const ht=y!==null?Te.get(y).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,ht);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bM(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.deleteBuffer(Je),L.deleteSync(bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Z=0){const J=Math.pow(2,-Z),H=Math.floor(w.image.width*J),Ee=Math.floor(w.image.height*J),Re=V!==null?V.x:0,Fe=V!==null?V.y:0;Me.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Re,Fe,H,Ee),fe.unbindTexture()};const kv=L.createFramebuffer(),Bv=L.createFramebuffer();this.copyTextureToTexture=function(w,V,Z=null,J=null,H=0,Ee=null){Ee===null&&(H!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=H,H=0):Ee=0);let Re,Fe,Ie,Ge,Xe,ze,Je,ht,bt;const wt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(Z!==null)Re=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Xe=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const On=Math.pow(2,-H);Re=Math.floor(wt.width*On),Fe=Math.floor(wt.height*On),w.isDataArrayTexture?Ie=wt.depth:w.isData3DTexture?Ie=Math.floor(wt.depth*On):Ie=1,Ge=0,Xe=0,ze=0}J!==null?(Je=J.x,ht=J.y,bt=J.z):(Je=0,ht=0,bt=0);const mt=de.convert(V.format),He=de.convert(V.type);let yt;V.isData3DTexture?(Me.setTexture3D(V,0),yt=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Me.setTexture2DArray(V,0),yt=L.TEXTURE_2D_ARRAY):(Me.setTexture2D(V,0),yt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),Mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),os=L.getParameter(L.UNPACK_SKIP_PIXELS),En=L.getParameter(L.UNPACK_SKIP_ROWS),ha=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const St=w.isDataArrayTexture||w.isData3DTexture,pn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const On=Te.get(w),ln=Te.get(V),mn=Te.get(On.__renderTarget),Dc=Te.get(ln.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let Rr=0;Rr<Ie;Rr++)St&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,H,ze+Rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(V).__webglTexture,Ee,bt+Rr)),L.blitFramebuffer(Ge,Xe,Re,Fe,Je,ht,Re,Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||Te.has(w)){const On=Te.get(w),ln=Te.get(V);fe.bindFramebuffer(L.READ_FRAMEBUFFER,kv),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bv);for(let mn=0;mn<Ie;mn++)St?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,On.__webglTexture,H,ze+mn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,On.__webglTexture,H),pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,Ee,bt+mn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,Ee),H!==0?L.blitFramebuffer(Ge,Xe,Re,Fe,Je,ht,Re,Fe,L.COLOR_BUFFER_BIT,L.NEAREST):pn?L.copyTexSubImage3D(yt,Ee,Je,ht,bt+mn,Ge,Xe,Re,Fe):L.copyTexSubImage2D(yt,Ee,Je,ht,Ge,Xe,Re,Fe);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,Ee,Je,ht,bt,Re,Fe,Ie,mt,He,wt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,Ee,Je,ht,bt,Re,Fe,Ie,mt,wt.data):L.texSubImage3D(yt,Ee,Je,ht,bt,Re,Fe,Ie,mt,He,wt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,Je,ht,Re,Fe,mt,He,wt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,Je,ht,wt.width,wt.height,mt,wt.data):L.texSubImage2D(L.TEXTURE_2D,Ee,Je,ht,Re,Fe,mt,He,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,os),L.pixelStorei(L.UNPACK_SKIP_ROWS,En),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ha),Ee===0&&V.generateMipmaps&&L.generateMipmap(yt),fe.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Me.setTextureCube(w,0):w.isData3DTexture?Me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Me.setTexture2DArray(w,0):Me.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){T=0,m=0,y=null,fe.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}/**
 * postprocessing v6.38.0 build Sat Nov 08 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Ou=1/1e3,$w=1e3,Yw=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Ou}get fixedDelta(){return this._fixedDelta*Ou}set fixedDelta(t){this._fixedDelta=t*$w}get elapsed(){return this._elapsed*Ou}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},qw=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Gi;return n.setAttribute("position",new Wn(t,3)),n.setAttribute("uv",new Wn(e,2)),n})(),br=class Pf{static get fullscreenGeometry(){return qw}constructor(e="Pass",n=new Rf,i=new Vh){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new xi(Pf.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Rf),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Mo){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof li||n instanceof ua||n instanceof Yt||n instanceof Pf)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Kw=class extends br{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Zw=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Qw="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Jw=class extends In{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Rt(null),depthBuffer:new Rt(null),channelWeights:new Rt(null),opacity:new Rt(1)},blending:ai,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Zw,vertexShader:Qw}),this.depthFunc=nc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},e2=class extends br{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Jw,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new li(1,1,{minFilter:Xt,magFilter:Xt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Nn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Ct&&(this.renderTarget.texture.colorSpace=Ct))}},p0=new dt,Cv=class extends br{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor(p0),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(p0,o):c&&t.setClearAlpha(o)}},t2=class extends br{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new Cv(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,d=this.inverted?0:1,f=1-d;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,d,4294967295),a.stencil.setClear(f),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},m0=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new e2,this.depthTexture=null,this.passes=[],this.timer=new Yw,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new Ze),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Nn&&t.outputColorSpace===Ct&&(this.inputBuffer.texture.colorSpace=Ct,this.outputBuffer.texture.colorSpace=Ct,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.depthTexture=new zh;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=ia,t.type=na):t.type=_r,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new Ze:r.getDrawingBufferSize(new Ze),a={minFilter:Xt,magFilter:Xt,stencilBuffer:e,depthBuffer:t,type:n},o=new li(s.width,s.height,a);return i>0&&(o.samples=i),n===Nn&&r!==null&&r.outputColorSpace===Ct&&(o.texture.colorSpace=Ct),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Ze),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else t.setDepthTexture(this.depthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,r,t,s),c.needsSwap&&(s&&(n.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),n.render(e,i,r,t,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof t2?s=!0:c instanceof Kw&&(s=!1))}setSize(t,e,n){const i=this.renderer,r=i.getSize(new Ze);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new Ze);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),br.fullscreenGeometry.dispose()}},qr={NONE:0,DEPTH:1,CONVOLUTION:2},ot={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},n2=class{constructor(){this.shaderParts=new Map([[ot.FRAGMENT_HEAD,null],[ot.FRAGMENT_MAIN_UV,null],[ot.FRAGMENT_MAIN_IMAGE,null],[ot.VERTEX_HEAD,null],[ot.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=qr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=yr}},ku=!1,g0=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case An:n=this.materialsFlatShadedDoubleSide;break;case jt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case An:n=this.materialsDoubleSide;break;case jt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof In))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=zi;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=jt,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=An,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=jt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=An,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,ku){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ku}static set workaroundEnabled(t){ku=t}},it={SKIP:9,SET:30,ADD:0,ALPHA:23,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},i2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",r2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",s2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",a2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",o2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",l2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",c2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",u2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",d2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",f2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",h2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",p2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",m2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",g2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",x2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",v2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",_2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",y2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",S2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",M2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",E2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",T2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",b2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",w2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",A2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",R2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",C2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",P2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",D2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",L2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",N2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",I2=new Map([[it.ADD,i2],[it.AVERAGE,r2],[it.COLOR,s2],[it.COLOR_BURN,a2],[it.COLOR_DODGE,o2],[it.DARKEN,l2],[it.DIFFERENCE,c2],[it.DIVIDE,u2],[it.DST,null],[it.EXCLUSION,d2],[it.HARD_LIGHT,f2],[it.HARD_MIX,h2],[it.HUE,p2],[it.INVERT,m2],[it.INVERT_RGB,g2],[it.LIGHTEN,x2],[it.LINEAR_BURN,v2],[it.LINEAR_DODGE,_2],[it.LINEAR_LIGHT,y2],[it.LUMINOSITY,S2],[it.MULTIPLY,M2],[it.NEGATION,E2],[it.NORMAL,T2],[it.OVERLAY,b2],[it.PIN_LIGHT,w2],[it.REFLECT,A2],[it.SATURATION,R2],[it.SCREEN,C2],[it.SOFT_LIGHT,P2],[it.SRC,D2],[it.SUBTRACT,L2],[it.VIVID_LIGHT,N2]]),U2=class extends Tr{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Rt(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return I2.get(this.blendFunction)}},Pv=class extends Tr{constructor(t,e,{attributes:n=qr.NONE,blendFunction:i=it.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new U2(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=yr,this._outputColorSpace=hi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Mo){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof li||e instanceof ua||e instanceof Yt||e instanceof br)&&this[t].dispose()}}},x0=class extends br{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new Cv,this.overrideMaterialManager=n===null?null:new g0(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new g0(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,d=t.shadowMap.autoUpdate,f=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=d}},F2=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,O2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",k2=class extends In{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:wc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Rt(null),depthBuffer:new Rt(null),resolution:new Rt(new Ze),texelSize:new Rt(new Ze),cameraNear:new Rt(.3),cameraFar:new Rt(1e3),aspect:new Rt(1),time:new Rt(0)},blending:ai,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Mo){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=F2.replace(ot.FRAGMENT_HEAD,t.get(ot.FRAGMENT_HEAD)||"").replace(ot.FRAGMENT_MAIN_UV,t.get(ot.FRAGMENT_MAIN_UV)||"").replace(ot.FRAGMENT_MAIN_IMAGE,t.get(ot.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=O2.replace(ot.VERTEX_HEAD,t.get(ot.VERTEX_HEAD)||"").replace(ot.VERTEX_MAIN_SUPPORT,t.get(ot.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof Vn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return ot}};function v0(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function B2(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&qr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(ot.FRAGMENT_HEAD)||"",d=l.get(ot.FRAGMENT_MAIN_UV)||"",f=l.get(ot.FRAGMENT_MAIN_IMAGE)||"",h=l.get(ot.VERTEX_HEAD)||"",p=l.get(ot.VERTEX_MAIN_SUPPORT)||"";const _=new Set,S=new Set;if(a&&(d+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const g=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=g?`vUv);
`:`);
`;for(const v of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const M of v[1].split(/\s*,\s*/))n.varyings.add(M),_.add(M),S.add(M);for(const v of r.matchAll(o))S.add(v[1])}for(const g of i.matchAll(o))S.add(g[1]);for(const g of e.defines.keys())S.add(g.replace(/\([\w\s,]*\)/g,""));for(const g of e.uniforms.keys())S.add(g);S.delete("while"),S.delete("for"),S.delete("if"),e.uniforms.forEach((g,v)=>n.uniforms.set(t+v.charAt(0).toUpperCase()+v.slice(1),g)),e.defines.forEach((g,v)=>n.defines.set(t+v.charAt(0).toUpperCase()+v.slice(1),g));const x=new Map([["fragment",i],["vertex",r]]);v0(t,S,n.defines),v0(t,S,x),i=x.get("fragment"),r=x.get("vertex");const u=e.blendMode;if(n.blendModes.set(u.blendFunction,u),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(f+=e.inputColorSpace===Ct?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==hi?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const g=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${t}MainImage(color0, UV, `,n.attributes&qr.DEPTH&&g.test(i)&&(f+="depth, ",n.readDepth=!0),f+=`color1);
	`;const v=t+"BlendOpacity";n.uniforms.set(v,u.opacity),f+=`color0 = blend${u.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=i+`
`,r!==null&&(h+=r+`
`),l.set(ot.FRAGMENT_HEAD,c),l.set(ot.FRAGMENT_MAIN_UV,d),l.set(ot.FRAGMENT_MAIN_IMAGE,f),l.set(ot.VERTEX_HEAD,h),l.set(ot.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const g of e.extensions)n.extensions.add(g)}}var _0=class extends br{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new k2(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new n2;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===it.DST)t.attributes|=a.getAttributes()&qr.DEPTH;else{if(t.attributes&a.getAttributes()&qr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);B2("e"+e++,a,t)}let n=t.shaderParts.get(ot.FRAGMENT_HEAD),i=t.shaderParts.get(ot.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(ot.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&qr.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ct&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(ot.FRAGMENT_HEAD,n),t.shaderParts.set(ot.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(ot.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Mo){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==Nn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const z2=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const i=new Yt(e);i.minFilter=Xt,i.magFilter=Xt,i.generateMipmaps=!1;const r=[];let s=null;const a=64;let o=.1*64;const l=1/a,c=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},d=p=>{const _={x:p.x*64,y:(1-p.y)*64};let S=1;const x=M=>Math.sin(M*Math.PI/2),u=M=>-M*(M-2);p.age<a*.3?S=x(p.age/(a*.3)):S=u(1-(p.age-a*.3)/(a*.7))||0,S*=p.force;const g=`${(p.vx+1)/2*255}, ${(p.vy+1)/2*255}, ${S*255}`,v=64*5;n.shadowOffsetX=v,n.shadowOffsetY=v,n.shadowBlur=o,n.shadowColor=`rgba(${g},${.22*S})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(_.x-v,_.y-v,o,0,Math.PI*2),n.fill()};return{canvas:e,texture:i,addTouch:p=>{let _=0,S=0,x=0;if(s){const u=p.x-s.x,g=p.y-s.y;if(u===0&&g===0)return;const v=u*u+g*g,M=Math.sqrt(v);S=u/(M||1),x=g/(M||1),_=Math.min(v*1e4,1)}s={x:p.x,y:p.y},r.push({x:p.x,y:p.y,age:0,force:_,vx:S,vy:x})},update:()=>{c();for(let p=r.length-1;p>=0;p--){const _=r[p],S=_.force*l*(1-_.age/a);_.x+=_.vx*S,_.y+=_.vy*S,_.age++,_.age>a&&r.splice(p,1)}for(let p=0;p<r.length;p++)d(r[p]);i.needsUpdate=!0},set radiusScale(p){o=.1*64*p},get radiusScale(){return o/(.1*64)},size:64}},V2=(t,e)=>{const n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Pv("LiquidEffect",n,{uniforms:new Map([["uTexture",new Rt(t)],["uStrength",new Rt((e==null?void 0:e.strength)??.025)],["uTime",new Rt(0)],["uFreq",new Rt((e==null?void 0:e.freq)??4.5)]])})},y0={square:0,circle:1,triangle:2,diamond:3},H2=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,G2=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,Bu=10,W2=({variant:t="square",pixelSize:e=3,color:n="#B19EEF",className:i,style:r,antialias:s=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:d=1,pixelSizeJitter:f=0,enableRipples:h=!0,rippleIntensityScale:p=1,rippleThickness:_=.1,rippleSpeed:S=.3,liquidWobbleSpeed:x=4.5,autoPauseOffscreen:u=!0,speed:g=.5,transparent:v=!0,edgeFade:M=.5,noiseAmount:C=0})=>{const b=ve.useRef(null),R=ve.useRef({visible:!0}),T=ve.useRef(g),m=ve.useRef(null),y=ve.useRef(null);return ve.useEffect(()=>{var ee,$,q;const P=b.current;if(!P)return;T.current=g;const F=["antialias","liquid","noiseAmount"],B={antialias:s,liquid:l,noiseAmount:C};let j=!1;if(!m.current)j=!0;else if(y.current){for(const D of F)if(y.current[D]!==B[D]){j=!0;break}}if(j){if(m.current){const fe=m.current;(ee=fe.resizeObserver)==null||ee.disconnect(),cancelAnimationFrame(fe.raf),($=fe.quad)==null||$.geometry.dispose(),fe.material.dispose(),(q=fe.composer)==null||q.dispose(),fe.renderer.dispose(),fe.renderer.domElement.parentElement===P&&P.removeChild(fe.renderer.domElement),m.current=null}const D=document.createElement("canvas"),O=new Xw({canvas:D,antialias:s,alpha:!0,powerPreference:"high-performance"});O.domElement.style.width="100%",O.domElement.style.height="100%",O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),P.appendChild(O.domElement),v?O.setClearAlpha(0):O.setClearColor(0,1);const Y={uResolution:{value:new Ze(0,0)},uTime:{value:0},uColor:{value:new dt(n)},uClickPos:{value:Array.from({length:Bu},()=>new Ze(-1,-1))},uClickTimes:{value:new Float32Array(Bu)},uShapeType:{value:y0[t]??0},uPixelSize:{value:e*O.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:f},uEnableRipples:{value:h?1:0},uRippleSpeed:{value:S},uRippleThickness:{value:_},uRippleIntensity:{value:p},uEdgeFade:{value:M}},oe=new Rf,ie=new Vh(-1,1,1,-1,0,1),Ue=new In({vertexShader:H2,fragmentShader:G2,uniforms:Y,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:wf}),Be=new Ao(2,2),Ne=new xi(Be,Ue);oe.add(Ne);const K=new sE,te=()=>{var Te;const fe=P.clientWidth||1,ke=P.clientHeight||1;O.setSize(fe,ke,!1),Y.uResolution.value.set(O.domElement.width,O.domElement.height),(Te=m.current)!=null&&Te.composer&&m.current.composer.setSize(O.domElement.width,O.domElement.height),Y.uPixelSize.value=e*O.getPixelRatio()};te();const ye=new ResizeObserver(te);ye.observe(P);const Se=(()=>{var fe;if(typeof window<"u"&&((fe=window.crypto)!=null&&fe.getRandomValues)){const ke=new Uint32Array(1);return window.crypto.getRandomValues(ke),ke[0]/4294967295}return Math.random()})()*1e3;let be,Ve,Ae;if(l){Ve=z2(),Ve.radiusScale=d,be=new m0(O);const fe=new x0(oe,ie);Ae=V2(Ve.texture,{strength:c,freq:x});const ke=new _0(ie,Ae);ke.renderToScreen=!0,be.addPass(fe),be.addPass(ke)}if(C>0){be||(be=new m0(O),be.addPass(new x0(oe,ie)));const fe=new Pv("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new Rt(0)],["uAmount",new Rt(C)]])}),ke=new _0(ie,fe);ke.renderToScreen=!0,be&&be.passes.length>0&&be.passes.forEach(Te=>Te.renderToScreen=!1),be.addPass(ke)}be&&be.setSize(O.domElement.width,O.domElement.height);const We=fe=>{const ke=O.domElement.getBoundingClientRect(),Te=O.domElement.width/ke.width,Me=O.domElement.height/ke.height,A=(fe.clientX-ke.left)*Te,E=(ke.height-(fe.clientY-ke.top))*Me;return{fx:A,fy:E,w:O.domElement.width,h:O.domElement.height}},L=fe=>{var A;const{fx:ke,fy:Te}=We(fe),Me=((A=m.current)==null?void 0:A.clickIx)??0;Y.uClickPos.value[Me].set(ke,Te),Y.uClickTimes.value[Me]=Y.uTime.value,m.current&&(m.current.clickIx=(Me+1)%Bu)},Ce=fe=>{if(!Ve)return;const{fx:ke,fy:Te,w:Me,h:A}=We(fe);Ve.addTouch({x:ke/Me,y:Te/A})};O.domElement.addEventListener("pointerdown",L,{passive:!0}),O.domElement.addEventListener("pointermove",Ce,{passive:!0});let Oe=0;const $e=()=>{if(u&&!R.current.visible){Oe=requestAnimationFrame($e);return}Y.uTime.value=Se+K.getElapsedTime()*T.current,Ae&&(Ae.uniforms.get("uTime").value=Y.uTime.value),be?(Ve&&Ve.update(),be.passes.forEach(fe=>{const ke=fe.effects;ke&&ke.forEach(Te=>{var A;const Me=(A=Te.uniforms)==null?void 0:A.get("uTime");Me&&(Me.value=Y.uTime.value)})}),be.render()):O.render(oe,ie),Oe=requestAnimationFrame($e)};Oe=requestAnimationFrame($e),m.current={renderer:O,scene:oe,camera:ie,material:Ue,clock:K,clickIx:0,uniforms:Y,resizeObserver:ye,raf:Oe,quad:Ne,timeOffset:Se,composer:be,touch:Ve,liquidEffect:Ae}}else{const D=m.current;if(D.uniforms.uShapeType.value=y0[t]??0,D.uniforms.uPixelSize.value=e*D.renderer.getPixelRatio(),D.uniforms.uColor.value.set(n),D.uniforms.uScale.value=a,D.uniforms.uDensity.value=o,D.uniforms.uPixelJitter.value=f,D.uniforms.uEnableRipples.value=h?1:0,D.uniforms.uRippleIntensity.value=p,D.uniforms.uRippleThickness.value=_,D.uniforms.uRippleSpeed.value=S,D.uniforms.uEdgeFade.value=M,v?D.renderer.setClearAlpha(0):D.renderer.setClearColor(0,1),D.liquidEffect){const O=D.liquidEffect.uniforms.get("uStrength");O&&(O.value=c);const Y=D.liquidEffect.uniforms.get("uFreq");Y&&(Y.value=x)}D.touch&&(D.touch.radiusScale=d)}return y.current=B,()=>{var O,Y,oe;if(m.current&&j||!m.current)return;const D=m.current;(O=D.resizeObserver)==null||O.disconnect(),cancelAnimationFrame(D.raf),(Y=D.quad)==null||Y.geometry.dispose(),D.material.dispose(),(oe=D.composer)==null||oe.dispose(),D.renderer.dispose(),D.renderer.domElement.parentElement===P&&P.removeChild(D.renderer.domElement),m.current=null}},[s,l,C,e,a,o,h,p,_,S,f,M,v,c,d,x,u,t,n,g]),I.jsx("div",{ref:b,className:`w-full h-full relative overflow-hidden ${i??""}`,style:r,"aria-label":"PixelBlast interactive background"})},Dv=ve.createContext(void 0);function j2(){const t=localStorage.getItem("theme");return t==="dark"||t==="light"?t:"dark"}function zu(t){document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(t),document.body.classList.remove("light","dark"),document.body.classList.add(t)}function X2({children:t}){const[e,n]=ve.useState(()=>{const r=j2();return zu(r),r});ve.useEffect(()=>{zu(e),localStorage.setItem("theme",e)},[e]);const i=()=>{n(r=>{const s=r==="dark"?"light":"dark";return zu(s),localStorage.setItem("theme",s),s})};return I.jsx(Dv.Provider,{value:{theme:e,toggleTheme:i},children:t})}function Pc(){const t=ve.useContext(Dv);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t}function $2(){const{theme:t}=Pc();return I.jsxs("div",{className:"justify-center flex items-center min-h-[85vh] md:min-h-screen relative",id:"intro",children:[I.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:I.jsx(W2,{variant:"circle",pixelSize:12,color:t==="dark"?"#51369C":"#b3c1ff",patternScale:2.5,patternDensity:.8,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.3,rippleThickness:.12,rippleIntensityScale:1.2,liquid:!0,liquidStrength:.1,liquidRadius:1.2,liquidWobbleSpeed:2.5,speed:.5,edgeFade:0,transparent:!0})}),I.jsx("div",{className:"absolute inset-0 transition-all duration-500 ease-in-out z-[5] pointer-events-none dark:opacity-100 opacity-0",style:{background:"radial-gradient(ellipse 70% 70% at center, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0.7) 20%, rgba(23, 23, 23, 0.5) 35%, rgba(23, 23, 23, 0.35) 50%, rgba(23, 23, 23, 0.2) 65%, rgba(23, 23, 23, 0.1) 80%, transparent 92%, transparent 100%)"}}),I.jsx("div",{className:"absolute inset-0 transition-all duration-500 ease-in-out z-[5] pointer-events-none dark:opacity-0 opacity-100",style:{background:"radial-gradient(ellipse 70% 70% at center, rgba(241, 245, 249, 0.95) 0%, rgba(241, 245, 249, 0.85) 20%, rgba(241, 245, 249, 0.7) 35%, rgba(241, 245, 249, 0.5) 50%, rgba(241, 245, 249, 0.3) 65%, rgba(241, 245, 249, 0.15) 80%, transparent 92%, transparent 100%)"}}),I.jsxs("div",{className:"relative z-10 space-y-4 px-8",id:"intro-content",children:[I.jsx("p",{className:"sfmono-reg text-lg text-sky-400  pb-2",children:Ia.greeting}),I.jsx("h1",{className:"text-[2.2rem] md:text-[4.2rem] text-text-primary",children:Ia.name}),I.jsx("h2",{className:"dark:text-slate-400 text-gray-600 text-[1.4rem] md:text-[3.2rem]",children:Ia.tagline}),I.jsx("p",{className:"calibre-reg sm:text-l md:text-xl dark:text-white text-gray-700 pb-6 text-justify max-w-3xl",children:Ia.description}),I.jsx("button",{className:"px-4 py-3 border-2 text-sm md:text-xl  border-sky-400 text-sky-400 rounded-md",onClick:()=>Ph(),children:"Say Hello !"})]})]})}function S0(){const{theme:t,toggleTheme:e}=Pc();return I.jsxs("button",{onClick:e,className:"relative w-14 h-7 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-400 dark:border-slate-600 border-gray-200 dark:bg-slate-700 bg-gray-200","aria-label":"Toggle theme",children:[I.jsx("div",{className:`absolute top-0.5 w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${t==="dark"?"translate-x-0.5 bg-sky-400":"translate-x-7 bg-amber-500"}`,children:t==="dark"?I.jsx(xm,{className:"w-3.5 h-3.5 text-slate-900"}):I.jsx(vm,{className:"w-3.5 h-3.5 text-white"})}),I.jsxs("div",{className:"absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none",children:[I.jsx(xm,{className:`w-3.5 h-3.5 transition-opacity duration-300 ${t==="dark"?"opacity-0":"opacity-40 text-slate-500"}`}),I.jsx(vm,{className:`w-3.5 h-3.5 transition-opacity duration-300 ${t==="dark"?"opacity-40 text-slate-300":"opacity-0"}`})]})]})}function Y2(){const{theme:t}=Pc(),[e,n]=ve.useState(!0),[i,r]=ve.useState(!1),s=ve.useRef(0),a=ve.useRef(!1),o={boxShadow:t==="dark"?"0px 0px 10px black":"0px 0px 10px rgba(0, 0, 0, 0.1)",backgroundColor:t==="dark"?"rgba(23, 23, 23, 0.8)":"rgba(241, 245, 249, 0.8)",backdropFilter:"blur(10px)"},l=()=>{const c=document.getElementById("root");c&&!a.current&&(a.current=!0,requestAnimationFrame(()=>{var h;const d=c.scrollTop,f=d<=10;if(e!==f&&n(f),s.current<d){const p=document.getElementById("navbar");p&&(p.classList.contains("show-on-scroll")?p.classList.replace("show-on-scroll","hide-on-scroll"):p.classList.add("hide-on-scroll"))}else s.current>d&&((h=document.getElementById("navbar"))==null||h.classList.replace("hide-on-scroll","show-on-scroll"));s.current=d,a.current=!1}))};return ve.useEffect(()=>{const c=document.getElementById("root");if(c)return c.addEventListener("scroll",l,{passive:!0}),()=>{c.removeEventListener("scroll",l)}},[e]),I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"fixed top-0 left-0 right-0 hidden md:block transition-all duration-300 ease-in-out",id:"navbar",style:e?{}:o,children:I.jsxs("nav",{className:`flex items-center justify-end py-7 pr-20 gap-8 transition-all duration-500 ease-in-out ${e?"":"navbar-scrolled"}`,children:[_m.map(c=>I.jsx(q2,{sn:c.sn,title:c.title,scrollToID:c.scrollToID},c.scrollToID)),I.jsx(S0,{})]})}),I.jsx("div",{className:"fixed top-0 right-0 p-6 md:hidden z-50",children:I.jsx("button",{onClick:()=>r(!i),className:"text-text-primary hover:text-sky-400 transition-colors duration-200","aria-label":"Toggle menu",children:i?I.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):I.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),I.jsx("div",{className:`fixed top-0 right-0 h-full w-64 bg-bg-primary/95 backdrop-blur-xl border-l border-border-primary transform transition-transform duration-300 ease-in-out z-40 md:hidden ${i?"translate-x-0":"translate-x-full"}`,children:I.jsxs("div",{className:"flex flex-col pt-20 px-6 space-y-6",children:[_m.map(c=>I.jsx(K2,{sn:c.sn,title:c.title,scrollToID:c.scrollToID,onClick:()=>r(!1)},c.scrollToID)),I.jsx("div",{className:"pt-4 border-t border-border-primary flex justify-center",children:I.jsx(S0,{})})]})}),i&&I.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:()=>r(!1)})]})}function q2({sn:t,title:e,scrollToID:n}){const i=()=>{const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})};return I.jsx("div",{className:"flex items-center",children:I.jsxs("div",{onClick:i,className:"gap-1.5 mr-8 flex cursor-pointer p-2 text-sm text-text-primary hover:text-sky-400",children:[I.jsx("p",{className:"text-sky-400 sfmono-reg",children:t}),I.jsx("p",{className:"whitespace-nowrap sfmono-reg",children:e})]})})}function K2({sn:t,title:e,scrollToID:n,onClick:i}){const r=()=>{const s=document.getElementById(n);s&&(s.scrollIntoView({behavior:"smooth"}),i())};return I.jsxs("div",{onClick:r,className:"flex items-center gap-2 cursor-pointer group py-2",children:[I.jsx("p",{className:"text-sky-400 sfmono-reg text-sm",children:t}),I.jsx("p",{className:"text-text-primary sfmono-reg text-lg group-hover:text-sky-400 transition-colors duration-200",children:e})]})}function Lv(){return I.jsxs("div",{className:"items-center space-y-4 mt-[5vh] md:mt-[2vh] mb-[20vh] md:mb-[5vh] mx-8 lg:mx-20",id:"footer",children:[I.jsxs("div",{className:"space-x-3 justify-center flex lg:hidden",children:[I.jsx(ir,{IconComponent:Jx,url:"",type:"email",size:"small"}),I.jsx(ir,{IconComponent:Kx,url:$r.linkedin,type:"link",size:"small"}),I.jsx(ir,{IconComponent:qx,url:$r.instagram,type:"link",size:"small"}),I.jsx(ir,{IconComponent:bc,url:$r.github,type:"link",size:"small"})]}),I.jsx("div",{className:"flex justify-center",children:I.jsx("div",{className:"max-w-4xl w-full",children:I.jsxs("div",{className:"sfmono-reg text-2xs md:text-xs dark:text-slate-300 text-gray-600 text-center",children:["Copyright © ",new Date().getFullYear(),"  ",Ia.copyright,". All rights reserved."]})})})]})}function Hh({sn:t,title:e}){return I.jsxs("div",{className:"flex items-center",children:[I.jsxs("div",{className:"gap-3 mr-8 flex",children:[t.length>0&&I.jsx("p",{className:"text-[0.8rem] md:text-[1.2rem] sfmono-reg text-sky-400 my-auto",children:t}),I.jsx("p",{className:"text-[1.3rem] md:text-[2.2rem] calibre-smbold text-text-primary whitespace-nowrap mt-2",children:e})]}),I.jsx("hr",{className:"w-full h-[0.05rem] dark:bg-slate-600 bg-gray-300 border-0 rounded"})]})}function Z2({sn:t,title:e}){return I.jsxs("div",{className:"flex items-center",children:[I.jsxs("div",{className:"gap-3 mr-8 flex",children:[t.length>0&&I.jsx("p",{className:"text-[0.8rem] md:text-[1.1rem] sfmono-reg text-sky-400 my-auto",children:t}),I.jsx("p",{className:"text-[1.2rem] md:text-[1.8rem] calibre-smbold dark:text-slate-400 text-gray-600 whitespace-nowrap mt-2",children:e})]}),I.jsx("hr",{className:"w-full h-[0.05rem] dark:bg-slate-600 bg-gray-300 border-0 rounded"})]})}function Q2(t){window.location.hash=t}function Nv({children:t,showSideSocials:e=!0}){return e?I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]",children:[I.jsx(U1,{}),I.jsx("div",{children:t}),I.jsx(F1,{})]}):I.jsx(I.Fragment,{children:t})}function J2(){return I.jsx("div",{className:"justify-center flex items-center pt-[15vh] mx-8 lg:mx-20",id:"about",children:I.jsxs("div",{className:"space-y-8 max-w-5xl",children:[I.jsx(Hh,{sn:"01.",title:"About me"}),I.jsxs("div",{className:"calibre-reg sm:text-xs md:text-xl max-w-5xl dark:text-gray-200 text-gray-700 text-justify space-y-5",children:[I.jsx("p",{children:"    I'm a data detective who loves uncovering stories behind the numbers. I create fun projects to make daily tasks easier for everyone—myself included. When I'm not analyzing data, you'll find me doodling or diving into research papers."}),I.jsx("p",{children:"Above all, I believe education is the most powerful tool we have. Whether it's mentoring or sharing knowledge, I'm all in on helping build a smarter, more accessible future for everyone."}),I.jsx("table",{children:I.jsxs("tbody",{children:[I.jsxs("tr",{children:[I.jsx("td",{className:"pr-4",children:"👨‍💻"}),I.jsx("td",{children:"Currently working as an AI Engineer and Research Fellow"})]}),I.jsxs("tr",{children:[I.jsx("td",{children:"💬"}),I.jsx("td",{children:"Let's brainstorm over tech, algorithms, career, and music."})]}),I.jsxs("tr",{children:[I.jsx("td",{children:"🤔"}),I.jsxs("td",{children:["Wondering how I got here? Let's just say I've been secretly leveling up with these ",I.jsx("a",{className:"cursor-pointer text-sky-400 hover:text-sky-400 hover-underline-animation",onClick:()=>Q2("/certificates"),children:"certificates."})]})]}),I.jsxs("tr",{children:[I.jsx("td",{children:"⚡"}),I.jsx("td",{children:" Fun fact: Oct 31 equals Dec 25 "})]})]})})]})]})})}function eA(t){return $n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"}}]})(t)}function tA({title:t,description:e,tags:n,githubURL:i,hostedURL:r,imageURL:s,imagePosition:a="top"}){const[o,l]=ve.useState(null),c=ve.useRef(null),d=s&&s.length>0,f=a==="right"&&d,h=a==="left"&&d,p=a==="bottom"&&d,_=f||h,S=()=>{const g=c.current;g&&(g.style.transition="none",g.style.backgroundPosition="-100% -100%, 0 0",g.style.transition="650ms ease",g.style.backgroundPosition="100% 100%, 0 0")},x=()=>{const g=c.current;g&&(g.style.transition="none",g.style.backgroundPosition="-100% -100%, 0 0")};ve.useEffect(()=>{if(i&&i.length>0){const g=i.match(/github\.com\/([^\/]+)\/([^\/]+)/);if(g){const v=g[1],M=g[2],C=`github-stats-${v}-${M}`,b=localStorage.getItem(C);if(b){const{stats:R,timestamp:T}=JSON.parse(b);if(Date.now()-T<36e5){l(R);return}}fetch(`https://api.github.com/repos/${v}/${M}`).then(R=>{if(!R.ok)throw new Error(`HTTP ${R.status}`);return R.json()}).then(R=>{if(R.stargazers_count!==void 0&&R.forks_count!==void 0){const T={stars:R.stargazers_count,forks:R.forks_count};l(T),localStorage.setItem(C,JSON.stringify({stats:T,timestamp:Date.now()}))}}).catch(()=>{})}}},[i]);const u=()=>{r?window.open(r,"_blank"):i&&window.open(i,"_blank")};return I.jsxs("div",{className:`dark:bg-slate-800 bg-slate-300 rounded-md project border dark:border-slate-700 border-gray-300 ${(i||r)&&" cursor-pointer "} relative overflow-hidden group flex flex-col transition-all duration-300 hover:ring-1 hover:ring-sky-600 ${d?f?"md:col-span-2 md:row-span-1 md:flex-row-reverse":h?"md:col-span-2 md:row-span-1 md:flex-row":p?"md:row-span-2 md:flex-col-reverse":"md:row-span-2 md:flex-col":""}`,onClick:u,onMouseEnter:S,onMouseLeave:x,children:[I.jsx("div",{ref:c,style:{position:"absolute",inset:0,background:"linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)",backgroundSize:"250% 250%, 100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"-100% -100%, 0 0",pointerEvents:"none",zIndex:10}}),d&&I.jsx("div",{className:`overflow-hidden ${_?"w-full h-48 md:w-1/2 md:h-full":"w-full h-48 md:h-64"}`,children:I.jsx("img",{src:s,alt:t,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),I.jsxs("div",{className:`p-5 flex-1 flex flex-col ${_?"w-full md:w-1/2":""}`,children:[I.jsxs("div",{className:"space-y-3 flex-1",children:[I.jsx("p",{className:"calibre-smbold text-[1.4rem] md:text-[1.6rem] dark:text-white text-gray-900 leading-8 title",children:t}),I.jsx("p",{className:"text-sm md:text-base rounded-md leading-6 dark:text-gray-300 text-gray-700",children:e})]}),I.jsxs("div",{className:"flex justify-between items-center pt-6 pb-2",children:[I.jsxs("div",{className:"flex space-x-5 text-left",children:[i&&i.length>0&&I.jsx(bc,{className:"w-5 h-5 hover:text-sky-500 cursor-pointer",onClick:g=>{g.stopPropagation(),window.open(i,"_blank")}}),r&&r.length>0&&I.jsx(eA,{className:"w-5 h-5 hover:text-sky-500 cursor-pointer",onClick:g=>{g.stopPropagation(),window.open(r,"_blank")}})]}),o&&(o.stars>0||o.forks>0)&&I.jsxs("div",{className:"text-sm sfmono-reg flex gap-3 text-gray-500/60",children:[o.stars>0&&I.jsxs("div",{className:"flex items-center gap-1",children:[I.jsx(A1,{className:"w-4 h-4 align-middle"}),I.jsx("p",{className:"leading-none pt-1",children:o.stars})]}),o.forks>0&&I.jsxs("div",{className:"flex items-center gap-1",children:[I.jsx(w1,{className:"w-4 h-4 align-middle"}),I.jsx("p",{className:"leading-none pt-1",children:o.forks})]})]})]}),I.jsx("div",{className:"mt-4",children:I.jsx("p",{className:"text-xs sfmono-reg flex flex-wrap gap-x-3 gap-y-2",children:n.length>0&&n.map((g,v)=>I.jsx("span",{className:"capitalize dark:bg-black/20 bg-gray-200 p-1.5 px-3 rounded-lg",children:g},v))})})]})]})}function nA(){const[t,e]=ve.useState(""),n=I1.filter(i=>{const r=t.toLowerCase(),s=i.title.toLowerCase().includes(r),a=i.tags.some(o=>o.toLowerCase().includes(r));return s||a});return I.jsx("div",{className:"justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8 lg:mx-20",id:"work",children:I.jsxs("div",{className:"space-y-8 max-w-6xl xl:max-w-full w-full",children:[I.jsx("div",{className:"max-w-5xl m-auto",children:I.jsx(Hh,{sn:"02.",title:"Things I've Built"})}),I.jsx("div",{className:"flex justify-center pb-6",children:I.jsxs("div",{className:"relative w-full md:max-w-5xl",children:[I.jsx(Zx,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),I.jsx("input",{type:"text",placeholder:"Search by name or tags...",value:t,onChange:i=>e(i.target.value),className:"w-full pl-11 pr-4 py-3 pt-4 dark:bg-slate-800 bg-slate-200 dark:text-white text-gray-900 rounded-md border dark:border-slate-700 border-gray-300 focus:outline-none focus:border-sky-500 transition-colors dark:placeholder:text-gray-400 placeholder:text-gray-500",style:{lineHeight:"1.5"}})]})}),I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-7 auto-rows-[minmax(280px,auto)] px-4 lg:px-0",children:n.map((i,r)=>I.jsx(tA,{title:i.title,description:i.description,tags:i.tags,githubURL:i.githubURL,hostedURL:i.hostedURL,imageURL:i.imageURL,imagePosition:i.imagePosition},r))}),n.length===0&&I.jsxs("div",{className:"text-center text-gray-400 py-8",children:['No projects found matching "',t,'"']}),I.jsx("div",{className:"flex justify-center pt-8 pb-4",children:I.jsxs("button",{onClick:()=>window.open("https://github.com/crypticsy/","_blank"),className:"flex items-center px-6 py-4 bg-transparent dark:hover:bg-slate-800 hover:bg-gray-100 dark:text-slate-300 text-gray-700 hover:text-sky-500 rounded-xl border dark:border-slate-700 border-gray-300 hover:border-sky-500 transition-all duration-300 sfmono-reg group",children:["More projects on GitHub  ",I.jsx(bc,{className:"w-5 h-5 transition-transform"})]})})]})})}function iA(t){const e=t.getDate(),n=t.toLocaleString("default",{month:"long"}),i=t.getFullYear();return`${n} ${e}, ${i}`}function rA(t){const e=ve.useRef(null),n=()=>{const r=e.current;r&&(r.style.transition="none",r.style.backgroundPosition="-100% -100%, 0 0",r.style.transition="650ms ease",r.style.backgroundPosition="100% 100%, 0 0")},i=()=>{const r=e.current;r&&(r.style.transition="none",r.style.backgroundPosition="-100% -100%, 0 0")};return I.jsxs("div",{className:"dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden h-full cursor-pointer relative group transition-all duration-300 hover:ring-1 hover:ring-sky-600 border dark:border-slate-700 border-gray-300",onClick:()=>window.open(t.publicationURL,"_blank"),onMouseEnter:n,onMouseLeave:i,children:[I.jsxs("div",{className:"w-full h-full overflow-hidden relative",children:[I.jsx("div",{ref:e,style:{position:"absolute",inset:0,background:"linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)",backgroundSize:"250% 250%, 100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"-100% -100%, 0 0",pointerEvents:"none",zIndex:10}}),I.jsx("img",{className:"w-full h-full object-cover",src:t.publicationImage})]}),I.jsxs("div",{className:"absolute bottom-0 left-0 right-0 dark:bg-slate-800 bg-slate-300 px-5 py-6 md:p-7 flex flex-col transition-all duration-500 ease-in-out group-hover:h-auto z-20",style:{minHeight:"fit-content"},children:[I.jsx("div",{className:"calibre-smbold mb-2 text-left dark:text-white text-gray-900",children:t.title}),t.subtitle&&I.jsx("div",{className:"overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out",children:I.jsx("div",{className:"text-sm md:text-base text-left pb-2 dark:text-gray-300 text-gray-700",children:t.subtitle})}),I.jsxs("div",{className:"flex sfmono-reg text-xs md:text-xs mt-4 dark:text-gray-400 text-gray-600",children:[I.jsx("div",{className:"mr-auto",children:t.type}),I.jsx("div",{className:"",children:iA(t.publishedDate)})]})]})]})}function sA(){return I.jsx("div",{className:"justify-center flex items-center mt-[15vh] md:pt-[10vh] mx-8 lg:mx-20",id:"publications",children:I.jsxs("div",{className:"space-y-8 max-w-6xl xl:max-w-full",children:[I.jsx("div",{className:"max-w-5xl m-auto",children:I.jsx(Hh,{sn:"03.",title:"Publications"})}),I.jsx("div",{className:"calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32 w-full",children:I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8 px-4 lg:px-0",children:D1.map((t,e)=>I.jsx(rA,{...t},e))})})]})})}const aA=({direction:t="right",speed:e=1,borderColor:n="#999",squareSize:i=40,hoverFillColor:r="#222",backgroundColor:s="#171717"})=>{const a=ve.useRef(null),o=ve.useRef(null),l=ve.useRef(0),c=ve.useRef(0),d=ve.useRef({x:0,y:0}),f=ve.useRef(null);return ve.useEffect(()=>{const h=a.current;if(!h)return;const p=h.getContext("2d"),_=()=>{h.width=h.offsetWidth,h.height=h.offsetHeight,l.current=Math.ceil(h.width/i)+1,c.current=Math.ceil(h.height/i)+1};window.addEventListener("resize",_),_();const S=()=>{if(!p)return;p.clearRect(0,0,h.width,h.height);const v=Math.floor(d.current.x/i)*i,M=Math.floor(d.current.y/i)*i;for(let y=v;y<h.width+i;y+=i)for(let P=M;P<h.height+i;P+=i){const F=y-d.current.x%i,B=P-d.current.y%i;f.current&&Math.floor((y-v)/i)===f.current.x&&Math.floor((P-M)/i)===f.current.y&&(p.fillStyle=r,p.fillRect(F,B,i,i)),p.strokeStyle=n,p.strokeRect(F,B,i,i)}const C=parseInt(s.slice(1,3),16),b=parseInt(s.slice(3,5),16),R=parseInt(s.slice(5,7),16),T=p.createRadialGradient(h.width/2,h.height/2,0,h.width/2,h.height/2,Math.sqrt(h.width**2+h.height**2)/2);T.addColorStop(0,`rgba(${C}, ${b}, ${R}, 0)`),T.addColorStop(.5,`rgba(${C}, ${b}, ${R}, 0.1)`),T.addColorStop(1,s),p.fillStyle=T,p.fillRect(0,0,h.width,h.height);const m=p.createLinearGradient(0,0,0,h.height);m.addColorStop(0,s),m.addColorStop(.15,`rgba(${C}, ${b}, ${R}, 0)`),m.addColorStop(.85,`rgba(${C}, ${b}, ${R}, 0)`),m.addColorStop(1,s),p.fillStyle=m,p.fillRect(0,0,h.width,h.height)},x=()=>{const v=Math.max(e,.1);switch(t){case"right":d.current.x=(d.current.x-v+i)%i;break;case"left":d.current.x=(d.current.x+v+i)%i;break;case"up":d.current.y=(d.current.y+v+i)%i;break;case"down":d.current.y=(d.current.y-v+i)%i;break;case"diagonal":d.current.x=(d.current.x-v+i)%i,d.current.y=(d.current.y-v+i)%i;break}S(),o.current=requestAnimationFrame(x)},u=v=>{const M=h.getBoundingClientRect(),C=v.clientX-M.left,b=v.clientY-M.top,R=Math.floor(d.current.x/i)*i,T=Math.floor(d.current.y/i)*i,m=Math.floor((C+d.current.x-R)/i),y=Math.floor((b+d.current.y-T)/i);(!f.current||f.current.x!==m||f.current.y!==y)&&(f.current={x:m,y})},g=()=>{f.current=null};return h.addEventListener("mousemove",u),h.addEventListener("mouseleave",g),o.current=requestAnimationFrame(x),()=>{window.removeEventListener("resize",_),o.current&&cancelAnimationFrame(o.current),h.removeEventListener("mousemove",u),h.removeEventListener("mouseleave",g)}},[t,e,n,r,i,s]),I.jsx("canvas",{ref:a,className:"w-full h-full border-none block"})};function oA(){const{theme:t}=Pc();return I.jsxs("div",{className:"relative mt-[5vh] md:mt-[10vh] w-full",id:"contact",style:{minHeight:"600px"},children:[I.jsx("div",{className:"absolute inset-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] w-screen pointer-events-none",children:I.jsx(aA,{speed:.2,squareSize:40,direction:"diagonal",borderColor:t==="dark"?"#2a2a2a":"#d5e2f5",hoverFillColor:t==="dark"?"#1a1a1a":"#cbd5e1",backgroundColor:t==="dark"?"#171717":"#f1f5f9"},t)}),I.jsx("div",{className:"justify-center flex items-center mx-8 lg:mx-20 relative z-10",style:{minHeight:"600px"},children:I.jsxs("div",{className:"max-w-3xl text-center space-y-6",children:[I.jsx("h2",{className:"text-[2rem] md:text-[3.5rem] calibre-smbold text-text-primary",children:au.title}),I.jsx("p",{className:"calibre-reg text-base md:text-lg dark:text-slate-300 text-gray-600 leading-relaxed px-4",children:au.description}),I.jsx("div",{className:"pt-8",children:I.jsx("button",{className:"px-6 py-4 border-2 text-base md:text-lg border-sky-400 text-sky-400 rounded-md",onClick:()=>Ph(),children:au.buttonText})})]})})]})}function lA(){return I.jsxs(Qx,{children:[I.jsx(Y2,{}),I.jsxs(Nv,{children:[I.jsx($2,{}),I.jsx(J2,{}),I.jsx(nA,{}),I.jsx(sA,{}),I.jsx(oA,{}),I.jsx(Lv,{})]})]})}var Df={},cA={get exports(){return Df},set exports(t){Df=t}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(zv,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(T,m){var y=(m=m||{}).dynamicTyping||!1;if(R(y)&&(m.dynamicTypingFunction=y,y={}),m.dynamicTyping=y,m.transform=!!R(m.transform)&&m.transform,m.worker&&l.WORKERS_SUPPORTED){var P=function(){if(!l.WORKERS_SUPPORTED)return!1;var B=(ee=i.URL||i.webkitURL||null,$=n.toString(),l.BLOB_URL||(l.BLOB_URL=ee.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",$,")();"],{type:"text/javascript"})))),j=new i.Worker(B),ee,$;return j.onmessage=g,j.id=o++,a[j.id]=j}();return P.userStep=m.step,P.userChunk=m.chunk,P.userComplete=m.complete,P.userError=m.error,m.step=R(m.step),m.chunk=R(m.chunk),m.complete=R(m.complete),m.error=R(m.error),delete m.worker,void P.postMessage({input:T,config:m,workerId:P.id})}var F=null;return l.NODE_STREAM_INPUT,typeof T=="string"?(T=function(B){return B.charCodeAt(0)===65279?B.slice(1):B}(T),F=m.download?new f(m):new p(m)):T.readable===!0&&R(T.read)&&R(T.on)?F=new _(m):(i.File&&T instanceof File||T instanceof Object)&&(F=new h(m)),F.stream(T)},unparse:function(T,m){var y=!1,P=!0,F=",",B=`\r
`,j='"',ee=j+j,$=!1,q=null,D=!1;(function(){if(typeof m=="object"){if(typeof m.delimiter!="string"||l.BAD_DELIMITERS.filter(function(ie){return m.delimiter.indexOf(ie)!==-1}).length||(F=m.delimiter),(typeof m.quotes=="boolean"||typeof m.quotes=="function"||Array.isArray(m.quotes))&&(y=m.quotes),typeof m.skipEmptyLines!="boolean"&&typeof m.skipEmptyLines!="string"||($=m.skipEmptyLines),typeof m.newline=="string"&&(B=m.newline),typeof m.quoteChar=="string"&&(j=m.quoteChar),typeof m.header=="boolean"&&(P=m.header),Array.isArray(m.columns)){if(m.columns.length===0)throw new Error("Option columns is empty");q=m.columns}m.escapeChar!==void 0&&(ee=m.escapeChar+j),(typeof m.escapeFormulae=="boolean"||m.escapeFormulae instanceof RegExp)&&(D=m.escapeFormulae instanceof RegExp?m.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var O=new RegExp(x(j),"g");if(typeof T=="string"&&(T=JSON.parse(T)),Array.isArray(T)){if(!T.length||Array.isArray(T[0]))return Y(null,T,$);if(typeof T[0]=="object")return Y(q||Object.keys(T[0]),T,$)}else if(typeof T=="object")return typeof T.data=="string"&&(T.data=JSON.parse(T.data)),Array.isArray(T.data)&&(T.fields||(T.fields=T.meta&&T.meta.fields||q),T.fields||(T.fields=Array.isArray(T.data[0])?T.fields:typeof T.data[0]=="object"?Object.keys(T.data[0]):[]),Array.isArray(T.data[0])||typeof T.data[0]=="object"||(T.data=[T.data])),Y(T.fields||[],T.data||[],$);throw new Error("Unable to serialize unrecognized input");function Y(ie,Ue,Be){var Ne="";typeof ie=="string"&&(ie=JSON.parse(ie)),typeof Ue=="string"&&(Ue=JSON.parse(Ue));var K=Array.isArray(ie)&&0<ie.length,te=!Array.isArray(Ue[0]);if(K&&P){for(var ye=0;ye<ie.length;ye++)0<ye&&(Ne+=F),Ne+=oe(ie[ye],ye);0<Ue.length&&(Ne+=B)}for(var me=0;me<Ue.length;me++){var Se=K?ie.length:Ue[me].length,be=!1,Ve=K?Object.keys(Ue[me]).length===0:Ue[me].length===0;if(Be&&!K&&(be=Be==="greedy"?Ue[me].join("").trim()==="":Ue[me].length===1&&Ue[me][0].length===0),Be==="greedy"&&K){for(var Ae=[],We=0;We<Se;We++){var L=te?ie[We]:We;Ae.push(Ue[me][L])}be=Ae.join("").trim()===""}if(!be){for(var Ce=0;Ce<Se;Ce++){0<Ce&&!Ve&&(Ne+=F);var Oe=K&&te?ie[Ce]:Ce;Ne+=oe(Ue[me][Oe],Ce)}me<Ue.length-1&&(!Be||0<Se&&!Ve)&&(Ne+=B)}}return Ne}function oe(ie,Ue){if(ie==null)return"";if(ie.constructor===Date)return JSON.stringify(ie).slice(1,25);var Be=!1;D&&typeof ie=="string"&&D.test(ie)&&(ie="'"+ie,Be=!0);var Ne=ie.toString().replace(O,ee);return(Be=Be||y===!0||typeof y=="function"&&y(ie,Ue)||Array.isArray(y)&&y[Ue]||function(K,te){for(var ye=0;ye<te.length;ye++)if(-1<K.indexOf(te[ye]))return!0;return!1}(Ne,l.BAD_DELIMITERS)||-1<Ne.indexOf(F)||Ne.charAt(0)===" "||Ne.charAt(Ne.length-1)===" ")?j+Ne+j:Ne}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=u,l.ParserHandle=S,l.NetworkStreamer=f,l.FileStreamer=h,l.StringStreamer=p,l.ReadableStreamStreamer=_,i.jQuery){var c=i.jQuery;c.fn.parse=function(T){var m=T.config||{},y=[];return this.each(function(B){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var j=0;j<this.files.length;j++)y.push({file:this.files[j],inputElem:this,instanceConfig:c.extend({},m)})}),P(),this;function P(){if(y.length!==0){var B,j,ee,$,q=y[0];if(R(T.before)){var D=T.before(q.file,q.inputElem);if(typeof D=="object"){if(D.action==="abort")return B="AbortError",j=q.file,ee=q.inputElem,$=D.reason,void(R(T.error)&&T.error({name:B},j,ee,$));if(D.action==="skip")return void F();typeof D.config=="object"&&(q.instanceConfig=c.extend(q.instanceConfig,D.config))}else if(D==="skip")return void F()}var O=q.instanceConfig.complete;q.instanceConfig.complete=function(Y){R(O)&&O(Y,q.file,q.inputElem),F()},l.parse(q.file,q.instanceConfig)}else R(T.complete)&&T.complete()}function F(){y.splice(0,1),P()}}}function d(T){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(m){var y=C(m);y.chunkSize=parseInt(y.chunkSize),m.step||m.chunk||(y.chunkSize=null),this._handle=new S(y),(this._handle.streamer=this)._config=y}.call(this,T),this.parseChunk=function(m,y){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var P=this._config.beforeFirstChunk(m);P!==void 0&&(m=P)}this.isFirstChunk=!1,this._halted=!1;var F=this._partialLine+m;this._partialLine="";var B=this._handle.parse(F,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var j=B.meta.cursor;this._finished||(this._partialLine=F.substring(j-this._baseIndex),this._baseIndex=j),B&&B.data&&(this._rowCount+=B.data.length);var ee=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:B,workerId:l.WORKER_ID,finished:ee});else if(R(this._config.chunk)&&!y){if(this._config.chunk(B,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);B=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(B.data),this._completeResults.errors=this._completeResults.errors.concat(B.errors),this._completeResults.meta=B.meta),this._completed||!ee||!R(this._config.complete)||B&&B.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),ee||B&&B.meta.paused||this._nextChunk(),B}this._halted=!0},this._sendError=function(m){R(this._config.error)?this._config.error(m):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:m,finished:!1})}}function f(T){var m;(T=T||{}).chunkSize||(T.chunkSize=l.RemoteChunkSize),d.call(this,T),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(y){this._input=y,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(m=new XMLHttpRequest,this._config.withCredentials&&(m.withCredentials=this._config.withCredentials),r||(m.onload=b(this._chunkLoaded,this),m.onerror=b(this._chunkError,this)),m.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var y=this._config.downloadRequestHeaders;for(var P in y)m.setRequestHeader(P,y[P])}if(this._config.chunkSize){var F=this._start+this._config.chunkSize-1;m.setRequestHeader("Range","bytes="+this._start+"-"+F)}try{m.send(this._config.downloadRequestBody)}catch(B){this._chunkError(B.message)}r&&m.status===0&&this._chunkError()}},this._chunkLoaded=function(){m.readyState===4&&(m.status<200||400<=m.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:m.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(y){var P=y.getResponseHeader("Content-Range");return P===null?-1:parseInt(P.substring(P.lastIndexOf("/")+1))}(m),this.parseChunk(m.responseText)))},this._chunkError=function(y){var P=m.statusText||y;this._sendError(new Error(P))}}function h(T){var m,y;(T=T||{}).chunkSize||(T.chunkSize=l.LocalChunkSize),d.call(this,T);var P=typeof FileReader<"u";this.stream=function(F){this._input=F,y=F.slice||F.webkitSlice||F.mozSlice,P?((m=new FileReader).onload=b(this._chunkLoaded,this),m.onerror=b(this._chunkError,this)):m=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input;if(this._config.chunkSize){var B=Math.min(this._start+this._config.chunkSize,this._input.size);F=y.call(F,this._start,B)}var j=m.readAsText(F,this._config.encoding);P||this._chunkLoaded({target:{result:j}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(m.error)}}function p(T){var m;d.call(this,T=T||{}),this.stream=function(y){return m=y,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var y,P=this._config.chunkSize;return P?(y=m.substring(0,P),m=m.substring(P)):(y=m,m=""),this._finished=!m,this.parseChunk(y)}}}function _(T){d.call(this,T=T||{});var m=[],y=!0,P=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&m.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),m.length?this.parseChunk(m.shift()):y=!0},this._streamData=b(function(F){try{m.push(typeof F=="string"?F:F.toString(this._config.encoding)),y&&(y=!1,this._checkIsFinished(),this.parseChunk(m.shift()))}catch(B){this._streamError(B)}},this),this._streamError=b(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=b(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function S(T){var m,y,P,F=Math.pow(2,53),B=-F,j=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,ee=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,$=this,q=0,D=0,O=!1,Y=!1,oe=[],ie={data:[],errors:[],meta:{}};if(R(T.step)){var Ue=T.step;T.step=function(me){if(ie=me,K())Ne();else{if(Ne(),ie.data.length===0)return;q+=me.data.length,T.preview&&q>T.preview?y.abort():(ie.data=ie.data[0],Ue(ie,$))}}}function Be(me){return T.skipEmptyLines==="greedy"?me.join("").trim()==="":me.length===1&&me[0].length===0}function Ne(){return ie&&P&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),P=!1),T.skipEmptyLines&&(ie.data=ie.data.filter(function(me){return!Be(me)})),K()&&function(){if(!ie)return;function me(be,Ve){R(T.transformHeader)&&(be=T.transformHeader(be,Ve)),oe.push(be)}if(Array.isArray(ie.data[0])){for(var Se=0;K()&&Se<ie.data.length;Se++)ie.data[Se].forEach(me);ie.data.splice(0,1)}else ie.data.forEach(me)}(),function(){if(!ie||!T.header&&!T.dynamicTyping&&!T.transform)return ie;function me(be,Ve){var Ae,We=T.header?{}:[];for(Ae=0;Ae<be.length;Ae++){var L=Ae,Ce=be[Ae];T.header&&(L=Ae>=oe.length?"__parsed_extra":oe[Ae]),T.transform&&(Ce=T.transform(Ce,L)),Ce=te(L,Ce),L==="__parsed_extra"?(We[L]=We[L]||[],We[L].push(Ce)):We[L]=Ce}return T.header&&(Ae>oe.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+oe.length+" fields but parsed "+Ae,D+Ve):Ae<oe.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+oe.length+" fields but parsed "+Ae,D+Ve)),We}var Se=1;return!ie.data.length||Array.isArray(ie.data[0])?(ie.data=ie.data.map(me),Se=ie.data.length):ie.data=me(ie.data,0),T.header&&ie.meta&&(ie.meta.fields=oe),D+=Se,ie}()}function K(){return T.header&&oe.length===0}function te(me,Se){return be=me,T.dynamicTypingFunction&&T.dynamicTyping[be]===void 0&&(T.dynamicTyping[be]=T.dynamicTypingFunction(be)),(T.dynamicTyping[be]||T.dynamicTyping)===!0?Se==="true"||Se==="TRUE"||Se!=="false"&&Se!=="FALSE"&&(function(Ve){if(j.test(Ve)){var Ae=parseFloat(Ve);if(B<Ae&&Ae<F)return!0}return!1}(Se)?parseFloat(Se):ee.test(Se)?new Date(Se):Se===""?null:Se):Se;var be}function ye(me,Se,be,Ve){var Ae={type:me,code:Se,message:be};Ve!==void 0&&(Ae.row=Ve),ie.errors.push(Ae)}this.parse=function(me,Se,be){var Ve=T.quoteChar||'"';if(T.newline||(T.newline=function(L,Ce){L=L.substring(0,1048576);var Oe=new RegExp(x(Ce)+"([^]*?)"+x(Ce),"gm"),$e=(L=L.replace(Oe,"")).split("\r"),fe=L.split(`
`),ke=1<fe.length&&fe[0].length<$e[0].length;if($e.length===1||ke)return`
`;for(var Te=0,Me=0;Me<$e.length;Me++)$e[Me][0]===`
`&&Te++;return Te>=$e.length/2?`\r
`:"\r"}(me,Ve)),P=!1,T.delimiter)R(T.delimiter)&&(T.delimiter=T.delimiter(me),ie.meta.delimiter=T.delimiter);else{var Ae=function(L,Ce,Oe,$e,fe){var ke,Te,Me,A;fe=fe||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var E=0;E<fe.length;E++){var k=fe[E],re=0,le=0,Q=0;Me=void 0;for(var De=new u({comments:$e,delimiter:k,newline:Ce,preview:10}).parse(L),U=0;U<De.data.length;U++)if(Oe&&Be(De.data[U]))Q++;else{var z=De.data[U].length;le+=z,Me!==void 0?0<z&&(re+=Math.abs(z-Me),Me=z):Me=z}0<De.data.length&&(le/=De.data.length-Q),(Te===void 0||re<=Te)&&(A===void 0||A<le)&&1.99<le&&(Te=re,ke=k,A=le)}return{successful:!!(T.delimiter=ke),bestDelimiter:ke}}(me,T.newline,T.skipEmptyLines,T.comments,T.delimitersToGuess);Ae.successful?T.delimiter=Ae.bestDelimiter:(P=!0,T.delimiter=l.DefaultDelimiter),ie.meta.delimiter=T.delimiter}var We=C(T);return T.preview&&T.header&&We.preview++,m=me,y=new u(We),ie=y.parse(m,Se,be),Ne(),O?{meta:{paused:!0}}:ie||{meta:{paused:!1}}},this.paused=function(){return O},this.pause=function(){O=!0,y.abort(),m=R(T.chunk)?"":m.substring(y.getCharIndex())},this.resume=function(){$.streamer._halted?(O=!1,$.streamer.parseChunk(m,!0)):setTimeout($.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,y.abort(),ie.meta.aborted=!0,R(T.complete)&&T.complete(ie),m=""}}function x(T){return T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function u(T){var m,y=(T=T||{}).delimiter,P=T.newline,F=T.comments,B=T.step,j=T.preview,ee=T.fastMode,$=m=T.quoteChar===void 0||T.quoteChar===null?'"':T.quoteChar;if(T.escapeChar!==void 0&&($=T.escapeChar),(typeof y!="string"||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=","),F===y)throw new Error("Comment character same as delimiter");F===!0?F="#":(typeof F!="string"||-1<l.BAD_DELIMITERS.indexOf(F))&&(F=!1),P!==`
`&&P!=="\r"&&P!==`\r
`&&(P=`
`);var q=0,D=!1;this.parse=function(O,Y,oe){if(typeof O!="string")throw new Error("Input must be a string");var ie=O.length,Ue=y.length,Be=P.length,Ne=F.length,K=R(B),te=[],ye=[],me=[],Se=q=0;if(!O)return G();if(T.header&&!Y){var be=O.split(P)[0].split(y),Ve=[],Ae={},We=!1;for(var L in be){var Ce=be[L];R(T.transformHeader)&&(Ce=T.transformHeader(Ce,L));var Oe=Ce,$e=Ae[Ce]||0;for(0<$e&&(We=!0,Oe=Ce+"_"+$e),Ae[Ce]=$e+1;Ve.includes(Oe);)Oe=Oe+"_"+$e;Ve.push(Oe)}if(We){var fe=O.split(P);fe[0]=Ve.join(y),O=fe.join(P)}}if(ee||ee!==!1&&O.indexOf(m)===-1){for(var ke=O.split(P),Te=0;Te<ke.length;Te++){if(me=ke[Te],q+=me.length,Te!==ke.length-1)q+=P.length;else if(oe)return G();if(!F||me.substring(0,Ne)!==F){if(K){if(te=[],Q(me.split(y)),W(),D)return G()}else Q(me.split(y));if(j&&j<=Te)return te=te.slice(0,j),G(!0)}}return G()}for(var Me=O.indexOf(y,q),A=O.indexOf(P,q),E=new RegExp(x($)+x(m),"g"),k=O.indexOf(m,q);;)if(O[q]!==m)if(F&&me.length===0&&O.substring(q,q+Ne)===F){if(A===-1)return G();q=A+Be,A=O.indexOf(P,q),Me=O.indexOf(y,q)}else if(Me!==-1&&(Me<A||A===-1))me.push(O.substring(q,Me)),q=Me+Ue,Me=O.indexOf(y,q);else{if(A===-1)break;if(me.push(O.substring(q,A)),z(A+Be),K&&(W(),D))return G();if(j&&te.length>=j)return G(!0)}else for(k=q,q++;;){if((k=O.indexOf(m,k+1))===-1)return oe||ye.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:te.length,index:q}),U();if(k===ie-1)return U(O.substring(q,k).replace(E,m));if(m!==$||O[k+1]!==$){if(m===$||k===0||O[k-1]!==$){Me!==-1&&Me<k+1&&(Me=O.indexOf(y,k+1)),A!==-1&&A<k+1&&(A=O.indexOf(P,k+1));var re=De(A===-1?Me:Math.min(Me,A));if(O.substr(k+1+re,Ue)===y){me.push(O.substring(q,k).replace(E,m)),O[q=k+1+re+Ue]!==m&&(k=O.indexOf(m,q)),Me=O.indexOf(y,q),A=O.indexOf(P,q);break}var le=De(A);if(O.substring(k+1+le,k+1+le+Be)===P){if(me.push(O.substring(q,k).replace(E,m)),z(k+1+le+Be),Me=O.indexOf(y,q),k=O.indexOf(m,q),K&&(W(),D))return G();if(j&&te.length>=j)return G(!0);break}ye.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:te.length,index:q}),k++}}else k++}return U();function Q(X){te.push(X),Se=q}function De(X){var pe=0;if(X!==-1){var ge=O.substring(k+1,X);ge&&ge.trim()===""&&(pe=ge.length)}return pe}function U(X){return oe||(X===void 0&&(X=O.substring(q)),me.push(X),q=ie,Q(me),K&&W()),G()}function z(X){q=X,Q(me),me=[],A=O.indexOf(P,q)}function G(X){return{data:te,errors:ye,meta:{delimiter:y,linebreak:P,aborted:D,truncated:!!X,cursor:Se+(Y||0)}}}function W(){B(G()),te=[],ye=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return q}}function g(T){var m=T.data,y=a[m.workerId],P=!1;if(m.error)y.userError(m.error,m.file);else if(m.results&&m.results.data){var F={abort:function(){P=!0,v(m.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:M,resume:M};if(R(y.userStep)){for(var B=0;B<m.results.data.length&&(y.userStep({data:m.results.data[B],errors:m.results.errors,meta:m.results.meta},F),!P);B++);delete m.results}else R(y.userChunk)&&(y.userChunk(m.results,F,m.file),delete m.results)}m.finished&&!P&&v(m.workerId,m.results)}function v(T,m){var y=a[T];R(y.userComplete)&&y.userComplete(m),y.terminate(),delete a[T]}function M(){throw new Error("Not implemented.")}function C(T){if(typeof T!="object"||T===null)return T;var m=Array.isArray(T)?[]:{};for(var y in T)m[y]=C(T[y]);return m}function b(T,m){return function(){T.apply(m,arguments)}}function R(T){return typeof T=="function"}return s&&(i.onmessage=function(T){var m=T.data;if(l.WORKER_ID===void 0&&m&&(l.WORKER_ID=m.workerId),typeof m.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(m.input,m.config),finished:!0});else if(i.File&&m.input instanceof File||m.input instanceof Object){var y=l.parse(m.input,m.config);y&&i.postMessage({workerId:l.WORKER_ID,results:y,finished:!0})}}),(f.prototype=Object.create(d.prototype)).constructor=f,(h.prototype=Object.create(d.prototype)).constructor=h,(p.prototype=Object.create(p.prototype)).constructor=p,(_.prototype=Object.create(d.prototype)).constructor=_,l})})(cA);const uA=Df;function dA(t){const e=t.toString().split("/").map(Number),n=new Date(e[2],e[1]-1,e[0]),i=n.getDate(),r=n.toLocaleString("default",{month:"long"}),s=n.getFullYear();return`${r} ${i}, ${s}`}function fA(){const[t,e]=ve.useState([]),[n,i]=ve.useState([]),[r,s]=ve.useState(""),a=n1();ve.useEffect(()=>{uA.parse("../../../certifications/certificates.csv",{download:!0,header:!0,complete:c=>{e(c.data)}})},[]),ve.useEffect(()=>{i(Array.from(new Set(t.filter(c=>c.name&&c.name.length!==0).map(c=>c.issued_by))))},[t]);const o=t.filter(c=>{var p,_;if(!r)return!0;const d=r.toLowerCase(),f=(p=c.name)==null?void 0:p.toLowerCase().includes(d),h=(_=c.issued_by)==null?void 0:_.toLowerCase().includes(d);return f||h}),l=n.filter(c=>o.some(d=>d.issued_by===c));return I.jsx(Qx,{children:I.jsx(Nv,{children:I.jsxs("div",{className:"mx-8 mt-[5vh] md:mt-[10vh]",children:[I.jsx("div",{className:"flex justify-center",children:I.jsxs("div",{className:"w-full max-w-5xl",children:[I.jsxs("div",{className:"flex items-center justify-center relative mb-16",children:[I.jsxs("button",{onClick:()=>a("/"),className:"absolute left-0 mt-8 text-gray-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2 group border-none bg-transparent","aria-label":"Back to home",children:[I.jsx(T1,{className:"w-5 h-5"}),I.jsx("span",{className:"hidden md:inline text-sm sfmono-reg",children:"Back"})]}),I.jsx("h1",{className:"mt-8 text-[1.4rem] md:text-[2.5rem] text-center",children:"Certifications"})]}),I.jsx("div",{className:"flex justify-center pb-12",children:I.jsxs("div",{className:"relative w-full",children:[I.jsx(Zx,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),I.jsx("input",{type:"text",placeholder:"Search by name or issuer...",value:r,onChange:c=>s(c.target.value),className:"w-full pl-11 pr-4 py-3 pt-4 dark:bg-slate-800 bg-slate-200 dark:text-white text-gray-900 rounded-md border dark:border-slate-700 border-gray-300 focus:outline-none focus:border-sky-500 transition-colors dark:placeholder:text-gray-400 placeholder:text-gray-500",style:{lineHeight:"1.5"}})]})}),I.jsx("div",{className:"space-y-8",children:l.map((c,d)=>I.jsxs("div",{children:[I.jsx(Z2,{sn:`0${d+1}.`,title:c}),I.jsx("table",{className:"w-full",children:I.jsxs("tbody",{children:[I.jsxs("tr",{children:[I.jsx("th",{children:" "}),I.jsx("th",{className:"dark:text-gray-500 text-gray-600 text-right",children:"Issued Date"})]}),o.map((f,h)=>f.name&&f.issued_by===c&&I.jsxs("tr",{className:"dark:hover:bg-gray-700/50 hover:bg-gray-200/50 transition-all ease-in-out cursor-pointer hover-underline-animation-parent",onClick:()=>ev(f.credential_url),children:[I.jsx("td",{className:"p-3 pr-4 md:pr-10 rounded-l-md",children:I.jsx("a",{className:"text-sky-400 hover:text-sky-400 hover-underline-animation",children:f.name})}),I.jsx("td",{className:"dark:text-gray-400 text-gray-600 text-right rounded-r-md pr-2",children:dA(f.issued_date)})]},h))]})})]},d))}),l.length===0&&I.jsxs("div",{className:"text-center dark:text-gray-400 text-gray-600 py-8",children:['No certificates found matching "',r,'"']})]})}),I.jsx(Lv,{})]})})})}const hA=_1([{path:"/",element:I.jsx(lA,{})},{path:"/certificates",element:I.jsx(fA,{})}]);Vu.createRoot(document.getElementById("root")).render(I.jsx(sr.StrictMode,{children:I.jsx(X2,{children:I.jsx(m1,{router:hA})})}));
