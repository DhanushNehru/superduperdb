"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Walkthrough: How to enable and manage MongoDB Atlas Vector Search with SuperDuperDB",p={permalink:"/blog/2023/09/31/a-walkthrough-of-vector-search-on-mongodb-atlas-with-superduperdb/content",editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-31-a-walkthrough-of-vector-search-on-mongodb-atlas-with-superduperdb/content.md",source:"@site/blog/2023-09-31-a-walkthrough-of-vector-search-on-mongodb-atlas-with-superduperdb/content.md",title:"Walkthrough: How to enable and manage MongoDB Atlas Vector Search with SuperDuperDB",description:"*In step-by-step tutorial we will show how to leverage MongoDB Atlas Vector Search",date:"2023-10-01T00:00:00.000Z",formattedDate:"October 1, 2023",tags:[],readingTime:3.75,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"The easiest way to implement question-your documents we know",permalink:"/blog/2023/10/04/walkthrough-rag-app-atlas"},nextItem:{title:"Jumpstart AI development on MongoDB with SuperDuperDB",permalink:"/blog/2023/09/30/jump-start-ai-development"}},i={authorsImageUrls:[]},s=[{value:"Useful Links",id:"useful-links",level:3},{value:"Contributors are welcome!",id:"contributors-are-welcome",level:3},{value:"Become a Design Partner!",id:"become-a-design-partner",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In step-by-step tutorial we will show how to leverage MongoDB Atlas Vector Search\nwith SuperDuperDB, including the generation of vector embeddings. Learn how to connect embedding APIs such as OpenAI or use embedding models for example from HuggingFace with MongoDB Atlas with simple Python commands.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"SuperDuperDB makes it very easy to set up multimodal vector search with different file types (text, image, audio, video, and more). ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install ",(0,o.kt)("inlineCode",{parentName:"strong"},"superduperdb")," Python package")),(0,o.kt)("p",null,"Using vector-search with SuperDuperDB on MongoDB requires only one simple python package install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install superduperdb\n")),(0,o.kt)("p",null,"With this install SuperDuperDB includes all the packages needed to define a range of API based and package based\nvector-search models, such as OpenAI and Hugging-Face's ",(0,o.kt)("inlineCode",{parentName:"p"},"transformers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect to your Atlas cluster using SuperDuperDB")),(0,o.kt)("p",null,"SuperDuperDB ships with it's own MongoDB python client, which supports\nall commands supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"pymongo"),". In the example below\nthe key to connecting to your Atlas cluster is the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," object."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," object contains all functionality needed to read and write to\nthe MongoDB instance and also to define, save and apply a flexible range\nof AI models for vector-search."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from superduperdb.db.base.build import build_datalayer\nfrom superduperdb import CFG\nimport os\n\nATLAS_URI = "mongodb+srv://<user>@<atlas-server>/<database_name>"\nOPENAI_API_KEY = "<your-open-ai-api-key>"\n\nos.environ["OPENAI_API_KEY"] = OPENAI_API_KEY\n\nCFG.data_backend = ATLAS_URI\nCFG.vector_search = ATLAS_URI\n\ndb = build_datalayer()\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Load your data")),(0,o.kt)("p",null,"You can download some data to play with from ",(0,o.kt)("a",{parentName:"p",href:"https://superduperdb-public.s3.eu-west-1.amazonaws.com/pymongo.json"},"this link"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/pymongo.json\n")),(0,o.kt)("p",null,"The data contains all inline doc-strings of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pymongo")," Python API (official\nMongoDB driver for Python). The name of the function or class is in ",(0,o.kt)("inlineCode",{parentName:"p"},'"res"')," and\nthe doc-string is contained in ",(0,o.kt)("inlineCode",{parentName:"p"},'"value"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\n\nwith open('pymongo.json') as f:\n    data = json.load(f)\n")),(0,o.kt)("p",null,"Here's one record to illustrate the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "pymongo.mongo_client.MongoClient",\n  "parent": null,\n  "value": "\\nClient for a MongoDB instance, a replica set, or a set of mongoses.\\n\\n",\n  "document": "mongo_client.md",\n  "res": "pymongo.mongo_client.MongoClient"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Insert the data into your Atlas cluster")),(0,o.kt)("p",null,"We can use the SuperDuperDB connection to insert this data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.db.mongodb.query import Collection\n\ncollection = Collection('documents')\n\ndb.execute(\n    collection.insert_many([\n        Document(r) for r in data\n    ])\n)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Define your vector model and vector-index")),(0,o.kt)("p",null,"Now we have data in our collection we can define the vector-index:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\nfrom superduperdb.ext.openai.model import OpenAIEmbedding\n\nmodel = OpenAIEmbedding(model='text-embedding-ada-002')\n\ndb.add(\n    VectorIndex(\n        identifier=f'pymongo-docs',\n        indexing_listener=Listener(\n            model=model,\n            key='value',\n            select=Collection('documents').find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n    )\n)\n")),(0,o.kt)("p",null,"This command tells the system that we want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"search the ",(0,o.kt)("inlineCode",{parentName:"li"},'"documents"')," collection"),(0,o.kt)("li",{parentName:"ul"},"set-up a vector-index on our Atlas cluster, using the text in the ",(0,o.kt)("inlineCode",{parentName:"li"},'"value"')," field"),(0,o.kt)("li",{parentName:"ul"},"use the OpenAI model ",(0,o.kt)("inlineCode",{parentName:"li"},'"text-embedding-ada-002"')," to create vector-embeddings")),(0,o.kt)("p",null,"After issuing this command, SuperDuperDB does these things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configures an MongoDB Atlas knn-index in the ",(0,o.kt)("inlineCode",{parentName:"li"},'"documents"')," collection"),(0,o.kt)("li",{parentName:"ul"},"Saves the ",(0,o.kt)("inlineCode",{parentName:"li"},"model")," object in the SuperDuperDB model store hosted on ",(0,o.kt)("inlineCode",{parentName:"li"},"gridfs")),(0,o.kt)("li",{parentName:"ul"},"Applies ",(0,o.kt)("inlineCode",{parentName:"li"},"model")," to all data in the ",(0,o.kt)("inlineCode",{parentName:"li"},'"documents"')," collection, and saves the vectors in the documents"),(0,o.kt)("li",{parentName:"ul"},"Saves the fact that ",(0,o.kt)("inlineCode",{parentName:"li"},"model")," is connected to the ",(0,o.kt)("inlineCode",{parentName:"li"},'"pymongo-docs"')," vector-index")),(0,o.kt)("p",null,"You can confirm that the index has been created and view the index's settings\nin the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.mongodb.com/"},"Atlas UI"),". It should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46561).Z,width:"2282",height:"1672"})),(0,o.kt)("p",null,"The nesting of the index signifies the fact that the index created looks\ninto the ",(0,o.kt)("inlineCode",{parentName:"p"},"_outputs.<key>.<model-name>")," path, which is where the model's vector outputs are stored\nautomatically by SuperDuperDB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use vector-search in a super-duper query")),(0,o.kt)("p",null,"Now we are ready to use the SuperDuperDB query-API for vector-search.\nYou'll see below, that SuperDuperDB handles all logic related to\nconverting queries on the fly to vectors under the hood."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.db.mongodb.query import Collection\nfrom superduperdb.container.document import Document as D\nfrom IPython.display import *\n\nquery = 'Find data'\n\nresult = db.execute(\n    Collection('documents')\n        .like(D({'value': query}), vector_index='pymongo-docs', n=5)\n        .find()\n)\n\nfor r in result:\n    display(Markdown(f'### `{r[\"parent\"] + \".\" if r[\"parent\"] else \"\"}{r[\"res\"]}`'))\n    display(Markdown(r['value']))\n")),(0,o.kt)("h3",{id:"useful-links"},"Useful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://superduperdb.com/"},"Website"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/SuperDuperDB/superduperdb"},"GitHub"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/docs/docs/intro.html"},"Documentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/blog"},"Blog"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/docs/category/use-cases"},"Example Use-Cases & Apps"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA"},"Slack Community"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.linkedin.com/company/superduperdb/"},"LinkedIn"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://twitter.com/superduperdb"},"Twitter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.youtube.com/@superduperdb"},"Youtube")))),(0,o.kt)("h3",{id:"contributors-are-welcome"},"Contributors are welcome!"),(0,o.kt)("p",null,"SuperDuperDB is open-source and permissively licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE"},"Apache 2.0 license"),". We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We'll see you on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb"},"GitHub"),"!"),(0,o.kt)("h3",{id:"become-a-design-partner"},"Become a Design Partner!"),(0,o.kt)("p",null,"We are looking for visionary organizations which we can help to identify and implement transformative AI applications for their business and products. We're offering this absolutely for free. If you would like to learn more about this opportunity please reach out to us via email: ",(0,o.kt)("a",{parentName:"p",href:"mailto:partnerships@superduperdb.com"},"partnerships@superduperdb.com")))}c.isMDXComponent=!0},46561:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/atlas_screen-22778bde02e875c6f464c9bb3d565280.png"}}]);