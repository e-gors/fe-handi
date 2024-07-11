"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9355,8292,9293,3850,3845],{64253:function(e,r,a){a.r(r);var n=a(1413),t=a(45987),s=a(93006),o=(a(72791),a(80184)),u=["errors","name","customError"];r.default=function(e){var r=e.errors,a=e.name,i=e.customError,l=(0,t.Z)(e,u),c=!1,d="";i&&(c=!0,d=i),r&&(c=r&&r.has(a)||!1,d=r&&r.first(a)||"");var f=(0,n.Z)((0,n.Z)({error:c,name:a,helperText:d},l),{},{value:l.value||""});return(0,o.jsx)(s.Z,(0,n.Z)({size:"small",variant:"outlined"},f))}},8292:function(e,r,a){a.r(r),a.d(r,{default:function(){return t}});var n=a(75985);function t(e,r,a){return"success"===e?n.Am.success(r,a):n.Am.error(r,a)}},49293:function(e,r,a){a.r(r),a.d(r,{default:function(){return s}});var n=a(75985),t=(a(5462),a(80184));function s(){return(0,t.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,a){a.r(r),a.d(r,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},99355:function(e,r,a){a.r(r);var n=a(4942),t=a(1413),s=a(70885),o=a(68870),u=a(20890),i=a(36151),l=a(13239),c=a(72791),d=a(64253),f=a(31783),m=a(63845),h=a(59434),v=a(8292),p=a(33850),Z=a(3437),g=a(49293),x=a(80184),j=new f.ZP.Validator({first_name:"required",last_name:"required"});r.default=function(e){var r=e.full_name,a=e.handleClose,f=e.onConfirm,C=(0,h.I0)(),b=c.useState(!1),k=(0,s.Z)(b,2),_=k[0],w=k[1],F=c.useState({values:{first_name:"",last_name:""},errors:j.errors}),P=(0,s.Z)(F,2),z=P[0],A=P[1];c.useEffect((function(){r&&A((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)({},r)})}))}),[]);var N=function(e){var r=e.target.name,a=e.target.value;A((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,a))})}));var s=j.errors;j.validate(r,a).then((function(e){e||A((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:s})}))}))};return(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(g.default,{}),(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(u.Z,{children:"First Name *"}),(0,x.jsx)(d.default,{fullWidth:!0,label:"First Name",name:"first_name",value:z.values.first_name,errors:z.errors,onChange:N})]}),(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(u.Z,{children:"Last Name *"}),(0,x.jsx)(d.default,{fullWidth:!0,label:"Last Name",name:"last_name",value:z.values.last_name,errors:z.errors,onChange:N})]}),(0,x.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,x.jsx)(i.Z,{size:"small",variant:"outlined",onClick:a,children:"Cancel"}),(0,x.jsx)(i.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){j.validateAll(z.values).then((function(e){e?(w(!0),m.default.post("update/fullname",z.values).then((function(e){200===e.data.code?(C((0,Z.updateUser)(e.data.user)),(0,v.default)("success",e.data.message,p.options),f()):(0,v.default)("error",e.data.message,p.options),w(!1)})).catch((function(e){w(!1),(0,v.default)("error",e.message,p.options)}))):A((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:j.errors})}))}))},disabled:_,children:_?(0,x.jsx)(l.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},63845:function(e,r,a){a.r(r);var n=a(31243).Z.create();n.defaults.baseURL="http://127.0.0.1:8000/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=n},5462:function(){}}]);
//# sourceMappingURL=9355.07b63616.chunk.js.map