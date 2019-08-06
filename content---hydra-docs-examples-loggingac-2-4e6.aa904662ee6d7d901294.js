(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{50:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return l}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return c});t(0);var r=t(68);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={id:"logging",title:"Python logging",sidebar_label:"Python logging"},i=[],g={rightToc:i},p="wrapper";function c(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(p,a({},g,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hydra configures Python logging for your app."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-python"}),'import logging\n\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n\n@hydra.main()\ndef experiment(_cfg):\n    log.info("Info level message")\n    log.debug("Debug level message")\n\n\nif __name__ == "__main__":\n    experiment()\n')),Object(r.b)("p",null,"When you run  your app, by default only INFO and higher (WARN, ERROR) would be logged.\nLogging is sent to stdout and a file logger by default."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python experiment.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n")),Object(r.b)("p",null,"You can enable DEBUG level logging from the command line with the ",Object(r.b)("inlineCode",{parentName:"p"},"-v")," flag.\n",Object(r.b)("inlineCode",{parentName:"p"},"-v")," takes as an argument a comma separated list of loggers."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python experiment.py -v __main__\n[2019-06-27 00:54:39,440][__main__][INFO] - Info level message\n[2019-06-27 00:54:39,441][__main__][DEBUG] - Debug level message\n")),Object(r.b)("p",null,"The root logger is a special logger, it is the parent of all loggers. By using ",Object(r.b)("inlineCode",{parentName:"p"},"-v root")," you get verbose logging from\nall Python loggers, even from libraries."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python experiment.py -v root\n[2019-06-27 00:53:24,346][__main__][INFO] - Info level message\n[2019-06-27 00:53:24,346][__main__][DEBUG] - Debug level message\n")),Object(r.b)("p",null,"Logging can be ",Object(r.b)("a",a({parentName:"p"},{href:"../../configure_hydra/customize_working_directory/example"}),"customized")),Object(r.b)("p",null,"Check the ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/demos/2_logging/logging_example.py"}),"runnable example"),"."))}c.isMDXComponent=!0},68:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u});var r=t(0),a=t.n(r),o=a.a.createContext({}),l=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},c=function(e){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),g=l(n);return a.a.createElement(g[o+"."+t]||g[t]||p[t]||r,n?Object.assign({},i,{components:n}):i)};function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);