"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[6245,2527],{66245:function(e,t,n){n.r(t),n.d(t,{clientRegister:function(){return o},registerOnApply:function(){return u},workerRegister:function(){return s}});var r=n(2527),s=function(e,t,n){return r.default.post("/join-us/".concat(e),{formValues:t.values,expertise:n.values})},o=function(e,t){return r.default.post("/join-us/".concat(e),t.values)},u=function(e,t){return r.default.post("/apply/register",{formValues:e.values,expertise:t.values})}},2527:function(e,t,n){n.r(t);var r=n(31243).Z.create();r.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",r.defaults.headers.common.Accept="application/json",r.defaults.headers.common["Content-Type"]="application/json",r.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))window.location.href="/";return Promise.reject(e)})),t.default=r}}]);
//# sourceMappingURL=6245.4a7e9ad2.chunk.js.map