(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96427ad8"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4e22":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"router",attrs:{id:"search"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",[n("my-navigation",{attrs:{"active-index":"0"},on:{"created-method":t.created_method,"after-save":function(e){return t.console.log(1)}}})],1),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticStyle:{"text-align":"center"}},[n("h4",{staticClass:"title"},[t._v("搜索:"+t._s(this.$route.query.name))])]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.search_list,border:"",stripe:!0}},[n("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){return t.go_to_novel(e.row.novel_id)}}},[t._v(t._s(e.row.name)+" ")])]}}])},[n("template",{slot:"header"},[t._v("小说名")])],2),n("el-table-column",{attrs:{prop:"author",label:"作者"}}),n("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){return t.go_to_content(e.row.novel_id,e.row.latest_chapter_id)}}},[t._v(" "+t._s(e.row.latest_chapter_name)+" ")])]}}])},[n("template",{slot:"header"},[t._v("最后章节")])],2),n("el-table-column",{attrs:{prop:"update_time",label:"更新时间"}})],1)],1)],1)],1)},i=[],o=(n("b0c0"),n("ac1f"),n("841c"),n("f11d")),r=(n("466d"),n("9558"));function s(t,e,n){switch(t){case"1":c(e,n);break;case"0":break}}function c(t,e){e.loading=!0,e.search_list=[],window.getHtml("https://www.meegoq.com/search.htm?keyword="+encodeURI(t),"utf-8",(function(t){e.loading=!1;var a=n("02cc"),i=a.load(t,{decodeEntities:!1});i("body > section > div.left > section > ul > li").each((function(t,n){var a=i.load(i.html(n),{decodeEntities:!1}),o=a("span.n2 > a").text(),s=a("span.n2 > a").attr("href"),c=a("span.a2 > a").text(),l=a("span.c2 > a").text(),u=a("span.c2 > a").attr("href"),d=a("span.t").text();void 0!==s&&(s=s.match(Object(r["a"])(/info([0-9]+)\.html/,{id:1})).groups["id"],u=u.match(Object(r["a"])(/_([0-9]+).html/,{id:1})).groups["id"],e.search_list.push({name:o,novel_id:s,author:c,latest_chapter_name:l,latest_chapter_id:u,update_time:d}))}))}))}var l={search:s},u={name:"search",components:{"my-navigation":o["a"]},data:function(){return{search_name:"",loading:!1,search_list:[]}},methods:{search:function(){l.search(this.type,String(this.$route.query.name),this)},go_to_novel:function(t){this.$router.push({name:"novel",params:{nid:t},query:{type:String(this.type)}})},go_to_content:function(t,e){this.$router.push({name:"content",params:{nid:t,cid:e},query:{type:String(this.type)}})},created_method:function(){var t=this;this.plugin_enter(),window.utools.setSubInput((function(e){var n=e.text;t.search_name=n}),"搜索在线小说",!0),document.onkeydown=function(e){"Enter"===e.key&&t.$router.push({name:"search",query:{name:t.search_name,type:String(t.type)}})},void 0!==this.$route.query.name&&this.search()},plugin_enter:function(){var t=this;window.utools.onPluginEnter((function(e){var n=e.code,a=e.type,i=e.payload;e.optional;"search"===n?window.utools.setSubInput((function(e){var n=e.text;t.search_name=n}),"搜索在线小说",!0):"bookshelf"===n?t.$router.push({name:"bookshelf"}):"read_novel"===n&&(console.log(n,a,i),t.$router.push({name:"read_file",query:{path:i[0].path}}))}))}},computed:{type:function(){return this.$route.query.type}},created:function(){this.created_method()},watch:{$route:"search"}},d=u,h=(n("f854"),n("2877")),f=Object(h["a"])(d,a,i,!1,null,"76fe02ce",null);e["default"]=f.exports},"841c":function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),o=n("1d80"),r=n("129f"),s=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var o=i(t),c=String(this),l=o.lastIndex;r(l,0)||(o.lastIndex=0);var u=s(o,c);return r(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},d08b:function(t,e,n){},f11d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Navigation"},[n("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.select}},[t._l(t.navigation_item,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:String(a)}},[t._v(t._s(e.name)+" ")])})),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[n("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[n("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],2),n("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},i=[],o=n("f49f"),r={name:"Navigation",components:{"my-setting":o["a"]},data:function(){return{navigation_item:[{name:"搜索",path:{name:"search",query:{type:"1"}}},{name:"书架",path:{name:"bookshelf"}},{name:"读取文件",path:{name:"read_file"}},{name:"测试",path:{name:"text"}}],dialogVisible:!1}},props:{activeIndex:String},methods:{select:function(t){this.$router.push(this.navigation_item[t].path)}}},s=r,c=n("2877"),l=Object(c["a"])(s,a,i,!1,null,"538a9663",null);e["a"]=l.exports},f854:function(t,e,n){"use strict";var a=n("d08b"),i=n.n(a);i.a}}]);