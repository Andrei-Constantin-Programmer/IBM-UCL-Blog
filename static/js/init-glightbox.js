document.addEventListener("DOMContentLoaded", function () {
  const isDark = document.body.classList.contains("dark");

  const lightbox = GLightbox({
    onOpen: () => {
      setTimeout(() => {
        const gcontainer = document.querySelector('.glightbox-clean .gcontainer');
        if (gcontainer) {
          gcontainer.style.backgroundColor = isDark ? '#000' : '#fff';
        }
      }, 50);
    }
  });
});
