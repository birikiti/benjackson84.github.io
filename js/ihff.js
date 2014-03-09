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
		var tab = $(this).data('tab');
		$('.about-content').each(function(){
			if($(this).data('content') == tab){
				$(this).fadeIn();
			}
		});
		event.preventDefault();
	});
	$('.get-involved-nav').on('click',function(event){
		$('.get-involved-menu > li').removeClass('pure-menu-selected');
		$(".get-involved-content").fadeOut("fast");
		$(this).parent('li').addClass('pure-menu-selected');
		var tab = $(this).data('tab');
		$('.get-involved-content').each(function(){
			if($(this).data('content') == tab){
				$(this).fadeIn();
			}
		});
		event.preventDefault();
	});
	$('.credits-nav').on('click',function(event){
		$('.credits-menu > li').removeClass('pure-menu-selected');
		$(".credits-content").fadeOut("fast");
		$(this).parent('li').addClass('pure-menu-selected');
		var tab = $(this).data('tab');
		$('.credits-content').each(function(){
			if($(this).data('content') == tab){
				$(this).fadeIn();
			}
		});
		event.preventDefault();
	});
	$('.programme-nav').on('click',function(event){
		$('.programme-menu > li').removeClass('pure-menu-selected');
		$(".programme-content").fadeOut("fast");
		$(this).parent('li').addClass('pure-menu-selected');
		var tab = $(this).data('tab');
		$('.programme-content').each(function(){
			if($(this).data('content') == tab){
				$(this).fadeIn();
			}
		});
		event.preventDefault();
	});
});