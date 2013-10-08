define( function ( require ) {
	'use strict';

	var Backbone      = require( 'backbone' );
	var MenuItemModel = require( 'models/components/menu/MenuItemModel' );

	return Backbone.Collection.extend( {
		'model' : MenuItemModel
	} );
} );