/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/jzz-input-kbd@1.2.5/javascript/JZZ.input.Kbd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define("JZZ.input.Kbd",["JZZ"],e):e(JZZ)}(0,(function(t){if(t){t.input||(t.input={});for(var e,i="1.2.5",s={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},n=0;n<16;n++)s[n]=n;c.prototype.channel=function(t){if(void 0===this.mpe){var e=s[t];void 0!==e&&(this.chan=e)}return this.chan},p.prototype._info=function(t){return{type:"html/javascript",name:r(t,"ASCII"),manufacturer:"virtual",version:i}},p.prototype._openIn=function(e,i){var s=new c(this._arg);s.port=e,s.mpe?(e._orig._mpe||(e._orig._mpe=t.MPE()),e._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(i){var s=t.MIDI(144+this.chan,i,127);s._mpe=i,e._receive(s)},s.noteOff=function(i){var s=t.MIDI(128+this.chan,i,127);s._mpe=i,e._receive(s)}):(s.noteOn=function(i){e._receive(t.MIDI(144+this.chan,i,127))},s.noteOff=function(i){e._receive(t.MIDI(128+this.chan,i,127))}),e._info=this._info(i),e._close=function(){s._close()},e.channel=function(t){return s.channel(t)},e._resume()},t.input.ASCII=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new p;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.ASCII.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new p;return s._arg=i,t.lib.registerMidiIn(e,s)},I.prototype.channel=function(t){if(void 0===this.mpe){var e=s[t];if(void 0!==e&&e!=this.chan){for(var i in this.playing)y(this.keys[i],this.keys[i]._active?this.stl0[i]:this.stl2[i]),y(this.keys[i],this.locs[i]);this.chan=e}}return this.chan},I.prototype._close=function(){for(var t in this.playing)"M"!=this.playing[t]&&"T"!=this.playing[t]||this.noteOff(t);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},I.prototype.press=function(t){this.keys[t]._active&&(y(this.keys[t],this.stl1[t]),y(this.keys[t],this.locs[t]),this.noteOn(t))},I.prototype.release=function(t){this.keys[t]._active&&(y(this.keys[t],this.stl0[t]),y(this.keys[t],this.locs[t]),this.noteOff(t))},I.prototype.forward=function(t){var e=t[1],i=t.getChannel();if(i>=this.chan&&i<=(this.mpe?this.chan+this.mpe[1]:this.chan)){var s=t[0]>>4;if(t.isNoteOn())this.keys[e]&&(this.playing[e]="E",y(this.keys[e],this.stl1[e]),y(this.keys[e],this.locs[e]));else if(t.isNoteOff())this.keys[e]&&(this.playing[e]=void 0,y(this.keys[e],this.keys[e]._active?this.stl0[e]:this.stl2[e]),y(this.keys[e],this.locs[e]));else if(11==s&&(120==e||123==e))for(e in this.playing)this.playing[e]=void 0,y(this.keys[e],this.keys[e]._active?this.stl0[e]:this.stl2[e]),y(this.keys[e],this.locs[e])}this.emit(t)},I.prototype.findKey=function(t,e,i){for(var s in this.keys)for(var n=document.elementFromPoint(t,e);n;n=n.parentNode)if(this.keys[s]==n)return void(i[s]=!0)},I.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},I.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.stl2={},this.playing={},this.touches={},this.current.wl=parseInt(this.current.wl),this.current.ww=parseInt(this.current.ww),this.current.bl=parseInt(this.current.bl),this.current.bw=parseInt(this.current.bw),this.current.keys)this.createWithKeys(this.current.keys);else{"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}}},I.prototype.createWithKeys=function(e){for(var i in e){var s=t.MIDI.noteValue(e[i][1]),n=e[i][0];"string"==typeof n&&(n=document.getElementById(n)),this.keys[s]=n,this.locs[s]={},this.stl0[s]={},this.stl1[s]={},this.stl2[s]={}}this.setListeners(),this.current.onCreate&&this.current.onCreate.apply(this)},I.prototype.createAt=function(t){t.innerHTML="";var e,i,s,n=this.current.pos.toUpperCase(),o=m(this.current.from),r=m(this.current.to,!0),h=r-o+1,a=h*this.current.ww+1,u=this.current.wl+1,c=this.current.ww-1,p=this.current.wl-1,l=this.current.bw-1,d=this.current.bl-1,f="N"!=n^!this.current.rev,v="E"!=n^!this.current.rev,b=document.createElement("span");b.style.display="inline-block",b.style.position="relative",b.style.margin="0px",b.style.padding="0px",b.style.borderStyle="none",b.style.userSelect="none",b.style.MozUserSelect="none",b.style.WebkitUserSelect="none",b.style.MsUserSelect="none",b.style.KhtmlUserSelect="none",b.style.cursor="default","E"==n||"W"==n?(b.style.width=u+"px",b.style.height=a+"px"):(b.style.width=a+"px",b.style.height=u+"px");for(var w=0;w<h;w++)e=g(w+o),i=document.createElement("span"),this.keys[e]=i,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[e]=s,"E"==n||"W"==n?(s.width=p+"px",s.height=c+"px",s.left="0px",s[v?"top":"bottom"]=this.current.ww*w+"px"):(s.width=c+"px",s.height=p+"px",s.top="0px",s[f?"left":"right"]=this.current.ww*w+"px",s.verticalAlign="top"),this.stl0[e]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[e]={backgroundColor:"#aaa",borderColor:"#000"},this.stl2[e]={backgroundColor:"#fff",borderColor:"#000"},y(i,this.stl0[e]),y(i,s),b.appendChild(i);var k=Math.ceil(this.current.ww-3*this.current.bw/4);(k+this.current.ww)%2&&k--;var x=g(o)+1,I=g(r);for(e=x;e<I;e++){var E,_=e%12,M=Math.floor(e/12);if(1==_)E=Math.floor(this.current.ww*(7*M+1.5-o))-k/2-this.current.bw;else if(3==_)E=Math.floor(this.current.ww*(7*M+1.5-o)+k/2);else if(6==_)E=this.current.ww*(7*M+5-o)-Math.floor(this.current.bw/2)-k-this.current.bw;else if(8==_)E=this.current.ww*(7*M+5-o)-Math.floor(this.current.bw/2);else{if(10!=_)continue;E=this.current.ww*(7*M+5-o)-Math.floor(this.current.bw/2)+k+this.current.bw}i=document.createElement("span"),this.keys[e]=i,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[e]=s,"E"==n||"W"==n?(s.width=d+"px",s.height=l+"px",s["E"==n?"right":"left"]="0px",s[v?"top":"bottom"]=E+"px"):(s.width=l+"px",s.height=d+"px",s["N"==n?"top":"bottom"]="0px",s[f?"left":"right"]=E+"px"),this.stl0[e]={backgroundColor:"#000",borderColor:"#000"},this.stl1[e]={backgroundColor:"#888",borderColor:"#000"},this.stl2[e]={backgroundColor:"#000",borderColor:"#000"},y(i,this.stl0[e]),y(i,s),b.appendChild(i)}t.appendChild(b),this.current.at=t,this.at=t,this.setListeners(),this.current.onCreate&&this.current.onCreate.apply(this)},I.prototype.setListeners=function(){var t,i,s=void 0===this.current.active||!!this.current.active;for(t in this.watchButtons=function(t){e=t.buttons},this.mouseUpHandle=(i=this,function(t){f(t=l(t))&&(i.mouseDown=!1)}),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=function(t){return function(e){e.preventDefault();for(var i={},s=0;s<e.touches.length;s++)t.findKey(e.touches[s].clientX,e.touches[s].clientY,i);var n,o={};for(n in i)n in t.touches?o[n]=!0:void 0===t.playing[n]&&(t.playing[n]="T",t.press(n),o[n]=!0);for(n in t.touches)n in i||(t.playing[n]=void 0,t.release(n));t.touches=o}}(this),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[],this.keys)this.mouseDownH[t]=b(this,t),this.mouseOverH[t]=w(this,t),this.mouseOutH[t]=k(this,t),this.mouseUpH[t]=x(this,t),this.keys[t].addEventListener("mousedown",this.mouseDownH[t]),this.keys[t].addEventListener("mouseover",this.mouseOverH[t]),this.keys[t].addEventListener("mouseout",this.mouseOutH[t]),this.keys[t].addEventListener("mouseup",this.mouseUpH[t]),this.keys[t].addEventListener("touchstart",this.touchHandle),this.keys[t].addEventListener("touchmove",this.touchHandle),this.keys[t].addEventListener("touchend",this.touchHandle),this.keys[t].addEventListener("touchcancel",this.touchHandle);for(t in this.keys)void 0===this.keys[t]._active&&(this.keys[t]._active=s),this.keys[t].ondragstart=v,this.keys[t].onselectstart=v;if(!this.resize&&this.bins.length>1){var n=this;this.resize=function(){n.onResize()},window.addEventListener("resize",this.resize)}},I.prototype.cleanup=function(){for(var t in this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle)),this.keys)this.mouseDownH[t]&&this.keys[t].removeEventListener("mousedown",this.mouseDownH[t]),this.mouseOverH[t]&&this.keys[t].removeEventListener("mouseover",this.mouseOverH[t]),this.mouseOutH[t]&&this.keys[t].removeEventListener("mouseout",this.mouseOutH[t]),this.mouseUpH[t]&&this.keys[t].removeEventListener("mouseup",this.mouseUpH[t]),this.touchHandle&&(this.keys[t].removeEventListener("touchstart",this.touchHandle),this.keys[t].removeEventListener("touchmove",this.touchHandle),this.keys[t].removeEventListener("touchend",this.touchHandle),this.keys[t].removeEventListener("touchcancel",this.touchHandle));this.at&&(this.at.innerHTML="")},I.prototype.settings=function(){return h(this.current)},I.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},I.prototype.enable=function(){for(var t in this.keys)this.keys[t]._active=!0;return this},I.prototype.disable=function(){for(var t in this.keys)this.keys[t]._active=!1;return this},I.prototype.getKey=function(e){var i=new E(this),s=t.MIDI.noteValue(e);return void 0!==this.keys[s]&&i.keys.push(s),i},I.prototype.getKeys=function(e,i){var s=new E(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)void 0!==n&&h<n||void 0!==o&&h>o||s.keys.push(h);return s},I.prototype.getWhiteKeys=function(e,i){var s=new E(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)if(!(void 0!==n&&h<n||void 0!==o&&h>o)){var a=h%12;1!=a&&3!=a&&6!=a&&8!=a&&10!=a&&s.keys.push(h)}return s},I.prototype.getBlackKeys=function(e,i){var s=new E(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)if(!(void 0!==n&&h<n||void 0!==o&&h>o)){var a=h%12;1!=a&&3!=a&&6!=a&&8!=a&&10!=a||s.keys.push(h)}return s},E.prototype.setInnerHTML=function(t){for(var e in this.keys)this.piano.keys[this.keys[e]].innerHTML=t;return this},E.prototype.setStyle=function(t,e,i){var s,n,o;for(s in void 0===e&&(e=t),void 0===i&&(i=t),this.keys){for(n in o=this.keys[s],t)this.piano.stl0[o][n]=t[n];for(n in e)this.piano.stl1[o][n]=e[n];for(n in i)this.piano.stl2[o][n]=i[n];y(this.piano.keys[o],this.piano.playing[o]?this.piano.stl1[o]:this.piano.keys[o]._active?this.piano.stl0[o]:this.piano.stl2[o]),y(this.piano.keys[o],this.piano.locs[o])}return this},E.prototype.enable=function(){var t,e;for(t in this.keys)e=this.keys[t],this.piano.keys[e]._active=!0,y(this.piano.keys[e],this.piano.playing[e]?this.piano.stl1[e]:this.piano.stl0[e]),y(this.piano.keys[e],this.piano.locs[e]);return this},E.prototype.disable=function(){var t,e;for(t in this.keys)e=this.keys[t],this.piano.keys[e]._active=!1,y(this.piano.keys[e],this.piano.playing[e]?this.piano.stl1[e]:this.piano.stl2[e]),y(this.piano.keys[e],this.piano.locs[e]);return this},_.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Kbd"),manufacturer:"virtual",version:i}},_.prototype._openIn=function(e,i){var s=new I(this._arg);s.send=function(){e.send.apply(e,arguments)},s.connect=function(){e.connect.apply(e,arguments)},s.create(),s.mpe?(e._orig._mpe||(e._orig._mpe=t.MPE()),e._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(i){var s=t.MIDI(144+this.chan,i,127);s._mpe=i,e._emit(e._filter(s))},s.noteOff=function(i){var s=t.MIDI(128+this.chan,i,127);s._mpe=i,e._emit(e._filter(s))}):(s.noteOn=function(i){e._emit(t.MIDI(144+this.chan,i,127))},s.noteOff=function(i){e._emit(t.MIDI(128+this.chan,i,127))}),s.emit=function(t){e._emit(e._filter(t))},e._info=this._info(i),e._receive=function(t){s.forward(t)},e._close=function(){s._close()},e.settings=function(){return s.settings()},e.getKey=function(t){return s.getKey(t)},e.getKeys=function(t,e){return s.getKeys(t,e)},e.getWhiteKeys=function(t,e){return s.getWhiteKeys(t,e)},e.getBlackKeys=function(t,e){return s.getBlackKeys(t,e)},e.channel=function(t){return s.channel(t)},e._resume()},t.input.Kbd=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new _;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Kbd.version=function(){return i},t.input.Kbd.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new _;return s._arg=i,t.lib.registerMidiIn(e,s)};var o={margin:0,padding:0,width:"100%",height:"100%"};M.prototype.setBase=function(t){t=parseFloat(t),!isNaN(t)&&isFinite(t)&&t>=0&&t<=1&&(this.base=t)},M.prototype.setValue=function(t){if(t=parseFloat(t),!(isNaN(t)||!isFinite(t)||t<0||t>1||t==this.val))return this.val=t,this.num=Math.round(t*(this.lsb||!this.msb?16383:127)),!0},M.prototype.emit=function(t){this.msb?this.lsb?(t.emit([176+this.chan,this.msb,this.num>>7]),t.emit([176+this.chan,this.lsb,127&this.num])):t.emit([176+this.chan,this.msb,this.num]):t.emit([224+this.chan,127&this.num,this.num>>7])},M.prototype.read=function(t){if(!this.msb&&t[0]==224+this.chan&&t[1]==parseInt(t[1])&&t[2]==parseInt(t[2]))return this.num=t[2]<<7|127&t[1],this.val=this.num/16383,!0;if(this.msb&&t[0]==176+this.chan&&t[2]==parseInt(t[2])){if(t[1]==this.msb)return this.lsb?(this.num=t[2]<<7|127&this.num,this.val=this.num/16383):(this.num=127&t[2],this.val=this.num/127),!0;if(t[1]==this.lsb)return this.num=16256&this.num|127&t[2],this.val=this.num/16383,!0}},S.prototype.setInnerHTML=function(t){return this.inner.innerHTML=t,this},S.prototype.setStyle=function(t,e){var i;for(i in void 0===e&&(e=t),t)this.stl0[i]=t[i];for(i in e)this.stl1[i]=e[i];return y(this.span,this.ctrl.isSelected()?this.stl1:this.stl0),y(this.span,this.stl),this},K.prototype._close=function(){this.at&&(this.at.innerHTML=""),this.mouseUpHandler&&window.removeEventListener("mouseup",this.mouseUpHandler)},K.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},K.prototype.createCurrent=function(){this.at&&(this.at.innerHTML=""),"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},K.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},K.prototype.settings=function(){return h(this.current)},K.prototype.isSelected=function(){return void 0!==this.dragX},K.prototype.restyle=function(){for(var t in this.spans)this.spans[t].setStyle()},K.prototype.onMouseDown=function(t){var i;void 0===this.dragX&&(this.dragX=t.clientX,this.dragY=t.clientY,this.mouseMove=(i=this,function(t){e=t.buttons,i.onMouseMove(t)}),this.mouseUp=function(t){return function(e){f(e=l(e))&&(window.removeEventListener("mousemove",t.mouseMove),window.removeEventListener("mouseup",t.mouseUp),t.dragX=void 0,t.restyle(),t.onMouseUp(e))}}(this),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),this.restyle())},K.prototype.onMouseMove=function(t){void 0!==this.dragX&&this.onMove(t.clientX,t.clientY)},K.prototype.onMouseUp=function(){},K.prototype.onTouchStart=function(t){t.preventDefault(),void 0===this.dragX&&(this.touch=t.targetTouches[0].identifier,this.dragX=t.targetTouches[0].clientX,this.dragY=t.targetTouches[0].clientY,this.restyle())},K.prototype.onTouchMove=function(t){if(t.preventDefault(),void 0!==this.dragX&&void 0!==this.touch)for(var e in t.targetTouches)if(t.targetTouches[0].identifier==this.touch)return void this.onMove(t.targetTouches[e].clientX,t.targetTouches[e].clientY)},K.prototype.onTouchEnd=function(t){t.preventDefault(),this.touch=void 0,this.dragX=void 0,this.restyle(),this.onMouseUp(t)},H.prototype=new K,H.prototype.channel=function(t){var e=s[t];return void 0!==e&&e!=this.chan&&(this.chan=e,this.data.chan=e,this.setValue(this.data.base)),this.chan},H.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=parseInt(this.current.rh);s||(s=128),this.rh=s;var n=parseInt(this.current.rw);n||(n=2);var r=parseInt(this.current.kh);r||(r=24);var h=parseInt(this.current.kw);h||(h=16);var a=this.current.pos.toUpperCase();this.pos=a,this.data||(this.data=new M(this.current.data),this.data.chan=this.chan,this.data.setBase(this.current.base),this.data.setValue(this.current.val)),this.dx=-h/2,this.dy=-(r/2+1),e||(e=r+s+2),i||(i=(h>n?h:n)+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-n)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.left=this.dx+"px");var u=document.createElement("span");this.box=u;var c=document.createElement("span");y(c,o),this.boxSpan=new S(this,u,c,this.stlB,this.stlB0,this.stlB1);var p=document.createElement("span");this.range=p;var l=document.createElement("span");y(l,o),this.rangeSpan=new S(this,p,l,this.stlR,this.stlR0,this.stlR1);var d=document.createElement("span");if(this.knob=d,this.knobSpan=new S(this,d,d,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],(void 0===this.current.active||this.current.active)&&(u.addEventListener("touchstart",D),d.addEventListener("mousedown",L(this)),d.addEventListener("touchstart",B(this)),d.addEventListener("touchmove",X(this)),d.addEventListener("touchend",R(this)),d.addEventListener("touchcancel",R(this))),this.current.onCreate&&this.current.onCreate.apply(this),p.appendChild(l),p.appendChild(d),u.appendChild(c),u.appendChild(p),u.ondragstart=v,u.onselectstart=v,t.appendChild(u),!this.at&&this.bins.length>1){var f=this;this.resize=function(){f.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),y(this.box,void 0===this.dragX?this.stlB0:this.stlB1),y(this.box,this.stlB),y(this.range,void 0===this.dragX?this.stlR0:this.stlR1),y(this.range,this.stlR),y(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),y(this.knob,this.stlK)},H.prototype.getBox=function(){return this.boxSpan},H.prototype.getRange=function(){return this.rangeSpan},H.prototype.getKnob=function(){return this.knobSpan},H.prototype.setValue=function(t){if(void 0===t)t=this.data.val;else if(!this.data.setValue(t))return;t=this.data.val,"N"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rh,this.coord=t,t+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.top=t+"px",this.knob.style.top=t+"px"):(this.stlK.left=t+"px",this.knob.style.left=t+"px")},H.prototype.onMove=function(t,e){var i;(i="N"==this.pos||"S"==this.pos?this.coord+e-this.dragY:this.coord+t-this.dragX)<0&&(i=0),i>this.rh&&(i=this.rh),this.move(i)},H.prototype.move=function(t){if(this.coord!=t){"N"==this.pos||"S"==this.pos?(this.knob.style.top=t+this.dy+"px",this.stlK.top=this.knob.style.top,this.dragY+=t-this.coord):(this.knob.style.left=t+this.dy+"px",this.stlK.left=this.knob.style.left,this.dragX+=t-this.coord);var e=t/this.rh;"N"!=this.pos&&"W"!=this.pos||(e=1-e),this.data.setValue(e)&&this.data.emit(this),this.coord=t}},H.prototype.forward=function(t){this.emit(t),this.data.read(t)&&this.setValue()},V.prototype=new K,V.prototype.channel=function(t){var e=s[t];return void 0!==e&&e!=this.chan&&(this.chan=e,this.dataX.chan=e,this.dataY.chan=e,this.setValue(this.dataX.base,this.dataY.base)),this.chan},V.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=parseInt(this.current.rh);s||(s=128),this.rh=s;var n=parseInt(this.current.rw);n||(n=128),this.rw=n;var r=parseInt(this.current.kh);r||(r=24);var h=parseInt(this.current.kw);h||(h=16);var a=this.current.pos.toUpperCase();this.pos=a,this.dataX||(this.dataX=new M(this.current.dataX),this.dataY=new M(this.current.dataY),void 0!==this.current.dataX||void 0===this.current.dataY||this.dataY.msb||(this.dataX=new M("mod")),void 0!==this.current.dataY||this.dataX.msb||(this.dataY=new M("mod")),this.dataX.chan=this.chan,this.dataY.chan=this.chan,this.dataX.setBase(this.current.baseX),this.dataY.setBase(this.current.baseY),this.dataX.setValue(this.current.valX),this.dataY.setValue(this.current.valY)),this.dx=-(h/2+1),this.dy=-(r/2+1),e||(e=r+s+2),i||(i=h+n+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-n)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.left=this.dx+"px");var u=document.createElement("span");this.box=u;var c=document.createElement("span");y(c,o),this.boxSpan=new S(this,u,c,this.stlB,this.stlB0,this.stlB1);var p=document.createElement("span");this.range=p;var l=document.createElement("span");y(l,o),this.rangeSpan=new S(this,p,l,this.stlR,this.stlR0,this.stlR1);var d=document.createElement("span");if(this.knob=d,this.knobSpan=new S(this,d,d,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],(void 0===this.current.active||this.current.active)&&(u.addEventListener("touchstart",D),d.addEventListener("mousedown",L(this)),d.addEventListener("touchstart",B(this)),d.addEventListener("touchmove",X(this)),d.addEventListener("touchend",R(this)),d.addEventListener("touchcancel",R(this))),this.current.onCreate&&this.current.onCreate.apply(this),p.appendChild(l),p.appendChild(d),u.appendChild(c),u.appendChild(p),u.ondragstart=v,u.onselectstart=v,t.appendChild(u),!this.at&&this.bins.length>1){var f=this;this.resize=function(){f.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),y(this.box,void 0===this.dragX?this.stlB0:this.stlB1),y(this.box,this.stlB),y(this.range,void 0===this.dragX?this.stlR0:this.stlR1),y(this.range,this.stlR),y(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),y(this.knob,this.stlK)},V.prototype.getBox=function(){return this.boxSpan},V.prototype.getRange=function(){return this.rangeSpan},V.prototype.getKnob=function(){return this.knobSpan},V.prototype.setValue=function(t,e){if(void 0===t)t=this.dataX.val,e=this.dataY.val;else if(!this.dataX.setValue(t)&&!this.dataY.setValue(e))return;t=this.dataX.val,e=this.dataY.val,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rw,e*=this.rh,"N"==this.pos||"S"==this.pos?(this.coordX=t,this.coordY=e):(this.coordX=e,this.coordY=t),t+=this.dx,e+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.left=t+"px",this.stlK.top=e+"px"):(this.stlK.top=t+"px",this.stlK.left=e+"px"),this.knob.style.left=this.stlK.left,this.knob.style.top=this.stlK.top},V.prototype.onMove=function(t,e){(t=this.coordX+t-this.dragX)<0&&(t=0),(e=this.coordY+e-this.dragY)<0&&(e=0),"N"==this.pos||"S"==this.pos?(t>this.rw&&(t=this.rw),e>this.rh&&(e=this.rh),this.knob.style.left=t+this.dx+"px",this.knob.style.top=e+this.dy+"px"):(t>this.rh&&(t=this.rh),e>this.rw&&(e=this.rw),this.knob.style.left=t+this.dy+"px",this.knob.style.top=e+this.dx+"px"),this.stlK.left=this.knob.style.left,this.stlK.top=this.knob.style.top,this.dragX+=t-this.coordX,this.dragY+=e-this.coordY,this.coordX=t,this.coordY=e,"E"!=this.pos&&"W"!=this.pos||(t=this.coordY,e=this.coordX),t/=this.rw,e/=this.rh,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),this.dataX.setValue(t)&&this.dataX.emit(this),this.dataY.setValue(e)&&this.dataY.emit(this)},V.prototype.forward=function(t){this.emit(t),(this.dataX.read(t)||this.dataY.read(t))&&this.setValue()},Y.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Slider"),manufacturer:"virtual",version:i}},Y.prototype._openIn=function(t,e){var i=new H(this._arg);i.connect=function(){t.connect.apply(t,arguments)},i.send=function(){t.send.apply(t,arguments)},i.create(),i.emit=function(e){t._emit(e)},t._info=this._info(e),t._receive=function(t){i.forward(t)},t._close=function(){i._close()},t.settings=function(){return i.settings()},t.getBox=function(){return i.boxSpan},t.getRange=function(){return i.rangeSpan},t.getKnob=function(){return i.knobSpan},t.setValue=function(t){i.setValue(t)},t.channel=function(t){return i.channel(t)},t._resume()},t.input.Slider=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new Y;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Slider.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new Y;return s._arg=i,t.lib.registerMidiIn(e,s)},U.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Pad"),manufacturer:"virtual",version:i}},U.prototype._openIn=function(t,e){var i=new V(this._arg);i.connect=function(){t.connect.apply(t,arguments)},i.send=function(){t.send.apply(t,arguments)},i.create(),i.emit=function(e){t._emit(e)},t._info=this._info(e),t._receive=function(t){i.forward(t)},t._close=function(){i._close()},t.settings=function(){return i.settings()},t.getBox=function(){return i.boxSpan},t.getRange=function(){return i.rangeSpan},t.getKnob=function(){return i.knobSpan},t.setValue=function(t){i.setValue(t)},t.channel=function(t){return i.channel(t)},t._resume()},t.input.Pad=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new U;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Pad.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new U;return s._arg=i,t.lib.registerMidiIn(e,s)}}function r(t,e){return t||e}function h(t){var e={};for(var i in t)e[i]=t[i];return e}function a(t){var e=t.toUpperCase();if(1==e.length){var i=e.charCodeAt(0);if(i>=65&&i<=90)return"Key"+e;if(i>=48&&i<=57)return"Digit"+e}return(e={ESC:"Escape",TAB:"Tab",BSP:"Backspace","-":"Minus",_:"Minus","+":"Equal","=":"Equal","[":"BracketLeft","{":"BracketLeft","]":"BracketRight","}":"BracketRight",";":"Semicolon",":":"Semicolon","'":"Quote",'"':"Quote","`":"Backquote","~":"Backquote","|":"Backslash","\\":"Backslash",",":"Comma","<":"Comma",".":"Period",">":"Period","/":"Slash","?":"Slash"," ":"Space"}[e])||t}function u(t){return t>=65&&t<=90?"Key"+String.fromCharCode(t):t>=48&&t<=57?"Digit"+String.fromCharCode(t):{9:"Tab",8:"Backspace",27:"Escape",32:"Space",59:"Semicolon",171:"Equal",173:"Minus",188:"Comma",190:"Period",191:"Slash",192:"Backquote",219:"BracketLeft",220:"Backslash",221:"BracketRight",222:"Quote"}[t]}function c(e){for(var i in this.notes={},this.playing=[],void 0===e&&(e={}),void 0!==e.mpe?(t.MPE.validate(e.mpe),this.mpe=e.mpe,this.chan=e.mpe[0]):(this.chan=s[e.chan],void 0===this.chan&&(this.chan=0)),e){var n=a(i);if("function"==typeof e[i])this.notes[n]=e[i];else{var o=t.MIDI.noteValue(e[i]);void 0!==n&&void 0!==o&&(this.notes[n]=o)}}var r=this;this.keydown=function(t){var e=t.code?r.notes[t.code]:r.notes[u(t.keyCode)];void 0!==e&&(t.preventDefault(),"function"==typeof e?e.apply(r,[!0]):r.playing[e]||(r.playing[e]=!0,r.noteOn(e)))},this.keyup=function(t){var e=t.code?r.notes[t.code]:r.notes[u(t.keyCode)];void 0!==e&&(t.preventDefault(),"function"==typeof e&&e.apply(r,[!1]),r.playing[e]&&(r.playing[e]=void 0,r.noteOff(e)))},"string"==typeof e.at&&(this.at=document.getElementById(e.at));try{this.at.addEventListener("keydown",this.keydown),this.at.addEventListener("keyup",this.keyup),(!this.at.tabIndex||this.at.tabIndex<0)&&(this.at.tabIndex=0)}catch(t){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.at=document}this._close=function(){for(var t in this.at.removeEventListener("keydown",this.keydown),this.at.removeEventListener("keyup",this.keyup),r.playing)r.noteOff(t)}}function p(){}function l(t){return void 0===t.buttons||t.buttons!=e?t:(t.stopPropagation(),0==t.button?{buttons:1^e}:1==t.button?{buttons:4^e}:2==t.button?{buttons:2^e}:void 0)}function d(t){return void 0===t.buttons?!t.button:1&t.buttons}function f(t){return void 0===t.buttons?!t.button:!(1&t.buttons)}function v(){return!1}function y(t,e){if(t)for(var i in e)t.style[i]=e[i]}function m(e,i){return(i?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[(e=t.MIDI.noteValue(e))%12]+7*Math.floor(e/12)}function g(t){return 12*Math.floor(t/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[t%7]}function b(t,i){return function(s){d(s)&&!t.playing[i]&&(t.mouseDown=!0,t.playing[i]="M",t.press(i)),e=s.buttons}}function w(t,i){return function(s){t.mouseDown&&!t.playing[i]&&(t.playing[i]="M",t.press(i)),e=s.buttons}}function k(t,i){return function(s){t.mouseDown&&"M"==t.playing[i]&&!function(t,e){for(;t;t=t.parentNode)if(t==e)return!0;return!1}(s.relatedTarget,this)&&(t.playing[i]=void 0,t.release(i)),e=s.buttons}}function x(t,e){return function(i){f(i=l(i))&&t.mouseDown&&"M"==t.playing[e]&&(t.playing[e]=void 0,t.release(e),t.mouseDown=!1)}}function I(e){this.bins=[],this.params={0:{}};var i,n={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};for(i in void 0===e&&(e={}),void 0!==e.mpe?(t.MPE.validate(e.mpe),this.mpe=e.mpe,this.chan=e.mpe[0]):(this.chan=s[e.chan],void 0===this.chan&&(this.chan=0)),e)if(i==parseInt(i))this.params[i]=h(e[i]);else{if("chan"==i)continue;if(("from"==i||"to"==i)&&void 0===t.MIDI.noteValue(e[i]))continue;n[i]=e[i]}for(i in this.params){for(var o in this.bins.push(i),n)"from"!=o&&"to"!=o||void 0!==this.params[i][o]&&void 0!==t.MIDI.noteValue(this.params[i][o])||(this.params[i][o]=n[o]),o in this.params[i]||(this.params[i][o]=n[o]);var r=this.params[i].from,a=this.params[i].to;t.MIDI.noteValue(r)>t.MIDI.noteValue(a)&&(this.params[i].from=a,this.params[i].to=r)}this.bins.sort((function(t,e){return t-e}))}function E(t){this.piano=t,this.keys=[]}function _(){}function M(t){if(this.base=.5,this.val=.5,this.msb=0,this.lsb=0,this.chan=0,t instanceof Array){if(1!=t.length&&2!=t.length)return;if(2==t.length){if(t[1]!=parseInt(t[1])||t[1]<1||t[1]>127)return;this.msb=t[0],t[1]!=t[0]&&(this.lsb=t[1])}else this.msb=t[0]}else if(t==parseInt(t)){if(t<1||t>127)return;this.msb=t}else{var e={mod:[1,33],breath:[2,34],foot:[4,36],portamento:[5,37],volume:[7,39],balance:[8,40],pan:[10,42],expression:[11,43],effect1:[12,44],effect2:[13,45]}[t];e&&(this.msb=e[0],this.lsb=e[1])}this.msb&&7!=this.msb&&8!=this.msb&&10!=this.msb&&(this.base=0),this.val=-1,this.setValue(this.base)}function S(t,e,i,s,n,o){this.ctrl=t,this.span=e,this.inner=i,this.stl=s,this.stl0=n,this.stl1=o}function K(){}function C(t,e){var i;for(i in this.bins=[],this.params={0:{}},void 0===t&&(t={}),void 0===e&&(e={}),this.chan=s[t.chan],void 0===this.chan&&(this.chan=0),t)if(i==parseInt(i))this.params[i]=h(t[i]);else{if("chan"==i)continue;e[i]=t[i]}for(i in this.params)for(var n in this.bins.push(i),e)"from"!=n&&"to"!=n||void 0!==m(this.params[i][n])||(this.params[i][n]=e[n]),n in this.params[i]||(this.params[i][n]=e[n]);this.bins.sort((function(t,e){return t-e}))}function L(t){return function(i){e=i.buttons,d(i)&&t.onMouseDown(i)}}function B(t){return function(e){t.onTouchStart(e)}}function X(t){return function(e){t.onTouchMove(e)}}function R(t){return function(e){t.onTouchEnd(e)}}function D(t){t.preventDefault()}function H(t){C.call(this,t,{pos:"N",rw:2,rh:128,kw:24,kh:16})}function V(t){C.call(this,t,{pos:"N",rw:128,rh:128,kw:24,kh:16})}function Y(){}function U(){}}));
