"use strict";(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[2527],{2527:function(e,o,t){t.r(o);var n=t(31243).Z.create();n.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_DOMAIN,n.defaults.headers.common.Accept="application/json",n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("clientToken")),n.interceptors.response.use((function(e){return e}),(function(e){if("Network Error"===e.message)return Promise.reject(e);if(401===(e.response&&e.response.status))localStorage.removeItem("clientToken"),window.location.href="/";return Promise.reject(e)})),o.default=n}}]);
//# sourceMappingURL=2527.169680b8.chunk.js.map