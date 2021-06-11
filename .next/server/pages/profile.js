(function() {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

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

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\pages\\profile.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Profile extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: null
    });
  }

  componentDidMount() {
    (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getUserProfile)().then(user => this.setState({
      user
    }));
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: JSON.stringify(this.state.user, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this);
  }

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
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL3BhZ2VzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwibG9naW5Vc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlclByb2ZpbGUiLCJQcm9maWxlIiwiUmVhY3QiLCJ1c2VyIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsc0VBQUEsR0FBZ0MsSUFBaEM7QUFFTyxNQUFNQyxTQUFTLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxRQUFkLEtBQTJCO0FBQ3BELFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1KLGlEQUFBLENBQVcsWUFBWCxFQUF5QjtBQUFFRSxTQUFGO0FBQVNDO0FBQVQsR0FBekIsQ0FBdkI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQyxDQUhNO0FBS0EsTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDdkMsUUFBTTtBQUFFSDtBQUFGLE1BQVcsTUFBTUosZ0RBQUEsQ0FBVSxjQUFWLENBQXZCO0FBQ0MsU0FBT0ksSUFBUDtBQUNILENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFFZSxNQUFNSSxPQUFOLFNBQXNCQyx3REFBdEIsQ0FBc0M7QUFBQTtBQUFBOztBQUFBLG1DQUM3QztBQUNKQyxVQUFJLEVBQUU7QUFERixLQUQ2QztBQUFBOztBQUtyREMsbUJBQWlCLEdBQUc7QUFDaEJKLDZEQUFjLEdBQUdLLElBQWpCLENBQXNCRixJQUFJLElBQUksS0FBS0csUUFBTCxDQUFjO0FBQUVIO0FBQUYsS0FBZCxDQUE5QjtBQUNIOztBQUdESSxRQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFBLGdCQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLQyxLQUFMLENBQVdQLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLENBQXRDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBSUg7O0FBZm9ELEM7Ozs7Ozs7Ozs7O0FDSHJELG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuZGVmYXVsdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbmNvbnNvbGUubG9nKGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9maWxlJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSIsImltcG9ydCB7IGdldFVzZXJQcm9maWxlIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbnN0YXRlID0ge1xyXG4gICAgdXNlcjogbnVsbFxyXG59O1xyXG5cclxuY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBnZXRVc2VyUHJvZmlsZSgpLnRoZW4odXNlciA9PiB0aGlzLnNldFN0YXRlKHsgdXNlciB9KSk7XHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUudXNlciwgbnVsbCwgMil9PC9wcmU+XHJcblxyXG4gICAgKVxyXG59XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==