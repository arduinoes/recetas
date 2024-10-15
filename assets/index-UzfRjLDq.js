(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ch(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},Us=[],bn=()=>{},tw=()=>!1,Tc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),lt=Object.assign,uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nw=Object.prototype.hasOwnProperty,Ne=(t,e)=>nw.call(t,e),fe=Array.isArray,Bs=t=>wc(t)==="[object Map]",Dg=t=>wc(t)==="[object Set]",ge=t=>typeof t=="function",tt=t=>typeof t=="string",kr=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",kg=t=>(He(t)||ge(t))&&ge(t.then)&&ge(t.catch),Lg=Object.prototype.toString,wc=t=>Lg.call(t),rw=t=>wc(t).slice(8,-1),xg=t=>wc(t)==="[object Object]",hh=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sw=/-(\w)/g,an=bc(t=>t.replace(sw,(e,n)=>n?n.toUpperCase():"")),iw=/\B([A-Z])/g,ds=bc(t=>t.replace(iw,"-$1").toLowerCase()),Ac=bc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=bc(t=>t?`on${Ac(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Pa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mf;const Ic=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dh(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?lw(r):dh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||He(t))return t}const ow=/;(?![^(]*\))/g,aw=/:([^]+)/,cw=/\/\*[^]*?\*\//g;function lw(t){const e={};return t.replace(cw,"").split(ow).forEach(n=>{if(n){const r=n.split(aw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rc(t){let e="";if(tt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Rc(t[n]);r&&(e+=r+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hw=ch(uw);function Mg(t){return!!t||t===""}const $g=t=>!!(t&&t.__v_isRef===!0),Ue=t=>tt(t)?t:t==null?"":fe(t)||He(t)&&(t.toString===Lg||!ge(t.toString))?$g(t)?Ue(t.value):JSON.stringify(t,Fg,2):String(t),Fg=(t,e)=>$g(e)?Fg(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Il(r,i)+" =>"]=s,n),{})}:Dg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Il(n))}:kr(e)?Il(e):He(e)&&!fe(e)&&!xg(e)?String(e):e,Il=(t,e="")=>{var n;return kr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class Ug{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function dw(t){return new Ug(t)}function fw(){return Gt}let Fe;const Rl=new WeakSet;class Bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rl.has(this)&&(Rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$f(this),qg(this);const e=Fe,n=fn;Fe=this,fn=!0;try{return this.fn()}finally{Wg(this),Fe=e,fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mh(e);this.deps=this.depsTail=void 0,$f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pu(this)&&this.run()}get dirty(){return pu(this)}}let jg=0,Zi,eo;function Hg(t,e=!1){if(t.flags|=8,e){t.next=eo,eo=t;return}t.next=Zi,Zi=t}function fh(){jg++}function ph(){if(--jg>0)return;if(eo){let e=eo;for(eo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zi;){let e=Zi;for(Zi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mh(r),pw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mo))return;t.globalVersion=mo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pu(t)){t.flags&=-3;return}const n=Fe,r=fn;Fe=t,fn=!0;try{qg(t);const s=t.fn(t._value);(e.version===0||Tr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,fn=r,Wg(t),t.flags&=-3}}function mh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fn=!0;const zg=[];function Lr(){zg.push(fn),fn=!1}function xr(){const t=zg.pop();fn=t===void 0?!0:t}function $f(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let mo=0;class mw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!fn||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new mw(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,Gg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,mo++,this.notify(e)}notify(e){fh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ph()}}}function Gg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mu=new WeakMap,Jr=Symbol(""),gu=Symbol(""),go=Symbol("");function Ct(t,e,n){if(fn&&Fe){let r=mu.get(t);r||mu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gh),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=mu.get(t);if(!o){mo++;return}const c=l=>{l&&l.trigger()};if(fh(),e==="clear")o.forEach(c);else{const l=fe(t),u=l&&hh(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===go||!kr(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(go)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Jr)),Bs(t)&&c(o.get(gu)));break;case"delete":l||(c(o.get(Jr)),Bs(t)&&c(o.get(gu)));break;case"set":Bs(t)&&c(o.get(Jr));break}}ph()}function Is(t){const e=Oe(t);return e===t?e:(Ct(e,"iterate",go),sn(t)?e:e.map(Pt))}function Sc(t){return Ct(t=Oe(t),"iterate",go),t}const gw={__proto__:null,[Symbol.iterator](){return Sl(this,Symbol.iterator,Pt)},concat(...t){return Is(this).concat(...t.map(e=>fe(e)?Is(e):e))},entries(){return Sl(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return $n(this,"find",t,e,Pt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cl(this,"includes",t)},indexOf(...t){return Cl(this,"indexOf",t)},join(t){return Is(this).join(t)},lastIndexOf(...t){return Cl(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return Mi(this,"pop")},push(...t){return Mi(this,"push",t)},reduce(t,...e){return Ff(this,"reduce",t,e)},reduceRight(t,...e){return Ff(this,"reduceRight",t,e)},shift(){return Mi(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return Mi(this,"splice",t)},toReversed(){return Is(this).toReversed()},toSorted(t){return Is(this).toSorted(t)},toSpliced(...t){return Is(this).toSpliced(...t)},unshift(...t){return Mi(this,"unshift",t)},values(){return Sl(this,"values",Pt)}};function Sl(t,e,n){const r=Sc(t),s=r[e]();return r!==t&&!sn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const _w=Array.prototype;function $n(t,e,n,r,s,i){const o=Sc(t),c=o!==t&&!sn(t),l=o[e];if(l!==_w[e]){const p=l.apply(t,i);return c?Pt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,Pt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function Ff(t,e,n,r){const s=Sc(t);let i=n;return s!==t&&(sn(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Pt(c),l,t)}),s[e](i,...r)}function Cl(t,e,n){const r=Oe(t);Ct(r,"iterate",go);const s=r[e](...n);return(s===-1||s===!1)&&vh(n[0])?(n[0]=Oe(n[0]),r[e](...n)):s}function Mi(t,e,n=[]){Lr(),fh();const r=Oe(t)[e].apply(t,n);return ph(),xr(),r}const yw=ch("__proto__,__v_isRef,__isVue"),Qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kr));function vw(t){kr(t)||(t=String(t));const e=Oe(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Yg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Pw:e_:i?Zg:Jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=gw[n]))return l;if(n==="hasOwnProperty")return vw}const c=Reflect.get(e,n,Dt(e)?e:r);return(kr(n)?Qg.has(n):yw(n))||(s||Ct(e,"get",n),i)?c:Dt(c)?o&&hh(n)?c:c.value:He(c)?s?n_(c):Do(c):c}}class Xg extends Yg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ns(i);if(!sn(r)&&!ns(r)&&(i=Oe(i),r=Oe(r)),!fe(e)&&Dt(i)&&!Dt(r))return l?!1:(i.value=r,!0)}const o=fe(e)&&hh(n)?Number(n)<e.length:Ne(e,n),c=Reflect.set(e,n,r,Dt(e)?e:s);return e===Oe(s)&&(o?Tr(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kr(n)||!Qg.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",fe(e)?"length":Jr),Reflect.ownKeys(e)}}class Ew extends Yg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tw=new Xg,ww=new Ew,bw=new Xg(!0);const _u=t=>t,da=t=>Reflect.getPrototypeOf(t);function Aw(t,e,n){return function(...r){const s=this.__v_raw,i=Oe(s),o=Bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?_u:e?yu:Pt;return!e&&Ct(i,"iterate",l?gu:Jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Iw(t,e){const n={get(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);t||(Tr(s,c)&&Ct(o,"get",s),Ct(o,"get",c));const{has:l}=da(o),u=e?_u:t?yu:Pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(Oe(s),"iterate",Jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);return t||(Tr(s,c)&&Ct(o,"has",s),Ct(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Oe(c),u=e?_u:t?yu:Pt;return!t&&Ct(l,"iterate",Jr),c.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return lt(n,t?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(s){!e&&!sn(s)&&!ns(s)&&(s=Oe(s));const i=Oe(this);return da(i).has.call(i,s)||(i.add(s),Bn(i,"add",s,s)),this},set(s,i){!e&&!sn(i)&&!ns(i)&&(i=Oe(i));const o=Oe(this),{has:c,get:l}=da(o);let u=c.call(o,s);u||(s=Oe(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?Tr(i,d)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=Oe(this),{has:o,get:c}=da(i);let l=o.call(i,s);l||(s=Oe(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Bn(i,"delete",s,void 0),u},clear(){const s=Oe(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Aw(s,t,e)}),n}function _h(t,e){const n=Iw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const Rw={get:_h(!1,!1)},Sw={get:_h(!1,!0)},Cw={get:_h(!0,!1)};const Jg=new WeakMap,Zg=new WeakMap,e_=new WeakMap,Pw=new WeakMap;function Ow(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ow(rw(t))}function Do(t){return ns(t)?t:yh(t,!1,Tw,Rw,Jg)}function t_(t){return yh(t,!1,bw,Sw,Zg)}function n_(t){return yh(t,!0,ww,Cw,e_)}function yh(t,e,n,r,s){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Nw(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function js(t){return ns(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function ns(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function vh(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function r_(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&Vg(t,"__v_skip",!0),t}const Pt=t=>He(t)?Do(t):t,yu=t=>He(t)?n_(t):t;function Dt(t){return t?t.__v_isRef===!0:!1}function rt(t){return s_(t,!1)}function Dw(t){return s_(t,!0)}function s_(t,e){return Dt(t)?t:new kw(t,e)}class kw{constructor(e,n){this.dep=new gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Oe(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||sn(e)||ns(e);e=r?e:Oe(e),Tr(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function Hs(t){return Dt(t)?t.value:t}const Lw={get:(t,e,n)=>e==="__v_raw"?t:Hs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Dt(s)&&!Dt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function i_(t){return js(t)?t:new Proxy(t,Lw)}class xw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Hg(this,!0),!0}get value(){const e=this.dep.track();return Kg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vw(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new xw(r,s,n)}const pa={},Ka=new WeakMap;let zr;function Mw(t,e=!1,n=zr){if(n){let r=Ka.get(n);r||Ka.set(n,r=[]),r.push(t)}}function $w(t,e,n=$e){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=x=>s?x:sn(x)||s===!1||s===0?jn(x,1):jn(x);let d,p,m,_,S=!1,O=!1;if(Dt(t)?(p=()=>t.value,S=sn(t)):js(t)?(p=()=>u(t),S=!0):fe(t)?(O=!0,S=t.some(x=>js(x)||sn(x)),p=()=>t.map(x=>{if(Dt(x))return x.value;if(js(x))return u(x);if(ge(x))return l?l(x,2):x()})):ge(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Lr();try{m()}finally{xr()}}const x=zr;zr=d;try{return l?l(t,3,[_]):t(_)}finally{zr=x}}:p=bn,e&&s){const x=p,Z=s===!0?1/0:s;p=()=>jn(x(),Z)}const R=fw(),P=()=>{d.stop(),R&&uh(R.effects,d)};if(i&&e){const x=e;e=(...Z)=>{x(...Z),P()}}let D=O?new Array(t.length).fill(pa):pa;const M=x=>{if(!(!(d.flags&1)||!d.dirty&&!x))if(e){const Z=d.run();if(s||S||(O?Z.some((ee,b)=>Tr(ee,D[b])):Tr(Z,D))){m&&m();const ee=zr;zr=d;try{const b=[Z,D===pa?void 0:O&&D[0]===pa?[]:D,_];l?l(e,3,b):e(...b),D=Z}finally{zr=ee}}}else d.run()};return c&&c(M),d=new Bg(p),d.scheduler=o?()=>o(M,!1):M,_=x=>Mw(x,!1,d),m=d.onStop=()=>{const x=Ka.get(d);if(x){if(l)l(x,4);else for(const Z of x)Z();Ka.delete(d)}},e?r?M(!0):D=d.run():o?o(M.bind(null,!0),!0):d.run(),P.pause=d.pause.bind(d),P.resume=d.resume.bind(d),P.stop=P,P}function jn(t,e=1/0,n){if(e<=0||!He(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Dt(t))jn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(Dg(t)||Bs(t))t.forEach(r=>{jn(r,e,n)});else if(xg(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ko(t,e,n,r){try{return r?t(...r):t()}catch(s){Cc(s,e,n)}}function Nn(t,e,n,r){if(ge(t)){const s=ko(t,e,n,r);return s&&kg(s)&&s.catch(i=>{Cc(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Nn(t[i],e,n,r));return s}}function Cc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,u)===!1)return}c=c.parent}if(i){Lr(),ko(i,null,10,[t,l,u]),xr();return}}Fw(t,n,s,r,o)}function Fw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ft=[];let En=-1;const qs=[];let dr=null,Cs=0;const o_=Promise.resolve();let za=null;function a_(t){const e=za||o_;return t?e.then(this?t.bind(this):t):e}function Uw(t){let e=En+1,n=Ft.length;for(;e<n;){const r=e+n>>>1,s=Ft[r],i=_o(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Eh(t){if(!(t.flags&1)){const e=_o(t),n=Ft[Ft.length-1];!n||!(t.flags&2)&&e>=_o(n)?Ft.push(t):Ft.splice(Uw(e),0,t),t.flags|=1,c_()}}function c_(){za||(za=o_.then(u_))}function Bw(t){fe(t)?qs.push(...t):dr&&t.id===-1?dr.splice(Cs+1,0,t):t.flags&1||(qs.push(t),t.flags|=1),c_()}function Uf(t,e,n=En+1){for(;n<Ft.length;n++){const r=Ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function l_(t){if(qs.length){const e=[...new Set(qs)].sort((n,r)=>_o(n)-_o(r));if(qs.length=0,dr){dr.push(...e);return}for(dr=e,Cs=0;Cs<dr.length;Cs++){const n=dr[Cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dr=null,Cs=0}}const _o=t=>t.id==null?t.flags&2?-1:1/0:t.id;function u_(t){try{for(En=0;En<Ft.length;En++){const e=Ft[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ft.length;En++){const e=Ft[En];e&&(e.flags&=-2)}En=-1,Ft.length=0,l_(),za=null,(Ft.length||qs.length)&&u_()}}let Qt=null,h_=null;function Ga(t){const e=Qt;return Qt=t,h_=t&&t.type.__scopeId||null,e}function dt(t,e=Qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qf(-1);const i=Ga(e);let o;try{o=t(...s)}finally{Ga(i),r._d&&Qf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rt(t,e){if(Qt===null)return t;const n=Dc(Qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=$e]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Lr(),Nn(l,n,8,[t.el,c,t,e]),xr())}}const jw=Symbol("_vte"),Hw=t=>t.__isTeleport;function Th(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Th(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wt(t,e){return ge(t)?lt({name:t.name},e,{setup:t}):t}function d_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vu(t,e,n,r,s=!1){if(fe(t)){t.forEach((S,O)=>vu(S,e&&(fe(e)?e[O]:e),n,r,s));return}if(to(r)&&!s)return;const i=r.shapeFlag&4?Dc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===$e?c.refs={}:c.refs,p=c.setupState,m=Oe(p),_=p===$e?()=>!1:S=>Ne(m,S);if(u!=null&&u!==l&&(tt(u)?(d[u]=null,_(u)&&(p[u]=null)):Dt(u)&&(u.value=null)),ge(l))ko(l,c,12,[o,d]);else{const S=tt(l),O=Dt(l);if(S||O){const R=()=>{if(t.f){const P=S?_(l)?p[l]:d[l]:l.value;s?fe(P)&&uh(P,i):fe(P)?P.includes(i)||P.push(i):S?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else S?(d[l]=o,_(l)&&(p[l]=o)):O&&(l.value=o,t.k&&(d[t.k]=o))};o?(R.id=-1,zt(R,n)):R()}}}Ic().requestIdleCallback;Ic().cancelIdleCallback;const to=t=>!!t.type.__asyncLoader,f_=t=>t.type.__isKeepAlive;function qw(t,e){p_(t,"a",e)}function Ww(t,e){p_(t,"da",e)}function p_(t,e,n=Nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)f_(s.parent.vnode)&&Kw(r,e,n,s),s=s.parent}}function Kw(t,e,n,r){const s=Pc(e,t,r,!0);m_(()=>{uh(r[e],s)},n)}function Pc(t,e,n=Nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lr();const c=Lo(n),l=Nn(e,n,t,o);return c(),xr(),l});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=Nt)=>{(!vo||t==="sp")&&Pc(t,(...r)=>e(...r),n)},zw=rr("bm"),pi=rr("m"),Gw=rr("bu"),Qw=rr("u"),Yw=rr("bum"),m_=rr("um"),Xw=rr("sp"),Jw=rr("rtg"),Zw=rr("rtc");function eb(t,e=Nt){Pc("ec",t,e)}const tb="components";function wh(t,e){return rb(tb,t,!0,e)||t}const nb=Symbol.for("v-ndc");function rb(t,e,n=!0,r=!1){const s=Qt||Nt;if(s){const i=s.type;{const c=Hb(i,!1);if(c&&(c===e||c===an(e)||c===Ac(an(e))))return i}const o=Bf(s[t]||i[t],e)||Bf(s.appContext[t],e);return!o&&r?i:o}}function Bf(t,e){return t&&(t[e]||t[an(e)]||t[Ac(an(e))])}function Yn(t,e,n,r){let s;const i=n,o=fe(t);if(o||tt(t)){const c=o&&js(t);let l=!1;c&&(l=!sn(t),t=Sc(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?Pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(He(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Eu=t=>t?V_(t)?Dc(t):Eu(t.parent):null,no=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Eu(t.parent),$root:t=>Eu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bh(t),$forceUpdate:t=>t.f||(t.f=()=>{Eh(t.update)}),$nextTick:t=>t.n||(t.n=a_.bind(t.proxy)),$watch:t=>Ab.bind(t)}),Pl=(t,e)=>t!==$e&&!t.__isScriptSetup&&Ne(t,e),sb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pl(r,e))return o[e]=1,r[e];if(s!==$e&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==$e&&Ne(n,e))return o[e]=4,n[e];Tu&&(o[e]=0)}}const d=no[e];let p,m;if(d)return e==="$attrs"&&Ct(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==$e&&Ne(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pl(s,e)?(s[e]=n,!0):r!==$e&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==$e&&Ne(t,o)||Pl(e,o)||(c=i[0])&&Ne(c,o)||Ne(r,o)||Ne(no,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tu=!0;function ib(t){const e=bh(t),n=t.proxy,r=t.ctx;Tu=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:O,deactivated:R,beforeDestroy:P,beforeUnmount:D,destroyed:M,unmounted:x,render:Z,renderTracked:ee,renderTriggered:b,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:I,components:C,directives:T,filters:qe}=e;if(u&&ob(u,r,null),o)for(const he in o){const _e=o[he];ge(_e)&&(r[he]=_e.bind(n))}if(s){const he=s.call(n,n);He(he)&&(t.data=Do(he))}if(Tu=!0,i)for(const he in i){const _e=i[he],Qe=ge(_e)?_e.bind(n,n):ge(_e.get)?_e.get.bind(n,n):bn,yt=!ge(_e)&&ge(_e.set)?_e.set.bind(n):bn,vt=dn({get:Qe,set:yt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>vt.value,set:De=>vt.value=De})}if(c)for(const he in c)g_(c[he],r,n,he);if(l){const he=ge(l)?l.call(n):l;Reflect.ownKeys(he).forEach(_e=>{Oa(_e,he[_e])})}d&&Hf(d,t,"c");function we(he,_e){fe(_e)?_e.forEach(Qe=>he(Qe.bind(n))):_e&&he(_e.bind(n))}if(we(zw,p),we(pi,m),we(Gw,_),we(Qw,S),we(qw,O),we(Ww,R),we(eb,y),we(Zw,ee),we(Jw,b),we(Yw,D),we(m_,x),we(Xw,E),fe(A))if(A.length){const he=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(he,_e,{get:()=>n[_e],set:Qe=>n[_e]=Qe})})}else t.exposed||(t.exposed={});Z&&t.render===bn&&(t.render=Z),I!=null&&(t.inheritAttrs=I),C&&(t.components=C),T&&(t.directives=T),E&&d_(t)}function ob(t,e,n=bn){fe(t)&&(t=wu(t));for(const r in t){const s=t[r];let i;He(s)?"default"in s?i=pn(s.from||r,s.default,!0):i=pn(s.from||r):i=pn(s),Dt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hf(t,e,n){Nn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function g_(t,e,n,r){let s=r.includes(".")?O_(n,r):()=>n[r];if(tt(t)){const i=e[t];ge(i)&&Na(s,i)}else if(ge(t))Na(s,t.bind(n));else if(He(t))if(fe(t))t.forEach(i=>g_(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Na(s,i,t)}}function bh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Qa(l,u,o,!0)),Qa(l,e,o)),He(e)&&i.set(e,l),l}function Qa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qa(t,i,n,!0),s&&s.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ab[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ab={data:qf,props:Wf,emits:Wf,methods:Wi,computed:Wi,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Wi,directives:Wi,watch:lb,provide:qf,inject:cb};function qf(t,e){return e?t?function(){return lt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function cb(t,e){return Wi(wu(t),wu(e))}function wu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?lt(Object.create(null),t,e):e}function Wf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:lt(Object.create(null),jf(t),jf(e??{})):e}function lb(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=$t(t[r],e[r]);return n}function __(){return{app:null,config:{isNativeTag:tw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ub=0;function hb(t,e){return function(r,s=null){ge(r)||(r=lt({},r)),s!=null&&!He(s)&&(s=null);const i=__(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:ub++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wb,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!l){const _=u._ceVNode||Ie(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),l=!0,u._container=d,d.__vue_app__=u,Dc(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Nn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ws;Ws=u;try{return d()}finally{Ws=p}}};return u}}let Ws=null;function Oa(t,e){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[t]=e}}function pn(t,e,n=!1){const r=Nt||Qt;if(r||Ws){const s=Ws?Ws._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const y_={},v_=()=>Object.create(y_),E_=t=>Object.getPrototypeOf(t)===y_;function db(t,e,n,r=!1){const s={},i=v_();t.propsDefaults=Object.create(null),T_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:t_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Oe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Oc(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ne(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=an(m);s[S]=bu(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{T_(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Ne(e,p)&&((d=ds(p))===p||!Ne(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=bu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],u=!0)}u&&Bn(t.attrs,"set","")}function T_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ji(l))continue;const u=e[l];let d;s&&Ne(s,d=an(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:Oc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Oe(n),u=c||$e;for(let d=0;d<i.length;d++){const p=i[d];n[p]=bu(s,l,p,u[p],t,!Ne(u,p))}}return o}function bu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Lo(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ds(n))&&(r=!0))}return r}const pb=new WeakMap;function w_(t,e,n=!1){const r=n?pb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ge(t)){const d=p=>{l=!0;const[m,_]=w_(p,e,!0);lt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return He(t)&&r.set(t,Us),Us;if(fe(i))for(let d=0;d<i.length;d++){const p=an(i[d]);Kf(p)&&(o[p]=$e)}else if(i)for(const d in i){const p=an(d);if(Kf(p)){const m=i[d],_=o[p]=fe(m)||ge(m)?{type:m}:lt({},m),S=_.type;let O=!1,R=!0;if(fe(S))for(let P=0;P<S.length;++P){const D=S[P],M=ge(D)&&D.name;if(M==="Boolean"){O=!0;break}else M==="String"&&(R=!1)}else O=ge(S)&&S.name==="Boolean";_[0]=O,_[1]=R,(O||Ne(_,"default"))&&c.push(p)}}const u=[o,c];return He(t)&&r.set(t,u),u}function Kf(t){return t[0]!=="$"&&!Ji(t)}const b_=t=>t[0]==="_"||t==="$stable",Ah=t=>fe(t)?t.map(Tn):[Tn(t)],mb=(t,e,n)=>{if(e._n)return e;const r=dt((...s)=>Ah(e(...s)),n);return r._c=!1,r},A_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(b_(s))continue;const i=t[s];if(ge(i))e[s]=mb(s,i,r);else if(i!=null){const o=Ah(i);e[s]=()=>o}}},I_=(t,e)=>{const n=Ah(e);t.slots.default=()=>n},R_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},gb=(t,e,n)=>{const r=t.slots=v_();if(t.vnode.shapeFlag&32){const s=e._;s?(R_(r,e,n),n&&Vg(r,"_",s,!0)):A_(e,r)}else e&&I_(t,e)},_b=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:R_(s,e,n):(i=!e.$stable,A_(e,s)),o=e}else e&&(I_(t,e),o={default:1});if(i)for(const c in s)!b_(c)&&o[c]==null&&delete s[c]},zt=Nb;function yb(t){return vb(t)}function vb(t,e){const n=Ic();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=bn,insertStaticContent:S}=t,O=(v,w,k,U=null,F=null,q=null,Y=void 0,K=null,z=!!w.dynamicChildren)=>{if(v===w)return;v&&!$i(v,w)&&(U=$(v),De(v,F,q,!0),v=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:W,ref:oe,shapeFlag:X}=w;switch(W){case Nc:R(v,w,k,U);break;case rs:P(v,w,k,U);break;case Dl:v==null&&D(w,k,U,Y);break;case ct:C(v,w,k,U,F,q,Y,K,z);break;default:X&1?Z(v,w,k,U,F,q,Y,K,z):X&6?T(v,w,k,U,F,q,Y,K,z):(X&64||X&128)&&W.process(v,w,k,U,F,q,Y,K,z,ne)}oe!=null&&F&&vu(oe,v&&v.ref,q,w||v,!w)},R=(v,w,k,U)=>{if(v==null)r(w.el=c(w.children),k,U);else{const F=w.el=v.el;w.children!==v.children&&u(F,w.children)}},P=(v,w,k,U)=>{v==null?r(w.el=l(w.children||""),k,U):w.el=v.el},D=(v,w,k,U)=>{[v.el,v.anchor]=S(v.children,w,k,U,v.el,v.anchor)},M=({el:v,anchor:w},k,U)=>{let F;for(;v&&v!==w;)F=m(v),r(v,k,U),v=F;r(w,k,U)},x=({el:v,anchor:w})=>{let k;for(;v&&v!==w;)k=m(v),s(v),v=k;s(w)},Z=(v,w,k,U,F,q,Y,K,z)=>{w.type==="svg"?Y="svg":w.type==="math"&&(Y="mathml"),v==null?ee(w,k,U,F,q,Y,K,z):E(v,w,F,q,Y,K,z)},ee=(v,w,k,U,F,q,Y,K)=>{let z,W;const{props:oe,shapeFlag:X,transition:se,dirs:te}=v;if(z=v.el=o(v.type,q,oe&&oe.is,oe),X&8?d(z,v.children):X&16&&y(v.children,z,null,U,F,Ol(v,q),Y,K),te&&Wr(v,null,U,"created"),b(z,v,v.scopeId,Y,U),oe){for(const be in oe)be!=="value"&&!Ji(be)&&i(z,be,null,oe[be],q,U);"value"in oe&&i(z,"value",null,oe.value,q),(W=oe.onVnodeBeforeMount)&&vn(W,U,v)}te&&Wr(v,null,U,"beforeMount");const ae=Eb(F,se);ae&&se.beforeEnter(z),r(z,w,k),((W=oe&&oe.onVnodeMounted)||ae||te)&&zt(()=>{W&&vn(W,U,v),ae&&se.enter(z),te&&Wr(v,null,U,"mounted")},F)},b=(v,w,k,U,F)=>{if(k&&_(v,k),U)for(let q=0;q<U.length;q++)_(v,U[q]);if(F){let q=F.subTree;if(w===q||D_(q.type)&&(q.ssContent===w||q.ssFallback===w)){const Y=F.vnode;b(v,Y,Y.scopeId,Y.slotScopeIds,F.parent)}}},y=(v,w,k,U,F,q,Y,K,z=0)=>{for(let W=z;W<v.length;W++){const oe=v[W]=K?fr(v[W]):Tn(v[W]);O(null,oe,w,k,U,F,q,Y,K)}},E=(v,w,k,U,F,q,Y)=>{const K=w.el=v.el;let{patchFlag:z,dynamicChildren:W,dirs:oe}=w;z|=v.patchFlag&16;const X=v.props||$e,se=w.props||$e;let te;if(k&&Kr(k,!1),(te=se.onVnodeBeforeUpdate)&&vn(te,k,w,v),oe&&Wr(w,v,k,"beforeUpdate"),k&&Kr(k,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&d(K,""),W?A(v.dynamicChildren,W,K,k,U,Ol(w,F),q):Y||_e(v,w,K,null,k,U,Ol(w,F),q,!1),z>0){if(z&16)I(K,X,se,k,F);else if(z&2&&X.class!==se.class&&i(K,"class",null,se.class,F),z&4&&i(K,"style",X.style,se.style,F),z&8){const ae=w.dynamicProps;for(let be=0;be<ae.length;be++){const Se=ae[be],Et=X[Se],ot=se[Se];(ot!==Et||Se==="value")&&i(K,Se,Et,ot,F,k)}}z&1&&v.children!==w.children&&d(K,w.children)}else!Y&&W==null&&I(K,X,se,k,F);((te=se.onVnodeUpdated)||oe)&&zt(()=>{te&&vn(te,k,w,v),oe&&Wr(w,v,k,"updated")},U)},A=(v,w,k,U,F,q,Y)=>{for(let K=0;K<w.length;K++){const z=v[K],W=w[K],oe=z.el&&(z.type===ct||!$i(z,W)||z.shapeFlag&70)?p(z.el):k;O(z,W,oe,null,U,F,q,Y,!0)}},I=(v,w,k,U,F)=>{if(w!==k){if(w!==$e)for(const q in w)!Ji(q)&&!(q in k)&&i(v,q,w[q],null,F,U);for(const q in k){if(Ji(q))continue;const Y=k[q],K=w[q];Y!==K&&q!=="value"&&i(v,q,K,Y,F,U)}"value"in k&&i(v,"value",w.value,k.value,F)}},C=(v,w,k,U,F,q,Y,K,z)=>{const W=w.el=v?v.el:c(""),oe=w.anchor=v?v.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:te}=w;te&&(K=K?K.concat(te):te),v==null?(r(W,k,U),r(oe,k,U),y(w.children||[],k,oe,F,q,Y,K,z)):X>0&&X&64&&se&&v.dynamicChildren?(A(v.dynamicChildren,se,k,F,q,Y,K),(w.key!=null||F&&w===F.subTree)&&S_(v,w,!0)):_e(v,w,k,oe,F,q,Y,K,z)},T=(v,w,k,U,F,q,Y,K,z)=>{w.slotScopeIds=K,v==null?w.shapeFlag&512?F.ctx.activate(w,k,U,Y,z):qe(w,k,U,F,q,Y,z):Je(v,w,z)},qe=(v,w,k,U,F,q,Y)=>{const K=v.component=$b(v,U,F);if(f_(v)&&(K.ctx.renderer=ne),Fb(K,!1,Y),K.asyncDep){if(F&&F.registerDep(K,we,Y),!v.el){const z=K.subTree=Ie(rs);P(null,z,w,k)}}else we(K,v,w,k,F,q,Y)},Je=(v,w,k)=>{const U=w.component=v.component;if(Pb(v,w,k))if(U.asyncDep&&!U.asyncResolved){he(U,w,k);return}else U.next=w,U.update();else w.el=v.el,U.vnode=w},we=(v,w,k,U,F,q,Y)=>{const K=()=>{if(v.isMounted){let{next:X,bu:se,u:te,parent:ae,vnode:be}=v;{const Tt=C_(v);if(Tt){X&&(X.el=be.el,he(v,X,Y)),Tt.asyncDep.then(()=>{v.isUnmounted||K()});return}}let Se=X,Et;Kr(v,!1),X?(X.el=be.el,he(v,X,Y)):X=be,se&&Pa(se),(Et=X.props&&X.props.onVnodeBeforeUpdate)&&vn(Et,ae,X,be),Kr(v,!0);const ot=Nl(v),ut=v.subTree;v.subTree=ot,O(ut,ot,p(ut.el),$(ut),v,F,q),X.el=ot.el,Se===null&&Ob(v,ot.el),te&&zt(te,F),(Et=X.props&&X.props.onVnodeUpdated)&&zt(()=>vn(Et,ae,X,be),F)}else{let X;const{el:se,props:te}=w,{bm:ae,m:be,parent:Se,root:Et,type:ot}=v,ut=to(w);if(Kr(v,!1),ae&&Pa(ae),!ut&&(X=te&&te.onVnodeBeforeMount)&&vn(X,Se,w),Kr(v,!0),se&&ke){const Tt=()=>{v.subTree=Nl(v),ke(se,v.subTree,v,F,null)};ut&&ot.__asyncHydrate?ot.__asyncHydrate(se,v,Tt):Tt()}else{Et.ce&&Et.ce._injectChildStyle(ot);const Tt=v.subTree=Nl(v);O(null,Tt,k,U,v,F,q),w.el=Tt.el}if(be&&zt(be,F),!ut&&(X=te&&te.onVnodeMounted)){const Tt=w;zt(()=>vn(X,Se,Tt),F)}(w.shapeFlag&256||Se&&to(Se.vnode)&&Se.vnode.shapeFlag&256)&&v.a&&zt(v.a,F),v.isMounted=!0,w=k=U=null}};v.scope.on();const z=v.effect=new Bg(K);v.scope.off();const W=v.update=z.run.bind(z),oe=v.job=z.runIfDirty.bind(z);oe.i=v,oe.id=v.uid,z.scheduler=()=>Eh(oe),Kr(v,!0),W()},he=(v,w,k)=>{w.component=v;const U=v.vnode.props;v.vnode=w,v.next=null,fb(v,w.props,U,k),_b(v,w.children,k),Lr(),Uf(v),xr()},_e=(v,w,k,U,F,q,Y,K,z=!1)=>{const W=v&&v.children,oe=v?v.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:te}=w;if(se>0){if(se&128){yt(W,X,k,U,F,q,Y,K,z);return}else if(se&256){Qe(W,X,k,U,F,q,Y,K,z);return}}te&8?(oe&16&&Ze(W,F,q),X!==W&&d(k,X)):oe&16?te&16?yt(W,X,k,U,F,q,Y,K,z):Ze(W,F,q,!0):(oe&8&&d(k,""),te&16&&y(X,k,U,F,q,Y,K,z))},Qe=(v,w,k,U,F,q,Y,K,z)=>{v=v||Us,w=w||Us;const W=v.length,oe=w.length,X=Math.min(W,oe);let se;for(se=0;se<X;se++){const te=w[se]=z?fr(w[se]):Tn(w[se]);O(v[se],te,k,null,F,q,Y,K,z)}W>oe?Ze(v,F,q,!0,!1,X):y(w,k,U,F,q,Y,K,z,X)},yt=(v,w,k,U,F,q,Y,K,z)=>{let W=0;const oe=w.length;let X=v.length-1,se=oe-1;for(;W<=X&&W<=se;){const te=v[W],ae=w[W]=z?fr(w[W]):Tn(w[W]);if($i(te,ae))O(te,ae,k,null,F,q,Y,K,z);else break;W++}for(;W<=X&&W<=se;){const te=v[X],ae=w[se]=z?fr(w[se]):Tn(w[se]);if($i(te,ae))O(te,ae,k,null,F,q,Y,K,z);else break;X--,se--}if(W>X){if(W<=se){const te=se+1,ae=te<oe?w[te].el:U;for(;W<=se;)O(null,w[W]=z?fr(w[W]):Tn(w[W]),k,ae,F,q,Y,K,z),W++}}else if(W>se)for(;W<=X;)De(v[W],F,q,!0),W++;else{const te=W,ae=W,be=new Map;for(W=ae;W<=se;W++){const xt=w[W]=z?fr(w[W]):Tn(w[W]);xt.key!=null&&be.set(xt.key,W)}let Se,Et=0;const ot=se-ae+1;let ut=!1,Tt=0;const ir=new Array(ot);for(W=0;W<ot;W++)ir[W]=0;for(W=te;W<=X;W++){const xt=v[W];if(Et>=ot){De(xt,F,q,!0);continue}let rn;if(xt.key!=null)rn=be.get(xt.key);else for(Se=ae;Se<=se;Se++)if(ir[Se-ae]===0&&$i(xt,w[Se])){rn=Se;break}rn===void 0?De(xt,F,q,!0):(ir[rn-ae]=W+1,rn>=Tt?Tt=rn:ut=!0,O(xt,w[rn],k,null,F,q,Y,K,z),Et++)}const vs=ut?Tb(ir):Us;for(Se=vs.length-1,W=ot-1;W>=0;W--){const xt=ae+W,rn=w[xt],Es=xt+1<oe?w[xt+1].el:U;ir[W]===0?O(null,rn,k,Es,F,q,Y,K,z):ut&&(Se<0||W!==vs[Se]?vt(rn,k,Es,2):Se--)}}},vt=(v,w,k,U,F=null)=>{const{el:q,type:Y,transition:K,children:z,shapeFlag:W}=v;if(W&6){vt(v.component.subTree,w,k,U);return}if(W&128){v.suspense.move(w,k,U);return}if(W&64){Y.move(v,w,k,ne);return}if(Y===ct){r(q,w,k);for(let X=0;X<z.length;X++)vt(z[X],w,k,U);r(v.anchor,w,k);return}if(Y===Dl){M(v,w,k);return}if(U!==2&&W&1&&K)if(U===0)K.beforeEnter(q),r(q,w,k),zt(()=>K.enter(q),F);else{const{leave:X,delayLeave:se,afterLeave:te}=K,ae=()=>r(q,w,k),be=()=>{X(q,()=>{ae(),te&&te()})};se?se(q,ae,be):be()}else r(q,w,k)},De=(v,w,k,U=!1,F=!1)=>{const{type:q,props:Y,ref:K,children:z,dynamicChildren:W,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:te}=v;if(X===-2&&(F=!1),K!=null&&vu(K,null,k,v,!0),te!=null&&(w.renderCache[te]=void 0),oe&256){w.ctx.deactivate(v);return}const ae=oe&1&&se,be=!to(v);let Se;if(be&&(Se=Y&&Y.onVnodeBeforeUnmount)&&vn(Se,w,v),oe&6)nt(v.component,k,U);else{if(oe&128){v.suspense.unmount(k,U);return}ae&&Wr(v,null,w,"beforeUnmount"),oe&64?v.type.remove(v,w,k,ne,U):W&&!W.hasOnce&&(q!==ct||X>0&&X&64)?Ze(W,w,k,!1,!0):(q===ct&&X&384||!F&&oe&16)&&Ze(z,w,k),U&&Ve(v)}(be&&(Se=Y&&Y.onVnodeUnmounted)||ae)&&zt(()=>{Se&&vn(Se,w,v),ae&&Wr(v,null,w,"unmounted")},k)},Ve=v=>{const{type:w,el:k,anchor:U,transition:F}=v;if(w===ct){Lt(k,U);return}if(w===Dl){x(v);return}const q=()=>{s(k),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:K}=F,z=()=>Y(k,q);K?K(v.el,q,z):z()}else q()},Lt=(v,w)=>{let k;for(;v!==w;)k=m(v),s(v),v=k;s(w)},nt=(v,w,k)=>{const{bum:U,scope:F,job:q,subTree:Y,um:K,m:z,a:W}=v;zf(z),zf(W),U&&Pa(U),F.stop(),q&&(q.flags|=8,De(Y,v,w,k)),K&&zt(K,w),zt(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ze=(v,w,k,U=!1,F=!1,q=0)=>{for(let Y=q;Y<v.length;Y++)De(v[Y],w,k,U,F)},$=v=>{if(v.shapeFlag&6)return $(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),k=w&&w[jw];return k?m(k):w};let J=!1;const Q=(v,w,k)=>{v==null?w._vnode&&De(w._vnode,null,null,!0):O(w._vnode||null,v,w,null,null,null,k),w._vnode=v,J||(J=!0,Uf(),l_(),J=!1)},ne={p:O,um:De,m:vt,r:Ve,mt:qe,mc:y,pc:_e,pbc:A,n:$,o:t};let ye,ke;return{render:Q,hydrate:ye,createApp:hb(Q,ye)}}function Ol({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Eb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function S_(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=fr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&S_(o,c)),c.type===Nc&&(c.el=o.el)}}function Tb(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function C_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:C_(e)}function zf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wb=Symbol.for("v-scx"),bb=()=>pn(wb);function Na(t,e,n){return P_(t,e,n)}function P_(t,e,n=$e){const{immediate:r,deep:s,flush:i,once:o}=n,c=lt({},n),l=e&&r||!e&&i!=="post";let u;if(vo){if(i==="sync"){const _=bb();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=bn,_.resume=bn,_.pause=bn,_}}const d=Nt;c.call=(_,S,O)=>Nn(_,d,S,O);let p=!1;i==="post"?c.scheduler=_=>{zt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Eh(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=$w(t,e,c);return vo&&(u?u.push(m):l&&m()),m}function Ab(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?O_(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Lo(this),c=P_(s,i.bind(r),n);return o(),c}function O_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ib=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function Rb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&Ib(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>tt(d)?d.trim():d)),o.number&&(s=n.map(fu)));let c,l=r[c=Al(e)]||r[c=Al(an(e))];!l&&i&&(l=r[c=Al(ds(e))]),l&&Nn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Nn(u,t,6,s)}}function N_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ge(t)){const l=u=>{const d=N_(u,e,!0);d&&(c=!0,lt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(He(t)&&r.set(t,null),null):(fe(i)?i.forEach(l=>o[l]=null):lt(o,i),He(t)&&r.set(t,o),o)}function Oc(t,e){return!t||!Tc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,ds(e))||Ne(t,e))}function Nl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:S,inheritAttrs:O}=t,R=Ga(t);let P,D;try{if(n.shapeFlag&4){const x=s||r,Z=x;P=Tn(u.call(Z,x,d,p,_,m,S)),D=c}else{const x=e;P=Tn(x.length>1?x(p,{attrs:c,slots:o,emit:l}):x(p,null)),D=e.props?c:Sb(c)}}catch(x){ro.length=0,Cc(x,t,1),P=Ie(rs)}let M=P;if(D&&O!==!1){const x=Object.keys(D),{shapeFlag:Z}=M;x.length&&Z&7&&(i&&x.some(lh)&&(D=Cb(D,i)),M=Ys(M,D,!1,!0))}return n.dirs&&(M=Ys(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Th(M,n.transition),P=M,Ga(R),P}const Sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tc(n))&&((e||(e={}))[n]=t[n]);return e},Cb=(t,e)=>{const n={};for(const r in t)(!lh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Gf(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Oc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Gf(r,o,u):!0:!!o;return!1}function Gf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Oc(n,i))return!0}return!1}function Ob({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const D_=t=>t.__isSuspense;function Nb(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):Bw(t)}const ct=Symbol.for("v-fgt"),Nc=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),ro=[];let Yt=null;function ve(t=!1){ro.push(Yt=t?null:[])}function Db(){ro.pop(),Yt=ro[ro.length-1]||null}let yo=1;function Qf(t){yo+=t,t<0&&Yt&&(Yt.hasOnce=!0)}function k_(t){return t.dynamicChildren=yo>0?Yt||Us:null,Db(),yo>0&&Yt&&Yt.push(t),t}function Re(t,e,n,r,s,i){return k_(L(t,e,n,r,s,i,!0))}function L_(t,e,n,r,s){return k_(Ie(t,e,n,r,s,!0))}function Ya(t){return t?t.__v_isVNode===!0:!1}function $i(t,e){return t.type===e.type&&t.key===e.key}const x_=({key:t})=>t??null,Da=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Dt(t)||ge(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&x_(e),ref:e&&Da(e),scopeId:h_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qt};return c?(Ih(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),yo>0&&!o&&Yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Yt.push(l),l}const Ie=kb;function kb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nb)&&(t=rs),Ya(t)){const c=Ys(t,e,!0);return n&&Ih(c,n),yo>0&&!i&&Yt&&(c.shapeFlag&6?Yt[Yt.indexOf(t)]=c:Yt.push(c)),c.patchFlag=-2,c}if(qb(t)&&(t=t.__vccOpts),e){e=Lb(e);let{class:c,style:l}=e;c&&!tt(c)&&(e.class=Rc(c)),He(l)&&(vh(l)&&!fe(l)&&(l=lt({},l)),e.style=dh(l))}const o=tt(t)?1:D_(t)?128:Hw(t)?64:He(t)?4:ge(t)?2:0;return L(t,e,n,r,s,o,i,!0)}function Lb(t){return t?vh(t)||E_(t)?lt({},t):t:null}function Ys(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?xb(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&x_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(Da(e)):[i,Da(e)]:Da(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ys(t.ssContent),ssFallback:t.ssFallback&&Ys(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Th(d,l.clone(d)),d}function It(t=" ",e=0){return Ie(Nc,null,t,e)}function Au(t="",e=!1){return e?(ve(),L_(rs,null,t)):Ie(rs,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Ie(rs):fe(t)?Ie(ct,null,t.slice()):Ya(t)?fr(t):Ie(Nc,null,String(t))}function fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ys(t)}function Ih(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ih(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!E_(e)?e._ctx=Qt:s===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),r&64?(n=16,e=[It(e)]):n=8);t.children=e,t.shapeFlag|=n}function xb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rc([e.class,r.class]));else if(s==="style")e.style=dh([e.style,r.style]);else if(Tc(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vn(t,e,n,r=null){Nn(t,e,7,[n,r])}const Vb=__();let Mb=0;function $b(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Vb,i={uid:Mb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ug(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:w_(r,s),emitsOptions:N_(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rb.bind(null,i),t.ce&&t.ce(i),i}let Nt=null,Xa,Iu;{const t=Ic(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xa=e("__VUE_INSTANCE_SETTERS__",n=>Nt=n),Iu=e("__VUE_SSR_SETTERS__",n=>vo=n)}const Lo=t=>{const e=Nt;return Xa(t),t.scope.on(),()=>{t.scope.off(),Xa(e)}},Yf=()=>{Nt&&Nt.scope.off(),Xa(null)};function V_(t){return t.vnode.shapeFlag&4}let vo=!1;function Fb(t,e=!1,n=!1){e&&Iu(e);const{props:r,children:s}=t.vnode,i=V_(t);db(t,r,i,e),gb(t,s,n);const o=i?Ub(t,e):void 0;return e&&Iu(!1),o}function Ub(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sb);const{setup:r}=n;if(r){Lr();const s=t.setupContext=r.length>1?jb(t):null,i=Lo(t),o=ko(r,t,0,[t.props,s]),c=kg(o);if(xr(),i(),(c||t.sp)&&!to(t)&&d_(t),c){if(o.then(Yf,Yf),e)return o.then(l=>{Xf(t,l,e)}).catch(l=>{Cc(l,t,0)});t.asyncDep=o}else Xf(t,o,e)}else M_(t,e)}function Xf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=i_(e)),M_(t,n)}let Jf;function M_(t,e,n){const r=t.type;if(!t.render){if(!e&&Jf&&!r.render){const s=r.template||bh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=lt(lt({isCustomElement:i,delimiters:c},o),l);r.render=Jf(s,u)}}t.render=r.render||bn}{const s=Lo(t);Lr();try{ib(t)}finally{xr(),s()}}}const Bb={get(t,e){return Ct(t,"get",""),t[e]}};function jb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bb),slots:t.slots,emit:t.emit,expose:e}}function Dc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(i_(r_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)},has(e,n){return n in e||n in no}})):t.proxy}function Hb(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function qb(t){return ge(t)&&"__vccOpts"in t}const dn=(t,e)=>Vw(t,e,vo);function $_(t,e,n){const r=arguments.length;return r===2?He(e)&&!fe(e)?Ya(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ya(n)&&(n=[n]),Ie(t,e,n))}const Wb="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ru;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Ru=Zf.createPolicy("vue",{createHTML:t=>t})}catch{}const F_=Ru?t=>Ru.createHTML(t):t=>t,Kb="http://www.w3.org/2000/svg",zb="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,ep=Un&&Un.createElement("template"),Gb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(Kb,t):e==="mathml"?Un.createElementNS(zb,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ep.innerHTML=F_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ep.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qb=Symbol("_vtc");function Yb(t,e,n){const r=t[Qb];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ja=Symbol("_vod"),U_=Symbol("_vsh"),tp={beforeMount(t,{value:e},{transition:n}){t[Ja]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Fi(t,!0),r.enter(t)):r.leave(t,()=>{Fi(t,!1)}):Fi(t,e))},beforeUnmount(t,{value:e}){Fi(t,e)}};function Fi(t,e){t.style.display=e?t[Ja]:"none",t[U_]=!e}const Xb=Symbol(""),Jb=/(^|;)\s*display\s*:/;function Zb(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ka(r,c,"")}else for(const o in e)n[o]==null&&ka(r,o,"");for(const o in n)o==="display"&&(i=!0),ka(r,o,n[o])}else if(s){if(e!==n){const o=r[Xb];o&&(n+=";"+o),r.cssText=n,i=Jb.test(n)}}else e&&t.removeAttribute("style");Ja in t&&(t[Ja]=i?r.display:"",t[U_]&&(r.display="none"))}const np=/\s*!important$/;function ka(t,e,n){if(fe(n))n.forEach(r=>ka(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eA(t,e);np.test(n)?t.setProperty(ds(r),n.replace(np,""),"important"):t[r]=n}}const rp=["Webkit","Moz","ms"],kl={};function eA(t,e){const n=kl[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return kl[e]=r;r=Ac(r);for(let s=0;s<rp.length;s++){const i=rp[s]+r;if(i in t)return kl[e]=i}return e}const sp="http://www.w3.org/1999/xlink";function ip(t,e,n,r,s,i=hw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sp,e.slice(6,e.length)):t.setAttributeNS(sp,e,n):n==null||i&&!Mg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kr(n)?String(n):n)}function op(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?F_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ps(t,e,n,r){t.addEventListener(e,n,r)}function tA(t,e,n,r){t.removeEventListener(e,n,r)}const ap=Symbol("_vei");function nA(t,e,n,r,s=null){const i=t[ap]||(t[ap]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rA(e);if(r){const u=i[e]=oA(r,s);Ps(t,c,u,l)}else o&&(tA(t,c,o,l),i[e]=void 0)}}const cp=/(?:Once|Passive|Capture)$/;function rA(t){let e;if(cp.test(t)){e={};let r;for(;r=t.match(cp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Ll=0;const sA=Promise.resolve(),iA=()=>Ll||(sA.then(()=>Ll=0),Ll=Date.now());function oA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nn(aA(r,n.value),e,5,[r])};return n.value=t,n.attached=iA(),n}function aA(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Yb(t,r,o):e==="style"?Zb(t,n,r):Tc(e)?lh(e)||nA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lA(t,e,r,o))?(op(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ip(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?op(t,an(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ip(t,e,r,o))};function lA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lp(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lp(e)&&tt(n)?!1:e in t}const up=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Pa(e,n):e};function uA(t){t.target.composing=!0}function hp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xl=Symbol("_assign"),jt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xl]=up(s);const i=r||s.props&&s.props.type==="number";Ps(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=fu(c)),t[xl](c)}),n&&Ps(t,"change",()=>{t.value=t.value.trim()}),e||(Ps(t,"compositionstart",uA),Ps(t,"compositionend",hp),Ps(t,"change",hp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[xl]=up(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?fu(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},hA=["ctrl","shift","alt","meta"],dA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hA.some(n=>t[`${n}Key`]&&!e.includes(n))},B_=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=dA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},fA=lt({patchProp:cA},Gb);let dp;function pA(){return dp||(dp=yb(fA))}const mA=(...t)=>{const e=pA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_A(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gA(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _A(t){return tt(t)?document.querySelector(t):t}var yA=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const vA=Symbol();var fp;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fp||(fp={}));function EA(){const t=dw(!0),e=t.run(()=>rt({}));let n=[],r=[];const s=r_({install(i){s._a=i,i.provide(vA,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!yA?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}var pp={};/**
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
 */const j_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},H_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new wA;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bA=function(t){const e=j_(t);return H_.encodeByteArray(e,!0)},Za=function(t){return bA(t).replace(/\./g,"")},q_=function(t){try{return H_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IA=()=>AA().__FIREBASE_DEFAULTS__,RA=()=>{if(typeof process>"u"||typeof pp>"u")return;const t=pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&q_(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return IA()||RA()||SA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W_=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},K_=t=>{const e=W_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z_=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},G_=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class CA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Q_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Za(JSON.stringify(n)),Za(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function OA(){var t;const e=(t=kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LA(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xA(){return!OA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VA(){try{return typeof indexedDB=="object"}catch{return!1}}function MA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $A="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$A,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xn(s,c,r)}}function FA(t,e){return t.replace(UA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UA=/\{\$([^}]+)}/g;function BA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ec(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(mp(i)&&mp(o)){if(!ec(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mp(t){return t!==null&&typeof t=="object"}/**
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
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jA(t,e){const n=new HA(t,e);return n.subscribe.bind(n)}class HA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vl),s.error===void 0&&(s.error=Vl),s.complete===void 0&&(s.complete=Vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vl(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class WA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zA(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KA(t){return t===Gr?void 0:t}function zA(t){return t.instantiationMode==="EAGER"}/**
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
 */class GA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const QA={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},YA=Te.INFO,XA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},JA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=XA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=YA,this._logHandler=JA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const ZA=(t,e)=>e.some(n=>t instanceof n);let gp,_p;function eI(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tI(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,Su=new WeakMap,X_=new WeakMap,Ml=new WeakMap,Sh=new WeakMap;function nI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,t)}).catch(()=>{}),Sh.set(e,t),e}function rI(t){if(Su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Su.set(t,e)}let Cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sI(t){Cu=t(Cu)}function iI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($l(this),e,...n);return X_.set(r,e.sort?e.sort():[e]),wr(r)}:tI().includes(t)?function(...e){return t.apply($l(this),e),wr(Y_.get(this))}:function(...e){return wr(t.apply($l(this),e))}}function oI(t){return typeof t=="function"?iI(t):(t instanceof IDBTransaction&&rI(t),ZA(t,eI())?new Proxy(t,Cu):t)}function wr(t){if(t instanceof IDBRequest)return nI(t);if(Ml.has(t))return Ml.get(t);const e=oI(t);return e!==t&&(Ml.set(t,e),Sh.set(e,t)),e}const $l=t=>Sh.get(t);function aI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const cI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],Fl=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fl.get(e))return Fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Fl.set(e,i),i}sI(t=>({...t,get:(e,n,r)=>yp(e,n)||t.get(e,n,r),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",vp="0.10.13";/**
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
 */const Xn=new Rh("@firebase/app"),dI="@firebase/app-compat",fI="@firebase/analytics-compat",pI="@firebase/analytics",mI="@firebase/app-check-compat",gI="@firebase/app-check",_I="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",EI="@firebase/data-connect",TI="@firebase/database-compat",wI="@firebase/functions",bI="@firebase/functions-compat",AI="@firebase/installations",II="@firebase/installations-compat",RI="@firebase/messaging",SI="@firebase/messaging-compat",CI="@firebase/performance",PI="@firebase/performance-compat",OI="@firebase/remote-config",NI="@firebase/remote-config-compat",DI="@firebase/storage",kI="@firebase/storage-compat",LI="@firebase/firestore",xI="@firebase/vertexai-preview",VI="@firebase/firestore-compat",MI="firebase",$I="10.14.1";/**
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
 */const Ou="[DEFAULT]",FI={[Pu]:"fire-core",[dI]:"fire-core-compat",[pI]:"fire-analytics",[fI]:"fire-analytics-compat",[gI]:"fire-app-check",[mI]:"fire-app-check-compat",[_I]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[EI]:"fire-data-connect",[TI]:"fire-rtdb-compat",[wI]:"fire-fn",[bI]:"fire-fn-compat",[AI]:"fire-iid",[II]:"fire-iid-compat",[RI]:"fire-fcm",[SI]:"fire-fcm-compat",[CI]:"fire-perf",[PI]:"fire-perf-compat",[OI]:"fire-rc",[NI]:"fire-rc-compat",[DI]:"fire-gcs",[kI]:"fire-gcs-compat",[LI]:"fire-fst",[VI]:"fire-fst-compat",[xI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const tc=new Map,UI=new Map,Nu=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Nu.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,t);for(const n of tc.values())Ep(n,t);for(const n of UI.values())Ep(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
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
 */const BI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new xo("app","Firebase",BI);/**
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
 */class jI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=$I;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=z_()),!n)throw br.create("no-options");const i=tc.get(s);if(i){if(ec(n,i.options)&&ec(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new GA(s);for(const l of Nu.values())o.addComponent(l);const c=new jI(n,r,o);return tc.set(s,c),c}function Ch(t=Ou){const e=tc.get(t);if(!e&&t===Ou&&z_())return J_();if(!e)throw br.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=FI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(c.join(" "));return}ss(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HI="firebase-heartbeat-database",qI=1,Eo="firebase-heartbeat-store";let Ul=null;function Z_(){return Ul||(Ul=aI(HI,qI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function WI(t){try{const n=(await Z_()).transaction(Eo),r=await n.objectStore(Eo).get(ey(t));return await n.done,r}catch(e){if(e instanceof xn)Xn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function Tp(t,e){try{const r=(await Z_()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,ey(t)),await r.done}catch(n){if(n instanceof xn)Xn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function ey(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KI=1024,zI=30*24*60*60*1e3;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=zI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wp(),{heartbeatsToSend:r,unsentEntries:s}=QI(this._heartbeatsCache.heartbeats),i=Za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Xn.warn(n),""}}}function wp(){return new Date().toISOString().substring(0,10)}function QI(t,e=KI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VA()?MA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bp(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XI(t){ss(new Rr("platform-logger",e=>new uI(e),"PRIVATE")),ss(new Rr("heartbeat",e=>new GI(e),"PRIVATE")),An(Pu,vp,t),An(Pu,vp,"esm2017"),An("fire-js","")}XI("");function Ph(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=ty,ny=new xo("auth","Firebase",ty());/**
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
 */const nc=new Rh("@firebase/auth");function ZI(t,...e){nc.logLevel<=Te.WARN&&nc.warn(`Auth (${fs}): ${t}`,...e)}function La(t,...e){nc.logLevel<=Te.ERROR&&nc.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw Oh(t,...e)}function In(t,...e){return Oh(t,...e)}function ry(t,e,n){const r=Object.assign(Object.assign({},JI()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return ry(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ny.create(t,...e)}function ue(t,e,...n){if(!t)throw Oh(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function Jn(t,e){t||qn(e)}/**
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
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e0(){return Ap()==="http:"||Ap()==="https:"}function Ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function t0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e0()||DA()||"connection"in navigator)?navigator.onLine:!0}function n0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=PA()||kA()}get(){return t0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nh(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const r0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s0=new Mo(3e4,6e4);function ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,s={}){return iy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return NA()||(u.referrerPolicy="no-referrer"),sy.fetch()(oy(t,t.config.apiHost,n,c),u)})}async function iy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},r0),e);try{const s=new o0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ry(t,d,u);gn(t,d)}}catch(s){if(s instanceof xn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function xc(t,e,n,r,s={}){const i=await Vr(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function oy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`}function i0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),s0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function Ip(t){return t!==void 0&&t.enterprise!==void 0}class a0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return i0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function c0(t,e){return Vr(t,"GET","/v2/recaptchaConfig",ps(t,e))}/**
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
 */async function l0(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function ay(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u0(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Dh(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so(Bl(s.auth_time)),issuedAtTime:so(Bl(s.iat)),expirationTime:so(Bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bl(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const s=q_(n);return s?JSON.parse(s):(La("Failed to decode base64 JWT payload"),null)}catch(s){return La("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rp(t){const e=Dh(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&h0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function h0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class d0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ku{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await To(t,ay(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cy(i.providerUserInfo):[],c=p0(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ku(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function f0(t){const e=Xe(t);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cy(t){return t.map(e=>{var{providerId:n}=e,r=Ph(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function m0(t,e){const n=await iy(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=oy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",sy.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g0(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",ps(t,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Rp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await m0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
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
 */function lr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await To(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u0(this,e)}reload(){return f0(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await To(this,l0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:x,isAnonymous:Z,providerData:ee,stsTokenManager:b}=n;ue(M&&b,e,"internal-error");const y=Ks.fromJSON(this.name,b);ue(typeof M=="string",e,"internal-error"),lr(p,e.name),lr(m,e.name),ue(typeof x=="boolean",e,"internal-error"),ue(typeof Z=="boolean",e,"internal-error"),lr(_,e.name),lr(S,e.name),lr(O,e.name),lr(R,e.name),lr(P,e.name),lr(D,e.name);const E=new Wn({uid:M,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:Z,photoURL:S,phoneNumber:_,tenantId:O,stsTokenManager:y,createdAt:P,lastLoginAt:D});return ee&&Array.isArray(ee)&&(E.providerData=ee.map(A=>Object.assign({},A))),R&&(E._redirectEventId=R),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new Wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ks;c.updateFromIdToken(r);const l=new Wn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ku(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Sp=new Map;function Kn(t){Jn(t instanceof Function,"Expected a class definition");let e=Sp.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sp.set(t,e),e)}/**
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
 */class ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ly.type="NONE";const Cp=ly;/**
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
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Kn(Cp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Kn(Cp);const o=xa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Wn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(my(e))return"Blackberry";if(gy(e))return"Webos";if(hy(e))return"Safari";if((e.includes("chrome/")||dy(e))&&!e.includes("edge/"))return"Chrome";if(py(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uy(t=kt()){return/firefox\//i.test(t)}function hy(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dy(t=kt()){return/crios\//i.test(t)}function fy(t=kt()){return/iemobile/i.test(t)}function py(t=kt()){return/android/i.test(t)}function my(t=kt()){return/blackberry/i.test(t)}function gy(t=kt()){return/webos/i.test(t)}function kh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _0(t=kt()){var e;return kh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y0(){return LA()&&document.documentMode===10}function _y(t=kt()){return kh(t)||py(t)||gy(t)||my(t)||/windows phone/i.test(t)||fy(t)}/**
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
 */function yy(t,e=[]){let n;switch(t){case"Browser":n=Pp(kt());break;case"Worker":n=`${Pp(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class v0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function E0(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",ps(t,e))}/**
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
 */const T0=6;class w0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:T0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class b0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new v0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ay(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(Ar(this));const n=e?Xe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E0(this),n=new w0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await g0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(t){return Xe(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=jA(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A0(t){Vc=t}function vy(t){return Vc.loadJS(t)}function I0(){return Vc.recaptchaEnterpriseScript}function R0(){return Vc.gapiScript}function S0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const C0="recaptcha-enterprise",P0="NO_RECAPTCHA";class O0{constructor(e){this.type=C0,this.auth=mi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{c0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new a0(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Ip(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(P0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ip(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=I0();l.length!==0&&(l+=c),vy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Np(t,e,n,r=!1){const s=new O0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dp(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Np(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Np(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function N0(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ec(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function D0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k0(t,e,n){const r=mi(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ey(e),{host:o,port:c}=L0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),x0()}function Ey(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L0(t){const e=Ey(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function V0(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function M0(t,e){return xc(t,"POST","/v1/accounts:signInWithPassword",ps(t,e))}/**
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
 */async function $0(t,e){return xc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}async function F0(t,e){return xc(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}/**
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
 */class wo extends Lh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,n,"signInWithPassword",M0);case"emailLink":return $0(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dp(e,r,"signUpPassword",V0);case"emailLink":return F0(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return xc(t,"POST","/v1/accounts:signInWithIdp",ps(t,e))}/**
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
 */const U0="http://localhost";class is extends Lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ph(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:U0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
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
 */function B0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j0(t){const e=Ki(zi(t)).link,n=e?Ki(zi(e)).deep_link_id:null,r=Ki(zi(t)).deep_link_id;return(r?Ki(zi(r)).link:null)||r||n||e||t}class xh{constructor(e){var n,r,s,i,o,c;const l=Ki(zi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=B0((s=l.mode)!==null&&s!==void 0?s:null);ue(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=j0(e);try{return new xh(n)}catch{return null}}}/**
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
 */class gi{constructor(){this.providerId=gi.PROVIDER_ID}static credential(e,n){return wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xh.parseLink(n);return ue(r,"argument-error"),wo._fromEmailAndCode(e,r.code,r.tenantId)}}gi.PROVIDER_ID="password";gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ty{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends Ty{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mr extends $o{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
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
 */class gr extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
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
 */class _r extends $o{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
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
 */class yr extends $o{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wn._fromIdTokenResponse(e,r,s),o=Lp(r);return new Xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Lp(r);return new Xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Lp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sc extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sc(e,n,r,s)}}function wy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,i,e,r):i})}async function H0(t,e,n=!1){const r=await To(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xs._forOperation(t,"link",r)}/**
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
 */async function q0(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await To(t,wy(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Dh(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),Xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
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
 */async function by(t,e,n=!1){if(Hn(t.app))return Promise.reject(Ar(t));const r="signIn",s=await wy(t,r,e),i=await Xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function W0(t,e){return by(mi(t),e)}/**
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
 */async function K0(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function z0(t,e,n){return Hn(t.app)?Promise.reject(Ar(t)):W0(Xe(t),gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&K0(t),r})}function G0(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Q0(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Ay(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function Y0(t){return Xe(t).signOut()}const ic="__sak";/**
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
 */class Iy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const X0=1e3,J0=10;class Ry extends Iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);y0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,J0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},X0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const Z0=Ry;/**
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
 */class Sy extends Iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sy.type="SESSION";const Cy=Sy;/**
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
 */function eR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await eR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
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
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Vh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function nR(t){Rn().location.href=t}/**
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
 */function Py(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return Py()?self:null}/**
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
 */const Oy="firebaseLocalStorageDb",oR=1,oc="firebaseLocalStorage",Ny="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function aR(){const t=indexedDB.deleteDatabase(Oy);return new Fo(t).toPromise()}function Lu(){const t=indexedDB.open(Oy,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(oc,{keyPath:Ny})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(oc)?e(r):(r.close(),await aR(),e(await Lu()))})})}async function xp(t,e,n){const r=$c(t,!0).put({[Ny]:e,value:n});return new Fo(r).toPromise()}async function cR(t,e){const n=$c(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function Vp(t,e){const n=$c(t,!0).delete(e);return new Fo(n).toPromise()}const lR=800,uR=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new tR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lu();return await xp(e,ic,"1"),await Vp(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$c(s,!1).getAll();return new Fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const hR=Dy;new Mo(3e4,6e4);/**
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
 */function dR(t,e){return e?Kn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mh extends Lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fR(t){return by(t.auth,new Mh(t),t.bypassAuthState)}function pR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),q0(n,new Mh(t),t.bypassAuthState)}async function mR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),H0(n,new Mh(t),t.bypassAuthState)}/**
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
 */class ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fR;case"linkViaPopup":case"linkViaRedirect":return mR;case"reauthViaPopup":case"reauthViaRedirect":return pR;default:gn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gR=new Mo(2e3,1e4);class Ms extends ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gR.get())};e()}}Ms.currentPopupAction=null;/**
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
 */const _R="pendingRedirect",Va=new Map;class yR extends ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=wR(e),r=TR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ER(t,e){Va.set(t._key(),e)}function TR(t){return Kn(t._redirectPersistence)}function wR(t){return xa(_R,t.config.apiKey,t.name)}async function bR(t,e,n=!1){if(Hn(t.app))return Promise.reject(Ar(t));const r=mi(t),s=dR(r,e),o=await new yR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AR=10*60*1e3;class IR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(e))}saveEventToCache(e){this.cachedEventUids.add(Mp(e)),this.lastProcessedEventTime=Date.now()}}function Mp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ly(t);default:return!1}}/**
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
 */async function SR(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
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
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function OR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SR(t);for(const n of e)try{if(NR(n))return}catch{}gn(t,"unauthorized-domain")}function NR(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PR.test(n))return!1;if(CR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DR=new Mo(3e4,6e4);function $p(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kR(t){return new Promise((e,n)=>{var r,s,i;function o(){$p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$p(),n(In(t,"network-request-failed"))},timeout:DR.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const c=S0("iframefcb");return Rn()[c]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},vy(`${R0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function LR(t){return Ma=Ma||kR(t),Ma}/**
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
 */const xR=new Mo(5e3,15e3),VR="__/auth/iframe",MR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UR(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,MR):`https://${t.config.authDomain}/${VR}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=FR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vo(r).slice(1)}`}async function BR(t){const e=await LR(t),n=Rn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:UR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),c=Rn().setTimeout(()=>{i(o)},xR.get());function l(){Rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HR=500,qR=600,WR="_blank",KR="http://localhost";class Fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=HR,s=qR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(c=dy(u)?WR:n),uy(u)&&(e=e||KR,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(_0(u)&&c!=="_self")return GR(e||"",c),new Fp(null);const p=window.open(e||"",c,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Fp(p)}function GR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QR="__/auth/handler",YR="emulator/auth/handler",XR=encodeURIComponent("fac");async function Up(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof Ty){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof $o){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${XR}=${encodeURIComponent(l)}`:"";return`${JR(t)}?${Vo(c).slice(1)}${u}`}function JR({config:t}){return t.emulator?Nh(t,YR):`https://${t.authDomain}/${QR}`}/**
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
 */const jl="webStorageSupport";class ZR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cy,this._completeRedirectFn=bR,this._overrideRedirectResult=ER}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Up(e,n,r,Du(),s);return zR(e,o,Vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Up(e,n,r,Du(),s);return nR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BR(e),r=new IR(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jl,{type:jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jl];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _y()||hy()||kh()}}const eS=ZR;var Bp="@firebase/auth",jp="1.7.9";/**
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
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rS(t){ss(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yy(t)},u=new b0(r,s,i,l);return D0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Rr("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(r=>new tS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Bp,jp,nS(t)),An(Bp,jp,"esm2017")}/**
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
 */const sS=5*60,iS=G_("authIdTokenMaxAge")||sS;let Hp=null;const oS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iS)return;const s=n==null?void 0:n.token;Hp!==s&&(Hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $h(t=Ch()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N0(t,{popupRedirectResolver:eS,persistence:[hR,Z0,Cy]}),r=G_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oS(i.toString());Q0(n,o,()=>o(n.currentUser)),G0(n,c=>o(c))}}const s=W_("auth");return s&&k0(n,`http://${s}`),n}function aS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}A0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",aS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rS("Browser");var Ut="top",en="bottom",tn="right",Bt="left",Fc="auto",_i=[Ut,en,tn,Bt],os="start",Js="end",xy="clippingParents",Fh="viewport",Os="popper",Vy="reference",xu=_i.reduce(function(t,e){return t.concat([e+"-"+os,e+"-"+Js])},[]),Uh=[].concat(_i,[Fc]).reduce(function(t,e){return t.concat([e,e+"-"+os,e+"-"+Js])},[]),My="beforeRead",$y="read",Fy="afterRead",Uy="beforeMain",By="main",jy="afterMain",Hy="beforeWrite",qy="write",Wy="afterWrite",Ky=[My,$y,Fy,Uy,By,jy,Hy,qy,Wy];function Dn(t){return t?(t.nodeName||"").toLowerCase():null}function nn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function as(t){var e=nn(t).Element;return t instanceof e||t instanceof Element}function on(t){var e=nn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Bh(t){if(typeof ShadowRoot>"u")return!1;var e=nn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function cS(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},s=e.attributes[n]||{},i=e.elements[n];!on(i)||!Dn(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var c=s[o];c===!1?i.removeAttribute(o):i.setAttribute(o,c===!0?"":c)}))})}function lS(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),c=o.reduce(function(l,u){return l[u]="",l},{});!on(s)||!Dn(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(l){s.removeAttribute(l)}))})}}const jh={name:"applyStyles",enabled:!0,phase:"write",fn:cS,effect:lS,requires:["computeStyles"]};function Sn(t){return t.split("-")[0]}var Zr=Math.max,ac=Math.min,Zs=Math.round;function Vu(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function zy(){return!/^((?!chrome|android).)*safari/i.test(Vu())}function ei(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),s=1,i=1;e&&on(t)&&(s=t.offsetWidth>0&&Zs(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Zs(r.height)/t.offsetHeight||1);var o=as(t)?nn(t):window,c=o.visualViewport,l=!zy()&&n,u=(r.left+(l&&c?c.offsetLeft:0))/s,d=(r.top+(l&&c?c.offsetTop:0))/i,p=r.width/s,m=r.height/i;return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function Hh(t){var e=ei(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function Gy(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Bh(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Zn(t){return nn(t).getComputedStyle(t)}function uS(t){return["table","td","th"].indexOf(Dn(t))>=0}function Mr(t){return((as(t)?t.ownerDocument:t.document)||window.document).documentElement}function Uc(t){return Dn(t)==="html"?t:t.assignedSlot||t.parentNode||(Bh(t)?t.host:null)||Mr(t)}function qp(t){return!on(t)||Zn(t).position==="fixed"?null:t.offsetParent}function hS(t){var e=/firefox/i.test(Vu()),n=/Trident/i.test(Vu());if(n&&on(t)){var r=Zn(t);if(r.position==="fixed")return null}var s=Uc(t);for(Bh(s)&&(s=s.host);on(s)&&["html","body"].indexOf(Dn(s))<0;){var i=Zn(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Uo(t){for(var e=nn(t),n=qp(t);n&&uS(n)&&Zn(n).position==="static";)n=qp(n);return n&&(Dn(n)==="html"||Dn(n)==="body"&&Zn(n).position==="static")?e:n||hS(t)||e}function qh(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function io(t,e,n){return Zr(t,ac(e,n))}function dS(t,e,n){var r=io(t,e,n);return r>n?n:r}function Qy(){return{top:0,right:0,bottom:0,left:0}}function Yy(t){return Object.assign({},Qy(),t)}function Xy(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var fS=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Yy(typeof e!="number"?e:Xy(e,_i))};function pS(t){var e,n=t.state,r=t.name,s=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,c=Sn(n.placement),l=qh(c),u=[Bt,tn].indexOf(c)>=0,d=u?"height":"width";if(!(!i||!o)){var p=fS(s.padding,n),m=Hh(i),_=l==="y"?Ut:Bt,S=l==="y"?en:tn,O=n.rects.reference[d]+n.rects.reference[l]-o[l]-n.rects.popper[d],R=o[l]-n.rects.reference[l],P=Uo(i),D=P?l==="y"?P.clientHeight||0:P.clientWidth||0:0,M=O/2-R/2,x=p[_],Z=D-m[d]-p[S],ee=D/2-m[d]/2+M,b=io(x,ee,Z),y=l;n.modifiersData[r]=(e={},e[y]=b,e.centerOffset=b-ee,e)}}function mS(t){var e=t.state,n=t.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Gy(e.elements.popper,s)&&(e.elements.arrow=s))}const Jy={name:"arrow",enabled:!0,phase:"main",fn:pS,effect:mS,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ti(t){return t.split("-")[1]}var gS={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _S(t,e){var n=t.x,r=t.y,s=e.devicePixelRatio||1;return{x:Zs(n*s)/s||0,y:Zs(r*s)/s||0}}function Wp(t){var e,n=t.popper,r=t.popperRect,s=t.placement,i=t.variation,o=t.offsets,c=t.position,l=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,p=t.isFixed,m=o.x,_=m===void 0?0:m,S=o.y,O=S===void 0?0:S,R=typeof d=="function"?d({x:_,y:O}):{x:_,y:O};_=R.x,O=R.y;var P=o.hasOwnProperty("x"),D=o.hasOwnProperty("y"),M=Bt,x=Ut,Z=window;if(u){var ee=Uo(n),b="clientHeight",y="clientWidth";if(ee===nn(n)&&(ee=Mr(n),Zn(ee).position!=="static"&&c==="absolute"&&(b="scrollHeight",y="scrollWidth")),ee=ee,s===Ut||(s===Bt||s===tn)&&i===Js){x=en;var E=p&&ee===Z&&Z.visualViewport?Z.visualViewport.height:ee[b];O-=E-r.height,O*=l?1:-1}if(s===Bt||(s===Ut||s===en)&&i===Js){M=tn;var A=p&&ee===Z&&Z.visualViewport?Z.visualViewport.width:ee[y];_-=A-r.width,_*=l?1:-1}}var I=Object.assign({position:c},u&&gS),C=d===!0?_S({x:_,y:O},nn(n)):{x:_,y:O};if(_=C.x,O=C.y,l){var T;return Object.assign({},I,(T={},T[x]=D?"0":"",T[M]=P?"0":"",T.transform=(Z.devicePixelRatio||1)<=1?"translate("+_+"px, "+O+"px)":"translate3d("+_+"px, "+O+"px, 0)",T))}return Object.assign({},I,(e={},e[x]=D?O+"px":"",e[M]=P?_+"px":"",e.transform="",e))}function yS(t){var e=t.state,n=t.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,c=n.roundOffsets,l=c===void 0?!0:c,u={placement:Sn(e.placement),variation:ti(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Wp(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Wp(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Wh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:yS,data:{}};var ga={passive:!0};function vS(t){var e=t.state,n=t.instance,r=t.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,c=o===void 0?!0:o,l=nn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(d){d.addEventListener("scroll",n.update,ga)}),c&&l.addEventListener("resize",n.update,ga),function(){i&&u.forEach(function(d){d.removeEventListener("scroll",n.update,ga)}),c&&l.removeEventListener("resize",n.update,ga)}}const Kh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vS,data:{}};var ES={left:"right",right:"left",bottom:"top",top:"bottom"};function $a(t){return t.replace(/left|right|bottom|top/g,function(e){return ES[e]})}var TS={start:"end",end:"start"};function Kp(t){return t.replace(/start|end/g,function(e){return TS[e]})}function zh(t){var e=nn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Gh(t){return ei(Mr(t)).left+zh(t).scrollLeft}function wS(t,e){var n=nn(t),r=Mr(t),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,c=0,l=0;if(s){i=s.width,o=s.height;var u=zy();(u||!u&&e==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:i,height:o,x:c+Gh(t),y:l}}function bS(t){var e,n=Mr(t),r=zh(t),s=(e=t.ownerDocument)==null?void 0:e.body,i=Zr(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Zr(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+Gh(t),l=-r.scrollTop;return Zn(s||n).direction==="rtl"&&(c+=Zr(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:c,y:l}}function Qh(t){var e=Zn(t),n=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function Zy(t){return["html","body","#document"].indexOf(Dn(t))>=0?t.ownerDocument.body:on(t)&&Qh(t)?t:Zy(Uc(t))}function oo(t,e){var n;e===void 0&&(e=[]);var r=Zy(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=nn(r),o=s?[i].concat(i.visualViewport||[],Qh(r)?r:[]):r,c=e.concat(o);return s?c:c.concat(oo(Uc(o)))}function Mu(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function AS(t,e){var n=ei(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function zp(t,e,n){return e===Fh?Mu(wS(t,n)):as(e)?AS(e,n):Mu(bS(Mr(t)))}function IS(t){var e=oo(Uc(t)),n=["absolute","fixed"].indexOf(Zn(t).position)>=0,r=n&&on(t)?Uo(t):t;return as(r)?e.filter(function(s){return as(s)&&Gy(s,r)&&Dn(s)!=="body"}):[]}function RS(t,e,n,r){var s=e==="clippingParents"?IS(t):[].concat(e),i=[].concat(s,[n]),o=i[0],c=i.reduce(function(l,u){var d=zp(t,u,r);return l.top=Zr(d.top,l.top),l.right=ac(d.right,l.right),l.bottom=ac(d.bottom,l.bottom),l.left=Zr(d.left,l.left),l},zp(t,o,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ev(t){var e=t.reference,n=t.element,r=t.placement,s=r?Sn(r):null,i=r?ti(r):null,o=e.x+e.width/2-n.width/2,c=e.y+e.height/2-n.height/2,l;switch(s){case Ut:l={x:o,y:e.y-n.height};break;case en:l={x:o,y:e.y+e.height};break;case tn:l={x:e.x+e.width,y:c};break;case Bt:l={x:e.x-n.width,y:c};break;default:l={x:e.x,y:e.y}}var u=s?qh(s):null;if(u!=null){var d=u==="y"?"height":"width";switch(i){case os:l[u]=l[u]-(e[d]/2-n[d]/2);break;case Js:l[u]=l[u]+(e[d]/2-n[d]/2);break}}return l}function ni(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=r===void 0?t.placement:r,i=n.strategy,o=i===void 0?t.strategy:i,c=n.boundary,l=c===void 0?xy:c,u=n.rootBoundary,d=u===void 0?Fh:u,p=n.elementContext,m=p===void 0?Os:p,_=n.altBoundary,S=_===void 0?!1:_,O=n.padding,R=O===void 0?0:O,P=Yy(typeof R!="number"?R:Xy(R,_i)),D=m===Os?Vy:Os,M=t.rects.popper,x=t.elements[S?D:m],Z=RS(as(x)?x:x.contextElement||Mr(t.elements.popper),l,d,o),ee=ei(t.elements.reference),b=ev({reference:ee,element:M,strategy:"absolute",placement:s}),y=Mu(Object.assign({},M,b)),E=m===Os?y:ee,A={top:Z.top-E.top+P.top,bottom:E.bottom-Z.bottom+P.bottom,left:Z.left-E.left+P.left,right:E.right-Z.right+P.right},I=t.modifiersData.offset;if(m===Os&&I){var C=I[s];Object.keys(A).forEach(function(T){var qe=[tn,en].indexOf(T)>=0?1:-1,Je=[Ut,en].indexOf(T)>=0?"y":"x";A[T]+=C[Je]*qe})}return A}function SS(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,c=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Uh:l,d=ti(r),p=d?c?xu:xu.filter(function(S){return ti(S)===d}):_i,m=p.filter(function(S){return u.indexOf(S)>=0});m.length===0&&(m=p);var _=m.reduce(function(S,O){return S[O]=ni(t,{placement:O,boundary:s,rootBoundary:i,padding:o})[Sn(O)],S},{});return Object.keys(_).sort(function(S,O){return _[S]-_[O]})}function CS(t){if(Sn(t)===Fc)return[];var e=$a(t);return[Kp(t),e,Kp(e)]}function PS(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,c=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,d=n.boundary,p=n.rootBoundary,m=n.altBoundary,_=n.flipVariations,S=_===void 0?!0:_,O=n.allowedAutoPlacements,R=e.options.placement,P=Sn(R),D=P===R,M=l||(D||!S?[$a(R)]:CS(R)),x=[R].concat(M).reduce(function(Lt,nt){return Lt.concat(Sn(nt)===Fc?SS(e,{placement:nt,boundary:d,rootBoundary:p,padding:u,flipVariations:S,allowedAutoPlacements:O}):nt)},[]),Z=e.rects.reference,ee=e.rects.popper,b=new Map,y=!0,E=x[0],A=0;A<x.length;A++){var I=x[A],C=Sn(I),T=ti(I)===os,qe=[Ut,en].indexOf(C)>=0,Je=qe?"width":"height",we=ni(e,{placement:I,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),he=qe?T?tn:Bt:T?en:Ut;Z[Je]>ee[Je]&&(he=$a(he));var _e=$a(he),Qe=[];if(i&&Qe.push(we[C]<=0),c&&Qe.push(we[he]<=0,we[_e]<=0),Qe.every(function(Lt){return Lt})){E=I,y=!1;break}b.set(I,Qe)}if(y)for(var yt=S?3:1,vt=function(nt){var Ze=x.find(function($){var J=b.get($);if(J)return J.slice(0,nt).every(function(Q){return Q})});if(Ze)return E=Ze,"break"},De=yt;De>0;De--){var Ve=vt(De);if(Ve==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}const tv={name:"flip",enabled:!0,phase:"main",fn:PS,requiresIfExists:["offset"],data:{_skip:!1}};function Gp(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Qp(t){return[Ut,tn,en,Bt].some(function(e){return t[e]>=0})}function OS(t){var e=t.state,n=t.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=ni(e,{elementContext:"reference"}),c=ni(e,{altBoundary:!0}),l=Gp(o,r),u=Gp(c,s,i),d=Qp(l),p=Qp(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const nv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:OS};function NS(t,e,n){var r=Sn(t),s=[Bt,Ut].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],c=i[1];return o=o||0,c=(c||0)*s,[Bt,tn].indexOf(r)>=0?{x:c,y:o}:{x:o,y:c}}function DS(t){var e=t.state,n=t.options,r=t.name,s=n.offset,i=s===void 0?[0,0]:s,o=Uh.reduce(function(d,p){return d[p]=NS(p,e.rects,i),d},{}),c=o[e.placement],l=c.x,u=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const rv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:DS};function kS(t){var e=t.state,n=t.name;e.modifiersData[n]=ev({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Yh={name:"popperOffsets",enabled:!0,phase:"read",fn:kS,data:{}};function LS(t){return t==="x"?"y":"x"}function xS(t){var e=t.state,n=t.options,r=t.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,c=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.padding,m=n.tether,_=m===void 0?!0:m,S=n.tetherOffset,O=S===void 0?0:S,R=ni(e,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),P=Sn(e.placement),D=ti(e.placement),M=!D,x=qh(P),Z=LS(x),ee=e.modifiersData.popperOffsets,b=e.rects.reference,y=e.rects.popper,E=typeof O=="function"?O(Object.assign({},e.rects,{placement:e.placement})):O,A=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),I=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,C={x:0,y:0};if(ee){if(i){var T,qe=x==="y"?Ut:Bt,Je=x==="y"?en:tn,we=x==="y"?"height":"width",he=ee[x],_e=he+R[qe],Qe=he-R[Je],yt=_?-y[we]/2:0,vt=D===os?b[we]:y[we],De=D===os?-y[we]:-b[we],Ve=e.elements.arrow,Lt=_&&Ve?Hh(Ve):{width:0,height:0},nt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Qy(),Ze=nt[qe],$=nt[Je],J=io(0,b[we],Lt[we]),Q=M?b[we]/2-yt-J-Ze-A.mainAxis:vt-J-Ze-A.mainAxis,ne=M?-b[we]/2+yt+J+$+A.mainAxis:De+J+$+A.mainAxis,ye=e.elements.arrow&&Uo(e.elements.arrow),ke=ye?x==="y"?ye.clientTop||0:ye.clientLeft||0:0,v=(T=I==null?void 0:I[x])!=null?T:0,w=he+Q-v-ke,k=he+ne-v,U=io(_?ac(_e,w):_e,he,_?Zr(Qe,k):Qe);ee[x]=U,C[x]=U-he}if(c){var F,q=x==="x"?Ut:Bt,Y=x==="x"?en:tn,K=ee[Z],z=Z==="y"?"height":"width",W=K+R[q],oe=K-R[Y],X=[Ut,Bt].indexOf(P)!==-1,se=(F=I==null?void 0:I[Z])!=null?F:0,te=X?W:K-b[z]-y[z]-se+A.altAxis,ae=X?K+b[z]+y[z]-se-A.altAxis:oe,be=_&&X?dS(te,K,ae):io(_?te:W,K,_?ae:oe);ee[Z]=be,C[Z]=be-K}e.modifiersData[r]=C}}const sv={name:"preventOverflow",enabled:!0,phase:"main",fn:xS,requiresIfExists:["offset"]};function VS(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function MS(t){return t===nn(t)||!on(t)?zh(t):VS(t)}function $S(t){var e=t.getBoundingClientRect(),n=Zs(e.width)/t.offsetWidth||1,r=Zs(e.height)/t.offsetHeight||1;return n!==1||r!==1}function FS(t,e,n){n===void 0&&(n=!1);var r=on(e),s=on(e)&&$S(e),i=Mr(e),o=ei(t,s,n),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Dn(e)!=="body"||Qh(i))&&(c=MS(e)),on(e)?(l=ei(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Gh(i))),{x:o.left+c.scrollLeft-l.x,y:o.top+c.scrollTop-l.y,width:o.width,height:o.height}}function US(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(c){if(!n.has(c)){var l=e.get(c);l&&s(l)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||s(i)}),r}function BS(t){var e=US(t);return Ky.reduce(function(n,r){return n.concat(e.filter(function(s){return s.phase===r}))},[])}function jS(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function HS(t){var e=t.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Yp={placement:"bottom",modifiers:[],strategy:"absolute"};function Xp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Bc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,s=e.defaultOptions,i=s===void 0?Yp:s;return function(c,l,u){u===void 0&&(u=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Yp,i),modifiersData:{},elements:{reference:c,popper:l},attributes:{},styles:{}},p=[],m=!1,_={state:d,setOptions:function(P){var D=typeof P=="function"?P(d.options):P;O(),d.options=Object.assign({},i,d.options,D),d.scrollParents={reference:as(c)?oo(c):c.contextElement?oo(c.contextElement):[],popper:oo(l)};var M=BS(HS([].concat(r,d.options.modifiers)));return d.orderedModifiers=M.filter(function(x){return x.enabled}),S(),_.update()},forceUpdate:function(){if(!m){var P=d.elements,D=P.reference,M=P.popper;if(Xp(D,M)){d.rects={reference:FS(D,Uo(M),d.options.strategy==="fixed"),popper:Hh(M)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(A){return d.modifiersData[A.name]=Object.assign({},A.data)});for(var x=0;x<d.orderedModifiers.length;x++){if(d.reset===!0){d.reset=!1,x=-1;continue}var Z=d.orderedModifiers[x],ee=Z.fn,b=Z.options,y=b===void 0?{}:b,E=Z.name;typeof ee=="function"&&(d=ee({state:d,options:y,name:E,instance:_})||d)}}}},update:jS(function(){return new Promise(function(R){_.forceUpdate(),R(d)})}),destroy:function(){O(),m=!0}};if(!Xp(c,l))return _;_.setOptions(u).then(function(R){!m&&u.onFirstUpdate&&u.onFirstUpdate(R)});function S(){d.orderedModifiers.forEach(function(R){var P=R.name,D=R.options,M=D===void 0?{}:D,x=R.effect;if(typeof x=="function"){var Z=x({state:d,name:P,instance:_,options:M}),ee=function(){};p.push(Z||ee)}})}function O(){p.forEach(function(R){return R()}),p=[]}return _}}var qS=Bc(),WS=[Kh,Yh,Wh,jh],KS=Bc({defaultModifiers:WS}),zS=[Kh,Yh,Wh,jh,rv,tv,sv,Jy,nv],Xh=Bc({defaultModifiers:zS});const iv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:jy,afterRead:Fy,afterWrite:Wy,applyStyles:jh,arrow:Jy,auto:Fc,basePlacements:_i,beforeMain:Uy,beforeRead:My,beforeWrite:Hy,bottom:en,clippingParents:xy,computeStyles:Wh,createPopper:Xh,createPopperBase:qS,createPopperLite:KS,detectOverflow:ni,end:Js,eventListeners:Kh,flip:tv,hide:nv,left:Bt,main:By,modifierPhases:Ky,offset:rv,placements:Uh,popper:Os,popperGenerator:Bc,popperOffsets:Yh,preventOverflow:sv,read:$y,reference:Vy,right:tn,start:os,top:Ut,variationPlacements:xu,viewport:Fh,write:qy},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ur=new Map,Hl={set(t,e,n){ur.has(t)||ur.set(t,new Map);const r=ur.get(t);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,n)},get(t,e){return ur.has(t)&&ur.get(t).get(e)||null},remove(t,e){if(!ur.has(t))return;const n=ur.get(t);n.delete(e),n.size===0&&ur.delete(t)}},GS=1e6,QS=1e3,$u="transitionend",ov=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),YS=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),XS=t=>{do t+=Math.floor(Math.random()*GS);while(document.getElementById(t));return t},JS=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),s=Number.parseFloat(n);return!r&&!s?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*QS)},av=t=>{t.dispatchEvent(new Event($u))},zn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Sr=t=>zn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(ov(t)):null,yi=t=>{if(!zn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const r=t.closest("summary");if(r&&r.parentNode!==n||r===null)return!1}return e},Cr=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",cv=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?cv(t.parentNode):null},cc=()=>{},Bo=t=>{t.offsetHeight},lv=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ql=[],ZS=t=>{document.readyState==="loading"?(ql.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of ql)e()}),ql.push(t)):t()},cn=()=>document.documentElement.dir==="rtl",un=t=>{ZS(()=>{const e=lv();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}})},Ht=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,uv=(t,e,n=!0)=>{if(!n){Ht(t);return}const s=JS(e)+5;let i=!1;const o=({target:c})=>{c===e&&(i=!0,e.removeEventListener($u,o),Ht(t))};e.addEventListener($u,o),setTimeout(()=>{i||av(e)},s)},Jh=(t,e,n,r)=>{const s=t.length;let i=t.indexOf(e);return i===-1?!n&&r?t[s-1]:t[0]:(i+=n?1:-1,r&&(i=(i+s)%s),t[Math.max(0,Math.min(i,s-1))])},eC=/[^.]*(?=\..*)\.|.*/,tC=/\..*/,nC=/::\d+$/,Wl={};let Jp=1;const hv={mouseenter:"mouseover",mouseleave:"mouseout"},rC=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function dv(t,e){return e&&`${e}::${Jp++}`||t.uidEvent||Jp++}function fv(t){const e=dv(t);return t.uidEvent=e,Wl[e]=Wl[e]||{},Wl[e]}function sC(t,e){return function n(r){return Zh(r,{delegateTarget:t}),n.oneOff&&j.off(t,r.type,e),e.apply(t,[r])}}function iC(t,e,n){return function r(s){const i=t.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const c of i)if(c===o)return Zh(s,{delegateTarget:o}),r.oneOff&&j.off(t,s.type,e,n),n.apply(o,[s])}}function pv(t,e,n=null){return Object.values(t).find(r=>r.callable===e&&r.delegationSelector===n)}function mv(t,e,n){const r=typeof e=="string",s=r?n:e||n;let i=gv(t);return rC.has(i)||(i=t),[r,s,i]}function Zp(t,e,n,r,s){if(typeof e!="string"||!t)return;let[i,o,c]=mv(e,n,r);e in hv&&(o=(S=>function(O){if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget))return S.call(this,O)})(o));const l=fv(t),u=l[c]||(l[c]={}),d=pv(u,o,i?n:null);if(d){d.oneOff=d.oneOff&&s;return}const p=dv(o,e.replace(eC,"")),m=i?iC(t,n,o):sC(t,o);m.delegationSelector=i?n:null,m.callable=o,m.oneOff=s,m.uidEvent=p,u[p]=m,t.addEventListener(c,m,i)}function Fu(t,e,n,r,s){const i=pv(e[n],r,s);i&&(t.removeEventListener(n,i,!!s),delete e[n][i.uidEvent])}function oC(t,e,n,r){const s=e[n]||{};for(const[i,o]of Object.entries(s))i.includes(r)&&Fu(t,e,n,o.callable,o.delegationSelector)}function gv(t){return t=t.replace(tC,""),hv[t]||t}const j={on(t,e,n,r){Zp(t,e,n,r,!1)},one(t,e,n,r){Zp(t,e,n,r,!0)},off(t,e,n,r){if(typeof e!="string"||!t)return;const[s,i,o]=mv(e,n,r),c=o!==e,l=fv(t),u=l[o]||{},d=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(u).length)return;Fu(t,l,o,i,s?n:null);return}if(d)for(const p of Object.keys(l))oC(t,l,p,e.slice(1));for(const[p,m]of Object.entries(u)){const _=p.replace(nC,"");(!c||e.includes(_))&&Fu(t,l,o,m.callable,m.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const r=lv(),s=gv(e),i=e!==s;let o=null,c=!0,l=!0,u=!1;i&&r&&(o=r.Event(e,n),r(t).trigger(o),c=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const d=Zh(new Event(e,{bubbles:c,cancelable:!0}),n);return u&&d.preventDefault(),l&&t.dispatchEvent(d),d.defaultPrevented&&o&&o.preventDefault(),d}};function Zh(t,e={}){for(const[n,r]of Object.entries(e))try{t[n]=r}catch{Object.defineProperty(t,n,{configurable:!0,get(){return r}})}return t}function em(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Kl(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Gn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Kl(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Kl(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of n){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=em(t.dataset[r])}return e},getDataAttribute(t,e){return em(t.getAttribute(`data-bs-${Kl(e)}`))}};class jo{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const r=zn(n)?Gn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...zn(n)?Gn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[r,s]of Object.entries(n)){const i=e[r],o=zn(i)?"element":YS(i);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}}}const aC="5.3.3";class yn extends jo{constructor(e,n){super(),e=Sr(e),e&&(this._element=e,this._config=this._getConfig(n),Hl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Hl.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,r=!0){uv(e,n,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Hl.get(Sr(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return aC}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const zl=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e?e.split(",").map(n=>ov(n)).join(","):null},ce={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let r=t.parentNode.closest(e);for(;r;)n.push(r),r=r.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Cr(n)&&yi(n))},getSelectorFromElement(t){const e=zl(t);return e&&ce.findOne(e)?e:null},getElementFromSelector(t){const e=zl(t);return e?ce.findOne(e):null},getMultipleElementsFromSelector(t){const e=zl(t);return e?ce.find(e):[]}},jc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;j.on(document,n,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Cr(this))return;const i=ce.getElementFromSelector(this)||this.closest(`.${r}`);t.getOrCreateInstance(i)[e]()})},cC="alert",lC="bs.alert",_v=`.${lC}`,uC=`close${_v}`,hC=`closed${_v}`,dC="fade",fC="show";class Hc extends yn{static get NAME(){return cC}close(){if(j.trigger(this._element,uC).defaultPrevented)return;this._element.classList.remove(fC);const n=this._element.classList.contains(dC);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),j.trigger(this._element,hC),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Hc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}jc(Hc,"close");un(Hc);const pC="button",mC="bs.button",gC=`.${mC}`,_C=".data-api",yC="active",tm='[data-bs-toggle="button"]',vC=`click${gC}${_C}`;class qc extends yn{static get NAME(){return pC}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(yC))}static jQueryInterface(e){return this.each(function(){const n=qc.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}j.on(document,vC,tm,t=>{t.preventDefault();const e=t.target.closest(tm);qc.getOrCreateInstance(e).toggle()});un(qc);const EC="swipe",vi=".bs.swipe",TC=`touchstart${vi}`,wC=`touchmove${vi}`,bC=`touchend${vi}`,AC=`pointerdown${vi}`,IC=`pointerup${vi}`,RC="touch",SC="pen",CC="pointer-event",PC=40,OC={endCallback:null,leftCallback:null,rightCallback:null},NC={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class lc extends jo{constructor(e,n){super(),this._element=e,!(!e||!lc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return OC}static get DefaultType(){return NC}static get NAME(){return EC}dispose(){j.off(this._element,vi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Ht(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=PC)return;const n=e/this._deltaX;this._deltaX=0,n&&Ht(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,AC,e=>this._start(e)),j.on(this._element,IC,e=>this._end(e)),this._element.classList.add(CC)):(j.on(this._element,TC,e=>this._start(e)),j.on(this._element,wC,e=>this._move(e)),j.on(this._element,bC,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===SC||e.pointerType===RC)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const DC="carousel",kC="bs.carousel",$r=`.${kC}`,yv=".data-api",LC="ArrowLeft",xC="ArrowRight",VC=500,Ui="next",Rs="prev",Ns="left",Fa="right",MC=`slide${$r}`,Gl=`slid${$r}`,$C=`keydown${$r}`,FC=`mouseenter${$r}`,UC=`mouseleave${$r}`,BC=`dragstart${$r}`,jC=`load${$r}${yv}`,HC=`click${$r}${yv}`,vv="carousel",_a="active",qC="slide",WC="carousel-item-end",KC="carousel-item-start",zC="carousel-item-next",GC="carousel-item-prev",Ev=".active",Tv=".carousel-item",QC=Ev+Tv,YC=".carousel-item img",XC=".carousel-indicators",JC="[data-bs-slide], [data-bs-slide-to]",ZC='[data-bs-ride="carousel"]',eP={[LC]:Fa,[xC]:Ns},tP={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},nP={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ho extends yn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ce.findOne(XC,this._element),this._addEventListeners(),this._config.ride===vv&&this.cycle()}static get Default(){return tP}static get DefaultType(){return nP}static get NAME(){return DC}next(){this._slide(Ui)}nextWhenVisible(){!document.hidden&&yi(this._element)&&this.next()}prev(){this._slide(Rs)}pause(){this._isSliding&&av(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){j.one(this._element,Gl,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){j.one(this._element,Gl,()=>this.to(e));return}const r=this._getItemIndex(this._getActive());if(r===e)return;const s=e>r?Ui:Rs;this._slide(s,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&j.on(this._element,$C,e=>this._keydown(e)),this._config.pause==="hover"&&(j.on(this._element,FC,()=>this.pause()),j.on(this._element,UC,()=>this._maybeEnableCycle())),this._config.touch&&lc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of ce.find(YC,this._element))j.on(r,BC,s=>s.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Ns)),rightCallback:()=>this._slide(this._directionToOrder(Fa)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),VC+this._config.interval))}};this._swipeHelper=new lc(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=eP[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=ce.findOne(Ev,this._indicatorsElement);n.classList.remove(_a),n.removeAttribute("aria-current");const r=ce.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(_a),r.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const r=this._getActive(),s=e===Ui,i=n||Jh(this._getItems(),r,s,this._config.wrap);if(i===r)return;const o=this._getItemIndex(i),c=_=>j.trigger(this._element,_,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:o});if(c(MC).defaultPrevented||!r||!i)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const d=s?KC:WC,p=s?zC:GC;i.classList.add(p),Bo(i),r.classList.add(d),i.classList.add(d);const m=()=>{i.classList.remove(d,p),i.classList.add(_a),r.classList.remove(_a,p,d),this._isSliding=!1,c(Gl)};this._queueCallback(m,r,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(qC)}_getActive(){return ce.findOne(QC,this._element)}_getItems(){return ce.find(Tv,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return cn()?e===Ns?Rs:Ui:e===Ns?Ui:Rs}_orderToDirection(e){return cn()?e===Rs?Ns:Fa:e===Rs?Fa:Ns}static jQueryInterface(e){return this.each(function(){const n=Ho.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}j.on(document,HC,JC,function(t){const e=ce.getElementFromSelector(this);if(!e||!e.classList.contains(vv))return;t.preventDefault();const n=Ho.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");if(r){n.to(r),n._maybeEnableCycle();return}if(Gn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});j.on(window,jC,()=>{const t=ce.find(ZC);for(const e of t)Ho.getOrCreateInstance(e)});un(Ho);const rP="collapse",sP="bs.collapse",qo=`.${sP}`,iP=".data-api",oP=`show${qo}`,aP=`shown${qo}`,cP=`hide${qo}`,lP=`hidden${qo}`,uP=`click${qo}${iP}`,Ql="show",$s="collapse",ya="collapsing",hP="collapsed",dP=`:scope .${$s} .${$s}`,fP="collapse-horizontal",pP="width",mP="height",gP=".collapse.show, .collapse.collapsing",Uu='[data-bs-toggle="collapse"]',_P={parent:null,toggle:!0},yP={parent:"(null|element)",toggle:"boolean"};class bo extends yn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const r=ce.find(Uu);for(const s of r){const i=ce.getSelectorFromElement(s),o=ce.find(i).filter(c=>c===this._element);i!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _P}static get DefaultType(){return yP}static get NAME(){return rP}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(gP).filter(c=>c!==this._element).map(c=>bo.getOrCreateInstance(c,{toggle:!1}))),e.length&&e[0]._isTransitioning||j.trigger(this._element,oP).defaultPrevented)return;for(const c of e)c.hide();const r=this._getDimension();this._element.classList.remove($s),this._element.classList.add(ya),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ya),this._element.classList.add($s,Ql),this._element.style[r]="",j.trigger(this._element,aP)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||j.trigger(this._element,cP).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Bo(this._element),this._element.classList.add(ya),this._element.classList.remove($s,Ql);for(const s of this._triggerArray){const i=ce.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(ya),this._element.classList.add($s),j.trigger(this._element,lP)};this._element.style[n]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ql)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Sr(e.parent),e}_getDimension(){return this._element.classList.contains(fP)?pP:mP}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Uu);for(const n of e){const r=ce.getElementFromSelector(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))}}_getFirstLevelChildren(e){const n=ce.find(dP,this._config.parent);return ce.find(e,this._config.parent).filter(r=>!n.includes(r))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const r of e)r.classList.toggle(hP,!n),r.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const r=bo.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e]()}})}}j.on(document,uP,Uu,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of ce.getMultipleElementsFromSelector(this))bo.getOrCreateInstance(e,{toggle:!1}).toggle()});un(bo);const nm="dropdown",vP="bs.dropdown",ms=`.${vP}`,ed=".data-api",EP="Escape",rm="Tab",TP="ArrowUp",sm="ArrowDown",wP=2,bP=`hide${ms}`,AP=`hidden${ms}`,IP=`show${ms}`,RP=`shown${ms}`,wv=`click${ms}${ed}`,bv=`keydown${ms}${ed}`,SP=`keyup${ms}${ed}`,Ds="show",CP="dropup",PP="dropend",OP="dropstart",NP="dropup-center",DP="dropdown-center",Qr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',kP=`${Qr}.${Ds}`,Ua=".dropdown-menu",LP=".navbar",xP=".navbar-nav",VP=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",MP=cn()?"top-end":"top-start",$P=cn()?"top-start":"top-end",FP=cn()?"bottom-end":"bottom-start",UP=cn()?"bottom-start":"bottom-end",BP=cn()?"left-start":"right-start",jP=cn()?"right-start":"left-start",HP="top",qP="bottom",WP={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},KP={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Cn extends yn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=ce.next(this._element,Ua)[0]||ce.prev(this._element,Ua)[0]||ce.findOne(Ua,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return WP}static get DefaultType(){return KP}static get NAME(){return nm}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Cr(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!j.trigger(this._element,IP,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(xP))for(const r of[].concat(...document.body.children))j.on(r,"mouseover",cc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ds),this._element.classList.add(Ds),j.trigger(this._element,RP,e)}}hide(){if(Cr(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!j.trigger(this._element,bP,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))j.off(r,"mouseover",cc);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ds),this._element.classList.remove(Ds),this._element.setAttribute("aria-expanded","false"),Gn.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,AP,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!zn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${nm.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof iv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:zn(this._config.reference)?e=Sr(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Xh(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Ds)}_getPlacement(){const e=this._parent;if(e.classList.contains(PP))return BP;if(e.classList.contains(OP))return jP;if(e.classList.contains(NP))return HP;if(e.classList.contains(DP))return qP;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(CP)?n?$P:MP:n?UP:FP}_detectNavbar(){return this._element.closest(LP)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Gn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Ht(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const r=ce.find(VP,this._menu).filter(s=>yi(s));r.length&&Jh(r,n,e===sm,!r.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Cn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===wP||e.type==="keyup"&&e.key!==rm)return;const n=ce.find(kP);for(const r of n){const s=Cn.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=e.composedPath(),o=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===rm||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const c={relatedTarget:s._element};e.type==="click"&&(c.clickEvent=e),s._completeHide(c)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),r=e.key===EP,s=[TP,sm].includes(e.key);if(!s&&!r||n&&!r)return;e.preventDefault();const i=this.matches(Qr)?this:ce.prev(this,Qr)[0]||ce.next(this,Qr)[0]||ce.findOne(Qr,e.delegateTarget.parentNode),o=Cn.getOrCreateInstance(i);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),i.focus())}}j.on(document,bv,Qr,Cn.dataApiKeydownHandler);j.on(document,bv,Ua,Cn.dataApiKeydownHandler);j.on(document,wv,Cn.clearMenus);j.on(document,SP,Cn.clearMenus);j.on(document,wv,Qr,function(t){t.preventDefault(),Cn.getOrCreateInstance(this).toggle()});un(Cn);const Av="backdrop",zP="fade",im="show",om=`mousedown.bs.${Av}`,GP={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},QP={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Iv extends jo{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return GP}static get DefaultType(){return QP}static get NAME(){return Av}show(e){if(!this._config.isVisible){Ht(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Bo(n),n.classList.add(im),this._emulateAnimation(()=>{Ht(e)})}hide(e){if(!this._config.isVisible){Ht(e);return}this._getElement().classList.remove(im),this._emulateAnimation(()=>{this.dispose(),Ht(e)})}dispose(){this._isAppended&&(j.off(this._element,om),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(zP),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Sr(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),j.on(e,om,()=>{Ht(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){uv(e,this._getElement(),this._config.isAnimated)}}const YP="focustrap",XP="bs.focustrap",uc=`.${XP}`,JP=`focusin${uc}`,ZP=`keydown.tab${uc}`,eO="Tab",tO="forward",am="backward",nO={autofocus:!0,trapElement:null},rO={autofocus:"boolean",trapElement:"element"};class Rv extends jo{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return nO}static get DefaultType(){return rO}static get NAME(){return YP}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,uc),j.on(document,JP,e=>this._handleFocusin(e)),j.on(document,ZP,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,uc))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const r=ce.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===am?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===eO&&(this._lastTabNavDirection=e.shiftKey?am:tO)}}const cm=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",lm=".sticky-top",va="padding-right",um="margin-right";class Bu{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,va,n=>n+e),this._setElementAttributes(cm,va,n=>n+e),this._setElementAttributes(lm,um,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,va),this._resetElementAttributes(cm,va),this._resetElementAttributes(lm,um)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,r){const s=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,n);const c=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,n){const r=e.style.getPropertyValue(n);r&&Gn.setDataAttribute(e,n,r)}_resetElementAttributes(e,n){const r=s=>{const i=Gn.getDataAttribute(s,n);if(i===null){s.style.removeProperty(n);return}Gn.removeDataAttribute(s,n),s.style.setProperty(n,i)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,n){if(zn(e)){n(e);return}for(const r of ce.find(e,this._element))n(r)}}const sO="modal",iO="bs.modal",ln=`.${iO}`,oO=".data-api",aO="Escape",cO=`hide${ln}`,lO=`hidePrevented${ln}`,Sv=`hidden${ln}`,Cv=`show${ln}`,uO=`shown${ln}`,hO=`resize${ln}`,dO=`click.dismiss${ln}`,fO=`mousedown.dismiss${ln}`,pO=`keydown.dismiss${ln}`,mO=`click${ln}${oO}`,hm="modal-open",gO="fade",dm="show",Yl="modal-static",_O=".modal.show",yO=".modal-dialog",vO=".modal-body",EO='[data-bs-toggle="modal"]',TO={backdrop:!0,focus:!0,keyboard:!0},wO={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ri extends yn{constructor(e,n){super(e,n),this._dialog=ce.findOne(yO,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Bu,this._addEventListeners()}static get Default(){return TO}static get DefaultType(){return wO}static get NAME(){return sO}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||j.trigger(this._element,Cv,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(hm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||j.trigger(this._element,cO).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(dm),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){j.off(window,ln),j.off(this._dialog,ln),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Iv({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Rv({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=ce.findOne(vO,this._dialog);n&&(n.scrollTop=0),Bo(this._element),this._element.classList.add(dm);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,uO,{relatedTarget:e})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,pO,e=>{if(e.key===aO){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),j.on(window,hO,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),j.on(this._element,fO,e=>{j.one(this._element,dO,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(hm),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,Sv)})}_isAnimated(){return this._element.classList.contains(gO)}_triggerBackdropTransition(){if(j.trigger(this._element,lO).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Yl)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Yl),this._queueCallback(()=>{this._element.classList.remove(Yl),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;if(r&&!e){const s=cn()?"paddingLeft":"paddingRight";this._element.style[s]=`${n}px`}if(!r&&e){const s=cn()?"paddingRight":"paddingLeft";this._element.style[s]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const r=ri.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e](n)}})}}j.on(document,mO,EO,function(t){const e=ce.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,Cv,s=>{s.defaultPrevented||j.one(e,Sv,()=>{yi(this)&&this.focus()})});const n=ce.findOne(_O);n&&ri.getInstance(n).hide(),ri.getOrCreateInstance(e).toggle(this)});jc(ri);un(ri);const bO="offcanvas",AO="bs.offcanvas",sr=`.${AO}`,Pv=".data-api",IO=`load${sr}${Pv}`,RO="Escape",fm="show",pm="showing",mm="hiding",SO="offcanvas-backdrop",Ov=".offcanvas.show",CO=`show${sr}`,PO=`shown${sr}`,OO=`hide${sr}`,gm=`hidePrevented${sr}`,Nv=`hidden${sr}`,NO=`resize${sr}`,DO=`click${sr}${Pv}`,kO=`keydown.dismiss${sr}`,LO='[data-bs-toggle="offcanvas"]',xO={backdrop:!0,keyboard:!0,scroll:!1},VO={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Pr extends yn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return xO}static get DefaultType(){return VO}static get NAME(){return bO}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||j.trigger(this._element,CO,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Bu().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(pm);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(fm),this._element.classList.remove(pm),j.trigger(this._element,PO,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||j.trigger(this._element,OO).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(mm),this._backdrop.hide();const n=()=>{this._element.classList.remove(fm,mm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Bu().reset(),j.trigger(this._element,Nv)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){j.trigger(this._element,gm);return}this.hide()},n=!!this._config.backdrop;return new Iv({className:SO,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Rv({trapElement:this._element})}_addEventListeners(){j.on(this._element,kO,e=>{if(e.key===RO){if(this._config.keyboard){this.hide();return}j.trigger(this._element,gm)}})}static jQueryInterface(e){return this.each(function(){const n=Pr.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}j.on(document,DO,LO,function(t){const e=ce.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Cr(this))return;j.one(e,Nv,()=>{yi(this)&&this.focus()});const n=ce.findOne(Ov);n&&n!==e&&Pr.getInstance(n).hide(),Pr.getOrCreateInstance(e).toggle(this)});j.on(window,IO,()=>{for(const t of ce.find(Ov))Pr.getOrCreateInstance(t).show()});j.on(window,NO,()=>{for(const t of ce.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Pr.getOrCreateInstance(t).hide()});jc(Pr);un(Pr);const MO=/^aria-[\w-]*$/i,Dv={"*":["class","dir","id","lang","role",MO],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$O=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),FO=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,UO=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?$O.has(n)?!!FO.test(t.nodeValue):!0:e.filter(r=>r instanceof RegExp).some(r=>r.test(n))};function BO(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const s=new window.DOMParser().parseFromString(t,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const o of i){const c=o.nodeName.toLowerCase();if(!Object.keys(e).includes(c)){o.remove();continue}const l=[].concat(...o.attributes),u=[].concat(e["*"]||[],e[c]||[]);for(const d of l)UO(d,u)||o.removeAttribute(d.nodeName)}return s.body.innerHTML}const jO="TemplateFactory",HO={allowList:Dv,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},qO={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},WO={entry:"(string|element|function|null)",selector:"(string|element)"};class KO extends jo{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return HO}static get DefaultType(){return qO}static get NAME(){return jO}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(e,i,s);const n=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&n.classList.add(...r.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,r]of Object.entries(e))super._typeCheckConfig({selector:n,entry:r},WO)}_setContent(e,n,r){const s=ce.findOne(r,e);if(s){if(n=this._resolvePossibleFunction(n),!n){s.remove();return}if(zn(n)){this._putElementInTemplate(Sr(n),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(n);return}s.textContent=n}}_maybeSanitize(e){return this._config.sanitize?BO(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Ht(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const zO="tooltip",GO=new Set(["sanitize","allowList","sanitizeFn"]),Xl="fade",QO="modal",Ea="show",YO=".tooltip-inner",_m=`.${QO}`,ym="hide.bs.modal",Bi="hover",Jl="focus",XO="click",JO="manual",ZO="hide",eN="hidden",tN="show",nN="shown",rN="inserted",sN="click",iN="focusin",oN="focusout",aN="mouseenter",cN="mouseleave",lN={AUTO:"auto",TOP:"top",RIGHT:cn()?"left":"right",BOTTOM:"bottom",LEFT:cn()?"right":"left"},uN={allowList:Dv,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},hN={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ei extends yn{constructor(e,n){if(typeof iv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return uN}static get DefaultType(){return hN}static get NAME(){return zO}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(_m),ym,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=j.trigger(this._element,this.constructor.eventName(tN)),r=(cv(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),j.trigger(this._element,this.constructor.eventName(rN))),this._popper=this._createPopper(s),s.classList.add(Ea),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))j.on(c,"mouseover",cc);const o=()=>{j.trigger(this._element,this.constructor.eventName(nN)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||j.trigger(this._element,this.constructor.eventName(ZO)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ea),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))j.off(s,"mouseover",cc);this._activeTrigger[XO]=!1,this._activeTrigger[Jl]=!1,this._activeTrigger[Bi]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName(eN)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Xl,Ea),n.classList.add(`bs-${this.constructor.NAME}-auto`);const r=XS(this.constructor.NAME).toString();return n.setAttribute("id",r),this._isAnimated()&&n.classList.add(Xl),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new KO({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[YO]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xl)}_isShown(){return this.tip&&this.tip.classList.contains(Ea)}_createPopper(e){const n=Ht(this._config.placement,[this,e,this._element]),r=lN[n.toUpperCase()];return Xh(this._element,e,this._getPopperConfig(r))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return Ht(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...n,...Ht(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")j.on(this._element,this.constructor.eventName(sN),this._config.selector,r=>{this._initializeOnDelegatedTarget(r).toggle()});else if(n!==JO){const r=n===Bi?this.constructor.eventName(aN):this.constructor.eventName(iN),s=n===Bi?this.constructor.eventName(cN):this.constructor.eventName(oN);j.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?Jl:Bi]=!0,o._enter()}),j.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?Jl:Bi]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(_m),ym,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=Gn.getDataAttributes(this._element);for(const r of Object.keys(n))GO.has(r)&&delete n[r];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Sr(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,r]of Object.entries(this._config))this.constructor.Default[n]!==r&&(e[n]=r);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Ei.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}un(Ei);const dN="popover",fN=".popover-header",pN=".popover-body",mN={...Ei.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},gN={...Ei.DefaultType,content:"(null|string|element|function)"};class td extends Ei{static get Default(){return mN}static get DefaultType(){return gN}static get NAME(){return dN}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[fN]:this._getTitle(),[pN]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=td.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}un(td);const _N="scrollspy",yN="bs.scrollspy",nd=`.${yN}`,vN=".data-api",EN=`activate${nd}`,vm=`click${nd}`,TN=`load${nd}${vN}`,wN="dropdown-item",Ss="active",bN='[data-bs-spy="scroll"]',Zl="[href]",AN=".nav, .list-group",Em=".nav-link",IN=".nav-item",RN=".list-group-item",SN=`${Em}, ${IN} > ${Em}, ${RN}`,CN=".dropdown",PN=".dropdown-toggle",ON={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},NN={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Wc extends yn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ON}static get DefaultType(){return NN}static get NAME(){return _N}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Sr(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,vm),j.on(this._config.target,vm,Zl,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const r=this._rootElement||window,s=n.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const c=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(o),!s)return;continue}!i&&!c&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=ce.find(Zl,this._config.target);for(const n of e){if(!n.hash||Cr(n))continue;const r=ce.findOne(decodeURI(n.hash),this._element);yi(r)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,r))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ss),this._activateParents(e),j.trigger(this._element,EN,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(wN)){ce.findOne(PN,e.closest(CN)).classList.add(Ss);return}for(const n of ce.parents(e,AN))for(const r of ce.prev(n,SN))r.classList.add(Ss)}_clearActiveClass(e){e.classList.remove(Ss);const n=ce.find(`${Zl}.${Ss}`,e);for(const r of n)r.classList.remove(Ss)}static jQueryInterface(e){return this.each(function(){const n=Wc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}j.on(window,TN,()=>{for(const t of ce.find(bN))Wc.getOrCreateInstance(t)});un(Wc);const DN="tab",kN="bs.tab",gs=`.${kN}`,LN=`hide${gs}`,xN=`hidden${gs}`,VN=`show${gs}`,MN=`shown${gs}`,$N=`click${gs}`,FN=`keydown${gs}`,UN=`load${gs}`,BN="ArrowLeft",Tm="ArrowRight",jN="ArrowUp",wm="ArrowDown",eu="Home",bm="End",Yr="active",Am="fade",tu="show",HN="dropdown",kv=".dropdown-toggle",qN=".dropdown-menu",nu=`:not(${kv})`,WN='.list-group, .nav, [role="tablist"]',KN=".nav-item, .list-group-item",zN=`.nav-link${nu}, .list-group-item${nu}, [role="tab"]${nu}`,Lv='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ru=`${zN}, ${Lv}`,GN=`.${Yr}[data-bs-toggle="tab"], .${Yr}[data-bs-toggle="pill"], .${Yr}[data-bs-toggle="list"]`;class si extends yn{constructor(e){super(e),this._parent=this._element.closest(WN),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,FN,n=>this._keydown(n)))}static get NAME(){return DN}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),r=n?j.trigger(n,LN,{relatedTarget:e}):null;j.trigger(e,VN,{relatedTarget:n}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(Yr),this._activate(ce.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(tu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),j.trigger(e,MN,{relatedTarget:n})};this._queueCallback(r,e,e.classList.contains(Am))}_deactivate(e,n){if(!e)return;e.classList.remove(Yr),e.blur(),this._deactivate(ce.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(tu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),j.trigger(e,xN,{relatedTarget:n})};this._queueCallback(r,e,e.classList.contains(Am))}_keydown(e){if(![BN,Tm,jN,wm,eu,bm].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(s=>!Cr(s));let r;if([eu,bm].includes(e.key))r=n[e.key===eu?0:n.length-1];else{const s=[Tm,wm].includes(e.key);r=Jh(n,e.target,s,!0)}r&&(r.focus({preventScroll:!0}),si.getOrCreateInstance(r).show())}_getChildren(){return ce.find(ru,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const r of n)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",n),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=ce.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const r=this._getOuterElement(e);if(!r.classList.contains(HN))return;const s=(i,o)=>{const c=ce.findOne(i,r);c&&c.classList.toggle(o,n)};s(kv,Yr),s(qN,tu),r.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,r){e.hasAttribute(n)||e.setAttribute(n,r)}_elemIsActive(e){return e.classList.contains(Yr)}_getInnerElement(e){return e.matches(ru)?e:ce.findOne(ru,e)}_getOuterElement(e){return e.closest(KN)||e}static jQueryInterface(e){return this.each(function(){const n=si.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}j.on(document,$N,Lv,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Cr(this)&&si.getOrCreateInstance(this).show()});j.on(window,UN,()=>{for(const t of ce.find(GN))si.getOrCreateInstance(t)});un(si);const QN="toast",YN="bs.toast",Fr=`.${YN}`,XN=`mouseover${Fr}`,JN=`mouseout${Fr}`,ZN=`focusin${Fr}`,eD=`focusout${Fr}`,tD=`hide${Fr}`,nD=`hidden${Fr}`,rD=`show${Fr}`,sD=`shown${Fr}`,iD="fade",Im="hide",Ta="show",wa="showing",oD={animation:"boolean",autohide:"boolean",delay:"number"},aD={animation:!0,autohide:!0,delay:5e3};class Kc extends yn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return aD}static get DefaultType(){return oD}static get NAME(){return QN}show(){if(j.trigger(this._element,rD).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(iD);const n=()=>{this._element.classList.remove(wa),j.trigger(this._element,sD),this._maybeScheduleHide()};this._element.classList.remove(Im),Bo(this._element),this._element.classList.add(Ta,wa),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||j.trigger(this._element,tD).defaultPrevented)return;const n=()=>{this._element.classList.add(Im),this._element.classList.remove(wa,Ta),j.trigger(this._element,nD)};this._element.classList.add(wa),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ta),super.dispose()}isShown(){return this._element.classList.contains(Ta)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,XN,e=>this._onInteraction(e,!0)),j.on(this._element,JN,e=>this._onInteraction(e,!1)),j.on(this._element,ZN,e=>this._onInteraction(e,!0)),j.on(this._element,eD,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Kc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}jc(Kc);un(Kc);const cD={class:"navbar navbar-expand-lg navbar-light bg-light"},lD={class:"container-fluid"},uD={class:"collapse navbar-collapse",id:"navbarNav"},hD={class:"navbar-nav ms-auto"},dD={class:"nav-item dropdown"},fD={class:"dropdown-menu"},pD={class:"nav-item dropdown"},mD={class:"dropdown-menu"},gD={class:"nav-item dropdown"},_D={class:"dropdown-menu"},yD={key:0,class:"nav-item"},vD=Wt({__name:"NavBar",setup(t){const e=rt(!1),n=rt(""),r=rt(""),s=rt(!1),i=rt(!1),o=$h();pi(()=>{Ay(o,d=>{e.value=!!d})});const c=()=>{e.value?u():s.value=!s.value},l=async()=>{try{await z0(o,n.value,r.value),n.value="",r.value="",s.value=!1}catch(d){console.error("Error al iniciar sesión",d)}},u=async()=>{try{await Y0(o),e.value=!1,i.value=!i}catch(d){console.error("Error al cerrar sesión",d)}};return(d,p)=>{const m=wh("router-link");return ve(),Re("nav",cD,[L("div",lD,[Ie(m,{class:"navbar-brand",to:"/"},{default:dt(()=>p[3]||(p[3]=[It("Miranda's Cooking")])),_:1}),p[20]||(p[20]=L("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[L("span",{class:"navbar-toggler-icon"})],-1)),L("div",uD,[L("ul",hD,[L("li",dD,[p[9]||(p[9]=L("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Recetas ",-1)),L("ul",fD,[L("li",null,[Ie(m,{class:"nav-link",to:"/starter"},{default:dt(()=>p[4]||(p[4]=[It("Entrantes")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/meats"},{default:dt(()=>p[5]||(p[5]=[It("Carnes")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/fishes"},{default:dt(()=>p[6]||(p[6]=[It("Pescados")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/seafood"},{default:dt(()=>p[7]||(p[7]=[It("Mariscos")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/diet"},{default:dt(()=>p[8]||(p[8]=[It("Dietas")])),_:1})])])]),L("li",pD,[p[13]||(p[13]=L("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Pastelería ",-1)),L("ul",mD,[L("li",null,[Ie(m,{class:"nav-link",to:"/bakery"},{default:dt(()=>p[10]||(p[10]=[It("Recetas")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/dough"},{default:dt(()=>p[11]||(p[11]=[It("Masas")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/pastry"},{default:dt(()=>p[12]||(p[12]=[It("Repostería")])),_:1})])])]),L("li",gD,[p[18]||(p[18]=L("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Conceptos básicos ",-1)),L("ul",_D,[L("li",null,[Ie(m,{class:"nav-link",to:"/techniques"},{default:dt(()=>p[14]||(p[14]=[It("Técnicas culinarias")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/cuts"},{default:dt(()=>p[15]||(p[15]=[It("Cortes")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/sauces"},{default:dt(()=>p[16]||(p[16]=[It("Salsas")])),_:1})]),L("li",null,[Ie(m,{class:"nav-link",to:"/Flavor"},{default:dt(()=>p[17]||(p[17]=[It("Fondos")])),_:1})])])]),e.value?(ve(),Re("li",yD,[Ie(m,{class:"nav-link",to:"/add-recipe"},{default:dt(()=>p[19]||(p[19]=[It("Añadir receta")])),_:1})])):Au("",!0)]),L("div",null,[Rt(L("button",{onClick:p[0]||(p[0]=_=>{s.value=!0,i.value=!0}),class:"btn btn-primary"}," Iniciar Sesión ",512),[[tp,!i.value]]),Rt(L("button",{onClick:c,class:Rc(["btn",e.value?"btn-danger":"btn-primary"])}," Cerrar Sesión ",2),[[tp,e.value]])])])]),s.value?(ve(),Re("form",{key:0,onSubmit:B_(l,["prevent"]),class:"d-flex flex-column align-items-end"},[Rt(L("input",{type:"email","onUpdate:modelValue":p[1]||(p[1]=_=>n.value=_),class:"form-control mb-2",placeholder:"Correo Electrónico",required:""},null,512),[[jt,n.value]]),Rt(L("input",{type:"password","onUpdate:modelValue":p[2]||(p[2]=_=>r.value=_),class:"form-control mb-2",placeholder:"Contraseña",required:""},null,512),[[jt,r.value]]),p[21]||(p[21]=L("button",{type:"submit",class:"btn btn-primary"},"Iniciar Sesión",-1))],32)):Au("",!0)])}}}),_t=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ED=_t(vD,[["__scopeId","data-v-609ed801"]]),TD={id:"app"},wD={class:"container"},bD=Wt({__name:"App",setup(t){return(e,n)=>{const r=wh("router-view");return ve(),Re("div",TD,[L("div",wD,[Ie(ED),Ie(r)])])}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof document<"u";function xv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function AD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xv(t.default)}const Le=Object.assign;function su(t,e){const n={};for(const r in e){const s=e[r];n[r]=_n(s)?s.map(t):t(s)}return n}const ao=()=>{},_n=Array.isArray,Vv=/#/g,ID=/&/g,RD=/\//g,SD=/=/g,CD=/\?/g,Mv=/\+/g,PD=/%5B/g,OD=/%5D/g,$v=/%5E/g,ND=/%60/g,Fv=/%7B/g,DD=/%7C/g,Uv=/%7D/g,kD=/%20/g;function rd(t){return encodeURI(""+t).replace(DD,"|").replace(PD,"[").replace(OD,"]")}function LD(t){return rd(t).replace(Fv,"{").replace(Uv,"}").replace($v,"^")}function ju(t){return rd(t).replace(Mv,"%2B").replace(kD,"+").replace(Vv,"%23").replace(ID,"%26").replace(ND,"`").replace(Fv,"{").replace(Uv,"}").replace($v,"^")}function xD(t){return ju(t).replace(SD,"%3D")}function VD(t){return rd(t).replace(Vv,"%23").replace(CD,"%3F")}function MD(t){return t==null?"":VD(t).replace(RD,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $D=/\/$/,FD=t=>t.replace($D,"");function iu(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=HD(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ao(o)}}function UD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BD(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ii(e.matched[r],n.matched[s])&&Bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jD(t[n],e[n]))return!1;return!0}function jD(t,e){return _n(t)?Sm(t,e):_n(e)?Sm(e,t):t===e}function Sm(t,e){return _n(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function HD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(co||(co={}));function qD(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FD(t)}const WD=/^[^#]+#/;function KD(t,e){return t.replace(WD,"#")+e}function zD(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zc=()=>({left:window.scrollX,top:window.scrollY});function GD(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zD(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cm(t,e){return(history.state?history.state.position-e:-1)+t}const Hu=new Map;function QD(t,e){Hu.set(t,e)}function YD(t){const e=Hu.get(t);return Hu.delete(t),e}let XD=()=>location.protocol+"//"+location.host;function jv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Rm(l,"")}return Rm(n,t)+r+s}function JD(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=jv(t,location),S=n.value,O=e.value;let R=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}R=O?m.position-O.position:0}else r(_);s.forEach(P=>{P(n.value,S,{delta:R,type:Io.pop,direction:R?R>0?co.forward:co.back:co.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Le({},m.state,{scroll:zc()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Pm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zc():null}}function ZD(t){const{history:e,location:n}=window,r={value:jv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:XD()+t+l;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,u){const d=Le({},e.state,Pm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Le({},s.value,e.state,{forward:l,scroll:zc()});i(d.current,d,!0);const p=Le({},Pm(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function e1(t){t=qD(t);const e=ZD(t),n=JD(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Le({location:"",base:t,go:r,createHref:KD.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function t1(t){return typeof t=="string"||t&&typeof t=="object"}function Hv(t){return typeof t=="string"||typeof t=="symbol"}const qv=Symbol("");var Om;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Om||(Om={}));function oi(t,e){return Le(new Error,{type:t,[qv]:!0},e)}function Fn(t,e){return t instanceof Error&&qv in t&&(e==null||!!(t.type&e))}const Nm="[^/]+?",n1={sensitive:!1,strict:!1,start:!0,end:!0},r1=/[.+*?^${}()[\]/\\]/g;function s1(t,e){const n=Le({},n1,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(r1,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:O,optional:R,regexp:P}=m;i.push({name:S,repeatable:O,optional:R});const D=P||Nm;if(D!==Nm){_+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+x.message)}}let M=O?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(M=R&&u.length<2?`(?:/${M})`:"/"+M),R&&(M+="?"),s+=M,_+=20,R&&(_+=-8),O&&(_+=-20),D===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:S,repeatable:O,optional:R}=_,P=S in u?u[S]:"";if(_n(P)&&!O)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=_n(P)?P.join("/"):P;if(!D)if(R)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=D}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function i1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=i1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Dm(r))return 1;if(Dm(s))return-1}return s.length-r.length}function Dm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const o1={type:0,value:""},a1=/[a-zA-Z0-9_]/;function c1(t){if(!t)return[[]];if(t==="/")return[[o1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:a1.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function l1(t,e,n){const r=s1(c1(t.path),n),s=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function u1(t,e){const n=[],r=new Map;e=Vm({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,O=Lm(p);O.aliasOf=_&&_.record;const R=Vm(e,p),P=[O];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of x)P.push(Lm(Le({},O,{components:_?_.record.components:O.components,path:Z,aliasOf:_?_.record:O})))}let D,M;for(const x of P){const{path:Z}=x;if(m&&Z[0]!=="/"){const ee=m.record.path,b=ee[ee.length-1]==="/"?"":"/";x.path=m.record.path+(Z&&b+Z)}if(D=l1(x,m,R),_?_.alias.push(D):(M=M||D,M!==D&&M.alias.push(D),S&&p.name&&!xm(D)&&o(p.name)),Kv(D)&&l(D),O.children){const ee=O.children;for(let b=0;b<ee.length;b++)i(ee[b],D,_&&_.children[b])}_=_||D}return M?()=>{o(M)}:ao}function o(p){if(Hv(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=f1(p,n);n.splice(m,0,p),p.record.name&&!xm(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},O,R;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw oi(1,{location:p});R=_.record.name,S=Le(km(m.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&km(p.params,_.keys.map(M=>M.name))),O=_.stringify(S)}else if(p.path!=null)O=p.path,_=n.find(M=>M.re.test(O)),_&&(S=_.parse(O),R=_.record.name);else{if(_=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!_)throw oi(1,{location:p,currentLocation:m});R=_.record.name,S=Le({},m.params,p.params),O=_.stringify(S)}const P=[];let D=_;for(;D;)P.unshift(D.record),D=D.parent;return{name:R,path:O,params:S,matched:P,meta:d1(P)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function km(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:h1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function h1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function d1(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function Vm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function f1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wv(t,e[i])<0?r=i:n=i+1}const s=p1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function p1(t){let e=t;for(;e=e.parent;)if(Kv(e)&&Wv(t,e)===0)return e}function Kv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function m1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Mv," "),o=i.indexOf("="),c=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(c in e){let u=e[c];_n(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Mm(t){let e="";for(let n in t){const r=t[n];if(n=xD(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(_n(r)?r.map(i=>i&&ju(i)):[r&&ju(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function g1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=_n(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _1=Symbol(""),$m=Symbol(""),Gc=Symbol(""),sd=Symbol(""),qu=Symbol("");function ji(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(oi(4,{from:n,to:e})):m instanceof Error?l(m):t1(m)?l(oi(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function ou(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(xv(l)){const d=(l.__vccOpts||l)[e];d&&i.push(pr(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=AD(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&pr(_,n,r,o,c,s)()}))}}return i}function Fm(t){const e=pn(Gc),n=pn(sd),r=dn(()=>{const l=Hs(t.to);return e.resolve(l)}),s=dn(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ii.bind(null,d));if(m>-1)return m;const _=Um(l[u-2]);return u>1&&Um(d)===_&&p[p.length-1].path!==_?p.findIndex(ii.bind(null,l[u-2])):m}),i=dn(()=>s.value>-1&&T1(n.params,r.value.params)),o=dn(()=>s.value>-1&&s.value===n.matched.length-1&&Bv(n.params,r.value.params));function c(l={}){return E1(l)?e[Hs(t.replace)?"replace":"push"](Hs(t.to)).catch(ao):Promise.resolve()}return{route:r,href:dn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const y1=Wt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fm,setup(t,{slots:e}){const n=Do(Fm(t)),{options:r}=pn(Gc),s=dn(()=>({[Bm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),v1=y1;function E1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!_n(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Um(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bm=(t,e,n)=>t??e??n,w1=Wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pn(qu),s=dn(()=>t.route||r.value),i=pn($m,0),o=dn(()=>{let u=Hs(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=dn(()=>s.value.matched[o.value]);Oa($m,dn(()=>o.value+1)),Oa(_1,c),Oa(qu,s);const l=rt();return Na(()=>[l.value,c.value,t.name],([u,d,p],[m,_,S])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!ii(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return jm(n.default,{Component:m,route:u});const _=p.props[d],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,R=$_(m,Le({},S,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return jm(n.default,{Component:R,route:u})||R}}});function jm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const b1=w1;function A1(t){const e=u1(t.routes,t),n=t.parseQuery||m1,r=t.stringifyQuery||Mm,s=t.history,i=ji(),o=ji(),c=ji(),l=Dw(hr);let u=hr;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=su.bind(null,$=>""+$),p=su.bind(null,MD),m=su.bind(null,Ao);function _($,J){let Q,ne;return Hv($)?(Q=e.getRecordMatcher($),ne=J):ne=$,e.addRoute(ne,Q)}function S($){const J=e.getRecordMatcher($);J&&e.removeRoute(J)}function O(){return e.getRoutes().map($=>$.record)}function R($){return!!e.getRecordMatcher($)}function P($,J){if(J=Le({},J||l.value),typeof $=="string"){const w=iu(n,$,J.path),k=e.resolve({path:w.path},J),U=s.createHref(w.fullPath);return Le(w,k,{params:m(k.params),hash:Ao(w.hash),redirectedFrom:void 0,href:U})}let Q;if($.path!=null)Q=Le({},$,{path:iu(n,$.path,J.path).path});else{const w=Le({},$.params);for(const k in w)w[k]==null&&delete w[k];Q=Le({},$,{params:p(w)}),J.params=p(J.params)}const ne=e.resolve(Q,J),ye=$.hash||"";ne.params=d(m(ne.params));const ke=UD(r,Le({},$,{hash:LD(ye),path:ne.path})),v=s.createHref(ke);return Le({fullPath:ke,hash:ye,query:r===Mm?g1($.query):$.query||{}},ne,{redirectedFrom:void 0,href:v})}function D($){return typeof $=="string"?iu(n,$,l.value.path):Le({},$)}function M($,J){if(u!==$)return oi(8,{from:J,to:$})}function x($){return b($)}function Z($){return x(Le(D($),{replace:!0}))}function ee($){const J=$.matched[$.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let ne=typeof Q=="function"?Q($):Q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=D(ne):{path:ne},ne.params={}),Le({query:$.query,hash:$.hash,params:ne.path!=null?{}:$.params},ne)}}function b($,J){const Q=u=P($),ne=l.value,ye=$.state,ke=$.force,v=$.replace===!0,w=ee(Q);if(w)return b(Le(D(w),{state:typeof w=="object"?Le({},ye,w.state):ye,force:ke,replace:v}),J||Q);const k=Q;k.redirectedFrom=J;let U;return!ke&&BD(r,ne,Q)&&(U=oi(16,{to:k,from:ne}),vt(ne,ne,!0,!1)),(U?Promise.resolve(U):A(k,ne)).catch(F=>Fn(F)?Fn(F,2)?F:yt(F):_e(F,k,ne)).then(F=>{if(F){if(Fn(F,2))return b(Le({replace:v},D(F.to),{state:typeof F.to=="object"?Le({},ye,F.to.state):ye,force:ke}),J||k)}else F=C(k,ne,!0,v,ye);return I(k,ne,F),F})}function y($,J){const Q=M($,J);return Q?Promise.reject(Q):Promise.resolve()}function E($){const J=Lt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext($):$()}function A($,J){let Q;const[ne,ye,ke]=I1($,J);Q=ou(ne.reverse(),"beforeRouteLeave",$,J);for(const w of ne)w.leaveGuards.forEach(k=>{Q.push(pr(k,$,J))});const v=y.bind(null,$,J);return Q.push(v),Ze(Q).then(()=>{Q=[];for(const w of i.list())Q.push(pr(w,$,J));return Q.push(v),Ze(Q)}).then(()=>{Q=ou(ye,"beforeRouteUpdate",$,J);for(const w of ye)w.updateGuards.forEach(k=>{Q.push(pr(k,$,J))});return Q.push(v),Ze(Q)}).then(()=>{Q=[];for(const w of ke)if(w.beforeEnter)if(_n(w.beforeEnter))for(const k of w.beforeEnter)Q.push(pr(k,$,J));else Q.push(pr(w.beforeEnter,$,J));return Q.push(v),Ze(Q)}).then(()=>($.matched.forEach(w=>w.enterCallbacks={}),Q=ou(ke,"beforeRouteEnter",$,J,E),Q.push(v),Ze(Q))).then(()=>{Q=[];for(const w of o.list())Q.push(pr(w,$,J));return Q.push(v),Ze(Q)}).catch(w=>Fn(w,8)?w:Promise.reject(w))}function I($,J,Q){c.list().forEach(ne=>E(()=>ne($,J,Q)))}function C($,J,Q,ne,ye){const ke=M($,J);if(ke)return ke;const v=J===hr,w=ks?history.state:{};Q&&(ne||v?s.replace($.fullPath,Le({scroll:v&&w&&w.scroll},ye)):s.push($.fullPath,ye)),l.value=$,vt($,J,Q,v),yt()}let T;function qe(){T||(T=s.listen(($,J,Q)=>{if(!nt.listening)return;const ne=P($),ye=ee(ne);if(ye){b(Le(ye,{replace:!0}),ne).catch(ao);return}u=ne;const ke=l.value;ks&&QD(Cm(ke.fullPath,Q.delta),zc()),A(ne,ke).catch(v=>Fn(v,12)?v:Fn(v,2)?(b(v.to,ne).then(w=>{Fn(w,20)&&!Q.delta&&Q.type===Io.pop&&s.go(-1,!1)}).catch(ao),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(v,ne,ke))).then(v=>{v=v||C(ne,ke,!1),v&&(Q.delta&&!Fn(v,8)?s.go(-Q.delta,!1):Q.type===Io.pop&&Fn(v,20)&&s.go(-1,!1)),I(ne,ke,v)}).catch(ao)}))}let Je=ji(),we=ji(),he;function _e($,J,Q){yt($);const ne=we.list();return ne.length?ne.forEach(ye=>ye($,J,Q)):console.error($),Promise.reject($)}function Qe(){return he&&l.value!==hr?Promise.resolve():new Promise(($,J)=>{Je.add([$,J])})}function yt($){return he||(he=!$,qe(),Je.list().forEach(([J,Q])=>$?Q($):J()),Je.reset()),$}function vt($,J,Q,ne){const{scrollBehavior:ye}=t;if(!ks||!ye)return Promise.resolve();const ke=!Q&&YD(Cm($.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return a_().then(()=>ye($,J,ke)).then(v=>v&&GD(v)).catch(v=>_e(v,$,J))}const De=$=>s.go($);let Ve;const Lt=new Set,nt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:O,resolve:P,options:t,push:x,replace:Z,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:we.add,isReady:Qe,install($){const J=this;$.component("RouterLink",v1),$.component("RouterView",b1),$.config.globalProperties.$router=J,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>Hs(l)}),ks&&!Ve&&l.value===hr&&(Ve=!0,x(s.location).catch(ye=>{}));const Q={};for(const ye in hr)Object.defineProperty(Q,ye,{get:()=>l.value[ye],enumerable:!0});$.provide(Gc,J),$.provide(sd,t_(Q)),$.provide(qu,l);const ne=$.unmount;Lt.add($),$.unmount=function(){Lt.delete($),Lt.size<1&&(u=hr,T&&T(),T=null,l.value=hr,Ve=!1,he=!1),ne()}}};function Ze($){return $.reduce((J,Q)=>J.then(()=>E(Q)),Promise.resolve())}return nt}function I1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ii(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ii(u,l))||s.push(l))}return[n,r,s]}function R1(){return pn(Gc)}function S1(t){return pn(sd)}var C1="firebase",P1="10.14.1";/**
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
 */An(C1,P1,"app");var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,zv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function E(){}E.prototype=y.prototype,b.D=y.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(A,I,C){for(var T=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)T[qe-2]=arguments[qe];return y.prototype[I].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)A[I]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(I=0;16>I;++I)A[I]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=b.g[0],E=b.g[1],I=b.g[2];var C=b.g[3],T=y+(C^E&(I^C))+A[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=C+(I^y&(E^I))+A[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=I+(E^C&(y^E))+A[2]+606105819&4294967295,I=C+(T<<17&4294967295|T>>>15),T=E+(y^I&(C^y))+A[3]+3250441966&4294967295,E=I+(T<<22&4294967295|T>>>10),T=y+(C^E&(I^C))+A[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(I^y&(E^I))+A[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=I+(E^C&(y^E))+A[6]+2821735955&4294967295,I=C+(T<<17&4294967295|T>>>15),T=E+(y^I&(C^y))+A[7]+4249261313&4294967295,E=I+(T<<22&4294967295|T>>>10),T=y+(C^E&(I^C))+A[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(I^y&(E^I))+A[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=I+(E^C&(y^E))+A[10]+4294925233&4294967295,I=C+(T<<17&4294967295|T>>>15),T=E+(y^I&(C^y))+A[11]+2304563134&4294967295,E=I+(T<<22&4294967295|T>>>10),T=y+(C^E&(I^C))+A[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(I^y&(E^I))+A[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=I+(E^C&(y^E))+A[14]+2792965006&4294967295,I=C+(T<<17&4294967295|T>>>15),T=E+(y^I&(C^y))+A[15]+1236535329&4294967295,E=I+(T<<22&4294967295|T>>>10),T=y+(I^C&(E^I))+A[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^I&(y^E))+A[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=I+(y^E&(C^y))+A[11]+643717713&4294967295,I=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(I^C))+A[0]+3921069994&4294967295,E=I+(T<<20&4294967295|T>>>12),T=y+(I^C&(E^I))+A[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^I&(y^E))+A[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=I+(y^E&(C^y))+A[15]+3634488961&4294967295,I=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(I^C))+A[4]+3889429448&4294967295,E=I+(T<<20&4294967295|T>>>12),T=y+(I^C&(E^I))+A[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^I&(y^E))+A[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=I+(y^E&(C^y))+A[3]+4107603335&4294967295,I=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(I^C))+A[8]+1163531501&4294967295,E=I+(T<<20&4294967295|T>>>12),T=y+(I^C&(E^I))+A[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^I&(y^E))+A[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=I+(y^E&(C^y))+A[7]+1735328473&4294967295,I=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(I^C))+A[12]+2368359562&4294967295,E=I+(T<<20&4294967295|T>>>12),T=y+(E^I^C)+A[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^I)+A[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=I+(C^y^E)+A[11]+1839030562&4294967295,I=C+(T<<16&4294967295|T>>>16),T=E+(I^C^y)+A[14]+4259657740&4294967295,E=I+(T<<23&4294967295|T>>>9),T=y+(E^I^C)+A[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^I)+A[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=I+(C^y^E)+A[7]+4139469664&4294967295,I=C+(T<<16&4294967295|T>>>16),T=E+(I^C^y)+A[10]+3200236656&4294967295,E=I+(T<<23&4294967295|T>>>9),T=y+(E^I^C)+A[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^I)+A[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=I+(C^y^E)+A[3]+3572445317&4294967295,I=C+(T<<16&4294967295|T>>>16),T=E+(I^C^y)+A[6]+76029189&4294967295,E=I+(T<<23&4294967295|T>>>9),T=y+(E^I^C)+A[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^I)+A[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=I+(C^y^E)+A[15]+530742520&4294967295,I=C+(T<<16&4294967295|T>>>16),T=E+(I^C^y)+A[2]+3299628645&4294967295,E=I+(T<<23&4294967295|T>>>9),T=y+(I^(E|~C))+A[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~I))+A[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=I+(y^(C|~E))+A[14]+2878612391&4294967295,I=C+(T<<15&4294967295|T>>>17),T=E+(C^(I|~y))+A[5]+4237533241&4294967295,E=I+(T<<21&4294967295|T>>>11),T=y+(I^(E|~C))+A[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~I))+A[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=I+(y^(C|~E))+A[10]+4293915773&4294967295,I=C+(T<<15&4294967295|T>>>17),T=E+(C^(I|~y))+A[1]+2240044497&4294967295,E=I+(T<<21&4294967295|T>>>11),T=y+(I^(E|~C))+A[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~I))+A[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=I+(y^(C|~E))+A[6]+2734768916&4294967295,I=C+(T<<15&4294967295|T>>>17),T=E+(C^(I|~y))+A[13]+1309151649&4294967295,E=I+(T<<21&4294967295|T>>>11),T=y+(I^(E|~C))+A[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~I))+A[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=I+(y^(C|~E))+A[2]+718787259&4294967295,I=C+(T<<15&4294967295|T>>>17),T=E+(C^(I|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var E=y-this.blockSize,A=this.B,I=this.h,C=0;C<y;){if(I==0)for(;C<=E;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<y;)if(A[I++]=b.charCodeAt(C++),I==this.blockSize){s(this,A),I=0;break}}else for(;C<y;)if(A[I++]=b[C++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var E=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=E&255,E/=256;for(this.u(b),b=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)b[E++]=this.g[y]>>>A&255;return b};function i(b,y){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=y(b)}function o(b,y){this.h=y;for(var E=[],A=!0,I=b.length-1;0<=I;I--){var C=b[I]|0;A&&C==y||(E[I]=C,A=!1)}this.g=E}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return R(u(-b));for(var y=[],E=1,A=0;b>=E;A++)y[A]=b/E|0,E*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return R(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),A=p,I=0;I<b.length;I+=8){var C=Math.min(8,b.length-I),T=parseInt(b.substring(I,I+C),y);8>C?(C=u(Math.pow(y,C)),A=A.j(C).add(u(T))):(A=A.j(E),A=A.add(u(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-R(this).m();for(var b=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);b+=(0<=A?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(O(this))return"-"+R(this).toString(b);for(var y=u(Math.pow(b,6)),E=this,A="";;){var I=x(E,y).g;E=P(E,I.j(y));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=I,S(E))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=P(this,b),O(b)?-1:S(b)?0:1};function R(b){for(var y=b.g.length,E=[],A=0;A<y;A++)E[A]=~b.g[A];return new o(E,~b.h).add(m)}t.abs=function(){return O(this)?R(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],A=0,I=0;I<=y;I++){var C=A+(this.i(I)&65535)+(b.i(I)&65535),T=(C>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);A=T>>>16,C&=65535,T&=65535,E[I]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function P(b,y){return b.add(R(y))}t.j=function(b){if(S(this)||S(b))return p;if(O(this))return O(b)?R(this).j(R(b)):R(R(this).j(b));if(O(b))return R(this.j(R(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var I=0;I<b.g.length;I++){var C=this.i(A)>>>16,T=this.i(A)&65535,qe=b.i(I)>>>16,Je=b.i(I)&65535;E[2*A+2*I]+=T*Je,D(E,2*A+2*I),E[2*A+2*I+1]+=C*Je,D(E,2*A+2*I+1),E[2*A+2*I+1]+=T*qe,D(E,2*A+2*I+1),E[2*A+2*I+2]+=C*qe,D(E,2*A+2*I+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function D(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function M(b,y){this.g=b,this.h=y}function x(b,y){if(S(y))throw Error("division by zero");if(S(b))return new M(p,p);if(O(b))return y=x(R(b),y),new M(R(y.g),R(y.h));if(O(y))return y=x(b,R(y)),new M(R(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;0>=A.l(b);)E=Z(E),A=Z(A);var I=ee(E,1),C=ee(A,1);for(A=ee(A,2),E=ee(E,2);!S(A);){var T=C.add(A);0>=T.l(b)&&(I=I.add(E),C=T),A=ee(A,1),E=ee(E,1)}return y=P(b,I.j(y)),new M(I,y)}for(I=p;0<=b.l(y);){for(E=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(E),T=C.j(y);O(T)||0<T.l(b);)E-=A,C=u(E),T=C.j(y);S(C)&&(C=m),I=I.add(C),b=P(b,T)}return new M(I,b)}t.A=function(b){return x(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&b.i(A);return new o(E,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|b.i(A);return new o(E,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^b.i(A);return new o(E,this.h^b.h)};function Z(b){for(var y=b.g.length+1,E=[],A=0;A<y;A++)E[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(E,b.h)}function ee(b,y){var E=y>>5;y%=32;for(var A=b.g.length-E,I=[],C=0;C<A;C++)I[C]=0<y?b.i(C+E)>>>y|b.i(C+E+1)<<32-y:b.i(C+E);return new o(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,es=o}).apply(typeof Hm<"u"?Hm:typeof self<"u"?self:typeof window<"u"?window:{});var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gv,Gi,Qv,Ba,Wu,Yv,Xv,Jv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ba=="object"&&ba];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,V){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return h.prototype[N].apply(g,G)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const N=a.length||0,V=g.length||0;a.length=N+V;for(let G=0;G<V;G++)a[N+G]=g[G]}else a.push(g)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var Z=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function ee(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function I(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Qe;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class qe{constructor(){this.h=this.g=null}add(h,f){const g=Je.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Je=new P(()=>new we,a=>a.reset());class we{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,_e=!1,Qe=new qe,yt=()=>{const a=c.Promise.resolve(void 0);he=()=>{a.then(vt)}};var vt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){C(f)}var h=Je;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function De(){this.s=this.s,this.C=this.C}De.prototype.s=!1,De.prototype.ma=function(){this.s||(this.s=!0,this.N())},De.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function nt(a,h){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{x(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ze[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nt.aa.h.call(this)}}S(nt,Ve);var Ze={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++J,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,f,g,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=v(a,h,g,N);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Q(h,this.src,V,!!g,N),h.fa=f,a.push(h)),h};function ke(a,h){var f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=N)&&Array.prototype.splice.call(g,N,1),V&&(ne(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return N}return-1}var w="closure_lm_"+(1e6*Math.random()|0),k={};function U(a,h,f,g,N){if(Array.isArray(h)){for(var V=0;V<h.length;V++)U(a,h[V],f,g,N);return null}return f=se(f),a&&a[$]?a.K(h,f,u(g)?!!g.capture:!!g,N):F(a,h,f,!1,g,N)}function F(a,h,f,g,N,V){if(!h)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Me=oe(a);if(Me||(a[w]=Me=new ye(a)),f=Me.add(h,f,g,G,V),f.proxy)return f;if(g=q(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Lt||(N=G),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(z(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return h.call(a.src,a.listener,f)}const h=W;return a}function Y(a,h,f,g,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)Y(a,h[V],f,g,N);else g=u(g)?!!g.capture:!!g,f=se(f),a&&a[$]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=v(V,f,g,N),-1<f&&(ne(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=oe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,N)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$])ke(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(z(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=oe(h))?(ke(f,a),f.h==0&&(f.src=null,h[w]=null)):ne(a)}}}function z(a){return a in k?k[a]:k[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new nt(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&K(a),a=f.call(g,h)}return a}function oe(a){return a=a[w],a instanceof ye?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[X]||(a[X]=function(h){return a.handleEvent(h)}),a[X])}function te(){De.call(this),this.i=new ye(this),this.M=this,this.F=null}S(te,De),te.prototype[$]=!0,te.prototype.removeEventListener=function(a,h,f,g){Y(this,a,h,f,g)};function ae(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ve(h,a);else if(h instanceof Ve)h.target=h.target||a;else{var N=h;h=new Ve(g,a),A(h,N)}if(N=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];N=be(G,g,!0,h)&&N}if(G=h.g=a,N=be(G,g,!0,h)&&N,N=be(G,g,!1,h)&&N,f)for(V=0;V<f.length;V++)G=h.g=f[V],N=be(G,g,!1,h)&&N}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ne(f[g]);delete a.g[h],a.h--}}this.F=null},te.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},te.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function be(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var Me=G.listener,ht=G.ha||G.src;G.fa&&ke(a.i,G),N=Me.call(ht,g)!==!1&&N}}return N&&!g.defaultPrevented}function Se(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Et(a){a.g=Se(()=>{a.g=null,a.i&&(a.i=!1,Et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ot extends De{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){De.call(this),this.h=a,this.g={}}S(ut,De);var Tt=[];function ir(a){ee(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),ir(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vs=c.JSON.stringify,xt=c.JSON.parse,rn=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Es(){}Es.prototype.h=null;function Wd(a){return a.h||(a.h=a.i())}function Kd(){}var Ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ul(){Ve.call(this,"d")}S(ul,Ve);function hl(){Ve.call(this,"c")}S(hl,Ve);var Br={},zd=null;function Xo(){return zd=zd||new te}Br.La="serverreachability";function Gd(a){Ve.call(this,Br.La,a)}S(Gd,Ve);function Ri(a){const h=Xo();ae(h,new Gd(h))}Br.STAT_EVENT="statevent";function Qd(a,h){Ve.call(this,Br.STAT_EVENT,a),this.stat=h}S(Qd,Ve);function Vt(a){const h=Xo();ae(h,new Qd(h,a))}Br.Ma="timingevent";function Yd(a,h){Ve.call(this,Br.Ma,a),this.size=h}S(Yd,Ve);function Si(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function DT(a,h,f,g,N,V){a.info(function(){if(a.g)if(V)for(var G="",Me=V.split("&"),ht=0;ht<Me.length;ht++){var Ce=Me[ht].split("=");if(1<Ce.length){var wt=Ce[0];Ce=Ce[1];var bt=wt.split("_");G=2<=bt.length&&bt[1]=="type"?G+(wt+"="+Ce+"&"):G+(wt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+G})}function kT(a,h,f,g,N,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+V+" "+G})}function Ts(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xT(a,f)+(g?" "+g:"")})}function LT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function xT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return vs(f)}catch{return h}}var Jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dl;function Zo(){}S(Zo,Es),Zo.prototype.g=function(){return new XMLHttpRequest},Zo.prototype.i=function(){return{}},dl=new Zo;function or(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jd}function Jd(){this.i=null,this.g="",this.h=!1}var Zd={},fl={};function pl(a,h,f){a.L=1,a.v=ra(Vn(h)),a.m=f,a.P=!0,ef(a,null)}function ef(a,h){a.F=Date.now(),ea(a),a.A=Vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Jd,a.g=kf(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ot(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Tt[0]=N.toString()),N=Tt);for(var V=0;V<N.length;V++){var G=U(f,N[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ri(),DT(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&Mn(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const bt=Mn(this.g);var h=this.g.Ba();const As=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||wf(this.g)))){this.J||bt!=4||h==7||(h==8||0>=As?Ri(3):Ri(2)),ml(this);var f=this.g.Z();this.X=f;t:if(tf(this)){var g=wf(this.g);a="";var N=g.length,V=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),Pi(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,kT(this.i,this.u,this.A,this.l,this.R,bt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ht=this.g;if((Me=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Me)){var Ce=Me;break t}}Ce=null}if(f=Ce)Ts(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gl(this,f);else{this.o=!1,this.s=3,Vt(12),jr(this),Pi(this);break e}}if(this.P){f=!0;let hn;for(;!this.J&&this.C<G.length;)if(hn=VT(this,G),hn==fl){bt==4&&(this.s=4,Vt(14),f=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Zd){this.s=4,Vt(15),Ts(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Ts(this.i,this.l,hn,null),gl(this,hn);if(tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||G.length!=0||this.h.h||(this.s=1,Vt(16),f=!1),this.o=this.o&&f,!f)Ts(this.i,this.l,G,"[Invalid Chunked Response]"),jr(this),Pi(this);else if(0<G.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),wl(wt),wt.M=!0,Vt(11))}}else Ts(this.i,this.l,G,null),gl(this,G);bt==4&&jr(this),this.o&&!this.J&&(bt==4?Pf(this.j,this):(this.o=!1,ea(this)))}else ZT(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),jr(this),Pi(this)}}}catch{}finally{}};function tf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function VT(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?fl:(f=Number(h.substring(f,g)),isNaN(f)?Zd:(g+=1,g+f>h.length?fl:(h=h.slice(g,g+f),a.C=g+f,h)))}or.prototype.cancel=function(){this.J=!0,jr(this)};function ea(a){a.S=Date.now()+a.I,nf(a,a.I)}function nf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Si(m(a.ba,a),h)}function ml(a){a.B&&(c.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(LT(this.i,this.A),this.L!=2&&(Ri(),Vt(17)),jr(this),this.s=2,Pi(this)):nf(this,this.S-a)};function Pi(a){a.j.G==0||a.J||Pf(a.j,a)}function jr(a){ml(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ir(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function gl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||_l(f.h,a))){if(!a.K&&_l(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)la(f),aa(f);else break e;Tl(f),Vt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Si(m(f.Za,f),6e3));if(1>=of(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else qr(f,11)}else if((a.K||f.g==a)&&la(f),!D(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let Ce=N[h];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const wt=Ce[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const bt=Ce[4];bt!=null&&(f.Aa=bt,f.j.info("SVER="+f.Aa));const As=Ce[5];As!=null&&typeof As=="number"&&0<As&&(g=1.5*As,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const hn=a.g;if(hn){const ha=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ha){var V=g.h;V.g||ha.indexOf("spdy")==-1&&ha.indexOf("quic")==-1&&ha.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(yl(V,V.h),V.h=null))}if(g.D){const bl=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;bl&&(g.ya=bl,Be(g.I,g.D,bl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Df(g,g.J?g.ia:null,g.W),G.K){af(g.h,G);var Me=G,ht=g.L;ht&&(Me.I=ht),Me.B&&(ml(Me),ea(Me)),g.g=G}else Sf(g);0<f.i.length&&ca(f)}else Ce[0]!="stop"&&Ce[0]!="close"||qr(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?qr(f,7):El(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Ri(4)}catch{}}var MT=class{constructor(a,h){this.g=a,this.map=h}};function rf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function of(a){return a.h?1:a.g?a.g.size:0}function _l(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yl(a,h){a.g?a.g.add(h):a.h=h}function af(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rf.prototype.cancel=function(){if(this.i=cf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function $T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function FT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function lf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=FT(a),g=$T(a),N=g.length,V=0;V<N;V++)h.call(void 0,g[V],f&&f[V],a)}var uf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var V=a[f].substring(0,g);N=a[f].substring(g+1)}else V=a[f];h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,ta(this,a.j),this.o=a.o,this.g=a.g,na(this,a.s),this.l=a.l;var h=a.i,f=new Di;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),hf(this,f),this.m=a.m}else a&&(h=String(a).match(uf))?(this.h=!1,ta(this,h[1]||"",!0),this.o=Oi(h[2]||""),this.g=Oi(h[3]||"",!0),na(this,h[4]),this.l=Oi(h[5]||"",!0),hf(this,h[6]||"",!0),this.m=Oi(h[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Hr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ni(h,df,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,df,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ni(f,f.charAt(0)=="/"?HT:jT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ni(f,WT)),a.join("")};function Vn(a){return new Hr(a)}function ta(a,h,f){a.j=f?Oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function na(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hf(a,h,f){h instanceof Di?(a.i=h,KT(a.i,a.h)):(f||(h=Ni(h,qT)),a.i=new Di(h,a.h))}function Be(a,h,f){a.i.set(h,f)}function ra(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,BT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function BT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var df=/[#\/\?@]/g,jT=/[#\?:]/g,HT=/[#\?]/g,qT=/[#\?@]/g,WT=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&UT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Di.prototype,t.add=function(a,h){ar(this),this.i=null,a=ws(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ff(a,h){ar(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function pf(a,h){return ar(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const N=a[g];for(let V=0;V<N.length;V++)f.push(h[g])}return f},t.V=function(a){ar(this);let h=[];if(typeof a=="string")pf(this,a)&&(h=h.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return ar(this),this.i=null,a=ws(this,a),pf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mf(a,h,f){ff(a,h),0<f.length&&(a.i=null,a.g.set(ws(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var N=V;G[g]!==""&&(N+="="+encodeURIComponent(String(G[g]))),a.push(N)}}return this.i=a.join("&")};function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function KT(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(ff(this,g),mf(this,N,f))},a)),a.j=h}function zT(a,h){const f=new Ci;if(c.Image){const g=new Image;g.onload=_(cr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(cr,f,"TestLoadImage: error",!1,h,g),g.onabort=_(cr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(cr,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function GT(a,h){const f=new Ci,g=new AbortController,N=setTimeout(()=>{g.abort(),cr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?cr(f,"TestPingServer: ok",!0,h):cr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),cr(f,"TestPingServer: error",!1,h)})}function cr(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function QT(){this.g=new rn}function YT(a,h,f){const g=f||"";try{lf(a,function(N,V){let G=N;u(N)&&(G=vs(N)),h.push(g+V+"="+encodeURIComponent(G))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function sa(a){this.l=a.Ub||null,this.j=a.eb||!1}S(sa,Es),sa.prototype.g=function(){return new ia(this.l,this.j)},sa.prototype.i=function(a){return function(){return a}}({});function ia(a,h){te.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ia,te),t=ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ki(this):Li(this),this.readyState==3&&gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ki(this))},t.Qa=function(a){this.g&&(this.response=a,ki(this))},t.ga=function(){this.g&&ki(this)};function ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Li(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _f(a){let h="";return ee(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function vl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_f(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Be(a,h,f))}function Ke(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ke,te);var XT=/^https?$/i,JT=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dl.g(),this.v=this.o?Wd(this.o):Wd(dl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){yf(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(JT,h,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){yf(this,V)}};function yf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vf(a),oa(a)}function vf(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ef(this):this.bb())},t.bb=function(){Ef(this)};function Ef(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)Se(a.Ea,0,a);else if(ae(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var N=String(a.D).match(uf)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),g=!XT.test(N?N.toLowerCase():"")}f=g}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var V=2<Mn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",vf(a)}}finally{oa(a)}}}}function oa(a,h){if(a.g){Tf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ae(a,"ready");try{f.onreadystatechange=g}catch{}}}function Tf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xt(h)}};function wf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZT(a){const h={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(D(a[g]))continue;var f=I(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[N]||[];h[N]=V,V.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function bf(a){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xi("baseRetryDelayMs",5e3,a),this.cb=xi("retryDelaySeedMs",1e4,a),this.Wa=xi("forwardChannelMaxRetries",2,a),this.wa=xi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rf(a&&a.concurrentRequestLimit),this.Da=new QT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bf.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Vt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Df(this,null,this.W),ca(this)};function El(a){if(Af(a),a.G==3){var h=a.U++,f=Vn(a.I);if(Be(f,"SID",a.K),Be(f,"RID",h),Be(f,"TYPE","terminate"),Vi(a,f),h=new or(a,a.j,h),h.L=2,h.v=ra(Vn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=kf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ea(h)}Nf(a)}function aa(a){a.g&&(wl(a),a.g.cancel(),a.g=null)}function Af(a){aa(a),a.u&&(c.clearTimeout(a.u),a.u=null),la(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ca(a){if(!sf(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||yt(),_e||(he(),_e=!0),Qe.add(h,a),a.B=0}}function ew(a,h){return of(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Si(m(a.Ga,a,h),Of(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new or(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Rf(this,N,h),f=Vn(this.I),Be(f,"RID",a),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),Vi(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(_f(V)))+"&"+h:this.m&&vl(f,this.m,V)),yl(this.h,N),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",h),Be(f,"SID","null"),N.T=!0,pl(N,f,null)):pl(N,f,h),this.G=2}}else this.G==3&&(a?If(this,a):this.i.length==0||sf(this.h)||If(this))};function If(a,h){var f;h?f=h.l:f=a.U++;const g=Vn(a.I);Be(g,"SID",a.K),Be(g,"RID",f),Be(g,"AID",a.T),Vi(a,g),a.m&&a.o&&vl(g,a.m,a.o),f=new or(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Rf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yl(a.h,f),pl(f,g,h)}function Vi(a,h){a.H&&ee(a.H,function(f,g){Be(h,g,f)}),a.l&&lf({},function(f,g){Be(h,g,f)})}function Rf(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=N[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Me=!0;for(let ht=0;ht<f;ht++){let Ce=N[ht].g;const wt=N[ht].map;if(Ce-=V,0>Ce)V=Math.max(0,N[ht].g-100),Me=!1;else try{YT(wt,G,"req"+Ce+"_")}catch{g&&g(wt)}}if(Me){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Sf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||yt(),_e||(he(),_e=!0),Qe.add(h,a),a.v=0}}function Tl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Si(m(a.Fa,a),Of(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Si(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),aa(this),Cf(this))};function wl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Cf(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vn(a.qa);Be(h,"RID","rpc"),Be(h,"SID",a.K),Be(h,"AID",a.T),Be(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(h,"TO",a.ja),Be(h,"TYPE","xmlhttp"),Vi(a,h),a.m&&a.o&&vl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ra(Vn(h)),f.m=null,f.P=!0,ef(f,a)}t.Za=function(){this.C!=null&&(this.C=null,aa(this),Tl(this),Vt(19))};function la(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Pf(a,h){var f=null;if(a.g==h){la(a),wl(a),a.g=null;var g=2}else if(_l(a.h,h))f=h.D,af(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=Xo(),ae(g,new Yd(g,f)),ca(a)}else Sf(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&ew(a,h)||g==2&&Tl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function Of(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function qr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Hr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ta(g,"https"),ra(g),N?zT(g.toString(),f):GT(g.toString(),f)}else Vt(2);a.G=0,a.l&&a.l.sa(h),Nf(a),Af(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Nf(a){if(a.G=0,a.ka=[],a.l){const h=cf(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Df(a,h,f){var g=f instanceof Hr?Vn(f):new Hr(f);if(g.g!="")h&&(g.g=h+"."+g.g),na(g,g.s);else{var N=c.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var V=new Hr(null);g&&ta(V,g),h&&(V.g=h),N&&na(V,N),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&Be(g,f,h),Be(g,"VER",a.la),Vi(a,g),g}function kf(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new sa({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lf(){}t=Lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ua(){}ua.prototype.g=function(a,h){return new Kt(a,h)};function Kt(a,h){te.call(this),this.g=new bf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!D(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bs(this)}S(Kt,te),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){El(this.g)},Kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=vs(a),a=f);h.i.push(new MT(h.Ya++,a)),h.G==3&&ca(h)},Kt.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Kt.aa.N.call(this)};function xf(a){ul.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(xf,ul);function Vf(){hl.call(this),this.status=1}S(Vf,hl);function bs(a){this.g=a}S(bs,Lf),bs.prototype.ua=function(){ae(this.g,"a")},bs.prototype.ta=function(a){ae(this.g,new xf(a))},bs.prototype.sa=function(a){ae(this.g,new Vf)},bs.prototype.ra=function(){ae(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Jv=function(){return new ua},Xv=function(){return Xo()},Yv=Br,Wu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jo.NO_ERROR=0,Jo.TIMEOUT=8,Jo.HTTP_ERROR=6,Ba=Jo,Xd.COMPLETE="complete",Qv=Xd,Kd.EventType=Ii,Ii.OPEN="a",Ii.CLOSE="b",Ii.ERROR="c",Ii.MESSAGE="d",te.prototype.listen=te.prototype.K,Gi=Kd,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Gv=Ke}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});const qm="@firebase/firestore";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let Ti="10.14.0";/**
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
 */const cs=new Rh("@firebase/firestore");function Hi(){return cs.logLevel}function re(t,...e){if(cs.logLevel<=Te.DEBUG){const n=e.map(id);cs.debug(`Firestore (${Ti}): ${t}`,...n)}}function er(t,...e){if(cs.logLevel<=Te.ERROR){const n=e.map(id);cs.error(`Firestore (${Ti}): ${t}`,...n)}}function ai(t,...e){if(cs.logLevel<=Te.WARN){const n=e.map(id);cs.warn(`Firestore (${Ti}): ${t}`,...n)}}function id(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+t;throw er(e),new Error(e)}function xe(t,e){t||de()}function me(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class N1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class D1{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new Zv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new St(e)}}class k1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class L1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new k1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new x1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function M1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class eE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=M1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new it(0,0))}static max(){return new pe(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Ro{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const $1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Ro{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return $1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(je.fromString(e))}static fromName(e){return new le(je.fromString(e).popFirst(5))}static empty(){return new le(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new je(e.slice()))}}function F1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Or(s,le.empty(),e)}function U1(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(pe.min(),le.empty(),-1)}static max(){return new Or(pe.max(),le.empty(),-1)}}function B1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wo(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==j1)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function q1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}od.oe=-1;function Qc(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function W1(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Km(this.data.getIterator())}getIteratorFrom(e){return new Km(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Km{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new mt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class nE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nE("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const K1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=K1.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cd(t){const e=t.mapValue.fields.__previous_value__;return ad(e)?cd(e):e}function So(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class z1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Co&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ad(t)?4:Q1(t)?9007199254740991:G1(t)?10:11:de()}function kn(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),c=Nr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ls(s.bytesValue).isEqual(ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),c=Ye(i.doubleValue);return o===c?hc(o)===hc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wm(o)!==Wm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kn(o[l],c[l])))return!1;return!0}(t,e);default:return de()}}function Po(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return zm(t.timestampValue,e.timestampValue);case 4:return zm(So(t),So(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ls(i),l=ls(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Pe(c[u],l[u]);if(d!==0)return d}return Pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Pe(Ye(i.latitude),Ye(o.latitude));return c!==0?c:Pe(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Gm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,O=Pe(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Gm(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ia.mapValue&&o===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Pe(l[p],d[p]);if(m!==0)return m;const _=li(c[l[p]],u[d[p]]);if(_!==0)return _}return Pe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function zm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Nr(t),r=Nr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Gm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function ui(t){return Ku(t)}function Ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ku(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ku(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function zu(t){return!!t&&"integerValue"in t}function ld(t){return!!t&&"arrayValue"in t}function Qm(t){return!!t&&"nullValue"in t}function Ym(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function G1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Q1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=lo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(lo(this.value))}}function rE(t){const e=[];return _s(t.fields,(n,r)=>{const s=new pt([n]);if(ja(r)){const i=rE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class Ot{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ot(e,0,pe.min(),pe.min(),pe.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ot(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,pe.min(),pe.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,pe.min(),pe.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dc{constructor(e,n){this.position=e,this.inclusive=n}}function Xm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Y1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sE{}class st extends sE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new J1(e,n,r):n==="array-contains"?new tk(e,r):n==="in"?new nk(e,r):n==="not-in"?new rk(e,r):n==="array-contains-any"?new sk(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Z1(e,r):new ek(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends sE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ln(e,n)}matches(e){return iE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iE(t){return t.op==="and"}function oE(t){return X1(t)&&iE(t)}function X1(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Gu(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+ui(t.value);if(oE(t))return t.filters.map(e=>Gu(e)).join(",");{const e=t.filters.map(n=>Gu(n)).join(",");return`${t.op}(${e})`}}function aE(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)}(t,e):t instanceof Ln?function(r,s){return s instanceof Ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&aE(o,s.filters[c]),!0):!1}(t,e):void de()}function cE(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${ui(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(cE).join(" ,")+"}"}(t):"Filter"}class J1 extends st{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class Z1 extends st{constructor(e,n){super(e,"in",n),this.keys=lE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ek extends st{constructor(e,n){super(e,"not-in",n),this.keys=lE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class tk extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ld(n)&&Po(n.arrayValue,this.value)}}class nk extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class rk extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class sk extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
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
 */class ik{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Zm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ik(t,e,n,r,s,i,o)}function ud(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.ue=n}return e.ue}function hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Y1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!aE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jm(t.startAt,e.startAt)&&Jm(t.endAt,e.endAt)}function Qu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Yc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ok(t,e,n,r,s,i,o,c){return new Yc(t,e,n,r,s,i,o,c)}function dd(t){return new Yc(t)}function eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ak(t){return t.collectionGroup!==null}function uo(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new mt(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new fc(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new fc(pt.keyField(),r))}return e.ce}function Pn(t){const e=me(t);return e.le||(e.le=ck(e,uo(t))),e.le}function ck(t,e){if(t.limitType==="F")return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fc(s.field,i)});const n=t.endAt?new dc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dc(t.startAt.position,t.startAt.inclusive):null;return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yu(t,e,n){return new Yc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xc(t,e){return hd(Pn(t),Pn(e))&&t.limitType===e.limitType}function uE(t){return`${ud(Pn(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>cE(s)).join(", ")}]`),Qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ui(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Jc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Xm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,uo(r),s)||r.endAt&&!function(o,c,l){const u=Xm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,uo(r),s))}(t,e)}function lk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hE(t){return(e,n)=>{let r=!1;for(const s of uo(t)){const i=uk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uk(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?li(l,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tE(this.inner)}size(){return this.innerSize}}/**
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
 */const hk=new We(le.comparator);function tr(){return hk}const dE=new We(le.comparator);function Qi(...t){let e=dE;for(const n of t)e=e.insert(n.key,n);return e}function fE(t){let e=dE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return ho()}function pE(){return ho()}function ho(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const dk=new We(le.comparator),fk=new mt(le.comparator);function Ee(...t){let e=fk;for(const n of t)e=e.add(n);return e}const pk=new mt(Pe);function mk(){return pk}/**
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
 */function fd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function mE(t){return{integerValue:""+t}}function gk(t,e){return W1(e)?mE(e):fd(t,e)}/**
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
 */class Zc{constructor(){this._=void 0}}function _k(t,e,n){return t instanceof pc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ad(i)&&(i=cd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Oo?_E(t,e):t instanceof No?yE(t,e):function(s,i){const o=gE(s,i),c=tg(o)+tg(s.Pe);return zu(o)&&zu(s.Pe)?mE(c):fd(s.serializer,c)}(t,e)}function yk(t,e,n){return t instanceof Oo?_E(t,e):t instanceof No?yE(t,e):n}function gE(t,e){return t instanceof mc?function(r){return zu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pc extends Zc{}class Oo extends Zc{constructor(e){super(),this.elements=e}}function _E(t,e){const n=vE(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Zc{constructor(e){super(),this.elements=e}}function yE(t,e){let n=vE(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class mc extends Zc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tg(t){return Ye(t.integerValue||t.doubleValue)}function vE(t){return ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oo&&s instanceof Oo||r instanceof No&&s instanceof No?ci(r.elements,s.elements,kn):r instanceof mc&&s instanceof mc?kn(r.Pe,s.Pe):r instanceof pc&&s instanceof pc}(t.transform,e.transform)}class Ek{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class el{}function EE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pd(t.key,mn.none()):new zo(t.key,t.data,mn.none());{const n=t.data,r=qt.empty();let s=new mt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ur(t.key,r,new Xt(s.toArray()),mn.none())}}function Tk(t,e,n){t instanceof zo?function(s,i,o){const c=s.value.clone(),l=rg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,i,o){if(!Ha(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=rg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(TE(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof zo?function(i,o,c,l){if(!Ha(i.precondition,o))return c;const u=i.value.clone(),d=sg(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,o,c,l){if(!Ha(i.precondition,o))return c;const u=sg(i.fieldTransforms,l,o),d=o.data;return d.setAll(TE(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function wk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gE(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function ng(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ci(r,s,(i,o)=>vk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends el{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends el{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function TE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rg(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,yk(o,c,n[s]))}return r}function sg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_k(i,o,e))}return r}class pd extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bk extends el{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ak{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=EE(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,r)=>ng(n,r))&&ci(this.baseMutations,e.baseMutations,(n,r)=>ng(n,r))}}class md{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return dk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new md(e,n,r,s)}}/**
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
 */class Ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Rk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ae;function Sk(t){switch(t){default:return de();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function wE(t){if(t===void 0)return er("GRPC error has no .code"),B.UNKNOWN;switch(t){case et.OK:return B.OK;case et.CANCELLED:return B.CANCELLED;case et.UNKNOWN:return B.UNKNOWN;case et.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case et.INTERNAL:return B.INTERNAL;case et.UNAVAILABLE:return B.UNAVAILABLE;case et.UNAUTHENTICATED:return B.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case et.NOT_FOUND:return B.NOT_FOUND;case et.ALREADY_EXISTS:return B.ALREADY_EXISTS;case et.PERMISSION_DENIED:return B.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case et.ABORTED:return B.ABORTED;case et.OUT_OF_RANGE:return B.OUT_OF_RANGE;case et.UNIMPLEMENTED:return B.UNIMPLEMENTED;case et.DATA_LOSS:return B.DATA_LOSS;default:return de()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ck(){return new TextEncoder}/**
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
 */const Pk=new es([4294967295,4294967295],0);function ig(t){const e=Ck().encode(t),n=new zv;return n.update(e),new Uint8Array(n.digest())}function og(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class gd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yi(`Invalid padding: ${n}`);if(r<0)throw new Yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(Pk)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ig(e),[r,s]=og(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gd(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=ig(e),[r,s]=og(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tl(pe.min(),s,new We(Pe),tr(),Ee())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,Ee(),Ee(),Ee())}}/**
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
 */class qa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class bE{constructor(e,n){this.targetId=e,this.me=n}}class AE{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ag{constructor(){this.fe=0,this.ge=lg(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new Go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=lg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ok{constructor(e){this.Le=e,this.Be=new Map,this.ke=tr(),this.qe=cg(),this.Qe=new We(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new le(i.path);this.Ue(n,o,Ot.newNoDocument(o,pe.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ls(r).toUint8Array()}catch(l){if(l instanceof nE)return ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new gd(o,s,i)}catch(l){return ai(l instanceof Yi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Qu(c.target)){const l=new le(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ot.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new tl(e,n,this.Qe,this.ke,r);return this.ke=tr(),this.qe=cg(),this.Qe=new We(Pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ag,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ag),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function cg(){return new We(le.comparator)}function lg(){return new We(le.comparator)}const Nk={asc:"ASCENDING",desc:"DESCENDING"},Dk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kk={and:"AND",or:"OR"};class Lk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xu(t,e){return t.useProto3Json||Qc(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xk(t,e){return gc(t,e.toTimestamp())}function On(t){return xe(!!t),pe.fromTimestamp(function(n){const r=Nr(n);return new it(r.seconds,r.nanos)}(t))}function _d(t,e){return Ju(t,e).canonicalString()}function Ju(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function RE(t){const e=je.fromString(t);return xe(NE(e)),e}function Zu(t,e){return _d(t.databaseId,e.path)}function au(t,e){const n=RE(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(CE(n))}function SE(t,e){return _d(t.databaseId,e)}function Vk(t){const e=RE(t);return e.length===4?je.emptyPath():CE(e)}function eh(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CE(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ug(t,e,n){return{name:Zu(t,e),fields:n.value.mapValue.fields}}function Mk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(xe(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(xe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?B.UNKNOWN:wE(u.code);return new ie(d,u.message||"")}(o);n=new AE(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=au(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):pe.min(),c=new qt({mapValue:{fields:r.document.fields}}),l=Ot.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new qa(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=au(t,r.document),i=r.readTime?On(r.readTime):pe.min(),o=Ot.newNoDocument(s,i),c=r.removedTargetIds||[];n=new qa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=au(t,r.document),i=r.removedTargetIds||[];n=new qa([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Rk(s,i),c=r.targetId;n=new bE(c,o)}}return n}function $k(t,e){let n;if(e instanceof zo)n={update:ug(t,e.key,e.value)};else if(e instanceof pd)n={delete:Zu(t,e.key)};else if(e instanceof Ur)n={update:ug(t,e.key,e.data),updateMask:zk(e.fieldMask)};else{if(!(e instanceof bk))return de();n={verify:Zu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function Fk(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(pe.min())&&(o=On(i)),new Ek(o,s.transformResults||[])}(n,e))):[]}function Uk(t,e){return{documents:[SE(t,e.path)]}}function Bk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SE(t,s);const i=function(u){if(u.length!==0)return OE(Ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:xs(m.field),direction:qk(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Xu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function jk(t){let e=Vk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=PE(p);return m instanceof Ln&&oE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new fc(Vs(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Qc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new dc(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new dc(_,m)}(n.endAt)),ok(e,s,o,i,c,"F",l,u)}function Hk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vs(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vs(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return st.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>PE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function qk(t){return Nk[t]}function Wk(t){return Dk[t]}function Kk(t){return kk[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Vs(t){return pt.fromServerFormat(t.fieldPath)}function OE(t){return t instanceof st?function(n){if(n.op==="=="){if(Ym(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NAN"}};if(Qm(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ym(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NAN"}};if(Qm(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(n.field),op:Wk(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(s=>OE(s));return r.length===1?r[0]:{compositeFilter:{op:Kk(n.op),filters:r}}}(t):de()}function zk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Er{constructor(e,n,r,s,i=pe.min(),o=pe.min(),c=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gk{constructor(e){this.ct=e}}function Qk(t){const e=jk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yu(e,e.limit,"L"):e}/**
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
 */class Yk{constructor(){this.un=new Xk}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Or.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class Xk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(je.comparator)).toArray()}}/**
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
 */class hi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new hi(0)}static kn(){return new hi(-1)}}/**
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
 */class Jk{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Zk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&fo(r.mutation,s,Xt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=tr();const o=ho(),c=function(){return ho()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ur)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),fo(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new Zk(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ho();let s=new We((o,c)=>o-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Xt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=pE();d.forEach(m=>{if(!i.has(m)){const _=EE(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Xr());let c=-1,l=i;return o.next(u=>H.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(d=>({batchId:c,changes:fE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,i).next(c=>H.forEach(c,l=>{const u=function(p,m){return new Yc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ot.newInvalidDocument(d)))});let c=Qi();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&fo(d.mutation,u,Xt.empty(),it.now()),Jc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class tL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Qk(s.bundledQuery),readTime:On(s.readTime)}}(n)),H.resolve()}}/**
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
 */class nL{constructor(){this.overlays=new We(le.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Xr(),i=n.length+1,o=new le(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Xr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return H.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ik(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class rL{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class yd{constructor(){this.Tr=new mt(at.Er),this.dr=new mt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new at(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new le(new je([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new le(new je([])),r=new at(n,e),s=new at(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return le.comparator(e.key,n.key)||Pe(e.wr,n.wr)}static Ar(e,n){return Pe(e.wr,n.wr)||le.comparator(e.key,n.key)}}/**
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
 */class sL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(at.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ak(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new at(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Pe);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new at(new le(i),0);let c=new mt(Pe);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),H.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new at(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iL{constructor(e){this.Mr=e,this.docs=function(){return new We(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ot.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,c=new le(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||B1(U1(d),r)<=0||(s.has(d.key)||Jc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oL(this)}getSize(e){return H.resolve(this.size)}}class oL extends Jk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class aL{constructor(e){this.persistence=e,this.Nr=new wi(n=>ud(n),hd),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yd,this.targetCount=0,this.kr=hi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
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
 */class cL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new od(0),this.Kr=!1,this.Kr=!0,this.$r=new rL,this.referenceDelegate=e(this),this.Ur=new aL(this),this.indexManager=new Yk,this.remoteDocumentCache=function(s){return new iL(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Gk(n),this.Gr=new tL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new lL(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lL extends H1{constructor(e){super(),this.currentSequenceNumber=e}}class vd{constructor(e){this.persistence=e,this.Jr=new yd,this.Yr=null}static Zr(e){return new vd(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=le.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ed{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ed(e,n.fromCache,r,s)}}/**
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
 */class uL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xA()?8:q1(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uL;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Hi()<=Te.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(Hi()<=Te.DEBUG&&re("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Hi()<=Te.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):H.resolve())}Yi(e,n){if(eg(n))return H.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yu(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,Yu(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return eg(n)||s.isEqual(pe.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(Hi()<=Te.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ls(n)),this.rs(e,o,n,F1(s,-1)).next(c=>c))})}ts(e,n){let r=new mt(hE(e));return n.forEach((s,i)=>{Jc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Hi()<=Te.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,Or.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class dL{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Pe),this._s=new wi(i=>ud(i),hd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function fL(t,e,n,r){return new dL(t,e,n,r)}async function DE(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function pL(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let _=H.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(l,S)).next(O=>{const R=u.docVersions.get(S);xe(R!==null),O.version.compareTo(R)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kE(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mL(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(gt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(O,R,P){return O.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(m,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=tr(),u=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(gL(i,o,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(pe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return H.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function gL(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):re("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function _L(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yL(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function th(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ko(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function hg(t,e,n){const r=me(t);let s=pe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=me(l),m=p._s.get(d);return m!==void 0?H.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,Pn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ee())).next(c=>(vL(r,lk(e),c),{documents:c,Ts:i})))}function vL(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class dg{constructor(){this.activeTargetIds=mk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EL{constructor(){this.so=new dg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TL{_o(e){}shutdown(){}}/**
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
 */class fg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ra=null;function cu(){return Ra===null?Ra=function(){return 268435456+Math.round(2147483648*Math.random())}():Ra++,"0x"+Ra.toString(16)}/**
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
 */const wL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const At="WebChannelConnection";class AL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=cu(),l=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw ai("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=wL[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=cu();return new Promise((o,c)=>{const l=new Gv;l.setWithCredentials(!0),l.listenOnce(Qv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ba.NO_ERROR:const d=l.getResponseJson();re(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ba.TIMEOUT:re(At,`RPC '${e}' ${i} timed out`),c(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const p=l.getStatus();if(re(At,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(R){const P=R.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(P)>=0?P:B.UNKNOWN}(_.status);c(new ie(S,_.message))}else c(new ie(B.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ie(B.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{re(At,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(At,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=cu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jv(),c=Xv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");re(At,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const S=new bL({Io:R=>{_?re(At,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||(re(At,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),re(At,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},To:()=>p.close()}),O=(R,P,D)=>{R.listen(P,M=>{try{D(M)}catch(x){setTimeout(()=>{throw x},0)}})};return O(p,Gi.EventType.OPEN,()=>{_||(re(At,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),O(p,Gi.EventType.CLOSE,()=>{_||(_=!0,re(At,`RPC '${e}' stream ${s} transport closed`),S.So())}),O(p,Gi.EventType.ERROR,R=>{_||(_=!0,ai(At,`RPC '${e}' stream ${s} transport errored:`,R),S.So(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),O(p,Gi.EventType.MESSAGE,R=>{var P;if(!_){const D=R.data[0];xe(!!D);const M=D,x=M.error||((P=M[0])===null||P===void 0?void 0:P.error);if(x){re(At,`RPC '${e}' stream ${s} received error:`,x);const Z=x.status;let ee=function(E){const A=et[E];if(A!==void 0)return wE(A)}(Z),b=x.message;ee===void 0&&(ee=B.INTERNAL,b="Unknown error status: "+Z+" with message "+x.message),_=!0,S.So(new ie(ee,b)),p.close()}else re(At,`RPC '${e}' stream ${s} received:`,D),S.bo(D)}}),O(c,Yv.STAT_EVENT,R=>{R.stat===Wu.PROXY?re(At,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Wu.NOPROXY&&re(At,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function lu(){return typeof document<"u"?document:null}/**
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
 */function nl(t){return new Lk(t,!0)}/**
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
 */class LE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xE{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new LE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ie(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IL extends xE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Mk(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?On(o.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=eh(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Qu(l)?{documents:Uk(i,l)}:{query:Bk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=IE(i,o.resumeToken);const u=Xu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=gc(i,o.snapshotVersion.toTimestamp());const u=Xu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Hk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=eh(this.serializer),n.removeTarget=e,this.a_(n)}}class RL extends xE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Fk(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=eh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$k(this.serializer,r))};this.a_(n)}}/**
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
 */class SL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ju(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(B.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ju(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(B.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(er(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class PL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ys(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=me(l);u.L_.add(4),await Qo(u),u.q_.set("Unknown"),u.L_.delete(4),await rl(u)}(this))})}),this.q_=new CL(r,s)}}async function rl(t){if(ys(t))for(const e of t.B_)await e(!0)}async function Qo(t){for(const e of t.B_)await e(!1)}function VE(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ad(n)?bd(n):bi(n).r_()&&wd(n,e))}function Td(t,e){const n=me(t),r=bi(n);n.N_.delete(e),r.r_()&&ME(n,e),n.N_.size===0&&(r.r_()?r.o_():ys(n)&&n.q_.set("Unknown"))}function wd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bi(t).A_(e)}function ME(t,e){t.Q_.xe(e),bi(t).R_(e)}function bd(t){t.Q_=new Ok({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),bi(t).start(),t.q_.v_()}function Ad(t){return ys(t)&&!bi(t).n_()&&t.N_.size>0}function ys(t){return me(t).L_.size===0}function $E(t){t.Q_=void 0}async function OL(t){t.q_.set("Online")}async function NL(t){t.N_.forEach((e,n)=>{wd(t,e)})}async function DL(t,e){$E(t),Ad(t)?(t.q_.M_(e),bd(t)):t.q_.set("Unknown")}async function kL(t,e,n){if(t.q_.set("Online"),e instanceof AE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof qa?t.Q_.Ke(e):e instanceof bE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await kE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),ME(i,l);const p=new Er(d.target,l,u,d.sequenceNumber);wd(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!Ko(e))throw e;t.L_.add(1),await Qo(t),t.q_.set("Offline"),n||(n=()=>kE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await rl(t)})}function FE(t,e){return e().catch(n=>_c(t,n,e))}async function sl(t){const e=me(t),n=Dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;LL(e);)try{const s=await _L(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,xL(e,s)}catch(s){await _c(e,s)}UE(e)&&BE(e)}function LL(t){return ys(t)&&t.O_.length<10}function xL(t,e){t.O_.push(e);const n=Dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function UE(t){return ys(t)&&!Dr(t).n_()&&t.O_.length>0}function BE(t){Dr(t).start()}async function VL(t){Dr(t).p_()}async function ML(t){const e=Dr(t);for(const n of t.O_)e.m_(n.mutations)}async function $L(t,e,n){const r=t.O_.shift(),s=md.from(r,e,n);await FE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sl(t)}async function FL(t,e){e&&Dr(t).V_&&await async function(r,s){if(function(o){return Sk(o)&&o!==B.ABORTED}(s.code)){const i=r.O_.shift();Dr(r).s_(),await FE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sl(r)}}(t,e),UE(t)&&BE(t)}async function pg(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.L_.add(3),await Qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await rl(n)}async function UL(t,e){const n=me(t);e?(n.L_.delete(2),await rl(n)):e||(n.L_.add(2),await Qo(n),n.q_.set("Unknown"))}function bi(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new IL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:OL.bind(null,t),Ro:NL.bind(null,t),mo:DL.bind(null,t),d_:kL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ad(t)?bd(t):t.q_.set("Unknown")):(await t.K_.stop(),$E(t))})),t.K_}function Dr(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new RL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VL.bind(null,t),mo:FL.bind(null,t),f_:ML.bind(null,t),g_:$L.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sl(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Id{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Id(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rd(t,e){if(er("AsyncQueue",`${e}: ${t}`),Ko(t))return new ie(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Qi(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class mg{constructor(){this.W_=new We(le.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class di{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new di(e,n,Qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class BL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jL{constructor(){this.queries=gg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=gg(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new ie(B.ABORTED,"Firestore shutting down"))}}function gg(){return new wi(t=>uE(t),Xc)}async function jE(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new BL,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Rd(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Sd(n)}async function HE(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HL(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Sd(n)}function qL(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Sd(t){t.Y_.forEach(e=>{e.next()})}var nh,_g;(_g=nh||(nh={})).ea="default",_g.Cache="cache";class qE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nh.Cache}}/**
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
 */class WE{constructor(e){this.key=e}}class KE{constructor(e){this.key=e}}class WL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=hE(e),this.Ra=new Qs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new mg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Jc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?S!==O&&(r.track({type:3,doc:_}),R=!0):this.ga(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||u)&&(c=!0)),R&&(_?(o=o.add(_),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,S){const O=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return O(_)-O(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new di(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new KE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new WE(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return di.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class KL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zL{constructor(e){this.key=e,this.va=!1}}class GL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wi(c=>uE(c),Xc),this.Ma=new Map,this.xa=new Set,this.Oa=new We(le.comparator),this.Na=new Map,this.La=new yd,this.Ba={},this.ka=new Map,this.qa=hi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QL(t,e,n=!0){const r=JE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await zE(r,e,n,!0),s}async function YL(t,e){const n=JE(t);await zE(n,e,!0,!1)}async function zE(t,e,n,r){const s=await yL(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await XL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&VE(t.remoteStore,s),c}async function XL(t,e,n,r,s){t.Ka=(p,m,_)=>async function(O,R,P,D){let M=R.view.ma(P);M.ns&&(M=await hg(O.localStore,R.query,!1).then(({documents:b})=>R.view.ma(b,M)));const x=D&&D.targetChanges.get(R.targetId),Z=D&&D.targetMismatches.get(R.targetId)!=null,ee=R.view.applyChanges(M,O.isPrimaryClient,x,Z);return vg(O,R.targetId,ee.wa),ee.snapshot}(t,p,m,_);const i=await hg(t.localStore,e,!0),o=new WL(e,i.Ts),c=o.ma(i.documents),l=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);vg(t,n,u.wa);const d=new KL(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function JL(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Xc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await th(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Td(r.remoteStore,s.targetId),rh(r,s.targetId)}).catch(Wo)):(rh(r,s.targetId),await th(r.localStore,s.targetId,!0))}async function ZL(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Td(n.remoteStore,r.targetId))}async function ex(t,e,n){const r=ax(t);try{const s=await function(o,c){const l=me(o),u=it.now(),d=c.reduce((_,S)=>_.add(S.key),Ee());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=tr(),O=Ee();return l.cs.getEntries(_,d).next(R=>{S=R,S.forEach((P,D)=>{D.isValidDocument()||(O=O.add(P))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(R=>{p=R;const P=[];for(const D of c){const M=wk(D,p.get(D.key).overlayedDocument);M!=null&&P.push(new Ur(D.key,M,rE(M.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,P,c)}).next(R=>{m=R;const P=R.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(_,R.batchId,P)})}).then(()=>({batchId:m.batchId,changes:fE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new We(Pe)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yo(r,s.changes),await sl(r.remoteStore)}catch(s){const i=Rd(s,"Failed to persist write");n.reject(i)}}async function GE(t,e){const n=me(t);try{const r=await mL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?xe(o.va):s.removedDocuments.size>0&&(xe(o.va),o.va=!1))}),await Yo(n,r,e)}catch(r){await Wo(r)}}function yg(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=me(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&Sd(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tx(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(le.comparator);o=o.insert(i,Ot.newNoDocument(i,pe.min()));const c=Ee().add(i),l=new tl(pe.min(),new Map,new We(Pe),o,c);await GE(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Cd(r)}else await th(r.localStore,e,!1).then(()=>rh(r,e,n)).catch(Wo)}async function nx(t,e){const n=me(t),r=e.batch.batchId;try{const s=await pL(n.localStore,e);YE(n,r,null),QE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await Wo(s)}}async function rx(t,e,n){const r=me(t);try{const s=await function(o,c){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(xe(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);YE(r,e,n),QE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await Wo(s)}}function QE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function YE(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||XE(t,r)})}function XE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Td(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Cd(t))}function vg(t,e,n){for(const r of n)r instanceof WE?(t.La.addReference(r.key,e),sx(t,r)):r instanceof KE?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||XE(t,r.key)):de()}function sx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),Cd(t))}function Cd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new le(je.fromString(e)),r=t.qa.next();t.Na.set(r,new zL(n)),t.Oa=t.Oa.insert(n,r),VE(t.remoteStore,new Er(Pn(dd(n.path)),r,"TargetPurposeLimboResolution",od.oe))}}async function Yo(t,e,n){const r=me(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ed.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const d=me(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>H.forEach(u,m=>H.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>H.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ko(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),S=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,O)}}}(r.localStore,i))}async function ix(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await DE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new ie(B.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.hs)}}function ox(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function JE(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ox.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tx.bind(null,e),e.Ca.d_=HL.bind(null,e.eventManager),e.Ca.$a=qL.bind(null,e.eventManager),e}function ax(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rx.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return fL(this.persistence,new hL,e.initialUser,this.serializer)}Ga(e){return new cL(vd.Zr,this.serializer)}Wa(e){return new EL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ix.bind(null,this.syncEngine),await UL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jL}()}createDatastore(e){const n=nl(e.databaseInfo.databaseId),r=function(i){return new AL(i)}(e.databaseInfo);return function(i,o,c,l){return new SL(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new PL(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>yg(this.syncEngine,n,0),function(){return fg.D()?new fg:new TL}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new GL(s,i,o,c,l,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Qo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sh.provider={build:()=>new sh};/**
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
 */class ZE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cx{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=eE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await DE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Eg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lx(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pg(e.remoteStore,s)),t._onlineComponents=e}async function lx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new yc)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await uu(t,new yc);return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Eg(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Eg(t,new sh))),t._onlineComponents}function ux(t){return eT(t).then(e=>e.syncEngine)}async function tT(t){const e=await eT(t),n=e.eventManager;return n.onListen=QL.bind(null,e.syncEngine),n.onUnlisten=JL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZL.bind(null,e.syncEngine),n}function hx(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new ZE({next:m=>{d.Za(),o.enqueueAndForget(()=>HE(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new ie(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new ie(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new qE(dd(c.path),d,{includeMetadataChanges:!0,_a:!0});return jE(i,p)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}function dx(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new ZE({next:m=>{d.Za(),o.enqueueAndForget(()=>HE(i,p)),m.fromCache&&l.source==="server"?u.reject(new ie(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new qE(c,d,{includeMetadataChanges:!0,_a:!0});return jE(i,p)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Tg=new Map;/**
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
 */function rT(t,e,n){if(!n)throw new ie(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fx(t,e,n,r){if(e===!0&&r===!0)throw new ie(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(!le.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bg(t){if(le.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pd(t);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ag{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class il{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ag({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ag(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O1;switch(r.type){case"firstParty":return new L1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tg.get(n);r&&(re("ComponentProvider","Removing Datastore"),Tg.delete(n),r.terminate())}(this),Promise.resolve()}}function px(t,e,n,r={}){var s;const i=(t=nr(t,il))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=St.MOCK_USER;else{c=Q_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new N1(new Zv(c,l))}}/**
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
 */class ol{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ol(this.firestore,e,this._query)}}class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class Ir extends ol{constructor(e,n,r){super(e,n,dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new le(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function ih(t,e,...n){if(t=Xe(t),rT("collection","path",e),t instanceof il){const r=je.fromString(e,...n);return bg(r),new Ir(t,null,r)}{if(!(t instanceof Zt||t instanceof Ir))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return bg(r),new Ir(t.firestore,null,r)}}function vc(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=eE.newId()),rT("doc","path",e),t instanceof il){const r=je.fromString(e,...n);return wg(r),new Zt(t,null,new le(r))}{if(!(t instanceof Zt||t instanceof Ir))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return wg(r),new Zt(t.firestore,t instanceof Ir?t.converter:null,new le(r))}}/**
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
 */class Ig{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new LE(this,"async_queue_retry"),this.Vu=()=>{const r=lu();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ko(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw er("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Id.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ai extends il{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ig,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ig(e),this._firestoreClient=void 0,await e}}}function mx(t,e){const n=typeof t=="object"?t:Ch(),r=typeof t=="string"?t:"(default)",s=Lc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=K_("firestore");i&&px(s,...i)}return s}function Od(t){if(t._terminated)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gx(t),t._firestoreClient}function gx(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new z1(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new cx(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(gt.fromBase64String(e))}catch(n){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class al{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nd{constructor(e){this._methodName=e}}/**
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
 */class Dd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class kd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const _x=/^__.*__$/;class yx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class sT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ec(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iT(this.Cu)&&_x.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nl(e)}Qu(e,n,r,s=!1){return new Ld({Cu:e,methodName:n,qu:r,path:pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oT(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new vx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ex(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);xd("Data must be an object, but it was:",o,r);const c=aT(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=oh(e,p,n);if(!o.contains(m))throw new ie(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lT(d,m)||d.push(m)}l=new Xt(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new yx(new qt(c),l,u)}class cl extends Nd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cl}}function Tx(t,e,n,r){const s=t.Qu(1,e,n);xd("Data must be an object, but it was:",s,r);const i=[],o=qt.empty();_s(r,(l,u)=>{const d=Vd(e,l,n);u=Xe(u);const p=s.Nu(d);if(u instanceof cl)i.push(d);else{const m=ll(u,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Xt(i);return new sT(o,c,s.fieldTransforms)}function wx(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[oh(e,r,n)],l=[s];if(i.length%2!=0)throw new ie(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(oh(e,i[m])),l.push(i[m+1]);const u=[],d=qt.empty();for(let m=c.length-1;m>=0;--m)if(!lT(u,c[m])){const _=c[m];let S=l[m];S=Xe(S);const O=o.Nu(_);if(S instanceof cl)u.push(_);else{const R=ll(S,O);R!=null&&(u.push(_),d.set(_,R))}}const p=new Xt(u);return new sT(d,p,o.fieldTransforms)}function ll(t,e){if(cT(t=Xe(t)))return xd("Unsupported field value:",e,t),aT(t,e);if(t instanceof Nd)return function(r,s){if(!iT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ll(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:gc(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gc(s.serializer,i)}}if(r instanceof Dd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:IE(s.serializer,r._byteString)};if(r instanceof Zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_d(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kd)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return fd(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Pd(r)}`)}(t,e)}function aT(t,e){const n={};return tE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,s)=>{const i=ll(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Dd||t instanceof fi||t instanceof Zt||t instanceof Nd||t instanceof kd)}function xd(t,e,n){if(!cT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function oh(t,e,n){if((e=Xe(e))instanceof al)return e._internalPath;if(typeof e=="string")return Vd(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const bx=new RegExp("[~\\*/\\[\\]]");function Vd(t,e,n){if(e.search(bx)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new al(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(B.INVALID_ARGUMENT,c+t+l)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ax(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ax extends uT{data(){return super.data()}}function hT(t,e){return typeof e=="string"?Vd(t,e):e instanceof al?e._internalPath:e._delegate._internalPath}/**
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
 */function Ix(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rx{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new kd(i)}convertGeoPoint(e){return new Dd(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);xe(NE(r));const s=new Co(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Sx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dT extends uT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wa extends dT{data(e={}){return super.data(e)}}class Cx{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wa(this._firestore,this._userDataWriter,r.key,r,new Xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Wa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Wa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:Px(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Px(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
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
 */function Ox(t){t=nr(t,Zt);const e=nr(t.firestore,Ai);return hx(Od(e),t._key).then(n=>Lx(e,t,n))}class fT extends Rx{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function pT(t){t=nr(t,ol);const e=nr(t.firestore,Ai),n=Od(e),r=new fT(e);return Ix(t._query),dx(n,t._query).then(s=>new Cx(e,r,t,s))}function Nx(t,e,n,...r){t=nr(t,Zt);const s=nr(t.firestore,Ai),i=oT(s);let o;return o=typeof(e=Xe(e))=="string"||e instanceof al?wx(i,"updateDoc",t._key,e,n,r):Tx(i,"updateDoc",t._key,e),Md(s,[o.toMutation(t._key,mn.exists(!0))])}function Dx(t){return Md(nr(t.firestore,Ai),[new pd(t._key,mn.none())])}function kx(t,e){const n=nr(t.firestore,Ai),r=vc(t),s=Sx(t.converter,e);return Md(n,[Ex(oT(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function Md(t,e){return function(r,s){const i=new Qn;return r.asyncQueue.enqueueAndForget(async()=>ex(await ux(r),s,i)),i.promise}(Od(t),e)}function Lx(t,e,n){const r=n.docs.get(e._key),s=new fT(t);return new dT(t,s,e._key,r,new Xi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ti=s})(fs),ss(new Rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ai(new D1(r.getProvider("auth-internal")),new V1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),An(qm,"4.7.3",e),An(qm,"4.7.3","esm2017")})();/**
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
 */const mT="firebasestorage.googleapis.com",gT="storageBucket",xx=2*60*1e3,Vx=10*60*1e3;/**
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
 */class Ge extends xn{constructor(e,n,r=0){super(hu(e),`Firebase Storage: ${n} (${hu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function hu(t){return"storage/"+t}function $d(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(ze.UNKNOWN,t)}function Mx(t){return new Ge(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $x(t){return new Ge(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(ze.UNAUTHENTICATED,t)}function Ux(){return new Ge(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bx(t){return new Ge(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jx(){return new Ge(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hx(){return new Ge(ze.CANCELED,"User canceled the upload/download.")}function qx(t){return new Ge(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function Wx(t){return new Ge(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Kx(){return new Ge(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gT+"' property when initializing the app?")}function zx(){return new Ge(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Gx(){return new Ge(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Qx(t){return new Ge(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ah(t){return new Ge(ze.INVALID_ARGUMENT,t)}function _T(){return new Ge(ze.APP_DELETED,"The Firebase app was deleted.")}function Yx(t){return new Ge(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function po(t,e){return new Ge(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qi(t){throw new Ge(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw Wx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},O=n===mT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",P=new RegExp(`^https?://${O}/${s}/${R}`,"i"),M=[{regex:c,indices:l,postModify:i},{regex:_,indices:S,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<M.length;x++){const Z=M[x],ee=Z.regex.exec(e);if(ee){const b=ee[Z.indices.bucket];let y=ee[Z.indices.path];y||(y=""),r=new Jt(b,y),Z.postModify(r);break}}if(r==null)throw qx(e);return r}}class Xx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Jx(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...R){u||(u=!0,e.apply(null,R))}function p(R){s=setTimeout(()=>{s=null,t(_,l())},R)}function m(){i&&clearTimeout(i)}function _(R,...P){if(u){m();return}if(R){m(),d.call(null,R,...P);return}if(l()||o){m(),d.call(null,R,...P);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,p(M)}let S=!1;function O(R){S||(S=!0,m(),!u&&(s!==null?(R||(c=2),clearTimeout(s),p(0)):R||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function Zx(t){t(!1)}/**
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
 */function eV(t){return t!==void 0}function tV(t){return typeof t=="object"&&!Array.isArray(t)}function Fd(t){return typeof t=="string"||t instanceof String}function Rg(t){return Ud()&&t instanceof Blob}function Ud(){return typeof Blob<"u"}function Sg(t,e,n,r){if(r<e)throw ah(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ah(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Bd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function yT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
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
 */function nV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class rV{constructor(e,n,r,s,i,o,c,l,u,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ts.NO_ERROR,l=i.getStatus();if(!c||nV(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===ts.ABORT;r(!1,new Sa(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Sa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());eV(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=$d();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?_T():Hx();o(l)}else{const l=jx();o(l)}};this.canceled_?n(!1,new Sa(!1,null,!0)):this.backoffId_=Jx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Zx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cV(t,e,n,r,s,i,o=!0){const c=yT(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return oV(u,e),sV(u,n),iV(u,i),aV(u,r),new rV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function lV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uV(...t){const e=lV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ud())return new Blob(t);throw new Ge(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dV(t){if(typeof atob>"u")throw Qx("base-64");return atob(t)}/**
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
 */const wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class du{constructor(e,n){this.data=e,this.contentType=n||null}}function fV(t,e){switch(t){case wn.RAW:return new du(vT(e));case wn.BASE64:case wn.BASE64URL:return new du(ET(t,e));case wn.DATA_URL:return new du(mV(e),gV(e))}throw $d()}function vT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pV(t){let e;try{e=decodeURIComponent(t)}catch{throw po(wn.DATA_URL,"Malformed data URL.")}return vT(e)}function ET(t,e){switch(t){case wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw po(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw po(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dV(e)}catch(s){throw s.message.includes("polyfill")?s:po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class TT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw po(wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_V(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mV(t){const e=new TT(t);return e.base64?ET(wn.BASE64,e.rest):pV(e.rest)}function gV(t){return new TT(t).contentType}function _V(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class vr{constructor(e,n){let r=0,s="";Rg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rg(this.data_)){const r=this.data_,s=hV(r,e,n);return s===null?null:new vr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vr(r,!0)}}static getBlob(...e){if(Ud()){const n=e.map(r=>r instanceof vr?r.data_:r);return new vr(uV.apply(null,n))}else{const n=e.map(o=>Fd(o)?fV(wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new vr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function wT(t){let e;try{e=JSON.parse(t)}catch{return null}return tV(e)?e:null}/**
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
 */function yV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function bT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function EV(t,e){return e}class Mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||EV}}let Ca=null;function TV(t){return!Fd(t)||t.length<2?t:bT(t)}function AT(){if(Ca)return Ca;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(i,o){return TV(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Mt("size");return s.xform=r,t.push(s),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),Ca=t,Ca}function wV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function bV(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return wV(r,t),r}function IT(t,e,n){const r=wT(e);return r===null?null:bV(t,r,n)}function AV(t,e,n,r){const s=wT(e);if(s===null||!Fd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),_=Bd(m,n,r),S=yT({alt:"media",token:u});return _+S})[0]}function IV(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class RT{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ST(t){if(!t)throw $d()}function RV(t,e){function n(r,s){const i=IT(t,s,e);return ST(i!==null),i}return n}function SV(t,e){function n(r,s){const i=IT(t,s,e);return ST(i!==null),AV(i,s,t.host,t._protocol)}return n}function CT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Ux():s=Fx():n.getStatus()===402?s=$x(t.bucket):n.getStatus()===403?s=Bx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function CV(t){const e=CT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Mx(t.path)),i.serverResponse=s.serverResponse,i}return n}function PV(t,e,n){const r=e.fullServerUrl(),s=Bd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new RT(s,i,SV(t,n),o);return c.errorHandler=CV(e),c}function OV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=OV(null,e)),r}function DV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let x=0;x<2;x++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=NV(e,r,s),d=IV(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=vr.getBlob(p,r,m);if(_===null)throw zx();const S={name:u.fullPath},O=Bd(i,t.host,t._protocol),R="POST",P=t.maxUploadRetryTime,D=new RT(O,R,RV(t,n),P);return D.urlParams=S,D.headers=o,D.body=_.uploadData(),D.errorHandler=CT(e),D}class kV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw qi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LV extends kV{initXhr(){this.xhr_.responseType="text"}}function PT(){return new LV}/**
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
 */class hs{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hs(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bT(this._location.path)}get storage(){return this._service}get parent(){const e=yV(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yx(e)}}function xV(t,e,n){t._throwIfRoot("uploadBytes");const r=DV(t.storage,t._location,AT(),new vr(e,!0),n);return t.storage.makeRequestWithTokens(r,PT).then(s=>({metadata:s,ref:t}))}function VV(t){t._throwIfRoot("getDownloadURL");const e=PV(t.storage,t._location,AT());return t.storage.makeRequestWithTokens(e,PT).then(n=>{if(n===null)throw Gx();return n})}function MV(t,e){const n=vV(t._location.path,e),r=new Jt(t._location.bucket,n);return new hs(t.storage,r)}/**
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
 */function $V(t){return/^[A-Za-z]+:\/\//.test(t)}function FV(t,e){return new hs(t,e)}function OT(t,e){if(t instanceof jd){const n=t;if(n._bucket==null)throw Kx();const r=new hs(n,n._bucket);return e!=null?OT(r,e):r}else return e!==void 0?MV(t,e):t}function UV(t,e){if(e&&$V(e)){if(t instanceof jd)return FV(t,e);throw ah("To use ref(service, url), the first argument must be a Storage instance.")}else return OT(t,e)}function Cg(t,e){const n=e==null?void 0:e[gT];return n==null?null:Jt.makeFromBucketSpec(n,t)}function BV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Q_(s,t.app.options.projectId))}class jd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=mT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xx,this._maxUploadRetryTime=Vx,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=Cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=Cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Xx(_T());{const o=cV(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Pg="@firebase/storage",Og="0.13.2";/**
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
 */const NT="storage";function jV(t,e,n){return t=Xe(t),xV(t,e,n)}function HV(t){return t=Xe(t),VV(t)}function qV(t,e){return t=Xe(t),UV(t,e)}function WV(t=Ch(),e){t=Xe(t);const r=Lc(t,NT).getImmediate({identifier:e}),s=K_("storage");return s&&KV(r,...s),r}function KV(t,e,n,r={}){BV(t,e,n,r)}function zV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jd(n,r,s,e,fs)}function GV(){ss(new Rr(NT,zV,"PUBLIC").setMultipleInstances(!0)),An(Pg,Og,""),An(Pg,Og,"esm2017")}GV();const QV={apiKey:"AIzaSyD3vcLf3-wpxN8CSAhCnBlPeFFSB3tNuJk",authDomain:"recipes-6dc7a.firebaseapp.com",projectId:"recipes-6dc7a",storageBucket:"recipes-6dc7a.appspot.com",messagingSenderId:"939884838879",appId:"1:939884838879:web:346d5a7b66633f933f4e6a"},Hd=J_(QV),Fs=mx(Hd),YV=WV(Hd);$h(Hd);const XV={},JV={class:"skeleton"};function ZV(t,e){return ve(),Re("div",JV,[(ve(),Re(ct,null,Yn(5,n=>L("div",{key:n,class:"skeleton-item"})),64))])}const eM=_t(XV,[["render",ZV],["__scopeId","data-v-d4cc2405"]]),tM={class:"col"},nM={class:"card shadow"},rM=["src"],sM={class:"recipe-details"},iM={class:"d-grid gap-2"},oM=Wt({__name:"RecipeCardList",props:{recipe:{}},setup(t){return(e,n)=>{const r=wh("router-link");return ve(),Re("div",tM,[L("div",nM,[n[1]||(n[1]=L("div",{class:"d-flex justify-content-center align-items-center"},null,-1)),Ie(r,{class:"recipe-card",to:`/recipe/${e.recipe.id}`},{default:dt(()=>[L("img",{src:e.recipe.image,alt:"Recipe Image",class:"recipe-image",height:"390px"},null,8,rM),L("div",sM,[L("h2",null,Ue(e.recipe.name),1),L("p",null,Ue(e.recipe.category),1),L("div",iM,[Ie(r,{class:"btn btn-primary",to:`/recipe/${e.recipe.id}`},{default:dt(()=>n[0]||(n[0]=[It("Ver receta")])),_:1},8,["to"])])])]),_:1},8,["to"])])])}}}),aM=_t(oM,[["__scopeId","data-v-ad31b239"]]),cM={class:"container"},lM={key:0},uM={key:1},hM={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"},dM=Wt({__name:"RecipesList",setup(t){const e=rt([]),n=rt(!0);return pi(async()=>{(await pT(ih(Fs,"recipes"))).forEach(i=>{const o=i.data();e.value.push({id:i.id,...o})}),n.value=!1}),(s,i)=>(ve(),Re("div",cM,[i[0]||(i[0]=L("h1",null," Recetario ",-1)),n.value?(ve(),Re("div",lM,[Ie(eM)])):(ve(),Re("div",uM,[L("div",hM,[(ve(!0),Re(ct,null,Yn(e.value,o=>(ve(),L_(aM,{key:o.id,recipe:o},null,8,["recipe"]))),128))])]))]))}}),fM={class:"recipe-card"},pM=["src"],mM={class:"recipe-details"},gM={class:"d-flex flex-row bd-highlight"},_M={class:"fw-bold mx-3"},yM={class:"fw-bold mx-3"},vM={class:"fw-bold mx-3"},EM={class:"d-flex flex-row bd-highlight"},TM=Wt({__name:"RecipeCard",props:{recipe:{}},setup(t){return(e,n)=>(ve(),Re("div",fM,[L("img",{src:e.recipe.image,alt:"Recipe Image",class:"recipe-image"},null,8,pM),L("div",mM,[L("h2",null,Ue(e.recipe.name),1),L("p",null,Ue(e.recipe.description),1),n[1]||(n[1]=L("p",{class:"fs-5 fw-bold"},"Ingredientes:",-1)),L("ul",null,[(ve(!0),Re(ct,null,Yn(e.recipe.ingredients,r=>(ve(),Re("li",{key:r.name},Ue(r.quantity)+" "+Ue(r.unit)+" of "+Ue(r.name),1))),128))]),L("div",gM,[L("p",_M," Temperatura: "+Ue(e.recipe.temperature)+"º",1),L("p",yM,"Tiempo de cocinado: "+Ue(e.recipe.time)+" minutos",1),L("p",vM,"Tiempo de preelaboración: "+Ue(e.recipe.prep_time)+" minutos",1)]),n[2]||(n[2]=L("p",{class:"fs-5 fw-bold"},"Elaboración:",-1)),L("p",null,Ue(e.recipe.instructions),1),L("div",EM,[n[0]||(n[0]=L("p",{class:"fw-bold px-3"},"Observaciones:",-1)),L("p",null,Ue(e.recipe.observations),1)])])]))}}),wM=_t(TM,[["__scopeId","data-v-5d2854a3"]]),bM=Wt({__name:"RecipesDetail",setup(t){const e=S1(),n=rt({name:"",category:"",id:"",time:0,temperature:0,observations:"",image:"",instructions:"",prep_time:0,servings:0,description:"",ingredients:[{name:"",quantity:null,unit:""}]});return pi(async()=>{const s=vc(Fs,"recipes",e.params.id),i=await Ox(s);i.exists()?n.value=i.data():console.log("No such document!")}),(s,i)=>(ve(),Re("div",null,[Ie(wM,{recipe:n.value},null,8,["recipe"])]))}}),AM={class:"container"},IM={class:"mb-3"},RM={class:"mb-3"},SM={class:"mb-3"},CM={class:"mb-3"},PM={class:"mb-3"},OM={class:"mb-3"},NM={class:"mb-3"},DM={class:"mb-3"},kM={class:"mb-3"},LM={class:"mb-3"},xM={class:"mb-3"},VM=["onUpdate:modelValue"],MM={class:"mb-3"},$M=["onUpdate:modelValue"],FM={class:"mb-3"},UM=["onUpdate:modelValue"],BM=["onClick"],jM={type:"submit",class:"btn btn-primary"},HM={class:"table"},qM=["onClick"],WM=["onClick"],KM={key:0,class:"spinner-border",role:"status"},zM=Wt({__name:"RecipeForm",setup(t){const e=Do({name:"",category:"",instructions:"",observations:"",temperature:"",time:0,prep_time:0,servings:0,description:"",ingredients:[{name:"",quantity:0,unit:""}],imageUrl:""}),n=rt([]),r=rt(!1),s=rt(null),i=rt(!1);R1();const o=async()=>{i.value=!0;const R=await pT(ih(Fs,"recipes"));n.value=R.docs.map(P=>({...P.data(),id:P.id})),i.value=!1},c=async()=>{r.value?await u():await l()},l=async()=>{try{if(e.imageUrl){const R={...e};await kx(ih(Fs,"recipes"),R),await o(),O()}else alert("Por favor, sube una imagen.")}catch(R){console.error("Error al añadir receta:",R)}},u=async()=>{if(s.value){const R=vc(Fs,"recipes",s.value);await Nx(R,{...e}),await o(),O()}},d=async R=>{const P=vc(Fs,"recipes",R);await Dx(P),await o()},p=R=>{r.value=!0,s.value=R.id,Object.assign(e,R)},m=async R=>{const P=R.target.files[0];if(P){const D=qV(YV,`recipes/${P.name}`);await jV(D,P);const M=await HV(D);e.imageUrl=M}},_=()=>{e.ingredients.push({name:"",quantity:0,unit:""})},S=R=>{e.ingredients.splice(R,1)},O=()=>{Object.assign(e,{name:"",category:"",instructions:"",observations:"",temperature:"",time:0,prep_time:0,servings:0,description:"",ingredients:[{name:"",quantity:0,unit:""}],imageUrl:""}),r.value=!1,s.value=null};return pi(o),(R,P)=>(ve(),Re("div",AM,[L("h2",null,Ue(r.value?"Editar receta":"Añadir una nueva receta"),1),L("form",{onSubmit:B_(c,["prevent"])},[L("div",IM,[P[9]||(P[9]=L("label",{for:"name",class:"form-label"},"Nombre receta",-1)),Rt(L("input",{type:"text",id:"name","onUpdate:modelValue":P[0]||(P[0]=D=>e.name=D),class:"form-control",required:""},null,512),[[jt,e.name]])]),L("div",RM,[P[10]||(P[10]=L("label",{for:"category",class:"form-label"},"Categoría",-1)),Rt(L("input",{type:"text",id:"category","onUpdate:modelValue":P[1]||(P[1]=D=>e.category=D),class:"form-control",required:""},null,512),[[jt,e.category]])]),L("div",SM,[P[11]||(P[11]=L("label",{for:"image",class:"form-label"},"Imagen",-1)),L("input",{type:"file",onChange:m,class:"form-control"},null,32)]),L("div",CM,[P[12]||(P[12]=L("label",{for:"instructions",class:"form-label"},"Elaboración",-1)),Rt(L("textarea",{id:"instructions","onUpdate:modelValue":P[2]||(P[2]=D=>e.instructions=D),class:"form-control",required:""},null,512),[[jt,e.instructions]])]),L("div",PM,[P[13]||(P[13]=L("label",{for:"observations",class:"form-label"},"Observaciones",-1)),Rt(L("textarea",{id:"observations","onUpdate:modelValue":P[3]||(P[3]=D=>e.observations=D),class:"form-control",required:""},null,512),[[jt,e.observations]])]),L("div",OM,[P[14]||(P[14]=L("label",{for:"temperature",class:"form-label"},"Temperatura",-1)),Rt(L("input",{type:"text",id:"temperature","onUpdate:modelValue":P[4]||(P[4]=D=>e.temperature=D),class:"form-control",required:""},null,512),[[jt,e.temperature]])]),L("div",NM,[P[15]||(P[15]=L("label",{for:"time",class:"form-label"},"Tiempo de cocinado (minutos)",-1)),Rt(L("input",{type:"number",id:"time","onUpdate:modelValue":P[5]||(P[5]=D=>e.time=D),class:"form-control",required:""},null,512),[[jt,e.time]])]),L("div",DM,[P[16]||(P[16]=L("label",{for:"prep_time",class:"form-label"},"Tiempo de elaboración (minutos)",-1)),Rt(L("input",{type:"number",id:"prep_time","onUpdate:modelValue":P[6]||(P[6]=D=>e.prep_time=D),class:"form-control",required:""},null,512),[[jt,e.prep_time]])]),L("div",kM,[P[17]||(P[17]=L("label",{for:"servings",class:"form-label"},"Número de comensales",-1)),Rt(L("input",{type:"number",id:"servings","onUpdate:modelValue":P[7]||(P[7]=D=>e.servings=D),class:"form-control",required:""},null,512),[[jt,e.servings]])]),L("div",LM,[P[18]||(P[18]=L("label",{for:"description",class:"form-label"},"Descripción",-1)),Rt(L("textarea",{id:"description","onUpdate:modelValue":P[8]||(P[8]=D=>e.description=D),class:"form-control",required:""},null,512),[[jt,e.description]])]),P[19]||(P[19]=L("h3",null,"Ingredientes",-1)),(ve(!0),Re(ct,null,Yn(e.ingredients,(D,M)=>(ve(),Re("div",{key:M,class:"ingredient-group"},[L("div",xM,[Rt(L("input",{type:"text","onUpdate:modelValue":x=>D.name=x,placeholder:"Nombre de ingrediente",class:"form-control",required:""},null,8,VM),[[jt,D.name]])]),L("div",MM,[Rt(L("input",{type:"number","onUpdate:modelValue":x=>D.quantity=x,placeholder:"Cantidad",class:"form-control",required:""},null,8,$M),[[jt,D.quantity]])]),L("div",FM,[Rt(L("input",{type:"text","onUpdate:modelValue":x=>D.unit=x,placeholder:"Unidades (gramos, unidad, al gusto)",class:"form-control",required:""},null,8,UM),[[jt,D.unit]])]),L("button",{type:"button",onClick:x=>S(M),class:"btn btn-danger"},"Eliminar ingrediente",8,BM)]))),128)),L("button",{type:"button",onClick:_,class:"btn btn-secondary"},"Añadir ingrediente"),P[20]||(P[20]=L("div",{class:"p-4"},null,-1)),L("button",jM,Ue(r.value?"Actualizar receta":"Añadir receta"),1)],32),P[23]||(P[23]=L("h2",{class:"mt-5"},"Recipes List",-1)),L("table",HM,[P[21]||(P[21]=L("thead",null,[L("tr",null,[L("th",null,"Nombre"),L("th",null,"Categoría"),L("th",null,"ID"),L("th",null,"Acciones")])],-1)),L("tbody",null,[(ve(!0),Re(ct,null,Yn(n.value,D=>(ve(),Re("tr",{key:D.id},[L("td",null,Ue(D.name),1),L("td",null,Ue(D.category),1),L("td",null,Ue(D.id),1),L("td",null,[L("button",{onClick:M=>p(D),class:"btn btn-warning mx-4"},"Editar",8,qM),L("button",{onClick:M=>d(D.id),class:"btn btn-danger"},"Eliminar",8,WM)])]))),128))])]),i.value?(ve(),Re("div",KM,P[22]||(P[22]=[L("span",{class:"sr-only"},"Loading...",-1)]))):Au("",!0)]))}}),GM=_t(zM,[["__scopeId","data-v-95fdf539"]]),QM=Wt({__name:"AddRecipe",setup(t){return(e,n)=>(ve(),Re("div",null,[Ie(GM)]))}}),YM={class:"container my-5"},XM={class:"row"},JM={class:"card h-100"},ZM=["src"],e$={class:"card-body"},t$={class:"card-title"},n$={class:"card-text"},r$=Wt({__name:"Cuts",setup(t){const e=rt([{name:"Juliana",description:"Corte en tiras finas, similar a una cerilla.",image:"https://via.placeholder.com/150"},{name:"Brunoise",description:"Corte en pequeños cubos, generalmente utilizado para verduras.",image:"https://via.placeholder.com/150"},{name:"Chiffonade",description:"Corte en tiras finas, usado para hierbas y hojas verdes.",image:"https://via.placeholder.com/150"},{name:"Paysanne",description:"Corte en rodajas finas con forma de triángulo o cuadrado.",image:"https://via.placeholder.com/150"},{name:"Macedonia",description:"Corte en cubos medianos, más grande que brunoise.",image:"https://via.placeholder.com/150"},{name:"Bastón",description:"Corte en tiras más gruesas que la juliana.",image:"https://via.placeholder.com/150"}]);return(n,r)=>(ve(),Re("div",YM,[r[0]||(r[0]=L("h1",{class:"text-center mb-4"},"Tipos de Corte",-1)),L("div",XM,[(ve(!0),Re(ct,null,Yn(e.value,s=>(ve(),Re("div",{key:s.name,class:"col-md-4 mb-4"},[L("div",JM,[L("img",{src:s.image,class:"card-img-top",alt:"Imagen Tipo de Corte"},null,8,ZM),L("div",e$,[L("h5",t$,Ue(s.name),1),L("p",n$,Ue(s.description),1)])])]))),128))])]))}}),s$=_t(r$,[["__scopeId","data-v-33836b41"]]),i$={class:"container my-5"},o$={class:"row"},a$={class:"card h-100"},c$=["src"],l$={class:"card-body"},u$={class:"card-title"},h$={class:"card-text"},d$=Wt({__name:"Sauces",setup(t){const e=rt([{name:"Salsa Bechamel",description:"Salsa blanca a base de leche, mantequilla y harina, utilizada en lasañas y gratinados.",image:"https://via.placeholder.com/150"},{name:"Salsa de Tomate",description:"Salsa hecha con tomates frescos, ideal para pastas y pizzas.",image:"https://via.placeholder.com/150"},{name:"Salsa Holandesa",description:"Salsa emulsionada a base de yemas de huevo, mantequilla y jugo de limón, perfecta para huevos benedictinos.",image:"https://via.placeholder.com/150"},{name:"Salsa Pesto",description:"Salsa fría hecha de albahaca, piñones, ajo y aceite de oliva, excelente para pastas.",image:"https://via.placeholder.com/150"},{name:"Salsa de Soja",description:"Salsa salada hecha de soja fermentada, común en la cocina asiática.",image:"https://via.placeholder.com/150"},{name:"Salsa Vinaigrette",description:"Mezcla de aceite y vinagre, utilizada como aderezo para ensaladas.",image:"https://via.placeholder.com/150"}]);return(n,r)=>(ve(),Re("div",i$,[r[0]||(r[0]=L("h1",{class:"text-center mb-4"},"Salsas Básicas",-1)),L("div",o$,[(ve(!0),Re(ct,null,Yn(e.value,s=>(ve(),Re("div",{key:s.name,class:"col-md-4 mb-4"},[L("div",a$,[L("img",{src:s.image,class:"card-img-top",alt:"Imagen de la Salsa"},null,8,c$),L("div",l$,[L("h5",u$,Ue(s.name),1),L("p",h$,Ue(s.description),1)])])]))),128))])]))}}),f$=_t(d$,[["__scopeId","data-v-9c02ede7"]]),p$={class:"container my-5"},m$={class:"row"},g$={class:"card h-100"},_$=["src"],y$={class:"card-body"},v$={class:"card-title"},E$={class:"card-text"},T$=Wt({__name:"Flavor",setup(t){const e=rt([{name:"Fondo Oscuro",description:"Fondo hecho con huesos tostados y vegetales, cocido a fuego lento durante varias horas.",image:"https://via.placeholder.com/150"},{name:"Fondo Blanco",description:"Fondo hecho con huesos crudos y vegetales, utilizado en sopas y salsas claras.",image:"https://via.placeholder.com/150"},{name:"Fumet de Pescado",description:"Fondo concentrado hecho con pescado y mariscos, ideal para platos de pescado.",image:"https://via.placeholder.com/150"},{name:"Caldo de Pollo",description:"Fondo hecho a base de huesos de pollo, usado en una variedad de platos.",image:"https://via.placeholder.com/150"},{name:"Fondo de Verduras",description:"Fondo hecho con una variedad de vegetales frescos, ideal para platos vegetarianos.",image:"https://via.placeholder.com/150"},{name:"Fondo Glace",description:"Fondo reducido hasta obtener una textura gelatinosa y concentrada.",image:"https://via.placeholder.com/150"}]);return(n,r)=>(ve(),Re("div",p$,[r[0]||(r[0]=L("h1",{class:"text-center mb-4"},"Fondos",-1)),L("div",m$,[(ve(!0),Re(ct,null,Yn(e.value,s=>(ve(),Re("div",{key:s.name,class:"col-md-4 mb-4"},[L("div",g$,[L("img",{src:s.image,class:"card-img-top",alt:"Imagen del Fondo"},null,8,_$),L("div",y$,[L("h5",v$,Ue(s.name),1),L("p",E$,Ue(s.description),1)])])]))),128))])]))}}),w$=_t(T$,[["__scopeId","data-v-216f5593"]]),b$={class:"container my-5"},A$={class:"row"},I$={class:"card h-100"},R$=["src"],S$={class:"card-body"},C$={class:"card-title"},P$={class:"card-text"},O$=Wt({__name:"Techniques",setup(t){const e=rt([{name:"Saltear",description:"Cocinar en una sartén con un poco de grasa a fuego alto.",image:"https://via.placeholder.com/150"},{name:"Brasear",description:"Dorar los alimentos y luego cocerlos a fuego lento en un líquido.",image:"https://via.placeholder.com/150"},{name:"Blanquear",description:"Escaldar los alimentos y luego enfriarlos rápidamente en agua helada.",image:"https://via.placeholder.com/150"},{name:"Freír",description:"Cocinar los alimentos sumergiéndolos en aceite caliente.",image:"https://via.placeholder.com/150"},{name:"Cocción a baja temperatura",description:"Método de cocción lenta a temperaturas precisas y controladas.",image:"https://via.placeholder.com/150"},{name:"Gratinar",description:"Cocinar en el horno hasta que la parte superior esté dorada y crujiente.",image:"https://via.placeholder.com/150"}]);return(n,r)=>(ve(),Re("div",b$,[r[0]||(r[0]=L("h1",{class:"text-center mb-4"},"Técnicas Culinarias",-1)),L("div",A$,[(ve(!0),Re(ct,null,Yn(e.value,s=>(ve(),Re("div",{key:s.name,class:"col-md-4 mb-4"},[L("div",I$,[L("img",{src:s.image,class:"card-img-top",alt:"Imagen Técnica Culinaria"},null,8,R$),L("div",S$,[L("h5",C$,Ue(s.name),1),L("p",P$,Ue(s.description),1)])])]))),128))])]))}}),N$=_t(O$,[["__scopeId","data-v-9b6ef5e2"]]),D$={};function k$(t,e){return"Recetas"}const L$=_t(D$,[["render",k$]]),x$={};function V$(t,e){return"Masas"}const M$=_t(x$,[["render",V$]]),$$={};function F$(t,e){return"Repostería"}const U$=_t($$,[["render",F$]]),B$={};function j$(t,e){return"Mariscos"}const H$=_t(B$,[["render",j$]]),q$={};function W$(t,e){return"Pescados"}const K$=_t(q$,[["render",W$]]),z$={};function G$(t,e){return"Carnes"}const Q$=_t(z$,[["render",G$]]),Y$={};function X$(t,e){return"Dietas"}const J$=_t(Y$,[["render",X$]]),Z$={};function eF(t,e){return"Entrantes"}const tF=_t(Z$,[["render",eF]]),nF=[{path:"/",name:"RecipesList",component:dM},{path:"/recipe/:id",name:"RecipesDetail",component:bM},{path:"/add-recipe",name:"AddRecipe",component:QM,meta:{requiresAuth:!0}},{path:"/sauces",name:"Sauces",component:f$},{path:"/cuts",name:"Cuts",component:s$},{path:"/flavor",name:"Flavor",component:w$},{path:"/techniques",name:"Techniques",component:N$},{path:"/bakery",name:"Bakery",component:L$},{path:"/dough",name:"Dough",component:M$},{path:"/pastry",name:"Pastry",component:U$},{path:"/starter",name:"Starter",component:tF},{path:"/meats",name:"Meats",component:Q$},{path:"/fishes",name:"Fishes",component:K$},{path:"/seafood",name:"Seafood",component:H$},{path:"/diet",name:"Diet",component:J$}],rF=A1({history:e1(),routes:nF}),sF=$h(),Ng=rt(!1);pi(()=>{Ay(sF,t=>{t?Ng.value=!0:Ng.value=!1})});const qd=mA(bD);qd.use(EA());qd.use(rF);qd.mount("#app");
