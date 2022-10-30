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

/***/ "./hooks/useIsClient.js":
/*!******************************!*\
  !*** ./hooks/useIsClient.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsClient\": () => (/* binding */ useIsClient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsClient = (refresh)=>{\n    const { 0: isClient , 1: setIsClient  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n         true ? setIsClient(false) : 0;\n        return ()=>setIsClient(false);\n    }, [\n        refresh\n    ]);\n    return isClient;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc0NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsV0FBVyxHQUFHLENBQUNDLE9BQU8sR0FBSztJQUN0QyxNQUFNLEtBQUNDLFFBQVEsTUFBRUMsV0FBVyxNQUFJSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUUvQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsS0FBNkIsR0FBR0ssV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHQSxDQUFpQixDQUFDO1FBRXZFLE9BQU8sSUFBTUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDLEVBQUU7UUFBQ0YsT0FBTztLQUFDLENBQUMsQ0FBQztJQUVkLE9BQU9DLFFBQVEsQ0FBQztDQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC13YWdtaS1yYWluYm93a2l0Ly4vaG9va3MvdXNlSXNDbGllbnQuanM/ZWQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlSXNDbGllbnQgPSAocmVmcmVzaCkgPT4ge1xuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gc2V0SXNDbGllbnQoZmFsc2UpIDogc2V0SXNDbGllbnQodHJ1ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4gc2V0SXNDbGllbnQoZmFsc2UpO1xuICB9LCBbcmVmcmVzaF0pO1xuXG4gIHJldHVybiBpc0NsaWVudDtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VJc0NsaWVudCIsInJlZnJlc2giLCJpc0NsaWVudCIsInNldElzQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useIsClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @usedapp/core */ \"@usedapp/core\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_usedapp_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useIsClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useIsClient */ \"./hooks/useIsClient.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/providers */ \"@ethersproject/providers\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//wagmi.\n\n\n\n\n\n\n\n\n\nconst remintChain = {\n    id: 155,\n    name: \"Remint\",\n    network: \"Ethereum\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: \"http://10.1.0.153:8545\"\n    },\n    testnet: true\n};\nconst defaultConfig = {\n    readOnlyUrls: {\n        [remintChain.id]: (0,ethers__WEBPACK_IMPORTED_MODULE_4__.getDefaultProvider)()\n    }\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n    remintChain\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst buildChainConfig = (chain)=>({\n        networks: [\n            chain\n        ],\n        readOnlyChainId: chain.chainId,\n        readOnlyUrls: {\n            [chain.chainId]: new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_9__.JsonRpcProvider(chain.rpcUrls) || (0,ethers__WEBPACK_IMPORTED_MODULE_4__.getDefaultProvider)(chain.id)\n        }\n    });\nconst configBuilder = ()=>({\n        ...buildChainConfig(remintChain),\n        multicallVersion: 2,\n        fastMulticallEncoding: true\n    });\nconst DAppConfigUpdater = ({ children  })=>{\n    const isClient = (0,_hooks_useIsClient__WEBPACK_IMPORTED_MODULE_6__.useIsClient)();\n    const updateConfig = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_5__.useUpdateConfig)();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        isClient && updateConfig(configBuilder());\n    }, [\n        isClient,\n        updateConfig\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_usedapp_core__WEBPACK_IMPORTED_MODULE_5__.DAppProvider, {\n        config: defaultConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DAppConfigUpdater, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n                    chains: chains,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/_app.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly90ZXN0LXdhZ21pLXJhaW5ib3draXQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuLy93YWdtaS5cbmltcG9ydCB7XG4gIFdhZ21pQ29uZmlnLFxuICBjcmVhdGVDbGllbnQsXG4gIGNvbmZpZ3VyZUNoYWlucyxcbiAgZGVmYXVsdENoYWlucyxcbn0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcbmltcG9ydCB7IGdldERlZmF1bHRQcm92aWRlciB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBEQXBwUHJvdmlkZXIsIHVzZVVwZGF0ZUNvbmZpZyB9IGZyb20gJ0B1c2VkYXBwL2NvcmUnO1xuaW1wb3J0IHsgdXNlSXNDbGllbnQgfSBmcm9tICcuLi9ob29rcy91c2VJc0NsaWVudCc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbGNoZW15UHJvdmlkZXIsIEpzb25ScGNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycyc7XG5cbmNvbnN0IHJlbWludENoYWluID0ge1xuICBpZDogMTU1LFxuICBuYW1lOiAnUmVtaW50JyxcbiAgbmV0d29yazogJ0V0aGVyZXVtJyxcbiAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICBkZWNpbWFsczogMTgsXG4gICAgbmFtZTogJ0V0aGVyZXVtJyxcbiAgICBzeW1ib2w6ICdFVEgnLFxuICB9LFxuICBycGNVcmxzOiB7XG4gICAgZGVmYXVsdDogJ2h0dHA6Ly8xMC4xLjAuMTUzOjg1NDUnLFxuICB9LFxuICB0ZXN0bmV0OiB0cnVlLFxufTtcblxuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgcmVhZE9ubHlVcmxzOiB7IFtyZW1pbnRDaGFpbi5pZF06IGdldERlZmF1bHRQcm92aWRlcigpIH0sXG59O1xuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoW3JlbWludENoYWluXSwgW3B1YmxpY1Byb3ZpZGVyKCldKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdNeSBSYWluYm93S2l0IEFwcCcsXG4gIGNoYWlucyxcbn0pO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgYnVpbGRDaGFpbkNvbmZpZyA9IChjaGFpbikgPT4gKHtcbiAgbmV0d29ya3M6IFtjaGFpbl0sXG4gIHJlYWRPbmx5Q2hhaW5JZDogY2hhaW4uY2hhaW5JZCxcbiAgcmVhZE9ubHlVcmxzOiB7XG4gICAgW2NoYWluLmNoYWluSWRdOlxuICAgICAgbmV3IEpzb25ScGNQcm92aWRlcihjaGFpbi5ycGNVcmxzKSB8fCBnZXREZWZhdWx0UHJvdmlkZXIoY2hhaW4uaWQpLFxuICB9LFxufSk7XG5jb25zdCBjb25maWdCdWlsZGVyID0gKCkgPT4gKHtcbiAgLi4uYnVpbGRDaGFpbkNvbmZpZyhyZW1pbnRDaGFpbiksXG4gIG11bHRpY2FsbFZlcnNpb246IDIsXG4gIGZhc3RNdWx0aWNhbGxFbmNvZGluZzogdHJ1ZSxcbn0pO1xuXG5jb25zdCBEQXBwQ29uZmlnVXBkYXRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgaXNDbGllbnQgPSB1c2VJc0NsaWVudCgpO1xuICBjb25zdCB1cGRhdGVDb25maWcgPSB1c2VVcGRhdGVDb25maWcoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzQ2xpZW50ICYmIHVwZGF0ZUNvbmZpZyhjb25maWdCdWlsZGVyKCkpO1xuICB9LCBbaXNDbGllbnQsIHVwZGF0ZUNvbmZpZ10pO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59O1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPERBcHBQcm92aWRlciBjb25maWc9e2RlZmF1bHRDb25maWd9PlxuICAgICAgPERBcHBDb25maWdVcGRhdGVyPlxuICAgICAgICA8V2FnbWlDb25maWcgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgICAgPC9EQXBwQ29uZmlnVXBkYXRlcj5cbiAgICA8L0RBcHBQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiV2FnbWlDb25maWciLCJjcmVhdGVDbGllbnQiLCJjb25maWd1cmVDaGFpbnMiLCJkZWZhdWx0Q2hhaW5zIiwicHVibGljUHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJEQXBwUHJvdmlkZXIiLCJ1c2VVcGRhdGVDb25maWciLCJ1c2VJc0NsaWVudCIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwiQWxjaGVteVByb3ZpZGVyIiwiSnNvblJwY1Byb3ZpZGVyIiwicmVtaW50Q2hhaW4iLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJkZWNpbWFscyIsInN5bWJvbCIsInJwY1VybHMiLCJkZWZhdWx0IiwidGVzdG5ldCIsImRlZmF1bHRDb25maWciLCJyZWFkT25seVVybHMiLCJjaGFpbnMiLCJwcm92aWRlciIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwiY2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJidWlsZENoYWluQ29uZmlnIiwiY2hhaW4iLCJuZXR3b3JrcyIsInJlYWRPbmx5Q2hhaW5JZCIsImNoYWluSWQiLCJjb25maWdCdWlsZGVyIiwibXVsdGljYWxsVmVyc2lvbiIsImZhc3RNdWx0aWNhbGxFbmNvZGluZyIsIkRBcHBDb25maWdVcGRhdGVyIiwiY2hpbGRyZW4iLCJpc0NsaWVudCIsInVwZGF0ZUNvbmZpZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@usedapp/core":
/*!********************************!*\
  !*** external "@usedapp/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@usedapp/core");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

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