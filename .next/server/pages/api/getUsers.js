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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Conexão com o banco\n    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"123456\",\n        database: \"simulacao\",\n        waitForConnections: true,\n        connectionLimit: 10,\n        queueLimit: 0\n    });\n    try {\n        // executa sql no banco\n        const [rows] = await pool.query(\"SELECT * FROM users\");\n        // percorre e extrai resultado (users)\n        const users = rows.map((row)=>({\n                id: row.id,\n                name: row.name,\n                email: row.email,\n                password: row.password\n            }));\n        // manda o retorno (lista de users)\n        return res.status(200).json(users);\n    } catch (error) {\n        console.error(error);\n        return res;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FEO0FBVXRDLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDNUI7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsT0FBT0osZ0VBQWdCLENBQUM7UUFDNUJNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsb0JBQW9CLElBQUk7UUFDeEJDLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsSUFBSTtRQUNGLHVCQUF1QjtRQUN2QixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNVCxLQUFLVSxLQUFLLENBQWtCO1FBRWpELHNDQUFzQztRQUN0QyxNQUFNQyxRQUFRRixLQUFLRyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDL0JDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZDLE1BQU1GLElBQUlFLElBQUk7Z0JBQ2RDLE9BQU9ILElBQUlHLEtBQUs7Z0JBQ2hCWixVQUFVUyxJQUFJVCxRQUFRO1lBQ3hCO1FBRUEsbUNBQW1DO1FBQ25DLE9BQU9MLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUDtJQUM5QixFQUFFLE9BQU9RLE9BQU87UUFFZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU9wQjtJQUNUO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY2tldC1za3ktZnJvbnRlbmQvLi9wYWdlcy9hcGkvZ2V0VXNlcnMudHM/NzJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgbXlzcWwsIHsgUm93RGF0YVBhY2tldCB9IGZyb20gJ215c3FsMi9wcm9taXNlJ1xyXG5cclxuLy8gY29uc3Ryb2kgbyBcInRpcG9cIiBwcSB0eXBlc2NyaXB0IMOJIENIQVRPIFBSQSBDQVJBTEhPXHJcbnR5cGUgVXNlciA9IHtcclxuICBpZDogbnVtYmVyXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFVzZXJbXT5cclxuKSB7XHJcblxyXG4gIC8vIENvbmV4w6NvIGNvbSBvIGJhbmNvXHJcbiAgY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgICBkYXRhYmFzZTogJ3NpbXVsYWNhbycsXHJcbiAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gICAgcXVldWVMaW1pdDogMFxyXG4gIH0pXHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBleGVjdXRhIHNxbCBubyBiYW5jb1xyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeTxSb3dEYXRhUGFja2V0W10+KCdTRUxFQ1QgKiBGUk9NIHVzZXJzJylcclxuXHJcbiAgICAvLyBwZXJjb3JyZSBlIGV4dHJhaSByZXN1bHRhZG8gKHVzZXJzKVxyXG4gICAgY29uc3QgdXNlcnMgPSByb3dzLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICBpZDogcm93LmlkLFxyXG4gICAgICBuYW1lOiByb3cubmFtZSxcclxuICAgICAgZW1haWw6IHJvdy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHJvdy5wYXNzd29yZFxyXG4gICAgfSkpXHJcblxyXG4gICAgLy8gbWFuZGEgbyByZXRvcm5vIChsaXN0YSBkZSB1c2VycylcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VycylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb29sIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsIndhaXRGb3JDb25uZWN0aW9ucyIsImNvbm5lY3Rpb25MaW1pdCIsInF1ZXVlTGltaXQiLCJyb3dzIiwicXVlcnkiLCJ1c2VycyIsIm1hcCIsInJvdyIsImlkIiwibmFtZSIsImVtYWlsIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUsers.ts\n");

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