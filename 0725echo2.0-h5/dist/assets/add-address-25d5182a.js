import{h as a,r as e,c as s,o as l,a as t,j as d,u as n,k as r,t as c,w as o,l as u,i,an as v,ax as m,ay as p,I as _,y as f,az as b}from"./vendor-a95f68e4.js";import{_ as y,r as h,x as w,f as x,aj as g,e as C}from"./index-e83e29a3.js";const I={class:"bg"},k={class:"form"},T={class:"form-item"},j={class:"label"},R=["src"],E={class:"tit"},U={class:"tip"},V={class:"form-item"},G={class:"label"},L={class:"input"},M=y({__name:"add-address",setup(y){const{_toast:M}=h(),N=a(),z=e(!1),H=e(0),P=s((()=>1==H.value?TRCIMG:ERCIMG)),S=e({type:"ETH",address:""}),q=e(!1),A=e([{name:"ERC"},{name:"TRC"}]),B=(a,e)=>{H.value=e,S.value.type=a.name,z.value=!1},D=()=>{z.value=!0},F=async()=>{S.value.address=await navigator.clipboard.readText()},J=()=>{var a;if(!S.value.address)return M("wallet_address_cannot_be_empty");q.value=!0;const e=x(),{userInfo:s}=v(e);g({type:S.value.type,address:S.value.address.toLocaleLowerCase(),userId:null==(a=s.value.user)?void 0:a.userId}).then((async a=>{M("set_success"),S.value.address="",setTimeout((()=>{N.back(),e.getUserInfo()}),1500)})).finally((()=>{q.value=!1}))};return(a,e)=>{const s=b,v=m,y=p,h=_;return l(),t("div",I,[d(w,{currentName:n(C)("bind_address"),border_bottom:!0},null,8,["currentName"]),r("div",k,[r("div",T,[r("div",j,c(n(C)("please_select_a_chain")),1),r("div",{class:"input",onClick:D},[r("img",{src:P.value,class:"coin"},null,8,R),r("div",E,c(S.value.type),1),r("div",U,[d(s,{name:"arrow-down"})])])]),r("div",V,[r("div",G,c(n(C)("withdrawal_Please_enter_address")),1),r("div",L,[d(v,{class:"input-field",type:"textarea",modelValue:S.value.address,"onUpdate:modelValue":e[0]||(e[0]=a=>S.value.address=a),placeholder:n(C)("exchange.input")},null,8,["modelValue","placeholder"]),r("div",{class:"tip",onClick:F},c(n(C)("pasta")),1)])]),d(y,{block:"",class:"submit",loading:q.value,onClick:J},{default:o((()=>[f(c(n(C)("confirm")),1)])),_:1},8,["loading"])]),A.value.length?(l(),u(h,{key:0,show:z.value,"onUpdate:show":e[1]||(e[1]=a=>z.value=a),actions:A.value,onSelect:B,"cancel-text":n(C)("cancel")},null,8,["show","actions","cancel-text"])):i("",!0)])}}},[["__scopeId","data-v-b4fe1b62"]]);export{M as default};
