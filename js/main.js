//first owl in indexPage
$('#firstOwlIndex').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: true,

    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//congress owl
$('#congreeOwl').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//last owl in indexPage

$('#lastOwlIndex').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed:true,

    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 6
        },
        1000: {
            items: 6
        }
    }
});

  //pre-loader
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#pre-loader').delay(650).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(750).css({ 'overflow': 'visible' });
  });
  
  
// start of nav transition
$(window).scroll(function () {
            if ($(window).scrollTop() > 100 ){
        
                $('.upperNav').css({"position" : "absolute", "top" : "-55555px"});
                $('.navbar-collapse .mainNav .textTrans').addClass('changeTextColor');                
        
      } else {
        
        $('.upperNav').css("position", "unset");
        $('.navbar-collapse .mainNav .textTrans').removeClass('changeTextColor')
      
    };  
});

//scroll-up in all pages
$(window).scroll(function(){
	if($(this).scrollTop() >= 200)
		$("#scrollupdiv").show();
	else 
		$("#scrollupdiv").hide();
});
$("#scrollupdiv").click(function(){
	$("html, body").animate({scrollTop: 0}, 800);

});

  