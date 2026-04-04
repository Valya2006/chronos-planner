import TableSchedule from '../components/TableSchedule.js';
import '../style/Schedul.css';

export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.classList.add('schedule-container')
	scheduleDiv.innerHTML = `${TableSchedule()}`
	

	return scheduleDiv
}