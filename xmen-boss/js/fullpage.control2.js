$('.body').addClass('ovh');
 
//  if(window.innerWidth > 1025){
// 	$(document).ready(function() {
// 		var $if = $("#youtube"),
// 		    src = $if.attr("src");
// 		$('#fullpage-xit').fullpage({
// 			verticalCentered: true,
// 			anchors: ['product', 'video'],
// 			menu: '.c-icon-scrolldown',
// 			afterLoad: function(anchorLink, index) {				
// 				if (index == 1) {   				
// 					$(".s-section-slide").removeClass('active');
// 					$(".c-icon-scrolldown2").fadeIn();
// 					$if.attr("src",src);
// 					setTimeout(function() {
// 						$('.s-video-wrapper-v').addClass('show');
// 					}, 1000);

// 				}
// 				if (index == 2) {
// 					$(".s-section-slide").removeClass('active');	
// 					$(".c-icon-scrolldown2").fadeOut();
// 					$if.attr("src", src);
// 					$("#youtube")[0].src += "?autoplay=1";
							
// 				}
// 			}		
// 		});

// 	});

// }

if(window.innerWidth > 1025){
	$(document).ready(function() {
		// var video_element = document.getElementById('video-default');
		$('#fullpage-xit').fullpage({
			verticalCentered: true,
			anchors: ['product', 'video'],
			menu: '.c-icon-scrolldown',
			afterLoad: function(anchorLink, index) {				
				if (index == 1) {   				
					$(".s-section-slide").removeClass('active');
					$(".c-icon-scrolldown2").fadeIn();
					video.pause();
					setTimeout(function() {
						$('.s-video-wrapper-v').addClass('show');
					}, 1000);

				}
				if (index == 2) {
					$(".s-section-slide").removeClass('active');	
					$(".c-icon-scrolldown2").fadeOut();
					video.play();	
				}
			}		
		});

	});

}


// $('.video-list img').click(function () {
// 	var id = $(this).attr('data-link');
// 	var src = 'https://www.youtube.com/embed/'+id;
// 	$("#youtube").attr('src', src), setTimeout(function() {
// 		$("#youtube")[0].src += "?autoplay=1";
// 	}, 100);
// 	// return false;
// });

$('.video-list li').click(function () {
	var id = $(this).attr('data-link');
	var poster = $(this).attr('data-poster');
	var srcPoster = 'images/boss/'+poster;
	$(".vjs-poster").attr('style', 'background-image:url(' + srcPoster + ')');
	var src = 'video/'+id;
	$("#video-default video").attr('poster', srcPoster);
	$("#video-default video").attr('src', src), setTimeout(function() {
		video.play();
	}, 100);
	// alert(src);
	// return false;
});


$('.video-list li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});


$('.video-list .nv1').click(function(){
    $('.video-t .n1').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv2').click(function(){
    $('.video-t .n2').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv3').click(function(){
    $('.video-t .n3').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv4').click(function(){
    $('.video-t .n4').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv5').click(function(){
    $('.video-t .n5').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv6').click(function(){
    $('.video-t .n6').addClass('active').siblings().removeClass('active');
});
$('.video-list .nv7').click(function(){
    $('.video-t .n7').addClass('active').siblings().removeClass('active');
});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.c-icon-scrolldown3').fadeOut();
     }
    else
     {
      $('.c-icon-scrolldown3').fadeIn();
     }
 });

function removeHoverCSSRule() {
  if ('createTouch' in document) {
    try {
      var ignore = /:hover/;
      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!sheet.cssRules) {
          continue;
        }
        for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
          var rule = sheet.cssRules[j];
          if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
            sheet.deleteRule(j);
          }
        }
      }
    }
    catch(e) {
    }
  }
}
removeHoverCSSRule();
