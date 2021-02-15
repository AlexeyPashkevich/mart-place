$(function () {

  $(".products__rate").rateYo({
    rating: 4.5,
    readOnly: true,
    ratedFill: "#ffc000",
    starWidth: "14px",
    spacing: "3px",
    normalFill: "#dedede",
  });


  $('.weekly-products__wrapper').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
  });

  $('.title__sort-btn').on('click', function () {
    $('.newest-products__list').toggleClass('list');
    $('.title__sort-btn').toggleClass('active');
  });

  $('.products__wrapper--followers').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
  });






  var mixer = mixitup('.products__wrapper');

});