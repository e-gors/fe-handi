"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6823,7443,6418,5688],{57443:function(e,r,o){o.r(r),o.d(r,{default:function(){return d}});o(72791);var n=o(18316),i=o(68870),t=o(30151),s=o(80184),a={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function l(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(a[e])}function d(e){var r=e.value;return(0,s.jsx)(i.Z,{sx:{width:200,display:"flex",alignItems:"center"},children:(0,s.jsx)(n.Z,{value:r,readOnly:!0,precision:.1,getLabelText:l,emptyIcon:(0,s.jsx)(t.Z,{style:{opacity:.55},fontSize:"inherit"})})})}},46418:function(e,r,o){o.r(r);var n=o(42982),i=o(70885),t=o(72791),s=o(68870),a=o(61889),l=o(20890),d=o(36314),c=o(40986),x=o(7113),u=o(57443),h=o(81747),p=o(80184),m={rating:{fontSize:24,fontWeight:"bold"},overAllUserWhoRate:{display:"flex",mt:1},linearWrapper:{width:"100%",color:"grey.500"},linearMain:{display:"flex",alignItems:"center"},linearRanking:{fontWeight:"bold",fontSize:16,color:"black"},linear5:{width:"100%",borderRadius:1,height:10,ml:1,boxShadow:4,backgroundColor:"white","& .MuiLinearProgress-bar":{bgcolor:"#5BB85F"}},linear4:{width:"100%",borderRadius:1,height:10,ml:1,boxShadow:4,backgroundColor:"white","& .MuiLinearProgress-bar":{bgcolor:"#5691CB"}},linear3:{width:"100%",borderRadius:1,height:10,ml:1,boxShadow:4,backgroundColor:"white","& .MuiLinearProgress-bar":{bgcolor:"#6BC0D4"}},linear2:{width:"100%",borderRadius:1,height:10,ml:1,boxShadow:4,backgroundColor:"white","& .MuiLinearProgress-bar":{bgcolor:"#EDAE51"}},linear1:{width:"100%",borderRadius:1,height:10,ml:1,boxShadow:4,backgroundColor:"white","& .MuiLinearProgress-bar":{bgcolor:"#D75253"}}};r.default=function(e){var r=e.ratings,o=t.useState([{value:5,count:0,style:m.linear5},{value:4,count:0,style:m.linear4},{value:3,count:0,style:m.linear3},{value:2,count:0,style:m.linear2},{value:1,count:0,style:m.linear1}]),f=(0,i.Z)(o,2),b=f[0],g=f[1],j=null===r||void 0===r?void 0:r.length;t.useEffect((function(){if(r&&r.length>0){var e=(0,n.Z)(b);r.forEach((function(r){var o=r.rating,n=e.findIndex((function(e){return e.value===o}));-1!==n&&e[n].count++})),g(e)}}),[j]);var Z=j>0?r.reduce((function(e,r){return e+r.rating}),0)/j:0;return(0,p.jsx)(s.Z,{children:(0,p.jsx)(s.Z,{children:(0,p.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(a.ZP,{item:!0,xs:12,sm:3,md:12,children:(0,p.jsxs)(s.Z,{children:[(0,p.jsxs)(s.Z,{children:[(0,p.jsxs)(l.Z,{children:[(0,p.jsx)("span",{style:m.rating,children:Z.toFixed(1)})," ","/ 5"]}),(0,p.jsx)(u.default,{value:parseInt(Z.toFixed(1)),precision:.5})]}),(0,p.jsxs)(s.Z,{sx:m.overAllUserWhoRate,children:[(0,p.jsx)(h.Z,{}),(0,p.jsxs)(l.Z,{children:[null===r||void 0===r?void 0:r.length," total"]})]})]})}),(0,p.jsx)(a.ZP,{item:!0,xs:12,sm:9,md:12,children:(0,p.jsx)(d.Z,{sx:m.linearWrapper,children:b&&b.map((function(e){var r=e.count>0?e.count/j*100:0;return(0,p.jsxs)(s.Z,{sx:m.linearMain,children:[(0,p.jsx)(l.Z,{sx:m.linearRanking,children:e.value}),(0,p.jsx)(x.Z,{}),(0,p.jsx)(c.Z,{variant:"determinate",value:r,sx:e.style,children:(0,p.jsx)(l.Z,{level:"body3",fontWeight:"xl",textColor:"common.white",sx:{mixBlendMode:"difference"},children:e.count})})]},e.value)}))})})]})})})}},85688:function(e,r,o){o.r(r);var n=o(68870),i=o(20890),t=(o(72791),o(80184)),s={wrapper:{mt:1,p:1,border:"1px solid #BEBEBE",cursor:"pointer",borderRadius:3,"&:hover":{".title":{color:"blue"}}},main:{display:"flex",alignItems:"center"},textsWrapper:{ml:2},title:{fontWeight:"bold",fontSize:{xs:12,md:14}},text:{fontSize:{xs:11,md:12}}};r.default=function(e){var r=e.handleOpen,o=e.title,a=e.content,l=e.Icon;return(0,t.jsx)(n.Z,{sx:s.wrapper,onClick:function(){return r("Social Networks")},children:(0,t.jsxs)(n.Z,{sx:s.main,children:[(0,t.jsx)(l,{color:"primary"}),(0,t.jsxs)(n.Z,{sx:s.textsWrapper,children:[(0,t.jsx)(i.Z,{sx:s.title,className:"title",children:o}),(0,t.jsx)(i.Z,{sx:s.text,children:a})]})]})})}},56823:function(e,r,o){o.r(r);var n=o(70885),i=o(68870),t=o(36151),s=o(20890),a=o(13400),l=o(72791),d=o(12017),c=o(64880),x=o(33361),u=o(35645),h=o(11062),p=o(59434),m=o(85688),f=o(88471),b=o(46418),g=o(42093),j=o(74668),Z=o(21880),v=o(44547),w=o(80184);r.default=function(){var e=(0,c.k6)(),r=(0,p.v9)((function(e){return e.users.user})),o=r.profile,k=r.fullname,E=o[0],y=E.background_url,W=E.profile_url,C=E.address,S=E.facebook_url,R=E.instagram_url,z=E.twitter_url,B=E.created_at,M=E.rate,I=new Date(B).getFullYear(),L=l.useState(!1),P=(0,n.Z)(L,2),T=P[0],N=P[1],A=l.useState(""),H=(0,n.Z)(A,2),O=H[0],_=H[1],D=function(e){N(!0),_(e)},F={wrapper:{mt:8,p:2},main:{maxWidth:{xs:"100%",md:"90%"},m:"0 auto"},exitIcon:{fontSize:16},contentWrapper:{mt:2},bgImageWrapper:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",backgroundImage:"url(".concat(y,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:y?"transparent":"#BEBEBE",width:"100%",height:{xs:120,md:240},borderRadius:3,cursor:"pointer",transition:"0.5s",border:"2px solid #EEEEEE",boxShadow:5,"&::before":{content:'""',width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)",opacity:0,mixBlendMode:"multiply",borderRadius:3,transition:"opacity 0.3s ease-in-out"},"&:hover::before":{opacity:1},"&:hover .bg-camera-icon":{display:"block"},".bg-camera-icon":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.5)",color:"#333",padding:2,borderRadius:"50%",cursor:"pointer",display:"none",width:{xs:60,sm:80,md:100},height:{xs:60,sm:80,md:100}}},mainProfileWrapper:{display:"flex",flexWrap:{xs:"wrap",md:"noWrap"}},profileImage:{position:"relative",backgroundImage:"url(".concat(W,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundColor:W?"transparent":"#BEBEBE",border:"2px solid white",borderRadius:3,minWidth:90,width:{xs:100,sm:120,md:240},height:{xs:100,sm:120,md:240},cursor:"pointer",transition:"0.5s",boxShadow:5,"&::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)",opacity:0,mixBlendMode:"multiply",transition:"opacity 0.3s ease-in-out",borderRadius:3},"&:hover::before":{opacity:1},"&:hover .profile-camera-icon":{display:"block"},".profile-camera-icon":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.5)",width:{xs:60,md:70},height:{xs:60,md:70},padding:2,borderRadius:"50%",cursor:"pointer",display:"none"}},profileWrapper:{position:"relative",height:"auto",top:{xs:-50,sm:-70,md:-120},ml:2,width:{xs:"100%",md:240}},leftProfileWrapper:{display:{xs:"flex",md:"block"},width:"100%"},fullnameWrapper:{textAlign:{xs:"left",md:"center"},backgroundColor:{xs:"transparent",md:"#EEEEEE"},p:1,mt:{xs:6,sm:8,md:0},boxShadow:{xs:0,md:5}},fullnameText:{fontWeight:"bold",fontSize:{xs:16,sm:18,md:22}},backgroundText:{fontSize:{xs:12,sm:14,md:16}},userRatingWrapper:{width:{xs:"105%",sm:"102%",md:"100%"},mt:3,backgroundColor:"#EEEEEE",borderRadius:3,p:1,boxShadow:5,ml:{xs:-2,md:0}},projectReviewTabsWrapper:{ml:{xs:0,md:5},mt:{xs:-3,sm:-5,md:2},backgroundColor:"#EEEEEE",borderRadius:3,p:2,boxShadow:5,width:"100%"},socialNetworkMain:{display:"flex",alignItems:"center"},socialNetworkText:{fontWeight:"bold",fontSize:{xs:16,sm:18,md:20}},social:{mt:1.5,border:"1px solid #BEBEBE",p:.3,borderRadius:1,transition:".5s",cursor:"pointer",boxShadow:3,display:"flex",justifyContent:"center","&:hover":{backgroundColor:"#BEBEBE"}},socialText:{ml:1},members:{width:{xs:"105%",sm:"102%",md:"100%"},mt:3,backgroundColor:"#EEEEEE",borderRadius:3,p:1,boxShadow:5,ml:{xs:-2,md:0},display:"flex",justifyContent:"space-between"},membersEachWrapper:{display:"flex",flexDirection:"column",textAlign:"center"},value:{fontWeight:"bold",fontSize:{xs:14,md:11}},label:{fontSize:{xs:12,md:9}}};return(0,w.jsxs)(i.Z,{sx:F.wrapper,children:[(0,w.jsx)(h.default,{type:O,open:T,handleClose:function(){N(!1)}}),(0,w.jsx)(i.Z,{sx:F.main,children:(0,w.jsxs)(i.Z,{children:[(0,w.jsxs)(t.Z,{variant:"text",onClick:function(){e.goBack()},children:[(0,w.jsx)(d.Z,{sx:F.exitIcon})," Exit Edit Mode"]}),(0,w.jsxs)(i.Z,{sx:F.contentWrapper,children:[(0,w.jsx)(i.Z,{sx:F.bgImageWrapper,onClick:function(){return D("Background Image")},children:(0,w.jsx)(u.Z,{className:"bg-camera-icon"})}),(0,w.jsxs)(i.Z,{sx:F.mainProfileWrapper,children:[(0,w.jsxs)(i.Z,{sx:F.profileWrapper,children:[(0,w.jsxs)(i.Z,{sx:F.leftProfileWrapper,children:[(0,w.jsx)(i.Z,{sx:F.profileImage,onClick:function(){return D("Profile Image")},children:(0,w.jsx)(u.Z,{className:"profile-camera-icon"})}),(0,w.jsxs)(i.Z,{sx:F.fullnameWrapper,children:[(0,w.jsx)(s.Z,{sx:F.fullnameText,children:k}),(0,w.jsx)(s.Z,{sx:F.backgroundText,children:C})]})]}),(0,w.jsxs)(i.Z,{sx:F.members,children:[(0,w.jsxs)(i.Z,{sx:F.membersEachWrapper,children:[(0,w.jsx)(s.Z,{sx:F.value,children:I&&I}),(0,w.jsx)(s.Z,{sx:F.label,children:"Member Since"})]}),(0,w.jsxs)(i.Z,{sx:F.membersEachWrapper,children:[(0,w.jsxs)(s.Z,{sx:F.value,children:["\u20b1",M||"0"]}),(0,w.jsx)(s.Z,{sx:F.label,children:"Rates"})]}),(0,w.jsxs)(i.Z,{sx:F.membersEachWrapper,children:[(0,w.jsx)(s.Z,{sx:F.value,children:"49"}),(0,w.jsx)(s.Z,{sx:F.label,children:"Completed Jobs"})]})]}),(0,w.jsx)(i.Z,{sx:F.userRatingWrapper,children:(0,w.jsx)(b.default,{ratings:r&&r.ratings})}),(0,w.jsxs)(i.Z,{sx:F.userRatingWrapper,children:[(0,w.jsxs)(i.Z,{sx:F.socialNetworkMain,children:[(0,w.jsx)(s.Z,{sx:F.socialNetworkText,children:"Social Networks"}),(S||R||z)&&(0,w.jsx)(a.Z,{onClick:function(){return D("Social Networks")},children:(0,w.jsx)(f.Z,{})})]}),!S&&!R&&!z&&(0,w.jsx)(m.default,{title:"Add Social Networks",Icon:v.Z,content:" Adding your social media accounts helps showcase you as a person and can help to strengthen your reputability.",handleOpen:D}),S&&(0,w.jsxs)(i.Z,{sx:F.social,onClick:function(){return window.open(S)},children:[(0,w.jsx)(g.Z,{color:"primary"}),(0,w.jsx)(s.Z,{sx:F.socialText,children:"Facebook Link"})]}),R&&(0,w.jsxs)(i.Z,{sx:F.social,onClick:function(){return window.open(R)},children:[(0,w.jsx)(Z.Z,{color:"primary"}),(0,w.jsx)(s.Z,{sx:F.socialText,children:"Instagram Link"})]}),z&&(0,w.jsxs)(i.Z,{sx:F.social,onClick:function(){return window.open(z)},children:[(0,w.jsx)(j.Z,{color:"primary"}),(0,w.jsx)(s.Z,{sx:F.socialText,children:"Twitter Link"})]})]})]}),(0,w.jsx)(i.Z,{sx:F.projectReviewTabsWrapper,children:(0,w.jsx)(i.Z,{children:(0,w.jsx)(x.default,{user:r&&r})})})]})]})]})})]})}},35645:function(e,r,o){var n=o(64836);r.Z=void 0;var i=n(o(45649)),t=o(80184),s=(0,i.default)((0,t.jsx)("path",{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}),"AddAPhotoOutlined");r.Z=s},81747:function(e,r,o){var n=o(64836);r.Z=void 0;var i=n(o(45649)),t=o(80184),s=(0,i.default)((0,t.jsx)("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonOutlined");r.Z=s},30151:function(e,r,o){var n=o(64836);r.Z=void 0;var i=n(o(45649)),t=o(80184),s=(0,i.default)((0,t.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");r.Z=s},7113:function(e,r,o){var n=o(64836);r.Z=void 0;var i=n(o(45649)),t=o(80184),s=(0,i.default)((0,t.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined");r.Z=s},44547:function(e,r,o){var n=o(64836);r.Z=void 0;var i=n(o(45649)),t=o(80184),s=(0,i.default)((0,t.jsx)("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"}),"ThumbUpOutlined");r.Z=s}}]);
//# sourceMappingURL=6823.0753cc29.chunk.js.map