"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Posts_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Modal',
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Modal'
    }
  },
  emits: ['closeModal'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var emit = __emit;
    var close = function close() {
      emit('closeModal');
    };
    var __returned__ = {
      emit: emit,
      close: close
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Pageination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Pageination.vue */ "./resources/js/Shared/Pageination.vue");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Modal */ "./resources/js/Components/Modal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  props: {
    posts: Object,
    can: Object
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var comments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var showLikesModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var currentCommentId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var likeUsers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var deletePost = function deletePost(id) {
      if (confirm("Are you sure you want to delete this post?")) {
        (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)()["delete"]("/posts/".concat(id));
      }
    };
    var formattedVotes = function formattedVotes(votesCount) {
      return "".concat(votesCount, " ").concat(votesCount === 1 ? 'vote' : 'votes');
    };
    var submitComment = function submitComment(postId) {
      if (!comments.value[postId]) return;
      var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        post_id: postId,
        comment: comments.value[postId]
      });
      form.post('/comments', {
        onSuccess: function onSuccess() {
          comments.value[postId] = "";
        },
        onError: function onError(errors) {
          console.error('Comment submission errors:', errors);
        }
      });
    };
    var likeComment = function likeComment(commentId) {
      var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        likeable_id: commentId,
        likeable_type: 'comment'
      });
      form.post('like', {
        onSuccess: function onSuccess() {
          console.log('successfully added');
        },
        onError: function onError(errors) {
          console.log('like error:', errors);
        }
      });
    };
    var showCommentUser = function showCommentUser(commentId) {
      currentCommentId.value = commentId;
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("/comments/".concat(commentId, "/likes")).then(function (response) {
        likeUsers.value = response.data;
        showLikesModal.value = true;
      })["catch"](function (error) {
        console.error('Error fetching likes:', error);
      });
    };
    var closeModal = function closeModal() {
      showLikesModal.value = false;
    };
    var __returned__ = {
      comments: comments,
      showLikesModal: showLikesModal,
      currentCommentId: currentCommentId,
      likeUsers: likeUsers,
      deletePost: deletePost,
      formattedVotes: formattedVotes,
      submitComment: submitComment,
      likeComment: likeComment,
      showCommentUser: showCommentUser,
      closeModal: closeModal,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
      },
      Pageination: _Shared_Pageination_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      get Modal() {
        return _Components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get axios() {
        return (axios__WEBPACK_IMPORTED_MODULE_4___default());
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    links: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "fixed inset-0 overflow-y-auto z-50"
};
var _hoisted_2 = {
  "class": "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};
var _hoisted_3 = {
  "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": "modal-headline"
};
var _hoisted_4 = {
  "class": "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
};
var _hoisted_5 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_6 = {
  "class": "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"
};
var _hoisted_7 = {
  "class": "text-lg leading-6 font-medium text-gray-900",
  id: "modal-headline"
};
var _hoisted_8 = {
  "class": "mt-2"
};
var _hoisted_9 = {
  "class": "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Background overlay with transparency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "fixed inset-0",
    onClick: $setup.close
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"absolute inset-0 bg-gray-500 opacity-30 transition-opacity\"></div>")]), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "hidden sm:inline-block sm:align-middle sm:h-screen"
  }, null, -1 /* HOISTED */)), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("​ ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.close();
    }),
    type: "button",
    "class": "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  }, " Close ")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "flex justify-between mb-6"
};
var _hoisted_2 = {
  "class": "flex item-center"
};
var _hoisted_3 = {
  "class": "relative overflow-x-auto shadow-md sm:rounded-lg"
};
var _hoisted_4 = {
  "class": "space-y-4"
};
var _hoisted_5 = {
  "class": "flex justify-between items-start"
};
var _hoisted_6 = {
  "class": "flex-1"
};
var _hoisted_7 = {
  "class": "text-gray-700 mb-2"
};
var _hoisted_8 = {
  "class": "text-sm text-gray-500"
};
var _hoisted_9 = {
  "class": "flex"
};
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  key: 0,
  "class": "mt-4 border-t pt-2"
};
var _hoisted_12 = {
  "class": "font-semibold text-lg mb-2"
};
var _hoisted_13 = {
  "class": "text-red-600 text-sm"
};
var _hoisted_14 = {
  "class": "font-bold text-gray-800"
};
var _hoisted_15 = {
  "class": "text-gray-700 mt-1"
};
var _hoisted_16 = {
  "class": "flex items-center space-x-2"
};
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  key: 0,
  "class": "text-center py-4"
};
var _hoisted_20 = {
  key: 1,
  "class": "text-center py-4"
};
var _hoisted_21 = {
  key: 2,
  "class": "divide-y divide-gray-200"
};
var _hoisted_22 = {
  "class": "ml-3"
};
var _hoisted_23 = {
  "class": "text-sm font-medium text-gray-900"
};
var _hoisted_24 = {
  "class": "mt-2 flex"
};
var _hoisted_25 = ["onUpdate:modelValue"];
var _hoisted_26 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Post"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-3xl"
  }, "Post", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/posts/create",
    "class": "text-blue-500 text-sm ml-2 mt-3"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("New Post")]);
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.posts.data, function (post) {
    var _post$comments_count;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: post.id,
      "class": "bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: "/posts/".concat(post.id),
      "class": "text-blue-600 hover:text-blue-800 font-bold mb-2 block underline"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1 /* TEXT */)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body), 1 /* TEXT */), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tags: ")), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(post.tags, function (tag) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: tag.id,
        "class": "text-green-600 pl-2 font-bold"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.name), 1 /* TEXT */);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formattedVotes(post.votes_count)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [post.can.edit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      href: "/posts/".concat(post.id, "/edit"),
      "class": "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm ml-4"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")]));
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), post.can["delete"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      onClick: function onClick($event) {
        return $setup.deletePost(post.id);
      },
      "class": "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm ml-4"
    }, " Delete ", 8 /* PROPS */, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Comment Show "), post.comments.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_12, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_post$comments_count = post.comments_count) !== null && _post$comments_count !== void 0 ? _post$comments_count : 0) + ")", 1 /* TEXT */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(post.comments, function (comment) {
      var _comment$likes_count;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: comment.id,
        "class": "p-3 bg-gray-100 rounded-lg mb-2 flex justify-between items-center"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.comment.length > 100 ? comment.comment.substring(0, 100) + '...' : comment.comment), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Like Button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: function onClick($event) {
          return $setup.likeComment(comment.id);
        },
        "class": "text-blue-500 hover:text-blue-700 text-sm"
      }, " 👍 Like ", 8 /* PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        onClick: function onClick($event) {
          return $setup.showCommentUser(comment.id);
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'cursor-pointer hover:underline': comment.likes_count > 0,
          'cursor-default': comment.likes_count === 0
        }, "text-gray-600 text-sm"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_comment$likes_count = comment.likes_count) !== null && _comment$likes_count !== void 0 ? _comment$likes_count : 0), 11 /* TEXT, CLASS, PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add modal component "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Modal"], {
        show: $setup.showLikesModal,
        onCloseModal: $setup.closeModal,
        title: "Users Name"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_ctx.loadingLikes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, " Loading... ")) : $setup.likeUsers.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, " No likes yet ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_21, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.likeUsers, function (user) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
              key: user.id,
              "class": "py-3 flex"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name), 1 /* TEXT */)])]);
          }), 128 /* KEYED_FRAGMENT */))]))];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["show"])])]);
    }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Comment Box "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.comments[post.id] = $event;
      },
      placeholder: "Write a comment...",
      "class": "w-full border rounded-md focus:ring focus:ring-blue-300"
    }, null, 8 /* PROPS */, _hoisted_25), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.comments[post.id]]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.submitComment(post.id);
      },
      "class": "mt-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm"
    }, " Comment ", 8 /* PROPS */, _hoisted_26)])]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pageination"], {
    links: $props.posts.links,
    "class": "mt-6"
  }, null, 8 /* PROPS */, ["links"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(link.url ? 'Link' : 'span'), {
      href: link.url,
      innerHTML: link.label,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-1", {
        'text-gray-500': !link.url,
        'font-bold': link.active
      }])
    }, null, 8 /* PROPS */, ["href", "innerHTML", "class"]);
  }), 256 /* UNKEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./resources/js/Components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Modal.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_5f7088f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=5f7088f2 */ "./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2");
/* harmony import */ var _Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_5f7088f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2e913d5d */ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Posts/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pageination.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/Pageination.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pageination_vue_vue_type_template_id_20934f56__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pageination.vue?vue&type=template&id=20934f56 */ "./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56");
/* harmony import */ var _Pageination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pageination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pageination.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_laravel_inertiajs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pageination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pageination_vue_vue_type_template_id_20934f56__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pageination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pageination.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/Pageination.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pageination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pageination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pageination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_5f7088f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_5f7088f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=5f7088f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2");


/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=2e913d5d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d");


/***/ }),

/***/ "./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pageination_vue_vue_type_template_id_20934f56__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pageination_vue_vue_type_template_id_20934f56__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pageination.vue?vue&type=template&id=20934f56 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pageination.vue?vue&type=template&id=20934f56");


/***/ })

}]);