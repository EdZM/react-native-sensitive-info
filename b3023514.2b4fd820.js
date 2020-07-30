(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(114)),i={id:"setItem",title:"setItem",sidebar_label:"setItem"},c={unversionedId:"setItem",id:"setItem",isDocsHomePage:!1,title:"setItem",description:"Insert new data into the storage.",source:"@site/docs/setItem.md",permalink:"/react-native-sensitive-info/docs/next/setItem",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/website/docs/setItem.md",version:"next",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"setItem",sidebar:"someSidebar",previous:{title:"isSensorAvailable",permalink:"/react-native-sensitive-info/docs/next/isSensorAvailable"},next:{title:"Android",permalink:"/react-native-sensitive-info/docs/next/android_options"}},s=[{value:"Note",id:"note",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Insert new data into the storage."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"setItem(key, value, options) : Promise<null>\n")),Object(o.b)("p",null,"Check out the options that you can use for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"android_options"}),"Android")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"ios_options"}),"iOS")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import SInfo from 'react-native-sensitive-info';\n\nconst myFunc = async () => {\n    return SInfo.setItem('key1', 'value1', {\n        sharedPreferencesName: 'mySharedPrefs',\n        keychainService: 'myKeychain'\n    });\n}\n\nawait myFunc();\n\n// The data is saved\n")),Object(o.b)("h3",{id:"note"},"Note"),Object(o.b)("p",null,"You can choose which keychain's service (iOS) and shared preferences's name (android) you want to use."),Object(o.b)("p",null,"But if you rather not to use it our ",Object(o.b)("strong",{parentName:"p"},"default")," sharedPreferencesName is: ",Object(o.b)("strong",{parentName:"p"},"shared_preferences")," and keychainService is: ",Object(o.b)("strong",{parentName:"p"},"app"),". To do so, just use ",Object(o.b)("inlineCode",{parentName:"p"},"setItem")," like this: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {});\n")),Object(o.b)("p",null,"If you used Android's getDefaultSharedPreferences in your project the shared preference's name that you are looking for is: ",Object(o.b)("strong",{parentName:"p"},"com.mypackage.MyApp_preferences"),". On the other hand if you used iOS's Keychain the default service is: ",Object(o.b)("strong",{parentName:"p"},"app"),"."))}u.isMDXComponent=!0}}]);