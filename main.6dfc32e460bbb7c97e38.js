(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[179],{46:(t,n,e)=>{"use strict";var r=e(8),o=e(12);function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n)}var c=e(0),s=e(47),u=e.n(s),l=e(49);function p(t){return"/"===t.charAt(0)}function f(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}function h(t,n){if(!t)throw new Error("Invariant failed")}function d(t){return"/"===t.charAt(0)?t:"/"+t}function v(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function m(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function y(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,l.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&p(t),a=n&&p(n),c=i||a;if(t&&p(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var s=o[o.length-1];e="."===s||".."===s||""===s}else e=!1;for(var u=0,l=o.length;l>=0;l--){var h=o[l];"."===h?f(o,l):".."===h?(f(o,l),u++):u&&(f(o,l),u--)}if(!c)for(;u--;u)o.unshift("..");!c||""===o[0]||o[0]&&p(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function x(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,n){n(window.confirm(t))}var E="popstate",C="hashchange";function O(){try{return window.history.state||{}}catch(t){return{}}}function _(t){void 0===t&&(t={}),w||h(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,s=i.getUserConfirmation,u=void 0===s?b:s,p=i.keyLength,f=void 0===p?6:p,_=t.basename?m(d(t.basename)):"";function k(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return _&&(i=v(i,_)),g(i,r,e)}function A(){return Math.random().toString(36).substr(2,f)}var R=x();function T(t){(0,l.Z)(Z,t),Z.length=e.length,R.notifyListeners(Z.location,Z.action)}function j(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||L(k(t.state))}function P(){L(k(O()))}var S=!1;function L(t){S?(S=!1,T()):R.confirmTransitionTo(t,"POP",u,(function(n){n?T({action:"POP",location:t}):function(t){var n=Z.location,e=M.indexOf(n.key);-1===e&&(e=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(S=!0,N(o))}(t)}))}var U=k(O()),M=[U.key];function I(t){return _+y(t)}function N(t){e.go(t)}var $=0;function B(t){1===($+=t)&&1===t?(window.addEventListener(E,j),o&&window.addEventListener(C,P)):0===$&&(window.removeEventListener(E,j),o&&window.removeEventListener(C,P))}var W=!1,Z={length:e.length,action:"POP",location:U,createHref:I,push:function(t,n){var o="PUSH",i=g(t,n,A(),Z.location);R.confirmTransitionTo(i,o,u,(function(t){if(t){var n=I(i),a=i.key,s=i.state;if(r)if(e.pushState({key:a,state:s},null,n),c)window.location.href=n;else{var u=M.indexOf(Z.location.key),l=M.slice(0,u+1);l.push(i.key),M=l,T({action:o,location:i})}else window.location.href=n}}))},replace:function(t,n){var o="REPLACE",i=g(t,n,A(),Z.location);R.confirmTransitionTo(i,o,u,(function(t){if(t){var n=I(i),a=i.key,s=i.state;if(r)if(e.replaceState({key:a,state:s},null,n),c)window.location.replace(n);else{var u=M.indexOf(Z.location.key);-1!==u&&(M[u]=i.key),T({action:o,location:i})}else window.location.replace(n)}}))},go:N,goBack:function(){N(-1)},goForward:function(){N(1)},block:function(t){void 0===t&&(t=!1);var n=R.setPrompt(t);return W||(B(1),W=!0),function(){return W&&(W=!1,B(-1)),n()}},listen:function(t){var n=R.appendListener(t);return B(1),function(){B(-1),n()}}};return Z}var k=e(38),A=e.n(k);function R(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e(7),e(6);var T=1073741823,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function P(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}var S=c.createContext||function(t,n){var e,r,o,i="__create-react-context-"+((j[o="__global_unique_id__"]=(j[o]||0)+1)+"__"),s=function(t){function e(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).emitter=P(n.props.value),n}a(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):T,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(c.Component);s.childContextTypes=((e={})[i]=u().object.isRequired,e);var l=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).observedBits=void 0,t.state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}a(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?T:n},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?T:t},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(c.Component);return l.contextTypes=((r={})[i]=u().object,r),{Provider:s,Consumer:l}},L=function(t){var n=S();return n.displayName=t,n},U=L("Router-History"),M=L("Router"),I=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._pendingLocation=t}))),e}a(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){var t=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(n){t._isMounted&&t.setState({location:n})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return c.createElement(M.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},c.createElement(U.Provider,{children:this.props.children||null,value:this.props.history}))},n}(c.Component);c.Component,c.Component;var N={},$=0;function B(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,s=e.sensitive,u=void 0!==s&&s;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=N[e]||(N[e]={});if(r[t])return r[t];var o=[],i={regexp:A()(t,o,n),keys:o};return $<1e4&&(r[t]=i,$++),i}(e,{end:i,strict:c,sensitive:u}),o=r.regexp,a=r.keys,s=o.exec(t);if(!s)return null;var l=s[0],p=s.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=p[e],t}),{})}}),null)}var W=function(t){function n(){return t.apply(this,arguments)||this}return a(n,t),n.prototype.render=function(){var t=this;return c.createElement(M.Consumer,null,(function(n){n||h(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?B(e.pathname,t.props):n.match,o=(0,l.Z)({},n,{location:e,match:r}),i=t.props,a=i.children,s=i.component,u=i.render;return Array.isArray(a)&&function(t){return 0===c.Children.count(t)}(a)&&(a=null),c.createElement(M.Provider,{value:o},o.match?a?"function"==typeof a?a(o):a:s?c.createElement(s,o):u?u(o):null:"function"==typeof a?a(o):null)}))},n}(c.Component);c.Component;var Z=function(t){function n(){return t.apply(this,arguments)||this}return a(n,t),n.prototype.render=function(){var t=this;return c.createElement(M.Consumer,null,(function(n){n||h(!1);var e,r,o=t.props.location||n.location;return c.Children.forEach(t.props.children,(function(t){if(null==r&&c.isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?B(o.pathname,(0,l.Z)({},t.props,{path:i})):n.match}})),r?c.cloneElement(e,{location:o,computedMatch:r}):null}))},n}(c.Component);c.useContext;var D=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=_(n.props),n}return a(n,t),n.prototype.render=function(){return c.createElement(I,{history:this.history,children:this.props.children})},n}(c.Component);c.Component;var H=function(t,n){return"function"==typeof t?t(n):t},V=function(t,n){return"string"==typeof t?g(t,null,null,n):t},K=function(t){return t},q=c.forwardRef;void 0===q&&(q=K);var F=q((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=R(t,["innerRef","navigate","onClick"]),a=i.target,s=(0,l.Z)({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||a&&"_self"!==a||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=K!==q&&n||e,c.createElement("a",s)})),J=q((function(t,n){var e=t.component,r=void 0===e?F:e,o=t.replace,i=t.to,a=t.innerRef,s=R(t,["component","replace","to","innerRef"]);return c.createElement(M.Consumer,null,(function(t){t||h(!1);var e=t.history,u=V(H(i,t.location),t.location),p=u?e.createHref(u):"",f=(0,l.Z)({},s,{href:p,navigate:function(){var n=H(i,t.location),r=y(t.location)===y(V(n));(o||r?e.replace:e.push)(n)}});return K!==q?f.ref=n||a:f.innerRef=a,c.createElement(r,f)}))})),z=function(t){return t},Y=c.forwardRef;void 0===Y&&(Y=z),Y((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,i=void 0===o?"active":o,a=t.activeStyle,s=t.className,u=t.exact,p=t.isActive,f=t.location,d=t.sensitive,v=t.strict,m=t.style,y=t.to,g=t.innerRef,x=R(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(M.Consumer,null,(function(t){t||h(!1);var e=f||t.location,o=V(H(y,e),e),w=o.pathname,b=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=b?B(e.pathname,{path:b,exact:u,sensitive:d,strict:v}):null,C=!!(p?p(E,e):E),O="function"==typeof s?s(C):s,_="function"==typeof m?m(C):m;C&&(O=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(O,i),_=(0,l.Z)({},_,a));var k=(0,l.Z)({"aria-current":C&&r||null,className:O,style:_,to:o},x);return z!==Y?k.ref=n||g:k.innerRef=g,c.createElement(J,k)}))}));var G=e(14),Q=e(15),X=e(1);function tt(){return(0,X.jsxs)("div",{children:[(0,X.jsxs)("nav",{children:[(0,X.jsx)(J,{"data-testid":"link-home",to:"/",children:"Home"}),(0,X.jsx)(J,{to:"/about",children:"About"})]}),(0,X.jsxs)(Z,{children:[(0,X.jsx)(W,{path:"/about",children:(0,X.jsx)(G.C,{})}),(0,X.jsx)(W,{path:"/",children:(0,X.jsx)(Q.S,{})})]})]})}e(42);var nt=(0,e(13).N2)();r.render((0,X.jsx)(D,{children:(0,X.jsx)(o.zt,{store:nt,children:(0,X.jsx)(tt,{})})}),document.getElementById("root"))},48:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var r=e(10),o=e.n(r)()(!1);o.push([t.id,"body {\n  padding: 20px;\n}\n\ninput,\na {\n  margin-right: 8px;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n.list {\n  margin-top: 12px;\n}\n",""]);const i=o},39:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},38:(t,n,e)=>{var r=e(39);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",p(r)),e)}(n,e,o):function(t,n,e){return f(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",l=n&&n.delimiter||"/";null!=(e=o.exec(t));){var p=e[0],f=e[1],h=e.index;if(c+=t.slice(a,h),a=h+p.length,f)c+=f[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],x=e[6],w=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===x||"*"===x,C="?"===x||"*"===x,O=e[2]||l,_=y||g;r.push({name:m||i++,prefix:v||"",delimiter:O,optional:C,repeat:E,partial:b,asterisk:!!w,pattern:_?u(_):w?".*":"[^"+s(O)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",p(n)));return function(n,o){for(var i="",c=n||{},s=(o||{}).pretty?a:encodeURIComponent,u=0;u<t.length;u++){var l=t[u];if("string"!=typeof l){var p,f=c[l.name];if(null==f){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=s(f[h]),!e[u].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(p)+"`");i+=(0===h?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):s(f),!e[u].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');i+=l.prefix+p}}else i+=l}return i}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,n){return t.keys=n,t}function p(t){return t&&t.sensitive?"":"i"}function f(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var u=t[c];if("string"==typeof u)a+=s(u);else{var f=s(u.prefix),h="(?:"+u.pattern+")";n.push(u),u.repeat&&(h+="(?:"+f+h+")*"),a+=h=u.optional?u.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var d=s(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,p(e)),n)}},40:(t,n,e)=>{"use strict";var r=e(41);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},47:(t,n,e)=>{t.exports=e(40)()},41:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42:(t,n,e)=>{var r=e(9),o=e(48);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}}},t=>{t.O(0,[443,177],(()=>(46,t(t.s=46)))),t.O()}]);