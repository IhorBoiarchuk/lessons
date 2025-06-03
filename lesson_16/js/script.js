document.addEventListener('click', documentActions)

   function documentActions(e) {
	   const targetElement = e.target

	   if(targetElement.closest('.nav__button')){
		   targetElement.closest('.nav__item').classList.toggle('active') 
			}
		if (targetElement.closest('.header__icon-menu')) {
			document.body.classList.toggle('menu-open')
				}
	   }
   
