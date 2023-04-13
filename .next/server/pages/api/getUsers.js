"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getUsers";
exports.ids = ["pages/api/getUsers"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/getUsers.ts":
/*!*******************************!*\
  !*** ./pages/api/getUsers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Conexão com o banco\n    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"1234\",\n        database: \"user\",\n        waitForConnections: true,\n        connectionLimit: 10,\n        queueLimit: 0\n    });\n    try {\n        // executa sql no banco\n        const [result] = await pool.query(\"SELECT * FROM users\");\n        if (result.length > 0) {\n            const user = result[0];\n            res.status(200).json(user);\n        } else {\n            res.status(404).json({\n                success: true,\n                id: 0,\n                name: \"\",\n                email: \"\",\n                password: \"\"\n            });\n        }\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            success: true,\n            id: 0,\n            name: \"\",\n            email: \"\",\n            password: \"\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FEO0FBZXRDLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsT0FBT0osZ0VBQWdCLENBQUM7UUFDNUJNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsb0JBQW9CLElBQUk7UUFDeEJDLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsSUFBSTtRQUNGLHVCQUF1QjtRQUN2QixNQUFNLENBQUNDLE9BQU8sR0FBRyxNQUFNVCxLQUFLVSxLQUFLLENBQWtCO1FBRW5ELElBQUksT0FBNEJDLE1BQU0sR0FBRyxHQUFHO1lBRTFDLE1BQU1SLE9BQU9NLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCVixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVjtRQUV2QixPQUFPO1lBQ0xKLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxTQUFTLElBQUk7Z0JBQ2JDLElBQUk7Z0JBQ0pDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BiLFVBQVU7WUFDWjtRQUNGLENBQUM7SUFDSCxFQUFFLE9BQU9jLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkbkIsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLElBQUk7WUFDbENDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BiLFVBQVU7UUFBRztJQUNqQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWNrZXQtc2t5LWZyb250ZW5kLy4vcGFnZXMvYXBpL2dldFVzZXJzLnRzPzcyYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IG15c3FsLCB7IFJvd0RhdGFQYWNrZXQgfSBmcm9tICdteXNxbDIvcHJvbWlzZSdcclxuXHJcbi8vIGNvbnN0cm9pIG8gXCJ0aXBvXCIgcHEgdHlwZXNjcmlwdCDDiSBDSEFUTyBQUkEgQ0FSQUxIT1xyXG50eXBlIFVzZXIgPSB7XHJcbiAgc3VjY2VzczogYm9vbGVhbixcclxuICBpZDogbnVtYmVyXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxufVxyXG50eXBlIERhdGEgPXtcclxuICBzdWNjZXNzOiBib29sZWFuXHJcbiAgdXNlcjogUm93RGF0YVBhY2tldFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxVc2VyPlxyXG4pIHtcclxuXHJcbiAgLy8gQ29uZXjDo28gY29tIG8gYmFuY29cclxuICBjb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnMTIzNCcsXHJcbiAgICBkYXRhYmFzZTogJ3VzZXInLFxyXG4gICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgY29ubmVjdGlvbkxpbWl0OiAxMCxcclxuICAgIHF1ZXVlTGltaXQ6IDBcclxuICB9KVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gZXhlY3V0YSBzcWwgbm8gYmFuY29cclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5xdWVyeTxSb3dEYXRhUGFja2V0W10+KCdTRUxFQ1QgKiBGUk9NIHVzZXJzJylcclxuXHJcbiAgICBpZiAoKHJlc3VsdCBhcyBSb3dEYXRhUGFja2V0W10pLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHRbMF0gYXMgVXNlcjtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsInJlc3VsdCIsInF1ZXJ5IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUsers.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getUsers.ts"));
module.exports = __webpack_exports__;

})();