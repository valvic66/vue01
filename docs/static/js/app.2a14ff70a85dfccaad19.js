webpackJsonp([0],{"6SbE":function(t,e){},"6siS":function(t,e){},"93G+":function(t,e){},Cibm:function(t,e){},DVwi:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"break"},[this._v("\n  - Break between examples -\n")])},staticRenderFns:[]};var s=n("VU/8")({name:"Break",props:[""],data:function(){return{}}},a,!1,function(t){n("6siS")},"data-v-7846ab5b",null).exports,o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"instant-search"},[n("h1",[t._v("Instant Search")]),t._v(" "),n("div",{staticClass:"search-bar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{type:"text",placeholder:"Enter Apple product search"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}})]),t._v(" "),n("ul",t._l(t.filteredArticles,function(e,i){return n("li",{key:i,staticClass:"data-item"},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:e.image}})]),t._v(" "),n("p",[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var c=n("VU/8")({name:"InstantSearch",data:function(){return{searchString:"",articles:[{title:"Apple iPhone 6",url:"https://www.emag.ro/search/iphone",image:"https://s4emagst.akamaized.net/products/5617/5616445/images/res_ab736a4f78e2a562ad01325752875057_200x200_c0e1.jpg"},{title:"Apple PC iMac 27",url:"https://www.emag.ro/search/iMac",image:"https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg"},{title:"Apple iPad 9.7",url:"https://www.emag.ro/search/iPad",image:"https://s4emagst.akamaized.net/products/5483/5482323/images/res_1f4e902c1a93fa6c0bdb86d7d67a23f3_200x200_agk8.jpg"},{title:"Apple MacBoook Pro 15",url:"https://www.emag.ro/search/macbook",image:"https://s5emagst.akamaized.net/products/8/7048/images/img233743_05062013155008_0_200x200_79gq.jpg"}]}},computed:{filteredArticles:function(){var t=this.articles,e=this.searchString;return e?(e=e.trim().toLowerCase(),t=t.filter(function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t})):t}}},o,!1,function(t){n("93G+")},"data-v-3d6cb83b",null).exports,r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"button",class:{small:this.isSmall,large:this.isLarge},on:{click:this.onButtonClick}},[this._v("\n    "+this._s(this.buttontitle)+"\n")])},staticRenderFns:[]};var l={name:"ToDo",props:["title"],data:function(){return{todos:[{content:"HTML",done:!0},{content:"CSS",done:!0},{content:"JavaScript",done:!0},{content:"Vue JS",done:!1}],inputText:""}},methods:{addTask:function(){""!==this.inputText&&(this.todos.push({content:this.inputText,done:!1}),this.inputText="")},deleteTask:function(t){this.todos.splice(t,1)}},components:{MyButton:n("VU/8")({name:"MyButton",props:["buttontitle","isSmall","isLarge"],data:function(){return{}},methods:{onButtonClick:function(){this.$emit("clicked")}}},r,!1,function(t){n("6SbE")},"data-v-2650a2ad",null).exports}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todos"},[n("h1",{staticClass:"todos_title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:"Enter the new todo task"},domProps:{value:t.inputText},on:{keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addTask(e)},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t._v(" "),n("my-button",{staticClass:"my-button",attrs:{buttontitle:"Add Task",isSmall:!0},on:{clicked:t.addTask}})],1),t._v(" "),n("h4",[t._v("Input text: "+t._s(t.inputText))]),t._v(" "),t.todos.length?t._e():n("p",{staticClass:"todos_none"},[t._v("No todos")]),t._v(" "),n("ol",t._l(t.todos,function(e,i){return n("li",{key:i,class:{completed:e.done},on:{click:function(t){e.done=!e.done}}},[t._v(t._s(e.content)),n("button",{on:{click:function(e){t.deleteTask(i)}}},[t._v("Delete")])])}))])},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("p/+f")},"data-v-26d1beb4",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Navigation Menu (Pls click on each menu item for selection)")]),t._v(" "),n("div",{staticClass:"navigation-menu"},[n("div",{class:t.active,on:{click:function(t){t.preventDefault()}}},[n("a",{staticClass:"home",attrs:{href:"#"},on:{click:function(e){t.makeActive("home")}}},[t._v("Home")]),t._v(" "),n("a",{staticClass:"jobs",attrs:{href:"#"},on:{click:function(e){t.makeActive("jobs")}}},[t._v("Jobs")]),t._v(" "),n("a",{staticClass:"contact",attrs:{href:"#"},on:{click:function(e){t.makeActive("contact")}}},[t._v("Contact")])]),t._v(" "),n("div",{staticClass:"menu-text"},[t._v("You chose "),n("b",[t._v(t._s(t.active))])])])])},staticRenderFns:[]};var m=n("VU/8")({name:"NavigationMenu",data:function(){return{active:"home",isActive:"isActive"}},methods:{makeActive:function(t){this.active=t}}},v,!1,function(t){n("Cibm")},"data-v-492e60f0",null).exports,p={name:"CounterChild",props:{todoItem:{type:String,required:!0}},data:function(){return{counterList:0,counterButton:0}},methods:{incrementCounterButton:function(){this.counterButton+=1,this.$emit("buttonclicked")},incrementCounterList:function(){this.counterList+=1,this.$emit("listclicked")}},computed:{}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"counter-item"},[e("div",{staticClass:"counter-item-text",on:{click:this.incrementCounterList}},[this._v(this._s(this.todoItem))]),this._v(" "),e("div",{staticClass:"counter-item-button"},[e("button",{on:{click:this.incrementCounterButton}},[this._v(this._s(this.counterButton)+" times button clicked, "+this._s(this.counterList)+" times list clicked")])])])},staticRenderFns:[]};var f={name:"CounterParent",props:[""],data:function(){return{items:[{content:"HTML",done:!0},{content:"CSS",done:!0},{content:"JavaScript",done:!0},{content:"Vue JS",done:!1}],totalClicked:0}},components:{CounterChild:n("VU/8")(p,h,!1,function(t){n("DVwi")},"data-v-6e650b66",null).exports},methods:{onListClick:function(t,e){console.log(t+" -> "+e)},incrementTotal:function(){this.totalClicked+=1}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter-wrapper"},[n("h1",[t._v("Select Parent /Child (Pls click list item and button, check console as well)")]),t._v(" "),n("h2",[t._v(t._s(t.totalClicked)+" times all clicked")]),t._v(" "),n("div",{staticClass:"counter-child"},t._l(t.items,function(e,i){return n("counter-child",{key:i,attrs:{"todo-item":i+" - "+e.content},on:{listclicked:function(n){t.onListClick(i,e.content),t.incrementTotal()},buttonclicked:t.incrementTotal}})}))])},staticRenderFns:[]};var k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{},[n("h1",[t._v("Web Development Jobs (Pls select to count the total wage)")]),t._v(" "),n("div",{staticClass:"conditional-services"},[n("ul",t._l(t.jobs,function(e,i){return n("li",{key:i,staticClass:"job-item",class:{active:e.active},on:{click:function(n){t.toggleActive(e)}}},[t._v("\n                "+t._s(e.name)+" -> $"+t._s(e.wage)+"\n            ")])})),t._v(" "),n("div",{staticClass:"total"},[t._v("\n            Total: "),n("span",[t._v(t._s(t._f("currency")(t.total())))])])])])},staticRenderFns:[]};var g={name:"app",components:{Break:s,InstantSearch:c,ToDo:d,NavigationMenu:m,CounterParent:n("VU/8")(f,_,!1,function(t){n("u+nc")},"data-v-ee434d24",null).exports,ConditionalServices:n("VU/8")({name:"ConditionalServices",data:function(){return{jobs:[{name:"Fullstack JS Developer",wage:1700,active:!0},{name:"Frontend JavaScript Developer",wage:1200,active:!1},{name:"Backend JavaScript Developer",wage:1500,active:!1}]}},methods:{toggleActive:function(t){t.active=!t.active},total:function(){var t=0;return this.jobs.forEach(function(e){e.active&&(t+=e.wage)}),t}},filters:{currency:function(t){return"$"+t.toFixed(2)}}},k,!1,function(t){n("teH7")},"data-v-4a76d71d",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("instant-search"),this._v(" "),e("break"),this._v(" "),e("to-do",{attrs:{title:"Todo tasks (Pls cross out if task completed)"}}),this._v(" "),e("break"),this._v(" "),e("counter-parent"),this._v(" "),e("break"),this._v(" "),e("conditional-services"),this._v(" "),e("break"),this._v(" "),e("navigation-menu")],1)},staticRenderFns:[]};var b=n("VU/8")(g,C,!1,function(t){n("yRyg"),n("YjLm")},"data-v-1e2a761d",null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:b}})},YjLm:function(t,e){},"p/+f":function(t,e){},teH7:function(t,e){},"u+nc":function(t,e){},yRyg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2a14ff70a85dfccaad19.js.map