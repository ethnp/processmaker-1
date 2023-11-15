(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8006,8124],{4685:function(e,t,r){"use strict";r.d(t,{e:function(){return O}});var n=r(7294),o=r(5920),a=r(8427),i=r(5117),l=r(6817),c=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&p(e,r,t[r]);return e},h=(0,l.k)((e,{color:t,underline:r})=>({root:u({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:function({theme:e,color:t}){return"dimmed"===t?e.fn.dimmed():e.fn.themeColor(t||e.primaryColor,"dark"===e.colorScheme?4:7,!1,!0)}({theme:e,color:t})},e.fn.hover({textDecoration:r?"underline":"none"}))})),m=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))y.call(t,r)&&x(e,r,t[r]);return e},w=(e,t)=>{var r={};for(var n in e)b.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))0>t.indexOf(n)&&y.call(e,n)&&(r[n]=e[n]);return r};let k={underline:!0},j=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Anchor",k,e),{component:a,className:l,unstyled:c,variant:s,size:d,color:f,underline:p}=r,u=w(r,["component","className","unstyled","variant","size","color","underline"]),{classes:m,cx:g}=h({color:f,underline:p},{name:"Anchor",unstyled:c,variant:s,size:d});return n.createElement(i.x,v(v({component:a||"a",ref:t,className:g(m.root,l),size:d},"button"===a?{type:"button"}:null),u))});j.displayName="@mantine/core/Anchor";let O=(0,a.F)(j)},7841:function(e,t,r){"use strict";r.d(t,{z:function(){return H}});var n=r(7294),o=r(5920),a=r(4258),i=r(8427),l=r(6817),c=r(6768),s=(0,l.k)((e,{orientation:t,buttonBorderWidth:r})=>({root:{display:"flex",flexDirection:"vertical"===t?"column":"row","& [data-button]":{"&:first-of-type:not(:last-of-type)":{borderBottomRightRadius:0,["vertical"===t?"borderBottomLeftRadius":"borderTopRightRadius"]:0,["vertical"===t?"borderBottomWidth":"borderRightWidth"]:`calc(${(0,c.h)(r)} / 2)`},"&:last-of-type:not(:first-of-type)":{borderTopLeftRadius:0,["vertical"===t?"borderTopRightRadius":"borderBottomLeftRadius"]:0,["vertical"===t?"borderTopWidth":"borderLeftWidth"]:`calc(${(0,c.h)(r)} / 2)`},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,["vertical"===t?"borderTopWidth":"borderLeftWidth"]:`calc(${(0,c.h)(r)} / 2)`,["vertical"===t?"borderBottomWidth":"borderRightWidth"]:`calc(${(0,c.h)(r)} / 2)`},"& + [data-button]":{["vertical"===t?"marginTop":"marginLeft"]:`calc(${r} * -1)`,"@media (min-resolution: 192dpi)":{["vertical"===t?"marginTop":"marginLeft"]:0}}}}})),d=r(4523),f=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&m(e,r,t[r]);return e},b=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>t.indexOf(n)&&h.call(e,n)&&(r[n]=e[n]);return r};let y={orientation:"horizontal",buttonBorderWidth:1},x=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("ButtonGroup",y,e),{className:a,orientation:i,buttonBorderWidth:l,unstyled:c}=r,f=b(r,["className","orientation","buttonBorderWidth","unstyled"]),{classes:p,cx:u}=s({orientation:i,buttonBorderWidth:l},{name:"ButtonGroup",unstyled:c});return n.createElement(d.x,g({className:u(p.root,a),ref:t},f))});x.displayName="@mantine/core/ButtonGroup";var v=r(5227),w=Object.defineProperty,k=Object.defineProperties,j=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))S.call(t,r)&&P(e,r,t[r]);if(O)for(var r of O(t))N.call(t,r)&&P(e,r,t[r]);return e},I=(e,t)=>k(e,j(t));let z=["filled","outline","light","white","default","subtle","gradient"],E={xs:{height:v.J.xs,paddingLeft:(0,c.h)(14),paddingRight:(0,c.h)(14)},sm:{height:v.J.sm,paddingLeft:(0,c.h)(18),paddingRight:(0,c.h)(18)},md:{height:v.J.md,paddingLeft:(0,c.h)(22),paddingRight:(0,c.h)(22)},lg:{height:v.J.lg,paddingLeft:(0,c.h)(26),paddingRight:(0,c.h)(26)},xl:{height:v.J.xl,paddingLeft:(0,c.h)(32),paddingRight:(0,c.h)(32)},"compact-xs":{height:(0,c.h)(22),paddingLeft:(0,c.h)(7),paddingRight:(0,c.h)(7)},"compact-sm":{height:(0,c.h)(26),paddingLeft:(0,c.h)(8),paddingRight:(0,c.h)(8)},"compact-md":{height:(0,c.h)(30),paddingLeft:(0,c.h)(10),paddingRight:(0,c.h)(10)},"compact-lg":{height:(0,c.h)(34),paddingLeft:(0,c.h)(12),paddingRight:(0,c.h)(12)},"compact-xl":{height:(0,c.h)(40),paddingLeft:(0,c.h)(14),paddingRight:(0,c.h)(14)}},C=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});var T=(0,l.k)((e,{radius:t,fullWidth:r,compact:n,withLeftIcon:o,withRightIcon:i,color:l,gradient:s},{variant:d,size:f})=>({root:I(R(I(R(R(R(R({},function({compact:e,size:t,withLeftIcon:r,withRightIcon:n}){if(e)return E[`compact-${t}`];let o=E[t];return o?I(R({},o),{paddingLeft:r?`calc(${o.paddingLeft}  / 1.5)`:o.paddingLeft,paddingRight:n?`calc(${o.paddingRight}  / 1.5)`:o.paddingRight}):{}}({compact:n,size:f,withLeftIcon:o,withRightIcon:i})),e.fn.fontStyles()),e.fn.focusStyles()),C(r)),{borderRadius:e.fn.radius(t),fontWeight:600,position:"relative",lineHeight:1,fontSize:(0,a.a)({size:f,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),function({variant:e,theme:t,color:r,gradient:n}){if(!z.includes(e))return null;let o=t.fn.variant({color:r,variant:e,gradient:n});return"gradient"===e?R({border:0,backgroundImage:o.background,color:o.color},t.fn.hover({backgroundSize:"200%"})):R({border:`${(0,c.h)(1)} solid ${o.border}`,backgroundColor:o.background,color:o.color},t.fn.hover({backgroundColor:o.hover}))}({variant:d,theme:e,color:l,gradient:s})),{"&:active":e.activeStyles,"&:disabled, &[data-disabled]":{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed",backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":I(R({content:'""'},e.fn.cover((0,c.h)(-1))),{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"})}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:e.spacing.xs},rightIcon:{marginLeft:e.spacing.xs},centerLoader:{position:"absolute",left:"50%",transform:"translateX(-50%)",opacity:.5},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}})),L=r(966),W=r(4736),_=Object.defineProperty,B=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&A(e,r,t[r]);if(B)for(var r of B(t))D.call(t,r)&&A(e,r,t[r]);return e},G=(e,t)=>{var r={};for(var n in e)$.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&B)for(var n of B(e))0>t.indexOf(n)&&D.call(e,n)&&(r[n]=e[n]);return r};let Z={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},J=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Button",Z,e),{className:i,size:l,color:c,type:s,disabled:d,children:f,leftIcon:p,rightIcon:u,fullWidth:h,variant:m,radius:g,uppercase:b,compact:y,loading:x,loaderPosition:v,loaderProps:w,gradient:k,classNames:j,styles:O,unstyled:S}=r,N=G(r,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:P,cx:R,theme:I}=T({radius:g,color:c,fullWidth:h,compact:y,gradient:k,withLeftIcon:!!p,withRightIcon:!!u},{name:"Button",unstyled:S,classNames:j,styles:O,variant:m,size:l}),z=I.fn.variant({color:c,variant:m}),C=n.createElement(L.a,F({color:z.color,size:`calc(${(0,a.a)({size:l,sizes:E}).height} / 2)`},w));return n.createElement(W.k,F({className:R(P.root,i),type:s,disabled:d,"data-button":!0,"data-disabled":d||void 0,"data-loading":x||void 0,ref:t,unstyled:S},N),n.createElement("div",{className:P.inner},(p||x&&"left"===v)&&n.createElement("span",{className:R(P.icon,P.leftIcon)},x&&"left"===v?C:p),x&&"center"===v&&n.createElement("span",{className:P.centerLoader},C),n.createElement("span",{className:P.label,style:{textTransform:b?"uppercase":void 0}},f),(u||x&&"right"===v)&&n.createElement("span",{className:R(P.icon,P.rightIcon)},x&&"right"===v?C:u)))});J.displayName="@mantine/core/Button",J.Group=x;let H=(0,i.F)(J)},2445:function(e,t,r){"use strict";r.d(t,{W:function(){return y}});var n=r(7294),o=r(6768),a=r(5920),i=r(6817),l=r(4258),c=(0,i.k)((e,{fluid:t,sizes:r},{size:n})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:t?"100%":(0,l.a)({size:n,sizes:r}),marginLeft:"auto",marginRight:"auto"}})),s=r(4523),d=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(f)for(var r of f(t))u.call(t,r)&&h(e,r,t[r]);return e},g=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let b={sizes:{xs:(0,o.h)(540),sm:(0,o.h)(720),md:(0,o.h)(960),lg:(0,o.h)(1140),xl:(0,o.h)(1320)}},y=(0,n.forwardRef)((e,t)=>{let r=(0,a.N4)("Container",b,e),{className:o,fluid:i,size:l,unstyled:d,sizes:f,variant:p}=r,u=g(r,["className","fluid","size","unstyled","sizes","variant"]),{classes:h,cx:y}=c({fluid:i,sizes:f},{unstyled:d,name:"Container",variant:p,size:l});return n.createElement(s.x,m({className:y(h.root,o),ref:t},u))});y.displayName="@mantine/core/Container"},1232:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),o=r(5920),a=r(9893),i=r(4523),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&f(e,r,t[r]);return e},u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>t.indexOf(n)&&d.call(e,n)&&(r[n]=e[n]);return r};let h={position:"left",spacing:"md"},m=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Group",h,e),{className:l,position:c,align:s,children:d,noWrap:f,grow:m,spacing:g,unstyled:b,variant:y}=r,x=u(r,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),v=n.Children.toArray(d).filter(Boolean),{classes:w,cx:k}=(0,a.Z)({align:s,grow:m,noWrap:f,spacing:g,position:c,count:v.length},{unstyled:b,name:"Group",variant:y});return n.createElement(i.x,p({className:k(w.root,l),ref:t},x),v)});m.displayName="@mantine/core/Group"},9893:function(e,t,r){"use strict";r.d(t,{H:function(){return i}});var n=r(6817),o=r(4258),a=r(6768);let i={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var l=(0,n.k)((e,{spacing:t,position:r,noWrap:n,grow:l,align:c,count:s})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:c||"center",flexWrap:n?"nowrap":"wrap",justifyContent:i[r],gap:(0,o.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:l?`calc(${100/s}% - (${(0,a.h)((0,o.a)({size:t,sizes:e.spacing}))} - ${(0,o.a)({size:t,sizes:e.spacing})} / ${s}))`:void 0,flexGrow:l?1:0}}}));t.Z=l},2623:function(e,t,r){"use strict";r.d(t,{X:function(){return x}});var n=r(7294),o=r(5920),a=r(8427),i=r(6817),l=r(6768),c=(0,i.k)((e,{radius:t,shadow:r})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(t),boxShadow:e.shadows[r]||r||"none","&[data-with-border]":{border:`${(0,l.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`}}})),s=r(4523),d=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(f)for(var r of f(t))u.call(t,r)&&h(e,r,t[r]);return e},g=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let b={},y=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Paper",b,e),{className:a,children:i,radius:l,withBorder:d,shadow:f,unstyled:p,variant:u}=r,h=g(r,["className","children","radius","withBorder","shadow","unstyled","variant"]),{classes:y,cx:x}=c({radius:l,shadow:f},{name:"Paper",unstyled:p,variant:u});return n.createElement(s.x,m({className:x(y.root,a),"data-with-border":d||void 0,ref:t},h),i)});y.displayName="@mantine/core/Paper";let x=(0,a.F)(y)},7564:function(e,t,r){"use strict";r.d(t,{K:function(){return b}});var n=r(7294),o=r(5920),a=r(6817),i=r(4258),l=(0,a.k)((e,{spacing:t,align:r,justify:n})=>({root:{display:"flex",flexDirection:"column",alignItems:r,justifyContent:n,gap:(0,i.a)({size:t,sizes:e.spacing})}})),c=r(4523),s=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&u(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>{var r={};for(var n in e)f.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&p.call(e,n)&&(r[n]=e[n]);return r};let g={spacing:"md",align:"stretch",justify:"flex-start"},b=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Stack",g,e),{spacing:a,className:i,align:s,justify:d,unstyled:f,variant:p}=r,u=m(r,["spacing","className","align","justify","unstyled","variant"]),{classes:b,cx:y}=l({spacing:a,align:s,justify:d},{name:"Stack",unstyled:f,variant:p});return n.createElement(c.x,h({className:y(b.root,i),ref:t},u))});b.displayName="@mantine/core/Stack"},61:function(e,t,r){"use strict";r.d(t,{o:function(){return b}});var n=r(7294),o=r(6261),a=r(4151),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&p(e,r,t[r]);return e},h=(e,t)=>l(e,c(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>t.indexOf(n)&&f.call(e,n)&&(r[n]=e[n]);return r};let g={type:"text",size:"sm",__staticSelector:"TextInput"},b=(0,n.forwardRef)((e,t)=>{let r=(0,o.k)("TextInput",g,e),{inputProps:i,wrapperProps:l}=r,c=m(r,["inputProps","wrapperProps"]);return n.createElement(a.I.Wrapper,u({},l),n.createElement(a.I,h(u(u({},i),c),{ref:t})))});b.displayName="@mantine/core/TextInput"},3051:function(e,t,r){"use strict";r.d(t,{M:function(){return l}});var n=r(7294),o=r(129);let a=n["useId".toString()]||(()=>void 0);var i=r(9058);function l(e){let t=function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[r,l]=(0,n.useState)(t);return((0,o.Y)(()=>{l((0,i.k)())},[]),"string"==typeof e)?e:"undefined"==typeof window?t:r}},129:function(e,t,r){"use strict";r.d(t,{Y:function(){return o}});var n=r(7294);let o="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},9058:function(e,t,r){"use strict";function n(){return`mantine-${Math.random().toString(36).slice(2,11)}`}r.d(t,{k:function(){return n}})},7818:function(e,t,r){"use strict";function n(e){return Array.isArray(e)?e:[e]}r.d(t,{R:function(){return n}})},1173:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password",function(){return r(9077)}])},8124:function(e,t,r){"use strict";r.r(t),r.d(t,{Footer:function(){return p}});var n=r(5893);r(7294);var o=r(6817),a=r(6768),i=r(5117),l=r(2445),c=r(4685),s=r(1382);let d=(0,o.k)(e=>({footer:{marginTop:(0,a.h)(120),paddingTop:"calc(".concat(e.spacing.xl," * 2)"),paddingBottom:"calc(".concat(e.spacing.xl," * 2)"),backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:"white",borderTop:"".concat((0,a.h)(1)," solid ").concat("dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2])},logo:{maxWidth:(0,a.h)(200),[e.fn.smallerThan("sm")]:{display:"flex",flexDirection:"column",alignItems:"center"}},description:{marginTop:(0,a.h)(5),[e.fn.smallerThan("sm")]:{marginTop:e.spacing.xs,textAlign:"center"}},inner:{display:"flex",justifyContent:"space-between",[e.fn.smallerThan("sm")]:{flexDirection:"column",alignItems:"center"}},groups:{display:"flex",flexWrap:"wrap",[e.fn.smallerThan("sm")]:{display:"none"}},wrapper:{width:(0,a.h)(160)},link:{display:"block",color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7],fontSize:e.fontSizes.sm,paddingTop:(0,a.h)(3),paddingBottom:(0,a.h)(3),"&:hover":{textDecoration:"underline"}},title:{fontSize:e.fontSizes.lg,fontWeight:700,fontFamily:"Greycliff CF, ".concat(e.fontFamily),marginBottom:"calc(".concat(e.spacing.xs," / 2)"),color:"dark"===e.colorScheme?e.white:e.black},afterFooter:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:e.spacing.xl,paddingTop:e.spacing.xl,paddingBottom:e.spacing.xl,borderTop:"".concat((0,a.h)(1)," solid ").concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),[e.fn.smallerThan("sm")]:{flexDirection:"column"}},social:{[e.fn.smallerThan("sm")]:{marginTop:e.spacing.xs}}}));function f(e){let{data:t}=e,{classes:r}=d(),o=t.map(e=>{let t=e.links.map((e,t)=>(0,n.jsx)(i.x,{className:r.link,component:"a",href:e.link,children:e.label},t));return(0,n.jsxs)("div",{className:r.wrapper,children:[(0,n.jsx)(i.x,{className:r.title,children:e.title}),t]},e.title)});return(0,n.jsxs)("footer",{className:r.footer,children:[(0,n.jsxs)(l.W,{className:r.inner,children:[(0,n.jsxs)("div",{className:r.logo,children:[(0,n.jsx)(s.p,{}),(0,n.jsx)(i.x,{size:"xs",color:"gray",className:r.description,children:"Next-generation tools matching with your needs to understand the data."})]}),(0,n.jsx)("div",{className:r.groups,children:o})]}),(0,n.jsxs)(l.W,{className:r.afterFooter,children:[(0,n.jsx)(i.x,{color:"gray",size:"sm",children:"\xa9 jsoncrack.com"}),(0,n.jsx)(c.e,{href:"mailto:contact@jsoncrack.com",color:"gray",size:"sm",children:"contact@jsoncrack.com"})]})]})}let p=()=>(0,n.jsx)(f,{data:[{title:"Developers",links:[{label:"Open Source",link:"/oss"},{label:"Contributing",link:"https://github.com/AykutSarac/jsoncrack.com/blob/main/CONTRIBUTING.md"}]},{title:"JSON Crack",links:[{label:"JSON Crack",link:"https://jsoncrack.com"},{label:"Terms of Service",link:"#"},{label:"Privacy Policy",link:"#"}]},{title:"Social",links:[{label:"Discord",link:"https://discord.gg/yVyTtCRueq"},{label:"Twitter",link:"https://twitter.com/jsoncrack"},{label:"GitHub",link:"https://github.com/AykutSarach"},{label:"LinkedIn",link:"https://www.linkedin.com/company/herowand"}]}]})},1382:function(e,t,r){"use strict";r.d(t,{p:function(){return h}});var n=r(2729),o=r(5893);r(7294);var a=r(1664),i=r.n(a),l=r(5437),c=r(4417),s=r.n(c);function d(){let e=(0,n._)(["\n  font-weight: 900;\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  font-size: ",";\n  white-space: nowrap;\n"]);return d=function(){return e},e}function f(){let e=(0,n._)(["\n  background: #ffb76b;\n  background: linear-gradient(to right, #fca74d 0%, #fda436 30%, #ff7c00 60%, #ff7f04 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);return f=function(){return e},e}let p=l.ZP.div.withConfig({componentId:"sc-47abdd36-0"})(d(),e=>{let{theme:t}=e;return t.INTERACTIVE_HOVER},s().style.fontFamily,e=>{let{fontSize:t}=e;return t}),u=l.ZP.span.withConfig({componentId:"sc-47abdd36-1"})(f()),h=e=>{let{fontSize:t="1.2rem",...r}=e;return(0,o.jsx)(i(),{href:"/",prefetch:!1,...r,children:(0,o.jsxs)(p,{fontSize:t,children:[(0,o.jsx)(u,{children:"JSON"})," CRACK"]})})}},7377:function(e,t,r){"use strict";r.d(t,{w:function(){return k}});var n=r(2729),o=r(5893);r(7294);var a=r(1664),i=r.n(a),l=r(5437),c=r(7841),s=r(9583),d=r(3161),f=r(1382);function p(){let e=(0,n._)(["\n  padding: 10px 0;\n"]);return p=function(){return e},e}function u(){let e=(0,n._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90vw;\n  height: 56px;\n  margin: 0 auto;\n  border: 2px solid black;\n  background: white;\n  padding: 8px 16px;\n  border-radius: 30px;\n\n  @media only screen and (max-width: 1024px) {\n    .desktop {\n      display: none;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hide-mobile {\n      display: none;\n    }\n  }\n"]);return u=function(){return e},e}function h(){let e=(0,n._)([""]);return h=function(){return e},e}function m(){let e=(0,n._)([""]);return m=function(){return e},e}function g(){let e=(0,n._)(["\n  display: flex;\n  gap: 16px;\n"]);return g=function(){return e},e}let b=l.ZP.div.withConfig({componentId:"sc-795682e4-0"})(p()),y=l.ZP.div.withConfig({componentId:"sc-795682e4-1"})(u()),x=l.ZP.div.withConfig({componentId:"sc-795682e4-2"})(h()),v=l.ZP.div.withConfig({componentId:"sc-795682e4-3"})(m()),w=l.ZP.div.withConfig({componentId:"sc-795682e4-4"})(g()),k=()=>{let e=(0,d.Z)(e=>e.isAuthenticated);return(0,o.jsx)(b,{children:(0,o.jsxs)(y,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(f.p,{})}),(0,o.jsxs)(v,{className:"hide-mobile",children:[(0,o.jsx)(c.z,{component:"a",href:"https://github.com/AykutSarac/jsoncrack.com",variant:"subtle",color:"dark",radius:"md",children:"GitHub"}),(0,o.jsx)(c.z,{component:i(),href:"/docs",prefetch:!1,variant:"subtle",color:"dark",radius:"md",children:"Docs"}),(0,o.jsx)(c.z,{component:i(),href:"/oss",prefetch:!1,variant:"subtle",color:"dark",radius:"md",children:"Supporters"}),(0,o.jsx)(c.z,{component:i(),href:"/pricing",prefetch:!1,variant:"subtle",color:"dark",radius:"md",children:"Pricing"})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)(c.z,{component:"a",href:"https://github.com/AykutSarac/jsoncrack.com",variant:"subtle",radius:"md",leftIcon:(0,o.jsx)(s.QJe,{}),className:"desktop",children:"Star us on GitHub"}),!e&&(0,o.jsx)(c.z,{component:i(),href:"/sign-in",prefetch:!1,variant:"light",radius:"md",className:"hide-mobile",children:"Sign In"}),(0,o.jsx)(c.z,{component:i(),href:"/editor",prefetch:!1,color:"pink",radius:"md",children:"Editor"})]})]})})}},9077:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthenticationForm:function(){return j}});var n=r(5893),o=r(7294),a=r(9008),i=r.n(a),l=r(1664),c=r.n(l),s=r(1163),d=r(2623),f=r(5117),p=r(7564),u=r(61),h=r(1232),m=r(7841),g=r(4685),b=r(4053),y=r(6501),x=r(8124),v=r(1382),w=r(7377),k=r(8985);function j(e){let[t,r]=o.useState(!1),[a,i]=o.useState(""),[l,s]=o.useState(!1);return(0,n.jsxs)(d.X,{pt:"lg",...e,children:[(0,n.jsx)(f.x,{size:"lg",weight:500,children:"Reset Password"}),l?(0,n.jsx)(f.x,{children:"We've sent an email to you, please check your inbox."}):(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(!0),k.O.auth.resetPasswordForEmail(a,{redirectTo:"/reset-password"}).then(e=>{let{error:t}=e;if(t)return y.toast.error(t.message);s(!0)}).finally(()=>r(!1))},children:[(0,n.jsx)(p.K,{children:(0,n.jsx)(u.o,{value:a,onChange:e=>i(e.target.value),required:!0,label:"Email",placeholder:"hello@herowand.com",size:"md",radius:"sm"})}),(0,n.jsx)(h.Z,{position:"apart",mt:"xl",children:(0,n.jsx)(m.z,{type:"submit",radius:"sm",size:"md",loading:t,fullWidth:!0,children:"Reset Password"})}),(0,n.jsx)(p.K,{mt:"lg",align:"center",children:(0,n.jsx)(g.e,{component:c(),prefetch:!1,href:"/sign-in",color:"dark",size:"xs",children:"Don't have an account? Sign Up"})})]})]})}t.default=()=>{let{isReady:e,push:t}=(0,s.useRouter)(),r=(0,b.useSession)();return o.useEffect(()=>{r&&t("/editor")},[e,r,t]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Reset Password | JSON Crack"}),(0,n.jsx)("meta",{name:"robots",content:"noindex,nofollow"})]}),(0,n.jsx)(w.w,{}),(0,n.jsxs)(d.X,{mx:"auto",mt:70,maw:400,p:"lg",withBorder:!0,children:[(0,n.jsx)(v.p,{}),(0,n.jsx)(j,{})]}),(0,n.jsx)(x.Footer,{})]})}},9008:function(e,t,r){e.exports=r(2636)}},function(e){e.O(0,[5445,4779,9215,7038,9774,2888,179],function(){return e(e.s=1173)}),_N_E=e.O()}]);
//# sourceMappingURL=reset-password-1bf40d8d40cbd49e.js.map