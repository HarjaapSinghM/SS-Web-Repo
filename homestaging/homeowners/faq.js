$(document).ready(function() {
    $("#faq-search").on("keyup", function() {
        let value = $(this)
        .val()
        .toLowerCase();
        $(".faq-box").filter(function() {
        $(this).toggle(
            $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
        });
    });
    $(".faq-box").click(function() {
        if (
        $(this)
            .find("p")
            .is("visibile")
        ) {
        $(this)
            .find("p")
            .slideToggle("fast")
            .toggleClass("faq-content");
        } else {
        $(this)
            .find("p")
            .slideToggle("fast")
            .toggleClass("faq-content");
        }
    });
    $("#faq-search").click(function() {
        $("html, body").animate(
        {
            scrollTop: $("#faq-search").offset().top -100
        },
        500
        );
    });
});
