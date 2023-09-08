"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Serialization",l={unversionedId:"docs/explanations/serialization",id:"docs/explanations/serialization",title:"Serialization",description:"SuperDuperDB makes extensive use of various serialization techniques in Python,",source:"@site/content/docs/explanations/serialization.md",sourceDirName:"docs/explanations",slug:"/docs/explanations/serialization",permalink:"/newdocs/index.html/docs/docs/explanations/serialization",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/explanations/serialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How SuperDuperDB handles external data",permalink:"/newdocs/index.html/docs/docs/explanations/external_data"},next:{title:"Component versioning",permalink:"/newdocs/index.html/docs/docs/explanations/versioning"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"SuperDuperDB makes extensive use of various serialization techniques in Python,\nin order to save the following objects to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DB"),", which inherit\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"superduperdb.container.base.Component")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"models"},"Models")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"vectorsearch"},"Vector Indexes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"encoders"},"Encoders"))),(0,a.kt)("p",null,"Since these are compound objects consisting of multiple component parts, we utilize a hybrid\nserialization scheme, in order to save these objects. The scheme is based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Classes wrapped with ",(0,a.kt)("inlineCode",{parentName:"li"},"@dataclasses.dataclass")),(0,a.kt)("li",{parentName:"ul"},"Items in ",(0,a.kt)("inlineCode",{parentName:"li"},"object.dict()")," which are not serializable as JSON, serialized using:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dill")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pickle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"torch.save"))))),(0,a.kt)("p",null,"Important items which can't be saved using JSON, are signified inside the object\nwith the wrapper ",(0,a.kt)("inlineCode",{parentName:"p"},"superduperdb.core.artifact.Artifact"),". This wrapper carries\naround the serialization method necessary to save it's wrapped object in the\n",(0,a.kt)("a",{parentName:"p",href:"artifactstore"},"artifact store"),"."),(0,a.kt)("p",null,"At save time the following algorithm is executed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The user passes ",(0,a.kt)("inlineCode",{parentName:"li"},"my_object")," a descendant of ",(0,a.kt)("inlineCode",{parentName:"li"},"Component")," to be saved in ",(0,a.kt)("inlineCode",{parentName:"li"},"db.add")),(0,a.kt)("li",{parentName:"ol"},"SuperDuperDB executes ",(0,a.kt)("inlineCode",{parentName:"li"},"d = my_object.to_dict()"),"."),(0,a.kt)("li",{parentName:"ol"},"SuperDuperDB extracts the ",(0,a.kt)("inlineCode",{parentName:"li"},"Artifact")," instances out of ",(0,a.kt)("inlineCode",{parentName:"li"},"d")," and saves these\nin the ",(0,a.kt)("a",{parentName:"li",href:"artifactstore"},"artifact store"),"."),(0,a.kt)("li",{parentName:"ol"},"SuperDuperDB saves the ",(0,a.kt)("inlineCode",{parentName:"li"},"d")," which includes references to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Artifact")," instances\nto the ",(0,a.kt)("a",{parentName:"li",href:"metadata"},"metadata store"),".")))}u.isMDXComponent=!0}}]);