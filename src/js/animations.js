/*document.addEventListener("DOMContentLoaded", () => {
  //about + profile pic
/*  const aboutAndProfilePic = document.querySelectorAll(
    ".about-section-content, .img-profile"
  );
  aboutAndProfilePic.forEach((item, index) => {
    item.style.setProperty("--animation-delay", `0ms`);
    item.classList.remove("hidden");
    item.classList.add("animate-in");
  });

  //nav-links and footer
  const navItems = document.querySelectorAll(".nav-item, .nav-footer");
  navItems.forEach((item, index) => {
    item.style.setProperty("--animation-delay", `${index * 100 + 600}ms`);
    item.classList.remove("hidden");
    item.classList.add("animate-in");
  });
});*/

// ABOUT SECTION ANIMATION

// SKILLS SECTION ANIMATION

// PROJECTS SECTION ANIMATION

// CONTACT SECTION ANIMATION

/*
Start of new
*/

// Once DOM is loaded, you need to set animations with the IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  // animate about section+profile pic
  document
    .querySelectorAll(".about-section-content, .img-profile")
    .forEach((el) => el.classList.add("animationCompleted"));

  // stagger nav-links and nav-footer
  document.querySelectorAll(".nav-item, .nav-footer").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animationCompleted");
    }, index * 100 + 500);
  });

  // Function to handle the intersection event
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animationCompleted");
      }
    });
  }

  // Function to handle the intersection event specifically for skill items
  function handleSkillIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillItems = entry.target.querySelectorAll(".skill-item");
        skillItems.forEach((item, index) => {
          const delay = index * 100; // 100ms stagger
          item.style.setProperty("--animation-delay", `${delay}ms`);
          item.classList.add("animationCompleted");
        });
        observer.unobserve(entry.target); // Optional: Stop observing after animation
      }
    });
  }

  // Create the IntersectionObserver
  const observer20 = new IntersectionObserver(handleIntersect, {
    threshold: 0.2,
  });
  const observer50 = new IntersectionObserver(handleIntersect, {
    threshold: 0.5,
  });
  const observer80 = new IntersectionObserver(handleIntersect, {
    threshold: 0.8,
  });
  // observer for skills
  const skillObserver = new IntersectionObserver(handleSkillIntersect, {
    threshold: 0.5,
  });
  // observer for initial load

  // TARGETS

  // Section Fade Ups: 20% threshold
  document
    .querySelectorAll(".skills-section-content, .project-section-content, .contact-section-content")
    .forEach((el) => observer20.observe(el));

  // Project cards
  
  document
    .querySelectorAll(".project-body, .project-image-container")
    .forEach((el) => observer50.observe(el));

  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }
});
