import{a6 as Co,M as Xo,N as Ko,O as I,g as o,x as l,Q as No,T as Jo,U as Qo,V as w,W as B,X as e,_ as g,a0 as U,a7 as N,Y as _,Z as Yo,$ as x,a2 as re,a3 as Zo}from"./legacy-DCYbLtyV.js";import{l as zo,b as z}from"./input-DTif-0_M.js";import{i as $o,R as a}from"./interfaces-D03hLfJa.js";function Mo(t,u,i){if(t.multiple)return oa(t,u);for(var n of t.options){var f=ie(n);if($o(f,u)){n.selected=!0;return}}(!i||u!==void 0)&&(t.selectedIndex=-1)}function ea(t,u){Co(()=>{var i=new MutationObserver(()=>{var n=t.__value;Mo(t,n)});return i.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{i.disconnect()}})}function J(t,u,i=u){var n=!0;zo(t,"change",f=>{var S=f?"[selected]":":checked",T;if(t.multiple)T=[].map.call(t.querySelectorAll(S),ie);else{var pe=t.querySelector(S)??t.querySelector("option:not([disabled])");T=pe&&ie(pe)}i(T)}),Co(()=>{var f=u();if(Mo(t,f,n),n&&f===void 0){var S=t.querySelector(":checked");S!==null&&(f=ie(S),i(f))}t.__value=f,n=!1}),ea(t)}function oa(t,u){for(var i of t.options)i.selected=~u.indexOf(ie(i))}function ie(t){return"__value"in t?t.__value:t.value}const aa=(t,u,i,n,f,S,T)=>{switch(o(u)){case a.afktimer:l(i,60*14),l(n,o(i));break;case a.buff:l(f,null),l(n,null),l(S,null);break;case a.chat:l(T,null);break;case a.model:l(f,null);break;case a.popup:l(T,null);break;case a.stat:l(f,null),l(n,null);break;case a.xpgain:l(n,null);break}},ta=(t,u)=>fetch("https://bolt-api/send-message",{method:"POST",body:u()}),la=()=>fetch("https://bolt-api/close-request");var na=w('<p class="text-[16pt] font-bold">New Rule</p> <p class="text-[10pt]">A rule decides when you want to be alerted. When this condition becomes active, the ruleset will send you an alert.</p>',1),ra=w('<p class="text-[16pt] font-bold">Edit Rule</p>'),ia=(t,u,i)=>l(u,Math.floor(o(i)*1e6)),pa=w('<label for="2">Timeout (seconds):</label> <br> <input id="2" type="number" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),ua=w('<label for="5">This number:</label> <br> <input id="5" type="number" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),sa=w(`<label for="3">Buff or debuff:</label> <br> <select id="3" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><optgroup class="text-black" label="Potions"><option>Adrenaline Potion Cooldown</option> <option>Aggression Potion</option> <option>Antifire</option> <option>Antipoison</option> <option>Overload</option> <option>Perfect Plus</option> <option>Poisonous</option> <option>Powerburst Cooldown</option> <option>Prayer Renewal</option> <option>Spirit Attraction Potion</option></optgroup><optgroup class="text-black" label="Powders"><option>Powder of Burials</option> <option>Powder of Defence</option> <option>Powder of Item Protection</option> <option>Powder of Penance</option> <option>Powder of Protection</option> <option>Powder of Pulverising</option></optgroup><optgroup class="text-black" label="Incense"><option>Avantoe Incense</option> <option>Cadantine Incense</option> <option>Dwarfweed Incense</option> <option>Fellstalk Incense</option> <option>Guam Incense</option> <option>Harralander Incense</option> <option>Irit Incense</option> <option>Kwuarm Incense</option> <option>Lantadyme Incense</option> <option>Marrentill Incense</option> <option>Ranarr Incense</option> <option>Snapdragon Incense</option> <option>Spiritweed Incense</option> <option>Tarromin Incense</option> <option>Toadflax Incense</option> <option>Torstol Incense</option> <option>Wergali Incense</option></optgroup><optgroup class="text-black" label="Miscellaneous"><option>Animate Dead</option> <option>Archaeologist's Tea</option> <option>Aura</option> <option>Bonfire</option> <option>Cannonballs</option> <option>Cannon Timer</option> <option>Cinder Core</option> <option>Clan Citadel Buff</option> <option>Crystal Mark</option> <option>Darkness</option> <option>Elven Ritual Shard Cooldown</option> <option>Excalibur Cooldown</option> <option>Firelighter</option> <option>God Book</option> <option>Grimoire</option> <option>Hi-spec Monocle</option> <option>Luminite Injector</option> <option>Material Manual</option> <option>Porter</option> <option>Pulse Core</option> <option>Roar of Osseous</option> <option>Rock of Resilience</option> <option>Scrimshaw</option> <option>Sign of Life</option> <option>Stone of Jas (glacor cavern)</option> <option>Summon</option> <option>Tarpaulin Sheet</option> <option>Valentine's Flip</option> <option>Valentine's Slam</option> <option>Wise Perk</option></optgroup></select> <br><br> <label for="4">Alert when the buff is:</label> <br> <select id="4" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">Active</option><option class="text-black">Inactive</option><option class="text-black">Less than</option><option class="text-black">Greater than</option><option class="text-black">Parentheses less than</option><option class="text-black">Parentheses greater than</option></select> <br> <!>`,1),va=(t,u,i,n)=>l(u,i(o(n))),_a=w('<label for="7">Text:</label> <br> <input id="7" type="text" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),ca=w('<label for="7">Pattern:</label> <br> <input id="7" type="text" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),fa=w('<label for="6">Match type:</label> <br> <select id="6" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">Exact</option><option class="text-black">Pattern</option></select> <br><br> <!>',1),da=w('<label for="8">Model:</label> <br> <select id="8" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">Lost souls</option><option class="text-black">Penguin agents 001-007</option><option class="text-black">Seren spirits</option><option class="text-black">Fire spirits</option></select>',1),ba=w('<label for="9">Stat:</label> <br> <select id="9" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">Health</option><option class="text-black">Adrenaline</option><option class="text-black">Prayer</option><option class="text-black">Summoning</option></select> <br><br> <label for="a">Threshold (percent):</label> <br> <input id="a" type="number" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),xa=(t,u,i)=>l(u,Math.floor(o(i)*1e6)),ma=w('<br><br> <label for="c">Timeout (seconds):</label> <br> <input id="c" type="number" class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">',1),ga=w('<label for="b">Mode:</label> <br> <select id="b" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">Alert on XP gain</option><option class="text-black">Alert on timeout</option></select> <!>',1),ha=w('<div class="mx-2 my-1 p-0 b-0 text-gray-200"><!> <hr class="my-4 opacity-40"> <div class="text-[8pt] w-auto"><label for="1" class="font-italic">Rule type:</label> <br> <select id="1" class="border-1 px-[3px] py-[2px] border-white text-white text-[10pt] focus:border-3 focus:px-[1px] focus:py-0"><option class="text-black">AFK timer</option><option class="text-black">Buffs/debuffs</option><option class="text-black">Chat text</option><option class="text-black">3D object</option><option class="text-black">Popup text</option><option class="text-black">Stat bars</option><option class="text-black">XP gain</option></select> <br><br> <!></div> <span><button class="w-25 bg-red-500 rounded-sm py-1 px-2 mr-1 mt-4 font-bold text-white text-center hover:opacity-75">Cancel</button> <button class="w-25 bg-blue-500 rounded-sm py-1 px-2 mt-4 font-bold text-white text-center enabled:hover:opacity-75 disabled:bg-gray-500">Save</button></span></div>');function wa(t,u){Ko(u,!1);const i=I();let n=new URLSearchParams(window.location.search),f=n.get("type"),S=n.get("number"),T=n.get("id"),pe=n.get("ruleset_id"),p=I(f||null),v=I(S?parseInt(S):null),d=I(n.get("ref")),h=I(n.get("comparator")),C=I(n.get("find")),$=I(),ue=I(o(C)===null),se=I(),X=I(null),ve=I();o(p)===a.afktimer&&o(v)?l($,Math.floor(o(v)/1e6)):o(p)===a.xpgain&&o(v)&&l(ve,Math.floor(o(v)/1e6));const Ro=r=>"^".concat(o(se).replaceAll(" ","").replaceAll("%","%%").replaceAll("(","%(").replaceAll(")","%)").replaceAll(".","%.").replaceAll("+","%+").replaceAll("-","%-").replaceAll("*","%*").replaceAll("?","%?").replaceAll("[","%[").replaceAll("^","%^").replaceAll("$","%$")),Lo=()=>{let r={ruleset_id:pe,type:o(p)};return T&&(r.id=T),o(v)&&(r.number=o(v).toString()),o(d)&&(r.ref=o(d)),o(h)&&(r.comparator=o(h)),o(C)&&(r.find=o(C)),"\0".concat(new URLSearchParams(r).toString())};No(()=>(o(p),o(v),o(d),o(h),o(C),o(X)),()=>{l(i,o(p)===a.afktimer&&o(v)!==null||o(p)===a.buff&&o(d)!==null&&o(h)!==null&&(o(v)!==null||o(h)==="active"||o(h)==="inactive")||o(p)===a.chat&&o(C)!==null||o(p)===a.model&&o(d)!==null||o(p)===a.popup&&o(C)!==null||o(p)===a.stat&&o(d)!==null&&o(v)!==null||o(p)===a.xpgain&&(o(v)!==null&&o(X)===!0||o(X)===!1))}),Jo(),Qo();var vo=ha(),_o=g(vo);{var Bo=r=>{var j=na();_(r,j)},jo=r=>{var j=ra();_(r,j)};B(_o,r=>{T===null?r(Bo):r(jo,!1)})}var co=e(_o,4),_e=e(g(co),4);U(()=>{o(p),N(()=>{})}),_e.__change=[aa,p,$,v,d,h,C];var de=g(_e),fo={},be=e(de),bo={},xe=e(be),xo={},me=e(xe),mo={},ge=e(me),go={},he=e(ge),ho={},wo=e(he),yo={},qo=e(_e,5);{var Eo=r=>{var j=pa(),ce=e(x(j),4);ce.__change=[ia,v,$],z(ce,()=>o($),we=>l($,we)),_(r,j)},Fo=r=>{var j=re(),ce=x(j);{var we=Q=>{var ee=sa(),oe=e(x(ee),4);U(()=>{o(d),N(()=>{})});var fe=g(oe),ae=g(fe);ae.value=(ae.__value="noadrenalinepotion")==null?"":"noadrenalinepotion";var M=e(ae,2);M.value=(M.__value="aggressionpotion")==null?"":"aggressionpotion";var q=e(M,2);q.value=(q.__value="antifire")==null?"":"antifire";var E=e(q,2);E.value=(E.__value="antipoison")==null?"":"antipoison";var F=e(E,2);F.value=(F.__value="overload")==null?"":"overload";var H=e(F,2);H.value=(H.__value="perfectplus")==null?"":"perfectplus";var y=e(H,2);y.value=(y.__value="poisonous")==null?"":"poisonous";var k=e(y,2);k.value=(k.__value="nopowerburst")==null?"":"nopowerburst";var R=e(k,2);R.value=(R.__value="prayerrenewal")==null?"":"prayerrenewal";var c=e(R,2);c.value=(c.__value="spiritattractionpotion")==null?"":"spiritattractionpotion";var m=e(fe),s=g(m);s.value=(s.__value="powderofburials")==null?"":"powderofburials";var b=e(s,2);b.value=(b.__value="powderofdefence")==null?"":"powderofdefence";var P=e(b,2);P.value=(P.__value="powderofitemprotection")==null?"":"powderofitemprotection";var G=e(P,2);G.value=(G.__value="powderofpenance")==null?"":"powderofpenance";var A=e(G,2);A.value=(A.__value="powderofprotection")==null?"":"powderofprotection";var O=e(A,2);O.value=(O.__value="powderofpulverising")==null?"":"powderofpulverising";var D=e(m),V=g(D);V.value=(V.__value="incenseavantoe")==null?"":"incenseavantoe";var L=e(V,2);L.value=(L.__value="incensecadantine")==null?"":"incensecadantine";var te=e(L,2);te.value=(te.__value="incensedwarfweed")==null?"":"incensedwarfweed";var le=e(te,2);le.value=(le.__value="incensefellstalk")==null?"":"incensefellstalk";var W=e(le,2);W.value=(W.__value="incenseguam")==null?"":"incenseguam";var Y=e(W,2);Y.value=(Y.__value="incenseharralander")==null?"":"incenseharralander";var Z=e(Y,2);Z.value=(Z.__value="incenseirit")==null?"":"incenseirit";var ne=e(Z,2);ne.value=(ne.__value="incensekwuarm")==null?"":"incensekwuarm";var ye=e(ne,2);ye.value=(ye.__value="incenselantadyme")==null?"":"incenselantadyme";var ke=e(ye,2);ke.value=(ke.__value="incensemarrentill")==null?"":"incensemarrentill";var Pe=e(ke,2);Pe.value=(Pe.__value="incenseranarr")==null?"":"incenseranarr";var Ae=e(Pe,2);Ae.value=(Ae.__value="incensesnapdragon")==null?"":"incensesnapdragon";var Ie=e(Ae,2);Ie.value=(Ie.__value="incensespiritweed")==null?"":"incensespiritweed";var Se=e(Ie,2);Se.value=(Se.__value="incensetarromin")==null?"":"incensetarromin";var Te=e(Se,2);Te.value=(Te.__value="incensetoadflax")==null?"":"incensetoadflax";var Ce=e(Te,2);Ce.value=(Ce.__value="incensetorstol")==null?"":"incensetorstol";var Ao=e(Ce,2);Ao.value=(Ao.__value="incensewergali")==null?"":"incensewergali";var Do=e(D),Me=g(Do);Me.value=(Me.__value="animatedead")==null?"":"animatedead";var Re=e(Me,2);Re.value=(Re.__value="archaeologiststea")==null?"":"archaeologiststea";var Le=e(Re,2);Le.value=(Le.__value="aura")==null?"":"aura";var Be=e(Le,2);Be.value=(Be.__value="bonfire")==null?"":"bonfire";var je=e(Be,2);je.value=(je.__value="cannonballs")==null?"":"cannonballs";var qe=e(je,2);qe.value=(qe.__value="cannontimer")==null?"":"cannontimer";var Ee=e(qe,2);Ee.value=(Ee.__value="cindercore")==null?"":"cindercore";var Fe=e(Ee,2);Fe.value=(Fe.__value="clancitadel")==null?"":"clancitadel";var Ge=e(Fe,2);Ge.value=(Ge.__value="crystalmask")==null?"":"crystalmask";var Oe=e(Ge,2);Oe.value=(Oe.__value="darkness")==null?"":"darkness";var De=e(Oe,2);De.value=(De.__value="noritualshard")==null?"":"noritualshard";var Ve=e(De,2);Ve.value=(Ve.__value="noexcalibur")==null?"":"noexcalibur";var We=e(Ve,2);We.value=(We.__value="firelighter")==null?"":"firelighter";var He=e(We,2);He.value=(He.__value="godbook")==null?"":"godbook";var Ue=e(He,2);Ue.value=(Ue.__value="grimoire")==null?"":"grimoire";var Xe=e(Ue,2);Xe.value=(Xe.__value="hispecmonocle")==null?"":"hispecmonocle";var Ke=e(Xe,2);Ke.value=(Ke.__value="luminiteinjector")==null?"":"luminiteinjector";var Ne=e(Ke,2);Ne.value=(Ne.__value="materialmanual")==null?"":"materialmanual";var Je=e(Ne,2);Je.value=(Je.__value="porter")==null?"":"porter";var Qe=e(Je,2);Qe.value=(Qe.__value="pulsecore")==null?"":"pulsecore";var Ye=e(Qe,2);Ye.value=(Ye.__value="roarofosseous")==null?"":"roarofosseous";var Ze=e(Ye,2);Ze.value=(Ze.__value="rockofresilience")==null?"":"rockofresilience";var ze=e(Ze,2);ze.value=(ze.__value="scrimshaw")==null?"":"scrimshaw";var $e=e(ze,2);$e.value=($e.__value="signoflife")==null?"":"signoflife";var eo=e($e,2);eo.value=(eo.__value="stoneofjas")==null?"":"stoneofjas";var oo=e(eo,2);oo.value=(oo.__value="summon")==null?"":"summon";var ao=e(oo,2);ao.value=(ao.__value="tarpaulinsheet")==null?"":"tarpaulinsheet";var to=e(ao,2);to.value=(to.__value="valentinesflip")==null?"":"valentinesflip";var lo=e(to,2);lo.value=(lo.__value="valentinesslam")==null?"":"valentinesslam";var Io=e(lo,2);Io.value=(Io.__value="wiseperk")==null?"":"wiseperk";var no=e(oe,9);U(()=>{o(h),N(()=>{})});var ro=g(no);ro.value=(ro.__value="active")==null?"":"active";var io=e(ro);io.value=(io.__value="inactive")==null?"":"inactive";var po=e(io);po.value=(po.__value="lessthan")==null?"":"lessthan";var uo=e(po);uo.value=(uo.__value="greaterthan")==null?"":"greaterthan";var so=e(uo);so.value=(so.__value="parenslessthan")==null?"":"parenslessthan";var So=e(so);So.value=(So.__value="greater than")==null?"":"greater than";var Vo=e(no,4);{var Wo=K=>{var To=ua(),Ho=e(x(To),4);z(Ho,()=>o(v),Uo=>l(v,Uo)),_(K,To)};B(Vo,K=>{o(h)!==null&&o(h)!=="active"&&o(h)!=="inactive"&&K(Wo)})}J(oe,()=>o(d),K=>l(d,K)),J(no,()=>o(h),K=>l(h,K)),_(Q,ee)},Oo=Q=>{var ee=re(),oe=x(ee);{var fe=M=>{var q=fa(),E=e(x(q),4);U(()=>{o(ue),N(()=>{})});var F=g(E);F.value=(F.__value=!0)==null?"":!0;var H=e(F);H.value=(H.__value=!1)==null?"":!1;var y=e(E,5);{var k=c=>{var m=_a(),s=e(x(m),4);s.__change=[va,C,Ro,se],z(s,()=>o(se),b=>l(se,b)),_(c,m)},R=c=>{var m=ca(),s=e(x(m),4);z(s,()=>o(C),b=>l(C,b)),_(c,m)};B(y,c=>{o(ue)?c(k):c(R,!1)})}J(E,()=>o(ue),c=>l(ue,c)),_(M,q)},ae=M=>{var q=re(),E=x(q);{var F=y=>{var k=da(),R=e(x(k),4);U(()=>{o(d),N(()=>{})});var c=g(R);c.value=(c.__value="lostsoul")==null?"":"lostsoul";var m=e(c);m.value=(m.__value="penguinagent")==null?"":"penguinagent";var s=e(m);s.value=(s.__value="serenspirit")==null?"":"serenspirit";var b=e(s);b.value=(b.__value="firespirit")==null?"":"firespirit",J(R,()=>o(d),P=>l(d,P)),_(y,k)},H=y=>{var k=re(),R=x(k);{var c=s=>{var b=ba(),P=e(x(b),4);U(()=>{o(d),N(()=>{})});var G=g(P);G.value=(G.__value="health")==null?"":"health";var A=e(G);A.value=(A.__value="adrenaline")==null?"":"adrenaline";var O=e(A);O.value=(O.__value="prayer")==null?"":"prayer";var D=e(O);D.value=(D.__value="summoning")==null?"":"summoning";var V=e(P,9);J(P,()=>o(d),L=>l(d,L)),z(V,()=>o(v),L=>l(v,L)),_(s,b)},m=s=>{var b=re(),P=x(b);{var G=A=>{var O=ga(),D=e(x(O),4);U(()=>{o(X),N(()=>{})});var V=g(D);V.value=(V.__value=!1)==null?"":!1;var L=e(V);L.value=(L.__value=!0)==null?"":!0;var te=e(D,2);{var le=W=>{var Y=ma(),Z=e(x(Y),7);Z.__change=[xa,v,ve],z(Z,()=>o(ve),ne=>l(ve,ne)),_(W,Y)};B(te,W=>{o(X)&&W(le)})}J(D,()=>o(X),W=>l(X,W)),_(A,O)};B(P,A=>{o(p)===a.xpgain&&A(G)},!0)}_(s,b)};B(R,s=>{o(p)===a.stat?s(c):s(m,!1)},!0)}_(y,k)};B(E,y=>{o(p)===a.model?y(F):y(H,!1)},!0)}_(M,q)};B(oe,M=>{o(p)===a.chat||o(p)===a.popup?M(fe):M(ae,!1)},!0)}_(Q,ee)};B(ce,Q=>{o(p)===a.buff?Q(we):Q(Oo,!1)},!0)}_(r,j)};B(qo,r=>{o(p)===a.afktimer?r(Eo):r(Fo,!1)})}var Go=e(co,2),ko=g(Go);ko.__click=[la];var Po=e(ko,2);Po.__click=[ta,Lo],U(()=>{fo!==(fo=a.afktimer)&&(de.value=(de.__value=a.afktimer)==null?"":a.afktimer),bo!==(bo=a.buff)&&(be.value=(be.__value=a.buff)==null?"":a.buff),xo!==(xo=a.chat)&&(xe.value=(xe.__value=a.chat)==null?"":a.chat),mo!==(mo=a.model)&&(me.value=(me.__value=a.model)==null?"":a.model),go!==(go=a.popup)&&(ge.value=(ge.__value=a.popup)==null?"":a.popup),ho!==(ho=a.stat)&&(he.value=(he.__value=a.stat)==null?"":a.stat),yo!==(yo=a.xpgain)&&(wo.value=(wo.__value=a.xpgain)==null?"":a.xpgain),Po.disabled=!o(i)}),J(_e,()=>o(p),r=>l(p,r)),_(t,vo),Yo()}Xo(["change","click"]);Zo(wa,{target:document.body});
