document.addEventListener("DOMContentLoaded", () => {
  // Add a click event to navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`You clicked on ${e.target.textContent}`);
    });
  });

  // Dynamically update the hero section text
  const heroHeading = document.querySelector(".hero h2");
  const heroText = document.querySelector(".hero p");

  setTimeout(() => {
    heroHeading.textContent = "Explore the Future with Us";
    heroText.textContent =
      "We bring innovation and excellence to your doorstep.";
  }, 3000);

  // Add interactivity to features
  const features = document.querySelectorAll(".feature");
  features.forEach((feature, index) => {
    feature.addEventListener("mouseover", () => {
      feature.style.backgroundColor = "#d3d3d3";
    });
    feature.addEventListener("mouseout", () => {
      feature.style.backgroundColor = "";
    });
  });
});
