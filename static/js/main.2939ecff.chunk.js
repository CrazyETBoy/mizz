(this.webpackJsonpmizz=this.webpackJsonpmizz||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"week":"6","name":"\u8c50\u4ed8\u5bf6","bank":"TFB","payMethod":"QR","discountMethod":"C","miniReq":60,"moneyLow":1,"moneyHigh":60,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","startDate":"2020-04-01","endDate":"2020-12-31"},{"week":"1234567","name":"\u96f2\u9583\u4ed8\uff08\u5927\u8c50\uff09","bank":"TFB","payMethod":"QR","discountMethod":"P","miniReq":50,"percent":0.05,"moneyMax":100,"remark":"\u4fe1\u7528\u5361\u56de\u8d08","endDate":"2020-12-31"},{"week":"1234567","name":"\u96f2\u9583\u4ed8\uff08\u4e2d\u9280\u5927\u7063\u5340\u5361\uff09","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":20,"moneyLow":5,"moneyHigh":5,"remark":"\u4fe1\u7528\u5361\u56de\u8d08","endDate":"2020-06-30"},{"week":"5","name":"\u667a\u6167\u4ed8BOC","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":50,"moneyLow":1,"moneyHigh":50,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","endDate":"2021-01-01"},{"week":"123467","name":"\u667a\u6167\u4ed8BOC","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":30,"moneyLow":1,"moneyHigh":30,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","endDate":"2020-06-30"},{"week":"123467","name":"\u5de5\u9280App","bank":"ICBC","payMethod":"QR","discountMethod":"C","miniReq":0,"moneyLow":1,"moneyHigh":188,"endDate":"2020-06-30"},{"week":"123467","name":"\u5ee3\u767c\u9280\u884cApp","bank":"CGB","payMethod":"QR","discountMethod":"C","miniReq":5,"moneyLow":2,"moneyHigh":10,"remark":"\u5fc5\u9700\u6301\u6709\u96fb\u5b50\u512a\u60e0\u5377","endDate":"2020-12-31"},{"week":"1234567","name":"Testing","bank":"Test","payMethod":"QR","discountMethod":"C","miniReq":0,"moneyLow":5,"moneyHigh":10,"endDate":"2099-12-31","hidden":true}]')},32:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),c=(a(37),a(65)),m=(a(38),a(25)),l=a(21),u=a(73),s=Object.freeze({PAYMETHOD_CASH:"C",PAYMETHOD_PERCENT:"P",PAYMONEY_DEFAULT:100}),d=a(67),h=a(72),y=a(70),p=a(69),E=a(68),g=a(74);function M(e,t){return e.discount<=t.discount?1:-1}function b(e){return void 0===e||null===e||""===e}var f=Object(c.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function k(e){var t=e.bestPaylist,a=f();return o.a.createElement(d.a,{className:a.root},t.map((function(e,n){return o.a.createElement(o.a.Fragment,{key:"BestPay_"+n},o.a.createElement(h.a,{alignItems:"flex-start"},o.a.createElement(E.a,null,o.a.createElement(g.a,{alt:e.bank,src:"/static/images/avatar/1.jpg"})),e.discountMethod===s.PAYMETHOD_CASH&&o.a.createElement(p.a,{primary:e.name,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},e.moneyHigh===e.moneyLow?"\u512a\u60e0"+e.discount+"\u868a":"\u512a\u60e0"+e.discount+"\u868a ("+e.moneyLow+"\u81f3"+e.moneyHigh+"\u868a)"),!b(e.remark)&&" \u2014 "+e.remark)}),e.discountMethod===s.PAYMETHOD_PERCENT&&o.a.createElement(p.a,{primary:e.name,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},b(e.moneyMax)?"\u512a\u60e0"+e.discount+"\u868a":"\u512a\u60e0"+e.discount+"\u868a (\u6700\u591a\uff1a"+e.moneyMax+"\u868a)"),!b(e.remark)&&" \u2014 "+e.remark)})),n!==t.length-1&&o.a.createElement(y.a,{variant:"inset",component:"li"}))})))}var w=a(30),v=Object(c.a)((function(e){return{root:{marginTop:e.spacing(4),width:"80%",maxWidth:"30ch"},margin:{margin:e.spacing(1)}}})),O=[{value:0,label:"MOP 0"},{value:50,label:"MOP 50"},{value:100,label:"MOP 100"},{value:200,label:"MOP 200+"}];function C(e){return"".concat(e,"\xb0C")}function D(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],r=new Date,i=function(e){var t=w.filter((function(t){return!(!b(a=t.hidden)&&!0===a)&&(!function(e,t){return!(t<=new Date(e+"T23:59:59.999Z"))}(t.endDate,r)&&(n=t.week,o=r.getDay(),n.indexOf(o)>=0&&!(e<t.miniReq)));var a,n,o})).map((function(t){var a=0;return t.discountMethod===s.PAYMETHOD_PERCENT?(a=e*t.percent,b(t.moneyMax)||(a=a<=t.moneyMax?a:t.moneyMax)):t.discountMethod===s.PAYMETHOD_CASH&&(a=t.moneyLow),t.discount=parseFloat(a.toFixed(2)),t})).sort(M);o(t)};return Object(n.useEffect)((function(){i(s.PAYMONEY_DEFAULT)}),[]),[a,i]}function P(){var e=v(),t=D(),a=Object(m.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(s.PAYMONEY_DEFAULT),d=Object(m.a)(c,2),h=d[0],y=d[1],p={bestPaylist:r};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u6d88\u8cbb\u91d1\u984d\uff1a",h,"\u868a"),o.a.createElement(u.a,{defaultValue:s.PAYMONEY_DEFAULT,getAriaValueText:C,"aria-labelledby":"discrete-slider-custom",step:5,marks:O,max:200,valueLabelDisplay:"auto",onChange:function(e,t){i(t),y(t)}})),o.a.createElement(k,p))}var A=a(71);function T(){return o.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(A.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var R=Object(c.a)((function(e){return{root:{alignItems:"center",textAlign:"center"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto"}}}));var x=function(){var e=R();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:"App-header"},o.a.createElement(P,null),o.a.createElement("footer",{className:e.footer},o.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);