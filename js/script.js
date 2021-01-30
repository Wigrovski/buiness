$('.menu-header__icon').click(function(event){
  $(this).toggleClass('active');
  $('.menu-header__menu').toggleClass('active');
  if($(this).hasClass('active')){
    $('body').data('scroll',$(window).scrollTop());
  }
    $('body').toggleClass('lock');
  if (!$(this).hasClass('active')){
    $('body,html').scrollTop(parseInt($('body').data('scroll')));
  }
});

// $('.menu-header__icon').ready(function () {
//   $('.menu-header__menu').click(function (event) {
//     $('.menu-header__menu').toggleClass('active');
//     $('body').toggleClass('lock')
//   })
// })

$('body').on('click', '.tab__navitem', function (event) {
  var eq = $(this).index();
  if ($(this).hasClass('parent')) {
    var eq = $(this).parent().index();
  }
  if (!$(this).hasClass('active')) {
    $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
    if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
      $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
    }
  }
});
function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}
ibg();