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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NftsContent\": function() { return /* binding */ NftsContent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useVaultData */ \"./hooks/useVaultData.js\");\n/* harmony import */ var _utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/parseDepositCollections */ \"./utils/parseDepositCollections.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NftsContent = function(param) {\n    var cards = param.cards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cardsToShow = ref[0], setCardsToShow = ref[1];\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ cardsToShow\", cardsToShow);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cardsToDeposit = ref1[0], setCardsToDeposit = ref1[1];\n    var ref2 = (0,_hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__.useVaultData)(), state = ref2.state, send = ref2.send;\n    console.log(\"\\uD83D\\uDE80 ~ NftsContent ~ state\", state);\n    var parseNfts = function(cards, contractAddress, tokenId) {\n        return cards.map(function(card) {\n            if (card.contract.address === contractAddress && card.id.tokenId === tokenId) {\n                setCardsToDeposit(function(prevState) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prevState).concat([\n                        {\n                            contract: card.contract.address,\n                            id: card.id.tokenId\n                        }, \n                    ]);\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: true\n                });\n            }\n            return card;\n        });\n    };\n    var handleOnClick = function(contractAddress, tokenId) {\n        setCardsToShow(parseNfts(cardsToShow, contractAddress, tokenId));\n    };\n    var removeCards = function(cards) {\n        var cardsToReturn2 = cards.reduce(function(acc, cur) {\n            if (acc.includes(cur.contract) && acc.includes(cur.id)) {\n                var cardToRemove = acc.findIndex(function(el) {\n                    return el.contract.address === cur.contract && el.id.tokenId === cur.id;\n                });\n                return;\n            }\n            return acc;\n        }, [\n            cardsToShow\n        ]);\n        console.log(\"\\uD83D\\uDE80 ~ removeCards ~ cardsToReturn2\", cardsToReturn2);\n        var cardsToReturn = cardsToShow.filter(function(card) {\n            console.log(\"\\uD83D\\uDE80 ~ removeCards ~ cards\", cards);\n            console.log(\"\\uD83D\\uDE80 ~ cardsToReturn ~ card\", card);\n            if (!cards.includes(card.contract.address) && !cards.includes(card.id.tokenId)) {\n                console.log(\"inside\");\n                return card;\n            }\n        });\n        console.log(\"\\uD83D\\uDE80 ~ removeCards ~ cardsToReturn\", cardsToReturn);\n        return cardsToReturn2;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (state.status === \"Success\") {\n            setCardsToShow(removeCards(cardsToDeposit));\n        }\n    }, [\n        state\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if ((cards === null || cards === void 0 ? void 0 : cards.length) > 0) {\n            var parsedCards = cards.map(function(card) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, card), {\n                    isSelected: false\n                });\n            });\n            return setCardsToShow(parsedCards);\n        }\n    }, [\n        cards\n    ]);\n    var handleSendingDeposits = function() {\n        var parsedDeposits = (0,_utils_parseDepositCollections__WEBPACK_IMPORTED_MODULE_3__.parseDepositCollections)(cardsToDeposit);\n        send(parsedDeposits);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-10 text-6xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            container: true,\n                            item: true,\n                            spacing: 2,\n                            columnSpacing: 3,\n                            rowSpacing: 3,\n                            children: cardsToShow && cardsToShow.map(function(card, index) {\n                                var ref;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    item: true,\n                                    xs: 3,\n                                    md: 3,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                                        sx: {\n                                            maxWidth: 345,\n                                            padding: 2\n                                        },\n                                        onClick: function() {\n                                            return handleOnClick(card.contract.address, card.id.tokenId);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardActionArea, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardMedia, {\n                                                    component: \"img\",\n                                                    alt: card === null || card === void 0 ? void 0 : card.title,\n                                                    height: \"100\",\n                                                    image: (ref = card === null || card === void 0 ? void 0 : card.media[0]) === null || ref === void 0 ? void 0 : ref.thumbnail\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                                                    sx: {\n                                                        minHeight: \"60px\",\n                                                        display: \"flex\",\n                                                        justifyContent: \"center\"\n                                                    },\n                                                    children: card.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                        lineNumber: 130,\n                                                        columnNumber: 47\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 23\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: handleSendingDeposits,\n                            children: \"Click To Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/NftsContent.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftsContent, \"76r0Ir4ly5rsGYEQj+fACTRbdN0=\", false, function() {\n    return [\n        _hooks_useVaultData__WEBPACK_IMPORTED_MODULE_2__.useVaultData\n    ];\n});\n_c = NftsContent;\nvar _c;\n$RefreshReg$(_c, \"NftsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05mdHNDb250ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFBNEM7QUFDUztBQUNzQjtBQVFwRDtBQUV5QjtBQUV6QyxJQUFNVyxXQUFXLEdBQUcsZ0JBQWU7UUFBWkMsS0FBSyxTQUFMQSxLQUFLOztJQUNqQyxJQUFzQ1gsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQ1ksV0FBVyxHQUFvQlosR0FBWSxHQUFoQyxFQUFFYSxjQUFjLEdBQUliLEdBQVksR0FBaEI7SUFFbENjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBDQUErQixFQUFFSCxXQUFXLENBQUMsQ0FBQztJQUUxRCxJQUE0Q1osSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqRGdCLGNBQWMsR0FBdUJoQixJQUFZLEdBQW5DLEVBQUVpQixpQkFBaUIsR0FBSWpCLElBQVksR0FBaEI7SUFDeEMsSUFBd0JDLElBQWMsR0FBZEEsaUVBQVksRUFBRSxFQUE5QmlCLEtBQUssR0FBV2pCLElBQWMsQ0FBOUJpQixLQUFLLEVBQUVDLElBQUksR0FBS2xCLElBQWMsQ0FBdkJrQixJQUFJO0lBRW5CTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBeUIsRUFBRUcsS0FBSyxDQUFDLENBQUM7SUFFOUMsSUFBTUUsU0FBUyxHQUFHLFNBQUNULEtBQUssRUFBRVUsZUFBZSxFQUFFQyxPQUFPLEVBQUs7UUFDckQsT0FBT1gsS0FBSyxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ3pCLElBQ0VBLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEtBQUtMLGVBQWUsSUFDekNHLElBQUksQ0FBQ0csRUFBRSxDQUFDTCxPQUFPLEtBQUtBLE9BQU8sRUFDM0I7Z0JBQ0FMLGlCQUFpQixDQUFDLFNBQUNXLFNBQVM7MkJBQUsscUZBQzVCQSxTQUFTLENBQVRBLFFBRDRCO3dCQUUvQjs0QkFBRUgsUUFBUSxFQUFFRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTzs0QkFBRUMsRUFBRSxFQUFFSCxJQUFJLENBQUNHLEVBQUUsQ0FBQ0wsT0FBTzt5QkFBRTtxQkFDekQ7aUJBQUEsQ0FBQyxDQUFDO2dCQUNILE9BQU8sd0tBQUtFLElBQUk7b0JBQUVLLFVBQVUsRUFBRSxJQUFJO2tCQUFFLENBQUM7YUFDdEM7WUFDRCxPQUFPTCxJQUFJLENBQUM7U0FDYixDQUFDLENBQUM7S0FDSjtJQUVELElBQU1NLGFBQWEsR0FBRyxTQUFDVCxlQUFlLEVBQUVDLE9BQU8sRUFBSztRQUNsRFQsY0FBYyxDQUFDTyxTQUFTLENBQUNSLFdBQVcsRUFBRVMsZUFBZSxFQUFFQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2xFO0lBRUQsSUFBTVMsV0FBVyxHQUFHLFNBQUNwQixLQUFLLEVBQUs7UUFDN0IsSUFBTXFCLGNBQWMsR0FBR3JCLEtBQUssQ0FBQ3NCLE1BQU0sQ0FDakMsU0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUs7WUFDWixJQUFJRCxHQUFHLENBQUNFLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDVixRQUFRLENBQUMsSUFBSVMsR0FBRyxDQUFDRSxRQUFRLENBQUNELEdBQUcsQ0FBQ1IsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RELElBQU1VLFlBQVksR0FBR0gsR0FBRyxDQUFDSSxTQUFTLENBQ2hDLFNBQUNDLEVBQUU7MkJBQ0RBLEVBQUUsQ0FBQ2QsUUFBUSxDQUFDQyxPQUFPLEtBQUtTLEdBQUcsQ0FBQ1YsUUFBUSxJQUFJYyxFQUFFLENBQUNaLEVBQUUsQ0FBQ0wsT0FBTyxLQUFLYSxHQUFHLENBQUNSLEVBQUU7aUJBQUEsQ0FDbkU7Z0JBQ0QsT0FBTzthQUNSO1lBRUQsT0FBT08sR0FBRyxDQUFDO1NBQ1osRUFDRDtZQUFDdEIsV0FBVztTQUFDLENBQ2Q7UUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkNBQWtDLEVBQUVpQixjQUFjLENBQUMsQ0FBQztRQUVoRSxJQUFNUSxhQUFhLEdBQUc1QixXQUFXLENBQUM2QixNQUFNLENBQUMsU0FBQ2pCLElBQUksRUFBSztZQUNqRFYsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQXlCLEVBQUVKLEtBQUssQ0FBQyxDQUFDO1lBQzlDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBMEIsRUFBRVMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFDRSxDQUFDYixLQUFLLENBQUN5QixRQUFRLENBQUNaLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsSUFDdEMsQ0FBQ2YsS0FBSyxDQUFDeUIsUUFBUSxDQUFDWixJQUFJLENBQUNHLEVBQUUsQ0FBQ0wsT0FBTyxDQUFDLEVBQ2hDO2dCQUNBUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBT1MsSUFBSSxDQUFDO2FBQ2I7U0FDRixDQUFDO1FBRUZWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUFpQyxFQUFFeUIsYUFBYSxDQUFDLENBQUM7UUFFOUQsT0FBT1IsY0FBYyxDQUFDO0tBQ3ZCO0lBRURqQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJbUIsS0FBSyxDQUFDd0IsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM5QjdCLGNBQWMsQ0FBQ2tCLFdBQVcsQ0FBQ2YsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUM3QztLQUNGLEVBQUU7UUFBQ0UsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVabkIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVksQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQVEsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxLQUFLLENBQUVnQyxNQUFNLElBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQU1DLFdBQVcsR0FBR2pDLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLElBQUk7dUJBQU0sd0tBQUtBLElBQUk7b0JBQUVLLFVBQVUsRUFBRSxLQUFLO2tCQUFFO2FBQUMsQ0FBQztZQUN6RSxPQUFPaEIsY0FBYyxDQUFDK0IsV0FBVyxDQUFDLENBQUM7U0FDcEM7S0FDRixFQUFFO1FBQUNqQyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRVosSUFBTWtDLHFCQUFxQixHQUFHLFdBQU07UUFDbEMsSUFBTUMsY0FBYyxHQUFHNUMsdUZBQXVCLENBQUNjLGNBQWMsQ0FBQztRQUM5REcsSUFBSSxDQUFDMkIsY0FBYyxDQUFDLENBQUM7S0FDdEI7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFLFNBQVM7U0FBRTtrQkFDeEM7OzhCQUNFLDhEQUFDRixLQUFHO29CQUFDRyxTQUFTLEVBQUMsb0NBQXFDOzhCQUNsRCw0RUFBQ0MsSUFBRTtrQ0FBQyxhQUFXOzs7Ozs2QkFBSzs7Ozs7eUJBQ2hCOzhCQUNOLDhEQUFDSixLQUFHO29CQUFDRyxTQUFTLEVBQUMsTUFBTTs7c0NBQ25CLDhEQUFDNUMsK0NBQUk7NEJBQUM4QyxTQUFTOzRCQUFDQyxJQUFJOzRCQUFDQyxPQUFPLEVBQUUsQ0FBQzs0QkFBRUMsYUFBYSxFQUFFLENBQUM7NEJBQUVDLFVBQVUsRUFBRSxDQUFDO3NDQUM3RDVDLFdBQVcsSUFDVkEsV0FBVyxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFaUMsS0FBSyxFQUFLOztnQ0FDL0IscUJBQ0UsOERBQUNuRCwrQ0FBSTtvQ0FBQytDLElBQUk7b0NBQUNLLEVBQUUsRUFBRSxDQUFDO29DQUFFQyxFQUFFLEVBQUUsQ0FBQzs4Q0FDckIsNEVBQUN4RCwrQ0FBSTt3Q0FDSHlELEVBQUUsRUFBRTs0Q0FBRUMsUUFBUSxFQUFFLEdBQUc7NENBQUVDLE9BQU8sRUFBRSxDQUFDO3lDQUFFO3dDQUNqQ0MsT0FBTyxFQUFFO21EQUNQakMsYUFBYSxDQUFDTixJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFRixJQUFJLENBQUNHLEVBQUUsQ0FBQ0wsT0FBTyxDQUFDO3lDQUFBO2tEQUd2RCw0RUFBQ2pCLHlEQUFjOzs4REFDYiw4REFBQ0Qsb0RBQVM7b0RBQ1I0RCxTQUFTLEVBQUMsS0FBSztvREFDZkMsR0FBRyxFQUFFekMsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxJQUFJLENBQUUwQyxLQUFLO29EQUNoQkMsTUFBTSxFQUFDLEtBQUs7b0RBQ1pDLEtBQUssRUFBRTVDLE9BQUFBLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBSSxDQUFFNkMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBVyxHQUF6QjdDLEtBQUFBLENBQXlCLE9BQVQ4QyxTQUFTOzs7Ozt5REFDaEM7OERBQ0YsOERBQUMvRCxzREFBVztvREFDVnFELEVBQUUsRUFBRTt3REFDRlcsU0FBUyxFQUFFLE1BQU07d0RBQ2pCQyxPQUFPLEVBQUUsTUFBTTt3REFDZkMsY0FBYyxFQUFFLFFBQVE7cURBQ3pCOzhEQUVBakQsSUFBSSxDQUFDSyxVQUFVLGtCQUFJLDhEQUFDcEIsZ0VBQVE7Ozs7NkRBQUc7Ozs7O3lEQUNwQjs7Ozs7O2lEQUNDOzs7Ozs2Q0FDWjttQ0F4QnFCZ0QsS0FBSzs7Ozt5Q0F5QjVCLENBQ1A7NkJBQ0gsQ0FBQzs7Ozs7aUNBQ0M7c0NBQ1AsOERBQUNqRCxpREFBTTs0QkFBQ3VELE9BQU8sRUFBRWxCLHFCQUFxQjtzQ0FBRSxrQkFBZ0I7Ozs7O2lDQUFTOzs7Ozs7eUJBQzdEOzt3QkFDTDs7Ozs7YUFDQyxDQUNOO0NBQ0gsQ0FBQztHQWhJV25DLFdBQVc7O1FBTUVULDZEQUFZOzs7QUFOekJTLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZnRzQ29udGVudC5qcz8zOGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWYXVsdERhdGEgfSBmcm9tICcuLi9ob29rcy91c2VWYXVsdERhdGEnO1xuaW1wb3J0IHsgcGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMgfSBmcm9tICcuLi91dGlscy9wYXJzZURlcG9zaXRDb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25BcmVhLFxuICBHcmlkLFxuICBDYXJkQ29udGVudCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRG9uZSc7XG5cbmV4cG9ydCBjb25zdCBOZnRzQ29udGVudCA9ICh7IGNhcmRzIH0pID0+IHtcbiAgY29uc3QgW2NhcmRzVG9TaG93LCBzZXRDYXJkc1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBOZnRzQ29udGVudCB+IGNhcmRzVG9TaG93JywgY2FyZHNUb1Nob3cpO1xuXG4gIGNvbnN0IFtjYXJkc1RvRGVwb3NpdCwgc2V0Q2FyZHNUb0RlcG9zaXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IHN0YXRlLCBzZW5kIH0gPSB1c2VWYXVsdERhdGEoKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IE5mdHNDb250ZW50IH4gc3RhdGUnLCBzdGF0ZSk7XG5cbiAgY29uc3QgcGFyc2VOZnRzID0gKGNhcmRzLCBjb250cmFjdEFkZHJlc3MsIHRva2VuSWQpID0+IHtcbiAgICByZXR1cm4gY2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNhcmQuY29udHJhY3QuYWRkcmVzcyA9PT0gY29udHJhY3RBZGRyZXNzICYmXG4gICAgICAgIGNhcmQuaWQudG9rZW5JZCA9PT0gdG9rZW5JZFxuICAgICAgKSB7XG4gICAgICAgIHNldENhcmRzVG9EZXBvc2l0KChwcmV2U3RhdGUpID0+IFtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgeyBjb250cmFjdDogY2FyZC5jb250cmFjdC5hZGRyZXNzLCBpZDogY2FyZC5pZC50b2tlbklkIH0sXG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4geyAuLi5jYXJkLCBpc1NlbGVjdGVkOiB0cnVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FyZDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKGNvbnRyYWN0QWRkcmVzcywgdG9rZW5JZCkgPT4ge1xuICAgIHNldENhcmRzVG9TaG93KHBhcnNlTmZ0cyhjYXJkc1RvU2hvdywgY29udHJhY3RBZGRyZXNzLCB0b2tlbklkKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ2FyZHMgPSAoY2FyZHMpID0+IHtcbiAgICBjb25zdCBjYXJkc1RvUmV0dXJuMiA9IGNhcmRzLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cikgPT4ge1xuICAgICAgICBpZiAoYWNjLmluY2x1ZGVzKGN1ci5jb250cmFjdCkgJiYgYWNjLmluY2x1ZGVzKGN1ci5pZCkpIHtcbiAgICAgICAgICBjb25zdCBjYXJkVG9SZW1vdmUgPSBhY2MuZmluZEluZGV4KFxuICAgICAgICAgICAgKGVsKSA9PlxuICAgICAgICAgICAgICBlbC5jb250cmFjdC5hZGRyZXNzID09PSBjdXIuY29udHJhY3QgJiYgZWwuaWQudG9rZW5JZCA9PT0gY3VyLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIFtjYXJkc1RvU2hvd11cbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coJ/CfmoAgfiByZW1vdmVDYXJkcyB+IGNhcmRzVG9SZXR1cm4yJywgY2FyZHNUb1JldHVybjIpO1xuXG4gICAgY29uc3QgY2FyZHNUb1JldHVybiA9IGNhcmRzVG9TaG93LmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ/CfmoAgfiByZW1vdmVDYXJkcyB+IGNhcmRzJywgY2FyZHMpO1xuICAgICAgY29uc29sZS5sb2coJ/CfmoAgfiBjYXJkc1RvUmV0dXJuIH4gY2FyZCcsIGNhcmQpO1xuICAgICAgaWYgKFxuICAgICAgICAhY2FyZHMuaW5jbHVkZXMoY2FyZC5jb250cmFjdC5hZGRyZXNzKSAmJlxuICAgICAgICAhY2FyZHMuaW5jbHVkZXMoY2FyZC5pZC50b2tlbklkKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUnKTtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygn8J+agCB+IHJlbW92ZUNhcmRzIH4gY2FyZHNUb1JldHVybicsIGNhcmRzVG9SZXR1cm4pO1xuXG4gICAgcmV0dXJuIGNhcmRzVG9SZXR1cm4yO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gJ1N1Y2Nlc3MnKSB7XG4gICAgICBzZXRDYXJkc1RvU2hvdyhyZW1vdmVDYXJkcyhjYXJkc1RvRGVwb3NpdCkpO1xuICAgIH1cbiAgfSwgW3N0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FyZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcnNlZENhcmRzID0gY2FyZHMubWFwKChjYXJkKSA9PiAoeyAuLi5jYXJkLCBpc1NlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgICByZXR1cm4gc2V0Q2FyZHNUb1Nob3cocGFyc2VkQ2FyZHMpO1xuICAgIH1cbiAgfSwgW2NhcmRzXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZGluZ0RlcG9zaXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZERlcG9zaXRzID0gcGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMoY2FyZHNUb0RlcG9zaXQpO1xuICAgIHNlbmQocGFyc2VkRGVwb3NpdHMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyB9fT5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LTEwICB0ZXh0LTZ4bCc+XG4gICAgICAgICAgPGgxPllvdXIgV2FsbGV0PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTE2Jz5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBzcGFjaW5nPXsyfSBjb2x1bW5TcGFjaW5nPXszfSByb3dTcGFjaW5nPXszfT5cbiAgICAgICAgICAgIHtjYXJkc1RvU2hvdyAmJlxuICAgICAgICAgICAgICBjYXJkc1RvU2hvdy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXszfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtYXhXaWR0aDogMzQ1LCBwYWRkaW5nOiAyIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2soY2FyZC5jb250cmFjdC5hZGRyZXNzLCBjYXJkLmlkLnRva2VuSWQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjYXJkPy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtjYXJkPy5tZWRpYVswXT8udGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzYwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmlzU2VsZWN0ZWQgJiYgPERvbmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2VuZGluZ0RlcG9zaXRzfT5DbGljayBUbyBEZXBvc2l0PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVmF1bHREYXRhIiwicGFyc2VEZXBvc2l0Q29sbGVjdGlvbnMiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiQ2FyZEFjdGlvbkFyZWEiLCJHcmlkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJEb25lSWNvbiIsIk5mdHNDb250ZW50IiwiY2FyZHMiLCJjYXJkc1RvU2hvdyIsInNldENhcmRzVG9TaG93IiwiY29uc29sZSIsImxvZyIsImNhcmRzVG9EZXBvc2l0Iiwic2V0Q2FyZHNUb0RlcG9zaXQiLCJzdGF0ZSIsInNlbmQiLCJwYXJzZU5mdHMiLCJjb250cmFjdEFkZHJlc3MiLCJ0b2tlbklkIiwibWFwIiwiY2FyZCIsImNvbnRyYWN0IiwiYWRkcmVzcyIsImlkIiwicHJldlN0YXRlIiwiaXNTZWxlY3RlZCIsImhhbmRsZU9uQ2xpY2siLCJyZW1vdmVDYXJkcyIsImNhcmRzVG9SZXR1cm4yIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiaW5jbHVkZXMiLCJjYXJkVG9SZW1vdmUiLCJmaW5kSW5kZXgiLCJlbCIsImNhcmRzVG9SZXR1cm4iLCJmaWx0ZXIiLCJzdGF0dXMiLCJsZW5ndGgiLCJwYXJzZWRDYXJkcyIsImhhbmRsZVNlbmRpbmdEZXBvc2l0cyIsInBhcnNlZERlcG9zaXRzIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJoMSIsImNvbnRhaW5lciIsIml0ZW0iLCJzcGFjaW5nIiwiY29sdW1uU3BhY2luZyIsInJvd1NwYWNpbmciLCJpbmRleCIsInhzIiwibWQiLCJzeCIsIm1heFdpZHRoIiwicGFkZGluZyIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsImltYWdlIiwibWVkaWEiLCJ0aHVtYm5haWwiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NftsContent.js\n"));

/***/ })

});