(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e1bb"],{d3c9:function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),u=n("ceda");function c(e,t,n,r,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function o(e){c(u,r,a,o,i,"next",e)}function i(e){c(u,r,a,o,i,"throw",e)}o(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var f=function(){function e(){i(this,e)}return p(e,[{key:"getCategoryList",value:function(){var e=o(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("/autotest/category/list");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"createCategory",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("/autotest/category/create",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCategory",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("/autotest/category/update",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteCategory",value:function(){var e=o(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("/autotest/category/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f}}]);