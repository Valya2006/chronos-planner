import Header from '../components/Header.js'

export default () => {
	const scheduleDiv = document.createElement('div');
	scheduleDiv.innerHTML = `
		${Header('#AECBEF')}
	`

	return scheduleDiv
}