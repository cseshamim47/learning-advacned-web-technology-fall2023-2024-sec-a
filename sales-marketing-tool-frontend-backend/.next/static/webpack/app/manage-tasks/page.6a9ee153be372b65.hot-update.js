"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/manage-tasks/page",{

/***/ "(app-pages-browser)/./app/components/AddTask.tsx":
/*!************************************!*\
  !*** ./app/components/AddTask.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddTask = (param)=>{\n    let { onAdd, editTask } = param;\n    _s();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskDescription, setTaskDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    use;\n    const addTheTask = async ()=>{\n        if (!taskName) {\n            alert(\"Please add a task name\");\n            return;\n        }\n        await onAdd({\n            name: taskName,\n            description: taskDescription\n        });\n        setTaskName(\"\");\n        setTaskDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Name\",\n                variant: \"outlined\",\n                value: taskName,\n                onChange: (e)=>setTaskName(e.target.value)\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Desc\",\n                variant: \"outlined\",\n                multiline: true,\n                value: taskDescription,\n                onChange: (e)=>setTaskDescription(e.target.value),\n                maxRows: 4\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                size: \"small\",\n                color: \"success\",\n                onClick: addTheTask,\n                children: \"Save Task\"\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"FfUMhiobSOlq0BRXKn7GR1DzDpQ=\");\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBQ047QUFFVDtBQU9qQyxNQUFNRyxVQUFVO1FBQUMsRUFBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQWU7O0lBRzVDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZEUTtJQUVBLE1BQU1DLGFBQWE7UUFDZixJQUFHLENBQUNMLFVBQ0o7WUFDSU0sTUFBTTtZQUNOO1FBQ0o7UUFDQSxNQUFNUixNQUFNO1lBQUNTLE1BQU1QO1lBQVVRLGFBQWFOO1FBQWU7UUFDekRELFlBQVk7UUFDWkUsbUJBQW1CO0lBQ3ZCO0lBRUYscUJBQ0U7OzBCQUNZLDhEQUFDVCwrREFBU0E7Z0JBQ1ZlLElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05DLFNBQVE7Z0JBQ1JDLE9BQU9aO2dCQUNQYSxVQUFVLENBQUNDLElBQU1iLFlBQVlhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUczQyw4REFBQ2xCLCtEQUFTQTtnQkFDVmUsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsU0FBUTtnQkFDUkssU0FBUztnQkFDVEosT0FBT1Y7Z0JBQ1BXLFVBQVUsQ0FBQ0MsSUFBTVgsbUJBQW1CVyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQ2xESyxTQUFTOzs7Ozs7MEJBR1QsOERBQUN0Qiw0REFBTUE7Z0JBQ1BnQixTQUFRO2dCQUNSTyxNQUFLO2dCQUNMQyxPQUFNO2dCQUNOQyxTQUFTZjswQkFDUjs7Ozs7Ozs7QUFLakI7R0FqRE1SO0tBQUFBO0FBa0ROLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4P2Y0NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIGFkZFRhc2tQcm9wcyA9IHtcclxuICAgIG9uQWRkOiAodGFzazoge25hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZ30pID0+IHZvaWQ7XHJcbiAgICBlZGl0VGFzazoge2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZ307XHJcbn1cclxuXHJcbmNvbnN0IEFkZFRhc2sgPSAoe29uQWRkLCBlZGl0VGFza306IGFkZFRhc2tQcm9wcykgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0YXNrRGVzY3JpcHRpb24sIHNldFRhc2tEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VcclxuXHJcbiAgICBjb25zdCBhZGRUaGVUYXNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKCF0YXNrTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGFkZCBhIHRhc2sgbmFtZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG9uQWRkKHtuYW1lOiB0YXNrTmFtZSwgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbn0pO1xyXG4gICAgICAgIHNldFRhc2tOYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldFRhc2tEZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYXNrIE5hbWVcIiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2tOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYXNrIERlc2NcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2tEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza0Rlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIG1heFJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUaGVUYXNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZSBUYXNrXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2siXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJBZGRUYXNrIiwib25BZGQiLCJlZGl0VGFzayIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJ0YXNrRGVzY3JpcHRpb24iLCJzZXRUYXNrRGVzY3JpcHRpb24iLCJ1c2UiLCJhZGRUaGVUYXNrIiwiYWxlcnQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibXVsdGlsaW5lIiwibWF4Um93cyIsInNpemUiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AddTask.tsx\n"));

/***/ })

});