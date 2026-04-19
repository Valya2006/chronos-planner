import Pagination from '../../components/Pagination.js';
import './Tracker.css';

export default () => {
	const trackerDiv = document.createElement('div');
  trackerDiv.classList.add('tracker-container')
	trackerDiv.innerHTML = `${Pagination('Трекер', '#AECBEF', '/schedule', '/analytics', true, true)}`

	return trackerDiv
}