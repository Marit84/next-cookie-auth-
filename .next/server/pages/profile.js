(function() {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\components\\Layout.js";





const Layout = ({
  title,
  children,
  auth
}) => {
  const {
    user = {}
  } = auth || {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3794831690" + " " + "root",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "jsx-3794831690" + " " + "navbar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-3794831690",
        children: ["Welcome, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-3794831690",
          children: user.name || "Guest"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 40
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3794831690",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "jsx-3794831690",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 41
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 33
        }, undefined), user.email ?
        /*#__PURE__*/
        //auth navigation
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/profile",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "jsx-3794831690",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: _lib_auth__WEBPACK_IMPORTED_MODULE_4__.logoutUser,
            className: "jsx-3794831690",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 41
        }, undefined) :
        /*#__PURE__*/
        //unAuth navigation
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "jsx-3794831690",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 41
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 33
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jsx-3794831690",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3794831690",
      children: ".root.jsx-3794831690{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:center;-ms-flex-direction:center;flex-direction:center;}.navbar.jsx-3794831690{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-3794831690{margin-right:0.5em;}button.jsx-3794831690{-webkit-text-decoration:underline;text-decoration:underline;padding:0;font:inherit;cursor:pointer;border-style:none;color:rgb(0,0,238);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaXRcXE9uZWRyaXZlXFxTa3JpdmVib3JkXFxuZXh0LWNvb2tpZS1hdXRoXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNxQyxBQUlzQixBQU1GLEFBS1EsQUFHTyxXQVBiLFFBS3JCLHlDQUdrQixVQUNHLElBZk0sU0FnQkosRUFUYyxhQVVYLGtCQUNHLG1CQUU3QixnQ0FuQitCLHlDQU8vQiwwREFOOEIsOEVBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaXRcXE9uZWRyaXZlXFxTa3JpdmVib3JkXFxuZXh0LWNvb2tpZS1hdXRoXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhdXRoIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZXI9IHt9IH0gPSBhdXRoIHx8IHt9O1xyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlbGNvbWUsIDxzdHJvbmc+e3VzZXIubmFtZSB8fCBcIkd1ZXN0XCJ9PC9zdHJvbmc+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0VXNlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdW5BdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4ucm9vdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5hIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAyMzgpO1xyXG5cclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\marit\\\\Onedrive\\\\Skrivebord\\\\next-cookie-auth\\\\components\\\\Layout.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideToken": function() { return /* binding */ getServerSideToken; },
/* harmony export */   "getClientSideToken": function() { return /* binding */ getClientSideToken; },
/* harmony export */   "getUserScript": function() { return /* binding */ getUserScript; },
/* harmony export */   "authInitialProps": function() { return /* binding */ authInitialProps; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; },
/* harmony export */   "getUserProfile": function() { return /* binding */ getUserProfile; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


(axios__WEBPACK_IMPORTED_MODULE_0___default().default.withCredentials) = true;
const getServerSideToken = req => {
  const signedCookies = req;

  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }

  return {
    user: signedCookies.token
  };
};
const getClientSideToken = () => {
  if (false) {}

  return {
    user: {}
  };
};
const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';
const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};
const authInitialProps = isProtectedRoute => ({
  req,
  res
}) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymus = !user || user.type !== "authenticated";

  if (isProtectedRoute && isAnonymus && currentPath !== "/login") {
    return redirectUser(res, "/login");
  }

  return {
    auth
  };
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }

  next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(path);
  return {};
};

