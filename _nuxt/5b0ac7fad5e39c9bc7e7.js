(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(e,t,r){var content=r(251);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(45).default)("cc94a3d8",content,!0,{sourceMap:!1})},250:function(e,t,r){"use strict";var n=r(246),o=r.n(n);t.default=o.a},251:function(e,t,r){(e.exports=r(44)(!1)).push([e.i,"main{margin:20px 40px}",""])},255:function(e,t,r){"use strict";r.r(t);r(6),r(4),r(3),r(2),r(5),r(15);var n=r(0);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}var c={data:function(){return{users:[],tableUsers:[],showAddUser:!1,newUser:{name:"",email:"",password:"12345678",permission:"employeer"},permissions:[{text:"Administrador",value:"admin"},{text:"Funcionário",value:"employeer"}]}},mounted:function(){var e=this;this.$fireStore.collection("users").get().then(function(t){t.docs.forEach(function(t){var r=t.data();e.users.push(l({id:t.id},r)),e.tableUsers.push({Nome:r.name,"E-mail":r.email,"Permissão":r.permission})})})},methods:{addUser:function(){this.$fireStore.collection("users").doc().set(l({},this.newUser)),this.$fireAuth.createUserWithEmailAndPassword(this.newUser.email,"12345678"),this.tableUsers.unshift({Nome:this.newUser.name,"E-mail":this.newUser.email,"Permissão":this.newUser.permission})}}},m=r(250),d=r(43);var component=Object(d.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"d-flex flex-column align-items-start"},[r("div",{staticClass:"d-flex flex-row justify-content-between",staticStyle:{"margin-bottom":"30px",width:"100%"}},[r("h2",[e._v("Usuários")]),e._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.add-user",modifiers:{"add-user":!0}}],staticStyle:{"margin-left":"30px"},attrs:{variant:"warning"}},[e._v("\n\t\t\t\tAdicionar\n\t\t\t")])],1),e._v(" "),r("b-table",{attrs:{items:e.tableUsers}}),e._v(" "),r("b-modal",{attrs:{id:"add-user",title:"Adicionar usuário"},on:{ok:e.addUser}},[r("b-form",{on:{submit:e.addUser}},[r("b-form-group",{attrs:{id:"input-group-1",label:"E-mail","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Informe seu e-mail"},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Nome","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Informe seu nome"},model:{value:e.newUser.name,callback:function(t){e.$set(e.newUser,"name",t)},expression:"newUser.name"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-3",label:"Permissão","label-for":"input-3"}},[r("b-form-select",{attrs:{id:"input-3",options:e.permissions,required:""},model:{value:e.newUser.permission,callback:function(t){e.$set(e.newUser,"permission",t)},expression:"newUser.permission"}})],1)],1)],1)],1)},[],!1,function(e){this.$style=m.default.locals||m.default},null,null);t.default=component.exports}}]);