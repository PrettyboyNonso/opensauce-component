"use strict";var e=require("react");
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim();
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=e.forwardRef((({color:a="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:o="",children:s,iconNode:i,...u},m)=>e.createElement("svg",{ref:m,...r,width:n,height:n,stroke:a,strokeWidth:c?24*Number(l)/Number(n):l,className:t("lucide",o),...u},[...i.map((([t,r])=>e.createElement(t,r))),...Array.isArray(s)?s:[s]]))),n=(r,n)=>{const l=e.forwardRef((({className:l,...c},o)=>{return e.createElement(a,{ref:o,iconNode:n,className:t(`lucide-${s=r,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,l),...c});var s}));return l.displayName=`${r}`,l},l=n("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */exports.Dates=function(t){var r=t.className,a=void 0===r?"":r,n=e.useState(new Date),o=n[0],s=n[1],i=e.useState([]),u=i[0],m=i[1],f=e.useState([]),d=f[0],p=f[1],h=e.useState(o.getMonth()),w=h[0],g=h[1],v=e.useState(o.getFullYear()),x=v[0],N=v[1],y=e.useState(o.getMonth()),E=y[0],b=y[1];e.useEffect((function(){!function(){for(var e=[],t=new Date(o.getFullYear(),o.getMonth()),r=o.getMonth(),a=o.getFullYear(),n=t.getDay(),l=[],c=0;c<=n;c++)if(0===n)for(var s=0;s<6;s++)l.push(s);else if(0!==n){for(var i=1;i<n;i++)l.push(i);break}for(g(r),N(a);t.getMonth()===r;)e.push(t.getDate()),t.setDate(t.getDate()+1);m(l),p(e)}()}),[o]);return e.createElement("div",{className:" flex flex-col items-center justify-between min-h-[16rem] rounded-md border py-4 ".concat(a)},e.createElement("div",{className:"flex w-full items-center justify-between px-5"},e.createElement("h3",{className:"capitalize font-black font-inter text-sm text-center m-0"},"".concat({0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"}[w]," ").concat(x)),e.createElement("div",{className:"flex gap-4 mr-3"},e.createElement(l,{onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,E-1);e=t.getFullYear(),b(E-1),s(t)},className:"cursor-pointer"}),e.createElement(c,{onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,E+1);e=t.getFullYear(),s(t),N(t.getFullYear()),b(E+1)},className:"cursor-pointer"}))),e.createElement("div",{className:"flex flex-wrap w-full mt-4"},["mon","tue","wed","thur","fri","sat","sun"].map((function(t){return e.createElement("div",{key:t,className:"capitalize font-inter font-bold text-[13px] flex justify-center w-[calc(100%/7)]"},e.createElement("p",null,t))}))),e.createElement((function(){return e.createElement("div",{className:"flex flex-wrap w-full mt-3 ml-1"},u.map((function(t,r){return e.createElement("div",{key:r,className:"capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"},e.createElement("p",null))})),d.map((function(t,r){return e.createElement("div",{key:r,className:"capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"},e.createElement("p",null,t))})))}),null))};
//# sourceMappingURL=index.js.map
