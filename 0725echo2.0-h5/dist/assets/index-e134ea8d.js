import{_ as a,e as t,c as s,b as e,$ as n,x as l,k as i,j as c}from"./index-e83e29a3.js";import{g as o,a as d}from"./index-4d3585b4.js";import{r as u,o as r,a as p,k as m,j as v,t as h,u as f,h as g,e as _,A as y,c as w,F as P,p as k,l as b,$ as C,a0 as j}from"./vendor-a95f68e4.js";import{P as x}from"./index-02661f21.js";const z={class:"box"},N={class:"top"},T={class:"top_left"},D={class:"title fw-bold"},S={class:"top_right"},E={class:"content"},O={class:"left"},L={class:"content1"},A={class:"fw-num"},I={class:"content2"},R={class:"fw-num"},M={class:"content3"},q={key:0,class:"fw-num"},H={key:1,class:"fw-num"},U={class:"content3"},$={class:"fw-num rate"},B={class:"right"},F=a({__name:"card",props:{cardData:{type:Object}},setup(a){const n=u(a.cardData);return(a,l)=>{const i=s,c=e;return r(),p("div",z,[m("div",N,[m("div",T,[v(i,{name:"usdt",class:"usdt"}),m("div",D,h(f(n).title),1)]),m("div",S,h(f(t)("pledge_Buy",["aams"])),1)]),m("div",E,[m("div",O,[m("div",L,[m("p",null,h(f(t)("pledge_quota")),1),m("span",A,h(f(n).limitMin)+"~"+h(f(n).limitMax),1)]),m("div",I,[m("p",null,h(f(t)("pledge_number_days")),1),m("span",R,h(f(n).days),1)]),m("div",M,[m("p",null,h(f(t)("pledge_available_purchase",["aams"])),1),["dev"].includes(a._getConfig("_APP_ENV"))?(r(),p("span",q,h("".concat(f(n).buyPurchase,"/").concat(f(n).timeLimit)),1)):(r(),p("span",H,h("".concat(f(n).timeLimit)),1))]),m("div",U,[m("p",null,h(f(t)("pledge_rate_return")),1),m("span",$,h(f(n).minOdds)+"%~"+h(f(n).maxOdds)+"%",1)])]),m("div",B,[v(c,{filePath:"zhiyacard.png",name:"zhiyacard",class:"zhiyacard"})])])])}}},[["__scopeId","data-v-5241d058"]]),G={class:"banner"},J={class:"userAccount"},V={class:"title"},X=(a=>(C("data-v-e86b3cf6"),a=a(),j(),a))((()=>m("p",{class:"fw-num"},"USDT",-1))),K={class:"fund"},Q={class:"top"},W={class:"left"},Y={class:"fw-num"},Z={class:"right"},aa={class:"fw-num"},ta={class:"bottom"},sa={class:"left"},ea={class:"fw-num"},na={class:"right"},la={class:"fw-num"},ia={class:"project"},ca={key:0,class:"projectList"},oa=a({__name:"index",setup(a){const s=g(),C=u(!1),j=t("defi_speak"),z=u({}),N=u("bottom");let T=()=>{C.value=!0},D=()=>{C.value=!1};const S=_({iconRight:[{iconName:"guize",clickTo:""},{iconName:"jilu",clickTo:"/pledge/pledgeOrder"}]}),E=u({}),O=u([]);return y((()=>{(async()=>{const a=await o();"200"==a.code&&(O.value=a.rows)})(),(async()=>{const a=await d();"200"==a.code&&(E.value=a.data)})(),(async()=>{const a=await n("PLEDGE_EXPLAIN");(a.code="200")&&(z.value=a.data)})()})),w((()=>{let a=[];return a=[{title:"什么是质押挖矿？",content:[{childContent:"质押挖矿是本公司打造的一款帮助用户快捷进行链上质押获取奖励的工具产品。通过将数字资产质押在区块链网络，并获得基于POS（Proof of Stake，即权益证明）机制产生的奖励。在这个机制中，用户将数字资产委托给节点，节点在区块链上行使出块、打包交易等权利并获得奖励。用户根据锁仓数量按比例分享节点获得的奖励。"}],notes:[" 注：(非出借)每6小时一个阶段每天发送4次收益详情，您可以通过收益详情查看详细收益情况。 "," 注：(本产品属福利项引流产品目前名额有限，后续将对用户增设数字资产评估，只对达标用户开启该产品，所以先到先得)。 "]},{title:"产品优势",content:[{childTitle:"稳健型",childContent:"质押挖矿可以获得第三方相对稳定的奖励，产品期限多样。"}]},{title:"投向生息资产说明",content:[{childContent:"质押挖矿是将您的数字资产质押在区块链上，以支持该区块链网络的运营，并获得相应的奖励。"}]},{title:"收益说明",content:[{childContent:"T日申购成功后，T+1日00:00开始起息，02:00利息结算。"}]},{title:"交易说明",content:[{childTitle:"买入规则",childContent:"支持随时申购。"}]},{title:"风险提示",content:[{childContent:"提前赎回定期产品，系统将扣除该笔订单已经获得的部分收益。"}]}],a})),(a,n)=>{var o;const d=l,u=e,g=c;return r(),p(P,null,[v(x,{show:f(C),direction:f(N),onHandelClose:f(D),title:f(j),content:f(z)},null,8,["show","direction","onHandelClose","title","content"]),v(d,{currentName:f(t)("defi_host_lockup"),cuttentRight:f(S),onShowPopup:f(T)},null,8,["currentName","cuttentRight","onShowPopup"]),m("div",G,[v(u,{filePath:"zhiyabg.png",name:"defi"})]),m("div",J,[m("div",V,[v(u,{filePath:"usdt.png",name:"usdt",class:"usdt"}),X]),m("div",K,[v(u,{filePath:"zhiyaimg.png",name:"zhiyaimg",class:"zhiyaimg"}),m("div",Q,[m("div",W,[m("p",Y,h(f(i)(f(E).amount)||0),1),m("span",null,h(f(t)("pledge_hosting")),1)]),m("div",Z,[m("p",aa,h(f(E).orderNum||0),1),m("span",null,h(f(t)("pledge_commissioned_order")),1)])]),m("div",ta,[m("div",sa,[m("p",ea,h(f(i)(f(E).todayProfit)||0),1),m("span",null,h(f(t)("pledge_Today_Earnings")),1)]),m("div",na,[m("p",la,h(f(i)(f(E).profitMoney)||0),1),m("span",null,h(f(t)("Cumulative_income")),1)])])])]),m("div",ia,[(null==(o=f(O))?void 0:o.length)>0?(r(),p("div",ca,[(r(!0),p(P,null,k(f(O),((a,t)=>(r(),b(F,{onClick:t=>{return e=a,void s.push({path:"/pledge/pledgeDetail",query:{data:encodeURI(JSON.stringify(e))}});var e},key:t,cardData:a},null,8,["onClick","cardData"])))),128))])):(r(),b(g,{key:1}))])],64)}}},[["__scopeId","data-v-e86b3cf6"]]);export{oa as default};
