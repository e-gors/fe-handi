"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[5381,8292,9293,3850,3845],{64253:function(e,r,s){s.r(r);var n=s(1413),t=s(45987),a=s(93006),o=(s(72791),s(80184)),u=["errors","name","customError"];r.default=function(e){var r=e.errors,s=e.name,i=e.customError,c=(0,t.Z)(e,u),l=!1,d="";i&&(l=!0,d=i),r&&(l=r&&r.has(s)||!1,d=r&&r.first(s)||"");var f=(0,n.Z)((0,n.Z)({error:l,name:s,helperText:d},c),{},{value:c.value||""});return(0,o.jsx)(a.Z,(0,n.Z)({size:"small",variant:"outlined"},f))}},8292:function(e,r,s){s.r(r),s.d(r,{default:function(){return t}});var n=s(75985);function t(e,r,s){return"success"===e?n.Am.success(r,s):n.Am.error(r,s)}},49293:function(e,r,s){s.r(r),s.d(r,{default:function(){return a}});var n=s(75985),t=(s(5462),s(80184));function a(){return(0,t.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,s){s.r(r),s.d(r,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},15381:function(e,r,s){s.r(r);var n=s(4942),t=s(1413),a=s(70885),o=s(68870),u=s(20890),i=s(36151),c=s(13239),l=s(72791),d=s(64253),f=s(31783),h=s(63845),m=s(59434),v=s(8292),p=s(33850),Z=s(3437),g=s(49293),C=s(80184),x=new f.ZP.Validator({address:"required"});r.default=function(e){var r=e.adds,s=e.handleClose,f=e.onConfirm,j=(0,m.I0)(),S=l.useState(!1),_=(0,a.Z)(S,2),A=_[0],T=_[1],k=l.useState({values:{address:""},errors:x.errors}),E=(0,a.Z)(k,2),P=E[0],b=E[1];return l.useEffect((function(){r&&b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:{address:r}})}))}),[]),(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(g.default,{}),(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(u.Z,{children:"Address *"}),(0,C.jsx)(d.default,{fullWidth:!0,label:"Address",name:"address",value:P.values.address,errors:P.errors,onChange:function(e){var r=e.target.name,s=e.target.value;b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{values:(0,t.Z)((0,t.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=x.errors;x.validate(r,s).then((function(e){e||b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:a})}))}))}})]}),(0,C.jsxs)(o.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,C.jsx)(i.Z,{size:"small",variant:"outlined",onClick:s,children:"Cancel"}),(0,C.jsx)(i.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){x.validateAll(P.values).then((function(e){e?(T(!0),h.default.post("/update/address",P.values).then((function(e){200===e.data.code?(j((0,Z.updateUser)(e.data.user)),(0,v.default)("success",e.data.message,p.options),f()):(0,v.default)("error",e.data.message,p.options),T(!1)})).catch((function(e){T(!1),(0,v.default)("error",e.message,p.options)}))):b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{errors:x.errors})}))}))},disabled:A,children:A?(0,C.jsx)(c.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})}},63845:function(e,r,s){s.r(r);var n=s(31243).Z.create();n.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=n},5462:function(){}}]);
//# sourceMappingURL=5381.115dcbf3.chunk.js.map