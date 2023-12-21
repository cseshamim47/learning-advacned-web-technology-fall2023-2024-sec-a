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

/***/ "(app-pages-browser)/./app/manage-tasks/page.tsx":
/*!***********************************!*\
  !*** ./app/manage-tasks/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"(app-pages-browser)/./app/components/Tasks.tsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"(app-pages-browser)/./app/components/AddTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ManageTasks = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Task 1\",\n            description: \"This is task 1\"\n        },\n        {\n            id: 2,\n            name: \"Task 2\",\n            description: \"This is task 2\"\n        }\n    ]);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonColor, setButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [taskToEdit, setTaskToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [buttonStyle, setButtonStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"success\",\n        text: \"Add\"\n    });\n    const toggleForm = ()=>{\n        setShowForm(!showForm);\n        setButtonColor(!buttonColor);\n        setButtonStyle((prevStyle)=>({\n                ...prevStyle,\n                text: showForm ? \"Add\" : \"Cancel\"\n            }));\n    };\n    const addTask = async (tasks)=>{\n        setTask;\n        toggleForm();\n    };\n    const deleteTask = async (id)=>{\n        setTasks(tasks.filter((task)=>task.id !== id));\n    };\n    const getEditTaskId = async (id)=>{\n        if (!showForm) toggleForm();\n        setTaskToEdit(tasks.find((task)=>task.id === id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& > :not(style)\": {\n                    m: 1,\n                    width: \"45ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            className: \"border-2 rounded border-green-300 mt-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl text-center\",\n                        children: \"Task Manager\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        justifyContent: \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: buttonColor ? \"success\" : \"warning\",\n                            variant: \"contained\",\n                            style: {\n                                width: 120\n                            },\n                            onClick: toggleForm,\n                            children: buttonStyle.text\n                        }, void 0, false, {\n                            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAdd: addTask,\n                        taskToEdit: taskToEdit\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, undefined),\n                    tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        tasks: tasks,\n                        onDelete: deleteTask,\n                        onEdit: getEditTaskId\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"No tasks to show\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageTasks, \"hhhkeW68lIqBmhKz8yAkgUqoh5Y=\");\n_c = ManageTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTasks);\nvar _c;\n$RefreshReg$(_c, \"ManageTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBRU07QUFDRjtBQUNGO0FBQ0w7QUFDTztBQUNJO0FBUTVDLE1BQU1PLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztRQUN2QztZQUNJTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO1FBQ2pCO0tBQ0g7SUFDRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUE7SUFHNUMsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUM3Q2lCLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlQsWUFBWSxDQUFDRDtRQUNiRyxlQUFlLENBQUNEO1FBQ2hCSyxlQUFlLENBQUNJLFlBQWU7Z0JBQzdCLEdBQUdBLFNBQVM7Z0JBQ1pGLE1BQU1ULFdBQVcsUUFBUTtZQUMzQjtJQUNGO0lBRUEsTUFBTVksVUFBVSxPQUFPakI7UUFFbkJrQjtRQUNBSDtJQUNKO0lBRUEsTUFBTUksYUFBYSxPQUFPakI7UUFDdEJELFNBQVNELE1BQU1vQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS25CLEVBQUUsS0FBS0E7SUFDaEQ7SUFFQSxNQUFNb0IsZ0JBQWdCLE9BQU9wQjtRQUN6QixJQUFHLENBQUNHLFVBQ0pVO1FBQ0FMLGNBQWNWLE1BQU11QixJQUFJLENBQUMsQ0FBQ0YsT0FBU0EsS0FBS25CLEVBQUUsS0FBS0E7SUFDbkQ7SUFHRixxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNqQyx5REFBR0E7WUFDRmtDLFdBQVU7WUFDVkMsSUFBSTtnQkFDRixtQkFBbUI7b0JBQUVDLEdBQUc7b0JBQUdDLE9BQU87Z0JBQU87WUFDM0M7WUFDQUMsVUFBVTtZQUNWQyxjQUFhO1lBQ2JOLFdBQVU7c0JBRVYsNEVBQUMvQiwyREFBS0E7Z0JBQUNzQyxTQUFTOztrQ0FDZCw4REFBQ0M7d0JBQUdSLFdBQVU7a0NBQWlDOzs7Ozs7a0NBRS9DLDhEQUFDOUIsMERBQUlBO3dCQUFDdUMsU0FBUzt3QkFBQ0MsZ0JBQWU7a0NBQzdCLDRFQUFDMUMsNERBQU1BOzRCQUNIb0IsT0FBT04sY0FBYyxZQUFZOzRCQUNqQzZCLFNBQVE7NEJBQ1JDLE9BQU87Z0NBQUVSLE9BQU87NEJBQUk7NEJBQ3BCUyxTQUFTdkI7c0NBRVJKLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7O29CQUl0QlQsMEJBQ0MsOERBQUNQLDJEQUFPQTt3QkFBQ3lDLE9BQU90Qjt3QkFBU1IsWUFBWUE7Ozs7OztvQkFHdENULE1BQU13QyxNQUFNLEdBQUcsa0JBQ2hCLDhEQUFDM0MseURBQUtBO3dCQUNORyxPQUFPQTt3QkFDUHlDLFVBQVV0Qjt3QkFDVnVCLFFBQVFwQjs7Ozs7a0RBQ0gsOERBQUNxQjt3QkFBRWxCLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBekZNMUI7S0FBQUE7QUEwRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hbmFnZS10YXNrcy9wYWdlLnRzeD8yZTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza3NcIjtcclxuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkVGFza1wiO1xyXG5cclxuaW50ZXJmYWNlIFRhc2sge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1hbmFnZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlRhc2sgMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRhc2sgMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJUYXNrIDJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0YXNrIDJcIixcclxuICAgICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXR0b25Db2xvciwgc2V0QnV0dG9uQ29sb3JdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdGFza1RvRWRpdCwgc2V0VGFza1RvRWRpdF0gPSB1c2VTdGF0ZTxUYXNrPigpXHJcblxyXG4gIFxyXG4gICAgY29uc3QgW2J1dHRvblN0eWxlLCBzZXRCdXR0b25TdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcclxuICAgICAgdGV4dDogXCJBZGRcIixcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Rm9ybSghc2hvd0Zvcm0pO1xyXG4gICAgICBzZXRCdXR0b25Db2xvcighYnV0dG9uQ29sb3IpO1xyXG4gICAgICBzZXRCdXR0b25TdHlsZSgocHJldlN0eWxlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdHlsZSxcclxuICAgICAgICB0ZXh0OiBzaG93Rm9ybSA/IFwiQWRkXCIgOiBcIkNhbmNlbFwiLFxyXG4gICAgICB9KSk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKHRhc2tzOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGFza1xyXG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEVkaXRUYXNrSWQgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKCFzaG93Rm9ybSlcclxuICAgICAgICB0b2dnbGVGb3JtKClcclxuICAgICAgICBzZXRUYXNrVG9FZGl0KHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY29tcG9uZW50PVwiZm9ybVwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIFwiJiA+IDpub3Qoc3R5bGUpXCI6IHsgbTogMSwgd2lkdGg6IFwiNDVjaFwiIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkIGJvcmRlci1ncmVlbi0zMDAgbXQtM1wiXHJcbiAgICAgID5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtY2VudGVyXCI+VGFzayBNYW5hZ2VyPC9oMT5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17YnV0dG9uQ29sb3IgPyBcInN1Y2Nlc3NcIiA6IFwid2FybmluZ1wifVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVGb3JtfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uU3R5bGUudGV4dH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICAgICAgPEFkZFRhc2sgb25BZGQ9e2FkZFRhc2t9IHRhc2tUb0VkaXQ9e3Rhc2tUb0VkaXR9IC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHt0YXNrcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPFRhc2tzIFxyXG4gICAgICAgICAgdGFza3M9e3Rhc2tzfSBcclxuICAgICAgICAgIG9uRGVsZXRlPXtkZWxldGVUYXNrfSBcclxuICAgICAgICAgIG9uRWRpdD17Z2V0RWRpdFRhc2tJZH1cclxuICAgICAgICAgIC8+KTogPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPk5vIHRhc2tzIHRvIHNob3c8L3A+fVxyXG5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZVRhc2tzO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJHcmlkIiwidXNlU3RhdGUiLCJUYXNrcyIsIkFkZFRhc2siLCJNYW5hZ2VUYXNrcyIsInRhc2tzIiwic2V0VGFza3MiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJidXR0b25Db2xvciIsInNldEJ1dHRvbkNvbG9yIiwidGFza1RvRWRpdCIsInNldFRhc2tUb0VkaXQiLCJidXR0b25TdHlsZSIsInNldEJ1dHRvblN0eWxlIiwiY29sb3IiLCJ0ZXh0IiwidG9nZ2xlRm9ybSIsInByZXZTdHlsZSIsImFkZFRhc2siLCJzZXRUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsInRhc2siLCJnZXRFZGl0VGFza0lkIiwiZmluZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsInN4IiwibSIsIndpZHRoIiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsInNwYWNpbmciLCJoMSIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwidmFyaWFudCIsInN0eWxlIiwib25DbGljayIsIm9uQWRkIiwibGVuZ3RoIiwib25EZWxldGUiLCJvbkVkaXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/manage-tasks/page.tsx\n"));

/***/ })

});