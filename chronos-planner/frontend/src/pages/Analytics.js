import Header from '../components/Header.js'

export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.innerHTML = `
		${Header('#FFB8A3')}
	`

	return scheduleDiv
}