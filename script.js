const navMenu = document.getElementById('nav-menu'),
	navWrapper = document.querySelector('.nav-wrapper')

navMenu.addEventListener('click', (e) => {
	if (navWrapper.classList.contains('visible')) {
		navWrapper.classList.remove('visible')
	} else {
		navWrapper.classList.add('visible')
	}
})
