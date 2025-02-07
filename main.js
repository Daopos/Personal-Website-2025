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
