import{_ as e,g as a,c as s,e as n,p as t,b as l,j as i,x as o}from"./index-e83e29a3.js";import{r as c,o as r,a as u,j as m,w as d,u as v,K as p,k as h,F as _,a1 as g,c as k,A as f,i as y,p as I,t as x,l as b}from"./vendor-a95f68e4.js";import{L as C}from"./index-931f4b3d.js";import N from"./index-a0f88208.js";import{I as j}from"./itemFund-da343e35.js";import{g as w}from"./index-cc312411.js";import"./index-33faaef3.js";const A={class:"header"},T={class:"right"},F=e({__name:"index",setup(e){const n=c(!1),t=()=>{n.value=!0},l=()=>{n.value=!1};return(e,i)=>{const o=g,c=s;return r(),u(_,null,[m(o,{show:v(n),"onUpdate:show":i[0]||(i[0]=e=>p(n)?n.value=e:null),position:"left",onClose:l,style:{width:"var(--ex-max-width)",height:"100%",background:"var(--ex-default-background-color)",left:"auto","margin-top":"-1px"}},{default:d((()=>[m(N,{onCloseSideBar:l})])),_:1},8,["show"]),h("div",A,[m(C),h("div",T,[m(c,{name:"kefu",class:"rightImg",onClick:i[1]||(i[1]=e=>v(a)("event_serviceChange"))}),m(c,{name:"sousuo",class:"rightImg",onClick:i[2]||(i[2]=a=>e.$router.push("/quote"))}),m(c,{name:"cebian",class:"rightImg",onClick:t})])])],64)}}},[["__scopeId","data-v-0ed59291"]]),L={class:"header"},O={key:0,class:"bgImg"},P={class:"navigationList"},z=["onClick"],E={class:"itemName"},V=e({__name:"header",setup(e){const a=k((()=>[{icon:"zhenzhi",name:n("value_added _income"),clickName:"/addIncome"},{icon:"huiyuan",name:n("members_only"),clickName:"/membersOnly"},{icon:"putong",name:n("normal_product"),clickName:"/generalMerchandise"},{icon:"touzhi",name:n("my_invest"),clickName:"/myInvestment"}])),i=c("");return f((async()=>{try{const e=await t("ACTIVITY_NOTICE","FINANCE_ACTIVITY ");200===e.code&&(i.value=e.data[0].imgUrl)}catch(e){}})),(e,n)=>{const t=l,o=s;return r(),u("div",L,[i.value?(r(),u("div",O,[m(t,{filePath:i.value,class:"img"},null,8,["filePath"])])):y("",!0),h("div",P,[(r(!0),u(_,null,I(a.value,(a=>(r(),u("div",{class:"item",key:a.icon,onClick:s=>e.$router.push(a.clickName)},[m(o,{name:a.icon,class:"itemImg"},null,8,["name"]),h("div",E,x(a.name),1)],8,z)))),128))])])}}},[["__scopeId","data-v-c5c73c3d"]]),q={key:0,class:"funList"},U=e({__name:"fundList",setup(e){const a=c([]),s=c(!1);return f((()=>{(async()=>{try{let e={classify:""};const n=await w(e);200===n.code&&(a.value=n.rows,0===a.value.length?s.value=!0:s.value=!1)}catch(e){}})()})),(e,n)=>{const t=i;return r(),u(_,null,[a.value.length>0&&!s.value?(r(),u("div",q,[(r(!0),u(_,null,I(a.value,(e=>(r(),b(j,{key:e.id,itemObj:e},null,8,["itemObj"])))),128))])):y("",!0),0===a.value.length&&s.value?(r(),b(t,{key:1})):y("",!0)],64)}}},[["__scopeId","data-v-30bbfd17"]]),Y={__name:"index",setup:e=>(e,a)=>{const s=o;return r(),u(_,null,[["paxpay"].includes(e._getConfig("_APP_ENV"))?(r(),b(s,{key:0,currentName:e._t18("financial",["paxpay"]),border_bottom:!1},null,8,["currentName"])):(r(),b(F,{key:1})),m(V),m(U)],64)}};export{Y as default};
