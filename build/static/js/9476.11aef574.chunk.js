"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9476,8292,9293,3850,3845],{8292:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(75985);function n(e,t,r){return"success"===e?a.Am.success(t,r):a.Am.error(t,r)}},49293:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(75985),n=(r(5462),r(80184));function o(){return(0,n.jsx)(a.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,t,r){r.r(t),r.d(t,{options:function(){return a}});var a={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},49643:function(e,t,r){r.r(t);var a=r(4942),n=r(1413),o=r(70885),i=r(68870),s=r(20792),d=r(13400),l=r(20890),c=r(36151),u=r(13239),p=r(72791),h=r(20376),x=r(90772),f=r(86711),m=r(97892),v=r.n(m),b=r(71652),Z=r(24750),j=r(35713),y=r(49293),g=r(8292),w=r(33850),D=r(63845),C=r(80184),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"95%",md:"60%"},maxHeight:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3},S={exitIconWrapper:{p:2,position:"relative"},exitIconButton:{position:"absolute",top:2,right:2},jobTypeWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"},justifyContent:"space-between"},jobTypeCard:{border:"1px solid blue",borderRadius:2,p:1,width:{xs:"100%",md:"48%"},m:1},card:{width:"100%",position:"relative",backgroundColor:"green"},input:{position:"absolute",top:0,right:0},cardDesWrapper:{display:"flex",alignItems:"center"},typeIcon:{fontSize:36,mr:1},cardTitle:{fontWeight:"bold",fontSize:14},cardDescription:{fontSize:12},buttonWrapper:{display:"flex",justifyContent:"right",mt:5},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",transition:"1s",backgroundColor:"green","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}}},I=v()();t.default=function(e){var t=e.open,r=e.handleClose,m=e.selectedItem,T=e.bid,k=p.useState(!1),R=(0,o.Z)(k,2),F=R[0],W=R[1],z=p.useState({values:{type:"Default",start_date:"",end_date:""}}),M=(0,o.Z)(z,2),E=M[0],_=M[1],L=function(e,t){_((function(r){return(0,n.Z)((0,n.Z)({},r),{},{values:(0,n.Z)((0,n.Z)({},r.values),{},(0,a.Z)({},e,t))})}))},q=function(){var e=new Date,t=null===m||void 0===m?void 0:m.days,r=new Date;r.setDate(e.getDate()+(8-e.getDay()));var a="Default"===E.values.type?r:E.values.start_date;if(t){var n=t.split("-").map((function(e){return parseInt(e)})),i=(0,o.Z)(n,2),s=(i[0],i[1]),d=v()(a).add(s,"day");return{startDate:v()(a),endDate:d}}return{startDate:v()(a),endDate:v()(a).add(41,"day")}},A=q(),H=A.startDate,B=A.endDate,N=function(e){e.startDate.format("MM","DD","YYYY")?function(e){W(!0),D.default.post("/choose/proposal/".concat(T.id,"/").concat(m.id),e).then((function(e){200===e.data.code?((0,g.default)("success",e.data.message,w.options),r()):(0,g.default)("error",e.data.message,w.options),W(!1)})).catch((function(e){W(!1),(0,g.default)("error",e.message,w.options)}))}(e):(0,g.default)("error","Start date is required!",w.options)};return(0,C.jsx)(i.Z,{children:(0,C.jsx)(s.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsxs)(i.Z,{sx:P,children:[(0,C.jsx)(y.default,{}),(0,C.jsxs)(i.Z,{sx:{mt:2},children:[(0,C.jsx)(i.Z,{sx:S.exitIconWrapper,children:(0,C.jsx)(d.Z,{onClick:r,sx:S.exitIconButton,children:(0,C.jsx)(f.Z,{color:"error"})})}),(0,C.jsxs)(i.Z,{sx:{p:2},children:[(0,C.jsxs)(i.Z,{children:[(0,C.jsx)(l.Z,{children:"Schedule Type *"}),(0,C.jsxs)(i.Z,{sx:S.jobTypeWrapper,children:[(0,C.jsx)(i.Z,{sx:S.jobTypeCard,children:(0,C.jsxs)(i.Z,{component:"label",htmlFor:"default",sx:S.card,children:[(0,C.jsx)("input",{id:"default",type:"radio",name:"type",value:"Default",checked:"Default"===E.values.type,onChange:function(e){return L("type",e.target.value)},style:S.input}),(0,C.jsxs)(i.Z,{sx:S.cardDesWrapper,children:[(0,C.jsx)(h.Z,{color:"primary",sx:S.typeIcon}),(0,C.jsxs)(i.Z,{children:[(0,C.jsx)(l.Z,{sx:S.cardTitle,children:"Default Date"}),(0,C.jsx)(l.Z,{sx:S.cardDescription,children:"Start your job schedule next week by the Monday!"})]})]})]})}),(0,C.jsx)(i.Z,{sx:S.jobTypeCard,children:(0,C.jsxs)(i.Z,{component:"label",htmlFor:"custom",sx:S.card,children:[(0,C.jsx)("input",{id:"custom",type:"radio",name:"type",value:"Custom Date",checked:"Custom Date"===E.values.type,onChange:function(e){return L("type",e.target.value)},style:S.input}),(0,C.jsxs)(i.Z,{sx:S.cardDesWrapper,children:[(0,C.jsx)(x.Z,{color:"primary",sx:S.typeIcon}),(0,C.jsxs)(i.Z,{children:[(0,C.jsx)(l.Z,{sx:S.cardTitle,children:"Custom Date"}),(0,C.jsx)(l.Z,{sx:S.cardDescription,children:"You can add custom schedule for your project."})]})]})]})})]})]}),"Default"===E.values.type&&(0,C.jsxs)(b._,{dateAdapter:Z.y,children:[(0,C.jsx)(l.Z,{sx:{mt:2,mb:2,fontSize:13},children:"You will not be able to edit the schedule below."}),(0,C.jsxs)(i.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,C.jsx)(i.Z,{sx:{width:"95%"},children:(0,C.jsx)(j.M,{sx:{width:"95%"},label:"Start Date",value:H,disablePast:!0,readOnly:!0,required:!0,name:"start_date"})}),(0,C.jsx)(i.Z,{sx:{width:"100%"},children:(0,C.jsx)(j.M,{sx:{width:"100%"},label:"End Date",value:B,disablePast:!0,readOnly:!0,required:!0,name:"end_date"})})]})]}),"Custom Date"===E.values.type&&(0,C.jsxs)(b._,{dateAdapter:Z.y,children:[(0,C.jsx)(l.Z,{sx:{mt:2,mb:2,fontSize:13},children:"You are required to add a start date for your schedule."}),(0,C.jsxs)(i.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,C.jsx)(i.Z,{sx:{width:"95%"},children:(0,C.jsx)(j.M,{sx:{width:"95%"},label:"Start Date",value:E.values.start_date,onChange:function(e){return L("start_date",e)},disablePast:!0,minDate:I.add(3,"days"),name:"start_date",required:!0})}),(0,C.jsx)(i.Z,{sx:{width:"100%"},children:(0,C.jsx)(j.M,{sx:{width:"100%"},label:"End Date",value:B,disablePast:!0,readOnly:!0,required:!0,name:"end_date"})})]})]}),(0,C.jsxs)(i.Z,{sx:S.buttonWrapper,children:[(0,C.jsx)(c.Z,{variant:"outlined",color:"secondary",onClick:r,size:"small",sx:S.cancel,children:"Cancel"}),(0,C.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(){return N(q())},size:"small",sx:S.next,disabled:F,children:F?(0,C.jsx)(u.Z,{size:24}):"Submit"})]})]})]})]})})})}},63845:function(e,t,r){r.r(t);var a=r(31243).Z.create();a.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",a.defaults.headers.common.Accept="application/json",a.defaults.headers.common["Content-Type"]="application/json",a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),a.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=a},20376:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(45649)),o=r(80184),i=(0,n.default)((0,o.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.Z=i},63466:function(e,t,r){r.d(t,{Z:function(){return w}});var a=r(4942),n=r(63366),o=r(87462),i=r(72791),s=r(28182),d=r(94419),l=r(14036),c=r(20890),u=r(93840),p=r(52930),h=r(66934),x=r(75878),f=r(21217);function m(e){return(0,f.Z)("MuiInputAdornment",e)}var v,b=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=r(31402),j=r(80184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],g=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["position".concat((0,l.Z)(r.position))],!0===r.disablePointerEvents&&t.disablePointerEvents,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===r.variant&&(0,a.Z)({},"&.".concat(b.positionStart,"&:not(.").concat(b.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),w=i.forwardRef((function(e,t){var r=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),a=r.children,h=r.className,x=r.component,f=void 0===x?"div":x,b=r.disablePointerEvents,w=void 0!==b&&b,D=r.disableTypography,C=void 0!==D&&D,P=r.position,S=r.variant,I=(0,n.Z)(r,y),T=(0,p.Z)()||{},k=S;S&&T.variant,T&&!k&&(k=T.variant);var R=(0,o.Z)({},r,{hiddenLabel:T.hiddenLabel,size:T.size,disablePointerEvents:w,position:P,variant:k}),F=function(e){var t=e.classes,r=e.disablePointerEvents,a=e.hiddenLabel,n=e.position,o=e.size,i=e.variant,s={root:["root",r&&"disablePointerEvents",n&&"position".concat((0,l.Z)(n)),i,a&&"hiddenLabel",o&&"size".concat((0,l.Z)(o))]};return(0,d.Z)(s,m,t)}(R);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(g,(0,o.Z)({as:f,ownerState:R,className:(0,s.Z)(F.root,h),ref:t},I,{children:"string"!==typeof a||C?(0,j.jsxs)(i.Fragment,{children:["start"===P?v||(v=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,j.jsx)(c.Z,{color:"text.secondary",children:a})}))})}))},93006:function(e,t,r){var a=r(87462),n=r(63366),o=r(72791),i=r(28182),s=r(94419),d=r(96248),l=r(66934),c=r(31402),u=r(4110),p=r(86596),h=r(77196),x=r(30829),f=r(68096),m=r(47071),v=r(58406),b=r(12022),Z=r(80184),j=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],y={standard:u.Z,filled:p.Z,outlined:h.Z},g=(0,l.ZP)(f.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),w=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiTextField"}),o=r.autoComplete,l=r.autoFocus,u=void 0!==l&&l,p=r.children,h=r.className,f=r.color,w=void 0===f?"primary":f,D=r.defaultValue,C=r.disabled,P=void 0!==C&&C,S=r.error,I=void 0!==S&&S,T=r.FormHelperTextProps,k=r.fullWidth,R=void 0!==k&&k,F=r.helperText,W=r.id,z=r.InputLabelProps,M=r.inputProps,E=r.InputProps,_=r.inputRef,L=r.label,q=r.maxRows,A=r.minRows,H=r.multiline,B=void 0!==H&&H,N=r.name,O=r.onBlur,V=r.onChange,Y=r.onFocus,U=r.placeholder,G=r.required,J=void 0!==G&&G,K=r.rows,Q=r.select,X=void 0!==Q&&Q,$=r.SelectProps,ee=r.type,te=r.value,re=r.variant,ae=void 0===re?"outlined":re,ne=(0,n.Z)(r,j),oe=(0,a.Z)({},r,{autoFocus:u,color:w,disabled:P,error:I,fullWidth:R,multiline:B,required:J,select:X,variant:ae}),ie=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},b.I,t)}(oe);var se={};"outlined"===ae&&(z&&"undefined"!==typeof z.shrink&&(se.notched=z.shrink),se.label=L),X&&($&&$.native||(se.id=void 0),se["aria-describedby"]=void 0);var de=(0,d.Z)(W),le=F&&de?"".concat(de,"-helper-text"):void 0,ce=L&&de?"".concat(de,"-label"):void 0,ue=y[ae],pe=(0,Z.jsx)(ue,(0,a.Z)({"aria-describedby":le,autoComplete:o,autoFocus:u,defaultValue:D,fullWidth:R,multiline:B,name:N,rows:K,maxRows:q,minRows:A,type:ee,value:te,id:de,inputRef:_,onBlur:O,onChange:V,onFocus:Y,placeholder:U,inputProps:M},se,E));return(0,Z.jsxs)(g,(0,a.Z)({className:(0,i.Z)(ie.root,h),disabled:P,error:I,fullWidth:R,ref:t,required:J,color:w,variant:ae,ownerState:oe},ne,{children:[null!=L&&""!==L&&(0,Z.jsx)(x.Z,(0,a.Z)({htmlFor:de,id:ce},z,{children:L})),X?(0,Z.jsx)(v.Z,(0,a.Z)({"aria-describedby":le,id:de,labelId:ce,value:te,input:pe},$,{children:p})):pe,F&&(0,Z.jsx)(m.Z,(0,a.Z)({id:le},T,{children:F}))]}))}));t.Z=w},12022:function(e,t,r){r.d(t,{I:function(){return o}});var a=r(75878),n=r(21217);function o(e){return(0,n.Z)("MuiTextField",e)}var i=(0,a.Z)("MuiTextField",["root"]);t.Z=i},5462:function(){}}]);
//# sourceMappingURL=9476.11aef574.chunk.js.map