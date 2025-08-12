const valid = new Set([65,83,68,70,71,72,74,75,76]);
const ctx = new (window.AudioContext || window.webkitAudioContext)();

function beep(){
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.type='triangle';o.frequency.value=440+Math.random()*160;
  g.gain.setValueAtTime(.001,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(.25,ctx.currentTime+.01);
  g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.12);
  o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+.13);
}

function play(k){
  const a=document.querySelector(`audio[data-key="${k}"]`);
  const el=document.querySelector(`.key[data-key="${k}"]`);
  if(!el)return;
  el.classList.add('playing');
  if(a){a.currentTime=0;a.play().catch(()=>beep());}
  else beep();
}

addEventListener('keydown',e=>{const k=e.keyCode||e.which;if(valid.has(k))play(k);});
document.querySelector('.keys').addEventListener('click',e=>{
  const b=e.target.closest('.key');if(b)play(b.dataset.key);
});
document.querySelectorAll('.key').forEach(k=>
  k.addEventListener('transitionend',e=>{
    if(e.propertyName==='transform')e.currentTarget.classList.remove('playing');
  })
);
