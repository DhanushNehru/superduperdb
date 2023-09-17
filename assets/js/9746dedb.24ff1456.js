"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={},r="Common issues in AI-data development",s={unversionedId:"docs/background/common_issues",id:"docs/background/common_issues",title:"Common issues in AI-data development",description:"Traditionally, AI development and databases have lived in separate silo-ed worlds, which",source:"@site/content/docs/background/common_issues.md",sourceDirName:"docs/background",slug:"/docs/background/common_issues",permalink:"/docs/docs/background/common_issues",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/background/common_issues.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Background",permalink:"/docs/category/background"},next:{title:"Mission",permalink:"/docs/docs/background/mission"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-issues-in-ai-data-development"},"Common issues in AI-data development"),(0,a.kt)("p",null,"Traditionally, AI development and databases have lived in separate silo-ed worlds, which\nonly interact as an afterthought at the point where a production system is required to\napply an AI model to a row or table in a database and store and serve the resulting predictions."),(0,a.kt)("p",null,"Let's see how this can play out in practice."),(0,a.kt)("p",null,"Suppose our situation is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have data in production populated by users accessing a popular website, and which sends JSON records to MongoDB, with references to web URLs hosted on a separate image server."),(0,a.kt)("li",{parentName:"ul"},"Each record contains some data left behind by users which may be useful for training a classification model.")),(0,a.kt)("p",null,"Given this data, we would like to accomplish the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We would like to use our data hosted in MongoDB to train a model to classify images"),(0,a.kt)("li",{parentName:"ul"},"We want to use the probabilistic estimates for the classifications in a production scenario")),(0,a.kt)("p",null,"To do this, we need to be able to implement these high level steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access the images and data in a way enabling training a computer-vision classification model"),(0,a.kt)("li",{parentName:"ul"},"Train the model on the accessible images and associated labels"),(0,a.kt)("li",{parentName:"ul"},"Once the model is trained, deploy it in a way so that incoming user data's images are classified using his model in as timely a manner as possible."),(0,a.kt)("li",{parentName:"ul"},"Consume the outputs of the model in the functionality of the website")),(0,a.kt)("p",null,"Pre-2023, this is an extremely arduous task. In order to get a model working using this data, and working with this deployment, we would typically be required to perform something equivalent to the following sequence of tasks (module cloud provider, exact software choices). (Suppose that our user is using MongoDB as his/ her datastore.)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download a snapshot of his data from MongoDB and place in an AWS s3 bucket."),(0,a.kt)("li",{parentName:"ol"},"Write a script to run through all of the images mentioned in the BSON records downloaded, and download these to a fast-access hard drive, in elastic block storage"),(0,a.kt)("li",{parentName:"ol"},"Write a new script which processes the data downloaded from MongoDB, extracting a dataframe of labels and image URIs in s3. He has to take care not to make book-keeping errors in the process."),(0,a.kt)("li",{parentName:"ol"},"Prepare the model for training, using for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"torchvision"),", to preprocess the images for batching using GPUs, and ",(0,a.kt)("inlineCode",{parentName:"li"},"torch")," for writing the model forward pass."),(0,a.kt)("li",{parentName:"ol"},"To perform training, spin up an EC2 instance, or use AWS Sagemaker. Often the lock-in nature of AWS Sagemaker staves off a large percentage of users. This means defining AWS Cloudformation templates allowing us to easily start a training instance, mount the hard-drive containing the images, and stop the instance with an AWS lambda function after completion."),(0,a.kt)("li",{parentName:"ol"},"If the model is declared sufficient, we move to building a production pipeline. Again, to avoid, vendor lock-in, we might opt for the open-source Apache Airflow. We build a DAG using Airflow, which periodically checks for records which are have yet to be classified in MongoDB, loads data from the database and dumps this into an s3 bucket, downloads the images referred to in this data, loads the model and applies preprocessing to the images, followed by running the model over this data, and finally applying post-processing to the outputs. The classifications are then made human readable, looking up indices in a lookup table we provide. The classifications are finally inserted back to MongoDB, along with the probabilistic estimates from the PyTorch model. "),(0,a.kt)("li",{parentName:"ol"},"In performing 6., we are required to provide our model in a way which may be consumed by the production system. We defines a new inference only preprocessor which may be used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"torch")," model, writes a script which re-instantiates his model from the parameters applied in training, and also an additional script responsible for the bookkeeping between the ",(0,a.kt)("inlineCode",{parentName:"li"},"forward")," pass outputs, and the human readable probabilistic predictions.")),(0,a.kt)("p",null,"This story may sound super familiar to AI developers and data scientists. It can cause delays of months or longer, in deploying even standard use-cases to production. There are indeed tools out there which smoothen the journey to consuming AI through the database - Zen ML, Comet ML, etc.. However, these simply make each step in this complex sequence easier to execute. "),(0,a.kt)("p",null,"What if, by shifting the focus from model centricity, to database centricity, we could simplify matters considerably?"),(0,a.kt)("p",null,"This is where SuperDuperDB comes in. Let's look at how SuperDuperDB might allow Jim to work:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'We register the "user" collection in MongoDB with SuperDuperDB, configuring the fact that the URLs point to image\nURIs with SuperDuperDB\'s inbuilt encoder system. This induces SuperDuperDB to spring into action every time data is updated\nin the user collection. SuperDuperDB automatically downloads the URIs to MongoDB and visible to the models installed in\nSuperDuperDB, ready for training and inference.'),(0,a.kt)("li",{parentName:"ol"},"We program ",(0,a.kt)("inlineCode",{parentName:"li"},"preprocess")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"postprocess")," python functions on his class and wrap these together with the PyTorch model with a single wrapper ",(0,a.kt)("inlineCode",{parentName:"li"},"superduper"),".\nWe import a SuperDuperDB client, and pass the client and a MongoDB style query ",(0,a.kt)("inlineCode",{parentName:"li"},"q = collection.find({'img': {'$exists': 1}})"),"\nto the ",(0,a.kt)("inlineCode",{parentName:"li"},".fit")," method of the wrapped model."),(0,a.kt)("li",{parentName:"ol"},"SuperDuperDB springs into action, uploading the model to SuperDuperDB, and triggering model training on SuperDuperDB's ",(0,a.kt)("inlineCode",{parentName:"li"},"dask")," worker pool.\nOnce finished, metrics and model-state are preserved in the configured artifact store."),(0,a.kt)("li",{parentName:"ol"},"Using, one command, ",(0,a.kt)("inlineCode",{parentName:"li"},"model.predict('img', select=q, listen=True)"),", Jim installs the model on the user collection,\nso that as new data are inserted, the model is evaluated in inference model,\nthe predictions postprocessed, and human readable outputs are inserted to the user collection.")),(0,a.kt)("p",null,'With SuperDuperDB setup in this way, and models configured to operate on the "user" collection,\nthe deployment reacts automatically to changes in the "user" collection and\nmodel outputs are continuously integrated back into the database.'))}u.isMDXComponent=!0}}]);