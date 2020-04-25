function backToTop() {

    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 500) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();

let bgs = document.querySelectorAll('.bg');
let current = 0;

function slider() {
    for (let i = 0; i < bgs.length; i++) {
        bgs[i].classList.add('opacity0');
    }
    bgs[current].classList.remove('opacity0');
}

slider();

document.querySelector('.prev').onclick = function () {
    if (current - 1 ==  -1) {
        current = bgs.length - 1;
    } else {
        current--;
    }
    slider();
}
document.querySelector('.next').onclick = function () {
    if (current + 1 ==  bgs.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
}