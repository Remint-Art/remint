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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/providers/public/dist/wagmi-providers-public.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var _hooks_useIsClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useIsClient */ \"./hooks/useIsClient.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/providers */ \"./node_modules/@ethersproject/providers/lib.esm/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n//wagmi.\n\n\n\n\n\n\n\n\n\nvar remintChain = {\n    id: 155,\n    name: \"Remint\",\n    network: \"Ethereum\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: \"http://10.1.0.153:8545\"\n    },\n    testnet: true\n};\nvar defaultConfig = {\n    readOnlyUrls: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, remintChain.id, (0,ethers__WEBPACK_IMPORTED_MODULE_7__.getDefaultProvider)())\n};\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.configureChains)([\n    remintChain\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar client = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nvar buildChainConfig = function(chain) {\n    return {\n        networks: [\n            chain\n        ],\n        readOnlyChainId: chain.chainId,\n        readOnlyUrls: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, chain.chainId, new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_10__.JsonRpcProvider(chain.rpcUrls) || (0,ethers__WEBPACK_IMPORTED_MODULE_7__.getDefaultProvider)(chain.id))\n    };\n};\nvar configBuilder = function() {\n    return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, buildChainConfig(remintChain)), {\n        multicallVersion: 2,\n        fastMulticallEncoding: true\n    });\n};\nvar DAppConfigUpdater = function(param) {\n    var children = param.children;\n    _s();\n    var isClient = (0,_hooks_useIsClient__WEBPACK_IMPORTED_MODULE_3__.useIsClient)();\n    var updateConfig = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_13__.useUpdateConfig)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        isClient && updateConfig(configBuilder());\n    }, [\n        isClient,\n        updateConfig\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(DAppConfigUpdater, \"/amjEb17HkoBsL6a3pAYhpN80ag=\", false, function() {\n    return [\n        _hooks_useIsClient__WEBPACK_IMPORTED_MODULE_3__.useIsClient,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_13__.useUpdateConfig\n    ];\n});\n_c = DAppConfigUpdater;\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_usedapp_core__WEBPACK_IMPORTED_MODULE_13__.DAppProvider, {\n        config: defaultConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DAppConfigUpdater, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.RainbowKitProvider, {\n                    chains: chains,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"DAppConfigUpdater\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBa0I7b0JBQUNnQixNQUFNLEVBQUVBLE1BQU07OEJBQ2hDLDRFQUFDbUIsU0FBUyxzRkFBS0MsU0FBUzs7Ozs0QkFBSTs7Ozs7d0JBQ1Q7Ozs7O29CQUNUOzs7OztnQkFDSTs7Ozs7WUFDUCxDQUNmO0NBQ0g7QUFaUUYsTUFBQUEsS0FBSztBQWNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbi8vd2FnbWkuXG5pbXBvcnQge1xuICBXYWdtaUNvbmZpZyxcbiAgY3JlYXRlQ2xpZW50LFxuICBjb25maWd1cmVDaGFpbnMsXG4gIGRlZmF1bHRDaGFpbnMsXG59IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0UHJvdmlkZXIgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgREFwcFByb3ZpZGVyLCB1c2VVcGRhdGVDb25maWcgfSBmcm9tICdAdXNlZGFwcC9jb3JlJztcbmltcG9ydCB7IHVzZUlzQ2xpZW50IH0gZnJvbSAnLi4vaG9va3MvdXNlSXNDbGllbnQnO1xuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxjaGVteVByb3ZpZGVyLCBKc29uUnBjUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnO1xuXG5jb25zdCByZW1pbnRDaGFpbiA9IHtcbiAgaWQ6IDE1NSxcbiAgbmFtZTogJ1JlbWludCcsXG4gIG5ldHdvcms6ICdFdGhlcmV1bScsXG4gIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgZGVjaW1hbHM6IDE4LFxuICAgIG5hbWU6ICdFdGhlcmV1bScsXG4gICAgc3ltYm9sOiAnRVRIJyxcbiAgfSxcbiAgcnBjVXJsczoge1xuICAgIGRlZmF1bHQ6ICdodHRwOi8vMTAuMS4wLjE1Mzo4NTQ1JyxcbiAgfSxcbiAgdGVzdG5ldDogdHJ1ZSxcbn07XG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gIHJlYWRPbmx5VXJsczogeyBbcmVtaW50Q2hhaW4uaWRdOiBnZXREZWZhdWx0UHJvdmlkZXIoKSB9LFxufTtcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFtyZW1pbnRDaGFpbl0sIFtwdWJsaWNQcm92aWRlcigpXSk7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSk7XG5cbmNvbnN0IGJ1aWxkQ2hhaW5Db25maWcgPSAoY2hhaW4pID0+ICh7XG4gIG5ldHdvcmtzOiBbY2hhaW5dLFxuICByZWFkT25seUNoYWluSWQ6IGNoYWluLmNoYWluSWQsXG4gIHJlYWRPbmx5VXJsczoge1xuICAgIFtjaGFpbi5jaGFpbklkXTpcbiAgICAgIG5ldyBKc29uUnBjUHJvdmlkZXIoY2hhaW4ucnBjVXJscykgfHwgZ2V0RGVmYXVsdFByb3ZpZGVyKGNoYWluLmlkKSxcbiAgfSxcbn0pO1xuY29uc3QgY29uZmlnQnVpbGRlciA9ICgpID0+ICh7XG4gIC4uLmJ1aWxkQ2hhaW5Db25maWcocmVtaW50Q2hhaW4pLFxuICBtdWx0aWNhbGxWZXJzaW9uOiAyLFxuICBmYXN0TXVsdGljYWxsRW5jb2Rpbmc6IHRydWUsXG59KTtcblxuY29uc3QgREFwcENvbmZpZ1VwZGF0ZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGlzQ2xpZW50ID0gdXNlSXNDbGllbnQoKTtcbiAgY29uc3QgdXBkYXRlQ29uZmlnID0gdXNlVXBkYXRlQ29uZmlnKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0NsaWVudCAmJiB1cGRhdGVDb25maWcoY29uZmlnQnVpbGRlcigpKTtcbiAgfSwgW2lzQ2xpZW50LCB1cGRhdGVDb25maWddKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxEQXBwUHJvdmlkZXIgY29uZmlnPXtkZWZhdWx0Q29uZmlnfT5cbiAgICAgIDxEQXBwQ29uZmlnVXBkYXRlcj5cbiAgICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgIDwvREFwcENvbmZpZ1VwZGF0ZXI+XG4gICAgPC9EQXBwUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIldhZ21pQ29uZmlnIiwiY3JlYXRlQ2xpZW50IiwiY29uZmlndXJlQ2hhaW5zIiwiZGVmYXVsdENoYWlucyIsInB1YmxpY1Byb3ZpZGVyIiwiZ2V0RGVmYXVsdFByb3ZpZGVyIiwiREFwcFByb3ZpZGVyIiwidXNlVXBkYXRlQ29uZmlnIiwidXNlSXNDbGllbnQiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsInVzZUVmZmVjdCIsIkFsY2hlbXlQcm92aWRlciIsIkpzb25ScGNQcm92aWRlciIsInJlbWludENoYWluIiwiaWQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5IiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJycGNVcmxzIiwiZGVmYXVsdCIsInRlc3RuZXQiLCJkZWZhdWx0Q29uZmlnIiwicmVhZE9ubHlVcmxzIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsImNsaWVudCIsImF1dG9Db25uZWN0IiwiYnVpbGRDaGFpbkNvbmZpZyIsImNoYWluIiwibmV0d29ya3MiLCJyZWFkT25seUNoYWluSWQiLCJjaGFpbklkIiwiY29uZmlnQnVpbGRlciIsIm11bHRpY2FsbFZlcnNpb24iLCJmYXN0TXVsdGljYWxsRW5jb2RpbmciLCJEQXBwQ29uZmlnVXBkYXRlciIsImNoaWxkcmVuIiwiaXNDbGllbnQiLCJ1cGRhdGVDb25maWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});