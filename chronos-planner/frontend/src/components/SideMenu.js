import '../style/SideMenu.css'

export default () => {
	const today = new Date();
	const dateString = today.toLocaleDateString('ru-RU');
	const sideMenu = document.getElementById('sidebar')
	return sideMenu.innerHTML = `
	<aside class='sidebar'>
	  <p>${dateString}</p>
	  <ul class='sidebar-ul'>
		  <hr class="divider">
		  <li><a href='/settings id="settings-btn"'>Настройки</a></li>
			<hr class="divider">
		  <li><a href='/archive' data-link>Архив</a></li>
			<hr class="divider">
		  <li><a href='/calendar' id="calendar-btn">Календарь</a></li>
			<hr class="divider">
		  <li><a href='/checklist' data-link>Чек лист</a></li>
			<hr class="divider">
		</ul>
	</aside>
	`
}