const images = document.querySelectorAll('.gallery-image');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
    }
  });
});

images.forEach((image) => {
    observer.observe(image);
});