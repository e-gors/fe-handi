"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9713],{64253:function(e,n,r){r.r(n);var t=r(1413),a=r(45987),i=r(93006),o=(r(72791),r(80184)),s=["errors","name","customError"];n.default=function(e){var n=e.errors,r=e.name,l=e.customError,d=(0,a.Z)(e,s),c=!1,u="";l&&(c=!0,u=l),n&&(c=n&&n.has(r)||!1,u=n&&n.first(r)||"");var v=(0,t.Z)((0,t.Z)({error:c,name:r,helperText:u},d),{},{value:d.value||""});return(0,o.jsx)(i.Z,(0,t.Z)({size:"small",variant:"outlined"},v))}},59713:function(e,n,r){r.r(n);var t=r(4942),a=r(1413),i=r(70885),o=r(68870),s=r(20890),l=r(63466),d=r(36151),c=r(72791),u=r(67394),v=r(64253),p=r(31783),h=r(44238),Z=r(80184),f={wrapper:{mt:5},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}},m=new p.ZP.Validator({rate:"required"});n.default=function(e){var n=e.steps,r=e.activeStep,p=e.handleCancel,x=e.handleNext,b=e.handleBack,g=e.rate,j=e.setRate,y=c.useState({values:{rate:""},errors:m.errors}),w=(0,i.Z)(y,2),k=w[0],E=w[1];c.useEffect((function(){g&&E({values:(0,a.Z)({},g)})}),[g]);var P=function(){m.validateAll(k.values).then((function(e){e?(j(k),x()):E((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:m.errors})}))}))};return(0,Z.jsxs)(o.Z,{sx:f.wrapper,children:[(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(s.Z,{sx:{fontWeight:"bold",fontSize:{xs:24,md:30},mb:1},children:"Terms"}),(0,Z.jsx)(o.Z,{children:(0,Z.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,Z.jsx)(s.Z,{children:"Your Bid"}),(0,Z.jsx)(v.default,{label:"Your Bid",name:"rate",errors:k.errors,value:k.values.rate,onBlur:function(){return function(e){var n=(0,h.formatValue)(k.values[e]);E((function(r){return(0,a.Z)((0,a.Z)({},r),{},{values:(0,a.Z)((0,a.Z)({},r.values),{},(0,t.Z)({},e,n))})}))}("rate")},onChange:function(e){var n=e.target.name,r=e.target.value;E((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},n,r))})}));var i=m.errors;m.validate(n,r).then((function(e){e||E((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:i})}))}))},onKeyDown:function(e){"Enter"===e.key&&P()},required:!0,InputProps:{startAdornment:(0,Z.jsx)(l.Z,{position:"start",children:"\u20b1"})}})]})})]}),(0,Z.jsxs)(o.Z,{sx:f.buttonWrapper,children:[(0,Z.jsxs)(d.Z,{color:"primary",onClick:b,size:"small",sx:f.back,disabled:0===r,type:"text",children:[(0,Z.jsx)(u.Z,{sx:f.backArrow}),(0,Z.jsx)("span",{children:"Back"})]}),(0,Z.jsxs)(o.Z,{sx:f.rightButtons,children:[(0,Z.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:p,size:"small",sx:f.cancel,children:"Cancel"}),(0,Z.jsx)(d.Z,{variant:"contained",color:"primary",onClick:P,size:"small",sx:f.next,children:r+1===n.length?"Post my job":"Next Step"})]})]})]})}},67394:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),i=r(80184),o=(0,a.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");n.Z=o},63466:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(4942),a=r(63366),i=r(87462),o=r(72791),s=r(28182),l=r(94419),d=r(14036),c=r(20890),u=r(93840),v=r(52930),p=r(66934),h=r(75878),Z=r(21217);function f(e){return(0,Z.Z)("MuiInputAdornment",e)}var m,x=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=r(31402),g=r(80184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,d.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,t.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),w=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiInputAdornment"}),t=r.children,p=r.className,h=r.component,Z=void 0===h?"div":h,x=r.disablePointerEvents,w=void 0!==x&&x,k=r.disableTypography,E=void 0!==k&&k,P=r.position,z=r.variant,C=(0,a.Z)(r,j),S=(0,v.Z)()||{},A=z;z&&S.variant,S&&!A&&(A=S.variant);var L=(0,i.Z)({},r,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:w,position:P,variant:A}),B=function(e){var n=e.classes,r=e.disablePointerEvents,t=e.hiddenLabel,a=e.position,i=e.size,o=e.variant,s={root:["root",r&&"disablePointerEvents",a&&"position".concat((0,d.Z)(a)),o,t&&"hiddenLabel",i&&"size".concat((0,d.Z)(i))]};return(0,l.Z)(s,f,n)}(L);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(y,(0,i.Z)({as:Z,ownerState:L,className:(0,s.Z)(B.root,p),ref:n},C,{children:"string"!==typeof t||E?(0,g.jsxs)(o.Fragment,{children:["start"===P?m||(m=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,g.jsx)(c.Z,{color:"text.secondary",children:t})}))})}))}}]);
//# sourceMappingURL=9713.171f4a4c.chunk.js.map