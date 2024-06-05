import{s as W,e as c,a as I,l as T,c as p,b as f,g as L,m as Z,f as r,o as X,p as Y,q as e,i as Q,h as l,r as k,u as O,n as J,v as $,w as ee}from"../chunks/scheduler.DEuJf6Cr.js";import{S as te,i as le}from"../chunks/index.BVCW9bT3.js";import{b as se}from"../chunks/paths.DWbYfkcz.js";import{a as ae}from"../chunks/stores.D-QSYZUm.js";function K(g){let t;return{c(){t=c("span"),this.h()},l(s){t=p(s,"SPAN",{class:!0,style:!0}),f(t).forEach(r),this.h()},h(){e(t,"class","loading loading-spinner"),ee(t,"width","0.6rem")},m(s,h){Q(s,t,h)},d(s){s&&r(t)}}}function re(g){let t,s,h,w,d,n,m,o,x,q,v,S,E,b,A,U,_,D,i,B,V="Login",G,H,j,a=g[2]&&K();return{c(){t=c("div"),s=c("img"),w=I(),d=c("form"),n=c("div"),m=c("label"),o=T("svg"),x=T("path"),q=I(),v=c("input"),S=I(),E=c("label"),b=T("svg"),A=T("path"),U=I(),_=c("input"),D=I(),i=c("button"),B=c("p"),B.textContent=V,G=I(),a&&a.c(),this.h()},l(u){t=p(u,"DIV",{class:!0});var y=f(t);s=p(y,"IMG",{src:!0,alt:!0,class:!0}),w=L(y),d=p(y,"FORM",{});var F=f(d);n=p(F,"DIV",{class:!0});var C=f(n);m=p(C,"LABEL",{class:!0});var P=f(m);o=Z(P,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var R=f(o);x=Z(R,"path",{d:!0}),f(x).forEach(r),R.forEach(r),q=L(P),v=p(P,"INPUT",{type:!0,class:!0,placeholder:!0}),P.forEach(r),S=L(C),E=p(C,"LABEL",{class:!0});var M=f(E);b=Z(M,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var z=f(b);A=Z(z,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),f(A).forEach(r),z.forEach(r),U=L(M),_=p(M,"INPUT",{type:!0,class:!0,placeholder:!0}),M.forEach(r),D=L(C),i=p(C,"BUTTON",{class:!0,type:!0});var N=f(i);B=p(N,"P",{class:!0,"data-svelte-h":!0}),X(B)!=="svelte-1nmo5em"&&(B.textContent=V),G=L(N),a&&a.l(N),N.forEach(r),C.forEach(r),F.forEach(r),y.forEach(r),this.h()},h(){Y(s.src,h=se+"/icon.svg")||e(s,"src",h),e(s,"alt",""),e(s,"class",""),e(x,"d","M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"),e(o,"xmlns","http://www.w3.org/2000/svg"),e(o,"viewBox","0 0 16 16"),e(o,"fill","currentColor"),e(o,"class","w-4 h-4 opacity-70"),e(v,"type","text"),e(v,"class","grow"),e(v,"placeholder","Name"),e(m,"class","input input-bordered flex items-center gap-2 svelte-1u03m19"),e(A,"fill-rule","evenodd"),e(A,"d","M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"),e(A,"clip-rule","evenodd"),e(b,"xmlns","http://www.w3.org/2000/svg"),e(b,"viewBox","0 0 16 16"),e(b,"fill","currentColor"),e(b,"class","w-4 h-4 opacity-70"),e(_,"type","password"),e(_,"class","grow"),e(_,"placeholder","Password"),e(E,"class","input input-bordered flex items-center gap-2 svelte-1u03m19"),e(B,"class","font-thin text-base-100"),e(i,"class","btn btn-neutral rounded-full w-full text-white"),e(i,"type","submit"),e(n,"class","space-y-2"),e(t,"class","h-screen flex flex-col justify-center items-center gap-16")},m(u,y){Q(u,t,y),l(t,s),l(t,w),l(t,d),l(d,n),l(n,m),l(m,o),l(o,x),l(m,q),l(m,v),k(v,g[0]),l(n,S),l(n,E),l(E,b),l(b,A),l(E,U),l(E,_),k(_,g[1]),l(n,D),l(n,i),l(i,B),l(i,G),a&&a.m(i,null),H||(j=[O(v,"input",g[4]),O(_,"input",g[5]),O(i,"click",g[3])],H=!0)},p(u,[y]){y&1&&v.value!==u[0]&&k(v,u[0]),y&2&&_.value!==u[1]&&k(_,u[1]),u[2]?a||(a=K(),a.c(),a.m(i,null)):a&&(a.d(1),a=null)},i:J,o:J,d(u){u&&r(t),a&&a.d(),H=!1,$(j)}}}function ne(g,t,s){let h="",w="",d=!1;async function n(){if(h&&w&&!d){s(2,d=!0);try{await ae.signIn(h.toLowerCase()+"@m.com",w)}catch(x){console.log("Auth error",x)}s(2,d=!1)}}function m(){h=this.value,s(0,h)}function o(){w=this.value,s(1,w)}return[h,w,d,n,m,o]}class pe extends te{constructor(t){super(),le(this,t,ne,re,W,{})}}export{pe as component};