import{u as i,r,f as l,o as e,c as o,b as a,F as _,q as p,p as u,h as w,t as g}from"./vendor.3fb708f4.js";import{_ as v,w as h}from"./index.8b7d5765.js";const f={setup(){console.log("Mint.setup"),i();const s=r(),n=r(),c=r(!0);return l(async()=>{const t=await ethereum.request({method:"eth_requestAccounts"});s.value=t[0],console.log(s.value),n.value=await h(t[0]),c.value=!1}),{loading:c,tokens:n,account:s}}},m=s=>(u("data-v-4a6024ce"),s=s(),w(),s),y={class:"w3-display-container",id:"my"},k={class:"w3-container w3-padding-32"},b=m(()=>a("h1",{class:"w3-padding-16"},"My Dogs",-1)),x={key:0,class:"loader"},M={key:1,class:"w3-row-padding"},B={class:"w3-col l3 m6 s6 w3-margin-bottom"},I={class:"label w3-display-topmiddle w3-green w3-padding"},S=["src"];function q(s,n,c,t,j,D){return e(),o("div",y,[a("div",k,[b,t.loading?(e(),o("div",x)):(e(),o("div",M,[(e(!0),o(_,null,p(t.tokens,d=>(e(),o("div",B,[(e(),o("div",{key:d,class:"dogs w3-display-container"},[a("div",I,g(d),1),a("img",{src:"https://www.cooldognft.club/dog/"+d+".png"},null,8,S)]))]))),256))]))])])}var A=v(f,[["render",q],["__scopeId","data-v-4a6024ce"]]);export{A as default};
