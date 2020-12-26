$(document).ready(function () {
    $('h1').addClass('big');
    $('a').attr('href', 'https://bing.com');
    $('h1').click(function () {
        $('h1').removeClass('big');
    })
    $('input').keydown(function (event) {
        $('h1').text(event.key);
        $('h1').after('<button>' + event.key + '</button>');
        $('h1').before('<button>' + event.key + '</button>');
    })

    setTimeout(function () {
        $('h1').removeClass('big');
        $('h1').text('goodbye');
    }, 1000);
    $('button').click(function () {
        // $('h1').slideToggle(1000);
        $('h1').slideToggle(1000).slideToggle(1000).animate({ opacity: 0.5 });
    })
});