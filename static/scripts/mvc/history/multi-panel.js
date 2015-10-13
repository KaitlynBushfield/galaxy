define(["mvc/history/history-model","mvc/history/history-panel-edit","mvc/history/copy-dialog","mvc/base-mvc","utils/ajax-queue","ui/mode-button","ui/search-input"],function(a,b,c,d,e){var f=Backbone.View.extend(d.LoggableMixin).extend({tagName:"div",className:"history-column flex-column flex-row-container",id:function(){return this.model?"history-column-"+this.model.get("id"):""},initialize:function(a){a=a||{},this.purgeAllowed=_.isUndefined(a.purgeAllowed)?!1:a.purgeAllowed,this.panel=a.panel||this.createPanel(a),this.setUpListeners()},createPanel:function(a){a=_.extend({model:this.model,purgeAllowed:this.purgeAllowed,dragItems:!0},a);var c=new b.HistoryPanelEdit(a);return c._renderEmptyMessage=this.__patch_renderEmptyMessage,c},__patch_renderEmptyMessage:function(a){var b=this,c=b.model.get("empty"),d=b.emptyMsg,e=b.$emptyMessage(a);if(!_.isEmpty(b.hdaViews))return e.hide();if(!c&&(this.model.contents.length||(d='<span class="fa fa-spinner fa-spin"></span> <i>'+_l("loading datasets")+"...</i>"),b.searchFor)){var f=!!b.model.contents.find(function(a){return"HistoryDatasetAssociation"!==a.get("model_class")});d=f||b.model.contents.haveDetails()?b.noneFoundMsg:'<span class="fa fa-spinner fa-spin"></span> <i>'+_l("searching")+"...</i>"}return e.empty().append(d).show()},setUpListeners:function(){var a=this;this.once("rendered",function(){a.trigger("rendered:initial",a)}),this.setUpPanelListeners()},setUpPanelListeners:function(){var a=this;this.listenTo(this.panel,{rendered:function(){a.trigger("rendered",a)}},this)},inView:function(a,b){var c=this.$el.offset().left,d=c+this.$el.width();return a>d?!1:c>b?!1:!0},$panel:function(){return this.$(".history-panel")},render:function(a){a=void 0!==a?a:"fast";var b=this.model?this.model.toJSON():{};return this.$el.html(this.template(b)),this.renderPanel(a),this.setUpBehaviors(),this},setUpBehaviors:function(){},template:function(a){return a=_.extend(a||{},{isCurrentHistory:this.currentHistory}),$(['<div class="panel-controls clear flex-row">',this.controlsLeftTemplate({history:a,view:this}),this.controlsRightTemplate({history:a,view:this}),"</div>",'<div class="inner flex-row flex-column-container">','<div id="history-',a.id,'" class="history-column history-panel flex-column"></div>',"</div>"].join(""))},renderPanel:function(a){return a=void 0!==a?a:"fast",this.panel.setElement(this.$panel()).render(a),this.currentHistory&&this.panel.$list().before(this.panel._renderDropTargetHelp()),this},events:{"click .switch-to.btn":function(){this.model.setAsCurrent()},"click .delete-history":function(){var a=this;this.model._delete().fail(function(a,b,c){alert(_l("Could not delete the history")+":\n"+c)}).done(function(){a.render()})},"click .undelete-history":function(){var a=this;this.model.undelete().fail(function(a,b,c){alert(_l("Could not undelete the history")+":\n"+c)}).done(function(){a.render()})},"click .purge-history":function(){if(confirm(_l("This will permanently remove the data. Are you sure?"))){var a=this;this.model.purge().fail(function(a,b,c){alert(_l("Could not purge the history")+":\n"+c)}).done(function(){a.render()})}},"click .copy-history":"copy"},copy:function(){c(this.model)},controlsLeftTemplate:_.template(['<div class="pull-left">',"<% if( data.history.isCurrentHistory ){ %>",'<strong class="current-label">',_l("Current History"),"</strong>","<% } else { %>",'<button class="switch-to btn btn-default">',_l("Switch to"),"</button>","<% } %>","</div>"].join(""),{variable:"data"}),controlsRightTemplate:_.template(['<div class="pull-right">',"<% if( !data.history.purged ){ %>",'<div class="panel-menu btn-group">','<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">','<span class="caret"></span>',"</button>",'<ul class="dropdown-menu pull-right" role="menu">',"<% if( !data.history.deleted ){ %>",'<li><a href="javascript:void(0);" class="copy-history">',_l("Copy"),"</a></li>",'<li><a href="javascript:void(0);" class="delete-history">',_l("Delete"),"</a></li>","<% } else /* if is deleted */ { %>",'<li><a href="javascript:void(0);" class="undelete-history">',_l("Undelete"),"</a></li>","<% } %>","<% if( data.view.purgeAllowed ){ %>",'<li><a href="javascript:void(0);" class="purge-history">',_l("Purge"),"</a></li>","<% } %>","</ul>","</div>","<% } %>","</div>"].join(""),{variable:"data"}),toString:function(){return"HistoryPanelColumn("+(this.panel?this.panel:"")+")"}}),g=Backbone.View.extend(d.LoggableMixin).extend({className:"multi-panel-history",initialize:function(a){a=a||{},this.log(this+".init",a),this.$el.addClass(this.className),this.options={columnWidth:312,borderWidth:1,columnGap:8,headerHeight:29,footerHeight:0,controlsHeight:20},this.perPage=a.perPage||10,this.hdaQueue=new e.NamedAjaxQueue([],!1),this.collection=null,this.columnMap={},this.columnOptions=a.columnOptions||{},this.historySearch=null,this.datasetSearch=null,this.setCollection(a.histories),this.setUpListeners()},setUpListeners:function(){var a=this;this.on("end-of-scroll",function(){a.collection.fetch({limit:a.perPage})})},setCollection:function(b){return this.stopListening(this.collection),this.collection=b||new a.HistoryCollection,this.setUpCollectionListeners(),this.collection.sort({silent:!0}),this.createColumns(),this.hdaQueue.clear(),this.trigger("new-collection",this),this},addModels:function(a,b,c){c=c||{};var d=this;return a=_.isArray(a)?a:[a],a.forEach(function(a){d.addColumn(a,!1)}),this},setUpCollectionListeners:function(){var a=this;a.listenTo(a.collection,{error:a._ajaxErrorHandler,add:a.addModels,"all-fetched":a._postFetchAll,"new-current":a.addAsCurrentColumn,"set-as-current":a.setCurrentHistory,"change:deleted change:purged":a.handleDeletedHistory,sort:function(){a.renderColumns(0)}})},_postFetchAll:function(){if(this.$(".histories-loading-indicator").remove(),!this.historySearch){var a=this.$(".outer-middle");a.scrollLeft(a.scrollLeft()+24)}},setCurrentHistory:function(){var a=_.findWhere(this.columnMap,{currentHistory:!0});a&&(a.currentHistory=!1,a.$el.height(""));var b=this.columnMap[this.collection.currentHistoryId];return b.currentHistory=!0,this.collection.sort(),this._recalcFirstColumnHeight(),b},handleDeletedHistory:function(a){if(a.get("deleted")||a.get("purged")){this.log("handleDeletedHistory",this.collection.includeDeleted,a);var b=this;if(column=b.columnMap[a.id],!column)return;column.model.id===this.collection.currentHistoryId||b.collection.includeDeleted||b.removeColumn(column)}},_ajaxErrorHandler:function(){var a=_.toArray(arguments);window.Galaxy&&Galaxy.handleErrors?Galaxy.handleErrors.apply(Galaxy,a):(alert(_l("There was a problem getting data from the server")),console.error(a[0].responseText))},create:function(){return this.collection.create({current:!0})},createColumns:function(a,b){b=b||this.options.columnOptions;var c=this;c.columnMap={},c.collection.each(function(a){var d=c.createColumn(a,b);c.columnMap[a.id]=d})},createColumn:function(a,b){b=_.extend({},b,{model:a,purgeAllowed:Galaxy.config.allow_user_dataset_purge});var c=new f(b);return a.id===this.collection.currentHistoryId&&(c.currentHistory=!0),this.setUpColumnListeners(c),this.datasetSearch&&(c.panel.searchItems(this.datasetSearch),this.queueHdaFetchDetails(c)),c},addColumn:function(a,b){b=void 0!==b?b:!0;var c=this.createColumn(a);return this.columnMap[a.id]=c,b&&this.renderColumns(),c},addAsCurrentColumn:function(a){var b=this,c=this.addColumn(a,!1);return this.setCurrentHistory(a),c.once("rendered",function(){b.queueHdaFetch(c)}),c},removeColumn:function(a,b){if(b=void 0!==b?b:!0,this.log("removeColumn",a),a){var c=this,d=this.options.columnWidth+this.options.columnGap;a.$el.fadeOut("fast",function(){b&&($(this).remove(),c.$(".middle").width(c.$(".middle").width()-d),c.checkColumnsInView(),c._recalcFirstColumnHeight()),c.stopListening(a.panel),c.stopListening(a),delete c.columnMap[a.model.id],a.remove()})}},setUpColumnListeners:function(a){var b=this;b.listenTo(a,{"in-view":b.queueHdaFetch}),b.listenTo(a.panel,{"view:draggable:dragstart":function(a){b._dropData=JSON.parse(a.dataTransfer.getData("text")),b.currentColumnDropTargetOn()},"view:draggable:dragend":function(){b._dropData=null,b.currentColumnDropTargetOff()},"droptarget:drop":function(a,c,d){var f=b._dropData.filter(function(a){return d.model.contents.isCopyable(a)});b._dropData=null;var g=new e.NamedAjaxQueue;f.forEach(function(a){g.add({name:"copy-"+a.id,fn:function(){return d.model.contents.copy(a)}})}),g.start(),g.done(function(){d.model.fetch()})}})},columnMapLength:function(){return Object.keys(this.columnMap).length},sortedFilteredColumns:function(a){if(a=a||this.filters,!a||!a.length)return this.sortedColumns();var b=this;return b.sortedColumns().filter(function(b){var c=b.currentHistory||_.every(a.map(function(a){return a.call(b)}));return c})},sortedColumns:function(){var a=this,b=this.collection.map(function(b){return a.columnMap[b.id]});return b},render:function(a){a=void 0!==a?a:this.fxSpeed;var b=this;return b.log(b+".render"),b.$el.html(b.mainTemplate(b)),b.renderColumns(a),b.setUpBehaviors(),b.trigger("rendered",b),b},renderColumns:function(a){a=void 0!==a?a:this.fxSpeed;var b=this,c=b.sortedFilteredColumns(),d=b.$(".middle").empty().width(b._calcMiddleWidth(c.length));return c.forEach(function(c){c.$el.appendTo(d),c.delegateEvents(),b.renderColumn(c,a)}),b.collection.allFetched||d.append(b.loadingIndicatorTemplate(b)),b.trigger("columns-rendered",c,b),b.datasetSearch&&c.length<=1||(b.checkColumnsInView(),b._recalcFirstColumnHeight()),c},_calcMiddleWidth:function(a){var b=16;return a*(this.options.columnWidth+this.options.columnGap)+this.options.columnGap+b},renderColumn:function(a,b){return b=void 0!==b?b:this.fxSpeed,a.render(b)},queueHdaFetch:function(a){if(0===a.model.contents.length&&!a.model.get("empty")){var b={},c=_.values(a.panel.storage.get("expandedIds")).join();c&&(b.dataset_details=c),this.hdaQueue.add({name:a.model.id,fn:function(){var c=a.model.contents.fetch({data:b,silent:!0});return c.done(function(){a.panel.renderItems()})}}),this.hdaQueue.running||this.hdaQueue.start()}},queueHdaFetchDetails:function(a){(0===a.model.contents.length&&!a.model.get("empty")||!a.model.contents.haveDetails())&&(this.hdaQueue.add({name:a.model.id,fn:function(){var b=a.model.contents.fetch({data:{details:"all"},silent:!0});return b.done(function(){a.panel.renderItems()})}}),this.hdaQueue.running||this.hdaQueue.start())},renderInfo:function(a){return this.$(".header .header-info").text(a)},events:{"click .done.btn":"close","click .create-new.btn":"create","click #include-deleted":"_clickToggleDeletedHistories","click .order .set-order":"_chooseOrder","click #toggle-deleted":"_clickToggleDeletedDatasets","click #toggle-hidden":"_clickToggleHiddenDatasets"},close:function(){var a="/";Galaxy&&Galaxy.options&&Galaxy.options.root?a=Galaxy.options.root:galaxy_config&&galaxy_config.root&&(a=galaxy_config.root),window.location=a},_clickToggleDeletedHistories:function(a){this.toggleDeletedHistories($(a.currentTarget).is(":checked")),this.toggleOptionsPopover()},toggleDeletedHistories:function(a){window.location=a?Galaxy.options.root+"history/view_multiple?include_deleted_histories=True":Galaxy.options.root+"history/view_multiple"},_clickToggleDeletedDatasets:function(a){this.toggleDeletedDatasets($(a.currentTarget).is(":checked")),this.toggleOptionsPopover()},toggleDeletedDatasets:function(a){a=void 0!==a?a:!1;var b=this;b.sortedFilteredColumns().forEach(function(b,c){_.delay(function(){b.panel.toggleShowDeleted(a,!1)},200*c)})},_clickToggleHiddenDatasets:function(a){this.toggleHiddenDatasets($(a.currentTarget).is(":checked")),this.toggleOptionsPopover()},toggleHiddenDatasets:function(a){a=void 0!==a?a:!1;var b=this;b.sortedFilteredColumns().forEach(function(b,c){_.delay(function(){b.panel.toggleShowHidden(a,!1)},200*c)})},_chooseOrder:function(a){var b=this,c=b.collection,d=$(a.currentTarget).data("order");b.$(".current-order").text(b.orderDescriptions[d]),b.toggleOptionsPopover(),c.setOrder(d),c.reset(c.slice(0,1),{silent:!0}),b.setCollection(c),c.fetch({limit:b.perPage}),b.once("columns-rendered",b._scrollLeft,this)},_scrollLeft:function(a){this.$(".outer-middle").scrollLeft(a||0)},setUpBehaviors:function(){var a=this;a._moreOptionsPopover(),a.$("#search-histories").searchInput({name:"search-histories",placeholder:_l("search histories"),onfirstsearch:function(){a.$("#search-histories").searchInput("toggle-loading"),a.renderInfo(_l("loading all histories for search")),a.collection.fetch().done(function(){a.$("#search-histories").searchInput("toggle-loading"),a.renderInfo("")})},onsearch:function(b){a.historySearch=b,a.filters=[function(){return this.model.matchesAll(a.historySearch)}],a.renderColumns(0)},onclear:function(){a.historySearch=null,a.filters=[],a.renderColumns(0)}}),a.$("#search-datasets").searchInput({name:"search-datasets",placeholder:_l("search all datasets"),onfirstsearch:function(b){a.hdaQueue.clear(),a.$("#search-datasets").searchInput("toggle-loading"),a.datasetSearch=b,a.sortedFilteredColumns().forEach(function(c){c.panel.searchItems(b),a.queueHdaFetchDetails(c)}),a.hdaQueue.progress(function(b){a.renderInfo([_l("searching"),b.curr+1,_l("of"),b.total].join(" "))}),a.hdaQueue.deferred.done(function(){a.renderInfo(""),a.$("#search-datasets").searchInput("toggle-loading")})},onsearch:function(b){a.datasetSearch=b,a.sortedFilteredColumns().forEach(function(a){a.panel.searchItems(b)})},onclear:function(){a.datasetSearch=null,a.sortedFilteredColumns().forEach(function(a){a.panel.clearSearch()})}}),$(window).resize(function(){a._recalcFirstColumnHeight()});var b=_.debounce(function(){var b=a._viewport();a.checkColumnsInView(b),a.checkForEndOfScroll(b)},100);this.$(".middle").parent().scroll(b)},_moreOptionsPopover:function(){return this.$(".open-more-options.btn").popover({container:".header",placement:"bottom",html:!0,content:$(this.optionsPopoverTemplate(this))})},toggleOptionsPopover:function(){this.$(".open-more-options.btn").popover("toggle")},_recalcFirstColumnHeight:function(){var a=this.$(".history-column").first(),b=this.$(".middle").height(),c=a.find(".panel-controls").height();a.height(b).find(".inner").height(b-c)},_viewport:function(){var a=this.$(".middle").parent(),b=a.offset().left,c=a.width();return{left:b,right:b+c}},columnsInView:function(a){var b=a||this._viewport();return this.sortedFilteredColumns().filter(function(a){return a.currentHistory||a.inView(b.left,b.right)})},checkColumnsInView:function(){this.columnsInView().forEach(function(a){a.trigger("in-view",a)})},checkForEndOfScroll:function(a){a=a||this._viewport();var b=16,c=this.$(".middle"),d=c.parent().scrollLeft()+a.right;d>=c.width()-b&&this.trigger("end-of-scroll")},currentColumnDropTargetOn:function(){var a=this.columnMap[this.collection.currentHistoryId];a&&(a.panel.dataDropped=function(){},a.panel.dropTargetOn())},currentColumnDropTargetOff:function(){var a=this.columnMap[this.collection.currentHistoryId];a&&(a.panel.dataDropped=b.HistoryPanelEdit.prototype.dataDrop,a.panel.dropTarget=!1,a.panel.$(".history-drop-target").remove())},toString:function(){return"MultiPanelColumns("+(this.columns?this.columns.length:0)+")"},mainTemplate:_.template(['<div class="header flex-column-container">','<div class="control-column control-column-left flex-column">','<button class="done btn btn-default" tabindex="1">',_l("Done"),"</button>",'<div id="search-histories" class="search-control"></div>','<div id="search-datasets" class="search-control"></div>','<a class="open-more-options btn btn-default" tabindex="3">','<span class="fa fa-ellipsis-h"></span>',"</a>","</div>",'<div class="control-column control-column-center flex-column">','<div class="header-info">',"</div>","</div>",'<div class="control-column control-column-right flex-column">','<button class="create-new btn btn-default" tabindex="4">',_l("Create new"),"</button> ","</div>","</div>",'<div class="outer-middle flex-row flex-row-container">','<div class="middle flex-column-container flex-row"></div>',"</div>",'<div class="footer flex-column-container"></div>'].join(""),{variable:"view"}),loadingIndicatorTemplate:_.template(['<div class="histories-loading-indicator">','<span class="fa fa-spin fa-spinner"></span>',_l("Loading histories"),"...","</div>"].join(""),{variable:"view"}),orderDescriptions:{update_time:_l("most recent first"),"update_time-asc":_l("least recent first"),name:_l("name, a to z"),"name-dsc":_l("name, z to a"),size:_l("size, large to small"),"size-asc":_l("size, small to large")},optionsPopoverTemplate:_.template(['<div class="more-options">','<div class="order btn-group">','<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">',_l("Order histories by")+" ",'<span class="current-order"><%= view.orderDescriptions[ view.collection.order ] %></span> ','<span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">',"<% _.each( view.orderDescriptions, function( text, order ){ %>",'<li><a href="javascript:void(0);" class="set-order" data-order="<%= order %>">',"<%= text %>","</a></li>","<% }); %>","</ul>","</div>",'<div class="checkbox"><label><input id="include-deleted" type="checkbox"','<%= view.collection.includeDeleted? " checked" : "" %>>',_l("Include deleted histories"),"</label></div>","<hr />",'<div class="checkbox"><label><input id="toggle-deleted" type="checkbox">',_l("Include deleted datasets"),"</label></div>",'<div class="checkbox"><label><input id="toggle-hidden" type="checkbox">',_l("Include hidden datasets"),"</label></div>","</div>"].join(""),{variable:"view"})});return{MultiPanelColumns:g}});
//# sourceMappingURL=../../../maps/mvc/history/multi-panel.js.map