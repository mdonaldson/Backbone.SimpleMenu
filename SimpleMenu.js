// ## Reusable menu component

// displays an array of menu items horizontally in a bootstrap navbar

// ## usage:
// `var menu = new SimpleMenu( { 'collection' : [ { 'label' : 'menu item 1', 'url' : '#users', 'target' : '_self' } ] } );`
// `region.show( menu.view );`

// ## events
// * simpleMenu:item:select
// ** dispatched when a menu item is clicked
// ** args = data (Object), model (MenuItemModel), index (Number)

define( function ( require ) {
	'use strict';

	var _                  = require( 'underscore' );
	var Marionette         = require( 'marionette' );

	var SimpleMenuView     = require( './SimpleMenuView' );
	var MenuItemCollection = require( './MenuItemCollection' );
	var MenuItemModel      = require( './MenuItemModel' );

	return Marionette.Controller.extend( {
		// SimpleMenuView
		'view' : undefined,

		// MenuItemCollection
		'collection' : undefined,

		// safe redundant method to retrieve the component's view
		'getView' : function () {
			return this.view;
		},

		// options takes a collection
		// options.collection should be an array of pojos, NOT models
		// the objects will be passed to a MenuItemCollection and converted to MenuItemModels
		// the objects should define a `label`, `url`, and `target`
		// * label  = the string to be displayed
		// * url    = the relative or absolute path to load when the menu item is selected
		// * target = the target window that the url should be loaded into
		// ( url and target may be overridden programmatically but should still exist to allow middle-click )
		'initialize' : function ( options ) {
			var self = this;

			if ( options.collection ) {
				if ( _.isArray( options.collection ) ) {
					this.collection =  new MenuItemCollection( options.collection );
				} else {
					this.collection = new MenuItemCollection();
				}
			} else {
				this.collection = new MenuItemCollection();
			}

			this.view = new SimpleMenuView( { 'collection' : this.collection } );

			this.view.on( 'close', function () {
				self.close();
			} );

			this.view.on( 'itemview:click', function ( args ) {
				var model = args.model;
				var data = model.toJSON();
				var index = model.collection.indexOf( model );

				self.trigger( 'simpleMenu:item:select', data, model, index );
			} );

			return this;
		},

		// closes the view and resets the collection
		'close' : function () {
			if ( this.view ) {
				this.view.close();
			}
			if ( this.collection ) {
				this.collection.reset();
			}

			return this;
		}
	} );
} );