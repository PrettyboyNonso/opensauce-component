import e,{forwardRef as t,createElement as r,useState as a,useEffect as n}from"react";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim();
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=t((({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:s,...m},u)=>r("svg",{ref:u,...c,width:t,height:t,stroke:e,strokeWidth:n?24*Number(a)/Number(t):a,className:l("lucide",o),...m},[...s.map((([e,t])=>r(e,t))),...Array.isArray(i)?i:[i]]))),i=(e,a)=>{const n=t((({className:t,...n},c)=>{return r(o,{ref:c,iconNode:a,className:l(`lucide-${i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...n});var i}));return n.displayName=`${e}`,n},s=i("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),m=i("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u=function(t){var r=t.className,l=void 0===r?"":r,c=a(new Date),o=c[0],i=c[1],u=a([]),f=u[0],d=u[1],p=a([]),h=p[0],w=p[1],g=a(o.getMonth()),v=g[0],x=g[1],N=a(o.getFullYear()),y=N[0],b=N[1],k=a(o.getMonth()),E=k[0],j=k[1];n((function(){!function(){for(var e=[],t=new Date(o.getFullYear(),o.getMonth()),r=o.getMonth(),a=o.getFullYear(),n=t.getDay(),l=[],c=0;c<=n;c++)if(0===n)for(var i=0;i<6;i++)l.push(i);else if(0!==n){for(var s=1;s<n;s++)l.push(s);break}for(x(r),b(a);t.getMonth()===r;)e.push(t.getDate()),t.setDate(t.getDate()+1);d(l),w(e)}()}),[o]);return e.createElement("div",{className:" flex flex-col items-center justify-between min-h-[16rem] rounded-md border py-4 ".concat(l)},e.createElement("div",{className:"flex w-full items-center justify-between px-5"},e.createElement("h3",{className:"capitalize font-black font-inter text-sm text-center m-0"},"".concat({0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"}[v]," ").concat(y)),e.createElement("div",{className:"flex gap-4 mr-3"},e.createElement(s,{onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,E-1);e=t.getFullYear(),j(E-1),i(t)},className:"cursor-pointer"}),e.createElement(m,{onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,E+1);e=t.getFullYear(),i(t),b(t.getFullYear()),j(E+1)},className:"cursor-pointer"}))),e.createElement("div",{className:"flex flex-wrap w-full mt-4"},["mon","tue","wed","thur","fri","sat","sun"].map((function(t){return e.createElement("div",{key:t,className:"capitalize font-inter font-bold text-[13px] flex justify-center w-[calc(100%/7)]"},e.createElement("p",null,t))}))),e.createElement((function(){return e.createElement("div",{className:"flex flex-wrap w-full mt-3 ml-1"},f.map((function(t,r){return e.createElement("div",{key:r,className:"capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"},e.createElement("p",null))})),h.map((function(t,r){return e.createElement("div",{key:r,className:"capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"},e.createElement("p",null,t))})))}),null))};export{u as Dates};
//# sourceMappingURL=index.js.map
