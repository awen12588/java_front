import{_ as e,u as o,x as s,e as t}from"./index-e83e29a3.js";import{B as r,a}from"./index-82bf46aa.js";import{P as i}from"./public-8a763788.js";import{L as n}from"./leftSide-628982ee.js";import{M as l,r as u,N as p,A as d,o as m,a as c,j as f,u as h,w as y}from"./vendor-a95f68e4.js";import"./handicap-5e29e67a.js";import"./filters-360d8985.js";/* empty css              *//* empty css              */import"./currencyItem-9db1c947.js";const j=e({__name:"tradeBB",props:{headerList:{type:Array}},setup(e){const j=o(),v=l(),L=u({});p((()=>v.query.symbol),(e=>{L.value=j.spotCoinList.filter(((o,s)=>o.coin===e))[0]}),{deep:!0});d((()=>{v.query.symbol?(L.value=j.spotCoinList.filter(((e,o)=>e.coin===v.query.symbol))[0],L.value||(L.value=j.spotCoinList[0])):L.value=j.spotCoinList[0]}));const b=u(!1),C=()=>{b.value=!0};return(o,l)=>{const u=s;return m(),c("div",null,[f(u,{currentName:h(t)("trade_tab3"),border_bottom:!0},null,8,["currentName"]),f(r,{coinInfo:h(L),onShowSidePopup:C},null,8,["coinInfo"]),f(a,{coinInfo:h(L)},null,8,["coinInfo"]),f(i,{show:h(b),onHandelClose:l[1]||(l[1]=e=>b.value=!1),direction:"left",height:"100%",width:"80%",showHeader:!1,empty:!1},{emptyContentCustomize:y((()=>[f(n,{onClose:l[0]||(l[0]=e=>b.value=!1),headerList:e.headerList},null,8,["headerList"])])),_:1},8,["show"])])}}},[["__scopeId","data-v-19bfcd6d"]]);export{j as default};
