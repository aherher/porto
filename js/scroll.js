// 현재 완성


$(window).on('load', function () {
  $("main > .section").first().addClass("active");
  $(".quickNav > li").first().addClass("on");
  const sec_eqs = $("main > .section").length;
  let s = 1;

  $("html, body").animate({
    scrollTop: 0
  }, 20);


  //스크롤 자동이동
  $("main > .section").each(function () {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      if (e.originalEvent.wheelDelta >= 0 && $(window).width() > 1200) { // 스크롤 업
        if (s == 0) {
          e.preventDefault();
        } else if (s == 1) {
          s = 0;

          if ($("main .active").index() != 0) {
            $(".header").addClass("hide");
          }

          $(".active").prev(".section").addClass("active");
          $(".active").next(".section").removeClass("active")
          $(".active").next(".section").addClass("scale");
          let act_eq = $("main .active").index();

          $(".quickNav > .on").removeClass("on");
          $(".quickNav > li").eq(act_eq).addClass("on");

          let active = $("main > .active").offset().top;
          $("html, body").animate({
            scrollTop: active
          }, 800, function () {
            s = 1;
            $(".scale").removeClass("scale");
            $(".header").removeClass("hide");
          });
          e.preventDefault();
        };
      } else if ($(window).width() > 1200) { // 스크롤 다운

        if (s == 0) {
          e.preventDefault();
        } else if (s == 1) {
          s = 0;

          if ($("main .active").index() + 1 < sec_eqs) {
            $(".header").addClass("hide");
          }

          $(".active").next(".section").addClass("active");
          $(".active").prev(".section").removeClass("active");
          $(".active").prev(".section").addClass("scale");

          let act_eq = $("main .active").index();
          if (act_eq <= sec_eqs) {
            $(".quickNav > .on").removeClass("on");
            $(".quickNav > li").eq(act_eq).addClass("on");
          };
          let active = $("main > .active").offset().top;
          $("html, body").animate({
            scrollTop: active
          }, 800, function () {
            s = 1;
            $(".scale").removeClass("scale");
            $(".header").removeClass("hide");
          });
          e.preventDefault();
        };
      }
    });
  });

});

$(".quickNav li").click(function () {
  $(".quickNav li").removeClass("on");
  $(this).addClass("on");
  let navIndex = $(this).index();
  let selectSection = $("main > .section").eq(navIndex);
  let sectionTop = $(selectSection).offset().top;
  $(".active").removeClass("active").addClass("scale");
  $(selectSection).addClass("active");

  s = 0;
  $("html, body").animate({
    scrollTop: sectionTop
  }, 800, function () {
    s = 1;
    $(".scale").removeClass("scale");
  });

  act_eq = navIndex;
  console.log(sectionTop);
});