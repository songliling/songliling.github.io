(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c35391f8"],{"3c5d":function(t,a,e){"use strict";e("989c")},"58e1":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uploadCode-wrapper"},[e("div",{staticClass:"upload-content"},[e("div",{staticClass:"config-wrapper"},[e("button",{staticClass:"addAttBtn",on:{click:t.addAttr}},[t._v(" 添加属性 ")]),e("div",{staticClass:"att-list-wrapper"},t._l(t.listData,(function(a,n){return e("div",{key:n,staticClass:"att-item"},[e("span",{staticClass:"item-title"},[t._v(t._s(a.name))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"item.value"}],staticClass:"item-value",attrs:{rows:"1",cols:"40"},domProps:{value:a.value},on:{input:function(e){e.target.composing||t.$set(a,"value",e.target.value)}}},[t._v("a")]),e("button",{on:{click:t.openConfig}},[t._v(" 修改 ")])])})),0)]),t._m(0)]),e("configDialog",{ref:"config"})],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"code-preview-wrapper"},[e("textarea",{staticClass:"code",attrs:{rows:"5",cols:"33"}},[t._v("a")])])}],i=(e("d3b7"),e("3ca3"),e("ddb0"),{data:function(){return{listData:[{id:"1",name:"name1",value:"value1"}]}},components:{configDialog:function(){return e.e("chunk-34ac2b3d").then(e.bind(null,"f718"))}},methods:{openConfig:function(){this.$refs.config.open()},addAttr:function(){var t={name:"name",value:"value"};this.listData.push(t)}}}),c=i,o=(e("3c5d"),e("2877")),l=Object(o["a"])(c,n,s,!1,null,"e66c8ff6",null);a["default"]=l.exports},"989c":function(t,a,e){}}]);
//# sourceMappingURL=chunk-c35391f8.65ed1d23.js.map