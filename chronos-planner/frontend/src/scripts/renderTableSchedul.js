import TableSchedul from '../components/TableSchedul.js';
import getWeekDates from '../scripts/getWeekDates.js';
import '../style/Schedul.css';

const weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const dates = getWeekDates()

export default () => {
  return weekday.map((dayWeek, index) => {
    const date = dates[index]

    const tableContainer = document.createElement('div')
    tableContainer.classList.add('table-container')

    tableContainer.innerHTML = TableSchedul()

    const tableDate = document.createElement('div')
    tableDate.classList.add('date-container')
    tableDate.innerHTML = `
      <p class='day-week'>${dayWeek}</p>
      <p class='date'>${date}</p>
    `
    
    tableContainer.prepend(tableDate)
    
    return tableContainer
  })
}