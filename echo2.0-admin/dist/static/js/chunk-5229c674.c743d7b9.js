(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5229c674"],{"04d1":function(e,t,n){n=n("342f").match(/firefox\/(\d+)/i),e.exports=!!n&&+n[1]},"4e82":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),l=n("083a"),c=n("577e"),u=n("d039"),f=n("addb"),d=n("a640"),m=n("04d1"),p=n("d998"),h=n("2d00"),g=n("512ce"),b=[],v=i(b.sort),y=i(b.push),w=(n=u((function(){b.sort(void 0)})),i=u((function(){b.sort(null)})),d=d("sort"),!u((function(){if(h)return h<70;if(!(m&&3<m)){if(p)return!0;if(g)return g<603;for(var e,t,n,r="",i=65;i<76;i++){switch(e=String.fromCharCode(i),i){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)b.push({k:e+n,v:t})}for(b.sort((function(e,t){return t.v-e.v})),n=0;n<b.length;n++)e=b[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})));r({target:"Array",proto:!0,forced:n||!i||!d||!w},{sort:function(e){void 0!==e&&s(e);var t=o(this);if(w)return void 0===e?v(t):v(t,e);for(var n,r,i=[],u=a(t),d=0;d<u;d++)d in t&&y(i,t[d]);for(f(i,(r=e,function(e,t){return void 0===t?-1:void 0===e?1:void 0!==r?+r(e,t)||0:c(e)>c(t)?1:-1})),n=a(i),d=0;d<n;)t[d]=i[d++];for(;d<u;)l(t,d++);return t}})},"512ce":function(e,t,n){n=n("342f").match(/AppleWebKit\/(\d+)\./),e.exports=!!n&&+n[1]},addb:function(e,t,n){function r(e,t){var n=e.length,o=s(n/2);if(n<8){for(var a,l,c=e,u=t,f=c.length,d=1;d<f;){for(a=c[l=d];l&&0<u(c[l-1],a);)c[l]=c[--l];l!==d++&&(c[l]=a)}return c}for(var m=e,p=r(i(e,0,o),t),h=r(i(e,o),t),g=t,b=p.length,v=h.length,y=0,w=0;y<b||w<v;)m[y+w]=y<b&&w<v?g(p[y],h[w])<=0?p[y++]:h[w++]:y<b?p[y++]:h[w++];return m}var i=n("4dae"),s=Math.floor;e.exports=r},b882:function(e,t,n){"use strict";n.r(t);var r=n("c7eb"),i=n("1da1"),s=(n("d81d"),n("b0c0"),n("4de4"),n("d3b7"),n("14d9"),n("e9c4"),n("4e82"),n("e876")),o={coin:"Config",data:function(){return{currentTypeList:{},index:"",total:0,orderList:[],open:!1,title:"",loading:!0,activecoin:"second",form:{},currentType:"",rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],sort:[{type:"number",required:!0,message:"排序不能为空",trigger:"blur"}]},currencyForm:{currencyList:[]}}},mounted:function(){this.getJinGangList()},methods:{close:function(){this.getJinGangList(),this.reset()},reset:function(){this.resetForm("form")},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},cancel:function(){this.open=!1,this.reset()},getJinGangList:function(){var e=this;return Object(i.a)(Object(r.a)().mark((function t(){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.b)("PLAYING_SETTING");case 3:200===(n=t.sent).code&&(n.data,e.orderList=n.data,e.loading=!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},submitForm:function(){var e=this;this.$refs.form.validate((function(t){var n=!0;t&&(null!=e.form.change?(t=[],t=e.orderList.map((function(t,n){return t.name==e.currentType?e.form:t})),Object(s.d)("PLAYING_SETTING",t).then((function(t){200===t.code&&(e.$message({message:"修改成功",type:"success"}),e.getJinGangList(),e.open=!1,e.reset())}))):(e.form.isOpen=e.form.isOpen||"false",e.orderList.filter((function(t){t.name==e.form.name&&(e.$modal.msgSuccess("不能重复"),n=!1)})),n&&(e.orderList.push(e.form),Object(s.d)("PLAYING_SETTING",JSON.stringify(e.orderList)).then((function(t){200===t.code&&(e.$message({message:"保存成功",type:"success"}),e.getJinGangList(),e.open=!1,e.reset())})))))}))},addBtn:function(){this.open=!0,this.title="新增玩法配置",this.form={},this.reset()},handleDelete:function(e){var t=this,n=this.orderList.filter((function(t){return t.name!=e.name}));Object(s.d)("PLAYING_SETTING",JSON.stringify(n)).then((function(e){200===e.code&&(t.$message({message:"删除成功",type:"success"}),t.getJinGangList())}))},handleChange:function(e){this.form=e,this.form.sort=+e.sort,this.currentType=e.name,this.form.change=!0,this.open=!0,this.title="修改玩法配置"}}};n=n("2877"),n=Object(n.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("TableContentBox",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:"calc(100vh - 360px)",border:"",data:e.orderList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"状态",align:"center",prop:"isOpen"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.isOpen?n("el-tag",{attrs:{type:"success",size:"mini",plain:""}},[e._v("开启")]):e._e(),0==t.row.isOpen?n("el-tag",{attrs:{type:"info",size:"mini",plain:""}},[e._v("关闭")]):e._e()]}}])}),n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150",align:"center","class-coin":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["bussiness:user:edit"],expression:"['bussiness:user:edit']"}],attrs:{size:"small",plain:"",type:"primary"},on:{click:function(n){return e.handleChange(t.row)}}},[e._v("修改")])]}}])})],1)],1),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t},close:e.close}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name",rules:[{required:!0,message:"币种不能为空"}]}},[n("el-input",{attrs:{disabled:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"排序",prop:"sort",rules:[{required:!0,message:"排序不能为空"},{type:"number",message:"排序必须为数字值"}]}},[n("el-input",{model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",e._n(t))},expression:"form.sort"}})],1),n("el-form-item",{attrs:{label:"状态",prop:"isOpen"}},[n("el-switch",{attrs:{"active-value":!0,"inactive-value":!1},model:{value:e.form.isOpen,callback:function(t){e.$set(e.form,"isOpen",t)},expression:"form.isOpen"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),n("router-view")],1)}),[],!1,null,null,null);t.default=n.exports},d998:function(e,t,n){n=n("342f"),e.exports=/MSIE|Trident/.test(n)}}]);