"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[3845],{63845:function(e,o,t){t.r(o);var r=t(31243).Z.create();r.defaults.baseURL="https://api-handiworks.technopreneurship.store/api",r.defaults.headers.common.Accept="application/json",r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),r.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("accessToken"),window.location.href="/login";return Promise.reject(e)})),o.default=r}}]);
//# sourceMappingURL=3845.820c7d8d.chunk.js.map