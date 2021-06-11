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
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\components\\LoginForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LoginForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: 'Sincere@april.biz',
      password: 'hildegard.org',
      error: '',
      isLoading: false
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      const {
        email,
        password
      } = this.state;
      event.preventDefault();
      this.setState({
        error: '',
        isLoading: true
      });
      (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.loginUser)(email, password).then(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/profile');
      }).catch(this.showError);
    });

    _defineProperty(this, "showError", err => {
      console.error(err);
      const error = err.response && err.response.data || err.message;
      this.setState({
        error,
        isLoading: false
      });
    });
  }

  render() {
    const {
      email,
      password,
      error,
      isLoading
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: this.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: email,
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: password,
          onChange: this.handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        diasbled: isLoading,
        type: "submit",
        children: isLoading ? "Sending" : "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "getUserProfile": function() { return /* binding */ getUserProfile; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().default.withCredentials) = true;
const loginUser = async (email, password) => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', {
    email,
    password
  });
  console.log(data);
};
const getUserProfile = async () => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/profile');
  return data;
};

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

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\pages\\login.js";

function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL2xpYi9hdXRoLmpzIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiUmVhY3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luVXNlciIsInRoZW4iLCJSb3V0ZXIiLCJjYXRjaCIsInNob3dFcnJvciIsImVyciIsImNvbnNvbGUiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiYXhpb3MiLCJsb2ciLCJnZXRVc2VyUHJvZmlsZSIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFOLFNBQXdCQyx3REFBeEIsQ0FBd0M7QUFBQTtBQUFBOztBQUFBLG1DQUM1QjtBQUNKQyxXQUFLLEVBQUUsbUJBREg7QUFFSkMsY0FBUSxFQUFFLGVBRk47QUFHSkMsV0FBSyxFQUFFLEVBSEg7QUFJSkMsZUFBUyxFQUFFO0FBSlAsS0FENEI7O0FBQUEsMENBUXJCQyxLQUFLLElBQUk7QUFDcEIsV0FBS0MsUUFBTCxDQUFjO0FBQUUsU0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBQWQsR0FBcUJILEtBQUssQ0FBQ0UsTUFBTixDQUFhRTtBQUFwQyxPQUFkO0FBQ0gsS0FWbUM7O0FBQUEsMENBWXJCSixLQUFLLElBQUk7QUFDcEIsWUFBTTtBQUFFSixhQUFGO0FBQVNDO0FBQVQsVUFBc0IsS0FBS1EsS0FBakM7QUFFQUwsV0FBSyxDQUFDTSxjQUFOO0FBQ0EsV0FBS0wsUUFBTCxDQUFjO0FBQUVILGFBQUssRUFBRSxFQUFUO0FBQWFDLGlCQUFTLEVBQUU7QUFBeEIsT0FBZDtBQUNBUSwwREFBUyxDQUFDWCxLQUFELEVBQVFDLFFBQVIsQ0FBVCxDQUEyQlcsSUFBM0IsQ0FBZ0MsTUFBTTtBQUNsQ0MsK0RBQUEsQ0FBWSxVQUFaO0FBQ0gsT0FGRCxFQUdDQyxLQUhELENBR08sS0FBS0MsU0FIWjtBQUlILEtBckJtQzs7QUFBQSx1Q0F1QnhCQyxHQUFHLElBQUk7QUFDZkMsYUFBTyxDQUFDZixLQUFSLENBQWNjLEdBQWQ7QUFDQSxZQUFNZCxLQUFLLEdBQUdjLEdBQUcsQ0FBQ0UsUUFBSixJQUFnQkYsR0FBRyxDQUFDRSxRQUFKLENBQWFDLElBQTdCLElBQXFDSCxHQUFHLENBQUNJLE9BQXZEO0FBQ0EsV0FBS2YsUUFBTCxDQUFjO0FBQUVILGFBQUY7QUFBU0MsaUJBQVMsRUFBRTtBQUFwQixPQUFkO0FBQ0gsS0EzQm1DO0FBQUE7O0FBNkJwQ2tCLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRXJCLFdBQUY7QUFBU0MsY0FBVDtBQUFtQkMsV0FBbkI7QUFBMEJDO0FBQTFCLFFBQXdDLEtBQUtNLEtBQW5EO0FBQ0Esd0JBQ0k7QUFBTSxjQUFRLEVBQUUsS0FBS2EsWUFBckI7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQ0osY0FBSSxFQUFDLE9BREQ7QUFFSixjQUFJLEVBQUMsT0FGRDtBQUdKLHFCQUFXLEVBQUMsT0FIUjtBQUlKLGVBQUssRUFBRXRCLEtBSkg7QUFLSixrQkFBUSxFQUFFLEtBQUt1QjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFTSTtBQUFBLCtCQUFLO0FBQ0wsY0FBSSxFQUFDLFVBREE7QUFFTCxjQUFJLEVBQUMsVUFGQTtBQUdMLHFCQUFXLEVBQUMsVUFIUDtBQUlMLGVBQUssRUFBRXRCLFFBSkY7QUFLTCxrQkFBUSxFQUFFLEtBQUtzQjtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFpQkk7QUFBUSxnQkFBUSxFQUFFcEIsU0FBbEI7QUFBNkIsWUFBSSxFQUFDLFFBQWxDO0FBQUEsa0JBQ0NBLFNBQVMsR0FBRyxTQUFILEdBQWU7QUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixFQW9CSUQsS0FBSyxpQkFBSTtBQUFBLGtCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF5Qkg7O0FBeERtQzs7QUEyRHhDLCtEQUFlSixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUVBMEIsc0VBQUEsR0FBZ0MsSUFBaEM7QUFFTyxNQUFNYixTQUFTLEdBQUcsT0FBT1gsS0FBUCxFQUFjQyxRQUFkLEtBQTJCO0FBQ3BELFFBQU07QUFBRWtCO0FBQUYsTUFBVyxNQUFNSyxpREFBQSxDQUFXLFlBQVgsRUFBeUI7QUFBRXhCLFNBQUY7QUFBU0M7QUFBVCxHQUF6QixDQUF2QjtBQUNBZ0IsU0FBTyxDQUFDUSxHQUFSLENBQVlOLElBQVo7QUFDQyxDQUhNO0FBS0EsTUFBTU8sY0FBYyxHQUFHLFlBQVk7QUFDdkMsUUFBTTtBQUFFUDtBQUFGLE1BQVcsTUFBTUssZ0RBQUEsQ0FBVSxjQUFWLENBQXZCO0FBQ0MsU0FBT0wsSUFBUDtBQUNILENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUVlLFNBQVNRLEtBQVQsR0FBaUI7QUFDNUIsc0JBQ0ksOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0gsQzs7Ozs7Ozs7Ozs7QUNORCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW1haWw6ICdTaW5jZXJlQGFwcmlsLmJpeicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdoaWxkZWdhcmQub3JnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycsIGlzTG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGxvZ2luVXNlcihlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuc2hvd0Vycm9yKVxyXG4gICAgfTtcclxuXHJcbiAgICBzaG93RXJyb3IgPSBlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSB8fCBlcnIubWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaWFzYmxlZD17aXNMb2FkaW5nfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gXCJTZW5kaW5nXCIgOiBcIlN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2PntlcnJvcn08L2Rpdj59IFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuZGVmYXVsdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbmNvbnNvbGUubG9nKGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9maWxlJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSIsImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=