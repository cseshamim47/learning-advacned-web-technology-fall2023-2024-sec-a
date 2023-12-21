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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"(app-pages-browser)/./app/components/Tasks.tsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"(app-pages-browser)/./app/components/AddTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ManageTasks = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Task 1\",\n            description: \"This is task 1\"\n        },\n        {\n            id: 2,\n            name: \"Task 2\",\n            description: \"This is task 2\"\n        }\n    ]);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonColor, setButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [taskToEdit, setTaskToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [buttonStyle, setButtonStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"success\",\n        text: \"Add\"\n    });\n    const toggleForm = ()=>{\n        setShowForm(!showForm);\n        setButtonColor(!buttonColor);\n        setButtonStyle((prevStyle)=>({\n                ...prevStyle,\n                text: showForm ? \"Add\" : \"Cancel\"\n            }));\n    };\n    const addTask = async (task)=>{\n        setTasks([\n            ...tasks,\n            task\n        ]);\n        toggleForm();\n    };\n    const deleteTask = async (id)=>{\n        setTasks(tasks.filter((task)=>task.id !== id));\n    };\n    const editTask = async (id)=>{\n        if (!showForm) toggleForm();\n        setTaskToEdit(tasks.find((task)=>task.id === id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& > :not(style)\": {\n                    m: 1,\n                    width: \"45ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            className: \"border-2 rounded border-green-300 mt-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl text-center\",\n                        children: \"Task Manager\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        justifyContent: \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: buttonColor ? \"success\" : \"warning\",\n                            variant: \"contained\",\n                            style: {\n                                width: 120\n                            },\n                            onClick: toggleForm,\n                            children: buttonStyle.text\n                        }, void 0, false, {\n                            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAdd: addTask,\n                        editTask: taskToEdit\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, undefined),\n                    tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        tasks: tasks,\n                        onDelete: deleteTask,\n                        onEdit: editTask\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"No tasks to show\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageTasks, \"hhhkeW68lIqBmhKz8yAkgUqoh5Y=\");\n_c = ManageTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTasks);\nvar _c;\n$RefreshReg$(_c, \"ManageTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBRU07QUFDRjtBQUNGO0FBQ0w7QUFDTztBQUNJO0FBUTVDLE1BQU1PLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztRQUN2QztZQUNJTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO1FBQ2pCO0tBQ0g7SUFDRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUE7SUFHNUMsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUM3Q2lCLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlQsWUFBWSxDQUFDRDtRQUNiRyxlQUFlLENBQUNEO1FBQ2hCSyxlQUFlLENBQUNJLFlBQWU7Z0JBQzdCLEdBQUdBLFNBQVM7Z0JBQ1pGLE1BQU1ULFdBQVcsUUFBUTtZQUMzQjtJQUNGO0lBRUEsTUFBTVksVUFBVSxPQUFPQztRQUduQmpCLFNBQVM7ZUFBSUQ7WUFBT2tCO1NBQUs7UUFDekJIO0lBQ0o7SUFFQSxNQUFNSSxhQUFhLE9BQU9qQjtRQUN0QkQsU0FBU0QsTUFBTW9CLE1BQU0sQ0FBQyxDQUFDRixPQUFTQSxLQUFLaEIsRUFBRSxLQUFLQTtJQUNoRDtJQUVBLE1BQU1tQixXQUFXLE9BQU9uQjtRQUNwQixJQUFHLENBQUNHLFVBQ0pVO1FBQ0FMLGNBQWNWLE1BQU1zQixJQUFJLENBQUMsQ0FBQ0osT0FBU0EsS0FBS2hCLEVBQUUsS0FBS0E7SUFDbkQ7SUFHRixxQkFDRSw4REFBQ3FCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNoQyx5REFBR0E7WUFDRmlDLFdBQVU7WUFDVkMsSUFBSTtnQkFDRixtQkFBbUI7b0JBQUVDLEdBQUc7b0JBQUdDLE9BQU87Z0JBQU87WUFDM0M7WUFDQUMsVUFBVTtZQUNWQyxjQUFhO1lBQ2JOLFdBQVU7c0JBRVYsNEVBQUM5QiwyREFBS0E7Z0JBQUNxQyxTQUFTOztrQ0FDZCw4REFBQ0M7d0JBQUdSLFdBQVU7a0NBQWlDOzs7Ozs7a0NBRS9DLDhEQUFDN0IsMERBQUlBO3dCQUFDc0MsU0FBUzt3QkFBQ0MsZ0JBQWU7a0NBQzdCLDRFQUFDekMsNERBQU1BOzRCQUNIb0IsT0FBT04sY0FBYyxZQUFZOzRCQUNqQzRCLFNBQVE7NEJBQ1JDLE9BQU87Z0NBQUVSLE9BQU87NEJBQUk7NEJBQ3BCUyxTQUFTdEI7c0NBRVJKLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7O29CQUl0QlQsMEJBQ0MsOERBQUNQLDJEQUFPQTt3QkFBQ3dDLE9BQU9yQjt3QkFBU0ksVUFBVVo7Ozs7OztvQkFHcENULE1BQU11QyxNQUFNLEdBQUcsa0JBQ2hCLDhEQUFDMUMseURBQUtBO3dCQUNORyxPQUFPQTt3QkFDUHdDLFVBQVVyQjt3QkFDVnNCLFFBQVFwQjs7Ozs7a0RBQ0gsOERBQUNxQjt3QkFBRWxCLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBMUZNekI7S0FBQUE7QUEyRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hbmFnZS10YXNrcy9wYWdlLnRzeD8yZTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza3NcIjtcclxuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkVGFza1wiO1xyXG5cclxuaW50ZXJmYWNlIFRhc2sge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1hbmFnZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlRhc2sgMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRhc2sgMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJUYXNrIDJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0YXNrIDJcIixcclxuICAgICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXR0b25Db2xvciwgc2V0QnV0dG9uQ29sb3JdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdGFza1RvRWRpdCwgc2V0VGFza1RvRWRpdF0gPSB1c2VTdGF0ZTxUYXNrPigpXHJcblxyXG4gIFxyXG4gICAgY29uc3QgW2J1dHRvblN0eWxlLCBzZXRCdXR0b25TdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcclxuICAgICAgdGV4dDogXCJBZGRcIixcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Rm9ybSghc2hvd0Zvcm0pO1xyXG4gICAgICBzZXRCdXR0b25Db2xvcighYnV0dG9uQ29sb3IpO1xyXG4gICAgICBzZXRCdXR0b25TdHlsZSgocHJldlN0eWxlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdHlsZSxcclxuICAgICAgICB0ZXh0OiBzaG93Rm9ybSA/IFwiQWRkXCIgOiBcIkNhbmNlbFwiLFxyXG4gICAgICB9KSk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKHRhc2s6IHtpZDpudW1iZXI7IG5hbWU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCB0YXNrXSk7XHJcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2sgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKCFzaG93Rm9ybSlcclxuICAgICAgICB0b2dnbGVGb3JtKClcclxuICAgICAgICBzZXRUYXNrVG9FZGl0KHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY29tcG9uZW50PVwiZm9ybVwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIFwiJiA+IDpub3Qoc3R5bGUpXCI6IHsgbTogMSwgd2lkdGg6IFwiNDVjaFwiIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkIGJvcmRlci1ncmVlbi0zMDAgbXQtM1wiXHJcbiAgICAgID5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtY2VudGVyXCI+VGFzayBNYW5hZ2VyPC9oMT5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17YnV0dG9uQ29sb3IgPyBcInN1Y2Nlc3NcIiA6IFwid2FybmluZ1wifVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVGb3JtfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uU3R5bGUudGV4dH1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAge3Nob3dGb3JtICYmIChcclxuICAgICAgICAgICAgPEFkZFRhc2sgb25BZGQ9e2FkZFRhc2t9IGVkaXRUYXNrPXt0YXNrVG9FZGl0fSAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dGFza3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxUYXNrcyBcclxuICAgICAgICAgIHRhc2tzPXt0YXNrc30gXHJcbiAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlVGFza30gXHJcbiAgICAgICAgICBvbkVkaXQ9e2VkaXRUYXNrfVxyXG4gICAgICAgICAgLz4pOiA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+Tm8gdGFza3MgdG8gc2hvdzwvcD59XHJcblxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlVGFza3M7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJTdGFjayIsIkdyaWQiLCJ1c2VTdGF0ZSIsIlRhc2tzIiwiQWRkVGFzayIsIk1hbmFnZVRhc2tzIiwidGFza3MiLCJzZXRUYXNrcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsImJ1dHRvbkNvbG9yIiwic2V0QnV0dG9uQ29sb3IiLCJ0YXNrVG9FZGl0Iiwic2V0VGFza1RvRWRpdCIsImJ1dHRvblN0eWxlIiwic2V0QnV0dG9uU3R5bGUiLCJjb2xvciIsInRleHQiLCJ0b2dnbGVGb3JtIiwicHJldlN0eWxlIiwiYWRkVGFzayIsInRhc2siLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwiZWRpdFRhc2siLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcG9uZW50Iiwic3giLCJtIiwid2lkdGgiLCJub1ZhbGlkYXRlIiwiYXV0b0NvbXBsZXRlIiwic3BhY2luZyIsImgxIiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50Iiwic3R5bGUiLCJvbkNsaWNrIiwib25BZGQiLCJsZW5ndGgiLCJvbkRlbGV0ZSIsIm9uRWRpdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/manage-tasks/page.tsx\n"));

/***/ })

});