const loginUser = async (email, password) => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', {
    email,
    password
  });

  if (false) {}
};
const logoutUser = async () => {
  if (false) {}

  await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/logout');
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "next/dist/next-server/lib/utils");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\pages\\profile.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
      title: "Profile"
    }, this.props), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: JSON.stringify(this.state.user, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this);
  }

}
Profile.getInitialProps = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authInitialProps)(true);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "next/dist/next-server/lib/utils":
/*!**************************************************!*\
  !*** external "next/dist/next-server/lib/utils" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils");;

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL2xpYi9hdXRoLmpzIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvLi9wYWdlcy9wcm9maWxlLmpzIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImxvZ291dFVzZXIiLCJheGlvcyIsImdldFNlcnZlclNpZGVUb2tlbiIsInJlcSIsInNpZ25lZENvb2tpZXMiLCJ0b2tlbiIsImdldENsaWVudFNpZGVUb2tlbiIsIldJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRSIsImdldFVzZXJTY3JpcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXV0aEluaXRpYWxQcm9wcyIsImlzUHJvdGVjdGVkUm91dGUiLCJyZXMiLCJjdXJyZW50UGF0aCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpc0Fub255bXVzIiwidHlwZSIsInJlZGlyZWN0VXNlciIsInBhdGgiLCJyZWRpcmVjdCIsImZpbmlzaGVkIiwiUm91dGVyIiwibG9naW5Vc2VyIiwicGFzc3dvcmQiLCJkYXRhIiwiZ2V0VXNlclByb2ZpbGUiLCJQcm9maWxlIiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInRoZW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsInByb3BzIiwic3RhdGUiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkM7QUFBbkIsQ0FBRCxLQUErQjtBQUN0QyxRQUFNO0FBQUVDLFFBQUksR0FBRTtBQUFSLE1BQWVELElBQUksSUFBSSxFQUE3QjtBQUVSLHNCQUNRO0FBQUEsd0NBQWUsTUFBZjtBQUFBLDRCQUNRO0FBQUEsMENBQWUsUUFBZjtBQUFBLDhCQUNRO0FBQUE7QUFBQSw2Q0FBZTtBQUFBO0FBQUEsb0JBQVNDLElBQUksQ0FBQ0MsSUFBTCxJQUFhO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSLGVBR1E7QUFBQTtBQUFBLGdDQUNRLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUixFQUtTRCxJQUFJLENBQUNFLEtBQUw7QUFBQTtBQUNPO0FBQ0Esc0VBQUMsdURBQUQ7QUFBQSxrQ0FDUiw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsVUFBWDtBQUFBLG1DQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURRLGVBSVI7QUFBUSxtQkFBTyxFQUFFQyxpREFBakI7QUFB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Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhdXRoIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZXI9IHt9IH0gPSBhdXRoIHx8IHt9O1xyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlbGNvbWUsIDxzdHJvbmc+e3VzZXIubmFtZSB8fCBcIkd1ZXN0XCJ9PC9zdHJvbmc+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0VXNlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdW5BdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4ucm9vdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5hIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAyMzgpO1xyXG5cclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVRva2VuID0gcmVxID0+IHtcclxuY29uc3Qgc2lnbmVkQ29va2llcyA9IHJlcTtcclxuXHJcbmlmICghc2lnbmVkQ29va2llcykge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59IGVsc2UgaWYgKCFzaWduZWRDb29raWVzLnRva2VuKSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxucmV0dXJuIHsgdXNlcjogc2lnbmVkQ29va2llcy50b2tlbiB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudFNpZGVUb2tlbiA9ICgpID0+IHtcclxuICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICBjb25zdCB1c2VyID0gd2luZG93W1dJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRV0gfHwge307XHJcbiAgICAgICByZXR1cm4geyB1c2VyIH07XHJcbiAgIH0gXHJcbiAgIHJldHVybiB7IHVzZXI6IHt9IH1cclxufVxyXG5cclxuY29uc3QgV0lORE9XX1VTRVJfU0NSSVBUX1ZBUklBQkxFID0gJ19fVVNFUl9fJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyU2NyaXB0ID0gdXNlciA9PiB7XHJcbiAgICByZXR1cm4gYCR7V0lORE9XX1VTRVJfU0NSSVBUX1ZBUklBQkxFfSA9ICR7SlNPTi5zdHJpbmdpZnkodXNlcil9O2A7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEluaXRpYWxQcm9wcyA9IGlzUHJvdGVjdGVkUm91dGUgPT4gKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICBjb25zdCBhdXRoID0gIHJlcSA/IGdldFNlcnZlclNpZGVUb2tlbihyZXEpIDogZ2V0Q2xpZW50U2lkZVRva2VuKCk7XHJcbiAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcmVxID8gcmVxLnVybCA6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgY29uc3QgdXNlciA9IGF1dGgudXNlcjtcclxuICAgY29uc3QgaXNBbm9ueW11cyA9ICF1c2VyIHx8IHVzZXIudHlwZSAhPT0gXCJhdXRoZW50aWNhdGVkXCI7XHJcbiAgIGlmIChpc1Byb3RlY3RlZFJvdXRlICYmIGlzQW5vbnltdXMgJiYgY3VycmVudFBhdGggIT09IFwiL2xvZ2luXCIpIHtcclxuICAgICAgIHJldHVybiByZWRpcmVjdFVzZXIocmVzLCBcIi9sb2dpblwiKTtcclxuICAgfVxyXG4gICByZXR1cm4geyBhdXRoIH07XHJcbn07XHJcblxyXG5jb25zdCByZWRpcmVjdFVzZXIgPSAocmVzLCBwYXRoKSA9PiB7XHJcbiAgICBpZihyZXMpIHtcclxuICAgICAgICByZXMucmVkaXJlY3QoMzAyLHBhdGgpO1xyXG4gICAgICAgIHJlcy5maW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgUm91dGVyLnJlcGxhY2UocGF0aCk7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG5jb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3dbV0lORE9XX1VTRVJfU0NSSVBUX1ZBUklBQkxFXSA9IGRhdGEgfHwge307XHJcbn1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93W1dJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRV0gPSB7fTtcclxuICAgIH1cclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZmlsZScpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iLCJpbXBvcnQgeyBnZXRVc2VyUHJvZmlsZSwgYXV0aEluaXRpYWxQcm9wcyB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5zdGF0ZSA9IHtcclxuICAgIHVzZXI6IG51bGxcclxufTtcclxuXHJcbmNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZ2V0VXNlclByb2ZpbGUoKS50aGVuKHVzZXIgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXIgfSkpO1xyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiUHJvZmlsZVwiIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnVzZXIsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG59XHJcblxyXG5Qcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGF1dGhJbml0aWFsUHJvcHModHJ1ZSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=