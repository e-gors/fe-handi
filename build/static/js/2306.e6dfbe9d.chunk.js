"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[2306,8292,3850,3845],{64253:function(e,r,s){s.r(r);var n=s(1413),t=s(45987),a=s(93006),o=(s(72791),s(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,s=e.name,l=e.customError,c=(0,t.Z)(e,i),d=!1,u="";l&&(d=!0,u=l),r&&(d=r&&r.has(s)||!1,u=r&&r.first(s)||"");var x=(0,n.Z)((0,n.Z)({error:d,name:s,helperText:u},c),{},{value:c.value||""});return(0,o.jsx)(a.Z,(0,n.Z)({size:"small",variant:"outlined"},x))}},8292:function(e,r,s){s.r(r),s.d(r,{default:function(){return t}});var n=s(75985);function t(e,r,s){return"success"===e?n.Am.success(r,s):n.Am.error(r,s)}},49293:function(e,r,s){s.r(r),s.d(r,{default:function(){return a}});var n=s(75985),t=(s(5462),s(80184));function a(){return(0,t.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,s){s.r(r),s.d(r,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},3285:function(e,r,s){s.r(r);var n=s(4942),t=s(1413),a=s(70885),o=s(72791),i=s(68870),l=s(20890),c=s(13400),d=s(13239),u=s(94721),x=s(36151),f=s(88471),m=s(67371),h=s(46175),Z=s(59505),p=s(64253),j=s(31783),g=s(63845),v=s(49293),b=s(59434),C=s(33850),y=s(8292),S=s(3437),w=s(41143),k=s(64880),I=s(80184),z=new j.ZP.Validator({email:"required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$"}),W=new j.ZP.Validator({address:"required"}),P=new j.ZP.Validator({contact_number:"required|max:11|numeric|regex:^09[0-9]{9}$"}),E={mainWrapper:{display:"flex",alignItems:"center",flexWrap:"wrap"},bigIcon:{mr:2,color:"green",fontSize:{xs:30,md:40}},editIcon:{fontSize:18,color:"blue"},iconButton:{ml:.5},left:{display:"flex",width:{xs:"100%",sm:"50%",md:"50%"},alignItems:"center",justifyContent:{xs:"center",sm:"left",md:"left"},mb:{xs:2,md:0}},right:{width:{xs:"100%",sm:"50%",md:"50%"}},title:{fontWeight:700,fontSize:{xs:14,md:18}},dataWrapper:{mt:1},data:{display:"flex",alignItems:"center"},center:{textAlign:{xs:"center",sm:"left",md:"left"}},divider:{mt:5,mb:5,boxShaodw:3}};r.default=function(e){var r=e.user,s=(0,b.I0)(),j=(0,k.k6)(),A=o.useState(!1),N=(0,a.Z)(A,2),T=N[0],O=N[1],B=o.useState(!1),_=(0,a.Z)(B,2),D=_[0],L=_[1],M=o.useState(!1),U=(0,a.Z)(M,2),q=U[0],K=U[1],V=o.useState(""),F=(0,a.Z)(V,2),R=F[0],H=F[1],Y=o.useState({values:{email:""},errors:z.errors}),$=(0,a.Z)(Y,2),G=$[0],J=$[1],Q=o.useState({values:{contact_number:""},errors:P.errors}),X=(0,a.Z)(Q,2),ee=X[0],re=X[1],se=o.useState({values:{address:""},errors:W.errors}),ne=(0,a.Z)(se,2),te=ne[0],ae=ne[1],oe=function(e){K(!q),H(e)},ie=function(e){"Enter"===e.key&&("email"===R?le(G.values,z,"email"):"phone"===R?le(ee.values,P,"email"):le(te.values,W,"email"))},le=function(e,r,n){r.validateAll(e).then((function(e){e?"email"===n?(O(!0),g.default.post("/account/update/email",G.values).then((function(e){200===e.data.code?(s((0,S.updateUser)(e.data.user)),K(!1),H(""),J({values:{email:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):"phone"===n?(O(!0),g.default.post("/account/update/phone",ee.values).then((function(e){200===e.data.code?(s((0,S.updateUser)(e.data.user)),K(!1),H(""),re({values:{contact_number:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):(O(!0),g.default.post("/update/address",te.values).then((function(e){200===e.data.code?(s((0,S.updateUser)(e.data.user)),K(!1),H(""),ae({values:{address:""}}),(0,y.default)("success",e.data.message,C.options)):(0,y.default)("error",e.data.message,C.options),O(!1)})).catch((function(e){O(!1),(0,y.default)("error",e.message,C.options)}))):"email"===n?J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:z.errors})})):"phone"===n?re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:P.errors})})):ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:W.errors})}))}))};return(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(v.default,{}),(0,I.jsx)(w.default,{open:D,title:"Delete you account?",message:"This will delete your account forever.",onClose:function(){return L(!1)},onConfirm:function(){g.default.delete("/account/terminate").then((function(e){200===e.data.code?((0,y.default)("success",e.data.message,C.options),localStorage.clear(),setTimeout((function(){return j.push("/login",300)}))):(0,y.default)("error",e.data.message,C.options)})).catch((function(e){(0,y.default)("error",e.message,C.options)}))}}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(m.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:"BASIC INFO"})]}),(0,I.jsxs)(i.Z,{sx:E.right,children:[(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Email"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("email")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsx)(i.Z,{sx:E.data,children:(0,I.jsx)(l.Z,{children:null===r||void 0===r?void 0:r.email})}),q&&"email"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New Email *"}),(0,I.jsx)(p.default,{name:"email",label:"New Email",size:"small",fullWidth:!0,onKeyPress:ie,value:G.values.email,onChange:function(e){var r=e.target.name,s=e.target.value;J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=z.errors;z.validate(r,s).then((function(){J((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:G.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("email")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(G.values,z,"email")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]}),(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Phone"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("phone")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsxs)(i.Z,{sx:E.data,children:[r.contact_number&&(0,I.jsx)(l.Z,{children:null===r||void 0===r?void 0:r.contact_number}),!r.contact_number&&(0,I.jsx)(l.Z,{children:"Not Set"})]}),q&&"phone"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New phone number *"}),(0,I.jsx)(p.default,{name:"contact_number",label:"Phone Number",size:"small",fullWidth:!0,onKeyPress:ie,value:ee.values.contact_number,onChange:function(e){var r=e.target.name,s=e.target.value;re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=P.errors;P.validate(r,s).then((function(){re((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:ee.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}},inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:11}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("phone")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(ee.values,P,"phone")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]}),(0,I.jsxs)(i.Z,{sx:E.dataWrapper,children:[(0,I.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(l.Z,{children:"Location"}),(0,I.jsx)(c.Z,{sx:E.iconButton,onClick:function(){return oe("address")},children:(0,I.jsx)(f.Z,{sx:E.editIcon})})]}),(0,I.jsxs)(i.Z,{sx:E.data,children:[r.profile[0].address&&(0,I.jsx)(l.Z,{children:r.profile[0].address}),!r.profile[0].address&&(0,I.jsx)(l.Z,{children:"Not Set"})]}),q&&"address"===R&&(0,I.jsxs)(i.Z,{children:[(0,I.jsxs)(i.Z,{sx:{mb:1},children:[(0,I.jsx)(l.Z,{sx:{fontSize:12},children:"New Address *"}),(0,I.jsx)(p.default,{name:"address",label:"New Address",size:"small",fullWidth:!0,onKeyPress:ie,value:te.values.address,onChange:function(e){var r=e.target.name,s=e.target.value;ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=W.errors;W.validate(r,s).then((function(){ae((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},errors:te.errors,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}}})]}),(0,I.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return oe("address")},children:"Cancel"}),(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:function(){return le(te.values,W,"address")},disabled:T,children:T?(0,I.jsx)(d.Z,{size:24}):"Submit"})]})]})]})]})]}),(0,I.jsx)(u.Z,{sx:E.divider}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(h.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:" SYSTEM USAGE"})]}),(0,I.jsx)(i.Z,{sx:E.right,children:(0,I.jsx)(i.Z,{sx:E.center,children:(0,I.jsx)(l.Z,{children:"client"===r.role?"Hire only":"Work only"})})})]}),(0,I.jsx)(u.Z,{sx:E.divider}),(0,I.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,I.jsxs)(i.Z,{sx:E.left,children:[(0,I.jsx)(Z.Z,{sx:E.bigIcon}),(0,I.jsx)(l.Z,{sx:E.title,children:"DELETE ACCOUNT"})]}),(0,I.jsx)(i.Z,{sx:E.right,children:(0,I.jsx)(i.Z,{sx:E.center,children:(0,I.jsx)(x.Z,{variant:"contained",color:"error",size:"small",onClick:function(){return L(!0)},children:"Delete"})})})]}),(0,I.jsx)(u.Z,{sx:E.divider})]})}},1525:function(e,r,s){s.r(r);var n=s(4942),t=s(1413),a=s(70885),o=s(72791),i=s(68870),l=s(75335),c=s(20890),d=s(17133),u=s(68096),x=s(79012),f=s(85523),m=s(94454),h=s(47071),Z=s(80184);r.default=function(){var e=o.useState({contact:!0,offers:!1,proposals:!1,jobpost:!1}),r=(0,a.Z)(e,2),s=r[0],p=r[1],j=function(e){p((0,t.Z)((0,t.Z)({},s),{},(0,n.Z)({},e.target.name,e.target.checked)))},g=s.gilad,v=s.jason,b=s.antoine;return[g,v,b].filter((function(e){return e})).length,(0,Z.jsxs)(i.Z,{sx:{p:2},children:[(0,Z.jsxs)(i.Z,{sx:{display:"flex",mb:1},children:[(0,Z.jsx)(l.Z,{sx:{mr:2,color:"green"}}),(0,Z.jsx)(c.Z,{sx:{fontWeight:700},children:"EMAIL NOTIFICATIONS"})]}),(0,Z.jsx)(i.Z,{sx:{display:"flex"},children:(0,Z.jsxs)(u.Z,{sx:{m:3},component:"fieldset",variant:"standard",children:[(0,Z.jsx)(d.Z,{component:"legend",children:" Subscribe to:"}),(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(f.Z,{control:(0,Z.jsx)(m.Z,{checked:g,onChange:j,name:"contact"}),label:"Contact Email"}),(0,Z.jsx)(f.Z,{control:(0,Z.jsx)(m.Z,{checked:v,onChange:j,name:"offers"}),label:"Offer Email"}),(0,Z.jsx)(f.Z,{control:(0,Z.jsx)(m.Z,{checked:b,onChange:j,name:"proposals"}),label:"Proposal Email"}),(0,Z.jsx)(f.Z,{control:(0,Z.jsx)(m.Z,{checked:b,onChange:j,name:"jobpost"}),label:"New Job Posting Email"})]}),(0,Z.jsxs)(h.Z,{children:["Or"," ",(0,Z.jsx)("span",{style:{textDecoration:"underline",cursor:"pointer",color:"blue"},children:"unsubscribe"})," ","from all email at once."]})]})})]})}},18447:function(e,r,s){s.r(r);var n=s(4942),t=s(1413),a=s(70885),o=s(68870),i=s(20890),l=s(13400),c=s(63466),d=s(36151),u=s(13239),x=s(94721),f=s(72791),m=s(98891),h=s(64253),Z=s(88471),p=s(31783),j=s(87749),g=s(3746),v=s(20165),b=s(63845),C=s(8292),y=s(33850),S=s(49293),w=s(41143),k=s(64880),I=s(80184),z=new p.ZP.Validator({password:"required|min:5|max:20"}),W={mainWrapper:{display:"flex",alignItems:"center",flexWrap:"wrap"},bigIcon:{mr:2,color:"green",fontSize:{xs:30,md:40}},editIcon:{fontSize:18,color:"blue"},iconButton:{ml:.5},left:{display:"flex",width:{xs:"100%",sm:"50%",md:"50%"},alignItems:"center",justifyContent:{xs:"center",sm:"left",md:"left"},mb:{xs:2,md:0}},right:{width:{xs:"100%",sm:"50%",md:"50%"}},title:{fontWeight:700,fontSize:{xs:14,md:18}},dataWrapper:{mt:1},data:{display:"flex",alignItems:"center"},center:{textAlign:{xs:"center",sm:"left",md:"left"}},divider:{mt:5,mb:5,boxShaodw:3}};r.default=function(){var e=(0,k.k6)(),r=f.useState(!1),s=(0,a.Z)(r,2),p=s[0],P=s[1],E=f.useState(!1),A=(0,a.Z)(E,2),N=A[0],T=A[1],O=f.useState(!1),B=(0,a.Z)(O,2),_=B[0],D=B[1],L=f.useState(!1),M=(0,a.Z)(L,2),U=M[0],q=M[1],K=f.useState({values:{password:""},errors:z.errors}),V=(0,a.Z)(K,2),F=V[0],R=V[1],H=function(){q(!U)},Y=function(){z.validateAll(F.values).then((function(e){e?(T(!0),b.default.post("account/update/password",F.values).then((function(e){200===e.data.code?((0,C.default)("success",e.data.message,y.options),P(!0)):(0,C.default)("success",e.data.message,y.options),T(!1)})).catch((function(e){T(!1),(0,C.default)("success",e.message,y.options)}))):R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:z.errors})}))}))};return(0,I.jsxs)(o.Z,{children:[(0,I.jsx)(S.default,{}),(0,I.jsx)(w.default,{open:p,title:"Continue logged in or sign out?",message:"You will need to login again with your new password if you proceed!",onClose:function(){return P(!1)},onConfirm:function(){localStorage.clear(),e.push("/login")}}),(0,I.jsxs)(o.Z,{sx:W.mainWrapper,children:[(0,I.jsxs)(o.Z,{sx:W.left,children:[(0,I.jsx)(m.Z,{sx:W.bigIcon}),(0,I.jsx)(i.Z,{sx:W.title,children:"PASSWORD"})]}),(0,I.jsx)(o.Z,{sx:W.right,children:(0,I.jsxs)(o.Z,{sx:W.dataWrapper,children:[(0,I.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(i.Z,{children:"change"}),(0,I.jsx)(l.Z,{sx:W.iconButton,onClick:H,children:(0,I.jsx)(Z.Z,{sx:W.editIcon})})]}),U&&(0,I.jsxs)(o.Z,{children:[(0,I.jsxs)(o.Z,{sx:{mb:1},children:[(0,I.jsx)(i.Z,{sx:{fontSize:12},children:"New Password *"}),(0,I.jsx)(h.default,{required:!0,name:"password",errors:F.errors,value:F.values.password,onChange:function(e){var r=e.target.name,s=e.target.value;R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=z.errors;z.validate(r,s).then((function(){R((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))},onKeyPress:function(e){"Enter"===e.key&&Y()},size:"small",margin:"normal",fullWidth:!0,label:"New Password",type:_?"text":"password",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"},startAdornment:(0,I.jsx)(c.Z,{position:"start",children:(0,I.jsx)(j.Z,{})}),endAdornment:(0,I.jsx)(c.Z,{position:"end",children:(0,I.jsx)(l.Z,{onClick:function(){D(!_)},onMouseDown:function(e){e.preventDefault()},children:_?(0,I.jsx)(v.Z,{}):(0,I.jsx)(g.Z,{})})})}})]}),(0,I.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"right"},children:[(0,I.jsx)(d.Z,{variant:"outlined",color:"primary",size:"small",onClick:H,children:"Cancel"}),(0,I.jsx)(d.Z,{variant:"contained",color:"error",size:"small",sx:{ml:1},onClick:Y,disabled:N,children:N?(0,I.jsx)(u.Z,{size:24}):"Submit"})]})]})]})})]}),(0,I.jsx)(x.Z,{sx:W.divider})]})}},12306:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});var n=s(70885),t=s(1413),a=s(45987),o=s(68870),i=s(39124),l=s(43896),c=s(72791),d=s(3285),u=s(18447),x=s(1525),f=s(59434),m=s(80184),h=["children","value","index"],Z={wrapper:{mt:10,p:2},MyAccountTabsWrapper:{backgroundColor:"#EEEEEE",borderRadius:3,p:2,boxShadow:5,width:{xs:"95%",md:"80%"},m:"0 auto"},main:{maxWidth:{xs:"100%",md:"90%"},m:"0 auto"}};function p(e){var r=e.children,s=e.value,n=e.index,i=(0,a.Z)(e,h);return(0,m.jsx)(o.Z,(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:s!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),{},{children:s===n&&(0,m.jsx)(o.Z,{children:r})}))}function j(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function g(){var e=(0,f.v9)((function(e){return e.users.user})),r=c.useState(0),s=(0,n.Z)(r,2),a=s[0],h=s[1];return(0,m.jsx)(o.Z,{sx:Z.wrapper,children:(0,m.jsxs)(o.Z,{sx:Z.MyAccountTabsWrapper,children:[(0,m.jsx)(o.Z,{children:(0,m.jsxs)(i.Z,{value:a,onChange:function(e,r){h(r)},"aria-label":"basic tabs example",children:[(0,m.jsx)(l.Z,(0,t.Z)({label:"Settings"},j(0))),(0,m.jsx)(l.Z,(0,t.Z)({label:"Security"},j(1))),(0,m.jsx)(l.Z,(0,t.Z)({label:"Notifications"},j(2)))]})}),(0,m.jsxs)(o.Z,{sx:{mt:2},children:[(0,m.jsx)(p,{value:a,index:0,children:(0,m.jsx)(d.default,{user:e})}),(0,m.jsx)(p,{value:a,index:1,children:(0,m.jsx)(u.default,{user:e})}),(0,m.jsx)(p,{value:a,index:2,children:(0,m.jsx)(x.default,{user:e})})]})]})})}},63845:function(e,r,s){s.r(r);var n=s(31243).Z.create();n.defaults.baseURL="http://localhost:8000/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=n}}]);
//# sourceMappingURL=2306.e6dfbe9d.chunk.js.map