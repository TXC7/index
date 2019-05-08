
$(document).ready(function() {
var lise = $('.img-character');
var show = $('.showimg');
var leftbtn = $('.btnL');
var rightbtn = $('.btnR');
var close = $('.close');
var num = 0;
    var num = $(this).index();
    lise.on('click', function() {
        var src = $('img', this).prop('src');
        $('img', show).prop('src', src);
        show.addClass('active');
    })
    close.click(function() {
        show.removeClass('active');
    })
    rightbtn.click(function() {
        num++;
        if (num >= lise.length) {
            num = 0;
        }
        var url = lise.eq(num).find('img').prop('src');
        $('img', show).prop('src', url);
    })
    leftbtn.click(function() {
        num--;
        if (num <= 0) {
            num = lise.length;
        }
        var url = lise.eq(num).find('img').prop('src');
        $('img', show).prop('src', url);
    })
})