function showMore() {
  const moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.toggle("hidden");
}

function openVideo() {
  document.getElementById("videoOverlay").classList.remove("hidden");
}

function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = overlay.querySelector("video");
  overlay.classList.add("hidden");
  if (video) {
    video.pause();
  }
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
