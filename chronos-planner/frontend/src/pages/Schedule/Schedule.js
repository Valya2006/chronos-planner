import Pagination from '../../components/Pagination.js';
import { Table } from './controller/TableControler.js';
import './Schedul.css';
import getWeekDates from './scripts/getWeekDates.js';
//import { addLine, deleteLine } from './controller/tableController.js'

const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const dates = getWeekDates()

export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.classList.add('schedule-container')
	scheduleDiv.innerHTML = `
	  ${Pagination('Расписание', '#D6C8FF', '', '/tracker', false, true)}
	`
	weekdays.map((weekday, index) => {
		const date = dates[index]
		const table = new Table(index, index, weekday, date)

		scheduleDiv.append(table.element)
	})

	return scheduleDiv
}