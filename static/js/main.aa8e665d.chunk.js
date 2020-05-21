(this.webpackJsonpmizz=this.webpackJsonpmizz||[]).push([[0],{101:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(9),i=n.n(o),c=(n(96),n(28)),l=n(15),m=n(141),s=n(156),u=n(143),d=Object.freeze({DISCOUNT_CALC:"C",DISCOUNT_FIX:"F",DISCOUNT_PERCENT:"P",DISCOUNT_RANDOM:"R",PAYMONEY_DEFAULT:100,COOKIE_BANK_FILTER:"MIZZ_FAB_FILTER_V1"}),p={Title:["\u6fb3\u9580\u4ed8\u6b3e\u512a\u60e0\u60c5\u5831"],Header:["\u6fb3\u9580\u4ed8\u6b3e\u512a\u60e0\u60c5\u5831"],Filter:["\u7be9\u9078"]};function g(e){return!h(e)&&!0===e}function y(e,a){return e.discount<=a.discount?1:-1}function h(e){return void 0===e||null===e||("string"===typeof e?""===e:"object"===typeof e&&Array.isArray(e)?0===e.length:void 0)}function f(e){var a,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(a=document.cookie.match(n))?decodeURI(a[2]):null}var b=n(145),k=n(146),E=n(32),O=n(139),v=n(140);function C(e){var a=e.children,n=(e.window,Object(O.a)());return r.a.createElement(v.a,{appear:!1,direction:"down",in:!n},a)}var R=Object(m.a)((function(e){return{title:{flexGrow:1}}}));function x(e){var a=R();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(C,e,r.a.createElement(b.a,null,r.a.createElement(k.a,null,r.a.createElement(E.a,{className:a.title,variant:"h5"},p.Header)))),r.a.createElement(k.a,null))}var M=n(162),w=n(148),_=n(157),P=Object(m.a)((function(e){return{root:{width:"100%",maxWidth:"60ch",display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",marginTop:e.spacing(2)},input:{width:"20ch",marginLeft:"1ch"},moneybar:{maxWidth:"calc(60ch - 20h)",marginTop:"1ch",marginLeft:"2ch",marginRight:"3ch"}}})),N=[{value:0,label:"$ 0"},{value:100,label:"$ 100"},{value:200,label:"$ 200+"}];function I(e){return"$ ".concat(e)}function T(e){var a=P();return r.a.createElement("div",{className:a.root},r.a.createElement(_.a,{id:"money-number",className:a.input,label:"\u6d88\u8cbb\u91d1\u984d\uff1a",type:"number",pattern:"[0-9]*",value:e.payMoney,autoFocus:!0,onFocus:function(e){e.target.select()},onChange:function(a){var n=0;try{n=Math.abs(parseInt(a.target.value))}catch(t){}e.setPayMoney(n)},InputLabelProps:{shrink:!0},InputProps:{inputMode:"numeric",startAdornment:r.a.createElement(w.a,{position:"start"},"$")},size:"small",variant:"outlined"}),r.a.createElement(M.a,{className:a.moneybar,value:e.payMoney,getAriaValueText:I,"aria-labelledby":"discrete-slider-custom",step:1,marks:N,max:200,valueLabelDisplay:"auto",onChange:function(a,n){e.setPayMoney(n)}}))}var A=n(147),D=n(149),j=n(151),U=n(150),B=n(158),F=Object(m.a)((function(e){return{root:{width:"100%",maxWidth:"60ch",backgroundColor:e.palette.background.paper},discountBlock:{border:2,borderStyle:"solid",borderColor:e.palette.secondary.main,boxShadow:"inset 0px 0px 10px 0px "+e.palette.secondary.light},discountBox:{margin:e.spacing(0,.5),padding:e.spacing(0,.5),textAlign:"center"},inline:{display:"inline"}}})),L={border:1,bgcolor:"primary.main",color:"primary.contrastText",borderColor:"primary.main",borderRadius:5,style:{height:"1.5rem"}};function S(e){var a=F();return r.a.createElement(A.a,{className:a.root},e.sortedList.map((function(n,t){return r.a.createElement(r.a.Fragment,{key:"best-pay-"+t},r.a.createElement(D.a,Object.assign({alignItems:"center",component:"div"},function(e,a){if(0===e)return{className:a.discountBlock}}(t,a)),r.a.createElement(B.a,Object.assign({},L,{className:a.discountBox}),r.a.createElement(E.a,null,"\u6e1b "+n.discount+" \u868a")),n.discountMethod===d.DISCOUNT_PERCENT&&r.a.createElement(U.a,{primary:Q(n.name,n.highlight),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},0!==n.miniReq?"\u51e1\u6eff"+n.miniReq+"\u868a\u5373\u53ef":"","\u6298\u6263"+parseFloat(100*n.percent)+"%",h(n.moneyMax)?"":"\uff08\u4e0a\u9650\u70ba"+n.moneyMax+"\u868a\uff09"),!h(n.remark)&&" \u2014 "+n.remark)}),n.discountMethod===d.DISCOUNT_FIX&&r.a.createElement(U.a,{primary:Q(n.name,n.highlight),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},0!==n.miniReq?"\u51e1\u6eff"+n.miniReq+"\u868a\u5373\u53ef":"","\u6298\u6263"+n.moneyLow+"\u868a",h(n.moneyMax)?"":"\uff08\u4e0a\u9650\u70ba"+n.moneyMax+"\u868a\uff09"),!h(n.remark)&&" \u2014 "+n.remark)}),n.discountMethod===d.DISCOUNT_RANDOM&&r.a.createElement(U.a,{primary:Q(n.name,n.highlight),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},0!==n.miniReq?"\u51e1\u6eff"+n.miniReq+"\u868a\u5373\u53ef":"\u4efb\u4f55\u6d88\u8cbb","\u96a8\u6a5f\u6e1b"+n.moneyLow+"\u81f3"+n.moneyHigh+"\u868a",h(n.moneyMax)?"":"\uff08\u4e0a\u9650\u70ba"+n.moneyMax+"\u868a\uff09"),!h(n.remark)&&" \u2014 "+n.remark)})),t!==e.sortedList.length-1&&r.a.createElement(j.a,{variant:"middle",component:"li"}))})))}function Q(e,a){return h(a)?e:e+"\uff08"+a+"\uff09"}var q=n(73);function z(e,a){var n=Object(t.useState)([]),r=Object(c.a)(n,2),o=r[0],i=r[1],l=Object(t.useCallback)((function(){var n=new Date,t=q.filter((function(t){return!g(t.hidden)&&(!function(e,a,n){if(!h(n)){var t=[];return a.forEach((function(a){var r=n.some((function(n){return e===n||e+"_"+a===n}));t.push(r)})),t.every((function(e){return!0===e}))}return!1}(t.bank,t.tag,a)&&(!function(e,a){return!(a<=new Date(e+"T23:59:59.999Z"))}(t.endDate,n)&&(r=t.week,o=n.getDay(),r.indexOf(o)>=0&&!(e<t.miniReq))));var r,o})).map((function(a){var n=0;return a.discountMethod===d.DISCOUNT_PERCENT?(n=e*a.percent,h(a.moneyMax)||(n=n<=a.moneyMax?n:a.moneyMax)):a.discountMethod===d.DISCOUNT_FIX?n=a.moneyLow:a.discountMethod===d.DISCOUNT_RANDOM&&(n=a.moneyLow>=1?a.moneyLow:1),a.discount=parseFloat(n.toFixed(2)),a})).sort(y);i(t)}),[e,a]);return Object(t.useEffect)((function(){l()}),[l]),[o,l]}function H(e){var a=Object(t.useState)(d.PAYMONEY_DEFAULT),n=Object(c.a)(a,2),o=n[0],i=n[1],l=z(o,e.checked),m=Object(c.a)(l,1)[0],s={payMoney:o,setPayMoney:i};return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,s),r.a.createElement(S,{sortedList:m}))}var K=n(152);function $(){var e=new Date(document.lastModified);return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(K.a,{color:"inherit",href:"mailto:admin@mizz.app"},"mizz ",(new Date).getFullYear())," "," | Last Update: ",e.toISOString().slice(0,10))}var G=n(77),W=n(153),Y=Object(G.a)({palette:{primary:W.a,secondary:{main:"#ff9800"}}}),J=n(40),X=n(74),Z=n(155),V=n(76),ee=n.n(V),ae=n(3),ne=n(161),te=n(160),re=n(154),oe=n(60),ie=n.n(oe),ce=n(61),le=n.n(ce),me=n(75),se=me.filter((function(e){return!g(e.hidden)})).sort((function(e,a){return e.bank>=a.bank?1:-1})),ue=function(e){return se.filter((function(a){return a.bank===e}))[0]},de=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),position:"fixed",right:e.spacing(1),bottom:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(0)},filter_list_root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},filter_list_block:{height:"2rem"}}}));function pe(e){var a,n=de(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),o=Object(c.a)(t,2),i=o[0],m=o[1],s=function(e,a){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&m(Object(X.a)({},i,Object(l.a)({},e,a)))}},u=function(a){return function(){var n=g(a,e.checked);if(1===a.split("_").length)n=h(a,n);else{var t=a.split("_")[0],r=ue(t),o=-1===n.indexOf(a),i=[];r.tags.forEach((function(e){var a=r.bank+"_"+e.tag;i.push(-1===n.indexOf(a))})),o&&i.some((function(e){return!0===e}))&&(n=y(t,n,!0)),!o&&i.every((function(e){return!1===e}))&&(n=y(t,n,!1))}"UnionPay_UnionPayQR"===a&&-1!==n.indexOf(a)&&(n=f(!1,n)),e.setChecked(n),function(e,a){var n=new Date;n.setTime(n.getTime()+7776e6),document.cookie=e+"="+encodeURI(a)+";expires="+n.toGMTString()}(d.COOKIE_BANK_FILTER,Object(J.a)(n))}},g=function(e,a){var n=a.indexOf(e),t=Object(J.a)(a);return-1===n?t.push(e):t.splice(n,1),t},y=function(e,a,n){var t=a.indexOf(e),r=Object(J.a)(a);return n&&-1!==t&&r.splice(t,1),!n&&-1===t&&r.push(e),r},h=function(e,a){var n=Object(J.a)(a),t=-1===a.indexOf(e);return ue(e).tags.forEach((function(a){var r=e+"_"+a.tag,o=n.indexOf(r);t?-1!==o&&n.splice(o,1):-1===o&&n.push(r)})),n},f=function(e,a){var n=Object(J.a)(a);return se.filter((function(e){return e.tags.some((function(e){return"UnionPayQR"===e.tag}))})).forEach((function(a){var t=a.bank+"_UnionPayQR",r=n.indexOf(t);e?-1!==r&&n.splice(r,1):-1===r&&n.push(t)})),n};return r.a.createElement("div",{className:n.root},r.a.createElement(Z.a,{variant:"extended",size:"small",color:"primary",onClick:s("right",!0)},r.a.createElement(ee.a,{className:n.extendedIcon}),p.Filter),r.a.createElement(ne.a,{anchor:"right",open:i.right,onClose:s("right",!1)},(a="right",r.a.createElement("div",{className:Object(ae.a)(n.list,Object(l.a)({},n.fullList,"top"===a||"bottom"===a)),role:"presentation",onKeyDown:s(a,!1)},r.a.createElement(A.a,{className:n.filter_list_root},se.map((function(a){var t="".concat(a.bankname[0]).concat(1===a.tags.length?"\uff08"+a.tags[0].name[0]+"\uff09":"");return r.a.createElement(r.a.Fragment,{key:"filter-block-"+a.bank},r.a.createElement(D.a,{key:"filter-block-"+a.bank,role:void 0,dense:!0,button:!0,className:n.filter_list_block,onClick:u(a.bank)},r.a.createElement(re.a,{control:r.a.createElement(te.a,{icon:r.a.createElement(ie.a,{fontSize:"small"}),checkedIcon:r.a.createElement(le.a,{fontSize:"small"}),checked:-1===e.checked.indexOf(a.bank),name:"filter_bank_"+a.bank,id:"filter_bank_"+a.bank}),label:t,sytle:{width:"100%"},onClick:function(e){e.preventDefault()}})),a.tags.length>1&&a.tags.map((function(t){var o=t.name[0];return r.a.createElement(D.a,{key:"filter-block-"+a.bank+"-tag-"+t.tag,role:void 0,dense:!0,button:!0,className:n.filter_list_block,onClick:u(a.bank+"_"+t.tag)},r.a.createElement(re.a,{control:r.a.createElement(te.a,{icon:r.a.createElement(ie.a,{fontSize:"small"}),checkedIcon:r.a.createElement(le.a,{fontSize:"small"}),checked:-1===e.checked.indexOf(a.bank+"_"+t.tag),name:"filter_bank_tag_"+t.tag,id:"filter_bank_tag_"+t.tag,style:{paddingLeft:"2rem"}}),label:o,onClick:function(e){e.preventDefault()}}))})),r.a.createElement(j.a,null))})))))))}var ge=Object(m.a)((function(e){var a;return{root:{textAlign:"center"},header:{marginBottom:e.spacing(1)},main:(a={minHeight:"-moz-available"},Object(l.a)(a,"minHeight","-webkit-fill-available"),Object(l.a)(a,"minHeight","fill-available"),Object(l.a)(a,"display","flex"),Object(l.a)(a,"flexDirection","column"),Object(l.a)(a,"justifyContent","center"),Object(l.a)(a,"alignItems","center"),Object(l.a)(a,"fontSize","calc(10px + 2vmin)"),Object(l.a)(a,"backgroundColor",e.palette.background.paper),a),footer:{flexShrink:0,padding:e.spacing(1,2),marginTop:"auto"}}}));document.title=p.Title;var ye=function(){var e=ge(),a=[];!h(f(d.COOKIE_BANK_FILTER))&&f(d.COOKIE_BANK_FILTER).split(",").map((function(e){return a.push(e)}));var n=r.a.useState(a),t=Object(c.a)(n,2),o={checked:t[0],setChecked:t[1]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{theme:Y},r.a.createElement(u.a,null),r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.main},r.a.createElement("header",{className:e.header},r.a.createElement(x,null)),r.a.createElement(H,o),r.a.createElement("footer",{className:e.footer},r.a.createElement($,null)))),r.a.createElement(pe,o)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e){e.exports=JSON.parse('[{"week":"1234560","name":"\u96f2\u9583\u4ed8\uff08\u4e2d\u9280\u5927\u7063\u5340\u5361\uff09","bank":"BOC","tag":["UnionPayQR"],"payMethod":"QR","discountMethod":"F","miniReq":20,"moneyLow":5,"moneyHigh":5,"remark":"\u4fe1\u7528\u5361\u56de\u8d08\uff0c\u4e0a\u965010\u6b21","endDate":"2020-06-30"},{"week":"5","name":"\u4e2d\u9280\u667a\u6167\u4ed8BOC","bank":"BOC","tag":["App"],"payMethod":"QR","discountMethod":"R","miniReq":50,"moneyLow":1.5,"moneyHigh":50,"remark":"\u6bcf\u65e5\u53ea\u53ef\u4eab\u4e00\u6b21\u512a\u60e0","endDate":"2021-01-01"},{"week":"123460","name":"\u4e2d\u9280\u667a\u6167\u4ed8BOC","bank":"BOC","tag":["App"],"payMethod":"QR","discountMethod":"R","miniReq":30,"moneyLow":0.1,"moneyHigh":30,"remark":"\u6bcf\u65e5\u53ea\u53ef\u4eab\u4e00\u6b21\u512a\u60e0","endDate":"2020-06-30"},{"week":"1234560","name":"\u5ee3\u767c\u9280\u884cApp","bank":"CGB","tag":["App"],"payMethod":"QR","discountMethod":"F","miniReq":5,"moneyLow":2,"moneyHigh":10,"remark":"\u5fc5\u9700\u6301\u6709\u96fb\u5b50\u512a\u60e0\u5377","endDate":"2020-12-31"},{"week":"1234560","name":"\u5de5\u9280App","bank":"ICBC","tag":["App"],"payMethod":"QR","discountMethod":"R","miniReq":0,"moneyLow":0.1,"moneyHigh":188,"endDate":"2020-06-30"},{"week":"1234560","name":"\u96f2\u9583\u4ed8\uff08\u6c38\u4ea8\uff09","bank":"OCBC","tag":["UnionPayQR"],"payMethod":"QR","discountMethod":"P","miniReq":50,"percent":0.05,"remark":"\u4fe1\u7528\u5361\u56de\u8d08\uff0c\u4e0d\u9069\u7528\u65bcKumamon\u5361","startDate":"2020-05-01","endDate":"2020-05-10"},{"week":"6","name":"\u8c50\u4ed8\u5bf6","bank":"TFB","payMethod":"QR","tag":["App"],"discountMethod":"R","miniReq":60,"moneyLow":0.1,"moneyHigh":60,"remark":"\u6bcf\u65e5\u53ea\u53ef\u4eab\u4e00\u6b21\u512a\u60e0","startDate":"2020-04-01","endDate":"2020-12-31"},{"week":"1234560","name":"\u96f2\u9583\u4ed8\uff08\u5927\u8c50\u9280\u806f\u5361\uff09","bank":"TFB","tag":["UnionPayQR"],"payMethod":"QR","discountMethod":"P","miniReq":50,"percent":0.05,"moneyMax":100,"remark":"\u4fe1\u7528\u5361\u56de\u8d08","endDate":"2020-12-31"},{"week":"1234560","name":"\u96f2\u9583\u4ed8 \u6216 \u788c\u9280\u806f\u5361","bank":"UnionPay","tag":["UnionPayQR","CCard"],"payMethod":"QR","discountMethod":"F","miniReq":200,"moneyLow":30,"moneyHigh":30,"remark":"\u53ea\u9650\u65bc\u842c\u5be7\u6d88\u8cbb","highlight":"\u53ea\u9650\u65bc\u842c\u5be7","endDate":"2020-05-31"},{"week":"1234560","name":"Testing","bank":"Test","payMethod":"QR","discountMethod":"R","miniReq":0,"moneyLow":5,"moneyHigh":10,"endDate":"2099-12-31","hidden":true}]')},75:function(e){e.exports=JSON.parse('[{"bank":"BOC","bankname":["\u4e2d\u570b\u9280\u884c","BOC"],"tags":[{"tag":"App","name":["\u667a\u6167\u4ed8App","BOC Pay"]},{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay"]}]},{"bank":"CGB","bankname":["\u5ee3\u767c\u9280\u884c","CGB"],"tags":[{"tag":"App","name":["\u5ee3\u767cApp","CGB App"]}]},{"bank":"ICBC","bankname":["\u5de5\u5546\u9280\u884c","ICBC"],"tags":[{"tag":"App","name":["\u5de5\u9280App","ICBC Pay"]},{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay"]}]},{"bank":"MPay","bankname":["MPay","MPay"],"tags":[{"tag":"App","name":["MPay App","MPay App"]}],"hidden":true},{"bank":"OCBC","bankname":["\u6c38\u4ea8\u9280\u884c","OCBC"],"tags":[{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay App"]}]},{"bank":"TFB","bankname":["\u5927\u8c50\u9280\u884c","TFB"],"tags":[{"tag":"App","name":["\u8c50\u4ed8\u5bf6App","TFB Pay"]},{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay"]}]},{"bank":"UnionPay","bankname":["\u9280\u806f","UnionPay"],"tags":[{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay"]},{"tag":"CCard","name":["\u4fe1\u7528\u5361","CreditCard"]}]},{"bank":"test","bankname":["\u6e2c\u8a66","test"],"tags":[{"tag":"App","name":["Test","Test Pay"]},{"tag":"UnionPayQR","name":["\u96f2\u9583\u4ed8","UnionPay"]}],"hidden":true}]')},91:function(e,a,n){e.exports=n(101)},96:function(e,a,n){}},[[91,1,2]]]);