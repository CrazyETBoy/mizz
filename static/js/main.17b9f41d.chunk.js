(this.webpackJsonpmizz=this.webpackJsonpmizz||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"week":"6","name":"\u8c50\u4ed8\u5bf6","bank":"TFB","payMethod":"QR","discountMethod":"C","miniReq":60,"moneyLow":1,"moneyHigh":60,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","startDate":"2020-04-01","endDate":"2020-12-31"},{"week":"1234567","name":"\u96f2\u9583\u4ed8\uff08\u5927\u8c50\uff09","bank":"TFB","payMethod":"QR","discountMethod":"P","miniReq":50,"percent":0.05,"moneyMax":100,"remark":"\u4fe1\u7528\u5361\u56de\u8d08","endDate":"2020-12-31"},{"week":"1234567","name":"\u96f2\u9583\u4ed8\uff08\u4e2d\u9280\u5927\u7063\u5340\u5361\uff09","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":20,"moneyLow":5,"moneyHigh":5,"remark":"\u4fe1\u7528\u5361\u56de\u8d08","endDate":"2020-06-30"},{"week":"5","name":"\u667a\u6167\u4ed8BOC","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":50,"moneyLow":1,"moneyHigh":50,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","endDate":"2021-01-01"},{"week":"123467","name":"\u667a\u6167\u4ed8BOC","bank":"BOC","payMethod":"QR","discountMethod":"C","miniReq":30,"moneyLow":1,"moneyHigh":30,"remark":"\u6bcf\u65e5\u53ef\u4eab\u4e00\u6b21","endDate":"2020-06-30"},{"week":"123467","name":"\u5de5\u9280App","bank":"ICBC","payMethod":"QR","discountMethod":"C","miniReq":0,"moneyLow":1,"moneyHigh":188,"endDate":"2020-06-30"},{"week":"123467","name":"\u5ee3\u767c\u9280\u884cApp","bank":"CGB","payMethod":"QR","discountMethod":"C","miniReq":5,"moneyLow":2,"moneyHigh":10,"remark":"\u5fc5\u9700\u6301\u6709\u96fb\u5b50\u512a\u60e0\u5377","endDate":"2020-12-31"},{"week":"1234567","name":"Testing","bank":"Test","payMethod":"QR","discountMethod":"C","miniReq":0,"moneyLow":5,"moneyHigh":10,"endDate":"2099-12-31","hidden":true}]')},32:function(e,a,t){e.exports=t(43)},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(13),i=t.n(r),c=(t(37),t(65)),m=(t(38),t(25)),l=t(21),s=t(73),u=Object.freeze({PAYMETHOD_CASH:"C",PAYMETHOD_PERCENT:"P",PAYMONEY_DEFAULT:100}),d=t(67),p=t(72),h=t(70),y=t(69),E=t(68),g=t(74);function M(e,a){return e.discount<=a.discount?1:-1}function f(e){return void 0===e||null===e||""===e}var k=Object(c.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function b(e){var a=e.bestPaylist,t=k();return o.a.createElement(d.a,{className:t.root},a.map((function(e,n){return o.a.createElement(o.a.Fragment,{key:"BestPay_"+n},o.a.createElement(p.a,{alignItems:"flex-start"},o.a.createElement(E.a,null,o.a.createElement(g.a,{alt:e.bank,src:"/static/images/avatar/1.jpg"})),e.discountMethod===u.PAYMETHOD_CASH&&o.a.createElement(y.a,{primary:e.name,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.moneyHigh===e.moneyLow?"\u512a\u60e0"+e.discount+"\u868a":"\u512a\u60e0"+e.discount+"\u868a ("+e.moneyLow+"\u81f3"+e.moneyHigh+"\u868a)"),!f(e.remark)&&" \u2014 "+e.remark)}),e.discountMethod===u.PAYMETHOD_PERCENT&&o.a.createElement(y.a,{primary:e.name,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},f(e.moneyMax)?"\u512a\u60e0"+e.discount+"\u868a":"\u512a\u60e0"+e.discount+"\u868a (\u6700\u591a\uff1a"+e.moneyMax+"\u868a)"),!f(e.remark)&&" \u2014 "+e.remark)})),n!==a.length-1&&o.a.createElement(h.a,{variant:"inset",component:"li"}))})))}var w=t(30),v=Object(c.a)((function(e){return{root:{marginTop:e.spacing(4),width:"80%",maxWidth:"30ch"},margin:{margin:e.spacing(1)}}})),O=[{value:0,label:"MOP 0"},{value:50,label:"MOP 50"},{value:100,label:"MOP 100"},{value:200,label:"MOP 200+"}];function C(e){return"".concat(e,"\xb0C")}function D(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],o=a[1],r=new Date,i=function(e){var a=w.filter((function(a){return!(!f(t=a.hidden)&&!0===t)&&(!function(e,a){return!(a<=new Date(e+"T23:59:59.999Z"))}(a.endDate,r)&&(n=a.week,o=r.getDay(),n.indexOf(o)>=0&&!(e<a.miniReq)));var t,n,o})).map((function(a){var t=0;return a.discountMethod===u.PAYMETHOD_PERCENT?(t=e*a.percent,f(a.moneyMax)||(t=t<=a.moneyMax?t:a.moneyMax)):a.discountMethod===u.PAYMETHOD_CASH&&(t=a.moneyLow),a.discount=parseFloat(t.toFixed(2)),a})).sort(M);o(a)};return Object(n.useEffect)((function(){i(u.PAYMONEY_DEFAULT)}),[]),[t,i]}function P(){var e=v(),a=D(),t=Object(m.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)(u.PAYMONEY_DEFAULT),d=Object(m.a)(c,2),p=d[0],h=d[1],y={bestPaylist:r};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{id:"discrete-slider-custom",gutterBottom:!0},"\u6d88\u8cbb\u91d1\u984d\uff1a",p,"\u868a"),o.a.createElement(s.a,{defaultValue:u.PAYMONEY_DEFAULT,getAriaValueText:C,"aria-labelledby":"discrete-slider-custom",step:5,marks:O,max:200,valueLabelDisplay:"auto",onChange:function(e,a){i(a),h(a)}})),o.a.createElement(b,y))}var A=t(71);function T(){return o.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(A.a,{color:"inherit",href:"https://mizz.app/"},"mizz.app")," ",(new Date).getFullYear(),".")}var R=Object(c.a)((function(e){return{root:{alignItems:"center",textAlign:"center"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto"}}}));var x=function(){var e=R();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:"App-header"},o.a.createElement(P,null),o.a.createElement("footer",{className:e.footer},o.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);