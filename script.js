document.addEventListener("DOMContentLoaded", () => {
  // 1. Preloader logic
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 1200);
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1700);
  }

  // 2. Mouse Follower
  const follower = document.getElementById("mouse-follower");
  window.addEventListener("mousemove", (e) => {
    if (follower) {
      follower.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    }
  });

  // 3. Hamburger Menu & Nav Toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      nav.classList.toggle("active");
    });
  }

  // 4. Scroll Active Navbar Tracking
  // Get all sections that have an ID corresponding to a nav link
  const sections = document.querySelectorAll("section[id], div[id='Home']"); 
  
  const handleScroll = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    if (!current && window.scrollY < 100) {
      current = "Home"; // default
    }

    // Update active nav link
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Close menu and trigger active state when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (hamburger && hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
        nav.classList.remove("active");
      }
    });
  });

  // 5. Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // Apply animation classes
  document.querySelectorAll(".facility, .services, .infrastructure, .process, .Industries, .choose, .faq-section, .Electronics, .footer").forEach(el => {
    el.classList.add("scroll-fade");
    observer.observe(el);
  });

  document.querySelectorAll(".services h2, .infrastructure h2, .process h2, .Industries h2, .choose h2, .faq-section h2, .Electronics h2").forEach(el => {
    el.classList.add("scroll-blur");
    observer.observe(el);
  });

  document.querySelectorAll(".card, .infra-card, .serve-card, .choose-card, .faq-item").forEach(el => {
    el.classList.add("scroll-card");
    observer.observe(el);
  });
});
