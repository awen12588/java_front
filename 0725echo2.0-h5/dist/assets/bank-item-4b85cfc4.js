import{_ as a,c as s}from"./index-e83e29a3.js";import{h as n,o as e,a as c,k as t,F as i,p as k,y as r,t as o,i as l,j as b}from"./vendor-a95f68e4.js";const p={class:"bankItem"},d={class:"bank-content"},m=["onClick"],u={class:"top-content"},y={class:"bank-type"},h={key:0,class:"scl"},j=["onClick"],v={class:"name"},N={class:"bankNumber"},_={key:0,class:"bank"},f={key:1,class:"bank"},C=a({__name:"bank-item",props:{bankList:{type:Array,default:[]}},setup(a){const C=n(),A=a,B=a=>{C.push({path:"/edit-bank",query:{data:encodeURI(JSON.stringify(a))}})};return(a,n)=>{const C=s;return e(),c("div",p,[t("ul",d,[(e(!0),c(i,null,k(A.bankList,(a=>(e(),c("li",{key:a.id,onClick:s=>B(a)},[t("div",u,[t("p",y,[r(o(a.bankName),1),a.coin?(e(),c("span",h,"（"+o(a.coin)+"）",1)):l("",!0)]),t("div",{class:"normal",onClick:s=>B(a)},[b(C,{name:"bianji",class:"bianji"})],8,j)]),t("p",v,o(a.userName),1),t("p",N,o(a.cardNumber),1),a.bankAddress?(e(),c("p",_,o(a.bankAddress),1)):l("",!0),a.bankBranch?(e(),c("p",f,o(a.bankBranch),1)):l("",!0)],8,m)))),128))])])}}},[["__scopeId","data-v-38883bce"]]);export{C as B};
