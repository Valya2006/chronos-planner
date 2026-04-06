import Pagination from '../components/Pagination.js';
import '../style/Analitics.css';

export default () => {
	const analiticsDiv = document.createElement('div');
	analiticsDiv.classList.add('analitics-container')
  analiticsDiv.innerHTML = `${Pagination('Аналитика', '#FFB8A3', '/tracker', '', true, false)}`

	return analiticsDiv
}