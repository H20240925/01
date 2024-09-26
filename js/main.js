$(function () {
  $(".achivement").click(function (e) {
    e.preventDefault();
    $(".popup").stop().animate(
      {
        right: "10%",
      },
      800
    );
  });
  $(".close").click(function () {
    $(".popup").stop().animate(
      {
        right: "-100%",
      },
      800
    );
  });

  $(".mid .file").click(function () {
    $(".mid .file").removeClass("on");
    $(this).animate(
      {
        width: "150px",
        height: "150px",
      },
      1
    );
    $(".bottom .file").removeClass("bb");
    $(".bottom .file p").hide();
    $(".mid .file span").css({
      display: "none",
    });
    $(this).addClass("on").find("span").css({
      display: "block",
    });
    $(this).addClass("on").find("p").css({ 
      display: "block", 
    });
    $(this).siblings().animate({
      width: "140px",
      height: "140px",
    });

    $(".home button").click(function () {
      $(".mid .file").removeClass("on");
      $(".mid .file span").hide();
      $(".bottom .file").removeClass("bb");
      $(".bottom .file p").hide();
      $(".wrap").css("background-image", "url('images/space.jpg')");
      $(".mid .file").animate({
        width: "150px",
        height: "150px",
      });
    });
  });

  let mBg = [
    "images/bg/bg-1.png",
    "images/bg/bg-2.png",
    "images/bg/bg-3.png",
    "images/bg/bg-4.png",
    "images/bg/bg-5.png",
    "images/bg/bg-6.png",
    "images/bg/bg-7.png",
    "images/bg/bg-8.png",
    "images/bg/bg-9.png",
  ];

  $(".mid .file").click(function () {
    let idx = $(this).index();

    $(".wrap").css({
      "background-image": `url(${mBg[idx]})`,
    });
  });

  let bBg = [
    "images/bg/bg-1.png",
    "images/bg/bg-2.png",
    "images/bg/bg-3.png",
    "images/bg/bg-4.png",
  ];

  $(".bottom >*").click(function () {
    // 창의 너비가 1440px 이상일 때만 작동
    if (window.innerWidth > 1440) {
      let idx = $(this).index();

      $(".wrap").css({
        "background-image": `url(${bBg[idx]})`,
      });
    }
  });

  // $('.full-screen button').click(function () {
  //     document.documentElement.requestFullscreen();

  //     // if (document.documentElement.requestFullscreen) {
  //     //     $('main').css({
  //     //         'top': '570px'
  //     //     })
  //     // } else {
  //     //     console.log('겨레바보')
  //     //     $('main').css({
  //     //         'top': '470px'
  //     //     })
  //     // }
  // });
  $(".full-screen button").click(function () {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  $(".achieve button").click(function () {});

  $(".bottom .file").click(function () {
    $(".bottom .file").removeClass("bb");
    $(this).addClass("bb");
    $(".bottom .file p").css({
      display: "none",
    });

    $(".mid .file").removeClass("on");
    $(".mid .file span").css({
      display: "none",
    });

    if ($(window).width() > 430) {
      $(this).addClass("bb").find("p").css({
        display: "block",
      });
    }

    $(".mid .file").animate({
      width: "140px",
      height: "140px",
    });
  });

  $(function () {
    new Swiper(".main_news .swiper-container", {
      slidesPerView: 3, // 기본 슬라이드 개수
      centeredSlides: true, // 슬라이드를 중앙에 정렬
      loop: true, // 슬라이드 무한 반복
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 100,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5, // 마우스 휠 민감도 조절
      },
      breakpoints: {
        // 1440px 이상일 때 설정
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 30, // 슬라이드 간의 간격
        },
        // 1024px 이상일 때 설정
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // 768px 이상일 때 설정
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // 425px 이상일 때 설정
        425: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        // 0px 이상일 때 설정 (모바일 디바이스)
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
      on: {
        // 창 크기 변경 시 Swiper 재초기화
        resize: function () {
          this.update();
        },
      },
    });
  });

  // var swiper = new Swiper(".hgr", {
  //   slidesPerView: 5,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     1024: { slidesPerView: 3.5 },
  //     768: { slidesPerView: 2 },
  //     0: { slidesPerView: 1.5 },
  //   },
  // });
});
