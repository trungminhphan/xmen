$('.s-quiz .o-button').click(function(){
    $(this).closest('.s-quiz').fadeOut().next().delay(500).fadeIn();    
});

$('.s-quiz .a-click').click(function(){
	$(this).css({ opacity: 1});
	$(this).addClass('active');
	$(this).closest('.s-quiz').delay(1000).fadeOut().next().delay(800).fadeIn();      
    $(this).siblings().css({ opacity: 0.5 });
});

$('.c-icon-facebook2, .c-icon-instagram2').click(function(){
	$('.backdrop-modal, .c-modal-upload').fadeIn();
});

// $('.c-discover').click(function(){
// 	$('.backdrop-modal, .c-modal-upload').fadeIn();
// });

$('.c-icon-close').click(function(){
	$('.backdrop-modal, .c-modal-upload').fadeOut();
});

$('.bl-upload').click(function(){
    $(this).fadeOut();
    $(".bl-avatar").removeClass("u-invisible");
	$(".g-icon").removeClass("u-disable");
	$(".c-icon-add, .c-icon-download, .c-icon-share").addClass("visible");
});
