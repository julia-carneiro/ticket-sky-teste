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
exports.id = "pages/api/insertUser";
exports.ids = ["pages/api/insertUser"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/insertUser.ts":
/*!*********************************!*\
  !*** ./pages/api/insertUser.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    // Recupera informações da requisição\n    const username = \"req.body.username\";\n    const email = req.body.email;\n    const password = req.body.password;\n    // Cria conexão com o banco\n    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"1234\",\n        database: \"user\",\n        waitForConnections: true,\n        connectionLimit: 10,\n        queueLimit: 0\n    });\n    try {\n        // executa o sql para inserir\n        await pool.query(\"INSERT INTO users SET ?\", {\n            username,\n            email,\n            password\n        });\n        // manda retorno (sucesso)\n        res.status(200).json({\n            success: true\n        });\n    } catch (error) {\n        console.error(error);\n        // manda retorno (erro)\n        res.status(500).json({\n            success: false\n        });\n    } finally{\n        // finaliza conexão\n        pool.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5zZXJ0VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFa0M7QUFPbkIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUVBLHFDQUFxQztJQUNyQyxNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFFBQVFILElBQUlJLElBQUksQ0FBQ0QsS0FBSztJQUM1QixNQUFNRSxXQUFXTCxJQUFJSSxJQUFJLENBQUNDLFFBQVE7SUFFbEMsMkJBQTJCO0lBQzNCLE1BQU1DLE9BQU9SLGdFQUFnQixDQUFDO1FBQzVCVSxNQUFNO1FBQ05DLE1BQU07UUFDTkosVUFBVTtRQUNWSyxVQUFVO1FBQ1ZDLG9CQUFvQixJQUFJO1FBQ3hCQyxpQkFBaUI7UUFDakJDLFlBQVk7SUFDZDtJQUVBLElBQUk7UUFDRiw2QkFBNkI7UUFDN0IsTUFBTVAsS0FBS1EsS0FBSyxDQUFDLDJCQUEyQjtZQUFDWjtZQUFVQztZQUFPRTtRQUFTO1FBRXZFLDBCQUEwQjtRQUMxQkosSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLElBQUk7UUFBQztJQUN2QyxFQUFFLE9BQU9DLE9BQU87UUFFZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLHVCQUF1QjtRQUN2QmpCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1FBQUM7SUFDeEMsU0FBVTtRQUNSLG1CQUFtQjtRQUNuQlgsS0FBS2MsR0FBRztJQUNWO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY2tldC1za3ktZnJvbnRlbmQvLi9wYWdlcy9hcGkvaW5zZXJ0VXNlci50cz84ZjlkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnIFxyXG5cclxuLy8gcmV0b3Jub1xyXG50eXBlIERhdGEgPSB7XHJcbiAgc3VjY2VzczogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcblxyXG4gIC8vIFJlY3VwZXJhIGluZm9ybWHDp8O1ZXMgZGEgcmVxdWlzacOnw6NvXHJcbiAgY29uc3QgdXNlcm5hbWUgPSBcInJlcS5ib2R5LnVzZXJuYW1lXCI7XHJcbiAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbFxyXG4gIGNvbnN0IHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmRcclxuXHJcbiAgLy8gQ3JpYSBjb25leMOjbyBjb20gbyBiYW5jb1xyXG4gIGNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICcxMjM0JyxcclxuICAgIGRhdGFiYXNlOiAndXNlcicsXHJcbiAgICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXHJcbiAgICBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gICAgcXVldWVMaW1pdDogMFxyXG4gIH0pXHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBleGVjdXRhIG8gc3FsIHBhcmEgaW5zZXJpclxyXG4gICAgYXdhaXQgcG9vbC5xdWVyeSgnSU5TRVJUIElOVE8gdXNlcnMgU0VUID8nLCB7dXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KVxyXG5cclxuICAgIC8vIG1hbmRhIHJldG9ybm8gKHN1Y2Vzc28pXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgIFxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIC8vIG1hbmRhIHJldG9ybm8gKGVycm8pXHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIC8vIGZpbmFsaXphIGNvbmV4w6NvXHJcbiAgICBwb29sLmVuZCgpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsImVtYWlsIiwiYm9keSIsInBhc3N3b3JkIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwidXNlciIsImRhdGFiYXNlIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/insertUser.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/insertUser.ts"));
module.exports = __webpack_exports__;

})();