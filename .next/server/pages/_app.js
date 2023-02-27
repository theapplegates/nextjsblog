"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_config)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./theme.config.jsx
/* eslint sort-keys: error */ 

/* harmony default export */ const theme_config = ({
    components: {
        h1: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)"
                },
                children: children
            })
    },
    darkMode: true,
    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
        style: {
            display: "block",
            marginTop: "8rem"
        },
        className: "jsx-ca625714bb9d633b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("abbr", {
                title: "This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.",
                style: {
                    cursor: "help"
                },
                className: "jsx-ca625714bb9d633b",
                children: "CC BY-NC 4.0"
            }),
            " ",
            new Date().getFullYear(),
            " \xa9 Shu Ding.",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/feed.xml",
                className: "jsx-ca625714bb9d633b",
                children: "RSS"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ca625714bb9d633b",
                children: "a.jsx-ca625714bb9d633b{float:right}@media screen and (max-width:480px){article.jsx-ca625714bb9d633b{padding-top:2rem;padding-bottom:4rem}}"
            })
        ]
    })
});


/***/ }),

/***/ 1164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_theme_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3382);
/* harmony import */ var _Users_thor2_Pictures_nextra_feb27_examples_blog_theme_config_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3725);
/* harmony import */ var nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3047);
/* harmony import */ var nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4681);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_theme_blog__WEBPACK_IMPORTED_MODULE_4__]);
nextra_theme_blog__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/*@jsxRuntime automatic @jsxImportSource react*/ 
const MDXLayout = function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
function _createMdxContent(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
function MDXContent(props = {}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
const __nextra_internal__ = globalThis[Symbol.for("__nextra_internal__")] = Object.create(null);
__nextra_internal__.Layout = nextra_theme_blog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP;
__nextra_internal__.pageMap = [
    {
        "kind": "MdxPage",
        "name": "index",
        "route": "/",
        "frontMatter": {
            "type": "page",
            "title": "About",
            "date": "2020-01-01T00:00:00.000Z"
        }
    },
    {
        "kind": "Folder",
        "name": "posts",
        "route": "/posts",
        "children": [
            {
                "kind": "MdxPage",
                "name": "aaron-swartz-a-programmable-web",
                "route": "/posts/aaron-swartz-a-programmable-web",
                "frontMatter": {
                    "title": "Notes on A Programmable Web by Aaron Swartz",
                    "date": "2016/5/21",
                    "description": "At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, Aaron Swartz's A Programmable Web. And it completely changed my mind.",
                    "tag": "web development",
                    "author": "Shu"
                }
            },
            {
                "kind": "MdxPage",
                "name": "code-blocks",
                "route": "/posts/code-blocks",
                "frontMatter": {
                    "title": "Code blocks",
                    "date": "2022/7/29",
                    "description": "En example of using code blocks in your blog.",
                    "tag": "web development,JavaScript,GraphQL,C++,Java,React,Next.js,The Guild,MacBook Pro",
                    "author": "Dimitri POSTOLOV"
                }
            },
            {
                "kind": "MdxPage",
                "name": "index",
                "route": "/posts",
                "frontMatter": {
                    "type": "posts",
                    "title": "Random Thoughts",
                    "date": "2020-01-03T00:00:00.000Z"
                }
            },
            {
                "kind": "MdxPage",
                "name": "table",
                "route": "/posts/table",
                "frontMatter": {
                    "title": "Table",
                    "date": "2022/8/28",
                    "description": "En example of using table.",
                    "tag": "web development",
                    "author": "Dimitri POSTOLOV"
                }
            },
            {
                "kind": "Meta",
                "data": {
                    "table": "Table",
                    "code-blocks": "Code blocks",
                    "index": "Random Thoughts",
                    "aaron-swartz-a-programmable-web": "Notes on A Programmable Web by Aaron Swartz"
                }
            }
        ]
    },
    {
        "kind": "Meta",
        "data": {
            "index": "About"
        }
    }
];
__nextra_internal__.flexsearch = {
    "codeblocks": true
};
__nextra_internal__.themeConfig = _Users_thor2_Pictures_nextra_feb27_examples_blog_theme_config_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = import("nextra/components");;

/***/ }),

/***/ 6132:
/***/ ((module) => {

module.exports = import("nextra/hooks");;

/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = import("nextra/icons");;

/***/ }),

/***/ 5053:
/***/ ((module) => {

module.exports = import("nextra/mdx");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [610,681,459], () => (__webpack_exec__(1164)));
module.exports = __webpack_exports__;

})();