console.log("your index.js file is loaded correctly");
$( "#Child4" ).click(function() {
	alert( "Make a one-time donation to Thundering Paws?" );
  });

$("#Button2").trigger("scroll",function() {
	console.log("You clicked this");
	  });