System.register(["./index-legacy-a1606cec.js","./vendor-legacy-8dc08808.js","./index-legacy-166a253e.js"],(function(e,t){"use strict";var a,s,i,r,l,n,o,d,c,m,u,g,v,p,f,b,y,h,k,x,I,_,C,j,w,B,S,M,z,L,P,T;return{setters:[e=>{a=e._,s=e.f,i=e.a,r=e.a9,l=e.e,n=e.aa,o=e.b,d=e.c,c=e.r,m=e.ab,u=e.ac,g=e.ad,v=e.ae,p=e.i},e=>{f=e.c,b=e.r,y=e.o,h=e.a,k=e.u,x=e.j,I=e.k,_=e.t,C=e.l,j=e.w,w=e.i,B=e.F,S=e.an,M=e.h,z=e.A,L=e.p,P=e.K},e=>{T=e._}],execute:function(){var t=document.createElement("style");t.textContent=".userMess[data-v-365773b4]{padding:.533333rem .4rem;display:flex;align-items:center}.userMess .userMessImg[data-v-365773b4]{width:1.333333rem;height:1.333333rem;border-radius:50%}.userMess .messRight[data-v-365773b4]{margin-left:.266667rem;display:flex;flex-direction:column;justify-content:space-between;padding:.133333rem 0}.userMess .messRight .rightTop[data-v-365773b4]{font-size:.426667rem;color:var(--ex-default-font-color)}.userMess .messRight .rightBot[data-v-365773b4]{font-size:.373333rem;color:var(--ex-passive-font-color)}.copyName[data-v-365773b4]{margin:0 .4rem;background-color:var(--ex-home-sidebar-address-bgcolor);font-size:.373333rem;border-radius:.08rem;padding:.133333rem .266667rem;color:var(--ex-home-sidebar-address-ftcolor)!important}.vipClass[data-v-365773b4]{font-size:.373333rem;color:var(--ex-passive-font-color)}.vipClass .senLeftImg[data-v-365773b4]{font-size:.533333rem}.messLeft[data-v-365773b4]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.messLeft p[data-v-365773b4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.48rem;color:#333}.list[data-v-029782b7]{padding:.4rem}.list .item[data-v-029782b7]{padding:.4rem 0;display:flex;justify-content:space-between;align-items:center}.list .item .itemImg[data-v-029782b7]{width:.533333rem;height:.533333rem;margin-right:.533333rem}.list .item .itemRight[data-v-029782b7]{flex:1;display:flex;justify-content:space-between;align-items:center;color:var(--ex-default-font-color);font-size:.373333rem}.list .item .itemRight .rightImg[data-v-029782b7]{width:.16rem;height:.266667rem}.right_tip[data-v-029782b7]{display:flex;align-items:center}.right_tip span[data-v-029782b7]{margin-right:.266667rem;font-size:.32rem;color:#17ac74}.slidebar[data-v-4d02b354]{height:100vh;padding-bottom:2.666667rem;overflow:auto}.close[data-v-4d02b354]{padding:.453333rem .4rem .533333rem;display:flex;justify-content:flex-end}.close .closeImg[data-v-4d02b354]{width:.64rem;height:.64rem}.notLogged[data-v-4d02b354]{border-top:.026667rem solid var(--ex-input-boder-bgColor);padding:1.333333rem .4rem .8rem}.notLogged .btnBox[data-v-4d02b354]{margin-bottom:.533333rem}.logged[data-v-4d02b354]{border-top:.026667rem solid var(--ex-input-boder-bgColor);margin-top:1.333333rem;padding:.8rem .4rem;font-size:.373333rem;color:var(--ex-font-color9);display:flex;align-items:center}.logged .loggedImg[data-v-4d02b354]{width:.533333rem;height:.533333rem;margin-right:.533333rem}.logged div[data-v-4d02b354]{color:var(--ex-font-color9)}\n",document.head.appendChild(t);const R={key:0,class:"userMess"},U={class:"fw-num"},V={class:"messRight"},O={class:"rightTop fw-bold"},A={class:"rightBot"},E={key:1,class:"copyName"},F=a({__name:"userLogin",setup(e){const t=s(),a=i(),c=f((()=>t.userInfo.user?.userId)),m=f((()=>t.userInfo.user?.address)),u=f((()=>{let e=t.userInfo.asset?.filter((e=>"usdt"==e.symbol&&1==e.type));return e[0]?.availableAmount||0})),g=b(a.getVIPClass?.isOpen),v=f((()=>{let e=0,t="",s="";for(let i in a.getVIPClass)if(u.value>a.getVIPClass[i]&&(t=i),u.value<=a.getVIPClass[i]){s=i;break}return t.replace("Start","")===s.replace("End","")&&(e=t.replace("Start","").replace("vip","")),e}));return(e,a)=>{const s=o,i=d;return y(),h(B,null,[c.value?(y(),h("div",R,[k(g)?(y(),h("div",{key:0,class:"messLeft",onClick:a[0]||(a[0]=t=>e.$router.push("/vip-rule"))},[x(s,{filePath:"defi/组 249.png",class:"userMessImg"}),I("p",U,"v"+_(v.value),1)])):(y(),C(i,{key:1,name:"userImg",class:"userMessImg"})),I("div",V,[x(r,{data:c.value},{copyMsg:j((()=>[I("div",O,"UID："+_(c.value),1)])),_:1},8,["data"]),I("div",A,_(k(l)("credit_score"))+"："+_(k(t).userInfo.detail?.credits),1)])])):w("",!0),m.value?(y(),h("div",E,[x(r,{data:m.value},{copyMsg:j((()=>[I("p",null,_(k(n)(m.value)),1)])),_:1},8,["data"])])):w("",!0)],64)}}},[["__scopeId","data-v-365773b4"]]),N={class:"list"},$=["onClick"],q={class:"itemRight"},D={key:0},K={key:1},G={class:"right_tip"},H={key:0},J={key:1},Q=a({__name:"navigation",setup(e){const{_toast:t}=c(),a=s();a.isSign&&a.getUserInfo();const{userInfo:r}=S(a),n=M(),u=i(),g=b(""),v=f((()=>u.getSidebarList));z((()=>{p()}));const p=async()=>{const e=await m();"200"==e.code&&(g.value=e.data.url)};return(e,a)=>{const s=o,i=d;return y(),h("div",N,[(y(!0),h(B,null,L(k(v).filter((e=>e.isOpen)),(e=>(y(),h("div",{class:"item",key:e.icon,onClick:a=>(e=>{if("link"!=e.jumpType||"paper"!=e.key&&"aboutUS"!=e.key){if("path"==e.jumpType)if("advanced"==e.key){const a=v.value.find((e=>"primary"==e.key));if(a&&a.isOpen){const a=r.value.detail.auditStatusPrimary;a&&1==a?n.push(e.jumpUrl):t("please_primary")}else n.push(e.jumpUrl)}else n.push(e.jumpUrl)}else window.open(g.value)})(e)},[x(s,{filePath:e.logoUrl,alt:"",class:"itemImg"},null,8,["filePath"]),I("div",q,["language"==e.key?(y(),h("div",D,_(k(l)("language_key")),1)):(y(),h("div",K,_(k(l)(`sidebar_${e.key}`,["bitmake","paxpay","aams"])),1)),I("div",G,["primary"==e.key&&"1"===k(r).detail?.auditStatusPrimary?(y(),h("span",H,_(k(l)("verified_ok")),1)):w("",!0),"advanced"==e.key&&"1"===k(r).detail?.auditStatusAdvanced?(y(),h("span",J,_(k(l)("verified_ok")),1)):w("",!0),x(i,{name:"jiantou-y",class:"rightImg"})])])],8,$)))),128))])}}},[["__scopeId","data-v-029782b7"]]),W={class:"slidebar"},X={class:"close"},Y={key:1,class:"notLogged"};e("default",a({__name:"index",emits:["closeSideBar"],setup(e,{emit:t}){const{_toast:a}=c(),i=s(),{userInfo:r}=S(i),n=b(i.isSign),o=b(!1),m=()=>{o.value=!0},f=()=>{o.value=!1,g().then((e=>{"200"==e.code&&(a("layout_success"),i.signOut(),v("/"),M(),n.value=!1,setTimeout((()=>location.reload()),10))})).catch((e=>{}))},j=()=>{o.value=!1},B=t,M=()=>{B("closeSideBar")};return(e,t)=>{const a=d;return y(),h("div",W,[I("div",X,[x(a,{name:"guanbi",class:"closeImg",onClick:M})]),k(n)?(y(),C(F,{key:0})):w("",!0),x(Q),k(n)?w("",!0):(y(),h("div",Y,[I("div",{class:"btnBox",onClick:t[0]||(t[0]=e=>k(p)("/sign-in"))},[x(u,{btnValue:k(l)("login")},null,8,["btnValue"])]),I("div",{class:"btnBox",onClick:t[1]||(t[1]=e=>k(p)("/sign-up"))},[x(u,{btnReverse:!1,btnValue:k(l)("register"),btnColor:"#fff"},null,8,["btnValue"])])])),k(n)&&!k(r).addressFlag?(y(),h("div",{key:2,class:"logged",onClick:m},[x(a,{name:"tuichu",class:"loggedImg"}),I("div",null,_(k(l)("layout",["aams"])),1)])):w("",!0),x(T,{value:k(o),"onUpdate:value":t[2]||(t[2]=e=>P(o)?o.value=e:null),title:"",content:k(l)("layout_require"),"confirm-button-color":"#17ac74",onCancelBtn:j,onConfirmBtn:f,confirmButtonText:k(l)("btnConfirm",["bitmake"]),cancelButtonText:k(l)("cancel"),"z-index":"200"},null,8,["value","content","confirmButtonText","cancelButtonText"])])}}},[["__scopeId","data-v-4d02b354"]]))}}}));
