//スリック
$('.slick').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 2,
  swipe: true,
  pauseOnFocus: true,
  pauseOnHover: false,
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '0%',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 500,
        speed: 3000,
      }
    },
  ]
});

//リサイズしたらリロード
var timer = 0;
var currentWidth = window.innerWidth;
$(window).resize(function(){
    if (currentWidth == window.innerWidth) {
        return;
    }
    if (timer > 0) {
        clearTimeout(timer);
    }

    timer = setTimeout(function () {
        location.reload();
    }, 200);

});

//スムーズスクロール
// 外部ページリンク
$(window).on('load',function(){
  var hash = $( location ).attr('hash');
  if(hash){
    $('html,body').stop().scrollTop(0)
  setTimeout(function(){
      var target = $(hash).offset().top;
      target -=60;
      $('html,body').stop().scrollTop(0).animate({scrollTop: target}, 600);
    },100);
  }
  return false;
});

//ページ内リンク
  $('a[href^="#"]').click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 60;
    $("html,body").animate({scrollTop: target},500);
    return false;
  });

  //topに戻るボタン
  $(function(){
  var pagetop =$('#page_top')
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.on('click',function () {
      $('body, html').animate({ scrollTop: 0 }, 400); 
      return false;
    });
  });



//ページ遷移アニメーション
  $(window).on('load', function(){
    $('body').removeClass('is-slide');
   });
   
   $(function() {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない
   
    $('a:not([href^="#"]):not([target])').on('click', function(e){
      e.preventDefault();         // ページ遷移を一旦キャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得
   
      if (url !== '') {
        $('body').addClass('is-slide-in'); // 画面遷移前のアニメーション is-slide-in
   
        setTimeout(function () {
          window.location = url;  // 0.7秒後に取得したURLに遷移
        }, 700);
      }
      return false;
    });
   
   });