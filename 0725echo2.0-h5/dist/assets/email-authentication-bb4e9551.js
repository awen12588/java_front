import{an as e,r as a,o as l,a as s,j as i,u as t,k as o,t as c,q as n,C as d,F as u,s as m,G as r,$ as v,a0 as p}from"./vendor-a95f68e4.js";import{_,r as b,f,x as h,ac as g,ax as k,aA as x,e as C}from"./index-e83e29a3.js";const y=""+new URL("email-a16b5bc6.png",import.meta.url).href,I={class:"content-box"},N={key:0,class:"bind-not"},U={class:"item"},V={class:"text"},j={class:"input"},R=["placeholder"],w={class:"item"},B={class:"text"},F={class:"input"},$=["placeholder"],q={class:"code-box"},A={key:0,class:"wait-code"},D={key:1,class:"bind-yes"},G={class:"top"},L=(e=>(v("data-v-3aaf139f"),e=e(),p(),e))((()=>o("img",{src:y,alt:""},null,-1))),T={class:"text"},z={class:"email"},E=_({__name:"email-authentication",setup(v){var p;const{_toast:_}=b(),y=f();y.getUserInfo();const{userInfo:E}=e(y),H={iconRight:[{iconName:"kefu",clickTo:"event_serviceChange"}]},J=a(null==(p=E.value.user)?void 0:p.email),K=a(J.value),M=a({email:"",code:""}),O=a(0),P=a(!1),Q=()=>{""!=M.value.email?k("BIND",M.value.email).then((e=>{"200"==e.code?(P.value=!0,O.value=6e4):m(e.msg)})):_("login_please_emailCode")},S=()=>{P.value=!1},W=()=>{""!=M.value.email?""!=M.value.code?x(M.value.email,M.value.code).then((e=>{"200"==e.code?(_("email_bind_success"),J.value=M.value.email,K.value=!0):m(e.msg)})):_("verification_code"):_("login_please_emailCode")};return(e,a)=>{const m=r;return l(),s(u,null,[i(h,{currentName:t(C)("sidebar_certified"),cuttentRight:H,border_bottom:!0},null,8,["currentName"]),o("div",I,[t(K)?(l(),s("div",D,[o("div",G,[L,o("div",T,c(t(C)("email_bind_success")),1),o("div",z,c(t(C)("email_your"))+"："+c(t(J)),1)]),o("div",{class:"change-email",onClick:a[2]||(a[2]=e=>K.value=!1)},c(t(C)("email_update")),1),o("div",{class:"back",onClick:a[3]||(a[3]=a=>e.$router.push("/"))},c(t(C)("backhome")),1)])):(l(),s("div",N,[o("div",U,[o("div",V,c(t(C)("login_emailCode")),1),o("div",j,[n(o("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>t(M).email=e),placeholder:t(C)("recharge_input")},null,8,R),[[d,t(M).email]])])]),o("div",w,[o("div",B,c(t(C)("verification_code")),1),o("div",F,[n(o("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t(M).code=e),placeholder:t(C)("recharge_input")},null,8,$),[[d,t(M).code]]),o("div",q,[t(P)?(l(),s("div",A,[i(m,{time:t(O),format:"ss",onFinish:S},null,8,["time"])])):(l(),s("div",{key:1,class:"send-code",onClick:Q},c(t(C)("login_send")),1))])])]),o("div",{class:"btnBox",onClick:W},[i(g,{btnValue:t(C)("btnConfirm",["bitmake"])},null,8,["btnValue"])])]))])],64)}}},[["__scopeId","data-v-3aaf139f"]]);export{E as default};
