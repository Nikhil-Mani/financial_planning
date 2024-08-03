import{s as B,n as S,r as L}from"../chunks/scheduler.Dk-snqIU.js";import{S as R,i as Y,e as y,s as A,l as F,c as b,d,f as w,m as U,a as k,n as _,h as g,g as C,o as D,p as H,q as O,r as G,t as z,b as T,j as M}from"../chunks/index.DAXoR0Ia.js";import{e as P}from"../chunks/each.wArP05H6.js";function V(c,t,n){const e=c.slice();return e[5]=t[n].name,e[6]=t[n].costAfterAid,e}function $(c){let t,n=P(c[1]),e=[];for(let l=0;l<n.length;l+=1)e[l]=j(V(c,n,l));return{c(){t=y("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=b(l,"DIV",{class:!0});var o=k(t);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(d),this.h()},h(){_(t,"class","results svelte-yvpxz3")},m(l,o){C(l,t,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(l,o){if(o&2){n=P(l[1]);let s;for(s=0;s<n.length;s+=1){const f=V(l,n,s);e[s]?e[s].p(f,o):(e[s]=j(f),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},d(l){l&&d(t),G(e,l)}}}function j(c){let t,n,e=c[5]+"",l,o,s,f=c[6]+"",p,r;return{c(){t=y("div"),n=y("strong"),l=z(e),o=z(":"),s=z(" $"),p=z(f),r=A(),this.h()},l(a){t=b(a,"DIV",{class:!0});var h=k(t);n=b(h,"STRONG",{});var m=k(n);l=T(m,e),o=T(m,":"),m.forEach(d),s=T(h," $"),p=T(h,f),r=w(h),h.forEach(d),this.h()},h(){_(t,"class","result-item svelte-yvpxz3")},m(a,h){C(a,t,h),g(t,n),g(n,l),g(n,o),g(t,s),g(t,p),g(t,r)},p(a,h){h&2&&e!==(e=a[5]+"")&&M(l,e),h&2&&f!==(f=a[6]+"")&&M(p,f)},d(a){a&&d(t)}}}function Q(c){let t,n,e,l='<h1 class="svelte-yvpxz3">Affording college is also tough. Here are some opportunties available to you.</h1> <ul class="texts svelte-yvpxz3"><li><a href="https://www.hesc.ny.gov/find-aid-you-need/">NY Scholarships</a></li> <li><a href="https://finaid.org/scholarships/">FinAid</a></li> <li><a href="https://collegecost.ed.gov/net-price">CollegeCost</a></li> <li><a href="https://www.questbridge.org/">Questbridge</a></li></ul>',o,s,f="Below, we have added a tool for you to very quickly estimate your cost for college based on your income. This is highly dependent on your specific financial situation so do not use this as a guarantee of aid.",p,r,a,h,m,q="Estimate Costs",E,I,N,u=c[1].length>0&&$(c);return{c(){t=y("meta"),n=A(),e=y("div"),e.innerHTML=l,o=A(),s=y("p"),s.textContent=f,p=A(),r=y("div"),a=y("input"),h=A(),m=y("button"),m.textContent=q,E=A(),u&&u.c(),this.h()},l(i){const v=F("svelte-1qtvr6n",document.head);t=b(v,"META",{name:!0,content:!0}),v.forEach(d),n=w(i),e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1c584z2"&&(e.innerHTML=l),o=w(i),s=b(i,"P",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-155jfde"&&(s.textContent=f),p=w(i),r=b(i,"DIV",{class:!0});var x=k(r);a=b(x,"INPUT",{type:!0,placeholder:!0,class:!0}),h=w(x),m=b(x,"BUTTON",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-wmdhig"&&(m.textContent=q),E=w(x),u&&u.l(x),x.forEach(d),this.h()},h(){document.title="College Access Resources",_(t,"name","description"),_(t,"content","About this app"),_(e,"class","text-column"),_(s,"class","texts svelte-yvpxz3"),_(a,"type","number"),_(a,"placeholder","Enter your income"),_(a,"class","svelte-yvpxz3"),_(m,"class","svelte-yvpxz3"),_(r,"class","form-container svelte-yvpxz3")},m(i,v){g(document.head,t),C(i,n,v),C(i,e,v),C(i,o,v),C(i,s,v),C(i,p,v),C(i,r,v),g(r,a),D(a,c[0]),g(r,h),g(r,m),g(r,E),u&&u.m(r,null),I||(N=[H(a,"input",c[3]),H(m,"click",c[2])],I=!0)},p(i,[v]){v&1&&O(a.value)!==i[0]&&D(a,i[0]),i[1].length>0?u?u.p(i,v):(u=$(i),u.c(),u.m(r,null)):u&&(u.d(1),u=null)},i:S,o:S,d(i){i&&(d(n),d(e),d(o),d(s),d(p),d(r)),d(t),u&&u.d(),I=!1,L(N)}}}function J(c,t){const n=Object.keys(t).map(Number).sort((e,l)=>e-l);for(let e=0;e<n.length;e++)if(c<n[e])return t[n[e]];return t[n[n.length-1]]}function K(c,t,n){let e=0,l=[];const o=[{name:"Harvard University",cost:75e3,aid:{0:75e3,3e4:75e3,6e4:75e3,9e4:7e4,12e4:6e5,15e4:5e5,18e4:0}},{name:"Stanford University",cost:72e3,aid:{0:75e3,3e4:75e3,6e4:75e3,9e4:7e4,12e4:6e5,15e4:5e5,18e4:0}},{name:"MIT",cost:73e3,aid:{0:75e3,3e4:75e3,6e4:75e3,9e4:7e4,12e4:6e5,15e4:5e5,18e4:0}},{name:"Princeton University",cost:74e3,aid:{0:75e3,3e4:75e3,6e4:75e3,9e4:7e4,12e4:6e5,15e4:5e5,18e4:0}},{name:"Yale University",cost:75e3,aid:{0:75e3,3e4:75e3,6e4:75e3,9e4:7e4,12e4:6e5,15e4:5e5,18e4:0}}];function s(){n(1,l=o.map(p=>{const r=J(e,p.aid);let a=p.cost-r;return a=a<0?0:a,{name:p.name,costAfterAid:a}}))}function f(){e=O(this.value),n(0,e)}return[e,l,s,f]}class ee extends R{constructor(t){super(),Y(this,t,K,Q,B,{})}}export{ee as component};
