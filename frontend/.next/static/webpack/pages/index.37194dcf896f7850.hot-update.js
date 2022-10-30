"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _data_fetch_fetchAlchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/fetch/fetchAlchemy */ \"./data/fetch/fetchAlchemy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _public_assets_images_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/images/Logo */ \"./public/assets/images/Logo.js\");\n/* harmony import */ var _components_NftsContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NftsContent */ \"./components/NftsContent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ALCHEMY_URL = \"https://eth-mainnet.g.alchemy.com/nft/v2/\";\nfunction Home(context) {\n    _s();\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ALCHEMY_URL, _data_fetch_fetchAlchemy__WEBPACK_IMPORTED_MODULE_4__.fetchAlchemy).data;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), connected = ref[0], setConnected = ref[1];\n    var isConnected = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)().isConnected;\n    var openConnectModal = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useConnectModal)().openConnectModal;\n    var openAccountModal = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useAccountModal)().openAccountModal;\n    var openChainModal = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useChainModal)().openChainModal;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (isConnected) {\n            setConnected(true);\n        } else {\n            setConnected(false);\n        }\n    }, [\n        isConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n                \"data-theme\": \"fantasy\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"Remint Demo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: \"Generated by create next app\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"icon\",\n                                href: \"/favicon.ico\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero min-h-screen bg-base-200 p-100\",\n                        style: {\n                            backgroundColor: \"#000000\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hero-content flex-col w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_Logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    style: {\n                                        fontSize: \"59rem\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex text-white justify-center text-2xl mt-12 mb-10\",\n                                    children: \"RETURNING VALUE TO YOUR FORGOTTEN NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    style: {\n                                        color: \"#fff\"\n                                    },\n                                    children: connected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-sm btn-outline btn-primary ml-3 normal-case\",\n                                                style: {\n                                                    color: \"#fff\"\n                                                },\n                                                onClick: openAccountModal,\n                                                children: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-sm btn-outline btn-primary ml-3 normal-case\",\n                                                style: {\n                                                    color: \"#fff\"\n                                                },\n                                                onClick: openChainModal,\n                                                children: \"Chains\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm btn-outline btn-primary ml-3 normal-case\",\n                                        onClick: openConnectModal,\n                                        children: \"connect wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"my-modal\",\n                        className: \"modal-toggle\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-box\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-bold text-lg\",\n                                    children: \"Congratulations random Internet user!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"py-4\",\n                                    children: \"Click the connect button on the top of this page!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"my-modal\",\n                                        className: \"btn\",\n                                        children: \"Yay!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            connected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NftsContent__WEBPACK_IMPORTED_MODULE_7__.NftsContent, {\n                cards: data\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"ut4MFv70rDhIpqmF45OmRf+o3OU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount,\n        _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useConnectModal,\n        _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useAccountModal,\n        _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_9__.useChainModal\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NENBQVM7Ozs7O3dDQUVQOzs7Ozs7Z0NBQ0Y7Ozs7OzRCQUNGO2tDQUVOLDhEQUFDb0IsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLEVBQUUsRUFBQyxVQUFVO3dCQUFDbEIsU0FBUyxFQUFDLGNBQWM7Ozs7OzRCQUFHO2tDQUNoRSw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87a0NBQ3BCLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsV0FBVzs7OENBQ3hCLDhEQUFDbUIsSUFBRTtvQ0FBQ25CLFNBQVMsRUFBQyxtQkFBbUI7OENBQUMsdUNBRWxDOzs7Ozt3Q0FBSzs4Q0FDTCw4REFBQ29CLEdBQUM7b0NBQUNwQixTQUFTLEVBQUMsTUFBTTs4Q0FBQyxtREFFcEI7Ozs7O3dDQUFJOzhDQUNKLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsY0FBYzs4Q0FDM0IsNEVBQUNxQixPQUFLO3dDQUFDQyxPQUFPLEVBQUMsVUFBVTt3Q0FBQ3RCLFNBQVMsRUFBQyxLQUFLO2tEQUFDLE1BRTFDOzs7Ozs0Q0FBUTs7Ozs7d0NBQ0o7Ozs7OztnQ0FDRjs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjtZQUNMUCxTQUFTLGtCQUFJLDhEQUFDTCxnRUFBVztnQkFBQ21DLEtBQUssRUFBRS9CLElBQUk7Ozs7O29CQUFJOztvQkFDekMsQ0FDSDtDQUNIO0dBdEZ1QkYsSUFBSTs7UUFDVFgsMkNBQU07UUFFQ08sNkNBQVU7UUFDTE4sbUVBQWU7UUFDZkMsbUVBQWU7UUFDakJDLGlFQUFhOzs7QUFObEJRLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHtcbiAgdXNlQ29ubmVjdE1vZGFsLFxuICB1c2VBY2NvdW50TW9kYWwsXG4gIHVzZUNoYWluTW9kYWwsXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgZmV0Y2hBbGNoZW15IH0gZnJvbSAnLi4vZGF0YS9mZXRjaC9mZXRjaEFsY2hlbXknO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9Mb2dvJztcbmltcG9ydCB7IE5mdHNDb250ZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9OZnRzQ29udGVudCc7XG5jb25zdCBBTENIRU1ZX1VSTCA9ICdodHRwczovL2V0aC1tYWlubmV0LmcuYWxjaGVteS5jb20vbmZ0L3YyLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoY29udGV4dCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihBTENIRU1ZX1VSTCwgZmV0Y2hBbGNoZW15KTtcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IG9wZW5Db25uZWN0TW9kYWwgfSA9IHVzZUNvbm5lY3RNb2RhbCgpO1xuICBjb25zdCB7IG9wZW5BY2NvdW50TW9kYWwgfSA9IHVzZUFjY291bnRNb2RhbCgpO1xuICBjb25zdCB7IG9wZW5DaGFpbk1vZGFsIH0gPSB1c2VDaGFpbk1vZGFsKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIHNldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtpc0Nvbm5lY3RlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkYXRhLXRoZW1lPSdmYW50YXN5Jz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJlbWludCBEZW1vPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdoZXJvIG1pbi1oLXNjcmVlbiBiZy1iYXNlLTIwMCBwLTEwMCdcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tY29udGVudCBmbGV4LWNvbCB3LWZ1bGwnPlxuICAgICAgICAgICAgPExvZ28gc3R5bGU9e3sgZm9udFNpemU6ICc1OXJlbScgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgbXQtMTIgbWItMTAnPlxuICAgICAgICAgICAgICBSRVRVUk5JTkcgVkFMVUUgVE8gWU9VUiBGT1JHT1RURU4gTkZUc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcicgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tc20gYnRuLW91dGxpbmUgYnRuLXByaW1hcnkgbWwtMyBub3JtYWwtY2FzZSdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQWNjb3VudE1vZGFsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IG1sLTMgbm9ybWFsLWNhc2UnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNoYWluTW9kYWx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENoYWluc1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGJ0bi1wcmltYXJ5IG1sLTMgbm9ybWFsLWNhc2UnXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ29ubmVjdE1vZGFsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGNvbm5lY3Qgd2FsbGV0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZD0nbXktbW9kYWwnIGNsYXNzTmFtZT0nbW9kYWwtdG9nZ2xlJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib3gnPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtbGcnPlxuICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMgcmFuZG9tIEludGVybmV0IHVzZXIhXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgICAgICAgQ2xpY2sgdGhlIGNvbm5lY3QgYnV0dG9uIG9uIHRoZSB0b3Agb2YgdGhpcyBwYWdlIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWFjdGlvbic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdteS1tb2RhbCcgY2xhc3NOYW1lPSdidG4nPlxuICAgICAgICAgICAgICAgIFlheSFcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Nvbm5lY3RlZCAmJiA8TmZ0c0NvbnRlbnQgY2FyZHM9e2RhdGF9IC8+fVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJIZWFkZXIiLCJ1c2VTV1IiLCJ1c2VDb25uZWN0TW9kYWwiLCJ1c2VBY2NvdW50TW9kYWwiLCJ1c2VDaGFpbk1vZGFsIiwiZmV0Y2hBbGNoZW15IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwiTG9nbyIsIk5mdHNDb250ZW50IiwiQUxDSEVNWV9VUkwiLCJIb21lIiwiY29udGV4dCIsImRhdGEiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJpc0Nvbm5lY3RlZCIsIm9wZW5Db25uZWN0TW9kYWwiLCJvcGVuQWNjb3VudE1vZGFsIiwib3BlbkNoYWluTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkYXRhLXRoZW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJpZCIsImgzIiwicCIsImxhYmVsIiwiaHRtbEZvciIsImNhcmRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});