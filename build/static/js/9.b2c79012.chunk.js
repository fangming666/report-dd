webpackJsonp([9],{456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(202),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=this&&this.__generator||function(e,t){var r,n,a,u,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(u){return function(o){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&u[0]?n.return:u[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,u[1])).done)return a;switch(n=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,n=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){c.label=u[1];break}if(6===u[0]&&c.label<a[1]){c.label=a[1],a=u;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(u);break}a[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(e,c)}catch(e){u=[6,e],n=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}};t.default={namespace:"bureauEducation",state:{_bureauEducation:[],_navArr:[],_subjectName:"",_tabSwitch:!1},reducers:{changeTabSwitch:function(e){return a({},e,{_tabSwitch:!1})},emptyBureauEducation:function(e){return a({},e,{_bureauEducation:[],_navArr:[]})},changeBureauEducation:function(e,t){var r=t.payload.data;return a({},e,{_bureauEducation:r,_navArr:r.reduce(function(e,t){return e=e.concat([t.name])},[])})},changeSubjectName:function(e,t){var r=t.payload.subjectName;return a({},e,{_subjectName:r})}},effects:{queryBureauEducation:function(e,t){var r,a,c,o=e.payload,i=t.call,s=t.put;return u(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,i(n.b,o)];case 1:return r=e.sent(),a=r.data,[4,s({type:"changeBureauEducation",payload:{data:a}})];case 2:return e.sent(),[3,4];case 3:return c=e.sent(),console.log("err is",c),[2,Promise.reject(c)];case 4:return[2]}})}}}}});
//# sourceMappingURL=9.b2c79012.chunk.js.map