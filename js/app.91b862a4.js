(function(){"use strict";var t={17:function(t,e,s){var r=s(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o=s(1),n={},l=(0,o.Z)(n,i,a,!1,null,null,null),u=l.exports,c=s(345),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"background"},[e("header",{staticClass:"header_sea"},[t._m(0),e("button",{staticClass:"button_form",on:{click:t.scrollToForm}},[t._v("FORM")]),t._m(1)]),t._m(2),e("main",{staticClass:"main_sand",attrs:{id:"form"}},[e("form",{staticClass:"main_form",attrs:{id:"form"},on:{submi:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._m(3),e("div",{staticClass:"form_area"},[e("div",{staticClass:"input_div"},[t._m(4),e("input",{directives:[{name:"model",rawName:"v-model",value:t.store,expression:"store"}],class:{"is-invalid":t.storeErrorMsg},attrs:{type:"text",list:"storeList",placeholder:"placeholder text"},domProps:{value:t.store},on:{blur:t.validateStore,input:function(e){e.target.composing||(t.store=e.target.value)}}}),e("datalist",{attrs:{id:"storeList"}},t._l(t.storeList,(function(t,s){return e("option",{key:s,domProps:{value:t}})})),0),e("span",{directives:[{name:"show",rawName:"v-show",value:t.storeErrorMsg,expression:"storeErrorMsg"}],staticClass:"invalid_feedback"},[t._v(" "+t._s(t.storeErrorMsg)+" ")])]),e("div",{staticClass:"input_div"},[t._m(5),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{"is-invalid":t.nameErrorMsg},attrs:{type:"text",placeholder:"placeholder text",required:""},domProps:{value:t.name},on:{blur:t.validateName,input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.nameErrorMsg,expression:"nameErrorMsg"}],staticClass:"invalid_feedback"},[t._v(" "+t._s(t.nameErrorMsg)+" ")])]),e("div",{staticClass:"input_div"},[t._m(6),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],class:{"is-invalid":t.phoneErrorMsg},attrs:{type:"text",placeholder:"placeholder text",required:""},domProps:{value:t.phoneNumber},on:{blur:t.validatePhoneNumber,input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.phoneErrorMsg,expression:"phoneErrorMsg"}],staticClass:"invalid_feedback"},[t._v(" "+t._s(t.phoneErrorMsg)+" ")])]),e("div",{staticClass:"input_div"},[t._m(7),e("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],class:{"is-invalid":t.moneyErrorMsg},attrs:{type:"text",placeholder:"placeholder text",required:""},domProps:{value:t.money},on:{blur:t.validateAmount,input:function(e){e.target.composing||(t.money=e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.moneyErrorMsg,expression:"moneyErrorMsg"}],staticClass:"invalid_feedback"},[t._v(" "+t._s(t.moneyErrorMsg)+" ")])]),e("div",{staticClass:"input_div"},[t._m(8),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentInput,expression:"paymentInput"}],class:{"is-invalid":t.paymentErrorMsg},attrs:{type:"text",list:"payment",placeholder:"placeholder text",required:""},domProps:{value:t.paymentInput},on:{blur:t.validatePayment,input:function(e){e.target.composing||(t.paymentInput=e.target.value)}}}),e("datalist",{attrs:{id:"payment"}},t._l(t.payment,(function(t,s){return e("option",{key:s,domProps:{value:t}})})),0),e("span",{directives:[{name:"show",rawName:"v-show",value:t.paymentErrorMsg,expression:"paymentErrorMsg"}],staticClass:"invalid_feedback"},[t._v(" "+t._s(t.paymentErrorMsg)+" ")])])]),t.sumbit?e("button",{class:t.submitClass,attrs:{type:"submit",disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._v(" submit ")]):t._e(),t.submitSuccess?e("button",{staticClass:"button_submit_success"},[e("img",{attrs:{src:s(235),alt:"success"}}),t._v(" success ")]):t._e(),t.submitFail?e("button",{staticClass:"button_submit_failure"},[e("img",{attrs:{src:s(725),alt:"fail"}}),t._v(" failure ")]):t._e(),t.submitFail?e("span",{staticClass:"submit_fail_errorMsg"},[t._v(" This person does not exist ")]):t._e()]),e("div",{staticClass:"main_gift"},[e("div",{staticClass:"gift_container"},t._l(t.giftList,(function(s,r){return e("div",{key:r+1,staticClass:"card"},[e("div",{class:{medal_top_prizes:"A"===s.score||"B"===s.score||"C"===s.score,medal_default:"A"!==s.score&"B"!==s.score&"C"!==s.score}},[e("p",[t._v(t._s(s.score))])]),e("div",{class:{gift_number_top:"A"===s.score||"B"===s.score||"C"===s.score,gift_number_default:"A"!==s.score&"B"!==s.score&"C"!==s.score}},[t._v(" "+t._s(s.number)+" ")]),e("p",{class:{gift_name_top:"A"===s.score||"B"===s.score||"C"===s.score,gift_name_default:"A"!==s.score&"B"!==s.score&"C"!==s.score}},[t._v(" "+t._s(s.name)+" ")])])})),0)])]),t._m(9),t._m(10)])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_title"},[e("h1",[t._v("There is no one")]),e("h2",[t._v("who loves pain")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_article"},[e("div",{staticClass:"header_boat"},[e("img",{staticClass:"boat",attrs:{src:s(521),alt:"boat"}}),e("img",{staticClass:"rope",attrs:{src:s(253),alt:"rope"}}),e("img",{staticClass:"paddle",attrs:{src:s(354),alt:"paddle"}})]),e("img",{staticClass:"bubble_2",attrs:{src:s(760),alt:"bubble_2"}}),e("img",{staticClass:"bubble_1",attrs:{src:s(688),alt:"bubble_1"}}),e("div",[e("div",{staticClass:"header_article_title"},[e("h3",[e("img",{attrs:{src:s(119),alt:"cactus_title"}}),t._v("paragraph "),e("img",{attrs:{src:s(119),alt:"cactus_title"}})])]),e("ol",[e("li",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])]),e("div",{staticClass:"header_article_title"},[e("h3",[e("img",{attrs:{src:s(119),alt:"cactus_title"}}),t._v("paragraph "),e("img",{attrs:{src:s(119),alt:"cactus_title"}})]),e("ol",[e("li",[t._v(" Quisque sodales leo "),e("strong",[e("u",[t._v("vitae olputate auctor.")])])]),e("li",[t._v(" Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit. ")]),e("li",[t._v(" Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan. ")]),e("li",[t._v(" Donec ultrices sapien "),e("strong",[t._v("vitae leo venenatis ullamcorper.")])])])]),e("img",{staticClass:"boat2",attrs:{src:s(876),alt:"boat2"}}),e("img",{staticClass:"boat2_fireworks",attrs:{src:s(548),alt:"fireworks"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sea_wave"},[e("div",{staticClass:"wave1"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_title"},[t._v(" FORM "),e("img",{staticClass:"turtle",attrs:{src:s(282),alt:"turtle"}})])},function(){var t=this,e=t._self._c;return e("label",[t._v("store "),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("name"),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("phone"),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("Amount of consumption"),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",[t._v("payment"),e("span",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"lighthouse"},[e("div",{staticClass:"lighthouse_text"},[e("img",{staticClass:"lighthouse_line",attrs:{src:s(437),alt:"lighthouse_left_line"}}),e("p",{staticClass:"lighthouse_number"},[t._v("13.32")]),e("p",[t._v("who seeks after it and")]),e("p",[t._v("wants to have it")]),e("img",{staticClass:"lighthouse_line",attrs:{src:s(62),alt:"lighthouse_right_line"}})]),e("img",{attrs:{src:s(724),alt:"lighthouse"}})])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer_market"},[e("p",{staticClass:"market_slogan"},[t._v("Neque porro quisquam est qui dolorem!")]),e("img",{attrs:{src:s(566),alt:"market"}})])}],v={data(){return{store:"",storeList:["store1","store2","store3"],name:"",phoneNumber:"",money:"",paymentInput:"",payment:["difital payment","ATM"],storeErrorMsg:"",nameErrorMsg:"",phoneErrorMsg:"",moneyErrorMsg:"",paymentErrorMsg:"",giftList:[{score:"A",number:"ONE",name:"dehumidifier"},{score:"B",number:"ONE",name:"range hood"},{score:"C",number:"ONE",name:"vacuum cleaner"},{score:"D",number:"ONE",name:"toaster"},{score:"E",number:"ONE",name:"scale"},{score:"F",number:"ONE",name:"straightening iron"},{score:"G",number:"FIVE",name:"vacuum cleaner"},{score:"H",number:"TEN",name:"rice cooker"}],sumbit:!0,submitSuccess:!1,submitFail:!1}},computed:{isDisabled(){return!(this.store&&this.name&&this.phoneNumber&&this.money&&this.paymentInput)},submitClass(){return this.store&&this.name&&this.phoneNumber&&this.money&&this.paymentInput?"button_submit":"button_submit_disabled"}},methods:{scrollToForm(){const t=document.querySelector("#form");t.scrollIntoView({behavior:"smooth"})},validateStore(){this.store?this.storeList.includes(this.store)?this.storeErrorMsg="":this.storeErrorMsg="no result":this.storeErrorMsg="required"},validateName(){const t=/^[a-zA-Z\u4e00-\u9fa5]+$/;this.name?t.test(this.name.trim())?this.nameErrorMsg="":this.nameErrorMsg="wrong format":this.nameErrorMsg="required"},validatePhoneNumber(){const t=/^(09)[0-9]{8}$/;this.phoneNumber?t.test(this.phoneNumber.trim())?this.phoneErrorMsg="":this.phoneErrorMsg="wrong format":this.phoneErrorMsg="required"},validateAmount(){const t=/^[1-9][0-9]+$/;this.money?t.test(this.money.trim())?this.moneyErrorMsg="":this.moneyErrorMsg="wrong format":this.moneyErrorMsg="required"},validatePayment(){this.paymentInput?this.paymentErrorMsg="":this.paymentErrorMsg="required"},submitForm(){this.validateStore(),this.validateName(),this.validatePhoneNumber(),this.validateAmount(),this.validatePayment(),this.storeErrorMsg||this.nameErrorMsg||this.phoneErrorMsg||this.moneyErrorMsg||this.paymentErrorMsg?(this.sumbit=!1,this.submitFail=!0,this.submitClass="button_submit_failure"):(this.sumbit=!1,this.submitSuccess=!0,this.submitClass="button_submit_success")}}},d=v,_=(0,o.Z)(d,m,p,!1,null,"204effb4",null),h=_.exports;r.ZP.use(c.ZP);const g=[{path:"/",name:"Eway",component:h}],f=new c.ZP({mode:"history",base:"/eway_interview_test/",routes:g});var b=f,y=s(629);r.ZP.use(y.ZP);var C=new y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:b,store:C,render:t=>t(u)}).$mount("#app")},235:function(t,e,s){t.exports=s.p+"img/Vector-1.74ca36ec.svg"},725:function(t,e,s){t.exports=s.p+"img/Vector.7f438854.svg"},876:function(t,e,s){t.exports=s.p+"img/boat2.0d88ecc0.svg"},521:function(t,e,s){t.exports=s.p+"img/boat.31b3e4a4.svg"},354:function(t,e,s){t.exports=s.p+"img/paddle.9c03bfee.svg"},253:function(t,e,s){t.exports=s.p+"img/rope.af3867de.svg"},119:function(t,e,s){t.exports=s.p+"img/cactus.81d2ca0d.svg"},548:function(t,e,s){t.exports=s.p+"img/fireworks.147f7940.svg"},724:function(t,e,s){t.exports=s.p+"img/lighthouse.82eb1d42.svg"},437:function(t,e,s){t.exports=s.p+"img/lighthouse_left_line.7720bb4c.svg"},62:function(t,e,s){t.exports=s.p+"img/lighthouse_right_line.a13a64a4.svg"},688:function(t,e,s){t.exports=s.p+"img/pop_1.cde2212b.svg"},760:function(t,e,s){t.exports=s.p+"img/pop_2.0a903248.svg"},282:function(t,e,s){t.exports=s.p+"img/turtle.94de9b57.svg"},566:function(t,e,s){t.exports=s.p+"img/market.4af357d7.svg"}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,i,a){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],a=t[c][2];for(var n=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(n=!1,a<o&&(o=a));if(n){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,i,a]}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/eway_interview_test/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],n=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var c=l(s)}for(e&&e(r);u<o.length;u++)a=o[u],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},r=self["webpackChunkeway_interview_test"]=self["webpackChunkeway_interview_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(17)}));r=s.O(r)})();
//# sourceMappingURL=app.91b862a4.js.map