System.register(["./index-legacy-a1606cec.js","./vendor-legacy-8dc08808.js"],(function(e,t){"use strict";var a,r,n,c,l,u,s,d,i,o,m,v,_,y,b,f,g;return{setters:[e=>{a=e._,r=e.a,n=e.e,c=e.$,l=e.x,u=e.j},e=>{s=e.A,d=e.M,i=e.c,o=e.r,m=e.o,v=e.a,_=e.j,y=e.k,b=e.l,f=e.i,g=e.F}],execute:function(){var t=document.createElement("style");t.textContent=".itemDetailObj[data-v-8fe71b20]{font-size:.32rem;padding:.266667rem .4rem;color:var(--ex-default-font-color);line-height:.64rem;word-wrap:break-word}.itemDetailObj img[data-v-8fe71b20]{width:100%}\n",document.head.appendChild(t);const p=["innerHTML"];e("default",a({__name:"tradingRules",setup(e){const t=r();s((()=>{t.setTradeFlag(t.tradeFlag+t.isOption)}));const a=d(),N=i((()=>{switch(Number(a.query.type)){case 0:default:return n("Second_Contract_Rules");case 1:return n("Currency_Trading_Rules");case 2:return n("Ustandard_contract_rules")}})),h=o(N.value),j=o(null),w=async e=>{try{const t=await c(e);200===t.code&&(j.value=t.data[0].content,h.value=t.data[0].title||N.value)}catch(t){}};return s((()=>{switch(Number(a.query.type)){case 0:w("PERIOD_EXPLAIN");break;case 1:w("COIN_EXPLAIN");break;case 2:w("U_STANDARD_EXPLAIN")}})),(e,t)=>{const a=l,r=u;return m(),v(g,null,[_(a,{currentName:h.value},null,8,["currentName"]),y("div",{class:"itemDetailObj",innerHTML:j.value},null,8,p),j.value?f("",!0):(m(),b(r,{key:0}))],64)}}},[["__scopeId","data-v-8fe71b20"]]))}}}));
