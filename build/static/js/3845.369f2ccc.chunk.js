"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[3845],{63845:function(e,t,o){o.r(t);var n=o(31243).Z.create();n.defaults.baseURL="http://127.0.0.1:8000/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),t.default=n}}]);
//# sourceMappingURL=3845.369f2ccc.chunk.js.map