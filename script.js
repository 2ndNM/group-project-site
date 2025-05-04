<script>
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("videoOverlay");

    // Close video when clicking outside content
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeVideo();
      }
    });

    // Search filter logic
    const searchInput = document.getElementById("site-search");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();

        const sections = [
          ...document.querySelectorAll(".member-card"),
          ...document.querySelectorAll(".project-info"),
          ...document.querySelectorAll(".project-video")
        ];

        sections.forEach((el) => {
          const text = el.textContent.toLowerCase();
          const match = text.includes(query);

          el.style.display = match || query === "" ? "" : "none";

          // OPTIONAL: Highlight matching text (requires original HTML backup)
          // Uncomment if you want <mark> highlights:
          /*
          if (!el.dataset.original) {
            el.dataset.original = el.innerHTML;
          } else {
            el.innerHTML = el.dataset.original;
          }

          if (match && query) {
            const regex = new RegExp(`(${query})`, 'gi');
            el.innerHTML = el.innerHTML.replace(regex, '<mark>$1</mark>');
          }
          */
        });
      });
    }
  });

  function showMore() {
    document.getElementById("moreInfo").classList.toggle("hidden");
  }

  function openVideo() {
    const overlay = document.getElementById("videoOverlay");
    overlay.classList.remove("hidden");
  }

  function closeVideo() {
    document.getElementById("videoOverlay").classList.add("hidden");
  }
</script>
