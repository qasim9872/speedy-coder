(this["webpackJsonpspeedy-coder"]=this["webpackJsonpspeedy-coder"]||[]).push([[0],{36:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),o=n.n(c),a=n(13),s=n.n(a),i=n(10),l=(n(36),n(4)),u=n(3),d=function(e){var t=e.currentTab,n=e.name,c=e.path,o=e.onClick;return Object(r.jsx)("li",{className:"no-underline border-b-2 uppercase tracking-wide font-bold text-xs mr-8 ".concat(t===n?"text-secondary-300 border-secondary-300":"text-gray-200 border-transparent hover:text-secondary-200"),children:Object(r.jsx)(i.b,{to:c,onClick:o,className:"text-base",children:n})})},j=function(e){var t,n=e.title,a=e.Logo,s=e.layouts,i=Object(c.useState)((null===(t=s[0])||void 0===t?void 0:t.name)||""),j=Object(l.a)(i,2),f=j[0],b=j[1],m=Object(u.e)();return o.a.useEffect((function(){var e=s.find((function(e){return e.routeProps.path===m.pathname}));b((null===e||void 0===e?void 0:e.name)||"")}),[s,m]),Object(r.jsxs)("header",{className:"flex w-full bg-gray-600 justify-between items-center px-8 py-3 shadow-md",children:[Object(r.jsxs)("div",{children:[a&&Object(r.jsx)(a,{className:"App-logo"}),Object(r.jsx)("h1",{className:"text-lg uppercase",children:n})]}),Object(r.jsx)("ul",{className:"flex justify-evenly",children:s.map((function(e){return Object(r.jsx)(d,{currentTab:f,name:e.name,path:e.routeProps.path,onClick:function(){return b(e.name)}},e.name)}))})]})},f=function(e){var t=e.name,n=e.location,c=e.link;return Object(r.jsx)("footer",{className:"flex w-full bg-gray-600 divide-white divide-y-2 divide-y-2 justify-center items-center px-8 py-2 shadow-md",children:Object(r.jsxs)("span",{children:["Copyright \xa9 ","".concat((new Date).getFullYear()," "),Object(r.jsx)("a",{href:c,className:"text-secondary-300 hover:underline",children:t}),". Made with \u2764\ufe0f in ",n,"."]})})},b=function(){return Object(r.jsxs)("div",{className:"py-5 mx-5 w-full lg:w-2/3 flex flex-col justify-center items-center",children:[Object(r.jsx)("div",{className:"flex justify-center items-center",children:Object(r.jsx)("h1",{className:"text-2xl lg:text-5xl",children:"Are you a Speedy Coder?"})}),Object(r.jsx)("div",{className:"p-3",children:"How to play?"})]})},m=n(24),O=function(e){var t=c.createContext([e,function(){}]);return{Provider:function(n){var o=n.children,a=Object(c.useState)(e);return Object(r.jsx)(t.Provider,{value:a,children:o})},useHook:function(){return Object(c.useContext)(t)}}},x=Object({NODE_ENV:"production",PUBLIC_URL:"/speedy-coder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"Speedy Coder",REACT_APP_DESCRIPTION:"The app will help calculate your typing speed",REACT_APP_LOG_LEVEL:"info"}),h="production"===x.NODE_ENV,v=x.REACT_APP_NAME||"Speedy Coder",p=x.REACT_APP_LOG_LEVEL||"info",g=O({myGlobalConfig:{title:v,author:{name:"Muhammad Qasim",location:"London",link:"https://github.com/qasim9872"},show:{navbar:!0,footer:!0}},speedyCoder:{TOTAL_TIME:6e4,INTERVAL:1e3,CODE_LEVELS:[{title:"Hello World",codeToType:"console.log('Hello World');"},{title:"Add Two Numbers",codeToType:"function add(num1, num2) {\n    return num1 + num2;\n}"},{title:"For In Loop",codeToType:"const names = [ 'Marcus', 'Norman', 'Christian' ]\n\nfor (const index in names) {  \n  console.log(`${names[index]} is at position ${index}`)\n}"},{title:"First HTTP Server",codeToType:"const http = require('http');\nhttp\n  .createServer(function (req, res) {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('Hello Node.js World!');\n  })\n  .listen(8080);"}]}}),y=g.Provider,T=g.useHook,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=o.a.useState(0),r=Object(l.a)(n,2),c=r[0],a=r[1],s=o.a.useRef({}),i=function e(n){s.current.started||(s.current.started=n,s.current.lastInterval=n);var r=Math.min(t,s.current.timeLeft||1/0);n-s.current.lastInterval>=r&&(s.current.lastInterval+=r,a((function(e){return s.current.timeLeft=e-r,s.current.timeLeft}))),n-s.current.started<s.current.timeToCount?s.current.requestId=window.requestAnimationFrame(e):(s.current={},a(0))},u=o.a.useCallback((function(t){window.cancelAnimationFrame(s.current.requestId);var n=void 0!==t?t:e;delete s.current.started,delete s.current.lastInterval,s.current.timeToCount=n,s.current.requestId=window.requestAnimationFrame(i),a(n)}),[]),d=o.a.useCallback((function(){window.cancelAnimationFrame(s.current.requestId),delete s.current.started,delete s.current.lastInterval,s.current.timeToCount=s.current.timeLeft}),[]),j=o.a.useCallback((function(){!s.current.started&&s.current.timeLeft>0&&(window.cancelAnimationFrame(s.current.requestId),s.current.requestId=window.requestAnimationFrame(i))}),[]),f=o.a.useCallback((function(){s.current.timeLeft&&(window.cancelAnimationFrame(s.current.requestId),s.current={},a(0))}),[]),b=o.a.useMemo((function(){return{start:u,pause:d,resume:j,reset:f}}),[]);return o.a.useEffect((function(){return f}),[]),{timeLeft:c,actions:b}},E=n(25),C={name:v,level:p,prettyPrint:!h},N=n.n(E)()(C),L=n(26),S=n.n(L),P=(n(45),n(46),function(e){var t=e.code,n=e.name,o=e.onCodeUpdate,a=e.backgroundText,s=e.language,i=void 0===s?"javascript":s;Object(c.useEffect)((function(){S.a.highlightAll()}),[t]);return Object(r.jsxs)("div",{className:"w-full lg:w-2/3 h-80 code-edit-container",children:[Object(r.jsx)("pre",{className:"code-output",children:Object(r.jsx)("code",{className:"language-none background-code",children:a})}),Object(r.jsx)("textarea",{id:n,name:n,className:"code-input",value:t,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){var n=t,r=e.currentTarget.selectionStart;"Tab"===e.key&&(n="".concat(n.substring(0,r),"    ").concat(n.substring(r,n.length)),e.currentTarget.selectionStart=r+3,e.currentTarget.selectionEnd=r+4,e.preventDefault(),o(n))}}),Object(r.jsx)("pre",{className:"code-output",children:Object(r.jsx)("code",{className:"language-".concat(i),children:t})})]})}),A=n(20),I=n(27),M=n(28),_=function(e){var t=e.name,n=e.value,c=e.Icon,o=e.color;return Object(r.jsx)("div",{className:"widget w-1/4 p-4 mx-1 rounded-lg bg-white border-l-4 border-".concat(o,"-300"),children:Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("div",{className:"flex items-center justify-center h-12 w-12 p-3.5 bg-".concat(o,"-100 text-").concat(o,"-500 text-white rounded-full mr-3"),children:Object(r.jsx)(c,{className:"w-8 h-8"})}),Object(r.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(r.jsx)("div",{className:"text-lg",children:n}),Object(r.jsx)("div",{className:"text-sm text-gray-400 capitalize",children:t})]})]})})},k=function(e){var t=e.metrics,n=Object(c.useState)(""),o=Object(l.a)(n,2),a=o[0],s=o[1];return Object(c.useEffect)((function(){var e=t.timeLeft/1e3;s("".concat(e,"s"))}),[t.timeLeft]),Object(r.jsxs)("div",{className:"flex w-full lg:w-2/3 justify-around",children:[Object(r.jsx)(_,{name:"Level ".concat(t.level.index+1),value:t.level.title||"",Icon:A.b,color:"purple"}),Object(r.jsx)(_,{name:"Time Left",value:a,Icon:I.a,color:"yellow"}),Object(r.jsx)(_,{name:"Words Per Minute",value:"".concat(t.wordsPerMinute),Icon:M.a,color:"blue"}),Object(r.jsx)(_,{name:"Corrected WPM",value:"".concat(t.correctedWordsPerMinute),Icon:A.a,color:"green"})]})},F=(n(47),n(29)),q=function(e){var t=e.open,n=e.onCloseModal,c=e.score;return Object(r.jsx)(F.a,{open:t,onClose:n,center:!0,children:Object(r.jsx)("div",{className:"flex m-5 p-5 text-black",children:Object(r.jsxs)("h1",{children:["Your average WPM is ",c]})})})},D=function(){var e=T(),t=Object(l.a)(e,1)[0].speedyCoder,n=Object(c.useState)(0),o=Object(l.a)(n,2),a=o[0],s=o[1],i=Object(c.useState)(0),u=Object(l.a)(i,2),d=u[0],j=u[1],f=Object(c.useState)(0),b=Object(l.a)(f,2),O=b[0],x=b[1],h=Object(c.useState)(0),v=Object(l.a)(h,2),p=v[0],g=v[1],y=Object(c.useState)(!1),E=Object(l.a)(y,2),C=E[0],L=E[1],S=Object(c.useState)(""),A=Object(l.a)(S,2),I=A[0],M=A[1],_=Object(c.useState)(),F=Object(l.a)(_,2),D=F[0],H=F[1],R=Object(c.useState)(0),W=Object(l.a)(R,2),V=W[0],G=W[1],K=Object(c.useState)(!1),U=Object(l.a)(K,2),B=U[0],J=U[1],Y=w(t.TOTAL_TIME,t.INTERVAL),$=Y.timeLeft,z=Y.actions,Q=z.start,X=z.reset,Z=z.pause,ee=Object(c.useMemo)((function(){return function(){X(),L(!1),J(!1),s(0),j(0),x(0),g(0),M(""),G(0)}}),[]),te=Object(c.useMemo)((function(){return function(){N.info("GAME ENDS"),L(!1),J(!0),Z()}}),[Z]);return Object(c.useEffect)((function(){C||B||!I||(L(!0),J(!1),Q(),N.info("starting countdown."))}),[C,I,B,Q]),Object(c.useEffect)((function(){var e=t.CODE_LEVELS;if(N.info("setting level config => ".concat(a),e[a]),G((function(e){return Math.floor((e+p)/2)})),e[a]){M("");var n=e[a];H(n)}else te()}),[a]),Object(c.useEffect)((function(){if(null===D||void 0===D?void 0:D.codeToType){var e=I.length,t=D.codeToType.substring(0,e),n=Object(m.diffChars)(t,I).reduce((function(e,t){return t.removed?e+(t.count||0):e}),0);x(n)}}),[D,I]),Object(c.useEffect)((function(){I.length===(null===D||void 0===D?void 0:D.codeToType.length)&&s((function(e){return e+1}))}),[D,I]),Object(c.useEffect)((function(){0===$&&C&&te()}),[C,te,$]),Object(c.useEffect)((function(){var e=I.length,n=(t.TOTAL_TIME-$)/1e3/60||1,r=e/5,c=Math.floor(r/n),o=Math.floor((r-O)/n);N.debug({wpm:c,typedCodeLength:e,uncorrectedErrors:O,timeTakenMinutes:n}),j(c),g(o<0?0:o)}),[$,I,t,O]),Object(r.jsxs)("div",{className:"flex-grow flex flex-col w-full mx-10 justify-center items-center",children:[Object(r.jsx)(k,{metrics:{level:{index:a,title:null===D||void 0===D?void 0:D.title},timeLeft:$||t.TOTAL_TIME,wordsPerMinute:d,uncorrectedErrors:O,correctedWordsPerMinute:p}}),D&&Object(r.jsx)(P,{name:"speedy-coder",language:"javascript",code:I,backgroundText:D.codeToType,onCodeUpdate:function(e){return M(e)}}),Object(r.jsx)(q,{open:B,onCloseModal:function(){return ee()},score:V})]})},H=[{name:"Home",enable:!0,showInNav:!1,routeProps:{path:"/",component:function(){return Object(r.jsxs)("div",{className:"h-full w-full lg:w-2/3 flex-col flex-grow flex justify-center items-center",children:[Object(r.jsx)(b,{}),Object(r.jsx)(D,{})]})}}}],R=n(15),W=function(e){var t=e.layouts,n=T(),o=Object(l.a)(n,1)[0].myGlobalConfig,a=o.title,s=o.show,i=o.author,d=t.filter((function(e){return e.enable})),b=d.filter((function(e){return e.showInNav}));return Object(r.jsxs)("div",{className:"flex flex-col mx-auto min-w-0 h-screen",children:[s.navbar&&Object(r.jsx)(j,{title:a,layouts:b}),Object(r.jsx)("div",{className:"h-full flex-grow text-black flex justify-center",children:d.map((function(e){return Object(c.createElement)(u.a,Object(R.a)(Object(R.a)({},e.routeProps),{},{key:e.name}))}))}),s.footer&&Object(r.jsx)(f,Object(R.a)({},i))]})},V=O({logger:N}),G=V.Provider,K=(V.useHook,n(30)),U=function(e,t){return function(){var n,c=Object(r.jsx)(e,{}),o=Object(K.a)(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;c=Object(r.jsx)(a,{children:c})}}catch(s){o.e(s)}finally{o.f()}return c}}((function(){return Object(r.jsx)(W,{layouts:H})}),[G,y]),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(i.a,{children:Object(r.jsx)(U,{})})}),document.getElementById("root")),B(N.info.bind(N))}},[[49,1,2]]]);
//# sourceMappingURL=main.df7d628d.chunk.js.map