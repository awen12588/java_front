import{o as a,a as e,l,i as s,k as t,t as o,r as c,A as u,j as n,u as d,w as i,x as r,s as v,aB as m,F as f,p as h,$ as g,a0 as p,aC as _}from"./vendor-a95f68e4.js";import{_ as b,b as x,e as y,r as C,a as L,u as k,x as w,am as I,an as q,l as E,c as j}from"./index-e83e29a3.js";import{C as N}from"./currentcyNum-17d18293.js";const S={class:"editLeft"},O={class:"leftNames"},V={class:"fw-bold"},A=b({__name:"editLeft",props:{showLeftImg:{type:Boolean,default:!0},data:{type:Object,default:()=>{}}},setup:c=>(u,n)=>{const d=x;return a(),e("div",S,[c.showLeftImg?(a(),l(d,{key:0,filePath:c.data.logo,class:"leftImg"},null,8,["filePath"])):s("",!0),t("div",O,[t("div",V,o(c.data.showSymbol),1)])])}},[["__scopeId","data-v-849a61e5"]]),B={class:"columnFlex"},F={class:"currencyList"},P={class:"item"},T=(a=>(g("data-v-2b4c19b0"),a=a(),p(),a))((()=>t("div",{class:"placeholder"},null,-1))),G={class:"editCon"},H={class:"right"},R=b({__name:"editOptional",setup(l){const s={name:y("quote_add")},g=c(!1),{_toast:p}=C();L().setTradeStatus(Number(-1));const b=k();c("");const x=c([]),S=c(null),O=c(!1),V=()=>{O.value=!O.value,S.value.toggleAll(O.value)},R=c([]),U=()=>{I(M.value).then((a=>{"200"==a.code?(p("quote_addSuccess"),J(),b.getCoinList()):(v(a.msg),J())}))},$=()=>{g.value&&q(D.value).then((a=>{"200"==a.code?(p("quote_addSuccess"),J(),b.getCoinList()):(v(a.msg),J())}))},z=c(),D=c(),J=async()=>{var a;const e=await E();if(200==e.code){z.value=e.data;let l=[];null==(a=R.value)||a.forEach(((a,e)=>{var s;null==(s=z.value)||s.forEach(((e,s)=>{a.coin===e.coin&&l.push(a.coin)}))})),x.value=l}};u((()=>{J(),R.value=b.secondContractCoinList}));const K=a=>{g.value=a.length>0;let e=Object.values(a),l=[];e.forEach(((a,e)=>{var s;null==(s=R.value)||s.forEach(((e,s)=>{if(a===e.coin){let a={};a.coin=e.coin,a.icon=e.logo,l.push(a)}}))})),M.value=l;let s="";e.forEach(((a,e)=>{var l;null==(l=z.value)||l.forEach(((e,l)=>{a===e.coin&&(s=s+e.id+",")})),D.value=s}))},M=c([]);return(l,c)=>{const u=j,v=_,p=m;return a(),e("div",B,[n(w,{currentName:d(y)("quote_edit"),cuttentRight:s,onLinkTo:U},null,8,["currentName"]),t("div",F,[n(p,{modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=a=>x.value=a),shape:"square",onChange:K,ref_key:"checkboxGroup",ref:S},{default:i((()=>[(a(!0),e(f,null,h(R.value,((l,s)=>(a(),e("div",{class:"itemEvery",key:s},[t("div",P,[n(A,{data:l},null,8,["data"]),n(N,{data:l},null,8,["data"]),n(v,{name:l.coin},{icon:i((a=>[n(u,{class:"rightImg",name:a.checked?"gou-x":"gou-w"},null,8,["name"])])),_:2},1032,["name"])])])))),128))])),_:1},8,["modelValue"])]),T,t("div",G,[t("div",{class:"left",onClick:$},[n(u,{name:g.value?"sanchu16x18-x":"sanchu16x18-w",class:"chooseImg"},null,8,["name"]),t("div",{style:r({color:g.value?"#17ac74":"#bcbcbc",marginLeft:"10px"})},o(d(y)("quote_del")),5)]),t("div",H,[n(u,{name:O.value?"gou-x":"gou-w",class:"chooseImg",onClick:V},null,8,["name"]),t("div",null,o(d(y)("quote_all")),1)])])])}}},[["__scopeId","data-v-2b4c19b0"]]);export{R as default};
