import{b as Ve,g as d,d as G,r as Ue,a as Re,p as je,I as re,c as Ae,e as ee,i as We,m as fe,s as be,E as He,f as ze,h as Ye,j as Ge,k as Je,l as Xe,n as Ke,o as Qe,q as Ze,t as H,u as te,v as et,w as tt,x as N,y as nt,z as at,L as rt,A as st,S as ot,B as it,C as lt,P as ut,D as ct,R as dt,F as _e,G as ge,H as ft,J as pt,K as vt,M as Ie,N as $e,O as Y,Q as bt,T as _t,U as Oe,V as j,W as se,X as R,Y as q,Z as Te,_ as V,$ as me,a0 as oe,a1 as he,a2 as gt,a3 as mt}from"./legacy-mJe-Rq-b.js";import{p as ht,R as P}from"./interfaces-DAiCiEuy.js";let Le=!1;function xe(e,t){return t}function xt(e,t,a,s){for(var i=[],f=t.length,m=0;m<f;m++)ze(t[m].e,i,!0);var h=f>0&&i.length===0&&a!==null;if(h){var p=a.parentNode;Ye(p),p.append(a),s.clear(),B(e,t[0].prev,t[f-1].next)}Ge(i,()=>{for(var b=0;b<f;b++){var l=t[b];h||(s.delete(l.k),B(e,l.prev,l.next)),Je(l.e,!h)}})}function ye(e,t,a,s,i,f=null){var m=e,h={items:new Map,first:null},p=null,b=!1,l=G(()=>{var _=a();return Ze(_)?_:_==null?[]:Ae(_)});Ve(()=>{var _=d(l),v=_.length;b&&v===0||(b=v===0,yt(_,h,m,i,t,s,a),f!==null&&(v===0?p?Ue(p):p=Re(()=>f(m)):p!==null&&je(p,()=>{p=null})),d(l))})}function yt(e,t,a,s,i,f,m){var h=e.length,p=t.items,b=t.first,l=b,_,v=null,k=[],y=[],$,T,w,U;for(U=0;U<h;U+=1){if($=e[U],T=f($,U),w=p.get(T),w===void 0){var C=l?l.e.nodes_start:a;v=kt(C,t,v,v===null?t.first:v.next,$,T,U,s,i,m),p.set(T,v),k=[],y=[],l=v.next;continue}if(wt(w,$,U),w.e.f&re&&Ue(w.e),w!==l){if(_!==void 0&&_.has(w)){if(k.length<y.length){var L=y[0],S;v=L.prev;var D=k[0],n=k[k.length-1];for(S=0;S<k.length;S+=1)we(k[S],L,a);for(S=0;S<y.length;S+=1)_.delete(y[S]);B(t,D.prev,n.next),B(t,v,D),B(t,n,L),l=L,v=n,U-=1,k=[],y=[]}else _.delete(w),we(w,l,a),B(t,w.prev,w.next),B(t,w,v===null?t.first:v.next),B(t,v,w),v=w;continue}for(k=[],y=[];l!==null&&l.k!==T;)l.e.f&re||(_??(_=new Set)).add(l),y.push(l),l=l.next;if(l===null)continue;w=l}k.push(w),v=w,l=w.next}if(l!==null||_!==void 0){for(var r=_===void 0?[]:Ae(_);l!==null;)l.e.f&re||r.push(l),l=l.next;var o=r.length;if(o>0){var u=null;xt(t,r,u,p)}}ee.first=t.first&&t.first.e,ee.last=v&&v.e}function wt(e,t,a,s){We(e.v,t),e.i=a}function kt(e,t,a,s,i,f,m,h,p,b){var l=(p&Ke)!==0,_=(p&Qe)===0,v=l?_?fe(i):be(i):i,k=p&He?be(m):m,y={i:k,v,k:f,a:null,e:null,prev:a,next:s};try{return y.e=Re(()=>h(e,v,k,b),Le),y.e.prev=a&&a.e,y.e.next=s&&s.e,a===null?t.first=y:(a.next=y,a.e.next=y.e),s!==null&&(s.prev=y,s.e.prev=y.e),y}finally{}}function we(e,t,a){for(var s=e.next?e.next.e.nodes_start:a,i=t?t.e.nodes_start:a,f=e.e.nodes_start;f!==s;){var m=Xe(f);i.before(f),f=m}}function B(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function Pe(e){var t,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(a=Pe(e[t]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function St(){for(var e,t,a=0,s="",i=arguments.length;a<i;a++)(e=arguments[a])&&(t=Pe(e))&&(s&&(s+=" "),s+=t);return s}function ie(e){return typeof e=="object"?St(e):e??""}function le(e,t,a){var s=e.__className,i=Et(t);(s!==i||Le)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i)}function Et(e,t){return(e??"")+""}function De(e,t,a){if(e==null)return t(void 0),H;const s=te(()=>e.subscribe(t,a));return s.unsubscribe?()=>s.unsubscribe():s}const W=[];function ke(e,t=H){let a=null;const s=new Set;function i(h){if(et(e,h)&&(e=h,a)){const p=!W.length;for(const b of s)b[1](),W.push(b,e);if(p){for(let b=0;b<W.length;b+=2)W[b][0](W[b+1]);W.length=0}}}function f(h){i(h(e))}function m(h,p=H){const b=[h,p];return s.add(b),s.size===1&&(a=t(i,f)||H),h(e),()=>{s.delete(b),s.size===0&&a&&(a(),a=null)}}return{set:i,update:f,subscribe:m}}function ce(e){let t;return De(e,a=>t=a)(),t}let Z=!1,de=Symbol();function Ut(e,t,a){const s=a[t]??(a[t]={store:null,source:fe(void 0),unsubscribe:H});if(s.store!==e&&!(de in a))if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=H;else{var i=!0;s.unsubscribe=De(e,f=>{i?s.source.v=f:N(s.source,f)}),i=!1}return e&&de in a?ce(e):d(s.source)}function Rt(){const e={};function t(){tt(()=>{for(var a in e)e[a].unsubscribe();nt(e,de,{enumerable:!1,value:!0})})}return[e,t]}function At(e,t,a){return e.set(a),t}function It(e){var t=Z;try{return Z=!1,[e(),Z]}finally{Z=t}}function Se(e){for(var t=ee,a=ee;t!==null&&!(t.f&(ct|dt));)t=t.parent;try{return _e(t),e()}finally{_e(a)}}function $t(e,t,a,s){var D;var i=(a&vt)!==0,f=!lt||(a&ut)!==0,m=(a&ft)!==0,h=!1,p;[p,h]=It(()=>e[t]);var b=ot in e||it in e,l=(((D=at(e,t))==null?void 0:D.set)??(b&&t in e&&(n=>e[t]=n)))||void 0,_=s,v=!0,k=!1,y=()=>(k=!0,v&&(v=!1,_=s),_),$;if(f)$=()=>{var n=e[t];return n===void 0?y():(v=!0,k=!1,n)};else{var T=Se(()=>(i?ge:G)(()=>e[t]));T.f|=rt,$=()=>{var n=d(T);return n!==void 0&&(_=void 0),n===void 0?_:n}}if(l){var w=e.$$legacy;return function(n,r){return arguments.length>0?((!f||!r||w||h)&&l(r?$():n),n):$()}}var U=!1,C=!1,L=fe(p),S=Se(()=>ge(()=>{var n=$(),r=d(L);return U?(U=!1,C=!0,r):(C=!1,L.v=n)}));return S.equals=st,function(n,r){if(pt!==null&&(U=C,$(),d(L)),arguments.length>0){const o=r?d(S):f&&m?ht(n):n;return S.equals(o)||(U=!0,N(L,o),k&&_!==void 0&&(_=o),te(()=>d(S))),n}return d(S)}}const Me=(e,t)=>{switch(e){case P.afktimer:case P.buff:case P.model:case P.stat:return!1;case P.chat:case P.popup:return;case P.xpgain:return t?!1:void 0}},I=[];for(let e=0;e<256;++e)I.push((e+256).toString(16).slice(1));function Ot(e,t=0){return(I[e[t+0]]+I[e[t+1]]+I[e[t+2]]+I[e[t+3]]+"-"+I[e[t+4]]+I[e[t+5]]+"-"+I[e[t+6]]+I[e[t+7]]+"-"+I[e[t+8]]+I[e[t+9]]+"-"+I[e[t+10]]+I[e[t+11]]+I[e[t+12]]+I[e[t+13]]+I[e[t+14]]+I[e[t+15]]).toLowerCase()}let ue;const Tt=new Uint8Array(16);function Lt(){if(!ue){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ue=crypto.getRandomValues.bind(crypto)}return ue(Tt)}const Pt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ee={randomUUID:Pt};function ne(e,t,a){var i;if(Ee.randomUUID&&!e)return Ee.randomUUID();e=e||{};const s=e.random??((i=e.rng)==null?void 0:i.call(e))??Lt();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Ot(s)}const Dt=()=>fetch("https://bolt-api/send-message",{method:"POST",body:new Uint8Array([1,0])});var Mt=(e,t,a)=>t(d(a),!1),Ct=j('<button class="h-[14px] w-[14px] pointer-events-auto"><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full" alt="Hide"></button>'),Nt=(e,t,a)=>t(d(a),!0),Ft=j('<button class="h-[14px] w-[14px] pointer-events-auto"><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full rotate-270" alt="Expand"></button>'),qt=(e,t,a)=>t(d(a)),Bt=(e,t,a)=>t(d(a)),Vt=(e,t,a)=>t(d(a)),jt=(e,t,a,s)=>t(d(a),d(s)),Wt=(e,t,a,s)=>t(d(a),d(s)),Ht=j('<div> <button class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0" title="Delete"><img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete"></button> <button class="absolute rounded-lg right-[14px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0" title="Edit"><img src="plugin://app/images/gear-solid.svg" class="absolute top-[3px] left-[3px] w-[12px] h-[12px]" alt="Edit"></button></div>'),zt=j('<div><!> <button class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0" title="Delete"><img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete"></button> <button class="absolute rounded-lg right-[14px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0" title="Edit"><img src="plugin://app/images/gear-solid.svg" class="absolute top-[3px] left-[3px] w-[12px] h-[12px]" alt="Edit"></button> <button class="absolute rounded-lg right-[27px] top-0 h-[18px] w-[18px] hover:bg-emerald-400 pointer-events-auto py-0 by-0" title="Add rule"><img src="plugin://app/images/plus-solid.svg" class="absolute top-[3px] left-[3px] w-[12px] h-[12px]" alt="Add rule"></button></div> <!>',1),Yt=(e,t)=>N(t,!0),Gt=j("<button>Enable sounds</button>"),Jt=j('<div><!> <!> <button class="rounded-sm m-1 px-2 py-1 bg-emerald-400 pointer-events-auto hover:opacity-75">Add ruleset</button></div>');function Xt(e,t){$e(t,!1);const[a,s]=Rt(),i=()=>Ut(l(),"$list",a);let f=Y(!1),m=Y(!0);setInterval(()=>{N(m,!d(m))},350);const h=(n,r)=>{let o=0;const u=g=>{r&&r.setUint8(o,g?1:0),o+=1},c=g=>{r&&r.setUint32(o,g,!0),o+=4},E=g=>{r&&r.setInt32(o,g,!0),o+=4},A=g=>{const x=new TextEncoder().encode(g);if(c(g.length),r)for(let O=0;O<x.byteLength;O+=1)r.setUint8(o+O,x[O]);o+=x.byteLength};c(n.length);for(const g of n){A(g.id),u(g.alert),u(g.doFlashWindow),u(g.onlyIfUnfocused),c(Object.keys(g.rules).length);for(const x of Object.values(g.rules)){A(x.id),A(x.ruletype);const O=typeof x.alert=="boolean",z=typeof x.number=="number",J=typeof x.ref=="string",X=typeof x.comparator=="string",K=typeof x.find=="string";u(O),O&&u(x.alert===!0),u(z),z&&E(x.number),u(J),J&&A(x.ref),u(X),X&&A(x.comparator),u(K),K&&A(x.find)}}return o};window.addEventListener("message",n=>{if(!n.data||typeof n.data!="object"||n.data.type!=="pluginMessage")return;const r=new Uint16Array(n.data.content.slice(0,2))[0];switch(r){case 1:{const o=new URLSearchParams(new TextDecoder().decode(n.data.content.slice(2)));let u=o.get("id"),c=null;u?c=ce(l())[u]:u=ne(),At(l(),te(i)[u]={id:u,name:o.get("name"),rules:c?c.rules:{},expanded:c?c.expanded:!1,alert:c?c.alert:!1,doFlashWindow:o.get("flash_window")==="1",sound:o.get("sound")??void 0,volume:parseInt(o.get("volume")),onlyIfUnfocused:o.get("only_if_unfocused")==="1"},te(i));break}case 2:{const o=new URLSearchParams(new TextDecoder().decode(n.data.content.slice(2))),u=i(),c=u[o.get("ruleset_id")];let E=o.get("id"),A=null;E?A=c.rules[E]:E=ne();const g=o.get("number"),x=o.get("type");c.rules[E]={id:E,ruletype:x,alert:A?A.alert:Me(x,!!g),number:g?parseInt(g):void 0,ref:o.get("ref")??void 0,comparator:o.get("comparator")??void 0,find:o.get("find")??void 0,exacttext:o.get("exacttext")??void 0},c.expanded=!0,l().set(u);break}case 3:{const o=i(),u=new URLSearchParams(new TextDecoder().decode(n.data.content.slice(2))),c=o[u.get("ruleset_id")],E=c.rules[u.get("rule_id")],A=u.get("alert")==="1",g=typeof E.alert=="boolean";g&&(E.alert=A);let x=!1;for(let O of Object.values(c.rules))O.alert&&(x=!0);if((x&&!c.alert||A&&!g)&&c.sound&&d(f)){const O=new Audio("plugin://app/sounds/".concat(c.sound));O.volume=Math.min(Math.max(c.volume/100,0),1),O.play()}c.alert=x,N(p,!1),N(b,!1),l().set(o);break}default:console.error(`unknown message type ${r}`)}});let p=Y(!1),b=Y(!0),l=$t(t,"list",12);const _=n=>{let r={id:n.id,name:n.name,only_if_unfocused:n.onlyIfUnfocused?"1":"0",flash_window:n.doFlashWindow?"1":"0",volume:n.volume.toString()};n.sound&&(r.sound=n.sound);const o="\0".concat(new URLSearchParams(r).toString());fetch("https://bolt-api/send-message",{method:"POST",body:o})},v=n=>{let r={ruleset_id:n.id};const o="\0".concat(new URLSearchParams(r).toString());fetch("https://bolt-api/send-message",{method:"POST",body:o})},k=(n,r)=>{let o={ruleset_id:n.id,id:r.id,type:r.ruletype};r.number&&(o.number=r.number.toString()),r.ref&&(o.ref=r.ref),r.comparator&&(o.comparator=r.comparator),r.find&&(o.find=r.find),r.exacttext&&(o.exacttext=r.exacttext);const u="\0".concat(new URLSearchParams(o).toString());fetch("https://bolt-api/send-message",{method:"POST",body:u})},y=n=>{const r=ce(l());delete r[n.id],l().set(r)},$=(n,r)=>{delete n.rules[r.id],n.alert=!1;for(r of Object.values(n.rules))r.alert&&(n.alert=!0);l().set(i())},T=(n,r)=>{n.expanded=r,l(l())},w=n=>{switch(n.ruletype){case P.afktimer:return typeof n.number!="number"?"afk timer":`afk timer (${Math.floor(n.number/1e6)} sec)`;case P.buff:switch(n.comparator){case"active":return`buff '${n.ref}' active`;case"inactive":return`buff '${n.ref}' inactive`;case"lessthan":return`buff '${n.ref}' < ${n.number}`;case"greaterthan":return`buff '${n.ref}' > ${n.number}`;case"parenslessthan":return`buff '${n.ref}' parentheses < ${n.number}`;case"parenscreaterthan":return`buff '${n.ref}' parentheses > ${n.number}`;default:return`buff '${n.ref}'`}case P.chat:return`chat text: '${n.exacttext??n.find}'`;case P.model:return`3D model: '${n.ref}'`;case P.popup:return`popup text: '${n.exacttext??n.find}'`;case P.stat:return typeof n.number!="number"?`stat '${n.ref}'`:`stat '${n.ref}' < ${n.number}%`;case P.xpgain:return typeof n.number!="number"?"xp gain":`xp gain timeout (${Math.floor(n.number/1e6)} sec)`;default:return"unknown"}};bt(()=>(i(),d(b),d(p)),()=>{const n=i();if(d(b)&&(d(p)||Object.keys(n).length>0)){const r=Object.values(n),o=h(r,null),u=new ArrayBuffer(o+2);new DataView(u,0,2).setUint16(0,5,!0),h(r,new DataView(u,2,o)),fetch("https://bolt-api/send-message",{method:"POST",body:u})}if(d(p)){const r=Object.values(n).map(u=>({name:u.name,rules:Object.values(u.rules).map(c=>({ruletype:c.ruletype,number:c.number,ref:c.ref,comparator:c.comparator,find:c.find,exacttext:c.exacttext})),doFlashWindow:u.doFlashWindow,sound:u.sound,volume:u.volume,onlyIfUnfocused:u.onlyIfUnfocused})),o="\0".concat(JSON.stringify(r));fetch("https://bolt-api/send-message",{method:"POST",body:o})}else N(p,!0);N(b,!0)}),_t(),Oe();var U=Jt(),C=V(U);ye(C,1,()=>Object.values(i()),xe,(n,r,o)=>{var u=zt(),c=me(u),E=V(c);{var A=M=>{var F=Ct();F.__click=[Mt,T,r],q(M,F)},g=M=>{var F=Ft();F.__click=[Nt,T,r],q(M,F)};se(E,M=>{d(r).expanded?M(A):M(g,!1)})}var x=R(E),O=R(x);O.__click=[qt,y,r];var z=R(O,2);z.__click=[Bt,_,r];var J=R(z,2);J.__click=[Vt,v,r];var X=R(c,2);{var K=M=>{var F=gt(),Ce=me(F);ye(Ce,1,()=>Object.values(d(r).rules),xe,(Ne,Q)=>{var ae=Ht(),pe=V(ae),ve=R(pe);ve.__click=[jt,$,r,Q];var Fe=R(ve,2);Fe.__click=[Wt,k,r,Q],oe((qe,Be)=>{le(ae,ie(qe)),he(pe,`${Be??""} `)},[()=>"relative px-1 w-full text-[8pt] h-[19px] ".concat(d(Q).alert&&d(m)?"bg-red-400":o&1?"bg-gray-200":"bg-gray-300"),()=>w(d(Q))],G),q(Ne,ae)}),q(M,F)};se(X,M=>{d(r).expanded&&M(K)})}oe(M=>{le(c,ie(M)),he(x,` ${d(r).name??""} `)},[()=>"relative w-full text-[8pt] h-[19px] ".concat(d(r).alert&&d(m)?"bg-red-400":o&1?"bg-gray-200":"bg-gray-300")],G),q(n,u)});var L=R(C,2);{var S=n=>{var r=Gt();r.__click=[Yt,f],oe(o=>le(r,ie(o)),[()=>"rounded-sm m-1 px-2 py-1 pointer-events-auto hover:opacity-75 ".concat(d(m)?"bg-red-400":"bg-blue-400")],G),q(n,r)};se(L,n=>{d(f)||n(S)})}var D=R(L,2);D.__click=[Dt],q(e,U),Te(),s()}Ie(["click"]);const Kt=()=>fetch("https://bolt-api/close-request");var Qt=(e,t)=>{e.button===0&&t("-1","-1")},Zt=(e,t)=>{e.button===0&&t("0","-1")},en=(e,t)=>{e.button===0&&t("1","-1")},tn=(e,t)=>{e.button===0&&t("-1","0")},nn=(e,t)=>{e.button===0&&t("1","0")},an=(e,t)=>{e.button===0&&t("-1","1")},rn=(e,t)=>{e.button===0&&t("0","1")},sn=(e,t)=>{e.button===0&&t("1","1")},on=(e,t)=>{e.button===0&&t("0","0")},ln=j('<main><div class="absolute grid grid-cols-[5px_auto_5px] grid-rows-[5px_auto_5px] top-0 left-0 bottom-0 right-0 z-100 pointer-events-none"><div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="pointer-events-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div> <div class="bg-black pointer-events-auto select-none"></div></div> <div class="m-[7px] w-auto h-auto"><div class="m-0 p-0 border-b border-black absolute top-[5px] right-[5px] w-[18px] h-[19px]"><button class="m-0 p-0 absolute top-0 left-0 w-full h-full select-none text-center text-[12px] bg-[hsl(0,70%,50%)] hover:bg-[hsl(0,100%,50%)]">X</button></div> <div class="m-0 p-0 border-b border-black absolute left-[5px] top-[5px] right-[23px] h-[19px] bg-[grey] text-center text-[10pt]"><p class="m-0 p-0 color-black select-none pointer-events-none">Alerts</p></div> <div class="fixed top-[24px] bottom-[6px] left-[5px] right-[5px] text-[10pt] pointer-events-none"><!></div></div></main>');function un(e,t){$e(t,!1);const a=new URLSearchParams(window.location.search);let s=Y((S=>{const D=S.get("list");if(!D)return ke({});const n=JSON.parse(atob(D));let r={};for(const o of n){let u={};for(const E of o.rules){const A=ne(),g=E.ruletype;u[A]={id:A,ruletype:g,alert:Me(g,!!E.number),number:E.number,ref:E.ref,comparator:E.comparator,find:E.find,exacttext:E.exacttext}}const c=ne();r[c]={id:c,name:o.name,rules:u,expanded:!1,alert:!1,doFlashWindow:o.doFlashWindow,sound:o.sound,volume:o.volume,onlyIfUnfocused:o.onlyIfUnfocused}}return ke(r)})(a));const i=(S,D)=>fetch("https://bolt-api/start-reposition?".concat(new URLSearchParams({h:S,v:D}).toString()));Oe();var f=ln(),m=V(f),h=V(m);h.__mousedown=[Qt,i];var p=R(h,2);p.__mousedown=[Zt,i];var b=R(p,2);b.__mousedown=[en,i];var l=R(b,2);l.__mousedown=[tn,i];var _=R(l,4);_.__mousedown=[nn,i];var v=R(_,2);v.__mousedown=[an,i];var k=R(v,2);k.__mousedown=[rn,i];var y=R(k,2);y.__mousedown=[sn,i];var $=R(m,2),T=V($),w=V(T);w.__click=[Kt];var U=R(T,2);U.__mousedown=[on,i];var C=R(U,2),L=V(C);Xt(L,{get list(){return d(s)},set list(S){N(s,S)},$$legacy:!0}),q(e,f),Te()}Ie(["mousedown","click"]);mt(un,{target:document.body});
