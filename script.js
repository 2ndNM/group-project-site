<script>
  // Show more functionality for project info
  function showMore() {
    document.getElementById("moreInfo").classList.toggle("hidden");
  }

  // Open the video overlay
  function openVideo() {
    const overlay = document.getElementById("videoOverlay");
    overlay.classList.remove("hidden");
  }

  // Close video when clicking outside the video content
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("videoOverlay");
    overlay.addEventListener("click", (e) => {
      // Close when clicking on the overlay background (not the video itself)
      if (e.target === overlay) {
        closeVideo();
      }
    });
  });

  // Close the video overlay
  function closeVideo() {
    document.getElementById("videoOverlay").classList.add("hidden");
  }

  // Search functionality for the website
  document.getElementById("site-search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    
    // Function to filter sections based on query
    const filterSections = (selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        const text = el.textContent.toLowerCase();
        el.style.display = text.includes(query) ? "" : "none";
      });
    };

    // Filter team members, project info, and project video
    filterSections(".member-card");
    filterSections(".project-info");
    filterSections(".project-video");
  });
</script>
