(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-363f218e"],{1084:function(t,e,i){"use strict";var n=i("8161"),a=i.n(n);a.a},"71c2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-header"},[i("el-col",{attrs:{span:20}},[i("el-page-header",{staticStyle:{height:"40px"},on:{back:t.go_back}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"title"},slot:"title"},[t._v(" 返回 ")]),i("template",{staticStyle:{"font-size":"20px"},slot:"content"},[t._v(t._s(t.name)+" ")])],2)],1),i("el-col",{staticStyle:{height:"40px"},attrs:{span:4}},[i("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[i("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),i("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[i("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],1),i("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},a=[],r=i("f49f"),o=i("2b0e"),l=o["default"].extend({name:"my-header",components:{"my-setting":r["a"]},methods:{go_back:function(){this.myHistory.goBackItem()}},data:function(){return{dialogVisible:!1}},props:{name:String}}),c=l,s=i("2877"),d=Object(s["a"])(c,n,a,!1,null,"b8cb0ad8",null);e["a"]=d.exports},8161:function(t,e,i){},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),r=i("a691"),o=i("50c4"),l=i("7b0b"),c=i("65f0"),s=i("8418"),d=i("1dde"),h=i("ae40"),_=d("splice"),u=h("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!_||!u},{splice:function(t,e){var i,n,d,h,_,u,y=l(this),v=o(y.length),b=a(t,v),x=arguments.length;if(0===x?i=n=0:1===x?(i=0,n=v-b):(i=x-2,n=f(g(r(e),0),v-b)),v+i-n>p)throw TypeError(m);for(d=c(y,n),h=0;h<n;h++)_=b+h,_ in y&&s(d,h,y[_]);if(d.length=n,i<n){for(h=b;h<v-n;h++)_=h+n,u=h+i,_ in y?y[u]=y[_]:delete y[u];for(h=v;h>v-n+i;h--)delete y[h-1]}else if(i>n)for(h=v-n;h>b;h--)_=h+n-1,u=h+i-1,_ in y?y[u]=y[_]:delete y[u];for(h=0;h<i;h++)y[h+b]=arguments[h+2];return y.length=v-n+i,d}})},c3f4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"router",attrs:{id:"novel"}},[i("el-container",[i("el-header",{attrs:{height:"40px"}},[i("my-header",{attrs:{name:t.name},on:{"created-method":t.created_method,"after-save":t.get_setting_info}})],1),i("el-main",[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.info_loading,expression:"info_loading"}]},[i("div",{staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"title"},[t._v(t._s(t.name))])]),i("div",{staticStyle:{"text-align":"center"}},[i("p",[i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-user"}),t._v(t._s(t.author)+" ")]),i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-time"}),t._v(t._s(t.last_update_time)+" ")]),i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-timer"}),i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:function(e){return t.go_to_content(t.nid,t.last_cid)}}},[t._v(t._s(t.latest_chapter))])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.whether_collection,expression:"!whether_collection"}],staticStyle:{"margin-right":"10px"}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:t.collect}},[i("i",{staticClass:"el-icon-star-off"}),t._v(" 加入书架 ")])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:t.whether_collection,expression:"whether_collection"}],staticStyle:{"margin-right":"10px"}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:t.cancel_collect}},[i("i",{staticClass:"el-icon-star-on"}),t._v(" 移除书架 ")])],1)])])]),i("el-divider"),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.directory_loading,expression:"directory_loading"}]},[i("div",{staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"title"},[t._v("目录")])]),t._l(t.directory_list,(function(e,n){return i("el-col",{key:n,attrs:{span:8}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:function(i){return t.go_to_content(t.nid,e.cid)}}},[t._v(t._s(e.name)+" ")])],1)}))],2)],1)],1)],1)},a=[],r=(i("b0c0"),i("a434"),i("ac1f"),i("466d"),i("5319"),i("8196")),o=i("fa95"),l=i("5c96"),c=i("02cc"),s=i.n(c);function d(t,e,i){"0"===t?_(e,i,t):h(e,i,t)}function h(t,e,i){e.info_loading=!0,e.directory_loading=!0;var n=o["a"][i]["novel"].directory.url.replace("{##novel_id##}",t),a=o["a"][i].encoding;window.getHtml(n,a,(function(t){var n=o["a"][i]["novel"].directory,a=n.chapter_id,r=n.chapter_id_regex,l=n.slice_left,c=n.slice_right,d=s.a.load(t,{decodeEntities:!1});e.directory_list=[],d(a).each((function(t,i){var n=d(i),a=n.text(),o=n.attr("href");if(void 0!==o){var l=o.match(r);if(null!==l){var c=void 0===l.groups?null:l.groups["id"];null!==c&&e.directory_list.push({name:a,cid:c})}}}));var h=!1===l?0:l,_=!1===c?e.directory_list.length:c;e.directory_list=e.directory_list.splice(h,_),e.directory_loading=!1}));var r=o["a"][i]["novel"].info.url.replace("{##novel_id##}",t);window.getHtml(r,a,(function(t){var n=o["a"][i]["novel"].info,a=n.name,r=n.author,c=n.last_update_time,d=n.latest_chapter_id,h=n.latest_chapter_id_regex,_=s.a.load(t,{decodeEntities:!1,xmlMode:!0});e.name=_(a).text(),e.author=_(r).text(),e.last_update_time=_(c).text(),e.latest_chapter=_(d).text();var u=Object(o["b"])(_,d,h);null!==u?e.last_cid=u:Object(l["Message"])({showClose:!0,message:"网站解析发生错误",type:"error"}),e.info_loading=!1}))}function _(t,e,i){var n=Object(r["d"])(t,i);e.name=n.name,e.author=n.author,e.last_update_time="未知",e.latest_chapter=n.directory_list[n.directory_list.length-1].name,e.last_cid=String(n.directory_list[n.directory_list.length-1].cid),e.directory_list=n.directory_list,e.whether_collection=!0,e.directory_loading=!1,e.info_loading=!1}var u={get_directory_and_info:d},g=i("f49f"),f=i("71c2"),p=i("2b0e"),m=p["default"].extend({name:"novel",components:{"my-setting":g["a"],"my-header":f["a"]},data:function(){return{name:"",author:"",last_update_time:"",latest_chapter:"",last_cid:"",directory_list:[],whether_collection:!1,info_loading:!1,directory_loading:!1}},computed:{nid:function(){return this.$route.params.nid},type:function(){return String(this.$route.query.type)}},methods:{to_get_directory_and_info:function(){u.get_directory_and_info(this.type,this.nid,this)},go_to_content:function(t,e){this.myHistory.addNewItem({name:"content",params:{nid:t,cid:e},query:{type:String(this.type)}})},collect:function(){var t={_id:this.nid,name:this.name,author:this.author,read_chapter:this.directory_list[0],bookmark_list:[],type:this.type};Object(r["a"])(t),this.whether_collection=Object(r["b"])(this.nid,this.type)},cancel_collect:function(){Object(r["h"])(this.nid,this.type),this.whether_collection=Object(r["b"])(this.nid,this.type)},created_method:function(){var t=this;this.whether_collection=Object(r["b"])(this.nid,this.type),window.utools.setSubInput((function(e){var i=e.text;t.myHistory.addNewItem({name:"search",query:{name:i,type:t.type}})}),"搜索在线小说"),document.onkeydown=null,window.utools.subInputBlur(),this.to_get_directory_and_info()},get_setting_info:function(){}},created:function(){this.created_method()}}),y=m,v=(i("1084"),i("2877")),b=Object(v["a"])(y,n,a,!1,null,"7e0fa50f",null);e["default"]=b.exports}}]);