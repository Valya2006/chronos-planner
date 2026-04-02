import '../style/Header.css'

export default (background) => {
	return `
	<div class='header-container' style="background-color: ${background}">
	  <h1>Chronos</h1>
		<nav class='navigation'>
		  <a href='/schedule' class='active'>Расписание</a>
		  <a href='/tracker'>Трекер</a>
		  <a href='/analytics'>Аналитика</a>
		</nav>
	</div>
	`
}