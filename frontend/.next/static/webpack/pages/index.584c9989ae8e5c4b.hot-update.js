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

/***/ "./hooks/useVaultData.js":
/*!*******************************!*\
  !*** ./hooks/useVaultData.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useVaultData\": function() { return /* binding */ useVaultData; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar VaulInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__);\nvar useVaultData = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers)(), account = ref.account, library = ref.library;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), allowance = ref1[0], setAllowance = ref1[1];\n    console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ allowance\", allowance);\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(\"0x1aE8Cd5eed6E872008af751F23984cED30234FdD\", VaulInterface, library);\n    var teste = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useContractFunction)(vaultContract, \"initialised\", {\n        transactionName: \"Deposit\"\n    });\n    console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ teste\", teste);\n    //   useEffect(() => {\n    //     console.log('🚀 ~ useVaultData ~ state', state);\n    //   }, [state]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!vaultContract) {\n            return;\n        }\n        var getAllowance = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var allowance;\n                return _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return vaultContract.initialPrice();\n                        case 2:\n                            allowance = _ctx.sent;\n                            setAllowance(allowance);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAllowance() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAllowance();\n    }, []);\n    var validate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(cardsToDeposit) {\n        console.log(\"\\uD83D\\uDE80 ~ validate ~ cardsToDeposit\", cardsToDeposit);\n    // send();\n    }, []);\n    return {};\n};\n_s(useVaultData, \"f+v8SkTjQIKs4FbYt/evHoPKPNI=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useContractFunction\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VWYXVsdERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF5QztBQUNBO0FBQ3NCO0FBQ047QUFFekQsSUFBTVEsYUFBYSxHQUFHLElBQUlQLG1EQUFlLENBQUNDLDRDQUFRLENBQUM7QUFFNUMsSUFBTVEsWUFBWSxHQUFHLFdBQU07O0lBQ2hDLElBQTZCTixHQUFXLEdBQVhBLHdEQUFTLEVBQUUsRUFBaENPLE9BQU8sR0FBY1AsR0FBVyxDQUFoQ08sT0FBTyxFQUFFQyxPQUFPLEdBQUtSLEdBQVcsQ0FBdkJRLE9BQU87SUFDeEIsSUFBa0NMLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFyQ00sU0FBUyxHQUFrQk4sSUFBVSxHQUE1QixFQUFFTyxZQUFZLEdBQUlQLElBQVUsR0FBZDtJQUU5QlEsT0FBTyxDQUFDQyxHQUFHLENBQUMseUNBQThCLEVBQUVILFNBQVMsQ0FBQyxDQUFDO0lBRXZELElBQU1JLGFBQWEsR0FBRyxJQUFJakIsNENBQVEsQ0FDaEMsNENBQTRDLEVBQzVDUSxhQUFhLEVBQ2JJLE9BQU8sQ0FDUjtJQUNELElBQU1NLEtBQUssR0FBR2Ysa0VBQW1CLENBQUNjLGFBQWEsRUFBRSxhQUFhLEVBQUU7UUFDOURFLGVBQWUsRUFBRSxTQUFTO0tBQzNCLENBQUM7SUFFRkosT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQTBCLEVBQUVFLEtBQUssQ0FBQyxDQUFDO0lBRS9DLHNCQUFzQjtJQUN0QixzREFBc0Q7SUFDdEQsaUJBQWlCO0lBRWpCWixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNXLGFBQWEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFNRyxZQUFZO3VCQUFHLHNRQUFZO29CQUN6QlAsU0FBUzs7Ozs7bUNBQVNJLGFBQWEsQ0FBQ0ksWUFBWSxFQUFFOzs0QkFBOUNSLFNBQVMsWUFBcUM7NEJBQ3BEQyxZQUFZLENBQUNELFNBQVMsQ0FBQyxDQUFDOzs7Ozs7YUFDekI7NEJBSEtPLFlBQVk7OztXQUdqQjtRQUVEQSxZQUFZLEVBQUUsQ0FBQztLQUNoQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUUsUUFBUSxHQUFHakIsa0RBQVcsQ0FBQyxTQUFDa0IsY0FBYyxFQUFLO1FBQy9DUixPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBK0IsRUFBRU8sY0FBYyxDQUFDLENBQUM7SUFFN0QsVUFBVTtLQUNYLEVBQUUsRUFBRSxDQUFDO0lBQ04sT0FBTyxFQUFFLENBQUM7Q0FDWCxDQUFDO0dBeENXYixZQUFZOztRQUNNTixvREFBUztRQVV4QkQsOERBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVZhdWx0RGF0YS5qcz9jMjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCB1dGlscyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgVmF1bHRBYmkgZnJvbSAnLi4vYWJpL1ZhdWx0Lmpzb24nO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RGdW5jdGlvbiwgdXNlRXRoZXJzIH0gZnJvbSAnQHVzZWRhcHAvY29yZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmF1bEludGVyZmFjZSA9IG5ldyB1dGlscy5JbnRlcmZhY2UoVmF1bHRBYmkpO1xuXG5leHBvcnQgY29uc3QgdXNlVmF1bHREYXRhID0gKCkgPT4ge1xuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZUV0aGVycygpO1xuICBjb25zdCBbYWxsb3dhbmNlLCBzZXRBbGxvd2FuY2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zb2xlLmxvZygn8J+agCB+IHVzZVZhdWx0RGF0YSB+IGFsbG93YW5jZScsIGFsbG93YW5jZSk7XG5cbiAgY29uc3QgdmF1bHRDb250cmFjdCA9IG5ldyBDb250cmFjdChcbiAgICAnMHgxYUU4Q2Q1ZWVkNkU4NzIwMDhhZjc1MUYyMzk4NGNFRDMwMjM0RmREJyxcbiAgICBWYXVsSW50ZXJmYWNlLFxuICAgIGxpYnJhcnlcbiAgKTtcbiAgY29uc3QgdGVzdGUgPSB1c2VDb250cmFjdEZ1bmN0aW9uKHZhdWx0Q29udHJhY3QsICdpbml0aWFsaXNlZCcsIHtcbiAgICB0cmFuc2FjdGlvbk5hbWU6ICdEZXBvc2l0JyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiB1c2VWYXVsdERhdGEgfiB0ZXN0ZScsIHRlc3RlKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZygn8J+agCB+IHVzZVZhdWx0RGF0YSB+IHN0YXRlJywgc3RhdGUpO1xuICAvLyAgIH0sIFtzdGF0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YXVsdENvbnRyYWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWxsb3dhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsb3dhbmNlID0gYXdhaXQgdmF1bHRDb250cmFjdC5pbml0aWFsUHJpY2UoKTtcbiAgICAgIHNldEFsbG93YW5jZShhbGxvd2FuY2UpO1xuICAgIH07XG5cbiAgICBnZXRBbGxvd2FuY2UoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKGNhcmRzVG9EZXBvc2l0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ/CfmoAgfiB2YWxpZGF0ZSB+IGNhcmRzVG9EZXBvc2l0JywgY2FyZHNUb0RlcG9zaXQpO1xuXG4gICAgLy8gc2VuZCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiB7fTtcbn07XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJ1dGlscyIsIlZhdWx0QWJpIiwidXNlQ29udHJhY3RGdW5jdGlvbiIsInVzZUV0aGVycyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWYXVsSW50ZXJmYWNlIiwiSW50ZXJmYWNlIiwidXNlVmF1bHREYXRhIiwiYWNjb3VudCIsImxpYnJhcnkiLCJhbGxvd2FuY2UiLCJzZXRBbGxvd2FuY2UiLCJjb25zb2xlIiwibG9nIiwidmF1bHRDb250cmFjdCIsInRlc3RlIiwidHJhbnNhY3Rpb25OYW1lIiwiZ2V0QWxsb3dhbmNlIiwiaW5pdGlhbFByaWNlIiwidmFsaWRhdGUiLCJjYXJkc1RvRGVwb3NpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useVaultData.js\n"));

/***/ })

});