/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pubSub: () => (/* binding */ pubSub)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\n\nconst pubSub = new _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nconst defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Miscelaneous todos\", \"A list of tasks from various projects\", \"31/12/2999\")\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QjtBQUNLO0FBQ047O0FBRTVCLG1CQUFtQiwrQ0FBTTtBQUN6QiwyQkFBMkIsbURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWJcIlxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLmpzXCJcblxuY29uc3QgcHViU3ViID0gbmV3IHB1YnN1YigpXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiTWlzY2VsYW5lb3VzIHRvZG9zXCIsIFwiQSBsaXN0IG9mIHRhc2tzIGZyb20gdmFyaW91cyBwcm9qZWN0c1wiLCBcIjMxLzEyLzI5OTlcIilcblxuZXhwb3J0IHsgcHViU3ViIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass Project {\n    constructor(name, description, deadline) {\n        this.name = name\n        this.description = description\n        this.deadline = deadline\n        this.todos = []\n    }\n    addTodo(todo) {\n        this.todos.push(todo)\n    }\n    removeTodo(todoIndex) {\n        this.todos.splice(todoIndex, 1)\n    }\n    changeTodoOrder(todoIndex, newIndex) {\n        let todo = this.todos.at(todoIndex)\n        this.todos.splice(todoIndex, 1)\n        this.todos.splice(newIndex, 0, todo)\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanM/ZjU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9pbmRleFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmRlYWRsaW5lID0gZGVhZGxpbmVcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICB9XG4gICAgcmVtb3ZlVG9kbyh0b2RvSW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKVxuICAgIH1cbiAgICBjaGFuZ2VUb2RvT3JkZXIodG9kb0luZGV4LCBuZXdJbmRleCkge1xuICAgICAgICBsZXQgdG9kbyA9IHRoaXMudG9kb3MuYXQodG9kb0luZGV4KVxuICAgICAgICB0aGlzLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKG5ld0luZGV4LCAwLCB0b2RvKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pubsub)\n/* harmony export */ });\nclass pubsub {\n    constructor() {\n        this.queue = {}\n    }\n    on(subName, fn) {\n        if (this.queue[subName] == undefined) {this.queue[subName] = []}\n        if (Array.isArray(fn)) {fn.forEach(func => this.queue[subName].push(func))}\n        else {this.queue[subName].push(fn)}\n    }\n    off(subName, fn) {\n        let index = this.queue[subName].indexOf(fn)\n        this.queue[subName].splice(index, 1)\n    }\n    emit(subName, values) {\n        this.queue[subName].forEach(fn => fn(values))\n    }\n    clear() {\n        this.queue = {}\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHVic3ViLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wdWJzdWIuanM/YmFlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBwdWJzdWIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnF1ZXVlID0ge31cbiAgICB9XG4gICAgb24oc3ViTmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMucXVldWVbc3ViTmFtZV0gPT0gdW5kZWZpbmVkKSB7dGhpcy5xdWV1ZVtzdWJOYW1lXSA9IFtdfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmbikpIHtmbi5mb3JFYWNoKGZ1bmMgPT4gdGhpcy5xdWV1ZVtzdWJOYW1lXS5wdXNoKGZ1bmMpKX1cbiAgICAgICAgZWxzZSB7dGhpcy5xdWV1ZVtzdWJOYW1lXS5wdXNoKGZuKX1cbiAgICB9XG4gICAgb2ZmKHN1Yk5hbWUsIGZuKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbc3ViTmFtZV0uaW5kZXhPZihmbilcbiAgICAgICAgdGhpcy5xdWV1ZVtzdWJOYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICAgIGVtaXQoc3ViTmFtZSwgdmFsdWVzKSB7XG4gICAgICAgIHRoaXMucXVldWVbc3ViTmFtZV0uZm9yRWFjaChmbiA9PiBmbih2YWx1ZXMpKVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IHt9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pubsub.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass Todo {\n    constructor(description, priority) {\n        this.description = description\n        this.priority = priority\n        this.completed = false\n    }\n    markAsCompleted() {\n        this.completed = true\n    }\n    editDescription(newDescription) {\n        this.description = newDescription\n    }\n    editPriority(newPriority) {\n        this.priority = newPriority\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9pbmRleFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2VcbiAgICB9XG4gICAgbWFya0FzQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWVcbiAgICB9XG4gICAgZWRpdERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIH1cbiAgICBlZGl0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;