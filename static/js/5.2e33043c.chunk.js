(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{99:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(33),l=t(34),o=t(36),i=t(35),r=t(0),c=t(10),h=t(23),u=t(1),b=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,l=t.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{className:"title",children:"Please enter your login and password"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"authForm",autoComplete:"off",children:[Object(u.jsxs)("label",{className:"authLabel",children:["Mail",Object(u.jsx)("input",{className:"input",type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:"authLabel",children:["Password",Object(u.jsx)("input",{className:"input",type:"password",name:"password",value:t,onChange:this.handleChange})]}),Object(u.jsx)("button",{className:"btn",type:"submit",children:"Log in"})]})]})}}]),t}(r.Component),p={onLogin:h.b};a.default=Object(c.b)(null,p)(b)}}]);
//# sourceMappingURL=5.2e33043c.chunk.js.map