// Slide deck controls: arrow keys, buttons, F for full screen, Esc to go back to the slides list, and a #n link to each slide.
(function () {
  var stage = document.getElementById('stage');
  var slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));
  var count = document.getElementById('count');
  var at = 0;

  function fit() {
    var bar = document.fullscreenElement ? 0 : 44;
    var scale = Math.min(window.innerWidth / 1280, (window.innerHeight - bar) / 720);
    stage.style.transform = 'scale(' + scale + ')';
  }

  // Shrink the text on a slide that holds more than fits.
  function shrink(slide) {
    var size = 34;
    slide.style.fontSize = '';
    while (slide.scrollHeight > slide.clientHeight && size > 20) {
      size -= 1;
      slide.style.fontSize = size + 'px';
    }
  }

  function show(n) {
    at = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, i) { s.classList.toggle('on', i === at); });
    shrink(slides[at]);
    count.textContent = (at + 1) + ' of ' + slides.length;
    history.replaceState(null, '', '#' + (at + 1));
  }

  function full() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  }

  document.getElementById('prev').onclick = function () { show(at - 1); };
  document.getElementById('next').onclick = function () { show(at + 1); };
  document.getElementById('full').onclick = full;
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); show(at + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); show(at - 1); }
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'f' || k === 'F') full();
    // In full screen the browser uses Esc to leave full screen, so this runs only outside it.
    else if (k === 'Escape' && !document.fullscreenElement) location.href = document.querySelector('.bar a').href;
  });
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', fit);

  fit();
  show((parseInt(location.hash.slice(1), 10) || 1) - 1);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { shrink(slides[at]); });
})();
