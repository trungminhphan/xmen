(function ($) {

	// number of loaded images for preloader progress 
	var loadedCount = 0; //current number of images loaded
	var imagesToLoad = $('.bg-img').length; //number of slides with .bg-img container
	var loadingProgress = 0; //timeline progress - starts at 0

	$('.bg-img').imagesLoaded({
	    background: true
	  }
	).progress( function( instance, image ) {
		loadProgress();
	});

	function loadProgress(imgLoad, image)
	{
	 	//one more image has been loaded
		loadedCount++;

		loadingProgress = (loadedCount/imagesToLoad);

		//console.log(loadingProgress);

		// GSAP timeline for our progress bar
		TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});

	}

	//progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
	var progressTl = new TimelineMax({paused:true,onUpdate:progressUpdate,onComplete:loadComplete});

	progressTl
		//tween the progress bar width
		.to($('.progress span'), 1, {width:100, ease:Linear.easeNone});

	//as the progress bar witdh updates and grows we put the precentage loaded in the screen
	function progressUpdate()
	{
		//the percentage loaded based on the tween's progress
		loadingProgress = Math.round(progressTl.progress() * 100);
		//we put the percentage in the screen
		$(".txt-perc").text(loadingProgress + '%');

	}

	function loadComplete() {

		// preloader out
		var preloaderOutTl = new TimelineMax();

		preloaderOutTl
			.to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
			.to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
			.set($('body'), {className: '-=is-loading'})
			.set($('#intro'), {className: '+=is-loaded'})
			.to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
			.set($('#preloader'), {className: '+=is-hidden'})
			.from($('#intro .title'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
			.from($('#intro p'), 0.7, {autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
			.from($('.scroll-hint'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');

		return preloaderOutTl;
	}

}(jQuery));