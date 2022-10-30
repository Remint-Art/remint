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

/***/ "./components/NftsContent.js":
/*!***********************************!*\
  !*** ./components/NftsContent.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/parseDepositCollections */ \"./utils/parseDepositCollections.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData)(), state = ref2.state, send = ref2.send;\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ state\", state);\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    var handleSendingDeposits = function() {\n        var parsedDeposits = (0,_utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__.parseDepositCollections)(cardsToDeposit);\n        send(parsedDeposits);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            onClick: handleSendingDeposits,\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"8qSmIHg4dz6Cjuod/MjmVUMU1h0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBckMsSUFBSSxDQUFDSyxVQUFVLGtCQUFJLDhEQUFDcEIsZ0VBQVE7Ozs7NkRBQUc7Ozs7O3lEQUNwQjs7Ozs7O2lEQUNDOzs7Ozs2Q0FDWjttQ0F4QnFCb0MsS0FBSzs7Ozt5Q0F5QjVCLENBQ1A7NkJBQ0gsQ0FBQzs7Ozs7aUNBQ0M7c0NBQ1AsOERBQUNyQyxpREFBTTs0QkFBQzJDLE9BQU8sRUFBRWxCLHFCQUFxQjtzQ0FBRSxrQkFBZ0I7Ozs7O2lDQUFTOzs7Ozs7eUJBQzdEOzt3QkFDTDs7Ozs7YUFDQyxDQUNOO0NBQ0gsQ0FBQztHQXBGV3ZCLFdBQVc7O1FBSUVULDZEQUFZOzs7QUFKekJTLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZnRzQ29udGVudC5qcz8zOGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWYXVsdERhdGEgfSBmcm9tICcuLi9ob29rcy91c2VWYXVsdERhdGEnO1xuaW1wb3J0IHsgcGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMgfSBmcm9tICcuLi91dGlscy9wYXJzZURlcG9zaXRDb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25BcmVhLFxuICBHcmlkLFxuICBDYXJkQ29udGVudCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRG9uZSc7XG5cbmV4cG9ydCBjb25zdCBOZnRzQ29udGVudCA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgW2NhcmRzVG9TaG93LCBzZXRDYXJkc1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJkc1RvRGVwb3NpdCwgc2V0Q2FyZHNUb0RlcG9zaXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgc3RhdGUsIHNlbmQgfSA9IHVzZVZhdWx0RGF0YSgpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gTmZ0c0NvbnRlbnQgfiBzdGF0ZScsIHN0YXRlKTtcblxuICBjb25zdCBwYXJzZU5mdHMgPSAoY2FyZHMsIGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkgPT4ge1xuICAgIHJldHVybiBjYXJkcy5tYXAoKGNhcmQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2FyZC5jb250cmFjdC5hZGRyZXNzID09PSBjb250cmFjdEFkZHJlc3MgJiZcbiAgICAgICAgY2FyZC5pZC50b2tlbklkID09PSB0b2tlbklkXG4gICAgICApIHtcbiAgICAgICAgc2V0Q2FyZHNUb0RlcG9zaXQoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICB7IGNvbnRyYWN0OiBjYXJkLmNvbnRyYWN0LmFkZHJlc3MsIGlkOiBjYXJkLmlkLnRva2VuSWQgfSxcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiB7IC4uLmNhcmQsIGlzU2VsZWN0ZWQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSA9PiB7XG4gICAgc2V0Q2FyZHNUb1Nob3cocGFyc2VOZnRzKGNhcmRzVG9TaG93LCBjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYXJkcz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyc2VkQ2FyZHMgPSBjYXJkcy5tYXAoKGNhcmQpID0+ICh7IC4uLmNhcmQsIGlzU2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICAgIHJldHVybiBzZXRDYXJkc1RvU2hvdyhwYXJzZWRDYXJkcyk7XG4gICAgfVxuICB9LCBbY2FyZHNdKTtcblxuICBjb25zdCBoYW5kbGVTZW5kaW5nRGVwb3NpdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkRGVwb3NpdHMgPSBwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyhjYXJkc1RvRGVwb3NpdCk7XG4gICAgc2VuZChwYXJzZWREZXBvc2l0cyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyB9fT5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LTEwICB0ZXh0LTZ4bCc+XG4gICAgICAgICAgPGgxPllvdXIgV2FsbGV0PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTE2Jz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfSBjb2x1bW5TcGFjaW5nPXszfSByb3dTcGFjaW5nPXszfT5cbiAgICAgICAgICAgIHtjYXJkc1RvU2hvdyAmJlxuICAgICAgICAgICAgICBjYXJkc1RvU2hvdy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXszfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtYXhXaWR0aDogMzQ1LCBwYWRkaW5nOiAyIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2soY2FyZC5jb250cmFjdC5hZGRyZXNzLCBjYXJkLmlkLnRva2VuSWQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjYXJkPy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtjYXJkPy5tZWRpYVswXT8udGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzYwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmlzU2VsZWN0ZWQgJiYgPERvbmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2VuZGluZ0RlcG9zaXRzfT5DbGljayBUbyBEZXBvc2l0PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VWYXVsdERhdGEiLCJwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQWN0aW9uQXJlYSIsIkdyaWQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkRvbmVJY29uIiwiTmZ0c0NvbnRlbnQiLCJjYXJkcyIsImNhcmRzVG9TaG93Iiwic2V0Q2FyZHNUb1Nob3ciLCJjYXJkc1RvRGVwb3NpdCIsInNldENhcmRzVG9EZXBvc2l0Iiwic3RhdGUiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInBhcnNlTmZ0cyIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiLCJtYXAiLCJjYXJkIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiaWQiLCJwcmV2U3RhdGUiLCJpc1NlbGVjdGVkIiwiaGFuZGxlT25DbGljayIsImxlbmd0aCIsInBhcnNlZENhcmRzIiwiaGFuZGxlU2VuZGluZ0RlcG9zaXRzIiwicGFyc2VkRGVwb3NpdHMiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImgxIiwiY29udGFpbmVyIiwiaXRlbSIsInNwYWNpbmciLCJjb2x1bW5TcGFjaW5nIiwicm93U3BhY2luZyIsImluZGV4IiwieHMiLCJtZCIsInN4IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwib25DbGljayIsImNvbXBvbmVudCIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwiaW1hZ2UiLCJtZWRpYSIsInRodW1ibmFpbCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});