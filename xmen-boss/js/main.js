(function ($) {
    "use strict";
    function setHeight() {
       $(".e-height-extend").css({'height':($(".e-height").height()+'px')}); 
    }
    setHeight();
    $(window).on("resize", function () {
       setHeight();
    });

    $('a.c-icon-scrolldown, a.view-v').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash),
	          offsetTop = 50;
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - offsetTop
	        }, 900);
	        return false;
	      }
	    }
	    
	});
	
}(jQuery));

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

function scaleResponsive() {
  if(window.innerHeight < 805){
      var hEle = 760;
  }
  else {
    var hEle = 680;
  }
  
  var wColumn = (hEle * window.innerHeight) / 1024 ;
  $(".c-column-man .u-visible-desktop").css({'height':(wColumn+'px')});
}
scaleResponsive();
$(window).on("resize", function () {
  scaleResponsive();
});

$("[data-toggle='dropdown']").addClass('disabled').parent().addClass('dropdown');

var figure = $(".s-column-product").hover( hoverVideo, hideVideo );
function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}
function hideVideo(e) {
    // $('video', this).get(0).pause();
}




// $("[data-toggle='dropdown']").hover(function() {
//   $(this).parent().addClass('dropdown').find('.mn-sub').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//   $(this).parent().removeClass('dropdown').find('.mn-sub').stop(true, true).delay(200).fadeOut(500);
// });