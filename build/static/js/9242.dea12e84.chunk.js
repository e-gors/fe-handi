"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9242,1343,3778,1106,3845],{21343:function(e,n,t){t.r(n);var a=t(1413),r=t(70885),o=t(45987),l=t(68870),s=t(39281),i=t(79836),c=t(56890),u=t(35855),d=t(53994),h=t(53382),m=t(20068),x=t(13400),f=t(20890),Z=t(67492),p=t(61889),j=t(13239),g=t(72791),b=t(41286),v=t(27247),w=t(3746),y=t(91329),C=t(79908),E=t(80184),P=["data","columns","onChangePage","rowsPerPage","onRowsChangePage","withPagination","withNumber","onDelete","onEdit","onComplete","onRevoked","onWithdrawn","onCancel","onView","loading"];function k(e){var n=e.data,t=void 0===n?[]:n,k=e.columns,S=void 0===k?[]:k,_=e.onChangePage,B=(e.rowsPerPage,e.onRowsChangePage),R=e.withPagination,z=void 0!==R&&R,D=e.withNumber,A=e.onDelete,N=e.onEdit,T=e.onComplete,O=e.onRevoked,W=(e.onWithdrawn,e.onCancel,e.onView),F=e.loading,I=(0,o.Z)(e,P),V=(0,g.useState)({}),H=(0,r.Z)(V,2),J=(H[0],H[1]),L=(0,a.Z)({rowsPerPageOptions:[10,20,50,100,250],component:"div",count:1,rowsPerPage:10,page:1},I);return(0,E.jsxs)(l.Z,(0,a.Z)((0,a.Z)({},I),{},{sx:{border:"1px solid #BEBEBE",boxShadow:10},children:[(0,E.jsxs)(s.Z,{children:[(0,E.jsxs)(i.Z,{stickyHeader:!0,children:[(0,E.jsx)(c.Z,{sx:{"& th":{color:"black",backgroundColor:"#E3E4E9",fontWeight:"bold"}},children:(0,E.jsxs)(u.Z,{children:[(A||T||N||W||O||D)&&(0,E.jsx)(d.Z,{size:"small",align:"center",children:"#"}),S.map((function(e,n){return(0,E.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap"},children:e.label},n)}))]})}),(0,E.jsx)(h.Z,{children:!F&&t.map((function(e,n){return(0,E.jsxs)(u.Z,{children:[(A||N||W||T||O||D)&&(0,E.jsxs)(d.Z,{size:"small",align:"center",sx:{whiteSpace:"noWrap"},children:[D&&n+1,W&&(0,E.jsx)(m.Z,{title:"View",arrow:!0,children:(0,E.jsx)(x.Z,{size:"small",color:"primary",onClick:function(){return function(e){J(e),W&&W(e)}(e)},children:(0,E.jsx)(w.Z,{})})}),T&&(0,E.jsx)(m.Z,{title:"Complete contract?",arrow:!0,children:(0,E.jsx)(x.Z,{size:"small",color:"primary",onClick:function(){return function(e){J(e),T&&T(e)}(e)},children:(0,E.jsx)(C.Z,{})})}),O&&(0,E.jsx)(m.Z,{title:"Cancel",arrow:!0,children:(0,E.jsx)(x.Z,{size:"small",sx:{color:"gray"},onClick:function(){return function(e){J(e),O&&O(e)}(e)},children:(0,E.jsx)(y.Z,{})})}),N&&(0,E.jsx)(m.Z,{title:"Edit",arrow:!0,children:(0,E.jsx)(x.Z,{size:"small",sx:{color:"#00c853"},onClick:function(){return function(e){J(e),N&&N(e)}(e)},children:(0,E.jsx)(b.Z,{})})}),A&&(0,E.jsx)(m.Z,{title:"Delete",arrow:!0,children:(0,E.jsx)(x.Z,{size:"small",color:"error",onClick:function(){return function(e){J(e),A&&A(e)}(e)},children:(0,E.jsx)(v.Z,{})})})]}),S.map((function(t,a){var r=function(e,n){var t=n.name&&n.name.split(".")||[];if(0===t.length)return"";var a=e;return t.forEach((function(e){a=void 0!==a[e]&&null!==a[e]?a[e]:""})),Array.isArray(a)&&(a=a.join(", ")),a}(e,t),o="status"===t.name,l="inherit";return o&&("pending"===r?l="red":"accepted"===r||"in progress"===r||"posted"===r?l="green":"completed"===r?l="blue":"declined"===r?l="orange":"withdrawn"===r&&(l="gray")),(0,E.jsx)(d.Z,{size:"small",sx:{whiteSpace:"noWrap",fontWeight:o?"bold":"normal",color:l},children:t.customBodyRender?t.customBodyRender(r,e,a,n):r},"".concat(a,"-").concat(t.name))}))]},n)}))})]}),!F&&0===t.length&&(0,E.jsx)(f.Z,{align:"center",children:"No item(s) at the moment"})]}),z&&(0,E.jsx)(Z.Z,(0,a.Z)({onPageChange:function(e,n){_&&_(n)},onRowsPerPageChange:function(e){B&&B(e.target.value)}},L)),F&&(0,E.jsx)(p.ZP,{container:!0,justifyContent:"center",children:(0,E.jsx)(j.Z,{})})]}))}n.default=(0,g.memo)(k)},64253:function(e,n,t){t.r(n);var a=t(1413),r=t(45987),o=t(93006),l=(t(72791),t(80184)),s=["errors","name","customError"];n.default=function(e){var n=e.errors,t=e.name,i=e.customError,c=(0,r.Z)(e,s),u=!1,d="";i&&(u=!0,d=i),n&&(u=n&&n.has(t)||!1,d=n&&n.first(t)||"");var h=(0,a.Z)((0,a.Z)({error:u,name:t,helperText:d},c),{},{value:c.value||""});return(0,l.jsx)(o.Z,(0,a.Z)({size:"small",variant:"outlined"},h))}},53778:function(e,n,t){t.r(n);var a=t(1413),r=t(45987),o=(t(72791),t(68096)),l=t(30829),s=t(58406),i=t(77196),c=t(23786),u=t(47071),d=t(80184),h=["label","errors","options","categories","subCategories","customError"];n.default=function(e){var n=e.label,t=e.errors,m=e.options,x=void 0===m?[]:m,f=e.categories,Z=void 0===f?[]:f,p=e.subCategories,j=void 0===p?[]:p,g=e.customError,b=(0,r.Z)(e,h),v=!1,w="";g&&(v=g.error||!1,w=g.message||""),t&&(v=t&&t.has(e.name)||!1,w=t&&t.first(e.name)||"");var y=(0,a.Z)({margin:"dense",error:v},b);return(0,d.jsxs)(o.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,d.jsx)(l.Z,{id:"dropdown-label",children:n}),(0,d.jsxs)(s.Z,(0,a.Z)((0,a.Z)({labelId:"dropdown-label",input:(0,d.jsx)(i.Z,{label:n})},y),{},{children:[x.map((function(e,n){return(0,d.jsx)(c.Z,{value:e,children:e},n)})),Z.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)})),j.map((function(e){return e.children.map((function(e,n){return(0,d.jsx)(c.Z,{value:e.name,children:e.name},n)}))}))]})),(0,d.jsx)(u.Z,{error:!0,children:w})]})}},19242:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(70885),r=t(1413),o=t(45987),l=t(72791),s=t(68870),i=t(20890),c=t(39124),u=t(43896),d=t(1106),h=t(59434),m=t(80184),x=["children","value","index"];function f(e){var n=e.children,t=e.value,a=e.index,l=(0,o.Z)(e,x);return(0,m.jsx)(s.Z,(0,r.Z)((0,r.Z)({role:"tabpanel",hidden:t!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},l),{},{children:t===a&&(0,m.jsx)(s.Z,{sx:{mt:2},children:n})}))}function Z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var p=[{name:"worker",label:"Contractor",customBodyRender:function(e){return e.full_name}},{name:"title",label:"Contract Name"},{name:"type",label:"Job Type"},{name:"days",label:"Days"},{name:"rate",label:"Rate"},{name:"status",label:"Status"},{name:"created_at",label:"Date Posted"}],j=[{name:"worker",label:"Contractor",customBodyRender:function(e){return e.full_name}},{name:"title",label:"Contract Name"},{name:"type",label:"Job Type"},{name:"budget",label:"Budget"},{name:"status",label:"Status"},{name:"created_at",label:"Date Posted"}];function g(){var e=l.useState(0),n=(0,a.Z)(e,2),t=n[0],o=n[1],x=(0,h.v9)((function(e){return e.users.user}));return(0,m.jsx)(s.Z,{sx:{width:"100%",mt:10},children:(0,m.jsxs)(s.Z,{sx:{p:2,width:"95%",m:"0 auto"},children:[(0,m.jsx)(i.Z,{sx:{fontSize:{xs:20,md:24},m:2},children:"My Offers"}),(0,m.jsx)(s.Z,{sx:{mt:2},children:(0,m.jsxs)(c.Z,{value:t,onChange:function(e,n){o(n)},"aria-label":"basic tabs example",children:[(0,m.jsx)(u.Z,(0,r.Z)({label:"Daily"},Z(0))),(0,m.jsx)(u.Z,(0,r.Z)({label:"Fixed"},Z(1)))]})}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(f,{value:t,index:0,children:(0,m.jsx)(d.default,{type:"Daily Rate",role:x.role,columns:p})}),(0,m.jsx)(f,{value:t,index:1,children:(0,m.jsx)(d.default,{type:"Fixed Cost",role:x.role,columns:j})})]})]})})}},1106:function(e,n,t){t.r(n);var a=t(4942),r=t(1413),o=t(70885),l=t(72791),s=t(68870),i=t(63466),c=t(36151),u=t(80911),d=t(20890),h=t(94721),m=t(23786),x=t(64253),f=t(5403),Z=t(60585),p=t(53778),j=t(80813),g=t(21343),b=t(63845),v=t(64880),w=t(80184),y=["Pending","Accepted","Declined","Withdrawn"],C=["Ascending","Descending"],E=["Ascending","Descending"];n.default=function(e){var n=e.type,t=e.role,P=e.columns,k=(0,v.k6)(),S=l.useState(null),_=(0,o.Z)(S,2),B=_[0],R=_[1],z=l.useState(!1),D=(0,o.Z)(z,2),A=D[0],N=D[1],T=l.useState({data:[],meta:{}}),O=(0,o.Z)(T,2),W=O[0],F=O[1],I=l.useState({values:{search:"",status:"",order_by_date:"",order_by_rate:"",type:""}}),V=(0,o.Z)(I,2),H=V[0],J=V[1],L=l.useState({limit:10,page:1}),M=(0,o.Z)(L,2),U=M[0],q=M[1];l.useEffect((function(){J((function(e){return(0,r.Z)((0,r.Z)({},e),{},{values:(0,r.Z)((0,r.Z)({},e.values),{},{type:n})})}))}),[n]),l.useEffect((function(){q((function(e){return{limit:e.limit,page:1}})),K(H.values)}),[H.values]);var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(!0),b.default.get("/offers",{params:(0,r.Z)((0,r.Z)({},U),e)}).then((function(e){e.data.data&&F({data:e.data.data,meta:e.data.meta}),N(!1)}))},K=l.useCallback(function(e){var n;return function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var o=this;n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(o,a)}),700)}}(G),[]),Q=function(e){var n=e.target.name,t=e.target.value,o="string"===typeof t?t.split(","):t;J((function(e){return(0,r.Z)((0,r.Z)({},e),{},{values:(0,r.Z)((0,r.Z)({},e.values),{},(0,a.Z)({},n,o))})}))};return(0,w.jsx)(s.Z,{children:(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(s.Z,{children:(0,w.jsx)(s.Z,{sx:{width:"100%",backgroundColor:"#EBEBEB",p:2,borderRadius:2,mb:2},children:(0,w.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,w.jsx)(x.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search by Job Categories",onChange:Q,value:H.values.search,InputProps:{startAdornment:(0,w.jsx)(i.Z,{position:"start",children:(0,w.jsx)(f.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,w.jsxs)(c.Z,{variant:"outlined",color:"primary",sx:{ml:1,backgroundColor:"white"},onClick:function(e){R(e.currentTarget)},children:[(0,w.jsx)(Z.Z,{})," Filter"]}),(0,w.jsxs)(u.Z,{anchorEl:B,open:Boolean(B),onClose:function(){R(null)},PaperProps:{style:{minWidth:300}},children:[(0,w.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},children:[(0,w.jsx)(d.Z,{children:"Filter"}),(0,w.jsx)(c.Z,{onClick:function(){J({values:{search:"",status:"",order_by_date:"",order_by_rate:""}})},children:"Clear filter"})]}),(0,w.jsx)(h.Z,{}),(0,w.jsx)(m.Z,{children:(0,w.jsx)(p.default,{name:"status",label:"Status",value:H.values.status,onChange:Q,options:y})}),(0,w.jsx)(m.Z,{children:(0,w.jsx)(p.default,{name:"order_by_date",label:"Order By Date",value:H.values.order_by_date,onChange:Q,options:E})}),(0,w.jsx)(m.Z,{children:(0,w.jsx)(p.default,{name:"order_by_rate",label:"Order By Rate",value:H.values.order_by_rate,onChange:Q,options:C})})]})]})})}),(0,w.jsx)(g.default,{withPagination:!0,onRevoked:function(e){console.log(e)},loading:A,data:W.data,columns:P,rowsPerPage:H.values.limit,count:W.meta.total||0,page:W.meta.current_page-1||0,onChangePage:function(e){G({page:e+1})},onRowsChangePage:function(e){G({limit:e}),function(e,n){J((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,n))}))}("limit",e)}}),W&&0===W.data.length&&(0,w.jsxs)(s.Z,{align:"center",sx:{mt:5,p:2},children:[(0,w.jsx)(j.Z,{sx:{width:{xs:100,md:120},height:{xs:100,md:120},color:"#BEBEBE",boxShadow:20,borderRadius:3}}),"Client"===t?(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(d.Z,{sx:{mt:2},children:"NO OFFERS HAVE BEEN SENT"}),(0,w.jsx)(c.Z,{sx:{width:120,mt:2,boxShadow:5},color:"primary",variant:"contained",size:"small",onClick:function(){return k.push("/new/job-offer")},children:"Send Offer"})]}):(0,w.jsx)(d.Z,{sx:{mt:2},children:"NO OFFERS HAVE BEEN RECEIVED"})]})]})})}},63845:function(e,n,t){t.r(n);var a=t(31243).Z.create();a.defaults.baseURL="http://localhost:8000/api",a.defaults.headers.common.Accept="application/json",a.defaults.headers.common["Content-Type"]="application/json",a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),a.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),n.default=a}}]);
//# sourceMappingURL=9242.dea12e84.chunk.js.map