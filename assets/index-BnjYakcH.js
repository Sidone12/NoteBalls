const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ViewNotes-DspyQUSN.js","./AddEditNote.vue_vue_type_script_setup_true_lang-D6nWWL8T.js","./ViewEditNote-DjUNR-p5.js","./ViewAuth-BCftPTTd.js","./ViewAuth-bCboIjnn.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},es=[],tn=()=>{},fp=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nl=t=>t.startsWith("onUpdate:"),gt=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},My=Object.prototype.hasOwnProperty,we=(t,e)=>My.call(t,e),ae=Array.isArray,ts=t=>ha(t)==="[object Map]",dp=t=>ha(t)==="[object Set]",le=t=>typeof t=="function",He=t=>typeof t=="string",bn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",pp=t=>(Oe(t)||le(t))&&le(t.then)&&le(t.catch),mp=Object.prototype.toString,ha=t=>mp.call(t),xy=t=>ha(t).slice(8,-1),gp=t=>ha(t)==="[object Object]",Dl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ly=/-\w/g,Ut=fa(t=>t.replace(Ly,e=>e.slice(1).toUpperCase())),Fy=/\B([A-Z])/g,Or=fa(t=>t.replace(Fy,"-$1").toLowerCase()),da=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),oc=fa(t=>t?`on${da(t)}`:""),Gn=(t,e)=>!Object.is(t,e),Io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_p=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const pa=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ol(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?$y(r):Ol(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Oe(t))return t}const Uy=/;(?![^(]*\))/g,By=/:([^]+)/,jy=/\/\*[^]*?\*\//g;function $y(t){const e={};return t.replace(jy,"").split(Uy).forEach(n=>{if(n){const r=n.split(By);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vi(t){let e="";if(He(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=vi(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hy=kl(qy);function yp(t){return!!t||t===""}const Ep=t=>!!(t&&t.__v_isRef===!0),vp=t=>He(t)?t:t==null?"":ae(t)||Oe(t)&&(t.toString===mp||!le(t.toString))?Ep(t)?vp(t.value):JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>Ep(e)?Tp(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ac(r,i)+" =>"]=s,n),{})}:dp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ac(n))}:bn(e)?ac(e):Oe(e)&&!ae(e)&&!gp(e)?String(e):e,ac=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){++this._on===1&&(this.prevScope=ht,ht=this)}off(){this._on>0&&--this._on===0&&(ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wp(t){return new Ip(t)}function Ml(){return ht}function Ap(t,e=!1){ht&&ht.cleanups.push(t)}let ke;const cc=new WeakSet;class Rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&ht.active&&ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cc.has(this)&&(cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xh(this),Pp(this);const e=ke,n=qt;ke=this,qt=!0;try{return this.fn()}finally{Cp(this),ke=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fl(e);this.deps=this.depsTail=void 0,xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lc(this)&&this.run()}get dirty(){return Lc(this)}}let Sp=0,oi,ai;function bp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function xl(){Sp++}function Ll(){if(--Sp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Fl(r),zy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ti)||(t.globalVersion=Ti,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lc(t))))return;t.flags|=2;const e=t.dep,n=ke,r=qt;ke=t,qt=!0;try{Pp(t);const s=t.fn(t._value);(e.version===0||Gn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,qt=r,Cp(t),t.flags&=-3}}function Fl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const Np=[];function vn(){Np.push(qt),qt=!1}function Tn(){const t=Np.pop();qt=t===void 0?!0:t}function xh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ti=0;class Wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!qt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Wy(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Vp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){xl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ll()}}}function Vp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Vp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xo=new WeakMap,Ar=Symbol(""),Fc=Symbol(""),Ii=Symbol("");function dt(t,e,n){if(qt&&ke){let r=xo.get(t);r||xo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ul),s.map=r,s.key=n),s.track()}}function mn(t,e,n,r,s,i){const o=xo.get(t);if(!o){Ti++;return}const c=l=>{l&&l.trigger()};if(xl(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&Dl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ii||!bn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ii)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ar)),ts(t)&&c(o.get(Fc)));break;case"delete":l||(c(o.get(Ar)),ts(t)&&c(o.get(Fc)));break;case"set":ts(t)&&c(o.get(Ar));break}}Ll()}function Ky(t,e){const n=xo.get(t);return n&&n.get(e)}function qr(t){const e=Te(t);return e===t?e:(dt(e,"iterate",Ii),Lt(t)?e:e.map(tt))}function ma(t){return dt(t=Te(t),"iterate",Ii),t}const Gy={__proto__:null,[Symbol.iterator](){return lc(this,Symbol.iterator,tt)},concat(...t){return qr(this).concat(...t.map(e=>ae(e)?qr(e):e))},entries(){return lc(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return fn(this,"every",t,e,void 0,arguments)},filter(t,e){return fn(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return fn(this,"find",t,e,tt,arguments)},findIndex(t,e){return fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fn(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return uc(this,"includes",t)},indexOf(...t){return uc(this,"indexOf",t)},join(t){return qr(this).join(t)},lastIndexOf(...t){return uc(this,"lastIndexOf",t)},map(t,e){return fn(this,"map",t,e,void 0,arguments)},pop(){return Ks(this,"pop")},push(...t){return Ks(this,"push",t)},reduce(t,...e){return Lh(this,"reduce",t,e)},reduceRight(t,...e){return Lh(this,"reduceRight",t,e)},shift(){return Ks(this,"shift")},some(t,e){return fn(this,"some",t,e,void 0,arguments)},splice(...t){return Ks(this,"splice",t)},toReversed(){return qr(this).toReversed()},toSorted(t){return qr(this).toSorted(t)},toSpliced(...t){return qr(this).toSpliced(...t)},unshift(...t){return Ks(this,"unshift",t)},values(){return lc(this,"values",tt)}};function lc(t,e,n){const r=ma(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qy=Array.prototype;function fn(t,e,n,r,s,i){const o=ma(t),c=o!==t&&!Lt(t),l=o[e];if(l!==Qy[e]){const p=l.apply(t,i);return c?tt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,tt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Lh(t,e,n,r){const s=ma(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,tt(c),l,t)}),s[e](i,...r)}function uc(t,e,n){const r=Te(t);dt(r,"iterate",Ii);const s=r[e](...n);return(s===-1||s===!1)&&$l(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Ks(t,e,n=[]){vn(),xl();const r=Te(t)[e].apply(t,n);return Ll(),Tn(),r}const Yy=kl("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function Jy(t){bn(t)||(t=String(t));const e=Te(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Op{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aE:Fp:i?Lp:xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=Gy[n]))return l;if(n==="hasOwnProperty")return Jy}const c=Reflect.get(e,n,Ue(e)?e:r);return(bn(n)?Dp.has(n):Yy(n))||(s||dt(e,"get",n),i)?c:Ue(c)?o&&Dl(n)?c:c.value:Oe(c)?s?Bp(c):ws(c):c}}class Mp extends Op{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=nr(i);if(!Lt(r)&&!nr(r)&&(i=Te(i),r=Te(r)),!ae(e)&&Ue(i)&&!Ue(r))return l||(i.value=r),!0}const o=ae(e)&&Dl(n)?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,Ue(e)?e:s);return e===Te(s)&&(o?Gn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!bn(n)||!Dp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",ae(e)?"length":Ar),Reflect.ownKeys(e)}}class Xy extends Op{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zy=new Mp,eE=new Xy,tE=new Mp(!0);const Uc=t=>t,uo=t=>Reflect.getPrototypeOf(t);function nE(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=ts(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Uc:e?Lo:tt;return!e&&dt(i,"iterate",l?Fc:Ar),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rE(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(Gn(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=uo(o),u=e?Uc:t?Lo:tt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(Te(s),"iterate",Ar),s.size},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(Gn(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),u=e?Uc:t?Lo:tt;return!t&&dt(l,"iterate",Ar),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return gt(n,t?{add:ho("add"),set:ho("set"),delete:ho("delete"),clear:ho("clear")}:{add(s){!e&&!Lt(s)&&!nr(s)&&(s=Te(s));const i=Te(this);return uo(i).has.call(i,s)||(i.add(s),mn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!nr(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=uo(o);let u=c.call(o,s);u||(s=Te(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Gn(i,f)&&mn(o,"set",s,i):mn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=uo(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&mn(i,"delete",s,void 0),u},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nE(s,t,e)}),n}function Bl(t,e){const n=rE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const sE={get:Bl(!1,!1)},iE={get:Bl(!1,!0)},oE={get:Bl(!0,!1)};const xp=new WeakMap,Lp=new WeakMap,Fp=new WeakMap,aE=new WeakMap;function cE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lE(t){return t.__v_skip||!Object.isExtensible(t)?0:cE(xy(t))}function ws(t){return nr(t)?t:jl(t,!1,Zy,sE,xp)}function Up(t){return jl(t,!1,tE,iE,Lp)}function Bp(t){return jl(t,!0,eE,oE,Fp)}function jl(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=lE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Qn(t){return nr(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function $l(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function ga(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&_p(t,"__v_skip",!0),t}const tt=t=>Oe(t)?ws(t):t,Lo=t=>Oe(t)?Bp(t):t;function Ue(t){return t?t.__v_isRef===!0:!1}function us(t){return $p(t,!1)}function jp(t){return $p(t,!0)}function $p(t,e){return Ue(t)?t:new uE(t,e)}class uE{constructor(e,n){this.dep=new Ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||nr(e);e=r?e:Te(e),Gn(e,n)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function xt(t){return Ue(t)?t.value:t}function Ye(t){return le(t)?t():xt(t)}const hE={get:(t,e,n)=>e==="__v_raw"?t:xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qp(t){return Qn(t)?t:new Proxy(t,hE)}function fE(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=pE(t,n);return e}class dE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ky(Te(this._object),this._key)}}function pE(t,e,n){const r=t[e];return Ue(r)?r:new dE(t,e,n)}class mE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return bp(this,!0),!0}get value(){const e=this.dep.track();return kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gE(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new mE(r,s,n)}const fo={},Fo=new WeakMap;let Tr;function _E(t,e=!1,n=Tr){if(n){let r=Fo.get(n);r||Fo.set(n,r=[]),r.push(t)}}function yE(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=W=>s?W:Lt(W)||s===!1||s===0?gn(W,1):gn(W);let f,p,m,_,C=!1,V=!1;if(Ue(t)?(p=()=>t.value,C=Lt(t)):Qn(t)?(p=()=>u(t),C=!0):ae(t)?(V=!0,C=t.some(W=>Qn(W)||Lt(W)),p=()=>t.map(W=>{if(Ue(W))return W.value;if(Qn(W))return u(W);if(le(W))return l?l(W,2):W()})):le(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){vn();try{m()}finally{Tn()}}const W=Tr;Tr=f;try{return l?l(t,3,[_]):t(_)}finally{Tr=W}}:p=tn,e&&s){const W=p,ne=s===!0?1/0:s;p=()=>gn(W(),ne)}const k=Ml(),D=()=>{f.stop(),k&&k.active&&Vl(k.effects,f)};if(i&&e){const W=e;e=(...ne)=>{W(...ne),D()}}let U=V?new Array(t.length).fill(fo):fo;const H=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ne=f.run();if(s||C||(V?ne.some((de,w)=>Gn(de,U[w])):Gn(ne,U))){m&&m();const de=Tr;Tr=f;try{const w=[ne,U===fo?void 0:V&&U[0]===fo?[]:U,_];U=ne,l?l(e,3,w):e(...w)}finally{Tr=de}}}else f.run()};return c&&c(H),f=new Rp(p),f.scheduler=o?()=>o(H,!1):H,_=W=>_E(W,!1,f),m=f.onStop=()=>{const W=Fo.get(f);if(W){if(l)l(W,4);else for(const ne of W)ne();Fo.delete(f)}},e?r?H(!0):U=f.run():o?o(H.bind(null,!0),!0):f.run(),D.pause=f.pause.bind(f),D.resume=f.resume.bind(f),D.stop=D,D}function gn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ue(t))gn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(dp(t)||ts(t))t.forEach(r=>{gn(r,e,n)});else if(gp(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bi(t,e,n,r){try{return r?t(...r):t()}catch(s){_a(s,e,n)}}function ln(t,e,n,r){if(le(t)){const s=Bi(t,e,n,r);return s&&pp(s)&&s.catch(i=>{_a(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function _a(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){vn(),Bi(i,null,10,[t,l,u]),Tn();return}}EE(t,n,s,r,o)}function EE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let Xt=-1;const ns=[];let Bn=null,Wr=0;const Hp=Promise.resolve();let Uo=null;function ql(t){const e=Uo||Hp;return t?e.then(this?t.bind(this):t):e}function vE(t){let e=Xt+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=wi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hl(t){if(!(t.flags&1)){const e=wi(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=wi(n)?Tt.push(t):Tt.splice(vE(e),0,t),t.flags|=1,zp()}}function zp(){Uo||(Uo=Hp.then(Kp))}function TE(t){ae(t)?ns.push(...t):Bn&&t.id===-1?Bn.splice(Wr+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),zp()}function Fh(t,e,n=Xt+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wp(t){if(ns.length){const e=[...new Set(ns)].sort((n,r)=>wi(n)-wi(r));if(ns.length=0,Bn){Bn.push(...e);return}for(Bn=e,Wr=0;Wr<Bn.length;Wr++){const n=Bn[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,Wr=0}}const wi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kp(t){try{for(Xt=0;Xt<Tt.length;Xt++){const e=Tt[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<Tt.length;Xt++){const e=Tt[Xt];e&&(e.flags&=-2)}Xt=-1,Tt.length=0,Wp(),Uo=null,(Tt.length||ns.length)&&Kp()}}let st=null,Gp=null;function Bo(t){const e=st;return st=t,Gp=t&&t.type.__scopeId||null,e}function Bc(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qo(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&qo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function a0(t,e){if(st===null)return t;const n=Ia(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=be]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(vn(),ln(l,n,8,[t.el,c,t,e]),Tn())}}const IE=Symbol("_vte"),wE=t=>t.__isTeleport,AE=Symbol("_leaveCb");function zl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ya(t,e){return le(t)?gt({name:t.name},e,{setup:t}):t}function Qp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Uh(t){const e=Ql(),n=jp(null);if(e){const s=e.refs===be?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:i=>n.value=i})}return n}const jo=new WeakMap;function ci(t,e,n,r,s=!1){if(ae(t)){t.forEach((C,V)=>ci(C,e&&(ae(e)?e[V]:e),n,r,s));return}if(rs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ci(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ia(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===be?c.refs={}:c.refs,p=c.setupState,m=Te(p),_=p===be?fp:C=>we(m,C);if(u!=null&&u!==l){if(Bh(e),He(u))f[u]=null,_(u)&&(p[u]=null);else if(Ue(u)){u.value=null;const C=e;C.k&&(f[C.k]=null)}}if(le(l))Bi(l,c,12,[o,f]);else{const C=He(l),V=Ue(l);if(C||V){const k=()=>{if(t.f){const D=C?_(l)?p[l]:f[l]:l.value;if(s)ae(D)&&Vl(D,i);else if(ae(D))D.includes(i)||D.push(i);else if(C)f[l]=[i],_(l)&&(p[l]=f[l]);else{const U=[i];l.value=U,t.k&&(f[t.k]=U)}}else C?(f[l]=o,_(l)&&(p[l]=o)):V&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const D=()=>{k(),jo.delete(t)};D.id=-1,jo.set(t,D),kt(D,n)}else Bh(t),k()}}}function Bh(t){const e=jo.get(t);e&&(e.flags|=8,jo.delete(t))}pa().requestIdleCallback;pa().cancelIdleCallback;const rs=t=>!!t.type.__asyncLoader,Yp=t=>t.type.__isKeepAlive;function RE(t,e){Jp(t,"a",e)}function SE(t,e){Jp(t,"da",e)}function Jp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yp(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=Ea(e,t,r,!0);Zp(()=>{Vl(r[e],s)},n)}function Ea(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vn();const c=ji(n),l=ln(e,n,t,o);return c(),Tn(),l});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=mt)=>{(!Si||t==="sp")&&Ea(t,(...r)=>e(...r),n)},PE=Pn("bm"),Xp=Pn("m"),CE=Pn("bu"),kE=Pn("u"),NE=Pn("bum"),Zp=Pn("um"),VE=Pn("sp"),DE=Pn("rtg"),OE=Pn("rtc");function ME(t,e=mt){Ea("ec",t,e)}const xE="components";function LE(t,e){return UE(xE,t,!0,e)||t}const FE=Symbol.for("v-ndc");function UE(t,e,n=!0,r=!1){const s=st||mt;if(s){const i=s.type;{const c=Pv(i,!1);if(c&&(c===e||c===Ut(e)||c===da(Ut(e))))return i}const o=jh(s[t]||i[t],e)||jh(s.appContext[t],e);return!o&&r?i:o}}function jh(t,e){return t&&(t[e]||t[Ut(e)]||t[da(Ut(e))])}function c0(t,e,n,r){let s;const i=n,o=ae(t);if(o||He(t)){const c=o&&Qn(t);let l=!1,u=!1;c&&(l=!Lt(t),u=nr(t),t=ma(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Lo(tt(t[f])):tt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function l0(t,e,n={},r,s){if(st.ce||st.parent&&rs(st.parent)&&st.parent.ce)return n.name=e,hs(),Wc(Nt,null,[It("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),hs();const o=i&&em(i(n)),c=n.key||o&&o.key,l=Wc(Nt,{key:(c&&!bn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function em(t){return t.some(e=>Ri(e)?!(e.type===In||e.type===Nt&&!em(e.children)):!0)?t:null}const jc=t=>t?vm(t)?Ia(t):jc(t.parent):null,li=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>nm(t),$forceUpdate:t=>t.f||(t.f=()=>{Hl(t.update)}),$nextTick:t=>t.n||(t.n=ql.bind(t.proxy)),$watch:t=>av.bind(t)}),hc=(t,e)=>t!==be&&!t.__isScriptSetup&&we(t,e),BE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hc(r,e))return o[e]=1,r[e];if(s!==be&&we(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&we(u,e))return o[e]=3,i[e];if(n!==be&&we(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const f=li[e];let p,m;if(f)return e==="$attrs"&&dt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==be&&we(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,we(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hc(s,e)?(s[e]=n,!0):r!==be&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==be&&c[0]!=="$"&&we(t,c)||hc(e,c)||(l=i[0])&&we(l,c)||we(r,c)||we(li,c)||we(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $h(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $c=!0;function jE(t){const e=nm(t),n=t.proxy,r=t.ctx;$c=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:V,deactivated:k,beforeDestroy:D,beforeUnmount:U,destroyed:H,unmounted:W,render:ne,renderTracked:de,renderTriggered:w,errorCaptured:y,serverPrefetch:E,expose:R,inheritAttrs:A,components:S,directives:T,filters:xe}=e;if(u&&$E(u,r,null),o)for(const he in o){const ye=o[he];le(ye)&&(r[he]=ye.bind(n))}if(s){const he=s.call(n,n);Oe(he)&&(t.data=ws(he))}if($c=!0,i)for(const he in i){const ye=i[he],wt=le(ye)?ye.bind(n,n):le(ye.get)?ye.get.bind(n,n):tn,Gt=!le(ye)&&le(ye.set)?ye.set.bind(n):tn,St=nt({get:wt,set:Gt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>St.value,set:Xe=>St.value=Xe})}if(c)for(const he in c)tm(c[he],r,n,he);if(l){const he=le(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ye=>{wo(ye,he[ye])})}f&&qh(f,t,"c");function Ce(he,ye){ae(ye)?ye.forEach(wt=>he(wt.bind(n))):ye&&he(ye.bind(n))}if(Ce(PE,p),Ce(Xp,m),Ce(CE,_),Ce(kE,C),Ce(RE,V),Ce(SE,k),Ce(ME,y),Ce(OE,de),Ce(DE,w),Ce(NE,U),Ce(Zp,W),Ce(VE,E),ae(R))if(R.length){const he=t.exposed||(t.exposed={});R.forEach(ye=>{Object.defineProperty(he,ye,{get:()=>n[ye],set:wt=>n[ye]=wt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===tn&&(t.render=ne),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),T&&(t.directives=T),E&&Qp(t)}function $E(t,e,n=tn){ae(t)&&(t=qc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qh(t,e,n){ln(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){let s=r.includes(".")?mm(n,r):()=>n[r];if(He(t)){const i=e[t];le(i)&&ss(s,i)}else if(le(t))ss(s,t.bind(n));else if(Oe(t))if(ae(t))t.forEach(i=>tm(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&ss(s,i,t)}}function nm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>$o(l,u,o,!0)),$o(l,e,o)),Oe(e)&&i.set(e,l),l}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=qE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const qE={data:Hh,props:zh,emits:zh,methods:Js,computed:Js,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Js,directives:Js,watch:zE,provide:Hh,inject:HE};function Hh(t,e){return e?t?function(){return gt(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function HE(t,e){return Js(qc(t),qc(e))}function qc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?gt(Object.create(null),t,e):e}function zh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:gt(Object.create(null),$h(t),$h(e??{})):e}function zE(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function rm(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WE=0;function KE(t,e){return function(r,s=null){le(r)||(r=gt({},r)),s!=null&&!Oe(s)&&(s=null);const i=rm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:WE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&le(f.install)?(o.add(f),f.install(u,...p)):le(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||It(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Ia(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(ln(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Rr;Rr=u;try{return f()}finally{Rr=p}}};return u}}let Rr=null;function wo(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=Ql();if(r||Rr){let s=Rr?Rr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function GE(){return!!(Ql()||Rr)}const sm={},im=()=>Object.create(sm),om=t=>Object.getPrototypeOf(t)===sm;function QE(t,e,n,r=!1){const s={},i=im();t.propsDefaults=Object.create(null),am(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function YE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(va(t.emitsOptions,m))continue;const _=e[m];if(l)if(we(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const C=Ut(m);s[C]=Hc(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{am(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!we(e,p)&&((f=Or(p))===p||!we(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Hc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!we(e,p))&&(delete i[p],u=!0)}u&&mn(t.attrs,"set","")}function am(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ii(l))continue;const u=e[l];let f;s&&we(s,f=Ut(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:va(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Te(n),u=c||be;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Hc(s,l,p,u[p],t,!we(u,p))}}return o}function Hc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=we(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ji(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const JE=new WeakMap;function cm(t,e,n=!1){const r=n?JE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!le(t)){const f=p=>{l=!0;const[m,_]=cm(p,e,!0);gt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Oe(t)&&r.set(t,es),es;if(ae(i))for(let f=0;f<i.length;f++){const p=Ut(i[f]);Wh(p)&&(o[p]=be)}else if(i)for(const f in i){const p=Ut(f);if(Wh(p)){const m=i[f],_=o[p]=ae(m)||le(m)?{type:m}:gt({},m),C=_.type;let V=!1,k=!0;if(ae(C))for(let D=0;D<C.length;++D){const U=C[D],H=le(U)&&U.name;if(H==="Boolean"){V=!0;break}else H==="String"&&(k=!1)}else V=le(C)&&C.name==="Boolean";_[0]=V,_[1]=k,(V||we(_,"default"))&&c.push(p)}}const u=[o,c];return Oe(t)&&r.set(t,u),u}function Wh(t){return t[0]!=="$"&&!ii(t)}const Wl=t=>t==="_"||t==="_ctx"||t==="$stable",Kl=t=>ae(t)?t.map(en):[en(t)],XE=(t,e,n)=>{if(e._n)return e;const r=Bc((...s)=>Kl(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wl(s))continue;const i=t[s];if(le(i))e[s]=XE(s,i,r);else if(i!=null){const o=Kl(i);e[s]=()=>o}}},um=(t,e)=>{const n=Kl(e);t.slots.default=()=>n},hm=(t,e,n)=>{for(const r in e)(n||!Wl(r))&&(t[r]=e[r])},ZE=(t,e,n)=>{const r=t.slots=im();if(t.vnode.shapeFlag&32){const s=e._;s?(hm(r,e,n),n&&_p(r,"_",s,!0)):lm(e,r)}else e&&um(t,e)},ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:hm(s,e,n):(i=!e.$stable,lm(e,s)),o=e}else e&&(um(t,e),o={default:1});if(i)for(const c in s)!Wl(c)&&o[c]==null&&delete s[c]},kt=mv;function tv(t){return nv(t)}function nv(t,e){const n=pa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=tn,insertStaticContent:C}=t,V=(v,I,b,x=null,B=null,O=null,K=void 0,q=null,j=!!I.dynamicChildren)=>{if(v===I)return;v&&!Gs(v,I)&&(x=M(v),Xe(v,B,O,!0),v=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:$,ref:re,shapeFlag:Q}=I;switch($){case Ta:k(v,I,b,x);break;case In:D(v,I,b,x);break;case dc:v==null&&U(I,b,x,K);break;case Nt:S(v,I,b,x,B,O,K,q,j);break;default:Q&1?ne(v,I,b,x,B,O,K,q,j):Q&6?T(v,I,b,x,B,O,K,q,j):(Q&64||Q&128)&&$.process(v,I,b,x,B,O,K,q,j,Z)}re!=null&&B?ci(re,v&&v.ref,O,I||v,!I):re==null&&v&&v.ref!=null&&ci(v.ref,null,O,v,!0)},k=(v,I,b,x)=>{if(v==null)r(I.el=c(I.children),b,x);else{const B=I.el=v.el;I.children!==v.children&&u(B,I.children)}},D=(v,I,b,x)=>{v==null?r(I.el=l(I.children||""),b,x):I.el=v.el},U=(v,I,b,x)=>{[v.el,v.anchor]=C(v.children,I,b,x,v.el,v.anchor)},H=({el:v,anchor:I},b,x)=>{let B;for(;v&&v!==I;)B=m(v),r(v,b,x),v=B;r(I,b,x)},W=({el:v,anchor:I})=>{let b;for(;v&&v!==I;)b=m(v),s(v),v=b;s(I)},ne=(v,I,b,x,B,O,K,q,j)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),v==null?de(I,b,x,B,O,K,q,j):E(v,I,B,O,K,q,j)},de=(v,I,b,x,B,O,K,q)=>{let j,$;const{props:re,shapeFlag:Q,transition:te,dirs:se}=v;if(j=v.el=o(v.type,O,re&&re.is,re),Q&8?f(j,v.children):Q&16&&y(v.children,j,null,x,B,fc(v,O),K,q),se&&yr(v,null,x,"created"),w(j,v,v.scopeId,K,x),re){for(const Se in re)Se!=="value"&&!ii(Se)&&i(j,Se,null,re[Se],O,x);"value"in re&&i(j,"value",null,re.value,O),($=re.onVnodeBeforeMount)&&Jt($,x,v)}se&&yr(v,null,x,"beforeMount");const pe=rv(B,te);pe&&te.beforeEnter(j),r(j,I,b),(($=re&&re.onVnodeMounted)||pe||se)&&kt(()=>{$&&Jt($,x,v),pe&&te.enter(j),se&&yr(v,null,x,"mounted")},B)},w=(v,I,b,x,B)=>{if(b&&_(v,b),x)for(let O=0;O<x.length;O++)_(v,x[O]);if(B){let O=B.subTree;if(I===O||_m(O.type)&&(O.ssContent===I||O.ssFallback===I)){const K=B.vnode;w(v,K,K.scopeId,K.slotScopeIds,B.parent)}}},y=(v,I,b,x,B,O,K,q,j=0)=>{for(let $=j;$<v.length;$++){const re=v[$]=q?jn(v[$]):en(v[$]);V(null,re,I,b,x,B,O,K,q)}},E=(v,I,b,x,B,O,K)=>{const q=I.el=v.el;let{patchFlag:j,dynamicChildren:$,dirs:re}=I;j|=v.patchFlag&16;const Q=v.props||be,te=I.props||be;let se;if(b&&Er(b,!1),(se=te.onVnodeBeforeUpdate)&&Jt(se,b,I,v),re&&yr(I,v,b,"beforeUpdate"),b&&Er(b,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(q,""),$?R(v.dynamicChildren,$,q,b,x,fc(I,B),O):K||ye(v,I,q,null,b,x,fc(I,B),O,!1),j>0){if(j&16)A(q,Q,te,b,B);else if(j&2&&Q.class!==te.class&&i(q,"class",null,te.class,B),j&4&&i(q,"style",Q.style,te.style,B),j&8){const pe=I.dynamicProps;for(let Se=0;Se<pe.length;Se++){const ve=pe[Se],ct=Q[ve],lt=te[ve];(lt!==ct||ve==="value")&&i(q,ve,ct,lt,B,b)}}j&1&&v.children!==I.children&&f(q,I.children)}else!K&&$==null&&A(q,Q,te,b,B);((se=te.onVnodeUpdated)||re)&&kt(()=>{se&&Jt(se,b,I,v),re&&yr(I,v,b,"updated")},x)},R=(v,I,b,x,B,O,K)=>{for(let q=0;q<I.length;q++){const j=v[q],$=I[q],re=j.el&&(j.type===Nt||!Gs(j,$)||j.shapeFlag&198)?p(j.el):b;V(j,$,re,null,x,B,O,K,!0)}},A=(v,I,b,x,B)=>{if(I!==b){if(I!==be)for(const O in I)!ii(O)&&!(O in b)&&i(v,O,I[O],null,B,x);for(const O in b){if(ii(O))continue;const K=b[O],q=I[O];K!==q&&O!=="value"&&i(v,O,q,K,B,x)}"value"in b&&i(v,"value",I.value,b.value,B)}},S=(v,I,b,x,B,O,K,q,j)=>{const $=I.el=v?v.el:c(""),re=I.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:se}=I;se&&(q=q?q.concat(se):se),v==null?(r($,b,x),r(re,b,x),y(I.children||[],b,re,B,O,K,q,j)):Q>0&&Q&64&&te&&v.dynamicChildren?(R(v.dynamicChildren,te,b,B,O,K,q),(I.key!=null||B&&I===B.subTree)&&fm(v,I,!0)):ye(v,I,b,re,B,O,K,q,j)},T=(v,I,b,x,B,O,K,q,j)=>{I.slotScopeIds=q,v==null?I.shapeFlag&512?B.ctx.activate(I,b,x,K,j):xe(I,b,x,B,O,K,j):ot(v,I,j)},xe=(v,I,b,x,B,O,K)=>{const q=v.component=wv(v,x,B);if(Yp(v)&&(q.ctx.renderer=Z),Av(q,!1,K),q.asyncDep){if(B&&B.registerDep(q,Ce,K),!v.el){const j=q.subTree=It(In);D(null,j,I,b),v.placeholder=j.el}}else Ce(q,v,I,b,B,O,K)},ot=(v,I,b)=>{const x=I.component=v.component;if(dv(v,I,b))if(x.asyncDep&&!x.asyncResolved){he(x,I,b);return}else x.next=I,x.update();else I.el=v.el,x.vnode=I},Ce=(v,I,b,x,B,O,K)=>{const q=()=>{if(v.isMounted){let{next:Q,bu:te,u:se,parent:pe,vnode:Se}=v;{const Pt=dm(v);if(Pt){Q&&(Q.el=Se.el,he(v,Q,K)),Pt.asyncDep.then(()=>{v.isUnmounted||q()});return}}let ve=Q,ct;Er(v,!1),Q?(Q.el=Se.el,he(v,Q,K)):Q=Se,te&&Io(te),(ct=Q.props&&Q.props.onVnodeBeforeUpdate)&&Jt(ct,pe,Q,Se),Er(v,!0);const lt=Gh(v),bt=v.subTree;v.subTree=lt,V(bt,lt,p(bt.el),M(bt),v,B,O),Q.el=lt.el,ve===null&&pv(v,lt.el),se&&kt(se,B),(ct=Q.props&&Q.props.onVnodeUpdated)&&kt(()=>Jt(ct,pe,Q,Se),B)}else{let Q;const{el:te,props:se}=I,{bm:pe,m:Se,parent:ve,root:ct,type:lt}=v,bt=rs(I);Er(v,!1),pe&&Io(pe),!bt&&(Q=se&&se.onVnodeBeforeMount)&&Jt(Q,ve,I),Er(v,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(lt);const Pt=v.subTree=Gh(v);V(null,Pt,b,x,v,B,O),I.el=Pt.el}if(Se&&kt(Se,B),!bt&&(Q=se&&se.onVnodeMounted)){const Pt=I;kt(()=>Jt(Q,ve,Pt),B)}(I.shapeFlag&256||ve&&rs(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&kt(v.a,B),v.isMounted=!0,I=b=x=null}};v.scope.on();const j=v.effect=new Rp(q);v.scope.off();const $=v.update=j.run.bind(j),re=v.job=j.runIfDirty.bind(j);re.i=v,re.id=v.uid,j.scheduler=()=>Hl(re),Er(v,!0),$()},he=(v,I,b)=>{I.component=v;const x=v.vnode.props;v.vnode=I,v.next=null,YE(v,I.props,x,b),ev(v,I.children,b),vn(),Fh(v),Tn()},ye=(v,I,b,x,B,O,K,q,j=!1)=>{const $=v&&v.children,re=v?v.shapeFlag:0,Q=I.children,{patchFlag:te,shapeFlag:se}=I;if(te>0){if(te&128){Gt($,Q,b,x,B,O,K,q,j);return}else if(te&256){wt($,Q,b,x,B,O,K,q,j);return}}se&8?(re&16&&at($,B,O),Q!==$&&f(b,Q)):re&16?se&16?Gt($,Q,b,x,B,O,K,q,j):at($,B,O,!0):(re&8&&f(b,""),se&16&&y(Q,b,x,B,O,K,q,j))},wt=(v,I,b,x,B,O,K,q,j)=>{v=v||es,I=I||es;const $=v.length,re=I.length,Q=Math.min($,re);let te;for(te=0;te<Q;te++){const se=I[te]=j?jn(I[te]):en(I[te]);V(v[te],se,b,null,B,O,K,q,j)}$>re?at(v,B,O,!0,!1,Q):y(I,b,x,B,O,K,q,j,Q)},Gt=(v,I,b,x,B,O,K,q,j)=>{let $=0;const re=I.length;let Q=v.length-1,te=re-1;for(;$<=Q&&$<=te;){const se=v[$],pe=I[$]=j?jn(I[$]):en(I[$]);if(Gs(se,pe))V(se,pe,b,null,B,O,K,q,j);else break;$++}for(;$<=Q&&$<=te;){const se=v[Q],pe=I[te]=j?jn(I[te]):en(I[te]);if(Gs(se,pe))V(se,pe,b,null,B,O,K,q,j);else break;Q--,te--}if($>Q){if($<=te){const se=te+1,pe=se<re?I[se].el:x;for(;$<=te;)V(null,I[$]=j?jn(I[$]):en(I[$]),b,pe,B,O,K,q,j),$++}}else if($>te)for(;$<=Q;)Xe(v[$],B,O,!0),$++;else{const se=$,pe=$,Se=new Map;for($=pe;$<=te;$++){const Ze=I[$]=j?jn(I[$]):en(I[$]);Ze.key!=null&&Se.set(Ze.key,$)}let ve,ct=0;const lt=te-pe+1;let bt=!1,Pt=0;const jt=new Array(lt);for($=0;$<lt;$++)jt[$]=0;for($=se;$<=Q;$++){const Ze=v[$];if(ct>=lt){Xe(Ze,B,O,!0);continue}let Ge;if(Ze.key!=null)Ge=Se.get(Ze.key);else for(ve=pe;ve<=te;ve++)if(jt[ve-pe]===0&&Gs(Ze,I[ve])){Ge=ve;break}Ge===void 0?Xe(Ze,B,O,!0):(jt[Ge-pe]=$+1,Ge>=Pt?Pt=Ge:bt=!0,V(Ze,I[Ge],b,null,B,O,K,q,j),ct++)}const Ur=bt?sv(jt):es;for(ve=Ur.length-1,$=lt-1;$>=0;$--){const Ze=pe+$,Ge=I[Ze],Vs=I[Ze+1],dr=Ze+1<re?Vs.el||Vs.placeholder:x;jt[$]===0?V(null,Ge,b,dr,B,O,K,q,j):bt&&(ve<0||$!==Ur[ve]?St(Ge,b,dr,2):ve--)}}},St=(v,I,b,x,B=null)=>{const{el:O,type:K,transition:q,children:j,shapeFlag:$}=v;if($&6){St(v.component.subTree,I,b,x);return}if($&128){v.suspense.move(I,b,x);return}if($&64){K.move(v,I,b,Z);return}if(K===Nt){r(O,I,b);for(let Q=0;Q<j.length;Q++)St(j[Q],I,b,x);r(v.anchor,I,b);return}if(K===dc){H(v,I,b);return}if(x!==2&&$&1&&q)if(x===0)q.beforeEnter(O),r(O,I,b),kt(()=>q.enter(O),B);else{const{leave:Q,delayLeave:te,afterLeave:se}=q,pe=()=>{v.ctx.isUnmounted?s(O):r(O,I,b)},Se=()=>{O._isLeaving&&O[AE](!0),Q(O,()=>{pe(),se&&se()})};te?te(O,pe,Se):Se()}else r(O,I,b)},Xe=(v,I,b,x=!1,B=!1)=>{const{type:O,props:K,ref:q,children:j,dynamicChildren:$,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:se}=v;if(Q===-2&&(B=!1),q!=null&&(vn(),ci(q,null,b,v,!0),Tn()),se!=null&&(I.renderCache[se]=void 0),re&256){I.ctx.deactivate(v);return}const pe=re&1&&te,Se=!rs(v);let ve;if(Se&&(ve=K&&K.onVnodeBeforeUnmount)&&Jt(ve,I,v),re&6)kn(v.component,b,x);else{if(re&128){v.suspense.unmount(b,x);return}pe&&yr(v,null,I,"beforeUnmount"),re&64?v.type.remove(v,I,b,Z,x):$&&!$.hasOnce&&(O!==Nt||Q>0&&Q&64)?at($,I,b,!1,!0):(O===Nt&&Q&384||!B&&re&16)&&at(j,I,b),x&&hn(v)}(Se&&(ve=K&&K.onVnodeUnmounted)||pe)&&kt(()=>{ve&&Jt(ve,I,v),pe&&yr(v,null,I,"unmounted")},b)},hn=v=>{const{type:I,el:b,anchor:x,transition:B}=v;if(I===Nt){Bt(b,x);return}if(I===dc){W(v);return}const O=()=>{s(b),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(v.shapeFlag&1&&B&&!B.persisted){const{leave:K,delayLeave:q}=B,j=()=>K(b,O);q?q(v.el,O,j):j()}else O()},Bt=(v,I)=>{let b;for(;v!==I;)b=m(v),s(v),v=b;s(I)},kn=(v,I,b)=>{const{bum:x,scope:B,job:O,subTree:K,um:q,m:j,a:$}=v;Kh(j),Kh($),x&&Io(x),B.stop(),O&&(O.flags|=8,Xe(K,v,I,b)),q&&kt(q,I),kt(()=>{v.isUnmounted=!0},I)},at=(v,I,b,x=!1,B=!1,O=0)=>{for(let K=O;K<v.length;K++)Xe(v[K],I,b,x,B)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),b=I&&I[IE];return b?m(b):I};let Y=!1;const G=(v,I,b)=>{v==null?I._vnode&&Xe(I._vnode,null,null,!0):V(I._vnode||null,v,I,null,null,null,b),I._vnode=v,Y||(Y=!0,Fh(),Wp(),Y=!1)},Z={p:V,um:Xe,m:St,r:hn,mt:xe,mc:y,pc:ye,pbc:R,n:M,o:t};return{render:G,hydrate:void 0,createApp:KE(G)}}function fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fm(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&fm(o,c)),c.type===Ta&&c.patchFlag!==-1&&(c.el=o.el),c.type===In&&!c.el&&(c.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dm(e)}function Kh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const iv=Symbol.for("v-scx"),ov=()=>Ft(iv);function ss(t,e,n){return pm(t,e,n)}function pm(t,e,n=be){const{immediate:r,deep:s,flush:i,once:o}=n,c=gt({},n),l=e&&r||!e&&i!=="post";let u;if(Si){if(i==="sync"){const _=ov();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=tn,_.resume=tn,_.pause=tn,_}}const f=mt;c.call=(_,C,V)=>ln(_,f,C,V);let p=!1;i==="post"?c.scheduler=_=>{kt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():Hl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=yE(t,e,c);return Si&&(u?u.push(m):l&&m()),m}function av(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?mm(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const o=ji(this),c=pm(s,i.bind(r),n);return o(),c}function mm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function lv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&cv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>He(f)?f.trim():f)),o.number&&(s=n.map(xc)));let c,l=r[c=oc(e)]||r[c=oc(Ut(e))];!l&&i&&(l=r[c=oc(Or(e))]),l&&ln(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ln(u,t,6,s)}}const uv=new WeakMap;function gm(t,e,n=!1){const r=n?uv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!le(t)){const l=u=>{const f=gm(u,e,!0);f&&(c=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):gt(o,i),Oe(t)&&r.set(t,o),o)}function va(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Or(e))||we(t,e))}function Gh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:V}=t,k=Bo(t);let D,U;try{if(n.shapeFlag&4){const W=s||r,ne=W;D=en(u.call(ne,W,f,p,_,m,C)),U=c}else{const W=e;D=en(W.length>1?W(p,{attrs:c,slots:o,emit:l}):W(p,null)),U=e.props?c:hv(c)}}catch(W){ui.length=0,_a(W,t,1),D=It(In)}let H=D;if(U&&V!==!1){const W=Object.keys(U),{shapeFlag:ne}=H;W.length&&ne&7&&(i&&W.some(Nl)&&(U=fv(U,i)),H=fs(H,U,!1,!0))}return n.dirs&&(H=fs(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&zl(H,n.transition),D=H,Bo(k),D}const hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},fv=(t,e)=>{const n={};for(const r in t)(!Nl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!va(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function pv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const _m=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):TE(t)}const Nt=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),dc=Symbol.for("v-stc"),ui=[];let Vt=null;function hs(t=!1){ui.push(Vt=t?null:[])}function gv(){ui.pop(),Vt=ui[ui.length-1]||null}let Ai=1;function qo(t,e=!1){Ai+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function ym(t){return t.dynamicChildren=Ai>0?Vt||es:null,gv(),Ai>0&&Vt&&Vt.push(t),t}function zc(t,e,n,r,s,i){return ym(vt(t,e,n,r,s,i,!0))}function Wc(t,e,n,r,s){return ym(It(t,e,n,r,s,!0))}function Ri(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const Em=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Ue(t)||le(t)?{i:st,r:t,k:e,f:!!n}:t:null);function vt(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Em(e),ref:e&&Ao(e),scopeId:Gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return c?(Gl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Ai>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const It=_v;function _v(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FE)&&(t=In),Ri(t)){const c=fs(t,e,!0);return n&&Gl(c,n),Ai>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(Cv(t)&&(t=t.__vccOpts),e){e=yv(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=vi(c)),Oe(l)&&($l(l)&&!ae(l)&&(l=gt({},l)),e.style=Ol(l))}const o=He(t)?1:_m(t)?128:wE(t)?64:Oe(t)?4:le(t)?2:0;return vt(t,e,n,r,s,o,i,!0)}function yv(t){return t?$l(t)||om(t)?gt({},t):t:null}function fs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?vv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Em(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(Ao(e)):[i,Ao(e)]:Ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&zl(f,l.clone(f)),f}function Kc(t=" ",e=0){return It(Ta,null,t,e)}function Ev(t="",e=!1){return e?(hs(),Wc(In,null,t)):It(In,null,t)}function en(t){return t==null||typeof t=="boolean"?It(In):ae(t)?It(Nt,null,t.slice()):Ri(t)?jn(t):It(Ta,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function Gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!om(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Kc(e)]):n=8);t.children=e,t.shapeFlag|=n}function vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vi([e.class,r.class]));else if(s==="style")e.style=Ol([e.style,r.style]);else if(ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){ln(t,e,7,[n,r])}const Tv=rm();let Iv=0;function wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tv,i={uid:Iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cm(r,s),emitsOptions:gm(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lv.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const Ql=()=>mt||st;let Ho,Gc;{const t=pa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Gc=e("__VUE_SSR_SETTERS__",n=>Si=n)}const ji=t=>{const e=mt;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},Yh=()=>{mt&&mt.scope.off(),Ho(null)};function vm(t){return t.vnode.shapeFlag&4}let Si=!1;function Av(t,e=!1,n=!1){e&&Gc(e);const{props:r,children:s}=t.vnode,i=vm(t);QE(t,r,i,e),ZE(t,s,n||e);const o=i?Rv(t,e):void 0;return e&&Gc(!1),o}function Rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,BE);const{setup:r}=n;if(r){vn();const s=t.setupContext=r.length>1?bv(t):null,i=ji(t),o=Bi(r,t,0,[t.props,s]),c=pp(o);if(Tn(),i(),(c||t.sp)&&!rs(t)&&Qp(t),c){if(o.then(Yh,Yh),e)return o.then(l=>{Jh(t,l)}).catch(l=>{_a(l,t,0)});t.asyncDep=o}else Jh(t,o)}else Tm(t)}function Jh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=qp(e)),Tm(t)}function Tm(t,e,n){const r=t.type;t.render||(t.render=r.render||tn);{const s=ji(t);vn();try{jE(t)}finally{Tn(),s()}}}const Sv={get(t,e){return dt(t,"get",""),t[e]}};function bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sv),slots:t.slots,emit:t.emit,expose:e}}function Ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qp(ga(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}})):t.proxy}function Pv(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function Cv(t){return le(t)&&"__vccOpts"in t}const nt=(t,e)=>gE(t,e,Si);function Im(t,e,n){const r=(i,o,c)=>{qo(-1);try{return It(i,o,c)}finally{qo(1)}},s=arguments.length;return s===2?Oe(e)&&!ae(e)?Ri(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ri(n)&&(n=[n]),r(t,e,n))}const kv="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qc;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{Qc=Xh.createPolicy("vue",{createHTML:t=>t})}catch{}const wm=Qc?t=>Qc.createHTML(t):t=>t,Nv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,Zh=pn&&pn.createElement("template"),Dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pn.createElementNS(Nv,t):e==="mathml"?pn.createElementNS(Vv,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=wm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ov=Symbol("_vtc");function Mv(t,e,n){const r=t[Ov];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ef=Symbol("_vod"),xv=Symbol("_vsh"),Lv=Symbol(""),Fv=/(?:^|;)\s*display\s*:/;function Uv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ro(r,c,"")}else for(const o in e)n[o]==null&&Ro(r,o,"");for(const o in n)o==="display"&&(i=!0),Ro(r,o,n[o])}else if(s){if(e!==n){const o=r[Lv];o&&(n+=";"+o),r.cssText=n,i=Fv.test(n)}}else e&&t.removeAttribute("style");ef in t&&(t[ef]=i?r.display:"",t[xv]&&(r.display="none"))}const tf=/\s*!important$/;function Ro(t,e,n){if(ae(n))n.forEach(r=>Ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bv(t,e);tf.test(n)?t.setProperty(Or(r),n.replace(tf,""),"important"):t[r]=n}}const nf=["Webkit","Moz","ms"],pc={};function Bv(t,e){const n=pc[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return pc[e]=r;r=da(r);for(let s=0;s<nf.length;s++){const i=nf[s]+r;if(i in t)return pc[e]=i}return e}const rf="http://www.w3.org/1999/xlink";function sf(t,e,n,r,s,i=Hy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rf,e.slice(6,e.length)):t.setAttributeNS(rf,e,n):n==null||i&&!yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bn(n)?String(n):n)}function of(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function jv(t,e,n,r){t.removeEventListener(e,n,r)}const af=Symbol("_vei");function $v(t,e,n,r,s=null){const i=t[af]||(t[af]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=qv(e);if(r){const u=i[e]=Wv(r,s);Kr(t,c,u,l)}else o&&(jv(t,c,o,l),i[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function qv(t){let e;if(cf.test(t)){e={};let r;for(;r=t.match(cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let mc=0;const Hv=Promise.resolve(),zv=()=>mc||(Hv.then(()=>mc=0),mc=Date.now());function Wv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(Kv(r,n.value),e,5,[r])};return n.value=t,n.attached=zv(),n}function Kv(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Mv(t,r,o):e==="style"?Uv(t,n,r):ua(e)?Nl(e)||$v(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(t,e,r,o))?(of(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?of(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sf(t,e,r,o))};function Qv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lf(e)&&He(n)?!1:e in t}const uf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Io(e,n):e};function Yv(t){t.target.composing=!0}function hf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gc=Symbol("_assign"),u0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[gc]=uf(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=xc(c)),t[gc](c)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",Yv),Kr(t,"compositionend",hf),Kr(t,"change",hf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[gc]=uf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?xc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Jv=["ctrl","shift","alt","meta"],Xv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jv.some(n=>t[`${n}Key`]&&!e.includes(n))},Zv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Xv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},eT=gt({patchProp:Gv},Dv);let ff;function tT(){return ff||(ff=tv(eT))}const nT=((...t)=>{const e=tT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sT(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function rT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sT(t){return He(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Am;const wa=t=>Am=t,Rm=Symbol();function Yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hi||(hi={}));function iT(){const t=wp(!0),e=t.run(()=>us({}));let n=[],r=[];const s=ga({install(i){wa(s),s._a=i,i.provide(Rm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Sm=()=>{};function df(t,e,n,r=Sm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ml()&&Ap(s),s}function Hr(t,...e){t.slice().forEach(n=>{n(...e)})}const oT=t=>t(),pf=Symbol(),_c=Symbol();function Jc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yc(s)&&Yc(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Qn(r)?t[n]=Jc(s,r):t[n]=r}return t}const aT=Symbol();function cT(t){return!Yc(t)||!Object.prototype.hasOwnProperty.call(t,aT)}const{assign:Un}=Object;function lT(t){return!!(Ue(t)&&t.effect)}function uT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=fE(n.state.value[t]);return Un(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=ga(nt(()=>{wa(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=bm(t,u,e,n,r,!0),l}function bm(t,e,n={},r,s,i){let o;const c=Un({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],_;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),us({});let V;function k(y){let E;u=f=!1,typeof y=="function"?(y(r.state.value[t]),E={type:hi.patchFunction,storeId:t,events:_}):(Jc(r.state.value[t],y),E={type:hi.patchObject,payload:y,storeId:t,events:_});const R=V=Symbol();ql().then(()=>{V===R&&(u=!0)}),f=!0,Hr(p,E,r.state.value[t])}const D=i?function(){const{state:E}=n,R=E?E():{};this.$patch(A=>{Un(A,R)})}:Sm;function U(){o.stop(),p=[],m=[],r._s.delete(t)}const H=(y,E="")=>{if(pf in y)return y[_c]=E,y;const R=function(){wa(r);const A=Array.from(arguments),S=[],T=[];function xe(he){S.push(he)}function ot(he){T.push(he)}Hr(m,{args:A,name:R[_c],store:ne,after:xe,onError:ot});let Ce;try{Ce=y.apply(this&&this.$id===t?this:ne,A)}catch(he){throw Hr(T,he),he}return Ce instanceof Promise?Ce.then(he=>(Hr(S,he),he)).catch(he=>(Hr(T,he),Promise.reject(he))):(Hr(S,Ce),Ce)};return R[pf]=!0,R[_c]=E,R},W={_p:r,$id:t,$onAction:df.bind(null,m),$patch:k,$reset:D,$subscribe(y,E={}){const R=df(p,y,E.detached,()=>A()),A=o.run(()=>ss(()=>r.state.value[t],S=>{(E.flush==="sync"?f:u)&&y({storeId:t,type:hi.direct,events:_},S)},Un({},l,E)));return R},$dispose:U},ne=ws(W);r._s.set(t,ne);const w=(r._a&&r._a.runWithContext||oT)(()=>r._e.run(()=>(o=wp()).run(()=>e({action:H}))));for(const y in w){const E=w[y];if(Ue(E)&&!lT(E)||Qn(E))i||(C&&cT(E)&&(Ue(E)?E.value=C[y]:Jc(E,C[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const R=H(E,y);w[y]=R,c.actions[y]=E}}return Un(ne,w),Un(Te(ne),w),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:y=>{k(E=>{Un(E,y)})}}),r._p.forEach(y=>{Un(ne,o.run(()=>y({store:ne,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(ne.$state,C),u=!0,f=!0,ne}/*! #__NO_SIDE_EFFECTS__ */function Pm(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=GE();return o=o||(l?Ft(Rm,null):null),o&&wa(o),o=Am,o._s.has(t)||(s?bm(t,e,r,o):uT(t,r,o)),o._s.get(t)}return i.$id=t,i}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function Cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cm(t.default)}const Ie=Object.assign;function yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const fi=()=>{},zt=Array.isArray,km=/#/g,fT=/&/g,dT=/\//g,pT=/=/g,mT=/\?/g,Nm=/\+/g,gT=/%5B/g,_T=/%5D/g,Vm=/%5E/g,yT=/%60/g,Dm=/%7B/g,ET=/%7C/g,Om=/%7D/g,vT=/%20/g;function Yl(t){return encodeURI(""+t).replace(ET,"|").replace(gT,"[").replace(_T,"]")}function TT(t){return Yl(t).replace(Dm,"{").replace(Om,"}").replace(Vm,"^")}function Xc(t){return Yl(t).replace(Nm,"%2B").replace(vT,"+").replace(km,"%23").replace(fT,"%26").replace(yT,"`").replace(Dm,"{").replace(Om,"}").replace(Vm,"^")}function IT(t){return Xc(t).replace(pT,"%3D")}function wT(t){return Yl(t).replace(km,"%23").replace(mT,"%3F")}function AT(t){return t==null?"":wT(t).replace(dT,"%2F")}function bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const RT=/\/$/,ST=t=>t.replace(RT,"");function Ec(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=kT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:bi(o)}}function bT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ds(e.matched[r],n.matched[s])&&Mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CT(t[n],e[n]))return!1;return!0}function CT(t,e){return zt(t)?gf(t,e):zt(e)?gf(e,t):t===e}function gf(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(di||(di={}));function NT(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ST(t)}const VT=/^[^#]+#/;function DT(t,e){return t.replace(VT,"#")+e}function OT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Aa=()=>({left:window.scrollX,top:window.scrollY});function MT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _f(t,e){return(history.state?history.state.position-e:-1)+t}const Zc=new Map;function xT(t,e){Zc.set(t,e)}function LT(t){const e=Zc.get(t);return Zc.delete(t),e}let FT=()=>location.protocol+"//"+location.host;function xm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),mf(l,"")}return mf(n,t)+r+s}function UT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=xm(t,location),C=n.value,V=e.value;let k=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}k=V?m.position-V.position:0}else r(_);s.forEach(D=>{D(n.value,C,{delta:k,type:Pi.pop,direction:k?k>0?di.forward:di.back:di.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Ie({},m.state,{scroll:Aa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function yf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Aa():null}}function BT(t){const{history:e,location:n}=window,r={value:xm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:FT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Ie({},e.state,yf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Ie({},s.value,e.state,{forward:l,scroll:Aa()});i(f.current,f,!0);const p=Ie({},yf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function jT(t){t=NT(t);const e=BT(t),n=UT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:DT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $T(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jT(t)}function qT(t){return typeof t=="string"||t&&typeof t=="object"}function Lm(t){return typeof t=="string"||typeof t=="symbol"}const Fm=Symbol("");var Ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ef||(Ef={}));function ps(t,e){return Ie(new Error,{type:t,[Fm]:!0},e)}function dn(t,e){return t instanceof Error&&Fm in t&&(e==null||!!(t.type&e))}const vf="[^/]+?",HT={sensitive:!1,strict:!1,start:!0,end:!0},zT=/[.+*?^${}()[\]/\\]/g;function WT(t,e){const n=Ie({},HT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(zT,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:V,optional:k,regexp:D}=m;i.push({name:C,repeatable:V,optional:k});const U=D||vf;if(U!==vf){_+=10;try{new RegExp(`(${U})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${C}" (${U}): `+W.message)}}let H=V?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(H=k&&u.length<2?`(?:/${H})`:"/"+H),k&&(H+="?"),s+=H,_+=20,k&&(_+=-8),V&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:V,optional:k}=_,D=C in u?u[C]:"";if(zt(D)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const U=zt(D)?D.join("/"):D;if(!U)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function KT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Um(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=KT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Tf(r))return 1;if(Tf(s))return-1}return s.length-r.length}function Tf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GT={type:0,value:""},QT=/[a-zA-Z0-9_]/;function YT(t){if(!t)return[[]];if(t==="/")return[[GT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:QT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function JT(t,e,n){const r=WT(YT(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XT(t,e){const n=[],r=new Map;e=Rf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,V=wf(p);V.aliasOf=_&&_.record;const k=Rf(e,p),D=[V];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of W)D.push(wf(Ie({},V,{components:_?_.record.components:V.components,path:ne,aliasOf:_?_.record:V})))}let U,H;for(const W of D){const{path:ne}=W;if(m&&ne[0]!=="/"){const de=m.record.path,w=de[de.length-1]==="/"?"":"/";W.path=m.record.path+(ne&&w+ne)}if(U=JT(W,m,k),_?_.alias.push(U):(H=H||U,H!==U&&H.alias.push(U),C&&p.name&&!Af(U)&&o(p.name)),Bm(U)&&l(U),V.children){const de=V.children;for(let w=0;w<de.length;w++)i(de[w],U,_&&_.children[w])}_=_||U}return H?()=>{o(H)}:fi}function o(p){if(Lm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=tI(p,n);n.splice(m,0,p),p.record.name&&!Af(p)&&r.set(p.record.name,p)}function u(p,m){let _,C={},V,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ps(1,{location:p});k=_.record.name,C=Ie(If(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&If(p.params,_.keys.map(H=>H.name))),V=_.stringify(C)}else if(p.path!=null)V=p.path,_=n.find(H=>H.re.test(V)),_&&(C=_.parse(V),k=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw ps(1,{location:p,currentLocation:m});k=_.record.name,C=Ie({},m.params,p.params),V=_.stringify(C)}const D=[];let U=_;for(;U;)D.unshift(U.record),U=U.parent;return{name:k,path:V,params:C,matched:D,meta:eI(D)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function If(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ZT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ZT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eI(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Rf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Um(t,e[i])<0?r=i:n=i+1}const s=nI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function nI(t){let e=t;for(;e=e.parent;)if(Bm(e)&&Um(t,e)===0)return e}function Bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function rI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Nm," "),o=i.indexOf("="),c=bi(o<0?i:i.slice(0,o)),l=o<0?null:bi(i.slice(o+1));if(c in e){let u=e[c];zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Sf(t){let e="";for(let n in t){const r=t[n];if(n=IT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Xc(i)):[r&&Xc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const iI=Symbol(""),bf=Symbol(""),Ra=Symbol(""),Jl=Symbol(""),el=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(ps(4,{from:n,to:e})):m instanceof Error?l(m):qT(m)?l(ps(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function vc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Cm(l)){const f=(l.__vccOpts||l)[e];f&&i.push($n(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=hT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&$n(_,n,r,o,c,s)()}))}}return i}function Pf(t){const e=Ft(Ra),n=Ft(Jl),r=nt(()=>{const l=xt(t.to);return e.resolve(l)}),s=nt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ds.bind(null,f));if(m>-1)return m;const _=Cf(l[u-2]);return u>1&&Cf(f)===_&&p[p.length-1].path!==_?p.findIndex(ds.bind(null,l[u-2])):m}),i=nt(()=>s.value>-1&&lI(n.params,r.value.params)),o=nt(()=>s.value>-1&&s.value===n.matched.length-1&&Mm(n.params,r.value.params));function c(l={}){if(cI(l)){const u=e[xt(t.replace)?"replace":"push"](xt(t.to)).catch(fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:nt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function oI(t){return t.length===1?t[0]:t}const aI=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Pf,setup(t,{slots:e}){const n=ws(Pf(t)),{options:r}=Ft(Ra),s=nt(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&oI(e.default(n));return t.custom?i:Im("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tl=aI;function cI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t??e??n,uI=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ft(el),s=nt(()=>t.route||r.value),i=Ft(bf,0),o=nt(()=>{let u=xt(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=nt(()=>s.value.matched[o.value]);wo(bf,nt(()=>o.value+1)),wo(iI,c),wo(el,s);const l=us();return ss(()=>[l.value,c.value,t.name],([u,f,p],[m,_,C])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!ds(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Nf(n.default,{Component:m,route:u});const _=p.props[f],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=Im(m,Ie({},C,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Nf(n.default,{Component:k,route:u})||k}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hI=uI;function fI(t){const e=XT(t.routes,t),n=t.parseQuery||rI,r=t.stringifyQuery||Sf,s=t.history,i=Qs(),o=Qs(),c=Qs(),l=jp(Ln);let u=Ln;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=yc.bind(null,M=>""+M),p=yc.bind(null,AT),m=yc.bind(null,bi);function _(M,Y){let G,Z;return Lm(M)?(G=e.getRecordMatcher(M),Z=Y):Z=M,e.addRoute(Z,G)}function C(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(M=>M.record)}function k(M){return!!e.getRecordMatcher(M)}function D(M,Y){if(Y=Ie({},Y||l.value),typeof M=="string"){const b=Ec(n,M,Y.path),x=e.resolve({path:b.path},Y),B=s.createHref(b.fullPath);return Ie(b,x,{params:m(x.params),hash:bi(b.hash),redirectedFrom:void 0,href:B})}let G;if(M.path!=null)G=Ie({},M,{path:Ec(n,M.path,Y.path).path});else{const b=Ie({},M.params);for(const x in b)b[x]==null&&delete b[x];G=Ie({},M,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(G,Y),Re=M.hash||"";Z.params=f(m(Z.params));const v=bT(r,Ie({},M,{hash:TT(Re),path:Z.path})),I=s.createHref(v);return Ie({fullPath:v,hash:Re,query:r===Sf?sI(M.query):M.query||{}},Z,{redirectedFrom:void 0,href:I})}function U(M){return typeof M=="string"?Ec(n,M,l.value.path):Ie({},M)}function H(M,Y){if(u!==M)return ps(8,{from:Y,to:M})}function W(M){return w(M)}function ne(M){return W(Ie(U(M),{replace:!0}))}function de(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let Z=typeof G=="function"?G(M):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=U(Z):{path:Z},Z.params={}),Ie({query:M.query,hash:M.hash,params:Z.path!=null?{}:M.params},Z)}}function w(M,Y){const G=u=D(M),Z=l.value,Re=M.state,v=M.force,I=M.replace===!0,b=de(G);if(b)return w(Ie(U(b),{state:typeof b=="object"?Ie({},Re,b.state):Re,force:v,replace:I}),Y||G);const x=G;x.redirectedFrom=Y;let B;return!v&&PT(r,Z,G)&&(B=ps(16,{to:x,from:Z}),St(Z,Z,!0,!1)),(B?Promise.resolve(B):R(x,Z)).catch(O=>dn(O)?dn(O,2)?O:Gt(O):ye(O,x,Z)).then(O=>{if(O){if(dn(O,2))return w(Ie({replace:I},U(O.to),{state:typeof O.to=="object"?Ie({},Re,O.to.state):Re,force:v}),Y||x)}else O=S(x,Z,!0,I,Re);return A(x,Z,O),O})}function y(M,Y){const G=H(M,Y);return G?Promise.reject(G):Promise.resolve()}function E(M){const Y=Bt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function R(M,Y){let G;const[Z,Re,v]=dI(M,Y);G=vc(Z.reverse(),"beforeRouteLeave",M,Y);for(const b of Z)b.leaveGuards.forEach(x=>{G.push($n(x,M,Y))});const I=y.bind(null,M,Y);return G.push(I),at(G).then(()=>{G=[];for(const b of i.list())G.push($n(b,M,Y));return G.push(I),at(G)}).then(()=>{G=vc(Re,"beforeRouteUpdate",M,Y);for(const b of Re)b.updateGuards.forEach(x=>{G.push($n(x,M,Y))});return G.push(I),at(G)}).then(()=>{G=[];for(const b of v)if(b.beforeEnter)if(zt(b.beforeEnter))for(const x of b.beforeEnter)G.push($n(x,M,Y));else G.push($n(b.beforeEnter,M,Y));return G.push(I),at(G)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),G=vc(v,"beforeRouteEnter",M,Y,E),G.push(I),at(G))).then(()=>{G=[];for(const b of o.list())G.push($n(b,M,Y));return G.push(I),at(G)}).catch(b=>dn(b,8)?b:Promise.reject(b))}function A(M,Y,G){c.list().forEach(Z=>E(()=>Z(M,Y,G)))}function S(M,Y,G,Z,Re){const v=H(M,Y);if(v)return v;const I=Y===Ln,b=Gr?history.state:{};G&&(Z||I?s.replace(M.fullPath,Ie({scroll:I&&b&&b.scroll},Re)):s.push(M.fullPath,Re)),l.value=M,St(M,Y,G,I),Gt()}let T;function xe(){T||(T=s.listen((M,Y,G)=>{if(!kn.listening)return;const Z=D(M),Re=de(Z);if(Re){w(Ie(Re,{replace:!0,force:!0}),Z).catch(fi);return}u=Z;const v=l.value;Gr&&xT(_f(v.fullPath,G.delta),Aa()),R(Z,v).catch(I=>dn(I,12)?I:dn(I,2)?(w(Ie(U(I.to),{force:!0}),Z).then(b=>{dn(b,20)&&!G.delta&&G.type===Pi.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ye(I,Z,v))).then(I=>{I=I||S(Z,v,!1),I&&(G.delta&&!dn(I,8)?s.go(-G.delta,!1):G.type===Pi.pop&&dn(I,20)&&s.go(-1,!1)),A(Z,v,I)}).catch(fi)}))}let ot=Qs(),Ce=Qs(),he;function ye(M,Y,G){Gt(M);const Z=Ce.list();return Z.length?Z.forEach(Re=>Re(M,Y,G)):console.error(M),Promise.reject(M)}function wt(){return he&&l.value!==Ln?Promise.resolve():new Promise((M,Y)=>{ot.add([M,Y])})}function Gt(M){return he||(he=!M,xe(),ot.list().forEach(([Y,G])=>M?G(M):Y()),ot.reset()),M}function St(M,Y,G,Z){const{scrollBehavior:Re}=t;if(!Gr||!Re)return Promise.resolve();const v=!G&&LT(_f(M.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return ql().then(()=>Re(M,Y,v)).then(I=>I&&MT(I)).catch(I=>ye(I,M,Y))}const Xe=M=>s.go(M);let hn;const Bt=new Set,kn={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:V,resolve:D,options:t,push:W,replace:ne,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ce.add,isReady:wt,install(M){const Y=this;M.component("RouterLink",tl),M.component("RouterView",hI),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(l)}),Gr&&!hn&&l.value===Ln&&(hn=!0,W(s.location).catch(Re=>{}));const G={};for(const Re in Ln)Object.defineProperty(G,Re,{get:()=>l.value[Re],enumerable:!0});M.provide(Ra,Y),M.provide(Jl,Up(G)),M.provide(el,l);const Z=M.unmount;Bt.add(M),M.unmount=function(){Bt.delete(M),Bt.size<1&&(u=Ln,T&&T(),T=null,l.value=Ln,hn=!1,he=!1),Z()}}};function at(M){return M.reduce((Y,G)=>Y.then(()=>E(G)),Promise.resolve())}return kn}function dI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ds(u,l))||s.push(l))}return[n,r,s]}function h0(){return Ft(Ra)}function f0(t){return Ft(Jl)}function pI(t){return Ml()?(Ap(t),!0):!1}const jm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mI=Object.prototype.toString,gI=t=>mI.call(t)==="[object Object]",zr=()=>{},_I=yI();function yI(){var t,e;return jm&&((t=window?.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window?.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Tc(t){return Array.isArray(t)?t:[t]}const EI=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,vI=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;function TI(t,e,n,r){let s=t<12?"AM":"PM";return r&&(s=s.split("").reduce((i,o)=>i+=`${o}.`,"")),n?s.toLowerCase():s}function vr(t){const e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}function II(t,e,n={}){var r;const s=t.getFullYear(),i=t.getMonth(),o=t.getDate(),c=t.getHours(),l=t.getMinutes(),u=t.getSeconds(),f=t.getMilliseconds(),p=t.getDay(),m=(r=n.customMeridiem)!=null?r:TI,_=V=>{var k;return(k=V.split(" ")[1])!=null?k:""},C={Yo:()=>vr(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>i+1,Mo:()=>vr(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(Ye(n.locales),{month:"short"}),MMMM:()=>t.toLocaleDateString(Ye(n.locales),{month:"long"}),D:()=>String(o),Do:()=>vr(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(c),Ho:()=>vr(c),HH:()=>`${c}`.padStart(2,"0"),h:()=>`${c%12||12}`.padStart(1,"0"),ho:()=>vr(c%12||12),hh:()=>`${c%12||12}`.padStart(2,"0"),m:()=>String(l),mo:()=>vr(l),mm:()=>`${l}`.padStart(2,"0"),s:()=>String(u),so:()=>vr(u),ss:()=>`${u}`.padStart(2,"0"),SSS:()=>`${f}`.padStart(3,"0"),d:()=>p,dd:()=>t.toLocaleDateString(Ye(n.locales),{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(Ye(n.locales),{weekday:"short"}),dddd:()=>t.toLocaleDateString(Ye(n.locales),{weekday:"long"}),A:()=>m(c,l),AA:()=>m(c,l,!1,!0),a:()=>m(c,l,!0),aa:()=>m(c,l,!0,!0),z:()=>_(t.toLocaleDateString(Ye(n.locales),{timeZoneName:"shortOffset"})),zz:()=>_(t.toLocaleDateString(Ye(n.locales),{timeZoneName:"shortOffset"})),zzz:()=>_(t.toLocaleDateString(Ye(n.locales),{timeZoneName:"shortOffset"})),zzzz:()=>_(t.toLocaleDateString(Ye(n.locales),{timeZoneName:"longOffset"}))};return e.replace(vI,(V,k)=>{var D,U;return(U=k??((D=C[V])==null?void 0:D.call(C)))!=null?U:V})}function wI(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(EI);if(e){const n=e[2]-1||0,r=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,r)}}return new Date(t)}function d0(t,e="HH:mm:ss",n={}){return nt(()=>II(wI(Ye(t)),Ye(e),n))}function AI(t,e,n){return ss(t,e,{...n,immediate:!0})}const $m=jm?window:void 0;function Xs(t){var e;const n=Ye(t);return(e=n?.$el)!=null?e:n}function Ic(...t){const e=[],n=()=>{e.forEach(c=>c()),e.length=0},r=(c,l,u,f)=>(c.addEventListener(l,u,f),()=>c.removeEventListener(l,u,f)),s=nt(()=>{const c=Tc(Ye(t[0])).filter(l=>l!=null);return c.every(l=>typeof l!="string")?c:void 0}),i=AI(()=>{var c,l;return[(l=(c=s.value)==null?void 0:c.map(u=>Xs(u)))!=null?l:[$m].filter(u=>u!=null),Tc(Ye(s.value?t[1]:t[0])),Tc(xt(s.value?t[2]:t[1])),Ye(s.value?t[3]:t[2])]},([c,l,u,f])=>{if(n(),!c?.length||!l?.length||!u?.length)return;const p=gI(f)?{...f}:f;e.push(...c.flatMap(m=>l.flatMap(_=>u.map(C=>r(m,_,C,p)))))},{flush:"post"}),o=()=>{i(),n()};return pI(n),o}let Vf=!1;function RI(t,e,n={}){const{window:r=$m,ignore:s=[],capture:i=!0,detectIframe:o=!1,controls:c=!1}=n;if(!r)return c?{stop:zr,cancel:zr,trigger:zr}:zr;if(_I&&!Vf){Vf=!0;const k={passive:!0};Array.from(r.document.body.children).forEach(D=>D.addEventListener("click",zr,k)),r.document.documentElement.addEventListener("click",zr,k)}let l=!0;const u=k=>Ye(s).some(D=>{if(typeof D=="string")return Array.from(r.document.querySelectorAll(D)).some(U=>U===k.target||k.composedPath().includes(U));{const U=Xs(D);return U&&(k.target===U||k.composedPath().includes(U))}});function f(k){const D=Ye(k);return D&&D.$.subTree.shapeFlag===16}function p(k,D){const U=Ye(k),H=U.$.subTree&&U.$.subTree.children;return H==null||!Array.isArray(H)?!1:H.some(W=>W.el===D.target||D.composedPath().includes(W.el))}const m=k=>{const D=Xs(t);if(k.target!=null&&!(!(D instanceof Element)&&f(t)&&p(t,k))&&!(!D||D===k.target||k.composedPath().includes(D))){if("detail"in k&&k.detail===0&&(l=!u(k)),!l){l=!0;return}e(k)}};let _=!1;const C=[Ic(r,"click",k=>{_||(_=!0,setTimeout(()=>{_=!1},0),m(k))},{passive:!0,capture:i}),Ic(r,"pointerdown",k=>{const D=Xs(t);l=!u(k)&&!!(D&&!k.composedPath().includes(D))},{passive:!0}),o&&Ic(r,"blur",k=>{setTimeout(()=>{var D;const U=Xs(t);((D=r.document.activeElement)==null?void 0:D.tagName)==="IFRAME"&&!U?.contains(r.document.activeElement)&&e(k)},0)},{passive:!0})].filter(Boolean),V=()=>C.forEach(k=>k());return c?{stop:V,cancel:()=>{l=!1},trigger:k=>{l=!0,m(k),l=!1}}:V}const SI=()=>{};var Df={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new PI;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CI=function(t){const e=qm(t);return Hm.encodeByteArray(e,!0)},zo=function(t){return CI(t).replace(/\./g,"")},zm=function(t){try{return Hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=()=>kI().__FIREBASE_DEFAULTS__,VI=()=>{if(typeof process>"u"||typeof Df>"u")return;const t=Df.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zm(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return SI()||NI()||VI()||DI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wm=t=>Sa()?.emulatorHosts?.[t],OI=t=>{const e=Wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Km=()=>Sa()?.config,Gm=t=>Sa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),""].join(".")}const pi={};function LI(){const t={prod:[],emulator:[]};for(const e of Object.keys(pi))pi[e]?t.emulator.push(e):t.prod.push(e);return t}function FI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Of=!1;function Ym(t,e){if(typeof window>"u"||typeof document>"u"||!As(window.location.host)||pi[t]===e||pi[t]||Of)return;pi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=LI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Of=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=FI(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),V=n("learnmore"),k=document.getElementById(V)||document.createElement("a"),D=n("preprendIcon"),U=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;c(H),f(k,V);const W=u();l(U,D),H.append(U,C,k,W),document.body.appendChild(H)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function BI(){const t=Sa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zI(){return!BI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WI(){try{return typeof indexedDB=="object"}catch{return!1}}function KI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GI,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Cn(s,c,r)}}function QI(t,e){return t.replace(YI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mf(i)&&Mf(o)){if(!Pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XI(t,e){const n=new ZI(t,e);return n.subscribe.bind(n)}class ZI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ew(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wc),s.error===void 0&&(s.error=wc),s.complete===void 0&&(s.complete=wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rw(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nw(t){return t===Ir?void 0:t}function rw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const iw={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},ow=me.INFO,aw={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},cw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=ow,this._logHandler=cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const lw=(t,e)=>e.some(n=>t instanceof n);let xf,Lf;function uw(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hw(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,nl=new WeakMap,Xm=new WeakMap,Ac=new WeakMap,Zl=new WeakMap;function fw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function dw(t){if(nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nl.set(t,e)}let rl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pw(t){rl=t(rl)}function mw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return Xm.set(r,e.sort?e.sort():[e]),Yn(r)}:hw().includes(t)?function(...e){return t.apply(Rc(this),e),Yn(Jm.get(this))}:function(...e){return Yn(t.apply(Rc(this),e))}}function gw(t){return typeof t=="function"?mw(t):(t instanceof IDBTransaction&&dw(t),lw(t,uw())?new Proxy(t,rl):t)}function Yn(t){if(t instanceof IDBRequest)return fw(t);if(Ac.has(t))return Ac.get(t);const e=gw(t);return e!==t&&(Ac.set(t,e),Zl.set(e,t)),e}const Rc=t=>Zl.get(t);function _w(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const yw=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],Sc=new Map;function Ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Sc.set(e,i),i}pw(t=>({...t,get:(e,n,r)=>Ff(e,n)||t.get(e,n,r),has:(e,n)=>!!Ff(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tw(t){return t.getComponent()?.type==="VERSION"}const sl="@firebase/app",Uf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Xl("@firebase/app"),Iw="@firebase/app-compat",ww="@firebase/analytics-compat",Aw="@firebase/analytics",Rw="@firebase/app-check-compat",Sw="@firebase/app-check",bw="@firebase/auth",Pw="@firebase/auth-compat",Cw="@firebase/database",kw="@firebase/data-connect",Nw="@firebase/database-compat",Vw="@firebase/functions",Dw="@firebase/functions-compat",Ow="@firebase/installations",Mw="@firebase/installations-compat",xw="@firebase/messaging",Lw="@firebase/messaging-compat",Fw="@firebase/performance",Uw="@firebase/performance-compat",Bw="@firebase/remote-config",jw="@firebase/remote-config-compat",$w="@firebase/storage",qw="@firebase/storage-compat",Hw="@firebase/firestore",zw="@firebase/ai",Ww="@firebase/firestore-compat",Kw="firebase",Gw="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="[DEFAULT]",Qw={[sl]:"fire-core",[Iw]:"fire-core-compat",[Aw]:"fire-analytics",[ww]:"fire-analytics-compat",[Sw]:"fire-app-check",[Rw]:"fire-app-check-compat",[bw]:"fire-auth",[Pw]:"fire-auth-compat",[Cw]:"fire-rtdb",[kw]:"fire-data-connect",[Nw]:"fire-rtdb-compat",[Vw]:"fire-fn",[Dw]:"fire-fn-compat",[Ow]:"fire-iid",[Mw]:"fire-iid-compat",[xw]:"fire-fcm",[Lw]:"fire-fcm-compat",[Fw]:"fire-perf",[Uw]:"fire-perf-compat",[Bw]:"fire-rc",[jw]:"fire-rc-compat",[$w]:"fire-gcs",[qw]:"fire-gcs-compat",[Hw]:"fire-fst",[Ww]:"fire-fst-compat",[zw]:"fire-vertex","fire-js":"fire-js",[Kw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Map,Yw=new Map,ol=new Map;function Bf(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(ol.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of Wo.values())Bf(n,t);for(const n of Yw.values())Bf(n,t);return!0}function eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new $i("app","Firebase",Jw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=Gw;function Zm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:il,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=Km()),!n)throw Jn.create("no-options");const i=Wo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const o=new sw(s);for(const l of ol.values())o.addComponent(l);const c=new Xw(n,r,o);return Wo.set(s,c),c}function eg(t=il){const e=Wo.get(t);if(!e&&t===il&&Km())return Zm();if(!e)throw Jn.create("no-app",{appName:t});return e}function Xn(t,e,n){let r=Qw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}ms(new Cr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firebase-heartbeat-database",eA=1,Ci="firebase-heartbeat-store";let bc=null;function tg(){return bc||(bc=_w(Zw,eA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),bc}async function tA(t){try{const n=(await tg()).transaction(Ci),r=await n.objectStore(Ci).get(ng(t));return await n.done,r}catch(e){if(e instanceof Cn)wn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e?.message});wn.warn(n.message)}}}async function jf(t,e){try{const r=(await tg()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,ng(t)),await r.done}catch(n){if(n instanceof Cn)wn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n?.message});wn.warn(r.message)}}}function ng(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=1024,rA=30;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$f();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>rA){const s=aA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){wn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$f(),{heartbeatsToSend:n,unsentEntries:r}=iA(this._heartbeatsCache.heartbeats),s=zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return wn.warn(e),""}}}function $f(){return new Date().toISOString().substring(0,10)}function iA(t,e=nA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?KI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}function aA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){ms(new Cr("platform-logger",e=>new vw(e),"PRIVATE")),ms(new Cr("heartbeat",e=>new sA(e),"PRIVATE")),Xn(sl,Uf,t),Xn(sl,Uf,"esm2020"),Xn("fire-js","")}cA("");var lA="firebase",uA="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(lA,uA,"app");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,rg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.F=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(R,A,S){for(var T=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)T[xe-2]=arguments[xe];return y.prototype[A].apply(R,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);const R=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)R[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;A<16;++A)R[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],A=w.g[2];let S=w.g[3],T;T=y+(S^E&(A^S))+R[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(A^y&(E^A))+R[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(E^S&(y^E))+R[2]+606105819&4294967295,A=S+(T<<17&4294967295|T>>>15),T=E+(y^A&(S^y))+R[3]+3250441966&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(S^E&(A^S))+R[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(A^y&(E^A))+R[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(E^S&(y^E))+R[6]+2821735955&4294967295,A=S+(T<<17&4294967295|T>>>15),T=E+(y^A&(S^y))+R[7]+4249261313&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(S^E&(A^S))+R[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(A^y&(E^A))+R[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(E^S&(y^E))+R[10]+4294925233&4294967295,A=S+(T<<17&4294967295|T>>>15),T=E+(y^A&(S^y))+R[11]+2304563134&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(S^E&(A^S))+R[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(A^y&(E^A))+R[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(E^S&(y^E))+R[14]+2792965006&4294967295,A=S+(T<<17&4294967295|T>>>15),T=E+(y^A&(S^y))+R[15]+1236535329&4294967295,E=A+(T<<22&4294967295|T>>>10),T=y+(A^S&(E^A))+R[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^A&(y^E))+R[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(S^y))+R[11]+643717713&4294967295,A=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(A^S))+R[0]+3921069994&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(E^A))+R[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^A&(y^E))+R[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(S^y))+R[15]+3634488961&4294967295,A=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(A^S))+R[4]+3889429448&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(E^A))+R[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^A&(y^E))+R[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(S^y))+R[3]+4107603335&4294967295,A=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(A^S))+R[8]+1163531501&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(E^A))+R[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^A&(y^E))+R[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^E&(S^y))+R[7]+1735328473&4294967295,A=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(A^S))+R[12]+2368359562&4294967295,E=A+(T<<20&4294967295|T>>>12),T=y+(E^A^S)+R[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^A)+R[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^E)+R[11]+1839030562&4294967295,A=S+(T<<16&4294967295|T>>>16),T=E+(A^S^y)+R[14]+4259657740&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^S)+R[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^A)+R[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^E)+R[7]+4139469664&4294967295,A=S+(T<<16&4294967295|T>>>16),T=E+(A^S^y)+R[10]+3200236656&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^S)+R[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^A)+R[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^E)+R[3]+3572445317&4294967295,A=S+(T<<16&4294967295|T>>>16),T=E+(A^S^y)+R[6]+76029189&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(E^A^S)+R[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^A)+R[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^E)+R[15]+530742520&4294967295,A=S+(T<<16&4294967295|T>>>16),T=E+(A^S^y)+R[2]+3299628645&4294967295,E=A+(T<<23&4294967295|T>>>9),T=y+(A^(E|~S))+R[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~A))+R[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~E))+R[14]+2878612391&4294967295,A=S+(T<<15&4294967295|T>>>17),T=E+(S^(A|~y))+R[5]+4237533241&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~S))+R[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~A))+R[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~E))+R[10]+4293915773&4294967295,A=S+(T<<15&4294967295|T>>>17),T=E+(S^(A|~y))+R[1]+2240044497&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~S))+R[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~A))+R[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~E))+R[6]+2734768916&4294967295,A=S+(T<<15&4294967295|T>>>17),T=E+(S^(A|~y))+R[13]+1309151649&4294967295,E=A+(T<<21&4294967295|T>>>11),T=y+(A^(E|~S))+R[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~A))+R[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~E))+R[2]+718787259&4294967295,A=S+(T<<15&4294967295|T>>>17),T=E+(S^(A|~y))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const E=y-this.blockSize,R=this.C;let A=this.h,S=0;for(;S<y;){if(A==0)for(;S<=E;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(R[A++]=w.charCodeAt(S++),A==this.blockSize){s(this,R),A=0;break}}else for(;S<y;)if(R[A++]=w[S++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)w[y++]=this.g[E]>>>R&255;return w};function i(w,y){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;const E=[];let R=!0;for(let A=w.length-1;A>=0;A--){const S=w[A]|0;R&&S==y||(E[A]=S,R=!1)}this.g=E}var c={};function l(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(u(-w));const y=[];let E=1;for(let R=0;w>=E;R++)y[R]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(y,8));let R=p;for(let S=0;S<w.length;S+=8){var A=Math.min(8,w.length-S);const T=parseInt(w.substring(S,S+A),y);A<8?(A=u(Math.pow(y,A)),R=R.j(A).add(u(T))):(R=R.j(E),R=R.add(u(T)))}return R}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-k(this).m();let w=0,y=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);w+=(R>=0?R:4294967296+R)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(V(this))return"-"+k(this).toString(w);const y=u(Math.pow(w,6));var E=this;let R="";for(;;){const A=W(E,y).g;E=D(E,A.j(y));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=A,C(E))return S+R;for(;S.length<6;)S="0"+S;R=S+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=D(this,w),V(w)?-1:C(w)?0:1};function k(w){const y=w.g.length,E=[];for(let R=0;R<y;R++)E[R]=~w.g[R];return new o(E,~w.h).add(m)}t.abs=function(){return V(this)?k(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),E=[];let R=0;for(let A=0;A<=y;A++){let S=R+(this.i(A)&65535)+(w.i(A)&65535),T=(S>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=T>>>16,S&=65535,T&=65535,E[A]=T<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function D(w,y){return w.add(k(y))}t.j=function(w){if(C(this)||C(w))return p;if(V(this))return V(w)?k(this).j(k(w)):k(k(this).j(w));if(V(w))return k(this.j(k(w)));if(this.l(_)<0&&w.l(_)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,E=[];for(var R=0;R<2*y;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const S=this.i(R)>>>16,T=this.i(R)&65535,xe=w.i(A)>>>16,ot=w.i(A)&65535;E[2*R+2*A]+=T*ot,U(E,2*R+2*A),E[2*R+2*A+1]+=S*ot,U(E,2*R+2*A+1),E[2*R+2*A+1]+=T*xe,U(E,2*R+2*A+1),E[2*R+2*A+2]+=S*xe,U(E,2*R+2*A+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new o(E,0)};function U(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function H(w,y){this.g=w,this.h=y}function W(w,y){if(C(y))throw Error("division by zero");if(C(w))return new H(p,p);if(V(w))return y=W(k(w),y),new H(k(y.g),k(y.h));if(V(y))return y=W(w,k(y)),new H(k(y.g),y.h);if(w.g.length>30){if(V(w)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=y;R.l(w)<=0;)E=ne(E),R=ne(R);var A=de(E,1),S=de(R,1);for(R=de(R,2),E=de(E,2);!C(R);){var T=S.add(R);T.l(w)<=0&&(A=A.add(E),S=T),R=de(R,1),E=de(E,1)}return y=D(w,A.j(y)),new H(A,y)}for(A=p;w.l(y)>=0;){for(E=Math.max(1,Math.floor(w.m()/y.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),S=u(E),T=S.j(y);V(T)||T.l(w)>0;)E-=R,S=u(E),T=S.j(y);C(S)&&(S=m),A=A.add(S),w=D(w,T)}return new H(A,w)}t.B=function(w){return W(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)&w.i(R);return new o(E,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)|w.i(R);return new o(E,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)^w.i(R);return new o(E,this.h^w.h)};function ne(w){const y=w.g.length+1,E=[];for(let R=0;R<y;R++)E[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(E,w.h)}function de(w,y){const E=y>>5;y%=32;const R=w.g.length-E,A=[];for(let S=0;S<R;S++)A[S]=y>0?w.i(S+E)>>>y|w.i(S+E+1)<<32-y:w.i(S+E);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,rg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Zn=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sg,ti,ig,So,al,og,ag,cg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof po=="object"&&po];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,N){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return h.prototype[P].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let z=0;z<N;z++)a[d+z]=P[z]}else a.push(P)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function D(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class U{constructor(){this.h=this.g=null}add(h,d){const g=H.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var H=new V(()=>new W,a=>a.reset());class W{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,de=!1,w=new U,y=()=>{const a=Promise.resolve(void 0);ne=()=>{a.then(E)}};function E(){for(var a;a=D();){try{a.h.call(a.g)}catch(d){k(d)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}de=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function xe(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(xe,A),xe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),Ce=0;function he(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++Ce,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function Gt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function St(a){const h={};for(const d in a)h[d]=a[d];return h}const Xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hn(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<Xe.length;N++)d=Xe[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Bt(a){this.src=a,this.g={},this.h=0}Bt.prototype.add=function(a,h,d,g,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const z=at(a,h,g,P);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new he(h,this.src,N,!!g,P),h.fa=d,a.push(h)),h};function kn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=P>=0)&&Array.prototype.splice.call(g,P,1),N&&(ye(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function at(a,h,d,g){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return P}return-1}var M="closure_lm_"+(Math.random()*1e6|0),Y={};function G(a,h,d,g,P){if(Array.isArray(h)){for(let N=0;N<h.length;N++)G(a,h[N],d,g,P);return null}return d=K(d),a&&a[ot]?a.J(h,d,c(g)?!!g.capture:!1,P):Z(a,h,d,!1,g,P)}function Z(a,h,d,g,P,N){if(!h)throw Error("Invalid event type");const z=c(P)?!!P.capture:!!P;let fe=B(a);if(fe||(a[M]=fe=new Bt(a)),d=fe.add(h,d,g,z,N),d.proxy)return d;if(g=Re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(b(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Re(){function a(d){return h.call(a.src,a.listener,d)}const h=x;return a}function v(a,h,d,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)v(a,h[N],d,g,P);else g=c(g)?!!g.capture:!!g,d=K(d),a&&a[ot]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=at(h,d,g,P),d>-1&&(ye(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=B(a))&&(h=a.g[h.toString()],a=-1,h&&(a=at(h,d,g,P)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ot])kn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(b(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=B(h))?(kn(d,a),d.h==0&&(d.src=null,h[M]=null)):ye(a)}}}function b(a){return a in Y?Y[a]:Y[a]="on"+a}function x(a,h){if(a.da)a=!0;else{h=new xe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function B(a){return a=a[M],a instanceof Bt?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[O]||(a[O]=function(h){return a.handleEvent(h)}),a[O])}function q(){R.call(this),this.i=new Bt(this),this.M=this,this.G=null}p(q,R),q.prototype[ot]=!0,q.prototype.removeEventListener=function(a,h,d,g){v(this,a,h,d,g)};function j(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var P=h;h=new A(g,a),hn(h,P)}P=!0;let N,z;if(d)for(z=d.length-1;z>=0;z--)N=h.g=d[z],P=$(N,g,!0,h)&&P;if(N=h.g=a,P=$(N,g,!0,h)&&P,P=$(N,g,!1,h)&&P,d)for(z=0;z<d.length;z++)N=h.g=d[z],P=$(N,g,!1,h)&&P}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)ye(d[g]);delete a.g[h],a.h--}}this.G=null},q.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},q.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function $(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let N=0;N<h.length;++N){const z=h[N];if(z&&!z.da&&z.capture==d){const fe=z.listener,ze=z.ha||z.src;z.fa&&kn(a.i,z),P=fe.call(ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function re(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=re(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class te extends R{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){R.call(this),this.h=a,this.g={}}p(se,R);var pe=[];function Se(a){wt(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),Se(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=o.JSON.stringify,ct=o.JSON.parse,lt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bt(){}function Pt(){}var jt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ur(){A.call(this,"d")}p(Ur,A);function Ze(){A.call(this,"c")}p(Ze,A);var Ge={},Vs=null;function dr(){return Vs=Vs||new q}Ge.Ia="serverreachability";function Ku(a){A.call(this,Ge.Ia,a)}p(Ku,A);function Ds(a){const h=dr();j(h,new Ku(h))}Ge.STAT_EVENT="statevent";function Gu(a,h){A.call(this,Ge.STAT_EVENT,a),this.stat=h}p(Gu,A);function yt(a){const h=dr();j(h,new Gu(h,a))}Ge.Ja="timingevent";function Qu(a,h){A.call(this,Ge.Ja,a),this.size=h}p(Qu,A);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ms(){this.g=!0}Ms.prototype.ua=function(){this.g=!1};function dy(a,h,d,g,P,N){a.info(function(){if(a.g)if(N){var z="",fe=N.split("&");for(let Pe=0;Pe<fe.length;Pe++){var ze=fe[Pe].split("=");if(ze.length>1){const Qe=ze[0];ze=ze[1];const Yt=Qe.split("_");z=Yt.length>=2&&Yt[1]=="type"?z+(Qe+"="+ze+"&"):z+(Qe+"=redacted&")}}}else z=null;else z=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+z})}function py(a,h,d,g,P,N,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+z})}function Br(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+gy(a,d)+(g?" "+g:"")})}function my(a,h){a.info(function(){return"TIMEOUT: "+h})}Ms.prototype.info=function(){};function gy(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return ve(N)}catch{return h}}var eo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function Wa(){}p(Wa,bt),Wa.prototype.g=function(){return new XMLHttpRequest},Ju=new Wa;function xs(a){return encodeURIComponent(String(a))}function _y(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Nn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},Ka={};function Ga(a,h,d){a.M=1,a.A=no(Qt(h)),a.u=d,a.R=!0,eh(a,null)}function eh(a,h){a.F=Date.now(),to(a),a.B=Qt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),dh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Xu,a.g=Nh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new te(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(pe[0]=P.toString()),P=pe);for(let N=0;N<P.length;N++){const z=G(d,P[N],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?St(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ds(),dy(a.i,a.v,a.B,a.l,a.S,a.u)}Nn.prototype.ba=function(a){a=a.target;const h=this.O;h&&On(a)==3?h.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=On(this.g),ze=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||vh(this.g)))){this.K||fe!=4||ze==7||(ze==8||Pe<=0?Ds(3):Ds(2)),Qa(this);var h=this.g.ca();this.X=h;var d=yy(this);if(this.o=h==200,py(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var N=g;break t}}N=null}if(a=N)Br(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ya(this,a);else{this.o=!1,this.m=3,yt(12),pr(this),Ls(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<d.length;)if(Qe=Ey(this,d),Qe==Ka){fe==4&&(this.m=4,yt(14),a=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Zu){this.m=4,yt(15),Br(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Br(this.i,this.l,Qe,null),Ya(this,Qe);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)Br(this.i,this.l,d,"[Invalid Chunked Response]"),pr(this),Ls(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),sc(z),z.P=!0,yt(11))}}else Br(this.i,this.l,d,null),Ya(this,d);fe==4&&pr(this),this.o&&!this.K&&(fe==4?bh(this.j,this):(this.o=!1,to(this)))}else Dy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),pr(this),Ls(this)}}}catch{}finally{}};function yy(a){if(!th(a))return a.g.la();const h=vh(a.g);if(h==="")return"";let d="";const g=h.length,P=On(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return pr(a),Ls(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(P&&N==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function th(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ey(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Ka:(d=Number(h.substring(d,g)),isNaN(d)?Zu:(g+=1,g+d>h.length?Ka:(h=h.slice(g,g+d),a.C=g+d,h)))}Nn.prototype.cancel=function(){this.K=!0,pr(this)};function to(a){a.T=Date.now()+a.H,nh(a,a.H)}function nh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Os(u(a.aa,a),h)}function Qa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(my(this.i,this.B),this.M!=2&&(Ds(),yt(17)),pr(this),this.m=2,Ls(this)):nh(this,this.T-a)};function Ls(a){a.j.I==0||a.K||bh(a.j,a)}function pr(a){Qa(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Se(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ya(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Ja(d.h,a))){if(!a.L&&Ja(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ao(d),io(d);else break e;rc(d),yt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Os(u(d.Va,d),6e3));ih(d.h)<=1&&d.ta&&(d.ta=void 0)}else gr(d,11)}else if((a.L||d.g==a)&&ao(d),!T(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let Pe=P[h];const Qe=Pe[0];if(!(Qe<=d.K))if(d.K=Qe,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const Yt=Pe[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const _r=Pe[4];_r!=null&&(d.za=_r,d.j.info("SVER="+d.za));const Mn=Pe[5];Mn!=null&&typeof Mn=="number"&&Mn>0&&(g=1.5*Mn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const xn=a.g;if(xn){const lo=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var N=g.h;N.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Xa(N,N.h),N.h=null))}if(g.G){const ic=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;ic&&(g.wa=ic,Ve(g.J,g.G,ic))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=kh(g,g.L?g.ba:null,g.W),z.L){oh(g.h,z);var fe=z,ze=g.O;ze&&(fe.H=ze),fe.D&&(Qa(fe),to(fe)),g.g=z}else Rh(g);d.i.length>0&&oo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||gr(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?gr(d,7):nc(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Ds(4)}catch{}}var vy=class{constructor(a,h){this.g=a,this.map=h}};function rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function Ja(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Xa(a,h){a.g?a.g.add(h):a.h=h}function oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ty(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,N=null;g>=0?(P=a[d].substring(0,g),N=a[d].substring(g+1)):P=a[d],h(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Vn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Vn?(this.l=a.l,Fs(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.u),this.h=a.h,Za(this,ph(a.i)),this.m=a.m):a&&(h=String(a).match(ch))?(this.l=!1,Fs(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),Us(this,h[4]),this.h=Bs(h[5]||"",!0),Za(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.l=!1,this.i=new $s(null,this.l))}Vn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(js(h,lh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,lh,!0),"@"),a.push(xs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(js(d,d.charAt(0)=="/"?Ay:wy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",js(d,Sy)),a.join("")},Vn.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?Fs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Us(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let z=0;z<P.length;){const fe=P[z++];fe=="."?g&&z==P.length&&N.push(""):fe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&z==P.length&&N.push("")):(N.push(fe),g=!0)}g=N.join("/")}else g=P}return d?h.h=g:d=a.i.toString()!=="",d?Za(h,ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new Vn(a)}function Fs(a,h,d){a.j=d?Bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Za(a,h,d){h instanceof $s?(a.i=h,by(a.i,a.l)):(d||(h=js(h,Ry)),a.i=new $s(h,a.l))}function Ve(a,h,d){a.i.set(h,d)}function no(a){return Ve(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,wy=/[#\?:]/g,Ay=/[#\?]/g,Ry=/[#\?@]/g,Sy=/#/g;function $s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function mr(a){a.g||(a.g=new Map,a.h=0,a.i&&Ty(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(a,h){mr(this),this.i=null,a=jr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function uh(a,h){mr(a),h=jr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hh(a,h){return mr(a),h=jr(a,h),a.g.has(h)}t.forEach=function(a,h){mr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)};function fh(a,h){mr(a);let d=[];if(typeof h=="string")hh(a,h)&&(d=d.concat(a.g.get(jr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return mr(this),this.i=null,a=jr(this,a),hh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fh(this,a),a.length>0?String(a[0]):h):h};function dh(a,h,d){uh(a,h),d.length>0&&(a.i=null,a.g.set(jr(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const P=xs(d);d=fh(this,d);for(let N=0;N<d.length;N++){let z=P;d[N]!==""&&(z+="="+xs(d[N])),a.push(z)}}return this.i=a.join("&")};function ph(a){const h=new $s;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function jr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function by(a,h){h&&!a.j&&(mr(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(uh(this,g),dh(this,P,d))},a)),a.j=h}function Py(a,h){const d=new Ms;if(o.Image){const g=new Image;g.onload=f(Dn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Dn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Dn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Dn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Cy(a,h){const d=new Ms,g=new AbortController,P=setTimeout(()=>{g.abort(),Dn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?Dn(d,"TestPingServer: ok",!0,h):Dn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Dn(d,"TestPingServer: error",!1,h)})}function Dn(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function ky(){this.g=new lt}function ec(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ec,bt),ec.prototype.g=function(){return new ro(this.i,this.h)};function ro(a,h){q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ro,q),t=ro.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Hs(this),this.readyState==3&&mh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Na=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gh(a){let h="";return wt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function tc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=gh(d),typeof a=="string"?d!=null&&xs(d):Ve(a,h,d))}function Le(a){q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Le,q);var Ny=/^https?$/i,Vy=["POST","PUT"];t=Le.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){_h(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Vy,h,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){_h(this,N)}};function _h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,yh(a),so(a)}function yh(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),so(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),so(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Eh(this):this.Xa())},t.Xa=function(){Eh(this)};function Eh(a){if(a.h&&typeof i<"u"){if(a.v&&On(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),On(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=N===0){let z=String(a.D).match(ch)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!Ny.test(z?z.toLowerCase():"")}d=g}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var P=On(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",yh(a)}}finally{so(a)}}}}function so(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ct(h)}};function vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Dy(a){const h={};a=(a.g&&On(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=_y(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}Gt(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Th(a){this.za=0,this.i=[],this.j=new Ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,a),this.Za=zs("retryDelaySeedMs",1e4,a),this.Ta=zs("forwardChannelMaxRetries",2,a),this.va=zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rh(a&&a.concurrentRequestLimit),this.Ba=new ky,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Th.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){yt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=kh(this,null,this.W),oo(this)};function nc(a){if(Ih(a),a.I==3){var h=a.V++,d=Qt(a.J);if(Ve(d,"SID",a.M),Ve(d,"RID",h),Ve(d,"TYPE","terminate"),Ws(a,d),h=new Nn(a,a.j,h),h.M=2,h.A=no(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Nh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),to(h)}Ch(a)}function io(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function Ih(a){io(a),a.v&&(o.clearTimeout(a.v),a.v=null),ao(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function oo(a){if(!sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ne||y(),de||(ne(),de=!0),w.add(h,a),a.D=0}}function Oy(a,h){return ih(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Os(u(a.Ea,a,h),Ph(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Nn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=St(N),hn(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Ah(this,P,h),d=Qt(this.J),Ve(d,"RID",a),Ve(d,"CVER",22),this.G&&Ve(d,"X-HTTP-Session-Id",this.G),Ws(this,d),N&&(this.R?h="headers="+xs(gh(N))+"&"+h:this.u&&tc(d,this.u,N)),Xa(this.h,P),this.Ra&&Ve(d,"TYPE","init"),this.S?(Ve(d,"$req",h),Ve(d,"SID","null"),P.U=!0,Ga(P,d,null)):Ga(P,d,h),this.I=2}}else this.I==3&&(a?wh(this,a):this.i.length==0||sh(this.h)||wh(this))};function wh(a,h){var d;h?d=h.l:d=a.V++;const g=Qt(a.J);Ve(g,"SID",a.M),Ve(g,"RID",d),Ve(g,"AID",a.K),Ws(a,g),a.u&&a.o&&tc(g,a.u,a.o),d=new Nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ah(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Xa(a.h,d),Ga(d,g,h)}function Ws(a,h){a.H&&wt(a.H,function(d,g){Ve(h,g,d)}),a.l&&wt({},function(d,g){Ve(h,g,d)})}function Ah(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let fe=-1;for(;;){const ze=["count="+d];fe==-1?d>0?(fe=P[0].g,ze.push("ofs="+fe)):fe=0:ze.push("ofs="+fe);let Pe=!0;for(let Qe=0;Qe<d;Qe++){var N=P[Qe].g;const Yt=P[Qe].map;if(N-=fe,N<0)fe=Math.max(0,P[Qe].g-100),Pe=!1;else try{N="req"+N+"_"||"";try{var z=Yt instanceof Map?Yt:Object.entries(Yt);for(const[_r,Mn]of z){let xn=Mn;c(Mn)&&(xn=ve(Mn)),ze.push(N+_r+"="+encodeURIComponent(xn))}}catch(_r){throw ze.push(N+"type="+encodeURIComponent("_badmap")),_r}}catch{g&&g(Yt)}}if(Pe){z=ze.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function Rh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ne||y(),de||(ne(),de=!0),w.add(h,a),a.A=0}}function rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Os(u(a.Da,a),Ph(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Sh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Os(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),io(this),Sh(this))};function sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sh(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);Ve(h,"RID","rpc"),Ve(h,"SID",a.M),Ve(h,"AID",a.K),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ve(h,"TO",a.ia),Ve(h,"TYPE","xmlhttp"),Ws(a,h),a.u&&a.o&&tc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=no(Qt(h)),d.u=null,d.R=!0,eh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,io(this),rc(this),yt(19))};function ao(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bh(a,h){var d=null;if(a.g==h){ao(a),sc(a),a.g=null;var g=2}else if(Ja(a.h,h))d=h.G,oh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=dr(),j(g,new Qu(g,d)),oo(a)}else Rh(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&Oy(a,h)||g==2&&rc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function Ph(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function gr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const P=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fs(g,"https"),no(g),P?Py(g.toString(),d):Cy(g.toString(),d)}else yt(2);a.I=0,a.l&&a.l.pa(h),Ch(a),Ih(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ch(a){if(a.I=0,a.ja=[],a.l){const h=ah(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function kh(a,h,d){var g=d instanceof Vn?Qt(d):new Vn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Us(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const N=new Vn(null);g&&Fs(N,g),h&&(N.g=h),P&&Us(N,P),d&&(N.h=d),g=N}return d=a.G,h=a.wa,d&&h&&Ve(g,d,h),Ve(g,"VER",a.ka),Ws(a,g),g}function Nh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Le(new ec({ab:d})):new Le(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vh(){}t=Vh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function co(){}co.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){q.call(this),this.g=new Th(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $r(this)}p(Ct,q),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){nc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ve(a),a=d);h.i.push(new vy(h.Ya++,a)),h.I==3&&oo(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,Ct.Z.N.call(this)};function Dh(a){Ur.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Dh,Ur);function Oh(){Ze.call(this),this.status=1}p(Oh,Ze);function $r(a){this.g=a}p($r,Vh),$r.prototype.ra=function(){j(this.g,"a")},$r.prototype.qa=function(a){j(this.g,new Dh(a))},$r.prototype.pa=function(a){j(this.g,new Oh)},$r.prototype.oa=function(){j(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,cg=function(){return new co},ag=function(){return dr()},og=Ge,al={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},eo.NO_ERROR=0,eo.TIMEOUT=8,eo.HTTP_ERROR=6,So=eo,Yu.COMPLETE="complete",ig=Yu,Pt.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",q.prototype.listen=q.prototype.J,ti=Pt,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,sg=Le}).apply(typeof po<"u"?po:typeof self<"u"?self:typeof window<"u"?window:{});const zf="@firebase/firestore",Wf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Xl("@firebase/firestore");function Qr(){return kr.logLevel}function X(t,...e){if(kr.logLevel<=me.DEBUG){const n=e.map(tu);kr.debug(`Firestore (${Ss}): ${t}`,...n)}}function An(t,...e){if(kr.logLevel<=me.ERROR){const n=e.map(tu);kr.error(`Firestore (${Ss}): ${t}`,...n)}}function gs(t,...e){if(kr.logLevel<=me.WARN){const n=e.map(tu);kr.warn(`Firestore (${Ss}): ${t}`,...n)}}function tu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lg(t,r,n)}function lg(t,e,n){let r=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||lg(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ft.UNAUTHENTICATED)))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class dA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new ug(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class pA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Kf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Pc(s)===Pc(i)?ge(s,i):Pc(s)?1:-1}return ge(t.length,e.length)}const yA=55296,EA=57343;function Pc(t){const e=t.charCodeAt(0);return e>=yA&&e<=EA}function _s(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zn.fromString(e.substring(4,e.length-2))}}class Ne extends Zt{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ne(n)}static emptyPath(){return new Ne([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Zt{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new rt([Gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ne.fromString(e))}static fromName(e){return new ee(Ne.fromString(e).popFirst(5))}static empty(){return new ee(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!ee.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(ee.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Hi(t,e){if(!fg(t))throw new J(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=-62135596800,Xf=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xf);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jf)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xf}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hi(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:$e("string",De._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new De(0,0))}static max(){return new ce(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=-1;function IA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new rr(s,ee.empty(),e)}function wA(t){return new rr(t.readTime,t.key,ki)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(ce.min(),ee.empty(),ki)}static max(){return new rr(ce.max(),ee.empty(),ki)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==RA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function bA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ps(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Pa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=-1;function Ca(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function PA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="";function CA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zf(e)),e=kA(t.get(n),e);return Zf(e)}function kA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case dg:n+="";break;default:n+=i}}return n}function Zf(t){return t+dg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new We(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}})(e);return new it(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const NA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=NA.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="server_timestamp",_g="__type__",yg="__previous_value__",Eg="__local_write_time__";function su(t){return(t?.mapValue?.fields||{})[_g]?.stringValue===gg}function ka(t){const e=t.mapValue.fields[yg];return su(e)?ka(e):e}function Ni(t){const e=sr(t.mapValue.fields[Eg].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Go="(default)";class Vi{constructor(e,n){this.projectId=e,this.database=n||Go}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database===Go}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="__type__",DA="__max__",go={mapValue:{}},Tg="__vector__",Qo="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:MA(t)?9007199254740991:OA(t)?10:11:oe(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),c=sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?Ko(o)===Ko(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ed(o)!==ed(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!un(o[l],c[l])))return!1;return!0})(t,e);default:return oe(52216,{left:t})}}function Di(t,e){return(t.values||[]).find((n=>un(n,e)))!==void 0}function ys(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return nd(t.timestampValue,e.timestampValue);case 4:return nd(Ni(t),Ni(e));case 5:return cl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=ir(i),l=ir(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Fe(i.latitude),Fe(o.latitude));return c!==0?c:ge(Fe(i.longitude),Fe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return rd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Qo]?.arrayValue,f=l[Qo]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:rd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===go.mapValue&&o===go.mapValue)return 0;if(i===go.mapValue)return 1;if(o===go.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=cl(l[p],f[p]);if(m!==0)return m;const _=ys(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=sr(t),r=sr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function rd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ys(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Es(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ir(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ee.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ll(n.fields[o])}`;return s+"}"})(t.mapValue):oe(61005,{value:t})}function bo(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ka(t);return e?16+bo(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+bo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return lr(r.fields,((i,o)=>{s+=i.length+bo(o)})),s})(t.mapValue);default:throw oe(13486,{value:t})}}function sd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function iu(t){return!!t&&"arrayValue"in t}function id(t){return!!t&&"nullValue"in t}function od(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function OA(t){return(t?.mapValue?.fields||{})[vg]?.stringValue===Tg}function mi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return lr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=mi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mi(t.arrayValue.values[n]);return e}return{...t}}function MA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mi(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=mi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){lr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(mi(this.value))}}function Ig(t){const e=[];return lr(t.fields,((n,r)=>{const s=new rt([n]);if(Po(r)){const i=Ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pt(e,0,ce.min(),ce.min(),ce.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,ce.min(),ce.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ce.min(),ce.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.position=e,this.inclusive=n}}function ad(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n="asc"){this.field=e,this.dir=n}}function xA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{}class je extends wg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FA(e,n,r):n==="array-contains"?new jA(e,r):n==="in"?new $A(e,r):n==="not-in"?new qA(e,r):n==="array-contains-any"?new HA(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UA(e,r):new BA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ys(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends wg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Wt(e,n)}matches(e){return Ag(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ag(t){return t.op==="and"}function Rg(t){return LA(t)&&Ag(t)}function LA(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function hl(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(Rg(t))return t.filters.map((e=>hl(e))).join(",");{const e=t.filters.map((n=>hl(n))).join(",");return`${t.op}(${e})`}}function Sg(t,e){return t instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)})(t,e):t instanceof Wt?(function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Sg(o,s.filters[c])),!0):!1})(t,e):void oe(19439)}function bg(t){return t instanceof je?(function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`})(t):t instanceof Wt?(function(n){return n.op.toString()+" {"+n.getFilters().map(bg).join(" ,")+"}"})(t):"Filter"}class FA extends je{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class UA extends je{constructor(e,n){super(e,"in",n),this.keys=Pg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class BA extends je{constructor(e,n){super(e,"not-in",n),this.keys=Pg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Pg(t,e){return(e.arrayValue?.values||[]).map((n=>ee.fromName(n.referenceValue)))}class jA extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iu(n)&&Di(n.arrayValue,this.value)}}class $A extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class qA extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Di(this.value.arrayValue,n)}}class HA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Di(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function ld(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zA(t,e,n,r,s,i,o)}function ou(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>hl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Es(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Es(r))).join(",")),e.Te=n}return e.Te}function au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cd(t.startAt,e.startAt)&&cd(t.endAt,e.endAt)}function fl(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WA(t,e,n,r,s,i,o,c){return new Cs(t,e,n,r,s,i,o,c)}function cu(t){return new Cs(t)}function ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cg(t){return t.collectionGroup!==null}function gi(t){const e=ue(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new We(rt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Oi(i,r))})),n.has(rt.keyField().canonicalString())||e.Ie.push(new Oi(rt.keyField(),r))}return e.Ie}function nn(t){const e=ue(t);return e.Ee||(e.Ee=KA(e,gi(t))),e.Ee}function KA(t,e){if(t.limitType==="F")return ld(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Oi(s.field,i)}));const n=t.endAt?new Yo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yo(t.startAt.position,t.startAt.inclusive):null;return ld(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dl(t,e){const n=t.filters.concat([e]);return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pl(t,e,n){return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return au(nn(t),nn(e))&&t.limitType===e.limitType}function kg(t){return`${ou(nn(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>bg(s))).join(", ")}]`),Ca(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Es(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Es(s))).join(",")),`Target(${r})`})(nn(t))}; limitType=${t.limitType})`}function Va(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of gi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=ad(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,gi(r),s)||r.endAt&&!(function(o,c,l){const u=ad(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,gi(r),s))})(t,e)}function GA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ng(t){return(e,n)=>{let r=!1;for(const s of gi(t)){const i=QA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QA(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ys(l,u):oe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Me(ee.comparator);function Rn(){return YA}const Vg=new Me(ee.comparator);function ni(...t){let e=Vg;for(const n of t)e=e.insert(n.key,n);return e}function Dg(t){let e=Vg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function wr(){return _i()}function Og(){return _i()}function _i(){return new Mr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const JA=new Me(ee.comparator),XA=new We(ee.comparator);function _e(...t){let e=XA;for(const n of t)e=e.add(n);return e}const ZA=new We(ge);function eR(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function Mg(t){return{integerValue:""+t}}function tR(t,e){return PA(e)?Mg(e):lu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this._=void 0}}function nR(t,e,n){return t instanceof Jo?(function(s,i){const o={fields:{[_g]:{stringValue:gg},[Eg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&su(i)&&(i=ka(i)),i&&(o.fields[yg]=i),{mapValue:o}})(n,e):t instanceof Mi?Lg(t,e):t instanceof xi?Fg(t,e):(function(s,i){const o=xg(s,i),c=hd(o)+hd(s.Ae);return ul(o)&&ul(s.Ae)?Mg(c):lu(s.serializer,c)})(t,e)}function rR(t,e,n){return t instanceof Mi?Lg(t,e):t instanceof xi?Fg(t,e):n}function xg(t,e){return t instanceof Xo?(function(r){return ul(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Jo extends Da{}class Mi extends Da{constructor(e){super(),this.elements=e}}function Lg(t,e){const n=Ug(e);for(const r of t.elements)n.some((s=>un(s,r)))||n.push(r);return{arrayValue:{values:n}}}class xi extends Da{constructor(e){super(),this.elements=e}}function Fg(t,e){let n=Ug(e);for(const r of t.elements)n=n.filter((s=>!un(s,r)));return{arrayValue:{values:n}}}class Xo extends Da{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hd(t){return Fe(t.integerValue||t.doubleValue)}function Ug(t){return iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof xi&&s instanceof xi?_s(r.elements,s.elements,un):r instanceof Xo&&s instanceof Xo?un(r.Ae,s.Ae):r instanceof Jo&&s instanceof Jo})(t.transform,e.transform)}class iR{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function Bg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uu(t.key,Ht.none()):new zi(t.key,t.data,Ht.none());{const n=t.data,r=Rt.empty();let s=new We(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new Dt(s.toArray()),Ht.none())}}function oR(t,e,n){t instanceof zi?(function(s,i,o){const c=s.value.clone(),l=dd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof ur?(function(s,i,o){if(!Co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=dd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(jg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function yi(t,e,n,r){return t instanceof zi?(function(i,o,c,l){if(!Co(i.precondition,o))return c;const u=i.value.clone(),f=pd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ur?(function(i,o,c,l){if(!Co(i.precondition,o))return c;const u=pd(i.fieldTransforms,l,o),f=o.data;return f.setAll(jg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function aR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xg(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function fd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_s(r,s,((i,o)=>sR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends Oa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends Oa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function dd(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,rR(o,c,n[s]))}return r}function pd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nR(i,o,e))}return r}class uu extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&oR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Og();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Bg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,((n,r)=>fd(n,r)))&&_s(this.baseMutations,e.baseMutations,((n,r)=>fd(n,r)))}}class hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return JA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,Ee;function fR(t){switch(t){case L.OK:return oe(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function $g(t){if(t===void 0)return An("GRPC error has no .code"),L.UNKNOWN;switch(t){case Be.OK:return L.OK;case Be.CANCELLED:return L.CANCELLED;case Be.UNKNOWN:return L.UNKNOWN;case Be.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Be.INTERNAL:return L.INTERNAL;case Be.UNAVAILABLE:return L.UNAVAILABLE;case Be.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Be.NOT_FOUND:return L.NOT_FOUND;case Be.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Be.ABORTED:return L.ABORTED;case Be.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Be.DATA_LOSS:return L.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=Be||(Be={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new Zn([4294967295,4294967295],0);function md(t){const e=dR().encode(t),n=new rg;return n.update(e),new Uint8Array(n.digest())}function gd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zn([n,r],0),new Zn([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ri(`Invalid padding: ${n}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ri(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Zn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Zn.fromNumber(r)));return s.compare(pR)===1&&(s=new Zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=md(e),[r,s]=gd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=md(e),[r,s]=gd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ma(ce.min(),s,new Me(ge),Rn(),_e())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wi(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class qg{constructor(e,n){this.targetId=e,this.Ce=n}}class Hg{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _d{constructor(){this.ve=0,this.Fe=yd(),this.Me=it.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}})),new Wi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=yd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class mR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rn(),this.Je=_o(),this.He=_o(),this.Ye=new Me(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(fl(i))if(r===0){const o=new ee(i.path);this.et(n,o,pt.newNoDocument(o,ce.min()))}else Ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ir(r).toUint8Array()}catch(l){if(l instanceof mg)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return gs(l instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&fl(c.target)){const l=new ee(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,pt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ma(e,n,this.Ye,this.je,r);return this.je=Rn(),this.Je=_o(),this.He=_o(),this.Ye=new Me(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _d,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new We(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _d),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _o(){return new Me(ee.comparator)}function yd(){return new Me(ee.comparator)}const gR={asc:"ASCENDING",desc:"DESCENDING"},_R={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yR={and:"AND",or:"OR"};class ER{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ml(t,e){return t.useProto3Json||Ca(e)?e:{value:e}}function Zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vR(t,e){return Zo(t,e.toTimestamp())}function rn(t){return Ae(!!t,49232),ce.fromTimestamp((function(n){const r=sr(n);return new De(r.seconds,r.nanos)})(t))}function du(t,e){return gl(t,e).canonicalString()}function gl(t,e){const n=(function(s){return new Ne(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Wg(t){const e=Ne.fromString(t);return Ae(Jg(e),10190,{key:e.toString()}),e}function _l(t,e){return du(t.databaseId,e.path)}function Cc(t,e){const n=Wg(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Gg(n))}function Kg(t,e){return du(t.databaseId,e)}function TR(t){const e=Wg(t);return e.length===4?Ne.emptyPath():Gg(e)}function yl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gg(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ed(t,e,n){return{name:_l(t,e),fields:n.value.mapValue.fields}}function IR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ae(f===void 0||typeof f=="string",58123),it.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),it.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?L.UNKNOWN:$g(u.code);return new J(f,u.message||"")})(o);n=new Hg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ce.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ko(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cc(t,r.document),i=r.readTime?rn(r.readTime):ce.min(),o=pt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ko([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cc(t,r.document),i=r.removedTargetIds||[];n=new ko([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hR(s,i),c=r.targetId;n=new qg(c,o)}}return n}function wR(t,e){let n;if(e instanceof zi)n={update:Ed(t,e.key,e.value)};else if(e instanceof uu)n={delete:_l(t,e.key)};else if(e instanceof ur)n={update:Ed(t,e.key,e.data),updateMask:VR(e.fieldMask)};else{if(!(e instanceof cR))return oe(16599,{Vt:e.type});n={verify:_l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw oe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:vR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(t,e.precondition)),n}function AR(t,e){return t&&t.length>0?(Ae(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ce.min())&&(o=rn(i)),new iR(o,s.transformResults||[])})(n,e)))):[]}function RR(t,e){return{documents:[Kg(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Kg(t,s);const i=(function(u){if(u.length!==0)return Yg(Wt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Jr(m.field),direction:CR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ml(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function bR(t){let e=TR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Qg(p);return m instanceof Wt&&Rg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Oi(Xr(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Ca(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new Yo(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Yo(_,m)})(n.endAt)),WA(e,s,o,i,c,"F",l,u)}function PR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return je.create(Xr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Wt.create(n.compositeFilter.filters.map((r=>Qg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(n.compositeFilter.op))})(t):oe(30097,{filter:t})}function CR(t){return gR[t]}function kR(t){return _R[t]}function NR(t){return yR[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return rt.fromServerFormat(t.fieldPath)}function Yg(t){return t instanceof je?(function(n){if(n.op==="=="){if(od(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(id(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(od(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(id(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:kR(n.op),value:n.value}}})(t):t instanceof Wt?(function(n){const r=n.getFilters().map((s=>Yg(s)));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}})(t):oe(54877,{filter:t})}function VR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.yt=e}}function OR(t){const e=bR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.Cn=new xR}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(rr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class xR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xg=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Xg,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vs(0)}static cr(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="LruGarbageCollector",LR=1048576;function Id([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class FR{constructor(e){this.Ir=e,this.buffer=new We(Id),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Id(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Td,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ps(n)?X(Td,"Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.Vr(3e5)}))}}class BR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Pa.ce);const r=new FR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(vd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Qr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function jR(t,e){return new BR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.changes=new Mr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&yi(r.mutation,s,Dt.empty(),De.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=wr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ni();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Rn();const o=_i(),c=(function(){return _i()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ur)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),yi(f.mutation,u,f.mutation.getFieldMask(),De.now())):o.set(u.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new qR(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=_i();let s=new Me(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Dt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Og();f.forEach((m=>{if(!i.has(m)){const _=Bg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(wr());let c=ki,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:Dg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next((r=>{let s=ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new Cs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))}));let c=ni();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&yi(f.mutation,u,Dt.empty(),De.now()),Va(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:OR(s.bundledQuery),readTime:rn(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.overlays=new Me(ee.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new ee(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=wr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uR(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.Qr=new We(Je.$r),this.Ur=new We(Je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Je(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ee(new Ne([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ee(new Ne([])),r=new Je(n,e),s=new Je(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Je(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ee.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new We(Je.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?ru:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ge);return n.forEach((s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ee(i),0);let c=new We(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Je(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.ri=e,this.docs=(function(){return new Me(ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,c=new ee(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AA(wA(f),r)<=0||(s.has(f.key)||Va(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new YR(this)}getSize(e){return F.resolve(this.size)}}class YR extends $R{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.persistence=e,this.si=new Mr((n=>ou(n)),au),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new pu,this.targetCount=0,this.ai=vs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Pa(0),this.li=!1,this.li=!0,this.hi=new KR,this.referenceDelegate=e(this),this.Pi=new JR(this),this.indexManager=new MR,this.remoteDocumentCache=(function(s){return new QR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new DR(n),this.Ii=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new GR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new XR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class XR extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class mu{constructor(e){this.persistence=e,this.Ri=new pu,this.Vi=null}static mi(e){return new mu(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=ee.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ea{constructor(e,n){this.persistence=e,this.pi=new Mr((r=>CA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=jR(this,n)}static mi(e,n){return new ea(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bo(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return zI()?8:bA(_t())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ZR;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Qr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(Qr()<=me.DEBUG&&X("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Qr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):F.resolve())}ys(e,n){if(ud(n))return F.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=pl(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,pl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return ud(n)||s.isEqual(ce.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(Qr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.vs(e,o,n,IA(s,ki)).next((c=>c)))}))}Ds(e,n){let r=new We(Ng(e));return n.forEach(((s,i)=>{Va(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Qr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.ps.getDocumentsMatchingQuery(e,n,rr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="LocalStore",tS=3e8;class nS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(ge),this.xs=new Mr((i=>ou(i)),au),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function rS(t,e,n,r){return new nS(t,e,n,r)}async function e_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function sS(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((C=>{_=_.next((()=>f.getEntry(l,C))).next((V=>{const k=u.docVersions.get(C);Ae(k!==null,48541),V.version.compareTo(k)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function t_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function iS(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(V,k,D){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=tS?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Rn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(oS(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(ce.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function oS(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Rn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(_u,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function aS(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ru),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function cS(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function El(t,e,n){const r=ue(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ps(o))throw o;X(_u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function wd(t,e,n){const r=ue(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=ue(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,nn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:_e()))).next((c=>(lS(r,GA(e),c),{documents:c,Qs:i})))))}function lS(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ad{constructor(){this.activeTargetIds=eR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uS{constructor(){this.Mo=new Ad,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ad,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="ConnectivityMonitor";class Sd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Rd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Rd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo=null;function vl(){return yo===null?yo=(function(){return 268435456+Math.round(2147483648*Math.random())})():yo++,"0x"+yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="RestConnection",fS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Go?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=vl(),c=this.zo(e,n.toUriEncodedString());X(kc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=As(u);return this.Jo(e,c,l,r,f).then((p=>(X(kc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw gs(kc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=fS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class mS extends dS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=vl();return new Promise(((c,l)=>{const u=new sg;u.setWithCredentials(!0),u.listenOnce(ig.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case So.NO_ERROR:const p=u.getResponseJson();X(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case So.TIMEOUT:X(ut,`RPC '${e}' ${o} timed out`),l(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case So.HTTP_ERROR:const m=u.getStatus();if(X(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const V=(function(D){const U=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(U)>=0?U:L.UNKNOWN})(C.status);l(new J(V,C.message))}else l(new J(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(L.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(ut,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(ut,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=vl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cg(),c=ag(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const C=new pS({Yo:k=>{_?X(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(X(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ut,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),V=(k,D,U)=>{k.listen(D,(H=>{try{U(H)}catch(W){setTimeout((()=>{throw W}),0)}}))};return V(p,ti.EventType.OPEN,(()=>{_||(X(ut,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),V(p,ti.EventType.CLOSE,(()=>{_||(_=!0,X(ut,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))})),V(p,ti.EventType.ERROR,(k=>{_||(_=!0,gs(ut,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.a_(new J(L.UNAVAILABLE,"The operation could not be completed")))})),V(p,ti.EventType.MESSAGE,(k=>{if(!_){const D=k.data[0];Ae(!!D,16349);const U=D,H=U?.error||U[0]?.error;if(H){X(ut,`RPC '${e}' stream ${s} received error:`,H);const W=H.status;let ne=(function(y){const E=Be[y];if(E!==void 0)return $g(E)})(W),de=H.message;ne===void 0&&(ne=L.INTERNAL,de="Unknown error status: "+W+" with message "+H.message),_=!0,C.a_(new J(ne,de)),p.close()}else X(ut,`RPC '${e}' stream ${s} received:`,D),C.u_(D)}})),V(c,og.STAT_EVENT,(k=>{k.stat===al.PROXY?X(ut,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===al.NOPROXY&&X(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return new ER(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="PersistentStream";class r_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new n_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gS extends r_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=IR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?rn(o.readTime):ce.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=yl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=fl(l)?{documents:RR(i,l)}:{query:SR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zg(i,o.resumeToken);const u=ml(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Zo(i,o.snapshotVersion.toTimestamp());const u=ml(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=PR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=yl(this.serializer),n.removeTarget=e,this.q_(n)}}class _S extends r_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=AR(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>wR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{}class ES extends yS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,gl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,gl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class vS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="RemoteStore";class TS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{xr(this)&&(X(Nr,"Restarting streams for network reachability change."),await(async function(l){const u=ue(l);u.Ea.add(4),await Ki(u),u.Ra.set("Unknown"),u.Ea.delete(4),await La(u)})(this))}))})),this.Ra=new vS(r,s)}}async function La(t){if(xr(t))for(const e of t.da)await e(!0)}async function Ki(t){for(const e of t.da)await e(!1)}function s_(t,e){const n=ue(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Tu(n)?vu(n):ks(n).O_()&&Eu(n,e))}function yu(t,e){const n=ue(t),r=ks(n);n.Ia.delete(e),r.O_()&&i_(n,e),n.Ia.size===0&&(r.O_()?r.L_():xr(n)&&n.Ra.set("Unknown"))}function Eu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ks(t).Y_(e)}function i_(t,e){t.Va.Ue(e),ks(t).Z_(e)}function vu(t){t.Va=new mR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.Ra.ua()}function Tu(t){return xr(t)&&!ks(t).x_()&&t.Ia.size>0}function xr(t){return ue(t).Ea.size===0}function o_(t){t.Va=void 0}async function IS(t){t.Ra.set("Online")}async function wS(t){t.Ia.forEach(((e,n)=>{Eu(t,e)}))}async function AS(t,e){o_(t),Tu(t)?(t.Ra.ha(e),vu(t)):t.Ra.set("Unknown")}async function RS(t,e,n){if(t.Ra.set("Online"),e instanceof Hg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof ko?t.Va.Ze(e):e instanceof qg?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await t_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),i_(i,l);const p=new Kn(f.target,l,u,f.sequenceNumber);Eu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Nr,"Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Ps(e))throw e;t.Ea.add(1),await Ki(t),t.Ra.set("Offline"),n||(n=()=>t_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Nr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await La(t)}))}function a_(t,e){return e().catch((n=>ta(t,n,e)))}async function Fa(t){const e=ue(t),n=ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ru;for(;SS(e);)try{const s=await aS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,bS(e,s)}catch(s){await ta(e,s)}c_(e)&&l_(e)}function SS(t){return xr(t)&&t.Ta.length<10}function bS(t,e){t.Ta.push(e);const n=ar(t);n.O_()&&n.X_&&n.ea(e.mutations)}function c_(t){return xr(t)&&!ar(t).x_()&&t.Ta.length>0}function l_(t){ar(t).start()}async function PS(t){ar(t).ra()}async function CS(t){const e=ar(t);for(const n of t.Ta)e.ea(n.mutations)}async function kS(t,e,n){const r=t.Ta.shift(),s=hu.from(r,e,n);await a_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Fa(t)}async function NS(t,e){e&&ar(t).X_&&await(async function(r,s){if((function(o){return fR(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();ar(r).B_(),await a_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Fa(r)}})(t,e),c_(t)&&l_(t)}async function Pd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(Nr,"RemoteStore received new credentials");const r=xr(n);n.Ea.add(3),await Ki(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await La(n)}async function VS(t,e){const n=ue(t);e?(n.Ea.delete(2),await La(n)):e||(n.Ea.add(2),await Ki(n),n.Ra.set("Unknown"))}function ks(t){return t.ma||(t.ma=(function(n,r,s){const i=ue(n);return i.sa(),new gS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:IS.bind(null,t),t_:wS.bind(null,t),r_:AS.bind(null,t),H_:RS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Tu(t)?vu(t):t.Ra.set("Unknown")):(await t.ma.stop(),o_(t))}))),t.ma}function ar(t){return t.fa||(t.fa=(function(n,r,s){const i=ue(n);return i.sa(),new _S(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:PS.bind(null,t),r_:NS.bind(null,t),ta:CS.bind(null,t),na:kS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Fa(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Nr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Iu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(t,e){if(An("AsyncQueue",`${e}: ${t}`),Ps(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{static emptySet(e){return new is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=ni(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.ga=new Me(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ts{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ts(e,n,is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class OS{constructor(){this.queries=kd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=kd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new J(L.ABORTED,"Firestore shutting down"))}}function kd(){return new Mr((t=>kg(t)),Na)}async function MS(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new DS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=wu(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Au(n)}async function xS(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LS(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Au(n)}function FS(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Au(t){t.Ca.forEach((e=>{e.next()}))}var Tl,Nd;(Nd=Tl||(Tl={})).Ma="default",Nd.Cache="cache";class US{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.key=e}}class h_{constructor(e){this.key=e}}class BS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=Ng(e),this.tu=new is(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Cd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Va(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?C!==V&&(r.track({type:3,doc:_}),k=!0):this.su(m,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(l||u)&&(c=!0)),k&&(_?(o=o.add(_),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,C){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:k})}};return V(_)-V(C)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ts(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new h_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new u_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ru="SyncEngine";class jS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.hu=!1}}class qS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Mr((c=>kg(c)),Na),this.Iu=new Map,this.Eu=new Set,this.du=new Me(ee.comparator),this.Au=new Map,this.Ru=new pu,this.Vu={},this.mu=new Map,this.fu=vs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HS(t,e,n=!0){const r=__(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await f_(r,e,n,!0),s}async function zS(t,e){const n=__(t);await f_(n,e,!0,!1)}async function f_(t,e,n,r){const s=await cS(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await WS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&s_(t.remoteStore,s),c}async function WS(t,e,n,r,s){t.pu=(p,m,_)=>(async function(V,k,D,U){let H=k.view.ru(D);H.Cs&&(H=await wd(V.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,H))));const W=U&&U.targetChanges.get(k.targetId),ne=U&&U.targetMismatches.get(k.targetId)!=null,de=k.view.applyChanges(H,V.isPrimaryClient,W,ne);return Dd(V,k.targetId,de.au),de.snapshot})(t,p,m,_);const i=await wd(t.localStore,e,!0),o=new BS(e,i.Qs),c=o.ru(i.documents),l=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Dd(t,n,u.au);const f=new jS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function KS(t,e,n){const r=ue(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Na(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await El(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yu(r.remoteStore,s.targetId),Il(r,s.targetId)})).catch(bs)):(Il(r,s.targetId),await El(r.localStore,s.targetId,!0))}async function GS(t,e){const n=ue(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yu(n.remoteStore,r.targetId))}async function QS(t,e,n){const r=nb(t);try{const s=await(function(o,c){const l=ue(o),u=De.now(),f=c.reduce(((_,C)=>_.add(C.key)),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=Rn(),V=_e();return l.Ns.getEntries(_,f).next((k=>{C=k,C.forEach(((D,U)=>{U.isValidDocument()||(V=V.add(D))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,C))).next((k=>{p=k;const D=[];for(const U of c){const H=aR(U,p.get(U.key).overlayedDocument);H!=null&&D.push(new ur(U.key,H,Ig(H.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,D,c)})).next((k=>{m=k;const D=k.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(_,k.batchId,D)}))})).then((()=>({batchId:m.batchId,changes:Dg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Me(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await Gi(r,s.changes),await Fa(r.remoteStore)}catch(s){const i=wu(s,"Failed to persist write");n.reject(i)}}async function d_(t,e){const n=ue(t);try{const r=await iS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ae(o.hu,14607):s.removedDocuments.size>0&&(Ae(o.hu,42227),o.hu=!1))})),await Gi(n,r,e)}catch(r){await bs(r)}}function Vd(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ue(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Au(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YS(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(ee.comparator);o=o.insert(i,pt.newNoDocument(i,ce.min()));const c=_e().add(i),l=new Ma(ce.min(),new Map,new Me(ge),o,c);await d_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Su(r)}else await El(r.localStore,e,!1).then((()=>Il(r,e,n))).catch(bs)}async function JS(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await sS(n.localStore,e);m_(n,r,null),p_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await bs(s)}}async function XS(t,e,n){const r=ue(t);try{const s=await(function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ae(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);m_(r,e,n),p_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await bs(s)}}function p_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function m_(t,e,n){const r=ue(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||g_(t,r)}))}function g_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(yu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Su(t))}function Dd(t,e,n){for(const r of n)r instanceof u_?(t.Ru.addReference(r.key,e),ZS(t,r)):r instanceof h_?(X(Ru,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||g_(t,r.key)):oe(19791,{wu:r})}function ZS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Ru,"New document in limbo: "+n),t.Eu.add(r),Su(t))}function Su(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ee(Ne.fromString(e)),r=t.fu.next();t.Au.set(r,new $S(n)),t.du=t.du.insert(n,r),s_(t.remoteStore,new Kn(nn(cu(n.path)),r,"TargetPurposeLimboResolution",Pa.ce))}}async function Gi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=gu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Ps(p))throw p;X(_u,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),C=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function eb(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(Ru,"User change. New user:",e.toKey());const r=await e_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new J(L.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.Ls)}}function tb(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function __(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=d_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YS.bind(null,e),e.Pu.H_=LS.bind(null,e.eventManager),e.Pu.yu=FS.bind(null,e.eventManager),e}function nb(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XS.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rS(this.persistence,new eS,e.initialUser,this.serializer)}Cu(e){return new Zg(mu.mi,this.serializer)}Du(e){return new uS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class rb extends na{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ae(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Zg((r=>ea.mi(r,n)),this.serializer)}}class wl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eb.bind(null,this.syncEngine),await VS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OS})()}createDatastore(e){const n=xa(e.databaseInfo.databaseId),r=(function(i){return new mS(i)})(e.databaseInfo);return(function(i,o,c,l){return new ES(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new TS(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Vd(this.syncEngine,n,0)),(function(){return Sd.v()?new Sd:new hS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new qS(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ue(n);X(Nr,"RemoteStore shutting down."),r.Ea.add(5),await Ki(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wl.provider={build:()=>new wl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="FirestoreClient";class ib{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),X(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await e_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Od(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ob(t);X(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Pd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Pd(e.remoteStore,s))),t._onlineComponents=e}async function ob(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(cr,"Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new na)}}else X(cr,"Using default OfflineComponentProvider"),await Vc(t,new rb(void 0));return t._offlineComponents}async function y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(cr,"Using user provided OnlineComponentProvider"),await Od(t,t._uninitializedComponentsProvider._online)):(X(cr,"Using default OnlineComponentProvider"),await Od(t,new wl))),t._onlineComponents}function ab(t){return y_(t).then((e=>e.syncEngine))}async function Md(t){const e=await y_(t),n=e.eventManager;return n.onListen=HS.bind(null,e.syncEngine),n.onUnlisten=KS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GS.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firestore.googleapis.com",Ld=!0;class Fd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=v_,this.ssl=Ld}else this.host=e.host,this.ssl=e.ssl??Ld;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LR)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ua{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hA;switch(r.type){case"firstParty":return new mA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=xd.get(n);r&&(X("ComponentProvider","Removing Datastore"),xd.delete(n),r.terminate())})(this),Promise.resolve()}}function cb(t,e,n,r={}){t=er(t,Ua);const s=As(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Qm(`https://${c}`),Ym("Firestore",!0)),i.host!==v_&&i.host!==c&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Pr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=ft.MOCK_USER;else{u=xI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}t._authCredentials=new fA(new ug(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Hi(n,qe._jsonSchema))return new qe(e,r||null,new ee(Ne.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class tr extends Lr{constructor(e,n,r){super(e,n,cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new ee(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function lb(t,e,...n){if(t=Ke(t),hg("collection","path",e),t instanceof Ua){const r=Ne.fromString(e,...n);return Yf(r),new tr(t,null,r)}{if(!(t instanceof qe||t instanceof tr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Yf(r),new tr(t.firestore,null,r)}}function Al(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=nu.newId()),hg("doc","path",e),t instanceof Ua){const r=Ne.fromString(e,...n);return Qf(r),new qe(t,null,new ee(r))}{if(!(t instanceof qe||t instanceof tr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Qf(r),new qe(t.firestore,t instanceof tr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="AsyncQueue";class Bd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new n_(this,"async_queue_retry"),this._c=()=>{const r=Nc();r&&X(Ud,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Sr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ps(e))throw e;X(Ud,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,An("INTERNAL UNHANDLED ERROR: ",jd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Iu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:jd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Is extends Ua{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Bd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bd(e),this._firestoreClient=void 0,await e}}}function ub(t,e){const n=typeof t=="object"?t:eg(),r=typeof t=="string"?t:Go,s=eu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=OI("firestore");i&&cb(s,...i)}return s}function T_(t){if(t._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hb(t),t._firestoreClient}function hb(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new VA(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,E_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ib(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(it.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hi(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:$e("string",Mt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Hi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:$e("string",sn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hi(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new on(e.vectorValues);throw new J(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:$e("string",on._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=/^__.*__$/;class db{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}class I_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function w_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:t})}}class Pu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Pu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(w_(this.Ac)&&fb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class pb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xa(e)}Cc(e,n,r,s=!1){return new Pu({Ac:e,methodName:n,Dc:r,path:rt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cu(t){const e=t._freezeSettings(),n=xa(t._databaseId);return new pb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mb(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ku("Data must be an object, but it was:",o,r);const c=A_(r,o);let l,u;if(i.merge)l=new Dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Rl(e,p,n);if(!o.contains(m))throw new J(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);S_(f,m)||f.push(m)}l=new Dt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new db(new Rt(c),l,u)}class ja extends bu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ja}}function gb(t,e,n,r){const s=t.Cc(1,e,n);ku("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();lr(r,((l,u)=>{const f=Nu(e,l,n);u=Ke(u);const p=s.yc(f);if(u instanceof ja)i.push(f);else{const m=Qi(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Dt(i);return new I_(o,c,s.fieldTransforms)}function _b(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Rl(e,r,n)],l=[s];if(i.length%2!=0)throw new J(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Rl(e,i[m])),l.push(i[m+1]);const u=[],f=Rt.empty();for(let m=c.length-1;m>=0;--m)if(!S_(u,c[m])){const _=c[m];let C=l[m];C=Ke(C);const V=o.yc(_);if(C instanceof ja)u.push(_);else{const k=Qi(C,V);k!=null&&(u.push(_),f.set(_,k))}}const p=new Dt(u);return new I_(f,p,o.fieldTransforms)}function yb(t,e,n,r=!1){return Qi(n,t.Cc(r?4:3,e))}function Qi(t,e){if(R_(t=Ke(t)))return ku("Unsupported field value:",e,t),A_(t,e);if(t instanceof bu)return(function(r,s){if(!w_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Qi(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:zg(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof on)return(function(o,c){return{mapValue:{fields:{[vg]:{stringValue:Tg},[Qo]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return lu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ba(r)}`)})(t,e)}function A_(t,e){const n={};return pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(t,((r,s)=>{const i=Qi(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function R_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof sn||t instanceof Mt||t instanceof qe||t instanceof bu||t instanceof on)}function ku(t,e,n){if(!R_(n)||!fg(n)){const r=ba(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Rl(t,e,n){if((e=Ke(e))instanceof Ba)return e._internalPath;if(typeof e=="string")return Nu(t,e);throw ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const Eb=new RegExp("[~\\*/\\[\\]]");function Nu(t,e,n){if(e.search(Eb)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ba(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(L.INVALID_ARGUMENT,c+t+l)}function S_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vb extends b_{data(){return super.data()}}function Vu(t,e){return typeof e=="string"?Nu(t,e):e instanceof Ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Du{}class P_ extends Du{}function Ib(t,e,...n){let r=[];e instanceof Du&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Mu)).length,c=i.filter((l=>l instanceof Ou)).length;if(o>1||o>0&&c>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ou extends P_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ou(e,n,r)}_apply(e){const n=this._parse(e);return C_(e._query,n),new Lr(e.firestore,e.converter,dl(e._query,n))}_parse(e){const n=Cu(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hd(p,f);const C=[];for(const V of p)C.push(qd(l,i,V));m={arrayValue:{values:C}}}else m=qd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hd(p,f),m=yb(c,o,p,f==="in"||f==="not-in");return je.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mu extends Du{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)C_(o,l),o=dl(o,l)})(e._query,n),new Lr(e.firestore,e.converter,dl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xu extends P_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xu(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oi(i,o)})(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Cs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function wb(t,e="asc"){const n=e,r=Vu("orderBy",t);return xu._create(r,n)}function qd(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cg(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ee.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sd(t,new ee(r))}if(n instanceof qe)return sd(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function Hd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C_(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ab{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Qo].arrayValue?.values?.map((r=>Fe(r.doubleValue)));return new on(n)}convertGeoPoint(e){return new sn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ka(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=sr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Ae(Jg(r),9688,{name:e});const s=new Vi(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends b_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:$e("string",br._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class No extends br{data(e={}){return super.data(e)}}class os{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new No(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new No(s._firestore,s._userDataWriter,c.doc.key,c.doc,new si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new No(s._firestore,s._userDataWriter,c.doc.key,c.doc,new si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Sb(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Sb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}os._jsonSchemaVersion="firestore/querySnapshot/1.0",os._jsonSchema={type:$e("string",os._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class k_ extends Ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function bb(t,e,n,...r){t=er(t,qe);const s=er(t.firestore,Is),i=Cu(s);let o;return o=typeof(e=Ke(e))=="string"||e instanceof Ba?_b(i,"updateDoc",t._key,e,n,r):gb(i,"updateDoc",t._key,e),Lu(s,[o.toMutation(t._key,Ht.exists(!0))])}function Pb(t){return Lu(er(t.firestore,Is),[new uu(t._key,Ht.none())])}function Cb(t,e){const n=er(t.firestore,Is),r=Al(t),s=Rb(t.converter,e);return Lu(n,[mb(Cu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then((()=>r))}function kb(t,...e){t=Ke(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||$d(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if($d(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof qe)o=er(t.firestore,Is),c=cu(t._key.path),i={next:l=>{e[r]&&e[r](Nb(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=er(t,Lr);o=er(l.firestore,Is),c=l._query;const u=new k_(o);i={next:f=>{e[r]&&e[r](new os(o,u,l,f))},error:e[r+1],complete:e[r+2]},Tb(t._query)}return(function(u,f,p,m){const _=new sb(m),C=new US(f,_,p);return u.asyncQueue.enqueueAndForget((async()=>MS(await Md(u),C))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>xS(await Md(u),C)))}})(T_(o),c,s,i)}function Lu(t,e){return(function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget((async()=>QS(await ab(r),s,i))),i.promise})(T_(t),e)}function Nb(t,e,n){const r=n.docs.get(e._key),s=new k_(t);return new br(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ss=s})(Rs),ms(new Cr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Is(new dA(r.getProvider("auth-internal")),new gA(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Xn(zf,Wf,e),Xn(zf,Wf,"esm2020")})();function N_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vb=N_,V_=new $i("auth","Firebase",N_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Xl("@firebase/auth");function Db(t,...e){sa.logLevel<=me.WARN&&sa.warn(`Auth (${Rs}): ${t}`,...e)}function Vo(t,...e){sa.logLevel<=me.ERROR&&sa.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Fu(t,...e)}function an(t,...e){return Fu(t,...e)}function D_(t,e,n){const r={...Vb(),[e]:n};return new $i("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return D_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V_.create(t,...e)}function ie(t,e,...n){if(!t)throw Fu(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Sn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return typeof self<"u"&&self.location?.href||""}function Ob(){return zd()==="http:"||zd()==="https:"}function zd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ob()||$I()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=UI()||qI()}get(){return Mb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ub=new Yi(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fr(t,e,n,r,s={}){return M_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=qi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return jI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&As(t.emulatorConfig.host)&&(u.credentials="include"),O_.fetch()(await x_(t,t.config.apiHost,n,c),u)})}async function M_(t,e,n){t._canInitEmulator=!1;const r={...Lb,...e};try{const s=new jb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw D_(t,f,u);Kt(t,f)}}catch(s){if(s instanceof Cn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function Ji(t,e,n,r,s={}){const i=await fr(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function x_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Uu(t.config,s):`${t.config.apiScheme}://${s}`;return Fb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Ub.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Wd(t){return t!==void 0&&t.enterprise!==void 0}class $b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qb(t,e){return fr(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zb(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),s=Bu(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ei(Dc(s.auth_time)),issuedAtTime:Ei(Dc(s.iat)),expirationTime:Ei(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Dc(t){return Number(t)*1e3}function Bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zm(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Kd(t){const e=Bu(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&Wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){const e=t.auth,n=await t.getIdToken(),r=await Li(t,ia(e,{idToken:n}));ie(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?L_(s.providerUserInfo):[],o=Qb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Gb(t){const e=Ke(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function L_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){const n=await M_(t,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await x_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&As(t.emulatorConfig.host)&&(l.credentials="include"),O_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jb(t,e){return fr(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Kd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new as;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zb(this,e)}reload(){return Gb(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Li(this,Hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:C,stsTokenManager:V}=n;ie(p&&V,e,"internal-error");const k=as.fromJSON(this.name,V);ie(typeof p=="string",e,"internal-error"),Fn(r,e.name),Fn(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),Fn(i,e.name),Fn(o,e.name),Fn(c,e.name),Fn(l,e.name),Fn(u,e.name),Fn(f,e.name);const D=new $t({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(D.providerData=C.map(U=>({...U}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new as;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?L_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new as;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;function yn(t){Sn(t instanceof Function,"Expected a class definition");let e=Gd.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const Qd=F_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ia(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(yn(Qd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||yn(Qd);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ia(e,{idToken:f}).catch(()=>{});if(!m)break;p=await $t._fromGetAccountInfoResponse(e,m,f)}else p=$t._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H_(e))return"Blackberry";if(z_(e))return"Webos";if(B_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function U_(t=_t()){return/firefox\//i.test(t)}function B_(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(t=_t()){return/crios\//i.test(t)}function $_(t=_t()){return/iemobile/i.test(t)}function q_(t=_t()){return/android/i.test(t)}function H_(t=_t()){return/blackberry/i.test(t)}function z_(t=_t()){return/webos/i.test(t)}function ju(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=_t()){return ju(t)&&!!window.navigator?.standalone}function Zb(){return HI()&&document.documentMode===10}function W_(t=_t()){return ju(t)||q_(t)||z_(t)||H_(t)||/windows phone/i.test(t)||$_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t,e=[]){let n;switch(t){case"Browser":n=Yd(_t());break;case"Worker":n=`${Yd(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e={}){return fr(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=6;class rP{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??nP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jd(this),this.idTokenSubscription=new Jd(this),this.beforeStateQueue=new eP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ia(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(En(this));const n=e?Ke(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tP(this),n=new rP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Db(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Fr(t){return Ke(t)}class Jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iP(t){$a=t}function G_(t){return $a.loadJS(t)}function oP(){return $a.recaptchaEnterpriseScript}function aP(){return $a.gapiScript}function cP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lP{constructor(){this.enterprise=new uP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const hP="recaptcha-enterprise",Q_="NO_RECAPTCHA";class fP{constructor(e){this.type=hP,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{qb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new $b(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Q_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Wd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=oP();l.length!==0&&(l+=c),G_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Xd(t,e,n,r=!1,s=!1){const i=new fP(t);let o;if(s)o=Q_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t,e){const n=eu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function pP(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(yn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function mP(t,e,n){const r=Fr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Y_(e),{host:o,port:c}=gP(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Pr(u,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,As(o)?(Qm(`${i}//${o}${l}`),Ym("Auth",!0)):_P()}function Y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gP(t){const e=Y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zd(o)}}}function Zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function yP(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return Ji(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return Ji(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function TP(t,e){return Ji(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends $u{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pl(e,n,"signInWithPassword",EP);case"emailLink":return vP(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pl(e,r,"signUpPassword",yP);case"emailLink":return TP(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Ji(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="http://localhost";class Vr extends $u{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:IP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AP(t){const e=Zs(ei(t)).link,n=e?Zs(ei(e)).deep_link_id:null,r=Zs(ei(t)).deep_link_id;return(r?Zs(ei(r)).link:null)||r||n||e||t}class qu{constructor(e){const n=Zs(ei(e)),r=n.apiKey??null,s=n.oobCode??null,i=wP(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=AP(e);try{return new qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qu.parseLink(n);return ie(r,"argument-error"),Fi._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends J_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Xi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Xi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Xi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e){return Ji(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=ep(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ep(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Cn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function X_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function SP(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Li(t,X_(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Bu(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e,n=!1){if(Ot(t.app))return Promise.reject(En(t));const r="signIn",s=await X_(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PP(t,e){return Z_(Fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CP(t,e,n){if(Ot(t.app))return Promise.reject(En(t));const r=Fr(t),o=await Pl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ey(t),l}),c=await Dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function kP(t,e,n){return Ot(t.app)?Promise.reject(En(t)):PP(Ke(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}function NP(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function VP(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function DP(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function OP(t){return Ke(t).signOut()}const ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=1e3,xP=10;class ny extends ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ny.type="LOCAL";const LP=ny;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry extends ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ry.type="SESSION";const sy=ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await FP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Hu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function BP(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function jP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $P(){return navigator?.serviceWorker?.controller||null}function qP(){return iy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="firebaseLocalStorageDb",HP=1,la="firebaseLocalStorage",ay="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ha(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function zP(){const t=indexedDB.deleteDatabase(oy);return new Zi(t).toPromise()}function Cl(){const t=indexedDB.open(oy,HP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:ay})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await zP(),e(await Cl()))})})}async function tp(t,e,n){const r=Ha(t,!0).put({[ay]:e,value:n});return new Zi(r).toPromise()}async function WP(t,e){const n=Ha(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=Ha(t,!0).delete(e);return new Zi(n).toPromise()}const KP=800,GP=3;class cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(qP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await jP(),!this.activeServiceWorker)return;this.sender=new UP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$P()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await tp(e,ca,"1"),await np(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ha(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const QP=cy;new Yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t,e){return e?yn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends $u{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JP(t){return Z_(t.auth,new zu(t),t.bypassAuthState)}function XP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),bP(n,new zu(t),t.bypassAuthState)}async function ZP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),SP(n,new zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JP;case"linkViaPopup":case"linkViaRedirect":return ZP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:Kt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Yi(2e3,1e4);class Zr extends ly{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eC.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="pendingRedirect",Oo=new Map;class nC extends ly{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await rC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rC(t,e){const n=oC(e),r=iC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sC(t,e){Oo.set(t._key(),e)}function iC(t){return yn(t._redirectPersistence)}function oC(t){return Do(tC,t.config.apiKey,t.name)}async function aC(t,e,n=!1){if(Ot(t.app))return Promise.reject(En(t));const r=Fr(t),s=YP(r,e),o=await new nC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=600*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!uy(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(an(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cC&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function uC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function pC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hC(t);for(const n of e)try{if(mC(n))return}catch{}Kt(t,"unauthorized-domain")}function mC(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dC.test(n))return!1;if(fC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Yi(3e4,6e4);function sp(){const t=cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _C(t){return new Promise((e,n)=>{function r(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),n(an(t,"network-request-failed"))},timeout:gC.get()})}if(cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cn().gapi?.load)r();else{const s=cP("iframefcb");return cn()[s]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},G_(`${aP()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function yC(t){return Mo=Mo||_C(t),Mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new Yi(5e3,15e3),vC="__/auth/iframe",TC="emulator/auth/iframe",IC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AC(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uu(e,TC):`https://${t.config.authDomain}/${vC}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},s=wC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qi(r).slice(1)}`}async function RC(t){const e=await yC(t),n=cn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:AC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},EC.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bC=500,PC=600,CC="_blank",kC="http://localhost";class ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=bC,s=PC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...SC,width:r.toString(),height:s.toString(),top:i,left:o},u=_t().toLowerCase();n&&(c=j_(u)?CC:n),U_(u)&&(e=e||kC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(Xb(u)&&c!=="_self")return VC(e||"",c),new ip(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new ip(p)}function VC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="__/auth/handler",OC="emulator/auth/handler",MC=encodeURIComponent("fac");async function op(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:s};if(e instanceof J_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Xi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${MC}=${encodeURIComponent(l)}`:"";return`${xC(t)}?${qi(c).slice(1)}${u}`}function xC({config:t}){return t.emulator?Uu(t,OC):`https://${t.authDomain}/${DC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="webStorageSupport";class LC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sy,this._completeRedirectFn=aC,this._overrideRedirectResult=sC}async _openPopup(e,n,r,s){Sn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await op(e,n,r,Sl(),s);return NC(e,i,Hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await op(e,n,r,Sl(),s);return BP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RC(e),r=new lC(e);return n.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{const i=s?.[0]?.[Oc];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return W_()||B_()||ju()}}const FC=LC;var ap="@firebase/auth",cp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jC(t){ms(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(t)},u=new sP(r,s,i,l);return pP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Cr("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new UC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(ap,cp,BC(t)),Xn(ap,cp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=300,qC=Gm("authIdTokenMaxAge")||$C;let lp=null;const HC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const s=n?.token;lp!==s&&(lp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zC(t=eg()){const e=eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dP(t,{popupRedirectResolver:FC,persistence:[QP,LP,sy]}),r=Gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HC(i.toString());VP(n,o,()=>o(n.currentUser)),NP(n,c=>o(c))}}const s=Wm("auth");return s&&mP(n,`http://${s}`),n}function WC(){return document.getElementsByTagName("head")?.[0]??document}iP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jC("Browser");const KC={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},hy=Zm(KC),GC=ub(hy),vo=zC(hy),QC="modulepreload",YC=function(t,e){return new URL(t,e).href},up={},To=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=u(n.map(f=>{if(f=YC(f,r),f in up)return;up[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(r)for(let C=o.length-1;C>=0;C--){const V=o[C];if(V.href===f&&(!p||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":QC,p||(_.as="script"),_.crossOrigin="",_.href=f,l&&_.setAttribute("nonce",l),document.head.appendChild(_),p)return new Promise((C,V)=>{_.addEventListener("load",C),_.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Ui=fI({history:$T(),routes:[{path:"/",name:"notes",component:()=>To(()=>import("./ViewNotes-DspyQUSN.js"),__vite__mapDeps([0,1]),import.meta.url)},{path:"/stats",name:"stats",component:()=>To(()=>import("./ViewStats-5rbwkGFI.js"),[],import.meta.url)},{path:"/editNote/:id",name:"edit-note",component:()=>To(()=>import("./ViewEditNote-DjUNR-p5.js"),__vite__mapDeps([2,1]),import.meta.url)},{path:"/auth",name:"auth",component:()=>To(()=>import("./ViewAuth-BCftPTTd.js"),__vite__mapDeps([3,4]),import.meta.url)}]});Ui.beforeEach(async(t,e)=>{const n=za();if(!n.signedUser.id&&t.name!=="auth")return{name:"auth"};if(n.signedUser.id&&t.name==="auth")return!1});let Ys,hp;const JC=Pm("notes",()=>{const t=us([]);let e=us(!1);const n=nt(()=>t.value.length),r=nt(()=>t.value.reduce((p,m)=>p+m.content.length,0)),s=nt(()=>p=>t.value.find(m=>m.id===p)?.content||"");function i(){const p=za();if(!p.signedUser.id)throw new Error("User ID is missing");Ys=lb(GC,"users",p.signedUser.id,"notes"),hp=Ib(Ys,wb("date","desc")),o()}async function o(){e.value=!1;try{kb(hp,p=>{let m=[];p.forEach(_=>{const C={id:_.id,content:_.data().content,date:_.data().date};m.push(C)}),t.value=m,e.value=!0})}catch(p){e.value=!1,console.error("Get notes error:",p)}}function c(){t.value=[]}async function l(p){try{const m=Date.now().toString();await Cb(Ys,{content:p,date:m})}catch(m){console.error("Add note error:",m)}}async function u(p){try{console.log(p),await Pb(Al(Ys,p))}catch(m){console.error("Remove note error:",m)}}async function f(p,m){try{await bb(Al(Ys,p),{content:m})}catch(_){console.error("Update note error:",_)}}return{notes:t,getNotes:o,addNote:l,removeNote:u,updateNote:f,totalNotesCount:n,totalCharactersCount:r,getNoteById:s,loading:e,init:i,clearNotes:c}});let Mc=null;const za=Pm("storeAuth",()=>{const t=ws({id:null,email:null,displayName:null});function e(){const i=JC();Mc&&Mc(),Mc=DP(vo,o=>{o?(t.id=o.uid,t.email=o.email,t.displayName=o.displayName,o.uid,Ui.push("/"),i.init()):(t.id=null,t.email=null,t.displayName=null,Ui.replace("/auth"),i.clearNotes())})}function n(i){CP(vo,i.email,i.password).then(o=>{}).catch(o=>{o.code;const c=o.message;console.log(c)})}function r(){OP(vo).then(()=>{}).catch(i=>{})}function s(i){kP(vo,i.email,i.password).then(o=>{o.user}).catch(o=>{const c=o.code,l=o.message;console.log("Error login",c,l)})}return{registerUser:n,logoutUser:r,loginUser:s,init:e,signedUser:t}}),XC={class:"navbar is-success",role:"navigation","aria-label":"main navigation"},ZC={class:"container is-max-desktop px-2"},e0={class:"navbar-brand"},t0={class:"navbar-start"},n0={class:"navbar-end"},r0={class:"buttons"},s0=ya({__name:"NavBar",setup(t){const e=za(),n=Uh("target"),r=Uh("navbarBurger");RI(n,()=>s.value=!1,{ignore:[r]});const s=us(!1),i=()=>{s.value=!1,e.logoutUser()};return(o,c)=>(hs(),zc("nav",XC,[vt("div",ZC,[vt("div",e0,[c[4]||(c[4]=vt("div",{class:"navbar-item is-size-4 has-text-weight-bold is-family-monospace"}," NoteBalls ",-1)),vt("a",{role:"button",class:vi(["navbar-burger",{"is-active":s.value}]),"aria-label":"menu","aria-expanded":"false",onClick:c[0]||(c[0]=Zv(l=>s.value=!s.value,["prevent"])),"data-target":"navbarBasicExample",ref_key:"navbarBurger",ref:r},[...c[3]||(c[3]=[vt("span",{"aria-hidden":"true"},null,-1),vt("span",{"aria-hidden":"true"},null,-1),vt("span",{"aria-hidden":"true"},null,-1),vt("span",{"aria-hidden":"true"},null,-1)])],2)]),vt("div",{ref_key:"target",ref:n,id:"navbarBasicExample",class:vi(["navbar-menu",{"is-active":s.value}])},[vt("div",t0,[xt(e).signedUser.id?(hs(),zc("button",{key:0,onClick:i,class:"button is-small is-info m-3"}," Logout "+vp(xt(e).signedUser.email),1)):Ev("",!0)]),vt("div",n0,[vt("div",r0,[It(xt(tl),{onClick:c[1]||(c[1]=l=>s.value=!1),to:"/",class:"navbar-item","active-class":"is-active"},{default:Bc(()=>[...c[5]||(c[5]=[Kc(" Notes ",-1)])]),_:1}),It(xt(tl),{onClick:c[2]||(c[2]=l=>s.value=!1),to:"/stats",class:"navbar-item","active-class":"is-active"},{default:Bc(()=>[...c[6]||(c[6]=[Kc(" Stats ",-1)])]),_:1})])])],2)])]))}}),i0={class:"container is-max-desktop px-2 py-5"},o0=ya({__name:"App",setup(t){const e=za();return Xp(()=>e.init()),(n,r)=>{const s=LE("router-view");return hs(),zc(Nt,null,[It(s0),vt("div",i0,[It(s)])],64)}}}),fy=iT();fy.use(({store:t})=>{t.router=ga(Ui)});const Wu=nT(o0);Wu.use(Ui);Wu.use(fy);Wu.mount("#app");export{l0 as A,za as B,Zv as C,u0 as D,Nt as F,tl as R,Uh as a,Xp as b,Zp as c,ya as d,zc as e,hs as f,vt as g,xt as h,nt as i,d0 as j,Wc as k,Ev as l,Kc as m,It as n,RI as o,ss as p,us as q,ws as r,c0 as s,vp as t,JC as u,f0 as v,Bc as w,h0 as x,vi as y,a0 as z};
