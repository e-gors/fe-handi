"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[2178,8292,9293,3850,3845],{8292:function(e,r,t){t.r(r),t.d(r,{default:function(){return n}});var s=t(75985);function n(e,r,t){return"success"===e?s.Am.success(r,t):s.Am.error(r,t)}},49293:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var s=t(75985),n=(t(5462),t(80184));function i(){return(0,n.jsx)(s.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,t){t.r(r),t.d(r,{options:function(){return s}});var s={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},12178:function(e,r,t){t.r(r);var s=t(70885),n=t(68870),i=t(20890),a=t(81918),o=t(36151),l=t(13239),c=t(72791),d=t(67394),p=t(83272),u=t(87569),x=t(87749),h=t(8292),f=t(33850),m=t(63845),j=t(49293),g=t(64880),b=t(59434),y=t(3437),Z=t(80184),v={wrapper:{mt:5},jobTypeWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"},justifyContent:"space-between"},jobTypeCard:{border:"1px solid blue",borderRadius:2,p:1,width:{xs:"100%",md:"48%"},m:1},card:{width:"100%",position:"relative",backgroundColor:"green"},input:{position:"absolute",top:0,right:0},cardDesWrapper:{display:"flex",alignItems:"center"},typeIcon:{fontSize:36,mr:1},cardTitle:{fontWeight:"bold",fontSize:14},cardDescription:{fontSize:12},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}};r.default=function(e){var r=e.activeStep,t=e.handleCancel,k=e.handleBack,w=e.titles,C=e.descriptions,S=e.imagesContainer,z=void 0===S?[]:S,W=e.typeAndBudget,D=void 0===W?[]:W,T=e.ques,P=void 0===T?[]:T,B=e.skillses,I=void 0===B?[]:B,A=e.locations,H=(0,g.k6)(),F=(0,b.I0)(),L=c.useState(!1),O=(0,s.Z)(L,2),R=O[0],E=O[1],M=c.useState("Public"),N=(0,s.Z)(M,2),J=N[0],V=N[1],_=function(e){V(e)};return(0,Z.jsxs)(n.Z,{sx:v.wrapper,children:[(0,Z.jsx)(j.default,{}),(0,Z.jsxs)(n.Z,{children:[(0,Z.jsxs)(n.Z,{sx:{mb:1,p:2},children:[D&&(0,Z.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,Z.jsxs)(n.Z,{align:"left",children:[(0,Z.jsx)(i.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:"bold"},children:w}),(0,Z.jsxs)(i.Z,{children:[D.category," ",(0,Z.jsx)(p.Z,{sx:{fontSize:11}}),D.sub_category]})]}),(0,Z.jsxs)(n.Z,{align:"right",children:[(0,Z.jsx)(i.Z,{sx:{p:1,backgroundColor:"#FF9100",borderRadius:1},children:D.type}),"Daily Rate"===D.type&&(0,Z.jsxs)(i.Z,{children:[D.rate," / Day"]}),"Fixed Cost"===D.type&&(0,Z.jsx)(i.Z,{children:D.budget})]})]}),C&&(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:C}}),z&&z.length>0&&(0,Z.jsx)(n.Z,{sx:v.selectedImagesWrapper,children:z&&z.length>0&&z.map((function(e,r){return(0,Z.jsx)(n.Z,{sx:{m:.5},children:(0,Z.jsx)("img",{style:v.image,src:e.url,alt:e.name})},r)}))})]}),(z.length>0||D.length>0||P.length>0||I.length>0||A)&&(0,Z.jsxs)(n.Z,{sx:{mb:1,p:2},children:[(0,Z.jsx)(i.Z,{sx:{fontSize:24,fontWeight:600},children:"Details"}),D&&"Daily Rate"===D.type&&(0,Z.jsx)(n.Z,{children:(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)("span",{children:"Estimated days:"})," ",D.days]})}),A&&(0,Z.jsxs)(n.Z,{sx:{display:"flex",mt:1},children:[(0,Z.jsx)(i.Z,{children:"Location: "}),(0,Z.jsx)(n.Z,{sx:{ml:1},children:A&&A.map((function(e,r){return(0,Z.jsx)(a.Z,{label:e,color:"primary",variant:"outlined",sx:{m:.2}},r)}))})]}),I&&0!==I.length&&(0,Z.jsxs)(n.Z,{sx:{display:"flex",mt:1},children:[(0,Z.jsx)(i.Z,{children:"Skills:"}),(0,Z.jsx)(n.Z,{sx:{ml:1},children:I&&I.map((function(e,r){return(0,Z.jsx)(a.Z,{label:e,color:"primary",variant:"outlined",sx:{m:.2}},r)}))})]})]}),P&&P.length>0&&(0,Z.jsxs)(n.Z,{sx:{mb:2,p:2},children:[(0,Z.jsx)(i.Z,{children:"Questions"}),(0,Z.jsx)(n.Z,{component:"ol",children:P&&P.map((function(e,r){return(0,Z.jsx)(i.Z,{component:"li",children:e.text},r)}))})]}),(0,Z.jsxs)(n.Z,{sx:{mt:2},children:[(0,Z.jsx)(i.Z,{children:"Job Visibility *"}),(0,Z.jsxs)(n.Z,{sx:v.jobTypeWrapper,children:[(0,Z.jsx)(n.Z,{sx:v.jobTypeCard,children:(0,Z.jsxs)(n.Z,{component:"label",htmlFor:"daily-rate",sx:v.card,children:[(0,Z.jsx)("input",{id:"daily-rate",type:"radio",name:"type",value:"Daily Rate",checked:"Public"===J,onChange:function(){return _("Public")},style:v.input}),(0,Z.jsxs)(n.Z,{sx:v.cardDesWrapper,children:[(0,Z.jsx)(u.Z,{color:"primary",sx:v.typeIcon}),(0,Z.jsxs)(n.Z,{children:[(0,Z.jsx)(i.Z,{sx:v.cardTitle,children:"Public"}),(0,Z.jsx)(i.Z,{sx:v.cardDescription,children:"Your job is shown in search results and workers can freely apply to it."})]})]})]})}),(0,Z.jsx)(n.Z,{sx:v.jobTypeCard,children:(0,Z.jsxs)(n.Z,{component:"label",htmlFor:"fixed-rate",sx:v.card,children:[(0,Z.jsx)("input",{id:"fixed-rate",type:"radio",name:"type",value:"Fixed Cost",checked:"Private"===J,onChange:function(){return _("Private")},style:v.input}),(0,Z.jsxs)(n.Z,{sx:v.cardDesWrapper,children:[(0,Z.jsx)(x.Z,{color:"primary",sx:v.typeIcon}),(0,Z.jsxs)(n.Z,{children:[(0,Z.jsx)(i.Z,{sx:v.cardTitle,children:"Private"}),(0,Z.jsx)(i.Z,{sx:v.cardDescription,children:"Not shown in search results, but you can invite workers to apply."})]})]})]})})]})]}),(0,Z.jsxs)(n.Z,{sx:v.buttonWrapper,children:[(0,Z.jsxs)(o.Z,{color:"primary",onClick:k,size:"small",sx:v.back,disabled:0===r,type:"text",children:[(0,Z.jsx)(d.Z,{sx:v.backArrow}),(0,Z.jsx)("span",{children:"Back"})]}),(0,Z.jsxs)(n.Z,{sx:v.rightButtons,children:[(0,Z.jsx)(o.Z,{variant:"outlined",color:"secondary",onClick:t,size:"small",sx:v.cancel,children:"Cancel"}),(0,Z.jsx)(o.Z,{variant:"contained",color:"primary",onClick:function(){E(!0);var e=new FormData;e.append("title",w),e.append("description",C),e.append("typeAndBudget",JSON.stringify([D])),e.append("status",J),z&&z.length>0&&z.forEach((function(r){e.append("images[]",r.file)})),P&&P.length>0&&e.append("questions",JSON.stringify(P)),I&&I.length>0&&e.append("skills",JSON.stringify(I)),A&&A.length>0&&e.append("locations",JSON.stringify(A)),m.default.post("/new/job-post",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.data.code?((0,h.default)("success",e.data.message,f.options),localStorage.setItem("postedUrl",e.data.url),F((0,y.updateUser)(e.data.user)),setTimeout((function(){return H.push("/new/job/posted")}),2e3)):(0,h.default)("error",e.data.message,f.options),E(!1)})).catch((function(e){E(!1),(0,h.default)("error",e.message,f.options)}))},size:"small",sx:v.next,disabled:R,children:R?(0,Z.jsx)(l.Z,{size:24,sx:{color:"white"}}):"Post my job"})]})]})]})]})}},63845:function(e,r,t){t.r(r);var s=t(31243).Z.create();s.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",s.defaults.headers.common.Accept="application/json",s.defaults.headers.common["Content-Type"]="application/json",s.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),s.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=s},67394:function(e,r,t){var s=t(64836);r.Z=void 0;var n=s(t(45649)),i=t(80184),a=(0,n.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");r.Z=a},83272:function(e,r,t){var s=t(64836);r.Z=void 0;var n=s(t(45649)),i=t(80184),a=(0,n.default)([(0,i.jsx)("path",{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"},"0"),(0,i.jsx)("path",{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"},"1")],"DoubleArrow");r.Z=a},87749:function(e,r,t){var s=t(64836);r.Z=void 0;var n=s(t(45649)),i=t(80184),a=(0,n.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");r.Z=a},87569:function(e,r,t){var s=t(64836);r.Z=void 0;var n=s(t(45649)),i=t(80184),a=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");r.Z=a},5462:function(){}}]);
//# sourceMappingURL=2178.55c057fd.chunk.js.map