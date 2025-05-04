function showMore() {
  const moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.toggle("hidden");
}

function openVideo() {
  const overlay = document.getElementById("videoOverlay");
  overlay.classList.remove("hidden", "fade-out");
  overlay.classList.add("fade-in");
}

function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = overlay.querySelector("video");

  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");

  // Delay hiding the overlay to let animation finish
  setTimeout(() => {
    overlay.classList.add("hidden");
    if (video) {
      video.pause();
    }
  }, 300); // Match animation duration (0.3s)
}

// Close when clicking outside the video
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("videoOverlay");

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closeVideo();
    }
  });
});
