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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCurrentPrice\": function() { return /* binding */ useCurrentPrice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar VaultInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__);\nvar useCurrentPrice = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers)(), account = ref.account, library = ref.library;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentPrice = ref1[0], setCurrentPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), saleStartTime = ref2[0], setSaleStartTime = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), saleDuration = ref3[0], setSaleDuration = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), fireSend = ref4[0], setFireSend = ref4[1];\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(\"0x97B008432d2C63CD76637002d6612198De413321\", VaultInterface, library);\n    var toDateTime = function(secs) {\n        var t = new Date(); // Epoch\n        t.setSeconds(secs);\n        return t;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!vaultContract || fireSend) {\n            return;\n        }\n        var getCurrentPrice = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var currentPrice, saleStartTime, saleDuration, convertedCurrentPrice, parsedTime;\n                return _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return vaultContract.currentPrice();\n                        case 2:\n                            currentPrice = _ctx.sent;\n                            _ctx.next = 5;\n                            return vaultContract.saleStartTime();\n                        case 5:\n                            saleStartTime = _ctx.sent;\n                            _ctx.next = 8;\n                            return vaultContract.saleDuration();\n                        case 8:\n                            saleDuration = _ctx.sent;\n                            console.log(\"\\uD83D\\uDE80 ~ getCurrentPrice ~ currentPrice\", currentPrice);\n                            convertedCurrentPrice = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatEther)(currentPrice);\n                            parsedTime = toDateTime(Number(saleStartTime) + Number(saleDuration));\n                            console.log(\"\\uD83D\\uDE80 ~ getCurrentPrice ~ parsedSaleStartTime\", parsedSaleStartTime);\n                            setCurrentPrice(convertedCurrentPrice);\n                            setSaleStartTime(parsedTime);\n                        case 15:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getCurrentPrice() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getCurrentPrice();\n        setFireSend(true);\n    }, [\n        vaultContract\n    ]);\n    return {\n        currentPrice: currentPrice,\n        saleTimeLeft: saleTimeLeft\n    };\n};\n_s(useCurrentPrice, \"EInPc/Qt4fLuk9svfYd7+4HZjYI=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vaG9va3MvdXNlQ3VycmVudFByaWNlLmpzPzE0NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QsIHV0aWxzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBWYXVsdEFiaSBmcm9tICcuLi9hYmkvVmF1bHQuanNvbic7XG5pbXBvcnQgeyB1c2VDb250cmFjdEZ1bmN0aW9uLCB1c2VFdGhlcnMgfSBmcm9tICdAdXNlZGFwcC9jb3JlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cyc7XG5jb25zdCBWYXVsdEludGVyZmFjZSA9IG5ldyB1dGlscy5JbnRlcmZhY2UoVmF1bHRBYmkpO1xuXG5leHBvcnQgY29uc3QgdXNlQ3VycmVudFByaWNlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZUV0aGVycygpO1xuICBjb25zdCBbY3VycmVudFByaWNlLCBzZXRDdXJyZW50UHJpY2VdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NhbGVTdGFydFRpbWUsIHNldFNhbGVTdGFydFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NhbGVEdXJhdGlvbiwgc2V0U2FsZUR1cmF0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW2ZpcmVTZW5kLCBzZXRGaXJlU2VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmF1bHRDb250cmFjdCA9IG5ldyBDb250cmFjdChcbiAgICAnMHg5N0IwMDg0MzJkMkM2M0NENzY2MzcwMDJkNjYxMjE5OERlNDEzMzIxJyxcbiAgICBWYXVsdEludGVyZmFjZSxcbiAgICBsaWJyYXJ5XG4gICk7XG4gIGNvbnN0IHRvRGF0ZVRpbWUgPSAoc2VjcykgPT4ge1xuICAgIGxldCB0ID0gbmV3IERhdGUoKTsgLy8gRXBvY2hcbiAgICB0LnNldFNlY29uZHMoc2Vjcyk7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YXVsdENvbnRyYWN0IHx8IGZpcmVTZW5kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q3VycmVudFByaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFByaWNlID0gYXdhaXQgdmF1bHRDb250cmFjdC5jdXJyZW50UHJpY2UoKTtcbiAgICAgIGNvbnN0IHNhbGVTdGFydFRpbWUgPSBhd2FpdCB2YXVsdENvbnRyYWN0LnNhbGVTdGFydFRpbWUoKTtcbiAgICAgIGNvbnN0IHNhbGVEdXJhdGlvbiA9IGF3YWl0IHZhdWx0Q29udHJhY3Quc2FsZUR1cmF0aW9uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5qAIH4gZ2V0Q3VycmVudFByaWNlIH4gY3VycmVudFByaWNlJywgY3VycmVudFByaWNlKTtcblxuICAgICAgY29uc3QgY29udmVydGVkQ3VycmVudFByaWNlID0gZm9ybWF0RXRoZXIoY3VycmVudFByaWNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkVGltZSA9IHRvRGF0ZVRpbWUoXG4gICAgICAgIE51bWJlcihzYWxlU3RhcnRUaW1lKSArIE51bWJlcihzYWxlRHVyYXRpb24pXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ/CfmoAgfiBnZXRDdXJyZW50UHJpY2UgfiBwYXJzZWRTYWxlU3RhcnRUaW1lJyxcbiAgICAgICAgcGFyc2VkU2FsZVN0YXJ0VGltZVxuICAgICAgKTtcblxuICAgICAgc2V0Q3VycmVudFByaWNlKGNvbnZlcnRlZEN1cnJlbnRQcmljZSk7XG4gICAgICBzZXRTYWxlU3RhcnRUaW1lKHBhcnNlZFRpbWUpO1xuICAgIH07XG5cbiAgICBnZXRDdXJyZW50UHJpY2UoKTtcbiAgICBzZXRGaXJlU2VuZCh0cnVlKTtcbiAgfSwgW3ZhdWx0Q29udHJhY3RdKTtcblxuICByZXR1cm4geyBjdXJyZW50UHJpY2UsIHNhbGVUaW1lTGVmdCB9O1xufTtcbiJdLCJuYW1lcyI6WyJDb250cmFjdCIsInV0aWxzIiwiVmF1bHRBYmkiLCJ1c2VDb250cmFjdEZ1bmN0aW9uIiwidXNlRXRoZXJzIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZvcm1hdEV0aGVyIiwiVmF1bHRJbnRlcmZhY2UiLCJJbnRlcmZhY2UiLCJ1c2VDdXJyZW50UHJpY2UiLCJhY2NvdW50IiwibGlicmFyeSIsImN1cnJlbnRQcmljZSIsInNldEN1cnJlbnRQcmljZSIsInNhbGVTdGFydFRpbWUiLCJzZXRTYWxlU3RhcnRUaW1lIiwic2FsZUR1cmF0aW9uIiwic2V0U2FsZUR1cmF0aW9uIiwiZmlyZVNlbmQiLCJzZXRGaXJlU2VuZCIsInZhdWx0Q29udHJhY3QiLCJ0b0RhdGVUaW1lIiwic2VjcyIsInQiLCJEYXRlIiwic2V0U2Vjb25kcyIsImdldEN1cnJlbnRQcmljZSIsImNvbnZlcnRlZEN1cnJlbnRQcmljZSIsInBhcnNlZFRpbWUiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwicGFyc2VkU2FsZVN0YXJ0VGltZSIsInNhbGVUaW1lTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useCurrentPrice.js\n"));

/***/ })

});