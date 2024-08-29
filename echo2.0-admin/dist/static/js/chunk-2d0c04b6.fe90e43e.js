(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c04b6"],{"40bf":function(e,t,a){"use strict";a.r(t);var r=a("5530"),n=(a("d81d"),a("b775"));function l(e){return Object(n.a)({url:"/bussiness/log/list",method:"get",params:e})}var o={name:"Log",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,logList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,userId:null,username:null,ipaddr:null,loginLocation:null,browser:null,os:null,status:null,msg:null,loginTime:null},form:{},rules:{userId:[{required:!0,message:"登录用户ID不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{sortTableFun:function(e){this.column=e.prop,e.prop&&("ascending"==e.order?this.order="asc":"descending"==e.order&&(this.order="desc"),this.indexQueryListFun())},indexQueryListFun:function(){var e=this;this.queryParams.orderByColumn="loginTime",this.queryParams.isAsc=this.order,l(this.queryParams).then((function(t){e.rechargeList=t.rows,e.total=t.total,e.loading=!1}))},getList:function(){var e=this;this.loading=!0,l(this.queryParams).then((function(t){e.logList=t.rows,e.total=t.total,e.loading=!1}))},reset:function(){this.form={id:null,userId:null,username:null,ipaddr:null,loginLocation:null,browser:null,os:null,status:null,msg:null,loginTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleExport:function(){this.download("system/log/export",Object(r.a)({},this.queryParams),"log_".concat((new Date).getTime(),".xlsx"))}}};a=a("2877"),a=Object(a.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("SearchFormBox",[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"用户ID",prop:"userId"}},[a("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userId,callback:function(t){e.$set(e.queryParams,"userId",t)},expression:"queryParams.userId"}})],1),a("el-form-item",{attrs:{label:"IP",prop:"ipaddr"}},[a("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.ipaddr,callback:function(t){e.$set(e.queryParams,"ipaddr",t)},expression:"queryParams.ipaddr"}})],1),a("el-form-item",{attrs:{label:"登陆地点",prop:"loginLocation"}},[a("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.loginLocation,callback:function(t){e.$set(e.queryParams,"loginLocation",t)},expression:"queryParams.loginLocation"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),a("TableContentBox",[a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:"calc(100vh - 360px)",border:"",data:e.logList,"default-sort":{prop:"date",order:"descending"}},on:{"sort-change":e.sortTableFun,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"主键ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"用户ID",align:"center",prop:"userId"}}),a("el-table-column",{attrs:{label:"访问IP",align:"center",prop:"ipaddr"}}),a("el-table-column",{attrs:{label:"访问位置",align:"center",prop:"loginLocation"}}),a("el-table-column",{attrs:{label:"浏览器",align:"center",prop:"browser"}}),a("el-table-column",{attrs:{label:"系统OS",align:"center",prop:"os"}}),a("el-table-column",{attrs:{label:"登录状态",align:"center",prop:"status"}}),a("el-table-column",{attrs:{label:"登录时间",sortable:"",align:"center",prop:"loginTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.loginTime,"{y}-{m}-{d}")))])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:0<e.total,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);