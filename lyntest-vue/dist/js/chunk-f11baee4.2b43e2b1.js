(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f11baee4","chunk-2d0b215d"],{2339:function(e,t,a){"use strict";a.r(t);var r=a("a34a"),n=a.n(r),i=a("ceda");function o(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(c){return void a(c)}s.done?t(l):Promise.resolve(l).then(r,n)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,a){return t&&c(e.prototype,t),a&&c(e,a),e}var p=function(){function e(){l(this,e)}return u(e,[{key:"getVariableList",value:function(){var e=s(n.a.mark(function e(t){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("/autotest/variable/list",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createVariable",value:function(){var e=s(n.a.mark(function e(t){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("/autotest/variable/create",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateVariable",value:function(){var e=s(n.a.mark(function e(t){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("/autotest/variable/update",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteVariable",value:function(){var e=s(n.a.mark(function e(t){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("/autotest/variable/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new p},"61b4":function(e,t,a){},"65d3":function(e,t,a){"use strict";var r=a("61b4"),n=a.n(r);n.a},ba34:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("el-button",{attrs:{type:"primary"},on:{click:e.createVariable}},[e._v("新 增")]),a("el-pagination",{attrs:{background:"","current-page":e.search.page,"page-size":e.search.count,"page-sizes":[10,20,50,100],total:e.total,layout:"total, sizes, prev, pager, next"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-table",{attrs:{data:e.variable_list,stripe:""}},[a("el-table-column",{attrs:{prop:"variable_name",label:"变量名"}}),a("el-table-column",{attrs:{prop:"variable_value",label:"真实值","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"description",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{content:"编辑",placement:"bottom",enterable:!1,effect:"dark"}},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.handleEdit(t.row)}}})],1),a("el-tooltip",{attrs:{content:"删除",placement:"bottom",enterable:!1,effect:"dark"}},[a("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.handleDelete(t.row.id)}}})],1)]}}])})],1),a("el-dialog",{attrs:{visible:e.dialog_visible,width:"400px"},on:{"update:visible":function(t){e.dialog_visible=t},closed:e.closeEdit}},[a("el-form",{ref:"variableForm",attrs:{model:e.variable_info,"label-width":"80px"}},[a("el-form-item",{attrs:{prop:"variable_name",label:"变量名"}},[a("el-input",{staticStyle:{width:"240px"},model:{value:e.variable_info.variable_name,callback:function(t){e.$set(e.variable_info,"variable_name",t)},expression:"variable_info.variable_name"}})],1),a("el-form-item",{attrs:{prop:"variable_value",label:"真实值"}},[a("el-input",{staticStyle:{width:"240px"},model:{value:e.variable_info.variable_value,callback:function(t){e.$set(e.variable_info,"variable_value",t)},expression:"variable_info.variable_value"}})],1),a("el-form-item",{attrs:{prop:"description",label:"描述"}},[a("el-input",{staticStyle:{width:"240px"},model:{value:e.variable_info.description,callback:function(t){e.$set(e.variable_info,"description",t)},expression:"variable_info.description"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveVariable}},[e._v("保 存")]),a("el-button",{on:{click:e.closeEdit}},[e._v("取 消")])],1)],1)],1)},n=[],i=a("a34a"),o=a.n(i),s=a("2339");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){u(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(c){return void a(c)}s.done?t(l):Promise.resolve(l).then(r,n)}function b(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){p(i,r,n,o,s,"next",e)}function s(e){p(i,r,n,o,s,"throw",e)}o(void 0)})}}var f={data:function(){return{search:{count:10,page:1},total:0,operation_type:1,variable_list:[],variable_info:{variable_name:"",variable_value:"",description:""},dialog_visible:!1}},mounted:function(){this.searchVariableList()},methods:{searchVariableList:function(){var e=b(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["default"].getVariableList(this.search);case 2:t=e.sent,this.variable_list=t.items,this.total=t.total;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.search.count=e,this.searchVariableList()},handleCurrentChange:function(e){this.search.page=e,this.searchVariableList()},createVariable:function(){this.dialog_visible=!0,this.operation_type=1},saveVariable:function(){var e=b(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(1!==this.operation_type){e.next=6;break}return e.next=3,s["default"].createVariable(this.variable_info);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,s["default"].updateVariable(this.variable_info);case 8:e.t0=e.sent;case 9:t=e.t0,t.code<window.MAX_SUCCESS_CODE?(this.$message.success(t.message),this.dialog_visible=!1,this.searchVariableList()):this.$message.error("服务端异常");case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(e){this.dialog_visible=!0,this.operation_type=2,this.variable_info=c({},e)},handleDelete:function(){var e=b(o.a.mark(function e(t){var a;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["default"].deleteVariable(t);case 2:a=e.sent,a.code<window.MAX_SUCCESS_CODE?(this.$message.success(a.message),this.searchVariableList()):this.$message.error("删除功能异常");case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),closeEdit:function(){this.dialog_visible=!1,this.$refs.variableForm.resetFields()}}},v=f,h=(a("65d3"),a("2877")),d=Object(h["a"])(v,r,n,!1,null,"65dda070",null);t["default"]=d.exports}}]);