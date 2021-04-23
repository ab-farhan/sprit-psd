  $(function () {


  	// menu fix on scroll

  	$(window).on('scroll', function () {
  		if ($(window).scrollTop() > 200) {
  			$('.navbar').addClass('animated slideInDown fix');
  			$('.navbar').removeClass('py-50');
  		} else {
  			$('.navbar').addClass(' py-50 ');
  			$('.navbar').removeClass('animated slideInDown fix');

  		}
  	});


  	$('.carousel').carousel({
  		interval: 4000,
  		pause: false,
  	});

  	//owl-carosel slide team

  	$('.team_slide').owlCarousel({
  		loop: true,
  		margin: 15,
  		autoplay: true,
  		autoplayTimeout: 2000,
  		smartSpeed: 500,
  		dots: false,
  		navs: false,
  		responsive: {
  			0: {
  				items: 1
  			},
  			576: {
  				items: 2,
  				smartSpeed: 700,
  			},
  			800: {
  				items: 3
  			},
  			1000: {
  				items: 4
  			}
  		}
  	});

  	//	  slick slider client
  	$('.client-slider').slick({
  		dots: true,
  		infinite: true,
  		speed: 500,
  		arrows: false,
  		slidesToShow: 5,
  		slidesToScroll: 2,
  		autoplay: true,
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
  					slidesToShow: 3,
  					slidesToScroll: 2,
  					infinite: true,
  					dots: true
  				}
    },
  			{
  				breakpoint: 600,
  				settings: {
  					slidesToShow: 3,
  					slidesToScroll: 2,
  					speed: 700,
  				}
    },
  			{
  				breakpoint: 480,
  				settings: {
  					slidesToShow: 1,

  					slidesToScroll: 1,
  				}
    }
  ]
  	});


  	//	  slick slider testimonial 

  	$('.test_slider').slick({
  		dots: true,
  		infinite: true,
  		speed: 1000,
  		arrows: false,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplayTimeout: 1500,
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
  					slidesToShow: 1,
  					slidesToScroll: 1,
  					infinite: true,
  					dots: true
  				}
    },
  			{
  				breakpoint: 600,
  				settings: {
  					slidesToShow: 1,
  					slidesToScroll: 1
  				}
    },
  			{
  				breakpoint: 480,
  				settings: {
  					slidesToShow: 1,
  					slidesToScroll: 1,
  				}
    }
  ]
  	});

  	//isotop 

  	$('.protfolio_item').isotope({
  		itemSelector: '.work_item',
  		layoutMode: 'fitRows',
  	});

  	$('.work_menu ul li').click(function () {
  		$('.work_menu ul li').removeClass('active');
  		$(this).addClass('active');


  		var selector = $(this).attr('data-filter');
  		$('.protfolio_item').isotope({
  			filter: selector
  		});

  		return false;
  	});


  	//  	//navbar acitve class

  	$('.header_part .navbar-nav .nav-item').click(function () {
  		$('.header_part .navbar-nav .nav-item').removeClass('active');
  		$(this).addClass('active');
  	});




  	//back to top 

  	if ($('#back-to-top').length) {
  		var scrollTrigger = 300, // px
  			backToTop = function () {
  				var scrollTop = $(window).scrollTop();
  				if (scrollTop > scrollTrigger) {
  					$('#back-to-top').addClass('animated show slideInUp');

  				} else {
  					$('#back-to-top').removeClass('animated show slideInUp');

  				}
  			};
  		backToTop();
  		$(window).on('scroll', function () {
  			backToTop();
  		});
  		$('#back-to-top').on('click', function (e) {
  			e.preventDefault();
  			$('html,body').animate({
  				scrollTop: 0
  			}, 'show');
  		});
  	};



  });

  function openNav() {
  	document.getElementById('slide_nav').style.width = "100%";
  }

  function closeNav() {
  	document.getElementById('slide_nav').style.width = "0";
  }
