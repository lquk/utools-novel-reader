(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3764023a"],{"0713":function(t,e,i){},"1a5e":function(t,e,i){"use strict";var n=i("4244"),a=i.n(n);a.a},4244:function(t,e,i){},"71c2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"my-header"},[i("span",{staticClass:"back",on:{click:t.go_back}},[i("i",{staticClass:"el-icon-back"}),t._v("返回 ")]),i("span",{staticClass:"name"},[t._v(t._s(t.name))]),i("span",{staticClass:"link"},[i("el-link",{staticClass:"my-link",attrs:{underline:!1},on:{click:t.goToBookshelf}},[i("svg",{staticClass:"icon my-icon",staticStyle:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M832 928H192c-52.8 0-96-43.2-96-96V672c0-17.6 14.4-32 32-32s32 14.4 32 32v160c0 17.6 14.4 32 32 32h640c17.6 0 32-14.4 32-32V672c0-17.6 14.4-32 32-32s32 14.4 32 32v160c0 52.8-43.2 96-96 96zM256 800c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32s32 14.4 32 32v672c0 17.6-14.4 32-32 32z m160 0c-17.6 0-32-14.4-32-32V224c0-17.6 14.4-32 32-32s32 14.4 32 32v544c0 17.6-14.4 32-32 32z m368 0c-16 0-28.8-11.2-32-27.2l-94.4-536c-3.2-17.6 8-33.6 25.6-36.8 17.6-3.2 33.6 8 36.8 25.6l94.4 536c3.2 17.6-8 33.6-25.6 36.8-1.6 1.6-3.2 1.6-4.8 1.6z m-208 0c-17.6 0-32-14.4-32-32V352c0-17.6 14.4-32 32-32s32 14.4 32 32v416c0 17.6-14.4 32-32 32z"}})])]),i("el-link",{staticClass:"my-link",attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[i("i",{staticClass:"el-icon-s-tools my-icon"})]),i("el-link",{staticClass:"my-link",attrs:{underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[i("i",{staticClass:"el-icon-refresh-right my-icon"})])],1)]),i("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},a=[],r=i("f49f"),s=i("2b0e"),c=s["default"].extend({name:"my-header",components:{"my-setting":r["a"]},methods:{go_back:function(){this.myHistory.goBackItem()},goToBookshelf:function(){this.myHistory.addNewItem({name:"bookshelf"})}},data:function(){return{dialogVisible:!1}},props:{name:String}}),o=c,l=(i("f9d8"),i("2877")),d=Object(l["a"])(o,n,a,!1,null,"45dddf45",null);e["a"]=d.exports},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),r=i("a691"),s=i("50c4"),c=i("7b0b"),o=i("65f0"),l=i("8418"),d=i("1dde"),u=i("ae40"),h=d("splice"),_=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!_},{splice:function(t,e){var i,n,d,u,h,_,g=c(this),y=s(g.length),b=a(t,y),w=arguments.length;if(0===w?i=n=0:1===w?(i=0,n=y-b):(i=w-2,n=f(m(r(e),0),y-b)),y+i-n>p)throw TypeError(v);for(d=o(g,n),u=0;u<n;u++)h=b+u,h in g&&l(d,u,g[h]);if(d.length=n,i<n){for(u=b;u<y-n;u++)h=u+n,_=u+i,h in g?g[_]=g[h]:delete g[_];for(u=y;u>y-n+i;u--)delete g[u-1]}else if(i>n)for(u=y-n;u>b;u--)h=u+n-1,_=u+i-1,h in g?g[_]=g[h]:delete g[_];for(u=0;u<i;u++)g[u+b]=arguments[u+2];return g.length=y-n+i,d}})},c3f4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"router",attrs:{id:"novel"}},[i("my-header",{staticClass:"header",attrs:{name:t.name},on:{"created-method":t.created_method,"after-save":t.get_setting_info}}),i("div",{staticClass:"main"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.info_loading,expression:"info_loading"}],staticClass:"info"},[i("span",[i("i",{staticClass:"el-icon-user"}),t._v(t._s(t.author)+" ")]),i("span",[i("i",{staticClass:"el-icon-time"}),t._v(t._s(t.last_update_time)+" ")]),i("span",[i("i",{staticClass:"el-icon-timer"}),i("el-link",{attrs:{underline:!1},on:{click:function(e){return t.go_to_content(t.nid,t.last_cid)}}},[t._v(t._s(t.latest_chapter))])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.whether_collection,expression:"!whether_collection"}]},[i("i",{staticClass:"el-icon-star-off"}),i("el-link",{attrs:{underline:!1,disabled:t.info_loading||t.directory_loading},on:{click:t.collect}},[t._v("加入书架")])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:t.whether_collection,expression:"whether_collection"}]},[i("i",{staticClass:"el-icon-star-on"}),i("el-link",{attrs:{underline:!1},on:{click:t.cancel_collect}},[t._v("移除书架")])],1),i("el-link",{attrs:{underline:!1},on:{click:function(e){t.directory_list=t.directory_list.reverse()}}},[t._v("更换排序")])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.directory_loading,expression:"directory_loading"}],staticClass:"directory"},t._l(t.directory_list,(function(e,n){return i("el-col",{key:n,attrs:{span:8}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:function(i){return t.go_to_content(t.nid,e.cid)}}},[t._v(t._s(e.name)+" ")])],1)})),1)])],1)},a=[],r=(i("b0c0"),i("a434"),i("ac1f"),i("466d"),i("5319"),i("96cf"),i("1da1")),s=i("8196"),c=i("fa95"),o=i("5c96"),l=i("02cc");function d(t,e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function t(e,i){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("0"!==e){t.next=4;break}n=m(i,e),t.next=7;break;case 4:return t.next=6,h(i,e);case 6:n=t.sent;case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function h(t,e){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function t(e,i){var n,a,r,s,d,u,h,_,m,f,p,v,g,y,b,w,k,x,C,O,j,S,V,M,N,E;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=c["a"][i].encoding,a=c["a"][i]["novel"].directory.url.replace("{##novel_id##}",e),t.next=4,Object(c["b"])(a,n);case 4:return r=t.sent,s=c["a"][i]["novel"].directory,d=s.chapter_id,u=s.chapter_id_regex,h=s.slice_left,_=s.slice_right,m=l["load"](r,{decodeEntities:!1}),f=[],m(d).each((function(t,e){var i=m(e),n=i.text(),a=i.attr("href");if(void 0!==a){var r=a.match(u);if(null!==r){var s=void 0===r.groups?null:r.groups["id"];null!==s&&f.push({name:n,cid:s})}}})),p=!1===h?0:h,v=!1===_?f.length:_,f=f.splice(p,v),g=c["a"][i]["novel"].info.url.replace("{##novel_id##}",e),t.next=15,Object(c["b"])(g,n);case 15:return y=t.sent,b=c["a"][i]["novel"].info,w=b.name,k=b.author,x=b.last_update_time,C=b.latest_chapter_id,O=b.latest_chapter_id_regex,j=l["load"](y,{decodeEntities:!1,xmlMode:!0}),S=j(w).text(),V=j(k).text(),M=j(x).text(),N=j(C).text(),E=Object(c["c"])(j,C,O),null===E&&(E="",Object(o["Message"])({showClose:!0,message:"网站解析发生错误",type:"error"})),t.abrupt("return",{name:S,author:V,last_update_time:M,latest_chapter:N,last_cid:E,directory_list:f});case 25:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function m(t,e){var i=Object(s["d"])(t,e);return{name:i.name,author:i.author,last_update_time:"未知",latest_chapter:i.directory_list[i.directory_list.length-1].name,last_cid:String(i.directory_list[i.directory_list.length-1].cid),directory_list:i.directory_list}}var f=i("f49f"),p=i("71c2"),v=i("2b0e"),g=v["default"].extend({name:"novel",components:{"my-setting":f["a"],"my-header":p["a"]},data:function(){return{name:"",author:"",last_update_time:"",latest_chapter:"",last_cid:"",directory_list:[],whether_collection:!1,info_loading:!1,directory_loading:!1}},computed:{nid:function(){return this.$route.params.nid},type:function(){return String(this.$route.query.type)}},methods:{to_get_directory_and_info:function(){var t=this;this.info_loading=!0,this.directory_loading=!0,d(this.type,this.nid).then((function(e){var i=e.name,n=e.author,a=e.latest_chapter,r=e.last_cid,s=e.last_update_time,c=e.directory_list;t.name=i,t.author=n,t.last_cid=r,t.last_update_time=s,t.latest_chapter=a,t.directory_list=c,t.info_loading=!1,t.directory_loading=!1}))},go_to_content:function(t,e){this.myHistory.addNewItem({name:"content",params:{nid:t,cid:e},query:{type:String(this.type)}})},collect:function(){var t={_id:this.nid,name:this.name,author:this.author,read_chapter:this.directory_list[0],bookmark_list:[],type:this.type};Object(s["a"])(t),this.whether_collection=Object(s["b"])(this.nid,this.type)},cancel_collect:function(){Object(s["h"])(this.nid,this.type),this.whether_collection=Object(s["b"])(this.nid,this.type)},created_method:function(){var t=this;this.whether_collection=Object(s["b"])(this.nid,this.type),window.utools.setSubInput((function(e){var i=e.text;t.myHistory.addNewItem({name:"search",query:{name:i,type:t.type}})}),"搜索在线小说"),document.onkeydown=null,window.utools.subInputBlur(),this.to_get_directory_and_info()},get_setting_info:function(){}},created:function(){this.created_method()}}),y=g,b=(i("1a5e"),i("2877")),w=Object(b["a"])(y,n,a,!1,null,"4793b6e9",null);e["default"]=w.exports},f9d8:function(t,e,i){"use strict";var n=i("0713"),a=i.n(n);a.a}}]);