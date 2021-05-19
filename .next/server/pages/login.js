(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\marit\\OneDrive\\Skrivebord\\next-cookie-auth\\components\\LoginForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class LoginForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      password: ''
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventeDefault();
      console.log(this.state);
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: this.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        text: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");

var _jsxFileName = "C:\\Users\\marit\\OneDrive\\Skrivebord\\next-cookie-auth\\pages\\login.js";

function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJSZWFjdCIsImVtYWlsIiwicGFzc3dvcmQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudGVEZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBTixTQUF3QkMsd0RBQXhCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDNUI7QUFDSkMsV0FBSyxFQUFFLEVBREg7QUFFSkMsY0FBUSxFQUFFO0FBRk4sS0FENEI7O0FBQUEsMENBTXJCQyxLQUFLLElBQUk7QUFDcEIsV0FBS0MsUUFBTCxDQUFjO0FBQUUsU0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBQWQsR0FBcUJILEtBQUssQ0FBQ0UsTUFBTixDQUFhRTtBQUFwQyxPQUFkO0FBQ0gsS0FSbUM7O0FBQUEsMENBVXJCSixLQUFLLElBQUk7QUFDcEJBLFdBQUssQ0FBQ0ssZUFBTjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUNILEtBYm1DO0FBQUE7O0FBZXBDQyxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFNLGNBQVEsRUFBRSxLQUFLQyxZQUFyQjtBQUFBLDhCQUNJO0FBQUEsK0JBQUs7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUNMLGNBQUksRUFBQyxPQURBO0FBRUwscUJBQVcsRUFBQyxPQUZQO0FBR0wsa0JBQVEsRUFBRSxLQUFLQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSTtBQUFBLCtCQUFLO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFDTCxjQUFJLEVBQUMsVUFEQTtBQUVMLHFCQUFXLEVBQUMsVUFGUDtBQUdMLGtCQUFRLEVBQUUsS0FBS0E7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBV0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZ0JIOztBQWhDbUM7O0FBbUN4QywrREFBZWYsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUVlLFNBQVNnQixLQUFULEdBQWlCO0FBQzVCLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdILEM7Ozs7Ozs7Ozs7O0FDTkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJydcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnRlRGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGV4dD1cInN1Ym1pdFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=