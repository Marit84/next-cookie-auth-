(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
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
      isLoading: 'false'
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
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
          lineNumber: 47,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        diasbled: isLoading,
        type: "submit",
        children: isLoading ? "Sending" : "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");

var _jsxFileName = "C:\\Users\\marit\\Onedrive\\Skrivebord\\next-cookie-auth\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Login(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    title: "Login"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
Login.getInitailProps = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authInitialProps)();

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvLi9saWIvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dC1jb29raWUtYXV0aC9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtY29va2llLWF1dGgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LWNvb2tpZS1hdXRoL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImxvZ291dFVzZXIiLCJMb2dpbkZvcm0iLCJSZWFjdCIsInBhc3N3b3JkIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsInByZXZlbnREZWZhdWx0IiwibG9naW5Vc2VyIiwidGhlbiIsIlJvdXRlciIsImNhdGNoIiwic2hvd0Vycm9yIiwiZXJyIiwiY29uc29sZSIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJheGlvcyIsImdldFNlcnZlclNpZGVUb2tlbiIsInJlcSIsInNpZ25lZENvb2tpZXMiLCJ0b2tlbiIsImdldENsaWVudFNpZGVUb2tlbiIsIldJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRSIsImdldFVzZXJTY3JpcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiYXV0aEluaXRpYWxQcm9wcyIsImlzUHJvdGVjdGVkUm91dGUiLCJyZXMiLCJjdXJyZW50UGF0aCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpc0Fub255bXVzIiwidHlwZSIsInJlZGlyZWN0VXNlciIsInBhdGgiLCJyZWRpcmVjdCIsImZpbmlzaGVkIiwiZ2V0VXNlclByb2ZpbGUiLCJMb2dpbiIsInByb3BzIiwiZ2V0SW5pdGFpbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDO0FBQW5CLENBQUQsS0FBK0I7QUFDdEMsUUFBTTtBQUFFQyxRQUFJLEdBQUU7QUFBUixNQUFlRCxJQUFJLElBQUksRUFBN0I7QUFFUixzQkFDUTtBQUFBLHdDQUFlLE1BQWY7QUFBQSw0QkFDUTtBQUFBLDBDQUFlLFFBQWY7QUFBQSw4QkFDUTtBQUFBO0FBQUEsNkNBQWU7QUFBQTtBQUFBLG9CQUFTQyxJQUFJLENBQUNDLElBQUwsSUFBYTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUixlQUdRO0FBQUE7QUFBQSxnQ0FDUSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFIsRUFLU0QsSUFBSSxDQUFDRSxLQUFMO0FBQUE7QUFDTztBQUNBLHNFQUFDLHVEQUFEO0FBQUEsa0NBQ1IsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxF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QUFBLENBQVcsYUFBWCxDQUFOO0FBQ0FYLHlEQUFBLENBQVksUUFBWjtBQUNILENBTk07QUFRQSxNQUFNbUMsY0FBYyxHQUFHLFlBQVk7QUFDdkMsUUFBTTtBQUFFN0I7QUFBRixNQUFXLE1BQU1LLGdEQUFBLENBQVUsY0FBVixDQUF2QjtBQUNDLFNBQU9MLElBQVA7QUFDSCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVQO0FBQ0E7QUFDQTtBQUVlLFNBQVM4QixLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDakMsc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUM7QUFBZCxLQUEwQkEsS0FBMUI7QUFBQSwyQkFDQSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7QUFFREQsS0FBSyxDQUFDRSxlQUFOLEdBQXdCakIsMkRBQWdCLEVBQXhDLEM7Ozs7Ozs7Ozs7O0FDWkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhdXRoIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZXI9IHt9IH0gPSBhdXRoIHx8IHt9O1xyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlbGNvbWUsIDxzdHJvbmc+e3VzZXIubmFtZSB8fCBcIkd1ZXN0XCJ9PC9zdHJvbmc+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0VXNlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdW5BdXRoIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4ucm9vdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5hIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAyMzgpO1xyXG5cclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW1haWw6ICdTaW5jZXJlQGFwcmlsLmJpeicsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdoaWxkZWdhcmQub3JnJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgaXNMb2FkaW5nOiAnZmFsc2UnXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiAnJywgaXNMb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgbG9naW5Vc2VyKGVtYWlsLCBwYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvcHJvZmlsZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2godGhpcy5zaG93RXJyb3IpXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dFcnJvciA9IGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhIHx8IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciwgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpYXNibGVkPXtpc0xvYWRpbmd9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIlNlbmRpbmdcIiA6IFwiU3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXY+e2Vycm9yfTwvZGl2Pn0gXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVUb2tlbiA9IHJlcSA9PiB7XHJcbmNvbnN0IHNpZ25lZENvb2tpZXMgPSByZXE7XHJcblxyXG5pZiAoIXNpZ25lZENvb2tpZXMpIHtcclxuICAgIHJldHVybiB7fTtcclxufSBlbHNlIGlmICghc2lnbmVkQ29va2llcy50b2tlbikge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcbnJldHVybiB7IHVzZXI6IHNpZ25lZENvb2tpZXMudG9rZW4gfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbGllbnRTaWRlVG9rZW4gPSAoKSA9PiB7XHJcbiAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgY29uc3QgdXNlciA9IHdpbmRvd1tXSU5ET1dfVVNFUl9TQ1JJUFRfVkFSSUFCTEVdIHx8IHt9O1xyXG4gICAgICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gICB9IFxyXG4gICByZXR1cm4geyB1c2VyOiB7fSB9XHJcbn1cclxuXHJcbmNvbnN0IFdJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRSA9ICdfX1VTRVJfXyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclNjcmlwdCA9IHVzZXIgPT4ge1xyXG4gICAgcmV0dXJuIGAke1dJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRX0gPSAke0pTT04uc3RyaW5naWZ5KHVzZXIpfTtgO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhJbml0aWFsUHJvcHMgPSBpc1Byb3RlY3RlZFJvdXRlID0+ICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgY29uc3QgYXV0aCA9ICByZXEgPyBnZXRTZXJ2ZXJTaWRlVG9rZW4ocmVxKSA6IGdldENsaWVudFNpZGVUb2tlbigpO1xyXG4gICBjb25zdCBjdXJyZW50UGF0aCA9IHJlcSA/IHJlcS51cmwgOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgIGNvbnN0IHVzZXIgPSBhdXRoLnVzZXI7XHJcbiAgIGNvbnN0IGlzQW5vbnltdXMgPSAhdXNlciB8fCB1c2VyLnR5cGUgIT09IFwiYXV0aGVudGljYXRlZFwiO1xyXG4gICBpZiAoaXNQcm90ZWN0ZWRSb3V0ZSAmJiBpc0Fub255bXVzICYmIGN1cnJlbnRQYXRoICE9PSBcIi9sb2dpblwiKSB7XHJcbiAgICAgICByZXR1cm4gcmVkaXJlY3RVc2VyKHJlcywgXCIvbG9naW5cIik7XHJcbiAgIH1cclxuICAgcmV0dXJuIHsgYXV0aCB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkaXJlY3RVc2VyID0gKHJlcywgcGF0aCkgPT4ge1xyXG4gICAgaWYocmVzKSB7XHJcbiAgICAgICAgcmVzLnJlZGlyZWN0KDMwMixwYXRoKTtcclxuICAgICAgICByZXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIFJvdXRlci5yZXBsYWNlKHBhdGgpO1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93W1dJTkRPV19VU0VSX1NDUklQVF9WQVJJQUJMRV0gPSBkYXRhIHx8IHt9O1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdpbmRvd1tXSU5ET1dfVVNFUl9TQ1JJUFRfVkFSSUFCTEVdID0ge307XHJcbiAgICB9XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb2ZpbGUnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59IiwiaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBhdXRoSW5pdGlhbFByb3BzIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkxvZ2luXCIgey4uLnByb3BzfT5cclxuICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5Mb2dpbi5nZXRJbml0YWlsUHJvcHMgPSBhdXRoSW5pdGlhbFByb3BzKCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=