/*1.0.13 xinglie.lkf@taobao.com*/!function(){var e=document;if(!e._magix){e._magix=1;var t={created:"#008B00",init:"#FF3030",alter:"#BC8F8F",isolated:"#FF3030",build:"#9AC0CD"},a={width:550,height:470,canvasWidth:530,canvasHeight:400,moreInfoWidth:490,titleHeight:34,circleMargin:6,minCircleRadius:15,managerCols:5,managerMargin:5,managerHeight:40,managerGroupSpace:40,gradualStartColor:{r:0,g:153,b:102},gradualEndColor:{r:255,g:255,b:0},eventsCommonCount:15,sharedCount:5,locationCount:12},i=["FFC125","C71585","CDBA96","FF7F00","BA55D3","8B4726","7CFC00","4A4A4A","EE7AE9"],r={cache:"#CC9966",cleaned:"#99CCCC",cleans:"#FF9999",normal:"#CCCC99"},n=function(e,t){var a=document.createElement("style");document.documentElement.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))};n("mx_ispt_bca",".mx_ispt_bca-icon:before{width:12px;content:'M';height:12px;border-radius:6px;position:absolute;background-color:#008b00;opacity:.4;font-size:10px;line-height:12px;text-align:center;color:#fff}.mx_ispt_bca-icon-bad:before{background-color:#ff3030}.mx_ispt_bca-icon-alter:before{background-color:#bc8f8f}.mx_ispt_bca-tle{padding-right:5px}.mx_ispt_bca-tab{background:#eee;cursor:move;margin:0;padding:0}.mx_ispt_bca-main{position:fixed;right:20px;top:20px;width:550px;height:470px;z-index:2147483647;box-shadow:0 0 5px #b9b9b9;background-color:#fff;font-size:12px;line-height:1.5}.mx_ispt_bca-mask{position:absolute;opacity:.7;background-color:#90ee90}.mx_ispt_bca-main ul{list-style:none;padding:0;margin:0}.mx_ispt_bca-m5{margin-left:5px}.mx_ispt_bca-binfo{padding:5px}.mx_ispt_bca-console{height:28px;line-height:28px;margin:0 0 0 5px;padding:0}.mx_ispt_bca-mr3{margin-right:3px}.mx_ispt_bca-fl{float:left}.mx_ispt_bca-fr{float:right}.mx_ispt_bca-cp{cursor:pointer}.mx_ispt_bca-p8{padding:8px}.mx_ispt_bca-move{cursor:move}.mx_ispt_bca-red{color:red}.mx_ispt_bca-clearfix:after,.mx_ispt_bca-clearfix:before{content:\"\";display:table}.mx_ispt_bca-clearfix:after{clear:both}.mx_ispt_bca-clearfix{*zoom:1}.mx_ispt_bca-bar{height:1px;border:0;padding:0;margin:5px;background:rgba(0,0,0,.2);background:-webkit-gradient(linear,left top,right top,from(rgba(165,69,243,0)),color-stop(.5,hsla(270,6%,49%,.33)),to(rgba(165,69,243,0)))}#mx_manager_moreinfo,#mx_moreinfo{position:absolute;background-color:#eee;padding:8px;width:440px;display:none;box-shadow:0 2px 2px 2px #b9b9b9;word-break:break-all}.mx_ispt_bca-shrink:before{left:4px;bottom:5px}.mx_ispt_bca-shrink:after,.mx_ispt_bca-shrink:before{content:' ';position:absolute;top:10px;border:2px dotted #b9b1b1;height:10px;cursor:move}.mx_ispt_bca-shrink:after{left:9px}");var o={get:function(e,t,a){var i,r=e(window),n=e(document),o=function(e){(e=window.getSelection)?e().removeAllRanges():(e=window.document.selection)&&(e.empty?e.empty():e=null)},s=function(e){e.preventDefault()},l=function(e){i.iMove&&i.move(e)},c="mousemove touchmove",d="mouseup touchend",m="keydown mousewheel DOMMouseScroll",g=function(a){if(i){n[t](c,l)[t](d,g)[t](m,s),r[t]("blur",g);var o=i.node;e(o)[t]("losecapture",g),o.setCapture&&o.releaseCapture(),i.iStop&&i.stop(a),i=null}};return{begin:function(t,u,h){g(),t&&(o(),t.setCapture&&t.setCapture(),i={move:u,stop:h,node:t,iMove:a(u),iStop:a(h)},n.on(c,l).on(d,g).on(m,s),r.on("blur",g),e(t).on("losecapture",g))},clear:o,end:g}}},s={main:'<div class="mx_ispt_bca-main" id="mx"><ul class="mx_ispt_bca-clearfix mx_ispt_bca-tab" id="mx_tabs"><li class="mx_ispt_bca-fr mx_ispt_bca-p8 mx_ispt_bca-cp" id="mx_min">\u25b3</li><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">VOM</li><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">Tracer</li><li class="mx_ispt_bca-fl mx_ispt_bca-p8 mx_ispt_bca-cp">Manager</li></ul><div id="mx_painter"><div style="width:{width}px;height:{canvasHeight}px;overflow-x:auto;overflow-y:hidden" id="mx_view_cnt"><canvas width="{width}" height="{canvasHeight}" id="mx_view_canvas"></canvas></div><label class="mx_ispt_bca-fl mx_ispt_bca-console"><input type="checkbox" class="mx_ispt_bca-mr3" id="mx_log_console"/>\u63a7\u5236\u53f0\u663e\u793aview\u4fe1\u606f</label><ul class="mx_ispt_bca-clearfix mx_ispt_bca-fl" id="mx_view_total"></ul></div><div id="mx_trancer" style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto;display:none;padding:8px"></div><div id="mx_manager" style="display:none"><div style="height:{canvasHeight}px;overflow:scroll;overflow-x:auto" id="mx_manager_cnt"><canvas width="{canvasWidth}" height="{canvasHeight}" id="mx_manager_canvas"></canvas></div><ul class="mx_ispt_bca-clearfix mx_ispt_bca-p8" id="mx_manager_total"></ul></div><div id="mx_moreinfo"></div><div id="mx_manager_moreinfo"></div></div>',moreInfo:'<ul><li><b class="mx_ispt_bca-tle">id:</b>{id}</li><li><b class="mx_ispt_bca-tle">view:</b>{view}</li>{events} {location} {share}<li class="mx_ispt_bca-red">{ex}</li><li><b class="mx_ispt_bca-tle">resources</b></li><li style="{moreInfoWidth}px;overflow:auto;max-height:200px">{res}</li></ul>',moreManagerInfo:"<ul><li><b>key:</b>{id}</li><li><b>url:</b>{url}</li><li><b>\u63cf\u8ff0:</b>{desc}</li><li><b>\u7f13\u5b58:</b>{cache}</li><li><b>\u6e05\u7406\u7f13\u5b58:</b>{cleans}</li><li><b>\u9884\u5904\u7406:</b>{hasAfter}</li></ul>",total:'<li class="mx_ispt_bca-fl mx_ispt_bca-binfo">\u5171{total}\u4e2aview</li><li class="mx_ispt_bca-fl ml5 mx_ispt_bca-red mx_ispt_bca-binfo">{ex}</li>',managerTotal:'<li class="mx_ispt_bca-fl mx_ispt_bca-binfo">{groups}\u4e2a\u63a5\u53e3\u6587\u4ef6\uff0c\u5171{total}\u4e2a\u63a5\u53e3</li>',setup:function(){var t=e.createElement("div");t.innerHTML=s.main.replace(/\{(\w+)\}/g,function(e,t){return a[t]}),e.documentElement.appendChild(t),s.attachEvent();var i=b.getEnv();i.dragIt("#mx","#mx_tabs")},attachEvent:function(){s.detachEvent();var t,i=b.getEnv();i.bind("mx_view_canvas","mousemove",s.$mousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_view_canvas");s.onMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_view_canvas","mouseout",s.$mouseout=function(){clearTimeout(t),s.onMousemove({x:-1,y:-1})}),i.bind("mx_manager_canvas","mousemove",s.$mangerMousemove=function(e){clearTimeout(t),t=setTimeout(function(){var t=i.getDOMOffset("mx_manager_canvas");s.onManagerMousemove({x:e.pageX-t.left,y:e.pageY-t.top})},10)}),i.bind("mx_manager_canvas","mouseout",s.$managerMouseout=function(){clearTimeout(t),s.onManagerMousemove({x:-1,y:-1})}),i.bind("mx_moreinfo","mouseover",s.$imouseover=function(){clearTimeout(s.$hideTimer)}),i.bind("mx_moreinfo","mouseout",s.$imouseout=function(){s.hideMoreInfo()}),i.bind("mx_log_console","click",function(){var t=e.getElementById("mx_log_console");t.checked&&window.console.dir(i.getVOM().all())}),i.bind("mx","click",s.$click=function(t){var r;"mx_min"==t.target.id?(r=e.getElementById("mx"),"\u25b3"==t.target.innerHTML?(r.style.height=a.titleHeight+"px",r.style.width="40px",r.style.overflow="hidden",t.target.innerHTML="\u25bd",i.getNode("#mx_tabs").addClass("mx_ispt_bca-shrink")):(r.style.height=a.height+"px",r.style.width=a.width+"px",r.style.overflow="inherit",t.target.innerHTML="\u25b3",i.getNode("#mx_tabs").removeClass("mx_ispt_bca-shrink"))):"VOM"==t.target.innerHTML?(r=e.getElementById("mx_painter"),r.style.display="block",r=e.getElementById("mx_trancer"),r.style.display="none",r=e.getElementById("mx_manager"),r.style.display="none"):"Tracer"==t.target.innerHTML?(r=e.getElementById("mx_painter"),r.style.display="none",r=e.getElementById("mx_manager"),r.style.display="none",r=e.getElementById("mx_trancer"),r.style.display="block"):"Manager"==t.target.innerHTML&&(r=e.getElementById("mx_painter"),r.style.display="none",r=e.getElementById("mx_trancer"),r.style.display="none",r=e.getElementById("mx_manager"),r.style.display="block")})},detachEvent:function(){var e=b.getEnv();e.unbind("mx_view_canvas","mousemove",s.$mousemove),e.unbind("mx_view_canvas","mouseout",s.$mouseout),e.unbind("mx_manager_canvas","mousemove",s.$managerMousemove),e.unbind("mx_manager_canvas","mouseout",s.$managerMouseout),e.unbind("mx_min","click",s.$click),e.unbind("mx_moreinfo","mouseoout",s.$imouseout),e.unbind("mx_moreinfo","mouseover",s.$imouseover)},showMoreInfo:function(t,i){clearTimeout(s.$hideTimer);var r=e.getElementById("mx_log_console");r.checked&&window.console.log(t);var n=e.getElementById("mx_cover");n||(n=e.createElement("div"),n.className="mx_ispt_bca-mask",n.id="mx_cover",e.body.appendChild(n));var o=e.getElementById("mx_moreinfo");o.style.display="block";var l=i.center.x-a.moreInfoWidth/2-e.getElementById("mx_view_cnt").scrollLeft;o.style.left=l+"px",o.style.top=i.center.y+i.radius+a.titleHeight+5+"px";var c=b.getEnv();c.updateDOMStyle(n.style,t.id),n.style.display="block",o.innerHTML=s.moreInfo.replace(/\{(\w+)\}/g,function(e,r){switch(r){case"id":return i.id;case"view":if(t){if(t.$v||t.path)return t.path;if(t.view)return t.view.path}return"";case"events":var n=b.getEvents(t);return n.total?'<li><b class="mx_ispt_bca-tle">listen:</b>'+n.list+"</li>":"";case"share":var o=b.getShared(t);return o.length?'<li><b class="mx_ispt_bca-tle">share:</b>'+o+"</li>":"";case"location":var s=b.getLocation(t),l=s.path||s.keys&&s.keys.length;if(l){var d=[];return s.path&&d.push('<span style="color:#FFC125">path</span>'),s.keys&&(d=d.concat(s.keys)),'<li><b class="mx_ispt_bca-tle">location:</b>'+d+"</li>"}return"";case"ex":if(i.il)return"\u88ab\u5b64\u7acb\u7684\u8282\u70b9\uff0c\u597d\u53ef\u601c\u2026\u2026";if(!t)return"vframe\u5df2\u88ab\u9500\u6bc1\uff0c\u4f46\u672a\u4ecevom\u4e2d\u79fb\u9664";if(t.path){if(t.cM&&!t.view||t.$c&&!t.$v)return"\u672a\u52a0\u8f7dview"}else if(!t.view)return"\u672a\u52a0\u8f7dview";if(t.cM){if(!t.fcc)return t.rC!=t.cC?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d"}else if(!t.$cr)return t.$rc!=t.$cc?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d";return t.fca||t.$ca?"\u7b49\u5f85view\u6e32\u67d3":"";case"res":var m=[],g=t&&t.view&&t.view.$res;g=g||t&&t.$v&&t.$v.$r;var u;if(g){for(var h in g){u=!0;break}if(u){m.push('<table style="width:100%"><tr><td>key</td><td>type</td></tr>');for(var h in g)m.push("<tr><td>",h,"</td><td>",c.getResType(g[h]),"</td></tr>");m.push("</table>")}}return m.join("");default:return a[r]}})},hideMoreInfo:function(){var t=e.getElementById("mx_moreinfo"),a=e.getElementById("mx_cover");s.$hideTimer=setTimeout(function(){t.style.display="none",a.style.display="none"},150)},showManagerMoreInfo:function(t){clearTimeout(s.$hideManagerTimer);var i=e.getElementById("mx_manager_moreinfo");i.style.display="block",i.style.left=t.rect[0]+"px";var r=t.rect[1]+t.rect[3]+a.titleHeight,n=e.getElementById("mx_manager_cnt").scrollTop;r-=n,i.style.top=r+"px",i.innerHTML=s.moreManagerInfo.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"id":return t.id;default:return t[a]}})},hideManagerMoreInfo:function(){var t=e.getElementById("mx_manager_moreinfo");s.$hideManagerTimer=setTimeout(function(){t.style.display="none"},150)},showManagerTotal:function(t){var a=e.getElementById("mx_manager_total");a.innerHTML=s.managerTotal.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"groups":return t.groups.length;case"total":return t.total}})},showTotal:function(t){var a=e.getElementById("mx_view_total");a.innerHTML=s.total.replace(/\{(\w+)\}/g,function(e,a){switch(a){case"total":return t.vomTotal;case"ex":return t.total!=t.vomTotal?'<b style="color:red">vom\u4e2d\u5171'+t.vomTotal+"\u4e2aview\uff0c\u800c\u53ea\u6709"+t.total+"\u4e2a\u5b58\u5728\u5173\u8054</b>":""}})},updateManagerCanvasHeight:function(t){e.getElementById("mx_manager_canvas").height=0|t},updateVOMCanvansWidth:function(t){var i=e.getElementById("mx_view_canvas");i.width=0|t,i.parentNode.scrollLeft=(i.width-a.canvasWidth)/2},onMousemove:function(e){},onManagerMousemove:function(e){}},l={log:function(t,a){var i=e.getElementById("mx_trancer");if(l.idle){var r=e.createElement("hr");r.className="mx_ispt_bca-bar",i.insertBefore(r,i.firstChild),delete l.idle}var n=e.createElement("div");n.innerHTML=t,a&&(n.style.color=a),i.insertBefore(n,i.firstChild),i.getElementsByTagName("div").length>200&&(i.removeChild(i.lastChild),i.removeChild(i.lastChild)),clearTimeout(l.$timer),l.$timer=setTimeout(function(){l.idle=!0},1500)}},c={range:[new Date("2016-9-12"),new Date("2016-9-16")],path:"//thx.github.io/magix-inspector/f.png",bg:"#F2E7D6",pos:[100,80,275,279],fetch:function(){var e=this,t=new Date;if(e.range[0]<=t&&t<=e.range[1]&&(e.$img||(e.$img=new Image,e.$img.onload=function(){e.$loaded=!0},e.$img.src=e.path)),e.$loaded)return e.$img}},d={captureItmes:function(){var e=d;e.list=[],delete e.$last,s.onMousemove=function(t){var a,i,r;if(e.$last?(i=e.$last,r=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),r>i.radius&&(e.onHoverItem({item:i,action:"leave"}),delete e.$last,a=!0)):a=!0,a)for(var n=e.list.length-1;n>=0;n--)if(i=e.list[n],r=Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5),r<=i.radius){e.$last!=i&&(e.$last=i,e.onHoverItem({item:i,action:"enter"}));break}}},captureManagerItmes:function(){var e=d;e.managerList=[],delete e.$managerLast,s.onManagerMousemove=function(t){var a,i,r;if(e.$managerLast?(i=e.$managerLast,r=i.rect,(t.x<r[0]||t.y<r[1]||t.x>r[0]+r[2]||t.y>r[1]+r[3])&&(e.onHoverManagerItem({item:i,action:"leave"}),delete e.$managerLast,a=!0)):a=!0,a)for(var n=e.managerList.length-1;n>=0;n--)i=e.managerList[n],r=i.rect,t.x>=r[0]&&t.y>=r[1]&&t.x<=r[0]+r[2]&&t.y<=r[1]+r[3]&&e.$managerLast!=i&&(e.$managerLast=i,e.onHoverManagerItem({item:i,action:"enter"}))}},getBestParams:function(e,t,i){var r=0,n=0,o={},l=function(e,t,a){e.deep=t,e.leftCount=a,t>n&&(n=t),o[t]?o[t]+=e.children.length:o[t]=e.children.length,o[t]>r&&(r=o[t]);for(var i,s=0,c=0;s<e.children.length;s++)i=e.children[s],l(e.children[s],e.deep+1,c),c+=i.children.length};e.deepMap=o,l(e,1,0),r=Math.max(r,e.isolated.length+1);var c=t/r-a.circleMargin,d=i/n-a.circleMargin,m=t,g=2*a.minCircleRadius;c<g?(c=g,m=g*r+(r+1)*a.circleMargin,m>3e4&&(m=3e4),s.updateVOMCanvansWidth(m)):s.updateVOMCanvansWidth(m);var u=Math.floor(Math.min(d,c)/2),h=(u/20).toFixed(1);return{width:m,margin:a.circleMargin,radius:u,band:h}},drawTree:function(t){if(t.id){var r=a.width,n=a.canvasHeight,o=d;o.captureItmes();var l=o.getBestParams(t,r,n);r=l.width;var m=e.getElementById("mx_view_canvas").getContext("2d");m.clearRect(0,0,r,n);var g=c.fetch();g&&(m.fillStyle=c.bg,m.fillRect(0,0,r,n),m.drawImage(g,c.pos[0],c.pos[1],c.pos[2],c.pos[3],0,0,c.pos[2]/2,c.pos[3]/2));var u=2*l.radius-2*(l.band+1)-1;o.$tWidth||(o.$tWidth={});var h=function(e){return o.$tWidth[e]||(m.font="normal 12px Arial",o.$tWidth[e]=m.measureText(e).width),o.$tWidth[e]},f=function(e){for(var t=1,a=0;t<=e.length;){if(a+=h(e.substring(t-1,t)),!(a<u))return e.substring(0,t-3)+"..";t+=1}return e},v=0,p=function(e,a,n,o){if(n){m.beginPath();var s=180*Math.atan((a.y-n.y)/(a.x-n.x))/Math.PI;s<0&&(s+=180);var c=Math.round(n.x+l.radius*Math.cos(s*Math.PI/180)),d=Math.round(n.y+l.radius*Math.sin(s*Math.PI/180));m.moveTo(c,d),m.lineTo(a.x,a.y),m.lineWidth=l.band/1.5,m.strokeStyle=o,m.stroke()}var g=t.deepMap[e.deep];if(g)for(var u=(r-(g*l.radius*2+(g-1)*l.margin))/2,h="#"+i[v++%i.length],f=0;f<e.children.length;f++)p(e.children[f],{x:u+(f+e.leftCount)*(2*l.radius+l.margin)+l.radius,y:a.y+l.margin+2*l.radius},a,h)},x=function(e,a){m.moveTo(a.x,a.y),m.beginPath(),m.arc(a.x,a.y,l.radius,0,2*Math.PI,!0),m.fillStyle=e.status,m.fill();var i=Math.max(.5,l.radius/10),n=a.y+l.radius/2;if(e.event){var s=a.x-l.radius/2+i;m.moveTo(s,n),m.beginPath(),m.arc(s,n,i,0,2*Math.PI,!0),m.fillStyle=e.event,m.fill()}if(e.location&&(m.moveTo(a.x,n+i),m.beginPath(),m.arc(a.x,n+i,i,0,2*Math.PI,!0),m.fillStyle=e.location,m.fill()),e.shared){var c=a.x+l.radius/2-i;m.moveTo(c,n),m.beginPath(),m.arc(c,n,i,0,2*Math.PI,!0),m.fillStyle=e.shared,m.fill()}m.moveTo(a.x,a.y),m.beginPath(),m.arc(a.x,a.y,l.radius-l.band-1,0,2*Math.PI,!0),m.lineWidth=l.band,m.strokeStyle="#fff",m.stroke(),o.list.push({id:e.id,center:a,il:e.il,radius:l.radius}),m.beginPath(),m.moveTo(a.x,a.y),m.font="normal 12px Arial",m.fillStyle="#eee";var d=f(e.id),g=Math.round(m.measureText(d).width),u=(2*l.radius-g)/2;m.fillText(d,a.x+u-l.radius,a.y+4);var h=t.deepMap[e.deep];if(h)for(var v=(r-(h*l.radius*2+(h-1)*l.margin))/2,p=0;p<e.children.length;p++)x(e.children[p],{x:v+(p+e.leftCount)*(2*l.radius+l.margin)+l.radius,y:a.y+l.margin+2*l.radius})},_=t.isolated,b=r/2;if(_.length){b=(r-(_.length+1)*l.radius*2+_.length*l.margin)/2;for(var M=0;M<_.length;M++)x(_[M],{x:b+(M+1)*(2*l.radius+l.margin)+l.radius,y:l.margin+l.radius});b+=l.radius}p(t,{x:b,y:l.margin+l.radius}),x(t,{x:b,y:l.margin+l.radius}),s.showTotal(t,l)}},drawManagerTree:function(t){var r=d;r.captureManagerItmes();var n=a.managerMargin*(t.rows+1)+t.rows*a.managerHeight+(a.managerGroupSpace+a.managerMargin)*t.groups.length;s.updateManagerCanvasHeight(n);var o=e.getElementById("mx_manager_canvas").getContext("2d");o.clearRect(0,0,a.canvasWidth,n);var l=a.managerMargin,c=(a.canvasWidth-(1+a.managerCols)*a.managerMargin)/a.managerCols|0,m=function(){o.font="normal 14px Arial";var e=o.measureText("M").width;return e}(),g=function(e,t,a,i){e.beginPath(),e.moveTo(t[0],t[1]),e.fillStyle=a.color,e.fillRect(t[0],t[1],t[2],t[3]),e.beginPath(),e.moveTo(t[0],t[1]+10),e.font="normal 14px Arial",e.fillStyle="#282828";for(var n,o=a.id;(o.length-3)*m>t[2];)o=o.slice(0,-1),n=!0;n&&(o=o.slice(0,-3)+"..."),e.fillText(o,t[0]+5,t[1]+25),a["package"]=i,a.rect=t,r.managerList.push(a)},u=function(e){for(var t=0;t<e.length;t++){var r=e[t],n=a.managerMargin,s=!1;o.beginPath(),o.moveTo(n,l),o.font="normal 14px Arial",o.fillStyle="#282828",o.fillText(r.name,n+5,l+25),l+=a.managerGroupSpace;var d,m,u=Math.max(r.maxLeft,r.maxRight),h={},f=0,v=(u-r.maxLeft)/2*(a.managerHeight+a.managerMargin),p=(u-r.maxRight)/2*(a.managerHeight+a.managerMargin);for(d=0;d<u;d++){var x=r.cleans.left[d],_=r.cleans.right[d];x&&(g(o,[n,l+v,150,a.managerHeight],x,r.name),h[x.id]=x),_&&(g(o,[a.canvasWidth-a.managerMargin-150,l+p,150,a.managerHeight],_,r.name),h[_.id]=_,_.lineColor=i[f++%i.length]),l+=a.managerMargin+a.managerHeight}for(var b in h)if(m=h[b],m.cleans)for(var M={x:m.rect[0]+m.rect[2],y:m.rect[1]+(m.rect[3]/2|0)},w=(m.cleans+"").split(","),y=w.length-1;y>=0;y--){var $=h[w[y]],I={x:$.rect[0],y:$.rect[1]+($.rect[3]/2|0)};o.beginPath(),o.moveTo(M.x,M.y),o.lineTo(I.x,I.y),o.lineWidth=1,o.strokeStyle="#"+($.lineColor||"996699"),o.stroke()}for(d=0;d<r.caches.length;d++)g(o,[n,l,c,a.managerHeight],r.caches[d],r.name),(d+1)%a.managerCols===0?(n=a.managerMargin,l+=a.managerMargin+a.managerHeight,s=!1):(n+=c+a.managerMargin,s=!0);for(n=a.managerMargin,s&&(l+=a.managerMargin+a.managerHeight),d=0;d<r.items.length;d++)m=r.items[d],g(o,[n,l,c,a.managerHeight],m,r.name),(d+1)%a.managerCols===0?(n=a.managerMargin,l+=a.managerMargin+a.managerHeight,s=!1):(n+=c+a.managerMargin,s=!0);n=a.managerMargin,s&&(l+=a.managerGroupSpace)}};u(t.groups),s.showManagerTotal(t)},onHoverItem:function(e){var t=b.getEnv(),a=t.getVOM();"enter"==e.action?s.showMoreInfo(a.get(e.item.id),e.item):s.hideMoreInfo()},onHoverManagerItem:function(e){"enter"==e.action?s.showManagerMoreInfo(e.item):s.hideManagerMoreInfo()}},m=window.KISSY,g={prepare:function(){m.use("node")},getRootId:function(){var e,t=m.Env.mods["magix/magix"];return e=t?m.require("magix/magix"):m.require("magix"),e.config("rootId")},getVOM:function(){var e=m.Env.mods["magix/magix"];if(e)return m.require("magix/vom");var t=m.require("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=m.Env.mods,t=[];for(var a in e){var i=e[a].exports||e[a].value;i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:e[a].name,exports:i})}return t},isReady:function(){var e=m.Env.mods["magix/magix"],t=m.Env.mods.node;if(e){var a=m.Env.mods["magix/vom"];return e.status===m.Loader.Status.ATTACHED&&a&&a.status===m.Loader.Status.ATTACHED&&t&&t.status===m.Loader.Status.ATTACHED}return e=m.Env.mods.magix,e&&e.status===m.Loader.Status.ATTACHED&&t&&t.status===m.Loader.Status.ATTACHED},updateDOMStyle:function(e,t){var a=m.require("node").one("#"+t);if(a){var i,r,n=a,o={height:n.outerHeight?n.outerHeight():n.height(),width:n.outerWidth?n.outerWidth():n.width()};if(o.height)r=n.offset(),e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",o.width=Math.max(o.width,n.children().width()),i=n;else{var s=4;do{if(n=n.children(),o.height=n.height(),i=n,o.height){var l=n.css("position");"fixed"==l?(l=n.css("left"),e.left=l,e.position=l,l=n.css("top"),e.top=l,l=n.css("right"),e.right=l,l=n.css("bottom"),e.bottom=l):(r=n.offset(),e.left=r.left+"px",e.top=r.top+"px",e.position="absolute",o.width=Math.max(o.width,n.children().width()));break}s--}while(n.length&&!o.height&&s>=0)}var c,d=-1;do{c||(c="none"==a.css("display"));var g=parseInt(a.css("z-index"))||1;g&&g>d&&(d=g),a=a.parent()}while(a);c&&(o={width:0,height:0}),1==d&&(d=2147483640),e.zIndex=d+1,e.width=o.width+"px",e.height=o.height+"px"}},getDOMOffset:function(e){var t=m.require("node");return t.one("#"+e).offset()},bind:function(e,t,a){var i=m.require("node");return m.isString(e)&&(e="#"+e),i.one(e).on(t,a)},unbind:function(e,t,a){var i=m.require("node");return m.isString(e)&&(e="#"+e),i.one(e).detach(t,a)},getResType:function(e){var t="",a=e.res||e.e;if(a)if(a.all&&a.constructor&&a.constructor.cached)t="Magix.Service";else if(a.fetchAll||a.all&&a.one&&a.next&&a.then)t="Model Manager";else if(a.bricks)t="Pagelet";else if(a.__attrs&&a.__attrVals&&a.constructor){var i,r=m.Env.mods;for(var n in r){var o=r[n],s=o.value||o.exports;if(s&&a.constructor==s){t=o.name,i=!0;break}}i||(t=a.hasOwnProperty("pagelet")?"Brick":"extend S Attribute")}else t=m.isFunction(a)?"\u51fd\u6570\u6216\u6784\u9020\u5668":m.type(a);else t=m.type(a);return t},hookAttachMod:function(e){var t=m.Loader.Utils.attachMod;m.Loader.Utils.attachMod=function(){t.apply(m.Loader.Utils,arguments),e()}},dragIt:function(e,t){var a=m.one(e),i=o.get(m.one,"detach",m.isFunction);m.one(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var r=parseInt(a.css("right"),10),n=parseInt(a.css("top"),10),o=e.pageX,s=e.pageY;i.begin(e.target,function(e){i.clear();var t=e.pageX-o,l=e.pageY-s;n+l<0&&(l=-n),a.css({right:r-t,top:n+l})})}})},drawIcons:function(e){for(var t=e.length-1;t>=0;t--){var a=e[t],i=m.one("#"+a.id);i.removeClass("mx_ispt_bca-icon-bad").removeClass("mx_ispt_bca-icon-alter").addClass("mx_ispt_bca-icon"),a.cls&&i.addClass("mx_ispt_bca-icon-"+a.cls)}},getNode:function(e){return m.one(e)}},u={$:["zepto","fn.jquery"],jquery:["fn.jquery"],zepto:["zepto"],magix:["safeExec","toTry"]},h={},f={prepare:function(){},hookAttachMod:function(){},getMod:function(e){var t=require.s.contexts._.defined,a=t[e]||h[e];if(!a&&u[e]){var i=u[e];for(var r in t){for(var n=!1,o=i.length-1;o>=0;o--){for(var s=i[o],l=s.split("."),c=t[r];l.length&&c;)c=c[l.shift()];if(c){n=!0;break}}if(n){a=t[r],h[e]=a;break}}}return a},getDL:function(){return this.getMod("$")||this.getMod("jquery")||this.getMod("zepto")},getRootId:function(){var e,t=this.getMod("magix/magix");return e=t?t:this.getMod("magix"),e.config("rootId")},getVOM:function(){var e=this.getMod("magix/vom");if(e)return e;var t=this.getMod("magix");return t.VOM||t.Vframe},getMangerMods:function(){var e=require.s.contexts._.defined,t=[];for(var a in e){var i=e[a];i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:a,exports:i})}return t},isReady:function(){return this.getMod("magix/magix")||this.getMod("magix")},updateDOMStyle:function(e,t){var a,i,r=this.getDL(),n=r("#"+t),o=n,s={height:o.outerHeight?o.outerHeight():o.height(),width:o.outerWidth?o.outerWidth():o.width()};if(s.height)i=o.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",s.width=Math.max(s.width,o.children().width()),a=o;else{var l=4;do{if(o=o.children(),s.height=o.height(),a=o,s.height){var c=o.css("position");"fixed"==c?(c=o.css("left"),e.left=c,e.position=c,c=o.css("top"),e.top=c,c=o.css("right"),e.right=c,c=o.css("bottom"),e.bottom=c):(i=o.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",s.width=Math.max(s.width,o.children().width()));break}l--}while(o.length&&!s.height&&l>=0)}var d,m=-1;do{d||(d="none"==n.css("display"));var g=parseInt(n.css("z-index"))||1;g&&g>m&&(m=g),n=n.parent()}while(n.length&&r.contains(document.body,n[0]));d&&(s={width:0,height:0}),1==m&&(m=2147483640),e.zIndex=m+1,e.width=s.width+"px",e.height=s.height+"px"},getDOMOffset:function(e){var t=this.getDL();return t("#"+e).offset()},bind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).on(t,a)},unbind:function(e,t,a){var i=this.getDL();return"string"==i.type(e)&&(e="#"+e),i(e).off(t,a)},getResType:function(e){var t=e.res||e.e,a=this.getDL(),i=a.type(e);return t&&(t.all&&t.constructor&&t.constructor.cached?i="Magix.Service":t.fetchAll||t.all&&t.one&&t.next&&t.then?i="Model Manager":t.bricks?i="Pagelet":a.isFunction(t)&&(i="\u51fd\u6570\u6216\u6784\u9020\u5668")),i},dragIt:function(e,t){var a=this.getDL(),i=a(e),r=o.get(a,"off",a.isFunction);a(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var a=parseInt(i.css("right"),10),n=parseInt(i.css("top"),10),o=e.pageX,s=e.pageY;r.begin(e.target,function(e){r.clear();var t=e.pageX-o,l=e.pageY-s;n+l<0&&(l=-n),i.css({right:a-t,top:n+l})})}})},drawIcons:function(e){for(var t=this.getDL(),a=e.length-1;a>=0;a--){var i=e[a],r=t("#"+i.id);r.removeClass("mx_ispt_bca-icon-bad").removeClass("mx_ispt_bca-icon-alter").addClass("mx_ispt_bca-icon"),i.cls&&r.addClass("mx_ispt_bca-icon-"+i.cls)}},getNode:function(e){var t=this.getDL();return t(e)}},v={},p={},x={};for(var _ in f)v[_]=p[_]=x[_]=f[_];v.getMod=function(e){try{var t=seajs.require(e);if(t)return t}catch(a){}var i=seajs.cache,r=h[e];if(!r)for(var n in i){var o=i[n];if(o.id===e)return o.exports}if(!r&&u[e]){var s=u[e];for(var n in i){for(var l=!1,c=s.length-1;c>=0;c--){for(var d=s[c],m=d.split("."),g=i[n].exports;m.length&&g;)g=g[m.shift()];if(g){l=!0;break}}if(l){r=i[n].exports,h[e]=r;break}}}return r},v.getMangerMods=function(){var e=seajs.cache,t=[];for(var a in e){var i=e[a],r=i.exports;r&&r.$m&&r.$s&&t.push({name:i.id,exports:r})}return t},p.getMod=function(e){var t;try{t=require(e)}catch(a){}return t||window.console.warn("seajs standalone\u6a21\u5f0f\u4e0b\u65e0\u6cd5\u627e\u5230\u6a21\u5757\uff1a"+e+"\uff0c\u4e5f\u65e0\u6cd5\u667a\u80fd\u63a2\u6d4b\u3002\u5982\u9700\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217"),t},p.getMangerMods=function(){return[]},x.getDL=function(){return window.$||window.jQuery},x.getRootId=function(){return Magix.config("rootId")},x.getVOM=function(){return Magix.VOM||Magix.Vframe},x.getMangerMods=function(){return[]},x.isReady=function(){return!0};var b={getEnv:function(){if(window.KISSY)return g;if(window.requirejs)return f;if(window.seajs)return v;if(window.define&&window.require)return p;if(window.Magix)return x;throw window.console.error("getEnvError:\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217"),new Error("unsupport current enviment")},getEvents:function(e){var t=[],a=0;if(e){var r=e.view&&(e.view.events||e.view.$evts)||e.$v&&e.$v.$eo,n=[];for(var o in r)a++,n.push(o);var s=e.view&&e.view.tmplEvents;s&&s.length&&(n=n.concat(s),a+=s.length),n.length&&t.push("&lt;"+n+"&gt;");var l=e.$v&&e.$v.$el,c=[],d=[],m=[],g={};if(l){for(var u,h=0;h<l.length;h++)if(u=l[h],a++,u.e)u.e==window?c.push(u.n):u.e==document&&d.push(u.n);else{var f=g[u.s];f?f.push(u.n):g[u.s]=[u.n]}for(o in g)m.push("$"+o+"&lt;"+g[o]+"&gt;")}c.length&&t.push('<span style="color:#'+i[1]+'">$win&lt;'+c+"&gt;</span>"),d.length&&t.push('<span style="color:#'+i[3]+'">$doc&lt;'+d+"&gt;</span>"),m.length&&t.push('<span style="color:#'+i[4]+'">'+m+"</span>")}return{list:t,total:a}},getShared:function(e){var t=[];if(e&&e.$v){var a=e.$v.$sd;if(a)for(var i in a)t.push(i)}return t},getLocation:function(e){var t,a=[];if(e){if(e.view){var i=e.view.$ol;i&&(t=i.pn,a=i.keys||i.ks)}if(e.$v){var r=e.$v.$l;r&&r.f&&(t=r.p,a=r.k)}}return{path:t,keys:a}},getGradualColor:function(e,t){var i=a.gradualStartColor,r=a.gradualEndColor,n=(r.r-i.r)/t,o=(r.g-i.g)/t,s=(r.b-i.b)/t,l=("0"+parseInt(i.r+e*n).toString(16)).slice(-2),c=("0"+parseInt(i.g+e*o).toString(16)).slice(-2),d=("0"+parseInt(i.b+e*s).toString(16)).slice(-2);return"#"+l+c+d},getTree:function(e){var i=e.getRootId(),r=e.getVOM(),n=[],o={total:0,vomTotal:0,children:[]},s=r.all(),l={};for(var c in s)s.hasOwnProperty(c)&&o.vomTotal++,l[c]=1;var d=function(e,i){var s=r.get(e),c={};if(s){o.total++,i.id=s.id,c.id=s.id,delete l[s.id],s.fcc||s.$cr?(i.status=t.created,c.cls=""):s.fca||s.$ca?(i.status=t.alter,c.cls="alter",(s.cM&&!s.view||s.$c&&!s.$v)&&(i.status=t.init,c.cls="bad")):(i.status=t.init,c.cls="bad"),n.push(c);var m=b.getEvents(s),g=m.total;if(g){var u=a.eventsCommonCount;g=Math.min(g,u),i.event=b.getGradualColor(g,u)}var h=b.getShared(s);if(h.length){var f=a.sharedCount,v=Math.min(h.length,f);i.shared=b.getGradualColor(v,f)}var p=b.getLocation(s);if(p.path||p.keys&&p.keys.length){var x=a.locationCount,_=p.keys||[],v=Math.min(x,_.length);i.location=b.getGradualColor(v,x)}var M=s.cM||s.$c;for(var w in M){var y={children:[]};d(w,y),y.id&&i.children.push(y)}}};d(i,o);var m=[];for(var g in l)m.push({id:g,il:!0,status:t.isolated,children:[]}),n.push({id:g,cls:"bad"});return o.isolated=m,{tree:o,flattened:n}},getManagerTree:function(e){for(var t=e.getMangerMods(),i=[],n=0,o={},s=0,l={},c=0,d=0;d<t.length;d++){var m=t[d],g=m.exports.$mMetas||m.exports.$mm||m.exports.$m;g._$id||(g._$id="t"+c++),l[g._$id]&&(l[g._$id].continued=!0),l[g._$id]=m}for(var u=0;u<t.length;u++){var h,f,v=t[u],p=[],x={left:[],right:[]},_=[],b=0,M=0,w=0,y=v.exports.$mMetas||v.exports.$mm||v.exports.$m;if(delete y._$id,!v.continued){for(h in y)if(f=y[h],f.cleans)for(var $=(f.cleans+"").split(","),I=0;I<$.length;I++)o[$[I]]=h;for(h in y){f=y[h];var T=r.normal,C={id:h,color:T,url:f.url||f.uri,cache:(f.cache||0|f.cacheTime)/1e3+"sec",desc:f.desc||"",cleans:f.cleans||"",cleaned:o[h]||"",hasAfter:f.after?(f.after+"").substr(0,200):""};f.cleans?(T=r.cleans,C.color=T,x.left.push(C),M++):o[h]?(T=r.cleaned,C.color=T,x.right.push(C),w++):f.cache||f.cacheTime?(T=r.cache,C.color=T,_.push(C)):(p.push(C),b++),s++}}n+=Math.ceil(b/a.managerCols),n+=Math.max(M,w),n+=Math.ceil(_.length/a.managerCols),i.push({name:v.name,rows:n,cleans:x,caches:_,maxLeft:M,maxRight:w,items:p})}return{groups:i,rows:n,total:s}},prepare:function(t){var a=b.getEnv();a.prepare();var i=50,r=function(){i--,i?e.body&&a.isReady()?t():setTimeout(r,500):window.console.error("\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector(\u9700\u8981\u7684\u6a21\u5757\u5982jquery,magix\u7b49\u68c0\u6d4b\u4e0d\u5230)\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217")};r()},start:function(){b.prepare(function(){s.setup();var e,a=b.getEnv(),i=a.getVOM(),r=function(e){e.on("created",function(){l.log("vframe:"+e.id+"["+(e.path||e.view.path||"")+"]\u6e32\u67d3\u5b8c\u6bd5",t.created),o()}),e.on("alter",function(a){if(a.id&&!a.logged){a.logged=1;var r=i.get(a.id);r&&l.log("\u4ecevframe:"+r.id+"["+(r.path||r.view.path||"")+"] \u53d1\u8d77\u754c\u9762\u53d8\u66f4",t.build)}l.log("vframe:"+e.id+"\u6536\u5230\u53d8\u66f4\u6d88\u606f",t.alter),o()}),e.on("viewInited",function(){l.log("vframe:"+e.id+"\u7684view["+e.view.path+"]\uff0cinit\u8c03\u7528\u5b8c\u6bd5",t.created)}),e.on("viewUnmounted",function(){var a=e.path||e.view&&e.view.path||"";a&&(a="["+a+"]"),l.log("vframe:"+e.id+"\u7684view"+a+"\u9500\u6bc1\u5b8c\u6bd5",t.isolated)}),e.on("viewMounted",function(){l.log("vframe:"+e.id+"\u7684view["+(e.path||e.view.path||"")+"]\uff0c\u9996\u6b21\u6e32\u67d3\u5b8c\u6bd5",t.created)}),e.___mh=!0},n=function(){var e=i.all();for(var t in e){var a=i.get(t);a.___mh||r(a)}},o=function(i){if(i)if("remove"==i.type)if(i.vframe){
var r=i.vframe.path;!r&&i.vframe.view&&(r=i.vframe.view.path),r=r?"("+r+")":"",l.log("\u9500\u6bc1vframe:"+i.vframe.id+r,t.isolated)}else l.log("remove:",i);else"created"==i.type&&n();clearTimeout(e),e=setTimeout(function(){var e=b.getTree(a);d.drawTree(e.tree),a.drawIcons(e.flattened)},0)};i.on("add",function(e){o(),e.vframe.pId&&l.log("\u627e\u5230vframe:"+e.vframe.pId+"\u7684\u5b50vframe:"+e.vframe.id,t.build),l.log("\u521b\u5efavframe:"+e.vframe.id,t.build),r(e.vframe)}),i.on("remove",o);var c=i.get(a.getRootId());c&&c.on("created",o),n(),o();var m,g=function(){clearTimeout(m),m=setTimeout(function(){var e=b.getManagerTree(a);d.drawManagerTree(e)},500)};a.hookAttachMod(g),g()})}};b.start()}}();