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

/***/ "./hooks/useMissingToSale.js":
/*!***********************************!*\
  !*** ./hooks/useMissingToSale.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMissingToSale\": function() { return /* binding */ useMissingToSale; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar VaultInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_1__);\nvar useMissingToSale = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers)(), account = ref.account, library = ref.library;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), missing = ref1[0], setMissing = ref1[1];\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(\"0x1aE8Cd5eed6E872008af751F23984cED30234FdD\", VaultInterface, library);\n    //   const { state, send } = useContractFunction(vaultContract, 'missinToSale', {\n    //     transactionName: 'Missing to Sale',\n    //   });\n    var validate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        send();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!vaultContract) {\n            return;\n        }\n        var getMissingToSale = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var missingData;\n                return _Users_diogosousa_dev_ethHackaton22_remint_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            missingData = \"\";\n                            setMissing(missingData);\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getMissingToSale() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getMissingToSale();\n    }, [\n        vaultContract\n    ]);\n    return {\n        missing: missing\n    };\n};\n_s(useMissingToSale, \"LMQIdGd5ZHetupaJN+6cuir83Dg=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_4__.useEthers\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNaXNzaW5nVG9TYWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDQTtBQUNzQjtBQUNOO0FBRXpELElBQU1RLGNBQWMsR0FBRyxJQUFJUCxtREFBZSxDQUFDQyw0Q0FBUSxDQUFDO0FBRTdDLElBQU1RLGdCQUFnQixHQUFHLFdBQU07O0lBQ3BDLElBQTZCTixHQUFXLEdBQVhBLHdEQUFTLEVBQUUsRUFBaENPLE9BQU8sR0FBY1AsR0FBVyxDQUFoQ08sT0FBTyxFQUFFQyxPQUFPLEdBQUtSLEdBQVcsQ0FBdkJRLE9BQU87SUFDeEIsSUFBOEJMLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFqQ00sT0FBTyxHQUFnQk4sSUFBVSxHQUExQixFQUFFTyxVQUFVLEdBQUlQLElBQVUsR0FBZDtJQUUxQixJQUFNUSxhQUFhLEdBQUcsSUFBSWYsNENBQVEsQ0FDaEMsNENBQTRDLEVBQzVDUSxjQUFjLEVBQ2RJLE9BQU8sQ0FDUjtJQUNELGlGQUFpRjtJQUNqRiwwQ0FBMEM7SUFDMUMsUUFBUTtJQUVSLElBQU1JLFFBQVEsR0FBR1gsa0RBQVcsQ0FBQyxXQUFNO1FBQ2pDWSxJQUFJLEVBQUUsQ0FBQztLQUNSLEVBQUUsRUFBRSxDQUFDO0lBRU5YLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ1MsYUFBYSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUVELElBQU1HLGdCQUFnQjt1QkFBRyxzUUFBWTtvQkFDN0JDLFdBQVc7Ozs7NEJBQVhBLFdBQVcsR0FBRyxFQUFFLENBQUM7NEJBQ3ZCTCxVQUFVLENBQUNLLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7YUFDekI7NEJBSEtELGdCQUFnQjs7O1dBR3JCO1FBRURBLGdCQUFnQixFQUFFLENBQUM7S0FDcEIsRUFBRTtRQUFDSCxhQUFhO0tBQUMsQ0FBQyxDQUFDO0lBRXBCLE9BQU87UUFBRUYsT0FBTyxFQUFQQSxPQUFPO0tBQUUsQ0FBQztDQUNwQixDQUFDO0dBL0JXSCxnQkFBZ0I7O1FBQ0VOLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZU1pc3NpbmdUb1NhbGUuanM/ZmEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCwgdXRpbHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IFZhdWx0QWJpIGZyb20gJy4uL2FiaS9WYXVsdC5qc29uJztcbmltcG9ydCB7IHVzZUNvbnRyYWN0RnVuY3Rpb24sIHVzZUV0aGVycyB9IGZyb20gJ0B1c2VkYXBwL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFZhdWx0SW50ZXJmYWNlID0gbmV3IHV0aWxzLkludGVyZmFjZShWYXVsdEFiaSk7XG5cbmV4cG9ydCBjb25zdCB1c2VNaXNzaW5nVG9TYWxlID0gKCkgPT4ge1xuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZUV0aGVycygpO1xuICBjb25zdCBbbWlzc2luZywgc2V0TWlzc2luZ10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHZhdWx0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgJzB4MWFFOENkNWVlZDZFODcyMDA4YWY3NTFGMjM5ODRjRUQzMDIzNEZkRCcsXG4gICAgVmF1bHRJbnRlcmZhY2UsXG4gICAgbGlicmFyeVxuICApO1xuICAvLyAgIGNvbnN0IHsgc3RhdGUsIHNlbmQgfSA9IHVzZUNvbnRyYWN0RnVuY3Rpb24odmF1bHRDb250cmFjdCwgJ21pc3NpblRvU2FsZScsIHtcbiAgLy8gICAgIHRyYW5zYWN0aW9uTmFtZTogJ01pc3NpbmcgdG8gU2FsZScsXG4gIC8vICAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2VuZCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZhdWx0Q29udHJhY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRNaXNzaW5nVG9TYWxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbWlzc2luZ0RhdGEgPSAnJztcbiAgICAgIHNldE1pc3NpbmcobWlzc2luZ0RhdGEpO1xuICAgIH07XG5cbiAgICBnZXRNaXNzaW5nVG9TYWxlKCk7XG4gIH0sIFt2YXVsdENvbnRyYWN0XSk7XG5cbiAgcmV0dXJuIHsgbWlzc2luZyB9O1xufTtcbiJdLCJuYW1lcyI6WyJDb250cmFjdCIsInV0aWxzIiwiVmF1bHRBYmkiLCJ1c2VDb250cmFjdEZ1bmN0aW9uIiwidXNlRXRoZXJzIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZhdWx0SW50ZXJmYWNlIiwiSW50ZXJmYWNlIiwidXNlTWlzc2luZ1RvU2FsZSIsImFjY291bnQiLCJsaWJyYXJ5IiwibWlzc2luZyIsInNldE1pc3NpbmciLCJ2YXVsdENvbnRyYWN0IiwidmFsaWRhdGUiLCJzZW5kIiwiZ2V0TWlzc2luZ1RvU2FsZSIsIm1pc3NpbmdEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useMissingToSale.js\n"));

/***/ })

});