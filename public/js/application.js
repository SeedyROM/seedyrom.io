console.clear();

debug = false;

$loadingScreen = $(".loading-screen");
$cdSpinner = $(".cd-spinner");
$progressBar = $(".progress-bar");
$content = $(".content");
$locationLink = $(".bio .location");

if(debug) $loadingScreen.addClass("loaded");

$cdSpinner.css({
	marginLeft: $cdSpinner.width()/-2+"px",
    marginTop: $cdSpinner.height()/-2+"px"
});
$cdSpinner.velocity({
	rotateZ: "+=360",
}, {
    duration: 600,
    easing: "linear",
    loop: true
});
$progressBar.velocity({
	width: "100%",
    backgroundColor: "#F5F5F5"
}, {
	duration: 1000,
    easing: "ease",
    complete: function() {
    	$loadingScreen.velocity({
        	opacity: "0",
        }, {
        	duration: 300,
            easing: "ease",
            complete: function() {
            	$loadingScreen.addClass("loaded");
                $content.velocity({
                    opacity: 1,
                }, {
                	duration: 400,
                    easeing: "ease"
                });
            },
        });
    },
});
$locationLink.on("click", function() {
	var currentLocation = "https://www.google.com/search?q="+ escape($.trim($(this).text()));
    location.href = currentLocation;
});
$(document).ready(function(){
 $("a[@href^='http']").attr('target','_blank');
}); 
