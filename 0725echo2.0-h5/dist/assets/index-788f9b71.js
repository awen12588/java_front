import{_ as a,a as e,f as t,r as n,ac as l,aS as s,e as u,R as o,aT as r,x as c,c as v}from"./index-e83e29a3.js";import{r as i,c as d,A as f,o as p,a as m,j as _,u as A,k as b,t as y,w as k,q as O,C as V,y as h,F as x,s as C,aG as I,$ as S,a0 as w,aH as U}from"./vendor-a95f68e4.js";import{u as g}from"./useFreeze-08cc92b1.js";const j={class:"content_box"},z={class:"title fw-bold"},F={class:"cardOne"},N={class:"left"},T={class:"left_top"},q={class:"left_bottom"},E={class:"cardTwo"},P={class:"top"},B={class:"bottom"},D=["placeholder"],G=(a=>(S("data-v-016c684c"),a=a(),w(),a))((()=>b("i",null,"|",-1))),H={class:"keyong"},L={class:"fw-num"},R=a({__name:"index",setup(a){var S,w;const{_isFreeze:R}=g(),$=e();t();const{_toast:J}=n(),K=i({coin:"usdt",transferOutAccount:"",transferInAccount:"",amount:""}),M=i([]),Q=async()=>{let a=await s();"200"==a.code&&(M.value=a.data)},W=d((()=>{let a="";return M.value.forEach(((e,t)=>{(null==e?void 0:e.type)==K.value.transferOutAccount&&(a=e.availableAmount)})),a})),X=d((()=>$.getAssetsTabList.filter((a=>!!a.isOpen&&("平台资产"==a.name&&(a.keyStr=u(a.keyStr,["latcoin"])),"理财资产"==a.name&&(a.keyStr=u(a.keyStr,["paxpay","latcoin"])),"合约资产"==a.name&&(a.keyStr=u(a.keyStr,["paxpay","latcoin"])),a.text=a.keyStr,a.value={"平台资产":1,"理财资产":2,"合约资产":3}[a.name],!0))).sort(((a,e)=>a.sort-e.sort))));K.value.transferOutAccount=(null==(S=X.value[0])?void 0:S.value)||"",K.value.transferInAccount=(null==(w=X.value[1])?void 0:w.value)||"";const Y=d((()=>X.value.filter((a=>a.value!=K.value.transferInAccount)))),Z=d((()=>X.value.filter((a=>a.value!=K.value.transferOutAccount)))),aa=()=>{o.includes(__config._APP_ENV)?R(o)&&ea():ea()},ea=()=>{if(""==K.value.amount||K.value.amount<=0)return J("transfer_please_amount");r(K.value).then((a=>{"200"==a.code?(J("transfer_success"),Q()):C(a.msg||"")}))},ta=()=>{K.value.amount=W.value},na=()=>{[K.value.transferOutAccount,K.value.transferInAccount]=[K.value.transferInAccount,K.value.transferOutAccount]};return f((()=>{Q()})),(a,e)=>{var t,n,s;const o=c,r=U,i=I,d=v;return p(),m(x,null,[_(o,{currentName:A(u)("transfer")},null,8,["currentName"]),b("div",j,[b("p",z,y(A(u)("transfer")),1),b("div",F,[b("div",N,[b("div",T,[b("span",null,y(A(u)("transfer_from")),1),_(i,{"active-color":"#17ac74"},{default:k((()=>[_(r,{modelValue:K.value.transferOutAccount,"onUpdate:modelValue":e[0]||(e[0]=a=>K.value.transferOutAccount=a),options:Y.value},null,8,["modelValue","options"])])),_:1})]),b("div",q,[b("span",null,y(A(u)("transfer_to",["aams"])),1),_(i,{"active-color":"#17ac74"},{default:k((()=>[_(r,{modelValue:K.value.transferInAccount,"onUpdate:modelValue":e[1]||(e[1]=a=>K.value.transferInAccount=a),options:Z.value},null,8,["modelValue","options"])])),_:1})])]),b("div",{class:"right",onClick:na},[_(d,{name:"huazhuanbtn",class:"huazhuanbtn"})])]),b("div",E,[b("div",P,y(A(u)("transfer_amount")),1),b("div",B,[O(b("input",{type:"number",placeholder:"".concat(A(u)("transfer_less",["aams"]),"1").concat(null==(t=K.value.coin)?void 0:t.toUpperCase()),"onUpdate:modelValue":e[2]||(e[2]=a=>K.value.amount=a)},null,8,D),[[V,K.value.amount]]),b("span",{onClick:ta},y(A(u)("swap_all")),1),G,b("p",null,y(null==(n=K.value.coin)?void 0:n.toUpperCase()),1)])]),b("div",H,[h(y(A(u)("transfer_available"))+"：",1),b("span",L,y(W.value)+" "+y(null==(s=K.value.coin)?void 0:s.toUpperCase()),1)]),b("div",{class:"btnBox",onClick:aa},[_(l,{btnValue:A(u)("transfer_require"),btnColor:"#138A5D"},null,8,["btnValue"])])])],64)}}},[["__scopeId","data-v-016c684c"]]);export{R as default};
