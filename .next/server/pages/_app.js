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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygonMumbai\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        apiKey: \"lXW82FBYP3fqap6eD-6Hq2xs7D9sLEqt\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.darkTheme)({\n                accentColor: \"#6d454c\",\n                accentColorForeground: \"white\",\n                modalBackground: \"#D9d9d9\",\n                borderRadius: \"small\",\n                fontStack: \"system\",\n                overlayBlur: \"small\"\n            }),\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/pages/_app.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_6__.Analytics, {}, void 0, false, {\n                    fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/pages/_app.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/pages/_app.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/pages/_app.js\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUtFO0FBTWpCO0FBQzJDO0FBQ0Y7QUFDSjtBQUVwRCxNQUFNLEVBQUVVLE9BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdQLHNEQUFlQSxDQUMxQztJQUFDRCxnREFBYTtJQUFFQSwrQ0FBWTtJQUFFQSxnREFBYTtJQUFFQSxzREFBbUI7Q0FBQyxFQUNqRTtJQUNFSSx3RUFBZUEsQ0FBQztRQUFFUyxRQUFRQyxrQ0FBbUI7SUFBQztJQUM5Q1Qsc0VBQWNBO0NBQ2Y7QUFHSCxNQUFNLEVBQUVZLFdBQVUsRUFBRSxHQUFHcEIseUVBQWlCQSxDQUFDO0lBQ3ZDcUIsU0FBUztJQUNUWDtBQUNGO0FBRUEsTUFBTVksY0FBY2pCLG1EQUFZQSxDQUFDO0lBQy9Ca0IsYUFBYSxJQUFJO0lBQ2pCSDtJQUNBVDtBQUNGO0FBRUEsU0FBU2EsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBRXZDLHFCQUNBLDhEQUFDcEIsOENBQVdBO1FBQUNxQixRQUFRTDtrQkFDbkIsNEVBQUNyQixzRUFBa0JBO1lBQUMyQixPQUFPMUIsaUVBQVNBLENBQUM7Z0JBQ25DMkIsYUFBYTtnQkFDYkMsdUJBQXVCO2dCQUN2QkMsaUJBQWdCO2dCQUNoQkMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsYUFBYTtZQUNmO1lBQ0F4QixRQUFRQTs7OEJBQ04sOERBQUNlO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs4QkFDeEIsOERBQUNqQiw4REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7QUFFQSxpRUFBZWUsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LW1pbnRlci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7XG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIGRhcmtUaGVtZVxufSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7XG4gIGNoYWluLFxuICBjb25maWd1cmVDaGFpbnMsXG4gIGNyZWF0ZUNsaWVudCxcbiAgV2FnbWlDb25maWcsXG59IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tICdAdmVyY2VsL2FuYWx5dGljcy9yZWFjdCc7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4uZ29lcmxpLCBjaGFpbi5wb2x5Z29uLCBjaGFpbi5wb2x5Z29uTXVtYmFpXSxcbiAgW1xuICAgIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWSB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxuICBjaGFpbnNcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlclxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgcmV0dXJuIChcbiAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e2RhcmtUaGVtZSh7XG4gICAgICBhY2NlbnRDb2xvcjogJyM2ZDQ1NGMnLFxuICAgICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgbW9kYWxCYWNrZ3JvdW5kOlwiI0Q5ZDlkOVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnc21hbGwnLFxuICAgICAgZm9udFN0YWNrOiAnc3lzdGVtJyxcbiAgICAgIG92ZXJsYXlCbHVyOiAnc21hbGwnLFxuICAgIH0pfVxuICAgIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxBbmFseXRpY3MgLz5cbiAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgPC9XYWdtaUNvbmZpZz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiQW5hbHl0aWNzIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJtYWlubmV0IiwiZ29lcmxpIiwicG9seWdvbiIsInBvbHlnb25NdW1iYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIm1vZGFsQmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImZvbnRTdGFjayIsIm92ZXJsYXlCbHVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();