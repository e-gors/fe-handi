"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[1434,4253,8292,3850,3845],{64253:function(e,r,o){o.r(r);var t=o(1413),n=o(45987),a=o(93006),i=(o(72791),o(80184)),s=["errors","name","customError"];r.default=function(e){var r=e.errors,o=e.name,l=e.customError,u=(0,n.Z)(e,s),d=!1,c="";l&&(d=!0,c=l),r&&(d=r&&r.has(o)||!1,c=r&&r.first(o)||"");var p=(0,t.Z)((0,t.Z)({error:d,name:o,helperText:c},u),{},{value:u.value||""});return(0,i.jsx)(a.Z,(0,t.Z)({size:"small",variant:"outlined"},p))}},8292:function(e,r,o){o.r(r),o.d(r,{default:function(){return n}});var t=o(75985);function n(e,r,o){return"success"===e?t.Am.success(r,o):t.Am.error(r,o)}},49293:function(e,r,o){o.r(r),o.d(r,{default:function(){return a}});var t=o(75985),n=(o(5462),o(80184));function a(){return(0,n.jsx)(t.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,o){o.r(r),o.d(r,{options:function(){return t}});var t={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},61434:function(e,r,o){o.r(r);var t=o(70885),n=o(68870),a=o(47071),i=o(36151),s=o(13239),l=o(72791),u=(o(64253),o(59434)),d=o(63845),c=o(8292),p=o(33850),f=o(49293),h=o(3437),m=o(66770),v=o.n(m),Z=(o(86009),o(80184));r.default=function(e){var r=e.handleClose,o=e.onConfirm,m=(0,u.I0)(),b=(0,u.v9)((function(e){return e.users.user})).profile,x=l.useState(null),g=(0,t.Z)(x,2),w=g[0],j=g[1],k=l.useState(),C=(0,t.Z)(k,2),F=C[0],P=C[1],y=l.useState(!1),R=(0,t.Z)(y,2),T=R[0],I=R[1];return l.useEffect((function(){b[0]&&P(b[0].background)}),[]),(0,Z.jsxs)(n.Z,{children:[(0,Z.jsx)(f.default,{}),(0,Z.jsx)(n.Z,{children:(0,Z.jsxs)("form",{encType:"multipart/form-data",children:[(0,Z.jsxs)(n.Z,{sx:{".ql-editor":{height:200}},children:[(0,Z.jsx)(v(),{theme:"snow",name:"job_description",value:F,onChange:function(e,r,o,t){P(e),e.length<=51?j("Background characters must be at least 50 or more."):j(null)},placeholder:"Describe yourself in words so that workers will be able to know your worth.",style:{backgroundColor:"white"}}),w&&(0,Z.jsx)(a.Z,{error:!0,children:w})]}),(0,Z.jsxs)(n.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,Z.jsx)(i.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,Z.jsx)(i.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){F&&0!==F.trim().length?w?(0,c.default)("error",w,p.options):function(){I(!0);var e=new FormData;e.append("background",F),d.default.post("/update/background",e).then((function(e){200===e.data.code?(I(!1),m((0,h.updateUser)(e.data.user)),(0,c.default)("success",e.data.message,p.options),o()):(0,c.default)("error",e.data.message,p.options)})).catch((function(e){I(!1),(0,c.default)("error",e.message,p.options)}))}():j("Job Description is required.")},disabled:T,children:T?(0,Z.jsx)(s.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})})]})}},63845:function(e,r,o){o.r(r);var t=o(31243).Z.create();t.defaults.baseURL="http://api-handiworks.technopreneurship.store/api",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t},93006:function(e,r,o){var t=o(87462),n=o(63366),a=o(72791),i=o(28182),s=o(94419),l=o(96248),u=o(66934),d=o(31402),c=o(4110),p=o(86596),f=o(77196),h=o(30829),m=o(68096),v=o(47071),Z=o(58406),b=o(12022),x=o(80184),g=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],w={standard:c.Z,filled:p.Z,outlined:f.Z},j=(0,u.ZP)(m.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),k=a.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiTextField"}),a=o.autoComplete,u=o.autoFocus,c=void 0!==u&&u,p=o.children,f=o.className,m=o.color,k=void 0===m?"primary":m,C=o.defaultValue,F=o.disabled,P=void 0!==F&&F,y=o.error,R=void 0!==y&&y,T=o.FormHelperTextProps,I=o.fullWidth,S=void 0!==I&&I,B=o.helperText,q=o.id,z=o.InputLabelProps,W=o.inputProps,A=o.InputProps,D=o.inputRef,E=o.label,L=o.maxRows,M=o.minRows,N=o.multiline,O=void 0!==N&&N,H=o.name,V=o.onBlur,_=o.onChange,U=o.onFocus,J=o.placeholder,G=o.required,K=void 0!==G&&G,Q=o.rows,X=o.select,Y=void 0!==X&&X,$=o.SelectProps,ee=o.type,re=o.value,oe=o.variant,te=void 0===oe?"outlined":oe,ne=(0,n.Z)(o,g),ae=(0,t.Z)({},o,{autoFocus:c,color:k,disabled:P,error:R,fullWidth:S,multiline:O,required:K,select:Y,variant:te}),ie=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},b.I,r)}(ae);var se={};"outlined"===te&&(z&&"undefined"!==typeof z.shrink&&(se.notched=z.shrink),se.label=E),Y&&($&&$.native||(se.id=void 0),se["aria-describedby"]=void 0);var le=(0,l.Z)(q),ue=B&&le?"".concat(le,"-helper-text"):void 0,de=E&&le?"".concat(le,"-label"):void 0,ce=w[te],pe=(0,x.jsx)(ce,(0,t.Z)({"aria-describedby":ue,autoComplete:a,autoFocus:c,defaultValue:C,fullWidth:S,multiline:O,name:H,rows:Q,maxRows:L,minRows:M,type:ee,value:re,id:le,inputRef:D,onBlur:V,onChange:_,onFocus:U,placeholder:J,inputProps:W},se,A));return(0,x.jsxs)(j,(0,t.Z)({className:(0,i.Z)(ie.root,f),disabled:P,error:R,fullWidth:S,ref:r,required:K,color:k,variant:te,ownerState:ae},ne,{children:[null!=E&&""!==E&&(0,x.jsx)(h.Z,(0,t.Z)({htmlFor:le,id:de},z,{children:E})),Y?(0,x.jsx)(Z.Z,(0,t.Z)({"aria-describedby":ue,id:le,labelId:de,value:re,input:pe},$,{children:p})):pe,B&&(0,x.jsx)(v.Z,(0,t.Z)({id:ue},T,{children:B}))]}))}));r.Z=k},12022:function(e,r,o){o.d(r,{I:function(){return a}});var t=o(75878),n=o(21217);function a(e){return(0,n.Z)("MuiTextField",e)}var i=(0,t.Z)("MuiTextField",["root"]);r.Z=i}}]);
//# sourceMappingURL=1434.3943b65a.chunk.js.map