(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),n=c.n(r),s=c(17),i=c.n(s),l=(c(24),c(15)),o=(c(25),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,image:e.image,species:e.species,status:e.status,origin:e.origin.name,episode:e.episode,id:e.id}}))}))}),j=(c(26),c(10)),h=function(e){return Object(a.jsx)(j.b,{to:"/character/".concat(e.id),children:Object(a.jsxs)("article",{className:"characterCard",children:[Object(a.jsx)("img",{className:"characterCard__img",src:e.img,alt:"Character: ".concat(e.name)}),Object(a.jsxs)("div",{className:"characterCard__info",children:[Object(a.jsx)("h2",{className:"characterCard__info--name",children:e.name}),Object(a.jsx)("p",{className:"characterCard__info--type",children:e.species})]})]})})},d=(c(32),c.p+"static/media/homero-simpson-400x360.073c84eb.jpg"),m=function(e){var t=e.characters.map((function(e){return Object(a.jsx)("li",{id:e.id,children:Object(a.jsx)(h,{name:e.name,img:e.image,species:e.species,id:e.id})},e.id)}));return Object(a.jsx)(a.Fragment,{children:0===t.length?Object(a.jsxs)("article",{className:"filterError",children:[Object(a.jsx)("img",{src:d,alt:"",className:"filterError__img"}),Object(a.jsx)("h3",{className:"filterError__text",children:"Te has equivocado de personaje"})]}):Object(a.jsx)("ul",{className:"characterList",children:t})})},u=c.p+"static/media/Rick_and_Morty.de13d484.png",b=(c(33),function(){return Object(a.jsx)("header",{className:"headerLogo",children:Object(a.jsx)("img",{src:u,alt:"Logo Rick and Morty",className:"headerLogo__img"})})}),f=(c(34),function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"nameCharacter"}),Object(a.jsx)("input",{type:"text",id:"nameCharacter",className:"filterCharacter__input",placeholder:"Ej: Morty",onChange:function(t){var c=t.target.value;e.handleFilter(c)},value:e.filterCharacters})]})}),O=function(e){e.preventDefault()},x=function(e){return Object(a.jsx)("form",{action:"",className:"filterCharacter",onSubmit:O,children:Object(a.jsx)(f,{handleFilter:e.handleFilter,filterCharacters:e.filterCharacters})})},p=c(14),g=(c(35),function(e){return void 0===e.foundCharacter?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.Link,{to:"/",className:"characterDetailButton",children:"Volver"}),Object(a.jsxs)("article",{className:"characterDetail",children:[Object(a.jsx)("img",{className:"characterDetail__img",src:d,alt:"Imagen de Homer Simpson"}),Object(a.jsx)("p",{className:"characterDetail__text",children:"Te has equivocado de personaje"})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.Link,{to:"/",className:"characterDetailButton",children:"Volver"}),Object(a.jsxs)("article",{className:"characterDetail",children:[Object(a.jsx)("img",{className:"characterDetail__img",src:e.foundCharacter.image,alt:"Imagen: ".concat(e.foundCharacter.name)}),Object(a.jsxs)("section",{className:"characterDetail__info",children:[Object(a.jsx)("h3",{className:"characterDetail__info--name",children:e.foundCharacter.name}),Object(a.jsxs)("ul",{className:"characterDetail__info--list",children:[Object(a.jsxs)("li",{children:["Status: ",e.foundCharacter.status]}),Object(a.jsxs)("li",{children:["Species: ",e.foundCharacter.species]}),Object(a.jsxs)("li",{children:["Origin: ",e.foundCharacter.origin]}),Object(a.jsxs)("li",{children:["Episodes: ",e.foundCharacter.episode.length]})]})]})]})]})}),_=c(2),C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),j=i[0],h=i[1];Object(r.useEffect)((function(){o().then((function(e){n(e)}))}),[]);var d=c.filter((function(e){return e.name.toUpperCase().includes(j.toUpperCase())}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("main",{className:"container",children:Object(a.jsxs)(_.Switch,{children:[Object(a.jsxs)(_.Route,{exact:!0,path:"/",children:[Object(a.jsx)(x,{handleFilter:function(e){h(e)},filterCharacters:j}),Object(a.jsx)(m,{characters:d})]}),Object(a.jsx)(_.Route,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),r=c.find((function(e){return e.id===t}));return Object(a.jsx)(g,{foundCharacter:r})}})]})})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(C,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.02f11d77.chunk.js.map