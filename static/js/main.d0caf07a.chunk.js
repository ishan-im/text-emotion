(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," my-1 mx-2"),children:[Object(l.jsx)("input",{className:"form-check-input ",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:e.modetext})]})]})]})})})}function d(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)("Copy Text"),i=Object(o.a)(s,2),d=i[0],b=i[1],j=Object(c.useRef)(null);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsxs)("div",{className:"mb-3 ",children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",onChange:function(e){r(e.target.value)},value:n,ref:j,rows:"6",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"black"}})]}),Object(l.jsx)("button",{className:"btn btn-primary ",onClick:function(){var t=n.toLocaleUpperCase();r(t),e.showAlert("Converted to upper case","success")},children:"Convert to upperCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLocaleLowerCase();r(t),e.showAlert("Converted to lower case","success")},children:"Convert to lowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(t){j.current.select(),document.execCommand("copy"),t.target.focus(),b("Copy Text"),e.showAlert("Copied!","success")},children:d}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(""),e.showAlert("textform cleared","success")},children:"Clear Text"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h1",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[n.split(" ").length-1," Words ",n.length," Characters"]}),Object(l.jsxs)("p",{children:[.008*n.split(" ").length," Minutes read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter Some Text to Preview"})]})]})}i.defaultProps={title:"Stranger",aboutUs:"My app"};var b=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),":"]})," ",e.alert.msg]})};var j=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("Enable Dark Mode"),s=Object(o.a)(r,2),j=s[0],u=s[1],h=Object(c.useState)(null),m=Object(o.a)(h,2),p=m[0],x=m[1],g=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"My App",aboutUs:"About App",mode:a,modetext:j,toggleMode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="white",u("Enable Dark Mode"),g("Light mode has been enabled","success"),document.title="My App-Light mode"):(n("dark"),document.body.style.backgroundColor="#121212",u("Enable Light Mode"),g("Dark mode has been enabled","success"),document.title="My App-Dark mode")}}),Object(l.jsx)(b,{alert:p}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:g,heading:"Enter your text here",mode:a})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d0caf07a.chunk.js.map