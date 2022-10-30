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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auction\": function() { return /* binding */ Auction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMissingToSale */ \"./hooks/useMissingToSale.js\");\n/* harmony import */ var _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSaleStarted */ \"./hooks/useSaleStarted.js\");\n/* harmony import */ var _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentPrice */ \"./hooks/useCurrentPrice.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Auction = function() {\n    _s();\n    var missing = (0,_hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale)().missing;\n    var isSaleStarted = (0,_hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted)().isSaleStarted;\n    var ref = (0,_hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice)(), currentPrice = ref.currentPrice, saleStartTime = ref.saleStartTime, saleDuration = ref.saleDuration;\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ saleDuration\", saleDuration);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ saleStartTime\", saleStartTime);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ currentPrice\", currentPrice);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ isSaleStarted\", isSaleStarted);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ missing\", missing);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        style: {\n            backgroundColor: \"#fff\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex text-white justify-center text-2xl mt-12 mb-10\",\n                children: \"WELCOME TO THE AUCTION\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/remint_framed.png\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center align-center\",\n                    children: !isSaleStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"NFTS LEFT FOR THE NEXT REMINT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: missing\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true) : \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Auction, \"Kj2c6ywFu5d/TCkNdPDxUnAHWjg=\", false, function() {\n    return [\n        _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale,\n        _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted,\n        _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice\n    ];\n});\n_c = Auction;\nvar _c;\n$RefreshReg$(_c, \"Auction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1Y3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQVFSO0FBQ3NDO0FBQ0o7QUFDRTtBQUVwRCxJQUFNUyxPQUFPLEdBQUcsV0FBTTs7SUFDM0IsSUFBTSxPQUFTLEdBQUtILHlFQUFnQixFQUFFLENBQTlCSSxPQUFPO0lBQ2YsSUFBTSxhQUFlLEdBQUtILHFFQUFjLEVBQUUsQ0FBbENJLGFBQWE7SUFDckIsSUFBc0RILEdBQWlCLEdBQWpCQSx1RUFBZSxFQUFFLEVBQS9ESSxZQUFZLEdBQWtDSixHQUFpQixDQUEvREksWUFBWSxFQUFFQyxhQUFhLEdBQW1CTCxHQUFpQixDQUFqREssYUFBYSxFQUFFQyxZQUFZLEdBQUtOLEdBQWlCLENBQWxDTSxZQUFZO0lBRWpEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1Q0FBNEIsRUFBRUYsWUFBWSxDQUFDLENBQUM7SUFFeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdDQUE2QixFQUFFSCxhQUFhLENBQUMsQ0FBQztJQUUxREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQTRCLEVBQUVKLFlBQVksQ0FBQyxDQUFDO0lBRXhERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3Q0FBNkIsRUFBRUwsYUFBYSxDQUFDLENBQUM7SUFFMURJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtDQUF1QixFQUFFTixPQUFPLENBQUMsQ0FBQztJQUU5QyxxQkFDRSw4REFBQ08sS0FBRztRQUNGQyxTQUFTLEVBQUMsNEJBQTZCO1FBQ3ZDQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFLE1BQU07U0FBRTs7MEJBRWxDLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscURBQXFEOzBCQUFDLHdCQUVyRTs7Ozs7cUJBQU07MEJBRU4sOERBQUNsQixtREFBSztnQkFBQ3FCLEdBQUcsRUFBQyxvQkFBb0I7Z0JBQUNDLEtBQUssRUFBQyxNQUFNO2dCQUFDQyxNQUFNLEVBQUMsTUFBTTs7Ozs7cUJBQUc7MEJBRTdELDhEQUFDdEIsK0NBQUk7MEJBQ0gsNEVBQUNnQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzhCQUN2RCxDQUFDUCxhQUFhLGlCQUNiOzswQ0FDRSw4REFBQ00sS0FBRzswQ0FBQywrQkFBNkI7Ozs7O3FDQUFNOzBDQUN4Qyw4REFBQ0EsS0FBRzswQ0FBRVAsT0FBTzs7Ozs7cUNBQU87O29DQUNuQixHQUVILEVBQUU7Ozs7O3lCQUVBOzs7OztxQkFLRDs7Ozs7O2FBQ0gsQ0FDTjtDQUNILENBQUM7R0E1Q1dELE9BQU87O1FBQ0VILHFFQUFnQjtRQUNWQyxpRUFBYztRQUNjQyxtRUFBZTs7O0FBSDFEQyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXVjdGlvbi5qcz84NjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQWN0aW9uQXJlYSxcbiAgR3JpZCxcbiAgQ2FyZENvbnRlbnQsXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlTWlzc2luZ1RvU2FsZSB9IGZyb20gJy4uL2hvb2tzL3VzZU1pc3NpbmdUb1NhbGUnO1xuaW1wb3J0IHsgdXNlU2FsZVN0YXJ0ZWQgfSBmcm9tICcuLi9ob29rcy91c2VTYWxlU3RhcnRlZCc7XG5pbXBvcnQgeyB1c2VDdXJyZW50UHJpY2UgfSBmcm9tICcuLi9ob29rcy91c2VDdXJyZW50UHJpY2UnO1xuXG5leHBvcnQgY29uc3QgQXVjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBtaXNzaW5nIH0gPSB1c2VNaXNzaW5nVG9TYWxlKCk7XG4gIGNvbnN0IHsgaXNTYWxlU3RhcnRlZCB9ID0gdXNlU2FsZVN0YXJ0ZWQoKTtcbiAgY29uc3QgeyBjdXJyZW50UHJpY2UsIHNhbGVTdGFydFRpbWUsIHNhbGVEdXJhdGlvbiB9ID0gdXNlQ3VycmVudFByaWNlKCk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gc2FsZUR1cmF0aW9uJywgc2FsZUR1cmF0aW9uKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBzYWxlU3RhcnRUaW1lJywgc2FsZVN0YXJ0VGltZSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gY3VycmVudFByaWNlJywgY3VycmVudFByaWNlKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBpc1NhbGVTdGFydGVkJywgaXNTYWxlU3RhcnRlZCk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gbWlzc2luZycsIG1pc3NpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXInXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgbXQtMTIgbWItMTAnPlxuICAgICAgICBXRUxDT01FIFRPIFRIRSBBVUNUSU9OXG4gICAgICA8L2Rpdj5cblxuICAgICAgPEltYWdlIHNyYz0nL3JlbWludF9mcmFtZWQucG5nJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyAvPlxuXG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyJz5cbiAgICAgICAgICB7IWlzU2FsZVN0YXJ0ZWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2Pk5GVFMgTEVGVCBGT1IgVEhFIE5FWFQgUkVNSU5UPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e21pc3Npbmd9PC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgIDxDYXJkTWVkaWEgY29tcG9uZW50PSdpbWcnIGhlaWdodD0nMTAwJyBpbWFnZT0nL3JlbWludF9mcmFtZWQucG5nJyAvPlxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPiAqL31cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiQ2FyZEFjdGlvbkFyZWEiLCJHcmlkIiwiQ2FyZENvbnRlbnQiLCJ1c2VNaXNzaW5nVG9TYWxlIiwidXNlU2FsZVN0YXJ0ZWQiLCJ1c2VDdXJyZW50UHJpY2UiLCJBdWN0aW9uIiwibWlzc2luZyIsImlzU2FsZVN0YXJ0ZWQiLCJjdXJyZW50UHJpY2UiLCJzYWxlU3RhcnRUaW1lIiwic2FsZUR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auction.js\n"));

/***/ })

});