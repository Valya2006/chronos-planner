export default () => {
	const data = [];
	const today = new Date();
	const day = today.getDay();
	const diff = day === 0 ? 6 : day - 1;
	const monday = new Date(today.setDate(today.getDate() - diff))
  
	for (let i = 0; i < 7; i += 1) {
		const day = new Date(monday);
		day.setDate(monday.getDate() + i);
		data.push(day.toLocaleDateString());
	}

	return data
}