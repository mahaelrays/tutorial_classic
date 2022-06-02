/*global $, alert, console*/

$(function(){
	'use strict';
	
	//Add Scrolled class to navbar
	$(window).scroll(function(){
		var navbar = $('.navbar .nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled');
			}			
		}else{
			navbar.removeClass('scrolled');
		}
	});
	//Adjust Header Height
	var MyHeader = $('.header'),
	MySlider = $('.bxslider');
	
	MyHeader.height($(window).height());
	
	$(window).resize(function(){
		MyHeader.height($(window).height());
		MySlider.each(function(){
			$(this).css('paddingTop',($(window).height() - $('.bxslider li').height() )/2);
		});
	});

	// Add Active class to Links
	$('.links li a').click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	
	// Call Bx Slider
	MySlider.bxSlider({
		onSliderLoad: function(){ 
		$(".bxslider ").css("visibility", "visible");}	
	});

	
	// Make bx slider List in Middle
	MySlider.each(function(){
		$(this).css('paddingTop',($(window).height() - $('.bxslider li').height() )/2);
	});
	
	// Make Smooth Scroll to Div
	$('.links li a').click(function() {
		$('html,body').animate({
			scrollTop : $('#' + $(this).data('value')).offset().top
		},2000);
	});
	
	// Our Auto Slider Code
	$(function autoSlider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoSlider();
				});
			}else{
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active");
					$('.slider div').eq(0).addClass("active").fadeIn();
					autoSlider();
				});
			}
			
			
		});
	}());
	
	// Tigger mixitUp
	$("#Container").mixItUp();
	
	// Adjust MixitUp Links
	$(".shuffle li").click(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	
	// Show NavBar
	$("#show-nav").click(function() {
		
		$(".links").slideToggle(0,function(){
			$(".links li ").css({
				"display" :"block",
				
			});

			$(".links ").css({
				"background": "rgba(255, 255, 255, 0.1)",
				

				
			});
			
		});
		
	});
	
	//Trigger Nice Scroll
	 $("body").niceScroll({
		cursorcolor: "#1ABC9C",
		cursorwidth: "8px", // cursor width in pixel (you can also write "5px") 
		cursorborder: "1px solid #1ABC9C",
		cursorborderradius : 0
	 });
	
});

