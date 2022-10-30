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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auction\": function() { return /* binding */ Auction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMissingToSale */ \"./hooks/useMissingToSale.js\");\n/* harmony import */ var _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSaleStarted */ \"./hooks/useSaleStarted.js\");\n/* harmony import */ var _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentPrice */ \"./hooks/useCurrentPrice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Auction = function() {\n    _s();\n    var missing = (0,_hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale)().missing;\n    var isSaleStarted = (0,_hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted)().isSaleStarted;\n    var ref = (0,_hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice)(), currentPrice = ref.currentPrice, saleTimeLeft = ref.saleTimeLeft;\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ saleTimeLeft\", saleTimeLeft);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ currentPrice\", currentPrice);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ isSaleStarted\", isSaleStarted);\n    console.log(\"\\uD83D\\uDE80 ~ Auction ~ missing\", missing);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (isSaleStarted && saleTimeLeft) {\n            var formatTime = function(date) {\n                var date = new Date();\n                var text = date.toString();\n                console.log(text);\n            };\n        }\n    }, [\n        isSaleStarted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        style: {\n            backgroundColor: \"#fff\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex text-white justify-center text-2xl mt-12 mb-10\",\n                children: \"WELCOME TO THE AUCTION\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/remint_framed.png\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center align-center\",\n                    children: !isSaleStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"NFTS LEFT FOR THE NEXT REMINT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: missing\n                            }, void 0, false, {\n                                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Current Price: \",\n                                currentPrice,\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diogosousa/dev/ethHackaton22/remint/frontend/components/Auction.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Auction, \"uL7PX3Ws/TJ3rXfNUPggq+h1Kgs=\", false, function() {\n    return [\n        _hooks_useMissingToSale__WEBPACK_IMPORTED_MODULE_2__.useMissingToSale,\n        _hooks_useSaleStarted__WEBPACK_IMPORTED_MODULE_3__.useSaleStarted,\n        _hooks_useCurrentPrice__WEBPACK_IMPORTED_MODULE_4__.useCurrentPrice\n    ];\n});\n_c = Auction;\nvar _c;\n$RefreshReg$(_c, \"Auction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1Y3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQStCO0FBUVI7QUFDc0M7QUFDSjtBQUNFO0FBQ3pCO0FBRTNCLElBQU1VLE9BQU8sR0FBRyxXQUFNOztJQUMzQixJQUFNLE9BQVMsR0FBS0oseUVBQWdCLEVBQUUsQ0FBOUJLLE9BQU87SUFDZixJQUFNLGFBQWUsR0FBS0oscUVBQWMsRUFBRSxDQUFsQ0ssYUFBYTtJQUNyQixJQUF1Q0osR0FBaUIsR0FBakJBLHVFQUFlLEVBQUUsRUFBaERLLFlBQVksR0FBbUJMLEdBQWlCLENBQWhESyxZQUFZLEVBQUVDLFlBQVksR0FBS04sR0FBaUIsQ0FBbENNLFlBQVk7SUFFbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVDQUE0QixFQUFFRixZQUFZLENBQUMsQ0FBQztJQUV4REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQTRCLEVBQUVILFlBQVksQ0FBQyxDQUFDO0lBRXhERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3Q0FBNkIsRUFBRUosYUFBYSxDQUFDLENBQUM7SUFFMURHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtDQUF1QixFQUFFTCxPQUFPLENBQUMsQ0FBQztJQUU5Q0YsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUcsYUFBYSxJQUFJRSxZQUFZLEVBQUU7WUFDakMsSUFBTUcsVUFBVSxHQUFHLFNBQUNDLElBQUksRUFBSztnQkFDM0IsSUFBTUEsSUFBSSxHQUFHLElBQUlDLElBQUksRUFBRTtnQkFDdkIsSUFBSUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFFBQVEsRUFBRTtnQkFDMUJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQzthQUNuQjtTQUNGO0tBQ0YsRUFBRTtRQUFDUixhQUFhO0tBQUMsQ0FBQyxDQUFDO0lBRXBCLHFCQUNFLDhEQUFDVSxLQUFHO1FBQ0ZDLFNBQVMsRUFBQyw0QkFBNkI7UUFDdkNDLEtBQUssRUFBRTtZQUFFQyxlQUFlLEVBQUUsTUFBTTtTQUFFOzswQkFFbEMsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxREFBcUQ7MEJBQUMsd0JBRXJFOzs7OztxQkFBTTswQkFFTiw4REFBQ3ZCLG1EQUFLO2dCQUFDMEIsR0FBRyxFQUFDLG9CQUFvQjtnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLE1BQU0sRUFBQyxNQUFNOzs7OztxQkFBRzswQkFFN0QsOERBQUMzQiwrQ0FBSTswQkFDSCw0RUFBQ3FCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7OEJBQ3ZELENBQUNYLGFBQWEsaUJBQ2I7OzBDQUNFLDhEQUFDVSxLQUFHOzBDQUFDLCtCQUE2Qjs7Ozs7cUNBQU07MENBQ3hDLDhEQUFDQSxLQUFHOzBDQUFFWCxPQUFPOzs7OztxQ0FBTzs7b0NBQ25CLGlCQUVILDhEQUFDVyxLQUFHO2tDQUNGLDRFQUFDQSxLQUFHOztnQ0FBQyxpQkFBZTtnQ0FBQ1QsWUFBWTtnQ0FBQyxNQUFJOzs7Ozs7aUNBQU07Ozs7OzZCQUV4Qzs7Ozs7eUJBRUo7Ozs7O3FCQUtEOzs7Ozs7YUFDSCxDQUNOO0NBQ0gsQ0FBQztHQXZEV0gsT0FBTzs7UUFDRUoscUVBQWdCO1FBQ1ZDLGlFQUFjO1FBQ0RDLG1FQUFlOzs7QUFIM0NFLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdWN0aW9uLmpzPzg2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25BcmVhLFxuICBHcmlkLFxuICBDYXJkQ29udGVudCxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VNaXNzaW5nVG9TYWxlIH0gZnJvbSAnLi4vaG9va3MvdXNlTWlzc2luZ1RvU2FsZSc7XG5pbXBvcnQgeyB1c2VTYWxlU3RhcnRlZCB9IGZyb20gJy4uL2hvb2tzL3VzZVNhbGVTdGFydGVkJztcbmltcG9ydCB7IHVzZUN1cnJlbnRQcmljZSB9IGZyb20gJy4uL2hvb2tzL3VzZUN1cnJlbnRQcmljZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBBdWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IG1pc3NpbmcgfSA9IHVzZU1pc3NpbmdUb1NhbGUoKTtcbiAgY29uc3QgeyBpc1NhbGVTdGFydGVkIH0gPSB1c2VTYWxlU3RhcnRlZCgpO1xuICBjb25zdCB7IGN1cnJlbnRQcmljZSwgc2FsZVRpbWVMZWZ0IH0gPSB1c2VDdXJyZW50UHJpY2UoKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IEF1Y3Rpb24gfiBzYWxlVGltZUxlZnQnLCBzYWxlVGltZUxlZnQpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IGN1cnJlbnRQcmljZScsIGN1cnJlbnRQcmljZSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiBBdWN0aW9uIH4gaXNTYWxlU3RhcnRlZCcsIGlzU2FsZVN0YXJ0ZWQpO1xuXG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gQXVjdGlvbiB+IG1pc3NpbmcnLCBtaXNzaW5nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1NhbGVTdGFydGVkICYmIHNhbGVUaW1lTGVmdCkge1xuICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGV4dCA9IGRhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2lzU2FsZVN0YXJ0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyJ1xuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB0ZXh0LXdoaXRlIGp1c3RpZnktY2VudGVyIHRleHQtMnhsIG10LTEyIG1iLTEwJz5cbiAgICAgICAgV0VMQ09NRSBUTyBUSEUgQVVDVElPTlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbWFnZSBzcmM9Jy9yZW1pbnRfZnJhbWVkLnBuZycgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgLz5cblxuICAgICAgPENhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlcic+XG4gICAgICAgICAgeyFpc1NhbGVTdGFydGVkID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5ORlRTIExFRlQgRk9SIFRIRSBORVhUIFJFTUlOVDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PnttaXNzaW5nfTwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+Q3VycmVudCBQcmljZToge2N1cnJlbnRQcmljZX0gRVRIPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2PkF1Y3Rpb24gRW5kcyBCeToge3NhbGVUaW1lTGVmdH0gPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICA8Q2FyZE1lZGlhIGNvbXBvbmVudD0naW1nJyBoZWlnaHQ9JzEwMCcgaW1hZ2U9Jy9yZW1pbnRfZnJhbWVkLnBuZycgLz5cbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT4gKi99XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRBY3Rpb25BcmVhIiwiR3JpZCIsIkNhcmRDb250ZW50IiwidXNlTWlzc2luZ1RvU2FsZSIsInVzZVNhbGVTdGFydGVkIiwidXNlQ3VycmVudFByaWNlIiwidXNlRWZmZWN0IiwiQXVjdGlvbiIsIm1pc3NpbmciLCJpc1NhbGVTdGFydGVkIiwiY3VycmVudFByaWNlIiwic2FsZVRpbWVMZWZ0IiwiY29uc29sZSIsImxvZyIsImZvcm1hdFRpbWUiLCJkYXRlIiwiRGF0ZSIsInRleHQiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auction.js\n"));

/***/ })

});