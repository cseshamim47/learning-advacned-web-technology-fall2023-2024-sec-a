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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddTask = (param)=>{\n    let { onAdd } = param;\n    _s();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskDescription, setTaskDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTheTask = async ()=>{\n        if (!taskName) {\n            alert(\"Please add a task name\");\n            return;\n        }\n        await onAdd({\n            name: taskName,\n            description: taskDescription\n        });\n        setTaskName(\"\");\n        setTaskDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Name\",\n                variant: \"outlined\",\n                value: taskName,\n                onChange: (e)=>setTaskName(e.target.value)\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"outlined-basic\",\n                label: \"Task Desc\",\n                variant: \"outlined\",\n                multiline: true,\n                value: taskDescription,\n                onChange: (e)=>setTaskDescription(e.target.value),\n                maxRows: 4\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                size: \"small\",\n                color: \"success\",\n                onClick: addTheTask,\n                children: \"Save Task\"\n            }, void 0, false, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"FfUMhiobSOlq0BRXKn7GR1DzDpQ=\");\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBQ047QUFFVDtBQU1qQyxNQUFNRyxVQUFVO1FBQUMsRUFBQ0MsS0FBSyxFQUFlOztJQUdsQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNTyxhQUFhO1FBQ2YsSUFBRyxDQUFDSixVQUNKO1lBQ0lLLE1BQU07WUFDTjtRQUNKO1FBQ0EsTUFBTU4sTUFBTTtZQUFDTyxNQUFNTjtZQUFVTyxhQUFhTDtRQUFlO1FBQ3pERCxZQUFZO1FBQ1pFLG1CQUFtQjtJQUN2QjtJQUVGLHFCQUNFOzswQkFDWSw4REFBQ1IsK0RBQVNBO2dCQUNWYSxJQUFHO2dCQUNIQyxPQUFNO2dCQUNOQyxTQUFRO2dCQUNSQyxPQUFPWDtnQkFDUFksVUFBVSxDQUFDQyxJQUFNWixZQUFZWSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFHM0MsOERBQUNoQiwrREFBU0E7Z0JBQ1ZhLElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05DLFNBQVE7Z0JBQ1JLLFNBQVM7Z0JBQ1RKLE9BQU9UO2dCQUNQVSxVQUFVLENBQUNDLElBQU1WLG1CQUFtQlUsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUNsREssU0FBUzs7Ozs7OzBCQUdULDhEQUFDcEIsNERBQU1BO2dCQUNQYyxTQUFRO2dCQUNSTyxNQUFLO2dCQUNMQyxPQUFNO2dCQUNOQyxTQUFTZjswQkFDUjs7Ozs7Ozs7QUFLakI7R0EvQ01OO0tBQUFBO0FBZ0ROLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4P2Y0NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIGFkZFRhc2tQcm9wcyA9IHtcclxuICAgIG9uQWRkOiAodGFzazoge25hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZ30pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEFkZFRhc2sgPSAoe29uQWRkfTogYWRkVGFza1Byb3BzKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbdGFza05hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Rhc2tEZXNjcmlwdGlvbiwgc2V0VGFza0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRoZVRhc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXRhc2tOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgYWRkIGEgdGFzayBuYW1lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgb25BZGQoe25hbWU6IHRhc2tOYW1lLCBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9ufSk7XHJcbiAgICAgICAgc2V0VGFza05hbWUoXCJcIik7XHJcbiAgICAgICAgc2V0VGFza0Rlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCIgXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhc2sgTmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFza05hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhc2sgRGVzY1wiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFza0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrRGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgbWF4Um93cz17NH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRoZVRhc2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXZlIFRhc2tcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzayJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkFkZFRhc2siLCJvbkFkZCIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJ0YXNrRGVzY3JpcHRpb24iLCJzZXRUYXNrRGVzY3JpcHRpb24iLCJhZGRUaGVUYXNrIiwiYWxlcnQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibXVsdGlsaW5lIiwibWF4Um93cyIsInNpemUiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AddTask.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/manage-tasks/page.tsx":
/*!***********************************!*\
  !*** ./app/manage-tasks/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tasks */ \"(app-pages-browser)/./app/components/Tasks.tsx\");\n/* harmony import */ var _components_AddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddTask */ \"(app-pages-browser)/./app/components/AddTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ManageTasks = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Task 1\",\n            description: \"This is task 1\"\n        },\n        {\n            id: 2,\n            name: \"Task 2\",\n            description: \"This is task 2\"\n        }\n    ]);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonColor, setButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [buttonStyle, setButtonStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"success\",\n        text: \"Add\"\n    });\n    const toggleForm = ()=>{\n        setShowForm(!showForm);\n        setButtonColor(!buttonColor);\n        setButtonStyle((prevStyle)=>({\n                ...prevStyle,\n                text: showForm ? \"Add\" : \"Cancel\"\n            }));\n    };\n    const addTask = async (task)=>{\n        const tid = Math.floor(Math.random() * 10000) + 1;\n        const newTask = {\n            ...task,\n            id: tid\n        };\n        setTasks([\n            ...tasks,\n            newTask\n        ]);\n        toggleForm();\n    };\n    const deleteTask = async (id)=>{\n        setTasks(tasks.filter((task)=>task.id !== id));\n    };\n    const editTask = async (id)=>{\n        if (!showForm) toggleForm();\n        const taskToEdit = tasks.find((task)=>task.id === id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& > :not(style)\": {\n                    m: 1,\n                    width: \"45ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            className: \"border-2 rounded border-green-300 mt-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                spacing: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-4xl text-center\",\n                        children: \"Task Manager\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        justifyContent: \"flex-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: buttonColor ? \"success\" : \"warning\",\n                            variant: \"contained\",\n                            style: {\n                                width: 120\n                            },\n                            onClick: toggleForm,\n                            children: buttonStyle.text\n                        }, void 0, false, {\n                            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAdd: addTask\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined),\n                    tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        tasks: tasks,\n                        onDelete: deleteTask,\n                        onEdit: editTask\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"No tasks to show\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\STUDY\\\\AIUB Semester\\\\Semester 10 (17 Sep 23)\\\\ADV WEB\\\\learning-advacned-web-technology-fall2023-2024-sec-a\\\\sales-marketing-tool\\\\app\\\\manage-tasks\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageTasks, \"lgzNpfBo0ZebSIjJykDtZrW1SGw=\");\n_c = ManageTasks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTasks);\nvar _c;\n$RefreshReg$(_c, \"ManageTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYW5hZ2UtdGFza3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBRU07QUFDRjtBQUNGO0FBQ0w7QUFDTztBQUNJO0FBUTVDLE1BQU1PLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztRQUN2QztZQUNJTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtRQUNqQjtRQUNBO1lBQ0lGLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO1FBQ2pCO0tBQ0g7SUFDRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRy9DLE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUM3Q2UsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCUCxZQUFZLENBQUNEO1FBQ2JHLGVBQWUsQ0FBQ0Q7UUFDaEJHLGVBQWUsQ0FBQ0ksWUFBZTtnQkFDN0IsR0FBR0EsU0FBUztnQkFDWkYsTUFBTVAsV0FBVyxRQUFRO1lBQzNCO0lBQ0Y7SUFFQSxNQUFNVSxVQUFVLE9BQU9DO1FBQ25CLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLFNBQVM7UUFDaEQsTUFBTUMsVUFBVTtZQUFFLEdBQUdMLElBQUk7WUFBRWQsSUFBSWU7UUFBSTtRQUNuQ2hCLFNBQVM7ZUFBSUQ7WUFBT3FCO1NBQVE7UUFDNUJSO0lBQ0o7SUFFQSxNQUFNUyxhQUFhLE9BQU9wQjtRQUN0QkQsU0FBU0QsTUFBTXVCLE1BQU0sQ0FBQyxDQUFDUCxPQUFTQSxLQUFLZCxFQUFFLEtBQUtBO0lBQ2hEO0lBRUEsTUFBTXNCLFdBQVcsT0FBT3RCO1FBQ3BCLElBQUcsQ0FBQ0csVUFDSlE7UUFFQSxNQUFNWSxhQUFhekIsTUFBTTBCLElBQUksQ0FBQyxDQUFDVixPQUFTQSxLQUFLZCxFQUFFLEtBQUtBO0lBRXhEO0lBR0YscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDcEMseURBQUdBO1lBQ0ZxQyxXQUFVO1lBQ1ZDLElBQUk7Z0JBQ0YsbUJBQW1CO29CQUFFQyxHQUFHO29CQUFHQyxPQUFPO2dCQUFPO1lBQzNDO1lBQ0FDLFVBQVU7WUFDVkMsY0FBYTtZQUNiTixXQUFVO3NCQUVWLDRFQUFDbEMsMkRBQUtBO2dCQUFDeUMsU0FBUzs7a0NBQ2QsOERBQUNDO3dCQUFHUixXQUFVO2tDQUFpQzs7Ozs7O2tDQUUvQyw4REFBQ2pDLDBEQUFJQTt3QkFBQzBDLFNBQVM7d0JBQUNDLGdCQUFlO2tDQUM3Qiw0RUFBQzdDLDREQUFNQTs0QkFDSGtCLE9BQU9KLGNBQWMsWUFBWTs0QkFDakNnQyxTQUFROzRCQUNSQyxPQUFPO2dDQUFFUixPQUFPOzRCQUFJOzRCQUNwQlMsU0FBUzVCO3NDQUVSSixZQUFZRyxJQUFJOzs7Ozs7Ozs7OztvQkFJdEJQLDBCQUNDLDhEQUFDUCwyREFBT0E7d0JBQUM0QyxPQUFPM0I7Ozs7OztvQkFHakJmLE1BQU0yQyxNQUFNLEdBQUcsa0JBQ2hCLDhEQUFDOUMseURBQUtBO3dCQUNORyxPQUFPQTt3QkFDUDRDLFVBQVV0Qjt3QkFDVnVCLFFBQVFyQjs7Ozs7a0RBQ0gsOERBQUNzQjt3QkFBRWxCLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBM0ZNN0I7S0FBQUE7QUE0Rk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hbmFnZS10YXNrcy9wYWdlLnRzeD8yZTVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza3NcIjtcclxuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkVGFza1wiO1xyXG5cclxuaW50ZXJmYWNlIFRhc2sge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1hbmFnZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlRhc2sgMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRhc2sgMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJUYXNrIDJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0YXNrIDJcIixcclxuICAgICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtidXR0b25Db2xvciwgc2V0QnV0dG9uQ29sb3JdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIFxyXG4gICAgY29uc3QgW2J1dHRvblN0eWxlLCBzZXRCdXR0b25TdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcclxuICAgICAgdGV4dDogXCJBZGRcIixcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xyXG4gICAgICBzZXRTaG93Rm9ybSghc2hvd0Zvcm0pO1xyXG4gICAgICBzZXRCdXR0b25Db2xvcighYnV0dG9uQ29sb3IpO1xyXG4gICAgICBzZXRCdXR0b25TdHlsZSgocHJldlN0eWxlKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdHlsZSxcclxuICAgICAgICB0ZXh0OiBzaG93Rm9ybSA/IFwiQWRkXCIgOiBcIkNhbmNlbFwiLFxyXG4gICAgICB9KSk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKHRhc2s6IHsgbmFtZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICBjb25zdCB0aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgKyAxO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7IC4uLnRhc2ssIGlkOiB0aWQgfTsgXHJcbiAgICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCBuZXdUYXNrXSk7XHJcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYXNrcyh0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2sgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKCFzaG93Rm9ybSlcclxuICAgICAgICB0b2dnbGVGb3JtKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBcIiYgPiA6bm90KHN0eWxlKVwiOiB7IG06IDEsIHdpZHRoOiBcIjQ1Y2hcIiB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZCBib3JkZXItZ3JlZW4tMzAwIG10LTNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCB0ZXh0LWNlbnRlclwiPlRhc2sgTWFuYWdlcjwvaDE+XHJcblxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2J1dHRvbkNvbG9yID8gXCJzdWNjZXNzXCIgOiBcIndhcm5pbmdcIn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRm9ybX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2J1dHRvblN0eWxlLnRleHR9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHtzaG93Rm9ybSAmJiAoXHJcbiAgICAgICAgICAgIDxBZGRUYXNrIG9uQWRkPXthZGRUYXNrfSAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dGFza3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxUYXNrcyBcclxuICAgICAgICAgIHRhc2tzPXt0YXNrc30gXHJcbiAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlVGFza30gXHJcbiAgICAgICAgICBvbkVkaXQ9e2VkaXRUYXNrfVxyXG4gICAgICAgICAgLz4pOiA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+Tm8gdGFza3MgdG8gc2hvdzwvcD59XHJcblxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlVGFza3M7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJTdGFjayIsIkdyaWQiLCJ1c2VTdGF0ZSIsIlRhc2tzIiwiQWRkVGFzayIsIk1hbmFnZVRhc2tzIiwidGFza3MiLCJzZXRUYXNrcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsImJ1dHRvbkNvbG9yIiwic2V0QnV0dG9uQ29sb3IiLCJidXR0b25TdHlsZSIsInNldEJ1dHRvblN0eWxlIiwiY29sb3IiLCJ0ZXh0IiwidG9nZ2xlRm9ybSIsInByZXZTdHlsZSIsImFkZFRhc2siLCJ0YXNrIiwidGlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VGFzayIsImRlbGV0ZVRhc2siLCJmaWx0ZXIiLCJlZGl0VGFzayIsInRhc2tUb0VkaXQiLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcG9uZW50Iiwic3giLCJtIiwid2lkdGgiLCJub1ZhbGlkYXRlIiwiYXV0b0NvbXBsZXRlIiwic3BhY2luZyIsImgxIiwiY29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50Iiwic3R5bGUiLCJvbkNsaWNrIiwib25BZGQiLCJsZW5ndGgiLCJvbkRlbGV0ZSIsIm9uRWRpdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/manage-tasks/page.tsx\n"));

/***/ })

});