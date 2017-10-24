define(["exports","libs/underscore"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(t,e){this.slot=t,this.feature=e},r=function(t,e,s,r){this.slots={},this.start_end_dct={},this.w_scale=t,this.mode=e,this.include_label="Pack"===e,this.max_rows=s,this.measureText=r};(0,function(t){return t&&t.__esModule?t:{default:t}}(e).default.extend)(r.prototype,{_get_draw_coords:function(t){var e=Math.floor(t[1]*this.w_scale),s=Math.ceil(t[2]*this.w_scale),r=t[3];if(void 0!==r&&this.include_label){var i=this.measureText(r).width+7;e-i>=0?(e-=i,"left"):(s+=i,"right")}return[e,s]},_find_slot:function(t){for(var e=t[0],s=t[1],r=0;r<=this.max_rows;r++){var i=!1,a=this.start_end_dct[r];if(void 0!==a)for(var o=0,h=a.length;o<h;o++){var n=a[o];if(s>n[0]&&e<n[1]){i=!0;break}}if(!i)return r}return-1},slot_features:function(t){for(var e,r,i=this.start_end_dct,a=[],o=0,h=0,n=t.length;h<n;h++){r=(e=t[h])[0];var _=this.slots[r];if(_){if(e[1]<_.feature[1]||_.feature[2]<e[2])for(var l=this._get_draw_coords(_.feature),d=this._get_draw_coords(e),f=this.start_end_dct[_.slot],u=0;u<f.length;u++){var c=f[u];c[0]===l[0]&&c[1]===l[1]&&(f[u]=d)}o=Math.max(o,this.slots[r].slot)}else a.push(h)}for(var h=0,n=a.length;h<n;h++){r=(e=t[a[h]])[0];var v=this._get_draw_coords(e),w=this._find_slot(v);w>=0&&(void 0===i[w]&&(i[w]=[]),i[w].push(v),this.slots[r]=new s(w,e),o=Math.max(o,w))}return o+1}}),t.default={FeatureSlotter:r}});
//# sourceMappingURL=../../../maps/viz/trackster/slotting.js.map
