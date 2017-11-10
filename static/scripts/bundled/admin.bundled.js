webpackJsonp([1],{106:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},107:function(e,t,n){"use strict";var r=n(7),o=n(252),i=n(254),a=n(255),s=n(256),u=n(108),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(257);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if(window.XMLHttpRequest||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var _=e.auth.username||"",g=e.auth.password||"";f.Authorization="Basic "+c(_+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,l,i),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n(258),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(f[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},108:function(e,t,n){"use strict";var r=n(253);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},109:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},110:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},236:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var r=n(0),o=t(r),i=n(27),a=t(i),s=n(237),u=t(s),c=n(50),l=t(c),d=n(14),f=t(d),p=n(6),m=(t(p),n(10)),h=t(m),_=n(36),g=t(_),v=n(3),y=t(v),w=n(28),b=t(w),x=n(61),C=t(x),E=n(238),T=t(E),S=o.default;window.app=function(t,n){window.Galaxy=new a.default.GalaxyApp(t,n),Galaxy.debug("admin app");var r=g.default.extend({routes:{"(/)admin(/)users":"show_users","(/)admin(/)roles":"show_roles","(/)admin(/)groups":"show_groups","(/)admin(/)tool_versions":"show_tool_versions","(/)admin(/)quotas":"show_quotas","(/)admin(/)repositories":"show_repositories","(/)admin(/)forms":"show_forms","(/)admin(/)form(/)(:form_id)":"show_form","(/)admin/api_keys":"show_user_api_keys"},authenticate:function(e,t){return Galaxy.user&&Galaxy.user.id&&Galaxy.user.get("is_admin")},show_users:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/users_list",url_data:Galaxy.params,dict_format:!0}))},show_roles:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/roles_list",url_data:Galaxy.params,dict_format:!0}))},show_groups:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/groups_list",url_data:Galaxy.params,dict_format:!0}))},show_repositories:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin_toolshed/browse_repositories",url_data:Galaxy.params,dict_format:!0}))},show_tool_versions:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/tool_versions_list",url_data:Galaxy.params,dict_format:!0}))},show_quotas:function(){this.page.display(new f.default({url_base:Galaxy.root+"admin/quotas_list",url_data:Galaxy.params,dict_format:!0}))},show_user_api_keys:function(){var e=document.createElement("div");this.page.display(e),new C.default(T.default).$mount(e)},show_forms:function(){this.page.display(new f.default({url_base:Galaxy.root+"forms/forms_list",url_data:Galaxy.params,dict_format:!0}))},show_form:function(e){var t="?id="+h.default.get("id"),n={reset_user_password:{title:"Reset passwords",url:"admin/reset_user_password"+t,icon:"fa-user",submit_title:"Save new password",redirect:"admin/users"},manage_roles_and_groups_for_user:{url:"admin/manage_roles_and_groups_for_user"+t,icon:"fa-users",redirect:"admin/users"},manage_users_and_groups_for_role:{url:"admin/manage_users_and_groups_for_role"+t,redirect:"admin/roles"},manage_users_and_roles_for_group:{url:"admin/manage_users_and_roles_for_group"+t,redirect:"admin/groups"},manage_users_and_groups_for_quota:{url:"admin/manage_users_and_groups_for_quota"+t,redirect:"admin/quotas"},create_role:{url:"admin/create_role",redirect:"admin/roles"},create_group:{url:"admin/create_group",redirect:"admin/groups"},create_quota:{url:"admin/create_quota",redirect:"admin/quotas"},rename_role:{url:"admin/rename_role"+t,redirect:"admin/roles"},rename_group:{url:"admin/rename_group"+t,redirect:"admin/groups"},rename_quota:{url:"admin/rename_quota"+t,redirect:"admin/quotas"},edit_quota:{url:"admin/edit_quota"+t,redirect:"admin/quotas"},set_quota_default:{url:"admin/set_quota_default"+t,redirect:"admin/quotas"},create_form:{url:"forms/create_form",redirect:"admin/forms"},edit_form:{url:"forms/edit_form"+t,redirect:"admin/forms"}};this.page.display(new l.default.View(n[e]))}});S(function(){e.extend(t.config,{active_view:"admin"}),y.default.setWindowTitle("Administration"),Galaxy.page=new b.default.View(e.extend(t,{Left:u.default,Router:r}))})}}).call(t,n(1))},237:function(e,t,n){"use strict";(function(e,r,o){Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=e.View.extend({initialize:function(t,n){var r=this;this.page=t,this.root=n.root,this.config=n.config,this.settings=n.settings,this.message=n.message,this.status=n.status,this.model=new e.Model({title:(0,a.default)("Administration")}),this.categories=new e.Collection([{title:"Server",items:[{title:"Data types",url:"admin/view_datatypes_registry"},{title:"Data tables",url:"admin/view_tool_data_tables"},{title:"Data libraries",url:"library_admin/browse_libraries"},{title:"Display applications",url:"admin/display_applications"},{title:"Manage jobs",url:"admin/jobs"},{title:"Local data",url:"data_manager"}]},{title:"User Management",items:[{title:"Users",url:"admin/users",target:"__use_router__"},{title:"Quotas",url:"admin/quotas",target:"__use_router__",enabled:r.config.enable_quotas},{title:"Groups",url:"admin/groups",target:"__use_router__"},{title:"Roles",url:"admin/roles",target:"__use_router__"},{title:"Forms",url:"admin/forms",target:"__use_router__"},{title:"API keys",url:"admin/api_keys",target:"__use_router__"},{title:"Impersonate a user",url:"admin/impersonate",enabled:r.config.allow_user_impersonation}]},{title:"Tool Management",items:[{title:"Install new tools",url:"admin_toolshed/browse_tool_sheds",enabled:r.settings.is_tool_shed_installed},{title:"Install new tools (Beta)",url:"admin_toolshed/browse_toolsheds",enabled:r.settings.is_tool_shed_installed&&r.config.enable_beta_ts_api_install},{title:"Monitor installation",url:"admin_toolshed/monitor_repository_installation",enabled:r.settings.installing_repository_ids},{title:"Manage tools",url:"admin/repositories",enabled:r.settings.is_repo_installed,target:"__use_router__"},{title:"Manage metadata",url:"admin_toolshed/reset_metadata_on_selected_installed_repositories",enabled:r.settings.is_repo_installed},{title:"Manage whitelist",url:"admin/sanitize_whitelist"},{title:"Manage dependencies",url:"admin/manage_tool_dependencies"},{title:"View lineage",url:"admin/tool_versions",target:"__use_router__"},{title:"View migration stages",url:"admin/review_tool_migration_stages"},{title:"View error logs",url:"admin/tool_errors"}]}]),this.setElement(this._template())},render:function(){var e=this;this.$el.empty(),this.categories.each(function(t){var n=r(e._templateSection(t.attributes)),i=n.find(".ui-side-section-body");o.each(t.get("items"),function(t){if(void 0===t.enabled||t.enabled){var n=r("<a/>").attr({href:e.root+t.url}).text((0,a.default)(t.title));"__use_router__"==t.target?n.on("click",function(n){n.preventDefault(),e.page.router.push(t.url)}):n.attr("target","galaxy_main"),i.append(r("<div/>").addClass("ui-side-section-body-title").append(n))}}),e.$el.append(n)}),this.page.$("#galaxy_main").prop("src",this.root+"admin/center?message="+this.message+"&status="+this.status)},_templateSection:function(e){return["<div>",'<div class="ui-side-section-title">'+(0,a.default)(e.title)+"</div>",'<div class="ui-side-section-body"/>',"</div>"].join("")},_template:function(){return'<div class="ui-side-panel"/>'},toString:function(){return"adminPanel"}});t.default=s}).call(t,n(2),n(0),n(1))},238:function(e,t,n){"use strict";function r(e){n(239)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(245),i=n.n(o),a=n(266),s=n(244),u=r,c=s(i.a,a.a,!1,u,null,null);t.default=c.exports},239:function(e,t,n){var r=n(240);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(242)("3c2bc722",r,!0)},240:function(e,t,n){t=e.exports=n(241)(void 0),t.push([e.i,"",""])},241:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},242:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(_){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(243),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,h=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},243:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],l={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},244:function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:c}}},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(246),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{users:[],errors:[]}},created:function(){var e=this;o.default.get(Galaxy.root+"userskeys/all_users").then(function(t){e.users=t.data}).catch(function(t){e.errors.push(t)})},methods:{generateKey:function(e){var t=this;o.default.get(Galaxy.root+"userskeys/admin_api_keys",{params:{uid:e}}).then(function(e){t.users=e.data}).catch(function(e){t.errors.push(e)})}}}},246:function(e,t,n){e.exports=n(247)},247:function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(7),i=n(106),a=n(249),s=n(51),u=r(s);u.Axios=a,u.create=function(e){return r(o.merge(s,e))},u.Cancel=n(110),u.CancelToken=n(264),u.isCancel=n(109),u.all=function(e){return Promise.all(e)},u.spread=n(265),e.exports=u,e.exports.default=u},248:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},249:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(51),i=n(7),a=n(259),s=n(260);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},250:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):_=-1,m.length&&s())}function s(){if(!h){var e=o(a);h=!0;for(var t=m.length;t;){for(p=m,m=[];++_<t;)p&&p[_].run();_=-1,t=m.length}p=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,m=[],h=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},251:function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},252:function(e,t,n){"use strict";var r=n(108);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},253:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},254:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(7);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},255:function(e,t,n){"use strict";var r=n(7),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},256:function(e,t,n){"use strict";var r=n(7);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},257:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),a="",s=0,u=i;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},258:function(e,t,n){"use strict";var r=n(7);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},259:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(7);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},260:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(7),i=n(261),a=n(109),s=n(51),u=n(262),c=n(263);e.exports=function(e){return r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},261:function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},262:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},263:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},264:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(110);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},265:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},266:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toolForm",attrs:{id:"form-userkeys"}},[n("div",{staticClass:"toolFormTitle"},[e._v("User Information")]),e._v(" "),e.users&&e.users.length>0?n("div",[n("table",{staticClass:"grid"},[e._m(0),e._v(" "),n("tbody",e._l(e.users,function(t){return n("tr",[n("td",[e._v("\n                        "+e._s(t.uid)+"\n                    ")]),e._v(" "),n("td",[e._v("\n                        "+e._s(t.email)+"\n                    ")]),e._v(" "),n("td",[e._v("\n                        "+e._s(t.key)+"\n                    ")]),e._v(" "),n("td",[n("input",{attrs:{type:"button",value:"Generate a new key now"},on:{click:function(n){e.generateKey(t.uid)}}})])])}))])]):n("div",[n("div",[e._v("No user information available")])]),e._v(" "),n("div",{staticStyle:{clear:"both"}})])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("th",[e._v("Encoded UID")]),n("th",[e._v("Email")]),n("th",[e._v("API Key")]),n("th",[e._v("Actions")])])}],i={render:r,staticRenderFns:o};t.a=i},36:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(10),s=r(a),u=n(6),c=r(u),l=i.default,d=e.Router.extend({initialize:function(e,t){this.page=e,this.options=t},push:function(e,t){t=t||{},t.__identifer=Math.random().toString(36).substr(2),l.isEmptyObject(t)||(e+=-1==e.indexOf("?")?"?":"&",e+=l.param(t,!0)),Galaxy.params=t,this.navigate(e,{trigger:!0})},execute:function(e,t,n){Galaxy.debug("router execute:",e,t,n);var r=s.default.parse(t.pop());t.push(r),e&&(this.authenticate(t,n)?e.apply(this,t):this.access_denied())},authenticate:function(e,t){return!0},access_denied:function(){this.page.display(new c.default.Message({status:"danger",message:"You must be logged in with proper credentials to make this request.",persistent:!0}))}});t.default=d}).call(t,n(2))},50:function(e,t,n){"use strict";(function(e,r){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),a=o(i),s=n(6),u=o(s),c=e.View.extend({initialize:function(t){this.model=new e.Model(t),this.url=this.model.get("url"),this.redirect=this.model.get("redirect"),this.setElement("<div/>"),this.render()},render:function(){var e=this;r.ajax({url:Galaxy.root+this.url,type:"GET"}).done(function(t){var n=r.extend({},e.model.attributes,t),o=new a.default({title:n.title,message:n.message,status:n.status||"warning",icon:n.icon,inputs:n.inputs,buttons:{submit:new u.default.Button({tooltip:n.submit_tooltip,title:n.submit_title||"Save",icon:n.submit_icon||"fa-save",cls:"btn btn-primary ui-clear-float",onclick:function(){e._submit(o)}})}});e.$el.empty().append(o.$el)}).fail(function(t){e.$el.empty().append(new u.default.Message({message:"Failed to load resource "+e.url+".",status:"danger",persistent:!0}).$el)})},_submit:function(e){var t=this;r.ajax({url:Galaxy.root+t.url,data:JSON.stringify(e.data.create()),type:"PUT",contentType:"application/json"}).done(function(n){var o={message:n.message,status:"success",persistent:!1};t.redirect?window.location=Galaxy.root+t.redirect+"?"+r.param(o):(e.data.matchModel(n,function(t,n){e.field_list[n].value(t.value)}),t._showMessage(e,o))}).fail(function(n){t._showMessage(e,{message:n.responseJSON.err_msg,status:"danger",persistent:!1})})},_showMessage:function(e,t){e.$el.parents().filter(function(){return-1!=["auto","scroll"].indexOf(r(this).css("overflow"))}).first().animate({scrollTop:0},500),e.message.update(t)}});t.default={View:c}}).call(t,n(2),n(0))},51:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(7),i=n(251),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(107):void 0!==t&&(e=n(107)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(a)}),e.exports=s}).call(t,n(250))},7:function(e,t,n){"use strict";function r(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===E.call(e)}function f(e){return"[object File]"===E.call(e)}function p(e){return"[object Blob]"===E.call(e)}function m(e){return"[object Function]"===E.call(e)}function h(e){return l(e)&&m(e.pipe)}function _(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}function b(e,t,n){return y(t,function(t,r){e[r]=n&&"function"==typeof t?x(t,n):t}),e}var x=n(106),C=n(248),E=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:d,isFile:f,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:_,isStandardBrowserEnv:v,forEach:y,merge:w,extend:b,trim:g}}},[236]);
//# sourceMappingURL=admin.bundled.js.map