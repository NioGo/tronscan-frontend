(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1443:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},3496:function(e,t,n){"use strict";n.r(t);var a=n(1450),r=n.n(a),o=n(114),i=n.n(o),s=n(2),c=n.n(s),d=n(30),p=n(5),l=n(15),u=n(14),b=n(20),m=n(19),w=n(21),h=n(1459),f=n.n(h),g=n(0),y=n.n(g),N=n(29),v=n(18),A=n(10),I=n(92),k=n(16),O=n(23);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}f.a.Search;var T=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(b.a)(this,Object(m.a)(t).call(this))).loadAccounts=Object(p.a)(c.a.mark(function t(){var n,a,r,o,i,s,d,p,l=arguments;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=0<l.length&&void 0!==l[0]?l[0]:1,a=1<l.length&&void 0!==l[1]?l[1]:20,r=e.state,o=r.searchCriteria,i=r.filter,e.setState({loading:!0}),t.next=6,k.b.getUserList(z({search:o,pageSize:a,page:n},i));case 6:s=t.sent,d=s.data,p=s.total,d.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),e.setState({loading:!1,developers:d,total:p,pagination:z({},e.state.pagination,{total:p})});case 11:case"end":return t.stop()}},t)})),e.onChange=function(t,n){e.loadAccounts(t,n)},e.customizedColumn=function(){return e.props.intl,e.state.filter,n(1443),[{title:"ID",dataIndex:"ID",align:"left",width:"5%",render:function(e,t){return y.a.createElement("div",null,t.id)}},{title:"Awards",dataIndex:"awards",key:"awards",align:"left",className:"ant_table",width:"10%",render:function(e,t){return y.a.createElement("div",null,y.a.createElement("div",null,t.awards))}},{title:"Name",dataIndex:"dappName",key:"dappName",align:"center",className:"ant_table",width:"20%",render:function(e,t){return y.a.createElement(O.e,{href:t.websiteHref,target:"_blank",className:"text-muted"},y.a.createElement("span",{style:{wordBreak:"break-all"}},t.dappName))}},{title:"Introduction",dataIndex:"Introduction",key:"Introduction",align:"center",className:"ant_table",render:function(e,t){return y.a.createElement("div",null,y.a.createElement(i.a,{title:t.Introduction},y.a.createElement("div",{style:{width:"600px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},t.Introduction)))}},{title:"Bonus(USDT)",dataIndex:"bonus",key:"bonus",align:"right",className:"ant_table",render:function(e,t){return y.a.createElement(A.c,{value:t.bonus})}}]},e.state={modal:null,loading:!1,searchString:"",developers:[{id:1,awards:"First Prize",dappName:"BestDApp",website:"bestd.app",websiteHref:"http://bestd.app",Introduction:"Best.dapp is a decentralized game platform based on the blockchain technology, with fairness, equality, transparency, openness and complete anonymousness.",bonus:"5000"},{id:2,awards:"First Prize",dappName:"Lottery",website:"tronlott.me",websiteHref:"http://tronlott.me",Introduction:"TRON-Lottery is the first lottery game on sunnetwork. It is based on smart contracts and is completely fair. It also supports mining, dividends and other operations. Welcome to play.",bonus:"5000"},{id:3,awards:"First Prize",dappName:"DApp1st",website:"dapp1st.co",websiteHref:"http://dapp1st.co",Introduction:"Dapp1st is a classic dice game on the blockchain.It is based on smart contracts, completely open source, and completely fair.",bonus:"5000"},{id:4,awards:"Second Prize",dappName:"TRONSix",website:"tronsix.com",websiteHref:"http://tronsix.com",Introduction:"TRONSix is a dice game that we run on the TRON sidechain. The underlying layer is based on the TRON VM's smart contract. Fair, open source, and fair.",bonus:"3000"},{id:5,awards:"Second Prize",dappName:"Tron-Racer",website:"arinatycoon.com/tron-racer",websiteHref:"http://arinatycoon.com/tron-racer",Introduction:"-",bonus:"3000"},{id:6,awards:"Second Prize",dappName:"Cryptucky",website:"cryptuckyderby.com",websiteHref:"http://www.cryptuckyderby.com",Introduction:"-",bonus:"3000"},{id:7,awards:"Second Prize",dappName:"cryptoidols",website:"arinahunters.com/cryptoidols",websiteHref:"https://www.arinahunters.com/cryptoidols",Introduction:"\u672c\u6e38\u620f\u4e3aA.I.\u7f8e\u5c11\u5973\u5361\u724c\u533a\u5757\u94fe\u6e38\u620f,\n            \u73a9\u5bb6\u4e3a\u5076\u50cf\u4e8b\u52a1\u6240\u7684\u7ecf\u7eaa\u4eba,\n            \u900f\u8fc7\u62db\u52df\u7f8e\u5c11\u5973\u5076\u50cf(721 TOKEN),\n            \u5e76\u4e14\u57f9\u80b2\u517b\u6210\u6bcf\u4f4d\u5076\u50cf,\n            \u8ba9\u7f8e\u5c11\u5973\u5076\u50cf\u4e0a\u4f4d,\n            \u8d5a\u53d6\u5927\u91cf\u8d22\u5bcc\u53ca\u5b9d\u77f3.\n            \n            \u73a9\u5bb6\u4e5f\u53ef\u900f\u8fc7\u5361\u724c\u878d\u5408,\n            \u5feb\u901f\u63d0\u5347\u5076\u50cf\u7684\u5b9e\u529b,\n            \u672a\u6765\u6e38\u620f\u4f1a\u89e3\u9501\u66f4\u591a\u73a9\u6cd5,\n            \u8ba9\u5076\u50cf\u6d3b\u52a8\u66f4\u52a0\u591a\u5143.\n            \n            \u53e6\u5916\u672c\u6e38\u620f\u672a\u6765\u7684\u66f4\u65b0\u5c06\u5229\u7528\u667a\u80fd\u5408\u7ea6,\n            \u521b\u9020\u51fa\u767e\u4ebf\u865a\u62df\u7c89\u4e1d(TRC-721),\n            \u6bcf\u4f4d\u865a\u62df\u7c89\u4e1d\u90fd\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u5b58\u5728,\n            \u4f1a\u62e5\u6709\u6e38\u620f\u4e2d\u7684\u8d27\u5e01\u53ca\u7269\u54c1,\n            \u73a9\u5bb6\u53ef\u4ee5\u900f\u8fc7\u6e38\u620f\u83b7\u53d6\u7c89\u4e1d\u7684\u5173\u6ce8,\n            \u5e76\u4e14\u900f\u8fc7\u548c\u865a\u62df\u7c89\u4e1d\u4e92\u52a8,\n            \u83b7\u5f97\u7c89\u4e1d\u7684\u793c\u7269,\n            \u5e76\u53ef\u900f\u8fc7\u5b8c\u6210\u4efb\u52a1\u83b7\u5f97\u8d22\u5bcc,\n            \u8ba9\u4f60\u7684\u7f8e\u5c11\u5973\u5076\u50cf\u767b\u4e0a\u98a0\u5cf0.",bonus:"3000"},{id:8,awards:"Second Prize",dappName:"TRON Win",website:"tronwin.cc",websiteHref:"http://tronwin.cc",Introduction:"TRONWin wants to become the BIGGEST and BEST online gambling platform on TRON.  We've developed lots of DApps on different blockchain before. Mine is our first try, lots of more is coming. Have fun!",bonus:"3000"},{id:9,awards:"Second Prize",dappName:"SpayFall",website:"dappz.cc",websiteHref:"http://dappz.cc",Introduction:"SpyFall aims to become a new standard dice game run on the SUN Network.",bonus:"3000"},{id:10,awards:"Third Prize",dappName:"pockernumber",website:"tronbet.fun",websiteHref:"https://tronbet.fun",Introduction:"PokerNumber is a puzzle poker game. Players can earn high returns by investing in corresponding projects.",bonus:"1000"},{id:11,awards:"Third Prize",dappName:"sunnetwork-maze",website:"sunnetwork-maze.com",websiteHref:"http://sunnetwork-maze.com",Introduction:"-",bonus:"1000"},{id:12,awards:"Third Prize",dappName:"Poker",website:"tronpk.com",websiteHref:"http://tronpk.com",Introduction:"TRON Poker is a decentralized, fair, transparent, and open game platform based on blockchain technology.It has launched a variety of blockchain games based on TRON smart contracts worldwide. The platform uses blockchain technology to provide completely fair game rules, automated revenue distribution, complete protection of player privacy, and all traceable transaction records.",bonus:"1000"},{id:13,awards:"Third Prize",dappName:"ChineseZodiac",website:"tronad.cc",websiteHref:"http://tronad.cc",Introduction:"Welcome to ChineseZodiac. The Sun Network Gaming Center.",bonus:"1000"},{id:14,awards:"Third Prize",dappName:"CoinFlip",website:"troncool.com",websiteHref:"http://troncool.com",Introduction:"Choose coin side to win the future",bonus:"1000"},{id:15,awards:"Third Prize",dappName:"OneDice",website:"51bf.me",websiteHref:"http://51bf.me",Introduction:"OneDice wants to become the BIGGEST and BEST online gambling platform on #TRX blockchain.",bonus:"1000"},{id:16,awards:"Third Prize",dappName:"ThreeColor",website:"dappad.cc",websiteHref:"http://dappad.cc",Introduction:"ThreeColor it\u2019s a platform for decentralized games where everyone can make a real profit through games",bonus:"1000"},{id:17,awards:"Third Prize",dappName:"Energy",website:"abet.fun",websiteHref:"https://abet.fun",Introduction:"Energy is a Tron smart contract for placing bets on our provably-fair dice game using TRX with no deposits or sign-ups.",bonus:"1000"},{id:18,awards:"Third Prize",dappName:"ZodiacSigns",website:"tronfun.cc",websiteHref:"http://tronfun.cc",Introduction:"Welcome to ZodiacSigns. The Sun Network Gaming Center",bonus:"1000"},{id:19,awards:"Third Prize",dappName:"PokerSuit",website:"trondice.xyz",websiteHref:"https://trondice.xyz",Introduction:"PokerSuit is a decentralized gambling site that utilizes the official Sun Network oracle for provably fair games.",bonus:"1000"},{id:20,awards:"Third Prize",dappName:"betNow!",website:"trxbet.cc",websiteHref:"http://trxbet.cc",Introduction:"BetNow is completely developed based on TRON smart contract, fair and open and safe. A series of gameplay such as mining dividends will be launched in the future.",bonus:"1000"},{id:21,awards:"Third Prize",dappName:"Be Fun",website:"befun.pw",websiteHref:"http://befun.pw",Introduction:"-",bonus:"1000"},{id:22,awards:"Participation Award",dappName:"HumanSenses",website:"solarbet.xyz",websiteHref:"https://solarbet.xyz",Introduction:"-",bonus:"250"},{id:23,awards:"Participation Award",dappName:"pangu",website:"pangu.trade",websiteHref:"http://pangu.trade",Introduction:"Decentralized exchange based on TRON & SUN DAppChain",bonus:"250"},{id:24,awards:"Participation Award",dappName:"Wild Universe",website:"wilduniverse.co",websiteHref:"http://wilduniverse.co",Introduction:"Life simulation game about pets based on SUN DAppChain.",bonus:"250"},{id:25,awards:"Participation Award",dappName:"G Connect",website:"gconnect.io",websiteHref:"http://gconnect.io",Introduction:"Payment solutions for gaming industry. First solution is donation service for gamers based on TRON Network. Second is cryptocurrency wallet for iOS & Android.",bonus:"250"}],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0}},e}return Object(w.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.match,e.intl,this.state),n=(t.total,t.loading),a=(t.rangeTotal,t.developers),o=t.modal,i=this.customizedColumn();return y.a.createElement("main",{className:"container header-overlap pb-3 token_black"},o,n&&y.a.createElement("div",{className:"loading-style"},y.a.createElement(I.b,null)),y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12"},y.a.createElement("div",{className:"card table_pos table_pos_addr"},y.a.createElement(r.a,{columns:i,rowKey:function(e,t){return t},dataSource:a,loading:n,pagination:this.state.pagination,bordered:!0})))))}}]),t}(g.Component),P={loadAccounts:v.r};t.default=Object(N.connect)(function(e){return{accounts:e.app.accounts}},P)(Object(A.h)(T))}}]);