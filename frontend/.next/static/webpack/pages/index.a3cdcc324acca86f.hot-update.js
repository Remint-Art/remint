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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useVaultData\": function() { return /* binding */ useVaultData; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abi/Vault.json */ \"./abi/Vault.json\");\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n\nvar VaulInterface = new ethers__WEBPACK_IMPORTED_MODULE_2__.utils.Interface(_abi_Vault_json__WEBPACK_IMPORTED_MODULE_0__);\nvar useVaultData = function() {\n    _s();\n    var ref = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers)(), account = ref.account, library = ref.library;\n    console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ library\", library);\n    console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ account\", account);\n    var vaultContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(\"0x1aE8Cd5eed6E872008af751F23984cED30234FdD\", VaulInterface, library);\n    var ref1 = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction)(vaultContract, \"deposit\", {\n        transactionName: \"Deposit\"\n    }), state = ref1.state, send = ref1.send;\n    console.log(\"\\uD83D\\uDE80 ~ useVaultData ~ state\", state);\n    var validate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(cardsToDeposit) {\n        send(cardsToDeposit);\n    }, []);\n    return {\n        state: state,\n        send: validate\n    };\n};\n_s(useVaultData, \"hCwWhUqEFSyI6L0WLY04WjgLa8E=\", false, function() {\n    return [\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useEthers,\n        _usedapp_core__WEBPACK_IMPORTED_MODULE_3__.useContractFunction\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VWYXVsdERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDQTtBQUNzQjtBQUMzQjtBQUVwQyxJQUFNTSxhQUFhLEdBQUcsSUFBSUwsbURBQWUsQ0FBQ0MsNENBQVEsQ0FBQztBQUU1QyxJQUFNTSxZQUFZLEdBQUcsV0FBTTs7SUFDaEMsSUFBNkJKLEdBQVcsR0FBWEEsd0RBQVMsRUFBRSxFQUFoQ0ssT0FBTyxHQUFjTCxHQUFXLENBQWhDSyxPQUFPLEVBQUVDLE9BQU8sR0FBS04sR0FBVyxDQUF2Qk0sT0FBTztJQUV4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQTRCLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO0lBRW5EQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1Q0FBNEIsRUFBRUgsT0FBTyxDQUFDLENBQUM7SUFFbkQsSUFBTUksYUFBYSxHQUFHLElBQUliLDRDQUFRLENBQ2hDLDRDQUE0QyxFQUM1Q00sYUFBYSxFQUNiSSxPQUFPLENBQ1I7SUFDRCxJQUF3QlAsSUFFdEIsR0FGc0JBLGtFQUFtQixDQUFDVSxhQUFhLEVBQUUsU0FBUyxFQUFFO1FBQ3BFQyxlQUFlLEVBQUUsU0FBUztLQUMzQixDQUFDLEVBRk1DLEtBQUssR0FBV1osSUFFdEIsQ0FGTVksS0FBSyxFQUFFQyxJQUFJLEdBQUtiLElBRXRCLENBRmFhLElBQUk7SUFJbkJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUEwQixFQUFFRyxLQUFLLENBQUMsQ0FBQztJQUUvQyxJQUFNRSxRQUFRLEdBQUdaLGtEQUFXLENBQUMsU0FBQ2EsY0FBYyxFQUFLO1FBQy9DRixJQUFJLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0tBQ3RCLEVBQUUsRUFBRSxDQUFDO0lBQ04sT0FBTztRQUFFSCxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsSUFBSSxFQUFFQyxRQUFRO0tBQUUsQ0FBQztDQUNsQyxDQUFDO0dBdEJXVCxZQUFZOztRQUNNSixvREFBUztRQVdkRCw4REFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmF1bHREYXRhLmpzP2MyMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QsIHV0aWxzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBWYXVsdEFiaSBmcm9tICcuLi9hYmkvVmF1bHQuanNvbic7XG5pbXBvcnQgeyB1c2VDb250cmFjdEZ1bmN0aW9uLCB1c2VFdGhlcnMgfSBmcm9tICdAdXNlZGFwcC9jb3JlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBWYXVsSW50ZXJmYWNlID0gbmV3IHV0aWxzLkludGVyZmFjZShWYXVsdEFiaSk7XG5cbmV4cG9ydCBjb25zdCB1c2VWYXVsdERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSB9ID0gdXNlRXRoZXJzKCk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiB1c2VWYXVsdERhdGEgfiBsaWJyYXJ5JywgbGlicmFyeSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiB1c2VWYXVsdERhdGEgfiBhY2NvdW50JywgYWNjb3VudCk7XG5cbiAgY29uc3QgdmF1bHRDb250cmFjdCA9IG5ldyBDb250cmFjdChcbiAgICAnMHgxYUU4Q2Q1ZWVkNkU4NzIwMDhhZjc1MUYyMzk4NGNFRDMwMjM0RmREJyxcbiAgICBWYXVsSW50ZXJmYWNlLFxuICAgIGxpYnJhcnlcbiAgKTtcbiAgY29uc3QgeyBzdGF0ZSwgc2VuZCB9ID0gdXNlQ29udHJhY3RGdW5jdGlvbih2YXVsdENvbnRyYWN0LCAnZGVwb3NpdCcsIHtcbiAgICB0cmFuc2FjdGlvbk5hbWU6ICdEZXBvc2l0JyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ/CfmoAgfiB1c2VWYXVsdERhdGEgfiBzdGF0ZScsIHN0YXRlKTtcblxuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKChjYXJkc1RvRGVwb3NpdCkgPT4ge1xuICAgIHNlbmQoY2FyZHNUb0RlcG9zaXQpO1xuICB9LCBbXSk7XG4gIHJldHVybiB7IHN0YXRlLCBzZW5kOiB2YWxpZGF0ZSB9O1xufTtcbiJdLCJuYW1lcyI6WyJDb250cmFjdCIsInV0aWxzIiwiVmF1bHRBYmkiLCJ1c2VDb250cmFjdEZ1bmN0aW9uIiwidXNlRXRoZXJzIiwidXNlQ2FsbGJhY2siLCJWYXVsSW50ZXJmYWNlIiwiSW50ZXJmYWNlIiwidXNlVmF1bHREYXRhIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjb25zb2xlIiwibG9nIiwidmF1bHRDb250cmFjdCIsInRyYW5zYWN0aW9uTmFtZSIsInN0YXRlIiwic2VuZCIsInZhbGlkYXRlIiwiY2FyZHNUb0RlcG9zaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useVaultData.js\n"));

/***/ })

});