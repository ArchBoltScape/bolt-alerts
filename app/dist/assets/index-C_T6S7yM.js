import{b as Le,g,d as W,r as me,a as he,p as Me,I as X,c as xe,e as z,i as Ne,m as ee,s as ae,E as Ce,f as Fe,h as qe,j as He,k as Ve,l as Be,n as We,o as ze,q as Ye,t as C,u as Y,v as je,w as Ge,x as G,y as Je,z as Xe,L as Ke,A as Qe,S as Ze,B as et,C as tt,P as nt,D as at,R as rt,F as re,G as se,H as st,J as ot,K as it,M as we,N as ye,O as lt,Q as ut,T as ke,U as F,V as S,W as M,X as Se,Y as T,Z as Ee,_ as oe,$ as ie,a0 as le,a1 as ue,a2 as ct,a3 as dt}from"./legacy-CU8Tr-xf.js";import{p as ft,R as L}from"./interfaces-Dq7mtQWd.js";let Re=!1;function ce(e,t){return t}function vt(e,t,n,r){for(var o=[],c=t.length,v=0;v<c;v++)Fe(t[v].e,o,!0);var h=c>0&&o.length===0&&n!==null;if(h){var _=n.parentNode;qe(_),_.append(n),r.clear(),P(e,t[0].prev,t[c-1].next)}He(o,()=>{for(var m=0;m<c;m++){var l=t[m];h||(r.delete(l.k),P(e,l.prev,l.next)),Ve(l.e,!h)}})}function de(e,t,n,r,o,c=null){var v=e,h={items:new Map,first:null},_=null,m=!1,l=W(()=>{var p=n();return Ye(p)?p:p==null?[]:xe(p)});Le(()=>{var p=g(l),d=p.length;m&&d===0||(m=d===0,pt(p,h,v,o,t,r,n),c!==null&&(d===0?_?me(_):_=he(()=>c(v)):_!==null&&Me(_,()=>{_=null})),g(l))})}function pt(e,t,n,r,o,c,v){var h=e.length,_=t.items,m=t.first,l=m,p,d=null,w=[],x=[],R,$,a,s;for(s=0;s<h;s+=1){if(R=e[s],$=c(R,s),a=_.get($),a===void 0){var u=l?l.e.nodes_start:n;d=bt(u,t,d,d===null?t.first:d.next,R,$,s,r,o,v),_.set($,d),w=[],x=[],l=d.next;continue}if(_t(a,R,s),a.e.f&X&&me(a.e),a!==l){if(p!==void 0&&p.has(a)){if(w.length<x.length){var f=x[0],i;d=f.prev;var y=w[0],b=w[w.length-1];for(i=0;i<w.length;i+=1)fe(w[i],f,n);for(i=0;i<x.length;i+=1)p.delete(x[i]);P(t,y.prev,b.next),P(t,d,y),P(t,b,f),l=f,d=b,s-=1,w=[],x=[]}else p.delete(a),fe(a,l,n),P(t,a.prev,a.next),P(t,a,d===null?t.first:d.next),P(t,d,a),d=a;continue}for(w=[],x=[];l!==null&&l.k!==$;)l.e.f&X||(p??(p=new Set)).add(l),x.push(l),l=l.next;if(l===null)continue;a=l}w.push(a),d=a,l=a.next}if(l!==null||p!==void 0){for(var k=p===void 0?[]:xe(p);l!==null;)l.e.f&X||k.push(l),l=l.next;var U=k.length;if(U>0){var O=null;vt(t,k,O,_)}}z.first=t.first&&t.first.e,z.last=d&&d.e}function _t(e,t,n,r){Ne(e.v,t),e.i=n}function bt(e,t,n,r,o,c,v,h,_,m){var l=(_&We)!==0,p=(_&ze)===0,d=l?p?ee(o):ae(o):o,w=_&Ce?ae(v):v,x={i:w,v:d,k:c,a:null,e:null,prev:n,next:r};try{return x.e=he(()=>h(e,d,w,m),Re),x.e.prev=n&&n.e,x.e.next=r&&r.e,n===null?t.first=x:(n.next=x,n.e.next=x.e),r!==null&&(r.prev=x,r.e.prev=x.e),x}finally{}}function fe(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,o=t?t.e.nodes_start:n,c=e.e.nodes_start;c!==r;){var v=Be(c);o.before(c),c=v}}function P(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Ue(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ue(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function gt(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ue(e))&&(r&&(r+=" "),r+=t);return r}function ve(e){return typeof e=="object"?gt(e):e??""}function pe(e,t,n){var r=e.__className,o=mt(t);(r!==o||Re)&&(t==null?e.removeAttribute("class"):e.className=o,e.__className=o)}function mt(e,t){return(e??"")+""}function $e(e,t,n){if(e==null)return t(void 0),C;const r=Y(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const N=[];function _e(e,t=C){let n=null;const r=new Set;function o(h){if(je(e,h)&&(e=h,n)){const _=!N.length;for(const m of r)m[1](),N.push(m,e);if(_){for(let m=0;m<N.length;m+=2)N[m][0](N[m+1]);N.length=0}}}function c(h){o(h(e))}function v(h,_=C){const m=[h,_];return r.add(m),r.size===1&&(n=t(o,c)||C),h(e),()=>{r.delete(m),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:v}}function Q(e){let t;return $e(e,n=>t=n)(),t}let B=!1,Z=Symbol();function ht(e,t,n){const r=n[t]??(n[t]={store:null,source:ee(void 0),unsubscribe:C});if(r.store!==e&&!(Z in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=C;else{var o=!0;r.unsubscribe=$e(e,c=>{o?r.source.v=c:G(r.source,c)}),o=!1}return e&&Z in n?Q(e):g(r.source)}function xt(){const e={};function t(){Ge(()=>{for(var n in e)e[n].unsubscribe();Je(e,Z,{enumerable:!1,value:!0})})}return[e,t]}function wt(e,t,n){return e.set(n),t}function yt(e){var t=B;try{return B=!1,[e(),B]}finally{B=t}}function be(e){for(var t=z,n=z;t!==null&&!(t.f&(at|rt));)t=t.parent;try{return re(t),e()}finally{re(n)}}function kt(e,t,n,r){var y;var o=(n&it)!==0,c=!tt||(n&nt)!==0,v=(n&st)!==0,h=!1,_;[_,h]=yt(()=>e[t]);var m=Ze in e||et in e,l=(((y=Xe(e,t))==null?void 0:y.set)??(m&&t in e&&(b=>e[t]=b)))||void 0,p=r,d=!0,w=!1,x=()=>(w=!0,d&&(d=!1,p=r),p),R;if(c)R=()=>{var b=e[t];return b===void 0?x():(d=!0,w=!1,b)};else{var $=be(()=>(o?se:W)(()=>e[t]));$.f|=Ke,R=()=>{var b=g($);return b!==void 0&&(p=void 0),b===void 0?p:b}}if(l){var a=e.$$legacy;return function(b,k){return arguments.length>0?((!c||!k||a||h)&&l(k?R():b),b):R()}}var s=!1,u=!1,f=ee(_),i=be(()=>se(()=>{var b=R(),k=g(f);return s?(s=!1,u=!0,k):(u=!1,f.v=b)}));return i.equals=Qe,function(b,k){if(ot!==null&&(s=u,R(),g(f)),arguments.length>0){const U=k?g(i):c&&v?ft(b):b;return i.equals(U)||(s=!0,G(f,U),w&&p!==void 0&&(p=U),Y(()=>g(i))),b}return g(i)}}const E=[];for(let e=0;e<256;++e)E.push((e+256).toString(16).slice(1));function St(e,t=0){return(E[e[t+0]]+E[e[t+1]]+E[e[t+2]]+E[e[t+3]]+"-"+E[e[t+4]]+E[e[t+5]]+"-"+E[e[t+6]]+E[e[t+7]]+"-"+E[e[t+8]]+E[e[t+9]]+"-"+E[e[t+10]]+E[e[t+11]]+E[e[t+12]]+E[e[t+13]]+E[e[t+14]]+E[e[t+15]]).toLowerCase()}let K;const Et=new Uint8Array(16);function Rt(){if(!K){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");K=crypto.getRandomValues.bind(crypto)}return K(Et)}const Ut=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ge={randomUUID:Ut};function j(e,t,n){var o;if(ge.randomUUID&&!e)return ge.randomUUID();e=e||{};const r=e.random??((o=e.rng)==null?void 0:o.call(e))??Rt();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,St(r)}const $t=()=>fetch("https://bolt-api/send-message",{method:"POST",body:new Uint8Array([1,0])});var It=(e,t,n)=>t(g(n),!1),At=F('<button class="h-[14px] w-[14px] pointer-events-auto"><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full" alt="Hide"></button>'),Pt=(e,t,n)=>t(g(n),!0),Tt=F('<button class="h-[14px] w-[14px] pointer-events-auto"><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full rotate-270" alt="Expand"></button>'),Ot=(e,t,n)=>t(g(n)),Dt=(e,t,n)=>t(g(n)),Lt=(e,t,n)=>t(g(n)),Mt=(e,t,n,r)=>t(g(n),g(r)),Nt=(e,t,n,r)=>t(g(n),g(r)),Ct=F('<div> <button class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0" title="Delete"><img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete"></button> <button class="absolute rounded-lg right-[18px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0" title="Edit"><img src="plugin://app/images/gear-solid.svg" class="absolute top-[2px] left-[2px] w-[14px] h-[14px]" alt="Edit"></button></div>'),Ft=F('<div><!> <button class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0" title="Delete"><img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete"></button> <button class="absolute rounded-lg right-[18px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0" title="Edit"><img src="plugin://app/images/gear-solid.svg" class="absolute top-[2px] left-[2px] w-[14px] h-[14px]" alt="Edit"></button> <button class="absolute rounded-lg right-[36px] top-0 h-[18px] w-[18px] hover:bg-emerald-400 pointer-events-auto py-0 by-0" title="Add rule"><img src="plugin://app/images/plus-solid.svg" class="w-full h-full" alt="Add rule"></button></div> <!>',1),qt=F('<div><!> <button class="rounded-sm my-1 px-2 py-1 bg-emerald-400 pointer-events-auto hover:opacity-75">Add ruleset</button></div>');function Ht(e,t){ye(t,!1);const[n,r]=xt(),o=()=>ht(v(),"$list",n);new URLSearchParams(window.location.search),window.addEventListener("message",a=>{if(!a.data||typeof a.data!="object"||a.data.type!=="pluginMessage")return;const s=new Uint16Array(a.data.content.slice(0,2))[0];switch(s){case 1:{const u=new URLSearchParams(new TextDecoder().decode(a.data.content.slice(2)));let f=u.get("id"),i=null;f?i=Q(v())[f]:f=j(),wt(v(),Y(o)[f]={id:f,name:u.get("name"),rules:i?i.rules:{},expanded:i?i.expanded:!1,alert:i?i.alert:!1,doFlashWindow:u.get("flash_window")==="1",sound:u.get("sound")??void 0,volume:parseInt(u.get("volume")),onlyIfUnfocused:u.get("only_if_unfocused")==="1"},Y(o));break}case 2:{const u=new URLSearchParams(new TextDecoder().decode(a.data.content.slice(2))),f=o(),i=f[u.get("ruleset_id")];let y=u.get("id"),b=null;y?b=i.rules[y]:y=j();let k=u.get("number");i.rules[y]={id:y,ruletype:u.get("type"),alert:b?b.alert:!1,number:k?parseInt(k):void 0,ref:u.get("ref")??void 0,comparator:u.get("comparator")??void 0,find:u.get("find")??void 0},i.expanded=!0,v().set(f);break}default:console.error(`unknown message type ${s}`)}});let c=Ee(!1),v=kt(t,"list",12);const h=a=>{let s={id:a.id,name:a.name,only_if_unfocused:a.onlyIfUnfocused?"1":"0",flash_window:a.doFlashWindow?"1":"0",volume:a.volume.toString()};a.sound&&(s.sound=a.sound);const u="\0".concat(new URLSearchParams(s).toString());fetch("https://bolt-api/send-message",{method:"POST",body:u})},_=a=>{let s={ruleset_id:a.id};const u="\0".concat(new URLSearchParams(s).toString());fetch("https://bolt-api/send-message",{method:"POST",body:u})},m=(a,s)=>{let u={ruleset_id:a.id,id:s.id,type:s.ruletype};s.number&&(u.number=s.number.toString()),s.ref&&(u.ref=s.ref),s.comparator&&(u.comparator=s.comparator),s.find&&(u.find=s.find);const f="\0".concat(new URLSearchParams(u).toString());fetch("https://bolt-api/send-message",{method:"POST",body:f})},l=a=>{const s=Q(v());delete s[a.id],v().set(s)},p=(a,s)=>{delete a.rules[s.id],v().set(o())},d=(a,s)=>{a.expanded=s,v(v())},w=a=>{switch(a.ruletype){case L.afktimer:return a.number?`afk timer (${Math.floor(a.number/1e6)} sec)`:"afk timer";case L.buff:switch(a.comparator){case"active":return`buff '${a.ref}' active`;case"inactive":return`buff '${a.ref}' inactive`;case"lessthan":return`buff '${a.ref}' < ${a.number}`;case"greaterthan":return`buff '${a.ref}' > ${a.number}`;case"parenslessthan":return`buff '${a.ref}' parentheses < ${a.number}`;case"parenscreaterthan":return`buff '${a.ref}' parentheses > ${a.number}`;default:return`buff '${a.ref}'`}case L.chat:return`chat text: '${a.find}'`;case L.model:return`3D model: '${a.ref}'`;case L.popup:return`popup text: '${a.find}'`;case L.stat:return a.number?`stat '${a.ref}' < ${Math.floor(a.number*100)}%`:"";case L.xpgain:return a.number?`xp gain timeout (${Math.floor(a.number/1e6)} sec)`:"xp gain";default:return"unknown"}};lt(()=>(o(),g(c)),()=>{const a=o();if(g(c)||Object.keys(a).length>0,g(c)){const s=Object.values(a).map(f=>({id:f.id,name:f.name,rules:Object.values(f.rules).map(i=>({ruletype:i.ruletype,number:i.number,ref:i.ref,comparator:i.comparator,find:i.find})),doFlashWindow:f.doFlashWindow,sound:f.sound,volume:f.volume,onlyIfUnfocused:f.onlyIfUnfocused})),u="\0".concat(JSON.stringify(s));fetch("https://bolt-api/send-message",{method:"POST",body:u})}else G(c,!0)}),ut(),ke();var x=qt(),R=T(x);de(R,1,()=>Object.values(o()),ce,(a,s,u)=>{var f=Ft(),i=oe(f),y=T(i);{var b=I=>{var A=At();A.__click=[It,d,s],M(I,A)},k=I=>{var A=Tt();A.__click=[Pt,d,s],M(I,A)};ie(y,I=>{g(s).expanded?I(b):I(k,!1)})}var U=S(y),O=S(U);O.__click=[Ot,l,s];var q=S(O,2);q.__click=[Dt,h,s];var D=S(q,2);D.__click=[Lt,_,s];var H=S(i,2);{var Ie=I=>{var A=ct(),Ae=oe(A);de(Ae,1,()=>Object.values(g(s).rules),ce,(Pe,V)=>{var J=Ct(),te=T(J),ne=S(te);ne.__click=[Mt,p,s,V];var Te=S(ne,2);Te.__click=[Nt,m,s,V],le((Oe,De)=>{pe(J,ve(Oe)),ue(te,`${De??""} `)},[()=>"relative px-1 w-full text-[8pt] ".concat(g(V).alert?"bg-red-400":u&1?"bg-gray-200":"bg-gray-300"),()=>w(g(V))],W),M(Pe,J)}),M(I,A)};ie(H,I=>{g(s).expanded&&I(Ie)})}le(I=>{pe(i,ve(I)),ue(U,` ${g(s).name??""} `)},[()=>"relative w-full text-[8pt] ".concat(g(s).alert?"bg-red-400":u&1?"bg-gray-200":"bg-gray-300")],W),M(a,f)});var $=S(R,2);$.__click=[$t],M(e,x),Se(),r()}we(["click"]);const Vt=()=>fetch("https://bolt-api/close-request");var Bt=(e,t)=>{e.button===0&&t("-1","-1")},Wt=(e,t)=>{e.button===0&&t("0","-1")},zt=(e,t)=>{e.button===0&&t("1","-1")},Yt=(e,t)=>{e.button===0&&t("-1","0")},jt=(e,t)=>{e.button===0&&t("1","0")},Gt=(e,t)=>{e.button===0&&t("-1","1")},Jt=(e,t)=>{e.button===0&&t("0","1")},Xt=(e,t)=>{e.button===0&&t("1","1")},Kt=(e,t)=>{e.button===0&&t("0","0")},Qt=F('<main><div class="absolute grid grid-cols-[5px_auto_5px] grid-rows-[5px_auto_5px] top-0 left-0 bottom-0 right-0 z-100 pointer-events-none"><div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="pointer-events-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div></div> <div class="m-[7px] w-auto h-auto"><div class="m-0 p-0 border-b border-black absolute top-[5px] right-[5px] w-[18px] h-[19px]"><button class="m-0 p-0 absolute top-0 left-0 w-full h-full select-none text-center text-[12px] bg-[hsl(0,70%,50%)] hover:bg-[hsl(0,100%,50%)]">X</button></div> <div class="m-0 p-0 border-b border-black absolute left-[5px] top-[5px] right-[23px] h-[19px] bg-[grey] text-center text-[10pt]"><p class="m-0 p-0 color-black select-none pointer-events-none">Alerts</p></div> <div class="fixed top-[24px] bottom-[6px] left-[5px] right-[5px] text-[10pt] pointer-events-none"><!></div></div></main>');function Zt(e,t){ye(t,!1);const n=new URLSearchParams(window.location.search);let r=Ee((i=>{const y=i.get("list");if(!y)return _e({});const b=JSON.parse(atob(y));let k={};for(const U of b){let O={};for(const D of U.rules){const H=j();O[H]={id:H,ruletype:D.ruletype,alert:!1,number:D.number,ref:D.ref,comparator:D.comparator,find:D.find}}const q=j();k[q]={id:q,name:U.name,rules:O,expanded:!1,alert:!1,doFlashWindow:U.doFlashWindow,sound:U.sound,volume:U.volume,onlyIfUnfocused:U.onlyIfUnfocused}}return _e(k)})(n));const o=(i,y)=>fetch("https://bolt-api/start-reposition?".concat(new URLSearchParams({h:i,v:y}).toString()));ke();var c=Qt(),v=T(c),h=T(v);h.__mousedown=[Bt,o];var _=S(h,2);_.__mousedown=[Wt,o];var m=S(_,2);m.__mousedown=[zt,o];var l=S(m,2);l.__mousedown=[Yt,o];var p=S(l,4);p.__mousedown=[jt,o];var d=S(p,2);d.__mousedown=[Gt,o];var w=S(d,2);w.__mousedown=[Jt,o];var x=S(w,2);x.__mousedown=[Xt,o];var R=S(v,2),$=T(R),a=T($);a.__click=[Vt];var s=S($,2);s.__mousedown=[Kt,o];var u=S(s,2),f=T(u);Ht(f,{get list(){return g(r)},set list(i){G(r,i)},$$legacy:!0}),M(e,c),Se()}we(["mousedown","click"]);dt(Zt,{target:document.body});
