"use strict";var e=require("react");
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=(...e)=>e.filter(((e,t,a)=>Boolean(e)&&""!==e.trim()&&a.indexOf(e)===t)).join(" ").trim()
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */;var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e.forwardRef((({color:l="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:c,className:o="",children:i,iconNode:s,...m},f)=>e.createElement("svg",{ref:f,...a,width:r,height:r,stroke:l,strokeWidth:c?24*Number(n)/Number(r):n,className:t("lucide",o),...m},[...s.map((([t,a])=>e.createElement(t,a))),...Array.isArray(i)?i:[i]]))),r=(a,r)=>{const n=e.forwardRef((({className:n,...c},o)=>{return e.createElement(l,{ref:o,iconNode:r,className:t(`lucide-${i=a,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...c});var i}));return n.displayName=`${a}`,n},n=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */exports.Dates=function(t){var a=t.className,l=void 0===a?"":a,r=e.useState(new Date),o=r[0],i=r[1],s=e.useState([]),m=s[0],f=s[1],u=e.useState([]),d=u[0],p=u[1],x=e.useState(o.getMonth()),w=x[0],h=x[1],E=e.useState(o.getFullYear()),v=E[0],g=E[1],N=e.useState(o.getMonth()),b=N[0],y=N[1];e.useEffect((function(){!function(){for(var e=[],t=new Date(o.getFullYear(),o.getMonth()),a=o.getMonth(),l=o.getFullYear(),r=t.getDay(),n=[],c=0;c<=r;c++)if(0===r)for(var i=0;i<6;i++)n.push(i);else if(0!==r){for(var s=1;s<r;s++)n.push(s);break}for(h(a),g(l);t.getMonth()===a;)e.push(t.getDate()),t.setDate(t.getDate()+1);f(n),p(e)}()}),[o]);return e.createElement("div",{className:"flex py-4 flex-col items-center justify-between px-2 border-solid border ".concat(l," min-h-64"),style:{border:"1px solid grey"}},e.createElement("div",{className:"flex w-full items-center justify-between"},e.createElement("h3",{className:"capitalize font-black font-inter text-sm ml-3"},"".concat({0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",10:"november",11:"december"}[w]," ").concat(v)),e.createElement("div",{className:"flex gap-4 mr-3"},e.createElement(n,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,b-1);e=t.getFullYear(),y(b-1),i(t),console.log(b)}}),e.createElement(c,{className:" cursor-pointer",onClick:function(){var e=(new Date).getFullYear(),t=new Date(e,b+1);e=t.getFullYear(),i(t),g(t.getFullYear()),y(b+1)}}))),e.createElement("div",{className:"flex mt-4 w-full flex-wrap"},e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"mon")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"tue")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"wed")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"thur")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"fri")),e.createElement("div",{className:"capitalize font-inter text-sm font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"sat")),e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center"},e.createElement("p",null,"sun"))),e.createElement((function(){return e.createElement("div",{className:"flex mt-3 w-full flex-wrap ml-1"},m.map((function(t,a){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14%] mb-2 flex justify-center",key:a},e.createElement("p",null))})),d.map((function(t,a){return e.createElement("div",{className:"capitalize font-inter text-[13px] font-bold w-[14%] mb-2 flex justify-center",key:a},e.createElement("p",null,t))})))}),null))};
//# sourceMappingURL=index.js.map
