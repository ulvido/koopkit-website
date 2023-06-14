import{S as e,i as t,s as n,a as o,b as l,c as s,d as i,n as r,e as c,f as a,g as d,h as u,m as v,l as p,t as g,j as f,k as m,o as h,p as b,q as w,r as y,u as k,v as x,w as $,x as j,y as D,z as C,A as _,B as O,C as S,D as B}from"./vendor.js";function I(e){let t,n;return{c(){t=o("svg"),n=o("path"),l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"stroke-width","2"),l(n,"d","M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"),l(t,"width","100%"),l(t,"height","100%"),l(t,"viewBox","0 0 24 24"),l(t,"fill","none"),l(t,"stroke","currentColor"),l(t,"xmlns","http://www.w3.org/2000/svg")},m(e,o){s(e,t,o),i(t,n)},p:r,i:r,o:r,d(e){e&&c(t)}}}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class M extends e{constructor(e){super(),t(this,e,null,I,n,{})}}function N(e){let t,n,o,h,b,w,y,k,x;return h=new M({}),{c(){t=a("div"),n=a("div"),o=a("div"),d(h.$$.fragment),b=u(),w=a("div"),w.textContent="Bu Cihaza Yükle",l(o,"class","icon svelte-usjklv"),l(w,"class","text svelte-usjklv"),l(n,"class","btn svelte-usjklv"),l(t,"class","wrapper svelte-usjklv")},m(l,r){s(l,t,r),i(t,n),i(n,o),v(h,o,null),i(n,b),i(n,w),y=!0,k||(x=p(n,"click",e[2]),k=!0)},p:r,i(e){y||(g(h.$$.fragment,e),y=!0)},o(e){f(h.$$.fragment,e),y=!1},d(e){e&&c(t),m(h),k=!1,x()}}}function z(e){let t,n,o,l,i=e[0]&&N(e);return{c(){i&&i.c(),t=h()},m(r,c){i&&i.m(r,c),s(r,t,c),n=!0,o||(l=[p(window,"beforeinstallprompt",b(e[1])),p(window,"appinstalled",b(e[3]))],o=!0)},p(e,[n]){e[0]?i?(i.p(e,n),1&n&&g(i,1)):(i=N(e),i.c(),g(i,1),i.m(t.parentNode,t)):i&&(w(),f(i,1,1,(()=>{i=null})),y())},i(e){n||(g(i),n=!0)},o(e){f(i),n=!1},d(e){i&&i.d(e),e&&c(t),o=!1,k(l)}}}function A(e,t,n){let o,l=!1;return[l,e=>{o=e,n(0,l=!0)},()=>{n(0,l=!1),o.prompt(),o.userChoice.then((e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o=null})).catch(console.error)},()=>{o=null,console.log("PWA was installed")}]}class E extends e{constructor(e){super(),t(this,e,A,z,n,{})}}function L(e,t,n){const o=e.slice();return o[15]=t[n],o}function T(e,t,n){const o=e.slice();return o[18]=t[n],o[20]=n,o}function U(e){var t;let n,o,l,r=((null==(t=e[18])?void 0:t.label)||"Device "+e[20])+"";return{c(){n=a("option"),o=x(r),n.__value=l=e[20],n.value=n.__value},m(e,t){s(e,n,t),i(n,o)},p(e,t){var n;2&t&&r!==(r=((null==(n=e[18])?void 0:n.label)||"Device "+e[20])+"")&&$(o,r)},d(e){e&&c(n)}}}function P(e){let t,n,o,i=Object.keys(e[4]),r=[];for(let l=0;l<i.length;l+=1)r[l]=q(L(e,i,l));return{c(){t=a("p"),t.textContent="Supported Constraints",n=u(),o=a("ul");for(let e=0;e<r.length;e+=1)r[e].c();l(t,"class","svelte-1hx6kg3")},m(e,l){s(e,t,l),s(e,n,l),s(e,o,l);for(let t=0;t<r.length;t+=1)r[t].m(o,null)},p(e,t){if(16&t){let n;for(i=Object.keys(e[4]),n=0;n<i.length;n+=1){const l=L(e,i,n);r[n]?r[n].p(l,t):(r[n]=q(l),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=i.length}},d(e){e&&c(t),e&&c(n),e&&c(o),j(r,e)}}}function q(e){let t,n,o=e[15]+"";return{c(){t=a("li"),n=x(o)},m(e,o){s(e,t,o),i(t,n)},p(e,t){16&t&&o!==(o=e[15]+"")&&$(n,o)},d(e){e&&c(t)}}}function H(e){var t;let n,o,d,v,g,f,m,h,b,w,y,_,O,S,B,I,M,N,z,A,E,L,q,H,V=(null==(t=e[1][e[2]])?void 0:t.deviceId)+"",G=e[1],K=[];for(let l=0;l<G.length;l+=1)K[l]=U(T(e,G,l));let W=e[4]&&P(e);return{c(){n=a("div"),o=a("div"),d=a("video"),v=u(),g=a("button"),f=x("Get Video Devices"),m=u(),h=a("p"),b=x("Selected Device: "),w=x(e[2]),y=u(),_=a("p"),O=x("Selected DeviceId: "),S=x(V),B=u(),I=a("select"),M=a("option"),M.textContent="None";for(let e=0;e<K.length;e+=1)K[e].c();N=u(),z=a("button"),A=x("Toggle Camera"),L=u(),W&&W.c(),d.autoplay=!0,d.playsInline=!0,l(d,"class","svelte-1hx6kg3"),l(o,"class","video-wrapper"),l(g,"type","button"),g.disabled=e[3],l(h,"class","svelte-1hx6kg3"),l(_,"class","svelte-1hx6kg3"),M.__value="None",M.value=M.__value,M.selected=!0,l(I,"name","device"),l(I,"id","device"),I.disabled=e[3],void 0===e[2]&&D((()=>e[10].call(I))),l(z,"type","button"),z.disabled=E=e[3]||e[1].length<2,l(n,"class","wrapper svelte-1hx6kg3")},m(t,l){s(t,n,l),i(n,o),i(o,d),e[9](d),i(n,v),i(n,g),i(g,f),i(n,m),i(n,h),i(h,b),i(h,w),i(n,y),i(n,_),i(_,O),i(_,S),i(n,B),i(n,I),i(I,M);for(let e=0;e<K.length;e+=1)K[e].m(I,null);C(I,e[2]),i(n,N),i(n,z),i(z,A),i(n,L),W&&W.m(n,null),q||(H=[p(d,"loadedmetadata",e[8]),p(g,"click",e[7]),p(I,"change",e[10]),p(I,"change",e[6]),p(z,"click",e[5])],q=!0)},p(e,[t]){var o;if(8&t&&(g.disabled=e[3]),4&t&&$(w,e[2]),6&t&&V!==(V=(null==(o=e[1][e[2]])?void 0:o.deviceId)+"")&&$(S,V),2&t){let n;for(G=e[1],n=0;n<G.length;n+=1){const o=T(e,G,n);K[n]?K[n].p(o,t):(K[n]=U(o),K[n].c(),K[n].m(I,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=G.length}8&t&&(I.disabled=e[3]),4&t&&C(I,e[2]),10&t&&E!==(E=e[3]||e[1].length<2)&&(z.disabled=E),e[4]?W?W.p(e,t):(W=P(e),W.c(),W.m(n,null)):W&&(W.d(1),W=null)},i:r,o:r,d(t){t&&c(n),e[9](null),j(K,t),W&&W.d(),q=!1,k(H)}}}function V(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(l,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function r(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}c((o=o.apply(e,t||[])).next())}))};let l,s,i,r=[],c=!0,a={audio:!1,video:!0,facingMode:{exact:"environment"}};let d;_((()=>{console.log(O.browserDetails.browser," : ",O.browserDetails.version),n(4,d=navigator.mediaDevices.getSupportedConstraints()),n(3,c=!1)}));return[s,r,i,c,d,()=>o(void 0,void 0,void 0,(function*(){n(3,c=!0);let e="environment"===a.facingMode.exact?"user":"environment",t=Object.assign(Object.assign({},a),{facingMode:{exact:e}});l.getTracks().forEach((e=>{console.log(e),"live"==e.readyState&&"video"===e.kind&&(e.stop(),e.applyConstraints(t))})),n(0,s.srcObject=null,s),l=null,l=yield navigator.mediaDevices.getUserMedia(t),console.log(l),n(0,s.srcObject=l,s),n(3,c=!1)})),()=>o(void 0,void 0,void 0,(function*(){var e;if(n(3,c=!0),console.log(i),"None"!==i){let t=Object.assign(Object.assign({},a),{deviceId:{exact:null===(e=r[i])||void 0===e?void 0:e.deviceId}});l&&l.getTracks().forEach((e=>{console.log(e),"live"==e.readyState&&"video"===e.kind&&(e.stop(),e.applyConstraints(t))})),l=yield navigator.mediaDevices.getUserMedia(t),console.log(l),n(0,s.srcObject=l,s),n(3,c=!1)}else l.getTracks().forEach((e=>{console.log(e),"live"==e.readyState&&"video"===e.kind&&e.stop()})),n(0,s.srcObject=null,s),l=null,n(3,c=!1)})),()=>o(void 0,void 0,void 0,(function*(){let e=yield navigator.mediaDevices.enumerateDevices();console.log(e),n(1,r=e.filter((e=>"videoinput"===(null==e?void 0:e.kind)))),console.log(r)})),()=>s.play(),function(e){S[e?"unshift":"push"]((()=>{s=e,n(0,s)}))},function(){i=B(this),n(2,i)}]}class G extends e{constructor(e){super(),t(this,e,V,H,n,{})}}function K(e){let t,n,o,r,p,h,b,w,y;return t=new E({}),w=new G({}),{c(){d(t.$$.fragment),n=u(),o=a("main"),r=a("p"),p=x("BarcodeApi: "),h=x(e[0]),b=u(),d(w.$$.fragment),l(r,"class","svelte-szc1xz"),l(o,"class","svelte-szc1xz")},m(e,l){v(t,e,l),s(e,n,l),s(e,o,l),i(o,r),i(r,p),i(r,h),i(o,b),v(w,o,null),y=!0},p(e,[t]){(!y||1&t)&&$(h,e[0])},i(e){y||(g(t.$$.fragment,e),g(w.$$.fragment,e),y=!0)},o(e){f(t.$$.fragment,e),f(w.$$.fragment,e),y=!1},d(e){m(t,e),e&&c(n),e&&c(o),m(w)}}}function W(e,t,n){let o=!1;return _((()=>{"BarcodeDetector"in window?(n(0,o=!0),console.log("Barcode Detector supported!"),new BarcodeDetector({formats:["code_39","codabar","ean_13"]})):(n(0,o=!1),console.log("Barcode Detector is not supported by this browser."))})),[o]}new class extends e{constructor(e){super(),t(this,e,W,K,n,{})}}({target:document.getElementById("app")});
