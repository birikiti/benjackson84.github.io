$.localScroll.hash({
	target: $('#content'), // could be a selector or a jQuery object too.
	queue:true,
	duration:1000,
	hash:true
});

$(document).ready(function(){
	$('.about-nav').on('click',function(event){
		$('.about-menu > li').removeClass('pure-menu-selected');
		$(".about-content").fadeOut("fast");
		$(this).parent('li').addClass('pure-menu-selected');
		$("#"+$(this).data('tab')+"-content").fadeIn();
		event.preventDefault();
	});
	$('.get-involved-nav').on('click',function(event){
		$('.get-involved-nav').removeClass('pure-button-active');
		$(".get-involved-content").fadeOut("fast");
		$(this).addClass('pure-button-active');
		$("#"+$(this).data('tab')+"-content").fadeIn();
		event.preventDefault();
	});
});