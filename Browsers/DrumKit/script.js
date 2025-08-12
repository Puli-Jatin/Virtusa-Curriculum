const valid = new Set([65,83,68,70,71,72,74,75,76]); // A S D F G H J K L

function play(k) {
  const a = document.querySelector(`audio[data-key="${k}"]`);
  const el = document.querySelector(`.key[data-key="${k}"]`);
  if (!a || !el) return;
  a.currentTime = 0;
  a.play().catch(()=>{});
  el.classList.add('playing');
}

addEventListener('keydown', e => {
  const k = e.keyCode || e.which;
  if (valid.has(k)) play(k);
});

document.querySelector('.keys').addEventListener('click', e => {
  const b = e.target.closest('.key');
  if (b) play(b.dataset.key);
});

document.querySelectorAll('.key').forEach(k =>
  k.addEventListener('transitionend', e => {
    if (e.propertyName === 'transform') e.currentTarget.classList.remove('playing');
  })
);
