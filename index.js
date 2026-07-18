document.addEventListener('click', function() {
    var audio = document.getElementById('bg-music');
    audio.muted = false;
    audio.play();

    var tekstPrzedDIV = document.querySelector('.tekstPrzedDIV');

    if (tekstPrzedDIV) {
        tekstPrzedDIV.style.opacity = 0;
    }
}, { once: true });