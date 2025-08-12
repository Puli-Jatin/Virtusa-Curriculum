function playSound(e) {
  const code = e.keyCode || e.which;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (!audio || !key) return;

  audio.currentTime = 0;  // rewind so it can retrigger fast
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // only after scale finishes
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(k => k.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
