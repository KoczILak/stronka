document.addEventListener('click', function() {
    var audio = document.getElementById('bg-music');
    audio.muted = false;
    audio.play();
}, { once: true });