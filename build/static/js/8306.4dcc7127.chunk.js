"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[8306,3778,8292,3850,6245,3845],{64253:function(e,r,t){t.r(r);var n=t(1413),s=t(45987),a=t(93006),o=(t(72791),t(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,t=e.name,l=e.customError,d=(0,s.Z)(e,i),c=!1,u="";l&&(c=!0,u=l),r&&(c=r&&r.has(t)||!1,u=r&&r.first(t)||"");var p=(0,n.Z)((0,n.Z)({error:c,name:t,helperText:u},d),{},{value:d.value||""});return(0,o.jsx)(a.Z,(0,n.Z)({size:"small",variant:"outlined"},p))}},53778:function(e,r,t){t.r(r);var n=t(1413),s=t(45987),a=(t(72791),t(68096)),o=t(30829),i=t(58406),l=t(77196),d=t(23786),c=t(47071),u=t(80184),p=["label","errors","options","categories","subCategories","customError"];r.default=function(e){var r=e.label,t=e.errors,h=e.options,f=void 0===h?[]:h,x=e.categories,m=void 0===x?[]:x,Z=e.subCategories,g=void 0===Z?[]:Z,j=e.customError,v=(0,s.Z)(e,p),b=!1,y="";j&&(b=j.error||!1,y=j.message||""),t&&(b=t&&t.has(e.name)||!1,y=t&&t.first(e.name)||"");var C=(0,n.Z)({margin:"dense",error:b},v);return(0,u.jsxs)(a.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,u.jsx)(o.Z,{id:"dropdown-label",children:r}),(0,u.jsxs)(i.Z,(0,n.Z)((0,n.Z)({labelId:"dropdown-label",input:(0,u.jsx)(l.Z,{label:r})},C),{},{children:[f.map((function(e,r){return(0,u.jsx)(d.Z,{value:e,children:e},r)})),m.map((function(e,r){return(0,u.jsx)(d.Z,{value:e.name,children:e.name},r)})),g.map((function(e){return e.children.map((function(e,r){return(0,u.jsx)(d.Z,{value:e.name,children:e.name},r)}))}))]})),(0,u.jsx)(c.Z,{error:!0,children:y})]})}},8292:function(e,r,t){t.r(r),t.d(r,{default:function(){return s}});var n=t(75985);function s(e,r,t){return"success"===e?n.Am.success(r,t):n.Am.error(r,t)}},49293:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var n=t(75985),s=(t(5462),t(80184));function a(){return(0,s.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,t){t.r(r),t.d(r,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},66245:function(e,r,t){t.r(r),t.d(r,{clientRegister:function(){return i},registerOnApply:function(){return l},workerRegister:function(){return o}});var n=t(31243),s="http://127.0.0.1:8000/api",a=n.Z.create();a.defaults.baseURL=s,a.defaults.headers.common.Accept="application/json",a.defaults.headers.common["Content-Type"]="application/json",a.interceptors.response.use((function(e){return e}),(function(e){return e.message,Promise.reject(e)})),r.default=a;var o=function(e,r,t){return n.Z.post("".concat(s,"/join-us/").concat(e),{formValues:r.values,expertise:t.values},{headers:{Accept:"application/json"}})},i=function(e,r){return n.Z.post("".concat(s,"/join-us/").concat(e),r.values,{headers:{Accept:"application/json"}})},l=function(e,r){return n.Z.post("".concat(s,"/apply/register"),{formValues:e.values,expertise:r.values},{headers:{Accept:"application/json"}})}},48306:function(e,r,t){t.r(r);var n=t(42982),s=t(4942),a=t(1413),o=t(70885),i=t(68870),l=t(20890),d=t(56786),c=t(93044),u=t(68096),p=t(17133),h=t(88970),f=t(85523),x=t(61419),m=t(61889),Z=t(47071),g=t(63466),j=t(13400),v=t(36151),b=t(29472),y=t(94721),C=t(13239),w=t(72791),E=t(64253),k=t(59434),I=t(1444),S=t(31783),W=t(53778),B=t(44238),T=t(26759),D=t(70366),P=t(66770),R=t.n(P),z=(t(86009),t(8292)),F=t(33850),A=t(49293),O=t(80813),q=t(50194),L=t(19924),N=t(49861),_=t(63845),J=t(64880),Y=t(41143),H=t(66245),V=t(80184),U=new S.ZP.Validator({type:"required",rate:"required",budget:"required",days:"required",title:"min:5|max:20"}),G=["41+ days","31-40 days","21-30 days","11-20 days","1-10 days"],M={wrapper:{mt:8,p:3},main:{maxWidth:800,backgroundColor:"#EEEEEE",m:"20px auto",boxShadow:5},titleWrapper:{mt:2,mb:2,".ql-editor":{height:200}},jobDesHelperText:{mt:1,mb:1},addImagesWrapper:{width:"100%",border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,"&:hover":{border:"2px dashed blue"},backgroundColor:"white"},addImageLeftWrapper:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:{xs:"wrap",md:"noWrap"}},dragDropText:{fontSize:12,textAlign:"center"},browse:{ml:{xs:0,sm:1,md:1},width:{xs:"100%",sm:"auto",md:"auto"}},addImageRightWrapper:{fontSize:12,color:"blue"},attachments:{fontSize:"inherit",mb:1,color:"inherit"},addFiles:{fontSize:"inherit",color:"inherit"},addImageRightBottomWrapper:{display:"flex",alignItems:"center",mt:1},articleIcon:{fontSize:24,color:"inherit"},fileTypes:{m:.5,fontSize:"inherit",color:"inherit"},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},removeIcon:{color:"red",display:"none"},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}},addNewImageWrapper:{ml:2,width:200,minWidth:200,height:120,border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{border:"2px dashed blue",".add-photo":{color:"blue"}},backgroundColor:"#EEEEEE"}},X=10;r.default=function(){var e,r,t=null!==(e=(0,k.v9)((function(e){return e.users.user.jobs})))&&void 0!==e?e:[],S=(0,J.k6)(),P=((0,k.I0)(),(0,w.useRef)(null)),K=w.useState(""),Q=(0,o.Z)(K,2),$=(Q[0],Q[1]),ee=w.useState([]),re=(0,o.Z)(ee,2),te=re[0],ne=re[1],se=w.useState(!1),ae=(0,o.Z)(se,2),oe=ae[0],ie=ae[1],le=w.useState(!1),de=(0,o.Z)(le,2),ce=de[0],ue=de[1],pe=w.useState(!1),he=(0,o.Z)(pe,2),fe=he[0],xe=he[1],me=w.useState({}),Ze=(0,o.Z)(me,2),ge=Ze[0],je=Ze[1],ve=w.useState(""),be=(0,o.Z)(ve,2),ye=be[0],Ce=be[1],we=w.useState([]),Ee=(0,o.Z)(we,2),ke=Ee[0],Ie=Ee[1],Se=w.useState({values:{contractor:"",post:"",title:"",rate:"",days:"",type:"Daily Rate"},errors:U.errors}),We=(0,o.Z)(Se,2),Be=We[0],Te=We[1],De=w.useState(!1),Pe=(0,o.Z)(De,2),Re=Pe[0],ze=Pe[1];w.useEffect((function(){Fe()}),[]);var Fe=function(){xe(!0),H.default.get("/user/workers").then((function(e){e.data.data&&ne(e.data.data),xe(!1)})).catch((function(e){xe(!1),console.warn(e.message)}))},Ae=Be.values.type;w.useEffect((function(){"Daily Rate"===Ae&&Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:{contractor:e.values.contractor,post:e.values.post,title:e.values.title,rate:e.values.rate,days:e.values.days,type:e.values.type}})})),"Fixed Cost"===Ae&&Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:{contractor:e.values.contractor,post:e.values.post,title:e.values.title,type:e.values.type,budget:""}})}))}),[Ae]);var Oe=function(e){var r=e.target.name,t=e.target.value;Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,s.Z)({},r,t))})}));var n=U.errors;U.validate(r,t).then((function(e){e||Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:n})}))}))},qe=function(e){var r=(0,n.Z)(ke);r.splice(e,1),Ie(r)},Le=function(e,r){$(r)},Ne=function(e){var r=(0,B.formatValue)(Be.values[e]);Te((function(t){return(0,a.Z)((0,a.Z)({},t),{},{values:(0,a.Z)((0,a.Z)({},t.values),{},(0,s.Z)({},e,r))})}))},_e=function(){ze(!Re)},Je=null===(r=ge.ratings)||void 0===r?void 0:r.length,Ye=Je>0?ge.ratings.reduce((function(e,r){return e+r.rating}),0)/Je:0;return(0,V.jsxs)(i.Z,{sx:M.wrapper,children:[(0,V.jsx)(Y.default,{open:oe,onClose:function(){return ie(!1)},message:"Your activity will not be save!",onConfirm:function(){return S.goBack()},title:"Exit Offer"}),(0,V.jsx)(A.default,{}),(0,V.jsxs)(i.Z,{sx:M.main,children:[(0,V.jsxs)(i.Z,{sx:{p:3},children:[(0,V.jsx)(l.Z,{sx:{fontWeight:"bold",fontSize:{xs:24,md:30}},children:"Create Offer"}),(0,V.jsxs)(l.Z,{children:["Send an offer to a worker on ","Handi","."]})]}),(0,V.jsx)(i.Z,{sx:{backgroundColor:"#CCCCCC",p:2},children:(0,V.jsx)(l.Z,{children:"Basic Information"})}),(0,V.jsxs)(i.Z,{sx:{mt:2,p:3},children:[(0,V.jsx)(l.Z,{children:"Contractor *"}),(0,V.jsx)(d.Z,{name:"contractor",size:"small",loading:fe,options:te,getOptionLabel:function(e){return e.fullname},renderInput:function(e){return(0,V.jsx)(E.default,(0,a.Z)((0,a.Z)({size:"small"},e),{},{label:"Contractor",variant:"outlined",value:ge?ge.fullname:""}))},onChange:function(e,r){je(r)}}),ge&&ge.profile&&(0,V.jsxs)(i.Z,{sx:{mt:2,mb:2,display:"flex",justifyContent:"space-between"},children:[(0,V.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,V.jsx)(c.Z,{alt:ge&&ge.fullname,src:ge&&ge.profile&&ge.profile[0]&&ge.profile[0].profile_url}),(0,V.jsxs)(i.Z,{sx:{ml:1},children:[(0,V.jsx)(l.Z,{sx:{fontWeight:"bold",fontSize:12},children:ge&&ge.fullname}),ge&&ge.profile&&ge.profile.about&&(0,V.jsx)("div",{style:{fontSize:11},dangerouslySetInnerHTML:{__html:ge&&ge.profile&&ge.profile.about}}),ge&&ge.profile&&null===ge.profile.about&&(0,V.jsx)(l.Z,{sx:{fontSize:11},children:"The user has no background set"})]})]}),(0,V.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,V.jsxs)(l.Z,{sx:{mr:2,fontWeight:"bold"},children:[ge&&ge.profile&&ge.profile.daily_rate?ge.profile.daily_rate:0," ","/hr"]}),(0,V.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,V.jsx)(I.Z,{}),(0,V.jsx)(l.Z,{sx:{fontWeight:"bold"},children:Ye||0})]})]})]}),(0,V.jsx)(l.Z,{children:"Posted Jobs *"}),(0,V.jsx)(d.Z,{name:"post",size:"small",options:t,getOptionLabel:function(e){return e.title},renderInput:function(e){return(0,V.jsx)(E.default,(0,a.Z)((0,a.Z)({size:"small"},e),{},{label:"Posted Jobs",name:"post",variant:"outlined",value:Be.values.post,onChange:Le}))},onChange:function(e,r){Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},{post:r?r.id:null})})}))}}),(0,V.jsx)(l.Z,{children:"Title *"}),(0,V.jsx)(E.default,{name:"title",label:Be.values.post?"You selected a posted job":"Title",fullWidth:!0,value:Be.values.post?"":Be.values.title,errors:Be.errors,onChange:Oe,disabled:!!Be.values.post})]}),(0,V.jsx)(i.Z,{sx:{backgroundColor:"#CCCCCC",p:2},children:(0,V.jsx)(l.Z,{children:"Offer Details"})}),(0,V.jsxs)(i.Z,{sx:{p:3},children:[(0,V.jsxs)(u.Z,{children:[(0,V.jsx)(p.Z,{id:"rate-type",children:"Payment Type *"}),(0,V.jsxs)(h.Z,{row:!0,"aria-labelledby":"rate-type",name:"type",value:Be.values.type,onChange:Oe,children:[(0,V.jsx)(f.Z,{value:"Daily Rate",control:(0,V.jsx)(x.Z,{}),label:"Pay by the day"}),(0,V.jsx)(f.Z,{value:"Fixed Cost",control:(0,V.jsx)(x.Z,{}),label:"Fixed price"})]})]}),Be&&"Daily Rate"===Be.values.type&&(0,V.jsxs)(i.Z,{sx:{backgroundColor:"#BEBEBE",borderRadius:3,boxShadow:5,p:2},children:[(0,V.jsx)(l.Z,{children:"For pay by the day contracts, your freelancer should provide you with accurate time tracking details so you can:"}),(0,V.jsxs)(i.Z,{sx:{ml:2},children:[(0,V.jsx)(l.Z,{component:"li",children:"Track your freelancer's working hours"}),(0,V.jsx)(l.Z,{component:"li",children:"Stay informed about their activity level"}),(0,V.jsx)(l.Z,{component:"li",children:"If you have specific requirements or tasks for the freelancer, ensure they provide progress updates"}),(0,V.jsx)(l.Z,{component:"li",children:"For accurate payment, you may request the freelancer to provide manual time tracking details"})]})]}),Be&&"Fixed Cost"===Be.values.type&&(0,V.jsx)(i.Z,{sx:{backgroundColor:"#BEBEBE",borderRadius:3,boxShadow:5,p:2},children:(0,V.jsx)(l.Z,{children:"Fixed price contracts require a refundable deposit. The budget below is an estimate. You can change the deposit amount after the contract is created and before you make the deposit."})})]}),(0,V.jsx)(i.Z,{sx:{p:2},children:(0,V.jsxs)(i.Z,{children:[Be&&"Daily Rate"===Be.values.type&&(0,V.jsx)(i.Z,{sx:{mt:2,mb:2},children:(0,V.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,V.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,V.jsxs)(i.Z,{children:[(0,V.jsx)(l.Z,{children:"Estimated Days *"}),(0,V.jsx)(Z.Z,{children:"What is the estimated days?"}),(0,V.jsx)(W.default,{label:"Estiimated Days",name:"days",errors:Be.errors,value:Be.values.days,onChange:Oe,options:G,required:!0})]})}),(0,V.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,V.jsxs)(i.Z,{sx:{mt:.5},children:[(0,V.jsx)(l.Z,{children:"Estimated Rate *"}),(0,V.jsx)(Z.Z,{children:"What is the estimated rate per day?"}),(0,V.jsx)(E.default,{fullWidth:!0,label:"Estimated Rate",name:"rate",errors:Be.errors,value:Be.values.rate,onBlur:function(){return Ne("rate")},onChange:Oe,required:!0,InputProps:{startAdornment:(0,V.jsx)(g.Z,{position:"start",children:"\u20b1"})}})]})})]})}),Be&&"Fixed Cost"===Be.values.type&&(0,V.jsxs)(i.Z,{sx:{mt:2},children:[(0,V.jsx)(l.Z,{children:"Estimated Budget *"}),(0,V.jsx)(Z.Z,{children:"What is your estimated budget for this job?"}),(0,V.jsx)(E.default,{name:"budget",label:"Estimated Budget",value:Be.values.budget,onBlur:function(){return Ne("budget")},onChange:Oe,errors:Be.errors,InputProps:{startAdornment:(0,V.jsx)(g.Z,{position:"start",children:"\u20b1"})}})]}),(0,V.jsxs)(i.Z,{sx:{mt:2,display:"flex",alignItems:"center"},children:[(0,V.jsx)(l.Z,{sx:{cursor:"pointer"},onClick:_e,children:"Instuctions (optional)"}),(0,V.jsx)("span",{style:{transition:"transform 0.3s ease",transform:Re?"rotate(180deg)":"rotate(0deg)",marginLeft:"4px"},children:(0,V.jsx)(j.Z,{onClick:_e,children:Re?(0,V.jsx)(D.Z,{}):(0,V.jsx)(T.Z,{})})})]}),Re&&(0,V.jsxs)(i.Z,{children:[(0,V.jsxs)(i.Z,{sx:M.titleWrapper,children:[(0,V.jsx)(l.Z,{children:"Job Description *"}),(0,V.jsx)(Z.Z,{sx:M.jobDesHelperText,children:"Use job requirements, desired experience, expectations, a company bio or details about yourself."}),(0,V.jsx)(R(),{theme:"snow",name:"job_description",value:ye,onChange:function(e,r,t,n){Ce(e)},placeholder:"Describe your job. The more details the better.",style:{backgroundColor:"white"}})]}),(0,V.jsxs)(i.Z,{component:"form",encType:"multipart/form-data",sx:M.addImagesWrapper,onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var r=Array.from(e.dataTransfer.files);ke.length+r.length>X?(0,z.default)("error","You can only upload ".concat(X," images."),F.options):Ie((function(e){return[].concat((0,n.Z)(e),r)}))},children:[(0,V.jsx)("input",{id:"multiple-images",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:function(e){var r=e.target.files,t=[];if(r&&r.length>0){for(var s=ke.length+r.length,a=s>X?X-ke.length:r.length,o=function(e){var s=new FileReader;s.readAsDataURL(r[e]),s.onload=function(){var o=s.result,i=new File([r[e]],r[e].name,{type:"image/jpeg"});t.push({file:i,url:o}),t.length===a&&Ie([].concat((0,n.Z)(ke),t))}},i=0;i<a;i++)o(i);s>X&&(0,z.default)("error","You can only upload ".concat(X," images."),F.options)}}}),(0,V.jsx)(i.Z,{component:"label",htmlFor:"multiple-images",sx:{cursor:"pointer"},children:ke&&0===ke.length&&(0,V.jsxs)(m.ZP,{container:!0,spacing:1,sx:{alignItems:"center"},children:[(0,V.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,V.jsxs)(i.Z,{align:"center",children:[(0,V.jsx)(q.Z,{sx:{fontSize:36,color:"blue"}}),(0,V.jsxs)(i.Z,{sx:M.addImageLeftWrapper,align:"center",children:[(0,V.jsx)(l.Z,{sx:M.dragDropText,children:"Drag and Drop file or"}),(0,V.jsx)(v.Z,{size:"small",variant:"contained",color:"primary",sx:M.browse,component:"label",htmlFor:"multiple-images",children:"Browse"})]})]})}),(0,V.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,V.jsxs)(i.Z,{sx:M.addImageRightWrapper,children:[(0,V.jsx)(l.Z,{sx:M.attachments,children:"Attachments (optional)"}),(0,V.jsxs)(l.Z,{sx:M.addFiles,children:["Add files to help describe what needs to be done and for the workers' visual references. You can add ",(0,V.jsx)("span",{children:"up to 10 photos."})]}),(0,V.jsxs)(i.Z,{sx:M.addImageRightBottomWrapper,children:[(0,V.jsx)(O.Z,{sx:M.articleIcon}),(0,V.jsxs)(i.Z,{children:[(0,V.jsx)(l.Z,{sx:M.addFiles,children:"Max. size: 2mb each"}),(0,V.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,V.jsx)(l.Z,{sx:M.fileTypes,children:"JPEG"}),(0,V.jsx)(l.Z,{sx:M.fileTypes,children:"PNG"}),(0,V.jsx)(l.Z,{sx:M.fileTypes,children:"JPG"})]})]})]})]})})]})}),(0,V.jsxs)(i.Z,{sx:M.selectedImagesWrapper,ref:P,children:[ke&&ke.length>0&&ke.map((function(e,r){return(0,V.jsx)(b.Z,{onClick:function(){return qe(r)},badgeContent:(0,V.jsx)(L.Z,{className:"remove",sx:M.removeIcon,onClick:function(){return qe(r)}}),sx:M.imageWrapper,children:(0,V.jsx)("img",{style:M.image,src:e.url,alt:e.name},r)},r)})),ke&&ke.length>0&&(0,V.jsx)(i.Z,{sx:M.addNewImageWrapper,children:(0,V.jsx)(i.Z,{component:"label",htmlFor:"multiple-images",children:(0,V.jsx)(N.Z,{className:"add-photo",sx:{fontSize:50}})})})]})]})]})]})}),(0,V.jsx)(y.Z,{}),(0,V.jsxs)(i.Z,{sx:{p:2},align:"right",children:[(0,V.jsx)(v.Z,{variant:"outlined",color:"primary",sx:{mr:2},onClick:function(){ie(!0)},children:"Cancel"}),(0,V.jsx)(v.Z,{disabled:ce,variant:"contained",color:"primary",onClick:function(){U.validateAll(Be.values).then((function(e){e?ge?Be.values.post||Be.values.title?function(){ue(!0);var e=new FormData;e.append("formValues",JSON.stringify([Be.values])),e.append("worker",JSON.stringify([ge])),ke&&ke.length>0&&ke.forEach((function(r){e.append("images[]",r.file)})),ye&&ye.trim().length>0&&e.append("instruction",ye),_.default.post("/new/job-offer",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.data.code?((0,z.default)("success",e.data.message,F.options),setTimeout((function(){return S.push("/my-offers")}),500)):(0,z.default)("error",e.data.message,F.options),ue(!1)})).catch((function(e){ue(!1),(0,z.default)("error",e.message,F.options)}))}():(0,z.default)("error","Either Post or Title is required!",F.options):(0,z.default)("error","Contractor is required!",F.options):Te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:U.errors})}))}))},children:ce?(0,V.jsx)(C.Z,{size:24}):"Send Offer"})]})]})]})}},63845:function(e,r,t){t.r(r);var n=t(31243).Z.create();n.defaults.baseURL="http://127.0.0.1:8000/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=n}}]);
//# sourceMappingURL=8306.4dcc7127.chunk.js.map