(function($) {
  'use strict';

  /**
   * Is mobile
   */
   var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};

  /**
   * // slideSlick
   */
   function slideSlick() {
    $('.js-brand').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

    $('.js-brand-horizontal').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

    $('.js-brand-horizontal-2').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });


    $('.js-new-arrivals').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 2500,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

    $('.js-br-new').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
      ]
    });

    $('.js-br-new2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

    $('.js-banner-poster').slick({
      fade: true,
      dots: false,
      arrows: true,
      adaptiveHeight: true
    });

    $('.js-slide-banner, .js-slide-banner-full-1').slick({
      dots: true,
      infinite: false,
      arrows: true,
      adaptiveHeight: true
    });

    $('.js-slide-banner-full, .js-slide-banner-1').slick({
      dots: false,
      infinite: false,
      arrows: true,
      adaptiveHeight: true,
    });

    $('.js-testimonial').slick({
      infinite: true,
      dots: true,
      arrows: false,
    });

    $('.js-testimonial-card').slick({
      infinite: true,
      dots: true,
      arrows: false,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
      ]
    });

    $('.js-entry-gallery').slick({
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000
    });

    $('.js-br-card-slide').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000
    });

    $('.br-lookbook .js-br-lookbook__gallery').slick({
      dots: false,
      arrows: true
    });

    $('.js-br-team').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

    $('.js-post-mini').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
      ]
    });

    $('.js-portfolio-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      },
      ]
    });

    $('.br-lookbook.br-lookbook--moderm .js-br-lookbook__gallery-moderm-1').slick({
      dots: false,
      arrows: true,
      prevArrow: '.br-lookbook.br-lookbook--moderm .slick-prev-1',
      nextArrow: '.br-lookbook.br-lookbook--moderm .slick-next-1',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      }
      ]
    });

    $('.br-lookbook.br-lookbook--moderm .js-br-lookbook__gallery-moderm-2').slick({
      dots: false,
      arrows: true,
      prevArrow: '.br-lookbook.br-lookbook--moderm .slick-prev-2',
      nextArrow: '.br-lookbook.br-lookbook--moderm .slick-next-2',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      }
      ]
    });

    $('.br-lookbook.br-lookbook--moderm .js-br-lookbook__gallery-moderm-3').slick({
      dots: false,
      arrows: true,
      prevArrow: '.br-lookbook.br-lookbook--moderm .slick-prev-3',
      nextArrow: '.br-lookbook.br-lookbook--moderm .slick-next-3',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      }
      ]
    });

    $('.br-lookbook.br-lookbook--moderm .js-br-lookbook__gallery-moderm-4').slick({
      dots: false,
      arrows: true,
      prevArrow: '.br-lookbook.br-lookbook--moderm .slick-prev-4',
      nextArrow: '.br-lookbook.br-lookbook--moderm .slick-next-4',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      }
      ]
    });

    /* sync Horizontal */
    $('.br-product-slide-horizontal .js-br-product-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      asNavFor: '.br-product-slide-horizontal .js-br-product-nav',
      responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
      }
      ]
    });

    $('.br-product-slide-horizontal .js-br-product-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.br-product-slide-horizontal .js-br-product-image',
      arrows: true,
      dots: false,
      infinite: false,
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      ]
    });

    /* sync vertical */
    syncVerticalInit();
  }

  function syncVerticalInit() {
    var mainCarousel = '.br-product-slide-vertical .js-br-product-image';
    var thumbCarousel = '.br-product-slide-vertical .js-br-product-nav';

    $(mainCarousel).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      asNavFor: thumbCarousel,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
      }
      ]
    });

    $(thumbCarousel).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: mainCarousel,
      arrows: true,
      dots: false,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      ]
    });
  }

  function slickSyncPopupInit() {
    var $mainCarousel = $('.br-product-popup .js-br-product-image');
    var $thumbCarousel = $('.br-product-popup .js-br-product-nav');

    $mainCarousel.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      asNavFor: $thumbCarousel,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
      }
      ]
    });

    $thumbCarousel.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: $mainCarousel,
      arrows: true,
      dots: false,
      infinite: false,
      vertical: true,
      verticalSwiping: false,
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      ]
    });
  }

  /**
   * // custom select
   */
   function customSelect() {
    $('select').select2({
     minimumResultsForSearch: Infinity
   });
  }

  /**
   * // jquery ui spinner
   */
   function spinerInit() {
    $('input[type="number"]').spinner({
      min: 0,
      step: 1,
      numberFormat: "C"
    });
  }

  /**
   * // sliderRange
   */
   function sliderRange() {
    $( "#price-slider" ).slider({
      values: [50, 350],
      min: 10,
      max: 500,
      step: 10,
      range: true,
      slide: function(e, ui) {
        $('#amount').text('$'+ui.values[0]);
        $('.widget_product_prices_filter span.destination:not(#amount)').text('$'+ui.values[1]);
      }
    });
  }

  /**
   * countdown
   */
   function countdown() {
    $('.br-countdown').countdown('2025/10/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span><strong>%d</strong> <br> days</span> '
        + '<span><strong>%H</strong> <br> hours</span> '
        + '<span><strong>%M</strong> <br> minutes</span> '
        + '<span><strong>%S</strong> <br> seconds</span>'));
    });
  }

  /**
   * masonry
   */
   function masonryCard() {
    var $grid = $('.br-card-wrapper').imagesLoaded( function() {
      $grid.masonry({
        itemSelector: '.br-card',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 0
      });
    });

    var $testimonial = $('.js-masonry-testimonial').imagesLoaded( function() {
      $testimonial.masonry({
        itemSelector: '.col-md-4',
        percentPosition: true,
        columnWidth: '.col-md-4',
        gutter: 0
      });
    });
  }

  /**
   * Popup
   */
   function magnificPopup() {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

    $('.js-product-popup').magnificPopup({
      type: 'ajax',
      removalDelay: 200,
      mainClass: 'mfp-zoom-in',
      callbacks: {
        ajaxContentAdded: function() {
          spinerInit();
          slickSyncPopupInit();

          var $imageFirst = $('.mfp-content .br-product-nav__item:first img');
          if ($imageFirst.prop('complete')) { // check cache for fixfox browser
            $(window).trigger('resize');
          } else {
            $imageFirst.on('load', function() {
              $(window).trigger('resize');
            });
          }

        }
      }
    });

    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }

    });
  }

  /**
   * map
   */
   function mapInit(id) {
    if (! window.GMaps || ! $(id).length) {
      return;
    }

    var $el = $(id);
    var mapMarker = [];
    var mapSettings = $.extend({
      el: id,

      zoom: 14,
      lat: 21.0227358,
      lng: 105.8194541,

      zoomControl: true,
      scrollwheel: false,
    }, $el.data());

    // ...
    $el.children('[data-map="marker"]').each(function() {
      var $market = $(this);
      var htmlContent = $market.html();

      var markerSettings = $.extend({
        lat: mapSettings.lat,
        lng: mapSettings.lng,
      }, $market.data());

      if (htmlContent) {
        markerSettings.infoWindow = { content: htmlContent };
      }

      markerSettings.map = undefined;
      mapMarker.push(markerSettings);
    });

    // Fireup Map
    var map = new GMaps(mapSettings);

    // Add style
    map.addStyle({
      mapTypeId: 'gray',
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });

    if (mapSettings.style) {
      map.setStyle(mapSettings.style);
    }

    $.each(mapMarker, function(index, market) {
      map.addMarker(market);
    });

    return map;
  }
  window.plaseSetGmap = function(id) { return mapInit(id) };

  $(function() {
    // Init bootstrap plugins.
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $(' .js-br-card-hover > .br-card > .br-card__media > .br-card__thumb, .js-br-card-hover > .filtering__container > .br-card > .br-card__media > .br-card__thumb ').each( function() { $(this).hoverdir(); } );

    $('.br-promotion .close').on('click', function() {
      $('.br-promotion').addClass('br-promotion--close');
    });

    $('.awemenu-nav').aweMenu({
      trigger: 'hover',
      style: 'awemenu-default',
      position: 'standard',
      hoverDelay: 0,

      sticky: true,
      stickyOffset: 0,
      stickyWhenScrollUp: false,

      enableAnimation: false,
      defaultDesktopAnimation: 'fadeup',
      defaultDesktopAnimationDuration: 300,

      mobileTrigger: 'click',
      mobileType: 'outleft',
      mobileAnimationDuration: 200,

      responsiveWidth: 1200,
      customMenuBar: '<span><i class="fa fa-bars" aria-hidden="true"></i></span>',
      customCloseButton: false,
      dropdownDecor: false,
      showArrow: true,
      showMobileArrow: true,
      arrows: { up: 'fa fa-caret-up', down: 'fa fa-caret-down', left: 'fa fa-caret-left', right: 'fa fa-caret-right', mobileClose: 'fa fa-times' }
    });

    $(".br-commingsoon__main > h1").fitText();

    /**
     * isotope
     */
     $('.filtering__container').each(function() {
      var el = $(this);
      var filtering__container = el,
      filters = $('.filters');
      filters.on('click', 'a', function() {
        var selector = $(this).attr('data-filter');
        $('.current', filters).removeClass('current');
        $(this).addClass('current');
        filtering__container.isotope({
          filter: selector
        });
        return false;
      });

      $(window).on('resize', function() {

        filtering__container.imagesLoaded(function() {
          filtering__container.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.br-card',
            transitionDuration: '0.5s',
          });
        });

      }).resize();

      filters.find('.current').trigger('click');
    });

     $('#toggle-br-filter, .dropdown-cart, .dropdown-wishlist').on({
      "click":function(e){
        e.stopPropagation();
      }
    });

     $( ".js-imgtobg" ).each(function() {
      var getImageSrc = $(this).find('img').attr('src');

      if (typeof getImageSrc !== typeof undefined && getImageSrc !== false) {
        $(this).css({
          backgroundImage: 'url(' + getImageSrc + ')',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        });
      }
    });


     var $instagramSlick = $('.js-br-card-instagram-mobile');
     var detectViewPort = function() {
      var viewPortWidth = $(window).width();
      if (viewPortWidth < 768) {
        if (! $instagramSlick.hasClass('slick-initialized')) {
          $('.js-br-card-instagram-mobile').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
            ]
          });
        }
      } else {
        if ($instagramSlick.hasClass('slick-initialized')) {
          $('.js-br-card-instagram-mobile').slick('destroy');
        }
      }
    };

    detectViewPort();
    $(window).resize(function () {
     detectViewPort();
   });

    setTimeout(function(){
      $('body').addClass('loaded');
    }, 2000);


    // Call functions here.
    spinerInit();
    sliderRange();
    slideSlick();

    customSelect();
    countdown();

    magnificPopup();
    masonryCard();
  });

})(jQuery);
