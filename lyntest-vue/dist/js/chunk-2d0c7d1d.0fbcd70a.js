(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7d1d"],{"51f1":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),c=r("ceda");function u(e,t,r,n,a,c,u){try{var o=e[c](u),i=o.value}catch(s){return void r(s)}o.done?t(i):Promise.resolve(i).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var c=e.apply(t,r);function o(e){u(c,n,a,o,i,"next",e)}function i(e){u(c,n,a,o,i,"throw",e)}o(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}var f=function(){function e(){i(this,e)}return p(e,[{key:"getAllProkect",value:function(){var e=o(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["get"])("/track/project/all");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"searchProjectList",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["post"])("/track/project/list",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getNewProject",value:function(){var e=o(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={name:"",page:1,count:t},e.next=3,Object(c["post"])("/track/project/list",r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createProject",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["post"])("/track/project/create",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateProject",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["post"])("/track/project/update",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteProject",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["_delete"])("/track/project/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f}}]);