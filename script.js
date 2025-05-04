function showMore() {
  document.getElementById("moreInfo").classList.toggle("hidden");
}

function openVideo() {
  const overlay = document.getElementById("videoOverlay");
  overlay.classList.remove("hidden");
}

// Close when clicking outside the video content (on the overlay background)
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("videoOverlay");
  overlay.addEventListener("click", e => {
    // Close when clicking on the overlay background (not the video itself)
    if (e.target === overlay) {
      closeVideo();
    }
  });
});

function closeVideo() {
  document.getElementById("videoOverlay").classList.add("hidden");
}
