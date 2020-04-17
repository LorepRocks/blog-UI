let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  let headerEl = document.querySelector('header');
  if (prevScrollpos > currentScrollPos) {
    headerEl.classList.remove('hide-header').add('show-header');
  } else {
    headerEl.classList.remove('show-header').add('hide-header');
  }
  prevScrollpos = currentScrollPos;
};
