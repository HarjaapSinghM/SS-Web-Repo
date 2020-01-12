$( document ).ready(function() {
    console.log( "ready!" );

    $('.arrow').on("click", function() {
        $('.hider').toggle();
    });
});