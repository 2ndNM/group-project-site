// Toggle "Show More" section
function toggleMoreInfo() {
  const moreInfo = document.getElementById('moreInfo');
  if (moreInfo.style.display === 'none') {
    moreInfo.style.display = 'block';
  } else {
    moreInfo.style.display = 'none';
  }
}

// Lightbox functionality
document.getElementById('projectVideo').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'flex';
});

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
    const video = document.getElementById('lightboxVideo');
    video.pause();
    video.currentTime = 0;
  }
});

// Search and highlight functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim();
    removeHighlights(document.body);
    if (term === "") return;
    highlightText(document.body, term);
  });
});

function removeHighlights(container) {
  const marks = container.querySelectorAll("mark");
  marks.forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function highlightText(container, term) {
  const regex = new RegExp(term, 'gi');
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach(node => {
    const parent = node.parentNode;
    if (parent && parent.nodeName !== 'SCRIPT' && parent.nodeName !== 'STYLE') {
      const matches = node.nodeValue.match(regex);
      if (matches) {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, match => `<mark>${match}</mark>`);
        parent.replaceChild(span, node);
      }
    }
  });
}
