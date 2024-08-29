(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c6db716"],{"4c34":function(e,t,n){"use strict";n("ea87")},"4c70":function(e,t,n){"use strict";n.r(t);var a=n("5530"),i=(n("4de4"),n("d3b7"),n("d81d"),n("99af"),n("a15b"),n("59a0")),s={name:"Manage",data:function(){return{addCoinForm:{coin:void 0},oneOpen:!1,coinList:[],loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,manageList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,symbol:null,minChargeNum:null,maxChargeNum:null,params:{commissionMin:"",commissionMax:""},sort:null,enable:null},form:{},rules:{minChargeNum:[{required:!0,message:"最小兑换量不能为空",trigger:"blur"}],maxChargeNum:[{required:!0,message:"最大兑换量不能为空",trigger:"blur"}],commission:[{required:!0,message:"手续费不能为空",trigger:"blur"}],enable:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},created:function(){this.getList()},mounted:function(){},methods:{changeCoin:function(e){this.currentMarket=this.coinList.filter((function(t){return t.id==e}))},getCoinList:function(){var e=this;Object(i.d)().then((function(t){e.coinList=t.rows.map((function(e){return e.label="".concat(e.symbol,"-").concat(e.market),e}))}))},getList:function(){var e=this;this.loading=!0,Object(i.f)(this.queryParams).then((function(t){e.manageList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,symbol:null,minChargeNum:null,maxChargeNum:null,commission:null,sort:null,enable:null,remark:null,createBy:null,createTime:null,updateBy:null,updateTime:null,delFlag:null,currentId:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.getCoinList(),this.open=!0,this.title="添加币种管理"},handleOneAdd:function(){this.getCoinList(),this.reset(),this.oneOpen=!0,this.title="一键新增"},handleUpdate:function(e){var t=this;this.reset(),e=e.id||this.ids;Object(i.e)(e).then((function(e){t.form=e.data,t.open=!0,t.title="修改币种管理"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){t&&(null!=e.form.id?Object(i.h)(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):(e.form.market=e.currentMarket[0].market,e.form.symbol=e.currentMarket[0].symbol,Object(i.b)(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))))}))},handleDelete:function(e){var t=this,n=e.id||this.ids;this.$modal.confirm("是否确认删除选中的币种？").then((function(){return Object(i.c)(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("bussiness/manage/export",Object(a.a)({},this.queryParams),"manage_".concat((new Date).getTime(),".xlsx"))},bindList:function(e){e=e.map((function(e){return e.symbol.toLowerCase()})),0==e.length?this.addCoinForm.coin="":1==e.length?this.addCoinForm.coin=e.join(""):this.addCoinForm.coin=e.join(",")},addCoin:function(){var e=this;Object(i.a)({symbols:this.addCoinForm.coin}).then((function(t){e.getList(),e.$modal.msgSuccess(t.msg)}))},submitOneForm:function(){this.addCoin(),this.oneOpen=!1,this.getList()},oneCancel:function(){this.oneOpen=!1}}};n("4c34"),n=n("2877"),n=Object(n.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("SearchFormBox",[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"币种",prop:"symbol"}},[n("el-input",{attrs:{placeholder:"请输入币种",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.symbol,callback:function(t){e.$set(e.queryParams,"symbol",t)},expression:"queryParams.symbol"}})],1),n("el-form-item",{attrs:{label:"金额",prop:"commission"}},[n("el-input",{staticClass:"amount",attrs:{clearable:"",placeholder:"最小金额"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.params.commissionMin,callback:function(t){e.$set(e.queryParams.params,"commissionMin",t)},expression:"queryParams.params.commissionMin"}}),n("span",[e._v(" - ")]),n("el-input",{staticClass:"amount",attrs:{clearable:"",placeholder:"最大金额"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.params.commissionMax,callback:function(t){e.$set(e.queryParams.params,"commissionMax",t)},expression:"queryParams.params.commissionMax"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),n("TableContentBox",[n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:symbolmanage:add"],expression:"['bussiness:symbolmanage:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:symbolmanage:remove"],expression:"['bussiness:symbolmanage:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-minus",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:"calc(100vh - 360px)",border:"",data:e.manageList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{type:"index",width:"50",align:"center"}}),n("el-table-column",{attrs:{label:"图标",align:"center",prop:"logo"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{width:"30px"},attrs:{src:e.row.logo}})]}}])}),n("el-table-column",{attrs:{label:"币种",align:"center",prop:"symbol"}}),n("el-table-column",{attrs:{label:"兑换数量(最小)",align:"center",prop:"minChargeNum",width:"120px"}}),n("el-table-column",{attrs:{label:"兑换数量(最大)",align:"center",prop:"maxChargeNum",width:"120px"}}),n("el-table-column",{attrs:{label:"手续费(%)",align:"center",prop:"commission"}}),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.enable?n("el-tag",{attrs:{type:"success",size:"mini",plain:""}},[e._v(" 启用 ")]):2==t.row.enable?n("el-tag",{attrs:{type:"info",size:"mini",plain:""}},[e._v(" 禁用 ")]):e._e()]}}])}),n("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"150","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:symbolmanage:edit"],expression:"['bussiness:symbolmanage:edit']"}],attrs:{size:"small",plain:"",type:"primary"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:symbolmanage:remove"],expression:"['bussiness:symbolmanage:remove']"}],attrs:{size:"small",plain:"",type:"danger"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:0<e.total,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"币种",prop:"currentId"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",clearable:""},on:{change:e.changeCoin},model:{value:e.form.currentId,callback:function(t){e.$set(e.form,"currentId",t)},expression:"form.currentId"}},e._l(e.coinList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"最小兑换数量",prop:"minChargeNum"}},[n("el-input",{model:{value:e.form.minChargeNum,callback:function(t){e.$set(e.form,"minChargeNum",t)},expression:"form.minChargeNum"}})],1),n("el-form-item",{attrs:{label:"最大兑换数量",prop:"maxChargeNum"}},[n("el-input",{model:{value:e.form.maxChargeNum,callback:function(t){e.$set(e.form,"maxChargeNum",t)},expression:"form.maxChargeNum"}})],1),n("el-form-item",{attrs:{label:"手续费(%)",prop:"commission"}},[n("el-input",{model:{value:e.form.commission,callback:function(t){e.$set(e.form,"commission",t)},expression:"form.commission"}})],1),n("el-form-item",{attrs:{label:"排序",prop:"sort"}},[n("el-input",{model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),n("el-form-item",{attrs:{label:"状态",prop:"enable"}},[n("el-select",{staticStyle:{width:"100%"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[n("el-option",{attrs:{label:"启用",value:"1"}}),n("el-option",{attrs:{label:"禁用",value:"2"}})],1)],1),n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),n("el-dialog",{attrs:{title:e.title,visible:e.oneOpen,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.oneOpen=t}}},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-row",{staticClass:"row"},[n("el-col",{attrs:{span:20}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.coinList},on:{"selection-change":e.bindList}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{key:"symbol",attrs:{label:"币种名称",align:"center",prop:"symbol"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitOneForm}},[e._v("确 定")]),n("el-button",{on:{click:e.oneCancel}},[e._v("取 消")])],1)],1)],1)}),[],!1,null,"5ef1746c",null);t.default=n.exports},"59a0":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return m})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return c}));var a=n("b775");function i(e){return Object(a.a)({url:"/bussiness/symbolmanage/list",method:"get",params:e})}function s(){return Object(a.a)({url:"/bussiness/klineSymbol/list",method:"get"})}function r(e){return Object(a.a)({url:"/bussiness/symbolmanage/addBatch/",method:"post",params:e})}function o(e){return Object(a.a)({url:"/bussiness/symbolmanage/"+e,method:"get"})}function l(e){return Object(a.a)({url:"/bussiness/symbolmanage",method:"post",data:e})}function m(e){return Object(a.a)({url:"/bussiness/symbolmanage",method:"put",data:e})}function u(e){return Object(a.a)({url:"/bussiness/symbolmanage/"+e,method:"delete"})}function c(e){return Object(a.a)({url:"/bussiness/texchange/list",method:"get",params:e})}},ea87:function(e,t,n){}}]);