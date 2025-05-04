function showMore() {
  const moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.toggle("hidden");
}

function openVideo() {
  document.getElementById("videoOverlay").classList.remove("hidden");
}

function closeVideo() {
  document.getElementById("videoOverlay").classList.add("hidden");
}
