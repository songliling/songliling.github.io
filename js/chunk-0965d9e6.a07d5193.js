(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0965d9e6"],{8307:function(e,t,r){},bef1:function(e,t,r){"use strict";r("8307")},e507:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"members-warpper"},[r("div",{staticClass:"linkBtn flex justify-between"},[r("my-brand",{attrs:{routerlist:e.routerlist}}),r("router-link",{staticClass:"faq",attrs:{to:"/faq"}},[e._v(" f.a.q ")])],1),r("Table",{attrs:{columns:e.activeCols,data:e.mermbersList,loading:e.loading},scopedSlots:e._u([{key:"profile_id",fn:function(t){var s=t.row;return[r("div",{staticClass:"profile_id"},[r("router-link",{staticClass:"site sameWidthFont",attrs:{to:"/profile/"+s.address}},[e._v(" "+e._s(s.address)+" ")])],1)]}},{key:"profileName",fn:function(t){var s=t.row;return[r("div",[r("p",{staticClass:"profileName"},[e._v(" "+e._s(s.profile_name)+" ")])])]}},{key:"memberships",fn:function(t){var s=t.row;return[r("div",[r("p",{staticClass:"memberships"},[e._v(" "+e._s(s.memberships)+" ")])])]}}])})],1)},i=[],n=r("1da1"),a=(r("96cf"),r("0bbd")),o={data:function(){return{mermbersList:[],loading:!1}},computed:{activeCols:function(){return[{title:"Wallet",slot:"profile_id",minWidth:520},{title:"Name",slot:"profileName",minWidth:120},{title:"Memberships",slot:"memberships",minWidth:120}]},routerlist:function(){return[{to:"/",name:"Home"},{name:"Members"}]}},methods:{getList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={pageNum:1,showNum:100},t.prev=1,e.loading=!0,t.next=5,Object(a["a"])("/api/members",r);case 5:n=t.sent,e.mermbersList=null===(s=n.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.Profiles,console.log({res:n}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()}},created:function(){this.getList()}},l=o,c=(r("bef1"),r("2877")),u=Object(c["a"])(l,s,i,!1,null,"07a82600",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0965d9e6.a07d5193.js.map