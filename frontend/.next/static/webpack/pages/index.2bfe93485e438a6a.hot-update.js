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

/***/ "./components/Auction.js":
/*!*******************************!*\
  !*** ./components/Auction.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auction\": function() { return /* binding */ Auction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMissingToSale */ \"./hooks/useMissingToSale.js\");\n/* harmony import */ var _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSaleStarted */ \"./hooks/useSaleStarted.js\");\n/* harmony import */ var _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentPrice */ \"./hooks/useCurrentPrice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useBuyNow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useBuyNow */ \"./hooks/useBuyNow.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Auction = function() {\n    _s();\n    var missing = (0,_hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale)().missing;\n    var ref = (0,_hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted)(), isSaleStarted = ref.isSaleStarted, isSaleEnded = ref.isSaleEnded;\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ isSaleEnded\", isSaleEnded);\n    var ref1 = (0,_hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice)(), currentPrice = ref1.currentPrice, saleTimeLeft = ref1.saleTimeLeft;\n    var ref2 = (0,_hooks_useBuyNow__WEBPACK_IMPORTED_MODULE_6__.useBuyNow)(), send = ref2.send, state = ref2.state;\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ state\", state);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(), convertedTime = ref3[0], setConvertedTime = ref3[1];\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ saleTimeLeft\", saleTimeLeft);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ currentPrice\", currentPrice);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ isSaleStarted\", isSaleStarted);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ missing\", missing);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (isSaleStarted) {\n            var date = new Date();\n            var text = date.toString();\n            var searchTerm = \"2022\";\n            var indexOfDate = text.indexOf(searchTerm);\n            var newText = text.slice(4, 24);\n            setConvertedTime(newText);\n        }\n    }, [\n        isSaleStarted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        style: {\n            backgroundColor: \"#fff\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex text-white justify-center text-2xl mt-12 mb-10\",\n                children: \"WELCOME TO THE AUCTION\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            !isSaleStarted && !isSaleEnded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/frame.png\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/remint_framed.png\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: isSaleStarted && !isSaleEnded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center \",\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Current Price: \",\n                                currentPrice,\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Auction Ends By: \",\n                                convertedTime,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            variant: \"contained\",\n                            onClick: function() {\n                                return send(currentPrice);\n                            },\n                            children: \"Buy Now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center \",\n                    style: {\n                        color: \"black\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"NFTS LEFT FOR THE NEXT REMINT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: missing\n                        }, void 0, false, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(Auction, \"UqTU346AHMxS/n6dZA7LgNK3W3I=\", false, function() {\n    return [\n        _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale,\n        _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted,\n        _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice,\n        _hooks_useBuyNow__WEBPACK_IMPORTED_MODULE_6__.useBuyNow\n    ];\n});\n_c = Auction;\nvar _c;\n$RefreshReg$(_c, \"Auction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUN0REMsS0FBSyxFQUFFO3dCQUFFSyxLQUFLLEVBQUUsT0FBTztxQkFBRTs7c0NBRXpCLDhEQUFDUCxLQUFHOztnQ0FBQyxpQkFBZTtnQ0FBQ2YsWUFBWTtnQ0FBQyxNQUFJOzs7Ozs7aUNBQU07c0NBQzVDLDhEQUFDZSxLQUFHOztnQ0FBQyxtQkFBaUI7Z0NBQUNYLGFBQWE7Z0NBQUMsR0FBQzs7Ozs7O2lDQUFNO3NDQUM1Qyw4REFBQ2pCLGlEQUFNOzRCQUFDb0MsT0FBTyxFQUFDLFdBQVc7NEJBQUNDLE9BQU8sRUFBRTt1Q0FBTXRCLElBQUksQ0FBQ0YsWUFBWSxDQUFDOzZCQUFBO3NDQUFFLFNBRS9EOzs7OztpQ0FBUzs7Ozs7O3lCQUNMLGlCQUVOLDhEQUFDZSxLQUFHO29CQUNGQyxTQUFTLEVBQUMsNENBQTRDO29CQUN0REMsS0FBSyxFQUFFO3dCQUFFSyxLQUFLLEVBQUUsT0FBTztxQkFBRTs7c0NBRXpCLDhEQUFDUCxLQUFHO3NDQUFDLCtCQUE2Qjs7Ozs7aUNBQU07c0NBQ3hDLDhEQUFDQSxLQUFHO3NDQUFFcEIsT0FBTzs7Ozs7aUNBQU87Ozs7Ozt5QkFDaEI7Ozs7O3FCQUVKOzs7Ozs7YUFLRixDQUNOO0NBQ0gsQ0FBQztHQTNFV0QsT0FBTzs7UUFDRU4scUVBQWdCO1FBQ0dDLGlFQUFjO1FBSWRDLG1FQUFlO1FBQzlCRyx1REFBUzs7O0FBUHRCQyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXVjdGlvbi5qcz84NjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQWN0aW9uQXJlYSxcbiAgR3JpZCxcbiAgQ2FyZENvbnRlbnQsXG4gIEJ1dHRvbixcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VNaXNzaW5nVG9TYWxlIH0gZnJvbSAnLi4vaG9va3MvdXNlTWlzc2luZ1RvU2FsZSc7XG5pbXBvcnQgeyB1c2VTYWxlU3RhcnRlZCB9IGZyb20gJy4uL2hvb2tzL3VzZVNhbGVTdGFydGVkJztcbmltcG9ydCB7IHVzZUN1cnJlbnRQcmljZSB9IGZyb20gJy4uL2hvb2tzL3VzZUN1cnJlbnRQcmljZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQnV5Tm93IH0gZnJvbSAnLi4vaG9va3MvdXNlQnV5Tm93JztcblxuZXhwb3J0IGNvbnN0IEF1Y3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWlzc2luZyB9ID0gdXNlTWlzc2luZ1RvU2FsZSgpO1xuICBjb25zdCB7IGlzU2FsZVN0YXJ0ZWQsIGlzU2FsZUVuZGVkIH0gPSB1c2VTYWxlU3RhcnRlZCgpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IGlzU2FsZUVuZGVkJywgaXNTYWxlRW5kZWQpO1xuXG4gIGNvbnN0IHsgY3VycmVudFByaWNlLCBzYWxlVGltZUxlZnQgfSA9IHVzZUN1cnJlbnRQcmljZSgpO1xuICBjb25zdCB7IHNlbmQsIHN0YXRlIH0gPSB1c2VCdXlOb3coKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBzdGF0ZScsIHN0YXRlKTtcblxuICBjb25zdCBbY29udmVydGVkVGltZSwgc2V0Q29udmVydGVkVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBzYWxlVGltZUxlZnQnLCBzYWxlVGltZUxlZnQpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IGN1cnJlbnRQcmljZScsIGN1cnJlbnRQcmljZSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gaXNTYWxlU3RhcnRlZCcsIGlzU2FsZVN0YXJ0ZWQpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IG1pc3NpbmcnLCBtaXNzaW5nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1NhbGVTdGFydGVkKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCB0ZXh0ID0gZGF0ZS50b1N0cmluZygpO1xuXG4gICAgICBjb25zdCBzZWFyY2hUZXJtID0gJzIwMjInO1xuICAgICAgY29uc3QgaW5kZXhPZkRhdGUgPSB0ZXh0LmluZGV4T2Yoc2VhcmNoVGVybSk7XG4gICAgICBjb25zdCBuZXdUZXh0ID0gdGV4dC5zbGljZSg0LCAyNCk7XG5cbiAgICAgIHNldENvbnZlcnRlZFRpbWUobmV3VGV4dCk7XG4gICAgfVxuICB9LCBbaXNTYWxlU3RhcnRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXInXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgbXQtMTIgbWItMTAnPlxuICAgICAgICBXRUxDT01FIFRPIFRIRSBBVUNUSU9OXG4gICAgICA8L2Rpdj5cbiAgICAgIHshaXNTYWxlU3RhcnRlZCAmJiAhaXNTYWxlRW5kZWQgPyAoXG4gICAgICAgIDxJbWFnZSBzcmM9Jy9mcmFtZS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIC8+XG4gICAgICApIDogKFxuICAgICAgICA8SW1hZ2Ugc3JjPScvcmVtaW50X2ZyYW1lZC5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICB7aXNTYWxlU3RhcnRlZCAmJiAhaXNTYWxlRW5kZWQgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAnXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+Q3VycmVudCBQcmljZToge2N1cnJlbnRQcmljZX0gRVRIPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkF1Y3Rpb24gRW5kcyBCeToge2NvbnZlcnRlZFRpbWV9IDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9eygpID0+IHNlbmQoY3VycmVudFByaWNlKX0+XG4gICAgICAgICAgICAgIEJ1eSBOb3dcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJ1xuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2Pk5GVFMgTEVGVCBGT1IgVEhFIE5FWFQgUkVNSU5UPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnttaXNzaW5nfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9J2ltZycgaGVpZ2h0PScxMDAnIGltYWdlPScvcmVtaW50X2ZyYW1lZC5wbmcnIC8+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQWN0aW9uQXJlYSIsIkdyaWQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsInVzZU1pc3NpbmdUb1NhbGUiLCJ1c2VTYWxlU3RhcnRlZCIsInVzZUN1cnJlbnRQcmljZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQnV5Tm93IiwiQXVjdGlvbiIsIm1pc3NpbmciLCJpc1NhbGVTdGFydGVkIiwiaXNTYWxlRW5kZWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFByaWNlIiwic2FsZVRpbWVMZWZ0Iiwic2VuZCIsInN0YXRlIiwiY29udmVydGVkVGltZSIsInNldENvbnZlcnRlZFRpbWUiLCJkYXRlIiwiRGF0ZSIsInRleHQiLCJ0b1N0cmluZyIsInNlYXJjaFRlcm0iLCJpbmRleE9mRGF0ZSIsImluZGV4T2YiLCJuZXdUZXh0Iiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Auction.js\n"));

/***/ })

});