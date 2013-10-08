// ## View for the SimpleMenu component
// uses a MenuItemView

define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );

	var template     = require( 'text!templates/components/menu/simpleMenu.html' );
	var MenuItemView = require( 'views/components/menu/MenuItemView' );

	return Marionette.CompositeView.extend( {
		'template'          : _.template( template ),
		'tagName'           : 'div',
		'className'         : 'navbar',
		'itemViewContainer' : '.nav',
		'itemView'          : MenuItemView
	} );

} );
