(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d228e29"],{daa7:function(e,t,r){"use strict";r.r(t);var a=r("5530"),l=r("c7eb"),n=r("1da1"),s=r("ade3"),i=(r("d81d"),r("b775")),o={name:"NftProduct",data:function(){var e;return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,nftProductList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,id:null,seriesId:null,imgUrl:null,userId:null,price:null,chainType:null,author:null,holdAddress:null,handlingFee:null,copyrightFee:null,des:null,status:null,saleStatus:null,endDate:null,searchValue:null},form:{},rules:(e={seriesId:[{required:!0,message:"请输入合集id",trigger:"blur"}],imgUrl:[{required:!0,message:"请上传图片",trigger:"blur"}],userId:[{required:!0,message:"请输入所属id",trigger:"blur"}],price:[{required:!0,message:"请输入价格",trigger:"blur"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],holdAddress:[{required:!0,message:"请输入持有者地址",trigger:"blur"}],handlingFee:[{required:!0,message:"请输入手续费",trigger:"blur"}],copyrightFee:[{required:!0,message:"请输入版权费",trigger:"blur"}],des:[{required:!0,message:"请输入内容",trigger:"blur"}],endDate:[{required:!0,message:"请选择上架结束日期",trigger:"blur"}]},Object(s.a)(e,"endDate",[{required:!0,message:"请选择上架结束日期",trigger:"blur"}]),Object(s.a)(e,"remark",[{required:!0,message:"请输入内容",trigger:"blur"}]),e),idList:[]}},created:function(){this.getList()},methods:{getList:function(){var e,t=this;this.loading=!0,e=this.queryParams,Object(i.a)({url:"/bussiness/nftProduct/list",method:"get",params:e}).then((function(e){t.nftProductList=e.rows,t.total=e.total,t.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,seriesId:null,imgUrl:null,userId:null,price:null,chainType:null,author:null,holdAddress:null,handlingFee:null,copyrightFee:null,des:null,status:null,saleStatus:null,endDate:null,remark:null,createBy:null,updateBy:null,createTime:null,updateTime:null,searchValue:null,delFlag:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.getIdList(),this.title="添加nft详情"},getIdList:function(){var e=this;return Object(n.a)(Object(l.a)().mark((function t(){var r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)({url:"/bussiness/series/addProSeries",method:"post",data:void 0});case 2:200===(r=t.sent).code&&(e.idList=r.data);case 4:case"end":return t.stop()}}),t)})))()},handleGrounding:function(e){this.getList()},handleUpdate:function(e){var t=this;this.reset(),e=e.id||this.ids;e=e,Object(i.a)({url:"/bussiness/nftProduct/"+e,method:"get"}).then((function(e){t.form=e.data,t.open=!0,t.title="修改nft详情"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){t&&(null!=e.form.id?(t=e.form,Object(i.a)({url:"/bussiness/nftProduct",method:"put",data:t}).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()}))):(t=e.form,Object(i.a)({url:"/bussiness/nftProduct",method:"post",data:t}).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))))}))},handleDelete:function(e){var t=this,r=e.id||this.ids;this.$modal.confirm('是否确认删除nft详情编号为"'+r+'"的数据项？').then((function(){return e=r,Object(i.a)({url:"/bussiness/nftProduct/"+e,method:"delete"});var e})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("bussiness/nftProduct/export",Object(a.a)({},this.queryParams),"nftProduct_".concat((new Date).getTime(),".xlsx"))}}};r=r("2877"),r=Object(r.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("SearchFormBox",[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"id",prop:"id"}},[r("el-input",{attrs:{placeholder:"请输入id",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.id,callback:function(t){e.$set(e.queryParams,"id",t)},expression:"queryParams.id"}})],1),r("el-form-item",{attrs:{label:"合集id",prop:"seriesId"}},[r("el-input",{attrs:{placeholder:"请输入合集id",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.seriesId,callback:function(t){e.$set(e.queryParams,"seriesId",t)},expression:"queryParams.seriesId"}})],1),r("el-form-item",{attrs:{label:"图片路径",prop:"imgUrl"}},[r("el-input",{attrs:{placeholder:"请输入图片路径",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.imgUrl,callback:function(t){e.$set(e.queryParams,"imgUrl",t)},expression:"queryParams.imgUrl"}})],1),r("el-form-item",{attrs:{label:"所属id",prop:"userId"}},[r("el-input",{attrs:{placeholder:"请输入所属id",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userId,callback:function(t){e.$set(e.queryParams,"userId",t)},expression:"queryParams.userId"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{placeholder:"请输入价格",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.price,callback:function(t){e.$set(e.queryParams,"price",t)},expression:"queryParams.price"}})],1),r("el-form-item",{attrs:{label:"作者",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入作者",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.author,callback:function(t){e.$set(e.queryParams,"author",t)},expression:"queryParams.author"}})],1),r("el-form-item",{attrs:{label:"持有者地址",prop:"holdAddress"}},[r("el-input",{attrs:{placeholder:"请输入持有者地址",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.holdAddress,callback:function(t){e.$set(e.queryParams,"holdAddress",t)},expression:"queryParams.holdAddress"}})],1),r("el-form-item",{attrs:{label:"手续费",prop:"handlingFee"}},[r("el-input",{attrs:{placeholder:"请输入手续费",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.handlingFee,callback:function(t){e.$set(e.queryParams,"handlingFee",t)},expression:"queryParams.handlingFee"}})],1),r("el-form-item",{attrs:{label:"版权费",prop:"copyrightFee"}},[r("el-input",{attrs:{placeholder:"请输入版权费",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.copyrightFee,callback:function(t){e.$set(e.queryParams,"copyrightFee",t)},expression:"queryParams.copyrightFee"}})],1),r("el-form-item",{attrs:{label:"上架结束日期",prop:"endDate"}},[r("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择上架结束日期"},model:{value:e.queryParams.endDate,callback:function(t){e.$set(e.queryParams,"endDate",t)},expression:"queryParams.endDate"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),r("TableContentBox",[r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:add"],expression:"['bussiness:nftProduct:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:edit"],expression:"['bussiness:nftProduct:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:remove"],expression:"['bussiness:nftProduct:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:export"],expression:"['bussiness:nftProduct:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.nftProductList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"合集id",align:"center",prop:"seriesId"}}),r("el-table-column",{attrs:{label:"图片路径",align:"center",prop:"imgUrl"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"80px",height:"auto"},attrs:{src:e.row.imgUrl,"preview-src-list":[e.row.imgUrl]}})]}}])}),r("el-table-column",{attrs:{label:"所属id",align:"center",prop:"userId"}}),r("el-table-column",{attrs:{label:"价格",align:"center",prop:"price"}}),r("el-table-column",{attrs:{label:"所属链",align:"center",prop:"chainType"}}),r("el-table-column",{attrs:{label:"作者",align:"center",prop:"author"}}),r("el-table-column",{attrs:{label:"持有者地址",align:"center",prop:"holdAddress"}}),r("el-table-column",{attrs:{label:"手续费",align:"center",prop:"handlingFee"}}),r("el-table-column",{attrs:{label:"版权费",align:"center",prop:"copyrightFee"}}),r("el-table-column",{attrs:{label:"描述",align:"center",prop:"des"}}),r("el-table-column",{attrs:{label:"商品状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.status?r("el-button",{attrs:{type:"success",size:"mini",plain:""}},[e._v(" 已上架 ")]):e._e(),1==t.row.status?r("el-button",{attrs:{type:"info",size:"mini",plain:""}},[e._v(" 未上架 ")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"销售状态",align:"center",prop:"saleStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?r("el-button",{attrs:{type:"info",size:"mini",plain:""}},[e._v(" 待审核 ")]):e._e(),2==t.row.status?r("el-button",{attrs:{type:"success",size:"mini",plain:""}},[e._v(" 持有 ")]):e._e(),1==t.row.status?r("el-button",{attrs:{type:"info",size:"mini",plain:""}},[e._v(" 待售 ")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"上架结束日期",align:"center",prop:"endDate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.endDate,"{y}-{m}-{d}")))])]}}])}),r("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-top"},on:{click:function(r){return e.handleGrounding(t.row)}}},[e._v("上架")]):e._e(),2==t.row.status?r("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-bottom"},on:{click:function(r){return e.handleGrounding(t.row)}}},[e._v("下架")]):e._e(),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:edit"],expression:"['bussiness:nftProduct:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:nftProduct:remove"],expression:"['bussiness:nftProduct:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:0<e.total,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"合集id",prop:"seriesId"}},[r("el-select",{attrs:{filterable:"",placeholder:"请输入合集id"},model:{value:e.form.seriesId,callback:function(t){e.$set(e.form,"seriesId",t)},expression:"form.seriesId"}},e._l(e.idList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"图片路径",prop:"imgUrl"}},[r("ImageUpload",{attrs:{limit:1},model:{value:e.form.imgUrl,callback:function(t){e.$set(e.form,"imgUrl",t)},expression:"form.imgUrl"}})],1),r("el-form-item",{attrs:{label:"所属id",prop:"userId"}},[r("el-input",{attrs:{placeholder:"请输入所属id"},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{placeholder:"请输入价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"作者",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入作者"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),r("el-form-item",{attrs:{label:"持有者地址",prop:"holdAddress"}},[r("el-input",{attrs:{placeholder:"请输入持有者地址"},model:{value:e.form.holdAddress,callback:function(t){e.$set(e.form,"holdAddress",t)},expression:"form.holdAddress"}})],1),r("el-form-item",{attrs:{label:"手续费",prop:"handlingFee"}},[r("el-input",{attrs:{placeholder:"请输入手续费"},model:{value:e.form.handlingFee,callback:function(t){e.$set(e.form,"handlingFee",t)},expression:"form.handlingFee"}})],1),r("el-form-item",{attrs:{label:"版权费",prop:"copyrightFee"}},[r("el-input",{attrs:{placeholder:"请输入版权费"},model:{value:e.form.copyrightFee,callback:function(t){e.$set(e.form,"copyrightFee",t)},expression:"form.copyrightFee"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"des"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),r("el-form-item",{attrs:{label:"上架结束日期",prop:"endDate"}},[r("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择上架结束日期"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);