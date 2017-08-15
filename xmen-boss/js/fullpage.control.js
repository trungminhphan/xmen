 
 if(window.innerWidth > 1025){
	$(document).ready(function() {
		var video_element = document.getElementById('bg-video');
        video_element.innerHTML = '';
		var video = videojs('bg-video', {"techOrder": ["youtube"], "src": "https://www.youtube.com/embed/bv7JxDFwEsc"});
		$('#fullpage').fullpage({
			verticalCentered: true,
			anchors: ['product', 'video'],
			menu: '.c-icon-scrolldown',
			afterLoad: function(anchorLink, index) {				
				if (index == 1) {   				
					$(".s-section-slide").removeClass('active');
					$(".c-icon-scrolldown").fadeIn();
					video.pause();

				}
				if (index == 2) {
					$(".s-section-slide").removeClass('active');	
					$(".c-icon-scrolldown").fadeOut();	
					video.play();						
				}
			}			
		});

		$('#fullpage-product').fullpage({
			verticalCentered: true,
			anchors: ['DauGoiNuocHoa', 'SanPhamKhuMui','SuaTamNuocHoa','NuocHoa'],
			menu: '#menu-fullpage',
			afterLoad: function(anchorLink, index) {				
				// if (index == 1) {   				
				// 	$(".s-section-slide").removeClass('active');
				// }
				// if (index == 2) {
				// 	$(".s-section-slide").removeClass('active');									
				// }
			}			
		});
		
	});

}
if(window.innerWidth < 1025){
	$(".s-section-slide").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(document).ready(function() {
		var video = videojs('bg-video');
	});
	// var cb = function() {
	// 	var l = document.createElement('link'); l.rel = 'stylesheet';
	// 	l.href = 'css/loadgif.css';
	// 	var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	// };
	// var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
	// if (raf) raf(cb);
	// else window.addEventListener('load', cb);
}

$(".s-section-slide").hover(function(){
	$(".c-title-home").fadeOut(300);
	$(this).addClass('active').siblings().removeClass('active');
});

//  JS update for home Mobile

$(".f1").click(function(){
	$(this).addClass('active').delay(600).queue(function(){
		$(".f2").fadeIn().delay(300).queue(function(){
			$(this).addClass('curent');
		});
	});
	transition();
});

$(".column-m").click(function(){
	$(this).parent().fadeOut();
	$(this).delay(500).queue(function(){
		$(".f3").fadeIn();
	});
});
$(".column-m.c-fire").click(function(){
	$(this).closest(".section-h-mobile").find('.bg-c-fire').addClass('active');
	$(this).closest(".section-h-mobile").find('.column-m2.c-fire').addClass('active');
});
$(".column-m.c-water").click(function(){
	$(this).closest(".section-h-mobile").find('.bg-c-water').addClass('active');
	$(this).closest(".section-h-mobile").find('.column-m2.c-water').addClass('active');
});
$(".column-m.c-metal").click(function(){
	$(this).closest(".section-h-mobile").find('.bg-c-metal').addClass('active');
	$(this).closest(".section-h-mobile").find('.column-m2.c-metal').addClass('active');
});
$(".column-m.c-wood").click(function(){
	$(this).closest(".section-h-mobile").find('.bg-c-wood').addClass('active');
	$(this).closest(".section-h-mobile").find('.column-m2.c-wood').addClass('active');
});

$(".column-m2").click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).closest(".bl-mb.f3").find('.bg-c3').removeClass('active');
});

$(".column-m2.c-fire").click(function(){
	$(this).closest(".bl-mb.f3").find('.bg-c-fire').addClass('active');
});
$(".column-m2.c-water").click(function(){
	$(this).closest(".bl-mb.f3").find('.bg-c-water').addClass('active');
});
$(".column-m2.c-metal").click(function(){
	$(this).closest(".bl-mb.f3").find('.bg-c-metal').addClass('active');
});
$(".column-m2.c-wood").click(function(){
	$(this).closest(".bl-mb.f3").find('.bg-c-wood').addClass('active');
});

var timer, count=1;
function transition(){
    clearTimeout(timer);

    switch(count){
        case 1: 
        	$('.column-m.c-fire').addClass('active').siblings().removeClass('active');
        	count = 2; 
        	break;
        case 2:
        	$('.column-m.c-water').addClass('active').siblings().removeClass('active');
        	count = 3; 
        	break;
        case 3: 
        	$('.column-m.c-metal').addClass('active').siblings().removeClass('active');
        	count = 4; 
        	break;
        case 4: 
        	$('.column-m.c-wood').addClass('active').siblings().removeClass('active');
        	count = 1; 
        	break;
    }

    timer = setTimeout(transition, 1500);
}

// $(".animate-bottle").delay(1000).queue(function(){
// 	$(this).addClass('animated');
// });