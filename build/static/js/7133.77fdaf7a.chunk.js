"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[7133,3778,8292,9293,3850,6245,3746,3845,2527],{64253:function(e,r,n){n.r(r);var t=n(1413),o=n(45987),a=n(93006),i=(n(72791),n(80184)),s=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,c=e.customError,l=(0,o.Z)(e,s),d=!1,u="";c&&(d=!0,u=c),r&&(d=r&&r.has(n)||!1,u=r&&r.first(n)||"");var m=(0,t.Z)((0,t.Z)({error:d,name:n,helperText:u},l),{},{value:l.value||""});return(0,i.jsx)(a.Z,(0,t.Z)({size:"small",variant:"outlined"},m))}},53778:function(e,r,n){n.r(r);var t=n(1413),o=n(45987),a=(n(72791),n(68096)),i=n(30829),s=n(58406),c=n(77196),l=n(23786),d=n(47071),u=n(80184),m=["label","errors","options","categories","subCategories","customError"];r.default=function(e){var r=e.label,n=e.errors,p=e.options,h=void 0===p?[]:p,f=e.categories,v=void 0===f?[]:f,x=e.subCategories,Z=void 0===x?[]:x,g=e.customError,b=(0,o.Z)(e,m),j=!1,k="";g&&(j=g.error||!1,k=g.message||""),n&&(j=n&&n.has(e.name)||!1,k=n&&n.first(e.name)||"");var S=(0,t.Z)({margin:"dense",error:j},b);return(0,u.jsxs)(a.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,u.jsx)(i.Z,{id:"dropdown-label",children:r}),(0,u.jsxs)(s.Z,(0,t.Z)((0,t.Z)({labelId:"dropdown-label",input:(0,u.jsx)(c.Z,{label:r})},S),{},{children:[h.map((function(e,r){return(0,u.jsx)(l.Z,{value:e,children:e},r)})),v.map((function(e,r){return(0,u.jsx)(l.Z,{value:e.name,children:e.name},r)})),Z.map((function(e){return e.children.map((function(e,r){return(0,u.jsx)(l.Z,{value:e.name,children:e.name},r)}))}))]})),(0,u.jsx)(d.Z,{error:!0,children:k})]})}},8292:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var t=n(75985);function o(e,r,n){return"success"===e?t.Am.success(r,n):t.Am.error(r,n)}},49293:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(75985),o=(n(5462),n(80184));function a(){return(0,o.jsx)(t.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,n){n.r(r),n.d(r,{options:function(){return t}});var t={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},97133:function(e,r,n){n.r(r);var t=n(4942),o=n(1413),a=n(70885),i=n(68870),s=n(20890),c=n(61889),l=n(63466),d=n(13400),u=n(79012),m=n(85523),p=n(94454),h=n(47071),f=n(36151),v=n(13239),x=n(72791),Z=n(64253),g=n(31783),b=n(40501),j=n(87749),k=n(3746),S=n(20165),C=n(64880),P=n(66245),_=n(49293),E=n(8292),w=n(33850),z=n(53778),y=n(63845),A=n(59434),T=n(3437),R=n(80184),O=new g.ZP.Validator({first_name:"required",last_name:"required",email:"required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$",password:"required|min:6",background:"required",number:"required|numeric|regex:^09[0-9]{9}$",gender:"required",address:"required"}),I={wrapper:{mt:10,p:2},main:{p:3,backgroundColor:"#F8F9F9",maxWidth:700,margin:"10px auto",height:"auto",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",borderRadius:10,boxShadow:5},registerAs:{fontSize:{xs:24,md:30},fontWeight:400,mb:2},addressHelper:{color:"#888888",pl:1,fontSize:12},error:{color:"red",pl:1,fontSize:12},buttonWrapper:{width:"90%",display:"flex",justifyContent:"space-between",margin:"20px auto"},back:{width:"45%",maxWidth:200},next:{width:"45%",maxWidth:200,backgroundColor:"#B9326F","&:hover":{backgroundColor:"#ED563E"}},submit:{width:"100%",transition:".5s",background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)","&:hover":{boxShadow:5}},gender:{mt:{xs:0,md:.5}},checkbox:{mt:{xs:-1.5,md:-1.2}},formgroup:{mt:2},checkingThis:{fontSize:{xs:12,sm:14,md:16}},terms:{color:"blue",textDecoration:"underline",cursor:"pointer"},clickHereWrapper:{mt:2},clickHere:{color:"blue",textDecoration:"underline",cursor:"pointer"},registerAsWorker:{fontSize:12}},W=["Male","Female","Others","Better Not Tell"];r.default=function(){var e=localStorage.getItem("selectedRole"),r=(0,C.k6)(),n=(0,A.I0)(),g=x.useState(!1),H=(0,a.Z)(g,2),L=H[0],M=H[1],D=x.useState(!1),N=(0,a.Z)(D,2),F=N[0],q=N[1],B=x.useState(!1),V=(0,a.Z)(B,2),U=V[0],K=V[1],$=x.useState({values:{first_name:"",last_name:"",email:"",password:"",number:"",gender:"",address:""},errors:O.errors}),G=(0,a.Z)($,2),J=G[0],Q=G[1],X=function(e){var r=e.target.name,n=e.target.value;Q((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,t.Z)({},r,n))})}));var a=O.errors;O.validate(r,n).then((function(){Q((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:a})}))}))},Y=function(e){var r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;window.open("".concat(r,"/").concat(e),"_blank")};return(0,R.jsxs)(i.Z,{sx:I.wrapper,children:[(0,R.jsx)(_.default,{}),(0,R.jsxs)(i.Z,{sx:I.main,children:[(0,R.jsxs)(s.Z,{sx:I.registerAs,children:["Register as ",e]}),(0,R.jsxs)(i.Z,{component:"form",children:[(0,R.jsxs)(c.ZP,{container:!0,spacing:.5,children:[(0,R.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,R.jsx)(Z.default,{errors:J.errors,onChange:X,margin:"dense",value:J.values.first_name,label:"First Name",name:"first_name",fullWidth:!0,required:!0,autoFocus:!0})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,R.jsx)(Z.default,{errors:J.errors,onChange:X,margin:"dense",value:J.values.last_name,label:"Last Name",name:"last_name",fullWidth:!0,required:!0})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,R.jsx)(Z.default,{required:!0,type:"email",name:"email",errors:J.errors,onChange:X,value:J.values.email,size:"small",margin:"normal",fullWidth:!0,label:"Working Email ",autoComplete:"email",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",color:"black"},startAdornment:(0,R.jsx)(l.Z,{position:"start",children:(0,R.jsx)(b.Z,{})})}})}),(0,R.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,R.jsx)(Z.default,{required:!0,name:"password",errors:J.errors,value:J.values.password,onChange:X,size:"small",margin:"normal",fullWidth:!0,label:"Password",type:U?"text":"password",autoComplete:"current-password",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"},startAdornment:(0,R.jsx)(l.Z,{position:"start",children:(0,R.jsx)(j.Z,{})}),endAdornment:(0,R.jsx)(l.Z,{position:"end",children:(0,R.jsx)(d.Z,{onClick:function(){K(!U)},onMouseDown:function(e){e.preventDefault()},children:U?(0,R.jsx)(S.Z,{}):(0,R.jsx)(k.Z,{})})})}})}),(0,R.jsxs)(c.ZP,{item:!0,xs:12,md:6,children:[(0,R.jsx)(Z.default,{errors:J.errors,onChange:X,margin:"dense",value:J.values.number,label:"Contact Number",name:"number",required:!0,fullWidth:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:11}}),(0,R.jsx)(s.Z,{sx:I.addressHelper,children:"09xxxxxxxxx"})]}),(0,R.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,R.jsx)(z.default,{size:"small",options:W,onChange:X,value:J.values.gender,name:"gender",label:"Gender",required:!0,sx:I.gender,errors:J.errors})}),(0,R.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,R.jsx)(Z.default,{errors:J.errors,onChange:X,margin:"dense",value:J.values.address,label:"Complete Address",name:"address",fullWidth:!0,required:!0}),(0,R.jsx)(s.Z,{sx:I.addressHelper,children:"Purok / Sitio / Subdivision, Barangay, Municipality, Provice"})]})]}),(0,R.jsxs)(u.Z,{sx:I.formgroup,children:[(0,R.jsx)(m.Z,{required:!0,control:(0,R.jsx)(p.Z,{sx:I.checkbox,checked:L,onChange:function(e){M(!L)}}),labelPlacement:"end",label:(0,R.jsxs)(s.Z,{sx:I.checkingThis,children:['Checking this means that you agree to our "',(0,R.jsx)("span",{style:I.terms,onClick:function(){return Y("terms-of-services")},children:"Terms and Condition"}),'" and "',(0,R.jsx)("span",{style:I.terms,onClick:function(){return Y("privacy-policy")},children:"Privacy Policy"}),'".']})}),!L&&(0,R.jsx)(h.Z,{error:!0,children:"Please read the conditions stated above and check the checkbox to proceed."})]}),(0,R.jsx)(i.Z,{sx:I.buttonWrapper,children:(0,R.jsx)(f.Z,{size:"small",variant:"contained",sx:I.submit,disabled:!L||F,onClick:function(){O.validateAll(J.values).then((function(t){t?(q(!0),P.clientRegister(e,J).then((function(e){if(200===e.data.code){y.default.defaults.headers.common.Authorization="Bearer ".concat(e.data.access_token);var t=e.data.user;localStorage.setItem("accessToken",e.data.access_token),localStorage.setItem("tokenExpiration",e.data.expires_in),n((0,T.setUser)(t)),"Super Admin"===t.role?r.push("/admin/dashboard"):r.push("/dashboard"),localStorage.removeItem("selectedRole")}else q(!1),(0,E.default)("error",e.data.message,w.options)})).catch((function(e){q(!1),(0,E.default)("error",e.message,w.options)}))):Q((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:O.errors})}))}))},type:"submit",children:F?(0,R.jsx)(v.Z,{size:24,disableShrink:!0,sx:{color:"white"}}):L?"Submit":"Disabled"})})]}),(0,R.jsx)(i.Z,{sx:I.clickHereWrapper,children:(0,R.jsxs)(s.Z,{sx:I.registerAsWorker,children:["Register as a Worker?"," ",(0,R.jsx)("span",{style:I.clickHere,onClick:function(){return function(e){localStorage.setItem("selectedRole",e),r.push("/join-us/".concat(e))}("Worker")},children:"Click here."})]})})]})]})}},66245:function(e,r,n){n.r(r),n.d(r,{clientRegister:function(){return a},registerOnApply:function(){return i},workerRegister:function(){return o}});var t=n(2527),o=function(e,r,n){return t.default.post("/join-us/".concat(e),{formValues:r.values,expertise:n.values})},a=function(e,r){return t.default.post("/join-us/".concat(e),r.values)},i=function(e,r){return t.default.post("/apply/register",{formValues:e.values,expertise:r.values})}},63845:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t},2527:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))window.location.href="/";return Promise.reject(e)})),r.default=t},87749:function(e,r,n){var t=n(64836);r.Z=void 0;var o=t(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");r.Z=i},3746:function(e,r,n){var t=n(64836);r.Z=void 0;var o=t(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");r.Z=i},20165:function(e,r,n){var t=n(64836);r.Z=void 0;var o=t(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=i},94454:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(4942),o=n(63366),a=n(87462),i=n(72791),s=n(28182),c=n(94419),l=n(12065),d=n(97278),u=n(74223),m=n(80184),p=(0,u.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=n(14036),x=n(31402),Z=n(66934),g=n(75878),b=n(21217);function j(e){return(0,b.Z)("MuiCheckbox",e)}var k=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),S=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,Z.ZP)(d.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,n.indeterminate&&r.indeterminate,"default"!==n.color&&r["color".concat((0,v.Z)(n.color))]]}})((function(e){var r,n=e.theme,o=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===o.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(r={},(0,t.Z)(r,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:(n.vars||n).palette[o.color].main}),(0,t.Z)(r,"&.".concat(k.disabled),{color:(n.vars||n).palette.action.disabled}),r))})),P=(0,m.jsx)(h,{}),_=(0,m.jsx)(p,{}),E=(0,m.jsx)(f,{}),w=i.forwardRef((function(e,r){var n,t,l=(0,x.Z)({props:e,name:"MuiCheckbox"}),d=l.checkedIcon,u=void 0===d?P:d,p=l.color,h=void 0===p?"primary":p,f=l.icon,Z=void 0===f?_:f,g=l.indeterminate,b=void 0!==g&&g,k=l.indeterminateIcon,w=void 0===k?E:k,z=l.inputProps,y=l.size,A=void 0===y?"medium":y,T=l.className,R=(0,o.Z)(l,S),O=b?w:Z,I=b?w:u,W=(0,a.Z)({},l,{color:h,indeterminate:b,size:A}),H=function(e){var r=e.classes,n=e.indeterminate,t=e.color,o={root:["root",n&&"indeterminate","color".concat((0,v.Z)(t))]},i=(0,c.Z)(o,j,r);return(0,a.Z)({},r,i)}(W);return(0,m.jsx)(C,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":b},z),icon:i.cloneElement(O,{fontSize:null!=(n=O.props.fontSize)?n:A}),checkedIcon:i.cloneElement(I,{fontSize:null!=(t=I.props.fontSize)?t:A}),ownerState:W,ref:r,className:(0,s.Z)(H.root,T)},R,{classes:H}))}))},63466:function(e,r,n){n.d(r,{Z:function(){return S}});var t=n(4942),o=n(63366),a=n(87462),i=n(72791),s=n(28182),c=n(94419),l=n(14036),d=n(20890),u=n(93840),m=n(52930),p=n(66934),h=n(75878),f=n(21217);function v(e){return(0,f.Z)("MuiInputAdornment",e)}var x,Z=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=n(31402),b=n(80184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],k=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r["position".concat((0,l.Z)(n.position))],!0===n.disablePointerEvents&&r.disablePointerEvents,r[n.variant]]}})((function(e){var r=e.theme,n=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},"filled"===n.variant&&(0,t.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),S=i.forwardRef((function(e,r){var n=(0,g.Z)({props:e,name:"MuiInputAdornment"}),t=n.children,p=n.className,h=n.component,f=void 0===h?"div":h,Z=n.disablePointerEvents,S=void 0!==Z&&Z,C=n.disableTypography,P=void 0!==C&&C,_=n.position,E=n.variant,w=(0,o.Z)(n,j),z=(0,m.Z)()||{},y=E;E&&z.variant,z&&!y&&(y=z.variant);var A=(0,a.Z)({},n,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:S,position:_,variant:y}),T=function(e){var r=e.classes,n=e.disablePointerEvents,t=e.hiddenLabel,o=e.position,a=e.size,i=e.variant,s={root:["root",n&&"disablePointerEvents",o&&"position".concat((0,l.Z)(o)),i,t&&"hiddenLabel",a&&"size".concat((0,l.Z)(a))]};return(0,c.Z)(s,v,r)}(A);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(k,(0,a.Z)({as:f,ownerState:A,className:(0,s.Z)(T.root,p),ref:r},w,{children:"string"!==typeof t||P?(0,b.jsxs)(i.Fragment,{children:["start"===_?x||(x=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:t})}))})}))},5462:function(){}}]);
//# sourceMappingURL=7133.77fdaf7a.chunk.js.map