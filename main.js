const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

$(".slider-class").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: "unslick"
        },
        {
            breakpoint: 760,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },]
});