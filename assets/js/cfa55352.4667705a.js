"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[7043],{4137:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3513:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const l={id:"IDE_preparation",title:"IDE preparation",sidebar_label:"IDE preparation"},i=void 0,o={unversionedId:"Getting_Started/IDE_preparation",id:"Getting_Started/IDE_preparation",title:"IDE preparation",description:"IntelliJ",source:"@site/docs/Getting_Started/IDE_preparation.md",sourceDirName:"Getting_Started",slug:"/Getting_Started/IDE_preparation",permalink:"/SHAFT_Engine_Docusaurus/docs/Getting_Started/IDE_preparation",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Getting_Started/IDE_preparation.md",tags:[],version:"current",frontMatter:{id:"IDE_preparation",title:"IDE preparation",sidebar_label:"IDE preparation"}},p={},s=[{value:"IntelliJ",id:"intellij",level:2},{value:"Project Creation and configuring POM file",id:"project-creation-and-configuring-pom-file",level:3},{value:"Adding SHAFT listeners",id:"adding-shaft-listeners",level:3},{value:"Follow these steps:",id:"follow-these-steps",level:5},{value:"Debug issue",id:"debug-issue",level:3},{value:"Eclipse",id:"eclipse",level:2},{value:"TestNG Plugin Installation",id:"testng-plugin-installation",level:3},{value:"Project Creation",id:"project-creation",level:3}],c={toc:s};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intellij"},"IntelliJ"),(0,r.kt)("h3",{id:"project-creation-and-configuring-pom-file"},"Project Creation and configuring POM file"),(0,r.kt)("p",null,"In order to use SHAFT ENGINE, after creating the project using the recommended JDK version. Please follow those steps :",(0,r.kt)("br",null),"\n1 - Open the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MohabMohie/using_SHAFT_ENGINE"},"using shaft engine repo"),(0,r.kt)("br",null),"\n2 - Open the POM.xml file and copy values from line 12 ",(0,r.kt)("inlineCode",{parentName:"p"},"<properties>")," to the end of the file",(0,r.kt)("br",null),"\n3 - Edit your project POM.xml file replacing the values starting from the same line ",(0,r.kt)("inlineCode",{parentName:"p"},"<properties>")," to the end of the file.",(0,r.kt)("br",null),"\n4- after the project indexes the new POM values add Shaft Listeners to your project ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"adding-shaft-listeners"},"Adding SHAFT listeners"),(0,r.kt)("h5",{id:"follow-these-steps"},"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Run")," dorpdown menu and then select ",(0,r.kt)("strong",{parentName:"li"},"Edit Configuration"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51405765833_62bec5179c_c.jpg",alt:"run"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Edit Configuration")," button")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51404743097_5c1f1e559d_c.jpg",alt:"edit"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"TestNG")," button")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51406472770_2ca0728272_c.jpg",alt:"template"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"+")," icon")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add",src:n(8560).Z,width:"1920",height:"1080"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"In the search box we have to type ",(0,r.kt)("strong",{parentName:"li"},"com.shaft.tools.","*")," then click on search icon. We have to add each of the following listeners by selecting each one of then and then click on ",(0,r.kt)("strong",{parentName:"li"},"Ok")," button")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"listeners",src:n(588).Z,width:"1920",height:"1080"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Apply")," button and then on ",(0,r.kt)("strong",{parentName:"li"},"Ok")," button")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"applyingConfiguration",src:n(4786).Z,width:"1915",height:"1026"})),(0,r.kt)("h3",{id:"debug-issue"},"Debug issue"),(0,r.kt)("p",null,"IntelliJ IDEA version 2021.3.1 and beyond might give exception error if you try to run in debug mode .In order to solve this issue go to this option windows : File -> Settings -> Build, Execution, Deployment -> Debugger -> Async Stack Traces and uncheck Instrumenting agent option."),(0,r.kt)("h2",{id:"eclipse"},"Eclipse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SHAFT uses ",(0,r.kt)("a",{parentName:"li",href:"https://testng.org/doc/"},"TestNG")," for test management, thus you will need to install TestNG plugin."),(0,r.kt)("li",{parentName:"ul"},"TestNG plugin comes pre-installed with IntelliJ but needs to be installed if you are using Eclipse.")),(0,r.kt)("h3",{id:"testng-plugin-installation"},"TestNG Plugin Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step #1: Once Eclipse is launched, click on Help and then Eclipse Marketplace.",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.lambdatest.com/blog/wp-content/uploads/2020/07/Eclipse-Marketplace.png",alt:"marketplace"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step #2: A new window would open up, type \u201cTestNG\u201d in the Find text box and click on the Go button.",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://www.lambdatest.com/blog/wp-content/uploads/2020/07/testng.png",alt:"search"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step #3: You will now see the search results with TestNG for Eclipse at the top. All you need to do now is click on the Install button next to it.",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://www.lambdatest.com/blog/wp-content/uploads/2020/07/TestNG-for-Eclipse.png",alt:"TestNG_plugin"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step #4: Resolving of features might take up a few minutes after which you need to verify that the checkbox for TestNG is checked and click on the Confirm button.",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://www.lambdatest.com/blog/wp-content/uploads/2020/07/testng-with-eclipes.png",alt:"install"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step #5: Accept the license and click on the Finish button.",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://www.lambdatest.com/blog/wp-content/uploads/2020/07/TestNG-installation.png",alt:"accept"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Eclipse might show a warning regarding the installation of unsigned software, choose install anyway.",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"For the change to be effective, Eclipse will prompt for a re-start, choose re-start now.")))),(0,r.kt)("h3",{id:"project-creation"},"Project Creation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3TYGteD843M"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/3TYGteD843M/0.jpg",alt:"Project Creation",title:"Click to view on Youtube"}))))}u.isMDXComponent=!0},8560:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2-28971a29a9715cb38756d77795a6bd79.png"},588:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/3-49f56de199403c76465ad6fe8009b964.png"},4786:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/4-be5a8ffaf6d055df9b2dfde8f78deadb.jpg"}}]);