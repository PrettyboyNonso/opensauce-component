"use strict";var e=require("react");
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=(...e)=>e.filter(((e,t,l)=>Boolean(e)&&""!==e.trim()&&l.indexOf(e)===t)).join(" ").trim()
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */;var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=e.forwardRef((({color:a="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:c,className:i="",children:s,iconNode:o,...m},f)=>e.createElement("svg",{ref:f,...l,width:r,height:r,stroke:a,strokeWidth:c?24*Number(n)/Number(r):n,className:t("lucide",i),...m},[...o.map((([t,l])=>e.createElement(t,l))),...Array.isArray(s)?s:[s]]))),r=(l,r)=>{const n=e.forwardRef((({className:n,...c},i)=>{return e.createElement(a,{ref:i,iconNode:r,className:t(`lucide-${s=l,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...c});var s}));return n.displayName=`${l}`,n},n=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */exports.Dates=function(t){var l=t.className,a=void 0===l?"":l,r=e.useState(new Date),i=r[0],s=r[1],o=e.useState([]),m=o[0],f=o[1],u=e.useState([]),d=u[0],p=u[1],x=e.useState(i.getMonth()),h=x[0],w=x[1],y=e.useState(i.getFullYear()),E=y[0],v=y[1],g=e.useState(i.getMonth()),N=g[0],b=g[1];e.useEffect((function(){!function(){for(var e=[],t=new Date(i.getFullYear(),i.getMonth()),l=i.getMonth(),a=i.getFullYear(),r=t.getDay(),n=[],c=0;c<=r;c++)if(0===r)for(var s=0;s<6;s++)n.push(s);else if(0!==r){for(var o=1;o<r;o++)n.push(o);break}for(w(l),v(a);t.getMonth()===l;)e.push(t.getDate()),t.setDate(t.getDate()+1);f(n),p(e)}()}),[i]);return e.createElement("div",{className:"flex py-4 flex-col items-center justify-between px-6 border-solid border ".concat(a," min-h-64"),style:{border:"1px solid grey"}},e.createElement("div",{className:"flex w-full items-center justify-between"},e.createElement("h3",{className:"capitalize font-black font-inter md:w-widthOne text-sm  my-auto mx-0 flex justify-center"},"".concat({0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"}[h]," ").concat(E)),e.createElement("div",{className:"flex gap-4 mr-3"},e.createElement(n,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,N-1);e=t.getFullYear(),b(N-1),s(t),console.log(N)}}),e.createElement(c,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,N+1);e=t.getFullYear(),s(t),v(t.getFullYear()),b(N+1)}}))),e.createElement("div",{className:"flex mt-4 w-full flex-wrap"},e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"mon")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"tue")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"wed")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"thur")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"fri")),e.createElement("div",{className:"capitalize font-inter text-sm font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"sat")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  flex justify-center",style:{width:"calc(100%/7)"}},e.createElement("p",null,"sun"))),e.createElement((function(){return e.createElement("div",{className:"flex mt-3 w-full flex-wrap ml-1"},m.map((function(t,l){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold mb-2 flex justify-center",style:{width:"calc(100%/7)"},key:l},e.createElement("p",null))})),d.map((function(t,l){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold  mb-2 flex justify-center",style:{width:"calc(100%/7)"},key:l},e.createElement("p",null,t))})))}),null))};
//# sourceMappingURL=index.js.map
