const navbar = document.getElementsByTagName("nav")[0];
const navItems = document.querySelectorAll(".nav-items > ul li");

window.addEventListener("scroll", () => {
  console.log("Scroll position: ", window.scrollY); // For debugging
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navItems.forEach((item) => {
      item.classList.add("small-font"); // Add the small font class
    });
  } else if (window.scrollY < 10) {
    navbar.classList.remove("scrolled");
    navItems.forEach((item) => {
      item.classList.remove("small-font"); // Remove the small font class
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hello = document.querySelector(".helloContainer > h1");
  const skillBoxOdd = document.querySelectorAll(
    ".programmingContainer:nth-of-type(odd)"
  );
  const skillBoxEven = document.querySelectorAll(
    ".programmingContainer:nth-of-type(even)"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset and restart animation
          entry.target.style.animation = "none";
          void entry.target.offsetWidth; // Force reflow

          // Apply correct animation based on the element
          if (entry.target === hello) {
            entry.target.style.animation = "left-move 3s forwards";
          } else if ([...skillBoxOdd].includes(entry.target)) {
            entry.target.style.animation = "right-move 3s forwards"; // Odd elements animation
          } else if ([...skillBoxEven].includes(entry.target)) {
            entry.target.style.animation = "left-move 3s forwards"; // Even elements animation
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all elements
  observer.observe(hello);
  skillBoxOdd.forEach((box) => observer.observe(box));
  skillBoxEven.forEach((box) => observer.observe(box));
});
