var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backDrop = document.querySelector('.backdrop');
var btnSave = document.querySelector('.post__options_save');
var btnShare = document.querySelector('.post__options_share');
var btnPin = document.querySelector('.post__options_pin');
var btnClose = document.querySelector('.close');
var profilePhoto = document.querySelector('.profile_photo');
var navElements = document.querySelector('.mobile-nav__items');


profilePhoto.addEventListener('click', () => {
  console.log('____photo clicked!');
  let visible = false;
   navElements.classList.forEach(element => {
    visible = element === 'visible' ? true : false;
  });
  visible ? navElements.classList.remove('visible'): navElements.classList.add('visible');

});

backDrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  backDrop.classList.remove('open');
});

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backDrop.classList.add('open');
});

btnSave.addEventListener('click', function() {
  var check = false;
  btnSave.classList.forEach(element => {
    check = element === 'saved' ? true : false;
  });

  check ? btnSave.classList.remove('saved') : btnSave.classList.add('saved');
});

btnShare.addEventListener('click', function() {
  var check = false;
  btnShare.classList.forEach(element => {
    check = element === 'sending' ? true : false;
  });

  check
    ? btnShare.classList.remove('sending')
    : btnShare.classList.add('sending');
});

btnPin.addEventListener('click', function() {
  var check = false;
  btnPin.classList.forEach(element => {
    check = element === 'pinned' ? true : false;
  });

  check ? btnPin.classList.remove('pinned') : btnPin.classList.add('pinned');
});

btnClose.addEventListener('click', () =>{
  mobileNav.classList.remove('open');
  backDrop.classList.remove('open');
});

