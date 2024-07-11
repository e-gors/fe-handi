"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[8869,3778,8292,3850,3845],{64253:function(e,t,r){r.r(t);var n=r(1413),s=r(45987),a=r(93006),i=(r(72791),r(80184)),o=["errors","name","customError"];t.default=function(e){var t=e.errors,r=e.name,l=e.customError,c=(0,s.Z)(e,o),d=!1,u="";l&&(d=!0,u=l),t&&(d=t&&t.has(r)||!1,u=t&&t.first(r)||"");var p=(0,n.Z)((0,n.Z)({error:d,name:r,helperText:u},c),{},{value:c.value||""});return(0,i.jsx)(a.Z,(0,n.Z)({size:"small",variant:"outlined"},p))}},53778:function(e,t,r){r.r(t);var n=r(1413),s=r(45987),a=(r(72791),r(68096)),i=r(30829),o=r(58406),l=r(77196),c=r(23786),d=r(47071),u=r(80184),p=["label","errors","options","categories","subCategories","customError"];t.default=function(e){var t=e.label,r=e.errors,x=e.options,h=void 0===x?[]:x,m=e.categories,g=void 0===m?[]:m,f=e.subCategories,Z=void 0===f?[]:f,j=e.customError,b=(0,s.Z)(e,p),v=!1,y="";j&&(v=j.error||!1,y=j.message||""),r&&(v=r&&r.has(e.name)||!1,y=r&&r.first(e.name)||"");var C=(0,n.Z)({margin:"dense",error:v},b);return(0,u.jsxs)(a.Z,{size:"small",sx:{width:"100%",mt:.5,mb:.5},children:[(0,u.jsx)(i.Z,{id:"dropdown-label",children:t}),(0,u.jsxs)(o.Z,(0,n.Z)((0,n.Z)({labelId:"dropdown-label",input:(0,u.jsx)(l.Z,{label:t})},C),{},{children:[h.map((function(e,t){return(0,u.jsx)(c.Z,{value:e,children:e},t)})),g.map((function(e,t){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},t)})),Z.map((function(e){return e.children.map((function(e,t){return(0,u.jsx)(c.Z,{value:e.name,children:e.name},t)}))}))]})),(0,u.jsx)(d.Z,{error:!0,children:y})]})}},8292:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(75985);function s(e,t,r){return"success"===e?n.Am.success(t,r):n.Am.error(t,r)}},49293:function(e,t,r){r.r(t),r.d(t,{default:function(){return a}});var n=r(75985),s=(r(5462),r(80184));function a(){return(0,s.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,t,r){r.r(t),r.d(t,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},15432:function(e,t,r){r.r(t);var n=r(42982),s=r(4942),a=r(1413),i=r(70885),o=r(68870),l=r(20890),c=r(47071),d=r(61889),u=r(36151),p=r(29472),x=r(72791),h=r(64253),m=r(66770),g=r.n(m),f=(r(86009),r(67394)),Z=r(31783),j=r(8292),b=r(33850),v=r(49293),y=r(80813),C=r(50194),k=r(19924),w=r(49861),S=r(80184),W=new Z.ZP.Validator({title:"required"}),I={wrapper:{mt:2},titleWrapper:{mt:2,mb:2,".ql-editor":{height:200}},jobDesHelperText:{mt:1,mb:1},addImagesWrapper:{width:"100%",border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,"&:hover":{border:"2px dashed blue"},backgroundColor:"white"},addImageLeftWrapper:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:{xs:"wrap",md:"noWrap"}},dragDropText:{fontSize:12,textAlign:"center"},browse:{ml:{xs:0,sm:1,md:1},width:{xs:"100%",sm:"auto",md:"auto"}},addImageRightWrapper:{fontSize:12,color:"blue"},attachments:{fontSize:"inherit",mb:1,color:"inherit"},addFiles:{fontSize:"inherit",color:"inherit"},addImageRightBottomWrapper:{display:"flex",alignItems:"center",mt:1},articleIcon:{fontSize:24,color:"inherit"},fileTypes:{m:.5,fontSize:"inherit",color:"inherit"},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},removeIcon:{color:"red",display:"none"},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}},addNewImageWrapper:{ml:2,width:200,minWidth:200,height:120,border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{border:"2px dashed blue",".add-photo":{color:"blue"}},backgroundColor:"#EEEEEE"},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}},z=10;t.default=function(e){var t=e.activeStep,r=e.steps,m=e.handleCancel,Z=e.handleNext,B=e.handleBack,D=e.descriptions,T=e.setDescriptions,P=e.titles,E=e.setTitles,A=e.imagesContainer,R=e.setImagesContainer,F=(0,x.useRef)(null),N=x.useState(""),q=(0,i.Z)(N,2),_=q[0],H=q[1],J=x.useState(),L=(0,i.Z)(J,2),O=L[0],V=L[1],M=x.useState({values:{title:""},errors:W.errors}),Q=(0,i.Z)(M,2),U=Q[0],Y=Q[1],K=x.useState([]),G=(0,i.Z)(K,2),X=G[0],$=G[1];x.useEffect((function(){F.current&&(F.current.scrollLeft=F.current.scrollWidth)}),[X]),x.useEffect((function(){P&&Y({values:{title:P}}),D&&H(D),A&&A.length>0&&$(A)}),[]);var ee=function(e){var t=(0,n.Z)(X);t.splice(e,1),$(t)};return(0,S.jsxs)(o.Z,{sx:I.wrapper,children:[(0,S.jsx)(v.default,{}),(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(o.Z,{children:[(0,S.jsx)(l.Z,{children:"Job Title *"}),(0,S.jsx)(h.default,{fullWidth:!0,size:"small",name:"title",label:"Job Title",margin:"dense",value:U.values.title,errors:U.errors,onChange:function(e){var t=e.target.name,r=e.target.value;Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{values:(0,a.Z)((0,a.Z)({},e.values),{},(0,s.Z)({},t,r))})}));var n=W.errors;W.validate(t,r).then((function(){Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:n})}))}))},required:!0,InputProps:{style:{backgroundColor:"white"}}})]}),(0,S.jsxs)(o.Z,{sx:I.titleWrapper,children:[(0,S.jsx)(l.Z,{children:"Job Description *"}),(0,S.jsx)(c.Z,{sx:I.jobDesHelperText,children:"Use job requirements, desired experience, expectations, a company bio or details about yourself."}),(0,S.jsx)(g(),{theme:"snow",name:"job_description",value:_,onChange:function(e,t,r,n){H(e),e.length<=200?V("Job Description characters must be at least 200 or more."):V(null)},placeholder:"Describe your job. The more details the better.",style:{backgroundColor:"white"}}),O&&(0,S.jsx)(c.Z,{error:!0,children:O})]})]}),(0,S.jsxs)(o.Z,{component:"form",encType:"multipart/form-data",sx:I.addImagesWrapper,onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var t=Array.from(e.dataTransfer.files);X.length+t.length>z?(0,j.default)("error","You can only upload ".concat(z," images."),b.options):$((function(e){return[].concat((0,n.Z)(e),t)}))},children:[(0,S.jsx)("input",{id:"multiple-images",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:function(e){var t=e.target.files,r=[];if(t&&t.length>0){for(var s=X.length+t.length,a=s>z?z-X.length:t.length,i=function(e){var s=new FileReader;s.readAsDataURL(t[e]),s.onload=function(){var i=s.result,o=new File([t[e]],t[e].name,{type:"image/jpeg"});r.push({file:o,url:i}),r.length===a&&$([].concat((0,n.Z)(X),r))}},o=0;o<a;o++)i(o);s>z&&(0,j.default)("error","You can only upload ".concat(z," images."),b.options)}}}),(0,S.jsx)(o.Z,{component:"label",htmlFor:"multiple-images",sx:{cursor:"pointer"},children:X&&0===X.length&&(0,S.jsxs)(d.ZP,{container:!0,spacing:1,sx:{alignItems:"center"},children:[(0,S.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,S.jsxs)(o.Z,{align:"center",children:[(0,S.jsx)(C.Z,{sx:{fontSize:36,color:"blue"}}),(0,S.jsxs)(o.Z,{sx:I.addImageLeftWrapper,align:"center",children:[(0,S.jsx)(l.Z,{sx:I.dragDropText,children:"Drag and Drop file or"}),(0,S.jsx)(u.Z,{size:"small",variant:"contained",color:"primary",sx:I.browse,component:"label",htmlFor:"multiple-images",children:"Browse"})]})]})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,S.jsxs)(o.Z,{sx:I.addImageRightWrapper,children:[(0,S.jsx)(l.Z,{sx:I.attachments,children:"Attachments (optional)"}),(0,S.jsxs)(l.Z,{sx:I.addFiles,children:["Add files to help describe what needs to be done and for the workers' visual references. You can add"," ",(0,S.jsx)("span",{children:"up to 10 photos."})]}),(0,S.jsxs)(o.Z,{sx:I.addImageRightBottomWrapper,children:[(0,S.jsx)(y.Z,{sx:I.articleIcon}),(0,S.jsxs)(o.Z,{children:[(0,S.jsx)(l.Z,{sx:I.addFiles,children:"Max. size: 2mb each"}),(0,S.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,S.jsx)(l.Z,{sx:I.fileTypes,children:"JPEG"}),(0,S.jsx)(l.Z,{sx:I.fileTypes,children:"PNG"}),(0,S.jsx)(l.Z,{sx:I.fileTypes,children:"JPG"})]})]})]})]})})]})}),(0,S.jsxs)(o.Z,{sx:I.selectedImagesWrapper,ref:F,children:[X&&X.length>0&&X.map((function(e,t){return(0,S.jsx)(p.Z,{onClick:function(){return ee(t)},badgeContent:(0,S.jsx)(k.Z,{className:"remove",sx:I.removeIcon,onClick:function(){return ee(t)}}),sx:I.imageWrapper,children:(0,S.jsx)("img",{style:I.image,src:e.url,alt:e.name},t)},t)})),X&&X.length>0&&(0,S.jsx)(o.Z,{sx:I.addNewImageWrapper,children:(0,S.jsx)(o.Z,{component:"label",htmlFor:"multiple-images",children:(0,S.jsx)(w.Z,{className:"add-photo",sx:{fontSize:50}})})})]})]}),(0,S.jsxs)(o.Z,{sx:I.buttonWrapper,children:[(0,S.jsxs)(u.Z,{color:"primary",onClick:B,size:"small",sx:I.back,disabled:0===t,type:"text",children:[(0,S.jsx)(f.Z,{sx:I.backArrow}),(0,S.jsx)("span",{children:"Back"})]}),(0,S.jsxs)(o.Z,{sx:I.rightButtons,children:[(0,S.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:m,size:"small",sx:I.cancel,children:"Cancel"}),(0,S.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(){W.validateAll(U.values).then((function(e){if(e){if(!_||0===_.trim().length)return void V("Job Description is required.");if(O)return void(0,j.default)("error",O,b.options);E(U.values.title),T(_),X&&X.length>0&&R(X),Z()}else Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{errors:W.errors})}))}))},size:"small",sx:I.next,children:t+1===r.length?"Post my job":"Next Step"})]})]})]})}},10446:function(e,t,r){r.r(t);var n=r(42982),s=r(70885),a=r(68870),i=r(20890),o=r(47071),l=r(13400),c=r(36151),d=r(72791),u=r(64253),p=r(53778),x=r(59434),h=r(67394),m=r(42419),g=r(27247),f=r(16346),Z=r(80184),j=["Hilongos","Matalom","Hindang","Inopacan","Bato"],b={wrapper:{mt:5},titleWrapper:{mt:2,mb:2},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}};t.default=function(e){var t=e.category,r=e.steps,v=e.activeStep,y=e.handleCancel,C=e.handleNext,k=e.handleBack,w=e.locations,S=e.setLocations,W=e.skillses,I=e.setSkills,z=e.ques,B=e.setQues,D=(0,x.v9)((function(e){return e.skills.skills})),T=d.useState([]),P=(0,s.Z)(T,2),E=P[0],A=P[1],R=d.useState([]),F=(0,s.Z)(R,2),N=F[0],q=F[1],_=d.useState([]),H=(0,s.Z)(_,2),J=H[0],L=H[1];d.useEffect((function(){w&&A(w),W&&q(W),z&&L(z)}),[]);var O=function(e,t){var r="string"===typeof t?t.split(","):t;"locations"===e?A(r):q(r)},V=function(e){var t=(0,n.Z)(J);t[e].readonly=!0,L(t)},M=D.filter((function(e){return t.includes(e.name)}));return(0,Z.jsx)(a.Z,{sx:b.wrapper,children:(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(i.Z,{sx:{fontSize:24,mb:2},children:"About Applicants"}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(i.Z,{children:"Prefered Worker Location"}),(0,Z.jsx)(o.Z,{children:"You can select 1 or more locations"}),(0,Z.jsx)(p.default,{label:"Prefered Location",name:"locations",onChange:function(e){return O("locations",e.target.value)},value:E,multiple:!0,options:j})]}),(0,Z.jsxs)(a.Z,{sx:b.titleWrapper,children:[(0,Z.jsx)(i.Z,{children:"Required Skills"}),(0,Z.jsx)(o.Z,{children:"Select the professional skills and software tools required to complete this job successfully."}),(0,Z.jsx)(p.default,{value:N,name:"skills",label:"Required Skills",subCategories:M,onChange:function(e){return O("skills",e.target.value)},multiple:!0})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(i.Z,{children:"Questions"}),(0,Z.jsx)(o.Z,{children:"Add questions applicants should answer to stand out. Applicants who with great answers should be shortlisted."}),J&&J.map((function(e,t){return(0,Z.jsxs)(a.Z,{sx:{display:"flex",m:1},children:[(0,Z.jsx)(u.default,{fullWidth:!0,size:"small",label:"Question",placeholder:"Add some questions to be answered by the applicants",value:e.text,onChange:function(e){return function(e,t){var r=(0,n.Z)(J);r[t].text=e.target.value,L(r)}(e,t)},onKeyPress:function(e){return function(e,t){"Enter"===e.key&&V(t)}(e,t)},disabled:e.readonly}),!e.readonly&&(0,Z.jsx)(l.Z,{onClick:function(){return V(t)},children:(0,Z.jsx)(f.Z,{color:"primary"})}),e.readonly&&(0,Z.jsx)(l.Z,{onClick:function(){return function(e){var t=(0,n.Z)(J);t.splice(e,1),L(t)}(t)},children:(0,Z.jsx)(g.Z,{color:"error"})})]},t)})),(0,Z.jsx)(c.Z,{variant:"text",startIcon:(0,Z.jsx)(m.Z,{}),onClick:function(){L([].concat((0,n.Z)(J),[{text:"",readonly:!1}]))},children:"Add question"})]}),(0,Z.jsxs)(a.Z,{sx:b.buttonWrapper,children:[(0,Z.jsxs)(c.Z,{color:"primary",onClick:k,size:"small",sx:b.back,disabled:0===v,type:"text",children:[(0,Z.jsx)(h.Z,{sx:b.backArrow}),(0,Z.jsx)("span",{children:"Back"})]}),(0,Z.jsxs)(a.Z,{sx:b.rightButtons,children:[(0,Z.jsx)(c.Z,{variant:"outlined",color:"secondary",onClick:y,size:"small",sx:b.cancel,children:"Cancel"}),(0,Z.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(){return E.length>0&&S(E),N.length>0&&I(N),J&&J.length>0&&B(J),void C()},size:"small",sx:b.next,children:v+1===r.length?"Post my job":"Next Step"})]})]})]})})}},12178:function(e,t,r){r.r(t);var n=r(70885),s=r(68870),a=r(20890),i=r(81918),o=r(36151),l=r(13239),c=r(72791),d=r(67394),u=r(83272),p=r(87569),x=r(87749),h=r(8292),m=r(33850),g=r(63845),f=r(49293),Z=r(64880),j=r(59434),b=r(3437),v=r(80184),y={wrapper:{mt:5},jobTypeWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"},justifyContent:"space-between"},jobTypeCard:{border:"1px solid blue",borderRadius:2,p:1,width:{xs:"100%",md:"48%"},m:1},card:{width:"100%",position:"relative",backgroundColor:"green"},input:{position:"absolute",top:0,right:0},cardDesWrapper:{display:"flex",alignItems:"center"},typeIcon:{fontSize:36,mr:1},cardTitle:{fontWeight:"bold",fontSize:14},cardDescription:{fontSize:12},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}};t.default=function(e){var t=e.activeStep,r=e.handleCancel,C=e.handleBack,k=e.titles,w=e.descriptions,S=e.imagesContainer,W=void 0===S?[]:S,I=e.typeAndBudget,z=void 0===I?[]:I,B=e.ques,D=void 0===B?[]:B,T=e.skillses,P=void 0===T?[]:T,E=e.locations,A=(0,Z.k6)(),R=(0,j.I0)(),F=c.useState(!1),N=(0,n.Z)(F,2),q=N[0],_=N[1],H=c.useState("Public"),J=(0,n.Z)(H,2),L=J[0],O=J[1],V=function(e){O(e)};return(0,v.jsxs)(s.Z,{sx:y.wrapper,children:[(0,v.jsx)(f.default,{}),(0,v.jsxs)(s.Z,{children:[(0,v.jsxs)(s.Z,{sx:{mb:1,p:2},children:[z&&(0,v.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,v.jsxs)(s.Z,{align:"left",children:[(0,v.jsx)(a.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:"bold"},children:k}),(0,v.jsxs)(a.Z,{children:[z.category," ",(0,v.jsx)(u.Z,{sx:{fontSize:11}}),z.sub_category]})]}),(0,v.jsxs)(s.Z,{align:"right",children:[(0,v.jsx)(a.Z,{sx:{p:1,backgroundColor:"#FF9100",borderRadius:1},children:z.type}),"Daily Rate"===z.type&&(0,v.jsxs)(a.Z,{children:[z.rate," / Day"]}),"Fixed Cost"===z.type&&(0,v.jsx)(a.Z,{children:z.budget})]})]}),w&&(0,v.jsx)("div",{dangerouslySetInnerHTML:{__html:w}}),W&&W.length>0&&(0,v.jsx)(s.Z,{sx:y.selectedImagesWrapper,children:W&&W.length>0&&W.map((function(e,t){return(0,v.jsx)(s.Z,{sx:{m:.5},children:(0,v.jsx)("img",{style:y.image,src:e.url,alt:e.name})},t)}))})]}),(W.length>0||z.length>0||D.length>0||P.length>0||E)&&(0,v.jsxs)(s.Z,{sx:{mb:1,p:2},children:[(0,v.jsx)(a.Z,{sx:{fontSize:24,fontWeight:600},children:"Details"}),z&&"Daily Rate"===z.type&&(0,v.jsx)(s.Z,{children:(0,v.jsxs)(a.Z,{children:[(0,v.jsx)("span",{children:"Estimated days:"})," ",z.days]})}),E&&(0,v.jsxs)(s.Z,{sx:{display:"flex",mt:1},children:[(0,v.jsx)(a.Z,{children:"Location: "}),(0,v.jsx)(s.Z,{sx:{ml:1},children:E&&E.map((function(e,t){return(0,v.jsx)(i.Z,{label:e,color:"primary",variant:"outlined",sx:{m:.2}},t)}))})]}),P&&0!==P.length&&(0,v.jsxs)(s.Z,{sx:{display:"flex",mt:1},children:[(0,v.jsx)(a.Z,{children:"Skills:"}),(0,v.jsx)(s.Z,{sx:{ml:1},children:P&&P.map((function(e,t){return(0,v.jsx)(i.Z,{label:e,color:"primary",variant:"outlined",sx:{m:.2}},t)}))})]})]}),D&&D.length>0&&(0,v.jsxs)(s.Z,{sx:{mb:2,p:2},children:[(0,v.jsx)(a.Z,{children:"Questions"}),(0,v.jsx)(s.Z,{component:"ol",children:D&&D.map((function(e,t){return(0,v.jsx)(a.Z,{component:"li",children:e.text},t)}))})]}),(0,v.jsxs)(s.Z,{sx:{mt:2},children:[(0,v.jsx)(a.Z,{children:"Job Visibility *"}),(0,v.jsxs)(s.Z,{sx:y.jobTypeWrapper,children:[(0,v.jsx)(s.Z,{sx:y.jobTypeCard,children:(0,v.jsxs)(s.Z,{component:"label",htmlFor:"daily-rate",sx:y.card,children:[(0,v.jsx)("input",{id:"daily-rate",type:"radio",name:"type",value:"Daily Rate",checked:"Public"===L,onChange:function(){return V("Public")},style:y.input}),(0,v.jsxs)(s.Z,{sx:y.cardDesWrapper,children:[(0,v.jsx)(p.Z,{color:"primary",sx:y.typeIcon}),(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(a.Z,{sx:y.cardTitle,children:"Public"}),(0,v.jsx)(a.Z,{sx:y.cardDescription,children:"Your job is shown in search results and workers can freely apply to it."})]})]})]})}),(0,v.jsx)(s.Z,{sx:y.jobTypeCard,children:(0,v.jsxs)(s.Z,{component:"label",htmlFor:"fixed-rate",sx:y.card,children:[(0,v.jsx)("input",{id:"fixed-rate",type:"radio",name:"type",value:"Fixed Cost",checked:"Private"===L,onChange:function(){return V("Private")},style:y.input}),(0,v.jsxs)(s.Z,{sx:y.cardDesWrapper,children:[(0,v.jsx)(x.Z,{color:"primary",sx:y.typeIcon}),(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(a.Z,{sx:y.cardTitle,children:"Private"}),(0,v.jsx)(a.Z,{sx:y.cardDescription,children:"Not shown in search results, but you can invite workers to apply."})]})]})]})})]})]}),(0,v.jsxs)(s.Z,{sx:y.buttonWrapper,children:[(0,v.jsxs)(o.Z,{color:"primary",onClick:C,size:"small",sx:y.back,disabled:0===t,type:"text",children:[(0,v.jsx)(d.Z,{sx:y.backArrow}),(0,v.jsx)("span",{children:"Back"})]}),(0,v.jsxs)(s.Z,{sx:y.rightButtons,children:[(0,v.jsx)(o.Z,{variant:"outlined",color:"secondary",onClick:r,size:"small",sx:y.cancel,children:"Cancel"}),(0,v.jsx)(o.Z,{variant:"contained",color:"primary",onClick:function(){_(!0);var e=new FormData;e.append("title",k),e.append("description",w),e.append("typeAndBudget",JSON.stringify([z])),e.append("status",L),W&&W.length>0&&W.forEach((function(t){e.append("images[]",t.file)})),D&&D.length>0&&e.append("questions",JSON.stringify(D)),P&&P.length>0&&e.append("skills",JSON.stringify(P)),E&&E.length>0&&e.append("locations",JSON.stringify(E)),g.default.post("/new/job-post",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.data.code?((0,h.default)("success",e.data.message,m.options),localStorage.setItem("postedUrl",e.data.url),R((0,b.updateUser)(e.data.user)),setTimeout((function(){return A.push("/new/job/posted")}),2e3)):(0,h.default)("error",e.data.message,m.options),_(!1)})).catch((function(e){_(!1),(0,h.default)("error",e.message,m.options)}))},size:"small",sx:y.next,disabled:q,children:q?(0,v.jsx)(l.Z,{size:24,sx:{color:"white"}}):"Post my job"})]})]})]})]})}},95044:function(e,t,r){r.r(t);var n=r(4942),s=r(1413),a=r(70885),i=r(68870),o=r(61889),l=r(20890),c=r(47071),d=r(63466),u=r(36151),p=r(72791),x=r(53778),h=r(64253),m=r(67394),g=r(31783),f=r(59434),Z=r(33970),j=r(86501),b=r(44238),v=r(80184),y=new g.ZP.Validator({category:"required",sub_category:"required",type:"required",rate:"required",budget:"required",days:"required"}),C=["41+ days","31-40 days","21-30 days","11-20 days","1-10 days"],k={wrapper:{mt:5},titleWrapper:{mt:2,mb:2},jobDesHelperText:{mt:1,mb:1},jobTypeWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"},justifyContent:"space-between"},jobTypeCard:{border:"1px solid blue",borderRadius:2,p:1,width:{xs:"100%",md:"48%"},m:1},card:{width:"100%",position:"relative",backgroundColor:"green"},input:{position:"absolute",top:0,right:0},cardDesWrapper:{display:"flex",alignItems:"center"},typeIcon:{fontSize:36,mr:1},cardTitle:{fontWeight:"bold",fontSize:14},cardDescription:{fontSize:12},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}};t.default=function(e){var t=e.steps,r=e.activeStep,g=e.handleCancel,w=e.handleNext,S=e.handleBack,W=e.typeAndBudget,I=e.setTypeAndBudget,z=(0,f.v9)((function(e){return e.categories.categories})),B=p.useState({values:{category:"",sub_category:"",rate:"",days:"",type:"Daily Rate"},errors:y.errors}),D=(0,a.Z)(B,2),T=D[0],P=D[1],E=T.values.type;p.useEffect((function(){W&&P({values:(0,s.Z)({},W)})}),[]),p.useEffect((function(){"Daily Rate"===E&&P((function(e){return(0,s.Z)((0,s.Z)({},e),{},{values:{category:e.values.category,sub_category:e.values.sub_category,rate:e.values.rate,days:e.values.days,type:e.values.type}})})),"Fixed Cost"===E&&P((function(e){return(0,s.Z)((0,s.Z)({},e),{},{values:{category:e.values.category,sub_category:e.values.sub_category,type:e.values.type,budget:""}})}))}),[E]);var A=function(e){var t=e.target.name,r=e.target.value;P((function(e){return(0,s.Z)((0,s.Z)({},e),{},{values:(0,s.Z)((0,s.Z)({},e.values),{},(0,n.Z)({},t,r))})}));var a=y.errors;y.validate(t,r).then((function(e){e||P((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:a})}))}))},R=function(e){var t=(0,b.formatValue)(T.values[e]);P((function(r){return(0,s.Z)((0,s.Z)({},r),{},{values:(0,s.Z)((0,s.Z)({},r.values),{},(0,n.Z)({},e,t))})}))},F=z.filter((function(e){return T.values.category.includes(e.name)}));return(0,v.jsxs)(i.Z,{sx:k.wrapper,children:[(0,v.jsxs)(i.Z,{component:"form",children:[(0,v.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,v.jsxs)(o.ZP,{item:!0,xs:12,md:6,children:[(0,v.jsx)(l.Z,{children:"Job Category *"}),(0,v.jsx)(c.Z,{children:"Select a Job Category that describes your job best."}),(0,v.jsx)(x.default,{label:"Job Category",name:"category",errors:T.errors,onChange:A,value:T.values.category,categories:z,required:!0})]}),(0,v.jsxs)(o.ZP,{item:!0,xs:12,md:6,children:[(0,v.jsx)(l.Z,{children:"Job Position *"}),(0,v.jsx)(c.Z,{children:"Select a Job position that describes your job best."}),(0,v.jsx)(x.default,{disabled:!T.values.category,label:T.values.category?"Job Position":"Please select Job Category",name:"sub_category",errors:T.errors,onChange:A,value:T.values.sub_category,subCategories:F,required:!0,readOnly:!T.values.category})]})]}),(0,v.jsxs)(i.Z,{sx:{mt:2},children:[(0,v.jsx)(l.Z,{children:"Job Type *"}),(0,v.jsxs)(i.Z,{sx:k.jobTypeWrapper,children:[(0,v.jsx)(i.Z,{sx:k.jobTypeCard,children:(0,v.jsxs)(i.Z,{component:"label",htmlFor:"daily-rate",sx:k.card,children:[(0,v.jsx)("input",{id:"daily-rate",type:"radio",name:"type",value:"Daily Rate",checked:"Daily Rate"===T.values.type,onChange:A,style:k.input}),(0,v.jsxs)(i.Z,{sx:k.cardDesWrapper,children:[(0,v.jsx)(Z.Z,{color:"primary",sx:k.typeIcon}),(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(l.Z,{sx:k.cardTitle,children:"Daily Rate"}),(0,v.jsx)(l.Z,{sx:k.cardDescription,children:"Based on worker's daily rate and number of days tracked"})]})]})]})}),(0,v.jsx)(i.Z,{sx:k.jobTypeCard,children:(0,v.jsxs)(i.Z,{component:"label",htmlFor:"fixed-rate",sx:k.card,children:[(0,v.jsx)("input",{id:"fixed-rate",type:"radio",name:"type",value:"Fixed Cost",checked:"Fixed Cost"===T.values.type,onChange:A,style:k.input}),(0,v.jsxs)(i.Z,{sx:k.cardDesWrapper,children:[(0,v.jsx)(j.Z,{color:"primary",sx:k.typeIcon}),(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(l.Z,{sx:k.cardTitle,children:"Fixed Cost"}),(0,v.jsx)(l.Z,{sx:k.cardDescription,children:"A fixed cost amount paid when the project or each milestone is completed"})]})]})]})})]})]}),T&&"Daily Rate"===T.values.type&&(0,v.jsx)(i.Z,{sx:{mt:2,mb:2},children:(0,v.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,v.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(l.Z,{children:"Estimated Days *"}),(0,v.jsx)(c.Z,{children:"What is the estimated days?"}),(0,v.jsx)(x.default,{label:"Estiimated Days",name:"days",errors:T.errors,value:T.values.days,onChange:A,options:C,required:!0})]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,v.jsxs)(i.Z,{sx:{mt:.5},children:[(0,v.jsx)(l.Z,{children:"Estimated Rate *"}),(0,v.jsx)(c.Z,{children:"What is the estimated rate per day?"}),(0,v.jsx)(h.default,{fullWidth:!0,label:"Estimated Rate",name:"rate",errors:T.errors,value:T.values.rate,onBlur:function(){return R("rate")},onChange:A,required:!0,InputProps:{startAdornment:(0,v.jsx)(d.Z,{position:"start",children:"\u20b1"})}})]})})]})}),T&&"Fixed Cost"===T.values.type&&(0,v.jsxs)(i.Z,{sx:{mt:2},children:[(0,v.jsx)(l.Z,{children:"Estimated Budget *"}),(0,v.jsx)(c.Z,{children:"What is your estimated budget for this job?"}),(0,v.jsx)(h.default,{name:"budget",label:"Estimated Budget",value:T.values.budget,onBlur:function(){return R("budget")},onChange:A,errors:T.errors,InputProps:{startAdornment:(0,v.jsx)(d.Z,{position:"start",children:"\u20b1"})}})]})]}),(0,v.jsxs)(i.Z,{sx:k.buttonWrapper,children:[(0,v.jsxs)(u.Z,{color:"primary",onClick:S,size:"small",sx:k.back,disabled:0===r,type:"text",children:[(0,v.jsx)(m.Z,{sx:k.backArrow}),(0,v.jsx)("span",{children:"Back"})]}),(0,v.jsxs)(i.Z,{sx:k.rightButtons,children:[(0,v.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:g,size:"small",sx:k.cancel,children:"Cancel"}),(0,v.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(){y.validateAll(T.values).then((function(e){e?(I(T.values),w()):P((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:y.errors})}))}))},size:"small",sx:k.next,children:r+1===t.length?"Post my job":"Next Step"})]})]})]})}},9189:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(70885),s=r(4942),a=r(1413),i=r(72791),o=r(68870),l=r(40986),c=r(20890),d=r(36314),u=r(63875),p=r(74512),x=r(15825),h=r(64880),m=r(66934),g=r(25878),f=r(48078),Z=r(77961),j=r(93379),b=r(56856),v=r(23285),y=r(15432),C=r(95044),k=r(10446),w=r(12178),S=r(41143),W=r(80184);function I(e){return(0,W.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,W.jsx)(o.Z,{sx:{width:"100%",mr:1},children:(0,W.jsx)(l.Z,(0,a.Z)({variant:"determinate"},e))}),(0,W.jsx)(o.Z,{sx:{minWidth:35},children:(0,W.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}(0,m.ZP)("div")((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)((0,a.Z)({color:"dark"===t.palette.mode?t.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center"},r.active&&{color:"#784af4"}),{},{"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})}));var z=(0,m.ZP)(b.Z)((function(e){var t,r=e.theme;return t={},(0,s.Z)(t,"&.".concat(v.Z.alternativeLabel),{top:22}),(0,s.Z)(t,"&.".concat(v.Z.active),(0,s.Z)({},"& .".concat(v.Z.line),{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"})),(0,s.Z)(t,"&.".concat(v.Z.completed),(0,s.Z)({},"& .".concat(v.Z.line),{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"})),(0,s.Z)(t,"& .".concat(v.Z.line),{height:3,border:0,backgroundColor:"dark"===r.palette.mode?r.palette.grey[800]:"#eaeaf0",borderRadius:1}),t})),B=(0,m.ZP)("div")((function(e){var t=e.theme,r=e.ownerState;return(0,a.Z)((0,a.Z)({backgroundColor:"dark"===t.palette.mode?t.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},r.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"}),r.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"})}));function D(e){var t=e.active,r=e.completed,n=e.className,s={1:(0,W.jsx)(g.Z,{}),2:(0,W.jsx)(f.Z,{}),3:(0,W.jsx)(Z.Z,{}),4:(0,W.jsx)(j.Z,{})};return(0,W.jsx)(B,{ownerState:{completed:r,active:t},className:n,children:s[String(e.icon)]})}var T=["Basic Info","Type and Budget","Optional Fields","Review and Post"],P=100/T.length;function E(){var e=(0,h.k6)(),t=i.useState(!1),r=(0,n.Z)(t,2),s=r[0],a=r[1],l=i.useState(!1),m=(0,n.Z)(l,2),g=m[0],f=(m[1],i.useState(0)),Z=(0,n.Z)(f,2),j=Z[0],b=Z[1],v=i.useState(P),B=(0,n.Z)(v,2),E=B[0],A=B[1],R=i.useState(),F=(0,n.Z)(R,2),N=F[0],q=F[1],_=i.useState(""),H=(0,n.Z)(_,2),J=H[0],L=H[1],O=i.useState(),V=(0,n.Z)(O,2),M=V[0],Q=V[1],U=i.useState(),Y=(0,n.Z)(U,2),K=Y[0],G=Y[1],X=i.useState(),$=(0,n.Z)(X,2),ee=$[0],te=$[1],re=i.useState([]),ne=(0,n.Z)(re,2),se=ne[0],ae=ne[1],ie=i.useState([]),oe=(0,n.Z)(ie,2),le=oe[0],ce=oe[1],de=function(){b((function(e){return e+1})),A((function(e){return e+P}))},ue=function(){b((function(e){return e-1})),A((function(e){return e-P}))},pe=function(){a(!0)};return(0,W.jsxs)(d.Z,{sx:{width:"100%",mt:10},spacing:1,children:[(0,W.jsx)(S.default,{open:s,onClose:function(){a(!1)},message:"Are you sure you want to proceed? Changes you made will not be saved!",onConfirm:function(){e.goBack()},title:"Quit Job Posting",loading:g}),(0,W.jsx)(u.Z,{alternativeLabel:!0,activeStep:j,connector:(0,W.jsx)(z,{}),children:T.map((function(e,t){return(0,W.jsx)(p.Z,{children:(0,W.jsx)(x.Z,{StepIconComponent:D,children:e})},t)}))}),(0,W.jsx)(o.Z,{children:(0,W.jsxs)(o.Z,{sx:{p:2,maxWidth:800,margin:"0 auto"},children:[(0,W.jsxs)(o.Z,{sx:{p:2},children:[(0,W.jsx)(c.Z,{sx:{fontSize:{xs:20,md:24},fontWeight:600},children:"Post a Job"}),(0,W.jsx)(c.Z,{children:"It takes 2 minutes."}),(0,W.jsx)(c.Z,{children:"No payment processing fees. Absolutely no fees for Clients... ever."})]}),(0,W.jsxs)(o.Z,{sx:{backgroundColor:"#EEEEEE",p:2,borderRadius:3,boxShadow:5},children:[(0,W.jsxs)(o.Z,{sx:{borderRadius:3,textAlign:"center",boxShadow:3,p:2},children:[(0,W.jsx)(c.Z,{sx:{fontWeight:600,fontSize:{xs:20,md:24}},children:0===j?"Basic Info":1===j?"Type and Budget":2===j?" Optional Fields":"Review and Post"}),(0,W.jsxs)(c.Z,{sx:{mb:2,fontSize:{xs:12,md:14}},children:["Step ",j+1," of ",T.length]}),(0,W.jsx)(o.Z,{sx:{width:"100%"},children:(0,W.jsx)(I,{value:E,sx:{height:10}})})]}),0===j&&(0,W.jsx)(y.default,{activeStep:j,steps:T,handleCancel:pe,handleNext:de,handleBack:ue,titles:N,setTitles:q,descriptions:J,setDescriptions:L,imagesContainer:M,setImagesContainer:Q}),1===j&&(0,W.jsx)(C.default,{activeStep:j,steps:T,handleCancel:pe,handleNext:de,handleBack:ue,typeAndBudget:K,setTypeAndBudget:G}),2===j&&(0,W.jsx)(k.default,{category:K.category,activeStep:j,steps:T,handleCancel:pe,handleNext:de,handleBack:ue,ques:le,setQues:ce,skillses:se,setSkills:ae,locations:ee,setLocations:te}),3===j&&(0,W.jsx)(w.default,{activeStep:j,steps:T,handleCancel:pe,handleNext:de,handleBack:ue,titles:N,descriptions:J,imagesContainer:M,typeAndBudget:K,ques:le,skillses:se,locations:ee})]})]})})]})}},63845:function(e,t,r){r.r(t);var n=r(31243).Z.create();n.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=n},42419:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},83272:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)([(0,a.jsx)("path",{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"},"0"),(0,a.jsx)("path",{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"},"1")],"DoubleArrow");t.Z=i},33970:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2H6zm10 14.5V20H8v-3.5l4-4 4 4z"}),"HourglassTop");t.Z=i},25878:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=i},87749:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=i},86501:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn");t.Z=i},87569:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.Z=i},16346:function(e,t,r){var n=r(64836);t.Z=void 0;var s=n(r(45649)),a=r(80184),i=(0,s.default)((0,a.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt");t.Z=i}}]);
//# sourceMappingURL=8869.36f687eb.chunk.js.map