(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d230898"],{ed69:function(e,t,l){"use strict";l.r(t);var a={props:{info:{type:Object,default:null}},data:function(){return{rules:{tableName:[{required:!0,message:"请输入表名称",trigger:"blur"}],tableComment:[{required:!0,message:"请输入表描述",trigger:"blur"}],className:[{required:!0,message:"请输入实体类名称",trigger:"blur"}],functionAuthor:[{required:!0,message:"请输入作者",trigger:"blur"}]}}}};l=l("2877"),l=Object(l.a)(a,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("el-form",{ref:"basicInfoForm",attrs:{model:e.info,rules:e.rules,"label-width":"150px"}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[t("el-input",{attrs:{placeholder:"请输入仓库名称"},model:{value:e.info.tableName,callback:function(t){e.$set(e.info,"tableName",t)},expression:"info.tableName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.tableComment,callback:function(t){e.$set(e.info,"tableComment",t)},expression:"info.tableComment"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"实体类名称",prop:"className"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.className,callback:function(t){e.$set(e.info,"className",t)},expression:"info.className"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"作者",prop:"functionAuthor"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.functionAuthor,callback:function(t){e.$set(e.info,"functionAuthor",t)},expression:"info.functionAuthor"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.info.remark,callback:function(t){e.$set(e.info,"remark",t)},expression:"info.remark"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);