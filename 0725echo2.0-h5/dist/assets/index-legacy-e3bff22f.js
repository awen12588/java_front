System.register(["./index-legacy-a1606cec.js","./vendor-legacy-8dc08808.js"],(function(t,e){"use strict";var a,n,i,l,o,r,s,c,f,u,d,p,m,v,y,g,h,_,b,C;return{setters:[t=>{a=t._,n=t.r,i=t.f,l=t.e,o=t.c,r=t.a,s=t.aE,c=t.x},t=>{f=t.h,u=t.r,d=t.an,p=t.o,m=t.a,v=t.k,y=t.t,g=t.u,h=t.F,_=t.p,b=t.j,C=t.c}],execute:function(){var e=document.createElement("style");e.textContent="[data-v-f0f36bef]{font-size:.373333rem;color:var(--ex-default-font-color)}.content[data-v-f0f36bef]{padding:.8rem .4rem 0}.content p[data-v-f0f36bef]{font-size:.426667rem;margin-bottom:.533333rem;text-align:left}.content .list .listCoin[data-v-f0f36bef]{margin-bottom:.8rem;display:flex;justify-content:space-between;align-items:center}.content .list .listCoin .left[data-v-f0f36bef],.content .list .listCoin .right[data-v-f0f36bef]{display:flex;align-items:center}.content .list .listCoin .left .coin[data-v-f0f36bef],.content .list .listCoin .right .coin[data-v-f0f36bef]{font-size:.533333rem;margin-right:.4rem}.content .list .listCoin .left .jiantou[data-v-f0f36bef],.content .list .listCoin .right .jiantou[data-v-f0f36bef]{font-size:.266667rem}\n",document.head.appendChild(e);const w={class:"content"},x={class:"list"},$=["onClick"],j={class:"left"},E={class:"right"},N=a({__name:"withdraw-list",props:{data:{type:Array,default:[]}},setup(t){const{_toast:e}=n(),a=f(),r=u(!0),s=i();s.getUserInfo();const{userInfo:c}=d(s),C=u(c.value.detail?.auditStatusPrimary),N=t=>{"1"!==C.value?(e("please_primary"),setTimeout((()=>{a.push("/certification-primary")}),800)):r.value=!0};return(e,n)=>{const i=o;return p(),m("div",w,[v("p",null,y(g(l)("coinList")),1),v("div",x,[(p(!0),m(h,null,_(t.data,((t,e)=>(p(),m("div",{class:"listCoin",key:e,onClick:e=>(t=>{if(1==t.type){if(["paxpay"].includes(__config._APP_ENV)?(r.value=!1,N()):r.value=!0,r.value){let e="";e=t.fee&&t.fee>0?`type=${t.card||t.title}&icon=${t.icon}&ratio=${t.ratio}&fee=${t.fee}`:`type=${t.card||t.title}&icon=${t.icon}&ratio=${t.ratio}`,setTimeout((()=>{a.push(`/withdraw-apply?${e}`)}),200)}}else 2==t.type&&(["paxpay"].includes(__config._APP_ENV)?N():r.value=!0,r.value&&a.push(`/withdraw-apply?type=银行卡&icon=${t.icon}`))})(t)},[v("div",j,[b(i,{name:t.icon,class:"coin"},null,8,["name"]),v("span",null,y(t.title),1)]),v("div",E,[b(i,{name:"jiantou",class:"jiantou"})])],8,$)))),128))])])}}},[["__scopeId","data-v-f0f36bef"]]);t("default",{__name:"index",setup(t){const e=r(),a=i();d(a);const n=C((()=>{let t=[];return e.getWithdrawList.forEach(((e,a)=>{if("1"==e.status){let a={type:1};a.ratio=e.ratio||"",a.fee=e.fee,0==e.type?(a.icon=e.rechargeType,a.title=e.rechargeName):(a.icon="card",a.title=l("withdraw_card"),a.card=s(e.rechargeType).toLocaleUpperCase()),t.push(a)}})),t}));return(t,e)=>{const a=c;return p(),m(h,null,[b(a,{currentName:g(l)("withdraw",["latcoin"])},null,8,["currentName"]),b(N,{data:g(n)},null,8,["data"])],64)}}})}}}));
