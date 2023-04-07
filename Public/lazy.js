const images = document.querySelectorAll(".lazyload");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.getAttribute("data-src");

      image.setAttribute("src", src);
      image.classList.remove("lazyload");
      observer.unobserve(image);
    }
  });
});

images.forEach((image) => {
  observer.observe(image);
});