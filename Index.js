$(document).ready(function () {
	$("#galbutton").click(function () {
		var overlay = "<div class='gal-overlay' style='z-index:1000; border: 2px solid black;'>";
            overlay += "<div class='gal-overlay-inner'>";
            overlay += "</div>";
            overlay += "</div>";
            $("body").append(overlay);
            
    });
	
});