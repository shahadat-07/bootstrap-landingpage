/* ------------------------
Author: Md Shahadat Hossen
Gitub:
Facebook:
---------------------------*/



$(document).ready(function(){
	
	/*--- =========== Owl Carousel ========== */
	  $("#our-clients").owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				nav:true
			},
			576:{
				items:3,
				nav:true
			},
			768:{
				items:4,
				nav:true
			},
			992:{
				items:6,
				nav:false
			}
		}
	  });
	 /*--- =========== Counter JS =========== */
		$('.counter').counterUp({
		delay: 20,
		time: 2500
		});
 /*--- =========== Carousel JS =========== */
		$('.carousel').carousel({
		  interval: 3000
		});
	/*-- ================= Upper Button Scroll Start============= --*/
		$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
		});
		$('#upper').click(function(){
			$('html').animate({scrollTop: 0},1500);
		});
	

});
	


