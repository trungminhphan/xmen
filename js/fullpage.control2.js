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
			anchors: ['video','product'],
			menu: '.c-icon-scrolldown',
			afterLoad: function(anchorLink, index) {				
				if (index == 1) {   				
					$(".s-section-slide").removeClass('active');
					$(".c-icon-scrolldown2").fadeIn();
					video.pause();
					setTimeout(function() {
						$('.s-video-wrapper-v').addClass('show');
					}, 1000);$(".logo").show();
					$(".w-social").css({'left' : '320px'});
				}
				if (index == 2) {
					//$(".s-section-slide").removeClass('active');	
					//$(".c-icon-scrolldown2").fadeOut();
					//video.play();
					$(".s-section-slide").removeClass('active');
					$(".c-icon-scrolldown2").fadeIn();
					video.pause();
					setTimeout(function() {
						$('.s-video-wrapper-v').addClass('show');
					}, 1000);
					$(".logo").hide();
					$(".w-social").css({'left' : '10px'});
				}
			}		
		});

	});

}


var $wrapper = $(".s-container-xit");
$wrapper.on("mouseenter", "h3.o-title > span", function() {
  var e = $(this);
  e.addClass("animated"), setTimeout(function() {
      e.removeClass("animated")
  }, 750)
});

var $wrapper2 = $("#fullpage-xit");
$wrapper2.on("click", ".bl-ar-wood", function() {
	$(".bl-stage-left span,.bl-stage-right span").addClass("active");
	$(".bl-stage,.bl-stage-left,.bl-stage-right").addClass("active"), setTimeout(function() {
		$(".bl-ar-wood").removeClass("active"), setTimeout(function() {
			$(".s-xit-fire").removeClass("active");
			$(".s-xit-wood").addClass("active"), setTimeout(function() {
				$(".bl-stage").addClass("hide");
				$(".bl-ar-fire").addClass("active"), setTimeout(function() {
					$(".bl-stage").removeClass("active"), setTimeout(function() {
						$(".bl-stage-left span,.bl-stage-right span").removeClass("active");
						$(".bl-stage-left,.bl-stage-right").removeClass("active"), setTimeout(function() {
							$(".bl-stage").removeClass("hide");
						}, 800);
					}, 100);
				}, 750);
			}, 350);
		}, 900);
	}, 350);
});
$wrapper2.on("click", ".bl-ar-fire", function() {
	$(".bl-stage-left span,.bl-stage-right span").addClass("active");
	$(".bl-stage,.bl-stage-left,.bl-stage-right").addClass("active"), setTimeout(function() {
		$(".bl-ar-fire").removeClass("active"), setTimeout(function() {
			$(".s-xit-wood").removeClass("active");
			$(".s-xit-fire").addClass("active"), setTimeout(function() {
				$(".bl-stage").addClass("hide");
				$(".bl-ar-wood").addClass("active"), setTimeout(function() {
					$(".bl-stage").removeClass("active"), setTimeout(function() {
						$(".bl-stage-left span,.bl-stage-right span").removeClass("active");
						$(".bl-stage-left,.bl-stage-right").removeClass("active"), setTimeout(function() {
							$(".bl-stage").removeClass("hide");
						}, 800);
					}, 100);
				}, 750);
			}, 350);
		}, 900);
	}, 350);
});

function loopAr(){
	$(".cri-dot, .ar-right, .ar-left").addClass("active"), setTimeout(function() {
		$(".cri-dot, .ar-right, .ar-left").removeClass("active");
	}, 2000);
	x = setTimeout(function(){loopAr()}, 4000);
}
loopAr();

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
	var srcPoster = 'images/deo/'+poster;
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

// Scroll ID smooth
// if(window.innerWidth < 980){
// 	$('a.page-scroll').click(function() {
// 	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	      var target = $(this.hash);
// 	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 	      if (target.length) {
// 	        $('html,body').animate({
// 	          scrollTop: target.offset().top - 40
// 	        }, 900);
// 	        return false;
// 	      }
// 	    }
// 	});
// }

// $('window').scrollDown(function(){
// 	$('.c-icon-scrolldown3').hide();
// });
// $('window').scrollUp(function(){ 
// 	$('.c-icon-scrolldown3').show();
// });

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
