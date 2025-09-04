const overlay = document.getElementById("overlay");
const menuBtn = document.querySelector(".toggle-btn");


    function toggleSidebar() {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    // Close sidebar if clicked outside
    document.addEventListener("click", function(event) {
      if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(event.target) &&
        !event.target.classList.contains("toggle-btn")
      ) {
        toggleSidebar();
      }
    });


    // IntersectionObserver → Show button only after hero is gone
  const observer = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      // Hero visible → hide button
      menuBtn.classList.remove("visible");
    } else {
      // Hero not visible → show button
      menuBtn.classList.add("visible");
    }
  }, { threshold: 0.1 });

  observer.observe(hero);
