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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/parseDepositCollections */ \"./utils/parseDepositCollections.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__.useVaultData)(), state = ref2.state, send = ref2.send;\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ state\", state);\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    var handleSendingDeposits = function() {\n        var parsedDeposits = (0,_utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_3__.parseDepositCollections)(cardsToDeposit);\n        send(parsedDeposits);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: handleSendingDeposits,\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"8qSmIHg4dz6Cjuod/MjmVUMU1h0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNLLFVBQVUsa0JBQUksOERBQUNwQixnRUFBUTs7Ozs2REFBRzs7Ozs7eURBQ3BCOzs7Ozs7aURBQ0M7Ozs7OzZDQUNaO21DQXhCcUJvQyxLQUFLOzs7O3lDQXlCNUIsQ0FDUDs2QkFDSCxDQUFDOzs7OztpQ0FDQztzQ0FDUCw4REFBQ3JDLGlEQUFNOzRCQUFDMkMsT0FBTyxFQUFFbEIscUJBQXFCO3NDQUFFLGtCQUFnQjs7Ozs7aUNBQVM7Ozs7Ozt5QkFDN0Q7O3dCQUNMOzs7OzthQUNDLENBQ047Q0FDSCxDQUFDO0dBcEZXdkIsV0FBVzs7UUFHRVQsNkRBQVk7OztBQUh6QlMsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05mdHNDb250ZW50LmpzPzM4ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVZhdWx0RGF0YSB9IGZyb20gJy4uL2hvb2tzL3VzZVZhdWx0RGF0YSc7XG5pbXBvcnQgeyBwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3BhcnNlRGVwb3NpdENvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIEdyaWQsXG4gIENhcmRDb250ZW50LFxuICBCdXR0b24sXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgRG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Eb25lJztcblxuZXhwb3J0IGNvbnN0IE5mdHNDb250ZW50ID0gKHsgY2FyZHMgfSkgPT4ge1xuICBjb25zdCBbY2FyZHNUb1Nob3csIHNldENhcmRzVG9TaG93XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcmRzVG9EZXBvc2l0LCBzZXRDYXJkc1RvRGVwb3NpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgc3RhdGUsIHNlbmQgfSA9IHVzZVZhdWx0RGF0YSgpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gTmZ0c0NvbnRlbnQgfiBzdGF0ZScsIHN0YXRlKTtcblxuICBjb25zdCBwYXJzZU5mdHMgPSAoY2FyZHMsIGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkgPT4ge1xuICAgIHJldHVybiBjYXJkcy5tYXAoKGNhcmQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2FyZC5jb250cmFjdC5hZGRyZXNzID09PSBjb250cmFjdEFkZHJlc3MgJiZcbiAgICAgICAgY2FyZC5pZC50b2tlbklkID09PSB0b2tlbklkXG4gICAgICApIHtcbiAgICAgICAgc2V0Q2FyZHNUb0RlcG9zaXQoKHByZXZTdGF0ZSkgPT4gW1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICB7IGNvbnRyYWN0OiBjYXJkLmNvbnRyYWN0LmFkZHJlc3MsIGlkOiBjYXJkLmlkLnRva2VuSWQgfSxcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiB7IC4uLmNhcmQsIGlzU2VsZWN0ZWQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSA9PiB7XG4gICAgc2V0Q2FyZHNUb1Nob3cocGFyc2VOZnRzKGNhcmRzVG9TaG93LCBjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYXJkcz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyc2VkQ2FyZHMgPSBjYXJkcy5tYXAoKGNhcmQpID0+ICh7IC4uLmNhcmQsIGlzU2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICAgIHJldHVybiBzZXRDYXJkc1RvU2hvdyhwYXJzZWRDYXJkcyk7XG4gICAgfVxuICB9LCBbY2FyZHNdKTtcblxuICBjb25zdCBoYW5kbGVTZW5kaW5nRGVwb3NpdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkRGVwb3NpdHMgPSBwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyhjYXJkc1RvRGVwb3NpdCk7XG4gICAgc2VuZChwYXJzZWREZXBvc2l0cyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnIH19PlxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcHQtMTAgIHRleHQtNnhsJz5cbiAgICAgICAgICA8aDE+WW91ciBXYWxsZXQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTYnPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9IGNvbHVtblNwYWNpbmc9ezN9IHJvd1NwYWNpbmc9ezN9PlxuICAgICAgICAgICAge2NhcmRzVG9TaG93ICYmXG4gICAgICAgICAgICAgIGNhcmRzVG9TaG93Lm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezN9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiAzNDUsIHBhZGRpbmc6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljayhjYXJkLmNvbnRyYWN0LmFkZHJlc3MsIGNhcmQuaWQudG9rZW5JZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NhcmQ/LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2NhcmQ/Lm1lZGlhWzBdPy50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuaXNTZWxlY3RlZCAmJiA8RG9uZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kaW5nRGVwb3NpdHN9PkNsaWNrIFRvIERlcG9zaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VWYXVsdERhdGEiLCJwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQWN0aW9uQXJlYSIsIkdyaWQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkRvbmVJY29uIiwiTmZ0c0NvbnRlbnQiLCJjYXJkcyIsImNhcmRzVG9TaG93Iiwic2V0Q2FyZHNUb1Nob3ciLCJjYXJkc1RvRGVwb3NpdCIsInNldENhcmRzVG9EZXBvc2l0Iiwic3RhdGUiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInBhcnNlTmZ0cyIsImNvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiLCJtYXAiLCJjYXJkIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiaWQiLCJwcmV2U3RhdGUiLCJpc1NlbGVjdGVkIiwiaGFuZGxlT25DbGljayIsImxlbmd0aCIsInBhcnNlZENhcmRzIiwiaGFuZGxlU2VuZGluZ0RlcG9zaXRzIiwicGFyc2VkRGVwb3NpdHMiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImgxIiwiY29udGFpbmVyIiwiaXRlbSIsInNwYWNpbmciLCJjb2x1bW5TcGFjaW5nIiwicm93U3BhY2luZyIsImluZGV4IiwieHMiLCJtZCIsInN4IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwib25DbGljayIsImNvbXBvbmVudCIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwiaW1hZ2UiLCJtZWRpYSIsInRodW1ibmFpbCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});