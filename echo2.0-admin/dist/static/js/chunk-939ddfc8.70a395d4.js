(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-939ddfc8"],{"0e89":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n("b775");function r(e){return Object(a.a)({url:"/bussiness/userStatistics/list",method:"get",params:e})}function l(e){return Object(a.a)({url:"/bussiness/userStatistics/agencyList",method:"get",params:e})}function s(e){return Object(a.a)({url:"/bussiness/userStatistics/agencyAppUserList",method:"get",params:e})}function i(e){return Object(a.a)({url:"/bussiness/userStatistics/dailyData",method:"get",params:e})}},5112:function(e,t,n){},b437:function(e,t,n){"use strict";n("5112")},b6bc:function(e,t,n){"use strict";n.r(t),n("14d9"),n("d81d");var a=n("0e89"),r={name:"Detail",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,detailList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,userId:null,agencyId:null,agencyUserName:null,appAllUserId:null,recharge:null,withdraw:null,sendBonus:null},form:{},rules:{}}},created:function(){this.getList()},methods:{Check:function(e){this.$router.push("/platform/subordinate?id=".concat(e.agencyId))},getList:function(){var e=this;this.loading=!0,Object(a.b)(this.queryParams).then((function(t){e.detailList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,userId:null,agencyId:null,agencyUserName:null,appAllUserId:null,recharge:null,withdraw:null,sendBonus:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length}}};n("b437"),n=n("2877"),n=Object(n.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("SearchFormBox",[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"下级代理ID",prop:"userId"}},[n("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userId,callback:function(t){e.$set(e.queryParams,"userId",t)},expression:"queryParams.userId"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),n("TableContentBox",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:"calc(100vh - 360px)",border:"",data:e.detailList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"下级代理id",align:"center",prop:"agencyId"}}),n("el-table-column",{attrs:{label:"下级代理名称",align:"center",prop:"agencyUserName"}}),n("el-table-column",{attrs:{label:"下级所有玩家ids",align:"center",prop:"appAllUserId"}}),n("el-table-column",{attrs:{label:"充值总额",align:"center",prop:"recharge"}}),n("el-table-column",{attrs:{label:"提现总额",align:"center",prop:"withdraw"}}),n("el-table-column",{attrs:{label:"总归集金额",align:"center",prop:"collectionAmount"}}),n("el-table-column",{attrs:{label:"总赠送彩金",align:"center",prop:"sendBonus"}}),n("el-table-column",{attrs:{label:"总扣减彩金",align:"center",prop:"subBonus"}}),n("el-table-column",{attrs:{label:"人工上分总额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(" "+e._s(t.row.subAmount+t.row.btcManualScoring+t.row.ethManualScoring)+" ")])]}}])}),n("el-table-column",{attrs:{label:"人工下分总额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[e._v(" "+e._s(t.row.subAmount+t.row.btcManualSubdivision+t.row.ethManualSubdivision)+" ")])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"80",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"btns"},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:userStatistics:agencyAppUserList"],expression:"['bussiness:userStatistics:agencyAppUserList']"}],attrs:{size:"mini",plain:"",type:"primary"},on:{click:function(n){return e.Check(t.row)}}},[e._v("下级用户")])],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:0<e.total,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1)}),[],!1,null,"1b3a0602",null);t.default=n.exports}}]);