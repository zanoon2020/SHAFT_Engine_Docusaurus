"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[6552],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const i={id:"Touch_Actions",title:"Touch Actions",sidebar_label:"Touch Actions"},l=void 0,r={unversionedId:"Keywords/GUI/Touch_Actions",id:"Keywords/GUI/Touch_Actions",title:"Touch Actions",description:"We can interact with Touch Actions via the following methods:",source:"@site/docs/Keywords/GUI/Touch_Actions.md",sourceDirName:"Keywords/GUI",slug:"/Keywords/GUI/Touch_Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Touch_Actions",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Keywords/GUI/Touch_Actions.md",tags:[],version:"current",frontMatter:{id:"Touch_Actions",title:"Touch Actions",sidebar_label:"Touch Actions"},sidebar:"docs",previous:{title:"Element Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Element_Actions"},next:{title:"Request Builder",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/API/Request_Builder"}},s={},c=[{value:"We can interact with Touch Actions via the following methods:",id:"we-can-interact-with-touch-actions-via-the-following-methods",level:4},{value:"performElementAction():",id:"performelementaction",level:3},{value:"nativeKeyboardKeyPress():",id:"nativekeyboardkeypress",level:3},{value:"hideNativeKeyboard():",id:"hidenativekeyboard",level:3},{value:"waitUntilElementIsVisible():",id:"waituntilelementisvisible",level:3},{value:"pinchToZoom():",id:"pinchtozoom",level:3},{value:"activateAppFromBackground():",id:"activateappfrombackground",level:3},{value:"tap methods:",id:"tap-methods",level:2},{value:"tap():",id:"tap",level:3},{value:"tap():",id:"tap-1",level:3},{value:"doubleTap():",id:"doubletap",level:3},{value:"longTap():",id:"longtap",level:3},{value:"swipe methods:",id:"swipe-methods",level:2},{value:"1. swipeToElement():",id:"1-swipetoelement",level:3},{value:"2. swipeByOffset():",id:"2-swipebyoffset",level:3},{value:"3. swipeElementIntoView():",id:"3-swipeelementintoview",level:3},{value:"4. swipeElementIntoView():",id:"4-swipeelementintoview",level:3},{value:"5. swipeElementIntoView():",id:"5-swipeelementintoview",level:3},{value:"6. swipeElementIntoView():",id:"6-swipeelementintoview",level:3},{value:"sendAppToBackground methods:",id:"sendapptobackground-methods",level:2},{value:"1. sendAppToBackground():",id:"1-sendapptobackground",level:3},{value:"2. sendAppToBackground():",id:"2-sendapptobackground",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"we-can-interact-with-touch-actions-via-the-following-methods"},"We can interact with Touch Actions via the following methods:"),(0,a.kt)("h3",{id:"performelementaction"},"performElementAction():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to call the Element Actions within the current Touch Actions instance. For example, in case of trying to tap a text box to type something. In that case we have to perform type(), an element action, within the tap(), the touch action. "),(0,a.kt)("li",{parentName:"ul"},"This method returns a WebDriverElementActions object.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).touchMethod(element locator).performElementAction().touchMethod(element, String "");\n    }\n\n    @Test2\n    public void touchActions(){\n        driver.element().performTouchAction()\n                .tap(locator)\n                .performElementAction()\n                .type(locator, String "")\n    }\n}\n')),(0,a.kt)("h3",{id:"nativekeyboardkeypress"},"nativeKeyboardKeyPress():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to send a keypress via the device soft keyboard. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: key - the key that should be pressed."),(0,a.kt)("li",{parentName:"ul"},"This method returns a self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).touchMethod(element locator).nativeKeyboardKeyPress(KeyboardKeys key);\n    }\n}\n")),(0,a.kt)("h3",{id:"hidenativekeyboard"},"hideNativeKeyboard():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to hide the device native soft keyboard. "),(0,a.kt)("li",{parentName:"ul"},"This method returns a self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).hideNativeKeyboard();\n    }\n}\n")),(0,a.kt)("h3",{id:"waituntilelementisvisible"},"waitUntilElementIsVisible():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to wait until a specific element is now visible on the current screen."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementReferenceScreenshot - relative path to the reference image from the local object repository."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).waitUntilElementIsVisible(String elementReferenceScreenshot);\n    }\n}\n")),(0,a.kt)("h3",{id:"pinchtozoom"},"pinchToZoom():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to  to zoom the current screen IN/ OUT in case of zoom enabled screen."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: zoomDirection - ZoomDirection.IN or OUT."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).pinchToZoom(ZoomDirection zoomDirection);\n    }\n}\n")),(0,a.kt)("h3",{id:"activateappfrombackground"},"activateAppFromBackground():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to activate an app that has been previously deactivated or sent to the background."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: appPackageName - the full name for the app package that you want to activate. for example ","[com.apple.Preferences]"," or ","[io.appium.android.apis]"),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).activateAppFromBackground(String appPackageName);\n    }\n}\n")),(0,a.kt)("h2",{id:"tap-methods"},"tap methods:"),(0,a.kt)("h3",{id:"tap"},"tap():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to tap an element once on a touch-enabled screen. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).tap(element locator);\n    }\n}\n")),(0,a.kt)("h3",{id:"tap-1"},"tap():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to tap an element once on a touch-enabled screen. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementReferenceScreenshot - relative path to the reference image from the local object repository."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).tap(String elementReferenceScreenshot);\n    }\n}\n")),(0,a.kt)("h3",{id:"doubletap"},"doubleTap():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to double-taps an element on a touch-enabled screen. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).doubleTap(element locator);\n    }\n}\n")),(0,a.kt)("h3",{id:"longtap"},"longTap():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to perform a long-tap on an element to trigger the context menu on a touch-enabled screen. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).longTap(element locator);\n    }\n}\n")),(0,a.kt)("h2",{id:"swipe-methods"},"swipe methods:"),(0,a.kt)("h3",{id:"1-swipetoelement"},"1. swipeToElement():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to swipe the sourceElement onto the destinationElement on a touch-enabled screen."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"sourceElementLocator - the locator of the webElement that needs to be swiped (By xpath, id, selector, name ...etc)."),(0,a.kt)("li",{parentName:"ol"},"destinationElementLocator - the locator of the webElement that you'll drop the sourceElement on (By xpath, id, selector, name ...etc)."))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeToElement(element sourceElementLocator, element destinationElementLocator);\n    }\n}\n")),(0,a.kt)("h3",{id:"2-swipebyoffset"},"2. swipeByOffset():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to swipe an element with the desired x and y offset. Swiping direction is determined by the positive/negative nature of the offset. Swiping destination is determined by the value of the offset."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc).",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'xOffset - the horizontal offset by which the element should be swiped. positive value is "right" and negative value is "left".'),(0,a.kt)("li",{parentName:"ol"},'yOffset - the vertical offset by which the element should be swiped. positive value is "down" and negative value is "up".'))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeByOffset(element locator, int xoffset, element destinationElementLocatorint yoffset);\n    }\n}\n")),(0,a.kt)("h3",{id:"3-swipeelementintoview"},"3. swipeElementIntoView():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to scroll the element into the view in case of native mobile elements."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"targetElementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc) ."),(0,a.kt)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element locator targetElementLocator, SwipeDirection swipeDirection);\n    }\n}\n")),(0,a.kt)("h3",{id:"4-swipeelementintoview"},"4. swipeElementIntoView():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to scroll element into the view using the new W3C compliant actions for android and ios and AI for image identification."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"elementReferenceScreenshot - relative path to the reference image from the local object repository. "),(0,a.kt)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(String elementReferenceScreenshot, SwipeDirection swipeDirection);\n    }\n}\n")),(0,a.kt)("h3",{id:"5-swipeelementintoview"},"5. swipeElementIntoView():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to scroll element into the view using the new W3C compliant actions for android and ios and AI for image identification."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"scrollableElementLocator - the locator of the container/view/scrollable webElement that the scroll action will be performed inside."),(0,a.kt)("li",{parentName:"ol"},"elementReferenceScreenshot - relative path to the reference image from the local object repository. "),(0,a.kt)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element scrollableElementLocator, String elementReferenceScreenshot, SwipeDirection swipeDirection);\n    }\n}\n")),(0,a.kt)("h3",{id:"6-swipeelementintoview"},"6. swipeElementIntoView():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to scroll element into view using the new W3C compliant actions for android and ios."),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"scrollableElementLocator - the locator of the container/view/scrollable webElement that the scroll action will be performed inside."),(0,a.kt)("li",{parentName:"ol"},"targetElementLocator - the locator of the webElement that you want to scroll to under test (By xpath, id, selector, name ...etc). "),(0,a.kt)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element scrollableElementLocator, element targetElementLocator, SwipeDirection swipeDirection);\n    }\n}\n")),(0,a.kt)("h2",{id:"sendapptobackground-methods"},"sendAppToBackground methods:"),(0,a.kt)("h3",{id:"1-sendapptobackground"},"1. sendAppToBackground():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to send the currently active app to the background, and return after a certain number of seconds. "),(0,a.kt)("li",{parentName:"ul"},"Needed parameters: secondsToSpendInTheBackground - number of seconds before returning to the app."),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).sendAppToBackground(int secondsToSpendInTheBackground);\n    }\n}\n")),(0,a.kt)("h3",{id:"2-sendapptobackground"},"2. sendAppToBackground():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use this method to send the currently active app to the background and leave the app deactivated. "),(0,a.kt)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).sendAppToBackground();\n    }\n}\n")))}p.isMDXComponent=!0}}]);