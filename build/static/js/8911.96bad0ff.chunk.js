"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[8911,8292,9293,3850,3845],{8292:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var n=o(75985);function r(e,t,o){return"success"===e?n.Am.success(t,o):n.Am.error(t,o)}},49293:function(e,t,o){o.r(t),o.d(t,{default:function(){return s}});var n=o(75985),r=(o(5462),o(80184));function s(){return(0,r.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,t,o){o.r(t),o.d(t,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},88911:function(e,t,o){o.r(t);var n=o(68870),r=o(20890),s=o(72791),a=o(63845),i=o(64880),u=o(49293),c=o(8292),d=o(33850),f=o(59434),l=o(3437),h=o(80184);t.default=function(){var e=(0,i.k6)(),t=(0,i.UO)(),o=(0,f.I0)(),p=(0,f.v9)((function(e){return e.users.user}));s.useEffect((function(){m()}),[]),s.useEffect((function(){null!==p.email_verified_at&&e.push("/dashboard")}),[p]);var m=function(){a.default.get("/verify-email/".concat(t.id)).then((function(t){200===t.data.code?(o((0,l.updateUser)(t.data.user)),(0,c.default)("success",t.data.message,d.options),e.push("/dashboard")):(0,c.default)("err",t.data.message,d.options)})).catch((function(e){(0,c.default)("err",e.message,d.options)}))};return(0,h.jsxs)(n.Z,{sx:{mt:10,p:2,minHeight:{xs:"40vh",sm:"50vh",md:"61vh"}},children:[(0,h.jsx)(u.default,{}),(0,h.jsx)(n.Z,{sx:{maxWidth:600,margin:"10px auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE",borderRadius:3,boxShadow:15,mt:{xs:5,md:15},p:2},children:(0,h.jsxs)(n.Z,{children:[(0,h.jsxs)(r.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:600,textAlign:{xs:"left",md:"center"},mb:5},children:["Welcome to ","Handiworks","! We hope we can be of any help for your needs."]}),(0,h.jsxs)(r.Z,{align:"left",sx:{fontSize:{xs:16,md:20}},children:["A ","Handiworks"," Account gives you access to everything you'll find in ","https://handiworks.technopreneurship.store/",". You can use your account when you are looking for a job or if you are looking for a worker. Our system help users to easily find what they need."]})]})})]})}},63845:function(e,t,o){o.r(t);var n=o(31243).Z.create();n.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=n},5462:function(){}}]);
//# sourceMappingURL=8911.96bad0ff.chunk.js.map