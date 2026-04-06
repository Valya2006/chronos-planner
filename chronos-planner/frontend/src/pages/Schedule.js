import Pagination from '../components/Pagination.js';
import '../style/Schedul.css';
import renderTableSchedul from '../scripts/renderTableSchedul.js';


export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.classList.add('schedule-container')
	scheduleDiv.innerHTML = `
	  ${Pagination('Расписание', '#D6C8FF', '', '/tracker', false, true)}
	`
	 const tables = renderTableSchedul();
    tables.forEach(table => {
        scheduleDiv.appendChild(table);
    });
	

	return scheduleDiv
}