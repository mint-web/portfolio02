/*
     * slick 플러그인사용
     * Bootstrap 내장 carousel기능을 사용할려했지만 스크린 너비에 맞춰 슬라이드 갯수 조절이 불가능하므로 비사용
*/
$(function() {
  $('#mainCarousel').slick({
      dots: true,
      arrows: true,
      infinite: true,
      autospeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    $('#promotionCarousel').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000, // default: 3000
        speed: 400, // default: 300
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true
      });
    // 컨텐츠 내비게이션 메뉴: 마우스오버에서 드랍다운 메뉴 꺼냄
    $(".content-nav .dropdown").hover(function() {
        $(this).children(".dropdown-menu").stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).children(".dropdown-menu").stop(true, true).delay(100).fadeOut(300);
    });
});
