var main = function(){
	$('.container_1').hide().fadeIn(3000);
	$('.container_2').hide().fadeIn(5000);
	$('.menu').hide().fadeIn(5000);
	
	$('.facebook_link').mouseover(function(){
		$(this).animate({"width": 150, "height": 80});
	});
	$('.facebook_link').mouseout(function(){
		$(this).animate({"width": 100, "height": 40});
	});
	
	$('#contact_fb_img').mouseover(function(){
		$(this).animate({left: "-10"}, 300);
	});
	$('#contact_fb_img').mouseout(function(){
		$(this).animate({left: "+10"}, 300);
	});
	
	$('#contact_tw_img').mouseover(function(){
		$(this).animate({left: "+10"}, 300);
	});
	$('#contact_tw_img').mouseout(function(){
		$(this).animate({left: "-10"}, 300);
	});
};

$(document).ready(main);