"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6642,8292,3850,3679,4394,5909,3845],{64253:function(e,r,n){n.r(r);var t=n(1413),a=n(45987),s=n(93006),o=(n(72791),n(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,l=e.customError,c=(0,a.Z)(e,i),u=!1,d="";l&&(u=!0,d=l),r&&(u=r&&r.has(n)||!1,d=r&&r.first(n)||"");var f=(0,t.Z)((0,t.Z)({error:u,name:n,helperText:d},c),{},{value:c.value||""});return(0,o.jsx)(s.Z,(0,t.Z)({size:"small",variant:"outlined"},f))}},8292:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(75985);function a(e,r,n){return"success"===e?t.Am.success(r,n):t.Am.error(r,n)}},49293:function(e,r,n){n.r(r),n.d(r,{default:function(){return s}});var t=n(75985),a=(n(5462),n(80184));function s(){return(0,a.jsx)(t.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,n){n.r(r),n.d(r,{options:function(){return t}});var t={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},11062:function(e,r,n){n.r(r);var t=n(68870),a=n(20792),s=n(20890),o=n(13400),i=(n(72791),n(86711)),l=n(55732),c=n(69455),u=n(49440),d=n(61434),f=n(53679),h=n(64394),m=n(83637),p=n(52447),x=n(99355),Z=n(59434),g=n(15381),j=n(35909),v=n(80184),C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",md:800},bgcolor:"background.paper",boxShadow:24,borderRadius:3};r.default=function(e){var r=e.type,n=e.open,b=e.handleClose,k=(0,Z.v9)((function(e){return e.users.user})),w=k&&k,S=w.profile,y=w.experience,z=S&&S[0],F=z.first_name,I=z.last_name,P=z.address,_={first_name:F,last_name:I};return(0,v.jsx)(t.Z,{children:(0,v.jsx)(a.Z,{open:n,onClose:b,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsx)(t.Z,{sx:C,children:(0,v.jsxs)(t.Z,{sx:{p:2},children:[(0,v.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,v.jsx)(s.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:"bold",mb:5},children:r}),(0,v.jsx)(o.Z,{onClick:b,children:(0,v.jsx)(i.Z,{})})]}),(0,v.jsxs)(t.Z,{children:["Background Image"===r&&(0,v.jsx)(l.default,{handleClose:b,onConfirm:b}),"Profile Image"===r&&(0,v.jsx)(c.default,{handleClose:b,onConfirm:b}),"Social Networks"===r&&(0,v.jsx)(m.default,{handleClose:b,onConfirm:b}),("Facebook"===r||"Twitter"===r||"Instagram"===r)&&(0,v.jsx)(p.default,{type:r,handleClose:b,onConfirm:b}),"Background"===r&&(0,v.jsx)(d.default,{handleClose:b,onConfirm:b}),"Headline"===r&&(0,v.jsx)(u.default,{handleClose:b,onConfirm:b}),"Categories"===r&&(0,v.jsx)(f.default,{handleClose:b,onConfirm:b}),"Skills"===r&&(0,v.jsx)(h.default,{handleClose:b,onConfirm:b}),"Fullname"===r&&(0,v.jsx)(x.default,{handleClose:b,onConfirm:b,full_name:_}),"Address"===r&&(0,v.jsx)(g.default,{handleClose:b,onConfirm:b,adds:P}),"Address"===r&&(0,v.jsx)(j.default,{handleClose:b,onConfirm:b,expers:y})]})]})})})})}},15381:function(e,r,n){n.r(r);var t=n(4942),a=n(1413),s=n(70885),o=n(68870),i=n(20890),l=n(36151),c=n(13239),u=n(72791),d=n(64253),f=n(31783),h=n(63845),m=n(59434),p=n(8292),x=n(33850),Z=n(3437),g=n(49293),j=n(80184),v=new f.ZP.Validator({address:"required"});r.default=function(e){var r=e.adds,n=e.handleClose,f=e.onConfirm,C=(0,m.I0)(),b=u.useState(!1),k=(0,s.Z)(b,2),w=k[0],S=k[1],y=u.useState({values:{address:""},errors:v.errors}),z=(0,s.Z)(y,2),F=z[0],I=z[1];return u.useEffect((function(){r&&I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:{address:r}})}))}),[]),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(g.default,{}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(i.Z,{children:"Address *"}),(0,j.jsx)(d.default,{fullWidth:!0,label:"Address",name:"address",value:F.values.address,errors:F.errors,onChange:function(e){var r=e.target.name,n=e.target.value;I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},r,n))})}));var s=v.errors;v.validate(r,n).then((function(e){e||I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:s})}))}))}})]}),(0,j.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,j.jsx)(l.Z,{size:"small",variant:"outlined",onClick:n,children:"Cancel"}),(0,j.jsx)(l.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){v.validateAll(F.values).then((function(e){e?(S(!0),h.default.post("update/address",F.values).then((function(e){200===e.data.code?(C((0,Z.updateUser)(e.data.user)),(0,p.default)("success",e.data.message,x.options),f()):(0,p.default)("error",e.data.message,x.options),S(!1)})).catch((function(e){S(!1),(0,p.default)("error",e.message,x.options)}))):I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:v.errors})}))}))},disabled:w,children:w?(0,j.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},61434:function(e,r,n){n.r(r);var t=n(70885),a=n(68870),s=n(47071),o=n(36151),i=n(13239),l=n(72791),c=(n(64253),n(59434)),u=n(63845),d=n(8292),f=n(33850),h=n(49293),m=n(3437),p=n(66770),x=n.n(p),Z=(n(86009),n(80184));r.default=function(e){var r=e.handleClose,n=e.onConfirm,p=(0,c.I0)(),g=(0,c.v9)((function(e){return e.users.user})).profile,j=l.useState(null),v=(0,t.Z)(j,2),C=v[0],b=v[1],k=l.useState(),w=(0,t.Z)(k,2),S=w[0],y=w[1],z=l.useState(!1),F=(0,t.Z)(z,2),I=F[0],P=F[1];return l.useEffect((function(){g[0]&&y(g[0].background)}),[]),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(h.default,{}),(0,Z.jsx)(a.Z,{children:(0,Z.jsxs)("form",{encType:"multipart/form-data",children:[(0,Z.jsxs)(a.Z,{sx:{".ql-editor":{height:200}},children:[(0,Z.jsx)(x(),{theme:"snow",name:"job_description",value:S,onChange:function(e,r,n,t){y(e),e.length<=51?b("Background characters must be at least 50 or more."):b(null)},placeholder:"Describe yourself in words so that workers will be able to know your worth.",style:{backgroundColor:"white"}}),C&&(0,Z.jsx)(s.Z,{error:!0,children:C})]}),(0,Z.jsxs)(a.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,Z.jsx)(o.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,Z.jsx)(o.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){S&&0!==S.trim().length?C?(0,d.default)("error",C,f.options):function(){P(!0);var e=new FormData;e.append("background",S),u.default.post("update/background",e).then((function(e){200===e.data.code?(P(!1),p((0,m.updateUser)(e.data.user)),(0,d.default)("success",e.data.message,f.options),n()):(0,d.default)("error",e.data.message,f.options)})).catch((function(e){P(!1),(0,d.default)("error",e.message,f.options)}))}():b("Job Description is required.")},disabled:I,children:I?(0,Z.jsx)(i.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})})]})}},49440:function(e,r,n){n.r(r);var t=n(4942),a=n(1413),s=n(70885),o=n(68870),i=n(47071),l=n(36151),c=n(13239),u=n(72791),d=n(64253),f=n(59434),h=n(63845),m=n(8292),p=n(33850),x=n(49293),Z=n(3437),g=n(31783),j=n(80184),v=new g.ZP.Validator({about:"required|max:100"});r.default=function(e){var r=e.handleClose,n=e.onConfirm,g=(0,f.I0)(),C=(0,f.v9)((function(e){return e.users.user})).profile[0].about,b=u.useState({values:{about:""},errors:v.errors}),k=(0,s.Z)(b,2),w=k[0],S=k[1],y=u.useState(0),z=(0,s.Z)(y,2),F=z[0],I=z[1],P=u.useState(!1),_=(0,s.Z)(P,2),T=_[0],W=_[1];return u.useEffect((function(){C&&(S((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:{about:C}})})),I(C.length))}),[]),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(x.default,{}),(0,j.jsxs)(o.Z,{children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(d.default,{fullWidth:!0,multiline:!0,label:"Update Bio",name:"about",onChange:function(e){var r=e.target.value,n=e.target.name;S((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},n,r))})}));var s=v.errors;v.validate(n,r).then((function(e){e||S((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:s})}))}))},onKeyUp:function(e){var r=e.target.value;I(r.length)},value:w.values.about,errors:w.errors}),(0,j.jsxs)(i.Z,{sx:{color:100===F?"green":"red",textAlign:"right"},children:[F,"/100"]})]}),(0,j.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,j.jsx)(l.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,j.jsx)(l.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){v.validateAll(w.values).then((function(e){e?(W(!0),h.default.post("/update/about",w.values).then((function(e){200===e.data.code?(g((0,Z.updateUser)(e.data.user)),(0,m.default)("success",e.data.message,p.options),n()):(0,m.default)("error",e.data.message,p.options),W(!1)})).catch((function(e){W(!1),(0,m.default)("error",e.message,p.options)}))):S((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:v.errors})}))}))},disabled:T,children:T?(0,j.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})]})}},53679:function(e,r,n){n.r(r);n(72791);var t=n(80184);r.default=function(e){return e.handleClose,e.onConfirm,(0,t.jsx)("div",{children:"UpdateCategories"})}},99355:function(e,r,n){n.r(r);var t=n(4942),a=n(1413),s=n(70885),o=n(68870),i=n(20890),l=n(36151),c=n(13239),u=n(72791),d=n(64253),f=n(31783),h=n(63845),m=n(59434),p=n(8292),x=n(33850),Z=n(3437),g=n(49293),j=n(80184),v=new f.ZP.Validator({first_name:"required",last_name:"required"});r.default=function(e){var r=e.full_name,n=e.handleClose,f=e.onConfirm,C=(0,m.I0)(),b=u.useState(!1),k=(0,s.Z)(b,2),w=k[0],S=k[1],y=u.useState({values:{first_name:"",last_name:""},errors:v.errors}),z=(0,s.Z)(y,2),F=z[0],I=z[1];u.useEffect((function(){r&&I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)({},r)})}))}),[]);var P=function(e){var r=e.target.name,n=e.target.value;I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},r,n))})}));var s=v.errors;v.validate(r,n).then((function(e){e||I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:s})}))}))};return(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(g.default,{}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(i.Z,{children:"First Name *"}),(0,j.jsx)(d.default,{fullWidth:!0,label:"First Name",name:"first_name",value:F.values.first_name,errors:F.errors,onChange:P})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(i.Z,{children:"Last Name *"}),(0,j.jsx)(d.default,{fullWidth:!0,label:"Last Name",name:"last_name",value:F.values.last_name,errors:F.errors,onChange:P})]}),(0,j.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,j.jsx)(l.Z,{size:"small",variant:"outlined",onClick:n,children:"Cancel"}),(0,j.jsx)(l.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){v.validateAll(F.values).then((function(e){e?(S(!0),h.default.post("update/fullname",F.values).then((function(e){200===e.data.code?(C((0,Z.updateUser)(e.data.user)),(0,p.default)("success",e.data.message,x.options),f()):(0,p.default)("error",e.data.message,x.options),S(!1)})).catch((function(e){S(!1),(0,p.default)("error",e.message,x.options)}))):I((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:v.errors})}))}))},disabled:w,children:w?(0,j.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},64394:function(e,r,n){n.r(r);n(72791);var t=n(80184);r.default=function(e){return e.handleClose,e.onConfirm,(0,t.jsx)("div",{children:"UpdateSkills"})}},52447:function(e,r,n){n.r(r);var t=n(4942),a=n(1413),s=n(70885),o=n(68870),i=n(20890),l=n(47071),c=n(36151),u=n(13239),d=n(72791),f=n(64253),h=n(44045),m=n(74668),p=n(21880),x=n(63845),Z=n(8292),g=n(33850),j=n(49293),v=n(59434),C=n(3437),b=n(44238),k=n(80184),w={iconTextWrapper:{mb:5},links:{overflow:"hidden",textOverflow:"ellipsis"},facebookIcon:{fontSize:{xs:50,sm:80,md:120},color:"blue"},instagramIcon:{fontSize:{xs:50,sm:80,md:120},color:"#F04C66"}};r.default=function(e){var r=e.handleClose,n=e.onConfirm,S=e.type,y=(0,v.I0)(),z=d.useState({values:{facebook:""}}),F=(0,s.Z)(z,2),I=F[0],P=F[1],_=d.useState(null),T=(0,s.Z)(_,2),W=T[0],U=T[1],R=d.useState(!1),A=(0,s.Z)(R,2),B=A[0],L=A[1];d.useEffect((function(){"Instagram"===S&&P({values:{instagram:""}}),"Twitter"===S&&P({values:{twitter:""}})}),[S]);var q=function(e){var r=e.target.name,n=e.target.value;if(P((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},r,n))})})),!(0,b.SocialLinkRegex)(n,r))return U("Invalid ".concat(r," url"));U(null)},E=function(){if(L(!0),W)return(0,Z.default)("error",W,g.options),void L(!1);x.default.post("/update/social-networks",I.values).then((function(e){200===e.data.code?((0,Z.default)("success",e.data.message,g.options),y((0,C.updateUser)(e.data.user)),n()):(0,Z.default)("error",e.data.message,g.options),L(!1)})).catch((function(e){L(!1),(0,Z.default)("error",e.message,g.options)}))};return(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(j.default,{}),"Facebook"===S&&(0,k.jsxs)(o.Z,{children:[(0,k.jsxs)(o.Z,{align:"center",sx:w.iconTextWrapper,children:[(0,k.jsx)(h.Z,{sx:w.facebookIcon}),(0,k.jsx)(i.Z,{sx:w.links,children:"Please enter url like: https://www.facebook.com/your_username"})]}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(f.default,{fullWidth:!0,name:"facebook",label:"Facebook Link",value:I.values.facebook,onChange:q}),W&&(0,k.jsx)(l.Z,{error:!0,children:W})]})]}),"Instagram"===S&&(0,k.jsxs)(o.Z,{children:[(0,k.jsxs)(o.Z,{align:"center",sx:w.iconTextWrapper,children:[(0,k.jsx)(p.Z,{sx:w.instagramIcon}),(0,k.jsx)(i.Z,{sx:w.links,children:"Please enter url like: https://www.instagram.com/your_username"})]}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(f.default,{fullWidth:!0,name:"instagram",label:"Instagram Link",value:I.values.instagram,onChange:q}),W&&(0,k.jsx)(l.Z,{error:!0,children:W})]})]}),"Twitter"===S&&(0,k.jsxs)(o.Z,{children:[(0,k.jsxs)(o.Z,{align:"center",sx:w.iconTextWrapper,children:[(0,k.jsx)(m.Z,{sx:w.facebookIcon}),(0,k.jsx)(i.Z,{sx:w.links,children:"Please enter url like: https://twitter.com/your_username"})]}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(f.default,{fullWidth:!0,name:"twitter",label:"Twitter Link",value:I.values.twitter,onChange:q}),W&&(0,k.jsx)(l.Z,{error:!0,children:W})]})]}),(0,k.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,k.jsx)(c.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,k.jsx)(c.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){"Instagram"===S?I.values.instagram||I.values.instagram.length>0?E():(0,Z.default)("error","".concat(S," Url is required!"),g.options):"Twitter"===S?I.values.twitter||I.values.twitter.length>0?E():(0,Z.default)("error","".concat(S," Url is required!"),g.options):I.values.facebook||I.values.facebook.length>0?E():(0,Z.default)("error","".concat(S," Url is required!"),g.options)},disabled:B,children:B?(0,k.jsx)(u.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},83637:function(e,r,n){n.r(r);var t=n(70885),a=n(68870),s=n(20890),o=n(36151),i=n(13239),l=n(72791),c=n(44045),u=n(74668),d=n(21880),f=n(68943),h=n(11062),m=n(59434),p=n(63845),x=n(3437),Z=n(80184),g={main:{display:"flex",justifyContent:"space-between",mb:1},leftWrapper:{display:"flex"},socialLabels:{ml:1},icons:{color:"blue"}};r.default=function(){var e=(0,m.v9)((function(e){return e.users.user})),r=(0,m.I0)(),n=e.profile[0],j=n.facebook_url,v=n.instagram_url,C=n.twitter_url,b=l.useState(!1),k=(0,t.Z)(b,2),w=k[0],S=k[1],y=l.useState(!1),z=(0,t.Z)(y,2),F=z[0],I=z[1],P=l.useState(""),_=(0,t.Z)(P,2),T=_[0],W=_[1],U=[{icon:(0,Z.jsx)(c.Z,{sx:g.icons}),label:"Facebook",status:j?"yes":"no"},{icon:(0,Z.jsx)(d.Z,{sx:g.icons}),label:"Instagram",status:v?"yes":"no"},{icon:(0,Z.jsx)(u.Z,{sx:g.icons}),label:"Twitter",status:C?"yes":"no"}];return(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(h.default,{open:F,type:T,handleClose:function(){I(!1)}}),U&&U.map((function(e,n){return(0,Z.jsxs)(a.Z,{sx:g.main,children:[(0,Z.jsxs)(a.Z,{sx:g.leftWrapper,children:[(0,Z.jsx)(f.Z,{}),e.icon,(0,Z.jsx)(s.Z,{sx:g.socialLabels,children:e.label})]}),"no"===e.status&&(0,Z.jsx)(o.Z,{variant:"contained",color:"primary",size:"small",onClick:function(){return function(e){I(!0),W(e)}(e.label)},children:"Add Account"}),"yes"===e.status&&(0,Z.jsx)(o.Z,{variant:"contained",color:"error",size:"small",disabled:w,onClick:function(){return n=e.label,S(!0),void p.default.delete("/delete/social-networks/".concat(n)).then((function(e){200===e.data.code&&(r((0,x.updateUser)(e.data.user)),S(!1)),S(!1)})).catch((function(e){S(!1)}));var n},children:w?(0,Z.jsx)(i.Z,{size:24,sx:{color:"white"},thickness:5}):"Remove"})]},n)}))]})}},55732:function(e,r,n){n.r(r);var t=n(74165),a=n(15861),s=n(70885),o=n(68870),i=n(20890),l=n(36151),c=n(13239),u=n(72791),d=n(8292),f=n(49293),h=n(33850),m=n(63845),p=n(59434),x=n(3437),Z=n(97005),g=n(35611),j=n(44238),v=n(80184);r.default=function(e){var r=e.handleClose,n=e.onConfirm,C=(0,p.I0)(),b=u.useState(!1),k=(0,s.Z)(b,2),w=k[0],S=k[1],y=u.useState(null),z=(0,s.Z)(y,2),F=z[0],I=z[1],P=u.useState({x:0,y:0}),_=(0,s.Z)(P,2),T=_[0],W=_[1],U=u.useState(1),R=(0,s.Z)(U,2),A=R[0],B=R[1],L=u.useState(null),q=(0,s.Z)(L,2),E=q[0],O=q[1],D=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,a,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,(0,j.CropImage)(F,E);case 4:return r=e.sent,(a=new FormData).append("background_img",r),e.next=9,m.default.post("/upload/bg-image",a,{headers:{"Content-Type":"multipart/form-data"}});case 9:200===(s=e.sent).data.code?(I(null),C((0,x.updateUser)(s.data.user)),(0,d.default)("success",s.data.message,h.options),n()):(0,d.default)("error",s.data.message,h.options),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),413===e.t0.response.status?(0,d.default)("error","Image is too large. Please choose another image!",h.options):(0,d.default)("error",e.t0.message,h.options);case 16:return e.prev=16,S(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(o.Z,{sx:{width:"100%",height:"100%"},children:[(0,v.jsx)(f.default,{}),(0,v.jsx)("form",{encType:"multipart/form-data",children:(0,v.jsx)("input",{accept:"image/*",id:"image-upload",type:"file",style:{display:"none"},onChange:function(e){var r=e.target.files[0];if(r){var n=new FileReader;n.readAsDataURL(r),n.onload=function(e){I(e.target.result)}}},required:!0})}),!F&&(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(o.Z,{sx:{width:{xs:"100%",sm:"50%",md:"50%"},m:"0 auto"},children:(0,v.jsxs)(o.Z,{sx:{fontSize:{xs:12,md:14}},children:[(0,v.jsx)(i.Z,{component:"li",sx:{fontSize:"inherit"},children:"Recommended dimensions 1440 x 180 px"}),(0,v.jsx)(i.Z,{component:"li",sx:{fontSize:"inherit"},children:"JPG, JPEG, PNG"}),(0,v.jsx)(i.Z,{component:"li",sx:{fontSize:"inherit"},children:"Max size: 5mb"})]})}),(0,v.jsx)(o.Z,{sx:{mt:4},align:"center",children:(0,v.jsx)("label",{htmlFor:"image-upload",children:(0,v.jsx)(l.Z,{variant:"outlined",color:"primary",component:"span",startIcon:(0,v.jsx)(g.Z,{}),sx:{mt:2},children:"choose an image"})})})]}),F&&(0,v.jsx)(o.Z,{sx:{position:"relative",width:"100%",height:"100%",minHeight:260,p:2,img:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center"}},children:(0,v.jsx)(Z.ZP,{image:F,crop:T,aspect:4,onCropChange:function(e,r){W(e),B(r)},cropShape:"rect",showGrid:!0,zoomWithScroll:!0,restrictPosition:!0,zoom:A,onZoomChange:B,dragCrop:!0,dragImage:!1,pinchToZoom:!1,allowCropOutOfBounds:!1,onCropComplete:function(e,r){O(r)},interaction:{dragCrop:!0,pinchToZoom:!1,dragImage:!1}})}),F&&(0,v.jsx)(o.Z,{sx:{mt:1},align:"center",children:(0,v.jsx)("label",{htmlFor:"image-upload",children:(0,v.jsx)(l.Z,{variant:"outlined",color:"primary",component:"span",startIcon:(0,v.jsx)(g.Z,{}),sx:{mt:2},children:"choose another image"})})}),(0,v.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,v.jsx)(l.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,v.jsx)(l.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:D,disabled:w,children:w?(0,v.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},69455:function(e,r,n){n.r(r);var t=n(74165),a=n(15861),s=n(70885),o=n(68870),i=n(20890),l=n(36151),c=n(13239),u=n(72791),d=n(8292),f=n(49293),h=n(33850),m=n(63845),p=n(59434),x=n(3437),Z=n(97005),g=n(35611),j=n(44238),v=n(80184),C={wrapper:{width:"100%",height:"100%"},descriptionWrapper:{width:{xs:"100%",sm:"50%",md:"50%"},m:"0 auto"},descriptions:{fontSize:{xs:12,md:14}},description:{fontSize:"inherit"},imageCropWrapper:{position:"relative",width:"100%",height:"100%",minHeight:260,p:2,img:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center"}},buttonsWrapper:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5}};r.default=function(e){var r=e.handleClose,n=e.onConfirm,b=(0,p.I0)(),k=u.useState(!1),w=(0,s.Z)(k,2),S=w[0],y=w[1],z=u.useState(null),F=(0,s.Z)(z,2),I=F[0],P=F[1],_=u.useState({x:0,y:0}),T=(0,s.Z)(_,2),W=T[0],U=T[1],R=u.useState(1),A=(0,s.Z)(R,2),B=A[0],L=A[1],q=u.useState(null),E=(0,s.Z)(q,2),O=E[0],D=E[1],G=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,a,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,j.CropImage)(I,O);case 4:return r=e.sent,(a=new FormData).append("profile_img",r),e.next=9,m.default.post("/upload/profile-image",a,{headers:{"Content-Type":"multipart/form-data"}});case 9:200===(s=e.sent).data.code?(P(null),b((0,x.updateUser)(s.data.user)),(0,d.default)("success",s.data.message,h.options),n()):(0,d.default)("error",s.data.message,h.options),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),413===e.t0.response.status?(0,d.default)("error","Image is too large. Please choose another image!",h.options):(0,d.default)("error",e.t0.message,h.options);case 16:return e.prev=16,y(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(o.Z,{sx:C.wrapper,children:[(0,v.jsx)(f.default,{}),(0,v.jsx)("form",{encType:"multipart/form-data",children:(0,v.jsx)("input",{accept:"image/*",id:"image-upload",type:"file",style:{display:"none"},onChange:function(e){var r=e.target.files[0];if(r){var n=new FileReader;n.readAsDataURL(r),n.onload=function(e){P(e.target.result)}}},required:!0})}),!I&&(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(o.Z,{sx:C.descriptionWrapper,children:(0,v.jsxs)(o.Z,{sx:C.descriptions,children:[(0,v.jsx)(i.Z,{component:"li",sx:C.description,children:"Recommended dimensions 400 x 400 px"}),(0,v.jsx)(i.Z,{component:"li",sx:C.description,children:"JPG, JPEG, PNG"}),(0,v.jsx)(i.Z,{component:"li",sx:C.description,children:"Max size: 5mb"})]})}),(0,v.jsx)(o.Z,{sx:{mt:4},align:"center",children:(0,v.jsx)("label",{htmlFor:"image-upload",children:(0,v.jsx)(l.Z,{variant:"outlined",color:"primary",component:"span",startIcon:(0,v.jsx)(g.Z,{}),sx:{mt:2},children:"choose an image"})})})]}),I&&(0,v.jsx)(o.Z,{sx:C.imageCropWrapper,children:(0,v.jsx)(Z.ZP,{image:I,crop:W,aspect:1,onCropChange:function(e,r){U(e),L(r)},cropShape:"rect",showGrid:!0,zoomWithScroll:!0,restrictPosition:!0,zoom:B,onZoomChange:L,dragCrop:!0,dragImage:!1,pinchToZoom:!1,allowCropOutOfBounds:!1,onCropComplete:function(e,r){D(r)},interaction:{dragCrop:!0,pinchToZoom:!1,dragImage:!1}})}),I&&(0,v.jsx)(o.Z,{sx:{mt:1},align:"center",children:(0,v.jsx)("label",{htmlFor:"image-upload",children:(0,v.jsx)(l.Z,{variant:"outlined",color:"primary",component:"span",startIcon:(0,v.jsx)(g.Z,{}),sx:{mt:2},children:"choose another image"})})}),(0,v.jsxs)(o.Z,{align:"right",sx:C.buttonsWrapper,children:[(0,v.jsx)(l.Z,{size:"small",variant:"outlined",onClick:r,children:"Cancel"}),(0,v.jsx)(l.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:G,disabled:S,children:S?(0,v.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},35909:function(e,r,n){n.r(r);var t=n(68870),a=n(20890),s=(n(72791),n(80184));r.default=function(e){return e.open,e.handleClose,e.onConfirm,(0,s.jsx)(t.Z,{children:(0,s.jsx)(a.Z,{children:"Worker Experience"})})}},63845:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL="http://127.0.0.1:8000/api",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t}}]);
//# sourceMappingURL=6642.0edb49ba.chunk.js.map