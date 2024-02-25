
const swiper = document.querySelector('.slide-content');

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiper.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    swiper.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});
