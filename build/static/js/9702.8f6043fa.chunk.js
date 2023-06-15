"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9702,3746],{14365:function(e,n,l){l.r(n);var a=l(70885),t=l(68870),r=l(63466),i=l(36151),s=l(81918),o=l(80911),c=l(20890),d=l(94721),u=l(23786),x=l(20431),h=l(72791),p=l(64253),m=l(5403),f=l(60585),g=l(53778),v=l(80184),Z=["Relevance","Rating","Hourly Rate","Hours Work"];n.default=function(e){var n,l=e.locations,j=e.categories,b=void 0===j?[]:j,y=e.skills,k=void 0===y?[]:y,w=e.filterValues,C=e.handleFilter,S=e.handleClearFilter,W=e.filterValuesCount,z=h.useState(null),_=(0,a.Z)(z,2),B=_[0],F=_[1];return(0,v.jsx)(t.Z,{children:(0,v.jsxs)(t.Z,{sx:{width:"100%",backgroundColor:"#EBEBEB",p:1,borderRadius:3,display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"},boxShadow:5},children:[(0,v.jsx)(p.default,{type:"search",label:"Search",name:"search",size:"small",variant:"outlined",placeholder:"Search...",onChange:C,value:w.values.search,InputProps:{startAdornment:(0,v.jsx)(r.Z,{position:"start",children:(0,v.jsx)(m.Z,{})}),style:{backgroundColor:"white"}},sx:{width:"100%"}}),(0,v.jsxs)(t.Z,{sx:{display:"flex",width:"100%"},children:[(0,v.jsx)(g.default,{label:"Sort By",name:"sort_by",onChange:C,value:w.values.sort_by,options:Z,sx:{mt:.5,backgroundColor:"white",maxWidth:{xs:"100%",md:240},ml:{xs:0,md:1},mr:{xs:1,md:0}}}),(0,v.jsxs)(i.Z,{size:"small",variant:"outlined",color:"primary",sx:{backgroundColor:"white",width:{xs:"50%",md:150},maxHeight:40,mt:{xs:1,md:1}},onClick:function(e){F(e.currentTarget)},children:[(0,v.jsx)(s.Z,{label:W,size:"small",variant:"contained",color:"warning"})," ",(0,v.jsx)(f.Z,{})," ",(0,v.jsx)("span",{style:{"@media (maxWidth: 500px)":{display:"none"}},children:"Filter"})]})]}),(0,v.jsxs)(o.Z,{anchorEl:B,open:Boolean(B),onClose:function(){F(null)},PaperProps:{style:{minWidth:300,maxHeight:400,overFlowY:"scroll"}},children:[(0,v.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"5px 10px"},children:[(0,v.jsx)(c.Z,{children:"Filter"}),(0,v.jsx)(i.Z,{onClick:S,children:"Clear filter"})]}),(0,v.jsx)(d.Z,{}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(g.default,{name:"category",label:"Categories",margin:"dense",value:w.values.category,onChange:C,subCategories:b})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(g.default,{name:"location",label:"Location",margin:"dense",value:w.values.location,onChange:C,categories:l})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(g.default,{name:"skill",label:"Skills",margin:"dense",value:w.values.skill,onChange:C,subCategories:k})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(x.ZP,{name:"salary_range",value:w.values.salary_range,onChange:C,valueLabelDisplay:"auto",min:0,max:15e3,step:100})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(p.default,{margin:"dense",fullWidth:!0,label:"Salary Range",value:(n=w.values.salary_range,"\u20b1".concat(n[0]," - \u20b1").concat(n[1])),readOnly:!0})}),(0,v.jsx)(i.Z,{fullWidth:!0,variant:"contained",color:"primary",size:"small",sx:{mt:1},children:"Search"})]})]})})}},40426:function(e,n,l){l.r(n);var a=l(70885),t=l(68870),r=l(13239),i=l(61889),s=l(20890),o=l(93044),c=l(81918),d=l(36314),u=l(72791),x=l(65366),h=l(59434),p=l(44238),m=l(80184),f={wrapper:{mt:5},cardWrapper:{backgroundColor:"#EBEBEB",p:2,borderRadius:3,cursor:"pointer","&:hover":{boxShadow:5,".position":{color:"blue"}}},jobCategoryText:{fontWeight:"bold",fontSize:{xs:14,md:16},mb:1},cardTop:{display:"flex",alignItems:"center"},categoryWrapper:{width:"100%",display:"flex",justifyContent:"space-between"},fullname:{ml:1},fullnameText:{fontWeight:"bold"},categoryMainWrapper:{display:"flex",flexWrap:"wrap"},category:{m:.3,fontSize:{xs:12,md:14},backgroundColor:"white",boxShadow:1},moreCategory:{border:"2px solid white",boxShadow:1},bookmark:{cursor:"pointer","&:hover":{color:"blue"}},backgroundText:{mt:1,mb:1,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},skillWrapper:{mt:2,display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center"},skill:{m:.3,fontSize:{xs:12,md:14},border:"2px solid white",boxShadow:1},moreSkill:{border:"2px solid white",boxShadow:1},cardBottom:{mt:1},cardBottomWrapper:{display:"flex",justifyContent:"space-between",p:2}},g=2,v=function(e){var n=new Date;return n.setDate(n.getDate()-7),e<n?null:e};n.default=function(e){var n=e.jobs,l=e.loading,Z=e.handleForceUpdate,j=(0,h.v9)((function(e){return e.users.user})),b=u.useState(!1),y=(0,a.Z)(b,2),k=y[0],w=y[1],C=u.useState({}),S=(0,a.Z)(C,2),W=S[0],z=S[1],_=function(e){z(e),w(!k)};return(0,m.jsxs)(t.Z,{sx:f.wrapper,children:[l&&(0,m.jsx)(t.Z,{align:"center",children:(0,m.jsx)(r.Z,{size:40})}),(0,m.jsx)(x.default,{open:k,handleClose:_,selectedItem:W,user:j&&j,handleForceUpdate:Z}),(0,m.jsx)(i.ZP,{container:!0,spacing:1,children:!l&&n&&n.map((function(e,l){var a,r,u,x,h=e.skills&&(null===(a=e.skills)||void 0===a?void 0:a.length)>2&&(null===(r=n.skills)||void 0===r?void 0:r.length)>g&&n.skills.slice(0,g);return(0,m.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,m.jsxs)(t.Z,{sx:f.cardWrapper,onClick:function(){return _(e)},children:[(0,m.jsxs)(t.Z,{sx:{display:"flex"},children:[(0,m.jsx)(s.Z,{sx:f.jobCategoryText,className:"position",children:e.position}),(0,m.jsx)(s.Z,{sx:{ml:1,color:"green"},children:"\u2022"}),(0,m.jsxs)(s.Z,{sx:{ml:1,color:"green",fontSize:12,mt:.5},children:["Posted ",v(e.created_at)]})]}),(0,m.jsxs)(t.Z,{sx:f.cardTop,children:[(0,m.jsx)(o.Z,{alt:e.client.fullname,src:e.client.profile&&e.client.profile[0].profile_url}),(0,m.jsx)(t.Z,{sx:f.categoryWrapper,children:(0,m.jsxs)(t.Z,{sx:f.fullname,children:[(0,m.jsx)(s.Z,{sx:f.fullnameText,children:e.client.fullname}),(0,m.jsx)(t.Z,{sx:f.categoryMainWrapper,children:(0,m.jsx)(c.Z,{size:"small",label:e.category,variant:"contained",sx:f.category},l)})]})})]}),(0,m.jsx)("div",{style:f.backgroundText,dangerouslySetInnerHTML:{__html:e.description}}),(0,m.jsxs)(d.Z,{sx:f.skillWrapper,children:[h&&h.map((function(e,n){return(0,m.jsx)(c.Z,{size:"small",label:e,variant:"contained",sx:f.skill},n)})),e.skills&&(null===(u=e.skills)||void 0===u?void 0:u.length)>2&&(null===(x=n.skils)||void 0===x?void 0:x.length)>g&&(0,m.jsx)(c.Z,{size:"small",label:"+".concat(e.skills.length-g),variant:"contained",sx:f.moreSkill},"".concat(l,"-more"))]}),(0,m.jsx)(t.Z,{sx:f.cardBottom,children:(0,m.jsxs)(t.Z,{sx:f.cardBottomWrapper,children:[(0,m.jsxs)(s.Z,{children:["\u20b1"," ",e.rate?"".concat((0,p.formatValue)(e.rate)," / day"):(0,p.formatValue)(e.budget)]}),(0,m.jsx)(s.Z,{children:e.job_type}),"Daily Rate"===e.job_type&&(0,m.jsx)(s.Z,{children:e.days})]})})]})},l)}))}),!l&&n&&0===n.length&&(0,m.jsx)(t.Z,{align:"center",children:(0,m.jsx)(s.Z,{children:"No Jobs found!"})})]})}},3793:function(e,n,l){l.r(n);var a=l(4942),t=l(1413),r=l(70885),i=l(81918),s=l(68870),o=l(20890),c=l(36314),d=l(16088),u=l(72791),x=l(59434),h=l(14365),p=l(40426),m=l(2527),f=l(80184);n.default=function(){var e,n=(0,x.v9)((function(e){return e.categories.categories})),l=(0,x.v9)((function(e){return e.skills.skills})),g=(0,x.v9)((function(e){return e.locations.locations})),v=(0,u.useReducer)((function(e){return e+1}),0),Z=(0,r.Z)(v,2),j=Z[0],b=Z[1],y=u.useState(!1),k=(0,r.Z)(y,2),w=k[0],C=k[1],S=u.useState(!1),W=(0,r.Z)(S,2),z=W[0],_=W[1],B=u.useState(!1),F=(0,r.Z)(B,2),T=F[0],D=F[1],M=u.useState({data:[],meta:{}}),R=(0,r.Z)(M,2),I=R[0],L=R[1],P=u.useState({limit:12,page:1}),E=(0,r.Z)(P,2),V=E[0],H=E[1],O=u.useState({values:{search:"",sort_by:"Relevance",category:"",location:"",salary_range:[0,15e3],skill:""}}),U=(0,r.Z)(O,2),A=U[0],J=U[1];u.useEffect((function(){H((function(e){return{limit:e.limit,page:1}})),N(A.values)}),[j,A.values]);var N=u.useCallback(function(e){var n;return function(){for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];var r=this;n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(r,a)}),700)}}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C(!0),m.default.get("/jobs",{params:(0,t.Z)((0,t.Z)({},V),e)}).then((function(e){e.data.data&&L({data:e.data.data,meta:e.data.meta}),C(!1),_(!1)}))})),[]),X=function(){D(!T)},Y=function(e,n){J((function(l){return(0,t.Z)((0,t.Z)({},l),{},{values:(0,t.Z)((0,t.Z)({},l.values),{},(0,a.Z)({},e,n))})}))},q=function(e,n){return n?null===e||void 0===e?void 0:e.map((function(e){return null===e||void 0===e?void 0:e.children.slice(0,n).map((function(e,n){return(0,f.jsx)(i.Z,{label:e.name,variant:"contained",sx:{m:1,cursor:"pointer"},onClick:function(){return Y("category",e.name)}},n)}))})):null===e||void 0===e?void 0:e.map((function(e){return null===e||void 0===e?void 0:e.children.map((function(e,n){return(0,f.jsx)(i.Z,{label:e.name,variant:"contained",sx:{m:1,cursor:"pointer"},onClick:function(){return Y("category",e.name)}},n)}))}))},G=Object.entries(A.values).filter((function(e){var n=(0,r.Z)(e,2),l=n[0],a=n[1];return"search"!==l&&"sort_by"!==l&&null!==a&&""!==a})).length;return(0,f.jsx)(s.Z,{sx:{p:{xs:2,md:5},mt:10},children:(0,f.jsxs)(s.Z,{children:[(0,f.jsxs)(s.Z,{sx:{position:"sticky",top:{xs:-30,md:60},bgcolor:"background.paper",zIndex:1},children:[(0,f.jsx)(o.Z,{sx:{fontSize:{xs:30,md:36},fontWeight:"bold",ml:1},children:"Find Jobs"}),(0,f.jsxs)(c.Z,{sx:{display:"flex",flexWrap:{xs:"noWrap",md:"wrap"},flexDirection:"row",alignItems:"center",overflowX:{xs:"scroll",md:"none"},"&::-webkit-scrollbar":{width:0}},children:[!T&&q(n,2),T&&q(n),!T&&(null===n||void 0===n?void 0:n.length)>3&&(0,f.jsx)(o.Z,{component:"span",variant:"outlined",onClick:X,sx:{fontSize:12,cursor:"pointer",textDecoration:"underline",color:"blue",whiteSpace:"noWrap"},children:"show more"}),T&&(0,f.jsx)(o.Z,{component:"span",variant:"outlined",onClick:X,sx:{fontSize:12,cursor:"pointer",textDecoration:"underline",color:"blue",whiteSpace:"noWrap"},children:"Show less"})]}),(0,f.jsx)(h.default,{categories:n,skills:l,filterValues:A,handleFilter:function(e){var n=e.target.name,l=e.target.value;J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,a.Z)({},n,l))})}))},handleClearFilter:function(){J({values:{search:"",sort_by:"Relevance",category:"",location:"",salary_range:[0,15e3],skill:""}})},locations:g,filterValuesCount:G})]}),(0,f.jsx)(p.default,{jobs:I.data,loading:w,handleForceUpdate:function(){return b()}}),I.data&&0!==(null===(e=I.data)||void 0===e?void 0:e.length)&&(0,f.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",mt:5},children:(0,f.jsx)(d.Z,{count:Math.ceil(I.meta.total/V.limit),page:V.page,onChange:function(e,n){V.page!==n&&(_(!0),H((function(e){return{limit:e.limit,page:n}})),N({page:n}))},disabled:z,color:"primary",variant:"outlined",shape:"rounded"})})]})})}},3746:function(e,n,l){var a=l(64836);n.Z=void 0;var t=a(l(45649)),r=l(80184),i=(0,t.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=i},58721:function(e,n,l){l(72791);var a=l(74223),t=l(80184);n.Z=(0,a.Z)((0,t.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},95722:function(e,n,l){l(72791);var a=l(74223),t=l(80184);n.Z=(0,a.Z)((0,t.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=9702.8f6043fa.chunk.js.map