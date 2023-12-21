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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"(app-pages-browser)/./app/components/Tasks.tsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"(app-pages-browser)/./app/components/AddTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ManageTasks = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Task 1\",\n            description: \"This is task 1\"\n        },\n        {\n            id: 2,\n            name: \"Task 2\",\n            description: \"This is task 2\"\n        }\n    ]);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonColor, setButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [buttonStyle, setButtonStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"success\",\n        text: \"Add\"\n    });\n    const toggleForm = ()=>{\n        setShowForm(!showForm);\n        setButtonColor(!buttonColor);\n        setButtonStyle((prevStyle)=>({\n                ...prevStyle,\n                text: showForm ? \"Add\" : \"Cancel\"\n            }));\n    };\n    const addTask = async (task)=>{\n        const tid = Math.floor(Math.random() * 10000) + 1;\n        const newTask = {\n            ...task,\n            id: tid\n        };\n        setTasks([\n            ...tasks,\n            newTask\n        ]);\n        toggleForm();\n    };\n    const deleteTask = async (id)=>{\n        setTasks(tasks.filter((task)=>task.id !== id));\n    };\n    const editTask = async (id)=>{\n        if (!showForm) toggleForm();\n        const taskToEdit1 = tasks.find((task)=>task.id === id);\n        return taskToEdit1;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& > :not(style)\": {\n                    m: 1,\n                    width: \"45ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            className: \"border-2 rounded border-green-300 mt-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl text-center\",\n                        children: \"Task Manager\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        justifyContent: \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: buttonColor ? \"success\" : \"warning\",\n                            variant: \"contained\",\n                            style: {\n                                width: 120\n                            },\n                            onClick: toggleForm,\n                            children: buttonStyle.text\n                        }, void 0, false, {\n                            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined),\n                    showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAdd: addTask,\n                        editTask: taskToEdit\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, undefined),\n                    tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        tasks: tasks,\n                        onDelete: deleteTask,\n                        onEdit: editTask\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"No tasks to show\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageTasks, \"lgzNpfBo0ZebSIjJykDtZrW1SGw=\");\n_c = ManageTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTasks);\nvar _c;\n$RefreshReg$(_c, \"ManageTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBRU07QUFDRjtBQUNGO0FBQ0w7QUFDTztBQUNJO0FBUTVDLE1BQU1PLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztRQUN2QztZQUNJTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO1FBQ2pCO0tBQ0g7SUFDRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRy9DLE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUM3Q2UsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCUCxZQUFZLENBQUNEO1FBQ2JHLGVBQWUsQ0FBQ0Q7UUFDaEJHLGVBQWUsQ0FBQ0ksWUFBZTtnQkFDN0IsR0FBR0EsU0FBUztnQkFDWkYsTUFBTVAsV0FBVyxRQUFRO1lBQzNCO0lBQ0Y7SUFFQSxNQUFNVSxVQUFVLE9BQU9DO1FBQ25CLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLFNBQVM7UUFDaEQsTUFBTUMsVUFBVTtZQUFFLEdBQUdMLElBQUk7WUFBRWQsSUFBSWU7UUFBSTtRQUNuQ2hCLFNBQVM7ZUFBSUQ7WUFBT3FCO1NBQVE7UUFDNUJSO0lBQ0o7SUFFQSxNQUFNUyxhQUFhLE9BQU9wQjtRQUN0QkQsU0FBU0QsTUFBTXVCLE1BQU0sQ0FBQyxDQUFDUCxPQUFTQSxLQUFLZCxFQUFFLEtBQUtBO0lBQ2hEO0lBRUEsTUFBTXNCLFdBQVcsT0FBT3RCO1FBQ3BCLElBQUcsQ0FBQ0csVUFDSlE7UUFFQSxNQUFNWSxjQUFhekIsTUFBTTBCLElBQUksQ0FBQyxDQUFDVixPQUFTQSxLQUFLZCxFQUFFLEtBQUtBO1FBQ3BELE9BQU91QjtJQUVYO0lBR0YscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNwQyx5REFBR0E7WUFDRnFDLFdBQVU7WUFDVkMsSUFBSTtnQkFDRixtQkFBbUI7b0JBQUVDLEdBQUc7b0JBQUdDLE9BQU87Z0JBQU87WUFDM0M7WUFDQUMsVUFBVTtZQUNWQyxjQUFhO1lBQ2JOLFdBQVU7c0JBRVYsNEVBQUNsQywyREFBS0E7Z0JBQUN5QyxTQUFTOztrQ0FDZCw4REFBQ0M7d0JBQUdSLFdBQVU7a0NBQWlDOzs7Ozs7a0NBRS9DLDhEQUFDakMsMERBQUlBO3dCQUFDMEMsU0FBUzt3QkFBQ0MsZ0JBQWU7a0NBQzdCLDRFQUFDN0MsNERBQU1BOzRCQUNIa0IsT0FBT0osY0FBYyxZQUFZOzRCQUNqQ2dDLFNBQVE7NEJBQ1JDLE9BQU87Z0NBQUVSLE9BQU87NEJBQUk7NEJBQ3BCUyxTQUFTNUI7c0NBRVJKLFlBQVlHLElBQUk7Ozs7Ozs7Ozs7O29CQUl0QlAsMEJBQ0MsOERBQUNQLDJEQUFPQTt3QkFBQzRDLE9BQU8zQjt3QkFBU1MsVUFBVUM7Ozs7OztvQkFHcEN6QixNQUFNMkMsTUFBTSxHQUFHLGtCQUNoQiw4REFBQzlDLHlEQUFLQTt3QkFDTkcsT0FBT0E7d0JBQ1A0QyxVQUFVdEI7d0JBQ1Z1QixRQUFRckI7Ozs7O2tEQUNILDhEQUFDc0I7d0JBQUVsQixXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQTVGTTdCO0tBQUFBO0FBNkZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3g/MmU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhc2tzIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2tzXCI7XHJcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZFRhc2tcIjtcclxuXHJcbmludGVyZmFjZSBUYXNrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNYW5hZ2VUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJUYXNrIDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0YXNrIDFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGFzayAyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGFzayAyXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnV0dG9uQ29sb3IsIHNldEJ1dHRvbkNvbG9yXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBcclxuICAgIGNvbnN0IFtidXR0b25TdHlsZSwgc2V0QnV0dG9uU3R5bGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXHJcbiAgICAgIHRleHQ6IFwiQWRkXCIsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgc2V0U2hvd0Zvcm0oIXNob3dGb3JtKTtcclxuICAgICAgc2V0QnV0dG9uQ29sb3IoIWJ1dHRvbkNvbG9yKTtcclxuICAgICAgc2V0QnV0dG9uU3R5bGUoKHByZXZTdHlsZSkgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3R5bGUsXHJcbiAgICAgICAgdGV4dDogc2hvd0Zvcm0gPyBcIkFkZFwiIDogXCJDYW5jZWxcIixcclxuICAgICAgfSkpO1xyXG4gICAgfTtcclxuIFxyXG4gICAgY29uc3QgYWRkVGFzayA9IGFzeW5jICh0YXNrOiB7IG5hbWU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApICsgMTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0geyAuLi50YXNrLCBpZDogdGlkIH07IFxyXG4gICAgICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xyXG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZighc2hvd0Zvcm0pXHJcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiB0YXNrVG9FZGl0XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBcIiYgPiA6bm90KHN0eWxlKVwiOiB7IG06IDEsIHdpZHRoOiBcIjQ1Y2hcIiB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZCBib3JkZXItZ3JlZW4tMzAwIG10LTNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCB0ZXh0LWNlbnRlclwiPlRhc2sgTWFuYWdlcjwvaDE+XHJcblxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2J1dHRvbkNvbG9yID8gXCJzdWNjZXNzXCIgOiBcIndhcm5pbmdcIn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRm9ybX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2J1dHRvblN0eWxlLnRleHR9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHtzaG93Rm9ybSAmJiAoXHJcbiAgICAgICAgICAgIDxBZGRUYXNrIG9uQWRkPXthZGRUYXNrfSBlZGl0VGFzaz17dGFza1RvRWRpdH0gLz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8VGFza3MgXHJcbiAgICAgICAgICB0YXNrcz17dGFza3N9IFxyXG4gICAgICAgICAgb25EZWxldGU9e2RlbGV0ZVRhc2t9IFxyXG4gICAgICAgICAgb25FZGl0PXtlZGl0VGFza31cclxuICAgICAgICAgIC8+KTogPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPk5vIHRhc2tzIHRvIHNob3c8L3A+fVxyXG5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZVRhc2tzO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJHcmlkIiwidXNlU3RhdGUiLCJUYXNrcyIsIkFkZFRhc2siLCJNYW5hZ2VUYXNrcyIsInRhc2tzIiwic2V0VGFza3MiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJidXR0b25Db2xvciIsInNldEJ1dHRvbkNvbG9yIiwiYnV0dG9uU3R5bGUiLCJzZXRCdXR0b25TdHlsZSIsImNvbG9yIiwidGV4dCIsInRvZ2dsZUZvcm0iLCJwcmV2U3R5bGUiLCJhZGRUYXNrIiwidGFzayIsInRpZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1Rhc2siLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwiZWRpdFRhc2siLCJ0YXNrVG9FZGl0IiwiZmluZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsInN4IiwibSIsIndpZHRoIiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsInNwYWNpbmciLCJoMSIsImNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwidmFyaWFudCIsInN0eWxlIiwib25DbGljayIsIm9uQWRkIiwibGVuZ3RoIiwib25EZWxldGUiLCJvbkVkaXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/manage-tasks/page.tsx\n"));

/***/ })

});