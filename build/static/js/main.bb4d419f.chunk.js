(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{58:function(e,a,c){},59:function(e,a,c){},74:function(e,a,c){"use strict";c.r(a);var t=c(2),s=c.n(t),n=c(30),j=c.n(n),r=(c(58),c(59),c(18)),i=c(87),d=c(47),h=c.n(d),b=c(24),l=c(41);l.a.initializeApp({apiKey:"AIzaSyBpjFRkF9m_uo6PDNMbY849o318BhKp-3w",authDomain:"newwhatsappclone-d0e6d.firebaseapp.com",projectId:"newwhatsappclone-d0e6d",storageBucket:"newwhatsappclone-d0e6d.appspot.com",messagingSenderId:"136759435251",appId:"1:136759435251:web:d3224f79e7d8bc34fdfc86",measurementId:"G-4BQW2WM8LV"});var m=l.a,O=c(4);var o=function(e){var a=Object(t.useState)(""),c=Object(r.a)(a,2),s=c[0],n=c[1];return Object(t.useEffect)((function(){n(Math.floor(5e3*Math.random()))}),[]),e.AddNewChat?Object(O.jsxs)("div",{className:"AddSidebarChat",onClick:function(){var e={chatName:prompt("Enter Name"),view:!1};m.database().ref("name").push(e)},children:[Object(O.jsx)("div",{className:"Addprofilepic",children:Object(O.jsx)(h.a,{})}),Object(O.jsx)("div",{className:"SidebarChat_info",children:Object(O.jsx)("h2",{children:"Create new Chat"})})]}):Object(O.jsx)(b.b,{to:"/rooms/"+e.name,children:Object(O.jsxs)("div",{className:"SidebarChat",children:[Object(O.jsx)("div",{className:"profilepic",children:Object(O.jsx)(i.a,{src:"https://avatars.dicebear.com/api/human/"+s+".svg"})}),Object(O.jsxs)("div",{className:"SidebarChat_info",children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("p",{children:"Last message...."})]})]})})},x=c(35),p=c.n(x),u=c(48),f=c.n(u),v=c(49),N=c.n(v),_=c(34),g=c.n(_);var w=function(){var e=Object(t.useState)([]),a=Object(r.a)(e,2),c=a[0],n=a[1];return Object(t.useEffect)((function(){m.database().ref("name").on("value",(function(e){var a=e.val(),c=[];for(var t in a)c.push(a[t]);n(c)}))}),[]),Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsxs)("div",{className:"sidebar_header",children:[Object(O.jsx)(i.a,{}),Object(O.jsxs)("div",{className:"sidebar_headerRight",children:[Object(O.jsx)(f.a,{}),Object(O.jsx)(N.a,{}),Object(O.jsx)(g.a,{})]})]}),Object(O.jsx)("div",{className:"sidebar_search",children:Object(O.jsxs)("div",{className:"sidebar_searchcontainer",children:[Object(O.jsx)(p.a,{}),Object(O.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(O.jsxs)("div",{className:"sidebar_chats",children:[Object(O.jsx)(o,{AddNewChat:!0}),c.map((function(e){return Object(O.jsx)(o,{name:e.chatName},e.name)}))]})]})})},S=c(50),y=c.n(S),C=c(51),k=c.n(C),M=c(52),I=c.n(M),E=c(9);var A=function(){var e=Object(t.useState)(""),a=Object(r.a)(e,2),c=(a[0],a[1]),n=Object(t.useState)(""),j=Object(r.a)(n,2),d=j[0],h=j[1],b=Object(E.f)().roomId,l=Object(t.useState)(""),m=Object(r.a)(l,2),o=m[0],x=m[1];return Object(t.useEffect)((function(){x(b)}),[b]),Object(t.useEffect)((function(){c(Math.floor(5e3*Math.random()))}),[]),Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)("div",{className:"chat",children:[Object(O.jsxs)("div",{className:"chat_header",children:[Object(O.jsx)(i.a,{src:"https://avatars.dicebear.com/api/human/"+o+".svg"}),Object(O.jsxs)("div",{className:"chat_header_info",children:[Object(O.jsx)("h3",{children:o}),Object(O.jsx)("p",{children:"last seen at ..."})]}),Object(O.jsxs)("div",{className:"chat_headerRight",children:[Object(O.jsx)(p.a,{}),Object(O.jsx)(y.a,{}),Object(O.jsx)(g.a,{})]})]}),Object(O.jsxs)("div",{className:"chat_body",children:[Object(O.jsxs)("p",{className:"chat_message",children:[Object(O.jsx)("span",{className:"chat_message_name",children:"John Dunk"}),"Hey",Object(O.jsx)("span",{className:"chat_message_timestamp",children:"3:22 PM"})]}),Object(O.jsxs)("p",{className:"chat_message chat_message_reciever",children:[Object(O.jsx)("span",{className:"chat_message_name",children:"Vick Sente"}),"Hello guys you know me",Object(O.jsx)("span",{className:"chat_message_timestamp",children:"3:24 PM"})]})]}),Object(O.jsxs)("div",{className:"chat_footer",children:[Object(O.jsx)(k.a,{}),Object(O.jsxs)("form",{className:"chat-footer-input",children:[Object(O.jsx)("input",{type:"text",placeholder:"Type a message",value:d,onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),alert(d),h("")},children:"Enter"})]}),Object(O.jsx)(I.a,{})]})]})})};var B=function(){return Object(O.jsx)(s.a.Fragment,{children:Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(w,{}),Object(O.jsxs)(E.c,{children:[Object(O.jsx)(E.a,{path:"/rooms/:roomId",children:Object(O.jsx)(A,{})}),Object(O.jsx)(E.a,{path:"/",children:Object(O.jsx)(A,{})})]})]})})})};j.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.bb4d419f.chunk.js.map