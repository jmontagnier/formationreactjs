(this["webpackJsonptjs-infotel-base"]=this["webpackJsonptjs-infotel-base"]||[]).push([[0],{12:function(e,t,n){e.exports={Title:"Title_Title__a3Xox",endTitle:"Title_endTitle__38UPe",orange:"Title_orange__1gsc8"}},13:function(e,t,n){e.exports={coord:"Edition_coord__3vzyw"}},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){e.exports={MainView:"MainView_MainView__IUSV-"}},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(31),r=n.n(i),l=(n(49),n(3)),o=n(32),j=n(33),b=n(43),d=n(42),m=n(11);n(50);function u(e){var t=Object(c.useState)(),n=Object(m.a)(t,2),s=n[0],i=n[1];return Object(a.jsx)("div",{className:"Button"+(s?" clicked":""),style:{backgroundColor:e.backgroundColor,color:e.color},onClick:function(){i(!0),setTimeout((function(){i(!1)}),500),e.onClick()},children:e.text})}u.defaultProps={backgroundColor:"tomato",color:"white",onClick:function(){alert("ne plus cliquer ici")}};var x=u,O=n(12),h=n.n(O),f=function(){return Object(a.jsxs)("div",{className:h.a.Title,"data-testid":"Title",children:["Meme",Object(a.jsx)("span",{className:h.a.orange,children:"."}),Object(a.jsx)("span",{className:h.a.endTitle,children:"generator"})]})};f.defaultProps={};var v=f,g=n(34),p=n.n(g),N=(n(51),function(){return Object(a.jsx)("div",{className:p.a.Navbar,"data-testid":"Navbar",children:Object(a.jsxs)("nav",{className:"navbar navbar-default",role:"navigation",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-ex1-collapse",children:[Object(a.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"})]}),Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Title"})]}),Object(a.jsxs)("div",{className:"collapse navbar-collapse navbar-ex1-collapse",children:[Object(a.jsxs)("ul",{className:"nav navbar-nav",children:[Object(a.jsx)("li",{className:"active",children:Object(a.jsx)("a",{href:"#",children:"Link"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Link"})})]}),Object(a.jsxs)("form",{className:"navbar-form navbar-left",role:"search",children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search"})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-default",children:"Submit"})]}),Object(a.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Link"})}),Object(a.jsxs)("li",{className:"dropdown",children:[Object(a.jsxs)("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",children:["Dropdown ",Object(a.jsx)("b",{className:"caret"})]}),Object(a.jsxs)("ul",{className:"dropdown-menu",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Action"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Another action"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Something else here"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:"Separated link"})})]})]})]})]})]})})});N.defaultProps={};var y=N,C=n(35),k=n.n(C),w=function(e){return Object(a.jsxs)("div",{className:k.a.Viewer,"data-testid":"Viewer",children:[JSON.stringify(e.meme),"/img/".concat(e.meme.img.url),Object(a.jsx)("svg",{viewBox:"0 0 ".concat(e.meme.img.w," ").concat(e.meme.img.h),children:Object(a.jsx)("image",{xlinkHref:"/img/".concat(e.meme.img.url),x:0,y:0})})]})};w.defaultProps={};var T=w,S=n(13),M=n.n(S),_=function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("http://localhost:5644/imgs").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[1]),Object(a.jsxs)("div",{className:M.a.Edition,"data-testid":"Edition",children:[JSON.stringify(s),Object(a.jsxs)("div",{style:{textAlign:"center"},children:["Image :",Object(a.jsx)("br",{}),Object(a.jsx)("select",{value:e.meme.imgId,onChange:function(t){var n=Number(t.target.value),a=s.find((function(e){return e.id===n}));e.onChangeMeme(Object(l.a)(Object(l.a)({},e.meme),{},{imgId:n,img:a}))},children:s.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.url},"img-".concat(t))}))})]}),Object(a.jsxs)("div",{style:{textAlign:"center"},children:["Coordonn\xe9es",Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:M.a.coord,children:["x",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",min:"0",step:"1",value:e.meme.text.x,onChange:function(t){e.onChangeMeme(Object(l.a)(Object(l.a)({},e.meme),{},{text:Object(l.a)(Object(l.a)({},e.meme.text),{},{x:Number(t.target.value)})}))}})]}),Object(a.jsxs)("div",{className:M.a.coord,children:["y: ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",min:"0",step:"1",value:e.meme.text.y,onChange:function(t){e.onChangeMeme(Object(l.a)(Object(l.a)({},e.meme),{},{text:Object(l.a)(Object(l.a)({},e.meme.text),{},{y:Number(t.target.value)})}))}})]})]}),Object(a.jsxs)("div",{className:"text",style:{textAlign:"center"},children:["text :",Object(a.jsx)("textarea",{className:"blabla",value:e.meme.value,onChange:function(t){e.onChangeMeme(Object(l.a)(Object(l.a)({},e.meme),{},{text:Object(l.a)(Object(l.a)({},e.meme.text),{},{value:t.target.value})}))}})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{style:{textAlign:"center"},children:["Text :",Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{})]}),Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)(x,{text:"Reset",backgroundColor:"tomato"}),Object(a.jsx)(x,{text:"Save",backgroundColor:"skyblue"})]})]})};_.defaultProps={onChangeMeme:function(){}};var A=_;n(52);function I(){return Object(a.jsx)("div",{children:"Infotel 2020"})}var P=n(36),V=n.n(P),E=function(e){return console.log(e),Object(a.jsx)("div",{className:V.a.MainView,"data-testid":"MainView",children:e.children})};E.defaultProps={};var B=E,F=n(90),J={meme:{imgId:3,img:{id:3,url:"biere.jpg",w:512,h:512},text:{x:20,y:50,value:"DEMAT BREIZH"}}},L=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("http://localhost:5644/memes").then((function(e){return e.json()})).then((function(e){return a.setState({memes:e})}))},a.state=J,a}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[JSON.stringify(this.state),Object(a.jsx)(F.a,{text:"Ne pas cliquer!!",onClick:function(){e.setState({meme:Object(l.a)(Object(l.a)({},e.state.meme),{},{text:Object(l.a)(Object(l.a)({},e.state.meme.text),{},{value:"Hello"})})})}}),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(v,{}),Object(a.jsx)(y,{}),Object(a.jsxs)(B,{children:[Object(a.jsx)(T,{meme:this.state.meme}),Object(a.jsx)(A,{meme:this.state.meme,onChangeMeme:function(t){e.setState({meme:t})}})]}),Object(a.jsx)(I,{})]})]})}}]),n}(c.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),D()}},[[88,1,2]]]);
//# sourceMappingURL=main.fd781ef0.chunk.js.map