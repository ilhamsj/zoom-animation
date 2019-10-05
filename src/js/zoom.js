let data = {
    mode: [
        'zoom-rotate',
        'zoom-quick',
        'zoom-point',
        'zoom-slow',
        'zoom-brightness',
        'zoom-right',
        'zoom-in',
        'zoom-blur',
    ],
};


for (var i = 0; i < data.mode.length; i++) {
    let x = $('.card:first-child').clone().removeClass('zoom-basic').addClass(data.mode[i]);
    $(x).appendTo('.card-columns');
}