// $('.btn').click(function () {
//     // $('.box').toggle(400);
//     // $('.box').fadeToggle('fast');
//     // $('.box').slideToggle();
// })


// $('.box').click(function () {
//     // $(this).find('.box2').toggle();
//     // $(this).find('.box2').css('background-color', 'green');
//     // $(this).find('.box2').toggleClass('box2--accent');
// })

var images = ['1.jpg', '2.jpg', '3.jpg'];
var currentImage = 0;

$.each(images, function (i) {
    $('.slider__controls').append('<div data-img="' + i + '" class="slider__control">');
});

function setCurrentSlide() {
    
    $('.slider__container').css('background-image', 'url("./img/' + images[currentImage] + '")');
    $('.slider__control').removeClass('slider__control--isActive');
    $('.slider__control[data-img=' + currentImage + ']').addClass('slider__control--isActive');
}


$('.slider__control').click(function () {
    currentImage = $(this).attr('data-img');
    setCurrentSlide();
    console.log(currentImage);
})
$('.slider__right').click(function () {
    if (currentImage > 1) {
        currentImage = 0;
    } else {
        ++currentImage;
    }
    console.log(currentImage);
    setCurrentSlide();
})
$('.slider__left').click(function () {
    if (currentImage < 1) {
        currentImage = 2;
    } else {
        --currentImage;
    }
    console.log(currentImage);
    setCurrentSlide();
})
setCurrentSlide()

// $('.accordion__control').click(function () {
//     // var data = $(this).next();
//     // if (data.is(':visible')) {
//     //     data.slideUp();
//     // } else {
//     //     $('.accordion__data').slideUp();
//     //     data.slideDown();
//     // }

//     var data = $(this).next();
//     if (data.hasClass('accordion__data--isVisible')) {
//         data.removeClass('accordion__data--isVisible');
//     } else {
//         $('.accordion__data').removeClass('accordion__data--isVisible');
//         data.addClass('accordion__data--isVisible');
//     }
// })