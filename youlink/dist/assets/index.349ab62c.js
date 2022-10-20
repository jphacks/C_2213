(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function go(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ff=go(hf);function cl(e){return!!e||e===""}function mo(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=ve(s)?gf(s):mo(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(ve(e))return e;if(ce(e))return e}}const df=/;(?![^(]*\))/g,pf=/:(.+)/;function gf(e){const t={};return e.split(df).forEach(n=>{if(n){const s=n.split(pf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function _o(e){let t="";if(ve(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=_o(e[n]);s&&(t+=s+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mi=e=>ve(e)?e:e==null?"":j(e)||ce(e)&&(e.toString===fl||!H(e.toString))?JSON.stringify(e,ll,2):String(e),ll=(e,t)=>t&&t.__v_isRef?ll(e,t.value):bn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ul(t)?{[`Set(${t.size})`]:[...t.values()]}:ce(t)&&!j(t)&&!dl(t)?String(t):t,ne={},wn=[],Ze=()=>{},mf=()=>!1,_f=/^on[^a-z]/,Li=e=>_f.test(e),vo=e=>e.startsWith("onUpdate:"),Re=Object.assign,yo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vf=Object.prototype.hasOwnProperty,q=(e,t)=>vf.call(e,t),j=Array.isArray,bn=e=>xi(e)==="[object Map]",ul=e=>xi(e)==="[object Set]",H=e=>typeof e=="function",ve=e=>typeof e=="string",Eo=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",hl=e=>ce(e)&&H(e.then)&&H(e.catch),fl=Object.prototype.toString,xi=e=>fl.call(e),yf=e=>xi(e).slice(8,-1),dl=e=>xi(e)==="[object Object]",Io=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ni=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ui=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ef=/-(\w)/g,gt=Ui(e=>e.replace(Ef,(t,n)=>n?n.toUpperCase():"")),If=/\B([A-Z])/g,$n=Ui(e=>e.replace(If,"-$1").toLowerCase()),Fi=Ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=Ui(e=>e?`on${Fi(e)}`:""),hs=(e,t)=>!Object.is(e,t),si=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Nr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const wf=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ot;class pl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ot&&(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ot;try{return ot=this,t()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function bf(e){return new pl(e)}function Tf(e,t=ot){t&&t.active&&t.effects.push(e)}const wo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},gl=e=>(e.w&Ht)>0,ml=e=>(e.n&Ht)>0,Af=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ht},Cf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];gl(i)&&!ml(i)?i.delete(e):t[n++]=i,i.w&=~Ht,i.n&=~Ht}t.length=n}},Mr=new WeakMap;let ts=0,Ht=1;const Lr=30;let Xe;const rn=Symbol(""),xr=Symbol("");class bo{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tf(this,s)}run(){if(!this.active)return this.fn();let t=Xe,n=Ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Xe,Xe=this,Ut=!0,Ht=1<<++ts,ts<=Lr?Af(this):ka(this),this.fn()}finally{ts<=Lr&&Cf(this),Ht=1<<--ts,Xe=this.parent,Ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(ka(this),this.onStop&&this.onStop(),this.active=!1)}}function ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ut=!0;const _l=[];function jn(){_l.push(Ut),Ut=!1}function Hn(){const e=_l.pop();Ut=e===void 0?!0:e}function Ue(e,t,n){if(Ut&&Xe){let s=Mr.get(e);s||Mr.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=wo()),vl(i)}}function vl(e,t){let n=!1;ts<=Lr?ml(e)||(e.n|=Ht,n=!gl(e)):n=!e.has(Xe),n&&(e.add(Xe),Xe.deps.push(e))}function Tt(e,t,n,s,i,r){const o=Mr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&j(e))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":j(e)?Io(n)&&a.push(o.get("length")):(a.push(o.get(rn)),bn(e)&&a.push(o.get(xr)));break;case"delete":j(e)||(a.push(o.get(rn)),bn(e)&&a.push(o.get(xr)));break;case"set":bn(e)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&Ur(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ur(wo(c))}}function Ur(e,t){const n=j(e)?e:[...e];for(const s of n)s.computed&&Oa(s);for(const s of n)s.computed||Oa(s)}function Oa(e,t){(e!==Xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Sf=go("__proto__,__v_isRef,__isVue"),yl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Eo)),Rf=To(),kf=To(!1,!0),Of=To(!0),Pa=Pf();function Pf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Y(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){jn();const s=Y(this)[t].apply(this,n);return Hn(),s}}),e}function To(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?qf:Tl:t?bl:wl).get(s))return s;const o=j(s);if(!e&&o&&q(Pa,i))return Reflect.get(Pa,i,r);const a=Reflect.get(s,i,r);return(Eo(i)?yl.has(i):Sf(i))||(e||Ue(s,"get",i),t)?a:le(a)?o&&Io(i)?a:a.value:ce(a)?e?Al(a):Ss(a):a}}const Df=El(),Nf=El(!0);function El(e=!1){return function(n,s,i,r){let o=n[s];if(Dn(o)&&le(o)&&!le(i))return!1;if(!e&&(!di(i)&&!Dn(i)&&(o=Y(o),i=Y(i)),!j(n)&&le(o)&&!le(i)))return o.value=i,!0;const a=j(n)&&Io(s)?Number(s)<n.length:q(n,s),c=Reflect.set(n,s,i,r);return n===Y(r)&&(a?hs(i,o)&&Tt(n,"set",s,i):Tt(n,"add",s,i)),c}}function Mf(e,t){const n=q(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Tt(e,"delete",t,void 0),s}function Lf(e,t){const n=Reflect.has(e,t);return(!Eo(t)||!yl.has(t))&&Ue(e,"has",t),n}function xf(e){return Ue(e,"iterate",j(e)?"length":rn),Reflect.ownKeys(e)}const Il={get:Rf,set:Df,deleteProperty:Mf,has:Lf,ownKeys:xf},Uf={get:Of,set(e,t){return!0},deleteProperty(e,t){return!0}},Ff=Re({},Il,{get:kf,set:Nf}),Ao=e=>e,Bi=e=>Reflect.getPrototypeOf(e);function qs(e,t,n=!1,s=!1){e=e.__v_raw;const i=Y(e),r=Y(t);n||(t!==r&&Ue(i,"get",t),Ue(i,"get",r));const{has:o}=Bi(i),a=s?Ao:n?ko:fs;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function Gs(e,t=!1){const n=this.__v_raw,s=Y(n),i=Y(e);return t||(e!==i&&Ue(s,"has",e),Ue(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Js(e,t=!1){return e=e.__v_raw,!t&&Ue(Y(e),"iterate",rn),Reflect.get(e,"size",e)}function Da(e){e=Y(e);const t=Y(this);return Bi(t).has.call(t,e)||(t.add(e),Tt(t,"add",e,e)),this}function Na(e,t){t=Y(t);const n=Y(this),{has:s,get:i}=Bi(n);let r=s.call(n,e);r||(e=Y(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?hs(t,o)&&Tt(n,"set",e,t):Tt(n,"add",e,t),this}function Ma(e){const t=Y(this),{has:n,get:s}=Bi(t);let i=n.call(t,e);i||(e=Y(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&Tt(t,"delete",e,void 0),r}function La(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Tt(e,"clear",void 0,void 0),n}function Xs(e,t){return function(s,i){const r=this,o=r.__v_raw,a=Y(o),c=t?Ao:e?ko:fs;return!e&&Ue(a,"iterate",rn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Ys(e,t,n){return function(...s){const i=this.__v_raw,r=Y(i),o=bn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...s),u=n?Ao:t?ko:fs;return!t&&Ue(r,"iterate",c?xr:rn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ot(e){return function(...t){return e==="delete"?!1:this}}function Bf(){const e={get(r){return qs(this,r)},get size(){return Js(this)},has:Gs,add:Da,set:Na,delete:Ma,clear:La,forEach:Xs(!1,!1)},t={get(r){return qs(this,r,!1,!0)},get size(){return Js(this)},has:Gs,add:Da,set:Na,delete:Ma,clear:La,forEach:Xs(!1,!0)},n={get(r){return qs(this,r,!0)},get size(){return Js(this,!0)},has(r){return Gs.call(this,r,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Xs(!0,!1)},s={get(r){return qs(this,r,!0,!0)},get size(){return Js(this,!0)},has(r){return Gs.call(this,r,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ys(r,!1,!1),n[r]=Ys(r,!0,!1),t[r]=Ys(r,!1,!0),s[r]=Ys(r,!0,!0)}),[e,n,t,s]}const[$f,jf,Hf,Vf]=Bf();function Co(e,t){const n=t?e?Vf:Hf:e?jf:$f;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const Wf={get:Co(!1,!1)},zf={get:Co(!1,!0)},Kf={get:Co(!0,!1)},wl=new WeakMap,bl=new WeakMap,Tl=new WeakMap,qf=new WeakMap;function Gf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jf(e){return e.__v_skip||!Object.isExtensible(e)?0:Gf(yf(e))}function Ss(e){return Dn(e)?e:So(e,!1,Il,Wf,wl)}function Xf(e){return So(e,!1,Ff,zf,bl)}function Al(e){return So(e,!0,Uf,Kf,Tl)}function So(e,t,n,s,i){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=Jf(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Tn(e){return Dn(e)?Tn(e.__v_raw):!!(e&&e.__v_isReactive)}function Dn(e){return!!(e&&e.__v_isReadonly)}function di(e){return!!(e&&e.__v_isShallow)}function Cl(e){return Tn(e)||Dn(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ro(e){return fi(e,"__v_skip",!0),e}const fs=e=>ce(e)?Ss(e):e,ko=e=>ce(e)?Al(e):e;function Sl(e){Ut&&Xe&&(e=Y(e),vl(e.dep||(e.dep=wo())))}function Rl(e,t){e=Y(e),e.dep&&Ur(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function He(e){return kl(e,!1)}function Yf(e){return kl(e,!0)}function kl(e,t){return le(e)?e:new Qf(e,t)}class Qf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:fs(t)}get value(){return Sl(this),this._value}set value(t){const n=this.__v_isShallow||di(t)||Dn(t);t=n?t:Y(t),hs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:fs(t),Rl(this))}}function J(e){return le(e)?e.value:e}const Zf={get:(e,t,n)=>J(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return le(i)&&!le(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Ol(e){return Tn(e)?e:new Proxy(e,Zf)}var Pl;class ed{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pl]=!1,this._dirty=!0,this.effect=new bo(t,()=>{this._dirty||(this._dirty=!0,Rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=Y(this);return Sl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Pl="__v_isReadonly";function td(e,t,n=!1){let s,i;const r=H(e);return r?(s=e,i=Ze):(s=e.get,i=e.set),new ed(s,i,r||!i,n)}function Ft(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){$i(r,t,n)}return i}function et(e,t,n,s){if(H(e)){const r=Ft(e,t,n,s);return r&&hl(r)&&r.catch(o=>{$i(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(et(e[r],t,n,s));return i}function $i(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ft(c,null,10,[e,o,a]);return}}nd(e,n,i,s)}function nd(e,t,n,s=!0){console.error(e)}let ds=!1,Fr=!1;const Ie=[];let ut=0;const An=[];let yt=null,Yt=0;const Dl=Promise.resolve();let Oo=null;function Nl(e){const t=Oo||Dl;return e?t.then(this?e.bind(this):e):t}function sd(e){let t=ut+1,n=Ie.length;for(;t<n;){const s=t+n>>>1;ps(Ie[s])<e?t=s+1:n=s}return t}function Po(e){(!Ie.length||!Ie.includes(e,ds&&e.allowRecurse?ut+1:ut))&&(e.id==null?Ie.push(e):Ie.splice(sd(e.id),0,e),Ml())}function Ml(){!ds&&!Fr&&(Fr=!0,Oo=Dl.then(xl))}function id(e){const t=Ie.indexOf(e);t>ut&&Ie.splice(t,1)}function rd(e){j(e)?An.push(...e):(!yt||!yt.includes(e,e.allowRecurse?Yt+1:Yt))&&An.push(e),Ml()}function xa(e,t=ds?ut+1:0){for(;t<Ie.length;t++){const n=Ie[t];n&&n.pre&&(Ie.splice(t,1),t--,n())}}function Ll(e){if(An.length){const t=[...new Set(An)];if(An.length=0,yt){yt.push(...t);return}for(yt=t,yt.sort((n,s)=>ps(n)-ps(s)),Yt=0;Yt<yt.length;Yt++)yt[Yt]();yt=null,Yt=0}}const ps=e=>e.id==null?1/0:e.id,od=(e,t)=>{const n=ps(e)-ps(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xl(e){Fr=!1,ds=!0,Ie.sort(od);const t=Ze;try{for(ut=0;ut<Ie.length;ut++){const n=Ie[ut];n&&n.active!==!1&&Ft(n,null,14)}}finally{ut=0,Ie.length=0,Ll(),ds=!1,Oo=null,(Ie.length||An.length)&&xl()}}function ad(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ne;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ne;p&&(i=n.map(m=>m.trim())),f&&(i=n.map(Nr))}let a,c=s[a=hr(t)]||s[a=hr(gt(t))];!c&&r&&(c=s[a=hr($n(t))]),c&&et(c,e,6,i);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(l,e,6,i)}}function Ul(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=Ul(l,t,!0);u&&(a=!0,Re(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ce(e)&&s.set(e,null),null):(j(r)?r.forEach(c=>o[c]=null):Re(o,r),ce(e)&&s.set(e,o),o)}function ji(e,t){return!e||!Li(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,$n(t))||q(e,t))}let Ye=null,Hi=null;function pi(e){const t=Ye;return Ye=e,Hi=e&&e.type.__scopeId||null,t}function cd(e){Hi=e}function ld(){Hi=null}function at(e,t=Ye,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Ka(-1);const r=pi(t),o=e(...i);return pi(r),s._d&&Ka(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function fr(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:T,inheritAttrs:P}=e;let L,R;const $=pi(e);try{if(n.shapeFlag&4){const X=i||s;L=lt(u.call(X,X,f,r,m,p,T)),R=c}else{const X=t;L=lt(X.length>1?X(r,{attrs:c,slots:a,emit:l}):X(r,null)),R=t.props?c:ud(c)}}catch(X){os.length=0,$i(X,e,1),L=ae(ln)}let z=L;if(R&&P!==!1){const X=Object.keys(R),{shapeFlag:pe}=z;X.length&&pe&7&&(o&&X.some(vo)&&(R=hd(R,o)),z=Nn(z,R))}return n.dirs&&(z=Nn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),L=z,pi($),L}const ud=e=>{let t;for(const n in e)(n==="class"||n==="style"||Li(n))&&((t||(t={}))[n]=e[n]);return t},hd=(e,t)=>{const n={};for(const s in e)(!vo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function fd(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ua(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!ji(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ua(s,o,l):!0:!!o;return!1}function Ua(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!ji(n,r))return!0}return!1}function dd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pd=e=>e.__isSuspense;function gd(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):rd(e)}function ii(e,t){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[e]=t}}function bt(e,t,n=!1){const s=me||Ye;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&H(t)?t.call(s.proxy):t}}const Fa={};function ri(e,t,n){return Fl(e,t,n)}function Fl(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ne){const a=me;let c,l=!1,u=!1;if(le(e)?(c=()=>e.value,l=di(e)):Tn(e)?(c=()=>e,s=!0):j(e)?(u=!0,l=e.some(R=>Tn(R)||di(R)),c=()=>e.map(R=>{if(le(R))return R.value;if(Tn(R))return en(R);if(H(R))return Ft(R,a,2)})):H(e)?t?c=()=>Ft(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),et(e,a,3,[p])}:c=Ze,t&&s){const R=c;c=()=>en(R())}let f,p=R=>{f=L.onStop=()=>{Ft(R,a,4)}};if(ms)return p=Ze,t?n&&et(t,a,3,[c(),u?[]:void 0,p]):c(),Ze;let m=u?[]:Fa;const T=()=>{if(!!L.active)if(t){const R=L.run();(s||l||(u?R.some(($,z)=>hs($,m[z])):hs(R,m)))&&(f&&f(),et(t,a,3,[R,m===Fa?void 0:m,p]),m=R)}else L.run()};T.allowRecurse=!!t;let P;i==="sync"?P=T:i==="post"?P=()=>Oe(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),P=()=>Po(T));const L=new bo(c,P);return t?n?T():m=L.run():i==="post"?Oe(L.run.bind(L),a&&a.suspense):L.run(),()=>{L.stop(),a&&a.scope&&yo(a.scope.effects,L)}}function md(e,t,n){const s=this.proxy,i=ve(e)?e.includes(".")?Bl(s,e):()=>s[e]:e.bind(s,s);let r;H(t)?r=t:(r=t.handler,n=t);const o=me;Mn(this);const a=Fl(i,r.bind(s),n);return o?Mn(o):on(),a}function Bl(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function en(e,t){if(!ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))en(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)en(e[n],t);else if(ul(e)||bn(e))e.forEach(n=>{en(n,t)});else if(dl(e))for(const n in e)en(e[n],t);return e}function Vn(e){return H(e)?{setup:e,name:e.name}:e}const oi=e=>!!e.type.__asyncLoader,$l=e=>e.type.__isKeepAlive;function _d(e,t){jl(e,"a",t)}function vd(e,t){jl(e,"da",t)}function jl(e,t,n=me){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)$l(i.parent.vnode)&&yd(s,t,n,i),i=i.parent}}function yd(e,t,n,s){const i=Vi(t,e,s,!0);Hl(()=>{yo(s[t],i)},n)}function Vi(e,t,n=me,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;jn(),Mn(n);const a=et(t,n,e,o);return on(),Hn(),a});return s?i.unshift(r):i.push(r),r}}const St=e=>(t,n=me)=>(!ms||e==="sp")&&Vi(e,(...s)=>t(...s),n),Ed=St("bm"),Id=St("m"),wd=St("bu"),bd=St("u"),Td=St("bum"),Hl=St("um"),Ad=St("sp"),Cd=St("rtg"),Sd=St("rtc");function Rd(e,t=me){Vi("ec",e,t)}function Cn(e,t){const n=Ye;if(n===null)return e;const s=zi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,c,l=ne]=t[r];H(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function qt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(jn(),et(c,n,8,[e.el,a,e,t]),Hn())}}const Vl="components";function Wl(e,t){return Od(Vl,e,!0,t)||e}const kd=Symbol();function Od(e,t,n=!0,s=!1){const i=Ye||me;if(i){const r=i.type;if(e===Vl){const a=op(r,!1);if(a&&(a===t||a===gt(t)||a===Fi(gt(t))))return r}const o=Ba(i[e]||r[e],t)||Ba(i.appContext[e],t);return!o&&s?r:o}}function Ba(e,t){return e&&(e[t]||e[gt(t)]||e[Fi(gt(t))])}const Br=e=>e?nu(e)?zi(e)||e.proxy:Br(e.parent):null,gi=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$emit:e=>e.emit,$options:e=>Do(e),$forceUpdate:e=>e.f||(e.f=()=>Po(e.update)),$nextTick:e=>e.n||(e.n=Nl.bind(e.proxy)),$watch:e=>md.bind(e)}),Pd={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(s!==ne&&q(s,t))return o[t]=1,s[t];if(i!==ne&&q(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&q(l,t))return o[t]=3,r[t];if(n!==ne&&q(n,t))return o[t]=4,n[t];$r&&(o[t]=0)}}const u=gi[t];let f,p;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ne&&q(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return i!==ne&&q(i,t)?(i[t]=n,!0):s!==ne&&q(s,t)?(s[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ne&&q(e,o)||t!==ne&&q(t,o)||(a=r[0])&&q(a,o)||q(s,o)||q(gi,o)||q(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let $r=!0;function Dd(e){const t=Do(e),n=e.proxy,s=e.ctx;$r=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:T,activated:P,deactivated:L,beforeDestroy:R,beforeUnmount:$,destroyed:z,unmounted:X,render:pe,renderTracked:ge,renderTriggered:De,errorCaptured:Ke,serverPrefetch:nt,expose:Fe,inheritAttrs:kt,components:st,directives:gn,filters:zt}=t;if(l&&Nd(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const se in o){const ee=o[se];H(ee)&&(s[se]=ee.bind(n))}if(i){const se=i.call(n,n);ce(se)&&(e.data=Ss(se))}if($r=!0,r)for(const se in r){const ee=r[se],qe=H(ee)?ee.bind(n,n):H(ee.get)?ee.get.bind(n,n):Ze,Kt=!H(ee)&&H(ee.set)?ee.set.bind(n):Ze,Ge=Be({get:qe,set:Kt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ke=>Ge.value=ke})}if(a)for(const se in a)zl(a[se],s,n,se);if(c){const se=H(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{ii(ee,se[ee])})}u&&$a(u,e,"c");function ue(se,ee){j(ee)?ee.forEach(qe=>se(qe.bind(n))):ee&&se(ee.bind(n))}if(ue(Ed,f),ue(Id,p),ue(wd,m),ue(bd,T),ue(_d,P),ue(vd,L),ue(Rd,Ke),ue(Sd,ge),ue(Cd,De),ue(Td,$),ue(Hl,X),ue(Ad,nt),j(Fe))if(Fe.length){const se=e.exposed||(e.exposed={});Fe.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:qe=>n[ee]=qe})})}else e.exposed||(e.exposed={});pe&&e.render===Ze&&(e.render=pe),kt!=null&&(e.inheritAttrs=kt),st&&(e.components=st),gn&&(e.directives=gn)}function Nd(e,t,n=Ze,s=!1){j(e)&&(e=jr(e));for(const i in e){const r=e[i];let o;ce(r)?"default"in r?o=bt(r.from||i,r.default,!0):o=bt(r.from||i):o=bt(r),le(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function $a(e,t,n){et(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function zl(e,t,n,s){const i=s.includes(".")?Bl(n,s):()=>n[s];if(ve(e)){const r=t[e];H(r)&&ri(i,r)}else if(H(e))ri(i,e.bind(n));else if(ce(e))if(j(e))e.forEach(r=>zl(r,t,n,s));else{const r=H(e.handler)?e.handler.bind(n):t[e.handler];H(r)&&ri(i,r,e)}}function Do(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(l=>mi(c,l,o,!0)),mi(c,t,o)),ce(t)&&r.set(t,c),c}function mi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&mi(e,r,n,!0),i&&i.forEach(o=>mi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Md[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Md={data:ja,props:Jt,emits:Jt,methods:Jt,computed:Jt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Jt,directives:Jt,watch:xd,provide:ja,inject:Ld};function ja(e,t){return t?e?function(){return Re(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ld(e,t){return Jt(jr(e),jr(t))}function jr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?Re(Re(Object.create(null),e),t):t}function xd(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const s in t)n[s]=Ce(e[s],t[s]);return n}function Ud(e,t,n,s=!1){const i={},r={};fi(r,Wi,1),e.propsDefaults=Object.create(null),Kl(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Xf(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Fd(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=Y(i),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ji(e.emitsOptions,p))continue;const m=t[p];if(c)if(q(r,p))m!==r[p]&&(r[p]=m,l=!0);else{const T=gt(p);i[T]=Hr(c,a,T,m,e,!1)}else m!==r[p]&&(r[p]=m,l=!0)}}}else{Kl(e,t,i,r)&&(l=!0);let u;for(const f in a)(!t||!q(t,f)&&((u=$n(f))===f||!q(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Hr(c,a,f,void 0,e,!0)):delete i[f]);if(r!==a)for(const f in r)(!t||!q(t,f)&&!0)&&(delete r[f],l=!0)}l&&Tt(e,"set","$attrs")}function Kl(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(ni(c))continue;const l=t[c];let u;i&&q(i,u=gt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:ji(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=Y(n),l=a||ne;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Hr(i,c,f,l[f],e,!q(l,f))}}return o}function Hr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Mn(i),s=l[n]=c.call(null,t),on())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function ql(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let c=!1;if(!H(e)){const u=f=>{c=!0;const[p,m]=ql(f,t,!0);Re(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return ce(e)&&s.set(e,wn),wn;if(j(r))for(let u=0;u<r.length;u++){const f=gt(r[u]);Ha(f)&&(o[f]=ne)}else if(r)for(const u in r){const f=gt(u);if(Ha(f)){const p=r[u],m=o[f]=j(p)||H(p)?{type:p}:p;if(m){const T=za(Boolean,m.type),P=za(String,m.type);m[0]=T>-1,m[1]=P<0||T<P,(T>-1||q(m,"default"))&&a.push(f)}}}const l=[o,a];return ce(e)&&s.set(e,l),l}function Ha(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Wa(e,t){return Va(e)===Va(t)}function za(e,t){return j(t)?t.findIndex(n=>Wa(n,e)):H(t)&&Wa(t,e)?0:-1}const Gl=e=>e[0]==="_"||e==="$stable",No=e=>j(e)?e.map(lt):[lt(e)],Bd=(e,t,n)=>{if(t._n)return t;const s=at((...i)=>No(t(...i)),n);return s._c=!1,s},Jl=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Gl(i))continue;const r=e[i];if(H(r))t[i]=Bd(i,r,s);else if(r!=null){const o=No(r);t[i]=()=>o}}},Xl=(e,t)=>{const n=No(t);e.slots.default=()=>n},$d=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),fi(t,"_",n)):Jl(t,e.slots={})}else e.slots={},t&&Xl(e,t);fi(e.slots,Wi,1)},jd=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ne;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Re(i,t),!n&&a===1&&delete i._):(r=!t.$stable,Jl(t,i)),o=t}else t&&(Xl(e,t),o={default:1});if(r)for(const a in i)!Gl(a)&&!(a in o)&&delete i[a]};function Yl(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hd=0;function Vd(e,t){return function(s,i=null){H(s)||(s=Object.assign({},s)),i!=null&&!ce(i)&&(i=null);const r=Yl(),o=new Set;let a=!1;const c=r.app={_uid:Hd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,f){if(!a){const p=ae(s,i);return p.appContext=r,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,zi(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Vr(e,t,n,s,i=!1){if(j(e)){e.forEach((p,m)=>Vr(p,t&&(j(t)?t[m]:t),n,s,i));return}if(oi(s)&&!i)return;const r=s.shapeFlag&4?zi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ne?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,q(f,l)&&(f[l]=null)):le(l)&&(l.value=null)),H(c))Ft(c,a,12,[o,u]);else{const p=ve(c),m=le(c);if(p||m){const T=()=>{if(e.f){const P=p?u[c]:c.value;i?j(P)&&yo(P,r):j(P)?P.includes(r)||P.push(r):p?(u[c]=[r],q(f,c)&&(f[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,q(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(T.id=-1,Oe(T,n)):T()}}}const Oe=gd;function Wd(e){return zd(e)}function zd(e,t){const n=wf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Ze,insertStaticContent:T}=e,P=(h,d,g,_=null,y=null,w=null,C=!1,I=null,b=!!d.dynamicChildren)=>{if(h===d)return;h&&!Qn(h,d)&&(_=A(h),ke(h,y,w,!0),h=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:k}=d;switch(E){case Mo:L(h,d,g,_);break;case ln:R(h,d,g,_);break;case dr:h==null&&$(d,g,_,C);break;case ct:st(h,d,g,_,y,w,C,I,b);break;default:k&1?pe(h,d,g,_,y,w,C,I,b):k&6?gn(h,d,g,_,y,w,C,I,b):(k&64||k&128)&&E.process(h,d,g,_,y,w,C,I,b,G)}N!=null&&y&&Vr(N,h&&h.ref,w,d||h,!d)},L=(h,d,g,_)=>{if(h==null)s(d.el=a(d.children),g,_);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},R=(h,d,g,_)=>{h==null?s(d.el=c(d.children||""),g,_):d.el=h.el},$=(h,d,g,_)=>{[h.el,h.anchor]=T(h.children,d,g,_,h.el,h.anchor)},z=({el:h,anchor:d},g,_)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,_),h=y;s(d,g,_)},X=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),i(h),h=g;i(d)},pe=(h,d,g,_,y,w,C,I,b)=>{C=C||d.type==="svg",h==null?ge(d,g,_,y,w,C,I,b):nt(h,d,y,w,C,I,b)},ge=(h,d,g,_,y,w,C,I)=>{let b,E;const{type:N,props:k,shapeFlag:M,transition:B,dirs:W}=h;if(b=h.el=o(h.type,w,k&&k.is,k),M&8?u(b,h.children):M&16&&Ke(h.children,b,null,_,y,w&&N!=="foreignObject",C,I),W&&qt(h,null,_,"created"),k){for(const te in k)te!=="value"&&!ni(te)&&r(b,te,null,k[te],w,h.children,_,y,S);"value"in k&&r(b,"value",null,k.value),(E=k.onVnodeBeforeMount)&&rt(E,_,h)}De(b,h,h.scopeId,C,_),W&&qt(h,null,_,"beforeMount");const ie=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;ie&&B.beforeEnter(b),s(b,d,g),((E=k&&k.onVnodeMounted)||ie||W)&&Oe(()=>{E&&rt(E,_,h),ie&&B.enter(b),W&&qt(h,null,_,"mounted")},y)},De=(h,d,g,_,y)=>{if(g&&m(h,g),_)for(let w=0;w<_.length;w++)m(h,_[w]);if(y){let w=y.subTree;if(d===w){const C=y.vnode;De(h,C,C.scopeId,C.slotScopeIds,y.parent)}}},Ke=(h,d,g,_,y,w,C,I,b=0)=>{for(let E=b;E<h.length;E++){const N=h[E]=I?Mt(h[E]):lt(h[E]);P(null,N,d,g,_,y,w,C,I)}},nt=(h,d,g,_,y,w,C)=>{const I=d.el=h.el;let{patchFlag:b,dynamicChildren:E,dirs:N}=d;b|=h.patchFlag&16;const k=h.props||ne,M=d.props||ne;let B;g&&Gt(g,!1),(B=M.onVnodeBeforeUpdate)&&rt(B,g,d,h),N&&qt(d,h,g,"beforeUpdate"),g&&Gt(g,!0);const W=y&&d.type!=="foreignObject";if(E?Fe(h.dynamicChildren,E,I,g,_,W,w):C||ee(h,d,I,null,g,_,W,w,!1),b>0){if(b&16)kt(I,d,k,M,g,_,y);else if(b&2&&k.class!==M.class&&r(I,"class",null,M.class,y),b&4&&r(I,"style",k.style,M.style,y),b&8){const ie=d.dynamicProps;for(let te=0;te<ie.length;te++){const he=ie[te],Je=k[he],_n=M[he];(_n!==Je||he==="value")&&r(I,he,Je,_n,y,h.children,g,_,S)}}b&1&&h.children!==d.children&&u(I,d.children)}else!C&&E==null&&kt(I,d,k,M,g,_,y);((B=M.onVnodeUpdated)||N)&&Oe(()=>{B&&rt(B,g,d,h),N&&qt(d,h,g,"updated")},_)},Fe=(h,d,g,_,y,w,C)=>{for(let I=0;I<d.length;I++){const b=h[I],E=d[I],N=b.el&&(b.type===ct||!Qn(b,E)||b.shapeFlag&70)?f(b.el):g;P(b,E,N,null,_,y,w,C,!0)}},kt=(h,d,g,_,y,w,C)=>{if(g!==_){if(g!==ne)for(const I in g)!ni(I)&&!(I in _)&&r(h,I,g[I],null,C,d.children,y,w,S);for(const I in _){if(ni(I))continue;const b=_[I],E=g[I];b!==E&&I!=="value"&&r(h,I,E,b,C,d.children,y,w,S)}"value"in _&&r(h,"value",g.value,_.value)}},st=(h,d,g,_,y,w,C,I,b)=>{const E=d.el=h?h.el:a(""),N=d.anchor=h?h.anchor:a("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),h==null?(s(E,g,_),s(N,g,_),Ke(d.children,g,N,y,w,C,I,b)):k>0&&k&64&&M&&h.dynamicChildren?(Fe(h.dynamicChildren,M,g,y,w,C,I),(d.key!=null||y&&d===y.subTree)&&Ql(h,d,!0)):ee(h,d,g,N,y,w,C,I,b)},gn=(h,d,g,_,y,w,C,I,b)=>{d.slotScopeIds=I,h==null?d.shapeFlag&512?y.ctx.activate(d,g,_,C,b):zt(d,g,_,y,w,C,b):Xn(h,d,b)},zt=(h,d,g,_,y,w,C)=>{const I=h.component=tp(h,_,y);if($l(h)&&(I.ctx.renderer=G),np(I),I.asyncDep){if(y&&y.registerDep(I,ue),!h.el){const b=I.subTree=ae(ln);R(null,b,d,g)}return}ue(I,h,d,g,y,w,C)},Xn=(h,d,g)=>{const _=d.component=h.component;if(fd(h,d,g))if(_.asyncDep&&!_.asyncResolved){se(_,d,g);return}else _.next=d,id(_.update),_.update();else d.el=h.el,_.vnode=d},ue=(h,d,g,_,y,w,C)=>{const I=()=>{if(h.isMounted){let{next:N,bu:k,u:M,parent:B,vnode:W}=h,ie=N,te;Gt(h,!1),N?(N.el=W.el,se(h,N,C)):N=W,k&&si(k),(te=N.props&&N.props.onVnodeBeforeUpdate)&&rt(te,B,N,W),Gt(h,!0);const he=fr(h),Je=h.subTree;h.subTree=he,P(Je,he,f(Je.el),A(Je),h,y,w),N.el=he.el,ie===null&&dd(h,he.el),M&&Oe(M,y),(te=N.props&&N.props.onVnodeUpdated)&&Oe(()=>rt(te,B,N,W),y)}else{let N;const{el:k,props:M}=d,{bm:B,m:W,parent:ie}=h,te=oi(d);if(Gt(h,!1),B&&si(B),!te&&(N=M&&M.onVnodeBeforeMount)&&rt(N,ie,d),Gt(h,!0),k&&V){const he=()=>{h.subTree=fr(h),V(k,h.subTree,h,y,null)};te?d.type.__asyncLoader().then(()=>!h.isUnmounted&&he()):he()}else{const he=h.subTree=fr(h);P(null,he,g,_,h,y,w),d.el=he.el}if(W&&Oe(W,y),!te&&(N=M&&M.onVnodeMounted)){const he=d;Oe(()=>rt(N,ie,he),y)}(d.shapeFlag&256||ie&&oi(ie.vnode)&&ie.vnode.shapeFlag&256)&&h.a&&Oe(h.a,y),h.isMounted=!0,d=g=_=null}},b=h.effect=new bo(I,()=>Po(E),h.scope),E=h.update=()=>b.run();E.id=h.uid,Gt(h,!0),E()},se=(h,d,g)=>{d.component=h;const _=h.vnode.props;h.vnode=d,h.next=null,Fd(h,d.props,_,g),jd(h,d.children,g),jn(),xa(),Hn()},ee=(h,d,g,_,y,w,C,I,b=!1)=>{const E=h&&h.children,N=h?h.shapeFlag:0,k=d.children,{patchFlag:M,shapeFlag:B}=d;if(M>0){if(M&128){Kt(E,k,g,_,y,w,C,I,b);return}else if(M&256){qe(E,k,g,_,y,w,C,I,b);return}}B&8?(N&16&&S(E,y,w),k!==E&&u(g,k)):N&16?B&16?Kt(E,k,g,_,y,w,C,I,b):S(E,y,w,!0):(N&8&&u(g,""),B&16&&Ke(k,g,_,y,w,C,I,b))},qe=(h,d,g,_,y,w,C,I,b)=>{h=h||wn,d=d||wn;const E=h.length,N=d.length,k=Math.min(E,N);let M;for(M=0;M<k;M++){const B=d[M]=b?Mt(d[M]):lt(d[M]);P(h[M],B,g,null,y,w,C,I,b)}E>N?S(h,y,w,!0,!1,k):Ke(d,g,_,y,w,C,I,b,k)},Kt=(h,d,g,_,y,w,C,I,b)=>{let E=0;const N=d.length;let k=h.length-1,M=N-1;for(;E<=k&&E<=M;){const B=h[E],W=d[E]=b?Mt(d[E]):lt(d[E]);if(Qn(B,W))P(B,W,g,null,y,w,C,I,b);else break;E++}for(;E<=k&&E<=M;){const B=h[k],W=d[M]=b?Mt(d[M]):lt(d[M]);if(Qn(B,W))P(B,W,g,null,y,w,C,I,b);else break;k--,M--}if(E>k){if(E<=M){const B=M+1,W=B<N?d[B].el:_;for(;E<=M;)P(null,d[E]=b?Mt(d[E]):lt(d[E]),g,W,y,w,C,I,b),E++}}else if(E>M)for(;E<=k;)ke(h[E],y,w,!0),E++;else{const B=E,W=E,ie=new Map;for(E=W;E<=M;E++){const Ne=d[E]=b?Mt(d[E]):lt(d[E]);Ne.key!=null&&ie.set(Ne.key,E)}let te,he=0;const Je=M-W+1;let _n=!1,Aa=0;const Yn=new Array(Je);for(E=0;E<Je;E++)Yn[E]=0;for(E=B;E<=k;E++){const Ne=h[E];if(he>=Je){ke(Ne,y,w,!0);continue}let it;if(Ne.key!=null)it=ie.get(Ne.key);else for(te=W;te<=M;te++)if(Yn[te-W]===0&&Qn(Ne,d[te])){it=te;break}it===void 0?ke(Ne,y,w,!0):(Yn[it-W]=E+1,it>=Aa?Aa=it:_n=!0,P(Ne,d[it],g,null,y,w,C,I,b),he++)}const Ca=_n?Kd(Yn):wn;for(te=Ca.length-1,E=Je-1;E>=0;E--){const Ne=W+E,it=d[Ne],Sa=Ne+1<N?d[Ne+1].el:_;Yn[E]===0?P(null,it,g,Sa,y,w,C,I,b):_n&&(te<0||E!==Ca[te]?Ge(it,g,Sa,2):te--)}}},Ge=(h,d,g,_,y=null)=>{const{el:w,type:C,transition:I,children:b,shapeFlag:E}=h;if(E&6){Ge(h.component.subTree,d,g,_);return}if(E&128){h.suspense.move(d,g,_);return}if(E&64){C.move(h,d,g,G);return}if(C===ct){s(w,d,g);for(let k=0;k<b.length;k++)Ge(b[k],d,g,_);s(h.anchor,d,g);return}if(C===dr){z(h,d,g);return}if(_!==2&&E&1&&I)if(_===0)I.beforeEnter(w),s(w,d,g),Oe(()=>I.enter(w),y);else{const{leave:k,delayLeave:M,afterLeave:B}=I,W=()=>s(w,d,g),ie=()=>{k(w,()=>{W(),B&&B()})};M?M(w,W,ie):ie()}else s(w,d,g)},ke=(h,d,g,_=!1,y=!1)=>{const{type:w,props:C,ref:I,children:b,dynamicChildren:E,shapeFlag:N,patchFlag:k,dirs:M}=h;if(I!=null&&Vr(I,null,g,h,!0),N&256){d.ctx.deactivate(h);return}const B=N&1&&M,W=!oi(h);let ie;if(W&&(ie=C&&C.onVnodeBeforeUnmount)&&rt(ie,d,h),N&6)v(h.component,g,_);else{if(N&128){h.suspense.unmount(g,_);return}B&&qt(h,null,d,"beforeUnmount"),N&64?h.type.remove(h,d,g,y,G,_):E&&(w!==ct||k>0&&k&64)?S(E,d,g,!1,!0):(w===ct&&k&384||!y&&N&16)&&S(b,d,g),_&&mn(h)}(W&&(ie=C&&C.onVnodeUnmounted)||B)&&Oe(()=>{ie&&rt(ie,d,h),B&&qt(h,null,d,"unmounted")},g)},mn=h=>{const{type:d,el:g,anchor:_,transition:y}=h;if(d===ct){Ks(g,_);return}if(d===dr){X(h);return}const w=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:I}=y,b=()=>C(g,w);I?I(h.el,w,b):b()}else w()},Ks=(h,d)=>{let g;for(;h!==d;)g=p(h),i(h),h=g;i(d)},v=(h,d,g)=>{const{bum:_,scope:y,update:w,subTree:C,um:I}=h;_&&si(_),y.stop(),w&&(w.active=!1,ke(C,h,d,g)),I&&Oe(I,d),Oe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},S=(h,d,g,_=!1,y=!1,w=0)=>{for(let C=w;C<h.length;C++)ke(h[C],d,g,_,y)},A=h=>h.shapeFlag&6?A(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),D=(h,d,g)=>{h==null?d._vnode&&ke(d._vnode,null,null,!0):P(d._vnode||null,h,d,null,null,null,g),xa(),Ll(),d._vnode=h},G={p:P,um:ke,m:Ge,r:mn,mt:zt,mc:Ke,pc:ee,pbc:Fe,n:A,o:e};let oe,V;return t&&([oe,V]=t(G)),{render:D,hydrate:oe,createApp:Vd(D,oe)}}function Gt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ql(e,t,n=!1){const s=e.children,i=t.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Mt(i[r]),a.el=o.el),n||Ql(o,a))}}function Kd(e){const t=e.slice(),n=[0];let s,i,r,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(i=n[n.length-1],e[i]<l){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const qd=e=>e.__isTeleport,ct=Symbol(void 0),Mo=Symbol(void 0),ln=Symbol(void 0),dr=Symbol(void 0),os=[];let Qe=null;function we(e=!1){os.push(Qe=e?null:[])}function Gd(){os.pop(),Qe=os[os.length-1]||null}let gs=1;function Ka(e){gs+=e}function Zl(e){return e.dynamicChildren=gs>0?Qe||wn:null,Gd(),gs>0&&Qe&&Qe.push(e),e}function Pe(e,t,n,s,i,r){return Zl(x(e,t,n,s,i,r,!0))}function eu(e,t,n,s,i){return Zl(ae(e,t,n,s,i,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function Qn(e,t){return e.type===t.type&&e.key===t.key}const Wi="__vInternal",tu=({key:e})=>e!=null?e:null,ai=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||le(e)||H(e)?{i:Ye,r:e,k:t,f:!!n}:e:null;function x(e,t=null,n=null,s=0,i=null,r=e===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tu(t),ref:t&&ai(t),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Lo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),gs>0&&!o&&Qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qe.push(c),c}const ae=Jd;function Jd(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===kd)&&(e=ln),Wr(e)){const a=Nn(e,t,!0);return n&&Lo(a,n),gs>0&&!r&&Qe&&(a.shapeFlag&6?Qe[Qe.indexOf(e)]=a:Qe.push(a)),a.patchFlag|=-2,a}if(ap(e)&&(e=e.__vccOpts),t){t=Xd(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=_o(a)),ce(c)&&(Cl(c)&&!j(c)&&(c=Re({},c)),t.style=mo(c))}const o=ve(e)?1:pd(e)?128:qd(e)?64:ce(e)?4:H(e)?2:0;return x(e,t,n,s,i,o,r,!0)}function Xd(e){return e?Cl(e)||Wi in e?Re({},e):e:null}function Nn(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?Qd(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&tu(a),ref:t&&t.ref?n&&i?j(i)?i.concat(ai(t)):[i,ai(t)]:ai(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ct?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nn(e.ssContent),ssFallback:e.ssFallback&&Nn(e.ssFallback),el:e.el,anchor:e.anchor}}function Qt(e=" ",t=0){return ae(Mo,null,e,t)}function Yd(e="",t=!1){return t?(we(),eu(ln,null,e)):ae(ln,null,e)}function lt(e){return e==null||typeof e=="boolean"?ae(ln):j(e)?ae(ct,null,e.slice()):typeof e=="object"?Mt(e):ae(Mo,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nn(e)}function Lo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Lo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Wi in t)?t._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),s&64?(n=16,t=[Qt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qd(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=_o([t.class,s.class]));else if(i==="style")t.style=mo([t.style,s.style]);else if(Li(i)){const r=t[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function rt(e,t,n,s=null){et(e,t,7,[n,s])}const Zd=Yl();let ep=0;function tp(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Zd,r={uid:ep++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(s,i),emitsOptions:Ul(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ad.bind(null,r),e.ce&&e.ce(r),r}let me=null;const Mn=e=>{me=e,e.scope.on()},on=()=>{me&&me.scope.off(),me=null};function nu(e){return e.vnode.shapeFlag&4}let ms=!1;function np(e,t=!1){ms=t;const{props:n,children:s}=e.vnode,i=nu(e);Ud(e,n,i,t),$d(e,s);const r=i?sp(e,t):void 0;return ms=!1,r}function sp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ro(new Proxy(e.ctx,Pd));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?rp(e):null;Mn(e),jn();const r=Ft(s,e,0,[e.props,i]);if(Hn(),on(),hl(r)){if(r.then(on,on),t)return r.then(o=>{qa(e,o,t)}).catch(o=>{$i(o,e,0)});e.asyncDep=r}else qa(e,r,t)}else su(e,t)}function qa(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Ol(t)),su(e,n)}let Ga;function su(e,t,n){const s=e.type;if(!e.render){if(!t&&Ga&&!s.render){const i=s.template||Do(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Re(Re({isCustomElement:r,delimiters:a},o),c);s.render=Ga(i,l)}}e.render=s.render||Ze}Mn(e),jn(),Dd(e),Hn(),on()}function ip(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function rp(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=ip(e))},slots:e.slots,emit:e.emit,expose:t}}function zi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ol(Ro(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gi)return gi[n](e)}}))}function op(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ap(e){return H(e)&&"__vccOpts"in e}const Be=(e,t)=>td(e,t,ms);function iu(e,t,n){const s=arguments.length;return s===2?ce(t)&&!j(t)?Wr(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wr(n)&&(n=[n]),ae(e,t,n))}const cp="3.2.40",lp="http://www.w3.org/2000/svg",Zt=typeof document<"u"?document:null,Ja=Zt&&Zt.createElement("template"),up={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?Zt.createElementNS(lp,e):Zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ja.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ja.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hp(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function fp(e,t,n){const s=e.style,i=ve(n);if(n&&!i){for(const r in n)zr(s,r,n[r]);if(t&&!ve(t))for(const r in t)n[r]==null&&zr(s,r,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Xa=/\s*!important$/;function zr(e,t,n){if(j(n))n.forEach(s=>zr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=dp(e,t);Xa.test(n)?e.setProperty($n(s),n.replace(Xa,""),"important"):e[s]=n}}const Ya=["Webkit","Moz","ms"],pr={};function dp(e,t){const n=pr[t];if(n)return n;let s=gt(t);if(s!=="filter"&&s in e)return pr[t]=s;s=Fi(s);for(let i=0;i<Ya.length;i++){const r=Ya[i]+s;if(r in e)return pr[t]=r}return t}const Qa="http://www.w3.org/1999/xlink";function pp(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qa,t.slice(6,t.length)):e.setAttributeNS(Qa,t,n);else{const r=ff(t);n==null||r&&!cl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function gp(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=cl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[ru,mp]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Kr=0;const _p=Promise.resolve(),vp=()=>{Kr=0},yp=()=>Kr||(_p.then(vp),Kr=ru());function yn(e,t,n,s){e.addEventListener(t,n,s)}function Ep(e,t,n,s){e.removeEventListener(t,n,s)}function Ip(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,c]=wp(t);if(s){const l=r[t]=bp(s,i);yn(e,a,l,c)}else o&&(Ep(e,a,o,c),r[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function wp(e){let t;if(Za.test(e)){t={};let s;for(;s=e.match(Za);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}function bp(e,t){const n=s=>{const i=s.timeStamp||ru();(mp||i>=n.attached-1)&&et(Tp(s,n.value),t,5,[s])};return n.value=e,n.attached=yp(),n}function Tp(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const ec=/^on[a-z]/,Ap=(e,t,n,s,i=!1,r,o,a,c)=>{t==="class"?hp(e,s,i):t==="style"?fp(e,n,s):Li(t)?vo(t)||Ip(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cp(e,t,s,i))?gp(e,t,s,r,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),pp(e,t,s,i))};function Cp(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ec.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ec.test(t)&&ve(n)?!1:t in e}const tc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>si(t,n):t};function Sp(e){e.target.composing=!0}function nc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Sn={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=tc(i);const r=s||i.props&&i.props.type==="number";yn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Nr(a)),e._assign(a)}),n&&yn(e,"change",()=>{e.value=e.value.trim()}),t||(yn(e,"compositionstart",Sp),yn(e,"compositionend",nc),yn(e,"change",nc))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},r){if(e._assign=tc(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Nr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Rp=Re({patchProp:Ap},up);let sc;function kp(){return sc||(sc=Wd(Rp))}const Op=(...e)=>{const t=kp().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=Pp(s);if(!i)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Pp(e){return ve(e)?document.querySelector(e):e}var Dp=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Np=Symbol();var ic;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ic||(ic={}));function Mp(){const e=bf(!0),t=e.run(()=>He({}));let n=[],s=[];const i=Ro({install(r){i._a=r,r.provide(Np,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Dp?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const En=typeof window<"u";function Lp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function gr(e,t){const n={};for(const s in t){const i=t[s];n[s]=tt(i)?i.map(e):e(i)}return n}const as=()=>{},tt=Array.isArray,xp=/\/$/,Up=e=>e.replace(xp,"");function mr(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=jp(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Fp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Bp(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ln(t.matched[s],n.matched[i])&&ou(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ln(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ou(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$p(e[n],t[n]))return!1;return!0}function $p(e,t){return tt(e)?oc(e,t):tt(t)?oc(t,e):e===t}function oc(e,t){return tt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function jp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var _s;(function(e){e.pop="pop",e.push="push"})(_s||(_s={}));var cs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cs||(cs={}));function Hp(e){if(!e)if(En){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Up(e)}const Vp=/^[^#]+#/;function Wp(e,t){return e.replace(Vp,"#")+t}function zp(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kp(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=zp(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ac(e,t){return(history.state?history.state.position-t:-1)+e}const qr=new Map;function qp(e,t){qr.set(e,t)}function Gp(e){const t=qr.get(e);return qr.delete(e),t}let Jp=()=>location.protocol+"//"+location.host;function au(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),rc(c,"")}return rc(n,e)+s+i}function Xp(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const m=au(e,location),T=n.value,P=t.value;let L=0;if(p){if(n.value=m,t.value=p,o&&o===T){o=null;return}L=P?p.position-P.position:0}else s(m);i.forEach(R=>{R(n.value,T,{delta:L,type:_s.pop,direction:L?L>0?cs.forward:cs.back:cs.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const T=i.indexOf(p);T>-1&&i.splice(T,1)};return r.push(m),m}function u(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Ki()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function cc(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Ki():null}}function Yp(e){const{history:t,location:n}=window,s={value:au(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Jp()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Q({},t.state,cc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=Q({},i.value,t.state,{forward:c,scroll:Ki()});r(u.current,u,!0);const f=Q({},cc(s.value,c,null),{position:u.position+1},l);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function Qp(e){e=Hp(e);const t=Yp(e),n=Xp(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Q({location:"",base:e,go:s,createHref:Wp.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Zp(e){return typeof e=="string"||e&&typeof e=="object"}function cu(e){return typeof e=="string"||typeof e=="symbol"}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lu=Symbol("");var lc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lc||(lc={}));function xn(e,t){return Q(new Error,{type:e,[lu]:!0},t)}function vt(e,t){return e instanceof Error&&lu in e&&(t==null||!!(e.type&t))}const uc="[^/]+?",eg={sensitive:!1,strict:!1,start:!0,end:!0},tg=/[.+*?^${}()[\]/\\]/g;function ng(e,t){const n=Q({},eg,t),s=[];let i=n.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(tg,"\\$&"),m+=40;else if(p.type===1){const{value:T,repeatable:P,optional:L,regexp:R}=p;r.push({name:T,repeatable:P,optional:L});const $=R||uc;if($!==uc){m+=10;try{new RegExp(`(${$})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${T}" (${$}): `+X.message)}}let z=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(z=L&&l.length<2?`(?:/${z})`:"/"+z),L&&(z+="?"),i+=z,m+=20,L&&(m+=-8),P&&(m+=-20),$===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",T=r[p-1];f[T.name]=m&&T.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:T,repeatable:P,optional:L}=m,R=T in l?l[T]:"";if(tt(R)&&!P)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const $=tt(R)?R.join("/"):R;if(!$)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);u+=$}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function sg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ig(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=sg(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(hc(s))return 1;if(hc(i))return-1}return i.length-s.length}function hc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const rg={type:0,value:""},og=/[a-zA-Z0-9_]/;function ag(e){if(!e)return[[]];if(e==="/")return[[rg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function f(){!l||(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:og.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function cg(e,t,n){const s=ng(ag(e.path),n),i=Q(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function lg(e,t){const n=[],s=new Map;t=pc({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,f,p){const m=!p,T=ug(u);T.aliasOf=p&&p.record;const P=pc(t,u),L=[T];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of z)L.push(Q({},T,{components:p?p.record.components:T.components,path:X,aliasOf:p?p.record:T}))}let R,$;for(const z of L){const{path:X}=z;if(f&&X[0]!=="/"){const pe=f.record.path,ge=pe[pe.length-1]==="/"?"":"/";z.path=f.record.path+(X&&ge+X)}if(R=cg(z,f,P),p?p.alias.push(R):($=$||R,$!==R&&$.alias.push(R),m&&u.name&&!dc(R)&&o(u.name)),T.children){const pe=T.children;for(let ge=0;ge<pe.length;ge++)r(pe[ge],R,p&&p.children[ge])}p=p||R,c(R)}return $?()=>{o($)}:as}function o(u){if(cu(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&ig(u,n[f])>=0&&(u.record.path!==n[f].record.path||!uu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!dc(u)&&s.set(u.record.name,u)}function l(u,f){let p,m={},T,P;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw xn(1,{location:u});P=p.record.name,m=Q(fc(f.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params&&fc(u.params,p.keys.map($=>$.name))),T=p.stringify(m)}else if("path"in u)T=u.path,p=n.find($=>$.re.test(T)),p&&(m=p.parse(T),P=p.record.name);else{if(p=f.name?s.get(f.name):n.find($=>$.re.test(f.path)),!p)throw xn(1,{location:u,currentLocation:f});P=p.record.name,m=Q({},f.params,u.params),T=p.stringify(m)}const L=[];let R=p;for(;R;)L.unshift(R.record),R=R.parent;return{name:P,path:T,params:m,matched:L,meta:fg(L)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fc(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function ug(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function dc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fg(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function pc(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function uu(e,t){return t.children.some(n=>n===e||uu(e,n))}const hu=/#/g,dg=/&/g,pg=/\//g,gg=/=/g,mg=/\?/g,fu=/\+/g,_g=/%5B/g,vg=/%5D/g,du=/%5E/g,yg=/%60/g,pu=/%7B/g,Eg=/%7C/g,gu=/%7D/g,Ig=/%20/g;function xo(e){return encodeURI(""+e).replace(Eg,"|").replace(_g,"[").replace(vg,"]")}function wg(e){return xo(e).replace(pu,"{").replace(gu,"}").replace(du,"^")}function Gr(e){return xo(e).replace(fu,"%2B").replace(Ig,"+").replace(hu,"%23").replace(dg,"%26").replace(yg,"`").replace(pu,"{").replace(gu,"}").replace(du,"^")}function bg(e){return Gr(e).replace(gg,"%3D")}function Tg(e){return xo(e).replace(hu,"%23").replace(mg,"%3F")}function Ag(e){return e==null?"":Tg(e).replace(pg,"%2F")}function _i(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Cg(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(fu," "),o=r.indexOf("="),a=_i(o<0?r:r.slice(0,o)),c=o<0?null:_i(r.slice(o+1));if(a in t){let l=t[a];tt(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function gc(e){let t="";for(let n in e){const s=e[n];if(n=bg(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&Gr(r)):[s&&Gr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Sg(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Rg=Symbol(""),mc=Symbol(""),qi=Symbol(""),mu=Symbol(""),Jr=Symbol("");function Zn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Lt(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(xn(4,{from:n,to:t})):f instanceof Error?a(f):Zp(f)?a(xn(2,{from:t,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},l=e.call(s&&s.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function _r(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(kg(a)){const l=(a.__vccOpts||a)[t];l&&i.push(Lt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Lp(l)?l.default:l;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Lt(p,n,s,r,o)()}))}}return i}function kg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _c(e){const t=bt(qi),n=bt(mu),s=Be(()=>t.resolve(J(e.to))),i=Be(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Ln.bind(null,u));if(p>-1)return p;const m=vc(c[l-2]);return l>1&&vc(u)===m&&f[f.length-1].path!==m?f.findIndex(Ln.bind(null,c[l-2])):p}),r=Be(()=>i.value>-1&&Dg(n.params,s.value.params)),o=Be(()=>i.value>-1&&i.value===n.matched.length-1&&ou(n.params,s.value.params));function a(c={}){return Pg(c)?t[J(e.replace)?"replace":"push"](J(e.to)).catch(as):Promise.resolve()}return{route:s,href:Be(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Og=Vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_c,setup(e,{slots:t}){const n=Ss(_c(e)),{options:s}=bt(qi),i=Be(()=>({[yc(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yc(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:iu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Nt=Og;function Pg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Dg(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function vc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yc=(e,t,n)=>e!=null?e:t!=null?t:n,Ng=Vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=bt(Jr),i=Be(()=>e.route||s.value),r=bt(mc,0),o=Be(()=>{let l=J(r);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Be(()=>i.value.matched[o.value]);ii(mc,Be(()=>o.value+1)),ii(Rg,a),ii(Jr,i);const c=He();return ri(()=>[c.value,a.value,e.name],([l,u,f],[p,m,T])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Ln(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Ec(n.default,{Component:p,route:l});const m=f.props[u],T=m?m===!0?l.params:typeof m=="function"?m(l):m:null,L=iu(p,Q({},T,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ec(n.default,{Component:L,route:l})||L}}});function Ec(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _u=Ng;function Mg(e){const t=lg(e.routes,e),n=e.parseQuery||Cg,s=e.stringifyQuery||gc,i=e.history,r=Zn(),o=Zn(),a=Zn(),c=Yf(Pt);let l=Pt;En&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gr.bind(null,v=>""+v),f=gr.bind(null,Ag),p=gr.bind(null,_i);function m(v,S){let A,D;return cu(v)?(A=t.getRecordMatcher(v),D=S):D=v,t.addRoute(D,A)}function T(v){const S=t.getRecordMatcher(v);S&&t.removeRoute(S)}function P(){return t.getRoutes().map(v=>v.record)}function L(v){return!!t.getRecordMatcher(v)}function R(v,S){if(S=Q({},S||c.value),typeof v=="string"){const h=mr(n,v,S.path),d=t.resolve({path:h.path},S),g=i.createHref(h.fullPath);return Q(h,d,{params:p(d.params),hash:_i(h.hash),redirectedFrom:void 0,href:g})}let A;if("path"in v)A=Q({},v,{path:mr(n,v.path,S.path).path});else{const h=Q({},v.params);for(const d in h)h[d]==null&&delete h[d];A=Q({},v,{params:f(v.params)}),S.params=f(S.params)}const D=t.resolve(A,S),G=v.hash||"";D.params=u(p(D.params));const oe=Fp(s,Q({},v,{hash:wg(G),path:D.path})),V=i.createHref(oe);return Q({fullPath:oe,hash:G,query:s===gc?Sg(v.query):v.query||{}},D,{redirectedFrom:void 0,href:V})}function $(v){return typeof v=="string"?mr(n,v,c.value.path):Q({},v)}function z(v,S){if(l!==v)return xn(8,{from:S,to:v})}function X(v){return De(v)}function pe(v){return X(Q($(v),{replace:!0}))}function ge(v){const S=v.matched[v.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let D=typeof A=="function"?A(v):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=$(D):{path:D},D.params={}),Q({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function De(v,S){const A=l=R(v),D=c.value,G=v.state,oe=v.force,V=v.replace===!0,h=ge(A);if(h)return De(Q($(h),{state:typeof h=="object"?Q({},G,h.state):G,force:oe,replace:V}),S||A);const d=A;d.redirectedFrom=S;let g;return!oe&&Bp(s,D,A)&&(g=xn(16,{to:d,from:D}),Kt(D,D,!0,!1)),(g?Promise.resolve(g):nt(d,D)).catch(_=>vt(_)?vt(_,2)?_:qe(_):se(_,d,D)).then(_=>{if(_){if(vt(_,2))return De(Q({replace:V},$(_.to),{state:typeof _.to=="object"?Q({},G,_.to.state):G,force:oe}),S||d)}else _=kt(d,D,!0,V,G);return Fe(d,D,_),_})}function Ke(v,S){const A=z(v,S);return A?Promise.reject(A):Promise.resolve()}function nt(v,S){let A;const[D,G,oe]=Lg(v,S);A=_r(D.reverse(),"beforeRouteLeave",v,S);for(const h of D)h.leaveGuards.forEach(d=>{A.push(Lt(d,v,S))});const V=Ke.bind(null,v,S);return A.push(V),vn(A).then(()=>{A=[];for(const h of r.list())A.push(Lt(h,v,S));return A.push(V),vn(A)}).then(()=>{A=_r(G,"beforeRouteUpdate",v,S);for(const h of G)h.updateGuards.forEach(d=>{A.push(Lt(d,v,S))});return A.push(V),vn(A)}).then(()=>{A=[];for(const h of v.matched)if(h.beforeEnter&&!S.matched.includes(h))if(tt(h.beforeEnter))for(const d of h.beforeEnter)A.push(Lt(d,v,S));else A.push(Lt(h.beforeEnter,v,S));return A.push(V),vn(A)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),A=_r(oe,"beforeRouteEnter",v,S),A.push(V),vn(A))).then(()=>{A=[];for(const h of o.list())A.push(Lt(h,v,S));return A.push(V),vn(A)}).catch(h=>vt(h,8)?h:Promise.reject(h))}function Fe(v,S,A){for(const D of a.list())D(v,S,A)}function kt(v,S,A,D,G){const oe=z(v,S);if(oe)return oe;const V=S===Pt,h=En?history.state:{};A&&(D||V?i.replace(v.fullPath,Q({scroll:V&&h&&h.scroll},G)):i.push(v.fullPath,G)),c.value=v,Kt(v,S,A,V),qe()}let st;function gn(){st||(st=i.listen((v,S,A)=>{if(!Ks.listening)return;const D=R(v),G=ge(D);if(G){De(Q(G,{replace:!0}),D).catch(as);return}l=D;const oe=c.value;En&&qp(ac(oe.fullPath,A.delta),Ki()),nt(D,oe).catch(V=>vt(V,12)?V:vt(V,2)?(De(V.to,D).then(h=>{vt(h,20)&&!A.delta&&A.type===_s.pop&&i.go(-1,!1)}).catch(as),Promise.reject()):(A.delta&&i.go(-A.delta,!1),se(V,D,oe))).then(V=>{V=V||kt(D,oe,!1),V&&(A.delta&&!vt(V,8)?i.go(-A.delta,!1):A.type===_s.pop&&vt(V,20)&&i.go(-1,!1)),Fe(D,oe,V)}).catch(as)}))}let zt=Zn(),Xn=Zn(),ue;function se(v,S,A){qe(v);const D=Xn.list();return D.length?D.forEach(G=>G(v,S,A)):console.error(v),Promise.reject(v)}function ee(){return ue&&c.value!==Pt?Promise.resolve():new Promise((v,S)=>{zt.add([v,S])})}function qe(v){return ue||(ue=!v,gn(),zt.list().forEach(([S,A])=>v?A(v):S()),zt.reset()),v}function Kt(v,S,A,D){const{scrollBehavior:G}=e;if(!En||!G)return Promise.resolve();const oe=!A&&Gp(ac(v.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Nl().then(()=>G(v,S,oe)).then(V=>V&&Kp(V)).catch(V=>se(V,v,S))}const Ge=v=>i.go(v);let ke;const mn=new Set,Ks={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,hasRoute:L,getRoutes:P,resolve:R,options:e,push:X,replace:pe,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Xn.add,isReady:ee,install(v){const S=this;v.component("RouterLink",Nt),v.component("RouterView",_u),v.config.globalProperties.$router=S,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>J(c)}),En&&!ke&&c.value===Pt&&(ke=!0,X(i.location).catch(G=>{}));const A={};for(const G in Pt)A[G]=Be(()=>c.value[G]);v.provide(qi,S),v.provide(mu,Ss(A)),v.provide(Jr,c);const D=v.unmount;mn.add(v),v.unmount=function(){mn.delete(v),mn.size<1&&(l=Pt,st&&st(),st=null,c.value=Pt,ke=!1,ue=!1),D()}}};return Ks}function vn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Lg(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>Ln(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Ln(l,c))||i.push(c))}return[n,s,i]}function Rs(){return bt(qi)}/**
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
 */const vu=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xg=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||f==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const T=l<<6&192|f;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ug=function(e){const t=vu(e);return yu.encodeByteArray(t,!0)},vi=function(e){return Ug(e).replace(/\./g,"")},Eu=function(e){try{return yu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Bg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jg(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hg(){return typeof indexedDB=="object"}function Vg(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function Wg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zg=()=>Wg().__FIREBASE_DEFAULTS__,Kg=()=>{if(typeof process>"u")return;const e=process.env.__FIREBASE_DEFAULTS__,t=process.env.__FIREBASE_DEFAULTS_PATH__;if(e)return t&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(e);if(t&&typeof require<"u")try{return require(t)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${t}`)}},qg=()=>{if(typeof document>"u")return;const e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),t=e&&Eu(e[1]);return t&&JSON.parse(t)},Uo=()=>zg()||Kg()||qg(),Iu=e=>{var t,n;return(n=(t=Uo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Gg=()=>{var e;return(e=Uo())===null||e===void 0?void 0:e.config},wu=e=>{var t;return(t=Uo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Xg(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[vi(JSON.stringify(n)),vi(JSON.stringify(o)),a].join(".")}/**
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
 */const Yg="FirebaseError";class Rt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Yg,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Qg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,s)}}function Qg(e,t){return e.replace(Zg,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Zg=/\{\$([^}]+)}/g;function em(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function yi(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Ic(r)&&Ic(o)){if(!yi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ic(e){return e!==null&&typeof e=="object"}/**
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
 */function Os(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ns(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function ss(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function tm(e,t){const n=new nm(e,t);return n.subscribe.bind(n)}class nm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=vr),i.error===void 0&&(i.error=vr),i.complete===void 0&&(i.complete=vr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vr(){}/**
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
 */function mt(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class im{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Jg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(om(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rm(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(e){return e===Xt?void 0:e}function om(e){return e.instantiationMode==="EAGER"}/**
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
 */class am{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new im(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Z||(Z={}));const cm={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},lm=Z.INFO,um={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},hm=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=um[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fo{constructor(t){this.name=t,this._logLevel=lm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const fm=(e,t)=>t.some(n=>e instanceof n);let wc,bc;function dm(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pm(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bu=new WeakMap,Xr=new WeakMap,Tu=new WeakMap,yr=new WeakMap,Bo=new WeakMap;function gm(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Bt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&bu.set(n,e)}).catch(()=>{}),Bo.set(t,e),t}function mm(e){if(Xr.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Xr.set(e,t)}let Yr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Tu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _m(e){Yr=e(Yr)}function vm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Er(this),t,...n);return Tu.set(s,t.sort?t.sort():[t]),Bt(s)}:pm().includes(e)?function(...t){return e.apply(Er(this),t),Bt(bu.get(this))}:function(...t){return Bt(e.apply(Er(this),t))}}function ym(e){return typeof e=="function"?vm(e):(e instanceof IDBTransaction&&mm(e),fm(e,dm())?new Proxy(e,Yr):e)}function Bt(e){if(e instanceof IDBRequest)return gm(e);if(yr.has(e))return yr.get(e);const t=ym(e);return t!==e&&(yr.set(e,t),Bo.set(t,e)),t}const Er=e=>Bo.get(e);function Em(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Bt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Im=["get","getKey","getAll","getAllKeys","count"],wm=["put","add","delete","clear"],Ir=new Map;function Tc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=wm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ir.set(t,r),r}_m(e=>({...e,get:(t,n,s)=>Tc(t,n)||e.get(t,n,s),has:(t,n)=>!!Tc(t,n)||e.has(t,n)}));/**
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
 */class bm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qr="@firebase/app",Ac="0.8.0";/**
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
 */const hn=new Fo("@firebase/app"),Am="@firebase/app-compat",Cm="@firebase/analytics-compat",Sm="@firebase/analytics",Rm="@firebase/app-check-compat",km="@firebase/app-check",Om="@firebase/auth",Pm="@firebase/auth-compat",Dm="@firebase/database",Nm="@firebase/database-compat",Mm="@firebase/functions",Lm="@firebase/functions-compat",xm="@firebase/installations",Um="@firebase/installations-compat",Fm="@firebase/messaging",Bm="@firebase/messaging-compat",$m="@firebase/performance",jm="@firebase/performance-compat",Hm="@firebase/remote-config",Vm="@firebase/remote-config-compat",Wm="@firebase/storage",zm="@firebase/storage-compat",Km="@firebase/firestore",qm="@firebase/firestore-compat",Gm="firebase",Jm="9.11.0";/**
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
 */const Zr="[DEFAULT]",Xm={[Qr]:"fire-core",[Am]:"fire-core-compat",[Sm]:"fire-analytics",[Cm]:"fire-analytics-compat",[km]:"fire-app-check",[Rm]:"fire-app-check-compat",[Om]:"fire-auth",[Pm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Nm]:"fire-rtdb-compat",[Mm]:"fire-fn",[Lm]:"fire-fn-compat",[xm]:"fire-iid",[Um]:"fire-iid-compat",[Fm]:"fire-fcm",[Bm]:"fire-fcm-compat",[$m]:"fire-perf",[jm]:"fire-perf-compat",[Hm]:"fire-rc",[Vm]:"fire-rc-compat",[Wm]:"fire-gcs",[zm]:"fire-gcs-compat",[Km]:"fire-fst",[qm]:"fire-fst-compat","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const Ei=new Map,eo=new Map;function Ym(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Un(e){const t=e.name;if(eo.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;eo.set(t,e);for(const n of Ei.values())Ym(n,e);return!0}function $o(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Qm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new ks("app","Firebase",Qm);/**
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
 */class Zm{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=Jm;function Au(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=Gg()),!n)throw $t.create("no-options");const r=Ei.get(i);if(r){if(yi(n,r.options)&&yi(s,r.config))return r;throw $t.create("duplicate-app",{appName:i})}const o=new am(i);for(const c of eo.values())o.addComponent(c);const a=new Zm(n,s,o);return Ei.set(i,a),a}function Cu(e=Zr){const t=Ei.get(e);if(!t&&e===Zr)return Au();if(!t)throw $t.create("no-app",{appName:e});return t}function jt(e,t,n){var s;let i=(s=Xm[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Un(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const e_="firebase-heartbeat-database",t_=1,vs="firebase-heartbeat-store";let wr=null;function Su(){return wr||(wr=Em(e_,t_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vs)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),wr}async function n_(e){var t;try{return(await Su()).transaction(vs).objectStore(vs).get(Ru(e))}catch(n){if(n instanceof Rt)hn.warn(n.message);else{const s=$t.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});hn.warn(s.message)}}}async function Cc(e,t){var n;try{const i=(await Su()).transaction(vs,"readwrite");return await i.objectStore(vs).put(t,Ru(e)),i.done}catch(s){if(s instanceof Rt)hn.warn(s.message);else{const i=$t.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});hn.warn(i.message)}}}function Ru(e){return`${e.name}!${e.options.appId}`}/**
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
 */const s_=1024,i_=30*24*60*60*1e3;class r_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=i_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sc(),{heartbeatsToSend:n,unsentEntries:s}=o_(this._heartbeatsCache.heartbeats),i=vi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sc(){return new Date().toISOString().substring(0,10)}function o_(e,t=s_){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Rc(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rc(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class a_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?Vg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rc(e){return vi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function c_(e){Un(new un("platform-logger",t=>new bm(t),"PRIVATE")),Un(new un("heartbeat",t=>new r_(t),"PRIVATE")),jt(Qr,Ac,e),jt(Qr,Ac,"esm2017"),jt("fire-js","")}c_("");function jo(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=ku,Ou=new ks("auth","Firebase",ku());/**
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
 */const kc=new Fo("@firebase/auth");function ci(e,...t){kc.logLevel<=Z.ERROR&&kc.error(`Auth (${Ps}): ${e}`,...t)}/**
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
 */function We(e,...t){throw Ho(e,...t)}function dt(e,...t){return Ho(e,...t)}function Pu(e,t,n){const s=Object.assign(Object.assign({},l_()),{[t]:n});return new ks("auth","Firebase",s).create(t,{appName:e.name})}function u_(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&We(e,"argument-error"),Pu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ho(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Ou.create(e,...t)}function U(e,t,...n){if(!e)throw Ho(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ci(t),new Error(t)}function At(e,t){e||Et(t)}/**
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
 */const Oc=new Map;function It(e){At(e instanceof Function,"Expected a class definition");let t=Oc.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Oc.set(e,t),t)}/**
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
 */function h_(e,t){const n=$o(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(yi(r,t!=null?t:{}))return i;We(i,"already-initialized")}return n.initialize({options:t})}function f_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function to(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function d_(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function p_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||Bg()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ds{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=Fg()||$g()}get(){return p_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vo(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Du{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const __=new Ds(3e4,6e4);function Ns(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wn(e,t,n,s,i={}){return Nu(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Os(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Du.fetch()(Mu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function Nu(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},m_),t);try{const i=new v_(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qs(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qs(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Pu(e,u,l);We(e,u)}}catch(i){if(i instanceof Rt)throw i;We(e,"network-request-failed")}}async function Ms(e,t,n,s,i={}){const r=await Wn(e,t,n,s,i);return"mfaPendingCredential"in r&&We(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Mu(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?Vo(e.config,i):`${e.config.apiScheme}://${i}`}class v_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dt(this.auth,"network-request-failed")),__.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qs(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=dt(e,t,s);return i.customData._tokenResponse=n,i}/**
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
 */async function y_(e,t){return Wn(e,"POST","/v1/accounts:delete",t)}async function E_(e,t){return Wn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ls(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function I_(e,t=!1){const n=mt(e),s=await n.getIdToken(t),i=Wo(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ls(br(i.auth_time)),issuedAtTime:ls(br(i.iat)),expirationTime:ls(br(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function br(e){return Number(e)*1e3}function Wo(e){var t;const[n,s,i]=e.split(".");if(n===void 0||s===void 0||i===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const r=Eu(s);return r?JSON.parse(r):(ci("Failed to decode base64 JWT payload"),null)}catch(r){return ci("Caught error parsing JWT payload as JSON",(t=r)===null||t===void 0?void 0:t.toString()),null}}function w_(e){const t=Wo(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fn(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Rt&&b_(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function b_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class T_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(e){var t;const n=e.auth,s=await e.getIdToken(),i=await Fn(e,E_(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?S_(r.providerUserInfo):[],a=C_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Lu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function A_(e){const t=mt(e);await Ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function C_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function S_(e){return e.map(t=>{var{providerId:n}=t,s=jo(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function R_(e,t){const n=await Nu(e,{},async()=>{const s=Os({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=Mu(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Du.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):w_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await R_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ys;return s&&(U(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Dt(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class an{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=jo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return I_(this,t)}reload(){return A_(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new an(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fn(this,y_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:X,isAnonymous:pe,providerData:ge,stsTokenManager:De}=n;U(z&&De,t,"internal-error");const Ke=ys.fromJSON(this.name,De);U(typeof z=="string",t,"internal-error"),Dt(f,t.name),Dt(p,t.name),U(typeof X=="boolean",t,"internal-error"),U(typeof pe=="boolean",t,"internal-error"),Dt(m,t.name),Dt(T,t.name),Dt(P,t.name),Dt(L,t.name),Dt(R,t.name),Dt($,t.name);const nt=new an({uid:z,auth:t,email:p,emailVerified:X,displayName:f,isAnonymous:pe,photoURL:T,phoneNumber:m,tenantId:P,stsTokenManager:Ke,createdAt:R,lastLoginAt:$});return ge&&Array.isArray(ge)&&(nt.providerData=ge.map(Fe=>Object.assign({},Fe))),L&&(nt._redirectEventId=L),nt}static async _fromIdTokenResponse(t,n,s=!1){const i=new ys;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Ii(r),r}}/**
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
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xu.type="NONE";const Dc=xu;/**
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
 */function li(e,t,n){return`firebase:${e}:${t}:${n}`}class Rn{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=li(this.userKey,i.apiKey,r),this.fullPersistenceKey=li("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?an._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Rn(It(Dc),t,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||It(Dc);const o=li(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=an._fromJSON(t,u);l!==r&&(a=f),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Rn(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Rn(r,t,s))}}/**
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
 */function Nc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ju(t))return"Blackberry";if(Hu(t))return"Webos";if(zo(t))return"Safari";if((t.includes("chrome/")||Fu(t))&&!t.includes("edge/"))return"Chrome";if($u(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uu(e=Ae()){return/firefox\//i.test(e)}function zo(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fu(e=Ae()){return/crios\//i.test(e)}function Bu(e=Ae()){return/iemobile/i.test(e)}function $u(e=Ae()){return/android/i.test(e)}function ju(e=Ae()){return/blackberry/i.test(e)}function Hu(e=Ae()){return/webos/i.test(e)}function Gi(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function k_(e=Ae()){var t;return Gi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function O_(){return jg()&&document.documentMode===10}function Vu(e=Ae()){return Gi(e)||$u(e)||Hu(e)||ju(e)||/windows phone/i.test(e)||Bu(e)}function P_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wu(e,t=[]){let n;switch(e){case"Browser":n=Nc(Ae());break;case"Worker":n=`${Nc(Ae())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${s}`}/**
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
 */class D_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const s=[];try{for(const i of this.queue)await i(t),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class N_{constructor(t,n,s){this.app=t,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mc(this),this.idTokenSubscription=new Mc(this),this.beforeStateQueue=new D_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ou,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Ii(t)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?mt(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ks("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,s,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function zn(e){return mt(e)}class Mc{constructor(t){this.auth=t,this.observer=null,this.addObserver=tm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function M_(e,t,n){const s=zn(e);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=zu(t),{host:o,port:a}=L_(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x_()}function zu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function L_(e){const t=zu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Lc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Lc(o)}}}function Lc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function x_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ko{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function U_(e,t){return Wn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function F_(e,t){return Ms(e,"POST","/v1/accounts:signInWithPassword",Ns(e,t))}/**
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
 */async function B_(e,t){return Ms(e,"POST","/v1/accounts:signInWithEmailLink",Ns(e,t))}async function $_(e,t){return Ms(e,"POST","/v1/accounts:signInWithEmailLink",Ns(e,t))}/**
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
 */class Es extends Ko{constructor(t,n,s,i=null){super("password",s),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Es(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Es(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return F_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return B_(t,{email:this._email,oobCode:this._password});default:We(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return U_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $_(t,{idToken:n,email:this._email,oobCode:this._password});default:We(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function kn(e,t){return Ms(e,"POST","/v1/accounts:signInWithIdp",Ns(e,t))}/**
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
 */const j_="http://localhost";class fn extends Ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=jo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new fn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,kn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}buildRequest(){const t={requestUri:j_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Os(n)}return t}}/**
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
 */function H_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V_(e){const t=ns(ss(e)).link,n=t?ns(ss(t)).deep_link_id:null,s=ns(ss(e)).deep_link_id;return(s?ns(ss(s)).link:null)||s||n||t||e}class qo{constructor(t){var n,s,i,r,o,a;const c=ns(ss(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=H_((i=c.mode)!==null&&i!==void 0?i:null);U(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=V_(t);try{return new qo(n)}catch{return null}}}/**
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
 */class Kn{constructor(){this.providerId=Kn.PROVIDER_ID}static credential(t,n){return Es._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=qo.parseLink(n);return U(s,"argument-error"),Es._fromEmailAndCode(t,s.code,s.tenantId)}}Kn.PROVIDER_ID="password";Kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends Go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends Ls{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class $e extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return $e.credential(n,s)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
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
 */class je extends Ls{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return je.credentialFromTaggedObject(t)}static credentialFromError(t){return je.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return je.credential(t.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
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
 */class ht extends Ls{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ht.credentialFromTaggedObject(t)}static credentialFromError(t){return ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */async function W_(e,t){return Ms(e,"POST","/v1/accounts:signUp",Ns(e,t))}/**
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
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await an._fromIdTokenResponse(t,s,i),o=xc(s);return new dn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=xc(s);return new dn({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function xc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class wi extends Rt{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new wi(t,n,s,i)}}function Ku(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(e,r,t,s):r})}async function z_(e,t,n=!1){const s=await Fn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",s)}/**
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
 */async function K_(e,t,n=!1){var s;const{auth:i}=e,r="reauthenticate";try{const o=await Fn(e,Ku(i,r,t,e),n);U(o.idToken,i,"internal-error");const a=Wo(o.idToken);U(a,i,"internal-error");const{sub:c}=a;return U(e.uid===c,i,"user-mismatch"),dn._forOperation(e,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&We(i,"user-mismatch"),o}}/**
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
 */async function qu(e,t,n=!1){const s="signIn",i=await Ku(e,s,t),r=await dn._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function q_(e,t){return qu(zn(e),t)}async function G_(e,t,n){const s=zn(e),i=await W_(s,{returnSecureToken:!0,email:t,password:n}),r=await dn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function J_(e,t,n){return q_(mt(e),Kn.credential(t,n))}/**
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
 */async function X_(e,t){return Wn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Y_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const s=mt(e),r={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Fn(s,X_(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Q_(e,t,n,s){return mt(e).onIdTokenChanged(t,n,s)}function Z_(e,t,n){return mt(e).beforeAuthStateChanged(t,n)}function Gu(e,t,n,s){return mt(e).onAuthStateChanged(t,n,s)}function ev(e){return mt(e).signOut()}const bi="__sak";/**
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
 */class Ju{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tv(){const e=Ae();return zo(e)||Gi(e)}const nv=1e3,sv=10;class Xu extends Ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tv()&&P_(),this.fallbackToPolling=Vu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);O_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,sv):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xu.type="LOCAL";const iv=Xu;/**
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
 */class Yu extends Ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Yu.type="SESSION";const Qu=Yu;/**
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
 */function rv(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ji{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new Ji(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await rv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ji.receivers=[];/**
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
 */function Jo(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ov{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Jo("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pt(){return window}function av(e){pt().location.href=e}/**
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
 */function Zu(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function cv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function uv(){return Zu()?self:null}/**
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
 */const eh="firebaseLocalStorageDb",hv=1,Ti="firebaseLocalStorage",th="fbase_key";class xs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xi(e,t){return e.transaction([Ti],t?"readwrite":"readonly").objectStore(Ti)}function fv(){const e=indexedDB.deleteDatabase(eh);return new xs(e).toPromise()}function no(){const e=indexedDB.open(eh,hv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Ti,{keyPath:th})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Ti)?t(s):(s.close(),await fv(),t(await no()))})})}async function Uc(e,t,n){const s=Xi(e,!0).put({[th]:t,value:n});return new xs(s).toPromise()}async function dv(e,t){const n=Xi(e,!1).get(t),s=await new xs(n).toPromise();return s===void 0?null:s.value}function Fc(e,t){const n=Xi(e,!0).delete(t);return new xs(n).toPromise()}const pv=800,gv=3;class nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await no(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>gv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ji._getInstance(uv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await cv(),!this.activeServiceWorker)return;this.sender=new ov(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((t=s[0])===null||t===void 0?void 0:t.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await no();return await Uc(t,bi,"1"),await Fc(t,bi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uc(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>dv(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Xi(i,!1).getAll();return new xs(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nh.type="LOCAL";const mv=nh;/**
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
 */function _v(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function vv(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=dt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",_v().appendChild(s)})}function yv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ds(3e4,6e4);/**
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
 */function sh(e,t){return t?It(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Xo extends Ko{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ev(e){return qu(e.auth,new Xo(e),e.bypassAuthState)}function Iv(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),K_(n,new Xo(e),e.bypassAuthState)}async function wv(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),z_(n,new Xo(e),e.bypassAuthState)}/**
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
 */class ih{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ev;case"linkViaPopup":case"linkViaRedirect":return wv;case"reauthViaPopup":case"reauthViaRedirect":return Iv;default:We(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bv=new Ds(2e3,1e4);async function On(e,t,n){const s=zn(e);u_(e,t,Go);const i=sh(s,n);return new tn(s,"signInViaPopup",t,i).executeNotNull()}class tn extends ih{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,bv.get())};t()}}tn.currentPopupAction=null;/**
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
 */const Tv="pendingRedirect",ui=new Map;class Av extends ih{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=ui.get(this.auth._key());if(!t){try{const s=await Cv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}ui.set(this.auth._key(),t)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cv(e,t){const n=kv(t),s=Rv(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Sv(e,t){ui.set(e._key(),t)}function Rv(e){return It(e._redirectPersistence)}function kv(e){return li(Tv,e.config.apiKey,e.name)}async function Ov(e,t,n=!1){const s=zn(e),i=sh(s,t),o=await new Av(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const Pv=10*60*1e3;class Dv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Nv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!rh(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bc(t))}saveEventToCache(t){this.cachedEventUids.add(Bc(t)),this.lastProcessedEventTime=Date.now()}}function Bc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function rh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Nv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rh(e);default:return!1}}/**
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
 */async function Mv(e,t={}){return Wn(e,"GET","/v1/projects",t)}/**
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
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xv=/^https?/;async function Uv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Mv(e);for(const n of t)try{if(Fv(n))return}catch{}We(e,"unauthorized-domain")}function Fv(e){const t=to(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xv.test(n))return!1;if(Lv.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Bv=new Ds(3e4,6e4);function $c(){const e=pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function $v(e){return new Promise((t,n)=>{var s,i,r;function o(){$c(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$c(),n(dt(e,"network-request-failed"))},timeout:Bv.get()})}if(!((i=(s=pt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=pt().gapi)===null||r===void 0)&&r.load)o();else{const a=yv("iframefcb");return pt()[a]=()=>{gapi.load?o():n(dt(e,"network-request-failed"))},vv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw hi=null,t})}let hi=null;function jv(e){return hi=hi||$v(e),hi}/**
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
 */const Hv=new Ds(5e3,15e3),Vv="__/auth/iframe",Wv="emulator/auth/iframe",zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qv(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vo(t,Wv):`https://${e.config.authDomain}/${Vv}`,s={apiKey:t.apiKey,appName:e.name,v:Ps},i=Kv.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Os(s).slice(1)}`}async function Gv(e){const t=await jv(e),n=pt().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:qv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=dt(e,"network-request-failed"),a=pt().setTimeout(()=>{r(o)},Hv.get());function c(){pt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Jv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xv=500,Yv=600,Qv="_blank",Zv="http://localhost";class jc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ey(e,t,n,s=Xv,i=Yv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jv),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ae().toLowerCase();n&&(a=Fu(l)?Qv:n),Uu(l)&&(t=t||Zv,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,T])=>`${p}${m}=${T},`,"");if(k_(l)&&a!=="_self")return ty(t||"",a),new jc(null);const f=window.open(t||"",a,u);U(f,e,"popup-blocked");try{f.focus()}catch{}return new jc(f)}function ty(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ny="__/auth/handler",sy="emulator/auth/handler";function Hc(e,t,n,s,i,r){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Ps,eventId:i};if(t instanceof Go){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",em(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(t instanceof Ls){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${iy(e)}?${Os(a).slice(1)}`}function iy({config:e}){return e.emulator?Vo(e,sy):`https://${e.authDomain}/${ny}`}/**
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
 */const Tr="webStorageSupport";class ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qu,this._completeRedirectFn=Ov,this._overrideRedirectResult=Sv}async _openPopup(t,n,s,i){var r;At((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Hc(t,n,s,to(),i);return ey(t,o,Jo())}async _openRedirect(t,n,s,i){return await this._originValidation(t),av(Hc(t,n,s,to(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(At(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Gv(t),s=new Dv(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Tr,{type:Tr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Tr];o!==void 0&&n(!!o),We(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vu()||zo()||Gi()}}const oy=ry;var Vc="@firebase/auth",Wc="0.20.8";/**
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
 */class ay{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{var i;t(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ly(e){Un(new un("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{U(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wu(e)},u=new N_(a,c,l);return f_(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Un(new un("auth-internal",t=>{const n=zn(t.getProvider("auth").getImmediate());return(s=>new ay(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Vc,Wc,cy(e)),jt(Vc,Wc,"esm2017")}/**
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
 */const uy=5*60,hy=wu("authIdTokenMaxAge")||uy;let zc=null;const fy=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hy)return;const i=n==null?void 0:n.token;zc!==i&&(zc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dy(e=Cu()){const t=$o(e,"auth");if(t.isInitialized())return t.getImmediate();const n=h_(e,{popupRedirectResolver:oy,persistence:[mv,iv,Qu]}),s=wu("authTokenSyncURL");if(s){const r=fy(s);Z_(n,r,()=>r(n.currentUser)),Q_(n,o=>r(o))}const i=Iu("auth");return i&&M_(n,`http://${i}`),n}ly("Browser");var py="firebase",gy="9.11.0";/**
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
 */jt(py,gy,"app");var my=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Yo=Yo||{},F=my||self;function Ai(){}function Yi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Us(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _y(e){return Object.prototype.hasOwnProperty.call(e,Ar)&&e[Ar]||(e[Ar]=++vy)}var Ar="closure_uid_"+(1e9*Math.random()>>>0),vy=0;function yy(e,t,n){return e.call.apply(e.bind,arguments)}function Ey(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function be(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=yy:be=Ey,be.apply(null,arguments)}function Zs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function ye(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Vt(){this.s=this.s,this.o=this.o}var Iy=0;Vt.prototype.s=!1;Vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Iy!=0)&&_y(this)};Vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qo(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Kc(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Yi(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var wy=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{F.addEventListener("test",Ai,t),F.removeEventListener("test",Ai,t)}catch{}return e}();function Ci(e){return/^[\s\xa0]*$/.test(e)}var qc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Cr(e,t){return e<t?-1:e>t?1:0}function Qi(){var e=F.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return Qi().indexOf(e)!=-1}function Zo(e){return Zo[" "](e),e}Zo[" "]=Ai;function by(e){var t=Cy;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ty=ft("Opera"),Is=ft("Trident")||ft("MSIE"),ah=ft("Edge"),so=ah||Is,ch=ft("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),Ay=Qi().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function lh(){var e=F.document;return e?e.documentMode:void 0}var io;e:{var Sr="",Rr=function(){var e=Qi();if(ch)return/rv:([^\);]+)(\)|;)/.exec(e);if(ah)return/Edge\/([\d\.]+)/.exec(e);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ay)return/WebKit\/(\S+)/.exec(e);if(Ty)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Rr&&(Sr=Rr?Rr[1]:""),Is){var kr=lh();if(kr!=null&&kr>parseFloat(Sr)){io=String(kr);break e}}io=Sr}var Cy={};function Sy(){return by(function(){let e=0;const t=qc(String(io)).split("."),n=qc("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Cr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Cr(i[2].length==0,r[2].length==0)||Cr(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}F.document&&Is&&lh();function ws(e,t){if(Te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ch){e:{try{Zo(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ry[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ws.X.h.call(this)}}ye(ws,Te);var Ry={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Fs="closure_listenable_"+(1e6*Math.random()|0),ky=0;function Oy(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++ky,this.ba=this.ea=!1}function Zi(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ea(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function uh(e){const t={};for(const n in e)t[n]=e[n];return t}const Gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hh(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Gc.length;r++)n=Gc[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function er(e){this.src=e,this.g={},this.h=0}er.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=oo(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Oy(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function ro(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=oh(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Zi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function oo(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ta="closure_lm_"+(1e6*Math.random()|0),Or={};function fh(e,t,n,s,i){if(s&&s.once)return ph(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)fh(e,t[r],n,s,i);return null}return n=ia(n),e&&e[Fs]?e.N(t,n,Us(s)?!!s.capture:!!s,i):dh(e,t,n,!1,s,i)}function dh(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Us(i)?!!i.capture:!!i,a=sa(e);if(a||(e[ta]=a=new er(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Py(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)wy||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(mh(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Py(){function e(n){return t.call(e.src,e.listener,n)}const t=Dy;return e}function ph(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ph(e,t[r],n,s,i);return null}return n=ia(n),e&&e[Fs]?e.O(t,n,Us(s)?!!s.capture:!!s,i):dh(e,t,n,!0,s,i)}function gh(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)gh(e,t[r],n,s,i);else s=Us(s)?!!s.capture:!!s,n=ia(n),e&&e[Fs]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=oo(r,n,s,i),-1<n&&(Zi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=sa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oo(t,n,s,i)),(n=-1<e?t[e]:null)&&na(n))}function na(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Fs])ro(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(mh(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=sa(t))?(ro(n,e),n.h==0&&(n.src=null,t[ta]=null)):Zi(e)}}}function mh(e){return e in Or?Or[e]:Or[e]="on"+e}function Dy(e,t){if(e.ba)e=!0;else{t=new ws(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&na(e),e=n.call(s,t)}return e}function sa(e){return e=e[ta],e instanceof er?e:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(e){return typeof e=="function"?e:(e[Pr]||(e[Pr]=function(t){return e.handleEvent(t)}),e[Pr])}function de(){Vt.call(this),this.i=new er(this),this.P=this,this.I=null}ye(de,Vt);de.prototype[Fs]=!0;de.prototype.removeEventListener=function(e,t,n,s){gh(this,e,t,n,s)};function _e(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Te(t,e);else if(t instanceof Te)t.target=t.target||e;else{var i=t;t=new Te(s,e),hh(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ei(o,s,!0,t)&&i}if(o=t.g=e,i=ei(o,s,!0,t)&&i,i=ei(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ei(o,s,!1,t)&&i}de.prototype.M=function(){if(de.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Zi(n[s]);delete e.g[t],e.h--}}this.I=null};de.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};de.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ei(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ro(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ra=F.JSON.stringify;function Ny(){var e=yh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class My{constructor(){this.h=this.g=null}add(t,n){const s=_h.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var _h=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ly,e=>e.reset());class Ly{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xy(e){F.setTimeout(()=>{throw e},0)}function vh(e,t){ao||Uy(),co||(ao(),co=!0),yh.add(e,t)}var ao;function Uy(){var e=F.Promise.resolve(void 0);ao=function(){e.then(Fy)}}var co=!1,yh=new My;function Fy(){for(var e;e=Ny();){try{e.h.call(e.g)}catch(n){xy(n)}var t=_h;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}co=!1}function tr(e,t){de.call(this),this.h=e||1,this.g=t||F,this.j=be(this.kb,this),this.l=Date.now()}ye(tr,de);O=tr.prototype;O.ca=!1;O.R=null;O.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_e(this,"tick"),this.ca&&(oa(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oa(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}O.M=function(){tr.X.M.call(this),oa(this),delete this.g};function aa(e,t,n){if(typeof e=="function")n&&(e=be(e,n));else if(e&&typeof e.handleEvent=="function")e=be(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(e,t||0)}function Eh(e){e.g=aa(()=>{e.g=null,e.i&&(e.i=!1,Eh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class By extends Vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Eh(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(e){Vt.call(this),this.h=e,this.g={}}ye(bs,Vt);var Jc=[];function Ih(e,t,n,s){Array.isArray(n)||(n&&(Jc[0]=n.toString()),n=Jc);for(var i=0;i<n.length;i++){var r=fh(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function wh(e){ea(e.g,function(t,n){this.g.hasOwnProperty(n)&&na(t)},e),e.g={}}bs.prototype.M=function(){bs.X.M.call(this),wh(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nr(){this.g=!0}nr.prototype.Aa=function(){this.g=!1};function $y(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function jy(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function In(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vy(e,n)+(s?" "+s:"")})}function Hy(e,t){e.info(function(){return"TIMEOUT: "+t})}nr.prototype.info=function(){};function Vy(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ra(n)}catch{return t}}var qn={},Xc=null;function ca(){return Xc=Xc||new de}qn.Oa="serverreachability";function bh(e){Te.call(this,qn.Oa,e)}ye(bh,Te);function Ts(e){const t=ca();_e(t,new bh(t))}qn.STAT_EVENT="statevent";function Th(e,t){Te.call(this,qn.STAT_EVENT,e),this.stat=t}ye(Th,Te);function Se(e){const t=ca();_e(t,new Th(t,e))}qn.Pa="timingevent";function Ah(e,t){Te.call(this,qn.Pa,e),this.size=t}ye(Ah,Te);function Bs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){e()},t)}var la={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Wy={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ua(){}ua.prototype.h=null;function Yc(e){return e.h||(e.h=e.i())}function zy(){}var $s={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ha(){Te.call(this,"d")}ye(ha,Te);function fa(){Te.call(this,"c")}ye(fa,Te);var lo;function sr(){}ye(sr,ua);sr.prototype.g=function(){return new XMLHttpRequest};sr.prototype.i=function(){return{}};lo=new sr;function js(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new bs(this),this.O=Ky,e=so?125:void 0,this.T=new tr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ch}function Ch(){this.i=null,this.g="",this.h=!1}var Ky=45e3,uo={},Si={};O=js.prototype;O.setTimeout=function(e){this.O=e};function ho(e,t,n){e.K=1,e.v=rr(Ct(t)),e.s=n,e.P=!0,Sh(e,null)}function Sh(e,t){e.F=Date.now(),Hs(e),e.A=Ct(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Lh(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Ch,e.g=nf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new By(be(e.Ka,e,e.g),e.N)),Ih(e.S,e.g,"readystatechange",e.hb),t=e.H?uh(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ts(),$y(e.j,e.u,e.A,e.m,e.U,e.s)}O.hb=function(e){e=e.target;const t=this.L;t&&wt(e)==3?t.l():this.Ka(e)};O.Ka=function(e){try{if(e==this.g)e:{const u=wt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||so||this.g&&(this.h.h||this.g.fa()||tl(this.g)))){this.I||u!=4||t==7||(t==8||0>=f?Ts(3):Ts(2)),ir(this);var n=this.g.aa();this.Y=n;t:if(Rh(this)){var s=tl(this.g);e="";var i=s.length,r=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),us(this);var o="";break t}this.h.i=new F.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jy(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var l=a;break t}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fo(this,n);else{this.i=!1,this.o=3,Se(12),nn(this),us(this);break e}}this.P?(kh(this,u,o),so&&this.i&&u==3&&(Ih(this.S,this.T,"tick",this.gb),this.T.start())):(In(this.j,this.m,o,null),fo(this,o)),u==4&&nn(this),this.i&&!this.I&&(u==4?Qh(this.l,this):(this.i=!1,Hs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Se(12)):(this.o=0,Se(13)),nn(this),us(this)}}}catch{}finally{}};function Rh(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function kh(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=qy(e,n),i==Si){t==4&&(e.o=4,Se(14),s=!1),In(e.j,e.m,null,"[Incomplete Response]");break}else if(i==uo){e.o=4,Se(15),In(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else In(e.j,e.m,i,null),fo(e,i);Rh(e)&&i!=Si&&i!=uo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Se(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ya(t),t.K=!0,Se(11))):(In(e.j,e.m,n,"[Invalid Chunked Response]"),nn(e),us(e))}O.gb=function(){if(this.g){var e=wt(this.g),t=this.g.fa();this.C<t.length&&(ir(this),kh(this,e,t),this.i&&e!=4&&Hs(this))}};function qy(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Si:(n=Number(t.substring(n,s)),isNaN(n)?uo:(s+=1,s+n>t.length?Si:(t=t.substr(s,n),e.C=s+n,t)))}O.cancel=function(){this.I=!0,nn(this)};function Hs(e){e.V=Date.now()+e.O,Oh(e,e.O)}function Oh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Bs(be(e.fb,e),t)}function ir(e){e.B&&(F.clearTimeout(e.B),e.B=null)}O.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Hy(this.j,this.A),this.K!=2&&(Ts(),Se(17)),nn(this),this.o=2,us(this)):Oh(this,this.V-e)};function us(e){e.l.G==0||e.I||Qh(e.l,e)}function nn(e){ir(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,oa(e.T),wh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function fo(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||po(n.h,e))){if(!e.J&&po(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Oi(n),lr(n);else break e;va(n),Se(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bs(be(n.bb,n),6e3));if(1>=Fh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else sn(n,11)}else if((e.J||n.g==e)&&Oi(n),!Ci(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.h;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(da(r,r.h),r.h=null))}if(s.D){const P=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(s.za=P,re(s.F,s.D,P))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=tf(s,s.H?s.ka:null,s.V),o.J){Bh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ir(a),Hs(a)),s.g=o}else Xh(s);0<n.i.length&&ur(n)}else l[0]!="stop"&&l[0]!="close"||sn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sn(n,7):_a(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ts(4)}catch{}}function Gy(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Yi(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Jy(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Yi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ph(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Yi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jy(e),s=Gy(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xy(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof cn){this.h=t!==void 0?t:e.h,Ri(this,e.j),this.s=e.s,this.g=e.g,ki(this,e.m),this.l=e.l,t=e.i;var n=new As;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Qc(this,n),this.o=e.o}else e&&(n=String(e).match(Dh))?(this.h=!!t,Ri(this,n[1]||"",!0),this.s=is(n[2]||""),this.g=is(n[3]||"",!0),ki(this,n[4]),this.l=is(n[5]||"",!0),Qc(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.h=!!t,this.i=new As(null,this.h))}cn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rs(t,Zc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(rs(t,Zc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(rs(n,n.charAt(0)=="/"?Zy:Qy,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",rs(n,t0)),e.join("")};function Ct(e){return new cn(e)}function Ri(e,t,n){e.j=n?is(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ki(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qc(e,t,n){t instanceof As?(e.i=t,n0(e.i,e.h)):(n||(t=rs(t,e0)),e.i=new As(t,e.h))}function re(e,t,n){e.i.set(t,n)}function rr(e){return re(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function is(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rs(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Yy),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yy(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Zc=/[#\/\?@]/g,Qy=/[#\?:]/g,Zy=/[#\?]/g,e0=/[#\?@]/g,t0=/#/g;function As(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wt(e){e.g||(e.g=new Map,e.h=0,e.i&&Xy(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=As.prototype;O.add=function(e,t){Wt(this),this.i=null,e=Gn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Nh(e,t){Wt(e),t=Gn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Mh(e,t){return Wt(e),t=Gn(e,t),e.g.has(t)}O.forEach=function(e,t){Wt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};O.oa=function(){Wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};O.W=function(e){Wt(this);let t=[];if(typeof e=="string")Mh(this,e)&&(t=t.concat(this.g.get(Gn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return Wt(this),this.i=null,e=Gn(this,e),Mh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Lh(e,t,n){Nh(e,t),0<n.length&&(e.i=null,e.g.set(Gn(e,t),Qo(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Gn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function n0(e,t){t&&!e.j&&(Wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Nh(this,s),Lh(this,i,n))},e)),e.j=t}var s0=class{constructor(e,t){this.h=e,this.g=t}};function xh(e){this.l=e||i0,F.PerformanceNavigationTiming?(e=F.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i0=10;function Uh(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fh(e){return e.h?1:e.g?e.g.size:0}function po(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function da(e,t){e.g?e.g.add(t):e.h=t}function Bh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xh.prototype.cancel=function(){if(this.i=$h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function $h(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qo(e.i)}function pa(){}pa.prototype.stringify=function(e){return F.JSON.stringify(e,void 0)};pa.prototype.parse=function(e){return F.JSON.parse(e,void 0)};function r0(){this.g=new pa}function o0(e,t,n){const s=n||"";try{Ph(e,function(i,r){let o=i;Us(i)&&(o=ra(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function a0(e,t){const n=new nr;if(F.Image){const s=new Image;s.onload=Zs(ti,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Zs(ti,n,s,"TestLoadImage: error",!1,t),s.onabort=Zs(ti,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Zs(ti,n,s,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ti(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function or(e){this.l=e.$b||null,this.j=e.ib||!1}ye(or,ua);or.prototype.g=function(){return new ar(this.l,this.j)};or.prototype.i=function(e){return function(){return e}}({});function ar(e,t){de.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ga,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ye(ar,de);var ga=0;O=ar.prototype;O.open=function(e,t){if(this.readyState!=ga)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cs(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||F).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=ga};O.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jh(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))};function jh(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}O.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Vs(this):Cs(this),this.readyState==3&&jh(this)}};O.Ua=function(e){this.g&&(this.response=this.responseText=e,Vs(this))};O.Ta=function(e){this.g&&(this.response=e,Vs(this))};O.ga=function(){this.g&&Vs(this)};function Vs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cs(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Cs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var c0=F.JSON.parse;function fe(e){de.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hh,this.K=this.L=!1}ye(fe,de);var Hh="",l0=/^https?$/i,u0=["POST","PUT"];O=fe.prototype;O.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?Yc(this.u):Yc(lo),this.g.onreadystatechange=be(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){el(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=F.FormData&&e instanceof F.FormData,!(0<=oh(u0,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zh(this),0<this.B&&((this.K=h0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.qa,this)):this.A=aa(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){el(this,r)}};function h0(e){return Is&&Sy()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.qa=function(){typeof Yo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function el(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vh(e),cr(e)}function Vh(e){e.D||(e.D=!0,_e(e,"complete"),_e(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),cr(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cr(this,!0)),fe.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?Wh(this):this.eb())};O.eb=function(){Wh(this)};function Wh(e){if(e.h&&typeof Yo<"u"&&(!e.C[1]||wt(e)!=4||e.aa()!=2)){if(e.v&&wt(e)==4)aa(e.Ha,0,e);else if(_e(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Dh)[1]||null;if(!i&&F.self&&F.self.location){var r=F.self.location.protocol;i=r.substr(0,r.length-1)}s=!l0.test(i?i.toLowerCase():"")}n=s}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Vh(e)}}finally{cr(e)}}}}function cr(e,t){if(e.g){zh(e);const n=e.g,s=e.C[0]?Ai:null;e.g=null,e.C=null,t||_e(e,"ready");try{n.onreadystatechange=s}catch{}}}function zh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(F.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}O.aa=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),c0(t)}};function tl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Hh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kh(e){let t="";return ea(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ma(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Kh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):re(e,t,n))}function es(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qh(e){this.Ca=0,this.i=[],this.j=new nr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=es("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=es("baseRetryDelayMs",5e3,e),this.ab=es("retryDelaySeedMs",1e4,e),this.Za=es("forwardChannelMaxRetries",2,e),this.ta=es("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new xh(e&&e.concurrentRequestLimit),this.Fa=new r0,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=qh.prototype;O.ma=8;O.G=1;function _a(e){if(Gh(e),e.G==3){var t=e.U++,n=Ct(e.F);re(n,"SID",e.I),re(n,"RID",t),re(n,"TYPE","terminate"),Ws(e,n),t=new js(e,e.j,t,void 0),t.K=2,t.v=rr(Ct(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(t.v.toString(),"")),!n&&F.Image&&(new Image().src=t.v,n=!0),n||(t.g=nf(t.l,null),t.g.da(t.v)),t.F=Date.now(),Hs(t)}ef(e)}function lr(e){e.g&&(ya(e),e.g.cancel(),e.g=null)}function Gh(e){lr(e),e.u&&(F.clearTimeout(e.u),e.u=null),Oi(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&F.clearTimeout(e.m),e.m=null)}function ur(e){Uh(e.h)||e.m||(e.m=!0,vh(e.Ja,e),e.C=0)}function f0(e,t){return Fh(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Ya?0:e.Za)?!1:(e.m=Bs(be(e.Ja,e,t),Zh(e,e.C)),e.C++,!0)}O.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new js(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=uh(r),hh(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jh(this,i,t),n=Ct(this.F),re(n,"RID",e),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Ws(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Kh(r)))+"&"+t:this.o&&ma(n,this.o,r)),da(this.h,i),this.Xa&&re(n,"TYPE","init"),this.O?(re(n,"$req",t),re(n,"SID","null"),i.Z=!0,ho(i,n,null)):ho(i,n,t),this.G=2}}else this.G==3&&(e?nl(this,e):this.i.length==0||Uh(this.h)||nl(this))};function nl(e,t){var n;t?n=t.m:n=e.U++;const s=Ct(e.F);re(s,"SID",e.I),re(s,"RID",n),re(s,"AID",e.T),Ws(e,s),e.o&&e.s&&ma(s,e.o,e.s),n=new js(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Jh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),da(e.h,n),ho(n,s,t)}function Ws(e,t){e.ia&&ea(e.ia,function(n,s){re(t,s,n)}),e.l&&Ph({},function(n,s){re(t,s,n)})}function Jh(e,t,n){n=Math.min(e.i.length,n);var s=e.l?be(e.l.Qa,e.l,e):null;e:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{o0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function Xh(e){e.g||e.u||(e.Z=1,vh(e.Ia,e),e.A=0)}function va(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Bs(be(e.Ia,e),Zh(e,e.A)),e.A++,!0)}O.Ia=function(){if(this.u=null,Yh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Bs(be(this.cb,this),e)}};O.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Se(10),lr(this),Yh(this))};function ya(e){e.B!=null&&(F.clearTimeout(e.B),e.B=null)}function Yh(e){e.g=new js(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ct(e.sa);re(t,"RID","rpc"),re(t,"SID",e.I),re(t,"CI",e.L?"0":"1"),re(t,"AID",e.T),re(t,"TYPE","xmlhttp"),Ws(e,t),e.o&&e.s&&ma(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=rr(Ct(t)),n.s=null,n.P=!0,Sh(n,e)}O.bb=function(){this.v!=null&&(this.v=null,lr(this),va(this),Se(19))};function Oi(e){e.v!=null&&(F.clearTimeout(e.v),e.v=null)}function Qh(e,t){var n=null;if(e.g==t){Oi(e),ya(e),e.g=null;var s=2}else if(po(e.h,t))n=t.D,Bh(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=ca(),_e(s,new Ah(s,n)),ur(e)}else Xh(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&f0(e,t)||s==2&&va(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:sn(e,5);break;case 4:sn(e,10);break;case 3:sn(e,6);break;default:sn(e,2)}}}function Zh(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function sn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=be(e.jb,e);n||(n=new cn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ri(n,"https"),rr(n)),a0(n.toString(),s)}else Se(2);e.G=0,e.l&&e.l.va(t),ef(e),Gh(e)}O.jb=function(e){e?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function ef(e){if(e.G=0,e.la=[],e.l){const t=$h(e.h);(t.length!=0||e.i.length!=0)&&(Kc(e.la,t),Kc(e.la,e.i),e.h.i.length=0,Qo(e.i),e.i.length=0),e.l.ua()}}function tf(e,t,n){var s=n instanceof cn?Ct(n):new cn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),ki(s,s.m);else{var i=F.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new cn(null,void 0);s&&Ri(r,s),t&&(r.g=t),i&&ki(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&re(s,n,t),re(s,"VER",e.ma),Ws(e,s),s}function nf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new fe(new or({ib:!0})):new fe(e.ra),t.L=e.H,t}function sf(){}O=sf.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Qa=function(){};function ze(e,t){de.call(this),this.g=new qh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!Ci(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ci(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jn(this)}ye(ze,de);ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Se(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=tf(e,null,e.V),ur(e)};ze.prototype.close=function(){_a(this.g)};ze.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ra(e),e=n);t.i.push(new s0(t.$a++,e)),t.G==3&&ur(t)};ze.prototype.M=function(){this.g.l=null,delete this.j,_a(this.g),delete this.g,ze.X.M.call(this)};function rf(e){ha.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ye(rf,ha);function of(){fa.call(this),this.status=1}ye(of,fa);function Jn(e){this.g=e}ye(Jn,sf);Jn.prototype.xa=function(){_e(this.g,"a")};Jn.prototype.wa=function(e){_e(this.g,new rf(e))};Jn.prototype.va=function(e){_e(this.g,new of)};Jn.prototype.ua=function(){_e(this.g,"b")};ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;la.NO_ERROR=0;la.TIMEOUT=8;la.HTTP_ERROR=6;Wy.COMPLETE="complete";zy.EventType=$s;$s.OPEN="a";$s.CLOSE="b";$s.ERROR="c";$s.MESSAGE="d";de.prototype.listen=de.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Na;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Ra;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;const sl="@firebase/firestore";/**
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
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */let zs="9.11.0";/**
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
 */const Bn=new Fo("@firebase/firestore");function Me(e,...t){if(Bn.logLevel<=Z.DEBUG){const n=t.map(Ia);Bn.debug(`Firestore (${zs}): ${e}`,...n)}}function Ea(e,...t){if(Bn.logLevel<=Z.ERROR){const n=t.map(Ia);Bn.error(`Firestore (${zs}): ${e}`,...n)}}function d0(e,...t){if(Bn.logLevel<=Z.WARN){const n=t.map(Ia);Bn.warn(`Firestore (${zs}): ${e}`,...n)}}function Ia(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function wa(e="Unexpected state"){const t=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+e;throw Ea(t),new Error(t)}function Pi(e,t){e||wa()}/**
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
 */const Le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xe extends Rt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class af{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class p0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class g0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m0{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Me("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(Me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pi(typeof s.accessToken=="string"),new af(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Pi(t===null||typeof t=="string"),new Ee(t)}}class _0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Pi(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class v0{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new _0(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E0{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&Me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{Me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Pi(typeof n.token=="string"),this.A=n.token,new y0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function I0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class w0{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=I0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function cf(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class b0{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Di{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Di&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var il,K;(K=il||(il={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";function Dr(){return typeof document<"u"?document:null}class T0{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&Me("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class ba{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ba(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new xe(Le.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A0(e,t){if(Ea("AsyncQueue",`${t}: ${e}`),cf(e))return new xe(Le.UNAVAILABLE,`${t}: ${e}`);throw e}function C0(e,t,n,s){if(t===!0&&s===!0)throw new xe(Le.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function S0(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":wa()}function R0(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new xe(Le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=S0(e);throw new xe(Le.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const rl=new Map;class ol{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new xe(Le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new xe(Le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,C0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class lf{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ol({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new xe(Le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new xe(Le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ol(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new p0;switch(n.type){case"gapi":const s=n.client;return new v0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new xe(Le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=rl.get(t);n&&(Me("ComponentProvider","Removing Datastore"),rl.delete(t),n.terminate())}(this),Promise.resolve()}}function k0(e,t,n,s={}){var i;const r=(e=R0(e,lf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&d0("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ee.MOCK_USER;else{o=Xg(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new xe(Le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(c)}e._authCredentials=new g0(new af(o,a))}}/**
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
 */class O0{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=w0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Me("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Me("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new xe(Le.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=A0(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}class P0{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new T0(this,"async_queue_retry"),this.Wc=()=>{const n=Dr();n&&Me("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const t=Dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Dr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(t){if(!cf(t))throw t;Me("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ea("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=ba.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&wa()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class D0 extends lf{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new P0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M0(this),this._firestoreClient.terminate()}}function N0(e,t){const n=typeof e=="object"?e:Cu(),s=typeof e=="string"?e:t||"(default)",i=$o(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Iu("firestore");if(r){const[o,a]=r.split(":");k0(i,o,parseInt(a,10))}}return i}function M0(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new b0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new O0(e._authCredentials,e._appCheckCredentials,e._queue,s)}(function(e,t=!0){(function(n){zs=n})(Ps),Un(new un("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new D0(new m0(n.getProvider("auth-internal")),new E0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new xe(Le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),jt(sl,"3.6.0",e),jt(sl,"3.6.0","esm2017")})();const L0={apiKey:"AIzaSyDzh5wLdaDyAt7CbkQ7kREcsUtTaxzW0Lw",authDomain:"youlink-bf71e.firebaseapp.com",databaseURL:"/",projectId:"youlink-bf71e",storageBucket:"youlink-bf71e.appspot.com",messagingSenderId:"1096874202510",appId:"1:1096874202510:web:50a35e1dbc5ccdccc140df",measurementId:{VITE_FB_APIKEY:"AIzaSyDzh5wLdaDyAt7CbkQ7kREcsUtTaxzW0Lw",VITE_FB_AUTHDOMAIN:"youlink-bf71e.firebaseapp.com",VITE_FB_PROJECTID:"youlink-bf71e",VITE_FB_STORAGEBUCKET:"youlink-bf71e.appspot.com",VITE_FB_MESSAGINGSENDERID:"1096874202510",VITE_FB_APPID:"1:1096874202510:web:50a35e1dbc5ccdccc140df",VITE_FB_MEASUREMENTID:"G-Y6PGK1WP6L",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_MEASUREMENT_ID},uf=Au(L0),Ve=dy(uf);N0(uf);const Ni=()=>ev(Ve).then(()=>{console.log("Successfully LogOut")}).catch(e=>{console.log("Error LogOut"),console.log(e)}),al=()=>{const e=Ve.currentUser;if(e)return console.log(e),e;console.log("Not Login")},pn=e=>(cd("data-v-e443ce6a"),e=e(),ld(),e),x0={class:"flexbox"},U0={class:"sidebar"},F0=pn(()=>x("br",null,null,-1)),B0=pn(()=>x("br",null,null,-1)),$0=pn(()=>x("br",null,null,-1)),j0=pn(()=>x("br",null,null,-1)),H0=pn(()=>x("br",null,null,-1)),V0={class:"scene"},W0={key:0},z0={key:1},K0=pn(()=>x("p",null,"SignIn",-1)),q0=pn(()=>x("p",null,"SignUp",-1)),G0=Vn({__name:"App",setup(e){let t=He("");return Gu(Ve,n=>{n?(n.uid,n.displayName?t.value=n.displayName:t.value="\u30B2\u30B9\u30C8"):t.value=""}),(n,s)=>(we(),Pe("div",x0,[x("div",U0,[ae(J(Nt),{to:"/"},{default:at(()=>[Qt("Home")]),_:1}),F0,ae(J(Nt),{to:"/messages"},{default:at(()=>[Qt("Messages")]),_:1}),B0,ae(J(Nt),{to:"/notification"},{default:at(()=>[Qt("Notification")]),_:1}),$0,ae(J(Nt),{to:"/post"},{default:at(()=>[Qt("Post")]),_:1}),j0,ae(J(Nt),{to:"/users"},{default:at(()=>[Qt("Users")]),_:1}),H0]),x("div",V0,[ae(J(_u))]),J(t)?(we(),Pe("div",W0,[x("p",{onClick:s[0]||(s[0]=(...i)=>J(Ni)&&J(Ni)(...i))},"LogOut"),x("p",null,Mi(J(t)),1)])):(we(),Pe("div",z0,[ae(J(Nt),{to:"/signin"},{default:at(()=>[K0]),_:1}),ae(J(Nt),{to:"/signup"},{default:at(()=>[q0]),_:1}),x("p",{onClick:s[1]||(s[1]=(...i)=>J(al)&&J(al)(...i))},"getUser")]))]))}});const _t=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},J0=_t(G0,[["__scopeId","data-v-e443ce6a"]]),X0={},Y0=x("button",null,"SignIn",-1),Q0=x("button",null,"SignUp",-1);function Z0(e,t){const n=Wl("RouterLink");return we(),Pe(ct,null,[ae(n,{to:"/signin"},{default:at(()=>[Y0]),_:1}),ae(n,{to:"/signup"},{default:at(()=>[Q0]),_:1})],64)}const eE=_t(X0,[["render",Z0]]),tE=Vn({__name:"SignUp",setup(e){let t=He(""),n=He(""),s=He(""),i=He("");const r=Rs(),o=async(u,f)=>{if(!u){i.value="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";return}if(!f){i.value="\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";return}if(!s){i.value="\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";return}Ni(),G_(Ve,u,f).then(p=>{console.log("signup");const m=p.user;Y_(m,{displayName:"\u30B2\u30B9\u30C8"}).then(()=>{}).catch(T=>{}),r.push("/")}).catch(p=>{const m=p.code;console.log(m),m==="auth/email-already-exists"?i.value="\u5165\u529B\u3057\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u3059\u3067\u306B\u5229\u7528\u3055\u308C\u3066\u3044\u307E\u3059":m==="auth/invalid-password"?i.value="\u30D1\u30B9\u30EF\u30FC\u30C9\u306F6\u6587\u5B57\u4EE5\u4E0A\u306B\u3057\u3066\u304F\u3060\u3055\u3044":i.value="\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F"})},a=()=>{const u=new $e;On(Ve,u).then(f=>{$e.credentialFromResult(f);const p=f.user;console.log(p),r.push("/")}).catch(f=>{console.log(f)})},c=()=>{const u=new je;On(Ve,u).then(f=>{je.credentialFromResult(f),f.user,r.push("/")}).catch(f=>{console.log(f)})},l=()=>{const u=new ht;On(Ve,u).then(f=>{f.user,r.push("/")}).catch(f=>{console.log(f)})};return(u,f)=>(we(),Pe("div",null,[Cn(x("input",{type:"email","onUpdate:modelValue":f[0]||(f[0]=p=>le(t)?t.value=p:t=p)},null,512),[[Sn,J(t)]]),Cn(x("input",{type:"text","onUpdate:modelValue":f[1]||(f[1]=p=>le(n)?n.value=p:n=p)},null,512),[[Sn,J(n)]]),Cn(x("input",{type:"text","onUpdate:modelValue":f[2]||(f[2]=p=>le(s)?s.value=p:s=p)},null,512),[[Sn,J(s)]]),x("p",null,Mi(J(i)),1),x("button",{onClick:f[3]||(f[3]=p=>o(J(t),J(n)))},"\u767B\u9332"),x("button",{onClick:a},"google\u767B\u9332"),x("button",{onClick:c},"github\u30ED\u30B0\u30A4\u30F3"),x("button",{onClick:l},"twitter\u30ED\u30B0\u30A4\u30F3")]))}}),nE=Vn({__name:"SignIn",setup(e){let t=He(""),n=He(""),s=He("");const i=Rs(),r=(l,u)=>{if(!l){s.value="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";return}if(!u){s.value="\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";return}Ni(),J_(Ve,l,u).then(f=>{f.user,i.push("/")}).catch(f=>{const p=f.code;p==="auth/invalid-email"?s.value="\u7121\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u3059":p==="auth/wrong-password"?s.value="\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059":(console.log(f.code),s.value="\u30B5\u30A4\u30F3\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F")})},o=()=>{const l=new $e;On(Ve,l).then(u=>{$e.credentialFromResult(u);const f=u.user;console.log(f),i.push("/")}).catch(u=>{console.log(u)})},a=()=>{const l=new je;On(Ve,l).then(u=>{je.credentialFromResult(u),u.user,i.push("/")}).catch(u=>{console.log(u)})},c=()=>{const l=new ht;On(Ve,l).then(u=>{u.user,i.push("/")}).catch(u=>{console.log(u)})};return(l,u)=>(we(),Pe("div",null,[Cn(x("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=f=>le(t)?t.value=f:t=f)},null,512),[[Sn,J(t)]]),Cn(x("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=f=>le(n)?n.value=f:n=f)},null,512),[[Sn,J(n)]]),x("p",null,Mi(J(s)),1),x("button",{onClick:u[2]||(u[2]=f=>r(J(t),J(n)))},"\u30B5\u30A4\u30F3\u30A4\u30F3"),x("button",{onClick:o},"google\u30ED\u30B0\u30A4\u30F3"),x("button",{onClick:a},"github\u30ED\u30B0\u30A4\u30F3"),x("button",{onClick:c},"twitter\u30ED\u30B0\u30A4\u30F3")]))}}),sE={setup(){const e=Rs();return{moveOffer:()=>{e.push("/offers")}}}},iE=x("h1",null,"JPHACKS\u767B\u58C7\u8005\u8A9E\u308A\u307E\u305B\u3093\u304B\uFF1F",-1),rE=x("p",null,"\u521D\u3081\u307E\u3057\u3066\u3002\u540D\u57CE\u5927\u5B66\u306E\u305B\u30FC\u3068\u7533\u3057\u307E\u3059\u3002\u4ECA\u5E74\u5EA6\u306EJPHACKS\u306B\u53C2\u52A0\u3057\u307E\u3057\u305F\u304C\u3001\u4ED6\u306E\u30B0\u30EB\u30FC\u30D7\u306E\u30A8\u30F3\u30B8\u30CB\u30A2\u306E\u65B9\u3068\u304A\u8A71\u3057\u3059\u308B\u6A5F\u4F1A\u304C\u306A\u304B\u3063\u305F\u306E\u3067\u3001 YOULINK\u3067\u52DF\u96C6\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3057\u305F\u3002",-1);function oE(e,t,n,s,i,r){return we(),Pe("div",null,[iE,rE,x("button",{onClick:t[0]||(t[0]=(...o)=>s.moveOffer&&s.moveOffer(...o))},"\u8A71\u3057\u305F\u3044")])}const aE=_t(sE,[["render",oE]]),cE={components:{HomeModal:aE},setup(){let e=He(!1);const t=He(""),n=Rs();return Gu(Ve,i=>{i?i.uid:n.push("/top")}),{textInput:t,showContent:e,openModal:()=>{e.value=!0}}}};const lE={class:"search"},uE=x("h1",null,"\u30DB\u30FC\u30E0\u753B\u9762",-1),hE={class:"recruitment-list"},fE=x("h1",{class:"recruitment-title"},"JPHACKS\u767B\u58C7\u8005\u8A9E\u308A\u307E\u305B\u3093\u304B\uFF1F",-1),dE=[fE];function pE(e,t,n,s,i,r){const o=Wl("HomeModal");return we(),Pe("div",null,[x("div",lE,[uE,Cn(x("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>s.textInput=a)},null,512),[[Sn,s.textInput]]),Qt(" "+Mi(s.textInput),1)]),x("div",hE,[x("div",{class:"recruitment-bg",onClick:t[1]||(t[1]=(...a)=>s.openModal&&s.openModal(...a))},dE)]),s.showContent?(we(),eu(o,{key:0})):Yd("",!0)])}const gE=_t(cE,[["render",pE]]);const mE={},_E={class:"title"},vE=x("h1",null,"\u5FDC\u52DF\u753B\u9762",-1),yE=[vE];function EE(e,t){return we(),Pe("div",_E,yE)}const IE=_t(mE,[["render",EE]]),wE=Vn({setup(){const e=Rs();return{moveDirectMessage:()=>{e.push("/directmessage")}}}});const bE={class:"title"},TE=x("h1",null,"\u30E1\u30C3\u30BB\u30FC\u30B8\u753B\u9762",-1),AE={class:"recruitment-list"},CE=x("h1",{class:"recruitment-title"},"JPHACKS\u767B\u58C7\u8005\u8A9E\u308A\u307E\u305B\u3093\u304B\uFF1F",-1),SE=[CE];function RE(e,t,n,s,i,r){return we(),Pe("div",bE,[TE,x("div",AE,[x("div",{class:"recruitment-bg",onClick:t[0]||(t[0]=(...o)=>e.moveDirectMessage&&e.moveDirectMessage(...o))},SE)])])}const kE=_t(wE,[["render",RE]]);const OE={},PE={class:"title"},DE=x("h1",null,"\u901A\u77E5\u753B\u9762",-1),NE=[DE];function ME(e,t){return we(),Pe("div",PE,NE)}const LE=_t(OE,[["render",ME]]);const xE={},UE={class:"title"},FE=x("h1",null,"\u65B0\u898F\u52DF\u96C6\u753B\u9762",-1),BE=[FE];function $E(e,t){return we(),Pe("div",UE,BE)}const jE=_t(xE,[["render",$E]]);const HE={},VE={class:"title"},WE=x("h1",null,"\u30E6\u30FC\u30B6\u30FC\u753B\u9762",-1),zE=[WE];function KE(e,t){return we(),Pe("div",VE,zE)}const qE=_t(HE,[["render",KE]]);const GE={},JE={class:"title"},XE=x("h1",null,"DM\u753B\u9762",-1),YE=[XE];function QE(e,t){return we(),Pe("div",JE,YE)}const ZE=_t(GE,[["render",QE]]),eI=Mg({history:Qp("/"),routes:[{path:"/top",name:"top",component:eE},{path:"/signup",name:"signup",component:tE},{path:"/signin",name:"signin",component:nE},{path:"/",name:"home",component:gE},{path:"/offers",name:"offers",component:IE},{path:"/messages",name:"message",component:kE},{path:"/notification",name:"notification",component:LE},{path:"/post",name:"post",component:jE},{path:"/users",name:"users",component:qE},{path:"/directmessage",name:"directmessage",component:ZE}]});const Ta=Op(J0);Ta.use(Mp());Ta.use(eI);Ta.mount("#app");
