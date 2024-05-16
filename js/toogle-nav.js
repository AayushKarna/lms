'use strict';

const toggleAsideBtn = document.getElementById('toggle-aside-btn');
const asideEl = document.getElementById('aside');
const openMiniIconEl = document.getElementById('open-mini-icon');
const closeMiniIconEl = document.getElementById('close-mini-icon');

toggleAsideBtn.addEventListener('click', function () {
  const isMini = asideEl.classList.contains('aside-mini');

  console.log(isMini);

  if (!isMini) {
    document.body.classList.remove('grid-1-by-5');
    document.body.classList.add('grid-1-by-15');
    asideEl.classList.add('aside-mini');
    openMiniIconEl.classList.add('hidden-el');
    closeMiniIconEl.classList.remove('hidden-el');
  } else {
    document.body.classList.remove('grid-1-by-15');
    document.body.classList.add('grid-1-by-5');
    asideEl.classList.remove('aside-mini');
    openMiniIconEl.classList.remove('hidden-el');
    closeMiniIconEl.classList.add('hidden-el');
  }
});
