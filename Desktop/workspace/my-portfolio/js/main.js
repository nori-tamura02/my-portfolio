
/*global $*/

// -----------トップページに戻るボタン-------------


   // ボタンの表示／非表示を切り替える関数
function updateButton() {
    if ($(this).scrollTop() >= 300) { // 300px以上スクロールされた
        // ボタンを表示
        $(".back-to-top").fadeIn();
    } else {
        // ボタンを非表示
        $(".back-to-top").fadeOut();
    }
}

$(document).ready(function() {
    updateButton();

    // スクロールされる度にupdateButtonを実行
    $(window).scroll(updateButton);

    // ボタンをクリックしたらページトップにスクロールする
    $(".back-to-top").click(function() {
        // 600ミリ秒かけてトップに戻る
        $("html, body").animate({
            scrollTop: 0,
        }, 600);

        // ボタンのhrefに遷移しない
        return false;
    });
});


// -----------クリックしたところに戻るボタン-------------


    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top
          $('html, body').animate({
            'scrollTop': position 
          }, 500);
    });


// -----------アイテムをふわっと出す-------------

$(document).ready(function() {
  // animatedクラスの付いた要素にwaypointを登録
  $(".animated").waypoint({
    handler: function(direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === "down") { // 下方向のスクロール
        // イベント発生元の要素にfadeInUpクラスを付けることで
        // アニメーションを開始
        $(this.element).addClass("fadeInUp");

        // waypointを削除することで、この要素に対しては
        // これ以降handlerが呼ばれなくなる
        this.destroy();
      }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: "70%"
  });
});


// -----------バーガーメニュー用------------

 $(document).ready(function(){
   
   $('#movile-menu .fas').click(function(){
     $('#slidedown, .slidedown-menu').slideDown();
  });
  
  $('.close-menu .fas').click(function(){
     $('#slidedown, .slidedown-menu').slideUp();
  });
  
  $('.header-hover').click(function(){
     $('#slidedown, .slidedown-menu').slideUp();
  });
  
  $('#slidedown').click(function(){
     $('#slidedown, .slidedown-menu').slideUp();
  });
  
 });

 