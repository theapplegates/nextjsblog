"use strict";
exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 3926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NJ": () => (/* binding */ getTags),
/* harmony export */   "PR": () => (/* binding */ getStaticTags),
/* harmony export */   "Vl": () => (/* binding */ split)
/* harmony export */ });
// src/utils/get-tags.ts
function split(tags = "") {
  return (Array.isArray(tags) ? tags : tags.split(",")).map((s) => s.trim());
}
var flattenPageMap = (page, result = []) => {
  if (Array.isArray(page.children)) {
    page.children.forEach((p) => flattenPageMap(p, result));
  }
  result.push(page);
};
var flattenPageMaps = (pages, result = []) => {
  pages.forEach((v) => flattenPageMap(v, result));
};
var getStaticTags = (pageMap) => {
  const result = [];
  flattenPageMaps(pageMap, result);
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)));
};
function getTags(page) {
  if (!page.frontMatter) {
    return [];
  }
  return split(page.frontMatter.tag);
}




/***/ }),

/***/ 6207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ML": () => (/* binding */ TagName),
/* harmony export */   "NV": () => (/* binding */ TagTitle),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3926);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2208);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_ssg__WEBPACK_IMPORTED_MODULE_0__]);
nextra_ssg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// src/tags.tsx



var NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");
var TagTitle = ({ prefix = "Posts tagged with " }) => {
  const { tag } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_0__.useSSG)();
  const title = `${prefix}${tag}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
      children: title
    })
  });
};
var TagName = () => {
  const { tag } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_0__.useSSG)();
  return tag || null;
};
var getStaticPaths = () => {
  const tags = (0,_chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_3__/* .getStaticTags */ .PR)(globalThis[NEXTRA_INTERNAL].pageMap);
  return {
    paths: tags.map((v) => ({ params: { tag: v } })),
    fallback: false
  };
};
var getStaticProps = ({ params }) => {
  return {
    props: {
      ssg: {
        tag: params == null ? void 0 : params.tag
      }
    }
  };
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;