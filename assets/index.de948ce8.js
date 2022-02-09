import{r as m,a as x,o as p,c as u,b as e,d as D,e as I,F as g,W as O,g as y,T as k,f as M,S as b,w as f,v as h,t as C,p as R,h as N,i as d,j as G,k as L,l as P,m as z}from"./vendor.2d6cccc4.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};H();var U="/assets/logo.fdb77e92.png",F="/assets/discord.78efb32e.png",K="/assets/twitter.632900a2.png";var v=(s,t)=>{for(const[r,n]of t)s[r]=n;return s};const V={name:"CoolDog",setup(){return{is_sidebar:m(!1)}},methods:{w3_close(){this.is_sidebar=!this.is_sidebar}}},j={key:0,class:"w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"},B=e("a",{href:"/",onclick:"w3_close()",class:"w3-bar-item w3-button"}," HOME ",-1),W={class:"w3-bar w3-card"},$={class:"w3-container"},X=e("a",{href:"/"},[e("img",{class:"logo",src:U})],-1),q=e("div",{class:"w3-right w3-hide-small"},[e("a",{href:"/#giveaways",class:"w3-bar-item w3-text-white"},"GIVEAWAYS"),e("a",{href:"/#rarity",class:"w3-bar-item w3-text-white"}," RARITY"),e("a",{href:"/#roadmap",class:"w3-bar-item w3-text-white"},"ROADMAP"),e("a",{href:"/#faq",class:"w3-bar-item w3-text-white"},"FAQ"),e("a",{href:"https://discord.gg/KJvaVzUpBt",class:"w3-bar-item w3-text-white w3-xlarge"},[e("img",{class:"icon",src:F})]),e("a",{href:"https://twitter.com/cooldognft",class:"w3-bar-item w3-text-white w3-xlarge"},[e("img",{class:"icon",src:K})])],-1),Y={class:"w3-right"},Q=e("i",{class:"fa fa-bars w3-xlarge w3-text-white"},null,-1),J=[Q],Z=e("footer",{class:"w3-center w3-black w3-padding-16"},[e("p",null,"CoolDog Club")],-1);function ee(s,t,r,n,i,o){const a=x("router-view");return p(),u(g,null,[n.is_sidebar?(p(),u("nav",j,[B,e("a",{href:"/#giveaways",onClick:t[0]||(t[0]=c=>o.w3_close()),class:"w3-bar-item w3-button"},"GIVEAWAYS"),e("a",{href:"/#rarity",onClick:t[1]||(t[1]=c=>o.w3_close()),class:"w3-bar-item w3-button"},"RARITY"),e("a",{href:"/#roadmap",onClick:t[2]||(t[2]=c=>o.w3_close()),class:"w3-bar-item w3-button"},"ROADMAP"),e("a",{href:"/#faq",onClick:t[3]||(t[3]=c=>o.w3_close()),class:"w3-bar-item w3-button"},"FAQ")])):D("",!0),e("div",W,[e("div",$,[X,q,e("div",Y,[e("a",{href:"javascript:void(0)",class:"w3-bar-item w3-hide-large w3-hide-medium",onClick:t[4]||(t[4]=c=>n.is_sidebar=!n.is_sidebar)},J)])])]),I(a,{key:s.$route.fullPath}),Z],64)}var te=v(V,[["render",ee]]);const ne="modulepreload",T={},se="/",S=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${se}${n}`,n in T)return;T[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":ne,i||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),i)return new Promise((c,A)=>{a.addEventListener("load",c),a.addEventListener("error",A)})})).then(()=>t())};var ae=[{inputs:[{internalType:"string",name:"baseURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_COOLDOGS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"num",type:"uint256"}],name:"adopt",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"give",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"val",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}];let w=window.web3;w=new O("https://mainnet.infura.io/v3/4c0c1a236e7143d196c166f143f261e9");const E="0x495E973F3E17353D06E97CA41eD745dD6499E734",_=new w.eth.Contract(ae,E);function oe(){const{ethereum:s}=window;return Boolean(s&&s.isMetaMask)}async function ie(s,t,r){let n=w.utils.toWei(t.toString()),i=await w.eth.getTransactionCount(s,"pending"),o=await _.methods.adopt(r),a=[{nonce:i.toString(),from:s,to:E,gas:"0x3D0900",value:w.utils.toHex(n),data:o.encodeABI()}];console.log("req:",a),window.ethereum.request({method:"eth_sendTransaction",params:a}).then(c=>{console.log(c)}).catch(c=>{console.log(c)})}async function re(){console.log("connect");try{await window.ethereum.request({method:"eth_requestAccounts"}),window.location.href="/"}catch(s){s.code===-32002?alert("Request was sent.Please finish metamask connection from your metamask browser extension."):console.error(s)}}async function le(){console.log("Get current price");try{console.log(_);let s=await _.methods.price().call();return console.log(s),w.utils.fromWei(s,"ether")}catch(s){console.log(s)}}async function ot(s){console.log("wallet of owner");try{let t=await _.methods.walletOfOwner(s).call();return console.log(t),t}catch(t){console.log(t)}}var de="/assets/intro.ebe7a6c1.gif",ce="/assets/dog.dba4fd4a.png",pe="/assets/howcool.01be43e9.png",ue="/assets/cost.f6a1afd7.png",me="/assets/dog1.35bf9e70.png",we="/assets/dog2.4eeaaae7.png",ye="/assets/dog3.dc38f603.png",_e="/assets/dog4.881e6c55.png",ge="/assets/dog5.566ecab5.png",be="/assets/dog6.4061bec9.png",fe="/assets/dog7.e202975c.png",he="/assets/dog8.f20aa129.png",ve="/assets/t1.bfa43521.png",Te="/assets/t2.cb8a82b9.png",Se="/assets/t3.830dd005.png",Ee="/assets/t4.8284ebc7.png";const Ae={setup(){const s=m(5),t=m(oe());y.registerPlugin(k);const r=m(-1),n=m(0);return M(async()=>{r.value=await le(),n.value=s.value*r.value}),{adopt:ie,connect_metamask:re,is_metamask:t,buycount:s,price:r,payamount:n,address:m("")}},computed(){},mounted(){this.$nextTick(function(){this._text_animate(),this.address=window.ethereum.selectedAddress})},methods:{_text_animate(){var s=["Stylish","Adorable","Mysterious"];y.fromTo(".cursor",{autoAlpha:0},{autoAlpha:1,duration:1,repeat:-1,ease:b.config(3)});var t=y.timeline({ease:b.config(30),opacity:0,repeat:-1}),r=".typewriter-text",n={opacity:1,yoyo:!0,repeat:1,repeatDelay:3};s.forEach(function(i){let o=Object.assign({text:i},n);t.add(y.to(r,o))})},input_change(s){console.log("change"),this.buycount>20&&(this.buycount=20),this.buycount<1&&(this.buycount=1),this.payamount=this.price*this.buycount}}},l=s=>(R("data-v-12d35ff0"),s=s(),N(),s),xe={class:"w3-display-container",id:"home"},De={class:"w3-container"},Ie=l(()=>e("div",{class:"intro w3-row w3-center"},[e("h4",{class:"w3-text-orange"},[d(" Contract: "),e("a",{href:"https://etherscan.io/address/0x495E973F3E17353D06E97CA41eD745dD6499E734"},[e("div",{class:"w3-center truncate"},"0x495E973F3E17353D06E97CA41eD745dD6499E734")])])],-1)),Oe=l(()=>e("div",{class:"intro w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("h1",{class:"welcome w3-text-white"},[d("Welcome To "),e("br"),d("CoolDog")]),e("p",null,[e("span",{class:"typewriter-text"}),e("span",{class:"cursor"},"|")]),e("h4",{class:"w3-text-white"},[d(" 9,999 randomly generated NFT on Ethereum blockchain, created to love you unconditionally. "),e("br"),d(" Sale open at 02/09/2022. ")])]),e("div",{class:"w3-col m6 l6 s12 w3-hide-small introimg"},[e("img",{src:de})])],-1)),ke={class:"mint w3-row w3-center"},Me={key:0,class:"w3-padding-32"},Ce=d("x "),Re=l(()=>e("button",{class:"mybtn"},[e("img",{class:"myimg",src:ce})],-1)),Ne=d(" = "),Ge=l(()=>e("b",null,"\u039E",-1)),Le={key:1},Pe=l(()=>e("br",null,null,-1)),ze=l(()=>e("div",{class:"w3-display-container",id:"giveaways"},[e("div",{class:"w3-container w3-padding-32 w3-center"},[e("h1",null,"Join Our Community"),e("p",null,[d(" To discovery over "),e("span",{class:"w3-text-purple"},"19,000,000"),d(" different CoolDog combinations. "),e("br"),d("We have giveaways and events till minting starts! ")]),e("button",{onclick:"location.href='https://discord.gg/bQ2fgbaz'"}," Discord "),e("button",{onclick:"location.href='https://twitter.com/cooldognft'"}," Twitter ")])],-1)),He=l(()=>e("div",{class:"w3-display-container",id:"rarity"},[e("div",{class:"w3-container w3-padding-32"},[e("div",{class:"w3-row"},[e("div",{class:"w3-col m12 l12 s12"},[e("h1",null,"How cool is my Dog?"),e("p",null," All dogs are cool! But how rare is your dog? With over 19 million different combination, a point system is put in place to determine the rarity based on the items your CoolDog is made up of. Each dog is scored between 4 and 20 points. ")])]),e("div",{class:"w3-row"},[e("div",{class:"w3-col m12 l12 s12"},[e("img",{src:pe})])])])],-1)),Ue={class:"w3-display-container",id:"cost"},Fe={class:"w3-container w3-padding-32"},Ke={class:"w3-row"},Ve=l(()=>e("div",{class:"w3-col m6 l6 s12"},[e("img",{class:"w3-hide-small",src:ue})],-1)),je={class:"w3-col m6 l6 s12"},Be=l(()=>e("h1",null,"How much to they cost to mint?",-1)),We=l(()=>e("p",null," With 95% of the CoolDogs priced under 0.1 ETH. A total of 9,999 unique CoolDogs will be minted. ",-1)),$e=l(()=>e("p",{class:"w3-text-red"},[e("b",null,"200 CoolDogs Giveaways!")],-1)),Xe={class:"w3-text-red"},qe=G("<p data-v-12d35ff0><b data-v-12d35ff0>#0 - #499</b> : 0.02 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#500 - #1499</b>: 0.04 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#1500 - #3499</b>: 0.06 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#3500 - #7499</b>: 0.08 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#7500 - #9499</b>: 0.10 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#9500 - #9899</b>: 0.14 \u039E + gas<br data-v-12d35ff0><b data-v-12d35ff0>#9900 - #9999</b>: 0.18 \u039E + gas<br data-v-12d35ff0></p>",1),Ye=l(()=>e("div",{class:"w3-display-container",id:"cooldogs"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-padding-16"},"COLLECTION"),e("div",{class:"w3-row-padding"},[e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:me})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:we})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:ye})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:_e})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:ge})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:be})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:fe})])]),e("div",{class:"w3-col l3 m6 s6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:he})])])])])],-1)),Qe=l(()=>e("div",{class:"w3-display-container",id:"roadmap"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-center"},"Roadmap"),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"Build Community"),e("p",null,"GiveAway!"),e("p",null,"Raffle Lottery"),e("p",null,"Invitation Rewards!")])]),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"Presale"),e("p",null,"GiveAway!"),e("p",null,"Raffle Lottery"),e("p",null,"Invitation Rewards!")])]),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"10% Sold"),e("p",null,"GiveAway!"),e("p",null,"Trade on OpenSea"),e("p",null,"Invitation Rewards!")])]),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"50% Sold"),e("p",null,"GiveAway!"),e("p",null,"Raffle Lottery"),e("p",null,"Invitation Rewards!")])]),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"100% Sold"),e("p",null,[d(" Donate "),e("span",{class:"w3-xlarge w3-text-cyan"},"$30,000"),d(" to "),e("a",{style:{"text-decoration":"underline",color:"yellow"},href:"https://www.aspca.org"},"ASPCA")]),e("p",null,"Start issue ERC20 tokens"),e("p",null,"Start Gen2 dogs NFT creation")])]),e("div",{class:"w3-col l4 m4 s12"},[e("div",{class:"w3-display-container w3-card w3-center w3-margin w3-padding-32"},[e("h3",{class:""},"OpenSea Top 10"),e("p",null,"Free ETH Airdrop everyday"),e("p",null,"Gen 2 Dogs launch"),e("p",null,"Buy Club Real Estate Property!")])])])],-1)),Je=l(()=>e("div",{class:"w3-display-container",id:"faq"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",null,"FAQ"),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," What\u2019s an NFT? how can I get started? "),e("div",{class:"answer w3-container"},[e("p",null," An NFT stands for \u201CNon-fungible token\u201D and is a fancy way of saying it\u2019s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a \u201Cmembers\u201D card. "),e("p",null," Get a Metamask chrome extension.https://metamask.io/ Load it with ETH through services that allow you to change your money to ETH like Coinbase Pro or Paypal. Finally, click the button on the Sticky banner and approve the transaction on Metamask. Voila! ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"Are CoolDogs a good investment?"),e("div",{class:"answer w3-container"},[e("p",null," Well, first of all, CoolDogs are not Mona Lisas so... it depends. Use your own judgment. Dogs do have a bonding curve but please don\u2019t spend your food money on this. Not financial advice. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"What can I do with my CoolDogs?"),e("div",{class:"answer w3-container"},[e("p",null," You are free to do anything with them under a non-exclusive license. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," This sounds awesome, how do I get involved? "),e("div",{class:"answer w3-container"},[e("p",null," Head over to the Discord, jump in on the conversation and let us know your ideas! ")])])])],-1)),Ze=l(()=>e("div",{class:"w3-display-container",id:"team"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-padding-16"},"Teams"),e("div",{class:"w3-row-padding"},[e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:ve}),e("h3",null,"David"),e("p",{class:"w3-opacity"},"Tech. Guru")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:Te}),e("h3",null,"Zion"),e("p",{class:"w3-opacity"},"Block Chain Expert")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:Se}),e("h3",null,"Gabriel"),e("p",{class:"w3-opacity"},"Marketing Specialist")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:Ee}),e("h3",null,"Lee"),e("p",{class:"w3-opacity"},"Artist")])])])])],-1));function et(s,t,r,n,i,o){return p(),u(g,null,[e("div",xe,[e("div",De,[Ie,Oe,e("div",ke,[n.address?(p(),u("h1",Me,[e("div",null,[f(e("input",{class:"i-count",type:"number",min:"1",max:"20","onUpdate:modelValue":t[0]||(t[0]=a=>n.buycount=a),onChange:t[1]||(t[1]=(...a)=>o.input_change&&o.input_change(...a)),onKeyup:t[2]||(t[2]=(...a)=>o.input_change&&o.input_change(...a))},null,544),[[h,n.buycount]]),Ce,Re,Ne,f(e("input",{readonly:"",class:"i-amount",type:"number","onUpdate:modelValue":t[3]||(t[3]=a=>n.payamount=a)},null,512),[[h,n.payamount]]),Ge]),e("button",{onClick:t[4]||(t[4]=a=>s.$router.push("/my")),class:"btn-mydogs"}," My Dogs "),e("button",{onClick:t[5]||(t[5]=a=>n.adopt(n.address,n.payamount,n.buycount)),class:"btn-mint"}," MINT! ")])):(p(),u("h1",Le,[Pe,n.is_metamask?(p(),u("button",{key:0,onClick:t[6]||(t[6]=a=>n.connect_metamask()),class:"btn-mint"}," CONNECT METAMASK ")):(p(),u("button",{key:1,onClick:t[7]||(t[7]=a=>s.install_metamask()),class:"btn-mint"}," INSTALL METAMASK "))]))])])]),ze,He,e("div",Ue,[e("div",Fe,[e("div",Ke,[Ve,e("div",je,[Be,We,$e,e("p",Xe,[e("b",null,"Current Price: "+C(n.price)+" \u039E",1)]),qe])])])]),Ye,Qe,Je,Ze],64)}var tt=v(Ae,[["render",et],["__scopeId","data-v-12d35ff0"]]);const nt=[{path:"/",name:"Home",component:tt},{path:"/mint",name:"Mint",component:()=>S(()=>import("./Mint.0f9a2012.js"),["assets/Mint.0f9a2012.js","assets/Mint.0962c18a.css","assets/vendor.2d6cccc4.js"])},{path:"/my",name:"My",component:()=>S(()=>import("./My.90dbcff0.js"),["assets/My.90dbcff0.js","assets/My.14590f3e.css","assets/vendor.2d6cccc4.js"])}],st=L({history:P({USER:"dawson",npm_config_user_agent:"npm/7.20.3 node/v16.6.2 linux x64 workspaces/false",XDG_SEAT:"seat0",XDG_SESSION_TYPE:"x11",SSH_AGENT_PID:"2636",GIT_ASKPASS:"/usr/share/code/resources/app/extensions/git/dist/askpass.sh",npm_node_execpath:"/usr/local/bin/node",SHLVL:"2",npm_config_noproxy:"",QT4_IM_MODULE:"ibus",HOME:"/home/dawson",CHROME_DESKTOP:"code-url-handler.desktop",OLDPWD:"/home/dawson/cooldog",LESS:"-R",DESKTOP_SESSION:"i3",TERM_PROGRAM_VERSION:"1.63.2",npm_package_json:"/home/dawson/cooldog/web/package.json",ZSH:"/home/dawson/.oh-my-zsh",LSCOLORS:"Gxfxcxdxbxegedabagacad",GTK_MODULES:"gail:atk-bridge",PAGER:"less",APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL:"true",VSCODE_GIT_ASKPASS_MAIN:"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"/usr/share/code/code",npm_config_userconfig:"/home/dawson/.npmrc",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",P9K_TTY:"old",COLORTERM:"truecolor",COLOR:"1",npm_config_metrics_registry:"https://registry.npmjs.org/",MANDATORY_PATH:"/usr/share/gconf/i3.mandatory.path",GTK_IM_MODULE:"ibus",LOGNAME:"dawson",_:"/home/dawson/cooldog/web/./deploy.sh",npm_config_prefix:"/usr/local",XDG_SESSION_CLASS:"user",DEFAULTS_PATH:"/usr/share/gconf/i3.default.path",USERNAME:"dawson",XDG_SESSION_ID:"2",TERM:"xterm-256color",npm_config_target_os:"android",npm_config_cache:"/home/dawson/.npm",WINDOWPATH:"2",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/cooldog/node_modules/.bin:/home/dawson/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/bin:/usr/local/bin:/home/dawson/bin:/usr/local/bin:/home/dawson/.local/share/solana/install/active_release/bin:/home/dawson/Android/Sdk/platform-tools:/home/dawson/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/dawson/ops/bin:/home/dawson/.local/bin:robo3t/bin:/home/dawson/ops/bin:/home/dawson/.local/bin:robo3t/bin",NODE:"/usr/local/bin/node",npm_package_name:"cooldogs",XDG_RUNTIME_DIR:"/run/user/1000",GDK_BACKEND:"x11",GNOME_TERMINAL_SCREEN:"/org/gnome/Terminal/screen/eeaff8b9_69dc_4bcc_b7a0_f702373d0e0a",DISPLAY:":1",LANG:"en_US.UTF-8",XDG_CURRENT_DESKTOP:"i3",XMODIFIERS:"@im=ibus",XDG_SESSION_DESKTOP:"i3",XAUTHORITY:"/run/user/1000/gdm/Xauthority",GNOME_TERMINAL_SERVICE:":1.1065",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",TERM_PROGRAM:"vscode",VSCODE_GIT_IPC_HANDLE:"/run/user/1000/vscode-git-c9b771edcd.sock",npm_lifecycle_script:'vite "build"',SSH_AUTH_SOCK:"/tmp/ssh-yJT9Ukpsw1M2/agent.2570",ORIGINAL_XDG_CURRENT_DESKTOP:"i3",SHELL:"/bin/zsh",npm_package_version:"0.0.0",npm_lifecycle_event:"npx",QT_ACCESSIBILITY:"1",GDMSESSION:"i3",NO_AT_BRIDGE:"1",GPG_AGENT_INFO:"/run/user/1000/gnupg/S.gpg-agent:0:1",P9K_SSH:"0",QT_IM_MODULE:"ibus",XDG_VTNR:"2",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",npm_config_globalconfig:"/usr/local/etc/npmrc",npm_config_init_module:"/home/dawson/.npm-init.js",PWD:"/home/dawson/cooldog/web",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npx-cli.js",XDG_CONFIG_DIRS:"/etc/xdg/xdg-i3:/etc/xdg",CLUTTER_IM_MODULE:"ibus",XDG_DATA_DIRS:"/usr/share/i3:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",_P9K_TTY:"/dev/pts/5",npm_command:"exec",I3SOCK:"/run/user/1000/i3/ipc-socket.2570",BREAKPAD_DUMP_LOCATION:"/home/dawson/.config/Code/exthost Crash Reports",VTE_VERSION:"6003",EDITOR:"mvim",INIT_CWD:"/home/dawson/cooldog/web",NODE_ENV:"production"}.BASE_URL),routes:nt});z(te).use(st).mount("#app");export{v as _,ot as w};
