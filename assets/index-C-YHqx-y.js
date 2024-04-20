(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jg={exports:{}},au={},ev={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),jx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),hp=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nv=Object.assign,iv={};function ss(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||tv}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rv(){}rv.prototype=ss.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||tv}var jd=Xd.prototype=new rv;jd.constructor=Xd;nv(jd,ss.prototype);jd.isPureReactComponent=!0;var pp=Array.isArray,ov=Object.prototype.hasOwnProperty,Yd={current:null},sv={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ov.call(e,i)&&!sv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:o,ref:s,props:r,_owner:Yd.current}}function ew(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function tw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mp=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tw(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case pa:case Vx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Fu(s,0):i,pp(r)?(n="",t!=null&&(n=t.replace(mp,"$&/")+"/"),_l(r,e,n,"",function(c){return c})):r!=null&&(qd(r)&&(r=ew(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(mp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",pp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Fu(o,a);s+=_l(o,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Fu(o,a++),s+=_l(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(o){return e.call(n,o,r++)}),i}function nw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},yl={transition:null},iw={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Yd};it.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ss;it.Fragment=Wx;it.Profiler=jx;it.PureComponent=Xd;it.StrictMode=Xx;it.Suspense=Kx;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Yd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ov.call(e,l)&&!sv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:o,props:i,_owner:s}};it.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};it.createElement=av;it.createFactory=function(t){var e=av.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:$x,render:t}};it.isValidElement=qd;it.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:nw}};it.memo=function(t,e){return{$$typeof:Zx,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};it.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};it.useCallback=function(t,e){return gn.current.useCallback(t,e)};it.useContext=function(t){return gn.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};it.useEffect=function(t,e){return gn.current.useEffect(t,e)};it.useId=function(){return gn.current.useId()};it.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return gn.current.useMemo(t,e)};it.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};it.useRef=function(t){return gn.current.useRef(t)};it.useState=function(t){return gn.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return gn.current.useTransition()};it.version="18.2.0";ev.exports=it;var $d=ev.exports;const rw=Qg($d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ow=$d,sw=Symbol.for("react.element"),aw=Symbol.for("react.fragment"),lw=Object.prototype.hasOwnProperty,uw=ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cw={key:!0,ref:!0,__self:!0,__source:!0};function lv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)lw.call(e,i)&&!cw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sw,type:t,key:o,ref:s,props:r,_owner:uw.current}}au.Fragment=aw;au.jsx=lv;au.jsxs=lv;Jg.exports=au;var gp=Jg.exports,Hc={},uv={exports:{}},In={},cv={exports:{}},dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,X){var q=N.length;N.push(X);e:for(;0<q;){var re=q-1>>>1,ge=N[re];if(0<r(ge,X))N[re]=X,N[q]=ge,q=re;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var X=N[0],q=N.pop();if(q!==X){N[0]=q;e:for(var re=0,ge=N.length,B=ge>>>1;re<B;){var j=2*(re+1)-1,se=N[j],ye=j+1,Ue=N[ye];if(0>r(se,q))ye<ge&&0>r(Ue,se)?(N[re]=Ue,N[ye]=q,re=ye):(N[re]=se,N[j]=q,re=j);else if(ye<ge&&0>r(Ue,q))N[re]=Ue,N[ye]=q,re=ye;else break e}}return X}function r(N,X){var q=N.sortIndex-X.sortIndex;return q!==0?q:N.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],h=1,p=null,m=3,v=!1,S=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=N)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function A(N){if(E=!1,x(N),!S)if(n(l)!==null)S=!0,K(I);else{var X=n(c);X!==null&&ie(A,X.startTime-N)}}function I(N,X){S=!1,E&&(E=!1,d(k),k=-1),v=!0;var q=m;try{for(x(X),p=n(l);p!==null&&(!(p.expirationTime>X)||N&&!D());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var ge=re(p.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(l)&&i(l),x(X)}else i(l);p=n(l)}if(p!==null)var B=!0;else{var j=n(c);j!==null&&ie(A,j.startTime-X),B=!1}return B}finally{p=null,m=q,v=!1}}var P=!1,C=null,k=-1,ne=5,M=-1;function D(){return!(t.unstable_now()-M<ne)}function ue(){if(C!==null){var N=t.unstable_now();M=N;var X=!0;try{X=C(!0,N)}finally{X?le():(P=!1,C=null)}}else P=!1}var le;if(typeof w=="function")le=function(){w(ue)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,J=F.port2;F.port1.onmessage=ue,le=function(){J.postMessage(null)}}else le=function(){g(ue,0)};function K(N){C=N,P||(P=!0,le())}function ie(N,X){k=g(function(){N(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,K(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var q=m;m=X;try{return N()}finally{m=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=m;m=N;try{return X()}finally{m=q}},t.unstable_scheduleCallback=function(N,X,q){var re=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,N){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=q+ge,N={id:h++,callback:X,priorityLevel:N,startTime:q,expirationTime:ge,sortIndex:-1},q>re?(N.sortIndex=q,e(c,N),n(l)===null&&N===n(c)&&(E?(d(k),k=-1):E=!0,ie(A,q-re))):(N.sortIndex=ge,e(l,N),S||v||(S=!0,K(I))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var X=m;return function(){var q=m;m=X;try{return N.apply(this,arguments)}finally{m=q}}}})(dv);cv.exports=dv;var dw=cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=$d,Dn=dw;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hv=new Set,qs={};function Zr(t,e){$o(t,e),$o(t+"Capture",e)}function $o(t,e){for(qs[t]=e,t=0;t<e.length;t++)hv.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=Object.prototype.hasOwnProperty,fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vp={},_p={};function hw(t){return Gc.call(_p,t)?!0:Gc.call(vp,t)?!1:fw.test(t)?_p[t]=!0:(vp[t]=!0,!1)}function pw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mw(t,e,n,i){if(e===null||typeof e>"u"||pw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Qt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mw(e,n,r,i)&&(n=null),i||r===null?hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),bo=Symbol.for("react.portal"),Co=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),gv=Symbol.for("react.offscreen"),yp=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,ku;function Is(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Bu=!1;function zu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function gw(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Co:return"Fragment";case bo:return"Portal";case Vc:return"Profiler";case Jd:return"StrictMode";case Wc:return"Suspense";case Xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mv:return(t.displayName||"Context")+".Consumer";case pv:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function vw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _w(t){var e=vv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=_w(t))}function _v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yc(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yv(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function qc(t,e){yv(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(Us(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function xv(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,Sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yw=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){yw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function Ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function Mv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ev(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xw=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(xw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Go=null,Vo=null;function Mp(t){if(t=va(t)){if(typeof td!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=fu(e),td(t.stateNode,t.type,e))}}function Tv(t){Go?Vo?Vo.push(t):Vo=[t]:Go=t}function Av(){if(Go){var t=Go,e=Vo;if(Vo=Go=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function bv(t,e){return t(e)}function Cv(){}var Hu=!1;function Rv(t,e,n){if(Hu)return t(e,n);Hu=!0;try{return bv(t,e,n)}finally{Hu=!1,(Go!==null||Vo!==null)&&(Cv(),Av())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var i=fu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var nd=!1;if(Di)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){nd=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{nd=!1}function ww(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ks=!1,Dl=null,Il=!1,id=null,Sw={onError:function(t){ks=!0,Dl=t}};function Ew(t,e,n,i,r,o,s,a,l){ks=!1,Dl=null,ww.apply(Sw,arguments)}function Mw(t,e,n,i,r,o,s,a,l){if(Ew.apply(this,arguments),ks){if(ks){var c=Dl;ks=!1,Dl=null}else throw Error(fe(198));Il||(Il=!0,id=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tp(t){if(Qr(t)!==t)throw Error(fe(188))}function Tw(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Tp(r),t;if(o===i)return Tp(r),e;o=o.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function Lv(t){return t=Tw(t),t!==null?Dv(t):null}function Dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dv(t);if(e!==null)return e;t=t.sibling}return null}var Iv=Dn.unstable_scheduleCallback,Ap=Dn.unstable_cancelCallback,Aw=Dn.unstable_shouldYield,bw=Dn.unstable_requestPaint,Ot=Dn.unstable_now,Cw=Dn.unstable_getCurrentPriorityLevel,rf=Dn.unstable_ImmediatePriority,Uv=Dn.unstable_UserBlockingPriority,Ul=Dn.unstable_NormalPriority,Rw=Dn.unstable_LowPriority,Nv=Dn.unstable_IdlePriority,lu=null,pi=null;function Pw(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:Iw,Lw=Math.log,Dw=Math.LN2;function Iw(t){return t>>>=0,t===0?32:31-(Lw(t)/Dw|0)|0}var Fa=64,ka=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ns(a):(o&=s,o!==0&&(i=Ns(o)))}else s=n&~r,s!==0?i=Ns(s):o!==0&&(i=Ns(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function Uw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ii(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Uw(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function Ow(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function Fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kv,sf,Bv,zv,Hv,od=!1,Ba=[],rr=null,or=null,sr=null,Zs=new Map,Qs=new Map,Qi=[],Fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function Ss(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kw(t,e,n,i,r){switch(e){case"focusin":return rr=Ss(rr,t,e,n,i,r),!0;case"dragenter":return or=Ss(or,t,e,n,i,r),!0;case"mouseover":return sr=Ss(sr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Zs.set(o,Ss(Zs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Qs.set(o,Ss(Qs.get(o)||null,t,e,n,i,r)),!0}return!1}function Gv(t){var e=Or(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,Hv(t.priority,function(){Bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ed=i,n.target.dispatchEvent(i),ed=null}else return e=va(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Cp(t,e,n){xl(t)&&n.delete(e)}function Bw(){od=!1,rr!==null&&xl(rr)&&(rr=null),or!==null&&xl(or)&&(or=null),sr!==null&&xl(sr)&&(sr=null),Zs.forEach(Cp),Qs.forEach(Cp)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Bw)))}function Js(t){function e(r){return Es(r,t)}if(0<Ba.length){Es(Ba[0],t);for(var n=1;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&Es(rr,t),or!==null&&Es(or,t),sr!==null&&Es(sr,t),Zs.forEach(e),Qs.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Qi.shift()}var Wo=Fi.ReactCurrentBatchConfig,Ol=!0;function zw(t,e,n,i){var r=ct,o=Wo.transition;Wo.transition=null;try{ct=1,af(t,e,n,i)}finally{ct=r,Wo.transition=o}}function Hw(t,e,n,i){var r=ct,o=Wo.transition;Wo.transition=null;try{ct=4,af(t,e,n,i)}finally{ct=r,Wo.transition=o}}function af(t,e,n,i){if(Ol){var r=sd(t,e,n,i);if(r===null)Qu(t,e,i,Fl,n),bp(t,i);else if(kw(r,t,e,n,i))i.stopPropagation();else if(bp(t,i),e&4&&-1<Fw.indexOf(t)){for(;r!==null;){var o=va(r);if(o!==null&&kv(o),o=sd(t,e,n,i),o===null&&Qu(t,e,i,Fl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Fl=null;function sd(t,e,n,i){if(Fl=null,t=nf(i),t=Or(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cw()){case rf:return 1;case Uv:return 4;case Ul:case Rw:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var tr=null,lf=null,wl=null;function Wv(){if(wl)return wl;var t,e=lf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return wl=r.slice(t,1<i?1-i:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function Rp(){return!1}function Un(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?za:Rp,this.isPropagationStopped=Rp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=Un(as),ga=Rt({},as,{view:0,detail:0}),Gw=Un(ga),Vu,Wu,Ms,uu=Rt({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(Vu=t.screenX-Ms.screenX,Wu=t.screenY-Ms.screenY):Wu=Vu=0,Ms=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Pp=Un(uu),Vw=Rt({},uu,{dataTransfer:0}),Ww=Un(Vw),Xw=Rt({},ga,{relatedTarget:0}),Xu=Un(Xw),jw=Rt({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Yw=Un(jw),qw=Rt({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$w=Un(qw),Kw=Rt({},as,{data:0}),Lp=Un(Kw),Zw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jw[t])?!!e[t]:!1}function cf(){return eS}var tS=Rt({},ga,{key:function(t){if(t.key){var e=Zw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nS=Un(tS),iS=Rt({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Un(iS),rS=Rt({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),oS=Un(rS),sS=Rt({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=Un(sS),lS=Rt({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uS=Un(lS),cS=[9,13,27,32],df=Di&&"CompositionEvent"in window,Bs=null;Di&&"documentMode"in document&&(Bs=document.documentMode);var dS=Di&&"TextEvent"in window&&!Bs,Xv=Di&&(!df||Bs&&8<Bs&&11>=Bs),Ip=" ",Up=!1;function jv(t,e){switch(t){case"keyup":return cS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function fS(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(Up=!0,Ip);case"textInput":return t=e.data,t===Ip&&Up?null:t;default:return null}}function hS(t,e){if(Ro)return t==="compositionend"||!df&&jv(t,e)?(t=Wv(),wl=lf=tr=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xv&&e.locale!=="ko"?null:e.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pS[t.type]:e==="textarea"}function qv(t,e,n,i){Tv(i),e=kl(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zs=null,ea=null;function mS(t){o0(t,0)}function cu(t){var e=Do(t);if(_v(e))return t}function gS(t,e){if(t==="change")return e}var $v=!1;if(Di){var ju;if(Di){var Yu="oninput"in document;if(!Yu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Yu=typeof Op.oninput=="function"}ju=Yu}else ju=!1;$v=ju&&(!document.documentMode||9<document.documentMode)}function Fp(){zs&&(zs.detachEvent("onpropertychange",Kv),ea=zs=null)}function Kv(t){if(t.propertyName==="value"&&cu(ea)){var e=[];qv(e,ea,t,nf(t)),Rv(mS,e)}}function vS(t,e,n){t==="focusin"?(Fp(),zs=e,ea=n,zs.attachEvent("onpropertychange",Kv)):t==="focusout"&&Fp()}function _S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(ea)}function yS(t,e){if(t==="click")return cu(e)}function xS(t,e){if(t==="input"||t==="change")return cu(e)}function wS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:wS;function ta(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gc.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function Zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qv(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SS(t){var e=Qv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zv(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Bp(n,o);var s=Bp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ES=Di&&"documentMode"in document&&11>=document.documentMode,Po=null,ad=null,Hs=null,ld=!1;function zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Po==null||Po!==Ll(i)||(i=Po,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&ta(Hs,i)||(Hs=i,i=kl(ad,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Po)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lo={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},qu={},Jv={};Di&&(Jv=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function du(t){if(qu[t])return qu[t];if(!Lo[t])return t;var e=Lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jv)return qu[t]=e[n];return t}var e0=du("animationend"),t0=du("animationiteration"),n0=du("animationstart"),i0=du("transitionend"),r0=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){r0.set(t,e),Zr(e,[t])}for(var $u=0;$u<Hp.length;$u++){var Ku=Hp[$u],MS=Ku.toLowerCase(),TS=Ku[0].toUpperCase()+Ku.slice(1);yr(MS,"on"+TS)}yr(e0,"onAnimationEnd");yr(t0,"onAnimationIteration");yr(n0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(i0,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mw(i,e,void 0,t),t.currentTarget=null}function o0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Gp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Gp(r,a,c),o=l}}}if(Il)throw t=id,Il=!1,id=null,t}function _t(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var i=t+"__bubble";n.has(i)||(s0(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),s0(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Ga]){t[Ga]=!0,hv.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Zu("selectionchange",!1,e))}}function s0(t,e,n,i){switch(Vv(e)){case 1:var r=zw;break;case 4:r=Hw;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Rv(function(){var c=o,h=nf(n),p=[];e:{var m=r0.get(t);if(m!==void 0){var v=uf,S=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":v=nS;break;case"focusin":S="focus",v=Xu;break;case"focusout":S="blur",v=Xu;break;case"beforeblur":case"afterblur":v=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=oS;break;case e0:case t0:case n0:v=Yw;break;case i0:v=aS;break;case"scroll":v=Gw;break;case"wheel":v=uS;break;case"copy":case"cut":case"paste":v=$w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Dp}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?m!==null?m+"Capture":null:m;E=[];for(var w=c,x;w!==null;){x=w;var A=x.stateNode;if(x.tag===5&&A!==null&&(x=A,d!==null&&(A=Ks(w,d),A!=null&&E.push(ia(w,A,x)))),g)break;w=w.return}0<E.length&&(m=new v(m,S,null,n,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==ed&&(S=n.relatedTarget||n.fromElement)&&(Or(S)||S[Ii]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?Or(S):null,S!==null&&(g=Qr(S),S!==g||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(E=Pp,A="onMouseLeave",d="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(E=Dp,A="onPointerLeave",d="onPointerEnter",w="pointer"),g=v==null?m:Do(v),x=S==null?m:Do(S),m=new E(A,w+"leave",v,n,h),m.target=g,m.relatedTarget=x,A=null,Or(h)===c&&(E=new E(d,w+"enter",S,n,h),E.target=x,E.relatedTarget=g,A=E),g=A,v&&S)t:{for(E=v,d=S,w=0,x=E;x;x=so(x))w++;for(x=0,A=d;A;A=so(A))x++;for(;0<w-x;)E=so(E),w--;for(;0<x-w;)d=so(d),x--;for(;w--;){if(E===d||d!==null&&E===d.alternate)break t;E=so(E),d=so(d)}E=null}else E=null;v!==null&&Vp(p,m,v,E,!1),S!==null&&g!==null&&Vp(p,g,S,E,!0)}}e:{if(m=c?Do(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var I=gS;else if(Np(m))if($v)I=xS;else{I=_S;var P=vS}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=yS);if(I&&(I=I(t,c))){qv(p,I,n,h);break e}P&&P(t,m,c),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&$c(m,"number",m.value)}switch(P=c?Do(c):window,t){case"focusin":(Np(P)||P.contentEditable==="true")&&(Po=P,ad=c,Hs=null);break;case"focusout":Hs=ad=Po=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,zp(p,n,h);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":zp(p,n,h)}var C;if(df)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ro?jv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Xv&&n.locale!=="ko"&&(Ro||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ro&&(C=Wv()):(tr=h,lf="value"in tr?tr.value:tr.textContent,Ro=!0)),P=kl(c,k),0<P.length&&(k=new Lp(k,t,null,n,h),p.push({event:k,listeners:P}),C?k.data=C:(C=Yv(n),C!==null&&(k.data=C)))),(C=dS?fS(t,n):hS(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(h=new Lp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}o0(p,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ks(t,n),o!=null&&i.unshift(ia(t,o,r)),o=Ks(t,e),o!=null&&i.push(ia(t,o,r))),t=t.return}return i}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ks(n,o),l!=null&&s.unshift(ia(n,l,a))):r||(l=Ks(n,o),l!=null&&s.push(ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var bS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(CS,"")}function Va(t,e,n){if(e=Wp(e),Wp(t)!==e&&n)throw Error(fe(425))}function Bl(){}var ud=null,cd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(LS)}:fd;function LS(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Js(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Js(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),fi="__reactFiber$"+ls,ra="__reactProps$"+ls,Ii="__reactContainer$"+ls,hd="__reactEvents$"+ls,DS="__reactListeners$"+ls,IS="__reactHandles$"+ls;function Or(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jp(t);t!==null;){if(n=t[fi])return n;t=jp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[fi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function fu(t){return t[ra]||null}var pd=[],Io=-1;function xr(t){return{current:t}}function xt(t){0>Io||(t.current=pd[Io],pd[Io]=null,Io--)}function gt(t,e){Io++,pd[Io]=t.current,t.current=e}var gr={},an=xr(gr),Sn=xr(!1),Wr=gr;function Ko(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function zl(){xt(Sn),xt(an)}function Yp(t,e,n){if(an.current!==gr)throw Error(fe(168));gt(an,e),gt(Sn,n)}function a0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,vw(t)||"Unknown",r));return Rt({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Wr=an.current,gt(an,t),gt(Sn,Sn.current),!0}function qp(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=a0(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,xt(Sn),xt(an),gt(an,t)):xt(Sn),gt(Sn,n)}var Ai=null,hu=!1,ec=!1;function l0(t){Ai===null?Ai=[t]:Ai.push(t)}function US(t){hu=!0,l0(t)}function wr(){if(!ec&&Ai!==null){ec=!0;var t=0,e=ct;try{var n=Ai;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,hu=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Iv(rf,wr),r}finally{ct=e,ec=!1}}return null}var Uo=[],No=0,Gl=null,Vl=0,Fn=[],kn=0,Xr=null,Ci=1,Ri="";function Lr(t,e){Uo[No++]=Vl,Uo[No++]=Gl,Gl=t,Vl=e}function u0(t,e,n){Fn[kn++]=Ci,Fn[kn++]=Ri,Fn[kn++]=Xr,Xr=t;var i=Ci;t=Ri;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var o=32-ii(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ci=1<<32-ii(e)+r|n<<r|i,Ri=o+t}else Ci=1<<o|n<<r|i,Ri=t}function hf(t){t.return!==null&&(Lr(t,1),u0(t,1,0))}function pf(t){for(;t===Gl;)Gl=Uo[--No],Uo[No]=null,Vl=Uo[--No],Uo[No]=null;for(;t===Xr;)Xr=Fn[--kn],Fn[kn]=null,Ri=Fn[--kn],Fn[kn]=null,Ci=Fn[--kn],Fn[kn]=null}var Rn=null,Cn=null,Et=!1,Jn=null;function c0(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(Et){var e=Cn;if(e){var n=e;if(!$p(t,e)){if(md(t))throw Error(fe(418));e=ar(n.nextSibling);var i=Rn;e&&$p(t,e)?c0(i,n):(t.flags=t.flags&-4097|2,Et=!1,Rn=t)}}else{if(md(t))throw Error(fe(418));t.flags=t.flags&-4097|2,Et=!1,Rn=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Wa(t){if(t!==Rn)return!1;if(!Et)return Kp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=Cn)){if(md(t))throw d0(),Error(fe(418));for(;e;)c0(t,e),e=ar(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?ar(t.stateNode.nextSibling):null;return!0}function d0(){for(var t=Cn;t;)t=ar(t.nextSibling)}function Zo(){Cn=Rn=null,Et=!1}function mf(t){Jn===null?Jn=[t]:Jn.push(t)}var NS=Fi.ReactCurrentBatchConfig;function Zn(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wl=xr(null),Xl=null,Oo=null,gf=null;function vf(){gf=Oo=Xl=null}function _f(t){var e=Wl.current;xt(Wl),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xo(t,e){Xl=t,gf=Oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},Oo===null){if(Xl===null)throw Error(fe(308));Oo=t,Xl.dependencies={lanes:0,firstContext:t}}else Oo=Oo.next=t;return e}var Fr=null;function yf(t){Fr===null?Fr=[t]:Fr.push(t)}function f0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function Zp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Ki=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(o!==null){var p=r.baseState;s=0,h=c=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,E=a;switch(m=e,v=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(v,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(v,p,m):S,m==null)break e;p=Rt({},p,m);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=p):h=h.next=v,s|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Yr|=s,t.lanes=s,t.memoizedState=p}}function Qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var p0=new fv.Component().refs;function _d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=cr(t),o=Li(i,r);o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ri(e,t,r,i),El(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=cr(t),o=Li(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ri(e,t,r,i),El(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=cr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ri(e,t,i,n),El(e,t,i))}};function Jp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,o):!0}function m0(t,e,n){var i=!1,r=gr,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(r=En(e)?Wr:an.current,i=e.contextTypes,o=(i=i!=null)?Ko(t,r):gr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function em(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=p0,xf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Gn(o):(o=En(e)?Wr:an.current,r.context=Ko(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(_d(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pu.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===p0&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tm(t){var e=t._init;return e(t._payload)}function g0(t){function e(d,w){if(t){var x=d.deletions;x===null?(d.deletions=[w],d.flags|=16):x.push(w)}}function n(d,w){if(!t)return null;for(;w!==null;)e(d,w),w=w.sibling;return null}function i(d,w){for(d=new Map;w!==null;)w.key!==null?d.set(w.key,w):d.set(w.index,w),w=w.sibling;return d}function r(d,w){return d=dr(d,w),d.index=0,d.sibling=null,d}function o(d,w,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<w?(d.flags|=2,w):x):(d.flags|=2,w)):(d.flags|=1048576,w)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,w,x,A){return w===null||w.tag!==6?(w=ac(x,d.mode,A),w.return=d,w):(w=r(w,x),w.return=d,w)}function l(d,w,x,A){var I=x.type;return I===Co?h(d,w,x.props.children,A,x.key):w!==null&&(w.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$i&&tm(I)===w.type)?(A=r(w,x.props),A.ref=Ts(d,w,x),A.return=d,A):(A=Rl(x.type,x.key,x.props,null,d.mode,A),A.ref=Ts(d,w,x),A.return=d,A)}function c(d,w,x,A){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=lc(x,d.mode,A),w.return=d,w):(w=r(w,x.children||[]),w.return=d,w)}function h(d,w,x,A,I){return w===null||w.tag!==7?(w=Hr(x,d.mode,A,I),w.return=d,w):(w=r(w,x),w.return=d,w)}function p(d,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ac(""+w,d.mode,x),w.return=d,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ua:return x=Rl(w.type,w.key,w.props,null,d.mode,x),x.ref=Ts(d,null,w),x.return=d,x;case bo:return w=lc(w,d.mode,x),w.return=d,w;case $i:var A=w._init;return p(d,A(w._payload),x)}if(Us(w)||xs(w))return w=Hr(w,d.mode,x,null),w.return=d,w;Xa(d,w)}return null}function m(d,w,x,A){var I=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return I!==null?null:a(d,w,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return x.key===I?l(d,w,x,A):null;case bo:return x.key===I?c(d,w,x,A):null;case $i:return I=x._init,m(d,w,I(x._payload),A)}if(Us(x)||xs(x))return I!==null?null:h(d,w,x,A,null);Xa(d,x)}return null}function v(d,w,x,A,I){if(typeof A=="string"&&A!==""||typeof A=="number")return d=d.get(x)||null,a(w,d,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ua:return d=d.get(A.key===null?x:A.key)||null,l(w,d,A,I);case bo:return d=d.get(A.key===null?x:A.key)||null,c(w,d,A,I);case $i:var P=A._init;return v(d,w,x,P(A._payload),I)}if(Us(A)||xs(A))return d=d.get(x)||null,h(w,d,A,I,null);Xa(w,A)}return null}function S(d,w,x,A){for(var I=null,P=null,C=w,k=w=0,ne=null;C!==null&&k<x.length;k++){C.index>k?(ne=C,C=null):ne=C.sibling;var M=m(d,C,x[k],A);if(M===null){C===null&&(C=ne);break}t&&C&&M.alternate===null&&e(d,C),w=o(M,w,k),P===null?I=M:P.sibling=M,P=M,C=ne}if(k===x.length)return n(d,C),Et&&Lr(d,k),I;if(C===null){for(;k<x.length;k++)C=p(d,x[k],A),C!==null&&(w=o(C,w,k),P===null?I=C:P.sibling=C,P=C);return Et&&Lr(d,k),I}for(C=i(d,C);k<x.length;k++)ne=v(C,d,k,x[k],A),ne!==null&&(t&&ne.alternate!==null&&C.delete(ne.key===null?k:ne.key),w=o(ne,w,k),P===null?I=ne:P.sibling=ne,P=ne);return t&&C.forEach(function(D){return e(d,D)}),Et&&Lr(d,k),I}function E(d,w,x,A){var I=xs(x);if(typeof I!="function")throw Error(fe(150));if(x=I.call(x),x==null)throw Error(fe(151));for(var P=I=null,C=w,k=w=0,ne=null,M=x.next();C!==null&&!M.done;k++,M=x.next()){C.index>k?(ne=C,C=null):ne=C.sibling;var D=m(d,C,M.value,A);if(D===null){C===null&&(C=ne);break}t&&C&&D.alternate===null&&e(d,C),w=o(D,w,k),P===null?I=D:P.sibling=D,P=D,C=ne}if(M.done)return n(d,C),Et&&Lr(d,k),I;if(C===null){for(;!M.done;k++,M=x.next())M=p(d,M.value,A),M!==null&&(w=o(M,w,k),P===null?I=M:P.sibling=M,P=M);return Et&&Lr(d,k),I}for(C=i(d,C);!M.done;k++,M=x.next())M=v(C,d,k,M.value,A),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?k:M.key),w=o(M,w,k),P===null?I=M:P.sibling=M,P=M);return t&&C.forEach(function(ue){return e(d,ue)}),Et&&Lr(d,k),I}function g(d,w,x,A){if(typeof x=="object"&&x!==null&&x.type===Co&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:e:{for(var I=x.key,P=w;P!==null;){if(P.key===I){if(I=x.type,I===Co){if(P.tag===7){n(d,P.sibling),w=r(P,x.props.children),w.return=d,d=w;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$i&&tm(I)===P.type){n(d,P.sibling),w=r(P,x.props),w.ref=Ts(d,P,x),w.return=d,d=w;break e}n(d,P);break}else e(d,P);P=P.sibling}x.type===Co?(w=Hr(x.props.children,d.mode,A,x.key),w.return=d,d=w):(A=Rl(x.type,x.key,x.props,null,d.mode,A),A.ref=Ts(d,w,x),A.return=d,d=A)}return s(d);case bo:e:{for(P=x.key;w!==null;){if(w.key===P)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(d,w.sibling),w=r(w,x.children||[]),w.return=d,d=w;break e}else{n(d,w);break}else e(d,w);w=w.sibling}w=lc(x,d.mode,A),w.return=d,d=w}return s(d);case $i:return P=x._init,g(d,w,P(x._payload),A)}if(Us(x))return S(d,w,x,A);if(xs(x))return E(d,w,x,A);Xa(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(d,w.sibling),w=r(w,x),w.return=d,d=w):(n(d,w),w=ac(x,d.mode,A),w.return=d,d=w),s(d)):n(d,w)}return g}var Qo=g0(!0),v0=g0(!1),_a={},mi=xr(_a),oa=xr(_a),sa=xr(_a);function kr(t){if(t===_a)throw Error(fe(174));return t}function wf(t,e){switch(gt(sa,e),gt(oa,t),gt(mi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}xt(mi),gt(mi,e)}function Jo(){xt(mi),xt(oa),xt(sa)}function _0(t){kr(sa.current);var e=kr(mi.current),n=Zc(e,t.type);e!==n&&(gt(oa,t),gt(mi,n))}function Sf(t){oa.current===t&&(xt(mi),xt(oa))}var Tt=xr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Ef(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var Ml=Fi.ReactCurrentDispatcher,nc=Fi.ReactCurrentBatchConfig,jr=0,Ct=null,Ht=null,Yt=null,ql=!1,Gs=!1,aa=0,OS=0;function en(){throw Error(fe(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,o){if(jr=o,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?zS:HS,t=n(i,r),Gs){o=0;do{if(Gs=!1,aa=0,25<=o)throw Error(fe(301));o+=1,Yt=Ht=null,e.updateQueue=null,Ml.current=GS,t=n(i,r)}while(Gs)}if(Ml.current=$l,e=Ht!==null&&Ht.next!==null,jr=0,Yt=Ht=Ct=null,ql=!1,e)throw Error(fe(300));return t}function Af(){var t=aa!==0;return aa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Ct.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Vn(){if(Ht===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Yt===null?Ct.memoizedState:Yt.next;if(e!==null)Yt=e,Ht=t;else{if(t===null)throw Error(fe(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?Ct.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function la(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=Vn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var h=c.lane;if((jr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=i):l=l.next=p,Ct.lanes|=h,Yr|=h}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,oi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,Ct.lanes|=o,Yr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);oi(o,e.memoizedState)||(wn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function y0(){}function x0(t,e){var n=Ct,i=Vn(),r=e(),o=!oi(i.memoizedState,r);if(o&&(i.memoizedState=r,wn=!0),i=i.queue,bf(E0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,ua(9,S0.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(fe(349));jr&30||w0(n,e,r)}return r}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S0(t,e,n,i){e.value=n,e.getSnapshot=i,M0(e)&&T0(t)}function E0(t,e,n){return n(function(){M0(e)&&T0(t)})}function M0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function T0(t){var e=Ui(t,1);e!==null&&ri(e,t,1,-1)}function nm(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=BS.bind(null,Ct,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A0(){return Vn().memoizedState}function Tl(t,e,n,i){var r=ui();Ct.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function mu(t,e,n,i){var r=Vn();i=i===void 0?null:i;var o=void 0;if(Ht!==null){var s=Ht.memoizedState;if(o=s.destroy,i!==null&&Mf(i,s.deps)){r.memoizedState=ua(e,n,o,i);return}}Ct.flags|=t,r.memoizedState=ua(1|e,n,o,i)}function im(t,e){return Tl(8390656,8,t,e)}function bf(t,e){return mu(2048,8,t,e)}function b0(t,e){return mu(4,2,t,e)}function C0(t,e){return mu(4,4,t,e)}function R0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P0(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,R0.bind(null,e,t),n)}function Cf(){}function L0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return jr&21?(oi(n,e)||(n=Ov(),Ct.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function FS(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=nc.transition;nc.transition={};try{t(!1),e()}finally{ct=n,nc.transition=i}}function U0(){return Vn().memoizedState}function kS(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},N0(t))O0(e,n);else if(n=f0(t,e,n,i),n!==null){var r=hn();ri(n,t,i,r),F0(n,e,i)}}function BS(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(t))O0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,s)){var l=e.interleaved;l===null?(r.next=r,yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f0(t,e,r,i),n!==null&&(r=hn(),ri(n,t,i,r),F0(n,e,i))}}function N0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function O0(t,e){Gs=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var $l={readContext:Gn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},zS={readContext:Gn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,R0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kS.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:Cf,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=FS.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=ui();if(Et){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),qt===null)throw Error(fe(349));jr&30||w0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,im(E0.bind(null,i,o,t),[t]),i.flags|=2048,ua(9,S0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ui(),e=qt.identifierPrefix;if(Et){var n=Ri,i=Ci;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HS={readContext:Gn,useCallback:L0,useContext:Gn,useEffect:bf,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:C0,useMemo:D0,useReducer:ic,useRef:A0,useState:function(){return ic(la)},useDebugValue:Cf,useDeferredValue:function(t){var e=Vn();return I0(e,Ht.memoizedState,t)},useTransition:function(){var t=ic(la)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:x0,useId:U0,unstable_isNewReconciler:!1},GS={readContext:Gn,useCallback:L0,useContext:Gn,useEffect:bf,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:C0,useMemo:D0,useReducer:rc,useRef:A0,useState:function(){return rc(la)},useDebugValue:Cf,useDeferredValue:function(t){var e=Vn();return Ht===null?e.memoizedState=t:I0(e,Ht.memoizedState,t)},useTransition:function(){var t=rc(la)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:x0,useId:U0,unstable_isNewReconciler:!1};function es(t,e){try{var n="",i=e;do n+=gw(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VS=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zl||(Zl=!0,Pd=i),xd(t,e)},n}function B0(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function rm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iE.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var WS=Fi.ReactCurrentOwner,wn=!1;function dn(t,e,n,i){e.child=t===null?v0(e,null,n,i):Qo(e,t.child,n,i)}function am(t,e,n,i,r){n=n.render;var o=e.ref;return Xo(e,r),i=Tf(t,e,n,i,o,r),n=Af(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(Et&&n&&hf(e),e.flags|=1,dn(t,e,i,r),e.child)}function lm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Of(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,z0(t,e,o,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(s,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=dr(o,i),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ta(o,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return wd(t,e,n,i,r)}function H0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ko,bn),bn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ko,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,gt(ko,bn),bn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,gt(ko,bn),bn|=i;return dn(t,e,r,n),e.child}function G0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,i,r){var o=En(n)?Wr:an.current;return o=Ko(e,o),Xo(e,r),n=Tf(t,e,n,i,o,r),i=Af(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(Et&&i&&hf(e),e.flags|=1,dn(t,e,n,r),e.child)}function um(t,e,n,i,r){if(En(n)){var o=!0;Hl(e)}else o=!1;if(Xo(e,r),e.stateNode===null)Al(t,e),m0(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=En(n)?Wr:an.current,c=Ko(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&em(e,s,i,c),Ki=!1;var m=e.memoizedState;s.state=m,jl(e,i,s,r),l=e.memoizedState,a!==i||m!==l||Sn.current||Ki?(typeof h=="function"&&(_d(e,n,h,i),l=e.memoizedState),(a=Ki||Jp(e,n,a,i,m,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,h0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),s.props=c,p=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=En(n)?Wr:an.current,l=Ko(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&em(e,s,i,l),Ki=!1,m=e.memoizedState,s.state=m,jl(e,i,s,r);var S=e.memoizedState;a!==p||m!==S||Sn.current||Ki?(typeof v=="function"&&(_d(e,n,v,i),S=e.memoizedState),(c=Ki||Jp(e,n,c,i,m,S,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,S,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),s.props=i,s.state=S,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return Sd(t,e,n,i,o,r)}function Sd(t,e,n,i,r,o){G0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&qp(e,n,!1),Ni(t,e,o);i=e.stateNode,WS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Qo(e,t.child,null,o),e.child=Qo(e,null,a,o)):dn(t,e,a,o),e.memoizedState=i.state,r&&qp(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),wf(t,e.containerInfo)}function cm(t,e,n,i,r){return Zo(),mf(r),e.flags|=256,dn(t,e,n,i),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function W0(t,e,n){var i=e.pendingProps,r=Tt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Tt,r&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_u(s,i,0,null),t=Hr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Md(n),e.memoizedState=Ed,t):Rf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return XS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=dr(a,o):(o=Hr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Md(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ed,i}return o=t.child,t=o.sibling,i=dr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&mf(i),Qo(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=oc(Error(fe(422))),ja(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=_u({mode:"visible",children:i.children},r,0,null),o=Hr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Qo(e,t.child,null,s),e.child.memoizedState=Md(s),e.memoizedState=Ed,o);if(!(e.mode&1))return ja(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(fe(419)),i=oc(o,i,void 0),ja(t,e,s,i)}if(a=(s&t.childLanes)!==0,wn||a){if(i=qt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ui(t,r),ri(i,t,r,-1))}return Nf(),i=oc(Error(fe(421))),ja(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Cn=ar(r.nextSibling),Rn=e,Et=!0,Jn=null,t!==null&&(Fn[kn++]=Ci,Fn[kn++]=Ri,Fn[kn++]=Xr,Ci=t.id,Ri=t.overflow,Xr=e),e=Rf(e,i.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function sc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function X0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(dn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sc(e,!0,n,null,o);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:V0(e),Zo();break;case 5:_0(e);break;case 1:En(e.type)&&Hl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?W0(t,e,n):(gt(Tt,Tt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);gt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n)}return Ni(t,e,n)}var j0,Td,Y0,q0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};Y0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(mi.current);var o=null;switch(n){case"input":r=Yc(t,r),i=Yc(t,i),o=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),o=[];break;case"textarea":r=Kc(t,r),i=Kc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}Qc(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};q0=function(t,e,n,i){n!==i&&(e.flags|=4)};function As(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function YS(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return En(e.type)&&zl(),tn(e),null;case 3:return i=e.stateNode,Jo(),xt(Sn),xt(an),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Id(Jn),Jn=null))),Td(t,e),tn(e),null;case 5:Sf(e);var r=kr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Y0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return tn(e),null}if(t=kr(mi.current),Wa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[fi]=e,i[ra]=o,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Os.length;r++)_t(Os[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":xp(i,o),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},_t("invalid",i);break;case"textarea":Sp(i,o),_t("invalid",i)}Qc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&_t("scroll",i)}switch(n){case"input":Na(i),wp(i,o,!0);break;case"textarea":Na(i),Ep(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[fi]=e,t[ra]=i,j0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Jc(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Os.length;r++)_t(Os[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":xp(t,i),r=Yc(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Sp(t,i),r=Kc(t,i),_t("invalid",t);break;default:r=i}Qc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Mv(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$s(t,l):typeof l=="number"&&$s(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_t("scroll",t):l!=null&&Qd(t,o,l,s))}switch(n){case"input":Na(t),wp(t,i,!1);break;case"textarea":Na(t),Ep(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ho(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)q0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=kr(sa.current),kr(mi.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(o=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return tn(e),null;case 13:if(xt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Cn!==null&&e.mode&1&&!(e.flags&128))d0(),Zo(),e.flags|=98560,o=!1;else if(o=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(fe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(fe(317));o[fi]=e}else Zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),o=!1}else Jn!==null&&(Id(Jn),Jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Gt===0&&(Gt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Jo(),Td(t,e),t===null&&na(e.stateNode.containerInfo),tn(e),null;case 10:return _f(e.type._context),tn(e),null;case 17:return En(e.type)&&zl(),tn(e),null;case 19:if(xt(Tt),o=e.memoizedState,o===null)return tn(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)As(o,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Yl(t),s!==null){for(e.flags|=128,As(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Tt,Tt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ot()>ts&&(e.flags|=128,i=!0,As(o,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Et)return tn(e),null}else 2*Ot()-o.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,i=!0,As(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ot(),e.sibling=null,n=Tt.current,gt(Tt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function qS(t,e){switch(pf(e),e.tag){case 1:return En(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jo(),xt(Sn),xt(an),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(xt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Tt),null;case 4:return Jo(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Ya=!1,on=!1,$S=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Ad(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var fm=!1;function KS(t,e){if(ud=Ol,t=Qv(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var v;p!==n||r!==0&&p.nodeType!==3||(a=s+r),p!==o||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=s),m===o&&++h===i&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Ol=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,g=S.memoizedState,d=e.stateNode,w=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:Zn(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(A){Lt(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return S=fm,fm=!1,S}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ad(e,n,o)}r=r.next}while(r!==i)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $0(t){var e=t.alternate;e!==null&&(t.alternate=null,$0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[ra],delete e[hd],delete e[DS],delete e[IS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K0(t){return t.tag===5||t.tag===3||t.tag===4}function hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}var $t=null,Qn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Z0(t,e,n),n=n.sibling}function Z0(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:on||Fo(n,e);case 6:var i=$t,r=Qn;$t=null,Gi(t,e,n),$t=i,Qn=r,$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),Js(t)):Ju($t,n.stateNode));break;case 4:i=$t,r=Qn,$t=n.stateNode.containerInfo,Qn=!0,Gi(t,e,n),$t=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ad(n,e,s),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!on&&(Fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Gi(t,e,n),on=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $S),e.forEach(function(i){var r=oE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,Qn=!1;break e;case 3:$t=a.stateNode.containerInfo,Qn=!0;break e;case 4:$t=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if($t===null)throw Error(fe(160));Z0(o,s,r),$t=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q0(e,t),e=e.sibling}function Q0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),li(t),i&4){try{Vs(3,t,t.return),gu(3,t)}catch(E){Lt(t,t.return,E)}try{Vs(5,t,t.return)}catch(E){Lt(t,t.return,E)}}break;case 1:jn(e,t),li(t),i&512&&n!==null&&Fo(n,n.return);break;case 5:if(jn(e,t),li(t),i&512&&n!==null&&Fo(n,n.return),t.flags&32){var r=t.stateNode;try{$s(r,"")}catch(E){Lt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yv(r,o),Jc(a,s);var c=Jc(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?Mv(r,p):h==="dangerouslySetInnerHTML"?Sv(r,p):h==="children"?$s(r,p):Qd(r,h,p,c)}switch(a){case"input":qc(r,o);break;case"textarea":xv(r,o);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ho(r,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ho(r,!!o.multiple,o.defaultValue,!0):Ho(r,!!o.multiple,o.multiple?[]:"",!1))}r[ra]=o}catch(E){Lt(t,t.return,E)}}break;case 6:if(jn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(E){Lt(t,t.return,E)}}break;case 3:if(jn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(E){Lt(t,t.return,E)}break;case 4:jn(e,t),li(t);break;case 13:jn(e,t),li(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=Ot())),i&4&&pm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||h,jn(e,t),on=c):jn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ae=t,h=t.child;h!==null;){for(p=Ae=h;Ae!==null;){switch(m=Ae,v=m.child,m.tag){case 0:case 11:case 14:case 15:Vs(4,m,m.return);break;case 1:Fo(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(E){Lt(i,n,E)}}break;case 5:Fo(m,m.return);break;case 22:if(m.memoizedState!==null){gm(p);continue}}v!==null?(v.return=m,Ae=v):gm(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ev("display",s))}catch(E){Lt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){Lt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jn(e,t),li(t),i&4&&pm(t);break;case 21:break;default:jn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K0(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var o=hm(t);Rd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=hm(t);Cd(t,a,s);break;default:throw Error(fe(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZS(t,e,n){Ae=t,J0(t)}function J0(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ya;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Ya;var c=on;if(Ya=s,(on=l)&&!c)for(Ae=r;Ae!==null;)s=Ae,l=s.child,s.tag===22&&s.memoizedState!==null?vm(r):l!==null?(l.return=s,Ae=l):vm(r);for(;o!==null;)Ae=o,J0(o),o=o.sibling;Ae=r,Ya=a,on=c}mm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ae=o):mm(t)}}function mm(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||gu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Qp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Js(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}on||e.flags&512&&bd(e)}catch(m){Lt(e,e.return,m)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function gm(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function vm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var o=e.return;try{bd(e)}catch(l){Lt(e,o,l)}break;case 5:var s=e.return;try{bd(e)}catch(l){Lt(e,s,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var QS=Math.ceil,Kl=Fi.ReactCurrentDispatcher,Pf=Fi.ReactCurrentOwner,Hn=Fi.ReactCurrentBatchConfig,st=0,qt=null,Bt=null,Zt=0,bn=0,ko=xr(0),Gt=0,ca=null,Yr=0,vu=0,Lf=0,Ws=null,xn=null,Df=0,ts=1/0,Ti=null,Zl=!1,Pd=null,ur=null,qa=!1,nr=null,Ql=0,Xs=0,Ld=null,bl=-1,Cl=0;function hn(){return st&6?Ot():bl!==-1?bl:bl=Ot()}function cr(t){return t.mode&1?st&2&&Zt!==0?Zt&-Zt:NS.transition!==null?(Cl===0&&(Cl=Ov()),Cl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:Vv(t.type)),t):1}function ri(t,e,n,i){if(50<Xs)throw Xs=0,Ld=null,Error(fe(185));ma(t,n,i),(!(st&2)||t!==qt)&&(t===qt&&(!(st&2)&&(vu|=n),Gt===4&&Ji(t,Zt)),Mn(t,i),n===1&&st===0&&!(e.mode&1)&&(ts=Ot()+500,hu&&wr()))}function Mn(t,e){var n=t.callbackNode;Nw(t,e);var i=Nl(t,t===qt?Zt:0);if(i===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?US(_m.bind(null,t)):l0(_m.bind(null,t)),PS(function(){!(st&6)&&wr()}),n=null;else{switch(Fv(i)){case 1:n=rf;break;case 4:n=Uv;break;case 16:n=Ul;break;case 536870912:n=Nv;break;default:n=Ul}n=a_(n,e_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e_(t,e){if(bl=-1,Cl=0,st&6)throw Error(fe(327));var n=t.callbackNode;if(jo()&&t.callbackNode!==n)return null;var i=Nl(t,t===qt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=st;st|=2;var o=n_();(qt!==t||Zt!==e)&&(Ti=null,ts=Ot()+500,zr(t,e));do try{tE();break}catch(a){t_(t,a)}while(!0);vf(),Kl.current=o,st=r,Bt!==null?e=0:(qt=null,Zt=0,e=Gt)}if(e!==0){if(e===2&&(r=rd(t),r!==0&&(i=r,e=Dd(t,r))),e===1)throw n=ca,zr(t,0),Ji(t,i),Mn(t,Ot()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!JS(r)&&(e=Jl(t,i),e===2&&(o=rd(t),o!==0&&(i=o,e=Dd(t,o))),e===1))throw n=ca,zr(t,0),Ji(t,i),Mn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Dr(t,xn,Ti);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Df+500-Ot(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fd(Dr.bind(null,t,xn,Ti),e);break}Dr(t,xn,Ti);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ii(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QS(i/1960))-i,10<i){t.timeoutHandle=fd(Dr.bind(null,t,xn,Ti),i);break}Dr(t,xn,Ti);break;case 5:Dr(t,xn,Ti);break;default:throw Error(fe(329))}}}return Mn(t,Ot()),t.callbackNode===n?e_.bind(null,t):null}function Dd(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=xn,xn=n,e!==null&&Id(e)),t}function Id(t){xn===null?xn=t:xn.push.apply(xn,t)}function JS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!oi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Lf,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function _m(t){if(st&6)throw Error(fe(327));jo();var e=Nl(t,0);if(!(e&1))return Mn(t,Ot()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=rd(t);i!==0&&(e=i,n=Dd(t,i))}if(n===1)throw n=ca,zr(t,0),Ji(t,e),Mn(t,Ot()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,xn,Ti),Mn(t,Ot()),null}function If(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(ts=Ot()+500,hu&&wr())}}function qr(t){nr!==null&&nr.tag===0&&!(st&6)&&jo();var e=st;st|=1;var n=Hn.transition,i=ct;try{if(Hn.transition=null,ct=1,t)return t()}finally{ct=i,Hn.transition=n,st=e,!(st&6)&&wr()}}function Uf(){bn=ko.current,xt(ko)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RS(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Jo(),xt(Sn),xt(an),Ef();break;case 5:Sf(i);break;case 4:Jo();break;case 13:xt(Tt);break;case 19:xt(Tt);break;case 10:_f(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(qt=t,Bt=t=dr(t.current,null),Zt=bn=e,Gt=0,ca=null,Lf=vu=Yr=0,xn=Ws=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Fr=null}return t}function t_(t,e){do{var n=Bt;try{if(vf(),Ml.current=$l,ql){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(jr=0,Yt=Ht=Ct=null,Gs=!1,aa=0,Pf.current=null,n===null||n.return===null){Gt=1,ca=e,Bt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=om(s);if(v!==null){v.flags&=-257,sm(v,s,a,o,e),v.mode&1&&rm(o,c,e),e=v,l=c;var S=e.updateQueue;if(S===null){var E=new Set;E.add(l),e.updateQueue=E}else S.add(l);break e}else{if(!(e&1)){rm(o,c,e),Nf();break e}l=Error(fe(426))}}else if(Et&&a.mode&1){var g=om(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),sm(g,s,a,o,e),mf(es(l,a));break e}}o=l=es(l,a),Gt!==4&&(Gt=2),Ws===null?Ws=[o]:Ws.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=k0(o,l,e);Zp(o,d);break e;case 1:a=l;var w=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ur===null||!ur.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var A=B0(o,a,e);Zp(o,A);break e}}o=o.return}while(o!==null)}r_(n)}catch(I){e=I,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function n_(){var t=Kl.current;return Kl.current=$l,t===null?$l:t}function Nf(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),qt===null||!(Yr&268435455)&&!(vu&268435455)||Ji(qt,Zt)}function Jl(t,e){var n=st;st|=2;var i=n_();(qt!==t||Zt!==e)&&(Ti=null,zr(t,e));do try{eE();break}catch(r){t_(t,r)}while(!0);if(vf(),st=n,Kl.current=i,Bt!==null)throw Error(fe(261));return qt=null,Zt=0,Gt}function eE(){for(;Bt!==null;)i_(Bt)}function tE(){for(;Bt!==null&&!Aw();)i_(Bt)}function i_(t){var e=s_(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?r_(t):Bt=e,Pf.current=null}function r_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qS(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Bt=null;return}}else if(n=YS(n,e,bn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Dr(t,e,n){var i=ct,r=Hn.transition;try{Hn.transition=null,ct=1,nE(t,e,n,i)}finally{Hn.transition=r,ct=i}return null}function nE(t,e,n,i){do jo();while(nr!==null);if(st&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ow(t,o),t===qt&&(Bt=qt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,a_(Ul,function(){return jo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var s=ct;ct=1;var a=st;st|=4,Pf.current=null,KS(t,n),Q0(n,t),SS(cd),Ol=!!ud,cd=ud=null,t.current=n,ZS(n),bw(),st=a,ct=s,Hn.transition=o}else t.current=n;if(qa&&(qa=!1,nr=t,Ql=r),o=t.pendingLanes,o===0&&(ur=null),Pw(n.stateNode),Mn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,t=Pd,Pd=null,t;return Ql&1&&t.tag!==0&&jo(),o=t.pendingLanes,o&1?t===Ld?Xs++:(Xs=0,Ld=t):Xs=0,wr(),null}function jo(){if(nr!==null){var t=Fv(Ql),e=Hn.transition,n=ct;try{if(Hn.transition=null,ct=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Ql=0,st&6)throw Error(fe(331));var r=st;for(st|=4,Ae=t.current;Ae!==null;){var o=Ae,s=o.child;if(Ae.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:Vs(8,h,o)}var p=h.child;if(p!==null)p.return=h,Ae=p;else for(;Ae!==null;){h=Ae;var m=h.sibling,v=h.return;if($0(h),h===c){Ae=null;break}if(m!==null){m.return=v,Ae=m;break}Ae=v}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Ae=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Ae=s;else e:for(;Ae!==null;){if(o=Ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vs(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Ae=d;break e}Ae=o.return}}var w=t.current;for(Ae=w;Ae!==null;){s=Ae;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,Ae=x;else e:for(s=w;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(I){Lt(a,a.return,I)}if(a===s){Ae=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,Ae=A;break e}Ae=a.return}}if(st=r,wr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(lu,t)}catch{}i=!0}return i}finally{ct=n,Hn.transition=e}}return!1}function ym(t,e,n){e=es(n,e),e=k0(t,e,1),t=lr(t,e,1),e=hn(),t!==null&&(ma(t,1,e),Mn(t,e))}function Lt(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=es(n,t),t=B0(e,t,1),e=lr(e,t,1),t=hn(),e!==null&&(ma(e,1,t),Mn(e,t));break}}e=e.return}}function iE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(Zt&n)===n&&(Gt===4||Gt===3&&(Zt&130023424)===Zt&&500>Ot()-Df?zr(t,0):Lf|=n),Mn(t,e)}function o_(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=hn();t=Ui(t,e),t!==null&&(ma(t,e,n),Mn(t,n))}function rE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o_(t,n)}function oE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),o_(t,n)}var s_;s_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,jS(t,e,n);wn=!!(t.flags&131072)}else wn=!1,Et&&e.flags&1048576&&u0(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Al(t,e),t=e.pendingProps;var r=Ko(e,an.current);Xo(e,n),r=Tf(null,e,i,t,r,n);var o=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(o=!0,Hl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=pu,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Sd(null,e,i,!0,o,n)):(e.tag=0,Et&&o&&hf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aE(i),t=Zn(i,t),r){case 0:e=wd(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=am(null,e,i,t,n);break e;case 14:e=lm(null,e,i,Zn(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),um(t,e,i,r,n);case 3:e:{if(V0(e),t===null)throw Error(fe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,h0(t,e),jl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=es(Error(fe(423)),e),e=cm(t,e,i,n,r);break e}else if(i!==r){r=es(Error(fe(424)),e),e=cm(t,e,i,n,r);break e}else for(Cn=ar(e.stateNode.containerInfo.firstChild),Rn=e,Et=!0,Jn=null,n=v0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),i===r){e=Ni(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return _0(e),t===null&&gd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,dd(i,r)?s=null:o!==null&&dd(i,o)&&(e.flags|=32),G0(t,e),dn(t,e,s,n),e.child;case 6:return t===null&&gd(e),null;case 13:return W0(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qo(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),am(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,gt(Wl,i._currentValue),i._currentValue=s,o!==null)if(oi(o.value,s)){if(o.children===r.children&&!Sn.current){e=Ni(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Li(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(fe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),vd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xo(e,n),r=Gn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),lm(t,e,i,r,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Al(t,e),e.tag=1,En(i)?(t=!0,Hl(e)):t=!1,Xo(e,n),m0(e,i,r),yd(e,i,r,n),Sd(null,e,i,!0,t,n);case 19:return X0(t,e,n);case 22:return H0(t,e,n)}throw Error(fe(156,e.tag))};function a_(t,e){return Iv(t,e)}function sE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new sE(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aE(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Of(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Co:return Hr(n.children,r,o,e);case Jd:s=8,r|=8;break;case Vc:return t=zn(12,n,e,r|2),t.elementType=Vc,t.lanes=o,t;case Wc:return t=zn(13,n,e,r),t.elementType=Wc,t.lanes=o,t;case Xc:return t=zn(19,n,e,r),t.elementType=Xc,t.lanes=o,t;case gv:return _u(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pv:s=10;break e;case mv:s=9;break e;case ef:s=11;break e;case tf:s=14;break e;case $i:s=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=zn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Hr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function _u(t,e,n,i){return t=zn(22,t,i,e),t.elementType=gv,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,i,r,o,s,a,l){return t=new lE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=zn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(o),t}function uE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function l_(t){if(!t)return gr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(En(n))return a0(t,n,e)}return e}function u_(t,e,n,i,r,o,s,a,l){return t=Ff(n,i,!0,t,r,o,s,a,l),t.context=l_(null),n=t.current,i=hn(),r=cr(n),o=Li(i,r),o.callback=e??null,lr(n,o,r),t.current.lanes=r,ma(t,r,i),Mn(t,i),t}function yu(t,e,n,i){var r=e.current,o=hn(),s=cr(r);return n=l_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,s),t!==null&&(ri(t,r,s,o),El(t,r,s)),s}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){xm(t,e),(t=t.alternate)&&xm(t,e)}function cE(){return null}var c_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}xu.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));yu(t,e,null,null)};xu.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){yu(null,t,null,null)}),e[Ii]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&Gv(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wm(){}function dE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=eu(s);o.call(c)}}var s=u_(e,i,t,0,null,!1,!1,"",wm);return t._reactRootContainer=s,t[Ii]=s.current,na(t.nodeType===8?t.parentNode:t),qr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=eu(l);a.call(c)}}var l=Ff(t,0,!1,null,null,!1,!1,"",wm);return t._reactRootContainer=l,t[Ii]=l.current,na(t.nodeType===8?t.parentNode:t),qr(function(){yu(e,l,n,i)}),l}function Su(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=eu(s);a.call(l)}}yu(e,s,t,r)}else s=dE(n,e,t,r,i);return eu(s)}kv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(of(e,n|1),Mn(e,Ot()),!(st&6)&&(ts=Ot()+500,wr()))}break;case 13:qr(function(){var i=Ui(t,1);if(i!==null){var r=hn();ri(i,t,1,r)}}),kf(t,1)}};sf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=hn();ri(e,t,134217728,n)}kf(t,134217728)}};Bv=function(t){if(t.tag===13){var e=cr(t),n=Ui(t,e);if(n!==null){var i=hn();ri(n,t,e,i)}kf(t,e)}};zv=function(){return ct};Hv=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};td=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fu(i);if(!r)throw Error(fe(90));_v(i),qc(i,r)}}}break;case"textarea":xv(t,n);break;case"select":e=n.value,e!=null&&Ho(t,!!n.multiple,e,!1)}};bv=If;Cv=qr;var fE={usingClientEntryPoint:!1,Events:[va,Do,fu,Tv,Av,If]},bs={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hE={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{lu=$a.inject(hE),pi=$a}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(fe(200));return uE(t,e,null,n)};In.createRoot=function(t,e){if(!zf(t))throw Error(fe(299));var n=!1,i="",r=c_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,na(t.nodeType===8?t.parentNode:t),new Bf(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return qr(t)};In.hydrate=function(t,e,n){if(!wu(e))throw Error(fe(200));return Su(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=c_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=u_(e,null,t,1,n??null,r,!1,o,s),t[Ii]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xu(e)};In.render=function(t,e,n){if(!wu(e))throw Error(fe(200));return Su(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!wu(t))throw Error(fe(40));return t._reactRootContainer?(qr(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};In.unstable_batchedUpdates=If;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return Su(t,e,n,!1,i)};In.version="18.2.0-next-9e3b772b8-20220608";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),uv.exports=In;var pE=uv.exports,Sm=pE;Hc.createRoot=Sm.createRoot,Hc.hydrateRoot=Sm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="162",ao={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mE=0,Em=1,gE=2,f_=1,vE=2,Mi=3,vr=0,pn=1,ei=2,fr=0,Yo=1,Mm=2,Tm=3,Am=4,_E=5,Ur=100,yE=101,xE=102,bm=103,Cm=104,wE=200,SE=201,EE=202,ME=203,Ud=204,Nd=205,TE=206,AE=207,bE=208,CE=209,RE=210,PE=211,LE=212,DE=213,IE=214,UE=0,NE=1,OE=2,tu=3,FE=4,kE=5,BE=6,zE=7,h_=0,HE=1,GE=2,hr=0,VE=1,WE=2,XE=3,jE=4,YE=5,qE=6,$E=7,p_=300,ns=301,is=302,Od=303,Fd=304,Eu=306,kd=1e3,ti=1001,Bd=1002,fn=1003,Rm=1004,Cs=1005,yn=1006,uc=1007,Br=1008,pr=1009,KE=1010,ZE=1011,Gf=1012,m_=1013,ir=1014,bi=1015,da=1016,g_=1017,v_=1018,Gr=1020,QE=1021,ni=1023,JE=1024,eM=1025,Vr=1026,rs=1027,tM=1028,__=1029,nM=1030,y_=1031,x_=1033,cc=33776,dc=33777,fc=33778,hc=33779,Pm=35840,Lm=35841,Dm=35842,Im=35843,w_=36196,Um=37492,Nm=37496,Om=37808,Fm=37809,km=37810,Bm=37811,zm=37812,Hm=37813,Gm=37814,Vm=37815,Wm=37816,Xm=37817,jm=37818,Ym=37819,qm=37820,$m=37821,pc=36492,Km=36494,Zm=36495,iM=36283,Qm=36284,Jm=36285,eg=36286,rM=3200,oM=3201,sM=0,aM=1,er="",ci="srgb",Sr="srgb-linear",Vf="display-p3",Mu="display-p3-linear",nu="linear",yt="srgb",iu="rec709",ru="p3",uo=7680,tg=519,lM=512,uM=513,cM=514,S_=515,dM=516,fM=517,hM=518,pM=519,ng=35044,ig="300 es",zd=1035,Pi=2e3,ou=2001;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const js=Math.PI/180,fa=180/Math.PI;function us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function Wf(t,e){return(t%e+e)%e}function mM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function gM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ys(t,e,n){return(1-n)*t+n*e}function vM(t,e,n,i){return Ys(t,e,1-Math.exp(-n*i))}function _M(t,e=1){return e-Math.abs(Wf(t,e*2)-e)}function yM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function wM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function SM(t,e){return t+Math.random()*(e-t)}function EM(t){return t*(.5-Math.random())}function MM(t){t!==void 0&&(rg=t);let e=rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TM(t){return t*js}function AM(t){return t*fa}function Hd(t){return(t&t-1)===0&&t!==0}function bM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function su(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function CM(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),h=s((e+i)/2),p=o((e-i)/2),m=s((e-i)/2),v=o((i-e)/2),S=s((i-e)/2);switch(r){case"XYX":t.set(a*h,l*p,l*m,a*c);break;case"YZY":t.set(l*m,a*h,l*p,a*c);break;case"ZXZ":t.set(l*p,l*m,a*h,a*c);break;case"XZX":t.set(a*h,l*S,l*v,a*c);break;case"YXY":t.set(l*v,a*h,l*S,a*c);break;case"ZYZ":t.set(l*S,l*v,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:js,RAD2DEG:fa,generateUUID:us,clamp:sn,euclideanModulo:Wf,mapLinear:mM,inverseLerp:gM,lerp:Ys,damp:vM,pingpong:_M,smoothstep:yM,smootherstep:xM,randInt:wM,randFloat:SM,randFloatSpread:EM,seededRandom:MM,degToRad:TM,radToDeg:AM,isPowerOfTwo:Hd,ceilPowerOfTwo:bM,floorPowerOfTwo:su,setQuaternionFromProperEuler:CM,normalize:un,denormalize:Ao};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,r,o,s,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=o,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],m=i[2],v=i[5],S=i[8],E=r[0],g=r[3],d=r[6],w=r[1],x=r[4],A=r[7],I=r[2],P=r[5],C=r[8];return o[0]=s*E+a*w+l*I,o[3]=s*g+a*x+l*P,o[6]=s*d+a*A+l*C,o[1]=c*E+h*w+p*I,o[4]=c*g+h*x+p*P,o[7]=c*d+h*A+p*C,o[2]=m*E+v*w+S*I,o[5]=m*g+v*x+S*P,o[8]=m*d+v*A+S*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*s*h-n*a*c-i*o*h+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*s-a*c,m=a*l-h*o,v=c*o-s*l,S=n*p+i*m+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*s)*E,e[3]=m*E,e[4]=(h*n-r*l)*E,e[5]=(r*o-a*n)*E,e[6]=v*E,e[7]=(i*l-c*n)*E,e[8]=(s*n-i*o)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new et;function E_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PM(){const t=ha("canvas");return t.style.display="block",t}const og={};function LM(t){t in og||(og[t]=!0,console.warn(t))}const sg=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ag=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[Sr]:{transfer:nu,primaries:iu,toReference:t=>t,fromReference:t=>t},[ci]:{transfer:yt,primaries:iu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Mu]:{transfer:nu,primaries:ru,toReference:t=>t.applyMatrix3(ag),fromReference:t=>t.applyMatrix3(sg)},[Vf]:{transfer:yt,primaries:ru,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ag),fromReference:t=>t.applyMatrix3(sg).convertLinearToSRGB()}},DM=new Set([Sr,Mu]),ft={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ka[e].toReference,r=Ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ka[t].primaries},getTransfer:function(t){return t===er?nu:Ka[t].transfer}};function qo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let co;class M_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=ha("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=co}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=qo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qo(n[i]/255)*255):n[i]=qo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class T_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vc(r[s].image)):o.push(vc(r[s]))}else o=vc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?M_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;class mn extends Jr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=ti,r=ti,o=yn,s=Br,a=ni,l=pr,c=mn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=us(),this.name="",this.source=new T_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=p_;mn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],v=l[5],S=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-E)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+E)<.1&&Math.abs(S+g)<.1&&Math.abs(c+v+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,A=(v+1)/2,I=(d+1)/2,P=(h+m)/4,C=(p+E)/4,k=(S+g)/4;return x>A&&x>I?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=P/i,o=C/i):A>I?A<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),i=P/r,o=k/r):I<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),i=C/o,r=k/o),this.set(i,r,o,n),this}let w=Math.sqrt((g-S)*(g-S)+(p-E)*(p-E)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(g-S)/w,this.y=(p-E)/w,this.z=(m-h)/w,this.w=Math.acos((c+v+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends Jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new T_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends NM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class A_ extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class OM extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=o[s+0],v=o[s+1],S=o[s+2],E=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=v,e[n+2]=S,e[n+3]=E;return}if(p!==E||l!==m||c!==v||h!==S){let g=1-a;const d=l*m+c*v+h*S+p*E,w=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const I=Math.sqrt(x),P=Math.atan2(I,d*w);g=Math.sin(g*P)/I,a=Math.sin(a*P)/I}const A=a*w;if(l=l*g+m*A,c=c*g+v*A,h=h*g+S*A,p=p*g+E*A,g===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=I,c*=I,h*=I,p*=I}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=o[s],m=o[s+1],v=o[s+2],S=o[s+3];return e[n]=a*S+h*p+l*v-c*m,e[n+1]=l*S+h*m+c*p-a*v,e[n+2]=c*S+h*v+a*m-l*p,e[n+3]=h*S-a*p-l*m-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(o/2),m=l(i/2),v=l(r/2),S=l(o/2);switch(s){case"XYZ":this._x=m*h*p+c*v*S,this._y=c*v*p-m*h*S,this._z=c*h*S+m*v*p,this._w=c*h*p-m*v*S;break;case"YXZ":this._x=m*h*p+c*v*S,this._y=c*v*p-m*h*S,this._z=c*h*S-m*v*p,this._w=c*h*p+m*v*S;break;case"ZXY":this._x=m*h*p-c*v*S,this._y=c*v*p+m*h*S,this._z=c*h*S+m*v*p,this._w=c*h*p-m*v*S;break;case"ZYX":this._x=m*h*p-c*v*S,this._y=c*v*p+m*h*S,this._z=c*h*S-m*v*p,this._w=c*h*p+m*v*S;break;case"YZX":this._x=m*h*p+c*v*S,this._y=c*v*p+m*h*S,this._z=c*h*S-m*v*p,this._w=c*h*p-m*v*S;break;case"XZY":this._x=m*h*p-c*v*S,this._y=c*v*p-m*h*S,this._z=c*h*S+m*v*p,this._w=c*h*p+m*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(h-l)*v,this._y=(o-c)*v,this._z=(s-r)*v}else if(i>a&&i>p){const v=2*Math.sqrt(1+i-a-p);this._w=(h-l)/v,this._x=.25*v,this._y=(r+s)/v,this._z=(o+c)/v}else if(a>p){const v=2*Math.sqrt(1+a-i-p);this._w=(o-c)/v,this._x=(r+s)/v,this._y=.25*v,this._z=(l+h)/v}else{const v=2*Math.sqrt(1+p-i-a);this._w=(s-r)/v,this._x=(o+c)/v,this._y=(l+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-i*c,this._z=o*h+s*c+i*l-r*a,this._w=s*h-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*s+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=s*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),h=2*(a*n-o*r),p=2*(o*i-s*n);return this.x=n+l*c+s*p-a*h,this.y=i+l*h+a*c-o*p,this.z=r+l*p+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new V,lg=new Kr;class ya{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(o,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Qa.subVectors(this.max,Rs),fo.subVectors(e.a,Rs),ho.subVectors(e.b,Rs),po.subVectors(e.c,Rs),Vi.subVectors(ho,fo),Wi.subVectors(po,ho),Tr.subVectors(fo,po);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Tr.z,Tr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Tr.z,0,-Tr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Tr.y,Tr.x,0];return!yc(n,fo,ho,po,Qa)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,fo,ho,po,Qa))?!1:(Ja.crossVectors(Vi,Wi),n=[Ja.x,Ja.y,Ja.z],yc(n,fo,ho,po,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],Yn=new V,Za=new ya,fo=new V,ho=new V,po=new V,Vi=new V,Wi=new V,Tr=new V,Rs=new V,Qa=new V,Ja=new V,Ar=new V;function yc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ar.fromArray(t,o);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),h=i.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const FM=new ya,Ps=new V,xc=new V;class Xf{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(xc)),this.expandByPoint(Ps.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new V,wc=new V,el=new V,Xi=new V,Sc=new V,tl=new V,Ec=new V;class jf{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wc.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(wc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(el),a=Xi.dot(this.direction),l=-Xi.dot(el),c=Xi.lengthSq(),h=Math.abs(1-s*s);let p,m,v,S;if(h>0)if(p=s*l-a,m=s*a-l,S=o*h,p>=0)if(m>=-S)if(m<=S){const E=1/h;p*=E,m*=E,v=p*(p+s*m+2*a)+m*(s*p+m+2*l)+c}else m=o,p=Math.max(0,-(s*m+a)),v=-p*p+m*(m+2*l)+c;else m=-o,p=Math.max(0,-(s*m+a)),v=-p*p+m*(m+2*l)+c;else m<=-S?(p=Math.max(0,-(-s*o+a)),m=p>0?-o:Math.min(Math.max(-o,-l),o),v=-p*p+m*(m+2*l)+c):m<=S?(p=0,m=Math.min(Math.max(-o,-l),o),v=m*(m+2*l)+c):(p=Math.max(0,-(s*o+a)),m=p>0?o:Math.min(Math.max(-o,-l),o),v=-p*p+m*(m+2*l)+c);else m=s>0?-o:o,p=Math.max(0,-(s*m+a)),v=-p*p+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(wc).addScaledVector(el,m),v}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(o=(e.min.y-m.y)*h,s=(e.max.y-m.y)*h):(o=(e.max.y-m.y)*h,s=(e.min.y-m.y)*h),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,o){Sc.subVectors(n,e),tl.subVectors(i,e),Ec.crossVectors(Sc,tl);let s=this.direction.dot(Ec),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(tl.crossVectors(Xi,tl));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(Xi));if(c<0||l+c>s)return null;const h=-a*Xi.dot(Ec);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,o,s,a,l,c,h,p,m,v,S,E,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,h,p,m,v,S,E,g)}set(e,n,i,r,o,s,a,l,c,h,p,m,v,S,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=m,d[3]=v,d[7]=S,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mo.setFromMatrixColumn(e,0).length(),o=1/mo.setFromMatrixColumn(e,1).length(),s=1/mo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const m=s*h,v=s*p,S=a*h,E=a*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=v+S*c,n[5]=m-E*c,n[9]=-a*l,n[2]=E-m*c,n[6]=S+v*c,n[10]=s*l}else if(e.order==="YXZ"){const m=l*h,v=l*p,S=c*h,E=c*p;n[0]=m+E*a,n[4]=S*a-v,n[8]=s*c,n[1]=s*p,n[5]=s*h,n[9]=-a,n[2]=v*a-S,n[6]=E+m*a,n[10]=s*l}else if(e.order==="ZXY"){const m=l*h,v=l*p,S=c*h,E=c*p;n[0]=m-E*a,n[4]=-s*p,n[8]=S+v*a,n[1]=v+S*a,n[5]=s*h,n[9]=E-m*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const m=s*h,v=s*p,S=a*h,E=a*p;n[0]=l*h,n[4]=S*c-v,n[8]=m*c+E,n[1]=l*p,n[5]=E*c+m,n[9]=v*c-S,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const m=s*l,v=s*c,S=a*l,E=a*c;n[0]=l*h,n[4]=E-m*p,n[8]=S*p+v,n[1]=p,n[5]=s*h,n[9]=-a*h,n[2]=-c*h,n[6]=v*p+S,n[10]=m-E*p}else if(e.order==="XZY"){const m=s*l,v=s*c,S=a*l,E=a*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=m*p+E,n[5]=s*h,n[9]=v*p-S,n[2]=S*p-v,n[6]=a*h,n[10]=E*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,BM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ji.crossVectors(i,Tn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ji.crossVectors(i,Tn)),ji.normalize(),nl.crossVectors(Tn,ji),r[0]=ji.x,r[4]=nl.x,r[8]=Tn.x,r[1]=ji.y,r[5]=nl.y,r[9]=Tn.y,r[2]=ji.z,r[6]=nl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],m=i[9],v=i[13],S=i[2],E=i[6],g=i[10],d=i[14],w=i[3],x=i[7],A=i[11],I=i[15],P=r[0],C=r[4],k=r[8],ne=r[12],M=r[1],D=r[5],ue=r[9],le=r[13],F=r[2],J=r[6],K=r[10],ie=r[14],N=r[3],X=r[7],q=r[11],re=r[15];return o[0]=s*P+a*M+l*F+c*N,o[4]=s*C+a*D+l*J+c*X,o[8]=s*k+a*ue+l*K+c*q,o[12]=s*ne+a*le+l*ie+c*re,o[1]=h*P+p*M+m*F+v*N,o[5]=h*C+p*D+m*J+v*X,o[9]=h*k+p*ue+m*K+v*q,o[13]=h*ne+p*le+m*ie+v*re,o[2]=S*P+E*M+g*F+d*N,o[6]=S*C+E*D+g*J+d*X,o[10]=S*k+E*ue+g*K+d*q,o[14]=S*ne+E*le+g*ie+d*re,o[3]=w*P+x*M+A*F+I*N,o[7]=w*C+x*D+A*J+I*X,o[11]=w*k+x*ue+A*K+I*q,o[15]=w*ne+x*le+A*ie+I*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],m=e[10],v=e[14],S=e[3],E=e[7],g=e[11],d=e[15];return S*(+o*l*p-r*c*p-o*a*m+i*c*m+r*a*v-i*l*v)+E*(+n*l*v-n*c*m+o*s*m-r*s*v+r*c*h-o*l*h)+g*(+n*c*p-n*a*v-o*s*p+i*s*v+o*a*h-i*c*h)+d*(-r*a*h-n*l*p+n*a*m+r*s*p-i*s*m+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],m=e[10],v=e[11],S=e[12],E=e[13],g=e[14],d=e[15],w=p*g*c-E*m*c+E*l*v-a*g*v-p*l*d+a*m*d,x=S*m*c-h*g*c-S*l*v+s*g*v+h*l*d-s*m*d,A=h*E*c-S*p*c+S*a*v-s*E*v-h*a*d+s*p*d,I=S*p*l-h*E*l-S*a*m+s*E*m+h*a*g-s*p*g,P=n*w+i*x+r*A+o*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=w*C,e[1]=(E*m*o-p*g*o-E*r*v+i*g*v+p*r*d-i*m*d)*C,e[2]=(a*g*o-E*l*o+E*r*c-i*g*c-a*r*d+i*l*d)*C,e[3]=(p*l*o-a*m*o-p*r*c+i*m*c+a*r*v-i*l*v)*C,e[4]=x*C,e[5]=(h*g*o-S*m*o+S*r*v-n*g*v-h*r*d+n*m*d)*C,e[6]=(S*l*o-s*g*o-S*r*c+n*g*c+s*r*d-n*l*d)*C,e[7]=(s*m*o-h*l*o+h*r*c-n*m*c-s*r*v+n*l*v)*C,e[8]=A*C,e[9]=(S*p*o-h*E*o-S*i*v+n*E*v+h*i*d-n*p*d)*C,e[10]=(s*E*o-S*a*o+S*i*c-n*E*c-s*i*d+n*a*d)*C,e[11]=(h*a*o-s*p*o-h*i*c+n*p*c+s*i*v-n*a*v)*C,e[12]=I*C,e[13]=(h*E*r-S*p*r+S*i*m-n*E*m-h*i*g+n*p*g)*C,e[14]=(S*a*r-s*E*r-S*i*l+n*E*l+s*i*g-n*a*g)*C,e[15]=(s*p*r-h*a*r+h*i*l-n*p*l-s*i*m+n*a*m)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,h=s+s,p=a+a,m=o*c,v=o*h,S=o*p,E=s*h,g=s*p,d=a*p,w=l*c,x=l*h,A=l*p,I=i.x,P=i.y,C=i.z;return r[0]=(1-(E+d))*I,r[1]=(v+A)*I,r[2]=(S-x)*I,r[3]=0,r[4]=(v-A)*P,r[5]=(1-(m+d))*P,r[6]=(g+w)*P,r[7]=0,r[8]=(S+x)*C,r[9]=(g-w)*C,r[10]=(1-(m+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=mo.set(r[0],r[1],r[2]).length();const s=mo.set(r[4],r[5],r[6]).length(),a=mo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/o,h=1/s,p=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,n.setFromRotationMatrix(qn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Pi){const l=this.elements,c=2*o/(n-e),h=2*o/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let v,S;if(a===Pi)v=-(s+o)/(s-o),S=-2*s*o/(s-o);else if(a===ou)v=-s/(s-o),S=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Pi){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(s-o),m=(n+e)*c,v=(i+r)*h;let S,E;if(a===Pi)S=(s+o)*p,E=-2*p;else if(a===ou)S=o*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=E,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mo=new V,qn=new zt,kM=new V(0,0,0),BM=new V(1,1,1),ji=new V,nl=new V,Tn=new V,ug=new zt,cg=new Kr;class Oi{constructor(e=0,n=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const dg=new V,go=new Kr,wi=new zt,il=new V,Ls=new V,HM=new V,GM=new Kr,fg=new V(1,0,0),hg=new V(0,1,0),pg=new V(0,0,1),VM={type:"added"},WM={type:"removed"},Mc={type:"childadded",child:null},Tc={type:"childremoved",child:null};class Pn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new V,n=new Oi,i=new Kr,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new et}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ls,il,this.up):wi.lookAt(il,Ls,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),go.setFromRotationMatrix(wi),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VM),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),m=s(e.skeletons),v=s(e.animations),S=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),S.length>0&&(i.nodes=S)}return i.object=r,i;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new V(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new V,Si=new V,Ac=new V,Ei=new V,vo=new V,_o=new V,mg=new V,bc=new V,Cc=new V,Rc=new V;class hi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){$n.subVectors(r,n),Si.subVectors(i,n),Ac.subVectors(e,n);const s=$n.dot($n),a=$n.dot(Si),l=$n.dot(Ac),c=Si.dot(Si),h=Si.dot(Ac),p=s*c-a*a;if(p===0)return o.set(0,0,0),null;const m=1/p,v=(c*l-a*h)*m,S=(s*h-a*l)*m;return o.set(1-v-S,S,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Si.subVectors(e,n),$n.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;vo.subVectors(r,i),_o.subVectors(o,i),bc.subVectors(e,i);const l=vo.dot(bc),c=_o.dot(bc);if(l<=0&&c<=0)return n.copy(i);Cc.subVectors(e,r);const h=vo.dot(Cc),p=_o.dot(Cc);if(h>=0&&p<=h)return n.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(vo,s);Rc.subVectors(e,o);const v=vo.dot(Rc),S=_o.dot(Rc);if(S>=0&&v<=S)return n.copy(o);const E=v*c-l*S;if(E<=0&&c>=0&&S<=0)return a=c/(c-S),n.copy(i).addScaledVector(_o,a);const g=h*S-v*p;if(g<=0&&p-h>=0&&v-S>=0)return mg.subVectors(o,r),a=(p-h)/(p-h+(v-S)),n.copy(r).addScaledVector(mg,a);const d=1/(g+E+m);return s=E*d,a=m*d,n.copy(i).addScaledVector(vo,s).addScaledVector(_o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=Wf(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Pc(s,o,e+1/3),this.g=Pc(s,o,e),this.b=Pc(s,o,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=ci){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return ft.fromWorkingColorSpace(rn.copy(this),e),Math.round(sn(rn.r*255,0,255))*65536+Math.round(sn(rn.g*255,0,255))*256+Math.round(sn(rn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,o=rn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const p=s-a;switch(c=h<=.5?p/(s+a):p/(2-s-a),s){case i:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-i)/p+2;break;case o:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=ci){ft.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(rl);const i=Ys(Yi.h,rl.h,n),r=Ys(Yi.s,rl.s,n),o=Ys(Yi.l,rl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ht;ht.NAMES=b_;let XM=0;class Tu extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Yo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Nd&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ln extends Tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=h_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new V,ol=new Ye;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return LM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),o=un(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class C_ extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class R_ extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jM=0;const On=new zt,Lc=new Pn,yo=new V,An=new ya,Ds=new ya,jt=new V;class ki extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?R_:C_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new et().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];An.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,Ds.min),An.expandByPoint(jt),jt.addVectors(An.max,Ds.max),An.expandByPoint(jt)):(An.expandByPoint(Ds.min),An.expandByPoint(Ds.max))}An.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)jt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(e,c),jt.add(yo)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new V,l[k]=new V;const c=new V,h=new V,p=new V,m=new Ye,v=new Ye,S=new Ye,E=new V,g=new V;function d(k,ne,M){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,ne),p.fromBufferAttribute(i,M),m.fromBufferAttribute(o,k),v.fromBufferAttribute(o,ne),S.fromBufferAttribute(o,M),h.sub(c),p.sub(c),v.sub(m),S.sub(m);const D=1/(v.x*S.y-S.x*v.y);isFinite(D)&&(E.copy(h).multiplyScalar(S.y).addScaledVector(p,-v.y).multiplyScalar(D),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-S.x).multiplyScalar(D),a[k].add(E),a[ne].add(E),a[M].add(E),l[k].add(g),l[ne].add(g),l[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,ne=w.length;k<ne;++k){const M=w[k],D=M.start,ue=M.count;for(let le=D,F=D+ue;le<F;le+=3)d(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const x=new V,A=new V,I=new V,P=new V;function C(k){I.fromBufferAttribute(r,k),P.copy(I);const ne=a[k];x.copy(ne),x.sub(I.multiplyScalar(I.dot(ne))).normalize(),A.crossVectors(P,ne);const D=A.dot(l[k])<0?-1:1;s.setXYZW(k,x.x,x.y,x.z,D)}for(let k=0,ne=w.length;k<ne;++k){const M=w[k],D=M.start,ue=M.count;for(let le=D,F=D+ue;le<F;le+=3)C(e.getX(le+0)),C(e.getX(le+1)),C(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,h=new V,p=new V;if(e)for(let m=0,v=e.count;m<v;m+=3){const S=e.getX(m+0),E=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(n,S),o.fromBufferAttribute(n,E),s.fromBufferAttribute(n,g),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,v=n.count;m<v;m+=3)r.fromBufferAttribute(n,m+0),o.fromBufferAttribute(n,m+1),s.fromBufferAttribute(n,m+2),h.subVectors(s,o),p.subVectors(r,o),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let v=0,S=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?v=l[E]*a.data.stride+a.offset:v=l[E]*h;for(let d=0;d<h;d++)m[S++]=c[v++]}return new gi(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],v=e(m,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const v=c[p];h.push(v.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const o=e.morphAttributes;for(const c in o){const h=[],p=o[c];for(let m=0,v=p.length;m<v;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new zt,br=new jf,sl=new Xf,vg=new V,xo=new V,wo=new V,So=new V,Dc=new V,al=new V,ll=new Ye,ul=new Ye,cl=new Ye,_g=new V,yg=new V,xg=new V,dl=new V,fl=new V;class At extends Pn{constructor(e=new ki,n=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){al.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],p=o[l];h!==0&&(Dc.fromBufferAttribute(p,e),s?al.addScaledVector(Dc,h):al.addScaledVector(Dc.sub(n),h))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(sl.containsPoint(br.origin)===!1&&(br.intersectSphere(sl,vg)===null||br.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(o).invert(),br.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,p=o.attributes.normal,m=o.groups,v=o.drawRange;if(a!==null)if(Array.isArray(s))for(let S=0,E=m.length;S<E;S++){const g=m[S],d=s[g.materialIndex],w=Math.max(g.start,v.start),x=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let A=w,I=x;A<I;A+=3){const P=a.getX(A),C=a.getX(A+1),k=a.getX(A+2);r=hl(this,d,e,i,c,h,p,P,C,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const S=Math.max(0,v.start),E=Math.min(a.count,v.start+v.count);for(let g=S,d=E;g<d;g+=3){const w=a.getX(g),x=a.getX(g+1),A=a.getX(g+2);r=hl(this,s,e,i,c,h,p,w,x,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let S=0,E=m.length;S<E;S++){const g=m[S],d=s[g.materialIndex],w=Math.max(g.start,v.start),x=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let A=w,I=x;A<I;A+=3){const P=A,C=A+1,k=A+2;r=hl(this,d,e,i,c,h,p,P,C,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const S=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let g=S,d=E;g<d;g+=3){const w=g,x=g+1,A=g+2;r=hl(this,s,e,i,c,h,p,w,x,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function YM(t,e,n,i,r,o,s,a){let l;if(e.side===pn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===vr,a),l===null)return null;fl.copy(a),fl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fl);return c<n.near||c>n.far?null:{distance:c,point:fl.clone(),object:t}}function hl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,xo),t.getVertexPosition(l,wo),t.getVertexPosition(c,So);const h=YM(t,e,n,i,xo,wo,So,dl);if(h){r&&(ll.fromBufferAttribute(r,a),ul.fromBufferAttribute(r,l),cl.fromBufferAttribute(r,c),h.uv=hi.getInterpolation(dl,xo,wo,So,ll,ul,cl,new Ye)),o&&(ll.fromBufferAttribute(o,a),ul.fromBufferAttribute(o,l),cl.fromBufferAttribute(o,c),h.uv1=hi.getInterpolation(dl,xo,wo,So,ll,ul,cl,new Ye)),s&&(_g.fromBufferAttribute(s,a),yg.fromBufferAttribute(s,l),xg.fromBufferAttribute(s,c),h.normal=hi.getInterpolation(dl,xo,wo,So,_g,yg,xg,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new V,materialIndex:0};hi.getNormal(xo,wo,So,p.normal),h.face=p}return h}class cs extends ki{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],h=[],p=[];let m=0,v=0;S("z","y","x",-1,-1,i,n,e,s,o,0),S("z","y","x",1,-1,i,n,-e,s,o,1),S("x","z","y",1,1,e,i,n,r,s,2),S("x","z","y",1,-1,e,i,-n,r,s,3),S("x","y","z",1,-1,e,n,i,r,o,4),S("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(p,2));function S(E,g,d,w,x,A,I,P,C,k,ne){const M=A/C,D=I/k,ue=A/2,le=I/2,F=P/2,J=C+1,K=k+1;let ie=0,N=0;const X=new V;for(let q=0;q<K;q++){const re=q*D-le;for(let ge=0;ge<J;ge++){const B=ge*M-ue;X[E]=B*w,X[g]=re*x,X[d]=F,c.push(X.x,X.y,X.z),X[E]=0,X[g]=0,X[d]=P>0?1:-1,h.push(X.x,X.y,X.z),p.push(ge/C),p.push(1-q/k),ie+=1}}for(let q=0;q<k;q++)for(let re=0;re<C;re++){const ge=m+re+J*q,B=m+re+J*(q+1),j=m+(re+1)+J*(q+1),se=m+(re+1)+J*q;l.push(ge,B,se),l.push(B,j,se),N+=6}a.addGroup(v,N,ne),v+=N,m+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function qM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P_(t){return t.getRenderTarget()===null?t.outputColorSpace:ft.workingColorSpace}const $M={clone:os,merge:cn};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class L_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new V,wg=new Ye,Sg=new Ye;class Bn extends L_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,wg,Sg),n.subVectors(Sg,wg)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,Mo=1;class QM extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Eo,Mo,e,n);r.layers=this.layers,this.add(r);const o=new Bn(Eo,Mo,e,n);o.layers=this.layers,this.add(o);const s=new Bn(Eo,Mo,e,n);s.layers=this.layers,this.add(s);const a=new Bn(Eo,Mo,e,n);a.layers=this.layers,this.add(a);const l=new Bn(Eo,Mo,e,n);l.layers=this.layers,this.add(l);const c=new Bn(Eo,Mo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,v),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class D_ extends mn{constructor(e,n,i,r,o,s,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JM extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new D_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),o=new _r({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:fr});o.uniforms.tEquirect.value=n;const s=new At(r,o),a=n.minFilter;return n.minFilter===Br&&(n.minFilter=yn),new QM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Ic=new V,eT=new V,tT=new et;class Zi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(eT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tT.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Xf,pl=new V;class I_{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi,s=new Zi){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],h=r[5],p=r[6],m=r[7],v=r[8],S=r[9],E=r[10],g=r[11],d=r[12],w=r[13],x=r[14],A=r[15];if(i[0].setComponents(l-o,m-c,g-v,A-d).normalize(),i[1].setComponents(l+o,m+c,g+v,A+d).normalize(),i[2].setComponents(l+s,m+h,g+S,A+w).normalize(),i[3].setComponents(l-s,m-h,g-S,A-w).normalize(),i[4].setComponents(l-a,m-p,g-E,A-x).normalize(),n===Pi)i[5].setComponents(l+a,m+p,g+E,A+x).normalize();else if(n===ou)i[5].setComponents(a,p,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function nT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,m=c.usage,v=p.byteLength,S=t.createBuffer();t.bindBuffer(h,S),t.bufferData(h,p,m),c.onUploadCallback();let E;if(p instanceof Float32Array)E=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=t.SHORT;else if(p instanceof Uint32Array)E=t.UNSIGNED_INT;else if(p instanceof Int32Array)E=t.INT;else if(p instanceof Int8Array)E=t.BYTE;else if(p instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:v}}function o(c,h,p){const m=h.array,v=h._updateRange,S=h.updateRanges;if(t.bindBuffer(p,c),v.count===-1&&S.length===0&&t.bufferSubData(p,0,m),S.length!==0){for(let E=0,g=S.length;E<g;E++){const d=S[E];n?t.bufferSubData(p,d.start*m.BYTES_PER_ELEMENT,m,d.start,d.count):t.bufferSubData(p,d.start*m.BYTES_PER_ELEMENT,m.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):t.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const m=i.get(c);(!m||m.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,c,h),p.version=c.version}}return{get:s,remove:a,update:l}}class Au extends ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,m=n/l,v=[],S=[],E=[],g=[];for(let d=0;d<h;d++){const w=d*m-s;for(let x=0;x<c;x++){const A=x*p-o;S.push(A,-w,0),E.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const x=w+c*d,A=w+c*(d+1),I=w+1+c*(d+1),P=w+1+c*d;v.push(x,A,P),v.push(A,I,P)}this.setIndex(v),this.setAttribute("position",new Ln(S,3)),this.setAttribute("normal",new Ln(E,3)),this.setAttribute("uv",new Ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,bT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CT=`vec3 transformedNormal = objectNormal;
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
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",UT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,NT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WT=`#ifdef USE_GRADIENTMAP
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
}`,XT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,KT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,n1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,i1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,_A=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,wA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,MA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,bA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,PA=`#define TOON
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
}`,LA=`uniform float size;
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
}`,DA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,OA=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:iT,alphahash_pars_fragment:rT,alphamap_fragment:oT,alphamap_pars_fragment:sT,alphatest_fragment:aT,alphatest_pars_fragment:lT,aomap_fragment:uT,aomap_pars_fragment:cT,batching_pars_vertex:dT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:yT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:wT,color_fragment:ST,color_pars_fragment:ET,color_pars_vertex:MT,color_vertex:TT,common:AT,cube_uv_reflection_fragment:bT,defaultnormal_vertex:CT,displacementmap_pars_vertex:RT,displacementmap_vertex:PT,emissivemap_fragment:LT,emissivemap_pars_fragment:DT,colorspace_fragment:IT,colorspace_pars_fragment:UT,envmap_fragment:NT,envmap_common_pars_fragment:OT,envmap_pars_fragment:FT,envmap_pars_vertex:kT,envmap_physical_pars_fragment:KT,envmap_vertex:BT,fog_vertex:zT,fog_pars_vertex:HT,fog_fragment:GT,fog_pars_fragment:VT,gradientmap_pars_fragment:WT,lightmap_fragment:XT,lightmap_pars_fragment:jT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:qT,lights_pars_begin:$T,lights_toon_fragment:ZT,lights_toon_pars_fragment:QT,lights_phong_fragment:JT,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:o1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:u1,map_fragment:c1,map_pars_fragment:d1,map_particle_fragment:f1,map_particle_pars_fragment:h1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:v1,morphnormal_vertex:_1,morphtarget_pars_vertex:y1,morphtarget_vertex:x1,normal_fragment_begin:w1,normal_fragment_maps:S1,normal_pars_fragment:E1,normal_pars_vertex:M1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:P1,opaque_fragment:L1,packing:D1,premultiplied_alpha_fragment:I1,project_vertex:U1,dithering_fragment:N1,dithering_pars_fragment:O1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:j1,specularmap_fragment:Y1,specularmap_pars_fragment:q1,tonemapping_fragment:$1,tonemapping_pars_fragment:K1,transmission_fragment:Z1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:rA,backgroundCube_vert:oA,backgroundCube_frag:sA,cube_vert:aA,cube_frag:lA,depth_vert:uA,depth_frag:cA,distanceRGBA_vert:dA,distanceRGBA_frag:fA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:vA,meshbasic_frag:_A,meshlambert_vert:yA,meshlambert_frag:xA,meshmatcap_vert:wA,meshmatcap_frag:SA,meshnormal_vert:EA,meshnormal_frag:MA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:bA,meshphysical_frag:CA,meshtoon_vert:RA,meshtoon_frag:PA,points_vert:LA,points_frag:DA,shadow_vert:IA,shadow_frag:UA,sprite_vert:NA,sprite_frag:OA},_e={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},di={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};di.physical={uniforms:cn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ml={r:0,b:0,g:0},Rr=new Oi,FA=new zt;function kA(t,e,n,i,r,o,s){const a=new ht(0);let l=o===!0?0:1,c,h,p=null,m=0,v=null;function S(g,d){let w=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?E(a,l):x&&x.isColor&&(E(x,1),w=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Eu)?(h===void 0&&(h=new At(new cs(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:os(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Rr.copy(d.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Rr)),h.material.toneMapped=ft.getTransfer(x.colorSpace)!==yt,(p!==x||m!==x.version||v!==t.toneMapping)&&(h.material.needsUpdate=!0,p=x,m=x.version,v=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new Au(2,2),new _r({name:"BackgroundMaterial",uniforms:os(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||m!==x.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,p=x,m=x.version,v=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function E(g,d){g.getRGB(ml,P_(t)),i.buffers.color.setClear(ml.r,ml.g,ml.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,E(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,E(a,l)},render:S}}function BA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let c=l,h=!1;function p(F,J,K,ie,N){let X=!1;if(s){const q=E(ie,K,J);c!==q&&(c=q,v(c.object)),X=d(F,ie,K,N),X&&w(F,ie,K,N)}else{const q=J.wireframe===!0;(c.geometry!==ie.id||c.program!==K.id||c.wireframe!==q)&&(c.geometry=ie.id,c.program=K.id,c.wireframe=q,X=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,k(F,J,K,ie),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function m(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function v(F){return i.isWebGL2?t.bindVertexArray(F):o.bindVertexArrayOES(F)}function S(F){return i.isWebGL2?t.deleteVertexArray(F):o.deleteVertexArrayOES(F)}function E(F,J,K){const ie=K.wireframe===!0;let N=a[F.id];N===void 0&&(N={},a[F.id]=N);let X=N[J.id];X===void 0&&(X={},N[J.id]=X);let q=X[ie];return q===void 0&&(q=g(m()),X[ie]=q),q}function g(F){const J=[],K=[],ie=[];for(let N=0;N<r;N++)J[N]=0,K[N]=0,ie[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:K,attributeDivisors:ie,object:F,attributes:{},index:null}}function d(F,J,K,ie){const N=c.attributes,X=J.attributes;let q=0;const re=K.getAttributes();for(const ge in re)if(re[ge].location>=0){const j=N[ge];let se=X[ge];if(se===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;q++}return c.attributesNum!==q||c.index!==ie}function w(F,J,K,ie){const N={},X=J.attributes;let q=0;const re=K.getAttributes();for(const ge in re)if(re[ge].location>=0){let j=X[ge];j===void 0&&(ge==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ge==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));const se={};se.attribute=j,j&&j.data&&(se.data=j.data),N[ge]=se,q++}c.attributes=N,c.attributesNum=q,c.index=ie}function x(){const F=c.newAttributes;for(let J=0,K=F.length;J<K;J++)F[J]=0}function A(F){I(F,0)}function I(F,J){const K=c.newAttributes,ie=c.enabledAttributes,N=c.attributeDivisors;K[F]=1,ie[F]===0&&(t.enableVertexAttribArray(F),ie[F]=1),N[F]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),N[F]=J)}function P(){const F=c.newAttributes,J=c.enabledAttributes;for(let K=0,ie=J.length;K<ie;K++)J[K]!==F[K]&&(t.disableVertexAttribArray(K),J[K]=0)}function C(F,J,K,ie,N,X,q){q===!0?t.vertexAttribIPointer(F,J,K,N,X):t.vertexAttribPointer(F,J,K,ie,N,X)}function k(F,J,K,ie){if(i.isWebGL2===!1&&(F.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=ie.attributes,X=K.getAttributes(),q=J.defaultAttributeValues;for(const re in X){const ge=X[re];if(ge.location>=0){let B=N[re];if(B===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(B=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(B=F.instanceColor)),B!==void 0){const j=B.normalized,se=B.itemSize,ye=n.get(B);if(ye===void 0)continue;const Ue=ye.buffer,we=ye.type,xe=ye.bytesPerElement,rt=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||B.gpuType===m_);if(B.isInterleavedBufferAttribute){const Be=B.data,H=Be.stride,wt=B.offset;if(Be.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ge.locationSize;Pe++)I(ge.location+Pe,Be.meshPerAttribute);F.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Pe=0;Pe<ge.locationSize;Pe++)A(ge.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Pe=0;Pe<ge.locationSize;Pe++)C(ge.location+Pe,se/ge.locationSize,we,j,H*xe,(wt+se/ge.locationSize*Pe)*xe,rt)}else{if(B.isInstancedBufferAttribute){for(let Be=0;Be<ge.locationSize;Be++)I(ge.location+Be,B.meshPerAttribute);F.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Be=0;Be<ge.locationSize;Be++)A(ge.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Be=0;Be<ge.locationSize;Be++)C(ge.location+Be,se/ge.locationSize,we,j,se*xe,se/ge.locationSize*Be*xe,rt)}}else if(q!==void 0){const j=q[re];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(ge.location,j);break;case 3:t.vertexAttrib3fv(ge.location,j);break;case 4:t.vertexAttrib4fv(ge.location,j);break;default:t.vertexAttrib1fv(ge.location,j)}}}}P()}function ne(){ue();for(const F in a){const J=a[F];for(const K in J){const ie=J[K];for(const N in ie)S(ie[N].object),delete ie[N];delete J[K]}delete a[F]}}function M(F){if(a[F.id]===void 0)return;const J=a[F.id];for(const K in J){const ie=J[K];for(const N in ie)S(ie[N].object),delete ie[N];delete J[K]}delete a[F.id]}function D(F){for(const J in a){const K=a[J];if(K[F.id]===void 0)continue;const ie=K[F.id];for(const N in ie)S(ie[N].object),delete ie[N];delete K[F.id]}}function ue(){le(),h=!0,c!==l&&(c=l,v(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:ue,resetDefaultState:le,dispose:ne,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:A,disableUnusedAttributes:P}}function zA(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}function a(h,p){t.drawArrays(o,h,p),n.update(p,o,1)}function l(h,p,m){if(m===0)return;let v,S;if(r)v=t,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](o,h,p,m),n.update(p,o,m)}function c(h,p,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<m;S++)this.render(h[S],p[S]);else{v.multiDrawArraysWEBGL(o,h,0,p,0,m);let S=0;for(let E=0;E<m;E++)S+=p[E];n.update(S,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function HA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),E=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,A=s||e.has("OES_texture_float"),I=x&&A,P=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:P}}function GA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Zi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||i!==0||r;return r=m,i=p.length,v},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,v){const S=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||S===null||S.length===0||o&&!g)o?h(null):c();else{const w=o?0:i,x=w*4;let A=d.clippingState||null;l.value=A,A=h(S,m,x,v);for(let I=0;I!==x;++I)A[I]=n[I];d.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,v,S){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,S!==!0||g===null){const d=v+E*4,w=m.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,A=v;x!==E;++x,A+=4)s.copy(p[x]).applyMatrix4(w,a),s.normal.toArray(g,A),g[A+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function VA(t){let e=new WeakMap;function n(s,a){return a===Od?s.mapping=ns:a===Fd&&(s.mapping=is),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Od||a===Fd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new JM(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class WA extends L_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bo=4,Eg=[.125,.215,.35,.446,.526,.582],Nr=20,Uc=new WA,Mg=new ht;let Nc=null,Oc=0,Fc=0;const Ir=(1+Math.sqrt(5))/2,To=1/Ir,Tg=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Ir,To),new V(0,Ir,-To),new V(To,0,Ir),new V(-To,0,Ir),new V(Ir,To,0),new V(-Ir,To,0)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Oc,Fc),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:da,format:ni,colorSpace:Sr,depthBuffer:!1},r=bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(o)),this._blurMaterial=jA(o,e,n)}return r}_compileMaterial(e){const n=new At(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,i,r){const a=new Bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Mg),h.toneMapping=hr,h.autoClear=!1;const v=new ln({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),S=new At(new cs,v);let E=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,E=!0):(v.color.copy(Mg),E=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;gl(r,w*x,d>2?x:0,x,x),h.setRenderTarget(r),E&&h.render(S,a),h.render(e,a)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new At(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Tg[(r-1)%Tg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new At(this._lodPlanes[r],c),m=c.uniforms,v=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Nr-1),E=o/S,g=isFinite(o)?1+Math.floor(h*E):Nr;g>Nr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const d=[];let w=0;for(let C=0;C<Nr;++C){const k=C/E,ne=Math.exp(-k*k/2);d.push(ne),C===0?w+=ne:C<g&&(w+=2*ne)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=d,m.latitudinal.value=s==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=S,m.mipInt.value=x-i;const A=this._sizeLods[r],I=3*A*(r>x-Bo?r-x+Bo:0),P=4*(this._cubeSize-A);gl(n,I,P,3*A,2*A),l.setRenderTarget(n),l.render(p,Uc)}}function XA(t){const e=[],n=[],i=[];let r=t;const o=t-Bo+1+Eg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Bo?l=Eg[s-t+Bo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],v=6,S=6,E=3,g=2,d=1,w=new Float32Array(E*S*v),x=new Float32Array(g*S*v),A=new Float32Array(d*S*v);for(let P=0;P<v;P++){const C=P%3*2/3-1,k=P>2?0:-1,ne=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];w.set(ne,E*S*P),x.set(m,g*S*P);const M=[P,P,P,P,P,P];A.set(M,d*S*P)}const I=new ki;I.setAttribute("position",new gi(w,E)),I.setAttribute("uv",new gi(x,g)),I.setAttribute("faceIndex",new gi(A,d)),e.push(I),r>Bo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jA(t,e,n){const i=new Float32Array(Nr),r=new V(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Cg(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rg(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}function YA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Od||l===Fd,h=l===ns||l===is;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new Ag(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new Ag(t));const m=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",o),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function qA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $A(t,e,n,i){const r={},o=new WeakMap;function s(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const E=m.morphAttributes[S];for(let g=0,d=E.length;g<d;g++)e.remove(E[g])}m.removeEventListener("dispose",s),delete r[m.id];const v=o.get(m);v&&(e.remove(v),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,n.memory.geometries++),m}function l(p){const m=p.attributes;for(const S in m)e.update(m[S],t.ARRAY_BUFFER);const v=p.morphAttributes;for(const S in v){const E=v[S];for(let g=0,d=E.length;g<d;g++)e.update(E[g],t.ARRAY_BUFFER)}}function c(p){const m=[],v=p.index,S=p.attributes.position;let E=0;if(v!==null){const w=v.array;E=v.version;for(let x=0,A=w.length;x<A;x+=3){const I=w[x+0],P=w[x+1],C=w[x+2];m.push(I,P,P,C,C,I)}}else if(S!==void 0){const w=S.array;E=S.version;for(let x=0,A=w.length/3-1;x<A;x+=3){const I=x+0,P=x+1,C=x+2;m.push(I,P,P,C,C,I)}}else return;const g=new(E_(m)?R_:C_)(m,1);g.version=E;const d=o.get(p);d&&e.remove(d),o.set(p,g)}function h(p){const m=o.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function KA(t,e,n,i){const r=i.isWebGL2;let o;function s(v){o=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function h(v,S){t.drawElements(o,S,a,v*l),n.update(S,o,1)}function p(v,S,E){if(E===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](o,S,a,v*l,E),n.update(S,o,E)}function m(v,S,E){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<E;d++)this.render(v[d]/l,S[d]);else{g.multiDrawElementsWEBGL(o,S,0,a,v,0,E);let d=0;for(let w=0;w<E;w++)d+=S[w];n.update(d,o,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function ZA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QA(t,e){return t[0]-e[0]}function JA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function e2(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,p){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,E=S!==void 0?S.length:0;let g=o.get(h);if(g===void 0||g.count!==E){let le=function(){D.dispose(),o.delete(h),h.removeEventListener("dispose",le)};var v=le;g!==void 0&&g.texture.dispose();const d=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let C=0;d===!0&&(C=1),w===!0&&(C=2),x===!0&&(C=3);let k=h.attributes.position.count*C,ne=1;k>e.maxTextureSize&&(ne=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const M=new Float32Array(k*ne*4*E),D=new A_(M,k,ne,E);D.type=bi,D.needsUpdate=!0;const ue=C*4;for(let F=0;F<E;F++){const J=A[F],K=I[F],ie=P[F],N=k*ne*4*F;for(let X=0;X<J.count;X++){const q=X*ue;d===!0&&(s.fromBufferAttribute(J,X),M[N+q+0]=s.x,M[N+q+1]=s.y,M[N+q+2]=s.z,M[N+q+3]=0),w===!0&&(s.fromBufferAttribute(K,X),M[N+q+4]=s.x,M[N+q+5]=s.y,M[N+q+6]=s.z,M[N+q+7]=0),x===!0&&(s.fromBufferAttribute(ie,X),M[N+q+8]=s.x,M[N+q+9]=s.y,M[N+q+10]=s.z,M[N+q+11]=ie.itemSize===4?s.w:1)}}g={count:E,texture:D,size:new Ye(k,ne)},o.set(h,g),h.addEventListener("dispose",le)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let x=0;x<m.length;x++)d+=m[x];const w=h.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",w),p.getUniforms().setValue(t,"morphTargetInfluences",m)}p.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const S=m===void 0?0:m.length;let E=i[h.id];if(E===void 0||E.length!==S){E=[];for(let A=0;A<S;A++)E[A]=[A,0];i[h.id]=E}for(let A=0;A<S;A++){const I=E[A];I[0]=A,I[1]=m[A]}E.sort(JA);for(let A=0;A<8;A++)A<S&&E[A][1]?(a[A][0]=E[A][0],a[A][1]=E[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(QA);const g=h.morphAttributes.position,d=h.morphAttributes.normal;let w=0;for(let A=0;A<8;A++){const I=a[A],P=I[0],C=I[1];P!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+A)!==g[P]&&h.setAttribute("morphTarget"+A,g[P]),d&&h.getAttribute("morphNormal"+A)!==d[P]&&h.setAttribute("morphNormal"+A,d[P]),r[A]=C,w+=C):(g&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),d&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),r[A]=0)}const x=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function t2(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class N_ extends mn{constructor(e,n,i,r,o,s,a,l,c,h){if(h=h!==void 0?h:Vr,h!==Vr&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vr&&(i=ir),i===void 0&&h===rs&&(i=Gr),super(null,r,o,s,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const O_=new mn,F_=new N_(1,1);F_.compareFunction=S_;const k_=new A_,B_=new OM,z_=new D_,Pg=[],Lg=[],Dg=new Float32Array(16),Ig=new Float32Array(9),Ug=new Float32Array(4);function ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Pg[r];if(o===void 0&&(o=new Float32Array(r),Pg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Lg[e];n===void 0&&(n=new Int32Array(e),Lg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function s2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Ug.set(i),t.uniformMatrix2fv(this.addr,!1,Ug),Wt(n,i)}}function a2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Ig.set(i),t.uniformMatrix3fv(this.addr,!1,Ig),Wt(n,i)}}function l2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;Dg.set(i),t.uniformMatrix4fv(this.addr,!1,Dg),Wt(n,i)}}function u2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function h2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function m2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function g2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?F_:O_;n.setTexture2D(e||o,r)}function _2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||B_,r)}function y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||z_,r)}function x2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||k_,r)}function w2(t){switch(t){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return o2;case 35674:return s2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return u2;case 35667:case 35671:return c2;case 35668:case 35672:return d2;case 35669:case 35673:return f2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}function S2(t,e){t.uniform1fv(this.addr,e)}function E2(t,e){const n=ds(e,this.size,2);t.uniform2fv(this.addr,n)}function M2(t,e){const n=ds(e,this.size,3);t.uniform3fv(this.addr,n)}function T2(t,e){const n=ds(e,this.size,4);t.uniform4fv(this.addr,n)}function A2(t,e){const n=ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function b2(t,e){const n=ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function C2(t,e){const n=ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function R2(t,e){t.uniform1iv(this.addr,e)}function P2(t,e){t.uniform2iv(this.addr,e)}function L2(t,e){t.uniform3iv(this.addr,e)}function D2(t,e){t.uniform4iv(this.addr,e)}function I2(t,e){t.uniform1uiv(this.addr,e)}function U2(t,e){t.uniform2uiv(this.addr,e)}function N2(t,e){t.uniform3uiv(this.addr,e)}function O2(t,e){t.uniform4uiv(this.addr,e)}function F2(t,e,n){const i=this.cache,r=e.length,o=bu(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Wt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||O_,o[s])}function k2(t,e,n){const i=this.cache,r=e.length,o=bu(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Wt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||B_,o[s])}function B2(t,e,n){const i=this.cache,r=e.length,o=bu(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Wt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||z_,o[s])}function z2(t,e,n){const i=this.cache,r=e.length,o=bu(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Wt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||k_,o[s])}function H2(t){switch(t){case 5126:return S2;case 35664:return E2;case 35665:return M2;case 35666:return T2;case 35674:return A2;case 35675:return b2;case 35676:return C2;case 5124:case 35670:return R2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return D2;case 5125:return I2;case 36294:return U2;case 36295:return N2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}class G2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=w2(n.type)}}class V2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H2(n.type)}}class W2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Ng(t,e){t.seq.push(e),t.map[e.id]=e}function X2(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const o=kc.exec(i),s=kc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Ng(n,c===void 0?new G2(a,t,e):new V2(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new W2(a),Ng(n,p)),n=p}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);X2(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const j2=37297;let Y2=0;function q2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function $2(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===ru&&n===iu?i="LinearDisplayP3ToLinearSRGB":e===iu&&n===ru&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case Mu:return[i,"LinearTransferOETF"];case ci:case Vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Fg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+q2(t.getShaderSource(e),s)}else return r}function K2(t,e){const n=$2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Z2(t,e){let n;switch(e){case VE:n="Linear";break;case WE:n="Reinhard";break;case XE:n="OptimizedCineon";break;case jE:n="ACESFilmic";break;case qE:n="AgX";break;case $E:n="Neutral";break;case YE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Q2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function J2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function eb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function zo(t){return t!==""}function kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(nb,rb)}const ib=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rb(t,e){let n=Je[e];if(n===void 0){const i=ib.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(t){return t.replace(ob,sb)}function sb(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Hg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
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
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ab(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function lb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ub(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function cb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case h_:e="ENVMAP_BLENDING_MULTIPLY";break;case HE:e="ENVMAP_BLENDING_MIX";break;case GE:e="ENVMAP_BLENDING_ADD";break}return e}function db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fb(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=ab(n),c=lb(n),h=ub(n),p=cb(n),m=db(n),v=n.isWebGL2?"":Q2(n),S=J2(n),E=eb(o),g=r.createProgram();let d,w,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),d.length>0&&(d+=`
`),w=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),w.length>0&&(w+=`
`)):(d=[Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),w=[v,Hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?Je.tonemapping_pars_fragment:"",n.toneMapping!==hr?Z2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,K2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),s=Gd(s),s=kg(s,n),s=Bg(s,n),a=Gd(a),a=kg(a,n),a=Bg(a,n),s=zg(s),a=zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,w=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const A=x+d+s,I=x+w+a,P=Og(r,r.VERTEX_SHADER,A),C=Og(r,r.FRAGMENT_SHADER,I);r.attachShader(g,P),r.attachShader(g,C),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function k(ue){if(t.debug.checkShaderErrors){const le=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(P).trim(),J=r.getShaderInfoLog(C).trim();let K=!0,ie=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,P,C);else{const N=Fg(r,P,"vertex"),X=Fg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+ue.name+`
Material Type: `+ue.type+`

Program Info Log: `+le+`
`+N+`
`+X)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(F===""||J==="")&&(ie=!1);ie&&(ue.diagnostics={runnable:K,programLog:le,vertexShader:{log:F,prefix:d},fragmentShader:{log:J,prefix:w}})}r.deleteShader(P),r.deleteShader(C),ne=new Pl(r,g),M=tb(r,g)}let ne;this.getUniforms=function(){return ne===void 0&&k(this),ne};let M;this.getAttributes=function(){return M===void 0&&k(this),M};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(g,j2)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=C,this}let hb=0;class pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mb(e),n.set(e,i)),i}}class mb{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}}function gb(t,e,n,i,r,o,s){const a=new Yf,l=new pb,c=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,D,ue,le,F){const J=le.fog,K=F.geometry,ie=M.isMeshStandardMaterial?le.environment:null,N=(M.isMeshStandardMaterial?n:e).get(M.envMap||ie),X=N&&N.mapping===Eu?N.image.height:null,q=E[M.type];M.precision!==null&&(S=r.getMaxPrecision(M.precision),S!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",S,"instead."));const re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=re!==void 0?re.length:0;let B=0;K.morphAttributes.position!==void 0&&(B=1),K.morphAttributes.normal!==void 0&&(B=2),K.morphAttributes.color!==void 0&&(B=3);let j,se,ye,Ue;if(q){const at=di[q];j=at.vertexShader,se=at.fragmentShader}else j=M.vertexShader,se=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),Ue=l.getFragmentShaderID(M);const we=t.getRenderTarget(),xe=F.isInstancedMesh===!0,rt=F.isBatchedMesh===!0,Be=!!M.map,H=!!M.matcap,wt=!!N,Pe=!!M.aoMap,He=!!M.lightMap,Ne=!!M.bumpMap,Fe=!!M.normalMap,Ge=!!M.displacementMap,Oe=!!M.emissiveMap,Ie=!!M.metalnessMap,R=!!M.roughnessMap,T=M.anisotropy>0,Z=M.clearcoat>0,ee=M.iridescence>0,de=M.sheen>0,ae=M.transmission>0,ze=T&&!!M.anisotropyMap,be=Z&&!!M.clearcoatMap,pe=Z&&!!M.clearcoatNormalMap,ve=Z&&!!M.clearcoatRoughnessMap,Xe=ee&&!!M.iridescenceMap,he=ee&&!!M.iridescenceThicknessMap,dt=de&&!!M.sheenColorMap,Ze=de&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,Me=!!M.specularColorMap,Re=!!M.specularIntensityMap,L=ae&&!!M.transmissionMap,te=ae&&!!M.thicknessMap,Te=!!M.gradientMap,O=!!M.alphaMap,oe=M.alphaTest>0,G=!!M.alphaHash,ce=!!M.extensions;let me=hr;M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(me=t.toneMapping);const qe={isWebGL2:p,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:se,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:S,batching:rt,instancing:xe,instancingColor:xe&&F.instanceColor!==null,instancingMorph:xe&&F.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Sr,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:H,envMap:wt,envMapMode:wt&&N.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:He,bumpMap:Ne,normalMap:Fe,displacementMap:v&&Ge,emissiveMap:Oe,normalMapObjectSpace:Fe&&M.normalMapType===aM,normalMapTangentSpace:Fe&&M.normalMapType===sM,metalnessMap:Ie,roughnessMap:R,anisotropy:T,anisotropyMap:ze,clearcoat:Z,clearcoatMap:be,clearcoatNormalMap:pe,clearcoatRoughnessMap:ve,iridescence:ee,iridescenceMap:Xe,iridescenceThicknessMap:he,sheen:de,sheenColorMap:dt,sheenRoughnessMap:Ze,specularMap:Ce,specularColorMap:Me,specularIntensityMap:Re,transmission:ae,transmissionMap:L,thicknessMap:te,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Yo&&M.alphaToCoverage===!1,alphaMap:O,alphaTest:oe,alphaHash:G,combine:M.combine,mapUv:Be&&g(M.map.channel),aoMapUv:Pe&&g(M.aoMap.channel),lightMapUv:He&&g(M.lightMap.channel),bumpMapUv:Ne&&g(M.bumpMap.channel),normalMapUv:Fe&&g(M.normalMap.channel),displacementMapUv:Ge&&g(M.displacementMap.channel),emissiveMapUv:Oe&&g(M.emissiveMap.channel),metalnessMapUv:Ie&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:ze&&g(M.anisotropyMap.channel),clearcoatMapUv:be&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:Me&&g(M.specularColorMap.channel),specularIntensityMapUv:Re&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:te&&g(M.thicknessMap.channel),alphaMapUv:O&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Fe||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Be||O),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:B,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&ue.length>0,shadowMapType:t.shadowMap.type,toneMapping:me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ei,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function w(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ue in M.defines)D.push(ue),D.push(M.defines[ue]);return M.isRawShaderMaterial===!1&&(x(D,M),A(D,M),D.push(t.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function x(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.numLightProbes),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function A(M,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.instancingMorph&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.normalMapObjectSpace&&a.enable(7),D.normalMapTangentSpace&&a.enable(8),D.clearcoat&&a.enable(9),D.iridescence&&a.enable(10),D.alphaTest&&a.enable(11),D.vertexColors&&a.enable(12),D.vertexAlphas&&a.enable(13),D.vertexUv1s&&a.enable(14),D.vertexUv2s&&a.enable(15),D.vertexUv3s&&a.enable(16),D.vertexTangents&&a.enable(17),D.anisotropy&&a.enable(18),D.alphaHash&&a.enable(19),D.batching&&a.enable(20),M.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.alphaToCoverage&&a.enable(20),M.push(a.mask)}function I(M){const D=E[M.type];let ue;if(D){const le=di[D];ue=$M.clone(le.uniforms)}else ue=M.uniforms;return ue}function P(M,D){let ue;for(let le=0,F=h.length;le<F;le++){const J=h[le];if(J.cacheKey===D){ue=J,++ue.usedTimes;break}}return ue===void 0&&(ue=new fb(t,D,M,o),h.push(ue)),ue}function C(M){if(--M.usedTimes===0){const D=h.indexOf(M);h[D]=h[h.length-1],h.pop(),M.destroy()}}function k(M){l.remove(M)}function ne(){l.dispose()}return{getParameters:d,getProgramCacheKey:w,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:k,programs:h,dispose:ne}}function vb(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _b(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(p,m,v,S,E,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:m,material:v,groupOrder:S,renderOrder:p.renderOrder,z:E,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=m,d.material=v,d.groupOrder=S,d.renderOrder=p.renderOrder,d.z=E,d.group=g),e++,d}function a(p,m,v,S,E,g){const d=s(p,m,v,S,E,g);v.transmission>0?i.push(d):v.transparent===!0?r.push(d):n.push(d)}function l(p,m,v,S,E,g){const d=s(p,m,v,S,E,g);v.transmission>0?i.unshift(d):v.transparent===!0?r.unshift(d):n.unshift(d)}function c(p,m){n.length>1&&n.sort(p||_b),i.length>1&&i.sort(m||Gg),r.length>1&&r.sort(m||Gg)}function h(){for(let p=e,m=t.length;p<m;p++){const v=t[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:h,sort:c}}function yb(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Vg,t.set(i,[s])):r>=o.length?(s=new Vg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function xb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ht};break;case"SpotLight":n={position:new V,direction:new V,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Sb=0;function Eb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Mb(t,e){const n=new xb,i=wb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new V);const o=new V,s=new zt,a=new zt;function l(h,p){let m=0,v=0,S=0;for(let ue=0;ue<9;ue++)r.probe[ue].set(0,0,0);let E=0,g=0,d=0,w=0,x=0,A=0,I=0,P=0,C=0,k=0,ne=0;h.sort(Eb);const M=p===!0?Math.PI:1;for(let ue=0,le=h.length;ue<le;ue++){const F=h[ue],J=F.color,K=F.intensity,ie=F.distance,N=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=J.r*K*M,v+=J.g*K*M,S+=J.b*K*M;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],K);ne++}else if(F.isDirectionalLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const q=F.shadow,re=i.get(F);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,r.directionalShadow[E]=re,r.directionalShadowMap[E]=N,r.directionalShadowMatrix[E]=F.shadow.matrix,A++}r.directional[E]=X,E++}else if(F.isSpotLight){const X=n.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(J).multiplyScalar(K*M),X.distance=ie,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[d]=X;const q=F.shadow;if(F.map&&(r.spotLightMap[C]=F.map,C++,q.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[d]=q.matrix,F.castShadow){const re=i.get(F);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,r.spotShadow[d]=re,r.spotShadowMap[d]=N,P++}d++}else if(F.isRectAreaLight){const X=n.get(F);X.color.copy(J).multiplyScalar(K),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[w]=X,w++}else if(F.isPointLight){const X=n.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*M),X.distance=F.distance,X.decay=F.decay,F.castShadow){const q=F.shadow,re=i.get(F);re.shadowBias=q.bias,re.shadowNormalBias=q.normalBias,re.shadowRadius=q.radius,re.shadowMapSize=q.mapSize,re.shadowCameraNear=q.camera.near,re.shadowCameraFar=q.camera.far,r.pointShadow[g]=re,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=F.shadow.matrix,I++}r.point[g]=X,g++}else if(F.isHemisphereLight){const X=n.get(F);X.skyColor.copy(F.color).multiplyScalar(K*M),X.groundColor.copy(F.groundColor).multiplyScalar(K*M),r.hemi[x]=X,x++}}w>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=S;const D=r.hash;(D.directionalLength!==E||D.pointLength!==g||D.spotLength!==d||D.rectAreaLength!==w||D.hemiLength!==x||D.numDirectionalShadows!==A||D.numPointShadows!==I||D.numSpotShadows!==P||D.numSpotMaps!==C||D.numLightProbes!==ne)&&(r.directional.length=E,r.spot.length=d,r.rectArea.length=w,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+C-k,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=ne,D.directionalLength=E,D.pointLength=g,D.spotLength=d,D.rectAreaLength=w,D.hemiLength=x,D.numDirectionalShadows=A,D.numPointShadows=I,D.numSpotShadows=P,D.numSpotMaps=C,D.numLightProbes=ne,r.version=Sb++)}function c(h,p){let m=0,v=0,S=0,E=0,g=0;const d=p.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){const A=h[w];if(A.isDirectionalLight){const I=r.directional[m];I.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(d),m++}else if(A.isSpotLight){const I=r.spot[S];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(d),S++}else if(A.isRectAreaLight){const I=r.rectArea[E];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),a.identity(),s.copy(A.matrixWorld),s.premultiply(d),a.extractRotation(s),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),E++}else if(A.isPointLight){const I=r.point[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(d),v++}else if(A.isHemisphereLight){const I=r.hemi[g];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:r}}function Wg(t,e){const n=new Mb(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Tb(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Wg(t,e),n.set(o,[l])):s>=a.length?(l=new Wg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Ab extends Tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bb extends Tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
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
}`;function Pb(t,e,n){let i=new I_;const r=new Ye,o=new Ye,s=new Kt,a=new Ab({depthPacking:oM}),l=new bb,c={},h=n.maxTextureSize,p={[vr]:pn,[pn]:vr,[ei]:ei},m=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Cb,fragmentShader:Rb}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const S=new ki;S.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new At(S,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let d=this.type;this.render=function(P,C,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const ne=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),ue=t.state;ue.setBlending(fr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const le=d!==Mi&&this.type===Mi,F=d===Mi&&this.type!==Mi;for(let J=0,K=P.length;J<K;J++){const ie=P[J],N=ie.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),o.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/X.x),r.x=o.x*X.x,N.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/X.y),r.y=o.y*X.y,N.mapSize.y=o.y)),N.map===null||le===!0||F===!0){const re=this.type!==Mi?{minFilter:fn,magFilter:fn}:{};N.map!==null&&N.map.dispose(),N.map=new $r(r.x,r.y,re),N.map.texture.name=ie.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const q=N.getViewportCount();for(let re=0;re<q;re++){const ge=N.getViewport(re);s.set(o.x*ge.x,o.y*ge.y,o.x*ge.z,o.y*ge.w),ue.viewport(s),N.updateMatrices(ie,re),i=N.getFrustum(),A(C,k,N.camera,ie,this.type)}N.isPointLightShadow!==!0&&this.type===Mi&&w(N,k),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(ne,M,D)};function w(P,C){const k=e.update(E);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $r(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(C,null,k,m,E,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(C,null,k,v,E,null)}function x(P,C,k,ne){let M=null;const D=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)M=D;else if(M=k.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ue=M.uuid,le=C.uuid;let F=c[ue];F===void 0&&(F={},c[ue]=F);let J=F[le];J===void 0&&(J=M.clone(),F[le]=J,C.addEventListener("dispose",I)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,ne===Mi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:p[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ue=t.properties.get(M);ue.light=k}return M}function A(P,C,k,ne,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Mi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const le=e.update(P),F=P.material;if(Array.isArray(F)){const J=le.groups;for(let K=0,ie=J.length;K<ie;K++){const N=J[K],X=F[N.materialIndex];if(X&&X.visible){const q=x(P,X,ne,M);P.onBeforeShadow(t,P,C,k,le,q,N),t.renderBufferDirect(k,null,le,q,P,N),P.onAfterShadow(t,P,C,k,le,q,N)}}}else if(F.visible){const J=x(P,F,ne,M);P.onBeforeShadow(t,P,C,k,le,J,null),t.renderBufferDirect(k,null,le,J,P,null),P.onAfterShadow(t,P,C,k,le,J,null)}}const ue=P.children;for(let le=0,F=ue.length;le<F;le++)A(ue[le],C,k,ne,M)}function I(P){P.target.removeEventListener("dispose",I);for(const k in c){const ne=c[k],M=P.target.uuid;M in ne&&(ne[M].dispose(),delete ne[M])}}}function Lb(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const oe=new Kt;let G=null;const ce=new Kt(0,0,0,0);return{setMask:function(me){G!==me&&!O&&(t.colorMask(me,me,me,me),G=me)},setLocked:function(me){O=me},setClear:function(me,qe,at,lt,De){De===!0&&(me*=lt,qe*=lt,at*=lt),oe.set(me,qe,at,lt),ce.equals(oe)===!1&&(t.clearColor(me,qe,at,lt),ce.copy(oe))},reset:function(){O=!1,G=null,ce.set(-1,0,0,0)}}}function o(){let O=!1,oe=null,G=null,ce=null;return{setTest:function(me){me?xe(t.DEPTH_TEST):rt(t.DEPTH_TEST)},setMask:function(me){oe!==me&&!O&&(t.depthMask(me),oe=me)},setFunc:function(me){if(G!==me){switch(me){case UE:t.depthFunc(t.NEVER);break;case NE:t.depthFunc(t.ALWAYS);break;case OE:t.depthFunc(t.LESS);break;case tu:t.depthFunc(t.LEQUAL);break;case FE:t.depthFunc(t.EQUAL);break;case kE:t.depthFunc(t.GEQUAL);break;case BE:t.depthFunc(t.GREATER);break;case zE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=me}},setLocked:function(me){O=me},setClear:function(me){ce!==me&&(t.clearDepth(me),ce=me)},reset:function(){O=!1,oe=null,G=null,ce=null}}}function s(){let O=!1,oe=null,G=null,ce=null,me=null,qe=null,at=null,lt=null,De=null;return{setTest:function($e){O||($e?xe(t.STENCIL_TEST):rt(t.STENCIL_TEST))},setMask:function($e){oe!==$e&&!O&&(t.stencilMask($e),oe=$e)},setFunc:function($e,ot,St){(G!==$e||ce!==ot||me!==St)&&(t.stencilFunc($e,ot,St),G=$e,ce=ot,me=St)},setOp:function($e,ot,St){(qe!==$e||at!==ot||lt!==St)&&(t.stencilOp($e,ot,St),qe=$e,at=ot,lt=St)},setLocked:function($e){O=$e},setClear:function($e){De!==$e&&(t.clearStencil($e),De=$e)},reset:function(){O=!1,oe=null,G=null,ce=null,me=null,qe=null,at=null,lt=null,De=null}}}const a=new r,l=new o,c=new s,h=new WeakMap,p=new WeakMap;let m={},v={},S=new WeakMap,E=[],g=null,d=!1,w=null,x=null,A=null,I=null,P=null,C=null,k=null,ne=new ht(0,0,0),M=0,D=!1,ue=null,le=null,F=null,J=null,K=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=X>=2);let re=null,ge={};const B=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),se=new Kt().fromArray(B),ye=new Kt().fromArray(j);function Ue(O,oe,G,ce){const me=new Uint8Array(4),qe=t.createTexture();t.bindTexture(O,qe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<G;at++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(oe+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return qe}const we={};we[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(t.DEPTH_TEST),l.setFunc(tu),Ge(!1),Oe(Em),xe(t.CULL_FACE),Ne(fr);function xe(O){m[O]!==!0&&(t.enable(O),m[O]=!0)}function rt(O){m[O]!==!1&&(t.disable(O),m[O]=!1)}function Be(O,oe){return v[O]!==oe?(t.bindFramebuffer(O,oe),v[O]=oe,i&&(O===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=oe),O===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function H(O,oe){let G=E,ce=!1;if(O){G=S.get(oe),G===void 0&&(G=[],S.set(oe,G));const me=O.textures;if(G.length!==me.length||G[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,at=me.length;qe<at;qe++)G[qe]=t.COLOR_ATTACHMENT0+qe;G.length=me.length,ce=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,ce=!0);if(ce)if(n.isWebGL2)t.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function wt(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const Pe={[Ur]:t.FUNC_ADD,[yE]:t.FUNC_SUBTRACT,[xE]:t.FUNC_REVERSE_SUBTRACT};if(i)Pe[bm]=t.MIN,Pe[Cm]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Pe[bm]=O.MIN_EXT,Pe[Cm]=O.MAX_EXT)}const He={[wE]:t.ZERO,[SE]:t.ONE,[EE]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[RE]:t.SRC_ALPHA_SATURATE,[bE]:t.DST_COLOR,[TE]:t.DST_ALPHA,[ME]:t.ONE_MINUS_SRC_COLOR,[Nd]:t.ONE_MINUS_SRC_ALPHA,[CE]:t.ONE_MINUS_DST_COLOR,[AE]:t.ONE_MINUS_DST_ALPHA,[PE]:t.CONSTANT_COLOR,[LE]:t.ONE_MINUS_CONSTANT_COLOR,[DE]:t.CONSTANT_ALPHA,[IE]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(O,oe,G,ce,me,qe,at,lt,De,$e){if(O===fr){d===!0&&(rt(t.BLEND),d=!1);return}if(d===!1&&(xe(t.BLEND),d=!0),O!==_E){if(O!==w||$e!==D){if((x!==Ur||P!==Ur)&&(t.blendEquation(t.FUNC_ADD),x=Ur,P=Ur),$e)switch(O){case Yo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.ONE,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Yo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,I=null,C=null,k=null,ne.set(0,0,0),M=0,w=O,D=$e}return}me=me||oe,qe=qe||G,at=at||ce,(oe!==x||me!==P)&&(t.blendEquationSeparate(Pe[oe],Pe[me]),x=oe,P=me),(G!==A||ce!==I||qe!==C||at!==k)&&(t.blendFuncSeparate(He[G],He[ce],He[qe],He[at]),A=G,I=ce,C=qe,k=at),(lt.equals(ne)===!1||De!==M)&&(t.blendColor(lt.r,lt.g,lt.b,De),ne.copy(lt),M=De),w=O,D=!1}function Fe(O,oe){O.side===ei?rt(t.CULL_FACE):xe(t.CULL_FACE);let G=O.side===pn;oe&&(G=!G),Ge(G),O.blending===Yo&&O.transparent===!1?Ne(fr):Ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const ce=O.stencilWrite;c.setTest(ce),ce&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),R(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):rt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){ue!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),ue=O)}function Oe(O){O!==mE?(xe(t.CULL_FACE),O!==le&&(O===Em?t.cullFace(t.BACK):O===gE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):rt(t.CULL_FACE),le=O}function Ie(O){O!==F&&(N&&t.lineWidth(O),F=O)}function R(O,oe,G){O?(xe(t.POLYGON_OFFSET_FILL),(J!==oe||K!==G)&&(t.polygonOffset(oe,G),J=oe,K=G)):rt(t.POLYGON_OFFSET_FILL)}function T(O){O?xe(t.SCISSOR_TEST):rt(t.SCISSOR_TEST)}function Z(O){O===void 0&&(O=t.TEXTURE0+ie-1),re!==O&&(t.activeTexture(O),re=O)}function ee(O,oe,G){G===void 0&&(re===null?G=t.TEXTURE0+ie-1:G=re);let ce=ge[G];ce===void 0&&(ce={type:void 0,texture:void 0},ge[G]=ce),(ce.type!==O||ce.texture!==oe)&&(re!==G&&(t.activeTexture(G),re=G),t.bindTexture(O,oe||we[O]),ce.type=O,ce.texture=oe)}function de(){const O=ge[re];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(O){se.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function Re(O){ye.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function L(O,oe){let G=p.get(oe);G===void 0&&(G=new WeakMap,p.set(oe,G));let ce=G.get(O);ce===void 0&&(ce=t.getUniformBlockIndex(oe,O.name),G.set(O,ce))}function te(O,oe){const ce=p.get(oe).get(O);h.get(oe)!==ce&&(t.uniformBlockBinding(oe,ce,O.__bindingPointIndex),h.set(oe,ce))}function Te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},re=null,ge={},v={},S=new WeakMap,E=[],g=null,d=!1,w=null,x=null,A=null,I=null,P=null,C=null,k=null,ne=new ht(0,0,0),M=0,D=!1,ue=null,le=null,F=null,J=null,K=null,se.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:rt,bindFramebuffer:Be,drawBuffers:H,useProgram:wt,setBlending:Ne,setMaterial:Fe,setFlipSided:Ge,setCullFace:Oe,setLineWidth:Ie,setPolygonOffset:R,setScissorTest:T,activeTexture:Z,bindTexture:ee,unbindTexture:de,compressedTexImage2D:ae,compressedTexImage3D:ze,texImage2D:Ze,texImage3D:Ce,updateUBOMapping:L,uniformBlockBinding:te,texStorage2D:he,texStorage3D:dt,texSubImage2D:be,texSubImage3D:pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Xe,scissor:Me,viewport:Re,reset:Te}}function Db(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ye,p=new WeakMap;let m;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,T){return S?new OffscreenCanvas(R,T):ha("canvas")}function g(R,T,Z,ee){let de=1;const ae=Ie(R);if((ae.width>ee||ae.height>ee)&&(de=ee/Math.max(ae.width,ae.height)),de<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ze=T?su:Math.floor,be=ze(de*ae.width),pe=ze(de*ae.height);m===void 0&&(m=E(be,pe));const ve=Z?E(be,pe):m;return ve.width=be,ve.height=pe,ve.getContext("2d").drawImage(R,0,0,be,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+be+"x"+pe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function d(R){const T=Ie(R);return Hd(T.width)&&Hd(T.height)}function w(R){return a?!1:R.wrapS!==ti||R.wrapT!==ti||R.minFilter!==fn&&R.minFilter!==yn}function x(R,T){return R.generateMipmaps&&T&&R.minFilter!==fn&&R.minFilter!==yn}function A(R){t.generateMipmap(R)}function I(R,T,Z,ee,de=!1){if(a===!1)return T;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=T;if(T===t.RED&&(Z===t.FLOAT&&(ae=t.R32F),Z===t.HALF_FLOAT&&(ae=t.R16F),Z===t.UNSIGNED_BYTE&&(ae=t.R8)),T===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ae=t.R8UI),Z===t.UNSIGNED_SHORT&&(ae=t.R16UI),Z===t.UNSIGNED_INT&&(ae=t.R32UI),Z===t.BYTE&&(ae=t.R8I),Z===t.SHORT&&(ae=t.R16I),Z===t.INT&&(ae=t.R32I)),T===t.RG&&(Z===t.FLOAT&&(ae=t.RG32F),Z===t.HALF_FLOAT&&(ae=t.RG16F),Z===t.UNSIGNED_BYTE&&(ae=t.RG8)),T===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ae=t.RG8UI),Z===t.UNSIGNED_SHORT&&(ae=t.RG16UI),Z===t.UNSIGNED_INT&&(ae=t.RG32UI),Z===t.BYTE&&(ae=t.RG8I),Z===t.SHORT&&(ae=t.RG16I),Z===t.INT&&(ae=t.RG32I)),T===t.RGBA){const ze=de?nu:ft.getTransfer(ee);Z===t.FLOAT&&(ae=t.RGBA32F),Z===t.HALF_FLOAT&&(ae=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(ae=ze===yt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(R,T,Z){return x(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){return R===fn||R===Rm||R===Cs?t.NEAREST:t.LINEAR}function k(R){const T=R.target;T.removeEventListener("dispose",k),M(T),T.isVideoTexture&&p.delete(T)}function ne(R){const T=R.target;T.removeEventListener("dispose",ne),ue(T)}function M(R){const T=i.get(R);if(T.__webglInit===void 0)return;const Z=R.source,ee=v.get(Z);if(ee){const de=ee[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(R),Object.keys(ee).length===0&&v.delete(Z)}i.remove(R)}function D(R){const T=i.get(R);t.deleteTexture(T.__webglTexture);const Z=R.source,ee=v.get(Z);delete ee[T.__cacheKey],s.memory.textures--}function ue(R){const T=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let de=0;de<T.__webglFramebuffer[ee].length;de++)t.deleteFramebuffer(T.__webglFramebuffer[ee][de]);else t.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)t.deleteFramebuffer(T.__webglFramebuffer[ee]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=R.textures;for(let ee=0,de=Z.length;ee<de;ee++){const ae=i.get(Z[ee]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),s.memory.textures--),i.remove(Z[ee])}i.remove(R)}let le=0;function F(){le=0}function J(){const R=le;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),le+=1,R}function K(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ie(R,T){const Z=i.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,R,T);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+T)}function N(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ye(Z,R,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+T)}function X(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){ye(Z,R,T);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+T)}function q(R,T){const Z=i.get(R);if(R.version>0&&Z.__version!==R.version){Ue(Z,R,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+T)}const re={[kd]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[Bd]:t.MIRRORED_REPEAT},ge={[fn]:t.NEAREST,[Rm]:t.NEAREST_MIPMAP_NEAREST,[Cs]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[uc]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},B={[lM]:t.NEVER,[pM]:t.ALWAYS,[uM]:t.LESS,[S_]:t.LEQUAL,[cM]:t.EQUAL,[hM]:t.GEQUAL,[dM]:t.GREATER,[fM]:t.NOTEQUAL};function j(R,T,Z){if(T.type===bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===uc||T.magFilter===Cs||T.magFilter===Br||T.minFilter===yn||T.minFilter===uc||T.minFilter===Cs||T.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(t.texParameteri(R,t.TEXTURE_WRAP_S,re[T.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[T.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[T.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ge[T.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ge[T.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==ti||T.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,C(T.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==fn&&T.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==Cs&&T.minFilter!==Br||T.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===da&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function se(R,T){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",k));const ee=T.source;let de=v.get(ee);de===void 0&&(de={},v.set(ee,de));const ae=K(T);if(ae!==R.__cacheKey){de[ae]===void 0&&(de[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),de[ae].usedTimes++;const ze=de[R.__cacheKey];ze!==void 0&&(de[R.__cacheKey].usedTimes--,ze.usedTimes===0&&D(T)),R.__cacheKey=ae,R.__webglTexture=de[ae].texture}return Z}function ye(R,T,Z){let ee=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=t.TEXTURE_3D);const de=se(R,T),ae=T.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+Z);const ze=i.get(ae);if(ae.version!==ze.__version||de===!0){n.activeTexture(t.TEXTURE0+Z);const be=ft.getPrimaries(ft.workingColorSpace),pe=T.colorSpace===er?null:ft.getPrimaries(T.colorSpace),ve=T.colorSpace===er||be===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Xe=w(T)&&d(T.image)===!1;let he=g(T.image,Xe,!1,r.maxTextureSize);he=Oe(T,he);const dt=d(he)||a,Ze=o.convert(T.format,T.colorSpace);let Ce=o.convert(T.type),Me=I(T.internalFormat,Ze,Ce,T.colorSpace,T.isVideoTexture);j(ee,T,dt);let Re;const L=T.mipmaps,te=a&&T.isVideoTexture!==!0&&Me!==w_,Te=ze.__version===void 0||de===!0,O=ae.dataReady,oe=P(T,he,dt);if(T.isDepthTexture)Me=t.DEPTH_COMPONENT,a?T.type===bi?Me=t.DEPTH_COMPONENT32F:T.type===ir?Me=t.DEPTH_COMPONENT24:T.type===Gr?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:T.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vr&&Me===t.DEPTH_COMPONENT&&T.type!==Gf&&T.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ir,Ce=o.convert(T.type)),T.format===rs&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,T.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Gr,Ce=o.convert(T.type))),Te&&(te?n.texStorage2D(t.TEXTURE_2D,1,Me,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Me,he.width,he.height,0,Ze,Ce,null));else if(T.isDataTexture)if(L.length>0&&dt){te&&Te&&n.texStorage2D(t.TEXTURE_2D,oe,Me,L[0].width,L[0].height);for(let G=0,ce=L.length;G<ce;G++)Re=L[G],te?O&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Re.width,Re.height,Ze,Ce,Re.data):n.texImage2D(t.TEXTURE_2D,G,Me,Re.width,Re.height,0,Ze,Ce,Re.data);T.generateMipmaps=!1}else te?(Te&&n.texStorage2D(t.TEXTURE_2D,oe,Me,he.width,he.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Ze,Ce,he.data)):n.texImage2D(t.TEXTURE_2D,0,Me,he.width,he.height,0,Ze,Ce,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Me,L[0].width,L[0].height,he.depth);for(let G=0,ce=L.length;G<ce;G++)Re=L[G],T.format!==ni?Ze!==null?te?O&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Re.width,Re.height,he.depth,Ze,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Me,Re.width,Re.height,he.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Re.width,Re.height,he.depth,Ze,Ce,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Me,Re.width,Re.height,he.depth,0,Ze,Ce,Re.data)}else{te&&Te&&n.texStorage2D(t.TEXTURE_2D,oe,Me,L[0].width,L[0].height);for(let G=0,ce=L.length;G<ce;G++)Re=L[G],T.format!==ni?Ze!==null?te?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,Re.width,Re.height,Ze,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Me,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?O&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Re.width,Re.height,Ze,Ce,Re.data):n.texImage2D(t.TEXTURE_2D,G,Me,Re.width,Re.height,0,Ze,Ce,Re.data)}else if(T.isDataArrayTexture)te?(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Me,he.width,he.height,he.depth),O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ze,Ce,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,he.width,he.height,he.depth,0,Ze,Ce,he.data);else if(T.isData3DTexture)te?(Te&&n.texStorage3D(t.TEXTURE_3D,oe,Me,he.width,he.height,he.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ze,Ce,he.data)):n.texImage3D(t.TEXTURE_3D,0,Me,he.width,he.height,he.depth,0,Ze,Ce,he.data);else if(T.isFramebufferTexture){if(Te)if(te)n.texStorage2D(t.TEXTURE_2D,oe,Me,he.width,he.height);else{let G=he.width,ce=he.height;for(let me=0;me<oe;me++)n.texImage2D(t.TEXTURE_2D,me,Me,G,ce,0,Ze,Ce,null),G>>=1,ce>>=1}}else if(L.length>0&&dt){if(te&&Te){const G=Ie(L[0]);n.texStorage2D(t.TEXTURE_2D,oe,Me,G.width,G.height)}for(let G=0,ce=L.length;G<ce;G++)Re=L[G],te?O&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Ze,Ce,Re):n.texImage2D(t.TEXTURE_2D,G,Me,Ze,Ce,Re);T.generateMipmaps=!1}else if(te){if(Te){const G=Ie(he);n.texStorage2D(t.TEXTURE_2D,oe,Me,G.width,G.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ze,Ce,he)}else n.texImage2D(t.TEXTURE_2D,0,Me,Ze,Ce,he);x(T,dt)&&A(ee),ze.__version=ae.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ue(R,T,Z){if(T.image.length!==6)return;const ee=se(R,T),de=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Z);const ae=i.get(de);if(de.version!==ae.__version||ee===!0){n.activeTexture(t.TEXTURE0+Z);const ze=ft.getPrimaries(ft.workingColorSpace),be=T.colorSpace===er?null:ft.getPrimaries(T.colorSpace),pe=T.colorSpace===er||ze===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Xe=T.image[0]&&T.image[0].isDataTexture,he=[];for(let G=0;G<6;G++)!ve&&!Xe?he[G]=g(T.image[G],!1,!0,r.maxCubemapSize):he[G]=Xe?T.image[G].image:T.image[G],he[G]=Oe(T,he[G]);const dt=he[0],Ze=d(dt)||a,Ce=o.convert(T.format,T.colorSpace),Me=o.convert(T.type),Re=I(T.internalFormat,Ce,Me,T.colorSpace),L=a&&T.isVideoTexture!==!0,te=ae.__version===void 0||ee===!0,Te=de.dataReady;let O=P(T,dt,Ze);j(t.TEXTURE_CUBE_MAP,T,Ze);let oe;if(ve){L&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Re,dt.width,dt.height);for(let G=0;G<6;G++){oe=he[G].mipmaps;for(let ce=0;ce<oe.length;ce++){const me=oe[ce];T.format!==ni?Ce!==null?L?Te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,me.width,me.height,Ce,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,me.width,me.height,Ce,Me,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,Re,me.width,me.height,0,Ce,Me,me.data)}}}else{if(oe=T.mipmaps,L&&te){oe.length>0&&O++;const G=Ie(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Re,G.width,G.height)}for(let G=0;G<6;G++)if(Xe){L?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,he[G].width,he[G].height,Ce,Me,he[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Re,he[G].width,he[G].height,0,Ce,Me,he[G].data);for(let ce=0;ce<oe.length;ce++){const qe=oe[ce].image[G].image;L?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,qe.width,qe.height,Ce,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,Re,qe.width,qe.height,0,Ce,Me,qe.data)}}else{L?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ce,Me,he[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Re,Ce,Me,he[G]);for(let ce=0;ce<oe.length;ce++){const me=oe[ce];L?Te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,Ce,Me,me.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,Re,Ce,Me,me.image[G])}}}x(T,Ze)&&A(t.TEXTURE_CUBE_MAP),ae.__version=de.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function we(R,T,Z,ee,de,ae){const ze=o.convert(Z.format,Z.colorSpace),be=o.convert(Z.type),pe=I(Z.internalFormat,ze,be,Z.colorSpace);if(!i.get(T).__hasExternalTextures){const Xe=Math.max(1,T.width>>ae),he=Math.max(1,T.height>>ae);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,ae,pe,Xe,he,T.depth,0,ze,be,null):n.texImage2D(de,ae,pe,Xe,he,0,ze,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Fe(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,de,i.get(Z).__webglTexture,0,Ne(T)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,de,i.get(Z).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(R,T,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Z||Fe(T)){const de=T.depthTexture;de&&de.isDepthTexture&&(de.type===bi?ee=t.DEPTH_COMPONENT32F:de.type===ir&&(ee=t.DEPTH_COMPONENT24));const ae=Ne(T);Fe(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,ee,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,ee,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Ne(T);Z&&Fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,T.width,T.height):Fe(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ee=T.textures;for(let de=0;de<ee.length;de++){const ae=ee[de],ze=o.convert(ae.format,ae.colorSpace),be=o.convert(ae.type),pe=I(ae.internalFormat,ze,be,ae.colorSpace),ve=Ne(T);Z&&Fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,pe,T.width,T.height):Fe(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,pe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,de=Ne(T);if(T.depthTexture.format===Vr)Fe(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(T.depthTexture.format===rs)Fe(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Be(R){const T=i.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");rt(T.__webglFramebuffer,R)}else if(Z){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=t.createRenderbuffer(),xe(T.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),xe(T.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(R,T,Z){const ee=i.get(R);T!==void 0&&we(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&Be(R)}function wt(R){const T=R.texture,Z=i.get(R),ee=i.get(T);R.addEventListener("dispose",ne);const de=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ze=de.length>1,be=d(R)||a;if(ze||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=T.version,s.memory.textures++),ae){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ve=0;ve<T.mipmaps.length;ve++)Z.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else Z.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(ze)if(r.drawBuffers)for(let pe=0,ve=de.length;pe<ve;pe++){const Xe=i.get(de[pe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Fe(R)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ve=de[pe];Z.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Xe=o.convert(ve.format,ve.colorSpace),he=o.convert(ve.type),dt=I(ve.internalFormat,Xe,he,ve.colorSpace,R.isXRRenderTarget===!0),Ze=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,dt,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),j(t.TEXTURE_CUBE_MAP,T,be);for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)we(Z.__webglFramebuffer[pe][ve],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else we(Z.__webglFramebuffer[pe],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(T,be)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let pe=0,ve=de.length;pe<ve;pe++){const Xe=de[pe],he=i.get(Xe);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),j(t.TEXTURE_2D,Xe,be),we(Z.__webglFramebuffer,R,Xe,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),x(Xe,be)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ee.__webglTexture),j(pe,T,be),a&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)we(Z.__webglFramebuffer[ve],R,T,t.COLOR_ATTACHMENT0,pe,ve);else we(Z.__webglFramebuffer,R,T,t.COLOR_ATTACHMENT0,pe,0);x(T,be)&&A(pe),n.unbindTexture()}R.depthBuffer&&Be(R)}function Pe(R){const T=d(R)||a,Z=R.textures;for(let ee=0,de=Z.length;ee<de;ee++){const ae=Z[ee];if(x(ae,T)){const ze=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ae).__webglTexture;n.bindTexture(ze,be),A(ze),n.unbindTexture()}}}function He(R){if(a&&R.samples>0&&Fe(R)===!1){const T=R.textures,Z=R.width,ee=R.height;let de=t.COLOR_BUFFER_BIT;const ae=[],ze=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(R),pe=T.length>1;if(pe)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){ae.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&ae.push(ze);const Xe=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Xe===!1&&(R.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ze]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ze])),pe){const he=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,de,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const Xe=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(r.maxSamples,R.samples)}function Fe(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ge(R){const T=s.render.frame;p.get(R)!==T&&(p.set(R,T),R.update())}function Oe(R,T){const Z=R.colorSpace,ee=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===zd||Z!==Sr&&Z!==er&&(ft.getTransfer(Z)===yt?a===!1?e.has("EXT_sRGB")===!0&&ee===ni?(R.format=zd,R.minFilter=yn,R.generateMipmaps=!1):T=M_.sRGBToLinear(T):(ee!==ni||de!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=H,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe}function Ib(t,e,n){const i=n.isWebGL2;function r(o,s=er){let a;const l=ft.getTransfer(s);if(o===pr)return t.UNSIGNED_BYTE;if(o===g_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===v_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===KE)return t.BYTE;if(o===ZE)return t.SHORT;if(o===Gf)return t.UNSIGNED_SHORT;if(o===m_)return t.INT;if(o===ir)return t.UNSIGNED_INT;if(o===bi)return t.FLOAT;if(o===da)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===QE)return t.ALPHA;if(o===ni)return t.RGBA;if(o===JE)return t.LUMINANCE;if(o===eM)return t.LUMINANCE_ALPHA;if(o===Vr)return t.DEPTH_COMPONENT;if(o===rs)return t.DEPTH_STENCIL;if(o===zd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===tM)return t.RED;if(o===__)return t.RED_INTEGER;if(o===nM)return t.RG;if(o===y_)return t.RG_INTEGER;if(o===x_)return t.RGBA_INTEGER;if(o===cc||o===dc||o===fc||o===hc)if(l===yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Pm||o===Lm||o===Dm||o===Im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Pm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Lm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Dm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===w_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Um||o===Nm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Um)return l===yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Nm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Om||o===Fm||o===km||o===Bm||o===zm||o===Hm||o===Gm||o===Vm||o===Wm||o===Xm||o===jm||o===Ym||o===qm||o===$m)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Om)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Fm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===km)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Bm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===zm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Hm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Gm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Vm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Wm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Xm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===jm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ym)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===qm)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===$m)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===pc||o===Km||o===Zm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===pc)return l===yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Km)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Zm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===iM||o===Qm||o===Jm||o===eg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Qm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Jm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===eg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Gr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class Ub extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),v=.02,S=.005;c.inputState.pinching&&m>v+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=v-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new _r({extensions:{fragDepth:!0},vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new At(new Au(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Bb extends Jr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,v=null,S=null;const E=new kb,g=n.getContextAttributes();let d=null,w=null;const x=[],A=[],I=new Ye;let P=null;const C=new Bn;C.layers.enable(1),C.viewport=new Kt;const k=new Bn;k.layers.enable(2),k.viewport=new Kt;const ne=[C,k],M=new Ub;M.layers.enable(1),M.layers.enable(2);let D=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=x[j];return se===void 0&&(se=new Bc,x[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=x[j];return se===void 0&&(se=new Bc,x[j]=se),se.getGripSpace()},this.getHand=function(j){let se=x[j];return se===void 0&&(se=new Bc,x[j]=se),se.getHandSpace()};function le(j){const se=A.indexOf(j.inputSource);if(se===-1)return;const ye=x[se];ye!==void 0&&(ye.update(j.inputSource,j.frame,c||s),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",J);for(let j=0;j<x.length;j++){const se=A[j];se!==null&&(A[j]=null,x[j].disconnect(se))}D=null,ue=null,E.reset(),e.setRenderTarget(d),v=null,m=null,p=null,r=null,w=null,B.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",F),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new $r(v.framebufferWidth,v.framebufferHeight,{format:ni,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,ye=null,Ue=null;g.depth&&(Ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=g.stencil?rs:Vr,ye=g.stencil?Gr:ir);const we={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:o};p=new XRWebGLBinding(r,n),m=p.createProjectionLayer(we),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new $r(m.textureWidth,m.textureHeight,{format:ni,type:pr,depthTexture:new N_(m.textureWidth,m.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(w);xe.__ignoreDepthValues=m.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(j){for(let se=0;se<j.removed.length;se++){const ye=j.removed[se],Ue=A.indexOf(ye);Ue>=0&&(A[Ue]=null,x[Ue].disconnect(ye))}for(let se=0;se<j.added.length;se++){const ye=j.added[se];let Ue=A.indexOf(ye);if(Ue===-1){for(let xe=0;xe<x.length;xe++)if(xe>=A.length){A.push(ye),Ue=xe;break}else if(A[xe]===null){A[xe]=ye,Ue=xe;break}if(Ue===-1)break}const we=x[Ue];we&&we.connect(ye)}}const K=new V,ie=new V;function N(j,se,ye){K.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const Ue=K.distanceTo(ie),we=se.projectionMatrix.elements,xe=ye.projectionMatrix.elements,rt=we[14]/(we[10]-1),Be=we[14]/(we[10]+1),H=(we[9]+1)/we[5],wt=(we[9]-1)/we[5],Pe=(we[8]-1)/we[0],He=(xe[8]+1)/xe[0],Ne=rt*Pe,Fe=rt*He,Ge=Ue/(-Pe+He),Oe=Ge*-Pe;se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(Ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Ie=rt+Ge,R=Be+Ge,T=Ne-Oe,Z=Fe+(Ue-Oe),ee=H*Be/R*Ie,de=wt*Be/R*Ie;j.projectionMatrix.makePerspective(T,Z,ee,de,Ie,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function X(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.texture!==null&&(j.near=E.depthNear,j.far=E.depthFar),M.near=k.near=C.near=j.near,M.far=k.far=C.far=j.far,(D!==M.near||ue!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,ue=M.far,C.near=D,C.far=ue,k.near=D,k.far=ue,C.updateProjectionMatrix(),k.updateProjectionMatrix(),j.updateProjectionMatrix());const se=j.parent,ye=M.cameras;X(M,se);for(let Ue=0;Ue<ye.length;Ue++)X(ye[Ue],se);ye.length===2?N(M,C,k):M.projectionMatrix.copy(C.projectionMatrix),q(j,M,se)};function q(j,se,ye){ye===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&v===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null};let re=null;function ge(j,se){if(h=se.getViewerPose(c||s),S=se,h!==null){const ye=h.views;v!==null&&(e.setRenderTargetFramebuffer(w,v.framebuffer),e.setRenderTarget(w));let Ue=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,Ue=!0);for(let xe=0;xe<ye.length;xe++){const rt=ye[xe];let Be=null;if(v!==null)Be=v.getViewport(rt);else{const wt=p.getViewSubImage(m,rt);Be=wt.viewport,xe===0&&(e.setRenderTargetTextures(w,wt.colorTexture,m.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(w))}let H=ne[xe];H===void 0&&(H=new Bn,H.layers.enable(xe),H.viewport=new Kt,ne[xe]=H),H.matrix.fromArray(rt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(rt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Be.x,Be.y,Be.width,Be.height),xe===0&&(M.matrix.copy(H.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ue===!0&&M.cameras.push(H)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=p.getDepthInformation(ye[0]);xe&&xe.isValid&&xe.texture&&E.init(e,xe,r.renderState)}}for(let ye=0;ye<x.length;ye++){const Ue=A[ye],we=x[ye];Ue!==null&&we!==void 0&&we.update(Ue,se,c||s)}E.render(e,M),re&&re(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),S=null}const B=new U_;B.setAnimationLoop(ge),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const Pr=new Oi,zb=new zt;function Hb(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,P_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,w,x,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(g,d):d.isMeshToonMaterial?(o(g,d),p(g,d)):d.isMeshPhongMaterial?(o(g,d),h(g,d)):d.isMeshStandardMaterial?(o(g,d),m(g,d),d.isMeshPhysicalMaterial&&v(g,d,A)):d.isMeshMatcapMaterial?(o(g,d),S(g,d)):d.isMeshDepthMaterial?o(g,d):d.isMeshDistanceMaterial?(o(g,d),E(g,d)):d.isMeshNormalMaterial?o(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,w,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const w=e.get(d),x=w.envMap,A=w.envMapRotation;if(x&&(g.envMap.value=x,Pr.copy(A),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(Pr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const I=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*I,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,w,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*w,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function m(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function v(g,d,w){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const w=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gb(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,x){const A=x.program;i.uniformBlockBinding(w,A)}function c(w,x){let A=r[w.id];A===void 0&&(S(w),A=h(w),r[w.id]=A,w.addEventListener("dispose",g));const I=x.program;i.updateUBOMapping(w,I);const P=e.render.frame;o[w.id]!==P&&(m(w),o[w.id]=P)}function h(w){const x=p();w.__bindingPointIndex=x;const A=t.createBuffer(),I=w.__size,P=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,I,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,A),A}function p(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const x=r[w.id],A=w.uniforms,I=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,C=A.length;P<C;P++){const k=Array.isArray(A[P])?A[P]:[A[P]];for(let ne=0,M=k.length;ne<M;ne++){const D=k[ne];if(v(D,P,ne,I)===!0){const ue=D.__offset,le=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let J=0;J<le.length;J++){const K=le[J],ie=E(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,ue+F,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,F),F+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ue,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(w,x,A,I){const P=w.value,C=x+"_"+A;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const k=I[C];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return I[C]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function S(w){const x=w.uniforms;let A=0;const I=16;for(let C=0,k=x.length;C<k;C++){const ne=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,D=ne.length;M<D;M++){const ue=ne[M],le=Array.isArray(ue.value)?ue.value:[ue.value];for(let F=0,J=le.length;F<J;F++){const K=le[F],ie=E(K),N=A%I;N!==0&&I-N<ie.boundary&&(A+=I-N),ue.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=A,A+=ie.storage}}}const P=A%I;return P>0&&(A+=I-P),w.__size=A,w.__cache={},this}function E(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function g(w){const x=w.target;x.removeEventListener("dispose",g);const A=s.indexOf(x.__bindingPointIndex);s.splice(A,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function d(){for(const w in r)t.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:l,update:c,dispose:d}}class H_{constructor(e={}){const{canvas:n=PM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=s;const v=new Uint32Array(4),S=new Int32Array(4);let E=null,g=null;const d=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const x=this;let A=!1,I=0,P=0,C=null,k=-1,ne=null;const M=new Kt,D=new Kt;let ue=null;const le=new ht(0);let F=0,J=n.width,K=n.height,ie=1,N=null,X=null;const q=new Kt(0,0,J,K),re=new Kt(0,0,J,K);let ge=!1;const B=new I_;let j=!1,se=!1,ye=null;const Ue=new zt,we=new Ye,xe=new V,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return C===null?ie:1}let H=i;function wt(b,z){for(let Y=0;Y<b.length;Y++){const $=b[Y],W=n.getContext($,z);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",oe,!1),H===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),H=wt(z,b),H===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,He,Ne,Fe,Ge,Oe,Ie,R,T,Z,ee,de,ae,ze,be,pe,ve,Xe,he,dt,Ze,Ce,Me,Re;function L(){Pe=new qA(H),He=new HA(H,Pe,e),Pe.init(He),Ce=new Ib(H,Pe,He),Ne=new Lb(H,Pe,He),Fe=new ZA(H),Ge=new vb,Oe=new Db(H,Pe,Ne,Ge,He,Ce,Fe),Ie=new VA(x),R=new YA(x),T=new nT(H,He),Me=new BA(H,Pe,T,He),Z=new $A(H,T,Fe,Me),ee=new t2(H,Z,T,Fe),he=new e2(H,He,Oe),pe=new GA(Ge),de=new gb(x,Ie,R,Pe,He,Me,pe),ae=new Hb(x,Ge),ze=new yb,be=new Tb(Pe,He),Xe=new kA(x,Ie,R,Ne,ee,m,l),ve=new Pb(x,ee,He),Re=new Gb(H,Fe,He,Ne),dt=new zA(H,Pe,Fe,He),Ze=new KA(H,Pe,Fe,He),Fe.programs=de.programs,x.capabilities=He,x.extensions=Pe,x.properties=Ge,x.renderLists=ze,x.shadowMap=ve,x.state=Ne,x.info=Fe}L();const te=new Bb(x,H);this.xr=te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(J,K,!1))},this.getSize=function(b){return b.set(J,K)},this.setSize=function(b,z,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,K=z,n.width=Math.floor(b*ie),n.height=Math.floor(z*ie),Y===!0&&(n.style.width=b+"px",n.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(J*ie,K*ie).floor()},this.setDrawingBufferSize=function(b,z,Y){J=b,K=z,ie=Y,n.width=Math.floor(b*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,z,Y,$){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,z,Y,$),Ne.viewport(M.copy(q).multiplyScalar(ie).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,z,Y,$){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,z,Y,$),Ne.scissor(D.copy(re).multiplyScalar(ie).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){Ne.setScissorTest(ge=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(b=!0,z=!0,Y=!0){let $=0;if(b){let W=!1;if(C!==null){const Se=C.texture.format;W=Se===x_||Se===y_||Se===__}if(W){const Se=C.texture.type,Le=Se===pr||Se===ir||Se===Gf||Se===Gr||Se===g_||Se===v_,ke=Xe.getClearColor(),Ve=Xe.getClearAlpha(),Qe=ke.r,We=ke.g,Ke=ke.b;Le?(v[0]=Qe,v[1]=We,v[2]=Ke,v[3]=Ve,H.clearBufferuiv(H.COLOR,0,v)):(S[0]=Qe,S[1]=We,S[2]=Ke,S[3]=Ve,H.clearBufferiv(H.COLOR,0,S))}else $|=H.COLOR_BUFFER_BIT}z&&($|=H.DEPTH_BUFFER_BIT),Y&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),ze.dispose(),be.dispose(),Ge.dispose(),Ie.dispose(),R.dispose(),ee.dispose(),Me.dispose(),Re.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",De),te.removeEventListener("sessionend",$e),ye&&(ye.dispose(),ye=null),ot.stop()};function Te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=Fe.autoReset,z=ve.enabled,Y=ve.autoUpdate,$=ve.needsUpdate,W=ve.type;L(),Fe.autoReset=b,ve.enabled=z,ve.autoUpdate=Y,ve.needsUpdate=$,ve.type=W}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function G(b){const z=b.target;z.removeEventListener("dispose",G),ce(z)}function ce(b){me(b),Ge.remove(b)}function me(b){const z=Ge.get(b).programs;z!==void 0&&(z.forEach(function(Y){de.releaseProgram(Y)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Y,$,W,Se){z===null&&(z=rt);const Le=W.isMesh&&W.matrixWorld.determinant()<0,ke=Ma(b,z,Y,$,W);Ne.setMaterial($,Le);let Ve=Y.index,Qe=1;if($.wireframe===!0){if(Ve=Z.getWireframeAttribute(Y),Ve===void 0)return;Qe=2}const We=Y.drawRange,Ke=Y.attributes.position;let Mt=We.start*Qe,It=(We.start+We.count)*Qe;Se!==null&&(Mt=Math.max(Mt,Se.start*Qe),It=Math.min(It,(Se.start+Se.count)*Qe)),Ve!==null?(Mt=Math.max(Mt,0),It=Math.min(It,Ve.count)):Ke!=null&&(Mt=Math.max(Mt,0),It=Math.min(It,Ke.count));const Ft=It-Mt;if(Ft<0||Ft===1/0)return;Me.setup(W,$,ke,Y,Ve);let Xn,vt=dt;if(Ve!==null&&(Xn=T.get(Ve),vt=Ze,vt.setIndex(Xn)),W.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*Be()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(W.isLine){let je=$.linewidth;je===void 0&&(je=1),Ne.setLineWidth(je*Be()),W.isLineSegments?vt.setMode(H.LINES):W.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else W.isPoints?vt.setMode(H.POINTS):W.isSprite&&vt.setMode(H.TRIANGLES);if(W.isBatchedMesh)vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)vt.renderInstances(Mt,Ft,W.count);else if(Y.isInstancedBufferGeometry){const je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ps=Math.min(Y.instanceCount,je);vt.renderInstances(Mt,Ft,ps)}else vt.render(Mt,Ft)};function qe(b,z,Y){b.transparent===!0&&b.side===ei&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,si(b,z,Y),b.side=vr,b.needsUpdate=!0,si(b,z,Y),b.side=ei):si(b,z,Y)}this.compile=function(b,z,Y=null){Y===null&&(Y=b),g=be.get(Y),g.init(),w.push(g),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(x._useLegacyLights);const $=new Set;return b.traverse(function(W){const Se=W.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const ke=Se[Le];qe(ke,Y,W),$.add(ke)}else qe(Se,Y,W),$.add(Se)}),w.pop(),g=null,$},this.compileAsync=function(b,z,Y=null){const $=this.compile(b,z,Y);return new Promise(W=>{function Se(){if($.forEach(function(Le){Ge.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){W(b);return}setTimeout(Se,10)}Pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let at=null;function lt(b){at&&at(b)}function De(){ot.stop()}function $e(){ot.start()}const ot=new U_;ot.setAnimationLoop(lt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(b){at=b,te.setAnimationLoop(b),b===null?ot.stop():ot.start()},te.addEventListener("sessionstart",De),te.addEventListener("sessionend",$e),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,z,C),g=be.get(b,w.length),g.init(),w.push(g),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B.setFromProjectionMatrix(Ue),se=this.localClippingEnabled,j=pe.init(this.clippingPlanes,se),E=ze.get(b,d.length),E.init(),d.push(E),St(b,z,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(N,X),this.info.render.frame++,j===!0&&pe.beginShadows();const Y=g.state.shadowsArray;if(ve.render(Y,b,z),j===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1)&&Xe.render(E,b),g.setupLights(x._useLegacyLights),z.isArrayCamera){const $=z.cameras;for(let W=0,Se=$.length;W<Se;W++){const Le=$[W];pt(E,b,Le,Le.viewport)}}else pt(E,b,z);C!==null&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,z),Me.resetDefaultState(),k=-1,ne=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function St(b,z,Y,$){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){$&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ue);const Le=ee.update(b),ke=b.material;ke.visible&&E.push(b,Le,ke,Y,xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){const Le=ee.update(b),ke=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xe.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),xe.copy(Le.boundingSphere.center)),xe.applyMatrix4(b.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){const Ve=Le.groups;for(let Qe=0,We=Ve.length;Qe<We;Qe++){const Ke=Ve[Qe],Mt=ke[Ke.materialIndex];Mt&&Mt.visible&&E.push(b,Le,Mt,Y,xe.z,Ke)}}else ke.visible&&E.push(b,Le,ke,Y,xe.z,null)}}const Se=b.children;for(let Le=0,ke=Se.length;Le<ke;Le++)St(Se[Le],z,Y,$)}function pt(b,z,Y,$){const W=b.opaque,Se=b.transmissive,Le=b.transparent;g.setupLightsView(Y),j===!0&&pe.setGlobalState(x.clippingPlanes,Y),Se.length>0&&Dt(W,Se,z,Y),$&&Ne.viewport(M.copy($)),W.length>0&&Bi(W,z,Y),Se.length>0&&Bi(Se,z,Y),Le.length>0&&Bi(Le,z,Y),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Dt(b,z,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const Se=He.isWebGL2;ye===null&&(ye=new $r(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?da:pr,minFilter:Br,samples:Se?4:0})),x.getDrawingBufferSize(we),Se?ye.setSize(we.x,we.y):ye.setSize(su(we.x),su(we.y));const Le=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(le),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const ke=x.toneMapping;x.toneMapping=hr,Bi(b,Y,$),Oe.updateMultisampleRenderTarget(ye),Oe.updateRenderTargetMipmap(ye);let Ve=!1;for(let Qe=0,We=z.length;Qe<We;Qe++){const Ke=z[Qe],Mt=Ke.object,It=Ke.geometry,Ft=Ke.material,Xn=Ke.group;if(Ft.side===ei&&Mt.layers.test($.layers)){const vt=Ft.side;Ft.side=pn,Ft.needsUpdate=!0,fs(Mt,Y,$,It,Ft,Xn),Ft.side=vt,Ft.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(ye),Oe.updateRenderTargetMipmap(ye)),x.setRenderTarget(Le),x.setClearColor(le,F),x.toneMapping=ke}function Bi(b,z,Y){const $=z.isScene===!0?z.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const Le=b[W],ke=Le.object,Ve=Le.geometry,Qe=$===null?Le.material:$,We=Le.group;ke.layers.test(Y.layers)&&fs(ke,z,Y,Ve,Qe,We)}}function fs(b,z,Y,$,W,Se){b.onBeforeRender(x,z,Y,$,W,Se),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(x,z,Y,$,b,Se),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,x.renderBufferDirect(Y,z,$,W,b,Se),W.side=vr,W.needsUpdate=!0,x.renderBufferDirect(Y,z,$,W,b,Se),W.side=ei):x.renderBufferDirect(Y,z,$,W,b,Se),b.onAfterRender(x,z,Y,$,W,Se)}function si(b,z,Y){z.isScene!==!0&&(z=rt);const $=Ge.get(b),W=g.state.lights,Se=g.state.shadowsArray,Le=W.state.version,ke=de.getParameters(b,W.state,Se,z,Y),Ve=de.getProgramCacheKey(ke);let Qe=$.programs;$.environment=b.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(b.isMeshStandardMaterial?R:Ie).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",G),Qe=new Map,$.programs=Qe);let We=Qe.get(Ve);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Le)return Ea(b,ke),We}else ke.uniforms=de.getUniforms(b),b.onBuild(Y,ke,x),b.onBeforeCompile(ke,x),We=de.acquireProgram(ke,Ve),Qe.set(Ve,We),$.uniforms=ke.uniforms;const Ke=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=pe.uniform),Ea(b,ke),$.needsLights=hs(b),$.lightsStateVersion=Le,$.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function Jt(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Pl.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Ea(b,z){const Y=Ge.get(b);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Ma(b,z,Y,$,W){z.isScene!==!0&&(z=rt),Oe.resetTextureUnits();const Se=z.fog,Le=$.isMeshStandardMaterial?z.environment:null,ke=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sr,Ve=($.isMeshStandardMaterial?R:Ie).get($.envMap||Le),Qe=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!Y.morphAttributes.position,Mt=!!Y.morphAttributes.normal,It=!!Y.morphAttributes.color;let Ft=hr;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Xn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=Xn!==void 0?Xn.length:0,je=Ge.get($),ps=g.state.lights;if(j===!0&&(se===!0||b!==ne)){const _n=b===ne&&$.id===k;pe.setState($,b,_n)}let mt=!1;$.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ps.state.version||je.outputColorSpace!==ke||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&je.instancingMorph===!1&&W.morphTexture!==null||je.envMap!==Ve||$.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==pe.numPlanes||je.numIntersection!==pe.numIntersection)||je.vertexAlphas!==Qe||je.vertexTangents!==We||je.morphTargets!==Ke||je.morphNormals!==Mt||je.morphColors!==It||je.toneMapping!==Ft||He.isWebGL2===!0&&je.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,je.__version=$.version);let vi=je.currentProgram;mt===!0&&(vi=si($,z,W));let Aa=!1,Er=!1,ut=!1;const Xt=vi.getUniforms(),_i=je.uniforms;if(Ne.useProgram(vi.program)&&(Aa=!0,Er=!0,ut=!0),$.id!==k&&(k=$.id,Er=!0),Aa||ne!==b){Xt.setValue(H,"projectionMatrix",b.projectionMatrix),Xt.setValue(H,"viewMatrix",b.matrixWorldInverse);const _n=Xt.map.cameraPosition;_n!==void 0&&_n.setValue(H,xe.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Xt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Xt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,Er=!0,ut=!0)}if(W.isSkinnedMesh){Xt.setOptional(H,W,"bindMatrix"),Xt.setOptional(H,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(He.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Xt.setValue(H,"boneTexture",_n.boneTexture,Oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Xt.setOptional(H,W,"batchingTexture"),Xt.setValue(H,"batchingTexture",W._matricesTexture,Oe));const ms=Y.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&He.isWebGL2===!0)&&he.update(W,Y,vi),(Er||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,Xt.setValue(H,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_i.envMap.value=Ve,_i.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Er&&(Xt.setValue(H,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Ta(_i,ut),Se&&$.fog===!0&&ae.refreshFogUniforms(_i,Se),ae.refreshMaterialUniforms(_i,$,ie,K,ye),Pl.upload(H,Jt(je),_i,Oe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pl.upload(H,Jt(je),_i,Oe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Xt.setValue(H,"center",W.center),Xt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Xt.setValue(H,"normalMatrix",W.normalMatrix),Xt.setValue(H,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const _n=$.uniformsGroups;for(let gs=0,Lu=_n.length;gs<Lu;gs++)if(He.isWebGL2){const eo=_n[gs];Re.update(eo,vi),Re.bind(eo,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ta(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function hs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,z,Y){Ge.get(b.texture).__webglTexture=z,Ge.get(b.depthTexture).__webglTexture=Y;const $=Ge.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const Y=Ge.get(b);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Y=0){C=b,I=z,P=Y;let $=!0,W=null,Se=!1,Le=!1;if(b){const Ve=Ge.get(b);Ve.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(H.FRAMEBUFFER,null),$=!1):Ve.__webglFramebuffer===void 0?Oe.setupRenderTarget(b):Ve.__hasExternalTextures&&Oe.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Le=!0);const We=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[z])?W=We[z][Y]:W=We[z],Se=!0):He.isWebGL2&&b.samples>0&&Oe.useMultisampledRTT(b)===!1?W=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[Y]:W=We,M.copy(b.viewport),D.copy(b.scissor),ue=b.scissorTest}else M.copy(q).multiplyScalar(ie).floor(),D.copy(re).multiplyScalar(ie).floor(),ue=ge;if(Ne.bindFramebuffer(H.FRAMEBUFFER,W)&&He.drawBuffers&&$&&Ne.drawBuffers(b,W),Ne.viewport(M),Ne.scissor(D),Ne.setScissorTest(ue),Se){const Ve=Ge.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,Y)}else if(Le){const Ve=Ge.get(b.texture),Qe=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,Y||0,Qe)}k=-1},this.readRenderTargetPixels=function(b,z,Y,$,W,Se,Le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ne.bindFramebuffer(H.FRAMEBUFFER,ke);try{const Ve=b.texture,Qe=Ve.format,We=Ve.type;if(Qe!==ni&&Ce.convert(Qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=We===da&&(Pe.has("EXT_color_buffer_half_float")||He.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(We!==pr&&Ce.convert(We)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===bi&&(He.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-$&&Y>=0&&Y<=b.height-W&&H.readPixels(z,Y,$,W,Ce.convert(Qe),Ce.convert(We),Se)}finally{const Ve=C!==null?Ge.get(C).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(b,z,Y=0){const $=Math.pow(2,-Y),W=Math.floor(z.image.width*$),Se=Math.floor(z.image.height*$);Oe.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,b.x,b.y,W,Se),Ne.unbindTexture()},this.copyTextureToTexture=function(b,z,Y,$=0){const W=z.image.width,Se=z.image.height,Le=Ce.convert(Y.format),ke=Ce.convert(Y.type);Oe.setTexture2D(Y,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,b.x,b.y,W,Se,Le,ke,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Le,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,$,b.x,b.y,Le,ke,z.image),$===0&&Y.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Y,$,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(b.max.x-b.min.x),Le=Math.round(b.max.y-b.min.y),ke=b.max.z-b.min.z+1,Ve=Ce.convert($.format),Qe=Ce.convert($.type);let We;if($.isData3DTexture)Oe.setTexture3D($,0),We=H.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Oe.setTexture2DArray($,0),We=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),It=H.getParameter(H.UNPACK_SKIP_PIXELS),Ft=H.getParameter(H.UNPACK_SKIP_ROWS),Xn=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(We,W,z.x,z.y,z.z,Se,Le,ke,Ve,Qe,vt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(We,W,z.x,z.y,z.z,Se,Le,ke,Ve,vt.data):H.texSubImage3D(We,W,z.x,z.y,z.z,Se,Le,ke,Ve,Qe,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,It),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ft),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xn),W===0&&$.generateMipmaps&&H.generateMipmap(We),Ne.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),Ne.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,Ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===Mu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vb extends H_{}Vb.prototype.isWebGL1Renderer=!0;class Wb extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cu extends ki{constructor(e=.5,n=1,i=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const m=(n-e)/r,v=new V,S=new Ye;for(let E=0;E<=r;E++){for(let g=0;g<=i;g++){const d=o+g/i*s;v.x=p*Math.cos(d),v.y=p*Math.sin(d),l.push(v.x,v.y,v.z),c.push(0,0,1),S.x=(v.x/n+1)/2,S.y=(v.y/n+1)/2,h.push(S.x,S.y)}p+=m}for(let E=0;E<r;E++){const g=E*(i+1);for(let d=0;d<i;d++){const w=d+g,x=w,A=w+i+1,I=w+i+2,P=w+1;a.push(x,A,P),a.push(A,I,P)}}this.setIndex(a),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(c,3)),this.setAttribute("uv",new Ln(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nn extends ki{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const h=[],p=new V,m=new V,v=[],S=[],E=[],g=[];for(let d=0;d<=i;d++){const w=[],x=d/i;let A=0;d===0&&s===0?A=.5/n:d===i&&l===Math.PI&&(A=-.5/n);for(let I=0;I<=n;I++){const P=I/n;p.x=-e*Math.cos(r+P*o)*Math.sin(s+x*a),p.y=e*Math.cos(s+x*a),p.z=e*Math.sin(r+P*o)*Math.sin(s+x*a),S.push(p.x,p.y,p.z),m.copy(p).normalize(),E.push(m.x,m.y,m.z),g.push(P+A,1-x),w.push(c++)}h.push(w)}for(let d=0;d<i;d++)for(let w=0;w<n;w++){const x=h[d][w+1],A=h[d][w],I=h[d+1][w],P=h[d+1][w+1];(d!==0||s>0)&&v.push(x,A,P),(d!==i-1||l<Math.PI)&&v.push(A,I,P)}this.setIndex(v),this.setAttribute("position",new Ln(S,3)),this.setAttribute("normal",new Ln(E,3)),this.setAttribute("uv",new Ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Xg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Xb{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=c.length;p<m;p+=2){const v=c[p],S=c[p+1];if(v.global&&(v.lastIndex=0),v.test(h))return S}return null}}}const jb=new Xb;class $f{constructor(e){this.manager=e!==void 0?e:jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$f.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yb extends $f{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Xg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ha("img");function l(){h(),Xg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(p){h(),r&&r(p),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class qb extends $f{constructor(e){super(e)}load(e,n,i,r){const o=new mn,s=new Yb(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}const jg=new zt;class $b{constructor(e,n,i=0,r=1/0){this.ray=new jf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jg),this}intersectObject(e,n=!0,i=[]){return Vd(e,this,i,n),i.sort(Yg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Vd(e[r],this,i,n);return i.sort(Yg),i}}function Yg(t,e){return t.distance-e.distance}function Vd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Vd(r[o],e,n,!0)}}class qg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);const $g={type:"change"},zc={type:"start"},Kg={type:"end"},vl=new jf,Zg=new Zi,Kb=Math.cos(70*RM.DEG2RAD);class Zb extends Jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",be),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($g),i.update(),o=r.NONE},this.update=function(){const L=new V,te=new Kr().setFromUnitVectors(e.up,new V(0,1,0)),Te=te.clone().invert(),O=new V,oe=new Kr,G=new V,ce=2*Math.PI;return function(qe=null){const at=i.object.position;L.copy(at).sub(i.target),L.applyQuaternion(te),a.setFromVector3(L),i.autoRotate&&o===r.NONE&&ue(M(qe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let lt=i.minAzimuthAngle,De=i.maxAzimuthAngle;isFinite(lt)&&isFinite(De)&&(lt<-Math.PI?lt+=ce:lt>Math.PI&&(lt-=ce),De<-Math.PI?De+=ce:De>Math.PI&&(De-=ce),lt<=De?a.theta=Math.max(lt,Math.min(De,a.theta)):a.theta=a.theta>(lt+De)/2?Math.max(lt,a.theta):Math.min(De,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let $e=!1;if(i.zoomToCursor&&P||i.object.isOrthographicCamera)a.radius=q(a.radius);else{const ot=a.radius;a.radius=q(a.radius*c),$e=ot!=a.radius}if(L.setFromSpherical(a),L.applyQuaternion(Te),at.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&P){let ot=null;if(i.object.isPerspectiveCamera){const St=L.length();ot=q(St*c);const pt=St-ot;i.object.position.addScaledVector(A,pt),i.object.updateMatrixWorld(),$e=!!pt}else if(i.object.isOrthographicCamera){const St=new V(I.x,I.y,0);St.unproject(i.object);const pt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$e=pt!==i.object.zoom;const Dt=new V(I.x,I.y,0);Dt.unproject(i.object),i.object.position.sub(Dt).add(St),i.object.updateMatrixWorld(),ot=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ot).add(i.object.position):(vl.origin.copy(i.object.position),vl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(vl.direction))<Kb?e.lookAt(i.target):(Zg.setFromNormalAndCoplanarPoint(i.object.up,i.target),vl.intersectPlane(Zg,i.target))))}else if(i.object.isOrthographicCamera){const ot=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ot!==i.object.zoom&&(i.object.updateProjectionMatrix(),$e=!0)}return c=1,P=!1,$e||O.distanceToSquared(i.object.position)>s||8*(1-oe.dot(i.object.quaternion))>s||G.distanceToSquared(i.target)>s?(i.dispatchEvent($g),O.copy(i.object.position),oe.copy(i.object.quaternion),G.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Xe),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",R),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",R),i.domElement.getRootNode().removeEventListener("keydown",ae,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new qg,l=new qg;let c=1;const h=new V,p=new Ye,m=new Ye,v=new Ye,S=new Ye,E=new Ye,g=new Ye,d=new Ye,w=new Ye,x=new Ye,A=new V,I=new Ye;let P=!1;const C=[],k={};let ne=!1;function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function D(L){const te=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*te)}function ue(L){l.theta-=L}function le(L){l.phi-=L}const F=function(){const L=new V;return function(Te,O){L.setFromMatrixColumn(O,0),L.multiplyScalar(-Te),h.add(L)}}(),J=function(){const L=new V;return function(Te,O){i.screenSpacePanning===!0?L.setFromMatrixColumn(O,1):(L.setFromMatrixColumn(O,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Te),h.add(L)}}(),K=function(){const L=new V;return function(Te,O){const oe=i.domElement;if(i.object.isPerspectiveCamera){const G=i.object.position;L.copy(G).sub(i.target);let ce=L.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),F(2*Te*ce/oe.clientHeight,i.object.matrix),J(2*O*ce/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(Te*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),J(O*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(L,te){if(!i.zoomToCursor)return;P=!0;const Te=i.domElement.getBoundingClientRect(),O=L-Te.left,oe=te-Te.top,G=Te.width,ce=Te.height;I.x=O/G*2-1,I.y=-(oe/ce)*2+1,A.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function re(L){p.set(L.clientX,L.clientY)}function ge(L){X(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function B(L){S.set(L.clientX,L.clientY)}function j(L){m.set(L.clientX,L.clientY),v.subVectors(m,p).multiplyScalar(i.rotateSpeed);const te=i.domElement;ue(2*Math.PI*v.x/te.clientHeight),le(2*Math.PI*v.y/te.clientHeight),p.copy(m),i.update()}function se(L){w.set(L.clientX,L.clientY),x.subVectors(w,d),x.y>0?ie(D(x.y)):x.y<0&&N(D(x.y)),d.copy(w),i.update()}function ye(L){E.set(L.clientX,L.clientY),g.subVectors(E,S).multiplyScalar(i.panSpeed),K(g.x,g.y),S.copy(E),i.update()}function Ue(L){X(L.clientX,L.clientY),L.deltaY<0?N(D(L.deltaY)):L.deltaY>0&&ie(D(L.deltaY)),i.update()}function we(L){let te=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ue(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ue(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),te=!0;break}te&&(L.preventDefault(),i.update())}function xe(L){if(C.length===1)p.set(L.pageX,L.pageY);else{const te=Me(L),Te=.5*(L.pageX+te.x),O=.5*(L.pageY+te.y);p.set(Te,O)}}function rt(L){if(C.length===1)S.set(L.pageX,L.pageY);else{const te=Me(L),Te=.5*(L.pageX+te.x),O=.5*(L.pageY+te.y);S.set(Te,O)}}function Be(L){const te=Me(L),Te=L.pageX-te.x,O=L.pageY-te.y,oe=Math.sqrt(Te*Te+O*O);d.set(0,oe)}function H(L){i.enableZoom&&Be(L),i.enablePan&&rt(L)}function wt(L){i.enableZoom&&Be(L),i.enableRotate&&xe(L)}function Pe(L){if(C.length==1)m.set(L.pageX,L.pageY);else{const Te=Me(L),O=.5*(L.pageX+Te.x),oe=.5*(L.pageY+Te.y);m.set(O,oe)}v.subVectors(m,p).multiplyScalar(i.rotateSpeed);const te=i.domElement;ue(2*Math.PI*v.x/te.clientHeight),le(2*Math.PI*v.y/te.clientHeight),p.copy(m)}function He(L){if(C.length===1)E.set(L.pageX,L.pageY);else{const te=Me(L),Te=.5*(L.pageX+te.x),O=.5*(L.pageY+te.y);E.set(Te,O)}g.subVectors(E,S).multiplyScalar(i.panSpeed),K(g.x,g.y),S.copy(E)}function Ne(L){const te=Me(L),Te=L.pageX-te.x,O=L.pageY-te.y,oe=Math.sqrt(Te*Te+O*O);w.set(0,oe),x.set(0,Math.pow(w.y/d.y,i.zoomSpeed)),ie(x.y),d.copy(w);const G=(L.pageX+te.x)*.5,ce=(L.pageY+te.y)*.5;X(G,ce)}function Fe(L){i.enableZoom&&Ne(L),i.enablePan&&He(L)}function Ge(L){i.enableZoom&&Ne(L),i.enableRotate&&Pe(L)}function Oe(L){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",R)),!Ze(L)&&(he(L),L.pointerType==="touch"?pe(L):T(L)))}function Ie(L){i.enabled!==!1&&(L.pointerType==="touch"?ve(L):Z(L))}function R(L){switch(dt(L),C.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",R),i.dispatchEvent(Kg),o=r.NONE;break;case 1:const te=C[0],Te=k[te];pe({pointerId:te,pageX:Te.x,pageY:Te.y});break}}function T(L){let te;switch(L.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ao.DOLLY:if(i.enableZoom===!1)return;ge(L),o=r.DOLLY;break;case ao.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;B(L),o=r.PAN}else{if(i.enableRotate===!1)return;re(L),o=r.ROTATE}break;case ao.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;re(L),o=r.ROTATE}else{if(i.enablePan===!1)return;B(L),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(zc)}function Z(L){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;j(L);break;case r.DOLLY:if(i.enableZoom===!1)return;se(L);break;case r.PAN:if(i.enablePan===!1)return;ye(L);break}}function ee(L){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(L.preventDefault(),i.dispatchEvent(zc),Ue(de(L)),i.dispatchEvent(Kg))}function de(L){const te=L.deltaMode,Te={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(te){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return L.ctrlKey&&!ne&&(Te.deltaY*=10),Te}function ae(L){L.key==="Control"&&(ne=!0,i.domElement.getRootNode().addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(L){L.key==="Control"&&(ne=!1,i.domElement.getRootNode().removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function be(L){i.enabled===!1||i.enablePan===!1||we(L)}function pe(L){switch(Ce(L),C.length){case 1:switch(i.touches.ONE){case lo.ROTATE:if(i.enableRotate===!1)return;xe(L),o=r.TOUCH_ROTATE;break;case lo.PAN:if(i.enablePan===!1)return;rt(L),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case lo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(L),o=r.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;wt(L),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(zc)}function ve(L){switch(Ce(L),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pe(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;He(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(L),i.update();break;default:o=r.NONE}}function Xe(L){i.enabled!==!1&&L.preventDefault()}function he(L){C.push(L.pointerId)}function dt(L){delete k[L.pointerId];for(let te=0;te<C.length;te++)if(C[te]==L.pointerId){C.splice(te,1);return}}function Ze(L){for(let te=0;te<C.length;te++)if(C[te]==L.pointerId)return!0;return!1}function Ce(L){let te=k[L.pointerId];te===void 0&&(te=new Ye,k[L.pointerId]=te),te.set(L.pageX,L.pageY)}function Me(L){const te=L.pointerId===C[0]?C[1]:C[0];return k[te]}i.domElement.addEventListener("contextmenu",Xe),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",R),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}}var G_={exports:{}};/*!
* sweetalert2 v11.10.7
* Released under the MIT License.
*/(function(t,e){(function(n,i){t.exports=i()})(Hi,function(){function n(y,u,f){if(typeof y=="function"?y===u:y.has(u))return arguments.length<3?u:f;throw new TypeError("Private element is not present on this object")}function i(y,u,f){return u=g(u),x(y,a()?Reflect.construct(u,f||[],g(y).constructor):u.apply(y,f))}function r(y,u){return y.get(n(y,u))}function o(y,u,f){return y.set(n(y,u),f),f}function s(y,u,f){if(a())return Reflect.construct.apply(null,arguments);var _=[null];_.push.apply(_,u);var U=new(y.bind.apply(y,_));return f&&d(U,f.prototype),U}function a(){try{var y=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(a=function(){return!!y})()}function l(y,u){var f=y==null?null:typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"];if(f!=null){var _,U,Q,Ee,tt=[],nt=!0,Pt=!1;try{if(Q=(f=f.call(y)).next,u===0){if(Object(f)!==f)return;nt=!1}else for(;!(nt=(_=Q.call(f)).done)&&(tt.push(_.value),tt.length!==u);nt=!0);}catch(ys){Pt=!0,U=ys}finally{try{if(!nt&&f.return!=null&&(Ee=f.return(),Object(Ee)!==Ee))return}finally{if(Pt)throw U}}return tt}}function c(y,u){if(typeof y!="object"||!y)return y;var f=y[Symbol.toPrimitive];if(f!==void 0){var _=f.call(y,u||"default");if(typeof _!="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(y)}function h(y){var u=c(y,"string");return typeof u=="symbol"?u:String(u)}function p(y){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},p(y)}function m(y,u){if(!(y instanceof u))throw new TypeError("Cannot call a class as a function")}function v(y,u){for(var f=0;f<u.length;f++){var _=u[f];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,h(_.key),_)}}function S(y,u,f){return u&&v(y.prototype,u),f&&v(y,f),Object.defineProperty(y,"prototype",{writable:!1}),y}function E(y,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(u&&u.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),u&&d(y,u)}function g(y){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},g(y)}function d(y,u){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,U){return _.__proto__=U,_},d(y,u)}function w(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function x(y,u){if(u&&(typeof u=="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return w(y)}function A(y,u){for(;!Object.prototype.hasOwnProperty.call(y,u)&&(y=g(y),y!==null););return y}function I(){return typeof Reflect<"u"&&Reflect.get?I=Reflect.get.bind():I=function(u,f,_){var U=A(u,f);if(U){var Q=Object.getOwnPropertyDescriptor(U,f);return Q.get?Q.get.call(arguments.length<3?u:_):Q.value}},I.apply(this,arguments)}function P(y,u){return ne(y)||l(y,u)||D(y,u)||F()}function C(y){return k(y)||M(y)||D(y)||le()}function k(y){if(Array.isArray(y))return ue(y)}function ne(y){if(Array.isArray(y))return y}function M(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}function D(y,u){if(y){if(typeof y=="string")return ue(y,u);var f=Object.prototype.toString.call(y).slice(8,-1);if(f==="Object"&&y.constructor&&(f=y.constructor.name),f==="Map"||f==="Set")return Array.from(y);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return ue(y,u)}}function ue(y,u){(u==null||u>y.length)&&(u=y.length);for(var f=0,_=new Array(u);f<u;f++)_[f]=y[f];return _}function le(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(y,u){if(u.has(y))throw new TypeError("Cannot initialize the same private elements twice on an object")}function K(y,u,f){J(y,u),u.set(y,f)}var ie=100,N={},X=function(){N.previousActiveElement instanceof HTMLElement?(N.previousActiveElement.focus(),N.previousActiveElement=null):document.body&&document.body.focus()},q=function(u){return new Promise(function(f){if(!u)return f();var _=window.scrollX,U=window.scrollY;N.restoreFocusTimeout=setTimeout(function(){X(),f()},ie),window.scrollTo(_,U)})},re="swal2-",ge=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],B=ge.reduce(function(y,u){return y[u]=re+u,y},{}),j=["success","warning","info","question","error"],se=j.reduce(function(y,u){return y[u]=re+u,y},{}),ye="SweetAlert2:",Ue=function(u){return u.charAt(0).toUpperCase()+u.slice(1)},we=function(u){console.warn("".concat(ye," ").concat(p(u)==="object"?u.join(" "):u))},xe=function(u){console.error("".concat(ye," ").concat(u))},rt=[],Be=function(u){rt.includes(u)||(rt.push(u),we(u))},H=function(u,f){Be('"'.concat(u,'" is deprecated and will be removed in the next major release. Please use "').concat(f,'" instead.'))},wt=function(u){return typeof u=="function"?u():u},Pe=function(u){return u&&typeof u.toPromise=="function"},He=function(u){return Pe(u)?u.toPromise():Promise.resolve(u)},Ne=function(u){return u&&Promise.resolve(u)===u},Fe=function(){return document.body.querySelector(".".concat(B.container))},Ge=function(u){var f=Fe();return f?f.querySelector(u):null},Oe=function(u){return Ge(".".concat(u))},Ie=function(){return Oe(B.popup)},R=function(){return Oe(B.icon)},T=function(){return Oe(B["icon-content"])},Z=function(){return Oe(B.title)},ee=function(){return Oe(B["html-container"])},de=function(){return Oe(B.image)},ae=function(){return Oe(B["progress-steps"])},ze=function(){return Oe(B["validation-message"])},be=function(){return Ge(".".concat(B.actions," .").concat(B.confirm))},pe=function(){return Ge(".".concat(B.actions," .").concat(B.cancel))},ve=function(){return Ge(".".concat(B.actions," .").concat(B.deny))},Xe=function(){return Oe(B["input-label"])},he=function(){return Ge(".".concat(B.loader))},dt=function(){return Oe(B.actions)},Ze=function(){return Oe(B.footer)},Ce=function(){return Oe(B["timer-progress-bar"])},Me=function(){return Oe(B.close)},Re=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,L=function(){var u=Ie();if(!u)return[];var f=u.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),_=Array.from(f).sort(function(Ee,tt){var nt=parseInt(Ee.getAttribute("tabindex")||"0"),Pt=parseInt(tt.getAttribute("tabindex")||"0");return nt>Pt?1:nt<Pt?-1:0}),U=u.querySelectorAll(Re),Q=Array.from(U).filter(function(Ee){return Ee.getAttribute("tabindex")!=="-1"});return C(new Set(_.concat(Q))).filter(function(Ee){return Jt(Ee)})},te=function(){return G(document.body,B.shown)&&!G(document.body,B["toast-shown"])&&!G(document.body,B["no-backdrop"])},Te=function(){var u=Ie();return u?G(u,B.toast):!1},O=function(){var u=Ie();return u?u.hasAttribute("data-loading"):!1},oe=function(u,f){if(u.textContent="",f){var _=new DOMParser,U=_.parseFromString(f,"text/html"),Q=U.querySelector("head");Q&&Array.from(Q.childNodes).forEach(function(tt){u.appendChild(tt)});var Ee=U.querySelector("body");Ee&&Array.from(Ee.childNodes).forEach(function(tt){tt instanceof HTMLVideoElement||tt instanceof HTMLAudioElement?u.appendChild(tt.cloneNode(!0)):u.appendChild(tt)})}},G=function(u,f){if(!f)return!1;for(var _=f.split(/\s+/),U=0;U<_.length;U++)if(!u.classList.contains(_[U]))return!1;return!0},ce=function(u,f){Array.from(u.classList).forEach(function(_){!Object.values(B).includes(_)&&!Object.values(se).includes(_)&&!Object.values(f.showClass||{}).includes(_)&&u.classList.remove(_)})},me=function(u,f,_){if(ce(u,f),f.customClass&&f.customClass[_]){if(typeof f.customClass[_]!="string"&&!f.customClass[_].forEach){we("Invalid type of customClass.".concat(_,'! Expected string or iterable object, got "').concat(p(f.customClass[_]),'"'));return}De(u,f.customClass[_])}},qe=function(u,f){if(!f)return null;switch(f){case"select":case"textarea":case"file":return u.querySelector(".".concat(B.popup," > .").concat(B[f]));case"checkbox":return u.querySelector(".".concat(B.popup," > .").concat(B.checkbox," input"));case"radio":return u.querySelector(".".concat(B.popup," > .").concat(B.radio," input:checked"))||u.querySelector(".".concat(B.popup," > .").concat(B.radio," input:first-child"));case"range":return u.querySelector(".".concat(B.popup," > .").concat(B.range," input"));default:return u.querySelector(".".concat(B.popup," > .").concat(B.input))}},at=function(u){if(u.focus(),u.type!=="file"){var f=u.value;u.value="",u.value=f}},lt=function(u,f,_){!u||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(function(U){Array.isArray(u)?u.forEach(function(Q){_?Q.classList.add(U):Q.classList.remove(U)}):_?u.classList.add(U):u.classList.remove(U)}))},De=function(u,f){lt(u,f,!0)},$e=function(u,f){lt(u,f,!1)},ot=function(u,f){for(var _=Array.from(u.children),U=0;U<_.length;U++){var Q=_[U];if(Q instanceof HTMLElement&&G(Q,f))return Q}},St=function(u,f,_){_==="".concat(parseInt(_))&&(_=parseInt(_)),_||parseInt(_)===0?u.style.setProperty(f,typeof _=="number"?"".concat(_,"px"):_):u.style.removeProperty(f)},pt=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u&&(u.style.display=f)},Dt=function(u){u&&(u.style.display="none")},Bi=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";u&&new MutationObserver(function(){si(u,u.innerHTML,f)}).observe(u,{childList:!0,subtree:!0})},fs=function(u,f,_,U){var Q=u.querySelector(f);Q&&Q.style.setProperty(_,U)},si=function(u,f){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?pt(u,_):Dt(u)},Jt=function(u){return!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length))},Ea=function(){return!Jt(be())&&!Jt(ve())&&!Jt(pe())},Ma=function(u){return u.scrollHeight>u.clientHeight},Ta=function(u){var f=window.getComputedStyle(u),_=parseFloat(f.getPropertyValue("animation-duration")||"0"),U=parseFloat(f.getPropertyValue("transition-duration")||"0");return _>0||U>0},hs=function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_=Ce();_&&Jt(_)&&(f&&(_.style.transition="none",_.style.width="100%"),setTimeout(function(){_.style.transition="width ".concat(u/1e3,"s linear"),_.style.width="0%"},10))},b=function(){var u=Ce();if(u){var f=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";var _=parseInt(window.getComputedStyle(u).width),U=f/_*100;u.style.width="".concat(U,"%")}},z=function(){return typeof window>"u"||typeof document>"u"},Y=`
 <div aria-labelledby="`.concat(B.title,'" aria-describedby="').concat(B["html-container"],'" class="').concat(B.popup,`" tabindex="-1">
   <button type="button" class="`).concat(B.close,`"></button>
   <ul class="`).concat(B["progress-steps"],`"></ul>
   <div class="`).concat(B.icon,`"></div>
   <img class="`).concat(B.image,`" />
   <h2 class="`).concat(B.title,'" id="').concat(B.title,`"></h2>
   <div class="`).concat(B["html-container"],'" id="').concat(B["html-container"],`"></div>
   <input class="`).concat(B.input,'" id="').concat(B.input,`" />
   <input type="file" class="`).concat(B.file,`" />
   <div class="`).concat(B.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(B.select,'" id="').concat(B.select,`"></select>
   <div class="`).concat(B.radio,`"></div>
   <label class="`).concat(B.checkbox,`">
     <input type="checkbox" id="`).concat(B.checkbox,`" />
     <span class="`).concat(B.label,`"></span>
   </label>
   <textarea class="`).concat(B.textarea,'" id="').concat(B.textarea,`"></textarea>
   <div class="`).concat(B["validation-message"],'" id="').concat(B["validation-message"],`"></div>
   <div class="`).concat(B.actions,`">
     <div class="`).concat(B.loader,`"></div>
     <button type="button" class="`).concat(B.confirm,`"></button>
     <button type="button" class="`).concat(B.deny,`"></button>
     <button type="button" class="`).concat(B.cancel,`"></button>
   </div>
   <div class="`).concat(B.footer,`"></div>
   <div class="`).concat(B["timer-progress-bar-container"],`">
     <div class="`).concat(B["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),$=function(){var u=Fe();return u?(u.remove(),$e([document.documentElement,document.body],[B["no-backdrop"],B["toast-shown"],B["has-column"]]),!0):!1},W=function(){N.currentInstance.resetValidationMessage()},Se=function(){var u=Ie(),f=ot(u,B.input),_=ot(u,B.file),U=u.querySelector(".".concat(B.range," input")),Q=u.querySelector(".".concat(B.range," output")),Ee=ot(u,B.select),tt=u.querySelector(".".concat(B.checkbox," input")),nt=ot(u,B.textarea);f.oninput=W,_.onchange=W,Ee.onchange=W,tt.onchange=W,nt.oninput=W,U.oninput=function(){W(),Q.value=U.value},U.onchange=function(){W(),Q.value=U.value}},Le=function(u){return typeof u=="string"?document.querySelector(u):u},ke=function(u){var f=Ie();f.setAttribute("role",u.toast?"alert":"dialog"),f.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||f.setAttribute("aria-modal","true")},Ve=function(u){window.getComputedStyle(u).direction==="rtl"&&De(Fe(),B.rtl)},Qe=function(u){var f=$();if(z()){xe("SweetAlert2 requires document to initialize");return}var _=document.createElement("div");_.className=B.container,f&&De(_,B["no-transition"]),oe(_,Y);var U=Le(u.target);U.appendChild(_),ke(u),Ve(U),Se()},We=function(u,f){u instanceof HTMLElement?f.appendChild(u):p(u)==="object"?Ke(u,f):u&&oe(f,u)},Ke=function(u,f){u.jquery?Mt(f,u):oe(f,u.toString())},Mt=function(u,f){if(u.textContent="",0 in f)for(var _=0;_ in f;_++)u.appendChild(f[_].cloneNode(!0));else u.appendChild(f.cloneNode(!0))},It=function(){if(z())return!1;var y=document.createElement("div");return typeof y.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof y.style.animation<"u"?"animationend":!1}(),Ft=function(u,f){var _=dt(),U=he();!_||!U||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?Dt(_):pt(_),me(_,f,"actions"),Xn(_,U,f),oe(U,f.loaderHtml||""),me(U,f,"loader"))};function Xn(y,u,f){var _=be(),U=ve(),Q=pe();!_||!U||!Q||(je(_,"confirm",f),je(U,"deny",f),je(Q,"cancel",f),vt(_,U,Q,f),f.reverseButtons&&(f.toast?(y.insertBefore(Q,_),y.insertBefore(U,_)):(y.insertBefore(Q,u),y.insertBefore(U,u),y.insertBefore(_,u))))}function vt(y,u,f,_){if(!_.buttonsStyling){$e([y,u,f],B.styled);return}De([y,u,f],B.styled),_.confirmButtonColor&&(y.style.backgroundColor=_.confirmButtonColor,De(y,B["default-outline"])),_.denyButtonColor&&(u.style.backgroundColor=_.denyButtonColor,De(u,B["default-outline"])),_.cancelButtonColor&&(f.style.backgroundColor=_.cancelButtonColor,De(f,B["default-outline"]))}function je(y,u,f){var _=Ue(u);si(y,f["show".concat(_,"Button")],"inline-block"),oe(y,f["".concat(u,"ButtonText")]||""),y.setAttribute("aria-label",f["".concat(u,"ButtonAriaLabel")]||""),y.className=B[u],me(y,f,"".concat(u,"Button"))}var ps=function(u,f){var _=Me();_&&(oe(_,f.closeButtonHtml||""),me(_,f,"closeButton"),si(_,f.showCloseButton),_.setAttribute("aria-label",f.closeButtonAriaLabel||""))},mt=function(u,f){var _=Fe();_&&(vi(_,f.backdrop),Aa(_,f.position),Er(_,f.grow),me(_,f,"container"))};function vi(y,u){typeof u=="string"?y.style.background=u:u||De([document.documentElement,document.body],B["no-backdrop"])}function Aa(y,u){u&&(u in B?De(y,B[u]):(we('The "position" parameter is not valid, defaulting to "center"'),De(y,B.center)))}function Er(y,u){u&&De(y,B["grow-".concat(u)])}var ut={innerParams:new WeakMap,domCache:new WeakMap},Xt=["input","file","range","select","radio","checkbox","textarea"],_i=function(u,f){var _=Ie();if(_){var U=ut.innerParams.get(u),Q=!U||f.input!==U.input;Xt.forEach(function(Ee){var tt=ot(_,B[Ee]);tt&&(gs(Ee,f.inputAttributes),tt.className=B[Ee],Q&&Dt(tt))}),f.input&&(Q&&ms(f),Lu(f))}},ms=function(u){if(u.input){if(!Ut[u.input]){xe("Unexpected type of input! Expected ".concat(Object.keys(Ut).join(" | "),', got "').concat(u.input,'"'));return}var f=Th(u.input),_=Ut[u.input](f,u);pt(f),u.inputAutoFocus&&setTimeout(function(){at(_)})}},_n=function(u){for(var f=0;f<u.attributes.length;f++){var _=u.attributes[f].name;["id","type","value","style"].includes(_)||u.removeAttribute(_)}},gs=function(u,f){var _=qe(Ie(),u);if(_){_n(_);for(var U in f)_.setAttribute(U,f[U])}},Lu=function(u){var f=Th(u.input);p(u.customClass)==="object"&&De(f,u.customClass.input)},eo=function(u,f){(!u.placeholder||f.inputPlaceholder)&&(u.placeholder=f.inputPlaceholder)},vs=function(u,f,_){if(_.inputLabel){var U=document.createElement("label"),Q=B["input-label"];U.setAttribute("for",u.id),U.className=Q,p(_.customClass)==="object"&&De(U,_.customClass.inputLabel),U.innerText=_.inputLabel,f.insertAdjacentElement("beforebegin",U)}},Th=function(u){return ot(Ie(),B[u]||B.input)},ba=function(u,f){["string","number"].includes(p(f))?u.value="".concat(f):Ne(f)||we('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(p(f),'"'))},Ut={};Ut.text=Ut.email=Ut.password=Ut.number=Ut.tel=Ut.url=Ut.search=Ut.date=Ut["datetime-local"]=Ut.time=Ut.week=Ut.month=function(y,u){return ba(y,u.inputValue),vs(y,y,u),eo(y,u),y.type=u.input,y},Ut.file=function(y,u){return vs(y,y,u),eo(y,u),y},Ut.range=function(y,u){var f=y.querySelector("input"),_=y.querySelector("output");return ba(f,u.inputValue),f.type=u.input,ba(_,u.inputValue),vs(f,y,u),y},Ut.select=function(y,u){if(y.textContent="",u.inputPlaceholder){var f=document.createElement("option");oe(f,u.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,y.appendChild(f)}return vs(y,y,u),y},Ut.radio=function(y){return y.textContent="",y},Ut.checkbox=function(y,u){var f=qe(Ie(),"checkbox");f.value="1",f.checked=!!u.inputValue;var _=y.querySelector("span");return oe(_,u.inputPlaceholder),f},Ut.textarea=function(y,u){ba(y,u.inputValue),eo(y,u),vs(y,y,u);var f=function(U){return parseInt(window.getComputedStyle(U).marginLeft)+parseInt(window.getComputedStyle(U).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var _=parseInt(window.getComputedStyle(Ie()).width),U=function(){if(document.body.contains(y)){var Ee=y.offsetWidth+f(y);Ee>_?Ie().style.width="".concat(Ee,"px"):St(Ie(),"width",u.width)}};new MutationObserver(U).observe(y,{attributes:!0,attributeFilter:["style"]})}}),y};var X_=function(u,f){var _=ee();_&&(Bi(_),me(_,f,"htmlContainer"),f.html?(We(f.html,_),pt(_,"block")):f.text?(_.textContent=f.text,pt(_,"block")):Dt(_),_i(u,f))},j_=function(u,f){var _=Ze();_&&(Bi(_),si(_,f.footer,"block"),f.footer&&We(f.footer,_),me(_,f,"footer"))},Y_=function(u,f){var _=ut.innerParams.get(u),U=R();if(U){if(_&&f.icon===_.icon){bh(U,f),Ah(U,f);return}if(!f.icon&&!f.iconHtml){Dt(U);return}if(f.icon&&Object.keys(se).indexOf(f.icon)===-1){xe('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),Dt(U);return}pt(U),bh(U,f),Ah(U,f),De(U,f.showClass&&f.showClass.icon)}},Ah=function(u,f){for(var _=0,U=Object.entries(se);_<U.length;_++){var Q=P(U[_],2),Ee=Q[0],tt=Q[1];f.icon!==Ee&&$e(u,tt)}De(u,f.icon&&se[f.icon]),Z_(u,f),q_(),me(u,f,"icon")},q_=function(){var u=Ie();if(u)for(var f=window.getComputedStyle(u).getPropertyValue("background-color"),_=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),U=0;U<_.length;U++)_[U].style.backgroundColor=f},$_=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,K_=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,bh=function(u,f){if(!(!f.icon&&!f.iconHtml)){var _=u.innerHTML,U="";if(f.iconHtml)U=Ch(f.iconHtml);else if(f.icon==="success")U=$_,_=_.replace(/ style=".*?"/g,"");else if(f.icon==="error")U=K_;else if(f.icon){var Q={question:"?",warning:"!",info:"i"};U=Ch(Q[f.icon])}_.trim()!==U.trim()&&oe(u,U)}},Z_=function(u,f){if(f.iconColor){u.style.color=f.iconColor,u.style.borderColor=f.iconColor;for(var _=0,U=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];_<U.length;_++){var Q=U[_];fs(u,Q,"background-color",f.iconColor)}fs(u,".swal2-success-ring","border-color",f.iconColor)}},Ch=function(u){return'<div class="'.concat(B["icon-content"],'">').concat(u,"</div>")},Q_=function(u,f){var _=de();if(_){if(!f.imageUrl){Dt(_);return}pt(_,""),_.setAttribute("src",f.imageUrl),_.setAttribute("alt",f.imageAlt||""),St(_,"width",f.imageWidth),St(_,"height",f.imageHeight),_.className=B.image,me(_,f,"image")}},J_=function(u,f){var _=Fe(),U=Ie();if(!(!_||!U)){if(f.toast){St(_,"width",f.width),U.style.width="100%";var Q=he();Q&&U.insertBefore(Q,R())}else St(U,"width",f.width);St(U,"padding",f.padding),f.color&&(U.style.color=f.color),f.background&&(U.style.background=f.background),Dt(ze()),ey(U,f)}},ey=function(u,f){var _=f.showClass||{};u.className="".concat(B.popup," ").concat(Jt(u)?_.popup:""),f.toast?(De([document.documentElement,document.body],B["toast-shown"]),De(u,B.toast)):De(u,B.modal),me(u,f,"popup"),typeof f.customClass=="string"&&De(u,f.customClass),f.icon&&De(u,B["icon-".concat(f.icon)])},ty=function(u,f){var _=ae();if(_){var U=f.progressSteps,Q=f.currentProgressStep;if(!U||U.length===0||Q===void 0){Dt(_);return}pt(_),_.textContent="",Q>=U.length&&we("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),U.forEach(function(Ee,tt){var nt=ny(Ee);if(_.appendChild(nt),tt===Q&&De(nt,B["active-progress-step"]),tt!==U.length-1){var Pt=iy(f);_.appendChild(Pt)}})}},ny=function(u){var f=document.createElement("li");return De(f,B["progress-step"]),oe(f,u),f},iy=function(u){var f=document.createElement("li");return De(f,B["progress-step-line"]),u.progressStepsDistance&&St(f,"width",u.progressStepsDistance),f},ry=function(u,f){var _=Z();_&&(Bi(_),si(_,f.title||f.titleText,"block"),f.title&&We(f.title,_),f.titleText&&(_.innerText=f.titleText),me(_,f,"title"))},Rh=function(u,f){J_(u,f),mt(u,f),ty(u,f),Y_(u,f),Q_(u,f),ry(u,f),ps(u,f),X_(u,f),Ft(u,f),j_(u,f);var _=Ie();typeof f.didRender=="function"&&_&&f.didRender(_)},oy=function(){return Jt(Ie())},Ph=function(){var u;return(u=be())===null||u===void 0?void 0:u.click()},sy=function(){var u;return(u=ve())===null||u===void 0?void 0:u.click()},ay=function(){var u;return(u=pe())===null||u===void 0?void 0:u.click()},to=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Lh=function(u){u.keydownTarget&&u.keydownHandlerAdded&&(u.keydownTarget.removeEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!1)},ly=function(u,f,_){Lh(u),f.toast||(u.keydownHandler=function(U){return cy(f,U,_)},u.keydownTarget=f.keydownListenerCapture?window:Ie(),u.keydownListenerCapture=f.keydownListenerCapture,u.keydownTarget.addEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!0)},Du=function(u,f){var _,U=L();if(U.length){u=u+f,u===U.length?u=0:u===-1&&(u=U.length-1),U[u].focus();return}(_=Ie())===null||_===void 0||_.focus()},Dh=["ArrowRight","ArrowDown"],uy=["ArrowLeft","ArrowUp"],cy=function(u,f,_){u&&(f.isComposing||f.keyCode===229||(u.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?dy(f,u):f.key==="Tab"?fy(f):[].concat(Dh,uy).includes(f.key)?hy(f.key):f.key==="Escape"&&py(f,u,_)))},dy=function(u,f){if(wt(f.allowEnterKey)){var _=qe(Ie(),f.input);if(u.target&&_&&u.target instanceof HTMLElement&&u.target.outerHTML===_.outerHTML){if(["textarea","file"].includes(f.input))return;Ph(),u.preventDefault()}}},fy=function(u){for(var f=u.target,_=L(),U=-1,Q=0;Q<_.length;Q++)if(f===_[Q]){U=Q;break}u.shiftKey?Du(U,-1):Du(U,1),u.stopPropagation(),u.preventDefault()},hy=function(u){var f=dt(),_=be(),U=ve(),Q=pe();if(!(!f||!_||!U||!Q)){var Ee=[_,U,Q];if(!(document.activeElement instanceof HTMLElement&&!Ee.includes(document.activeElement))){var tt=Dh.includes(u)?"nextElementSibling":"previousElementSibling",nt=document.activeElement;if(nt){for(var Pt=0;Pt<f.children.length;Pt++){if(nt=nt[tt],!nt)return;if(nt instanceof HTMLButtonElement&&Jt(nt))break}nt instanceof HTMLButtonElement&&nt.focus()}}}},py=function(u,f,_){wt(f.allowEscapeKey)&&(u.preventDefault(),_(to.esc))},no={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},my=function(){var u=Fe(),f=Array.from(document.body.children);f.forEach(function(_){_.contains(u)||(_.hasAttribute("aria-hidden")&&_.setAttribute("data-previous-aria-hidden",_.getAttribute("aria-hidden")||""),_.setAttribute("aria-hidden","true"))})},Ih=function(){var u=Array.from(document.body.children);u.forEach(function(f){f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},Uh=typeof window<"u"&&!!window.GestureEvent,gy=function(){if(Uh&&!G(document.body,B.iosfix)){var u=document.body.scrollTop;document.body.style.top="".concat(u*-1,"px"),De(document.body,B.iosfix),vy()}},vy=function(){var u=Fe();if(u){var f;u.ontouchstart=function(_){f=_y(_)},u.ontouchmove=function(_){f&&(_.preventDefault(),_.stopPropagation())}}},_y=function(u){var f=u.target,_=Fe(),U=ee();return!_||!U||yy(u)||xy(u)?!1:f===_||!Ma(_)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(Ma(U)&&U.contains(f))},yy=function(u){return u.touches&&u.touches.length&&u.touches[0].touchType==="stylus"},xy=function(u){return u.touches&&u.touches.length>1},wy=function(){if(G(document.body,B.iosfix)){var u=parseInt(document.body.style.top,10);$e(document.body,B.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},Sy=function(){var u=document.createElement("div");u.className=B["scrollbar-measure"],document.body.appendChild(u);var f=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),f},io=null,Ey=function(u){io===null&&(document.body.scrollHeight>window.innerHeight||u==="scroll")&&(io=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(io+Sy(),"px"))},My=function(){io!==null&&(document.body.style.paddingRight="".concat(io,"px"),io=null)};function Nh(y,u,f,_){Te()?Fh(y,_):(q(f).then(function(){return Fh(y,_)}),Lh(N)),Uh?(u.setAttribute("style","display:none !important"),u.removeAttribute("class"),u.innerHTML=""):u.remove(),te()&&(My(),wy(),Ih()),Ty()}function Ty(){$e([document.documentElement,document.body],[B.shown,B["height-auto"],B["no-backdrop"],B["toast-shown"]])}function zi(y){y=by(y);var u=no.swalPromiseResolve.get(this),f=Ay(this);this.isAwaitingPromise?y.isDismissed||(_s(this),u(y)):f&&u(y)}var Ay=function(u){var f=Ie();if(!f)return!1;var _=ut.innerParams.get(u);if(!_||G(f,_.hideClass.popup))return!1;$e(f,_.showClass.popup),De(f,_.hideClass.popup);var U=Fe();return $e(U,_.showClass.backdrop),De(U,_.hideClass.backdrop),Cy(u,f,_),!0};function Oh(y){var u=no.swalPromiseReject.get(this);_s(this),u&&u(y)}var _s=function(u){u.isAwaitingPromise&&(delete u.isAwaitingPromise,ut.innerParams.get(u)||u._destroy())},by=function(u){return typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u)},Cy=function(u,f,_){var U=Fe(),Q=It&&Ta(f);typeof _.willClose=="function"&&_.willClose(f),Q?Ry(u,f,U,_.returnFocus,_.didClose):Nh(u,U,_.returnFocus,_.didClose)},Ry=function(u,f,_,U,Q){It&&(N.swalCloseEventFinishedCallback=Nh.bind(null,u,_,U,Q),f.addEventListener(It,function(Ee){Ee.target===f&&(N.swalCloseEventFinishedCallback(),delete N.swalCloseEventFinishedCallback)}))},Fh=function(u,f){setTimeout(function(){typeof f=="function"&&f.bind(u.params)(),u._destroy&&u._destroy()})},ro=function(u){var f=Ie();if(f||new Da,f=Ie(),!!f){var _=he();Te()?Dt(R()):Py(f,u),pt(_),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()}},Py=function(u,f){var _=dt(),U=he();!_||!U||(!f&&Jt(be())&&(f=be()),pt(_),f&&(Dt(f),U.setAttribute("data-button-to-replace",f.className),_.insertBefore(U,f)),De([u,_],B.loading))},Ly=function(u,f){f.input==="select"||f.input==="radio"?Oy(u,f):["text","email","number","tel","textarea"].some(function(_){return _===f.input})&&(Pe(f.inputValue)||Ne(f.inputValue))&&(ro(be()),Fy(u,f))},Dy=function(u,f){var _=u.getInput();if(!_)return null;switch(f.input){case"checkbox":return Iy(_);case"radio":return Uy(_);case"file":return Ny(_);default:return f.inputAutoTrim?_.value.trim():_.value}},Iy=function(u){return u.checked?1:0},Uy=function(u){return u.checked?u.value:null},Ny=function(u){return u.files&&u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null},Oy=function(u,f){var _=Ie();if(_){var U=function(Ee){f.input==="select"?ky(_,kh(Ee),f):f.input==="radio"&&By(_,kh(Ee),f)};Pe(f.inputOptions)||Ne(f.inputOptions)?(ro(be()),He(f.inputOptions).then(function(Q){u.hideLoading(),U(Q)})):p(f.inputOptions)==="object"?U(f.inputOptions):xe("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(p(f.inputOptions)))}},Fy=function(u,f){var _=u.getInput();_&&(Dt(_),He(f.inputValue).then(function(U){_.value=f.input==="number"?"".concat(parseFloat(U)||0):"".concat(U),pt(_),_.focus(),u.hideLoading()}).catch(function(U){xe("Error in inputValue promise: ".concat(U)),_.value="",pt(_),_.focus(),u.hideLoading()}))};function ky(y,u,f){var _=ot(y,B.select);if(_){var U=function(Ee,tt,nt){var Pt=document.createElement("option");Pt.value=nt,oe(Pt,tt),Pt.selected=Bh(nt,f.inputValue),Ee.appendChild(Pt)};u.forEach(function(Q){var Ee=Q[0],tt=Q[1];if(Array.isArray(tt)){var nt=document.createElement("optgroup");nt.label=Ee,nt.disabled=!1,_.appendChild(nt),tt.forEach(function(Pt){return U(nt,Pt[1],Pt[0])})}else U(_,tt,Ee)}),_.focus()}}function By(y,u,f){var _=ot(y,B.radio);if(_){u.forEach(function(Q){var Ee=Q[0],tt=Q[1],nt=document.createElement("input"),Pt=document.createElement("label");nt.type="radio",nt.name=B.radio,nt.value=Ee,Bh(Ee,f.inputValue)&&(nt.checked=!0);var ys=document.createElement("span");oe(ys,tt),ys.className=B.label,Pt.appendChild(nt),Pt.appendChild(ys),_.appendChild(Pt)});var U=_.querySelectorAll("input");U.length&&U[0].focus()}}var kh=function y(u){var f=[];return u instanceof Map?u.forEach(function(_,U){var Q=_;p(Q)==="object"&&(Q=y(Q)),f.push([U,Q])}):Object.keys(u).forEach(function(_){var U=u[_];p(U)==="object"&&(U=y(U)),f.push([_,U])}),f},Bh=function(u,f){return!!f&&f.toString()===u.toString()},Ca=void 0,zy=function(u){var f=ut.innerParams.get(u);u.disableButtons(),f.input?zh(u,"confirm"):Uu(u,!0)},Hy=function(u){var f=ut.innerParams.get(u);u.disableButtons(),f.returnInputValueOnDeny?zh(u,"deny"):Iu(u,!1)},Gy=function(u,f){u.disableButtons(),f(to.cancel)},zh=function(u,f){var _=ut.innerParams.get(u);if(!_.input){xe('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Ue(f)));return}var U=u.getInput(),Q=Dy(u,_);_.inputValidator?Vy(u,Q,f):U&&!U.checkValidity()?(u.enableButtons(),u.showValidationMessage(_.validationMessage||U.validationMessage)):f==="deny"?Iu(u,Q):Uu(u,Q)},Vy=function(u,f,_){var U=ut.innerParams.get(u);u.disableInput();var Q=Promise.resolve().then(function(){return He(U.inputValidator(f,U.validationMessage))});Q.then(function(Ee){u.enableButtons(),u.enableInput(),Ee?u.showValidationMessage(Ee):_==="deny"?Iu(u,f):Uu(u,f)})},Iu=function(u,f){var _=ut.innerParams.get(u||Ca);if(_.showLoaderOnDeny&&ro(ve()),_.preDeny){u.isAwaitingPromise=!0;var U=Promise.resolve().then(function(){return He(_.preDeny(f,_.validationMessage))});U.then(function(Q){Q===!1?(u.hideLoading(),_s(u)):u.close({isDenied:!0,value:typeof Q>"u"?f:Q})}).catch(function(Q){return Gh(u||Ca,Q)})}else u.close({isDenied:!0,value:f})},Hh=function(u,f){u.close({isConfirmed:!0,value:f})},Gh=function(u,f){u.rejectPromise(f)},Uu=function(u,f){var _=ut.innerParams.get(u||Ca);if(_.showLoaderOnConfirm&&ro(),_.preConfirm){u.resetValidationMessage(),u.isAwaitingPromise=!0;var U=Promise.resolve().then(function(){return He(_.preConfirm(f,_.validationMessage))});U.then(function(Q){Jt(ze())||Q===!1?(u.hideLoading(),_s(u)):Hh(u,typeof Q>"u"?f:Q)}).catch(function(Q){return Gh(u||Ca,Q)})}else Hh(u,f)};function Ra(){var y=ut.innerParams.get(this);if(y){var u=ut.domCache.get(this);Dt(u.loader),Te()?y.icon&&pt(R()):Wy(u),$e([u.popup,u.actions],B.loading),u.popup.removeAttribute("aria-busy"),u.popup.removeAttribute("data-loading"),u.confirmButton.disabled=!1,u.denyButton.disabled=!1,u.cancelButton.disabled=!1}}var Wy=function(u){var f=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));f.length?pt(f[0],"inline-block"):Ea()&&Dt(u.actions)};function Vh(){var y=ut.innerParams.get(this),u=ut.domCache.get(this);return u?qe(u.popup,y.input):null}function Wh(y,u,f){var _=ut.domCache.get(y);u.forEach(function(U){_[U].disabled=f})}function Xh(y,u){var f=Ie();if(!(!f||!y))if(y.type==="radio")for(var _=f.querySelectorAll('[name="'.concat(B.radio,'"]')),U=0;U<_.length;U++)_[U].disabled=u;else y.disabled=u}function jh(){Wh(this,["confirmButton","denyButton","cancelButton"],!1)}function Yh(){Wh(this,["confirmButton","denyButton","cancelButton"],!0)}function qh(){Xh(this.getInput(),!1)}function $h(){Xh(this.getInput(),!0)}function Kh(y){var u=ut.domCache.get(this),f=ut.innerParams.get(this);oe(u.validationMessage,y),u.validationMessage.className=B["validation-message"],f.customClass&&f.customClass.validationMessage&&De(u.validationMessage,f.customClass.validationMessage),pt(u.validationMessage);var _=this.getInput();_&&(_.setAttribute("aria-invalid","true"),_.setAttribute("aria-describedby",B["validation-message"]),at(_),De(_,B.inputerror))}function Zh(){var y=ut.domCache.get(this);y.validationMessage&&Dt(y.validationMessage);var u=this.getInput();u&&(u.removeAttribute("aria-invalid"),u.removeAttribute("aria-describedby"),$e(u,B.inputerror))}var oo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Xy=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],jy={},Yy=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Qh=function(u){return Object.prototype.hasOwnProperty.call(oo,u)},Jh=function(u){return Xy.indexOf(u)!==-1},ep=function(u){return jy[u]},qy=function(u){Qh(u)||we('Unknown parameter "'.concat(u,'"'))},$y=function(u){Yy.includes(u)&&we('The parameter "'.concat(u,'" is incompatible with toasts'))},Ky=function(u){var f=ep(u);f&&H(u,f)},Zy=function(u){u.backdrop===!1&&u.allowOutsideClick&&we('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var f in u)qy(f),u.toast&&$y(f),Ky(f)};function tp(y){var u=Ie(),f=ut.innerParams.get(this);if(!u||G(u,f.hideClass.popup)){we("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var _=Qy(y),U=Object.assign({},f,_);Rh(this,U),ut.innerParams.set(this,U),Object.defineProperties(this,{params:{value:Object.assign({},this.params,y),writable:!1,enumerable:!0}})}var Qy=function(u){var f={};return Object.keys(u).forEach(function(_){Jh(_)?f[_]=u[_]:we("Invalid parameter to update: ".concat(_))}),f};function np(){var y=ut.domCache.get(this),u=ut.innerParams.get(this);if(!u){ip(this);return}y.popup&&N.swalCloseEventFinishedCallback&&(N.swalCloseEventFinishedCallback(),delete N.swalCloseEventFinishedCallback),typeof u.didDestroy=="function"&&u.didDestroy(),Jy(this)}var Jy=function(u){ip(u),delete u.params,delete N.keydownHandler,delete N.keydownTarget,delete N.currentInstance},ip=function(u){u.isAwaitingPromise?(Nu(ut,u),u.isAwaitingPromise=!0):(Nu(no,u),Nu(ut,u),delete u.isAwaitingPromise,delete u.disableButtons,delete u.enableButtons,delete u.getInput,delete u.disableInput,delete u.enableInput,delete u.hideLoading,delete u.disableLoading,delete u.showValidationMessage,delete u.resetValidationMessage,delete u.close,delete u.closePopup,delete u.closeModal,delete u.closeToast,delete u.rejectPromise,delete u.update,delete u._destroy)},Nu=function(u,f){for(var _ in u)u[_].delete(f)},ex=Object.freeze({__proto__:null,_destroy:np,close:zi,closeModal:zi,closePopup:zi,closeToast:zi,disableButtons:Yh,disableInput:$h,disableLoading:Ra,enableButtons:jh,enableInput:qh,getInput:Vh,handleAwaitingPromise:_s,hideLoading:Ra,rejectPromise:Oh,resetValidationMessage:Zh,showValidationMessage:Kh,update:tp}),tx=function(u,f,_){u.toast?nx(u,f,_):(rx(f),ox(f),sx(u,f,_))},nx=function(u,f,_){f.popup.onclick=function(){u&&(ix(u)||u.timer||u.input)||_(to.close)}},ix=function(u){return!!(u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton)},Pa=!1,rx=function(u){u.popup.onmousedown=function(){u.container.onmouseup=function(f){u.container.onmouseup=function(){},f.target===u.container&&(Pa=!0)}}},ox=function(u){u.container.onmousedown=function(){u.popup.onmouseup=function(f){u.popup.onmouseup=function(){},(f.target===u.popup||f.target instanceof HTMLElement&&u.popup.contains(f.target))&&(Pa=!0)}}},sx=function(u,f,_){f.container.onclick=function(U){if(Pa){Pa=!1;return}U.target===f.container&&wt(u.allowOutsideClick)&&_(to.backdrop)}},ax=function(u){return p(u)==="object"&&u.jquery},rp=function(u){return u instanceof Element||ax(u)},lx=function(u){var f={};return p(u[0])==="object"&&!rp(u[0])?Object.assign(f,u[0]):["title","html","icon"].forEach(function(_,U){var Q=u[U];typeof Q=="string"||rp(Q)?f[_]=Q:Q!==void 0&&xe("Unexpected type of ".concat(_,'! Expected "string" or "Element", got ').concat(p(Q)))}),f};function ux(){for(var y=this,u=arguments.length,f=new Array(u),_=0;_<u;_++)f[_]=arguments[_];return s(y,f)}function cx(y){var u=function(f){E(_,f);function _(){return m(this,_),i(this,_,arguments)}return S(_,[{key:"_main",value:function(Q,Ee){return I(g(_.prototype),"_main",this).call(this,Q,Object.assign({},y,Ee))}}]),_}(this);return u}var dx=function(){return N.timeout&&N.timeout.getTimerLeft()},op=function(){if(N.timeout)return b(),N.timeout.stop()},sp=function(){if(N.timeout){var u=N.timeout.start();return hs(u),u}},fx=function(){var u=N.timeout;return u&&(u.running?op():sp())},hx=function(u){if(N.timeout){var f=N.timeout.increase(u);return hs(f,!0),f}},px=function(){return!!(N.timeout&&N.timeout.isRunning())},ap=!1,Ou={};function mx(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ou[y]=this,ap||(document.body.addEventListener("click",gx),ap=!0)}var gx=function(u){for(var f=u.target;f&&f!==document;f=f.parentNode)for(var _ in Ou){var U=f.getAttribute(_);if(U){Ou[_].fire({template:U});return}}},vx=Object.freeze({__proto__:null,argsToParams:lx,bindClickHandler:mx,clickCancel:ay,clickConfirm:Ph,clickDeny:sy,enableLoading:ro,fire:ux,getActions:dt,getCancelButton:pe,getCloseButton:Me,getConfirmButton:be,getContainer:Fe,getDenyButton:ve,getFocusableElements:L,getFooter:Ze,getHtmlContainer:ee,getIcon:R,getIconContent:T,getImage:de,getInputLabel:Xe,getLoader:he,getPopup:Ie,getProgressSteps:ae,getTimerLeft:dx,getTimerProgressBar:Ce,getTitle:Z,getValidationMessage:ze,increaseTimer:hx,isDeprecatedParameter:ep,isLoading:O,isTimerRunning:px,isUpdatableParameter:Jh,isValidParameter:Qh,isVisible:oy,mixin:cx,resumeTimer:sp,showLoading:ro,stopTimer:op,toggleTimer:fx}),_x=function(){function y(u,f){m(this,y),this.callback=u,this.remaining=f,this.running=!1,this.start()}return S(y,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(f){var _=this.running;return _&&this.stop(),this.remaining+=f,_&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),y}(),lp=["swal-title","swal-html","swal-footer"],yx=function(u){var f=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!f)return{};var _=f.content;bx(_);var U=Object.assign(xx(_),wx(_),Sx(_),Ex(_),Mx(_),Tx(_),Ax(_,lp));return U},xx=function(u){var f={},_=Array.from(u.querySelectorAll("swal-param"));return _.forEach(function(U){Mr(U,["name","value"]);var Q=U.getAttribute("name"),Ee=U.getAttribute("value");typeof oo[Q]=="boolean"?f[Q]=Ee!=="false":p(oo[Q])==="object"?f[Q]=JSON.parse(Ee):f[Q]=Ee}),f},wx=function(u){var f={},_=Array.from(u.querySelectorAll("swal-function-param"));return _.forEach(function(U){var Q=U.getAttribute("name"),Ee=U.getAttribute("value");f[Q]=new Function("return ".concat(Ee))()}),f},Sx=function(u){var f={},_=Array.from(u.querySelectorAll("swal-button"));return _.forEach(function(U){Mr(U,["type","color","aria-label"]);var Q=U.getAttribute("type");f["".concat(Q,"ButtonText")]=U.innerHTML,f["show".concat(Ue(Q),"Button")]=!0,U.hasAttribute("color")&&(f["".concat(Q,"ButtonColor")]=U.getAttribute("color")),U.hasAttribute("aria-label")&&(f["".concat(Q,"ButtonAriaLabel")]=U.getAttribute("aria-label"))}),f},Ex=function(u){var f={},_=u.querySelector("swal-image");return _&&(Mr(_,["src","width","height","alt"]),_.hasAttribute("src")&&(f.imageUrl=_.getAttribute("src")),_.hasAttribute("width")&&(f.imageWidth=_.getAttribute("width")),_.hasAttribute("height")&&(f.imageHeight=_.getAttribute("height")),_.hasAttribute("alt")&&(f.imageAlt=_.getAttribute("alt"))),f},Mx=function(u){var f={},_=u.querySelector("swal-icon");return _&&(Mr(_,["type","color"]),_.hasAttribute("type")&&(f.icon=_.getAttribute("type")),_.hasAttribute("color")&&(f.iconColor=_.getAttribute("color")),f.iconHtml=_.innerHTML),f},Tx=function(u){var f={},_=u.querySelector("swal-input");_&&(Mr(_,["type","label","placeholder","value"]),f.input=_.getAttribute("type")||"text",_.hasAttribute("label")&&(f.inputLabel=_.getAttribute("label")),_.hasAttribute("placeholder")&&(f.inputPlaceholder=_.getAttribute("placeholder")),_.hasAttribute("value")&&(f.inputValue=_.getAttribute("value")));var U=Array.from(u.querySelectorAll("swal-input-option"));return U.length&&(f.inputOptions={},U.forEach(function(Q){Mr(Q,["value"]);var Ee=Q.getAttribute("value"),tt=Q.innerHTML;f.inputOptions[Ee]=tt})),f},Ax=function(u,f){var _={};for(var U in f){var Q=f[U],Ee=u.querySelector(Q);Ee&&(Mr(Ee,[]),_[Q.replace(/^swal-/,"")]=Ee.innerHTML.trim())}return _},bx=function(u){var f=lp.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(u.children).forEach(function(_){var U=_.tagName.toLowerCase();f.includes(U)||we("Unrecognized element <".concat(U,">"))})},Mr=function(u,f){Array.from(u.attributes).forEach(function(_){f.indexOf(_.name)===-1&&we(['Unrecognized attribute "'.concat(_.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},up=10,Cx=function(u){var f=Fe(),_=Ie();typeof u.willOpen=="function"&&u.willOpen(_);var U=window.getComputedStyle(document.body),Q=U.overflowY;Dx(f,_,u),setTimeout(function(){Px(f,_)},up),te()&&(Lx(f,u.scrollbarPadding,Q),my()),!Te()&&!N.previousActiveElement&&(N.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(function(){return u.didOpen(_)}),$e(f,B["no-transition"])},Rx=function y(u){var f=Ie();if(!(u.target!==f||!It)){var _=Fe();f.removeEventListener(It,y),_.style.overflowY="auto"}},Px=function(u,f){It&&Ta(f)?(u.style.overflowY="hidden",f.addEventListener(It,Rx)):u.style.overflowY="auto"},Lx=function(u,f,_){gy(),f&&_!=="hidden"&&Ey(_),setTimeout(function(){u.scrollTop=0})},Dx=function(u,f,_){De(u,_.showClass.backdrop),_.animation?(f.style.setProperty("opacity","0","important"),pt(f,"grid"),setTimeout(function(){De(f,_.showClass.popup),f.style.removeProperty("opacity")},up)):pt(f,"grid"),De([document.documentElement,document.body],B.shown),_.heightAuto&&_.backdrop&&!_.toast&&De([document.documentElement,document.body],B["height-auto"])},cp={email:function(u,f){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid email address")},url:function(u,f){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(f||"Invalid URL")}};function Ix(y){y.inputValidator||(y.input==="email"&&(y.inputValidator=cp.email),y.input==="url"&&(y.inputValidator=cp.url))}function Ux(y){(!y.target||typeof y.target=="string"&&!document.querySelector(y.target)||typeof y.target!="string"&&!y.target.appendChild)&&(we('Target parameter is not valid, defaulting to "body"'),y.target="body")}function Nx(y){Ix(y),y.showLoaderOnConfirm&&!y.preConfirm&&we(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Ux(y),typeof y.title=="string"&&(y.title=y.title.split(`
`).join("<br />")),Qe(y)}var ai,La=new WeakMap,Nt=function(){function y(){if(m(this,y),K(this,La,void 0),!(typeof window>"u")){ai=this;for(var u=arguments.length,f=new Array(u),_=0;_<u;_++)f[_]=arguments[_];var U=Object.freeze(this.constructor.argsToParams(f));this.params=U,this.isAwaitingPromise=!1,o(La,this,this._main(ai.params))}}return S(y,[{key:"_main",value:function(f){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Zy(Object.assign({},_,f)),N.currentInstance){var U=no.swalPromiseResolve.get(N.currentInstance),Q=N.currentInstance.isAwaitingPromise;N.currentInstance._destroy(),Q||U({isDismissed:!0}),te()&&Ih()}N.currentInstance=ai;var Ee=Fx(f,_);Nx(Ee),Object.freeze(Ee),N.timeout&&(N.timeout.stop(),delete N.timeout),clearTimeout(N.restoreFocusTimeout);var tt=kx(ai);return Rh(ai,Ee),ut.innerParams.set(ai,Ee),Ox(ai,tt,Ee)}},{key:"then",value:function(f){return r(La,this).then(f)}},{key:"finally",value:function(f){return r(La,this).finally(f)}}]),y}(),Ox=function(u,f,_){return new Promise(function(U,Q){var Ee=function(nt){u.close({isDismissed:!0,dismiss:nt})};no.swalPromiseResolve.set(u,U),no.swalPromiseReject.set(u,Q),f.confirmButton.onclick=function(){zy(u)},f.denyButton.onclick=function(){Hy(u)},f.cancelButton.onclick=function(){Gy(u,Ee)},f.closeButton.onclick=function(){Ee(to.close)},tx(_,f,Ee),ly(N,_,Ee),Ly(u,_),Cx(_),Bx(N,_,Ee),zx(f,_),setTimeout(function(){f.container.scrollTop=0})})},Fx=function(u,f){var _=yx(u),U=Object.assign({},oo,f,_,u);return U.showClass=Object.assign({},oo.showClass,U.showClass),U.hideClass=Object.assign({},oo.hideClass,U.hideClass),U.animation===!1&&(U.showClass={backdrop:"swal2-noanimation"},U.hideClass={}),U},kx=function(u){var f={popup:Ie(),container:Fe(),actions:dt(),confirmButton:be(),denyButton:ve(),cancelButton:pe(),loader:he(),closeButton:Me(),validationMessage:ze(),progressSteps:ae()};return ut.domCache.set(u,f),f},Bx=function(u,f,_){var U=Ce();Dt(U),f.timer&&(u.timeout=new _x(function(){_("timer"),delete u.timeout},f.timer),f.timerProgressBar&&(pt(U),me(U,f,"timerProgressBar"),setTimeout(function(){u.timeout&&u.timeout.running&&hs(f.timer)})))},zx=function(u,f){if(!f.toast){if(!wt(f.allowEnterKey)){Gx();return}Hx(u,f)||Du(-1,1)}},Hx=function(u,f){return f.focusDeny&&Jt(u.denyButton)?(u.denyButton.focus(),!0):f.focusCancel&&Jt(u.cancelButton)?(u.cancelButton.focus(),!0):f.focusConfirm&&Jt(u.confirmButton)?(u.confirmButton.focus(),!0):!1},Gx=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var dp=new Date,fp=localStorage.getItem("swal-initiation");fp?(dp.getTime()-Date.parse(fp))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var y=document.createElement("audio");y.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",y.loop=!0,document.body.appendChild(y),setTimeout(function(){y.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(dp))}Nt.prototype.disableButtons=Yh,Nt.prototype.enableButtons=jh,Nt.prototype.getInput=Vh,Nt.prototype.disableInput=$h,Nt.prototype.enableInput=qh,Nt.prototype.hideLoading=Ra,Nt.prototype.disableLoading=Ra,Nt.prototype.showValidationMessage=Kh,Nt.prototype.resetValidationMessage=Zh,Nt.prototype.close=zi,Nt.prototype.closePopup=zi,Nt.prototype.closeModal=zi,Nt.prototype.closeToast=zi,Nt.prototype.rejectPromise=Oh,Nt.prototype.update=tp,Nt.prototype._destroy=np,Object.assign(Nt,vx),Object.keys(ex).forEach(function(y){Nt[y]=function(){if(ai&&ai[y]){var u;return(u=ai)[y].apply(u,arguments)}return null}}),Nt.DismissReason=to,Nt.version="11.10.7";var Da=Nt;return Da.default=Da,Da}),typeof Hi<"u"&&Hi.Sweetalert2&&(Hi.swal=Hi.sweetAlert=Hi.Swal=Hi.SweetAlert=Hi.Sweetalert2),typeof document<"u"&&function(n,i){var r=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(r),r.styleSheet)r.styleSheet.disabled||(r.styleSheet.cssText=i);else try{r.innerHTML=i}catch{r.innerText=i}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(G_);var Qb=G_.exports;const Kn=Qg(Qb),Jb="/assets/terre-D4gMuq6i.jpg",eC="/assets/backroound-B2iEaWeD.jpeg",tC="/assets/moon-97bi4bk-.jpg",nC="/assets/sun-DXOMgUoX.jpg",iC="/assets/mercurymap-Bo-Ue5xb.jpg",rC="/assets/Venus-C7U4MTcu.jpg",oC="/assets/mars-D6--NhAe.jpg",sC="/assets/jupiter-f10gBsxT.png",aC="/assets/saturn-DRTCKmWK.jpg",lC="/assets/uranusmap-Bn8o__hz.jpg",uC="/assets/neptunemap-CraxsEI9.jpg",cC="/assets/plutomap1k-DCOVvhPo.jpg",xa=new Wb,Ru=new Bn(75,window.innerWidth/window.innerHeight,.1,1e4),Pu=new H_;Pu.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Pu.domElement);const Wn=new qb,dC=Wn.load(Jb),fC=Wn.load(eC),hC=Wn.load(tC),pC=Wn.load(nC),mC=Wn.load(iC),gC=Wn.load(rC),vC=Wn.load(oC),_C=Wn.load(sC),yC=Wn.load(aC),xC=Wn.load(lC),wC=Wn.load(uC),SC=Wn.load(cC),V_=new bt,Kf=new bt,Zf=new bt,Qf=new bt,Jf=new bt,eh=new bt,wa=new bt,th=new bt,nh=new bt,ih=new bt,rh=new bt,oh=new bt,sh=new bt,ah=new bt,lh=new bt,uh=new bt,ch=new bt,dh=new bt,fh=new bt;Zf.position.z=100;Jf.position.z=200;wa.position.z=320;nh.position.z=450;rh.position.z=590;sh.position.z=690;lh.position.z=790;ch.position.z=890;fh.position.z=1e3;Kf.add(Zf);Qf.add(Jf);eh.add(wa);th.add(nh);ih.add(rh);oh.add(sh);ah.add(lh);uh.add(ch);dh.add(fh);V_.add(eh,Kf,Qf,th,ih,oh,ah,uh,dh);xa.add(V_);const EC=new Nn(60,320,160),MC=new ln({map:pC}),W_=new At(EC,MC);xa.add(W_);const TC=new Nn(5,320,160),AC=new ln({map:mC}),hh=new At(TC,AC);Zf.add(hh);const bC=new Nn(6,320,160),CC=new ln({map:gC}),ph=new At(bC,CC);Jf.add(ph);const RC=new Nn(8,320,160),PC=new ln({map:dC}),mh=new At(RC,PC);wa.add(mh);const LC=new Nn(1.5,320,160),DC=new ln({map:hC}),gh=new At(LC,DC);gh.position.x=10;wa.add(gh);const IC=new Nn(6,320,160),UC=new ln({map:vC}),vh=new At(IC,UC);nh.add(vh);const NC=new Nn(20,320,160),OC=new ln({map:_C}),_h=new At(NC,OC);rh.add(_h);const FC=new Nn(12,320,160),kC=new ln({map:yC}),yh=new At(FC,kC),BC=new Cu(15,25,64),zC=new ln({color:10131081,side:ei,opacity:.8,transparent:!0}),Sa=new At(BC,zC);Sa.rotation.x=Math.PI/3;Sa.position.set(0,0,0);sh.add(yh,Sa);const HC=new Nn(9,320,160),GC=new ln({map:xC}),xh=new At(HC,GC),VC=new Cu(15,25,64),WC=new ln({color:14414077,side:ei,opacity:.08,transparent:!0}),XC=new At(VC,WC);Sa.rotation.x=Math.PI/3;Sa.position.set(0,0,0);lh.add(xh,XC);const jC=new Nn(13,320,160),YC=new ln({map:wC}),wh=new At(jC,YC);ch.add(wh);const qC=new Nn(5,320,160),$C=new ln({map:SC}),Sh=new At(qC,$C);fh.add(Sh);const KC=new cs(2500,2500,3e3),ZC=new ln({map:fC,side:pn}),QC=new At(KC,ZC);xa.add(QC);Ru.position.z=430;const Eh=new Zb(Ru,Pu.domElement);Eh.minDistance=80;Eh.maxDistance=1650;let Wd=!0;document.addEventListener("contextmenu",function(t){t.preventDefault(),Wd=!Wd});function Mh(){requestAnimationFrame(Mh),Wd&&(Kf.rotation.y+=.009,hh.rotation.y+=.01,Qf.rotation.y+=.007,ph.rotation.y+=.02,eh.rotation.y+=.0022,wa.rotation.y+=.01,mh.rotation.y+=.002,th.rotation.y+=.0017,vh.rotation.y+=.0015,ih.rotation.y+=.0013,_h.rotation.y+=8555e-7,oh.rotation.y+=.001111,yh.rotation.y+=8555e-7,ah.rotation.y+=965645e-9,xh.rotation.y+=8555e-7,uh.rotation.y+=665645e-9,wh.rotation.y+=8555e-7,dh.rotation.y+=665645e-9,Sh.rotation.y+=8555e-7),Eh.update(),Pu.render(xa,Ru)}function JC(t){const e=new $b,n=new Ye;n.x=t.clientX/window.innerWidth*2-1,n.y=-(t.clientY/window.innerHeight)*2+1,e.setFromCamera(n,Ru);const i=e.intersectObjects(xa.children,!0);for(let r=0;r<i.length;r++)i[r].object===W_&&Kn.fire({title:"Informations sur le soleil ",html:"Le Soleil est l’étoile du Système solaire. Dans la classification astronomique, c’est une étoile de type naine jaune d'une masse d'environ 2 × 1030 kg, composée d’hydrogène (74 % de la masse ou 92 % du volume) et d’hélium (25 % de la masse ou 8 % du volume)",icon:"info",confirmButtonText:"Fermer"}),i[r].object===hh&&Kn.fire({title:"Informations sur mercure",html:"Mercure est la planète la plus proche du Soleil et la moins massive du Système solaireN 1. Son éloignement du Soleil est compris entre 0,31 et 0,47 unité astronomique (soit 46 et 70 millions de kilomètres), ce qui correspond à une excentricité orbitale de 0,2 — plus de douze fois supérieure à celle de la Terre, et de loin la plus élevée pour une planète du Système solaire.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===ph&&Kn.fire({title:"Informations sur venus",html:`Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre.

Vénus orbite autour du Soleil tous les 224,7 jours terrestres. Avec une période de rotation de 243 jours terrestres, il lui faut plus de temps pour tourner autour de son axe que toute autre planète du Système solaire.`,icon:"info",confirmButtonText:"Fermer"}),i[r].object===mh&&Kn.fire({title:"Informations sur la Terre",html:"La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. Elle orbite autour du Soleil en 365,256 jours solaires ",icon:"info",confirmButtonText:"Fermer"}),i[r].object===gh&&Kn.fire({title:"Informations sur la lune",html:"La Lune est l'unique satellite naturel permanent de la planète Terre. Il s'agit du cinquième plus grand satellite naturel du Système solaire, et du plus grand des satellites planétaires par rapport à la taille de la planète autour de laquelle il orbite. C'est le deuxième satellite le plus dense du Système solaire après Io, un satellite de Jupiterc.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===vh&&Kn.fire({title:"Informations sur mars",html:"Mars (prononcé en français : /maʁs/) est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 au (206,6 à 249,2 millions de kilomètres), elle a une période orbitale de 669,58 jours martiens (686,71 jours ou 1,88 année terrestre).",icon:"info",confirmButtonText:"Fermer"}),i[r].object===_h&&Kn.fire({title:"Informations sur jupiter",html:"Jupiter est la cinquième planète du Système solaire par ordre d'éloignement au Soleil, et la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse. Elle est même plus volumineuse que toutes les autres planètes réunies avec son rayon moyen de 69 911 km, qui vaut environ onze fois celui de la Terre, et sa masse de 1,898 × 1027 kg, qui est 318 fois plus grande. Orbitant en moyenne à environ 779 millions de kilomètres du Soleil (5,2 unités astronomiques), sa période de révolution vaut un peu moins de 12 ans.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===yh&&Kn.fire({title:"Informations sur saturn",html:"Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse. Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 × 1024 kg est 95 fois plus grande. Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années terrestres tandis que sa période de rotation est estimée à 10 h 33 min.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===xh&&Kn.fire({title:"Informations sur uranus",html:"Uranus est la septième planète du Système solaire par ordre d'éloignement du Soleil. Elle orbite autour de celui-ci à une distance d'environ 19,2 unités astronomiques (2,87 milliards de kilomètres), avec une période de révolution de 84,05 années terrestres. Il s'agit de la quatrième planète la plus massive du Système solaire et de la troisième plus grande par la taille.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===wh&&Kn.fire({title:"Informations sur neptune",html:"Neptune est la huitième planète par ordre d'éloignement au Soleil et la plus éloignée connue du Système solaireN 2. Elle orbite autour du Soleil à une distance d'environ 30,1 au (4,5 milliards de kilomètres), avec une excentricité orbitale moitié moindre que celle de la Terre et une période de révolution de 164,79 ans. Il s'agit de la troisième planète la plus massive du Système solaire et de la quatrième plus grande par la taille — un peu plus massive mais un peu plus petite qu'Uranus. Par ailleurs, elle est la planète géante la plus dense.",icon:"info",confirmButtonText:"Fermer"}),i[r].object===Sh&&Kn.fire({title:"Informations sur pluton",html:"Pluton, officiellement désignée par (134340) Pluton (désignation internationale : (134340) Pluto), est une planète naine, la plus volumineuse connue dans le Système solaire (2 372 km de diamètre, contre 2 326 km pour Éris), et la deuxième en ce qui concerne sa masse (après Éris). Pluton est ainsi le neuvième plus gros objet connu orbitant directement autour du Soleil et le dixième par la masse. ",icon:"info",confirmButtonText:"Fermer"})}window.addEventListener("click",JC,!1);Mh();const eR=Mh();Hc.createRoot(document.getElementById("root")).render(gp.jsx(rw.StrictMode,{children:gp.jsx(eR,{})}));
