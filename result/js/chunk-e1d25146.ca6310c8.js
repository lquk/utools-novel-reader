(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1d25146"],{"1efa":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"router",attrs:{id:"content"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{attrs:{height:"40px"}},[n("my-header",{attrs:{name:t.novel_name+"-"+t.chapter_name},on:{"created-method":t.created_method,"after-save":t.get_setting_info}})],1),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.style.theme},[n("div",{staticStyle:{"text-align":"center","margin-bottom":"10px"}},[n("h4",{staticClass:"title",attrs:{id:"title"}},[t._v(t._s(t.chapter_name))])]),n("div",{staticStyle:{"text-align":"center"}},[n("p",{staticStyle:{"margin-block-end":"0"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.pre_cid,expression:"pre_cid!==-1"}],staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-caret-left"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_content(t.nid,t.pre_cid)}}},[t._v("上一章")])],1),n("span",{staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-menu"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_novel(t.nid)}}},[t._v("目录")])],1),n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.next_cid,expression:"next_cid!==-1"}],staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-caret-right"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_content(t.nid,t.next_cid)}}},[t._v("下一章")])],1)])]),n("div",{staticClass:"content"},t._l(t.content_list,(function(e,i){return n("p",{key:i,style:"font-size:"+t.style.fort_size+"px"},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticStyle:{"text-align":"center"}},[n("p",{staticStyle:{"margin-block-start":"0"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.pre_cid,expression:"pre_cid!==-1"}],staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-caret-left"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_content(t.nid,t.pre_cid)}}},[t._v("上一章")])],1),n("span",{staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-menu"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_novel(t.nid)}}},[t._v("目录")])],1),n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.next_cid,expression:"next_cid!==-1"}],staticStyle:{"margin-right":"10px"}},[n("i",{staticClass:"el-icon-caret-right"}),n("el-link",{attrs:{target:"_blank",underline:!1,type:"gray-theme"===t.style.theme?"info":"default"},on:{click:function(e){return t.go_to_content(t.nid,t.next_cid)}}},[t._v("下一章")])],1)])])])],1)],1)},a=[],o=(n("ac1f"),n("5319"),n("99af"),n("4160"),n("d3b7"),n("25f0"),n("466d"),n("159b"),n("9558"));function r(t,e,n,i){switch(t){case"1":s(e,n,i);break;case"0":break}}function s(t,e,n){n.loading=!0,n.axios.get("https://www.meegoq.com/book/".concat(t,"_").concat(e,".html")).then((function(t){n.loading=!1;var e=(new n.xmldom.DOMParser).parseFromString(t.data);n.chapter_name=n.xpath.select("/html/body/article/header/h1/text()",e)[0].toString(),n.novel_name=n.xpath.select("/html/body/article/header/div/span[1]/a/text()",e)[0].toString(),n.content_list=[],n.pre_cid=n.xpath.select1("/html/body/article/div[2]/ul/li[1]/a/@href",e).value.match(Object(o["a"])(/_([0-9]+).html/,{id:1})),null===n.pre_cid?n.pre_cid=-1:n.pre_cid=n.pre_cid.groups["id"],n.next_cid=n.xpath.select1("/html/body/article/div[2]/ul/li[6]/a/@href",e).value.match(Object(o["a"])(/_([0-9]+).html/,{id:1})),null===n.next_cid?n.next_cid=-1:n.next_cid=n.next_cid.groups["id"];var i=n.xpath.select('//*[@id="content"]/text()',e);i.forEach((function(t){var e=/^　*$/;e.test(t.toString())||n.content_list.push(t.toString())})),n.update_reading_section()})).catch((function(t){n.loading=!1,console.log(t)}))}var c={get_content:r},l=n("71c2"),d={name:"content",components:{"my-header":l["a"]},created:function(){this.created_method()},data:function(){return{loading:!1,novel_name:"",chapter_name:"",content_list:[],pre_cid:-1,next_cid:-1,remind:{collect_remind:3,update_reading_section:3,settings_saved_remind:3},style:{theme:"base-theme",fort_size:18}}},methods:{go_back:function(){this.$router.go(-1)},get_text_and_info:function(){c.get_content(this.type,this.nid,this.cid,this)},go_to_novel:function(t){this.$router.push({name:"novel",params:{nid:t},query:{type:String(this.type)}})},go_to_content:function(t,e){this.$router.replace({name:"content",params:{nid:t,cid:e},query:{type:String(this.type)}}),this.get_text_and_info()},update_reading_section:function(){var t=window.utools.db.get(this.nid);if(null!==t){t["read_chapter"]={cid:this.cid,name:this.chapter_name};var e=window.utools.db.put(t);e.hasOwnProperty("error")&&e["error"]?this.remind.update_reading_section>=2&&this.$notify({title:"错误",message:"更新最后阅读章节失败",duration:0,type:"error"}):this.remind.update_reading_section>=3&&this.$message({showClose:!0,message:"更新最后阅读章节成功",type:"success"})}document.getElementById("title").scrollIntoView()},get_setting_info:function(){var t=this;this.remind=window.utools.db.get("setting").remind,this.style=window.utools.db.get("setting").style;var e=window.utools.db.get("setting");e.keyborad.using_keyboard?document.onkeydown=function(n){n.key===e.keyborad.pre_key?-1!==t.pre_cid?t.go_to_content(t.nid,t.pre_cid):t.$message({showClose:!0,message:"没有上一章啦",type:"error"}):n.key===e.keyborad.next_key&&(-1!==t.next_cid?t.go_to_content(t.nid,t.next_cid):t.$message({showClose:!0,message:"没有下一章啦",type:"error"}))}:document.onkeydown=void 0},created_method:function(){var t=this;window.utools.setSubInput((function(e){var n=e.text;t.$router.push({name:"search",query:{name:n,type:"1"}})}),"搜索在线小说"),this.remind=window.utools.db.get("setting").remind,this.style=window.utools.db.get("setting").style;var e=window.utools.db.get("setting");this.get_text_and_info(),e.keyborad.using_keyboard?document.onkeydown=function(n){n.key===e.keyborad.pre_key?-1!==t.pre_cid?t.go_to_content(t.nid,t.pre_cid):t.$message({showClose:!0,message:"没有上一章啦",type:"error"}):n.key===e.keyborad.next_key&&(-1!==t.next_cid?t.go_to_content(t.nid,t.next_cid):t.$message({showClose:!0,message:"没有下一章啦",type:"error"}))}:document.onkeydown=void 0,window.utools.subInputBlur()}},computed:{nid:function(){return this.$route.params.nid},cid:function(){return this.$route.params.cid},type:function(){return this.$route.query.type}}},u=d,h=(n("3619"),n("2877")),g=Object(h["a"])(u,i,a,!1,null,"04882aaf",null);e["default"]=g.exports},"33fd":function(t,e,n){},3619:function(t,e,n){"use strict";var i=n("33fd"),a=n.n(i);a.a},"71c2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("el-col",{attrs:{span:"20"}},[n("el-page-header",{staticStyle:{height:"40px"},on:{back:t.go_back}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"title"},slot:"title"},[t._v(" 返回 ")]),n("template",{staticStyle:{"font-size":"20px"},slot:"content"},[t._v(t._s(t.name)+" ")])],2)],1),n("el-col",{staticStyle:{height:"40px"},attrs:{span:"4"}},[n("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[n("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),n("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[n("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],1),n("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},a=[],o=n("f49f"),r={name:"header",components:{"my-setting":o["a"]},methods:{go_back:function(){this.$router.go(-1)}},data:function(){return{dialogVisible:!1}},props:{name:String}},s=r,c=n("2877"),l=Object(c["a"])(s,i,a,!1,null,"340cc26e",null);e["a"]=l.exports},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),o=n("e8b5"),r=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),d=n("65f0"),u=n("1dde"),h=n("b622"),g=n("2d00"),_=h("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",f=g>=51||!a((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),y=u("concat"),v=function(t){if(!r(t))return!1;var e=t[_];return void 0!==e?!!e:o(t)},x=!f||!y;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,a,o,r=s(this),u=d(r,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?r:arguments[e],v(o)){if(a=c(o.length),h+a>m)throw TypeError(p);for(n=0;n<a;n++,h++)n in o&&l(u,h,o[n])}else{if(h>=m)throw TypeError(p);l(u,h++,o)}return u.length=h,u}})}}]);
//# sourceMappingURL=chunk-e1d25146.ca6310c8.js.map