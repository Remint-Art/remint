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

/***/ "./hooks/useCurrentPrice.js":
/*!**********************************!*\
  !*** ./hooks/useCurrentPrice.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCurrentPrice\": function() { return /* binding */ useCurrentPrice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar VaultInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__);\nvar useCurrentPrice = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers)(), account = ref.account, library = ref.library;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentPrice = ref1[0], setCurrentPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), fireSend = ref2[0], setFireSend = ref2[1];\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(\"0xC006cC90F43dceb506f81Dc28b58dd9C618E6018\", VaultInterface, library);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!vaultContract || fireSend) {\n            return;\n        }\n        var getMissingToSale = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var currentPrice, convertedCurrentPrice;\n                return _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return vaultContract.currentPrice();\n                        case 2:\n                            currentPrice = _ctx.sent;\n                            console.log(\"\\uD83D\\uDE80 ~ getMissingToSale ~ currentPrice\", currentPrice);\n                            convertedCurrentPrice = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(currentPrice);\n                            console.log(\"\\uD83D\\uDE80 ~ getMissingToSale ~ convertedCurrentPrice\", convertedCurrentPrice);\n                            setCurrentPrice(convertedCurrentPrice);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getMissingToSale() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getMissingToSale();\n        setFireSend(true);\n    }, [\n        vaultContract\n    ]);\n    return {\n        currentPrice: currentPrice\n    };\n};\n_s(useCurrentPrice, \"4qqfKpC4W5hFl7n1nkgmUnAxals=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDdXJyZW50UHJpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDQTtBQUNzQjtBQUNOO0FBQ047QUFDbkQsSUFBTVMsY0FBYyxHQUFHLElBQUlSLG1EQUFlLENBQUNDLDRDQUFRLENBQUM7QUFFN0MsSUFBTVMsZUFBZSxHQUFHLFdBQU07O0lBQ25DLElBQTZCUCxHQUFXLEdBQVhBLHdEQUFTLEVBQUUsRUFBaENRLE9BQU8sR0FBY1IsR0FBVyxDQUFoQ1EsT0FBTyxFQUFFQyxPQUFPLEdBQUtULEdBQVcsQ0FBdkJTLE9BQU87SUFDeEIsSUFBd0NOLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ08sWUFBWSxHQUFxQlAsSUFBVSxHQUEvQixFQUFFUSxlQUFlLEdBQUlSLElBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q1MsUUFBUSxHQUFpQlQsSUFBZSxHQUFoQyxFQUFFVSxXQUFXLEdBQUlWLElBQWUsR0FBbkI7SUFFNUIsSUFBTVcsYUFBYSxHQUFHLElBQUlsQiw0Q0FBUSxDQUNoQyw0Q0FBNEMsRUFDNUNTLGNBQWMsRUFDZEksT0FBTyxDQUNSO0lBRURQLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ1ksYUFBYSxJQUFJRixRQUFRLEVBQUU7WUFDOUIsT0FBTztTQUNSO1FBRUQsSUFBTUcsZ0JBQWdCO3VCQUFHLHNRQUFZO29CQUM3QkwsWUFBWSxFQUlaTSxxQkFBcUI7Ozs7O21DQUpBRixhQUFhLENBQUNKLFlBQVksRUFBRTs7NEJBQWpEQSxZQUFZLFlBQXFDOzRCQUV2RE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0RBQXFDLEVBQUVSLFlBQVksQ0FBQyxDQUFDOzRCQUUzRE0scUJBQXFCLEdBQUdaLGlFQUFXLENBQUNNLFlBQVksQ0FBQyxDQUFDOzRCQUV4RE8sT0FBTyxDQUFDQyxHQUFHLENBQ1QseURBQThDLEVBQzlDRixxQkFBcUIsQ0FDdEIsQ0FBQzs0QkFFRkwsZUFBZSxDQUFDSyxxQkFBcUIsQ0FBQyxDQUFDOzs7Ozs7YUFDeEM7NEJBYktELGdCQUFnQjs7O1dBYXJCO1FBRURBLGdCQUFnQixFQUFFLENBQUM7UUFDbkJGLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQixFQUFFO1FBQUNDLGFBQWE7S0FBQyxDQUFDLENBQUM7SUFFcEIsT0FBTztRQUFFSixZQUFZLEVBQVpBLFlBQVk7S0FBRSxDQUFDO0NBQ3pCLENBQUM7R0FwQ1dILGVBQWU7O1FBQ0dQLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUN1cnJlbnRQcmljZS5qcz8xNDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCB1dGlscyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgVmF1bHRBYmkgZnJvbSAnLi4vYWJpL1ZhdWx0Lmpzb24nO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RGdW5jdGlvbiwgdXNlRXRoZXJzIH0gZnJvbSAnQHVzZWRhcHAvY29yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnO1xuY29uc3QgVmF1bHRJbnRlcmZhY2UgPSBuZXcgdXRpbHMuSW50ZXJmYWNlKFZhdWx0QWJpKTtcblxuZXhwb3J0IGNvbnN0IHVzZUN1cnJlbnRQcmljZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VFdGhlcnMoKTtcbiAgY29uc3QgW2N1cnJlbnRQcmljZSwgc2V0Q3VycmVudFByaWNlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmaXJlU2VuZCwgc2V0RmlyZVNlbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhdWx0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgJzB4QzAwNmNDOTBGNDNkY2ViNTA2ZjgxRGMyOGI1OGRkOUM2MThFNjAxOCcsXG4gICAgVmF1bHRJbnRlcmZhY2UsXG4gICAgbGlicmFyeVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YXVsdENvbnRyYWN0IHx8IGZpcmVTZW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TWlzc2luZ1RvU2FsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IGF3YWl0IHZhdWx0Q29udHJhY3QuY3VycmVudFByaWNlKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5qAIH4gZ2V0TWlzc2luZ1RvU2FsZSB+IGN1cnJlbnRQcmljZScsIGN1cnJlbnRQcmljZSk7XG5cbiAgICAgIGNvbnN0IGNvbnZlcnRlZEN1cnJlbnRQcmljZSA9IGZvcm1hdEV0aGVyKGN1cnJlbnRQcmljZSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAn8J+agCB+IGdldE1pc3NpbmdUb1NhbGUgfiBjb252ZXJ0ZWRDdXJyZW50UHJpY2UnLFxuICAgICAgICBjb252ZXJ0ZWRDdXJyZW50UHJpY2VcbiAgICAgICk7XG5cbiAgICAgIHNldEN1cnJlbnRQcmljZShjb252ZXJ0ZWRDdXJyZW50UHJpY2UpO1xuICAgIH07XG5cbiAgICBnZXRNaXNzaW5nVG9TYWxlKCk7XG4gICAgc2V0RmlyZVNlbmQodHJ1ZSk7XG4gIH0sIFt2YXVsdENvbnRyYWN0XSk7XG5cbiAgcmV0dXJuIHsgY3VycmVudFByaWNlIH07XG59O1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwidXRpbHMiLCJWYXVsdEFiaSIsInVzZUNvbnRyYWN0RnVuY3Rpb24iLCJ1c2VFdGhlcnMiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZm9ybWF0RXRoZXIiLCJWYXVsdEludGVyZmFjZSIsIkludGVyZmFjZSIsInVzZUN1cnJlbnRQcmljZSIsImFjY291bnQiLCJsaWJyYXJ5IiwiY3VycmVudFByaWNlIiwic2V0Q3VycmVudFByaWNlIiwiZmlyZVNlbmQiLCJzZXRGaXJlU2VuZCIsInZhdWx0Q29udHJhY3QiLCJnZXRNaXNzaW5nVG9TYWxlIiwiY29udmVydGVkQ3VycmVudFByaWNlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useCurrentPrice.js\n"));

/***/ })

});