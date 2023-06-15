"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6692,2843,3845],{76692:function(e,r,n){n.r(r);var t=n(1413),a=n(4942),i=n(70885),s=n(72791),l=(n(32843),n(66934)),o=n(68870),c=n(68096),d=n(77196),m=n(36314),u=n(36151),h=n(18316),x=n(20890),f=n(40986),j=n(78917),v=n(63845),g=n(80184);r.default=function(e){e.worker;var r=s.useState(2),n=(0,i.Z)(r,2),p=n[0],Z=n[1],N=(0,s.useState)(!1),b=(0,i.Z)(N,2),w=b[0],C=b[1],S=window.location.href.split("/"),y=S[S.length-1],k=(0,s.useState)([]),W=(0,i.Z)(k,2),M=W[0],P=W[1];(0,s.useEffect)((function(){v.default.get("/reviews/".concat(y)).then((function(e){return P(e.data)}))}),[w,y]);var E=s.useState({uuid:y,comment:"",rating:""}),F=(0,i.Z)(E,2),A=F[0],G=F[1],L=(0,l.ZP)(f.Z)((function(e){var r,n=e.theme;return r={height:10,borderRadius:5},(0,a.Z)(r,"&.".concat(j.Z.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]}),(0,a.Z)(r,"& .".concat(j.Z.bar),{borderRadius:5,backgroundColor:"light"===n.palette.mode?"#1a90ff":"#308fe8"}),r}));return(0,g.jsx)("div",{className:"container-fluid px-1 py-5 mx-auto",children:(0,g.jsx)("div",{className:"row justify-content-center",children:(0,g.jsxs)("div",{className:"col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5",children:[(0,g.jsx)("div",{className:"card",children:(0,g.jsxs)("div",{className:"row-card",children:[(0,g.jsxs)("div",{className:"col-md-4 d-flex flex-column",children:[(0,g.jsx)("div",{className:"rating-box",children:(0,g.jsx)("h1",{className:"pt-4",children:"4.0"})}),(0,g.jsx)("div",{children:(0,g.jsxs)(o.Z,{sx:{"& > legend":{mt:2}},children:[(0,g.jsx)(x.Z,{component:"legend",children:"Out of 5"}),(0,g.jsx)(h.Z,{name:"simple-controlled",value:p,onChange:function(e,r){Z(r)}})]})})]}),(0,g.jsx)("div",{className:"col-md-8",children:(0,g.jsx)("div",{className:"rating-bar0 justify-content-center",children:(0,g.jsx)("table",{className:"text-left mx-auto",children:(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"rating-label",children:"Excellent"}),(0,g.jsx)("td",{className:"rating-bar",children:(0,g.jsx)(o.Z,{sx:{flexGrow:1},children:(0,g.jsx)(L,{variant:"determinate",value:50})})}),(0,g.jsx)("td",{className:"text-right",children:"123"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"rating-label",children:"Good"}),(0,g.jsx)("td",{className:"rating-bar",children:(0,g.jsx)(o.Z,{sx:{flexGrow:1},children:(0,g.jsx)(L,{variant:"determinate",value:100})})}),(0,g.jsx)("td",{className:"text-right",children:"23"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"rating-label",children:"Average"}),(0,g.jsx)("td",{className:"rating-bar",children:(0,g.jsx)(o.Z,{sx:{flexGrow:1},children:(0,g.jsx)(L,{variant:"determinate",value:70})})}),(0,g.jsx)("td",{className:"text-right",children:"10"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"rating-label",children:"Poor"}),(0,g.jsx)("td",{className:"rating-bar",children:(0,g.jsx)(o.Z,{sx:{flexGrow:1},children:(0,g.jsx)(L,{variant:"determinate",value:60})})}),(0,g.jsx)("td",{className:"text-right",children:"3"})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"rating-label",children:"Terrible"}),(0,g.jsx)("td",{className:"rating-bar",children:(0,g.jsx)(o.Z,{sx:{flexGrow:1},children:(0,g.jsx)(L,{variant:"determinate",value:20})})}),(0,g.jsx)("td",{className:"text-right",children:"0"})]})]})})})})]})}),(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"card",children:[(0,g.jsxs)("div",{className:"avatars",children:[(0,g.jsx)("div",{className:"col-2",children:(0,g.jsx)("img",{src:"https://i.imgur.com/xELPaag.jpg",width:"70",className:"rounded-circle mt-2"})}),(0,g.jsx)("div",{className:"comment",children:(0,g.jsx)("h1",{children:"Comments"})})]}),(0,g.jsx)("div",{children:(0,g.jsxs)(o.Z,{sx:{"& > legend":{mt:2}},children:[(0,g.jsx)(x.Z,{component:"legend",children:"Out of 5"}),(0,g.jsx)(h.Z,{name:"simple-controlled",value:p,onChange:function(e,r){Z(r),G((function(e){return(0,t.Z)((0,t.Z)({},e),{},{rating:r})}))}})]})}),(0,g.jsx)(o.Z,{component:"form",noValidate:!0,autoComplete:"off",children:(0,g.jsx)(c.Z,{sx:{width:"40ch"},children:(0,g.jsx)(d.Z,{placeholder:"Please enter your comment..",name:"comment",onChange:function(e){var r=e.target,n=r.name,i=r.value;G((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,a.Z)({},n,i))}))}})})}),(0,g.jsx)("br",{}),(0,g.jsx)(m.Z,{direction:"row",spacing:2,children:(0,g.jsx)(u.Z,{variant:"contained",color:"success",onClick:function(){A.rating?v.default.post("/ratings",A).then((function(e){200===e.status&&(alert("saved"),C(!w))})).catch((function(e){return console.error(e)})):alert("need to add ratings")},children:"Submit"})})]})}),M.map((function(e,r){var n=new Date(e.created_at),t=n.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],i=n.getFullYear(),s="".concat(t," ").concat(a," ").concat(i);return(0,g.jsxs)("div",{className:"card",children:[(0,g.jsxs)("div",{className:"row d-flex",children:[(0,g.jsx)("div",{className:!0,children:(0,g.jsx)("img",{className:"profile-pic",alt:"",src:"https://i.imgur.com/V3ICjlm.jpg"})}),(0,g.jsxs)("div",{className:"d-flex flex-column",children:[(0,g.jsx)("h3",{className:"mt-2 mb-0",children:"Marc Mayao"}),(0,g.jsx)("div",{children:(0,g.jsxs)(o.Z,{sx:{"& > legend":{mt:2}},children:[(0,g.jsxs)(x.Z,{component:"legend",children:[" ",e.rating]}),(0,g.jsx)(h.Z,{name:"simple-controlled",value:e.rating,onChange:function(e,r){Z(r)}})]})})]}),(0,g.jsx)("div",{className:"ml-auto",children:(0,g.jsx)("p",{className:"text-muted pt-5 pt-sm-3",children:s})})]}),(0,g.jsx)("div",{className:"row text-left",children:(0,g.jsx)("p",{className:"content",children:e.comment})})]},r)}))]})})})}},63845:function(e,r,n){n.r(r);var t=n(31243).Z.create();t.defaults.baseURL="http://localhost:8000/api",t.defaults.headers.common.Accept="application/json",t.defaults.headers.common["Content-Type"]="application/json",t.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),t.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),r.default=t},68096:function(e,r,n){n.d(r,{Z:function(){return N}});var t=n(70885),a=n(63366),i=n(87462),s=n(72791),l=n(28182),o=n(94419),c=n(31402),d=n(66934),m=n(35470),u=n(14036),h=n(19103),x=n(93840),f=n(75878),j=n(21217);function v(e){return(0,j.Z)("MuiFormControl",e)}(0,f.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var g=n(80184),p=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Z=(0,d.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return(0,i.Z)({},r.root,r["margin".concat((0,u.Z)(n.margin))],n.fullWidth&&r.fullWidth)}})((function(e){var r=e.ownerState;return(0,i.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===r.margin&&{marginTop:16,marginBottom:8},"dense"===r.margin&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})})),N=s.forwardRef((function(e,r){var n=(0,c.Z)({props:e,name:"MuiFormControl"}),d=n.children,f=n.className,j=n.color,N=void 0===j?"primary":j,b=n.component,w=void 0===b?"div":b,C=n.disabled,S=void 0!==C&&C,y=n.error,k=void 0!==y&&y,W=n.focused,M=n.fullWidth,P=void 0!==M&&M,E=n.hiddenLabel,F=void 0!==E&&E,A=n.margin,G=void 0===A?"none":A,L=n.required,R=void 0!==L&&L,T=n.size,z=void 0===T?"medium":T,B=n.variant,D=void 0===B?"outlined":B,I=(0,a.Z)(n,p),q=(0,i.Z)({},n,{color:N,component:w,disabled:S,error:k,fullWidth:P,hiddenLabel:F,margin:G,required:R,size:z,variant:D}),J=function(e){var r=e.classes,n=e.margin,t=e.fullWidth,a={root:["root","none"!==n&&"margin".concat((0,u.Z)(n)),t&&"fullWidth"]};return(0,o.Z)(a,v,r)}(q),O=s.useState((function(){var e=!1;return d&&s.Children.forEach(d,(function(r){if((0,h.Z)(r,["Input","Select"])){var n=(0,h.Z)(r,["Select"])?r.props.input:r;n&&(0,m.B7)(n.props)&&(e=!0)}})),e})),_=(0,t.Z)(O,2),V=_[0],U=_[1],Y=s.useState((function(){var e=!1;return d&&s.Children.forEach(d,(function(r){(0,h.Z)(r,["Input","Select"])&&(0,m.vd)(r.props,!0)&&(e=!0)})),e})),H=(0,t.Z)(Y,2),K=H[0],Q=H[1],X=s.useState(!1),$=(0,t.Z)(X,2),ee=$[0],re=$[1];S&&ee&&re(!1);var ne,te=void 0===W||S?ee:W,ae=s.useMemo((function(){return{adornedStart:V,setAdornedStart:U,color:N,disabled:S,error:k,filled:K,focused:te,fullWidth:P,hiddenLabel:F,size:z,onBlur:function(){re(!1)},onEmpty:function(){Q(!1)},onFilled:function(){Q(!0)},onFocus:function(){re(!0)},registerEffect:ne,required:R,variant:D}}),[V,N,S,k,K,te,P,F,ne,R,z,D]);return(0,g.jsx)(x.Z.Provider,{value:ae,children:(0,g.jsx)(Z,(0,i.Z)({as:w,ownerState:q,className:(0,l.Z)(J.root,f),ref:r},I,{children:d}))})}))},32843:function(e,r,n){n.r(r),r.default={}}}]);
//# sourceMappingURL=6692.509ba992.chunk.js.map