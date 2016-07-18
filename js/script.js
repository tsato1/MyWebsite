$(document).ready(function ($) {
    $(".mosaic-overlay").hover(function () {
    	$(this).css("background-color", "#111")
    });
    $('.mosaic-overlay').mouseenter(function() {
    	jQuery(this).find(".details").show();  
	});
    $('.figure').mosaic({
        animation: 'fade'
    });
});