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
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ \"react-html-parser\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Blog({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.uagb_featured_image_src.full[0],\n                        alt: post.title.rendered,\n                        style: {\n                            width: \"383px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.categories[\"0\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.title.rendered\n                    }, void 0, false, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.date).format(\"DD/MM/YYYY\")\n                    }, void 0, false, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(post.excerpt.rendered.slice(0, 200)),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: post.link,\n                        children: \"Leia mais\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, post.id, true, {\n                fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/fernandofilho/Documents/Netlinks/oftalmocenter/pages/blog.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://americasoftalmocenter.com/wp-json/wp/v2/posts?per_page=2&?_embed\");\n    const posts = response.data;\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRTtBQUNGO0FBQ3NCO0FBRWhELFNBQVNJLElBQUksQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUN2QixxQkFDRSw4REFBQ0MsS0FBRztrQkFDREQsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDZCw4REFBQ0YsS0FBRzs7a0NBQ0YsOERBQUNHLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsUUFBUTt3QkFBRUMsS0FBSyxFQUFFOzRCQUFDQyxLQUFLLEVBQUMsT0FBTzt5QkFBQzs7Ozs7NEJBQUk7a0NBQ3BHLDhEQUFDQyxHQUFDO2tDQUFFVixJQUFJLENBQUNXLFVBQVUsQ0FBQyxHQUFHLENBQUM7Ozs7OzRCQUFLO2tDQUM3Qiw4REFBQ0MsSUFBRTtrQ0FBRVosSUFBSSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7Ozs7OzRCQUFNO2tDQUM5Qiw4REFBQ0csR0FBQztrQ0FBRWpCLDZDQUFNLENBQUNPLElBQUksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Ozs7OzRCQUFLO2tDQUMvQyw4REFBQ0osR0FBQzs7NEJBQUVmLHdEQUFlLENBQUNLLElBQUksQ0FBQ2UsT0FBTyxDQUFDUixRQUFRLENBQUNTLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQUMsS0FBRzs7Ozs7OzRCQUFJO2tDQUNoRSw4REFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFFbEIsSUFBSSxDQUFDbUIsSUFBSTtrQ0FBRSxXQUFTOzs7Ozs0QkFBSTs7ZUFOekJuQixJQUFJLENBQUNvQixFQUFFOzs7O29CQU9YLENBQ047Ozs7O1lBQ0UsQ0FDTjtBQUNKLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDckMsTUFBTUMsUUFBUSxHQUFHLE1BQU05QixpREFBUyxDQUM5QiwwRUFBMEUsQ0FDM0U7SUFDRCxNQUFNSyxLQUFLLEdBQUd5QixRQUFRLENBQUNFLElBQUk7SUFDM0IsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDVCLEtBQUs7U0FDTjtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2V0Ly4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcblxuZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPGltZyBzcmM9e3Bvc3QudWFnYl9mZWF0dXJlZF9pbWFnZV9zcmMuZnVsbFswXX0gYWx0PXtwb3N0LnRpdGxlLnJlbmRlcmVkfSBzdHlsZT17e3dpZHRoOiczODNweCd9fSAvPlxuICAgICAgICAgIDxwPntwb3N0LmNhdGVnb3JpZXNbXCIwXCJdfTwvcD5cbiAgICAgICAgICA8aDI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgICAgICA8cD57bW9tZW50KHBvc3QuZGF0ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX08L3A+XG4gICAgICAgICAgPHA+e1JlYWN0SHRtbFBhcnNlcihwb3N0LmV4Y2VycHQucmVuZGVyZWQuc2xpY2UoMCwgMjAwKSl9Li4uPC9wPlxuICAgICAgICAgIDxhIGhyZWY9e3Bvc3QubGlua30+TGVpYSBtYWlzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIFwiaHR0cHM6Ly9hbWVyaWNhc29mdGFsbW9jZW50ZXIuY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/cGVyX3BhZ2U9MiY/X2VtYmVkXCJcbiAgKTtcbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwibW9tZW50IiwiUmVhY3QiLCJSZWFjdEh0bWxQYXJzZXIiLCJCbG9nIiwicG9zdHMiLCJkaXYiLCJtYXAiLCJwb3N0IiwiaW1nIiwic3JjIiwidWFnYl9mZWF0dXJlZF9pbWFnZV9zcmMiLCJmdWxsIiwiYWx0IiwidGl0bGUiLCJyZW5kZXJlZCIsInN0eWxlIiwid2lkdGgiLCJwIiwiY2F0ZWdvcmllcyIsImgyIiwiZGF0ZSIsImZvcm1hdCIsImV4Y2VycHQiLCJzbGljZSIsImEiLCJocmVmIiwibGluayIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog.js"));
module.exports = __webpack_exports__;

})();