"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[9231,3778,6245,2527],{53778:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),s=(t(72791),t(68096)),a=t(30829),i=t(58406),l=t(77196),c=t(23786),d=t(47071),u=t(80184),m=["label","errors","options","categories","subCategories","customError"];r.default=function(e){var r=e.label,t=e.errors,x=e.options,h=void 0===x?[]:x,p=e.categories,f=void 0===p?[]:p,Z=e.subCategories,j=void 0===Z?[]:Z,b=e.customError,v=(0,o.Z)(e,m),g=!1,k="";b&&(g=b.error||!1,k=b.message||""),t&&(g=t&&t.has(e.name)||!1,k=t&&t.first(e.name)||"");var C=(0,n.Z)({margin:"dense",error:g},v);return(0,u.jsxs)(s.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,u.jsx)(a.Z,{id:"dropdown-label",children:r}),(0,u.jsxs)(i.Z,(0,n.Z)((0,n.Z)({labelId:"dropdown-label",input:(0,u.jsx)(l.Z,{label:r})},C),{},{children:[h.map((function(e,r){return(0,u.jsx)(c.Z,{value:e,children:e},r)})),f.map((function(e,r){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},r)})),j.map((function(e){return e.children.map((function(e,r){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},r)}))}))]})),(0,u.jsx)(d.Z,{error:!0,children:k})]})}},66245:function(e,r,t){t.r(r),t.d(r,{clientRegister:function(){return s},registerOnApply:function(){return a},workerRegister:function(){return o}});var n=t(2527),o=function(e,r,t){return n.default.post("/join-us/".concat(e),{formValues:r.values,expertise:t.values})},s=function(e,r){return n.default.post("/join-us/".concat(e),r.values)},a=function(e,r){return n.default.post("/apply/register",{formValues:e.values,expertise:r.values})}},89231:function(e,r,t){t.r(r);var n=t(4942),o=t(1413),s=t(70885),a=t(68870),i=t(20792),l=t(13400),c=t(61889),d=t(20890),u=t(63466),m=t(79012),x=t(85523),h=t(94454),p=t(36151),f=t(13239),Z=t(93044),j=t(72791),b=t(86711),v=t(40501),g=t(87749),k=t(3746),C=t(20165),y=t(64253),S=t(53778),w=t(31783),_=t(59434),z=t(3437),P=t(33850),I=t(8292),A=t(49293),W=t(44238),E=t(31425),q=t(63845),H=t(66245),B=t(80184),R=new w.ZP.Validator({email:"required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$",first_name:"required",last_name:"required",password:"required|min:6",number:"required|numeric|regex:^09[0-9]{9}$",gender:"required",address:"required"}),T=new w.ZP.Validator({job_categories:"required",selected_jobs:"required",selected_skills:"required"}),M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",maxHeight:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3},N={applyNow:{fontWeight:"bold",fontSize:24},exitIconWrapper:{p:2,position:"relative",mb:2},exitIconButton:{position:"absolute",top:2,right:2},jobTitle:{fontWeight:"bold",fontSize:{xs:24,sm:28,md:32}},main:{p:{xs:2,md:3},display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},addressHelper:{color:"#888888",pl:1,fontSize:12},error:{color:"red",pl:1,fontSize:12},buttonWrapper:{display:"flex",justifyContent:"space-evenly",".button":{width:"90%",ml:4,mr:4}},gender:{mt:{xs:0,md:.5}},checkbox:{mt:{xs:-1.5,md:-1.2}},checking:{fontSize:{xs:12,sm:14,md:16}},marginTop2:{mt:2},registerAsSwitch:{fontSize:12}},O=["Male","Female","Others","Better Not Tell"];r.default=function(e){var r=e.open,t=e.handleClose,w=e.selectedItem,F=e.onHandleSubmit,V=(0,_.I0)(),D=(0,_.v9)((function(e){return e.categories.categories})),L=(0,_.v9)((function(e){return e.skills.skills})),Y=j.useState(!1),U=(0,s.Z)(Y,2),K=U[0],J=U[1],$=j.useState(!1),G=(0,s.Z)($,2),Q=G[0],X=G[1],ee=j.useState({values:{job_categories:[],selected_jobs:[],selected_skills:[]},errors:T.errors}),re=(0,s.Z)(ee,2),te=re[0],ne=re[1],oe=j.useState(!1),se=(0,s.Z)(oe,2),ae=se[0],ie=se[1],le=j.useState({values:{email:"",first_name:"",last_name:"",password:"",number:"",gender:"",address:""},errors:R.errors}),ce=(0,s.Z)(le,2),de=ce[0],ue=ce[1],me=function(e){var r=e.target.name,t=e.target.value,s="string"===typeof t?t.split(","):t;ne((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,n.Z)({},r,s))})}));var a=T.errors;T.validate(r,t).then((function(){ne((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:a})}))}))},xe=function(e){var r=e.target.name,t=e.target.value;ue((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,n.Z)({},r,t))})}));var s=R.errors;R.validate(r,t).then((function(){ue((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:s})}))}))},he=function(e){var r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN:"http://localhost:8000/api",REACT_APP_NAME:"Handi"}.REACT_APP_BASE_URL;window.open("".concat(r,"/").concat(e),"_blank")},pe=D.filter((function(e){return te.values.job_categories.includes(e.name)})),fe=L.filter((function(e){return te.values.job_categories.includes(e.name)}));return(0,B.jsxs)(a.Z,{children:[(0,B.jsx)(A.default,{}),(0,B.jsx)(i.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,B.jsx)(a.Z,{sx:M,children:(0,B.jsxs)(a.Z,{children:[(0,B.jsx)(a.Z,{sx:N.exitIconWrapper,children:(0,B.jsx)(l.Z,{onClick:t,sx:N.exitIconButton,children:(0,B.jsx)(b.Z,{color:"error"})})}),(0,B.jsx)(a.Z,{sx:{maxHeight:"72vh",overflow:"auto","::-webkit-scrollbar":{display:"none"}},children:!(0,W.isAuth)()&&(0,B.jsx)(a.Z,{sx:{p:2},children:(0,B.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,B.jsx)(c.ZP,{item:!0,xs:12,md:7,children:(0,B.jsxs)(a.Z,{children:[(0,B.jsx)(d.Z,{sx:N.applyNow,children:"Apply Now"}),(0,B.jsx)(d.Z,{children:"To apply for the job, you need to have an account before you can proceed. Your account credentials will be kept confidential \ud83d\udd12"}),(0,B.jsxs)(a.Z,{component:"form",sx:N.main,children:[(0,B.jsxs)(c.ZP,{container:!0,spacing:.5,children:[(0,B.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,B.jsx)(y.default,{autoFocus:!0,errors:de.errors,onChange:xe,margin:"dense",value:de.values.first_name,label:"First Name",name:"first_name",fullWidth:!0,required:!0})}),(0,B.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,B.jsx)(y.default,{errors:de.errors,onChange:xe,margin:"dense",value:de.values.last_name,label:"Last Name",name:"last_name",fullWidth:!0,required:!0})}),(0,B.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,B.jsx)(y.default,{required:!0,type:"email",name:"email",errors:de.errors,onChange:xe,value:de.values.email,size:"small",margin:"normal",fullWidth:!0,label:"Working Email",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",color:"black"},startAdornment:(0,B.jsx)(u.Z,{position:"start",children:(0,B.jsx)(v.Z,{})})}})}),(0,B.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,B.jsx)(y.default,{required:!0,name:"password",errors:de.errors,value:de.values.password,onChange:xe,size:"small",margin:"normal",fullWidth:!0,label:"Password",type:ae?"text":"password",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"},startAdornment:(0,B.jsx)(u.Z,{position:"start",children:(0,B.jsx)(g.Z,{})}),endAdornment:(0,B.jsx)(u.Z,{position:"end",children:(0,B.jsx)(l.Z,{onClick:function(){ie(!ae)},onMouseDown:function(e){e.preventDefault()},children:ae?(0,B.jsx)(C.Z,{}):(0,B.jsx)(k.Z,{})})})}})}),(0,B.jsxs)(c.ZP,{item:!0,xs:12,md:6,children:[(0,B.jsx)(y.default,{errors:de.errors,onChange:xe,margin:"dense",value:de.values.number,label:"Contact Number",name:"number",required:!0,fullWidth:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:11}}),(0,B.jsx)(d.Z,{sx:N.addressHelper,children:"09xxxxxxxxx"})]}),(0,B.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,B.jsx)(S.default,{size:"small",options:O,onChange:xe,value:de.values.gender,name:"gender",label:"Gender",required:!0,sx:N.gender,errors:de.errors})}),(0,B.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,B.jsx)(y.default,{errors:de.errors,onChange:xe,margin:"dense",value:de.values.address,label:"Complete Address",name:"address",fullWidth:!0,required:!0}),(0,B.jsx)(d.Z,{sx:N.addressHelper,children:"Purok / Sitio / Subdivision, Barangay, Municipality, Provice"})]}),(0,B.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,B.jsx)(S.default,{categories:D,size:"small",required:!0,label:"Job Categories",multiple:!0,onChange:me,value:te.values.job_categories,name:"job_categories",errors:te.errors}),(0,B.jsx)(d.Z,{sx:N.addressHelper,children:"You can select multiple job categories"})]}),0!==te.values.job_categories.length&&(0,B.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,B.jsx)(S.default,{subCategories:pe,size:"small",required:!0,label:"Your Job Interests",multiple:!0,onChange:me,value:te.values.selected_jobs,name:"selected_jobs",errors:te.errors}),(0,B.jsx)(d.Z,{sx:N.addressHelper,children:"You can select multiple jobs"})]}),0!==te.values.job_categories.length&&0!==te.values.selected_jobs.length&&(0,B.jsxs)(c.ZP,{item:!0,xs:12,md:12,children:[(0,B.jsx)(S.default,{subCategories:fe,size:"small",required:!0,label:"Your Skills",multiple:!0,onChange:me,value:te.values.selected_skills,name:"selected_skills",errors:te.errors}),(0,B.jsx)(d.Z,{sx:N.addressHelper,children:"You can select multiple skills"})]})]}),(0,B.jsx)(m.Z,{sx:N.marginTop2,children:(0,B.jsx)(x.Z,{required:!0,control:(0,B.jsx)(h.Z,{sx:N.checkbox,checked:Q,onChange:function(e){X(!Q)}}),labelPlacement:"end",label:(0,B.jsxs)(d.Z,{sx:N.checking,children:['Checking this means that you agree to our "',(0,B.jsx)("span",{style:{color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:function(){return he("terms-of-services")},children:"Terms and Condition"}),'" and "',(0,B.jsx)("span",{style:{color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:function(){return he("privacy-policy")},children:"Privacy Policy"}),'".']})})})]}),(0,B.jsxs)(a.Z,{sx:N.buttonWrapper,children:[(0,B.jsx)(p.Z,{fullWidth:!0,variant:"outlined",color:"primary",size:"small",sx:N.cancel,className:"button",onClick:t,children:"Cancel"}),(0,B.jsx)(p.Z,{fullWidth:!0,variant:"contained",color:"primary",size:"small",sx:N.submit,className:"button",disabled:!Q||K,onClick:function(){R.validateAll(de.values).then((function(e){e?T.validateAll(te.values).then((function(e){e?(J(!0),H.registerOnApply(de,te).then((function(e){if(200===e.data.code){q.default.defaults.headers.common.Authorization="Bearer ".concat(e.data.access_token);var r=e.data.user;localStorage.setItem("accessToken",e.data.access_token),localStorage.setItem("tokenExpiration",e.data.expires_in),V((0,z.setUser)(r)),(0,I.default)("success",e.data.message,P.options)}else J(!1),(0,I.default)("error",e.data.message,P.options)})).catch((function(e){J(!1),(0,I.default)("error",e.message,P.options)}))):ue((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:R.errors})}))})):ue((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:R.errors})}))}))},children:K?(0,B.jsx)(f.Z,{size:24,sx:{color:"white"}}):"Submit"})]})]})}),(0,B.jsx)(c.ZP,{item:!0,xs:0,md:5,children:(0,B.jsx)(a.Z,{sx:{backgroundColor:"#4163DD",width:"100%",height:"100%",display:{xs:"none",md:"flex"},justifyContent:"center",alignItems:"center"},children:(0,B.jsxs)(a.Z,{sx:{backgroundColor:"#F4F5FB",width:"90%",borderRadius:3,boxShadow:5,p:2},children:[(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:18},children:w.title}),(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:14,color:"#BEBEBE"},children:w.position}),(0,B.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:1},children:[(0,B.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",backgroundColor:"white",p:"5px 15px",borderRadius:3,boxShadow:5},children:[(0,B.jsx)(Z.Z,{alt:w.client.fullname,src:w&&w.client&&w.client.profile[0].profile_url}),(0,B.jsx)(d.Z,{sx:{ml:1},children:w.client.fullname})]}),(0,B.jsxs)(a.Z,{children:[w.rate&&(0,B.jsxs)(d.Z,{sx:{fontWeight:"bold",fontSize:16},children:["\u20b1 ",w.rate]}),(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:16},children:w.days?"".concat(w.days," days"):"\u20b1 ".concat(w.budget)})]})]})]})})})]})})}),(0,B.jsx)(a.Z,{sx:{maxHeight:"72vh",overflow:"auto","::-webkit-scrollbar":{display:"none"}},children:(0,W.isAuth)()&&(0,B.jsxs)(a.Z,{sx:{p:2},children:[(0,B.jsxs)(a.Z,{sx:{backgroundColor:"#F4F5FB",width:"90%",m:"10px auto",borderRadius:3,boxShadow:5,p:2},children:[(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:18},children:w.title}),(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:14,color:"#BEBEBE"},children:w.position}),(0,B.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:1},children:[(0,B.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",backgroundColor:"white",p:"5px 15px",borderRadius:3,boxShadow:5},children:[(0,B.jsx)(Z.Z,{alt:w.client.fullname,src:w&&w.client&&w.client.profile[0].profile_url}),(0,B.jsx)(d.Z,{sx:{ml:1},children:w.client.fullname})]}),(0,B.jsxs)(a.Z,{align:"right",children:[w.rate&&(0,B.jsxs)(d.Z,{sx:{fontWeight:"bold",fontSize:16},children:["\u20b1 ",w.rate]}),(0,B.jsx)(d.Z,{sx:{fontWeight:"bold",fontSize:16},children:w.days?"".concat(w.days):"\u20b1 ".concat(w.budget)})]})]})]}),(0,B.jsx)(E.default,{handleCancel:t,selectedItem:w,onHandleSubmit:F})]})})]})})})]})}},2527:function(e,r,t){t.r(r);var n=t(31243).Z.create();n.defaults.baseURL="http://localhost:8000/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("clientToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("clientToken"),window.location.href="/";return Promise.reject(e)})),r.default=n},87749:function(e,r,t){var n=t(64836);r.Z=void 0;var o=n(t(45649)),s=t(80184),a=(0,o.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");r.Z=a},20165:function(e,r,t){var n=t(64836);r.Z=void 0;var o=n(t(45649)),s=t(80184),a=(0,o.default)((0,s.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=a},94454:function(e,r,t){t.d(r,{Z:function(){return z}});var n=t(4942),o=t(63366),s=t(87462),a=t(72791),i=t(28182),l=t(94419),c=t(12065),d=t(97278),u=t(74223),m=t(80184),x=(0,u.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,u.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(14036),Z=t(31402),j=t(66934),b=t(75878),v=t(21217);function g(e){return(0,v.Z)("MuiCheckbox",e)}var k=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,j.ZP)(d.Z,{shouldForwardProp:function(e){return(0,j.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r["color".concat((0,f.Z)(t.color))]]}})((function(e){var r,t=e.theme,o=e.ownerState;return(0,s.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(r={},(0,n.Z)(r,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:(t.vars||t).palette[o.color].main}),(0,n.Z)(r,"&.".concat(k.disabled),{color:(t.vars||t).palette.action.disabled}),r))})),S=(0,m.jsx)(h,{}),w=(0,m.jsx)(x,{}),_=(0,m.jsx)(p,{}),z=a.forwardRef((function(e,r){var t,n,c=(0,Z.Z)({props:e,name:"MuiCheckbox"}),d=c.checkedIcon,u=void 0===d?S:d,x=c.color,h=void 0===x?"primary":x,p=c.icon,j=void 0===p?w:p,b=c.indeterminate,v=void 0!==b&&b,k=c.indeterminateIcon,z=void 0===k?_:k,P=c.inputProps,I=c.size,A=void 0===I?"medium":I,W=c.className,E=(0,o.Z)(c,C),q=v?z:j,H=v?z:u,B=(0,s.Z)({},c,{color:h,indeterminate:v,size:A}),R=function(e){var r=e.classes,t=e.indeterminate,n=e.color,o={root:["root",t&&"indeterminate","color".concat((0,f.Z)(n))]},a=(0,l.Z)(o,g,r);return(0,s.Z)({},r,a)}(B);return(0,m.jsx)(y,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":v},P),icon:a.cloneElement(q,{fontSize:null!=(t=q.props.fontSize)?t:A}),checkedIcon:a.cloneElement(H,{fontSize:null!=(n=H.props.fontSize)?n:A}),ownerState:B,ref:r,className:(0,i.Z)(R.root,W)},E,{classes:R}))}))}}]);
//# sourceMappingURL=9231.ac658bcb.chunk.js.map