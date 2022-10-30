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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/parseDepositCollections */ \"./utils/parseDepositCollections.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData)(), state = ref2.state, send = ref2.send;\n    // console.log('🚀 ~ NftsContent ~ state', state);\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    var handleSendingDeposits = function() {\n        var parsedDeposits = (0,_utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_4__.parseDepositCollections)(cardsToDeposit);\n        send(parsedDeposits);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            onClick: handleSendingDeposits,\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"8qSmIHg4dz6Cjuod/MjmVUMU1h0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBRzs7Ozs7eURBQ3BCOzs7Ozs7aURBQ0M7Ozs7OzZDQUNaO21DQXhCcUJrQyxLQUFLOzs7O3lDQXlCNUIsQ0FDUDs2QkFDSCxDQUFDOzs7OztpQ0FDQztzQ0FDUCw4REFBQ25DLGlEQUFNOzRCQUFDeUMsT0FBTyxFQUFFbEIscUJBQXFCO3NDQUFFLGtCQUFnQjs7Ozs7aUNBQVM7Ozs7Ozt5QkFDN0Q7O3dCQUNMOzs7OzthQUNDLENBQ047Q0FDSCxDQUFDO0dBcEZXckIsV0FBVzs7UUFJRVQsNkRBQVk7OztBQUp6QlMsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05mdHNDb250ZW50LmpzPzM4ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVZhdWx0RGF0YSB9IGZyb20gJy4uL2hvb2tzL3VzZVZhdWx0RGF0YSc7XG5pbXBvcnQgeyBwYXJzZURlcG9zaXRDb2xsZWN0aW9ucyB9IGZyb20gJy4uL3V0aWxzL3BhcnNlRGVwb3NpdENvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIEdyaWQsXG4gIENhcmRDb250ZW50LFxuICBCdXR0b24sXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgRG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Eb25lJztcblxuZXhwb3J0IGNvbnN0IE5mdHNDb250ZW50ID0gKHsgY2FyZHMgfSkgPT4ge1xuICBjb25zdCBbY2FyZHNUb1Nob3csIHNldENhcmRzVG9TaG93XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcmRzVG9EZXBvc2l0LCBzZXRDYXJkc1RvRGVwb3NpdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBzdGF0ZSwgc2VuZCB9ID0gdXNlVmF1bHREYXRhKCk7XG5cbiAgLy8gY29uc29sZS5sb2coJ/CfmoAgfiBOZnRzQ29udGVudCB+IHN0YXRlJywgc3RhdGUpO1xuXG4gIGNvbnN0IHBhcnNlTmZ0cyA9IChjYXJkcywgY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSA9PiB7XG4gICAgcmV0dXJuIGNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjYXJkLmNvbnRyYWN0LmFkZHJlc3MgPT09IGNvbnRyYWN0QWRkcmVzcyAmJlxuICAgICAgICBjYXJkLmlkLnRva2VuSWQgPT09IHRva2VuSWRcbiAgICAgICkge1xuICAgICAgICBzZXRDYXJkc1RvRGVwb3NpdCgocHJldlN0YXRlKSA9PiBbXG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIHsgY29udHJhY3Q6IGNhcmQuY29udHJhY3QuYWRkcmVzcywgaWQ6IGNhcmQuaWQudG9rZW5JZCB9LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uY2FyZCwgaXNTZWxlY3RlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25DbGljayA9IChjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpID0+IHtcbiAgICBzZXRDYXJkc1RvU2hvdyhwYXJzZU5mdHMoY2FyZHNUb1Nob3csIGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhcmRzPy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJzZWRDYXJkcyA9IGNhcmRzLm1hcCgoY2FyZCkgPT4gKHsgLi4uY2FyZCwgaXNTZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgICAgcmV0dXJuIHNldENhcmRzVG9TaG93KHBhcnNlZENhcmRzKTtcbiAgICB9XG4gIH0sIFtjYXJkc10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRpbmdEZXBvc2l0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJzZWREZXBvc2l0cyA9IHBhcnNlRGVwb3NpdENvbGxlY3Rpb25zKGNhcmRzVG9EZXBvc2l0KTtcbiAgICBzZW5kKHBhcnNlZERlcG9zaXRzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnIH19PlxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcHQtMTAgIHRleHQtNnhsJz5cbiAgICAgICAgICA8aDE+WW91ciBXYWxsZXQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTYnPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9IGNvbHVtblNwYWNpbmc9ezN9IHJvd1NwYWNpbmc9ezN9PlxuICAgICAgICAgICAge2NhcmRzVG9TaG93ICYmXG4gICAgICAgICAgICAgIGNhcmRzVG9TaG93Lm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezN9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiAzNDUsIHBhZGRpbmc6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljayhjYXJkLmNvbnRyYWN0LmFkZHJlc3MsIGNhcmQuaWQudG9rZW5JZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NhcmQ/LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2NhcmQ/Lm1lZGlhWzBdPy50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuaXNTZWxlY3RlZCAmJiA8RG9uZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kaW5nRGVwb3NpdHN9PkNsaWNrIFRvIERlcG9zaXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVZhdWx0RGF0YSIsInBhcnNlRGVwb3NpdENvbGxlY3Rpb25zIiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRBY3Rpb25BcmVhIiwiR3JpZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiRG9uZUljb24iLCJOZnRzQ29udGVudCIsImNhcmRzIiwiY2FyZHNUb1Nob3ciLCJzZXRDYXJkc1RvU2hvdyIsImNhcmRzVG9EZXBvc2l0Iiwic2V0Q2FyZHNUb0RlcG9zaXQiLCJzdGF0ZSIsInNlbmQiLCJwYXJzZU5mdHMiLCJjb250cmFjdEFkZHJlc3MiLCJ0b2tlbklkIiwibWFwIiwiY2FyZCIsImNvbnRyYWN0IiwiYWRkcmVzcyIsImlkIiwicHJldlN0YXRlIiwiaXNTZWxlY3RlZCIsImhhbmRsZU9uQ2xpY2siLCJsZW5ndGgiLCJwYXJzZWRDYXJkcyIsImhhbmRsZVNlbmRpbmdEZXBvc2l0cyIsInBhcnNlZERlcG9zaXRzIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJoMSIsImNvbnRhaW5lciIsIml0ZW0iLCJzcGFjaW5nIiwiY29sdW1uU3BhY2luZyIsInJvd1NwYWNpbmciLCJpbmRleCIsInhzIiwibWQiLCJzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsImltYWdlIiwibWVkaWEiLCJ0aHVtYm5haWwiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});