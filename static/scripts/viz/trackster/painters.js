define(["exports","libs/underscore"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(e),i=function(t,e){var a=t[0],i=t[1],r=e[0],l=e[1];return a<r?i<=r?1001:i<=l?1003:1002:a>l?1006:i<=l?1005:1004},r=function(t,e){var a=i(t,e);return 1001!==a&&1006!==a},l=function(t,e,a,i,r,l){void 0===l&&(l=4);var n,s=i-e,o=r-a,h=Math.floor(Math.sqrt(s*s+o*o)/l),f=s/h,_=o/h;for(n=0;n<h;n++,e+=f,a+=_)n%2==0&&t.fillRect(e,a,l,1)},n=function(t,e,a,i){var r=e-i/2,l=e+i/2,n=a-Math.sqrt(3*i/2);t.beginPath(),t.moveTo(r,n),t.lineTo(l,n),t.lineTo(e,a),t.lineTo(r,n),t.strokeStyle=this.fillStyle,t.fill(),t.stroke(),t.closePath()},s=function(t){this.default_val=t||1};s.prototype.gen_val=function(t){return this.default_val};var o=function(t){this.incomplete_features=t.incomplete_features,this.feature_mapper=t.feature_mapper},h=function(t,e,i,r,l){this.data=t,this.view_start=e,this.view_end=i,this.prefs=a.default.extend({},this.default_prefs,r),this.mode=l};h.prototype.default_prefs={},h.prototype.draw=function(t,e,a,i){},h.prototype.get_start_draw_pos=function(t,e){return this._chrom_pos_to_draw_pos(t,e,-.5)},h.prototype.get_end_draw_pos=function(t,e){return this._chrom_pos_to_draw_pos(t,e,.5)},h.prototype.get_draw_pos=function(t,e){return this._chrom_pos_to_draw_pos(t,e,0)},h.prototype._chrom_pos_to_draw_pos=function(t,e,a){return Math.floor(e*(Math.max(0,t-this.view_start)+a))};var f=function(t,e,a,i,r){h.call(this,t,e,a,i,r)};f.prototype.default_prefs={min_value:void 0,max_value:void 0,mode:"Histogram",color:"#000",overflow_color:"#F66"},f.prototype.draw=function(t,e,i,r){var l=!1,n=this.prefs.min_value,s=this.prefs.max_value,o=s-n,h=i,f=this.view_start,_=this.mode,c=this.data;t.save();var u=Math.round(i+n/o*i);"Intensity"!==_&&(t.fillStyle="#aaa",t.fillRect(0,u,e,1)),t.beginPath();var d,p,g;g=c.length>1?a.default.map(c.slice(0,-1),function(t,e){return Math.ceil((c[e+1][0]-c[e][0])*r)}):[10];for(var v,m=this.prefs.block_color||this.prefs.color,y=parseInt(m.slice(1),16),w=(16711680&y)>>16,x=(65280&y)>>8,M=255&y,b=!1,S=!1,k=0,P=c.length;k<P;k++)if(t.fillStyle=t.strokeStyle=m,b=S=!1,v=g[k],d=Math.floor((c[k][0]-f-.5)*r),null!==(p=c[k][1])){if(p<n?(S=!0,p=n):p>s&&(b=!0,p=s),"Histogram"===_)p=Math.round(p/o*h),t.fillRect(d,u,v,-p);else if("Intensity"===_){var R=(p-n)/o,A=Math.round(w+(255-w)*(1-R)),F=Math.round(x+(255-x)*(1-R)),T=Math.round(M+(255-M)*(1-R));t.fillStyle="rgb("+A+","+F+","+T+")",t.fillRect(d,0,v,h)}else p=Math.round(h-(p-n)/o*h),l?t.lineTo(d,p):(l=!0,"Filled"===_?(t.moveTo(d,h),t.lineTo(d,p)):t.moveTo(d,p));if(t.fillStyle=this.prefs.overflow_color,b||S){var I;"Histogram"===_||"Intensity"===_?I=v:(d-=2,I=4),b&&t.fillRect(d,0,I,3),S&&t.fillRect(d,h-3,I,3)}t.fillStyle=m}else l&&"Filled"===_&&t.lineTo(d,h),l=!1;"Filled"===_?(l&&(t.lineTo(d,u),t.lineTo(0,u)),t.fill()):t.stroke(),t.restore()};var _=function(t){this.feature_positions={},this.slot_height=t,this.translation=0,this.y_translation=0};_.prototype.map_feature_data=function(t,e,a,i){this.feature_positions[e]||(this.feature_positions[e]=[]),this.feature_positions[e].push({data:t,x_start:a,x_end:i})},_.prototype.get_feature_data=function(t,e){var a,i=Math.floor((e-this.y_translation)/this.slot_height);if(!this.feature_positions[i])return null;t+=this.translation;for(var r=0;r<this.feature_positions[i].length;r++)if(a=this.feature_positions[i][r],t>=a.x_start&&t<=a.x_end)return a.data};var c=function(t,e,a,i,r,l,n){h.call(this,t,e,a,i,r),this.alpha_scaler=l||new s,this.height_scaler=n||new s,this.max_label_length=200};c.prototype.default_prefs={block_color:"#FFF",connector_color:"#FFF"},a.default.extend(c.prototype,{get_required_height:function(t,e){var a=this.get_row_height(),i=a,r=this.mode;return"no_detail"!==r&&"Squish"!==r&&"Pack"!==r||(a=t*i),a+this.get_top_padding(e)},get_top_padding:function(t){return 0},draw:function(t,e,a,i,r){var l=this.data,n=this.view_start,s=this.view_end;t.save(),t.fillStyle=this.prefs.block_color,t.textAlign="right";for(var h,f=this.get_row_height(),c=new _(f),u=[],d=0,p=l.length;d<p;d++){var g=l[d],v=g[0],m=g[1],y=g[2],w=r&&void 0!==r[v]?r[v].slot:null;("Dense"===this.mode||null!==w)&&m<s&&y>n&&(h=this.draw_element(t,this.mode,g,w,n,s,i,f,e),c.map_feature_data(g,w,h[0],h[1]),(m<n||y>s)&&u.push(g))}return t.restore(),c.y_translation=this.get_top_padding(e),new o({incomplete_features:u,feature_mapper:c})},draw_element:function(t,e,a,i,r,l,n,s,o){return[0,0]}});var u=function(t,e,a,i,r,l,n){c.call(this,t,e,a,i,r,l,n),this.draw_background_connector=!0,this.draw_individual_connectors=!1};a.default.extend(u.prototype,c.prototype,{get_row_height:function(){var t=this.mode;return"Dense"===t?10:"no_detail"===t?3:"Squish"===t?5:10},draw_element:function(t,e,a,i,r,l,n,s,o){a[0];var h=a[1],f=a[2],_=a[3],c=a[4],u=Math.floor(Math.max(0,(h-r-.5)*n)),d=Math.ceil(Math.min(o,Math.max(0,(f-r-.5)*n))),p=u,g=d,v=("Dense"===e?0:0+i)*s+this.get_top_padding(o),m=null,y=null,w=c&&"+"!==c&&"."!==c?this.prefs.reverse_strand_color:this.prefs.block_color,x=this.prefs.label_color;if(t.globalAlpha=this.alpha_scaler.gen_val(a),"Dense"===e&&(i=1),"no_detail"===e)t.fillStyle=w,t.fillRect(u,v+5,d-u,1);else{var M=a[5],b=a[6],S=a[7],k=!0;M&&b&&(m=Math.floor(Math.max(0,(M-r)*n)),y=Math.ceil(Math.min(o,Math.max(0,(b-r)*n))));var P,R;if("Squish"===e?(P=1,R=3,k=!1):(P=5,R=9),S){var A,F;"Squish"===e||"Dense"===e?(A=v+Math.floor(1.5)+1,F=1):c?(A=v,F=R):(A+=2.5,F=1),this.draw_background_connector&&("Squish"===e||"Dense"===e?t.fillStyle="#ccc":c?"+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand")):t.fillStyle="#ccc",t.fillRect(u,A,d-u,F));for(var T=0,I=S.length;T<I;T++){var q,D,H=S[T],X=Math.floor(Math.max(0,(H[0]-r-.5)*n)),O=Math.ceil(Math.min(o,Math.max((H[1]-r-.5)*n)));if(!(X>O)){if(t.fillStyle=w,t.fillRect(X,v+(R-P)/2+1,O-X,P),void 0!==m&&b>M&&!(X>y||O<m)){var L=Math.max(X,m),N=Math.min(O,y);t.fillRect(L,v+1,N-L,R),1===S.length&&"Pack"===e&&("+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand_inv"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand_inv")),L+14<N&&(L+=2,N-=2),t.fillRect(L,v+1,N-L,R))}this.draw_individual_connectors&&q&&this.draw_connector(t,q,D,X,O,v),q=X,D=O}}if("Pack"===e){t.globalAlpha=1,t.fillStyle="white";var j=this.height_scaler.gen_val(a),C=Math.ceil(R*j),B=Math.round((R-C)/2);1!==j&&(t.fillRect(u,A+1,d-u,B),t.fillRect(u,A+R-B+1,d-u,B))}}else t.fillStyle=w,t.fillRect(u,v+1,d-u,R),c&&k&&("+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand_inv"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand_inv")),t.fillRect(u,v+1,d-u,R));t.globalAlpha=1,_&&"Pack"===e&&h>r&&(t.fillStyle=x,0===r&&u-t.measureText(_).width<0?(t.textAlign="left",t.fillText(_,d+2,v+8,this.max_label_length),g+=t.measureText(_).width+2):(t.textAlign="right",t.fillText(_,u-2,v+8,this.max_label_length),p-=t.measureText(_).width+2))}return t.globalAlpha=1,[p,g]}});var d=function(t,e,a,i,r,l,n,s,o){c.call(this,t,e,a,i,r,l,n),this.ref_seq=s?s.data:null,this.base_color_fn=o};a.default.extend(d.prototype,c.prototype,{get_row_height:function(){var t,e=this.mode;return"Dense"===e?t=10:"Squish"===e?t=5:(t=10,this.prefs.show_insertions&&(t*=2)),t},_parse_cigar:function(t){var e=[[0,0]],i=e[0],r=0,l=a.default.map(t.match(/[0-9]+[MIDNSHP=X]/g),function(t){var a=parseInt(t.slice(0,-1),10),l=t.slice(-1);return"N"===l?0!==i[1]&&(i=[r+a,r+a],e.push(i)):-1==="ISHP".indexOf(l)&&(i[1]+=a,r+=a),["MIDNSHP=X".indexOf(l),a]});return{blocks:e,cigar:l}},draw_read:function(t,e,a,l,s,o,h,f,_,c){var u=function(t){return Math.floor(Math.max(0,(t-s-.5)*a))};t.textAlign="center";var d,p,g=[s,o],v=0,m=0,y=Math.round(a/2),x=t.canvas.manager.char_width_px,M="+"===_?this.prefs.detail_block_color:this.prefs.reverse_strand_color,b="Pack"===e,S=b?9:3,k=l+1,P=new w(t,S,a,e),R=[],A=[],F=this._parse_cigar(f);f=F.cigar,R=F.blocks;for(Q=0;Q<R.length;Q++){var T=R[Q];r([h+T[0],h+T[1]],g)&&((d=u(h+T[0]))===(p=u(h+T[1]))&&(p+=1),t.fillStyle=M,t.fillRect(d,k,p-d,S))}for(var I=0,q=f.length;I<q;I++){var D=f[I],H="MIDNSHP=X"[D[0]],X=D[1],O=h+v;if(d=u(O),p=u(O+X),r([O,O+X],g))switch(d===p&&(p+=1),H){case"H":case"S":case"P":break;case"M":v+=X;break;case"=":case"X":var L="";"X"===H?L=c.slice(m,m+X):this.ref_seq&&(L=this.ref_seq.slice(Math.max(0,O-s),Math.min(O-s+X,o-s)));for(var N=Math.max(O,s),j=0;j<L.length;j++)if(L&&!this.prefs.show_differences||"X"===H){V=Math.floor(Math.max(0,(N+j-s)*a));t.fillStyle=this.base_color_fn(L[j]),b&&a>x?t.fillText(L[j],V,l+9):a>.05&&t.fillRect(V-y,k,Math.max(1,Math.round(a)),S)}"X"===H&&(m+=X),v+=X;break;case"N":t.fillStyle="#ccc",t.fillRect(d,k+(S-1)/2,p-d,1),v+=X;break;case"D":P.draw_deletion(d,k,X),v+=X;break;case"I":var C=d-y;if(r([O,O+X],g)){var B=c.slice(m,m+X);if(this.prefs.show_insertions){var E=d-(p-d)/2;if(("Pack"===e||"Auto"===this.mode)&&void 0!==c&&a>x){switch(t.fillStyle="yellow",t.fillRect(E-y,l-9,p-d,9),A[A.length]={type:"triangle",data:[C,l+4,5]},t.fillStyle="#ccc",i([O,O+X],g)){case 1003:B=B.slice(s-O);break;case 1004:B=B.slice(0,O-o);break;case 1005:break;case 1002:B=B.slice(s-O,O-o)}for(var j=0,G=B.length;j<G;j++){var V=Math.floor(Math.max(0,(O+j-s)*a));t.fillText(B[j],V-(p-d)/2,l)}}else t.fillStyle="yellow",t.fillRect(E,l+("Dense"!==this.mode?2:5),p-d,"Dense"!==e?3:9)}else("Pack"===e||"Auto"===this.mode)&&void 0!==c&&a>x&&A.push({type:"text",data:[B.length,C,l+9]})}m+=X}else v=function(t,e,a){return-1!=="M=NXD".indexOf(e)&&(t+=a),t}(v,H,X),m=function(t,e,a){return-1!=="IX".indexOf(e)&&(t+=a),t}(m,H,X)}t.fillStyle="yellow";for(var z,J,K,Q=0;Q<A.length;Q++)J=(z=A[Q]).type,K=z.data,"text"===J?(t.save(),t.font="bold "+t.font,t.fillText(K[0],K[1],K[2]),t.restore()):"triangle"===J&&n(t,K[0],K[1],K[2])},draw_element:function(t,e,a,i,r,n,s,o,h){a[0];var f=a[1],_=a[2],c=a[3],u=Math.floor(Math.max(-.5*s,(f-r-.5)*s)),d=Math.ceil(Math.min(h,Math.max(0,(_-r-.5)*s))),p=("Dense"===e?0:0+i)*o,g="Pack"===e?9:3;this.prefs.label_color;if(a[5]instanceof Array){var v=!0;a[4][1]>=r&&a[4][0]<=n&&a[4][2]?this.draw_read(t,e,s,p,r,n,a[4][0],a[4][2],a[4][3],a[4][4]):v=!1,a[5][1]>=r&&a[5][0]<=n&&a[5][2]?this.draw_read(t,e,s,p,r,n,a[5][0],a[5][2],a[5][3],a[5][4]):v=!1;var m=Math.ceil(Math.min(h,Math.max(-.5*s,(a[4][1]-r-.5)*s))),y=Math.floor(Math.max(-.5*s,(a[5][0]-r-.5)*s));if(v&&y>m){t.fillStyle="#ccc";var w=p+1+(g-1)/2;l(t,m,w,y,w)}}else this.draw_read(t,e,s,p,r,n,f,a[4],a[5],a[6]);return"Pack"===e&&f>=r&&"."!==c&&(t.fillStyle=this.prefs.label_color,0===r&&u-t.measureText(c).width<0?(t.textAlign="left",t.fillText(c,d+2,p+9,this.max_label_length)):(t.textAlign="right",t.fillText(c,u-2,p+9,this.max_label_length))),[0,0]}});var p=function(t,e,a,i,r,l,n){u.call(this,t,e,a,i,r,l,n),this.longest_feature_length=this.calculate_longest_feature_length(),this.draw_background_connector=!1,this.draw_individual_connectors=!0};a.default.extend(p.prototype,c.prototype,u.prototype,{calculate_longest_feature_length:function(){for(var t=0,e=0,a=this.data.length;e<a;e++){var i=this.data[e],r=i[1],l=i[2];t=Math.max(t,l-r)}return t},get_top_padding:function(t){var e=t/(this.view_end-this.view_start);return Math.min(128,Math.ceil(this.longest_feature_length/2*e))},draw_connector:function(t,e,a,i,r,l){var n=(a+i)/2,s=i-n;Math.PI;s>0&&(t.beginPath(),t.arc(n,l,i-n,Math.PI,0),t.stroke())}});var g=function(t,e){Array.isArray(t)?this.rgb=t:6==t.length?this.rgb=t.match(/.{2}/g).map(function(t){return parseInt(t,16)}):7==t.length?this.rgb=t.substring(1,7).match(/.{2}/g).map(function(t){return parseInt(t,16)}):this.rgb=t.split("").map(function(t){return parseInt(t+t,16)}),this.alpha="number"==typeof e?e:1};g.prototype={eval:function(){return this},toCSS:function(){return this.alpha<1?"rgba("+this.rgb.map(function(t){return Math.round(t)}).concat(this.alpha).join(", ")+")":"#"+this.rgb.map(function(t){return t=Math.round(t),1===(t=(t>255?255:t<0?0:t).toString(16)).length?"0"+t:t}).join("")},toHSL:function(){var t,e,a=this.rgb[0]/255,i=this.rgb[1]/255,r=this.rgb[2]/255,l=this.alpha,n=Math.max(a,i,r),s=Math.min(a,i,r),o=(n+s)/2,h=n-s;if(n===s)t=e=0;else{switch(e=o>.5?h/(2-n-s):h/(n+s),n){case a:t=(i-r)/h+(i<r?6:0);break;case i:t=(r-a)/h+2;break;case r:t=(a-i)/h+4}t/=6}return{h:360*t,s:e,l:o,a:l}},toARGB:function(){return"#"+[Math.round(255*this.alpha)].concat(this.rgb).map(function(t){return t=Math.round(t),1===(t=(t>255?255:t<0?0:t).toString(16)).length?"0"+t:t}).join("")},mix:function(t,e){var a=this,i=e,r=2*i-1,l=a.toHSL().a-t.toHSL().a,n=((r*l==-1?r:(r+l)/(1+r*l))+1)/2,s=1-n,o=[a.rgb[0]*n+t.rgb[0]*s,a.rgb[1]*n+t.rgb[1]*s,a.rgb[2]*n+t.rgb[2]*s],h=a.alpha*i+t.alpha*(1-i);return new g(o,h)}};var v=function(t,e,a,i){this.start_color=new g(t),this.end_color=new g(e),this.start_value=a,this.end_value=i,this.value_range=i-a};v.prototype.map_value=function(t){return t=Math.max(t,this.start_value),t=Math.min(t,this.end_value),t=(t-this.start_value)/this.value_range,this.start_color.mix(this.end_color,1-t).toCSS()};var m=function(t,e,a,i,r){this.positive_ramp=new v(e,a,0,r),this.negative_ramp=new v(e,t,0,-i),this.start_value=i,this.end_value=r};m.prototype.map_value=function(t){return t=Math.max(t,this.start_value),(t=Math.min(t,this.end_value))>=0?this.positive_ramp.map_value(t):this.negative_ramp.map_value(-t)};var y=function(t,e,a,i,r){h.call(this,t,e,a,i,r);var l,n;if(void 0===this.prefs.min_value){var s=1/0;for(l=0,n=this.data.length;l<n;l++)s=Math.min(s,this.data[l][6]);this.prefs.min_value=s}if(void 0===this.prefs.max_value){var o=-1/0;for(l=0,n=this.data.length;l<n;l++)o=Math.max(o,this.data[l][6]);this.prefs.max_value=o}};y.prototype.default_prefs={min_value:void 0,max_value:void 0,mode:"Heatmap",pos_color:"#FF8C00",neg_color:"#4169E1"},y.prototype.draw=function(t,e,a,i){var r,l,n,s,o,h,f=this.prefs.min_value,_=this.prefs.max_value,c=this.view_start,u=(this.mode,this.data),d=1/Math.sqrt(2),p=new m(this.prefs.neg_color,"#FFFFFF",this.prefs.pos_color,f,_),g=function(t){return(t-c)*i};t.save(),t.rotate(-45*Math.PI/180),t.scale(d,d);for(var v=0,y=u.length;v<y;v++)l=g((r=u[v])[1]),n=g(r[2]),s=g(r[4]),o=g(r[5]),h=r[6],t.fillStyle=p.map_value(h),t.fillRect(l,s,n-l,o-s);t.restore()};var w=function(t,e,a,i){this.ctx=t,this.row_height=e,this.px_per_base=a,this.draw_details=("Pack"===i||"Auto"===i)&&a>=t.canvas.manager.char_width_px,this.delete_details_thickness=.2};a.default.extend(w.prototype,{draw_deletion:function(t,e,a){this.ctx.fillStyle="black";var i=(this.draw_details?this.delete_details_thickness:1)*this.row_height;e+=.5*(this.row_height-i),this.ctx.fillRect(t,e,a*this.px_per_base,i)}});var x=function(t,e,a,i,r,l){h.call(this,t,e,a,i,r),this.base_color_fn=l,this.divider_height=1};a.default.extend(x.prototype,h.prototype,{get_row_height:function(){var t=this.mode;return"Dense"===t?10:"Squish"===t?5:10},get_required_height:function(t){var e=this.prefs.summary_height;return t>1&&this.prefs.show_sample_data&&(e+=this.divider_height+t*this.get_row_height()),e},draw:function(t,e,i,r){t.save();var l,n,s,o,h,f,_,c,u,d,p,g=function(t,e){var a=t.length,i=e.length,r=0,l=1,n=null;return"-"===e?(n="deletion",l=t.length):0===t.indexOf(e)&&a>i?(n="deletion",l=a-i,r=i):0===e.indexOf(t)&&a<i&&(n="insertion",l=i-a,r=i),null!==n?{type:n,start:r,len:l}:{}},v=Math.max(1,Math.floor(r)),m=this.data.length?this.data[0][7].split(",").length:0,y="Squish"===this.mode?5:10,x=r<.1?y:"Squish"===this.mode?3:9,M=!0,b=new w(t,y,r,this.mode);1===m&&(y=x=r<t.canvas.manager.char_width_px?this.prefs.summary_height:y,b.row_height=y,M=!1),this.prefs.show_sample_data&&M&&(t.fillStyle="#F3F3F3",t.globalAlpha=1,t.fillRect(0,this.prefs.summary_height-this.divider_height,e,this.divider_height)),t.textAlign="center";for(var S=0;S<this.data.length;S++)if(l=this.data[S],n=l[1],s=l[3],o=[l[4].split(",")],h=l[7].split(","),f=l.slice(8),o=a.default.map(a.default.flatten(o),function(t){var e={type:"snp",value:t,start:0},i=g(s,t);return a.default.extend(e,i)}),!(n<this.view_start||n>this.view_end)){if(M)for(t.fillStyle="#999999",t.globalAlpha=1,p=0;p<o.length;p++)for(c=this.get_start_draw_pos(n+o[p].start,r),t.fillRect(c,0,v,this.prefs.summary_height),u=this.prefs.summary_height,p=0;p<o.length;p++){t.fillStyle="deletion"===o[p].type?"black":this.base_color_fn(o[p].value);var k=f/h.length,P=Math.ceil(this.prefs.summary_height*k);t.fillRect(c,u-P,v,P),u-=P}if(this.prefs.show_sample_data)for(u=M?this.prefs.summary_height+this.divider_height:0,p=0;p<h.length;p++,u+=y)if(d=h[p]?h[p].split(/\/|\|/):["0","0"],_=null,d[0]===d[1]?"."===d[0]||"0"!==d[0]&&(_=o[parseInt(d[0],10)-1],t.globalAlpha=1):(_="0"!==d[0]?d[0]:d[1],_=o[parseInt(_,10)-1],t.globalAlpha=.5),_)if(c=this.get_start_draw_pos(n+_.start,r),"snp"===_.type){var R=_.value;t.fillStyle=this.base_color_fn(R),b.draw_details?t.fillText(R,this.get_draw_pos(n,r),u+y):t.fillRect(c,u+1,v,x)}else"deletion"===_.type&&b.draw_deletion(c,u+1,_.len)}t.restore()}}),t.default={Scaler:s,LinePainter:f,LinkedFeaturePainter:u,ReadPainter:d,ArcLinkedFeaturePainter:p,DiagonalHeatmapPainter:y,VariantPainter:x}});
//# sourceMappingURL=../../../maps/viz/trackster/painters.js.map
