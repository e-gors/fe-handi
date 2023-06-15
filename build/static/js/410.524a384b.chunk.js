"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[410,1343,3778,8292,3850,3845],{21343:function(e,n,t){t.r(n);var r=t(1413),o=t(70885),a=t(45987),s=t(68870),i=t(39281),l=t(79836),c=t(56890),u=t(35855),d=t(53994),m=t(53382),f=t(20068),h=t(13400),p=t(20890),g=t(67492),Z=t(61889),x=t(13239),v=t(72791),j=t(41286),b=t(27247),C=t(3746),w=t(91329),y=t(79908),P=t(80184),_=["data","columns","onChangePage","rowsPerPage","onRowsChangePage","withPagination","withNumber","onDelete","onEdit","onComplete","onRevoked","onWithdrawn","onCancel","onView","loading"];function E(e){var n=e.data,t=void 0===n?[]:n,E=e.columns,S=void 0===E?[]:E,k=e.onChangePage,R=(e.rowsPerPage,e.onRowsChangePage),B=e.withPagination,T=void 0!==B&&B,A=e.withNumber,D=e.onDelete,z=e.onEdit,O=e.onComplete,W=e.onRevoked,I=(e.onWithdrawn,e.onCancel,e.onView),N=e.loading,F=(0,a.Z)(e,_),H=(0,v.useState)({}),L=(0,o.Z)(H,2),U=(L[0],L[1]),V=(0,r.Z)({rowsPerPageOptions:[10,20,50,100,250],component:"div",count:1,rowsPerPage:10,page:1},F);return(0,P.jsxs)(s.Z,(0,r.Z)((0,r.Z)({},F),{},{sx:{border:"1px solid #BEBEBE",boxShadow:10},children:[(0,P.jsxs)(i.Z,{children:[(0,P.jsxs)(l.Z,{stickyHeader:!0,children:[(0,P.jsx)(c.Z,{sx:{"& th":{color:"black",backgroundColor:"#E3E4E9",fontWeight:"bold"}},children:(0,P.jsxs)(u.Z,{children:[(D||O||z||I||W||A)&&(0,P.jsx)(d.Z,{size:"small",align:"center",children:"#"}),S.map((function(e,n){return(0,P.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap"},children:e.label},n)}))]})}),(0,P.jsx)(m.Z,{children:!N&&t.map((function(e,n){return(0,P.jsxs)(u.Z,{children:[(D||z||I||O||W||A)&&(0,P.jsxs)(d.Z,{size:"small",align:"center",sx:{whiteSpace:"noWrap"},children:[A&&n+1,I&&(0,P.jsx)(f.Z,{title:"View",arrow:!0,children:(0,P.jsx)(h.Z,{size:"small",color:"primary",onClick:function(){return function(e){U(e),I&&I(e)}(e)},children:(0,P.jsx)(C.Z,{})})}),O&&(0,P.jsx)(f.Z,{title:"Complete contract?",arrow:!0,children:(0,P.jsx)(h.Z,{size:"small",color:"primary",onClick:function(){return function(e){U(e),O&&O(e)}(e)},children:(0,P.jsx)(y.Z,{})})}),W&&(0,P.jsx)(f.Z,{title:"Cancel",arrow:!0,children:(0,P.jsx)(h.Z,{size:"small",sx:{color:"gray"},onClick:function(){return function(e){U(e),W&&W(e)}(e)},children:(0,P.jsx)(w.Z,{})})}),z&&(0,P.jsx)(f.Z,{title:"Edit",arrow:!0,children:(0,P.jsx)(h.Z,{size:"small",sx:{color:"#00c853"},onClick:function(){return function(e){U(e),z&&z(e)}(e)},children:(0,P.jsx)(j.Z,{})})}),D&&(0,P.jsx)(f.Z,{title:"Delete",arrow:!0,children:(0,P.jsx)(h.Z,{size:"small",color:"error",onClick:function(){return function(e){U(e),D&&D(e)}(e)},children:(0,P.jsx)(b.Z,{})})})]}),S.map((function(t,r){var o=function(e,n){var t=n.name&&n.name.split(".")||[];if(0===t.length)return"";var r=e;return t.forEach((function(e){r=void 0!==r[e]&&null!==r[e]?r[e]:""})),Array.isArray(r)&&(r=r.join(", ")),r}(e,t),a="status"===t.name,s="inherit";return a&&("pending"===o?s="red":"accepted"===o||"in progress"===o||"posted"===o?s="green":"completed"===o?s="blue":"declined"===o?s="orange":"withdrawn"===o&&(s="gray")),(0,P.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap",fontWeight:a?"bold":"normal",color:s},children:t.customBodyRender?t.customBodyRender(o,e,r,n):o},"".concat(r,"-").concat(t.name))}))]},n)}))})]}),!N&&0===t.length&&(0,P.jsx)(p.Z,{align:"center",children:"No item(s) at the moment"})]}),T&&(0,P.jsx)(g.Z,(0,r.Z)({onPageChange:function(e,n){k&&k(n)},onRowsPerPageChange:function(e){R&&R(e.target.value)}},V)),N&&(0,P.jsx)(Z.ZP,{container:!0,justifyContent:"center",children:(0,P.jsx)(x.Z,{})})]}))}n.default=(0,v.memo)(E)},64253:function(e,n,t){t.r(n);var r=t(1413),o=t(45987),a=t(93006),s=(t(72791),t(80184)),i=["errors","name","customError"];n.default=function(e){var n=e.errors,t=e.name,l=e.customError,c=(0,o.Z)(e,i),u=!1,d="";l&&(u=!0,d=l),n&&(u=n&&n.has(t)||!1,d=n&&n.first(t)||"");var m=(0,r.Z)((0,r.Z)({error:u,name:t,helperText:d},c),{},{value:c.value||""});return(0,s.jsx)(a.Z,(0,r.Z)({size:"small",variant:"outlined"},m))}},53778:function(e,n,t){t.r(n);var r=t(1413),o=t(45987),a=(t(72791),t(68096)),s=t(30829),i=t(58406),l=t(77196),c=t(23786),u=t(47071),d=t(80184),m=["label","errors","options","categories","subCategories","customError"];n.default=function(e){var n=e.label,t=e.errors,f=e.options,h=void 0===f?[]:f,p=e.categories,g=void 0===p?[]:p,Z=e.subCategories,x=void 0===Z?[]:Z,v=e.customError,j=(0,o.Z)(e,m),b=!1,C="";v&&(b=v.error||!1,C=v.message||""),t&&(b=t&&t.has(e.name)||!1,C=t&&t.first(e.name)||"");var w=(0,r.Z)({margin:"dense",error:b},j);return(0,d.jsxs)(a.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,d.jsx)(s.Z,{id:"dropdown-label",children:n}),(0,d.jsxs)(i.Z,(0,r.Z)((0,r.Z)({labelId:"dropdown-label",input:(0,d.jsx)(l.Z,{label:n})},w),{},{children:[h.map((function(e,n){return(0,d.jsx)(c.Z,{value:e,children:e},n)})),g.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)})),x.map((function(e){return e.children.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)}))}))]})),(0,d.jsx)(u.Z,{error:!0,children:C})]})}},8292:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(75985);function o(e,n,t){return"success"===e?r.Am.success(n,t):r.Am.error(n,t)}},49293:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=t(75985),o=(t(5462),t(80184));function a(){return(0,o.jsx)(r.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,n,t){t.r(n),t.d(n,{options:function(){return r}});var r={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},60410:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(4942),o=t(1413),a=t(70885),s=t(72791),i=t(68870),l=t(63466),c=t(36151),u=t(80911),d=t(20890),m=t(94721),f=t(23786),h=t(63845),p=t(21343),g=t(64253),Z=t(5403),x=t(60585),v=t(53778),j=t(41143),b=t(8292),C=t(33850),w=t(59434),y=t(3437),P=t(49293),_=t(80184),E=["pending","in progress","feedback pending","completed","closed"],S=["Ascending","Descending"],k=["Ascending","Descending"],R=[{name:"bid",label:"Contractor",customBodyRender:function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.full_name}},{name:"post.user",label:"Client",customBodyRender:function(e){return e.full_name}},{name:"post",label:"Contract Name",customBodyRender:function(e){return null===e||void 0===e?void 0:e.title}},{name:"post",label:"Type",customBodyRender:function(e){return null===e||void 0===e?void 0:e.job_type}},{name:"start_date",label:"Start Date"},{name:"end_date",label:"End Date"},{name:"post",label:"Rate/Budget",customBodyRender:function(e){return e.rate?e.rate:e.budget}},{name:"status",label:"Status"}];function B(e){var n=e.type,t=(0,w.I0)(),B=s.useState(!1),T=(0,a.Z)(B,2),A=T[0],D=T[1],z=s.useState({}),O=(0,a.Z)(z,2),W=O[0],I=O[1],N=s.useState(!1),F=(0,a.Z)(N,2),H=F[0],L=F[1],U=s.useState(!1),V=(0,a.Z)(U,2),K=V[0],Y=V[1],M=s.useState(null),q=(0,a.Z)(M,2),G=q[0],J=q[1],Q=s.useState({data:[],meta:{}}),X=(0,a.Z)(Q,2),$=X[0],ee=X[1],ne=s.useState({limit:10,page:1}),te=(0,a.Z)(ne,2),re=te[0],oe=te[1],ae=s.useState({values:{search:"",status:"",order_by_date:"",order_by_rate:"",type:""}}),se=(0,a.Z)(ae,2),ie=se[0],le=se[1];s.useEffect((function(){le((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},{type:n})})}))}),[n]),s.useEffect((function(){oe((function(e){return{limit:e.limit,page:1}})),ue(ie.values)}),[ie.values]);var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Y(!0),h.default.get("/contracts",{params:(0,o.Z)((0,o.Z)({},re),e)}).then((function(e){e.data.data&&ee({data:e.data.data,meta:e.data.meta}),Y(!1)})).catch((function(e){Y(!1),console.log(e.message)}))},ue=s.useCallback(function(e){var n;return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=this;n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(a,r)}),700)}}(ce),[]),de=function(e){var n=e.target.name,t=e.target.value;le((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,r.Z)({},n,t))})}))};return(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(P.default,{}),(0,_.jsx)(j.default,{title:"Complete Contract?",message:"You are about to change the status of your contract from 'in progress' to 'complete'",loading:H,open:A,onClose:function(){return D(!1)},onConfirm:function(){L(!0),h.default.post("/contract/complete/".concat(W.id)).then((function(e){200===e.data.code?(t((0,y.updateUser)(e.data.user)),(0,b.default)("success",e.data.message,C.options),D(!1)):(0,b.default)("error",e.data.message,C.options),L(!1)})).catch((function(e){L(!1),(0,b.default)("error",e.message,C.options)}))}}),(0,_.jsx)(i.Z,{sx:{width:"100%",backgroundColor:"#EBEBEB",p:2,borderRadius:2,mb:2},children:(0,_.jsxs)("form",{style:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(g.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search by contractors",onChange:de,value:ie.values.search,InputProps:{startAdornment:(0,_.jsx)(l.Z,{position:"start",children:(0,_.jsx)(Z.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,_.jsxs)(c.Z,{variant:"outlined",color:"primary",sx:{ml:1,backgroundColor:"white"},onClick:function(e){J(e.currentTarget)},children:[(0,_.jsx)(x.Z,{})," Filter"]}),(0,_.jsxs)(u.Z,{anchorEl:G,open:Boolean(G),onClose:function(){J(null)},PaperProps:{style:{minWidth:300,maxHeight:400,overFlowY:"scroll"}},children:[(0,_.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},children:[(0,_.jsx)(d.Z,{children:"Filter"}),(0,_.jsx)(c.Z,{onClick:function(){le({values:{search:"",status:"",order_by_date:"",order_by_rate:"",type:"all"}})},children:"Clear filter"})]}),(0,_.jsx)(m.Z,{}),(0,_.jsx)(f.Z,{children:(0,_.jsx)(v.default,{name:"status",label:"Status",value:ie.values.status,onChange:de,options:E})}),(0,_.jsx)(f.Z,{children:(0,_.jsx)(v.default,{name:"order_by_date",label:"Order By Date",value:ie.values.order_by_date,onChange:de,options:k})}),(0,_.jsx)(f.Z,{children:(0,_.jsx)(v.default,{name:"order_by_rate",label:"Order By Rate",value:ie.values.order_by_rate,onChange:de,options:S})}),(0,_.jsx)(c.Z,{fullWidth:!0,variant:"contained",color:"primary",size:"small",sx:{mt:1},children:"Search"})]})]})}),(0,_.jsx)(p.default,{withPagination:!0,onComplete:function(e){I(e),D(!0)},onEdit:function(e){console.log(e)},onDelete:function(e){console.log(e)},loading:K,data:$.data,columns:R,rowsPerPage:ie.values.limit,count:$.meta.total||0,page:$.meta.current_page-1||0,onChangePage:function(e,n){re.page!==n&&(Y(!0),oe((function(e){return{limit:e.limit,page:n}})),ue({page:n}))},onRowsChangePage:function(e){ce({limit:e}),function(e,n){le((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,r.Z)({},e,n))}))}("limit",e)}})]})}},63845:function(e,n,t){t.r(n);var r=t(31243).Z.create();r.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,r.defaults.headers.common.Accept="application/json",r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),r.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),n.default=r}}]);
//# sourceMappingURL=410.524a384b.chunk.js.map