// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".logo").addClass("logo-fixed");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo").removeClass("logo-fixed");
    }
    if ($(".navbar").offset().top > 400 && $(".navbar").offset().top < 2650 ) {
        $('.workTitle').addClass('show');
      }
      else {
        $('.workTitle').removeClass('show');
      }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// $(function(){
//   $(window).scroll(function(){
//     recheck();
//   });
  
//   $(window).resize(function(){
//      recheck();   
//   });
  
//   recheck();
// });

