/*! For license information please see 1447.c77c3302.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[1447,6735],{89846:function(e,r,a){a.r(r);var t=a(70885),s=a(1413),i=a(68870),n=a(61889),o=a(20890),l=a(39124),c=a(43896),d=a(36151),u=a(72791),h=a(59332),x=a(31592),p=a(8641),f=a(59391),m=(a(1009),a(41433)),Z=a(70937),b=a(58900),j=a(64880),v=a(11062),g=a(62237),k=a(86360),y=a(42093),w=a(74668),C=a(21880),P=a(19156),W=a(80184);function _(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var E={wrapper:{backgroundColor:"#EEEEEE",borderRadius:3,boxShadow:5,p:2},mainWrapper:{display:"flex",justifyContent:"space-between"},icons:{width:30,height:30},title:{ml:1,whiteSpace:"noWrap"},tabWrapper:{mt:-2,mb:2},tabLabel:{fontSize:11},scoreWrapper:{mt:5,backgroundColor:"#EEEEEE",borderRadius:3,p:1},scoreMainWrapper:{display:"flex",flexWrap:"wrap"},circularWrapper:{width:{xs:120,md:150},height:{xs:120,md:150},"@media(max-width: 865px)":{margin:"20px auto"}},score:{fontSize:{xs:22,md:28},fontWeight:"bold"},profileTitle:{fontSize:{xs:20,md:24},fontWeight:"bold"},profileCardWrapper:{m:.5,border:"1px solid #BEBEBE",boxShadow:5,p:1,display:"flex",borderRadius:2},info:{ml:2},quickAction:{backgroundColor:"#EEEEEE",borderRadius:3,boxShadow:5,p:2},quickActionCardWrapper:{backgroundColor:"#BEBEBE",borderRadius:3,boxShadow:5,p:2,cursor:"pointer","&:hover":{backgroundColor:"#CCCCCC"}},quickMainWrapper:{display:"flex",justifyContent:"space-between"},quoteIcon:{color:"green",width:30,height:30},credsButton:{m:1,boxShadow:5,p:1,display:"flex",borderRadius:2,"&:hover":{boxShadow:10,backgroundColor:"#BEBEBE",color:"black"}}};r.default=function(e){var r=e.user,a=r.profile,z=r.bids,M=r.contracts,R=r.offers,V=r.tracker,S=a[0].profile_completeness,A=(0,j.k6)(),L=u.useState([0,0,0]),B=(0,t.Z)(L,2),H=B[0],O=B[1],q=u.useState(!1),N=(0,t.Z)(q,2),I=N[0],T=N[1],D=u.useState(""),F=(0,t.Z)(D,2),G=F[0],K=F[1],Q=[{icon:(0,W.jsx)(g.Z,{color:"inherit"}),label:"Add Profile Photo",name:"Profile Image",hasValue:!(null===a||void 0===a||!a.profile_url)},{icon:(0,W.jsx)(g.Z,{color:"inherit"}),label:"Add Background Photo",name:"Background Image",hasValue:!(null===a||void 0===a||!a.background_url)},{icon:(0,W.jsx)(k.Z,{color:"inherit"}),label:"Add About",name:"About",hasValue:!(null===a||void 0===a||!a.about)},{icon:(0,W.jsx)(P.Z,{color:"inherit"}),label:"Add Background",name:"Background",hasValue:!(null===a||void 0===a||!a.background)},{icon:(0,W.jsx)(y.Z,{color:"inherit"}),label:"Facebook",name:"Facebook",hasValue:!(null===a||void 0===a||!a.facebook_url)},{icon:(0,W.jsx)(w.Z,{color:"inherit"}),label:"Twitter",name:"Twitter",hasValue:!(null===a||void 0===a||!a.twitter_url)},{icon:(0,W.jsx)(C.Z,{color:"inherit"}),label:"Instagram",name:"Instagram",hasValue:!(null===a||void 0===a||!a.instagram_url)}],U=function(e,r){O((function(a){return a.map((function(a,t){return t===e?r:a}))}))},J=function(e){A.push(e)};return(0,W.jsxs)(i.Z,{children:[(0,W.jsx)(v.default,{open:I,type:G,handleClose:function(){return T(!1)}}),(0,W.jsx)(i.Z,{children:(0,W.jsxs)(n.ZP,{container:!0,spacing:2,sx:{flexDirection:{xs:"column-reverse",md:"row"}},children:[(0,W.jsxs)(n.ZP,{item:!0,xs:12,md:12,lg:9.5,children:[(0,W.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,W.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,W.jsxs)(i.Z,{sx:E.wrapper,children:[(0,W.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(h.Z,{color:"primary",sx:E.icons}),(0,W.jsx)(o.Z,{sx:E.title,children:"Profile views"})]}),(0,W.jsx)(i.Z,{sx:E.tabWrapper,children:(0,W.jsxs)(l.Z,{value:H[0],onChange:function(e,r){return U(0,r)},"aria-label":"basic tabs example",children:[(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"30 days"},_(0)),{},{sx:E.tabLabel})),(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"Week"},_(1)),{},{sx:E.tabLabel}))]})})]}),0===H[0]&&(0,W.jsx)(o.Z,{children:V&&V.profile_view_m?V.profile_view_m:0}),1===H[0]&&(0,W.jsxs)(o.Z,{children:[" ",V&&V.profile_view_w?V.profile_view_w:0]})]})}),(0,W.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,W.jsxs)(i.Z,{sx:E.wrapper,children:[(0,W.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(x.Z,{color:"secondary",sx:E.icons}),(0,W.jsx)(o.Z,{sx:E.title,children:"Search results"})]}),(0,W.jsx)(i.Z,{sx:E.tabWrapper,children:(0,W.jsxs)(l.Z,{value:H[1],onChange:function(e,r){return U(1,r)},"aria-label":"basic tabs example",children:[(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"30 days"},_(0)),{},{sx:E.tabLabel})),(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"Week"},_(1)),{},{sx:E.tabLabel}))]})})]}),0===H[1]&&(0,W.jsxs)(o.Z,{children:[" ",V&&V.search_result_m?V.search_result_m:0]}),1===H[1]&&(0,W.jsxs)(o.Z,{children:[" ",V&&V.search_result_w?V.search_result_w:0]})]})}),(0,W.jsx)(n.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,W.jsxs)(i.Z,{sx:E.wrapper,children:[(0,W.jsxs)(i.Z,{sx:E.mainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(p.Z,{color:"warning",sx:E.icons}),(0,W.jsx)(o.Z,{sx:E.title,children:"Reviews"})]}),(0,W.jsx)(i.Z,{sx:E.tabWrapper,children:(0,W.jsxs)(l.Z,{value:H[2],onChange:function(e,r){return U(2,r)},"aria-label":"basic tabs example",children:[(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"30 days"},_(0)),{},{sx:E.tabLabel})),(0,W.jsx)(c.Z,(0,s.Z)((0,s.Z)({label:"Week"},_(1)),{},{sx:E.tabLabel}))]})})]}),0===H[2]&&(0,W.jsx)(o.Z,{children:"30 days"}),1===H[2]&&(0,W.jsx)(o.Z,{children:"Week"})]})})]}),(0,W.jsxs)(i.Z,{sx:E.scoreWrapper,children:[(0,W.jsxs)(i.Z,{sx:E.scoreMainWrapper,children:[(0,W.jsx)(i.Z,{sx:E.circularWrapper,children:(0,W.jsxs)(f.Wo,{minValue:1,maxValue:10,value:S,children:[(0,W.jsx)(o.Z,{sx:E.score,children:S}),(0,W.jsx)(o.Z,{children:"out of 10"})]})}),(0,W.jsxs)(i.Z,{sx:E.info,children:[(0,W.jsx)(o.Z,{sx:E.profileTitle,children:"Profile Score"}),(0,W.jsx)(o.Z,{children:"Add your Main profile information to appear in search results and submit proposals."})]})]}),!(a.profile_url&&a.background_url&&a.background&&a.facebook_url&&a.twitter_url&&a.instagram_url&&a.about)&&(0,W.jsxs)(i.Z,{sx:{mt:3},children:[(0,W.jsx)(o.Z,{children:"Add credibility to your profile"}),(0,W.jsx)(i.Z,{sx:{display:"flex",flexWrap:"wrap"},children:Q&&Q.map((function(e,r){if(!e.hasValue)return(0,W.jsxs)(d.Z,{size:"small",sx:E.credsButton,onClick:function(){return function(e){K(e),T(!0)}(e.name)},children:[e.icon,(0,W.jsx)(o.Z,{sx:{ml:2,color:"inherit"},children:e.label})]},r)}))})]})]})]}),(0,W.jsx)(n.ZP,{item:!0,xs:12,md:12,lg:2.5,children:(0,W.jsxs)(i.Z,{sx:E.quickAction,children:[(0,W.jsx)(o.Z,{sx:E.profileTitle,children:"Quick Actions"}),(0,W.jsx)(i.Z,{sx:{mt:2},children:(0,W.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,W.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,lg:12,children:(0,W.jsx)(i.Z,{sx:E.quickActionCardWrapper,onClick:function(){return J("/my-proposals")},children:(0,W.jsxs)(i.Z,{sx:E.quickMainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(m.Z,{color:"primary",sx:E.icons}),(0,W.jsx)(o.Z,{sx:{ml:1},children:"Go to Proposals"})]}),(0,W.jsx)(o.Z,{children:z?z.length:0})]})})}),(0,W.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,lg:12,children:(0,W.jsx)(i.Z,{sx:E.quickActionCardWrapper,onClick:function(){return J("/contracts")},children:(0,W.jsxs)(i.Z,{sx:E.quickMainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(Z.Z,{color:"warning",sx:E.icons}),(0,W.jsx)(o.Z,{sx:{ml:1},children:"Go to Contracts"})]}),(0,W.jsx)(o.Z,{children:M?M.length:0})]})})}),(0,W.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,lg:12,children:(0,W.jsx)(i.Z,{sx:E.quickActionCardWrapper,onClick:function(){return J("/my-offers")},children:(0,W.jsxs)(i.Z,{sx:E.quickMainWrapper,children:[(0,W.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,W.jsx)(b.Z,{sx:E.quoteIcon}),(0,W.jsx)(o.Z,{sx:{ml:1},children:"Go to Offers"})]}),(0,W.jsx)(o.Z,{children:R?R.length:0})]})})})]})})]})})]})})]})}},68943:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicatorRounded");r.Z=n},44045:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}),"FacebookRounded");r.Z=n},31592:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}),"FindInPage");r.Z=n},41433:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}),"MarkEmailUnread");r.Z=n},70937:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM9.1 17H7v-2.14l5.96-5.96 2.12 2.12L9.1 17zm7.75-7.73-1.06 1.06-2.12-2.12 1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z"}),"NoteAlt");r.Z=n},19156:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"}),"Notes");r.Z=n},62237:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}),"Portrait");r.Z=n},58900:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"}),"RequestQuote");r.Z=n},86360:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M4 9h16v2H4V9zm0 4h10v2H4v-2z"}),"ShortText");r.Z=n},8641:function(e,r,a){var t=a(64836);r.Z=void 0;var s=t(a(45649)),i=a(80184),n=(0,s.default)((0,i.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"}),"Stars");r.Z=n},7883:function(e,r,a){a(72791);var t=a(74223),s=a(80184);r.Z=(0,t.Z)((0,s.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},11883:function(e,r,a){a(72791);var t=a(74223),s=a(80184);r.Z=(0,t.Z)((0,s.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},59391:function(e,r,a){a.d(r,{Wo:function(){return h}});var t=a(72791),s=function(e,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a])},s(e,r)};var i=function(){return i=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var s in r=arguments[a])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},i.apply(this,arguments)};var n=50,o=50;function l(e){var r=e.className,a=e.counterClockwise,s=e.dashRatio,i=e.pathRadius,n=e.strokeWidth,o=e.style;return(0,t.createElement)("path",{className:r,style:Object.assign({},o,d({pathRadius:i,dashRatio:s,counterClockwise:a})),d:c({pathRadius:i,counterClockwise:a}),strokeWidth:n,fillOpacity:0})}function c(e){var r=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M "+n+","+o+"\n      m 0,-"+r+"\n      a "+r+","+r+" "+a+" 1 1 0,"+2*r+"\n      a "+r+","+r+" "+a+" 1 1 0,-"+2*r+"\n    "}function d(e){var r=e.counterClockwise,a=e.dashRatio,t=e.pathRadius,s=2*Math.PI*t,i=(1-a)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(r?-i:i)+"px"}}var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return function(e,r){function a(){this.constructor=e}s(e,r),e.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}(r,e),r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var e=this.props,r=e.value,a=e.minValue,t=e.maxValue;return(Math.min(Math.max(r,a),t)-a)/(t-a)},r.prototype.render=function(){var e=this.props,r=e.circleRatio,a=e.className,s=e.classes,i=e.counterClockwise,c=e.styles,d=e.strokeWidth,u=e.text,h=this.getPathRadius(),x=this.getPathRatio();return(0,t.createElement)("svg",{className:s.root+" "+a,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,t.createElement)("circle",{className:s.background,style:c.background,cx:n,cy:o,r:50}):null,(0,t.createElement)(l,{className:s.trail,counterClockwise:i,dashRatio:r,pathRadius:h,strokeWidth:d,style:c.trail}),(0,t.createElement)(l,{className:s.path,counterClockwise:i,dashRatio:x*r,pathRadius:h,strokeWidth:d,style:c.path}),u?(0,t.createElement)("text",{className:s.text,style:c.text,x:n,y:o},u):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(t.Component);function h(e){e.children;var r=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&(a[t[s]]=e[t[s]])}return a}(e,["children"]);return(0,t.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},(0,t.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},(0,t.createElement)(u,i({},r)),e.children?(0,t.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}},1009:function(){}}]);
//# sourceMappingURL=1447.c77c3302.chunk.js.map