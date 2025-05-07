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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_keshavdayal_Desktop_template_task_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/profile/route.ts */ \"(rsc)/./app/api/profile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"/Users/keshavdayal/Desktop/template/task/app/api/profile/route.ts\",\n    nextConfigOutput,\n    userland: _Users_keshavdayal_Desktop_template_task_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmtlc2hhdmRheWFsJTJGRGVza3RvcCUyRnRlbXBsYXRlJTJGdGFzayUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrZXNoYXZkYXlhbCUyRkRlc2t0b3AlMkZ0ZW1wbGF0ZSUyRnRhc2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Lz9lMTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9rZXNoYXZkYXlhbC9EZXNrdG9wL3RlbXBsYXRlL3Rhc2svYXBwL2FwaS9wcm9maWxlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9rZXNoYXZkYXlhbC9EZXNrdG9wL3RlbXBsYXRlL3Rhc2svYXBwL2FwaS9wcm9maWxlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Byb2ZpbGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/profile/route.ts":
/*!**********************************!*\
  !*** ./app/api/profile/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n\n\n\n// Schema for validation\nconst profileSchema = zod__WEBPACK_IMPORTED_MODULE_5__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_5__.string().min(2, \"Name must be at least 2 characters\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_5__.string().email(\"Invalid email address\"),\n    currentPassword: zod__WEBPACK_IMPORTED_MODULE_5__.string().optional(),\n    newPassword: zod__WEBPACK_IMPORTED_MODULE_5__.string().min(8, \"Password must be at least 8 characters\").optional()\n});\nasync function PATCH(req) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const userId = session.user.id;\n        const body = await req.json();\n        // Validate input\n        const { name, email, currentPassword, newPassword } = profileSchema.parse(body);\n        // Check if email is already taken (by a different user)\n        if (email !== session.user.email) {\n            const existingUser = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.findUnique({\n                where: {\n                    email\n                }\n            });\n            if (existingUser && existingUser.id !== userId) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    message: \"Email already in use\"\n                }, {\n                    status: 409\n                });\n            }\n        }\n        // If changing password, verify current password\n        if (newPassword && currentPassword) {\n            const user = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.findUnique({\n                where: {\n                    id: userId\n                },\n                select: {\n                    password: true\n                }\n            });\n            if (!user) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    message: \"User not found\"\n                }, {\n                    status: 404\n                });\n            }\n            const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compare)(currentPassword, user.password);\n            if (!isPasswordValid) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    message: \"Current password is incorrect\"\n                }, {\n                    status: 400\n                });\n            }\n        }\n        // Update user profile\n        const updateData = {\n            name,\n            email\n        };\n        if (newPassword) {\n            updateData.password = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.hash)(newPassword, 10);\n        }\n        const updatedUser = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.db.user.update({\n            where: {\n                id: userId\n            },\n            data: updateData,\n            select: {\n                id: true,\n                name: true,\n                email: true,\n                image: true\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Profile updated successfully\",\n            user: updatedUser\n        });\n    } catch (error) {\n        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_5__.ZodError) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: error.errors[0].message\n            }, {\n                status: 400\n            });\n        }\n        console.error(\"Error updating profile:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"An unexpected error occurred\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlDQUFVLEVBQUU7WUFDL0IsT0FBT04sa0ZBQVlBLENBQUNvQixJQUFJLENBQUM7Z0JBQUVDLFNBQVNpQixNQUFNRSxNQUFNLENBQUMsRUFBRSxDQUFDbkIsT0FBTztZQUFDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUVBbUIsUUFBUUgsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT3RDLGtGQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBK0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9hcHAvYXBpL3Byb2ZpbGUvcm91dGUudHM/NTNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdFwiXG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIlxuXG4vLyBTY2hlbWEgZm9yIHZhbGlkYXRpb25cbmNvbnN0IHByb2ZpbGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKSxcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXG4gIGN1cnJlbnRQYXNzd29yZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuZXdQYXNzd29yZDogei5zdHJpbmcoKS5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiKS5vcHRpb25hbCgpLFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBBVENIKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxuXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgICB9XG5cbiAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWRcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKVxuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSBwcm9maWxlU2NoZW1hLnBhcnNlKGJvZHkpXG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBpcyBhbHJlYWR5IHRha2VuIChieSBhIGRpZmZlcmVudCB1c2VyKVxuICAgIGlmIChlbWFpbCAhPT0gc2Vzc2lvbi51c2VyLmVtYWlsKSB7XG4gICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKGV4aXN0aW5nVXNlciAmJiBleGlzdGluZ1VzZXIuaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkVtYWlsIGFscmVhZHkgaW4gdXNlXCIgfSwgeyBzdGF0dXM6IDQwOSB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGNoYW5naW5nIHBhc3N3b3JkLCB2ZXJpZnkgY3VycmVudCBwYXNzd29yZFxuICAgIGlmIChuZXdQYXNzd29yZCAmJiBjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICAgIHNlbGVjdDogeyBwYXNzd29yZDogdHJ1ZSB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGNvbXBhcmUoY3VycmVudFBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuXG4gICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkN1cnJlbnQgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB1c2VyIHByb2ZpbGVcbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XG4gICAgICB1cGRhdGVEYXRhLnBhc3N3b3JkID0gYXdhaXQgaGFzaChuZXdQYXNzd29yZCwgMTApXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICBkYXRhOiB1cGRhdGVEYXRhLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgaW1hZ2U6IHRydWUsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICB1c2VyOiB1cGRhdGVkVXNlcixcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IGVycm9yLmVycm9yc1swXS5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZmlsZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZGIiLCJoYXNoIiwiY29tcGFyZSIsInoiLCJwcm9maWxlU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm1pbiIsImVtYWlsIiwiY3VycmVudFBhc3N3b3JkIiwib3B0aW9uYWwiLCJuZXdQYXNzd29yZCIsIlBBVENIIiwicmVxIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsInVzZXJJZCIsImlkIiwiYm9keSIsInBhcnNlIiwiZXhpc3RpbmdVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwicGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJ1cGRhdGVEYXRhIiwidXBkYXRlZFVzZXIiLCJ1cGRhdGUiLCJkYXRhIiwiaW1hZ2UiLCJlcnJvciIsIlpvZEVycm9yIiwiZXJyb3JzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/profile/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"User not found\");\n                }\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    throw new Error(\"Invalid password\");\n                }\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    image: user.image\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRTtBQUNwQztBQUNHO0FBRXpCLE1BQU1HLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTVosdUNBQUVBLENBQUNZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUNwQ0MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTSxNQUFNO29CQUNULE1BQU0sSUFBSUQsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUksa0JBQWtCLE1BQU1kLCtDQUFPQSxDQUFDSSxZQUFZSSxRQUFRLEVBQUVHLEtBQUtILFFBQVE7Z0JBRXpFLElBQUksQ0FBQ00saUJBQWlCO29CQUNwQixNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUVBLE9BQU87b0JBQ0xLLElBQUlKLEtBQUtJLEVBQUU7b0JBQ1haLE1BQU1RLEtBQUtSLElBQUk7b0JBQ2ZFLE9BQU9NLEtBQUtOLEtBQUs7b0JBQ2pCVyxPQUFPTCxLQUFLSyxLQUFLO2dCQUNuQjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JhLE1BQU1ULEVBQUUsR0FBR0osS0FBS0ksRUFBRTtZQUNwQjtZQUNBLE9BQU9TO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RKLFFBQVFULElBQUksQ0FBQ0ksRUFBRSxHQUFHUyxNQUFNVCxFQUFFO1lBQzVCO1lBQ0EsT0FBT0s7UUFDVDtJQUNGO0lBQ0FLLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0XCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXNzd29yZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICAgIGVycm9yOiBcIi9sb2dpblwiLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZGIiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNQYXNzd29yZFZhbGlkIiwiaWQiLCJpbWFnZSIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalThis.prisma = db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBTXRDLE1BQU1DLEtBQUtDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRTtBQUV6RCxJQUFJSSxJQUFxQyxFQUFFO0lBQ3pDRixXQUFXQyxNQUFNLEdBQUdGO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGdsb2JhbFRoaXMucHJpc21hID0gZGJcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkeshavdayal%2FDesktop%2Ftemplate%2Ftask&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();