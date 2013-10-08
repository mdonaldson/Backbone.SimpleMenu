// ## basic item views for menu components (e.g. SimpleMenu )

// triggers it's `click a` as a `click` viewEvent

define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );

	var template   = require( 'text!templates/components/menu/menuItem.html' );

	return Marionette.ItemView.extend( {
		'template'  : _.template( template ),
		'tagName'   : 'li',

		'triggers'  : {
			'click a' : 'click'
		}
	} );

} );
