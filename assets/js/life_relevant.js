webpackJsonp([2],{0:function(n,e,t){(function(n){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}var a=t(76),u=e(a),o=t(77),r=e(o);t(1);var c=function(){function e(){(0,u.default)(this,e)}return(0,r.default)(e,[{key:"ajaxHandlerComments",value:function(e,t){n.ajax({url:"https://api.duoshuo.com/threads/counts.jsonp",type:"get",data:{short_name:"bamzc",threads:t},dataType:"jsonp",success:function(n){0==n.code&&e(n.response[t])}})}}]),e}(),f=new c,i=n(".comments-link");i.length>0&&i.each(function(e,t){var a=n(t).find("a");f.ajaxHandlerComments(function(n){a.find("i").html(n.comments)},a.data("thread-key"))})}).call(e,t(2))},76:function(n,e){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},77:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var u=t(78),o=a(u);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o.default)(n,a.key,a)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}()},78:function(n,e,t){n.exports={default:t(79),__esModule:!0}},79:function(n,e,t){t(80);var a=t(9).Object;n.exports=function(n,e,t){return a.defineProperty(n,e,t)}},80:function(n,e,t){var a=t(7);a(a.S+a.F*!t(17),"Object",{defineProperty:t(13).f})}});