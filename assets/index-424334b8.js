(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z={},Nv={get exports(){return z},set exports(t){z=t}},rc={},be={},Uv={get exports(){return be},set exports(t){be=t}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Fv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),Bv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Wv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),zh=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,x0={};function ra(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||p0}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=ra.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||p0}var Cd=Rd.prototype=new g0;Cd.constructor=Rd;m0(Cd,ra.prototype);Cd.isPureReactComponent=!0;var Vh=Array.isArray,v0=Object.prototype.hasOwnProperty,Pd={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)v0.call(e,i)&&!_0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ho,type:t,key:s,ref:a,props:r,_owner:Pd.current}}function qv(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function Yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hh=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yv(""+t.key):e.toString(36)}function fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ho:case Fv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Rc(a,0):i,Vh(r)?(n="",t!=null&&(n=t.replace(Hh,"$&/")+"/"),fl(r,e,n,"",function(c){return c})):r!=null&&(Dd(r)&&(r=qv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Hh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Vh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Rc(s,o);a+=fl(s,e,n,l,r)}else if(l=jv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,o++),a+=fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(t,e,n){if(t==null)return t;var i=[],r=0;return fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},dl={transition:null},Kv={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Pd};et.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=ra;et.Fragment=Ov;et.Profiler=Bv;et.PureComponent=Rd;et.StrictMode=kv;et.Suspense=Gv;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Pd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)v0.call(e,l)&&!_0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ho,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:Vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};et.createElement=y0;et.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Hv,render:t}};et.isValidElement=Dd;et.lazy=function(t){return{$$typeof:Xv,_payload:{_status:-1,_result:t},_init:$v}};et.memo=function(t,e){return{$$typeof:Wv,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};et.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};et.useCallback=function(t,e){return dn.current.useCallback(t,e)};et.useContext=function(t){return dn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};et.useEffect=function(t,e){return dn.current.useEffect(t,e)};et.useId=function(){return dn.current.useId()};et.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return dn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};et.useRef=function(t){return dn.current.useRef(t)};et.useState=function(t){return dn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return dn.current.useTransition()};et.version="18.2.0";(function(t){t.exports=et})(Uv);const sr=Iv(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=be,Qv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),e_=Object.prototype.hasOwnProperty,t_=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n_={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)e_.call(e,i)&&!n_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qv,type:t,key:s,ref:a,props:r,_owner:t_.current}}rc.Fragment=Jv;rc.jsx=S0;rc.jsxs=S0;(function(t){t.exports=rc})(Nv);var Ou={},ku={},i_={get exports(){return ku},set exports(t){ku=t}},Un={},Bu={},r_={get exports(){return Bu},set exports(t){Bu=t}},M0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var Y=D.length;D.push(U);e:for(;0<Y;){var oe=Y-1>>>1,ie=D[oe];if(0<r(ie,U))D[oe]=U,D[Y]=ie,Y=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var U=D[0],Y=D.pop();if(Y!==U){D[0]=Y;e:for(var oe=0,ie=D.length,Ue=ie>>>1;oe<Ue;){var Be=2*(oe+1)-1,Ie=D[Be],K=Be+1,te=D[K];if(0>r(Ie,Y))K<ie&&0>r(te,Ie)?(D[oe]=te,D[K]=Y,oe=K):(D[oe]=Ie,D[Be]=Y,oe=Be);else if(K<ie&&0>r(te,Y))D[oe]=te,D[K]=Y,oe=K;else break e}}return U}function r(D,U){var Y=D.sortIndex-U.sortIndex;return Y!==0?Y:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=D)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function E(D){if(S=!1,v(D),!_)if(n(l)!==null)_=!0,q(C);else{var U=n(c);U!==null&&$(E,U.startTime-D)}}function C(D,U){_=!1,S&&(S=!1,u(T),T=-1),p=!0;var Y=h;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||D&&!P());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var ie=oe(d.expirationTime<=U);U=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&i(l),v(U)}else i(l);d=n(l)}if(d!==null)var Ue=!0;else{var Be=n(c);Be!==null&&$(E,Be.startTime-U),Ue=!1}return Ue}finally{d=null,h=Y,p=!1}}var b=!1,R=null,T=-1,x=5,y=-1;function P(){return!(t.unstable_now()-y<x)}function F(){if(R!==null){var D=t.unstable_now();y=D;var U=!0;try{U=R(!0,D)}finally{U?k():(b=!1,R=null)}}else b=!1}var k;if(typeof m=="function")k=function(){m(F)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ee=X.port2;X.port1.onmessage=F,k=function(){ee.postMessage(null)}}else k=function(){g(F,0)};function q(D){R=D,b||(b=!0,k())}function $(D,U){T=g(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var Y=h;h=U;try{return D()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=h;h=D;try{return U()}finally{h=Y}},t.unstable_scheduleCallback=function(D,U,Y){var oe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,D){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Y+ie,D={id:f++,callback:U,priorityLevel:D,startTime:Y,expirationTime:ie,sortIndex:-1},Y>oe?(D.sortIndex=Y,e(c,D),n(l)===null&&D===n(c)&&(S?(u(T),T=-1):S=!0,$(E,Y-oe))):(D.sortIndex=ie,e(l,D),_||p||(_=!0,q(C))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var U=h;return function(){var Y=h;h=U;try{return D.apply(this,arguments)}finally{h=Y}}}})(M0);(function(t){t.exports=M0})(r_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=be,Ln=Bu;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,Wa={};function ts(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Wa[t]=e,t=0;t<e.length;t++)T0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,s_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gh={},Wh={};function a_(t){return zu.call(Wh,t)?!0:zu.call(Gh,t)?!1:s_.test(t)?Wh[t]=!0:(Gh[t]=!0,!1)}function o_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l_(t,e,n,i){if(e===null||typeof e>"u"||o_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Id);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Id);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Id);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l_(e,n,r,i)&&(n=null),i||r===null?a_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),A0=Symbol.for("react.offscreen"),Xh=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=Xh&&t[Xh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Cc;function Ca(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Pc=!1;function Dc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function c_(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Vu:return"Profiler";case Ud:return"StrictMode";case Hu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case b0:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:Wu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Wu(t(e))}catch{}}return null}function u_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f_(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=f_(t))}function C0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function ju(t,e){P0(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(Pa(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function D0(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Po,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d_=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(t){d_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Na[e]=Na[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Na.hasOwnProperty(t)&&Na[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=N0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h_=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,Os=null,ks=null;function Kh(t){if(t=xo(t)){if(typeof Ju!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=cc(e),Ju(t.stateNode,t.type,e))}}function F0(t){Os?ks?ks.push(t):ks=[t]:Os=t}function O0(){if(Os){var t=Os,e=ks;if(ks=Os=null,Kh(t),e)for(t=0;t<e.length;t++)Kh(e[t])}}function k0(t,e){return t(e)}function B0(){}var Lc=!1;function z0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return k0(t,e,n)}finally{Lc=!1,(Os!==null||ks!==null)&&(B0(),O0())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var ef=!1;if(Ui)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){ef=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{ef=!1}function p_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ua=!1,Cl=null,Pl=!1,tf=null,m_={onError:function(t){Ua=!0,Cl=t}};function x_(t,e,n,i,r,s,a,o,l){Ua=!1,Cl=null,p_.apply(m_,arguments)}function g_(t,e,n,i,r,s,a,o,l){if(x_.apply(this,arguments),Ua){if(Ua){var c=Cl;Ua=!1,Cl=null}else throw Error(ve(198));Pl||(Pl=!0,tf=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zh(t){if(ns(t)!==t)throw Error(ve(188))}function v_(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zh(r),t;if(s===i)return Zh(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function H0(t){return t=v_(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var W0=Ln.unstable_scheduleCallback,Qh=Ln.unstable_cancelCallback,__=Ln.unstable_shouldYield,y_=Ln.unstable_requestPaint,Pt=Ln.unstable_now,S_=Ln.unstable_getCurrentPriorityLevel,Bd=Ln.unstable_ImmediatePriority,X0=Ln.unstable_UserBlockingPriority,Dl=Ln.unstable_NormalPriority,M_=Ln.unstable_LowPriority,j0=Ln.unstable_IdlePriority,sc=null,pi=null;function E_(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:w_,T_=Math.log,b_=Math.LN2;function w_(t){return t>>>=0,t===0?32:31-(T_(t)/b_|0)|0}var Do=64,Lo=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Da(o):(s&=a,s!==0&&(i=Da(s)))}else a=n&~r,a!==0?i=Da(a):s!==0&&(i=Da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function A_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ii(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=A_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function Y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $0,Vd,K0,Z0,Q0,rf=!1,Io=[],ar=null,or=null,lr=null,qa=new Map,Ya=new Map,Ji=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(e.pointerId)}}function ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return ar=ma(ar,t,e,n,i,r),!0;case"dragenter":return or=ma(or,t,e,n,i,r),!0;case"mouseover":return lr=ma(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,ma(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ya.set(s,ma(Ya.get(s)||null,t,e,n,i,r)),!0}return!1}function J0(t){var e=zr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=V0(n),e!==null){t.blockedOn=e,Q0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qu=i,n.target.dispatchEvent(i),Qu=null}else return e=xo(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){hl(t)&&n.delete(e)}function L_(){rf=!1,ar!==null&&hl(ar)&&(ar=null),or!==null&&hl(or)&&(or=null),lr!==null&&hl(lr)&&(lr=null),qa.forEach(ep),Ya.forEach(ep)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,L_)))}function $a(t){function e(r){return xa(r,t)}if(0<Io.length){xa(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&xa(ar,t),or!==null&&xa(or,t),lr!==null&&xa(lr,t),qa.forEach(e),Ya.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&Ji.shift()}var Bs=Vi.ReactCurrentBatchConfig,Il=!0;function I_(t,e,n,i){var r=dt,s=Bs.transition;Bs.transition=null;try{dt=1,Hd(t,e,n,i)}finally{dt=r,Bs.transition=s}}function N_(t,e,n,i){var r=dt,s=Bs.transition;Bs.transition=null;try{dt=4,Hd(t,e,n,i)}finally{dt=r,Bs.transition=s}}function Hd(t,e,n,i){if(Il){var r=sf(t,e,n,i);if(r===null)Gc(t,e,i,Nl,n),Jh(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(Jh(t,i),e&4&&-1<P_.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&$0(s),s=sf(t,e,n,i),s===null&&Gc(t,e,i,Nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(t,e,i,null,n)}}var Nl=null;function sf(t,e,n,i){if(Nl=null,t=kd(i),t=zr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function ex(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S_()){case Bd:return 1;case X0:return 4;case Dl:case M_:return 16;case j0:return 536870912;default:return 16}default:return 16}}var tr=null,Gd=null,pl=null;function tx(){if(pl)return pl;var t,e=Gd,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function tp(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:tp,this.isPropagationStopped=tp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Fn(sa),mo=Tt({},sa,{view:0,detail:0}),U_=Fn(mo),Nc,Uc,ga,ac=Tt({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(Nc=t.screenX-ga.screenX,Uc=t.screenY-ga.screenY):Uc=Nc=0,ga=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),np=Fn(ac),F_=Tt({},ac,{dataTransfer:0}),O_=Fn(F_),k_=Tt({},mo,{relatedTarget:0}),Fc=Fn(k_),B_=Tt({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Fn(B_),V_=Tt({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=Fn(V_),G_=Tt({},sa,{data:0}),ip=Fn(G_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function Xd(){return q_}var Y_=Tt({},mo,{key:function(t){if(t.key){var e=W_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Fn(Y_),K_=Tt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Fn(K_),Z_=Tt({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),Q_=Fn(Z_),J_=Tt({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Fn(J_),ty=Tt({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Fn(ty),iy=[9,13,27,32],jd=Ui&&"CompositionEvent"in window,Fa=null;Ui&&"documentMode"in document&&(Fa=document.documentMode);var ry=Ui&&"TextEvent"in window&&!Fa,nx=Ui&&(!jd||Fa&&8<Fa&&11>=Fa),sp=String.fromCharCode(32),ap=!1;function ix(t,e){switch(t){case"keyup":return iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function sy(t,e){switch(t){case"compositionend":return rx(e);case"keypress":return e.which!==32?null:(ap=!0,sp);case"textInput":return t=e.data,t===sp&&ap?null:t;default:return null}}function ay(t,e){if(Ts)return t==="compositionend"||!jd&&ix(t,e)?(t=tx(),pl=Gd=tr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nx&&e.locale!=="ko"?null:e.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oy[t.type]:e==="textarea"}function sx(t,e,n,i){F0(i),e=Ul(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,Ka=null;function ly(t){xx(t,0)}function oc(t){var e=As(t);if(C0(e))return t}function cy(t,e){if(t==="change")return e}var ax=!1;if(Ui){var Oc;if(Ui){var kc="oninput"in document;if(!kc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),kc=typeof lp.oninput=="function"}Oc=kc}else Oc=!1;ax=Oc&&(!document.documentMode||9<document.documentMode)}function cp(){Oa&&(Oa.detachEvent("onpropertychange",ox),Ka=Oa=null)}function ox(t){if(t.propertyName==="value"&&oc(Ka)){var e=[];sx(e,Ka,t,kd(t)),z0(ly,e)}}function uy(t,e,n){t==="focusin"?(cp(),Oa=e,Ka=n,Oa.attachEvent("onpropertychange",ox)):t==="focusout"&&cp()}function fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Ka)}function dy(t,e){if(t==="click")return oc(e)}function hy(t,e){if(t==="input"||t==="change")return oc(e)}function py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:py;function Za(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,e){var n=up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function lx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cx(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function my(t){var e=cx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lx(n.ownerDocument.documentElement,n)){if(i!==null&&qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fp(n,s);var a=fp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=Ui&&"documentMode"in document&&11>=document.documentMode,bs=null,af=null,ka=null,of=!1;function dp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||bs==null||bs!==Rl(i)||(i=bs,"selectionStart"in i&&qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ka&&Za(ka,i)||(ka=i,i=Ul(af,"onSelect"),0<i.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bs)))}function Uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Bc={},ux={};Ui&&(ux=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function lc(t){if(Bc[t])return Bc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ux)return Bc[t]=e[n];return t}var fx=lc("animationend"),dx=lc("animationiteration"),hx=lc("animationstart"),px=lc("transitionend"),mx=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){mx.set(t,e),ts(e,[t])}for(var zc=0;zc<hp.length;zc++){var Vc=hp[zc],gy=Vc.toLowerCase(),vy=Vc[0].toUpperCase()+Vc.slice(1);Sr(gy,"on"+vy)}Sr(fx,"onAnimationEnd");Sr(dx,"onAnimationIteration");Sr(hx,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(px,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function pp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g_(i,e,void 0,t),t.currentTarget=null}function xx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;pp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;pp(r,o,c),s=l}}}if(Pl)throw t=tf,Pl=!1,tf=null,t}function gt(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(gx(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),gx(n,t,i,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[Fo]){t[Fo]=!0,T0.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,Hc("selectionchange",!1,e))}}function gx(t,e,n,i){switch(ex(e)){case 1:var r=I_;break;case 4:r=N_;break;default:r=Hd}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}z0(function(){var c=s,f=kd(n),d=[];e:{var h=mx.get(t);if(h!==void 0){var p=Wd,_=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=$_;break;case"focusin":_="focus",p=Fc;break;case"focusout":_="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q_;break;case fx:case dx:case hx:p=z_;break;case px:p=ey;break;case"scroll":p=U_;break;case"wheel":p=ny;break;case"copy":case"cut":case"paste":p=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rp}var S=(e&4)!==0,g=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var m=c,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=ja(m,u),E!=null&&S.push(Ja(m,E,v)))),g)break;m=m.return}0<S.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Qu&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[Fi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?zr(_):null,_!==null&&(g=ns(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=np,E="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=rp,E="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?h:As(p),v=_==null?h:As(_),h=new S(E,m+"leave",p,n,f),h.target=g,h.relatedTarget=v,E=null,zr(f)===c&&(S=new S(u,m+"enter",_,n,f),S.target=v,S.relatedTarget=g,E=S),g=E,p&&_)t:{for(S=p,u=_,m=0,v=S;v;v=os(v))m++;for(v=0,E=u;E;E=os(E))v++;for(;0<m-v;)S=os(S),m--;for(;0<v-m;)u=os(u),v--;for(;m--;){if(S===u||u!==null&&S===u.alternate)break t;S=os(S),u=os(u)}S=null}else S=null;p!==null&&mp(d,h,p,S,!1),_!==null&&g!==null&&mp(d,g,_,S,!0)}}e:{if(h=c?As(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=cy;else if(op(h))if(ax)C=hy;else{C=fy;var b=uy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=dy);if(C&&(C=C(t,c))){sx(d,C,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&qu(h,"number",h.value)}switch(b=c?As(c):window,t){case"focusin":(op(b)||b.contentEditable==="true")&&(bs=b,af=c,ka=null);break;case"focusout":ka=af=bs=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,dp(d,n,f);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":dp(d,n,f)}var R;if(jd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ts?ix(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(nx&&n.locale!=="ko"&&(Ts||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ts&&(R=tx()):(tr=f,Gd="value"in tr?tr.value:tr.textContent,Ts=!0)),b=Ul(c,T),0<b.length&&(T=new ip(T,t,null,n,f),d.push({event:T,listeners:b}),R?T.data=R:(R=rx(n),R!==null&&(T.data=R)))),(R=ry?sy(t,n):ay(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(f=new ip("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=R))}xx(d,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ja(t,n),s!=null&&i.unshift(Ja(t,s,r)),s=ja(t,e),s!=null&&i.push(Ja(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ja(n,s),l!=null&&a.unshift(Ja(n,l,o))):r||(l=ja(n,s),l!=null&&a.push(Ja(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var yy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(Sy,"")}function Oo(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(ve(425))}function Fl(){}var lf=null,cf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(Ty)}:ff;function Ty(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$a(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),fi="__reactFiber$"+aa,eo="__reactProps$"+aa,Fi="__reactContainer$"+aa,df="__reactEvents$"+aa,by="__reactListeners$"+aa,wy="__reactHandles$"+aa;function zr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[fi])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[fi]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function cc(t){return t[eo]||null}var hf=[],Rs=-1;function Mr(t){return{current:t}}function vt(t){0>Rs||(t.current=hf[Rs],hf[Rs]=null,Rs--)}function xt(t,e){Rs++,hf[Rs]=t.current,t.current=e}var vr={},sn=Mr(vr),_n=Mr(!1),$r=vr;function js(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Ol(){vt(_n),vt(sn)}function _p(t,e,n){if(sn.current!==vr)throw Error(ve(168));xt(sn,e),xt(_n,n)}function vx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,u_(t)||"Unknown",r));return Tt({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,$r=sn.current,xt(sn,t),xt(_n,_n.current),!0}function yp(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=vx(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,vt(_n),vt(sn),xt(sn,t)):vt(_n),xt(_n,n)}var Ri=null,uc=!1,Xc=!1;function _x(t){Ri===null?Ri=[t]:Ri.push(t)}function Ay(t){uc=!0,_x(t)}function Er(){if(!Xc&&Ri!==null){Xc=!0;var t=0,e=dt;try{var n=Ri;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,uc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),W0(Bd,Er),r}finally{dt=e,Xc=!1}}return null}var Cs=[],Ps=0,Bl=null,zl=0,Bn=[],zn=0,Kr=null,Ci=1,Pi="";function Ur(t,e){Cs[Ps++]=zl,Cs[Ps++]=Bl,Bl=t,zl=e}function yx(t,e,n){Bn[zn++]=Ci,Bn[zn++]=Pi,Bn[zn++]=Kr,Kr=t;var i=Ci;t=Pi;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-ii(e)+r|n<<r|i,Pi=s+t}else Ci=1<<s|n<<r|i,Pi=t}function Yd(t){t.return!==null&&(Ur(t,1),yx(t,1,0))}function $d(t){for(;t===Bl;)Bl=Cs[--Ps],Cs[Ps]=null,zl=Cs[--Ps],Cs[Ps]=null;for(;t===Kr;)Kr=Bn[--zn],Bn[zn]=null,Pi=Bn[--zn],Bn[zn]=null,Ci=Bn[--zn],Bn[zn]=null}var Cn=null,Rn=null,_t=!1,ei=null;function Sx(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Ci,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Rn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(_t){var e=Rn;if(e){var n=e;if(!Sp(t,e)){if(pf(t))throw Error(ve(418));e=cr(n.nextSibling);var i=Cn;e&&Sp(t,e)?Sx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Cn=t)}}else{if(pf(t))throw Error(ve(418));t.flags=t.flags&-4097|2,_t=!1,Cn=t}}}function Mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function ko(t){if(t!==Cn)return!1;if(!_t)return Mp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=Rn)){if(pf(t))throw Mx(),Error(ve(418));for(;e;)Sx(t,e),e=cr(e.nextSibling)}if(Mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Cn?cr(t.stateNode.nextSibling):null;return!0}function Mx(){for(var t=Rn;t;)t=cr(t.nextSibling)}function qs(){Rn=Cn=null,_t=!1}function Kd(t){ei===null?ei=[t]:ei.push(t)}var Ry=Vi.ReactCurrentBatchConfig;function Zn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Vl=Mr(null),Hl=null,Ds=null,Zd=null;function Qd(){Zd=Ds=Hl=null}function Jd(t){var e=Vl.current;vt(Vl),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){Hl=t,Zd=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Zd!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Hl===null)throw Error(ve(308));Ds=t,Hl.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Vr=null;function eh(t){Vr===null?Vr=[t]:Vr.push(t)}function Ex(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}function Ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(h=e,p=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Tt({},d,h);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=a,t.lanes=a,t.memoizedState=d}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var bx=new E0.Component().refs;function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=dr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ri(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=dr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ri(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=dr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ri(e,t,i,n),xl(e,t,i))}};function bp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Za(n,i)||!Za(r,s):!0}function wx(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=yn(e)?$r:sn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=bx,th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=yn(e)?$r:sn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===bx&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function Ax(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=hr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,v,E){return m===null||m.tag!==6?(m=Qc(v,u.mode,E),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,E){var C=v.type;return C===Es?f(u,m,v.props.children,E,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Ap(C)===m.type)?(E=r(m,v.props),E.ref=va(u,m,v),E.return=u,E):(E=Ml(v.type,v.key,v.props,null,u.mode,E),E.ref=va(u,m,v),E.return=u,E)}function c(u,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Jc(v,u.mode,E),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,E,C){return m===null||m.tag!==7?(m=jr(v,u.mode,E,C),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Qc(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:return v=Ml(m.type,m.key,m.props,null,u.mode,v),v.ref=va(u,null,m),v.return=u,v;case Ms:return m=Jc(m,u.mode,v),m.return=u,m;case Zi:var E=m._init;return d(u,E(m._payload),v)}if(Pa(m)||ha(m))return m=jr(m,u.mode,v,null),m.return=u,m;Bo(u,m)}return null}function h(u,m,v,E){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:return v.key===C?l(u,m,v,E):null;case Ms:return v.key===C?c(u,m,v,E):null;case Zi:return C=v._init,h(u,m,C(v._payload),E)}if(Pa(v)||ha(v))return C!==null?null:f(u,m,v,E,null);Bo(u,v)}return null}function p(u,m,v,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,o(m,u,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:return u=u.get(E.key===null?v:E.key)||null,l(m,u,E,C);case Ms:return u=u.get(E.key===null?v:E.key)||null,c(m,u,E,C);case Zi:var b=E._init;return p(u,m,v,b(E._payload),C)}if(Pa(E)||ha(E))return u=u.get(v)||null,f(m,u,E,C,null);Bo(m,E)}return null}function _(u,m,v,E){for(var C=null,b=null,R=m,T=m=0,x=null;R!==null&&T<v.length;T++){R.index>T?(x=R,R=null):x=R.sibling;var y=h(u,R,v[T],E);if(y===null){R===null&&(R=x);break}t&&R&&y.alternate===null&&e(u,R),m=s(y,m,T),b===null?C=y:b.sibling=y,b=y,R=x}if(T===v.length)return n(u,R),_t&&Ur(u,T),C;if(R===null){for(;T<v.length;T++)R=d(u,v[T],E),R!==null&&(m=s(R,m,T),b===null?C=R:b.sibling=R,b=R);return _t&&Ur(u,T),C}for(R=i(u,R);T<v.length;T++)x=p(R,u,T,v[T],E),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?T:x.key),m=s(x,m,T),b===null?C=x:b.sibling=x,b=x);return t&&R.forEach(function(P){return e(u,P)}),_t&&Ur(u,T),C}function S(u,m,v,E){var C=ha(v);if(typeof C!="function")throw Error(ve(150));if(v=C.call(v),v==null)throw Error(ve(151));for(var b=C=null,R=m,T=m=0,x=null,y=v.next();R!==null&&!y.done;T++,y=v.next()){R.index>T?(x=R,R=null):x=R.sibling;var P=h(u,R,y.value,E);if(P===null){R===null&&(R=x);break}t&&R&&P.alternate===null&&e(u,R),m=s(P,m,T),b===null?C=P:b.sibling=P,b=P,R=x}if(y.done)return n(u,R),_t&&Ur(u,T),C;if(R===null){for(;!y.done;T++,y=v.next())y=d(u,y.value,E),y!==null&&(m=s(y,m,T),b===null?C=y:b.sibling=y,b=y);return _t&&Ur(u,T),C}for(R=i(u,R);!y.done;T++,y=v.next())y=p(R,u,T,y.value,E),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?T:y.key),m=s(y,m,T),b===null?C=y:b.sibling=y,b=y);return t&&R.forEach(function(F){return e(u,F)}),_t&&Ur(u,T),C}function g(u,m,v,E){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:e:{for(var C=v.key,b=m;b!==null;){if(b.key===C){if(C=v.type,C===Es){if(b.tag===7){n(u,b.sibling),m=r(b,v.props.children),m.return=u,u=m;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Ap(C)===b.type){n(u,b.sibling),m=r(b,v.props),m.ref=va(u,b,v),m.return=u,u=m;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Es?(m=jr(v.props.children,u.mode,E,v.key),m.return=u,u=m):(E=Ml(v.type,v.key,v.props,null,u.mode,E),E.ref=va(u,m,v),E.return=u,u=E)}return a(u);case Ms:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Jc(v,u.mode,E),m.return=u,u=m}return a(u);case Zi:return b=v._init,g(u,m,b(v._payload),E)}if(Pa(v))return _(u,m,v,E);if(ha(v))return S(u,m,v,E);Bo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Qc(v,u.mode,E),m.return=u,u=m),a(u)):n(u,m)}return g}var Ys=Ax(!0),Rx=Ax(!1),go={},mi=Mr(go),to=Mr(go),no=Mr(go);function Hr(t){if(t===go)throw Error(ve(174));return t}function nh(t,e){switch(xt(no,e),xt(to,t),xt(mi,go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}vt(mi),xt(mi,e)}function $s(){vt(mi),vt(to),vt(no)}function Cx(t){Hr(no.current);var e=Hr(mi.current),n=$u(e,t.type);e!==n&&(xt(to,t),xt(mi,n))}function ih(t){to.current===t&&(vt(mi),vt(to))}var Mt=Mr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function rh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var gl=Vi.ReactCurrentDispatcher,qc=Vi.ReactCurrentBatchConfig,Zr=0,Et=null,Ot=null,Wt=null,Xl=!1,Ba=!1,io=0,Cy=0;function Jt(){throw Error(ve(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function ah(t,e,n,i,r,s){if(Zr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?Iy:Ny,t=n(i,r),Ba){s=0;do{if(Ba=!1,io=0,25<=s)throw Error(ve(301));s+=1,Wt=Ot=null,e.updateQueue=null,gl.current=Uy,t=n(i,r)}while(Ba)}if(gl.current=jl,e=Ot!==null&&Ot.next!==null,Zr=0,Wt=Ot=Et=null,Xl=!1,e)throw Error(ve(300));return t}function oh(){var t=io!==0;return io=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function jn(){if(Ot===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(ve(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ro(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Et.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ai(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=jn(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Px(){}function Dx(t,e){var n=Et,i=jn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,lh(Nx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,so(9,Ix.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(ve(349));Zr&30||Lx(n,e,r)}return r}function Lx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ix(t,e,n,i){e.value=n,e.getSnapshot=i,Ux(e)&&Fx(t)}function Nx(t,e,n){return n(function(){Ux(e)&&Fx(t)})}function Ux(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Fx(t){var e=Oi(t,1);e!==null&&ri(e,t,1,-1)}function Rp(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,Et,t),[e.memoizedState,t]}function so(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ox(){return jn().memoizedState}function vl(t,e,n,i){var r=ci();Et.flags|=t,r.memoizedState=so(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&sh(i,a.deps)){r.memoizedState=so(e,n,s,i);return}}Et.flags|=t,r.memoizedState=so(1|e,n,s,i)}function Cp(t,e){return vl(8390656,8,t,e)}function lh(t,e){return dc(2048,8,t,e)}function kx(t,e){return dc(4,2,t,e)}function Bx(t,e){return dc(4,4,t,e)}function zx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vx(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,zx.bind(null,e,t),n)}function ch(){}function Hx(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gx(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wx(t,e,n){return Zr&21?(ai(n,e)||(n=q0(),Et.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Py(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{dt=n,qc.transition=i}}function Xx(){return jn().memoizedState}function Dy(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jx(t))qx(e,n);else if(n=Ex(t,e,n,i),n!==null){var r=fn();ri(n,t,i,r),Yx(n,e,i)}}function Ly(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jx(t))qx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ai(o,a)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ex(t,e,r,i),n!==null&&(r=fn(),ri(n,t,i,r),Yx(n,e,i))}}function jx(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function qx(t,e){Ba=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}var jl={readContext:Xn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},Iy={readContext:Xn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,zx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:ch,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=Py.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ci();if(_t){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),qt===null)throw Error(ve(349));Zr&30||Lx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cp(Nx.bind(null,i,s,t),[t]),i.flags|=2048,so(9,Ix.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ci(),e=qt.identifierPrefix;if(_t){var n=Pi,i=Ci;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Xn,useCallback:Hx,useContext:Xn,useEffect:lh,useImperativeHandle:Vx,useInsertionEffect:kx,useLayoutEffect:Bx,useMemo:Gx,useReducer:Yc,useRef:Ox,useState:function(){return Yc(ro)},useDebugValue:ch,useDeferredValue:function(t){var e=jn();return Wx(e,Ot.memoizedState,t)},useTransition:function(){var t=Yc(ro)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Dx,useId:Xx,unstable_isNewReconciler:!1},Uy={readContext:Xn,useCallback:Hx,useContext:Xn,useEffect:lh,useImperativeHandle:Vx,useInsertionEffect:kx,useLayoutEffect:Bx,useMemo:Gx,useReducer:$c,useRef:Ox,useState:function(){return $c(ro)},useDebugValue:ch,useDeferredValue:function(t){var e=jn();return Ot===null?e.memoizedState=t:Wx(e,Ot.memoizedState,t)},useTransition:function(){var t=$c(ro)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Dx,useId:Xx,unstable_isNewReconciler:!1};function Ks(t,e){try{var n="",i=e;do n+=c_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function $x(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,Cf=i),_f(t,e)},n}function Kx(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ky.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var Oy=Vi.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?Rx(e,null,n,i):Ys(e,t.child,n,i)}function Ip(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=ah(t,e,n,i,s,r),n=oh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(_t&&n&&Yd(e),e.flags|=1,un(t,e,i,r),e.child)}function Np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zx(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(a,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Za(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return yf(t,e,n,i,r)}function Qx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Is,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Is,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Is,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Is,wn),wn|=i;return un(t,e,r,n),e.child}function Jx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=yn(n)?$r:sn.current;return s=js(e,s),zs(e,r),n=ah(t,e,n,i,s,r),i=oh(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(_t&&i&&Yd(e),e.flags|=1,un(t,e,n,r),e.child)}function Up(t,e,n,i,r){if(yn(n)){var s=!0;kl(e)}else s=!1;if(zs(e,r),e.stateNode===null)_l(t,e),wx(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=yn(n)?$r:sn.current,c=js(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&wp(e,a,i,c),Qi=!1;var h=e.memoizedState;a.state=h,Gl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||_n.current||Qi?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(o=Qi||bp(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Tx(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Zn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=yn(n)?$r:sn.current,l=js(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&wp(e,a,i,l),Qi=!1,h=e.memoizedState,a.state=h,Gl(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||_n.current||Qi?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(c=Qi||bp(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,s,r)}function Sf(t,e,n,i,r,s){Jx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&yp(e,n,!1),ki(t,e,s);i=e.stateNode,Oy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&yp(e,n,!0),e.child}function eg(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),nh(t,e.containerInfo)}function Fp(t,e,n,i,r){return qs(),Kd(r),e.flags|=256,un(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function tg(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Mt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=mc(a,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):uh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ky(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=jr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ef(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uh(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,i){return i!==null&&Kd(i),Ys(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ky(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(ve(422))),zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,a),e.child.memoizedState=Ef(a),e.memoizedState=Mf,s);if(!(e.mode&1))return zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ve(419)),i=Kc(s,i,void 0),zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),ri(i,t,r,-1))}return xh(),i=Kc(Error(ve(421))),zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=cr(r.nextSibling),Cn=e,_t=!0,ei=null,t!==null&&(Bn[zn++]=Ci,Bn[zn++]=Pi,Bn[zn++]=Kr,Ci=t.id,Pi=t.overflow,Kr=e),e=uh(e,i.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function Zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ng(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function By(t,e,n){switch(e.tag){case 3:eg(e),qs();break;case 5:Cx(e);break;case 1:yn(e.type)&&kl(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?tg(t,e,n):(xt(Mt,Mt.current&1),t=ki(t,e,n),t!==null?t.sibling:null);xt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Qx(t,e,n)}return ki(t,e,n)}var ig,Tf,rg,sg;ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};rg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(mi.current);var s=null;switch(n){case"input":r=Xu(t,r),i=Xu(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Yu(t,r),i=Yu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fl)}Ku(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sg=function(t,e,n,i){n!==i&&(e.flags|=4)};function _a(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zy(t,e,n){var i=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&Ol(),en(e),null;case 3:return i=e.stateNode,$s(),vt(_n),vt(sn),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Lf(ei),ei=null))),Tf(t,e),en(e),null;case 5:ih(e);var r=Hr(no.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return en(e),null}if(t=Hr(mi.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[eo]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<La.length;r++)gt(La[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":jh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Yh(i,s),gt("invalid",i)}Ku(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Oo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Oo(i.textContent,o,t),r=["children",""+o]):Wa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Co(i),qh(i,s,!0);break;case"textarea":Co(i),$h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[fi]=e,t[eo]=i,ig(t,e,!1,!1),e.stateNode=t;e:{switch(a=Zu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<La.length;r++)gt(La[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":jh(t,i),r=Xu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Yh(t,i),r=Yu(t,i),gt("invalid",t);break;default:r=i}Ku(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?U0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(t,l):typeof l=="number"&&Xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Nd(t,s,l,a))}switch(n){case"input":Co(t),qh(t,i,!1);break;case"textarea":Co(t),$h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)sg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=Hr(no.current),Hr(mi.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))Mx(),qs(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[fi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ei!==null&&(Lf(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?kt===0&&(kt=3):xh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return $s(),Tf(t,e),t===null&&Qa(e.stateNode.containerInfo),en(e),null;case 10:return Jd(e.type._context),en(e),null;case 17:return yn(e.type)&&Ol(),en(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)_a(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Wl(t),a!==null){for(e.flags|=128,_a(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Zs&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return en(e),null}else 2*Pt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Mt.current,xt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function Vy(t,e){switch($d(e),e.tag){case 1:return yn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),vt(_n),vt(sn),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return $s(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Vo=!1,rn=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function bf(t,e,n){try{n()}catch(i){At(t,e,i)}}var kp=!1;function Gy(t,e){if(lf=Il,t=cx(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},Il=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Zn(e.type,S),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(E){At(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return _=kp,kp=!1,_}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bf(e,n,s)}r=r.next}while(r!==i)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ag(t){var e=t.alternate;e!==null&&(t.alternate=null,ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[eo],delete e[df],delete e[by],delete e[wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function og(t){return t.tag===5||t.tag===3||t.tag===4}function Bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var $t=null,Jn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)lg(t,e,n),n=n.sibling}function lg(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:rn||Ls(n,e);case 6:var i=$t,r=Jn;$t=null,Wi(t,e,n),$t=i,Jn=r,$t!==null&&(Jn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Jn?(t=$t,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),$a(t)):Wc($t,n.stateNode));break;case 4:i=$t,r=Jn,$t=n.stateNode.containerInfo,Jn=!0,Wi(t,e,n),$t=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&bf(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!rn&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Wi(t,e,n),rn=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hy),e.forEach(function(i){var r=Qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,Jn=!1;break e;case 3:$t=o.stateNode.containerInfo,Jn=!0;break e;case 4:$t=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if($t===null)throw Error(ve(160));lg(s,a,r),$t=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cg(e,t),e=e.sibling}function cg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),li(t),i&4){try{za(3,t,t.return),hc(3,t)}catch(S){At(t,t.return,S)}try{za(5,t,t.return)}catch(S){At(t,t.return,S)}}break;case 1:qn(e,t),li(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(qn(e,t),li(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(S){At(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&P0(r,s),Zu(o,a);var c=Zu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?U0(r,d):f==="dangerouslySetInnerHTML"?I0(r,d):f==="children"?Xa(r,d):Nd(r,f,d,c)}switch(o){case"input":ju(r,s);break;case"textarea":D0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[eo]=s}catch(S){At(t,t.return,S)}}break;case 6:if(qn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){At(t,t.return,S)}}break;case 3:if(qn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(S){At(t,t.return,S)}break;case 4:qn(e,t),li(t);break;case 13:qn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hh=Pt())),i&4&&zp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,qn(e,t),rn=c):qn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Le=t,f=t.child;f!==null;){for(d=Le=f;Le!==null;){switch(h=Le,p=h.child,h.tag){case 0:case 11:case 14:case 15:za(4,h,h.return);break;case 1:Ls(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){At(i,n,S)}}break;case 5:Ls(h,h.return);break;case 22:if(h.memoizedState!==null){Hp(d);continue}}p!==null?(p.return=h,Le=p):Hp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=N0("display",a))}catch(S){At(t,t.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){At(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),li(t),i&4&&zp(t);break;case 21:break;default:qn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(og(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=Bp(t);Rf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bp(t);Af(t,o,a);break;default:throw Error(ve(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wy(t,e,n){Le=t,ug(t)}function ug(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=Vo;var c=rn;if(Vo=a,(rn=l)&&!c)for(Le=r;Le!==null;)a=Le,l=a.child,a.tag===22&&a.memoizedState!==null?Gp(r):l!==null?(l.return=a,Le=l):Gp(r);for(;s!==null;)Le=s,ug(s),s=s.sibling;Le=r,Vo=o,rn=c}Vp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):Vp(t)}}function Vp(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&$a(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}rn||e.flags&512&&wf(e)}catch(h){At(e,e.return,h)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Hp(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function Gp(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{wf(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{wf(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===t){Le=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Le=o;break}Le=e.return}}var Xy=Math.ceil,ql=Vi.ReactCurrentDispatcher,fh=Vi.ReactCurrentOwner,Gn=Vi.ReactCurrentBatchConfig,rt=0,qt=null,Ut=null,Kt=0,wn=0,Is=Mr(0),kt=0,ao=null,Qr=0,pc=0,dh=0,Va=null,gn=null,hh=0,Zs=1/0,wi=null,Yl=!1,Cf=null,fr=null,Ho=!1,nr=null,$l=0,Ha=0,Pf=null,yl=-1,Sl=0;function fn(){return rt&6?Pt():yl!==-1?yl:yl=Pt()}function dr(t){return t.mode&1?rt&2&&Kt!==0?Kt&-Kt:Ry.transition!==null?(Sl===0&&(Sl=q0()),Sl):(t=dt,t!==0||(t=window.event,t=t===void 0?16:ex(t.type)),t):1}function ri(t,e,n,i){if(50<Ha)throw Ha=0,Pf=null,Error(ve(185));po(t,n,i),(!(rt&2)||t!==qt)&&(t===qt&&(!(rt&2)&&(pc|=n),kt===4&&er(t,Kt)),Sn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Zs=Pt()+500,uc&&Er()))}function Sn(t,e){var n=t.callbackNode;R_(t,e);var i=Ll(t,t===qt?Kt:0);if(i===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?Ay(Wp.bind(null,t)):_x(Wp.bind(null,t)),Ey(function(){!(rt&6)&&Er()}),n=null;else{switch(Y0(i)){case 1:n=Bd;break;case 4:n=X0;break;case 16:n=Dl;break;case 536870912:n=j0;break;default:n=Dl}n=vg(n,fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fg(t,e){if(yl=-1,Sl=0,rt&6)throw Error(ve(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=Ll(t,t===qt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=rt;rt|=2;var s=hg();(qt!==t||Kt!==e)&&(wi=null,Zs=Pt()+500,Xr(t,e));do try{Yy();break}catch(o){dg(t,o)}while(1);Qd(),ql.current=s,rt=r,Ut!==null?e=0:(qt=null,Kt=0,e=kt)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Df(t,r))),e===1)throw n=ao,Xr(t,0),er(t,i),Sn(t,Pt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!jy(r)&&(e=Kl(t,i),e===2&&(s=nf(t),s!==0&&(i=s,e=Df(t,s))),e===1))throw n=ao,Xr(t,0),er(t,i),Sn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:Fr(t,gn,wi);break;case 3:if(er(t,i),(i&130023424)===i&&(e=hh+500-Pt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(Fr.bind(null,t,gn,wi),e);break}Fr(t,gn,wi);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ii(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xy(i/1960))-i,10<i){t.timeoutHandle=ff(Fr.bind(null,t,gn,wi),i);break}Fr(t,gn,wi);break;case 5:Fr(t,gn,wi);break;default:throw Error(ve(329))}}}return Sn(t,Pt()),t.callbackNode===n?fg.bind(null,t):null}function Df(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=gn,gn=n,e!==null&&Lf(e)),t}function Lf(t){gn===null?gn=t:gn.push.apply(gn,t)}function jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~dh,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function Wp(t){if(rt&6)throw Error(ve(327));Vs();var e=Ll(t,0);if(!(e&1))return Sn(t,Pt()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=ao,Xr(t,0),er(t,e),Sn(t,Pt()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,gn,wi),Sn(t,Pt()),null}function ph(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Zs=Pt()+500,uc&&Er())}}function Jr(t){nr!==null&&nr.tag===0&&!(rt&6)&&Vs();var e=rt;rt|=1;var n=Gn.transition,i=dt;try{if(Gn.transition=null,dt=1,t)return t()}finally{dt=i,Gn.transition=n,rt=e,!(rt&6)&&Er()}}function mh(){wn=Is.current,vt(Is)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch($d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:$s(),vt(_n),vt(sn),rh();break;case 5:ih(i);break;case 4:$s();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:Jd(i.type._context);break;case 22:case 23:mh()}n=n.return}if(qt=t,Ut=t=hr(t.current,null),Kt=wn=e,kt=0,ao=null,dh=pc=Qr=0,gn=Va=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Vr=null}return t}function dg(t,e){do{var n=Ut;try{if(Qd(),gl.current=jl,Xl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Zr=0,Wt=Ot=Et=null,Ba=!1,io=0,fh.current=null,n===null||n.return===null){kt=1,ao=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Dp(a);if(p!==null){p.flags&=-257,Lp(p,a,o,s,e),p.mode&1&&Pp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Pp(s,c,e),xh();break e}l=Error(ve(426))}}else if(_t&&o.mode&1){var g=Dp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Lp(g,a,o,s,e),Kd(Ks(l,o));break e}}s=l=Ks(l,o),kt!==4&&(kt=2),Va===null?Va=[s]:Va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$x(s,l,e);Ep(s,u);break e;case 1:o=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fr===null||!fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Kx(s,o,e);Ep(s,E);break e}}s=s.return}while(s!==null)}mg(n)}catch(C){e=C,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(1)}function hg(){var t=ql.current;return ql.current=jl,t===null?jl:t}function xh(){(kt===0||kt===3||kt===2)&&(kt=4),qt===null||!(Qr&268435455)&&!(pc&268435455)||er(qt,Kt)}function Kl(t,e){var n=rt;rt|=2;var i=hg();(qt!==t||Kt!==e)&&(wi=null,Xr(t,e));do try{qy();break}catch(r){dg(t,r)}while(1);if(Qd(),rt=n,ql.current=i,Ut!==null)throw Error(ve(261));return qt=null,Kt=0,kt}function qy(){for(;Ut!==null;)pg(Ut)}function Yy(){for(;Ut!==null&&!__();)pg(Ut)}function pg(t){var e=gg(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?mg(t):Ut=e,fh.current=null}function mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vy(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ut=null;return}}else if(n=zy(n,e,wn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);kt===0&&(kt=5)}function Fr(t,e,n){var i=dt,r=Gn.transition;try{Gn.transition=null,dt=1,$y(t,e,n,i)}finally{Gn.transition=r,dt=i}return null}function $y(t,e,n,i){do Vs();while(nr!==null);if(rt&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===qt&&(Ut=qt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,vg(Dl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=dt;dt=1;var o=rt;rt|=4,fh.current=null,Gy(t,n),cg(n,t),my(cf),Il=!!lf,cf=lf=null,t.current=n,Wy(n),y_(),rt=o,dt=a,Gn.transition=s}else t.current=n;if(Ho&&(Ho=!1,nr=t,$l=r),s=t.pendingLanes,s===0&&(fr=null),E_(n.stateNode),Sn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=Cf,Cf=null,t;return $l&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===Pf?Ha++:(Ha=0,Pf=t):Ha=0,Er(),null}function Vs(){if(nr!==null){var t=Y0($l),e=Gn.transition,n=dt;try{if(Gn.transition=null,dt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,$l=0,rt&6)throw Error(ve(331));var r=rt;for(rt|=4,Le=t.current;Le!==null;){var s=Le,a=s.child;if(Le.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Le=c;Le!==null;){var f=Le;switch(f.tag){case 0:case 11:case 15:za(8,f,s)}var d=f.child;if(d!==null)d.return=f,Le=d;else for(;Le!==null;){f=Le;var h=f.sibling,p=f.return;if(ag(f),f===c){Le=null;break}if(h!==null){h.return=p,Le=h;break}Le=p}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Le=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Le=a;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Le=u;break e}Le=s.return}}var m=t.current;for(Le=m;Le!==null;){a=Le;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Le=v;else e:for(a=m;Le!==null;){if(o=Le,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:hc(9,o)}}catch(C){At(o,o.return,C)}if(o===a){Le=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Le=E;break e}Le=o.return}}if(rt=r,Er(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{dt=n,Gn.transition=e}}return!1}function Xp(t,e,n){e=Ks(n,e),e=$x(t,e,1),t=ur(t,e,1),e=fn(),t!==null&&(po(t,1,e),Sn(t,e))}function At(t,e,n){if(t.tag===3)Xp(t,t,n);else for(;e!==null;){if(e.tag===3){Xp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Ks(n,t),t=Kx(e,t,1),e=ur(e,t,1),t=fn(),e!==null&&(po(e,1,t),Sn(e,t));break}}e=e.return}}function Ky(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(Kt&n)===n&&(kt===4||kt===3&&(Kt&130023424)===Kt&&500>Pt()-hh?Xr(t,0):dh|=n),Sn(t,e)}function xg(t,e){e===0&&(t.mode&1?(e=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):e=1);var n=fn();t=Oi(t,e),t!==null&&(po(t,e,n),Sn(t,n))}function Zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xg(t,n)}function Qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),xg(t,n)}var gg;gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,By(t,e,n);vn=!!(t.flags&131072)}else vn=!1,_t&&e.flags&1048576&&yx(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=js(e,sn.current);zs(e,n),r=ah(null,e,i,t,r,n);var s=oh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=Sf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Yd(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eS(i),t=Zn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Up(null,e,i,t,n);break e;case 11:e=Ip(null,e,i,t,n);break e;case 14:e=Np(null,e,i,Zn(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Up(t,e,i,r,n);case 3:e:{if(eg(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tx(t,e),Gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(ve(423)),e),e=Fp(t,e,i,n,r);break e}else if(i!==r){r=Ks(Error(ve(424)),e),e=Fp(t,e,i,n,r);break e}else for(Rn=cr(e.stateNode.containerInfo.firstChild),Cn=e,_t=!0,ei=null,n=Rx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=ki(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return Cx(e),t===null&&mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,uf(i,r)?a=null:s!==null&&uf(i,s)&&(e.flags|=32),Jx(t,e),un(t,e,a,n),e.child;case 6:return t===null&&mf(e),null;case 13:return tg(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ip(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Vl,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!_n.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ve(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),xf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=Xn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Np(t,e,i,r,n);case 15:return Zx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),_l(t,e),e.tag=1,yn(i)?(t=!0,kl(e)):t=!1,zs(e,n),wx(e,i,r),vf(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return ng(t,e,n);case 22:return Qx(t,e,n)}throw Error(ve(156,e.tag))};function vg(t,e){return W0(t,e)}function Jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Jy(t,e,n,i)}function gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===Od)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")gh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Es:return jr(n.children,r,s,e);case Ud:a=8,r|=8;break;case Vu:return t=Hn(12,n,e,r|2),t.elementType=Vu,t.lanes=s,t;case Hu:return t=Hn(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Gu:return t=Hn(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case A0:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b0:a=10;break e;case w0:a=9;break e;case Fd:a=11;break e;case Od:a=14;break e;case Zi:a=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=A0,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vh(t,e,n,i,r,s,a,o,l){return t=new tS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(s),t}function nS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _g(t){if(!t)return vr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(yn(n))return vx(t,n,e)}return e}function yg(t,e,n,i,r,s,a,o,l){return t=vh(n,i,!0,t,r,s,a,o,l),t.context=_g(null),n=t.current,i=fn(),r=dr(n),s=Ii(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,po(t,r,i),Sn(t,i),t}function xc(t,e,n,i){var r=e.current,s=fn(),a=dr(r);return n=_g(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(ri(t,r,a,s),xl(t,r,a)),a}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){jp(t,e),(t=t.alternate)&&jp(t,e)}function iS(){return null}var Sg=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}gc.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));xc(t,e,null,null)};gc.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){xc(null,t,null,null)}),e[Fi]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&J0(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function rS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zl(a);s.call(c)}}var a=yg(e,i,t,0,null,!1,!1,"",qp);return t._reactRootContainer=a,t[Fi]=a.current,Qa(t.nodeType===8?t.parentNode:t),Jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Zl(l);o.call(c)}}var l=vh(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=l,t[Fi]=l.current,Qa(t.nodeType===8?t.parentNode:t),Jr(function(){xc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Zl(a);o.call(l)}}xc(e,a,t,r)}else a=rS(n,e,t,r,i);return Zl(a)}$0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(zd(e,n|1),Sn(e,Pt()),!(rt&6)&&(Zs=Pt()+500,Er()))}break;case 13:Jr(function(){var i=Oi(t,1);if(i!==null){var r=fn();ri(i,t,1,r)}}),_h(t,1)}};Vd=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=fn();ri(e,t,134217728,n)}_h(t,134217728)}};K0=function(t){if(t.tag===13){var e=dr(t),n=Oi(t,e);if(n!==null){var i=fn();ri(n,t,e,i)}_h(t,e)}};Z0=function(){return dt};Q0=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Ju=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(ve(90));C0(i),ju(i,r)}}}break;case"textarea":D0(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};k0=ph;B0=Jr;var sS={usingClientEntryPoint:!1,Events:[xo,As,cc,F0,O0,ph]},ya={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aS={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{sc=Go.inject(aS),pi=Go}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(ve(200));return nS(t,e,null,n)};Un.createRoot=function(t,e){if(!Sh(t))throw Error(ve(299));var n=!1,i="",r=Sg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vh(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Qa(t.nodeType===8?t.parentNode:t),new yh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Jr(t)};Un.hydrate=function(t,e,n){if(!vc(e))throw Error(ve(200));return _c(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Sg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=yg(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,Qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};Un.render=function(t,e,n){if(!vc(e))throw Error(ve(200));return _c(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ve(40));return t._reactRootContainer?(Jr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Un.unstable_batchedUpdates=ph;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return _c(t,e,n,!1,i)};Un.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Un})(i_);var Yp=ku;Ou.createRoot=Yp.createRoot,Ou.hydrateRoot=Yp.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ct(){return ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ct.apply(this,arguments)}var Nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nt||(Nt={}));const $p="popstate";function oS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=gi(r.location.hash.substr(1));return oo("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:vo(s))}function i(r,s){es(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return cS(e,n,i,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function es(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lS(){return Math.random().toString(36).substr(2,8)}function Kp(t,e){return{usr:t.state,key:t.key,idx:e}}function oo(t,e,n,i){return n===void 0&&(n=null),ct({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gi(e):e,{state:n,key:e&&e.key||i||lS()})}function vo(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function cS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Nt.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(ct({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function d(){o=Nt.Pop;let g=f(),u=g==null?null:g-c;c=g,l&&l({action:o,location:S.location,delta:u})}function h(g,u){o=Nt.Push;let m=oo(S.location,g,u);n&&n(m,g),c=f()+1;let v=Kp(m,c),E=S.createHref(m);try{a.pushState(v,"",E)}catch{r.location.assign(E)}s&&l&&l({action:o,location:S.location,delta:1})}function p(g,u){o=Nt.Replace;let m=oo(S.location,g,u);n&&n(m,g),c=f();let v=Kp(m,c),E=S.createHref(m);a.replaceState(v,"",E),s&&l&&l({action:o,location:S.location,delta:0})}function _(g){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof g=="string"?g:vo(g);return tt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let S={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener($p,d),l=g,()=>{r.removeEventListener($p,d),l=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let u=_(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:p,go(g){return a.go(g)}};return S}var Ft;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ft||(Ft={}));const uS=new Set(["lazy","caseSensitive","path","id","index","children"]);function fS(t){return t.index===!0}function Mg(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,s)=>{let a=[...n,s],o=typeof r.id=="string"?r.id:a.join("-");if(tt(r.index!==!0||!r.children,"Cannot specify children on an index route"),tt(!i[o],'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),fS(r)){let l=ct({},r,e(r),{id:o});return i[o]=l,l}else{let l=ct({},r,e(r),{id:o,children:void 0});return i[o]=l,r.children&&(l.children=Mg(r.children,e,a,i)),l}})}function Ns(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?gi(e):e,r=_o(i.pathname||"/",n);if(r==null)return null;let s=Eg(t);dS(s);let a=null;for(let o=0;a==null&&o<s.length;++o)a=SS(s[o],TS(r));return a}function Eg(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(tt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=pr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(tt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Eg(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:_S(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Tg(s.path))r(s,a,l)}),e}function Tg(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Tg(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function dS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const hS=/^:\w+$/,pS=3,mS=2,xS=1,gS=10,vS=-2,Zp=t=>t==="*";function _S(t,e){let n=t.split("/"),i=n.length;return n.some(Zp)&&(i+=vS),e&&(i+=mS),n.filter(r=>!Zp(r)).reduce((r,s)=>r+(hS.test(s)?pS:s===""?xS:gS),i)}function yS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function SS(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let a=0;a<n.length;++a){let o=n[a],l=a===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",f=MS({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c);if(!f)return null;Object.assign(i,f.params);let d=o.route;s.push({params:i,pathname:pr([r,f.pathname]),pathnameBase:RS(pr([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=pr([r,f.pathnameBase]))}return s}function MS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ES(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,d)=>{if(f==="*"){let h=o[d]||"";a=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[f]=bS(o[d]||"",f),c},{}),pathname:s,pathnameBase:a,pattern:t}}function ES(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),es(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(i.push(o),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function TS(t){try{return decodeURI(t)}catch(e){return es(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bS(t,e){try{return decodeURIComponent(t)}catch(n){return es(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function _o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function wS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?gi(t):t;return{pathname:n?n.startsWith("/")?n:AS(n,e):e,search:CS(i),hash:PS(r)}}function AS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function eu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bg(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=gi(t):(r=ct({},t),tt(!r.pathname||!r.pathname.includes("?"),eu("?","pathname","search",r)),tt(!r.pathname||!r.pathname.includes("#"),eu("#","pathname","hash",r)),tt(!r.search||!r.search.includes("#"),eu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(i||a==null)o=n;else{let d=e.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}o=d>=0?e[d]:"/"}let l=wS(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),RS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Eh{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function wg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ag=["post","put","patch","delete"],DS=new Set(Ag),LS=["get",...Ag],IS=new Set(LS),NS=new Set([301,302,303,307,308]),US=new Set([307,308]),tu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},FS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Qp={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OS=!Cg,kS=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function BS(t){tt(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e;if(t.mapRouteProperties)e=t.mapRouteProperties;else if(t.detectErrorBoundary){let N=t.detectErrorBoundary;e=B=>({hasErrorBoundary:N(B)})}else e=kS;let n={},i=Mg(t.routes,e,void 0,n),r,s=t.basename||"/",a=ct({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),o=null,l=new Set,c=null,f=null,d=null,h=t.hydrationData!=null,p=Ns(i,t.history.location,s),_=null;if(p==null){let N=Qn(404,{pathname:t.history.location.pathname}),{matches:B,route:G}=sm(i);p=B,_={[G.id]:N}}let S=!p.some(N=>N.route.lazy)&&(!p.some(N=>N.route.loader)||t.hydrationData!=null),g,u={historyAction:t.history.action,location:t.history.location,matches:p,initialized:S,navigation:tu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},m=Nt.Pop,v=!1,E,C=!1,b=!1,R=[],T=[],x=new Map,y=0,P=-1,F=new Map,k=new Set,X=new Map,ee=new Map,q=new Map,$=!1;function D(){return o=t.history.listen(N=>{let{action:B,location:G,delta:W}=N;if($){$=!1;return}es(q.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let j=M({currentLocation:u.location,nextLocation:G,historyAction:B});if(j&&W!=null){$=!0,t.history.go(W*-1),A(j,{state:"blocked",location:G,proceed(){A(j,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),t.history.go(W)},reset(){Se(j),oe({blockers:new Map(g.state.blockers)})}});return}return Ie(B,G)}),u.initialized||Ie(Nt.Pop,u.location),g}function U(){o&&o(),l.clear(),E&&E.abort(),u.fetchers.forEach((N,B)=>Ce(B)),u.blockers.forEach((N,B)=>Se(B))}function Y(N){return l.add(N),()=>l.delete(N)}function oe(N){u=ct({},u,N),l.forEach(B=>B(u))}function ie(N,B){var G,W;let j=u.actionData!=null&&u.navigation.formMethod!=null&&Ai(u.navigation.formMethod)&&u.navigation.state==="loading"&&((G=N.state)==null?void 0:G._isRedirect)!==!0,pe;B.actionData?Object.keys(B.actionData).length>0?pe=B.actionData:pe=null:j?pe=u.actionData:pe=null;let xe=B.loaderData?rm(u.loaderData,B.loaderData,B.matches||[],B.errors):u.loaderData;for(let[fe]of q)Se(fe);let ae=v===!0||u.navigation.formMethod!=null&&Ai(u.navigation.formMethod)&&((W=N.state)==null?void 0:W._isRedirect)!==!0;r&&(i=r,r=void 0),oe(ct({},B,{actionData:pe,loaderData:xe,historyAction:m,location:N,initialized:!0,navigation:tu,revalidation:"idle",restoreScrollPosition:Q(N,B.matches||u.matches),preventScrollReset:ae,blockers:new Map(u.blockers)})),C||m===Nt.Pop||(m===Nt.Push?t.history.push(N,N.state):m===Nt.Replace&&t.history.replace(N,N.state)),m=Nt.Pop,v=!1,C=!1,b=!1,R=[],T=[]}async function Ue(N,B){if(typeof N=="number"){t.history.go(N);return}let G=If(u.location,u.matches,s,a.v7_prependBasename,N,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:W,submission:j,error:pe}=Jp(a.v7_normalizeFormMethod,!1,G,B),xe=u.location,ae=oo(u.location,W,B&&B.state);ae=ct({},ae,t.history.encodeLocation(ae));let fe=B&&B.replace!=null?B.replace:void 0,I=Nt.Push;fe===!0?I=Nt.Replace:fe===!1||j!=null&&Ai(j.formMethod)&&j.formAction===u.location.pathname+u.location.search&&(I=Nt.Replace);let ue=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,ge=M({currentLocation:xe,nextLocation:ae,historyAction:I});if(ge){A(ge,{state:"blocked",location:ae,proceed(){A(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),Ue(N,B)},reset(){Se(ge),oe({blockers:new Map(u.blockers)})}});return}return await Ie(I,ae,{submission:j,pendingError:pe,preventScrollReset:ue,replace:B&&B.replace})}function Be(){if(We(),oe({revalidation:"loading"}),u.navigation.state!=="submitting"){if(u.navigation.state==="idle"){Ie(u.historyAction,u.location,{startUninterruptedRevalidation:!0});return}Ie(m||u.historyAction,u.navigation.location,{overrideNavigation:u.navigation})}}async function Ie(N,B,G){E&&E.abort(),E=null,m=N,C=(G&&G.startUninterruptedRevalidation)===!0,le(u.location,u.matches),v=(G&&G.preventScrollReset)===!0;let W=r||i,j=G&&G.overrideNavigation,pe=Ns(W,B,s);if(!pe){let he=Qn(404,{pathname:B.pathname}),{matches:ce,route:se}=sm(W);O(),ie(B,{matches:ce,loaderData:{},errors:{[se.id]:he}});return}if(WS(u.location,B)&&!(G&&G.submission&&Ai(G.submission.formMethod))){ie(B,{matches:pe});return}E=new AbortController;let xe=Ma(t.history,B,E.signal,G&&G.submission),ae,fe;if(G&&G.pendingError)fe={[Us(pe).route.id]:G.pendingError};else if(G&&G.submission&&Ai(G.submission.formMethod)){let he=await K(xe,B,G.submission,pe,{replace:G.replace});if(he.shortCircuited)return;ae=he.pendingActionData,fe=he.pendingActionError,j=ct({state:"loading",location:B},G.submission),xe=new Request(xe.url,{signal:xe.signal})}let{shortCircuited:I,loaderData:ue,errors:ge}=await te(xe,B,pe,j,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,ae,fe);I||(E=null,ie(B,ct({matches:pe},ae?{actionData:ae}:{},{loaderData:ue,errors:ge})))}async function K(N,B,G,W,j){We();let pe=ct({state:"submitting",location:B},G);oe({navigation:pe});let xe,ae=Nf(W,B);if(!ae.route.action&&!ae.route.lazy)xe={type:Ft.error,error:Qn(405,{method:N.method,pathname:B.pathname,routeId:ae.route.id})};else if(xe=await Sa("action",N,ae,W,n,e,s),N.signal.aborted)return{shortCircuited:!0};if(Hs(xe)){let fe;return j&&j.replace!=null?fe=j.replace:fe=xe.location===u.location.pathname+u.location.search,await Ve(u,xe,{submission:G,replace:fe}),{shortCircuited:!0}}if(Ga(xe)){let fe=Us(W,ae.route.id);return(j&&j.replace)!==!0&&(m=Nt.Push),{pendingActionData:{},pendingActionError:{[fe.route.id]:xe.error}}}if(Gr(xe))throw Qn(400,{type:"defer-action"});return{pendingActionData:{[ae.route.id]:xe.data}}}async function te(N,B,G,W,j,pe,xe,ae,fe){let I=W;I||(I=ct({state:"loading",location:B,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},j));let ue=j||pe?j||pe:I.formMethod&&I.formAction&&I.formData&&I.formEncType?{formMethod:I.formMethod,formAction:I.formAction,formData:I.formData,formEncType:I.formEncType}:void 0,ge=r||i,[he,ce]=em(t.history,u,G,ue,B,b,R,T,X,ge,s,ae,fe);if(O(lt=>!(G&&G.some(Qt=>Qt.route.id===lt))||he&&he.some(Qt=>Qt.route.id===lt)),he.length===0&&ce.length===0){let lt=de();return ie(B,ct({matches:G,loaderData:{},errors:fe||null},ae?{actionData:ae}:{},lt?{fetchers:new Map(u.fetchers)}:{})),{shortCircuited:!0}}if(!C){ce.forEach(Qt=>{let vi=u.fetchers.get(Qt.key),rs={state:"loading",data:vi&&vi.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(Qt.key,rs)});let lt=ae||u.actionData;oe(ct({navigation:I},lt?Object.keys(lt).length===0?{actionData:null}:{actionData:lt}:{},ce.length>0?{fetchers:new Map(u.fetchers)}:{}))}P=++y,ce.forEach(lt=>{lt.controller&&x.set(lt.key,lt.controller)});let se=()=>ce.forEach(lt=>Oe(lt.key));E&&E.signal.addEventListener("abort",se);let{results:Pe,loaderResults:Xe,fetcherResults:ut}=await Ae(u.matches,G,he,ce,N);if(N.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",se),ce.forEach(lt=>x.delete(lt.key));let Qe=am(Pe);if(Qe)return await Ve(u,Qe,{replace:xe}),{shortCircuited:!0};let{loaderData:an,errors:on}=im(u,G,he,Xe,fe,ce,ut,ee);ee.forEach((lt,Qt)=>{lt.subscribe(vi=>{(vi||lt.done)&&ee.delete(Qt)})});let fa=de(),is=ke(P),wr=fa||is||ce.length>0;return ct({loaderData:an,errors:on},wr?{fetchers:new Map(u.fetchers)}:{})}function _e(N){return u.fetchers.get(N)||FS}function me(N,B,G,W){if(OS)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(N)&&Oe(N);let j=r||i,pe=If(u.location,u.matches,s,a.v7_prependBasename,G,B,W==null?void 0:W.relative),xe=Ns(j,pe,s);if(!xe){L(N,B,Qn(404,{pathname:pe}));return}let{path:ae,submission:fe}=Jp(a.v7_normalizeFormMethod,!0,pe,W),I=Nf(xe,ae);if(v=(W&&W.preventScrollReset)===!0,fe&&Ai(fe.formMethod)){ye(N,B,ae,I,xe,fe);return}X.set(N,{routeId:B,path:ae}),Te(N,B,ae,I,xe,fe)}async function ye(N,B,G,W,j,pe){if(We(),X.delete(N),!W.route.action&&!W.route.lazy){let Ht=Qn(405,{method:pe.formMethod,pathname:G,routeId:B});L(N,B,Ht);return}let xe=u.fetchers.get(N),ae=ct({state:"submitting"},pe,{data:xe&&xe.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(N,ae),oe({fetchers:new Map(u.fetchers)});let fe=new AbortController,I=Ma(t.history,G,fe.signal,pe);x.set(N,fe);let ue=await Sa("action",I,W,j,n,e,s);if(I.signal.aborted){x.get(N)===fe&&x.delete(N);return}if(Hs(ue)){x.delete(N),k.add(N);let Ht=ct({state:"loading"},pe,{data:void 0," _hasFetcherDoneAnything ":!0});return u.fetchers.set(N,Ht),oe({fetchers:new Map(u.fetchers)}),Ve(u,ue,{submission:pe,isFetchActionRedirect:!0})}if(Ga(ue)){L(N,B,ue.error);return}if(Gr(ue))throw Qn(400,{type:"defer-action"});let ge=u.navigation.location||u.location,he=Ma(t.history,ge,fe.signal),ce=r||i,se=u.navigation.state!=="idle"?Ns(ce,u.navigation.location,s):u.matches;tt(se,"Didn't find any matches after fetcher action");let Pe=++y;F.set(N,Pe);let Xe=ct({state:"loading",data:ue.data},pe,{" _hasFetcherDoneAnything ":!0});u.fetchers.set(N,Xe);let[ut,Qe]=em(t.history,u,se,pe,ge,b,R,T,X,ce,s,{[W.route.id]:ue.data},void 0);Qe.filter(Ht=>Ht.key!==N).forEach(Ht=>{let ss=Ht.key,Ar=u.fetchers.get(ss),wo={state:"loading",data:Ar&&Ar.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(ss,wo),Ht.controller&&x.set(ss,Ht.controller)}),oe({fetchers:new Map(u.fetchers)});let an=()=>Qe.forEach(Ht=>Oe(Ht.key));fe.signal.addEventListener("abort",an);let{results:on,loaderResults:fa,fetcherResults:is}=await Ae(u.matches,se,ut,Qe,he);if(fe.signal.aborted)return;fe.signal.removeEventListener("abort",an),F.delete(N),x.delete(N),Qe.forEach(Ht=>x.delete(Ht.key));let wr=am(on);if(wr)return Ve(u,wr);let{loaderData:lt,errors:Qt}=im(u,u.matches,ut,fa,void 0,Qe,is,ee),vi={state:"idle",data:ue.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(N,vi);let rs=ke(Pe);u.navigation.state==="loading"&&Pe>P?(tt(m,"Expected pending action"),E&&E.abort(),ie(u.navigation.location,{matches:se,loaderData:lt,errors:Qt,fetchers:new Map(u.fetchers)})):(oe(ct({errors:Qt,loaderData:rm(u.loaderData,lt,se,Qt)},rs?{fetchers:new Map(u.fetchers)}:{})),b=!1)}async function Te(N,B,G,W,j,pe){let xe=u.fetchers.get(N),ae=ct({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pe,{data:xe&&xe.data," _hasFetcherDoneAnything ":!0});u.fetchers.set(N,ae),oe({fetchers:new Map(u.fetchers)});let fe=new AbortController,I=Ma(t.history,G,fe.signal);x.set(N,fe);let ue=await Sa("loader",I,W,j,n,e,s);if(Gr(ue)&&(ue=await Ig(ue,I.signal,!0)||ue),x.get(N)===fe&&x.delete(N),I.signal.aborted)return;if(Hs(ue)){k.add(N),await Ve(u,ue);return}if(Ga(ue)){let he=Us(u.matches,B);u.fetchers.delete(N),oe({fetchers:new Map(u.fetchers),errors:{[he.route.id]:ue.error}});return}tt(!Gr(ue),"Unhandled fetcher deferred data");let ge={state:"idle",data:ue.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(N,ge),oe({fetchers:new Map(u.fetchers)})}async function Ve(N,B,G){var W;let{submission:j,replace:pe,isFetchActionRedirect:xe}=G===void 0?{}:G;B.revalidate&&(b=!0);let ae=oo(N.location,B.location,ct({_isRedirect:!0},xe?{_isFetchActionRedirect:!0}:{}));if(tt(ae,"Expected a location on the redirect navigation"),Rg.test(B.location)&&Cg&&typeof((W=window)==null?void 0:W.location)<"u"){let ce=t.history.createURL(B.location),se=_o(ce.pathname,s)==null;if(window.location.origin!==ce.origin||se){pe?window.location.replace(B.location):window.location.assign(B.location);return}}E=null;let fe=pe===!0?Nt.Replace:Nt.Push,{formMethod:I,formAction:ue,formEncType:ge,formData:he}=N.navigation;!j&&I&&ue&&he&&ge&&(j={formMethod:I,formAction:ue,formEncType:ge,formData:he}),US.has(B.status)&&j&&Ai(j.formMethod)?await Ie(fe,ae,{submission:ct({},j,{formAction:B.location}),preventScrollReset:v}):xe?await Ie(fe,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:j,preventScrollReset:v}):await Ie(fe,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:j?j.formMethod:void 0,formAction:j?j.formAction:void 0,formEncType:j?j.formEncType:void 0,formData:j?j.formData:void 0},preventScrollReset:v})}async function Ae(N,B,G,W,j){let pe=await Promise.all([...G.map(fe=>Sa("loader",j,fe,B,n,e,s)),...W.map(fe=>fe.matches&&fe.match&&fe.controller?Sa("loader",Ma(t.history,fe.path,fe.controller.signal),fe.match,fe.matches,n,e,s):{type:Ft.error,error:Qn(404,{pathname:fe.path})})]),xe=pe.slice(0,G.length),ae=pe.slice(G.length);return await Promise.all([om(N,G,xe,xe.map(()=>j.signal),!1,u.loaderData),om(N,W.map(fe=>fe.match),ae,W.map(fe=>fe.controller?fe.controller.signal:null),!0)]),{results:pe,loaderResults:xe,fetcherResults:ae}}function We(){b=!0,R.push(...O()),X.forEach((N,B)=>{x.has(B)&&(T.push(B),Oe(B))})}function L(N,B,G){let W=Us(u.matches,B);Ce(N),oe({errors:{[W.route.id]:G},fetchers:new Map(u.fetchers)})}function Ce(N){x.has(N)&&Oe(N),X.delete(N),F.delete(N),k.delete(N),u.fetchers.delete(N)}function Oe(N){let B=x.get(N);tt(B,"Expected fetch controller: "+N),B.abort(),x.delete(N)}function qe(N){for(let B of N){let W={state:"idle",data:_e(B).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};u.fetchers.set(B,W)}}function de(){let N=[],B=!1;for(let G of k){let W=u.fetchers.get(G);tt(W,"Expected fetcher: "+G),W.state==="loading"&&(k.delete(G),N.push(G),B=!0)}return qe(N),B}function ke(N){let B=[];for(let[G,W]of F)if(W<N){let j=u.fetchers.get(G);tt(j,"Expected fetcher: "+G),j.state==="loading"&&(Oe(G),F.delete(G),B.push(G))}return qe(B),B.length>0}function Ee(N,B){let G=u.blockers.get(N)||Qp;return q.get(N)!==B&&q.set(N,B),G}function Se(N){u.blockers.delete(N),q.delete(N)}function A(N,B){let G=u.blockers.get(N)||Qp;tt(G.state==="unblocked"&&B.state==="blocked"||G.state==="blocked"&&B.state==="blocked"||G.state==="blocked"&&B.state==="proceeding"||G.state==="blocked"&&B.state==="unblocked"||G.state==="proceeding"&&B.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+B.state),u.blockers.set(N,B),oe({blockers:new Map(u.blockers)})}function M(N){let{currentLocation:B,nextLocation:G,historyAction:W}=N;if(q.size===0)return;q.size>1&&es(!1,"A router only supports one blocker at a time");let j=Array.from(q.entries()),[pe,xe]=j[j.length-1],ae=u.blockers.get(pe);if(!(ae&&ae.state==="proceeding")&&xe({currentLocation:B,nextLocation:G,historyAction:W}))return pe}function O(N){let B=[];return ee.forEach((G,W)=>{(!N||N(W))&&(G.cancel(),B.push(W),ee.delete(W))}),B}function re(N,B,G){if(c=N,d=B,f=G||(W=>W.key),!h&&u.navigation===tu){h=!0;let W=Q(u.location,u.matches);W!=null&&oe({restoreScrollPosition:W})}return()=>{c=null,d=null,f=null}}function le(N,B){if(c&&f&&d){let G=B.map(j=>lm(j,u.loaderData)),W=f(N,G)||N.key;c[W]=d()}}function Q(N,B){if(c&&f&&d){let G=B.map(pe=>lm(pe,u.loaderData)),W=f(N,G)||N.key,j=c[W];if(typeof j=="number")return j}return null}function De(N){r=N}return g={get basename(){return s},get state(){return u},get routes(){return i},initialize:D,subscribe:Y,enableScrollRestoration:re,navigate:Ue,fetch:me,revalidate:Be,createHref:N=>t.history.createHref(N),encodeLocation:N=>t.history.encodeLocation(N),getFetcher:_e,deleteFetcher:Ce,dispose:U,getBlocker:Ee,deleteBlocker:Se,_internalFetchControllers:x,_internalActiveDeferreds:ee,_internalSetRoutes:De},g}function zS(t){return t!=null&&"formData"in t}function If(t,e,n,i,r,s,a){let o,l;if(s!=null&&a!=="path"){o=[];for(let f of e)if(o.push(f),f.route.id===s){l=f;break}}else o=e,l=e[e.length-1];let c=bg(r||".",Mh(o).map(f=>f.pathnameBase),_o(t.pathname,n)||t.pathname,a==="path");return r==null&&(c.search=t.search,c.hash=t.hash),(r==null||r===""||r===".")&&l&&l.route.index&&!Th(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(c.pathname=c.pathname==="/"?n:pr([n,c.pathname])),vo(c)}function Jp(t,e,n,i){if(!i||!zS(i))return{path:n};if(i.formMethod&&!qS(i.formMethod))return{path:n,error:Qn(405,{method:i.formMethod})};let r;if(i.formData){let o=i.formMethod||"get";if(r={formMethod:t?o.toUpperCase():o.toLowerCase(),formAction:Lg(n),formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:i.formData},Ai(r.formMethod))return{path:n,submission:r}}let s=gi(n),a=Dg(i.formData);return e&&s.search&&Th(s.search)&&a.append("index",""),s.search="?"+a,{path:vo(s),submission:r}}function VS(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function em(t,e,n,i,r,s,a,o,l,c,f,d,h){let p=h?Object.values(h)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),S=t.createURL(r),g=h?Object.keys(h)[0]:void 0,m=VS(n,g).filter((E,C)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(HS(e.loaderData,e.matches[C],E)||a.some(T=>T===E.route.id))return!0;let b=e.matches[C],R=E;return tm(E,ct({currentUrl:_,currentParams:b.params,nextUrl:S,nextParams:R.params},i,{actionResult:p,defaultShouldRevalidate:s||_.pathname+_.search===S.pathname+S.search||_.search!==S.search||Pg(b,R)}))}),v=[];return l.forEach((E,C)=>{if(!n.some(x=>x.route.id===E.routeId))return;let b=Ns(c,E.path,f);if(!b){v.push({key:C,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let R=Nf(b,E.path);if(o.includes(C)){v.push({key:C,routeId:E.routeId,path:E.path,matches:b,match:R,controller:new AbortController});return}tm(R,ct({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},i,{actionResult:p,defaultShouldRevalidate:s}))&&v.push({key:C,routeId:E.routeId,path:E.path,matches:b,match:R,controller:new AbortController})}),[m,v]}function HS(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function Pg(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function tm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function nm(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];tt(r,"No route found in manifest");let s={};for(let a in i){let l=r[a]!==void 0&&a!=="hasErrorBoundary";es(!l,'Route "'+r.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!uS.has(a)&&(s[a]=i[a])}Object.assign(r,s),Object.assign(r,ct({},e(r),{lazy:void 0}))}async function Sa(t,e,n,i,r,s,a,o,l,c){o===void 0&&(o=!1),l===void 0&&(l=!1);let f,d,h,p=g=>{let u,m=new Promise((v,E)=>u=E);return h=()=>u(),e.signal.addEventListener("abort",h),Promise.race([g({request:e,params:n.params,context:c}),m])};try{let g=n.route[t];if(n.route.lazy)if(g)d=(await Promise.all([p(g),nm(n.route,s,r)]))[0];else if(await nm(n.route,s,r),g=n.route[t],g)d=await p(g);else if(t==="action"){let u=new URL(e.url),m=u.pathname+u.search;throw Qn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Ft.data,data:void 0};else if(g)d=await p(g);else{let u=new URL(e.url),m=u.pathname+u.search;throw Qn(404,{pathname:m})}tt(d!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){f=Ft.error,d=g}finally{h&&e.signal.removeEventListener("abort",h)}if(jS(d)){let g=d.status;if(NS.has(g)){let v=d.headers.get("Location");if(tt(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!Rg.test(v))v=If(new URL(e.url),i.slice(0,i.indexOf(n)+1),a,!0,v);else if(!o){let E=new URL(e.url),C=v.startsWith("//")?new URL(E.protocol+v):new URL(v),b=_o(C.pathname,a)!=null;C.origin===E.origin&&b&&(v=C.pathname+C.search+C.hash)}if(o)throw d.headers.set("Location",v),d;return{type:Ft.redirect,status:g,location:v,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:f||Ft.data,response:d};let u,m=d.headers.get("Content-Type");return m&&/\bapplication\/json\b/.test(m)?u=await d.json():u=await d.text(),f===Ft.error?{type:f,error:new Eh(g,d.statusText,u),headers:d.headers}:{type:Ft.data,data:u,statusCode:d.status,headers:d.headers}}if(f===Ft.error)return{type:f,error:d};if(XS(d)){var _,S;return{type:Ft.deferred,deferredData:d,statusCode:(_=d.init)==null?void 0:_.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:Ft.data,data:d}}function Ma(t,e,n,i){let r=t.createURL(Lg(e)).toString(),s={signal:n};if(i&&Ai(i.formMethod)){let{formMethod:a,formEncType:o,formData:l}=i;s.method=a.toUpperCase(),s.body=o==="application/x-www-form-urlencoded"?Dg(l):l}return new Request(r,s)}function Dg(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,i instanceof File?i.name:i);return e}function GS(t,e,n,i,r){let s={},a=null,o,l=!1,c={};return n.forEach((f,d)=>{let h=e[d].route.id;if(tt(!Hs(f),"Cannot handle redirect results in processLoaderData"),Ga(f)){let p=Us(t,h),_=f.error;i&&(_=Object.values(i)[0],i=void 0),a=a||{},a[p.route.id]==null&&(a[p.route.id]=_),s[h]=void 0,l||(l=!0,o=wg(f.error)?f.error.status:500),f.headers&&(c[h]=f.headers)}else Gr(f)?(r.set(h,f.deferredData),s[h]=f.deferredData.data):s[h]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(o=f.statusCode),f.headers&&(c[h]=f.headers)}),i&&(a=i,s[Object.keys(i)[0]]=void 0),{loaderData:s,errors:a,statusCode:o||200,loaderHeaders:c}}function im(t,e,n,i,r,s,a,o){let{loaderData:l,errors:c}=GS(e,n,i,r,o);for(let f=0;f<s.length;f++){let{key:d,match:h,controller:p}=s[f];tt(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let _=a[f];if(!(p&&p.signal.aborted))if(Ga(_)){let S=Us(t.matches,h==null?void 0:h.route.id);c&&c[S.route.id]||(c=ct({},c,{[S.route.id]:_.error})),t.fetchers.delete(d)}else if(Hs(_))tt(!1,"Unhandled fetcher revalidation redirect");else if(Gr(_))tt(!1,"Unhandled fetcher deferred data");else{let S={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,S)}}return{loaderData:l,errors:c}}function rm(t,e,n,i){let r=ct({},e);for(let s of n){let a=s.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(r[a]=e[a]):t[a]!==void 0&&s.route.loader&&(r[a]=t[a]),i&&i.hasOwnProperty(a))break}return r}function Us(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function sm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Qn(t,e){let{pathname:n,routeId:i,method:r,type:s}=e===void 0?{}:e,a="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(a="Bad Request",r&&n&&i?o="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(o="defer() is not supported in actions")):t===403?(a="Forbidden",o='Route "'+i+'" does not match URL "'+n+'"'):t===404?(a="Not Found",o='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",r&&n&&i?o="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(o='Invalid request method "'+r.toUpperCase()+'"')),new Eh(t||500,a,new Error(o),!0)}function am(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Hs(n))return n}}function Lg(t){let e=typeof t=="string"?gi(t):t;return vo(ct({},e,{hash:""}))}function WS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Gr(t){return t.type===Ft.deferred}function Ga(t){return t.type===Ft.error}function Hs(t){return(t&&t.type)===Ft.redirect}function XS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function jS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function qS(t){return IS.has(t.toLowerCase())}function Ai(t){return DS.has(t.toLowerCase())}async function om(t,e,n,i,r,s){for(let a=0;a<n.length;a++){let o=n[a],l=e[a];if(!l)continue;let c=t.find(d=>d.route.id===l.route.id),f=c!=null&&!Pg(c,l)&&(s&&s[l.route.id])!==void 0;if(Gr(o)&&(r||f)){let d=i[a];tt(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ig(o,d,r).then(h=>{h&&(n[a]=h||n[a])})}}}async function Ig(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ft.data,data:t.deferredData.unwrappedData}}catch(r){return{type:Ft.error,error:r}}return{type:Ft.data,data:t.deferredData.data}}}function Th(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function lm(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function Nf(t,e){let n=typeof e=="string"?gi(e).search:e.search;if(t[t.length-1].route.index&&Th(n||""))return t[t.length-1];let i=Mh(t);return i[i.length-1]}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ql.apply(this,arguments)}const bh=be.createContext(null),Ng=be.createContext(null),yc=be.createContext(null),Sc=be.createContext(null),oa=be.createContext({outlet:null,matches:[],isDataRoute:!1}),Ug=be.createContext(null);function Mc(){return be.useContext(Sc)!=null}function Fg(){return Mc()||tt(!1),be.useContext(Sc).location}function Og(t){be.useContext(yc).static||be.useLayoutEffect(t)}function YS(){let{isDataRoute:t}=be.useContext(oa);return t?a1():$S()}function $S(){Mc()||tt(!1);let{basename:t,navigator:e}=be.useContext(yc),{matches:n}=be.useContext(oa),{pathname:i}=Fg(),r=JSON.stringify(Mh(n).map(o=>o.pathnameBase)),s=be.useRef(!1);return Og(()=>{s.current=!0}),be.useCallback(function(o,l){if(l===void 0&&(l={}),!s.current)return;if(typeof o=="number"){e.go(o);return}let c=bg(o,JSON.parse(r),i,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:pr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,r,i])}function KS(t,e,n){Mc()||tt(!1);let{navigator:i}=be.useContext(yc),{matches:r}=be.useContext(oa),s=r[r.length-1],a=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let l=Fg(),c;if(e){var f;let S=typeof e=="string"?gi(e):e;o==="/"||(f=S.pathname)!=null&&f.startsWith(o)||tt(!1),c=S}else c=l;let d=c.pathname||"/",h=o==="/"?d:d.slice(o.length)||"/",p=Ns(t,{pathname:h}),_=t1(p&&p.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:pr([o,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?o:pr([o,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,n);return e&&_?be.createElement(Sc.Provider,{value:{location:Ql({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Nt.Pop}},_):_}function ZS(){let t=s1(),e=wg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return be.createElement(be.Fragment,null,be.createElement("h2",null,"Unexpected Application Error!"),be.createElement("h3",{style:{fontStyle:"italic"}},e),n?be.createElement("pre",{style:r},n):null,s)}const QS=be.createElement(ZS,null);class JS extends be.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?be.createElement(oa.Provider,{value:this.props.routeContext},be.createElement(Ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e1(t){let{routeContext:e,match:n,children:i}=t,r=be.useContext(bh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),be.createElement(oa.Provider,{value:e},i)}function t1(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let o=s.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));o>=0||tt(!1),s=s.slice(0,Math.min(s.length,o+1))}return s.reduceRight((o,l,c)=>{let f=l.route.id?a==null?void 0:a[l.route.id]:null,d=null;n&&(d=l.route.errorElement||QS);let h=e.concat(s.slice(0,c+1)),p=()=>{let _;return f?_=d:l.route.Component?_=be.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=o,be.createElement(e1,{match:l,routeContext:{outlet:o,matches:h,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?be.createElement(JS,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Uf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Uf||(Uf={}));var lo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(lo||(lo={}));function n1(t){let e=be.useContext(bh);return e||tt(!1),e}function i1(t){let e=be.useContext(Ng);return e||tt(!1),e}function r1(t){let e=be.useContext(oa);return e||tt(!1),e}function kg(t){let e=r1(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function s1(){var t;let e=be.useContext(Ug),n=i1(lo.UseRouteError),i=kg(lo.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function a1(){let{router:t}=n1(Uf.UseNavigateStable),e=kg(lo.UseNavigateStable),n=be.useRef(!1);return Og(()=>{n.current=!0}),be.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ql({fromRouteId:e},s)))},[t,e])}function o1(t){let{fallbackElement:e,router:n}=t,[i,r]=be.useState(n.state);be.useLayoutEffect(()=>n.subscribe(r),[n,r]);let s=be.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,c,f)=>n.navigate(l,{state:c,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(l,c,f)=>n.navigate(l,{replace:!0,state:c,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),a=n.basename||"/",o=be.useMemo(()=>({router:n,navigator:s,static:!1,basename:a}),[n,s,a]);return be.createElement(be.Fragment,null,be.createElement(bh.Provider,{value:o},be.createElement(Ng.Provider,{value:i},be.createElement(c1,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?be.createElement(l1,{routes:n.routes,state:i}):e))),null)}function l1(t){let{routes:e,state:n}=t;return KS(e,void 0,n)}function c1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Nt.Pop,navigator:s,static:a=!1}=t;Mc()&&tt(!1);let o=e.replace(/^\/*/,"/"),l=be.useMemo(()=>({basename:o,navigator:s,static:a}),[o,s,a]);typeof i=="string"&&(i=gi(i));let{pathname:c="/",search:f="",hash:d="",state:h=null,key:p="default"}=i,_=be.useMemo(()=>{let S=_o(c,o);return S==null?null:{location:{pathname:S,search:f,hash:d,state:h,key:p},navigationType:r}},[o,c,f,d,h,p,r]);return _==null?null:be.createElement(yc.Provider,{value:l},be.createElement(Sc.Provider,{children:n,value:_}))}var cm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(cm||(cm={}));new Promise(()=>{});function u1(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:be.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:be.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jl.apply(this,arguments)}function f1(t,e){return BS({basename:e==null?void 0:e.basename,future:Jl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:oS({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||d1(),routes:t,mapRouteProperties:u1}).initialize()}function d1(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Jl({},e,{errors:h1(e.errors)})),e}function h1(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Eh(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){let s=new Error(r.message);s.stack="",n[i]=s}else n[i]=r;return n}var um;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(um||(um={}));var fm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fm||(fm={}));function Bg({children:t}){return z.jsx("div",{className:"min-h-screen",id:"layout",children:t})}var zg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dm=sr.createContext&&sr.createContext(zg),mr=globalThis&&globalThis.__assign||function(){return mr=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},mr.apply(this,arguments)},p1=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function Vg(t){return t&&t.map(function(e,n){return sr.createElement(e.tag,mr({key:n},e.attr),Vg(e.child))})}function Hi(t){return function(e){return sr.createElement(m1,mr({attr:mr({},t.attr)},e),Vg(t.child))}}function m1(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,a=p1(t,["attr","size","title"]),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),sr.createElement("svg",mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:mr(mr({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&sr.createElement("title",null,s),t.children)};return dm!==void 0?sr.createElement(dm.Consumer,null,function(n){return e(n)}):e(zg)}function x1(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(t)}function g1(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"}},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"}},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"}}]})(t)}function wh(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function Hg(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(t)}function Gg(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)}function v1(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function _1(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(t)}function Wg(t){return Hi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}}]})(t)}function Xg(t){window.open(t,"_blank")}function jg(){window.location.href="mailto:contact@animeshbasnet.com.np"}function ir({IconComponent:t,url:e,type:n,size:i="medium"}){return z.jsx("div",{className:"icon-wrapper flex justify-center items-center cursor-pointer hover:text-sky-400"+(i==="medium"?" h-8 w-8":" h-5 w-5"),onClick:()=>n==="email"?jg():Xg(e),children:z.jsx(t,{className:"cursor-pointer social-icon"+(i==="medium"?" w-6 h-6":" w-4 h-4")})})}function qg(){return z.jsx("div",{className:"fixed bottom-0 left-6 lg:left-10 xl:left-12 invisible lg:visible",children:z.jsxs("div",{className:"space-y-6",children:[z.jsx(ir,{IconComponent:Wg,url:"",type:"email"}),z.jsx(ir,{IconComponent:Gg,url:"https://www.linkedin.com/in/animeshbasnet/",type:"link"}),z.jsx(ir,{IconComponent:Hg,url:"https://www.instagram.com/crypticsy/",type:"link"}),z.jsx("div",{className:"h-[8rem] w-8 justify-center flex mt-4",children:z.jsx("div",{className:"bg-white w-0.5 h-full rounded-md"})})]})})}function Yg(){return z.jsx("div",{className:"fixed bottom-0 right-6 lg:right-10 xl:right-12 invisible lg:visible",children:z.jsxs("div",{className:"space-y-6",children:[z.jsx(ir,{IconComponent:wh,url:"https://github.com/crypticsy/",type:"link"}),z.jsx("div",{className:"h-[8rem] w-8 justify-center flex mt-4",children:z.jsx("div",{className:"bg-white w-0.5 h-full rounded-md"})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="181",y1=0,hm=1,S1=2,$g=1,M1=2,bi=3,Bi=0,Xt=1,An=2,si=0,Gs=1,pm=2,mm=3,xm=4,E1=5,kr=100,T1=101,b1=102,w1=103,A1=104,R1=200,C1=201,P1=202,D1=203,Ff=204,Of=205,L1=206,I1=207,N1=208,U1=209,F1=210,O1=211,k1=212,B1=213,z1=214,kf=0,ec=1,Bf=2,Qs=3,zf=4,Vf=5,Hf=6,Gf=7,Kg=0,V1=1,H1=2,xr=0,G1=1,W1=2,X1=3,j1=4,q1=5,Y1=6,$1=7,Zg=300,Js=301,ea=302,Wf=303,Xf=304,Tc=306,jf=1e3,Di=1001,qf=1002,Pn=1003,K1=1004,Wo=1005,jt=1006,nu=1007,Wr=1008,In=1009,Qg=1010,Jg=1011,co=1012,Ah=1013,_r=1014,Li=1015,la=1016,Rh=1017,Ch=1018,ta=1020,ev=35902,tv=35899,nv=1021,iv=1022,ni=1023,uo=1026,na=1027,rv=1028,Ph=1029,Dh=1030,Lh=1031,Ih=1033,El=33776,Tl=33777,bl=33778,wl=33779,Yf=35840,$f=35841,Kf=35842,Zf=35843,Qf=36196,Jf=37492,ed=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,ad=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,dd=37819,hd=37820,pd=37821,md=36492,xd=36494,gd=36495,vd=36283,_d=36284,yd=36285,Sd=36286,yo=3200,Z1=3201,Q1=0,J1=1,di="",Ct="srgb",yr="srgb-linear",tc="linear",pt="srgb",ls=7680,gm=519,eM=512,tM=513,nM=514,sv=515,iM=516,rM=517,sM=518,aM=519,vm=35044,Md="300 es",hi=2e3,nc=2001;function av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ic(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oM(){const t=ic("canvas");return t.style.display="block",t}const _m={};function ym(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ye(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function fo(...t){const e=t.join(" ");e in _m||(_m[e]=!0,Ye(...t))}function lM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Ed=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function cM(t,e){return(t%e+e)%e}function ru(t,e,n){return(1-n)*t+n*e}function Ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=S;return}if(d!==S||l!==h||c!==p||f!==_){let g=l*h+c*p+f*_+d*S;g<0&&(h=-h,p=-p,_=-_,S=-S,g=-g);let u=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);u=Math.sin(u*m)/v,o=Math.sin(o*m)/v,l=l*u+h*o,c=c*u+p*o,f=f*u+_*o,d=d*u+S*o}else{l=l*u+h*o,c=c*u+p*o,f=f*u+_*o,d=d*u+S*o;const m=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=m,c*=m,f*=m,d*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-o*p,e[n+2]=c*_+f*p+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new ne,Sm=new Mo;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],S=r[0],g=r[3],u=r[6],m=r[1],v=r[4],E=r[7],C=r[2],b=r[5],R=r[8];return s[0]=a*S+o*m+l*C,s[3]=a*g+o*v+l*b,s[6]=a*u+o*E+l*R,s[1]=c*S+f*m+d*C,s[4]=c*g+f*v+d*b,s[7]=c*u+f*E+d*R,s[2]=h*S+p*m+_*C,s[5]=h*g+p*v+_*b,s[8]=h*u+p*E+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,p=c*s-a*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new $e,Mm=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const t={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yr]:{primaries:e,whitePoint:i,transfer:tc,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),t}const at=uM();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class fM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=ic("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ic("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class Nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ou(r[a].image)):s.push(ou(r[a]))}else s=ou(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let hM=0;const lu=new ne;class Yt extends Tr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Di,r=Di,s=jt,a=Wr,o=ni,l=In,c=Yt.DEFAULT_ANISOTROPY,f=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=So(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Zg;Yt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(p+1)/2,C=(u+1)/2,b=(f+h)/4,R=(d+S)/4,T=(_+g)/4;return v>E&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=R/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=T/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=T/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-S)/m,this.z=(h-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Tr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Yt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Nh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends pM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ov extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),jo.subVectors(this.max,Ta),us.subVectors(e.a,Ta),fs.subVectors(e.b,Ta),ds.subVectors(e.c,Ta),Xi.subVectors(fs,us),ji.subVectors(ds,fs),Cr.subVectors(us,ds);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-Cr.z,Cr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,Cr.z,0,-Cr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-Cr.y,Cr.x,0];return!cu(n,us,fs,ds,jo)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,us,fs,ds,jo))?!1:(qo.crossVectors(Xi,ji),n=[qo.x,qo.y,qo.z],cu(n,us,fs,ds,jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Yn=new ne,Xo=new Eo,us=new ne,fs=new ne,ds=new ne,Xi=new ne,ji=new ne,Cr=new ne,Ta=new ne,jo=new ne,qo=new ne,Pr=new ne;function cu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const xM=new Eo,ba=new ne,uu=new ne;class Uh{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(uu)),this.expandByPoint(ba.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const yi=new ne,fu=new ne,Yo=new ne,qi=new ne,du=new ne,$o=new ne,hu=new ne;class gM{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Yo),o=qi.dot(this.direction),l=-qi.dot(Yo),c=qi.lengthSq(),f=Math.abs(1-a*a);let d,h,p,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const S=1/f;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fu).addScaledVector(Yo,h),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){du.subVectors(n,e),$o.subVectors(i,e),hu.crossVectors(du,$o);let a=this.direction.dot(hu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot($o.crossVectors(qi,$o));if(l<0)return null;const c=o*this.direction.dot(du.cross(qi));if(c<0||l+c>a)return null;const f=-o*qi.dot(hu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,a,o,l,c,f,d,h,p,_,S,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,d,h,p,_,S,g)}set(e,n,i,r,s,a,o,l,c,f,d,h,p,_,S,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*d,_=o*f,S=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h+S*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h-S*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*f,n[9]=S-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*d,_=o*f,S=o*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-h*d,n[8]=_*d+p,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-S*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+S,n[5]=a*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,_M)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(i,Tn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(i,Tn)),Yi.normalize(),Ko.crossVectors(Tn,Yi),r[0]=Yi.x,r[4]=Ko.x,r[8]=Tn.x,r[1]=Yi.y,r[5]=Ko.y,r[9]=Tn.y,r[2]=Yi.z,r[6]=Ko.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],S=i[6],g=i[10],u=i[14],m=i[3],v=i[7],E=i[11],C=i[15],b=r[0],R=r[4],T=r[8],x=r[12],y=r[1],P=r[5],F=r[9],k=r[13],X=r[2],ee=r[6],q=r[10],$=r[14],D=r[3],U=r[7],Y=r[11],oe=r[15];return s[0]=a*b+o*y+l*X+c*D,s[4]=a*R+o*P+l*ee+c*U,s[8]=a*T+o*F+l*q+c*Y,s[12]=a*x+o*k+l*$+c*oe,s[1]=f*b+d*y+h*X+p*D,s[5]=f*R+d*P+h*ee+p*U,s[9]=f*T+d*F+h*q+p*Y,s[13]=f*x+d*k+h*$+p*oe,s[2]=_*b+S*y+g*X+u*D,s[6]=_*R+S*P+g*ee+u*U,s[10]=_*T+S*F+g*q+u*Y,s[14]=_*x+S*k+g*$+u*oe,s[3]=m*b+v*y+E*X+C*D,s[7]=m*R+v*P+E*ee+C*U,s[11]=m*T+v*F+E*q+C*Y,s[15]=m*x+v*k+E*$+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],S=e[7],g=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+S*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*f-s*l*f)+g*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],S=e[13],g=e[14],u=e[15],m=d*g*c-S*h*c+S*l*p-o*g*p-d*l*u+o*h*u,v=_*h*c-f*g*c-_*l*p+a*g*p+f*l*u-a*h*u,E=f*S*c-_*d*c+_*o*p-a*S*p-f*o*u+a*d*u,C=_*d*l-f*S*l-_*o*h+a*S*h+f*o*g-a*d*g,b=n*m+i*v+r*E+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=m*R,e[1]=(S*h*s-d*g*s-S*r*p+i*g*p+d*r*u-i*h*u)*R,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*u+i*l*u)*R,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=v*R,e[5]=(f*g*s-_*h*s+_*r*p-n*g*p-f*r*u+n*h*u)*R,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*u-n*l*u)*R,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=E*R,e[9]=(_*d*s-f*S*s-_*i*p+n*S*p+f*i*u-n*d*u)*R,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*R,e[11]=(f*o*s-a*d*s-f*i*c+n*d*c+a*i*p-n*o*p)*R,e[12]=C*R,e[13]=(f*S*r-_*d*r+_*i*h-n*S*h-f*i*g+n*d*g)*R,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*g-n*o*g)*R,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,d=o+o,h=s*c,p=s*f,_=s*d,S=a*f,g=a*d,u=o*d,m=l*c,v=l*f,E=l*d,C=i.x,b=i.y,R=i.z;return r[0]=(1-(S+u))*C,r[1]=(p+E)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(h+u))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(_+v)*R,r[9]=(g-m)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),o=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,f=1/a,d=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===hi)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===nc)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===hi)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===nc)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hs=new ne,$n=new Bt,vM=new ne(0,0,0),_M=new ne(1,1,1),Yi=new ne,Ko=new ne,Tn=new ne,Tm=new Bt,bm=new Mo;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const wm=new ne,ps=new Mo,Si=new Bt,Zo=new ne,wa=new ne,SM=new ne,MM=new Mo,Am=new ne(1,0,0),Rm=new ne(0,1,0),Cm=new ne(0,0,1),Pm={type:"added"},EM={type:"removed"},ms={type:"childadded",child:null},pu={type:"childremoved",child:null};class Dn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ne,n=new zi,i=new Mo,r=new ne(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new $e}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,n){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zo.copy(e):Zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(wa,Zo,this.up):Si.lookAt(Zo,wa,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Si),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),ms.child=e,this.dispatchEvent(ms),ms.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new ne(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new ne,Mi=new ne,mu=new ne,Ei=new ne,xs=new ne,gs=new ne,Dm=new ne,xu=new ne,gu=new ne,vu=new ne,_u=new Lt,yu=new Lt,Su=new Lt;class ti{constructor(e=new ne,n=new ne,i=new ne){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Mi.subVectors(i,n),mu.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(Mi),l=Kn.dot(mu),c=Mi.dot(Mi),f=Mi.dot(mu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return _u.setScalar(0),yu.setScalar(0),Su.setScalar(0),_u.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,i),Su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_u,s.x),a.addScaledVector(yu,s.y),a.addScaledVector(Su,s.z),a}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Mi.subVectors(e,n),Kn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Kn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),gs.subVectors(s,i),xu.subVectors(e,i);const l=xs.dot(xu),c=gs.dot(xu);if(l<=0&&c<=0)return n.copy(i);gu.subVectors(e,r);const f=xs.dot(gu),d=gs.dot(gu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(xs,a);vu.subVectors(e,s);const p=xs.dot(vu),_=gs.dot(vu);if(_>=0&&p<=_)return n.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(gs,o);const g=f*_-p*d;if(g<=0&&d-f>=0&&p-_>=0)return Dm.subVectors(s,r),o=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(Dm,o);const u=1/(g+S+h);return a=S*u,o=h*u,n.copy(i).addScaledVector(xs,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=cM(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=Ct){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ct){const i=cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return at.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ct){at.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Qo);const i=ru($i.h,Qo.h,n),r=ru($i.s,Qo.s,n),s=ru($i.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ft;ft.NAMES=cv;let TM=0;class ca extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=So(),this.name="",this.type="Material",this.blending=Gs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uv extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new ne,Jo=new Ze;let bM=0;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vm,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class fv extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wM=0;const kn=new Bt,Eu=new Dn,vs=new ne,bn=new Eo,Aa=new Eo,Gt=new ne;class Gi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?dv:fv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(bn.min,Aa.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Aa.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Aa.min),bn.expandByPoint(Aa.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Gt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Gt.add(vs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new ne,l[T]=new ne;const c=new ne,f=new ne,d=new ne,h=new Ze,p=new Ze,_=new Ze,S=new ne,g=new ne;function u(T,x,y){c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),f.sub(c),d.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),o[T].add(S),o[x].add(S),o[y].add(S),l[T].add(g),l[x].add(g),l[y].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let T=0,x=m.length;T<x;++T){const y=m[T],P=y.start,F=y.count;for(let k=P,X=P+F;k<X;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new ne,E=new ne,C=new ne,b=new ne;function R(T){C.fromBufferAttribute(r,T),b.copy(C);const x=o[T];v.copy(x),v.sub(C.multiplyScalar(C.dot(x))).normalize(),E.crossVectors(b,x);const P=E.dot(l[T])<0?-1:1;a.setXYZW(T,v.x,v.y,v.z,P)}for(let T=0,x=m.length;T<x;++T){const y=m[T],P=y.start,F=y.count;for(let k=P,X=P+F;k<X;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new ne,s=new ne,a=new ne,o=new ne,l=new ne,c=new ne,f=new ne,d=new ne;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new Wn(h,f,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Bt,Dr=new gM,el=new Uh,Im=new ne,tl=new ne,nl=new ne,il=new ne,Tu=new ne,rl=new ne,Nm=new ne,sl=new ne;class xi extends Dn{constructor(e=new Gi,n=new uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(Tu.fromBufferAttribute(d,e),a?rl.addScaledVector(Tu,f):rl.addScaledVector(Tu.sub(n),f))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(el.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(el,Im)===null||Dr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Lm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],u=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=m,C=v;E<C;E+=3){const b=o.getX(E),R=o.getX(E+1),T=o.getX(E+2);r=al(this,u,e,i,c,f,d,b,R,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=_,u=S;g<u;g+=3){const m=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=al(this,a,e,i,c,f,d,m,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const g=h[_],u=a[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=m,C=v;E<C;E+=3){const b=E,R=E+1,T=E+2;r=al(this,u,e,i,c,f,d,b,R,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=_,u=S;g<u;g+=3){const m=g,v=g+1,E=g+2;r=al(this,a,e,i,c,f,d,m,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function AM(t,e,n,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bi,o),l===null)return null;sl.copy(o),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function al(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,tl),t.getVertexPosition(l,nl),t.getVertexPosition(c,il);const f=AM(t,e,n,i,tl,nl,il,Nm);if(f){const d=new ne;ti.getBarycoord(Nm,tl,nl,il,d),r&&(f.uv=ti.getInterpolatedAttribute(r,o,l,c,d,new Ze)),s&&(f.uv1=ti.getInterpolatedAttribute(s,o,l,c,d,new Ze)),a&&(f.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new ne),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new ne,materialIndex:0};ti.getNormal(tl,nl,il,h.normal),f.face=h,f.barycoord=d}return f}class To extends Gi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qr(c,3)),this.setAttribute("normal",new qr(f,3)),this.setAttribute("uv",new qr(d,2));function _(S,g,u,m,v,E,C,b,R,T,x){const y=E/R,P=C/T,F=E/2,k=C/2,X=b/2,ee=R+1,q=T+1;let $=0,D=0;const U=new ne;for(let Y=0;Y<q;Y++){const oe=Y*P-k;for(let ie=0;ie<ee;ie++){const Ue=ie*y-F;U[S]=Ue*m,U[g]=oe*v,U[u]=X,c.push(U.x,U.y,U.z),U[S]=0,U[g]=0,U[u]=b>0?1:-1,f.push(U.x,U.y,U.z),d.push(ie/R),d.push(1-Y/T),$+=1}}for(let Y=0;Y<T;Y++)for(let oe=0;oe<R;oe++){const ie=h+oe+ee*Y,Ue=h+oe+ee*(Y+1),Be=h+(oe+1)+ee*(Y+1),Ie=h+(oe+1)+ee*Y;l.push(ie,Ue,Ie),l.push(Ue,Be,Ie),D+=6}o.addGroup(p,D,x),p+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ia(t[n]);for(const r in i)e[r]=i[r]}return e}function RM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const CM={clone:ia,merge:cn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=RM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new ne,Um=new Ze,Fm=new Ze;class Vn extends pv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Um,Fm),n.subVectors(Fm,Um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(iu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,ys=1;class LM extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(_s,ys,e,n);r.layers=this.layers,this.add(r);const s=new Vn(_s,ys,e,n);s.layers=this.layers,this.add(s);const a=new Vn(_s,ys,e,n);a.layers=this.layers,this.add(a);const o=new Vn(_s,ys,e,n);o.layers=this.layers,this.add(o);const l=new Vn(_s,ys,e,n);l.layers=this.layers,this.add(l);const c=new Vn(_s,ys,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class mv extends Yt{constructor(e=[],n=Js,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IM extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new To(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:si});s.uniforms.tEquirect.value=n;const a=new xi(r,s),o=n.minFilter;return n.minFilter===Wr&&(n.minFilter=jt),new LM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class ol extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Td extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class UM extends Yt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Pn,f=Pn,d,h){super(null,a,o,l,c,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new ne,FM=new ne,OM=new $e;class Or{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OM.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Uh,kM=new Ze(.5,.5),ll=new ne;class xv{constructor(e=new Or,n=new Or,i=new Or,r=new Or,s=new Or,a=new Or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],_=s[8],S=s[9],g=s[10],u=s[11],m=s[12],v=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-a,p-f,u-_,C-m).normalize(),r[1].setComponents(c+a,p+f,u+_,C+m).normalize(),r[2].setComponents(c+o,p+d,u+S,C+v).normalize(),r[3].setComponents(c-o,p-d,u-S,C-v).normalize(),i)r[4].setComponents(l,h,g,E).normalize(),r[5].setComponents(c-l,p-h,u-g,C-E).normalize();else if(r[4].setComponents(c-l,p-h,u-g,C-E).normalize(),n===hi)r[5].setComponents(c+l,p+h,u+g,C+E).normalize();else if(n===nc)r[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const n=kM.distanceTo(e.center);return Lr.radius=.7071067811865476+n,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends Yt{constructor(e,n,i=_r,r,s,a,o=Pn,l=Pn,c,f=uo,d=1){if(f!==uo&&f!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gv extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bo extends Gi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,p=[],_=[],S=[],g=[];for(let u=0;u<f;u++){const m=u*h-a;for(let v=0;v<c;v++){const E=v*d-s;_.push(E,-m,0),S.push(0,0,1),g.push(v/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const v=m+c*u,E=m+c*(u+1),C=m+1+c*(u+1),b=m+1+c*u;p.push(v,E,b),p.push(E,C,b)}this.setIndex(p),this.setAttribute("position",new qr(_,3)),this.setAttribute("normal",new qr(S,3)),this.setAttribute("uv",new qr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class BM extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oh extends pv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VM extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class HM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Rt{constructor(e){this.value=e}clone(){return new Rt(this.value.clone===void 0?this.value:this.value.clone())}}function Om(t,e,n,i){const r=GM(i);switch(n){case nv:return t*e;case rv:return t*e/r.components*r.byteLength;case Ph:return t*e/r.components*r.byteLength;case Dh:return t*e*2/r.components*r.byteLength;case Lh:return t*e*2/r.components*r.byteLength;case iv:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case El:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:case Zf:return Math.max(t,16)*Math.max(e,8)/4;case Yf:case Kf:return Math.max(t,8)*Math.max(e,8)/2;case Qf:case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case md:case xd:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yd:case Sd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GM(t){switch(t){case In:case Qg:return{byteLength:1,components:1};case co:case Jg:case la:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case _r:case Ah:case Li:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function WM(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#endif`,GE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e3=`#if defined( USE_POINTS_UV )
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
#endif`,t3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C3=`float getShadowMask() {
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
}`,P3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D3=`#ifdef USE_SKINNING
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
#endif`,L3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I3=`#ifdef USE_SKINNING
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
#endif`,N3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k3=`#ifdef USE_TRANSMISSION
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
#endif`,B3=`#ifdef USE_TRANSMISSION
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
#endif`,z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X3=`uniform sampler2D t2D;
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
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`#include <common>
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
}`,Z3=`#if DEPTH_PACKING == 3200
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
}`,Q3=`#define DISTANCE
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
}`,J3=`#define DISTANCE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 diffuse;
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
}`,aT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define MATCAP
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
}`,cT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,fT=`#define NORMAL
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
}`,dT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,pT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
}`,xT=`#define TOON
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
}`,gT=`#define TOON
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
}`,vT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:XM,alphahash_pars_fragment:jM,alphamap_fragment:qM,alphamap_pars_fragment:YM,alphatest_fragment:$M,alphatest_pars_fragment:KM,aomap_fragment:ZM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:sE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:dE,color_vertex:hE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:xE,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:bE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:OE,envmap_vertex:AE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:PE,fog_pars_fragment:DE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:IE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:UE,lights_pars_begin:FE,lights_toon_fragment:kE,lights_toon_pars_fragment:BE,lights_phong_fragment:zE,lights_phong_pars_fragment:VE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:jE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:KE,map_fragment:ZE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:e3,metalnessmap_fragment:t3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:r3,morphnormal_vertex:s3,morphtarget_pars_vertex:a3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:c3,normal_pars_fragment:u3,normal_pars_vertex:f3,normal_vertex:d3,normalmap_pars_fragment:h3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:x3,iridescence_pars_fragment:g3,opaque_fragment:v3,packing:_3,premultiplied_alpha_fragment:y3,project_vertex:S3,dithering_fragment:M3,dithering_pars_fragment:E3,roughnessmap_fragment:T3,roughnessmap_pars_fragment:b3,shadowmap_pars_fragment:w3,shadowmap_pars_vertex:A3,shadowmap_vertex:R3,shadowmask_pars_fragment:C3,skinbase_vertex:P3,skinning_pars_vertex:D3,skinning_vertex:L3,skinnormal_vertex:I3,specularmap_fragment:N3,specularmap_pars_fragment:U3,tonemapping_fragment:F3,tonemapping_pars_fragment:O3,transmission_fragment:k3,transmission_pars_fragment:B3,uv_pars_fragment:z3,uv_pars_vertex:V3,uv_vertex:H3,worldpos_vertex:G3,background_vert:W3,background_frag:X3,backgroundCube_vert:j3,backgroundCube_frag:q3,cube_vert:Y3,cube_frag:$3,depth_vert:K3,depth_frag:Z3,distanceRGBA_vert:Q3,distanceRGBA_frag:J3,equirect_vert:eT,equirect_frag:tT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:rT,meshbasic_frag:sT,meshlambert_vert:aT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:dT,meshphong_frag:hT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:xT,meshtoon_frag:gT,points_vert:vT,points_frag:_T,shadow_vert:yT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},we={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ui={basic:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:cn([we.common,we.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:cn([we.lights,we.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ui.physical={uniforms:cn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const cl={r:0,b:0,g:0},Ir=new zi,TT=new Bt;function bT(t,e,n,i,r,s,a){const o=new ft(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?n:e).get(E)),E}function S(v){let E=!1;const C=_(v);C===null?u(o,l):C&&C.isColor&&(u(C,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===Tc)?(f===void 0&&(f=new xi(new To(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ia(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ir.copy(E.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Ir)),f.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,(d!==C||h!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new xi(new bo(2,2),new Nn({name:"BackgroundMaterial",uniforms:ia(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,E){v.getRGB(cl,hv(t)),i.buffers.color.setClear(cl.r,cl.g,cl.b,E,a)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:g,dispose:m}}function wT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,P,F,k,X){let ee=!1;const q=d(k,F,P);s!==q&&(s=q,c(s.object)),ee=p(y,k,F,X),ee&&_(y,k,F,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,E(y,P,F,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function d(y,P,F){const k=F.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let ee=X[P.id];ee===void 0&&(ee={},X[P.id]=ee);let q=ee[k];return q===void 0&&(q=h(l()),ee[k]=q),q}function h(y){const P=[],F=[],k=[];for(let X=0;X<n;X++)P[X]=0,F[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,F,k){const X=s.attributes,ee=P.attributes;let q=0;const $=F.getAttributes();for(const D in $)if($[D].location>=0){const Y=X[D];let oe=ee[D];if(oe===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function _(y,P,F,k){const X={},ee=P.attributes;let q=0;const $=F.getAttributes();for(const D in $)if($[D].location>=0){let Y=ee[D];Y===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),X[D]=oe,q++}s.attributes=X,s.attributesNum=q,s.index=k}function S(){const y=s.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function g(y){u(y,0)}function u(y,P){const F=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;F[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),X[y]!==P&&(t.vertexAttribDivisor(y,P),X[y]=P)}function m(){const y=s.newAttributes,P=s.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==y[F]&&(t.disableVertexAttribArray(F),P[F]=0)}function v(y,P,F,k,X,ee,q){q===!0?t.vertexAttribIPointer(y,P,F,X,ee):t.vertexAttribPointer(y,P,F,k,X,ee)}function E(y,P,F,k){S();const X=k.attributes,ee=F.getAttributes(),q=P.defaultAttributeValues;for(const $ in ee){const D=ee[$];if(D.location>=0){let U=X[$];if(U===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(U=y.instanceColor)),U!==void 0){const Y=U.normalized,oe=U.itemSize,ie=e.get(U);if(ie===void 0)continue;const Ue=ie.buffer,Be=ie.type,Ie=ie.bytesPerElement,K=Be===t.INT||Be===t.UNSIGNED_INT||U.gpuType===Ah;if(U.isInterleavedBufferAttribute){const te=U.data,_e=te.stride,me=U.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<D.locationSize;ye++)u(D.location+ye,te.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<D.locationSize;ye++)g(D.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ye=0;ye<D.locationSize;ye++)v(D.location+ye,oe/D.locationSize,Be,Y,_e*Ie,(me+oe/D.locationSize*ye)*Ie,K)}else{if(U.isInstancedBufferAttribute){for(let te=0;te<D.locationSize;te++)u(D.location+te,U.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let te=0;te<D.locationSize;te++)g(D.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let te=0;te<D.locationSize;te++)v(D.location+te,oe/D.locationSize,Be,Y,oe*Ie,oe/D.locationSize*te*Ie,K)}}else if(q!==void 0){const Y=q[$];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(D.location,Y);break;case 3:t.vertexAttrib3fv(D.location,Y);break;case 4:t.vertexAttrib4fv(D.location,Y);break;default:t.vertexAttrib1fv(D.location,Y)}}}}m()}function C(){T();for(const y in i){const P=i[y];for(const F in P){const k=P[F];for(const X in k)f(k[X].object),delete k[X];delete P[F]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const F in P){const k=P[F];for(const X in k)f(k[X].object),delete k[X];delete P[F]}delete i[y.id]}function R(y){for(const P in i){const F=i[P];if(F[y.id]===void 0)continue;const k=F[y.id];for(const X in k)f(k[X].object),delete k[X];delete F[y.id]}}function T(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function AT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=f[S]*h[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function RT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ni&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const T=R===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Li&&!T)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ye("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:b}}function CT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Or,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,v=m*4;let E=u.clippingState||null;l.value=E,E=f(_,h,v,p);for(let C=0;C!==v;++C)E[C]=n[C];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const u=p+S*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,E=p;v!==S;++v,E+=4)a.copy(d[v]).applyMatrix4(m,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function PT(t){let e=new WeakMap;function n(a,o){return o===Wf?a.mapping=Js:o===Xf&&(a.mapping=ea),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wf||o===Xf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new IM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rr=4,km=[.125,.215,.35,.446,.526,.582],Br=20,DT=256,Ra=new Oh,Bm=new ft;let Au=null,Ru=0,Cu=0,Pu=!1;const LT=new ne;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=LT}=s;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:la,format:ni,colorSpace:yr,depthBuffer:!1},r=Vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(s)),this._blurMaterial=UT(s,e,n)}return r}_compileMaterial(e){const n=new xi(new Gi,e);this._renderer.compile(n,Ra)}_sceneToCubeUV(e,n,i,r,s){const l=new Vn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Bm),d.toneMapping=xr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new To,new uv({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let u=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,u=!0):(g.color.copy(Bm),u=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const C=this._cubeSize;Ss(r,E*C,v>2?C:0,C,C),d.setRenderTarget(r),u&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ra)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const m=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=NT(this._lodMax,m,v)}const a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=.05+c*.95,p=d*h,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-rr?i-_+rr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Ss(s,g,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ss(e,g,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Ra)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),S=s/_,g=isFinite(s)?1+Math.floor(f*S):Br;g>Br&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);const u=[];let m=0;for(let R=0;R<Br;++R){const T=R/S,x=Math.exp(-T*T/2);u.push(x),R===0?m+=x:R<g&&(m+=2*x)}for(let R=0;R<u.length;R++)u[R]=u[R]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],C=3*E*(r>v-rr?r-v+rr:0),b=4*(this._cubeSize-E);Ss(n,C,b,3*E,2*E),l.setRenderTarget(n),l.render(d,Ra)}}function IT(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+km.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-rr?l=km[a-t+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,S=3,g=2,u=1,m=new Float32Array(S*_*p),v=new Float32Array(g*_*p),E=new Float32Array(u*_*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,T=b>2?0:-1,x=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];m.set(x,S*_*b),v.set(h,g*_*b);const y=[b,b,b,b,b,b];E.set(y,u*_*b)}const C=new Gi;C.setAttribute("position",new Wn(m,S)),C.setAttribute("uv",new Wn(v,g)),C.setAttribute("faceIndex",new Wn(E,u)),i.push(new xi(C,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Vm(t,e,n){const i=new oi(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NT(t,e,n){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function UT(t,e,n){const i=new Float32Array(Br),r=new ne(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Hm(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Gm(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function FT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wf||l===Xf,f=l===Js||l===ea;if(c||f){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new zm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new zm(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function OT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fo("WebGLRenderer: "+i+" extension not supported."),r}}}function kT(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let v=0,E=m.length;v<E;v+=3){const C=m[v+0],b=m[v+1],R=m[v+2];h.push(C,b,b,R,R,C)}}else if(_!==void 0){const m=_.array;S=_.version;for(let v=0,E=m.length/3-1;v<E;v+=3){const C=v+0,b=v+1,R=v+2;h.push(C,b,b,R,R,C)}}else return;const g=new(av(h)?dv:fv)(h,1);g.version=S;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function BT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=p[u];n.update(g,i,1)}function d(h,p,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,_);let u=0;for(let m=0;m<_;m++)u+=p[m]*S[m];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function zT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VT(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),S===!0&&(v=3);let E=o.attributes.position.count*v,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*C*4*d),R=new ov(b,E,C,d);R.type=Li,R.needsUpdate=!0;const T=v*4;for(let y=0;y<d;y++){const P=g[y],F=u[y],k=m[y],X=E*C*4*y;for(let ee=0;ee<P.count;ee++){const q=ee*T;p===!0&&(r.fromBufferAttribute(P,ee),b[X+q+0]=r.x,b[X+q+1]=r.y,b[X+q+2]=r.z,b[X+q+3]=0),_===!0&&(r.fromBufferAttribute(F,ee),b[X+q+4]=r.x,b[X+q+5]=r.y,b[X+q+6]=r.z,b[X+q+7]=0),S===!0&&(r.fromBufferAttribute(k,ee),b[X+q+8]=r.x,b[X+q+9]=r.y,b[X+q+10]=r.z,b[X+q+11]=k.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Ze(E,C)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function HT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const _v=new Yt,Wm=new Fh(1,1),yv=new ov,Sv=new mM,Mv=new mv,Xm=[],jm=[],qm=new Float32Array(16),Ym=new Float32Array(9),$m=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xm[r];if(s===void 0&&(s=new Float32Array(r),Xm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;$m.set(i),t.uniformMatrix2fv(this.addr,!1,$m),Vt(n,i)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Ym.set(i),t.uniformMatrix3fv(this.addr,!1,Ym),Vt(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),Vt(n,i)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function eb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wm.compareFunction=sv,s=Wm):s=_v,n.setTexture2D(e||s,r)}function sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sv,r)}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Mv,r)}function ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yv,r)}function lb(t){switch(t){case 5126:return GT;case 35664:return WT;case 35665:return XT;case 35666:return jT;case 35674:return qT;case 35675:return YT;case 35676:return $T;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return ob}}function cb(t,e){t.uniform1fv(this.addr,e)}function ub(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function fb(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function db(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function hb(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pb(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mb(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xb(t,e){t.uniform1iv(this.addr,e)}function gb(t,e){t.uniform2iv(this.addr,e)}function vb(t,e){t.uniform3iv(this.addr,e)}function _b(t,e){t.uniform4iv(this.addr,e)}function yb(t,e){t.uniform1uiv(this.addr,e)}function Sb(t,e){t.uniform2uiv(this.addr,e)}function Mb(t,e){t.uniform3uiv(this.addr,e)}function Eb(t,e){t.uniform4uiv(this.addr,e)}function Tb(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||_v,s[a])}function bb(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Sv,s[a])}function wb(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Mv,s[a])}function Ab(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||yv,s[a])}function Rb(t){switch(t){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return db;case 35674:return hb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return xb;case 35667:case 35671:return gb;case 35668:case 35672:return vb;case 35669:case 35673:return _b;case 5125:return yb;case 36294:return Sb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Ab}}class Cb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lb(n.type)}}class Pb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rb(n.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Km(t,e){t.seq.push(e),t.map[e.id]=e}function Lb(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),a=Du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Km(n,c===void 0?new Cb(o,t,e):new Pb(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Db(o),Km(n,d)),n=d}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Lb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ib=37297;let Nb=0;function Ub(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Qm=new $e;function Fb(t){at._getMatrix(Qm,at.workingColorSpace,t);const e=`mat3( ${Qm.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case tc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Ub(t.getShaderSource(e),o)}else return s}function Ob(t,e){const n=Fb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kb(t,e){let n;switch(e){case G1:n="Linear";break;case W1:n="Reinhard";break;case X1:n="Cineon";break;case j1:n="ACESFilmic";break;case Y1:n="AgX";break;case $1:n="Neutral";break;case q1:n="Custom";break;default:Ye("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new ne;function Bb(){at.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function Vb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ia(t){return t!==""}function e0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(t){return t.replace(Gb,Xb)}const Wb=new Map;function Xb(t,e){let n=Ke[e];if(n===void 0){const i=Wb.get(e);if(i!==void 0)n=Ke[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(t){return t.replace(jb,qb)}function qb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function i0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Yb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===M1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function $b(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case ea:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function Zb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kg:e="ENVMAP_BLENDING_MULTIPLY";break;case V1:e="ENVMAP_BLENDING_MIX";break;case H1:e="ENVMAP_BLENDING_ADD";break}return e}function Qb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Jb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Yb(n),c=$b(n),f=Kb(n),d=Zb(n),h=Qb(n),p=zb(n),_=Vb(s),S=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),u.length>0&&(u+=`
`)):(g=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),u=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==xr?kb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ob("linearToOutputTexel",n.outputColorSpace),Bb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),a=bd(a),a=e0(a,n),a=t0(a,n),o=bd(o),o=e0(o,n),o=t0(o,n),a=n0(a),o=n0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+g+a,E=m+u+o,C=Zm(r,r.VERTEX_SHADER,v),b=Zm(r,r.FRAGMENT_SHADER,E);r.attachShader(S,C),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(b)||"",ee=F.trim(),q=k.trim(),$=X.trim();let D=!0,U=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,b);else{const Y=Jm(r,C,"vertex"),oe=Jm(r,b,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ee+`
`+Y+`
`+oe)}else ee!==""?Ye("WebGLProgram: Program Info Log:",ee):(q===""||$==="")&&(U=!1);U&&(P.diagnostics={runnable:D,programLog:ee,vertexShader:{log:q,prefix:g},fragmentShader:{log:$,prefix:u}})}r.deleteShader(C),r.deleteShader(b),T=new Al(r,S),x=Hb(r,S)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,Ib)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}let ew=0;class tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nw(e),n.set(e,i)),i}}class nw{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}}function iw(t,e,n,i,r,s,a){const o=new lv,l=new tw,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,y,P,F,k){const X=F.fog,ee=k.geometry,q=x.isMeshStandardMaterial?F.environment:null,$=(x.isMeshStandardMaterial?n:e).get(x.envMap||q),D=$&&$.mapping===Tc?$.image.height:null,U=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Y=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,oe=Y!==void 0?Y.length:0;let ie=0;ee.morphAttributes.position!==void 0&&(ie=1),ee.morphAttributes.normal!==void 0&&(ie=2),ee.morphAttributes.color!==void 0&&(ie=3);let Ue,Be,Ie,K;if(U){const Qe=ui[U];Ue=Qe.vertexShader,Be=Qe.fragmentShader}else Ue=x.vertexShader,Be=x.fragmentShader,l.update(x),Ie=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const te=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),me=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,Te=!!x.map,Ve=!!x.matcap,Ae=!!$,We=!!x.aoMap,L=!!x.lightMap,Ce=!!x.bumpMap,Oe=!!x.normalMap,qe=!!x.displacementMap,de=!!x.emissiveMap,ke=!!x.metalnessMap,Ee=!!x.roughnessMap,Se=x.anisotropy>0,A=x.clearcoat>0,M=x.dispersion>0,O=x.iridescence>0,re=x.sheen>0,le=x.transmission>0,Q=Se&&!!x.anisotropyMap,De=A&&!!x.clearcoatMap,N=A&&!!x.clearcoatNormalMap,B=A&&!!x.clearcoatRoughnessMap,G=O&&!!x.iridescenceMap,W=O&&!!x.iridescenceThicknessMap,j=re&&!!x.sheenColorMap,pe=re&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ae=!!x.specularColorMap,fe=!!x.specularIntensityMap,I=le&&!!x.transmissionMap,ue=le&&!!x.thicknessMap,ge=!!x.gradientMap,he=!!x.alphaMap,ce=x.alphaTest>0,se=!!x.alphaHash,Pe=!!x.extensions;let Xe=xr;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const ut={shaderID:U,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:Be,defines:x.defines,customVertexShaderID:Ie,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:me,instancingColor:me&&k.instanceColor!==null,instancingMorph:me&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:yr,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:Ve,envMap:Ae,envMapMode:Ae&&$.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:L,bumpMap:Ce,normalMap:Oe,displacementMap:h&&qe,emissiveMap:de,normalMapObjectSpace:Oe&&x.normalMapType===J1,normalMapTangentSpace:Oe&&x.normalMapType===Q1,metalnessMap:ke,roughnessMap:Ee,anisotropy:Se,anisotropyMap:Q,clearcoat:A,clearcoatMap:De,clearcoatNormalMap:N,clearcoatRoughnessMap:B,dispersion:M,iridescence:O,iridescenceMap:G,iridescenceThicknessMap:W,sheen:re,sheenColorMap:j,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:ae,specularIntensityMap:fe,transmission:le,transmissionMap:I,thicknessMap:ue,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Gs&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:ce,alphaHash:se,combine:x.combine,mapUv:Te&&S(x.map.channel),aoMapUv:We&&S(x.aoMap.channel),lightMapUv:L&&S(x.lightMap.channel),bumpMapUv:Ce&&S(x.bumpMap.channel),normalMapUv:Oe&&S(x.normalMap.channel),displacementMapUv:qe&&S(x.displacementMap.channel),emissiveMapUv:de&&S(x.emissiveMap.channel),metalnessMapUv:ke&&S(x.metalnessMap.channel),roughnessMapUv:Ee&&S(x.roughnessMap.channel),anisotropyMapUv:Q&&S(x.anisotropyMap.channel),clearcoatMapUv:De&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:N&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:W&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:j&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(x.sheenRoughnessMap.channel),specularMapUv:xe&&S(x.specularMap.channel),specularColorMapUv:ae&&S(x.specularColorMap.channel),specularIntensityMapUv:fe&&S(x.specularIntensityMap.channel),transmissionMapUv:I&&S(x.transmissionMap.channel),thicknessMapUv:ue&&S(x.thicknessMap.channel),alphaMapUv:he&&S(x.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Oe||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Te||he),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(y,x),v(y,x),y.push(t.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const y=_[x.type];let P;if(y){const F=ui[y];P=CM.clone(F.uniforms)}else P=x.uniforms;return P}function C(x,y){let P;for(let F=0,k=f.length;F<k;F++){const X=f[F];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Jb(t,y,x,s),f.push(P)),P}function b(x){if(--x.usedTimes===0){const y=f.indexOf(x);f[y]=f[f.length-1],f.pop(),x.destroy()}}function R(x){l.remove(x)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:E,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:f,dispose:T}}function rw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function r0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function s0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,_,S,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=S,u.group=g),e++,u}function o(d,h,p,_,S,g){const u=a(d,h,p,_,S,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,S,g){const u=a(d,h,p,_,S,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||sw),i.length>1&&i.sort(h||r0),r.length>1&&r.sort(h||r0)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function aw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new s0,t.set(i,[a])):r>=s.length?(a=new s0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new ft};break;case"SpotLight":n={position:new ne,direction:new ne,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return t[e.id]=n,n}}}function lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cw=0;function uw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fw(t){const e=new ow,n=lw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const r=new ne,s=new Bt,a=new Bt;function o(c){let f=0,d=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,S=0,g=0,u=0,m=0,v=0,E=0,C=0,b=0,R=0;c.sort(uw);for(let x=0,y=c.length;x<y;x++){const P=c[x],F=P.color,k=P.intensity,X=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*k,d+=F.g*k,h+=F.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],k);R++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(k),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[S]=q;const $=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[S]=$.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[S]=D,i.spotShadowMap[S]=ee,E++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(F).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const $=P.shadow,D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[u]=q,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==p||T.pointLength!==_||T.spotLength!==S||T.rectAreaLength!==g||T.hemiLength!==u||T.numDirectionalShadows!==m||T.numPointShadows!==v||T.numSpotShadows!==E||T.numSpotMaps!==C||T.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,T.directionalLength=p,T.pointLength=_,T.spotLength=S,T.rectAreaLength=g,T.hemiLength=u,T.numDirectionalShadows=m,T.numPointShadows=v,T.numSpotShadows=E,T.numSpotMaps=C,T.numLightProbes=R,i.version=cw++)}function l(c,f){let d=0,h=0,p=0,_=0,S=0;const g=f.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function a0(t){const e=new fw(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new a0(t),e.set(r,[o])):s>=a.length?(o=new a0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(t,e,n){let i=new xv;const r=new Ze,s=new Ze,a=new Lt,o=new BM({depthPacking:Z1}),l=new zM,c={},f=n.maxTextureSize,d={[Bi]:Xt,[Xt]:Bi,[An]:An},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:hw,fragmentShader:pw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gi;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new xi(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let u=this.type;this.render=function(b,R,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const x=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==bi&&this.type===bi,X=u===bi&&this.type!==bi;for(let ee=0,q=b.length;ee<q;ee++){const $=b[ee],D=$.shadow;if(D===void 0){Ye("WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const U=D.getFrameExtents();if(r.multiply(U),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/U.y),r.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null||k===!0||X===!0){const oe=this.type!==bi?{minFilter:Pn,magFilter:Pn}:{};D.map!==null&&D.map.dispose(),D.map=new oi(r.x,r.y,oe),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Y=D.getViewportCount();for(let oe=0;oe<Y;oe++){const ie=D.getViewport(oe);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(a),D.updateMatrices($,oe),i=D.getFrustum(),E(R,T,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===bi&&m(D,T),D.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(x,y,P)};function m(b,R){const T=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new oi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,T,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,T,p,S,null)}function v(b,R,T,x){let y=null;const P=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=T.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=y.uuid,k=R.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let ee=X[k];ee===void 0&&(ee=y.clone(),X[k]=ee,R.addEventListener("dispose",C)),y=ee}if(y.visible=R.visible,y.wireframe=R.wireframe,x===bi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=T}return y}function E(b,R,T,x,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===bi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const k=e.update(b),X=b.material;if(Array.isArray(X)){const ee=k.groups;for(let q=0,$=ee.length;q<$;q++){const D=ee[q],U=X[D.materialIndex];if(U&&U.visible){const Y=v(b,U,x,y);b.onBeforeShadow(t,b,R,T,k,Y,D),t.renderBufferDirect(T,null,k,Y,b,D),b.onAfterShadow(t,b,R,T,k,Y,D)}}}else if(X.visible){const ee=v(b,X,x,y);b.onBeforeShadow(t,b,R,T,k,ee,null),t.renderBufferDirect(T,null,k,ee,b,null),b.onAfterShadow(t,b,R,T,k,ee,null)}}const F=b.children;for(let k=0,X=F.length;k<X;k++)E(F[k],R,T,x,y)}function C(b){b.target.removeEventListener("dispose",C);for(const T in c){const x=c[T],y=b.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const xw={[kf]:ec,[Bf]:Hf,[zf]:Gf,[Qs]:Vf,[ec]:kf,[Hf]:Bf,[Gf]:zf,[Vf]:Qs};function gw(t,e){function n(){let I=!1;const ue=new Lt;let ge=null;const he=new Lt(0,0,0,0);return{setMask:function(ce){ge!==ce&&!I&&(t.colorMask(ce,ce,ce,ce),ge=ce)},setLocked:function(ce){I=ce},setClear:function(ce,se,Pe,Xe,ut){ut===!0&&(ce*=Xe,se*=Xe,Pe*=Xe),ue.set(ce,se,Pe,Xe),he.equals(ue)===!1&&(t.clearColor(ce,se,Pe,Xe),he.copy(ue))},reset:function(){I=!1,ge=null,he.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,ge=null,he=null,ce=null;return{setReversed:function(se){if(ue!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=se;const Xe=ce;ce=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(se){se?te(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(se){ge!==se&&!I&&(t.depthMask(se),ge=se)},setFunc:function(se){if(ue&&(se=xw[se]),he!==se){switch(se){case kf:t.depthFunc(t.NEVER);break;case ec:t.depthFunc(t.ALWAYS);break;case Bf:t.depthFunc(t.LESS);break;case Qs:t.depthFunc(t.LEQUAL);break;case zf:t.depthFunc(t.EQUAL);break;case Vf:t.depthFunc(t.GEQUAL);break;case Hf:t.depthFunc(t.GREATER);break;case Gf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=se}},setLocked:function(se){I=se},setClear:function(se){ce!==se&&(ue&&(se=1-se),t.clearDepth(se),ce=se)},reset:function(){I=!1,ge=null,he=null,ce=null,ue=!1}}}function r(){let I=!1,ue=null,ge=null,he=null,ce=null,se=null,Pe=null,Xe=null,ut=null;return{setTest:function(Qe){I||(Qe?te(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!I&&(t.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,an,on){(ge!==Qe||he!==an||ce!==on)&&(t.stencilFunc(Qe,an,on),ge=Qe,he=an,ce=on)},setOp:function(Qe,an,on){(se!==Qe||Pe!==an||Xe!==on)&&(t.stencilOp(Qe,an,on),se=Qe,Pe=an,Xe=on)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ut!==Qe&&(t.clearStencil(Qe),ut=Qe)},reset:function(){I=!1,ue=null,ge=null,he=null,ce=null,se=null,Pe=null,Xe=null,ut=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],_=null,S=!1,g=null,u=null,m=null,v=null,E=null,C=null,b=null,R=new ft(0,0,0),T=0,x=!1,y=null,P=null,F=null,k=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),q=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),q=$>=2);let U=null,Y={};const oe=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ue=new Lt().fromArray(oe),Be=new Lt().fromArray(ie);function Ie(I,ue,ge,he){const ce=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<ge;Pe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ue+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return se}const K={};K[t.TEXTURE_2D]=Ie(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Qs),Ce(!1),Oe(hm),te(t.CULL_FACE),We(si);function te(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function _e(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function me(I,ue){return d[I]!==ue?(t.bindFramebuffer(I,ue),d[I]=ue,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(I,ue){let ge=p,he=!1;if(I){ge=h.get(ue),ge===void 0&&(ge=[],h.set(ue,ge));const ce=I.textures;if(ge.length!==ce.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=ce.length;se<Pe;se++)ge[se]=t.COLOR_ATTACHMENT0+se;ge.length=ce.length,he=!0}}else ge[0]!==t.BACK&&(ge[0]=t.BACK,he=!0);he&&t.drawBuffers(ge)}function Te(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const Ve={[kr]:t.FUNC_ADD,[T1]:t.FUNC_SUBTRACT,[b1]:t.FUNC_REVERSE_SUBTRACT};Ve[w1]=t.MIN,Ve[A1]=t.MAX;const Ae={[R1]:t.ZERO,[C1]:t.ONE,[P1]:t.SRC_COLOR,[Ff]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[N1]:t.DST_COLOR,[L1]:t.DST_ALPHA,[D1]:t.ONE_MINUS_SRC_COLOR,[Of]:t.ONE_MINUS_SRC_ALPHA,[U1]:t.ONE_MINUS_DST_COLOR,[I1]:t.ONE_MINUS_DST_ALPHA,[O1]:t.CONSTANT_COLOR,[k1]:t.ONE_MINUS_CONSTANT_COLOR,[B1]:t.CONSTANT_ALPHA,[z1]:t.ONE_MINUS_CONSTANT_ALPHA};function We(I,ue,ge,he,ce,se,Pe,Xe,ut,Qe){if(I===si){S===!0&&(_e(t.BLEND),S=!1);return}if(S===!1&&(te(t.BLEND),S=!0),I!==E1){if(I!==g||Qe!==x){if((u!==kr||E!==kr)&&(t.blendEquation(t.FUNC_ADD),u=kr,E=kr),Qe)switch(I){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pm:t.blendFunc(t.ONE,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Dt("WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",I);break}m=null,v=null,C=null,b=null,R.set(0,0,0),T=0,g=I,x=Qe}return}ce=ce||ue,se=se||ge,Pe=Pe||he,(ue!==u||ce!==E)&&(t.blendEquationSeparate(Ve[ue],Ve[ce]),u=ue,E=ce),(ge!==m||he!==v||se!==C||Pe!==b)&&(t.blendFuncSeparate(Ae[ge],Ae[he],Ae[se],Ae[Pe]),m=ge,v=he,C=se,b=Pe),(Xe.equals(R)===!1||ut!==T)&&(t.blendColor(Xe.r,Xe.g,Xe.b,ut),R.copy(Xe),T=ut),g=I,x=!1}function L(I,ue){I.side===An?_e(t.CULL_FACE):te(t.CULL_FACE);let ge=I.side===Xt;ue&&(ge=!ge),Ce(ge),I.blending===Gs&&I.transparent===!1?We(si):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){y!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),y=I)}function Oe(I){I!==y1?(te(t.CULL_FACE),I!==P&&(I===hm?t.cullFace(t.BACK):I===S1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),P=I}function qe(I){I!==F&&(q&&t.lineWidth(I),F=I)}function de(I,ue,ge){I?(te(t.POLYGON_OFFSET_FILL),(k!==ue||X!==ge)&&(t.polygonOffset(ue,ge),k=ue,X=ge)):_e(t.POLYGON_OFFSET_FILL)}function ke(I){I?te(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function Ee(I){I===void 0&&(I=t.TEXTURE0+ee-1),U!==I&&(t.activeTexture(I),U=I)}function Se(I,ue,ge){ge===void 0&&(U===null?ge=t.TEXTURE0+ee-1:ge=U);let he=Y[ge];he===void 0&&(he={type:void 0,texture:void 0},Y[ge]=he),(he.type!==I||he.texture!==ue)&&(U!==ge&&(t.activeTexture(ge),U=ge),t.bindTexture(I,ue||K[I]),he.type=I,he.texture=ue)}function A(){const I=Y[U];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function re(){try{t.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function le(){try{t.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function N(){try{t.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function B(){try{t.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function G(){try{t.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function W(){try{t.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(I){Ue.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function pe(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function xe(I,ue){let ge=c.get(ue);ge===void 0&&(ge=new WeakMap,c.set(ue,ge));let he=ge.get(I);he===void 0&&(he=t.getUniformBlockIndex(ue,I.name),ge.set(I,he))}function ae(I,ue){const he=c.get(ue).get(I);l.get(ue)!==he&&(t.uniformBlockBinding(ue,he,I.__bindingPointIndex),l.set(ue,he))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},U=null,Y={},d={},h=new WeakMap,p=[],_=null,S=!1,g=null,u=null,m=null,v=null,E=null,C=null,b=null,R=new ft(0,0,0),T=0,x=!1,y=null,P=null,F=null,k=null,X=null,Ue.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:me,drawBuffers:ye,useProgram:Te,setBlending:We,setMaterial:L,setFlipSided:Ce,setCullFace:Oe,setLineWidth:qe,setPolygonOffset:de,setScissorTest:ke,activeTexture:Ee,bindTexture:Se,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:G,texImage3D:W,updateUBOMapping:xe,uniformBlockBinding:ae,texStorage2D:N,texStorage3D:B,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:De,scissor:j,viewport:pe,reset:fe}}function vw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):ic("canvas")}function S(A,M,O){let re=1;const le=Se(A);if((le.width>O||le.height>O)&&(re=O/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(re*le.width),De=Math.floor(re*le.height);d===void 0&&(d=_(Q,De));const N=M?_(Q,De):d;return N.width=Q,N.height=De,N.getContext("2d").drawImage(A,0,0,Q,De),Ye("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+De+")."),N}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}function g(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,M,O,re,le=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=M;if(M===t.RED&&(O===t.FLOAT&&(Q=t.R32F),O===t.HALF_FLOAT&&(Q=t.R16F),O===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.R8UI),O===t.UNSIGNED_SHORT&&(Q=t.R16UI),O===t.UNSIGNED_INT&&(Q=t.R32UI),O===t.BYTE&&(Q=t.R8I),O===t.SHORT&&(Q=t.R16I),O===t.INT&&(Q=t.R32I)),M===t.RG&&(O===t.FLOAT&&(Q=t.RG32F),O===t.HALF_FLOAT&&(Q=t.RG16F),O===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RG8UI),O===t.UNSIGNED_SHORT&&(Q=t.RG16UI),O===t.UNSIGNED_INT&&(Q=t.RG32UI),O===t.BYTE&&(Q=t.RG8I),O===t.SHORT&&(Q=t.RG16I),O===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),O===t.UNSIGNED_INT&&(Q=t.RGB32UI),O===t.BYTE&&(Q=t.RGB8I),O===t.SHORT&&(Q=t.RGB16I),O===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),O===t.UNSIGNED_INT&&(Q=t.RGBA32UI),O===t.BYTE&&(Q=t.RGBA8I),O===t.SHORT&&(Q=t.RGBA16I),O===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&(O===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const De=le?tc:at.getTransfer(re);O===t.FLOAT&&(Q=t.RGBA32F),O===t.HALF_FLOAT&&(Q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Q=De===pt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(A,M){let O;return A?M===null||M===_r||M===ta?O=t.DEPTH24_STENCIL8:M===Li?O=t.DEPTH32F_STENCIL8:M===co&&(O=t.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_r||M===ta?O=t.DEPTH_COMPONENT24:M===Li?O=t.DEPTH_COMPONENT32F:M===co&&(O=t.DEPTH_COMPONENT16),O}function C(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){const M=A.target;M.removeEventListener("dispose",b),T(M),M.isVideoTexture&&f.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),y(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const O=A.source,re=h.get(O);if(re){const le=re[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&x(A),Object.keys(re).length===0&&h.delete(O)}i.remove(A)}function x(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const O=A.source,re=h.get(O);delete re[M.__cacheKey],a.memory.textures--}function y(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let le=0;le<M.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[re][le]);else t.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)t.deleteFramebuffer(M.__webglFramebuffer[re]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let re=0,le=O.length;re<le;re++){const Q=i.get(O[re]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(O[re])}i.remove(A)}let P=0;function F(){P=0}function k(){const A=P;return A>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ee(A,M){const O=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const re=A.image;if(re===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,A,M);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function q(A,M){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){K(O,A,M);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function $(A,M){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){K(O,A,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function D(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){te(O,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const U={[jf]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[qf]:t.MIRRORED_REPEAT},Y={[Pn]:t.NEAREST,[K1]:t.NEAREST_MIPMAP_NEAREST,[Wo]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Wr]:t.LINEAR_MIPMAP_LINEAR},oe={[eM]:t.NEVER,[aM]:t.ALWAYS,[tM]:t.LESS,[sv]:t.LEQUAL,[nM]:t.EQUAL,[sM]:t.GEQUAL,[iM]:t.GREATER,[rM]:t.NOTEQUAL};function ie(A,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===nu||M.magFilter===Wo||M.magFilter===Wr||M.minFilter===jt||M.minFilter===nu||M.minFilter===Wo||M.minFilter===Wr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,U[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,U[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,U[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==Wo&&M.minFilter!==Wr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",b));const re=M.source;let le=h.get(re);le===void 0&&(le={},h.set(re,le));const Q=X(M);if(Q!==A.__cacheKey){le[Q]===void 0&&(le[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),le[Q].usedTimes++;const De=le[A.__cacheKey];De!==void 0&&(le[A.__cacheKey].usedTimes--,De.usedTimes===0&&x(M)),A.__cacheKey=Q,A.__webglTexture=le[Q].texture}return O}function Be(A,M,O){return Math.floor(Math.floor(A/O)/M)}function Ie(A,M,O,re){const Q=A.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,O,re,M.data);else{Q.sort((W,j)=>W.start-j.start);let De=0;for(let W=1;W<Q.length;W++){const j=Q[De],pe=Q[W],xe=j.start+j.count,ae=Be(pe.start,M.width,4),fe=Be(j.start,M.width,4);pe.start<=xe+1&&ae===fe&&Be(pe.start+pe.count-1,M.width,4)===ae?j.count=Math.max(j.count,pe.start+pe.count-j.start):(++De,Q[De]=pe)}Q.length=De+1;const N=t.getParameter(t.UNPACK_ROW_LENGTH),B=t.getParameter(t.UNPACK_SKIP_PIXELS),G=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let W=0,j=Q.length;W<j;W++){const pe=Q[W],xe=Math.floor(pe.start/4),ae=Math.ceil(pe.count/4),fe=xe%M.width,I=Math.floor(xe/M.width),ue=ae,ge=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,fe,I,ue,ge,O,re,M.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,N),t.pixelStorei(t.UNPACK_SKIP_PIXELS,B),t.pixelStorei(t.UNPACK_SKIP_ROWS,G)}}function K(A,M,O){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const le=Ue(A,M),Q=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+O);const De=i.get(Q);if(Q.version!==De.__version||le===!0){n.activeTexture(t.TEXTURE0+O);const N=at.getPrimaries(at.workingColorSpace),B=M.colorSpace===di?null:at.getPrimaries(M.colorSpace),G=M.colorSpace===di||N===B?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let W=S(M.image,!1,r.maxTextureSize);W=Ee(M,W);const j=s.convert(M.format,M.colorSpace),pe=s.convert(M.type);let xe=v(M.internalFormat,j,pe,M.colorSpace,M.isVideoTexture);ie(re,M);let ae;const fe=M.mipmaps,I=M.isVideoTexture!==!0,ue=De.__version===void 0||le===!0,ge=Q.dataReady,he=C(M,W);if(M.isDepthTexture)xe=E(M.format===na,M.type),ue&&(I?n.texStorage2D(t.TEXTURE_2D,1,xe,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,xe,W.width,W.height,0,j,pe,null));else if(M.isDataTexture)if(fe.length>0){I&&ue&&n.texStorage2D(t.TEXTURE_2D,he,xe,fe[0].width,fe[0].height);for(let ce=0,se=fe.length;ce<se;ce++)ae=fe[ce],I?ge&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,j,pe,ae.data):n.texImage2D(t.TEXTURE_2D,ce,xe,ae.width,ae.height,0,j,pe,ae.data);M.generateMipmaps=!1}else I?(ue&&n.texStorage2D(t.TEXTURE_2D,he,xe,W.width,W.height),ge&&Ie(M,W,j,pe)):n.texImage2D(t.TEXTURE_2D,0,xe,W.width,W.height,0,j,pe,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,xe,fe[0].width,fe[0].height,W.depth);for(let ce=0,se=fe.length;ce<se;ce++)if(ae=fe[ce],M.format!==ni)if(j!==null)if(I){if(ge)if(M.layerUpdates.size>0){const Pe=Om(ae.width,ae.height,M.format,M.type);for(const Xe of M.layerUpdates){const ut=ae.data.subarray(Xe*Pe/ae.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Xe,ae.width,ae.height,1,j,ut)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,W.depth,j,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,xe,ae.width,ae.height,W.depth,0,ae.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,W.depth,j,pe,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,xe,ae.width,ae.height,W.depth,0,j,pe,ae.data)}else{I&&ue&&n.texStorage2D(t.TEXTURE_2D,he,xe,fe[0].width,fe[0].height);for(let ce=0,se=fe.length;ce<se;ce++)ae=fe[ce],M.format!==ni?j!==null?I?ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,j,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,xe,ae.width,ae.height,0,ae.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ge&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,j,pe,ae.data):n.texImage2D(t.TEXTURE_2D,ce,xe,ae.width,ae.height,0,j,pe,ae.data)}else if(M.isDataArrayTexture)if(I){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,xe,W.width,W.height,W.depth),ge)if(M.layerUpdates.size>0){const ce=Om(W.width,W.height,M.format,M.type);for(const se of M.layerUpdates){const Pe=W.data.subarray(se*ce/W.data.BYTES_PER_ELEMENT,(se+1)*ce/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,W.width,W.height,1,j,pe,Pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,j,pe,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,W.width,W.height,W.depth,0,j,pe,W.data);else if(M.isData3DTexture)I?(ue&&n.texStorage3D(t.TEXTURE_3D,he,xe,W.width,W.height,W.depth),ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,j,pe,W.data)):n.texImage3D(t.TEXTURE_3D,0,xe,W.width,W.height,W.depth,0,j,pe,W.data);else if(M.isFramebufferTexture){if(ue)if(I)n.texStorage2D(t.TEXTURE_2D,he,xe,W.width,W.height);else{let ce=W.width,se=W.height;for(let Pe=0;Pe<he;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,xe,ce,se,0,j,pe,null),ce>>=1,se>>=1}}else if(fe.length>0){if(I&&ue){const ce=Se(fe[0]);n.texStorage2D(t.TEXTURE_2D,he,xe,ce.width,ce.height)}for(let ce=0,se=fe.length;ce<se;ce++)ae=fe[ce],I?ge&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,j,pe,ae):n.texImage2D(t.TEXTURE_2D,ce,xe,j,pe,ae);M.generateMipmaps=!1}else if(I){if(ue){const ce=Se(W);n.texStorage2D(t.TEXTURE_2D,he,xe,ce.width,ce.height)}ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,j,pe,W)}else n.texImage2D(t.TEXTURE_2D,0,xe,j,pe,W);g(M)&&u(re),De.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,O){if(M.image.length!==6)return;const re=Ue(A,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const Q=i.get(le);if(le.version!==Q.__version||re===!0){n.activeTexture(t.TEXTURE0+O);const De=at.getPrimaries(at.workingColorSpace),N=M.colorSpace===di?null:at.getPrimaries(M.colorSpace),B=M.colorSpace===di||De===N?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const G=M.isCompressedTexture||M.image[0].isCompressedTexture,W=M.image[0]&&M.image[0].isDataTexture,j=[];for(let se=0;se<6;se++)!G&&!W?j[se]=S(M.image[se],!0,r.maxCubemapSize):j[se]=W?M.image[se].image:M.image[se],j[se]=Ee(M,j[se]);const pe=j[0],xe=s.convert(M.format,M.colorSpace),ae=s.convert(M.type),fe=v(M.internalFormat,xe,ae,M.colorSpace),I=M.isVideoTexture!==!0,ue=Q.__version===void 0||re===!0,ge=le.dataReady;let he=C(M,pe);ie(t.TEXTURE_CUBE_MAP,M);let ce;if(G){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,fe,pe.width,pe.height);for(let se=0;se<6;se++){ce=j[se].mipmaps;for(let Pe=0;Pe<ce.length;Pe++){const Xe=ce[Pe];M.format!==ni?xe!==null?I?ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,xe,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,fe,Xe.width,Xe.height,0,Xe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Xe.width,Xe.height,xe,ae,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,fe,Xe.width,Xe.height,0,xe,ae,Xe.data)}}}else{if(ce=M.mipmaps,I&&ue){ce.length>0&&he++;const se=Se(j[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,fe,se.width,se.height)}for(let se=0;se<6;se++)if(W){I?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,j[se].width,j[se].height,xe,ae,j[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,j[se].width,j[se].height,0,xe,ae,j[se].data);for(let Pe=0;Pe<ce.length;Pe++){const ut=ce[Pe].image[se].image;I?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ut.width,ut.height,xe,ae,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,fe,ut.width,ut.height,0,xe,ae,ut.data)}}else{I?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe,ae,j[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,xe,ae,j[se]);for(let Pe=0;Pe<ce.length;Pe++){const Xe=ce[Pe];I?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,xe,ae,Xe.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,fe,xe,ae,Xe.image[se])}}}g(M)&&u(t.TEXTURE_CUBE_MAP),Q.__version=le.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _e(A,M,O,re,le,Q){const De=s.convert(O.format,O.colorSpace),N=s.convert(O.type),B=v(O.internalFormat,De,N,O.colorSpace),G=i.get(M),W=i.get(O);if(W.__renderTarget=M,!G.__hasExternalTextures){const j=Math.max(1,M.width>>Q),pe=Math.max(1,M.height>>Q);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Q,B,j,pe,M.depth,0,De,N,null):n.texImage2D(le,Q,B,j,pe,0,De,N,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),de(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,le,W.__webglTexture,0,qe(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,le,W.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(A,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const re=M.depthTexture,le=re&&re.isDepthTexture?re.type:null,Q=E(M.stencilBuffer,le),De=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=qe(M);de(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,Q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,N,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,A)}else{const re=M.textures;for(let le=0;le<re.length;le++){const Q=re[le],De=s.convert(Q.format,Q.colorSpace),N=s.convert(Q.type),B=v(Q.internalFormat,De,N,Q.colorSpace),G=qe(M);O&&de(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,G,B,M.width,M.height):de(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,B,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,B,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(M.depthTexture);re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const le=re.__webglTexture,Q=qe(M);if(M.depthTexture.format===uo)de(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(M.depthTexture.format===na)de(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Te(A){const M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=re}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const re=A.texture.mipmaps;re&&re.length>0?ye(M.__webglFramebuffer[0],A):ye(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=t.createRenderbuffer(),me(M.__webglDepthbuffer[re],A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}else{const re=A.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),me(M.__webglDepthbuffer,A,!1);else{const le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(A,M,O){const re=i.get(A);M!==void 0&&_e(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Te(A)}function Ae(A){const M=A.texture,O=i.get(A),re=i.get(M);A.addEventListener("dispose",R);const le=A.textures,Q=A.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[N]=[];for(let B=0;B<M.mipmaps.length;B++)O.__webglFramebuffer[N][B]=t.createFramebuffer()}else O.__webglFramebuffer[N]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let N=0;N<M.mipmaps.length;N++)O.__webglFramebuffer[N]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(De)for(let N=0,B=le.length;N<B;N++){const G=i.get(le[N]);G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let N=0;N<le.length;N++){const B=le[N];O.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[N]);const G=s.convert(B.format,B.colorSpace),W=s.convert(B.type),j=v(B.internalFormat,G,W,B.colorSpace,A.isXRRenderTarget===!0),pe=qe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,j,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,O.__webglColorRenderbuffer[N])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),me(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)_e(O.__webglFramebuffer[N][B],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,B);else _e(O.__webglFramebuffer[N],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);g(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let N=0,B=le.length;N<B;N++){const G=le[N],W=i.get(G);let j=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,W.__webglTexture),ie(j,G),_e(O.__webglFramebuffer,A,G,t.COLOR_ATTACHMENT0+N,j,0),g(G)&&u(j)}n.unbindTexture()}else{let N=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(N=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(N,re.__webglTexture),ie(N,M),M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)_e(O.__webglFramebuffer[B],A,M,t.COLOR_ATTACHMENT0,N,B);else _e(O.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,N,0);g(M)&&u(N),n.unbindTexture()}A.depthBuffer&&Te(A)}function We(A){const M=A.textures;for(let O=0,re=M.length;O<re;O++){const le=M[O];if(g(le)){const Q=m(A),De=i.get(le).__webglTexture;n.bindTexture(Q,De),u(Q),n.unbindTexture()}}}const L=[],Ce=[];function Oe(A){if(A.samples>0){if(de(A)===!1){const M=A.textures,O=A.width,re=A.height;let le=t.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(A),N=M.length>1;if(N)for(let G=0;G<M.length;G++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const B=A.texture.mipmaps;B&&B.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let G=0;G<M.length;G++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),N){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const W=i.get(M[G]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,W,0)}t.blitFramebuffer(0,0,O,re,0,0,O,re,le,t.NEAREST),l===!0&&(L.length=0,Ce.length=0,L.push(t.COLOR_ATTACHMENT0+G),A.depthBuffer&&A.resolveDepthBuffer===!1&&(L.push(Q),Ce.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),N)for(let G=0;G<M.length;G++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,De.__webglColorRenderbuffer[G]);const W=i.get(M[G]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(A){return Math.min(r.maxSamples,A.samples)}function de(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(A){const M=a.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function Ee(A,M){const O=A.colorSpace,re=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==yr&&O!==di&&(at.getTransfer(O)===pt?(re!==ni||le!==In)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",O)),M}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=Ve,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=de}function _w(t,e){function n(i,r=di){let s;const a=at.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ev)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qg)return t.BYTE;if(i===Jg)return t.SHORT;if(i===co)return t.UNSIGNED_SHORT;if(i===Ah)return t.INT;if(i===_r)return t.UNSIGNED_INT;if(i===Li)return t.FLOAT;if(i===la)return t.HALF_FLOAT;if(i===nv)return t.ALPHA;if(i===iv)return t.RGB;if(i===ni)return t.RGBA;if(i===uo)return t.DEPTH_COMPONENT;if(i===na)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===Ph)return t.RED_INTEGER;if(i===Dh)return t.RG;if(i===Lh)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===El||i===Tl||i===bl||i===wl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===$f||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qf||i===Jf||i===ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qf||i===Jf)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ed)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===td||i===nd||i===id||i===rd||i===sd||i===ad||i===od||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===td)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===id)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ad)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ld)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===md||i===xd||i===gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===md)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===_d||i===yd||i===Sd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
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

}`;class Mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new gv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Nn({vertexShader:yw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ew extends Tr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",g=new Mw,u={},m=n.getContextAttributes();let v=null,E=null;const C=[],b=[],R=new Ze;let T=null;const x=new Vn;x.viewport=new Lt;const y=new Vn;y.viewport=new Lt;const P=[x,y],F=new VM;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=C[K];return te===void 0&&(te=new bu,C[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=C[K];return te===void 0&&(te=new bu,C[K]=te),te.getGripSpace()},this.getHand=function(K){let te=C[K];return te===void 0&&(te=new bu,C[K]=te),te.getHandSpace()};function ee(K){const te=b.indexOf(K.inputSource);if(te===-1)return;const _e=C[te];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let K=0;K<C.length;K++){const te=b[K];te!==null&&(b[K]=null,C[K].disconnect(te))}k=null,X=null,g.reset();for(const K in u)delete u[K];e.setRenderTarget(v),p=null,h=null,d=null,r=null,E=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,me=null,ye=null;m.depth&&(ye=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=m.stencil?na:uo,me=m.stencil?ta:_r);const Te={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new oi(h.textureWidth,h.textureHeight,{format:ni,type:In,depthTexture:new Fh(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new oi(p.framebufferWidth,p.framebufferHeight,{format:ni,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let te=0;te<K.removed.length;te++){const _e=K.removed[te],me=b.indexOf(_e);me>=0&&(b[me]=null,C[me].disconnect(_e))}for(let te=0;te<K.added.length;te++){const _e=K.added[te];let me=b.indexOf(_e);if(me===-1){for(let Te=0;Te<C.length;Te++)if(Te>=b.length){b.push(_e),me=Te;break}else if(b[Te]===null){b[Te]=_e,me=Te;break}if(me===-1)break}const ye=C[me];ye&&ye.connect(_e)}}const D=new ne,U=new ne;function Y(K,te,_e){D.setFromMatrixPosition(te.matrixWorld),U.setFromMatrixPosition(_e.matrixWorld);const me=D.distanceTo(U),ye=te.projectionMatrix.elements,Te=_e.projectionMatrix.elements,Ve=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),We=(ye[9]+1)/ye[5],L=(ye[9]-1)/ye[5],Ce=(ye[8]-1)/ye[0],Oe=(Te[8]+1)/Te[0],qe=Ve*Ce,de=Ve*Oe,ke=me/(-Ce+Oe),Ee=ke*-Ce;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=Ve+ke,A=Ae+ke,M=qe-Ee,O=de+(me-Ee),re=We*Ae/A*Se,le=L*Ae/A*Se;K.projectionMatrix.makePerspective(M,O,re,le,Se,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),F.near=y.near=x.near=te,F.far=y.far=x.far=_e,(k!==F.near||X!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,X=F.far),F.layers.mask=K.layers.mask|6,x.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const me=K.parent,ye=F.cameras;oe(F,me);for(let Te=0;Te<ye.length;Te++)oe(ye[Te],me);ye.length===2?Y(F,x,y):F.projectionMatrix.copy(x.projectionMatrix),ie(K,F,me)};function ie(K,te,_e){_e===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ed*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return u[K]};let Ue=null;function Be(K,te){if(f=te.getViewerPose(c||a),_=te,f!==null){const _e=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let me=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let Ae=0;Ae<_e.length;Ae++){const We=_e[Ae];let L=null;if(p!==null)L=p.getViewport(We);else{const Oe=d.getViewSubImage(h,We);L=Oe.viewport,Ae===0&&(e.setRenderTargetTextures(E,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(E))}let Ce=P[Ae];Ce===void 0&&(Ce=new Vn,Ce.layers.enable(Ae),Ce.viewport=new Lt,P[Ae]=Ce),Ce.matrix.fromArray(We.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(We.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(L.x,L.y,L.width,L.height),Ae===0&&(F.matrix.copy(Ce.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(Ce)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Ae=d.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(Ae,r.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let Ae=0;Ae<_e.length;Ae++){const We=_e[Ae].camera;if(We){let L=u[We];L||(L=new gv,u[We]=L);const Ce=d.getCameraImage(We);L.sourceTexture=Ce}}}}for(let _e=0;_e<C.length;_e++){const me=b[_e],ye=C[_e];me!==null&&ye!==void 0&&ye.update(me,te,c||a)}Ue&&Ue(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ie=new vv;Ie.setAnimationLoop(Be),this.setAnimationLoop=function(K){Ue=K},this.dispose=function(){}}}const Nr=new zi,Tw=new Bt;function bw(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,hv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,E)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),S(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,m,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Xt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Xt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,E=m.envMapRotation;v&&(g.envMap.value=v,Nr.copy(E),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(Nr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ww(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const E=v.program;i.uniformBlockBinding(m,E)}function c(m,v){let E=r[m.id];E===void 0&&(_(m),E=f(m),r[m.id]=E,m.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(m,C);const b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function f(m){const v=d();m.__bindingPointIndex=v;const E=t.createBuffer(),C=m.__size,b=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function d(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],E=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,R=E.length;b<R;b++){const T=Array.isArray(E[b])?E[b]:[E[b]];for(let x=0,y=T.length;x<y;x++){const P=T[x];if(p(P,b,x,C)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let ee=0;ee<k.length;ee++){const q=k[ee],$=S(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,F+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,v,E,C){const b=m.value,R=v+"_"+E;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const T=C[R];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return C[R]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function _(m){const v=m.uniforms;let E=0;const C=16;for(let R=0,T=v.length;R<T;R++){const x=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,P=x.length;y<P;y++){const F=x[y],k=Array.isArray(F.value)?F.value:[F.value];for(let X=0,ee=k.length;X<ee;X++){const q=k[X],$=S(q),D=E%C,U=D%$.boundary,Y=D+U;E+=U,Y!==0&&C-Y<$.storage&&(E+=C-Y),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const b=E%C;return b>0&&(E+=C-b),m.__size=E,m.__cache={},this}function S(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const Aw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ti=null;function Rw(){return Ti===null&&(Ti=new UM(Aw,32,32,Dh,la),Ti.minFilter=jt,Ti.magFilter=jt,Ti.wrapS=Di,Ti.wrapT=Di,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Cw{constructor(e={}){const{canvas:n=oM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Set([Ih,Lh,Ph]),S=new Set([In,_r,co,ta,Rh,Ch]),g=new Uint32Array(4),u=new Int32Array(4);let m=null,v=null;const E=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1;this._outputColorSpace=Ct;let T=0,x=0,y=null,P=-1,F=null;const k=new Lt,X=new Lt;let ee=null;const q=new ft(0);let $=0,D=n.width,U=n.height,Y=1,oe=null,ie=null;const Ue=new Lt(0,0,D,U),Be=new Lt(0,0,D,U);let Ie=!1;const K=new xv;let te=!1,_e=!1;const me=new Bt,ye=new ne,Te=new Lt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function We(){return y===null?Y:1}let L=i;function Ce(w,V){return n.getContext(w,V)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ec}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const V="webgl2";if(L=Ce(V,w),L===null)throw Ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Oe,qe,de,ke,Ee,Se,A,M,O,re,le,Q,De,N,B,G,W,j,pe,xe,ae,fe,I,ue;function ge(){Oe=new OT(L),Oe.init(),fe=new _w(L,Oe),qe=new RT(L,Oe,e,fe),de=new gw(L,Oe),qe.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),ke=new zT(L),Ee=new rw,Se=new vw(L,Oe,de,Ee,qe,fe,ke),A=new PT(b),M=new FT(b),O=new WM(L),I=new wT(L,O),re=new kT(L,O,ke,I),le=new HT(L,re,O,ke),pe=new VT(L,qe,Se),G=new CT(Ee),Q=new iw(b,A,M,Oe,qe,I,G),De=new bw(b,Ee),N=new aw,B=new dw(Oe),j=new bT(b,A,M,de,le,p,l),W=new mw(b,le,qe),ue=new ww(L,ke,qe,de),xe=new AT(L,Oe,ke),ae=new BT(L,Oe,ke),ke.programs=Q.programs,b.capabilities=qe,b.extensions=Oe,b.properties=Ee,b.renderLists=N,b.shadowMap=W,b.state=de,b.info=ke}ge();const he=new Ew(b,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(D,U,!1))},this.getSize=function(w){return w.set(D,U)},this.setSize=function(w,V,Z=!0){if(he.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,U=V,n.width=Math.floor(w*Y),n.height=Math.floor(V*Y),Z===!0&&(n.style.width=w+"px",n.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(D*Y,U*Y).floor()},this.setDrawingBufferSize=function(w,V,Z){D=w,U=V,Y=Z,n.width=Math.floor(w*Z),n.height=Math.floor(V*Z),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,V,Z,J){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,V,Z,J),de.viewport(k.copy(Ue).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,V,Z,J){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,V,Z,J),de.scissor(X.copy(Be).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){de.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Z=!0){let J=0;if(w){let H=!1;if(y!==null){const Me=y.texture.format;H=_.has(Me)}if(H){const Me=y.texture.type,Re=S.has(Me),Fe=j.getClearColor(),Ne=j.getClearAlpha(),Ge=Fe.r,je=Fe.g,ze=Fe.b;Re?(g[0]=Ge,g[1]=je,g[2]=ze,g[3]=Ne,L.clearBufferuiv(L.COLOR,0,g)):(u[0]=Ge,u[1]=je,u[2]=ze,u[3]=Ne,L.clearBufferiv(L.COLOR,0,u))}else J|=L.COLOR_BUFFER_BIT}V&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),j.dispose(),N.dispose(),B.dispose(),Ee.dispose(),A.dispose(),M.dispose(),le.dispose(),I.dispose(),ue.dispose(),Q.dispose(),he.dispose(),he.removeEventListener("sessionstart",is),he.removeEventListener("sessionend",wr),lt.stop()};function ce(w){w.preventDefault(),ym("WebGLRenderer: Context Lost."),R=!0}function se(){ym("WebGLRenderer: Context Restored."),R=!1;const w=ke.autoReset,V=W.enabled,Z=W.autoUpdate,J=W.needsUpdate,H=W.type;ge(),ke.autoReset=w,W.enabled=V,W.autoUpdate=Z,W.needsUpdate=J,W.type=H}function Pe(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){const V=w.target;V.removeEventListener("dispose",Xe),ut(V)}function ut(w){Qe(w),Ee.remove(w)}function Qe(w){const V=Ee.get(w).programs;V!==void 0&&(V.forEach(function(Z){Q.releaseProgram(Z)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Z,J,H,Me){V===null&&(V=Ve);const Re=H.isMesh&&H.matrixWorld.determinant()<0,Fe=wv(w,V,Z,J,H);de.setMaterial(J,Re);let Ne=Z.index,Ge=1;if(J.wireframe===!0){if(Ne=re.getWireframeAttribute(Z),Ne===void 0)return;Ge=2}const je=Z.drawRange,ze=Z.attributes.position;let Je=je.start*Ge,ht=(je.start+je.count)*Ge;Me!==null&&(Je=Math.max(Je,Me.start*Ge),ht=Math.min(ht,(Me.start+Me.count)*Ge)),Ne!==null?(Je=Math.max(Je,0),ht=Math.min(ht,Ne.count)):ze!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,ze.count));const bt=ht-Je;if(bt<0||bt===1/0)return;I.setup(H,J,Fe,Z,Ne);let wt,mt=xe;if(Ne!==null&&(wt=O.get(Ne),mt=ae,mt.setIndex(wt)),H.isMesh)J.wireframe===!0?(de.setLineWidth(J.wireframeLinewidth*We()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(H.isLine){let He=J.linewidth;He===void 0&&(He=1),de.setLineWidth(He*We()),H.isLineSegments?mt.setMode(L.LINES):H.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else H.isPoints?mt.setMode(L.POINTS):H.isSprite&&mt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const He=H._multiDrawStarts,yt=H._multiDrawCounts,st=H._multiDrawCount,Mn=Ne?O.get(Ne).bytesPerElement:1,as=Ee.get(J).currentProgram.getUniforms();for(let En=0;En<st;En++)as.setValue(L,"_gl_DrawID",En),mt.render(He[En]/Mn,yt[En])}else if(H.isInstancedMesh)mt.renderInstances(Je,bt,H.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,He);mt.renderInstances(Je,bt,yt)}else mt.render(Je,bt)};function an(w,V,Z){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,Ar(w,V,Z),w.side=Bi,w.needsUpdate=!0,Ar(w,V,Z),w.side=An):Ar(w,V,Z)}this.compile=function(w,V,Z=null){Z===null&&(Z=w),v=B.get(Z),v.init(V),C.push(v),Z.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),w!==Z&&w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights();const J=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Me=H.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Fe=Me[Re];an(Fe,Z,H),J.add(Fe)}else an(Me,Z,H),J.add(Me)}),v=C.pop(),J},this.compileAsync=function(w,V,Z=null){const J=this.compile(w,V,Z);return new Promise(H=>{function Me(){if(J.forEach(function(Re){Ee.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){H(w);return}setTimeout(Me,10)}Oe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let on=null;function fa(w){on&&on(w)}function is(){lt.stop()}function wr(){lt.start()}const lt=new vv;lt.setAnimationLoop(fa),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(w){on=w,he.setAnimationLoop(w),w===null?lt.stop():lt.start()},he.addEventListener("sessionstart",is),he.addEventListener("sessionend",wr),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,V,y),v=B.get(w,C.length),v.init(V),C.push(v),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(me,hi,V.reversedDepth),_e=this.localClippingEnabled,te=G.init(this.clippingPlanes,_e),m=N.get(w,E.length),m.init(),E.push(m),he.enabled===!0&&he.isPresenting===!0){const Me=b.xr.getDepthSensingMesh();Me!==null&&Qt(Me,V,-1/0,b.sortObjects)}Qt(w,V,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(oe,ie),Ae=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ae&&j.addToRenderList(m,w),this.info.render.frame++,te===!0&&G.beginShadows();const Z=v.state.shadowsArray;W.render(Z,w,V),te===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(v.setupLights(),V.isArrayCamera){const Me=V.cameras;if(H.length>0)for(let Re=0,Fe=Me.length;Re<Fe;Re++){const Ne=Me[Re];rs(J,H,w,Ne)}Ae&&j.render(w);for(let Re=0,Fe=Me.length;Re<Fe;Re++){const Ne=Me[Re];vi(m,w,Ne,Ne.viewport)}}else H.length>0&&rs(J,H,w,V),Ae&&j.render(w),vi(m,w,V);y!==null&&x===0&&(Se.updateMultisampleRenderTarget(y),Se.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(b,w,V),I.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(v=C[C.length-1],te===!0&&G.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qt(w,V,Z,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){J&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const Re=le.update(w),Fe=w.material;Fe.visible&&m.push(w,Re,Fe,Z,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Re=le.update(w),Fe=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Te.copy(Re.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){const Ne=Re.groups;for(let Ge=0,je=Ne.length;Ge<je;Ge++){const ze=Ne[Ge],Je=Fe[ze.materialIndex];Je&&Je.visible&&m.push(w,Re,Je,Z,Te.z,ze)}}else Fe.visible&&m.push(w,Re,Fe,Z,Te.z,null)}}const Me=w.children;for(let Re=0,Fe=Me.length;Re<Fe;Re++)Qt(Me[Re],V,Z,J)}function vi(w,V,Z,J){const{opaque:H,transmissive:Me,transparent:Re}=w;v.setupLightsView(Z),te===!0&&G.setGlobalState(b.clippingPlanes,Z),J&&de.viewport(k.copy(J)),H.length>0&&Ht(H,V,Z),Me.length>0&&Ht(Me,V,Z),Re.length>0&&Ht(Re,V,Z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function rs(w,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new oi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?la:In,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Me=v.state.transmissionRenderTarget[J.id],Re=J.viewport||k;Me.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),Ne=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Me),b.getClearColor(q),$=b.getClearAlpha(),$<1&&b.setClearColor(16777215,.5),b.clear(),Ae&&j.render(Z);const je=b.toneMapping;b.toneMapping=xr;const ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),te===!0&&G.setGlobalState(b.clippingPlanes,J),Ht(w,Z,J),Se.updateMultisampleRenderTarget(Me),Se.updateRenderTargetMipmap(Me),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,bt=V.length;ht<bt;ht++){const wt=V[ht],{object:mt,geometry:He,material:yt,group:st}=wt;if(yt.side===An&&mt.layers.test(J.layers)){const Mn=yt.side;yt.side=Xt,yt.needsUpdate=!0,ss(mt,Z,J,He,yt,st),yt.side=Mn,yt.needsUpdate=!0,Je=!0}}Je===!0&&(Se.updateMultisampleRenderTarget(Me),Se.updateRenderTargetMipmap(Me))}b.setRenderTarget(Fe,Ne,Ge),b.setClearColor(q,$),ze!==void 0&&(J.viewport=ze),b.toneMapping=je}function Ht(w,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let H=0,Me=w.length;H<Me;H++){const Re=w[H],{object:Fe,geometry:Ne,group:Ge}=Re;let je=Re.material;je.allowOverride===!0&&J!==null&&(je=J),Fe.layers.test(Z.layers)&&ss(Fe,V,Z,Ne,je,Ge)}}function ss(w,V,Z,J,H,Me){w.onBeforeRender(b,V,Z,J,H,Me),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(b,V,Z,J,w,Me),H.transparent===!0&&H.side===An&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,b.renderBufferDirect(Z,V,J,H,w,Me),H.side=Bi,H.needsUpdate=!0,b.renderBufferDirect(Z,V,J,H,w,Me),H.side=An):b.renderBufferDirect(Z,V,J,H,w,Me),w.onAfterRender(b,V,Z,J,H,Me)}function Ar(w,V,Z){V.isScene!==!0&&(V=Ve);const J=Ee.get(w),H=v.state.lights,Me=v.state.shadowsArray,Re=H.state.version,Fe=Q.getParameters(w,H.state,Me,V,Z),Ne=Q.getProgramCacheKey(Fe);let Ge=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?M:A).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",Xe),Ge=new Map,J.programs=Ge);let je=Ge.get(Ne);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Re)return Bh(w,Fe),je}else Fe.uniforms=Q.getUniforms(w),w.onBeforeCompile(Fe,b),je=Q.acquireProgram(Fe,Ne),Ge.set(Ne,je),J.uniforms=Fe.uniforms;const ze=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=G.uniform),Bh(w,Fe),J.needsLights=Rv(w),J.lightsStateVersion=Re,J.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function wo(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Al.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Bh(w,V){const Z=Ee.get(w);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function wv(w,V,Z,J,H){V.isScene!==!0&&(V=Ve),Se.resetTextureUnits();const Me=V.fog,Re=J.isMeshStandardMaterial?V.environment:null,Fe=y===null?b.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:yr,Ne=(J.isMeshStandardMaterial?M:A).get(J.envMap||Re),Ge=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,je=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let bt=xr;J.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(bt=b.toneMapping);const wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=wt!==void 0?wt.length:0,He=Ee.get(J),yt=v.state.lights;if(te===!0&&(_e===!0||w!==F)){const ln=w===F&&J.id===P;G.setState(J,w,ln)}let st=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yt.state.version||He.outputColorSpace!==Fe||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Ne||J.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==G.numPlanes||He.numIntersection!==G.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==je||He.morphTargets!==ze||He.morphNormals!==Je||He.morphColors!==ht||He.toneMapping!==bt||He.morphTargetsCount!==mt)&&(st=!0):(st=!0,He.__version=J.version);let Mn=He.currentProgram;st===!0&&(Mn=Ar(J,V,H));let as=!1,En=!1,da=!1;const St=Mn.getUniforms(),pn=He.uniforms;if(de.useProgram(Mn.program)&&(as=!0,En=!0,da=!0),J.id!==P&&(P=J.id,En=!0),as||F!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",w.projectionMatrix),St.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=St.map.cameraPosition;mn!==void 0&&mn.setValue(L,ye.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,En=!0,da=!0)}if(H.isSkinnedMesh){St.setOptional(L,H,"bindMatrix"),St.setOptional(L,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),St.setValue(L,"boneTexture",ln.boneTexture,Se))}H.isBatchedMesh&&(St.setOptional(L,H,"batchingTexture"),St.setValue(L,"batchingTexture",H._matricesTexture,Se),St.setOptional(L,H,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",H._indirectTexture,Se),St.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",H._colorsTexture,Se));const On=Z.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&pe.update(H,Z,Mn),(En||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,St.setValue(L,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pn.envMap.value=Ne,pn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(pn.envMapIntensity.value=V.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=Rw()),En&&(St.setValue(L,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&Av(pn,da),Me&&J.fog===!0&&De.refreshFogUniforms(pn,Me),De.refreshMaterialUniforms(pn,J,Y,U,v.state.transmissionRenderTarget[w.id]),Al.upload(L,wo(He),pn,Se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Al.upload(L,wo(He),pn,Se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(L,"center",H.center),St.setValue(L,"modelViewMatrix",H.modelViewMatrix),St.setValue(L,"normalMatrix",H.normalMatrix),St.setValue(L,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let mn=0,Ac=ln.length;mn<Ac;mn++){const Rr=ln[mn];ue.update(Rr,Mn),ue.bind(Rr,Mn)}}return Mn}function Av(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Rv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,V,Z){const J=Ee.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ee.get(w.texture).__webglTexture=V,Ee.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Z=Ee.get(w);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const Cv=L.createFramebuffer();this.setRenderTarget=function(w,V=0,Z=0){y=w,T=V,x=Z;let J=!0,H=null,Me=!1,Re=!1;if(w){const Ne=Ee.get(w);if(Ne.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ne.__webglFramebuffer===void 0)Se.setupRenderTarget(w);else if(Ne.__hasExternalTextures)Se.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&Ee.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const je=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[V])?H=je[V][Z]:H=je[V],Me=!0):w.samples>0&&Se.useMultisampledRTT(w)===!1?H=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[Z]:H=je,k.copy(w.viewport),X.copy(w.scissor),ee=w.scissorTest}else k.copy(Ue).multiplyScalar(Y).floor(),X.copy(Be).multiplyScalar(Y).floor(),ee=Ie;if(Z!==0&&(H=Cv),de.bindFramebuffer(L.FRAMEBUFFER,H)&&J&&de.drawBuffers(w,H),de.viewport(k),de.scissor(X),de.setScissorTest(ee),Me){const Ne=Ee.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,Z)}else if(Re){const Ne=V;for(let Ge=0;Ge<w.textures.length;Ge++){const je=Ee.get(w.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,je.__webglTexture,Z,Ne)}}else if(w!==null&&Z!==0){const Ne=Ee.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(w,V,Z,J,H,Me,Re,Fe=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){de.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Ge=w.textures[Fe],je=Ge.format,ze=Ge.type;if(!qe.textureFormatReadable(je)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ze)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&Z>=0&&Z<=w.height-H&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(V,Z,J,H,fe.convert(je),fe.convert(ze),Me))}finally{const Ge=y!==null?Ee.get(y).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,V,Z,J,H,Me,Re,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(V>=0&&V<=w.width-J&&Z>=0&&Z<=w.height-H){de.bindFramebuffer(L.FRAMEBUFFER,Ne);const Ge=w.textures[Fe],je=Ge.format,ze=Ge.type;if(!qe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(V,Z,J,H,fe.convert(je),fe.convert(ze),0);const ht=y!==null?Ee.get(y).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,ht);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lM(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Je),L.deleteSync(bt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Z=0){const J=Math.pow(2,-Z),H=Math.floor(w.image.width*J),Me=Math.floor(w.image.height*J),Re=V!==null?V.x:0,Fe=V!==null?V.y:0;Se.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Re,Fe,H,Me),de.unbindTexture()};const Pv=L.createFramebuffer(),Dv=L.createFramebuffer();this.copyTextureToTexture=function(w,V,Z=null,J=null,H=0,Me=null){Me===null&&(H!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=H,H=0):Me=0);let Re,Fe,Ne,Ge,je,ze,Je,ht,bt;const wt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(Z!==null)Re=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,je=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const On=Math.pow(2,-H);Re=Math.floor(wt.width*On),Fe=Math.floor(wt.height*On),w.isDataArrayTexture?Ne=wt.depth:w.isData3DTexture?Ne=Math.floor(wt.depth*On):Ne=1,Ge=0,je=0,ze=0}J!==null?(Je=J.x,ht=J.y,bt=J.z):(Je=0,ht=0,bt=0);const mt=fe.convert(V.format),He=fe.convert(V.type);let yt;V.isData3DTexture?(Se.setTexture3D(V,0),yt=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Se.setTexture2DArray(V,0),yt=L.TEXTURE_2D_ARRAY):(Se.setTexture2D(V,0),yt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),Mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),as=L.getParameter(L.UNPACK_SKIP_PIXELS),En=L.getParameter(L.UNPACK_SKIP_ROWS),da=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const St=w.isDataArrayTexture||w.isData3DTexture,pn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const On=Ee.get(w),ln=Ee.get(V),mn=Ee.get(On.__renderTarget),Ac=Ee.get(ln.__renderTarget);de.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ac.__webglFramebuffer);for(let Rr=0;Rr<Ne;Rr++)St&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,H,ze+Rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(V).__webglTexture,Me,bt+Rr)),L.blitFramebuffer(Ge,je,Re,Fe,Je,ht,Re,Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||Ee.has(w)){const On=Ee.get(w),ln=Ee.get(V);de.bindFramebuffer(L.READ_FRAMEBUFFER,Pv),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dv);for(let mn=0;mn<Ne;mn++)St?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,On.__webglTexture,H,ze+mn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,On.__webglTexture,H),pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,Me,bt+mn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,Me),H!==0?L.blitFramebuffer(Ge,je,Re,Fe,Je,ht,Re,Fe,L.COLOR_BUFFER_BIT,L.NEAREST):pn?L.copyTexSubImage3D(yt,Me,Je,ht,bt+mn,Ge,je,Re,Fe):L.copyTexSubImage2D(yt,Me,Je,ht,Ge,je,Re,Fe);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,Me,Je,ht,bt,Re,Fe,Ne,mt,He,wt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,Me,Je,ht,bt,Re,Fe,Ne,mt,wt.data):L.texSubImage3D(yt,Me,Je,ht,bt,Re,Fe,Ne,mt,He,wt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Je,ht,Re,Fe,mt,He,wt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Je,ht,wt.width,wt.height,mt,wt.data):L.texSubImage2D(L.TEXTURE_2D,Me,Je,ht,Re,Fe,mt,He,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,as),L.pixelStorei(L.UNPACK_SKIP_ROWS,En),L.pixelStorei(L.UNPACK_SKIP_IMAGES,da),Me===0&&V.generateMipmaps&&L.generateMipmap(yt),de.unbindTexture()},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&Se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Se.setTextureCube(w,0):w.isData3DTexture?Se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Se.setTexture2DArray(w,0):Se.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){T=0,x=0,y=null,de.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}/**
 * postprocessing v6.38.0 build Sat Nov 08 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Lu=1/1e3,Pw=1e3,Dw=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Lu}get fixedDelta(){return this._fixedDelta*Lu}set fixedDelta(t){this._fixedDelta=t*Pw}get elapsed(){return this._elapsed*Lu}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Lw=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Gi;return n.setAttribute("position",new Wn(t,3)),n.setAttribute("uv",new Wn(e,2)),n})(),br=class wd{static get fullscreenGeometry(){return Lw}constructor(e="Pass",n=new Td,i=new Oh){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new xi(wd.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Td),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=yo){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof oi||n instanceof ca||n instanceof Yt||n instanceof wd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Iw=class extends br{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Nw=`#ifdef COLOR_WRITE
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
}`,Uw="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Fw=class extends Nn{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Rt(null),depthBuffer:new Rt(null),channelWeights:new Rt(null),opacity:new Rt(1)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Nw,vertexShader:Uw}),this.depthFunc=ec}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},Ow=class extends br{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Fw,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new oi(1,1,{minFilter:jt,magFilter:jt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==In?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Ct&&(this.renderTarget.texture.colorSpace=Ct))}},o0=new ft,Ev=class extends br{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor(o0),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(o0,o):c&&t.setClearAlpha(o)}},kw=class extends br{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new Ev(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,f=this.inverted?0:1,d=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,f,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},l0=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Ow,this.depthTexture=null,this.passes=[],this.timer=new Dw,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new Ze),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===In&&t.outputColorSpace===Ct&&(this.inputBuffer.texture.colorSpace=Ct,this.outputBuffer.texture.colorSpace=Ct,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.depthTexture=new Fh;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=na,t.type=ta):t.type=_r,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new Ze:r.getDrawingBufferSize(new Ze),a={minFilter:jt,magFilter:jt,stencilBuffer:e,depthBuffer:t,type:n},o=new oi(s.width,s.height,a);return i>0&&(o.samples=i),n===In&&r!==null&&r.outputColorSpace===Ct&&(o.texture.colorSpace=Ct),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Ze),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else t.setDepthTexture(this.depthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,r,t,s),c.needsSwap&&(s&&(n.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),n.render(e,i,r,t,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),c instanceof kw?s=!0:c instanceof Iw&&(s=!1))}setSize(t,e,n){const i=this.renderer,r=i.getSize(new Ze);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new Ze);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),br.fullscreenGeometry.dispose()}},Yr={NONE:0,DEPTH:1,CONVOLUTION:2},ot={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Bw=class{constructor(){this.shaderParts=new Map([[ot.FRAGMENT_HEAD,null],[ot.FRAGMENT_MAIN_UV,null],[ot.FRAGMENT_MAIN_IMAGE,null],[ot.VERTEX_HEAD,null],[ot.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Yr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=yr}},Iu=!1,c0=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case An:n=this.materialsFlatShadedDoubleSide;break;case Xt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case An:n=this.materialsDoubleSide;break;case Xt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Nn))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Bi;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Xt,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=An,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Xt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=An,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,Iu){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Iu}static set workaroundEnabled(t){Iu=t}},it={SKIP:9,SET:30,ADD:0,ALPHA:23,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},zw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",Vw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",Hw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",Gw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",Ww="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",Xw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",jw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",qw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",Yw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",$w="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",Kw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",Zw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",Qw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",Jw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",e2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",t2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",n2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",i2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",r2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",s2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",a2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",o2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",l2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",c2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",u2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",f2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",d2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",h2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",p2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",m2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",x2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",g2=new Map([[it.ADD,zw],[it.AVERAGE,Vw],[it.COLOR,Hw],[it.COLOR_BURN,Gw],[it.COLOR_DODGE,Ww],[it.DARKEN,Xw],[it.DIFFERENCE,jw],[it.DIVIDE,qw],[it.DST,null],[it.EXCLUSION,Yw],[it.HARD_LIGHT,$w],[it.HARD_MIX,Kw],[it.HUE,Zw],[it.INVERT,Qw],[it.INVERT_RGB,Jw],[it.LIGHTEN,e2],[it.LINEAR_BURN,t2],[it.LINEAR_DODGE,n2],[it.LINEAR_LIGHT,i2],[it.LUMINOSITY,r2],[it.MULTIPLY,s2],[it.NEGATION,a2],[it.NORMAL,o2],[it.OVERLAY,l2],[it.PIN_LIGHT,c2],[it.REFLECT,u2],[it.SATURATION,f2],[it.SCREEN,d2],[it.SOFT_LIGHT,h2],[it.SRC,p2],[it.SUBTRACT,m2],[it.VIVID_LIGHT,x2]]),v2=class extends Tr{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Rt(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return g2.get(this.blendFunction)}},Tv=class extends Tr{constructor(t,e,{attributes:n=Yr.NONE,blendFunction:i=it.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new v2(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=yr,this._outputColorSpace=di}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=yo){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof oi||e instanceof ca||e instanceof Yt||e instanceof br)&&this[t].dispose()}}},u0=class extends br{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new Ev,this.overrideMaterialManager=n===null?null:new c0(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new c0(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,f=t.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=f}},_2=`#include <common>
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
}`,y2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",S2=class extends Nn{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ec.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Rt(null),depthBuffer:new Rt(null),resolution:new Rt(new Ze),texelSize:new Rt(new Ze),cameraNear:new Rt(.3),cameraFar:new Rt(1e3),aspect:new Rt(1),time:new Rt(0)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=yo){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=_2.replace(ot.FRAGMENT_HEAD,t.get(ot.FRAGMENT_HEAD)||"").replace(ot.FRAGMENT_MAIN_UV,t.get(ot.FRAGMENT_MAIN_UV)||"").replace(ot.FRAGMENT_MAIN_IMAGE,t.get(ot.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=y2.replace(ot.VERTEX_HEAD,t.get(ot.VERTEX_HEAD)||"").replace(ot.VERTEX_MAIN_SUPPORT,t.get(ot.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof Vn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return ot}};function f0(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function M2(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&Yr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(ot.FRAGMENT_HEAD)||"",f=l.get(ot.FRAGMENT_MAIN_UV)||"",d=l.get(ot.FRAGMENT_MAIN_IMAGE)||"",h=l.get(ot.VERTEX_HEAD)||"",p=l.get(ot.VERTEX_MAIN_SUPPORT)||"";const _=new Set,S=new Set;if(a&&(f+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const m=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=m?`vUv);
`:`);
`;for(const v of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const E of v[1].split(/\s*,\s*/))n.varyings.add(E),_.add(E),S.add(E);for(const v of r.matchAll(o))S.add(v[1])}for(const m of i.matchAll(o))S.add(m[1]);for(const m of e.defines.keys())S.add(m.replace(/\([\w\s,]*\)/g,""));for(const m of e.uniforms.keys())S.add(m);S.delete("while"),S.delete("for"),S.delete("if"),e.uniforms.forEach((m,v)=>n.uniforms.set(t+v.charAt(0).toUpperCase()+v.slice(1),m)),e.defines.forEach((m,v)=>n.defines.set(t+v.charAt(0).toUpperCase()+v.slice(1),m));const g=new Map([["fragment",i],["vertex",r]]);f0(t,S,n.defines),f0(t,S,g),i=g.get("fragment"),r=g.get("vertex");const u=e.blendMode;if(n.blendModes.set(u.blendFunction,u),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(d+=e.inputColorSpace===Ct?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==di?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const m=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${t}MainImage(color0, UV, `,n.attributes&Yr.DEPTH&&m.test(i)&&(d+="depth, ",n.readDepth=!0),d+=`color1);
	`;const v=t+"BlendOpacity";n.uniforms.set(v,u.opacity),d+=`color0 = blend${u.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=i+`
`,r!==null&&(h+=r+`
`),l.set(ot.FRAGMENT_HEAD,c),l.set(ot.FRAGMENT_MAIN_UV,f),l.set(ot.FRAGMENT_MAIN_IMAGE,d),l.set(ot.VERTEX_HEAD,h),l.set(ot.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const m of e.extensions)n.extensions.add(m)}}var d0=class extends br{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new S2(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new Bw;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===it.DST)t.attributes|=a.getAttributes()&Yr.DEPTH;else{if(t.attributes&a.getAttributes()&Yr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);M2("e"+e++,a,t)}let n=t.shaderParts.get(ot.FRAGMENT_HEAD),i=t.shaderParts.get(ot.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(ot.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&Yr.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ct&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(ot.FRAGMENT_HEAD,n),t.shaderParts.set(ot.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(ot.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=yo){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==In&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const E2=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const i=new Yt(e);i.minFilter=jt,i.magFilter=jt,i.generateMipmaps=!1;const r=[];let s=null;const a=64;let o=.1*64;const l=1/a,c=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},f=p=>{const _={x:p.x*64,y:(1-p.y)*64};let S=1;const g=E=>Math.sin(E*Math.PI/2),u=E=>-E*(E-2);p.age<a*.3?S=g(p.age/(a*.3)):S=u(1-(p.age-a*.3)/(a*.7))||0,S*=p.force;const m=`${(p.vx+1)/2*255}, ${(p.vy+1)/2*255}, ${S*255}`,v=64*5;n.shadowOffsetX=v,n.shadowOffsetY=v,n.shadowBlur=o,n.shadowColor=`rgba(${m},${.22*S})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(_.x-v,_.y-v,o,0,Math.PI*2),n.fill()};return{canvas:e,texture:i,addTouch:p=>{let _=0,S=0,g=0;if(s){const u=p.x-s.x,m=p.y-s.y;if(u===0&&m===0)return;const v=u*u+m*m,E=Math.sqrt(v);S=u/(E||1),g=m/(E||1),_=Math.min(v*1e4,1)}s={x:p.x,y:p.y},r.push({x:p.x,y:p.y,age:0,force:_,vx:S,vy:g})},update:()=>{c();for(let p=r.length-1;p>=0;p--){const _=r[p],S=_.force*l*(1-_.age/a);_.x+=_.vx*S,_.y+=_.vy*S,_.age++,_.age>a&&r.splice(p,1)}for(let p=0;p<r.length;p++)f(r[p]);i.needsUpdate=!0},set radiusScale(p){o=.1*64*p},get radiusScale(){return o/(.1*64)},size:64}},T2=(t,e)=>{const n=`
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
    `;return new Tv("LiquidEffect",n,{uniforms:new Map([["uTexture",new Rt(t)],["uStrength",new Rt((e==null?void 0:e.strength)??.025)],["uTime",new Rt(0)],["uFreq",new Rt((e==null?void 0:e.freq)??4.5)]])})},h0={square:0,circle:1,triangle:2,diamond:3},b2=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,w2=`
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
`,Nu=10,A2=({variant:t="square",pixelSize:e=3,color:n="#B19EEF",className:i,style:r,antialias:s=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:f=1,pixelSizeJitter:d=0,enableRipples:h=!0,rippleIntensityScale:p=1,rippleThickness:_=.1,rippleSpeed:S=.3,liquidWobbleSpeed:g=4.5,autoPauseOffscreen:u=!0,speed:m=.5,transparent:v=!0,edgeFade:E=.5,noiseAmount:C=0})=>{const b=be.useRef(null),R=be.useRef({visible:!0}),T=be.useRef(m),x=be.useRef(null),y=be.useRef(null);return be.useEffect(()=>{var ee,q,$;const P=b.current;if(!P)return;T.current=m;const F=["antialias","liquid","noiseAmount"],k={antialias:s,liquid:l,noiseAmount:C};let X=!1;if(!x.current)X=!0;else if(y.current){for(const D of F)if(y.current[D]!==k[D]){X=!0;break}}if(X){if(x.current){const de=x.current;(ee=de.resizeObserver)==null||ee.disconnect(),cancelAnimationFrame(de.raf),(q=de.quad)==null||q.geometry.dispose(),de.material.dispose(),($=de.composer)==null||$.dispose(),de.renderer.dispose(),de.renderer.domElement.parentElement===P&&P.removeChild(de.renderer.domElement),x.current=null}const D=document.createElement("canvas"),U=new Cw({canvas:D,antialias:s,alpha:!0,powerPreference:"high-performance"});U.domElement.style.width="100%",U.domElement.style.height="100%",U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),P.appendChild(U.domElement),v?U.setClearAlpha(0):U.setClearColor(0,1);const Y={uResolution:{value:new Ze(0,0)},uTime:{value:0},uColor:{value:new ft(n)},uClickPos:{value:Array.from({length:Nu},()=>new Ze(-1,-1))},uClickTimes:{value:new Float32Array(Nu)},uShapeType:{value:h0[t]??0},uPixelSize:{value:e*U.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:d},uEnableRipples:{value:h?1:0},uRippleSpeed:{value:S},uRippleThickness:{value:_},uRippleIntensity:{value:p},uEdgeFade:{value:E}},oe=new Td,ie=new Oh(-1,1,1,-1,0,1),Ue=new Nn({vertexShader:b2,fragmentShader:w2,uniforms:Y,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Md}),Be=new bo(2,2),Ie=new xi(Be,Ue);oe.add(Ie);const K=new HM,te=()=>{var Ee;const de=P.clientWidth||1,ke=P.clientHeight||1;U.setSize(de,ke,!1),Y.uResolution.value.set(U.domElement.width,U.domElement.height),(Ee=x.current)!=null&&Ee.composer&&x.current.composer.setSize(U.domElement.width,U.domElement.height),Y.uPixelSize.value=e*U.getPixelRatio()};te();const _e=new ResizeObserver(te);_e.observe(P);const ye=(()=>{var de;if(typeof window<"u"&&((de=window.crypto)!=null&&de.getRandomValues)){const ke=new Uint32Array(1);return window.crypto.getRandomValues(ke),ke[0]/4294967295}return Math.random()})()*1e3;let Te,Ve,Ae;if(l){Ve=E2(),Ve.radiusScale=f,Te=new l0(U);const de=new u0(oe,ie);Ae=T2(Ve.texture,{strength:c,freq:g});const ke=new d0(ie,Ae);ke.renderToScreen=!0,Te.addPass(de),Te.addPass(ke)}if(C>0){Te||(Te=new l0(U),Te.addPass(new u0(oe,ie)));const de=new Tv("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new Rt(0)],["uAmount",new Rt(C)]])}),ke=new d0(ie,de);ke.renderToScreen=!0,Te&&Te.passes.length>0&&Te.passes.forEach(Ee=>Ee.renderToScreen=!1),Te.addPass(ke)}Te&&Te.setSize(U.domElement.width,U.domElement.height);const We=de=>{const ke=U.domElement.getBoundingClientRect(),Ee=U.domElement.width/ke.width,Se=U.domElement.height/ke.height,A=(de.clientX-ke.left)*Ee,M=(ke.height-(de.clientY-ke.top))*Se;return{fx:A,fy:M,w:U.domElement.width,h:U.domElement.height}},L=de=>{var A;const{fx:ke,fy:Ee}=We(de),Se=((A=x.current)==null?void 0:A.clickIx)??0;Y.uClickPos.value[Se].set(ke,Ee),Y.uClickTimes.value[Se]=Y.uTime.value,x.current&&(x.current.clickIx=(Se+1)%Nu)},Ce=de=>{if(!Ve)return;const{fx:ke,fy:Ee,w:Se,h:A}=We(de);Ve.addTouch({x:ke/Se,y:Ee/A})};U.domElement.addEventListener("pointerdown",L,{passive:!0}),U.domElement.addEventListener("pointermove",Ce,{passive:!0});let Oe=0;const qe=()=>{if(u&&!R.current.visible){Oe=requestAnimationFrame(qe);return}Y.uTime.value=ye+K.getElapsedTime()*T.current,Ae&&(Ae.uniforms.get("uTime").value=Y.uTime.value),Te?(Ve&&Ve.update(),Te.passes.forEach(de=>{const ke=de.effects;ke&&ke.forEach(Ee=>{var A;const Se=(A=Ee.uniforms)==null?void 0:A.get("uTime");Se&&(Se.value=Y.uTime.value)})}),Te.render()):U.render(oe,ie),Oe=requestAnimationFrame(qe)};Oe=requestAnimationFrame(qe),x.current={renderer:U,scene:oe,camera:ie,material:Ue,clock:K,clickIx:0,uniforms:Y,resizeObserver:_e,raf:Oe,quad:Ie,timeOffset:ye,composer:Te,touch:Ve,liquidEffect:Ae}}else{const D=x.current;if(D.uniforms.uShapeType.value=h0[t]??0,D.uniforms.uPixelSize.value=e*D.renderer.getPixelRatio(),D.uniforms.uColor.value.set(n),D.uniforms.uScale.value=a,D.uniforms.uDensity.value=o,D.uniforms.uPixelJitter.value=d,D.uniforms.uEnableRipples.value=h?1:0,D.uniforms.uRippleIntensity.value=p,D.uniforms.uRippleThickness.value=_,D.uniforms.uRippleSpeed.value=S,D.uniforms.uEdgeFade.value=E,v?D.renderer.setClearAlpha(0):D.renderer.setClearColor(0,1),D.liquidEffect){const U=D.liquidEffect.uniforms.get("uStrength");U&&(U.value=c);const Y=D.liquidEffect.uniforms.get("uFreq");Y&&(Y.value=g)}D.touch&&(D.touch.radiusScale=f)}return y.current=k,()=>{var U,Y,oe;if(x.current&&X||!x.current)return;const D=x.current;(U=D.resizeObserver)==null||U.disconnect(),cancelAnimationFrame(D.raf),(Y=D.quad)==null||Y.geometry.dispose(),D.material.dispose(),(oe=D.composer)==null||oe.dispose(),D.renderer.dispose(),D.renderer.domElement.parentElement===P&&P.removeChild(D.renderer.domElement),x.current=null}},[s,l,C,e,a,o,h,p,_,S,d,E,v,c,f,g,u,t,n,m]),z.jsx("div",{ref:b,className:`w-full h-full relative overflow-hidden ${i??""}`,style:r,"aria-label":"PixelBlast interactive background"})};function R2(){return z.jsxs("div",{className:"justify-center flex items-center min-h-screen relative",id:"intro",children:[z.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:z.jsx(A2,{variant:"circle",pixelSize:12,color:"#51369C",patternScale:2.5,patternDensity:.8,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.3,rippleThickness:.12,rippleIntensityScale:1.2,liquid:!0,liquidStrength:.1,liquidRadius:1.2,liquidWobbleSpeed:2.5,speed:.5,edgeFade:0,transparent:!0})}),z.jsx("div",{className:"absolute inset-0 transition-all duration-500 ease-in-out z-[5] pointer-events-none",style:{background:"radial-gradient(ellipse 70% 70% at center, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0.7) 20%, rgba(23, 23, 23, 0.5) 35%, rgba(23, 23, 23, 0.35) 50%, rgba(23, 23, 23, 0.2) 65%, rgba(23, 23, 23, 0.1) 80%, transparent 92%, transparent 100%)"}}),z.jsxs("div",{className:"relative z-10 space-y-4 px-8",id:"intro-content",children:[z.jsx("p",{className:"sfmono-reg text-lg text-sky-400  pb-2",children:"Hi, my name is"}),z.jsx("h1",{className:"text-[2.2rem] md:text-[4.2rem]",children:"Animesh Singh Basnet"}),z.jsx("h2",{className:"text-slate-400 text-[1.4rem] md:text-[3.2rem]",children:"I build things from data."}),z.jsx("p",{className:"calibre-reg sm:text-l md:text-xl text-white pb-6 text-justify max-w-3xl",children:"I'm a programmer specializing in building (and occasionally designing). Currently, I'm focused on researching and developing Machine Learning and Large Language Models."}),z.jsx("button",{className:"px-4 py-3 border-2 text-sm md:text-xl  border-sky-400 text-sky-400 rounded-md",onClick:()=>jg(),children:"Say Hello !"})]})]})}const C2={boxShadow:"0px 0px 10px  black",offset:"x 0"};function P2(){const[t,e]=be.useState(!0),[n,i]=be.useState(!1),r=be.useRef(0),s=()=>{var o;const a=document.getElementById("root");if(a){const l=a.scrollTop;if(l<=10?e(!0):e(!1),r.current<l){const c=document.getElementById("navbar");c&&(c.classList.contains("show-on-scroll")?c.classList.replace("show-on-scroll","hide-on-scroll"):c.classList.add("hide-on-scroll"))}else r.current>l&&((o=document.getElementById("navbar"))==null||o.classList.replace("hide-on-scroll","show-on-scroll"));r.current=l}};return be.useEffect(()=>{const a=document.getElementById("root");if(a)return a.addEventListener("scroll",s),()=>{a.removeEventListener("scroll",s)}},[]),z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"fixed top-0 left-0 right-0 hidden md:block transition-all duration-300 ease-in-out",id:"navbar",style:t?{}:C2,children:z.jsxs("nav",{className:`flex items-center justify-end py-7 pr-20 gap-8 transition-all duration-500 ease-in-out ${t?"":"navbar-scrolled"}`,children:[z.jsx(Uu,{sn:"01.",title:"About",scrollToID:"about"}),z.jsx(Uu,{sn:"02.",title:"Work",scrollToID:"work"}),z.jsx(Uu,{sn:"03.",title:"Publication",scrollToID:"publications"})]})}),z.jsx("div",{className:"fixed top-0 right-0 p-6 md:hidden z-50",children:z.jsx("button",{onClick:()=>i(!n),className:"text-white hover:text-sky-400 transition-colors duration-200","aria-label":"Toggle menu",children:n?z.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):z.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),z.jsx("div",{className:`fixed top-0 right-0 h-full w-64 bg-[#171717]/95 backdrop-blur-xl border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${n?"translate-x-0":"translate-x-full"}`,children:z.jsxs("div",{className:"flex flex-col pt-20 px-6 space-y-6",children:[z.jsx(Fu,{sn:"01.",title:"About",scrollToID:"about",onClick:()=>i(!1)}),z.jsx(Fu,{sn:"02.",title:"Work",scrollToID:"work",onClick:()=>i(!1)}),z.jsx(Fu,{sn:"03.",title:"Publication",scrollToID:"publications",onClick:()=>i(!1)})]})}),n&&z.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 md:hidden",onClick:()=>i(!1)})]})}function Uu({sn:t,title:e,scrollToID:n}){const i=()=>{const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})};return z.jsx("div",{className:"flex items-center",children:z.jsxs("div",{onClick:i,className:"gap-1.5 mr-8 flex cursor-pointer p-2 text-sm text-white hover:text-sky-400",children:[z.jsx("p",{className:"text-sky-400 sfmono-reg",children:t}),z.jsx("p",{className:"whitespace-nowrap sfmono-reg",children:e})]})})}function Fu({sn:t,title:e,scrollToID:n,onClick:i}){const r=()=>{const s=document.getElementById(n);s&&(s.scrollIntoView({behavior:"smooth"}),i())};return z.jsxs("div",{onClick:r,className:"flex items-center gap-2 cursor-pointer group py-2",children:[z.jsx("p",{className:"text-sky-400 sfmono-reg text-sm",children:t}),z.jsx("p",{className:"text-white sfmono-reg text-lg group-hover:text-sky-400 transition-colors duration-200",children:e})]})}function bv(){return z.jsxs("div",{className:"items-center space-y-4 mt-[15vh] md:mt-[25vh] mb-[15vh] md:mb-[5vh] mx-8 lg:mx-20",id:"footer",children:[z.jsxs("div",{className:"space-x-3 justify-center flex lg:hidden",children:[z.jsx(ir,{IconComponent:Wg,url:"",type:"email",size:"small"}),z.jsx(ir,{IconComponent:Gg,url:"https://www.linkedin.com/in/animeshbasnet/",type:"link",size:"small"}),z.jsx(ir,{IconComponent:Hg,url:"https://www.instagram.com/crypticsy/",type:"link",size:"small"}),z.jsx(ir,{IconComponent:wh,url:"https://github.com/crypticsy/",type:"link",size:"small"})]}),z.jsx("div",{className:"flex justify-center ",children:z.jsxs("div",{className:"sfmono-reg text-2xs md:text-xs max-w-4xl text-slate-300 text-center ",children:[new Date().getFullYear()," Crypticsy © All Rights Reserved"]})})]})}function kh({sn:t,title:e}){return z.jsxs("div",{className:"flex items-center",children:[z.jsxs("div",{className:"gap-3 mr-8 flex",children:[t.length>0&&z.jsx("p",{className:"text-[0.8rem] md:text-[1.2rem] sfmono-reg text-sky-400 my-auto",children:t}),z.jsx("p",{className:"text-[1.3rem] md:text-[2.2rem] calibre-smbold text-white whitespace-nowrap mt-2",children:e})]}),z.jsx("hr",{className:"w-full h-[0.05rem] bg-slate-600 border-0 rounded"})]})}function D2({sn:t,title:e}){return z.jsxs("div",{className:"flex items-center",children:[z.jsxs("div",{className:"gap-3 mr-8 flex",children:[t.length>0&&z.jsx("p",{className:"text-[0.8rem] md:text-[1.1rem] sfmono-reg text-sky-400 my-auto",children:t}),z.jsx("p",{className:"text-[1.2rem] md:text-[1.8rem] calibre-smbold text-slate-400 whitespace-nowrap mt-2",children:e})]}),z.jsx("hr",{className:"w-full h-[0.05rem] bg-slate-600 border-0 rounded"})]})}function L2(t){window.location.hash=t}function I2(){return z.jsx("div",{className:"justify-center flex items-center pt-[15vh] mx-8 lg:mx-20",id:"about",children:z.jsxs("div",{className:"space-y-8 max-w-5xl",children:[z.jsx(kh,{sn:"01.",title:"About me"}),z.jsxs("div",{className:"calibre-reg sm:text-xs md:text-xl max-w-5xl text-gray-200 text-justify space-y-5",children:[z.jsx("p",{children:"    I'm a data detective who loves uncovering stories behind the numbers. I create fun projects to make daily tasks easier for everyone—myself included. When I'm not analyzing data, you'll find me doodling or diving into research papers."}),z.jsx("p",{children:"Above all, I believe education is the most powerful tool we have. Whether it's mentoring or sharing knowledge, I'm all in on helping build a smarter, more accessible future for everyone."}),z.jsx("table",{children:z.jsxs("tbody",{children:[z.jsxs("tr",{children:[z.jsx("td",{className:"pr-4",children:"👨‍💻"}),z.jsx("td",{children:"Currently working as an AI Engineer and Research Fellow"})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"💬"}),z.jsx("td",{children:"Let's brainstorm over tech, algorithms, career, and music."})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"🤔"}),z.jsxs("td",{children:["Wondering how I got here? Let's just say I've been secretly leveling up with these ",z.jsx("a",{className:"cursor-pointer text-sky-400 hover:text-sky-400 hover-underline-animation",onClick:()=>L2("/certificates"),children:"certificates."})]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"⚡"}),z.jsx("td",{children:" Fun fact: Oct 31 equals Dec 25 "})]})]})})]})]})})}function N2(t){return Hi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"}}]})(t)}const U2=""+new URL("grago-8e0c780e.jpeg",import.meta.url).href,F2=""+new URL("snadder-4b598fd0.webp",import.meta.url).href,O2=[{title:"Snadder",description:"Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",tags:["Python","React","Tailwind"],imageURL:F2,hostedURL:"https://snadder.io/",imagePosition:"top"},{title:"Pocket Booth",description:"A pocket-sized digital photo booth application that allows users to capture instant photo strips and store them locally.",tags:["Camera","Google-oauth","Typescript"],imageURL:"https://crypticsy.github.io/pocket-booth/home_screen.png",githubURL:"https://github.com/crypticsy/pocket-booth",hostedURL:"https://crypticsy.github.io/pocket-booth/",imagePosition:"right"},{title:"Sanctuary.io",description:"A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",tags:["P5JS","Javascript"],githubURL:"https://github.com/crypticsy/sanctuary",hostedURL:"https://crypticsy.github.io/sanctuary/"},{title:"From Me to You",description:"A web application for sending heartfelt digital letters to friends and loved ones.",tags:["Typescript","TailwindCSS"],githubURL:"https://github.com/crypticsy/from-me-to-you",hostedURL:"https://crypticsy.github.io/from-me-to-you/"},{title:"Vision Caster",description:"An interactive image analysis system for the visually impaired. It uses the BLIP model on a Raspberry Pi to process images and give real-time descriptive captions and auditory feedback.",tags:["RasberryPi","Transformers","Azure"],githubURL:"https://github.com/crypticsy/VisionCaster"},{title:"Ropey DVD Management System",description:"An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",tags:["ASP.NET","MVC","Bootstrap"],githubURL:"https://github.com/crypticsy/RopeyDVDManagementSystem"},{title:"Grago",description:"Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",tags:["Django","Postgresql","Data Science"],imageURL:U2,imagePosition:"top"},{title:"HAR System",description:"Human Activity Recognition (HAR) system designed to process and analyze sensor data to recognize human activities using XGBoost for the CASAS Smart Home Data Set - Dataset 17.",tags:["Streamlit","XGBoost"],imageURL:"https://github.com/crypticsy/human-activity-recognition/blob/master/Images/demo.gif?raw=true",githubURL:"https://github.com/crypticsy/human-activity-recognition",imagePosition:"right"},{title:"The Marauder's Map",description:"A web application inspired by the Marauder's Map from the Harry Potter universe, enabling users to explore a digital map of Hogwarts with moving footprints and hidden rooms.",tags:["React-Three-Fiber","Typescript"],imageURL:"https://crypticsy.github.io/the-marauders-map/main_screen.png",githubURL:"https://github.com/crypticsy/the-marauders-map",hostedURL:"https://crypticsy.github.io/the-marauders-map/",imagePosition:"bottom"},{title:"Chess Engine",description:"A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",tags:["Python","PyGame","Algorithm"],githubURL:"https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/"},{title:"Animated Movie Ontology",description:"A semantic programming application tailored for the animated film industry that organizes and analyzes complex data sets from animated films, leveraging ontologies and RDF files to facilitate this process.",tags:["Semantics","Protege","Streamlit"],githubURL:"https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology"},{title:"Path Visualizer",description:"A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",tags:["Flask","Javascript","TailwindCSS"],githubURL:"https://github.com/crypticsy/PathVisualizer",hostedURL:"https://path-visualizer-crypticsy.vercel.app/"}];function k2({title:t,description:e,tags:n,githubURL:i,hostedURL:r,imageURL:s,imagePosition:a="top"}){const[o,l]=be.useState(null),c=be.useRef(null),f=s&&s.length>0,d=a==="right"&&f,h=a==="left"&&f,p=a==="bottom"&&f,_=d||h,S=()=>{const m=c.current;m&&(m.style.transition="none",m.style.backgroundPosition="-100% -100%, 0 0",m.style.transition="650ms ease",m.style.backgroundPosition="100% 100%, 0 0")},g=()=>{const m=c.current;m&&(m.style.transition="none",m.style.backgroundPosition="-100% -100%, 0 0")};be.useEffect(()=>{if(i&&i.length>0){const m=i.match(/github\.com\/([^\/]+)\/([^\/]+)/);if(m){const v=m[1],E=m[2],C=`github-stats-${v}-${E}`,b=localStorage.getItem(C);if(b){const{stats:R,timestamp:T}=JSON.parse(b);if(Date.now()-T<36e5){l(R);return}}fetch(`https://api.github.com/repos/${v}/${E}`).then(R=>{if(!R.ok)throw new Error(`HTTP ${R.status}`);return R.json()}).then(R=>{if(R.stargazers_count!==void 0&&R.forks_count!==void 0){const T={stars:R.stargazers_count,forks:R.forks_count};l(T),localStorage.setItem(C,JSON.stringify({stats:T,timestamp:Date.now()}))}}).catch(()=>{})}}},[i]);const u=()=>{r?window.open(r,"_blank"):i&&window.open(i,"_blank")};return z.jsxs("div",{className:`bg-slate-800 rounded-md project cursor-pointer relative overflow-hidden group flex flex-col transition-all duration-300 hover:ring-1 hover:ring-sky-600 ${f?d?"md:col-span-2 md:row-span-1 md:flex-row-reverse":h?"md:col-span-2 md:row-span-1 md:flex-row":p?"md:row-span-2 md:flex-col-reverse":"md:row-span-2 md:flex-col":""}`,onClick:u,onMouseEnter:S,onMouseLeave:g,children:[z.jsx("div",{ref:c,style:{position:"absolute",inset:0,background:"linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)",backgroundSize:"250% 250%, 100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"-100% -100%, 0 0",pointerEvents:"none",zIndex:10}}),f&&z.jsx("div",{className:`overflow-hidden ${_?"w-full h-48 md:w-1/2 md:h-full":"w-full h-48 md:h-64"}`,children:z.jsx("img",{src:s,alt:t,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),z.jsxs("div",{className:`px-5 py-6 md:p-7 flex-1 flex flex-col ${_?"w-full md:w-1/2":""}`,children:[z.jsxs("div",{className:"space-y-3 flex-1",children:[z.jsxs("div",{className:"flex justify-between items-center pb-2",children:[z.jsxs("div",{className:"flex space-x-5 text-left",children:[i&&i.length>0&&z.jsx(wh,{className:"w-5 h-5 hover:text-sky-500 cursor-pointer",onClick:m=>{m.stopPropagation(),window.open(i,"_blank")}}),r&&r.length>0&&z.jsx(N2,{className:"w-5 h-5 hover:text-sky-500 cursor-pointer",onClick:m=>{m.stopPropagation(),window.open(r,"_blank")}})]}),o&&(o.stars>0||o.forks>0)&&z.jsxs("div",{className:"text-sm sfmono-reg flex gap-3 text-gray-300",children:[o.stars>0&&z.jsxs("span",{className:"flex items-center gap-1",children:[z.jsx(_1,{className:"w-4 h-4"}),z.jsx("p",{children:o.stars})]}),o.forks>0&&z.jsxs("span",{className:"flex items-center gap-1",children:[z.jsx(g1,{className:"w-4 h-4"}),z.jsx("p",{children:o.forks})]})]})]}),z.jsx("p",{className:"calibre-smbold text-[1.4rem] md:text-[1.6rem] text-white leading-8 title",children:t}),z.jsx("p",{className:"text-sm md:text-base rounded-md leading-6",children:e})]}),z.jsx("div",{className:"mt-4",children:z.jsx("p",{className:"text-xs sfmono-reg flex flex-wrap gap-x-5 gap-y-2",children:n.length>0&&n.map((m,v)=>z.jsx("span",{className:"capitalize",children:m},v))})})]})]})}function B2(){const[t,e]=be.useState(""),n=O2.filter(i=>{const r=t.toLowerCase(),s=i.title.toLowerCase().includes(r),a=i.tags.some(o=>o.toLowerCase().includes(r));return s||a});return z.jsx("div",{className:"justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8 lg:mx-20",id:"work",children:z.jsxs("div",{className:"space-y-8 max-w-6xl w-full",children:[z.jsx("div",{className:"max-w-5xl m-auto",children:z.jsx(kh,{sn:"02.",title:"Things I've Built"})}),z.jsx("div",{className:"flex justify-center pb-6 pt-4",children:z.jsxs("div",{className:"relative w-full md:max-w-5xl",children:[z.jsx(v1,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),z.jsx("input",{type:"text",placeholder:"Search by name or tags...",value:t,onChange:i=>e(i.target.value),className:"w-full pl-11 pr-4 py-3 pt-4 bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors",style:{lineHeight:"1.5"}})]})}),z.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-7 auto-rows-[minmax(280px,auto)] px-4 lg:px-0",children:n.map((i,r)=>z.jsx(k2,{title:i.title,description:i.description,tags:i.tags,githubURL:i.githubURL,hostedURL:i.hostedURL,imageURL:i.imageURL,imagePosition:i.imagePosition},r))}),n.length===0&&z.jsxs("div",{className:"text-center text-gray-400 py-8",children:['No projects found matching "',t,'"']})]})})}const z2=""+new URL("himalayanJavaCaseStudy-3adefed8.png",import.meta.url).href,V2=""+new URL("digital_threats-be95df28.jpg",import.meta.url).href;function H2(t){const e=t.getDate(),n=t.toLocaleString("default",{month:"long"}),i=t.getFullYear();return`${n} ${e}, ${i}`}const G2=[{title:"APT Attribution Using Deep Reinforcement Learning",subtitle:"This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.",type:"Research Paper",publishedDate:new Date(2025,9,29),publicationURL:"https://dl.acm.org/doi/10.1145/3736654",publicationImage:V2},{title:"Himalayan Java",subtitle:"Navigating Challenges and Pioneering Sustainability in Nepali Coffee Industry",type:"A Case Study",publishedDate:new Date(2023,7,1),publicationURL:"https://parthstudent.vc/case-study/",publicationImage:z2}];function W2(t){const e=be.useRef(null),n=()=>{const r=e.current;r&&(r.style.transition="none",r.style.backgroundPosition="-100% -100%, 0 0",r.style.transition="650ms ease",r.style.backgroundPosition="100% 100%, 0 0")},i=()=>{const r=e.current;r&&(r.style.transition="none",r.style.backgroundPosition="-100% -100%, 0 0")};return z.jsxs("div",{className:"bg-slate-800 rounded-md overflow-hidden h-full cursor-pointer relative group transition-all duration-300 hover:ring-1 hover:ring-sky-600",onClick:()=>window.open(t.publicationURL,"_blank"),onMouseEnter:n,onMouseLeave:i,children:[z.jsxs("div",{className:"w-full h-full overflow-hidden relative",children:[z.jsx("div",{ref:e,style:{position:"absolute",inset:0,background:"linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)",backgroundSize:"250% 250%, 100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"-100% -100%, 0 0",pointerEvents:"none",zIndex:10}}),z.jsx("img",{className:"w-full h-full object-cover",src:t.publicationImage})]}),z.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-800 px-5 py-6 md:p-7 flex flex-col transition-all duration-500 ease-in-out group-hover:h-auto z-20",style:{minHeight:"fit-content"},children:[z.jsx("div",{className:"calibre-smbold mb-2 text-left",children:t.title}),t.subtitle&&z.jsx("div",{className:"overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out",children:z.jsx("div",{className:"text-sm md:text-base text-left pb-2",children:t.subtitle})}),z.jsxs("div",{className:"flex sfmono-reg text-xs md:text-xs mt-4",children:[z.jsx("div",{className:"mr-auto",children:t.type}),z.jsx("div",{className:"",children:H2(t.publishedDate)})]})]})]})}function X2(){return z.jsx("div",{className:"justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8 lg:mx-20",id:"publications",children:z.jsxs("div",{className:"space-y-8 max-w-6xl",children:[z.jsx("div",{className:"max-w-5xl m-auto",children:z.jsx(kh,{sn:"03.",title:"Publications"})}),z.jsx("div",{className:"calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32 w-full",children:z.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0",children:G2.map((t,e)=>z.jsx(W2,{...t},e))})})]})})}function j2(){return z.jsxs(Bg,{children:[z.jsx(P2,{}),z.jsx(qg,{}),z.jsx(Yg,{}),z.jsx(R2,{}),z.jsx(I2,{}),z.jsx(B2,{}),z.jsx(X2,{}),z.jsx(bv,{})]})}var Ad={},q2={get exports(){return Ad},set exports(t){Ad=t}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(Lv,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(T,x){var y=(x=x||{}).dynamicTyping||!1;if(R(y)&&(x.dynamicTypingFunction=y,y={}),x.dynamicTyping=y,x.transform=!!R(x.transform)&&x.transform,x.worker&&l.WORKERS_SUPPORTED){var P=function(){if(!l.WORKERS_SUPPORTED)return!1;var k=(ee=i.URL||i.webkitURL||null,q=n.toString(),l.BLOB_URL||(l.BLOB_URL=ee.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))),X=new i.Worker(k),ee,q;return X.onmessage=m,X.id=o++,a[X.id]=X}();return P.userStep=x.step,P.userChunk=x.chunk,P.userComplete=x.complete,P.userError=x.error,x.step=R(x.step),x.chunk=R(x.chunk),x.complete=R(x.complete),x.error=R(x.error),delete x.worker,void P.postMessage({input:T,config:x,workerId:P.id})}var F=null;return l.NODE_STREAM_INPUT,typeof T=="string"?(T=function(k){return k.charCodeAt(0)===65279?k.slice(1):k}(T),F=x.download?new d(x):new p(x)):T.readable===!0&&R(T.read)&&R(T.on)?F=new _(x):(i.File&&T instanceof File||T instanceof Object)&&(F=new h(x)),F.stream(T)},unparse:function(T,x){var y=!1,P=!0,F=",",k=`\r
`,X='"',ee=X+X,q=!1,$=null,D=!1;(function(){if(typeof x=="object"){if(typeof x.delimiter!="string"||l.BAD_DELIMITERS.filter(function(ie){return x.delimiter.indexOf(ie)!==-1}).length||(F=x.delimiter),(typeof x.quotes=="boolean"||typeof x.quotes=="function"||Array.isArray(x.quotes))&&(y=x.quotes),typeof x.skipEmptyLines!="boolean"&&typeof x.skipEmptyLines!="string"||(q=x.skipEmptyLines),typeof x.newline=="string"&&(k=x.newline),typeof x.quoteChar=="string"&&(X=x.quoteChar),typeof x.header=="boolean"&&(P=x.header),Array.isArray(x.columns)){if(x.columns.length===0)throw new Error("Option columns is empty");$=x.columns}x.escapeChar!==void 0&&(ee=x.escapeChar+X),(typeof x.escapeFormulae=="boolean"||x.escapeFormulae instanceof RegExp)&&(D=x.escapeFormulae instanceof RegExp?x.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var U=new RegExp(g(X),"g");if(typeof T=="string"&&(T=JSON.parse(T)),Array.isArray(T)){if(!T.length||Array.isArray(T[0]))return Y(null,T,q);if(typeof T[0]=="object")return Y($||Object.keys(T[0]),T,q)}else if(typeof T=="object")return typeof T.data=="string"&&(T.data=JSON.parse(T.data)),Array.isArray(T.data)&&(T.fields||(T.fields=T.meta&&T.meta.fields||$),T.fields||(T.fields=Array.isArray(T.data[0])?T.fields:typeof T.data[0]=="object"?Object.keys(T.data[0]):[]),Array.isArray(T.data[0])||typeof T.data[0]=="object"||(T.data=[T.data])),Y(T.fields||[],T.data||[],q);throw new Error("Unable to serialize unrecognized input");function Y(ie,Ue,Be){var Ie="";typeof ie=="string"&&(ie=JSON.parse(ie)),typeof Ue=="string"&&(Ue=JSON.parse(Ue));var K=Array.isArray(ie)&&0<ie.length,te=!Array.isArray(Ue[0]);if(K&&P){for(var _e=0;_e<ie.length;_e++)0<_e&&(Ie+=F),Ie+=oe(ie[_e],_e);0<Ue.length&&(Ie+=k)}for(var me=0;me<Ue.length;me++){var ye=K?ie.length:Ue[me].length,Te=!1,Ve=K?Object.keys(Ue[me]).length===0:Ue[me].length===0;if(Be&&!K&&(Te=Be==="greedy"?Ue[me].join("").trim()==="":Ue[me].length===1&&Ue[me][0].length===0),Be==="greedy"&&K){for(var Ae=[],We=0;We<ye;We++){var L=te?ie[We]:We;Ae.push(Ue[me][L])}Te=Ae.join("").trim()===""}if(!Te){for(var Ce=0;Ce<ye;Ce++){0<Ce&&!Ve&&(Ie+=F);var Oe=K&&te?ie[Ce]:Ce;Ie+=oe(Ue[me][Oe],Ce)}me<Ue.length-1&&(!Be||0<ye&&!Ve)&&(Ie+=k)}}return Ie}function oe(ie,Ue){if(ie==null)return"";if(ie.constructor===Date)return JSON.stringify(ie).slice(1,25);var Be=!1;D&&typeof ie=="string"&&D.test(ie)&&(ie="'"+ie,Be=!0);var Ie=ie.toString().replace(U,ee);return(Be=Be||y===!0||typeof y=="function"&&y(ie,Ue)||Array.isArray(y)&&y[Ue]||function(K,te){for(var _e=0;_e<te.length;_e++)if(-1<K.indexOf(te[_e]))return!0;return!1}(Ie,l.BAD_DELIMITERS)||-1<Ie.indexOf(F)||Ie.charAt(0)===" "||Ie.charAt(Ie.length-1)===" ")?X+Ie+X:Ie}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=u,l.ParserHandle=S,l.NetworkStreamer=d,l.FileStreamer=h,l.StringStreamer=p,l.ReadableStreamStreamer=_,i.jQuery){var c=i.jQuery;c.fn.parse=function(T){var x=T.config||{},y=[];return this.each(function(k){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var X=0;X<this.files.length;X++)y.push({file:this.files[X],inputElem:this,instanceConfig:c.extend({},x)})}),P(),this;function P(){if(y.length!==0){var k,X,ee,q,$=y[0];if(R(T.before)){var D=T.before($.file,$.inputElem);if(typeof D=="object"){if(D.action==="abort")return k="AbortError",X=$.file,ee=$.inputElem,q=D.reason,void(R(T.error)&&T.error({name:k},X,ee,q));if(D.action==="skip")return void F();typeof D.config=="object"&&($.instanceConfig=c.extend($.instanceConfig,D.config))}else if(D==="skip")return void F()}var U=$.instanceConfig.complete;$.instanceConfig.complete=function(Y){R(U)&&U(Y,$.file,$.inputElem),F()},l.parse($.file,$.instanceConfig)}else R(T.complete)&&T.complete()}function F(){y.splice(0,1),P()}}}function f(T){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(x){var y=C(x);y.chunkSize=parseInt(y.chunkSize),x.step||x.chunk||(y.chunkSize=null),this._handle=new S(y),(this._handle.streamer=this)._config=y}.call(this,T),this.parseChunk=function(x,y){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var P=this._config.beforeFirstChunk(x);P!==void 0&&(x=P)}this.isFirstChunk=!1,this._halted=!1;var F=this._partialLine+x;this._partialLine="";var k=this._handle.parse(F,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var X=k.meta.cursor;this._finished||(this._partialLine=F.substring(X-this._baseIndex),this._baseIndex=X),k&&k.data&&(this._rowCount+=k.data.length);var ee=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:k,workerId:l.WORKER_ID,finished:ee});else if(R(this._config.chunk)&&!y){if(this._config.chunk(k,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);k=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(k.data),this._completeResults.errors=this._completeResults.errors.concat(k.errors),this._completeResults.meta=k.meta),this._completed||!ee||!R(this._config.complete)||k&&k.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),ee||k&&k.meta.paused||this._nextChunk(),k}this._halted=!0},this._sendError=function(x){R(this._config.error)?this._config.error(x):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:x,finished:!1})}}function d(T){var x;(T=T||{}).chunkSize||(T.chunkSize=l.RemoteChunkSize),f.call(this,T),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(y){this._input=y,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(x=new XMLHttpRequest,this._config.withCredentials&&(x.withCredentials=this._config.withCredentials),r||(x.onload=b(this._chunkLoaded,this),x.onerror=b(this._chunkError,this)),x.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var y=this._config.downloadRequestHeaders;for(var P in y)x.setRequestHeader(P,y[P])}if(this._config.chunkSize){var F=this._start+this._config.chunkSize-1;x.setRequestHeader("Range","bytes="+this._start+"-"+F)}try{x.send(this._config.downloadRequestBody)}catch(k){this._chunkError(k.message)}r&&x.status===0&&this._chunkError()}},this._chunkLoaded=function(){x.readyState===4&&(x.status<200||400<=x.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:x.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(y){var P=y.getResponseHeader("Content-Range");return P===null?-1:parseInt(P.substring(P.lastIndexOf("/")+1))}(x),this.parseChunk(x.responseText)))},this._chunkError=function(y){var P=x.statusText||y;this._sendError(new Error(P))}}function h(T){var x,y;(T=T||{}).chunkSize||(T.chunkSize=l.LocalChunkSize),f.call(this,T);var P=typeof FileReader<"u";this.stream=function(F){this._input=F,y=F.slice||F.webkitSlice||F.mozSlice,P?((x=new FileReader).onload=b(this._chunkLoaded,this),x.onerror=b(this._chunkError,this)):x=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input;if(this._config.chunkSize){var k=Math.min(this._start+this._config.chunkSize,this._input.size);F=y.call(F,this._start,k)}var X=x.readAsText(F,this._config.encoding);P||this._chunkLoaded({target:{result:X}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(x.error)}}function p(T){var x;f.call(this,T=T||{}),this.stream=function(y){return x=y,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var y,P=this._config.chunkSize;return P?(y=x.substring(0,P),x=x.substring(P)):(y=x,x=""),this._finished=!x,this.parseChunk(y)}}}function _(T){f.call(this,T=T||{});var x=[],y=!0,P=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&x.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),x.length?this.parseChunk(x.shift()):y=!0},this._streamData=b(function(F){try{x.push(typeof F=="string"?F:F.toString(this._config.encoding)),y&&(y=!1,this._checkIsFinished(),this.parseChunk(x.shift()))}catch(k){this._streamError(k)}},this),this._streamError=b(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=b(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function S(T){var x,y,P,F=Math.pow(2,53),k=-F,X=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,ee=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,q=this,$=0,D=0,U=!1,Y=!1,oe=[],ie={data:[],errors:[],meta:{}};if(R(T.step)){var Ue=T.step;T.step=function(me){if(ie=me,K())Ie();else{if(Ie(),ie.data.length===0)return;$+=me.data.length,T.preview&&$>T.preview?y.abort():(ie.data=ie.data[0],Ue(ie,q))}}}function Be(me){return T.skipEmptyLines==="greedy"?me.join("").trim()==="":me.length===1&&me[0].length===0}function Ie(){return ie&&P&&(_e("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),P=!1),T.skipEmptyLines&&(ie.data=ie.data.filter(function(me){return!Be(me)})),K()&&function(){if(!ie)return;function me(Te,Ve){R(T.transformHeader)&&(Te=T.transformHeader(Te,Ve)),oe.push(Te)}if(Array.isArray(ie.data[0])){for(var ye=0;K()&&ye<ie.data.length;ye++)ie.data[ye].forEach(me);ie.data.splice(0,1)}else ie.data.forEach(me)}(),function(){if(!ie||!T.header&&!T.dynamicTyping&&!T.transform)return ie;function me(Te,Ve){var Ae,We=T.header?{}:[];for(Ae=0;Ae<Te.length;Ae++){var L=Ae,Ce=Te[Ae];T.header&&(L=Ae>=oe.length?"__parsed_extra":oe[Ae]),T.transform&&(Ce=T.transform(Ce,L)),Ce=te(L,Ce),L==="__parsed_extra"?(We[L]=We[L]||[],We[L].push(Ce)):We[L]=Ce}return T.header&&(Ae>oe.length?_e("FieldMismatch","TooManyFields","Too many fields: expected "+oe.length+" fields but parsed "+Ae,D+Ve):Ae<oe.length&&_e("FieldMismatch","TooFewFields","Too few fields: expected "+oe.length+" fields but parsed "+Ae,D+Ve)),We}var ye=1;return!ie.data.length||Array.isArray(ie.data[0])?(ie.data=ie.data.map(me),ye=ie.data.length):ie.data=me(ie.data,0),T.header&&ie.meta&&(ie.meta.fields=oe),D+=ye,ie}()}function K(){return T.header&&oe.length===0}function te(me,ye){return Te=me,T.dynamicTypingFunction&&T.dynamicTyping[Te]===void 0&&(T.dynamicTyping[Te]=T.dynamicTypingFunction(Te)),(T.dynamicTyping[Te]||T.dynamicTyping)===!0?ye==="true"||ye==="TRUE"||ye!=="false"&&ye!=="FALSE"&&(function(Ve){if(X.test(Ve)){var Ae=parseFloat(Ve);if(k<Ae&&Ae<F)return!0}return!1}(ye)?parseFloat(ye):ee.test(ye)?new Date(ye):ye===""?null:ye):ye;var Te}function _e(me,ye,Te,Ve){var Ae={type:me,code:ye,message:Te};Ve!==void 0&&(Ae.row=Ve),ie.errors.push(Ae)}this.parse=function(me,ye,Te){var Ve=T.quoteChar||'"';if(T.newline||(T.newline=function(L,Ce){L=L.substring(0,1048576);var Oe=new RegExp(g(Ce)+"([^]*?)"+g(Ce),"gm"),qe=(L=L.replace(Oe,"")).split("\r"),de=L.split(`
`),ke=1<de.length&&de[0].length<qe[0].length;if(qe.length===1||ke)return`
`;for(var Ee=0,Se=0;Se<qe.length;Se++)qe[Se][0]===`
`&&Ee++;return Ee>=qe.length/2?`\r
`:"\r"}(me,Ve)),P=!1,T.delimiter)R(T.delimiter)&&(T.delimiter=T.delimiter(me),ie.meta.delimiter=T.delimiter);else{var Ae=function(L,Ce,Oe,qe,de){var ke,Ee,Se,A;de=de||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var M=0;M<de.length;M++){var O=de[M],re=0,le=0,Q=0;Se=void 0;for(var De=new u({comments:qe,delimiter:O,newline:Ce,preview:10}).parse(L),N=0;N<De.data.length;N++)if(Oe&&Be(De.data[N]))Q++;else{var B=De.data[N].length;le+=B,Se!==void 0?0<B&&(re+=Math.abs(B-Se),Se=B):Se=B}0<De.data.length&&(le/=De.data.length-Q),(Ee===void 0||re<=Ee)&&(A===void 0||A<le)&&1.99<le&&(Ee=re,ke=O,A=le)}return{successful:!!(T.delimiter=ke),bestDelimiter:ke}}(me,T.newline,T.skipEmptyLines,T.comments,T.delimitersToGuess);Ae.successful?T.delimiter=Ae.bestDelimiter:(P=!0,T.delimiter=l.DefaultDelimiter),ie.meta.delimiter=T.delimiter}var We=C(T);return T.preview&&T.header&&We.preview++,x=me,y=new u(We),ie=y.parse(x,ye,Te),Ie(),U?{meta:{paused:!0}}:ie||{meta:{paused:!1}}},this.paused=function(){return U},this.pause=function(){U=!0,y.abort(),x=R(T.chunk)?"":x.substring(y.getCharIndex())},this.resume=function(){q.streamer._halted?(U=!1,q.streamer.parseChunk(x,!0)):setTimeout(q.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,y.abort(),ie.meta.aborted=!0,R(T.complete)&&T.complete(ie),x=""}}function g(T){return T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function u(T){var x,y=(T=T||{}).delimiter,P=T.newline,F=T.comments,k=T.step,X=T.preview,ee=T.fastMode,q=x=T.quoteChar===void 0||T.quoteChar===null?'"':T.quoteChar;if(T.escapeChar!==void 0&&(q=T.escapeChar),(typeof y!="string"||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=","),F===y)throw new Error("Comment character same as delimiter");F===!0?F="#":(typeof F!="string"||-1<l.BAD_DELIMITERS.indexOf(F))&&(F=!1),P!==`
`&&P!=="\r"&&P!==`\r
`&&(P=`
`);var $=0,D=!1;this.parse=function(U,Y,oe){if(typeof U!="string")throw new Error("Input must be a string");var ie=U.length,Ue=y.length,Be=P.length,Ie=F.length,K=R(k),te=[],_e=[],me=[],ye=$=0;if(!U)return G();if(T.header&&!Y){var Te=U.split(P)[0].split(y),Ve=[],Ae={},We=!1;for(var L in Te){var Ce=Te[L];R(T.transformHeader)&&(Ce=T.transformHeader(Ce,L));var Oe=Ce,qe=Ae[Ce]||0;for(0<qe&&(We=!0,Oe=Ce+"_"+qe),Ae[Ce]=qe+1;Ve.includes(Oe);)Oe=Oe+"_"+qe;Ve.push(Oe)}if(We){var de=U.split(P);de[0]=Ve.join(y),U=de.join(P)}}if(ee||ee!==!1&&U.indexOf(x)===-1){for(var ke=U.split(P),Ee=0;Ee<ke.length;Ee++){if(me=ke[Ee],$+=me.length,Ee!==ke.length-1)$+=P.length;else if(oe)return G();if(!F||me.substring(0,Ie)!==F){if(K){if(te=[],Q(me.split(y)),W(),D)return G()}else Q(me.split(y));if(X&&X<=Ee)return te=te.slice(0,X),G(!0)}}return G()}for(var Se=U.indexOf(y,$),A=U.indexOf(P,$),M=new RegExp(g(q)+g(x),"g"),O=U.indexOf(x,$);;)if(U[$]!==x)if(F&&me.length===0&&U.substring($,$+Ie)===F){if(A===-1)return G();$=A+Be,A=U.indexOf(P,$),Se=U.indexOf(y,$)}else if(Se!==-1&&(Se<A||A===-1))me.push(U.substring($,Se)),$=Se+Ue,Se=U.indexOf(y,$);else{if(A===-1)break;if(me.push(U.substring($,A)),B(A+Be),K&&(W(),D))return G();if(X&&te.length>=X)return G(!0)}else for(O=$,$++;;){if((O=U.indexOf(x,O+1))===-1)return oe||_e.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:te.length,index:$}),N();if(O===ie-1)return N(U.substring($,O).replace(M,x));if(x!==q||U[O+1]!==q){if(x===q||O===0||U[O-1]!==q){Se!==-1&&Se<O+1&&(Se=U.indexOf(y,O+1)),A!==-1&&A<O+1&&(A=U.indexOf(P,O+1));var re=De(A===-1?Se:Math.min(Se,A));if(U.substr(O+1+re,Ue)===y){me.push(U.substring($,O).replace(M,x)),U[$=O+1+re+Ue]!==x&&(O=U.indexOf(x,$)),Se=U.indexOf(y,$),A=U.indexOf(P,$);break}var le=De(A);if(U.substring(O+1+le,O+1+le+Be)===P){if(me.push(U.substring($,O).replace(M,x)),B(O+1+le+Be),Se=U.indexOf(y,$),O=U.indexOf(x,$),K&&(W(),D))return G();if(X&&te.length>=X)return G(!0);break}_e.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:te.length,index:$}),O++}}else O++}return N();function Q(j){te.push(j),ye=$}function De(j){var pe=0;if(j!==-1){var xe=U.substring(O+1,j);xe&&xe.trim()===""&&(pe=xe.length)}return pe}function N(j){return oe||(j===void 0&&(j=U.substring($)),me.push(j),$=ie,Q(me),K&&W()),G()}function B(j){$=j,Q(me),me=[],A=U.indexOf(P,$)}function G(j){return{data:te,errors:_e,meta:{delimiter:y,linebreak:P,aborted:D,truncated:!!j,cursor:ye+(Y||0)}}}function W(){k(G()),te=[],_e=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return $}}function m(T){var x=T.data,y=a[x.workerId],P=!1;if(x.error)y.userError(x.error,x.file);else if(x.results&&x.results.data){var F={abort:function(){P=!0,v(x.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(R(y.userStep)){for(var k=0;k<x.results.data.length&&(y.userStep({data:x.results.data[k],errors:x.results.errors,meta:x.results.meta},F),!P);k++);delete x.results}else R(y.userChunk)&&(y.userChunk(x.results,F,x.file),delete x.results)}x.finished&&!P&&v(x.workerId,x.results)}function v(T,x){var y=a[T];R(y.userComplete)&&y.userComplete(x),y.terminate(),delete a[T]}function E(){throw new Error("Not implemented.")}function C(T){if(typeof T!="object"||T===null)return T;var x=Array.isArray(T)?[]:{};for(var y in T)x[y]=C(T[y]);return x}function b(T,x){return function(){T.apply(x,arguments)}}function R(T){return typeof T=="function"}return s&&(i.onmessage=function(T){var x=T.data;if(l.WORKER_ID===void 0&&x&&(l.WORKER_ID=x.workerId),typeof x.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(x.input,x.config),finished:!0});else if(i.File&&x.input instanceof File||x.input instanceof Object){var y=l.parse(x.input,x.config);y&&i.postMessage({workerId:l.WORKER_ID,results:y,finished:!0})}}),(d.prototype=Object.create(f.prototype)).constructor=d,(h.prototype=Object.create(f.prototype)).constructor=h,(p.prototype=Object.create(p.prototype)).constructor=p,(_.prototype=Object.create(f.prototype)).constructor=_,l})})(q2);const Y2=Ad;function $2(t){const e=t.toString().split("/").map(Number),n=new Date(e[2],e[1]-1,e[0]),i=n.getDate(),r=n.toLocaleString("default",{month:"long"}),s=n.getFullYear();return`${r} ${i}, ${s}`}function K2(){const[t,e]=be.useState([]),[n,i]=be.useState([]),r=YS();return be.useEffect(()=>{Y2.parse("../../../certifications/certificates.csv",{download:!0,header:!0,complete:s=>{e(s.data)}})},[]),be.useEffect(()=>{i(Array.from(new Set(t.filter(s=>s.name.length!==0).map(s=>s.issued_by))))},[t]),z.jsx(Bg,{children:z.jsxs("div",{className:"mx-8 mt-[10vh]",children:[z.jsx(qg,{}),z.jsx(Yg,{}),z.jsx("div",{className:"flex justify-center",children:z.jsxs("div",{className:"w-full max-w-5xl",children:[z.jsxs("div",{className:"flex items-center justify-center relative mb-16",children:[z.jsxs("button",{onClick:()=>r("/"),className:"absolute left-0 mt-8 text-gray-400 hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-2 group border-none bg-transparent","aria-label":"Back to home",children:[z.jsx(x1,{className:"w-5 h-5"}),z.jsx("span",{className:"hidden md:inline text-sm sfmono-reg",children:"Back"})]}),z.jsx("h1",{className:"mt-8 text-[1.4rem] md:text-[2.5rem] text-center",children:"Certifications"})]}),z.jsx("div",{className:"space-y-8",children:n.map((s,a)=>z.jsxs("div",{children:[z.jsx(D2,{sn:`0${a+1}.`,title:s}),z.jsx("table",{className:"w-full",children:z.jsxs("tbody",{children:[z.jsxs("tr",{children:[z.jsx("th",{children:" "}),z.jsx("th",{className:"text-gray-500 text-right",children:"Issued Date"})]}),t.map((o,l)=>o.name&&o.issued_by===s&&z.jsxs("tr",{className:"hover:bg-gray-700/50 transition-all ease-in-out cursor-pointer hover-underline-animation-parent",onClick:()=>Xg(o.credential_url),children:[z.jsx("td",{className:"p-3 pr-4 md:pr-10 rounded-l-md",children:z.jsx("a",{className:"text-sky-400 hover:text-sky-400 hover-underline-animation",children:o.name})}),z.jsx("td",{className:"text-gray-400 text-right rounded-r-md pr-2",children:$2(o.issued_date)})]},l))]})})]},a))})]})}),z.jsx(bv,{})]})})}const Z2=f1([{path:"/",element:z.jsx(j2,{})},{path:"/certificates",element:z.jsx(K2,{})}]);Ou.createRoot(document.getElementById("root")).render(z.jsx(sr.StrictMode,{children:z.jsx(o1,{router:Z2})}));
