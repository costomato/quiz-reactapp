(this["webpackJsonpquiz-webapp-react"]=this["webpackJsonpquiz-webapp-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),i=n.n(c),o=(n(14),n(3)),s=n.n(o),l=n(5),d=n(6),u=n(7),b=n(9),p=n(8),j=(n(16),n(0)),h={margin:8,background:"#4f75f1"};function g(e){return Object(j.jsx)("button",{id:e.buttonId,onClick:e.func,style:h,type:"button",className:"btn btn-primary",children:e.text})}var f={text:{color:"#fff",display:"none",padding:10},divStyle:{margin:5}};function m(e){return Object(j.jsx)("div",{style:f.divStyle,children:Object(j.jsxs)("h6",{id:e.answerId,style:f.text,children:["Correct answer: ",e.correctAnswer]})})}var v=0,x=[];var O={color:"white"};function y(e){var t=[];return e.options.forEach((function(e){t.includes(e)||t.push(e)})),t.map((function(n){return Object(j.jsx)(g,{buttonId:e.id.toString().concat(t.indexOf(n).toString()),func:function(){return a=e.id,r=e.id.toString().concat(t.indexOf(n).toString()),c=n.toString(),i=e.correct,t.length,o=e.quizSize,void(x.includes(a)||(c===i?(v++,document.getElementById(r).style.background="#04d46f",document.getElementById("score").innerHTML="Score: ".concat(v,"/").concat(o)):(document.getElementById(r).style.background="#f11b43",document.getElementById("ans".concat(a)).style.display="initial"),x.push(a)));var a,r,c,i,o},text:n.toString()})}))}function w(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h5",{style:O,children:["Question: ",e.question]}),y(e),Object(j.jsx)(m,{answerId:"ans".concat(e.id),correctAnswer:e.correct})]})}function S(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:"QUIZ"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Reload quiz"})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Quiz Category"}),Object(j.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",className:"dropdown-item",children:"Coming soon"})})})]})]})})]})})}var q={color:"white"};function N(){return Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("h5",{id:"jsonHeading",style:q,children:"Loading quiz..."})})}function k(e,t){var n=Math.floor(Math.random()*(e.length+1));e.splice(n,0,t);for(var a=0;a<e.length;a++)e[a]=e[a].replaceAll("&#039;","'").replaceAll("&amp;","&").replaceAll("&quot;",'"');return e}var z={color:"#fff",right:16,top:8,marginTop:8,float:"right",background:"rgba(68,173,41,0.6)",paddingTop:10,paddingBottom:10,paddingLeft:16,paddingRight:16,borderRadius:80,position:"sticky"},A=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,quiz:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api.php?amount=10",e.next=3,fetch("https://opentdb.com/api.php?amount=10");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({quiz:n,loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsx)("div",{children:this.state.loading||!this.state.quiz?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(N,{})}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("h6",{style:z,id:"score",children:["Score: 0/",this.state.quiz.results.length]}),(e=this.state.quiz,e.results.map((function(t){return Object(j.jsx)(w,{quizSize:e.results.length,id:e.results.indexOf(t),question:t.question.replaceAll("&#039;","'").replaceAll("&amp;","&").replaceAll("&quot;",'"'),correct:t.correct_answer.replaceAll("&#039;","'").replaceAll("&amp;","&").replaceAll("&quot;",'"'),options:k(t.incorrect_answers,t.correct_answer)})})))]})})]});var e}}]),n}(r.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.6f3c0317.chunk.js.map