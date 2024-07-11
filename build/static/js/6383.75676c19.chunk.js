"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6383,8292,3850,161,3845],{64253:function(e,r,n){n.r(r);var t=n(1413),o=n(45987),a=n(93006),s=(n(72791),n(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,l=e.customError,c=(0,o.Z)(e,i),u=!1,d="";l&&(u=!0,d=l),r&&(u=r&&r.has(n)||!1,d=r&&r.first(n)||"");var m=(0,t.Z)((0,t.Z)({error:u,name:n,helperText:d},c),{},{value:c.value||""});return(0,s.jsx)(a.Z,(0,t.Z)({size:"small",variant:"outlined"},m))}},8292:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var t=n(75985);function o(e,r,n){return"success"===e?t.Am.success(r,n):t.Am.error(r,n)}},49293:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(75985),o=(n(5462),n(80184));function a(){return(0,o.jsx)(t.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,n){n.r(r),n.d(r,{options:function(){return t}});var t={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},76383:function(e,r,n){n.r(r),n.d(r,{default:function(){return K}});var t=n(4942),o=n(70885),a=n(1413),s=n(72791),i=n(93044),l=n(36151),c=n(4708),u=n(85523),d=n(94454),m=n(50533),p=n(35527),h=n(68870),f=n(61889),g=n(30403),Z=n(20890),x=n(67107),v=n(1701),j=n(31783),b=n(59434),k=n(3437),y=n(33850),w=n(44238),P=n(64880),C=n(80161),A=n(64253),S=n(40501),I=n(87749),z=n(3746),E=n(20165),D=n(49293),T=n(8292),_=n(63845),q=n(63466),B=n(13400),F=n(79012),O=n(13239),W=n(90668),L=n(80184),R=new j.ZP.Validator({email:"required|email",password:"required"});function U(e){return(0,L.jsxs)(Z.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,L.jsx)(m.Z,{color:"inherit",href:"https://mui.com/",children:"HandiWorks"})," ",(new Date).getFullYear(),"."]}))}var H=(0,x.Z)();function K(){var e=(0,P.k6)(),r=(0,b.I0)(),n=s.useState(!1),x=(0,o.Z)(n,2),j=x[0],K=x[1],M=s.useState(!1),N=(0,o.Z)(M,2),V=N[0],Y=N[1],G=s.useState({values:{email:"",password:""},errors:R.errors}),J=(0,o.Z)(G,2),Q=J[0],X=J[1],$=s.useState(!1),ee=(0,o.Z)($,2),re=ee[0],ne=ee[1];s.useEffect((function(){(0,w.isAuth)()&&e.push("/dashboard/client")}),[]);var te=function(e){var r=e.target.name,n=e.target.value;X((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,t.Z)({},r,n))})}));var o=R.errors;R.validate(r,n).then((function(){X((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:o})}))}))},oe=function(){R.validateAll(Q.values).then((function(n){n?(Y(!0),C.login(Q.values).then((function(n){if(200===n.data.code){_.default.defaults.headers.common.Authorization="Bearer ".concat(n.data.access_token);var t=n.data.user;localStorage.setItem("accessToken",n.data.access_token),localStorage.setItem("tokenExpiration",n.data.expires_in),r((0,k.setUser)(t)),"Super Admin"===t.role?e.push("/admin/dashboard"):e.push("/dashboard")}else(0,T.default)("error",n.data.message,y.options);Y(!1)})).catch((function(e){Y(!1),(0,T.default)("error",e.message,y.options)}))):X((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:R.errors})}))}))},ae=function(e){"Enter"===e.key&&oe()};return(0,L.jsxs)(v.Z,{theme:H,children:[(0,L.jsx)(D.default,{}),(0,L.jsxs)(f.ZP,{container:!0,component:"main",sx:{height:"100vh",mt:8},children:[(0,L.jsx)(c.ZP,{}),(0,L.jsx)(f.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://img.freepik.com/premium-vector/happy-labour-day-construction-workers-are-working-building-labour-day-1-may-illustration_138260-738.jpg?w=2000)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,L.jsxs)(f.ZP,{item:!0,xs:12,sm:8,md:5,component:p.Z,elevation:6,square:!0,children:[(0,L.jsxs)(h.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,L.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,L.jsx)(g.Z,{})}),(0,L.jsx)(Z.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,L.jsxs)(h.Z,{component:"form",sx:W.styles.loginForm,children:[(0,L.jsx)(A.default,{onKeyPress:ae,required:!0,name:"email",errors:Q.errors,onChange:te,value:Q.values.email,size:"small",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email",autoFocus:!0,InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",color:"black"},startAdornment:(0,L.jsx)(q.Z,{position:"start",children:(0,L.jsx)(S.Z,{})})}}),(0,L.jsx)(A.default,{required:!0,onKeyPress:ae,name:"password",errors:Q.errors,value:Q.values.password,onChange:te,size:"small",margin:"normal",fullWidth:!0,label:"Password",type:j?"text":"password",id:"password",autoComplete:"current-password",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"},startAdornment:(0,L.jsx)(q.Z,{position:"start",children:(0,L.jsx)(I.Z,{})}),endAdornment:(0,L.jsx)(q.Z,{position:"end",children:(0,L.jsx)(B.Z,{onClick:function(){K(!j)},onMouseDown:function(e){e.preventDefault()},children:j?(0,L.jsx)(E.Z,{}):(0,L.jsx)(z.Z,{})})})}}),(0,L.jsx)(F.Z,{children:(0,L.jsx)(u.Z,{control:(0,L.jsx)(d.Z,{checked:re,onChange:function(){ne(!re)}}),label:"Remember me",labelPlacement:"end"})}),(0,L.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:W.styles.loginSubmitButton,onClick:oe,disabled:V,children:V?(0,L.jsx)(O.Z,{size:24}):"Login"}),(0,L.jsxs)(f.ZP,{container:!0,children:[(0,L.jsx)(f.ZP,{item:!0,xs:!0,children:(0,L.jsx)(m.Z,{href:"/forgot-password",variant:"body2",children:"Forgot password?"})}),(0,L.jsx)(f.ZP,{item:!0,children:(0,L.jsx)(m.Z,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),(0,L.jsx)(U,{})]})]})]})}},80161:function(e,r,n){n.r(r),n.d(r,{login:function(){return o}});var t=n(31243),o=function(e){return t.Z.post("".concat("http://127.0.0.1:8000/api","/login"),e,{headers:{Accept:"application/json"}})}},63845:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL="http://127.0.0.1:8000/api",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t}}]);
//# sourceMappingURL=6383.75676c19.chunk.js.map