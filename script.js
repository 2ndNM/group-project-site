function showMore() {
  const moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.toggle("hidden");
}

function openVideo() {
  console.log('openVideo() called');  // ← here
  const overlay = document.getElementById("videoOverlay");
  overlay.classList.remove("hidden", "fade-out");
  overlay.classList.add("fade-in");
  console.log('Classes after open:', overlay.className);  // ← and here
}

function closeVideo() {
  console.log('closeVideo() called');  // ← here
  const overlay = document.getElementById("videoOverlay");
  const video = overlay.querySelector("video");

  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");
  console.log('Classes before hide timeout:', overlay.className);  // ← and here

  setTimeout(() => {
    overlay.classList.add("hidden");
    if (video) video.pause();
    console.log('Classes after hide:', overlay.className);  // ← and here
  }, 300);  // Ensure this matches your fade-out animation duration (0.3s)
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
