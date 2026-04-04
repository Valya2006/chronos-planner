const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');

export const hideLayout = () => {
	header.style.display = 'none';
	sidebar.style.display = 'none';
}

export const showLayout = () => {
	header.style.display = '';
	sidebar.style.display = '';
}