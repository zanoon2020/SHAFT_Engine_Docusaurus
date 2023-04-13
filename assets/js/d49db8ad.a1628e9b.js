"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[5031],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const i={id:"Properties",title:"Properties",sidebar_label:"Properties"},l=void 0,o={unversionedId:"Properties/Properties",id:"Properties/Properties",title:"Properties",description:"Please note that the Configuration Manager will be deprecated, and you can now refer to this page to configure your execution properties.",source:"@site/docs/Properties/Properties.md",sourceDirName:"Properties",slug:"/Properties/",permalink:"/SHAFT_Engine_Docusaurus/docs/Properties/",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Properties/Properties.md",tags:[],version:"current",frontMatter:{id:"Properties",title:"Properties",sidebar_label:"Properties"},sidebar:"docs",previous:{title:"First Steps",permalink:"/SHAFT_Engine_Docusaurus/docs/Getting_Started/Prerequisites"},next:{title:"Browser Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Browser_Actions"}},p={},d=[{value:"1. File-based properties",id:"1-file-based-properties",level:3},{value:"2. Code-based properties",id:"2-code-based-properties",level:3},{value:"3. CLI-based properties",id:"3-cli-based-properties",level:3},{value:"Priorities",id:"priorities",level:3},{value:"Supported Properties",id:"supported-properties",level:3},{value:"ExecutionPlatform",id:"executionplatform",level:4},{value:"WebCapabilities",id:"webcapabilities",level:4},{value:"MobileCapabilities",id:"mobilecapabilities",level:4},{value:"PlatformFlags",id:"platformflags",level:4}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please note that the Configuration Manager will be deprecated, and you can now refer to this page to configure your execution properties."),(0,r.kt)("h3",{id:"1-file-based-properties"},"1. File-based properties"),(0,r.kt)("p",null,"This is the traditional way of configuring SHAFT properties, using this approach you can simply create your own properties file under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/properties/custom.properties"),".\nHere's a sample of what a properties file can look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"baseURL=http://www.mytestdomain.com\nexecutionAddress=local\ntargetOperatingSystem=WINDOWS\ntargetBrowserName=firefox\nheadlessExecution=true\ncreateAnimatedGif=true\nvideoParams_recordVideo=true\n")),(0,r.kt)("p",null,"You can add all your custom properties in one or more files as you see fit. And you can refer to the below table for a full list of supported properties."),(0,r.kt)("h3",{id:"2-code-based-properties"},"2. Code-based properties"),(0,r.kt)("p",null,"If you're on the latest SHAFT version you can now set any property programmatically as well to easily read/write properties during runtime."),(0,r.kt)("p",null,"To write values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SHAFT.Properties.browserStack.set().username(username);\nSHAFT.Properties.browserStack.set().accessKey(accessKey);\nSHAFT.Properties.browserStack.set().platformVersion(platformVersion);\nSHAFT.Properties.browserStack.set().deviceName(deviceName);\nSHAFT.Properties.browserStack.set().appUrl(appUrl);\nSHAFT.Properties.browserStack.set().customID(customID);\nSHAFT.Properties.browserStack.set().appName(appName);\n")),(0,r.kt)("p",null,"To read values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"username = SHAFT.Properties.browserStack.username();\naccessKey = SHAFT.Properties.browserStack.accessKey();\nplatformVersion = SHAFT.Properties.browserStack.platformVersion();\ndeviceName = SHAFT.Properties.browserStack.deviceName();\nappUrl = SHAFT.Properties.browserStack.appUrl();\ncustomID = SHAFT.Properties.browserStack.customID();\nappName = SHAFT.Properties.browserStack.appName();\n")),(0,r.kt)("p",null,"Example\nyou want to set targetBrowserName to MicrosoftEdge insted of default value chrome\nin your before method or before you initiate your driver you should do like below "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'      \n    @BeforeMethod\n    public void beforeMethod() {\n        SHAFT.Properties.web.set().targetBrowserName("MicrosoftEdge");\n        driver = new SHAFT.GUI.WebDriver();\n')),(0,r.kt)("p",null,'you can replace "MicrosoftEdge" with any property from table below .'),(0,r.kt)("p",null,"Note that it's recommended to set any static values that won't change during execution, or values that you wish to later override from your CLI execution (CI/CD server) in external property files using the first approach."),(0,r.kt)("h3",{id:"3-cli-based-properties"},"3. CLI-based properties"),(0,r.kt)("p",null,"This is the third and final way to set/override SHAFT's existing default configuration. You will usually use this to execute your tests from a CI/CD pipeline.\nCLI properties override the engine's defaults, and any properties that you've already defined in your files."),(0,r.kt)("p",null,"Here's a sample to set values from your test command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline"},'mvn -e test "-DretryMaximumNumberOfAttempts=2" "-DexecutionAddress=localhost:4444" "-DtargetOperatingSystem=LINUX" "-DtargetBrowserName=firefox" "-DheadlessExecution=true" "-DgenerateAllureReportArchive=true" "-Dtest=${GLOBAL_TESTING_SCOPE}"\n')),(0,r.kt)("h3",{id:"priorities"},"Priorities"),(0,r.kt)("p",null,"Since there are many ways to set SHAFT properties you need to know how the priorities work. The value on the left overrides the value on the right.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Hard-coded > CLI > Files > Defaults")),(0,r.kt)("h3",{id:"supported-properties"},"Supported Properties"),(0,r.kt)("p",null,"Here's a list of all the supported properties ",(0,r.kt)("em",{parentName:"p"},"(Work In Progress)")),(0,r.kt)("h4",{id:"executionplatform"},"ExecutionPlatform"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHAFT.CrossBrowserMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"off")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"off"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sequential"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"parallelized")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 Cross Browser Mode allows SHAFT to run your test class against Chrome, Firefox, and Safari!",(0,r.kt)("br",null),"\u2022 You need to have 'Docker Desktop' installed on your machine, and configured to use Linux images.",(0,r.kt)("br",null),"\u2022 Off \u2192 Your tests will run normally and respect your configuration.",(0,r.kt)("br",null),"\u2022 Sequential \u2192 Your tests will run on Chrome, Firefox, and Safari in sequence.",(0,r.kt)("br",null),"\u2022 Parallelized \u2192 Your tests will run on Chrome, Firefox and Safari in parallel. And for each browser they will run in sequence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executionAddress"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"local")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"local"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"dockerized"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"browserstack"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"host:port"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"http://host:port/wd/hub")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 For Appium, set the below settings and move to the Mobile tab to continue.",(0,r.kt)("br",null),'\u2022 For BrowserStack, set the "Target Operating System" below, and the "Automation Name" in the Mobile tab, then configure the "browserStack.properties" file in your project directory.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetOperatingSystem"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINUX")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LINUX"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WINDOWS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MAC"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ANDROID"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"IOS")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com.SHAFT.proxySettings"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host:port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 Used to configure testing behind a proxy. e.g. corporate proxy.")))),(0,r.kt)("h4",{id:"webcapabilities"},"WebCapabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetBrowserName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chrome")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chrome"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"firefox"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"safari"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MicrosoftEdge")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headlessExecution"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.isCustomDevice"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.deviceName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blackberryZ30"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BlackberryPlayBook"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyNote3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyNoteII"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxySIII"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyS5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyS8"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"samsungGalaxyS8+"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyS9+"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyTabS4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"galaxyFold"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"samsungGalaxyS20Ultra"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"samsungGalaxyA51/71"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"kindleFireHDX"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"lgOptimusL70"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"microsoftLumia550"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"microsoftLumia950"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"motoG4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus10"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus5X"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus6"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus6P"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nexus7"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nokiaLumia520"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nokiaN9"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nestHub"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nestHubMax"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel2XL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel3XL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixel5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jioPhone2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhone4"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhone5/SE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhone6/7/8"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhone6/7/8Plus"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhoneSE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhoneX"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhoneXR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPhone12Pro"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPad"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPadPro"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPadAir"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"iPadMini"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"surfacePro7"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"surfaceDuo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"360")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"600")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.pixelRatio"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileEmulation.userAgent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 This only works for Chrome and Edge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseURL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/ShaftHQ/SHAFT_ENGINE")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lightHouseExecution"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lightHouseExecution.port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8080")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"8080")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"mobilecapabilities"},"MobileCapabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_platformVersion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"11.0, 13.0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_deviceName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"8080")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_automationName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UIAutomator2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UiAutomator2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Espresso"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"XCUITest")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_udid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"RQ3005TAQP")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 Unique device identifier of the connected physical device (leave empty if not applicable).",(0,r.kt)("br",null),"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_browserName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chrome"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Chromium"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Browser"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Safari"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"samsung")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MobileBrowserVersion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"83.0.4103.39")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 The latest version of the WebDriver executable that is compatible with the target browser. You can get it from ",(0,r.kt)("a",{href:"https://www.selenium.dev/documentation/en/webdriver/driver_requirements/#quick-reference"},"here"),".",(0,r.kt)("br",null),"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_app"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"relativePath/to/myApp.apk"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"absolutePath/to/myApp.apk"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"http://myapp.com/app.ipa")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_appPackage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"com.example.android.myApp")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_appActivity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," ")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},".MainActivity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 You can add any property from the ",(0,r.kt)("a",{href:"http://appium.io/docs/en/writing-running-appium/caps/"},"List of Appium Capabilities")," directly to your .property files or via CLI arguments, just make sure to add ",(0,r.kt)("inlineCode",{parentName:"td"},"mobile_")," as a prefix.")))),(0,r.kt)("h4",{id:"platformflags"},"PlatformFlags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryMaximumNumberOfAttempts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"example: ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"4"),", ...etc"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoMaximizeBrowserWindow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCheckForElementVisibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCheckElementLocatorIsUnique"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCheckTextWasTypedCorrectly"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attemptClearBeforeTypingUsingBackspace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCheckNavigationWasSuccessful"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCheckStatusOfRemoteServer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"respectBuiltInWaitsInNativeMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickUsingJavascriptWhenWebDriverClickFails"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"automaticallyAssertResponseStatusCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximumPerformanceMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," -> Disabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," -> Without Headless Execution, ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," -> With Headless Execution ",(0,r.kt)("br",null),"\u2022 Enabling maximumPerformanceMode will disable all complementary features to ensure the fastest execution possible with a 400% calculated performance boost.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skipTestsWithLinkedIssues"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 It is recommended to leave this feature disabled unless you explicitly want to skip any tests that have the @Issue or @Issues annotation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);