$( '.topnav a' ).click(function(e) {
    $( '.topnav' ).find( 'a.active' ).removeClass( 'active' );
    console.log("GG")
    $( this ).addClass( 'active' );
});