var moreBtn = document.querySelector('.options');
var moreOptions = document.querySelector('.more_options');
var optionsIcon = document.querySelector('.options_icon');
moreBtn.addEventListener('click', () => {
  let visible = false;
  moreOptions.classList.forEach(element => {
    visible = element === 'show' ? true : false;
  });
  if(visible){
    moreOptions.classList.remove('show')
    optionsIcon.classList.remove('rotate');
  }else{
      moreOptions.classList.add('show');
      optionsIcon.classList.add('rotate');
  }
  
});

