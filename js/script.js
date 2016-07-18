$(document).ready(function ($) {
    $(".mosaic-overlay").hover(
    	function () {
    		$(this).css("background-color", "#111")
    	}, 
        function () {
        	$(this).css("color", "#fff")
        },
        function () {
        	$(".details").details.css("display", "block")
        }
    );
    $('.figure').mosaic({
        animation: 'fade'
    });
});