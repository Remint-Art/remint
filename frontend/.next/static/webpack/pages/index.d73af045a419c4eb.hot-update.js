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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useVaultData\": function() { return /* binding */ useVaultData; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n\nvar VaulInterface = new ethers__WEBPACK_IMPORTED_MODULE_2__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__);\nvar useVaultData = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers)(), account = ref.account, library = ref.library;\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(\"0x1aE8Cd5eed6E872008af751F23984cED30234FdD\", VaulInterface, library);\n    var ref1 = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction)(vaultContract, \"initialised\", {\n        transactionName: \"Deposit\"\n    }), state = ref1.state, send = ref1.send;\n    var validate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(cardsToDeposit) {\n        console.log(\"\\uD83D\\uDE80 ~ validate ~ cardsToDeposit\", cardsToDeposit);\n        send(cardsToDeposit);\n    }, []);\n    return {\n        state: state,\n        send: validate\n    };\n};\n_s(useVaultData, \"hCwWhUqEFSyI6L0WLY04WjgLa8E=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VWYXVsdERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDQTtBQUNzQjtBQUMzQjtBQUVwQyxJQUFNTSxhQUFhLEdBQUcsSUFBSUwsbURBQWUsQ0FBQ0MsNENBQVEsQ0FBQztBQUU1QyxJQUFNTSxZQUFZLEdBQUcsV0FBTTs7SUFDaEMsSUFBNkJKLEdBQVcsR0FBWEEsd0RBQVMsRUFBRSxFQUFoQ0ssT0FBTyxHQUFjTCxHQUFXLENBQWhDSyxPQUFPLEVBQUVDLE9BQU8sR0FBS04sR0FBVyxDQUF2Qk0sT0FBTztJQUV4QixJQUFNQyxhQUFhLEdBQUcsSUFBSVgsNENBQVEsQ0FDaEMsNENBQTRDLEVBQzVDTSxhQUFhLEVBQ2JJLE9BQU8sQ0FDUjtJQUNELElBQXdCUCxJQUV0QixHQUZzQkEsa0VBQW1CLENBQUNRLGFBQWEsRUFBRSxhQUFhLEVBQUU7UUFDeEVDLGVBQWUsRUFBRSxTQUFTO0tBQzNCLENBQUMsRUFGTUMsS0FBSyxHQUFXVixJQUV0QixDQUZNVSxLQUFLLEVBQUVDLElBQUksR0FBS1gsSUFFdEIsQ0FGYVcsSUFBSTtJQUluQixJQUFNQyxRQUFRLEdBQUdWLGtEQUFXLENBQUMsU0FBQ1csY0FBYyxFQUFLO1FBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBK0IsRUFBRUYsY0FBYyxDQUFDLENBQUM7UUFFN0RGLElBQUksQ0FBQ0UsY0FBYyxDQUFDLENBQUM7S0FDdEIsRUFBRSxFQUFFLENBQUM7SUFDTixPQUFPO1FBQUVILEtBQUssRUFBTEEsS0FBSztRQUFFQyxJQUFJLEVBQUVDLFFBQVE7S0FBRSxDQUFDO0NBQ2xDLENBQUM7R0FsQldQLFlBQVk7O1FBQ01KLG9EQUFTO1FBT2RELDhEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VWYXVsdERhdGEuanM/YzIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCwgdXRpbHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IFZhdWx0QWJpIGZyb20gJy4uL2FiaS9WYXVsdC5qc29uJztcbmltcG9ydCB7IHVzZUNvbnRyYWN0RnVuY3Rpb24sIHVzZUV0aGVycyB9IGZyb20gJ0B1c2VkYXBwL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFZhdWxJbnRlcmZhY2UgPSBuZXcgdXRpbHMuSW50ZXJmYWNlKFZhdWx0QWJpKTtcblxuZXhwb3J0IGNvbnN0IHVzZVZhdWx0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5IH0gPSB1c2VFdGhlcnMoKTtcblxuICBjb25zdCB2YXVsdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICcweDFhRThDZDVlZWQ2RTg3MjAwOGFmNzUxRjIzOTg0Y0VEMzAyMzRGZEQnLFxuICAgIFZhdWxJbnRlcmZhY2UsXG4gICAgbGlicmFyeVxuICApO1xuICBjb25zdCB7IHN0YXRlLCBzZW5kIH0gPSB1c2VDb250cmFjdEZ1bmN0aW9uKHZhdWx0Q29udHJhY3QsICdpbml0aWFsaXNlZCcsIHtcbiAgICB0cmFuc2FjdGlvbk5hbWU6ICdEZXBvc2l0JyxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGUgPSB1c2VDYWxsYmFjaygoY2FyZHNUb0RlcG9zaXQpID0+IHtcbiAgICBjb25zb2xlLmxvZygn8J+agCB+IHZhbGlkYXRlIH4gY2FyZHNUb0RlcG9zaXQnLCBjYXJkc1RvRGVwb3NpdCk7XG5cbiAgICBzZW5kKGNhcmRzVG9EZXBvc2l0KTtcbiAgfSwgW10pO1xuICByZXR1cm4geyBzdGF0ZSwgc2VuZDogdmFsaWRhdGUgfTtcbn07XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJ1dGlscyIsIlZhdWx0QWJpIiwidXNlQ29udHJhY3RGdW5jdGlvbiIsInVzZUV0aGVycyIsInVzZUNhbGxiYWNrIiwiVmF1bEludGVyZmFjZSIsIkludGVyZmFjZSIsInVzZVZhdWx0RGF0YSIsImFjY291bnQiLCJsaWJyYXJ5IiwidmF1bHRDb250cmFjdCIsInRyYW5zYWN0aW9uTmFtZSIsInN0YXRlIiwic2VuZCIsInZhbGlkYXRlIiwiY2FyZHNUb0RlcG9zaXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useVaultData.js\n"));

/***/ })

});