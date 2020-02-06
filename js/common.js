(function ($) {
  if ($(window).width() <= '768') {
    setTimeout("$('.popup').css({display: 'block'})", 60000);
  } else {
    // setTimeout("$('.popup').css({display: 'block'})", 30000);
    $('body').one('mouseleave',(function (e) {
      $('.popup').css({display: 'block'});
    }));
  }
  $('.modal-end').on('click', function () {
    $('.pay-19').addClass('hidden');
    $('.pay-1').removeClass('hidden');
  });
  $('.modal-close').on('click', function () {
    $('.popup').css({display: 'none'});
  });
  $('.btn-ok').on('click', function () {
    $('.modalMob-form').css({display: 'block'});
    $('.modalMob-warning').addClass('hidden');
  });

  $('.popup').click(function (e) {
    if (e.target.className.indexOf('js-popup-close') !== -1) {
      $(this).fadeOut();
    }
  });

  $('.check').on('change', function () {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $('.submit').attr('disabled', true);
    } else {
      $(this).addClass('checked');
      $('.submit').removeAttr('disabled');
    }
  });
  $('.js-popup-open').on('click', function () {
    $('.popup').fadeIn();
  });

  setTimeout("$('.hidden').fadeIn('slow');", 300000);

})(jQuery);
