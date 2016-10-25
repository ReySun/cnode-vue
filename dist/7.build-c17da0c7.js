webpackJsonp([7],{104:function(e,t,n){var a=n(81);"string"==typeof a&&(a=[[e.i,a,""]]),n(11)(a,{}),a.locals&&(e.exports=a.locals)},31:function(e,t,n){var a,o;n(104),a=n(68);var s=n(94);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.name=o.name||"login",o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=a},35:function(e,t,n){"use strict";(function(e){t.default={data:function(){return{user:{loginname:localStorage.loginname||"",avatar:localStorage.avatar||"",id:localStorage.id||"",accesstoken:localStorage.accesstoken||"",score:localStorage.score||"",message:0},curTab:this.$route.name||"index"}},computed:{},created:function(){this.user.loginname&&this.fetchUserInfo(),this.user.loginname&&this.fetchMessage()},mounted:function(){},methods:{fetchUserInfo:function(){var t=this,n=this;e.ajax({url:"https://cnodejs.org/api/v1/user/"+n.user.loginname,type:"GET"}).done(function(e){e&&e.success&&(t.user.score=localStorage.score=e.data.score)}).fail(function(e){})},fetchMessage:function(){var t=this,n=this;e.ajax({url:"https://cnodejs.org/api/v1/message/count/",type:"GET",data:{accesstoken:n.user.accesstoken}}).done(function(e){e&&e.success&&(t.user.message=localStorage.message=e.data)}).fail(function(e){})},logout:function(){var e=this;localStorage.clear(),this.$message({showClose:!0,message:"退出成功",type:"success",onClose:function(){e.$route.matched.some(function(e){return e.meta.requiresAuth})?e.$router.push({name:"index",query:{tab:"all"}}):window.location.reload()}})}},components:{}}}).call(t,n(2))},36:function(e,t,n){t=e.exports=n(10)(),t.push([e.i,"\n#header {\n  background-color: #324057;\n}\n#header #logo {\n    width: 120px;\n    padding: 10px 55px;\n    height: 28px;\n    display: block;\n    float: left;\n}\n#header #logo img {\n      max-width: 100%;\n      max-height: 100%;\n}\n#header #navbar {\n    background-color: transparent;\n}\n#header #navbar .avatar {\n      width: 30px;\n      height: 30px;\n}\n#header #navbar .mark {\n      margin-top: 8px;\n      line-height: 1;\n      float: right;\n}\n",""])},37:function(e,t,n){var a,o;n(39),a=n(35);var s=n(38);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.name=o.name||"header",o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=a},38:function(module,exports){module.exports={render:function(){with(this)return _h("header",{attrs:{id:"header"}},[_m(0)," ",_h("el-menu",{staticClass:"el-menu-demo",attrs:{id:"navbar",theme:"dark","default-active":curTab,mode:"horizontal",router:""}},[_h("el-menu-item",{attrs:{index:"index",route:{name:"index",query:{tab:"all"}}}},["首页"])," ",_h("el-menu-item",{attrs:{index:"api",route:{name:"api"}}},["API"])," ",_h("el-menu-item",{attrs:{index:"about",route:{name:"about"}}},["关于"])," ",user.loginname?_e():_h("el-menu-item",{attrs:{index:"login",route:{name:"login"}}},["登录"])," ",user.loginname?_h("el-submenu",{attrs:{index:"user"}},[_h("template",{slot:"title"},[_h("img",{staticClass:"avatar",attrs:{src:user.avatar,alt:""}}),_s(user.loginname),user.message?_h("el-badge",{staticClass:"mark",attrs:{max:99},domProps:{value:user.message}}):_e()])," ",_h("el-menu-item",{attrs:{index:"",route:{name:"user",params:{name:user.loginname}}}},["个人主页"])," ",_h("el-menu-item",{attrs:{index:""}},[_m(1),_s(user.score)])," ",_h("el-menu-item",{attrs:{index:"",route:{name:"message"}}},[_m(2),"消息",_h("el-badge",{staticClass:"mark",attrs:{max:99},domProps:{value:user.message}})])," ",_h("el-menu-item",{attrs:{index:""},nativeOn:{click:function(e){logout(e)}}},[_m(3),"退出"])]):_e()," ",user.loginname?_h("el-menu-item",{attrs:{index:"newtopic",route:{name:"newtopic"}}},["发布话题"]):_e()])])},staticRenderFns:[function(){with(this)return _h("a",{attrs:{id:"logo"}},[_h("img",{attrs:{src:"https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",alt:""}})])},function(){with(this)return _h("span",["积分："])},function(){with(this)return _h("i",{staticClass:"el-icon-message"})},function(){with(this)return _h("i",{staticClass:"el-icon-upload2"})}]}},39:function(e,t,n){var a=n(36);"string"==typeof a&&(a=[[e.i,a,""]]),n(11)(a,{}),a.locals&&(e.exports=a.locals)},40:function(e,t,n){"use strict";t.default={data:function(){return{}},props:["showLoading"]}},41:function(e,t,n){t=e.exports=n(10)(),t.push([e.i,"\n.el-loading-demo {\n  border: 1px solid #999;\n  border-radius: 4px;\n  height: 100px;\n}\n",""])},42:function(e,t,n){var a,o;n(44),a=n(40);var s=n(43);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.name=o.name||"loading",o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=a},43:function(module,exports){module.exports={render:function(){with(this)return _h("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:showLoading,expression:"showLoading",modifiers:{fullscreen:!0}}]})},staticRenderFns:[]}},44:function(e,t,n){var a=n(41);"string"==typeof a&&(a=[[e.i,a,""]]),n(11)(a,{}),a.locals&&(e.exports=a.locals)},68:function(e,t,n){"use strict";(function(e){var a=n(37),o=n.n(a),s=n(42),i=n.n(s);t.default={data:function(){return{at:"",alert:{title:"",type:"",description:""},loading:{showLoading:!1,content:"loading...",show:function(){this.showLoading=!0},hide:function(){this.showLoading=!1}},redirect:this.$route.query.redirect||""}},computed:{},mounted:function(){},methods:{goBack:function(){var e=decodeURIComponent(this.$route.query.redirect);this.$router.replace(e)},login:function(){var t=this,n=this;return""===n.at?void n.$message({showClose:!0,message:"token格式错误，可从官网个人设置页面获取",type:"error"}):(this.loading.show(),void e.ajax({type:"POST",url:"https://cnodejs.org/api/v1/accesstoken",dataType:"json",data:{accesstoken:n.at}}).done(function(e){return t.loading.hide(),e&&e.success?(localStorage.loginname=e.loginname,localStorage.avatar=e.avatar_url,localStorage.id=e.id,localStorage.accesstoken=n.at,void n.$message({showClose:!0,message:"登录成功",type:"success",onClose:function(){var e=decodeURIComponent(n.$route.query.redirect||"/");n.$router.replace(e)}})):void n.$message({showClose:!0,message:"登录出错，请稍候再试！",type:"warning"})}).fail(function(e){t.loading.hide(),n.$message({showClose:!0,message:"登录出错，请稍候再试！",type:"warning"})}))}},components:{cvHead:o.a,cvLoading:i.a}}}).call(t,n(2))},81:function(e,t,n){t=e.exports=n(10)(),t.push([e.i,"\n.input-area {\n  position: relative;\n  text-align: center;\n  width: 50%;\n  margin-left: 25%;\n}\n",""])},94:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("cvHead")," ",_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20}},[_h("el-col",{attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("header",{slot:"header",staticClass:"clearfix",attrs:{id:"panel-header"}},[_m(0)])," ",_h("main",[_h("div",{staticClass:"input-area"},[_h("el-form",{ref:"form",attrs:{"label-width":"80px"},on:{submit:function(e){e.preventDefault(),login(e)}}},[_h("el-form-item",{attrs:{label:"token"}},[_h("el-input",{directives:[{name:"model",rawName:"v-model",value:at,expression:"at"}],attrs:{maxlength:36,minlength:36,placeholder:"请输入个人accesstoken..."},domProps:{value:at},on:{input:function(e){at=e}}})])," ",_h("el-form-item",[redirect?_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){goBack(e)}}},[_m(1),"返回上一页"]):_e()," ",_h("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){login(e)}}},["登录"])])])])])])])])])])," ",_h("cvLoading",{attrs:{showLoading:loading.showLoading,content:loading.content}})])},staticRenderFns:[function(){with(this)return _h("span",["登录"])},function(){with(this)return _h("i",{staticClass:"el-icon-caret-left"})}]}}});