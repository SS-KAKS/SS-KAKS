(this["webpackJsonpss-kaks"]=this["webpackJsonpss-kaks"]||[]).push([[0],{62:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=a(12),o=a(5),i=a(6),m=a(8),u=a(7),h=a(9),d=a(96),p=a(97),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(d.a.Brand,{href:"/"},"SS-KAKS"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"sql"},"SQL Injection"),r.a.createElement(p.a.Link,{href:"#link"},"IDOR/URL"),r.a.createElement(p.a.Link,{href:"#link"},"CSRF"),r.a.createElement(p.a.Link,{href:"#link"},"XSS")),r.a.createElement(p.a,{style:{marginRight:"30px"}},r.a.createElement(p.a.Link,{href:"login"},"Login"),r.a.createElement(p.a.Link,{href:"register"},"Sign Up")))))}}]),t}(r.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,{style:{minHeight:window.innerHeight-120}},r.a.createElement(E,null),r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"You must login to access site!"),r.a.createElement("br",null),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(s.b,{to:"/login"},"Log in")),r.a.createElement("br",null),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(s.b,{to:"/register"},"Register")),r.a.createElement("br",null)))),">")}}]),t}(r.a.Component),g=a(23),f=a(21),v=a(17),y=a.n(v),w=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.music.id),r.a.createElement("td",null,e.music.track),r.a.createElement("td",null,e.music.artist),r.a.createElement("td",null,e.music.price),r.a.createElement("td",null,e.music.stock))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeSearch=a.onChangeSearch.bind(Object(f.a)(a)),a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a.state={music:[],search:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://ss-kaks-server.appspot.com:5000/tables/get").then((function(t){e.setState({music:t.data})})).catch((function(e){console.log(e)}))}},{key:"onChangeSearch",value:function(e){this.setState({search:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),""===this.state.search?window.location="/sql":window.location="/sql/"+this.state.search}},{key:"list",value:function(){return this.state.music.map((function(e){return r.a.createElement(w,{music:e,key:e.id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Music Store"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("h4",null,"Search track"),r.a.createElement("input",{type:"text",value:this.state.search,onChange:this.onChangeSearch}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary",style:{marginLeft:"10px"}})),r.a.createElement("div",{className:"form-group"})),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Track"),r.a.createElement("th",null,"Artist"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"In Stock"))),r.a.createElement("tbody",null,this.list())))}}]),t}(n.Component),j=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.music.id),r.a.createElement("td",null,e.music.track),r.a.createElement("td",null,e.music.artist),r.a.createElement("td",null,e.music.price),r.a.createElement("td",null,e.music.stock))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeSearch=a.onChangeSearch.bind(Object(f.a)(a)),a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a.state={music:[],search:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://ss-kaks-server.appspot.com:5000/tables/get/"+this.props.match.params.search).then((function(t){e.setState({music:t.data}),console.log(e.state.music)})).catch((function(e){console.log(e)}))}},{key:"onChangeSearch",value:function(e){this.setState({search:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),""===this.state.search?window.location="./":window.location="./"+this.state.search}},{key:"list",value:function(){return this.state.music.map((function(e){return r.a.createElement(j,{music:e,key:e.id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("h1",null,"Music Store"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("h4",null,"Search track"),r.a.createElement("input",{type:"text",value:this.state.search,onChange:this.onChangeSearch})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary"}))),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Track"),r.a.createElement("th",null,"Artist"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"In Stock"))),r.a.createElement("tbody",null,this.list())))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"Sql"},r.a.createElement(E,null),r.a.createElement(g.b,{exact:!0,path:"",component:k}),r.a.createElement(g.b,{exact:!0,path:"/sql/:search",component:O})))}}]),t}(r.a.Component),N=a(61),x=a(16),C=a(26),R=a.n(C),A=a(22),L=a(59),_=a(40),D=a(92),F={isAuthenticated:!1,user:{},loading:!1},T={},U=Object(A.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(_.a)({},e,{isAuthenticated:!D(t.payload),user:t.payload});case"USER_LOADING":return Object(_.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),I=[L.a],P=Object(A.e)(U,{},Object(A.d)(A.a.apply(void 0,I))),W=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={first_name:"",last_name:"",email:"",errors:{}},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=R()(e);this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFILE")),r.a.createElement("table",{className:"table col-md-6 mx-auto"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Fist Name"),r.a.createElement("td",null,this.state.first_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,this.state.last_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.state.email))))))}}]),t}(n.Component),H=a(27),M=function(e){e?y.a.defaults.headers.common.Authorization=e:delete y.a.defaults.headers.common.Authorization},q=function(e){return{type:"SET_CURRENT_USER",payload:e}},K=function(){return function(e){localStorage.removeItem("jwtToken"),M(!1),e(q({}))}},G=a(4),B=a.n(G),z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(H.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement(r.a.Fragment,{style:{minHeight:window.innerHeight-120}},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Register"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"50%"}},"Name:"),r.a.createElement("span",{style:{color:"red",width:"50%",fontWeight:"bold",textAlign:"right"}},e.name)),r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",placeholder:"Name",className:B()("form-control",{invalid:e.name})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"50%"}},"Email Address:"),r.a.createElement("span",{style:{color:"red",width:"50%",fontWeight:"bold",textAlign:"right"}},e.email)),r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email Address",className:B()("form-control",{invalid:e.email})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"25%"}},"Password:"),r.a.createElement("span",{style:{color:"red",width:"75%",fontWeight:"bold",textAlign:"right"}},e.password)),r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password",className:B()("form-control",{invalid:e.password})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"50%"}},"Confirm Password:"),r.a.createElement("span",{style:{color:"red",width:"50%",fontWeight:"bold",textAlign:"right"}},e.password2)),r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",placeholder:"Confirm Password",className:B()("form-control",{invalid:e.password2})})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")),r.a.createElement("br",null),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(s.b,{to:"/login"},"Log in"))))))}}]),t}(n.Component),J=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){y.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(g.g)(z)),V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(H.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement(r.a.Fragment,{style:{minHeight:window.innerHeight-120}},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Login"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"50%"}},"Email Address:"),r.a.createElement("span",{style:{color:"red",width:"50%",fontWeight:"bold",textAlign:"right"}},e.email,e.emailnotfound)),r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email Address",className:B()("form-control",{invalid:e.email||e.emailnotfound})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("label",{htmlFor:"email",style:{width:"50%"}},"Password:"),r.a.createElement("span",{style:{color:"red",width:"50%",fontWeight:"bold",textAlign:"right"}},e.password,e.passwordincorrect)),r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password",required:!0,className:B()("form-control",{invalid:e.password||e.passwordincorrect})})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Login")),r.a.createElement("br",null),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(s.b,{to:"/register"},"Register"))))))}}]),t}(n.Component),Y=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){y.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),M(a);var n=R()(a);t(q(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(V),Q=a(60),X=Object(x.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(Q.a)(e,["component","auth"]);return r.a.createElement(g.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(g.a,{to:"/login"})}}))})),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement(r.a.Fragment,{style:{minHeight:window.innerHeight-120}},r.a.createElement(E,null),r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into the KAKS website ",this.props.name,r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN"))),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout")))))}}]),t}(n.Component),Z=Object(x.b)((function(e){return{auth:e.auth}}),{logoutUser:K})($);if(localStorage.jwtToken){var ee=localStorage.jwtToken;M(ee);var te=R()(ee);P.dispatch(q(te));var ae=Date.now()/1e3;te.exp<ae&&(P.dispatch(K()),window.location.href="./login")}var ne=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){document.title="SS-KAKS"}},{key:"render",value:function(){return r.a.createElement(x.a,{store:P},r.a.createElement(s.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:b}),r.a.createElement(g.b,{exact:!0,path:"/sql",component:S}),r.a.createElement(g.b,{exact:!0,path:"/sql/:search",component:O}),r.a.createElement(g.b,{exact:!0,path:"/login",component:Y}),r.a.createElement(g.b,{exact:!0,path:"/register",component:J}),r.a.createElement(g.b,{exact:!0,path:"/profile",component:W}),r.a.createElement(X,{exact:!0,path:"/dashboard",component:Z}))))}}]),t}(r.a.Component),re=Object(N.a)(ne);Boolean("https://ss-kaks-server.appspot.com"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.ff4a519d.chunk.js.map