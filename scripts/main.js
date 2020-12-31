const sp_menu = document.querySelector('.sp-menu');
const menu_list = document.querySelector('.menu-list');



sp_menu.addEventListener('click',
	function(){
		sp_menu.classList.toggle('sp-menu-open');
		menu_list.classList.toggle('menu-list-open');
});

