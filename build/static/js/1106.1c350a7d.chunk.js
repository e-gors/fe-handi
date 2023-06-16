"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[1106,1343,3778,3845],{21343:function(e,n,r){r.r(n);var t=r(1413),a=r(70885),o=r(45987),s=r(68870),i=r(39281),l=r(79836),c=r(56890),u=r(35855),d=r(53994),h=r(53382),m=r(20068),f=r(13400),x=r(20890),Z=r(67492),g=r(61889),p=r(13239),j=r(72791),v=r(41286),w=r(27247),b=r(3746),C=r(91329),y=r(79908),E=r(80184),P=["data","columns","onChangePage","rowsPerPage","onRowsChangePage","withPagination","withNumber","onDelete","onEdit","onComplete","onRevoked","onWithdrawn","onCancel","onView","loading"];function k(e){var n=e.data,r=void 0===n?[]:n,k=e.columns,S=void 0===k?[]:k,_=e.onChangePage,B=(e.rowsPerPage,e.onRowsChangePage),R=e.withPagination,z=void 0!==R&&R,A=e.withNumber,N=e.onDelete,W=e.onEdit,D=e.onComplete,O=e.onRevoked,T=(e.onWithdrawn,e.onCancel,e.onView),I=e.loading,F=(0,o.Z)(e,P),V=(0,j.useState)({}),H=(0,a.Z)(V,2),J=(H[0],H[1]),L=(0,t.Z)({rowsPerPageOptions:[10,20,50,100,250],component:"div",count:1,rowsPerPage:10,page:1},F);return(0,E.jsxs)(s.Z,(0,t.Z)((0,t.Z)({},F),{},{sx:{border:"1px solid #BEBEBE",boxShadow:10},children:[(0,E.jsxs)(i.Z,{children:[(0,E.jsxs)(l.Z,{stickyHeader:!0,children:[(0,E.jsx)(c.Z,{sx:{"& th":{color:"black",backgroundColor:"#E3E4E9",fontWeight:"bold"}},children:(0,E.jsxs)(u.Z,{children:[(N||D||W||T||O||A)&&(0,E.jsx)(d.Z,{size:"small",align:"center",children:"#"}),S.map((function(e,n){return(0,E.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap"},children:e.label},n)}))]})}),(0,E.jsx)(h.Z,{children:!I&&r.map((function(e,n){return(0,E.jsxs)(u.Z,{children:[(N||W||T||D||O||A)&&(0,E.jsxs)(d.Z,{size:"small",align:"center",sx:{whiteSpace:"noWrap"},children:[A&&n+1,T&&(0,E.jsx)(m.Z,{title:"View",arrow:!0,children:(0,E.jsx)(f.Z,{size:"small",color:"primary",onClick:function(){return function(e){J(e),T&&T(e)}(e)},children:(0,E.jsx)(b.Z,{})})}),D&&(0,E.jsx)(m.Z,{title:"Complete contract?",arrow:!0,children:(0,E.jsx)(f.Z,{size:"small",color:"primary",onClick:function(){return function(e){J(e),D&&D(e)}(e)},children:(0,E.jsx)(y.Z,{})})}),O&&(0,E.jsx)(m.Z,{title:"Cancel",arrow:!0,children:(0,E.jsx)(f.Z,{size:"small",sx:{color:"gray"},onClick:function(){return function(e){J(e),O&&O(e)}(e)},children:(0,E.jsx)(C.Z,{})})}),W&&(0,E.jsx)(m.Z,{title:"Edit",arrow:!0,children:(0,E.jsx)(f.Z,{size:"small",sx:{color:"#00c853"},onClick:function(){return function(e){J(e),W&&W(e)}(e)},children:(0,E.jsx)(v.Z,{})})}),N&&(0,E.jsx)(m.Z,{title:"Delete",arrow:!0,children:(0,E.jsx)(f.Z,{size:"small",color:"error",onClick:function(){return function(e){J(e),N&&N(e)}(e)},children:(0,E.jsx)(w.Z,{})})})]}),S.map((function(r,t){var a=function(e,n){var r=n.name&&n.name.split(".")||[];if(0===r.length)return"";var t=e;return r.forEach((function(e){t=void 0!==t[e]&&null!==t[e]?t[e]:""})),Array.isArray(t)&&(t=t.join(", ")),t}(e,r),o="status"===r.name,s="inherit";return o&&("pending"===a?s="red":"accepted"===a||"in progress"===a||"posted"===a?s="green":"completed"===a?s="blue":"declined"===a?s="orange":"withdrawn"===a&&(s="gray")),(0,E.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap",fontWeight:o?"bold":"normal",color:s},children:r.customBodyRender?r.customBodyRender(a,e,t,n):a},"".concat(t,"-").concat(r.name))}))]},n)}))})]}),!I&&0===r.length&&(0,E.jsx)(x.Z,{align:"center",children:"No item(s) at the moment"})]}),z&&(0,E.jsx)(Z.Z,(0,t.Z)({onPageChange:function(e,n){_&&_(n)},onRowsPerPageChange:function(e){B&&B(e.target.value)}},L)),I&&(0,E.jsx)(g.ZP,{container:!0,justifyContent:"center",children:(0,E.jsx)(p.Z,{})})]}))}n.default=(0,j.memo)(k)},64253:function(e,n,r){r.r(n);var t=r(1413),a=r(45987),o=r(93006),s=(r(72791),r(80184)),i=["errors","name","customError"];n.default=function(e){var n=e.errors,r=e.name,l=e.customError,c=(0,a.Z)(e,i),u=!1,d="";l&&(u=!0,d=l),n&&(u=n&&n.has(r)||!1,d=n&&n.first(r)||"");var h=(0,t.Z)((0,t.Z)({error:u,name:r,helperText:d},c),{},{value:c.value||""});return(0,s.jsx)(o.Z,(0,t.Z)({size:"small",variant:"outlined"},h))}},53778:function(e,n,r){r.r(n);var t=r(1413),a=r(45987),o=(r(72791),r(68096)),s=r(30829),i=r(58406),l=r(77196),c=r(23786),u=r(47071),d=r(80184),h=["label","errors","options","categories","subCategories","customError"];n.default=function(e){var n=e.label,r=e.errors,m=e.options,f=void 0===m?[]:m,x=e.categories,Z=void 0===x?[]:x,g=e.subCategories,p=void 0===g?[]:g,j=e.customError,v=(0,a.Z)(e,h),w=!1,b="";j&&(w=j.error||!1,b=j.message||""),r&&(w=r&&r.has(e.name)||!1,b=r&&r.first(e.name)||"");var C=(0,t.Z)({margin:"dense",error:w},v);return(0,d.jsxs)(o.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,d.jsx)(s.Z,{id:"dropdown-label",children:n}),(0,d.jsxs)(i.Z,(0,t.Z)((0,t.Z)({labelId:"dropdown-label",input:(0,d.jsx)(l.Z,{label:n})},C),{},{children:[f.map((function(e,n){return(0,d.jsx)(c.Z,{value:e,children:e},n)})),Z.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)})),p.map((function(e){return e.children.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)}))}))]})),(0,d.jsx)(u.Z,{error:!0,children:b})]})}},1106:function(e,n,r){r.r(n);var t=r(4942),a=r(1413),o=r(70885),s=r(72791),i=r(68870),l=r(63466),c=r(36151),u=r(80911),d=r(20890),h=r(94721),m=r(23786),f=r(64253),x=r(5403),Z=r(60585),g=r(53778),p=r(80813),j=r(21343),v=r(63845),w=r(64880),b=r(80184),C=["Pending","Accepted","Declined","Withdrawn"],y=["Ascending","Descending"],E=["Ascending","Descending"];n.default=function(e){var n=e.type,r=e.role,P=e.columns,k=(0,w.k6)(),S=s.useState(null),_=(0,o.Z)(S,2),B=_[0],R=_[1],z=s.useState(!1),A=(0,o.Z)(z,2),N=A[0],W=A[1],D=s.useState({data:[],meta:{}}),O=(0,o.Z)(D,2),T=O[0],I=O[1],F=s.useState({values:{search:"",status:"",order_by_date:"",order_by_rate:"",type:""}}),V=(0,o.Z)(F,2),H=V[0],J=V[1],L=s.useState({limit:10,page:1}),U=(0,o.Z)(L,2),q=U[0],G=U[1];s.useEffect((function(){J((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},{type:n})})}))}),[n]),s.useEffect((function(){G((function(e){return{limit:e.limit,page:1}})),M(H.values)}),[H.values]);var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};W(!0),v.default.get("/offers",{params:(0,a.Z)((0,a.Z)({},q),e)}).then((function(e){e.data.data&&I({data:e.data.data,meta:e.data.meta}),W(!1)}))},M=s.useCallback(function(e){var n;return function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];var o=this;n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(o,t)}),700)}}(K),[]),Q=function(e){var n=e.target.name,r=e.target.value,o="string"===typeof r?r.split(","):r;J((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},n,o))})}))};return(0,b.jsx)(i.Z,{children:(0,b.jsxs)(i.Z,{children:[(0,b.jsx)(i.Z,{children:(0,b.jsx)(i.Z,{sx:{width:"100%",backgroundColor:"#EBEBEB",p:2,borderRadius:2,mb:2},children:(0,b.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(f.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search by Job Categories",onChange:Q,value:H.values.search,InputProps:{startAdornment:(0,b.jsx)(l.Z,{position:"start",children:(0,b.jsx)(x.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,b.jsxs)(c.Z,{variant:"outlined",color:"primary",sx:{ml:1,backgroundColor:"white"},onClick:function(e){R(e.currentTarget)},children:[(0,b.jsx)(Z.Z,{})," Filter"]}),(0,b.jsxs)(u.Z,{anchorEl:B,open:Boolean(B),onClose:function(){R(null)},PaperProps:{style:{minWidth:300}},children:[(0,b.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},children:[(0,b.jsx)(d.Z,{children:"Filter"}),(0,b.jsx)(c.Z,{onClick:function(){J({values:{search:"",status:"",order_by_date:"",order_by_rate:""}})},children:"Clear filter"})]}),(0,b.jsx)(h.Z,{}),(0,b.jsx)(m.Z,{children:(0,b.jsx)(g.default,{name:"status",label:"Status",value:H.values.status,onChange:Q,options:C})}),(0,b.jsx)(m.Z,{children:(0,b.jsx)(g.default,{name:"order_by_date",label:"Order By Date",value:H.values.order_by_date,onChange:Q,options:E})}),(0,b.jsx)(m.Z,{children:(0,b.jsx)(g.default,{name:"order_by_rate",label:"Order By Rate",value:H.values.order_by_rate,onChange:Q,options:y})})]})]})})}),(0,b.jsx)(j.default,{withPagination:!0,onRevoked:function(e){console.log(e)},loading:N,data:T.data,columns:P,rowsPerPage:H.values.limit,count:T.meta.total||0,page:T.meta.current_page-1||0,onChangePage:function(e){K({page:e+1})},onRowsChangePage:function(e){K({limit:e}),function(e,n){J((function(r){return(0,a.Z)((0,a.Z)({},r),{},(0,t.Z)({},e,n))}))}("limit",e)}}),T&&0===T.data.length&&(0,b.jsxs)(i.Z,{align:"center",sx:{mt:5,p:2},children:[(0,b.jsx)(p.Z,{sx:{width:{xs:100,md:120},height:{xs:100,md:120},color:"#BEBEBE",boxShadow:20,borderRadius:3}}),"Client"===r?(0,b.jsxs)(i.Z,{children:[(0,b.jsx)(d.Z,{sx:{mt:2},children:"NO OFFERS HAVE BEEN SENT"}),(0,b.jsx)(c.Z,{sx:{width:120,mt:2,boxShadow:5},color:"primary",variant:"contained",size:"small",onClick:function(){return k.push("/new/job-offer")},children:"Send Offer"})]}):(0,b.jsx)(d.Z,{sx:{mt:2},children:"NO OFFERS HAVE BEEN RECEIVED"})]})]})})}},63845:function(e,n,r){r.r(n);var t=r(31243).Z.create();t.defaults.baseURL="http://localhost:8000/api/",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),n.default=t}}]);
//# sourceMappingURL=1106.1c350a7d.chunk.js.map