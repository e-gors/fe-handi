"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[2527],{2527:function(e,t,o){o.r(t);var n=o(31243).Z.create();n.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("clientToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("clientToken"),window.location.href="/";return Promise.reject(e)})),t.default=n}}]);
//# sourceMappingURL=2527.7ad7c1d8.chunk.js.map