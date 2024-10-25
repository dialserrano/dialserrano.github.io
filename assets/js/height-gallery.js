$(window).on( 'resize', function () {
    $('.gallery .imagenes li').height( $(this).width() / 2 );
}).resize();