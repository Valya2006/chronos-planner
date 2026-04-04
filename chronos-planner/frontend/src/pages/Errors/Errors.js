import './errors.css';
import errorImage from '/src/assets/error-404.png'

export default () => {
	const divErrors = document.createElement('div')
	divErrors.classList.add('errors-continer')
	divErrors.innerHTML = `
	  <div class='error-404'>
		  <img src=${errorImage} alt='Ошибка 404'/>
			<h1>404</h1>
			<div class='error-text'>
				<p>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует.
				Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.
				</p>
			</div>
			<div class='back'><a href='/schedule'>Перейти на Главную</a></div>
		</div>
	`
	return divErrors
}