/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

(function( $ ) {

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

})(jQuery);


/****************************************************Share Post**************************************/
document.addEventListener("DOMContentLoaded", function(event) {

// Uses sharer.js
//  https://ellisonleao.github.io/sharer.js/#twitter
   var url = window.location.href;
   var title = document.title;
   var subject = "Contact Ocean Cool";
   var via = "bootstrapC";
   console.log( url );
   console.log( title );


//facebook
$('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
$('#share-fb-1').attr('data-url', url).attr('data-sharer', 'facebook');
$('#share-fb-2').attr('data-url', url).attr('data-sharer', 'facebook');
$('#share-fb-3').attr('data-url', url).attr('data-sharer', 'facebook');
//twitter
$('#share-tw').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
$('#share-tw-1').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
$('#share-tw-2').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
$('#share-tw-3').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
//linkedin
//linkedin
$('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
$('#share-li-1').attr('data-url', url).attr('data-sharer', 'linkedin');
$('#share-li-2').attr('data-url', url).attr('data-sharer', 'linkedin');
$('#share-li-3').attr('data-url', url).attr('data-sharer', 'linkedin');
// google plus
$('#share-gp').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
$('#share-gp-1').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
$('#share-gp-2').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
$('#share-gp-3').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
  // email
$('#share-em').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email').attr('data-to','oceancoolacservice@gmail.com');
$('#share-em-1').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email').attr('data-to','oceancoolacservice@gmail.com');
$('#share-em-2').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email').attr('data-to','oceancoolacservice@gmail.com');
$('#share-em-3').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email').attr('data-to','oceancoolacservice@gmail.com');
//Prevent basic click behavior
$( ".sharer button" ).click(function() {
  event.preventDefault();
});


});

$(function() {

	// Cache the Window object
	var $window = $(window);

	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

		}); // end window scroll
	});

});
