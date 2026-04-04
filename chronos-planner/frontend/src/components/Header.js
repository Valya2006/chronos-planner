import '../style/Header.css'

export default () => {
	const header = document.getElementById('header')
	return header.innerHTML = `
	<div class='header-container'>
	  <h1>Chronos</h1>
		<nav class='navigation'>
		  <a href='/schedule' class='active'>Расписание</a>
		  <a href='/tracker'>Трекер</a>
		  <a href='/analytics'>Аналитика</a>
		</nav>
	</div>
	`
}

export function setHeaderColor(color) {
  const header = document.querySelector('.header-container');
  if (header) {
    header.style.backgroundColor = color;
  }
}