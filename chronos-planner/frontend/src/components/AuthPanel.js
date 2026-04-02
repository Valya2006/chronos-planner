export default () => {
	const panel = document.createElement('div');
	panel.classList.add('authpanel')
	panel.innerHTML = `
	  <div>
		  <div class='fon-violet'></div>
		  <h1>Chronos</h1>
			<p class='slogan'>Перестань гадать, куда уходит день. Визуализируй свои успехи и возвращай себе фокус вместе с Chronos</p>
      <form class='auth-form' id='loginForm' action='/login' method='POST'>
			  <input type='email' name='email' aria-label="Email" placeholder='Введите email' autofocus required/>
        <input type='password' name='password' aria-label="Password" placeholder='Password' autofocus required/>
        <div class='buttons-container'>
          <button type='button' id='registration'><p>Вход</p></button>
          <button type='button' id='authorization'><a href='' alt='Главная страница'>Регистрация</a></button>
        </div>
      </form>
    </div>
	`
	return panel;
} 