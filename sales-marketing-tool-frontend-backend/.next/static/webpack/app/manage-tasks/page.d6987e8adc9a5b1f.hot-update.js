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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddTask = (param)=>{\n    let { onAdd, taskToEdit } = param;\n    _s();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskDescription, setTaskDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (taskToEdit) {\n            setTaskName(taskToEdit.name);\n            setTaskDescription(taskToEdit.description);\n        }\n    }, [\n        taskToEdit\n    ]);\n    const addTheTask = async ()=>{\n        if (!taskName) {\n            alert(\"Please add a task name\");\n            return;\n        }\n        let tid = Math.floor(Math.random() * 10000) + 1;\n        if (taskToEdit) tid = taskToEdit.id;\n        await onAdd({\n            id: tid,\n            name: taskName,\n            description: taskDescription\n        });\n        setTaskName(\"\");\n        setTaskDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Name\",\n                variant: \"outlined\",\n                value: taskName,\n                onChange: (e)=>setTaskName(e.target.value)\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Desc\",\n                variant: \"outlined\",\n                multiline: true,\n                value: taskDescription,\n                onChange: (e)=>setTaskDescription(e.target.value),\n                maxRows: 4\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                size: \"small\",\n                color: \"success\",\n                onClick: addTheTask,\n                children: \"Save Task\"\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"lokpWSRvP2S4WPirnFUes3CYVhk=\");\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBQ047QUFFRTtBQVc1QyxNQUFNSSxVQUFVO1FBQUMsRUFBQ0MsS0FBSyxFQUFFQyxVQUFVLEVBQWU7O0lBRzlDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZERCxnREFBU0EsQ0FBQztRQUNOLElBQUdJLFlBQ0g7WUFDSUUsWUFBWUYsV0FBV0ssSUFBSTtZQUMzQkQsbUJBQW1CSixXQUFXTSxXQUFXO1FBQzdDO0lBQ0osR0FBRTtRQUFDTjtLQUFXO0lBRWQsTUFBTU8sYUFBYTtRQUNmLElBQUcsQ0FBQ04sVUFDSjtZQUNJTyxNQUFNO1lBQ047UUFDSjtRQUNBLElBQUlDLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLFNBQVM7UUFDOUMsSUFBR1osWUFBWVMsTUFBTVQsV0FBV2EsRUFBRTtRQUNsQyxNQUFNZCxNQUFNO1lBQUNjLElBQUlKO1lBQUtKLE1BQU1KO1lBQVVLLGFBQWFIO1FBQWU7UUFDbEVELFlBQVk7UUFDWkUsbUJBQW1CO0lBQ3ZCO0lBRUYscUJBQ0U7OzBCQUNZLDhEQUFDViwrREFBU0E7Z0JBQ1ZtQixJQUFHO2dCQUNIQyxPQUFNO2dCQUNOQyxTQUFRO2dCQUNSQyxPQUFPZjtnQkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFlBQVlnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFHM0MsOERBQUN0QiwrREFBU0E7Z0JBQ1ZtQixJQUFHO2dCQUNIQyxPQUFNO2dCQUNOQyxTQUFRO2dCQUNSSyxTQUFTO2dCQUNUSixPQUFPYjtnQkFDUGMsVUFBVSxDQUFDQyxJQUFNZCxtQkFBbUJjLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDbERLLFNBQVM7Ozs7OzswQkFHVCw4REFBQzFCLDREQUFNQTtnQkFDUG9CLFNBQVE7Z0JBQ1JPLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05DLFNBQVNqQjswQkFDUjs7Ozs7Ozs7QUFLakI7R0F6RE1UO0tBQUFBO0FBMEROLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4P2Y0NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW50ZXJmYWNlIFRhc2sge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgfVxyXG50eXBlIGFkZFRhc2tQcm9wcyA9IHtcclxuICAgIG9uQWRkOiAodGFzazoge2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZ30pID0+IHZvaWQ7XHJcbiAgICB0YXNrVG9FZGl0OiBUYXNrO1xyXG59XHJcblxyXG5jb25zdCBBZGRUYXNrID0gKHtvbkFkZCwgdGFza1RvRWRpdH06IGFkZFRhc2tQcm9wcykgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0YXNrRGVzY3JpcHRpb24sIHNldFRhc2tEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHRhc2tUb0VkaXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRUYXNrTmFtZSh0YXNrVG9FZGl0Lm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRUYXNrRGVzY3JpcHRpb24odGFza1RvRWRpdC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbdGFza1RvRWRpdF0pO1xyXG5cclxuICAgIGNvbnN0IGFkZFRoZVRhc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXRhc2tOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgYWRkIGEgdGFzayBuYW1lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSArIDE7XHJcbiAgICAgICAgaWYodGFza1RvRWRpdCkgdGlkID0gdGFza1RvRWRpdC5pZDtcclxuICAgICAgICBhd2FpdCBvbkFkZCh7aWQ6IHRpZCwgbmFtZTogdGFza05hbWUsIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb259KTtcclxuICAgICAgICBzZXRUYXNrTmFtZShcIlwiKTtcclxuICAgICAgICBzZXRUYXNrRGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIiBcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFzayBOYW1lXCIgXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza05hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGFzayBEZXNjXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWRkVGhlVGFza31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmUgVGFza1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGRUYXNrIl0sIm5hbWVzIjpbIlRleHRGaWVsZCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRkVGFzayIsIm9uQWRkIiwidGFza1RvRWRpdCIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJ0YXNrRGVzY3JpcHRpb24iLCJzZXRUYXNrRGVzY3JpcHRpb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJhZGRUaGVUYXNrIiwiYWxlcnQiLCJ0aWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibXVsdGlsaW5lIiwibWF4Um93cyIsInNpemUiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AddTask.tsx\n"));

/***/ })

});