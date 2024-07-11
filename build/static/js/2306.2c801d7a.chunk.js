"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[2306,8292,3850,3845],{64253:function(e,r,n){n.r(r);var s=n(1413),t=n(45987),a=n(93006),o=(n(72791),n(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,l=e.customError,c=(0,t.Z)(e,i),d=!1,u="";l&&(d=!0,u=l),r&&(d=r&&r.has(n)||!1,u=r&&r.first(n)||"");var x=(0,s.Z)((0,s.Z)({error:d,name:n,helperText:u},c),{},{value:c.value||""});return(0,o.jsx)(a.Z,(0,s.Z)({size:"small",variant:"outlined"},x))}},8292:function(e,r,n){n.r(r),n.d(r,{default:function(){return t}});var s=n(75985);function t(e,r,n){return"success"===e?s.Am.success(r,n):s.Am.error(r,n)}},49293:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var s=n(75985),t=(n(5462),n(80184));function a(){return(0,t.jsx)(s.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,n){n.r(r),n.d(r,{options:function(){return s}});var s={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},3285:function(e,r,n){n.r(r);var s=n(4942),t=n(1413),a=n(70885),o=n(72791),i=n(68870),l=n(20890),c=n(13400),d=n(13239),u=n(94721),x=n(36151),f=n(88471),m=n(67371),Z=n(46175),h=n(59505),p=n(64253),j=n(31783),g=n(63845),v=n(49293),b=n(59434),C=n(33850),y=n(8292),S=n(3437),w=n(41143),k=n(64880),I=n(80184),z=new j.ZP.Validator({email:"required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$"}),W=new j.ZP.Validator({address:"required"}),P=new j.ZP.Validator({contact_number:"required|max:11|numeric|regex:^09[0-9]{9}$"}),E={mainWrapper:{display:"flex",alignItems:"center",flexWrap:"wrap"},bigIcon:{mr:2,color:"green",fontSize:{xs:30,md:40}},editIcon:{fontSize:18,color:"blue"},iconButton:{ml:.5},left:{display:"flex",width:{xs:"100%",sm:"50%",md:"50%"},alignItems:"center",justifyContent:{xs:"center",sm:"left",md:"left"},mb:{xs:2,md:0}},right:{width:{xs:"100%",sm:"50%",md:"50%"}},title:{fontWeight:700,fontSize:{xs:14,md:18}},dataWrapper:{mt:1},data:{display:"flex",alignItems:"center"},center:{textAlign:{xs:"center",sm:"left",md:"left"}},divider:{mt:5,mb:5,boxShaodw:3}};r.default=function(e){var r=e.user,n=(0,b.I0)(),j=(0,k.k6)(),A=o.useState(!1),N=(0,a.Z)(A,2),T=N[0],O=N[1],B=o.useState(!1),_=(0,a.Z)(B,2),D=_[0],L=_[1],M=o.useState(!1),U=(0,a.Z)(M,2),q=U[0],K=U[1],V=o.useState(""),F=(0,a.Z)(V,2),R=F[0],H=F[1],Y=o.useState({values:{email:""},errors:z.errors}),$=(0,a.Z)(Y,2),G=$[0],J=$[1],Q=o.useState({values:{contact_number:""},errors:P.errors}),X=(0,a.Z)(Q,2),ee=X[0],re=X[1],ne=o.useState({values:{address:""},errors:W.errors}),se=(0,a.Z)(ne,2),te=se[0],ae=se[1],oe=function(e){K(!q),H(e)},ie=function(e){"Enter"===e.key&&("email"===R?le(G.values,z,"email"):"phone"===R?le(ee.values,P,"email"):le(te.values,W,"email"))},le=function(e,r,s){r.validateAll(e).then((function(e){e?"email"===s?(O(!0),g.default.post("/account/update/email",G.values).then((function(e){200===e.data.code?(n((0,S.updateUser)(e.data.user)),K(!1),H(""),J({values:{email:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):"phone"===s?(O(!0),g.default.post("/account/update/phone",ee.values).then((function(e){200===e.data.code?(n((0,S.updateUser)(e.data.user)),K(!1),H(""),re({values:{contact_number:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):(O(!0),g.default.post("/update/address",te.values).then((function(e){200===e.data.code?(n((0,S.updateUser)(e.data.user)),K(!1),H(""),ae({values:{address:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):"email"===s?J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:z.errors})})):"phone"===s?re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:P.errors})})):ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:W.errors})}))}))};return(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(v.default,{}),(0,I.jsx)(w.default,{open:D,title:"Delete you account?",message:"This will delete your account forever.",onClose:function(){return L(!1)},onConfirm:function(){g.default.delete("/account/terminate").then((function(e){200===e.data.code?((0,y.default)("success",e.data.message,C.options),localStorage.clear(),setTimeout((function(){return j.push("/login",300)}))):(0,y.default)("error",e.data.message,C.options)})).catch((function(e){(0,y.default)("error",e.message,C.options)}))}}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(m.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:"BASIC INFO"})]}),(0,I.jsxs)(i.Z,{sx:E.right,children:[(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Email"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("email")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsx)(i.Z,{sx:E.data,children:(0,I.jsx)(l.Z,{children:null===r||void 0===r?void 0:r.email})}),q&&"email"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New Email *"}),(0,I.jsx)(p.default,{name:"email",label:"New Email",size:"small",fullWidth:!0,onKeyPress:ie,value:G.values.email,onChange:function(e){var r=e.target.name,n=e.target.value;J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,s.Z)({},r,n))})}));var a=z.errors;z.validate(r,n).then((function(){J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:G.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("email")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(G.values,z,"email")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]}),(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Phone"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("phone")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsxs)(i.Z,{sx:E.data,children:[r.contact_number&&(0,I.jsx)(l.Z,{children:null===r||void 0===r?void 0:r.contact_number}),!r.contact_number&&(0,I.jsx)(l.Z,{children:"Not Set"})]}),q&&"phone"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New phone number *"}),(0,I.jsx)(p.default,{name:"contact_number",label:"Phone Number",size:"small",fullWidth:!0,onKeyPress:ie,value:ee.values.contact_number,onChange:function(e){var r=e.target.name,n=e.target.value;re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,s.Z)({},r,n))})}));var a=P.errors;P.validate(r,n).then((function(){re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:ee.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}},inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:11}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("phone")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(ee.values,P,"phone")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]}),(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Location"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("address")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsxs)(i.Z,{sx:E.data,children:[r.profile[0].address&&(0,I.jsx)(l.Z,{children:r.profile[0].address}),!r.profile[0].address&&(0,I.jsx)(l.Z,{children:"Not Set"})]}),q&&"address"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New Address *"}),(0,I.jsx)(p.default,{name:"address",label:"New Address",size:"small",fullWidth:!0,onKeyPress:ie,value:te.values.address,onChange:function(e){var r=e.target.name,n=e.target.value;ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,s.Z)({},r,n))})}));var a=W.errors;W.validate(r,n).then((function(){ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:te.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("address")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(te.values,W,"address")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]})]})]}),(0,I.jsx)(u.Z,{sx:E.divider}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(Z.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:" SYSTEM USAGE"})]}),(0,I.jsx)(i.Z,{sx:E.right,children:(0,I.jsx)(i.Z,{sx:E.center,children:(0,I.jsx)(l.Z,{children:"client"===r.role?"Hire only":"Work only"})})})]}),(0,I.jsx)(u.Z,{sx:E.divider}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(h.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:"DELETE ACCOUNT"})]}),(0,I.jsx)(i.Z,{sx:E.right,children:(0,I.jsx)(i.Z,{sx:E.center,children:(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",onClick:function(){return L(!0)},children:"Delete"})})})]}),(0,I.jsx)(u.Z,{sx:E.divider})]})}},1525:function(e,r,n){n.r(r);var s=n(4942),t=n(1413),a=n(70885),o=n(72791),i=n(68870),l=n(75335),c=n(20890),d=n(17133),u=n(68096),x=n(79012),f=n(85523),m=n(94454),Z=n(47071),h=n(80184);r.default=function(){var e=o.useState({contact:!0,offers:!1,proposals:!1,jobpost:!1}),r=(0,a.Z)(e,2),n=r[0],p=r[1],j=function(e){p((0,t.Z)((0,t.Z)({},n),{},(0,s.Z)({},e.target.name,e.target.checked)))},g=n.gilad,v=n.jason,b=n.antoine;return[g,v,b].filter((function(e){return e})).length,(0,h.jsxs)(i.Z,{sx:{p:2},children:[(0,h.jsxs)(i.Z,{sx:{display:"flex",mb:1},children:[(0,h.jsx)(l.Z,{sx:{mr:2,color:"green"}}),(0,h.jsx)(c.Z,{sx:{fontWeight:700},children:"EMAIL NOTIFICATIONS"})]}),(0,h.jsx)(i.Z,{sx:{display:"flex"},children:(0,h.jsxs)(u.Z,{sx:{m:3},component:"fieldset",variant:"standard",children:[(0,h.jsx)(d.Z,{component:"legend",children:" Subscribe to:"}),(0,h.jsxs)(x.Z,{children:[(0,h.jsx)(f.Z,{control:(0,h.jsx)(m.Z,{checked:g,onChange:j,name:"contact"}),label:"Contact Email"}),(0,h.jsx)(f.Z,{control:(0,h.jsx)(m.Z,{checked:v,onChange:j,name:"offers"}),label:"Offer Email"}),(0,h.jsx)(f.Z,{control:(0,h.jsx)(m.Z,{checked:b,onChange:j,name:"proposals"}),label:"Proposal Email"}),(0,h.jsx)(f.Z,{control:(0,h.jsx)(m.Z,{checked:b,onChange:j,name:"jobpost"}),label:"New Job Posting Email"})]}),(0,h.jsxs)(Z.Z,{children:["Or"," ",(0,h.jsx)("span",{style:{textDecoration:"underline",cursor:"pointer",color:"blue"},children:"unsubscribe"})," ","from all email at once."]})]})})]})}},18447:function(e,r,n){n.r(r);var s=n(4942),t=n(1413),a=n(70885),o=n(68870),i=n(20890),l=n(13400),c=n(63466),d=n(36151),u=n(13239),x=n(94721),f=n(72791),m=n(98891),Z=n(64253),h=n(88471),p=n(31783),j=n(87749),g=n(3746),v=n(20165),b=n(63845),C=n(8292),y=n(33850),S=n(49293),w=n(41143),k=n(64880),I=n(80184),z=new p.ZP.Validator({password:"required|min:5|max:20"}),W={mainWrapper:{display:"flex",alignItems:"center",flexWrap:"wrap"},bigIcon:{mr:2,color:"green",fontSize:{xs:30,md:40}},editIcon:{fontSize:18,color:"blue"},iconButton:{ml:.5},left:{display:"flex",width:{xs:"100%",sm:"50%",md:"50%"},alignItems:"center",justifyContent:{xs:"center",sm:"left",md:"left"},mb:{xs:2,md:0}},right:{width:{xs:"100%",sm:"50%",md:"50%"}},title:{fontWeight:700,fontSize:{xs:14,md:18}},dataWrapper:{mt:1},data:{display:"flex",alignItems:"center"},center:{textAlign:{xs:"center",sm:"left",md:"left"}},divider:{mt:5,mb:5,boxShaodw:3}};r.default=function(){var e=(0,k.k6)(),r=f.useState(!1),n=(0,a.Z)(r,2),p=n[0],P=n[1],E=f.useState(!1),A=(0,a.Z)(E,2),N=A[0],T=A[1],O=f.useState(!1),B=(0,a.Z)(O,2),_=B[0],D=B[1],L=f.useState(!1),M=(0,a.Z)(L,2),U=M[0],q=M[1],K=f.useState({values:{password:""},errors:z.errors}),V=(0,a.Z)(K,2),F=V[0],R=V[1],H=function(){q(!U)},Y=function(){z.validateAll(F.values).then((function(e){e?(T(!0),b.default.post("account/update/password",F.values).then((function(e){200===e.data.code?((0,C.default)("success",e.data.message,y.options),P(!0)):(0,C.default)("success",e.data.message,y.options),T(!1)})).catch((function(e){T(!1),(0,C.default)("success",e.message,y.options)}))):R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:z.errors})}))}))};return(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(S.default,{}),(0,I.jsx)(w.default,{open:p,title:"Continue logged in or sign out?",message:"You will need to login again with your new password if you proceed!",onClose:function(){return P(!1)},onConfirm:function(){localStorage.clear(),e.push("/login")}}),(0,I.jsxs)(o.Z,{sx:W.mainWrapper,children:[(0,I.jsxs)(o.Z,{sx:W.left,children:[(0,I.jsx)(m.Z,{sx:W.bigIcon}),(0,I.jsx)(i.Z,{sx:W.title,children:"PASSWORD"})]}),(0,I.jsx)(o.Z,{sx:W.right,children:(0,I.jsxs)(o.Z,{sx:W.dataWrapper,children:[(0,I.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(i.Z,{children:"change"}),(0,I.jsx)(l.Z,{sx:W.iconButton,onClick:H,children:(0,I.jsx)(h.Z,{sx:W.editIcon})})]}),U&&(0,I.jsxs)(o.Z,{children:[(0,I.jsxs)(o.Z,{sx:{mb:1},children:[(0,I.jsx)(i.Z,{sx:{fontSize:12},children:"New Password *"}),(0,I.jsx)(Z.default,{required:!0,name:"password",errors:F.errors,value:F.values.password,onChange:function(e){var r=e.target.name,n=e.target.value;R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,s.Z)({},r,n))})}));var a=z.errors;z.validate(r,n).then((function(){R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},onKeyPress:function(e){"Enter"===e.key&&Y()},size:"small",margin:"normal",fullWidth:!0,label:"New Password",type:_?"text":"password",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"},startAdornment:(0,I.jsx)(c.Z,{position:"start",children:(0,I.jsx)(j.Z,{})}),endAdornment:(0,I.jsx)(c.Z,{position:"end",children:(0,I.jsx)(l.Z,{onClick:function(){D(!_)},onMouseDown:function(e){e.preventDefault()},children:_?(0,I.jsx)(v.Z,{}):(0,I.jsx)(g.Z,{})})})}})]}),(0,I.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(d.Z,{variant:"outlined",color:"primary",size:"small",onClick:H,children:"Cancel"}),(0,I.jsx)(d.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:Y,disabled:N,children:N?(0,I.jsx)(u.Z,{size:24}):"Submit"})]})]})]})})]}),(0,I.jsx)(x.Z,{sx:W.divider})]})}},12306:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var s=n(70885),t=n(1413),a=n(45987),o=n(68870),i=n(39124),l=n(43896),c=n(72791),d=n(3285),u=n(18447),x=n(1525),f=n(59434),m=n(80184),Z=["children","value","index"],h={wrapper:{mt:10,p:2},MyAccountTabsWrapper:{backgroundColor:"#EEEEEE",borderRadius:3,p:2,boxShadow:5,width:{xs:"95%",md:"80%"},m:"0 auto"},main:{maxWidth:{xs:"100%",md:"90%"},m:"0 auto"}};function p(e){var r=e.children,n=e.value,s=e.index,i=(0,a.Z)(e,Z);return(0,m.jsx)(o.Z,(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:n!==s,id:"simple-tabpanel-".concat(s),"aria-labelledby":"simple-tab-".concat(s)},i),{},{children:n===s&&(0,m.jsx)(o.Z,{children:r})}))}function j(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function g(){var e=(0,f.v9)((function(e){return e.users.user})),r=c.useState(0),n=(0,s.Z)(r,2),a=n[0],Z=n[1];return(0,m.jsx)(o.Z,{sx:h.wrapper,children:(0,m.jsxs)(o.Z,{sx:h.MyAccountTabsWrapper,children:[(0,m.jsx)(o.Z,{children:(0,m.jsxs)(i.Z,{value:a,onChange:function(e,r){Z(r)},"aria-label":"basic tabs example",children:[(0,m.jsx)(l.Z,(0,t.Z)({label:"Settings"},j(0))),(0,m.jsx)(l.Z,(0,t.Z)({label:"Security"},j(1))),(0,m.jsx)(l.Z,(0,t.Z)({label:"Notifications"},j(2)))]})}),(0,m.jsxs)(o.Z,{sx:{mt:2},children:[(0,m.jsx)(p,{value:a,index:0,children:(0,m.jsx)(d.default,{user:e})}),(0,m.jsx)(p,{value:a,index:1,children:(0,m.jsx)(u.default,{user:e})}),(0,m.jsx)(p,{value:a,index:2,children:(0,m.jsx)(x.default,{user:e})})]})]})})}},63845:function(e,r,n){n.r(r);var s=n(31243).Z.create();s.defaults.baseURL="http://127.0.0.1:8000/api",s.defaults.headers.common.Accept="application/json",s.defaults.headers.common["Content-Type"]="application/json",s.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),s.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=s}}]);
//# sourceMappingURL=2306.2c801d7a.chunk.js.map