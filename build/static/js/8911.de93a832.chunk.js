"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[8911,8292,9293,3850,3845],{8292:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var o=n(75985);function r(e,t,n){return"success"===e?o.Am.success(t,n):o.Am.error(t,n)}},49293:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(75985),r=(n(5462),n(80184));function s(){return(0,r.jsx)(o.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,t,n){n.r(t),n.d(t,{options:function(){return o}});var o={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},88911:function(e,t,n){n.r(t);var o=n(68870),r=n(20890),s=n(72791),a=n(63845),i=n(64880),u=n(49293),c=n(8292),d=n(33850),f=n(59434),l=n(3437),h=n(80184);t.default=function(){var e=(0,i.k6)(),t=(0,i.UO)(),n=(0,f.I0)(),m=(0,f.v9)((function(e){return e.users.user}));s.useEffect((function(){p()}),[]),s.useEffect((function(){null!==m.email_verified_at&&e.push("/dashboard")}),[m]);var p=function(){a.default.get("/verify-email/".concat(t.id)).then((function(t){200===t.data.code?(n((0,l.updateUser)(t.data.user)),(0,c.default)("success",t.data.message,d.options),e.push("/dashboard")):(0,c.default)("err",t.data.message,d.options)})).catch((function(e){(0,c.default)("err",e.message,d.options)}))};return(0,h.jsxs)(o.Z,{sx:{mt:10,p:2,minHeight:{xs:"40vh",sm:"50vh",md:"61vh"}},children:[(0,h.jsx)(u.default,{}),(0,h.jsx)(o.Z,{sx:{maxWidth:600,margin:"10px auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE",borderRadius:3,boxShadow:15,mt:{xs:5,md:15},p:2},children:(0,h.jsxs)(o.Z,{children:[(0,h.jsxs)(r.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:600,textAlign:{xs:"left",md:"center"},mb:5},children:["Welcome to ","Handi","! We hope we can be of any help for your needs."]}),(0,h.jsxs)(r.Z,{align:"left",sx:{fontSize:{xs:16,md:20}},children:["A ","Handi"," Account gives you access to everything you'll find in ","http://127.0.0.1:8000",". You can use your account when you are looking for a job or if you are looking for a worker. Our system help users to easily find what they need."]})]})})]})}},63845:function(e,t,n){n.r(t);var o=n(31243).Z.create();o.defaults.baseURL="http://127.0.0.1:8000/api",o.defaults.headers.common.Accept="application/json",o.defaults.headers.common["Content-Type"]="application/json",o.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),o.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=o},5462:function(){}}]);
//# sourceMappingURL=8911.de93a832.chunk.js.map