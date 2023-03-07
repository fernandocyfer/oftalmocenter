"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/medicosk";
exports.ids = ["pages/medicosk"];
exports.modules = {

/***/ "./pages/medicosk.jsx":
/*!****************************!*\
  !*** ./pages/medicosk.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);\nisomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Medicos = ()=>{\n    const { 0: medicos , 1: setMedicos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMedicos = async ()=>{\n            const response = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://docs.americasoftalmocenter.com/rotas/medicos\", {\n                headers: {\n                    Authorization: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF0aGV1cyBTYW50b3MiLCJlbWFpbCI6Im1zYW50b3NAYW1lcmljYXNvZnRhbG1vY2VudGVyLmNvbSIsImlhdCI6MTY3Mzk5NzI0NywiZXhwIjoxNjc2NTg5MjQ3LCJzdWIiOiIyYTkyMT\"\n                }\n            });\n            const data = await response.json();\n            setMedicos(data);\n        };\n        fetchMedicos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Medicos\"\n            }, void 0, false, {\n                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: medicos.map((medico)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: medico.name\n                            }, void 0, false, {\n                                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: medico.especialidadeonmedico\n                            }, void 0, false, {\n                                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, medico.id, true, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicosk.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medicos);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWRpY29zay5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDTDtBQUV2QyxNQUFNRyxPQUFPLEdBQUcsSUFBTTtJQUNwQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUUxQ0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssWUFBWSxHQUFHLFVBQVk7WUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1MLDhEQUFLLENBQUMsc0RBQXNELEVBQUU7Z0JBQ25GTSxPQUFPLEVBQUU7b0JBQ1BDLGFBQWEsRUFBRSxpTUFBaU07aUJBQ2pOO2FBQ0YsQ0FBQztZQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtZQUNsQ04sVUFBVSxDQUFDSyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0RKLFlBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDTSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxTQUFPOzs7Ozt5QkFBSzswQkFDaEIsOERBQUNDLElBQUU7MEJBQ0FWLE9BQU8sQ0FBQ1csR0FBRyxDQUFDQyxDQUFBQSxNQUFNLGlCQUNqQiw4REFBQ0MsSUFBRTs7MENBQ0QsOERBQUNDLEdBQUM7MENBQUVGLE1BQU0sQ0FBQ0csSUFBSTs7Ozs7eUNBQUs7MENBQ3BCLDhEQUFDRCxHQUFDOzBDQUFFRixNQUFNLENBQUNJLHFCQUFxQjs7Ozs7eUNBQUs7O3VCQUY5QkosTUFBTSxDQUFDSyxFQUFFOzs7O2lDQUdiLENBQ0w7Ozs7O3lCQUNDOzs7Ozs7aUJBQ0QsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2V0Ly4vcGFnZXMvbWVkaWNvc2suanN4Pzc3NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBNZWRpY29zID0gKCkgPT4ge1xuICBjb25zdCBbbWVkaWNvcywgc2V0TWVkaWNvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1lZGljb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RvY3MuYW1lcmljYXNvZnRhbG1vY2VudGVyLmNvbS9yb3Rhcy9tZWRpY29zJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp1WVcxbElqb2lUV0YwYUdWMWN5QlRZVzUwYjNNaUxDSmxiV0ZwYkNJNkltMXpZVzUwYjNOQVlXMWxjbWxqWVhOdlpuUmhiRzF2WTJWdWRHVnlMbU52YlNJc0ltbGhkQ0k2TVRZM016azVOekkwTnl3aVpYaHdJam94TmpjMk5UZzVNalEzTENKemRXSWlPaUl5WVRreU1UJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRNZWRpY29zKGRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hNZWRpY29zKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TWVkaWNvczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHttZWRpY29zLm1hcChtZWRpY28gPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e21lZGljby5pZH0+XG4gICAgICAgICAgICA8cD57bWVkaWNvLm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+e21lZGljby5lc3BlY2lhbGlkYWRlb25tZWRpY299PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGljb3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIk1lZGljb3MiLCJtZWRpY29zIiwic2V0TWVkaWNvcyIsImZldGNoTWVkaWNvcyIsInJlc3BvbnNlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwianNvbiIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJtZWRpY28iLCJsaSIsInAiLCJuYW1lIiwiZXNwZWNpYWxpZGFkZW9ubWVkaWNvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/medicosk.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/medicosk.jsx"));
module.exports = __webpack_exports__;

})();