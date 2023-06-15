"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6526,4253,3778,3361],{64253:function(e,r,n){n.r(r);var t=n(1413),a=n(45987),o=n(93006),i=(n(72791),n(80184)),s=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,l=e.customError,d=(0,a.Z)(e,s),u=!1,c="";l&&(u=!0,c=l),r&&(u=r&&r.has(n)||!1,c=r&&r.first(n)||"");var v=(0,t.Z)((0,t.Z)({error:u,name:n,helperText:c},d),{},{value:d.value||""});return(0,i.jsx)(o.Z,(0,t.Z)({size:"small",variant:"outlined"},v))}},53778:function(e,r,n){n.r(r);var t=n(1413),a=n(45987),o=(n(72791),n(68096)),i=n(30829),s=n(58406),l=n(77196),d=n(23786),u=n(47071),c=n(80184),v=["label","errors","options","categories","subCategories","customError"];r.default=function(e){var r=e.label,n=e.errors,p=e.options,h=void 0===p?[]:p,m=e.categories,Z=void 0===m?[]:m,x=e.subCategories,f=void 0===x?[]:x,b=e.customError,j=(0,a.Z)(e,v),g=!1,y="";b&&(g=b.error||!1,y=b.message||""),n&&(g=n&&n.has(e.name)||!1,y=n&&n.first(e.name)||"");var w=(0,t.Z)({margin:"dense",error:g},j);return(0,c.jsxs)(o.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,c.jsx)(i.Z,{id:"dropdown-label",children:r}),(0,c.jsxs)(s.Z,(0,t.Z)((0,t.Z)({labelId:"dropdown-label",input:(0,c.jsx)(l.Z,{label:r})},w),{},{children:[h.map((function(e,r){return(0,c.jsx)(d.Z,{value:e,children:e},r)})),Z.map((function(e,r){return(0,c.jsx)(d.Z,{value:e.name,children:e.name},r)})),f.map((function(e){return e.children.map((function(e,r){return(0,c.jsx)(d.Z,{value:e.name,children:e.name},r)}))}))]})),(0,c.jsx)(u.Z,{error:!0,children:y})]})}},26526:function(e,r,n){n.r(r);var t=n(4942),a=n(1413),o=n(70885),i=n(72791),s=n(68870),l=n(20890),d=n(63466),u=n(36151),c=n(80911),v=n(94721),p=n(23786),h=n(64253),m=n(5403),Z=n(60585),x=n(53778),f=n(80813),b=n(80184),j=["Pending","Accepted","Declined","Withdrawn"],g=["Ascending","Descending"],y=["Ascending","Descending"];r.default=function(e){e.role;var r=i.useState(null),n=(0,o.Z)(r,2),w=n[0],E=n[1],P=i.useState({values:{limit:10,search:"",status:"",order_by_date:"",order_by_rate:""}}),C=(0,o.Z)(P,2),R=C[0],S=C[1],F=function(e){var r=e.target.name,n=e.target.value,o="string"===typeof n?n.split(","):n;S((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},r,o))})}))};return(0,b.jsx)(s.Z,{sx:{mt:8,p:2},children:(0,b.jsxs)(s.Z,{children:[(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.Z,{sx:{fontSize:{xs:20,md:24},m:2},children:"ALL REPORTS"}),(0,b.jsx)(s.Z,{sx:{width:"100%",backgroundColor:"#EBEBEB",p:2,borderRadius:2,mb:2},children:(0,b.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(h.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search for Reports",onChange:F,value:R.values.search,InputProps:{startAdornment:(0,b.jsx)(d.Z,{position:"start",children:(0,b.jsx)(m.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,b.jsxs)(u.Z,{variant:"outlined",color:"primary",sx:{ml:1,backgroundColor:"white"},onClick:function(e){E(e.currentTarget)},children:[(0,b.jsx)(Z.Z,{})," Filter"]}),(0,b.jsxs)(c.Z,{anchorEl:w,open:Boolean(w),onClose:function(){E(null)},PaperProps:{style:{minWidth:300}},children:[(0,b.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},children:[(0,b.jsx)(l.Z,{children:"Filter"}),(0,b.jsx)(u.Z,{onClick:function(){S({values:{search:"",status:"",order_by_date:"",order_by_rate:""}})},children:"Clear filter"})]}),(0,b.jsx)(v.Z,{}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(x.default,{name:"status",label:"Status",value:R.values.status,onChange:F,options:j})}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(x.default,{name:"order_by_date",label:"Order By Date",value:R.values.order_by_date,onChange:F,options:y})}),(0,b.jsx)(p.Z,{children:(0,b.jsx)(x.default,{name:"order_by_rate",label:"Order By Rate",value:R.values.order_by_rate,onChange:F,options:g})})]})]})})]}),(0,b.jsxs)(s.Z,{align:"center",sx:{mt:5,p:2},children:[(0,b.jsx)(f.Z,{sx:{width:{xs:100,md:120},height:{xs:100,md:120},color:"#BEBEBE",boxShadow:20,borderRadius:3}}),(0,b.jsx)(l.Z,{sx:{mt:2},children:"NO REPORTS HAVE BEEN RECEIVED"})]})]})})}},80813:function(e,r,n){var t=n(64836);r.Z=void 0;var a=t(n(45649)),o=n(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");r.Z=i},60585:function(e,r,n){var t=n(64836);r.Z=void 0;var a=t(n(45649)),o=n(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");r.Z=i},5403:function(e,r,n){var t=n(64836);r.Z=void 0;var a=t(n(45649)),o=n(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");r.Z=i},63466:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(4942),a=n(63366),o=n(87462),i=n(72791),s=n(28182),l=n(94419),d=n(14036),u=n(20890),c=n(93840),v=n(52930),p=n(66934),h=n(75878),m=n(21217);function Z(e){return(0,m.Z)("MuiInputAdornment",e)}var x,f=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=n(31402),j=n(80184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r["position".concat((0,d.Z)(n.position))],!0===n.disablePointerEvents&&r.disablePointerEvents,r[n.variant]]}})((function(e){var r=e.theme,n=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},"filled"===n.variant&&(0,t.Z)({},"&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=i.forwardRef((function(e,r){var n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),t=n.children,p=n.className,h=n.component,m=void 0===h?"div":h,f=n.disablePointerEvents,w=void 0!==f&&f,E=n.disableTypography,P=void 0!==E&&E,C=n.position,R=n.variant,S=(0,a.Z)(n,g),F=(0,v.Z)()||{},_=R;R&&F.variant,F&&!_&&(_=F.variant);var I=(0,o.Z)({},n,{hiddenLabel:F.hiddenLabel,size:F.size,disablePointerEvents:w,position:C,variant:_}),z=function(e){var r=e.classes,n=e.disablePointerEvents,t=e.hiddenLabel,a=e.position,o=e.size,i=e.variant,s={root:["root",n&&"disablePointerEvents",a&&"position".concat((0,d.Z)(a)),i,t&&"hiddenLabel",o&&"size".concat((0,d.Z)(o))]};return(0,l.Z)(s,Z,r)}(I);return(0,j.jsx)(c.Z.Provider,{value:null,children:(0,j.jsx)(y,(0,o.Z)({as:m,ownerState:I,className:(0,s.Z)(z.root,p),ref:r},S,{children:"string"!==typeof t||P?(0,j.jsxs)(i.Fragment,{children:["start"===C?x||(x=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,j.jsx)(u.Z,{color:"text.secondary",children:t})}))})}))},93006:function(e,r,n){var t=n(87462),a=n(63366),o=n(72791),i=n(28182),s=n(94419),l=n(96248),d=n(66934),u=n(31402),c=n(4110),v=n(86596),p=n(77196),h=n(30829),m=n(68096),Z=n(47071),x=n(58406),f=n(12022),b=n(80184),j=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],g={standard:c.Z,filled:v.Z,outlined:p.Z},y=(0,d.ZP)(m.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),w=o.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiTextField"}),o=n.autoComplete,d=n.autoFocus,c=void 0!==d&&d,v=n.children,p=n.className,m=n.color,w=void 0===m?"primary":m,E=n.defaultValue,P=n.disabled,C=void 0!==P&&P,R=n.error,S=void 0!==R&&R,F=n.FormHelperTextProps,_=n.fullWidth,I=void 0!==_&&_,z=n.helperText,T=n.id,B=n.InputLabelProps,A=n.inputProps,L=n.InputProps,k=n.inputRef,M=n.label,H=n.maxRows,N=n.minRows,V=n.multiline,W=void 0!==V&&V,D=n.name,O=n.onBlur,q=n.onChange,G=n.onFocus,J=n.placeholder,K=n.required,Q=void 0!==K&&K,U=n.rows,X=n.select,Y=void 0!==X&&X,$=n.SelectProps,ee=n.type,re=n.value,ne=n.variant,te=void 0===ne?"outlined":ne,ae=(0,a.Z)(n,j),oe=(0,t.Z)({},n,{autoFocus:c,color:w,disabled:C,error:S,fullWidth:I,multiline:W,required:Q,select:Y,variant:te}),ie=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},f.I,r)}(oe);var se={};"outlined"===te&&(B&&"undefined"!==typeof B.shrink&&(se.notched=B.shrink),se.label=M),Y&&($&&$.native||(se.id=void 0),se["aria-describedby"]=void 0);var le=(0,l.Z)(T),de=z&&le?"".concat(le,"-helper-text"):void 0,ue=M&&le?"".concat(le,"-label"):void 0,ce=g[te],ve=(0,b.jsx)(ce,(0,t.Z)({"aria-describedby":de,autoComplete:o,autoFocus:c,defaultValue:E,fullWidth:I,multiline:W,name:D,rows:U,maxRows:H,minRows:N,type:ee,value:re,id:le,inputRef:k,onBlur:O,onChange:q,onFocus:G,placeholder:J,inputProps:A},se,L));return(0,b.jsxs)(y,(0,t.Z)({className:(0,i.Z)(ie.root,p),disabled:C,error:S,fullWidth:I,ref:r,required:Q,color:w,variant:te,ownerState:oe},ae,{children:[null!=M&&""!==M&&(0,b.jsx)(h.Z,(0,t.Z)({htmlFor:le,id:ue},B,{children:M})),Y?(0,b.jsx)(x.Z,(0,t.Z)({"aria-describedby":de,id:le,labelId:ue,value:re,input:ve},$,{children:v})):ve,z&&(0,b.jsx)(Z.Z,(0,t.Z)({id:de},F,{children:z}))]}))}));r.Z=w},12022:function(e,r,n){n.d(r,{I:function(){return o}});var t=n(75878),a=n(21217);function o(e){return(0,a.Z)("MuiTextField",e)}var i=(0,t.Z)("MuiTextField",["root"]);r.Z=i}}]);
//# sourceMappingURL=6526.bedc4232.chunk.js.map