console.log("your index.js file is loaded correctly");

$("#Button2").click(function(){

    var mainOffset = $("#Hero").offset().top;


        if ( $(document).scrollTop() > mainOffset ) {
                $(document).scrollTop( $("#Child4").offset().top );

        }
        else{

        }


});