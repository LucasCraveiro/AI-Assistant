const inputElement = document.getElementById("input_user");

const imageWrapper = document.getElementById("image_wrapper");
const infoBlock = document.getElementById("info_blocks");

inputElement.addEventListener("click", function () {
  imageWrapper.classList.add("show");
  infoBlock.style.marginTop = "110px";
});

inputElement.addEventListener("keydown", function (event) {
  if (event.key !== "") {
    imageWrapper.classList.remove("show");
    infoBlock.style.marginTop = "0px";
  }
});

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
};

// Define a function to handle the intersection

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Get all the sections you want to lazy load
const sections = document.querySelectorAll(".lazy-section");

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
