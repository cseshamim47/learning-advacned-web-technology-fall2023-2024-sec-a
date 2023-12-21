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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"(app-pages-browser)/./app/components/Tasks.tsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"(app-pages-browser)/./app/components/AddTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ManageTasks = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Task 1\",\n            description: \"This is task 1\"\n        },\n        {\n            id: 2,\n            name: \"Task 2\",\n            description: \"This is task 2\"\n        }\n    ]);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonColor, setButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [taskToEdit, setTaskToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [buttonStyle, setButtonStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"success\",\n        text: \"Add\"\n    });\n    const toggleForm = ()=>{\n        setShowForm(!showForm);\n        setButtonColor(!buttonColor);\n        setButtonStyle((prevStyle)=>({\n                ...prevStyle,\n                text: showForm ? \"Add\" : \"Cancel\"\n            }));\n        setTaskToEdit(undefined);\n    };\n    const addTask = async (newTask)=>{\n        const prevTask = tasks.filter((task)=>task.id != newTask.id);\n        setTasks([\n            ...prevTask,\n            newTask\n        ]);\n        // console.log(prevTask)\n        // setTasks([...tasks, newTask]);\n        toggleForm();\n    };\n    const deleteTask = async (id)=>{\n        setTasks(tasks.filter((task)=>task.id !== id));\n    };\n    const getEditTaskId = async (id)=>{\n        if (!showForm) toggleForm();\n        setTaskToEdit(tasks.find((task)=>task.id === id));\n        console.log(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& > :not(style)\": {\n                    m: 1,\n                    width: \"45ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            className: \"border-2 rounded border-green-300 mt-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl text-center\",\n                        children: \"Task Manager\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        justifyContent: \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: buttonColor ? \"success\" : \"warning\",\n                            variant: \"contained\",\n                            style: {\n                                width: 120\n                            },\n                            onClick: toggleForm,\n                            children: buttonStyle.text\n                        }, void 0, false, {\n                            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined),\n                    showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAdd: addTask,\n                        taskToEdit: taskToEdit\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, undefined),\n                    tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        tasks: tasks,\n                        onDelete: deleteTask,\n                        onEdit: getEditTaskId\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"No tasks to show\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageTasks, \"hhhkeW68lIqBmhKz8yAkgUqoh5Y=\");\n_c = ManageTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTasks);\nvar _c;\n$RefreshReg$(_c, \"ManageTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBRU07QUFDRjtBQUNGO0FBQ0w7QUFDTztBQUNJO0FBUTVDLE1BQU1PLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztRQUN2QztZQUNJTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO1FBQ2pCO0tBQ0g7SUFDRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUE7SUFHNUMsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUM3Q2lCLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlQsWUFBWSxDQUFDRDtRQUNiRyxlQUFlLENBQUNEO1FBQ2hCSyxlQUFlLENBQUNJLFlBQWU7Z0JBQzdCLEdBQUdBLFNBQVM7Z0JBQ1pGLE1BQU1ULFdBQVcsUUFBUTtZQUMzQjtRQUNBSyxjQUFjTztJQUNoQjtJQUVBLE1BQU1DLFVBQVUsT0FBT0M7UUFFbkIsTUFBTUMsV0FBbUJwQixNQUFNcUIsTUFBTSxDQUFDLENBQUNDLE9BQVFBLEtBQUtwQixFQUFFLElBQUlpQixRQUFRakIsRUFBRTtRQUNwRUQsU0FBUztlQUFJbUI7WUFBVUQ7U0FBUTtRQUMvQix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDSjtJQUNKO0lBRUEsTUFBTVEsYUFBYSxPQUFPckI7UUFDdEJELFNBQVNELE1BQU1xQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS3BCLEVBQUUsS0FBS0E7SUFDaEQ7SUFFQSxNQUFNc0IsZ0JBQWdCLE9BQU90QjtRQUN6QixJQUFHLENBQUNHLFVBQ0pVO1FBRUpMLGNBQWNWLE1BQU15QixJQUFJLENBQUMsQ0FBQ0gsT0FBU0EsS0FBS3BCLEVBQUUsS0FBS0E7UUFDL0N3QixRQUFRQyxHQUFHLENBQUN6QjtJQUNaO0lBR0YscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckMseURBQUdBO1lBQ0ZzQyxXQUFVO1lBQ1ZDLElBQUk7Z0JBQ0YsbUJBQW1CO29CQUFFQyxHQUFHO29CQUFHQyxPQUFPO2dCQUFPO1lBQzNDO1lBQ0FDLFVBQVU7WUFDVkMsY0FBYTtZQUNiTixXQUFVO3NCQUVWLDRFQUFDbkMsMkRBQUtBO2dCQUFDMEMsU0FBUzs7a0NBQ2QsOERBQUNDO3dCQUFHUixXQUFVO2tDQUFpQzs7Ozs7O2tDQUUvQyw4REFBQ2xDLDBEQUFJQTt3QkFBQzJDLFNBQVM7d0JBQUNDLGdCQUFlO2tDQUM3Qiw0RUFBQzlDLDREQUFNQTs0QkFDSG9CLE9BQU9OLGNBQWMsWUFBWTs0QkFDakNpQyxTQUFROzRCQUNSQyxPQUFPO2dDQUFFUixPQUFPOzRCQUFJOzRCQUNwQlMsU0FBUzNCO3NDQUVSSixZQUFZRyxJQUFJOzs7Ozs7Ozs7OztvQkFJdEJULDBCQUNDLDhEQUFDUCwyREFBT0E7d0JBQUM2QyxPQUFPekI7d0JBQVNULFlBQVlBOzs7Ozs7b0JBR3RDVCxNQUFNNEMsTUFBTSxHQUFHLGtCQUNoQiw4REFBQy9DLHlEQUFLQTt3QkFDTkcsT0FBT0E7d0JBQ1A2QyxVQUFVdEI7d0JBQ1Z1QixRQUFRdEI7Ozs7O2tEQUNILDhEQUFDdUI7d0JBQUVsQixXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQS9GTTlCO0tBQUFBO0FBZ0dOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3g/MmU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhc2tzIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2tzXCI7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZFRhc2tcIjtcclxuXHJcbmludGVyZmFjZSBUYXNrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNYW5hZ2VUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJUYXNrIDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0YXNrIDFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGFzayAyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGFzayAyXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnV0dG9uQ29sb3IsIHNldEJ1dHRvbkNvbG9yXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Rhc2tUb0VkaXQsIHNldFRhc2tUb0VkaXRdID0gdXNlU3RhdGU8VGFzaz4oKVxyXG5cclxuICBcclxuICAgIGNvbnN0IFtidXR0b25TdHlsZSwgc2V0QnV0dG9uU3R5bGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXHJcbiAgICAgIHRleHQ6IFwiQWRkXCIsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgc2V0U2hvd0Zvcm0oIXNob3dGb3JtKTtcclxuICAgICAgc2V0QnV0dG9uQ29sb3IoIWJ1dHRvbkNvbG9yKTtcclxuICAgICAgc2V0QnV0dG9uU3R5bGUoKHByZXZTdHlsZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3R5bGUsXHJcbiAgICAgICAgdGV4dDogc2hvd0Zvcm0gPyBcIkFkZFwiIDogXCJDYW5jZWxcIixcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRUYXNrVG9FZGl0KHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKG5ld1Rhc2s6IFRhc2spID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcmV2VGFzazogVGFza1tdID0gdGFza3MuZmlsdGVyKCh0YXNrKT0+IHRhc2suaWQgIT0gbmV3VGFzay5pZClcclxuICAgICAgICBzZXRUYXNrcyhbLi4ucHJldlRhc2ssIG5ld1Rhc2tdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmV2VGFzaylcclxuICAgICAgICAvLyBzZXRUYXNrcyhbLi4udGFza3MsIG5ld1Rhc2tdKTtcclxuICAgICAgICB0b2dnbGVGb3JtKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRhc2tzKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFZGl0VGFza0lkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZighc2hvd0Zvcm0pXHJcbiAgICAgICAgdG9nZ2xlRm9ybSgpXHJcbiAgICAgICAgXHJcbiAgICBzZXRUYXNrVG9FZGl0KHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKSlcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjb21wb25lbnQ9XCJmb3JtXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgXCImID4gOm5vdChzdHlsZSlcIjogeyBtOiAxLCB3aWR0aDogXCI0NWNoXCIgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQgYm9yZGVyLWdyZWVuLTMwMCBtdC0zXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdGV4dC1jZW50ZXJcIj5UYXNrIE1hbmFnZXI8L2gxPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b25Db2xvciA/IFwic3VjY2Vzc1wiIDogXCJ3YXJuaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUZvcm19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtidXR0b25TdHlsZS50ZXh0fVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7c2hvd0Zvcm0gJiYgKFxyXG4gICAgICAgICAgICA8QWRkVGFzayBvbkFkZD17YWRkVGFza30gdGFza1RvRWRpdD17dGFza1RvRWRpdH0gLz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8VGFza3MgXHJcbiAgICAgICAgICB0YXNrcz17dGFza3N9IFxyXG4gICAgICAgICAgb25EZWxldGU9e2RlbGV0ZVRhc2t9IFxyXG4gICAgICAgICAgb25FZGl0PXtnZXRFZGl0VGFza0lkfVxyXG4gICAgICAgICAgLz4pOiA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+Tm8gdGFza3MgdG8gc2hvdzwvcD59XHJcblxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlVGFza3M7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJTdGFjayIsIkdyaWQiLCJ1c2VTdGF0ZSIsIlRhc2tzIiwiQWRkVGFzayIsIk1hbmFnZVRhc2tzIiwidGFza3MiLCJzZXRUYXNrcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsImJ1dHRvbkNvbG9yIiwic2V0QnV0dG9uQ29sb3IiLCJ0YXNrVG9FZGl0Iiwic2V0VGFza1RvRWRpdCIsImJ1dHRvblN0eWxlIiwic2V0QnV0dG9uU3R5bGUiLCJjb2xvciIsInRleHQiLCJ0b2dnbGVGb3JtIiwicHJldlN0eWxlIiwidW5kZWZpbmVkIiwiYWRkVGFzayIsIm5ld1Rhc2siLCJwcmV2VGFzayIsImZpbHRlciIsInRhc2siLCJkZWxldGVUYXNrIiwiZ2V0RWRpdFRhc2tJZCIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcG9uZW50Iiwic3giLCJtIiwid2lkdGgiLCJub1ZhbGlkYXRlIiwiYXV0b0NvbXBsZXRlIiwic3BhY2luZyIsImgxIiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50Iiwic3R5bGUiLCJvbkNsaWNrIiwib25BZGQiLCJsZW5ndGgiLCJvbkRlbGV0ZSIsIm9uRWRpdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/manage-tasks/page.tsx\n"));

/***/ })

});