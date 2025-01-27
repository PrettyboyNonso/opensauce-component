import e,{forwardRef as t,createElement as l,useState as a,useEffect as n}from"react";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=(...e)=>e.filter(((e,t,l)=>Boolean(e)&&""!==e.trim()&&l.indexOf(e)===t)).join(" ").trim()
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */;var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=t((({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:s,...m},f)=>l("svg",{ref:f,...c,width:t,height:t,stroke:e,strokeWidth:n?24*Number(a)/Number(t):a,className:r("lucide",i),...m},[...s.map((([e,t])=>l(e,t))),...Array.isArray(o)?o:[o]]))),o=(e,a)=>{const n=t((({className:t,...n},c)=>{return l(i,{ref:c,iconNode:a,className:r(`lucide-${o=e,o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...n});var o}));return n.displayName=`${e}`,n},s=o("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),m=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=function(t){var l=t.className,r=void 0===l?"":l,c=a(new Date),i=c[0],o=c[1],f=a([]),u=f[0],d=f[1],p=a([]),x=p[0],h=p[1],y=a(i.getMonth()),w=y[0],v=y[1],g=a(i.getFullYear()),E=g[0],N=g[1],b=a(i.getMonth()),j=b[0],k=b[1];n((function(){!function(){for(var e=[],t=new Date(i.getFullYear(),i.getMonth()),l=i.getMonth(),a=i.getFullYear(),n=t.getDay(),r=[],c=0;c<=n;c++)if(0===n)for(var o=0;o<6;o++)r.push(o);else if(0!==n){for(var s=1;s<n;s++)r.push(s);break}for(v(l),N(a);t.getMonth()===l;)e.push(t.getDate()),t.setDate(t.getDate()+1);d(r),h(e)}()}),[i]);return e.createElement("div",{className:"flex py-4 flex-col items-center justify-between px-6 border-solid border ".concat(r," min-h-64"),style:{border:"1px solid grey"}},e.createElement("div",{className:"flex w-full items-center justify-between"},e.createElement("h3",{className:"capitalize font-black font-inter md:w-widthOne text-sm  my-auto mx-0 flex justify-center"},"".concat({0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"}[w]," ").concat(E)),e.createElement("div",{className:"flex gap-4 mr-3"},e.createElement(s,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,j-1);e=t.getFullYear(),k(j-1),o(t),console.log(j)}}),e.createElement(m,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,j+1);e=t.getFullYear(),o(t),N(t.getFullYear()),k(j+1)}}))),e.createElement("div",{className:"flex mt-4 w-full flex-wrap"},e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"mon")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"tue")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"wed")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"thur")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"fri")),e.createElement("div",{className:"capitalize font-inter text-sm font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"sat")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"sun"))),e.createElement((function(){return e.createElement("div",{className:"flex mt-3 w-full flex-wrap ml-1"},u.map((function(t,l){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold mb-2 flex justify-center",style:{width:"calc(100%/7)"},key:l},e.createElement("p",null))})),x.map((function(t,l){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  mb-2 flex justify-center",style:{width:"calc(100%/7)"},key:l},e.createElement("p",null,t))})))}),null))};export{f as Dates};
//# sourceMappingURL=index.js.map
