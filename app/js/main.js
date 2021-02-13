$(function () {

  $(".weekly-products__rate").rateYo({
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

});