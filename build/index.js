import{S as e,i as t,s as o,a as n,b as s,c as i,d as r,n as l,e as a,f as c,g as d,h as u,m as p,l as h,t as v,j as m,k as f,o as g,p as w,q as y,r as b,u as j,v as C,w as O,x as $,y as V,z as k,A as E,B as D,C as T,D as x,E as A,F as S}from"./vendor.js";function P(e){let t,o;return{c(){t=n("svg"),o=n("path"),s(o,"stroke-linecap","round"),s(o,"stroke-linejoin","round"),s(o,"stroke-width","2"),s(o,"d","M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"),s(t,"width","100%"),s(t,"height","100%"),s(t,"viewBox","0 0 24 24"),s(t,"fill","none"),s(t,"stroke","currentColor"),s(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){i(e,t,n),r(t,o)},p:l,i:l,o:l,d(e){e&&a(t)}}}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class _ extends e{constructor(e){super(),t(this,e,null,P,o,{})}}function z(e){let t,o,n,g,w,y,b,j,C;return g=new _({}),{c(){t=c("div"),o=c("div"),n=c("div"),d(g.$$.fragment),w=u(),y=c("div"),y.textContent="Bu Cihaza Yükle",s(n,"class","icon svelte-usjklv"),s(y,"class","text svelte-usjklv"),s(o,"class","btn svelte-usjklv"),s(t,"class","wrapper svelte-usjklv")},m(s,l){i(s,t,l),r(t,o),r(o,n),p(g,n,null),r(o,w),r(o,y),b=!0,j||(C=h(o,"click",e[2]),j=!0)},p:l,i(e){b||(v(g.$$.fragment,e),b=!0)},o(e){m(g.$$.fragment,e),b=!1},d(e){e&&a(t),f(g),j=!1,C()}}}function I(e){let t,o,n,s,r=e[0]&&z(e);return{c(){r&&r.c(),t=g()},m(l,a){r&&r.m(l,a),i(l,t,a),o=!0,n||(s=[h(window,"beforeinstallprompt",w(e[1])),h(window,"appinstalled",w(e[3]))],n=!0)},p(e,[o]){e[0]?r?(r.p(e,o),1&o&&v(r,1)):(r=z(e),r.c(),v(r,1),r.m(t.parentNode,t)):r&&(y(),m(r,1,1,(()=>{r=null})),b())},i(e){o||(v(r),o=!0)},o(e){m(r),o=!1},d(e){r&&r.d(e),e&&a(t),n=!1,j(s)}}}function B(e,t,o){let n,s=!1;return[s,e=>{n=e,o(0,s=!0)},()=>{o(0,s=!1),n.prompt(),n.userChoice.then((e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),n=null})).catch(console.error)},()=>{n=null,console.log("PWA was installed")}]}class N extends e{constructor(e){super(),t(this,e,B,I,o,{})}}function L(e){let t,o;return{c(){t=c("img"),C(t.src,o="/glifor.jpeg")||s(t,"src","/glifor.jpeg"),s(t,"alt","glifor"),s(t,"class","svelte-1rp47v9")},m(o,n){i(o,t,n),e[10](t)},p:l,d(o){o&&a(t),e[10](null)}}}function M(e){let t,o,n,d,p,h,v,m,f,g,w,y=e[0]&&L(e);return{c(){t=c("div"),y&&y.c(),o=u(),n=c("canvas"),d=u(),p=c("p"),h=O("SIMD Supported: "),v=O(e[2]),m=u(),f=c("p"),g=O("THREADS Supported: "),w=O(e[3]),s(n,"class","svelte-1rp47v9"),s(t,"class","wrapper svelte-1rp47v9")},m(s,l){i(s,t,l),y&&y.m(t,null),r(t,o),r(t,n),e[11](n),r(t,d),r(t,p),r(p,h),r(p,v),r(t,m),r(t,f),r(f,g),r(f,w)},p(e,[n]){e[0]?y?y.p(e,n):(y=L(e),y.c(),y.m(t,o)):y&&(y.d(1),y=null),4&n&&$(v,e[2]),8&n&&$(w,e[3])},i:l,o:l,d(o){o&&a(t),y&&y.d(),e[11](null)}}}function R(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))};let s,{imageElement:i=null}=t,{width:r=300}=t,{height:l=150}=t,a=null,c=null,d=!1,u=!1,p=!1,{pathConfig:h={asm:"/opencv-4.7.0/build_js/bin/opencv.js",wasm:"/opencv-4.7.0/build_wasm/bin/opencv.js",threads:"/opencv-4.7.0/build_mt/bin/opencv.js",simd:"/opencv-4.7.0/build_simd/bin/opencv.js",threadsSimd:"/opencv-4.7.0/build_mtSIMD/bin/opencv.js"}}=t;const v=()=>n(void 0,void 0,void 0,(function*(){yield f().then((e=>n(void 0,void 0,void 0,(function*(){yield((e,t)=>new Promise(((o,n)=>{let s="",i="",r="",l="",a="",c="";e instanceof Object||n({action:"LOAD_OPENCV",payload:{status:new Error("The first input should be a object that points the path to the OpenCV.js")}}),"asm"in e&&(i=e.asm),"wasm"in e&&(r=e.wasm),"threads"in e&&(a=e.threads),"simd"in e&&(l=e.simd),"threadsSimd"in e&&(c=e.threadsSimd);let d=!("undefined"==typeof WebAssembly);d||""!==s||""==i?d||""!=i||n({action:"LOAD_OPENCV",payload:{status:new Error("The browser supports the Asm.js only, but the path of OpenCV.js for Asm.js is empty")}}):(s=i,console.log("The OpenCV.js for Asm.js is loaded now"));let u=!!d&&t.simd,p=!!d&&t.threads;console.log("simdSupported",u),console.log("threadsSupported",p),u&&p&&""!=c?(s=c,console.log("The OpenCV.js with simd and threads optimization is loaded now")):u&&""!=l?(p&&""===c&&console.log("The browser supports simd and threads, but the path of OpenCV.js with simd and threads optimization is empty"),s=l,console.log("The OpenCV.js with simd optimization is loaded now.")):p&&""!=a?(u&&""===c&&console.log("The browser supports simd and threads, but the path of OpenCV.js with simd and threads optimization is empty"),s=a,console.log("The OpenCV.js with threads optimization is loaded now")):d&&""!=r?(u&&p&&console.log("The browser supports simd and threads, but the path of OpenCV.js with simd and threads optimization is empty"),u&&console.log("The browser supports simd optimization, but the path of OpenCV.js with simd optimization is empty"),p&&console.log("The browser supports threads optimization, but the path of OpenCV.js with threads optimization is empty"),s=r,console.log("The OpenCV.js for wasm is loaded now")):d&&(console.log("The browser supports wasm, but the path of OpenCV.js for wasm is empty"),""!=i&&(s=i,console.log("The OpenCV.js for Asm.js is loaded as fallback."))),""===s&&n({action:"LOAD_OPENCV",payload:{status:new Error("No available OpenCV.js, please check your paths")}});let h=document.createElement("script");h.setAttribute("async",""),h.setAttribute("type","text/javascript"),h.addEventListener("load",(()=>{o({action:"LOAD_OPENCV",payload:{status:"OK"}})})),h.addEventListener("error",(()=>{console.log("Failed to load opencv.js")})),h.src=s;let v=document.getElementsByTagName("script")[0];v.src!=s&&v.parentNode.insertBefore(h,v)})))(h,e).then((()=>n(void 0,void 0,void 0,(function*(){window.cv=yield cv,console.log("opencv: ",cv)})))).catch(console.error)})))).catch(console.error)})),m=(e,t)=>()=>{try{if(!p)return;let o=Date.now();t.drawImage(e,0,0,r,l),a.data.set(t.getImageData(0,0,r,l).data),cv.cvtColor(a,c,cv.COLOR_RGBA2GRAY),cv.imshow(s,c);let n=1e3/30-(Date.now()-o);setTimeout(m(e,t),n)}catch(o){console.error(o)}},f=()=>n(void 0,void 0,void 0,(function*(){return{simd:yield k(),threads:yield E()}}));return V((()=>{f().then((e=>{o(2,d=e.simd),o(3,u=e.threads)})).catch(console.error)})),e.$$set=e=>{"imageElement"in e&&o(0,i=e.imageElement),"width"in e&&o(4,r=e.width),"height"in e&&o(5,l=e.height),"pathConfig"in e&&o(6,h=e.pathConfig)},[i,s,d,u,r,l,h,e=>n(void 0,void 0,void 0,(function*(){try{window.cv||(yield v().catch(console.error)),a=new cv.Mat(l,r,cv.CV_8UC4),c=new cv.Mat(l,r,cv.CV_8UC1);let t=s.getContext("2d",{willReadFrequently:!0});p=!0,setTimeout(m(e,t),0)}catch(t){console.error(t)}})),()=>n(void 0,void 0,void 0,(function*(){return new Promise(((e,t)=>{try{p=!1;s.getContext("2d").clearRect(0,0,s.width,s.height),o(1,s.width=300,s),o(1,s.height=150,s),setTimeout((()=>{a&&a.delete(),c&&c.delete(),a=null,c=null,console.log("cleaned"),e(!0)}),0)}catch(n){console.error(n),t(!1)}}))})),e=>n(void 0,void 0,void 0,(function*(){try{p=!1,window.cv||(yield v().catch(console.error));let t=s.getContext("2d",{willReadFrequently:!0});setTimeout((()=>{p=!0,m(e,t)()}),0)}catch(t){console.error(t)}})),function(e){D[e?"unshift":"push"]((()=>{i=e,o(0,i)}))},function(e){D[e?"unshift":"push"]((()=>{s=e,o(1,s)}))}]}class U extends e{constructor(e){super(),t(this,e,R,M,o,{imageElement:0,width:4,height:5,pathConfig:6,startVideoProcess:7,stopVideoProcess:8,refreshVideoProcess:9})}get startVideoProcess(){return this.$$.ctx[7]}get stopVideoProcess(){return this.$$.ctx[8]}get refreshVideoProcess(){return this.$$.ctx[9]}}const{window:H}=A;function q(e,t,o){const n=e.slice();return n[21]=t[o],n}function F(e){let t,o,n,l;return{c(){t=c("button"),o=O("GET VIDEO DEVICES"),s(t,"type","button"),t.disabled=e[7],s(t,"class","svelte-1y9h06d")},m(s,a){i(s,t,a),r(t,o),n||(l=h(t,"click",e[11]),n=!0)},p(e,o){128&o&&(t.disabled=e[7])},d(e){e&&a(t),n=!1,l()}}}function W(e){let t,o,n,l;return{c(){t=c("button"),o=O("STOP"),s(t,"type","button"),t.disabled=e[7],s(t,"class","svelte-1y9h06d")},m(s,a){i(s,t,a),r(t,o),n||(l=h(t,"click",e[10]),n=!0)},p(e,o){128&o&&(t.disabled=e[7])},d(e){e&&a(t),n=!1,l()}}}function G(e){let t,o,n,r=Object.keys(e[8]),l=[];for(let s=0;s<r.length;s+=1)l[s]=K(q(e,r,s));return{c(){t=c("p"),t.textContent="Supported Constraints",o=u(),n=c("ul");for(let e=0;e<l.length;e+=1)l[e].c();s(t,"class","svelte-1y9h06d")},m(e,s){i(e,t,s),i(e,o,s),i(e,n,s);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(e,t){if(256&t){let o;for(r=Object.keys(e[8]),o=0;o<r.length;o+=1){const s=q(e,r,o);l[o]?l[o].p(s,t):(l[o]=K(s),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}},d(e){e&&a(t),e&&a(o),e&&a(n),T(l,e)}}}function K(e){let t,o,n=e[21]+"";return{c(){t=c("li"),o=O(n)},m(e,n){i(e,t,n),r(t,o)},p(e,t){256&t&&n!==(n=e[21]+"")&&$(o,n)},d(e){e&&a(t)}}}function Y(e){var t;let o,n,l,g,w,y,b,C,V,k,E,D,T,x,A,S,P,_,z,I,B,N,L,M,R,q=(null==(t=e[5][e[6]])?void 0:t.deviceId)+"";function K(e,t){return e[4]?W:F}let Y=K(e),X=Y(e),J={width:e[1],height:e[2]};T=new U({props:J}),e[15](T);let Q=e[8]&&G(e);return{c(){o=c("div"),n=c("div"),l=c("p"),l.textContent=`${window.screen.orientation.type}`,g=u(),w=c("video"),y=u(),b=c("div"),X.c(),C=u(),V=c("button"),k=O("NEXT CAMERA »"),D=u(),d(T.$$.fragment),x=u(),A=c("p"),S=O("Selected Device: "),P=O(e[6]),_=u(),z=c("p"),I=O("Selected DeviceId: "),B=O(q),N=u(),Q&&Q.c(),s(l,"class","svelte-1y9h06d"),w.autoplay=!0,w.playsInline=!0,s(w,"class","svelte-1y9h06d"),s(n,"class","video-wrapper svelte-1y9h06d"),s(V,"type","button"),V.disabled=E=e[7]||!e[4]||e[5].length<2,s(V,"class","svelte-1y9h06d"),s(b,"class","buttons svelte-1y9h06d"),s(A,"class","svelte-1y9h06d"),s(z,"class","svelte-1y9h06d"),s(o,"class","wrapper svelte-1y9h06d")},m(t,s){i(t,o,s),r(o,n),r(n,l),r(n,g),r(n,w),e[13](w),r(o,y),r(o,b),X.m(b,null),r(b,C),r(b,V),r(V,k),r(o,D),p(T,o,null),r(o,x),r(o,A),r(A,S),r(A,P),r(o,_),r(o,z),r(z,I),r(z,B),r(o,N),Q&&Q.m(o,null),L=!0,M||(R=[h(H,"orientationchange",e[12]),h(w,"loadedmetadata",e[14]),h(V,"click",e[9])],M=!0)},p(e,[t]){var n;Y===(Y=K(e))&&X?X.p(e,t):(X.d(1),X=Y(e),X&&(X.c(),X.m(b,C))),(!L||176&t&&E!==(E=e[7]||!e[4]||e[5].length<2))&&(V.disabled=E);const s={};2&t&&(s.width=e[1]),4&t&&(s.height=e[2]),T.$set(s),(!L||64&t)&&$(P,e[6]),(!L||96&t)&&q!==(q=(null==(n=e[5][e[6]])?void 0:n.deviceId)+"")&&$(B,q),e[8]?Q?Q.p(e,t):(Q=G(e),Q.c(),Q.m(o,null)):Q&&(Q.d(1),Q=null)},i(e){L||(v(T.$$.fragment,e),L=!0)},o(e){m(T.$$.fragment,e),L=!1},d(t){t&&a(o),e[13](null),X.d(),e[15](null),f(T),Q&&Q.d(),M=!1,j(R)}}}function X(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{a(n.next(e))}catch(t){i(t)}}function l(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))};let s,i,r,l,a=x({ua:navigator.userAgent}),c=300,d=150,u=[],p=!0;let h;V((()=>{console.log(S.browserDetails.browser," : ",S.browserDetails.version),o(8,h=navigator.mediaDevices.getSupportedConstraints()),o(7,p=!1)}));return[s,c,d,i,r,u,l,p,h,()=>n(void 0,void 0,void 0,(function*(){var e;o(7,p=!0),o(6,l=(l+1)%u.length);let t={audio:!1,video:{deviceId:{exact:null===(e=u[l])||void 0===e?void 0:e.deviceId}}};r.getTracks().forEach((e=>{console.log(e),"live"==e.readyState&&"video"===e.kind&&(e.stop(),e.applyConstraints(t))})),o(0,s.srcObject=null,s),o(4,r=null),o(4,r=yield navigator.mediaDevices.getUserMedia(t)),console.log(r),o(0,s.srcObject=r,s),o(7,p=!1)})),()=>n(void 0,void 0,void 0,(function*(){o(7,p=!0),i.stopVideoProcess().then((()=>{o(6,l=a?1:0),o(5,u=[]),r.getTracks().forEach((e=>{console.log(e),"live"==e.readyState&&"video"===e.kind&&e.stop()})),o(4,r=null),o(0,s.srcObject=null,s),o(7,p=!1)})).catch(console.error)})),()=>n(void 0,void 0,void 0,(function*(){o(7,p=!0),o(6,l=a?1:0);let e,t=yield navigator.mediaDevices.enumerateDevices();console.log(t),o(5,u=t.filter((e=>"videoinput"===(null==e?void 0:e.kind)))),console.log(u),e=a?{audio:!1,video:{facingMode:{exact:"environment"}}}:{audio:!1,video:!0},o(4,r=yield navigator.mediaDevices.getUserMedia(e)),console.log(r),o(0,s.srcObject=r,s),i.startVideoProcess(s).then((()=>{o(7,p=!1)})).catch(console.error)})),()=>{r&&s&&(o(1,c=s.videoWidth),o(2,d=s.videoHeight),setTimeout((()=>{i.refreshVideoProcess(s).catch(console.error)}),0))},function(e){D[e?"unshift":"push"]((()=>{s=e,o(0,s)}))},()=>{o(1,c=s.videoWidth),o(2,d=s.videoHeight),s.play()},function(e){D[e?"unshift":"push"]((()=>{i=e,o(3,i)}))}]}class J extends e{constructor(e){super(),t(this,e,X,Y,o,{})}}function Q(e){let t,o,n,l,h,g,w,y,b;return t=new N({}),y=new J({}),{c(){d(t.$$.fragment),o=u(),n=c("main"),l=c("p"),h=O("BarcodeApi: "),g=O(e[0]),w=u(),d(y.$$.fragment),s(l,"class","svelte-1biakuz"),s(n,"class","svelte-1biakuz")},m(e,s){p(t,e,s),i(e,o,s),i(e,n,s),r(n,l),r(l,h),r(l,g),r(n,w),p(y,n,null),b=!0},p(e,[t]){(!b||1&t)&&$(g,e[0])},i(e){b||(v(t.$$.fragment,e),v(y.$$.fragment,e),b=!0)},o(e){m(t.$$.fragment,e),m(y.$$.fragment,e),b=!1},d(e){f(t,e),e&&a(o),e&&a(n),f(y)}}}function Z(e,t,o){let n=!1;return V((()=>{"BarcodeDetector"in window?(o(0,n=!0),console.log("Barcode Detector supported!"),new BarcodeDetector({formats:["code_39","codabar","ean_13"]})):(o(0,n=!1),console.log("Barcode Detector is not supported by this browser."))})),[n]}new class extends e{constructor(e){super(),t(this,e,Z,Q,o,{})}}({target:document.getElementById("app")});
