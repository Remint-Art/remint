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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ cardsToDeposit\", cardsToDeposit);\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData)(), state = ref2.state, send = ref2.send;\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ state\", state);\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: function() {\n                                return send(cardsToDeposit);\n                            },\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"8qSmIHg4dz6Cjuod/MjmVUMU1h0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_3__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsQ0FDUDs2QkFDSCxDQUFDOzs7OztpQ0FDQztzQ0FDUCw4REFBQ2pDLGlEQUFNOzRCQUFDdUMsT0FBTyxFQUFFO3VDQUFNNUIsSUFBSSxDQUFDTCxjQUFjLENBQUM7NkJBQUE7c0NBQUUsa0JBQWdCOzs7OztpQ0FBUzs7Ozs7O3lCQUNsRTs7d0JBQ0w7Ozs7O2FBQ0MsQ0FDTjtDQUNILENBQUM7R0FsRldKLFdBQVc7O1FBTUVSLDZEQUFZOzs7QUFOekJRLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZnRzQ29udGVudC5qcz8zOGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWYXVsdERhdGEgfSBmcm9tICcuLi9ob29rcy91c2VWYXVsdERhdGEnO1xuXG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25BcmVhLFxuICBHcmlkLFxuICBDYXJkQ29udGVudCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRG9uZSc7XG5cbmV4cG9ydCBjb25zdCBOZnRzQ29udGVudCA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgW2NhcmRzVG9TaG93LCBzZXRDYXJkc1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJkc1RvRGVwb3NpdCwgc2V0Q2FyZHNUb0RlcG9zaXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gTmZ0c0NvbnRlbnQgfiBjYXJkc1RvRGVwb3NpdCcsIGNhcmRzVG9EZXBvc2l0KTtcblxuICBjb25zdCB7IHN0YXRlLCBzZW5kIH0gPSB1c2VWYXVsdERhdGEoKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IE5mdHNDb250ZW50IH4gc3RhdGUnLCBzdGF0ZSk7XG5cbiAgY29uc3QgcGFyc2VOZnRzID0gKGNhcmRzLCBjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpID0+IHtcbiAgICByZXR1cm4gY2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNhcmQuY29udHJhY3QuYWRkcmVzcyA9PT0gY29udHJhY3RBZGRyZXNzICYmXG4gICAgICAgIGNhcmQuaWQudG9rZW5JZCA9PT0gdG9rZW5JZFxuICAgICAgKSB7XG4gICAgICAgIHNldENhcmRzVG9EZXBvc2l0KChwcmV2U3RhdGUpID0+IFtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgeyBjb250cmFjdDogY2FyZC5jb250cmFjdC5hZGRyZXNzLCBpZDogY2FyZC5pZC50b2tlbklkIH0sXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4geyAuLi5jYXJkLCBpc1NlbGVjdGVkOiB0cnVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkgPT4ge1xuICAgIHNldENhcmRzVG9TaG93KHBhcnNlTmZ0cyhjYXJkc1RvU2hvdywgY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FyZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcnNlZENhcmRzID0gY2FyZHMubWFwKChjYXJkKSA9PiAoeyAuLi5jYXJkLCBpc1NlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgICByZXR1cm4gc2V0Q2FyZHNUb1Nob3cocGFyc2VkQ2FyZHMpO1xuICAgIH1cbiAgfSwgW2NhcmRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTAgIHRleHQtNnhsJz5cbiAgICAgICAgICA8aDE+WW91ciBXYWxsZXQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTYnPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9IGNvbHVtblNwYWNpbmc9ezN9IHJvd1NwYWNpbmc9ezN9PlxuICAgICAgICAgICAge2NhcmRzVG9TaG93ICYmXG4gICAgICAgICAgICAgIGNhcmRzVG9TaG93Lm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezN9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heFdpZHRoOiAzNDUsIHBhZGRpbmc6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljayhjYXJkLmNvbnRyYWN0LmFkZHJlc3MsIGNhcmQuaWQudG9rZW5JZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NhcmQ/LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2NhcmQ/Lm1lZGlhWzBdPy50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuaXNTZWxlY3RlZCAmJiA8RG9uZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kKGNhcmRzVG9EZXBvc2l0KX0+Q2xpY2sgVG8gRGVwb3NpdDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVmF1bHREYXRhIiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRBY3Rpb25BcmVhIiwiR3JpZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiRG9uZUljb24iLCJOZnRzQ29udGVudCIsImNhcmRzIiwiY2FyZHNUb1Nob3ciLCJzZXRDYXJkc1RvU2hvdyIsImNhcmRzVG9EZXBvc2l0Iiwic2V0Q2FyZHNUb0RlcG9zaXQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJzZW5kIiwicGFyc2VOZnRzIiwiY29udHJhY3RBZGRyZXNzIiwidG9rZW5JZCIsIm1hcCIsImNhcmQiLCJjb250cmFjdCIsImFkZHJlc3MiLCJpZCIsInByZXZTdGF0ZSIsImlzU2VsZWN0ZWQiLCJoYW5kbGVPbkNsaWNrIiwibGVuZ3RoIiwicGFyc2VkQ2FyZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImNvbnRhaW5lciIsIml0ZW0iLCJzcGFjaW5nIiwiY29sdW1uU3BhY2luZyIsInJvd1NwYWNpbmciLCJpbmRleCIsInhzIiwibWQiLCJzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsImltYWdlIiwibWVkaWEiLCJ0aHVtYm5haWwiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});