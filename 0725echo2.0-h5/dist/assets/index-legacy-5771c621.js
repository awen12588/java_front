System.register(["./index-legacy-a1606cec.js","./index-legacy-e439ad5f.js","./vendor-legacy-8dc08808.js","./index-legacy-3a78f448.js"],(function(t,e){"use strict";var a,o,n,c,d,r,s,l,i,u,f,p,m,v,b,g,h,x,y,_,A,w,z,k,j,C,P;return{setters:[t=>{a=t._,o=t.e,n=t.c,c=t.b,d=t.$,r=t.x,s=t.k,l=t.j},t=>{i=t.g,u=t.a},t=>{f=t.r,p=t.o,m=t.a,v=t.k,b=t.j,g=t.t,h=t.u,x=t.h,y=t.e,_=t.A,A=t.c,w=t.F,z=t.p,k=t.l,j=t.$,C=t.a0},t=>{P=t.P}],execute:function(){var e=document.createElement("style");e.textContent=".box[data-v-5241d058]{margin-top:.4rem;cursor:pointer;border:.026667rem solid var(--ex-border-color1);border-radius:.266667rem;font-size:.373333rem;color:var(--ex-passive-font-color)}.box .top[data-v-5241d058]{display:flex;align-items:center;justify-content:space-between;border-bottom:.026667rem solid var(--ex-project-border-color);padding:.533333rem .266667rem}.box .top .top_left[data-v-5241d058]{display:flex;align-items:center}.box .top .top_left .title[data-v-5241d058]{font-weight:700;color:var(--ex-default-font-color)}.box .top .top_left .usdt[data-v-5241d058]{font-size:.533333rem;margin-right:.266667rem}.box .top .top_right[data-v-5241d058]{min-width:2.773333rem;padding:.213333rem .266667rem;background-color:var(--ex-div-bgColor1);color:var(--ex-font-color);text-align:center;border-radius:.08rem}.box .content[data-v-5241d058]{display:flex;padding:.533333rem .266667rem;justify-content:space-between}.box .content .left[data-v-5241d058]{display:flex;flex-direction:column}.box .content .left>div[data-v-5241d058]{flex:1;display:flex;align-items:center;color:var(--ex-passive-font-color);font-size:.32rem}.box .content .left>div p[data-v-5241d058]{min-width:.96rem}.box .content .left>div span[data-v-5241d058]{margin-left:.533333rem;color:var(--ex-default-font-color);font-size:.48rem}.box .content .left>div span.rate[data-v-5241d058]{color:var(--ex-font-color9)}.box .content .right .zhiyacard[data-v-5241d058]{font-size:3.2rem}.banner[data-v-e86b3cf6]{padding:.266667rem .666667rem 0}.banner img[data-v-e86b3cf6]{width:100%;height:auto}.userAccount[data-v-e86b3cf6]{font-size:.373333rem;padding:0 .4rem;color:var(--ex-default-font-color)}.userAccount .title[data-v-e86b3cf6]{padding:.533333rem 0;display:flex;align-items:center}.userAccount .title .usdt[data-v-e86b3cf6]{font-size:.906667rem}.userAccount .title p[data-v-e86b3cf6]{margin-left:.266667rem;font-size:.64rem}.userAccount .fund[data-v-e86b3cf6]{border:.026667rem solid var(--ex-usdt-border-color);border-radius:.266667rem;position:relative;background:var(--ex-usdt-background-color)}.userAccount .fund .zhiyaimg[data-v-e86b3cf6]{position:absolute;font-size:2.666667rem;transform:translate(-50%,-50%);left:50%;top:50%}.userAccount .fund .top[data-v-e86b3cf6],.userAccount .fund .bottom[data-v-e86b3cf6]{display:flex;justify-content:space-between}.userAccount .fund .top .left[data-v-e86b3cf6],.userAccount .fund .top .right[data-v-e86b3cf6],.userAccount .fund .bottom .left[data-v-e86b3cf6],.userAccount .fund .bottom .right[data-v-e86b3cf6]{width:100%;height:100%;padding:.666667rem .4rem}.userAccount .fund .top .left p[data-v-e86b3cf6],.userAccount .fund .top .left span[data-v-e86b3cf6],.userAccount .fund .top .right p[data-v-e86b3cf6],.userAccount .fund .top .right span[data-v-e86b3cf6],.userAccount .fund .bottom .left p[data-v-e86b3cf6],.userAccount .fund .bottom .left span[data-v-e86b3cf6],.userAccount .fund .bottom .right p[data-v-e86b3cf6],.userAccount .fund .bottom .right span[data-v-e86b3cf6]{max-width:100%;word-break:break-word}.userAccount .fund .top .right[data-v-e86b3cf6],.userAccount .fund .bottom .right[data-v-e86b3cf6]{border-left:.026667rem solid var(--ex-usdt-border-color3);text-align:right}.userAccount .fund .top p[data-v-e86b3cf6],.userAccount .fund .bottom p[data-v-e86b3cf6]{font-size:.48rem;margin-bottom:.266667rem}.userAccount .fund .top span[data-v-e86b3cf6],.userAccount .fund .bottom span[data-v-e86b3cf6]{color:var(--ex-passive-font-color)}.userAccount .fund .bottom[data-v-e86b3cf6]{border-top:.026667rem solid var(--ex-usdt-border-color2)}.userAccount .fund .bottom p[data-v-e86b3cf6]{color:var(--ex-font-color9)}.userAccount .fund .title[data-v-e86b3cf6]{margin-bottom:.373333rem}.userAccount .fund .title span[data-v-e86b3cf6]{color:var(--ex-passive-font-color)}.userAccount .fund .amount[data-v-e86b3cf6]{font-size:.746667rem}.project[data-v-e86b3cf6]{padding:0 .4rem 1.333333rem}\n",document.head.appendChild(e);const N={class:"box"},S={class:"top"},T={class:"top_left"},D={class:"title fw-bold"},E={class:"top_right"},O={class:"content"},L={class:"left"},$={class:"content1"},I={class:"fw-num"},R={class:"content2"},M={class:"fw-num"},q={class:"content3"},H={key:0,class:"fw-num"},U={key:1,class:"fw-num"},B={class:"content3"},F={class:"fw-num rate"},G={class:"right"},J=a({__name:"card",props:{cardData:{type:Object}},setup(t){const e=f(t.cardData);return(t,a)=>{const d=n,r=c;return p(),m("div",N,[v("div",S,[v("div",T,[b(d,{name:"usdt",class:"usdt"}),v("div",D,g(h(e).title),1)]),v("div",E,g(h(o)("pledge_Buy",["aams"])),1)]),v("div",O,[v("div",L,[v("div",$,[v("p",null,g(h(o)("pledge_quota")),1),v("span",I,g(h(e).limitMin)+"~"+g(h(e).limitMax),1)]),v("div",R,[v("p",null,g(h(o)("pledge_number_days")),1),v("span",M,g(h(e).days),1)]),v("div",q,[v("p",null,g(h(o)("pledge_available_purchase",["aams"])),1),["dev"].includes(t._getConfig("_APP_ENV"))?(p(),m("span",H,g(`${h(e).buyPurchase}/${h(e).timeLimit}`),1)):(p(),m("span",U,g(`${h(e).timeLimit}`),1))]),v("div",B,[v("p",null,g(h(o)("pledge_rate_return")),1),v("span",F,g(h(e).minOdds)+"%~"+g(h(e).maxOdds)+"%",1)])]),v("div",G,[b(r,{filePath:"zhiyacard.png",name:"zhiyacard",class:"zhiyacard"})])])])}}},[["__scopeId","data-v-5241d058"]]),V={class:"banner"},X={class:"userAccount"},K={class:"title"},Q=(t=>(j("data-v-e86b3cf6"),t=t(),C(),t))((()=>v("p",{class:"fw-num"},"USDT",-1))),W={class:"fund"},Y={class:"top"},Z={class:"left"},tt={class:"fw-num"},et={class:"right"},at={class:"fw-num"},ot={class:"bottom"},nt={class:"left"},ct={class:"fw-num"},dt={class:"right"},rt={class:"fw-num"},st={class:"project"},lt={key:0,class:"projectList"},it={__name:"index",setup(t){const e=x(),a=f(!1),n=o("defi_speak"),j=f({}),C=f("bottom");let N=()=>{a.value=!0},S=()=>{a.value=!1};const T=y({iconRight:[{iconName:"guize",clickTo:""},{iconName:"jilu",clickTo:"/pledge/pledgeOrder"}]}),D=f({}),E=f([]);return _((()=>{(async()=>{const t=await i();"200"==t.code&&(E.value=t.rows)})(),(async()=>{const t=await u();"200"==t.code&&(D.value=t.data)})(),(async()=>{const t=await d("PLEDGE_EXPLAIN");(t.code="200")&&(j.value=t.data)})()})),A((()=>{let t=[];return t=[{title:"什么是质押挖矿？",content:[{childContent:"质押挖矿是本公司打造的一款帮助用户快捷进行链上质押获取奖励的工具产品。通过将数字资产质押在区块链网络，并获得基于POS（Proof of Stake，即权益证明）机制产生的奖励。在这个机制中，用户将数字资产委托给节点，节点在区块链上行使出块、打包交易等权利并获得奖励。用户根据锁仓数量按比例分享节点获得的奖励。"}],notes:[" 注：(非出借)每6小时一个阶段每天发送4次收益详情，您可以通过收益详情查看详细收益情况。 "," 注：(本产品属福利项引流产品目前名额有限，后续将对用户增设数字资产评估，只对达标用户开启该产品，所以先到先得)。 "]},{title:"产品优势",content:[{childTitle:"稳健型",childContent:"质押挖矿可以获得第三方相对稳定的奖励，产品期限多样。"}]},{title:"投向生息资产说明",content:[{childContent:"质押挖矿是将您的数字资产质押在区块链上，以支持该区块链网络的运营，并获得相应的奖励。"}]},{title:"收益说明",content:[{childContent:"T日申购成功后，T+1日00:00开始起息，02:00利息结算。"}]},{title:"交易说明",content:[{childTitle:"买入规则",childContent:"支持随时申购。"}]},{title:"风险提示",content:[{childContent:"提前赎回定期产品，系统将扣除该笔订单已经获得的部分收益。"}]}],t})),(t,d)=>{const i=r,u=c,f=l;return p(),m(w,null,[b(P,{show:h(a),direction:h(C),onHandelClose:h(S),title:h(n),content:h(j)},null,8,["show","direction","onHandelClose","title","content"]),b(i,{currentName:h(o)("defi_host_lockup"),cuttentRight:h(T),onShowPopup:h(N)},null,8,["currentName","cuttentRight","onShowPopup"]),v("div",V,[b(u,{filePath:"zhiyabg.png",name:"defi"})]),v("div",X,[v("div",K,[b(u,{filePath:"usdt.png",name:"usdt",class:"usdt"}),Q]),v("div",W,[b(u,{filePath:"zhiyaimg.png",name:"zhiyaimg",class:"zhiyaimg"}),v("div",Y,[v("div",Z,[v("p",tt,g(h(s)(h(D).amount)||0),1),v("span",null,g(h(o)("pledge_hosting")),1)]),v("div",et,[v("p",at,g(h(D).orderNum||0),1),v("span",null,g(h(o)("pledge_commissioned_order")),1)])]),v("div",ot,[v("div",nt,[v("p",ct,g(h(s)(h(D).todayProfit)||0),1),v("span",null,g(h(o)("pledge_Today_Earnings")),1)]),v("div",dt,[v("p",rt,g(h(s)(h(D).profitMoney)||0),1),v("span",null,g(h(o)("Cumulative_income")),1)])])])]),v("div",st,[h(E)?.length>0?(p(),m("div",lt,[(p(!0),m(w,null,z(h(E),((t,a)=>(p(),k(J,{onClick:a=>{return o=t,void e.push({path:"/pledge/pledgeDetail",query:{data:encodeURI(JSON.stringify(o))}});var o},key:a,cardData:t},null,8,["onClick","cardData"])))),128))])):(p(),k(f,{key:1}))])],64)}}};t("default",a(it,[["__scopeId","data-v-e86b3cf6"]]))}}}));
