$(function(){
	//googlemap
	function initialize() {
		var latlng = new google.maps.LatLng(43.063621,141.355319);
		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("googlemap"), myOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(43.062161,141.355555),
			map: map,
			title: "札幌市民ホール"
		});
	}
	initialize();

	//fixed glnav
	var nav = $("#glnav");
	var navTop = nav.offset().top;
	$(window).scroll(function () {
		if($(window).scrollTop() >= navTop) {
			nav.addClass("fixed");
			$("body").css("margin-top","40px");
		} else {
			nav.removeClass("fixed");
			$("body").css("margin-top","0px");
		}
	});

	//scroll
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position-100}, speed, 'swing');
		return false;
	});
});
