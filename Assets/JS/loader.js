  /*
   Preloader
   */
  const preloader = document.querySelector('.loader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }