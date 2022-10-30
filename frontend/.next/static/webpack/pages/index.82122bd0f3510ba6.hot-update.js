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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auction\": function() { return /* binding */ Auction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMissingToSale */ \"./hooks/useMissingToSale.js\");\n/* harmony import */ var _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSaleStarted */ \"./hooks/useSaleStarted.js\");\n/* harmony import */ var _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentPrice */ \"./hooks/useCurrentPrice.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Auction = function() {\n    _s();\n    var missing = (0,_hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale)().missing;\n    var isSaleStarted = (0,_hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted)().isSaleStarted;\n    var ref = (0,_hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice)(), currentPrice = ref.currentPrice, saleTimeLeft = ref.saleTimeLeft;\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ saleTimeLeft\", saleTimeLeft);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ currentPrice\", currentPrice);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ isSaleStarted\", isSaleStarted);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ missing\", missing);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        style: {\n            backgroundColor: \"#fff\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex text-white justify-center text-2xl mt-12 mb-10\",\n                children: \"WELCOME TO THE AUCTION\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/remint_framed.png\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center align-center\",\n                    children: !isSaleStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"NFTS LEFT FOR THE NEXT REMINT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: missing\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Current Price: \",\n                                currentPrice,\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Auction, \"3ttpYhP8pYDOmYEHiB3H+762ac8=\", false, function() {\n    return [\n        _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale,\n        _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted,\n        _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice\n    ];\n});\n_c = Auction;\nvar _c;\n$RefreshReg$(_c, \"Auction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1Y3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQVFSO0FBQ3NDO0FBQ0o7QUFDRTtBQUVwRCxJQUFNUyxPQUFPLEdBQUcsV0FBTTs7SUFDM0IsSUFBTSxPQUFTLEdBQUtILHlFQUFnQixFQUFFLENBQTlCSSxPQUFPO0lBQ2YsSUFBTSxhQUFlLEdBQUtILHFFQUFjLEVBQUUsQ0FBbENJLGFBQWE7SUFDckIsSUFBdUNILEdBQWlCLEdBQWpCQSx1RUFBZSxFQUFFLEVBQWhESSxZQUFZLEdBQW1CSixHQUFpQixDQUFoREksWUFBWSxFQUFFQyxZQUFZLEdBQUtMLEdBQWlCLENBQWxDSyxZQUFZO0lBRWxDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1Q0FBNEIsRUFBRUYsWUFBWSxDQUFDLENBQUM7SUFFeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVDQUE0QixFQUFFSCxZQUFZLENBQUMsQ0FBQztJQUV4REUsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0NBQTZCLEVBQUVKLGFBQWEsQ0FBQyxDQUFDO0lBRTFERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBdUIsRUFBRUwsT0FBTyxDQUFDLENBQUM7SUFFOUMscUJBQ0UsOERBQUNNLEtBQUc7UUFDRkMsU0FBUyxFQUFDLDRCQUE2QjtRQUN2Q0MsS0FBSyxFQUFFO1lBQUVDLGVBQWUsRUFBRSxNQUFNO1NBQUU7OzBCQUVsQyw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFEQUFxRDswQkFBQyx3QkFFckU7Ozs7O3FCQUFNOzBCQUVOLDhEQUFDakIsbURBQUs7Z0JBQUNvQixHQUFHLEVBQUMsb0JBQW9CO2dCQUFDQyxLQUFLLEVBQUMsTUFBTTtnQkFBQ0MsTUFBTSxFQUFDLE1BQU07Ozs7O3FCQUFHOzBCQUU3RCw4REFBQ3JCLCtDQUFJOzBCQUNILDRFQUFDZSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzhCQUN2RCxDQUFDTixhQUFhLGlCQUNiOzswQ0FDRSw4REFBQ0ssS0FBRzswQ0FBQywrQkFBNkI7Ozs7O3FDQUFNOzBDQUN4Qyw4REFBQ0EsS0FBRzswQ0FBRU4sT0FBTzs7Ozs7cUNBQU87O29DQUNuQixpQkFFSCw4REFBQ00sS0FBRztrQ0FDRiw0RUFBQ0EsS0FBRzs7Z0NBQUMsaUJBQWU7Z0NBQUNKLFlBQVk7Z0NBQUMsTUFBSTs7Ozs7O2lDQUFNOzs7Ozs2QkFFeEM7Ozs7O3lCQUVKOzs7OztxQkFLRDs7Ozs7O2FBQ0gsQ0FDTjtDQUNILENBQUM7R0E3Q1dILE9BQU87O1FBQ0VILHFFQUFnQjtRQUNWQyxpRUFBYztRQUNEQyxtRUFBZTs7O0FBSDNDQyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXVjdGlvbi5qcz84NjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQWN0aW9uQXJlYSxcbiAgR3JpZCxcbiAgQ2FyZENvbnRlbnQsXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlTWlzc2luZ1RvU2FsZSB9IGZyb20gJy4uL2hvb2tzL3VzZU1pc3NpbmdUb1NhbGUnO1xuaW1wb3J0IHsgdXNlU2FsZVN0YXJ0ZWQgfSBmcm9tICcuLi9ob29rcy91c2VTYWxlU3RhcnRlZCc7XG5pbXBvcnQgeyB1c2VDdXJyZW50UHJpY2UgfSBmcm9tICcuLi9ob29rcy91c2VDdXJyZW50UHJpY2UnO1xuXG5leHBvcnQgY29uc3QgQXVjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBtaXNzaW5nIH0gPSB1c2VNaXNzaW5nVG9TYWxlKCk7XG4gIGNvbnN0IHsgaXNTYWxlU3RhcnRlZCB9ID0gdXNlU2FsZVN0YXJ0ZWQoKTtcbiAgY29uc3QgeyBjdXJyZW50UHJpY2UsIHNhbGVUaW1lTGVmdCB9ID0gdXNlQ3VycmVudFByaWNlKCk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gc2FsZVRpbWVMZWZ0Jywgc2FsZVRpbWVMZWZ0KTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBjdXJyZW50UHJpY2UnLCBjdXJyZW50UHJpY2UpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IGlzU2FsZVN0YXJ0ZWQnLCBpc1NhbGVTdGFydGVkKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBtaXNzaW5nJywgbWlzc2luZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgIGl0ZW1zLWNlbnRlcidcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYnIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCBtdC0xMiBtYi0xMCc+XG4gICAgICAgIFdFTENPTUUgVE8gVEhFIEFVQ1RJT05cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW1hZ2Ugc3JjPScvcmVtaW50X2ZyYW1lZC5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIC8+XG5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXInPlxuICAgICAgICAgIHshaXNTYWxlU3RhcnRlZCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXY+TkZUUyBMRUZUIEZPUiBUSEUgTkVYVCBSRU1JTlQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57bWlzc2luZ308L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PkN1cnJlbnQgUHJpY2U6IHtjdXJyZW50UHJpY2V9IEVUSDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdj5BdWN0aW9uIEVuZHMgQnk6IHtzYWxlVGltZUxlZnR9IDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9J2ltZycgaGVpZ2h0PScxMDAnIGltYWdlPScvcmVtaW50X2ZyYW1lZC5wbmcnIC8+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+ICovfVxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQWN0aW9uQXJlYSIsIkdyaWQiLCJDYXJkQ29udGVudCIsInVzZU1pc3NpbmdUb1NhbGUiLCJ1c2VTYWxlU3RhcnRlZCIsInVzZUN1cnJlbnRQcmljZSIsIkF1Y3Rpb24iLCJtaXNzaW5nIiwiaXNTYWxlU3RhcnRlZCIsImN1cnJlbnRQcmljZSIsInNhbGVUaW1lTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Auction.js\n"));

/***/ })

});