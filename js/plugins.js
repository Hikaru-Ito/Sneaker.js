// プラグインを読込むのに使用

//
// Tap Effect
//
(function() {
  var init = function() {
    $('body').on('touchstart touchend', '.tap', touchEventHandler);
  };

  var touchEventHandler = function(e) {
    if (e.type === 'touchstart') {
      $(this).addClass('tapStyle');
      //media1.play();
    } else {
      $(this).removeClass('tapStyle');
    }
  };

  $(init); // onload
})();


//
// Fast Click
//
$(function() {
    FastClick.attach(document.body);
});


//
// Monaca Viewport
//
monaca.viewport({
	width:320
});


