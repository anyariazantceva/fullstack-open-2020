(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(2),o=t.n(c),a=t(15),i=t.n(a),u=(t(21),t(6)),s=t(3),d=function(e){var n=e.filterValue,t=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter shown with:"," ",Object(r.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,o=e.newPhone,a=e.handlePhoneChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:c})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:o,onChange:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.persons,t=e.filterValue,c=e.removePerson;return Object(r.jsx)("div",{children:""===t?n.map((function(e){return Object(r.jsxs)("p",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete person"})]},e.id)})):n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(r.jsxs)("p",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete person"})]},e.id)}))})},h=t(4),j=t.n(h),b="/api/persons",m=function(){return j.a.get(b).then((function(e){return e.data}))},O=function(e){return j.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return j.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},x=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),h=i[0],j=i[1],b=Object(c.useState)(""),x=Object(s.a)(b,2),g=x[0],w=x[1],C=Object(c.useState)(""),P=Object(s.a)(C,2),k=P[0],N=P[1],S=Object(s.a)("",2),y=S[0],F=S[1];Object(c.useEffect)((function(){m().then((function(e){o(e)}))}),[]);var D=function(e){var n=t.find((function(e){return e.name===h})),r=Object(u.a)(Object(u.a)({},n),{},{number:g});p(e,r).then((function(n){o(t.map((function(t){return t.id!==e?t:n})))})).catch((function(n){alert("can't update the person info"),o(t.filter((function(n){return n.id!==e})))}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)("div",{className:"success-message",children:y}),Object(r.jsx)(d,{filterValue:k,handleFilterChange:function(e){N(e.target.value)}}),Object(r.jsx)(l,{addPerson:function(e){e.preventDefault();var n={name:h,id:t.length+1,number:g};if(t.some((function(e){return e.name===h}))){var r=window.confirm("Person already exists, would you like to change old number to a new one?"),c=t.find((function(e){return e.name===h}));r&&D(c.id)}O(n).then((function(e){o(t.concat(e)),F("New person ".concat(e.name," was added")),setTimeout((function(){F(null)}),5e3)})).catch((function(e){return alert("Error!")})),j(""),w("")},newName:h,handleNameChange:function(e){j(e.target.value)},newPhone:g,handlePhoneChange:function(e){w(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(f,{persons:t,filterValue:k,removePerson:function(e){v(e).then((function(n){window.confirm("Are you sure you want to delete?")?o(t.filter((function(n){return n.id!==e}))):alert("No confirmation")})).catch((function(e){alert("Error!")}))}})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.46f86095.chunk.js.map