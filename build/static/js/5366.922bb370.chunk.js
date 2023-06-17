"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[5366,3406,1233],{65366:function(e,t,r){r.r(t);var o=r(70885),s=r(68870),n=r(20792),l=r(13400),a=r(20890),i=r(61889),d=r(93044),c=r(29472),x=r(36151),p=r(81918),u=r(72791),h=r(86711),m=r(91),j=r(46228),f=r(48483),b=r(67643),Z=r(67097),v=r(90772),y=r(89231),g=r(8292),w=r(33850),C=r(49293),W=r(63845),k=r(59434),S=r(3437),I=r(44238),z=r(73406),D=r(80184),E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",height:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3,overflow:"hidden"},T={exitIconWrapper:{p:2,position:"relative"},exitIconButton:{position:"absolute",top:2,right:2},mainContent:{p:2,maxHeight:"72vh",overflow:"auto","::-webkit-scrollbar":{display:"none"}},jobTitle:{fontWeight:"bold",fontSize:{xs:24,sm:28,md:32}},jobPosition:{ml:2,color:"#BEBEBE",fontWeight:600,fontSize:{xs:16,sm:18,md:20},mb:2},profileWrapper:{display:"flex",alignItems:"center"},nameDateWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"}},fullname:{mr:2,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"noWrap"},date:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"noWrap",fontSize:14,mt:.1,color:"blue"},contentWrapper:{p:2,backgroundColor:"#EEEEEE",boxShadow:3,mt:2,mb:2,borderRadius:3},jobType:{display:"flex",mt:2,justifyContent:"space-between"},jobTypeEachWrapper:{display:"flex"},jobTypeValue:{fontWeight:"bold"},workIcon:{mr:1,color:"blue",width:25,height:25},rate:{display:"flex",mt:2,justifyContent:"space-between"},categoryTitle:{fontWeight:"bold",fontSize:{xs:18,md:22}},chipWrapper:{ml:1,mt:2},profileButtonWrapper:{backgroundColor:"#EEEEEE",borderRadius:3,boxShadow:5,p:2,maxWidth:400},profileButtonWrapperButtom:{mt:2,display:"flex",justifyContent:"space-evenly"},totalBottom:{color:"blue",fontSize:12},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}}};t.default=function(e){var t,r,_,B=e.open,H=e.handleClose,V=e.selectedItem,P=e.user,R=e.handleForceUpdate,M=(0,k.I0)(),L=null===V||void 0===V?void 0:V.id,F=null===P||void 0===P||null===(t=P.shortlists)||void 0===t?void 0:t.some((function(e){return e.post_id===L})),A=null===P||void 0===P||null===(r=P.bids)||void 0===r?void 0:r.some((function(e){return e.post_id===L})),Y=u.useState(!1),O=(0,o.Z)(Y,2),q=O[0],U=O[1],J=u.useState(!1),X=(0,o.Z)(J,2),N=X[0],$=X[1],G=function(){U(!1),H(),R()},K=V&&V.bids&&V.bids.length;return(0,D.jsx)(s.Z,{children:(0,D.jsx)(n.Z,{open:B,onClose:H,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,D.jsxs)(s.Z,{sx:E,children:[(0,D.jsx)(C.default,{}),(0,D.jsx)(y.default,{open:q,handleClose:function(){return U(!1)},onHandleSubmit:G,selectedItem:V}),(0,D.jsx)(z.default,{open:N,handleClose:function(){return $(!1)},bids:null===V||void 0===V?void 0:V.bids,selectedItem:V,handleForceUpdate:G}),(0,D.jsx)(s.Z,{sx:T.exitIconWrapper,children:(0,D.jsx)(l.Z,{onClick:H,sx:T.exitIconButton,children:(0,D.jsx)(h.Z,{color:"error"})})}),(0,D.jsxs)(s.Z,{sx:{p:1},children:[(0,D.jsx)(a.Z,{sx:T.jobTitle,children:V&&V.title}),(0,D.jsx)(a.Z,{sx:T.jobPosition,children:V&&V.position}),(0,D.jsxs)(s.Z,{sx:T.mainContent,children:[(0,D.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,D.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,D.jsxs)(s.Z,{sx:T.profileWrapper,children:[(0,D.jsx)(d.Z,{alt:V&&V.client&&V.client.fullname,src:V&&V.client&&V.client.profile[0].profile_url,sx:{mr:2}}),(0,D.jsxs)(s.Z,{sx:T.nameDateWrapper,children:[(0,D.jsx)(a.Z,{sx:T.fullname,children:V&&V.client&&V.client.fullname}),(0,D.jsxs)(a.Z,{sx:T.date,children:["Posted ",V&&V.created_at]})]})]})}),(0,D.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,D.jsxs)(s.Z,{sx:{display:"flex"},align:"center",children:[(0,D.jsx)(c.Z,{color:"primary",badgeContent:K&&K,anchorOrigin:{vertical:"top",horizontal:"left"},children:(0,D.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",sx:{mr:.5},onClick:function(){return $(!0)},children:"Bids"})}),!F&&(0,D.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",startIcon:(0,D.jsx)(m.Z,{}),onClick:function(){return function(e){P&&0!==P.length&&"Worker"===P.role?W.default.post("/new/shortlist/post/".concat(e)).then((function(e){200===e.data.code?(M((0,S.updateUser)(e.data.user)),(0,g.default)("success",e.data.message,w.options)):(0,g.default)("error",e.data.message,w.options)})).catch((function(e){(0,g.default)("error",e.message,w.options)})):(0,g.default)("error","You are not allowed to add this post to your shortlist!",w.options)}(V&&V.id)},children:"Add to Shortlist"}),F&&(0,D.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",startIcon:(0,D.jsx)(j.Z,{color:"primary"}),onClick:function(){return function(e){W.default.delete("/remove/shortlist/post/".concat(e)).then((function(e){200===e.data.code?(M((0,S.updateUser)(e.data.user)),(0,g.default)("success",e.data.message,w.options)):(0,g.default)("error",e.data.message,w.options)})).catch((function(e){(0,g.default)("error",e.message,w.options)}))}(V&&V.id)},children:"Remove to Shortlist"}),(0,D.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",startIcon:(0,D.jsx)(f.Z,{}),sx:{ml:.5},children:"Report"})]})})]}),(0,D.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,D.jsx)(i.ZP,{item:!0,xs:12,md:3.5,children:(0,D.jsxs)(s.Z,{sx:T.contentWrapper,children:[(0,D.jsxs)(s.Z,{children:[(0,D.jsxs)(s.Z,{sx:T.jobType,children:[(0,D.jsxs)(s.Z,{sx:T.jobTypeEachWrapper,children:[(0,D.jsx)(b.Z,{sx:T.workIcon}),(0,D.jsx)(a.Z,{children:"Job Type"})]}),(0,D.jsx)(a.Z,{sx:T.jobTypeValue,children:V&&V.job_type})]}),V&&"Daily Rate"===V.job_type&&(0,D.jsxs)(u.Fragment,{children:[(0,D.jsxs)(s.Z,{sx:T.rate,children:[(0,D.jsxs)(s.Z,{sx:T.jobTypeEachWrapper,children:[(0,D.jsx)(Z.Z,{sx:T.workIcon}),(0,D.jsx)(a.Z,{children:"Rate"})]}),(0,D.jsxs)(a.Z,{sx:T.jobTypeValue,children:["\u20b1"," ",V&&(0,I.formatValue)(V.rate)]})]}),(0,D.jsxs)(s.Z,{sx:T.rate,children:[(0,D.jsxs)(s.Z,{sx:T.jobTypeEachWrapper,children:[(0,D.jsx)(v.Z,{sx:T.workIcon}),(0,D.jsx)(a.Z,{children:"Days"})]}),(0,D.jsx)(a.Z,{sx:T.jobTypeValue,children:V&&V.days})]})]}),V&&"Fixed Cost"===V.job_type&&(0,D.jsx)(u.Fragment,{children:(0,D.jsxs)(s.Z,{sx:T.rate,children:[(0,D.jsxs)(s.Z,{sx:T.jobTypeEachWrapper,children:[(0,D.jsx)(Z.Z,{sx:T.workIcon}),(0,D.jsx)(a.Z,{children:"budget"})]}),(0,D.jsxs)(a.Z,{sx:T.jobTypeValue,children:["\u20b1"," ",V&&(0,I.formatValue)(V.budget)]})]})})]}),(0,D.jsx)(x.Z,{size:"small",fullWidth:!0,variant:"contained",color:"primary",sx:{mt:5},onClick:function(){(0,I.isAuth)()?"Worker"===(null===P||void 0===P?void 0:P.role)?(console.log(A),A?(0,g.default)("error","You cannot bid again! Only one bid per job post.",w.options):U(!q)):(0,g.default)("error","You can only create a job post with a ".concat(P.role," account!"),w.options):U(!q)},children:"Apply"})]})}),(0,D.jsxs)(i.ZP,{item:!0,xs:12,md:8.5,children:[(0,D.jsx)("div",{dangerouslySetInnerHTML:{__html:V&&V.description}}),(0,D.jsx)(s.Z,{sx:T.selectedImagesWrapper,children:V&&(null===(_=V.images)||void 0===_?void 0:_.map((function(e,t){return(0,D.jsx)(s.Z,{sx:{m:.5},children:(0,D.jsx)("img",{style:T.image,src:e.url,alt:e.name})},t)})))})]})]}),(0,D.jsxs)(s.Z,{children:[(null===V||void 0===V?void 0:V.category)&&(0,D.jsxs)(s.Z,{sx:{mb:5,mt:2},children:[(0,D.jsx)(a.Z,{sx:T.categoryTitle,children:"Category"}),(0,D.jsx)(s.Z,{sx:T.chipWrapper,children:(0,D.jsx)(p.Z,{label:V&&V.category,variant:"contained",color:"primary"})})]}),(null===V||void 0===V?void 0:V.skills)&&(0,D.jsxs)(s.Z,{sx:{mb:5},children:[(0,D.jsx)(a.Z,{sx:T.categoryTitle,children:"Skills We Are Looking For"}),(0,D.jsx)(s.Z,{sx:T.chipWrapper,children:V&&(null===V||void 0===V?void 0:V.skills)&&(null===V||void 0===V?void 0:V.skills.map((function(e,t){return(0,D.jsx)(p.Z,{label:e,variant:"contained",color:"primary",sx:{m:.5}},t)})))})]}),(null===V||void 0===V?void 0:V.locations)&&(0,D.jsxs)(s.Z,{sx:{mb:5},children:[(0,D.jsx)(a.Z,{sx:T.categoryTitle,children:"Preferred Worker Location"}),(0,D.jsx)(s.Z,{sx:T.chipWrapper,children:V&&(null===V||void 0===V?void 0:V.locations)&&(null===V||void 0===V?void 0:V.locations.map((function(e,t){return(0,D.jsx)(p.Z,{label:e,variant:"contained",color:"primary",sx:{m:.5}},t)})))})]}),(0,D.jsxs)(s.Z,{sx:T.profileButtonWrapper,children:[(0,D.jsxs)(s.Z,{sx:T.profileWrapper,children:[(0,D.jsx)(d.Z,{alt:V&&V.client&&V.client.fullname,src:V&&V.client&&V.client.profile[0].profile_url,sx:{mr:1}}),(0,D.jsx)(a.Z,{sx:{fontWeight:600},children:V&&V.client&&V.client.fullname})]}),(0,D.jsxs)(s.Z,{align:"center",sx:T.profileButtonWrapperButtom,children:[(0,D.jsxs)(s.Z,{children:[(0,D.jsx)(a.Z,{sx:T.totalBottom,children:V&&V.total}),(0,D.jsx)(a.Z,{sx:T.totalBottom,children:"Job Posted"})]}),(0,D.jsxs)(s.Z,{children:[(0,D.jsx)(a.Z,{sx:T.totalBottom,children:"$0"}),(0,D.jsx)(a.Z,{sx:T.totalBottom,children:"Total Spent"})]})]})]})]})]})]})]})})})}},73406:function(e,t,r){r.r(t);var o=r(70885),s=r(68870),n=r(20792),l=r(13400),a=r(20890),i=r(93044),d=r(36314),c=r(81918),x=r(36151),p=r(72791),u=r(86711),h=r(44238),m=r(59434),j=r(1233),f=r(41143),b=r(49643),Z=r(80184),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"95%",md:"60%"},maxWidth:900,maxHeight:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3},y={exitIconWrapper:{p:2,position:"relative"},exitIconButton:{position:"absolute",top:2,right:2},categoryWrapper:{display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center"},category:{m:.3,fontSize:{xs:12,md:14},border:"2px solid white",boxShadow:1},rateLabel:{fontWeight:"bold",fontSize:{xs:18,md:20}},rateText:{backgroundColor:"#FF9100",p:1,borderRadius:3},selectedImagesWrapper:{display:"flex",overflowX:"scroll",p:2,"::-webkit-scrollbar":{display:"none"}},imageWrapper:{ml:2,"&:hover":{".remove":{display:"block"}}},image:{width:200,height:120,border:"1px solid #BEBEBE",borderRadius:5,"&:hover":{border:"1px solid black",boxShadow:10}}},g=2;t.default=function(e){var t=e.open,r=e.handleClose,w=e.bids,C=e.selectedItem,W=e.handleForceUpdate,k=(0,m.v9)((function(e){return e.users.user})),S=p.useState(!1),I=(0,o.Z)(S,2),z=I[0],D=I[1],E=p.useState(!1),T=(0,o.Z)(E,2),_=T[0],B=T[1],H=p.useState(!1),V=(0,o.Z)(H,2),P=V[0],R=V[1],M=p.useState({}),L=(0,o.Z)(M,2),F=L[0],A=L[1],Y=function(){D(!1),r(),W()},O=(0,h.isAuth)()&&"Client"===k.role&&k.id===C.user_id;return(0,Z.jsx)(s.Z,{children:(0,Z.jsx)(n.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsxs)(s.Z,{sx:v,children:[(0,Z.jsx)(f.default,{open:_,title:"Are you sure?",onConfirm:function(){R(!0)},message:"Choose this worker for your project?",onClose:function(){return B(!1)}}),(0,Z.jsx)(b.default,{open:P,handleClose:function(){R(!1),r()},selectedItem:C,bid:F}),(0,Z.jsxs)(s.Z,{sx:{p:2},children:[(0,Z.jsx)(s.Z,{sx:y.exitIconWrapper,children:(0,Z.jsx)(l.Z,{onClick:r,sx:y.exitIconButton,children:(0,Z.jsx)(u.Z,{color:"error"})})}),(0,Z.jsx)(s.Z,{sx:{mb:3},children:(0,Z.jsx)(a.Z,{sx:{fontWeight:"bold",fontSize:{xs:20,md:24}},children:"Proposals"})}),(0,Z.jsx)(s.Z,{sx:{maxHeight:"72vh",overflow:"auto","::-webkit-scrollbar":{display:"none"}},children:w&&w.map((function(e,t){var r,o=e.user.categoryChildren&&(null===(r=e.user.categoryChildren)||void 0===r?void 0:r.length)>g&&e.user.categoryChildren.slice(0,g),n=(0,h.isAuth)()&&"Worker"===k.role&&e.user_id===k.id;return(0,Z.jsxs)(p.Fragment,{children:[(0,Z.jsx)(j.default,{open:z,handleClose:function(){return D(!1)},selectedItem:C,onHandleSubmit:Y,bid:e}),(0,Z.jsxs)(s.Z,{sx:{backgroundColor:"#EEEEEE",boxShadow:3,p:2,borderRadius:3,mb:2},children:[(0,Z.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,Z.jsxs)(s.Z,{sx:{display:"flex",mt:1},children:[(0,Z.jsx)(i.Z,{alt:e.profile.full_name,src:e.profile.profile_url}),(0,Z.jsxs)(s.Z,{sx:{ml:1},children:[(0,Z.jsx)(a.Z,{sx:{fontWeight:"bold",fontSize:{xs:14,md:18},cursor:"pointer","&:hover":{color:"blue"}},onClick:function(){return window.open(e.profile.profile_link)},children:e.profile.full_name}),(0,Z.jsxs)(d.Z,{sx:y.categoryWrapper,children:[o&&o.map((function(e,t){return(0,Z.jsx)(c.Z,{size:"small",label:e.name,variant:"contained",sx:y.category},t)})),e.user.categoryChildren&&e.user.categoryChildren.length>g&&(0,Z.jsx)(c.Z,{size:"small",label:"+".concat(e.user.categoryChildren&&e.user.categoryChildren.length-g),variant:"contained",sx:y.moreSkill},"".concat(t,"-more"))]}),(0,Z.jsx)(a.Z,{sx:{fontSize:{xs:12,md:13}},children:e.profile.address})]})]}),(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(a.Z,{sx:{fontWeight:"bold",fontSize:{xs:12,md:16}},children:["\u20b1",e.rate]})})]},t),(0,Z.jsx)(s.Z,{sx:{mt:2},children:(0,Z.jsx)("div",{style:{fontSize:14},dangerouslySetInnerHTML:{__html:e&&e.proposal}})}),e.images&&e.images.length>0&&(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(a.Z,{sx:y.rateLabel,children:"Completed Projects"}),(0,Z.jsx)(s.Z,{sx:y.selectedImagesWrapper,children:e.images.map((function(e,t){return(0,Z.jsx)(s.Z,{sx:{m:.5},children:(0,Z.jsx)("img",{style:y.image,src:e.url,alt:e.name})},t)}))})]}),(0,Z.jsxs)(s.Z,{sx:{mt:2},align:"right",children:[O&&(0,Z.jsx)(x.Z,{variant:"contained",color:"primary",size:"small",onClick:function(){return A(e),void B(!0)},children:"Choose Worker"}),n&&(0,Z.jsx)(x.Z,{variant:"outlined",color:"primary",size:"small",onClick:function(){return D(!0)},children:"Edit"})]})]})]},t)}))}),w&&0===w.length&&(0,Z.jsx)(s.Z,{children:(0,Z.jsx)(a.Z,{children:"No proposals for this job post."})})]})]})})})}},1233:function(e,t,r){r.r(t);var o=r(68870),s=r(20792),n=(r(72791),r(49293)),l=r(31425),a=r(80184),i={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",maxHeight:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3,overflow:"auto","::-webkit-scrollbar":{display:"none"}};t.default=function(e){var t=e.open,r=e.handleClose,d=e.selectedItem,c=e.onHandleSubmit,x=e.bid;return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(n.default,{}),(0,a.jsx)(s.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(o.Z,{sx:i,children:(0,a.jsx)(l.default,{handleCancel:r,selectedItem:d,onHandleSubmit:c,bid:x,onEdit:!0})})})]})}},49643:function(e,t,r){r.r(t);var o=r(4942),s=r(1413),n=r(70885),l=r(68870),a=r(20792),i=r(13400),d=r(20890),c=r(36151),x=r(13239),p=r(72791),u=r(20376),h=r(90772),m=r(86711),j=r(97892),f=r.n(j),b=r(71652),Z=r(24750),v=r(35713),y=r(49293),g=r(8292),w=r(33850),C=r(63845),W=r(80184),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"95%",md:"60%"},maxHeight:"90vh",bgcolor:"background.paper",boxShadow:24,borderRadius:3},S={exitIconWrapper:{p:2,position:"relative"},exitIconButton:{position:"absolute",top:2,right:2},jobTypeWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"},justifyContent:"space-between"},jobTypeCard:{border:"1px solid blue",borderRadius:2,p:1,width:{xs:"100%",md:"48%"},m:1},card:{width:"100%",position:"relative",backgroundColor:"green"},input:{position:"absolute",top:0,right:0},cardDesWrapper:{display:"flex",alignItems:"center"},typeIcon:{fontSize:36,mr:1},cardTitle:{fontWeight:"bold",fontSize:14},cardDescription:{fontSize:12},buttonWrapper:{display:"flex",justifyContent:"right",mt:5},cancel:{mr:2},next:{maxWidth:200,background:"linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)",transition:"1s",backgroundColor:"green","&:hover":{background:"linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)"}}},I=f()();t.default=function(e){var t=e.open,r=e.handleClose,j=e.selectedItem,z=e.bid,D=p.useState(!1),E=(0,n.Z)(D,2),T=E[0],_=E[1],B=p.useState({values:{type:"Default",start_date:"",end_date:""}}),H=(0,n.Z)(B,2),V=H[0],P=H[1],R=function(e,t){P((function(r){return(0,s.Z)((0,s.Z)({},r),{},{values:(0,s.Z)((0,s.Z)({},r.values),{},(0,o.Z)({},e,t))})}))},M=function(){var e=new Date,t=null===j||void 0===j?void 0:j.days,r=new Date;r.setDate(e.getDate()+(8-e.getDay()));var o="Default"===V.values.type?r:V.values.start_date;if(t){var s=t.split("-").map((function(e){return parseInt(e)})),l=(0,n.Z)(s,2),a=(l[0],l[1]),i=f()(o).add(a,"day");return{startDate:f()(o),endDate:i}}return{startDate:f()(o),endDate:f()(o).add(41,"day")}},L=M(),F=L.startDate,A=L.endDate,Y=function(e){e.startDate.format("MM","DD","YYYY")?function(e){_(!0),C.default.post("/choose/proposal/".concat(z.id,"/").concat(j.id),e).then((function(e){200===e.data.code?((0,g.default)("success",e.data.message,w.options),r()):(0,g.default)("error",e.data.message,w.options),_(!1)})).catch((function(e){_(!1),(0,g.default)("error",e.message,w.options)}))}(e):(0,g.default)("error","Start date is required!",w.options)};return(0,W.jsx)(l.Z,{children:(0,W.jsx)(a.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,W.jsxs)(l.Z,{sx:k,children:[(0,W.jsx)(y.default,{}),(0,W.jsxs)(l.Z,{sx:{mt:2},children:[(0,W.jsx)(l.Z,{sx:S.exitIconWrapper,children:(0,W.jsx)(i.Z,{onClick:r,sx:S.exitIconButton,children:(0,W.jsx)(m.Z,{color:"error"})})}),(0,W.jsxs)(l.Z,{sx:{p:2},children:[(0,W.jsxs)(l.Z,{children:[(0,W.jsx)(d.Z,{children:"Schedule Type *"}),(0,W.jsxs)(l.Z,{sx:S.jobTypeWrapper,children:[(0,W.jsx)(l.Z,{sx:S.jobTypeCard,children:(0,W.jsxs)(l.Z,{component:"label",htmlFor:"default",sx:S.card,children:[(0,W.jsx)("input",{id:"default",type:"radio",name:"type",value:"Default",checked:"Default"===V.values.type,onChange:function(e){return R("type",e.target.value)},style:S.input}),(0,W.jsxs)(l.Z,{sx:S.cardDesWrapper,children:[(0,W.jsx)(u.Z,{color:"primary",sx:S.typeIcon}),(0,W.jsxs)(l.Z,{children:[(0,W.jsx)(d.Z,{sx:S.cardTitle,children:"Default Date"}),(0,W.jsx)(d.Z,{sx:S.cardDescription,children:"Start your job schedule next week by the Monday!"})]})]})]})}),(0,W.jsx)(l.Z,{sx:S.jobTypeCard,children:(0,W.jsxs)(l.Z,{component:"label",htmlFor:"custom",sx:S.card,children:[(0,W.jsx)("input",{id:"custom",type:"radio",name:"type",value:"Custom Date",checked:"Custom Date"===V.values.type,onChange:function(e){return R("type",e.target.value)},style:S.input}),(0,W.jsxs)(l.Z,{sx:S.cardDesWrapper,children:[(0,W.jsx)(h.Z,{color:"primary",sx:S.typeIcon}),(0,W.jsxs)(l.Z,{children:[(0,W.jsx)(d.Z,{sx:S.cardTitle,children:"Custom Date"}),(0,W.jsx)(d.Z,{sx:S.cardDescription,children:"You can add custom schedule for your project."})]})]})]})})]})]}),"Default"===V.values.type&&(0,W.jsxs)(b._,{dateAdapter:Z.y,children:[(0,W.jsx)(d.Z,{sx:{mt:2,mb:2,fontSize:13},children:"You will not be able to edit the schedule below."}),(0,W.jsxs)(l.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,W.jsx)(l.Z,{sx:{width:"95%"},children:(0,W.jsx)(v.M,{sx:{width:"95%"},label:"Start Date",value:F,disablePast:!0,readOnly:!0,required:!0,name:"start_date"})}),(0,W.jsx)(l.Z,{sx:{width:"100%"},children:(0,W.jsx)(v.M,{sx:{width:"100%"},label:"End Date",value:A,disablePast:!0,readOnly:!0,required:!0,name:"end_date"})})]})]}),"Custom Date"===V.values.type&&(0,W.jsxs)(b._,{dateAdapter:Z.y,children:[(0,W.jsx)(d.Z,{sx:{mt:2,mb:2,fontSize:13},children:"You are required to add a start date for your schedule."}),(0,W.jsxs)(l.Z,{sx:{mt:2,display:"flex",justifyContent:"space-between"},children:[(0,W.jsx)(l.Z,{sx:{width:"95%"},children:(0,W.jsx)(v.M,{sx:{width:"95%"},label:"Start Date",value:V.values.start_date,onChange:function(e){return R("start_date",e)},disablePast:!0,minDate:I.add(3,"days"),name:"start_date",required:!0})}),(0,W.jsx)(l.Z,{sx:{width:"100%"},children:(0,W.jsx)(v.M,{sx:{width:"100%"},label:"End Date",value:A,disablePast:!0,readOnly:!0,required:!0,name:"end_date"})})]})]}),(0,W.jsxs)(l.Z,{sx:S.buttonWrapper,children:[(0,W.jsx)(c.Z,{variant:"outlined",color:"secondary",onClick:r,size:"small",sx:S.cancel,children:"Cancel"}),(0,W.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(){return Y(M())},size:"small",sx:S.next,disabled:T,children:T?(0,W.jsx)(x.Z,{size:24}):"Submit"})]})]})]})]})})})}},46228:function(e,t,r){var o=r(64836);t.Z=void 0;var s=o(r(45649)),n=r(80184),l=(0,s.default)((0,n.jsx)("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}),"Bookmark");t.Z=l},20376:function(e,t,r){var o=r(64836);t.Z=void 0;var s=o(r(45649)),n=r(80184),l=(0,s.default)((0,n.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.Z=l},67097:function(e,t,r){var o=r(64836);t.Z=void 0;var s=o(r(45649)),n=r(80184),l=(0,s.default)((0,n.jsx)("path",{d:"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"}),"LocalAtm");t.Z=l},48483:function(e,t,r){var o=r(64836);t.Z=void 0;var s=o(r(45649)),n=r(80184),l=(0,s.default)((0,n.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}),"Report");t.Z=l},67643:function(e,t,r){var o=r(64836);t.Z=void 0;var s=o(r(45649)),n=r(80184),l=(0,s.default)((0,n.jsx)("path",{fillRule:"evenodd",d:"M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"}),"WorkOutline");t.Z=l}}]);
//# sourceMappingURL=5366.922bb370.chunk.js.map