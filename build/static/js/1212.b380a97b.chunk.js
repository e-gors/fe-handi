"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[1212,1343,4253,3778,3845],{21343:function(e,n,r){r.r(n);var t=r(1413),o=r(70885),a=r(45987),i=r(68870),l=r(39281),s=r(79836),c=r(56890),d=r(35855),u=r(53994),p=r(53382),h=r(20068),m=r(13400),f=r(20890),v=r(67492),Z=r(61889),x=r(13239),g=r(72791),b=r(41286),j=r(27247),w=r(3746),P=r(91329),y=r(79908),C=r(80184),E=["data","columns","onChangePage","rowsPerPage","onRowsChangePage","withPagination","withNumber","onDelete","onEdit","onComplete","onRevoked","onWithdrawn","onCancel","onView","loading"];function S(e){var n=e.data,r=void 0===n?[]:n,S=e.columns,R=void 0===S?[]:S,k=e.onChangePage,z=(e.rowsPerPage,e.onRowsChangePage),T=e.withPagination,_=void 0!==T&&T,I=e.withNumber,B=e.onDelete,F=e.onEdit,W=e.onComplete,A=e.onRevoked,M=(e.onWithdrawn,e.onCancel,e.onView),L=e.loading,N=(0,a.Z)(e,E),V=(0,g.useState)({}),D=(0,o.Z)(V,2),H=(D[0],D[1]),q=(0,t.Z)({rowsPerPageOptions:[10,20,50,100,250],component:"div",count:1,rowsPerPage:10,page:1},N);return(0,C.jsxs)(i.Z,(0,t.Z)((0,t.Z)({},N),{},{sx:{border:"1px solid #BEBEBE",boxShadow:10},children:[(0,C.jsxs)(l.Z,{children:[(0,C.jsxs)(s.Z,{stickyHeader:!0,children:[(0,C.jsx)(c.Z,{sx:{"& th":{color:"black",backgroundColor:"#E3E4E9",fontWeight:"bold"}},children:(0,C.jsxs)(d.Z,{children:[(B||W||F||M||A||I)&&(0,C.jsx)(u.Z,{size:"small",align:"center",children:"#"}),R.map((function(e,n){return(0,C.jsx)(u.Z,{size:"small",sx:{whiteSpace:"noWrap"},children:e.label},n)}))]})}),(0,C.jsx)(p.Z,{children:!L&&r.map((function(e,n){return(0,C.jsxs)(d.Z,{children:[(B||F||M||W||A||I)&&(0,C.jsxs)(u.Z,{size:"small",align:"center",sx:{whiteSpace:"noWrap"},children:[I&&n+1,M&&(0,C.jsx)(h.Z,{title:"View",arrow:!0,children:(0,C.jsx)(m.Z,{size:"small",color:"primary",onClick:function(){return function(e){H(e),M&&M(e)}(e)},children:(0,C.jsx)(w.Z,{})})}),W&&(0,C.jsx)(h.Z,{title:"Complete contract?",arrow:!0,children:(0,C.jsx)(m.Z,{size:"small",color:"primary",onClick:function(){return function(e){H(e),W&&W(e)}(e)},children:(0,C.jsx)(y.Z,{})})}),A&&(0,C.jsx)(h.Z,{title:"Cancel",arrow:!0,children:(0,C.jsx)(m.Z,{size:"small",sx:{color:"gray"},onClick:function(){return function(e){H(e),A&&A(e)}(e)},children:(0,C.jsx)(P.Z,{})})}),F&&(0,C.jsx)(h.Z,{title:"Edit",arrow:!0,children:(0,C.jsx)(m.Z,{size:"small",sx:{color:"#00c853"},onClick:function(){return function(e){H(e),F&&F(e)}(e)},children:(0,C.jsx)(b.Z,{})})}),B&&(0,C.jsx)(h.Z,{title:"Delete",arrow:!0,children:(0,C.jsx)(m.Z,{size:"small",color:"error",onClick:function(){return function(e){H(e),B&&B(e)}(e)},children:(0,C.jsx)(j.Z,{})})})]}),R.map((function(r,t){var o=function(e,n){var r=n.name&&n.name.split(".")||[];if(0===r.length)return"";var t=e;return r.forEach((function(e){t=void 0!==t[e]&&null!==t[e]?t[e]:""})),Array.isArray(t)&&(t=t.join(", ")),t}(e,r),a="status"===r.name,i="inherit";return a&&("pending"===o?i="red":"accepted"===o||"in progress"===o||"posted"===o?i="green":"completed"===o?i="blue":"declined"===o?i="orange":"withdrawn"===o&&(i="gray")),(0,C.jsx)(u.Z,{size:"small",sx:{whiteSpace:"noWrap",fontWeight:a?"bold":"normal",color:i},children:r.customBodyRender?r.customBodyRender(o,e,t,n):o},"".concat(t,"-").concat(r.name))}))]},n)}))})]}),!L&&0===r.length&&(0,C.jsx)(f.Z,{align:"center",children:"No item(s) at the moment"})]}),_&&(0,C.jsx)(v.Z,(0,t.Z)({onPageChange:function(e,n){k&&k(n)},onRowsPerPageChange:function(e){z&&z(e.target.value)}},q)),L&&(0,C.jsx)(Z.ZP,{container:!0,justifyContent:"center",children:(0,C.jsx)(x.Z,{})})]}))}n.default=(0,g.memo)(S)},64253:function(e,n,r){r.r(n);var t=r(1413),o=r(45987),a=r(93006),i=(r(72791),r(80184)),l=["errors","name","customError"];n.default=function(e){var n=e.errors,r=e.name,s=e.customError,c=(0,o.Z)(e,l),d=!1,u="";s&&(d=!0,u=s),n&&(d=n&&n.has(r)||!1,u=n&&n.first(r)||"");var p=(0,t.Z)((0,t.Z)({error:d,name:r,helperText:u},c),{},{value:c.value||""});return(0,i.jsx)(a.Z,(0,t.Z)({size:"small",variant:"outlined"},p))}},53778:function(e,n,r){r.r(n);var t=r(1413),o=r(45987),a=(r(72791),r(68096)),i=r(30829),l=r(58406),s=r(77196),c=r(23786),d=r(47071),u=r(80184),p=["label","errors","options","categories","subCategories","customError"];n.default=function(e){var n=e.label,r=e.errors,h=e.options,m=void 0===h?[]:h,f=e.categories,v=void 0===f?[]:f,Z=e.subCategories,x=void 0===Z?[]:Z,g=e.customError,b=(0,o.Z)(e,p),j=!1,w="";g&&(j=g.error||!1,w=g.message||""),r&&(j=r&&r.has(e.name)||!1,w=r&&r.first(e.name)||"");var P=(0,t.Z)({margin:"dense",error:j},b);return(0,u.jsxs)(a.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,u.jsx)(i.Z,{id:"dropdown-label",children:n}),(0,u.jsxs)(l.Z,(0,t.Z)((0,t.Z)({labelId:"dropdown-label",input:(0,u.jsx)(s.Z,{label:n})},P),{},{children:[m.map((function(e,n){return(0,u.jsx)(c.Z,{value:e,children:e},n)})),v.map((function(e,n){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},n)})),x.map((function(e){return e.children.map((function(e,n){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},n)}))}))]})),(0,u.jsx)(d.Z,{error:!0,children:w})]})}},91212:function(e,n,r){r.r(n);var t=r(4942),o=r(1413),a=r(70885),i=r(72791),l=r(68870),s=r(20890),c=r(63466),d=r(36151),u=r(80911),p=r(94721),h=r(23786),m=r(64253),f=r(5403),v=r(60585),Z=r(53778),x=r(64880),g=r(63845),b=r(21343),j=r(80184),w=["Pending","Accepted","Declined","Withdrawn"],P=["asc","desc"],y=["asc","desc"],C={wrapper:{mt:8,p:2},filterWrapper:{width:"100%",backgroundColor:"#EBEBEB",p:2,borderRadius:2,mb:2},main:{display:"flex",alignItems:"center"},filter:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},articleIcon:{width:{xs:100,md:120},height:{xs:100,md:120},color:"#BEBEBE",boxShadow:20,borderRadius:3}},E=[{name:"post.title",label:"Job Title"},{name:"post.category",label:"Category"},{name:"post.position",label:"Position"},{name:"post.job_type",label:"Type"},{name:"rate",label:"My Rate"},{name:"status",label:"Status"}];n.default=function(){(0,x.k6)();var e=i.useState(!1),n=(0,a.Z)(e,2),r=n[0],S=n[1],R=i.useState(null),k=(0,a.Z)(R,2),z=k[0],T=k[1],_=i.useState({data:[],meta:{}}),I=(0,a.Z)(_,2),B=I[0],F=I[1],W=i.useState({limit:10,page:1}),A=(0,a.Z)(W,2),M=A[0],L=A[1],N=i.useState({values:{search:"",status:"",order_by_date:"",order_by_rate:""}}),V=(0,a.Z)(N,2),D=V[0],H=V[1];i.useEffect((function(){L((function(e){return{limit:e.limit,page:1}})),O(D.values)}),[D.values]);var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};S(!0),g.default.get("/user/proposals",{params:(0,o.Z)((0,o.Z)({},M),e)}).then((function(e){e.data.data&&F({data:e.data.data,meta:e.data.meta}),S(!1)}))},O=i.useCallback(function(e){var n;return function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var a=this;n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(a,t)}),700)}}(q),[]),J=function(e){var n=e.target.name,r=e.target.value;H((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,t.Z)({},n,r))})}))};return(0,j.jsx)(l.Z,{sx:C.wrapper,children:(0,j.jsxs)(l.Z,{children:[(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(s.Z,{sx:{fontSize:{xs:20,md:24},m:2},children:"My Proposals"}),(0,j.jsx)(l.Z,{sx:C.filterWrapper,children:(0,j.jsxs)(l.Z,{sx:C.main,children:[(0,j.jsx)(m.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search by Job Categories",onChange:J,value:D.values.search,InputProps:{startAdornment:(0,j.jsx)(c.Z,{position:"start",children:(0,j.jsx)(f.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,j.jsxs)(d.Z,{variant:"outlined",color:"primary",sx:{ml:1,backgroundColor:"white"},onClick:function(e){T(e.currentTarget)},children:[(0,j.jsx)(v.Z,{})," Filter"]}),(0,j.jsxs)(u.Z,{anchorEl:z,open:Boolean(z),onClose:function(){T(null)},PaperProps:{style:{minWidth:300}},children:[(0,j.jsxs)(l.Z,{sx:C.filter,children:[(0,j.jsx)(s.Z,{children:"Filter"}),(0,j.jsx)(d.Z,{onClick:function(){H({values:{search:"",status:"",order_by_date:"",order_by_rate:""}})},children:"Clear filter"})]}),(0,j.jsx)(p.Z,{}),(0,j.jsx)(h.Z,{children:(0,j.jsx)(Z.default,{name:"status",label:"Status",value:D.values.status,onChange:J,options:w})}),(0,j.jsx)(h.Z,{children:(0,j.jsx)(Z.default,{name:"order_by_date",label:"Order By Date",value:D.values.order_by_date,onChange:J,options:y})}),(0,j.jsx)(h.Z,{children:(0,j.jsx)(Z.default,{name:"order_by_rate",label:"Order By Rate",value:D.values.order_by_rate,onChange:J,options:P})})]})]})})]}),(0,j.jsx)(b.default,{withPagination:!0,onView:function(e){console.log(e)},onRevoked:function(e){console.log(e)},onEdit:function(e){console.log(e)},onDelete:function(e){console.log(e)},loading:r,data:B.data,columns:E,rowsPerPage:D.values.limit,count:B.meta.total||0,page:B.meta.current_page-1||0,onChangePage:function(e){q({page:e+1})},onRowsChangePage:function(e){q({limit:e}),function(e,n){L((function(r){return(0,o.Z)((0,o.Z)({},r),{},(0,t.Z)({},e,n))}))}("limit",e)}})]})})}},63845:function(e,n,r){r.r(n);var t=r(31243).Z.create();t.defaults.baseURL="http://api-handiworks.technopreneurship.store/api/",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),n.default=t},60585:function(e,n,r){var t=r(64836);n.Z=void 0;var o=t(r(45649)),a=r(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");n.Z=i},5403:function(e,n,r){var t=r(64836);n.Z=void 0;var o=t(r(45649)),a=r(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=i},63466:function(e,n,r){r.d(n,{Z:function(){return P}});var t=r(4942),o=r(63366),a=r(87462),i=r(72791),l=r(28182),s=r(94419),c=r(14036),d=r(20890),u=r(93840),p=r(52930),h=r(66934),m=r(75878),f=r(21217);function v(e){return(0,f.Z)("MuiInputAdornment",e)}var Z,x=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=r(31402),b=r(80184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,c.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,t.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),P=i.forwardRef((function(e,n){var r=(0,g.Z)({props:e,name:"MuiInputAdornment"}),t=r.children,h=r.className,m=r.component,f=void 0===m?"div":m,x=r.disablePointerEvents,P=void 0!==x&&x,y=r.disableTypography,C=void 0!==y&&y,E=r.position,S=r.variant,R=(0,o.Z)(r,j),k=(0,p.Z)()||{},z=S;S&&k.variant,k&&!z&&(z=k.variant);var T=(0,a.Z)({},r,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:P,position:E,variant:z}),_=function(e){var n=e.classes,r=e.disablePointerEvents,t=e.hiddenLabel,o=e.position,a=e.size,i=e.variant,l={root:["root",r&&"disablePointerEvents",o&&"position".concat((0,c.Z)(o)),i,t&&"hiddenLabel",a&&"size".concat((0,c.Z)(a))]};return(0,s.Z)(l,v,n)}(T);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(w,(0,a.Z)({as:f,ownerState:T,className:(0,l.Z)(_.root,h),ref:n},R,{children:"string"!==typeof t||C?(0,b.jsxs)(i.Fragment,{children:["start"===E?Z||(Z=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:t})}))})}))},93006:function(e,n,r){var t=r(87462),o=r(63366),a=r(72791),i=r(28182),l=r(94419),s=r(96248),c=r(66934),d=r(31402),u=r(4110),p=r(86596),h=r(77196),m=r(30829),f=r(68096),v=r(47071),Z=r(58406),x=r(12022),g=r(80184),b=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],j={standard:u.Z,filled:p.Z,outlined:h.Z},w=(0,c.ZP)(f.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),P=a.forwardRef((function(e,n){var r=(0,d.Z)({props:e,name:"MuiTextField"}),a=r.autoComplete,c=r.autoFocus,u=void 0!==c&&c,p=r.children,h=r.className,f=r.color,P=void 0===f?"primary":f,y=r.defaultValue,C=r.disabled,E=void 0!==C&&C,S=r.error,R=void 0!==S&&S,k=r.FormHelperTextProps,z=r.fullWidth,T=void 0!==z&&z,_=r.helperText,I=r.id,B=r.InputLabelProps,F=r.inputProps,W=r.InputProps,A=r.inputRef,M=r.label,L=r.maxRows,N=r.minRows,V=r.multiline,D=void 0!==V&&V,H=r.name,q=r.onBlur,O=r.onChange,J=r.onFocus,U=r.placeholder,G=r.required,K=void 0!==G&&G,Q=r.rows,X=r.select,Y=void 0!==X&&X,$=r.SelectProps,ee=r.type,ne=r.value,re=r.variant,te=void 0===re?"outlined":re,oe=(0,o.Z)(r,b),ae=(0,t.Z)({},r,{autoFocus:u,color:P,disabled:E,error:R,fullWidth:T,multiline:D,required:K,select:Y,variant:te}),ie=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},x.I,n)}(ae);var le={};"outlined"===te&&(B&&"undefined"!==typeof B.shrink&&(le.notched=B.shrink),le.label=M),Y&&($&&$.native||(le.id=void 0),le["aria-describedby"]=void 0);var se=(0,s.Z)(I),ce=_&&se?"".concat(se,"-helper-text"):void 0,de=M&&se?"".concat(se,"-label"):void 0,ue=j[te],pe=(0,g.jsx)(ue,(0,t.Z)({"aria-describedby":ce,autoComplete:a,autoFocus:u,defaultValue:y,fullWidth:T,multiline:D,name:H,rows:Q,maxRows:L,minRows:N,type:ee,value:ne,id:se,inputRef:A,onBlur:q,onChange:O,onFocus:J,placeholder:U,inputProps:F},le,W));return(0,g.jsxs)(w,(0,t.Z)({className:(0,i.Z)(ie.root,h),disabled:E,error:R,fullWidth:T,ref:n,required:K,color:P,variant:te,ownerState:ae},oe,{children:[null!=M&&""!==M&&(0,g.jsx)(m.Z,(0,t.Z)({htmlFor:se,id:de},B,{children:M})),Y?(0,g.jsx)(Z.Z,(0,t.Z)({"aria-describedby":ce,id:se,labelId:de,value:ne,input:pe},$,{children:p})):pe,_&&(0,g.jsx)(v.Z,(0,t.Z)({id:ce},k,{children:_}))]}))}));n.Z=P},12022:function(e,n,r){r.d(n,{I:function(){return a}});var t=r(75878),o=r(21217);function a(e){return(0,o.Z)("MuiTextField",e)}var i=(0,t.Z)("MuiTextField",["root"]);n.Z=i}}]);
//# sourceMappingURL=1212.b380a97b.chunk.js.map