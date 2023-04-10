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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Conexão com o banco\n    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n        host: \"127.0.0.1\",\n        user: \"root\",\n        password: \"1234\",\n        database: \"crud\",\n        waitForConnections: true,\n        connectionLimit: 10,\n        queueLimit: 0\n    });\n    try {\n        // executa sql no banco\n        const [rows] = await pool.query(\"SELECT * FROM crud.usuarios\");\n        // percorre e extrai resultado (users)\n        const users = rows.map((row)=>({\n                id: row.id,\n                name: row.name,\n                email: row.email,\n                password: row.password\n            }));\n        // manda o retorno (lista de users)\n        return res.status(200).json(users);\n    } catch (error) {\n        console.error(error);\n        return res;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FEO0FBVXRDLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDNUI7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsT0FBT0osZ0VBQWdCLENBQUM7UUFDNUJNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsb0JBQW9CLElBQUk7UUFDeEJDLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsSUFBSTtRQUNGLHVCQUF1QjtRQUN2QixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNVCxLQUFLVSxLQUFLLENBQWtCO1FBRWpELHNDQUFzQztRQUN0QyxNQUFNQyxRQUFRRixLQUFLRyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDL0JDLElBQUlELElBQUlDLEVBQUU7Z0JBQ1ZDLE1BQU1GLElBQUlFLElBQUk7Z0JBQ2RDLE9BQU9ILElBQUlHLEtBQUs7Z0JBQ2hCWixVQUFVUyxJQUFJVCxRQUFRO1lBQ3hCO1FBRUEsbUNBQW1DO1FBQ25DLE9BQU9MLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUDtJQUM5QixFQUFFLE9BQU9RLE9BQU87UUFFZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU9wQjtJQUNUO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY2tldC1za3ktZnJvbnRlbmQvLi9wYWdlcy9hcGkvZ2V0VXNlcnMudHM/NzJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgbXlzcWwsIHsgUm93RGF0YVBhY2tldCB9IGZyb20gJ215c3FsMi9wcm9taXNlJ1xyXG5cclxuLy8gY29uc3Ryb2kgbyBcInRpcG9cIiBwcSB0eXBlc2NyaXB0IMOJIENIQVRPIFBSQSBDQVJBTEhPXHJcbnR5cGUgVXNlciA9IHtcclxuICBpZDogbnVtYmVyXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFVzZXJbXT5cclxuKSB7XHJcblxyXG4gIC8vIENvbmV4w6NvIGNvbSBvIGJhbmNvXHJcbiAgY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJzEyMzQnLFxyXG4gICAgZGF0YWJhc2U6ICdjcnVkJyxcclxuICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXHJcbiAgICBxdWV1ZUxpbWl0OiAwXHJcbiAgfSlcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIGV4ZWN1dGEgc3FsIG5vIGJhbmNvXHJcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBwb29sLnF1ZXJ5PFJvd0RhdGFQYWNrZXRbXT4oJ1NFTEVDVCAqIEZST00gY3J1ZC51c3VhcmlvcycpXHJcblxyXG4gICAgLy8gcGVyY29ycmUgZSBleHRyYWkgcmVzdWx0YWRvICh1c2VycylcclxuICAgIGNvbnN0IHVzZXJzID0gcm93cy5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgaWQ6IHJvdy5pZCxcclxuICAgICAgbmFtZTogcm93Lm5hbWUsXHJcbiAgICAgIGVtYWlsOiByb3cuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiByb3cucGFzc3dvcmRcclxuICAgIH0pKVxyXG5cclxuICAgIC8vIG1hbmRhIG8gcmV0b3JubyAobGlzdGEgZGUgdXNlcnMpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcnMpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIFxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiByZXNcclxuICB9XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJ3YWl0Rm9yQ29ubmVjdGlvbnMiLCJjb25uZWN0aW9uTGltaXQiLCJxdWV1ZUxpbWl0Iiwicm93cyIsInF1ZXJ5IiwidXNlcnMiLCJtYXAiLCJyb3ciLCJpZCIsIm5hbWUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUsers.ts\n");

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