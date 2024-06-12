document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('fri-video');

    video.addEventListener('play', () => {
        video.classList.add('hide-controls');
    });

    video.addEventListener('pause', () => {
        video.classList.remove('hide-controls');
    });

    video.addEventListener('ended', () => {
        video.classList.remove('hide-controls');
    });
});