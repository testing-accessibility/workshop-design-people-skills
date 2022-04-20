const video = document.querySelector('video')

var motionQuery = matchMedia('(prefers-reduced-motion: no-preference)');
function handleReduceMotionChanged() {
    if (motionQuery.matches) {
        /* standard motion */
        video.setAttribute('autoplay', '')
    } else {
        /* do not show motion */
        video.removeAttribute('autoplay')
    }
}
motionQuery.addEventListener("change", handleReduceMotionChanged)

handleReduceMotionChanged(); // trigger once on load
