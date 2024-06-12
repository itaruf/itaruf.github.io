$(document).ready(function () {
    $('.overlay').css('visibility', 'visible').hide().fadeIn(2000);
    $('body').scrollspy({ target: '#navbar-example2' });

    var playBtn = document.getElementsByClassName("play"),
        audios = document.querySelectorAll('audio');

    for (var i = 0; i < playBtn.length; i++) {
        playBtn[i].addEventListener('mouseover', function () {
            [].forEach.call(audios, function (audio) {
                audio.play();
                audio.volume = 0.1;
            });
        }, false);
    }

    // Load navigation HTML content
    $.get("navigation.html", function (data) {
        $("#nav-placeholder").replaceWith(data);
    });

    // Load project HTML content
    $.get("projects.html", function (data) {
        $("#projects-placeholder").replaceWith(data);
    });

    // Load project HTML content
    $.get("professional.html", function (data) {
        $("#professional-placeholder").replaceWith(data);
    });
});
