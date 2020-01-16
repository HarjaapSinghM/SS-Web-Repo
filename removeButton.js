$(function() {
    console.log("ready!");


    function sample() {
        var linksToGoogle = $('a[href="https://elfsight.com/google-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=google-reviews&utm_term=scrol.ca&utm_campaign=free-widget"]');
        console.log(linksToGoogle);
        linksToGoogle.css("display","none");
     };

     setTimeout(sample, 4000);

});