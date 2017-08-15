var controller = new slidebars();
// Sidebar DOM
( function ( $ ) {
	// Create a new instance of Slidebars

	// Initialize Slidebars
	controller.init();

	// Left Slidebar controls
	$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
		$( this ).addClass( 'active' );
		$( '.s-navbar' ).toggleClass( 'hide-logo' );
		$( '.o-arrow' ).toggleClass( 'hide' );
		$( '.three-bars-icon' ).addClass( 'close' );
		event.stopPropagation();
		controller.toggle( 'slidebar-1' );

	} );

	// Close any
	$( controller.events ).on( 'opened', function () {
		$( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
		
	} );

	$( controller.events ).on( 'closed', function () {
		$( '.three-bars-icon' ).removeClass( 'close' );
		$( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
		
	} );

	$( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
		event.stopPropagation();
		controller.close();
		$( '.s-navbar' ).removeClass( 'hide-logo' );
	} );

} ) ( jQuery );

