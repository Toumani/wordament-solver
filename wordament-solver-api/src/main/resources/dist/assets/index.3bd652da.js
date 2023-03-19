(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const $={},xe=(e,t)=>e===t,me=Symbol("solid-track"),H={equals:xe};let ve=de;const T=1,F=2,ue={owned:null,cleanups:null,context:null,owner:null},Y={};var g=null;let P=null,h=null,y=null,D=null,ee=0;function U(e,t){const n=h,l=g,s=e.length===0,r=s?ue:{owned:null,cleanups:null,context:null,owner:t||l},o=s?e:()=>e(()=>B(()=>ne(r)));g=r,h=null;try{return j(o,!0)}finally{h=n,g=l}}function L(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.value)),ce(n,s));return[fe.bind(n),l]}function le(e,t,n){const l=te(e,t,!0,T);R(l)}function O(e,t,n){const l=te(e,t,!1,T);R(l)}function J(e,t,n){n=n?Object.assign({},H,n):H;const l=te(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,R(l),fe.bind(l)}function $e(e,t,n){let l,s,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(l=!0,s=e,r=t||{}):(l=e,s=t,r=n||{});let o=null,i=Y,c=null,f=!1,u="initialValue"in r,x=typeof l=="function"&&J(l);const a=new Set,[w,C]=(r.storage||L)(r.initialValue),[k,q]=L(void 0),[I,A]=L(void 0,{equals:!1}),[v,E]=L(u?"ready":"unresolved");if($.context){c=`${$.context.id}${$.context.count++}`;let d;r.ssrLoadFrom==="initial"?i=r.initialValue:$.load&&(d=$.load(c))&&(i=d[0])}function N(d,b,p,M){return o===d&&(o=null,u=!0,(d===i||b===i)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(M,{value:b})),i=Y,G(b,p)),b}function G(d,b){j(()=>{b||C(()=>d),E(b?"errored":"ready"),q(b);for(const p of a.keys())p.decrement();a.clear()},!1)}function Q(){const d=Ae,b=w(),p=k();if(p&&!o)throw p;return h&&!h.user&&d&&le(()=>{I(),o&&(d.resolved||a.has(d)||(d.increment(),a.add(d)))}),b}function X(d=!0){if(d!==!1&&f)return;f=!1;const b=x?x():l;if(b==null||b===!1){N(o,B(w));return}const p=i!==Y?i:B(()=>s(b,{value:w(),refetching:d}));return typeof p!="object"||!(p&&"then"in p)?(N(o,p),p):(o=p,f=!0,queueMicrotask(()=>f=!1),j(()=>{E(u?"refreshing":"pending"),A()},!1),p.then(M=>N(p,M,void 0,b),M=>N(p,void 0,pe(M))))}return Object.defineProperties(Q,{state:{get:()=>v()},error:{get:()=>k()},loading:{get(){const d=v();return d==="pending"||d==="refreshing"}},latest:{get(){if(!u)return Q();const d=k();if(d&&!o)throw d;return w()}}}),x?le(()=>X(!1)):X(!1),[Q,{refetch:X,mutate:C}]}function B(e){const t=h;h=null;try{return e()}finally{h=t}}function Se(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}let Ae;function fe(){const e=P;if(this.sources&&(this.state||e))if(this.state===T||e)R(this);else{const t=y;y=null,j(()=>K(this),!1),y=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ce(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s],o=P&&P.running;o&&P.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?y.push(r):D.push(r),r.observers&&he(r)),o||(r.state=T)}if(y.length>1e6)throw y=[],new Error},!1)),t}function R(e){if(!e.fn)return;ne(e);const t=g,n=h,l=ee;h=g=e,Ee(e,e.value,l),h=n,g=t}function Ee(e,t,n){let l;try{l=e.fn(t)}catch(s){e.pure&&(e.state=T),ge(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ce(e,l):e.value=l,e.updatedAt=n)}function te(e,t,n,l=T,s){const r={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ue&&(g.owned?g.owned.push(r):g.owned=[r]),r}function ae(e){const t=P;if(e.state===0||t)return;if(e.state===F||t)return K(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)(e.state||t)&&n.push(e);for(let l=n.length-1;l>=0;l--)if(e=n[l],e.state===T||t)R(e);else if(e.state===F||t){const s=y;y=null,j(()=>K(e,n[0]),!1),y=s}}function j(e,t){if(y)return e();let n=!1;t||(y=[]),D?n=!0:D=[],ee++;try{const l=e();return Ne(n),l}catch(l){y||(D=null),ge(l)}}function Ne(e){if(y&&(de(y),y=null),e)return;const t=D;D=null,t.length&&j(()=>ve(t),!1)}function de(e){for(let t=0;t<e.length;t++)ae(e[t])}function K(e,t){const n=P;e.state=0;for(let l=0;l<e.sources.length;l+=1){const s=e.sources[l];s.sources&&(s.state===T||n?s!==t&&ae(s):(s.state===F||n)&&K(s,t))}}function he(e){const t=P;for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n];(!l.state||t)&&(l.state=F,l.pure?y.push(l):D.push(l),l.observers&&he(l))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),o=n.observerSlots.pop();l<s.length&&(r.sourceSlots[o]=l,s[l]=r,n.observerSlots[l]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function pe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ge(e){throw e=pe(e),e}const Ce=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let l=[],s=[],r=[],o=0,i=t.length>1?[]:null;return Se(()=>re(r)),()=>{let c=e()||[],f,u;return c[me],B(()=>{let a=c.length,w,C,k,q,I,A,v,E,N;if(a===0)o!==0&&(re(r),r=[],l=[],s=[],o=0,i&&(i=[])),n.fallback&&(l=[Ce],s[0]=U(G=>(r[0]=G,n.fallback())),o=1);else if(o===0){for(s=new Array(a),u=0;u<a;u++)l[u]=c[u],s[u]=U(x);o=a}else{for(k=new Array(a),q=new Array(a),i&&(I=new Array(a)),A=0,v=Math.min(o,a);A<v&&l[A]===c[A];A++);for(v=o-1,E=a-1;v>=A&&E>=A&&l[v]===c[E];v--,E--)k[E]=s[v],q[E]=r[v],i&&(I[E]=i[v]);for(w=new Map,C=new Array(E+1),u=E;u>=A;u--)N=c[u],f=w.get(N),C[u]=f===void 0?-1:f,w.set(N,u);for(f=A;f<=v;f++)N=l[f],u=w.get(N),u!==void 0&&u!==-1?(k[u]=s[f],q[u]=r[f],i&&(I[u]=i[f]),u=C[u],w.set(N,u)):r[f]();for(u=A;u<a;u++)u in k?(s[u]=k[u],r[u]=q[u],i&&(i[u]=I[u],i[u](u))):s[u]=U(x);s=s.slice(0,o=a),l=c.slice(0)}return s});function x(a){if(r[u]=a,i){const[w,C]=L(u);return i[u]=C,t(c[u],w)}return t(c[u])}}}function m(e,t){return B(()=>e(t||{}))}function ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return J(_e(()=>e.each,e.children,t||void 0))}function we(e){let t=!1;const n=e.keyed,l=J(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return J(()=>{const s=l();if(s){const r=e.children,o=typeof r=="function"&&r.length>0;return t=n||o,o?B(()=>r(s)):r}return e.fallback})}function ke(e,t,n){let l=n.length,s=t.length,r=l,o=0,i=0,c=t[s-1].nextSibling,f=null;for(;o<s||i<r;){if(t[o]===n[i]){o++,i++;continue}for(;t[s-1]===n[r-1];)s--,r--;if(s===o){const u=r<l?i?n[i-1].nextSibling:n[r-i]:c;for(;i<r;)e.insertBefore(n[i++],u)}else if(r===i)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--r],u),t[s]=n[r]}else{if(!f){f=new Map;let x=i;for(;x<r;)f.set(n[x],x++)}const u=f.get(t[o]);if(u!=null)if(i<u&&u<r){let x=o,a=1,w;for(;++x<s&&x<r&&!((w=f.get(t[x]))==null||w!==u+a);)a++;if(a>u-i){const C=t[o];for(;i<u;)e.insertBefore(n[i++],C)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}const ie="_$DX_DELEGATE";function Le(e,t,n,l={}){let s;return U(r=>{s=r,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{s(),t.textContent=""}}function _(e,t,n){const l=document.createElement("template");l.innerHTML=e;let s=l.content.firstChild;return n&&(s=s.firstChild),s}function be(e,t=window.document){const n=t[ie]||(t[ie]=new Set);for(let l=0,s=e.length;l<s;l++){const r=e[l];n.has(r)||(n.add(r),t.addEventListener(r,Pe))}}function se(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n,l){if(l)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=r=>s.call(e,n[1],r))}else e.addEventListener(t,n)}function S(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return W(e,t,l,n);O(s=>W(e,t(),s,n),l)}function Pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>l.remove()));n!==null;){const l=n[t];if(l&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?l.call(n,s,e):l.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function W(e,t,n,l,s){for($.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if($.context)return n;if(r==="number"&&(t=t.toString()),o){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=V(e,n,l,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if($.context)return n;n=V(e,n,l)}else{if(r==="function")return O(()=>{let i=t();for(;typeof i=="function";)i=i();n=W(e,i,n,l)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(z(i,t,n,s))return O(()=>n=W(e,i,n,l,!0)),()=>n;if($.context){if(!i.length)return n;for(let f=0;f<i.length;f++)if(i[f].parentNode)return n=i}if(i.length===0){if(n=V(e,n,l),o)return n}else c?n.length===0?oe(e,i,l):ke(e,n,i):(n&&V(e),oe(e,i));n=i}else if(t instanceof Node){if($.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=V(e,n,l,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function z(e,t,n,l){let s=!1;for(let r=0,o=t.length;r<o;r++){let i=t[r],c=n&&n[r];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=z(e,i,c)||s;else if(typeof i=="function")if(l){for(;typeof i=="function";)i=i();s=z(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const f=String(i);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return s}function oe(e,t,n=null){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function V(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(s!==i){const c=i.parentNode===e;!r&&!o?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else r=!0}}else e.insertBefore(s,n);return[s]}const De=_('<div class="w-full p-6 text-xl text-neutral-100 bg-neutral-800 font-black uppercase">Wordament Solver</div>');function Oe(){return De.cloneNode(!0)}async function Be(e){let t=!0;for(let n=0;n<16;n++)if(e.boxes[n].value!=="-"){t=!1;break}return t?[""]:(await(await fetch({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.ENV?"http://localhost:8080/board":"/board",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()).sort()}const je=_('<div><div class="flex flex-row mx-8 pb-8 space-x-4 border-b-2 border-b-white"></div><div class="flex flex-row flex-wrap justify-start w-full p-4 overflow-auto"></div></div>'),qe=_('<button class="p-4 rounded text-neutral-100 font-bold bg-indigo-900 hover:bg-indigo-800"></button>'),Ie=_("<span></span>"),Ve=_('<span class="text-neutral-200">Loading...</span>');function Me(e){const[t,n]=L(e.boardData),[l]=$e(t,Be);return(()=>{const s=je.cloneNode(!0),r=s.firstChild,o=r.nextSibling;return S(r,m(Z,{name:"Clear"}),null),S(r,m(Z,{name:"Randomize"}),null),S(r,m(Z,{name:"Solve",onClick:()=>{n(()=>JSON.parse(JSON.stringify(e.boardData)))}}),null),o.style.setProperty("max-height","calc(100% - 90px)"),S(o,m(we,{get when(){return!l.loading},get fallback(){return m(Ue,{})},get children(){return m(ye,{get each(){return l()},children:i=>m(Re,{class:"w-1/3",word:i})})}})),O(()=>se(s,"bg-neutral-800 "+e.class)),s})()}function Z(e){return(()=>{const t=qe.cloneNode(!0);return Te(t,"click",e.onClick,!0),S(t,()=>`${e.name}`),t})()}function Re(e){return(()=>{const t=Ie.cloneNode(!0);return S(t,()=>`${e.word}`),O(()=>se(t,`text-white text-center ${e.class}`)),t})()}function Ue(){return Ve.cloneNode(!0)}be(["click"]);const He=_('<div><div class="flex flex-wrap flex-row"></div></div>'),Fe=_("<input>"),Je=_('<div class="flex items-center justify-center w-1/4 text-white text-4xl uppercase bg-blue-900 border border-blue-500"></div>'),Ke=_("<span></span>");function We(e){return(()=>{const t=He.cloneNode(!0),n=t.firstChild;return n.style.setProperty("width","32rem"),n.style.setProperty("height","32rem"),S(n,m(ye,{get each(){return e.boardData.boxes},children:l=>m(Ge,{box:l})})),O(()=>se(t,"flex items-center justify-center bg-neutral-700 "+e.class)),t})()}function Ge(e){const[t,n]=L(!0);return(()=>{const l=Je.cloneNode(!0);return S(l,m(we,{get when(){return t()},get fallback(){return(()=>{const s=Ke.cloneNode(!0);return s.$$click=()=>n(!t()),S(s,()=>e.box.value),s})()},get children(){const s=Fe.cloneNode(!0);return s.addEventListener("blur",()=>n(!t())),s.addEventListener("change",r=>e.box.value=r.currentTarget.value),s.style.setProperty("border","unset"),s.style.setProperty("background","unset"),s.style.setProperty("width","4rem"),s.style.setProperty("text-align","center"),O(()=>s.value=e.box.value),s}})),l})()}be(["click"]);const Qe=()=>({boxes:[{x:0,y:0,value:"-"},{x:1,y:0,value:"-"},{x:2,y:0,value:"-"},{x:3,y:0,value:"-"},{x:0,y:1,value:"-"},{x:1,y:1,value:"-"},{x:2,y:1,value:"-"},{x:3,y:1,value:"-"},{x:0,y:2,value:"-"},{x:1,y:2,value:"-"},{x:2,y:2,value:"-"},{x:3,y:2,value:"-"},{x:0,y:3,value:"-"},{x:1,y:3,value:"-"},{x:2,y:3,value:"-"},{x:3,y:3,value:"-"}]}),Xe=_('<div class="flex flex-col w-full h-full"><div class="flex flex-row grow"></div></div>'),Ye=()=>{const[e]=L(Qe());return(()=>{const t=Xe.cloneNode(!0),n=t.firstChild;return S(t,m(Oe,{}),n),n.style.setProperty("height","calc(100% - 76px)"),S(n,m(We,{get boardData(){return e()},class:"w-1/2 h-full"}),null),S(n,m(Me,{get boardData(){return e()},class:"w-1/2 h-full"}),null),t})()};Le(()=>m(Ye,{}),document.getElementById("root"));
