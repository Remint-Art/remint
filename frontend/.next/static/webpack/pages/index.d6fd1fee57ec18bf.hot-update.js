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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useVaultData\": function() { return /* binding */ useVaultData; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n\nvar VaulInterface = new ethers__WEBPACK_IMPORTED_MODULE_2__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__);\nvar useVaultData = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers)(), account = ref.account, library = ref.library;\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(\"0x1aE8Cd5eed6E872008af751F23984cED30234FdD\", VaulInterface, library);\n    var state = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction)(vaultContract, \"initialised\", {\n        transactionName: \"Deposit\"\n    }).state;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ state\", state);\n    }, [\n        state\n    ]);\n    var validate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(cardsToDeposit) {\n        console.log(\"\\uD83D\\uDE80 ~ validate ~ cardsToDeposit\", cardsToDeposit);\n    // send();\n    }, []);\n    return {\n        state: state,\n        send: validate\n    };\n};\n_s(useVaultData, \"nHi8gEdqhth8QkPPIn63kO5hjrU=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VWYXVsdERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDQTtBQUNzQjtBQUNoQjtBQUUvQyxJQUFNTyxhQUFhLEdBQUcsSUFBSU4sbURBQWUsQ0FBQ0MsNENBQVEsQ0FBQztBQUU1QyxJQUFNTyxZQUFZLEdBQUcsV0FBTTs7SUFDaEMsSUFBNkJMLEdBQVcsR0FBWEEsd0RBQVMsRUFBRSxFQUFoQ00sT0FBTyxHQUFjTixHQUFXLENBQWhDTSxPQUFPLEVBQUVDLE9BQU8sR0FBS1AsR0FBVyxDQUF2Qk8sT0FBTztJQUV4QixJQUFNQyxhQUFhLEdBQUcsSUFBSVosNENBQVEsQ0FDaEMsNENBQTRDLEVBQzVDTyxhQUFhLEVBQ2JJLE9BQU8sQ0FDUjtJQUNELElBQU0sS0FBTyxHQUFLUixrRUFBbUIsQ0FBQ1MsYUFBYSxFQUFFLGFBQWEsRUFBRTtRQUNsRUUsZUFBZSxFQUFFLFNBQVM7S0FDM0IsQ0FBQyxDQUZNRCxLQUFLO0lBSWJQLGdEQUFTLENBQUMsV0FBTTtRQUNkUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBMEIsRUFBRUgsS0FBSyxDQUFDLENBQUM7S0FDaEQsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1osSUFBTUksUUFBUSxHQUFHWixrREFBVyxDQUFDLFNBQUNhLGNBQWMsRUFBSztRQUMvQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQStCLEVBQUVFLGNBQWMsQ0FBQyxDQUFDO0lBRTdELFVBQVU7S0FDWCxFQUFFLEVBQUUsQ0FBQztJQUNOLE9BQU87UUFBRUwsS0FBSyxFQUFMQSxLQUFLO1FBQUVNLElBQUksRUFBRUYsUUFBUTtLQUFFLENBQUM7Q0FDbEMsQ0FBQztHQXJCV1IsWUFBWTs7UUFDTUwsb0RBQVM7UUFPcEJELDhEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VWYXVsdERhdGEuanM/YzIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCwgdXRpbHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IFZhdWx0QWJpIGZyb20gJy4uL2FiaS9WYXVsdC5qc29uJztcbmltcG9ydCB7IHVzZUNvbnRyYWN0RnVuY3Rpb24sIHVzZUV0aGVycyB9IGZyb20gJ0B1c2VkYXBwL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmF1bEludGVyZmFjZSA9IG5ldyB1dGlscy5JbnRlcmZhY2UoVmF1bHRBYmkpO1xuXG5leHBvcnQgY29uc3QgdXNlVmF1bHREYXRhID0gKCkgPT4ge1xuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZUV0aGVycygpO1xuXG4gIGNvbnN0IHZhdWx0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgJzB4MWFFOENkNWVlZDZFODcyMDA4YWY3NTFGMjM5ODRjRUQzMDIzNEZkRCcsXG4gICAgVmF1bEludGVyZmFjZSxcbiAgICBsaWJyYXJ5XG4gICk7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRyYWN0RnVuY3Rpb24odmF1bHRDb250cmFjdCwgJ2luaXRpYWxpc2VkJywge1xuICAgIHRyYW5zYWN0aW9uTmFtZTogJ0RlcG9zaXQnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5qAIH4gdXNlVmF1bHREYXRhIH4gc3RhdGUnLCBzdGF0ZSk7XG4gIH0sIFtzdGF0ZV0pO1xuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKChjYXJkc1RvRGVwb3NpdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5qAIH4gdmFsaWRhdGUgfiBjYXJkc1RvRGVwb3NpdCcsIGNhcmRzVG9EZXBvc2l0KTtcblxuICAgIC8vIHNlbmQoKTtcbiAgfSwgW10pO1xuICByZXR1cm4geyBzdGF0ZSwgc2VuZDogdmFsaWRhdGUgfTtcbn07XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJ1dGlscyIsIlZhdWx0QWJpIiwidXNlQ29udHJhY3RGdW5jdGlvbiIsInVzZUV0aGVycyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiVmF1bEludGVyZmFjZSIsIkludGVyZmFjZSIsInVzZVZhdWx0RGF0YSIsImFjY291bnQiLCJsaWJyYXJ5IiwidmF1bHRDb250cmFjdCIsInN0YXRlIiwidHJhbnNhY3Rpb25OYW1lIiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlIiwiY2FyZHNUb0RlcG9zaXQiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useVaultData.js\n"));

/***/ })

});