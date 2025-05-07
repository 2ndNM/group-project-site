function showMore() {
  document.getElementById("moreInfo").classList.toggle("hidden");
}

function openVideo() {
  document.getElementById("videoOverlay").classList.remove("hidden");
}

function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = overlay.querySelector("video");
  video.pause();
  video.currentTime = 0;
  overlay.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("videoOverlay");
  overlay.addEventListener("click", (e) => {
    const content = document.querySelector(".overlay-content");
    if (!content.contains(e.target)) {
      closeVideo();
    }
  });

  const searchInput = document.getElementById("site-search");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const sections = [...document.querySelectorAll(".member-card, .member-list li")];

    sections.forEach((el) => {
      const text = el.textContent.toLowerCase();
      if (query === "" || text.includes(query)) {
        el.style.display = "";
        const inner = el.innerHTML.replace(/(<mark>|<\/mark>)/g, "");
        el.innerHTML = inner.replace(new RegExp(`(${query})`, "gi"), "<mark>$1</mark>");
      } else {
        el.style.display = "none";
      }
    });
  });
});
