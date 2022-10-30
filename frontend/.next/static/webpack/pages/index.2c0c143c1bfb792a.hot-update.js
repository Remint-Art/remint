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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/parseDepositCollections */ \"./utils/parseDepositCollections.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData)(), state = ref2.state, send = ref2.send;\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    var handleSendingDeposits = function() {\n        var parsedDeposits = (0,_utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__.parseDepositCollections)(cardsToDeposit);\n        send(parsedDeposits);\n        console.log(\"\\uD83D\\uDE80 ~ handleSendingDeposits ~ parsedDeposits\", parsedDeposits);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            onClick: handleSendingDeposits,\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"8qSmIHg4dz6Cjuod/MjmVUMU1h0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsSUFBSSxDQUFDSyxVQUFVLGtCQUFJLDhEQUFDbEIsZ0VBQVE7Ozs7NkRBQUc7Ozs7O3lEQUNwQjs7Ozs7O2lEQUNDOzs7Ozs2Q0FDWjttQ0F4QnFCb0MsS0FBSzs7Ozt5Q0F5QjVCLENBQ1A7NkJBQ0gsQ0FBQzs7Ozs7aUNBQ0M7c0NBQ1AsOERBQUNyQyxpREFBTTs0QkFBQzJDLE9BQU8sRUFBRXBCLHFCQUFxQjtzQ0FBRSxrQkFBZ0I7Ozs7O2lDQUFTOzs7Ozs7eUJBQzdEOzt3QkFDTDs7Ozs7YUFDQyxDQUNOO0NBQ0gsQ0FBQztHQW5GV3JCLFdBQVc7O1FBSUVULDZEQUFZOzs7QUFKekJTLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZnRzQ29udGVudC5qcz8zOGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWYXVsdERhdGEgfSBmcm9tICcuLi9ob29rcy91c2VWYXVsdERhdGEnO1xuaW1wb3J0IHsgcGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMgfSBmcm9tICcuLi91dGlscy9wYXJzZURlcG9zaXRDb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25BcmVhLFxuICBHcmlkLFxuICBDYXJkQ29udGVudCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRG9uZSc7XG5cbmV4cG9ydCBjb25zdCBOZnRzQ29udGVudCA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgW2NhcmRzVG9TaG93LCBzZXRDYXJkc1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJkc1RvRGVwb3NpdCwgc2V0Q2FyZHNUb0RlcG9zaXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgc3RhdGUsIHNlbmQgfSA9IHVzZVZhdWx0RGF0YSgpO1xuXG4gIGNvbnN0IHBhcnNlTmZ0cyA9IChjYXJkcywgY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSA9PiB7XG4gICAgcmV0dXJuIGNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjYXJkLmNvbnRyYWN0LmFkZHJlc3MgPT09IGNvbnRyYWN0QWRkcmVzcyAmJlxuICAgICAgICBjYXJkLmlkLnRva2VuSWQgPT09IHRva2VuSWRcbiAgICAgICkge1xuICAgICAgICBzZXRDYXJkc1RvRGVwb3NpdCgocHJldlN0YXRlKSA9PiBbXG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIHsgY29udHJhY3Q6IGNhcmQuY29udHJhY3QuYWRkcmVzcywgaWQ6IGNhcmQuaWQudG9rZW5JZCB9LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uY2FyZCwgaXNTZWxlY3RlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25DbGljayA9IChjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpID0+IHtcbiAgICBzZXRDYXJkc1RvU2hvdyhwYXJzZU5mdHMoY2FyZHNUb1Nob3csIGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhcmRzPy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJzZWRDYXJkcyA9IGNhcmRzLm1hcCgoY2FyZCkgPT4gKHsgLi4uY2FyZCwgaXNTZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgICAgcmV0dXJuIHNldENhcmRzVG9TaG93KHBhcnNlZENhcmRzKTtcbiAgICB9XG4gIH0sIFtjYXJkc10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRpbmdEZXBvc2l0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJzZWREZXBvc2l0cyA9IHBhcnNlRGVwb3NpdENvbGxlY3Rpb25zKGNhcmRzVG9EZXBvc2l0KTtcbiAgICBzZW5kKHBhcnNlZERlcG9zaXRzKTtcbiAgICBjb25zb2xlLmxvZygn8J+agCB+IGhhbmRsZVNlbmRpbmdEZXBvc2l0cyB+IHBhcnNlZERlcG9zaXRzJywgcGFyc2VkRGVwb3NpdHMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcgfX0+XG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0xMCAgdGV4dC02eGwnPlxuICAgICAgICAgIDxoMT5Zb3VyIFdhbGxldDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xNic+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gc3BhY2luZz17Mn0gY29sdW1uU3BhY2luZz17M30gcm93U3BhY2luZz17M30+XG4gICAgICAgICAgICB7Y2FyZHNUb1Nob3cgJiZcbiAgICAgICAgICAgICAgY2FyZHNUb1Nob3cubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17M30ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWF4V2lkdGg6IDM0NSwgcGFkZGluZzogMiB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNsaWNrKGNhcmQuY29udHJhY3QuYWRkcmVzcywgY2FyZC5pZC50b2tlbklkKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Y2FyZD8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17Y2FyZD8ubWVkaWFbMF0/LnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5pc1NlbGVjdGVkICYmIDxEb25lSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlbmRpbmdEZXBvc2l0c30+Q2xpY2sgVG8gRGVwb3NpdDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVmF1bHREYXRhIiwicGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiQ2FyZEFjdGlvbkFyZWEiLCJHcmlkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJEb25lSWNvbiIsIk5mdHNDb250ZW50IiwiY2FyZHMiLCJjYXJkc1RvU2hvdyIsInNldENhcmRzVG9TaG93IiwiY2FyZHNUb0RlcG9zaXQiLCJzZXRDYXJkc1RvRGVwb3NpdCIsInN0YXRlIiwic2VuZCIsInBhcnNlTmZ0cyIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiLCJtYXAiLCJjYXJkIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiaWQiLCJwcmV2U3RhdGUiLCJpc1NlbGVjdGVkIiwiaGFuZGxlT25DbGljayIsImxlbmd0aCIsInBhcnNlZENhcmRzIiwiaGFuZGxlU2VuZGluZ0RlcG9zaXRzIiwicGFyc2VkRGVwb3NpdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJoMSIsImNvbnRhaW5lciIsIml0ZW0iLCJzcGFjaW5nIiwiY29sdW1uU3BhY2luZyIsInJvd1NwYWNpbmciLCJpbmRleCIsInhzIiwibWQiLCJzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsImltYWdlIiwibWVkaWEiLCJ0aHVtYm5haWwiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});