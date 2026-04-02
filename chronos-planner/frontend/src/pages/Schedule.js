import Header from '../components/Header.js'

export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.innerHTML = `
	  ${Header('#D6C8FF')}
	`

	return scheduleDiv
}