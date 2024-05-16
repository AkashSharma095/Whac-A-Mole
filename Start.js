document.addEventListener('DOMContentLoaded', function () {
    var audioClick = document.getElementById('audioClick');
    var audioHover = document.getElementById('audioHover');
    var soundIcon = document.getElementById('sound');
    var links = document.querySelectorAll('.menu a');

    // Toggle play/pause on sound icon click
    soundIcon.addEventListener('click', function () {
        if (audioClick.paused || audioClick.ended) {
            audioClick.play();
        } else {
            audioClick.pause();
        }
    });

    // Play hover sound on sound icon hover
    soundIcon.addEventListener('mouseover', function () {
        audioHover.play();
    });

    // Play click sound on menu link click
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            audioClick.play();
        });
    });
});

