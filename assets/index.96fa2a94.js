import{r as b,a as f,o as p,c as u,b as e,d as y,e as S,F as w,g as m,T as E,S as g,p as x,f as D,h as n,i as T,j as O,k as A}from"./vendor.10388e98.js";const I=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}};I();var N="/assets/logo.fdb77e92.png";var _=(t,o)=>{for(const[l,i]of o)t[l]=i;return t};const k={name:"CoolDog",setup(){return{is_sidebar:b(!1)}},methods:{w3_close(){this.is_sidebar=!this.is_sidebar}}},C={key:0,class:"w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"},L=e("a",{href:"/",onclick:"w3_close()",class:"w3-bar-item w3-button w3-xlarge"}," HOME ",-1),R={class:"w3-bar w3-card"},M={class:"w3-container"},z=e("img",{class:"logo w3-bar-item",src:N},null,-1),G=e("div",{class:"w3-right w3-hide-small"},[e("a",{href:"#giveaways",class:"w3-bar-item w3-text-white w3-xlarge"},"GIVEAWAYS"),e("a",{href:"#rarity",class:"w3-bar-item w3-text-white w3-xlarge"}," RARITY"),e("a",{href:"#roadmap",class:"w3-bar-item w3-text-white w3-xlarge"},"ROADMAP"),e("a",{href:"#faq",class:"w3-bar-item w3-text-white w3-xlarge"},"FAQ")],-1),P={class:"w3-right"},H=e("i",{class:"fa fa-bars w3-xlarge w3-text-white"},null,-1),$=[H],U=e("footer",{class:"w3-center w3-black w3-padding-16"},[e("p",null,"CoolDog Club")],-1);function F(t,o,l,i,s,a){const r=f("router-view");return p(),u(w,null,[i.is_sidebar?(p(),u("nav",C,[L,e("a",{href:"#giveaways",onClick:o[0]||(o[0]=d=>a.w3_close()),class:"w3-bar-item w3-button"},"GIVEAWAYS"),e("a",{href:"#rarity",onClick:o[1]||(o[1]=d=>a.w3_close()),class:"w3-bar-item w3-button"},"RARITY"),e("a",{href:"#roadmap",onClick:o[2]||(o[2]=d=>a.w3_close()),class:"w3-bar-item w3-button"},"ROADMAP"),e("a",{href:"#faq",onClick:o[3]||(o[3]=d=>a.w3_close()),class:"w3-bar-item w3-button"},"FAQ")])):y("",!0),e("div",R,[e("div",M,[z,G,e("div",P,[e("a",{href:"javascript:void(0)",class:"w3-bar-item w3-hide-large w3-hide-medium",onClick:o[4]||(o[4]=d=>i.is_sidebar=!i.is_sidebar)},$)])])]),S(r,{key:t.$route.fullPath}),U],64)}var j=_(k,[["render",F]]);const V="modulepreload",h={},q="/",W=function(o,l){return!l||l.length===0?o():Promise.all(l.map(i=>{if(i=`${q}${i}`,i in h)return;h[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":V,s||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),s)return new Promise((d,v)=>{r.addEventListener("load",d),r.addEventListener("error",v)})})).then(()=>o())};var X="/assets/intro.ebe7a6c1.gif",Y="/assets/howcool.992e2097.png",B="/assets/cost.f6a1afd7.png",K="/assets/dog1.35bf9e70.png",Q="/assets/dog2.4eeaaae7.png",J="/assets/dog3.dc38f603.png",Z="/assets/dog4.881e6c55.png",ee="/assets/dog5.566ecab5.png",se="/assets/dog6.4061bec9.png",oe="/assets/dog7.e202975c.png",ae="/assets/dog8.f20aa129.png",ie="/assets/t1.bfa43521.png",ne="/assets/t2.cb8a82b9.png",te="/assets/t3.830dd005.png",re="/assets/t4.8284ebc7.png";const le={setup(){},mounted(){this.$nextTick(function(){m.registerPlugin(E);var t=["Stylish","Adorable","Mysterious"];m.fromTo(".cursor",{autoAlpha:0},{autoAlpha:1,duration:1,repeat:-1,ease:g.config(3)});var o=m.timeline({ease:g.config(15),opacity:0,repeat:-1}),l=".typewriter-text",i={opacity:1,yoyo:!0,repeat:1,repeatDelay:2};t.forEach(function(s){let a=Object.assign({text:s},i);console.log(a),o.add(m.to(l,a))})})},methods:{type(){}}},c=t=>(x("data-v-7e8addaf"),t=t(),D(),t),ce=c(()=>e("div",{class:"w3-display-container",id:"home"},[e("div",{class:"w3-container"},[e("div",{class:"w3-row"},[e("div",{class:"intro-text w3-col m6 l6 s12"},[e("h1",{class:"welcome w3-text-white"},[n("Welcome To "),e("br"),n("CoolDog")]),e("h1",{class:"w3-text-yellow"}),e("p",null,[e("span",{class:"typewriter-text"}),e("span",{class:"cursor"},"|")]),e("h3",{class:"w3-text-white w3-hide-medium"},[n(" 9,999 randomly generated NFT on Ethereum blockchain, created to love you unconditionally. "),e("br"),n(" Sale open at 10/20/2021. ")])]),e("div",{class:"w3-col m6 l6 s12 w3-hide-small"},[e("img",{src:X})])])])],-1)),de=c(()=>e("div",{class:"w3-display-container",id:"giveaways"},[e("div",{class:"w3-container w3-padding-32 w3-center"},[e("h1",null,"Join Our Community"),e("p",null,[n(" To discovery over "),e("span",{class:"w3-text-purple"},"19,000,000"),n(" different CoolDog combinations. "),e("br"),n("We have giveaways and events till minting starts! ")]),e("button",null,"Discord"),e("button",null,"Twitter")])],-1)),me=c(()=>e("div",{class:"w3-display-container",id:"rarity"},[e("div",{class:"w3-container w3-padding-32"},[e("div",{class:"w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("h1",null,"How cool is my Dog?"),e("p",null," All dogs are cool! But how rare is your dog? With over 19 million different combination, a point system is put in place to determine the rarity based on the items your CoolDog is made up of. Each dog is scored between 4 and 20 points. ")]),e("div",{class:"w3-col m6 l6 s12"},[e("img",{src:Y})])])])],-1)),pe=c(()=>e("div",{class:"w3-display-container",id:"cost"},[e("div",{class:"w3-container w3-padding-32"},[e("div",{class:"w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("img",{class:"w3-hide-small",src:B})]),e("div",{class:"w3-col m6 l6 s12"},[e("h1",null,"How much to they cost to mint?"),e("p",null," With 95% of the CoolDogs priced under 0.1 ETH. A total of 9,999 unique CoolDogs will be minted. "),e("p",null,[e("b",null,"#0 - #499"),n(" : Free Giveaways"),e("br"),e("b",null,"#500 - #1499"),n(": 0.04 \u039E + gas"),e("br"),e("b",null,"#1500 - #3499"),n(": 0.06 \u039E + gas"),e("br"),e("b",null,"#3500 - #7499"),n(": 0.08 \u039E + gas"),e("br"),e("b",null,"#7500 - #9499"),n(": 0.10 \u039E + gas"),e("br"),e("b",null,"#9500 - #9899"),n(": 0.14 \u039E + gas"),e("br"),e("b",null,"#9900 - #9999"),n(": 0.18 \u039E + gas"),e("br")])])])])],-1)),ue=c(()=>e("div",{class:"w3-display-container",id:"cooldogs"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-padding-16"},"COLLECTION"),e("div",{class:"w3-row-padding"},[e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:K})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:Q})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:J})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:Z})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:ee})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:se})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:oe})])]),e("div",{class:"w3-col l3 m6 w3-margin-bottom"},[e("div",{class:"dogs w3-display-container"},[e("img",{src:ae})])])])])],-1)),we=c(()=>e("div",{class:"w3-purple w3-display-container",id:"roadmap"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",null,"Roadmap"),e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],-1)),ge=c(()=>e("div",{class:"w3-display-container",id:"faq"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",null,"FAQ"),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," What\u2019s an NFT? how can I get started? "),e("div",{class:"answer w3-container"},[e("p",null," An NFT stands for \u201CNon-fungible token\u201D and is a fancy way of saying it\u2019s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a \u201Cmembers\u201D card. "),e("p",null," Get a Metamask chrome extension.https://metamask.io/ Load it with ETH through services that allow you to change your money to ETH like Coinbase Pro or Paypal. Finally, click the button on the Sticky banner and approve the transaction on Metamask. Voila! ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"Are CoolDogs a good investment?"),e("div",{class:"answer w3-container"},[e("p",null," Well, first of all, CoolDogs are not Mona Lisas so... it depends. Use your own judgment. Dogs do have a bonding curve but please don\u2019t spend your food money on this. Not financial advice. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"What can I do with my CoolDogs?"),e("div",{class:"answer w3-container"},[e("p",null," You are free to do anything with them under a non-exclusive license. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," This sounds awesome, how do I get involved? "),e("div",{class:"answer w3-container"},[e("p",null," Head over to the Discord, jump in on the conversation and let us know your ideas! ")])])])],-1)),_e=c(()=>e("div",{class:"w3-display-container",id:"team"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-padding-16"},"Teams"),e("div",{class:"w3-row-padding"},[e("div",{class:"w3-col l3 m6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:ie}),e("h3",null,"David"),e("p",{class:"w3-opacity"},"Founder")])]),e("div",{class:"w3-col l3 m6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:ne}),e("h3",null,"Zion"),e("p",{class:"w3-opacity"},"Block Chain Expert")])]),e("div",{class:"w3-col l3 m6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:te}),e("h3",null,"Gabriel"),e("p",{class:"w3-opacity"},"Co-Founder")])]),e("div",{class:"w3-col l3 m6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:re}),e("h3",null,"Lee"),e("p",{class:"w3-opacity"},"Artist")])])])])],-1));function he(t,o,l,i,s,a){return p(),u(w,null,[ce,de,me,pe,ue,we,ge,_e],64)}var ve=_(le,[["render",he],["__scopeId","data-v-7e8addaf"]]);const be=[{path:"/",name:"Home",component:ve},{path:"/mint",name:"Mint",component:()=>W(()=>import("./Mint.079a4062.js"),["assets/Mint.079a4062.js","assets/Mint.dcc04b7d.css","assets/vendor.10388e98.js"])}],fe=T({history:O({LESSOPEN:"| /usr/bin/lesspipe %s",USER:"dawson",npm_config_user_agent:"npm/7.20.3 node/v16.6.2 linux x64 workspaces/false",XDG_SEAT:"seat0",SSH_AGENT_PID:"2268",XDG_SESSION_TYPE:"x11",npm_node_execpath:"/usr/local/bin/node",SHLVL:"2",npm_config_noproxy:"",QT4_IM_MODULE:"ibus",HOME:"/home/dawson",OLDPWD:"/home/dawson/cooldog",DESKTOP_SESSION:"i3",npm_package_json:"/home/dawson/cooldog/web/package.json",GTK_MODULES:"gail:atk-bridge",npm_config_userconfig:"/home/dawson/.npmrc",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",COLORTERM:"truecolor",COLOR:"1",NVM_DIR:"/home/dawson/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",MANDATORY_PATH:"/usr/share/gconf/i3.mandatory.path",GTK_IM_MODULE:"ibus",LOGNAME:"dawson",_:"/usr/local/bin/npx",npm_config_prefix:"/usr/local",XDG_SESSION_CLASS:"user",DEFAULTS_PATH:"/usr/share/gconf/i3.default.path",USERNAME:"dawson",TERM:"xterm-256color",XDG_SESSION_ID:"2",npm_config_target_os:"android",npm_config_cache:"/home/dawson/.npm",WINDOWPATH:"2",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/cooldog/node_modules/.bin:/home/dawson/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/gems/bin:/home/dawson/miniconda3/bin:/home/dawson/bin:/home/dawson/.local/share/solana/install/active_release/bin:/home/dawson/Android/Sdk/platform-tools:/home/dawson/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/dawson/ops/bin:/home/dawson/.local/bin:robo3t/bin",NODE:"/usr/local/bin/node",npm_package_name:"cooldogs",GNOME_TERMINAL_SCREEN:"/org/gnome/Terminal/screen/02280f03_9435_4aff_b5b5_f06a95962787",XDG_RUNTIME_DIR:"/run/user/1000",DISPLAY:":1",LANG:"en_US.UTF-8",XDG_CURRENT_DESKTOP:"i3",XMODIFIERS:"@im=ibus",XDG_SESSION_DESKTOP:"i3",XAUTHORITY:"/run/user/1000/gdm/Xauthority",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",GNOME_TERMINAL_SERVICE:":1.2878",npm_lifecycle_script:'vite "build"',SSH_AUTH_SOCK:"/tmp/ssh-HI9xs9bU3oau/agent.2202",SHELL:"/bin/bash",npm_package_version:"0.0.0",npm_lifecycle_event:"npx",QT_ACCESSIBILITY:"1",GDMSESSION:"i3",GEM_HOME:"/home/dawson/gems",LESSCLOSE:"/usr/bin/lesspipe %s %s",GPG_AGENT_INFO:"/run/user/1000/gnupg/S.gpg-agent:0:1",QT_IM_MODULE:"ibus",XDG_VTNR:"2",npm_config_globalconfig:"/usr/local/etc/npmrc",npm_config_init_module:"/home/dawson/.npm-init.js",PWD:"/home/dawson/cooldog/web",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npx-cli.js",XDG_CONFIG_DIRS:"/etc/xdg/xdg-i3:/etc/xdg",CLUTTER_IM_MODULE:"ibus",NVM_CD_FLAGS:"",XDG_DATA_DIRS:"/usr/share/i3:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",PYTHONPATH:":/usr/lib/python3/dist-packages",npm_command:"exec",I3SOCK:"/run/user/1000/i3/ipc-socket.2202",VTE_VERSION:"6003",NVM_RC_VERSION:"",INIT_CWD:"/home/dawson/cooldog/web",EDITOR:"vi",NODE_ENV:"production"}.BASE_URL),routes:be});A(j).use(fe).mount("#app");export{_};
