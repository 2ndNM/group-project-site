function showMore() {
  const moreInfo = document.getElementById('moreInfo');
  moreInfo.classList.toggle('hidden');
}

function openVideo() {
  const overlay = document.getElementById('videoOverlay');
  overlay.classList.remove('hidden');
  overlay.classList.remove('fade-out');
  overlay.classList.add('fade-in');
}

function closeVideo() {
  const overlay = document.getElementById('videoOverlay');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300); // Match duration of fade-out
}
