(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d75dd4"],{"0cb2":function(e,t,a){var r=a("7b0b"),n=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,o,l,u){var d=a+e.length,p=o.length,g=c;return void 0!==l&&(l=r(l),g=s),i.call(u,g,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(d);case"<":s=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>p){var u=n(c/10);return 0===u?r:u<=p?void 0===o[u-1]?i.charAt(1):o[u-1]+i.charAt(1):r}s=o[c-1]}return void 0===s?"":s}))}},"35ce":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-container"},[a("Upload",{attrs:{multiple:"",type:"drag",format:["jpg","png"],"before-upload":e.handleUpload,"on-format-error":e.handleFormatError,action:""}},[a("div",{staticStyle:{padding:"20px 0"}},[a("p",[e._v("Click or drag files here to upload")])])]),a("div",{staticClass:"imgList-wrapper"},e._l(e.imgList,(function(t,r){return a("div",{key:r,staticClass:"imgList-item"},[a("img",{attrs:{src:e.imgList[r],alt:"metamask48"}})])})),0),e.imgList.length>0?a("div",{staticClass:"confirm-wrapper"},[a("button",{on:{click:e.upload}},[e._v(" 确认上传 ")])]):e._e(),a("div",{staticClass:"loading-warpper"},[e.isLoading?a("div",{staticClass:"spin-container"},[a("Spin",{attrs:{fix:"",size:"large"}})],1):a("div",{staticClass:"imgList-wrapper"},e._l(e.uploadImageList,(function(t,r){return a("div",{key:r,staticClass:"imgList-item"},[a("img",{attrs:{src:t.image,alt:"image["+r+"]"}}),e._m(0,!0)])})),0)])],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"key-wrapper"},[r("p",[e._v(" 属性： "),r("span",[e._v("值")])]),r("img",{attrs:{src:a("c753"),alt:"changeName"}})])}],i=a("1da1"),s=a("5530"),c=(a("96cf"),a("ac1f"),a("5319"),a("b0c0"),a("4de4"),a("0bbd")),o=a("2f62"),l={name:"UploadImage",inject:["reload"],data:function(){return{imgList:[],uploadImageList:[],isLoading:!0}},computed:Object(s["a"])({},Object(o["c"])(["ethAddress"])),methods:{handleUpload:function(e){var t=this,a=e.name.replace(/.+\./,"");0==["jpg","JPG","jpeg","JPEG","png","PNG"].filter((function(e){return e==a})).length&&console.log("文件格式错误");var r=new FileReader;return r.readAsDataURL(e),r.onload=function(e){var a=e.target.result;t.imgList.push(a)},!1},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},upload:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.imgList),a={request:{address:e.ethAddress,base_64_images:e.imgList,project_id:e.$route.params.projectId},signature:"oyc"},console.log({params:a}),t.next=6,Object(c["b"])("/api/audit/uploadImages",a);case 6:r=t.sent,200==r.data.code&&(e.$Notice.success({title:"Upload success !"}),e.reload()),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getUploadList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c["a"])("/api/audit/getUploadedImages/".concat(e.$route.params.projectId));case 3:a=t.sent,console.log(a),e.uploadImageList=a.data.data,e.isLoading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){this.getUploadList()}},u=l,d=(a("484f"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,"02d2433c",null);t["default"]=p.exports},4106:function(e,t,a){},"484f":function(e,t,a){"use strict";a("4106")},5319:function(e,t,a){"use strict";var r=a("d784"),n=a("d039"),i=a("825a"),s=a("1626"),c=a("5926"),o=a("50c4"),l=a("577e"),u=a("1d80"),d=a("8aa5"),p=a("dc4a"),g=a("0cb2"),f=a("14c3"),v=a("b622"),m=v("replace"),h=Math.max,b=Math.min,w=function(e){return void 0===e?e:String(e)},L=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),$=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,a){var r=x?"$":"$0";return[function(e,a){var r=u(this),n=void 0==e?void 0:p(e,m);return n?n.call(e,r,a):t.call(l(r),e,a)},function(e,n){var u=i(this),p=l(e);if("string"===typeof n&&-1===n.indexOf(r)&&-1===n.indexOf("$<")){var v=a(t,u,p,n);if(v.done)return v.value}var m=s(n);m||(n=l(n));var L=u.global;if(L){var x=u.unicode;u.lastIndex=0}var $=[];while(1){var k=f(u,p);if(null===k)break;if($.push(k),!L)break;var j=l(k[0]);""===j&&(u.lastIndex=d(p,o(u.lastIndex),x))}for(var _="",I=0,C=0;C<$.length;C++){k=$[C];for(var O=l(k[0]),U=h(b(c(k.index),p.length),0),y=[],A=1;A<k.length;A++)y.push(w(k[A]));var R=k.groups;if(m){var E=[O].concat(y,U,p);void 0!==R&&E.push(R);var N=l(n.apply(void 0,E))}else N=g(O,p,U,y,R,n);U>=I&&(_+=p.slice(I,U)+N,I=U+O.length)}return _+p.slice(I)}]}),!$||!L||x)},c753:function(e,t,a){e.exports=a.p+"img/changeName.35df4209.svg"}}]);
//# sourceMappingURL=chunk-71d75dd4.ca2f1c94.js.map