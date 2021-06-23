console.log("your index.js file is loaded correctly");

$("#Button2").click(function(){            
    $('html, body').animate({
            scrollTop: $("#Hero").offset().top
        }, 500);
});