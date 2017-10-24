define(["exports","libs/underscore"],function(t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(i).default.extend,n=function(t){this.manager=null,this.name=t.name,this.index=t.index,this.tool_id=t.tool_id,this.tool_exp_name=t.tool_exp_name};e(n.prototype,{to_dict:function(){return{name:this.name,index:this.index,tool_id:this.tool_id,tool_exp_name:this.tool_exp_name}}});var a=function(t,i,e){return $("<a/>").attr("href","javascript:void(0);").attr("title",t).addClass("icon-button").addClass(i).tooltip().click(e)},r=function(t){n.call(this,t),this.low="low"in t?t.low:-Number.MAX_VALUE,this.high="high"in t?t.high:Number.MAX_VALUE,this.min="min"in t?t.min:Number.MAX_VALUE,this.max="max"in t?t.max:-Number.MAX_VALUE,this.container=null,this.slider=null,this.slider_label=null;var i=this;i.parent_div=$("<div/>").addClass("filter-row slider-row");var e=$("<div/>").addClass("elt-label").appendTo(i.parent_div),r=($("<span/>").addClass("slider-name").text(i.name+"  ").appendTo(e),$("<span/>").text(this.low+"-"+this.high)),s=$("<span/>").addClass("slider-value").appendTo(e).append("[").append(r).append("]");i.values_span=r;var l=$("<div/>").addClass("slider").appendTo(i.parent_div);i.control_element=$("<div/>").attr("id",i.name+"-filter-control").appendTo(l),i.control_element.slider({range:!0,min:this.min,max:this.max,step:this.get_slider_step(this.min,this.max),values:[this.low,this.high],slide:function(t,e){i.slide(t,e)},change:function(t,e){i.control_element.slider("option","slide").call(i.control_element,t,e)}}),i.slider=i.control_element,i.slider_label=r,function(t,i,e){t.click(function(){var t=i.text(),n=parseFloat(e.slider("option","max")),a=n<=1?4:n<=1e6?n.toString().length:6,r=!1,s=$(this).parents(".slider-row");s.addClass("input"),e.slider("option","values")&&(a=2*a+1,r=!0),i.text(""),$("<input type='text'/>").attr("size",a).attr("maxlength",a).attr("value",t).appendTo(i).focus().select().click(function(t){t.stopPropagation()}).blur(function(){$(this).remove(),i.text(t),s.removeClass("input")}).keyup(function(t){if(27===t.keyCode)$(this).trigger("blur");else if(13===t.keyCode){var i=e.slider("option","min"),n=e.slider("option","max"),a=function(t){return isNaN(t)||t>n||t<i},l=$(this).val();if(r){if(l=l.split("-"),l=[parseFloat(l[0]),parseFloat(l[1])],a(l[0])||a(l[1]))return alert("Parameter value must be in the range ["+i+"-"+n+"]"),$(this)}else if(l=parseFloat(l),a(l))return alert("Parameter value must be in the range ["+i+"-"+n+"]"),$(this);e.slider(r?"values":"value",l),s.removeClass("input")}})})}(s,r,i.control_element);var o=$("<div/>").addClass("display-controls").appendTo(i.parent_div);this.transparency_icon=a("Use filter for data transparency","layer-transparent",function(){i.manager.alpha_filter!==i?(i.manager.alpha_filter=i,i.manager.parent_div.find(".layer-transparent").removeClass("active").hide(),i.transparency_icon.addClass("active").show()):(i.manager.alpha_filter=null,i.transparency_icon.removeClass("active")),i.manager.track.request_draw({force:!0,clear_after:!0})}).appendTo(o).hide(),this.height_icon=a("Use filter for data height","arrow-resize-090",function(){i.manager.height_filter!==i?(i.manager.height_filter=i,i.manager.parent_div.find(".arrow-resize-090").removeClass("active").hide(),i.height_icon.addClass("active").show()):(i.manager.height_filter=null,i.height_icon.removeClass("active")),i.manager.track.request_draw({force:!0,clear_after:!0})}).appendTo(o).hide(),i.parent_div.hover(function(){i.transparency_icon.show(),i.height_icon.show()},function(){i.manager.alpha_filter!==i&&i.transparency_icon.hide(),i.manager.height_filter!==i&&i.height_icon.hide()}),$("<div style='clear: both;'/>").appendTo(i.parent_div)};e(r.prototype,{to_dict:function(){var t=n.prototype.to_dict.call(this);return e(t,{type:"number",min:this.min,max:this.max,low:this.low,high:this.high})},copy:function(){return new r({name:this.name,index:this.index,tool_id:this.tool_id,tool_exp_name:this.tool_exp_name})},get_slider_step:function(t,i){return i-t<=2?.01:1},slide:function(t,i){var e=i.values;this.values_span.text(e[0]+"-"+e[1]),this.low=e[0],this.high=e[1];var n=this;setTimeout(function(){e[0]===n.low&&e[1]===n.high&&n.manager.track.request_draw({force:!0,clear_after:!0})},25)},applies_to:function(t){return t.length>this.index},_keep_val:function(t){return isNaN(t)||t>=this.low&&t<=this.high},keep:function(t){if(!this.applies_to(t))return!0;var i=t[this.index];if(i instanceof Array){for(var e=!0,n=0;n<i.length;n++)if(!this._keep_val(i[n])){e=!1;break}return e}return this._keep_val(t[this.index])},update_attrs:function(t){var i=!1;if(!this.applies_to(t))return i;var e=t[this.index];e instanceof Array||(e=[e]);for(var n=0;n<e.length;n++){var a=e[n];a<this.min&&(this.min=Math.floor(a),i=!0),a>this.max&&(this.max=Math.ceil(a),i=!0)}return i},update_ui_elt:function(){this.min<this.max?this.parent_div.show():this.parent_div.hide();var t=this.slider.slider("option","min"),i=this.slider.slider("option","max");(this.min<t||this.max>i)&&(this.slider.slider("option","min",this.min),this.slider.slider("option","max",this.max),this.slider.slider("option","step",this.get_slider_step(this.min,this.max)),this.slider.slider("option","values",[this.min,this.max]))}});var s=function(t,i){if(this.track=t,this.alpha_filter=null,this.height_filter=null,this.filters=[],this.parent_div=$("<div/>").addClass("filters").hide(),this.parent_div.bind("drag",function(t){t.stopPropagation()}).click(function(t){t.stopPropagation()}).bind("dblclick",function(t){t.stopPropagation()}).bind("keydown",function(t){t.stopPropagation()}),i&&"filters"in i){for(var e,n=("alpha_filter"in i?i.alpha_filter:null),a=("height_filter"in i?i.height_filter:null),s=i.filters,l=0;l<s.length;l++)"number"===s[l].type?(e=new r(s[l]),this.add_filter(e),e.name===n&&(this.alpha_filter=e,e.transparency_icon.addClass("active").show()),e.name===a&&(this.height_filter=e,e.height_icon.addClass("active").show())):console.log("ERROR: unsupported filter: ",name,type);"visible"in i&&i.visible&&this.parent_div.show()}if(0!==this.filters.length){var o=$("<div/>").addClass("param-row").appendTo(this.parent_div),h=this;$("<input type='submit'/>").attr("value","Run on complete dataset").appendTo(o).click(function(){h.run_on_dataset()})}};e(s.prototype,{show:function(){this.parent_div.show()},hide:function(){this.parent_div.hide()},toggle:function(){this.parent_div.toggle()},visible:function(){return this.parent_div.is(":visible")},to_dict:function(){for(var t,i={},e=[],n=0;n<this.filters.length;n++)t=this.filters[n],e.push(t.to_dict());return i.filters=e,i.alpha_filter=this.alpha_filter?this.alpha_filter.name:null,i.height_filter=this.height_filter?this.height_filter.name:null,i.visible=this.parent_div.is(":visible"),i},copy:function(t){for(var i=new s(t),e=0;e<this.filters.length;e++)i.add_filter(this.filters[e].copy());return i},add_filter:function(t){t.manager=this,this.parent_div.append(t.parent_div),this.filters.push(t)},remove_all:function(){this.filters=[],this.parent_div.children().remove()},init_filters:function(){for(var t=0;t<this.filters.length;t++)this.filters[t].update_ui_elt()},clear_filters:function(){for(var t=0;t<this.filters.length;t++){var i=this.filters[t];i.slider.slider("option","values",[i.min,i.max])}this.alpha_filter=null,this.height_filter=null,this.parent_div.find(".icon-button").hide()},run_on_dataset:function(){for(var t,i,e=function(t,i,e){return i in t||(t[i]=e),t[i]},n={},a=0;a<this.filters.length;a++)(t=this.filters[a]).tool_id&&(t.min!==t.low&&((i=e(n,t.tool_id,[]))[i.length]=t.tool_exp_name+" >= "+t.low),t.max!==t.high&&((i=e(n,t.tool_id,[]))[i.length]=t.tool_exp_name+" <= "+t.high));var r=[];for(var s in n)r[r.length]=[s,n[s]];!function t(i,e){var n=e[0],a=n[0],r={cond:"("+n[1].join(") and (")+")",input:i,target_dataset_id:i,tool_id:a};e=e.slice(1),$.getJSON(run_tool_url,r,function(i){i.error?Galaxy.modal.show({title:"Filter Dataset",body:"Error running tool "+a,buttons:{Close:Galaxy.modal.hide()}}):0===e.length?Galaxy.modal.show({title:"Filtering Dataset",body:"Filter(s) are running on the complete dataset. Outputs are in dataset's history.",buttons:{Close:Galaxy.modal.hide()}}):t(i.dataset_id,e)})}(this.track.dataset_id,r)}}),t.default={FiltersManager:s,NumberFilter:r}});
//# sourceMappingURL=../../../maps/viz/trackster/filters.js.map
