"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[899,7607,629,6531,5854,6442,8292,9293,3850,5566,2312,4219,1917,5402,6626,653,7448,6155,3845,2527],{64253:function(e,t,n){n.r(t);var r=n(1413),s=n(45987),o=n(93006),i=(n(72791),n(80184)),a=["errors","name","customError"];t.default=function(e){var t=e.errors,n=e.name,l=e.customError,c=(0,s.Z)(e,a),d=!1,u="";l&&(d=!0,u=l),t&&(d=t&&t.has(n)||!1,u=t&&t.first(n)||"");var x=(0,r.Z)((0,r.Z)({error:d,name:n,helperText:u},c),{},{value:c.value||""});return(0,i.jsx)(o.Z,(0,r.Z)({size:"small",variant:"outlined"},x))}},8292:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(75985);function s(e,t,n){return"success"===e?r.Am.success(t,n):r.Am.error(t,n)}},49293:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(75985),s=(n(5462),n(80184));function o(){return(0,s.jsx)(r.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})}},33850:function(e,t,n){n.r(t),n.d(t,{options:function(){return r}});var r={position:"top-right",autoClose:3e3,hideProgressBar:!1,draggable:!0,draggableDirection:0,draggablePercent:60,theme:"colored"}},25566:function(e,t,n){n.r(t);var r=n(68870),s=n(61889),o=n(20890),i=(n(72791),n(61249)),a=n(72554),l=n(2216),c=n(51395),d=n(59434),u=n(80184),x={wrapper:{backgroundColor:"#1976D2",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",p:2},cardWrapper:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",color:"white",border:"1px solid #0135FE",boxShadow:20,p:2},number:{fontSize:{xs:12,md:26},fontWeigth:600,textAlign:{xs:"center",md:"left"}},text:{fontSize:{xs:12,md:20},textAlign:{xs:"center",md:"left"}}};t.default=function(){var e=(0,d.v9)((function(e){return e.posts.posts})),t=(0,d.v9)((function(e){return e.profiles.workers})),n=(0,d.v9)((function(e){return e.profiles.clients})),f=(0,d.v9)((function(e){return e.projects.projects})),p=[{icon:(0,u.jsx)(i.Z,{sx:{width:{xs:30,md:75},height:{xs:30,md:75}}}),num:e?e.length:0,text:"Job Offers"},{icon:(0,u.jsx)(a.Z,{sx:{width:{xs:30,md:75},height:{xs:30,md:75}}}),num:t?t.length:0,text:"Skilled Workers"},{icon:(0,u.jsx)(l.Z,{sx:{width:{xs:30,md:75},height:{xs:30,md:75}}}),num:n?n.length:0,text:"Active Clients"},{icon:(0,u.jsx)(c.Z,{sx:{width:{xs:30,md:75},height:{xs:30,md:75}}}),num:f?f.length:0,text:"Completed Projects"}];return(0,u.jsx)(r.Z,{component:"div",sx:x.wrapper,children:(0,u.jsx)(s.ZP,{container:!0,spacing:2,children:p&&p.map((function(e,t){return(0,u.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)(r.Z,{sx:x.cardWrapper,children:[e.icon,(0,u.jsxs)(r.Z,{children:[(0,u.jsxs)(o.Z,{sx:x.number,children:["+",e.num]}),(0,u.jsx)(o.Z,{sx:x.text,children:e.text})]})]})},t)}))})})}},42312:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(4942),s=n(1413),o=n(70885),i=n(72791),a=n(89164),l=n(4708),c=n(68870),d=n(36151),u=n(13239),x=(n(63845),n(67107)),f=n(1701),p=n(64880),h=n(64253),m=n(49293),j=(n(8292),n(31783)),g=n(90668),Z=(n(33850),n(80184)),b=new j.ZP.Validator({email:"required|email",letter:"required"}),S=(0,x.Z)();function C(){(0,p.k6)();var e=i.useState(!1),t=(0,o.Z)(e,2),n=t[0],x=(t[1],i.useState({values:{email:"",letter:""},errors:b.errors})),j=(0,o.Z)(x,2),C=j[0],k=j[1],y=function(e){var t=e.target.name,n=e.target.value;k((function(e){return(0,s.Z)((0,s.Z)({},e),{},{values:(0,s.Z)((0,s.Z)({},e.values),{},(0,r.Z)({},t,n))})}));var o=b.errors;b.validate(t,n).then((function(){k((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:o})}))}))};return(0,Z.jsxs)(f.Z,{theme:S,children:[(0,Z.jsx)(m.default,{}),(0,Z.jsxs)(a.Z,{maxWidth:"md",children:[(0,Z.jsx)(l.ZP,{}),(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(c.Z,{component:"form",children:[(0,Z.jsx)(h.default,{variant:"standard",required:!0,name:"email",errors:C.errors,onChange:y,value:C.values.email,size:"small",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",color:"black"}}}),(0,Z.jsx)(h.default,{variant:"standard",multiline:!0,required:!0,name:"letter",errors:C.errors,value:C.values.letter,onChange:y,size:"small",margin:"normal",fullWidth:!0,label:"Message",id:"letter",autoComplete:"letter",InputProps:{style:{background:"rgba(255, 255, 255, 0.5)",coor:"black"}}}),(0,Z.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:g.styles.customBlueButton,onClick:function(){b.validateAll(C.values).then((function(e){e?console.log(C.values):k((function(e){return(0,s.Z)((0,s.Z)({},e),{},{errors:b.errors})}))}))},disabled:n,children:n?(0,Z.jsx)(u.Z,{size:24}):"Submit"})]})})]})]})}},24219:function(e,t,n){n.r(t);var r=n(68870),s=n(20890),o=(n(72791),n(90629)),i=n(43032),a=n(64880),l=n(80184),c={wrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:3,flexWrap:{xs:"wrap",md:"wrap",lg:"noWrap"},p:1},main:{},forClientLeft:{p:1,width:{xs:"100%",sm:"100%"}},forClientText:{fontSize:{xs:30,md:24},fontWeight:"bold",paddingBottom:"20px"},forClientSubHeader:{fontWeight:"bold",fontSize:{xs:24,md:36}},forClientCard:{display:"flex",alignItems:"center",border:"1px solid gray",cursor:"pointer",mt:1,p:1,mb:2,transition:"0.5s","&:hover":{backgroundColor:"#EEEEEE"}},findJob:{fontWeight:"bold",fontSize:{xs:18,md:24}},clientImage:{maxWidth:{xs:"100%",md:820},m:"20px auto"}};t.default=function(){var e=(0,a.k6)();return(0,l.jsxs)(r.Z,{sx:c.wrapper,children:[(0,l.jsxs)(r.Z,{sx:c.forClientLeft,children:[(0,l.jsx)(s.Z,{sx:c.forClientText,children:"For Client"}),(0,l.jsx)(s.Z,{sx:c.forClientSubHeader,children:"Find skilled workers"}),(0,l.jsx)(s.Z,{sx:c.forClientSubHeader,children:"in your best way"}),(0,l.jsx)(s.Z,{children:"Work with so many skilled workers and find clients based on your expertise! You can also post job for your project."}),(0,l.jsxs)(r.Z,{sx:c.forClientCard,children:[i.icons.workIcon,(0,l.jsxs)(r.Z,{onClick:function(){return e.push("/find-jobs")},children:[(0,l.jsx)(s.Z,{sx:c.findJob,children:"Find job"}),(0,l.jsx)(s.Z,{children:"Filter the job posts and find the job that are align to your skills and talents."})]})]}),(0,l.jsxs)(r.Z,{sx:c.forClientCard,children:[i.icons.engineeringIcon,(0,l.jsxs)(r.Z,{onClick:function(){return e.push("/find-people")},children:[(0,l.jsx)(s.Z,{sx:c.findJob,children:"Browse skilled workers"}),(0,l.jsx)(s.Z,{children:"Find the best skilled workers base on their rating for your project."})]})]})]}),(0,l.jsx)(r.Z,{sx:c.clientImage,component:"img",src:o})]})}},45305:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(52791),s=n(96766),o=(n(65141),n(36531)),i=n(5854),a=n(56442),l=n(80184),c={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}};function d(){return(0,l.jsx)(r.Z,{sx:{mt:5},children:(0,l.jsxs)(s.default,{swipeable:!0,draggable:!1,showDots:!0,responsive:c,ssr:!0,infinite:!0,autoPlay:!0,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"all 1s",transitionDuration:1e3,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:[(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Carpenter",src:o}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Plumber",src:i}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Construction Worker",src:a}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Construction Worker",src:a}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Plumber",src:i}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Carpenter",src:o}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Carpenter",src:o}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Plumber",src:i}),(0,l.jsx)(r.Z,{sx:{width:420,height:300},component:"img",alt:"Construction Worker",src:a})]})})}},75402:function(e,t,n){n.r(t);var r=n(68870),s=n(20890),o=n(36151),i=(n(72791),n(43032)),a=n(90668),l=n(87607),c=n(64880),d=n(80184),u={wrapper:{mt:5,p:{xs:1,md:5},display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:{xs:"wrap",md:"noWrap"}},carpenterImage:{width:420,mb:3},main:{m:{xs:0,md:2}},joinUsForFree:{fontSize:{xs:30,md:24},fontWeight:"bold",paddingBottom:"20px"},card:{display:"flex",alignItems:"center",mb:2},cardHeader:{fontSize:{xs:18,md:20},fontWeight:"bold"}};t.default=function(){var e=(0,c.k6)();return(0,d.jsxs)(r.Z,{sx:u.wrapper,children:[(0,d.jsx)(r.Z,{sx:u.carpenterImage,component:"img",src:l}),(0,d.jsxs)(r.Z,{sx:u.main,children:[(0,d.jsx)(r.Z,{children:(0,d.jsx)(s.Z,{sx:u.joinUsForFree,children:"Join us, it's free."})}),(0,d.jsxs)(r.Z,{sx:u.card,children:[i.icons.moneyOffIcon,(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(s.Z,{sx:u.cardHeader,children:"No cost to join"}),(0,d.jsx)(s.Z,{children:"Register and browse skilled workers, explore jobs and clients."})]})]}),(0,d.jsxs)(r.Z,{sx:u.card,children:[i.icons.engineeringIcon,(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(s.Z,{sx:u.cardHeader,children:"Post a job and hire skilled workers."}),(0,d.jsx)(s.Z,{children:"Finding skilled workers is easy. Post a job and choose the right person for your work!"})]})]}),(0,d.jsxs)(r.Z,{sx:u.card,children:[i.icons.workIcon,(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(s.Z,{sx:u.cardHeader,children:"Work with the best - without breaking the bank."}),(0,d.jsx)(s.Z,{children:"Handi makes it affordable to you and take advantage of low transaction rates."})]})]}),(0,d.jsx)(o.Z,{variant:"contained",sx:a.styles.customBlueButton,onClick:function(){return e.push("/register")},children:"Register for free"}),(0,d.jsx)(o.Z,{variant:"contained",sx:a.styles.customOrangeButton,onClick:function(){return e.push("/fq-question")},children:"Any Questions?"})]})]})}},91646:function(e,t,n){n.r(t);var r=n(70885),s=n(68870),o=n(13239),i=n(20890),a=n(36151),l=n(61889),c=n(72791),d=n(45305),u=n(42312),x=n(90668),f=n(64880),p=n(44281),h=n(85901),m=n(26002),j=n(25566),g=n(75402),Z=n(24219),b=n(59434),S=n(56626),C=n(89355),k=n(70653),y=n(49293),v=n(8292),T=n(33850),w=(n(87448),n(2527)),E=n(80184),W={wrapper:{mt:8},main:{height:"auto"},section1:{transition:"1s",p:{xs:"20px 10px 50px 20px",md:15,lg:20}},header:{fontSize:{xs:30,md:45,lg:55},color:"black",fontWeight:"bold"},buttonWrapper:{mt:2,display:"flex","@media(max-width: 500px)":{flexDirection:"column"}},button:{width:200,height:40,boxShadow:5,"@media(max-width: 500px)":{width:"100%"}},or:{m:"0 10px"},forSkilledWorkerWrapper:{p:1},forSkilledWorkerText:{fontSize:{xs:30,md:24},fontWeight:"bold"},contactWrapper:{p:2,mt:5},infoCardWrapper:{display:"flex",alignItems:"center"},contactIcon:{width:{xs:40,md:50},height:{xs:40,md:50},m:1},cardHeader:{fontSize:{xs:18,md:24},fontWeight:"bold",mt:2},contactLeft:{mt:{xs:5,md:1}},contactLeftHeader:{fontSize:{xs:20,md:24},fontWeight:"bold"},tellUs:{fontSize:{xs:18,md:24}}};t.default=function(){var e=(0,f.k6)(),t=(0,b.I0)(),n=c.useState(!0),_=(0,r.Z)(n,2),A=_[0],I=_[1];c.useEffect((function(){P(),O(),R(),H()}),[]);var P=function(){w.default.get("categories").then((function(e){t((0,S.setCategories)(e.data.data))})).catch((function(e){(0,v.default)("error",e.message,T.options)}))},O=function(){w.default.get("skills").then((function(e){t((0,C.setSkills)(e.data.data))})).catch((function(e){(0,v.default)("error",e.message,T.options)}))},R=function(){w.default.get("skills/children").then((function(e){t((0,C.setSkillsChildren)(e.data.data))})).catch((function(e){(0,v.default)("error",e.message,T.options)}))},H=function(){w.default.get("locations").then((function(e){t((0,k.setLocations)(e.data.data))})).catch((function(e){(0,v.default)("error",e.message,T.options)})),I(!1)};return(0,E.jsxs)(c.Fragment,{children:[(0,E.jsx)(y.default,{}),A&&(0,E.jsx)(s.Z,{sx:{mt:10,minHeight:"100vh"},align:"center",children:(0,E.jsx)(o.Z,{size:36})}),!A&&(0,E.jsxs)(s.Z,{sx:W.wrapper,children:[(0,E.jsx)(s.Z,{component:"div",className:"section section-1",sx:W.main,children:(0,E.jsxs)(s.Z,{sx:W.section1,children:[(0,E.jsxs)(i.Z,{sx:W.header,children:["Hire Skilled Workers based ",(0,E.jsx)("br",{})," on their rating and reviews"]}),(0,E.jsx)(i.Z,{children:"Explore thousands of job offers in one place and get the job of your dream"}),(0,E.jsxs)(s.Z,{sx:W.buttonWrapper,children:[(0,E.jsx)(a.Z,{fullWidth:!0,variant:"contained",sx:[x.styles.customBlueButton,W.button],onClick:function(){return e.push("/find-jobs")},children:"Find Job"}),(0,E.jsx)(i.Z,{align:"center",sx:W.or,children:"or"}),(0,E.jsx)(a.Z,{fullWidth:!0,variant:"contained",sx:[x.styles.customOrangeButton,W.button],onClick:function(){return e.push("/find-people")},children:"Hire Worker"})]})]})}),(0,E.jsx)(j.default,{}),(0,E.jsx)(g.default,{}),(0,E.jsx)(Z.default,{}),(0,E.jsxs)(s.Z,{sx:W.forSkilledWorkerWrapper,children:[(0,E.jsx)(i.Z,{sx:W.forSkilledWorkerText,children:"For skilled workers"}),(0,E.jsx)(i.Z,{children:"Discover the completed projects of our skilled workers."}),(0,E.jsx)(d.default,{})]}),(0,E.jsx)(s.Z,{sx:W.contactWrapper,children:(0,E.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,E.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(s.Z,{children:[(0,E.jsxs)(s.Z,{sx:W.infoCardWrapper,children:[(0,E.jsx)(p.Z,{sx:W.contactIcon}),(0,E.jsxs)(s.Z,{children:[(0,E.jsx)(i.Z,{sx:W.cardHeader,children:"Email us"}),(0,E.jsx)(i.Z,{children:"Our friendly team is here to help you."}),(0,E.jsx)(i.Z,{children:"handi@gmail.com"})]})]}),(0,E.jsxs)(s.Z,{sx:W.infoCardWrapper,children:[(0,E.jsx)(h.Z,{sx:W.contactIcon}),(0,E.jsxs)(s.Z,{children:[(0,E.jsx)(i.Z,{sx:W.cardHeader,children:"Visit us"}),(0,E.jsx)(i.Z,{children:"Come see hello at our office."}),(0,E.jsx)(i.Z,{children:"Brgy. Atabay Hilongos, Leyte"})]})]}),(0,E.jsxs)(s.Z,{sx:W.infoCardWrapper,children:[(0,E.jsx)(m.Z,{sx:W.contactIcon}),(0,E.jsxs)(s.Z,{children:[(0,E.jsx)(i.Z,{sx:W.cardHeader,children:"Call us"}),(0,E.jsx)(i.Z,{children:"Mon-Fri from 8am to 5pm."}),(0,E.jsx)(i.Z,{children:"(+63)905-417-0203"})]})]})]})}),(0,E.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(s.Z,{sx:W.contactLeft,children:[(0,E.jsx)(i.Z,{sx:W.contactLeftHeader,children:"Chat with us!"}),(0,E.jsx)(i.Z,{sx:W.tellUs,children:"Tell us more about yourself and what you got in mind."}),(0,E.jsx)(u.default,{})]})})]})})]})]})}},56626:function(e,t,n){n.r(t),n.d(t,{setCategories:function(){return s}});var r=n(26527),s=function(e){return{type:r.ActionTypes.SET_CATEGORIES,payload:e}}},70653:function(e,t,n){n.r(t),n.d(t,{setLocations:function(){return s}});var r=n(26527),s=function(e){return{type:r.ActionTypes.SET_LOCATIONS,payload:e}}},87448:function(e,t,n){n.r(t),n.d(t,{filterWorkers:function(){return i},setClients:function(){return o},setClientsCount:function(){return u},setSearchQuery:function(){return a},setSearchResult:function(){return l},setWorkers:function(){return s},setWorkersCount:function(){return d},updateWorker:function(){return c}});var r=n(26527),s=function(e){return{type:r.ActionTypes.SET_WORKERS,payload:e}},o=function(e){return{type:r.ActionTypes.SET_CLIENTS,payload:e}},i=function(e){return{type:r.ActionTypes.FILTER_WORKERS,payload:e}},a=function(e){return{type:r.ActionTypes.SET_SEARCH_QUERY,payload:e}},l=function(e){return{type:r.ActionTypes.SET_SEARCH_RESULT,payload:e}},c=function(e){return{type:r.ActionTypes.UPDATE_WORKER,payload:e}},d=function(e){return{type:r.ActionTypes.SET_WORKERS_COUNT,payload:e}},u=function(e){return{type:r.ActionTypes.SET_CLIENTS_COUNT,payload:e}}},89355:function(e,t,n){n.r(t),n.d(t,{setSkills:function(){return s},setSkillsChildren:function(){return o}});var r=n(26527),s=function(e){return{type:r.ActionTypes.SET_SKILLS,payload:e}},o=function(e){return{type:r.ActionTypes.SET_SKILLS_CHILDREN,payload:e}}},63845:function(e,t,n){n.r(t);var r=n(31243).Z.create();r.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,r.defaults.headers.common.Accept="application/json",r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),r.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=r},2527:function(e,t,n){n.r(t);var r=n(31243).Z.create();r.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,r.defaults.headers.common.Accept="application/json",r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Authorization="Bearer ".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_CLIENT_TOKEN),r.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("clientToken"),window.location.href="/";return Promise.reject(e)})),t.default=r},5462:function(){},87607:function(e,t,n){e.exports=n.p+"static/media/carpenter.d17dc45fee47fbf23b25.jpg"},90629:function(e,t,n){e.exports=n.p+"static/media/client-finding.f23567fd4afd5ab8e340.jpg"},36531:function(e,t,n){e.exports=n.p+"static/media/uploaded-dummy-1.885777ef27ca16005a07.jpg"},5854:function(e,t,n){e.exports=n.p+"static/media/uploaded-dummy-2.8fcfc7f5f84298a32b41.jpg"},56442:function(e,t,n){e.exports=n.p+"static/media/uploaded-dummy-3.64ea79a55079b3d98ade.jpg"}}]);
//# sourceMappingURL=899.a9c96214.chunk.js.map