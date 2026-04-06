import Schedule from './pages/Schedule.js';
import Tracker from './pages/Tracker.js';
import Analytics from './pages/Analytics.js';
import { hideLayout, showLayout } from './scripts/layout.js';
import { setHeaderColor } from './components/Header.js';
import ErrorPage from './pages/Errors/Errors.js';

import data from './scripts/getWeekDates.js';


const routes = [
	{ 'path': '/schedule', 'component': Schedule},
	{ 'path': '/tracker', 'component': Tracker},
	{ 'path': '/analytics', 'component': Analytics},
]

const pageColors = {
	'/schedule': '#D6C8FF',
	'/tracker': '#AECBEF',
	'/analytics': '#FFB8A3',
}

const navigate = (pathname) => {
  for (const route of routes) {
    const pattern = route.path.replace(/:[^/]+/g, '([^/]+)') + '/?$'
    const regex = new RegExp('^' + pattern)

    if (regex.test(pathname)) {
      return route.component
    }
  }
	hideLayout() // убираем шапку и боковое меню со страницы
  return ErrorPage
}

// обработка ссылок навигации
function updateActiveLink() {
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll('.navigation a');
  
  links.forEach((link) => {
    link.classList.remove('active');
    const { pathname } = new URL(link.href, window.location.origin);
    if (currentPage === pathname) {
      link.classList.add('active');
    }
  });
}

const handleLinkClick = (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (href && (href.startsWith('/') && !href.startsWith('//'))) {
    e.preventDefault();
    window.history.pushState({}, '', href);
		mountRoute();
  }
};

export const mountRoute = async () => {
  const href = (window.location.href).replace(/\/+$/, '')
  if (window.location.href.at(-1) === '/') history.replaceState({}, '', href)
  const { pathname } = new URL(href);
  console.log(`Вызов страницы ${pathname}`)
	showLayout() // возвращаем шапку и меню на страницу

  // меняем цвет в зависимости от страницы
  const color = pageColors[pathname] || '#D6C8FF';
  setHeaderColor(color)

  const element = navigate(pathname)
  const mainContent = document.querySelector('#main-content')
	mainContent.innerHTML = ''
	const el = await element()
  mainContent.appendChild(el)
	
	updateActiveLink()
}

document.addEventListener('click', handleLinkClick);

window.addEventListener('popstate', () => {
  mountRoute();
});