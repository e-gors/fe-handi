"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[5432,8292,3850],{64253:function(e,r,t){t.r(r);var n=t(1413),a=t(45987),s=t(93006),o=(t(72791),t(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,t=e.name,l=e.customError,c=(0,a.Z)(e,i),d=!1,u="";l&&(d=!0,u=l),r&&(d=r&&r.has(t)||!1,u=r&&r.first(t)||"");var h=(0,n.Z)((0,n.Z)({error:d,name:t,helperText:u},c),{},{value:c.value||""});return(0,o.jsx)(s.Z,(0,n.Z)({size:"small",variant:"outlined"},h))}},8292:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var n=t(75985);function a(e,r,t){return"success"===e?n.Am.success(r,t):n.Am.error(r,t)}},49293:function(e,r,t){t.r(r),t.d(r,{default:function(){return s}});var n=t(75985),a=(t(5462),t(80184));function s(){return(0,a.jsx)(n.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,t){t.r(r),t.d(r,{options:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},15432:function(e,r,t){t.r(r);var n=t(42982),a=t(4942),s=t(1413),o=t(70885),i=t(68870),l=t(20890),c=t(47071),d=t(61889),u=t(36151),h=t(29472),p=t(72791),m=t(64253),x=t(66770),f=t.n(x),g=(t(86009),t(67394)),v=t(31783),b=t(8292),Z=t(33850),j=t(49293),y=t(80813),w=t(50194),C=t(19924),z=t(49861),k=t(80184),W=new v.ZP.Validator({title:"required"}),I={wrapper:{mt:2},titleWrapper:{mt:2,mb:2,".ql-editor":{height:200}},jobDesHelperText:{mt:1,mb:1},addImagesWrapper:{width:"100%",border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,"&:hover":{border:"2px dashed blue"},backgroundColor:"white"},addImageLeftWrapper:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:{xs:"wrap",md:"noWrap"}},dragDropText:{fontSize:12,textAlign:"center"},browse:{ml:{xs:0,sm:1,md:1},width:{xs:"100%",sm:"auto",md:"auto"}},addImageRightWrapper:{fontSize:12,color:"blue"},attachments:{fontSize:"inherit",mb:1,color:"inherit"},addFiles:{fontSize:"inherit",color:"inherit"},addImageRightBottomWrapper:{display:"flex",alignItems:"center",mt:1},articleIcon:{fontSize:24,color:"inherit"},fileTypes:{m:.5,fontSize:"inherit",color:"inherit"},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},removeIcon:{color:"red",display:"none"},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}},addNewImageWrapper:{ml:2,width:200,minWidth:200,height:120,border:"2px dashed #BEBEBE",p:2,cursor:"pointer",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{border:"2px dashed blue",".add-photo":{color:"blue"}},backgroundColor:"#EEEEEE"},buttonWrapper:{display:"flex",justifyContent:"space-between",mt:5},back:{transition:"0.5s","&:hover":{textDecoration:"underline"}},backArrow:{mr:1},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",margin:"0 auto",transition:"1s","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}},rightButtons:{display:"flex",justifyContent:"space-between"}},E=10;r.default=function(e){var r=e.activeStep,t=e.steps,x=e.handleCancel,v=e.handleNext,B=e.handleBack,D=e.descriptions,H=e.setDescriptions,T=e.titles,S=e.setTitles,A=e.imagesContainer,P=e.setImagesContainer,R=(0,p.useRef)(null),V=p.useState(""),F=(0,o.Z)(V,2),J=F[0],L=F[1],N=p.useState(),M=(0,o.Z)(N,2),q=M[0],O=M[1],G=p.useState({values:{title:""},errors:W.errors}),Y=(0,o.Z)(G,2),_=Y[0],U=Y[1],X=p.useState([]),K=(0,o.Z)(X,2),Q=K[0],$=K[1];p.useEffect((function(){R.current&&(R.current.scrollLeft=R.current.scrollWidth)}),[Q]),p.useEffect((function(){T&&U({values:{title:T}}),D&&L(D),A&&A.length>0&&$(A)}),[]);var ee=function(e){var r=(0,n.Z)(Q);r.splice(e,1),$(r)};return(0,k.jsxs)(i.Z,{sx:I.wrapper,children:[(0,k.jsx)(j.default,{}),(0,k.jsxs)(i.Z,{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(l.Z,{children:"Job Title *"}),(0,k.jsx)(m.default,{fullWidth:!0,size:"small",name:"title",label:"Job Title",margin:"dense",value:_.values.title,errors:_.errors,onChange:function(e){var r=e.target.name,t=e.target.value;U((function(e){return(0,s.Z)((0,s.Z)({},e),{},{values:(0,s.Z)((0,s.Z)({},e.values),{},(0,a.Z)({},r,t))})}));var n=W.errors;W.validate(r,t).then((function(){U((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:n})}))}))},required:!0,InputProps:{style:{backgroundColor:"white"}}})]}),(0,k.jsxs)(i.Z,{sx:I.titleWrapper,children:[(0,k.jsx)(l.Z,{children:"Job Description *"}),(0,k.jsx)(c.Z,{sx:I.jobDesHelperText,children:"Use job requirements, desired experience, expectations, a company bio or details about yourself."}),(0,k.jsx)(f(),{theme:"snow",name:"job_description",value:J,onChange:function(e,r,t,n){L(e),e.length<=200?O("Job Description characters must be at least 200 or more."):O(null)},placeholder:"Describe your job. The more details the better.",style:{backgroundColor:"white"}}),q&&(0,k.jsx)(c.Z,{error:!0,children:q})]})]}),(0,k.jsxs)(i.Z,{component:"form",encType:"multipart/form-data",sx:I.addImagesWrapper,onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var r=Array.from(e.dataTransfer.files);Q.length+r.length>E?(0,b.default)("error","You can only upload ".concat(E," images."),Z.options):$((function(e){return[].concat((0,n.Z)(e),r)}))},children:[(0,k.jsx)("input",{id:"multiple-images",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:function(e){var r=e.target.files,t=[];if(r&&r.length>0){for(var a=Q.length+r.length,s=a>E?E-Q.length:r.length,o=function(e){var a=new FileReader;a.readAsDataURL(r[e]),a.onload=function(){var o=a.result,i=new File([r[e]],r[e].name,{type:"image/jpeg"});t.push({file:i,url:o}),t.length===s&&$([].concat((0,n.Z)(Q),t))}},i=0;i<s;i++)o(i);a>E&&(0,b.default)("error","You can only upload ".concat(E," images."),Z.options)}}}),(0,k.jsx)(i.Z,{component:"label",htmlFor:"multiple-images",sx:{cursor:"pointer"},children:Q&&0===Q.length&&(0,k.jsxs)(d.ZP,{container:!0,spacing:1,sx:{alignItems:"center"},children:[(0,k.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,k.jsxs)(i.Z,{align:"center",children:[(0,k.jsx)(w.Z,{sx:{fontSize:36,color:"blue"}}),(0,k.jsxs)(i.Z,{sx:I.addImageLeftWrapper,align:"center",children:[(0,k.jsx)(l.Z,{sx:I.dragDropText,children:"Drag and Drop file or"}),(0,k.jsx)(u.Z,{size:"small",variant:"contained",color:"primary",sx:I.browse,component:"label",htmlFor:"multiple-images",children:"Browse"})]})]})}),(0,k.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,k.jsxs)(i.Z,{sx:I.addImageRightWrapper,children:[(0,k.jsx)(l.Z,{sx:I.attachments,children:"Attachments (optional)"}),(0,k.jsxs)(l.Z,{sx:I.addFiles,children:["Add files to help describe what needs to be done and for the workers' visual references. You can add"," ",(0,k.jsx)("span",{children:"up to 10 photos."})]}),(0,k.jsxs)(i.Z,{sx:I.addImageRightBottomWrapper,children:[(0,k.jsx)(y.Z,{sx:I.articleIcon}),(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(l.Z,{sx:I.addFiles,children:"Max. size: 2mb each"}),(0,k.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,k.jsx)(l.Z,{sx:I.fileTypes,children:"JPEG"}),(0,k.jsx)(l.Z,{sx:I.fileTypes,children:"PNG"}),(0,k.jsx)(l.Z,{sx:I.fileTypes,children:"JPG"})]})]})]})]})})]})}),(0,k.jsxs)(i.Z,{sx:I.selectedImagesWrapper,ref:R,children:[Q&&Q.length>0&&Q.map((function(e,r){return(0,k.jsx)(h.Z,{onClick:function(){return ee(r)},badgeContent:(0,k.jsx)(C.Z,{className:"remove",sx:I.removeIcon,onClick:function(){return ee(r)}}),sx:I.imageWrapper,children:(0,k.jsx)("img",{style:I.image,src:e.url,alt:e.name},r)},r)})),Q&&Q.length>0&&(0,k.jsx)(i.Z,{sx:I.addNewImageWrapper,children:(0,k.jsx)(i.Z,{component:"label",htmlFor:"multiple-images",children:(0,k.jsx)(z.Z,{className:"add-photo",sx:{fontSize:50}})})})]})]}),(0,k.jsxs)(i.Z,{sx:I.buttonWrapper,children:[(0,k.jsxs)(u.Z,{color:"primary",onClick:B,size:"small",sx:I.back,disabled:0===r,type:"text",children:[(0,k.jsx)(g.Z,{sx:I.backArrow}),(0,k.jsx)("span",{children:"Back"})]}),(0,k.jsxs)(i.Z,{sx:I.rightButtons,children:[(0,k.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:x,size:"small",sx:I.cancel,children:"Cancel"}),(0,k.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(){W.validateAll(_.values).then((function(e){if(e){if(!J||0===J.trim().length)return void O("Job Description is required.");if(q)return void(0,b.default)("error",q,Z.options);S(_.values.title),H(J),Q&&Q.length>0&&P(Q),v()}else U((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:W.errors})}))}))},size:"small",sx:I.next,children:r+1===t.length?"Post my job":"Next Step"})]})]})]})}},49861:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),s=t(80184),o=(0,a.default)((0,s.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}),"AddToPhotos");r.Z=o},67394:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),s=t(80184),o=(0,a.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");r.Z=o},80813:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),s=t(80184),o=(0,a.default)((0,s.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");r.Z=o},50194:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),s=t(80184),o=(0,a.default)((0,s.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");r.Z=o},19924:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(45649)),s=t(80184),o=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");r.Z=o}}]);
//# sourceMappingURL=5432.c0386968.chunk.js.map