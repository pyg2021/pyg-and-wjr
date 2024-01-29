var swiper = new Swiper('.swiper-container-lovewjr1', {
    pagination: '.swiper-pagination-lovewjr1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovewjr2', {
    pagination: '.swiper-pagination-lovewjr2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovewjr3', {
    pagination: '.swiper-pagination-lovewjr3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovewjr3',
    prevButton: '.swiper-button-prev-lovewjr3'
});