"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6265,8292,9293,3850,7458,7448,3845],{64253:function(e,r,n){n.r(r);var t=n(1413),o=n(45987),a=n(93006),s=(n(72791),n(80184)),i=["errors","name","customError"];r.default=function(e){var r=e.errors,n=e.name,l=e.customError,u=(0,o.Z)(e,i),c=!1,d="";l&&(c=!0,d=l),r&&(c=r&&r.has(n)||!1,d=r&&r.first(n)||"");var f=(0,t.Z)((0,t.Z)({error:c,name:n,helperText:d},u),{},{value:u.value||""});return(0,s.jsx)(a.Z,(0,t.Z)({size:"small",variant:"outlined"},f))}},8292:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var t=n(75985);function o(e,r,n){return"success"===e?t.Am.success(r,n):t.Am.error(r,n)}},49293:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(75985),o=(n(5462),n(80184));function a(){return(0,o.jsx)(t.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,r,n){n.r(r),n.d(r,{options:function(){return t}});var t={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},96265:function(e,r,n){n.r(r);var t=n(4942),o=n(1413),a=n(70885),s=n(68870),i=n(20890),l=n(18316),u=n(47071),c=n(36151),d=n(13239),f=n(93044),m=n(72791),h=n(64253),p=n(31783),x=n(49293),g=n(8292),Z=n(33850),v=n(63845),j=n(59434),E=n(87448),b=n(41143),y=n(44238),C=n(37458),S=n(80184),k=new p.ZP.Validator({rating:"required|min:1|max:5",comment:"required|min:50|max:500"}),w={0:"Useless",1:"Poor",2:"Ok",3:"Good",4:"Very Good",5:"Excellent"},T=function(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(w[e])};r.default=function(e){var r=e.worker,n=e.isOwner,p=e.user,R=r.ratings,A=R.some((function(e){return e.user_id===p.id})),W=(0,j.I0)(),_=m.useState(!1),O=(0,a.Z)(_,2),z=O[0],I=O[1],P=m.useState(!1),q=(0,a.Z)(P,2),L=q[0],U=q[1],N=m.useState({}),D=(0,a.Z)(N,2),F=D[0],B=D[1],G=m.useState(!1),K=(0,a.Z)(G,2),V=K[0],H=K[1],Y=m.useState(!1),Q=(0,a.Z)(Y,2),J=Q[0],M=Q[1],X=m.useState(null),$=(0,a.Z)(X,2),ee=$[0],re=$[1],ne=m.useState({values:{rating:0,comment:""},errors:k.errors}),te=(0,a.Z)(ne,2),oe=te[0],ae=te[1],se=m.useState(-1),ie=(0,a.Z)(se,2),le=ie[0],ue=ie[1],ce=function(e){var r=e.target.name,n=e.target.value;ae((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,t.Z)({},r,n))})})),"rating"===r&&re(n<=0?"Rating is required!":null);var a=k.errors;k.validate(r,n).then((function(e){e||ae((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:a})}))}))};return(0,S.jsxs)(s.Z,{sx:{p:1},children:[(0,S.jsx)(x.default,{}),(0,S.jsx)(b.default,{loading:J,open:z,onConfirm:function(){M(!0),v.default.delete("/remove/review/".concat(F.id)).then((function(e){200===e.data.code?(W((0,E.updateWorker)(e.data.worker)),(0,g.default)("success",e.data.message,Z.options),I(!1)):(0,g.default)("error",e.data.message,Z.options),M(!1)})).catch((function(e){M(!1),(0,g.default)("error",e.message,Z.options)}))},onClose:function(){return I(!1)},message:"You are about to delete your review, proceed?"}),(0,S.jsx)(C.default,{loading:J,open:L,ratingsData:F,handleClose:function(){return U(!1)},onConfirm:function(e){return function(e){M(!0),v.default.post("/update/review/".concat(F.id),e).then((function(e){200===e.data.code?(W((0,E.updateWorker)(e.data.worker)),(0,g.default)("success",e.data.message,Z.options),U(!1)):(0,g.default)("error",e.data.message,Z.options),M(!1)})).catch((function(e){M(!1),(0,g.default)("error",e.message,Z.options)}))}(e)}}),(0,y.isAuth)()&&!n&&"Client"===p.role&&(0,S.jsxs)(s.Z,{sx:{backgroundColor:"#EEEEEE",p:2,borderRadius:3,boxShadow:5},children:[(0,S.jsx)(i.Z,{sx:{mb:2,fontSize:18,fontWeight:"bold"},children:"Review"}),(0,S.jsxs)(s.Z,{children:[(0,S.jsxs)(s.Z,{sx:{mb:2},children:[(0,S.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,S.jsx)(l.Z,{name:"rating",value:parseInt(oe.values.rating),onChange:ce,getLabelText:T,onChangeActive:function(e,r){ue(r)}}),(0,S.jsx)(i.Z,{sx:{ml:2},children:w[-1!==le?le:oe.values.rating]})]}),(0,S.jsx)(u.Z,{error:!0,sx:{ml:2},children:ee})]}),(0,S.jsx)(h.default,{fullWidth:!0,name:"comment",label:"Comment",placeholder:"What can you say...",multiline:!0,rows:4,value:oe.values.comment,onChange:ce,errors:oe.errors})]}),(0,S.jsx)(s.Z,{sx:{mt:2},align:"right",children:(0,S.jsx)(c.Z,{size:"small",variant:"contained",color:"primary",onClick:function(){A?(0,g.default)("error","You cannot submit another review!",Z.options):k.validateAll(oe.values).then((function(e){oe.values.rating<=0?(re("Rating is required!"),(0,g.default)("error",ee,Z.options)):e?(H(!0),v.default.post("/new/rating/".concat(r.id),oe.values).then((function(e){200===e.data.code?((0,g.default)("success",e.data.message,Z.options),W((0,E.updateWorker)(e.data.worker)),ae({values:{rating:0,comment:""}})):(0,g.default)("error",e.data.message,Z.options),H(!1)})).catch((function(e){H(!1),(0,g.default)("error",e.message,Z.options)}))):ae((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:k.errors})}))}))},disabled:V,children:V?(0,S.jsx)(d.Z,{size:24}):"Submit"})})]}),(0,S.jsxs)(s.Z,{sx:{mt:2},children:[R&&R.map((function(e,r){var n=!(!(0,y.isAuth)()||"Client"!==p.role||p.id!==e.client.id);return(0,S.jsxs)(s.Z,{sx:{mt:2,backgroundColor:"#EEEEEE",p:2,borderRadius:3,boxShadow:5},children:[(0,S.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,S.jsx)(f.Z,{src:e.client.profile_url}),(0,S.jsxs)(s.Z,{children:[(0,S.jsx)(i.Z,{sx:{ml:1,fontWeight:"bold"},children:e.client.fullname}),(0,S.jsxs)(s.Z,{sx:{ml:1,display:"flex"},children:[(0,S.jsx)(l.Z,{value:parseInt(e.rating),readOnly:!0}),(0,S.jsx)(i.Z,{sx:{ml:1,color:"green"},children:e.created_at})]})]})]}),(0,S.jsx)(s.Z,{sx:{mt:1},children:(0,S.jsx)(i.Z,{children:e.comment})}),n&&(0,S.jsxs)(s.Z,{sx:{display:"flex",mt:2,justifyContent:"right"},children:[(0,S.jsx)(c.Z,{variant:"contained",color:"error",size:"small",onClick:function(){return B(e),void I(!0)},children:"Delete"}),(0,S.jsx)(c.Z,{variant:"outlined",color:"primary",sx:{ml:1},size:"small",onClick:function(){return B(e),void U(!0)},children:"Edit"})]})]},r)})),R.length<=0&&(0,S.jsx)(s.Z,{sx:{mt:2,backgroundColor:"#EEEEEE",p:2,borderRadius:3,boxShadow:5},children:(0,S.jsx)(i.Z,{children:"No reviews"})})]})]})}},37458:function(e,r,n){n.r(r);var t=n(4942),o=n(1413),a=n(70885),s=n(68870),i=n(20792),l=n(20890),u=n(18316),c=n(47071),d=n(36151),f=n(13239),m=n(72791),h=n(64253),p=n(31783),x=n(59434),g=n(8292),Z=n(33850),v=n(49293),j=n(80184),E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",md:"60%"},bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},b=new p.ZP.Validator({rating:"required|min:1|max:5",comment:"required|min:50|max:500"}),y={0:"Useless",1:"Poor",2:"Ok",3:"Good",4:"Very Good",5:"Excellent"},C=function(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(y[e])};r.default=function(e){var r=e.open,n=e.ratingsData,p=e.handleClose,S=e.onConfirm,k=e.loading,w=((0,x.I0)(),m.useState(null)),T=(0,a.Z)(w,2),R=T[0],A=T[1],W=m.useState({values:{rating:0,comment:""},errors:b.errors}),_=(0,a.Z)(W,2),O=_[0],z=_[1],I=m.useState(-1),P=(0,a.Z)(I,2),q=P[0],L=P[1];m.useEffect((function(){n&&z((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)({},n)})}))}),[n]);var U=function(e){var r=e.target.name,n=e.target.value;z((function(e){return(0,o.Z)((0,o.Z)({},e),{},{values:(0,o.Z)((0,o.Z)({},e.values),{},(0,t.Z)({},r,n))})})),"rating"===r&&A(n<=0?"Rating is required!":null);var a=b.errors;b.validate(r,n).then((function(e){e||z((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:a})}))}))};return(0,j.jsxs)(s.Z,{children:[(0,j.jsx)(v.default,{}),(0,j.jsx)(i.Z,{open:r,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsxs)(s.Z,{sx:E,children:[(0,j.jsxs)(s.Z,{sx:{backgroundColor:"#EEEEEE",p:2,borderRadius:3,boxShadow:5},children:[(0,j.jsx)(l.Z,{sx:{mb:2,fontSize:18,fontWeight:"bold"},children:"Review"}),(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)(s.Z,{sx:{mb:2},children:[(0,j.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,j.jsx)(u.Z,{name:"rating",value:parseInt(O.values.rating),onChange:U,getLabelText:C,onChangeActive:function(e,r){L(r)}}),(0,j.jsx)(l.Z,{sx:{ml:2},children:y[-1!==q?q:O.values.rating]})]}),(0,j.jsx)(c.Z,{error:!0,sx:{ml:2},children:R})]}),(0,j.jsx)(h.default,{fullWidth:!0,name:"comment",label:"Comment",placeholder:"What can you say...",multiline:!0,rows:4,value:O.values.comment,onChange:U,errors:O.errors})]})]}),(0,j.jsxs)(s.Z,{align:"right",sx:{backgroundColor:"#F4F5FB",p:2,borderRadius:3,mt:5},children:[(0,j.jsx)(d.Z,{size:"small",variant:"outlined",onClick:p,children:"Cancel"}),(0,j.jsx)(d.Z,{size:"small",variant:"contained",color:"primary",sx:{ml:1},onClick:function(){b.validateAll(O.values).then((function(e){O.values.rating<=0?(A("Rating is required!"),(0,g.default)("error",R,Z.options)):e?S(O.values):z((function(e){return(0,o.Z)((0,o.Z)({},e),{},{errors:b.errors})}))}))},disabled:k,children:k?(0,j.jsx)(f.Z,{size:24,sx:{color:"white"},thickness:5}):"Save"})]})]})})]})}},87448:function(e,r,n){n.r(r),n.d(r,{filterWorkers:function(){return s},setClients:function(){return a},setClientsCount:function(){return d},setSearchQuery:function(){return i},setSearchResult:function(){return l},setWorkers:function(){return o},setWorkersCount:function(){return c},updateWorker:function(){return u}});var t=n(26527),o=function(e){return{type:t.ActionTypes.SET_WORKERS,payload:e}},a=function(e){return{type:t.ActionTypes.SET_CLIENTS,payload:e}},s=function(e){return{type:t.ActionTypes.FILTER_WORKERS,payload:e}},i=function(e){return{type:t.ActionTypes.SET_SEARCH_QUERY,payload:e}},l=function(e){return{type:t.ActionTypes.SET_SEARCH_RESULT,payload:e}},u=function(e){return{type:t.ActionTypes.UPDATE_WORKER,payload:e}},c=function(e){return{type:t.ActionTypes.SET_WORKERS_COUNT,payload:e}},d=function(e){return{type:t.ActionTypes.SET_CLIENTS_COUNT,payload:e}}},63845:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t},5462:function(){}}]);
//# sourceMappingURL=6265.fd914ab0.chunk.js.map