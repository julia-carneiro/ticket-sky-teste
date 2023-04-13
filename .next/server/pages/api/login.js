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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Conexão com o banco\n    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"123456\",\n        database: \"simulacao\",\n        waitForConnections: true,\n        connectionLimit: 10,\n        queueLimit: 0\n    });\n    const email = req.body.email;\n    const password = req.body.password;\n    try {\n        // executa sql no banco\n        const [rows] = await pool.query(\"SELECT * FROM users WHERE email=? AND password = ?\", [\n            email,\n            password\n        ]);\n        // percorre e extrai resultado (users)\n        const users = rows.map((row)=>({\n                id: row.id,\n                name: row.name,\n                email: row.email,\n                password: row.password\n            }));\n        // manda o retorno (lista de users)\n        return res.status(200).json(users);\n    } catch (error) {\n        console.error(error);\n        return res;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FEO0FBVXRDLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDNUI7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsT0FBT0osZ0VBQWdCLENBQUM7UUFDNUJNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsb0JBQW9CLElBQUk7UUFDeEJDLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsUUFBUVgsSUFBSVksSUFBSSxDQUFDRCxLQUFLO0lBQzVCLE1BQU1MLFdBQVdOLElBQUlZLElBQUksQ0FBQ04sUUFBUTtJQUdsQyxJQUFJO1FBQ0YsdUJBQXVCO1FBQ3ZCLE1BQU0sQ0FBQ08sS0FBSyxHQUFHLE1BQU1YLEtBQUtZLEtBQUssQ0FBa0Isc0RBQXNEO1lBQUNIO1lBQU9MO1NBQVM7UUFFeEgsc0NBQXNDO1FBQ3RDLE1BQU1TLFFBQVFGLEtBQUtHLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO2dCQUMvQkMsSUFBSUQsSUFBSUMsRUFBRTtnQkFDVkMsTUFBTUYsSUFBSUUsSUFBSTtnQkFDZFIsT0FBT00sSUFBSU4sS0FBSztnQkFDaEJMLFVBQVVXLElBQUlYLFFBQVE7WUFDeEI7UUFFQSxtQ0FBbUM7UUFDbkMsT0FBT0wsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOO0lBQzlCLEVBQUUsT0FBT08sT0FBTztRQUVkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsT0FBT3JCO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlja2V0LXNreS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9sb2dpbi50cz9jMTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBteXNxbCwgeyBSb3dEYXRhUGFja2V0IH0gZnJvbSAnbXlzcWwyL3Byb21pc2UnXHJcblxyXG4vLyBjb25zdHJvaSBvIFwidGlwb1wiIHBxIHR5cGVzY3JpcHQgw4kgQ0hBVE8gUFJBIENBUkFMSE9cclxudHlwZSBVc2VyID0ge1xyXG4gIGlkOiBudW1iZXJcclxuICBuYW1lOiBzdHJpbmdcclxuICBlbWFpbDogc3RyaW5nXHJcbiAgcGFzc3dvcmQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VXNlcltdPlxyXG4pIHtcclxuXHJcbiAgLy8gQ29uZXjDo28gY29tIG8gYmFuY29cclxuICBjb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcclxuICAgIGRhdGFiYXNlOiAnc2ltdWxhY2FvJyxcclxuICAgIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXHJcbiAgICBxdWV1ZUxpbWl0OiAwXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICBjb25zdCBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xyXG5cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIGV4ZWN1dGEgc3FsIG5vIGJhbmNvXHJcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBwb29sLnF1ZXJ5PFJvd0RhdGFQYWNrZXRbXT4oJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWw9PyBBTkQgcGFzc3dvcmQgPSA/JywgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICAgIC8vIHBlcmNvcnJlIGUgZXh0cmFpIHJlc3VsdGFkbyAodXNlcnMpXHJcbiAgICBjb25zdCB1c2VycyA9IHJvd3MubWFwKChyb3cpID0+ICh7XHJcbiAgICAgIGlkOiByb3cuaWQsXHJcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxyXG4gICAgICBlbWFpbDogcm93LmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcm93LnBhc3N3b3JkXHJcbiAgICB9KSlcclxuXHJcbiAgICAvLyBtYW5kYSBvIHJldG9ybm8gKGxpc3RhIGRlIHVzZXJzKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJzKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsImVtYWlsIiwiYm9keSIsInJvd3MiLCJxdWVyeSIsInVzZXJzIiwibWFwIiwicm93IiwiaWQiLCJuYW1lIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();