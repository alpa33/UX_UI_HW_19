console.log("your index.js file is loaded correctly");
$("#Button2").click(function() {
    $('html, body').animate({
        scrollTop: $(".foster").offset().top
    }, 2000);
});