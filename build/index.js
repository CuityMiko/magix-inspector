/*1.2.0 xinglie.lkf@taobao.com*/!function(){var e=document;if(e._magix)window.postMessage({from:"mx_ispt",action:"expand"},"*");else{window.addEventListener("message",function(e){var t=e.data;t&&"mx_ispt"==t.from&&"expand"==t.action&&s.expand()},!1),e._magix=1;var t={created:"#008B00",init:"#FF3030",alter:"#BC8F8F",isolated:"#FF3030",build:"#9AC0CD",destroy:"#8B5F65",remove:"#EED5B7"},a={width:550,height:470,canvasWidth:530,canvasHeight:400,moreInfoWidth:490,titleHeight:34,circleMargin:6,minCircleRadius:15,managerCols:5,managerMargin:5,managerHeight:40,managerGroupSpace:40,gradualStartColor:{r:0,g:153,b:102},gradualEndColor:{r:255,g:255,b:0},eventsCommonCount:15,sharedCount:5,locationCount:12,mixinsCount:5},i=["FFC125","C71585","CDBA96","FF7F00","BA55D3","8B4726","7CFC00","4A4A4A","EE7AE9"],n={cache:"#CC9966",cleaned:"#99CCCC",cleans:"#FF9999",normal:"#CCCC99"},r=function(e,t){var a=document.createElement("style");document.documentElement.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))};r("mx_ispt_ab3e",'.mx_ispt_ab3e-icon:before{width:12px;content:"M";height:12px;border-radius:6px;position:absolute;background-color:#008b00;opacity:.4;font-size:10px;line-height:12px;text-align:center;color:#fff}.mx_ispt_ab3e-icon-bad:before{background-color:#ff3030}.mx_ispt_ab3e-icon-alter:before{background-color:#bc8f8f}.mx_ispt_ab3e-tle{padding-right:5px}.mx_ispt_ab3e-tab{background:#eee;cursor:move;margin:0;padding:0}.mx_ispt_ab3e-main{position:fixed;right:20px;top:20px;width:550px;height:470px;z-index:2147483647;box-shadow:0 0 5px #b9b9b9;background-color:#fff;font-size:12px;line-height:1.5}.mx_ispt_ab3e-mask{position:absolute;opacity:.7;background-color:#90ee90}.mx_ispt_ab3e-main ul{list-style:none;padding:0;margin:0}.mx_ispt_ab3e-m5{margin-left:5px}.mx_ispt_ab3e-binfo{padding:5px}.mx_ispt_ab3e-console{height:28px;line-height:28px;margin:0 0 0 5px;padding:0}.mx_ispt_ab3e-gray{color:#bbb}.mx_ispt_ab3e-mr3{margin-right:3px}.mx_ispt_ab3e-fl{float:left}.mx_ispt_ab3e-fr{float:right}.mx_ispt_ab3e-cp{cursor:pointer}.mx_ispt_ab3e-p8{padding:8px}.mx_ispt_ab3e-move{cursor:move}.mx_ispt_ab3e-red{color:red}.mx_ispt_ab3e-clearfix:after,.mx_ispt_ab3e-clearfix:before{content:"";display:table}.mx_ispt_ab3e-clearfix:after{clear:both}.mx_ispt_ab3e-clearfix{*zoom:1}.mx_ispt_ab3e-bar{height:1px;border:0;padding:0;margin:5px;background:rgba(0,0,0,.2);background:-webkit-gradient(linear,left top,right top,from(rgba(165,69,243,0)),color-stop(.5,hsla(270,6%,49%,.33)),to(rgba(165,69,243,0)))}#mx_manager_moreinfo,#mx_moreinfo{position:absolute;background-color:#eee;padding:8px;width:440px;display:none;box-shadow:0 2px 2px 2px #b9b9b9;word-break:break-all}.mx_ispt_ab3e-shrink:before{left:4px;bottom:5px}.mx_ispt_ab3e-shrink:after,.mx_ispt_ab3e-shrink:before{content:" ";position:absolute;top:10px;border:2px dotted #b9b1b1;height:10px;cursor:move}.mx_ispt_ab3e-shrink:after{left:9px}');var o={get:function(e,t,a){var i,n=e(window),r=e(document),o=function(e){(e=window.getSelection)?e().removeAllRanges():(e=window.document.selection)&&(e.empty?e.empty():e=null)},s=function(e){e.preventDefault()},l=function(e){i.iMove&&i.move(e)},c="mousemove touchmove",d="mouseup touchend",m="keydown mousewheel DOMMouseScroll",g=function(a){if(i){r[t](c,l)[t](d,g)[t](m,s),n[t]("blur",g);var o=i.node;e(o)[t]("losecapture",g),o.setCapture&&o.releaseCapture(),i.iStop&&i.stop(a),i=null}};return{begin:function(t,u,h){g(),t&&(o(),t.setCapture&&t.setCapture(),i={move:u,stop:h,node:t,iMove:a(u),iStop:a(h)},r.on(c,l).on(d,g).on(m,s),n.on("blur",g),e(t).on("losecapture",g))},clear:o,end:g}}},s={main:'<div class="mx_ispt_ab3e-main" id="mx"><ul class="mx_ispt_ab3e-clearfix mx_ispt_ab3e-tab" id="mx_tabs"><li class="mx_ispt_ab3e-fr mx_ispt_ab3e-p8 mx_ispt_ab3e-cp" id="mx_min">\u25b3</li><li class="mx_ispt_ab3e-fl mx_ispt_ab3e-p8 mx_ispt_ab3e-cp">VOM</li><li class="mx_ispt_ab3e-fl mx_ispt_ab3e-p8 mx_ispt_ab3e-cp">Tracer</li><li class="mx_ispt_ab3e-fl mx_ispt_ab3e-p8 mx_ispt_ab3e-cp">Manager</li></ul><div id="mx_painter"><div style="width:{width}px;height:{canvasHeight}px;overflow-x:auto;overflow-y:hidden" id="mx_view_cnt"><canvas width="{width}" height="{canvasHeight}" id="mx_view_canvas"></canvas></div><label class="mx_ispt_ab3e-fl mx_ispt_ab3e-console"><input type="checkbox" class="mx_ispt_ab3e-mr3" id="mx_log_console"/>\u63a7\u5236\u53f0\u663e\u793aview\u4fe1\u606f</label><label class="mx_ispt_ab3e-fl mx_ispt_ab3e-console"><input type="checkbox" class="mx_ispt_ab3e-mr3" id="mx_com_view"/>\u663e\u793a\u7ec4\u4ef6view</label><ul class="mx_ispt_ab3e-clearfix mx_ispt_ab3e-fl" id="mx_view_total"></ul></div><div id="mx_trancer" style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto;display:none;padding:8px"></div><div id="mx_manager" style="display:none"><div style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto" id="mx_manager_cnt"><canvas width="{canvasWidth}" height="{canvasHeight}" id="mx_manager_canvas"></canvas></div><ul class="mx_ispt_ab3e-clearfix mx_ispt_ab3e-p8" id="mx_manager_total"></ul></div><div id="mx_moreinfo"></div><div id="mx_manager_moreinfo"></div></div>',moreInfo:'<ul><li><b class="mx_ispt_ab3e-tle">id:</b>{id}</li><li><b class="mx_ispt_ab3e-tle">view:</b>{view}</li>{events} {location} {share} {mixins}<li class="mx_ispt_ab3e-red">{ex}</li><li><b class="mx_ispt_ab3e-tle">resources</b></li><li style="{moreInfoWidth}px;overflow:auto;max-height:200px">{res}</li></ul>',moreManagerInfo:"<ul><li><b>key:</b>{id}</li><li><b>url:</b>{url}</li><li><b>\u63cf\u8ff0:</b>{desc}</li><li><b>\u7f13\u5b58:</b>{cache}</li><li><b>\u6e05\u7406\u7f13\u5b58:</b>{cleans}</li><li><b>\u9884\u5904\u7406:</b>{hasAfter}</li></ul>",total:'<li class="mx_ispt_ab3e-fl mx_ispt_ab3e-binfo mx_ispt_ab3e-gray">view\u7edf\u8ba1:[{count}]</li>',managerTotal:'<li class="mx_ispt_ab3e-fl mx_ispt_ab3e-binfo">{groups}\u4e2a\u63a5\u53e3\u6587\u4ef6\uff0c\u5171{total}\u4e2a\u63a5\u53e3</li>',setup:function(){var t=e.createElement("div");t.innerHTML=s.main.replace(/\{(\w+)\}/g,function(e,t){return a[t]}),e.documentElement.appendChild(t),s.attachEvent();var i=_.getEnv();i.dragIt("#mx","#mx_tabs")},attachEvent:function(){s.detachEvent();var t,i=_.getEnv();i.bind("mx_view_canvas","mousemove",s.$mousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_view_canvas");s.onMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_view_canvas","mouseout",s.$mouseout=function(){clearTimeout(t),s.onMousemove({x:-1,y:-1})}),i.bind("mx_manager_canvas","mousemove",s.$mangerMousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_manager_canvas");s.onManagerMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_manager_canvas","mouseout",s.$managerMouseout=function(){clearTimeout(t),s.onManagerMousemove({x:-1,y:-1})}),i.bind("mx_moreinfo","mouseover",s.$imouseover=function(){clearTimeout(s.$hideTimer)}),i.bind("mx_moreinfo","mouseout",s.$imouseout=function(){s.hideMoreInfo()}),i.bind("mx_log_console","click",function(){var t=e.getElementById("mx_log_console");t.checked&&window.console.dir(i.getVOM().all())}),i.bind("mx_com_view","click",function(){_.drawTree()}),i.bind("mx","click",s.$click=function(t){var n;"mx_min"==t.target.id?(n=e.getElementById("mx"),"\u25b3"==t.target.innerHTML?(n.style.height=a.titleHeight+"px",n.style.width="40px",n.style.overflow="hidden",t.target.innerHTML="\u25bd",i.getNode("#mx_tabs").addClass("mx_ispt_ab3e-shrink")):(n.style.height=a.height+"px",n.style.width=a.width+"px",n.style.overflow="inherit",t.target.innerHTML="\u25b3",i.getNode("#mx_tabs").removeClass("mx_ispt_ab3e-shrink"))):"VOM"==t.target.innerHTML?(n=e.getElementById("mx_painter"),n.style.display="block",n=e.getElementById("mx_trancer"),n.style.display="none",n=e.getElementById("mx_manager"),n.style.display="none"):"Tracer"==t.target.innerHTML?(n=e.getElementById("mx_painter"),n.style.display="none",n=e.getElementById("mx_manager"),n.style.display="none",n=e.getElementById("mx_trancer"),n.style.display="block"):"Manager"==t.target.innerHTML&&(n=e.getElementById("mx_painter"),n.style.display="none",n=e.getElementById("mx_trancer"),n.style.display="none",n=e.getElementById("mx_manager"),n.style.display="block")})},expand:function(){var t=e.getElementById("mx_min"),i=_.getEnv();if("\u25bd"==t.innerHTML){var n=e.getElementById("mx");n.style.height=a.height+"px",n.style.width=a.width+"px",n.style.overflow="inherit",t.innerHTML="\u25b3",i.getNode("#mx_tabs").removeClass("mx_ispt_ab3e-shrink")}},detachEvent:function(){var e=_.getEnv();e.unbind("mx_view_canvas","mousemove",s.$mousemove),e.unbind("mx_view_canvas","mouseout",s.$mouseout),e.unbind("mx_manager_canvas","mousemove",s.$managerMousemove),e.unbind("mx_manager_canvas","mouseout",s.$managerMouseout),e.unbind("mx_min","click",s.$click),e.unbind("mx_moreinfo","mouseoout",s.$imouseout),e.unbind("mx_moreinfo","mouseover",s.$imouseover)},showMoreInfo:function(t,i){clearTimeout(s.$hideTimer);var n=e.getElementById("mx_log_console");n.checked&&window.console.log(t);var r=e.getElementById("mx_cover");r||(r=e.createElement("div"),r.className="mx_ispt_ab3e-mask",r.id="mx_cover",e.body.appendChild(r));var o=e.getElementById("mx_moreinfo");o.style.display="block";var l=i.center.x-a.moreInfoWidth/2-e.getElementById("mx_view_cnt").scrollLeft;o.style.left=l+"px",o.style.top=i.center.y+i.radius+a.titleHeight+5+"px";var c=_.getEnv();c.updateDOMStyle(r.style,t.id),r.style.display="block",o.innerHTML=s.moreInfo.replace(/\{(\w+)\}/g,function(e,n){switch(n){case"id":return i.id;case"view":if(t){if(t.$v||t.path)return t.path;if(t.view)return t.view.path}return"";case"events":var r=_.getEvents(t);return r.total?'<li><b class="mx_ispt_ab3e-tle">listen:</b>'+r.list+"</li>":"";case"share":var o=_.getShared(t);return o.length?'<li><b class="mx_ispt_ab3e-tle">share:</b>'+o+"</li>":"";case"location":var s=_.getLocation(t),l=s.path||s.keys&&s.keys.length;if(l){var d=[];return s.path&&d.push('<span style="color:#FFC125">path</span>'),s.keys&&(d=d.concat(s.keys)),'<li><b class="mx_ispt_ab3e-tle">location:</b>'+d+"</li>"}return"";case"mixins":var m=_.getMixins(t);if(m.length){var g=c.getMixinId(m);return g=g.join(","),'<li><b class="mx_ispt_ab3e-tle">mixins:</b>'+g+"</li>"}return"";case"ex":if(i.il)return"\u88ab\u5b64\u7acb\u7684\u8282\u70b9\uff0c\u597d\u53ef\u601c\u2026\u2026";if(!t)return"vframe\u5df2\u88ab\u9500\u6bc1\uff0c\u4f46\u672a\u4ecevom\u4e2d\u79fb\u9664";if(t.path){if(t.cM&&!t.view||t.$c&&!t.$v)return"\u672a\u52a0\u8f7dview"}else if(!t.view)return"\u672a\u52a0\u8f7dview";if(t.cM){if(!t.fcc)return t.rC!=t.cC?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d"}else if(!t.$cr)return t.$rc!=t.$cc?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d";return t.fca||t.$ca?"\u7b49\u5f85view\u6e32\u67d3":"";case"res":var u=[],h=t&&t.view&&t.view.$res;h=h||t&&t.$v&&t.$v.$r;var f;if(h){for(var v in h){f=!0;break}if(f){u.push('<table style="width:100%"><tr><td>key</td><td>type</td></tr>');for(var v in h)u.push("<tr><td>",v,"</td><td>",c.getResType(h[v]),"</td></tr>");u.push("</table>")}}return u.join("");default:return a[n]}})},hideMoreInfo:function(){var t=e.getElementById("mx_moreinfo"),a=e.getElementById("mx_cover");s.$hideTimer=setTimeout(function(){t.style.display="none",a.style.display="none"},150)},showManagerMoreInfo:function(t){clearTimeout(s.$hideManagerTimer);var i=e.getElementById("mx_manager_moreinfo");i.style.display="block",i.style.left=t.rect[0]+"px";var n=t.rect[1]+t.rect[3]+a.titleHeight,r=e.getElementById("mx_manager_cnt").scrollTop;n-=r,i.style.top=n+"px",i.innerHTML=s.moreManagerInfo.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"id":return t.id;default:return t[a]}})},hideManagerMoreInfo:function(){var t=e.getElementById("mx_manager_moreinfo");s.$hideManagerTimer=setTimeout(function(){t.style.display="none"},150)},showManagerTotal:function(t){var a=e.getElementById("mx_manager_total");a.innerHTML=s.managerTotal.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"groups":return t.groups.length;case"total":return t.total}})},showTotal:function(t){var a=e.getElementById("mx_view_total");a.innerHTML=s.total.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"count":return"com:"+t.comTotal+",vom:"+t.vomTotal+",total:"+t.total}})},updateManagerCanvasHeight:function(t){e.getElementById("mx_manager_canvas").height=0|t},updateVOMCanvansWidth:function(t){var i=e.getElementById("mx_view_canvas");i.width=0|t,i.parentNode.scrollLeft=(i.width-a.canvasWidth)/2},onMousemove:function(e){},onManagerMousemove:function(e){}},l={log:function(t,a){var i=e.getElementById("mx_trancer");if(l.idle){var n=e.createElement("hr");n.className="mx_ispt_ab3e-bar",i.insertBefore(n,i.firstChild),delete l.idle}var r=e.createElement("div");r.innerHTML=t,a&&(r.style.color=a),i.insertBefore(r,i.firstChild),i.getElementsByTagName("div").length>200&&(i.removeChild(i.lastChild),i.removeChild(i.lastChild)),clearTimeout(l.$timer),l.$timer=setTimeout(function(){l.idle=!0},1500)}},c={captureItmes:function(){var e=c;e.list=[],delete e.$last,s.onMousemove=function(t){var a,i,n;if(e.$last?(i=e.$last,n=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),n>i.radius&&(e.onHoverItem({item:i,action:"leave"}),delete e.$last,a=!0)):a=!0,a)for(var r=e.list.length-1;r>=0;r--)if(i=e.list[r],n=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),n<=i.radius){e.$last!=i&&(e.$last=i,e.onHoverItem({item:i,action:"enter"}));break}}},captureManagerItmes:function(){var e=c;e.managerList=[],delete e.$managerLast,s.onManagerMousemove=function(t){var a,i,n;if(e.$managerLast?(i=e.$managerLast,n=i.rect,(t.x<n[0]||t.y<n[1]||t.x>n[0]+n[2]||t.y>n[1]+n[3])&&(e.onHoverManagerItem({item:i,action:"leave"}),delete e.$managerLast,a=!0)):a=!0,a)for(var r=e.managerList.length-1;r>=0;r--)i=e.managerList[r],n=i.rect,t.x>=n[0]&&t.y>=n[1]&&t.x<=n[0]+n[2]&&t.y<=n[1]+n[3]&&e.$managerLast!=i&&(e.$managerLast=i,e.onHoverManagerItem({item:i,action:"enter"}))}},getBestParams:function(e,t,i){var n=0,r=0,o={},l=function(e,t){e.deep=t,t>r&&(r=t),o[t]||(o[t]=0),e.leftCount=o[t],o[t]++,o[t]>n&&(n=o[t]);for(var a,i=0;i<e.children.length;i++)a=e.children[i],l(e.children[i],e.deep+1)};e.deepMap=o,l(e,1,0),n=Math.max(n,e.isolated.length+1);var c=t/n-a.circleMargin,d=i/r-a.circleMargin,m=t,g=2*a.minCircleRadius;c<g?(c=g,m=g*n+(n+1)*a.circleMargin,m>3e4&&(m=3e4),s.updateVOMCanvansWidth(m)):s.updateVOMCanvansWidth(m);var u=Math.floor(Math.min(d,c)/2),h=(u/20).toFixed(1);return{width:m,margin:a.circleMargin,radius:u,band:h}},drawTree:function(t){if(t.id){var n=a.width,r=a.canvasHeight,o=c;o.captureItmes();var l=o.getBestParams(t,n,r);n=l.width;var d=e.getElementById("mx_view_canvas").getContext("2d");d.clearRect(0,0,n,r);var m=2*l.radius-2*(l.band+1)-1;o.$tWidth||(o.$tWidth={});var g=function(e){return o.$tWidth[e]||(d.font="normal 12px Arial",o.$tWidth[e]=d.measureText(e).width),o.$tWidth[e]},u=function(e){for(var t=1,a=0;t<=e.length;){if(a+=g(e.substring(t-1,t)),!(a<m))return e.substring(0,t-3)+"..";t+=1}return e},h=0,f=function(e,a,r,o){if(r){d.beginPath();var s=180*Math.atan((a.y-r.y)/(a.x-r.x))/Math.PI;s<0&&(s+=180);var c=Math.round(r.x+l.radius*Math.cos(s*Math.PI/180)),m=Math.round(r.y+l.radius*Math.sin(s*Math.PI/180));d.moveTo(c,m),d.lineTo(a.x,a.y),d.lineWidth=l.band/1.5,d.strokeStyle=o,d.stroke()}var g=t.deepMap[e.deep+1];if(g)for(var u,v=(n-(g*l.radius*2+(g-1)*l.margin))/2,p="#"+i[h++%i.length],x=0;x<e.children.length;x++)u=e.children[x],f(u,{x:v+u.leftCount*(2*l.radius+l.margin)+l.radius,y:a.y+l.margin+2*l.radius},a,p)},v=function(e,a){d.moveTo(a.x,a.y),d.beginPath(),d.arc(a.x,a.y,l.radius,0,2*Math.PI,!0),d.fillStyle=e.status,d.fill();var i=Math.max(.5,l.radius/10),r=a.y+l.radius/2,s=a.x-l.radius/2+i;if(e.event&&(d.beginPath(),d.arc(s,r,i,0,2*Math.PI,!0),d.fillStyle=e.event,d.fill()),e.location&&(d.beginPath(),d.arc(a.x,r+i,i,0,2*Math.PI,!0),d.fillStyle=e.location,d.fill()),e.mixins){var c=s,m=r,g=a.x,h=r+i,f=(c+g+Math.sqrt(3)*(h-m))/2-(a.x-s)/10,p=(m+h-Math.sqrt(3)*(g-c))/2+(a.x-s)/3;d.beginPath(),d.arc(f,p,i,0,2*Math.PI,!0),d.fillStyle=e.mixins,d.fill()}if(e.shared){var x=a.x+l.radius/2-i;d.beginPath(),d.arc(x,r,i,0,2*Math.PI,!0),d.fillStyle=e.shared,d.fill()}if(e.inline){d.beginPath();var _=l.radius-l.band-1,b=-2*Math.PI/360*60,M=-2*Math.PI/360*120,c=a.x+_*Math.cos(b),m=a.y+_*Math.sin(b),g=a.x+_*Math.cos(M),h=a.y+_*Math.sin(M);d.moveTo(c,m),d.quadraticCurveTo(a.x,a.y-_/2,g,h),d.moveTo(c,m),d.quadraticCurveTo(a.x,a.y-l.radius-l.band,g,h),d.fillStyle="#fff",d.fill()}d.moveTo(a.x,a.y),d.beginPath(),d.arc(a.x,a.y,l.radius-l.band-1,0,2*Math.PI,!0),d.lineWidth=l.band,d.strokeStyle="#fff",d.stroke(),o.list.push({id:e.id,center:a,il:e.il,radius:l.radius}),d.beginPath(),d.moveTo(a.x,a.y),d.font="normal 12px Arial",d.fillStyle="#eee";var w=u(e.id),y=Math.round(d.measureText(w).width),I=(2*l.radius-y)/2;d.fillText(w,a.x+I-l.radius,a.y+4);var $=t.deepMap[e.deep+1];if($)for(var T,C=(n-($*l.radius*2+($-1)*l.margin))/2,k=0;k<e.children.length;k++)T=e.children[k],v(T,{x:C+T.leftCount*(2*l.radius+l.margin)+l.radius,y:a.y+l.margin+2*l.radius})},p=t.isolated,x=n/2;if(p.length){x=(n-(p.length+1)*l.radius*2+p.length*l.margin)/2;for(var _=0;_<p.length;_++)v(p[_],{x:x+(_+1)*(2*l.radius+l.margin)+l.radius,y:l.margin+l.radius});x+=l.radius}f(t,{x:x,y:l.margin+l.radius}),v(t,{x:x,y:l.margin+l.radius}),s.showTotal(t,l)}},drawManagerTree:function(t){var n=c;n.captureManagerItmes();var r=a.managerMargin*(t.rows+1)+t.rows*a.managerHeight+(a.managerGroupSpace+a.managerMargin)*t.groups.length;s.updateManagerCanvasHeight(r);var o=e.getElementById("mx_manager_canvas").getContext("2d");o.clearRect(0,0,a.canvasWidth,r);var l=a.managerMargin,d=(a.canvasWidth-(1+a.managerCols)*a.managerMargin)/a.managerCols|0,m=function(){o.font="normal 14px Arial";var e=o.measureText("M").width;return e}(),g=function(e,t,a,i){e.beginPath(),e.moveTo(t[0],t[1]),e.fillStyle=a.color,e.fillRect(t[0],t[1],t[2],t[3]),e.beginPath(),e.moveTo(t[0],t[1]+10),e.font="normal 14px Arial",e.fillStyle="#282828";for(var r,o=a.id;(o.length-3)*m>t[2];)o=o.slice(0,-1),r=!0;r&&(o=o.slice(0,-3)+"..."),e.fillText(o,t[0]+5,t[1]+25),a["package"]=i,a.rect=t,n.managerList.push(a)},u=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=a.managerMargin,s=!1;o.beginPath(),o.moveTo(r,l),o.font="normal 14px Arial",o.fillStyle="#282828",o.fillText(n.name,r+5,l+25),l+=a.managerGroupSpace;var c,m,u=Math.max(n.maxLeft,n.maxRight),h={},f=0,v=(u-n.maxLeft)/2*(a.managerHeight+a.managerMargin),p=(u-n.maxRight)/2*(a.managerHeight+a.managerMargin);for(c=0;c<u;c++){var x=n.cleans.left[c],_=n.cleans.right[c];x&&(g(o,[r,l+v,150,a.managerHeight],x,n.name),h[x.id]=x),_&&(g(o,[a.canvasWidth-a.managerMargin-150,l+p,150,a.managerHeight],_,n.name),h[_.id]=_,_.lineColor=i[f++%i.length]),l+=a.managerMargin+a.managerHeight}for(var b in h)if(m=h[b],m.cleans)for(var M={x:m.rect[0]+m.rect[2],y:m.rect[1]+(m.rect[3]/2|0)},w=(m.cleans+"").split(","),y=w.length-1;y>=0;y--){var I=h[w[y]],$={x:I.rect[0],y:I.rect[1]+(I.rect[3]/2|0)};o.beginPath(),o.moveTo(M.x,M.y),o.lineTo($.x,$.y),o.lineWidth=1,o.strokeStyle="#"+(I.lineColor||"996699"),o.stroke()}for(c=0;c<n.caches.length;c++)g(o,[r,l,d,a.managerHeight],n.caches[c],n.name),(c+1)%a.managerCols===0?(r=a.managerMargin,l+=a.managerMargin+a.managerHeight,s=!1):(r+=d+a.managerMargin,s=!0);for(r=a.managerMargin,s&&(l+=a.managerMargin+a.managerHeight),c=0;c<n.items.length;c++)m=n.items[c],g(o,[r,l,d,a.managerHeight],m,n.name),(c+1)%a.managerCols===0?(r=a.managerMargin,l+=a.managerMargin+a.managerHeight,s=!1):(r+=d+a.managerMargin,s=!0);r=a.managerMargin,s&&(l+=a.managerGroupSpace)}};u(t.groups),s.showManagerTotal(t)},onHoverItem:function(e){var t=_.getEnv(),a=t.getVOM();"enter"==e.action?s.showMoreInfo(a.get(e.item.id),e.item):s.hideMoreInfo()},onHoverManagerItem:function(e){"enter"==e.action?s.showManagerMoreInfo(e.item):s.hideManagerMoreInfo()}},d=window.KISSY,m={prepare:function(){d.use("node")},getRootId:function(){var e,t=d.Env.mods["magix/magix"];return e=t?d.require("magix/magix"):d.require("magix"),e.config("rootId")},getVOM:function(){var e=d.Env.mods["magix/magix"];if(e)return d.require("magix/vom");var t=d.require("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=d.Env.mods,t=[];for(var a in e){var i=e[a].exports||e[a].value;i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:e[a].name,exports:i})}return t},isReady:function(){var e=d.Env.mods["magix/magix"],t=d.Env.mods.node;if(e){var a=d.Env.mods["magix/vom"];return e.status===d.Loader.Status.ATTACHED&&a&&a.status===d.Loader.Status.ATTACHED&&t&&t.status===d.Loader.Status.ATTACHED}try{return e=d.require("magix"),e&&e.toTry&&t&&t.status===d.Loader.Status.ATTACHED}catch(i){return!1}},updateDOMStyle:function(e,t){var a=d.require("node").one("#"+t);if(a){var i=a;"vframe"==i.nodeName()&&(i=i.children());var n,r,o={height:i.outerHeight?i.outerHeight():i.height(),width:i.outerWidth?i.outerWidth():i.width()};if(o.height)r=i.offset(),e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",o.width=Math.max(o.width,i.children().width()),n=i;else{var s=4;do{if(i=i.children(),o.height=i.height(),n=i,o.height){var l=i.css("position");"fixed"==l?(l=i.css("left"),e.left=l,e.position=l,l=i.css("top"),e.top=l,l=i.css("right"),e.right=l,l=i.css("bottom"),e.bottom=l):(r=i.offset(),e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",o.width=Math.max(o.width,i.children().width()));break}s--}while(i.length&&!o.height&&s>=0)}var c,m=-1;do{c||(c="none"==a.css("display"));var g=parseInt(a.css("z-index"))||1;g&&g>m&&(m=g),a=a.parent()}while(a);c&&(o={width:0,height:0}),1==m&&(m=2147483640),e.zIndex=m+1,e.width=o.width+"px",e.height=o.height+"px"}},getDOMOffset:function(e){var t=d.require("node");return t.one("#"+e).offset()},bind:function(e,t,a){var i=d.require("node");return d.isString(e)&&(e="#"+e),i.one(e).on(t,a)},unbind:function(e,t,a){var i=d.require("node");return d.isString(e)&&(e="#"+e),i.one(e).detach(t,a)},getMixinId:function(e){for(var t=d.Env.mods,a=[],i=0;i<e.length;i++){var n=e[i];for(var r in t){var o=t[r],s=o.exports||o.value;if(s==n){a.push(r);break}}a.length<=i&&a.push("unknown")}return a},getResType:function(e){var t="",a=e.res||e.e;if(a)if(a.all&&a.constructor&&a.constructor.cached)t="Magix.Service";else if(a.fetchAll||a.all&&a.one&&a.next&&a.then)t="Model Manager";else if(a.bricks)t="Pagelet";else if(a.__attrs&&a.__attrVals&&a.constructor){var i,n=d.Env.mods;for(var r in n){var o=n[r],s=o.value||o.exports;if(s&&a.constructor==s){t=o.name,i=!0;break}}i||(t=a.hasOwnProperty("pagelet")?"Brick":"extend S Attribute")}else t=d.isFunction(a)?"\u51fd\u6570\u6216\u6784\u9020\u5668":d.type(a);else t=d.type(a);return t},hookAttachMod:function(e){var t=d.Loader.Utils.attachMod;d.Loader.Utils.attachMod=function(){t.apply(d.Loader.Utils,arguments),e()}},dragIt:function(e,t){var a=d.one(e),i=o.get(d.one,"detach",d.isFunction);d.one(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var n=parseInt(a.css("right"),10),r=parseInt(a.css("top"),10),o=e.pageX,s=e.pageY;i.begin(e.target,function(e){i.clear();var t=e.pageX-o,l=e.pageY-s;r+l<0&&(l=-r),a.css({right:n-t,top:r+l})})}})},drawIcons:function(e){for(var t=e.length-1;t>=0;t--){var a=e[t],i=d.one("#"+a.id);i&&i.removeClass("mx_ispt_ab3e-icon-bad").removeClass("mx_ispt_ab3e-icon-alter").addClass("mx_ispt_ab3e-icon"),a.cls&&i&&i.addClass("mx_ispt_ab3e-icon-"+a.cls)}},getNode:function(e){return d.one(e)},hookViewShare:function(e){var t=d.Env.mods.magix;if(t&&(t=d.require("magix"),t&&t.View&&t.View.prototype.share)){var a=t.View.prototype.share;t.View.prototype.share=function(){a.apply(this,arguments),e()}}}},g={$:["zepto","fn.jquery"],jquery:["fn.jquery"],zepto:["zepto"],magix:["safeExec","toTry"]},u={},h={prepare:function(){},hookAttachMod:function(){},getMod:function(e){var t=require.s.contexts._.defined,a=t[e]||u[e];if(!a&&g[e]){var i=g[e];for(var n in t){for(var r=!1,o=i.length-1;o>=0;o--){for(var s=i[o],l=s.split("."),c=t[n];l.length&&c;)c=c[l.shift()];if(c){r=!0;break}}if(r){a=t[n],u[e]=a;break}}}return a},getDL:function(){return this.getMod("$")||this.getMod("jquery")||this.getMod("zepto")},getRootId:function(){var e,t=this.getMod("magix/magix");return e=t?t:this.getMod("magix"),e.config("rootId")},getVOM:function(){var e=this.getMod("magix/vom");if(e)return e;var t=this.getMod("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=require.s.contexts._.defined,t=[];for(var a in e){var i=e[a];i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:a,exports:i})}return t},isReady:function(){return this.getMod("magix/magix")||this.getMod("magix")},updateDOMStyle:function(e,t){var a,i,n=this.getDL(),r=n("#"+t),o=r,s={height:o.outerHeight?o.outerHeight():o.height(),width:o.outerWidth?o.outerWidth():o.width()};if(s.height)i=o.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",s.width=Math.max(s.width,o.children().width()),a=o;else{var l=4;do{if(o=o.children(),s.height=o.height(),a=o,s.height){var c=o.css("position");"fixed"==c?(c=o.css("left"),e.left=c,e.position=c,c=o.css("top"),e.top=c,c=o.css("right"),e.right=c,c=o.css("bottom"),e.bottom=c):(i=o.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",s.width=Math.max(s.width,o.children().width()));break}l--}while(o.length&&!s.height&&l>=0)}var d,m=-1;do{d||(d="none"==r.css("display"));var g=parseInt(r.css("z-index"))||1;g&&g>m&&(m=g),r=r.parent()}while(r.length&&n.contains(document.body,r[0]));d&&(s={width:0,height:0}),1==m&&(m=2147483640),e.zIndex=m+1,e.width=s.width+"px",e.height=s.height+"px"},getDOMOffset:function(e){var t=this.getDL();return t("#"+e).offset()},bind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).on(t,a)},unbind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).off(t,a)},getMixinId:function(e){for(var t=require.s.contexts._.defined,a=[],i=0;i<e.length;i++){var n=e[i];for(var r in t){var o=t[r];if(o==n){a.push(r);break}}a.length<=i&&a.push("unknown")}return a},getResType:function(e){var t=e.res||e.e,a=this.getDL(),i=a.type(e);return t&&(t.all&&t.constructor&&t.constructor.cached?i="Magix.Service":t.fetchAll||t.all&&t.one&&t.next&&t.then?i="Model Manager":t.bricks?i="Pagelet":a.isFunction(t)&&(i="\u51fd\u6570\u6216\u6784\u9020\u5668")),i},dragIt:function(e,t){var a=this.getDL(),i=a(e),n=o.get(a,"off",a.isFunction);a(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var a=parseInt(i.css("right"),10),r=parseInt(i.css("top"),10),o=e.pageX,s=e.pageY;n.begin(e.target,function(e){n.clear();var t=e.pageX-o,l=e.pageY-s;r+l<0&&(l=-r),i.css({right:a-t,top:r+l})})}})},drawIcons:function(e){for(var t=this.getDL(),a=e.length-1;a>=0;a--){var i=e[a],n=t("#"+i.id);n&&n.removeClass("mx_ispt_ab3e-icon-bad").removeClass("mx_ispt_ab3e-icon-alter").addClass("mx_ispt_ab3e-icon"),i.cls&&n&&n.addClass("mx_ispt_ab3e-icon-"+i.cls)}},getNode:function(e){var t=this.getDL();return t(e)},hookViewShare:function(e){var t=this.getMod("magix");if(t&&t.View&&t.View.prototype.share){var a=t.View.prototype.share;t.View.prototype.share=function(){a.apply(this,arguments),e()}}}},f={},v={},p={};for(var x in h)f[x]=v[x]=p[x]=h[x];f.getMod=function(e){var t=seajs.cache,a=u[e];if(!a)for(var i in t){var n=t[i];if(n.id===e)return n.exports}if(!a&&g[e]){var r=g[e];for(var i in t){for(var o=!1,s=r.length-1;s>=0;s--){for(var l=r[s],c=l.split("."),d=t[i].exports;c.length&&d;)d=d[c.shift()];if(d){o=!0;break}}if(o){a=t[i].exports,u[e]=a;break}}}return a},f.getMangerMods=function(){var e=seajs.cache,t=[];for(var a in e){var i=e[a],n=i.exports;n&&n.$m&&n.$s&&t.push({name:i.id,exports:n})}return t},f.getMixinId=function(e){for(var t=seajs.cache,a=[],i=0;i<e.length;i++){var n=e[i];for(var r in t){var o=t[r];if(o.exports==n){a.push(o.id);break}}a.length<=i&&a.push("unknown")}return a},v.getMod=function(e){var t;try{t=require(e)}catch(a){}return t||window.console.warn("seajs standalone\u6a21\u5f0f\u4e0b\u65e0\u6cd5\u627e\u5230\u6a21\u5757\uff1a"+e+"\uff0c\u4e5f\u65e0\u6cd5\u667a\u80fd\u63a2\u6d4b\u3002\u5982\u9700\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217"),t},v.getMangerMods=function(){return[]},v.getMixinId=function(e){return new Array(e.length+2).join("unknown").slice(1)},p.getMod=function(e){if("magix"==e)return window.Magix},p.getDL=function(){return window.$||window.jQuery},p.getRootId=function(){return Magix.config("rootId")},p.getVOM=function(){return Magix.VOM||Magix.Vframe},p.getMangerMods=function(){return[]},p.getMixinId=function(e){return new Array(e.length+2).join("unknown").slice(1)},p.isReady=function(){return!0};var _={getEnv:function(){return window.KISSY?m:window.requirejs?h:window.seajs?f:window.define&&window.require?v:window.Magix?p:void window.console.error("getEnvError:\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217")},getEvents:function(e){var t=[],a=0;if(e){var n=e.view&&(e.view.events||e.view.$evts)||e.$v&&e.$v.$eo,r=[];for(var o in n)a++,r.push(o);var s=e.view&&e.view.tmplEvents;s&&s.length&&(r=r.concat(s),a+=s.length),r.length&&t.push("&lt;"+r+"&gt;");var l=e.$v&&e.$v.$el,c=[],d=[],m=[],g={};if(l){for(var u,h=0;h<l.length;h++)if(u=l[h],a++,u.e)u.e==window?c.push(u.n):u.e==document&&d.push(u.n);else{var f=g[u.s];f?f.push(u.n):g[u.s]=[u.n]}for(o in g)m.push("$"+o+"&lt;"+g[o]+"&gt;")}c.length&&t.push('<span style="color:#'+i[1]+'">$win&lt;'+c+"&gt;</span>"),d.length&&t.push('<span style="color:#'+i[3]+'">$doc&lt;'+d+"&gt;</span>"),m.length&&t.push('<span style="color:#'+i[4]+'">'+m+"</span>")}return{list:t,total:a}},getShared:function(e){var t=[];if(e&&e.$v){var a=e.$v.$sd;if(a)for(var i in a)t.push(i)}return t},getLocation:function(e){var t,a=[];if(e){if(e.view){var i=e.view.$ol;i&&(t=i.pn,a=i.keys||i.ks)}if(e.$v){var n=e.$v.$l;n&&n.f&&(t=n.p,a=n.k)}}return{path:t,keys:a}},getGradualColor:function(e,t){var i=a.gradualStartColor,n=a.gradualEndColor,r=(n.r-i.r)/t,o=(n.g-i.g)/t,s=(n.b-i.b)/t,l=("0"+parseInt(i.r+e*r).toString(16)).slice(-2),c=("0"+parseInt(i.g+e*o).toString(16)).slice(-2),d=("0"+parseInt(i.b+e*s).toString(16)).slice(-2);return"#"+l+c+d},getIsInline:function(e){if(e){var t=e.view;if(t)return!t.template&&!t.tmpl;if(t=e.$v)return!t.tmpl}return!1},getMixins:function(e){if(e){var t=e.$v;if(t&&t.mixins)return t.mixins}return[]},getTree:function(i){var n=i.getRootId(),r=i.getVOM(),o=[],s={total:0,comTotal:0,vomTotal:0,children:[]},l=r.all(),c={},d=!1;for(var m in l)l.hasOwnProperty(m)&&s.vomTotal++,c[m]=1;var g=function(e,i){var n=r.get(e),l={};if(n){s.total++,i.id=n.id,l.id=n.id,delete c[n.id],n.fcc||n.$cr?(i.status=t.created,l.cls=""):n.fca||n.$ca?(i.status=t.alter,l.cls="alter",(n.cM&&!n.view||n.$c&&!n.$v)&&(i.status=t.init,l.cls="bad")):(i.status=t.init,l.cls="bad"),o.push(l);var m=_.getEvents(n),u=m.total;if(u){var h=a.eventsCommonCount;u=Math.min(u,h),i.event=_.getGradualColor(u,h)}var f=_.getShared(n);if(f.length){var v=a.sharedCount,p=Math.min(f.length,v);i.shared=_.getGradualColor(p,v)}var x=_.getLocation(n);if(x.path||x.keys&&x.keys.length){var b=a.locationCount,M=x.keys||[],p=Math.min(b,M.length);i.location=_.getGradualColor(p,b)}var w=_.getMixins(n);if(w.length){var y=a.mixinsCount,p=Math.min(w.length,y);i.mixins=_.getGradualColor(p,y)}i.inline=_.getIsInline(n);var I=n.path;(i.inline||I&&I.indexOf("/views/")<0)&&(d=!0,i.component=!0,s.comTotal++);var $=n.cM||n.$c;for(var T in $){var C={children:[]};g(T,C),C.id&&i.children.push(C)}}};g(n,s);var u=e.getElementById("mx_com_view");u&&u.checked||!d||(d=function(e){for(var t=e.children.length-1;t>=0;t--){var a=e.children[t];a.component?e.children.splice(t,1):d(a)}})(s);var h=[];for(var f in c)h.push({id:f,il:!0,status:t.isolated,children:[]}),o.push({id:f,cls:"bad"});return s.isolated=h,{tree:s,flattened:o}},getManagerTree:function(e){for(var t=e.getMangerMods(),i=[],r=0,o={},s=0,l={},c=0,d=0;d<t.length;d++){
var m=t[d],g=m.exports.$mMetas||m.exports.$mm||m.exports.$m;g._$id||(g._$id="t"+c++),l[g._$id]&&(l[g._$id].continued=!0),l[g._$id]=m}for(var u=0;u<t.length;u++){var h,f,v=t[u],p=[],x={left:[],right:[]},_=[],b=0,M=0,w=0,y=v.exports.$mMetas||v.exports.$mm||v.exports.$m;if(delete y._$id,!v.continued){for(h in y)if(f=y[h],f.cleans)for(var I=(f.cleans+"").split(","),$=0;$<I.length;$++)o[I[$]]=h;for(h in y){f=y[h];var T=n.normal,C={id:h,color:T,url:f.url||f.uri,cache:(f.cache||0|f.cacheTime)/1e3+"sec",desc:f.desc||"",cleans:f.cleans||"",cleaned:o[h]||"",hasAfter:f.after?(f.after+"").substr(0,200):""};f.cleans?(T=n.cleans,C.color=T,x.left.push(C),M++):o[h]?(T=n.cleaned,C.color=T,x.right.push(C),w++):f.cache||f.cacheTime?(T=n.cache,C.color=T,_.push(C)):(p.push(C),b++),s++}}r+=Math.ceil(b/a.managerCols),r+=Math.max(M,w),r+=Math.ceil(_.length/a.managerCols),i.push({name:v.name,rows:r,cleans:x,caches:_,maxLeft:M,maxRight:w,items:p})}return{groups:i,rows:r,total:s}},prepare:function(t){var a=_.getEnv();a.prepare();var i=50,n=function(){i--,i?e.body&&a.isReady()?t():setTimeout(n,500):window.console.error("prepareError:\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector(\u9700\u8981\u7684\u6a21\u5757\u5982jquery,magix\u7b49\u68c0\u6d4b\u4e0d\u5230)\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217")};n()},start:function(){_.prepare(function(){s.setup();var e,a=_.getEnv(),i=a.getVOM(),n=function(e){e.on("created",function(){l.log("vframe:"+e.id+"["+(e.path||e.view.path||"")+"]\u6e32\u67d3\u5b8c\u6bd5",t.created),o()}),e.on("alter",function(a){if(a.id&&!a.logged){a.logged=1;var n=i.get(a.id);n&&l.log("\u4ecevframe:"+n.id+"["+(n.path||n.view.path||"")+"] \u53d1\u8d77\u754c\u9762\u53d8\u66f4",t.build)}l.log("vframe:"+e.id+"\u6536\u5230\u53d8\u66f4\u6d88\u606f",t.alter),o()}),e.on("viewInited",function(){l.log("vframe:"+e.id+"\u7684view["+e.view.path+"]\uff0cinit\u8c03\u7528\u5b8c\u6bd5",t.created)}),e.on("viewUnmounted",function(){var a=e.path||e.view&&e.view.path||"";a&&(a="["+a+"]"),l.log("vframe:"+e.id+"\u7684view"+a+"\u9500\u6bc1\u5b8c\u6bd5",t.destroy)}),e.on("viewMounted",function(){l.log("vframe:"+e.id+"\u7684view["+(e.path||e.view.path||"")+"]\uff0c\u9996\u6b21\u6e32\u67d3\u5b8c\u6bd5",t.created)}),e.___mh=!0},r=function(){var e=i.all();for(var t in e){var a=i.get(t);a.___mh||n(a)}},o=function(i){if(i)if("remove"==i.type)if(i.vframe){var n=i.vframe.path;!n&&i.vframe.view&&(n=i.vframe.view.path),n=n?"("+n+")":"",l.log("\u4eceVOM\u4e2d\u79fb\u9664vframe:"+i.vframe.id+n,t.remove)}else l.log("remove:",i);else"created"==i.type&&r();clearTimeout(e),e=setTimeout(function(){var e=_.getTree(a);c.drawTree(e.tree),a.drawIcons(e.flattened)},0)};i.on("add",function(e){o(),e.vframe.pId&&l.log("\u627e\u5230vframe:"+e.vframe.pId+"\u7684\u5b50vframe:"+e.vframe.id,t.build),l.log("\u521b\u5efavframe:"+e.vframe.id,t.build),n(e.vframe)}),i.on("remove",o);var d=i.get(a.getRootId());d&&d.on("created",o),r(),o(),_.drawTree=o;var m,g=function(){clearTimeout(m),m=setTimeout(function(){var e=_.getManagerTree(a);c.drawManagerTree(e)},500)};a.hookAttachMod(g),a.hookViewShare(o),g()})}};_.start()}}();