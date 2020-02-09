$(function () {
  $('#Slider').slick({
    centerMode: true,
    slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					centerMode: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 560,
				settings: {
					centerMode: true,
					slidesToShow: 1
				}
			}
		]
  });
})

