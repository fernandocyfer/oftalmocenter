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
exports.id = "pages/medicos";
exports.ids = ["pages/medicos"];
exports.modules = {

/***/ "./pages/medicos.jsx":
/*!***************************!*\
  !*** ./pages/medicos.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MedicoList({ medicos  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Lista de M\\xe9dicos\"\n            }, void 0, false, {\n                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: medicos.map((medico)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: medico.nome\n                            }, void 0, false, {\n                                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: medico.crm\n                            }, void 0, false, {\n                                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: medico.especialidade\n                            }, void 0, false, {\n                                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, medico.id, true, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    const login = \"seu_login\";\n    const senha = \"sua_senha\";\n    const token = \"seu_token\";\n    const response = await fetch(\"https://onboarding-b.herokuapp.com/v2/medico\", {\n        headers: {\n            \"Authorization\": `Bearer ${token}`,\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            \"X-User-Email\": login,\n            \"X-User-Token\": senha\n        }\n    });\n    const medicos = await response.json();\n    return {\n        props: {\n            medicos\n        }\n    };\n}\nfunction MedicoPage({ medicos  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MedicoList, {\n        medicos: medicos\n    }, void 0, false, {\n        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/medicos.jsx\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MedicoPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWRpY29zLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QztBQUU1QyxTQUFTRSxVQUFVLENBQUMsRUFBRUMsT0FBTyxHQUFFLEVBQUU7SUFDL0IscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFnQjs7Ozs7b0JBQUs7MEJBQ3pCLDhEQUFDQyxJQUFFOzBCQUNBSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLGlCQUNsQiw4REFBQ0MsSUFBRTs7MENBQ0QsOERBQUNDLEdBQUM7MENBQUVGLE1BQU0sQ0FBQ0csSUFBSTs7Ozs7b0NBQUs7MENBQ3BCLDhEQUFDRCxHQUFDOzBDQUFFRixNQUFNLENBQUNJLEdBQUc7Ozs7O29DQUFLOzBDQUNuQiw4REFBQ0YsR0FBQzswQ0FBRUYsTUFBTSxDQUFDSyxhQUFhOzs7OztvQ0FBSzs7dUJBSHRCTCxNQUFNLENBQUNNLEVBQUU7Ozs7NEJBSWIsQ0FDTDs7Ozs7b0JBQ0M7Ozs7OztZQUNELENBQ047QUFDSixDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLEdBQUc7SUFDekMsTUFBTUMsS0FBSyxHQUFHLFdBQVc7SUFDekIsTUFBTUMsS0FBSyxHQUFHLFdBQVc7SUFDekIsTUFBTUMsS0FBSyxHQUFHLFdBQVc7SUFFekIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4Q0FBOEMsRUFBRTtRQUMzRUMsT0FBTyxFQUFFO1lBQ1AsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFSCxLQUFLLENBQUMsQ0FBQztZQUNsQyxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsY0FBYyxFQUFFRixLQUFLO1lBQ3JCLGNBQWMsRUFBRUMsS0FBSztTQUN0QjtLQUNGLENBQUM7SUFFRixNQUFNZCxPQUFPLEdBQUcsTUFBTWdCLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRXJDLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQUVwQixPQUFPO1NBQUU7S0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTcUIsVUFBVSxDQUFDLEVBQUVyQixPQUFPLEdBQUUsRUFBRTtJQUMvQixxQkFBTyw4REFBQ0QsVUFBVTtRQUFDQyxPQUFPLEVBQUVBLE9BQU87Ozs7O1lBQUksQ0FBQztBQUMxQyxDQUFDO0FBRUQsaUVBQWVxQixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NldC8uL3BhZ2VzL21lZGljb3MuanN4P2M4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTWVkaWNvTGlzdCh7IG1lZGljb3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TGlzdGEgZGUgTcOpZGljb3M8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7bWVkaWNvcy5tYXAoKG1lZGljbykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e21lZGljby5pZH0+XG4gICAgICAgICAgICA8cD57bWVkaWNvLm5vbWV9PC9wPlxuICAgICAgICAgICAgPHA+e21lZGljby5jcm19PC9wPlxuICAgICAgICAgICAgPHA+e21lZGljby5lc3BlY2lhbGlkYWRlfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGxvZ2luID0gJ3NldV9sb2dpbic7XG4gIGNvbnN0IHNlbmhhID0gJ3N1YV9zZW5oYSc7XG4gIGNvbnN0IHRva2VuID0gJ3NldV90b2tlbic7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vbmJvYXJkaW5nLWIuaGVyb2t1YXBwLmNvbS92Mi9tZWRpY28nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ1gtVXNlci1FbWFpbCc6IGxvZ2luLFxuICAgICAgJ1gtVXNlci1Ub2tlbic6IHNlbmhhLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IG1lZGljb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBtZWRpY29zIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIE1lZGljb1BhZ2UoeyBtZWRpY29zIH0pIHtcbiAgcmV0dXJuIDxNZWRpY29MaXN0IG1lZGljb3M9e21lZGljb3N9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpY29QYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVkaWNvTGlzdCIsIm1lZGljb3MiLCJkaXYiLCJoMiIsInVsIiwibWFwIiwibWVkaWNvIiwibGkiLCJwIiwibm9tZSIsImNybSIsImVzcGVjaWFsaWRhZGUiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImxvZ2luIiwic2VuaGEiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwianNvbiIsInByb3BzIiwiTWVkaWNvUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/medicos.jsx\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/medicos.jsx"));
module.exports = __webpack_exports__;

})();