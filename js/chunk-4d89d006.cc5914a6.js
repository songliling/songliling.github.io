(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d89d006"],{"354c":function(t,e,a){},"78fd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tokenList",attrs:{"data-aos":"fade-up","data-aos-easing":"linear","data-aos-duration":"1500"}},[a("div",{staticClass:"Breadcrumb"},[a("my-brand",{attrs:{routerlist:t.routerlist}})],1),t.tokenData&&t.tokenData.length>0?a("div",{staticClass:"tokenList-wrapper"},t._l(t.tokenData,(function(e){return a("div",{key:e,staticClass:"tokenList-item",on:{click:function(a){return t.toTokenDetail(e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$config.normalRequestBaseUrl+"/art/"+e+"/png",expression:"`${$config.normalRequestBaseUrl}/art/${item}/png`"}]}),a("div",{staticClass:"overlay"},[a("div",{staticClass:"block-wrapper"},[a("span",{staticClass:"id"},[t._v("# "+t._s(e))])])])])})),0):a("div",{staticClass:"noData-wrapper"},[t._v(" No Data ")])])},r=[],o=a("1da1"),s=(a("96cf"),a("0bbd")),i={data:function(){return{tokenData:[]}},methods:{toTokenDetail:function(t){this.$router.push("/token/".concat(t))},getProjectDetail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={projectId:t.$route.params.projectID},e.prev=1,e.next=4,s["a"]("/api/project",a);case 4:o=e.sent,console.log(o),t.tokenData=null===(n=o.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.all_tokens,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},created:function(){this.getProjectDetail()},computed:{routerlist:function(){return[{to:"/",name:"Home"},{to:"/projects",name:"Projects"},{to:"/projectDetail/".concat(this.$route.params.projectID),name:"ProjectDetail"},{name:"Gallery"}]}}},c=i,l=(a("b4cf"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"dc824388",null);e["default"]=u.exports},b4cf:function(t,e,a){"use strict";a("354c")}}]);
//# sourceMappingURL=chunk-4d89d006.cc5914a6.js.map