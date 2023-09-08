"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Installation",l={unversionedId:"docs/getting_started/installation",id:"docs/getting_started/installation",title:"Installation",description:"Prerequisites",source:"@site/content/docs/getting_started/installation.md",sourceDirName:"docs/getting_started",slug:"/docs/getting_started/installation",permalink:"/newdocs/index.html/docs/docs/getting_started/installation",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/getting_started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported Features",permalink:"/newdocs/index.html/docs/docs/getting_started/features"},next:{title:"Minimum working example",permalink:"/newdocs/index.html/docs/docs/getting_started/minimum_working_example"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage with MongoDB",id:"usage-with-mongodb",level:3},{value:"Installation using <code>pip</code>",id:"installation-using-pip",level:2},{value:"Default configuration",id:"default-configuration",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We assume you are running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python3.8+"),(0,o.kt)("li",{parentName:"ul"},"MongoDB")),(0,o.kt)("p",null,"The deployments can be existing deployments already running in your infrastructure, or\nbespoke deployments which you'll use specifically for SuperDuperDB."),(0,o.kt)("h3",{id:"usage-with-mongodb"},"Usage with MongoDB"),(0,o.kt)("p",null,"For MongoDB here are instructions for 2 very popular systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu"},"MongoDB installation on Ubuntu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/"},"MongoDB installation on MacOSX"))),(0,o.kt)("h2",{id:"installation-using-pip"},"Installation using ",(0,o.kt)("inlineCode",{parentName:"h2"},"pip")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install superduperdb")),(0,o.kt)("h2",{id:"default-configuration"},"Default configuration"),(0,o.kt)("p",null,"SuperDuperDB comes with basic default configurations ",(0,o.kt)("inlineCode",{parentName:"p"},"superduperdb.misc.config")," sufficient for working locally with SuperDuperDB. For more complex configuration, read ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"here"),"."))}d.isMDXComponent=!0}}]);