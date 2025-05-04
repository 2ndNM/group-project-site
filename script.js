function showMore() {
  const moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.toggle("hidden");
}

function openVideo() {
  console.log('openVideo() called');
  const preview = document.getElementById("videoPreview");
  if (preview) preview.pause();              // ← pause the preview
  const overlay = document.getElementById("videoOverlay");
  overlay.classList.remove("hidden", "fade-out");
  overlay.classList.add("fade-in");
  console.log('Classes after open:', overlay.className);
}

function closeVideo() {
  console.log('closeVideo() called');
  const overlay = document.getElementById("videoOverlay");
  const lightboxVideo = overlay.querySelector("video");
  const preview = document.getElementById("videoPreview");

  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");
  console.log('Classes before hide timeout:', overlay.className);

  setTimeout(() => {
    overlay.classList.add("hidden");
    if (lightboxVideo) lightboxVideo.pause();
    if (preview) preview.play();            // ← resume preview
    console.log('Classes after hide:', overlay.className);
  }, 300);
}

// Close when clicking outside the video
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("videoOverlay");

  overlay.addEventListener("click", function (e) {
    console.log('Overlay clicked, target:', e.target);
    if (e.target === overlay) {
      closeVideo();
    }
  });
});
