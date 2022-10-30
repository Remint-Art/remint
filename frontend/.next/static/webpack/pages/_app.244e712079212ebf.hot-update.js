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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/providers/public/dist/wagmi-providers-public.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\n\n\n\n//wagmi.\n\n\n\n\n\n\nvar remintChain = {\n    id: 155,\n    name: \"Remint\",\n    network: \"Ethereum\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: \"http://10.1.0.153:8545\"\n    },\n    testnet: true\n};\nvar defaultConfig = {\n    readOnlyUrls: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, remintChain.id, (0,ethers__WEBPACK_IMPORTED_MODULE_5__.getDefaultProvider)())\n};\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.configureChains)([\n    remintChain\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar client = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_usedapp_core__WEBPACK_IMPORTED_MODULE_8__.DAppProvider, {\n        config: defaultConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n                chains: chains,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUMvQixRQUFRO0FBTU87QUFDeUM7QUFDWjtBQUNtQztBQUVwQztBQUNvQztBQUMvRSxJQUFNWSxXQUFXLEdBQUc7SUFDbEJDLEVBQUUsRUFBRSxHQUFHO0lBQ1BDLElBQUksRUFBRSxRQUFRO0lBQ2RDLE9BQU8sRUFBRSxVQUFVO0lBQ25CQyxjQUFjLEVBQUU7UUFDZEMsUUFBUSxFQUFFLEVBQUU7UUFDWkgsSUFBSSxFQUFFLFVBQVU7UUFDaEJJLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRSx3QkFBd0I7S0FDbEM7SUFDREMsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUVELElBQU1DLGFBQWEsR0FBRztJQUNwQkMsWUFBWSxFQUFJLHFGQUFDWCxXQUFXLENBQUNDLEVBQUUsRUFBR1IsMERBQWtCLEVBQUU7Q0FDdkQ7QUFDRCxJQUE2QkgsR0FBa0QsR0FBbERBLHNEQUFlLENBQUM7SUFBQ1UsV0FBVztDQUFDLEVBQUU7SUFBQ1Isc0VBQWMsRUFBRTtDQUFDLENBQUMsRUFBdkVvQixNQUFNLEdBQWV0QixHQUFrRCxDQUF2RXNCLE1BQU0sRUFBRUMsUUFBUSxHQUFLdkIsR0FBa0QsQ0FBL0R1QixRQUFRO0FBRXhCLElBQU0sVUFBWSxHQUFLZix5RUFBaUIsQ0FBQztJQUN2Q2lCLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJILE1BQU0sRUFBTkEsTUFBTTtDQUNQLENBQUMsQ0FITUUsVUFBVTtBQUtsQixJQUFNRSxNQUFNLEdBQUczQixtREFBWSxDQUFDO0lBQzFCNEIsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVUsRUFBVkEsVUFBVTtJQUNWRCxRQUFRLEVBQVJBLFFBQVE7Q0FDVCxDQUFDO0FBRUYsU0FBU0ssS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDbkMscUJBQ0UsOERBQUMxQix1REFBWTtRQUFDMkIsTUFBTSxFQUFFWCxhQUFhO2tCQUNqQyw0RUFBQ3RCLDhDQUFXO1lBQUM0QixNQUFNLEVBQUVBLE1BQU07c0JBQ3pCLDRFQUFDakIsc0VBQWtCO2dCQUFDYSxNQUFNLEVBQUVBLE1BQU07MEJBQ2hDLDRFQUFDTyxTQUFTLHFGQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDVDs7Ozs7Z0JBQ1Q7Ozs7O1lBQ0QsQ0FDZjtDQUNIO0FBVlFGLEtBQUFBLEtBQUs7QUFZZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG4vL3dhZ21pLlxuaW1wb3J0IHtcbiAgV2FnbWlDb25maWcsXG4gIGNyZWF0ZUNsaWVudCxcbiAgY29uZmlndXJlQ2hhaW5zLFxuICBkZWZhdWx0Q2hhaW5zLFxufSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFByb3ZpZGVyIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IERBcHBQcm92aWRlciwgR29lcmxpLCBNYWlubmV0LCB1c2VVcGRhdGVDb25maWcgfSBmcm9tICdAdXNlZGFwcC9jb3JlJztcblxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuY29uc3QgcmVtaW50Q2hhaW4gPSB7XG4gIGlkOiAxNTUsXG4gIG5hbWU6ICdSZW1pbnQnLFxuICBuZXR3b3JrOiAnRXRoZXJldW0nLFxuICBuYXRpdmVDdXJyZW5jeToge1xuICAgIGRlY2ltYWxzOiAxOCxcbiAgICBuYW1lOiAnRXRoZXJldW0nLFxuICAgIHN5bWJvbDogJ0VUSCcsXG4gIH0sXG4gIHJwY1VybHM6IHtcbiAgICBkZWZhdWx0OiAnaHR0cDovLzEwLjEuMC4xNTM6ODU0NScsXG4gIH0sXG4gIHRlc3RuZXQ6IHRydWUsXG59O1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICByZWFkT25seVVybHM6IHsgW3JlbWludENoYWluLmlkXTogZ2V0RGVmYXVsdFByb3ZpZGVyKCkgfSxcbn07XG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhbcmVtaW50Q2hhaW5dLCBbcHVibGljUHJvdmlkZXIoKV0pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ015IFJhaW5ib3dLaXQgQXBwJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8REFwcFByb3ZpZGVyIGNvbmZpZz17ZGVmYXVsdENvbmZpZ30+XG4gICAgICA8V2FnbWlDb25maWcgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICA8L0RBcHBQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiV2FnbWlDb25maWciLCJjcmVhdGVDbGllbnQiLCJjb25maWd1cmVDaGFpbnMiLCJkZWZhdWx0Q2hhaW5zIiwicHVibGljUHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJEQXBwUHJvdmlkZXIiLCJHb2VybGkiLCJNYWlubmV0IiwidXNlVXBkYXRlQ29uZmlnIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJyZW1pbnRDaGFpbiIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwicnBjVXJscyIsImRlZmF1bHQiLCJ0ZXN0bmV0IiwiZGVmYXVsdENvbmZpZyIsInJlYWRPbmx5VXJscyIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJjbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});