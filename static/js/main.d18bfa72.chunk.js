(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"Profile_profile__37U5q",description:"Profile_description__2ppAu",avatar:"Profile_avatar__2DZew",name:"Profile_name__1kG0Q",tag:"Profile_tag__U1jkk",location:"Profile_location__q5MP4",stats:"Profile_stats__14QxR",label:"Profile_label__qFIqj",quantity:"Profile_quantity__3CLvy"}},,function(e,t,a){e.exports={statistics:"Statistics_statistics__2A3lv",statTitle:"Statistics_statTitle__3K6af",statList:"Statistics_statList__1epPd",item:"Statistics_item__3c7j7",statLabel:"Statistics_statLabel__1JXl8",statPercentage:"Statistics_statPercentage__AHKJg"}},function(e,t,a){e.exports={status:"FriendListItem_status__i1WIJ",friendAvatar:"FriendListItem_friendAvatar__3ZCYb",friendName:"FriendListItem_friendName__i8qSe"}},,function(e,t,a){e.exports={friendList:"FriendList_friendList__81CB1",item:"FriendList_item__3M8sm"}},,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e,t,a){e.exports={transactionHistory:"TransactionHistory_transactionHistory__2BeqK"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(7),s=a.n(i),r=(a(17),a(18),a(1)),d=a.n(r),l=a(0);function o(e){var t=e.user,a=t.name,n=t.tag,c=t.location,i=t.avatar,s=t.stats,r=s.followers,o=s.views,b=s.likes;return Object(l.jsxs)("div",{className:d.a.profile,children:[Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:i,alt:a,className:d.a.avatar}),Object(l.jsx)("p",{className:d.a.name,children:a}),Object(l.jsxs)("p",{className:d.a.tag,children:["@",n]}),Object(l.jsx)("p",{className:d.a.location,children:c})]}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Followers"}),Object(l.jsx)("span",{className:d.a.quantity,children:r})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Views"}),Object(l.jsx)("span",{className:d.a.quantity,children:o})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:d.a.label,children:"Likes"}),Object(l.jsx)("span",{className:d.a.quantity,children:b})]})]})]})}o.defaultProps={avatar:"https://xn----7sbbg3ahdg9anmfnl4d2c.xn--p1ai/theme/img/noavatar.png",followers:0,views:0,likes:0};var b=o,p=a(8),u=a(3),m=a.n(u);var j=function(){return"rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")"};function f(e){var t=e.title,a=e.stats,n=m.a.statistics,c=m.a.statTitle,i=m.a.statList,s=m.a.item,r=m.a.statLabel,d=m.a.statPercentage;return Object(l.jsxs)("section",{className:n,children:[Object(l.jsx)("h2",{className:c,children:t}),Object(l.jsx)("ul",{className:i,children:a.map((function(e){var t=e.id,a=e.label,n=e.percentage;return Object(l.jsxs)("li",{className:s,style:{backgroundColor:j()},children:[Object(l.jsx)("span",{className:r,children:a}),Object(l.jsxs)("span",{className:d,children:[n,"%"]})]},t)}))})]})}f.defaultProps={title:"statistic",percentage:0};var h=f,y=a(9),O=a(6),_=a.n(O),x=a(4),v=a.n(x),g=function(e){var t=e.avatar,a=e.name,n=e.isOnline,c=v.a.status,i=v.a.friendAvatar,s=v.a.friendName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:c,style:{backgroundColor:n?"green":"red"},children:n}),Object(l.jsx)("img",{className:i,src:t,alt:a,width:"48"}),Object(l.jsx)("p",{className:s,children:a})]})},N=function(e){var t=e.friends,a=_.a.friendList,n=_.a.item;return Object(l.jsx)("ul",{className:a,children:t.map((function(e){var t=e.id,a=e.avatar,c=e.name,i=e.isOnline;return Object(l.jsx)("li",{className:n,children:Object(l.jsx)(g,{avatar:a,name:c,isOnline:i})},t)}))})},w=a(10),P=a(11),L=a.n(P);function S(e){var t=e.items,a=L.a.transactionHistory;return Object(l.jsxs)("table",{className:a,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.type,n=e.amount,c=e.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:c})]},t)}))})]})}S.defaultProps={amount:"0"};var k=S,M=a(12);var q=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{user:p}),Object(l.jsx)(h,{title:"Upload stats",stats:y}),";",Object(l.jsx)(N,{friends:w}),Object(l.jsx)(k,{items:M})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d18bfa72.chunk.js.map