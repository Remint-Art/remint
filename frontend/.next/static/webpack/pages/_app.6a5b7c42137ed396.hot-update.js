"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/providers/public/dist/wagmi-providers-public.esm.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\n\n\n//wagmi.\n\n\n//rainbow kit UI framework.\n\n\nvar remintChain = {\n    id: 155,\n    name: \"Remint\",\n    network: \"Ethereum\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: \"http://10.1.0.153:8545\"\n    },\n    // blockExplorers: {\n    //   default: { name: 'SnowTrace', url: 'https://snowtrace.io' },\n    // },\n    testnet: true\n};\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    chains.mainnet,\n    remintChain\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar client = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQy9CLFFBQVE7QUFNTztBQUN5QztBQUN4RCwyQkFBMkI7QUFDZ0I7QUFDb0M7QUFFL0UsSUFBTU8sV0FBVyxHQUFHO0lBQ2xCQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxJQUFJLEVBQUUsUUFBUTtJQUNkQyxPQUFPLEVBQUUsVUFBVTtJQUNuQkMsY0FBYyxFQUFFO1FBQ2RDLFFBQVEsRUFBRSxFQUFFO1FBQ1pILElBQUksRUFBRSxVQUFVO1FBQ2hCSSxNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUUsd0JBQXdCO0tBQ2xDO0lBQ0Qsb0JBQW9CO0lBQ3BCLGlFQUFpRTtJQUNqRSxLQUFLO0lBQ0xDLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7QUFDRCxJQUE2QmQsR0FHNUIsR0FINEJBLHNEQUFlLENBQzFDO0lBQUNlLE1BQU0sQ0FBQ0MsT0FBTztJQUFFWCxXQUFXO0NBQUMsRUFDN0I7SUFBQ0gsc0VBQWMsRUFBRTtDQUFDLENBQ25CLEVBSE9hLE1BQU0sR0FBZWYsR0FHNUIsQ0FIT2UsTUFBTSxFQUFFRSxRQUFRLEdBQUtqQixHQUc1QixDQUhlaUIsUUFBUTtBQUt4QixJQUFNLFVBQVksR0FBS2QseUVBQWlCLENBQUM7SUFDdkNnQixPQUFPLEVBQUUsbUJBQW1CO0lBQzVCSixNQUFNLEVBQU5BLE1BQU07Q0FDUCxDQUFDLENBSE1HLFVBQVU7QUFLbEIsSUFBTUUsTUFBTSxHQUFHckIsbURBQVksQ0FBQztJQUMxQnNCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVLEVBQVZBLFVBQVU7SUFDVkQsUUFBUSxFQUFSQSxRQUFRO0NBQ1QsQ0FBQztBQUVGLFNBQVNLLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLHFCQUNFLDhEQUFDMUIsOENBQVc7UUFBQ3NCLE1BQU0sRUFBRUEsTUFBTTtrQkFDekIsNEVBQUNoQixzRUFBa0I7WUFBQ1csTUFBTSxFQUFFQSxNQUFNO3NCQUNoQyw0RUFBQ1EsU0FBUyxxRkFBS0MsU0FBUzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBUlFGLEtBQUFBLEtBQUs7QUFVZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG4vL3dhZ21pLlxuaW1wb3J0IHtcbiAgV2FnbWlDb25maWcsXG4gIGNyZWF0ZUNsaWVudCxcbiAgY29uZmlndXJlQ2hhaW5zLFxuICBkZWZhdWx0Q2hhaW5zLFxufSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xuLy9yYWluYm93IGtpdCBVSSBmcmFtZXdvcmsuXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5cbmNvbnN0IHJlbWludENoYWluID0ge1xuICBpZDogMTU1LFxuICBuYW1lOiAnUmVtaW50JyxcbiAgbmV0d29yazogJ0V0aGVyZXVtJyxcbiAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICBkZWNpbWFsczogMTgsXG4gICAgbmFtZTogJ0V0aGVyZXVtJyxcbiAgICBzeW1ib2w6ICdFVEgnLFxuICB9LFxuICBycGNVcmxzOiB7XG4gICAgZGVmYXVsdDogJ2h0dHA6Ly8xMC4xLjAuMTUzOjg1NDUnLFxuICB9LFxuICAvLyBibG9ja0V4cGxvcmVyczoge1xuICAvLyAgIGRlZmF1bHQ6IHsgbmFtZTogJ1Nub3dUcmFjZScsIHVybDogJ2h0dHBzOi8vc25vd3RyYWNlLmlvJyB9LFxuICAvLyB9LFxuICB0ZXN0bmV0OiB0cnVlLFxufTtcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW5zLm1haW5uZXQsIHJlbWludENoYWluXSxcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ015IFJhaW5ib3dLaXQgQXBwJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIldhZ21pQ29uZmlnIiwiY3JlYXRlQ2xpZW50IiwiY29uZmlndXJlQ2hhaW5zIiwiZGVmYXVsdENoYWlucyIsInB1YmxpY1Byb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJyZW1pbnRDaGFpbiIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwicnBjVXJscyIsImRlZmF1bHQiLCJ0ZXN0bmV0IiwiY2hhaW5zIiwibWFpbm5ldCIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJjbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});